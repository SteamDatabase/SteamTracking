(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [616],
  {
    chunkid: (module) => {
      module.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3FIjY",
        FocusRing: "focusring_FocusRing_1wPpl",
        flash: "focusring_flash_1RqM3",
        growOutline: "focusring_growOutline_2o99S",
        fadeOutline: "focusring_fadeOutline_zn08h",
        blinker: "focusring_blinker_1aef_",
        DebugFocusRing: "focusring_DebugFocusRing_1uiTT",
        FocusRingOnHiddenItem: "focusring_FocusRingOnHiddenItem_2rIZm",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        InitializeGamepadNavigation: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return "object" == typeof _ && null !== _ && "value" in _;
      }
      function _(_, _) {
        return _(_) && _(_)
          ? _.value === _.value &&
              Boolean(_.bShowOnLeft) == Boolean(_.bShowOnLeft) &&
              Boolean(_.bShowOnFloatingVRFooter) ==
                Boolean(_.bShowOnFloatingVRFooter)
          : _ === _;
      }
      !(function (_) {
        (_[(_.GAMEPAD = 0)] = "GAMEPAD"),
          (_[(_.KEYBOARD = 1)] = "KEYBOARD"),
          (_[(_.APPLICATION = 2)] = "APPLICATION"),
          (_[(_.BROWSER = 3)] = "BROWSER"),
          (_[(_.AUTOFOCUS = 4)] = "AUTOFOCUS");
      })(_ || (_ = {}));
      let _ = {
        [_._._]: "vgp_onok",
        [_._.CANCEL]: "vgp_oncancel",
        [_._.SECONDARY]: "vgp_onsecondaryaction",
        [_._.OPTIONS]: "vgp_onoptions",
        [_._.START]: "vgp_onmenu",
      };
      function _(_, _, _) {
        return (
          _.addEventListener(_, _),
          () =>
            (function (_, _, _) {
              _.removeEventListener(_, _);
            })(_, _, _)
        );
      }
      function _(_, _) {
        return _(_, "vgp_ondirection", _(_));
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
        return (_) => {
          !1 !== _(_) && (_.stopPropagation(), _.preventDefault());
        };
      }
      function _(_) {
        const {
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
          void 0 !== _ && (_[_._._] = _),
          void 0 !== _ && (_[_._.CANCEL] = _),
          void 0 !== _ && (_[_._.SECONDARY] = _),
          void 0 !== _ && (_[_._.OPTIONS] = _),
          void 0 !== _ && (_[_._.START] = _),
          _
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_NavigationController;
        m_postMessage;
        m_bIsGamepadInputExternallyControlled = !1;
        constructor(_) {
          if (
            ((this.m_NavigationController = _),
            (0, _._)("BrowserView.RegisterForMessageFromParent") &&
              (0, _._)("BrowserView.PostMessageToParent"))
          )
            (this.m_bIsGamepadInputExternallyControlled = !0),
              (this.m_postMessage = new _._()),
              this.m_NavigationController.UpdateSourceToGamepad();
          else {
            const _ = window.top;
            _ && _ != window.self
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new _._(_)))
              : ((this.m_bIsGamepadInputExternallyControlled = !1),
                (this.m_postMessage = new _._()));
          }
          this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (_) => this.PostButtonPressToSteam(_.detail.button),
            ),
            this.UpdateActionDescriptions({}),
            this.SendGameInputState("CGamepadWebBridgeClient constructor");
        }
        RegisterForFocusChanged(_) {
          return _.FocusChangedCallbacks.Register(this.OnFocusChanged)
            .Unregister;
        }
        BIsGamepadInputExternallyControlled() {
          return this.m_bIsGamepadInputExternallyControlled;
        }
        BFromActiveNavTree(_, _) {
          let _ = _?.Tree;
          return _ || (_ = _?.Tree), _ && _.Controller.IsActiveFocusNavTree(_);
        }
        OnFocusChanged(_, _, _) {
          this.BFromActiveNavTree(_, _) &&
            this.OnActionDescriptionTargetChanged(_);
        }
        UpdateActionDescriptions(_) {
          this.m_postMessage.PostMessage({
            type: "UpdateActionDescriptions",
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
            const _ = () =>
              this.UpdateActionDescriptions(
                _.GetActiveActionDescriptions() ?? {},
              );
            _();
            for (let _ = _; null != _; _ = _.Parent)
              this.m_rgCallbackRegistrations.push(
                _.ActionDescriptionChangedCallbackList.Register(_).Unregister,
              );
          } else this.UpdateActionDescriptions({});
        }
        OnMessage(_) {
          switch (_.type) {
            case "TakeFocus":
              this.m_NavigationController.TakeFocusChangingIFrame();
              break;
            case "ForwardedGameEventDetail":
              this.m_NavigationController.DispatchVirtualGamepad(
                _.data.event,
                _.data.details,
              );
          }
        }
        SendGameInputState(_) {
          let _ = _._.Basic;
          window.bSupportsGamepadUI && (_ = _._.Full),
            this.m_postMessage.PostMessage({
              type: "GameInputState",
              data: {
                source: _,
                support: _,
              },
            });
        }
        PostButtonPressToSteam(_) {
          this.m_postMessage.PostMessage({
            type: "ButtonPressed",
            data: {
              button: _,
            },
          });
        }
        PostPageUnloading() {
          this.m_postMessage.PostMessage({
            type: "PageUnloading",
            data: {
              location: window.location.href,
            },
          });
        }
      }
      function _(_) {
        return null != _ && void 0 !== _.focus;
      }
      (0, _._)([_._], _.prototype, "OnFocusChanged", null),
        (0, _._)([_._], _.prototype, "OnMessage", null),
        (0, _._)([_._], _.prototype, "PostPageUnloading", null);
      function _(_, _, _) {
        if ("childList" === _.type) {
          for (let _ = 0; _ < _.addedNodes.length; _++) {
            const _ = _.addedNodes[_];
            if (_.nodeType === Node.ELEMENT_NODE) {
              const _ = _;
              _.parentElement && _(_);
            }
          }
          for (let _ = 0; _ < _.removedNodes.length; _++) {
            const _ = _.removedNodes[_];
            _.nodeType === Node.ELEMENT_NODE && __webpack_require__?.(_);
          }
        }
      }
      const _ = "";
      class _ extends _._ {
        m_lastButtonDown = _._.INVALID;
        constructor(_) {
          super(),
            this.SetSourceType(_._.KEYBOARD_SIMULATOR),
            _.addEventListener("keydown", this.OnKeyDown, {
              capture: !0,
            }),
            _.addEventListener("keyup", this.OnKeyUp, {
              capture: !0,
            }),
            _.addEventListener("blur", this.Reset);
        }
        OnKeyDown(_) {
          const _ = this.TranslateKey(_);
          _ != _._.INVALID &&
            (_.preventDefault(),
            _.stopPropagation(),
            _ != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(_),
              (this.m_lastButtonDown = _)));
        }
        OnKeyUp(_) {
          const _ = this.TranslateKey(_);
          _ != _._.INVALID &&
            (this.OnButtonUp(_),
            (this.m_lastButtonDown = _._.INVALID),
            _.preventDefault(),
            _.stopPropagation());
        }
        Reset() {
          this.m_lastButtonDown != _._.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = _._.INVALID));
        }
        GetKeycodeFromEvent(_) {
          return "linux" === _ && _.key.length > 1
            ? _.key || _.code
            : _.code || _.key;
        }
        BShouldSwallowEventForTextInputWorkaround(_) {
          if (
            !(
              _(_.target) &&
              ("INPUT" === _.target.nodeName ||
                "TEXTAREA" === _.target.nodeName ||
                _.target.hasAttribute("contenteditable"))
            )
          )
            return !1;
          if (_.target.hasAttribute("contenteditable")) return !0;
          const _ = this.GetKeycodeFromEvent(_);
          let _ = _.target;
          if ("range" === _.type) return !1;
          const _ = Array.from(
            _.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((_) =>
            Array.from(_.classList).some((_) => _.includes("virtualkeyboard")),
          );
          switch (_) {
            case "ArrowUp": {
              if (_) return !0;
              let _ = _?.value.indexOf("\n");
              return (
                "TEXTAREA" === _.target.nodeName &&
                _ >= 0 &&
                _ < (_?.selectionStart ?? 0)
              );
            }
            case "ArrowDown": {
              if (_) return !0;
              let _ = _?.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === _.target.nodeName &&
                _ >= 0 &&
                _ >= (_?.selectionStart ?? 0) &&
                (_?.selectionEnd ?? 0) < _?.value.length
              );
            }
            case "ArrowLeft":
              return (
                !!_ ||
                ((_?.selectionStart ?? 0) > 0 && (_?.selectionEnd ?? 0) > 0)
              );
            case "ArrowRight":
              return (
                !!_ ||
                ((_?.selectionStart ?? 0) < _?.value.length &&
                  (_?.selectionEnd ?? 0) < _?.value.length)
              );
            case "Enter":
            case "Backspace":
              return !0;
            default:
              return !1;
          }
        }
        TranslateKey(_) {
          const _ = this.GetKeycodeFromEvent(_);
          if (_.altKey) return _._.INVALID;
          if (this.BShouldSwallowEventForTextInputWorkaround(_))
            return _._.INVALID;
          if (_.ctrlKey)
            if (_.shiftKey)
              switch (_) {
                case "Digit4":
                  return _._.TRIGGER_LEFT;
                case "Digit5":
                  return _._.TRIGGER_RIGHT;
                default:
                  return _._.INVALID;
              }
            else
              switch (_) {
                case "Digit1":
                  return _._.STEAM_GUIDE;
                case "Digit2":
                  return _._.STEAM_QUICK_MENU;
                case "Digit3":
                case "Digit9":
                  return _._.SELECT;
                case "Digit4":
                  return _._.BUMPER_LEFT;
                case "Digit5":
                  return _._.BUMPER_RIGHT;
                case "Digit6":
                  return _._.LSTICK_CLICK;
                case "Digit7":
                  return _._.RSTICK_CLICK;
                case "Digit8":
                  return _._.OPTIONS;
                case "Digit0":
                  return _._.START;
              }
          else if (!_.shiftKey)
            switch (_) {
              case "Escape":
                return _._.CANCEL;
              case "Enter":
                return _._._;
              case "Backspace":
                return _._.SECONDARY;
              case "ArrowUp":
                return _._.DIR_UP;
              case "ArrowDown":
                return _._.DIR_DOWN;
              case "ArrowLeft":
                return _._.DIR_LEFT;
              case "ArrowRight":
                return _._.DIR_RIGHT;
            }
          return _._.INVALID;
        }
      }
      (0, _._)([_._], _.prototype, "OnKeyDown", null),
        (0, _._)([_._], _.prototype, "OnKeyUp", null),
        (0, _._)([_._], _.prototype, "Reset", null);
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        SyncStore(_) {
          return this.Subscribe(_).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, _._)([_._], _.prototype, "SyncStore", null),
        (0, _._)([_._], _.prototype, "GetValue", null);
      class _ extends _ {}
      class _ extends _ {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(_, _) {
          super(),
            (this.m_callbacks = new _._()),
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
      }
      function _(_, _) {
        return new _(_, _);
      }
      class _ extends _ {
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
      }
      class _ {
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
              _(), __webpack_require__();
            }),
              (this.m_fnOnCancel = _);
          });
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          if (this.m_schTimer) {
            const _ = this.m_fnOnCancel;
            clearTimeout(this.m_schTimer), this.Reset(), _ && _();
          }
        }
        Reset() {
          (this.m_schTimer = void 0),
            (this.m_fnCallback = void 0),
            (this.m_fnOnCancel = void 0);
        }
        ScheduledInternal() {
          const _ = this.m_fnCallback;
          this.Reset(), _?.();
        }
      }
      (0, _._)([_._], _.prototype, "ScheduledInternal", null);
      class _ {
        m_vecCallbacks = [];
        Push(_) {
          this.m_vecCallbacks.push(_);
        }
        PushArrayRemove(_, _) {
          this.m_vecCallbacks.push(() => _._(_, _));
        }
        Unregister() {
          for (const _ of this.m_vecCallbacks) _();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, _._)([_._], _.prototype, "Unregister", null),
        (function (_) {
          (_[(_.Debug = 0)] = "Debug"),
            (_[(_.Info = 1)] = "Info"),
            (_[(_.Warning = 2)] = "Warning"),
            (_[(_.Error = 3)] = "Error");
        })(_ || (_ = {}));
      class _ {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(_, _) {
          (this.m_sName = _),
            (this.m_fnIdGenerator = _),
            _.Get().RegisterLogName(_);
        }
        Debug(..._) {
          this.Log(_.Debug, ..._);
        }
        Info(..._) {
          this.Log(_.Info, ..._);
        }
        Warning(..._) {
          this.Log(_.Warning, ..._);
        }
        Error(..._) {
          this.Log(_.Error, ..._);
        }
        Assert(_, ..._) {
          _ || this.Log(_.Error, "Assertion failed:", ..._);
        }
        IsDebugEnabled() {
          return _.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(_, ..._) {
          const _ = _.Get().IsDebugLogEnabled(this.m_sName);
          if (_ == _.Debug && !_) return;
          let _ = this.m_sName;
          const _ = this.m_fnIdGenerator?.() ?? null;
          null != _ && (_ += " (" + _ + ")");
          _(
            _,
            _,
            _.Get().IncludeBacktraceInLog,
            _.Get().AllowCSSInLogStyling,
            _,
            this.m_sName,
            ..._,
          );
        }
      }
      (0, _._)([_._], _.prototype, "Debug", null),
        (0, _._)([_._], _.prototype, "Info", null),
        (0, _._)([_._], _.prototype, "Warning", null),
        (0, _._)([_._], _.prototype, "Error", null),
        (0, _._)([_._], _.prototype, "Assert", null);
      class _ {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        static k_AllowCSSInLogColors_StorageKey = "AllowCSSInLogColors";
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_bAllowCSSInLogStyling = !0;
        m_SettingsChangedCallback = new _._();
        m_bLoading = !0;
        constructor() {
          this.LoadSettings();
        }
        LogAsLogManager(..._) {
          _(
            _.Info,
            !0,
            this.IncludeBacktraceInLog,
            this.AllowCSSInLogStyling,
            "LogManager",
            "LogManager",
            ..._,
          );
        }
        async LoadSettings() {
          const _ = (_, _) => {
            try {
              0;
              const _ = localStorage.getItem(_);
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
          const _ = _(_.k_EnabledLogNames_StorageKey, void 0);
          if (Array.isArray(_)) {
            this.m_setEnabledDebugLogs = new Set(_);
            for (const _ of _) this.m_setKnownDebugLogs.add(_);
            this.LogAsLogManager(
              "Loaded debug enabled log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
          } else 0;
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
              "Saved enabled debug log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        PrintEnabledLogs(..._) {
          _ &&
            _.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${_.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            this.LogAsLogManager(
              "Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        static Get() {
          return (
            null == window.g_LogManager && (window.g_LogManager = new _()),
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
          this.IsLogName(_)
            ? (_
                ? this.m_setEnabledDebugLogs.add(_)
                : this.m_setEnabledDebugLogs.delete(_),
              this.m_SettingsChangedCallback.Dispatch(),
              await this.SaveSettings())
            : console.warn(
                `No log named "${_}", available logs:`,
                this.GetLogNames(),
              );
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
      }
      function _(_, _, _, _, _, _, ..._) {
        let _,
          _ = _;
        if (
          (_ &&
            (_ =
              (function (_) {
                switch (_) {
                  case _.Debug:
                    return String.fromCodePoint(128027);
                  case _.Info:
                    return String.fromCodePoint(8505);
                  case _.Warning:
                    return String.fromCodePoint(9888);
                  case _.Error:
                    return String.fromCodePoint(128165);
                }
              })(_) +
              " " +
              _),
          _ && _)
        ) {
          const _ = (function (_) {
              let _ = 0;
              for (let _ = 0; _ < _.length; _++)
                _ = _.charCodeAt(_) + ((_ << 5) - _);
              return [255 & _, (_ >> 8) & 255, (_ >> 16) & 255];
            })(_).map((_, _) =>
              Math.round(
                Math.max(
                  0,
                  Math.min(255, 255 * (0.8 * (_ / 255 - 0.5) + 0.15)),
                ),
              ),
            ),
            _ = (299 * (_ = _)[0] + 587 * _[1] + 114 * _[2]) / 1e3 >= 128,
            _ = _.length >= 1 && "string" == typeof _[0] && _[0].includes("%c"),
            _ = _ && _.shift();
          _ = [
            `%c${_}%c:${_ ? " %c" + _ : ""}`,
            `color: ${_ ? "black" : "white"}; background: rgb(${_.join(",")}); padding: 0 1ch; border-radius: 3px;`,
            "color: transparent; margin-right: -1ch",
            ...(_ ? [""] : []),
            ..._,
          ];
        } else _ = [`${_}:`, ..._];
        var _;
        if (_)
          console.groupCollapsed(..._),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (_) {
            case _.Debug:
            case _.Info:
              console.log(..._);
              break;
            case _.Warning:
              console.warn(..._);
              break;
            case _.Error:
              console.clogerror
                ? console.clogerror(3, ..._)
                : console.error(..._);
          }
      }
      function _(_, _, ..._) {
        console.assert
          ? 0 == _.length
            ? console.assert(!!_, _)
            : console.assert(!!_, _, ..._)
          : _ || console.warn(_, ..._);
      }
      function _(_) {
        return null != _ && void 0 !== _.focus;
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
      (window.DebugLogEnable = (..._) => _.Get().SetDebugLogsEnabled(!0, ..._)),
        (window.DebugLogDisable = (..._) =>
          _.Get().SetDebugLogsEnabled(!1, ..._)),
        (window.DebugLogEnableAll = () => _.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => _.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          _.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          _.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = () => _.Get().GetLogNames()),
        (window.DebugLogEnabled = (..._) => _.Get().PrintEnabledLogs(..._)),
        (window.EnableSteamConsole = (_ = !0) =>
          _.Get().SetDebugLogEnabled("SteamClient", _));
      function _(_, _) {
        let _ = _?.parentElement;
        for (; _; ) {
          if (_(_)) {
            const _ = window.getComputedStyle(_);
            if ("fixed" == _.position || "sticky" == _.position) break;
            if (
              !(
                (_ && "x" != _) ||
                ("scroll" != _.overflowX && "auto" != _.overflowX)
              )
            )
              break;
            if (
              !(
                (_ && "y" != _) ||
                ("scroll" != _.overflowY && "auto" != _.overflowY)
              )
            )
              break;
          }
          _ = _.parentElement;
        }
        return _(_) ? _ : null;
      }
      function _(_, _) {
        if (!("ownerDocument" in _)) return !0;
        const _ = _.ownerDocument.defaultView.getComputedStyle(_),
          _ = "x" === _ ? _.overflowX : _.overflowY;
        return "auto" === _ || "scroll" === _;
      }
      const _ = {
        _: "y",
        _: "x",
      };
      const _ = new _("FocusHistory"),
        _ = _.Debug;
      class _ {
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
          let _;
          const [_, _] = _.GetChildren();
          _.length &&
            -1 != _ &&
            _ &&
            (_ = _.map((_, _) => _.SerializeNavNode(_, _ == _ || _, _)));
          const _ = {
            rgChildren: _,
          };
          return (
            _.NavKey && (_.sNavKey = _.NavKey),
            -1 != _ && (_.iActiveChild = _),
            _
          );
        }
        static RestoreSerializedNavState(_, _, _ = 0) {
          const { root: _, bHadFocus: _ } = _;
          _.Tree.Controller.RestoreHistoryTransaction(() => {
            _.RestoreSerializedNavNode(_, _),
              (1 == _ || (0 == _ && _)) && _.BTakeFocus(_.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(_, _, _ = 0) {
          const { sNavKey: _, iActiveChild: _ = -1, rgChildren: _ } = _;
          _ && _(_ == _.NavKey, "navkey mismatch"), _.SetActiveChild(_);
          const _ = _.IsDebugEnabled()
            ? `[${_.Tree._}]${(function (_) {
                if (0 == _) return "";
                let _ = "";
                for (let _ = 0; _ < _; _++) _ += "*";
                return (_ += " "), _;
              })(_)}`
            : "";
          if (_ && _.length) {
            const [_] = _.GetChildren();
            if (-1 != _ && _.IsDebugEnabled()) {
              const _ = _.length != _.length;
              _(
                `${_}Restoring node ${_.NavKey} which had active child ${_} of ${_.length}${_ ? `- now ${_.length} children.` : ""}`,
              );
            }
            let _ = new Map();
            _.forEach((_) => {
              _.NavKey && _.set(_.NavKey, _);
            });
            for (const _ of _) {
              if (!_.sNavKey) continue;
              const _ = _.get(_.sNavKey);
              _ && _.RestoreSerializedNavNode(_, _, _ + 1);
            }
            if (-1 != _ && _[_]?.sNavKey) {
              const _ = _.get(_[_].sNavKey);
              _(
                `${_}Restoring node ${_.NavKey}, child with focus: ${_[_].sNavKey} ${void 0 === _ ? "MISSING!!" : ""}`,
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
      }
      function _(_) {
        return _.SerializeNavState(_, !0, !1);
      }
      function _(_, _, _ = 0) {
        return _.RestoreSerializedNavState(_, _, _);
      }
      class _ extends _ {
        m_rgHistory = [];
        PushState() {
          this.m_rgHistory.push(_.SerializeNavState(this.m_root));
        }
        PopState(_ = 0) {
          this.m_rgHistory.length &&
            _.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), _);
        }
      }
      class _ extends _ {
        m_mapHistory = new Map();
        SaveState(_) {
          this.m_mapHistory.set(_, _.SerializeNavState(this.m_root));
        }
        RestoreState(_, _ = 0) {
          const _ = this.m_mapHistory.get(_);
          return (
            !!_ &&
            (console.log(`Restoring history for state ${_}`),
            _.RestoreSerializedNavState(this.m_root, _, _),
            !0)
          );
        }
      }
      class _ {
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
          this.m_History || (this.m_History = new _(this.m_node)),
            this.m_History.PushState();
        }
        PopState(_ = 0) {
          this.m_History && this.m_History.PopState(_);
        }
        SaveState(_) {
          this.m_StateHistory || (this.m_StateHistory = new _(this.m_node)),
            this.m_StateHistory.SaveState(_);
        }
        RestoreState(_, _ = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(_, _)
          );
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
      }
      function _(_, _, _, _ = 0.001) {
        return "x" == _
          ? _.right > _.left + _ && _.left + _ < _.right
          : "y" == _
            ? _.bottom > _.top + _ && _.top + _ < _.bottom
            : (_(!1, `Invalid axis ${_}`), !1);
      }
      function _(_, _, _) {
        let _;
        return (
          "x" == _
            ? (_ = Math.min(_.right, _.right) - Math.max(_.left, _.left))
            : "y" == _
              ? (_ = Math.min(_.bottom, _.bottom) - Math.max(_.top, _.top))
              : (_(!1, `Invalid axis ${_}`), (_ = 0)),
          _ < 0 ? 0 : _
        );
      }
      function _(_, _) {
        return "x" == _
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
        const _ = _[_],
          _ = _(_, _);
        return _ < _.min ? _.min - _ : _ > _.max ? _ - _.max : 0;
      }
      function _(_) {
        if (!_) return _.NONE;
        const _ = _.ownerDocument.defaultView,
          _ = _.getComputedStyle(_);
        if ("flex" == _.display)
          switch (_.flexDirection) {
            case "row":
              return "wrap" == _.flexWrap ? _.GRID : _.ROW;
            case "row-reverse":
              return _.ROW_REVERSE;
            case "column":
              return _.COLUMN;
            case "column-reverse":
              return _.COLUMN_REVERSE;
          }
        else {
          if ("grid" == _.display)
            return "none" !== _.gridTemplateAreas ? _.GEOMETRIC : _.GRID;
          if (_.childElementCount > 0) {
            const _ = _.getComputedStyle(_.firstElementChild);
            if ("left" === _.float) return _.ROW;
            if ("right" === _.float) return _.ROW_REVERSE;
            if ("inline" === _.display || "inline-block" === _.display)
              return _.GRID;
          }
        }
        return _.COLUMN;
      }
      function _(_) {
        switch (_) {
          case _._.DIR_UP:
          case _._.DIR_DOWN:
            return "y";
          case _._.DIR_LEFT:
          case _._.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function _(_, _, _) {
        const _ = [],
          [_, _] = _.GetChildren(),
          _ = _.GetActiveChild();
        let _;
        const _ = _ ? _.Element?.getBoundingClientRect() : null;
        if (_) {
          const _ = _(_, _, _);
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
        const _ = _ || _;
        for (let _ = 0; _ < _.length; _++) {
          const _ = _[_];
          if (_ == _) continue;
          const _ = _(_, _, _ ?? void 0);
          _ &&
            _.push({
              child: _,
              visibility: _,
            });
        }
        let _;
        _.sort(_);
        for (const _ of _) {
          const { child: _, visibility: _ } = _;
          if (_.offScreen && _) {
            if (!_.visibility.offScreen) break;
            if (_.distance && _.distance > _.visibility.distance) break;
          }
          const _ = _ == _ ? _ : _(_, _, _.overlap || _, _ ?? void 0);
          _ && (!_ || _(_, _) < 0) && (_ = _);
        }
        return _;
      }
      function _(_, _, _, _) {
        switch (_.GetFocusable()) {
          case "none":
            return;
          case "children":
            return _(_, _.overlap || _, _);
          case "self":
            return {
              child: _,
              visibility: _,
            };
        }
      }
      function _(_, _) {
        const _ = _.visibility,
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
        const _ = _.Element?.getBoundingClientRect(),
          _ = _.GetFocusable();
        let _;
        if ("none" == _ || !_ || !_) return null;
        if ("self" == _) {
          if (
            _.top < _.top ||
            _.right > _.right ||
            _.bottom > _.bottom ||
            _.left < _.left
          ) {
            const _ = _.top + _.height / 2,
              _ = _.left + _.width / 2;
            if (_ < _.top)
              return {
                offScreen: "top",
                distance: _.top - _,
              };
            if (_ > _.right)
              return {
                offScreen: "right",
                distance: _ - _.right,
              };
            if (_ > _.bottom)
              return {
                offScreen: "bottom",
                distance: _ - _.bottom,
              };
            if (_ < _.left)
              return {
                offScreen: "left",
                distance: _.left - _,
              };
          }
          _ &&
            (_ = (function (_, _) {
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
            })(_, _));
        } else if ("children" == _) {
          const _ = _.Element;
          if (!_) return null;
          if (_.scrollHeight > _.height || _.scrollWidth > _.width) {
            const _ = _.ownerDocument.defaultView.getComputedStyle(_);
            if ("visible" == _.overflowX || "visible" == _.overflowY)
              return {
                overlap: _,
              };
          }
          if (_.bottom < _.top)
            return {
              offScreen: "top",
              distance: _.top - _.bottom,
            };
          if (_.left > _.right)
            return {
              offScreen: "right",
              distance: _.left - _.right,
            };
          if (_.top > _.bottom)
            return {
              offScreen: "bottom",
              distance: _.top - _.bottom,
            };
          if (_.right < _.left)
            return {
              offScreen: "left",
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
      function _(_, _, _) {
        return null == _ || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
      }
      class _ {
        m_options;
        m_msStart;
        m_msEnd;
        m_bActive = !1;
        m_fnBoundAnimationFunc = void 0;
        m_window;
        constructor(_, _) {
          (this.m_window = _),
            (this.m_options = {
              timing: "sine",
              ..._,
            });
        }
        Start() {
          let _;
          switch (
            ((this.m_msStart = performance.now()),
            (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
            this.m_options.timing)
          ) {
            case "linear":
              _ = function (_) {
                return _;
              };
              break;
            case "cubic-in-out":
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
          if (_ >= this.m_options.msDuration) return void this.End();
          let _ = _ / this.m_options.msDuration;
          try {
            this.Update(_(_));
          } catch {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class _ extends _ {
        m_fnCallback;
        constructor(_, _, _) {
          super(_, _), (this.m_fnCallback = _);
        }
        Update(_) {
          this.m_fnCallback(_);
        }
      }
      class _ extends _ {
        m_object;
        m_propTargets;
        m_props = {};
        constructor(_, _, _) {
          super("ownerDocument" in _ ? _(_) : _, _),
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
      }
      const _ = new _("ScrollSnap").Debug;
      let _ = !1;
      let _;
      function _(_, _, _, _, _) {
        const _ = _.Element;
        if (!_) return;
        let _ = [
          {
            node: _,
            eScrollType: _.m_Properties?.scrollIntoViewType,
          },
        ];
        for (let _ = _.Parent; _; _ = _.Parent) {
          const _ = _.m_Properties?.scrollIntoViewWhenChildFocused,
            _ = _.m_Properties?.scrollIntoViewType;
          if (_) {
            const _ = {
              node: _,
              eScrollType: _,
            };
            "force" === _ ? (_ = [_]) : _.push(_);
          }
          if (void 0 !== _)
            for (
              let _ = _.length - 1;
              _ >= 0 && void 0 === _[_].eScrollType;
              _--
            )
              _[_].eScrollType = _;
        }
        for (; _.length; ) {
          let { node: _, eScrollType: _ } = _.pop(),
            _ = 0 == _.length;
          if (
            (void 0 === _ && (_ = _ ? _.NoTransform : _.Standard),
            _?.m_Properties?.fnScrollIntoViewHandler)
          ) {
            if (!1 !== _.m_Properties.fnScrollIntoViewHandler(_, _, _))
              continue;
          }
          const _ = _.m_element,
            _ = _ == _.NoTransform || _ == _.NoTransformSparseContent || !_;
          if (_ || _ === _.GAMEPAD) {
            const _ = _ ? _(_) : _.getBoundingClientRect(),
              _ = _.ownerDocument.defaultView.innerHeight,
              _ = 40,
              _ = _ ? _ : Math.max(0.4 * _, _);
            let _ = !1;
            const _ = _ && performance.now() - _ < 500;
            (_ || _.bottom < -_ || _.top > _ + _) &&
              ((_ = !0),
              _ ||
                _(
                  `Disabling smooth scrolling, ${_.bottom} < ${-_}, ${_.top} > ${_} + ${_} `,
                ));
            let _ = _ ? "auto" : "smooth";
            _ && (_ = performance.now()),
              _.Tree.Controller.BIsRestoringHistory() && (_ = "auto"),
              _
                ? _(_, _, _)
                : (_(
                    `Scrolling Into View ('${_}' via browser scrollIntoView):`,
                    _,
                  ),
                  _.scrollIntoView({
                    behavior: _,
                    block: "nearest",
                  }));
          } else
            _("No previous element for scrolling, will jump"),
              _
                ? _(_, _, "auto")
                : (_(
                    "Scrolling Into View ('auto' via browser scrollIntoView):",
                    _,
                  ),
                  _?.scrollIntoView({
                    behavior: "auto",
                    block: "nearest",
                    inline: "nearest",
                  }));
        }
        !(function (_, _) {
          const _ = _(_);
          if (!_) return;
          let _ = null;
          for (let _ = _; _; _ = _.GetNavParentCrossingTrees())
            _.m_Properties?.scrollRegionToStartOrEnd && (_ = _);
          if (!_) return;
          for (
            let _ = _;
            _ &&
            !_.BHasNavTargetInDirection(_, !0) &&
            (_ != _ &&
              _.Element &&
              _.m_Properties?.scrollRegionToStartOrEnd &&
              _(_.Element, _, _),
            _ != _);
            _ = _.GetNavParentCrossingTrees()
          );
        })(_, _);
      }
      function _(_, _, _) {
        let _ = _,
          _ = _.ownerDocument;
        if (
          (_ == _.body && _.defaultView && !_(_, _) && (_ = _.defaultView),
          !_(_, _))
        )
          return;
        const _ = _(_);
        if ("y" == _) {
          const _ = _ == _._.DIR_DOWN ? _.MaxScrollTop() : 0;
          _.scrollTo({
            top: _,
            behavior: "smooth",
          });
        } else {
          const _ = _ == _._.DIR_RIGHT ? _.MaxScrollLeft() : 0;
          _.scrollTo({
            left: _,
            behavior: "smooth",
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
        if (!("ownerDocument" in _))
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
          if ("ownerDocument" in _) {
            const _ = window.getComputedStyle(_);
            if ("fixed" === _.position || "sticky" === _.position) break;
          }
          (_ += _.offsetTop), (_ += _.offsetLeft), (_ = _.offsetParent);
        }
        for (_ = _?.parentElement; _; ) {
          const { scrollTop: _, scrollLeft: _ } = _(_);
          if (((_ -= _), (_ -= _), "ownerDocument" in _)) {
            const _ = window.getComputedStyle(_);
            if ("fixed" === _.position || "sticky" === _.position) break;
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
        return "x" == _
          ? [_.left, _.right, _.right - _.left]
          : [_.top, _.bottom, _.bottom - _.top];
      }
      function _(_, _, _, _) {
        let [_, _, _] = _(_, _),
          [_, _, _] = _(_, _),
          [_, _] = _(_, _);
        if (_ < _ && _ > _) return 0;
        const _ = _ - _,
          _ = _ + _,
          _ = _ > _;
        return (_ < _ && !_) || (_ > _ && _)
          ? _ - _
          : (_ < _ && _) || (_ > _ && !_)
            ? _ - _
            : 0;
      }
      function _(_) {
        return "auto" == _
          ? 0
          : _.endsWith("px")
            ? parseInt(_)
            : (console.log("Unsupported length", _), 0);
      }
      function _(_) {
        if (!("ownerDocument" in _))
          return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          };
        const _ = _.ownerDocument.defaultView.getComputedStyle(_);
        return {
          left: _(_.scrollMarginLeft),
          right: _(_.scrollMarginRight),
          top: _(_.scrollMarginTop),
          bottom: _(_.scrollMarginBottom),
        };
      }
      function _(_, _) {
        let _ = (function (_) {
          let _;
          return (
            (_ =
              "ownerDocument" in _
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
        })(_);
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
          "----------------------------------------------------------------------------------",
        ),
          _("Scrolling Into View (NoTransform):", _);
        let _ = [],
          _ = _,
          _ = _(_),
          _ = _ ?? Number.MAX_VALUE;
        for (; _; ) {
          let _ = _(_);
          _ || (_ = _(_));
          let _ = _(_),
            _ = _(_, _(_)),
            _ = _(_),
            _ = {
              element: _,
              left: 0,
              top: 0,
            };
          if (
            (_(
              "Checking scroll div",
              _,
              `scroll y:${_.scrollTop} of ${_.MaxScrollTop()}, x:${_.scrollLeft} of ${_.MaxScrollLeft()}, adjusted =>`,
              _,
              "target => ",
              _,
            ),
            (_ && "y" != _) ||
              !_(_, "y") ||
              ((_.top = _(_, _, _, "y")),
              (_.top = _(_.top, -_.scrollTop, _.MaxScrollTop() - _.scrollTop)),
              _ &&
                ((_.top = Math.min(_, Math.abs(_.top)) * (_.top < 0 ? -1 : 1)),
                (_ -= Math.abs(_.top))),
              _(`- checked y: ${_.top}`)),
            (_ && "x" != _) ||
              !_(_, "x") ||
              ((_.left = _(_, _, _, "x")),
              (_.left = _(
                _.left,
                -_.scrollLeft,
                _.MaxScrollLeft() - _.scrollLeft,
              )),
              _ &&
                ((_.left =
                  Math.min(_, Math.abs(_.left)) * (_.left < 0 ? -1 : 1)),
                (_ -= Math.abs(_.left))),
              _(`- checked x: ${_.left}`)),
            _.push(_),
            _ && !_)
          )
            break;
          if (!("ownerDocument" in _)) break;
          const _ = window.getComputedStyle(_);
          if ("fixed" === _.position || "sticky" === _.position) break;
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
            (_(_.scrollLeft - _) && _(_.scrollTop - _)) ||
              (_.scrollTo({
                left: _,
                top: _,
                behavior: _,
              }),
              _ || (_("Scrolling:"), (_ = !0)),
              _(
                `- ${_.top},${_.left} => ${_}, ${_}, behavior: ${_}`,
                _.element,
              ));
        }
      }
      function _(_, _) {
        const { top: _, left: _, behavior: _ } = _,
          _ = _(_);
        _.scrollTo({
          top: _.scrollTop + (_ ?? 0),
          left: _.scrollLeft + (_ ?? 0),
          behavior: _,
        });
      }
      class _ {
        m_element;
        m_fnOriginalScrollTo;
        m_window;
        m_scrollTopTarget = void 0;
        m_scrollLeftTarget = void 0;
        m_animation = void 0;
        constructor(_) {
          "ownerDocument" in _
            ? ((this.m_element = _),
              (this.m_fnOriginalScrollTo = _.scrollTo),
              (this.m_element.scrollTo = (_, _) => {
                "number" == typeof _
                  ? this.scrollTo({
                      left: _,
                      top: _,
                    })
                  : this.scrollTo(_);
              }))
            : ((this.m_window = _),
              (this.m_element = _.document.documentElement));
        }
        ResetScrollState() {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            this.m_window || (this.m_element.style.scrollSnapType = "");
        }
        scrollTo(_) {
          if ("smooth" != _?.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(_)
                : this.m_fnOriginalScrollTo?.apply(this.m_element, [_]),
              this.ResetScrollState();
          else {
            const _ = _.left ?? this.scrollLeft,
              _ = _.top ?? this.scrollTop;
            let _ = "sine";
            this.m_animation && (this.m_animation.Cancel(), (_ = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - _),
                Math.abs(this.currentScrollLeft - _),
              ) > 0
            ) {
              const _ = {
                msDuration: 200,
                timing: _,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const _ = this.currentScrollLeft,
                  _ = this.currentScrollTop;
                this.m_animation = new _(this.m_window, _, (_) => {
                  this.m_window?.scrollTo({
                    left: _ + (_ - _) * _,
                    top: _ + (_ - _) * _,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
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
          return this.m_window
            ? this.m_window.scrollX
            : this.m_element.scrollLeft;
        }
        get currentScrollTop() {
          return this.m_window
            ? this.m_window.scrollY
            : this.m_element.scrollTop;
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
      }
      (0, _._)([_._], _.prototype, "ResetScrollState", null);
      const _ = new WeakMap();
      function _(_) {
        let _ = _.get(_);
        return _ || ((_ = new _(_)), _.set(_, _)), _;
      }
      function _(_) {
        const _ = _.get(_);
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
      const _ = new _("FocusNavigationMovement"),
        _ = _.Debug;
      var _, _, _, _;
      !(function (_) {
        (_[(_.NONE = 0)] = "NONE"),
          (_[(_.COLUMN = 1)] = "COLUMN"),
          (_[(_.ROW = 2)] = "ROW"),
          (_[(_.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (_[(_.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (_[(_.GRID = 5)] = "GRID"),
          (_[(_.GEOMETRIC = 6)] = "GEOMETRIC");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.FIRST = 0)] = "FIRST"),
            (_[(_.LAST = 1)] = "LAST"),
            (_[(_.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (_[(_.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (_[(_.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Standard = 0)] = "Standard"),
            (_[(_.NoTransform = 1)] = "NoTransform"),
            (_[(_.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.INVALID = 0)] = "INVALID"),
            (_[(_.FORWARD = 1)] = "FORWARD"),
            (_[(_.BACKWARD = 2)] = "BACKWARD");
        })(_ || (_ = {}));
      class _ {
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
        m_ActionDescriptionsChangedCallbackList = new _._();
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
          return this.m_Properties?.navKey ? this.m_Properties.navKey : void 0;
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
          const _ =
            ((_ = this.m_Properties?.actionDescriptionMap),
            (_ = _?.actionDescriptionMap),
            (_ = _),
            !(null == _ || null == _
              ? _ === _
              : "object" == typeof _ &&
                "object" == typeof _ &&
                Object.keys(_).length === Object.keys(_).length &&
                ((_ = _ ?? ((_, _) => _ === _)),
                Object.keys(_).every(
                  (_) => _.hasOwnProperty(_) && _(_[_], _[_]),
                ))));
          var _, _, _;
          const _ = this.m_Properties?.focusableIfEmpty,
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
          const _ = this.m_element;
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
          const _ = this.GetElementForFocusRingMeasure();
          if (!_) return;
          const _ = _.ownerDocument?.defaultView?.getComputedStyle(_);
          return _
            ? {
                borderTopLeftRadius: _.borderTopLeftRadius,
                borderTopRightRadius: _.borderTopRightRadius,
                borderBottomRightRadius: _.borderBottomRightRadius,
                borderBottomLeftRadius: _.borderBottomLeftRadius,
              }
            : void 0;
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
          const _ = this.m_Properties?.actionDescriptionMap;
          if (_)
            for (const _ in _) {
              const _ = _;
              void 0 === _[_] && (_[_] = _[_]);
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
                "Invalid focus state in AddChild",
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(_) {
          (this.m_element = _),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : _(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const _ =
              this.m_FocusableIfEmptyAncestor &&
              this.m_FocusableIfEmptyAncestor.BHasFocus(),
            _ = this.m_Properties?.autoFocus || _;
          if (this.BWantsAutoFocus() || _) {
            let _ = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (_ = this.m_rgChildren.findIndex((_) => _.BWantsAutoFocus()))),
              (this.m_Properties?.autoFocus || _ || -1 !== _) &&
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
            const _ = this.m_rgChildren.findIndex((_) => _.BFocusWithin());
            -1 != _ &&
              (this.SetActiveChild(_),
              _(
                this.BFocusWithin(),
                "Child has focus, we should be m_bFocusWithin",
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
          const _ = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.BHasFocus() || _) &&
            (_(
              `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? "will transfer to retain focus ancestor" : "will blur"}.`,
            ),
            _ && this.Tree.DeferredFocus.RequestFocus(null),
            this.m_FocusableIfEmptyAncestor
              ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
              : this.BHasFocus() &&
                this.m_Tree.TransferFocus(_.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : _(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            this.m_element &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties?.layout != _.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              _(this.m_element, this.OnNavigationEvent),
            ),
            (this.m_Properties?.focusable ||
              this.m_Properties?.focusableIfEmpty ||
              0 == this.m_rgChildren.length) &&
              (this.m_rgFocusHandlers.length ||
                (this.m_element?.addEventListener("focus", this.OnDOMFocus),
                this.m_element?.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(() => {
                  this.m_element?.removeEventListener("focus", this.OnDOMFocus),
                    this.m_element?.removeEventListener("blur", this.OnDOMBlur);
                })));
        }
        RemoveChild(_) {
          let _ = this.m_rgChildren.indexOf(_);
          _(-1 !== _, "Child was not found to remove"),
            -1 !== _ &&
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
          const _ = this.GetActiveChild();
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
              this.m_rgChildren[this.m_iLastActiveChildIndex] ==
                this.m_ActiveChild
            )
              return this.m_iLastActiveChildIndex;
            this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
              this.m_ActiveChild,
            );
          }
          return this.m_iLastActiveChildIndex;
        }
        EnsureChildrenSorted(_ = !1) {
          (this.m_bChildrenSorted && !_) ||
            (this.m_rgChildren.sort((_, _) => {
              const _ = _.m_element,
                _ = _.m_element;
              if (!_ || !_.isConnected) return _ && _.isConnected ? 1 : 0;
              if (!_ || !_.isConnected) return -1;
              const _ = __webpack_require__.compareDocumentPosition(_);
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
          const _ = this.GetActiveChild();
          return _ ? _.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(_) {
          if (!this.BHasFocus()) {
            if ("children" == this.GetFocusable()) {
              const _ = this.FindFocusableDescendant();
              if (_ && _ !== this)
                return (
                  _(
                    "Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.",
                    this.m_element,
                    _.m_element,
                  ),
                  void this.m_Tree.TransferFocus(_.BROWSER, _)
                );
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
          const {
            focusable: _,
            focusableIfEmpty: _,
            childFocusDisabled: _,
            fnCanTakeFocus: _,
          } = this.m_Properties;
          return this.m_bMounted
            ? _ && !_(this)
              ? "none"
              : _ || (_ && (_ || 0 == this.m_rgChildren.length))
                ? "self"
                : !_ && this.m_rgChildren.length
                  ? "children"
                  : "none"
            : "none";
        }
        BTakeFocus(_, _) {
          const _ = this.FindFocusableNode(_);
          return this.InternalFocusDescendant(_, _, _);
        }
        FindFocusableNode(_, _) {
          switch (this.GetFocusable()) {
            case "none":
              return null;
            case "self":
              return this;
            case "children":
              return this.FindFocusableDescendant(_, _);
          }
        }
        BChildTakeFocus(_, _) {
          const _ = this.FindFocusableDescendant(_);
          return this.InternalFocusDescendant(_, _, _);
        }
        BFocusFirstChild(_) {
          const _ = this.FindNextFocusableChildInDirection(
            -1,
            _.FORWARD,
            _._.INVALID,
          );
          return this.InternalFocusDescendant(_, _);
        }
        BFocusLastChild(_) {
          const _ = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            _.BACKWARD,
            _._.INVALID,
          );
          return this.InternalFocusDescendant(_, _);
        }
        FindFocusableDescendant(_, _) {
          const _ = _(_),
            { focusableIfEmpty: _, childFocusDisabled: _ } =
              this.m_Properties ?? {};
          if (_) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: _, resetNavOnEntry: _ } =
              this.m_Properties ?? {};
            let _ = this.GetActiveChildIndex();
            _ && void 0 !== _ && (_ = -1);
            const _ = this.GetLayout();
            let _, _;
            if (
              (this.IsValidChildIndex(_) ||
                (_ =
                  _ >= this.m_rgChildren.length ||
                  _ == _.ROW_REVERSE ||
                  _ == _.COLUMN_REVERSE ||
                  _ == _.LAST
                    ? this.m_rgChildren.length - 1
                    : 0),
              _ == _.MAINTAIN_X
                ? (_ = "x")
                : _ == _.MAINTAIN_Y
                  ? (_ = "y")
                  : _ == _.GEOMETRIC && _ && (_ = _[_]),
              (_ || _) && _)
            ) {
              const _ = this.m_Tree.GetLastFocusedNode();
              if (_ || (_ && _ == _[_])) {
                const _ =
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
                const _ = this.ComputeRelativeDirection(_, _.GRID),
                  _ = _ == _.BACKWARD ? this.m_rgChildren.length : -1;
                _ = this.FindNextFocusableChildInDirection(_, _, _);
              }
            } else if (_ == _.PREFERRED_CHILD) {
              let _ = this.m_rgChildren;
              for (; _.length; ) {
                let _ = [];
                for (const _ of _) {
                  if (
                    ((_ = _.BWantsPreferredFocus()
                      ? _.FindFocusableNode(_)
                      : void 0),
                    _)
                  )
                    return _;
                  __webpack_require__.push(..._.m_rgChildren);
                }
                _ = _;
              }
            } else
              _ == _.LAST &&
                (_ = this.FindNextFocusableChildInDirection(
                  _ + 1,
                  _.BACKWARD,
                  _,
                ));
            return (
              _ ||
                (_ = this.FindNextFocusableChildInDirection(
                  _ - 1,
                  _.FORWARD,
                  _,
                )),
              _ ||
                (_ = this.FindNextFocusableChildInDirection(_, _.BACKWARD, _)),
              _ || (_ ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(_) {
          const _ = this.Element?.ownerDocument?.defaultView ?? window,
            _ = _(this, {
              top: 0,
              left: 0,
              right: _.innerWidth,
              bottom: _.innerHeight,
            });
          return (
            _(
              `Focusing visible child, best child match is ${_?.child?.Element?.className} - ${JSON.stringify(_?.visibility)}`,
            ),
            !!_ && _.child.BTakeFocus(_)
          );
        }
        GetLayout() {
          if (this.m_Properties?.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return _.NONE;
          return _(this.m_element);
        }
        OnNavigationEvent(_) {
          const _ = _.detail.button;
          if (this.BTryInternalNavigation(_, _.detail.is_repeat ?? !1))
            return !0;
          const {
            onMoveUp: _,
            onMoveRight: _,
            onMoveDown: _,
            onMoveLeft: _,
          } = this.m_Properties ?? {};
          let _ = !1;
          switch (_) {
            case _._.DIR_UP:
              _ && (_ = __webpack_require__(_.detail, this));
              break;
            case _._.DIR_RIGHT:
              _ && (_ = _(_.detail, this));
              break;
            case _._.DIR_DOWN:
              _ && (_ = _(_.detail, this));
              break;
            case _._.DIR_LEFT:
              _ && (_ = _(_.detail, this));
          }
          return _;
        }
        InternalFocusDescendant(_, _, _) {
          return !!_ && (this.m_Tree.TransferFocus(_, _, _, !1), !0);
        }
        BHasNavTargetInDirection(_, _) {
          if (this.HasMovementHandler(_)) return !0;
          let _ = this.FindNextFocusableChild(_);
          if (_ && _) {
            let _ = __webpack_require__.GetWrappedTree();
            if (_ && _.GetExcludeFromScrollRegionSearch()) return !1;
          }
          return !!_;
        }
        HasMovementHandler(_) {
          switch (_) {
            case _._.DIR_UP:
              return !!this.m_Properties?.onMoveUp;
            case _._.DIR_DOWN:
              return !!this.m_Properties?.onMoveDown;
            case _._.DIR_LEFT:
              return !!this.m_Properties?.onMoveLeft;
            case _._.DIR_RIGHT:
              return !!this.m_Properties?.onMoveRight;
          }
          return !1;
        }
        FindNextFocusableChild(_) {
          const _ = this.GetLayout(),
            _ = this.ComputeRelativeDirection(_, _);
          if (_ == _.INVALID) return null;
          if (this.m_Properties?.focusable && this.BHasFocus()) return null;
          if ((this.EnsureChildrenSorted(!0), _ == _.GRID))
            return this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              _,
              _,
            );
          if (_ == _.GEOMETRIC)
            return this.FindNextFocusableChildGeometric(_, _);
          let _ = this.GetActiveChildIndex();
          return (
            this.IsValidChildIndex(_) ||
              (_ = _ == _.FORWARD ? -1 : this.m_rgChildren.length),
            this.FindNextFocusableChildInDirection(_, _, _)
          );
        }
        BTryInternalNavigation(_, _) {
          _(
            `Handling navigation event ${_._[_]} - ${_[this.GetLayout()]}`,
            this.m_element,
          );
          const _ = this.FindNextFocusableChild(_);
          if (!_) return !1;
          const _ = _(_),
            _ = this.ComputeRelativeDirection(_, this.GetLayout());
          if (
            this.GetScrollIntoViewType() == _.NoTransformSparseContent ||
            __webpack_require__.GetScrollIntoViewType() ==
              _.NoTransformSparseContent
          ) {
            const _ = _.Element?.ownerDocument.defaultView;
            if (_) {
              const _ =
                  ("y" == _ ? _.innerHeight : _.innerWidth) / (_ ? 4.5 : 3.33),
                _ = _(_.Element);
              let _ = !1;
              if (
                ("y" == _
                  ? _ == _.FORWARD
                    ? (_ =
                        _.top > _.innerHeight && _.bottom > _.innerHeight + _)
                    : _ == _.BACKWARD && (_ = _.bottom < 0 && _.top < -_)
                  : "x" == _ &&
                    (_ == _.FORWARD
                      ? (_ =
                          _.left > _.innerWidth && _.right > _.innerWidth + _)
                      : _ == _.BACKWARD && (_ = _.right < 0 && _.left < -_)),
                _)
              )
                return (
                  _(`Element too far away, scrolling ${_} on ${_} axis `),
                  _(_.Element, _.Element, "smooth", _, _),
                  !0
                );
            }
          }
          return this.m_Tree.TransferFocus(_.GAMEPAD, _, _), !0;
        }
        GetScrollIntoViewType() {
          return void 0 !== this.m_Properties?.scrollIntoViewType &&
            null !== this.m_Properties?.scrollIntoViewType
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
              ? this.m_Parent.GetScrollIntoViewType()
              : _.Standard;
        }
        GetRelativeDirection(_) {
          return this.ComputeRelativeDirection(_, this.GetLayout());
        }
        ComputeRelativeDirection(_, _) {
          let _ = _ == _.ROW_REVERSE || _ == _.COLUMN_REVERSE;
          switch (_) {
            case _.ROW:
            case _.ROW_REVERSE:
              switch (_) {
                case _._.DIR_LEFT:
                  return _ ? _.FORWARD : _.BACKWARD;
                case _._.DIR_RIGHT:
                  return _ ? _.BACKWARD : _.FORWARD;
                default:
                  return _.INVALID;
              }
            case _.COLUMN:
            case _.COLUMN_REVERSE:
              switch (_) {
                case _._.DIR_UP:
                  return _ ? _.FORWARD : _.BACKWARD;
                case _._.DIR_DOWN:
                  return _ ? _.BACKWARD : _.FORWARD;
                default:
                  return _.INVALID;
              }
            case _.GRID:
            case _.GEOMETRIC:
              switch (_) {
                case _._.DIR_LEFT:
                case _._.DIR_UP:
                  return _ ? _.FORWARD : _.BACKWARD;
                case _._.DIR_RIGHT:
                case _._.DIR_DOWN:
                  return _ ? _.BACKWARD : _.FORWARD;
                default:
                  return _.INVALID;
              }
            default:
              return _.INVALID;
          }
        }
        AdvanceIndex(_, _) {
          return _ + (_ == _.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(_, _, _) {
          let _ = _ == _.FORWARD ? 1 : -1;
          for (let _ = _ + _; _ >= 0 && _ < this.m_rgChildren.length; _ += _) {
            const _ = this.m_rgChildren[_].FindFocusableNode(_);
            if (_) return _;
          }
          return null;
        }
        ScanChildren(_, _, _) {
          let _ = _ == _.FORWARD ? 1 : -1;
          for (let _ = _; _ >= 0 && _ < this.m_rgChildren.length; _ += _)
            if (__webpack_require__(this.m_rgChildren[_], _)) return _;
          return -1;
        }
        FindNextFocusableChildInGrid(_, _, _) {
          const _ = _ == _._.DIR_UP || _ == _._.DIR_DOWN,
            _ = this.GetLastFocusElement();
          if (!_ || _ == this.m_element)
            return (
              _(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                _,
              ),
              this.FindFocusableDescendant(_)
            );
          let _ = this.GetActiveDescendant().GetBoundingRect();
          if (
            ((_ != _._.DIR_UP && _ != _._.DIR_DOWN) ||
              (_ = this.AdjustRectForLastMovementOnTangentAxis(_, "y")),
            _)
          ) {
            let _ = _;
            for (; -1 != _; ) {
              const _ = this.ScanChildren(
                this.AdvanceIndex(_, _),
                _,
                (_) => !_("y", _, _.GetBoundingRect()),
              );
              if (-1 != _) {
                const _ = this.m_rgChildren[_].GetBoundingRect(),
                  _ = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
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
            let _ = _ == _.FORWARD ? 1 : -1;
            for (
              let _ = this.AdvanceIndex(_, _);
              _ >= 0 && _ < this.m_rgChildren.length;
              _ += _
            ) {
              const _ = this.m_rgChildren[_];
              if (!_("y", _, _.GetBoundingRect())) return null;
              let _ = _.FindFocusableNode(_);
              if (_) return _;
            }
          }
          return null;
        }
        FindNextFocusableChildGeometric(_, _) {
          const _ = this.GetLastFocusElement();
          if (!_ || _ == this.m_element)
            return (
              _(
                !1,
                "No active child for geometric navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                _,
              ),
              this.FindFocusableDescendant(_)
            );
          const _ = _(_);
          if (!_) return null;
          const _ = this.AdjustRectForLastMovementOnTangentAxis(
            this.GetActiveDescendant().GetBoundingRect(),
            _,
          );
          return this.FindClosetChildInDirection(_, _, _, _);
        }
        AdjustRectForLastMovementOnTangentAxis(_, _) {
          const _ = this.m_Tree.GetLastFocusedMovementRect(_[_]);
          return _
            ? "x" == _
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
          const _ = _(_),
            _ = _ && _[_],
            _ = [];
          for (const _ of this.m_rgChildren) {
            const _ = _.GetBoundingRect();
            if (_) {
              const _ = _(_, _),
                _ = _ ? _(_, _, _) : 0;
              _.push({
                child: _,
                overlap: _,
                dist: _,
              });
            }
          }
          _.sort((_, _) =>
            _.dist != _.dist ? _.dist - _.dist : _.overlap - _.overlap,
          );
          for (const { child: _ } of _) {
            const _ = __webpack_require__.FindFocusableNode(_, _);
            if (_) return _;
          }
          return null;
        }
        FindClosetChildInDirection(_, _, _, _) {
          _(
            `Find child closest to rect, rect is at left ${_.left} top ${_.top} right ${_.right} bottom ${_.bottom}`,
          );
          const _ = _(_, _),
            _ = [];
          for (const _ of this.m_rgChildren) {
            const _ = _.GetBoundingRect();
            if (_) {
              const _ = _(_, _);
              let _;
              (_ = _ == _.FORWARD ? _.min - _.max : _.min - _.max),
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
              const _ = _.dist - _.dist;
              return _ || _.overlap - _.overlap;
            }),
            _.IsDebugEnabled())
          ) {
            const _ = _.slice(0, 3).map(
              ({ dist: _, overlap: _, child: _ }) =>
                `[ node: ${_.m_element?.className} dist: ${_} overlap: ${_} ]`,
            );
            _(`Found nodes on axis, top 3 (of ${_.length}: ${_.join(", ")}`);
          }
          for (const { child: _ } of _) {
            const _ = _.FindFocusableNode(_, _);
            if (_) return _;
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(_, _, _, _, _, _) {
          (!_ || _ < 0) && (_ = 0);
          let _ = [];
          if (!_) return null;
          const _ = {
            _: (_ = _).left,
            _: _.top,
          };
          var _;
          this.ScanChildren(_, _, (_) => {
            const _ = _.GetBoundingRect();
            return (
              !!_ &&
              (!(!_ || _(_[_], _, _)) ||
                (_.push({
                  child: _,
                  overlap: _(_, _, _),
                  dist: _(_, _, _),
                }),
                !1))
            );
          }),
            _ == _.BACKWARD && _.reverse(),
            _.sort((_, _) => {
              const _ = _.overlap - _.overlap;
              return 0 != _ ? _ : _.dist - _.dist;
            });
          for (const { child: _ } of _) {
            const _ = _.FindFocusableNode(_, _);
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
                  "Virtual focus tree should not have browser focus",
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
      }
      (0, _._)([_._], _.prototype, "OnDOMFocus", null),
        (0, _._)([_._], _.prototype, "OnDOMBlur", null),
        (0, _._)([_._], _.prototype, "OnNavigationEvent", null);
      const _ = new _("FocusNavigation").Debug,
        _ = new _("GamepadEvents").Debug;
      class _ extends _ {
        m_wrappedTree;
        m_rgCallbackRegistrations = new _();
        constructor(_, _) {
          super(_.m_Tree, _, _.m_FocusRing),
            this.SetProperties({
              navKey: `FocusNavTreeWrapper_${_}`,
            });
        }
        OnMount(_) {
          super.OnMount(_), (_.__nav_wrapper = this);
          const _ = _.__nav_tree;
          _ && this.BindTree(_);
        }
        OnUnmount() {
          this.m_rgCallbackRegistrations.Unregister(), super.OnUnmount();
        }
        BindTree(_) {
          _.GetParentEmbeddedNavTree() &&
            ((this.m_wrappedTree = _),
            this.m_rgCallbackRegistrations.Push(
              _.OnActivateCallbacks.Register(this.OnWrappedTreeActivated)
                .Unregister,
            ),
            _.BIsActive() && this.OnWrappedTreeActivated(),
            this.m_rgCallbackRegistrations.Push(
              _.RegisterOnUnhandledButtonCallback(
                this.OnWrappedTreeUnhandledButton,
              ),
            ));
        }
        OnWrappedTreeActivated() {
          _(
            "Wrapped tree activated, " +
              (this.BHasFocus()
                ? "but we already have focus"
                : "transferring focus"),
          ),
            this.BHasFocus() || this.m_Tree.TransferFocus(_.APPLICATION, this);
        }
        OnWrappedTreeUnhandledButton(_) {
          return (
            _(
              `Propagating ${_._[_.detail.button]} event out of tree, firing at element:`,
              this.m_Parent?.Element,
            ),
            _(this.m_Parent?.Element, "vgp_onbuttondown", _.detail),
            !0
          );
        }
        SetDOMFocusAndScroll(_, _, _, _) {
          this.UpdateParentActiveChild(),
            this.m_wrappedTree?.BIsActive() ||
              (this.m_wrappedTree?.Activate(),
              this.m_wrappedTree?.TakeFocus(_));
        }
        CanTakeFocus(_) {
          return !!this.m_wrappedTree?.Root.FindFocusableDescendant();
        }
        SetProperties(_) {
          super.SetProperties({
            ..._,
            noFocusRing: !0,
            focusable: !0,
            fnCanTakeFocus: this.CanTakeFocus,
          });
        }
        GetWrappedTree() {
          return this.m_wrappedTree || null;
        }
      }
      (0, _._)([_._], _.prototype, "OnWrappedTreeActivated", null),
        (0, _._)([_._], _.prototype, "OnWrappedTreeUnhandledButton", null),
        (0, _._)([_._], _.prototype, "CanTakeFocus", null);
      const _ = new _("FocusHistory").Debug;
      function _(_) {
        const _ = (_) => {
            _(
              `preserving state and suppressing focus for tree ${_._} for navigation type ${_.navigationType}`,
            );
            const _ = window.navigation.currentEntry?.getState() ?? {};
            if ("replace" != _.navigationType) {
              const _ = _(_.Root);
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
                    const _ = _.destination.getState() ?? {},
                      { [_(_)]: _, ..._ } = _;
                    window.navigation.updateCurrentEntry({
                      state: {
                        ..._,
                        [_]: !0,
                      },
                    });
                  },
                  focusReset: "manual",
                });
            _.DeferredFocus.SuppressFocus();
          },
          _ = (_) => {
            _(_)
              ? _.DeferredFocus.Reset()
              : _.DeferredFocus.ExecuteQueuedFocus();
          },
          _ = new _();
        return (
          window.navigation.addEventListener("navigate", _),
          _.Push(() => window.navigation.removeEventListener("navigate", _)),
          window.navigation.addEventListener("navigatesuccess", _),
          _.Push(() =>
            window.navigation.removeEventListener("navigatesuccess", _),
          ),
          (function () {
            if (!_) {
              _ = new _._();
              const _ = performance.now(),
                _ = (_) => {
                  "string" == typeof _.data &&
                    "FocusRestoreReady" == _.data &&
                    (_(
                      `Got FocusRestoreReady event from page after ${performance.now() - _}ms, will record in history.  ${_.CountRegistered()} trees waiting.`,
                    ),
                    window.navigation.updateCurrentEntry({
                      state: {
                        ...window.navigation.currentEntry?.getState(),
                        [_]: !0,
                      },
                    }),
                    _.Dispatch(),
                    _.ClearAllCallbacks(),
                    window.clearTimeout(_));
                };
              window.addEventListener("message", _);
              const _ = window.setTimeout(() => {
                _.CountRegistered() &&
                  (console.warn(
                    "Waited 4000ms for FocusRestoreReady, proceeding",
                  ),
                  _.Dispatch());
              }, 4e3);
            }
          })(),
          (function () {
            const _ = window.navigation.currentEntry?.getState();
            return _(`Wait for page? ${_?.[_] ? "wait" : "no"} `, _), !!_?.[_];
          })()
            ? (function (_, _) {
                if (window.__bFocusRestoreReady) return void _(_);
                _(
                  `Wait for page enabled, suppressing focus in ${_._} until we hear that page is ready`,
                ),
                  _.DeferredFocus.SuppressFocus();
                const _ = _(_),
                  _ = () => {
                    _(_, _)
                      ? _.DeferredFocus.Reset()
                      : _.DeferredFocus.ExecuteQueuedFocus();
                  },
                  _ = _.Register(_).Unregister;
                _.Push(_);
              })(_, _)
            : _(_),
          _.GetUnregisterFunc()
        );
      }
      function _(_, _) {
        const _ = _ ?? _(_);
        return (
          _(
            `Restoring focus state for ${_._}, ${_ ? "history available" : "no history"}`,
          ),
          !!_ && (_(_.Root, _, 0), !0)
        );
      }
      function _(_) {
        return `FocusHistory_${_._}`;
      }
      function _(_) {
        const _ = window.navigation.currentEntry?.getState();
        return _?.[_(_)];
      }
      let _;
      const _ = "FocusHistoryWaitForPage";
      const _ = new _("FocusNavigation").Debug,
        _ = new _("GamepadEvents").Debug;
      class _ {
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
        m_onActivateCallbacks = new _._();
        m_onDeactivateCallbacks = new _._();
        m_onActiveFocusStateChangedCallbacks = new _._();
        m_onChildTreesChanged = new _._();
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
          for (const _ of this.m_rgChildNavTrees) {
            if (_.BIsModal() && _.BIsEnabled()) return _;
            const _ = _.FindModalDescendant();
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
          return "x" == _
            ? this.m_lastFocusNodeXMovement.GetRect()
            : "y" == _
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
        OnActivate(_) {
          (this.m_tsLastActivated = performance.now()),
            this.m_onActivateCallbacks.Dispatch(this, _),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
          for (let _ = this.m_lastFocusNode; _; _ = _.Parent)
            _.SetFocusWithin(!0);
        }
        OnDeactivate(_) {
          this.m_onDeactivateCallbacks.Dispatch(this, _),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
            (this.m_bWasActiveForLastFocusChange = !1);
          for (let _ = this.m_lastFocusNode; _; _ = _.Parent)
            _.SetFocusWithin(!1);
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
            _ || (_ = this.Root.BTakeFocus(_)),
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
          const _ = this.m_Root.Element;
          (_.__nav_tree = this),
            _.__nav_wrapper && _.__nav_wrapper.BindTree(this);
          const _ = new _();
          return (
            this.m_valueIsMounted.Set(!0),
            __webpack_require__.Push(() => this.m_valueIsMounted.Set(!1)),
            this.m_ParentNavTree &&
              __webpack_require__.Push(
                this.m_ParentNavTree.AddChildNavTree(this),
              ),
            "navigationapi" == this.m_Properties.historyMode &&
              __webpack_require__.Push(_(this)),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(
              this.BIsActive(),
              this,
            ),
            __webpack_require__.GetUnregisterFunc()
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
              _._(this.m_rgOnUnhandledButton, _);
            }
          );
        }
        RegisterGlobalButtonHandler(_, _, _) {
          const _ = {
            button: _,
            fnCallback: _,
            description: _,
          };
          return (
            this.m_rgGlobalButtonHandlers.push(_),
            this.UpdateRootActionDescriptionMap(),
            () => {
              _._(this.m_rgGlobalButtonHandlers, _),
                this.UpdateRootActionDescriptionMap();
            }
          );
        }
        UpdateRootActionDescriptionMap() {
          const _ = {};
          for (const { button: _, description: _ } of this
            .m_rgGlobalButtonHandlers)
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
              (_.m_onGlobalButtonDown && _.m_onGlobalButtonDown(_),
              _.cancelBubble)
            )
              return !1;
          return this.HandleButtonDownEventAsLogicalEvent(_);
        }
        TryRootButtonListeners(_) {
          for (const { button: _, fnCallback: _ } of this
            .m_rgGlobalButtonHandlers)
            if (_ == _.detail.button && !1 !== __webpack_require__(_))
              return !1;
          for (const _ of this.m_rgOnUnhandledButton)
            if (!1 !== _(_)) return !1;
          return !0;
        }
        HandleButtonDownEventAsLogicalEvent(_) {
          let { bUnhandled: _, bHadLogicalEventMapping: _ } = (function (_) {
            const _ = [_._.DIR_UP, _._.DIR_DOWN, _._.DIR_LEFT, _._.DIR_RIGHT];
            let _ = !0,
              _ = !1,
              _ = _[_.detail.button];
            return (
              _
                ? ((_ = !0), (_ = _(_.target, _, _.detail)))
                : -1 !== _.indexOf(_.detail.button) &&
                  ((_ = !0), (_ = _(_.target, "vgp_ondirection", _.detail))),
              {
                bUnhandled: _,
                bHadLogicalEventMapping: _,
              }
            );
          })(_);
          return (
            _(
              `Logical gamepad Event fired: ${_._[_.detail.button]}, had logical event: ${_}, was handled: ${!_}`,
            ),
            _ && (_ = this.TryRootButtonListeners(_)),
            _ && (_ = this.m_Controller.FireUnhandledGamepadEventCallbacks(_)),
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
            this.OnChildTreesChangedCallbacks.Dispatch("add", _),
            () => {
              _._(this.m_rgChildNavTrees, _),
                this.OnChildTreesChangedCallbacks.Dispatch("remove", _);
            }
          );
        }
        TransferFocus(_, _, _, _) {
          (_ = _ ?? _._.INVALID),
            (_ = _ ?? !1),
            this.m_Controller.BatchedUpdate(() =>
              this.TransferFocusInternal(_, _, _, _),
            );
        }
        TransferFocusInternal(_, _, _, _) {
          const _ = _(_),
            _ = this.m_lastFocusNode;
          if (
            _ == _ &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          _(
            `Transfer focus in ${this._}, source: ${_ && _[_]}, from/to:`,
            _?.m_element,
            _?.m_element,
          );
          const _ = {
              blurredNode: _,
              focusedNode: _,
              focusSource: _,
            },
            _ = (function (_, _) {
              if (!_ || !_) return null;
              let _ = _,
                _ = _;
              for (
                ;
                __webpack_require__.GetDepth() > _.GetDepth() && _.Parent;
              )
                _ = _.Parent;
              for (
                ;
                _.GetDepth() > __webpack_require__.GetDepth() && _.Parent;
              )
                _ = _.Parent;
              for (; _ != _ && _ && _; ) (_ = _.Parent), (_ = _.Parent);
              return _;
            })(_, _);
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
              (_(_.Element, "vgp_onblur", _),
              !_.m_FocusRing ||
                (_ && _.m_FocusRing == _.m_FocusRing) ||
                _.m_FocusRing.OnBlur(_, _, _)),
            _ &&
              (_(_.Element, "vgp_onfocus", _),
              _.m_FocusRing &&
                (_ && _.m_FocusRing == _.m_FocusRing
                  ? _.m_FocusRing.OnFocusChange(_, _, _)
                  : _.m_FocusRing.OnFocus(_, _, _))),
            (this.m_lastFocusNode = _),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == _
              ? this.m_lastFocusNodeXMovement.SetNode(_?.Element)
              : "y" == _
                ? this.m_lastFocusNodeYMovement.SetNode(_?.Element)
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(_);
        }
      }
      class _ {
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
      }
      class _ {
        m_tree;
        m_target;
        m_interval;
        m_schExecuteQueuedFocus = new _();
        m_bSuppressed = !1;
        constructor(_) {
          this.m_tree = _;
        }
        RequestFocus(_, _) {
          _
            ? ((this.m_target = {
                ..._,
                node: _,
              }),
              this.m_interval ||
                this.m_bSuppressed ||
                this.m_schExecuteQueuedFocus.Schedule(1, () => {
                  (this.m_interval = void 0), this.ExecuteQueuedFocus();
                }))
            : (this.m_target = void 0);
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
          (this.m_bSuppressed = !1),
            (this.m_target = void 0),
            this.ClearInterval();
        }
        ClearInterval() {
          this.m_schExecuteQueuedFocus.Cancel();
        }
        ExecuteQueuedFocus() {
          if (((this.m_bSuppressed = !1), this.m_target)) {
            const { node: _, bFocusDescendant: _ } = this.m_target;
            (this.m_target = void 0),
              _(
                `DeferredFocus in ${this.m_tree._} - focusing ${_ ? "descendant of" : "node"} ${_.NavKey}`,
              ),
              _
                ? _.BChildTakeFocus(_.AUTOFOCUS) ||
                  this.m_tree.TransferFocus(_.AUTOFOCUS, _)
                : _.BTakeFocus(_.AUTOFOCUS) ||
                  this.m_tree.TakeFocus(_.AUTOFOCUS);
          }
        }
      }
      const _ = new _("FocusNavigation").Debug;
      class _ {
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
        m_FocusChangedCallbacks = new _._();
        m_NavTreeActivatedOrReactivatedCallbacks = new _._();
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
          for (
            let _ = this.m_rgGamepadNavigationTrees.length - 1;
            _ >= 0;
            _--
          ) {
            const _ = this.m_rgGamepadNavigationTrees[_];
            if (_.Window?.document.hasFocus()) return _;
          }
        }
        FindNavTreeInWindow(_, _ = !0) {
          for (
            let _ = this.m_rgGamepadNavigationTrees.length - 1;
            _ >= 0;
            _--
          ) {
            const _ = this.m_rgGamepadNavigationTrees[_];
            if ((!_ || _.BIsEnabled()) && _.Window == _) return _;
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
            if (_ && !this.m_controller.BCanActivateContext(this))
              return void _(
                `${this.LogName(_)} Skipping context activation due to CFocusNavWindowContext`,
              );
            const _ = this.m_valueIsActive.Value != _;
            _
              ? ((this.m_activeWindow = _),
                (this.m_activeBrowserView = _),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_valueIsActive.Set(_),
              _ &&
                this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(_);
          });
        }
        OnActivate(_) {
          (this.BIsActive() &&
            this.m_activeWindow == _ &&
            void 0 === this.m_activeBrowserView) ||
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
          let _;
          const _ = this.m_fnGetNavTreeToActivateOverride?.();
          if (_?.BIsEnabled()) _ = _;
          else
            for (
              let _ = this.m_rgGamepadNavigationTrees.length - 1;
              _ >= 0;
              _--
            ) {
              const _ = this.m_rgGamepadNavigationTrees[_];
              if (__webpack_require__.BIsEnabled()) {
                _ = _;
                break;
              }
            }
          return _?.FindModalDescendant() ?? _;
        }
        SetActiveNavTree(_, _ = !1) {
          if (_ && this.m_LastActiveNavTree == _)
            return void this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(
              _,
            );
          const _ = this.m_LastActiveNavTree;
          _ && _._(this.m_rgGamepadNavigationTrees, _),
            _ || (_ = this.FindNavTreeToActivate());
          const _ = this.m_LastActiveFocusNavTree == _;
          _ && _._(this.m_rgGamepadNavigationTrees, _),
            (this.m_LastActiveNavTree = _),
            (_ && _.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = _),
            _(
              `${this.LogName(_?.Window)} Move from nav tree ${_?._} to nav tree ${_?._} ${_ ? "taking focus" : "no focus"}`,
            ),
            _ && this.m_rgGamepadNavigationTrees.push(_),
            _ &&
              (this.m_rgGamepadNavigationTrees.push(_),
              _ ||
                !_ ||
                _.DeferredFocus.BHasQueuedFocusNode() ||
                _.DeferredFocus.RequestFocus(_.Root),
              this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(_)),
            _ &&
              _ != this.m_LastActiveFocusNavTree &&
              __webpack_require__.OnDeactivate(_),
            _ && !_ && _.OnActivate(_);
        }
        BlurNavTree(_) {
          this.m_LastActiveNavTree == _ && this.SetActiveNavTree(void 0, !0),
            _._(this.m_rgGamepadNavigationTrees, _),
            this.m_rgGamepadNavigationTrees.unshift(_);
        }
        async UnregisterGamepadNavigationTree(_) {
          _._(this.m_rgGamepadNavigationTrees, _),
            _(
              `(${this.m_rootWindow.name}) Unregister tree ${_?._} ${this.m_LastActiveFocusNavTree == _ ? "(was active)" : "(inactive)"}`,
            ),
            _.SetIsEnabled(!1),
            this.m_LastActiveNavTree == _ &&
              this.m_bMounted &&
              (await this.m_schDeferredActivate.AsyncSchedule(1, () => {
                (this.m_LastActiveNavTree && this.m_LastActiveNavTree != _) ||
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
            0 == this.m_iFocusChangeStack
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
            _(_ == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: _, from: _, _: _ } = this.m_ActiveFocusChange ?? {};
            this.m_FocusChangedCallbacks.Dispatch(_, _, _);
          }
        }
        get NavigationSourceGlyphInfo() {
          return this.m_controller.NavigationSourceGlyphInfo;
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = _.BinaryReader.prototype,
        _ = _.BinaryWriter.prototype;
      function _(_) {
        const _ = {},
          { fields: _ } = _;
        for (const _ in _) {
          const _ = _[_];
          _[_._] = _;
        }
        return _;
      }
      function _(_, _) {
        const { proto: _, fields: _ } = _,
          _ = new _();
        if (null == _) return _;
        for (const _ in _) {
          const { _: _, _: _, _: _, _: _, _: _ } = _[_];
          if (!Object.prototype.hasOwnProperty.call(_, _)) continue;
          const _ = _[_];
          _
            ? _
              ? _.Message.setRepeatedWrapperField(
                  _,
                  _,
                  Array.isArray(_) ? _.map((_) => _.fromObject(_)) : [],
                )
              : _.Message.setWrapperField(_, _, _.fromObject(_))
            : _.Message.setField(_, _, _);
        }
        return _;
      }
      function _(_, _, _) {
        const { proto: _, fields: _ } = _,
          _ = {};
        for (const _ in _) {
          const { _: _, _: _, _: _, _: _, _: _ } = _[_];
          if (_)
            if (_)
              _[_] = _.Message.toObjectList(
                _.Message.getRepeatedWrapperField(_, _, _),
                _.toObject,
                _,
              );
            else {
              const _ = _.Message.getWrapperField(_, _, _, _ ? 1 : 0);
              _ && (_[_] = _.toObject(_, _));
            }
          else {
            const _ = _.Message.getFieldWithDefault(
              _,
              _,
              void 0 !== _ ? _ : null,
            );
            (null !== _ || _) && (_[_] = _);
          }
        }
        return _ && (_.$jspbMessageInstance = _), _;
      }
      function _(_, _, _) {
        for (
          ;
          __webpack_require__.nextField() && !__webpack_require__.isEndGroup();
        ) {
          const _ = _[__webpack_require__.getFieldNumber()];
          if (_) {
            const { _: _, _: _, _: _, _: _, _: _, _: _ } = _;
            if (_) {
              const _ = new _();
              __webpack_require__.readMessage(_, _.deserializeBinaryFromReader),
                _
                  ? _.Message.addToRepeatedWrapperField(_, _, _, _)
                  : _.Message.setWrapperField(_, _, _);
            } else if (_) {
              const _ = _.call(_);
              _
                ? _.Message.addToRepeatedField(_, _, _)
                : _.Message.setField(_, _, _);
            } else
              console.assert(
                !!_,
                `Reader func not set for field number ${_} in class ${_}`,
              ),
                __webpack_require__.skipField();
          } else __webpack_require__.skipField();
        }
        return _;
      }
      function _(_, _, _) {
        const { fields: _ } = _;
        for (const _ in _) {
          const { _, _: _, _: _, _: _, _: _, _: _ } = _[_];
          if (_)
            if (_) {
              const _ = _.Message.getRepeatedWrapperField(_, _, _);
              ((_ && _.length) || _) &&
                __webpack_require__.writeRepeatedMessage(
                  _,
                  _,
                  _.serializeBinaryToWriter,
                );
            } else {
              const _ = _.Message.getWrapperField(_, _, _, _ ? 1 : 0);
              _ &&
                __webpack_require__.writeMessage(
                  _,
                  _,
                  _.serializeBinaryToWriter,
                );
            }
          else if (_) {
            const _ = _.Message.getField(_, _);
            void 0 !== _ && _.call(_, _, _);
          } else
            console.assert(
              !!_,
              `Writer func not set for field number ${_} in class ${_}`,
            );
        }
      }
      function _(_) {
        const _ = _.proto;
        for (const _ in _.fields) {
          const _ = _.fields[_],
            { _, _: _, _: _, _: _, _: _ } = _;
          Object.prototype.hasOwnProperty.call(_, "d")
            ? (_.prototype[_] = _(_.Message.getFieldWithDefault, _, _))
            : (_.prototype[_] = _
                ? _
                  ? _(_.Message.getRepeatedWrapperField, _, _)
                  : _(_, _)
                : _(_.Message.getField, _)),
            (_.prototype[`set_${_}`] = _(
              _
                ? _
                  ? _.Message.setRepeatedWrapperField
                  : _.Message.setWrapperField
                : _.Message.setField,
              _,
            )),
            _ && (_.prototype[`add_${_}`] = _(_, _));
        }
      }
      function _(_, ..._) {
        return function () {
          return _(this, ..._);
        };
      }
      function _(_, _) {
        return function (_ = !0) {
          return _.Message.getWrapperField(this, _, _, _ ? 1 : 0);
        };
      }
      function _(_, _) {
        return function (_) {
          return _(this, _, _);
        };
      }
      function _(_, _) {
        return _
          ? function (_, _) {
              return _.Message.addToRepeatedWrapperField(this, _, _, _, _);
            }
          : function (_, _) {
              _.Message.addToRepeatedField(this, _, _, _);
            };
      }
      async function _(_, _ = "SHA-256") {
        let _;
        var _;
        "string" == typeof _
          ? ((_ = _), (_ = new TextEncoder().encode(_).buffer))
          : (_ = _);
        return (function (_) {
          const _ = new Uint8Array(_);
          let _ = "";
          for (let _ = 0; _ < _.length; _++)
            _ += ("00" + _[_].toString(16)).slice(-2);
          return _;
        })(await window.crypto.subtle.digest(_, _));
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.original_hostname || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  original_hostname: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  actual_hostname: {
                    _: 2,
                    _: _.readString,
                    _: _.writeString,
                  },
                  path: {
                    _: 3,
                    _: _.readString,
                    _: _.writeString,
                  },
                  base_name: {
                    _: 4,
                    _: _.readString,
                    _: _.writeString,
                  },
                  success: {
                    _: 5,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  status_code: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  address_of_request_url: {
                    _: 7,
                    _: _.readString,
                    _: _.writeString,
                  },
                  response_time_ms: {
                    _: 8,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  bytes_received: {
                    _: 9,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  num_retries: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_RequestInfo";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.launcher_type || _(_._()),
            _.Message.initialize(this, _, 0, -1, [7, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  launcher_type: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  steam_realm: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  beta_name: {
                    _: 3,
                    _: _.readString,
                    _: _.writeString,
                  },
                  download_completed: {
                    _: 4,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  total_time_ms: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  manifest_requests: {
                    _: 7,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  package_requests: {
                    _: 8,
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Summary";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.class_100 || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  class_100: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  class_200: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  class_300: {
                    _: 3,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  class_400: {
                    _: 4,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  class_500: {
                    _: 5,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  no_response: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  class_unknown: {
                    _: 7,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.hostname || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  hostname: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  source_type: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  counts: {
                    _: 3,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_HostCounts";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.hosts || _(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  hosts: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Hosts";
        }
      }
      _.Message;
      _.Message;
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.dst_gcid_queue || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  dst_gcid_queue: {
                    _: 1,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  dst_gc_dir_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CMsgGCRoutingProtoBufHeader";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _(_._()),
            _.Message.initialize(this, _, 0, -1, [27, 41], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    _: 1,
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                  client_sessionid: {
                    _: 2,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  routing_appid: {
                    _: 3,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  jobid_source: {
                    _: 10,
                    _: "18446744073709551615",
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                  jobid_target: {
                    _: 11,
                    _: "18446744073709551615",
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                  target_job_name: {
                    _: 12,
                    _: _.readString,
                    _: _.writeString,
                  },
                  seq_num: {
                    _: 24,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  eresult: {
                    _: 13,
                    _: 2,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  error_message: {
                    _: 14,
                    _: _.readString,
                    _: _.writeString,
                  },
                  _: {
                    _: 15,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  ip_v6: {
                    _: 29,
                    _: _.readBytes,
                    _: _.writeBytes,
                  },
                  auth_account_flags: {
                    _: 16,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  token_source: {
                    _: 22,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  admin_spoofing_user: {
                    _: 23,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  transport_error: {
                    _: 17,
                    _: 1,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  messageid: {
                    _: 18,
                    _: "18446744073709551615",
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  publisher_group_id: {
                    _: 19,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  sysid: {
                    _: 20,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  webapi_key_id: {
                    _: 25,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  is_from_external_source: {
                    _: 26,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  forward_to_sysid: {
                    _: 27,
                    _: !0,
                    _: !0,
                    _: _.readUint32,
                    pbr: _.readPackedUint32,
                    _: _.writeRepeatedUint32,
                  },
                  cm_sysid: {
                    _: 28,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  launcher_type: {
                    _: 31,
                    _: 0,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  realm: {
                    _: 32,
                    _: 0,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  timeout_ms: {
                    _: 33,
                    _: -1,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  debug_source: {
                    _: 34,
                    _: _.readString,
                    _: _.writeString,
                  },
                  debug_source_string_index: {
                    _: 35,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  token_id: {
                    _: 36,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  routing_gc: {
                    _: 37,
                    _: _,
                  },
                  session_disposition: {
                    _: 38,
                    _: 0,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  wg_token: {
                    _: 39,
                    _: _.readString,
                    _: _.writeString,
                  },
                  webui_auth_key: {
                    _: 40,
                    _: _.readString,
                    _: _.writeString,
                  },
                  exclude_client_sessionids: {
                    _: 41,
                    _: !0,
                    _: !0,
                    _: _.readInt32,
                    pbr: _.readPackedInt32,
                    _: _.writeRepeatedInt32,
                  },
                  admin_request_spoofing_steamid: {
                    _: 43,
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                  is_valveds: {
                    _: 44,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  trace_tag: {
                    _: 45,
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      _.Message;
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.manufacturer || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  manufacturer: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  model: {
                    _: 2,
                    _: _.readString,
                    _: _.writeString,
                  },
                  dx_video_card: {
                    _: 3,
                    _: _.readString,
                    _: _.writeString,
                  },
                  dx_vendorid: {
                    _: 4,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  dx_deviceid: {
                    _: 5,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  num_gpu: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  system_ram: {
                    _: 7,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  _: {
                    _: 8,
                    _: _.readString,
                    _: _.writeString,
                  },
                  cpu_vendor: {
                    _: 9,
                    _: _.readString,
                    _: _.writeString,
                  },
                  cpu_name: {
                    _: 10,
                    _: _.readString,
                    _: _.writeString,
                  },
                  gaming_device_type: {
                    _: 11,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  dx_driver_version: {
                    _: 12,
                    _: _.readString,
                    _: _.writeString,
                  },
                  adapter_description: {
                    _: 14,
                    _: _.readString,
                    _: _.writeString,
                  },
                  driver_version: {
                    _: 15,
                    _: _.readString,
                    _: _.writeString,
                  },
                  driver_date: {
                    _: 16,
                    _: _.readString,
                    _: _.writeString,
                  },
                  vram_size: {
                    _: 17,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  screen_width: {
                    _: 18,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  screen_height: {
                    _: 19,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  precise_frame_rate: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "UserSystemInformation";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.setting || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  setting: {
                    _: 1,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  game_resolution_width: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  game_resolution_height: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "GamePerformanceSettings";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.raw_version || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  raw_version: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  requested_interface_type: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceCreation";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.interface_name || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  interface_name: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  method_name: {
                    _: 2,
                    _: _.readString,
                    _: _.writeString,
                  },
                  call_count: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceMethodCounts";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.game_id || _(_._()),
            _.Message.initialize(this, _, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  game_id: {
                    _: 1,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  interfaces_created: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  methods_called: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  session_length_seconds: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceStats_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.protocol_tested || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  protocol_tested: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  connectivity_state: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Result";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.cell_id || _(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  cell_id: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  results: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  private_ip_is_rfc6598: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.product || _(_._()),
            _.Message.initialize(this, _, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  product: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  version: {
                    _: 2,
                    _: _.readString,
                    _: _.writeString,
                  },
                  routes: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  components: {
                    _: 4,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  actions: {
                    _: 5,
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.route || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  route: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  count: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_RouteData";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.component || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  component: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  count: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.action || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  action: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  count: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ActionData";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.product || _(_._()),
            _.Message.initialize(this, _, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  product: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  version: {
                    _: 2,
                    _: _.readString,
                    _: _.writeString,
                  },
                  errors: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  tags: {
                    _: 4,
                    _: !0,
                    _: !0,
                    _: _.readString,
                    _: _.writeRepeatedString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.identifier || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  identifier: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  message: {
                    _: 2,
                    _: _.readString,
                    _: _.writeString,
                  },
                  count: {
                    _: 3,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  context: {
                    _: 4,
                    _: _.readString,
                    _: _.writeString,
                  },
                  url: {
                    _: 5,
                    _: _.readString,
                    _: _.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.type || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  type: {
                    _: 1,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  num_ops: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  num_bytes: {
                    _: 3,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  busy_time_ms: {
                    _: 4,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  idle_time_ms: {
                    _: 5,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  sum_run_time_ms: {
                    _: 6,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  sum_wait_time_ms: {
                    _: 7,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Operation";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _(_._()),
            _.Message.initialize(this, _, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  depotid: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  work_type: {
                    _: 3,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  operations: {
                    _: 4,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  hardware_type: {
                    _: 5,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.summary || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  summary: {
                    _: 1,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.cell_id || _(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  cell_id: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  stats: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  throttling_kbps: {
                    _: 3,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  os_type: {
                    _: 4,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  device_type: {
                    _: 5,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.source_type || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  source_type: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  source_id: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  bytes: {
                    _: 3,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  host_name: {
                    _: 4,
                    _: _.readString,
                    _: _.writeString,
                  },
                  microseconds: {
                    _: 5,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  used_ipv6: {
                    _: 6,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  proxied: {
                    _: 7,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  used_http2: {
                    _: 8,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  cache_hits: {
                    _: 9,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  cache_misses: {
                    _: 10,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  hit_bytes: {
                    _: 11,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  miss_bytes: {
                    _: 12,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  chunks_scored: {
                    _: 13,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  sum_chunk_scores: {
                    _: 14,
                    _: _.readDouble,
                    _: _.writeDouble,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification_StatsInfo";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.validation_result || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  validation_result: {
                    _: 1,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  app_id: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  staged_files: {
                    _: 3,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  user_initiated: {
                    _: 4,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  early_out: {
                    _: 5,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  chunks_scanned: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  chunks_corrupt: {
                    _: 7,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  bytes_scanned: {
                    _: 8,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  chunk_bytes_corrupt: {
                    _: 9,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  total_file_size_corrupt: {
                    _: 10,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentValidation_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.app_id || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  app_id: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  platform_type: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  preload: {
                    _: 3,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  blocking_app_launch: {
                    _: 4,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  files_uploaded: {
                    _: 5,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  files_downloaded: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  files_deleted: {
                    _: 7,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  bytes_uploaded: {
                    _: 8,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  bytes_downloaded: {
                    _: 9,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_total: {
                    _: 10,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_init_caches: {
                    _: 11,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_validate_state: {
                    _: 12,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_ac_launch: {
                    _: 13,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_ac_prep_user_files: {
                    _: 14,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_ac_exit: {
                    _: 15,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_build_sync_list: {
                    _: 16,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_delete_files: {
                    _: 17,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_download_files: {
                    _: 18,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  microsec_upload_files: {
                    _: 19,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  hardware_type: {
                    _: 20,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  files_managed: {
                    _: 21,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_CloudAppSyncStats_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.cell_id || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  cell_id: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  data: {
                    _: 2,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.eresult || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  eresult: {
                    _: 1,
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  share_method: {
                    _: 2,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  seconds: {
                    _: 3,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  bytes: {
                    _: 4,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  gameid: {
                    _: 5,
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipShare_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.original_range_method || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  original_range_method: {
                    _: 1,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  start: {
                    _: 2,
                    _: _,
                  },
                  end: {
                    _: 3,
                    _: _,
                  },
                  seconds: {
                    _: 4,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  gameid: {
                    _: 5,
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.original_range_method || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  original_range_method: {
                    _: 1,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  latest_range_method: {
                    _: 2,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  delta_ms: {
                    _: 3,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recording_type || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  recording_type: {
                    _: 1,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  seconds: {
                    _: 2,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  bytes: {
                    _: 3,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  gameid: {
                    _: 4,
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                  instant_clip: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_EndGameRecording_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.frame_rates || _(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  frame_rates: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  system_info: {
                    _: 3,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.gameid || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  gameid: {
                    _: 1,
                    _: _.readFixed64String,
                    _: _.writeFixed64String,
                  },
                  frame_rate: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  session_seconds: {
                    _: 3,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  framegen_frame_rate: {
                    _: 4,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  game_settings: {
                    _: 5,
                    _: _,
                  },
                  seconds_since_active: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification_FrameRate";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.client_args || _(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_args: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _.readString,
                    _: _.writeRepeatedString,
                  },
                  gpu_webview_regkey_disabled: {
                    _: 2,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  suppress_gpu_chrome: {
                    _: 3,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  browser_not_supported: {
                    _: 4,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  hw_accel_video_regkey_disabled: {
                    _: 5,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  mini_mode_enabled: {
                    _: 6,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  fps_counter_enabled: {
                    _: 7,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  library_low_bandwidth_mode_enabled: {
                    _: 8,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  library_low_perf_mode_enabled: {
                    _: 9,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  gr_mode: {
                    _: 10,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientArgs_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.accessibility_desktop_ui_scale || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  accessibility_desktop_ui_scale: {
                    _: 1,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  accessibility_screen_reader_enabled: {
                    _: 2,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  accessibility_high_contrast_mode: {
                    _: 3,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  accessibility_reduce_motion: {
                    _: 4,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  accessibility_color_filter_name: {
                    _: 5,
                    _: _.readString,
                    _: _.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportAccessibilitySettings_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.glibc_version_major || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  glibc_version_major: {
                    _: 1,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  glibc_version_minor: {
                    _: 2,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  account_type: {
                    _: 3,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  launcher_type: {
                    _: 4,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  game_server_appid: {
                    _: 5,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  process_name: {
                    _: 6,
                    _: _.readString,
                    _: _.writeString,
                  },
                  kernel_version_major: {
                    _: 7,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  kernel_version_minor: {
                    _: 8,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportLinuxStats_Notification";
        }
      }
      var _;
      !(function (_) {
        (_.ClientAppInterfaceStatsReport = function (_, _) {
          return _.SendNotification(
            "ClientMetrics.ClientAppInterfaceStatsReport#1",
            _(_, _),
            {
              ePrivilege: 1,
            },
          );
        }),
          (_.ClientIPv6ConnectivityReport = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ClientIPv6ConnectivityReport#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.SteamPipeWorkStatsReport = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.SteamPipeWorkStatsReport#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportReactUsage = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportReactUsage#1",
              _(_, _),
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }),
          (_.ReportClientError = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportClientError#1",
              _(_, _),
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }),
          (_.ClientBootstrapReport = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ClientBootstrapReport#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ClientDownloadRatesReport = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ClientDownloadRatesReport#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ClientContentValidationReport = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ClientContentValidationReport#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ClientCloudAppSyncStats = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ClientCloudAppSyncStats#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ClientDownloadResponseCodeCounts = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ClientDownloadResponseCodeCounts#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportClientArgs = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportClientArgs#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportLinuxStats = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportLinuxStats#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportAccessibilitySettings = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportAccessibilitySettings#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportClipShare = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportClipShare#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportClipRange = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportClipRange#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportEndGameRecording = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportEndGameRecording#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ReportGamePerformance = function (_, _) {
            return _.SendNotification(
              "ClientMetrics.ReportGamePerformance#1",
              _(_, _),
              {
                ePrivilege: 1,
              },
            );
          });
      })(_ || (_ = {}));
      const _ =
        window.addEventListener ||
        (globalThis && globalThis.addEventListener) ||
        (() => {});
      let _,
        _ = [],
        _ = (_, _, _) =>
          _.push({
            error: _,
            cCallsitesToIgnore: _,
            strComponentStack: _,
          });
      const _ = !0;
      class _ extends Error {
        constructor(..._) {
          super(..._), (this.name = "Assertion Failed");
        }
      }
      {
        const _ = console.assert;
        console.assert = (_, _, ..._) => {
          if (!_) {
            const _ = _();
            _(new _(_(_, ..._)), 2, _);
          }
          _.apply(console, [_, _, ..._]);
        };
        const _ = console.error;
        (console.error = (_, ..._) => {
          const _ = _();
          _(new Error(_(_, ..._)), 1, _), _.apply(console, [_, ..._]);
        }),
          (console.clogerror = (_, _, ..._) => {
            const _ = _();
            _(new Error(_(_, ..._)), _ + 1, _), _.apply(console, [_, ..._]);
          }),
          _("error", (_) => {
            _(_.error, 0);
          }),
          _("unhandledrejection", (_) => {
            _(_.reason, 0);
          }),
          (_ = window.setTimeout(() => {
            (_ = []), (_ = () => {});
          }, 3e4));
      }
      const _ = {
          cCallsitesToIgnore: 0,
          bIncludeMessageInIdentifier: !1,
        },
        _ = [
          "(localhost|127.0.0.1):(?!(80|443))",
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Millennium internal",
          "millenium",
          "millennium",
          "Refused unauthorized RPC command",
        ];
      function _() {
        try {
          const _ =
            _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
          if (
            _ &&
            "object" == typeof _ &&
            "function" == typeof _.getCurrentStack
          ) {
            const _ = _.getCurrentStack();
            if ("string" == typeof _) return _;
          }
        } catch (_) {}
      }
      class _ {
        m_strProduct;
        m_strVersion;
        m_transport = null;
        m_rgErrorQueue = [];
        m_sendTimer = null;
        m_bReportingPaused = !1;
        m_pauseTimer = void 0;
        m_fnGetReportingInterval = _;
        m_fnGetReportTags = () => [];
        m_fnGetURL = () => location.href;
        m_bEnabled = !0;
        m_bInitialized = !1;
        constructor(_ = !0) {
          _
            ? (_.forEach(
                ({ error: _, cCallsitesToIgnore: _, strComponentStack: _ }) =>
                  this.ReportError(_, {
                    cCallsitesToIgnore: _,
                    strComponentStack: _,
                  }),
              ),
              (_ = (_, _, _) =>
                this.ReportError(_, {
                  cCallsitesToIgnore: _,
                  strComponentStack: _,
                })))
            : (_ = () => {}),
            (_ = []),
            clearTimeout(_),
            window.setTimeout(() => {
              this.m_bInitialized ||
                ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
            }, 3e4);
        }
        Init(_, _, _, _ = {}) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = _),
            (this.m_strVersion = _),
            (this.m_transport = _),
            _.fnGetReportingInterval &&
              (this.m_fnGetReportingInterval = _.fnGetReportingInterval),
            _.fnGetReportTags && (this.m_fnGetReportTags = _.fnGetReportTags),
            _.fnGetURL && (this.m_fnGetURL = _.fnGetURL),
            this.m_bEnabled ||
              (console.error(
                "Error reporting was initialized after being disabled, possibly dropping errors.",
              ),
              (this.m_bEnabled = !0)),
            this.m_rgErrorQueue.length &&
              (this.SendErrorReports(this.m_rgErrorQueue),
              (this.m_rgErrorQueue = []));
        }
        SetGetURL(_) {
          this.m_fnGetURL = _;
        }
        async ReportError(_, _) {
          if (!_)
            return (
              console.warn(
                "Failed to report error: ReportError() was called without an error to report.",
              ),
              null
            );
          try {
            const _ = {
              ..._,
              ..._,
            };
            if (!this.m_bEnabled) return null;
            0;
            const _ = await (function (_, _) {
              try {
                return _.stack && _.stack.match(_)
                  ? (async function (_, _) {
                      const {
                          cCallsitesToIgnore: _,
                          bIncludeMessageInIdentifier: _,
                        } = _,
                        { message: _, stack: _ } = _,
                        _ = _?.split("\n") ?? [];
                      let _ = _(_.filter((_) => !!_.match(_))[_]);
                      _ && (_ = `${_} ${_}`);
                      const _ = _.map((_) => {
                        let _ = _.match(/(.*)\((.*):(\d+):(\d+)\)/);
                        if (
                          ((_ && 5 == _.length) ||
                            (_ = _.match(/(.*at )(http.*):(\d+):(\d+)/)),
                          !_)
                        )
                          return _;
                        if (5 === _.length) {
                          const [_, _, _, _, _] = _,
                            _ = parseInt(_),
                            _ = parseInt(_);
                          if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
                        }
                        return _;
                      }).filter((_) => !!_);
                      return {
                        identifier: _,
                        identifierHash: await _(_),
                        message: _,
                      };
                    })(_, _)
                  : _.stack && _.stack.match(_)
                    ? (async function (_, _) {
                        const {
                            cCallsitesToIgnore: _,
                            bIncludeMessageInIdentifier: _,
                          } = _,
                          _ = _.stack?.split("\n") ?? [];
                        let _ = _(_.filter((_) => !!_.match(_))[_]);
                        _ && (_ = `${_} ${_.message}`);
                        const _ = _.map((_) => {
                          const _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
                          if (!_) return _;
                          if (5 === _.length) {
                            const [_, _, _, _, _] = _,
                              _ = parseInt(_),
                              _ = parseInt(_);
                            if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
                          }
                          return _;
                        }).filter((_) => !!_);
                        return {
                          identifier: _,
                          identifierHash: await _(_),
                          message: [_.message, ..._],
                        };
                      })(_, _)
                    : _.stack && _.stack.match(_)
                      ? (async function (_, _) {
                          const {
                              bIncludeMessageInIdentifier: _,
                              cCallsitesToIgnore: _,
                            } = _,
                            _ = _.stack?.split("\n") ?? [],
                            _ = _[_],
                            _ = _.split("/");
                          let _ = _[_.length - 1];
                          _.indexOf("@") > -1 &&
                            (_ = _.split("@")[0] + "@" + _);
                          _ && (_ = `${_} ${_.message}`);
                          const _ = _.map((_) => {
                            const _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
                            if (!_) return _;
                            if (5 === _.length) {
                              const [_, _, _, _, _] = _,
                                _ = parseInt(_),
                                _ = parseInt(_);
                              if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
                            }
                            return _;
                          }).filter((_) => !!_);
                          return {
                            identifier: _,
                            identifierHash: await _(_),
                            message: [_.message, ..._],
                          };
                        })(_, _)
                      : (_ ||
                          (console.warn(
                            "Error reporter does not know how to parse generated stack:",
                          ),
                          console.warn(_.stack),
                          (_ = !0)),
                        null);
              } catch (_) {
                return (
                  console.warn(`Failed to normalize error stack: ${_}`), null
                );
              }
            })(_, _);
            return _
              ? (_.cCallsitesToIgnore &&
                  _.message.splice(1, _.cCallsitesToIgnore),
                _.strComponentStack &&
                  (_.strComponentStack = _.strComponentStack),
                (_.strUrl = this.m_fnGetURL()),
                this.SendErrorReport(_),
                _)
              : null;
          } catch (_) {
            return console.log(`Failed to report error: ${_}`), null;
          }
        }
        PauseReportingForDuration(_) {
          this.PauseReporting(),
            (this.m_pauseTimer = window.setTimeout(
              () => this.ResumeReporting(),
              _,
            ));
        }
        PauseReporting() {
          (this.m_bReportingPaused = !0),
            window.clearTimeout(this.m_pauseTimer);
        }
        ResumeReporting() {
          (this.m_bReportingPaused = !1),
            window.clearTimeout(this.m_pauseTimer),
            this.ScheduleSend();
        }
        BIsBlacklisted(_) {
          for (let _ of _.message) {
            let _ = JSON.stringify(_);
            for (let _ of _) {
              const _ = new RegExp(_);
              if (__webpack_require__.match(_))
                return console.warn("Report", _, "matched regex", _), !0;
            }
          }
          return !1;
        }
        SendErrorReport(_) {
          this.BIsBlacklisted(_) ||
            (this.m_transport
              ? this.QueueReport(_)
              : this.m_rgErrorQueue.push(_));
        }
        QueueReport(_) {
          this.m_rgErrorQueue.push(_),
            this.m_bReportingPaused || this.ScheduleSend();
        }
        ScheduleSend() {
          this.m_sendTimer ||
            (this.m_sendTimer = window.setTimeout(() => {
              this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = []),
                (this.m_sendTimer = null);
            }, this.m_fnGetReportingInterval()));
        }
        SendErrorReports(_) {
          if (!_ || !_.length) return;
          const _ = _.Init(_),
            _ = _.reduce(
              (_, _) => (
                _[_.identifier]
                  ? _[_.identifier].count++
                  : (_[_.identifier] = {
                      report: _,
                      count: 1,
                    }),
                _
              ),
              {},
            ),
            _ = Object.keys(_).map((_) => {
              const { report: _, count: _ } = _[_],
                _ = new _();
              let _;
              return (
                _.set_count(_),
                _.set_identifier(_.identifier + " " + _.identifierHash),
                _.set_message(JSON.stringify(_.message)),
                _.strComponentStack &&
                  ((_ ??= {}), (_.componentStack = _.strComponentStack)),
                _ && _.set_context(JSON.stringify(_)),
                _.strUrl && _.set_url(_.strUrl),
                _
              );
            });
          _.Body().set_product(this.m_strProduct),
            _.Body().set_version(this.m_strVersion),
            _.Body().set_errors(_);
          for (const _ of this.m_fnGetReportTags()) _.Body().add_tags(_);
          _.ReportClientError(this.m_transport, _);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
        get reporting_enabled() {
          return _;
        }
      }
      function _(_, ..._) {
        if ("string" == typeof _ && 0 === _.length) return _;
        return [_, ..._]
          .map((_) => {
            try {
              let _ = String(_);
              return "[object Object]" == _ && (_ = JSON.stringify(_)), _;
            } catch (_) {
              return "[Stringify Error]";
            }
          })
          .join(", ");
      }
      const _ = /^\s*at .*(\S+:\d+|\(native\))/m,
        _ = /(^|@)\S+:\d+/,
        _ = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let _,
        _ = !1;
      function _(_) {
        return (function (_) {
          const _ = "https://",
            _ = _.indexOf(_);
          if (-1 === _) return _;
          const _ = _.indexOf("/", _ + _.length);
          return -1 === _ ? _ : _.slice(0, _) + _.slice(_);
        })(
          (function (_) {
            const _ = _.lastIndexOf("?");
            if (-1 === _) return _;
            const _ = _.indexOf(":", _);
            return -1 === _ ? _ : _.slice(0, _) + _.slice(_);
          })(_),
        );
      }
      const _ = () => (_ || (_ = new _()), _);
      async function _(_) {
        try {
          return (await _(_)).slice(0, 16);
        } catch (_) {
          return "";
        }
      }
      function _() {
        return 1e4;
      }
      class _ {
        m_nOffset;
        m_nLength;
        m_viewPacket;
        m_rgubPacket;
        m_iGet;
        m_iPut;
        constructor(_, _ = 0, _) {
          (this.m_nOffset = _ || 0),
            _ instanceof Uint8Array || _ instanceof DataView
              ? ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
                (this.m_nOffset += _.byteOffset),
                (this.m_viewPacket = new DataView(
                  _.buffer,
                  this.m_nOffset,
                  this.m_nLength,
                )))
              : ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
                (this.m_viewPacket = new DataView(
                  _,
                  this.m_nOffset,
                  this.m_nLength,
                ))),
            (this.m_rgubPacket = new Uint8Array(
              this.m_viewPacket.buffer,
              this.m_viewPacket.byteOffset,
              this.m_viewPacket.byteLength,
            )),
            (this.m_iGet = 0),
            (this.m_iPut = 0);
        }
        TellGet() {
          return this.m_iGet + this.m_viewPacket.byteOffset;
        }
        GetPacket() {
          return this.m_viewPacket.buffer;
        }
        GetUint8() {
          return this.m_viewPacket.getUint8(this.m_iGet++);
        }
        GetUint32(_ = !0) {
          const _ = this.m_viewPacket.getUint32(this.m_iGet, _);
          return (this.m_iGet += 4), _;
        }
        SeekGetHead(_ = 0) {
          this.m_iGet = _ || 0;
        }
        SeekGetCurrent(_) {
          this.m_iGet += _;
        }
        TellPut() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }
        TellMaxPut() {
          return this.m_viewPacket.byteLength;
        }
        PutUint8(_) {
          this.m_viewPacket.setUint8(this.m_iPut++, _);
        }
        PutUint32(_, _ = !0) {
          this.m_viewPacket.setUint32(this.m_iPut, _, _), (this.m_iPut += 4);
        }
        PutBytes(_) {
          this.m_rgubPacket.set(_, this.m_iPut), (this.m_iPut += _.length);
        }
        SeekPut(_) {
          this.m_iPut += _;
        }
        GetCountBytesRemaining() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }
      }
      class _ {
        static InitHeaderFromPacket(_) {
          return new _(void 0, _);
        }
        m_eMsg;
        m_bValid;
        m_netPacket;
        m_cubHeader;
        m_header;
        m_body;
        constructor(_, _, _, _, _, _) {
          if (_)
            (this.m_eMsg = _.m_eMsg),
              (this.m_bValid = _.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = _.m_netPacket),
                (this.m_cubHeader = _.m_cubHeader),
                (this.m_header = _.m_header),
                this.InitForType(_));
          else {
            if (((this.m_header = new _(null)), (this.m_bValid = !0), _))
              if (
                ((this.m_netPacket = _),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  _.deserializeBinaryFromReader(
                    this.m_header,
                    new _.BinaryReader(
                      this.m_netPacket.GetPacket(),
                      this.m_netPacket.TellGet(),
                      this.m_cubHeader,
                    ),
                  ),
                    this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                    _ && this.InitForType(_);
                } catch (_) {
                  console.error("Exception deserializing protobuf", _),
                    (this.m_bValid = !1);
                }
              } else this.m_bValid = !1;
            else
              _ && (this.m_eMsg = _),
                _ && _
                  ? (this.m_body = __webpack_require__.fromObject(_))
                  : _ && (this.m_body = new _());
            _ && this.m_header.set_jobid_target(_.Hdr().jobid_target());
          }
        }
        InitForType(_) {
          (this.m_body = new _()),
            this.m_netPacket &&
              (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
              this.ReadBodyFromBuffer(_, this.m_netPacket));
        }
        ReadBodyFromBuffer(_, _) {
          try {
            _.deserializeBinaryFromReader(
              this.m_body,
              new _.BinaryReader(
                _.GetPacket(),
                _.TellGet(),
                _.GetCountBytesRemaining(),
              ),
            );
          } catch (_) {
            this.m_bValid = !1;
            const _ = _(),
              _ = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
            _ &&
              _.ReportError(new Error(_), {
                bIncludeMessageInIdentifier: !0,
              }),
              console.warn(_),
              console.log(_.stack || _);
          }
        }
        BIsValid() {
          return this.m_bValid;
        }
        Body() {
          return this.m_body;
        }
        SetBodyJSON(_) {
          (_.toObject = () => _), (this.m_body = _);
        }
        Hdr() {
          return this.m_header;
        }
        GetEMsg() {
          return this.m_eMsg;
        }
        SetEMsg(_) {
          this.m_eMsg = _;
        }
        GetEResult() {
          return this.Hdr().eresult();
        }
        BSuccess() {
          return 1 == this.Hdr().eresult();
        }
        GetErrorMessage() {
          return this.Hdr().error_message()
            ? this.Hdr().error_message()
            : `eresult ${this.Hdr().eresult()}`;
        }
        Serialize() {
          const _ = this.m_header.serializeBinary(),
            _ = this.m_body.serializeBinary(),
            _ = 2147483648 | this.m_eMsg,
            _ = new Uint8Array(8 + _.length + _.length),
            _ = new _(_);
          return (
            _.PutUint32(_),
            _.PutUint32(_.length),
            _.PutBytes(_),
            _.PutBytes(_),
            _
          );
        }
        SerializeBody() {
          const _ = this.m_body.serializeBinary(),
            _ = new Uint8Array(_.length);
          return new _(_).PutBytes(_), _;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class _ extends _ {
        constructor(_, _ = 0, _, _, _) {
          super(_, _, _, _, void 0, _);
        }
        static InitFromPacket(_, _) {
          return new _(_, 0, _);
        }
        static InitFromMsg(_, _) {
          return new _(_, void 0, void 0, _);
        }
        static Init(_, _) {
          return new _(_, _);
        }
        static InitFromObject(_, _) {
          return new _(_, void 0, void 0, void 0, _);
        }
        Body() {
          return super.Body();
        }
        SetBodyFields(_) {
          for (const _ in _)
            Array.isArray(_[_])
              ? this.Body()[`add_${_}`] &&
                _[_].forEach((_) => {
                  this.Body()[`add_${_}`](_);
                })
              : this.Body()[`set_${_}`] && this.Body()[`set_${_}`](_[_]);
        }
      }
      function _(_, _, _) {
        let _;
        return (
          (_ = _ instanceof _ ? _ : _.InitFromObject(_, _)),
          void 0 !== _?.strDebugSource &&
            _.Hdr().set_debug_source(_.strDebugSource),
          _
        );
      }
      const _ = new (class {
        m_transport = null;
        m_registry = null;
        SetDefaultTransport(_) {
          null != this.m_transport &&
            console.error(
              "Multiple attempts to set a default WebUI transport: overriding previous",
            ),
            (this.m_transport = _);
        }
        GetDefaultTransport() {
          return this.m_transport;
        }
        SetDefaultHandlerRegistry(_) {
          null != this.m_registry &&
            console.error(
              "Multiple attempts to set a default WebUI message handler registry: overriding previous",
            ),
            (this.m_registry = _);
        }
        GetDefaultHandlerRegistry() {
          return this.m_registry;
        }
      })();
      function _() {
        return _;
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  dpad_up: {
                    _: 2,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  dpad_down: {
                    _: 3,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  dpad_left: {
                    _: 4,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  dpad_right: {
                    _: 5,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_south: {
                    _: 6,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_east: {
                    _: 7,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_west: {
                    _: 8,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_north: {
                    _: 9,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_back_view: {
                    _: 10,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_start_options: {
                    _: 11,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_steam: {
                    _: 12,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_quick_access: {
                    _: 13,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_mute_capture: {
                    _: 14,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_stick_click: {
                    _: 15,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_stick_touch: {
                    _: 16,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_stick_deflect: {
                    _: 17,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_stick_click: {
                    _: 18,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_stick_touch: {
                    _: 19,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_stick_deflect: {
                    _: 20,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  center_trackpad_touch: {
                    _: 21,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  center_trackpad_click: {
                    _: 22,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_trackpad_touch: {
                    _: 23,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_trackpad_click: {
                    _: 24,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_trackpad_touch: {
                    _: 25,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_trackpad_click: {
                    _: 26,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_bumper: {
                    _: 27,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_trigger: {
                    _: 28,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  _: {
                    _: 29,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  _: {
                    _: 30,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  left_aux: {
                    _: 31,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_bumper: {
                    _: 32,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_trigger: {
                    _: 33,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  _: {
                    _: 34,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  _: {
                    _: 35,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_aux: {
                    _: 36,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  button_state_bits: {
                    _: 37,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerButtonStateChanged_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype._ || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  _: {
                    _: 1,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  _: {
                    _: 2,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector2";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype._ || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  _: {
                    _: 1,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  _: {
                    _: 2,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  _: {
                    _: 3,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector3";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype._ || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  _: {
                    _: 1,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  _: {
                    _: 2,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  _: {
                    _: 3,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  _: {
                    _: 4,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ControllerQuaternion";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.pitch || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  pitch: {
                    _: 1,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  yaw: {
                    _: 2,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  roll: {
                    _: 3,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "ControllerGyroEulerAngles";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  joystick_left: {
                    _: 2,
                    _: _,
                  },
                  joystick_right: {
                    _: 3,
                    _: _,
                  },
                  trackpad_left: {
                    _: 4,
                    _: _,
                  },
                  trackpad_right: {
                    _: 5,
                    _: _,
                  },
                  trackpad_center: {
                    _: 6,
                    _: _,
                  },
                  trackpad_pressure_left: {
                    _: 7,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  trackpad_pressure_right: {
                    _: 8,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  trigger_left: {
                    _: 9,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  trigger_right: {
                    _: 10,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAxesStateChange_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  imu_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  gyro_raw_quaternion: {
                    _: 3,
                    _: _,
                  },
                  gyro_filtered_quaternion: {
                    _: 4,
                    _: _,
                  },
                  imu_sensor_delta_time: {
                    _: 5,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  estimated_packet_rate: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroQuaternionChanged_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  imu_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  gyro_raw_speed: {
                    _: 3,
                    _: _,
                  },
                  gyro_filtered_speed: {
                    _: 4,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSpeedChanged_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  imu_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  acceleromter_1g: {
                    _: 4,
                    _: _,
                  },
                  trusted_gravity_1g: {
                    _: 5,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroAccelerometerChanged_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  imu_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  acceleromter_noise: {
                    _: 3,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  gyroscope_noise: {
                    _: 4,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  calibration_progress: {
                    _: 5,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  calibration_state: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  gyroscope_noise_tolerance: {
                    _: 7,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  accelerometer_noise_tolerance: {
                    _: 8,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroCalibration_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  flow_mode: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  side: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  dongle_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  slot: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Response";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_SteamDonglesChanged_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonPluggedIn_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.docked_puck_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  docked_puck_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonDocked_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.docked_puck_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  docked_puck_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonUndocked_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPairingChanged_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.include_bonds || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  include_bonds: {
                    _: 1,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steam_controller_v1 || _(_._()),
            _.Message.initialize(this, _, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steam_controller_v1: {
                    _: 1,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  ibex_internal: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  ibex_external: {
                    _: 3,
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  dongle_serial_number: {
                    _: 2,
                    _: _.readString,
                    _: _.writeString,
                  },
                  paired_serial_number: {
                    _: 3,
                    _: _.readString,
                    _: _.writeString,
                  },
                  paired: {
                    _: 4,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  docked: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response_Dongle";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.pair_type || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  pair_type: {
                    _: 1,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                  controller_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  dongle_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_type || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_type: {
                    _: 1,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  controller_style: {
                    _: 2,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  source: {
                    _: 3,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  input: {
                    _: 4,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CControllerOriginKey";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.key || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  key: {
                    _: 1,
                    _: _,
                  },
                  localized_string: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CControllerAccessibilityString";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.strings || _(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  strings: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.idx || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  idx: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPowerMenu_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerDisconnected_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.slot || _(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  slot: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  connection_type: {
                    _: 2,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.serial_number || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  serial_number: {
                    _: 1,
                    _: _.readString,
                    _: _.writeString,
                  },
                  active: {
                    _: 2,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  type: {
                    _: 3,
                    _: _.readEnum,
                    _: _.writeEnum,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response_Slot";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  slot_index: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.dongle_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  dongle_index: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.serial_number || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  serial_number: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_name || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_name: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  enable: {
                    _: 2,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  initialized: {
                    _: 2,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  controller_type: {
                    _: 3,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  controller_style: {
                    _: 4,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  xinput_index: {
                    _: 5,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  is_wireless_steam_dongle: {
                    _: 6,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  vendor_id: {
                    _: 7,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  product_id: {
                    _: 8,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  capabilities: {
                    _: 9,
                    _: _.readUint64String,
                    _: _.writeUint64String,
                  },
                  firmware_version: {
                    _: 10,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  firmware_build_time: {
                    _: 11,
                    _: _.readString,
                    _: _.writeString,
                  },
                  serial_number: {
                    _: 12,
                    _: _.readString,
                    _: _.writeString,
                  },
                  cpu_id: {
                    _: 13,
                    _: _.readString,
                    _: _.writeString,
                  },
                  name: {
                    _: 14,
                    _: _.readString,
                    _: _.writeString,
                  },
                  is_remote_device: {
                    _: 15,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  is_bluetooth: {
                    _: 16,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  has_touchscreen: {
                    _: 17,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  mac_addr: {
                    _: 18,
                    _: !0,
                    _: !0,
                    _: _.readString,
                    _: _.writeRepeatedString,
                  },
                  battery_level: {
                    _: 19,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  is_charging: {
                    _: 20,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  led_brightness: {
                    _: 21,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  led_saturation: {
                    _: 22,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  turn_on_sound: {
                    _: 23,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  turn_off_sound: {
                    _: 24,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  led_red: {
                    _: 25,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  led_green: {
                    _: 26,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  led_blue: {
                    _: 27,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  deadzone_left_stick: {
                    _: 28,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  deadzone_right_stick: {
                    _: 29,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  haptics_enabled: {
                    _: 30,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  gyro_sw_antidrift_enabled: {
                    _: 31,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  gyro_one_euro_filter_enabled: {
                    _: 32,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  haptic_strength_left: {
                    _: 33,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  haptic_strength_right: {
                    _: 34,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  pad_pressure_curve_left: {
                    _: 35,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  pad_pressure_curve_right: {
                    _: 36,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  left_stick_touch_disable_lpad: {
                    _: 37,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  right_stick_touch_disable_rpad: {
                    _: 38,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  player_slot_led_setting: {
                    _: 39,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  has_nintendo_layout: {
                    _: 40,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  has_reversed_layout: {
                    _: 41,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  has_universal_face_button_glyphs: {
                    _: 42,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                  gyro_stationary_tolerance: {
                    _: 43,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  accel_stationary_tolerance: {
                    _: 44,
                    _: _.readFloat,
                    _: _.writeFloat,
                  },
                  aux_capsense_threshold: {
                    _: 45,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  aux_capsense_hysterisis: {
                    _: 46,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  rumble_setting: {
                    _: 47,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  triton_gyro_hw_cal: {
                    _: 48,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  use_gyro_sw_biases: {
                    _: 49,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_RawControllerDetailItem";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerListChanged_Notification";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controllers || _(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controllers: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Response";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_FirstSteamControllerConnection_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.period_ms || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  period_ms: {
                    _: 1,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  packets_sent: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  packet_retransmissions: {
                    _: 3,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  interval_max_ms: {
                    _: 4,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  rssi_measure: {
                    _: 5,
                    _: _.readInt32,
                    _: _.writeInt32,
                  },
                  reason: {
                    _: 6,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  rf_channel: {
                    _: 7,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  backup_channel: {
                    _: 8,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CTritonQosStatus";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  status: {
                    _: 2,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonQos_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  enable: {
                    _: 2,
                    _: _.readBool,
                    _: _.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Request";
        }
      }
      class _ extends _.Message {
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.controller_index || _(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  controller_index: {
                    _: 1,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  battery_level: {
                    _: 2,
                    _: _.readUint32,
                    _: _.writeUint32,
                  },
                  charging: {
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
          return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerBatteryState_Notification";
        }
      }
      var _;
      !(function (_) {
        (_.NotifyButtonStateChangedHandler = {
          name: "SteamInputManager.NotifyButtonStateChanged#1",
          request: _,
        }),
          (_.RegisterForNotifyButtonStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyButtonStateChangedHandler,
                  _,
                );
          }),
          (_.NotifyButtonStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyButtonStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyAxesStateChangedHandler = {
            name: "SteamInputManager.NotifyAxesStateChanged#1",
            request: _,
          }),
          (_.RegisterForNotifyAxesStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyAxesStateChangedHandler,
                  _,
                );
          }),
          (_.NotifyAxesStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyAxesStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyGyroQuaternionStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
            request: _,
          }),
          (_.RegisterForNotifyGyroQuaternionStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyGyroQuaternionStateChangedHandler,
                  _,
                );
          }),
          (_.NotifyGyroQuaternionStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyGyroQuaternionStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyGyroSpeedStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroSpeedStateChanged#1",
            request: _,
          }),
          (_.RegisterForNotifyGyroSpeedStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyGyroSpeedStateChangedHandler,
                  _,
                );
          }),
          (_.NotifyGyroSpeedStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyGyroSpeedStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyGyroAccelerometerStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
            request: _,
          }),
          (_.RegisterForNotifyGyroAccelerometerStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyGyroAccelerometerStateChangedHandler,
                  _,
                );
          }),
          (_.NotifyGyroAccelerometerStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyGyroAccelerometerStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyGyroCalibrationStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
            request: _,
          }),
          (_.RegisterForNotifyGyroCalibrationStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyGyroCalibrationStateChangedHandler,
                  _,
                );
          }),
          (_.NotifyGyroCalibrationStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyGyroCalibrationStateChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyControllerPowerMenuHandler = {
            name: "SteamInputManager.NotifyControllerPowerMenu#1",
            request: _,
          }),
          (_.RegisterForNotifyControllerPowerMenu = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyControllerPowerMenuHandler,
                  _,
                );
          }),
          (_.NotifyControllerPowerMenu = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyControllerPowerMenu = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyUnpairedTritonPluggedInHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
            request: _,
          }),
          (_.RegisterForNotifyUnpairedTritonPluggedIn = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyUnpairedTritonPluggedInHandler,
                  _,
                );
          }),
          (_.NotifyUnpairedTritonPluggedIn = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyUnpairedTritonPluggedIn = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyUnpairedTritonDockedHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonDocked#1",
            request: _,
          }),
          (_.RegisterForNotifyUnpairedTritonDocked = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyUnpairedTritonDockedHandler,
                  _,
                );
          }),
          (_.NotifyUnpairedTritonDocked = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyUnpairedTritonDocked = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyTritonUndockedHandler = {
            name: "SteamInputManager.NotifyTritonUndocked#1",
            request: _,
          }),
          (_.RegisterForNotifyTritonUndocked = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyTritonUndockedHandler,
                  _,
                );
          }),
          (_.NotifyTritonUndocked = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyTritonUndocked = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifySteamDonglesChangedHandler = {
            name: "SteamInputManager.NotifySteamDonglesChanged#1",
            request: _,
          }),
          (_.RegisterForNotifySteamDonglesChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifySteamDonglesChangedHandler,
                  _,
                );
          }),
          (_.NotifySteamDonglesChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifySteamDonglesChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyControllerDisconnectedHandler = {
            name: "SteamInputManager.NotifyControllerDisconnected#1",
            request: _,
          }),
          (_.RegisterForNotifyControllerDisconnected = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyControllerDisconnectedHandler,
                  _,
                );
          }),
          (_.NotifyControllerDisconnected = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyControllerDisconnected = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyControllerPairingChangedHandler = {
            name: "SteamInputManager.NotifyControllerPairingChanged#1",
            request: _,
          }),
          (_.RegisterForNotifyControllerPairingChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyControllerPairingChangedHandler,
                  _,
                );
          }),
          (_.NotifyControllerPairingChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyControllerPairingChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyControllerListChangedHandler = {
            name: "SteamInputManager.NotifyControllerListChanged#1",
            request: _,
          }),
          (_.RegisterForNotifyControllerListChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyControllerListChangedHandler,
                  _,
                );
          }),
          (_.NotifyControllerListChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyControllerListChanged = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyControllerBatteryStateHandler = {
            name: "SteamInputManager.NotifyControllerBatteryState#1",
            request: _,
          }),
          (_.RegisterForNotifyControllerBatteryState = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyControllerBatteryStateHandler,
                  _,
                );
          }),
          (_.NotifyControllerBatteryState = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyControllerBatteryState = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyFirstSteamControllerConnectionHandler = {
            name: "SteamInputManager.NotifyFirstSteamControllerConnection#1",
            request: _,
          }),
          (_.RegisterForNotifyFirstSteamControllerConnection = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyFirstSteamControllerConnectionHandler,
                  _,
                );
          }),
          (_.NotifyFirstSteamControllerConnection = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyFirstSteamControllerConnection = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.NotifyTritonQosHandler = {
            name: "SteamInputManager.NotifyTritonQos#1",
            request: _,
          }),
          (_.RegisterForNotifyTritonQos = function (_, _) {
            return null == (_ = _ || _().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : __webpack_require__.RegisterServiceNotificationHandler(
                  _.NotifyTritonQosHandler,
                  _,
                );
          }),
          (_.NotifyTritonQos = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgNotifyTritonQos = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : _.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  _(_, _),
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.StartControllerStateFlowHandler = {
            name: "SteamInputManager.StartControllerStateFlow#1",
            request: _,
            response: _,
          }),
          (_.StartControllerStateFlow = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgStartControllerStateFlow = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.EndControllerStateFlowHandler = {
            name: "SteamInputManager.EndControllerStateFlow#1",
            request: _,
            response: _,
          }),
          (_.EndControllerStateFlow = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgEndControllerStateFlow = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.GetControllerAccessibilityStringsHandler = {
            name: "SteamInputManager.GetControllerAccessibilityStrings#1",
            request: _,
            response: _,
          }),
          (_.GetControllerAccessibilityStrings = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgGetControllerAccessibilityStrings = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.StartGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.StartGyroSoftwareCalibration#1",
            request: _,
            response: _,
          }),
          (_.StartGyroSoftwareCalibration = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgStartGyroSoftwareCalibration = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.CancelGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.CancelGyroSoftwareCalibration#1",
            request: _,
            response: _,
          }),
          (_.CancelGyroSoftwareCalibration = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgCancelGyroSoftwareCalibration = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.PairDongleTritonConnectedHandler = {
            name: "SteamInputManager.PairDongleTritonConnected#1",
            request: _,
            response: _,
          }),
          (_.PairDongleTritonConnected = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgPairDongleTritonConnected = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.GetDonglesHandler = {
            name: "SteamInputManager.GetDongles#1",
            request: _,
            response: _,
          }),
          (_.GetDongles = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.GetDongles#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.SendMsgGetDongles = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.GetDongles#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.ShouldTritonPairInOobeHandler = {
            name: "SteamInputManager.ShouldTritonPairInOobe#1",
            request: _,
            response: _,
          }),
          (_.ShouldTritonPairInOobe = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgShouldTritonPairInOobe = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.WaitInitialControllerStateEnumeratedHandler = {
            name: "SteamInputManager.WaitInitialControllerStateEnumerated#1",
            request: _,
            response: _,
          }),
          (_.WaitInitialControllerStateEnumerated = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgWaitInitialControllerStateEnumerated = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.GetTritonPairingInfoHandler = {
            name: "SteamInputManager.GetTritonPairingInfo#1",
            request: _,
            response: _,
          }),
          (_.GetTritonPairingInfo = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgGetTritonPairingInfo = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.ForgetTritonPairingBondHandler = {
            name: "SteamInputManager.ForgetTritonPairingBond#1",
            request: _,
            response: _,
          }),
          (_.ForgetTritonPairingBond = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgForgetTritonPairingBond = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.ForgetDonglePairingBondHandler = {
            name: "SteamInputManager.ForgetDonglePairingBond#1",
            request: _,
            response: _,
          }),
          (_.ForgetDonglePairingBond = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.SendMsgForgetDonglePairingBond = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  _(_, _),
                  _,
                  {
                    ePrivilege: 1,
                    eClientExecutionSite: 2,
                  },
                );
          }),
          (_.GetControllerNameHandler = {
            name: "SteamInputManager.GetControllerName#1",
            request: _,
            response: _,
          }),
          (_.GetControllerName = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.GetControllerName#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.SendMsgGetControllerName = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.GetControllerName#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.GetControllerListHandler = {
            name: "SteamInputManager.GetControllerList#1",
            request: _,
            response: _,
          }),
          (_.GetControllerList = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.GetControllerList#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.SendMsgGetControllerList = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.GetControllerList#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.EnableDockedInputHandler = {
            name: "SteamInputManager.EnableDockedInput#1",
            request: _,
            response: _,
          }),
          (_.EnableDockedInput = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.EnableDockedInput#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.SendMsgEnableDockedInput = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.EnableDockedInput#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.EnableQosStatusHandler = {
            name: "SteamInputManager.EnableQosStatus#1",
            request: _,
            response: _,
          }),
          (_.EnableQosStatus = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.EnableQosStatus#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (_.SendMsgEnableQosStatus = function (_, _) {
            return null == (_ = _ || _().GetDefaultTransport())
              ? new Promise((_, _) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    _("Transport Error: no transport is available for request");
                })
              : _.SendMsg("SteamInputManager.EnableQosStatus#1", _(_, _), _, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          });
      })(_ || (_ = {}));
      var _;
      !(function (_) {
        (_[(_.k_EControllerBindingType_None = 0)] =
          "k_EControllerBindingType_None"),
          (_[(_.k_EControllerBindingType_Key = 1)] =
            "k_EControllerBindingType_Key"),
          (_[(_.k_EControllerBindingType_MouseButton = 2)] =
            "k_EControllerBindingType_MouseButton"),
          (_[(_.k_EControllerBindingType_Gamepad = 3)] =
            "k_EControllerBindingType_Gamepad"),
          (_[(_.k_EControllerBindingType_Mousewheel = 4)] =
            "k_EControllerBindingType_Mousewheel"),
          (_[(_.k_EControllerBindingType_Modeshift = 5)] =
            "k_EControllerBindingType_Modeshift"),
          (_[(_.k_EControllerBindingType_GameAction = 6)] =
            "k_EControllerBindingType_GameAction"),
          (_[(_.k_EControllerBindingType_ControllerAction = 7)] =
            "k_EControllerBindingType_ControllerAction");
      })(_ || (_ = {}));
      BigInt(1),
        BigInt(0),
        BigInt(1),
        BigInt(1),
        BigInt(1),
        BigInt(2),
        BigInt(1),
        BigInt(3),
        BigInt(1),
        BigInt(4),
        BigInt(1),
        BigInt(5),
        BigInt(1),
        BigInt(6),
        BigInt(1),
        BigInt(7),
        BigInt(1),
        BigInt(8),
        BigInt(1),
        BigInt(9),
        BigInt(1),
        BigInt(10),
        BigInt(1),
        BigInt(11),
        BigInt(1),
        BigInt(12),
        BigInt(1),
        BigInt(13),
        BigInt(1),
        BigInt(14),
        BigInt(1),
        BigInt(15),
        BigInt(1),
        BigInt(16),
        BigInt(1),
        BigInt(17),
        BigInt(1),
        BigInt(18),
        BigInt(1),
        BigInt(19),
        BigInt(1),
        BigInt(20),
        BigInt(1),
        BigInt(21),
        BigInt(1),
        BigInt(22),
        BigInt(1),
        BigInt(23),
        BigInt(1),
        BigInt(24),
        BigInt(1),
        BigInt(25),
        BigInt(1),
        BigInt(26),
        BigInt(1),
        BigInt(27),
        BigInt(1),
        BigInt(28),
        BigInt(1),
        BigInt(29),
        BigInt(1),
        BigInt(30),
        BigInt(1),
        BigInt(31),
        BigInt(1),
        BigInt(32),
        BigInt(1),
        BigInt(33),
        BigInt(1),
        BigInt(34),
        BigInt(1),
        BigInt(35),
        BigInt(1),
        BigInt(36),
        BigInt(1),
        BigInt(37),
        BigInt(1),
        BigInt(38),
        BigInt(1),
        BigInt(39);
      var _;
      !(function (_) {
        (_[(_.GAMEPAD_BUTTON_A = 0)] = "GAMEPAD_BUTTON_A"),
          (_[(_.GAMEPAD_BUTTON_B = 1)] = "GAMEPAD_BUTTON_B"),
          (_[(_.GAMEPAD_BUTTON_X = 2)] = "GAMEPAD_BUTTON_X"),
          (_[(_.GAMEPAD_BUTTON_Y = 3)] = "GAMEPAD_BUTTON_Y"),
          (_[(_.GAMEPAD_BUTTON_DPAD_UP = 4)] = "GAMEPAD_BUTTON_DPAD_UP"),
          (_[(_.GAMEPAD_BUTTON_DPAD_RIGHT = 5)] = "GAMEPAD_BUTTON_DPAD_RIGHT"),
          (_[(_.GAMEPAD_BUTTON_DPAD_DOWN = 6)] = "GAMEPAD_BUTTON_DPAD_DOWN"),
          (_[(_.GAMEPAD_BUTTON_DPAD_LEFT = 7)] = "GAMEPAD_BUTTON_DPAD_LEFT"),
          (_[(_.GAMEPAD_BUTTON_MENU = 8)] = "GAMEPAD_BUTTON_MENU"),
          (_[(_.GAMEPAD_BUTTON_VIEW = 9)] = "GAMEPAD_BUTTON_VIEW"),
          (_[(_.GAMEPAD_LEFTPAD_UP = 10)] = "GAMEPAD_LEFTPAD_UP"),
          (_[(_.GAMEPAD_LEFTPAD_DOWN = 11)] = "GAMEPAD_LEFTPAD_DOWN"),
          (_[(_.GAMEPAD_LEFTPAD_LEFT = 12)] = "GAMEPAD_LEFTPAD_LEFT"),
          (_[(_.GAMEPAD_LEFTPAD_RIGHT = 13)] = "GAMEPAD_LEFTPAD_RIGHT"),
          (_[(_.GAMEPAD_LEFTPAD_ANALOG = 14)] = "GAMEPAD_LEFTPAD_ANALOG"),
          (_[(_.GAMEPAD_RIGHTPAD_UP = 15)] = "GAMEPAD_RIGHTPAD_UP"),
          (_[(_.GAMEPAD_RIGHTPAD_DOWN = 16)] = "GAMEPAD_RIGHTPAD_DOWN"),
          (_[(_.GAMEPAD_RIGHTPAD_LEFT = 17)] = "GAMEPAD_RIGHTPAD_LEFT"),
          (_[(_.GAMEPAD_RIGHTPAD_RIGHT = 18)] = "GAMEPAD_RIGHTPAD_RIGHT"),
          (_[(_.GAMEPAD_RIGHTPAD_ANALOG = 19)] = "GAMEPAD_RIGHTPAD_ANALOG"),
          (_[(_.GAMEPAD_LEFTSTICK_UP = 20)] = "GAMEPAD_LEFTSTICK_UP"),
          (_[(_.GAMEPAD_LEFTSTICK_DOWN = 21)] = "GAMEPAD_LEFTSTICK_DOWN"),
          (_[(_.GAMEPAD_LEFTSTICK_LEFT = 22)] = "GAMEPAD_LEFTSTICK_LEFT"),
          (_[(_.GAMEPAD_LEFTSTICK_RIGHT = 23)] = "GAMEPAD_LEFTSTICK_RIGHT"),
          (_[(_.GAMEPAD_LEFTSTICK_ANALOG = 24)] = "GAMEPAD_LEFTSTICK_ANALOG"),
          (_[(_.GAMEPAD_LEFTSTICK_CLICK = 25)] = "GAMEPAD_LEFTSTICK_CLICK"),
          (_[(_.GAMEPAD_LTRIGGER_ANALOG = 26)] = "GAMEPAD_LTRIGGER_ANALOG"),
          (_[(_.GAMEPAD_RTRIGGER_ANALOG = 27)] = "GAMEPAD_RTRIGGER_ANALOG"),
          (_[(_.GAMEPAD_BUTTON_LTRIGGER = 28)] = "GAMEPAD_BUTTON_LTRIGGER"),
          (_[(_.GAMEPAD_BUTTON_RTRIGGER = 29)] = "GAMEPAD_BUTTON_RTRIGGER"),
          (_[(_.GAMEPAD_BUTTON_LSHOULDER = 30)] = "GAMEPAD_BUTTON_LSHOULDER"),
          (_[(_.GAMEPAD_BUTTON_RSHOULDER = 31)] = "GAMEPAD_BUTTON_RSHOULDER"),
          (_[(_.GAMEPAD_BUTTON_LBACK = 32)] = "GAMEPAD_BUTTON_LBACK"),
          (_[(_.GAMEPAD_BUTTON_RBACK = 33)] = "GAMEPAD_BUTTON_RBACK"),
          (_[(_.GAMEPAD_BUTTON_GUIDE = 34)] = "GAMEPAD_BUTTON_GUIDE"),
          (_[(_.GAMEPAD_BUTTON_SELECT = 35)] = "GAMEPAD_BUTTON_SELECT"),
          (_[(_.GAMEPAD_BUTTON_START = 36)] = "GAMEPAD_BUTTON_START"),
          (_[(_.GAMEPAD_BUTTON_LPAD_CLICKED = 37)] =
            "GAMEPAD_BUTTON_LPAD_CLICKED"),
          (_[(_.GAMEPAD_BUTTON_LPAD_TOUCH = 38)] = "GAMEPAD_BUTTON_LPAD_TOUCH"),
          (_[(_.GAMEPAD_BUTTON_RPAD_CLICKED = 39)] =
            "GAMEPAD_BUTTON_RPAD_CLICKED"),
          (_[(_.GAMEPAD_BUTTON_RPAD_TOUCH = 40)] = "GAMEPAD_BUTTON_RPAD_TOUCH"),
          (_[(_.GAMEPAD_RIGHTSTICK_CLICK = 41)] = "GAMEPAD_RIGHTSTICK_CLICK"),
          (_[(_.GAMEPAD_RIGHTSTICK_TOUCH = 42)] = "GAMEPAD_RIGHTSTICK_TOUCH"),
          (_[(_.GAMEPAD_LEFTSTICK_TOUCH = 43)] = "GAMEPAD_LEFTSTICK_TOUCH"),
          (_[(_.GAMEPAD_BUTTON_LBACK_UPPER = 44)] =
            "GAMEPAD_BUTTON_LBACK_UPPER"),
          (_[(_.GAMEPAD_BUTTON_RBACK_UPPER = 45)] =
            "GAMEPAD_BUTTON_RBACK_UPPER"),
          (_[(_.GAMEPAD_BUTTON_LAST = 46)] = "GAMEPAD_BUTTON_LAST"),
          (_[(_.GAMEPAD_ANALOG_SCROLL = 47)] = "GAMEPAD_ANALOG_SCROLL"),
          (_[(_.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR = 48)] =
            "GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR"),
          (_[(_.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR = 49)] =
            "GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR"),
          (_[(_.GAMEPAD_ANALOG_LAST = 50)] = "GAMEPAD_ANALOG_LAST");
      })(_ || (_ = {}));
      const _ = new _("FocusNavigation").Debug,
        _ = new _("FocusNavigation").Assert,
        _ = "focus-nav-show-debug-focus-ring";
      function _(_, _) {
        return (
          _?.eActivationSourceType === _?.eActivationSourceType &&
          _?.nActiveGamepadIndex === _?.nActiveGamepadIndex &&
          _?.nLastActiveGamepadIndex === _?.nLastActiveGamepadIndex
        );
      }
      class _ {
        m_rgGamepadInputSources = [];
        m_DefaultContext;
        m_rgAllContexts = [];
        m_ActiveContext;
        m_LastActiveContext;
        m_ContextSetChangedCallbacks = new _._();
        m_rgCatchAllGamepadInput = [];
        m_UnhandledButtonEventsCallbacks = new _._();
        m_navigationSource = _(
          {
            eActivationSourceType: _._.UNKNOWN,
            nActiveGamepadIndex: -1,
            nLastActiveGamepadIndex: -1,
          },
          _,
        );
        m_navigationSourceSupportsFocus = (function (_, _, _) {
          return new _(_, _, _);
        })(this.m_navigationSource, (_) => (0, _._)(_?.eActivationSourceType));
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
          this.m_bShowDebugFocusRing.Set("shown" == sessionStorage.getItem(_));
        }
        CreateContext(_, _, _) {
          const _ = new _(this, _, _, _);
          return (
            this.m_rgAllContexts.push(_),
            setTimeout(() => this.m_ContextSetChangedCallbacks.Dispatch(), 0),
            _
          );
        }
        DestroyContext(_) {
          _._(this.m_rgAllContexts, _),
            this.m_ContextSetChangedCallbacks.Dispatch();
        }
        GetDefaultContext() {
          return (
            this.m_DefaultContext ||
              (this.m_DefaultContext = this.CreateContext(window, !1, !1)),
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
          return !!_ && !(this.BHasVRGamepadNavigationContext() && !_.BIsVR());
        }
        FindAnActiveContext() {
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const _ of this.m_rgAllContexts) {
              const _ = _.FindNavTreeInFocusedWindow();
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
          this.m_bShowDebugFocusRing.Set(_),
            (function (_) {
              _
                ? sessionStorage.setItem(_, "shown")
                : sessionStorage.removeItem(_);
            })(_);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(_) {
          let _ = new _();
          return (
            this.m_rgGamepadInputSources.push(_),
            _.PushArrayRemove(this.m_rgGamepadInputSources, _),
            _.Push(
              _.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister,
            ),
            _.Push(_.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
            _.Push(
              _.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
                .Unregister,
            ),
            _.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
            _.Push(() => _.SetRepeatAllowed()),
            _.GetSourceType() == _._.GAMEPAD && this.UpdateSourceToGamepad(),
            _.Push(_.Init(this).Unregister),
            _.GetUnregisterFunc()
          );
        }
        UpdateSourceToGamepad(_ = !1) {
          (this.m_navigationSource.Value.eActivationSourceType == _._.UNKNOWN ||
            _) &&
            this.m_navigationSource.Set({
              ...this.m_navigationSource.Value,
              eActivationSourceType: _._.GAMEPAD,
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
              _ ?? _._.GAMEPAD,
              -1,
              void 0,
              void 0,
              void 0,
              _,
              _,
              !0,
            ),
            this.OnButtonUp(
              _,
              _ ?? _._.GAMEPAD,
              -1,
              void 0,
              void 0,
              void 0,
              _,
              _,
              !0,
            );
        }
        DispatchVirtualGamepad(_, _) {
          switch (_) {
            case "vgp_onbuttondown":
              this.OnButtonDown(_.button, _.source, -1, _.is_repeat);
              break;
            case "vgp_onbuttonup":
              this.OnButtonUp(_.button, _.source, -1);
          }
        }
        BGlobalGamepadButton(_) {
          return (
            _ === _._.STEAM_GUIDE ||
            _ === _._.STEAM_QUICK_MENU ||
            _ === _._.CANCEL
          );
        }
        GetEventTarget(_, _, _ = !1) {
          let _ = this.GetActiveContext();
          !_ && _ && (_ = this.FindAnActiveContext());
          let _ = _?.ActiveWindow?.document.activeElement;
          if (_?.m_LastActiveNavTree) {
            if (
              (_ || (_ = this.m_navigationSource?.Value?.eActivationSourceType),
              !_.m_LastActiveNavTree.GetLastFocusedNode() &&
                (0, _._)(_) &&
                (_(
                  `GetEventTarget: Context ${_.LogName()} tree ${_.m_LastActiveNavTree._} has no focused node, ${_ ? "finding one" : "will not find one"}`,
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
            null != _.nActiveGamepadIndex &&
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
            _ != _._.MOUSE &&
              (0, _._)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent(),
            _.eActivationSourceType != _
          );
        }
        OnButtonActionInternal(_, _, _, _, _, _, _, _, _, _) {
          for (let _ = this.m_rgCatchAllGamepadInput.length - 1; _ >= 0; _--)
            if (this.m_rgCatchAllGamepadInput[_](_, _, _ ?? !1))
              return void (
                _ &&
                _(
                  "Ignoring button press - gamepad input is suppressed by parent window",
                )
              );
          _(
            !!_ == !!_,
            "Must set both overrideContext and overrideElement or neither",
          );
          let _ = _,
            _ = _;
          (null != _ && null != _) || ([_, _] = this.GetEventTarget(_, _, _)),
            !_?.BIsGamepadInputSuppressed() || _
              ? (this.ChangeNavigationSource(_, _, _, _),
                _ &&
                  _(
                    `Firing ${_._[_]} in tree ${_?.m_LastActiveNavTree?._} at `,
                    _,
                  ),
                this.BatchedUpdate(() =>
                  _(_, _ ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: _,
                    source: _,
                    is_repeat: _,
                  }),
                ))
              : _(
                  `Suppressing ${_._[_]} input on element ${_?.className} because tree ${_?.m_LastActiveNavTree?._} has it disabled`,
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
            (document.hasFocus() || this.m_LastActiveContext?.BIsVR()) &&
            (_ == _._.MOUSE || _ == _._.TOUCH) &&
            this.m_ActiveContext?.m_LastActiveNavTree
          ) {
            const _ =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              _ = (function (_) {
                if (!_(_)) return !1;
                const _ = _.tagName,
                  _ = ((_ = _), "INPUT" === _.nodeName ? _.type : void 0);
                var _;
                return (function (_, _) {
                  switch (_) {
                    case "TEXTAREA":
                      return !0;
                    case "INPUT":
                      switch (_) {
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
                })(_, _);
              })(_?.Element)
                ? _
                : null;
            this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(
              _.APPLICATION,
              _,
            );
          }
        }
        NewGamepadNavigationTree(_, _, _, _) {
          return new _(this, _, _, _, _);
        }
        RegisterGamepadNavigationTree(_, _) {
          _("Registering focusnav tree ", _._);
          const _ = _.WindowContext;
          __webpack_require__.AddNavTree(_);
          const _ = _.MountNavTree(_);
          return (
            !_.Parent &&
              _.BIsEnabled() &&
              (this.BCanActivateContext(_) &&
                (this.m_LastActiveContext = this.m_ActiveContext = _),
              __webpack_require__.BIsVR() ||
                __webpack_require__.SetActiveNavTree(_, !0)),
            () => {
              __webpack_require__
                .UnregisterGamepadNavigationTree(_)
                .then(() => _());
            }
          );
        }
        OnGamepadNavigationTreeActivated(_, _ = !1) {
          _.WindowContext.SetActiveNavTree(_, _);
        }
        OnGamepadNavigationTreeFocused(_, _, _ = !1) {
          const _ = _.WindowContext;
          _ != this.m_ActiveContext &&
            _(`(${_.LogName(_.Window)}) Focus event in inactive window`),
            _ != _.m_LastActiveFocusNavTree &&
              _ != _.m_LastActiveNavTree &&
              (_.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == _ ||
              _.GetParentEmbeddedNavTree() == _.m_LastActiveFocusNavTree
                ? _ == _.AUTOFOCUS &&
                  _.m_LastActiveNavTree?.GetLastFocusedNode()
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
          return Boolean(
            _ && _ == this.m_ActiveContext?.m_LastActiveFocusNavTree,
          );
        }
        IsActiveNavTree(_) {
          return Boolean(_ && _ == this.m_ActiveContext?.m_LastActiveNavTree);
        }
        GetActiveNavTree() {
          return this.m_ActiveContext?.m_LastActiveNavTree;
        }
        BIsInActiveContext(_) {
          return Boolean(_ && _.WindowContext == this.m_ActiveContext);
        }
        RegisterForUnhandledButtonDownEvents(_) {
          return this.m_UnhandledButtonEventsCallbacks.Register(_);
        }
        get ContextSetChangedCallbacks() {
          return this.m_ContextSetChangedCallbacks;
        }
        FireUnhandledGamepadEventCallbacks(_) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(_), !1)
          );
        }
        SetCatchAllGamepadInput(_) {
          return (
            this.m_rgCatchAllGamepadInput.push(_),
            {
              Unregister: () => {
                const _ = this.m_rgCatchAllGamepadInput.indexOf(_);
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
            (this.m_LastActiveContext == _ &&
              (this.m_LastActiveContext = void 0),
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
      }
      function _(_) {
        if (!_) return _.NONE;
        switch (_) {
          case "column":
            return _.COLUMN;
          case "column-reverse":
            return _.COLUMN_REVERSE;
          case "row":
            return _.ROW;
          case "row-reverse":
            return _.ROW_REVERSE;
          case "grid":
            return _.GRID;
          case "geometric":
            return _.GEOMETRIC;
          default:
            return (
              (function (_, _, ..._) {
                _(!1, _, ..._);
              })(0, `Unhandled flow-children: ${_}`),
              _.NONE
            );
        }
      }
      (0, _._)([_._], _.prototype, "OnButtonDown", null),
        (0, _._)([_._], _.prototype, "OnButtonUp", null),
        (0, _._)([_._], _.prototype, "OnNavigationTypeChange", null);
      const _ = "VirtualKeyboardMessage";
      function _(_) {
        return _ && _.type === _;
      }
      class _ {
        m_ownerWindow;
        constructor() {}
        Init(_) {
          return (
            (this.m_ownerWindow = _),
            this.m_ownerWindow.addEventListener("message", this.OnMessage),
            () => {
              this.m_ownerWindow.removeEventListener("message", this.OnMessage),
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
            message: "ShowVirtualKeyboard",
          });
        }
        ShowModalKeyboard() {
          this.SendMessage({
            message: "ShowModalKeyboard",
          });
        }
        HideVirtualKeyboard(_) {
          this.SendMessage({
            message: "HideVirtualKeyboard",
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
          _(_) && _.message;
        }
        SendMessage(_) {
          const _ = {
            type: "VirtualKeyboardMessage",
            ..._,
          };
          (0, _._)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                _.type,
                JSON.stringify(_),
              )
            : this.m_ownerWindow &&
              (_(
                this.m_ownerWindow.parent &&
                  this.m_ownerWindow.parent != this.m_ownerWindow,
                "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
              ),
              this.m_ownerWindow.parent.postMessage(_, "*"));
        }
      }
      (0, _._)([_._], _.prototype, "ShowVirtualKeyboard", null),
        (0, _._)([_._], _.prototype, "ShowModalKeyboard", null),
        (0, _._)([_._], _.prototype, "HideVirtualKeyboard", null),
        (0, _._)([_._], _.prototype, "OnBrowserViewMessage", null),
        (0, _._)([_._], _.prototype, "OnMessage", null);
      (0, _._)(
        [_._],
        class {
          m_showKeyboard;
          m_showModalKeyboard;
          m_hideKeyboard;
          constructor(_, _, _, _) {
            (this.m_showKeyboard = _),
              (this.m_showModalKeyboard = _),
              (this.m_hideKeyboard = _),
              _._("message", this.OnMessage);
          }
          OnMessage(_, _, _) {
            if (_ == _) {
              const _ = JSON.parse(_);
              if (_(_))
                switch (_.message) {
                  case "ShowVirtualKeyboard":
                    this.m_showKeyboard();
                    break;
                  case "ShowModalKeyboard":
                    this.m_showModalKeyboard();
                    break;
                  case "HideVirtualKeyboard":
                    this.m_hideKeyboard();
                }
            }
          }
        }.prototype,
        "OnMessage",
        null,
      );
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        let _ = 0;
        _.children().each(function () {
          const _ = _()(this),
            _ = _.css("zIndex");
          "auto" === _
            ? _.css("zIndex", 0)
            : isNaN(parseInt(_)) || (_ = Math.max(_, parseInt(_)));
        });
        const _ = _()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(_ || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let _,
          _,
          _ = 0,
          _ = 0,
          _ = 0,
          _ = 0;
        _.prepend(_);
        const _ = (_) => {
            const _ = _.GetBoundingRectForFocusRing(),
              _ = _[0].getBoundingClientRect();
            return {
              left: _._ - _._ - 0,
              top: _._ - _._ - 0,
              height: _.height,
              width: _.width,
            };
          },
          _ = (_, _) => {
            (_ = _.left),
              (_ = _.top),
              (_ = _.height),
              (_ = _.width),
              _.css({
                left: _,
                top: _,
                height: _,
                width: _,
              });
          },
          _ = (_) => {
            if ((_ && (_(), (_ = void 0)), _ && _.BWantsFocusRing())) {
              let _ = _()("<div/>", {
                  "data-focusring": !0,
                  style: "position: absolute; pointer-events: none; ",
                  class: _().FocusRing,
                }),
                _ = _(_);
              _(_, _),
                __webpack_require__.append(_),
                (_ = () =>
                  ((_, _) => {
                    if (_ && _.BWantsFocusRing()) {
                      let _ = _(_);
                      (_.left == _ &&
                        _.top == _ &&
                        _.height == _ &&
                        _.width == _) ||
                        _(_, _);
                    }
                  })(_, _));
              let _ = window.setInterval(_, 200),
                _ = _.Tree.OnActiveStateChangedCallbacks.Register((_) => {
                  _ ? _.show() : _.hide();
                });
              _ = () => {
                window.clearInterval(_),
                  _.remove(),
                  (_ = void 0),
                  _.Unregister();
              };
            }
          };
        return {
          OnBlur: () => _(null),
          OnFocus: (_, _) => _(_),
          OnFocusChange: (_, _, _) => _(_),
          OnForceMeasureFocusRing: () => _ && _(),
        };
      }
      function _(_) {
        return !!_.is_repeat;
      }
      Object.seal({
        onMoveUp: _,
        onMoveDown: _,
      }),
        Object.seal({
          onMoveRight: _,
          onMoveLeft: _,
        });
      function _(_, _) {
        if (_.is_repeat) return !1;
        const _ = _.GetRelativeDirection(_.button);
        return _ == _.FORWARD
          ? _.BFocusFirstChild(_.GAMEPAD)
          : _ == _.BACKWARD && _.BFocusLastChild(_.GAMEPAD);
      }
      function _(_) {
        if (_) {
          const _ = Function("event", _);
          return (_) => _.apply(_.currentTarget, [_]);
        }
        return null;
      }
      function _() {
        return !0;
      }
      function _(_) {
        return "BlockMovement" == _
          ? _
          : "RepeatNavigationBoundary" == _
            ? _
            : _
              ? Function("detail", _)
              : null;
      }
      function _(_) {
        this.click(), _.stopPropagation();
      }
      function _(_) {
        _()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function _(_, _) {
        _ ? _()(_).addClass("gpfocus") : _()(_).removeClass("gpfocus");
      }
      function _(_) {
        const _ = _.currentTarget;
        if (_.defaultPrevented || !_(_)) return !1;
        const _ = _.detail.is_repeat ? 4.5 : 3.33,
          _ = "smooth",
          _ = _.ownerDocument,
          _ = _.defaultView;
        switch (_.detail.button) {
          case _._.DIR_UP:
            if (_.scrollY > 3)
              return (
                _(_, {
                  top: -_.innerHeight / _,
                  behavior: _,
                }),
                !0
              );
            break;
          case _._.DIR_RIGHT:
            if (_.scrollX + _.innerWidth < _.documentElement.scrollWidth - 3)
              return (
                _(_, {
                  left: _.innerWidth / _,
                  behavior: _,
                }),
                !0
              );
            break;
          case _._.DIR_DOWN:
            if (_.scrollY + _.innerHeight < _.documentElement.scrollHeight - 3)
              return (
                _(_, {
                  top: _.innerHeight / _,
                  behavior: _,
                }),
                !0
              );
            break;
          case _._.DIR_LEFT:
            if (_.scrollX > 3)
              return (
                _(_, {
                  left: (_.innerWidth / _) * -1,
                  behavior: _,
                }),
                !0
              );
        }
        return !1;
      }
      const _ = new _("FocusNavigation").Debug;
      var _;
      !(function (_) {
        (_[(_.Unknown = 0)] = "Unknown"),
          (_[(_.NotNeeded = 1)] = "NotNeeded"),
          (_[(_.InReactTree = 2)] = "InReactTree");
      })(_ || (_ = {}));
      const _ = new _();
      let _,
        _ = !1,
        _ = null;
      function _(_) {
        _ ||
          ((_ = new _()),
          (_ = new _(_)),
          _.RegisterForFocusChanged(_.GetDefaultContext()),
          _.Init(window),
          _.BIsGamepadInputExternallyControlled() || _.RegisterInputSource(_),
          (_.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            _.RegisterInputSource(new _(window)),
          (function (_) {
            _()("html").addClass("gpnav_active");
            const _ = _()("body"),
              _ = _.GetDefaultContext(),
              _ = _.NewGamepadNavigationTree(_, "legacy", void 0, {
                historyMode: "navigationapi",
              });
            _()(window)._("touchstart mousedown focus", () =>
              __webpack_require__.OnActivate(window),
            ),
              _()(window)._("blur", () =>
                __webpack_require__.OnDeactivate(window),
              );
            const _ = _(_),
              _ = 0 != _.data("react-nav-scrollregiontostartorend");
            (_.Root.m_FocusRing = _),
              _.Root.SetProperties({
                scrollIntoViewType: _.NoTransformSparseContent,
                scrollRegionToStartOrEnd: _,
              }),
              _.SetIsEnabled(!0),
              _.OnActiveStateChangedCallbacks.Register((_) => {
                const _ = _.GetLastFocusedNode();
                _?.Element && _(_.Element, _);
              }),
              Object.assign(window, {
                legacyWebFocusNavController: _,
                __nav_tree_root: _,
                __virtual_keyboard_client: _,
              }),
              _.set(document.body, _.Root),
              _(document.body, _.Root),
              _(void 0, !0),
              _.RegisterGamepadNavigationTree(_, window),
              __webpack_require__.OnMount(window),
              window.document.hasFocus() &&
                __webpack_require__.OnActivate(window);
            _()(document.body)._("vgp_onbuttondown", function (_) {
              _.OnRootButtonDown(_.originalEvent);
            }),
              _(document.body, _);
            new MutationObserver(_).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (function (_) {
                _ = _;
              })(!0),
              (function () {
                Object.assign(window, _),
                  window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
              })(),
              !1;
          })(_)),
          (_ = !0);
      }
      function _(_) {
        for (const _ of _) {
          const _ = [],
            _ = [];
          _(
            _,
            (_) => _.push(_),
            (_) => __webpack_require__.push(_),
          ),
            _.length && _(_()(_)),
            _.length && _(_()(_));
        }
      }
      const _ = new WeakMap(),
        _ = new WeakMap();
      let _ = [];
      function _(_, _) {
        if (_ instanceof _) {
          const _ = _.GetDepth();
          _[_] || (_[_] = []), _[_].push([_, _]);
        }
        _.set(_, _);
      }
      function _(_, _) {
        const _ = _.has(_) ? _.get(_) : [];
        __webpack_require__.push(_), _.set(_, _);
      }
      function _(_) {
        return "jquery" in _ ? _.get(_[0]) || _.Unknown : _.get(_) || _.Unknown;
      }
      function _(_) {
        return "jquery" in _ ? _.has(_[0]) : _.has(_);
      }
      function _(_) {
        _.find("*")
          .addBack()
          .each(function () {
            _.get(this)?.forEach((_) => _()),
              _.delete(this),
              _.delete(this),
              _()(this).attr("data-nav-modal") && _(this);
          });
      }
      function _(_, _ = !1) {
        performance.now();
        const _ =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        _()(_, _)
          .addBack(_)
          .each(function () {
            var _;
            _((_ = this)) || _(_);
          }),
          (function () {
            for (let _ = _.length - 1; _ >= 0; _--)
              if (_[_])
                for (let [_, _] of _[_]) {
                  _(_, _.Tree.RegisterNavigationItem(_, _));
                  const _ = _()(_).data("navTreeModal");
                  _ &&
                    (_()(_).data(
                      "unregisterNavTree",
                      _.RegisterGamepadNavigationTree(_, window),
                    ),
                    _.Activate(!0));
                }
            _ = [];
          })();
      }
      function _(_) {
        let _ = _.NotNeeded;
        return (
          !(function (_) {
            if (_()(_).attr("data-nav-modal")) return !0;
            switch (_.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                return !0;
              case "DIV":
                if (_(_) != _.COLUMN) return !0;
                const _ = _(_.parentElement);
                return _ == _.ROW || _ == _.ROW_REVERSE;
              default:
                return !1;
            }
          })(_)
            ? _(_, _)
            : (_ = _(_)),
          _
        );
      }
      function _(_) {
        const _ = _()(_.Element);
        return (
          !_.data("gpFocusDisabled") &&
          !(!_._(":visible") || "hidden" == _.css("visibility")) &&
          (0 != _.outerWidth() ||
            0 != _.outerHeight() ||
            "hidden" !== _.css("overflow"))
        );
      }
      function _(_) {
        const _ = _()(_),
          _ = _(_);
        if (_ instanceof _ || _ == _.InReactTree)
          return _(_, _.InReactTree), _.InReactTree;
        const _ = _.Tree;
        let _,
          _ = _.data("panel") || {},
          _ = _;
        if (
          (_.attr("data-nav-modal")
            ? (_ = (function (_, _) {
                const _ = _.NewGamepadNavigationTree(
                    _.GetDefaultContext(),
                    "modal_dialog",
                    _,
                    {
                      modal: !0,
                    },
                  ),
                  _ = _(_()(_));
                return (
                  (_.Root.m_FocusRing = _),
                  _.Root.SetProperties({
                    focusableIfEmpty: !0,
                  }),
                  _()(_).data("navTreeModal", _),
                  _(_, _.Root),
                  _.Root
                );
              })(_, _))
            : _.data("reactNavRoot")
              ? ((_ = new _(_.data("reactNavRoot"), _)), (_ = void 0))
              : (_ = _.CreateNode(_, _.m_FocusRing)),
          "A" == _.tagName || "BUTTON" == _.tagName || "LABEL" == _.tagName)
        )
          (_.focusable = _.focusable ?? !0),
            (_.clickOnActivate = _.clickOnActivate ?? !0);
        else if ("INPUT" == _.tagName)
          switch (((_.focusable = _.focusable ?? !0), _.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              _.clickOnActivate = _.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              _.enableVirtualKeyboard = _.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == _.tagName &&
            ((_.focusable = _.focusable ?? !0),
            (_.enableVirtualKeyboard = _.enableVirtualKeyboard ?? !0));
        "string" == typeof _.scrollIntoViewType &&
          (_.scrollIntoViewType =
            _[_.scrollIntoViewType] ?? _.NoTransformSparseContent);
        const _ = _["flow-children"];
        delete _["flow-children"];
        let {
            clickOnActivate: _,
            maintainX: _,
            maintainY: _,
            enableVirtualKeyboard: _,
            preferredChild: _,
            onOKActionDescription: _,
            onCancelActionDescription: _,
            onSecondaryActionDescription: _,
            onOptionsActionDescription: _,
            onMenuActionDescription: _,
            actionDescriptionMap: _,
            onOKButton: _,
            onCancelButton: _,
            onSecondaryButton: _,
            onOptionsButton: _,
            onMenuButton: _,
            onMoveUp: _,
            onMoveRight: _,
            onMoveDown: _,
            onMoveLeft: _,
            onGamepadDirection: _,
            bFocusRingRoot: _,
            type: _,
            ..._
          } = _,
          _ = _(_),
          _ = _(_),
          _ = _(_),
          _ = _(_),
          _ = _(_),
          _ = _(_);
        _ || (_ = "Panel"),
          "PanelGroup" == _ &&
            ({ onOKButtonHandler: _, onCancelButtonHandler: _ } = (function (
              _,
              _,
            ) {
              const {
                onOKButtonHandler: _,
                onCancelButtonHandler: _,
                navNode: _,
              } = _;
              return (
                (_.focusable = !1 !== _.focusable),
                {
                  onOKButtonHandler: (_) =>
                    !(
                      !_.BHasFocus() ||
                      !_.BChildTakeFocus(_.GAMEPAD, _.detail.button)
                    ) ||
                    (!!_ && __webpack_require__(_)),
                  onCancelButtonHandler: (_) =>
                    !(
                      !_.BFocusWithin() ||
                      _.BHasFocus() ||
                      !_.BTakeFocus(_.GAMEPAD, _.detail.button)
                    ) ||
                    (!!_ && _(_)),
                }
              );
            })(
              {
                onOKButtonHandler: _,
                onCancelButtonHandler: _,
                navNode: _,
              },
              _,
            )),
          _ &&
            _(
              _[0],
              (function (_, _) {
                return _(_, "vgp_onok", _(_));
              })(_[0], _),
            ),
          _ &&
            _(
              _[0],
              (function (_, _) {
                return _(_, "vgp_oncancel", _(_));
              })(_[0], _),
            ),
          _ &&
            _ &&
            _(
              _[0],
              (function (_, _) {
                return _(_, "vgp_onsecondaryaction", _(_));
              })(_[0], _),
            ),
          _ &&
            _ &&
            _(
              _[0],
              (function (_, _) {
                return _(_, "vgp_onoptions", _(_));
              })(_[0], _),
            ),
          _ &&
            _ &&
            _(
              _[0],
              (function (_, _) {
                return _(_, "vgp_onmenu", _(_));
              })(_[0], _),
            ),
          _ && _(_[0], _(_[0], _));
        const _ = (function (_, _, _, _) {
            const _ = {};
            return (
              _ && (_.onMoveUp = _(_)),
              _ && (_.onMoveRight = _(_)),
              _ && (_.onMoveDown = _(_)),
              _ && (_.onMoveLeft = _(_)),
              _
            );
          })(_, _, _, _),
          _ = _ ? _(_) : _.NONE;
        _ != _.NONE && (_.layout = _),
          _
            ? (_.navEntryPreferPosition = _.MAINTAIN_X)
            : _
              ? (_.navEntryPreferPosition = _.MAINTAIN_Y)
              : _ && (_.navEntryPreferPosition = _.PREFERRED_CHILD),
          _ &&
            (!1 !== _.focusable && (_.focusable = !0),
            _._("vgp_onok", "firstChild" === _ ? _ : _),
            _.attr("role") ||
              ("A" !== _.prop("tagName") && _.attr("role", "button")),
            _(_, () => {
              _.off("vgp_onok");
            })),
          _ &&
            (_._("vgp_onok.vkbindings", () => _.ShowVirtualKeyboard()),
            _._("click.vkbindings", () => _.ShowVirtualKeyboard()),
            _._("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != _ &&
                _.HideVirtualKeyboard();
            }),
            _(_, () => {
              _.off(".vkbindings");
            })),
          _.focusable && void 0 === _.attr("tabIndex") && _.attr("tabIndex", 0),
          _.focusable && _.SubscribableHasFocus.Subscribe((_) => _(_, _)),
          _ &&
            ((_.m_FocusRing = _(_)),
            "static" == _.css("position") && _.css("position", "relative"));
        const _ = {
          fnCanTakeFocus: _,
          actionDescriptionMap: _({
            onOKActionDescription: _,
            onCancelActionDescription: _,
            onSecondaryActionDescription: _,
            onOptionsActionDescription: _,
            onMenuActionDescription: _,
            actionDescriptionMap: _,
          }),
          ..._,
          ..._,
        };
        return _.SetProperties(_), _(_, _), _;
      }
      function _(_) {
        const _ = _.parentElement;
        if (!_) return console.error("no parent"), null;
        let _ = _(_);
        if (_ == _.Unknown) _ = _(_);
        else if (_ == _.InReactTree) return _;
        return _ instanceof _ ? _ : _(_);
      }
      function _(_) {
        const _ = _()(_).data("unregisterNavTree");
        console.assert(_, "missing unregister binding"),
          _(),
          _()(_).removeAttr("data-nav-modal"),
          _()(_).removeData("unregisterNavTree"),
          _()(_).removeClass("navTreeModal");
      }
      const _ = {
        InstrumentFocusElements: _,
        ForceUpdateFocusElements: function (_) {
          _(_()(_)), _(_()(_));
        },
        GPNavFocusChild: function (_) {
          let _ = _(_[0]);
          return (
            _ instanceof _ || (_ = _(_[0])),
            _ instanceof _ && _.BTakeFocus(_.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (_) {
          _("Showing element as modal", _);
          const _ = _()(_),
            _ = _(_);
          return (
            _ &&
              (_(
                "Element already in DOM tree, forcibly re-instrumenting elements so they are parented to modal",
              ),
              _(_)),
            _.attr("data-nav-modal", "true"),
            _ && _(_),
            () => _(_)
          );
        },
        GPShowVirtualKeyboard: function (_ = !0) {
          _ ? _.ShowVirtualKeyboard() : _.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (_, _) {
          const _ = _(_);
          _ instanceof _ &&
            __webpack_require__.SetProperties({
              ..._.m_Properties,
              actionDescriptionMap: _(_),
            });
        },
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      const _ = "GamepadInput";
      var _;
      !(function (_) {
        (_[(_.PageUnloading = 0)] = "PageUnloading"),
          (_[(_.Unknown = 1)] = "Unknown"),
          (_[(_.None = 2)] = "None"),
          (_[(_.Basic = 3)] = "Basic"),
          (_[(_.Full = 4)] = "Full");
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        PostMessage(_) {}
        RegisterForMessage(_) {}
      }
      class _ {
        m_fnCallback = void 0;
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(_) {
          this.m_fnCallback = _;
        }
        PostMessage(_) {
          let _ = JSON.stringify(_);
          SteamClient.BrowserView.PostMessageToParent(_._, _);
        }
        OnMessage(_, _) {
          if (_ == _._) {
            const _ = JSON.parse(_);
            this.m_fnCallback(_);
          } else if ("Checkout" == _) {
            let _ = JSON.parse(_);
            if ("paypal_success" == _.action)
              try {
                window.OnPayPalSuccess(_.transid);
              } catch (_) {}
            else if ("paypal_cancel" == _.action)
              try {
                window.OnPayPalCancel(_.transid);
              } catch (_) {}
          } else if ("PinnedView" == _) {
            let _ = JSON.parse(_);
            try {
              window.HandleOverlayWindowPinnedView(
                1 == _.bPinned,
                1 == _.bShowPinnedView,
              );
            } catch (_) {}
          }
        }
      }
      (0, _._)([_._], _.prototype, "OnMessage", null);
      class _ {
        m_postWindow;
        m_fnCallback = void 0;
        constructor(_) {
          (this.m_postWindow = _),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(_) {
          this.m_fnCallback = _;
        }
        PostMessage(_) {
          let _ = JSON.stringify(_);
          this.m_postWindow.postMessage(
            {
              gamepadMessage: _._,
              args: _,
            },
            "*",
          );
        }
        OnMessage(_) {
          let _ = _?.data;
          if (_ && _.gamepadMessage == _._ && _.args) {
            const _ = JSON.parse(_.args);
            this.m_fnCallback(_);
          }
        }
      }
      (0, _._)([_._], _.prototype, "OnMessage", null);
    },
  },
]);

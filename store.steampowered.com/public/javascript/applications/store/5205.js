/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5205],
  {
    12447: (t, e, n) => {
      n.d(e, { u: () => u });
      var o = n(90626),
        s = n(85585),
        i = n(7445),
        a = n(8871),
        r = n(78327),
        _ = n(73170),
        c = n(65233);
      function u(t) {
        const { children: e, navTreeRef: n, NavigationManager: u, ...A } = t,
          l = o.useRef(),
          m = (0, a.Ue)(l, n),
          h = (0, r.Qn)(),
          d = window.__virtual_keyboard_client;
        if (h) {
          const t = window.__nav_tree_root;
          return o.createElement(
            c.VQ,
            { controller: u },
            o.createElement(
              s.B,
              { ...A, navTreeRef: m, secondary: !0, parentEmbeddedNavTree: t },
              o.createElement(
                _.F6,
                { factory: d },
                o.createElement(i.q, null, e),
              ),
            ),
          );
        }
        return o.createElement(o.Fragment, null, e);
      }
    },
    46115: (t, e, n) => {
      n.d(e, { A: () => H });
      var o = n(34629),
        s = n(53534),
        i = n(6419);
      let a = [
        { index: 0, type: s.pR.OK, category: "action" },
        { index: 1, type: s.pR.CANCEL, category: "action" },
        { index: 2, type: s.pR.SECONDARY, category: "action" },
        { index: 3, type: s.pR.OPTIONS, category: "action" },
        { index: 4, type: s.pR.BUMPER_LEFT, category: "action" },
        { index: 5, type: s.pR.BUMPER_RIGHT, category: "action" },
        { index: 6, type: s.pR.TRIGGER_LEFT, category: "action" },
        { index: 7, type: s.pR.TRIGGER_RIGHT, category: "action" },
        { index: 8, type: s.pR.SELECT, category: "action" },
        { index: 9, type: s.pR.START, category: "action" },
        { index: 10, type: s.pR.LSTICK_CLICK, category: "action" },
        { index: 11, type: s.pR.RSTICK_CLICK, category: "action" },
        { index: 12, type: s.pR.DIR_UP, category: "navigation" },
        { index: 13, type: s.pR.DIR_DOWN, category: "navigation" },
        { index: 14, type: s.pR.DIR_LEFT, category: "navigation" },
        { index: 15, type: s.pR.DIR_RIGHT, category: "navigation" },
        { index: 16, type: s.pR.STEAM_GUIDE, category: "action" },
        { index: 17, type: s.pR.SELECT, category: "action" },
      ];
      class r extends s.nh {
        m_rgGamepadStatus = [];
        constructor() {
          super(),
            this.SetSourceType(s.Vz.GAMEPAD),
            window.addEventListener("gamepadconnected", (t) => {
              this.m_bGamepadDetected ||
                (this.OnGamepadDetected(), this.PollGamepads());
            });
        }
        PollGamepads() {
          let t = navigator.getGamepads(),
            e = !1;
          for (let n = 0; n < t.length; n++) {
            let o = t[n];
            if (!o) continue;
            this.m_rgGamepadStatus[n] ||
              (this.m_rgGamepadStatus[n] = { buttons: [] });
            let s = this.m_rgGamepadStatus[n];
            for (let t = 0; t < a.length; t++) {
              let n = a[t],
                i = n.index;
              o.buttons[i] &&
                (o.buttons[i].pressed
                  ? ((e = !0),
                    s.buttons[i] ||
                      ((s.buttons[i] = !0), this.OnButtonDown(n.type)))
                  : s.buttons[i] &&
                    (this.OnButtonUp(n.type), (s.buttons[i] = !1)));
            }
          }
          requestAnimationFrame(this.PollGamepads);
        }
      }
      (0, o.Cg)([i.o], r.prototype, "PollGamepads", null);
      var _,
        c,
        u = n(59264);
      !(function (t) {
        (t[(t.k_EControllerBindingType_None = 0)] =
          "k_EControllerBindingType_None"),
          (t[(t.k_EControllerBindingType_Key = 1)] =
            "k_EControllerBindingType_Key"),
          (t[(t.k_EControllerBindingType_MouseButton = 2)] =
            "k_EControllerBindingType_MouseButton"),
          (t[(t.k_EControllerBindingType_Gamepad = 3)] =
            "k_EControllerBindingType_Gamepad"),
          (t[(t.k_EControllerBindingType_Mousewheel = 4)] =
            "k_EControllerBindingType_Mousewheel"),
          (t[(t.k_EControllerBindingType_Modeshift = 5)] =
            "k_EControllerBindingType_Modeshift"),
          (t[(t.k_EControllerBindingType_GameAction = 6)] =
            "k_EControllerBindingType_GameAction"),
          (t[(t.k_EControllerBindingType_ControllerAction = 7)] =
            "k_EControllerBindingType_ControllerAction");
      })(_ || (_ = {})),
        (function (t) {
          (t[(t.GAMEPAD_BUTTON_A = 0)] = "GAMEPAD_BUTTON_A"),
            (t[(t.GAMEPAD_BUTTON_B = 1)] = "GAMEPAD_BUTTON_B"),
            (t[(t.GAMEPAD_BUTTON_X = 2)] = "GAMEPAD_BUTTON_X"),
            (t[(t.GAMEPAD_BUTTON_Y = 3)] = "GAMEPAD_BUTTON_Y"),
            (t[(t.GAMEPAD_BUTTON_DPAD_UP = 4)] = "GAMEPAD_BUTTON_DPAD_UP"),
            (t[(t.GAMEPAD_BUTTON_DPAD_RIGHT = 5)] =
              "GAMEPAD_BUTTON_DPAD_RIGHT"),
            (t[(t.GAMEPAD_BUTTON_DPAD_DOWN = 6)] = "GAMEPAD_BUTTON_DPAD_DOWN"),
            (t[(t.GAMEPAD_BUTTON_DPAD_LEFT = 7)] = "GAMEPAD_BUTTON_DPAD_LEFT"),
            (t[(t.GAMEPAD_BUTTON_MENU = 8)] = "GAMEPAD_BUTTON_MENU"),
            (t[(t.GAMEPAD_BUTTON_VIEW = 9)] = "GAMEPAD_BUTTON_VIEW"),
            (t[(t.GAMEPAD_LEFTPAD_UP = 10)] = "GAMEPAD_LEFTPAD_UP"),
            (t[(t.GAMEPAD_LEFTPAD_DOWN = 11)] = "GAMEPAD_LEFTPAD_DOWN"),
            (t[(t.GAMEPAD_LEFTPAD_LEFT = 12)] = "GAMEPAD_LEFTPAD_LEFT"),
            (t[(t.GAMEPAD_LEFTPAD_RIGHT = 13)] = "GAMEPAD_LEFTPAD_RIGHT"),
            (t[(t.GAMEPAD_LEFTPAD_ANALOG = 14)] = "GAMEPAD_LEFTPAD_ANALOG"),
            (t[(t.GAMEPAD_RIGHTPAD_UP = 15)] = "GAMEPAD_RIGHTPAD_UP"),
            (t[(t.GAMEPAD_RIGHTPAD_DOWN = 16)] = "GAMEPAD_RIGHTPAD_DOWN"),
            (t[(t.GAMEPAD_RIGHTPAD_LEFT = 17)] = "GAMEPAD_RIGHTPAD_LEFT"),
            (t[(t.GAMEPAD_RIGHTPAD_RIGHT = 18)] = "GAMEPAD_RIGHTPAD_RIGHT"),
            (t[(t.GAMEPAD_RIGHTPAD_ANALOG = 19)] = "GAMEPAD_RIGHTPAD_ANALOG"),
            (t[(t.GAMEPAD_LEFTSTICK_UP = 20)] = "GAMEPAD_LEFTSTICK_UP"),
            (t[(t.GAMEPAD_LEFTSTICK_DOWN = 21)] = "GAMEPAD_LEFTSTICK_DOWN"),
            (t[(t.GAMEPAD_LEFTSTICK_LEFT = 22)] = "GAMEPAD_LEFTSTICK_LEFT"),
            (t[(t.GAMEPAD_LEFTSTICK_RIGHT = 23)] = "GAMEPAD_LEFTSTICK_RIGHT"),
            (t[(t.GAMEPAD_LEFTSTICK_ANALOG = 24)] = "GAMEPAD_LEFTSTICK_ANALOG"),
            (t[(t.GAMEPAD_LEFTSTICK_CLICK = 25)] = "GAMEPAD_LEFTSTICK_CLICK"),
            (t[(t.GAMEPAD_LTRIGGER_ANALOG = 26)] = "GAMEPAD_LTRIGGER_ANALOG"),
            (t[(t.GAMEPAD_RTRIGGER_ANALOG = 27)] = "GAMEPAD_RTRIGGER_ANALOG"),
            (t[(t.GAMEPAD_BUTTON_LTRIGGER = 28)] = "GAMEPAD_BUTTON_LTRIGGER"),
            (t[(t.GAMEPAD_BUTTON_RTRIGGER = 29)] = "GAMEPAD_BUTTON_RTRIGGER"),
            (t[(t.GAMEPAD_BUTTON_LSHOULDER = 30)] = "GAMEPAD_BUTTON_LSHOULDER"),
            (t[(t.GAMEPAD_BUTTON_RSHOULDER = 31)] = "GAMEPAD_BUTTON_RSHOULDER"),
            (t[(t.GAMEPAD_BUTTON_LBACK = 32)] = "GAMEPAD_BUTTON_LBACK"),
            (t[(t.GAMEPAD_BUTTON_RBACK = 33)] = "GAMEPAD_BUTTON_RBACK"),
            (t[(t.GAMEPAD_BUTTON_GUIDE = 34)] = "GAMEPAD_BUTTON_GUIDE"),
            (t[(t.GAMEPAD_BUTTON_SELECT = 35)] = "GAMEPAD_BUTTON_SELECT"),
            (t[(t.GAMEPAD_BUTTON_START = 36)] = "GAMEPAD_BUTTON_START"),
            (t[(t.GAMEPAD_BUTTON_LPAD_CLICKED = 37)] =
              "GAMEPAD_BUTTON_LPAD_CLICKED"),
            (t[(t.GAMEPAD_BUTTON_LPAD_TOUCH = 38)] =
              "GAMEPAD_BUTTON_LPAD_TOUCH"),
            (t[(t.GAMEPAD_BUTTON_RPAD_CLICKED = 39)] =
              "GAMEPAD_BUTTON_RPAD_CLICKED"),
            (t[(t.GAMEPAD_BUTTON_RPAD_TOUCH = 40)] =
              "GAMEPAD_BUTTON_RPAD_TOUCH"),
            (t[(t.GAMEPAD_RIGHTSTICK_CLICK = 41)] = "GAMEPAD_RIGHTSTICK_CLICK"),
            (t[(t.GAMEPAD_RIGHTSTICK_TOUCH = 42)] = "GAMEPAD_RIGHTSTICK_TOUCH"),
            (t[(t.GAMEPAD_LEFTSTICK_TOUCH = 43)] = "GAMEPAD_LEFTSTICK_TOUCH"),
            (t[(t.GAMEPAD_BUTTON_LBACK_UPPER = 44)] =
              "GAMEPAD_BUTTON_LBACK_UPPER"),
            (t[(t.GAMEPAD_BUTTON_RBACK_UPPER = 45)] =
              "GAMEPAD_BUTTON_RBACK_UPPER"),
            (t[(t.GAMEPAD_BUTTON_LAST = 46)] = "GAMEPAD_BUTTON_LAST"),
            (t[(t.GAMEPAD_ANALOG_SCROLL = 47)] = "GAMEPAD_ANALOG_SCROLL"),
            (t[(t.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR = 48)] =
              "GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR"),
            (t[(t.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR = 49)] =
              "GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR"),
            (t[(t.GAMEPAD_ANALOG_LAST = 50)] = "GAMEPAD_ANALOG_LAST");
        })(c || (c = {}));
      const A = {
          [c.GAMEPAD_BUTTON_A]: s.pR.OK,
          [c.GAMEPAD_BUTTON_B]: s.pR.CANCEL,
          [c.GAMEPAD_BUTTON_X]: s.pR.SECONDARY,
          [c.GAMEPAD_BUTTON_Y]: s.pR.OPTIONS,
          [c.GAMEPAD_BUTTON_SELECT]: s.pR.SELECT,
          [c.GAMEPAD_BUTTON_START]: s.pR.START,
          [c.GAMEPAD_BUTTON_LSHOULDER]: s.pR.BUMPER_LEFT,
          [c.GAMEPAD_BUTTON_RSHOULDER]: s.pR.BUMPER_RIGHT,
          [c.GAMEPAD_BUTTON_LTRIGGER]: s.pR.TRIGGER_LEFT,
          [c.GAMEPAD_BUTTON_RTRIGGER]: s.pR.TRIGGER_RIGHT,
          [c.GAMEPAD_LEFTSTICK_UP]: s.pR.DIR_UP,
          [c.GAMEPAD_LEFTSTICK_RIGHT]: s.pR.DIR_RIGHT,
          [c.GAMEPAD_LEFTSTICK_DOWN]: s.pR.DIR_DOWN,
          [c.GAMEPAD_LEFTSTICK_LEFT]: s.pR.DIR_LEFT,
          [c.GAMEPAD_LEFTSTICK_CLICK]: s.pR.LSTICK_CLICK,
          [c.GAMEPAD_RIGHTSTICK_CLICK]: s.pR.RSTICK_CLICK,
          [c.GAMEPAD_LEFTSTICK_TOUCH]: s.pR.LSTICK_TOUCH,
          [c.GAMEPAD_RIGHTSTICK_TOUCH]: s.pR.RSTICK_TOUCH,
          [c.GAMEPAD_BUTTON_LPAD_TOUCH]: s.pR.LPAD_TOUCH,
          [c.GAMEPAD_BUTTON_LPAD_CLICKED]: s.pR.LPAD_CLICK,
          [c.GAMEPAD_BUTTON_RPAD_TOUCH]: s.pR.RPAD_TOUCH,
          [c.GAMEPAD_BUTTON_RPAD_CLICKED]: s.pR.RPAD_CLICK,
          [c.GAMEPAD_BUTTON_LBACK_UPPER]: s.pR.REAR_LEFT_UPPER,
          [c.GAMEPAD_BUTTON_LBACK]: s.pR.REAR_LEFT_LOWER,
          [c.GAMEPAD_BUTTON_RBACK_UPPER]: s.pR.REAR_RIGHT_UPPER,
          [c.GAMEPAD_BUTTON_RBACK]: s.pR.REAR_RIGHT_LOWER,
        },
        l = {
          [u.TR.SystemKey0]: s.pR.STEAM_GUIDE,
          [u.TR.SystemKey1]: s.pR.STEAM_QUICK_MENU,
        };
      class m extends s.nh {
        m_rgControllers = new Map();
        m_hUnregisterControllerDigitalInput;
        m_hUnregisterControllerAnalogInput;
        constructor() {
          super(),
            "undefined" != typeof SteamClient &&
              ((this.m_hUnregisterControllerDigitalInput =
                SteamClient.Input?.RegisterForControllerInputMessages(
                  this.HandleControllerInputMessages,
                )),
              SteamClient.System?.UI?.RegisterForSystemKeyEvents(
                this.HandleSystemKeyEvents,
              ),
              SteamClient.Input?.RegisterForControllerListChanges(
                this.OnControllerListChanged,
              )),
            this.SetSourceType(s.Vz.GAMEPAD);
        }
        OnControllerListChanged(t) {
          this.m_rgControllers.forEach((e, n) => {
            if (-1 == t.findIndex((t) => t.nControllerIndex == n)) {
              for (let t = 0; t in s.pR; t++)
                e.activeButtons[t] && this.OnButtonUp(t, n);
              this.OnAnalogPad(s.pR.LPAD_TOUCH, 0, 0, n),
                this.OnAnalogPad(s.pR.RPAD_TOUCH, 0, 0, n),
                this.m_rgControllers.delete(n);
            }
          });
        }
        HandleSystemKeyEvents(t) {
          const e = l[t.eKey];
          e && this.OnSystemButtonPress(e, t.nControllerIndex);
        }
        OnSystemButtonPress(t, e) {
          this.OnButtonDown(t, e), this.OnButtonUp(t, e);
        }
        GetController(t) {
          let e = this.m_rgControllers.get(t);
          return (
            e || ((e = { activeButtons: {} }), this.m_rgControllers.set(t, e)),
            e
          );
        }
        EnableAnalogInputMessages(t) {
          t
            ? (this.m_hUnregisterControllerAnalogInput =
                SteamClient.Input?.RegisterForControllerAnalogInputMessages(
                  this.HandleControllerInputMessages,
                ))
            : this.m_hUnregisterControllerAnalogInput?.unregister();
        }
        HandleControllerInputMessages(t) {
          for (const e of t) {
            const t = A[e.nA],
              n = this.GetController(e.nC);
            null != t
              ? e.bS && !n.activeButtons[t]
                ? ((n.activeButtons[t] = !0), this.OnButtonDown(t, e.nC))
                : !e.bS &&
                  n.activeButtons[t] &&
                  ((n.activeButtons[t] = !1), this.OnButtonUp(t, e.nC))
              : e.nA == c.GAMEPAD_ANALOG_SCROLL ||
                (e.nA == c.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR
                  ? n.activeButtons[s.pR.LPAD_TOUCH] &&
                    this.OnAnalogPad(s.pR.LPAD_TOUCH, e.x, e.y, e.nC)
                  : e.nA == c.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR &&
                    n.activeButtons[s.pR.RPAD_TOUCH] &&
                    this.OnAnalogPad(s.pR.RPAD_TOUCH, e.x, e.y, e.nC));
          }
        }
      }
      (0, o.Cg)([i.o], m.prototype, "OnControllerListChanged", null),
        (0, o.Cg)([i.o], m.prototype, "HandleSystemKeyEvents", null),
        (0, o.Cg)([i.o], m.prototype, "EnableAnalogInputMessages", null),
        (0, o.Cg)([i.o], m.prototype, "HandleControllerInputMessages", null);
      var h = n(56011),
        d = n(30470);
      class T extends s.nh {
        m_lastButtonDown = s.pR.INVALID;
        constructor(t) {
          super(),
            this.SetSourceType(s.Vz.KEYBOARD),
            t.addEventListener("keydown", this.OnKeyDown),
            t.addEventListener("keyup", this.OnKeyUp),
            t.addEventListener("blur", this.Reset);
        }
        OnKeyDown(t) {
          const e = this.TranslateKey(t);
          e != s.pR.INVALID &&
            (t.preventDefault(),
            e != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(e),
              (this.m_lastButtonDown = e)));
        }
        OnKeyUp(t) {
          const e = this.TranslateKey(t);
          e != s.pR.INVALID &&
            (this.OnButtonUp(e),
            (this.m_lastButtonDown = s.pR.INVALID),
            t.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != s.pR.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = s.pR.INVALID));
        }
        GetKeycodeFromEvent(t) {
          return "linux" === d.TS.PLATFORM && t.key.length > 1
            ? t.key || t.code
            : t.code || t.key;
        }
        BShouldSwallowEventForTextInputWorkaround(t) {
          if (
            !(
              h.kD(t.target) &&
              ("INPUT" === t.target.nodeName ||
                "TEXTAREA" === t.target.nodeName ||
                t.target.hasAttribute("contenteditable"))
            )
          )
            return !1;
          if (t.target.hasAttribute("contenteditable")) return !0;
          const e = this.GetKeycodeFromEvent(t);
          let n = t.target;
          const o = Array.from(
            n.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((t) =>
            Array.from(t.classList).some((t) => t.includes("virtualkeyboard")),
          );
          switch (e) {
            case "ArrowUp": {
              if (o) return !0;
              let e = n?.value.indexOf("\n");
              return (
                "TEXTAREA" === t.target.nodeName &&
                e >= 0 &&
                e < (n?.selectionStart ?? 0)
              );
            }
            case "ArrowDown": {
              if (o) return !0;
              let e = n?.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === t.target.nodeName &&
                e >= 0 &&
                e >= (n?.selectionStart ?? 0) &&
                (n?.selectionEnd ?? 0) < n?.value.length
              );
            }
            case "ArrowLeft":
              return (
                !!o ||
                ((n?.selectionStart ?? 0) > 0 && (n?.selectionEnd ?? 0) > 0)
              );
            case "ArrowRight":
              return (
                !!o ||
                ((n?.selectionStart ?? 0) < n?.value.length &&
                  (n?.selectionEnd ?? 0) < n?.value.length)
              );
            case "Enter":
            case "Backspace":
              return !0;
            default:
              return !1;
          }
        }
        TranslateKey(t) {
          const e = this.GetKeycodeFromEvent(t),
            n = t.ctrlKey,
            o = t.shiftKey;
          if (this.BShouldSwallowEventForTextInputWorkaround(t))
            return s.pR.INVALID;
          if (n && o)
            switch (e) {
              case "Digit4":
                return s.pR.TRIGGER_LEFT;
              case "Digit5":
                return s.pR.TRIGGER_RIGHT;
              default:
                return s.pR.INVALID;
            }
          if (n)
            switch (e) {
              case "Digit1":
                return s.pR.STEAM_GUIDE;
              case "Digit2":
                return s.pR.STEAM_QUICK_MENU;
              case "Digit3":
              case "Digit9":
                return s.pR.SELECT;
              case "Digit4":
                return s.pR.BUMPER_LEFT;
              case "Digit5":
                return s.pR.BUMPER_RIGHT;
              case "Digit6":
                return s.pR.LSTICK_CLICK;
              case "Digit7":
                return s.pR.RSTICK_CLICK;
              case "Digit8":
                return s.pR.OPTIONS;
              case "Digit0":
                return s.pR.START;
            }
          switch (e) {
            case "Escape":
              return s.pR.CANCEL;
            case "Enter":
              return s.pR.OK;
            case "Backspace":
              return s.pR.SECONDARY;
            case "ArrowUp":
              return s.pR.DIR_UP;
            case "ArrowDown":
              return s.pR.DIR_DOWN;
            case "ArrowLeft":
              return s.pR.DIR_LEFT;
            case "ArrowRight":
              return s.pR.DIR_RIGHT;
          }
          return s.pR.INVALID;
        }
      }
      (0, o.Cg)([i.o], T.prototype, "OnKeyDown", null),
        (0, o.Cg)([i.o], T.prototype, "OnKeyUp", null),
        (0, o.Cg)([i.o], T.prototype, "Reset", null);
      class v extends s.nh {
        m_nAccumulatedMouseMovement = 0;
        m_bFirstMouseUpdate = !0;
        m_nLastScreenX;
        m_nLastScreenY;
        m_lastButtonDown = s.pR.INVALID;
        constructor(t) {
          super(),
            this.SetSourceType(s.Vz.MOUSE),
            t.addEventListener("mousedown", this.OnMouseDown),
            t.addEventListener("mouseup", this.OnMouseUp),
            t.addEventListener("mousemove", this.OnMouseMove),
            t.addEventListener("blur", this.Reset);
        }
        TranslateKey(t) {
          return 3 === t.button ? s.pR.CANCEL : s.pR.INVALID;
        }
        OnMouseDown(t) {
          if (t.defaultPrevented) return;
          const e = this.TranslateKey(t);
          e != s.pR.INVALID &&
            (t.preventDefault(),
            e != this.m_lastButtonDown &&
              (this.Reset(), this.OnButtonDown(e), (this.m_lastButtonDown = e)),
            this.OnNavigationTypeChanged(s.Vz.MOUSE));
        }
        OnMouseUp(t) {
          const e = this.TranslateKey(t);
          e != s.pR.INVALID &&
            (this.OnButtonUp(e),
            (this.m_lastButtonDown = s.pR.INVALID),
            t.preventDefault());
        }
        OnMouseMove(t) {
          if (!t.defaultPrevented) {
            if (this.m_bFirstMouseUpdate)
              return (
                (this.m_nLastScreenX = t.screenX),
                (this.m_nLastScreenY = t.screenY),
                void (this.m_bFirstMouseUpdate = !1)
              );
            (this.m_nAccumulatedMouseMovement +=
              Math.abs(t.screenX - this.m_nLastScreenX) +
              Math.abs(t.screenY - this.m_nLastScreenY)),
              this.m_nAccumulatedMouseMovement > 500 &&
                (this.Reset(), this.OnNavigationTypeChanged(s.Vz.MOUSE));
          }
        }
        Reset() {
          (this.m_nAccumulatedMouseMovement = 0),
            (this.m_bFirstMouseUpdate = !0),
            this.m_lastButtonDown != s.pR.INVALID &&
              (this.OnButtonUp(this.m_lastButtonDown),
              (this.m_lastButtonDown = s.pR.INVALID));
        }
      }
      (0, o.Cg)([i.o], v.prototype, "TranslateKey", null),
        (0, o.Cg)([i.o], v.prototype, "OnMouseDown", null),
        (0, o.Cg)([i.o], v.prototype, "OnMouseUp", null),
        (0, o.Cg)([i.o], v.prototype, "OnMouseMove", null),
        (0, o.Cg)([i.o], v.prototype, "Reset", null);
      var p = n(91986),
        C = n(81393),
        E = n(62490),
        g = n(66703),
        D = n(6144),
        G = n(60778),
        R = n(45730),
        N = n(1977);
      const I = new G.wd("FocusNavigation").Debug,
        L = new G.wd("GamepadEvents").Debug;
      class O {
        m_Controller;
        m_context;
        m_window;
        m_ID;
        m_bVirtualFocus;
        m_bIsMounted;
        m_Root;
        m_onActivateCallbacks = new p.l();
        m_onDeactivateCallbacks = new p.l();
        m_onActiveFocusStateChangedCallbacks = new p.l();
        m_ParentEmbeddedNavTree;
        m_onUnhandledButton;
        m_applyFocusClassesInDesktop = !1;
        constructor(t, e, n) {
          (this.m_Controller = t),
            (this.m_context = e),
            (this.m_ID = n),
            (this.m_Root = new N.Bp(this, null, null)),
            this.m_Root.SetProperties({ layout: N.xj.COLUMN }),
            (window.GamepadNavTree = this);
        }
        SetUseVirtualFocus(t) {
          this.m_bVirtualFocus = t;
        }
        get id() {
          return this.m_ID;
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
        BIsContextActive() {
          return this.m_Controller.BIsInActiveContext(this);
        }
        CreateNode(t, e) {
          return new N.Bp(this, t, e);
        }
        RegisterNavigationItem(t, e) {
          return t.OnMount(e), () => t.OnUnmount();
        }
        OnChildActivated(t) {
          this.m_bIsMounted &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, t);
        }
        m_lastFocusNode;
        m_bWasActiveForLastFocusChange;
        m_lastFocusNodeXMovement = new P();
        m_lastFocusNodeYMovement = new P();
        GetLastFocusedNode() {
          return this.m_lastFocusNode;
        }
        GetLastFocusedMovementRect(t) {
          return "x" == t
            ? this.m_lastFocusNodeXMovement.GetRect()
            : "y" == t
              ? this.m_lastFocusNodeYMovement.GetRect()
              : void 0;
        }
        get OnActivateCallbacks() {
          return this.m_onActivateCallbacks;
        }
        get OnDeactivateCallbacks() {
          return this.m_onDeactivateCallbacks;
        }
        get OnActiveStateChangedCallbacks() {
          return this.m_onActiveFocusStateChangedCallbacks;
        }
        OnActivate(t) {
          this.m_onActivateCallbacks.Dispatch(this, t),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
        }
        OnDeactivate(t) {
          this.m_onDeactivateCallbacks.Dispatch(this, t),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
            (this.m_bWasActiveForLastFocusChange = !1);
        }
        IsActiveFocusNavTree() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        TakeFocus(t, e = !1) {
          let n = !1;
          e
            ? (n = this.Root.BVisibleChildTakeFocus(t))
            : this.m_lastFocusNode && (n = this.m_lastFocusNode.BTakeFocus(t)),
            n || (n = this.Root.BTakeFocus(t)),
            n || this.TransferFocus(t, this.Root);
        }
        Activate(t = !1) {
          this.m_Controller.OnGamepadNavigationTreeActivated(this, t);
        }
        Deactivate() {
          this.m_Controller.BlurNavTree(this);
        }
        BIsActive() {
          return (
            this.m_bIsMounted &&
            (this.m_Controller.IsActiveNavTree(this) ||
              this.m_Controller.IsActiveFocusNavTree(this))
          );
        }
        BIsActiveFocus() {
          return (
            this.m_bIsMounted && this.m_Controller.IsActiveFocusNavTree(this)
          );
        }
        BIsActiveWithinContext() {
          return (
            this.m_bIsMounted &&
            (this.m_context.m_LastActiveNavTree == this ||
              this.m_context.m_LastActiveFocusNavTree == this)
          );
        }
        SetIsMounted(t) {
          this.m_window = t;
          const e = this.m_Root.Element;
          (e.__nav_tree = this),
            e.__nav_wrapper && e.__nav_wrapper.BindTree(this),
            (this.m_bIsMounted = !0);
        }
        SetParentEmbeddedNavTree(t) {
          this.m_ParentEmbeddedNavTree = t;
        }
        GetParentEmbeddedNavTree() {
          return this.m_ParentEmbeddedNavTree;
        }
        SetApplyFocusClassesInDesktop(t) {
          this.m_applyFocusClassesInDesktop = t;
        }
        GetApplyFocusClassesInDesktop() {
          return this.m_applyFocusClassesInDesktop;
        }
        SetOnUnhandledButtonCallback(t) {
          this.m_onUnhandledButton = t;
        }
        HandleButtonDownEventAsLogicalEvent(t) {
          let { bUnhandled: e, bHadLogicalEventMapping: n } = (0, R.IA)(t);
          return (
            L(
              `Logical gamepad Event fired: ${s.pR[t.detail.button]}, had logical event: ${n}, was handled: ${!e}`,
            ),
            e && this.m_onUnhandledButton && (e = this.m_onUnhandledButton(t)),
            e && (e = this.m_Controller.FireUnhandledGamepadEventCallbacks(t)),
            t.stopPropagation(),
            e
          );
        }
        m_DeferredFocus = new B(this);
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        TransferFocus(t, e, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(t, e, n),
          );
        }
        TransferFocusInternal(t, e, n) {
          const o = this.m_lastFocusNode;
          if (
            o == e &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          I(
            `Transfer focus in ${this.id}, source: ${t && R.D$[t]}, from/to:`,
            o?.m_element,
            e?.m_element,
          );
          const s = { blurredNode: o, focusedNode: e, source: t },
            i = (function (t, e) {
              if (!e || !t) return null;
              let n = e,
                o = t;
              for (; n.GetDepth() > o.GetDepth() && n.Parent; ) n = n.Parent;
              for (; o.GetDepth() > n.GetDepth() && o.Parent; ) o = o.Parent;
              for (; n != o && n && o; ) (n = n.Parent), (o = o.Parent);
              return n;
            })(o, e);
          if (o) {
            o.SetHasFocus(!1);
            for (let t = o; t && t != i; t = t.Parent) t.SetFocusWithin(!1);
          }
          if (e) {
            e.SetHasFocus(!0);
            for (let t = e; t && t != i; t = t.Parent) t.SetFocusWithin(!0);
          }
          let a = this.m_context.OnFocusChangeStart(t, this, o, e);
          e && e.SetDOMFocusAndScroll(t, o),
            o &&
              ((0, R.AE)(o.Element, "vgp_onblur", s),
              !o.m_FocusRing ||
                (e && o.m_FocusRing == e.m_FocusRing) ||
                o.m_FocusRing.OnBlur(t, o, e)),
            e &&
              ((0, R.AE)(e.Element, "vgp_onfocus", s),
              e.m_FocusRing &&
                (o && e.m_FocusRing == o.m_FocusRing
                  ? e.m_FocusRing.OnFocusChange(t, o, e)
                  : e.m_FocusRing.OnFocus(t, e, o))),
            (this.m_lastFocusNode = e),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(e?.Element)
              : "y" == n
                ? this.m_lastFocusNodeYMovement.SetNode(e?.Element)
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
        }
      }
      class P {
        m_element;
        m_rect;
        SetNode(t) {
          (this.m_element = t),
            (this.m_rect = t ? t.getBoundingClientRect() : void 0);
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
      class B {
        m_tree;
        m_target;
        m_interval;
        m_schExecuteQueuedFocus = new D.LU();
        m_bSuppressed = !1;
        constructor(t) {
          this.m_tree = t;
        }
        RequestFocus(t, e) {
          t
            ? ((this.m_target = { ...e, node: t }),
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
        BIsQueuedFocusNode(t) {
          return this.m_target && this.m_target.node == t;
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
            const { node: t, bFocusDescendant: e } = this.m_target;
            (this.m_target = void 0),
              I(
                `DeferredFocus in ${this.m_tree.id} - focusing ${e ? "descendant of" : "node"} ${t.NavKey}`,
              ),
              e
                ? t.BChildTakeFocus(R.D$.APPLICATION) ||
                  this.m_tree.TransferFocus(R.D$.APPLICATION, t)
                : t.BTakeFocus(R.D$.APPLICATION);
          }
        }
      }
      const S = new G.wd("FocusNavigation").Debug;
      class F {
        m_rootWindow;
        m_activeWindow;
        m_activeBrowserView;
        m_bActive = (0, D.Jc)(!1);
        m_controller;
        m_rgGamepadNavigationTrees = [];
        m_LastActiveNavTree = null;
        m_LastActiveFocusNavTree = null;
        m_bMounted = !0;
        m_schDeferredActivate = new D.LU();
        m_FocusChangedCallbacks = new p.l();
        m_bIsGamepadInputSuppressed = !1;
        constructor(t, e, n) {
          (this.m_controller = t),
            (this.m_rootWindow = e),
            (this.m_activeWindow = e),
            (this.m_bIsGamepadInputSuppressed = n);
        }
        get RootWindow() {
          return this.m_rootWindow;
        }
        get ActiveWindow() {
          return this.m_activeWindow;
        }
        FindNavTreeInFocusedWindow() {
          for (
            let t = this.m_rgGamepadNavigationTrees.length - 1;
            t >= 0;
            t--
          ) {
            const e = this.m_rgGamepadNavigationTrees[t];
            if (e.Window?.document.hasFocus()) return e;
          }
        }
        Destroy(t) {
          t == this.m_rootWindow
            ? (S(`${this.LogName(t)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, t))
            : S(`${this.LogName(t)} Child window destroyed`);
        }
        SetActive(t, e, n = void 0) {
          this.m_controller.BatchedUpdate(() => {
            const o = this.m_bActive.Value != t;
            t
              ? ((this.m_activeWindow = e),
                (this.m_activeBrowserView = n),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_bActive.Set(t),
              o &&
                this.m_LastActiveFocusNavTree?.OnActiveStateChangedCallbacks.Dispatch(
                  t,
                  this.m_LastActiveFocusNavTree,
                );
          });
        }
        OnActivate(t) {
          S(
            `${this.LogName(t)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
          ),
            this.SetActive(!0, t);
        }
        OnActivateBrowserView(t, e) {
          S(`${this.LogName(t)} Browser View "${e}" activated in context`),
            this.SetActive(!0, t, e);
        }
        OnDeactivate(t) {
          this.m_activeWindow == t
            ? (S(`${this.LogName(t)} Deactivate context for window`),
              this.SetActive(!1, t))
            : S(
                `${this.LogName(t)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
              );
        }
        OnDeactivateBrowserView(t, e) {
          S(`${this.LogName(t)} Browser View "${e}" deactivated in context`),
            this.m_activeBrowserView == e && this.SetActive(!1, t, e);
        }
        BIsGamepadInputSuppressed() {
          return this.m_bIsGamepadInputSuppressed;
        }
        BIsActive() {
          return this.m_bActive.Value;
        }
        get IsActive() {
          return this.m_bActive;
        }
        AddNavTree(t, e) {
          e
            ? this.m_rgGamepadNavigationTrees.unshift(t)
            : (this.m_rgGamepadNavigationTrees.push(t),
              this.SetActiveNavTree(t, !0));
        }
        LogName(t = void 0) {
          return t && this.m_rootWindow != t
            ? `(${this.m_rootWindow.name}) > (${t.name})`
            : `(${this.m_rootWindow.name})`;
        }
        SetActiveNavTree(t, e = !1) {
          if (t && this.m_LastActiveNavTree == t) return;
          const n = this.m_LastActiveNavTree;
          n && E.x9(this.m_rgGamepadNavigationTrees, n),
            t ||
              (this.m_rgGamepadNavigationTrees.length &&
                (t =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const o = this.m_LastActiveFocusNavTree == t;
          t && E.x9(this.m_rgGamepadNavigationTrees, t),
            (this.m_LastActiveNavTree = t),
            (t && t.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = t),
            S(
              `${this.LogName(t?.Window)} Move from nav tree ${n?.id} to nav tree ${t?.id} ${e ? "taking focus" : "no focus"}`,
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            t &&
              (this.m_rgGamepadNavigationTrees.push(t),
              o ||
                !e ||
                t.DeferredFocus.BHasQueuedFocusNode() ||
                t.DeferredFocus.RequestFocus(t.Root)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(t),
            t && !o && t.OnActivate(n);
        }
        BlurNavTree(t) {
          this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
            E.x9(this.m_rgGamepadNavigationTrees, t),
            this.m_rgGamepadNavigationTrees.unshift(t);
        }
        UnregisterGamepadNavigationTree(t) {
          E.x9(this.m_rgGamepadNavigationTrees, t),
            S(
              `(${this.m_rootWindow.name}) Unregister tree ${t?.id} ${this.m_LastActiveFocusNavTree == t ? "(was active)" : "(inactive)"}`,
            ),
            this.m_LastActiveNavTree == t &&
              ((this.m_LastActiveNavTree = null),
              this.m_bMounted &&
                this.m_schDeferredActivate.Schedule(1, () => {
                  this.m_LastActiveNavTree || this.SetActiveNavTree(null, !0);
                }));
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
        }
        m_iFocusChangeStack = 0;
        m_ActiveFocusChange;
        OnFocusChangeStart(t, e, n, o) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = {
                  source: t,
                  from: n || void 0,
                  to: o || void 0,
                })
              : this.m_ActiveFocusChange &&
                !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(t) {
          if (
            (this.m_iFocusChangeStack--,
            (0, C.w)(t == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const {
              source: t,
              from: e,
              to: n,
            } = this.m_ActiveFocusChange ?? {};
            this.m_FocusChangedCallbacks.Dispatch(t, e, n);
          }
        }
      }
      const U = new G.wd("FocusNavigation").Debug,
        M = new G.wd("FocusNavigation").Assert,
        w = "focus-nav-show-debug-focus-ring";
      function y(t, e) {
        return (
          t?.eActivationSourceType === e?.eActivationSourceType &&
          t?.nActiveGamepadIndex === e?.nActiveGamepadIndex &&
          t?.nLastActiveGamepadIndex === e?.nLastActiveGamepadIndex
        );
      }
      class b {
        m_rgGamepadInputSources = [];
        m_DefaultContext;
        m_rgAllContexts = [];
        m_ActiveContext;
        m_LastActiveContext;
        m_bGlobalEventsInitialized = !1;
        m_fnCatchAllGamepadInput = null;
        m_UnhandledButtonEventsCallbacks = new p.l();
        m_navigationSource = (0, D.Jc)(
          {
            eActivationSourceType: s.Vz.UNKNOWN,
            nActiveGamepadIndex: -1,
            nLastActiveGamepadIndex: -1,
          },
          y,
        );
        m_navigationSourceSupportsFocus = (0, D.YX)(
          this.m_navigationSource,
          (t) =>
            t?.eActivationSourceType === s.Vz.GAMEPAD ||
            t?.eActivationSourceType === s.Vz.KEYBOARD ||
            t?.eActivationSourceType === s.Vz.UNKNOWN,
        );
        m_bShowDebugFocusRing = (0, D.Jc)(!1);
        m_bRestoringHistory = !1;
        m_fnGamepadEventUpdateBatcher = (t) => t();
        constructor() {
          window.FocusNavController = this;
        }
        Init() {
          this.m_bShowDebugFocusRing.Set("shown" == sessionStorage.getItem(w));
        }
        CreateContext(t, e) {
          const n = new F(this, t, e);
          return this.m_rgAllContexts.push(n), n;
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
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const t of this.m_rgAllContexts) {
              const e = t.FindNavTreeInFocusedWindow();
              if (e) {
                U(
                  `${t.LogName(e.Window)} Found a focused window; setting this context as active.`,
                ),
                  (this.m_ActiveContext = t),
                  this.m_ActiveContext.OnActivate(e.Window);
                break;
              }
            }
          }
          return (
            !this.m_ActiveContext &&
              this.m_LastActiveContext &&
              ((0, C.w)(
                !1,
                `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
              ),
              (this.m_ActiveContext = this.m_LastActiveContext),
              this.m_ActiveContext.OnActivate(
                this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
              )),
            this.m_ActiveContext
          );
        }
        SetShowDebugFocusRing(t) {
          this.m_bShowDebugFocusRing.Set(t),
            (function (t) {
              t
                ? sessionStorage.setItem(w, "shown")
                : sessionStorage.removeItem(w);
            })(t);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(t) {
          let e = new D.e0();
          return (
            this.m_rgGamepadInputSources.push(t),
            e.PushArrayRemove(this.m_rgGamepadInputSources, t),
            e.Push(
              t.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister,
            ),
            e.Push(t.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
            e.Push(
              t.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
                .Unregister,
            ),
            t.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
            e.Push(() => t.SetRepeatAllowed()),
            e.GetUnregisterFunc()
          );
        }
        SetGamepadEventUpdateBatcher(t) {
          this.m_fnGamepadEventUpdateBatcher = t;
        }
        get NavigationSource() {
          return this.m_navigationSource;
        }
        get NavigationSourceSupportsFocus() {
          return this.m_navigationSourceSupportsFocus;
        }
        DispatchVirtualButtonPress(t) {
          this.OnButtonDown(t, s.Vz.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(t, e) {
          let n;
          e && (n = this.GetActiveContext() ?? this.FindAnActiveContext()),
            this.OnButtonDown(t, s.Vz.GAMEPAD, -1, void 0, e, n, !0),
            this.OnButtonUp(t, s.Vz.GAMEPAD, -1, void 0, e, n, !0);
        }
        DispatchVirtualGamepad(t, e) {
          switch (t) {
            case "vgp_onbuttondown":
              this.OnButtonDown(e.button, e.source, -1, e.is_repeat);
              break;
            case "vgp_onbuttonup":
              this.OnButtonUp(e.button, e.source, -1);
          }
        }
        BGlobalGamepadButton(t) {
          return (
            t === s.pR.STEAM_GUIDE ||
            t === s.pR.STEAM_QUICK_MENU ||
            t === s.pR.CANCEL
          );
        }
        GetEventTarget(t, e, n = !1) {
          let o = this.GetActiveContext();
          !o && n && (o = this.FindAnActiveContext());
          let i = o?.ActiveWindow?.document.activeElement;
          if (o?.m_LastActiveNavTree) {
            if (
              (e || (e = this.m_navigationSource?.Value?.eActivationSourceType),
              !(
                o.m_LastActiveNavTree.GetLastFocusedNode() ||
                (e != s.Vz.GAMEPAD && e != s.Vz.KEYBOARD) ||
                (U(
                  `GetEventTarget: Context ${o.LogName()} tree ${o.m_LastActiveNavTree.id} has no focused node, ${n ? "finding one" : "will not find one"}`,
                ),
                n && o.m_LastActiveNavTree.TakeFocus(R.D$.GAMEPAD, !0),
                this.BGlobalGamepadButton(t))
              ))
            )
              return [void 0, o];
            o.m_LastActiveNavTree.GetLastFocusedNode()
              ? (i = o.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
              : U(
                  `GetEventTarget: Context ${o.LogName()} tree ${o.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
                );
          }
          return [i, o];
        }
        ChangeNavigationSource(t, e) {
          let n = this.m_navigationSource.Value,
            o = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex &&
            n.nActiveGamepadIndex >= 0 &&
            (o = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: t,
              nActiveGamepadIndex: e,
              nLastActiveGamepadIndex: o,
            }),
            t != s.Vz.MOUSE &&
              (0, g.Dp)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonActionInternal(t, e, n, o, i, a, r, _) {
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(e))
            return void (
              t &&
              U(
                "Ignoring button press - gamepad input is suppressed by parent window",
              )
            );
          M(
            !!a == !!r,
            "Must set both overrideContext and overrideElement or neither",
          );
          let c = a,
            u = r;
          (null != c && null != u) || ([c, u] = this.GetEventTarget(e, n, !0)),
            !u?.BIsGamepadInputSuppressed() || _
              ? (this.ChangeNavigationSource(n, o),
                t &&
                  U(
                    `Firing ${s.pR[e]} in tree ${u?.m_LastActiveNavTree?.id} at `,
                    c,
                  ),
                this.BatchedUpdate(() =>
                  (0, R.AE)(c, t ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: e,
                    source: n,
                    is_repeat: i,
                  }),
                ))
              : U(
                  `Suppressing ${s.pR[e]} input on element ${c?.className} because tree ${u?.m_LastActiveNavTree?.id} has it disabled`,
                );
        }
        OnButtonDown(t, e, n, o, s, i, a) {
          this.OnButtonActionInternal(!0, t, e, n, o, s, i, a);
        }
        OnButtonUp(t, e, n, o, s, i, a) {
          this.OnButtonActionInternal(!1, t, e, n, !1, s, i, a);
        }
        BatchedUpdate(t) {
          this.m_fnGamepadEventUpdateBatcher(t);
        }
        OnNavigationTypeChange(t) {
          if (
            (this.ChangeNavigationSource(t, -1),
            document.hasFocus() &&
              (t == s.Vz.MOUSE || t == s.Vz.TOUCH) &&
              this.m_ActiveContext?.m_LastActiveNavTree)
          ) {
            const t =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              e = (function (t) {
                if (!(0, h.kD)(t)) return !1;
                const e = t.tagName,
                  n = (0, h.IB)(t) ? t.type : void 0;
                return (0, h.TV)(e, n);
              })(t?.Element)
                ? t
                : null;
            this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(
              R.D$.BROWSER,
              e,
            );
          }
        }
        NewGamepadNavigationTree(t, e) {
          return new O(this, t, e);
        }
        RegisterGamepadNavigationTree(t, e, n) {
          const o = t.WindowContext;
          return (
            t.SetIsMounted(e),
            n || ((this.m_ActiveContext = o), (this.m_LastActiveContext = o)),
            o.AddNavTree(t, n),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => o.UnregisterGamepadNavigationTree(t)
          );
        }
        OnGamepadNavigationTreeActivated(t, e = !1) {
          t.WindowContext.SetActiveNavTree(t, e);
        }
        OnGamepadNavigationTreeFocused(t, e, n = !1) {
          const o = t.WindowContext;
          o != this.m_ActiveContext &&
            U(`(${o.LogName(t.Window)}) Focus event in inactive window`),
            t != o.m_LastActiveFocusNavTree &&
              t != o.m_LastActiveNavTree &&
              (o.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == t ||
              t.GetParentEmbeddedNavTree() == o.m_LastActiveFocusNavTree
                ? (U(
                    `There was a focus event in ${t.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                  ),
                  t.Activate())
                : U(
                    `There was a focus event in ${t.id}, but the active nav tree is ${o.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${e && R.D$[e]}.`,
                  ));
        }
        BlurNavTree(t) {
          t.WindowContext.BlurNavTree(t);
        }
        IsActiveFocusNavTree(t) {
          return Boolean(
            t && t == this.m_ActiveContext?.m_LastActiveFocusNavTree,
          );
        }
        IsActiveNavTree(t) {
          return Boolean(t && t == this.m_ActiveContext?.m_LastActiveNavTree);
        }
        BIsInActiveContext(t) {
          return Boolean(t && t.WindowContext == this.m_ActiveContext);
        }
        BindGlobalEventHandlers() {
          this.m_bGlobalEventsInitialized ||
            (this.m_bGlobalEventsInitialized = !0);
        }
        RegisterForUnhandledButtonDownEvents(t) {
          return this.m_UnhandledButtonEventsCallbacks.Register(t);
        }
        FireUnhandledGamepadEventCallbacks(t) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(t), !1)
          );
        }
        SetSuppressGamepadInput(t) {
          this.m_fnCatchAllGamepadInput = t ? () => !0 : null;
        }
        SetCatchAllGamepadInput(t) {
          this.m_fnCatchAllGamepadInput = t;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let t =
            this.m_ActiveContext?.m_LastActiveFocusNavTree ||
            this.m_ActiveContext?.m_LastActiveNavTree;
          t && t.TakeFocus(R.D$.APPLICATION);
        }
        OnContextActivated(t) {
          (this.m_ActiveContext = t), (this.m_LastActiveContext = t);
        }
        OnContextDeactivated(t, e) {
          e &&
            (this.m_LastActiveContext == t &&
              (this.m_LastActiveContext = void 0),
            E.x9(this.m_rgAllContexts, t)),
            this.m_ActiveContext == t && (this.m_ActiveContext = void 0);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        async RestoreHistoryTransaction(t) {
          this.m_bRestoringHistory = !0;
          try {
            await t();
          } finally {
            this.m_bRestoringHistory = !1;
          }
        }
      }
      (0, o.Cg)([i.o], b.prototype, "OnButtonDown", null),
        (0, o.Cg)([i.o], b.prototype, "OnButtonUp", null),
        (0, o.Cg)([i.o], b.prototype, "OnNavigationTypeChange", null);
      var f = n(78327),
        x = n(72739);
      class K {
        m_GamepadNavigationController = new b();
        GetNavigationController() {
          return this.m_GamepadNavigationController;
        }
        static s_Singleton;
        static s_SingletonGamepaUI;
        static Get(t) {
          return t
            ? (K.s_SingletonGamepaUI ||
                ((K.s_SingletonGamepaUI = new K(!0)),
                "dev" == f.TS.WEB_UNIVERSE &&
                  (window.g_StoreWebNavStoreGamepadUI = K.s_Singleton)),
              K.s_SingletonGamepaUI)
            : (K.s_Singleton || (K.s_Singleton = new K(!1)), K.s_Singleton);
        }
        constructor(t) {
          t &&
            (this.m_GamepadNavigationController.RegisterInputSource(new m()),
            this.m_GamepadNavigationController.RegisterInputSource(new r())),
            "dev" == f.TS.WEB_UNIVERSE &&
              (this.m_GamepadNavigationController.RegisterInputSource(
                new T(window),
              ),
              this.m_GamepadNavigationController.RegisterInputSource(
                new v(window),
              ));
        }
      }
      function H() {
        let t = window.legacyWebFocusNavController,
          e = (0, f.Qn)();
        return (
          t || (t = K.Get(e).GetNavigationController()),
          t.SetGamepadEventUpdateBatcher(x.unstable_batchedUpdates),
          t
        );
      }
    },
  },
]);

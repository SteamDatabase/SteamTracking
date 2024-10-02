/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8117],
  {
    12447: (t, e, n) => {
      n.d(e, { u: () => l });
      var i = n(90626),
        o = n(85585),
        s = n(7445),
        a = n(8871),
        r = n(78327),
        u = n(73170),
        _ = n(65233);
      function l(t) {
        const { children: e, navTreeRef: n, NavigationManager: l, ...c } = t,
          A = i.useRef(),
          d = (0, a.Ue)(A, n),
          h = (0, r.Qn)(),
          v = window.__virtual_keyboard_client;
        if (h) {
          const t = window.__nav_tree_root;
          return i.createElement(
            _.VQ,
            { controller: l },
            i.createElement(
              o.B,
              { ...c, navTreeRef: d, secondary: !0, parentEmbeddedNavTree: t },
              i.createElement(
                u.F6,
                { factory: v },
                i.createElement(s.q, null, e),
              ),
            ),
          );
        }
        return i.createElement(i.Fragment, null, e);
      }
    },
    46115: (t, e, n) => {
      n.d(e, { A: () => H });
      var i = n(34629),
        o = n(53534),
        s = n(6419);
      let a = [
        { index: 0, type: o.pR.OK, category: "action" },
        { index: 1, type: o.pR.CANCEL, category: "action" },
        { index: 2, type: o.pR.SECONDARY, category: "action" },
        { index: 3, type: o.pR.OPTIONS, category: "action" },
        { index: 4, type: o.pR.BUMPER_LEFT, category: "action" },
        { index: 5, type: o.pR.BUMPER_RIGHT, category: "action" },
        { index: 6, type: o.pR.TRIGGER_LEFT, category: "action" },
        { index: 7, type: o.pR.TRIGGER_RIGHT, category: "action" },
        { index: 8, type: o.pR.SELECT, category: "action" },
        { index: 9, type: o.pR.START, category: "action" },
        { index: 10, type: o.pR.LSTICK_CLICK, category: "action" },
        { index: 11, type: o.pR.RSTICK_CLICK, category: "action" },
        { index: 12, type: o.pR.DIR_UP, category: "navigation" },
        { index: 13, type: o.pR.DIR_DOWN, category: "navigation" },
        { index: 14, type: o.pR.DIR_LEFT, category: "navigation" },
        { index: 15, type: o.pR.DIR_RIGHT, category: "navigation" },
        { index: 16, type: o.pR.STEAM_GUIDE, category: "action" },
        { index: 17, type: o.pR.SELECT, category: "action" },
      ];
      class r extends o.nh {
        constructor() {
          super(),
            (this.m_rgGamepadStatus = []),
            this.SetSourceType(o.Vz.GAMEPAD),
            window.addEventListener("gamepadconnected", (t) => {
              this.m_bGamepadDetected ||
                (this.OnGamepadDetected(), this.PollGamepads());
            });
        }
        PollGamepads() {
          let t = navigator.getGamepads(),
            e = !1;
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if (!i) continue;
            this.m_rgGamepadStatus[n] ||
              (this.m_rgGamepadStatus[n] = { buttons: [] });
            let o = this.m_rgGamepadStatus[n];
            for (let t = 0; t < a.length; t++) {
              let n = a[t],
                s = n.index;
              i.buttons[s] &&
                (i.buttons[s].pressed
                  ? ((e = !0),
                    o.buttons[s] ||
                      ((o.buttons[s] = !0), this.OnButtonDown(n.type)))
                  : o.buttons[s] &&
                    (this.OnButtonUp(n.type), (o.buttons[s] = !1)));
            }
          }
          requestAnimationFrame(this.PollGamepads);
        }
      }
      (0, i.Cg)([s.o], r.prototype, "PollGamepads", null);
      var u,
        _,
        l = n(59264);
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
      })(u || (u = {})),
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
        })(_ || (_ = {}));
      const c = {
          [_.GAMEPAD_BUTTON_A]: o.pR.OK,
          [_.GAMEPAD_BUTTON_B]: o.pR.CANCEL,
          [_.GAMEPAD_BUTTON_X]: o.pR.SECONDARY,
          [_.GAMEPAD_BUTTON_Y]: o.pR.OPTIONS,
          [_.GAMEPAD_BUTTON_SELECT]: o.pR.SELECT,
          [_.GAMEPAD_BUTTON_START]: o.pR.START,
          [_.GAMEPAD_BUTTON_LSHOULDER]: o.pR.BUMPER_LEFT,
          [_.GAMEPAD_BUTTON_RSHOULDER]: o.pR.BUMPER_RIGHT,
          [_.GAMEPAD_BUTTON_LTRIGGER]: o.pR.TRIGGER_LEFT,
          [_.GAMEPAD_BUTTON_RTRIGGER]: o.pR.TRIGGER_RIGHT,
          [_.GAMEPAD_LEFTSTICK_UP]: o.pR.DIR_UP,
          [_.GAMEPAD_LEFTSTICK_RIGHT]: o.pR.DIR_RIGHT,
          [_.GAMEPAD_LEFTSTICK_DOWN]: o.pR.DIR_DOWN,
          [_.GAMEPAD_LEFTSTICK_LEFT]: o.pR.DIR_LEFT,
          [_.GAMEPAD_LEFTSTICK_CLICK]: o.pR.LSTICK_CLICK,
          [_.GAMEPAD_RIGHTSTICK_CLICK]: o.pR.RSTICK_CLICK,
          [_.GAMEPAD_LEFTSTICK_TOUCH]: o.pR.LSTICK_TOUCH,
          [_.GAMEPAD_RIGHTSTICK_TOUCH]: o.pR.RSTICK_TOUCH,
          [_.GAMEPAD_BUTTON_LPAD_TOUCH]: o.pR.LPAD_TOUCH,
          [_.GAMEPAD_BUTTON_LPAD_CLICKED]: o.pR.LPAD_CLICK,
          [_.GAMEPAD_BUTTON_RPAD_TOUCH]: o.pR.RPAD_TOUCH,
          [_.GAMEPAD_BUTTON_RPAD_CLICKED]: o.pR.RPAD_CLICK,
          [_.GAMEPAD_BUTTON_LBACK_UPPER]: o.pR.REAR_LEFT_UPPER,
          [_.GAMEPAD_BUTTON_LBACK]: o.pR.REAR_LEFT_LOWER,
          [_.GAMEPAD_BUTTON_RBACK_UPPER]: o.pR.REAR_RIGHT_UPPER,
          [_.GAMEPAD_BUTTON_RBACK]: o.pR.REAR_RIGHT_LOWER,
        },
        A = {
          [l.TR.SystemKey0]: o.pR.STEAM_GUIDE,
          [l.TR.SystemKey1]: o.pR.STEAM_QUICK_MENU,
        };
      class d extends o.nh {
        constructor() {
          var t, e, n, i;
          super(),
            (this.m_rgControllers = new Map()),
            "undefined" != typeof SteamClient &&
              ((this.m_hUnregisterControllerDigitalInput =
                null === (t = SteamClient.Input) || void 0 === t
                  ? void 0
                  : t.RegisterForControllerInputMessages(
                      this.HandleControllerInputMessages,
                    )),
              null ===
                (n =
                  null === (e = SteamClient.System) || void 0 === e
                    ? void 0
                    : e.UI) ||
                void 0 === n ||
                n.RegisterForSystemKeyEvents(this.HandleSystemKeyEvents),
              null === (i = SteamClient.Input) ||
                void 0 === i ||
                i.RegisterForControllerListChanges(
                  this.OnControllerListChanged,
                )),
            this.SetSourceType(o.Vz.GAMEPAD);
        }
        OnControllerListChanged(t) {
          this.m_rgControllers.forEach((e, n) => {
            if (-1 == t.findIndex((t) => t.nControllerIndex == n)) {
              for (let t = 0; t in o.pR; t++)
                e.activeButtons[t] && this.OnButtonUp(t, n);
              this.OnAnalogPad(o.pR.LPAD_TOUCH, 0, 0, n),
                this.OnAnalogPad(o.pR.RPAD_TOUCH, 0, 0, n),
                this.m_rgControllers.delete(n);
            }
          });
        }
        HandleSystemKeyEvents(t) {
          const e = A[t.eKey];
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
          var e, n;
          t
            ? (this.m_hUnregisterControllerAnalogInput =
                null === (e = SteamClient.Input) || void 0 === e
                  ? void 0
                  : e.RegisterForControllerAnalogInputMessages(
                      this.HandleControllerInputMessages,
                    ))
            : null === (n = this.m_hUnregisterControllerAnalogInput) ||
              void 0 === n ||
              n.unregister();
        }
        HandleControllerInputMessages(t) {
          for (const e of t) {
            const t = c[e.nA],
              n = this.GetController(e.nC);
            null != t
              ? e.bS && !n.activeButtons[t]
                ? ((n.activeButtons[t] = !0), this.OnButtonDown(t, e.nC))
                : !e.bS &&
                  n.activeButtons[t] &&
                  ((n.activeButtons[t] = !1), this.OnButtonUp(t, e.nC))
              : e.nA == _.GAMEPAD_ANALOG_SCROLL ||
                (e.nA == _.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR
                  ? n.activeButtons[o.pR.LPAD_TOUCH] &&
                    this.OnAnalogPad(o.pR.LPAD_TOUCH, e.x, e.y, e.nC)
                  : e.nA == _.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR &&
                    n.activeButtons[o.pR.RPAD_TOUCH] &&
                    this.OnAnalogPad(o.pR.RPAD_TOUCH, e.x, e.y, e.nC));
          }
        }
      }
      (0, i.Cg)([s.o], d.prototype, "OnControllerListChanged", null),
        (0, i.Cg)([s.o], d.prototype, "HandleSystemKeyEvents", null),
        (0, i.Cg)([s.o], d.prototype, "EnableAnalogInputMessages", null),
        (0, i.Cg)([s.o], d.prototype, "HandleControllerInputMessages", null);
      var h = n(56011),
        v = n(30470);
      class m extends o.nh {
        constructor(t) {
          super(),
            (this.m_lastButtonDown = o.pR.INVALID),
            this.SetSourceType(o.Vz.KEYBOARD),
            t.addEventListener("keydown", this.OnKeyDown),
            t.addEventListener("keyup", this.OnKeyUp),
            t.addEventListener("blur", this.Reset);
        }
        OnKeyDown(t) {
          const e = this.TranslateKey(t);
          e != o.pR.INVALID &&
            (t.preventDefault(),
            e != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(e),
              (this.m_lastButtonDown = e)));
        }
        OnKeyUp(t) {
          const e = this.TranslateKey(t);
          e != o.pR.INVALID &&
            (this.OnButtonUp(e),
            (this.m_lastButtonDown = o.pR.INVALID),
            t.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != o.pR.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = o.pR.INVALID));
        }
        GetKeycodeFromEvent(t) {
          return "linux" === v.TS.PLATFORM && t.key.length > 1
            ? t.key || t.code
            : t.code || t.key;
        }
        BShouldSwallowEventForTextInputWorkaround(t) {
          var e, n, i, o, s, a, r;
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
          const u = this.GetKeycodeFromEvent(t);
          let _ = t.target;
          const l = Array.from(
            _.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((t) =>
            Array.from(t.classList).some((t) => t.includes("virtualkeyboard")),
          );
          switch (u) {
            case "ArrowUp": {
              if (l) return !0;
              let n = null == _ ? void 0 : _.value.indexOf("\n");
              return (
                "TEXTAREA" === t.target.nodeName &&
                n >= 0 &&
                n <
                  (null !== (e = null == _ ? void 0 : _.selectionStart) &&
                  void 0 !== e
                    ? e
                    : 0)
              );
            }
            case "ArrowDown": {
              if (l) return !0;
              let e = null == _ ? void 0 : _.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === t.target.nodeName &&
                e >= 0 &&
                e >=
                  (null !== (n = null == _ ? void 0 : _.selectionStart) &&
                  void 0 !== n
                    ? n
                    : 0) &&
                (null !== (i = null == _ ? void 0 : _.selectionEnd) &&
                void 0 !== i
                  ? i
                  : 0) < (null == _ ? void 0 : _.value.length)
              );
            }
            case "ArrowLeft":
              return (
                !!l ||
                ((null !== (o = null == _ ? void 0 : _.selectionStart) &&
                void 0 !== o
                  ? o
                  : 0) > 0 &&
                  (null !== (s = null == _ ? void 0 : _.selectionEnd) &&
                  void 0 !== s
                    ? s
                    : 0) > 0)
              );
            case "ArrowRight":
              return (
                !!l ||
                ((null !== (a = null == _ ? void 0 : _.selectionStart) &&
                void 0 !== a
                  ? a
                  : 0) < (null == _ ? void 0 : _.value.length) &&
                  (null !== (r = null == _ ? void 0 : _.selectionEnd) &&
                  void 0 !== r
                    ? r
                    : 0) < (null == _ ? void 0 : _.value.length))
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
            i = t.shiftKey;
          if (this.BShouldSwallowEventForTextInputWorkaround(t))
            return o.pR.INVALID;
          if (n && i)
            switch (e) {
              case "Digit4":
                return o.pR.TRIGGER_LEFT;
              case "Digit5":
                return o.pR.TRIGGER_RIGHT;
              default:
                return o.pR.INVALID;
            }
          if (n)
            switch (e) {
              case "Digit1":
                return o.pR.STEAM_GUIDE;
              case "Digit2":
                return o.pR.STEAM_QUICK_MENU;
              case "Digit3":
              case "Digit9":
                return o.pR.SELECT;
              case "Digit4":
                return o.pR.BUMPER_LEFT;
              case "Digit5":
                return o.pR.BUMPER_RIGHT;
              case "Digit6":
                return o.pR.LSTICK_CLICK;
              case "Digit7":
                return o.pR.RSTICK_CLICK;
              case "Digit8":
                return o.pR.OPTIONS;
              case "Digit0":
                return o.pR.START;
            }
          switch (e) {
            case "Escape":
              return o.pR.CANCEL;
            case "Enter":
              return o.pR.OK;
            case "Backspace":
              return o.pR.SECONDARY;
            case "ArrowUp":
              return o.pR.DIR_UP;
            case "ArrowDown":
              return o.pR.DIR_DOWN;
            case "ArrowLeft":
              return o.pR.DIR_LEFT;
            case "ArrowRight":
              return o.pR.DIR_RIGHT;
          }
          return o.pR.INVALID;
        }
      }
      (0, i.Cg)([s.o], m.prototype, "OnKeyDown", null),
        (0, i.Cg)([s.o], m.prototype, "OnKeyUp", null),
        (0, i.Cg)([s.o], m.prototype, "Reset", null);
      class T extends o.nh {
        constructor(t) {
          super(),
            (this.m_nAccumulatedMouseMovement = 0),
            (this.m_bFirstMouseUpdate = !0),
            (this.m_lastButtonDown = o.pR.INVALID),
            this.SetSourceType(o.Vz.MOUSE),
            t.addEventListener("mousedown", this.OnMouseDown),
            t.addEventListener("mouseup", this.OnMouseUp),
            t.addEventListener("mousemove", this.OnMouseMove),
            t.addEventListener("blur", this.Reset);
        }
        TranslateKey(t) {
          return 3 === t.button ? o.pR.CANCEL : o.pR.INVALID;
        }
        OnMouseDown(t) {
          if (t.defaultPrevented) return;
          const e = this.TranslateKey(t);
          e != o.pR.INVALID &&
            (t.preventDefault(),
            e != this.m_lastButtonDown &&
              (this.Reset(), this.OnButtonDown(e), (this.m_lastButtonDown = e)),
            this.OnNavigationTypeChanged(o.Vz.MOUSE));
        }
        OnMouseUp(t) {
          const e = this.TranslateKey(t);
          e != o.pR.INVALID &&
            (this.OnButtonUp(e),
            (this.m_lastButtonDown = o.pR.INVALID),
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
                (this.Reset(), this.OnNavigationTypeChanged(o.Vz.MOUSE));
          }
        }
        Reset() {
          (this.m_nAccumulatedMouseMovement = 0),
            (this.m_bFirstMouseUpdate = !0),
            this.m_lastButtonDown != o.pR.INVALID &&
              (this.OnButtonUp(this.m_lastButtonDown),
              (this.m_lastButtonDown = o.pR.INVALID));
        }
      }
      (0, i.Cg)([s.o], T.prototype, "TranslateKey", null),
        (0, i.Cg)([s.o], T.prototype, "OnMouseDown", null),
        (0, i.Cg)([s.o], T.prototype, "OnMouseUp", null),
        (0, i.Cg)([s.o], T.prototype, "OnMouseMove", null),
        (0, i.Cg)([s.o], T.prototype, "Reset", null);
      var p = n(91986),
        E = n(81393),
        C = n(62490),
        g = n(66703),
        D = n(6144),
        G = n(60778),
        R = n(45730),
        N = n(1977);
      const I = new G.wd("FocusNavigation").Debug,
        L = new G.wd("GamepadEvents").Debug;
      class O {
        constructor(t, e, n) {
          (this.m_onActivateCallbacks = new p.l()),
            (this.m_onDeactivateCallbacks = new p.l()),
            (this.m_onActiveFocusStateChangedCallbacks = new p.l()),
            (this.m_applyFocusClassesInDesktop = !1),
            (this.m_lastFocusNodeXMovement = new P()),
            (this.m_lastFocusNodeYMovement = new P()),
            (this.m_DeferredFocus = new B(this)),
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
              `Logical gamepad Event fired: ${o.pR[t.detail.button]}, had logical event: ${n}, was handled: ${!e}`,
            ),
            e && this.m_onUnhandledButton && (e = this.m_onUnhandledButton(t)),
            e && (e = this.m_Controller.FireUnhandledGamepadEventCallbacks(t)),
            t.stopPropagation(),
            e
          );
        }
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        TransferFocus(t, e, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(t, e, n),
          );
        }
        TransferFocusInternal(t, e, n) {
          const i = this.m_lastFocusNode;
          if (
            i == e &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          I(
            `Transfer focus in ${this.id}, source: ${t && R.D$[t]}, from/to:`,
            null == i ? void 0 : i.m_element,
            null == e ? void 0 : e.m_element,
          );
          const o = { blurredNode: i, focusedNode: e, source: t },
            s = (function (t, e) {
              if (!e || !t) return null;
              let n = e,
                i = t;
              for (; n.GetDepth() > i.GetDepth() && n.Parent; ) n = n.Parent;
              for (; i.GetDepth() > n.GetDepth() && i.Parent; ) i = i.Parent;
              for (; n != i && n && i; ) (n = n.Parent), (i = i.Parent);
              return n;
            })(i, e);
          if (i) {
            i.SetHasFocus(!1);
            for (let t = i; t && t != s; t = t.Parent) t.SetFocusWithin(!1);
          }
          if (e) {
            e.SetHasFocus(!0);
            for (let t = e; t && t != s; t = t.Parent) t.SetFocusWithin(!0);
          }
          let a = this.m_context.OnFocusChangeStart(t, this, i, e);
          e && e.SetDOMFocusAndScroll(t, i),
            i &&
              ((0, R.AE)(i.Element, "vgp_onblur", o),
              !i.m_FocusRing ||
                (e && i.m_FocusRing == e.m_FocusRing) ||
                i.m_FocusRing.OnBlur(t, i, e)),
            e &&
              ((0, R.AE)(e.Element, "vgp_onfocus", o),
              e.m_FocusRing &&
                (i && e.m_FocusRing == i.m_FocusRing
                  ? e.m_FocusRing.OnFocusChange(t, i, e)
                  : e.m_FocusRing.OnFocus(t, e, i))),
            (this.m_lastFocusNode = e),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(
                  null == e ? void 0 : e.Element,
                )
              : "y" == n
                ? this.m_lastFocusNodeYMovement.SetNode(
                    null == e ? void 0 : e.Element,
                  )
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
        }
      }
      class P {
        SetNode(t) {
          (this.m_element = t),
            (this.m_rect = t ? t.getBoundingClientRect() : void 0);
        }
        Reset() {
          this.SetNode(void 0);
        }
        GetRect() {
          var t;
          return (
            null === (t = this.m_element) || void 0 === t
              ? void 0
              : t.isConnected
          )
            ? this.m_element.getBoundingClientRect()
            : this.m_rect;
        }
      }
      class B {
        constructor(t) {
          (this.m_schExecuteQueuedFocus = new D.LU()),
            (this.m_bSuppressed = !1),
            (this.m_tree = t);
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
        constructor(t, e, n) {
          (this.m_bActive = (0, D.Jc)(!1)),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bMounted = !0),
            (this.m_schDeferredActivate = new D.LU()),
            (this.m_FocusChangedCallbacks = new p.l()),
            (this.m_bIsGamepadInputSuppressed = !1),
            (this.m_iFocusChangeStack = 0),
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
          var t;
          for (
            let e = this.m_rgGamepadNavigationTrees.length - 1;
            e >= 0;
            e--
          ) {
            const n = this.m_rgGamepadNavigationTrees[e];
            if (
              null === (t = n.Window) || void 0 === t
                ? void 0
                : t.document.hasFocus()
            )
              return n;
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
            var i;
            const o = this.m_bActive.Value != t;
            t
              ? ((this.m_activeWindow = e),
                (this.m_activeBrowserView = n),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_bActive.Set(t),
              o &&
                (null === (i = this.m_LastActiveFocusNavTree) ||
                  void 0 === i ||
                  i.OnActiveStateChangedCallbacks.Dispatch(
                    t,
                    this.m_LastActiveFocusNavTree,
                  ));
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
          var e;
          this.m_activeWindow == t
            ? (S(`${this.LogName(t)} Deactivate context for window`),
              this.SetActive(!1, t))
            : S(
                `${this.LogName(t)} Blurred, but not deactivating because (${null === (e = this.m_activeWindow) || void 0 === e ? void 0 : e.name}) has focus.`,
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
          n && C.x9(this.m_rgGamepadNavigationTrees, n),
            t ||
              (this.m_rgGamepadNavigationTrees.length &&
                (t =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const i = this.m_LastActiveFocusNavTree == t;
          t && C.x9(this.m_rgGamepadNavigationTrees, t),
            (this.m_LastActiveNavTree = t),
            (t && t.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = t),
            S(
              `${this.LogName(null == t ? void 0 : t.Window)} Move from nav tree ${null == n ? void 0 : n.id} to nav tree ${null == t ? void 0 : t.id} ${e ? "taking focus" : "no focus"}`,
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            t &&
              (this.m_rgGamepadNavigationTrees.push(t),
              i ||
                !e ||
                t.DeferredFocus.BHasQueuedFocusNode() ||
                t.DeferredFocus.RequestFocus(t.Root)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(t),
            t && !i && t.OnActivate(n);
        }
        BlurNavTree(t) {
          this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
            C.x9(this.m_rgGamepadNavigationTrees, t),
            this.m_rgGamepadNavigationTrees.unshift(t);
        }
        UnregisterGamepadNavigationTree(t) {
          C.x9(this.m_rgGamepadNavigationTrees, t),
            S(
              `(${this.m_rootWindow.name}) Unregister tree ${null == t ? void 0 : t.id} ${this.m_LastActiveFocusNavTree == t ? "(was active)" : "(inactive)"}`,
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
        OnFocusChangeStart(t, e, n, i) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = {
                  source: t,
                  from: n || void 0,
                  to: i || void 0,
                })
              : this.m_ActiveFocusChange &&
                !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(t) {
          var e;
          if (
            (this.m_iFocusChangeStack--,
            (0, E.w)(t == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const {
              source: t,
              from: n,
              to: i,
            } = null !== (e = this.m_ActiveFocusChange) && void 0 !== e
              ? e
              : {};
            this.m_FocusChangedCallbacks.Dispatch(t, n, i);
          }
        }
      }
      const M = new G.wd("FocusNavigation").Debug,
        U = new G.wd("FocusNavigation").Assert,
        w = "focus-nav-show-debug-focus-ring";
      function y(t, e) {
        return (
          (null == t ? void 0 : t.eActivationSourceType) ===
            (null == e ? void 0 : e.eActivationSourceType) &&
          (null == t ? void 0 : t.nActiveGamepadIndex) ===
            (null == e ? void 0 : e.nActiveGamepadIndex) &&
          (null == t ? void 0 : t.nLastActiveGamepadIndex) ===
            (null == e ? void 0 : e.nLastActiveGamepadIndex)
        );
      }
      class b {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgAllContexts = []),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_fnCatchAllGamepadInput = null),
            (this.m_UnhandledButtonEventsCallbacks = new p.l()),
            (this.m_navigationSource = (0, D.Jc)(
              {
                eActivationSourceType: o.Vz.UNKNOWN,
                nActiveGamepadIndex: -1,
                nLastActiveGamepadIndex: -1,
              },
              y,
            )),
            (this.m_navigationSourceSupportsFocus = (0, D.YX)(
              this.m_navigationSource,
              (t) =>
                (null == t ? void 0 : t.eActivationSourceType) ===
                  o.Vz.GAMEPAD ||
                (null == t ? void 0 : t.eActivationSourceType) ===
                  o.Vz.KEYBOARD ||
                (null == t ? void 0 : t.eActivationSourceType) === o.Vz.UNKNOWN,
            )),
            (this.m_bShowDebugFocusRing = (0, D.Jc)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (t) => t()),
            (window.FocusNavController = this);
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
          var t;
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const t of this.m_rgAllContexts) {
              const e = t.FindNavTreeInFocusedWindow();
              if (e) {
                M(
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
              ((0, E.w)(
                !1,
                `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
              ),
              (this.m_ActiveContext = this.m_LastActiveContext),
              this.m_ActiveContext.OnActivate(
                null ===
                  (t = this.m_LastActiveContext.m_LastActiveFocusNavTree) ||
                  void 0 === t
                  ? void 0
                  : t.Window,
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
            t.SetRepeatAllowed(() => {
              var t, e;
              return (
                null !==
                  (e =
                    null === (t = this.m_ActiveContext) || void 0 === t
                      ? void 0
                      : t.BIsActive()) &&
                void 0 !== e &&
                e
              );
            }),
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
          this.OnButtonDown(t, o.Vz.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(t, e) {
          var n;
          let i;
          e &&
            (i =
              null !== (n = this.GetActiveContext()) && void 0 !== n
                ? n
                : this.FindAnActiveContext()),
            this.OnButtonDown(t, o.Vz.GAMEPAD, -1, void 0, e, i, !0),
            this.OnButtonUp(t, o.Vz.GAMEPAD, -1, void 0, e, i, !0);
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
            t === o.pR.STEAM_GUIDE ||
            t === o.pR.STEAM_QUICK_MENU ||
            t === o.pR.CANCEL
          );
        }
        GetEventTarget(t, e, n = !1) {
          var i, s, a, r, u;
          let _ = this.GetActiveContext();
          !_ && n && (_ = this.FindAnActiveContext());
          let l =
            null === (i = null == _ ? void 0 : _.ActiveWindow) || void 0 === i
              ? void 0
              : i.document.activeElement;
          if (null == _ ? void 0 : _.m_LastActiveNavTree) {
            if (
              (e ||
                (e =
                  null ===
                    (a =
                      null === (s = this.m_navigationSource) || void 0 === s
                        ? void 0
                        : s.Value) || void 0 === a
                    ? void 0
                    : a.eActivationSourceType),
              !(
                _.m_LastActiveNavTree.GetLastFocusedNode() ||
                (e != o.Vz.GAMEPAD && e != o.Vz.KEYBOARD) ||
                (M(
                  `GetEventTarget: Context ${_.LogName()} tree ${_.m_LastActiveNavTree.id} has no focused node, ${n ? "finding one" : "will not find one"}`,
                ),
                n && _.m_LastActiveNavTree.TakeFocus(R.D$.GAMEPAD, !0),
                this.BGlobalGamepadButton(t))
              ))
            )
              return [void 0, _];
            _.m_LastActiveNavTree.GetLastFocusedNode()
              ? (l =
                  null ===
                    (u =
                      null === (r = _.m_LastActiveNavTree) || void 0 === r
                        ? void 0
                        : r.GetLastFocusedNode()) || void 0 === u
                    ? void 0
                    : u.Element)
              : M(
                  `GetEventTarget: Context ${_.LogName()} tree ${_.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
                );
          }
          return [l, _];
        }
        ChangeNavigationSource(t, e) {
          let n = this.m_navigationSource.Value,
            i = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex &&
            n.nActiveGamepadIndex >= 0 &&
            (i = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: t,
              nActiveGamepadIndex: e,
              nLastActiveGamepadIndex: i,
            }),
            t != o.Vz.MOUSE &&
              (0, g.Dp)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonActionInternal(t, e, n, i, s, a, r, u) {
          var _, l;
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(e))
            return void (
              t &&
              M(
                "Ignoring button press - gamepad input is suppressed by parent window",
              )
            );
          U(
            !!a == !!r,
            "Must set both overrideContext and overrideElement or neither",
          );
          let c = a,
            A = r;
          (null != c && null != A) || ([c, A] = this.GetEventTarget(e, n, !0)),
            !(null == A ? void 0 : A.BIsGamepadInputSuppressed()) || u
              ? (this.ChangeNavigationSource(n, i),
                t &&
                  M(
                    `Firing ${o.pR[e]} in tree ${null === (l = null == A ? void 0 : A.m_LastActiveNavTree) || void 0 === l ? void 0 : l.id} at `,
                    c,
                  ),
                this.BatchedUpdate(() =>
                  (0, R.AE)(c, t ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: e,
                    source: n,
                    is_repeat: s,
                  }),
                ))
              : M(
                  `Suppressing ${o.pR[e]} input on element ${null == c ? void 0 : c.className} because tree ${null === (_ = null == A ? void 0 : A.m_LastActiveNavTree) || void 0 === _ ? void 0 : _.id} has it disabled`,
                );
        }
        OnButtonDown(t, e, n, i, o, s, a) {
          this.OnButtonActionInternal(!0, t, e, n, i, o, s, a);
        }
        OnButtonUp(t, e, n, i, o, s, a) {
          this.OnButtonActionInternal(!1, t, e, n, !1, o, s, a);
        }
        BatchedUpdate(t) {
          this.m_fnGamepadEventUpdateBatcher(t);
        }
        OnNavigationTypeChange(t) {
          var e, n;
          if (
            (this.ChangeNavigationSource(t, -1),
            document.hasFocus() &&
              (t == o.Vz.MOUSE || t == o.Vz.TOUCH) &&
              (null === (e = this.m_ActiveContext) || void 0 === e
                ? void 0
                : e.m_LastActiveNavTree))
          ) {
            const t =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              e = (function (t) {
                if (!(0, h.kD)(t)) return !1;
                const e = t.tagName,
                  n = (0, h.IB)(t) ? t.type : void 0;
                return (0, h.TV)(e, n);
              })(null == t ? void 0 : t.Element)
                ? t
                : null;
            null === (n = this.m_ActiveContext.m_LastActiveNavTree) ||
              void 0 === n ||
              n.TransferFocus(R.D$.BROWSER, e);
          }
        }
        NewGamepadNavigationTree(t, e) {
          return new O(this, t, e);
        }
        RegisterGamepadNavigationTree(t, e, n) {
          const i = t.WindowContext;
          return (
            t.SetIsMounted(e),
            n || ((this.m_ActiveContext = i), (this.m_LastActiveContext = i)),
            i.AddNavTree(t, n),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => i.UnregisterGamepadNavigationTree(t)
          );
        }
        OnGamepadNavigationTreeActivated(t, e = !1) {
          t.WindowContext.SetActiveNavTree(t, e);
        }
        OnGamepadNavigationTreeFocused(t, e, n = !1) {
          var i, o;
          const s = t.WindowContext;
          s != this.m_ActiveContext &&
            M(`(${s.LogName(t.Window)}) Focus event in inactive window`),
            t != s.m_LastActiveFocusNavTree &&
              t != s.m_LastActiveNavTree &&
              ((null === (i = s.m_LastActiveFocusNavTree) || void 0 === i
                ? void 0
                : i.GetParentEmbeddedNavTree()) == t ||
              t.GetParentEmbeddedNavTree() == s.m_LastActiveFocusNavTree
                ? (M(
                    `There was a focus event in ${t.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                  ),
                  t.Activate())
                : M(
                    `There was a focus event in ${t.id}, but the active nav tree is ${null === (o = s.m_LastActiveFocusNavTree) || void 0 === o ? void 0 : o.id} so it is being ignored.  Source: ${e && R.D$[e]}.`,
                  ));
        }
        BlurNavTree(t) {
          t.WindowContext.BlurNavTree(t);
        }
        IsActiveFocusNavTree(t) {
          var e;
          return Boolean(
            t &&
              t ==
                (null === (e = this.m_ActiveContext) || void 0 === e
                  ? void 0
                  : e.m_LastActiveFocusNavTree),
          );
        }
        IsActiveNavTree(t) {
          var e;
          return Boolean(
            t &&
              t ==
                (null === (e = this.m_ActiveContext) || void 0 === e
                  ? void 0
                  : e.m_LastActiveNavTree),
          );
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
          var t, e;
          window.focus();
          let n =
            (null === (t = this.m_ActiveContext) || void 0 === t
              ? void 0
              : t.m_LastActiveFocusNavTree) ||
            (null === (e = this.m_ActiveContext) || void 0 === e
              ? void 0
              : e.m_LastActiveNavTree);
          n && n.TakeFocus(R.D$.APPLICATION);
        }
        OnContextActivated(t) {
          (this.m_ActiveContext = t), (this.m_LastActiveContext = t);
        }
        OnContextDeactivated(t, e) {
          e &&
            (this.m_LastActiveContext == t &&
              (this.m_LastActiveContext = void 0),
            C.x9(this.m_rgAllContexts, t)),
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
      (0, i.Cg)([s.o], b.prototype, "OnButtonDown", null),
        (0, i.Cg)([s.o], b.prototype, "OnButtonUp", null),
        (0, i.Cg)([s.o], b.prototype, "OnNavigationTypeChange", null);
      var f = n(78327),
        x = n(72739);
      class K {
        GetNavigationController() {
          return this.m_GamepadNavigationController;
        }
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
          (this.m_GamepadNavigationController = new b()),
            t &&
              (this.m_GamepadNavigationController.RegisterInputSource(new d()),
              this.m_GamepadNavigationController.RegisterInputSource(new r())),
            "dev" == f.TS.WEB_UNIVERSE &&
              (this.m_GamepadNavigationController.RegisterInputSource(
                new m(window),
              ),
              this.m_GamepadNavigationController.RegisterInputSource(
                new T(window),
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

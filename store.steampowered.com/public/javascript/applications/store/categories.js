/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "FT/q": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var a,
        r = n("mrSG"),
        o = n("rHSA"),
        c = n("XxJJ"),
        i = [
          { index: 0, type: o.a.OK, category: "action" },
          { index: 1, type: o.a.CANCEL, category: "action" },
          { index: 2, type: o.a.SECONDARY, category: "action" },
          { index: 3, type: o.a.OPTIONS, category: "action" },
          { index: 4, type: o.a.BUMPER_LEFT, category: "action" },
          { index: 5, type: o.a.BUMPER_RIGHT, category: "action" },
          { index: 6, type: o.a.TRIGGER_LEFT, category: "action" },
          { index: 7, type: o.a.TRIGGER_RIGHT, category: "action" },
          { index: 8, type: o.a.SELECT, category: "action" },
          { index: 9, type: o.a.START, category: "action" },
          { index: 10, type: o.a.LSTICK_CLICK, category: "action" },
          { index: 11, type: o.a.RSTICK_CLICK, category: "action" },
          { index: 12, type: o.a.DIR_UP, category: "navigation" },
          { index: 13, type: o.a.DIR_DOWN, category: "navigation" },
          { index: 14, type: o.a.DIR_LEFT, category: "navigation" },
          { index: 15, type: o.a.DIR_RIGHT, category: "navigation" },
          { index: 16, type: o.a.STEAM_GUIDE, category: "action" },
          { index: 17, type: o.a.SELECT, category: "action" },
        ],
        s = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgGamepadStatus = []),
              t.SetSourceType(o.b.GAMEPAD),
              window.addEventListener("gamepadconnected", function (e) {
                t.m_bGamepadDetected ||
                  (t.OnGamepadDetected(), t.PollGamepads());
              }),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.PollGamepads = function () {
              for (
                var e = navigator.getGamepads(), t = !1, n = 0;
                n < e.length;
                n++
              ) {
                var a = e[n];
                if (a) {
                  this.m_rgGamepadStatus[n] ||
                    (this.m_rgGamepadStatus[n] = { buttons: [] });
                  for (
                    var r = this.m_rgGamepadStatus[n], o = 0;
                    o < i.length;
                    o++
                  ) {
                    var c = i[o],
                      s = c.index;
                    a.buttons[s] &&
                      (a.buttons[s].pressed
                        ? ((t = !0),
                          r.buttons[s] ||
                            ((r.buttons[s] = !0), this.OnButtonDown(c.type)))
                        : r.buttons[s] &&
                          (this.OnButtonUp(c.type), (r.buttons[s] = !1)));
                  }
                }
              }
              document.hasFocus() || t
                ? requestAnimationFrame(this.PollGamepads)
                : (console.log("Lost focus - suspending gamepad polling"),
                  window.addEventListener(
                    "focusin",
                    this.OnWindowRegainedFocus
                  ));
            }),
            (t.prototype.OnWindowRegainedFocus = function () {
              window.removeEventListener("focusin", this.OnWindowRegainedFocus),
                this.PollGamepads();
            }),
            Object(r.c)([c.a], t.prototype, "PollGamepads", null),
            Object(r.c)([c.a], t.prototype, "OnWindowRegainedFocus", null),
            t
          );
        })(o.c),
        l = n("kyHq"),
        u = {
          A: o.a.OK,
          B: o.a.CANCEL,
          X: o.a.SECONDARY,
          Y: o.a.OPTIONS,
          SELECT: o.a.SELECT,
          START: o.a.START,
          LSHOULDER: o.a.BUMPER_LEFT,
          RSHOULDER: o.a.BUMPER_RIGHT,
          LTRIGGER: o.a.TRIGGER_LEFT,
          RTRIGGER: o.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: o.a.DIR_UP,
          LEFTSTICK_RIGHT: o.a.DIR_RIGHT,
          LEFTSTICK_DOWN: o.a.DIR_DOWN,
          LEFTSTICK_LEFT: o.a.DIR_LEFT,
          LEFTSTICK_CLICK: o.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: o.a.RSTICK_CLICK,
          LeftStick: o.a.LSTICK_TOUCH,
          RightStick: o.a.RSTICK_TOUCH,
          LeftTrackpad: o.a.LPAD_TOUCH,
          LeftTrackpadClick: o.a.LPAD_CLICK,
          RightTrackpad: o.a.RPAD_TOUCH,
          RightTrackpadClick: o.a.RPAD_CLICK,
          RearLeftUpper: o.a.REAR_LEFT_UPPER,
          RearLeftLower: o.a.REAR_LEFT_LOWER,
          RearRightUpper: o.a.REAR_RIGHT_UPPER,
          RearRightLower: o.a.REAR_RIGHT_LOWER,
        },
        p =
          (((a = {})[l.h.SystemKey0] = o.a.STEAM_GUIDE),
          (a[l.h.SystemKey1] = o.a.STEAM_QUICK_MENU),
          a),
        d = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgControllers = new Map()),
              "undefined" != typeof SteamClient &&
                ((t.m_hUnregisterControllerInput = SteamClient.Input.RegisterForControllerInputMessages(
                  t.HandleControllerInputMessages
                )),
                SteamClient.System.UI.RegisterForSystemKeyEvents(
                  t.HandleSystemKeyEvents
                )),
              t.SetSourceType(o.b.GAMEPAD),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.HandleSystemKeyEvents = function (e) {
              var t = p[e.eKey];
              t && this.OnSystemButtonPress(t, e.nControllerIndex);
            }),
            (t.prototype.OnSystemButtonPress = function (e, t) {
              this.OnButtonDown(e, t), this.OnButtonUp(e, t);
            }),
            (t.prototype.GetController = function (e) {
              var t = this.m_rgControllers.get(e);
              return (
                t ||
                  ((t = { activeButtons: {} }), this.m_rgControllers.set(e, t)),
                t
              );
            }),
            (t.prototype.HandleControllerInputMessages = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var a = n[t],
                  r = u[a.strActionName];
                if (null != r) {
                  var o = this.GetController(a.nController);
                  a.bState && !o.activeButtons[r]
                    ? ((o.activeButtons[r] = !0),
                      this.OnButtonDown(r, a.nController))
                    : !a.bState &&
                      o.activeButtons[r] &&
                      ((o.activeButtons[r] = !1),
                      this.OnButtonUp(r, a.nController));
                }
              }
            }),
            Object(r.c)([c.a], t.prototype, "HandleSystemKeyEvents", null),
            Object(r.c)(
              [c.a],
              t.prototype,
              "HandleControllerInputMessages",
              null
            ),
            t
          );
        })(o.c),
        m = n("X3Ds"),
        g = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_lastButtonDown = o.a.INVALID),
              n.SetSourceType(o.b.KEYBOARD),
              t.addEventListener("keydown", n.OnKeyDown),
              t.addEventListener("keyup", n.OnKeyUp),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnKeyDown = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                t != this.m_lastButtonDown &&
                (this.Reset(),
                this.OnButtonDown(t),
                (this.m_lastButtonDown = t),
                e.preventDefault());
            }),
            (t.prototype.OnKeyUp = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                (this.OnButtonUp(t),
                (this.m_lastButtonDown = o.a.INVALID),
                e.preventDefault());
            }),
            (t.prototype.Reset = function () {
              this.m_lastButtonDown != o.a.INVALID &&
                (this.OnButtonUp(this.m_lastButtonDown),
                (this.m_lastButtonDown = o.a.INVALID));
            }),
            (t.prototype.TranslateKey = function (e) {
              var t = e.code,
                n = e.ctrlKey,
                a =
                  m.q(e.target) &&
                  ("INPUT" === e.target.nodeName ||
                    "TEXTAREA" === e.target.nodeName);
              if (n)
                switch (t) {
                  case "Digit1":
                    return o.a.STEAM_GUIDE;
                  case "Digit2":
                    return o.a.STEAM_QUICK_MENU;
                  case "Digit3":
                    return o.a.SELECT;
                  case "Digit4":
                    return o.a.BUMPER_LEFT;
                  case "Digit5":
                    return o.a.BUMPER_RIGHT;
                  case "Digit6":
                    return o.a.LSTICK_CLICK;
                  case "Digit7":
                    return o.a.RSTICK_CLICK;
                  case "Digit8":
                    return o.a.OPTIONS;
                  case "Digit9":
                    return o.a.SELECT;
                  case "Digit0":
                    return o.a.START;
                }
              switch (t) {
                case "Escape":
                  return o.a.CANCEL;
                case "Enter":
                  return a ? o.a.INVALID : o.a.OK;
                case "Backspace":
                  return a ? o.a.INVALID : o.a.SECONDARY;
                case "ArrowUp":
                  return o.a.DIR_UP;
                case "ArrowDown":
                  return o.a.DIR_DOWN;
                case "ArrowLeft":
                  return o.a.DIR_LEFT;
                case "ArrowRight":
                  return o.a.DIR_RIGHT;
              }
              return o.a.INVALID;
            }),
            Object(r.c)([c.a], t.prototype, "OnKeyDown", null),
            Object(r.c)([c.a], t.prototype, "OnKeyUp", null),
            Object(r.c)([c.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        f = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_nAccumulatedMouseMovement = 0),
              (n.m_bFirstMouseUpdate = !0),
              n.SetSourceType(o.b.MOUSE),
              t.addEventListener("mousedown", n.OnMouseDown),
              t.addEventListener("mousemove", n.OnMouseMove),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnMouseDown = function (e) {
              e.defaultPrevented || this.OnNavigationTypeChanged(o.b.MOUSE);
            }),
            (t.prototype.OnMouseMove = function (e) {
              if (!e.defaultPrevented) {
                if (this.m_bFirstMouseUpdate)
                  return (
                    (this.m_nLastScreenX = e.screenX),
                    (this.m_nLastScreenY = e.screenY),
                    void (this.m_bFirstMouseUpdate = !1)
                  );
                (this.m_nAccumulatedMouseMovement +=
                  Math.abs(e.screenX - this.m_nLastScreenX) +
                  Math.abs(e.screenY - this.m_nLastScreenY)),
                  this.m_nAccumulatedMouseMovement > 500 &&
                    (this.Reset(), this.OnNavigationTypeChanged(o.b.MOUSE));
              }
            }),
            (t.prototype.Reset = function () {
              (this.m_nAccumulatedMouseMovement = 0),
                (this.m_bFirstMouseUpdate = !0);
            }),
            Object(r.c)([c.a], t.prototype, "OnMouseDown", null),
            Object(r.c)([c.a], t.prototype, "OnMouseMove", null),
            Object(r.c)([c.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        y = n("NxAk"),
        _ = n("lkRc"),
        R = (function () {
          function e() {
            (this.m_GamepadNavigationController = new y.c()),
              _.d.IN_GAMEPADUI &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new d()
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new s()
                )),
              "dev" == _.d.WEB_UNIVERSE &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new g(window)
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new f(window)
                ));
          }
          return (
            (e.prototype.GetNavigationController = function () {
              return this.m_GamepadNavigationController;
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  "dev" == _.d.WEB_UNIVERSE &&
                    (window.g_StoreWebNavStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            e
          );
        })();
      function v() {
        var e = window.legacyWebFocusNavController;
        return e || R.Get().GetNavigationController();
      }
    },
    OVk1: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("mrSG"),
        r = n("FT/q"),
        o = n("q1tI"),
        c = n.n(o),
        i = n("av+R"),
        s = n("ykc/"),
        l = n("qDk6"),
        u = n("r64O"),
        p = n("exH9"),
        d = n("opsS"),
        m = n("EC67");
      function g(e, t, n) {
        var r,
          c = e + "_HistoryValue",
          i = Object(m.g)(),
          s = Object(m.h)(),
          l = null !== (r = s.state && s.state[c]) && void 0 !== r ? r : n,
          u = o.useRef(!1),
          p = o.useRef(),
          d = o.useRef(),
          g = o.useCallback(
            function (e) {
              if (u.current && ((p.current = e), !d.current)) {
                var n = i.location.pathname;
                d.current = window.setTimeout(function () {
                  var e;
                  i.location.pathname == n &&
                    i.location.state[c] != p.current &&
                    i.replace(
                      i.location.pathname,
                      Object(a.a)(
                        Object(a.a)({}, i.location.state),
                        (((e = {})[c] = p.current), e)
                      )
                    ),
                    (d.current = void 0);
                }, t);
              }
            },
            [i, c, t]
          );
        return (
          o.useEffect(function () {
            u.current = !0;
          }, []),
          [l, g]
        );
      }
      n("BaVA");
      var f = n("j+5p"),
        y = n("hJxo"),
        _ = n("rHSA");
      function R(e, t, n, a) {
        void 0 === t && (t = "smooth");
        var r = (null != n ? n : 30) / 100,
          o = c.a.useRef(void 0),
          i = c.a.useRef(void 0),
          s = c.a.useCallback(function () {
            (o.current = void 0), (i.current = void 0);
          }, []),
          l = (function (e, t) {
            var n = c.a.useRef();
            return c.a.useCallback(
              function (a, r) {
                var o = "sine";
                n.current && (n.current.Cancel(), (o = "linear")),
                  void 0 === a && (a = e.current.scrollTop),
                  void 0 === r && (r = e.current.scrollLeft);
                var c = Math.max(
                  Math.abs(e.current.scrollTop - a),
                  Math.abs(e.current.scrollLeft - r)
                );
                if (c > 0) {
                  var i = Math.max(Math.min((c / 1e3) * 200, 500), 300);
                  (n.current = new y.a(
                    e.current,
                    { scrollTop: a, scrollLeft: r },
                    { msDuration: i, timing: o, onComplete: t }
                  )),
                    n.current.Start();
                } else t && t();
              },
              [e, t]
            );
          })(e, s);
        return c.a.useCallback(
          function (n) {
            var c, u;
            if (a && !a(n)) return !1;
            var p = e.current,
              d = p.scrollTop,
              m = p.scrollHeight,
              g = p.clientHeight,
              f = p.scrollLeft,
              y = p.scrollWidth,
              R = p.clientWidth,
              v = null !== (c = o.current) && void 0 !== c ? c : d,
              E = null !== (u = i.current) && void 0 !== u ? u : f;
            switch (n.detail.button) {
              case _.a.DIR_UP:
                if (v <= 2) return !1;
                o.current = Math.max(0, v - g * r);
                break;
              case _.a.DIR_DOWN:
                if (v >= m - g - 2) return !1;
                o.current = Math.min(m - g, v + g * r);
                break;
              case _.a.DIR_LEFT:
                if (E <= 2) return !1;
                i.current = Math.max(0, E - R * r);
                break;
              case _.a.DIR_RIGHT:
                if (E >= y - R - 2) return !1;
                i.current = Math.min(y - R, E + R * r);
                break;
              default:
                return !1;
            }
            return (
              t && "smooth" != t
                ? (e.current.scrollTo({
                    top: o.current,
                    left: i.current,
                    behavior: "auto",
                  }),
                  s())
                : l(o.current, i.current),
              !0
            );
          },
          [a, e, t, r, l, s]
        );
      }
      var v = n("yLGM"),
        E = n("ZAxP"),
        S = n.n(E),
        h = c.a.forwardRef(function (e, t) {
          var n,
            r = e.scrollDirection,
            o = e.scrollPaddingTop,
            i = e.scrollPaddingRight,
            s = e.scrollPaddingBottom,
            u = e.scrollPaddingLeft,
            d = e.className,
            m = e.children,
            g = e.style,
            f = Object(a.f)(e, [
              "scrollDirection",
              "scrollPaddingTop",
              "scrollPaddingRight",
              "scrollPaddingBottom",
              "scrollPaddingLeft",
              "className",
              "children",
              "style",
            ]);
          switch (r) {
            case "x":
              n = S.a.ScrollX;
              break;
            case "both":
              n = S.a.ScrollBoth;
              break;
            case "y":
            default:
              n = S.a.ScrollY;
          }
          var y = Object(a.a)({}, g);
          return (
            (o || 0 === o) && (y.scrollPaddingTop = o),
            (i || 0 === i) && (y.scrollPaddingRight = i),
            (s || 0 === s) && (y.scrollPaddingBottom = s),
            (u || 0 === u) && (y.scrollPaddingLeft = u),
            c.a.createElement(
              l.a,
              Object(a.a)({}, f, {
                style: y,
                className: Object(p.a)(d, S.a.ScrollPanel, n),
                ref: t,
              }),
              c.a.createElement(v.a, null, m)
            )
          );
        });
      c.a.forwardRef(function (e, t) {
        var n = e.scrollStepPercent,
          r = e.scrollBehavior,
          o = Object(a.f)(e, ["scrollStepPercent", "scrollBehavior"]),
          i = c.a.useRef(),
          s = R(
            i,
            r,
            n,
            c.a.useCallback(function (e) {
              return e.currentTarget != e.target;
            }, [])
          ),
          l = Object(d.f)(i, t);
        return c.a.createElement(
          h,
          Object(a.a)({}, o, {
            onGamepadDirection: s,
            ref: l,
            scrollIntoViewType: f.d.NoTransformSparseContent,
          })
        );
      }),
        c.a.forwardRef(function (e, t) {
          var n = e.name,
            r = e.msScrollRestoreDelay,
            o = e.onScroll,
            i = Object(a.f)(e, ["name", "msScrollRestoreDelay", "onScroll"]);
          return c.a.createElement(
            C,
            { name: n, msScrollRestoreDelay: r, parentOnScroll: o, refDiv: t },
            function (e, t) {
              return c.a.createElement(
                h,
                Object(a.a)({}, i, { onScroll: e, ref: t })
              );
            }
          );
        });
      function C(e) {
        var t = e.name,
          n = e.msScrollRestoreDelay,
          a = e.parentOnScroll,
          r = e.refDiv,
          o = e.children,
          i = g(t + "ScrollTop", 250, 0),
          s = i[0],
          l = i[1],
          p = g(t + "ScrollLeft", 250, 0),
          m = p[0],
          f = p[1],
          y = c.a.useRef(0),
          _ = c.a.useRef(0),
          R = c.a.useRef(),
          v = c.a.useCallback(
            function (e) {
              var t = e.currentTarget,
                n = t.scrollTop,
                r = t.scrollLeft;
              l(n), (y.current = n), f(r), (_.current = r), a && a(e);
            },
            [l, f, a]
          );
        c.a.useLayoutEffect(
          function () {
            var e = function () {
              Object(u.a)(
                R.current.scrollHeight >= s,
                "Element is " +
                  R.current.scrollHeight +
                  " high but trying to restore scrollTop of " +
                  s +
                  ", element may need more time to lay out.",
                R.current
              ),
                (y.current = s),
                (_.current = m),
                R.current.scrollTo({ top: s, left: m, behavior: "auto" }),
                R.current.dispatchEvent(new UIEvent("scroll"));
            };
            (s == y.current && m == _.current) ||
              (n ? window.setTimeout(e, n) : e());
          },
          [s, m, n]
        );
        var E = Object(d.f)(R, r);
        return c.a.useMemo(
          function () {
            return o(v, E);
          },
          [v, E, o]
        );
      }
      n("kKgT");
      var T = n("MnIK"),
        I = n("lkRc"),
        O = n("jIbu"),
        D =
          (n("3+zv"),
          (function () {
            function e() {
              this.m_rgSections = Object(I.h)(
                "categories",
                "application_config"
              );
            }
            return (
              (e.prototype.GetSections = function () {
                return this.m_rgSections;
              }),
              (e.Get = function () {
                return (
                  e.s_singleton || (e.s_singleton = new e()), e.s_singleton
                );
              }),
              e
            );
          })());
      function L(e) {
        var t = e.section;
        e.autoFocus;
        return c.a.createElement(
          "div",
          { className: O.CategorySection },
          c.a.createElement(
            "span",
            { className: O.CategorySectionName },
            t.name
          ),
          c.a.createElement(
            h,
            {
              className: O.CategoriesCtn,
              scrollDirection: "x",
              navEntryPreferPosition: f.c.MAINTAIN_X,
            },
            t.categories.map(function (t, n) {
              return c.a.createElement(b, {
                key: "category" + t.name,
                category: t,
                autoFocus: e.autoFocus && 0 === n,
              });
            })
          )
        );
      }
      function b(e) {
        var t,
          n = e.category;
        return c.a.createElement(
          l.a,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          c.a.createElement(
            T.a,
            {
              placeholderWidth: "110px",
              placeholderHeight: "150px",
              bHorizontal: !0,
            },
            c.a.createElement(
              i.c,
              {
                href: I.d.STORE_BASE_URL + n.url,
                className: Object(p.a)(
                  ((t = {}),
                  (t[O.Category] = !0),
                  (t[O.TopLevelCategory] = n.is_toplevel_genre),
                  t)
                ),
              },
              c.a.createElement(
                "span",
                { className: O.CategoryName },
                c.a.createElement("span", null, n.name)
              ),
              c.a.createElement(w, Object(a.a)({}, e))
            )
          )
        );
      }
      function w(e) {
        var t = e.category;
        return t && t.image
          ? c.a.createElement(
              "div",
              { className: O.GridOuter },
              c.a.createElement(
                "div",
                { className: O.Grid },
                c.a.createElement("img", {
                  src: "data:image/png;base64," + t.image,
                })
              )
            )
          : null;
      }
      t.default = function () {
        var e = (function () {
            var e = D.Get(),
              t = Object(o.useState)(e.GetSections()),
              n = t[0];
            return t[1], { sections: n };
          })().sections,
          t = Object(r.a)(),
          n = c.a.useRef();
        return (
          c.a.useEffect(function () {
            var e;
            return null === (e = n.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          c.a.createElement(
            s.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: n },
            c.a.createElement(
              "div",
              { className: O.CategorySectionsCtn },
              e.map(function (e, t) {
                return c.a.createElement(L, {
                  key: "section" + e.name,
                  section: e,
                  autoFocus: 0 == t,
                });
              })
            )
          )
        );
      };
    },
    ZAxP: function (e, t, n) {
      e.exports = {
        ScrollPanel: "scrollpanel_ScrollPanel_1Ecbh",
        ScrollY: "scrollpanel_ScrollY_3yFwd",
        ScrollBoth: "scrollpanel_ScrollBoth_7h7DE",
        ScrollX: "scrollpanel_ScrollX_3TJWg",
      };
    },
    jIbu: function (e, t, n) {
      e.exports = {
        CategorySectionsCtn: "categoriesapp_CategorySectionsCtn_YuXds",
        CategorySection: "categoriesapp_CategorySection_2MUQ8",
        CategorySectionName: "categoriesapp_CategorySectionName_2Vnsy",
        CategoriesCtn: "categoriesapp_CategoriesCtn_3yuPy",
        Category: "categoriesapp_Category_1uwcZ",
        GridOuter: "categoriesapp_GridOuter_3Q4XM",
        Grid: "categoriesapp_Grid_3anY0",
        CategoryName: "categoriesapp_CategoryName_3VNsE",
      };
    },
    "ykc/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("mrSG"),
        r = n("q1tI"),
        o = n.n(r),
        c = n("av+R"),
        i = n("yLGM"),
        s = n("opsS"),
        l = n("lkRc");
      function u(e) {
        var t = e.children,
          n = e.navTreeRef,
          r = Object(a.f)(e, ["children", "navTreeRef"]),
          u = o.a.useRef(),
          p = Object(s.f)(u, n);
        if (l.d.IN_GAMEPADUI) {
          var d = window.__nav_tree_root;
          return o.a.createElement(
            c.b,
            Object(a.a)({}, r, {
              navTreeRef: p,
              secondary: !0,
              parentEmbeddedNavTree: d,
            }),
            o.a.createElement(i.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
  },
]);

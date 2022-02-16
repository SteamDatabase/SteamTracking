/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    OVk1: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("mrSG"),
        o = n("hwrv"),
        r = n("q1tI"),
        i = n.n(r),
        s = n("av+R"),
        c = n("ykc/"),
        u = n("qDk6"),
        l = n("Jz9t"),
        p = n("j+5p"),
        g = (n("kKgT"), n("MnIK")),
        m = n("0OaU"),
        d = n("exH9"),
        y = n("lkRc"),
        _ = n("jIbu"),
        h = n("vDqi"),
        C = n.n(h),
        v = (n("mgoM"), n("kyHq"), n("3+zv"), n("GiuM")),
        I = (function () {
          function e() {
            (this.m_mapImageForHub = new Map()),
              (this.m_mapPromiseForHub = new Map()),
              (this.m_rgSections = Object(y.h)(
                "categories",
                "application_config"
              ));
            for (var e = 0, t = this.m_rgSections; e < t.length; e++)
              for (var n = 0, a = t[e].categories; n < a.length; n++) {
                var o = a[n];
                o.image &&
                  this.m_mapImageForHub.set(this.GetCategoryKey(o), {
                    image: o.image,
                    appids: o.appids,
                  });
              }
          }
          return (
            (e.prototype.GetSections = function () {
              return this.m_rgSections;
            }),
            (e.prototype.BHasCategoryImage = function (e) {
              return this.m_mapImageForHub.has(this.GetCategoryKey(e));
            }),
            (e.prototype.GetCategoryImage = function (e) {
              var t;
              return null ===
                (t = this.m_mapImageForHub.get(this.GetCategoryKey(e))) ||
                void 0 === t
                ? void 0
                : t.image;
            }),
            (e.prototype.LoadCategoryImages = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n,
                  o,
                  r,
                  i,
                  s,
                  c = this;
                return Object(a.e)(this, function (a) {
                  if (
                    e.some(function (e) {
                      return !c.BHasCategoryImage(e);
                    }) &&
                    e.some(function (e) {
                      return !c.m_mapPromiseForHub.has(c.GetCategoryKey(e));
                    })
                  )
                    for (
                      n = e.filter(function (e) {
                        return !c.BHasCategoryImage(e);
                      }),
                        o = this.InternalLoadCategoryImage(n, t),
                        r = 0,
                        i = n;
                      r < i.length;
                      r++
                    )
                      (s = i[r]),
                        this.m_mapPromiseForHub.set(this.GetCategoryKey(s), o);
                  return [
                    2,
                    Promise.all(
                      e.map(function (e) {
                        return c.m_mapPromiseForHub.get(c.GetCategoryKey(e));
                      })
                    ),
                  ];
                });
              });
            }),
            (e.prototype.InternalLoadCategoryImage = function (e, t) {
              var n;
              return Object(a.b)(this, void 0, void 0, function () {
                var o,
                  r,
                  i,
                  s,
                  c,
                  u,
                  l,
                  p,
                  g,
                  m,
                  d,
                  _ = this;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!e || 0 === e.length) return [2];
                      if (
                        ((o = e.filter(function (e) {
                          return !_.BHasCategoryImage(e);
                        })),
                        (r = this.BShouldDedupeCategoryImages(e)),
                        (i = this.GetAppIDsShownOnCategories(e)),
                        !o || 0 === o.length)
                      )
                        return [2];
                      (s = o.map(function (e) {
                        return e.hub;
                      })),
                        (c =
                          y.d.STORE_BASE_URL +
                          "contenthub/ajaxgetcategoryimages"),
                        (u = {
                          hubs: JSON.stringify(s),
                          dedupe: r,
                          appids_shown: JSON.stringify(i),
                          nocache: !t,
                        }),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [4, C.a.get(c, { params: u, withCredentials: !0 })]
                      );
                    case 2:
                      if (
                        ((l = a.sent()),
                        1 ===
                          (null === (n = null == l ? void 0 : l.data) ||
                          void 0 === n
                            ? void 0
                            : n.success))
                      )
                        for (
                          p = 0, g = Object.keys(l.data.images);
                          p < g.length;
                          p++
                        )
                          (m = g[p]),
                            this.m_mapImageForHub.set(m, l.data.images[m]);
                      else
                        console.error(
                          "ajaxgetcategoryimages failed with error: ",
                          l
                        );
                      return [3, 4];
                    case 3:
                      return (
                        (d = a.sent()),
                        console.error(
                          "ajaxgetcategoryimages failed with exception: ",
                          d
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.BShouldDedupeCategoryImages = function (e) {
              return e.some(function (e) {
                return e.is_toplevel_genre;
              });
            }),
            (e.prototype.GetAppIDsShownOnCategories = function (e) {
              for (var t = new Set(), n = 0, a = e; n < a.length; n++) {
                var o = a[n];
                if (o.appids)
                  for (var r = 0, i = o.appids; r < i.length; r++) {
                    var s = i[r];
                    t.add(s);
                  }
              }
              return Array.from(t);
            }),
            (e.prototype.GetCategoryKey = function (e) {
              var t, n, a;
              return (
                (null === (t = e.hub) || void 0 === t ? void 0 : t.type) +
                "_" +
                ((null === (n = e.hub) || void 0 === n ? void 0 : n.category) ||
                  "") +
                "_" +
                ((null === (a = e.hub) || void 0 === a ? void 0 : a.tagid) ||
                  "")
              );
            }),
            (e.Get = function () {
              return e.s_singleton || (e.s_singleton = new e()), e.s_singleton;
            }),
            e
          );
        })();
      function f(e) {
        var t = e.section;
        e.autoFocus,
          (function (e) {
            var t = I.Get(),
              n = Object(v.d)("nocache", !1)[0],
              a = Object(r.useState)(
                e.some(function (e) {
                  return !t.BHasCategoryImage(e);
                })
              ),
              o = a[0],
              i = a[1];
            return (
              Object(r.useEffect)(
                function () {
                  o &&
                    t.LoadCategoryImages(e, !n).then(function () {
                      i(!1);
                    });
                },
                [o, n, e, t]
              ),
              { bLoading: o }
            );
          })(t.categories).bLoading;
        return i.a.createElement(
          "div",
          { className: _.CategorySection },
          i.a.createElement(
            "span",
            { className: _.CategorySectionName },
            t.name
          ),
          i.a.createElement(
            l.a,
            {
              className: _.CategoriesCtn,
              scrollDirection: "x",
              navEntryPreferPosition: p.c.MAINTAIN_X,
            },
            t.categories.map(function (t, n) {
              return i.a.createElement(E, {
                key: "category" + t.name,
                category: t,
                autoFocus: e.autoFocus && 0 === n,
              });
            })
          )
        );
      }
      function E(e) {
        var t,
          n = e.category;
        return i.a.createElement(
          u.a,
          { focusableIfNoChildren: !0, autoFocus: e.autoFocus },
          i.a.createElement(
            g.a,
            {
              placeholderWidth: "110px",
              placeholderHeight: "150px",
              bHorizontal: !0,
            },
            i.a.createElement(
              s.c,
              {
                href: y.d.STORE_BASE_URL + n.url,
                className: Object(d.a)(
                  ((t = {}),
                  (t[_.Category] = !0),
                  (t[_.TopLevelCategory] = n.is_toplevel_genre),
                  t)
                ),
              },
              i.a.createElement(
                "span",
                { className: _.CategoryName },
                i.a.createElement("span", null, n.name)
              ),
              i.a.createElement(R, Object(a.a)({}, e))
            )
          )
        );
      }
      function R(e) {
        var t = e.category;
        if (!I.Get().BHasCategoryImage(t))
          return i.a.createElement(m.a, { size: "small", position: "center" });
        var n = I.Get().GetCategoryImage(t);
        return n
          ? i.a.createElement(
              "div",
              { className: _.GridOuter },
              i.a.createElement(
                "div",
                { className: _.Grid },
                i.a.createElement("img", { src: "data:image/png;base64," + n })
              )
            )
          : null;
      }
      t.default = function () {
        var e = (function () {
            var e = I.Get(),
              t = Object(r.useState)(e.GetSections()),
              n = t[0];
            return t[1], { sections: n };
          })().sections,
          t = Object(o.a)(),
          n = i.a.useRef();
        return (
          i.a.useEffect(function () {
            var e;
            return null === (e = n.current) || void 0 === e
              ? void 0
              : e.Activate(!0);
          }, []),
          i.a.createElement(
            c.a,
            { navID: "CategoriesApp", NavigationManager: t, navTreeRef: n },
            i.a.createElement(
              "div",
              { className: _.CategorySectionsCtn },
              e.map(function (e, t) {
                return i.a.createElement(f, {
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
    hwrv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var a,
        o = n("mrSG"),
        r = n("rHSA"),
        i = n("XxJJ"),
        s = [
          { index: 0, type: r.a.OK, category: "action" },
          { index: 1, type: r.a.CANCEL, category: "action" },
          { index: 2, type: r.a.SECONDARY, category: "action" },
          { index: 3, type: r.a.OPTIONS, category: "action" },
          { index: 4, type: r.a.BUMPER_LEFT, category: "action" },
          { index: 5, type: r.a.BUMPER_RIGHT, category: "action" },
          { index: 6, type: r.a.TRIGGER_LEFT, category: "action" },
          { index: 7, type: r.a.TRIGGER_RIGHT, category: "action" },
          { index: 8, type: r.a.SELECT, category: "action" },
          { index: 9, type: r.a.START, category: "action" },
          { index: 10, type: r.a.LSTICK_CLICK, category: "action" },
          { index: 11, type: r.a.RSTICK_CLICK, category: "action" },
          { index: 12, type: r.a.DIR_UP, category: "navigation" },
          { index: 13, type: r.a.DIR_DOWN, category: "navigation" },
          { index: 14, type: r.a.DIR_LEFT, category: "navigation" },
          { index: 15, type: r.a.DIR_RIGHT, category: "navigation" },
          { index: 16, type: r.a.STEAM_GUIDE, category: "action" },
          { index: 17, type: r.a.SELECT, category: "action" },
        ],
        c = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgGamepadStatus = []),
              t.SetSourceType(r.b.GAMEPAD),
              window.addEventListener("gamepadconnected", function (e) {
                t.m_bGamepadDetected ||
                  (t.OnGamepadDetected(), t.PollGamepads());
              }),
              t
            );
          }
          return (
            Object(o.d)(t, e),
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
                    var o = this.m_rgGamepadStatus[n], r = 0;
                    r < s.length;
                    r++
                  ) {
                    var i = s[r],
                      c = i.index;
                    a.buttons[c] &&
                      (a.buttons[c].pressed
                        ? ((t = !0),
                          o.buttons[c] ||
                            ((o.buttons[c] = !0), this.OnButtonDown(i.type)))
                        : o.buttons[c] &&
                          (this.OnButtonUp(i.type), (o.buttons[c] = !1)));
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
            Object(o.c)([i.a], t.prototype, "PollGamepads", null),
            Object(o.c)([i.a], t.prototype, "OnWindowRegainedFocus", null),
            t
          );
        })(r.c),
        u = n("kyHq"),
        l = {
          A: r.a.OK,
          B: r.a.CANCEL,
          X: r.a.SECONDARY,
          Y: r.a.OPTIONS,
          SELECT: r.a.SELECT,
          START: r.a.START,
          LSHOULDER: r.a.BUMPER_LEFT,
          RSHOULDER: r.a.BUMPER_RIGHT,
          LTRIGGER: r.a.TRIGGER_LEFT,
          RTRIGGER: r.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: r.a.DIR_UP,
          LEFTSTICK_RIGHT: r.a.DIR_RIGHT,
          LEFTSTICK_DOWN: r.a.DIR_DOWN,
          LEFTSTICK_LEFT: r.a.DIR_LEFT,
          LEFTSTICK_CLICK: r.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: r.a.RSTICK_CLICK,
          LeftStick: r.a.LSTICK_TOUCH,
          RightStick: r.a.RSTICK_TOUCH,
          LeftTrackpad: r.a.LPAD_TOUCH,
          LeftTrackpadClick: r.a.LPAD_CLICK,
          RightTrackpad: r.a.RPAD_TOUCH,
          RightTrackpadClick: r.a.RPAD_CLICK,
          RearLeftUpper: r.a.REAR_LEFT_UPPER,
          RearLeftLower: r.a.REAR_LEFT_LOWER,
          RearRightUpper: r.a.REAR_RIGHT_UPPER,
          RearRightLower: r.a.REAR_RIGHT_LOWER,
        },
        p =
          (((a = {})[u.h.SystemKey0] = r.a.STEAM_GUIDE),
          (a[u.h.SystemKey1] = r.a.STEAM_QUICK_MENU),
          a),
        g = (function (e) {
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
              t.SetSourceType(r.b.GAMEPAD),
              t
            );
          }
          return (
            Object(o.d)(t, e),
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
                  o = l[a.strActionName];
                if (null != o) {
                  var r = this.GetController(a.nController);
                  a.bState && !r.activeButtons[o]
                    ? ((r.activeButtons[o] = !0),
                      this.OnButtonDown(o, a.nController))
                    : !a.bState &&
                      r.activeButtons[o] &&
                      ((r.activeButtons[o] = !1),
                      this.OnButtonUp(o, a.nController));
                }
              }
            }),
            Object(o.c)([i.a], t.prototype, "HandleSystemKeyEvents", null),
            Object(o.c)(
              [i.a],
              t.prototype,
              "HandleControllerInputMessages",
              null
            ),
            t
          );
        })(r.c),
        m = n("X3Ds"),
        d = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_lastButtonDown = r.a.INVALID),
              n.SetSourceType(r.b.KEYBOARD),
              t.addEventListener("keydown", n.OnKeyDown),
              t.addEventListener("keyup", n.OnKeyUp),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.OnKeyDown = function (e) {
              var t = this.TranslateKey(e);
              t != r.a.INVALID &&
                t != this.m_lastButtonDown &&
                (this.Reset(),
                this.OnButtonDown(t),
                (this.m_lastButtonDown = t),
                e.preventDefault());
            }),
            (t.prototype.OnKeyUp = function (e) {
              var t = this.TranslateKey(e);
              t != r.a.INVALID &&
                (this.OnButtonUp(t),
                (this.m_lastButtonDown = r.a.INVALID),
                e.preventDefault());
            }),
            (t.prototype.Reset = function () {
              this.m_lastButtonDown != r.a.INVALID &&
                (this.OnButtonUp(this.m_lastButtonDown),
                (this.m_lastButtonDown = r.a.INVALID));
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
                    return r.a.STEAM_GUIDE;
                  case "Digit2":
                    return r.a.STEAM_QUICK_MENU;
                  case "Digit3":
                    return r.a.SELECT;
                  case "Digit4":
                    return r.a.BUMPER_LEFT;
                  case "Digit5":
                    return r.a.BUMPER_RIGHT;
                  case "Digit6":
                    return r.a.LSTICK_CLICK;
                  case "Digit7":
                    return r.a.RSTICK_CLICK;
                  case "Digit8":
                    return r.a.OPTIONS;
                  case "Digit9":
                    return r.a.SELECT;
                  case "Digit0":
                    return r.a.START;
                }
              switch (t) {
                case "Escape":
                  return r.a.CANCEL;
                case "Enter":
                  return a ? r.a.INVALID : r.a.OK;
                case "Backspace":
                  return a ? r.a.INVALID : r.a.SECONDARY;
                case "ArrowUp":
                  return r.a.DIR_UP;
                case "ArrowDown":
                  return r.a.DIR_DOWN;
                case "ArrowLeft":
                  return r.a.DIR_LEFT;
                case "ArrowRight":
                  return r.a.DIR_RIGHT;
              }
              return r.a.INVALID;
            }),
            Object(o.c)([i.a], t.prototype, "OnKeyDown", null),
            Object(o.c)([i.a], t.prototype, "OnKeyUp", null),
            Object(o.c)([i.a], t.prototype, "Reset", null),
            t
          );
        })(r.c),
        y = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_nAccumulatedMouseMovement = 0),
              (n.m_bFirstMouseUpdate = !0),
              n.SetSourceType(r.b.MOUSE),
              t.addEventListener("mousedown", n.OnMouseDown),
              t.addEventListener("mousemove", n.OnMouseMove),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.OnMouseDown = function (e) {
              e.defaultPrevented || this.OnNavigationTypeChanged(r.b.MOUSE);
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
                    (this.Reset(), this.OnNavigationTypeChanged(r.b.MOUSE));
              }
            }),
            (t.prototype.Reset = function () {
              (this.m_nAccumulatedMouseMovement = 0),
                (this.m_bFirstMouseUpdate = !0);
            }),
            Object(o.c)([i.a], t.prototype, "OnMouseDown", null),
            Object(o.c)([i.a], t.prototype, "OnMouseMove", null),
            Object(o.c)([i.a], t.prototype, "Reset", null),
            t
          );
        })(r.c),
        _ = n("NxAk"),
        h = n("lkRc"),
        C = (function () {
          function e() {
            (this.m_GamepadNavigationController = new _.c()),
              h.d.IN_GAMEPADUI &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new g()
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new c()
                )),
              "dev" == h.d.WEB_UNIVERSE &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new d(window)
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new y(window)
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
                  "dev" == h.d.WEB_UNIVERSE &&
                    (window.g_StoreWebNavStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            e
          );
        })();
      function v() {
        var e = window.legacyWebFocusNavController;
        return e || C.Get().GetNavigationController();
      }
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
        return l;
      });
      var a = n("mrSG"),
        o = n("q1tI"),
        r = n.n(o),
        i = n("av+R"),
        s = n("yLGM"),
        c = n("opsS"),
        u = n("lkRc");
      function l(e) {
        var t = e.children,
          n = e.navTreeRef,
          o = Object(a.f)(e, ["children", "navTreeRef"]),
          l = r.a.useRef(),
          p = Object(c.f)(l, n);
        if (u.d.IN_GAMEPADUI) {
          var g = window.__nav_tree_root;
          return r.a.createElement(
            i.b,
            Object(a.a)({}, o, {
              navTreeRef: p,
              secondary: !0,
              parentEmbeddedNavTree: g,
            }),
            r.a.createElement(s.a, null, t)
          );
        }
        return r.a.createElement(r.a.Fragment, null, t);
      }
    },
  },
]);

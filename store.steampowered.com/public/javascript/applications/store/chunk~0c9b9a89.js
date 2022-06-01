/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "/0nC": function (e, t, n) {},
    "24VQ": function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return r;
        }),
        n.d(t, "b", function () {
          return a;
        });
      const i = { x: "y", y: "x" };
      function o() {
        return { x: 0, y: 0 };
      }
      function s(e, t) {
        return e.x * t.x + e.y * t.y;
      }
      function r(e, t) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function a(e, t) {
        const n = r(e, t);
        return Math.sqrt(s(n, n));
      }
    },
    "4CF9": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return l;
        });
      var i = n("f5iL"),
        o = n("nDaX");
      n("O8Yk");
      class s {
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, n = !0) {
          return {
            root: s.SerializeNavNode(e, t, n),
            bHadFocus: e.BFocusWithin(),
          };
        }
        static SerializeNavNode(e, t = !0, n = !0) {
          let i = null;
          const [o, r] = e.GetChildren();
          return (
            o.length &&
              -1 != r &&
              t &&
              (i = o.map((e, t) => s.SerializeNavNode(e, t == r || n, n))),
            { sNavKey: e.NavKey, iActiveChild: r, rgChildren: i }
          );
        }
        static RestoreSerializedNavState(e, t, n = 0) {
          const { root: i, bHadFocus: r } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            s.RestoreSerializedNavNode(e, i),
              (1 == n || (0 == n && r)) && e.BTakeFocus(o.c.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t) {
          const { sNavKey: n, iActiveChild: o, rgChildren: r } = t;
          if (
            (n && Object(i.a)(n == e.NavKey, "navkey mismatch"),
            e.SetActiveChild(o),
            r && r.length)
          ) {
            const [t] = e.GetChildren();
            let n = new Map();
            t.forEach((e) => {
              e.NavKey && n.set(e.NavKey, e);
            });
            for (const e of r) {
              if (!e.sNavKey) continue;
              const t = n.get(e.sNavKey);
              t && s.RestoreSerializedNavNode(t, e);
            }
            if (-1 != o && r[o].sNavKey) {
              const i = n.get(r[o].sNavKey);
              i && e.SetActiveChild(t.indexOf(i));
            }
            let i = 0,
              a = 0;
            for (; i < t.length && a < r.length; ) {
              for (; i < t.length && t[i].NavKey; ) i++;
              for (; a < r.length && r[a].sNavKey; ) a++;
              if (i >= t.length || a >= r.length) break;
              s.RestoreSerializedNavNode(t[i], r[a]), i++, a++;
            }
          }
        }
      }
      function r(e, t, n = 0) {
        return s.RestoreSerializedNavState(e, t, n);
      }
      class a extends s {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(s.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            s.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class l extends s {
        constructor() {
          super(...arguments), (this.m_mapHistory = new Map());
        }
        SaveState(e) {
          this.m_mapHistory.set(e, s.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const n = this.m_mapHistory.get(e);
          return (
            !!n &&
            (console.log(`Restoring history for state ${e}`),
            s.RestoreSerializedNavState(this.m_root, n, t),
            !0)
          );
        }
      }
    },
    "5JaR": function (e, t, n) {
      e.exports = {
        TextToolTip: "tooltip_TextToolTip_29b2a",
        ToolTipCustom: "tooltip_ToolTipCustom_3Dt__",
        ToolTipTitle: "tooltip_ToolTipTitle_3YNfm",
        Center: "tooltip_Center_2-PU0",
        ToolTipInsetContent: "tooltip_ToolTipInsetContent_1nxOn",
      };
    },
    "6MVd": function (e, t, n) {
      "use strict";
      function i(e) {
        return function (t, n, i) {
          const o = i.value;
          i.value = function (...t) {
            let i = this[n + "_DebounceProperties"];
            void 0 === i &&
              (i = this[n + "_DebounceProperties"] =
                { hTimer: void 0, nPending: 0 }),
              void 0 === i.hTimer
                ? (o.apply(this, t),
                  (i.hTimer = window.setInterval(() => {
                    i.nPending > 0
                      ? (o.apply(this, t), (i.nPending = 0))
                      : (window.clearInterval(i.hTimer), (i.hTimer = void 0));
                  }, e)))
                : (i.nPending += 1);
          };
        };
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    "6RuE": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var i = n("mrSG"),
        o = n("tXBB"),
        s = n("ApMK"),
        r = n("f5iL"),
        a = n("vYsE"),
        l = n("3u1o"),
        c = n("rSrx"),
        u = n("iDgP"),
        d = n("nDaX"),
        h = (n("O8Yk"), n("ROh0"));
      const m = new u.a("FocusNavigation").Debug,
        p = (new u.a("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class g {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_bSuppressGamepadInput = !1),
            (this.m_FocusChangedCallbacks = new l.a()),
            (this.m_UnhandledButtonEventsCallbacks = new l.a()),
            (this.m_navigationSource = Object(l.e)({
              eActivationSourceType: o.b.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = Object(l.e)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (e) => e()),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(p)
            );
        }
        SetShowDebugFocusRing(e) {
          this.m_bShowDebugFocusRing.Set(e),
            (function (e) {
              sessionStorage.setItem(p, e ? "shown" : void 0);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          this.m_rgGamepadInputSources.push(e),
            e.RegisterForGamepadButtonDown(this.OnButtonDown),
            e.RegisterForGamepadButtonUp(this.OnButtonUp),
            e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange);
        }
        SetGamepadEventUpdateBatcher(e) {
          this.m_fnGamepadEventUpdateBatcher = e;
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
        }
        get NavigationSource() {
          return this.m_navigationSource;
        }
        DispatchVirtualButtonPress(e) {
          this.OnButtonDown(e, o.b.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(e) {
          this.OnButtonDown(e, o.b.GAMEPAD, -1),
            this.OnButtonUp(e, o.b.GAMEPAD, -1);
        }
        DispatchVirtualGamepad(e, t) {
          switch (e) {
            case "vgp_onbuttondown":
              this.OnButtonDown(t.button, t.source, -1, t.is_repeat);
              break;
            case "vgp_onbuttonup":
              this.OnButtonUp(t.button, t.source, -1);
          }
        }
        BGlobalGamepadButton(e) {
          return (
            e === o.a.STEAM_GUIDE ||
            e === o.a.STEAM_QUICK_MENU ||
            e === o.a.CANCEL
          );
        }
        GetEventTarget(e, t = !1) {
          let n = document.activeElement;
          if (this.m_LastActiveNavTree) {
            let i = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                (i != o.b.GAMEPAD && i != o.b.KEYBOARD) ||
                this.m_LastActiveNavTree.GetLastFocusedNode() ||
                (t && this.m_LastActiveNavTree.TakeFocus(d.c.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              )
            )
              return null;
            this.m_LastActiveNavTree.GetLastFocusedNode() &&
              (n = this.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return n;
        }
        ChangeNavigationSource(e, t) {
          let n = this.m_navigationSource.Value,
            i = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex >= 0 && (i = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: i,
            });
        }
        OnButtonDown(e, t, n, i) {
          var s;
          if (this.m_bSuppressGamepadInput)
            return void m(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(t, n);
          const r = this.GetEventTarget(e, !0);
          m(
            `Firing ${o.a[e]} in tree ${
              null === (s = this.m_LastActiveNavTree) || void 0 === s
                ? void 0
                : s.id
            } at `,
            r
          ),
            this.BatchedUpdate(() =>
              Object(d.b)(r, "vgp_onbuttondown", {
                button: e,
                source: t,
                is_repeat: i,
              })
            );
        }
        OnButtonUp(e, t, n) {
          if (this.m_bSuppressGamepadInput) return;
          this.ChangeNavigationSource(t, n);
          const i = this.GetEventTarget();
          this.BatchedUpdate(() =>
            Object(d.b)(i, "vgp_onbuttonup", {
              button: e,
              source: t,
              is_repeat: !1,
            })
          );
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          var t;
          if (
            (this.ChangeNavigationSource(e, -1),
            document.hasFocus() &&
              (e == o.b.MOUSE || e == o.b.TOUCH) &&
              this.m_LastActiveNavTree)
          ) {
            const e = this.m_LastActiveNavTree.GetLastFocusedNode(),
              n = (function (e) {
                if (!Object(c.q)(e)) return !1;
                const t = e.tagName,
                  n = Object(c.s)(e) ? e.type : null;
                return Object(c.r)(t, n);
              })(null == e ? void 0 : e.Element)
                ? e
                : null;
            null === (t = this.m_LastActiveNavTree) ||
              void 0 === t ||
              t.TransferFocus(d.c.BROWSER, n);
          }
        }
        NewGamepadNavigationTree(e) {
          return new h.a(this, e);
        }
        RegisterGamepadNavigationTree(e, t) {
          return (
            e.SetIsMounted(),
            t
              ? this.m_rgGamepadNavigationTrees.unshift(e)
              : (this.m_rgGamepadNavigationTrees.push(e),
                this.SetActiveNavTree(e, !0)),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => this.UnregisterGamepadNavigationTree(e)
          );
        }
        UnregisterGamepadNavigationTree(e) {
          s.b(this.m_rgGamepadNavigationTrees, e),
            this.m_LastActiveNavTree == e &&
              ((this.m_LastActiveNavTree = null),
              this.SetActiveNavTree(null, !0));
        }
        GetGamepadNavTreeByID(e) {
          const t = this.m_rgGamepadNavigationTrees.findIndex((t) => t.id == e);
          return t >= 0 ? this.m_rgGamepadNavigationTrees[t] : null;
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          this.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, n = !1) {
          e != this.m_LastActiveFocusNavTree &&
            e != this.m_LastActiveNavTree &&
            (this.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == e ||
            e.GetParentEmbeddedNavTree() == this.m_LastActiveFocusNavTree
              ? (m(
                  `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                ),
                e.Activate())
              : m(
                  `There was a focus event in ${e.id}, but the active nav tree is ${this.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${d.c[t]}.`
                ));
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(null, !0),
            s.b(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        IsActiveFocusNavTree(e) {
          return e == this.m_LastActiveFocusNavTree;
        }
        IsActiveNavTree(e) {
          return e == this.m_LastActiveNavTree;
        }
        SetActiveNavTree(e, t = !1) {
          if (e && this.m_LastActiveNavTree == e) return;
          const n = this.m_LastActiveNavTree;
          n && s.b(this.m_rgGamepadNavigationTrees, n),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const i = this.m_LastActiveFocusNavTree == e;
          e && s.b(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            m(
              `Move from nav tree ${null == n ? void 0 : n.id} to nav tree ${
                null == e ? void 0 : e.id
              } ${t ? "taking focus" : "no focus"}`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              !i && t && e.TakeFocus(d.c.APPLICATION)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(e),
            e && !i && e.OnActivate(n);
        }
        BindGlobalEventHandlers() {
          this.m_bGlobalEventsInitialized ||
            (this.m_bGlobalEventsInitialized = !0);
        }
        OnFocusChangeStart(e, t, n, i) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = { source: e, from: n, to: i })
              : !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            Object(r.a)(
              e == this.m_iFocusChangeStack,
              "out of order focus pop"
            ),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: e, from: t, to: n } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(e, t, n);
          }
        }
        RegisterForUnhandledButtonDownEvents(e) {
          return this.m_UnhandledButtonEventsCallbacks.Register(e);
        }
        FireUnhandledGamepadEventCallbacks(e) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(e), !1)
          );
        }
        SetSuppressGamepadInput(e) {
          this.m_bSuppressGamepadInput = e;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let e = this.m_LastActiveFocusNavTree || this.m_LastActiveNavTree;
          e && e.TakeFocus(d.c.APPLICATION);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield e();
            } finally {
              this.m_bRestoringHistory = !1;
            }
          });
        }
      }
      Object(i.b)([a.a], g.prototype, "OnButtonDown", null),
        Object(i.b)([a.a], g.prototype, "OnButtonUp", null),
        Object(i.b)([a.a], g.prototype, "OnNavigationTypeChange", null);
    },
    "7ast": function (e, t, n) {
      "use strict";
      n.d(t, "y", function () {
        return D;
      }),
        n.d(t, "I", function () {
          return S;
        }),
        n.d(t, "q", function () {
          return E;
        }),
        n.d(t, "C", function () {
          return w;
        }),
        n.d(t, "e", function () {
          return I;
        }),
        n.d(t, "d", function () {
          return R;
        }),
        n.d(t, "h", function () {
          return N;
        }),
        n.d(t, "i", function () {
          return F;
        }),
        n.d(t, "F", function () {
          return B;
        }),
        n.d(t, "f", function () {
          return P;
        }),
        n.d(t, "D", function () {
          return x;
        }),
        n.d(t, "E", function () {
          return k;
        }),
        n.d(t, "b", function () {
          return j;
        }),
        n.d(t, "g", function () {
          return H;
        }),
        n.d(t, "G", function () {
          return W;
        }),
        n.d(t, "J", function () {
          return V;
        }),
        n.d(t, "z", function () {
          return Z;
        }),
        n.d(t, "K", function () {
          return ee;
        }),
        n.d(t, "H", function () {
          return te;
        }),
        n.d(t, "B", function () {
          return he;
        }),
        n.d(t, "A", function () {
          return me;
        }),
        n.d(t, "n", function () {
          return _e;
        }),
        n.d(t, "m", function () {
          return Oe;
        }),
        n.d(t, "o", function () {
          return De;
        }),
        n.d(t, "k", function () {
          return ze;
        }),
        n.d(t, "a", function () {
          return $e;
        }),
        n.d(t, "p", function () {
          return Je;
        }),
        n.d(t, "j", function () {
          return nt;
        }),
        n.d(t, "l", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return at;
        }),
        n.d(t, "t", function () {
          return ct;
        }),
        n.d(t, "s", function () {
          return ut;
        }),
        n.d(t, "v", function () {
          return It;
        }),
        n.d(t, "w", function () {
          return Tt;
        }),
        n.d(t, "x", function () {
          return yt;
        }),
        n.d(t, "r", function () {
          return Nt;
        }),
        n.d(t, "u", function () {
          return Ut;
        });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = (n("/0nC"), n("fsrB")),
        a = n("Lsvi"),
        l = n("e356"),
        c = n("GbHM"),
        u = n("GXif"),
        d = n("vYsE"),
        h = n("R1j/");
      const m = Object(h.a)("DialogPresentationContext", () =>
          s.a.createContext({})
        ),
        p = () => s.a.useContext(m);
      var g = n("vbK/"),
        b = n("Wv4g"),
        _ = n.n(b);
      const f = (e) => {
          const t = p();
          return s.a.createElement(
            g.a,
            Object.assign(
              { component: null == t ? void 0 : t.ToggleControl, fallback: v },
              e
            )
          );
        },
        v = (e) => {
          const { value: t, onChange: n, disabled: i } = e;
          return s.a.createElement(
            "div",
            {
              className: Object(c.a)(_.a.Toggle, i && _.a.Disabled),
              onClick: () => !i && n && n(!t),
            },
            s.a.createElement("div", { className: _.a.ToggleRail }),
            s.a.createElement("div", {
              className: Object(c.a)(
                _.a.ToggleRail,
                _.a.Highlight,
                t ? _.a.On : _.a.Off
              ),
            }),
            s.a.createElement("div", {
              className: Object(c.a)(_.a.ToggleSwitch, t ? _.a.On : _.a.Off),
            })
          );
        };
      function C(e) {
        return o.forwardRef((t, n) =>
          o.createElement(
            "div",
            Object.assign({}, t, {
              className: Object(c.a)(e, t.className),
              ref: n,
            })
          )
        );
      }
      function O(e) {
        return o.forwardRef(function (t, n) {
          return o.createElement(
            a.a,
            Object.assign({}, t, {
              className: Object(c.a)(e, t.className),
              ref: n,
            })
          );
        });
      }
      let D = C("DialogHeader"),
        S = C("DialogSubHeader"),
        E = C("DialogFooter"),
        w = C("DialogLabel _DialogLayout"),
        I = C("DialogBodyText"),
        R = C("DialogBody"),
        T =
          (O("DialogBody"),
          C("DialogInnerBody"),
          C("DialogControlsSection"),
          C("DialogControlsSectionHeader"),
          O("DialogTwoColLayout _DialogColLayout")),
        y = O("DialogThreeColLayout _DialogColLayout");
      O("DialogTwoThirdColLayout _DialogColLayout"),
        C("DialogColumn _DialogLayout");
      function N(e) {
        const t = p();
        return o.createElement(
          g.a,
          Object.assign({ component: t.Content, fallback: L }, e)
        );
      }
      function L(e) {
        let {
            children: t,
            bCenterVertically: n,
            renderDialogContentDiv: s,
            renderDialogContentInnerDiv: r,
          } = e,
          a = Object(i.c)(e, [
            "children",
            "bCenterVertically",
            "renderDialogContentDiv",
            "renderDialogContentInnerDiv",
          ]),
          l =
            "DialogContent _DialogLayout" +
            (e.className ? " " + e.className : "");
        return (
          n && (l += " _DialogCenterVertically"),
          o.createElement(
            g.a,
            Object.assign({ component: s, fallback: "div" }, a, {
              className: l,
            }),
            o.createElement(
              g.a,
              {
                component: r,
                fallback: "div",
                className: "DialogContent_InnerWidth",
              },
              t
            )
          )
        );
      }
      class M extends o.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
        }
        render() {
          return o.createElement(
            "form",
            Object.assign({}, this.props, { onSubmit: this.OnSubmit })
          );
        }
      }
      function F(e) {
        const { classNameContent: t, bCenterVertically: n } = e,
          s = Object(i.c)(e, ["classNameContent", "bCenterVertically"]);
        return o.createElement(
          N,
          { className: t, bCenterVertically: n },
          o.createElement(M, Object.assign({}, s))
        );
      }
      Object(i.b)([d.a], M.prototype, "OnSubmit", null);
      const A = o.forwardRef(function (e, t) {
          const n = p(),
            { svgicon: s } = e,
            a = Object(i.c)(e, ["svgicon"]),
            l = Object(c.a)(
              e.className,
              void 0 !== s && "hasSVGIcon",
              a.disabled && "Disabled",
              n.strButtonClassName
            );
          return o.createElement(
            r.d,
            Object.assign(
              { ref: t, onOKActionDescription: a.disabled ? null : void 0 },
              a,
              {
                className: l,
                noFocusRing: !0,
                disabled: !1,
                onClick: a.disabled ? null : a.onClick,
                onPointerDown: a.disabled ? null : a.onPointerDown,
                onPointerUp: a.disabled ? null : a.onPointerUp,
                onPointerCancel: a.disabled ? null : a.onPointerCancel,
                onMouseDown: a.disabled ? null : a.onMouseDown,
                onMouseUp: a.disabled ? null : a.onMouseUp,
                onTouchStart: a.disabled ? null : a.onTouchStart,
                onTouchEnd: a.disabled ? null : a.onTouchEnd,
                onTouchCancel: a.disabled ? null : a.onTouchCancel,
                onSubmit: a.disabled ? null : a.onSubmit,
              }
            ),
            s && s(),
            e.children
          );
        }),
        B = o.forwardRef(function (e, t) {
          return o.createElement(
            A,
            Object.assign(
              { preferredFocus: !0, type: e.onClick ? "button" : "submit" },
              e,
              {
                ref: t,
                className: Object(c.a)(
                  e.className,
                  "DialogButton",
                  "_DialogLayout",
                  "Primary"
                ),
              }
            )
          );
        }),
        P = o.forwardRef(function (e, t) {
          return o.createElement(
            A,
            Object.assign({ type: "button" }, e, {
              ref: t,
              className: Object(c.a)(
                e.className,
                "DialogButton",
                "_DialogLayout",
                "Secondary"
              ),
            })
          );
        });
      o.forwardRef(function (e, t) {
        return o.createElement(
          A,
          Object.assign({ type: "button" }, e, {
            ref: t,
            className: Object(c.a)(
              e.className,
              "DialogButton _DialogLayout Small"
            ),
          })
        );
      }),
        o.forwardRef(function (e, t) {
          return o.createElement(
            A,
            Object.assign({ type: "button" }, e, {
              ref: t,
              className: Object(c.a)(e.className, "TextButton"),
            })
          );
        });
      function x(e) {
        return o.createElement(
          T,
          null,
          o.createElement(
            B,
            {
              onClick: e.onOK,
              disabled: e.bOKDisabled,
              autoFocus: "primary" == e.focusButton,
            },
            e.strOKText || Object(u.f)("#Button_Confirm"),
            " "
          ),
          o.createElement(
            P,
            { onClick: e.onCancel, autoFocus: "secondary" == e.focusButton },
            e.strCancelText || Object(u.f)("#Button_Cancel")
          )
        );
      }
      function k(e) {
        return o.createElement(
          y,
          null,
          o.createElement(
            B,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(u.f)("#Button_Confirm"),
            " "
          ),
          o.createElement(
            B,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(u.f)("#Button_Update"),
            " "
          ),
          o.createElement(
            P,
            { onClick: e.onCancel },
            e.strCancelText || Object(u.f)("#Button_Cancel")
          )
        );
      }
      class j extends o.Component {
        constructor(e) {
          super(e), (this.state = { checked: e.checked, disabled: e.disabled });
        }
        componentDidUpdate(e) {
          this.props.controlled ||
            (e.checked != this.props.checked &&
              this.props.checked != this.state.checked &&
              this.setState({ checked: this.props.checked })),
            e.disabled != this.props.disabled &&
              this.props.disabled != this.state.disabled &&
              this.setState({ disabled: this.props.disabled });
        }
        shouldComponentUpdate(e, t) {
          return (
            e.label != this.props.label ||
            e.description != this.props.description ||
            e.onChange != this.props.onChange ||
            e.controlled != this.props.controlled ||
            e.disabled != this.props.disabled ||
            t.disabled != this.state.disabled ||
            e.checked != this.checked ||
            t.checked != this.state.checked
          );
        }
        get checked() {
          return this.props.controlled
            ? this.props.checked
            : this.state.checked;
        }
        GetPanelElementProps() {
          const e = this.props,
            {
              onChange: t,
              checked: n,
              label: o,
              description: s,
              tabIndex: r,
              disabled: a,
              className: l,
              tooltip: c,
              color: u,
              highlightColor: d,
              bottomSeparator: h,
              controlled: m,
            } = e,
            p = Object(i.c)(e, [
              "onChange",
              "checked",
              "label",
              "description",
              "tabIndex",
              "disabled",
              "className",
              "tooltip",
              "color",
              "highlightColor",
              "bottomSeparator",
              "controlled",
            ]);
          return Object.assign(Object.assign({}, p), {
            tabIndex: r || 0,
            onActivate: this.Toggle,
            onKeyDown: this.KeyDown,
          });
        }
        Toggle() {
          if (this.props.disabled) return;
          let e = !this.checked;
          this.props.controlled || this.setState({ checked: e }),
            this.props.onChange && this.props.onChange(e);
        }
        KeyDown(e) {
          32 == e.keyCode &&
            (this.Toggle(), e.preventDefault(), e.stopPropagation());
        }
        SetChecked(e, t) {
          this.setState({ checked: e }),
            t && this.props.onChange && this.props.onChange(e);
        }
      }
      Object(i.b)([d.a], j.prototype, "Toggle", null),
        Object(i.b)([d.a], j.prototype, "KeyDown", null),
        Object(i.b)([d.a], j.prototype, "SetChecked", null);
      class G extends j {
        render() {
          let e = "DialogCheckbox" + (this.checked ? " Active" : "");
          return (
            1 == this.state.disabled && (e += " Disabled"),
            this.props.label
              ? o.createElement(
                  a.a,
                  Object.assign(
                    {
                      className:
                        "DialogCheckbox_Container _DialogLayout " +
                        (this.props.className ? this.props.className : ""),
                    },
                    this.GetPanelElementProps()
                  ),
                  o.createElement(
                    "div",
                    { className: e },
                    o.createElement(l.v, {
                      color: this.props.color,
                      highlightColor: this.props.highlightColor,
                    })
                  ),
                  o.createElement(
                    "div",
                    { className: "DialogToggle_Label" },
                    o.createElement("span", null, this.props.label),
                    this.props.tooltip &&
                      o.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      )
                  ),
                  o.createElement("div", { style: { clear: "left" } }),
                  this.props.description &&
                    o.createElement(
                      "div",
                      { className: "DialogToggle_Description" },
                      this.props.description
                    )
                )
              : o.createElement(
                  a.a,
                  Object.assign({ className: e }, this.GetPanelElementProps()),
                  o.createElement(l.v, null)
                )
          );
        }
      }
      class H extends j {
        render() {
          return o.createElement(
            g.a,
            Object.assign({ fallback: G }, this.props)
          );
        }
      }
      H.contextType = m;
      class W extends j {
        render() {
          let e = this.checked ? " Active" : "";
          return o.createElement(
            a.a,
            Object.assign(
              {
                className: Object(c.a)(
                  "DialogRoundCheckboxField_Container",
                  this.props.className,
                  this.props.label ? "WithLabel" : ""
                ),
              },
              this.GetPanelElementProps()
            ),
            o.createElement(
              "div",
              { className: "DialogRoundCheckboxField" },
              o.createElement(
                "div",
                { className: "DialogRoundCheckboxField_Control" + e },
                o.createElement(
                  "div",
                  { className: "DialogRoundCheckboxField_OuterCircle" },
                  o.createElement("div", {
                    className: "DialogRoundCheckboxField_InnerCircle",
                  })
                )
              )
            ),
            this.props.label &&
              o.createElement(
                "div",
                { className: "DialogToggle_Label" },
                o.createElement("span", null, this.props.label),
                this.props.tooltip &&
                  o.createElement(
                    "span",
                    { "data-tooltip-text": this.props.tooltip },
                    " (?)"
                  )
              )
          );
        }
      }
      const V = o.forwardRef(function (e, t) {
        const n = p();
        return o.createElement(
          g.a,
          Object.assign(
            { component: n.ToggleField, fallback: U, componentRef: t },
            e
          )
        );
      });
      class U extends j {
        OnOffKeyDown(e) {
          (37 == e.keyCode && this.checked) ||
          (39 == e.keyCode && !this.checked)
            ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
            : this.KeyDown(e);
        }
        OnNewUIToggle(e) {
          e !== this.checked && this.Toggle();
        }
        render() {
          let e =
            "DialogToggleField _DialogInputContainer _DialogLayout " +
            (this.props.className ? this.props.className : "");
          return (
            this.props.disabled && (e += " Disabled"),
            o.createElement(
              "div",
              {
                className: e,
                tabIndex: this.props.tabIndex || 0,
                onKeyDown: this.OnOffKeyDown,
              },
              o.createElement(
                "div",
                { className: "displayColumn alignSelfCenter" },
                o.createElement(
                  "div",
                  { className: "DialogToggle_Label" },
                  o.createElement("span", null, this.props.label),
                  this.props.tooltip &&
                    o.createElement(
                      "span",
                      { "data-tooltip-text": this.props.tooltip },
                      " (?)"
                    )
                ),
                this.props.description &&
                  o.createElement(
                    "div",
                    { className: "DialogToggle_Description" },
                    this.props.description
                  ),
                this.props.children
              ),
              this.props.useToggleRail
                ? o.createElement(
                    "div",
                    { className: "DialogToggleField_NewUIContainer" },
                    o.createElement(f, {
                      onChange: this.OnNewUIToggle,
                      value: this.checked,
                    })
                  )
                : o.createElement(
                    "div",
                    {
                      className: "DialogToggleField_Control",
                      onClick: this.Toggle,
                    },
                    o.createElement(
                      a.a,
                      {
                        className: "DialogToggleField_OptionPanel",
                        onOKButton: this.Toggle,
                      },
                      o.createElement(
                        "div",
                        {
                          className:
                            "DialogToggleField_Option Off" +
                            (this.checked ? "" : " Active"),
                        },
                        Object(u.f)("#Dialog_Off")
                      ),
                      o.createElement(
                        "div",
                        {
                          className:
                            "DialogToggleField_Option On" +
                            (this.checked ? " Active" : ""),
                        },
                        Object(u.f)("#Dialog_On")
                      )
                    )
                  )
            )
          );
        }
      }
      Object(i.b)([d.a], U.prototype, "OnOffKeyDown", null),
        Object(i.b)([d.a], U.prototype, "OnNewUIToggle", null);
      var K = n("hCpY"),
        Y = n("i8i4"),
        X = n("rSrx"),
        z = n("xHQ9");
      class q extends z.a {
        constructor(e, t, n) {
          super(X.n(Y.findDOMNode(e)), n),
            (this.m_props = {}),
            (this.m_component = e),
            (this.m_propTargets = t),
            (this.m_setStateOnComplete = n.setStateOnComplete);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_component.state[e]) || 0,
              n = this.m_propTargets[e];
            t != n && (this.m_props[e] = { start: t, end: n });
          }
          super.Start();
        }
        Update(e) {
          let t = {};
          for (let n in this.m_props) {
            let i = this.m_props[n],
              o = i.start + (i.end - i.start) * e;
            t[n] = o;
          }
          this.m_component.setState(t);
        }
        FireOnComplete() {
          super.FireOnComplete(),
            this.m_setStateOnComplete &&
              this.m_component.setState(this.m_setStateOnComplete);
        }
      }
      var $ = n("f5iL");
      const Q = o.forwardRef(function (e, t) {
        const n = p();
        return o.createElement(
          g.a,
          Object.assign(
            {
              component: null == n ? void 0 : n.InputElement,
              fallback: "input",
            },
            e,
            { componentRef: t }
          )
        );
      });
      class Z extends o.PureComponent {
        constructor(e) {
          super(e),
            this.CheckProps(e),
            (this.state = {
              m_CopiedYPos: 0,
              m_bPlayingCopiedAnimation: !1,
              m_bCompletedCopiedAnimation: !1,
              m_bNumberBelowMinRange: !1,
              m_bNumberAboveMaxRange: !1,
              m_bIsNotNumeric: !1,
              m_bIsInvalidURL: !1,
              m_bIsInvalidEmail: !1,
            });
        }
        componentDidUpdate(e) {
          this.CheckProps(this.props);
        }
        OnInputRef(e) {
          (this.m_elInput = e),
            this.m_elInput && this.props.focusOnMount && this.m_elInput.focus();
        }
        get element() {
          return this.m_elInput;
        }
        get value() {
          return this.m_elInput && this.m_elInput.value;
        }
        static validateUrl(e) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
            e
          );
        }
        static validateEmail(e) {
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            e.toLowerCase()
          );
        }
        Validate() {
          this.setState({
            m_bNumberBelowMinRange:
              null !== this.props.rangeMin &&
              void 0 !== this.props.rangeMin &&
              Number(this.m_elInput.value) < this.props.rangeMin,
            m_bNumberAboveMaxRange:
              null !== this.props.rangeMax &&
              void 0 !== this.props.rangeMax &&
              Number(this.m_elInput.value) > this.props.rangeMax,
            m_bIsNotNumeric:
              1 == this.props.mustBeNumeric &&
              isNaN(Number(this.m_elInput.value)),
            m_bIsInvalidURL:
              1 == this.props.mustBeURL && !Z.validateUrl(this.m_elInput.value),
            m_bIsInvalidEmail:
              1 == this.props.mustBeEmail &&
              !Z.validateEmail(this.m_elInput.value),
          });
        }
        OnChanged(e) {
          this.props.onChange && this.props.onChange(e), this.Validate();
        }
        OnCopyClick(e) {
          if (!this.m_elInput) return;
          this.m_elInput.select();
          let t = this.m_elInput.ownerDocument;
          if (t.queryCommandEnabled("copy")) {
            t.execCommand("copy"),
              e.currentTarget.focus(),
              this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
            let n = -4,
              i = -24;
            this.setState({ m_bCompletedCopiedAnimation: !1 }),
              this.setState({ m_CopiedYPos: n }, () => {
                (this.m_CopiedAnimation = new q(
                  this,
                  { m_CopiedYPos: i },
                  {
                    msDuration: 300,
                    timing: "sine",
                    setStateOnComplete: { m_bCompletedCopiedAnimation: !0 },
                  }
                )),
                  this.m_CopiedAnimation.Start();
              });
          }
        }
        OnClearClick(e) {
          if (this.m_elInput && this.m_elInput.value) {
            Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "value"
            ).set.call(this.m_elInput, ""),
              this.m_elInput.dispatchEvent(new Event("input", { bubbles: !0 }));
          }
        }
        CheckProps(e) {
          Object($.a)(
            !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
            "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input."
          );
        }
        render() {
          const e = this.props,
            {
              label: t,
              description: n,
              requiredLabel: s,
              bShowCopyAction: r,
              bShowClearAction: c,
              bAlwaysShowClearAction: d,
              bIsPassword: h,
              rangeMin: m,
              rangeMax: p,
              mustBeNumeric: g,
              mustBeURL: b,
              mustBeEmail: _,
              focusOnMount: f,
              tooltip: v,
              inlineControls: C,
            } = e,
            O = Object(i.c)(e, [
              "label",
              "description",
              "requiredLabel",
              "bShowCopyAction",
              "bShowClearAction",
              "bAlwaysShowClearAction",
              "bIsPassword",
              "rangeMin",
              "rangeMax",
              "mustBeNumeric",
              "mustBeURL",
              "mustBeEmail",
              "focusOnMount",
              "tooltip",
              "inlineControls",
            ]);
          let D =
              "DialogInput DialogInputPlaceholder DialogTextInputBase" +
              (O.className ? " " + O.className : ""),
            S = "copiedAnimation",
            E = this.state.m_bCompletedCopiedAnimation;
          this.m_CopiedAnimation && (S = "copiedAnimation animationPlaying"),
            E && (S = "copiedAnimation animationComplete");
          let w = {};
          void 0 !== this.state.m_CopiedYPos &&
            (w.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
          let I = o.createElement(
            o.Fragment,
            null,
            o.createElement(
              a.a,
              {
                className: "DialogInput_Wrapper _DialogLayout",
                "flow-children": "row",
              },
              o.createElement(
                Q,
                Object.assign({ type: h ? "password" : "text" }, O, {
                  className: D,
                  ref: this.OnInputRef,
                  onChange: this.OnChanged,
                })
              ),
              r &&
                o.createElement(
                  "div",
                  { className: "displayRow" },
                  o.createElement(
                    P,
                    {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                    },
                    Object(u.f)("#Button_CopyLink")
                  ),
                  o.createElement(
                    "div",
                    { style: w, className: S },
                    "Link Copied"
                  )
                ),
              (d || (c && O.value)) &&
                o.createElement(
                  "div",
                  {
                    className: "DialogInput_ClearAction",
                    onClick: this.OnClearClick,
                  },
                  o.createElement(l.Gb, null)
                ),
              C
            ),
            n &&
              o.createElement("div", { className: "DialogLabelExplainer" }, n)
          );
          return t
            ? o.createElement(
                "div",
                { className: "DialogInputLabelGroup _DialogLayout " },
                o.createElement(
                  "label",
                  null,
                  o.createElement(
                    "div",
                    { className: "DialogLabel" },
                    t,
                    " ",
                    this.props.tooltip &&
                      o.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      ),
                    o.createElement(
                      "span",
                      { className: "DialogInputRequirementLabel" },
                      this.props.requiredLabel
                    ),
                    " "
                  ),
                  I,
                  this.state.m_bNumberBelowMinRange
                    ? o.createElement(
                        "div",
                        null,
                        " ",
                        Object(u.f)("#Input_Error_NumberTooSmall"),
                        " "
                      )
                    : null,
                  this.state.m_bNumberAboveMaxRange
                    ? o.createElement(
                        "div",
                        null,
                        " ",
                        Object(u.f)("#Input_Error_NumberTooLarge"),
                        " "
                      )
                    : null,
                  this.state.m_bIsInvalidURL
                    ? o.createElement(
                        "div",
                        null,
                        " ",
                        Object(u.f)("#Input_Error_MustBeURL"),
                        " "
                      )
                    : null,
                  this.state.m_bIsInvalidEmail
                    ? o.createElement(
                        "div",
                        null,
                        " ",
                        Object(u.f)("#Input_Error_MustBeEmail"),
                        " "
                      )
                    : null,
                  this.state.m_bIsNotNumeric
                    ? o.createElement(
                        "div",
                        null,
                        " ",
                        Object(u.f)("#Input_Error_MustBeNumber"),
                        " "
                      )
                    : null
                )
              )
            : I;
        }
      }
      Object(i.b)([K.b], Z.prototype, "OnInputRef", null),
        Object(i.b)([K.b], Z.prototype, "OnChanged", null),
        Object(i.b)([K.b], Z.prototype, "OnCopyClick", null),
        Object(i.b)([K.b], Z.prototype, "OnClearClick", null);
      class J extends Z {
        OnBackgroundClick() {
          this.m_elInput && this.m_elInput.focus();
        }
        OnInputFocus(e) {
          this.m_bFocused || ((this.m_bFocused = !0), this.forceUpdate()),
            this.props.onFocus && this.props.onFocus(e);
        }
        OnInputBlur(e) {
          this.m_bFocused && ((this.m_bFocused = !1), this.forceUpdate()),
            this.props.onBlur && this.props.onBlur(e);
        }
        render() {
          const e = this.props,
            { label: t, description: n, children: s, className: l } = e,
            c = Object(i.c)(e, [
              "label",
              "description",
              "children",
              "className",
            ]);
          return o.createElement(
            "div",
            {
              className:
                "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
            },
            o.createElement(
              "label",
              null,
              t && o.createElement("div", { className: "DialogLabel" }, t),
              o.createElement(
                "div",
                {
                  className:
                    "_DialogInputContainer" +
                    (this.m_bFocused ? " Active" : ""),
                  onClick: this.OnBackgroundClick,
                },
                o.createElement(
                  a.a,
                  {
                    className: "DialogListBuilderInput_List",
                    "flow-children": "row",
                  },
                  o.Children.map(s, (e, t) =>
                    o.createElement(
                      "div",
                      { className: "DialogListBuilderInput_ListItem", key: t },
                      e
                    )
                  ),
                  o.createElement(
                    r.f,
                    Object.assign({ type: "text" }, c, {
                      className:
                        "DialogListBuilderInput_Input DialogInputPlaceholder",
                      ref: this.OnInputRef,
                      onFocus: this.OnInputFocus,
                      onBlur: this.OnInputBlur,
                      size: 4,
                    })
                  )
                )
              ),
              n &&
                o.createElement("div", { className: "DialogLabelExplainer" }, n)
            )
          );
        }
      }
      Object(i.b)([K.b], J.prototype, "OnBackgroundClick", null),
        Object(i.b)([K.b], J.prototype, "OnInputFocus", null),
        Object(i.b)([K.b], J.prototype, "OnInputBlur", null);
      const ee = (e) =>
          "" + (null != e ? Number.parseFloat(e.toFixed(2)) : null),
        te = (e) => {
          const t = p();
          return o.createElement(
            g.a,
            Object.assign({ component: t.SliderField, fallback: ne }, e)
          );
        };
      class ne extends o.Component {
        constructor(e) {
          super(e), (this.m_flLastSetValue = null);
        }
        ClampValue(e) {
          return void 0 === e || isNaN(e) || e < this.props.min
            ? this.props.min
            : e > this.props.max
            ? this.props.max
            : e;
        }
        BPropsValid() {
          return this.props.max > this.props.min;
        }
        OnMouseDown(e) {
          (this.m_elSlider = e.currentTarget),
            (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
            this.AdjustSliderForClientX(e.clientX),
            this.m_elSlider.ownerDocument.defaultView.addEventListener(
              "mousemove",
              this.OnMouseMove
            ),
            this.m_elSlider.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp
            );
        }
        OnMouseMove(e) {
          this.AdjustSliderForClientX(e.clientX);
        }
        OnMouseUp(e) {
          this.m_elSlider.ownerDocument.defaultView.removeEventListener(
            "mousemove",
            this.OnMouseMove
          ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.CompleteChange();
        }
        OnTouchStart(e) {
          (this.m_elSlider = e.currentTarget),
            (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
            this.AdjustSliderForClientX(e.touches[0].clientX),
            this.m_elSlider.ownerDocument.defaultView.addEventListener(
              "touchmove",
              this.OnTouchMove
            ),
            this.m_elSlider.ownerDocument.defaultView.addEventListener(
              "touchend",
              this.OnTouchEnd
            );
        }
        OnTouchMove(e) {
          this.AdjustSliderForClientX(e.touches[0].clientX);
        }
        OnTouchEnd(e) {
          this.m_elSlider.ownerDocument.defaultView.removeEventListener(
            "touchmove",
            this.OnTouchMove
          ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "touchend",
              this.OnTouchEnd
            ),
            this.CompleteChange();
        }
        OnKeyDown(e) {
          let t = 1;
          e.ctrlKey &&
            (t = Math.max(
              1,
              Math.floor(0.1 * (this.props.max - this.props.min) + 0.5)
            )),
            37 == e.keyCode
              ? (this.IncrementValue(-1 * t), e.preventDefault())
              : 39 == e.keyCode &&
                (this.IncrementValue(1 * t), e.preventDefault()),
            this.CompleteChange();
        }
        AdjustSliderForClientX(e) {
          let t =
            ((e - this.m_rectSlider.left) /
              (this.m_rectSlider.right - this.m_rectSlider.left)) *
              (this.props.max - this.props.min) +
            this.props.min;
          t = Math.floor(t + 0.5);
          let n = this.ClampValue(t);
          n != this.props.value &&
            (this.props.onChange && this.props.onChange(n),
            (this.m_flLastSetValue = n));
        }
        CompleteChange() {
          null != this.m_flLastSetValue &&
            (this.props.onChangeComplete &&
              this.props.onChangeComplete(this.m_flLastSetValue),
            (this.m_flLastSetValue = null));
        }
        IncrementValue(e) {
          let t = this.ClampValue(this.props.value + e);
          t != this.props.value &&
            (this.props.onChange && this.props.onChange(t),
            (this.m_flLastSetValue = t));
        }
        render() {
          var e;
          let t = {},
            n = {};
          if (this.BPropsValid()) {
            let e =
              (100 * (this.props.value - this.props.min)) /
                (this.props.max - this.props.min) +
              "%";
            (t.width = e), (n.left = e);
          }
          const s = this.props,
            { label: r, description: a, tooltip: l } = s,
            c =
              (Object(i.c)(s, ["label", "description", "tooltip"]),
              null !== (e = this.props.renderValue) && void 0 !== e ? e : ee);
          return o.createElement(
            "div",
            {
              className:
                "DialogSlider_Container _DialogInputContainer _DialogLayout" +
                (this.props.className ? " " + this.props.className : ""),
              onKeyDown: this.OnKeyDown,
              tabIndex: this.props.tabIndex || 0,
            },
            r &&
              o.createElement(
                "div",
                { className: "DialogLabel" },
                r,
                Boolean(l) &&
                  o.createElement("span", { "data-tooltip-text": l }, " (?)")
              ),
            o.createElement(
              "div",
              {
                className: "DialogSlider_Slider",
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              },
              o.createElement("div", {
                className: "DialogSlider_Value",
                style: t,
              }),
              o.createElement("div", {
                className: "DialogSlider_Grabber",
                style: n,
              })
            ),
            this.props.showValue &&
              o.createElement(
                "div",
                { className: "DialogLabelExplainer" },
                c(this.props.value),
                " ",
                this.props.valueSuffix
              ),
            a &&
              o.createElement("div", { className: "DialogLabelExplainer" }, a)
          );
        }
      }
      Object(i.b)([K.b], ne.prototype, "OnMouseDown", null),
        Object(i.b)([K.b], ne.prototype, "OnMouseMove", null),
        Object(i.b)([K.b], ne.prototype, "OnMouseUp", null),
        Object(i.b)([K.b], ne.prototype, "OnTouchStart", null),
        Object(i.b)([K.b], ne.prototype, "OnTouchMove", null),
        Object(i.b)([K.b], ne.prototype, "OnTouchEnd", null),
        Object(i.b)([K.b], ne.prototype, "OnKeyDown", null);
      n("pkWl");
      s.a.createContext({ setValue: () => {} });
      var ie = n("pC2t"),
        oe = n("SS8s"),
        se = n("S66T"),
        re = n.n(se),
        ae = n("xoHR"),
        le = n("vail"),
        ce = n.n(le),
        ue = n("/Q1a"),
        de = n("a/Rh");
      function he(e) {
        return "object" == typeof e && "data" in e;
      }
      function me(e) {
        return "object" == typeof e && "options" in e;
      }
      function pe(e, t) {
        if (e === t) return !0;
        if (!Array.isArray(e) || !Array.isArray(t)) return !1;
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!ge(e[n], t[n])) return !1;
        return !0;
      }
      function ge(e, t) {
        return null == e || null == t
          ? e == t
          : e.label === t.label &&
              e.tooltip === t.tooltip &&
              me(e) == me(t) &&
              !(me(e) && me(t) && !pe(e.options, t.options)) &&
              (!he(e) || !he(t) || e.data === t.data);
      }
      function be(e, t) {
        if (null != e)
          for (let n = 0; n < e.length; n++) {
            const i = e[n];
            if (he(i) && i.data === t) return i;
            if (me(i)) {
              const e = be(i.options, t);
              if (null != e) return e;
            }
          }
      }
      function _e(e) {
        const t = p();
        return o.createElement(
          g.a,
          Object.assign({ component: t.DropDownField, fallback: fe }, e)
        );
      }
      function fe(e) {
        const {
            label: t,
            tooltip: n,
            strClassName: s,
            dropDownControlRef: r,
          } = e,
          a = Object(i.c)(e, [
            "label",
            "tooltip",
            "strClassName",
            "dropDownControlRef",
          ]);
        return o.createElement(
          "div",
          {
            className: Object(c.a)("DialogInputLabelGroup", "_DialogLayout", s),
          },
          t &&
            o.createElement(
              "div",
              { className: "DialogLabel" },
              t,
              n && o.createElement("span", { "data-tooltip-text": n }, " (?)")
            ),
          o.createElement(Oe, Object.assign({ menuLabel: t }, a, { ref: r }))
        );
      }
      const ve = o.forwardRef(function (e, t) {
          const n = p();
          return o.createElement(
            g.a,
            Object.assign(
              {
                component: n.DropDownControlButton,
                fallback: Ce,
                componentRef: t,
              },
              e
            )
          );
        }),
        Ce = o.forwardRef(function (e, t) {
          return o.createElement(
            a.a,
            {
              focusable: e.focusable,
              noFocusRing: !0,
              className: Object(c.a)(
                e.className,
                "DialogDropDown",
                "_DialogInputContainer",
                { Active: e.opened, Disabled: e.disabled }
              ),
              tabIndex: e.tabIndex,
              onClick: e.onClick,
              ref: t,
            },
            e.children,
            !e.disabled &&
              o.createElement(
                "div",
                { className: "DialogDropDown_Arrow" },
                o.createElement(l.y, null)
              )
          );
        });
      class Oe extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              value: be(e.rgOptions, e.selectedOption),
              bOpened: !1,
            });
        }
        SetSelectedOption(e) {
          const t = be(this.props.rgOptions, e);
          ge(t, this.state.value) || this.setState({ value: t });
        }
        get value() {
          return this.state.value;
        }
        shouldComponentUpdate(e, t, n) {
          if (e.selectedOption !== this.props.selectedOption) return !0;
          if (e.disabled != this.props.disabled) return !0;
          if (t.bOpened !== this.state.bOpened) return !0;
          if (!pe(this.props.rgOptions, e.rgOptions)) return !0;
          if (!ge(t.value, this.state.value)) return !0;
          let i = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
          for (let t of i) if (e[t] !== this.props[t]) return !0;
          return !1;
        }
        componentDidUpdate(e, t) {
          const n = !pe(e.rgOptions, this.props.rgOptions),
            i = e.selectedOption !== this.props.selectedOption,
            o = this.state.value !== t.value;
          (n || o || i) &&
            (i || null == this.state.value
              ? this.SetSelectedOption(this.props.selectedOption)
              : this.SetSelectedOption(this.state.value.data)),
            (n || o) &&
              (this.state.bOpened
                ? (this.m_iMenuInstance.SetOnHideCallback(null),
                  this.m_iMenuInstance.Hide(),
                  (this.m_iMenuInstance = void 0),
                  this.BuildMenu())
                : this.m_iMenuInstance &&
                  (this.m_iMenuInstance.SetOnHideCallback(null),
                  (this.m_iMenuInstance = void 0)));
        }
        OnInputRef(e) {
          this.m_elInput = e;
        }
        get element() {
          return this.m_elInput;
        }
        ToggleMenu() {
          if (this.state.bOpened) this.HideMenu();
          else {
            if (
              this.props.onMenuWillOpen &&
              0 == this.props.onMenuWillOpen(this.ShowMenu)
            )
              return;
            this.ShowMenu();
          }
        }
        OnValueSelected(e) {
          this.HideMenu(),
            this.setState({ value: e }),
            this.props.onChange && this.props.onChange(e, this);
        }
        BuildMenu() {
          var e, t, n;
          let i = "DialogMenuPosition";
          this.props.strDropDownClassName &&
            (i += " " + this.props.strDropDownClassName);
          let s = Object.assign(
              {
                bOverlapHorizontal: !0,
                bMatchWidth: !0,
                bFitToWindow: !0,
                strClassName: i,
                bDisableMouseOverlay: this.props.bDisableMouseOverlay,
              },
              this.props.contextMenuPositionOptions
            ),
            r =
              null === (e = this.props.contextMenuPositionOptions) ||
              void 0 === e
                ? void 0
                : e.onCancel;
          (this.m_iMenuInstance = Object(ie.a)(
            o.createElement(Se, {
              rgOptions: this.props.rgOptions,
              onValueSelected: this.OnValueSelected,
              onCancel: r,
              selectedValue:
                null === (t = this.value) || void 0 === t ? void 0 : t.data,
              strDropDownItemClassName: this.props.strDropDownItemClassName,
            }),
            this.m_elInput,
            s
          )),
            this.m_iMenuInstance.SetLabel(
              null !== (n = this.props.menuLabel) && void 0 !== n
                ? n
                : "string" == typeof this.props.strDefaultLabel &&
                    this.props.strDefaultLabel
            ),
            this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
        }
        ShowMenu() {
          this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
            this.props.onMenuOpened && this.props.onMenuOpened(),
            this.setState({ bOpened: !0 });
        }
        HideMenu() {
          var e;
          this.m_iMenuInstance &&
            (this.m_iMenuInstance.Hide(),
            ue.d.IN_GAMEPADUI &&
              (null === (e = de.a.Get()) ||
                void 0 === e ||
                e.ReopenPreModalSideMenu())),
            this.setState({ bOpened: !1 });
        }
        render() {
          var e, t, n, i, s;
          const r = o.createElement(
              "div",
              { className: "DialogDropDown_CurrentDisplay" },
              null !==
                (t =
                  null === (e = this.state.value) || void 0 === e
                    ? void 0
                    : e.label) && void 0 !== t
                ? t
                : this.props.strDefaultLabel
            ),
            a =
              null != this.props.renderButtonValue
                ? this.props.renderButtonValue(r)
                : r,
            l = null === (n = this.props.focusable) || void 0 === n || n;
          return o.createElement(
            g.a,
            {
              component: this.props.renderButton,
              fallback: ve,
              focusable: l,
              disabled: null !== (i = this.props.disabled) && void 0 !== i && i,
              opened: this.state.bOpened,
              onClick: this.props.disabled ? void 0 : this.ToggleMenu,
              tabIndex:
                null !== (s = this.props.tabIndex) && void 0 !== s
                  ? s
                  : l
                  ? 0
                  : null,
              componentRef: this.OnInputRef,
              className: this.props.strDropDownButtonClassName,
            },
            a
          );
        }
      }
      (Oe.contextType = m),
        Object(i.b)([K.b], Oe.prototype, "OnInputRef", null),
        Object(i.b)([K.b], Oe.prototype, "ToggleMenu", null),
        Object(i.b)([K.b], Oe.prototype, "OnValueSelected", null),
        Object(i.b)([K.b], Oe.prototype, "ShowMenu", null),
        Object(i.b)([K.b], Oe.prototype, "HideMenu", null);
      const De = o.createContext(null);
      function Se(e) {
        const t = p();
        return o.createElement(
          De.Provider,
          { value: {} },
          o.createElement(
            g.a,
            Object.assign({ component: t.DropDownMenu, fallback: Ee }, e)
          )
        );
      }
      function Ee(e) {
        var t;
        const n = [e.rgOptions],
          i = [];
        for (; n.length > 0; )
          null === (t = n.shift()) ||
            void 0 === t ||
            t.forEach((t, s) => {
              he(t)
                ? i.push(
                    o.createElement(
                      "div",
                      {
                        key: s,
                        className: Object(c.a)(
                          re.a.DialogDropDownMenu_Item,
                          e.strDropDownItemClassName,
                          t.strOptionClass
                        ),
                        "data-dropdown-index": s,
                        onClick: () =>
                          e.onValueSelected && e.onValueSelected(t),
                      },
                      Boolean(t.tooltip)
                        ? o.createElement(
                            ae.a,
                            {
                              toolTipContent: t.tooltip,
                              strTooltipClassname: ce.a.HoverAboveModal,
                            },
                            t.label
                          )
                        : o.createElement(o.Fragment, null, t.label)
                    )
                  )
                : me(t) && n.push(t.options);
            });
        return o.createElement(
          "div",
          {
            className: Object(c.a)(
              re.a.DialogDropDownMenu,
              "_DialogInputContainer"
            ),
          },
          i
        );
      }
      class we extends o.Component {
        constructor() {
          super(...arguments), (this.state = { rgOptions: void 0 });
        }
        OnMenuOpened() {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (!this.state.rgOptions) {
              let e = yield this.props.fnLoadOptions();
              this.setState({ rgOptions: e });
            }
          });
        }
        render() {
          const e = this.props,
            { fnLoadOptions: t, strInitialDisplay: n, initialValue: s } = e,
            r = Object(i.c)(e, [
              "fnLoadOptions",
              "strInitialDisplay",
              "initialValue",
            ]);
          let { rgOptions: a } = this.state;
          return (
            void 0 === a &&
              (n || s
                ? ((a = [{ label: n, data: s }]), (r.selectedOption = s))
                : (a = [])),
            o.createElement(
              _e,
              Object.assign({}, r, {
                rgOptions: a,
                onMenuOpened: this.OnMenuOpened,
              })
            )
          );
        }
      }
      Object(i.b)([K.b], we.prototype, "OnMenuOpened", null);
      n("ViTr");
      var Ie = n("2vnA"),
        Re = n("iRfV"),
        Te = n("ApMK"),
        ye = n("7VqR");
      class Ne extends o.Component {
        constructor() {
          super(...arguments), (this.m_coordinator = new Me());
        }
        OnDrop(e, t) {
          t > e && t--, t != e && this.props.onReorder(e, t);
        }
        render() {
          let e = [];
          return (
            e.push(
              o.createElement(xe, {
                coordinator: this.m_coordinator,
                key: "dropregion_top",
                fnBAcceptDraggable: (e) => 0 != e.props.data,
                fnOnDrop: (e) => this.OnDrop(e.props.data, 0),
              })
            ),
            o.Children.forEach(this.props.children, (t, n) => {
              const i = t.props.id || "__list_" + n,
                s = n + 1;
              e.push(
                o.createElement(
                  Fe,
                  { coordinator: this.m_coordinator, data: n, key: i },
                  t
                )
              ),
                e.push(
                  o.createElement(xe, {
                    coordinator: this.m_coordinator,
                    key: "dropregion_" + i,
                    fnBAcceptDraggable: (e) => e.props.data != s,
                    fnOnDrop: (e) => this.OnDrop(e.props.data, s),
                  })
                );
            }),
            o.createElement("div", { className: "DialogReorderableList" }, e)
          );
        }
      }
      function Le(e, t, n, i) {
        return i
          ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
          : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
      }
      Object(i.b)([K.b], Ne.prototype, "OnDrop", null);
      class Me {
        constructor() {
          (this.m_embeddedElement = new Re.a("DragGhosts")),
            (this.m_rgDropRegions = []),
            (this.m_rgActiveDropRegions = []);
        }
        RegisterDropRegion(e) {
          this.m_rgDropRegions.push(e),
            this.m_activeDraggable &&
              e.BAcceptDraggable(this.m_activeDraggable) &&
              (e.OnDragStarted(this.m_activeDraggable),
              this.m_rgActiveDropRegions.push(e));
        }
        UnregisterDropRegion(e) {
          Te.b(this.m_rgDropRegions, e),
            Te.b(this.m_rgActiveDropRegions, e),
            this.m_activeDropRegion == e &&
              ((this.m_activeDropRegion = void 0),
              this.m_activeDraggable && this.ShowDragGhost());
        }
        OnDragGhostRef(e) {
          this.m_dragGhost = e;
        }
        ShowDragGhost() {
          const e = this.m_activeDraggable.renderDragGhost(),
            t = Object(c.a)(
              e.props.className,
              !!this.m_activeDropRegion && "DraggedOverActiveDrop"
            ),
            n = o.cloneElement(e, { ref: this.OnDragGhostRef, className: t });
          this.m_embeddedElement.ShowElement(
            this.m_activeDraggable.GetDragDocument(),
            n,
            this.m_activeDraggable
          );
        }
        HideDragGhost() {
          this.m_embeddedElement.HideElement(
            this.m_activeDraggable.GetDragDocument(),
            this.m_activeDraggable
          );
        }
        OnDragStart(e) {
          (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
          for (let t of this.m_rgDropRegions)
            t.BAcceptDraggable(e) &&
              (t.OnDragStarted(e), this.m_rgActiveDropRegions.push(t));
          this.ShowDragGhost();
        }
        EndDrag() {
          if (this.m_activeDraggable) {
            this.HideDragGhost(),
              this.m_activeDropRegion &&
                this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
            for (let e of this.m_rgActiveDropRegions)
              e.OnDragEnded(this.m_activeDraggable);
            (this.m_activeDraggable = void 0),
              (this.m_dropGhost = void 0),
              (this.m_rgActiveDropRegions = []);
          }
        }
        FindBestActiveDropRegionForPoint(e, t) {
          const n = this.m_activeDraggable.GetDragDocument();
          let i;
          if ("elementsFromPoint" in n) i = n.elementsFromPoint(e, t);
          else if ("msElementsFromPoint" in n) {
            const o = n.msElementsFromPoint;
            i = Array.from(o(e, t));
          }
          if (i) {
            const e = new Map();
            this.m_rgActiveDropRegions.forEach((t) => e.set(t.GetElement(), t));
            for (const t of i) {
              const n = e.get(t);
              if (n) return n;
            }
          } else {
            if (
              this.m_activeDropRegion &&
              this.m_activeDropRegion.BDraggableInRegion(
                e,
                t,
                this.m_activeDraggable
              )
            )
              return this.m_activeDropRegion;
            for (let n = this.m_rgActiveDropRegions.length - 1; n >= 0; n--) {
              const i = this.m_rgActiveDropRegions[n];
              if (i.BDraggableInRegion(e, t, this.m_activeDraggable)) return i;
            }
          }
          return null;
        }
        OnDrag(e, t, n) {
          const i = void 0 === t ? 0 : t - this.m_dragGhost.state.clientX,
            o = void 0 === n ? 0 : n - this.m_dragGhost.state.clientY;
          if (
            (e.props.bEnableHTMLDrag &&
              this.m_dragOffWindowTimer &&
              window.clearTimeout(this.m_dragOffWindowTimer),
            this.m_dragGhost &&
              (this.m_dragGhost.setState({
                clientX: t,
                clientY: n,
                clientXDelta: i,
                clientYDelta: o,
                bVisible: !0,
              }),
              e.props.bEnableHTMLDrag && (i || o)))
          ) {
            const s = t + i,
              r = n + o,
              a = e.GetDragDocument().body.getBoundingClientRect();
            if (Le(t, n, a) && !Le(s, r, a, !0)) {
              const t = ye.c(s, a.left, a.right, a.left - 200, a.right + 200),
                n = ye.c(r, a.top, a.bottom, a.top - 100, a.bottom + 100),
                i = 50;
              this.m_dragOffWindowTimer = window.setTimeout(() => {
                e == this.m_activeDraggable && this.OnDrag(e, t, n);
              }, i);
            }
          }
          const s = this.FindBestActiveDropRegionForPoint(t, n);
          !!this.m_activeDropRegion != !!s &&
            (this.ShowDragGhost(),
            this.m_dropGhost ||
              (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
            this.m_activeDropRegion &&
              this.m_activeDropRegion != s &&
              this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
            s &&
              this.m_activeDropRegion != s &&
              s.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
            (this.m_activeDropRegion = s),
            this.m_activeDropRegion &&
              this.m_activeDropRegion.OnDragMove(t, n, this.m_activeDraggable);
        }
      }
      Object(i.b)([K.b], Me.prototype, "OnDragGhostRef", null);
      class Fe extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_DragInfo = {
              bStarted: !1,
              startClientX: void 0,
              startClientY: void 0,
              startOffsetX: void 0,
              startOffsetY: void 0,
              startWidth: void 0,
              startHeight: void 0,
              ownerWin: void 0,
            }),
            (this.m_divRef = o.createRef());
        }
        GetDragDocument() {
          return this.m_DragInfo.ownerWin && this.m_DragInfo.ownerWin.document;
        }
        RecordDragStart(e, t, n) {
          (this.m_DragInfo.startClientX = t),
            (this.m_DragInfo.startClientY = n);
          let i = e.getBoundingClientRect();
          (this.m_DragInfo.startOffsetX = t - i.left),
            (this.m_DragInfo.startOffsetY = n - i.top),
            (this.m_DragInfo.startWidth = i.width),
            (this.m_DragInfo.startHeight = i.height),
            (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
        }
        ProcessDragMove(e) {
          const [t, n] = (function (e) {
            if ("touches" in e) {
              let t = e;
              return [t.touches[0].clientX, t.touches[0].clientY];
            }
            return [e.clientX, e.clientY];
          })(e);
          if (this.m_DragInfo.bStarted) {
            if (this.props.bEnableHTMLDrag && 0 == t && 0 == n) return;
            this.props.coordinator.OnDrag(this, t, n);
          } else
            Math.pow(t - this.m_DragInfo.startClientX, 2) +
              Math.pow(n - this.m_DragInfo.startClientY, 2) >=
              25 &&
              ((this.m_DragInfo.bStarted = !0),
              this.forceUpdate(),
              this.props.fnOnDragStart && this.props.fnOnDragStart(),
              this.props.coordinator.OnDragStart(this),
              this.props.coordinator.OnDrag(this, t, n));
        }
        OnMouseDown(e) {
          this.m_DragInfo.bStarted ||
            0 != e.button ||
            (this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
            this.m_DragInfo.ownerWin.addEventListener(
              "mousemove",
              this.ProcessDragMove
            ),
            this.m_DragInfo.ownerWin.addEventListener(
              "mouseup",
              this.OnMouseUp
            ));
        }
        OnMouseUp(e) {
          this.m_DragInfo.ownerWin.removeEventListener(
            "mousemove",
            this.ProcessDragMove
          ),
            this.m_DragInfo.ownerWin.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.ResetDragState();
        }
        OnTouchStart(e) {
          this.m_DragInfo.bStarted ||
            (this.RecordDragStart(
              e.currentTarget,
              e.touches[0].clientX,
              e.touches[0].clientY
            ),
            this.m_DragInfo.ownerWin.addEventListener(
              "touchmove",
              this.ProcessDragMove
            ),
            this.m_DragInfo.ownerWin.addEventListener(
              "touchend",
              this.OnTouchEnd
            ));
        }
        OnTouchEnd(e) {
          this.m_DragInfo.ownerWin.removeEventListener(
            "touchmove",
            this.ProcessDragMove
          ),
            this.m_DragInfo.ownerWin.removeEventListener(
              "touchend",
              this.OnTouchEnd
            ),
            this.ResetDragState();
        }
        ResetDragState() {
          this.m_DragInfo.bStarted &&
            (this.props.coordinator.EndDrag(),
            this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
            (this.m_DragInfo.bStarted = !1),
            (this.m_DragInfo.startClientX = void 0),
            (this.m_DragInfo.startClientY = void 0),
            (this.m_DragInfo.startOffsetX = void 0),
            (this.m_DragInfo.startOffsetY = void 0),
            (this.m_DragInfo.ownerWin = void 0),
            this.forceUpdate();
        }
        OnHTMLDragStart(e) {
          (e.dataTransfer.effectAllowed = "copyMove"),
            this.props.strHTMLDragData &&
              this.props.strHTMLDragData.forEach((t, n) =>
                e.dataTransfer.setData(n, t)
              ),
            e.dataTransfer.getData("text/plain") ||
              e.dataTransfer.setData("text/plain", this.props.data.toString());
          const t = new Image();
          e.dataTransfer.setDragImage(t, 0, 0),
            this.RecordDragStart(e.currentTarget, e.clientX, e.clientY);
        }
        OnHTMLDragEnd() {
          this.ResetDragState();
        }
        render() {
          const e = this.props,
            {
              coordinator: t,
              data: n,
              bEnableHTMLDrag: s,
              strHTMLDragData: r,
              fnOnDragStart: a,
              fnOnDragEnd: l,
              fnRenderDragGhost: u,
              fnRenderDropGhost: d,
              className: h,
              strActiveClassName: m,
              children: p,
            } = e,
            g = Object(i.c)(e, [
              "coordinator",
              "data",
              "bEnableHTMLDrag",
              "strHTMLDragData",
              "fnOnDragStart",
              "fnOnDragEnd",
              "fnRenderDragGhost",
              "fnRenderDropGhost",
              "className",
              "strActiveClassName",
              "children",
            ]);
          let b = {},
            _ = h || "DialogDraggable";
          return (
            this.m_DragInfo.bStarted
              ? ((_ = Object(c.a)(_, m || "DraggedOut")),
                s &&
                  (b = {
                    onDrag: this.ProcessDragMove,
                    onDragEnd: this.OnHTMLDragEnd,
                  }))
              : (b = s
                  ? {
                      onDragStart: this.OnHTMLDragStart,
                      onDrag: this.ProcessDragMove,
                      onDragEnd: this.OnHTMLDragEnd,
                    }
                  : {
                      onMouseDown: this.OnMouseDown,
                      onTouchStart: this.OnTouchStart,
                    }),
            o.createElement(
              "div",
              Object.assign({ ref: this.m_divRef, className: _ }, b, g, {
                draggable: s,
              }),
              p
            )
          );
        }
        renderDropGhost() {
          return this.props.fnRenderDropGhost
            ? this.props.fnRenderDropGhost()
            : o.createElement(Ae, { elContent: this.GetClone() });
        }
        renderDragGhost() {
          return this.props.fnRenderDragGhost
            ? this.props.fnRenderDragGhost()
            : o.createElement(Be, {
                elContent: this.GetClone(),
                offsetX: this.m_DragInfo.startOffsetX,
                offsetY: this.m_DragInfo.startOffsetY,
                width: this.m_DragInfo.startWidth,
                height: this.m_DragInfo.startHeight,
              });
        }
        GetClone() {
          const e = this.m_divRef.current;
          let t;
          if (e && e.childElementCount)
            if (1 == e.childElementCount) t = e.firstElementChild.cloneNode(!0);
            else {
              t = document.createElement("div");
              for (let n = e.firstChild; n; n = n.nextSibling)
                t.appendChild(n.cloneNode(!0));
            }
          return t;
        }
      }
      Object(i.b)([K.b], Fe.prototype, "ProcessDragMove", null),
        Object(i.b)([K.b], Fe.prototype, "OnMouseDown", null),
        Object(i.b)([K.b], Fe.prototype, "OnMouseUp", null),
        Object(i.b)([K.b], Fe.prototype, "OnTouchStart", null),
        Object(i.b)([K.b], Fe.prototype, "OnTouchEnd", null),
        Object(i.b)([Ie.k], Fe.prototype, "ResetDragState", null),
        Object(i.b)([K.b], Fe.prototype, "OnHTMLDragStart", null),
        Object(i.b)([K.b], Fe.prototype, "OnHTMLDragEnd", null);
      class Ae extends o.Component {
        OnRef(e) {
          e && e.appendChild(this.props.elContent);
        }
        render() {
          return o.createElement("div", {
            className: "DialogDraggable_DropGhost",
            ref: this.OnRef,
          });
        }
      }
      Object(i.b)([K.b], Ae.prototype, "OnRef", null);
      class Be extends o.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              clientX: void 0,
              clientY: void 0,
              bVisible: !0,
              clientXDelta: void 0,
              clientYDelta: void 0,
            });
        }
        OnRef(e) {
          e && e.appendChild(this.props.elContent);
        }
        CalculateRotationDegrees(e) {
          if (!e || Math.abs(e) < 4) return 0;
          return (e > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
        }
        render() {
          if (
            !this.state.bVisible ||
            void 0 === this.state.clientX ||
            void 0 === this.state.clientY
          )
            return o.createElement("div", null);
          let e = {
              left: this.state.clientX - (this.props.offsetX || 0),
              top: this.state.clientY - (this.props.offsetY || 0),
              width: this.props.width || "auto",
              height: this.props.height || "auto",
              perspective: "600px",
            },
            t = ye.c(
              this.CalculateRotationDegrees(this.state.clientYDelta),
              -90,
              90,
              2,
              0
            ),
            n = {
              transform: `rotateX(${this.CalculateRotationDegrees(
                -1 * this.state.clientYDelta
              )}deg) rotateY( ${this.CalculateRotationDegrees(
                this.state.clientXDelta
              )}deg)`,
              transition: "transform .16s ease-out, filter .16s ease-out",
              filter: "brightness(" + t + ")",
            };
          const i = this.props.className || "DialogDraggable_DragGhost";
          return o.createElement(
            "div",
            { className: i, style: e },
            o.createElement("div", { ref: this.OnRef, style: n })
          );
        }
      }
      Object(i.b)([K.b], Be.prototype, "OnRef", null);
      class Pe extends o.Component {
        constructor(e) {
          super(e), (this.m_divRef = o.createRef()), (this.state = {});
        }
        componentDidMount() {
          this.props.coordinator.RegisterDropRegion(this);
        }
        componentWillUnmount() {
          this.props.coordinator.UnregisterDropRegion(this);
        }
        OnDragStarted(e) {
          this.setState({ bDraggableActive: !0 });
        }
        OnDragEnded(e) {
          this.setState({ bDraggableActive: !1 });
        }
        OnDragEnter(e, t) {
          this.setState({ dropGhost: t }),
            this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
        }
        OnDragLeave(e) {
          this.setState({ dropGhost: void 0 }),
            this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
        }
        OnDragMove(e, t, n) {}
        OnDrop(e) {
          this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
        }
        BAcceptDraggable(e) {
          return (
            !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(e)
          );
        }
        BDraggableInRegion(e, t, n) {
          return Le(e, t, this.GetClientRect());
        }
        GetElement() {
          return this.m_divRef.current;
        }
        GetClientRect() {
          return (
            this.m_divRef.current &&
            this.m_divRef.current.getBoundingClientRect()
          );
        }
        render() {
          const e = this.props,
            {
              coordinator: t,
              fnBAcceptDraggable: n,
              fnOnDrop: s,
              fnOnDragEnter: a,
              fnOnDragLeave: l,
              className: u,
              strActiveClassName: d,
              children: h,
              focusable: m,
            } = e,
            p = Object(i.c)(e, [
              "coordinator",
              "fnBAcceptDraggable",
              "fnOnDrop",
              "fnOnDragEnter",
              "fnOnDragLeave",
              "className",
              "strActiveClassName",
              "children",
              "focusable",
            ]),
            g = Object(c.a)(
              u || "DialogDropRegion",
              this.state.bDraggableActive && (d || "Active")
            );
          return o.createElement(
            r.e,
            Object.assign({ ref: this.m_divRef, className: g }, p, {
              focusable: void 0 === m ? !!p.onClick : m,
            }),
            this.state.dropGhost,
            h
          );
        }
      }
      class xe extends Pe {
        BDraggableInRegion(e, t, n) {
          let i = this.GetClientRect();
          return (
            !!i &&
            e >= i.left &&
            e <= i.right &&
            t >= i.top - 20 &&
            t <= i.bottom + 20
          );
        }
      }
      n("nDaX");
      var ke = n("tXBB"),
        je = (n("hane"), n("MOFx")),
        Ge = n("+aRA"),
        He = n("JZ7l"),
        We = n.n(He),
        Ve = n("O8Yk");
      const Ue = "separator";
      function Ke(e) {
        return o.createElement(
          a.a,
          Object.assign({ navEntryPreferPosition: Ve.d.PREFERRED_CHILD }, e)
        );
      }
      function Ye(e) {
        const { title: t, icon: n, active: s } = e,
          r = Object(i.c)(e, ["title", "icon", "active"]);
        return o.createElement("div", Object.assign({}, r), t);
      }
      function Xe(e) {
        var t;
        const n =
          null !== (t = e.activePage.padding) && void 0 !== t ? t : "standard";
        return o.createElement(
          N,
          {
            className: Object(c.a)(
              e.stylesheet.PagedSettingsDialog_PageContent,
              e.activePage.pageClassName,
              { [e.stylesheet.NoPadding]: "none" == n }
            ),
          },
          e.activePage.header,
          !e.hideTitle && o.createElement(D, null, e.activePage.title),
          o.createElement(
            Ge.a,
            { errorKey: e.activePage.title },
            null != e.activePage.content && o.cloneElement(e.activePage.content)
          )
        );
      }
      const ze = o.forwardRef((e, t) => {
        var n, i;
        const s = null !== (n = e.stylesheet) && void 0 !== n ? n : We.a,
          r = e.pages,
          l =
            null != e.startingPage
              ? r.findIndex((t) => t != Ue && t.identifier === e.startingPage)
              : -1,
          u = null == e.page,
          [d, h] = o.useState(l);
        let m = d;
        u || (m = r.findIndex((t) => t != Ue && t.identifier === e.page)),
          (m < 0 || m >= r.length) && (m = 0);
        let p = null;
        r[m] != Ue && (p = r[m]);
        let b = (function (e) {
          let t = o.useRef(e),
            n = o.useRef("none"),
            i = t.current;
          if (i == e) return n.current;
          let s = "none";
          i < e ? (s = "down") : i > e && (s = "up");
          return (t.current = e), (n.current = s), s;
        })(m);
        const _ = o.useRef(),
          f = o.useCallback(() => _.current.TakeFocus(), [_]),
          v = r.map((t, n) => {
            if (t === Ue)
              return o.createElement(
                o.Fragment,
                { key: n },
                e.renderPageListSeparator({})
              );
            if (!1 === t.visible) return null;
            const i = t == p;
            return o.createElement(g.a, {
              component: e.renderPageListItem,
              fallback: Ye,
              className: Object(c.a)(
                s.PagedSettingsDialog_PageListItem,
                { [s.Active]: i },
                t.entryClassName
              ),
              key: t.title,
              onClick: () => {
                je.a.PlayNavSound(je.b.PagedNavigation),
                  e.onPageRequested && e.onPageRequested(t.identifier),
                  t.click ? t.click() : u && n != d && h(n);
              },
              title: t.title,
              icon: t.icon,
              active: i,
            });
          }),
          C = o.useRef(),
          O = p.hideTitle,
          D = null === (i = e.showTitle) || void 0 === i || i,
          S = Object(c.a)(
            "DialogContentTransition",
            s.PagedSettingDialog_ContentColumn
          );
        return o.createElement(
          a.a,
          {
            className: Object(c.a)(s.PagedSettingsDialog, e.className),
            ref: t,
          },
          o.createElement(
            a.a,
            {
              className: s.PagedSettingsDialog_PageListColumn,
              navRef: _,
              onButtonDown: (e) => {
                var t;
                e.detail.button == ke.a.OK &&
                  (null === (t = C.current) ||
                    void 0 === t ||
                    t.TakeFocus(e.detail.button));
              },
            },
            D &&
              o.createElement(
                "div",
                { className: s.PagedSettingsDialog_Title },
                e.title
              ),
            e.topControls && o.createElement("div", null, e.topControls),
            o.createElement(
              g.a,
              {
                component: e.renderPageList,
                fallback: Ke,
                className: s.PagedSettingsDialog_PageList,
              },
              v
            ),
            e.bottomControls && o.createElement("div", null, e.bottomControls)
          ),
          o.createElement(
            a.a,
            { className: S, onCancelButton: f, navRef: C },
            o.createElement(
              g.a,
              {
                component: e.renderPageAnimation,
                fallback: qe,
                activePage: p,
                direction: b,
              },
              p &&
                o.createElement(Xe, {
                  key: p.identifier,
                  stylesheet: s,
                  hideTitle: O,
                  activePage: p,
                })
            )
          )
        );
      });
      function qe(e) {
        return o.createElement(o.Fragment, null, e.children);
      }
      class $e extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_refTextArea = o.createRef()),
            (this.m_cEntryLength = Number.MAX_VALUE);
        }
        get textarea() {
          return this.m_refTextArea.current;
        }
        get value() {
          return this.m_refTextArea.current && this.m_refTextArea.current.value;
        }
        focus() {
          this.m_refTextArea.current.focus();
        }
        InternalOnInput() {
          const e = this.m_refTextArea.current,
            t = this.GetMinHeight(),
            n = this.GetMaxHeight();
          let i,
            o = e.value.length;
          if (
            (void 0 === this.m_nTextAreaPadding && this.CalculatePadding(),
            o < this.m_cEntryLength &&
              ((i = window.scrollY), (e.style.height = t + "px")),
            e.scrollHeight > n)
          )
            (e.style.height = n + "px"), (e.style.overflow = "auto");
          else if (e.scrollHeight != e.clientHeight) {
            let n = Math.max(e.scrollHeight, t);
            (e.style.height = n - this.m_nTextAreaPadding + "px"),
              "auto" == e.style.overflow && (e.style.overflow = "hidden");
          }
          void 0 !== i && window.scrollTo(window.scrollX, i),
            (this.m_cEntryLength = o);
        }
        CalculatePadding() {
          const e = getComputedStyle(this.m_refTextArea.current);
          this.m_nTextAreaPadding =
            parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
        }
        GetMinHeight() {
          return this.props.nMinHeight || 20;
        }
        GetMaxHeight() {
          return this.props.nMaxHeight || 500;
        }
        DeferredInternalOnInput() {
          window.setTimeout(this.InternalOnInput, 1);
        }
        OnKeyUp(e) {
          this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e);
        }
        OnBlur(e) {
          this.DeferredInternalOnInput(),
            this.props.onBlur && this.props.onBlur(e);
        }
        OnClick(e) {
          this.InternalOnInput(), this.props.onClick && this.props.onClick(e);
        }
        OnPaste(e) {
          this.DeferredInternalOnInput(),
            this.props.onPaste && this.props.onPaste(e);
        }
        OnCut(e) {
          this.InternalOnInput(), this.props.onCut && this.props.onCut(e);
        }
        componentDidMount() {
          (this.m_refTextArea.current.style.overflow = "hidden"),
            (this.m_refTextArea.current.style.resize = "none"),
            this.InternalOnInput();
        }
        componentDidUpdate(e) {
          (e.nMinHeight == this.props.nMinHeight &&
            e.nMaxHeight == this.props.nMaxHeight) ||
            (this.m_cEntryLength = Number.MAX_VALUE),
            this.m_refTextArea.current.value.length != this.m_cEntryLength &&
              this.InternalOnInput();
        }
        render() {
          const e = this.props,
            { nMinHeight: t, nMaxHeight: n, renderTextArea: s } = e,
            r = Object(i.c)(e, ["nMinHeight", "nMaxHeight", "renderTextArea"]);
          return (
            s || ((e) => o.createElement("textarea", Object.assign({}, e)))
          )(
            Object.assign(Object.assign({}, r), {
              ref: this.m_refTextArea,
              onKeyUp: this.OnKeyUp,
              onBlur: this.OnBlur,
              onClick: this.OnClick,
              onPaste: this.OnPaste,
              onCut: this.OnCut,
            })
          );
        }
      }
      Object(i.b)([K.b], $e.prototype, "InternalOnInput", null),
        Object(i.b)([K.b], $e.prototype, "OnKeyUp", null),
        Object(i.b)([K.b], $e.prototype, "OnBlur", null),
        Object(i.b)([K.b], $e.prototype, "OnClick", null),
        Object(i.b)([K.b], $e.prototype, "OnPaste", null),
        Object(i.b)([K.b], $e.prototype, "OnCut", null);
      var Qe = n("tzWY"),
        Ze = n.n(Qe);
      const Je = o.forwardRef(function (e, t) {
        const {
            label: n,
            description: s,
            icon: r,
            children: l,
            childrenLayout: u,
            inlineWrap: d,
            childrenContainerWidth: h,
            spacingBetweenLabelAndChild: m,
            padding: p,
            disabled: g,
            bottomSeparator: b,
            className: _,
            highlightOnFocus: f,
            indentLevel: v,
            verticalAlignment: C,
          } = e,
          O = Object(i.c)(e, [
            "label",
            "description",
            "icon",
            "children",
            "childrenLayout",
            "inlineWrap",
            "childrenContainerWidth",
            "spacingBetweenLabelAndChild",
            "padding",
            "disabled",
            "bottomSeparator",
            "className",
            "highlightOnFocus",
            "indentLevel",
            "verticalAlignment",
          ]),
          D = null != u ? u : "inline",
          S = "inline" == D && !!l,
          E = "below" == D && !!l,
          w = null != d ? d : "shift-children-below",
          I = !!(O.onClick || O.onActivate || O.focusable),
          R = null != r || null != n || (S && null != l),
          T = null != h ? h : "min",
          y = null != m ? m : "standard",
          N = null != p ? p : "standard",
          L = null != b ? b : "standard",
          M = null == f || f,
          F = null != v ? v : 0,
          A = null != C ? C : "center",
          B = o.useRef(),
          P = Object(K.g)(B, e.navRef),
          x = o.useCallback(
            (e) => {
              var t;
              null === (t = B.current) || void 0 === t || t.TakeFocus(),
                e.preventDefault();
            },
            [B]
          );
        return o.createElement(
          a.a,
          Object.assign(
            {
              focusable: I,
              noFocusRing: !0,
              scrollIntoViewWhenChildFocused: !0,
              onActivate: O.onClick,
              ref: t,
              onMouseDown: I ? void 0 : x,
            },
            O,
            {
              navRef: P,
              className: Object(c.a)(
                _,
                Ze.a.Field,
                g && Ze.a.Disabled,
                R && Ze.a.WithFirstRow,
                S && Ze.a.WithChildrenInline,
                E && Ze.a.WithChildrenBelow,
                "center" == A && Ze.a.VerticalAlignCenter,
                "shift-children-below" == w &&
                  Ze.a.InlineWrapShiftsChildrenBelow,
                !!s && Ze.a.WithDescription,
                "standard" == L && Ze.a.WithBottomSeparatorStandard,
                "thick" == L && Ze.a.WithBottomSeparatorThick,
                "fixed" == T && Ze.a.ChildrenWidthFixed,
                "max" == T && Ze.a.ChildrenWidthGrow,
                "standard" == y && Ze.a.ExtraPaddingOnChildrenBelow,
                "standard" == N && Ze.a.StandardPadding,
                "compact" == N && Ze.a.CompactPadding,
                I && Ze.a.Clickable,
                M && Ze.a.HighlightOnFocus
              ),
              style: { "--indent-level": F },
            }
          ),
          R &&
            o.createElement(
              "div",
              { className: Ze.a.FieldLabelRow },
              o.createElement(
                "div",
                { className: Ze.a.FieldLabel },
                r &&
                  o.createElement("div", { className: Ze.a.FieldLeadIcon }, r),
                n
              ),
              S && o.createElement("div", { className: Ze.a.FieldChildren }, l)
            ),
          E && o.createElement("div", { className: Ze.a.FieldChildren }, l),
          s && o.createElement("div", { className: Ze.a.FieldDescription }, s)
        );
      });
      o.forwardRef(function (e, t) {
        const {
            label: n,
            description: s,
            icon: r,
            layout: a,
            bottomSeparator: l,
            highlightOnFocus: c,
          } = e,
          u = Object(i.c)(e, [
            "label",
            "description",
            "icon",
            "layout",
            "bottomSeparator",
            "highlightOnFocus",
          ]),
          { refWithValue: d, refForElement: h } = Object(K.h)(t);
        return o.createElement(
          Je,
          {
            label: n,
            description: s,
            icon: r,
            bottomSeparator: l,
            highlightOnFocus: c,
            childrenLayout: null != a ? a : "inline",
            childrenContainerWidth: "min",
            onMouseDown: (e) => {
              var t;
              null === (t = d.current) || void 0 === t || t.focus(),
                e.preventDefault();
            },
          },
          o.createElement(P, Object.assign({}, u, { ref: h }))
        );
      });
      const et = o.forwardRef(function (e, t) {
        const {
            label: n,
            description: s,
            icon: r,
            layout: a,
            bottomSeparator: l,
            highlightOnFocus: c,
          } = e,
          u = Object(i.c)(e, [
            "label",
            "description",
            "icon",
            "layout",
            "bottomSeparator",
            "highlightOnFocus",
          ]),
          { refWithValue: d, refForElement: h } = Object(K.h)(t);
        return o.createElement(
          Je,
          {
            label: n,
            description: s,
            icon: r,
            bottomSeparator: l,
            highlightOnFocus: c,
            childrenLayout: null != a ? a : "inline",
            childrenContainerWidth: "fixed",
            onMouseDown: (e) => {
              var t, n;
              null ===
                (n =
                  null === (t = d.current) || void 0 === t
                    ? void 0
                    : t.element) ||
                void 0 === n ||
                n.focus(),
                e.preventDefault();
            },
          },
          o.createElement(Z, Object.assign({}, u, { ref: h }))
        );
      });
      function tt(e) {
        var t, n;
        const i = null !== (t = e.alignItems) && void 0 !== t ? t : "left",
          s = null !== (n = e.spacing) && void 0 !== n ? n : "standard";
        return o.createElement(
          a.a,
          {
            className: Object(c.a)(
              Ze.a.ControlsListOuterPanel,
              "left" == i && Ze.a.AlignLeft,
              "right" == i && Ze.a.AlignRight,
              "center" == i && Ze.a.AlignCenter,
              "standard" == s && Ze.a.StandardSpacing,
              "extra" == s && Ze.a.ExtraSpacing
            ),
            navEntryPreferPosition: Ve.d.PREFERRED_CHILD,
          },
          o.Children.map(
            e.children,
            (e) =>
              e &&
              o.createElement("div", { className: Ze.a.ControlsListChild }, e)
          )
        );
      }
      function nt(e) {
        const { children: t, alignItems: n, spacing: s } = e,
          r = Object(i.c)(e, ["children", "alignItems", "spacing"]),
          a = { children: t, alignItems: n, spacing: s };
        return o.createElement(
          Je,
          Object.assign({ childrenLayout: "below" }, r),
          o.createElement(tt, Object.assign({}, a))
        );
      }
      o.forwardRef(function (e, t) {
        return o.createElement(
          r.f,
          Object.assign({ noFocusRing: !0 }, e, {
            ref: t,
            className: Object(c.a)(Ze.a.BasicTextInput, e.className),
            size: 1,
          })
        );
      });
      var it = n("R5YR"),
        ot = n("K6fy"),
        st = n.n(ot),
        rt = n("dcOZ");
      function at(e) {
        const {
            label: t,
            tooltip: n,
            strClassName: s,
            dropDownControlRef: r,
            description: a,
            layout: l,
            bottomSeparator: c,
            highlightOnFocus: u,
            autoFocus: d,
            indentLevel: h,
            onContextMenu: m,
          } = e,
          p = Object(i.c)(e, [
            "label",
            "tooltip",
            "strClassName",
            "dropDownControlRef",
            "description",
            "layout",
            "bottomSeparator",
            "highlightOnFocus",
            "autoFocus",
            "indentLevel",
            "onContextMenu",
          ]),
          {
            actionDescriptions: g,
            gamepadEvents: b,
            props: _,
          } = Object(rt.a)(p);
        return o.createElement(
          Je,
          Object.assign(
            {
              className: s,
              label: t,
              description: null != a ? a : n,
              childrenLayout: null != l ? l : "inline",
              childrenContainerWidth: "fixed",
              bottomSeparator: c,
              highlightOnFocus: u,
              autoFocus: d,
              indentLevel: h,
              onContextMenu: m,
              actionDescriptionMap: g,
            },
            b
          ),
          o.createElement(Oe, Object.assign({ menuLabel: t }, _, { ref: r }))
        );
      }
      function lt(e, t) {
        for (const n of e.options) {
          if (he(n) && n.data === t) return !0;
          if (me(n) && lt(n, t)) return !0;
        }
        return !1;
      }
      function ct(e) {
        const t = (n) =>
          null == n
            ? void 0
            : n.map((n, i) =>
                he(n)
                  ? o.createElement(
                      oe.d,
                      {
                        key: i,
                        onSelected: () =>
                          e.onValueSelected && e.onValueSelected(n),
                        selected: e.selectedValue === n.data,
                      },
                      o.createElement(o.Fragment, null, n.label)
                    )
                  : me(n)
                  ? o.createElement(
                      oe.e,
                      {
                        label: n.label,
                        key: i,
                        selectedWithin: lt(n, e.selectedValue),
                      },
                      t(n.options)
                    )
                  : null
              );
        return o.createElement(oe.c, { onCancel: e.onCancel }, t(e.rgOptions));
      }
      const ut = o.forwardRef(function (e, t) {
        return o.createElement(
          P,
          {
            className: Object(c.a)(st.a.DropDownControlButton, e.className),
            focusable: e.focusable,
            disabled: e.disabled,
            onClick: e.onClick,
            tabIndex: e.tabIndex,
            ref: t,
          },
          o.createElement(
            "div",
            { className: Ze.a.DropDownControlButtonContents },
            e.children,
            o.createElement("div", { className: Ze.a.Spacer }),
            o.createElement(it.b, { direction: "down" })
          )
        );
      });
      n("yASz");
      var dt = n("NIxO");
      o.forwardRef(function (e, t) {
        const { className: n } = e,
          s = Object(i.c)(e, ["className"]),
          [r, l] = o.useState(!1),
          c = () => l((e) => !e);
        return o.createElement(
          a.a,
          {
            className: n,
            onOptionsButton: c,
            onOptionsActionDescription: Object(u.f)(
              r ? "#Login_HidePassword" : "#Login_ShowPassword"
            ),
          },
          o.createElement(
            Z,
            Object.assign(
              {
                bIsPassword: !r,
                autoComplete: "off",
                ref: t,
                inlineControls: o.createElement(
                  P,
                  {
                    className: dt.TogglePasswordVisibilityBtn,
                    onPointerDown: c,
                    onOKButton: c,
                  },
                  r ? o.createElement(it.f, null) : o.createElement(it.e, null)
                ),
              },
              s
            )
          )
        );
      });
      o.forwardRef(function (e, t) {
        var n;
        const { className: s } = e,
          r = Object(i.c)(e, ["className"]),
          a = null !== (n = e.value) && void 0 !== n ? n : "";
        return o.createElement(
          et,
          Object.assign(
            {
              autoComplete: "off",
              value: a,
              ref: t,
              placeholder: "   .   .   .   ",
            },
            r,
            {
              onChange: (e) => {
                !(function (e) {
                  const t = e.split(".");
                  if (t.length > 4) return !1;
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if ("" == n) {
                      if (e == t.length - 1) continue;
                      return !1;
                    }
                    if (!/^[0-9]*$/.test(n)) return !1;
                    const i = parseInt(n);
                    if (!(i >= 0 && i <= 255)) return !1;
                  }
                  return !0;
                })(e.target.value)
                  ? (e.target.value = a)
                  : r.onChange && r.onChange(e);
              },
            }
          )
        );
      });
      var ht = n("WVuY"),
        mt = n.n(ht),
        pt = n("24VQ"),
        gt = n("s358"),
        bt = n("tQrp");
      const _t = Object(bt.a)(mt.a["error-shake-duration"]);
      function ft(e, t) {
        return t < 0 ? 0 : t > 1 ? 1 : 0 == e ? t : Math.round(t / e) * e;
      }
      function vt(e, t, n) {
        const i = e + n * (t - e);
        return Number.parseFloat(i.toFixed(10));
      }
      function Ct(e, t, n) {
        return (n - e) / (t - e);
      }
      var Ot;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.MouseDragging = 1)] = "MouseDragging"),
          (e[(e.TouchStart = 2)] = "TouchStart"),
          (e[(e.TouchDragging = 3)] = "TouchDragging");
      })(Ot || (Ot = {}));
      class Dt extends o.Component {
        constructor(e) {
          super(e),
            (this.m_refSlider = o.createRef()),
            (this.m_refHandle = o.createRef()),
            (this.m_navRefSlider = o.createRef()),
            (this.m_sliderBounds = null),
            (this.m_handleBounds = null),
            (this.m_eDragMode = Ot.None),
            (this.m_vTouchStartPosition = Object(pt.c)()),
            (this.m_fStartValue = null),
            (this.m_fLatestUserValue = null),
            (this.m_bInnerSliderHasFocus = !1),
            (this.m_fStartValue = this.props.value),
            (this.m_fLatestUserValue = this.props.value);
        }
        get showHandle() {
          var e;
          return null === (e = this.props.showHandle) || void 0 === e || e;
        }
        get isKeyNavTarget() {
          var e;
          return null === (e = this.props.isKeyNavTarget) || void 0 === e || e;
        }
        get validRange() {
          return this.props.min < this.props.max;
        }
        get range() {
          return this.validRange ? this.props.max - this.props.min : 0;
        }
        get step() {
          var e;
          return null !== (e = this.props.step) && void 0 !== e ? e : 1;
        }
        get normalizedStep() {
          return this.step / this.range;
        }
        get normalizedClampedValue() {
          const e =
            null == this.props.value || isNaN(this.props.value)
              ? this.props.min
              : Object(ye.a)(this.props.value, this.props.min, this.props.max);
          return Ct(this.props.min, this.props.max, e);
        }
        get normalizedDefaultValue() {
          const e = this.props.resetValue;
          if (
            !(null == e || isNaN(e) || e < this.props.min || e > this.props.max)
          )
            return Ct(this.props.min, this.props.max, e);
        }
        get CanResetToDefault() {
          return (
            null != this.props.resetValue &&
            this.props.value != this.props.resetValue
          );
        }
        RecomputeSliderBounds() {
          var e, t;
          (this.m_sliderBounds =
            null === (e = this.m_refSlider.current) || void 0 === e
              ? void 0
              : e.getBoundingClientRect()),
            (this.m_handleBounds =
              null === (t = this.m_refHandle.current) || void 0 === t
                ? void 0
                : t.getBoundingClientRect());
        }
        SetDragMode(e) {
          var t, n, i, o, s, r, a, l;
          if (e != this.m_eDragMode) {
            switch (e) {
              case Ot.MouseDragging:
              case Ot.TouchDragging:
              case Ot.TouchStart:
                this.props.onDragChange && this.props.onDragChange(!0),
                  this.RecomputeSliderBounds(),
                  (this.m_fStartValue = this.props.value),
                  (this.m_fLatestUserValue = this.props.value);
                break;
              case Ot.None:
                this.props.onDragChange && this.props.onDragChange(!1);
            }
            switch (e) {
              case Ot.MouseDragging:
                null ===
                  (n =
                    null === (t = this.m_refSlider.current) || void 0 === t
                      ? void 0
                      : t.ownerDocument) ||
                  void 0 === n ||
                  n.addEventListener("mousemove", this.OnWindowMouseMove, {
                    passive: !1,
                  }),
                  null ===
                    (o =
                      null === (i = this.m_refSlider.current) || void 0 === i
                        ? void 0
                        : i.ownerDocument) ||
                    void 0 === o ||
                    o.addEventListener("mouseup", this.OnWindowMouseUp, {
                      passive: !1,
                    });
                break;
              case Ot.TouchStart:
              case Ot.TouchDragging:
                null ===
                  (r =
                    null === (s = this.m_refSlider.current) || void 0 === s
                      ? void 0
                      : s.ownerDocument) ||
                  void 0 === r ||
                  r.addEventListener("touchmove", this.OnWindowTouchMove, {
                    passive: !1,
                  }),
                  null ===
                    (l =
                      null === (a = this.m_refSlider.current) || void 0 === a
                        ? void 0
                        : a.ownerDocument) ||
                    void 0 === l ||
                    l.addEventListener("touchend", this.OnWindowTouchEnd, {
                      passive: !1,
                    });
                break;
              case Ot.None:
                this.RemoveDocumentEventListeners();
            }
            this.m_eDragMode = e;
          }
        }
        OnGamepadDirection(e) {
          var t;
          if (this.props.disabled) return !1;
          let n = 0;
          if (e.detail.button == ke.a.DIR_LEFT) n = -1;
          else {
            if (e.detail.button != ke.a.DIR_RIGHT) return !1;
            n = 1;
          }
          let i =
            null !== (t = this.props.minimumDpadGranularity) && void 0 !== t
              ? t
              : 0.05;
          0 == i && 0 == this.normalizedStep && (i = 0.05);
          const o =
              0 == this.normalizedStep
                ? i
                : Math.round(i / this.normalizedStep) * this.normalizedStep,
            s = Math.max(o, this.normalizedStep) * n,
            r = ft(this.normalizedStep, this.normalizedClampedValue + s);
          let a = vt(this.props.min, this.props.max, r);
          if (
            ((a = Object(ye.a)(
              a,
              this.props.clampMin ? this.props.clampMin : this.props.min,
              this.props.clampMax ? this.props.clampMax : this.props.max
            )),
            a != this.props.value)
          ) {
            const e = a > this.m_fLatestUserValue;
            je.a.PlayNavSound(e ? je.b.SliderUp : je.b.SliderDown),
              (this.m_fLatestUserValue = a),
              this.props.onChange && this.props.onChange(a);
          } else je.a.PlayNavSound(je.b.FailedNav);
          return !0;
        }
        ComputeNormalizedValueForMousePosition(e) {
          if (null == this.m_sliderBounds) return 0;
          const t = this.m_sliderBounds.right - this.m_sliderBounds.left,
            n =
              null == this.m_handleBounds
                ? 0
                : this.m_handleBounds.right - this.m_handleBounds.left,
            i = t - n;
          return (e - this.m_sliderBounds.left - n / 2) / i;
        }
        UpdateSliderValueForPosition(e) {
          if (this.props.disabled || !this.m_refSlider.current) return;
          const t = this.ComputeNormalizedValueForMousePosition(e),
            n = ft(this.normalizedStep, t);
          let i = vt(this.props.min, this.props.max, n);
          if (
            ((i = Object(ye.a)(
              i,
              this.props.clampMin ? this.props.clampMin : this.props.min,
              this.props.clampMax ? this.props.clampMax : this.props.max
            )),
            i != this.props.value)
          ) {
            const e = i > this.props.value,
              t = 0 == this.step;
            (this.m_eDragMode == Ot.None || !t) &&
              je.a.PlayNavSound(e ? je.b.SliderUp : je.b.SliderDown),
              (this.m_fLatestUserValue = i),
              this.props.onChange && this.props.onChange(i);
          }
        }
        OnWindowMouseMove(e) {
          this.UpdateSliderValueForPosition(e.clientX);
        }
        OnWindowMouseUp(e) {
          this.m_eDragMode != Ot.None && this.Complete();
        }
        OnMouseDown(e) {
          0 == e.button &&
            (this.props.disabled ||
              (e.preventDefault(),
              this.SetDragMode(Ot.MouseDragging),
              this.UpdateSliderValueForPosition(e.clientX)));
        }
        OnTouchStart(e) {
          if (this.props.disabled || 1 != e.touches.length) return;
          e.preventDefault();
          const t = this.ComputeNormalizedValueForMousePosition(
            e.touches[0].clientX
          );
          t < 0 ||
            t > 1 ||
            (this.SetDragMode(Ot.TouchStart),
            (this.m_vTouchStartPosition = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            }));
        }
        OnWindowTouchMove(e) {
          var t;
          if (1 == e.touches.length) {
            switch (this.m_eDragMode) {
              case Ot.TouchStart:
                const n = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                if (Object(pt.b)(this.m_vTouchStartPosition, n) >= 10) {
                  const e = Object(pt.a)(this.m_vTouchStartPosition, n);
                  Math.abs(e.x) > Math.abs(e.y)
                    ? (this.SetDragMode(Ot.TouchDragging),
                      null === (t = this.m_refSlider.current) ||
                        void 0 === t ||
                        t.focus())
                    : this.SetDragMode(Ot.None);
                }
                break;
              case Ot.TouchDragging:
                this.UpdateSliderValueForPosition(e.touches[0].clientX);
            }
            e.preventDefault();
          }
        }
        OnWindowTouchEnd(e) {
          this.m_eDragMode != Ot.None && this.Complete();
        }
        Complete() {
          const e = this.m_eDragMode != Ot.None;
          this.SetDragMode(Ot.None),
            this.props.onChange && this.props.onChange(this.m_fLatestUserValue),
            this.props.onChangeComplete &&
              this.props.onChangeComplete(this.m_fLatestUserValue);
          const t = 0 == this.step;
          if (this.m_fLatestUserValue != this.m_fStartValue && t && e) {
            const e = this.m_fLatestUserValue > this.m_fStartValue;
            je.a.PlayNavSound(e ? je.b.SliderUp : je.b.SliderDown);
          }
        }
        RemoveDocumentEventListeners() {
          var e, t, n, i, o, s, r, a;
          null ===
            (t =
              null === (e = this.m_refSlider.current) || void 0 === e
                ? void 0
                : e.ownerDocument) ||
            void 0 === t ||
            t.removeEventListener("mousemove", this.OnWindowMouseMove),
            null ===
              (i =
                null === (n = this.m_refSlider.current) || void 0 === n
                  ? void 0
                  : n.ownerDocument) ||
              void 0 === i ||
              i.removeEventListener("touchmove", this.OnWindowTouchMove),
            null ===
              (s =
                null === (o = this.m_refSlider.current) || void 0 === o
                  ? void 0
                  : o.ownerDocument) ||
              void 0 === s ||
              s.removeEventListener("mouseup", this.OnWindowMouseUp),
            null ===
              (a =
                null === (r = this.m_refSlider.current) || void 0 === r
                  ? void 0
                  : r.ownerDocument) ||
              void 0 === a ||
              a.removeEventListener("touchend", this.OnWindowTouchEnd);
        }
        componentWillUnmount() {
          this.RemoveDocumentEventListeners();
        }
        BlurInnerSlider() {
          var e;
          null === (e = this.m_navRefSlider.current) ||
            void 0 === e ||
            e.ParentTakeFocus();
        }
        OnInnerSliderFocus() {
          (this.m_bInnerSliderHasFocus = !0),
            (this.m_fStartValue = this.props.value);
        }
        OnInnerSliderBlur() {
          (this.m_bInnerSliderHasFocus = !1),
            this.m_fStartValue != this.m_fLatestUserValue && this.Complete();
        }
        ResetToDefault() {
          if (!this.CanResetToDefault || this.m_eDragMode != Ot.None) return;
          let e;
          this.m_bInnerSliderHasFocus
            ? ((e = this.props.resetValue > this.m_fLatestUserValue),
              (this.m_fLatestUserValue = this.props.resetValue),
              this.props.onChange && this.props.onChange(this.props.resetValue))
            : ((e = this.props.resetValue > this.props.value),
              this.props.onChange && this.props.onChange(this.props.resetValue),
              this.props.onChangeComplete &&
                this.props.onChangeComplete(this.props.resetValue)),
            je.a.PlayNavSound(e ? je.b.SliderUp : je.b.SliderDown);
        }
        OnContextMenu(e) {
          if (null != this.props.resetValue) {
            const t = o.createElement(
              oe.c,
              null,
              o.createElement(
                oe.d,
                {
                  disabled: !this.CanResetToDefault,
                  onSelected: this.ResetToDefault,
                },
                Object(u.f)("#ResetToDefault")
              )
            );
            Object(ie.a)(t, e);
          }
        }
        render() {
          var e, t;
          const n =
              null === (e = this.props.notchTicksVisible) || void 0 === e || e,
            i = null === (t = this.props.focusable) || void 0 === t || t,
            s = this.normalizedDefaultValue,
            a = null != s,
            l = {};
          this.CanResetToDefault &&
            (l[ke.a.SECONDARY] = Object(u.f)("#ResetToDefault"));
          let d = mt.a.SliderHandle,
            h = mt.a.SliderHandleContainer;
          return (
            "verticalline" == this.props.handleType
              ? ((d = mt.a.VerticalLineSliderHandle),
                (h = mt.a.VerticalLineSliderHandleContainer))
              : ("leftparen" != this.props.handleType &&
                  "rightparen" != this.props.handleType) ||
                ((d = Object(c.a)(
                  mt.a.ParenSliderHandle,
                  "leftparen" == this.props.handleType ? mt.a.Left : mt.a.Right
                )),
                (h = Object(c.a)(
                  mt.a.ParenSliderHandleContainer,
                  "leftparen" == this.props.handleType ? mt.a.Left : mt.a.Right
                ))),
            o.createElement(
              gt.a,
              {
                noFocusRing: !0,
                className: mt.a.SliderControlPanelGroup,
                navRef: this.props.navRef,
                onMouseDown: (e) => this.OnMouseDown(e.nativeEvent),
                onTouchStart: (e) => this.OnTouchStart(e.nativeEvent),
                onOKActionDescription: this.props.disabled
                  ? null
                  : Object(u.f)("#Slider_AdjustSlider"),
                focusable: i,
                childFocusDisabled: this.props.disabled || !i,
                onContextMenu: this.OnContextMenu,
                onOKButton: this.props.disabled
                  ? () => je.a.PlayNavSound(je.b.FailedNav)
                  : null,
                onSecondaryButton: this.CanResetToDefault
                  ? this.ResetToDefault
                  : void 0,
                onSecondaryActionDescription: this.CanResetToDefault
                  ? Object(u.f)("#ResetToDefault")
                  : void 0,
                actionDescriptionMap: l,
              },
              o.createElement(
                r.e,
                {
                  className: Object(c.a)(
                    mt.a.SliderControlAndNotches,
                    this.props.disabled && mt.a.Disabled,
                    a && mt.a.WithDefaultValue
                  ),
                  focusable: this.isKeyNavTarget,
                  noFocusRing: !0,
                  onFocus: this.OnInnerSliderFocus,
                  onBlur: this.OnInnerSliderBlur,
                  style: {
                    "--normalized-slider-value": this.normalizedClampedValue,
                    "--normalized-slider-default-value": s,
                  },
                  ref: Object(K.a)(this.m_refSlider, this.props.innerRef),
                  navRef: this.m_navRefSlider,
                  onGamepadDirection: this.OnGamepadDirection,
                  onOKButton: this.BlurInnerSlider,
                  onOKActionDescription: null,
                  onCancelButton: this.BlurInnerSlider,
                  onCancelActionDescription: Object(u.f)(
                    "#ActionButtonLabelDone"
                  ),
                },
                o.createElement(
                  "div",
                  { className: mt.a.SliderControl },
                  o.createElement("div", {
                    style: this.props.trackStyleOverride,
                    className: Object(c.a)(
                      mt.a.SliderTrack,
                      null != this.props.notchCount &&
                        n &&
                        mt.a.SliderHasNotches,
                      {
                        [mt.a.SliderTrackDark]: "dark" === this.props.trackTone,
                      }
                    ),
                  }),
                  a &&
                    o.createElement(
                      "div",
                      { className: mt.a.DefaultValueTickContainer },
                      o.createElement(
                        "div",
                        { className: mt.a.DefaultValueTick },
                        o.createElement(it.b, { direction: "down" })
                      )
                    ),
                  this.validRange &&
                    null != this.props.value &&
                    !isNaN(this.props.value) &&
                    this.showHandle &&
                    o.createElement(
                      "div",
                      { className: h },
                      o.createElement(
                        "div",
                        { className: d, ref: this.m_refHandle },
                        "leftparen" == this.props.handleType &&
                          o.createElement(it.c, null),
                        "rightparen" == this.props.handleType &&
                          o.createElement(it.d, null)
                      )
                    )
                ),
                o.createElement(St, {
                  notchCount: this.props.notchCount,
                  notchLabels: this.props.notchLabels,
                  sliderValue: this.normalizedClampedValue,
                  notchTicksVisible: n,
                })
              )
            )
          );
        }
      }
      function St(e) {
        let {
            sliderValue: t,
            notchCount: n,
            notchLabels: i,
            notchTicksVisible: s,
          } = e,
          r = null != i ? i : [];
        if (!n) return null;
        let l = !1,
          u = [];
        for (let e = 0; e < n; ++e) {
          let i = r.find((t) => t.notchIndex == e);
          i && (l = !0),
            u.push(
              o.createElement(Et, {
                key: e,
                notchIndex: e,
                sliderValue: t,
                notchLabel: i,
                notchCount: n,
                notchTicksVisible: s,
              })
            );
        }
        return o.createElement(
          a.a,
          {
            className: Object(c.a)(
              mt.a.SliderNotchContainer,
              l && mt.a.HasNotchLabels
            ),
          },
          u
        );
      }
      function Et(e) {
        const t = e.notchIndex <= (e.notchCount - 1) * e.sliderValue;
        return o.createElement(
          "div",
          { className: mt.a.SliderNotch },
          e.notchTicksVisible &&
            o.createElement("div", {
              className: Object(c.a)(
                mt.a.SliderNotchTick,
                t && mt.a.TickActive
              ),
            }),
          e.notchLabel &&
            o.createElement(
              "div",
              {
                className: Object(c.a)(
                  mt.a.SliderNotchLabel,
                  mt.a.SliderNotchLabelLower
                ),
              },
              e.notchLabel.label
            )
        );
      }
      Object(i.b)([K.b], Dt.prototype, "RecomputeSliderBounds", null),
        Object(i.b)([K.b], Dt.prototype, "SetDragMode", null),
        Object(i.b)([K.b], Dt.prototype, "OnGamepadDirection", null),
        Object(i.b)([K.b], Dt.prototype, "UpdateSliderValueForPosition", null),
        Object(i.b)([K.b], Dt.prototype, "OnWindowMouseMove", null),
        Object(i.b)([K.b], Dt.prototype, "OnWindowMouseUp", null),
        Object(i.b)([K.b], Dt.prototype, "OnMouseDown", null),
        Object(i.b)([K.b], Dt.prototype, "OnTouchStart", null),
        Object(i.b)([K.b], Dt.prototype, "OnWindowTouchMove", null),
        Object(i.b)([K.b], Dt.prototype, "OnWindowTouchEnd", null),
        Object(i.b)([K.b], Dt.prototype, "Complete", null),
        Object(i.b)([K.b], Dt.prototype, "BlurInnerSlider", null),
        Object(i.b)([K.b], Dt.prototype, "OnInnerSliderFocus", null),
        Object(i.b)([K.b], Dt.prototype, "OnInnerSliderBlur", null),
        Object(i.b)([K.b], Dt.prototype, "ResetToDefault", null),
        Object(i.b)([K.b], Dt.prototype, "OnContextMenu", null);
      const wt = o.forwardRef((e, t) => {
        const n = Object(i.c)(e, []);
        return o.createElement(
          a.a,
          { className: mt.a.SliderControlWithIcon },
          e.icon &&
            o.createElement(
              a.a,
              {
                onTouchStart: (t) => e.onIconTouch && e.onIconTouch(t),
                className: mt.a.Icon,
              },
              e.icon
            ),
          o.createElement(Dt, Object.assign({}, n, { ref: t }))
        );
      });
      function It(e) {
        const {
            label: t,
            description: n,
            tabIndex: s,
            className: r,
            showValue: a,
            renderValue: l,
            valueSuffix: c,
            tooltip: d,
            layout: h,
            padding: m,
            bottomSeparator: p,
            notchCount: g,
            indentLevel: b,
            editableValue: _,
            highlightOnFocus: f,
            parentSliderRef: v,
          } = e,
          C = Object(i.c)(e, [
            "label",
            "description",
            "tabIndex",
            "className",
            "showValue",
            "renderValue",
            "valueSuffix",
            "tooltip",
            "layout",
            "padding",
            "bottomSeparator",
            "notchCount",
            "indentLevel",
            "editableValue",
            "highlightOnFocus",
            "parentSliderRef",
          ]),
          O = o.useRef(),
          D = o.useRef(),
          S = o.useRef(),
          E = (null != l ? l : ee)(e.value),
          w = (function (e) {
            var t, n;
            const { min: i, max: s } = e,
              r = null !== (t = e.validValues) && void 0 !== t ? t : "steps",
              a = null !== (n = e.step) && void 0 !== n ? n : 1,
              l = o.useCallback(
                (e) => "number" == typeof e && !Number.isNaN(e),
                []
              ),
              c = o.useCallback((e) => !!l(e) && e >= i && e <= s, [l, i, s]),
              u = o.useCallback(
                (e) => !!c(e) && (0 == a || ((e - i) / a) % 1 == 0),
                [c, i, a]
              ),
              d = o.useCallback(
                (e) => !(!l(e) || "function" != typeof r) && r(e),
                [l, r]
              );
            switch (r) {
              case "all":
                return l;
              case "range":
                return c;
              case "steps":
                return u;
              default:
                return d;
            }
          })(e),
          [I, R] = o.useState(!1),
          T = () => R(!0),
          y = (t) => {
            w(t) &&
              (e.onChange && e.onChange(t),
              e.onChangeComplete && e.onChangeComplete(t)),
              R(!1);
          };
        o.useLayoutEffect(() => {
          var e, t;
          !I &&
            (null === (e = S.current) || void 0 === e
              ? void 0
              : e.BHasFocus()) &&
            (null === (t = D.current) || void 0 === t || t.TakeFocus());
        }, [S, D, I]);
        let N = t;
        _
          ? (N = o.createElement(
              o.Fragment,
              null,
              o.createElement("div", { className: mt.a.LabelText }, e.label),
              o.createElement(Rt, {
                navRef: S,
                editing: I,
                renderedValue: E,
                valueSuffix: e.valueSuffix,
                onClick: T,
                onChangeComplete: y,
                validator: w,
              })
            ))
          : a &&
            (N = o.createElement(
              o.Fragment,
              null,
              o.createElement("div", { className: mt.a.LabelText }, e.label),
              o.createElement(
                "div",
                { className: mt.a.DescriptionValue },
                E,
                " ",
                e.valueSuffix
              )
            ));
        const L = o.useRef(null),
          M = o.useCallback(
            (e) => {
              var t;
              null === (t = L.current) ||
                void 0 === t ||
                t.OnTouchStart(e.nativeEvent);
            },
            [L]
          ),
          F = o.useCallback(
            (e) => {
              var t;
              null === (t = L.current) || void 0 === t || t.OnContextMenu(e);
            },
            [L]
          ),
          A = Object(K.g)(L, v);
        return o.createElement(
          Je,
          {
            childrenLayout: null != h ? h : "below",
            padding: m,
            bottomSeparator: p,
            childrenContainerWidth: "fixed",
            label: N,
            description: n,
            ref: O,
            className: r,
            onTouchStart: M,
            onContextMenu: F,
            indentLevel: b,
            onOptionsActionDescription: _
              ? Object(u.f)("#Slider_EditValue")
              : void 0,
            onOptionsButton: _ ? T : void 0,
            highlightOnFocus: f,
          },
          o.createElement(
            wt,
            Object.assign(
              { ref: A, notchCount: g, focusable: !I, navRef: D },
              C
            )
          )
        );
      }
      function Rt(e) {
        const {
            editing: t,
            renderedValue: n,
            valueSuffix: i,
            onClick: s,
            onChangeComplete: a,
            navRef: l,
            validator: d,
          } = e,
          h = o.useRef(),
          m = o.useRef(),
          p = o.useRef(),
          g = Object(K.g)(l, p),
          { fnTriggerErrorShake: b, bPlayingErrorShake: _ } = (function (e) {
            const [t, n] = o.useState(!1),
              i = o.useRef(),
              s = o.useRef(),
              r = o.useCallback(() => {
                window.clearTimeout(i.current),
                  (i.current = window.setTimeout(() => {
                    var t, n, i;
                    null === (t = e.current) ||
                      void 0 === t ||
                      t.classList.remove(mt.a.ErrorShake),
                      null === (n = e.current) ||
                        void 0 === n ||
                        n.getBoundingClientRect(),
                      null === (i = e.current) ||
                        void 0 === i ||
                        i.classList.add(mt.a.ErrorShake);
                  }, 0)),
                  n(!0),
                  window.clearTimeout(s.current),
                  (s.current = window.setTimeout(() => n(!1), _t));
              }, [e]);
            return (
              o.useEffect(
                () => () => {
                  window.clearTimeout(i.current),
                    window.clearTimeout(s.current);
                },
                []
              ),
              { fnTriggerErrorShake: r, bPlayingErrorShake: t }
            );
          })(h),
          f = t || _,
          [v, C] = o.useState("");
        o.useEffect(() => {
          f || C("");
        }, [f]);
        const O = d(Number.parseFloat(v)),
          D = o.useRef(!1),
          S = o.useCallback(
            (e) => {
              !O && v.length > 0 && b(),
                D.current ||
                  ((O || e) && (a(Number.parseFloat(v)), (D.current = !0)));
            },
            [O, v, b, a]
          ),
          E = o.useCallback(() => {
            var e;
            return null === (e = m.current) || void 0 === e
              ? void 0
              : e.TakeFocusAndShowKeyboard();
          }, [m]),
          w = o.useRef(!1);
        o.useLayoutEffect(() => {
          t && !w.current && E(), (w.current = t);
        }, [p, t, E]);
        const I = _ || (f && !O && v.length > 0 && "-" != v),
          R = Object(c.a)(mt.a.DescriptionValue, I && mt.a.RedBorder),
          [T, y] = o.useState(0),
          [N, L] = o.useState(0),
          M = o.useCallback(
            (e) => {
              const t = e.target.clientWidth;
              f ? L(t) : y(t);
            },
            [f]
          ),
          F = Object(K.j)(M);
        o.useLayoutEffect(() => {
          var e, t;
          (null === (e = p.current) || void 0 === e ? void 0 : e.BHasFocus()) &&
            (null === (t = p.current) ||
              void 0 === t ||
              t.Node().ForceMeasureFocusRing());
        }, [N]);
        const A = f ? v : n,
          B = f ? Math.max(T, N) : T;
        return o.createElement(
          "div",
          { className: R },
          o.createElement(
            "div",
            { className: mt.a.FakeEditableValue, ref: F },
            A
          ),
          o.createElement(r.f, {
            refKeyboardHandle: m,
            navRef: g,
            ref: h,
            focusable: t,
            className: mt.a.EditableValue,
            style: { width: B },
            onEnterKeyPress: () => S(!1),
            strEnterKeyLabel: Object(u.f)("#ActionButtonLabelDone"),
            onClick: s,
            onFocus: () => (D.current = !1),
            onBlur: () => S(!0),
            value: A,
            placeholder: n,
            onChange: (e) => C(e.target.value.trim()),
            onCancelButton: () => S(!0),
            onCancelActionDescription: Object(u.f)("#ActionButtonLabelDone"),
            onOKButton: E,
            onOKActionDescription: Object(u.f)("#Slider_EditValue"),
            onOptionsActionDescription: void 0,
            onOptionsButton: E,
          }),
          i &&
            o.createElement("div", { className: mt.a.EditableValueSuffix }, i)
        );
      }
      o.forwardRef((e, t) => {
        const {
          label: n,
          labelIndex: i,
          xOffset: s,
          onResize: r,
          OnMouseDown: a,
          OnTouchStart: l,
        } = e;
        o.useEffect(() => {
          r(i);
        }, [r, i]);
        const c = o.useCallback(
            (e) => {
              r(i);
            },
            [r, i]
          ),
          u = Object(K.j)(c),
          d = Object(K.g)(u, t);
        return o.createElement(
          "div",
          {
            className: mt.a.CompoundSliderSubSliderLabel,
            ref: d,
            onMouseDown: a,
            onTouchStart: l,
            style: { transform: `translateX(${s}px)` },
          },
          o.createElement(
            "div",
            { className: mt.a.CompoundSliderSubSliderLabelInternal },
            n
          )
        );
      });
      const Tt = o.forwardRef(function (e, t) {
        const { value: n, onChange: i, disabled: s, navRef: a } = e;
        return o.createElement(
          r.e,
          {
            noFocusRing: !0,
            className: Object(c.a)(Ze.a.Toggle, {
              [Ze.a.Disabled]: !!s,
              [Ze.a.On]: !!n,
            }),
            onClick: () => {
              if (!s && i) {
                const e = !n;
                i(e), je.a.PlayNavSound(e ? je.b.ToggleOn : je.b.ToggleOff);
              }
            },
            ref: t,
            navRef: a,
          },
          o.createElement("div", { className: Ze.a.ToggleRail }),
          o.createElement("div", { className: Ze.a.ToggleSwitch })
        );
      });
      class yt extends j {
        OnToggleChange(e) {
          this.props.disabled || e === this.checked || this.Toggle();
        }
        render() {
          const e = !!this.props.disabled,
            { actionDescriptions: t, gamepadEvents: n } = Object(rt.a)(
              this.props
            );
          return o.createElement(
            Je,
            Object.assign(
              {
                className: this.props.className,
                disabled: e,
                label: this.props.label,
                icon: this.props.icon,
                description: this.props.description,
                padding: this.props.padding,
                bottomSeparator: this.props.bottomSeparator,
                highlightOnFocus: this.props.highlightOnFocus,
                inlineWrap: "keep-inline",
                onContextMenu: this.props.onContextMenu,
                actionDescriptionMap: t,
              },
              n
            ),
            o.createElement(Tt, {
              onChange: this.OnToggleChange,
              value: this.checked,
              disabled: e,
              navRef: this.props.navRef,
            })
          );
        }
      }
      function Nt(e) {
        let {
            children: t,
            bCenterVertically: n,
            renderDialogContentDiv: s,
            renderDialogContentInnerDiv: r,
          } = e,
          l = Object(i.c)(e, [
            "children",
            "bCenterVertically",
            "renderDialogContentDiv",
            "renderDialogContentInnerDiv",
          ]),
          u = Object(c.a)(
            Ze.a.GamepadDialogContent,
            "DialogContent _DialogLayout",
            e.className,
            n && " _DialogCenterVertically"
          );
        return o.createElement(
          a.a,
          Object.assign({}, l, { className: u }),
          o.createElement(
            a.a,
            {
              className: Object(c.a)(
                Ze.a.GamepadDialogContent_InnerWidth,
                "DialogContent_InnerWidth"
              ),
            },
            t
          )
        );
      }
      Object(i.b)([K.b], yt.prototype, "OnToggleChange", null);
      var Lt,
        Mt = n("CZiU"),
        Ft = n.n(Mt),
        At = n("VeD8"),
        Bt = n("pQ8y");
      function Pt(e) {
        let {
            childrenKey: t,
            childrenClasses: n,
            children: i,
            direction: s,
          } = e,
          r = Object(c.a)(Ft.a.TransitionGroup, s);
        return o.createElement(
          At.a,
          { className: r, appear: !1, enter: !0, exit: !0 },
          o.createElement(xt, { key: t, childrenClasses: n }, i)
        );
      }
      function xt(e) {
        const { sizeClass: t, children: n, childrenClasses: s } = e,
          r = Object(i.c)(e, ["sizeClass", "children", "childrenClasses"]),
          [l, u, d, h] = (function () {
            let e = o.useRef(),
              t = o.useRef();
            o.useLayoutEffect(() => {
              let n = e.current;
              if (!n || t.current) return;
              t.current = {
                element: n,
                activeProps: new Set(),
                bExiting: !1,
                fnDone: null,
              };
              let i = t.current,
                o = (e) => {
                  e.target == n && i.activeProps.add(e.propertyName);
                };
              n.addEventListener("transitionrun", o, !1);
              let s = (e) => {
                e.target == n &&
                  (i.activeProps.delete(e.propertyName),
                  i.fnDone &&
                    0 == i.activeProps.size &&
                    i.bExiting &&
                    i.fnDone());
              };
              n.addEventListener("transitionend", s, !1),
                n.addEventListener("transitioncancel", s, !1);
            }, []);
            let n = o.useCallback(
                (e) => {
                  t.current ? (t.current.fnDone = e) : e();
                },
                [t]
              ),
              i = o.useCallback(() => {
                t.current && (t.current.bExiting = !1);
              }, [t]),
              s = o.useCallback(() => {
                t.current && (t.current.bExiting = !0);
              }, [t]);
            return [e, n, i, s];
          })(),
          m = o.useRef(!0),
          p = o.useCallback(() => m.current, [m]),
          g = o.useCallback(() => {
            (m.current = !0), d();
          }, [d]),
          b = o.useCallback(() => {
            (m.current = !1), h();
          }, [h]),
          _ = e.childrenClasses,
          f = {
            enter: _.enterStart,
            enterActive: _.enterEnd,
            exit: _.exitStart,
            exitActive: _.exitEnd,
          };
        return o.createElement(
          Bt.a,
          Object.assign(
            {
              nodeRef: l,
              classNames: f,
              in: !0,
              timeout: 1e4,
              addEndListener: u,
              onEntering: g,
              onExiting: b,
            },
            r
          ),
          o.createElement(
            "div",
            { ref: l, className: Object(c.a)(Ft.a.ContentWrapper, t, _.base) },
            o.createElement(
              a.a,
              { className: t, fnCanTakeFocus: p },
              e.children
            )
          )
        );
      }
      function kt(e, t) {
        return {
          base: t,
          enterStart: e.Enter,
          enterEnd: e.EnterActive,
          exitStart: e.Exit,
          exitEnd: e.ExitActive,
        };
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Left = 1)] = "Left"),
          (e[(e.Right = 2)] = "Right"),
          (e[(e.Up = 3)] = "Up"),
          (e[(e.Down = 4)] = "Down");
      })(Lt || (Lt = {}));
      var jt = n("Or3k"),
        Gt = n.n(jt);
      const Ht = o.createContext(null);
      function Wt(e) {
        const t = o.useContext(Ht),
          { title: n, icon: s, active: r } = e,
          l = Object(i.c)(e, ["title", "icon", "active"]);
        return o.createElement(
          a.a,
          Object.assign(
            {
              preferredFocus: r,
              navRef: r ? t : null,
              noFocusRing: !0,
              onActivate: l.onClick,
              onFocus: l.onClick,
            },
            l
          ),
          s && o.createElement("div", { className: Gt.a.PageListItem_Icon }, s),
          o.createElement("div", { className: Gt.a.PageListItem_Title }, n)
        );
      }
      function Vt(e) {
        return o.createElement("div", { className: Gt.a.Separator });
      }
      const Ut = o.forwardRef(function (e, t) {
        const n = o.useRef();
        o.useEffect(() => {
          var e;
          null === (e = n.current) || void 0 === e || e.TakeFocus();
        }, [e.page]);
        const i = Boolean(e.showTitle);
        return o.createElement(
          Ht.Provider,
          { value: n },
          o.createElement(
            ze,
            Object.assign({}, e, {
              stylesheet: Gt.a,
              showTitle: i,
              renderPageListItem: Wt,
              renderPageListSeparator: Vt,
              renderPageAnimation: Kt,
            })
          )
        );
      });
      function Kt(e) {
        let t = Lt.None;
        "up" == e.direction
          ? (t = Lt.Up)
          : "down" == e.direction && (t = Lt.Down);
        let n =
          ((i = Gt.a),
          (s = t) == Lt.Left
            ? i.Left
            : s == Lt.Right
            ? i.Right
            : s == Lt.Up
            ? i.Up
            : s == Lt.Down
            ? i.Down
            : "");
        var i, s;
        return o.createElement(
          Pt,
          {
            childrenKey: e.activePage.identifier,
            childrenClasses: kt(Gt.a, Gt.a.ContentTransition),
            direction: n,
          },
          e.children
        );
      }
    },
    "C/LP": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return r;
        });
      var i = n("q1tI"),
        o = n("EC67");
      function s(e, t) {
        var n;
        const s = `${e}_HistoryValue`,
          r = Object(o.g)(),
          a = Object(o.h)();
        return [
          null !== (n = a.state && a.state[s]) && void 0 !== n ? n : t,
          i.useCallback(
            (e) => {
              r.replace(
                r.location.pathname,
                Object.assign(Object.assign({}, r.location.state), { [s]: e })
              );
            },
            [r, s]
          ),
        ];
      }
      function r(e, t, n) {
        var s;
        const r = `${e}_HistoryValue`,
          a = Object(o.g)(),
          l = Object(o.h)(),
          c = null !== (s = l.state && l.state[r]) && void 0 !== s ? s : n,
          u = i.useRef(!1),
          d = i.useRef(),
          h = i.useRef(),
          m = i.useCallback(
            (e) => {
              if (u.current && ((d.current = e), !h.current)) {
                const e = a.location.pathname;
                h.current = window.setTimeout(() => {
                  a.location.pathname == e &&
                    a.location.state[r] != d.current &&
                    a.replace(
                      a.location.pathname,
                      Object.assign(Object.assign({}, a.location.state), {
                        [r]: d.current,
                      })
                    ),
                    (h.current = void 0);
                }, t);
              }
            },
            [a, r, t]
          );
        return (
          i.useEffect(() => {
            u.current = !0;
          }, []),
          [c, m]
        );
      }
    },
    CZiU: function (e, t, n) {
      e.exports = {
        TransitionGroup: "overlappingtransition_TransitionGroup_11Twu",
        ContentWrapper: "overlappingtransition_ContentWrapper_1knAs",
      };
    },
    G7ky: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n("hCpY"),
        r = n("TyAF"),
        a = n("3u1o"),
        l = n("GbHM"),
        c = n("vail"),
        u = n.n(c);
      let d = class extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_listeners = new a.c()),
            (this.m_bNoSpace = !1),
            (this.state = { x: void 0, y: void 0, hoverPositionReady: !1 });
        }
        bindHover(e) {
          (this.m_elHover = e || void 0), this.positionHover();
        }
        componentDidMount() {
          this.m_listeners.AddEventListener(window, "blur", this.OnWindowBlur);
        }
        componentDidUpdate() {
          this.positionHover();
        }
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        OnWindowBlur(e) {
          this.props.onWindowBlur && this.props.onWindowBlur(e);
        }
        render() {
          const e = this.props,
            {
              target: t,
              visibilityObserver: n,
              className: s,
              style: r,
              bEnablePointerEvents: a,
              direction: c,
              nBodyAlignment: d,
              nBodyDistance: h,
              nAllowOffscreenPx: m,
              nMaxLateralMoveOnScreen: p,
              children: g,
              onNoSpace: b,
              onWindowBlur: _,
            } = e,
            f = Object(i.c)(e, [
              "target",
              "visibilityObserver",
              "className",
              "style",
              "bEnablePointerEvents",
              "direction",
              "nBodyAlignment",
              "nBodyDistance",
              "nAllowOffscreenPx",
              "nMaxLateralMoveOnScreen",
              "children",
              "onNoSpace",
              "onWindowBlur",
            ]);
          let v = Object.assign({ left: this.state.x, top: this.state.y }, r),
            C = !n || n.visible;
          return o.createElement(
            "div",
            Object.assign({}, f, {
              className: Object(l.a)(
                s,
                u.a.HoverPosition,
                C && this.state.hoverPositionReady && u.a.Ready,
                this.m_bNoSpace && u.a.NoSpace,
                a && u.a.EnablePointerEvents
              ),
              style: v,
              ref: this.bindHover,
            }),
            g
          );
        }
        positionHover() {
          let e = this.m_elHover,
            t = this.props.target;
          if (!e || !t) return;
          if (
            this.state.hoverPositionReady &&
            this.props.visibilityObserver &&
            !this.props.visibilityObserver.visible
          )
            return;
          let n = t.ownerDocument.defaultView;
          if (!n || n.closed) return;
          const i = e.querySelector(".hover_arrow.left"),
            o = e.querySelector(".hover_arrow.right"),
            s = e.querySelector(".hover_arrow.top"),
            r = e.querySelector(".hover_arrow.bottom"),
            a = t.getBoundingClientRect(),
            l = e.getBoundingClientRect(),
            c =
              "overlay" == this.props.direction ||
              "overlay-center" == this.props.direction;
          i && i.setAttribute("style", "display: none;"),
            o && o.setAttribute("style", "display: none;"),
            s && s.setAttribute("style", "display: none;"),
            r && r.setAttribute("style", "display: none;");
          let u = this.props.direction,
            {
              nLeft: d,
              nTop: m,
              nOverflow: p,
              nLateralOverflow: g,
            } = h(
              u,
              this.props.nBodyAlignment,
              this.props.nBodyDistance,
              a,
              l,
              n.innerWidth,
              n.innerHeight
            );
          if (p > this.props.nAllowOffscreenPx && !c) {
            const t = (function (e) {
                switch (e) {
                  case "right":
                    return "left";
                  case "left":
                    return "right";
                  case "bottom":
                    return "top";
                  case "top":
                    return "bottom";
                  case "overlay":
                    return "overlay";
                  case "overlay-center":
                    return "overlay-center";
                }
              })(this.props.direction),
              {
                nLeft: i,
                nTop: o,
                nOverflow: s,
                nLateralOverflow: r,
              } = h(
                t,
                this.props.nBodyAlignment,
                this.props.nBodyDistance,
                a,
                l,
                n.innerWidth,
                n.innerHeight
              );
            if (
              (s < p && ((u = t), (d = i), (m = o), (p = s), (g = r)),
              p > this.props.nAllowOffscreenPx)
            )
              return (
                e.setAttribute("style", "display: none;"),
                (this.m_bNoSpace = !0),
                void (this.props.onNoSpace && this.props.onNoSpace())
              );
          }
          0 === this.props.nMaxLateralMoveOnScreen ||
            c ||
            ([m, d] = (function (e, t, n, i, o) {
              let s = Math.max(t[0], t[1]);
              void 0 !== e && (s = Math.min(e, s));
              s = Math.max(0, s);
              const r = t[0] > t[1] ? s : -s;
              "left" === n || "right" === n ? (i += r) : (o += r);
              return [i, o];
            })(this.props.nMaxLateralMoveOnScreen, g, u, m, d));
          let b = null;
          switch (u) {
            case "left":
              b = o;
              break;
            case "right":
              b = i;
              break;
            case "top":
              b = r;
              break;
            case "bottom":
              b = s;
          }
          b && b.setAttribute("style", ""),
            d != this.state.x && this.setState({ x: d }),
            m != this.state.y && this.setState({ y: m }),
            this.state.hoverPositionReady ||
              this.setState({ hoverPositionReady: !0 });
        }
      };
      function h(e, t, n, i, o, s, r) {
        const a = s,
          l = r;
        let c, u, d, h;
        switch (e) {
          case "right":
            (c = i.right + n),
              (u = m(i.top, i.height, o.height, t)),
              (d = Math.max(0, c + o.width - a)),
              (h = [Math.max(0, 0 - u), Math.max(0, u + o.height - l)]);
            break;
          case "left":
            (c = i.left - n - o.width),
              (u = m(i.top, i.height, o.height, t)),
              (d = Math.max(0, 0 - c)),
              (h = [Math.max(0, 0 - u), Math.max(0, u + o.height - l)]);
            break;
          case "bottom":
            (c = m(i.left, i.width, o.width, t)),
              (u = i.bottom + n),
              (d = Math.max(0, u + o.height - l)),
              (h = [Math.max(0, 0 - c), Math.max(0, c + o.width - a)]);
            break;
          case "top":
            (c = m(i.left, i.width, o.width, t)),
              (u = i.top - n - o.height),
              (d = Math.max(0, 0 - u)),
              (h = [Math.max(0, 0 - c), Math.max(0, c + o.width - a)]);
            break;
          case "overlay":
            (c = i.left), (u = i.top), (d = 0), (h = [0, 0]);
            break;
          case "overlay-center":
            (c = i.left + 0.5 * i.width - 0.5 * o.width),
              (u = i.top + 0.5 * i.height - 0.5 * o.height),
              (d = 0),
              (h = [0, 0]);
        }
        return { nLeft: c, nTop: u, nOverflow: d, nLateralOverflow: h };
      }
      function m(e, t, n, i) {
        return Math.max(0, Math.min(1, i)) * (t - n) + e;
      }
      (d.defaultProps = {
        direction: "right",
        nBodyAlignment: 0.5,
        nAllowOffscreenPx: 10,
        nBodyDistance: 8,
        nMaxLateralMoveOnScreen: void 0,
      }),
        Object(i.b)([s.b], d.prototype, "bindHover", null),
        Object(i.b)([s.b], d.prototype, "OnWindowBlur", null),
        (d = Object(i.b)([r.a], d));
    },
    JZ7l: function (e, t, n) {
      e.exports = {
        PagedSettingsDialog: "pagedsettings_PagedSettingsDialog_3I6h_",
        PagedSettingsDialog_PageContent:
          "pagedsettings_PagedSettingsDialog_PageContent_1I3Ni",
        PagedSettingsDialog_PageListColumn:
          "pagedsettings_PagedSettingsDialog_PageListColumn_RTicB",
        PagedSettingsDialog_Title:
          "pagedsettings_PagedSettingsDialog_Title_3qEgQ",
        PagedSettingsDialog_PageList:
          "pagedsettings_PagedSettingsDialog_PageList__EebF",
        PagedSettingsDialog_PageListItem:
          "pagedsettings_PagedSettingsDialog_PageListItem_bkfjn",
        DisabledItem: "pagedsettings_DisabledItem_1RDp9",
        Active: "pagedsettings_Active_Myra7",
      };
    },
    K6fy: function (e, t, n) {
      e.exports = {
        "duration-app-launch": "800ms",
        DropDownControlButton: "gamepaddropdown_DropDownControlButton_28bny",
      };
    },
    Lsvi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = n("dcOZ"),
        a = n("GbHM"),
        l = n("hCpY"),
        c = n("O8Yk"),
        u = n("vMUW"),
        d = n("oFSi");
      const h = s.a.forwardRef(function (e, t) {
        const {
            "flow-children": n,
            onActivate: o,
            onCancel: h,
            focusClassName: m,
            focusWithinClassName: p,
          } = e,
          g = Object(i.c)(e, [
            "flow-children",
            "onActivate",
            "onCancel",
            "focusClassName",
            "focusWithinClassName",
          ]),
          { elemProps: b, navOptions: _, gamepadEvents: f } = Object(r.b)(g);
        let v = {};
        const C = Object(d.a)(n);
        C != c.c.NONE && (v.layout = C),
          o &&
            ((b.onClick = b.onClick || o), (f.onOKButton = f.onOKButton || o)),
          f.onOKButton && void 0 === _.focusable && (_.focusable = !0),
          h && (f.onCancelButton = f.onCancelButton || h),
          (b.className = Object(a.a)(b.className, "Panel", "Focusable"));
        const { ref: O, node: D } = Object(r.h)(
          Object.assign(Object.assign({}, v), _)
        );
        Object(u.a)(f, O);
        const S = Object(l.g)(O, t);
        return (
          (!_.focusable && !_.focusableIfNoChildren) ||
            (D && D.Tree.BUseVirtualFocus()) ||
            (b.tabIndex = b.tabIndex || 0),
          s.a.createElement(
            r.g.Provider,
            { value: D },
            D
              ? s.a.createElement(
                  r.c,
                  Object.assign({}, b, {
                    divRef: S,
                    node: D,
                    focusClassName: Object(a.a)(m, "gpfocus"),
                    focusWithinClassName: Object(a.a)(p, "gpfocuswithin"),
                  })
                )
              : s.a.createElement("div", Object.assign({}, b, { ref: S }))
          )
        );
      });
    },
    LzMl: function (e, t, n) {
      e.exports = {
        ScrollPanel: "scrollpanel_ScrollPanel_1CXdi",
        ScrollY: "scrollpanel_ScrollY_313lB",
        ScrollBoth: "scrollpanel_ScrollBoth_3S2Ko",
        ScrollX: "scrollpanel_ScrollX_1oRGo",
      };
    },
    MOFx: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return s;
        });
      var i,
        o = n("3u1o");
      !(function (e) {
        (e[(e.LaunchGame = 0)] = "LaunchGame"),
          (e[(e.FriendMessage = 1)] = "FriendMessage"),
          (e[(e.ChatMention = 2)] = "ChatMention"),
          (e[(e.ChatMessage = 3)] = "ChatMessage"),
          (e[(e.ToastMessage = 4)] = "ToastMessage"),
          (e[(e.ToastAchievement = 5)] = "ToastAchievement"),
          (e[(e.ToastMisc = 6)] = "ToastMisc"),
          (e[(e.FriendOnline = 7)] = "FriendOnline"),
          (e[(e.FriendInGame = 8)] = "FriendInGame"),
          (e[(e.VolSound = 9)] = "VolSound"),
          (e[(e.ShowModal = 10)] = "ShowModal"),
          (e[(e.HideModal = 11)] = "HideModal"),
          (e[(e.IntoGameDetail = 12)] = "IntoGameDetail"),
          (e[(e.OutOfGameDetail = 13)] = "OutOfGameDetail"),
          (e[(e.PagedNavigation = 14)] = "PagedNavigation"),
          (e[(e.ToggleOn = 15)] = "ToggleOn"),
          (e[(e.ToggleOff = 16)] = "ToggleOff"),
          (e[(e.SliderUp = 17)] = "SliderUp"),
          (e[(e.SliderDown = 18)] = "SliderDown"),
          (e[(e.ChangeTabs = 19)] = "ChangeTabs"),
          (e[(e.DefaultOk = 20)] = "DefaultOk"),
          (e[(e.OpenSideMenu = 21)] = "OpenSideMenu"),
          (e[(e.CloseSideMenu = 22)] = "CloseSideMenu"),
          (e[(e.BasicNav = 23)] = "BasicNav"),
          (e[(e.FailedNav = 24)] = "FailedNav"),
          (e[(e.Typing = 25)] = "Typing");
      })(i || (i = {}));
      const s = new (class {
        constructor() {
          this.m_fnCallbackOnPlaySound = new o.a();
        }
        RegisterCallbackOnPlaySound(e) {
          return this.m_fnCallbackOnPlaySound.Register(e);
        }
        PlayNavSound(e) {
          this.m_fnCallbackOnPlaySound.Dispatch(e);
        }
      })();
    },
    NIxO: function (e, t, n) {
      e.exports = {
        TogglePasswordVisibilityBtn:
          "gamepadinput_TogglePasswordVisibilityBtn_1Z-Cc",
        Digits: "gamepadinput_Digits_znEp6",
      };
    },
    O8Yk: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return B;
      }),
        n.d(t, "d", function () {
          return P;
        }),
        n.d(t, "e", function () {
          return x;
        }),
        n.d(t, "b", function () {
          return k;
        }),
        n.d(t, "a", function () {
          return j;
        });
      var i = n("mrSG"),
        o = n("tXBB"),
        s = n("24VQ"),
        r = n("f5iL"),
        a = n("vYsE"),
        l = n("3u1o"),
        c = n("iDgP");
      var u = n("nDaX"),
        d = n("hane"),
        h = n("rSrx");
      function m(e, t, n) {
        const i = [],
          [o, s] = e.GetChildren(),
          r = e.GetActiveChild();
        let a;
        const l = r ? r.Element.getBoundingClientRect() : null;
        if (r) {
          const e = b(r, t, n);
          if (
            e &&
            !e.offScreen &&
            ((a = p(r, e, e.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          e && i.push({ child: r, visibility: e });
        }
        const c = n || l;
        for (let e = 0; e < o.length; e++) {
          const n = o[e];
          if (n == r) continue;
          const s = b(n, t, c);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort(g);
        for (const e of i) {
          const { child: n, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : p(n, i, i.overlap || t, c);
          o && (!u || g(o, u) < 0) && (u = o);
        }
        return u;
      }
      function p(e, t, n, i) {
        switch (e.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return m(e, t.overlap || n, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function g(e, t) {
        const n = e.visibility,
          i = t.visibility;
        return n.offScreen
          ? i.offScreen
            ? n.distance - i.distance
            : 1
          : i.offScreen
          ? -1
          : n.distance - i.distance;
      }
      function b(e, t, n) {
        const i = e.Element.getBoundingClientRect(),
          o = e.GetFocusable();
        let s;
        if ("none" == o) return null;
        if ("self" == o) {
          if (
            i.top < t.top ||
            i.right > t.right ||
            i.bottom > t.bottom ||
            i.left < t.left
          ) {
            const e = i.top + i.height / 2,
              n = i.left + i.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (n > t.right)
              return { offScreen: "right", distance: n - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (n < t.left) return { offScreen: "left", distance: t.left - n };
          }
          n && (s = Object(h.k)(i, n));
        } else if ("children" == o) {
          const n = e.Element;
          if (n.scrollHeight > i.height || n.scrollWidth > i.width) {
            const e = n.ownerDocument.defaultView.getComputedStyle(n);
            if ("visible" == e.overflowX || "visible" == e.overflowY)
              return { overlap: t };
          }
          if (i.bottom < t.top)
            return { offScreen: "top", distance: t.top - i.bottom };
          if (i.left > t.right)
            return { offScreen: "right", distance: i.left - t.right };
          if (i.top > t.bottom)
            return { offScreen: "bottom", distance: i.top - t.bottom };
          if (i.right < t.left)
            return { offScreen: "left", distance: t.left - i.right };
        }
        return {
          overlap: {
            top: Math.max(i.top, t.top),
            right: Math.min(i.right, t.right),
            bottom: Math.min(i.bottom, t.bottom),
            left: Math.max(i.left, t.left),
          },
          distance: s,
        };
      }
      var _ = n("7VqR"),
        f = n("xHQ9");
      const v = new c.a("ScrollSnap").Debug;
      let C = !1;
      let O;
      function D(e) {
        if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in e))
          return {
            left: 0,
            right: e.innerWidth,
            top: 0,
            bottom: e.innerHeight,
          };
        let t = 0,
          n = 0,
          i = e;
        for (; i; ) {
          if (((t += i.offsetTop), (n += i.offsetLeft), "ownerDocument" in i)) {
            if ("fixed" === window.getComputedStyle(i).position) break;
          }
          i = i.offsetParent;
        }
        for (i = null == e ? void 0 : e.parentElement; i; ) {
          const { scrollTop: e, scrollLeft: o } = F(i);
          if (((t -= e), (n -= o), "ownerDocument" in i)) {
            if ("fixed" === window.getComputedStyle(i).position) break;
          }
          i = i.parentElement;
        }
        return {
          left: n,
          top: t,
          right: n + e.offsetWidth,
          bottom: t + e.offsetHeight,
        };
      }
      function S(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function E(e, t, n, i) {
        let [o, s, r] = S(e, i),
          [a, l, c] = S(t, i),
          [u, d] = S(n, i);
        return o < a && s > l
          ? 0
          : (o < a && r <= c) || (s > l && r > c)
          ? o - a - u
          : (o < a && r > c) || (s > l && r <= c)
          ? s - l + d
          : 0;
      }
      function w(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
          ? parseInt(e)
          : (console.log("Unsupported length", e), 0);
      }
      function I(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: w(t.scrollMarginLeft),
          right: w(t.scrollMarginRight),
          top: w(t.scrollMarginTop),
          bottom: w(t.scrollMarginBottom),
        };
      }
      function R(e, t) {
        let n = (function (e) {
          let t;
          return (
            (t =
              "ownerDocument" in e
                ? e.ownerDocument.defaultView.getComputedStyle(e)
                : e.document.defaultView.getComputedStyle(
                    window.document.documentElement
                  )),
            {
              left: w(t.scrollPaddingLeft),
              right: w(t.scrollPaddingRight),
              top: w(t.scrollPaddingTop),
              bottom: w(t.scrollPaddingBottom),
            }
          );
        })(e);
        return {
          left: Math.max(0, t.left + n.left),
          right: Math.max(0, t.right - n.right),
          top: Math.max(0, t.top + n.top),
          bottom: Math.max(0, t.bottom - n.bottom),
        };
      }
      function T(e) {
        return e > -1 && e < 1;
      }
      function y(e, t, n, i, o) {
        v(
          "----------------------------------------------------------------------------------"
        ),
          v("Scrolling Into View:", t);
        let s = [],
          r = t,
          a = D(t),
          l = null != o ? o : Number.MAX_VALUE;
        for (; r; ) {
          let e = Object(h.m)(r);
          e || (e = Object(h.n)(r));
          let t = I(r),
            n = R(e, D(e)),
            c = M(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (v(
              "Checking scroll div",
              e,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${
                c.scrollLeft
              } of ${c.MaxScrollLeft()}, adjusted =>`,
              n,
              "target => ",
              a
            ),
            (i && "y" != i) ||
              !Object(h.c)(e, "y") ||
              ((u.top = E(a, n, t, "y")),
              (u.top = _.a(
                u.top,
                -c.scrollTop,
                c.MaxScrollTop() - c.scrollTop
              )),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              v(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !Object(h.c)(e, "x") ||
              ((u.left = E(a, n, t, "x")),
              (u.left = _.a(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft
              )),
              o &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              v(`- checked x: ${u.left}`)),
            s.push(u),
            o && !l)
          )
            break;
          if (!("ownerDocument" in e)) break;
          const d = window.getComputedStyle(e);
          if ("fixed" === d.position || "sticky" === d.position) break;
          (r = e),
            (a = {
              top: a.top - u.top,
              right: a.right - u.left,
              bottom: a.bottom - u.top,
              left: a.left - u.left,
            });
        }
        let c = !1;
        for (let e of s) {
          if (T(e.left) && T(e.top)) continue;
          let t = M(e.element),
            i = t.scrollTop + e.top,
            o = t.scrollLeft + e.left;
          (o = _.a(o, 0, t.MaxScrollLeft())),
            (i = _.a(i, 0, t.MaxScrollTop())),
            (T(t.scrollLeft - o) && T(t.scrollTop - i)) ||
              (t.scrollTo({ left: o, top: i, behavior: n }),
              c || (v("Scrolling:"), (c = !0)),
              v(
                `- ${e.top},${e.left} => ${i}, ${o}, behavior: ${n}`,
                e.element
              ));
        }
      }
      class N {
        constructor(e) {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            (this.m_animation = void 0),
            "ownerDocument" in e
              ? ((this.m_element = e),
                (this.m_fnOriginalScrollTo = e.scrollTo),
                (this.m_element.scrollTo = (e, t) => {
                  "number" == typeof e
                    ? this.scrollTo({ left: e, top: t })
                    : this.scrollTo(e);
                }))
              : ((this.m_window = e),
                (this.m_element = e.document.documentElement));
        }
        ResetScrollState() {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            this.m_window || (this.m_element.style.scrollSnapType = "");
        }
        scrollTo(e) {
          var t, n;
          if ("auto" == e.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(e)
                : this.m_fnOriginalScrollTo.apply(this.m_element, [e]),
              this.ResetScrollState();
          else {
            const i =
                null !== (t = e.left) && void 0 !== t ? t : this.scrollLeft,
              o = null !== (n = e.top) && void 0 !== n ? n : this.scrollTop;
            let s = "sine";
            this.m_animation && (this.m_animation.Cancel(), (s = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - o),
                Math.abs(this.currentScrollLeft - i)
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: s,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const t = this.currentScrollLeft,
                  n = this.currentScrollTop;
                this.m_animation = new f.b(this.m_window, e, (e) => {
                  this.m_window.scrollTo({
                    left: t + (i - t) * e,
                    top: n + (o - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new f.c(
                    this.m_element,
                    { scrollTop: o, scrollLeft: i },
                    e
                  ));
              (this.m_scrollLeftTarget = i),
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
          var e;
          return null !== (e = this.m_scrollLeftTarget) && void 0 !== e
            ? e
            : this.currentScrollLeft;
        }
        get scrollTop() {
          var e;
          return null !== (e = this.m_scrollTopTarget) && void 0 !== e
            ? e
            : this.currentScrollTop;
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
      Object(i.b)([a.a], N.prototype, "ResetScrollState", null);
      const L = new WeakMap();
      function M(e) {
        let t = L.get(e);
        return t || ((t = new N(e)), L.set(e, t)), t;
      }
      function F(e) {
        const t = L.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const A = new c.a("FocusNavigationMovement").Debug;
      var B, P, x, k;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(B || (B = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(P || (P = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(x || (x = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(k || (k = {}));
      class j {
        constructor(e, t, n) {
          (this.m_rgChildren = []),
            (this.m_iLastActiveChildIndex = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bMounted = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new l.a()),
            (this.m_bFocusWithin = !1),
            (this.m_FocusWithinCallbackList = new l.a()),
            (this.m_ActionDescriptionsChangedCallbackList = new l.a()),
            (this.m_RetainFocusParent = null),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new d.e(this);
        }
        get Tree() {
          return this.m_Tree;
        }
        get NavKey() {
          var e, t;
          return (
            null === (e = this.m_Properties) || void 0 === e ? void 0 : e.navKey
          )
            ? this.m_Properties.navKey
            : (null === (t = this.m_element) || void 0 === t ? void 0 : t.id)
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
          var t, n, i, o, s;
          const r =
            ((a =
              null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.actionDescriptionMap),
            (l = null == e ? void 0 : e.actionDescriptionMap),
            !(null == a || null == l
              ? a === l
              : "object" == typeof a &&
                "object" == typeof l &&
                Object.keys(a).length === Object.keys(l).length &&
                Object.keys(a).every(
                  (e) => l.hasOwnProperty(e) && a[e] === l[e]
                )));
          var a, l;
          const c =
              null === (n = this.m_Properties) || void 0 === n
                ? void 0
                : n.retainFocus,
            d =
              null === (i = this.m_Properties) || void 0 === i
                ? void 0
                : i.noFocusRing;
          (this.m_Properties = e || {}),
            r && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.retainFocus && !c
              ? this.PropagateRetainFocusParentToChildren(this)
              : !this.m_Properties.retainFocus &&
                c &&
                this.PropagateRetainFocusParentToChildren(
                  this.m_RetainFocusParent
                ),
            this.m_Properties.noFocusRing && !d && this.BHasFocus()
              ? null === (o = this.m_FocusRing) ||
                void 0 === o ||
                o.OnBlur(u.c.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                d &&
                this.BHasFocus() &&
                (null === (s = this.m_FocusRing) ||
                  void 0 === s ||
                  s.OnFocus(u.c.APPLICATION, this, this)),
            this.m_element && this.RegisterDOMEvents();
        }
        BWantsAutoFocus() {
          return this.m_Properties.autoFocus || this.m_bAutoFocusChild;
        }
        BWantsPreferredFocus() {
          return this.m_Properties.preferredFocus;
        }
        BWantsFocusRing() {
          return (
            !this.m_Properties.noFocusRing ||
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
          var t;
          e != this.m_bFocusWithin &&
            ((this.m_bFocusWithin = e),
            this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
            (null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.onFocusWithin) &&
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
          var e;
          null === (e = this.m_FocusRing) ||
            void 0 === e ||
            e.OnForceMeasureFocusRing();
        }
        get ActionDescriptionChangedCallbackList() {
          return this.m_ActionDescriptionsChangedCallbackList;
        }
        GetActiveActionDescriptions() {
          return this.BuildConsolidatedActionDescriptionMap({});
        }
        BuildConsolidatedActionDescriptionMap(e) {
          var t;
          const n =
            null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.actionDescriptionMap;
          if (n)
            for (const t in n) {
              const i = t;
              void 0 === e[i] && (e[i] = n[i]);
            }
          return this.m_Parent
            ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
            : e;
        }
        AddChild(e) {
          var t;
          this.m_rgChildren.push(e),
            (this.m_bChildrenSorted = !1),
            this.m_element && this.RegisterDOMEvents(),
            (
              null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.retainFocus
            )
              ? e.SetRetainFocusParent(this)
              : this.m_RetainFocusParent &&
                e.SetRetainFocusParent(this.m_RetainFocusParent),
            this.m_bMounted &&
              e.BFocusWithin() &&
              (Object(r.a)(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild"
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : Object(r.a)(
                  this == this.m_Tree.Root,
                  "Only root should have no parent"
                ),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const t =
              this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus(),
            n = this.m_Properties.autoFocus || t;
          if (this.BWantsAutoFocus() || n) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties.autoFocus || n || -1 !== e) &&
                (this.SetActiveChild(e),
                !this.m_Parent || this.m_Parent.m_element
                  ? t
                    ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                      this.m_Tree.DeferredFocus.RequestFocus(
                        this.m_RetainFocusParent,
                        { bFocusDescendant: !0 }
                      )
                    : this.Tree.DeferredFocus.RequestFocus(this)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
            -1 != e &&
              (this.SetActiveChild(e),
              Object(r.a)(
                this.m_bFocusWithin,
                "Child has focus, we should be m_bFocusWithin"
              ));
          }
        }
        DEV_SetDebugPropsOnElement() {}
        OnUnmount() {
          var e;
          (null === (e = this.m_Properties) || void 0 === e
            ? void 0
            : e.retainFocus) &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
            (this.m_bMounted = !1);
          const t = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.m_bFocused || t) &&
            (A(
              `The focused node is unmounting, ${
                this.m_RetainFocusParent
                  ? "will transfer to retain focus ancestor"
                  : "will blur"
              }.`
            ),
            t && this.Tree.DeferredFocus.RequestFocus(void 0),
            this.m_RetainFocusParent
              ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
              : this.m_bFocused &&
                this.m_Tree.TransferFocus(u.c.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : Object(r.a)(
                  this == this.m_Tree.Root,
                  "Only root should have no parent"
                );
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties.layout != B.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              Object(u.i)(this.m_element, this.OnNavigationEvent)
            ),
            (this.m_Properties.focusable || 0 == this.m_rgChildren.length) &&
              (this.m_rgFocusHandlers.length ||
                (this.m_element.addEventListener("focus", this.OnDOMFocus),
                this.m_element.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(() => {
                  this.m_element.removeEventListener("focus", this.OnDOMFocus),
                    this.m_element.removeEventListener("blur", this.OnDOMBlur);
                })));
        }
        RemoveChild(e) {
          let t = this.m_rgChildren.indexOf(e);
          Object(r.a)(-1 !== t, "Child was not found to remove"),
            -1 !== t &&
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
          const e = this.GetActiveChild();
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
              this.m_rgChildren[this.m_iLastActiveChildIndex] ==
                this.m_ActiveChild
            )
              return this.m_iLastActiveChildIndex;
            this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
              this.m_ActiveChild
            );
          }
          return this.m_iLastActiveChildIndex;
        }
        EnsureChildrenSorted(e = !1) {
          (this.m_bChildrenSorted && !e) ||
            (this.m_rgChildren.sort((e, t) => {
              const n = e.m_element,
                i = t.m_element;
              if (!n) return i ? 1 : 0;
              if (!i) return -1;
              const o = n.compareDocumentPosition(i);
              return o & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : o & Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : 0;
            }),
            this.m_ActiveChild &&
              (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
                this.m_ActiveChild
              )),
            (this.m_bChildrenSorted = !0));
        }
        GetLastFocusElement() {
          const e = this.GetActiveChild();
          return e ? e.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(e) {
          this.m_bFocused || this.m_Tree.TransferFocus(u.c.BROWSER, this);
        }
        OnDOMBlur(e) {
          this.m_bFocused &&
            this.m_element.ownerDocument.hasFocus() &&
            this.m_Tree.TransferFocus(u.c.BROWSER, null);
        }
        UpdateParentActiveChild() {
          this.m_Parent &&
            (this.m_Parent.SetActiveChild(this),
            this.m_Parent.UpdateParentActiveChild());
        }
        GetFocusable() {
          const {
            focusable: e,
            focusableIfNoChildren: t,
            childFocusDisabled: n,
            fnCanTakeFocus: i,
          } = this.m_Properties;
          return this.m_bMounted
            ? i && !i(this)
              ? "none"
              : e || (t && (n || 0 == this.m_rgChildren.length))
              ? "self"
              : !n && this.m_rgChildren.length
              ? "children"
              : "none"
            : "none";
        }
        BTakeFocus(e, t) {
          const n = this.FindFocusableNode(t);
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
          const n = this.FindFocusableDescendant(t);
          return this.InternalFocusDescendant(n, e, t);
        }
        BFocusFirstChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            -1,
            k.FORWARD,
            o.a.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            k.BACKWARD,
            o.a.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const n = Object(d.a)(e),
            { focusableIfNoChildren: i, childFocusDisabled: o } =
              this.m_Properties;
          if (o) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: o, resetNavOnEntry: r } =
              this.m_Properties;
            let a,
              l = this.GetActiveChildIndex();
            if ((r && void 0 !== e && (l = -1), !this.IsValidChildIndex(l))) {
              const e = this.GetLayout();
              l =
                l >= this.m_rgChildren.length ||
                e == B.ROW_REVERSE ||
                e == B.COLUMN_REVERSE ||
                o == P.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((o == P.MAINTAIN_X || o == P.MAINTAIN_Y || t) && n) {
              let i, r;
              o == P.MAINTAIN_X ? (i = "x") : o == P.MAINTAIN_Y && (i = "y"),
                i == s.d[n] &&
                  (r = this.m_Tree.GetLastFocusedMovementRect(s.d[n])),
                A(
                  `Taking focus while preserving ${P[o]} preserved: ${i} movement: ${n}, node:`,
                  r || t
                );
              const l = this.ComputeRelativeDirection(e, B.GRID);
              if (r || t) {
                const o = l == k.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                a = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || s.d[n],
                  l,
                  e,
                  r || t,
                  o,
                  this.m_rgChildren[o].GetBoundingRect()
                );
              } else if (i != s.d[n]) {
                const t = l == k.BACKWARD ? this.m_rgChildren.length : -1;
                a = this.FindNextFocusableChildInDirection(t, l, e);
              }
            } else if (o == P.PREFERRED_CHILD) {
              for (const t of this.m_rgChildren)
                if (
                  ((a = t.BWantsPreferredFocus() && t.FindFocusableNode(e)), a)
                )
                  return a;
            } else
              o == P.LAST &&
                (a = this.FindNextFocusableChildInDirection(
                  l + 1,
                  k.BACKWARD,
                  e
                ));
            return (
              a ||
                (a = this.FindNextFocusableChildInDirection(
                  l - 1,
                  k.FORWARD,
                  e
                )),
              a ||
                (a = this.FindNextFocusableChildInDirection(l, k.BACKWARD, e)),
              a || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          var t;
          const n = m(
            this,
            this.Element
              ? this.Element.getBoundingClientRect()
              : document.body.getBoundingClientRect()
          );
          return (
            A(
              `Focusing visible child, best child match is ${
                null === (t = null == n ? void 0 : n.child) || void 0 === t
                  ? void 0
                  : t.Element.className
              } - ${JSON.stringify(null == n ? void 0 : n.visibility)}`
            ),
            !!n && n.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return B.NONE;
          return Object(d.f)(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat)) return !0;
          const {
            onMoveUp: n,
            onMoveRight: i,
            onMoveDown: s,
            onMoveLeft: r,
          } = this.m_Properties;
          let a = !1;
          switch (t) {
            case o.a.DIR_UP:
              n && (a = n(e.detail, this));
              break;
            case o.a.DIR_RIGHT:
              i && (a = i(e.detail, this));
              break;
            case o.a.DIR_DOWN:
              s && (a = s(e.detail, this));
              break;
            case o.a.DIR_LEFT:
              r && (a = r(e.detail, this));
          }
          return a;
        }
        InternalFocusDescendant(e, t, n) {
          return !!e && (this.m_Tree.TransferFocus(t, e, Object(d.a)(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          const n = this.GetLayout();
          let i,
            s = this.ComputeRelativeDirection(e, n);
          if (
            (A(
              `Handling navigation event ${o.a[e]} - ${B[n]} - ${k[s]}`,
              this.m_element
            ),
            s == k.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return A("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == B.GRID))
            i = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              s,
              e
            );
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = s == k.FORWARD ? -1 : this.m_rgChildren.length),
              (i = this.FindNextFocusableChildInDirection(t, s, e));
          }
          if (i) {
            const n = Object(d.a)(e);
            if (this.GetScrollIntoViewType() == x.NoTransformSparseContent) {
              const e =
                  ("y" == n ? window.innerHeight : window.innerWidth) /
                  (t ? 4.5 : 3.33),
                o = D(i.Element);
              if (
                (o.top > window.innerHeight &&
                  o.bottom > window.innerHeight + e) ||
                (o.bottom < 0 && o.top < -e) ||
                (o.left > window.innerWidth &&
                  o.right > window.innerWidth + e) ||
                (o.right < 0 && o.left < -e)
              )
                return (
                  A(`Element too far away, scrolling ${e} on ${n} axis `),
                  y(i.Element, i.Element, "smooth", n, e),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(u.c.GAMEPAD, i, n), !0;
          }
          return !1;
        }
        GetScrollIntoViewType() {
          var e;
          return (
            null === (e = this.m_Properties) || void 0 === e
              ? void 0
              : e.scrollIntoViewType
          )
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
            ? this.m_Parent.GetScrollIntoViewType()
            : x.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let n = t == B.ROW_REVERSE || t == B.COLUMN_REVERSE;
          switch (t) {
            case B.ROW:
            case B.ROW_REVERSE:
              switch (e) {
                case o.a.DIR_LEFT:
                  return n ? k.FORWARD : k.BACKWARD;
                case o.a.DIR_RIGHT:
                  return n ? k.BACKWARD : k.FORWARD;
                default:
                  return k.INVALID;
              }
            case B.COLUMN:
            case B.COLUMN_REVERSE:
              switch (e) {
                case o.a.DIR_UP:
                  return n ? k.FORWARD : k.BACKWARD;
                case o.a.DIR_DOWN:
                  return n ? k.BACKWARD : k.FORWARD;
                default:
                  return k.INVALID;
              }
            case B.GRID:
              switch (e) {
                case o.a.DIR_LEFT:
                case o.a.DIR_UP:
                  return n ? k.FORWARD : k.BACKWARD;
                case o.a.DIR_RIGHT:
                case o.a.DIR_DOWN:
                  return n ? k.BACKWARD : k.FORWARD;
                default:
                  return k.INVALID;
              }
            default:
              return k.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == k.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, n) {
          let i = t == k.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let i = t == k.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (n(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, n) {
          const i = n == o.a.DIR_UP || n == o.a.DIR_DOWN,
            s = this.GetLastFocusElement();
          if (!s || s == this.m_element)
            return (
              Object(r.a)(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                s
              ),
              this.FindFocusableDescendant(n)
            );
          const a = this.GetActiveDescendant().GetBoundingRect();
          if (n == o.a.DIR_UP || n == o.a.DIR_DOWN) {
            const e = this.m_Tree.GetLastFocusedMovementRect("x");
            e && ((a.x = e.x), (a.width = e.width));
          }
          if (i) {
            let i = e;
            for (; -1 != i; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(i, t),
                t,
                (e) => !Object(d.b)("y", a, e.GetBoundingRect())
              );
              if (-1 != e) {
                const i = this.m_rgChildren[e].GetBoundingRect(),
                  o = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    n,
                    a,
                    e,
                    i
                  );
                if (o) return o;
              }
              i = e;
            }
          } else {
            let i = t == k.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(e, t);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const e = this.m_rgChildren[o];
              if (!Object(d.b)("y", a, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(n);
              if (t) return t;
            }
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, n, i, o, r) {
          (!o || o < 0) && (o = 0);
          let a = [];
          const l = Object(d.g)(i);
          this.ScanChildren(o, t, (t) => {
            const n = t.GetBoundingRect();
            return (
              !(!r || Object(d.b)(s.d[e], r, n)) ||
              (a.push({
                child: t,
                overlap: Object(d.i)(e, i, n),
                dist: Object(d.d)(e, l, n),
              }),
              !1)
            );
          }),
            t == k.BACKWARD && a.reverse(),
            a.sort((e, t) => {
              const n = t.overlap - e.overlap;
              return 0 != n ? n : e.dist - t.dist;
            });
          for (const { child: e } of a) {
            const t = e.FindFocusableNode(n, i);
            if (t) return t;
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
          e instanceof j
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
            this.m_Properties.retainFocus ||
              this.PropagateRetainFocusParentToChildren(e);
        }
        PropagateRetainFocusParentToChildren(e) {
          for (let t = 0; t < this.m_rgChildren.length; t++)
            this.m_rgChildren[t].SetRetainFocusParent(e);
        }
        OnFocusedDecendantRemoved(e) {
          this.m_Tree.DeferredFocus.RequestFocus(this, {
            bFocusDescendant: !0,
          });
        }
        SetDOMFocusAndScroll(e, t) {
          this.UpdateParentActiveChild(),
            this.m_Tree.BIsActiveFocus()
              ? (Object(r.a)(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus"
                ),
                this.m_element.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                A(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`
                ),
            (function (e, t) {
              var n, i, o, s;
              const r = e.Element;
              let a = e,
                l =
                  null === (n = e.m_Properties) || void 0 === n
                    ? void 0
                    : n.scrollIntoViewType;
              for (let t = e.Parent; t; t = t.Parent)
                (null === (i = t.m_Properties) || void 0 === i
                  ? void 0
                  : i.scrollIntoViewWhenChildFocused) && (a = t),
                  void 0 === l &&
                    (l =
                      null === (o = t.m_Properties) || void 0 === o
                        ? void 0
                        : o.scrollIntoViewType);
              if ((void 0 === l && (l = C ? x.NoTransform : x.Standard), !r))
                return;
              if (
                (null === (s = a.m_Properties) || void 0 === s
                  ? void 0
                  : s.fnScrollIntoViewHandler) &&
                !1 !== a.m_Properties.fnScrollIntoViewHandler(e, t, a)
              )
                return;
              const c = a.m_element,
                u = l == x.NoTransform || l == x.NoTransformSparseContent;
              if (t) {
                const t = u ? D(c) : c.getBoundingClientRect();
                let n = !1;
                const i = Math.max(1.4 * (t.bottom - t.top), 40);
                ((O && performance.now() - O < 500) ||
                  t.bottom < -i ||
                  t.top > window.innerHeight + i) &&
                  (n = !0);
                let o = n ? "auto" : "smooth";
                n && (O = performance.now()),
                  e.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                  u
                    ? y(0, c, o)
                    : c.scrollIntoView({ behavior: o, block: "nearest" });
              } else
                u
                  ? y(0, c, "auto")
                  : c.scrollIntoView({
                      behavior: "auto",
                      block: "nearest",
                      inline: "nearest",
                    });
            })(this, t),
            this.m_Tree.OnChildActivated(e);
        }
      }
      Object(i.b)([a.a], j.prototype, "OnDOMFocus", null),
        Object(i.b)([a.a], j.prototype, "OnDOMBlur", null),
        Object(i.b)([a.a], j.prototype, "OnNavigationEvent", null);
    },
    Or3k: function (e, t, n) {
      e.exports = {
        "duration-app-launch": "800ms",
        PagedSettingsDialog: "gamepadpagedsettings_PagedSettingsDialog_2P_CG",
        PagedSettingsDialog_PageContent:
          "gamepadpagedsettings_PagedSettingsDialog_PageContent_wIOLO",
        NoPadding: "gamepadpagedsettings_NoPadding_2BpB-",
        PagedSettingsDialog_PageListColumn:
          "gamepadpagedsettings_PagedSettingsDialog_PageListColumn_2EZ3o",
        PagedSettingsDialog_Title:
          "gamepadpagedsettings_PagedSettingsDialog_Title_1Px9u",
        PagedSettingsDialog_PageList:
          "gamepadpagedsettings_PagedSettingsDialog_PageList_3c_Jp",
        PagedSettingsDialog_PageListItem:
          "gamepadpagedsettings_PagedSettingsDialog_PageListItem_1ix7r",
        DisabledItem: "gamepadpagedsettings_DisabledItem_3Lp2f",
        Active: "gamepadpagedsettings_Active_22LLB",
        "ItemFocusAnim-darkerGrey":
          "gamepadpagedsettings_ItemFocusAnim-darkerGrey_ur7gu",
        "ItemFocusAnim-darkGrey":
          "gamepadpagedsettings_ItemFocusAnim-darkGrey_3qFxl",
        PageListItem_Icon: "gamepadpagedsettings_PageListItem_Icon_1F_5Q",
        PageListItem_Title: "gamepadpagedsettings_PageListItem_Title_2PPLv",
        Separator: "gamepadpagedsettings_Separator_3vV7l",
        PagedSettingDialog_ContentColumn:
          "gamepadpagedsettings_PagedSettingDialog_ContentColumn_3JPle",
        Up: "gamepadpagedsettings_Up_3Qp0k",
        ContentTransition: "gamepadpagedsettings_ContentTransition_NCmol",
        Enter: "gamepadpagedsettings_Enter_2x_gO",
        EnterActive: "gamepadpagedsettings_EnterActive_1JBp4",
        Exit: "gamepadpagedsettings_Exit_1lJGy",
        ExitActive: "gamepadpagedsettings_ExitActive_1fljM",
        Down: "gamepadpagedsettings_Down_37IKR",
        "ItemFocusAnim-darkerGrey-nocolor":
          "gamepadpagedsettings_ItemFocusAnim-darkerGrey-nocolor_3M5nC",
        "ItemFocusAnim-grey": "gamepadpagedsettings_ItemFocusAnim-grey_1fG-j",
        "ItemFocusAnimBorder-darkGrey":
          "gamepadpagedsettings_ItemFocusAnimBorder-darkGrey_2l2lk",
        "ItemFocusAnim-green": "gamepadpagedsettings_ItemFocusAnim-green_HSYwK",
        focusAnimation: "gamepadpagedsettings_focusAnimation_nKO5M",
        hoverAnimation: "gamepadpagedsettings_hoverAnimation_vXWdQ",
      };
    },
    R5YR: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return r;
        }),
        n.d(t, "f", function () {
          return a;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return u;
        });
      var i = n("mrSG"),
        o = n("q1tI");
      n("Zdsb"), n("GbHM"), n("oIPy"), n("Nr4G");
      function s(e) {
        const { direction: t } = e,
          n = Object(i.c)(e, ["direction"]);
        switch (t) {
          case "up":
            return o.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                n
              ),
              o.createElement("path", {
                d: "M17.98 10.23L3.20996 25H32.75L17.98 10.23Z",
                fill: "currentColor",
              })
            );
          case "down":
            return o.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                n
              ),
              o.createElement("path", {
                d: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
                fill: "currentColor",
              })
            );
          case "left":
            return o.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                n
              ),
              o.createElement("path", {
                d: "M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z",
                fill: "currentColor",
              })
            );
          case "right":
            return o.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                n
              ),
              o.createElement("path", {
                d: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
                fill: "currentColor",
              })
            );
        }
      }
      function r(e) {
        return o.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e
          ),
          o.createElement("path", {
            d: "M16 34V21H3V16H16V3H21V16H34V21H21V34H16Z",
            fill: "currentColor",
          })
        );
      }
      function a(e) {
        return o.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e
          ),
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
            fill: "currentColor",
          })
        );
      }
      function l(e) {
        return o.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e
          ),
          o.createElement("path", {
            d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
            fill: "currentColor",
          }),
          o.createElement("path", {
            d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
            fill: "currentColor",
          })
        );
      }
      function c(e) {
        return o.createElement(
          "svg",
          {
            width: "5",
            height: "19",
            viewBox: "0 0 5 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          o.createElement("path", {
            d: "M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z",
            fill: "white",
          })
        );
      }
      function u(e) {
        return o.createElement(
          "svg",
          {
            width: "5",
            height: "19",
            viewBox: "0 0 5 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          o.createElement("path", {
            d: "M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z",
            fill: "white",
          })
        );
      }
    },
    RLZf: function (e, t, n) {
      e.exports = {
        ContextMenuMouseOverlay: "contextmenu_ContextMenuMouseOverlay_pu9cO",
        ContextMenuFocusContainer:
          "contextmenu_ContextMenuFocusContainer_2qyBZ",
        contextMenu: "contextmenu_contextMenu_LQkrb",
        ContextMenuPopup: "contextmenu_ContextMenuPopup_2GpKT",
        contextMenuContents: "contextmenu_contextMenuContents_2y2tU",
        contextMenuItem: "contextmenu_contextMenuItem_pFo3k",
        active: "contextmenu_active_1KPWU",
        MenuSectionHeader: "contextmenu_MenuSectionHeader_2Q7u1",
        ContextMenuSeparator: "contextmenu_ContextMenuSeparator_1F2Ec",
        NoSeparation: "contextmenu_NoSeparation_3twt2",
        UpperCase: "contextmenu_UpperCase_2ZwZj",
        SubMenu: "contextmenu_SubMenu_jVo8T",
        Label: "contextmenu_Label_38fI0",
        Arrow: "contextmenu_Arrow_2NKnR",
        PopoutSubMenu: "contextmenu_PopoutSubMenu_IpTgn",
        PopoutSubMenuItems: "contextmenu_PopoutSubMenuItems_y5L1f",
      };
    },
    ROh0: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var i = n("tXBB"),
        o = (n("24VQ"), n("3u1o")),
        s = n("iDgP"),
        r = n("nDaX"),
        a = (n("6RuE"), n("hane"), n("O8Yk"));
      const l = new s.a("FocusNavigation").Debug,
        c = new s.a("GamepadEvents").Debug;
      class u {
        constructor(e, t) {
          (this.m_onActivateCallbacks = new o.a()),
            (this.m_onDeactivateCallbacks = new o.a()),
            (this.m_onActiveFocusStateChangedCallbacks = new o.a()),
            (this.m_lastFocusNodeXMovement = new d()),
            (this.m_lastFocusNodeYMovement = new d()),
            (this.m_DeferredFocus = new h(this)),
            (this.m_Controller = e),
            (this.m_ID = t),
            (this.m_Root = new a.a(this, null, null)),
            this.m_Root.SetProperties({ layout: a.c.COLUMN }),
            (window.GamepadNavTree = this);
        }
        SetUseVirtualFocus(e) {
          this.m_bVirtualFocus = e;
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
        BUseVirtualFocus() {
          return this.m_bVirtualFocus;
        }
        CreateNode(e, t) {
          return new a.a(this, e, t);
        }
        RegisterNavigationItem(e, t) {
          return e.OnMount(t), () => e.OnUnmount();
        }
        OnChildActivated(e) {
          this.m_bIsMounted &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
        }
        GetLastFocusedNode() {
          return this.m_lastFocusNode;
        }
        GetLastFocusedMovementRect(e) {
          return "x" == e
            ? this.m_lastFocusNodeXMovement.GetRect()
            : "y" == e
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
        OnActivate(e) {
          this.m_onActivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
        }
        OnDeactivate(e) {
          this.m_onDeactivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this);
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
          this.m_Controller.OnGamepadNavigationTreeActivated(this, e);
        }
        Deactivate() {
          this.m_Controller.BlurNavTree(this);
        }
        BIsActive() {
          return (
            this.m_Controller.IsActiveNavTree(this) ||
            this.m_Controller.IsActiveFocusNavTree(this)
          );
        }
        BIsActiveFocus() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        SetIsMounted() {
          const e = this.m_Root.Element;
          (e.__nav_tree = this),
            e.__nav_wrapper && e.__nav_wrapper.BindTree(this),
            (this.m_bIsMounted = !0);
        }
        SetParentEmbeddedNavTree(e) {
          this.m_ParentEmbeddedNavTree = e;
        }
        GetParentEmbeddedNavTree() {
          return this.m_ParentEmbeddedNavTree;
        }
        SetOnUnhandledButtonCallback(e) {
          this.m_onUnhandledButton = e;
        }
        HandleButtonDownEventAsLogicalEvent(e) {
          let { bUnhandled: t, bHadLogicalEventMapping: n } = Object(r.d)(e);
          return (
            c(
              `Logical gamepad Event fired: ${
                i.a[e.detail.button]
              }, had logical event: ${n}, was handled: ${!t}`
            ),
            t && this.m_onUnhandledButton && (t = this.m_onUnhandledButton(e)),
            t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
            e.stopPropagation(),
            t
          );
        }
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        TransferFocus(e, t, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(e, t, n)
          );
        }
        TransferFocusInternal(e, t, n) {
          const i = this.m_lastFocusNode;
          if (
            i == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          l(
            `Transfer focus in ${this.id}, source: ${r.c[e]}, from/to:`,
            null == i ? void 0 : i.m_element,
            null == t ? void 0 : t.m_element
          );
          const o = { blurredNode: i, focusedNode: t, source: e },
            s = (function (e, t) {
              if (!t || !e) return null;
              let n = t,
                i = e;
              for (; n.GetDepth() > i.GetDepth() && n.Parent; ) n = n.Parent;
              for (; i.GetDepth() > n.GetDepth() && i.Parent; ) i = i.Parent;
              for (; n != i && n && i; ) (n = n.Parent), (i = i.Parent);
              return n;
            })(i, t);
          if (i) {
            i.SetHasFocus(!1);
            for (let e = i; e && e != s; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != s; e = e.Parent) e.SetFocusWithin(!0);
          }
          let a = this.m_Controller.OnFocusChangeStart(e, this, i, t);
          t && t.SetDOMFocusAndScroll(e, i),
            i &&
              (Object(r.b)(i.Element, "vgp_onblur", o),
              !i.m_FocusRing ||
                (t && i.m_FocusRing == t.m_FocusRing) ||
                i.m_FocusRing.OnBlur(e, i, t)),
            t &&
              (Object(r.b)(t.Element, "vgp_onfocus", o),
              t.m_FocusRing &&
                (i && t.m_FocusRing == i.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, i, t)
                  : t.m_FocusRing.OnFocus(e, t, i))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(t.Element)
              : "y" == n
              ? this.m_lastFocusNodeYMovement.SetNode(t.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_Controller.OnFocusChangeComplete(a);
        }
      }
      class d {
        SetNode(e) {
          (this.m_element = e),
            (this.m_rect = e ? e.getBoundingClientRect() : void 0);
        }
        Reset() {
          this.SetNode(void 0);
        }
        GetRect() {
          var e;
          return (
            null === (e = this.m_element) || void 0 === e
              ? void 0
              : e.isConnected
          )
            ? this.m_element.getBoundingClientRect()
            : this.m_rect;
        }
      }
      class h {
        constructor(e) {
          (this.m_bSuppressed = !1), (this.m_tree = e);
        }
        RequestFocus(e, t) {
          e
            ? ((this.m_target = Object.assign(Object.assign({}, t), {
                node: e,
              })),
              this.m_interval ||
                this.m_bSuppressed ||
                (this.m_interval = window.setTimeout(() => {
                  (this.m_interval = void 0), this.ExecuteQueuedFocus();
                }, 1)))
            : (this.m_target = void 0);
        }
        BHasQueuedFocusNode() {
          return !!this.m_target;
        }
        BIsQueuedFocusNode(e) {
          return this.m_target && this.m_target.node == e;
        }
        SuppressFocus() {
          this.m_bSuppressed = !0;
        }
        Reset() {
          (this.m_bSuppressed = !1),
            (this.m_target = void 0),
            this.ClearInterval();
        }
        ClearInterval() {
          this.m_interval &&
            (window.clearInterval(this.m_interval), (this.m_interval = void 0));
        }
        ExecuteQueuedFocus() {
          if (((this.m_bSuppressed = !1), this.m_target)) {
            const { node: e, bFocusDescendant: t } = this.m_target;
            (this.m_target = void 0),
              l(
                `DeferredFocus in ${this.m_tree.id} - focusing ${
                  t ? "descendant of" : "node"
                } ${e.NavKey}`
              ),
              t
                ? e.BChildTakeFocus(r.c.APPLICATION) ||
                  this.m_tree.TransferFocus(r.c.APPLICATION, e)
                : e.BTakeFocus(r.c.APPLICATION);
          }
        }
      }
    },
    S66T: function (e, t, n) {
      e.exports = {
        DialogDropDownMenu_Item: "dropdown_DialogDropDownMenu_Item_1R-DV",
        DialogDropDownMenu: "dropdown_DialogDropDownMenu_1tiuY",
      };
    },
    SS8s: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return T;
      }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "b", function () {
          return N;
        }),
        n.d(t, "e", function () {
          return M;
        }),
        n.d(t, "g", function () {
          return F;
        }),
        n.d(t, "a", function () {
          return A;
        }),
        n.d(t, "f", function () {
          return B;
        }),
        n.d(t, "h", function () {
          return P;
        });
      var i = n("mrSG"),
        o = n("TyAF"),
        s = n("q1tI"),
        r = n("i8i4"),
        a = n("pC2t"),
        l = (n("/0nC"), n("kDGI")),
        c = n("fsrB"),
        u = n("Lsvi"),
        d = n("nDaX"),
        h = (n("hane"), n("O8Yk"));
      n("tXBB");
      const m = Object.seal({ onMoveUp: p, onMoveDown: p });
      Object.seal({ onMoveRight: p, onMoveLeft: p });
      function p(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == h.b.FORWARD
          ? t.BFocusFirstChild(d.c.GAMEPAD)
          : n == h.b.BACKWARD && t.BFocusLastChild(d.c.GAMEPAD);
      }
      var g = n("R1j/"),
        b = n("MOFx"),
        _ = n("e356"),
        f = n("GbHM"),
        v = n("6MVd"),
        C = n("rSrx"),
        O = n("GXif"),
        D = n("hCpY"),
        S = n("/Q1a"),
        E = n("RLZf"),
        w = n.n(E),
        I = n("a/Rh");
      const R = Object(g.a)("ContextMenuInstanceContext", () =>
        s.createContext(null)
      );
      let T = class extends s.Component {
        constructor() {
          super(...arguments), (this.m_navRef = Object(c.a)());
        }
        componentDidMount() {
          var e;
          this.context &&
            ((this.context.m_refContextMenu = this),
            this.context.SetLabel(this.props.label)),
            null === (e = this.m_navRef.current) ||
              void 0 === e ||
              e.TakeFocus();
        }
        componentDidUpdate(e) {
          e.label !== this.props.label &&
            this.context &&
            this.context.SetLabel(this.props.label);
        }
        HideIfSubmenu() {
          return !!this.context.BIsSubMenu() && (this.context.HideSelf(), !0);
        }
        HideMenu() {
          return (
            this.context.BIsSubMenu()
              ? this.context.HideSelf()
              : this.context.Hide(),
            !0
          );
        }
        render() {
          var e, t;
          let n = this.props,
            {
              children: o,
              className: r,
              label: a,
              onCancel: l,
              cancelText: c,
            } = n,
            d = Object(i.c)(n, [
              "children",
              "className",
              "label",
              "onCancel",
              "cancelText",
            ]);
          const p =
            null !==
              (t =
                null === (e = this.context) || void 0 === e
                  ? void 0
                  : e.styles) && void 0 !== t
              ? t
              : w.a;
          let g = null != c ? c : "#Button_Cancel";
          if (this.context && 1 == this.context.presentation) {
            const e = () => {
              var e;
              l && l(),
                this.context.Hide(),
                null === (e = I.a.Get()) ||
                  void 0 === e ||
                  e.ReopenPreModalSideMenu();
            };
            return s.createElement(
              u.a,
              Object.assign(
                {},
                d,
                {
                  className: Object(f.a)(
                    p.contextMenuContents,
                    { [p.hasSubMenu]: this.context.BIsSubMenuVisible() },
                    r
                  ),
                  "flow-children": "column",
                  onMoveLeft: this.HideIfSubmenu,
                  onCancel: this.context.BIsSubMenu() ? this.HideMenu : e,
                  style: {
                    overflowY: this.context.BIsSubMenuVisible()
                      ? "hidden"
                      : void 0,
                  },
                  navEntryPreferPosition: h.d.PREFERRED_CHILD,
                  navRef: this.m_navRef,
                },
                m
              ),
              o,
              !this.context.BIsSubMenu() &&
                s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(L, null),
                  s.createElement(
                    y,
                    { className: p.Cancel, onSelected: e },
                    Object(O.f)(g)
                  )
                ),
              this.context.BIsSubMenuVisible() &&
                s.createElement("div", {
                  className: p.contextMenuFade,
                  onClick: () => this.context.HideSubMenu(),
                })
            );
          }
          {
            const e =
              this.context &&
              this.context.options &&
              this.context.options.bUseWebStyles;
            return s.createElement(
              "div",
              Object.assign({}, d, {
                className: Object(f.a)(
                  {
                    popup_menu: e,
                    popup_body: e,
                    [p.contextMenuContents]: !e,
                    [p.hasSubMenu]:
                      this.context && this.context.BIsSubMenuVisible(),
                  },
                  r
                ),
              }),
              o
            );
          }
        }
      };
      (T.contextType = R),
        Object(i.b)([D.b], T.prototype, "HideIfSubmenu", null),
        Object(i.b)([D.b], T.prototype, "HideMenu", null),
        (T = Object(i.b)([o.a], T));
      class y extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this.m_ref = s.createRef()),
            (this.m_refDiv = s.createRef());
        }
        get element() {
          return this.m_refDiv.current;
        }
        OnClick(e) {
          this.props.disabled
            ? S.d.IN_GAMEPADUI && b.a.PlayNavSound(b.b.FailedNav)
            : (this.props.onClick && this.props.onClick(e),
              this.props.bInteractableItem ||
                (this.props.onSelected && this.props.onSelected(e),
                this.context && this.context.Hide()));
        }
        OnOKButton(e) {
          this.m_refDiv.current.click();
        }
        OnMouseEnter(e) {
          this.context &&
            0 == this.context.presentation &&
            this.context.HideSubMenu();
        }
        Focus() {
          this.m_ref.current
            ? this.m_ref.current.TakeFocus()
            : this.m_refDiv.current && this.m_refDiv.current.focus();
        }
        render() {
          var e, t;
          const n = this.props,
            { onSelected: o, bInteractableItem: r, onMoveRight: a } = n,
            l = Object(i.c)(n, [
              "onSelected",
              "bInteractableItem",
              "onMoveRight",
            ]),
            c =
              null !==
                (t =
                  null === (e = this.context) || void 0 === e
                    ? void 0
                    : e.styles) && void 0 !== t
                ? t
                : w.a;
          if (this.context && 1 == this.context.presentation)
            return s.createElement(
              u.a,
              Object.assign(
                {
                  noFocusRing: !0,
                  preferredFocus: this.props.selected,
                  ref: this.m_refDiv,
                  navRef: this.m_ref,
                  onMouseEnter: this.OnMouseEnter,
                },
                l,
                {
                  className: Object(f.a)(
                    this.props.className,
                    c.contextMenuItem,
                    "contextMenuItem",
                    this.props.disabled && "disabled",
                    this.props.selected && c.Selected,
                    "positive" == this.props.tone && c.Positive,
                    "emphasis" == this.props.tone && c.Emphasis,
                    "destructive" == this.props.tone && c.Destructive
                  ),
                  focusClassName: c.Focused,
                  onClick: this.props.disabled ? void 0 : this.OnClick,
                  focusable: !this.props.disabled,
                  onOKButton: this.OnOKButton,
                  onMoveRight: a,
                  unselectable: this.props.unselectable,
                }
              ),
              this.props.children
            );
          {
            const e =
              this.context &&
              this.context.options &&
              this.context.options.bUseWebStyles;
            return s.createElement(
              "div",
              Object.assign(
                { ref: this.m_refDiv, onMouseEnter: this.OnMouseEnter },
                l,
                {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: Object(f.a)(this.props.className, {
                    popup_menu_item: e,
                    [c.contextMenuItem]: !e,
                    contextMenuItem: !e,
                    disabled: !!this.props.disabled,
                  }),
                }
              ),
              this.props.children
            );
          }
        }
      }
      (y.contextType = R),
        Object(i.b)([D.b], y.prototype, "OnClick", null),
        Object(i.b)([D.b], y.prototype, "OnOKButton", null),
        Object(i.b)([D.b], y.prototype, "OnMouseEnter", null),
        Object(i.b)([D.b], y.prototype, "Focus", null);
      class N extends s.PureComponent {
        render() {
          const e = this.props,
            { bChecked: t, children: n, className: o } = e,
            r = Object(i.c)(e, ["bChecked", "children", "className"]);
          return s.createElement(
            y,
            Object.assign({}, r, {
              className: Object(f.a)(o, t && "menuChecked"),
            }),
            s.createElement("div", { className: "contextMenuCheckMark" }),
            n
          );
        }
      }
      function L(e) {
        var t;
        const n = s.useContext(R),
          i =
            null !== (t = null == n ? void 0 : n.styles) && void 0 !== t
              ? t
              : w.a;
        return s.createElement("div", { className: i.ContextMenuSeparator });
      }
      class M extends s.PureComponent {
        constructor(e) {
          super(e),
            (this.m_refItem = s.createRef()),
            (this.state = { bActive: !1 });
        }
        OnSubMenuMouseEnter() {
          this.context && this.context.CancelHideSubMenuTimer();
        }
        OnSubMenuHidden() {
          this.setState({ bActive: !1 }),
            S.d.IN_GAMEPADUI &&
              this.context &&
              1 == this.context.presentation &&
              this.m_refItem.current &&
              this.m_refItem.current.Focus();
        }
        ShowSubMenu(e) {
          if (this.context) {
            const t = e || this.m_refItem.current.element;
            let n = this.context.ShowSubMenu(t, this.RenderSubMenu);
            if (n)
              return (
                this.setState({ bActive: !0 }),
                n.SetOnHideCallback(this.OnSubMenuHidden),
                !0
              );
          }
          return !1;
        }
        RenderSubMenu() {
          return s.createElement(
            T,
            { onMouseEnter: this.OnSubMenuMouseEnter, label: this.props.label },
            this.props.children
          );
        }
        OnMouseEnter(e) {
          this.context &&
            0 == this.context.presentation &&
            this.ShowSubMenu(e.currentTarget);
        }
        OnClick(e) {
          this.OnMouseEnter(e),
            this.props.onClick && this.props.onClick(e),
            S.d.IN_GAMEPADUI &&
              this.context &&
              1 == this.context.presentation &&
              this.ShowSubMenu(e.currentTarget);
        }
        render() {
          var e, t;
          let n = this.props,
            { label: o, selectedWithin: r, children: a, className: l } = n,
            c = Object(i.c)(n, [
              "label",
              "selectedWithin",
              "children",
              "className",
            ]);
          const u =
            null !==
              (t =
                null === (e = this.context) || void 0 === e
                  ? void 0
                  : e.styles) && void 0 !== t
              ? t
              : w.a;
          return s.createElement(
            y,
            Object.assign({}, c, {
              ref: this.m_refItem,
              onClick: this.OnClick,
              selected: r && !this.state.bActive,
              className: Object(f.a)(
                l,
                u.SubMenu,
                this.state.bActive && u.active
              ),
              onMouseEnter: this.OnMouseEnter,
              onSelected: null,
              bInteractableItem: !0,
              onMoveRight: () => this.ShowSubMenu(),
            }),
            s.createElement("div", { className: u.Label }, o),
            s.createElement(
              "div",
              { className: u.Arrow },
              s.createElement(_.y, null)
            )
          );
        }
      }
      (M.contextType = R),
        Object(i.b)([D.b], M.prototype, "OnSubMenuMouseEnter", null),
        Object(i.b)([D.b], M.prototype, "OnSubMenuHidden", null),
        Object(i.b)([D.b], M.prototype, "ShowSubMenu", null),
        Object(i.b)([D.b], M.prototype, "RenderSubMenu", null),
        Object(i.b)([D.b], M.prototype, "OnMouseEnter", null),
        Object(i.b)([D.b], M.prototype, "OnClick", null);
      let F = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_elMenu = void 0),
            (this.m_cReenteranceGuard = 1),
            (this.state = {
              ready: !1,
              menuLeft: void 0,
              menuTop: void 0,
              menuRight: void 0,
              menuBottom: void 0,
              menuWidth: void 0,
              menuHeight: void 0,
            }),
            (this.m_mutationObserver = new MutationObserver(
              this.OnMenuMutation
            ));
        }
        BindMenuElement(e) {
          this.m_elMenu &&
            (this.m_mutationObserver.disconnect(),
            this.props.popup ||
              this.m_elMenu.ownerDocument.defaultView.removeEventListener(
                "resize",
                this.OnWindowResize
              )),
            e &&
              (this.m_mutationObserver.observe(e, {
                childList: !0,
                subtree: !0,
              }),
              this.props.popup ||
                e.ownerDocument.defaultView.addEventListener(
                  "resize",
                  this.OnWindowResize
                )),
            (this.m_elMenu = e || void 0),
            this.PositionMenu(),
            this.state.ready ||
              (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
              this.setState({ ready: !0 }, () => {
                this.TakeFocus();
              }));
        }
        OnMenuMutation(e, t) {
          this.PositionMenu();
        }
        OnWindowResize() {
          this.PositionMenu();
        }
        OnBlur(e) {
          (e.relatedTarget && C.e(e.currentTarget, e.relatedTarget)) ||
            (e.relatedTarget &&
              this.props.instance.BIsElementInMenuHierarchy(e.relatedTarget)) ||
            this.props.instance.BIsSubMenuVisible() ||
            (this.state.ready &&
              this.props.instance.visible &&
              this.props.instance.Hide());
        }
        OnKeyDown(e) {
          27 == e.keyCode &&
            this.state.ready &&
            (this.props.instance.Hide(),
            e.preventDefault(),
            e.stopPropagation());
        }
        componentDidUpdate() {
          this.m_cReenteranceGuard-- > 0
            ? this.PositionMenu()
            : (this.m_cReenteranceGuard = 2);
        }
        TakeFocus() {
          if (
            this.m_elMenu &&
            this.state.ready &&
            this.props.instance.visible &&
            (this.props.popup ||
              !C.e(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
          ) {
            let e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
            e && e.focus ? e.focus() : this.m_elMenu.focus();
          }
        }
        PositionMenu() {
          let e = this.m_elMenu,
            t = this.props.element;
          if (!e || !t) return;
          let n = t.ownerDocument.defaultView;
          if ("none" === n.getComputedStyle(t).display) return;
          let i = t.getBoundingClientRect(),
            o = e.getBoundingClientRect(),
            s = null != this.props.popup;
          const r = this.props.options;
          let a = {
              menuLeft: void 0,
              menuRight: void 0,
              menuTop: void 0,
              menuBottom: void 0,
              menuWidth: void 0,
              menuHeight: void 0,
            },
            l = this.props.clientX,
            c = this.props.clientY,
            u = n.innerWidth,
            d = n.innerHeight;
          if (s) {
            this.props.options.bScreenCoordinates ||
              ((l += n.screenLeft), (c += n.screenTop)),
              (i = C.h(n, i));
            let e = n.screen,
              t = 0,
              o = 0;
            e.availLeft && (t = e.availLeft),
              e.availTop && (o = e.availTop),
              (u = t + e.availWidth),
              (d = o + e.availHeight);
          }
          (r.bOverlapHorizontal || r.bOverlapVertical) && (l = c = void 0);
          let h = l || i.left,
            m = l || i.right,
            p = o.width;
          r.bMatchWidth && ((p = m - h), (a.menuWidth = p));
          let g = (r.bOverlapHorizontal ? m : h) - p,
            b = g > 0,
            _ = u - (r.bOverlapHorizontal ? h : m) - p,
            f = _ > 0,
            v = (r.bPreferPopLeft || !f) && b;
          b ||
            f ||
            ((v = b > f),
            r.bFitToWindow && ((p += (v ? g : _) - 8), (a.menuWidth = p))),
            (!r.bPreferPopLeft && f) || !b
              ? (a.menuLeft = r.bOverlapHorizontal ? h : m)
              : (a.menuRight = u - (r.bOverlapHorizontal ? m : h));
          let O = c || i.top,
            D = c || i.bottom,
            S = e.scrollHeight;
          r.bMatchHeight && ((S = D - O), (a.menuHeight = S));
          let E = (r.bOverlapVertical ? D : O) - S,
            w = E > 0,
            I = d - (r.bOverlapVertical ? O : D) - S,
            R = I > 0,
            T = (r.bPreferPopTop || !R) && w && !r.bDisablePopTop;
          if (!w && !R) {
            const e =
              void 0 !== r.bShiftToFitWindow
                ? r.bShiftToFitWindow
                : r.bFitToWindow && !r.bOverlapHorizontal;
            (T = E > I && !r.bDisablePopTop),
              e && (T ? (a.menuTop = 4) : (a.menuBottom = 4)),
              r.bFitToWindow &&
                (e ? (S = Math.min(S, d - 8)) : (S += T ? E : I),
                (a.menuHeight = S - 8));
          }
          void 0 === a.menuBottom &&
            void 0 === a.menuTop &&
            (T
              ? (a.menuBottom = d - (r.bOverlapVertical ? D : O))
              : (a.menuTop = r.bOverlapVertical ? O : D)),
            s
              ? (a.menuHeight || (a.menuHeight = o.height),
                a.menuWidth || (a.menuWidth = o.width),
                a.menuBottom &&
                  !a.menuTop &&
                  ((a.menuTop = d - a.menuBottom - a.menuHeight),
                  (a.menuBottom = void 0)),
                a.menuRight &&
                  !a.menuLeft &&
                  ((a.menuLeft = u - a.menuRight - a.menuWidth),
                  (a.menuRight = void 0)))
              : (a.menuLeft && (a.menuLeft += n.scrollX),
                a.menuTop && (a.menuTop += n.scrollY),
                a.menuBottom &&
                  (a.menuBottom +=
                    n.document.body.clientHeight - n.scrollY - n.innerHeight),
                a.menuRight &&
                  (a.menuRight +=
                    n.document.body.clientWidth - n.scrollX - n.innerWidth)),
            (a.menuLeft === this.state.menuLeft &&
              a.menuRight === this.state.menuRight &&
              a.menuTop === this.state.menuTop &&
              a.menuBottom === this.state.menuBottom &&
              a.menuWidth === this.state.menuWidth &&
              a.menuHeight === this.state.menuHeight) ||
              this.setState(a);
        }
        render() {
          let e = { visibility: this.state.ready ? "visible" : "hidden" };
          if (this.props.popup) {
            let e = this.props.element.ownerDocument.defaultView;
            void 0 !== this.state.menuLeft &&
              void 0 !== this.state.menuTop &&
              void 0 !== this.state.menuWidth &&
              void 0 !== this.state.menuHeight &&
              e.SteamClient.Window.GetWindowRestoreDetails((t) => {
                let n = this.props.popup.window,
                  i = this.state.menuLeft - e.screenX,
                  o = this.state.menuTop - e.screenY;
                try {
                  n.SteamClient.Window.PositionWindowRelative(
                    t,
                    i,
                    o,
                    this.state.menuWidth,
                    this.state.menuHeight
                  );
                } catch (e) {
                  console.error(e);
                }
              });
          } else
            void 0 !== this.state.menuTop
              ? (e.top = this.state.menuTop)
              : void 0 !== this.state.menuBottom &&
                (e.bottom = this.state.menuBottom),
              void 0 !== this.state.menuLeft
                ? (e.left = this.state.menuLeft)
                : void 0 !== this.state.menuRight &&
                  (e.right = this.state.menuRight),
              void 0 !== this.state.menuHeight &&
                (e.height = this.state.menuHeight),
              void 0 !== this.state.menuWidth &&
                (e.width = this.state.menuWidth);
          let t =
            this.props.options.strClassName ||
            (this.props.options.bUseWebStyles
              ? "popup_block_new popup_block_hidden_until_visible"
              : w.a.contextMenu);
          return (
            this.props.instance.visible &&
              this.state.ready &&
              (t += " visible"),
            (t += " " + w.a.ContextMenuFocusContainer),
            s.createElement(
              R.Provider,
              { value: this.props.instance },
              s.createElement(
                "div",
                {
                  className: t,
                  ref: this.BindMenuElement,
                  style: e,
                  onBlur: this.OnBlur,
                  onKeyDown: this.OnKeyDown,
                  tabIndex: 0,
                },
                this.props.children
              )
            )
          );
        }
      };
      Object(i.b)([D.b], F.prototype, "BindMenuElement", null),
        Object(i.b)(
          [D.b, Object(v.a)(100)],
          F.prototype,
          "OnMenuMutation",
          null
        ),
        Object(i.b)([D.b], F.prototype, "OnWindowResize", null),
        Object(i.b)([D.b], F.prototype, "OnBlur", null),
        Object(i.b)([D.b], F.prototype, "OnKeyDown", null),
        (F = Object(i.b)([o.a], F));
      class A extends l.a {
        constructor(e, t, n) {
          super("contextmenu_" + A.sm_iContextMenuInstance++, {
            title: "Menu",
            html_class: w.a.ContextMenuPopup + " client_chat_frame",
            body_class: "ContextMenuPopupBody",
            replace_existing_popup: !1,
            target_browser: n,
            eCreationFlags: l.b.ContextMenu,
          }),
            (this.m_menuProps = e),
            (this.m_children = t);
        }
        UpdateParamsBeforeShow(e) {
          if (this.m_menuProps.options.bScreenCoordinates)
            e.dimensions = {
              left: this.m_menuProps.clientX,
              top: this.m_menuProps.clientY,
              width: 350,
              height: 1,
            };
          else {
            let t = C.h(
              this.m_menuProps.element.ownerDocument.defaultView,
              this.m_menuProps.element.getBoundingClientRect()
            );
            e.dimensions = { left: t.right, top: t.top, width: 350, height: 1 };
          }
          return (
            (e.availscreenwidth =
              this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
            (e.availscreenheight =
              this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
            e
          );
        }
        Render(e, t) {
          r.render(
            s.createElement(
              F,
              Object.assign({}, this.m_menuProps, { popup: this }),
              this.m_children
            ),
            t
          );
        }
        OnBlur() {}
        OnFocus() {}
        OnLoad() {}
        OnResize() {}
        OnClose() {}
      }
      function B(e) {
        return s.createElement("div", {
          className: w.a.ContextMenuMouseOverlay,
        });
      }
      function P(e) {
        let t = [],
          n = C.o(e),
          i = n.getSelection(),
          o = i && i.rangeCount > 0 && i.toString().length > 0,
          r = e.target,
          l = !1;
        if (
          (r &&
            "tagName" in r &&
            (("INPUT" != r.tagName && "TEXTAREA" != r.tagName) || (l = !0)),
          S.d.IN_CLIENT &&
            l &&
            n.SteamClient._internal &&
            n.SteamClient._internal.GetSpellingSuggestions &&
            n.SteamClient._internal.AddWordToDictionary)
        ) {
          let [e, ...i] = n.SteamClient._internal.GetSpellingSuggestions(),
            o = r;
          if (
            (o &&
              i.forEach((e, i) => {
                t.push(
                  s.createElement(
                    y,
                    {
                      key: `spelling_${i}_${e}`,
                      onSelected: () => {
                        o.setRangeText(e),
                          (function (e, t) {
                            let n = t.createEvent("HTMLEvents");
                            n.initEvent("change", !0, !1), e.dispatchEvent(n);
                          })(o, n.document),
                          o.setSelectionRange(o.selectionEnd, o.selectionEnd),
                          r.focus();
                      },
                      className: w.a.NoSeparation,
                    },
                    e
                  )
                );
              }),
            e)
          ) {
            const i = 30;
            (e = e.trim()),
              t.push(
                s.createElement(
                  y,
                  {
                    key: `addtodictionary_${e}`,
                    onSelected: () =>
                      n.SteamClient._internal.AddWordToDictionary(e),
                  },
                  Object(O.f)(
                    "#ContextMenu_AddToDictionary",
                    e.length < i ? e : e.substring(0, i) + "..."
                  )
                )
              );
          }
        }
        if (
          ((n.document.queryCommandEnabled("cut") || (o && l)) &&
            t.push(
              s.createElement(
                y,
                {
                  key: "cut",
                  onSelected: () => {
                    n.document.execCommand("cut");
                  },
                },
                Object(O.f)("#ContextMenu_Cut")
              )
            ),
          (n.document.queryCommandEnabled("copy") || o) &&
            t.push(
              s.createElement(
                y,
                {
                  key: "copy",
                  onSelected: () => {
                    n.document.execCommand("copy");
                  },
                  className: w.a.NoSeparation,
                },
                Object(O.f)("#ContextMenu_Copy")
              )
            ),
          S.d.IN_CLIENT &&
            l &&
            n.SteamClient._internal &&
            n.SteamClient._internal.Paste &&
            t.push(
              s.createElement(
                y,
                {
                  key: "paste",
                  onSelected: () => {
                    r.focus(), n.SteamClient._internal.Paste();
                  },
                  className: w.a.NoSeparation,
                },
                Object(O.f)("#ContextMenu_Paste")
              )
            ),
          t.length)
        )
          Object(a.a)(s.createElement(T, null, t), e);
        else {
          if (e.shiftKey) return;
          e.preventDefault(), e.stopPropagation();
        }
      }
      A.sm_iContextMenuInstance = 0;
    },
    Sn0s: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var i = n("mrSG"),
        o = n("tXBB"),
        s = n("vYsE");
      let r = [
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
      ];
      class a extends o.c {
        constructor() {
          super(),
            (this.m_rgGamepadStatus = []),
            this.SetSourceType(o.b.GAMEPAD),
            window.addEventListener("gamepadconnected", (e) => {
              this.m_bGamepadDetected ||
                (this.OnGamepadDetected(), this.PollGamepads());
            });
        }
        PollGamepads() {
          let e = navigator.getGamepads(),
            t = !1;
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if (!i) continue;
            this.m_rgGamepadStatus[n] ||
              (this.m_rgGamepadStatus[n] = { buttons: [] });
            let o = this.m_rgGamepadStatus[n];
            for (let e = 0; e < r.length; e++) {
              let n = r[e],
                s = n.index;
              i.buttons[s] &&
                (i.buttons[s].pressed
                  ? ((t = !0),
                    o.buttons[s] ||
                      ((o.buttons[s] = !0), this.OnButtonDown(n.type)))
                  : o.buttons[s] &&
                    (this.OnButtonUp(n.type), (o.buttons[s] = !1)));
            }
          }
          document.hasFocus() || t
            ? requestAnimationFrame(this.PollGamepads)
            : (console.log("Lost focus - suspending gamepad polling"),
              window.addEventListener("focusin", this.OnWindowRegainedFocus));
        }
        OnWindowRegainedFocus() {
          window.removeEventListener("focusin", this.OnWindowRegainedFocus),
            this.PollGamepads();
        }
      }
      Object(i.b)([s.a], a.prototype, "PollGamepads", null),
        Object(i.b)([s.a], a.prototype, "OnWindowRegainedFocus", null);
      var l = n("Zdsb");
      const c = {
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
        u = {
          [l.i.SystemKey0]: o.a.STEAM_GUIDE,
          [l.i.SystemKey1]: o.a.STEAM_QUICK_MENU,
        };
      class d extends o.c {
        constructor() {
          super(),
            (this.m_rgControllers = new Map()),
            "undefined" != typeof SteamClient &&
              ((this.m_hUnregisterControllerInput =
                SteamClient.Input.RegisterForControllerInputMessages(
                  this.HandleControllerInputMessages
                )),
              SteamClient.System.UI.RegisterForSystemKeyEvents(
                this.HandleSystemKeyEvents
              )),
            this.SetSourceType(o.b.GAMEPAD);
        }
        HandleSystemKeyEvents(e) {
          const t = u[e.eKey];
          t && this.OnSystemButtonPress(t, e.nControllerIndex);
        }
        OnSystemButtonPress(e, t) {
          this.OnButtonDown(e, t), this.OnButtonUp(e, t);
        }
        GetController(e) {
          let t = this.m_rgControllers.get(e);
          return (
            t || ((t = { activeButtons: {} }), this.m_rgControllers.set(e, t)),
            t
          );
        }
        HandleControllerInputMessages(e) {
          for (const t of e) {
            const e = c[t.strActionName],
              n = this.GetController(t.nController);
            null != e
              ? t.bState && !n.activeButtons[e]
                ? ((n.activeButtons[e] = !0),
                  this.OnButtonDown(e, t.nController))
                : !t.bState &&
                  n.activeButtons[e] &&
                  ((n.activeButtons[e] = !1), this.OnButtonUp(e, t.nController))
              : "Scroll" == t.strActionName ||
                ("LEFTPAD_ANALOG" == t.strActionName
                  ? n.activeButtons[o.a.LPAD_TOUCH] &&
                    this.OnAnalogPad(o.a.LPAD_TOUCH, t.x, t.y, t.nController)
                  : "RIGHTPAD_ANALOG" == t.strActionName &&
                    n.activeButtons[o.a.RPAD_TOUCH] &&
                    this.OnAnalogPad(o.a.RPAD_TOUCH, t.x, t.y, t.nController));
          }
        }
      }
      Object(i.b)([s.a], d.prototype, "HandleSystemKeyEvents", null),
        Object(i.b)([s.a], d.prototype, "HandleControllerInputMessages", null);
      var h = n("rSrx");
      class m extends o.c {
        constructor(e) {
          super(),
            (this.m_lastButtonDown = o.a.INVALID),
            this.SetSourceType(o.b.KEYBOARD),
            e.addEventListener("keydown", this.OnKeyDown),
            e.addEventListener("keyup", this.OnKeyUp),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          const t = this.TranslateKey(e);
          t != o.a.INVALID &&
            (e.preventDefault(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != o.a.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = o.a.INVALID),
            e.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != o.a.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = o.a.INVALID));
        }
        TranslateKey(e) {
          const t = e.code,
            n = e.ctrlKey,
            i = e.shiftKey,
            s =
              h.q(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName);
          if (n && i)
            switch (t) {
              case "Digit4":
                return o.a.TRIGGER_LEFT;
              case "Digit5":
                return o.a.TRIGGER_RIGHT;
              default:
                return o.a.INVALID;
            }
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
              return s ? o.a.INVALID : o.a.OK;
            case "Backspace":
              return s ? o.a.INVALID : o.a.SECONDARY;
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
        }
      }
      Object(i.b)([s.a], m.prototype, "OnKeyDown", null),
        Object(i.b)([s.a], m.prototype, "OnKeyUp", null),
        Object(i.b)([s.a], m.prototype, "Reset", null);
      class p extends o.c {
        constructor(e) {
          super(),
            (this.m_nAccumulatedMouseMovement = 0),
            (this.m_bFirstMouseUpdate = !0),
            this.SetSourceType(o.b.MOUSE),
            e.addEventListener("mousedown", this.OnMouseDown),
            e.addEventListener("mousemove", this.OnMouseMove),
            e.addEventListener("blur", this.Reset);
        }
        OnMouseDown(e) {
          e.defaultPrevented || this.OnNavigationTypeChanged(o.b.MOUSE);
        }
        OnMouseMove(e) {
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
        }
        Reset() {
          (this.m_nAccumulatedMouseMovement = 0),
            (this.m_bFirstMouseUpdate = !0);
        }
      }
      Object(i.b)([s.a], p.prototype, "OnMouseDown", null),
        Object(i.b)([s.a], p.prototype, "OnMouseMove", null),
        Object(i.b)([s.a], p.prototype, "Reset", null);
      var g = n("hane"),
        b = n("/Q1a"),
        _ = n("i8i4");
      class f {
        constructor() {
          (this.m_GamepadNavigationController = new g.c()),
            b.d.IN_GAMEPADUI &&
              (this.m_GamepadNavigationController.RegisterInputSource(new d()),
              this.m_GamepadNavigationController.RegisterInputSource(new a())),
            "dev" == b.d.WEB_UNIVERSE &&
              (this.m_GamepadNavigationController.RegisterInputSource(
                new m(window)
              ),
              this.m_GamepadNavigationController.RegisterInputSource(
                new p(window)
              ));
        }
        GetNavigationController() {
          return this.m_GamepadNavigationController;
        }
        static Get() {
          return (
            f.s_Singleton ||
              ((f.s_Singleton = new f()),
              "dev" == b.d.WEB_UNIVERSE &&
                (window.g_StoreWebNavStore = f.s_Singleton)),
            f.s_Singleton
          );
        }
      }
      function v() {
        let e = window.legacyWebFocusNavController;
        return (
          e || (e = f.Get().GetNavigationController()),
          e.SetGamepadEventUpdateBatcher(_.unstable_batchedUpdates),
          e
        );
      }
    },
    Ufug: function (e, t, n) {
      e.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3PH_X",
        FocusRing: "focusring_FocusRing_1IZrQ",
        flash: "focusring_flash_1YTKZ",
        growOutline: "focusring_growOutline_Z3LxS",
        fadeOutline: "focusring_fadeOutline_2hZu3",
        blinker: "focusring_blinker_3wFMM",
        DebugFocusRing: "focusring_DebugFocusRing_YxeOZ",
        FocusRingOnHiddenItem: "focusring_FocusRingOnHiddenItem_2OusV",
      };
    },
    ViTr: function (e, t, n) {
      e.exports = {
        DropDownLabelContainer: "dropdownlabel_DropDownLabelContainer_2wVxO",
        DropDownLabelIconContainer:
          "dropdownlabel_DropDownLabelIconContainer_3nHUn",
        DropDownLabelTextColumn: "dropdownlabel_DropDownLabelTextColumn_P4jYQ",
        DropDownLabelTitle: "dropdownlabel_DropDownLabelTitle_uDBZW",
        DropDownLabelUpperDescription:
          "dropdownlabel_DropDownLabelUpperDescription_2_JN3",
        DropDownLabelDescription:
          "dropdownlabel_DropDownLabelDescription_1JPcb",
      };
    },
    WFtA: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("uWhj");
      class o extends i.a {
        GetString(e) {
          return Promise.resolve(localStorage.getItem(e));
        }
        StoreString(e, t) {
          return localStorage.setItem(e, t), Promise.resolve();
        }
        RemoveObject(e) {
          return localStorage.removeItem(e), Promise.resolve();
        }
      }
    },
    WVuY: function (e, t, n) {
      e.exports = {
        "error-shake-duration": "500ms",
        SliderControlPanelGroup: "gamepadslider_SliderControlPanelGroup_MY8iY",
        SliderControlAndNotches: "gamepadslider_SliderControlAndNotches_1Cccx",
        WithDefaultValue: "gamepadslider_WithDefaultValue_1t8of",
        SliderControl: "gamepadslider_SliderControl_3o137",
        Disabled: "gamepadslider_Disabled_1lI1N",
        SliderTrack: "gamepadslider_SliderTrack_Mq25N",
        SliderHasNotches: "gamepadslider_SliderHasNotches_2XiAy",
        SliderTrackDark: "gamepadslider_SliderTrackDark_3UIUD",
        SliderHandleContainer: "gamepadslider_SliderHandleContainer_1pQZi",
        VerticalLineSliderHandleContainer:
          "gamepadslider_VerticalLineSliderHandleContainer_1lQz2",
        ParenSliderHandleContainer:
          "gamepadslider_ParenSliderHandleContainer_3ubaM",
        SliderHandle: "gamepadslider_SliderHandle_2yVKj",
        SliderHandleFocusPop: "gamepadslider_SliderHandleFocusPop_2lNxL",
        VerticalLineSliderHandle:
          "gamepadslider_VerticalLineSliderHandle_i3l9t",
        ParenSliderHandle: "gamepadslider_ParenSliderHandle_3ZGME",
        Left: "gamepadslider_Left_1PL0a",
        SliderControlWithIcon: "gamepadslider_SliderControlWithIcon_2M8Pt",
        Icon: "gamepadslider_Icon_21uKi",
        SliderNotchContainer: "gamepadslider_SliderNotchContainer_2N-a5",
        SliderNotch: "gamepadslider_SliderNotch_3x6ve",
        SliderNotchLabel: "gamepadslider_SliderNotchLabel_u_sH1",
        SliderNotchTick: "gamepadslider_SliderNotchTick_Fv1Ht",
        TickActive: "gamepadslider_TickActive_1gnUV",
        LabelText: "gamepadslider_LabelText_1-PvK",
        DescriptionValue: "gamepadslider_DescriptionValue_2oRwF",
        EditableValue: "gamepadslider_EditableValue_2DXnl",
        FakeEditableValue: "gamepadslider_FakeEditableValue_1-lyB",
        RedBorder: "gamepadslider_RedBorder_1h5To",
        EditableValueSuffix: "gamepadslider_EditableValueSuffix_1nsD9",
        ErrorShake: "gamepadslider_ErrorShake_2SGoM",
        "error-shake": "gamepadslider_error-shake_3HxdO",
        CompoundSlider: "gamepadslider_CompoundSlider_3Q4jT",
        CompoundSliderSubSlider: "gamepadslider_CompoundSliderSubSlider_20HO3",
        Right: "gamepadslider_Right_syN8n",
        CompoundSliderSubSliderLabelContainer:
          "gamepadslider_CompoundSliderSubSliderLabelContainer_1h_oe",
        CompoundSliderSubSliderLabelPositioner:
          "gamepadslider_CompoundSliderSubSliderLabelPositioner_mKcUn",
        CompoundSliderSubSliderLabel:
          "gamepadslider_CompoundSliderSubSliderLabel_iYrz9",
        CompoundSliderSubSliderLabelInternal:
          "gamepadslider_CompoundSliderSubSliderLabelInternal_1dkDU",
        DefaultValueTickContainer:
          "gamepadslider_DefaultValueTickContainer_23F6A",
        DefaultValueTick: "gamepadslider_DefaultValueTick_1WFYb",
      };
    },
    Wv4g: function (e, t, n) {
      e.exports = {
        Toggle: "toggle_Toggle_3jXWQ",
        Disabled: "toggle_Disabled_2V_kU",
        ToggleRail: "toggle_ToggleRail_GKYwH",
        Highlight: "toggle_Highlight_2l9tH",
        On: "toggle_On_1YqUA",
        Off: "toggle_Off_3_gMX",
        ToggleSwitch: "toggle_ToggleSwitch_2mW8B",
        ToggleRow: "toggle_ToggleRow_RFRVY",
        Label: "toggle_Label_2sb8q",
      };
    },
    "a/Rh": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i,
        o,
        s = n("9lTW"),
        r = n.n(s),
        a = n("R1j/");
      !(function (e) {
        let t;
        (e.k_nVersion = 1),
          (function (e) {
            let t;
            !(function (e) {
              (e[(e.Notifications = 0)] = "Notifications"),
                (e[(e.RemotePlayTogetherControls = 1)] =
                  "RemotePlayTogetherControls"),
                (e[(e.VoiceChat = 2)] = "VoiceChat"),
                (e[(e.Friends = 3)] = "Friends"),
                (e[(e.Settings = 4)] = "Settings"),
                (e[(e.Perf = 5)] = "Perf"),
                (e[(e.Help = 6)] = "Help");
            })((t = e.EQuickAccessTab || (e.EQuickAccessTab = {})));
          })((t = e.ExportedTypes || (e.ExportedTypes = {})));
        e.Adapter = class {
          constructor(t) {
            (this.k_nVersion = e.k_nVersion),
              r()(t, "IGamepadUI implementation is null"),
              r()(
                t.k_nVersion == e.k_nVersion,
                `IGamepadUI version is ${t.k_nVersion} but we can only adapt to version ${u.k_nVersion}. Is GamepadUI newer than FriendsUI?`
              ),
              (this.m_impl = t);
          }
          OpenQuickAccessMenu(e) {
            return this.m_impl.OpenQuickAccessMenu(e);
          }
        };
      })(i || (i = {})),
        (function (e) {
          var t = i;
          let n;
          (e.k_nVersion = 2),
            (function (e) {
              e.EQuickAccessTab = t.ExportedTypes.EQuickAccessTab;
            })((n = e.ExportedTypes || (e.ExportedTypes = {})));
          e.Adapter = class {
            constructor(n) {
              (this.k_nVersion = e.k_nVersion),
                (this.m_prevImpl =
                  n.k_nVersion == t.k_nVersion ? n : new t.Adapter(n));
            }
            OpenQuickAccessMenu(e, t) {
              return this.m_prevImpl.OpenQuickAccessMenu(e);
            }
            ReopenPreModalSideMenu() {}
          };
        })(o || (o = {}));
      class l {
        constructor() {
          (this.m_bAdaptedInstance = void 0), (this.m_bAdapted = !1);
        }
        Get() {
          return (
            this.m_bAdapted ||
              null == l.g_GamepadUIStoreRef.current ||
              ((this.m_bAdaptedInstance = this.AdaptGamepadUIStore(
                l.g_GamepadUIStoreRef.current
              )),
              (this.m_bAdapted = !0)),
            this.m_bAdaptedInstance
          );
        }
        Set(e) {
          (l.g_GamepadUIStoreRef.current = e),
            (this.m_bAdaptedInstance = e),
            (this.m_bAdapted = !0);
        }
        AdaptGamepadUIStore(e) {
          if (null == e) return null;
          if (e.k_nVersion == u.k_nVersion) return e;
          try {
            return new u.Adapter(e);
          } catch (e) {
            return (
              console.error(
                "Failed to adapt GamepadUIStore to latest version:",
                e
              ),
              null
            );
          }
        }
      }
      l.g_GamepadUIStoreRef = Object(a.a)("GamepadUIStore", () => ({
        current: null,
      }));
      const c = new l();
      var u = o;
      u.ExportedTypes.EQuickAccessTab;
    },
    dcOZ: function (e, t, n) {
      "use strict";
      n.d(t, "g", function () {
        return O;
      }),
        n.d(t, "d", function () {
          return D;
        }),
        n.d(t, "h", function () {
          return S;
        }),
        n.d(t, "a", function () {
          return E;
        }),
        n.d(t, "b", function () {
          return w;
        }),
        n.d(t, "c", function () {
          return R;
        }),
        n.d(t, "e", function () {
          return y;
        }),
        n.d(t, "f", function () {
          return N;
        });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = (n("7ast"), n("R1j/")),
        a = (n("thkD"), n("GbHM")),
        l = n("hCpY"),
        c = n("nDaX"),
        u = n("hane"),
        d = (n("O8Yk"), n("fsrB")),
        h = (n("ez+p"), n("vMUW")),
        m = (n("Zdsb"), n("yASz")),
        p = n("rSrx");
      class g {
        SetFactory(e) {
          this.m_factory = e;
        }
        CreateVirtualKeyboardRef(e) {
          return this.m_factory
            ? this.m_factory.CreateVirtualKeyboardRef(e)
            : {
                ShowVirtualKeyboard: () => {},
                SetAsCurrentVirtualKeyboardTarget: () => {},
                HideVirtualKeyboard: () => {},
                DelayHideVirtualKeyboard: () => {},
                BIsActive: () => !1,
                BIsElementValidForInput: () => !1,
              };
        }
      }
      const b = Object(r.a)("VirtualKeyboardRefFactory", () => new g());
      function _(e, t) {
        const { onTextEntered: n } = e,
          o = Object(i.c)(e, ["onTextEntered"]),
          r = s.a.useRef(),
          a = s.a.useRef({ onTextEntered: () => null });
        var u;
        Object.assign(
          a.current,
          Object.assign(Object.assign({}, o), {
            onTextEntered:
              n ||
              ((u = r),
              (e, t) => {
                if (
                  !(function (e) {
                    if ("Backspace" == e)
                      return (
                        SteamClient.Input.ControllerKeyboardSendText(""), !0
                      );
                    if ("Enter" == e)
                      return (
                        SteamClient.Input.ControllerKeyboardSendText(""), !0
                      );
                    if ("Tab" == e)
                      return (
                        SteamClient.Input.ControllerKeyboardSendText("\t"), !0
                      );
                    if (
                      1 === e.length ||
                      ("ArrowLeft" != e && "ArrowRight" != e && "Tab" != e)
                    )
                      return (
                        SteamClient.Input.ControllerKeyboardSendText(e), !0
                      );
                    return !1;
                  })(e) &&
                  u.current
                ) {
                  const n = u.current,
                    i = n.value;
                  !(function (e, t, n) {
                    const i = e,
                      o = t;
                    if (null == o) return;
                    if (
                      !i ||
                      null == i.selectionStart ||
                      null == i.selectionEnd ||
                      null == i.value ||
                      null == i.value.length
                    )
                      return;
                    const s = i.selectionStart,
                      r = i.selectionEnd,
                      a =
                        ((c = i.selectionDirection),
                        "backward" === c ? -1 : "forward" === c ? 1 : 0),
                      l = p.t(i);
                    var c;
                    if (1 === o.length || ("Enter" === o && l)) {
                      const e = "Enter" === o ? "\n" : o,
                        t = i.value;
                      Object.getOwnPropertyDescriptor(
                        window.HTMLInputElement.prototype,
                        "value"
                      ).set.call(i, t.slice(0, s) + e + t.slice(r)),
                        i.setSelectionRange(s + 1, s + 1, "none");
                    } else if ("Backspace" === o) {
                      const e = i.value;
                      s !== r
                        ? ((i.value = e.slice(0, s) + e.slice(r)),
                          i.setSelectionRange(s, s, "none"))
                        : i.selectionStart > 0 &&
                          ((i.value = e.slice(0, s - 1) + e.slice(r)),
                          i.setSelectionRange(s - 1, s - 1, "none"));
                    } else if ("ArrowLeft" === o)
                      if (n) {
                        const e = f(-1, [s, r, a], [0, i.value.length]);
                        i.setSelectionRange(e[0], e[1], v(e[2]));
                      } else
                        s === r && s > 0
                          ? i.setSelectionRange(s - 1, s - 1, "none")
                          : i.setSelectionRange(s, s, "none");
                    else if ("ArrowRight" === o)
                      if (n) {
                        const e = f(1, [s, r, a], [0, i.value.length]);
                        i.setSelectionRange(e[0], e[1], v(e[2]));
                      } else
                        s === r && r < i.value.length
                          ? i.setSelectionRange(r + 1, r + 1, "none")
                          : i.setSelectionRange(r, r, "none");
                    else
                      "ArrowUp" === o || "Home" === o
                        ? i.setSelectionRange(0, 0, "none")
                        : ("ArrowDown" !== o && "End" !== o) ||
                          i.setSelectionRange(
                            i.value.length,
                            i.value.length,
                            "none"
                          );
                  })(n, e, t);
                  const o = n.value;
                  if (i !== o) {
                    const e = new Event("input", { bubbles: !0 });
                    n.dispatchEvent(e);
                  }
                }
              }),
            BIsElementValidForInput: () =>
              r.current && document.activeElement == r.current,
          })
        );
        const d = (function (e) {
            const t = s.a.useRef();
            t.current || (t.current = b.CreateVirtualKeyboardRef(e));
            return t.current;
          })(a.current),
          h = s.a.useCallback(
            (e) => {
              (document.hasFocus() || document.activeElement != r.current) &&
                (e.currentTarget == r.current
                  ? d.BIsActive() && d.DelayHideVirtualKeyboard()
                  : console.warn(
                      "keyboard got blur event, but it's not the active element"
                    ));
            },
            [d]
          ),
          m = Object(l.i)(
            (e) => {
              r.current = e;
              const t = [];
              return (
                e &&
                  (e.addEventListener(
                    "focus",
                    d.SetAsCurrentVirtualKeyboardTarget
                  ),
                  t.push(() =>
                    e.removeEventListener(
                      "focus",
                      d.SetAsCurrentVirtualKeyboardTarget
                    )
                  ),
                  e.addEventListener("click", d.ShowVirtualKeyboard),
                  t.push(() =>
                    e.removeEventListener("click", d.ShowVirtualKeyboard)
                  ),
                  t.push(Object(c.l)(r.current, d.ShowVirtualKeyboard)),
                  t.push(Object(c.e)(r.current, h))),
                () => t.forEach((e) => e())
              );
            },
            [h, d]
          );
        return (
          s.a.useLayoutEffect(
            () => (
              Object(l.d)(t, {
                TakeFocusAndShowKeyboard: () => {
                  const e = r.current;
                  e &&
                    (document.activeElement != e && e.focus(),
                    d.ShowVirtualKeyboard());
                },
              }),
              () => Object(l.d)(t, null)
            ),
            [d, t]
          ),
          m
        );
      }
      function f(e, t, n) {
        const i = t[2],
          o = i < 0 ? 0 : 1,
          s = e < 0 ? 0 : 1,
          r = [t[0], t[1]];
        (r[o] += e), (r[o] - n[s]) * e > 0 && (r[o] = n[s]);
        return r[0] === r[1]
          ? [r[0], r[1], 0]
          : r[0] < r[1]
          ? [r[0], r[1], i]
          : [r[1], r[0], -i];
      }
      function v(e) {
        return e < 0 ? "backward" : e > 0 ? "forward" : "none";
      }
      n("/Q1a");
      var C = n("MOFx");
      const O = Object(r.a)("GamepadNavigationContext", () =>
          s.a.createContext(null)
        ),
        D = Object(r.a)("FocusRingNavigationContext", () =>
          s.a.createContext(u.h)
        );
      s.a.forwardRef(function (e, t) {
        return s.a.createElement(d.f, Object.assign({}, e, { ref: t }));
      });
      function S(e) {
        const { navRef: t } = e,
          n = Object(i.c)(e, ["navRef"]),
          r = s.a.useRef(),
          a = Object(o.useContext)(O),
          c = Object(o.useContext)(D),
          u = (function (e, t) {
            let n = s.a.useRef(null);
            return (
              !e ||
                (n.current && n.current.m_Parent == e) ||
                (n.current = e.Tree.CreateNode(e, t)),
              n.current
            );
          })(a, c);
        return (
          s.a.useLayoutEffect(() => {
            u && u.SetProperties(n);
          }),
          s.a.useLayoutEffect(() => {
            if (!a) return;
            const e = a.Tree.RegisterNavigationItem(u, r.current);
            return () => {
              e();
            };
          }, [a, u, r]),
          s.a.useLayoutEffect(() => {
            if (u && t)
              return (
                Object(l.d)(t, u.CreateHandle()), () => Object(l.d)(t, null)
              );
          }, [u, t]),
          { ref: r, node: u }
        );
      }
      function E(e) {
        const {
            onButtonDown: t,
            onButtonUp: n,
            onOKButton: o,
            onCancelButton: s,
            onSecondaryButton: r,
            onOptionsButton: a,
            onGamepadDirection: l,
            onGamepadFocus: u,
            onGamepadBlur: d,
            onMenuButton: h,
            onOKActionDescription: m,
            onCancelActionDescription: p,
            onSecondaryActionDescription: g,
            onOptionsActionDescription: b,
            onMenuActionDescription: _,
            actionDescriptionMap: f,
          } = e,
          v = Object(i.c)(e, [
            "onButtonDown",
            "onButtonUp",
            "onOKButton",
            "onCancelButton",
            "onSecondaryButton",
            "onOptionsButton",
            "onGamepadDirection",
            "onGamepadFocus",
            "onGamepadBlur",
            "onMenuButton",
            "onOKActionDescription",
            "onCancelActionDescription",
            "onSecondaryActionDescription",
            "onOptionsActionDescription",
            "onMenuActionDescription",
            "actionDescriptionMap",
          ]),
          C = {};
        void 0 !== t && (C.onButtonDown = t),
          void 0 !== n && (C.onButtonUp = n),
          void 0 !== o && (C.onOKButton = o),
          void 0 !== s && (C.onCancelButton = s),
          void 0 !== r && (C.onSecondaryButton = r),
          void 0 !== a && (C.onOptionsButton = a),
          void 0 !== h && (C.onMenuButton = h),
          void 0 !== l && (C.onGamepadDirection = l),
          void 0 !== u && (C.onGamepadFocus = u),
          void 0 !== d && (C.onGamepadBlur = d);
        return {
          gamepadEvents: C,
          actionDescriptions: Object(c.a)({
            onOKActionDescription: m,
            onCancelActionDescription: p,
            onSecondaryActionDescription: g,
            onOptionsActionDescription: b,
            onMenuActionDescription: _,
            actionDescriptionMap: f,
          }),
          props: v,
        };
      }
      function w(e) {
        const {
            autoFocus: t,
            preferredFocus: n,
            disableNavSounds: o,
            fnCanTakeFocus: s,
            childFocusDisabled: r,
            retainFocus: a,
            onFocusWithin: l,
            navKey: c,
            noFocusRing: u,
            focusable: d,
            focusableIfNoChildren: h,
            navRef: m,
            actionDescriptionMap: p,
            onMoveUp: g,
            onMoveRight: b,
            onMoveDown: _,
            onMoveLeft: f,
            navEntryPreferPosition: v,
            scrollIntoViewWhenChildFocused: C,
            fnScrollIntoViewHandler: O,
            scrollIntoViewType: D,
            resetNavOnEntry: S,
          } = e,
          w = Object(i.c)(e, [
            "autoFocus",
            "preferredFocus",
            "disableNavSounds",
            "fnCanTakeFocus",
            "childFocusDisabled",
            "retainFocus",
            "onFocusWithin",
            "navKey",
            "noFocusRing",
            "focusable",
            "focusableIfNoChildren",
            "navRef",
            "actionDescriptionMap",
            "onMoveUp",
            "onMoveRight",
            "onMoveDown",
            "onMoveLeft",
            "navEntryPreferPosition",
            "scrollIntoViewWhenChildFocused",
            "fnScrollIntoViewHandler",
            "scrollIntoViewType",
            "resetNavOnEntry",
          ]),
          { gamepadEvents: I, actionDescriptions: R, props: T } = E(w);
        return {
          elemProps: T,
          navOptions: {
            autoFocus: t,
            preferredFocus: n,
            disableNavSounds: o,
            fnCanTakeFocus: s,
            childFocusDisabled: r,
            retainFocus: a,
            onFocusWithin: l,
            navKey: c,
            noFocusRing: u,
            focusable: d,
            focusableIfNoChildren: h,
            navRef: m,
            onMoveUp: g,
            onMoveRight: b,
            onMoveDown: _,
            onMoveLeft: f,
            navEntryPreferPosition: v,
            scrollIntoViewWhenChildFocused: C,
            fnScrollIntoViewHandler: O,
            scrollIntoViewType: D,
            resetNavOnEntry: S,
            actionDescriptionMap: Object.assign(Object.assign({}, p), R),
          },
          gamepadEvents: I,
        };
      }
      function I(e) {
        return function (t) {
          const {
              focusClassName: n,
              focusWithinClassName: o,
              className: r,
              divRef: c,
              node: u,
              tabIndex: d,
              children: h,
            } = t,
            m = Object(i.c)(t, [
              "focusClassName",
              "focusWithinClassName",
              "className",
              "divRef",
              "node",
              "tabIndex",
              "children",
            ]),
            [p, g] = s.a.useState(u.BHasFocus());
          Object(l.e)(u.FocusCallbackList, g);
          const [b, _] = s.a.useState(u.BFocusWithin());
          Object(l.e)(u.FocusWithinCallbackList, _);
          const [f, v] = s.a.useState(u.Tree.BIsActive());
          return (
            Object(l.e)(u.Tree.OnActiveStateChangedCallbacks, v),
            s.a.createElement(
              e,
              Object.assign(Object.assign({}, m), {
                className: Object(a.a)(r, p && f && n, b && f && o),
                tabIndex: f ? d : -1,
                ref: c,
              }),
              h
            )
          );
        };
      }
      const R = I("div");
      function T(e, t, n, i) {
        const { elemProps: r, navOptions: c, gamepadEvents: u } = w(n);
        void 0 !== c.focusable || r.disabled || (c.focusable = !0);
        const { ref: d, node: m } = S(Object.assign({}, c)),
          p = Object(o.useCallback)(
            () => (C.a.PlayNavSound(C.b.DefaultOk), d.current.click(), !0),
            [d]
          );
        u.onOKButton ||
          ((r.onClick || ("button" == e && "submit" == r.type) || "a" == e) &&
            (u.onOKButton = p)),
          c.focusable && (r.tabIndex = r.tabIndex || 0),
          Object(h.a)(u, d);
        const g = Object(l.g)(i, d),
          b = r.children;
        delete r.children;
        const _ = r.focusClassName;
        return (
          delete r.focusClassName,
          s.a.createElement(
            O.Provider,
            { value: m },
            m
              ? s.a.createElement(
                  t,
                  Object.assign(Object.assign({}, r), {
                    divRef: g,
                    node: m,
                    focusClassName: Object(a.a)(_, "gpfocus"),
                    focusWithinClassName: "gpfocuswithin",
                    className: Object(a.a)(r.className, "Focusable"),
                  }),
                  b
                )
              : s.a.createElement(
                  e,
                  Object.assign(Object.assign({}, r), {
                    ref: g,
                    className: Object(a.a)(r.className, "Focusable"),
                  }),
                  b
                )
          )
        );
      }
      function y(e) {
        const t = I(e);
        return s.a.forwardRef(function (n, i) {
          return T(e, t, n, i);
        });
      }
      function N(e) {
        const t = I(e);
        return s.a.forwardRef(function (n, o) {
          const s = Object(m.a)(n),
            { virtualKeyboardProps: r } = s,
            a = s.props,
            { refKeyboardHandle: c } = a,
            u = Object(i.c)(a, ["refKeyboardHandle"]),
            d = _(r, c),
            h = Object(l.g)(o, d);
          return T(e, t, u, h);
        });
      }
    },
    "ez+p": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var i = n("q1tI"),
        o = n.n(i),
        s = n("GbHM"),
        r = n("iDgP"),
        a = (n("nDaX"), n("hane"), n("O8Yk"), n("dcOZ")),
        l = n("Ufug"),
        c = n.n(l),
        u = n("hCpY");
      const d = new r.a("FocusNavigation").Debug;
      function h(e) {
        const {
            className: t,
            rootClassName: n,
            render: i,
            children: r,
            NavigationManager: l,
          } = e,
          d = o.a.useRef(),
          [h, p] = o.a.useState({
            bFocusWithin: !1,
            navTarget: null,
            prevTarget: null,
          }),
          g = Object(u.k)(null == l ? void 0 : l.GetShowDebugFocusRing()),
          b = o.a.useRef(),
          _ = o.a.useMemo(
            () => ({
              OnBlur: (e, t, n) => {
                p({ bFocusWithin: !1, navTarget: null, prevTarget: null });
              },
              OnFocus: (e, t, n) => {
                p({ bFocusWithin: !0, navTarget: t, prevTarget: null });
              },
              OnFocusChange: (e, t, n) => {
                p({ bFocusWithin: !0, navTarget: n, prevTarget: t });
              },
              OnForceMeasureFocusRing: () => {
                var e;
                null === (e = b.current) ||
                  void 0 === e ||
                  e.MeasureElementAndUpdate();
              },
            }),
            [p]
          );
        let { bFocusWithin: f, navTarget: v, prevTarget: C } = h;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: Object(s.a)(c.a.FocusRingRoot, n), ref: d },
            o.a.createElement(m, {
              ref: b,
              className: Object(s.a)(t, g && c.a.DebugFocusRing),
              render: i,
              bFocusWithin: f,
              navTarget: v,
              refContainer: d,
              bDebug: g,
            })
          ),
          o.a.createElement(a.d.Provider, { value: _ }, r)
        );
      }
      const m = o.a.forwardRef((e, t) => {
        const {
            className: n,
            render: r,
            bFocusWithin: a,
            navTarget: l,
            refContainer: u,
            bDebug: h,
          } = e,
          [m, g] = o.a.useState(l),
          [b, _] = o.a.useState(null),
          [f, v] = o.a.useState(!1),
          [C, O] = o.a.useState(!1),
          D = o.a.useRef(performance.now()),
          S = Object(i.useCallback)(() => {
            if (!l || !l.BWantsFocusRing()) return null != b && (_(null), !0);
            let e = l.GetBoundingRect();
            const t = u.current.getBoundingClientRect();
            if (h) {
              let t = l.Element;
              const n = t.ownerDocument.defaultView,
                i = (t) =>
                  "none" == n.getComputedStyle(t).display ||
                  (0 == e.width && 0 == e.height && 0 == e.x && 0 == e.y);
              for (; i(t) && t.parentElement; )
                (t = t.parentElement), (e = t.getBoundingClientRect());
              let o = l.Element != t;
              o != C &&
                (O(o),
                o &&
                  d(
                    "Focused on hidden item: ",
                    l.Element,
                    ". Closest visible ancestor: ",
                    t
                  ));
            }
            const n = {
              left: e.x - t.x,
              top: e.y - t.y,
              height: e.height,
              width: e.width,
            };
            return (
              (!b ||
                n.left != b.left ||
                n.top != b.top ||
                n.height != b.height ||
                n.width != b.width) &&
              (_(n), !0)
            );
          }, [l, u, _, b, C, O, h]);
        o.a.useImperativeHandle(t, () => ({ MeasureElementAndUpdate: S }), [S]);
        let E = a,
          w = b || {};
        l && u.current && (l.BWantsFocusRing() || (E = !1)),
          l != m && (g(l), (D.current = performance.now()), S(), f && v(!1)),
          o.a.useEffect(() => {
            if (!E || performance.now() - D.current > 500) return;
            let e;
            const t = () => {
              e = requestAnimationFrame(() => {
                S() ? v(!0) : performance.now() - D.current <= 500 && t();
              });
            };
            return t(), () => cancelAnimationFrame(e);
          });
        const I = r || p;
        return o.a.createElement(
          I,
          Object.assign({}, w, {
            visible: E && null !== b,
            key: D.current,
            className: Object(s.a)(n, C && c.a.FocusRingOnHiddenItem),
            animationEnabled: !f,
            target: l,
          })
        );
      });
      function p(e) {
        const {
          className: t,
          visible: n,
          left: i,
          top: r,
          height: a,
          width: l,
          target: u,
          animationEnabled: d,
        } = e;
        if (!n) return null;
        const h = {
          left: i - 0 + "px",
          top: r - 0 + "px",
          height: a + "px",
          width: l + "px",
        };
        return o.a.createElement("div", {
          className: Object(s.a)(c.a.FocusRing, d && c.a.Animated, t),
          style: h,
        });
      }
    },
    fsrB: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "g", function () {
          return b;
        });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = n("dcOZ"),
        a = n("hCpY"),
        l = (n("nDaX"), n("hane"), n("O8Yk"), n("oFSi")),
        c = n("vMUW");
      n("Lsvi");
      const u = s.a.forwardRef(function (e, t) {
        const {
            NavigationManager: n,
            onActivated: o,
            onDeactivated: u,
            navTreeRef: d,
            secondary: h,
            virtualFocus: m,
            navID: p,
            children: g,
            "flow-children": b,
            parentEmbeddedNavTree: _,
          } = e,
          f = Object(i.c)(e, [
            "NavigationManager",
            "onActivated",
            "onDeactivated",
            "navTreeRef",
            "secondary",
            "virtualFocus",
            "navID",
            "children",
            "flow-children",
            "parentEmbeddedNavTree",
          ]),
          { elemProps: v, navOptions: C, gamepadEvents: O } = Object(r.b)(f);
        let D = s.a.useRef(null);
        D.current || (D.current = n.NewGamepadNavigationTree(p));
        const S = D.current;
        s.a.useLayoutEffect(() => {
          const e = Object(l.a)(b);
          S.Root.SetProperties(
            Object.assign(Object.assign({}, C), { layout: e })
          );
        });
        let E = s.a.useRef();
        S.SetUseVirtualFocus(m),
          S.SetParentEmbeddedNavTree(_),
          Object(a.e)(S.OnActivateCallbacks, o),
          Object(a.e)(S.OnDeactivateCallbacks, u),
          Object(c.b)(O, E, D.current),
          s.a.useLayoutEffect(
            () => S.RegisterNavigationItem(S.Root, E.current),
            [S, E]
          ),
          s.a.useLayoutEffect(
            () => n.RegisterGamepadNavigationTree(S, h),
            [n, h, S]
          ),
          s.a.useLayoutEffect(
            () => (Object(a.d)(d, S), () => Object(a.d)(d, null)),
            [d, S]
          );
        const w = Object(a.g)(E, t);
        return s.a.createElement(
          "div",
          Object.assign({}, v, { "data-react-nav-root": p, ref: w }),
          s.a.createElement(r.g.Provider, { value: S.Root }, g)
        );
      });
      function d() {
        return s.a.createRef();
      }
      const h = Object(r.e)("div"),
        m = Object(r.e)("button"),
        p = Object(r.e)("a"),
        g = Object(r.f)("input");
      Object(r.f)("textarea"), Object(r.e)("img");
      function b(e, t, n = !1) {
        s.a.useEffect(() => {
          const i = e.current;
          i && (t ? i.Activate(n) : i.Deactivate());
        }, [t, n, e]);
      }
    },
    hane: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "i", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "g", function () {
          return m;
        }),
        n.d(t, "h", function () {
          return p;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "a", function () {
          return b;
        });
      var i = n("tXBB"),
        o = (n("24VQ"), n("f5iL")),
        s = n("nDaX"),
        r = n("4CF9"),
        a = n("O8Yk"),
        l = n("6RuE");
      n.d(t, "c", function () {
        return l.a;
      });
      n("ROh0");
      class c {
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? s.c.GAMEPAD : s.c.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent.BTakeFocus(e ? s.c.GAMEPAD : s.c.APPLICATION, e);
        }
        ChildTakeFocus(e) {
          return this.m_node.BChildTakeFocus(
            e ? s.c.GAMEPAD : s.c.APPLICATION,
            e
          );
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
          this.m_History || (this.m_History = new r.a(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new r.b(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function u(e, t, n) {
        return "x" == e
          ? t.x + t.width > n.x && t.x < n.x + n.width
          : "y" == e
          ? t.y + t.height > n.y && t.y < n.y + n.height
          : (Object(o.a)(!1, `Invalid axis ${e}`), !1);
      }
      function d(e, t, n) {
        let i;
        return (
          "x" == e
            ? (i = Math.min(t.x + t.width, n.x + n.width) - Math.max(t.x, n.x))
            : "y" == e
            ? (i =
                Math.min(t.y + t.height, n.y + n.height) - Math.max(t.y, n.y))
            : (Object(o.a)(!1, `Invalid axis ${e}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function h(e, t, n) {
        const i = t[e],
          s = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : "y" == e
              ? { min: t.y, max: t.y + t.height }
              : void Object(o.a)(!1, `Invalid axis ${e}`);
          })(e, n);
        return i < s.min ? s.min - i : i > s.max ? i - s.max : 0;
      }
      function m(e) {
        return { x: e.x, y: e.y };
      }
      const p = {
        OnBlur: () => {},
        OnFocus: () => {},
        OnFocusChange: () => {},
        OnForceMeasureFocusRing: () => {},
      };
      function g(e) {
        if (!e) return a.c.NONE;
        const t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? a.c.GRID : a.c.ROW;
            case "row-reverse":
              return a.c.ROW_REVERSE;
            case "column":
              return a.c.COLUMN;
            case "column-reverse":
              return a.c.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return a.c.GRID;
          if (e.childElementCount > 0) {
            const n = t.getComputedStyle(e.firstElementChild);
            if ("left" === n.float) return a.c.ROW;
            if ("right" === n.float) return a.c.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return a.c.GRID;
          }
        }
        return a.c.COLUMN;
      }
      function b(e) {
        switch (e) {
          case i.a.DIR_UP:
          case i.a.DIR_DOWN:
            return "y";
          case i.a.DIR_LEFT:
          case i.a.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
    },
    iDgP: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n("mrSG"),
        o = n("vYsE"),
        s = (n("uWhj"), n("WFtA")),
        r = n("3u1o");
      const a = [
        "ActionDescription",
        "Backstack",
        "BrowserBackstack",
        "GroupMemberStore",
        "Chat",
        "ChatRoom",
        "ChatRoomGroup",
        "ChatHistory",
        "CompositionState",
        "AppOverviewImplObservable",
        "ReducedValue",
        "FocusNavigation",
        "FocusNavigationMovement",
        "GamepadEvents",
        "VirtualKeyboard",
        "UIStore/BasicUIStore",
        "SystemNetworkStore",
        "SteamClient",
        "AudioPlaybackManager",
        "LaunchStates",
        "Haptics",
        "ControllerConfigurator",
        "FriendsUI/RemotePlay",
      ];
      var l;
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(l || (l = {}));
      class c {
        constructor(e, t) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            u.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(l.Debug, ...e);
        }
        Info(...e) {
          this.Log(l.Info, ...e);
        }
        Warning(...e) {
          this.Log(l.Warning, ...e);
        }
        Error(...e) {
          this.Log(l.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(l.Error, "Assertion failed:", ...t);
        }
        Log(e, ...t) {
          var n, i;
          if (e == l.Debug && !u.Get().IsDebugLogEnabled(this.m_sName)) return;
          let o = this.m_sName;
          const s =
            null !==
              (i =
                null === (n = this.m_fnIdGenerator) || void 0 === n
                  ? void 0
                  : n.call(this)) && void 0 !== i
              ? i
              : null;
          null != s && (o += " (" + s + ")");
          d(e, u.Get().IncludeBacktraceInLog, o, this.m_sName, ...t);
        }
      }
      Object(i.b)([o.a], c.prototype, "Debug", null),
        Object(i.b)([o.a], c.prototype, "Info", null),
        Object(i.b)([o.a], c.prototype, "Warning", null),
        Object(i.b)([o.a], c.prototype, "Error", null),
        Object(i.b)([o.a], c.prototype, "Assert", null);
      class u {
        constructor() {
          (this.m_Storage = null),
            (this.m_rgLogNames = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new r.a()),
            (this.m_bLoading = !1),
            (this.m_Storage = new s.a()),
            (this.m_rgLogNames = a.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          d(
            l.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e
          );
        }
        LoadSettings() {
          return Object(i.a)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog =
                !!(yield this.m_Storage.GetObject(
                  u.k_IncludeBacktraceInLog_StorageKey
                )));
            const e = yield this.m_Storage.GetObject(
              u.k_EnabledLogNames_StorageKey
            );
            Array.isArray(e) &&
              ((this.m_setEnabledDebugLogs = new Set(e)),
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs)
              )),
              (this.m_bLoading = !1),
              this.m_SettingsChangedCallback.Dispatch();
          });
        }
        SaveSettings() {
          return Object(i.a)(this, void 0, void 0, function* () {
            yield this.m_Storage.StoreObject(
              u.k_EnabledLogNames_StorageKey,
              Array.from(this.m_setEnabledDebugLogs)
            ),
              yield this.m_Storage.StoreObject(
                u.k_IncludeBacktraceInLog_StorageKey,
                this.m_bIncludeBacktraceInLog
              ),
              this.LogAsLogManager(
                "Saved enabled debug log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs)
              );
          });
        }
        static Get() {
          return (
            null == u.s_Singleton && (u.s_Singleton = new u()), u.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_rgLogNames;
        }
        RegisterLogName(e) {
          this.m_rgLogNames.includes(e) || this.m_rgLogNames.push(e);
        }
        IsLogName(e) {
          return this.m_rgLogNames.includes(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        ToggleDebugLogEnabled(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          });
        }
        SetDebugLogEnabled(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = new Set(e ? a : [])),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        SetIncludeBacktraceInLog(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function d(e, t, n, i, ...o) {
        const s = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = e.charCodeAt(n) + ((t << 5) - t);
            return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
          })(i).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15)))
            )
          ),
          r = (299 * (a = s)[0] + 587 * a[1] + 114 * a[2]) / 1e3 >= 128;
        var a;
        let c = n;
        t &&
          (c =
            (function (e) {
              switch (e) {
                case l.Debug:
                  return String.fromCodePoint(128027);
                case l.Info:
                  return String.fromCodePoint(8505);
                case l.Warning:
                  return String.fromCodePoint(9888);
                case l.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            c);
        const u =
            o.length >= 1 && "string" == typeof o[0] && o[0].includes("%c"),
          d = u && o.shift(),
          h = [
            `%c${c}%c:${u ? " %c" + d : ""}`,
            `color: ${r ? "black" : "white"}; background: rgb(${s.join(
              ","
            )}); padding: 0 1ch`,
            "color: transparent; margin-right: -1ch",
            ...(u ? [""] : []),
            ...o,
          ];
        if (t)
          console.groupCollapsed(...h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case l.Debug:
            case l.Info:
              console.log(...h);
              break;
            case l.Warning:
              console.warn(...h);
              break;
            case l.Error:
              console.error(...h);
          }
      }
      (u.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (u.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (u.s_Singleton = null);
    },
    iRfV: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return l;
        });
      var i = n("i8i4"),
        o = n("rSrx");
      class s {
        constructor(e) {
          this.instance = new a(e, !1);
        }
      }
      function r(e) {
        return new a(e.body, !0);
      }
      class a {
        constructor(e, t = !0) {
          (this.m_parent = e),
            (this.m_window = e.ownerDocument.defaultView),
            (this.m_bRemoveOnHide = t);
        }
        Show(e, t) {
          return (
            this.CancelShowInterval(),
            t
              ? new Promise((n, i) => {
                  this.iIntervalShow = this.m_window.setTimeout(() => {
                    let t = this.m_parent.ownerDocument;
                    t.defaultView &&
                      !t.defaultView.closed &&
                      (this.InternalShow(e), n());
                  }, t);
                })
              : (this.InternalShow(e), Promise.resolve())
          );
        }
        InternalShow(e) {
          this.m_container ||
            ((this.m_container =
              this.m_parent.ownerDocument.createElement("div")),
            this.m_parent.appendChild(this.m_container)),
            i.render(e, this.m_container);
        }
        Hide(e) {
          this.CancelShowInterval(),
            e
              ? (this.iIntervalShow = this.m_window.setTimeout(() => {
                  this.InternalHide();
                }, e))
              : this.InternalHide();
        }
        InternalHide() {
          this.m_container &&
            (i.unmountComponentAtNode(this.m_container),
            this.m_bRemoveOnHide &&
              (this.m_parent.removeChild(this.m_container),
              (this.m_container = null)));
        }
        CancelShowInterval() {
          void 0 !== this.iIntervalShow &&
            (this.m_window.clearInterval(this.iIntervalShow),
            (this.iIntervalShow = void 0));
        }
        BIsChildElement(e) {
          return this.m_container && o.e(this.m_container, e);
        }
      }
      class l {
        constructor(e) {
          (this.m_mapEmbeddedHovers = new WeakMap()), (this.m_strUniqueID = e);
        }
        ShowElementDelayed(e, t, n, i) {
          let o = this.GetEmbeddedElement(e);
          return (o.activeObject = i), o.instance.Show(n, t);
        }
        ShowElement(e, t, n) {
          let i = this.GetEmbeddedElement(e);
          (i.activeObject = n), i.instance.Show(t);
        }
        HideElement(e, t, n) {
          let i = this.GetEmbeddedElement(e);
          i.activeObject == t &&
            ((i.activeObject = void 0), i.instance.Hide(n));
        }
        GetEmbeddedElement(e) {
          let t = this.m_mapEmbeddedHovers.get(e);
          return (
            t || ((t = new s(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t
          );
        }
      }
    },
    jWvk: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return v;
        });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = n("f5iL"),
        a = n("GbHM"),
        l = n("hCpY"),
        c = n("C/LP"),
        u = (n("nDaX"), n("O8Yk")),
        d = n("xHQ9"),
        h = n("tXBB");
      function m(e, t = "smooth", n, i) {
        const o = (null != n ? n : 30) / 100,
          r = s.a.useRef(void 0),
          a = s.a.useRef(void 0),
          l = s.a.useCallback(() => {
            (r.current = void 0), (a.current = void 0);
          }, []),
          c = (function (e, t) {
            const n = s.a.useRef();
            return s.a.useCallback(
              (i, o) => {
                let s = "sine";
                n.current && (n.current.Cancel(), (s = "linear")),
                  void 0 === i && (i = e.current.scrollTop),
                  void 0 === o && (o = e.current.scrollLeft);
                let r = Math.max(
                  Math.abs(e.current.scrollTop - i),
                  Math.abs(e.current.scrollLeft - o)
                );
                if (r > 0) {
                  let a = Math.max(Math.min((r / 1e3) * 200, 500), 300);
                  (n.current = new d.c(
                    e.current,
                    { scrollTop: i, scrollLeft: o },
                    { msDuration: a, timing: s, onComplete: t }
                  )),
                    n.current.Start();
                } else t && t();
              },
              [e, t]
            );
          })(e, l);
        return s.a.useCallback(
          (n) => {
            var s, u;
            if (i && !i(n)) return !1;
            const {
                scrollTop: d,
                scrollHeight: m,
                clientHeight: p,
                scrollLeft: g,
                scrollWidth: b,
                clientWidth: _,
              } = e.current,
              f = null !== (s = r.current) && void 0 !== s ? s : d,
              v = null !== (u = a.current) && void 0 !== u ? u : g;
            switch (n.detail.button) {
              case h.a.DIR_UP:
                if (f <= 2) return !1;
                r.current = Math.max(0, f - p * o);
                break;
              case h.a.DIR_DOWN:
                if (f >= m - p - 2) return !1;
                r.current = Math.min(m - p, f + p * o);
                break;
              case h.a.DIR_LEFT:
                if (v <= 2) return !1;
                a.current = Math.max(0, v - _ * o);
                break;
              case h.a.DIR_RIGHT:
                if (v >= b - _ - 2) return !1;
                a.current = Math.min(b - _, v + _ * o);
                break;
              default:
                return !1;
            }
            return (
              t && "smooth" != t
                ? (e.current.scrollTo({
                    top: r.current,
                    left: a.current,
                    behavior: "auto",
                  }),
                  l())
                : c(r.current, a.current),
              !0
            );
          },
          [i, e, t, o, c, l]
        );
      }
      var p = n("ez+p"),
        g = n("Lsvi"),
        b = (n("hane"), n("LzMl")),
        _ = n.n(b);
      const f = s.a.forwardRef(function (e, t) {
          const {
              scrollDirection: n,
              scrollPaddingTop: o,
              scrollPaddingRight: r,
              scrollPaddingBottom: c,
              scrollPaddingLeft: u,
              className: d,
              children: h,
              style: m,
            } = e,
            b = Object(i.c)(e, [
              "scrollDirection",
              "scrollPaddingTop",
              "scrollPaddingRight",
              "scrollPaddingBottom",
              "scrollPaddingLeft",
              "className",
              "children",
              "style",
            ]);
          let f;
          switch (n) {
            case "x":
              f = _.a.ScrollX;
              break;
            case "both":
              f = _.a.ScrollBoth;
              break;
            case "y":
            default:
              f = _.a.ScrollY;
          }
          let v = Object.assign({}, m);
          (o || 0 === o) && (v.scrollPaddingTop = o),
            (r || 0 === r) && (v.scrollPaddingRight = r),
            (c || 0 === c) && (v.scrollPaddingBottom = c),
            (u || 0 === u) && (v.scrollPaddingLeft = u);
          const C = s.a.useRef(),
            O = s.a.useCallback(
              (e) => {
                window.requestAnimationFrame(() => {
                  var e, t, n;
                  (null === (e = C.current) || void 0 === e
                    ? void 0
                    : e.BFocusWithin()) &&
                    (null ===
                      (n =
                        null === (t = C.current.Node()) || void 0 === t
                          ? void 0
                          : t.GetLastFocusElement()) ||
                      void 0 === n ||
                      n.scrollIntoView({ behavior: "auto", block: "nearest" }));
                });
              },
              [C]
            ),
            D = Object(l.j)(O),
            S = Object(l.g)(C, b.navRef),
            E = Object(l.g)(t, D);
          return s.a.createElement(
            g.a,
            Object.assign({}, b, {
              style: v,
              className: Object(a.a)(d, _.a.ScrollPanel, f),
              ref: E,
              navRef: S,
            }),
            s.a.createElement(p.a, null, h)
          );
        }),
        v = s.a.forwardRef(function (e, t) {
          const { scrollStepPercent: n, scrollBehavior: o } = e,
            r = Object(i.c)(e, ["scrollStepPercent", "scrollBehavior"]),
            a = s.a.useRef(),
            c = m(
              a,
              o,
              n,
              s.a.useCallback((e) => e.currentTarget != e.target, [])
            ),
            d = Object(l.g)(a, t);
          return s.a.createElement(
            f,
            Object.assign({}, r, {
              onGamepadDirection: c,
              ref: d,
              scrollIntoViewType: u.e.NoTransformSparseContent,
            })
          );
        });
      s.a.forwardRef(function (e, t) {
        const { name: n, msScrollRestoreDelay: o, onScroll: r } = e,
          a = Object(i.c)(e, ["name", "msScrollRestoreDelay", "onScroll"]);
        return s.a.createElement(
          C,
          { name: n, msScrollRestoreDelay: o, parentOnScroll: r, refDiv: t },
          (e, t) =>
            s.a.createElement(f, Object.assign({}, a, { onScroll: e, ref: t }))
        );
      });
      function C(e) {
        const {
            name: t,
            msScrollRestoreDelay: n,
            parentOnScroll: i,
            refDiv: o,
            children: a,
          } = e,
          [u, d] = Object(c.b)(`${t}ScrollTop`, 250, 0),
          [h, m] = Object(c.b)(`${t}ScrollLeft`, 250, 0),
          p = s.a.useRef(0),
          g = s.a.useRef(0),
          b = s.a.useRef();
        let _ = s.a.useCallback(
          (e) => {
            const { scrollTop: t, scrollLeft: n } = e.currentTarget;
            d(t), (p.current = t), m(n), (g.current = n), i && i(e);
          },
          [d, m, i]
        );
        s.a.useLayoutEffect(() => {
          const e = function () {
            Object(r.a)(
              b.current.scrollHeight >= u,
              `Element is ${b.current.scrollHeight} high but trying to restore scrollTop of ${u}, element may need more time to lay out.`,
              b.current
            ),
              (p.current = u),
              (g.current = h),
              b.current.scrollTo({ top: u, left: h, behavior: "auto" }),
              b.current.dispatchEvent(new UIEvent("scroll"));
          };
          (u == p.current && h == g.current) ||
            (n ? window.setTimeout(e, n) : e());
        }, [u, h, n]);
        const f = Object(l.g)(b, o);
        return s.a.useMemo(() => a(_, f), [_, f, a]);
      }
    },
    kDGI: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return b;
        });
      var i,
        o = n("mrSG"),
        s = n("2vnA"),
        r = n("i8i4"),
        a = n("rSrx"),
        l = n("6MVd"),
        c = n("vYsE"),
        u = n("Zdsb"),
        d = n("GXif"),
        h = n("/Q1a"),
        m = n("f5iL"),
        p = n("ApMK");
      class g {
        constructor(e, t, n) {
          if (((this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []), n))
            for (let e = 0; e < n.length; e++) this.AddLink(n[e], !0);
          else {
            let t = e.getElementsByTagName("link");
            for (let e = 0; e < t.length; e++) {
              let n = t[e];
              this.AddLink(n, !1);
            }
          }
        }
        AddLink(e, t) {
          if (t) {
            let t = !1;
            try {
              (e.sheet && e.sheet.cssRules && 0 != e.sheet.cssRules.length) ||
                (t = !0);
            } catch (e) {}
            t &&
              (e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e));
          } else
            e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e);
        }
        SetTarget(e) {
          (this.m_fnRender = e),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }
        OnLinkLoad(e) {
          e.currentTarget.removeEventListener("load", this.OnLinkLoad),
            p.b(this.m_rgLoadingLinks, e.currentTarget),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }
      }
      Object(o.b)([c.a], g.prototype, "OnLinkLoad", null),
        (function (e) {
          (e[(e.Minimized = 1)] = "Minimized"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.Tooltip = 4)] = "Tooltip"),
            (e[(e.ContextMenu = 8)] = "ContextMenu"),
            (e[(e.Resizable = 16)] = "Resizable");
        })(i || (i = {}));
      class b {
        constructor(e, t) {
          (this.m_bFocused = !1),
            Object(m.a)(
              e,
              "Name is required.  This is an internal name, different from title."
            ),
            (this.m_strName = e),
            (this.m_rgParams = t),
            this.m_rgParams.target_browser &&
              (this.m_strName +=
                "_pid" + this.m_rgParams.target_browser.m_unPID),
            (this.m_strTitle = t.title),
            delete this.m_rgParams.title;
        }
        UpdateParamsBeforeShow(e) {
          return e;
        }
        OnDrop(e) {
          console.log("Ignoring drop onto toplevel window", e),
            e.preventDefault(),
            e.stopPropagation();
        }
        OnDragOver(e) {
          e.preventDefault(),
            (e.dataTransfer.dropEffect = "none"),
            e.stopPropagation();
        }
        OnMessage(e) {
          "window_moved" == e.data && this.OnResize();
        }
        Show(e = !0, t = !1) {
          window.SteamClient && (this.m_rgParams.eCreationFlags |= i.Hidden),
            this.m_rgParams.eCreationFlags & i.Tooltip && (e = !1),
            this.BIsValid() &&
              (this.BIsClosed()
                ? ((this.m_popup = void 0), (this.m_element = void 0))
                : e && this.Focus(t));
          let n,
            o,
            s,
            r = f.GetExistingPopup(this.m_strName);
          (r && !this.m_rgParams.replace_existing_popup) ||
            ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
            r
              ? ((o = r.m_element),
                (n = r.m_popup),
                r.ReleasePopup(),
                (s = r.m_renderWhenReady),
                f.RemoveTrackedPopup(r),
                n.removeEventListener("beforeunload", r.OnBeforeUnloadEvent),
                n.removeEventListener("unload", r.OnUnload),
                n.removeEventListener("resize", r.OnResizeEvent),
                n.removeEventListener("focus", this.OnFocusInternal),
                n.removeEventListener("blur", this.OnBlurInternal),
                n.removeEventListener("drop", r.OnDrop),
                n.removeEventListener("dragover", r.OnDragOver),
                n.removeEventListener("message", this.OnMessage))
              : (({ popup: n, element: o } = _.CreatePopup(
                  this.m_strName,
                  this.m_rgParams
                )),
                (s = new g(n.document, o))),
            n &&
              o &&
              ((n.document.title = this.m_strTitle),
              n.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
              n.addEventListener("unload", this.OnUnload),
              n.addEventListener("resize", this.OnResizeEvent),
              n.addEventListener("focus", this.OnFocusInternal),
              n.addEventListener("blur", this.OnBlurInternal),
              n.addEventListener("drop", this.OnDrop),
              n.addEventListener("dragover", this.OnDragOver),
              n.addEventListener("message", this.OnMessage),
              h.d.LANGUAGE &&
                n.document.documentElement.setAttribute("lang", Object(d.c)()),
              (this.m_popup = n),
              (this.m_element = o),
              (this.m_renderWhenReady = s),
              this.m_renderWhenReady.SetTarget(() =>
                this.RenderInternal(this.m_popup, this.m_element, e)
              )),
            f.AddTrackedPopup(this),
            r && e && this.Focus());
        }
        RemoveEventListeners() {
          this.window.removeEventListener(
            "beforeunload",
            this.OnBeforeUnloadEvent
          ),
            this.window.removeEventListener("unload", this.OnUnload),
            this.window.removeEventListener("resize", this.OnResizeEvent),
            this.window.removeEventListener("focus", this.OnFocusInternal),
            this.window.removeEventListener("blur", this.OnBlurInternal),
            this.window.removeEventListener("drop", this.OnDrop),
            this.window.removeEventListener("dragover", this.OnDragOver),
            this.window.removeEventListener("message", this.OnMessage);
        }
        RenderInternal(e, t, n) {
          var i;
          this.browser_info &&
            ((i = this.browser_info).m_eBrowserType ==
              u.d.EBrowserType_OpenVROverlay ||
              i.m_eBrowserType == u.d.EBrowserType_OpenVROverlay_Dashboard) &&
            (t.ownerDocument.body.className += " VR"),
            this.Render(e, t),
            this.OnLoad(),
            e.SteamClient &&
              (n
                ? e.SteamClient.Window.BringToFront()
                : e.SteamClient.Window.ShowWindow());
        }
        OnResizeEvent() {
          this.OnResize();
        }
        OnBeforeUnloadEvent() {
          this.OnBeforeUnload();
        }
        OnUnload() {
          this.RemoveEventListeners(),
            f.RemoveTrackedPopup(this),
            this.OnClose(),
            r.unmountComponentAtNode(this.m_element);
        }
        get browser_info() {
          return this.m_rgParams.target_browser;
        }
        get window() {
          return this.m_popup;
        }
        get root_element() {
          return this.m_element;
        }
        get title() {
          return this.m_strTitle;
        }
        set title(e) {
          (this.m_strTitle = e),
            this.m_popup && (this.m_popup.document.title = this.m_strTitle);
        }
        Focus(e = !1) {
          this.m_popup &&
          void 0 !== this.m_popup.SteamClient &&
          void 0 !== this.m_popup.SteamClient.Window
            ? e
              ? this.m_popup.SteamClient.Window.SetForegroundWindow()
              : this.m_popup.SteamClient.Window.BringToFront()
            : this.m_popup && this.m_popup.focus();
        }
        Close() {
          this.m_popup && this.m_popup.close();
        }
        GetName() {
          return this.m_strName;
        }
        BIsValid() {
          return !!this.m_popup;
        }
        BIsClosed() {
          return !this.m_popup || this.m_popup.closed;
        }
        BIsVisible() {
          return (
            this.m_popup &&
            !this.m_popup.closed &&
            "visible" == this.m_popup.document.visibilityState
          );
        }
        BIsFocused() {
          return this.BIsVisible() && this.m_popup.document.hasFocus();
        }
        OnFocusInternal() {
          (this.m_bFocused = !0), this.OnFocus();
        }
        OnBlurInternal() {
          (this.m_bFocused = !1), this.OnBlur();
        }
        get focused() {
          return this.m_bFocused;
        }
        GetWindowRestoreDetails() {
          return this.m_popup &&
            !this.m_popup.closed &&
            this.m_popup.SteamClient
            ? new Promise((e, t) => {
                this.m_popup.SteamClient.Window.GetWindowRestoreDetails((t) => {
                  e(t);
                });
              })
            : Promise.resolve("");
        }
        IsMinimized() {
          return this.m_popup &&
            !this.m_popup.closed &&
            this.m_popup.SteamClient &&
            this.m_popup.SteamClient.Window &&
            this.m_popup.SteamClient.Window.IsWindowMinimized
            ? new Promise((e, t) => {
                this.m_popup.SteamClient.Window.IsWindowMinimized((t) => {
                  e(t);
                });
              })
            : Promise.resolve(!1);
        }
        ReleasePopup() {
          this.OnClose(), (this.m_popup = null);
        }
        OnBeforeUnload() {}
        OnFocus() {}
        OnBlur() {}
      }
      Object(o.b)([s.C], b.prototype, "m_bFocused", void 0),
        Object(o.b)([c.a], b.prototype, "OnMessage", null),
        Object(o.b)([c.a], b.prototype, "OnResizeEvent", null),
        Object(o.b)([c.a], b.prototype, "OnBeforeUnloadEvent", null),
        Object(o.b)([c.a], b.prototype, "OnUnload", null),
        Object(o.b)([c.a], b.prototype, "OnFocusInternal", null),
        Object(o.b)([c.a], b.prototype, "OnBlurInternal", null);
      Object(o.b)(
        [c.a],
        class extends b {
          constructor(e, t, n, i) {
            super(e, n), this.SetSavedDimensionsKey(t), (this.m_bExpires = i);
          }
          BIsInOverlay() {
            return (
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
            );
          }
          SetSavedDimensionsKey(e) {
            this.m_strSavedDimensionsKey = e;
          }
          UpdateParamsBeforeShow(e) {
            return (
              !this.m_strSavedDimensionsKey ||
              e.bIgnoreSavedDimensions ||
              e.strRestoreDetails
                ? e.strRestoreDetails &&
                  ((this.m_strInitialSavedDimensionsKey =
                    this.GetSavedDimensionsKey()),
                  f.SetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey,
                    e.strRestoreDetails,
                    this.m_bExpires
                  ))
                : ((this.m_strInitialSavedDimensionsKey =
                    this.GetSavedDimensionsKey()),
                  (e.strRestoreDetails = f.GetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey
                  ))),
              e
            );
          }
          OnLoad() {
            this.GetWindowRestoreDetails().then((e) => {
              (this.m_strInitialRestoreDetails = e), this.OnResizeComplete(e);
            });
          }
          OnResize() {
            this.QueryAndStoreWindowPosition();
          }
          OnResizeComplete(e) {}
          QueryAndStoreWindowPosition() {
            if (this.m_strInitialRestoreDetails) {
              let e = this.GetSavedDimensionsKey();
              this.m_popup.setTimeout(() => {
                this.GetWindowRestoreDetails().then((t) => {
                  let n =
                    this.m_strInitialRestoreDetails == t &&
                    e == this.m_strInitialSavedDimensionsKey;
                  this.m_popup &&
                    this.m_strSavedDimensionsKey &&
                    t &&
                    !n &&
                    (f.SetRestoreDetails(e, t, this.m_bExpires),
                    (this.m_rgParams.strRestoreDetails = t),
                    (this.m_strInitialSavedDimensionsKey = e),
                    this.OnResizeComplete(t));
                });
              }, 30);
            }
          }
          OnBeforeUnload() {
            this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
          }
          OnClose() {}
          SaveWindowPosition(e) {
            f.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
              (this.m_rgParams.strRestoreDetails = e);
          }
        }.prototype,
        "QueryAndStoreWindowPosition",
        null
      );
      class _ {
        constructor() {
          if (
            ((this.m_bShuttingDown = !1),
            (this.m_mapPopups = new Map()),
            (this.m_rgShutdownCallbacks = []),
            (this.m_rgPopupCreatedCallbacks = []),
            (this.m_unCurrentAccountID = 0),
            (this.m_mapRestoreDetails = new Map()),
            (this.m_bSaveRequired = !1),
            !Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
              .MOBILE_BUILD)
          ) {
            window.addEventListener("beforeunload", (e) => {
              this.m_bShuttingDown = !0;
              for (let e of this.m_rgShutdownCallbacks) e();
              let t = [];
              this.m_mapPopups.forEach((e) => {
                e.BIsValid() && !e.BIsClosed() && t.push(e);
              });
              for (let e of t) e.Close();
              this.m_bSaveRequired && this.SaveSavedDimensionStore(),
                this.m_mapPopups.clear();
            });
            let e = document.querySelector("head");
            Object(m.a)(e, "Couldn't find head element"),
              e &&
                ((this.m_DynamicCSSObserver = new MutationObserver(() => {
                  const e = a.p();
                  this.m_mapPopups.forEach((t) => {
                    a.a(t.window, e);
                  });
                })),
                this.m_DynamicCSSObserver.observe(e, { childList: !0 }));
          }
        }
        SetCurrentLoggedInAccountID(e) {
          (this.m_unCurrentAccountID = e),
            e
              ? this.LoadSavedDimensionStore()
              : this.ClearSavedDimensionStore();
        }
        AddShutdownCallback(e) {
          this.m_rgShutdownCallbacks.push(e);
        }
        AddPopupCreatedCallback(e) {
          this.m_rgPopupCreatedCallbacks.push(e);
        }
        AddTrackedPopup(e) {
          this.m_mapPopups.set(e.GetName(), e);
          for (let t of this.m_rgPopupCreatedCallbacks) t(e);
        }
        RemoveTrackedPopup(e) {
          this.m_mapPopups.delete(e.GetName());
        }
        GetExistingPopup(e) {
          return this.m_mapPopups.get(e);
        }
        GetPopups() {
          return this.m_mapPopups.values();
        }
        ClosePopupsOwnedByBrowser(e) {
          this.m_mapPopups.forEach((t) => {
            t.browser_info &&
              t.browser_info.m_nBrowserID == e.m_nBrowserID &&
              t.browser_info.m_unPID == e.m_unPID &&
              t.Close();
          });
        }
        static CreatePopup(e, t) {
          let n = t.dimensions || {},
            i = n.width || 300,
            o = n.height || 300,
            s = t.title,
            r = "width=" + i + ",height=" + o;
          void 0 !== n.left && (r += ",left=" + n.left),
            void 0 !== n.top && (r += ",top=" + n.top),
            (r += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
          let l = "about:blank",
            c = [];
          c.push("createflags=" + t.eCreationFlags),
            t.minWidth && c.push("minwidth=" + t.minWidth),
            t.minHeight && c.push("minheight=" + t.minHeight),
            t.target_browser &&
              (c.push("pid=" + t.target_browser.m_unPID),
              c.push("browser=" + t.target_browser.m_nBrowserID),
              c.push("browserType=" + t.target_browser.m_eBrowserType),
              t.availscreenwidth &&
                t.availscreenheight &&
                (c.push("screenavailwidth=" + t.availscreenwidth),
                c.push("screenavailheight=" + t.availscreenheight))),
            t.strVROverlayKey && c.push("vrOverlayKey=" + t.strVROverlayKey),
            t.strRestoreDetails &&
              c.push("restoredetails=" + t.strRestoreDetails),
            t.window_opener_id && c.push("openerid=" + t.window_opener_id),
            c && (l += "?" + c.join("&"));
          let u = (t.owner_window || window).open(l, e, r, !0);
          if (!u)
            return (
              console.log(
                "Failed to create popup.. browser popup blocker enabled?"
              ),
              {}
            );
          let d = "";
          t.html_class && (d = `class="${t.html_class}"`);
          let h = "";
          t.body_class && (h = `class="${t.body_class}"`);
          let m = `<!DOCTYPE html><html ${d}><head><title></title></head><body ${h}><div id="popup_target"></div></body></html>`;
          return (
            u.document.write(m),
            (u.document.title = s),
            a.a(u, a.p()),
            { popup: u, element: u.document.getElementById("popup_target") }
          );
        }
        BShuttingDown() {
          return this.m_bShuttingDown;
        }
        GetLocalStorageKey() {
          return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
        }
        LoadSavedDimensionStore() {
          if (!this.m_unCurrentAccountID) return;
          let e = this.GetLocalStorageKey();
          this.m_mapRestoreDetails = void 0;
          let t = window.localStorage.getItem(e);
          if (t)
            try {
              let e = JSON.parse(t);
              this.m_mapRestoreDetails = new Map(e);
            } catch (e) {}
          this.m_mapRestoreDetails || (this.m_mapRestoreDetails = new Map());
        }
        SaveSavedDimensionStore() {
          if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
          let e = this.GetLocalStorageKey(),
            t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
          window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
        }
        DebouncedSaveSavedDimensionStore() {
          this.SaveSavedDimensionStore();
        }
        ClearSavedDimensionStore() {
          this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
        }
        GetRestoreDetails(e) {
          if (!this.m_mapRestoreDetails.has(e)) return "";
          let t = this.m_mapRestoreDetails.get(e);
          return (
            (t.last_used = Date.now()),
            (this.m_bSaveRequired = !0),
            t.strRestoreDetails
          );
        }
        SetRestoreDetails(e, t, n) {
          if (e) {
            if (t) {
              if (this.m_mapRestoreDetails.size > 50) {
                let e = null,
                  t = Date.now();
                for (let n of Array.from(this.m_mapRestoreDetails.keys())) {
                  let i = this.m_mapRestoreDetails.get(n);
                  i.last_used < t && i.bExpires && ((t = i.last_used), (e = n));
                }
                e && this.m_mapRestoreDetails.delete(e);
              }
              let i = {
                strRestoreDetails: t,
                last_used: Date.now(),
                bExpires: n,
              };
              this.m_mapRestoreDetails.set(e, i);
            } else this.m_mapRestoreDetails.delete(e);
            (this.m_bSaveRequired = !0),
              this.m_bShuttingDown
                ? this.SaveSavedDimensionStore()
                : this.DebouncedSaveSavedDimensionStore();
          }
        }
      }
      Object(o.b)(
        [c.a, Object(l.a)(100)],
        _.prototype,
        "DebouncedSaveSavedDimensionStore",
        null
      );
      let f = new _();
      window.g_PopupManager = f;
    },
    nDaX: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return i;
      }),
        n.d(t, "f", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return l;
        }),
        n.d(t, "l", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "n", function () {
          return d;
        }),
        n.d(t, "m", function () {
          return h;
        }),
        n.d(t, "k", function () {
          return m;
        }),
        n.d(t, "i", function () {
          return p;
        }),
        n.d(t, "j", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return b;
        }),
        n.d(t, "b", function () {
          return _;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return C;
        });
      var i,
        o = n("tXBB");
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      let s = {
        [o.a.OK]: "vgp_onok",
        [o.a.CANCEL]: "vgp_oncancel",
        [o.a.SECONDARY]: "vgp_onsecondaryaction",
        [o.a.OPTIONS]: "vgp_onoptions",
        [o.a.START]: "vgp_onmenu",
      };
      function r(e, t, n) {
        return (
          e.addEventListener(t, n),
          () =>
            (function (e, t, n) {
              e.removeEventListener(t, n);
            })(e, t, n)
        );
      }
      function a(e, t) {
        return r(e, "vgp_onbuttondown", t);
      }
      function l(e, t) {
        return r(e, "vgp_onbuttonup", t);
      }
      function c(e, t) {
        return r(e, "vgp_onok", v(t));
      }
      function u(e, t) {
        return r(e, "vgp_oncancel", v(t));
      }
      function d(e, t) {
        return r(e, "vgp_onsecondaryaction", v(t));
      }
      function h(e, t) {
        return r(e, "vgp_onoptions", v(t));
      }
      function m(e, t) {
        return r(e, "vgp_onmenu", v(t));
      }
      function p(e, t) {
        return r(e, "vgp_ondirection", v(t));
      }
      function g(e, t) {
        return r(e, "vgp_onfocus", t);
      }
      function b(e, t) {
        return r(e, "vgp_onblur", t);
      }
      function _(e, t, n) {
        if (null === e) return !0;
        let i = new e.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return e.dispatchEvent(i);
      }
      function f(e) {
        const t = [o.a.DIR_UP, o.a.DIR_DOWN, o.a.DIR_LEFT, o.a.DIR_RIGHT];
        let n = !0,
          i = !1,
          r = s[e.detail.button];
        return (
          r
            ? ((i = !0), (n = _(e.target, r, e.detail)))
            : -1 !== t.indexOf(e.detail.button) &&
              ((i = !0), (n = _(e.target, "vgp_ondirection", e.detail))),
          { bUnhandled: n, bHadLogicalEventMapping: i }
        );
      }
      function v(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function C(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: n,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: s,
            onMenuActionDescription: r,
            actionDescriptionMap: a,
          } = e,
          l = Object.assign({}, a);
        return (
          void 0 !== t && (l[o.a.OK] = t),
          void 0 !== n && (l[o.a.CANCEL] = n),
          void 0 !== i && (l[o.a.SECONDARY] = i),
          void 0 !== s && (l[o.a.OPTIONS] = s),
          void 0 !== r && (l[o.a.START] = r),
          l
        );
      }
    },
    oFSi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("O8Yk");
      function o(e) {
        switch (e) {
          case "column":
            return i.c.COLUMN;
          case "column-reverse":
            return i.c.COLUMN_REVERSE;
          case "row":
            return i.c.ROW;
          case "row-reverse":
            return i.c.ROW_REVERSE;
          case "grid":
            return i.c.GRID;
          default:
            return i.c.NONE;
        }
      }
    },
    oIPy: function (e, t, n) {
      e.exports = {
        Spinner: "gamepadui_svg_library_Spinner_2Hc4f",
        SpinnerSpokeFade: "gamepadui_svg_library_SpinnerSpokeFade_2QBT4",
        WirelessConnectingActive:
          "gamepadui_svg_library_WirelessConnectingActive_UCVKt",
        WifiBar1: "gamepadui_svg_library_WifiBar1_25g4S",
        WifiBar1Anim: "gamepadui_svg_library_WifiBar1Anim_3WnTD",
        WifiBar2: "gamepadui_svg_library_WifiBar2_1Utwl",
        WifiBar2Anim: "gamepadui_svg_library_WifiBar2Anim_3BoKo",
        WifiBar3: "gamepadui_svg_library_WifiBar3_zZxOy",
        WifiBar3Anim: "gamepadui_svg_library_WifiBar3Anim_1C2Pj",
        WifiBar4: "gamepadui_svg_library_WifiBar4_23OJc",
        WifiBar4Anim: "gamepadui_svg_library_WifiBar4Anim_bMD58",
        GenericGamepadHighlight:
          "gamepadui_svg_library_GenericGamepadHighlight_1zfyD",
      };
    },
    pC2t: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var i = n("q1tI"),
        o = n("mrSG"),
        s = n("2vnA");
      var r = n("rSrx"),
        a = n("SS8s"),
        l = n("RLZf"),
        c = n.n(l),
        u = n("iRfV");
      n("kDGI");
      class d {
        constructor() {
          this.m_nKey = null;
        }
        get key() {
          return (
            null == this.m_nKey &&
              ((this.m_nKey = d.s_nNextKeyValue), d.s_nNextKeyValue++),
            this.m_nKey
          );
        }
        static GetBrowserInfoForPopup(e) {
          return null;
        }
        SetTakeFocus(e) {
          this.m_fnTakeFocus = e;
        }
      }
      (d.s_nNextKeyValue = 1),
        Object(o.b)([s.C], d.prototype, "m_refContextMenu", void 0);
      class h extends d {
        constructor(e) {
          super(),
            (this.m_bVisible = !1),
            (this.m_elSubmenuItem = null),
            (this.m_timerHideSubMenu = 0),
            (this.m_ownerWindow = e);
        }
        RenderElements(e, t) {
          0 == this.presentation &&
          (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
          this.m_ownerWindow.SteamClient &&
          this.m_ownerWindow.SteamClient.Window
            ? (this.m_popupContextMenu = new a.a(
                e,
                t,
                d.GetBrowserInfoForPopup(this.m_ownerWindow)
              ))
            : ((this.m_embeddedElementInstance = Object(u.b)(
                this.m_ownerWindow.document
              )),
              (this.m_rctElement = i.createElement(a.g, e, t)));
        }
        SetOnHideCallback(e) {
          this.m_fnOnHideCallback = e;
        }
        Show() {
          this.m_rctElement
            ? this.m_embeddedElementInstance.Show(this.m_rctElement)
            : this.m_popupContextMenu.Show(),
            (this.m_bVisible = !0);
        }
        Hide() {
          this.InternalHide();
        }
        HideIfNotInFocus() {
          this.BHasFocus() || this.BIsFocusInChildHierarchy() || this.Hide();
        }
        InternalHide() {
          this.m_bVisible &&
            ((this.m_bVisible = !1),
            this.InternalHideSubMenu(),
            this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
            this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.Hide(300)
              : this.m_popupContextMenu.Close());
        }
        get visible() {
          return this.m_bVisible;
        }
        get options() {
          return this.m_options;
        }
        get presentation() {
          return 0;
        }
        get styles() {
          return c.a;
        }
        get owner_window() {
          return this.m_ownerWindow;
        }
        ShowSubMenu(e, t) {
          return this.m_elSubmenuItem == e
            ? (this.CancelHideSubMenuTimer(), this.m_submenu.TakeFocus(), null)
            : (this.InternalHideSubMenu(),
              (this.m_elSubmenuItem = e),
              (this.m_submenu = new p(this, t(), e)),
              this.m_submenu.Show(),
              this.m_submenu);
        }
        CancelHideSubMenuTimer() {
          this.m_timerHideSubMenu > 0 &&
            (clearTimeout(this.m_timerHideSubMenu),
            (this.m_timerHideSubMenu = 0));
        }
        HideSubMenu() {
          if (!this.m_submenu) return void this.CancelHideSubMenuTimer();
          if (this.m_timerHideSubMenu > 0) return;
          this.m_timerHideSubMenu = window.setTimeout(() => {
            this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
          }, 150);
        }
        HideSelf() {
          this.InternalHide();
        }
        InternalHideSubMenu() {
          this.CancelHideSubMenuTimer(),
            this.m_submenu &&
              (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
              (this.m_elSubmenuItem = null),
              this.m_submenu.InternalHide(),
              (this.m_submenu = null));
        }
        TakeFocus() {
          this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
            this.m_fnTakeFocus && this.m_fnTakeFocus();
        }
        BInternalElementInParentHierarchy(e) {
          return (
            this.m_parentInstance &&
            (this.m_parentInstance.BIsChildElement(e) ||
              this.m_parentInstance.BInternalElementInParentHierarchy(e))
          );
        }
        BInternalElementInChildHierarchy(e) {
          return (
            this.m_submenu &&
            (this.m_submenu.BIsChildElement(e) ||
              this.m_submenu.BInternalElementInChildHierarchy(e))
          );
        }
        BIsChildElement(e) {
          return this.m_embeddedElementInstance
            ? this.m_embeddedElementInstance.BIsChildElement(e)
            : r.e(this.m_popupContextMenu.root_element, e);
        }
        BHasFocus() {
          return this.m_embeddedElementInstance
            ? this.m_embeddedElementInstance.BIsChildElement(
                this.m_ownerWindow.document.activeElement
              )
            : this.m_popupContextMenu.focused;
        }
        BIsFocusInChildHierarchy() {
          return (
            this.m_submenu &&
            (this.m_submenu.BHasFocus() ||
              this.m_submenu.BIsFocusInChildHierarchy())
          );
        }
        BIsElementInMenuHierarchy(e) {
          return (
            this.BInternalElementInParentHierarchy(e) ||
            this.BInternalElementInChildHierarchy(e)
          );
        }
        BIsSubMenuVisible() {
          return !!this.m_submenu;
        }
        SetLabel(e) {}
      }
      Object(o.b)([s.C], h.prototype, "m_bVisible", void 0);
      class m extends h {
        constructor(e, t, n, i, o) {
          super(t.ownerDocument.defaultView),
            d.sm_iActiveContextMenuInstance &&
              d.sm_iActiveContextMenuInstance.Hide(),
            (d.sm_iActiveContextMenuInstance = this),
            (this.m_options = o || {});
          let s = {
            element: t,
            clientX: n,
            clientY: i,
            instance: this,
            options: this.m_options,
            fnOnMenuItemSelected: () => {
              this.Hide();
            },
          };
          this.RenderElements(s, e);
        }
        Show() {
          this.m_options.bDisableMouseOverlay ||
            ((this.m_embeddedElementInstanceOverlay = Object(u.b)(
              this.m_ownerWindow.document
            )),
            this.m_embeddedElementInstanceOverlay.Show(i.createElement(a.f))),
            super.Show();
        }
        Hide() {
          this.m_embeddedElementInstanceOverlay &&
            this.m_embeddedElementInstanceOverlay.Hide(0),
            super.Hide();
        }
        BIsSubMenu() {
          return !1;
        }
      }
      class p extends h {
        constructor(e, t, n) {
          super(n.ownerDocument.defaultView),
            (this.m_parentInstance = e),
            (this.m_options = {
              bOverlapVertical: !0,
              bUseWebStyles: e.options.bUseWebStyles,
              strClassName: e.options.strClassName,
              bFitToWindow: e.options.bFitToWindow,
              bShiftToFitWindow: e.options.bShiftToFitWindow,
            });
          let i = {
            element: n,
            clientX: null,
            clientY: null,
            instance: this,
            options: this.m_options,
            fnOnMenuItemSelected: () => {
              this.Hide();
            },
            bSubmenu: !0,
          };
          this.RenderElements(i, t);
        }
        Hide() {
          this.m_popupContextMenu
            ? window.setTimeout(() => {
                this.m_parentInstance.HideIfNotInFocus();
              }, 10)
            : this.m_parentInstance.Hide();
        }
        BIsSubMenu() {
          return !0;
        }
      }
      var g = n("R1j/");
      class b {
        constructor() {
          this.m_ctorContextMenu = m;
        }
        CreateContextMenuInstance(e, t, n, i, o) {
          return new this.m_ctorContextMenu(e, t, n, i, o);
        }
        SetContextMenuConstructor(e) {
          this.m_ctorContextMenu = e;
        }
      }
      const _ = Object(g.a)("ContextMenuFactory", () => new b());
      function f(e, t, n) {
        let i,
          o,
          s,
          r = t;
        if (
          (null == r ? void 0 : r.preventDefault) &&
          (null == r ? void 0 : r.stopPropagation)
        ) {
          if (r.shiftKey) return null;
          r.preventDefault(),
            r.stopPropagation(),
            (s = r.currentTarget),
            (i = r.clientX),
            (o = r.clientY);
        } else s = t;
        let a = _.CreateContextMenuInstance(e, s, i, o, n);
        return a.Show(), a;
      }
    },
    pkWl: function (e, t, n) {
      e.exports = {
        Group: "radio_Group_2qYC3",
        Button: "radio_Button_3lwcR",
        Active: "radio_Active_3ZBFo",
      };
    },
    s358: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = (n("nDaX"), n("hane"), n("hCpY")),
        a = (n("tXBB"), n("Lsvi"));
      n("jWvk");
      const l = s.a.forwardRef(function (e, t) {
        const {
            onExplicitFocusLevelChanged: n,
            onOKButton: o,
            onCancelButton: l,
            navRef: u,
            focusable: d,
          } = e,
          h = Object(i.c)(e, [
            "onExplicitFocusLevelChanged",
            "onOKButton",
            "onCancelButton",
            "navRef",
            "focusable",
          ]),
          m = s.a.useRef(),
          { fnOnOKButton: p, fnOnCancelButton: g } = c({
            navRefPanel: m,
            onOKButton: o,
            onCancelButton: l,
            onExplicitFocusLevelChanged: n,
          }),
          b = Object(r.g)(u, m);
        return s.a.createElement(
          a.a,
          Object.assign({}, h, {
            onOKButton: p,
            onCancelButton: g,
            navRef: b,
            ref: t,
            focusable: !1 !== d,
          })
        );
      });
      function c(e) {
        let {
          navRefPanel: t,
          onOKButton: n,
          onCancelButton: i,
          onExplicitFocusLevelChanged: o,
          fnFocusChildren: r,
        } = e;
        r = null != r ? r : u;
        return {
          fnOnOKButton: s.a.useCallback(
            (e) => {
              const i = t.current;
              return i.BHasFocus() && r(i, e.detail.button)
                ? (o && o(!0), !0)
                : !!n && n(e);
            },
            [t, n, o, r]
          ),
          fnOnCancelButton: s.a.useCallback(
            (e) => {
              const n = t.current;
              return n.BFocusWithin() &&
                !n.BHasFocus() &&
                n.TakeFocus(e.detail.button)
                ? (o && o(!1), !0)
                : !!i && i(e);
            },
            [t, i, o]
          ),
        };
      }
      function u(e, t) {
        return e.ChildTakeFocus(t);
      }
    },
    tQrp: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return b;
        });
      var i = n("mrSG"),
        o = n("2vnA"),
        s = (n("aoTL"), n("q1tI")),
        r = (n("msu0"), n("Zdsb"), n("pC2t")),
        a = (n("GbHM"), n("rSrx")),
        l = n("GXif"),
        c = n("/Q1a"),
        u = n("SS8s");
      function d(e, t) {
        let n;
        (n =
          "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e),
          0 == t.indexOf("steam://")
            ? (n.location.href = t)
            : n.open(
                t,
                null,
                "menubar,location,resizable,scrollbars,status,noopener"
              );
      }
      function h(e) {
        let {
            bDisableContextMenu: t,
            onContextMenu: n,
            bForceExternal: o,
            href: r,
            bUseLinkFilter: a,
            getPIDFromEvent: l,
          } = e,
          u = Object(i.c)(e, [
            "bDisableContextMenu",
            "onContextMenu",
            "bForceExternal",
            "href",
            "bUseLinkFilter",
            "getPIDFromEvent",
          ]);
        return (
          t || n || (n = p),
          a &&
            r &&
            (r =
              (c.d.IN_CLIENT ? "steam://openurl_external/" : "") +
              c.d.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              r),
          l || (l = () => 0),
          s.createElement(
            "a",
            Object.assign({}, u, {
              href: r,
              onClick: (e) => {
                e.preventDefault(),
                  g(window, r, {
                    bForceExternal: !!o,
                    bUseLinkFilter: !!a,
                    unPID: l(e),
                  });
              },
              onContextMenu: n,
              rel: a ? "noopener noreferrer" : void 0,
            }),
            e.children
          )
        );
      }
      function m(e) {
        const { strURL: t, unPID: n } = e;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            u.d,
            {
              onSelected: () => {
                a.j(t);
              },
            },
            Object(l.f)("#ContextMenu_CopyLinkURL")
          ),
          s.createElement(
            u.d,
            {
              onSelected: (e) => {
                g(e, t, { unPID: n });
              },
            },
            Object(l.f)("#ContextMenu_OpenLinkInNewWindow")
          )
        );
      }
      function p(e, t) {
        let n = e.currentTarget;
        return Object(r.a)(
          s.createElement(
            u.c,
            null,
            s.createElement(m, { strURL: n.href, unPID: t })
          ),
          e
        );
      }
      function g(e, t, n = {}) {
        const { bForceExternal: i, unPID: o, bUseLinkFilter: s } = n;
        let r;
        (r =
          "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e),
          "undefined" != typeof SteamClient && void 0 !== SteamClient.WebChat
            ? SteamClient.WebChat.OpenURLInClient(t, o || 0, !!i)
            : 0 == t.indexOf("steam://") &&
              0 != t.indexOf("steam://remoteplay/connect")
            ? (r.location.href = t)
            : r.open(
                t,
                null,
                "menubar,location,resizable,scrollbars,status,noopener" +
                  (s ? ",noreferrer" : "")
              );
      }
      function b(e) {
        if ("string" != typeof e) return NaN;
        const t = !e.includes("ms") && e.includes("s");
        let n = Number.parseFloat(e);
        return t && (n *= 1e3), n;
      }
      Object(i.b)(
        [o.C],
        class {
          constructor(e) {
            this.promise = e;
          }
          set promise(e) {
            (this.m_Promise = e),
              (this.m_Value = void 0),
              null == e ||
                e.then((t) => {
                  this.m_Promise === e && (this.m_Value = t);
                });
          }
          get promise() {
            return this.m_Promise;
          }
          get value() {
            return this.m_Value;
          }
        }.prototype,
        "m_Value",
        void 0
      );
    },
    tXBB: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var i,
        o,
        s = n("3u1o");
      class r {
        constructor(e) {
          this.m_config = e;
        }
        Reset() {
          (this.m_ActiveInputId = void 0),
            null != this.m_ActiveInputTimeout &&
              (clearInterval(this.m_ActiveInputTimeout),
              (this.m_ActiveInputTimeout = void 0));
        }
        HandleInputButtonDown(e, t) {
          if (this.m_ActiveInputId !== e && null != t) {
            this.Reset(), (this.m_ActiveInputId = e);
            const n = () => {
              this.m_ActiveInputTimeout = window.setInterval(() => {
                t();
              }, this.m_config.repeatInterval_ms);
            };
            null == this.m_config.firstRepeatInterval_ms ||
            this.m_config.firstRepeatInterval_ms ===
              this.m_config.repeatInterval_ms
              ? n()
              : (this.m_ActiveInputTimeout = window.setTimeout(() => {
                  t(), n();
                }, this.m_config.firstRepeatInterval_ms));
          }
        }
      }
      class a {
        constructor(e) {
          (this.m_config = e), (this.m_inputRepeatGenerator = new r(e));
        }
        Reset() {
          this.m_inputRepeatGenerator.Reset();
        }
        HandleInputButtonDown(e, t) {
          this.m_config.inputsThatRepeat.has(e)
            ? this.m_inputRepeatGenerator.HandleInputButtonDown(e, t)
            : this.m_inputRepeatGenerator.Reset();
        }
        HandleInputButtonUp(e) {
          this.m_inputRepeatGenerator.Reset();
        }
      }
      !(function (e) {
        (e[(e.INVALID = 0)] = "INVALID"),
          (e[(e.OK = 1)] = "OK"),
          (e[(e.CANCEL = 2)] = "CANCEL"),
          (e[(e.SECONDARY = 3)] = "SECONDARY"),
          (e[(e.OPTIONS = 4)] = "OPTIONS"),
          (e[(e.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
          (e[(e.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
          (e[(e.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
          (e[(e.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
          (e[(e.DIR_UP = 9)] = "DIR_UP"),
          (e[(e.DIR_DOWN = 10)] = "DIR_DOWN"),
          (e[(e.DIR_LEFT = 11)] = "DIR_LEFT"),
          (e[(e.DIR_RIGHT = 12)] = "DIR_RIGHT"),
          (e[(e.SELECT = 13)] = "SELECT"),
          (e[(e.START = 14)] = "START"),
          (e[(e.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
          (e[(e.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
          (e[(e.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
          (e[(e.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
          (e[(e.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
          (e[(e.LPAD_CLICK = 20)] = "LPAD_CLICK"),
          (e[(e.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
          (e[(e.RPAD_CLICK = 22)] = "RPAD_CLICK"),
          (e[(e.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
          (e[(e.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
          (e[(e.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
          (e[(e.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
          (e[(e.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
          (e[(e.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU");
      })(i || (i = {})),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
            (e[(e.KEYBOARD = 2)] = "KEYBOARD"),
            (e[(e.MOUSE = 3)] = "MOUSE"),
            (e[(e.TOUCH = 4)] = "TOUCH"),
            (e[(e.LPAD = 5)] = "LPAD"),
            (e[(e.RPAD = 6)] = "RPAD");
        })(o || (o = {}));
      class l {
        constructor() {
          (this.m_OnGamepadDetectedCallbacks = new s.a()),
            (this.m_ButtonDownCallbacks = new s.a()),
            (this.m_ButtonUpCallbacks = new s.a()),
            (this.m_AnalogCallbacks = new s.a()),
            (this.m_NavigationTypeChangeCallbacks = new s.a()),
            (this.m_nLastActiveControllerIndex = -1),
            (this.m_ButtonRepeatHandler = new a({
              inputsThatRepeat: new Set([
                i.DIR_UP,
                i.DIR_DOWN,
                i.DIR_LEFT,
                i.DIR_RIGHT,
              ]),
              firstRepeatInterval_ms: 500,
              repeatInterval_ms: 125,
            })),
            (this.m_bGamepadDetected = !1);
        }
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
        OnGamepadDetected() {
          console.log("Gamepad detected"),
            (this.m_bGamepadDetected = !0),
            this.m_OnGamepadDetectedCallbacks.Dispatch();
        }
        OnButtonDown(e, t) {
          void 0 === t && (t = -1),
            this.SetControllerActive(t),
            this.DispatchButtonDown(e),
            this.m_ButtonRepeatHandler.HandleInputButtonDown(e, () =>
              this.DispatchButtonDown(e, !0)
            );
        }
        OnButtonUp(e, t) {
          void 0 === t && (t = -1),
            this.SetControllerActive(t),
            this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
            this.m_ButtonUpCallbacks.Dispatch(
              e,
              this.m_eNavigationSourceType,
              this.m_nLastActiveControllerIndex
            );
        }
        DispatchButtonDown(e, t) {
          this.m_ButtonDownCallbacks.Dispatch(
            e,
            this.m_eNavigationSourceType,
            this.m_nLastActiveControllerIndex,
            t
          );
        }
        OnAnalogPad(e, t, n, i) {
          void 0 === i && (i = -1),
            this.SetControllerActive(i),
            this.m_AnalogCallbacks.Dispatch(
              e,
              this.m_nLastActiveControllerIndex,
              t,
              n
            );
        }
        OnNavigationTypeChanged(e) {
          this.m_NavigationTypeChangeCallbacks.Dispatch(e);
        }
      }
    },
    thkD: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return g;
      }),
        n.d(t, "k", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return _.a;
        }),
        n.d(t, "d", function () {
          return w;
        }),
        n.d(t, "e", function () {
          return L;
        }),
        n.d(t, "g", function () {
          return M;
        }),
        n.d(t, "f", function () {
          return N;
        }),
        n.d(t, "h", function () {
          return s.a;
        }),
        n.d(t, "j", function () {
          return h;
        }),
        n.d(t, "i", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return p;
        }),
        n.d(t, "l", function () {
          return r;
        });
      var i = n("q1tI"),
        o = n("7ast"),
        s = n("GTHt");
      function r(e) {
        const { active: t, children: n } = e,
          o = i.useRef();
        return (
          i.useLayoutEffect(
            () => (
              t && !o.current && (o.current = Object(s.a)(window).ShowModal(n)),
              () => {
                o.current && (o.current.Close(), (o.current = null));
              }
            ),
            [t]
          ),
          i.useLayoutEffect(() => {
            t && o.current.Update(n);
          }, [t, n]),
          null
        );
      }
      n("/0nC");
      var a = n("R1j/"),
        l = n("+aRA"),
        c = n("e356"),
        u = n("rSrx"),
        d = n("vbK/");
      const h = Object(a.a)("ModalPresentationContext", () =>
        i.createContext({})
      );
      function m(e) {
        const t = i.useContext(h);
        return i.createElement(
          d.a,
          Object.assign({ component: t.ModalPosition, fallback: p }, e)
        );
      }
      function p(e) {
        let t,
          n = {};
        e.onEscKeypress &&
          ((n.tabIndex = 0),
          (n.onKeyDown = (t) => {
            27 == t.keyCode && e.onEscKeypress();
          }),
          (n.onMouseDown = (t) => {
            t.currentTarget !== t.target ||
              e.bDisableBackgroundDismiss ||
              e.onEscKeypress();
          }),
          (t = (e) => {
            e && (u.e(e, e.ownerDocument.activeElement) || e.focus());
          }));
        let o = ["ModalPosition"];
        e.className && o.push(e.className),
          e.bDestructiveWarning && o.push("Destructive");
        const s =
            e.renderContent ||
            ((e) => i.createElement("div", Object.assign({}, e))),
          r = i.createElement(
            i.Fragment,
            null,
            !e.hideTopBar &&
              i.createElement("div", { className: "ModalPosition_TopBar" }),
            e.onEscKeypress &&
              !e.bHideCloseIcon &&
              i.createElement(
                "div",
                { className: "ModalPosition_Dismiss" },
                i.createElement(
                  "div",
                  { className: "closeButton", onClick: e.onEscKeypress },
                  i.createElement(c.Gb, null)
                )
              ),
            i.createElement(l.a, null, e.children)
          );
        return i.createElement(
          "div",
          Object.assign({ className: o.join(" ") }, n, { ref: t }),
          s({ className: "ModalPosition_Content", children: r })
        );
      }
      const g = ({
        active: e,
        onDismiss: t,
        className: n,
        modalClassName: s,
        children: a,
      }) =>
        i.createElement(
          r,
          { active: e },
          i.createElement(
            m,
            { onEscKeypress: t, className: s },
            i.createElement(o.h, { className: n }, a)
          )
        );
      function b(e) {
        const { className: t, children: n } = e;
        return i.createElement(
          r,
          { active: !0 },
          i.createElement("div", { className: t }, n)
        );
      }
      var _ = n("6B8T"),
        f = n("mrSG"),
        v = n("fsrB"),
        C = n("ez+p"),
        O = n("Lsvi"),
        D = (n("nDaX"), n("hane"), n("ROh0"), n("Sn0s")),
        S = n("FhWJ"),
        E = n("/Q1a");
      function w(e) {
        const { children: t, navID: n, closeModal: o } = e,
          s = i.createRef(),
          r = Object(D.a)(),
          a = (e) => (e.stopPropagation(), e.preventDefault(), !0);
        return E.d.IN_GAMEPADUI && !E.d.IN_LIBRARY
          ? i.createElement(
              v.b,
              {
                navID: n,
                NavigationManager: r,
                navTreeRef: s,
                onCancelButton: o,
                className: S.GamepadOnlyModalWrapper,
              },
              i.createElement(
                C.a,
                null,
                i.createElement(
                  O.a,
                  {
                    className: S.GamepadOnlyPanelWrapper,
                    onGamepadDirection: a,
                    focusableIfNoChildren: !0,
                  },
                  t
                )
              )
            )
          : i.createElement(i.Fragment, null, t);
      }
      var I = n("TyAF"),
        R = n("GXif"),
        T = n("hCpY"),
        y = n("GbHM");
      let N = class extends i.Component {
        Cancel() {
          this.props.onCancel && this.props.onCancel(),
            this.props.closeModal && this.props.closeModal();
        }
        OK() {
          return Object(f.a)(this, void 0, void 0, function* () {
            this.props.bOKDisabled ||
              (this.props.onOK && (yield this.props.onOK()),
              this.props.closeModal && this.props.closeModal());
          });
        }
        render() {
          return i.createElement(
            m,
            {
              onEscKeypress: this.Cancel,
              className: this.props.modalClassName,
              bDestructiveWarning: this.props.bDestructiveWarning,
              bDisableBackgroundDismiss: this.props.bDisableBackgroundDismiss,
              bHideCloseIcon: this.props.bHideCloseIcon,
            },
            i.createElement(
              o.i,
              {
                classNameContent: Object(y.a)(
                  "GenericConfirmDialog",
                  this.props.bAllowFullSize && "DialogContentFullSize",
                  this.props.className
                ),
                onSubmit: this.OK,
                bCenterVertically: !E.d.IN_GAMEPADUI,
              },
              this.props.children
            )
          );
        }
      };
      Object(f.b)([T.b], N.prototype, "Cancel", null),
        Object(f.b)([T.b], N.prototype, "OK", null),
        (N = Object(f.b)([I.a], N));
      let L = class extends i.Component {
        Cancel() {
          this.props.onCancel && this.props.onCancel(),
            this.props.closeModal && this.props.closeModal();
        }
        render() {
          const e = this.props,
            {
              strTitle: t,
              strDescription: n,
              strOKButtonText: s,
              strCancelButtonText: r,
              strMiddleButtonText: a,
              onMiddleButton: l,
              bAlertDialog: c,
              children: u,
            } = e,
            d = Object(f.c)(e, [
              "strTitle",
              "strDescription",
              "strOKButtonText",
              "strCancelButtonText",
              "strMiddleButtonText",
              "onMiddleButton",
              "bAlertDialog",
              "children",
            ]),
            h = s || Object(R.f)("#Button_Close");
          let m = i.createElement(o.D, {
            bOKDisabled: this.props.bOKDisabled,
            strOKText: s,
            onCancel: this.Cancel,
            strCancelText: r,
          });
          return (
            c
              ? (m = i.createElement(o.F, null, h))
              : l &&
                (m = i.createElement(o.E, {
                  bOKDisabled: this.props.bOKDisabled,
                  strOKText: s,
                  onCancel: this.Cancel,
                  strCancelText: r,
                  onUpdate: () => {
                    l(), this.props.closeModal && this.props.closeModal();
                  },
                  strUpdateText: a,
                  bUpdateDisabled: this.props.bMiddleDisabled,
                })),
            i.createElement(
              N,
              Object.assign({}, d),
              i.createElement(
                O.a,
                { onCancelButton: this.Cancel },
                i.createElement(
                  o.y,
                  null,
                  " ",
                  t || i.createElement(i.Fragment, null, " "),
                  " "
                ),
                i.createElement(
                  o.d,
                  null,
                  i.createElement(o.e, null, n, u),
                  i.createElement(o.q, null, m)
                )
              )
            )
          );
        }
      };
      Object(f.b)([T.b], L.prototype, "Cancel", null),
        (L = Object(f.b)([I.a], L));
      let M = class extends i.Component {
        render() {
          const e = Object.assign(
            {
              strTitle: Object(R.f)("#Error_FailureNotice"),
              strDescription: Object(R.f)("#Error_GenericFailureDescription"),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
              onOK: () => {},
              onCancel: () => {},
            },
            this.props
          );
          return i.createElement(L, Object.assign({}, e));
        }
      };
      M = Object(f.b)([I.a], M);
    },
    tzWY: function (e, t, n) {
      e.exports = {
        "duration-app-launch": "800ms",
        GamepadDialogContent: "gamepaddialog_GamepadDialogContent_3joNk",
        GamepadDialogContent_InnerWidth:
          "gamepaddialog_GamepadDialogContent_InnerWidth_3Xeyd",
        Field: "gamepaddialog_Field_S-_La",
        Button: "gamepaddialog_Button_1kn70",
        NoMinWidth: "gamepaddialog_NoMinWidth_21cih",
        ActiveAndUnfocused: "gamepaddialog_ActiveAndUnfocused_11tOP",
        StandaloneFieldSeparator:
          "gamepaddialog_StandaloneFieldSeparator_23kNb",
        StandardPadding: "gamepaddialog_StandardPadding_XRBFu",
        CompactPadding: "gamepaddialog_CompactPadding_1DIZQ",
        WithDescription: "gamepaddialog_WithDescription_3bMIS",
        WithBottomSeparatorStandard:
          "gamepaddialog_WithBottomSeparatorStandard_3s1Rk",
        WithBottomSeparatorThick:
          "gamepaddialog_WithBottomSeparatorThick_28hmy",
        HighlightOnFocus: "gamepaddialog_HighlightOnFocus_wE4V6",
        "ItemFocusAnim-darkerGrey":
          "gamepaddialog_ItemFocusAnim-darkerGrey_3ZRaK",
        "ItemFocusAnim-darkGrey": "gamepaddialog_ItemFocusAnim-darkGrey_2zfa-",
        WithBottomSeparator: "gamepaddialog_WithBottomSeparator_1lUZx",
        Disabled: "gamepaddialog_Disabled_1pmyx",
        Clickable: "gamepaddialog_Clickable_27UVY",
        FieldClickTarget: "gamepaddialog_FieldClickTarget_TN6vN",
        FieldChildren: "gamepaddialog_FieldChildren_14_HB",
        FieldLeadIcon: "gamepaddialog_FieldLeadIcon_OKYIj",
        FieldLabelRow: "gamepaddialog_FieldLabelRow_H9WOq",
        VerticalAlignCenter: "gamepaddialog_VerticalAlignCenter_3XNvA",
        InlineWrapShiftsChildrenBelow:
          "gamepaddialog_InlineWrapShiftsChildrenBelow_pHUb6",
        ExtraPaddingOnChildrenBelow:
          "gamepaddialog_ExtraPaddingOnChildrenBelow_5UO-_",
        ChildrenWidthFixed: "gamepaddialog_ChildrenWidthFixed_1ugIU",
        ChildrenWidthGrow: "gamepaddialog_ChildrenWidthGrow__Oeqv",
        WithFirstRow: "gamepaddialog_WithFirstRow_qFXi6",
        WithChildrenBelow: "gamepaddialog_WithChildrenBelow_1u5FT",
        FieldLabel: "gamepaddialog_FieldLabel_3b0U-",
        FieldLabelValue: "gamepaddialog_FieldLabelValue_lcD7J",
        FieldDescription: "gamepaddialog_FieldDescription_2OJfk",
        ModalPosition: "gamepaddialog_ModalPosition_30VHl",
        WithStandardPadding: "gamepaddialog_WithStandardPadding_1s9-e",
        slideInAnimation: "gamepaddialog_slideInAnimation_17KuO",
        BasicTextInput: "gamepaddialog_BasicTextInput_3GCBi",
        Toggle: "gamepaddialog_Toggle_24G4g",
        ToggleRail: "gamepaddialog_ToggleRail_2JtC3",
        On: "gamepaddialog_On_3ld7T",
        ToggleSwitch: "gamepaddialog_ToggleSwitch_3__OD",
        LabelFieldValue: "gamepaddialog_LabelFieldValue_5Mylh",
        DropDownControlButtonContents:
          "gamepaddialog_DropDownControlButtonContents_Lzved",
        Spacer: "gamepaddialog_Spacer_3nOZQ",
        ControlsListOuterPanel: "gamepaddialog_ControlsListOuterPanel_2Mvpu",
        StandardSpacing: "gamepaddialog_StandardSpacing_E-It0",
        ExtraSpacing: "gamepaddialog_ExtraSpacing_3YMmG",
        AlignRight: "gamepaddialog_AlignRight_4eBGA",
        AlignLeft: "gamepaddialog_AlignLeft_2N3q6",
        AlignCenter: "gamepaddialog_AlignCenter_3groU",
        ControlsListChild: "gamepaddialog_ControlsListChild_XvRso",
        "QuickAccess-Menu": "gamepaddialog_QuickAccess-Menu_1YEXn",
        BigButtons: "gamepaddialog_BigButtons_3XsWM",
        BottomButtons: "gamepaddialog_BottomButtons_3_Evp",
        "ItemFocusAnim-darkerGrey-nocolor":
          "gamepaddialog_ItemFocusAnim-darkerGrey-nocolor_20uOg",
        "ItemFocusAnim-grey": "gamepaddialog_ItemFocusAnim-grey_37Ohc",
        "ItemFocusAnimBorder-darkGrey":
          "gamepaddialog_ItemFocusAnimBorder-darkGrey_8BINs",
        "ItemFocusAnim-green": "gamepaddialog_ItemFocusAnim-green_wPuMl",
        focusAnimation: "gamepaddialog_focusAnimation_Plqwm",
        hoverAnimation: "gamepaddialog_hoverAnimation_22zeK",
      };
    },
    uWhj: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("mrSG");
      class o {
        GetObject(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            try {
              const t = yield this.GetString(e);
              return t ? JSON.parse(t) : null;
            } catch (e) {
              return null;
            }
          });
        }
        StoreObject(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.StoreString(e, JSON.stringify(t));
          });
        }
      }
    },
    vMUW: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return d;
        });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = n("nDaX"),
        a = n("iDgP");
      n("hane"), n("dcOZ");
      const l = new a.a("GamepadEvents").Debug;
      function c(e, t, n) {
        void 0 === n &&
          (n = [
            e.onButtonDown,
            e.onButtonUp,
            e.onOKButton,
            e.onCancelButton,
            e.onSecondaryButton,
            e.onOptionsButton,
            e.onMenuButton,
            e.onGamepadDirection,
            e.onGamepadFocus,
            e.onGamepadBlur,
          ]),
          s.a.useLayoutEffect(() => {
            let n = t.current;
            const i = [];
            return (
              n &&
                (e.onButtonDown && i.push(Object(r.f)(n, e.onButtonDown)),
                e.onButtonUp && i.push(Object(r.g)(n, e.onButtonUp)),
                e.onOKButton && i.push(Object(r.l)(n, e.onOKButton)),
                e.onCancelButton && i.push(Object(r.h)(n, e.onCancelButton)),
                e.onSecondaryButton &&
                  i.push(Object(r.n)(n, e.onSecondaryButton)),
                e.onOptionsButton && i.push(Object(r.m)(n, e.onOptionsButton)),
                e.onMenuButton && i.push(Object(r.k)(n, e.onMenuButton)),
                e.onGamepadDirection &&
                  i.push(Object(r.i)(n, e.onGamepadDirection)),
                e.onGamepadFocus && i.push(Object(r.j)(n, e.onGamepadFocus)),
                e.onGamepadBlur && i.push(Object(r.e)(n, e.onGamepadBlur))),
              () => i.forEach((e) => e())
            );
          }, n);
      }
      function u(e) {
        return e.stopPropagation(), !1;
      }
      function d(e, t, n) {
        const { onButtonDown: o } = e,
          r = Object(i.c)(e, ["onButtonDown"]),
          a = s.a.useCallback(
            (e) => {
              o && o(e),
                l(
                  "Gamepad Event fired:",
                  e.detail.button,
                  ", handled:",
                  null != o,
                  ", propagation stopped:",
                  e.cancelBubble
                ),
                e.cancelBubble || n.HandleButtonDownEventAsLogicalEvent(e);
            },
            [o, n]
          );
        c(r, t);
        c(
          {
            onButtonDown: a,
            onButtonUp: u,
            onOKButton: u,
            onCancelButton: u,
            onSecondaryButton: u,
            onOptionsButton: u,
            onMenuButton: u,
            onGamepadDirection: u,
            onGamepadFocus: u,
            onGamepadBlur: u,
          },
          t,
          [a]
        );
      }
    },
    vail: function (e, t, n) {
      e.exports = {
        HoverPosition: "hoverposition_HoverPosition_3XUAN",
        Ready: "hoverposition_Ready_qEo88",
        NoSpace: "hoverposition_NoSpace_2NTbb",
        EnablePointerEvents: "hoverposition_EnablePointerEvents_2MP9n",
        HoverAboveModal: "hoverposition_HoverAboveModal_1SHX2",
      };
    },
    "vbK/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n("mrSG"),
        o = n("q1tI");
      function s(e) {
        const { component: t, fallback: n, componentRef: s } = e,
          r = Object(i.c)(e, ["component", "fallback", "componentRef"]),
          [[a, l]] = o.useState([t, n]),
          c = null != a ? a : l;
        return o.createElement(
          c,
          Object.assign(Object.assign({}, r), { ref: s })
        );
      }
    },
    xHQ9: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return r;
        });
      var i = n("rSrx");
      class o {
        constructor(e, t) {
          (this.m_bActive = !1),
            (this.m_fnBoundAnimationFunc = void 0),
            (this.m_window = e),
            (this.m_options = Object.assign({ timing: "sine" }, t));
        }
        Start() {
          let e;
          switch (
            ((this.m_msStart = performance.now()),
            (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
            this.m_options.timing)
          ) {
            case "linear":
              e = function (e) {
                return e;
              };
              break;
            case "cubic-in-out":
              e = function (e) {
                return e < 0.5
                  ? 4 * e * e * e
                  : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
              };
              break;
            case "sine":
            default:
              e = function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              };
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
            } catch (e) {}
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
          let t = performance.now() - this.m_msStart;
          if (t >= this.m_options.msDuration) return void this.End();
          let n = t / this.m_options.msDuration;
          try {
            this.Update(e(n));
          } catch (e) {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class s extends o {
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class r extends o {
        constructor(e, t, n) {
          super("ownerDocument" in e ? i.n(e) : e, n),
            (this.m_props = {}),
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
      }
    },
    xoHR: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n("iRfV"),
        r = n("fsrB"),
        a = (n("GbHM"), n("G7ky")),
        l = n("GXif"),
        c = n("hCpY"),
        u = n("5JaR"),
        d = n.n(u);
      class h extends o.Component {
        TryHide() {
          this.m_fnHide && this.m_fnHide(), (this.m_fnHide = null);
        }
        componentWillUnmount() {
          this.TryHide();
        }
        render() {
          const {
              toolTipContent: e,
              nDelayShowMS: t,
              bDisabled: n,
              direction: i,
              nBodyAlignment: o,
              nBodyDistance: s,
              nAllowOffscreenPx: r,
              nMaxLateralMoveOnScreen: a,
              strTooltipClassname: l,
            } = this.props,
            c = {
              direction: i,
              nBodyAlignment: o,
              nBodyDistance: s,
              nAllowOffscreenPx: r,
              nMaxLateralMoveOnScreen: a,
              className: l,
            };
          let u = null;
          if (!n) {
            const n = (e) => (this.m_fnHide = e);
            u =
              "string" == typeof e
                ? p.ForText(e, n, t, c)
                : p.ForReactNode(e, n, t, c);
          }
          const d = Object.assign(Object.assign({}, this.props), {
            onMouseEnter: u ? u.ShowToolTip : null,
            onMouseLeave: this.TryHide,
          });
          return this.RenderHelper(d, u);
        }
      }
      (h.defaultProps = { nDelayShowMS: 300 }),
        Object(i.b)([c.b], h.prototype, "TryHide", null);
      class m extends h {
        RenderHelper(e, t) {
          const {
              toolTipContent: n,
              nDelayShowMS: s,
              bDisabled: a,
              direction: l,
              nBodyAlignment: c,
              nBodyDistance: u,
              nAllowOffscreenPx: d,
              nMaxLateralMoveOnScreen: h,
              strTooltipClassname: m,
              bNavStop: p,
            } = e,
            g = Object(i.c)(e, [
              "toolTipContent",
              "nDelayShowMS",
              "bDisabled",
              "direction",
              "nBodyAlignment",
              "nBodyDistance",
              "nAllowOffscreenPx",
              "nMaxLateralMoveOnScreen",
              "strTooltipClassname",
              "bNavStop",
            ]);
          return o.createElement(
            r.e,
            Object.assign(
              { noFocusRing: !0, focusable: null != p ? p : !!g.onClick },
              g
            ),
            e.children
          );
        }
      }
      o.Component;
      o.Component;
      o.Component;
      class p {
        constructor(e, t, n, i) {
          (this.m_rctContent = e),
            (this.m_nDelayShowMS = n),
            (this.m_hoverPositionProps = i),
            (this.m_strKey = "tooltip-" + Math.floor(1e8 * Math.random())),
            (this.m_fnOnShow = t);
        }
        static ForReactNode(e, t, n, i) {
          return new p(e, t, n, i);
        }
        static ForText(e, t, n, i) {
          return new p(
            o.createElement(
              "div",
              { className: d.a.TextToolTip },
              Object(l.f)(e)
            ),
            t,
            n,
            i
          );
        }
        ShowToolTip(e) {
          const t = e.currentTarget || e,
            n = { target: t };
          let i;
          if ("function" == typeof this.m_rctContent) {
            if (((i = this.m_rctContent()), !i)) return;
          } else i = this.m_rctContent;
          p.sm_embeddedElements.ShowElementDelayed(
            t.ownerDocument,
            this.m_nDelayShowMS,
            o.createElement(
              a.a,
              Object.assign({}, n, this.m_hoverPositionProps),
              i
            ),
            this.m_strKey
          ),
            this.m_fnOnShow && this.m_fnOnShow(() => this.HideToolTip(t));
        }
        HideToolTip(e) {
          const t = e.currentTarget || e;
          p.sm_embeddedElements.HideElement(t.ownerDocument, this.m_strKey);
        }
      }
      (p.sm_embeddedElements = new s.a("ignored-id-tooltip-map")),
        Object(i.b)([c.b], p.prototype, "ShowToolTip", null),
        Object(i.b)([c.b], p.prototype, "HideToolTip", null);
    },
    yASz: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n("mrSG");
      function o(e) {
        const {
          onEnterKeyPress: t,
          strEnterKeyLabel: n,
          onKeyboardNavOut: o,
          onKeyboardShow: s,
          onKeyboardFullyVisible: r,
          onTextEntered: a,
          BIsElementValidForInput: l,
        } = e;
        return {
          virtualKeyboardProps: {
            onEnterKeyPress: t,
            strEnterKeyLabel: n,
            onKeyboardNavOut: o,
            onKeyboardShow: s,
            onKeyboardFullyVisible: r,
            onTextEntered: a,
            BIsElementValidForInput: l,
          },
          props: Object(i.c)(e, [
            "onEnterKeyPress",
            "strEnterKeyLabel",
            "onKeyboardNavOut",
            "onKeyboardShow",
            "onKeyboardFullyVisible",
            "onTextEntered",
            "BIsElementValidForInput",
          ]),
        };
      }
    },
  },
]);

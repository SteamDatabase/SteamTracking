/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [616],
  {
    345: (e, t, n) => {
      n.d(t, { InitializeGamepadNavigation: () => B });
      var o = n(669),
        a = n.n(o),
        s = n(439),
        i = n(189),
        r = n(28),
        c = n(569),
        l = n(342),
        u = n(780),
        d = n(135),
        g = n(520),
        b = n(26),
        h = n(675),
        m = n(382),
        _ = n.n(m);
      function p(e) {
        let t = 0;
        e.children().each(function () {
          const e = a()(this),
            n = e.css("zIndex");
          "auto" === n
            ? e.css("zIndex", 0)
            : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
        });
        const n = a()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(t || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let o,
          s,
          i = 0,
          r = 0,
          c = 0,
          l = 0;
        e.prepend(n);
        const u = (e) => {
            const t = e.GetBoundingRect(),
              o = n[0].getBoundingClientRect();
            return {
              left: t.x - o.x - 0,
              top: t.y - o.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          d = (e, t) => {
            (i = t.left),
              (r = t.top),
              (c = t.height),
              (l = t.width),
              e.css({ left: i, top: r, height: c, width: l });
          },
          g = (e) => {
            if ((o && (o(), (o = void 0)), e && e.BWantsFocusRing())) {
              let t = a()("<div/>", {
                  "data-focusring": !0,
                  style: "position: absolute; pointer-events: none; ",
                  class: _().FocusRing,
                }),
                g = u(e);
              d(t, g),
                n.append(t),
                (s = () =>
                  ((e, t) => {
                    if (e && e.BWantsFocusRing()) {
                      let n = u(e);
                      (n.left == i &&
                        n.top == r &&
                        n.height == c &&
                        n.width == l) ||
                        d(t, n);
                    }
                  })(e, t));
              let b = window.setInterval(s, 200),
                h = e.Tree.OnActiveStateChangedCallbacks.Register((e) => {
                  e ? t.show() : t.hide();
                });
              o = () => {
                window.clearInterval(b),
                  t.remove(),
                  (s = void 0),
                  h.Unregister();
              };
            }
          };
        return {
          OnBlur: () => g(null),
          OnFocus: (e, t) => g(t),
          OnFocusChange: (e, t, n) => g(n),
          OnForceMeasureFocusRing: () => s && s(),
        };
      }
      var f = n(869),
        S = n(660),
        E = n(815);
      function w(e) {
        return e ? Function("event", e) : null;
      }
      function I() {
        return !0;
      }
      function L(e) {
        return "BlockMovement" == e
          ? I
          : "RepeatNavigationBoundary" == e
            ? E.W7
            : e
              ? Function("detail", e)
              : null;
      }
      function N(e) {
        this.click(), e.stopPropagation();
      }
      function v(e) {
        a()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function R(e, t) {
        t ? a()(e).addClass("gpfocus") : a()(e).removeClass("gpfocus");
      }
      function C(e) {
        const t = e.currentTarget;
        if (e.defaultPrevented || !S.kD(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          o = "smooth",
          a = t.ownerDocument,
          s = a.defaultView;
        switch (e.detail.button) {
          case f.pR.DIR_UP:
            if (s.scrollY > 3)
              return (0, b.BA)(s, { top: -s.innerHeight / n, behavior: o }), !0;
            break;
          case f.pR.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < a.body.clientWidth - 3)
              return (0, b.BA)(s, { left: s.innerWidth / n, behavior: o }), !0;
            break;
          case f.pR.DIR_DOWN:
            if (s.scrollY + s.innerHeight < a.body.clientHeight - 3)
              return (0, b.BA)(s, { top: s.innerHeight / n, behavior: o }), !0;
            break;
          case f.pR.DIR_LEFT:
            if (s.scrollX > 3)
              return (0, b.BA)(s, { left: s.innerWidth / n, behavior: o }), !0;
        }
        return !1;
      }
      var A = n(267);
      const D = new (n(970).wd)("FocusNavigation").Debug;
      var T;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(T || (T = {}));
      const O = new h.r();
      let y,
        k = !1,
        M = null;
      function B(e) {
        k ||
          ((M = new l.t()),
          (y = new i.T(M)),
          y.RegisterForFocusChanged(M.GetDefaultContext()),
          O.Init(window),
          y.BIsGamepadInputExternallyControlled() || M.RegisterInputSource(e),
          (y.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            M.RegisterInputSource(new r.Q(window)),
          (function (e) {
            a()("html").addClass("gpnav_active");
            const t = a()("body"),
              n = e.GetDefaultContext(),
              o = e.NewGamepadNavigationTree(n, "legacy", void 0);
            a()(window).on("touchstart mousedown focus", () =>
              n.OnActivate(window),
            ),
              a()(window).on("blur", () => n.OnDeactivate(window));
            const i = p(t);
            (o.Root.m_FocusRing = i),
              o.Root.SetProperties({
                scrollIntoViewType: d.Yo.NoTransformSparseContent,
              }),
              o.SetIsEnabled(!0),
              o.OnActiveStateChangedCallbacks.Register((e) => {
                const t = o.GetLastFocusedNode();
                t?.Element && R(t.Element, e);
              }),
              Object.assign(window, {
                legacyWebFocusNavController: M,
                __nav_tree_root: o,
                __virtual_keyboard_client: O,
              }),
              P.set(document.body, o.Root),
              F(document.body, o.Root),
              j(void 0, !0),
              e.RegisterGamepadNavigationTree(o, window),
              n.OnMount(window),
              window.document.hasFocus() && n.OnActivate(window);
            a()(document.body).on("vgp_onbuttondown", function (e) {
              o.OnRootButtonDown(e.originalEvent);
            }),
              (0, s.u8)(document.body, C);
            new MutationObserver(U).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (0, b.y1)(!0),
              (0, A.N)("legacy_web_root", o.Root),
              Object.assign(window, q),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
          })(M)),
          (k = !0);
      }
      function U(e) {
        for (const t of e) {
          const e = [],
            n = [];
          (0, S.Mr)(
            t,
            (t) => e.push(t),
            (e) => n.push(e),
          ),
            e.length && j(a()(e)),
            n.length && H(a()(n));
        }
      }
      const P = new WeakMap(),
        V = new WeakMap();
      let G = [];
      function F(e, t) {
        if (t instanceof d.Bp) {
          const n = t.GetDepth();
          G[n] || (G[n] = []), G[n].push([e, t]);
        }
        P.set(e, t);
      }
      function W(e, t) {
        const n = V.has(e) ? V.get(e) : [];
        n.push(t), V.set(e, n);
      }
      function x(e) {
        return "jquery" in e ? P.get(e[0]) || T.Unknown : P.get(e) || T.Unknown;
      }
      function K(e) {
        return "jquery" in e ? P.has(e[0]) : P.has(e);
      }
      function H(e) {
        e.find("*")
          .addBack()
          .each(function () {
            V.get(this)?.forEach((e) => e()),
              P.delete(this),
              V.delete(this),
              a()(this).attr("data-nav-modal") && J(this);
          });
      }
      function j(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        a()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            K((e = this)) || X(e);
          }),
          (function () {
            for (let e = G.length - 1; e >= 0; e--)
              if (G[e])
                for (let [t, n] of G[e]) {
                  W(t, n.Tree.RegisterNavigationItem(n, t));
                  const e = a()(t).data("navTreeModal");
                  e &&
                    (a()(t).data(
                      "unregisterNavTree",
                      M.RegisterGamepadNavigationTree(e, window),
                    ),
                    e.Activate(!0));
                }
            G = [];
          })();
      }
      function Y(e) {
        const t = a()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          !(!t.is(":visible") || "hidden" == t.css("visibility")) &&
          (0 != t.outerWidth() ||
            0 != t.outerHeight() ||
            "hidden" !== t.css("overflow"))
        );
      }
      function X(e) {
        const t = a()(e),
          n = $(e);
        if (n instanceof c.O || n == T.InReactTree)
          return F(e, T.InReactTree), T.InReactTree;
        const o = n.Tree;
        let i,
          r = t.data("panel") || {},
          l = Y;
        if (
          (t.attr("data-nav-modal")
            ? (i = (function (e, t) {
                const n = M.NewGamepadNavigationTree(
                    M.GetDefaultContext(),
                    "modal_dialog",
                    e,
                  ),
                  o = p(a()(t));
                return (
                  (n.Root.m_FocusRing = o),
                  n.Root.SetProperties({ focusableIfEmpty: !0 }),
                  n.SetModal(!0),
                  a()(t).data("navTreeModal", n),
                  F(t, n.Root),
                  n.Root
                );
              })(o, e))
            : t.data("reactNavRoot")
              ? ((i = new c.O(t.data("reactNavRoot"), n)), (l = void 0))
              : (i = o.CreateNode(n, n.m_FocusRing)),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (r.focusable = r.focusable ?? !0),
            (r.clickOnActivate = r.clickOnActivate ?? !0);
        else if ("INPUT" == e.tagName)
          switch (((r.focusable = r.focusable ?? !0), e.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              r.clickOnActivate = r.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              r.enableVirtualKeyboard = r.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((r.focusable = r.focusable ?? !0),
            (r.enableVirtualKeyboard = r.enableVirtualKeyboard ?? !0));
        const u = r["flow-children"];
        delete r["flow-children"];
        let {
            clickOnActivate: b,
            maintainX: h,
            maintainY: m,
            enableVirtualKeyboard: _,
            preferredChild: f,
            onOKActionDescription: S,
            onCancelActionDescription: E,
            onSecondaryActionDescription: I,
            onOptionsActionDescription: C,
            onMenuActionDescription: A,
            actionDescriptionMap: D,
            onOKButton: y,
            onCancelButton: k,
            onSecondaryButton: B,
            onOptionsButton: U,
            onMenuButton: P,
            onMoveUp: V,
            onMoveRight: G,
            onMoveDown: x,
            onMoveLeft: K,
            onGamepadDirection: H,
            bFocusRingRoot: j,
            type: X,
            ...J
          } = r,
          q = w(y),
          z = w(k),
          Q = w(B),
          Z = w(U),
          ee = w(P),
          te = w(H);
        X || (X = "Panel"),
          "PanelGroup" == X &&
            ({ onOKButtonHandler: q, onCancelButtonHandler: z } = (function (
              e,
              t,
            ) {
              const {
                onOKButtonHandler: n,
                onCancelButtonHandler: o,
                navNode: a,
              } = e;
              return (
                (t.focusable = !1 !== t.focusable),
                {
                  onOKButtonHandler: (e) =>
                    !(
                      !a.BHasFocus() ||
                      !a.BChildTakeFocus(s.D$.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !a.BFocusWithin() ||
                      a.BHasFocus() ||
                      !a.BTakeFocus(s.D$.GAMEPAD, e.detail.button)
                    ) ||
                    (!!o && o(e)),
                }
              );
            })(
              { onOKButtonHandler: q, onCancelButtonHandler: z, navNode: i },
              J,
            )),
          q && W(t[0], (0, s.VX)(t[0], q)),
          z && W(t[0], (0, s.hr)(t[0], z)),
          Q && I && W(t[0], (0, s.f)(t[0], Q)),
          Z && C && W(t[0], (0, s.Ro)(t[0], Z)),
          ee && A && W(t[0], (0, s.cR)(t[0], ee)),
          te && W(t[0], (0, s.u8)(t[0], te));
        const ne = (function (e, t, n, o) {
            const a = {};
            return (
              e && (a.onMoveUp = L(e)),
              t && (a.onMoveRight = L(t)),
              n && (a.onMoveDown = L(n)),
              o && (a.onMoveLeft = L(o)),
              a
            );
          })(V, G, x, K),
          oe = u ? (0, g.O)(u) : d.xj.NONE;
        oe != d.xj.NONE && (J.layout = oe),
          h
            ? (J.navEntryPreferPosition = d.iU.MAINTAIN_X)
            : m
              ? (J.navEntryPreferPosition = d.iU.MAINTAIN_Y)
              : f && (J.navEntryPreferPosition = d.iU.PREFERRED_CHILD),
          b &&
            (!1 !== J.focusable && (J.focusable = !0),
            t.on("vgp_onok", "firstChild" === b ? v : N),
            t.attr("role") ||
              ("A" !== t.prop("tagName") && t.attr("role", "button")),
            W(e, () => {
              t.off("vgp_onok");
            })),
          _ &&
            (t.on("vgp_onok.vkbindings", () => O.ShowVirtualKeyboard()),
            t.on("click.vkbindings", () => O.ShowVirtualKeyboard()),
            t.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                O.HideVirtualKeyboard();
            }),
            W(e, () => {
              t.off(".vkbindings");
            })),
          J.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          J.focusable && i.SubscribableHasFocus.Subscribe((t) => R(e, t)),
          j &&
            ((i.m_FocusRing = p(t)),
            "static" == t.css("position") && t.css("position", "relative"));
        const ae = {
          fnCanTakeFocus: l,
          actionDescriptionMap: (0, s.Y3)({
            onOKActionDescription: S,
            onCancelActionDescription: E,
            onSecondaryActionDescription: I,
            onOptionsActionDescription: C,
            onMenuActionDescription: A,
            actionDescriptionMap: D,
          }),
          ...ne,
          ...J,
        };
        return i.SetProperties(ae), F(e, i), i;
      }
      function $(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let n = x(t);
        if (n == T.Unknown)
          n = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if ((0, u.ko)(e) != d.xj.COLUMN) t = !0;
                else {
                  const n = (0, u.ko)(e.parentElement);
                  (n != d.xj.ROW && n != d.xj.ROW_REVERSE) || (t = !0);
                }
            }
            let n = T.NotNeeded;
            return t ? (n = X(e)) : F(e, n), n;
          })(t);
        else if (n == T.InReactTree) return n;
        return n instanceof d.Bp ? n : $(t);
      }
      function J(e) {
        const t = a()(e).data("unregisterNavTree");
        console.assert(t, "missing unregister binding"),
          t(),
          a()(e).removeAttr("data-nav-modal"),
          a()(e).removeData("unregisterNavTree"),
          a()(e).removeClass("navTreeModal");
      }
      const q = {
        InstrumentFocusElements: j,
        ForceUpdateFocusElements: function (e) {
          H(a()(e)), j(a()(e));
        },
        GPNavFocusChild: function (e) {
          let t = x(e[0]);
          return (
            t instanceof d.Bp || (t = $(e[0])),
            t instanceof d.Bp && t.BTakeFocus(s.D$.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          D("Showing element as modal", e);
          const t = a()(e),
            n = K(t);
          return (
            n &&
              (D(
                "Element already in DOM tree, forcibly re-instrumenting elements so they are parented to modal",
              ),
              H(t)),
            t.attr("data-nav-modal", "true"),
            n && j(t),
            () => J(e)
          );
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? O.ShowVirtualKeyboard() : O.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = x(e);
          n instanceof d.Bp &&
            n.SetProperties({
              ...n.m_Properties,
              actionDescriptionMap: (0, s.Y3)(t),
            });
        },
      };
    },
    767: (e, t, n) => {
      n.d(t, { A7: () => i, Vp: () => r, n4: () => c });
      var o = n(629),
        a = n(942),
        s = n(961);
      class i {
        PostMessage(e) {}
        RegisterForMessage(e) {}
      }
      class r {
        m_fnCallback = void 0;
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(s.T, t);
        }
        OnMessage(e, t) {
          if (e == s.T) {
            const e = JSON.parse(t);
            this.m_fnCallback(e);
          } else if ("Checkout" == e) {
            let e = JSON.parse(t);
            if ("paypal_success" == e.action)
              try {
                window.OnPayPalSuccess(e.transid);
              } catch (e) {}
            else if ("paypal_cancel" == e.action)
              try {
                window.OnPayPalCancel(e.transid);
              } catch (e) {}
          } else if ("PinnedView" == e) {
            let e = JSON.parse(t);
            try {
              window.HandleOverlayWindowPinnedView(
                1 == e.bPinned,
                1 == e.bShowPinnedView,
              );
            } catch (e) {}
          }
        }
      }
      (0, o.Cg)([a.o], r.prototype, "OnMessage", null);
      class c {
        m_postWindow;
        m_fnCallback = void 0;
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: s.T, args: t }, "*");
        }
        OnMessage(e) {
          let t = e?.data;
          if (t && t.gamepadMessage == s.T && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, o.Cg)([a.o], c.prototype, "OnMessage", null);
    },
    806: (e, t, n) => {
      n.d(t, { xr: () => o });
      const o = { x: "y", y: "x" };
    },
    201: (e, t, n) => {
      n.d(t, { Jc: () => u, LU: () => b, YX: () => g, e0: () => h });
      var o = n(629),
        a = n(359),
        s = n(942),
        i = n(397);
      class r {
        SyncStore(e) {
          return this.Subscribe(e).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, o.Cg)([s.o], r.prototype, "SyncStore", null),
        (0, o.Cg)([s.o], r.prototype, "GetValue", null);
      class c extends r {}
      class l extends c {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(e, t) {
          super(),
            (this.m_callbacks = new i.l()),
            (this.m_currentValue = e),
            (this.m_fnEquals = t);
        }
        Set(e) {
          if (this.m_fnEquals) {
            if (this.m_fnEquals(this.m_currentValue, e)) return !1;
          } else if (this.m_currentValue === e) return !1;
          return (this.m_currentValue = e), this.m_callbacks.Dispatch(e), !0;
        }
        get Value() {
          return this.m_currentValue;
        }
        Subscribe(e) {
          return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
        }
        get SubscriberCount() {
          return this.m_callbacks.CountRegistered();
        }
      }
      function u(e, t) {
        return new l(e, t);
      }
      class d extends r {
        m_fnMap;
        m_originalSubscribableValue;
        m_mappedSubscribableValue;
        m_bMappedValueStale = !1;
        constructor(e, t, n) {
          super(),
            (this.m_originalSubscribableValue = e),
            (this.m_mappedSubscribableValue = new l(t(e.Value), n)),
            (this.m_fnMap = t),
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
        Subscribe(e) {
          return this.m_mappedSubscribableValue.Subscribe(e);
        }
        UpdateMappedValue() {
          this.m_mappedSubscribableValue.Set(
            this.m_fnMap(this.m_originalSubscribableValue.Value),
          ),
            (this.m_bMappedValueStale = !1);
        }
      }
      function g(e, t, n) {
        return new d(e, t, n);
      }
      class b {
        m_schTimer;
        m_fnCallback;
        m_fnOnCancel;
        Schedule(e, t) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = t),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
        }
        AsyncSchedule(e, t) {
          return new Promise((n, o) => {
            this.Schedule(e, () => {
              t(), n();
            }),
              (this.m_fnOnCancel = o);
          });
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          if (this.m_schTimer) {
            const e = this.m_fnOnCancel;
            clearTimeout(this.m_schTimer), this.Reset(), e && e();
          }
        }
        Reset() {
          (this.m_schTimer = void 0),
            (this.m_fnCallback = void 0),
            (this.m_fnOnCancel = void 0);
        }
        ScheduledInternal() {
          const e = this.m_fnCallback;
          this.Reset(), e?.();
        }
      }
      (0, o.Cg)([s.o], b.prototype, "ScheduledInternal", null);
      class h {
        m_vecCallbacks = [];
        Push(e) {
          this.m_vecCallbacks.push(e);
        }
        PushArrayRemove(e, t) {
          this.m_vecCallbacks.push(() => a.x9(e, t));
        }
        Unregister() {
          for (const e of this.m_vecCallbacks) e();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, o.Cg)([s.o], h.prototype, "Unregister", null);
    },
    660: (e, t, n) => {
      function o(e) {
        return null != e && void 0 !== e.focus;
      }
      function a(e, t) {
        let n = 0,
          o = 0;
        return (
          t.right < e.left
            ? (n = e.left - t.right)
            : t.left > e.right && (n = t.left - e.right),
          t.bottom < e.top
            ? (o = e.top - t.bottom)
            : t.top > e.bottom && (o = t.top - e.bottom),
          Math.sqrt(n * n + o * o)
        );
      }
      function s(e) {
        return "INPUT" === e.nodeName;
      }
      function i(e, t) {
        switch (e) {
          case "TEXTAREA":
            return !0;
          case "INPUT":
            switch (t) {
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
      n.d(t, {
        IB: () => s,
        Mr: () => r,
        TV: () => i,
        bZ: () => a,
        kD: () => o,
      });
      function r(e, t, n) {
        if ("childList" === e.type) {
          for (let n = 0; n < e.addedNodes.length; n++) {
            const o = e.addedNodes[n];
            if (o.nodeType === Node.ELEMENT_NODE) {
              const e = o;
              e.parentElement && t(e);
            }
          }
          for (let t = 0; t < e.removedNodes.length; t++) {
            const o = e.removedNodes[t];
            o.nodeType === Node.ELEMENT_NODE && n?.(o);
          }
        }
      }
    },
    970: (e, t, n) => {
      n.d(t, { wd: () => l });
      var o = n(629),
        a = n(942);
      class s {
        async GetObject(e, t) {
          try {
            const n = await this.GetString(e);
            return n ? JSON.parse(n, t) : null;
          } catch {
            return null;
          }
        }
        async StoreObject(e, t) {
          return this.StoreString(e, JSON.stringify(t));
        }
      }
      class i extends s {
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
      var r,
        c = n(397);
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(r || (r = {}));
      class l {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            u.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(r.Debug, ...e);
        }
        Info(...e) {
          this.Log(r.Info, ...e);
        }
        Warning(...e) {
          this.Log(r.Warning, ...e);
        }
        Error(...e) {
          this.Log(r.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(r.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return u.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          const n = u.Get().IsDebugLogEnabled(this.m_sName);
          if (e == r.Debug && !n) return;
          let o = this.m_sName;
          const a = this.m_fnIdGenerator?.() ?? null;
          null != a && (o += " (" + a + ")");
          d(e, n, u.Get().IncludeBacktraceInLog, o, this.m_sName, ...t);
        }
      }
      (0, o.Cg)([a.o], l.prototype, "Debug", null),
        (0, o.Cg)([a.o], l.prototype, "Info", null),
        (0, o.Cg)([a.o], l.prototype, "Warning", null),
        (0, o.Cg)([a.o], l.prototype, "Error", null),
        (0, o.Cg)([a.o], l.prototype, "Assert", null);
      class u {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        static s_Singleton = null;
        m_Storage = null;
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_SettingsChangedCallback = new c.l();
        m_bLoading = !1;
        constructor() {
          (this.m_Storage = new i()), this.LoadSettings();
        }
        LogAsLogManager(...e) {
          d(
            r.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        async LoadSettings() {
          (this.m_bLoading = !0),
            (this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
              u.k_IncludeBacktraceInLog_StorageKey,
            )));
          const e = await this.m_Storage?.GetObject(
            u.k_EnabledLogNames_StorageKey,
          );
          if (Array.isArray(e)) {
            this.m_setEnabledDebugLogs = new Set(e);
            for (const t of e) this.m_setKnownDebugLogs.add(t);
            this.LogAsLogManager(
              "Loaded debug enabled log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
          } else 0;
          (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
        }
        async SaveSettings() {
          await this.m_Storage?.StoreObject(
            u.k_EnabledLogNames_StorageKey,
            Array.from(this.m_setEnabledDebugLogs),
          ),
            await this.m_Storage?.StoreObject(
              u.k_IncludeBacktraceInLog_StorageKey,
              this.m_bIncludeBacktraceInLog,
            ),
            this.LogAsLogManager(
              "Saved enabled debug log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        PrintEnabledLogs() {
          this.LogAsLogManager(
            "Will print log messages for:",
            Array.from(this.m_setEnabledDebugLogs),
          );
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
      }
      function d(e, t, n, o, a, ...s) {
        const i = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = e.charCodeAt(n) + ((t << 5) - t);
            return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
          })(a).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))),
            ),
          ),
          c = (299 * (l = i)[0] + 587 * l[1] + 114 * l[2]) / 1e3 >= 128;
        var l;
        let u = o;
        n &&
          (u =
            (function (e) {
              switch (e) {
                case r.Debug:
                  return String.fromCodePoint(128027);
                case r.Info:
                  return String.fromCodePoint(8505);
                case r.Warning:
                  return String.fromCodePoint(9888);
                case r.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            u);
        const d =
            s.length >= 1 && "string" == typeof s[0] && s[0].includes("%c"),
          g = d && s.shift();
        let b;
        if (
          ((b = t
            ? [
                `%c${u}%c:${d ? " %c" + g : ""}`,
                `color: ${c ? "black" : "white"}; background: rgb(${i.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(d ? [""] : []),
                ...s,
              ]
            : s),
          n)
        )
          console.groupCollapsed(...b),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case r.Debug:
            case r.Info:
              console.log(...b);
              break;
            case r.Warning:
              console.warn(...b);
              break;
            case r.Error:
              console.clogerror
                ? console.clogerror(3, ...b)
                : console.error(...b);
          }
      }
      const g = () => [...u.Get().LogNames].sort(),
        b = (e, t) => {
          u.Get().IsLogName(e)
            ? u.Get().SetDebugLogEnabled(e, t)
            : console.warn(`No log named "${e}", available logs:`, g());
        };
      (window.DebugLogEnable = (...e) => e.forEach((e) => b(e, !0))),
        (window.DebugLogDisable = (...e) => e.forEach((e) => b(e, !1))),
        (window.DebugLogEnableAll = () => u.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => u.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          u.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          u.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = g),
        (window.DebugLogEnabled = (...e) => {
          e.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${e.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            u.Get().PrintEnabledLogs();
        }),
        (window.EnableSteamConsole = (e = !0) =>
          u.Get().SetDebugLogEnabled("SteamClient", e));
    },
    173: (e, t, n) => {
      function o(e, t) {
        return null == e || null == t
          ? e === t
          : "object" == typeof e &&
              "object" == typeof t &&
              Object.keys(e).length === Object.keys(t).length &&
              Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]);
      }
      n.d(t, { e: () => o });
    },
    668: (e, t, n) => {
      n.d(t, { TS: () => c });
      var o = n(242);
      function a() {
        return !!window.document;
      }
      let s;
      function i() {
        if (!a()) return s || (s = r()), s;
        let e = (function (e) {
          if (!a() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = r()), e;
      }
      function r() {
        const e = (function () {
          let e = "";
          for (let t = 0; t < 24; t++) e += (0, o.Tg)(0, 35).toString(36);
          return e;
        })();
        return (
          (function (e, t, n, o) {
            if (!a()) return;
            o || (o = "/");
            let s = "";
            if (void 0 !== n && n) {
              const e = new Date();
              e.setTime(e.getTime() + 864e5 * n),
                (s = "; expires=" + e.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              s +
              ";path=" +
              o;
          })("sessionid", e, 0),
          e
        );
      }
      new Set();
      const c = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        CLAN_CDN_ASSET_URL: "",
        COMMUNITY_ASSETS_BASE_URL: "",
        VIDEO_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        BASE_URL_SHARED_CDN: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_CHECKOUT_BASE_URL: "",
        LOGIN_BASE_URL: "",
        SUPPORT_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        STORE_ITEM_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_MOBILE_WEBVIEW: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        TESLA: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        WEBSITE_ID: "Unknown",
        get SESSIONID() {
          return i();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_STEAMUI: !1,
        IN_GAMEPADUI: !1,
        IN_STEAMUI_SHARED_CONTEXT: !1,
        FORCED_DISPLAY_MODE: void 0,
        ON_DECK: !1,
        ON_FRAME: !1,
        ON_STEAMOS: !1,
        IN_GAMESCOPE: !1,
        IN_LOGIN: !1,
        IN_LOGIN_REFRESH: !1,
        USE_LONGEST_LOC_STRING: !1,
        SILENT_STARTUP: !1,
        CLIENT_SESSION: 0,
      };
    },
  },
]);

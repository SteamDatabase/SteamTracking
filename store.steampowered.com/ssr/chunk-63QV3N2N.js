import { a as p2 } from "./chunk-SAL6GHH2.js";
import { e as I1 } from "./chunk-W7GN5EV7.js";
import { a as y } from "./chunk-AYOJQSU6.js";
import {
  a as X,
  b as P1,
  c as Q,
  f as E1,
  g as D1,
  i as q,
  u as O,
} from "./chunk-EGRUGE2G.js";
import { a as L2 } from "./chunk-GNUG7ANZ.js";
import { a as c1 } from "./chunk-OSSZHGNC.js";
import { F as A1, l as F } from "./chunk-Y37SQC3A.js";
import { a as G1, q as P, s as T1, u as W1 } from "./chunk-52WBXZPR.js";
import { c as N1 } from "./chunk-3TBPIIE3.js";
import { h as K, j as y1, o as B1, s as L } from "./chunk-ID2H2UTY.js";
import { j as A, p as I } from "./chunk-3UC64NIE.js";
import { a as x } from "./chunk-EWNBABYZ.js";
import { e as g, g as u, h as R1 } from "./chunk-5WT7BLXL.js";
var F1 = g(x());
if (!F1.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!q)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var h1 = g(L2());
function g2(C) {
  C();
}
function t1(C) {
  C || (C = g2), E1({ reactionScheduler: C });
}
var u1 = g(x());
function O1(C) {
  return D1(C);
}
var k2 = !1;
function w() {
  return k2;
}
var M2 = 1e4,
  f2 = 1e4,
  V2 = (function () {
    function C(t) {
      var e = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (r) {
            r === void 0 && (r = M2),
              clearTimeout(e.sweepTimeout),
              (e.sweepTimeout = void 0);
            var o = Date.now();
            e.registrations.forEach(function (n, i) {
              o - n.registeredAt >= r &&
                (e.finalize(n.value), e.registrations.delete(i));
            }),
              e.registrations.size > 0 && e.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            e.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(C.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, e, r) {
          this.registrations.set(r, { value: e, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(C.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(C.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, f2));
        },
      }),
      C
    );
  })();
var U1 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : V2;
var B = new U1(function (C) {
  var t;
  (t = C.reaction) === null || t === void 0 || t.dispose(), (C.reaction = null);
});
var J1 = g(p2()),
  H2 = function () {};
function Y1(C) {
  C.reaction = new Q("observer".concat(C.name), function () {
    var t;
    (C.stateVersion = Symbol()),
      (t = C.onStoreChange) === null || t === void 0 || t.call(C);
  });
}
function U(C, t) {
  if ((t === void 0 && (t = "observed"), w())) return C();
  var e = u1.default.useRef(null);
  if (!e.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (l) {
        return (
          B.unregister(r),
          (r.onStoreChange = l),
          r.reaction || (Y1(r), (r.stateVersion = Symbol())),
          function () {
            var h;
            (r.onStoreChange = null),
              (h = r.reaction) === null || h === void 0 || h.dispose(),
              (r.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    e.current = r;
  }
  var o = e.current;
  o.reaction || (Y1(o), B.register(e, o, o)),
    u1.default.useDebugValue(o.reaction, O1),
    (0, J1.useSyncExternalStore)(o.subscribe, o.getSnapshot, H2);
  var n, i;
  if (
    (o.reaction.track(function () {
      try {
        n = C();
      } catch (l) {
        i = l;
      }
    }),
    i)
  )
    throw i;
  return n;
}
var G = g(x());
var z1 = typeof Symbol == "function" && Symbol.for,
  j1 = z1
    ? Symbol.for("react.forward_ref")
    : typeof G.forwardRef == "function" &&
      (0, G.forwardRef)(function (C) {
        return null;
      }).$$typeof,
  X1 = z1
    ? Symbol.for("react.memo")
    : typeof G.memo == "function" &&
      (0, G.memo)(function (C) {
        return null;
      }).$$typeof;
function d1(C, t) {
  var e;
  if (X1 && C.$$typeof === X1)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (w()) return C;
  var r = (e = t?.forwardRef) !== null && e !== void 0 ? e : !1,
    o = C,
    n = C.displayName || C.name;
  if (
    j1 &&
    C.$$typeof === j1 &&
    ((r = !0), (o = C.render), typeof o != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var i = function (l, h) {
    return U(function () {
      return o(l, h);
    }, n);
  };
  return (
    (i.displayName = C.displayName),
    Object.defineProperty(i, "name", {
      value: C.name,
      writable: !0,
      configurable: !0,
    }),
    C.contextTypes && (i.contextTypes = C.contextTypes),
    r && (i = (0, G.forwardRef)(i)),
    (i = (0, G.memo)(i)),
    m2(C, i),
    i
  );
}
var _2 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function m2(C, t) {
  Object.keys(C).forEach(function (e) {
    _2[e] || Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(C, e));
  });
}
function L1(C) {
  var t = C.children,
    e = C.render,
    r = t || e;
  return typeof r != "function" ? null : U(r);
}
L1.displayName = "Observer";
var v2 = g(x());
var Z2 = g(x());
var w2 = g(x());
var p1;
t1(h1.unstable_batchedUpdates);
var b3 =
  (p1 = B.finalizeAllImmediately) !== null && p1 !== void 0
    ? p1
    : function () {};
function b2(C, t) {
  return t === void 0 && (t = "observed"), U(C, t);
}
var m = g(x());
function R2(C, t) {
  if (Q1(C, t)) return !0;
  if (typeof C != "object" || C === null || typeof t != "object" || t === null)
    return !1;
  var e = Object.keys(C),
    r = Object.keys(t);
  if (e.length !== r.length) return !1;
  for (var o = 0; o < e.length; o++)
    if (!Object.hasOwnProperty.call(t, e[o]) || !Q1(C[e[o]], t[e[o]]))
      return !1;
  return !0;
}
function Q1(C, t) {
  return C === t ? C !== 0 || 1 / C === 1 / t : C !== C && t !== t;
}
var q1 = Symbol("patchMixins"),
  n2 = Symbol("patchedDefinition");
function y2(C, t) {
  var e = (C[q1] = C[q1] || {}),
    r = (e[t] = e[t] || {});
  return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
}
function t2(C, t) {
  for (
    var e = this, r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), n = 2;
    n < r;
    n++
  )
    o[n - 2] = arguments[n];
  t.locks++;
  try {
    var i;
    return C != null && (i = C.apply(this, o)), i;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (l) {
          l.apply(e, o);
        });
  }
}
function e2(C, t) {
  var e = function () {
    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++)
      n[i] = arguments[i];
    t2.call.apply(t2, [this, C, t].concat(n));
  };
  return e;
}
function B2(C, t, e) {
  var r = y2(C, t);
  r.methods.indexOf(e) < 0 && r.methods.push(e);
  var o = Object.getOwnPropertyDescriptor(C, t);
  if (!(o && o[n2])) {
    var n = C[t],
      i = l2(C, t, o ? o.enumerable : void 0, r, n);
    Object.defineProperty(C, t, i);
  }
}
function l2(C, t, e, r, o) {
  var n,
    i = e2(o, r);
  return (
    (n = {}),
    (n[n2] = !0),
    (n.get = function () {
      return i;
    }),
    (n.set = function (h) {
      if (this === C) i = e2(h, r);
      else {
        var d = l2(this, t, e, r, h);
        Object.defineProperty(this, t, d);
      }
    }),
    (n.configurable = !0),
    (n.enumerable = e),
    n
  );
}
var C2 = Symbol("ObserverAdministration"),
  r2 = Symbol("isMobXReactObserver");
function g1(C) {
  var t;
  return (t = C[C2]) != null
    ? t
    : (C[C2] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: k1(C.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function G2(C) {
  var t = C.prototype;
  if (C[r2]) {
    var e = k1(C);
    throw new Error(
      "The provided component class (" +
        e +
        ") has already been declared as an observer component.",
    );
  } else C[r2] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (C.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = o2;
    else if (t.shouldComponentUpdate !== o2)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var r = t.render;
  if (typeof r != "function") {
    var o = k1(C);
    throw new Error(
      "[mobx-react] class component (" +
        o +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: w() ? r : T2.call(this, r),
      }),
      this.render()
    );
  };
  var n = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this;
      if (0) var l;
      var h = g1(this);
      return (
        (h.mounted = !0),
        B.unregister(this),
        (h.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!h.reaction || h.reactionInvalidatedBeforeMount) && h.forceUpdate(),
        n?.apply(this, arguments)
      );
    }),
    B2(t, "componentWillUnmount", function () {
      var i;
      if (!w()) {
        var l = g1(this);
        (i = l.reaction) == null || i.dispose(),
          (l.reaction = null),
          (l.forceUpdate = null),
          (l.mounted = !1),
          (l.reactionInvalidatedBeforeMount = !1);
      }
    }),
    C
  );
}
function k1(C) {
  return C.displayName || C.name || "<component>";
}
function T2(C) {
  var t = C.bind(this),
    e = g1(this);
  function r() {
    e.reaction ||
      ((e.reaction = W2(e)), e.mounted || B.register(this, e, this));
    var o = void 0,
      n = void 0;
    if (
      (e.reaction.track(function () {
        try {
          n = P1(!1, t);
        } catch (i) {
          o = i;
        }
      }),
      o)
    )
      throw o;
    return n;
  }
  return r;
}
function W2(C) {
  return new Q(C.name + ".render()", function () {
    if (!C.mounted) {
      C.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      C.forceUpdate == null || C.forceUpdate();
    } catch {
      var t;
      (t = C.reaction) == null || t.dispose(), (C.reaction = null);
    }
  });
}
function o2(C, t) {
  return (
    w() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== t ? !0 : !R2(this.props, C)
  );
}
function f1(C, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    C.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, C) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, C)
      ? G2(C)
      : d1(C)
  );
}
function M1() {
  return (
    (M1 = Object.assign
      ? Object.assign.bind()
      : function (C) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (C[r] = e[r]);
          }
          return C;
        }),
    M1.apply(this, arguments)
  );
}
function A2(C, t) {
  if (C == null) return {};
  var e = {},
    r = Object.keys(C),
    o,
    n;
  for (n = 0; n < r.length; n++)
    (o = r[n]), !(t.indexOf(o) >= 0) && (e[o] = C[o]);
  return e;
}
var P2 = ["children"],
  i2 = m.default.createContext({});
function E2(C) {
  var t = C.children,
    e = A2(C, P2),
    r = m.default.useContext(i2),
    o = m.default.useRef(M1({}, r, e)),
    n = o.current;
  if (0) var i;
  return m.default.createElement(i2.Provider, { value: n }, t);
}
E2.displayName = "MobXProvider";
var J3 = Number.parseInt(m.default.version.split(".")[0]);
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!X) throw new Error("mobx-react requires mobx to be available");
var s2 = Object.seal({ onMoveUp: e1, onMoveDown: e1 }),
  z3 = Object.seal({ onMoveRight: e1, onMoveLeft: e1 });
function e1(C, t) {
  if (C.is_repeat) return !1;
  let e = t.GetRelativeDirection(C.button);
  return e == 1 ? t.BFocusFirstChild(0) : e == 2 ? t.BFocusLastChild(0) : !1;
}
function $3(C) {
  return C.Element.checkVisibility();
}
var p = g(x());
var a2 = g(x());
var f = {
  "duration-app-launch": "800ms",
  ContextMenuMouseOverlay: "b7xYZZxB5B4-",
  ContextMenuPosition: "o6fauCzG3J8-",
  contextMenu: "Sax96NMRDNg-",
  ContextMenuPopup: "BPK-2blxjIY-",
  contextMenuContents: "S4vxdXl-Tt4-",
  contextMenuItem: "_9QNF01mSnJo-",
  active: "yQed0a0UPBs-",
  MenuSectionHeader: "g0TN7BV3VaU-",
  ContextMenuSeparator: "spxW2r-GYVk-",
  NoSeparation: "KYihcox8Ecg-",
  UpperCase: "Xf9GISpIH-g-",
  SubMenu: "zdQY8o-cjDw-",
  Label: "bP5c-culAkY-",
  Arrow: "fawTG34m89A-",
  IconContainer: "jkozd0TWs0M-",
  ContextMenuHRSeparator: "_2OCJzZW0nUA-",
  ForceDesktop: "DBVmBIxYzAc-",
  PopoutSubMenu: "MVJ6mtoRVF4-",
  PopoutSubMenuItems: "_3W6Oq18b4G0-",
};
var H1 = g(I()),
  V1 = a2.forwardRef((C, t) => {
    let { className: e, contextMenuStyles: r, disabled: o, ...n } = C;
    return (0, H1.jsx)("div", {
      ...n,
      ref: t,
      className: y(
        e,
        (r || f).contextMenuItem,
        "contextMenuItem",
        o && "disabled",
      ),
    });
  });
V1.displayName = "MenuItem";
function c2(C, t = !0) {
  return function (e, r, o) {
    let n = o.value;
    o.value = function (...i) {
      let l = this[r + "_DebounceProperties"];
      l === void 0 &&
        (l = this[r + "_DebounceProperties"] = { hTimer: void 0, nPending: 0 }),
        l.hTimer === void 0
          ? (t ? n.apply(this, i) : (l.nPending += 1),
            (l.hTimer = window.setInterval(() => {
              l.nPending > 0
                ? (n.apply(this, i), (l.nPending = 0))
                : (window.clearInterval(l.hTimer), (l.hTimer = void 0));
            }, C)))
          : (l.nPending += 1);
    };
  };
}
var c = g(I()),
  C1 = p.createContext(null),
  T = class extends p.Component {
    m_navRef = A1();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        G1(this.props.refInstance, this.instance);
    }
    componentDidUpdate(t) {
      t.label !== this.props.label &&
        this.context &&
        this.instance.SetLabel(this.props.label);
    }
    HideIfSubmenu() {
      return this.instance.BIsSubMenu() ? (this.instance.HideSelf(), !0) : !1;
    }
    HideMenu() {
      return (
        this.instance.BIsSubMenu()
          ? this.instance.HideSelf()
          : this.instance.Hide(),
        !0
      );
    }
    render() {
      let {
          children: t,
          className: e,
          label: r,
          onCancel: o,
          cancelText: n,
          refInstance: i,
          bForceDesktopPresentation: l,
          footer: h,
          role: d = "menu",
          labelId: Z,
          style: k = {},
          refScrollable: H,
          ...E
        } = this.props,
        M = this.context.styles ?? f,
        v = n ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !l) {
        let s = () => {
          o && o(), this.instance.Hide();
        };
        return (
          (k.overflowY = this.instance.BIsSubMenuVisible() ? "hidden" : void 0),
          (0, c.jsxs)(c1, {
            ...E,
            className: y(
              M.contextMenuContents,
              { [M.hasSubMenu]: this.instance.BIsSubMenuVisible() },
              e,
            ),
            "flow-children": "column",
            onMoveLeft: this.HideIfSubmenu,
            onCancel: this.instance.BIsSubMenu() ? this.HideMenu : s,
            style: k,
            navEntryPreferPosition: 4,
            navRef: this.m_navRef,
            ref: H,
            role: d,
            "aria-labelledby": r ? Z : void 0,
            ...s2,
            children: [
              t,
              r &&
                (0, c.jsx)("div", {
                  id: Z,
                  style: { display: "none" },
                  children: r,
                }),
              !this.instance.BIsSubMenu() &&
                (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)(u2, {}),
                    (0, c.jsx)(V, {
                      className: M.Cancel,
                      onSelected: s,
                      children: O(v),
                    }),
                    h,
                  ],
                }),
              this.instance.BIsSubMenuVisible() &&
                (0, c.jsx)("div", {
                  className: M.contextMenuFade,
                  onClick: () => this.instance.HideSubMenu(),
                }),
            ],
          })
        );
      } else
        return (0, c.jsx)("div", {
          ref: H,
          style: k,
          ...E,
          className: y(
            {
              [M.contextMenuContents]: !0,
              [M.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [M.ForceDesktop]: l,
            },
            e,
          ),
          children: t,
        });
    }
  };
R1(T, "contextType", C1),
  u([L], T.prototype, "HideIfSubmenu", 1),
  u([L], T.prototype, "HideMenu", 1),
  (T = u([f1], T));
function h2(C) {
  let t = p.useId();
  return (0, c.jsx)(T, { labelId: t, ...C });
}
var V = class extends p.PureComponent {
  static contextType = C1;
  m_ref = p.createRef();
  m_refDiv = p.createRef();
  get element() {
    return this.m_refDiv.current;
  }
  get instance() {
    return this.context.instance;
  }
  OnClick(t) {
    if (this.props.disabled) {
      this.context.callbacks?.onDisabledItemSelected &&
        this.context.callbacks.onDisabledItemSelected();
      return;
    }
    this.props.onClick && this.props.onClick(t),
      !this.props.bInteractableItem &&
        (this.props.onSelected && this.props.onSelected(t),
        this.context && this.instance.ForceHide());
  }
  OnOKButton(t) {
    this.m_refDiv.current?.click();
  }
  OnMouseEnter(t) {
    this.context.presentation == 0 && this.instance.HideSubMenu();
  }
  Focus() {
    this.m_ref.current
      ? this.m_ref.current.TakeFocus()
      : this.m_refDiv.current && this.m_refDiv.current.focus();
  }
  render() {
    let {
        onSelected: t,
        bInteractableItem: e,
        onMoveRight: r,
        ...o
      } = this.props,
      n = this.context?.styles ?? f;
    return this.context.presentation == 1
      ? (0, c.jsx)(c1, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ...o,
          className: y(
            this.props.className,
            n.contextMenuItem,
            "contextMenuItem",
            this.props.disabled && "disabled",
            this.props.selected && n.Selected,
            this.props.tone == "positive" && n.Positive,
            this.props.tone == "emphasis" && n.Emphasis,
            this.props.tone == "destructive" && n.Destructive,
          ),
          focusClassName: n.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: r,
          unselectable: this.props.unselectable,
          role: o.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        })
      : (0, c.jsx)(V1, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ...o,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: o.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
u([L], V.prototype, "OnClick", 1),
  u([L], V.prototype, "OnOKButton", 1),
  u([L], V.prototype, "OnMouseEnter", 1),
  u([L], V.prototype, "Focus", 1);
function u2(C) {
  let e = p.useContext(C1).styles ?? f;
  return (0, c.jsx)("div", {
    className: e.ContextMenuSeparator,
    role: "separator",
  });
}
var _4 = (C) => {
    let t = N1();
    return (0, c.jsx)(b, { ...C, bInGamepadUI: t });
  },
  b = class extends p.PureComponent {
    static contextType = C1;
    m_refItem = p.createRef();
    constructor(t) {
      super(t), (this.state = { bActive: !1 });
    }
    get instance() {
      return this.context.instance;
    }
    OnSubMenuMouseEnter() {
      this.instance.CancelHideSubMenuTimer();
    }
    OnSubMenuHidden() {
      this.setState({ bActive: !1 }),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.m_refItem.current &&
          this.m_refItem.current.Focus();
    }
    ShowSubMenu(t) {
      let e = t || this.m_refItem.current.element,
        r = this.instance.ShowSubMenu(e, this.RenderSubMenu);
      return r
        ? (this.setState({ bActive: !0 }),
          r.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, c.jsx)(h2, {
        onMouseEnter: this.OnSubMenuMouseEnter,
        label: this.props.label,
        children: this.props.children,
      });
    }
    OnMouseEnter(t) {
      this.context.presentation == 0 && this.ShowSubMenu(t.currentTarget);
    }
    OnClick(t) {
      this.OnMouseEnter(t),
        this.props.onClick && this.props.onClick(t),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.ShowSubMenu(t.currentTarget);
    }
    render() {
      let {
          label: t,
          selectedWithin: e,
          children: r,
          className: o,
          bInGamepadUI: n,
          ...i
        } = this.props,
        l = this.context.styles ?? f;
      return (0, c.jsxs)(V, {
        ...i,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: e && !this.state.bActive,
        className: y(o, l.SubMenu, this.state.bActive && l.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, c.jsx)("div", { className: l.Label, children: t }),
          (0, c.jsx)("div", {
            className: l.Arrow,
            children: (0, c.jsx)(I1, {}),
          }),
        ],
      });
    }
  };
u([L], b.prototype, "OnSubMenuMouseEnter", 1),
  u([L], b.prototype, "OnSubMenuHidden", 1),
  u([L], b.prototype, "ShowSubMenu", 1),
  u([L], b.prototype, "RenderSubMenu", 1),
  u([L], b.prototype, "OnMouseEnter", 1),
  u([L], b.prototype, "OnClick", 1);
var S = class extends p.Component {
  m_elMenu = void 0;
  m_cReenteranceGuard = 1;
  m_mutationObserver;
  constructor(t) {
    super(t),
      (this.state = {
        ready: !1,
        menuLeft: void 0,
        menuTop: void 0,
        menuRight: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      }),
      (this.m_mutationObserver = new MutationObserver(this.OnMenuMutation));
  }
  get parentWin() {
    return (
      this.props.element?.ownerDocument.defaultView || this.props.parentWin
    );
  }
  BindMenuElement(t) {
    this.props.instance.SetElement(t),
      this.m_elMenu &&
        (this.m_mutationObserver.disconnect(),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
            "resize",
            this.OnWindowResize,
          )),
      t &&
        (this.m_mutationObserver.observe(t, { childList: !0, subtree: !0 }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          t.ownerDocument.defaultView?.addEventListener(
            "resize",
            this.OnWindowResize,
          )),
      (this.m_elMenu = t || void 0),
      A.IN_CLIENT && this.props.popup && this.m_elMenu
        ? this.m_elMenu.ownerDocument.fonts.ready.then(() => {
            this.PositionMenu();
          })
        : this.PositionMenu(),
      this.state.ready ||
        (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
        this.setState({ ready: !0 }, () => {
          this.props.options?.bSkipFocusWhenReady || this.TakeFocus();
        }));
  }
  OnMenuMutation(t, e) {
    this.PositionMenu();
  }
  OnWindowResize() {
    this.PositionMenu();
  }
  OnBlur(t) {
    if (
      !(t.relatedTarget && P(t.currentTarget, t.relatedTarget)) &&
      !(
        t.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(t.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let e = F2() ? 150 : 0;
      this.props.instance.OnCancel(e);
    }
  }
  OnKeyDown(t) {
    t.keyCode == 27 &&
      this.state.ready &&
      (this.props.instance.Hide(), t.preventDefault(), t.stopPropagation());
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
        !P(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let t = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
      t && t.focus ? t.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(t = !1) {
    let e = this.props.options,
      r = this.m_elMenu,
      o = this.props.element;
    if (!r) return;
    let n = this.props.popup != null,
      i = this.parentWin;
    if (!i || (o && i.getComputedStyle(o).display === "none")) return;
    let l = this.props.clientX,
      h = this.props.clientY,
      d = 0,
      Z = 0,
      k = i.innerWidth,
      H = i.innerHeight,
      E = 1,
      M = o?.getBoundingClientRect();
    if (n)
      if (
        (!e.bScreenCoordinates &&
          l !== void 0 &&
          h !== void 0 &&
          ((l += i.screenLeft), (h += i.screenTop)),
        M && (M = T1(i, M)),
        e.targetMonitor)
      )
        (E = e.targetMonitor.flMonitorScale),
          (d = e.targetMonitor.nScreenLeft),
          (Z = e.targetMonitor.nScreenTop),
          (k = e.targetMonitor.nScreenWidth),
          (H = e.targetMonitor.nScreenHeight);
      else {
        let _ = i.screen,
          S1 = 0,
          b1 = 0;
        _.availLeft && (S1 = _.availLeft),
          _.availTop && (b1 = _.availTop),
          (d = S1),
          (Z = b1),
          (k = _.availWidth),
          (H = _.availHeight);
      }
    (e.bOverlapHorizontal || e.bOverlapVertical) && (l = h = void 0);
    let v = r.getBoundingClientRect();
    if (e.flGamepadScale && e.flGamepadScale > 0) {
      let _ = e.flGamepadScale;
      v = new DOMRect(v.x * _, v.y * _, v.width * _, v.height * _);
    }
    let s = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      D = l ?? M.left,
      N = l ?? M.right,
      W = v.width;
    e.bMatchWidth && ((W = N - D), (s.menuWidth = W)),
      e.bGrowToElementWidth && (s.menuMinWidth = Math.max(W, N - D));
    let v1 = (e.bOverlapHorizontal ? N : D) - d - W,
      i1 = v1 > 0,
      w1 = d + k - (e.bOverlapHorizontal ? D : N) - W,
      n1 = w1 > 0,
      l1 = (e.bPreferPopLeft || !n1) && i1;
    !i1 &&
      !n1 &&
      ((l1 = i1 > n1),
      e.bFitToWindow && ((W += (l1 ? v1 : w1) - 8), (s.menuWidth = W))),
      l1
        ? (s.menuRight = k - (e.bOverlapHorizontal ? N : D))
        : (s.menuLeft = e.bOverlapHorizontal ? D : N);
    let J = h ?? M.top,
      j = h ?? M.bottom,
      R = r.scrollHeight;
    e.bMatchHeight && ((R = j - J), (s.menuHeight = R));
    let s1 = (e.bOverlapVertical ? j : J) - Z - R,
      Z1 = s1 > 0,
      a1 = Z + H - (e.bOverlapVertical ? J : j) - R,
      x1 = a1 > 0,
      $ = (e.bPreferPopTop || !x1) && Z1 && !e.bDisablePopTop;
    if (!Z1 && !x1) {
      let _ =
        e.bShiftToFitWindow !== void 0
          ? e.bShiftToFitWindow
          : !!e.bFitToWindow && !e.bOverlapHorizontal;
      ($ = s1 > a1 && !e.bDisablePopTop),
        _ && ($ ? (s.menuTop = 4) : (s.menuBottom = 4)),
        e.bFitToWindow &&
          (_ ? (R = Math.min(R, H - 8)) : (R += $ ? s1 : a1),
          (s.menuHeight = R - 8));
    }
    s.menuBottom === void 0 &&
      s.menuTop === void 0 &&
      ($
        ? (s.menuBottom = H - (e.bOverlapVertical ? j : J))
        : (s.menuTop = e.bOverlapVertical ? J : j)),
      n
        ? (s.menuHeight || (s.menuHeight = v.height),
          s.menuWidth || (s.menuWidth = v.width),
          s.menuBottom &&
            !s.menuTop &&
            ((s.menuTop = H - s.menuBottom - s.menuHeight),
            (s.menuBottom = void 0)),
          s.menuRight &&
            !s.menuLeft &&
            ((s.menuLeft = k - s.menuRight - s.menuWidth),
            (s.menuRight = void 0)))
        : i.getComputedStyle(r).position != "fixed" &&
          (s.menuLeft && (s.menuLeft += i.scrollX),
          s.menuTop && (s.menuTop += i.scrollY),
          s.menuBottom &&
            (s.menuBottom +=
              i.document.body.clientHeight - i.scrollY - i.innerHeight),
          s.menuRight &&
            (s.menuRight +=
              i.document.body.clientWidth - i.scrollX - i.innerWidth)),
      (t ||
        s.menuLeft !== this.state.menuLeft ||
        s.menuRight !== this.state.menuRight ||
        s.menuTop !== this.state.menuTop ||
        s.menuBottom !== this.state.menuBottom ||
        s.menuWidth !== this.state.menuWidth ||
        s.menuHeight !== this.state.menuHeight) &&
        this.setState(s);
  }
  PositionPopupWindow() {
    if (
      !(
        this.state.menuLeft !== void 0 &&
        this.state.menuTop !== void 0 &&
        this.state.menuWidth !== void 0 &&
        this.state.menuHeight !== void 0
      )
    )
      return;
    let e = this.props.popup?.window,
      r = this.props.options;
    if (r.bScreenCoordinates) {
      let o = this.parentWin?.devicePixelRatio;
      if (r.targetMonitor) {
        let n = r.flGamepadScale || 1;
        o = (r.targetMonitor.flMonitorScale ?? 1) / n;
      }
      e?.SteamClient.Window.MoveTo(
        this.state.menuLeft,
        this.state.menuTop,
        o ?? !0,
      ),
        e?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          o ?? !0,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((o) => {
      let n = this.state.menuLeft - this.parentWin.screenX,
        i = this.state.menuTop - this.parentWin.screenY;
      try {
        e?.SteamClient.Window.PositionWindowRelative(
          o,
          n,
          i,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (l) {
        console.error(l);
      }
    });
  }
  render() {
    let t = { visibility: this.state.ready ? "visible" : "hidden" };
    if (
      this.props.options.flGamepadScale &&
      this.props.options.flGamepadScale > 0
    )
      t.zoom = this.props.options.flGamepadScale;
    else if (
      this.props.options.bScreenCoordinates &&
      this.props.options.targetMonitor &&
      this.m_elMenu?.ownerDocument?.defaultView
    ) {
      let r = this.m_elMenu.ownerDocument.defaultView.devicePixelRatio;
      r != 1 &&
        (t.zoom = (this.props.options.targetMonitor.flMonitorScale ?? 1) / r);
    }
    this.props.popup
      ? (this.PositionPopupWindow(),
        this.state.menuMinWidth !== void 0 &&
          (t.minWidth = Math.floor(this.state.menuMinWidth)))
      : (this.state.menuTop !== void 0
          ? (t.top = this.state.menuTop)
          : this.state.menuBottom !== void 0 &&
            (t.bottom = this.state.menuBottom),
        this.state.menuLeft !== void 0
          ? (t.left = this.state.menuLeft)
          : this.state.menuRight !== void 0 && (t.right = this.state.menuRight),
        this.state.menuHeight !== void 0 && (t.height = this.state.menuHeight),
        this.state.menuWidth !== void 0 && (t.width = this.state.menuWidth),
        this.state.menuMinWidth !== void 0 &&
          (t.minWidth = this.state.menuMinWidth));
    let e = this.props.options.strClassName || f.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (e += " visible"),
      this.props.instance.visible && this.state.ready && (e += " ready"),
      (e += " " + f.ContextMenuPosition),
      this.props.options.bStandalone && (e += " " + f.Standalone),
      (0, c.jsx)("div", {
        className: e,
        ref: this.BindMenuElement,
        style: t,
        onBlur: this.OnBlur,
        onKeyDown: this.OnKeyDown,
        tabIndex: 0,
        children: this.props.children,
      })
    );
  }
};
u([L], S.prototype, "BindMenuElement", 1),
  u([L, c2(100)], S.prototype, "OnMenuMutation", 1),
  u([L], S.prototype, "OnWindowResize", 1),
  u([L], S.prototype, "OnBlur", 1),
  u([L], S.prototype, "OnKeyDown", 1),
  (S = u([f1], S));
function m4(C) {
  return (0, c.jsx)("div", { className: f.ContextMenuMouseOverlay });
}
function N2(C, t) {
  let e = t.createEvent("HTMLEvents");
  e.initEvent("change", !0, !1), C.dispatchEvent(e);
}
function v4(C) {
  let t = [],
    e = W1(C),
    r = e.getSelection(),
    o = r && r.rangeCount > 0 && r.toString().length > 0,
    n = C.target,
    i = !1,
    l = C.clientY,
    h = C.clientX;
  if (
    (n &&
      "tagName" in n &&
      (n.tagName == "INPUT" || n.tagName == "TEXTAREA") &&
      (i = !0),
    A.IN_CLIENT && i && F(e, "Browser.GetSpellingSuggestions"))
  ) {
    let [d, ...Z] = e.SteamClient.Browser.GetSpellingSuggestions(),
      k = n;
    k &&
      Z.forEach((H, E) => {
        t.push(
          (0, c.jsx)(
            V,
            {
              onSelected: () => {
                k.setRangeText(H),
                  N2(k, e.document),
                  k.setSelectionRange(k.selectionEnd, k.selectionEnd),
                  n.focus();
              },
              className: f.NoSeparation,
              children: H,
            },
            `spelling_${E}_${H}`,
          ),
        );
      }),
      d &&
        F(e, "Browser.AddWordToDictionary") &&
        ((d = d.trim()),
        t.push(
          (0, c.jsx)(
            V,
            {
              onSelected: () => e.SteamClient.Browser.AddWordToDictionary(d),
              children: O(
                "#ContextMenu_AddToDictionary",
                d.length < 30 ? d : d.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${d}`,
          ),
        ));
  }
  if (
    ((e.document.queryCommandEnabled("cut") || (o && i)) &&
      t.push(
        (0, c.jsx)(
          V,
          {
            onSelected: () => {
              e.document.execCommand("cut");
            },
            children: O("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (e.document.queryCommandEnabled("copy") || o) &&
      t.push(
        (0, c.jsx)(
          V,
          {
            onSelected: () => {
              e.document.execCommand("copy");
            },
            className: f.NoSeparation,
            children: O("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    A.IN_CLIENT &&
      i &&
      F(e, "Browser.Paste") &&
      t.push(
        (0, c.jsx)(
          V,
          {
            onSelected: () => {
              n.focus(), e.SteamClient.Browser.Paste();
            },
            className: f.NoSeparation,
            children: O("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    A.IN_CLIENT && A.DEV_MODE)
  ) {
    let d = [];
    F(e, "Browser.OpenDevTools") &&
      d.push(
        (0, c.jsx)(
          V,
          {
            onSelected: () => {
              n.focus(), e.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      F(e, "Browser.InspectElement") &&
        d.push(
          (0, c.jsx)(
            V,
            {
              onSelected: () => {
                n.focus(), e.SteamClient.Browser.InspectElement(l, h);
              },
              className: f.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      d.length > 0 &&
        (t.push((0, c.jsx)(u2, {}, "devtools-separator")), t.push(...d));
  }
  if (t.length)
    d2((0, c.jsx)(h2, { children: t }), C, { bRootContextMenu: !0 });
  else {
    if (C.shiftKey) return;
    C.preventDefault(), C.stopPropagation();
  }
}
var I2 = "EnableContextMenuBlurDelay3";
function F2() {
  return (window.localStorage && window.localStorage.getItem(I2)) === "true";
}
var Y = class Y {
  static s_nNextKeyValue = 1;
  m_nKey = null;
  m_ContextMenuManager;
  m_bVisible = !1;
  m_fnTakeFocus;
  m_element;
  m_rctElement;
  m_rctLabel = void 0;
  m_popupContextMenu;
  m_timerHideMenu = 0;
  m_options;
  m_position;
  m_submenu;
  m_parentInstance;
  m_elSubmenuItem = null;
  m_timerHideSubMenu = 0;
  m_fnOnHideCallback;
  constructor(t, e) {
    q(this), (this.m_ContextMenuManager = t), (this.m_rctElement = e);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = Y.s_nNextKeyValue), Y.s_nNextKeyValue++),
      this.m_nKey
    );
  }
  SetElement(t) {
    this.m_element = t;
  }
  SetPopup(t) {
    this.m_popupContextMenu = t;
  }
  get ReactElement() {
    return this.m_rctElement;
  }
  get label() {
    return this.m_rctLabel;
  }
  get submenu() {
    return this.m_submenu;
  }
  get visible() {
    return this.m_bVisible;
  }
  get options() {
    return this.m_options;
  }
  get position() {
    return this.m_position;
  }
  SetOnHideCallback(t) {
    this.m_fnOnHideCallback = t;
  }
  Show() {
    this.CancelHideMenuTimer(),
      (this.m_bVisible = !0),
      this.m_ContextMenuManager.ShowMenu(this);
  }
  OnCancel(t = 0) {
    this.options?.onCancel && this.options.onCancel(), this.Hide(t);
  }
  Hide(t = 0) {
    t > 0
      ? (this.m_timerHideMenu = window.setTimeout(() => {
          (this.m_timerHideMenu = 0), this.InternalHide();
        }, t))
      : this.InternalHide();
  }
  CancelHideMenuTimer() {
    this.m_timerHideMenu > 0 &&
      (clearTimeout(this.m_timerHideMenu), (this.m_timerHideMenu = 0));
  }
  SetPosition(t, e, r) {
    (this.m_options = { ...this.m_options, ...r }),
      (this.m_position.clientX = t),
      (this.m_position.clientY = e),
      (this.m_position.options = this.m_options);
  }
  ForceHide() {
    this.InternalHide();
  }
  HideIfNotInFocus() {
    !this.BHasFocus() && !this.BIsFocusInChildHierarchy() && this.Hide();
  }
  InternalHide() {
    this.CancelHideMenuTimer(),
      this.m_bVisible &&
        ((this.m_bVisible = !1),
        this.InternalHideSubMenu(),
        this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
        this.m_ContextMenuManager.HideMenu(this));
  }
  SetTakeFocus(t) {
    this.m_fnTakeFocus = t;
  }
  ShowSubMenu(t, e) {
    return this.m_elSubmenuItem == t
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = t),
        (this.m_submenu = new _1(this, e(), t, this.m_options.bForcePopup)),
        this.m_submenu.Show(),
        this.m_submenu);
  }
  CancelHideSubMenuTimer() {
    this.m_timerHideSubMenu > 0 &&
      (clearTimeout(this.m_timerHideSubMenu), (this.m_timerHideSubMenu = 0));
  }
  HideSubMenu() {
    if (!this.m_submenu) {
      this.CancelHideSubMenuTimer();
      return;
    }
    if (this.m_timerHideSubMenu > 0) return;
    let t = 150;
    this.m_timerHideSubMenu = window.setTimeout(() => {
      this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
    }, t);
  }
  OnSubMenuDismissed(t) {
    this.m_submenu == t && this.InternalHideSubMenu();
  }
  HideSelf() {
    this.m_parentInstance
      ? this.m_parentInstance.OnSubMenuDismissed(this)
      : this.InternalHide();
  }
  InternalHideSubMenu() {
    this.CancelHideSubMenuTimer(),
      this.m_submenu &&
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(1),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        (this.m_submenu = void 0));
  }
  TakeFocus(t = 1) {
    this.m_popupContextMenu && this.m_popupContextMenu.Focus(t),
      this.m_fnTakeFocus && this.m_fnTakeFocus();
  }
  BInternalElementInParentHierarchy(t) {
    return (
      this.m_parentInstance != null &&
      (this.m_parentInstance.BIsChildElement(t) ||
        this.m_parentInstance.BInternalElementInParentHierarchy(t))
    );
  }
  BInternalElementInChildHierarchy(t) {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BIsChildElement(t) ||
        this.m_submenu.BInternalElementInChildHierarchy(t))
    );
  }
  BIsChildElement(t) {
    return this.m_element
      ? P(this.m_element, t)
      : P(this.m_popupContextMenu?.root_element, t);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : P(this.m_element, this.m_element?.ownerDocument.activeElement);
  }
  BIsFocusInChildHierarchy() {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
    );
  }
  BIsElementInMenuHierarchy(t) {
    return (
      this.BInternalElementInParentHierarchy(t) ||
      this.BInternalElementInChildHierarchy(t)
    );
  }
  BIsSubMenuVisible() {
    return !!this.m_submenu;
  }
  SetLabel(t) {
    this.m_rctLabel = t;
  }
};
u([X], Y.prototype, "m_bVisible", 2), u([X.ref], Y.prototype, "m_rctLabel", 2);
var z = Y,
  r1 = class extends z {
    constructor(t, e, r, o, n, i) {
      super(t, e),
        (this.m_options = i || {}),
        (this.m_position = {
          element: r,
          clientX: o,
          clientY: n,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
        });
    }
    Show() {
      super.Show();
    }
    Hide(t = 0) {
      super.Hide(t);
    }
    ForceHide() {
      super.ForceHide();
    }
    BIsSubMenu() {
      return !1;
    }
  },
  _1 = class extends z {
    constructor(t, e, r, o) {
      super(t.Manager, e),
        (this.m_parentInstance = t),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: t.options.strClassName,
          bFitToWindow: t.options.bFitToWindow,
          bShiftToFitWindow: t.options.bShiftToFitWindow,
          bForcePopup: o,
        }),
        (this.m_position = {
          element: r,
          clientX: void 0,
          clientY: void 0,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
          bSubmenu: !0,
        });
    }
    Hide() {
      this.m_popupContextMenu
        ? window.setTimeout(() => {
            this.m_parentInstance?.HideIfNotInFocus();
          }, 10)
        : this.m_parentInstance?.Hide();
    }
    ForceHide() {
      this.m_parentInstance?.ForceHide();
    }
    BIsSubMenu() {
      return !0;
    }
  };
var o1 = class {
  m_callbacksMenusChanged = new B1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(t, e, r, o, n) {
    let i = new r1(this, t, e, r, o, n);
    return (
      n?.bCreateHidden &&
        (this.m_setHiddenMenus.add(i), this.m_callbacksMenusChanged.Dispatch()),
      i
    );
  }
  get OnMenusChanged() {
    return this.m_callbacksMenusChanged;
  }
  HideActiveMenu() {
    this.m_ActiveMenu?.options.bRetainOnHide
      ? this.m_setHiddenMenus.add(this.m_ActiveMenu)
      : this.m_rgActiveSubmenus.length && (this.m_rgActiveSubmenus = []),
      (this.m_ActiveMenu = void 0);
  }
  get ActiveMenu() {
    return this.m_ActiveMenu;
  }
  GetVisibleMenus() {
    return this.m_ActiveMenu
      ? [this.m_ActiveMenu, ...this.m_rgActiveSubmenus]
      : [];
  }
  GetHiddenMenus() {
    return Array.from(this.m_setHiddenMenus);
  }
  GetAllMenus() {
    let t;
    return (
      this.m_ActiveMenu
        ? (t = [
            this.m_ActiveMenu,
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ])
        : (t = [
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ]),
      t.sort((e, r) => e.key - r.key)
    );
  }
  BShouldRenderMouseOverlay() {
    return this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay;
  }
  ShowMenu(t) {
    if (t.BIsSubMenu()) this.m_rgActiveSubmenus.push(t);
    else {
      if (t == this.m_ActiveMenu) return;
      this.m_ActiveMenu &&
        (this.m_ActiveMenu.options.bRetainOnHide &&
          this.m_setHiddenMenus.add(this.m_ActiveMenu),
        this.m_ActiveMenu.Hide()),
        (this.m_ActiveMenu = t),
        this.m_setHiddenMenus.delete(t);
    }
    this.m_callbacksMenusChanged.Dispatch();
  }
  HideMenu(t) {
    t.BIsSubMenu()
      ? y1(this.m_rgActiveSubmenus, t) &&
        this.m_callbacksMenusChanged.Dispatch()
      : (K(t == this.m_ActiveMenu, "Call to hide inactive menu"),
        t == this.m_ActiveMenu &&
          (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
  }
  ReleaseHiddenMenu(t) {
    this.m_setHiddenMenus.delete(t);
  }
};
var m1 = class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(t) {
      let e = t?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(e);
    }
    GetContextMenuManager(t) {
      let e = this.m_mapManagers.get(t);
      if (!e) {
        let r = t;
        for (; !e && r.opener; )
          (r = r.opener), (e = this.m_mapManagers.get(r));
      }
      return e || ((e = new o1()), this.m_mapManagers.set(t, e)), e;
    }
    SetMenuManager(t, e) {
      K(
        this.m_mapManagers.get(t) === void 0 || !e || t == window,
        `Stomping CContextMenuManager for ${t.document.title}!`,
      ),
        this.m_mapManagers.set(t, e);
    }
    RegisterChildWindow(t, e) {
      return (
        this.m_mapManagers.set(e, this.GetContextMenuManager(t)),
        () => this.m_mapManagers.delete(e)
      );
    }
  },
  U2 = new m1();
function d2(C, t, e) {
  let r,
    o,
    n,
    i = t;
  if (i?.preventDefault && i?.stopPropagation) {
    if (i.shiftKey || (i.altKey && !e?.bRootContextMenu)) return null;
    i.preventDefault(),
      i.stopPropagation(),
      (n = i.currentTarget),
      (r = i.clientX),
      (o = i.clientY);
  } else n = t;
  let h = U2.GetContextMenuManagerFromWindow(n).CreateContextMenuInstance(
    C,
    n,
    r,
    o,
    e,
  );
  return h.Show(), e?.bCreateHidden && h.Hide(), h;
}
var a = g(I());
function C5(C) {
  let { direction: t, ...e } = C;
  switch (t) {
    case "up":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, a.jsx)("path", {
          d: "M17.98 10.23L3.20996 25H32.75L17.98 10.23Z",
          fill: "currentColor",
        }),
      });
    case "down":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, a.jsx)("path", {
          d: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
          fill: "currentColor",
        }),
      });
    case "left":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, a.jsx)("path", {
          d: "M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, a.jsx)("path", {
          d: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
          fill: "currentColor",
        }),
      });
  }
}
function r5(C) {
  let { direction: t, ...e } = C;
  switch (t) {
    case "up":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...C,
        children: (0, a.jsx)("path", {
          fill: "currentColor",
          d: "M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z",
        }),
      });
    case "down":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...C,
        children: (0, a.jsx)("path", {
          fill: "currentColor",
          d: "M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z",
        }),
      });
    case "left":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...C,
        children: (0, a.jsx)("path", {
          d: "M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...C,
        children: (0, a.jsx)("path", {
          d: "M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z",
          fill: "currentColor",
        }),
      });
  }
}
function o5(C) {
  return (0, a.jsx)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...C,
    children: (0, a.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.7 15.2077C31.703 12.5623 30.94 9.97259 29.5032 7.75136C28.0664 5.53014 26.0172 3.77242 23.6031 2.69048C21.189 1.60855 18.5133 1.24869 15.8992 1.65436C13.2851 2.06002 10.8443 3.21387 8.87163 4.97655C6.89899 6.73922 5.47888 9.03532 4.78281 11.5875C4.08673 14.1397 4.14447 16.8389 4.94905 19.359C5.75363 21.8791 7.27063 24.1124 9.31684 25.7891C11.363 27.4658 13.8509 28.5142 16.48 28.8077V34.5077L27.31 25.2477C28.6947 23.9675 29.7996 22.4147 30.5551 20.6869C31.3106 18.959 31.7004 17.0935 31.7 15.2077ZM15.3 7.06885L16.3075 16.9577H20.1309L21.1039 7.06885H15.3ZM20.6927 22.0125C20.6927 23.3774 19.5862 24.4838 18.2213 24.4838C16.8564 24.4838 15.7499 23.3774 15.7499 22.0125C15.7499 20.6475 16.8564 19.5411 18.2213 19.5411C19.5862 19.5411 20.6927 20.6475 20.6927 22.0125Z",
      fill: "currentColor",
    }),
  });
}
function i5(C) {
  let { alert: t, urgent: e, ...r } = C;
  return e
    ? (0, a.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: [
          (0, a.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
          }),
          (0, a.jsx)("path", {
            fill: "#FFC82C",
            d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
          }),
        ],
      })
    : t
      ? (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...r,
          children: [
            (0, a.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
            }),
            (0, a.jsx)("path", {
              fill: "#1A9FFF",
              d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
            }),
          ],
        })
      : (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...r,
          children: (0, a.jsxs)("g", {
            className: "SVGIcon_Notification",
            children: [
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                className: "SVGIcon_Notification_Uvula",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z",
                fill: "currentColor",
              }),
            ],
          }),
        });
}
function n5(C) {
  return (0, a.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...C,
    children: (0, a.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
      fill: "currentColor",
    }),
  });
}
function l5(C) {
  return (0, a.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...C,
    children: [
      (0, a.jsx)("path", {
        d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
        fill: "currentColor",
      }),
      (0, a.jsx)("path", {
        d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
        fill: "currentColor",
      }),
    ],
  });
}
function s5(C) {
  return (0, a.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, a.jsx)("path", {
      d: "M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z",
      fill: "white",
    }),
  });
}
function a5(C) {
  return (0, a.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, a.jsx)("path", {
      d: "M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z",
      fill: "white",
    }),
  });
}
export {
  b2 as a,
  $3 as b,
  f as c,
  c2 as d,
  C1 as e,
  h2 as f,
  V as g,
  u2 as h,
  _4 as i,
  S as j,
  m4 as k,
  v4 as l,
  o1 as m,
  U2 as n,
  d2 as o,
  C5 as p,
  r5 as q,
  o5 as r,
  i5 as s,
  n5 as t,
  l5 as u,
  s5 as v,
  a5 as w,
};

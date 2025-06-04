import { a as P2 } from "./chunk-NFOOR4D5.js";
import { e as t2 } from "./chunk-767A2FJR.js";
import { a as A } from "./chunk-LMPK554Q.js";
import {
  a as q,
  b as $1,
  c as C1,
  f as Q1,
  g as q1,
  i as r1,
  s as Y,
} from "./chunk-5Y6B5MXS.js";
import { a as A2 } from "./chunk-GZPKOZEG.js";
import { a as M1 } from "./chunk-FMRWFQFQ.js";
import { C as J1, i as j } from "./chunk-WYWXFVIA.js";
import { c as e2 } from "./chunk-XU6FBJSG.js";
import {
  a as j1,
  q as D,
  s as Y1,
  u as X1,
  z as z1,
} from "./chunk-OB6MJRZZ.js";
import { c as K1 } from "./chunk-UL4PVADN.js";
import { a as U } from "./chunk-Q72Y5JDG.js";
import {
  j as I1,
  o as O1,
  s as L,
  t as Q,
  v as F1,
  w as U1,
} from "./chunk-HBEBAV2G.js";
import { j as S, p as w } from "./chunk-UPXXNQVZ.js";
import { a as V } from "./chunk-WMRGUS7I.js";
import { c as W2, e as u, g as p, h as D1 } from "./chunk-QQZEZALK.js";
var m3 = W2((h1) => {
  "use strict";
  h1.byteLength = L3;
  h1.toByteArray = g3;
  h1.fromByteArray = H3;
  var y = [],
    Z = [],
    d3 = typeof Uint8Array < "u" ? Uint8Array : Array,
    B1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (I = 0, G2 = B1.length; I < G2; ++I)
    (y[I] = B1[I]), (Z[B1.charCodeAt(I)] = I);
  var I, G2;
  Z[45] = 62;
  Z[95] = 63;
  function B2(C) {
    var t = C.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var e = C.indexOf("=");
    e === -1 && (e = t);
    var r = e === t ? 0 : 4 - (e % 4);
    return [e, r];
  }
  function L3(C) {
    var t = B2(C),
      e = t[0],
      r = t[1];
    return ((e + r) * 3) / 4 - r;
  }
  function f3(C, t, e) {
    return ((t + e) * 3) / 4 - e;
  }
  function g3(C) {
    var t,
      e = B2(C),
      r = e[0],
      o = e[1],
      i = new d3(f3(C, r, o)),
      l = 0,
      n = o > 0 ? r - 4 : r,
      c;
    for (c = 0; c < n; c += 4)
      (t =
        (Z[C.charCodeAt(c)] << 18) |
        (Z[C.charCodeAt(c + 1)] << 12) |
        (Z[C.charCodeAt(c + 2)] << 6) |
        Z[C.charCodeAt(c + 3)]),
        (i[l++] = (t >> 16) & 255),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255);
    return (
      o === 2 &&
        ((t = (Z[C.charCodeAt(c)] << 2) | (Z[C.charCodeAt(c + 1)] >> 4)),
        (i[l++] = t & 255)),
      o === 1 &&
        ((t =
          (Z[C.charCodeAt(c)] << 10) |
          (Z[C.charCodeAt(c + 1)] << 4) |
          (Z[C.charCodeAt(c + 2)] >> 2)),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255)),
      i
    );
  }
  function M3(C) {
    return y[(C >> 18) & 63] + y[(C >> 12) & 63] + y[(C >> 6) & 63] + y[C & 63];
  }
  function k3(C, t, e) {
    for (var r, o = [], i = t; i < e; i += 3)
      (r =
        ((C[i] << 16) & 16711680) +
        ((C[i + 1] << 8) & 65280) +
        (C[i + 2] & 255)),
        o.push(M3(r));
    return o.join("");
  }
  function H3(C) {
    for (
      var t, e = C.length, r = e % 3, o = [], i = 16383, l = 0, n = e - r;
      l < n;
      l += i
    )
      o.push(k3(C, l, l + i > n ? n : l + i));
    return (
      r === 1
        ? ((t = C[e - 1]), o.push(y[t >> 2] + y[(t << 4) & 63] + "=="))
        : r === 2 &&
          ((t = (C[e - 2] << 8) + C[e - 1]),
          o.push(y[t >> 10] + y[(t >> 4) & 63] + y[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
});
var C2 = u(V());
if (!C2.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!r1)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var k1 = u(A2());
function E2(C) {
  C();
}
function o1(C) {
  C || (C = E2), Q1({ reactionScheduler: C });
}
var H1 = u(V());
function r2(C) {
  return q1(C);
}
var T2 = !1;
function b() {
  return T2;
}
var N2 = 1e4,
  D2 = 1e4,
  I2 = (function () {
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
            r === void 0 && (r = N2),
              clearTimeout(e.sweepTimeout),
              (e.sweepTimeout = void 0);
            var o = Date.now();
            e.registrations.forEach(function (i, l) {
              o - i.registeredAt >= r &&
                (e.finalize(i.value), e.registrations.delete(l));
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
            (this.sweepTimeout = setTimeout(this.sweep, D2));
        },
      }),
      C
    );
  })();
var o2 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : I2;
var P = new o2(function (C) {
  var t;
  (t = C.reaction) === null || t === void 0 || t.dispose(), (C.reaction = null);
});
var l2 = u(P2()),
  O2 = function () {};
function i2(C) {
  C.reaction = new C1("observer".concat(C.name), function () {
    var t;
    (C.stateVersion = Symbol()),
      (t = C.onStoreChange) === null || t === void 0 || t.call(C);
  });
}
function X(C, t) {
  if ((t === void 0 && (t = "observed"), b())) return C();
  var e = H1.default.useRef(null);
  if (!e.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (n) {
        return (
          P.unregister(r),
          (r.onStoreChange = n),
          r.reaction || (i2(r), (r.stateVersion = Symbol())),
          function () {
            var c;
            (r.onStoreChange = null),
              (c = r.reaction) === null || c === void 0 || c.dispose(),
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
  o.reaction || (i2(o), P.register(e, o, o)),
    H1.default.useDebugValue(o.reaction, r2),
    (0, l2.useSyncExternalStore)(o.subscribe, o.getSnapshot, O2);
  var i, l;
  if (
    (o.reaction.track(function () {
      try {
        i = C();
      } catch (n) {
        l = n;
      }
    }),
    l)
  )
    throw l;
  return i;
}
var E = u(V());
var c2 = typeof Symbol == "function" && Symbol.for,
  n2 = c2
    ? Symbol.for("react.forward_ref")
    : typeof E.forwardRef == "function" &&
      (0, E.forwardRef)(function (C) {
        return null;
      }).$$typeof,
  s2 = c2
    ? Symbol.for("react.memo")
    : typeof E.memo == "function" &&
      (0, E.memo)(function (C) {
        return null;
      }).$$typeof;
function m1(C, t) {
  var e;
  if (s2 && C.$$typeof === s2)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (b()) return C;
  var r = (e = t?.forwardRef) !== null && e !== void 0 ? e : !1,
    o = C,
    i = C.displayName || C.name;
  if (
    n2 &&
    C.$$typeof === n2 &&
    ((r = !0), (o = C.render), typeof o != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var l = function (n, c) {
    return X(function () {
      return o(n, c);
    }, i);
  };
  return (
    (l.displayName = C.displayName),
    Object.defineProperty(l, "name", {
      value: C.name,
      writable: !0,
      configurable: !0,
    }),
    C.contextTypes && (l.contextTypes = C.contextTypes),
    r && (l = (0, E.forwardRef)(l)),
    (l = (0, E.memo)(l)),
    U2(C, l),
    l
  );
}
var F2 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function U2(C, t) {
  Object.keys(C).forEach(function (e) {
    F2[e] || Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(C, e));
  });
}
function v1(C) {
  var t = C.children,
    e = C.render,
    r = t || e;
  return typeof r != "function" ? null : X(r);
}
v1.displayName = "Observer";
var j2 = u(V());
var X2 = u(V());
var Y2 = u(V());
var V1;
o1(k1.unstable_batchedUpdates);
var l4 =
  (V1 = P.finalizeAllImmediately) !== null && V1 !== void 0
    ? V1
    : function () {};
function $2(C, t) {
  return t === void 0 && (t = "observed"), X(C, t);
}
var x = u(V());
function Q2(C, t) {
  if (u2(C, t)) return !0;
  if (typeof C != "object" || C === null || typeof t != "object" || t === null)
    return !1;
  var e = Object.keys(C),
    r = Object.keys(t);
  if (e.length !== r.length) return !1;
  for (var o = 0; o < e.length; o++)
    if (!Object.hasOwnProperty.call(t, e[o]) || !u2(C[e[o]], t[e[o]]))
      return !1;
  return !0;
}
function u2(C, t) {
  return C === t ? C !== 0 || 1 / C === 1 / t : C !== C && t !== t;
}
var p2 = Symbol("patchMixins"),
  H2 = Symbol("patchedDefinition");
function q2(C, t) {
  var e = (C[p2] = C[p2] || {}),
    r = (e[t] = e[t] || {});
  return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
}
function d2(C, t) {
  for (
    var e = this, r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2;
    i < r;
    i++
  )
    o[i - 2] = arguments[i];
  t.locks++;
  try {
    var l;
    return C != null && (l = C.apply(this, o)), l;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (n) {
          n.apply(e, o);
        });
  }
}
function L2(C, t) {
  var e = function () {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    d2.call.apply(d2, [this, C, t].concat(i));
  };
  return e;
}
function K2(C, t, e) {
  var r = q2(C, t);
  r.methods.indexOf(e) < 0 && r.methods.push(e);
  var o = Object.getOwnPropertyDescriptor(C, t);
  if (!(o && o[H2])) {
    var i = C[t],
      l = m2(C, t, o ? o.enumerable : void 0, r, i);
    Object.defineProperty(C, t, l);
  }
}
function m2(C, t, e, r, o) {
  var i,
    l = L2(o, r);
  return (
    (i = {}),
    (i[H2] = !0),
    (i.get = function () {
      return l;
    }),
    (i.set = function (c) {
      if (this === C) l = L2(c, r);
      else {
        var d = m2(this, t, e, r, c);
        Object.defineProperty(this, t, d);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = e),
    i
  );
}
var f2 = Symbol("ObserverAdministration"),
  g2 = Symbol("isMobXReactObserver");
function w1(C) {
  var t;
  return (t = C[f2]) != null
    ? t
    : (C[f2] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: x1(C.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function t3(C) {
  var t = C.prototype;
  if (C[g2]) {
    var e = x1(C);
    throw new Error(
      "The provided component class (" +
        e +
        ") has already been declared as an observer component.",
    );
  } else C[g2] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (C.__proto__ !== x.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = M2;
    else if (t.shouldComponentUpdate !== M2)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var r = t.render;
  if (typeof r != "function") {
    var o = x1(C);
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
        value: b() ? r : e3.call(this, r),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var l = this;
      if (0) var n;
      var c = w1(this);
      return (
        (c.mounted = !0),
        P.unregister(this),
        (c.forceUpdate = function () {
          return l.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    K2(t, "componentWillUnmount", function () {
      var l;
      if (!b()) {
        var n = w1(this);
        (l = n.reaction) == null || l.dispose(),
          (n.reaction = null),
          (n.forceUpdate = null),
          (n.mounted = !1),
          (n.reactionInvalidatedBeforeMount = !1);
      }
    }),
    C
  );
}
function x1(C) {
  return C.displayName || C.name || "<component>";
}
function e3(C) {
  var t = C.bind(this),
    e = w1(this);
  function r() {
    e.reaction ||
      ((e.reaction = C3(e)), e.mounted || P.register(this, e, this));
    var o = void 0,
      i = void 0;
    if (
      (e.reaction.track(function () {
        try {
          i = $1(!1, t);
        } catch (l) {
          o = l;
        }
      }),
      o)
    )
      throw o;
    return i;
  }
  return r;
}
function C3(C) {
  return new C1(C.name + ".render()", function () {
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
function M2(C, t) {
  return (
    b() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== t ? !0 : !Q2(this.props, C)
  );
}
function S1(C, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    C.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(x.Component, C) ||
    Object.prototype.isPrototypeOf.call(x.PureComponent, C)
      ? t3(C)
      : m1(C)
  );
}
function Z1() {
  return (
    (Z1 = Object.assign
      ? Object.assign.bind()
      : function (C) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (C[r] = e[r]);
          }
          return C;
        }),
    Z1.apply(this, arguments)
  );
}
function r3(C, t) {
  if (C == null) return {};
  var e = {},
    r = Object.keys(C),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (e[o] = C[o]);
  return e;
}
var o3 = ["children"],
  k2 = x.default.createContext({});
function i3(C) {
  var t = C.children,
    e = r3(C, o3),
    r = x.default.useContext(k2),
    o = x.default.useRef(Z1({}, r, e)),
    i = o.current;
  if (0) var l;
  return x.default.createElement(k2.Provider, { value: i }, t);
}
i3.displayName = "MobXProvider";
var V4 = Number.parseInt(x.default.version.split(".")[0]);
if (!x.Component) throw new Error("mobx-react requires React to be available");
if (!q) throw new Error("mobx-react requires mobx to be available");
var v2 = Object.seal({ onMoveUp: i1, onMoveDown: i1 }),
  Z4 = Object.seal({ onMoveRight: i1, onMoveLeft: i1 });
function i1(C, t) {
  if (C.is_repeat) return !1;
  let e = t.GetRelativeDirection(C.button);
  return e == 1 ? t.BFocusFirstChild(0) : e == 2 ? t.BFocusLastChild(0) : !1;
}
function S4(C) {
  return C.Element.checkVisibility();
}
var f = u(V());
var V2 = u(V());
var v = {
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
var y1 = u(w()),
  b1 = V2.forwardRef((C, t) => {
    let { className: e, contextMenuStyles: r, disabled: o, ...i } = C;
    return (0, y1.jsx)("div", {
      ...i,
      ref: t,
      className: A(
        e,
        (r || v).contextMenuItem,
        "contextMenuItem",
        o && "disabled",
      ),
    });
  });
b1.displayName = "MenuItem";
function w2(C, t = !0) {
  return function (e, r, o) {
    let i = o.value;
    o.value = function (...l) {
      let n = this[r + "_DebounceProperties"];
      n === void 0 &&
        (n = this[r + "_DebounceProperties"] = { hTimer: void 0, nPending: 0 }),
        n.hTimer === void 0
          ? (t ? i.apply(this, l) : (n.nPending += 1),
            (n.hTimer = window.setInterval(() => {
              n.nPending > 0
                ? (i.apply(this, l), (n.nPending = 0))
                : (window.clearInterval(n.hTimer), (n.hTimer = void 0));
            }, C)))
          : (n.nPending += 1);
    };
  };
}
var h = u(w()),
  l1 = f.createContext(null),
  G = class extends f.Component {
    m_navRef = J1();
    m_divRef = f.createRef();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        j1(this.props.refInstance, this.instance);
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
          cancelText: i,
          refInstance: l,
          bForceDesktopPresentation: n,
          footer: c,
          ...d
        } = this.props,
        M = this.context.styles ?? v,
        k = i ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !n) {
        let H = () => {
          o && o(), this.instance.Hide();
        };
        return (0, h.jsxs)(M1, {
          ...d,
          className: A(
            M.contextMenuContents,
            { [M.hasSubMenu]: this.instance.BIsSubMenuVisible() },
            e,
          ),
          "flow-children": "column",
          onMoveLeft: this.HideIfSubmenu,
          onCancel: this.instance.BIsSubMenu() ? this.HideMenu : H,
          style: {
            overflowY: this.instance.BIsSubMenuVisible() ? "hidden" : void 0,
          },
          navEntryPreferPosition: 4,
          navRef: this.m_navRef,
          ref: this.m_divRef,
          ...v2,
          children: [
            t,
            !this.instance.BIsSubMenu() &&
              (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsx)(Z2, {}),
                  (0, h.jsx)(g, {
                    className: M.Cancel,
                    onSelected: H,
                    children: Y(k),
                  }),
                  c,
                ],
              }),
            this.instance.BIsSubMenuVisible() &&
              (0, h.jsx)("div", {
                className: M.contextMenuFade,
                onClick: () => this.instance.HideSubMenu(),
              }),
          ],
        });
      } else
        return (0, h.jsx)("div", {
          ...d,
          ref: this.m_divRef,
          className: A(
            {
              [M.contextMenuContents]: !0,
              [M.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [M.ForceDesktop]: n,
            },
            e,
          ),
          children: t,
        });
    }
  };
D1(G, "contextType", l1),
  p([L], G.prototype, "HideIfSubmenu", 1),
  p([L], G.prototype, "HideMenu", 1),
  (G = p([S1], G));
var g = class extends f.PureComponent {
  static contextType = l1;
  m_ref = f.createRef();
  m_refDiv = f.createRef();
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
      i = this.context?.styles ?? v;
    return this.context.presentation == 1
      ? (0, h.jsx)(M1, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ...o,
          className: A(
            this.props.className,
            i.contextMenuItem,
            "contextMenuItem",
            this.props.disabled && "disabled",
            this.props.selected && i.Selected,
            this.props.tone == "positive" && i.Positive,
            this.props.tone == "emphasis" && i.Emphasis,
            this.props.tone == "destructive" && i.Destructive,
          ),
          focusClassName: i.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: r,
          unselectable: this.props.unselectable,
          role: o.role ?? "option",
          "aria-selected": this.props.selected ?? !1,
          children: this.props.children,
        })
      : (0, h.jsx)(b1, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ...o,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: o.role ?? "option",
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
p([L], g.prototype, "OnClick", 1),
  p([L], g.prototype, "OnOKButton", 1),
  p([L], g.prototype, "OnMouseEnter", 1),
  p([L], g.prototype, "Focus", 1);
function Z2(C) {
  let e = f.useContext(l1).styles ?? v;
  return (0, h.jsx)("div", { className: e.ContextMenuSeparator });
}
var K4 = (C) => {
    let t = K1();
    return (0, h.jsx)(_, { ...C, bInGamepadUI: t });
  },
  _ = class extends f.PureComponent {
    static contextType = l1;
    m_refItem = f.createRef();
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
      return (0, h.jsx)(G, {
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
          bInGamepadUI: i,
          ...l
        } = this.props,
        n = this.context.styles ?? v;
      return (0, h.jsxs)(g, {
        ...l,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: e && !this.state.bActive,
        className: A(o, n.SubMenu, this.state.bActive && n.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, h.jsx)("div", { className: n.Label, children: t }),
          (0, h.jsx)("div", {
            className: n.Arrow,
            children: (0, h.jsx)(t2, {}),
          }),
        ],
      });
    }
  };
p([L], _.prototype, "OnSubMenuMouseEnter", 1),
  p([L], _.prototype, "OnSubMenuHidden", 1),
  p([L], _.prototype, "ShowSubMenu", 1),
  p([L], _.prototype, "RenderSubMenu", 1),
  p([L], _.prototype, "OnMouseEnter", 1),
  p([L], _.prototype, "OnClick", 1);
var R = class extends f.Component {
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
      S.IN_CLIENT && this.props.popup && this.m_elMenu
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
      !(t.relatedTarget && D(t.currentTarget, t.relatedTarget)) &&
      !(
        t.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(t.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let e = s3() ? 150 : 0;
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
        !D(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
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
    let i = this.props.popup != null,
      l = this.parentWin;
    if (!l || (o && l.getComputedStyle(o).display === "none")) return;
    let n = this.props.clientX,
      c = this.props.clientY,
      d = 0,
      M = 0,
      k = l.innerWidth,
      H = l.innerHeight,
      u1 = 1,
      T = o?.getBoundingClientRect();
    if (i)
      if (
        (!e.bScreenCoordinates &&
          n !== void 0 &&
          c !== void 0 &&
          ((n += l.screenLeft), (c += l.screenTop)),
        T && (T = Y1(l, T)),
        e.targetMonitor)
      )
        (u1 = e.targetMonitor.flMonitorScale),
          (d = e.targetMonitor.nScreenLeft),
          (M = e.targetMonitor.nScreenTop),
          (k = e.targetMonitor.nScreenWidth),
          (H = e.targetMonitor.nScreenHeight);
      else {
        let m = l.screen,
          T1 = 0,
          N1 = 0;
        m.availLeft && (T1 = m.availLeft),
          m.availTop && (N1 = m.availTop),
          (d = T1),
          (M = N1),
          (k = m.availWidth),
          (H = m.availHeight);
      }
    (e.bOverlapHorizontal || e.bOverlapVertical) && (n = c = void 0);
    let B = r.getBoundingClientRect();
    if (e.flGamepadScale && e.flGamepadScale > 0) {
      let m = e.flGamepadScale;
      B = new DOMRect(B.x * m, B.y * m, B.width * m, B.height * m);
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
      O = n ?? T.left,
      F = n ?? T.right,
      N = B.width;
    e.bMatchWidth && ((N = F - O), (s.menuWidth = N)),
      e.bGrowToElementWidth && (s.menuMinWidth = Math.max(N, F - O));
    let W1 = (e.bOverlapHorizontal ? F : O) - d - N,
      p1 = W1 > 0,
      A1 = d + k - (e.bOverlapHorizontal ? O : F) - N,
      d1 = A1 > 0,
      L1 = (e.bPreferPopLeft || !d1) && p1;
    !p1 &&
      !d1 &&
      ((L1 = p1 > d1),
      e.bFitToWindow && ((N += (L1 ? W1 : A1) - 8), (s.menuWidth = N))),
      L1
        ? (s.menuRight = k - (e.bOverlapHorizontal ? F : O))
        : (s.menuLeft = e.bOverlapHorizontal ? O : F);
    let J = c ?? T.top,
      $ = c ?? T.bottom,
      W = r.scrollHeight;
    e.bMatchHeight && ((W = $ - J), (s.menuHeight = W));
    let f1 = (e.bOverlapVertical ? $ : J) - M - W,
      P1 = f1 > 0,
      g1 = M + H - (e.bOverlapVertical ? J : $) - W,
      E1 = g1 > 0,
      e1 = (e.bPreferPopTop || !E1) && P1 && !e.bDisablePopTop;
    if (!P1 && !E1) {
      let m =
        e.bShiftToFitWindow !== void 0
          ? e.bShiftToFitWindow
          : !!e.bFitToWindow && !e.bOverlapHorizontal;
      (e1 = f1 > g1 && !e.bDisablePopTop),
        m && (e1 ? (s.menuTop = 4) : (s.menuBottom = 4)),
        e.bFitToWindow &&
          (m ? (W = Math.min(W, H - 8)) : (W += e1 ? f1 : g1),
          (s.menuHeight = W - 8));
    }
    s.menuBottom === void 0 &&
      s.menuTop === void 0 &&
      (e1
        ? (s.menuBottom = H - (e.bOverlapVertical ? $ : J))
        : (s.menuTop = e.bOverlapVertical ? J : $)),
      i
        ? (s.menuHeight || (s.menuHeight = B.height),
          s.menuWidth || (s.menuWidth = B.width),
          s.menuBottom &&
            !s.menuTop &&
            ((s.menuTop = H - s.menuBottom - s.menuHeight),
            (s.menuBottom = void 0)),
          s.menuRight &&
            !s.menuLeft &&
            ((s.menuLeft = k - s.menuRight - s.menuWidth),
            (s.menuRight = void 0)))
        : l.getComputedStyle(r).position != "fixed" &&
          (s.menuLeft && (s.menuLeft += l.scrollX),
          s.menuTop && (s.menuTop += l.scrollY),
          s.menuBottom &&
            (s.menuBottom +=
              l.document.body.clientHeight - l.scrollY - l.innerHeight),
          s.menuRight &&
            (s.menuRight +=
              l.document.body.clientWidth - l.scrollX - l.innerWidth)),
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
        let i = r.flGamepadScale || 1;
        o = (r.targetMonitor.flMonitorScale ?? 1) / i;
      }
      e?.SteamClient.Window.MoveTo(this.state.menuLeft, this.state.menuTop, o),
        e?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          o,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((o) => {
      let i = this.state.menuLeft - this.parentWin.screenX,
        l = this.state.menuTop - this.parentWin.screenY;
      try {
        e?.SteamClient.Window.PositionWindowRelative(
          o,
          i,
          l,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (n) {
        console.error(n);
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
          (t.minWidth = this.state.menuMinWidth))
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
    let e = this.props.options.strClassName || v.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (e += " visible"),
      (e += " " + v.ContextMenuPosition),
      (0, h.jsx)("div", {
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
p([L], R.prototype, "BindMenuElement", 1),
  p([L, w2(100)], R.prototype, "OnMenuMutation", 1),
  p([L], R.prototype, "OnWindowResize", 1),
  p([L], R.prototype, "OnBlur", 1),
  p([L], R.prototype, "OnKeyDown", 1),
  (R = p([S1], R));
function t5(C) {
  return (0, h.jsx)("div", { className: v.ContextMenuMouseOverlay });
}
function l3(C, t) {
  let e = t.createEvent("HTMLEvents");
  e.initEvent("change", !0, !1), C.dispatchEvent(e);
}
function e5(C) {
  let t = [],
    e = X1(C),
    r = e.getSelection(),
    o = r && r.rangeCount > 0 && r.toString().length > 0,
    i = C.target,
    l = !1,
    n = C.clientY,
    c = C.clientX;
  if (
    (i &&
      "tagName" in i &&
      (i.tagName == "INPUT" || i.tagName == "TEXTAREA") &&
      (l = !0),
    S.IN_CLIENT && l && j(e, "Browser.GetSpellingSuggestions"))
  ) {
    let [d, ...M] = e.SteamClient.Browser.GetSpellingSuggestions(),
      k = i;
    k &&
      M.forEach((H, u1) => {
        t.push(
          (0, h.jsx)(
            g,
            {
              onSelected: () => {
                k.setRangeText(H),
                  l3(k, e.document),
                  k.setSelectionRange(k.selectionEnd, k.selectionEnd),
                  i.focus();
              },
              className: v.NoSeparation,
              children: H,
            },
            `spelling_${u1}_${H}`,
          ),
        );
      }),
      d &&
        j(e, "Browser.AddWordToDictionary") &&
        ((d = d.trim()),
        t.push(
          (0, h.jsx)(
            g,
            {
              onSelected: () => e.SteamClient.Browser.AddWordToDictionary(d),
              children: Y(
                "#ContextMenu_AddToDictionary",
                d.length < 30 ? d : d.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${d}`,
          ),
        ));
  }
  if (
    ((e.document.queryCommandEnabled("cut") || (o && l)) &&
      t.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              e.document.execCommand("cut");
            },
            children: Y("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (e.document.queryCommandEnabled("copy") || o) &&
      t.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              e.document.execCommand("copy");
            },
            className: v.NoSeparation,
            children: Y("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    S.IN_CLIENT &&
      l &&
      j(e, "Browser.Paste") &&
      t.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              i.focus(), e.SteamClient.Browser.Paste();
            },
            className: v.NoSeparation,
            children: Y("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    S.IN_CLIENT && S.DEV_MODE)
  ) {
    let d = [];
    j(e, "Browser.OpenDevTools") &&
      d.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              i.focus(), e.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      j(e, "Browser.InspectElement") &&
        d.push(
          (0, h.jsx)(
            g,
            {
              onSelected: () => {
                i.focus(), e.SteamClient.Browser.InspectElement(n, c);
              },
              className: v.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      d.length > 0 &&
        (t.push((0, h.jsx)(Z2, {}, "devtools-separator")), t.push(...d));
  }
  if (t.length) S2((0, h.jsx)(G, { children: t }), C, { bRootContextMenu: !0 });
  else {
    if (C.shiftKey) return;
    C.preventDefault(), C.stopPropagation();
  }
}
var n3 = "EnableContextMenuBlurDelay3";
function s3() {
  return (window.localStorage && window.localStorage.getItem(n3)) === "true";
}
var z = class z {
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
    r1(this), (this.m_ContextMenuManager = t), (this.m_rctElement = e);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = z.s_nNextKeyValue), z.s_nNextKeyValue++),
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
        (this.m_submenu = new R1(this, e(), t, this.m_options.bForcePopup)),
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
      ? D(this.m_element, t)
      : D(this.m_popupContextMenu?.root_element, t);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : D(this.m_element, this.m_element?.ownerDocument.activeElement);
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
p([q], z.prototype, "m_bVisible", 2), p([q.ref], z.prototype, "m_rctLabel", 2);
var K = z,
  n1 = class extends K {
    constructor(t, e, r, o, i, l) {
      super(t, e),
        (this.m_options = l || {}),
        (this.m_position = {
          element: r,
          clientX: o,
          clientY: i,
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
  R1 = class extends K {
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
var s1 = class {
  m_callbacksMenusChanged = new O1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(t, e, r, o, i) {
    let l = new n1(this, t, e, r, o, i);
    return (
      i?.bCreateHidden &&
        (this.m_setHiddenMenus.add(l), this.m_callbacksMenusChanged.Dispatch()),
      l
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
      ? I1(this.m_rgActiveSubmenus, t) &&
        this.m_callbacksMenusChanged.Dispatch()
      : (U(t == this.m_ActiveMenu, "Call to hide inactive menu"),
        t == this.m_ActiveMenu &&
          (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
  }
  ReleaseHiddenMenu(t) {
    this.m_setHiddenMenus.delete(t);
  }
};
var _1 = class {
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
      return e || ((e = new s1()), this.m_mapManagers.set(t, e)), e;
    }
    SetMenuManager(t, e) {
      U(
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
  a3 = new _1();
function S2(C, t, e) {
  let r,
    o,
    i,
    l = t;
  if (l?.preventDefault && l?.stopPropagation) {
    if (l.shiftKey || (l.altKey && !e?.bRootContextMenu)) return null;
    l.preventDefault(),
      l.stopPropagation(),
      (i = l.currentTarget),
      (r = l.clientX),
      (o = l.clientY);
  } else i = t;
  let c = a3
    .GetContextMenuManagerFromWindow(i)
    .CreateContextMenuInstance(C, i, r, o, e);
  return c.Show(), e?.bCreateHidden && c.Hide(), c;
}
var a = u(w());
function R5(C) {
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
function _5(C) {
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
function G5(C) {
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
function B5(C) {
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
function W5(C) {
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
function A5(C) {
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
function P5(C) {
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
function E5(C) {
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
var a1 = u(V());
var y2 = u(w()),
  c1 = class c1 extends a1.Component {
    static GetScrollableClassname() {
      return "vt-scrollable";
    }
    m_observer = null;
    m_refElement = a1.createRef();
    m_elTracked = null;
    m_bPreviouslyIntersecting = !1;
    BTriggerOnce() {
      return (this.props.trigger || "once") == "once";
    }
    GetBoundingClientRect() {
      return this.m_refElement.current
        ? this.m_refElement.current.getBoundingClientRect()
        : null;
    }
    DestroyObserver() {
      this.m_observer &&
        (this.m_observer.disconnect(),
        (this.m_observer = null),
        (this.m_elTracked = null));
    }
    componentWillUnmount() {
      this.DestroyObserver();
    }
    componentDidMount() {
      this.UpdateObserver(null);
    }
    componentDidUpdate(t) {
      this.UpdateObserver(t);
    }
    UpdateObserver(t) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        t &&
        (t.rootMargin != this.m_observer.rootMargin ||
          t.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let e = this.m_refElement.current;
      if (
        (this.m_observer &&
          e != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && e)
      ) {
        let o = { root: this.FindScrollableAncestor(e) };
        this.props.rootMargin && (o.rootMargin = this.props.rootMargin),
          this.props.thresholds && (o.threshold = this.props.thresholds),
          (this.m_observer = e2(e, this.OnIntersection, o));
      }
      this.m_observer &&
        e &&
        e != this.m_elTracked &&
        (this.m_observer.observe(e), (this.m_elTracked = e));
    }
    FindScrollableAncestor(t) {
      return z1(t, (e) => {
        let r = this.props.bHorizontal
          ? window.getComputedStyle(e).overflowX
          : window.getComputedStyle(e).overflowY;
        return !!(
          r == "scroll" ||
          r == "auto" ||
          e.classList.contains(c1.GetScrollableClassname())
        );
      });
    }
    OnIntersection(t, e) {
      let r = !1;
      for (let o of t)
        if (o.isIntersecting) {
          r = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != r &&
        ((this.m_bPreviouslyIntersecting = r),
        this.props.onVisibilityChange && this.props.onVisibilityChange(r),
        r && this.BTriggerOnce() && this.DestroyObserver());
    }
    render() {
      let {
        onVisibilityChange: t,
        rootMargin: e,
        trigger: r,
        bHorizontal: o,
        ...i
      } = this.props;
      return (0, y2.jsx)("div", {
        ref: this.m_refElement,
        ...i,
        children: this.props.children,
      });
    }
  };
p([L], c1.prototype, "OnIntersection", 1);
var b2 = c1;
var R2 = u(V());
var h3 = u(V());
var t1 = class C {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(t, e, r = null, o = null) {
    (C.sm_strDomain = t),
      (C.sm_strController = e),
      (C.sm_strMethod = r),
      (C.sm_strSubmethod = o),
      (C.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let t = { domain: C.sm_strDomain, controller: C.sm_strController };
    return (
      C.sm_strMethod && (t.method = C.sm_strMethod),
      C.sm_strSubmethod && (t.submethod = C.sm_strSubmethod),
      t
    );
  }
  static InstrumentLink(t, e, r = null) {
    let o = C.GetLinkParam(e, r);
    return Q.AddNavParamToURL(t, o);
  }
  static GetLinkParam(t, e = null) {
    let r;
    if (typeof t != "string") {
      if (t.domain) return Q.GetLinkParam(t, e);
      r = t.feature || "";
    }
    let o;
    if (!C.sm_strComputedLinkPrefix && !C.ComputeStaticLinkPrefix())
      return null;
    o = C.sm_strComputedLinkPrefix;
    let i = Q.EncodeEventComponent(r);
    return i && ((o += "_" + i), e && (o += "_" + e)), o;
  }
  static ComputeStaticLinkPrefix() {
    return C.sm_strDomain
      ? ((C.sm_strComputedLinkPrefix = Q.ComputeLinkPrefix(
          C.sm_strDomain,
          C.sm_strController,
          C.sm_strMethod,
          C.sm_strSubmethod,
        )),
        !0)
      : (U(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var G1 = u(V()),
  u3 = u(w()),
  i6 = G1.createContext({});
var _2 = u(w());
function p3(C) {
  let { children: t, ...e } = C,
    r = U1(),
    o = R2.useMemo(
      () => ({ ...t1.GetDefaultParams(), ...r, ...e }),
      [r, e.domain, e.controller, e.method, e.submethod, e.feature, e.depth],
    );
  return (0, _2.jsx)(F1, { ...o, children: t });
}
export {
  $2 as a,
  S1 as b,
  S4 as c,
  v as d,
  w2 as e,
  l1 as f,
  G as g,
  g as h,
  Z2 as i,
  K4 as j,
  R as k,
  t5 as l,
  e5 as m,
  s1 as n,
  a3 as o,
  S2 as p,
  m3 as q,
  R5 as r,
  _5 as s,
  G5 as t,
  B5 as u,
  W5 as v,
  A5 as w,
  P5 as x,
  E5 as y,
  p3 as z,
  b2 as A,
};

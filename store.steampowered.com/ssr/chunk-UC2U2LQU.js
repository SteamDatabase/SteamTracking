import { a as W2 } from "./chunk-B5RNOQS5.js";
import { e as t2 } from "./chunk-NNUOHECM.js";
import { a as P } from "./chunk-KQWHCFUT.js";
import {
  a as q,
  b as $1,
  c as C1,
  f as K1,
  g as Q1,
  i as o1,
  s as j,
} from "./chunk-KGNKBFOL.js";
import { a as T2 } from "./chunk-UNR7BBC7.js";
import { a as f1 } from "./chunk-GEYKXBLV.js";
import { F as z1, l as Y } from "./chunk-N4GV4AA3.js";
import { c as e2 } from "./chunk-AQKEHZKS.js";
import {
  A as X1,
  a as Y1,
  q as D,
  s as j1,
  u as J1,
} from "./chunk-NAUADMRV.js";
import { c as q1 } from "./chunk-LSG55JQS.js";
import {
  h as U,
  j as I1,
  o as F1,
  s as L,
  t as Q,
  v as O1,
  w as U1,
} from "./chunk-DUVL73J7.js";
import { j as R, p as V } from "./chunk-5OHWYFPA.js";
import { a as v } from "./chunk-6QDSPHEZ.js";
import { c as P2, e as h, g as d, h as D1 } from "./chunk-I6KD5PTY.js";
var v3 = P2((h1) => {
  "use strict";
  h1.byteLength = k3;
  h1.toByteArray = f3;
  h1.fromByteArray = m3;
  var S = [],
    w = [],
    L3 = typeof Uint8Array < "u" ? Uint8Array : Array,
    G1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (I = 0, G2 = G1.length; I < G2; ++I)
    (S[I] = G1[I]), (w[G1.charCodeAt(I)] = I);
  var I, G2;
  w[45] = 62;
  w[95] = 63;
  function A2(r) {
    var t = r.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var e = r.indexOf("=");
    e === -1 && (e = t);
    var C = e === t ? 0 : 4 - (e % 4);
    return [e, C];
  }
  function k3(r) {
    var t = A2(r),
      e = t[0],
      C = t[1];
    return ((e + C) * 3) / 4 - C;
  }
  function g3(r, t, e) {
    return ((t + e) * 3) / 4 - e;
  }
  function f3(r) {
    var t,
      e = A2(r),
      C = e[0],
      o = e[1],
      i = new L3(g3(r, C, o)),
      n = 0,
      l = o > 0 ? C - 4 : C,
      a;
    for (a = 0; a < l; a += 4)
      (t =
        (w[r.charCodeAt(a)] << 18) |
        (w[r.charCodeAt(a + 1)] << 12) |
        (w[r.charCodeAt(a + 2)] << 6) |
        w[r.charCodeAt(a + 3)]),
        (i[n++] = (t >> 16) & 255),
        (i[n++] = (t >> 8) & 255),
        (i[n++] = t & 255);
    return (
      o === 2 &&
        ((t = (w[r.charCodeAt(a)] << 2) | (w[r.charCodeAt(a + 1)] >> 4)),
        (i[n++] = t & 255)),
      o === 1 &&
        ((t =
          (w[r.charCodeAt(a)] << 10) |
          (w[r.charCodeAt(a + 1)] << 4) |
          (w[r.charCodeAt(a + 2)] >> 2)),
        (i[n++] = (t >> 8) & 255),
        (i[n++] = t & 255)),
      i
    );
  }
  function M3(r) {
    return S[(r >> 18) & 63] + S[(r >> 12) & 63] + S[(r >> 6) & 63] + S[r & 63];
  }
  function _3(r, t, e) {
    for (var C, o = [], i = t; i < e; i += 3)
      (C =
        ((r[i] << 16) & 16711680) +
        ((r[i + 1] << 8) & 65280) +
        (r[i + 2] & 255)),
        o.push(M3(C));
    return o.join("");
  }
  function m3(r) {
    for (
      var t, e = r.length, C = e % 3, o = [], i = 16383, n = 0, l = e - C;
      n < l;
      n += i
    )
      o.push(_3(r, n, n + i > l ? l : n + i));
    return (
      C === 1
        ? ((t = r[e - 1]), o.push(S[t >> 2] + S[(t << 4) & 63] + "=="))
        : C === 2 &&
          ((t = (r[e - 2] << 8) + r[e - 1]),
          o.push(S[t >> 10] + S[(t >> 4) & 63] + S[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
});
var r2 = h(v());
if (!r2.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!o1)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var M1 = h(T2());
function E2(r) {
  r();
}
function i1(r) {
  r || (r = E2), K1({ reactionScheduler: r });
}
var _1 = h(v());
function C2(r) {
  return Q1(r);
}
var N2 = !1;
function x() {
  return N2;
}
var D2 = 1e4,
  I2 = 1e4,
  F2 = (function () {
    function r(t) {
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
          value: function (C) {
            C === void 0 && (C = D2),
              clearTimeout(e.sweepTimeout),
              (e.sweepTimeout = void 0);
            var o = Date.now();
            e.registrations.forEach(function (i, n) {
              o - i.registeredAt >= C &&
                (e.finalize(i.value), e.registrations.delete(n));
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
      Object.defineProperty(r.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, e, C) {
          this.registrations.set(C, { value: e, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(r.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(r.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, I2));
        },
      }),
      r
    );
  })();
var o2 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : F2;
var T = new o2(function (r) {
  var t;
  (t = r.reaction) === null || t === void 0 || t.dispose(), (r.reaction = null);
});
var n2 = h(W2()),
  O2 = function () {};
function i2(r) {
  r.reaction = new C1("observer".concat(r.name), function () {
    var t;
    (r.stateVersion = Symbol()),
      (t = r.onStoreChange) === null || t === void 0 || t.call(r);
  });
}
function J(r, t) {
  if ((t === void 0 && (t = "observed"), x())) return r();
  var e = _1.default.useRef(null);
  if (!e.current) {
    var C = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (l) {
        return (
          T.unregister(C),
          (C.onStoreChange = l),
          C.reaction || (i2(C), (C.stateVersion = Symbol())),
          function () {
            var a;
            (C.onStoreChange = null),
              (a = C.reaction) === null || a === void 0 || a.dispose(),
              (C.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return C.stateVersion;
      },
    };
    e.current = C;
  }
  var o = e.current;
  o.reaction || (i2(o), T.register(e, o, o)),
    _1.default.useDebugValue(o.reaction, C2),
    (0, n2.useSyncExternalStore)(o.subscribe, o.getSnapshot, O2);
  var i, n;
  if (
    (o.reaction.track(function () {
      try {
        i = r();
      } catch (l) {
        n = l;
      }
    }),
    n)
  )
    throw n;
  return i;
}
var W = h(v());
var a2 = typeof Symbol == "function" && Symbol.for,
  l2 = a2
    ? Symbol.for("react.forward_ref")
    : typeof W.forwardRef == "function" &&
      (0, W.forwardRef)(function (r) {
        return null;
      }).$$typeof,
  s2 = a2
    ? Symbol.for("react.memo")
    : typeof W.memo == "function" &&
      (0, W.memo)(function (r) {
        return null;
      }).$$typeof;
function m1(r, t) {
  var e;
  if (s2 && r.$$typeof === s2)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (x()) return r;
  var C = (e = t?.forwardRef) !== null && e !== void 0 ? e : !1,
    o = r,
    i = r.displayName || r.name;
  if (
    l2 &&
    r.$$typeof === l2 &&
    ((C = !0), (o = r.render), typeof o != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var n = function (l, a) {
    return J(function () {
      return o(l, a);
    }, i);
  };
  return (
    (n.displayName = r.displayName),
    Object.defineProperty(n, "name", {
      value: r.name,
      writable: !0,
      configurable: !0,
    }),
    r.contextTypes && (n.contextTypes = r.contextTypes),
    C && (n = (0, W.forwardRef)(n)),
    (n = (0, W.memo)(n)),
    Y2(r, n),
    n
  );
}
var U2 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Y2(r, t) {
  Object.keys(r).forEach(function (e) {
    U2[e] || Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
  });
}
function v1(r) {
  var t = r.children,
    e = r.render,
    C = t || e;
  return typeof C != "function" ? null : J(C);
}
v1.displayName = "Observer";
var j2 = h(v());
var X2 = h(v());
var J2 = h(v());
var V1;
i1(M1.unstable_batchedUpdates);
var l4 =
  (V1 = T.finalizeAllImmediately) !== null && V1 !== void 0
    ? V1
    : function () {};
function K2(r, t) {
  return t === void 0 && (t = "observed"), J(r, t);
}
var H = h(v());
function Q2(r, t) {
  if (h2(r, t)) return !0;
  if (typeof r != "object" || r === null || typeof t != "object" || t === null)
    return !1;
  var e = Object.keys(r),
    C = Object.keys(t);
  if (e.length !== C.length) return !1;
  for (var o = 0; o < e.length; o++)
    if (!Object.hasOwnProperty.call(t, e[o]) || !h2(r[e[o]], t[e[o]]))
      return !1;
  return !0;
}
function h2(r, t) {
  return r === t ? r !== 0 || 1 / r === 1 / t : r !== r && t !== t;
}
var d2 = Symbol("patchMixins"),
  _2 = Symbol("patchedDefinition");
function q2(r, t) {
  var e = (r[d2] = r[d2] || {}),
    C = (e[t] = e[t] || {});
  return (C.locks = C.locks || 0), (C.methods = C.methods || []), C;
}
function p2(r, t) {
  for (
    var e = this, C = arguments.length, o = new Array(C > 2 ? C - 2 : 0), i = 2;
    i < C;
    i++
  )
    o[i - 2] = arguments[i];
  t.locks++;
  try {
    var n;
    return r != null && (n = r.apply(this, o)), n;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (l) {
          l.apply(e, o);
        });
  }
}
function L2(r, t) {
  var e = function () {
    for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++)
      i[n] = arguments[n];
    p2.call.apply(p2, [this, r, t].concat(i));
  };
  return e;
}
function t3(r, t, e) {
  var C = q2(r, t);
  C.methods.indexOf(e) < 0 && C.methods.push(e);
  var o = Object.getOwnPropertyDescriptor(r, t);
  if (!(o && o[_2])) {
    var i = r[t],
      n = m2(r, t, o ? o.enumerable : void 0, C, i);
    Object.defineProperty(r, t, n);
  }
}
function m2(r, t, e, C, o) {
  var i,
    n = L2(o, C);
  return (
    (i = {}),
    (i[_2] = !0),
    (i.get = function () {
      return n;
    }),
    (i.set = function (a) {
      if (this === r) n = L2(a, C);
      else {
        var p = m2(this, t, e, C, a);
        Object.defineProperty(this, t, p);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = e),
    i
  );
}
var k2 = Symbol("ObserverAdministration"),
  g2 = Symbol("isMobXReactObserver");
function H1(r) {
  var t;
  return (t = r[k2]) != null
    ? t
    : (r[k2] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: w1(r.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function e3(r) {
  var t = r.prototype;
  if (r[g2]) {
    var e = w1(r);
    throw new Error(
      "The provided component class (" +
        e +
        ") has already been declared as an observer component.",
    );
  } else r[g2] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (r.__proto__ !== H.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = f2;
    else if (t.shouldComponentUpdate !== f2)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var C = t.render;
  if (typeof C != "function") {
    var o = w1(r);
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
        value: x() ? C : r3.call(this, C),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var n = this;
      if (0) var l;
      var a = H1(this);
      return (
        (a.mounted = !0),
        T.unregister(this),
        (a.forceUpdate = function () {
          return n.forceUpdate();
        }),
        (!a.reaction || a.reactionInvalidatedBeforeMount) && a.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    t3(t, "componentWillUnmount", function () {
      var n;
      if (!x()) {
        var l = H1(this);
        (n = l.reaction) == null || n.dispose(),
          (l.reaction = null),
          (l.forceUpdate = null),
          (l.mounted = !1),
          (l.reactionInvalidatedBeforeMount = !1);
      }
    }),
    r
  );
}
function w1(r) {
  return r.displayName || r.name || "<component>";
}
function r3(r) {
  var t = r.bind(this),
    e = H1(this);
  function C() {
    e.reaction ||
      ((e.reaction = C3(e)), e.mounted || T.register(this, e, this));
    var o = void 0,
      i = void 0;
    if (
      (e.reaction.track(function () {
        try {
          i = $1(!1, t);
        } catch (n) {
          o = n;
        }
      }),
      o)
    )
      throw o;
    return i;
  }
  return C;
}
function C3(r) {
  return new C1(r.name + ".render()", function () {
    if (!r.mounted) {
      r.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      r.forceUpdate == null || r.forceUpdate();
    } catch {
      var t;
      (t = r.reaction) == null || t.dispose(), (r.reaction = null);
    }
  });
}
function f2(r, t) {
  return (
    x() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== t ? !0 : !Q2(this.props, r)
  );
}
function x1(r, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    r.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(H.Component, r) ||
    Object.prototype.isPrototypeOf.call(H.PureComponent, r)
      ? e3(r)
      : m1(r)
  );
}
function Z1() {
  return (
    (Z1 = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var C in e)
              Object.prototype.hasOwnProperty.call(e, C) && (r[C] = e[C]);
          }
          return r;
        }),
    Z1.apply(this, arguments)
  );
}
function o3(r, t) {
  if (r == null) return {};
  var e = {},
    C = Object.keys(r),
    o,
    i;
  for (i = 0; i < C.length; i++)
    (o = C[i]), !(t.indexOf(o) >= 0) && (e[o] = r[o]);
  return e;
}
var i3 = ["children"],
  M2 = H.default.createContext({});
function n3(r) {
  var t = r.children,
    e = o3(r, i3),
    C = H.default.useContext(M2),
    o = H.default.useRef(Z1({}, C, e)),
    i = o.current;
  if (0) var n;
  return H.default.createElement(M2.Provider, { value: i }, t);
}
n3.displayName = "MobXProvider";
var H4 = Number.parseInt(H.default.version.split(".")[0]);
if (!H.Component) throw new Error("mobx-react requires React to be available");
if (!q) throw new Error("mobx-react requires mobx to be available");
var v2 = Object.seal({ onMoveUp: n1, onMoveDown: n1 }),
  x4 = Object.seal({ onMoveRight: n1, onMoveLeft: n1 });
function n1(r, t) {
  if (r.is_repeat) return !1;
  let e = t.GetRelativeDirection(r.button);
  return e == 1 ? t.BFocusFirstChild(0) : e == 2 ? t.BFocusLastChild(0) : !1;
}
function S4(r) {
  return r.Element.checkVisibility();
}
var g = h(v());
var V2 = h(v());
var m = {
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
var b1 = h(V()),
  S1 = V2.forwardRef((r, t) => {
    let { className: e, contextMenuStyles: C, disabled: o, ...i } = r;
    return (0, b1.jsx)("div", {
      ...i,
      ref: t,
      className: P(
        e,
        (C || m).contextMenuItem,
        "contextMenuItem",
        o && "disabled",
      ),
    });
  });
S1.displayName = "MenuItem";
function H2(r, t = !0) {
  return function (e, C, o) {
    let i = o.value;
    o.value = function (...n) {
      let l = this[C + "_DebounceProperties"];
      l === void 0 &&
        (l = this[C + "_DebounceProperties"] = { hTimer: void 0, nPending: 0 }),
        l.hTimer === void 0
          ? (t ? i.apply(this, n) : (l.nPending += 1),
            (l.hTimer = window.setInterval(() => {
              l.nPending > 0
                ? (i.apply(this, n), (l.nPending = 0))
                : (window.clearInterval(l.hTimer), (l.hTimer = void 0));
            }, r)))
          : (l.nPending += 1);
    };
  };
}
var u = h(V()),
  l1 = g.createContext(null),
  E = class extends g.Component {
    m_navRef = z1();
    m_divRef = g.createRef();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        Y1(this.props.refInstance, this.instance);
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
          label: C,
          onCancel: o,
          cancelText: i,
          refInstance: n,
          bForceDesktopPresentation: l,
          footer: a,
          role: p = "menu",
          labelId: b,
          ...f
        } = this.props,
        k = this.context.styles ?? m,
        z = i ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !l) {
        let Z = () => {
          o && o(), this.instance.Hide();
        };
        return (0, u.jsxs)(f1, {
          ...f,
          className: P(
            k.contextMenuContents,
            { [k.hasSubMenu]: this.instance.BIsSubMenuVisible() },
            e,
          ),
          "flow-children": "column",
          onMoveLeft: this.HideIfSubmenu,
          onCancel: this.instance.BIsSubMenu() ? this.HideMenu : Z,
          style: {
            overflowY: this.instance.BIsSubMenuVisible() ? "hidden" : void 0,
          },
          navEntryPreferPosition: 4,
          navRef: this.m_navRef,
          ref: this.m_divRef,
          role: p,
          "aria-labelledby": C ? b : void 0,
          ...v2,
          children: [
            t,
            C &&
              (0, u.jsx)("div", {
                id: b,
                style: { display: "none" },
                children: C,
              }),
            !this.instance.BIsSubMenu() &&
              (0, u.jsxs)(u.Fragment, {
                children: [
                  (0, u.jsx)(x2, {}),
                  (0, u.jsx)(M, {
                    className: k.Cancel,
                    onSelected: Z,
                    children: j(z),
                  }),
                  a,
                ],
              }),
            this.instance.BIsSubMenuVisible() &&
              (0, u.jsx)("div", {
                className: k.contextMenuFade,
                onClick: () => this.instance.HideSubMenu(),
              }),
          ],
        });
      } else
        return (0, u.jsx)("div", {
          ...f,
          ref: this.m_divRef,
          className: P(
            {
              [k.contextMenuContents]: !0,
              [k.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [k.ForceDesktop]: l,
            },
            e,
          ),
          children: t,
        });
    }
  };
D1(E, "contextType", l1),
  d([L], E.prototype, "HideIfSubmenu", 1),
  d([L], E.prototype, "HideMenu", 1),
  (E = d([x1], E));
function Z2(r) {
  let t = g.useId();
  return (0, u.jsx)(E, { labelId: t, ...r });
}
var M = class extends g.PureComponent {
  static contextType = l1;
  m_ref = g.createRef();
  m_refDiv = g.createRef();
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
        onMoveRight: C,
        ...o
      } = this.props,
      i = this.context?.styles ?? m;
    return this.context.presentation == 1
      ? (0, u.jsx)(f1, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ...o,
          className: P(
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
          onMoveRight: C,
          unselectable: this.props.unselectable,
          role: o.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        })
      : (0, u.jsx)(S1, {
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
d([L], M.prototype, "OnClick", 1),
  d([L], M.prototype, "OnOKButton", 1),
  d([L], M.prototype, "OnMouseEnter", 1),
  d([L], M.prototype, "Focus", 1);
function x2(r) {
  let e = g.useContext(l1).styles ?? m;
  return (0, u.jsx)("div", {
    className: e.ContextMenuSeparator,
    role: "separator",
  });
}
var t5 = (r) => {
    let t = q1();
    return (0, u.jsx)(B, { ...r, bInGamepadUI: t });
  },
  B = class extends g.PureComponent {
    static contextType = l1;
    m_refItem = g.createRef();
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
        C = this.instance.ShowSubMenu(e, this.RenderSubMenu);
      return C
        ? (this.setState({ bActive: !0 }),
          C.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, u.jsx)(Z2, {
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
          children: C,
          className: o,
          bInGamepadUI: i,
          ...n
        } = this.props,
        l = this.context.styles ?? m;
      return (0, u.jsxs)(M, {
        ...n,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: e && !this.state.bActive,
        className: P(o, l.SubMenu, this.state.bActive && l.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, u.jsx)("div", { className: l.Label, children: t }),
          (0, u.jsx)("div", {
            className: l.Arrow,
            children: (0, u.jsx)(t2, {}),
          }),
        ],
      });
    }
  };
d([L], B.prototype, "OnSubMenuMouseEnter", 1),
  d([L], B.prototype, "OnSubMenuHidden", 1),
  d([L], B.prototype, "ShowSubMenu", 1),
  d([L], B.prototype, "RenderSubMenu", 1),
  d([L], B.prototype, "OnMouseEnter", 1),
  d([L], B.prototype, "OnClick", 1);
var y = class extends g.Component {
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
      R.IN_CLIENT && this.props.popup && this.m_elMenu
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
      let e = a3() ? 150 : 0;
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
      C = this.m_elMenu,
      o = this.props.element;
    if (!C) return;
    let i = this.props.popup != null,
      n = this.parentWin;
    if (!n || (o && n.getComputedStyle(o).display === "none")) return;
    let l = this.props.clientX,
      a = this.props.clientY,
      p = 0,
      b = 0,
      f = n.innerWidth,
      k = n.innerHeight,
      z = 1,
      Z = o?.getBoundingClientRect();
    if (i)
      if (
        (!e.bScreenCoordinates &&
          l !== void 0 &&
          a !== void 0 &&
          ((l += n.screenLeft), (a += n.screenTop)),
        Z && (Z = j1(n, Z)),
        e.targetMonitor)
      )
        (z = e.targetMonitor.flMonitorScale),
          (p = e.targetMonitor.nScreenLeft),
          (b = e.targetMonitor.nScreenTop),
          (f = e.targetMonitor.nScreenWidth),
          (k = e.targetMonitor.nScreenHeight);
      else {
        let _ = n.screen,
          E1 = 0,
          N1 = 0;
        _.availLeft && (E1 = _.availLeft),
          _.availTop && (N1 = _.availTop),
          (p = E1),
          (b = N1),
          (f = _.availWidth),
          (k = _.availHeight);
      }
    (e.bOverlapHorizontal || e.bOverlapVertical) && (l = a = void 0);
    let G = C.getBoundingClientRect();
    if (e.flGamepadScale && e.flGamepadScale > 0) {
      let _ = e.flGamepadScale;
      G = new DOMRect(G.x * _, G.y * _, G.width * _, G.height * _);
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
      F = l ?? Z.left,
      O = l ?? Z.right,
      N = G.width;
    e.bMatchWidth && ((N = O - F), (s.menuWidth = N)),
      e.bGrowToElementWidth && (s.menuMinWidth = Math.max(N, O - F));
    let A1 = (e.bOverlapHorizontal ? O : F) - p - N,
      d1 = A1 > 0,
      P1 = p + f - (e.bOverlapHorizontal ? F : O) - N,
      p1 = P1 > 0,
      L1 = (e.bPreferPopLeft || !p1) && d1;
    !d1 &&
      !p1 &&
      ((L1 = d1 > p1),
      e.bFitToWindow && ((N += (L1 ? A1 : P1) - 8), (s.menuWidth = N))),
      L1
        ? (s.menuRight = f - (e.bOverlapHorizontal ? O : F))
        : (s.menuLeft = e.bOverlapHorizontal ? F : O);
    let $ = a ?? Z.top,
      K = a ?? Z.bottom,
      A = C.scrollHeight;
    e.bMatchHeight && ((A = K - $), (s.menuHeight = A));
    let k1 = (e.bOverlapVertical ? K : $) - b - A,
      T1 = k1 > 0,
      g1 = b + k - (e.bOverlapVertical ? $ : K) - A,
      W1 = g1 > 0,
      r1 = (e.bPreferPopTop || !W1) && T1 && !e.bDisablePopTop;
    if (!T1 && !W1) {
      let _ =
        e.bShiftToFitWindow !== void 0
          ? e.bShiftToFitWindow
          : !!e.bFitToWindow && !e.bOverlapHorizontal;
      (r1 = k1 > g1 && !e.bDisablePopTop),
        _ && (r1 ? (s.menuTop = 4) : (s.menuBottom = 4)),
        e.bFitToWindow &&
          (_ ? (A = Math.min(A, k - 8)) : (A += r1 ? k1 : g1),
          (s.menuHeight = A - 8));
    }
    s.menuBottom === void 0 &&
      s.menuTop === void 0 &&
      (r1
        ? (s.menuBottom = k - (e.bOverlapVertical ? K : $))
        : (s.menuTop = e.bOverlapVertical ? $ : K)),
      i
        ? (s.menuHeight || (s.menuHeight = G.height),
          s.menuWidth || (s.menuWidth = G.width),
          s.menuBottom &&
            !s.menuTop &&
            ((s.menuTop = k - s.menuBottom - s.menuHeight),
            (s.menuBottom = void 0)),
          s.menuRight &&
            !s.menuLeft &&
            ((s.menuLeft = f - s.menuRight - s.menuWidth),
            (s.menuRight = void 0)))
        : n.getComputedStyle(C).position != "fixed" &&
          (s.menuLeft && (s.menuLeft += n.scrollX),
          s.menuTop && (s.menuTop += n.scrollY),
          s.menuBottom &&
            (s.menuBottom +=
              n.document.body.clientHeight - n.scrollY - n.innerHeight),
          s.menuRight &&
            (s.menuRight +=
              n.document.body.clientWidth - n.scrollX - n.innerWidth)),
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
      C = this.props.options;
    if (C.bScreenCoordinates) {
      let o = this.parentWin?.devicePixelRatio;
      if (C.targetMonitor) {
        let i = C.flGamepadScale || 1;
        o = (C.targetMonitor.flMonitorScale ?? 1) / i;
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
        n = this.state.menuTop - this.parentWin.screenY;
      try {
        e?.SteamClient.Window.PositionWindowRelative(
          o,
          i,
          n,
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
      let C = this.m_elMenu.ownerDocument.defaultView.devicePixelRatio;
      C != 1 &&
        (t.zoom = (this.props.options.targetMonitor.flMonitorScale ?? 1) / C);
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
    let e = this.props.options.strClassName || m.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (e += " visible"),
      (e += " " + m.ContextMenuPosition),
      (0, u.jsx)("div", {
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
d([L], y.prototype, "BindMenuElement", 1),
  d([L, H2(100)], y.prototype, "OnMenuMutation", 1),
  d([L], y.prototype, "OnWindowResize", 1),
  d([L], y.prototype, "OnBlur", 1),
  d([L], y.prototype, "OnKeyDown", 1),
  (y = d([x1], y));
function e5(r) {
  return (0, u.jsx)("div", { className: m.ContextMenuMouseOverlay });
}
function l3(r, t) {
  let e = t.createEvent("HTMLEvents");
  e.initEvent("change", !0, !1), r.dispatchEvent(e);
}
function r5(r) {
  let t = [],
    e = J1(r),
    C = e.getSelection(),
    o = C && C.rangeCount > 0 && C.toString().length > 0,
    i = r.target,
    n = !1,
    l = r.clientY,
    a = r.clientX;
  if (
    (i &&
      "tagName" in i &&
      (i.tagName == "INPUT" || i.tagName == "TEXTAREA") &&
      (n = !0),
    R.IN_CLIENT && n && Y(e, "Browser.GetSpellingSuggestions"))
  ) {
    let [p, ...b] = e.SteamClient.Browser.GetSpellingSuggestions(),
      f = i;
    f &&
      b.forEach((k, z) => {
        t.push(
          (0, u.jsx)(
            M,
            {
              onSelected: () => {
                f.setRangeText(k),
                  l3(f, e.document),
                  f.setSelectionRange(f.selectionEnd, f.selectionEnd),
                  i.focus();
              },
              className: m.NoSeparation,
              children: k,
            },
            `spelling_${z}_${k}`,
          ),
        );
      }),
      p &&
        Y(e, "Browser.AddWordToDictionary") &&
        ((p = p.trim()),
        t.push(
          (0, u.jsx)(
            M,
            {
              onSelected: () => e.SteamClient.Browser.AddWordToDictionary(p),
              children: j(
                "#ContextMenu_AddToDictionary",
                p.length < 30 ? p : p.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${p}`,
          ),
        ));
  }
  if (
    ((e.document.queryCommandEnabled("cut") || (o && n)) &&
      t.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              e.document.execCommand("cut");
            },
            children: j("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (e.document.queryCommandEnabled("copy") || o) &&
      t.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              e.document.execCommand("copy");
            },
            className: m.NoSeparation,
            children: j("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    R.IN_CLIENT &&
      n &&
      Y(e, "Browser.Paste") &&
      t.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              i.focus(), e.SteamClient.Browser.Paste();
            },
            className: m.NoSeparation,
            children: j("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    R.IN_CLIENT && R.DEV_MODE)
  ) {
    let p = [];
    Y(e, "Browser.OpenDevTools") &&
      p.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              i.focus(), e.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      Y(e, "Browser.InspectElement") &&
        p.push(
          (0, u.jsx)(
            M,
            {
              onSelected: () => {
                i.focus(), e.SteamClient.Browser.InspectElement(l, a);
              },
              className: m.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      p.length > 0 &&
        (t.push((0, u.jsx)(x2, {}, "devtools-separator")), t.push(...p));
  }
  if (t.length)
    S2((0, u.jsx)(Z2, { children: t }), r, { bRootContextMenu: !0 });
  else {
    if (r.shiftKey) return;
    r.preventDefault(), r.stopPropagation();
  }
}
var s3 = "EnableContextMenuBlurDelay3";
function a3() {
  return (window.localStorage && window.localStorage.getItem(s3)) === "true";
}
var X = class X {
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
    o1(this), (this.m_ContextMenuManager = t), (this.m_rctElement = e);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = X.s_nNextKeyValue), X.s_nNextKeyValue++),
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
  SetPosition(t, e, C) {
    (this.m_options = { ...this.m_options, ...C }),
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
d([q], X.prototype, "m_bVisible", 2), d([q.ref], X.prototype, "m_rctLabel", 2);
var t1 = X,
  s1 = class extends t1 {
    constructor(t, e, C, o, i, n) {
      super(t, e),
        (this.m_options = n || {}),
        (this.m_position = {
          element: C,
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
  R1 = class extends t1 {
    constructor(t, e, C, o) {
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
          element: C,
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
var a1 = class {
  m_callbacksMenusChanged = new F1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(t, e, C, o, i) {
    let n = new s1(this, t, e, C, o, i);
    return (
      i?.bCreateHidden &&
        (this.m_setHiddenMenus.add(n), this.m_callbacksMenusChanged.Dispatch()),
      n
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
      t.sort((e, C) => e.key - C.key)
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
var y1 = class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(t) {
      let e = t?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(e);
    }
    GetContextMenuManager(t) {
      let e = this.m_mapManagers.get(t);
      if (!e) {
        let C = t;
        for (; !e && C.opener; )
          (C = C.opener), (e = this.m_mapManagers.get(C));
      }
      return e || ((e = new a1()), this.m_mapManagers.set(t, e)), e;
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
  u3 = new y1();
function S2(r, t, e) {
  let C,
    o,
    i,
    n = t;
  if (n?.preventDefault && n?.stopPropagation) {
    if (n.shiftKey || (n.altKey && !e?.bRootContextMenu)) return null;
    n.preventDefault(),
      n.stopPropagation(),
      (i = n.currentTarget),
      (C = n.clientX),
      (o = n.clientY);
  } else i = t;
  let a = u3
    .GetContextMenuManagerFromWindow(i)
    .CreateContextMenuInstance(r, i, C, o, e);
  return a.Show(), e?.bCreateHidden && a.Hide(), a;
}
var c = h(V());
function A5(r) {
  let { direction: t, ...e } = r;
  switch (t) {
    case "up":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, c.jsx)("path", {
          d: "M17.98 10.23L3.20996 25H32.75L17.98 10.23Z",
          fill: "currentColor",
        }),
      });
    case "down":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, c.jsx)("path", {
          d: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
          fill: "currentColor",
        }),
      });
    case "left":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, c.jsx)("path", {
          d: "M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, c.jsx)("path", {
          d: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
          fill: "currentColor",
        }),
      });
  }
}
function P5(r) {
  let { direction: t, ...e } = r;
  switch (t) {
    case "up":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, c.jsx)("path", {
          fill: "currentColor",
          d: "M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z",
        }),
      });
    case "down":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, c.jsx)("path", {
          fill: "currentColor",
          d: "M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z",
        }),
      });
    case "left":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, c.jsx)("path", {
          d: "M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, c.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, c.jsx)("path", {
          d: "M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z",
          fill: "currentColor",
        }),
      });
  }
}
function T5(r) {
  return (0, c.jsx)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: (0, c.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.7 15.2077C31.703 12.5623 30.94 9.97259 29.5032 7.75136C28.0664 5.53014 26.0172 3.77242 23.6031 2.69048C21.189 1.60855 18.5133 1.24869 15.8992 1.65436C13.2851 2.06002 10.8443 3.21387 8.87163 4.97655C6.89899 6.73922 5.47888 9.03532 4.78281 11.5875C4.08673 14.1397 4.14447 16.8389 4.94905 19.359C5.75363 21.8791 7.27063 24.1124 9.31684 25.7891C11.363 27.4658 13.8509 28.5142 16.48 28.8077V34.5077L27.31 25.2477C28.6947 23.9675 29.7996 22.4147 30.5551 20.6869C31.3106 18.959 31.7004 17.0935 31.7 15.2077ZM15.3 7.06885L16.3075 16.9577H20.1309L21.1039 7.06885H15.3ZM20.6927 22.0125C20.6927 23.3774 19.5862 24.4838 18.2213 24.4838C16.8564 24.4838 15.7499 23.3774 15.7499 22.0125C15.7499 20.6475 16.8564 19.5411 18.2213 19.5411C19.5862 19.5411 20.6927 20.6475 20.6927 22.0125Z",
      fill: "currentColor",
    }),
  });
}
function W5(r) {
  let { alert: t, urgent: e, ...C } = r;
  return e
    ? (0, c.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...C,
        children: [
          (0, c.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
          }),
          (0, c.jsx)("path", {
            fill: "#FFC82C",
            d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
          }),
        ],
      })
    : t
      ? (0, c.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...C,
          children: [
            (0, c.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
            }),
            (0, c.jsx)("path", {
              fill: "#1A9FFF",
              d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
            }),
          ],
        })
      : (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...C,
          children: (0, c.jsxs)("g", {
            className: "SVGIcon_Notification",
            children: [
              (0, c.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z",
                fill: "currentColor",
              }),
              (0, c.jsx)("path", {
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
function E5(r) {
  return (0, c.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...r,
    children: (0, c.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
      fill: "currentColor",
    }),
  });
}
function N5(r) {
  return (0, c.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...r,
    children: [
      (0, c.jsx)("path", {
        d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
        fill: "currentColor",
      }),
      (0, c.jsx)("path", {
        d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
        fill: "currentColor",
      }),
    ],
  });
}
function D5(r) {
  return (0, c.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, c.jsx)("path", {
      d: "M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z",
      fill: "white",
    }),
  });
}
function I5(r) {
  return (0, c.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, c.jsx)("path", {
      d: "M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z",
      fill: "white",
    }),
  });
}
var u1 = h(v());
var R2 = h(V()),
  c1 = class c1 extends u1.Component {
    static GetScrollableClassname() {
      return "vt-scrollable";
    }
    m_observer = null;
    m_refElement = u1.createRef();
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
      return X1(t, (e) => {
        let C = this.props.bHorizontal
          ? window.getComputedStyle(e).overflowX
          : window.getComputedStyle(e).overflowY;
        return !!(
          C == "scroll" ||
          C == "auto" ||
          e.classList.contains(c1.GetScrollableClassname())
        );
      });
    }
    OnIntersection(t, e) {
      let C = !1;
      for (let o of t)
        if (o.isIntersecting) {
          C = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != C &&
        ((this.m_bPreviouslyIntersecting = C),
        this.props.onVisibilityChange && this.props.onVisibilityChange(C),
        C && this.BTriggerOnce() && this.DestroyObserver());
    }
    render() {
      let {
        onVisibilityChange: t,
        rootMargin: e,
        trigger: C,
        bHorizontal: o,
        ...i
      } = this.props;
      return (0, R2.jsx)("div", {
        ref: this.m_refElement,
        ...i,
        children: this.props.children,
      });
    }
  };
d([L], c1.prototype, "OnIntersection", 1);
var b2 = c1;
var y2 = h(v());
var h3 = h(v());
var e1 = class r {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(t, e, C = null, o = null) {
    (r.sm_strDomain = t),
      (r.sm_strController = e),
      (r.sm_strMethod = C),
      (r.sm_strSubmethod = o),
      (r.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let t = { domain: r.sm_strDomain, controller: r.sm_strController };
    return (
      r.sm_strMethod && (t.method = r.sm_strMethod),
      r.sm_strSubmethod && (t.submethod = r.sm_strSubmethod),
      t
    );
  }
  static InstrumentLink(t, e, C = null) {
    let o = r.GetLinkParam(e, C);
    return Q.AddNavParamToURL(t, o);
  }
  static GetLinkParam(t, e = null) {
    let C;
    if (typeof t != "string") {
      if (t.domain) return Q.GetLinkParam(t, e);
      C = t.feature || "";
    }
    let o;
    if (!r.sm_strComputedLinkPrefix && !r.ComputeStaticLinkPrefix())
      return null;
    o = r.sm_strComputedLinkPrefix;
    let i = Q.EncodeEventComponent(C);
    return i && ((o += "_" + i), e && (o += "_" + e)), o;
  }
  static ComputeStaticLinkPrefix() {
    return r.sm_strDomain
      ? ((r.sm_strComputedLinkPrefix = Q.ComputeLinkPrefix(
          r.sm_strDomain,
          r.sm_strController,
          r.sm_strMethod,
          r.sm_strSubmethod,
        )),
        !0)
      : (U(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var B1 = h(v()),
  d3 = h(V()),
  r6 = B1.createContext({});
var B2 = h(V());
function p3(r) {
  let { children: t, ...e } = r,
    C = U1(),
    o = y2.useMemo(
      () => ({ ...e1.GetDefaultParams(), ...C, ...e }),
      [C, e.domain, e.controller, e.method, e.submethod, e.feature, e.depth],
    );
  return (0, B2.jsx)(O1, { ...o, children: t });
}
export {
  K2 as a,
  x1 as b,
  S4 as c,
  m as d,
  H2 as e,
  l1 as f,
  Z2 as g,
  M as h,
  x2 as i,
  t5 as j,
  y as k,
  e5 as l,
  r5 as m,
  a1 as n,
  u3 as o,
  S2 as p,
  v3 as q,
  A5 as r,
  P5 as s,
  T5 as t,
  W5 as u,
  E5 as v,
  N5 as w,
  D5 as x,
  I5 as y,
  p3 as z,
  b2 as A,
};

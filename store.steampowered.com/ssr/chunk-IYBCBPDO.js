import { a as b2 } from "./chunk-TGCOZRPH.js";
import { e as Q1 } from "./chunk-6LXU4WMB.js";
import { a as A } from "./chunk-MXZAC6FJ.js";
import {
  a as q,
  b as X1,
  c as C1,
  f as J1,
  g as z1,
  i as r1,
  u as Y,
} from "./chunk-TPSZGV4Q.js";
import { a as y2 } from "./chunk-S3LZO6NE.js";
import { a as f1 } from "./chunk-YMWTH2RL.js";
import { C as Y1, i as j } from "./chunk-A7T5YNV2.js";
import { a as F1, q as D, s as U1, u as j1 } from "./chunk-TYRV2V77.js";
import { c as $1 } from "./chunk-EXDHFLP5.js";
import { a as U } from "./chunk-SZJ4ZFUQ.js";
import {
  j as N1,
  o as D1,
  s as L,
  t as Q,
  v as I1,
  w as O1,
} from "./chunk-KKWZLKK5.js";
import { j as Z, p as S } from "./chunk-F5FXRD2O.js";
import { a as V } from "./chunk-DDVB5BOE.js";
import { c as S2, e as u, g as d, h as T1 } from "./chunk-TZIVDIHU.js";
var L3 = S2((c1) => {
  "use strict";
  c1.byteLength = c3;
  c1.toByteArray = h3;
  c1.fromByteArray = d3;
  var b = [],
    x = [],
    s3 = typeof Uint8Array < "u" ? Uint8Array : Array,
    _1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (I = 0, x2 = _1.length; I < x2; ++I)
    (b[I] = _1[I]), (x[_1.charCodeAt(I)] = I);
  var I, x2;
  x[45] = 62;
  x[95] = 63;
  function Z2(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var C = e.indexOf("=");
    C === -1 && (C = t);
    var r = C === t ? 0 : 4 - (C % 4);
    return [C, r];
  }
  function c3(e) {
    var t = Z2(e),
      C = t[0],
      r = t[1];
    return ((C + r) * 3) / 4 - r;
  }
  function a3(e, t, C) {
    return ((t + C) * 3) / 4 - C;
  }
  function h3(e) {
    var t,
      C = Z2(e),
      r = C[0],
      o = C[1],
      i = new s3(a3(e, r, o)),
      l = 0,
      n = o > 0 ? r - 4 : r,
      c;
    for (c = 0; c < n; c += 4)
      (t =
        (x[e.charCodeAt(c)] << 18) |
        (x[e.charCodeAt(c + 1)] << 12) |
        (x[e.charCodeAt(c + 2)] << 6) |
        x[e.charCodeAt(c + 3)]),
        (i[l++] = (t >> 16) & 255),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255);
    return (
      o === 2 &&
        ((t = (x[e.charCodeAt(c)] << 2) | (x[e.charCodeAt(c + 1)] >> 4)),
        (i[l++] = t & 255)),
      o === 1 &&
        ((t =
          (x[e.charCodeAt(c)] << 10) |
          (x[e.charCodeAt(c + 1)] << 4) |
          (x[e.charCodeAt(c + 2)] >> 2)),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255)),
      i
    );
  }
  function u3(e) {
    return b[(e >> 18) & 63] + b[(e >> 12) & 63] + b[(e >> 6) & 63] + b[e & 63];
  }
  function p3(e, t, C) {
    for (var r, o = [], i = t; i < C; i += 3)
      (r =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        o.push(u3(r));
    return o.join("");
  }
  function d3(e) {
    for (
      var t, C = e.length, r = C % 3, o = [], i = 16383, l = 0, n = C - r;
      l < n;
      l += i
    )
      o.push(p3(e, l, l + i > n ? n : l + i));
    return (
      r === 1
        ? ((t = e[C - 1]), o.push(b[t >> 2] + b[(t << 4) & 63] + "=="))
        : r === 2 &&
          ((t = (e[C - 2] << 8) + e[C - 1]),
          o.push(b[t >> 10] + b[(t >> 4) & 63] + b[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
});
var q1 = u(V());
if (!q1.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!r1)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var g1 = u(y2());
function R2(e) {
  e();
}
function o1(e) {
  e || (e = R2), J1({ reactionScheduler: e });
}
var M1 = u(V());
function K1(e) {
  return z1(e);
}
var _2 = !1;
function y() {
  return _2;
}
var G2 = 1e4,
  B2 = 1e4,
  W2 = (function () {
    function e(t) {
      var C = this;
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
            r === void 0 && (r = G2),
              clearTimeout(C.sweepTimeout),
              (C.sweepTimeout = void 0);
            var o = Date.now();
            C.registrations.forEach(function (i, l) {
              o - i.registeredAt >= r &&
                (C.finalize(i.value), C.registrations.delete(l));
            }),
              C.registrations.size > 0 && C.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            C.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, C, r) {
          this.registrations.set(r, { value: C, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, B2));
        },
      }),
      e
    );
  })();
var t2 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : W2;
var P = new t2(function (e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
});
var C2 = u(b2()),
  A2 = function () {};
function e2(e) {
  e.reaction = new C1("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function X(e, t) {
  if ((t === void 0 && (t = "observed"), y())) return e();
  var C = M1.default.useRef(null);
  if (!C.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (n) {
        return (
          P.unregister(r),
          (r.onStoreChange = n),
          r.reaction || (e2(r), (r.stateVersion = Symbol())),
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
    C.current = r;
  }
  var o = C.current;
  o.reaction || (e2(o), P.register(C, o, o)),
    M1.default.useDebugValue(o.reaction, K1),
    (0, C2.useSyncExternalStore)(o.subscribe, o.getSnapshot, A2);
  var i, l;
  if (
    (o.reaction.track(function () {
      try {
        i = e();
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
var i2 = typeof Symbol == "function" && Symbol.for,
  r2 = i2
    ? Symbol.for("react.forward_ref")
    : typeof E.forwardRef == "function" &&
      (0, E.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  o2 = i2
    ? Symbol.for("react.memo")
    : typeof E.memo == "function" &&
      (0, E.memo)(function (e) {
        return null;
      }).$$typeof;
function k1(e, t) {
  var C;
  if (o2 && e.$$typeof === o2)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (y()) return e;
  var r = (C = t?.forwardRef) !== null && C !== void 0 ? C : !1,
    o = e,
    i = e.displayName || e.name;
  if (
    r2 &&
    e.$$typeof === r2 &&
    ((r = !0), (o = e.render), typeof o != "function")
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
    (l.displayName = e.displayName),
    Object.defineProperty(l, "name", {
      value: e.name,
      writable: !0,
      configurable: !0,
    }),
    e.contextTypes && (l.contextTypes = e.contextTypes),
    r && (l = (0, E.forwardRef)(l)),
    (l = (0, E.memo)(l)),
    E2(e, l),
    l
  );
}
var P2 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function E2(e, t) {
  Object.keys(e).forEach(function (C) {
    P2[C] || Object.defineProperty(t, C, Object.getOwnPropertyDescriptor(e, C));
  });
}
function H1(e) {
  var t = e.children,
    C = e.render,
    r = t || C;
  return typeof r != "function" ? null : X(r);
}
H1.displayName = "Observer";
var T2 = u(V());
var D2 = u(V());
var N2 = u(V());
var m1;
o1(g1.unstable_batchedUpdates);
var t4 =
  (m1 = P.finalizeAllImmediately) !== null && m1 !== void 0
    ? m1
    : function () {};
function F2(e, t) {
  return t === void 0 && (t = "observed"), X(e, t);
}
var w = u(V());
function U2(e, t) {
  if (s2(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var C = Object.keys(e),
    r = Object.keys(t);
  if (C.length !== r.length) return !1;
  for (var o = 0; o < C.length; o++)
    if (!Object.hasOwnProperty.call(t, C[o]) || !s2(e[C[o]], t[C[o]]))
      return !1;
  return !0;
}
function s2(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var c2 = Symbol("patchMixins"),
  f2 = Symbol("patchedDefinition");
function j2(e, t) {
  var C = (e[c2] = e[c2] || {}),
    r = (C[t] = C[t] || {});
  return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
}
function a2(e, t) {
  for (
    var C = this, r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2;
    i < r;
    i++
  )
    o[i - 2] = arguments[i];
  t.locks++;
  try {
    var l;
    return e != null && (l = e.apply(this, o)), l;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (n) {
          n.apply(C, o);
        });
  }
}
function h2(e, t) {
  var C = function () {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    a2.call.apply(a2, [this, e, t].concat(i));
  };
  return C;
}
function Y2(e, t, C) {
  var r = j2(e, t);
  r.methods.indexOf(C) < 0 && r.methods.push(C);
  var o = Object.getOwnPropertyDescriptor(e, t);
  if (!(o && o[f2])) {
    var i = e[t],
      l = g2(e, t, o ? o.enumerable : void 0, r, i);
    Object.defineProperty(e, t, l);
  }
}
function g2(e, t, C, r, o) {
  var i,
    l = h2(o, r);
  return (
    (i = {}),
    (i[f2] = !0),
    (i.get = function () {
      return l;
    }),
    (i.set = function (c) {
      if (this === e) l = h2(c, r);
      else {
        var p = g2(this, t, C, r, c);
        Object.defineProperty(this, t, p);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = C),
    i
  );
}
var u2 = Symbol("ObserverAdministration"),
  p2 = Symbol("isMobXReactObserver");
function v1(e) {
  var t;
  return (t = e[u2]) != null
    ? t
    : (e[u2] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: V1(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function X2(e) {
  var t = e.prototype;
  if (e[p2]) {
    var C = V1(e);
    throw new Error(
      "The provided component class (" +
        C +
        ") has already been declared as an observer component.",
    );
  } else e[p2] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (e.__proto__ !== w.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = d2;
    else if (t.shouldComponentUpdate !== d2)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var r = t.render;
  if (typeof r != "function") {
    var o = V1(e);
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
        value: y() ? r : J2.call(this, r),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var l = this;
      if (0) var n;
      var c = v1(this);
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
    Y2(t, "componentWillUnmount", function () {
      var l;
      if (!y()) {
        var n = v1(this);
        (l = n.reaction) == null || l.dispose(),
          (n.reaction = null),
          (n.forceUpdate = null),
          (n.mounted = !1),
          (n.reactionInvalidatedBeforeMount = !1);
      }
    }),
    e
  );
}
function V1(e) {
  return e.displayName || e.name || "<component>";
}
function J2(e) {
  var t = e.bind(this),
    C = v1(this);
  function r() {
    C.reaction ||
      ((C.reaction = z2(C)), C.mounted || P.register(this, C, this));
    var o = void 0,
      i = void 0;
    if (
      (C.reaction.track(function () {
        try {
          i = X1(!1, t);
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
function z2(e) {
  return new C1(e.name + ".render()", function () {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      (t = e.reaction) == null || t.dispose(), (e.reaction = null);
    }
  });
}
function d2(e, t) {
  return (
    y() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== t ? !0 : !U2(this.props, e)
  );
}
function x1(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(w.Component, e) ||
    Object.prototype.isPrototypeOf.call(w.PureComponent, e)
      ? X2(e)
      : k1(e)
  );
}
function w1() {
  return (
    (w1 = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var C = arguments[t];
            for (var r in C)
              Object.prototype.hasOwnProperty.call(C, r) && (e[r] = C[r]);
          }
          return e;
        }),
    w1.apply(this, arguments)
  );
}
function $2(e, t) {
  if (e == null) return {};
  var C = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (C[o] = e[o]);
  return C;
}
var Q2 = ["children"],
  L2 = w.default.createContext({});
function q2(e) {
  var t = e.children,
    C = $2(e, Q2),
    r = w.default.useContext(L2),
    o = w.default.useRef(w1({}, r, C)),
    i = o.current;
  if (0) var l;
  return w.default.createElement(L2.Provider, { value: i }, t);
}
q2.displayName = "MobXProvider";
var g4 = Number.parseInt(w.default.version.split(".")[0]);
if (!w.Component) throw new Error("mobx-react requires React to be available");
if (!q) throw new Error("mobx-react requires mobx to be available");
var M2 = Object.seal({ onMoveUp: i1, onMoveDown: i1 }),
  H4 = Object.seal({ onMoveRight: i1, onMoveLeft: i1 });
function i1(e, t) {
  if (e.is_repeat) return !1;
  let C = t.GetRelativeDirection(e.button);
  return C == 1 ? t.BFocusFirstChild(0) : C == 2 ? t.BFocusLastChild(0) : !1;
}
function m4(e) {
  return e.Element.checkVisibility();
}
var f = u(V());
var k2 = u(V());
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
var S1 = u(S()),
  Z1 = k2.forwardRef((e, t) => {
    let { className: C, contextMenuStyles: r, disabled: o, ...i } = e;
    return (0, S1.jsx)("div", {
      ...i,
      ref: t,
      className: A(
        C,
        (r || v).contextMenuItem,
        "contextMenuItem",
        o && "disabled",
      ),
    });
  });
Z1.displayName = "MenuItem";
function H2(e, t = !0) {
  return function (C, r, o) {
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
            }, e)))
          : (n.nPending += 1);
    };
  };
}
var h = u(S()),
  l1 = f.createContext(null),
  G = class extends f.Component {
    m_navRef = Y1();
    m_divRef = f.createRef();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        F1(this.props.refInstance, this.instance);
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
          className: C,
          label: r,
          onCancel: o,
          cancelText: i,
          refInstance: l,
          bForceDesktopPresentation: n,
          footer: c,
          ...p
        } = this.props,
        M = this.context.styles ?? v,
        k = i ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !n) {
        let H = () => {
          o && o(), this.instance.Hide();
        };
        return (0, h.jsxs)(f1, {
          ...p,
          className: A(
            M.contextMenuContents,
            { [M.hasSubMenu]: this.instance.BIsSubMenuVisible() },
            C,
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
          ...M2,
          children: [
            t,
            !this.instance.BIsSubMenu() &&
              (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsx)(m2, {}),
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
          ...p,
          ref: this.m_divRef,
          className: A(
            {
              [M.contextMenuContents]: !0,
              [M.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [M.ForceDesktop]: n,
            },
            C,
          ),
          children: t,
        });
    }
  };
T1(G, "contextType", l1),
  d([L], G.prototype, "HideIfSubmenu", 1),
  d([L], G.prototype, "HideMenu", 1),
  (G = d([x1], G));
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
        bInteractableItem: C,
        onMoveRight: r,
        ...o
      } = this.props,
      i = this.context?.styles ?? v;
    return this.context.presentation == 1
      ? (0, h.jsx)(f1, {
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
      : (0, h.jsx)(Z1, {
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
d([L], g.prototype, "OnClick", 1),
  d([L], g.prototype, "OnOKButton", 1),
  d([L], g.prototype, "OnMouseEnter", 1),
  d([L], g.prototype, "Focus", 1);
function m2(e) {
  let C = f.useContext(l1).styles ?? v;
  return (0, h.jsx)("div", { className: C.ContextMenuSeparator });
}
var X4 = (e) => {
    let t = $1();
    return (0, h.jsx)(_, { ...e, bInGamepadUI: t });
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
      let C = t || this.m_refItem.current.element,
        r = this.instance.ShowSubMenu(C, this.RenderSubMenu);
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
          selectedWithin: C,
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
        selected: C && !this.state.bActive,
        className: A(o, n.SubMenu, this.state.bActive && n.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, h.jsx)("div", { className: n.Label, children: t }),
          (0, h.jsx)("div", {
            className: n.Arrow,
            children: (0, h.jsx)(Q1, {}),
          }),
        ],
      });
    }
  };
d([L], _.prototype, "OnSubMenuMouseEnter", 1),
  d([L], _.prototype, "OnSubMenuHidden", 1),
  d([L], _.prototype, "ShowSubMenu", 1),
  d([L], _.prototype, "RenderSubMenu", 1),
  d([L], _.prototype, "OnMouseEnter", 1),
  d([L], _.prototype, "OnClick", 1);
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
      Z.IN_CLIENT && this.props.popup && this.m_elMenu
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
  OnMenuMutation(t, C) {
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
      let C = C3() ? 150 : 0;
      this.props.instance.OnCancel(C);
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
    let C = this.props.options,
      r = this.m_elMenu,
      o = this.props.element;
    if (!r) return;
    let i = this.props.popup != null,
      l = this.parentWin;
    if (!l || (o && l.getComputedStyle(o).display === "none")) return;
    let n = this.props.clientX,
      c = this.props.clientY,
      p = 0,
      M = 0,
      k = l.innerWidth,
      H = l.innerHeight,
      a1 = 1,
      T = o?.getBoundingClientRect();
    if (i)
      if (
        (!C.bScreenCoordinates &&
          n !== void 0 &&
          c !== void 0 &&
          ((n += l.screenLeft), (c += l.screenTop)),
        T && (T = U1(l, T)),
        C.targetMonitor)
      )
        (a1 = C.targetMonitor.flMonitorScale),
          (p = C.targetMonitor.nScreenLeft),
          (M = C.targetMonitor.nScreenTop),
          (k = C.targetMonitor.nScreenWidth),
          (H = C.targetMonitor.nScreenHeight);
      else {
        let m = l.screen,
          P1 = 0,
          E1 = 0;
        m.availLeft && (P1 = m.availLeft),
          m.availTop && (E1 = m.availTop),
          (p = P1),
          (M = E1),
          (k = m.availWidth),
          (H = m.availHeight);
      }
    (C.bOverlapHorizontal || C.bOverlapVertical) && (n = c = void 0);
    let B = r.getBoundingClientRect();
    if (C.flGamepadScale && C.flGamepadScale > 0) {
      let m = C.flGamepadScale;
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
    C.bMatchWidth && ((N = F - O), (s.menuWidth = N)),
      C.bGrowToElementWidth && (s.menuMinWidth = Math.max(N, F - O));
    let G1 = (C.bOverlapHorizontal ? F : O) - p - N,
      h1 = G1 > 0,
      B1 = p + k - (C.bOverlapHorizontal ? O : F) - N,
      u1 = B1 > 0,
      p1 = (C.bPreferPopLeft || !u1) && h1;
    !h1 &&
      !u1 &&
      ((p1 = h1 > u1),
      C.bFitToWindow && ((N += (p1 ? G1 : B1) - 8), (s.menuWidth = N))),
      p1
        ? (s.menuRight = k - (C.bOverlapHorizontal ? F : O))
        : (s.menuLeft = C.bOverlapHorizontal ? O : F);
    let z = c ?? T.top,
      $ = c ?? T.bottom,
      W = r.scrollHeight;
    C.bMatchHeight && ((W = $ - z), (s.menuHeight = W));
    let d1 = (C.bOverlapVertical ? $ : z) - M - W,
      W1 = d1 > 0,
      L1 = M + H - (C.bOverlapVertical ? z : $) - W,
      A1 = L1 > 0,
      e1 = (C.bPreferPopTop || !A1) && W1 && !C.bDisablePopTop;
    if (!W1 && !A1) {
      let m =
        C.bShiftToFitWindow !== void 0
          ? C.bShiftToFitWindow
          : !!C.bFitToWindow && !C.bOverlapHorizontal;
      (e1 = d1 > L1 && !C.bDisablePopTop),
        m && (e1 ? (s.menuTop = 4) : (s.menuBottom = 4)),
        C.bFitToWindow &&
          (m ? (W = Math.min(W, H - 8)) : (W += e1 ? d1 : L1),
          (s.menuHeight = W - 8));
    }
    s.menuBottom === void 0 &&
      s.menuTop === void 0 &&
      (e1
        ? (s.menuBottom = H - (C.bOverlapVertical ? $ : z))
        : (s.menuTop = C.bOverlapVertical ? z : $)),
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
    let C = this.props.popup?.window,
      r = this.props.options;
    if (r.bScreenCoordinates) {
      let o = this.parentWin?.devicePixelRatio;
      if (r.targetMonitor) {
        let i = r.flGamepadScale || 1;
        o = (r.targetMonitor.flMonitorScale ?? 1) / i;
      }
      C?.SteamClient.Window.MoveTo(this.state.menuLeft, this.state.menuTop, o),
        C?.SteamClient.Window.ResizeTo(
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
        C?.SteamClient.Window.PositionWindowRelative(
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
    let C = this.props.options.strClassName || v.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (C += " visible"),
      (C += " " + v.ContextMenuPosition),
      (0, h.jsx)("div", {
        className: C,
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
d([L], R.prototype, "BindMenuElement", 1),
  d([L, H2(100)], R.prototype, "OnMenuMutation", 1),
  d([L], R.prototype, "OnWindowResize", 1),
  d([L], R.prototype, "OnBlur", 1),
  d([L], R.prototype, "OnKeyDown", 1),
  (R = d([x1], R));
function J4(e) {
  return (0, h.jsx)("div", { className: v.ContextMenuMouseOverlay });
}
function t3(e, t) {
  let C = t.createEvent("HTMLEvents");
  C.initEvent("change", !0, !1), e.dispatchEvent(C);
}
function z4(e) {
  let t = [],
    C = j1(e),
    r = C.getSelection(),
    o = r && r.rangeCount > 0 && r.toString().length > 0,
    i = e.target,
    l = !1,
    n = e.clientY,
    c = e.clientX;
  if (
    (i &&
      "tagName" in i &&
      (i.tagName == "INPUT" || i.tagName == "TEXTAREA") &&
      (l = !0),
    Z.IN_CLIENT && l && j(C, "Browser.GetSpellingSuggestions"))
  ) {
    let [p, ...M] = C.SteamClient.Browser.GetSpellingSuggestions(),
      k = i;
    k &&
      M.forEach((H, a1) => {
        t.push(
          (0, h.jsx)(
            g,
            {
              onSelected: () => {
                k.setRangeText(H),
                  t3(k, C.document),
                  k.setSelectionRange(k.selectionEnd, k.selectionEnd),
                  i.focus();
              },
              className: v.NoSeparation,
              children: H,
            },
            `spelling_${a1}_${H}`,
          ),
        );
      }),
      p &&
        j(C, "Browser.AddWordToDictionary") &&
        ((p = p.trim()),
        t.push(
          (0, h.jsx)(
            g,
            {
              onSelected: () => C.SteamClient.Browser.AddWordToDictionary(p),
              children: Y(
                "#ContextMenu_AddToDictionary",
                p.length < 30 ? p : p.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${p}`,
          ),
        ));
  }
  if (
    ((C.document.queryCommandEnabled("cut") || (o && l)) &&
      t.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              C.document.execCommand("cut");
            },
            children: Y("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (C.document.queryCommandEnabled("copy") || o) &&
      t.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              C.document.execCommand("copy");
            },
            className: v.NoSeparation,
            children: Y("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    Z.IN_CLIENT &&
      l &&
      j(C, "Browser.Paste") &&
      t.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              i.focus(), C.SteamClient.Browser.Paste();
            },
            className: v.NoSeparation,
            children: Y("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    Z.IN_CLIENT && Z.DEV_MODE)
  ) {
    let p = [];
    j(C, "Browser.OpenDevTools") &&
      p.push(
        (0, h.jsx)(
          g,
          {
            onSelected: () => {
              i.focus(), C.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      j(C, "Browser.InspectElement") &&
        p.push(
          (0, h.jsx)(
            g,
            {
              onSelected: () => {
                i.focus(), C.SteamClient.Browser.InspectElement(n, c);
              },
              className: v.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      p.length > 0 &&
        (t.push((0, h.jsx)(m2, {}, "devtools-separator")), t.push(...p));
  }
  if (t.length) v2((0, h.jsx)(G, { children: t }), e, { bRootContextMenu: !0 });
  else {
    if (e.shiftKey) return;
    e.preventDefault(), e.stopPropagation();
  }
}
var e3 = "EnableContextMenuBlurDelay3";
function C3() {
  return (window.localStorage && window.localStorage.getItem(e3)) === "true";
}
var J = class J {
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
  constructor(t, C) {
    r1(this), (this.m_ContextMenuManager = t), (this.m_rctElement = C);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = J.s_nNextKeyValue), J.s_nNextKeyValue++),
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
  SetPosition(t, C, r) {
    (this.m_options = { ...this.m_options, ...r }),
      (this.m_position.clientX = t),
      (this.m_position.clientY = C),
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
  ShowSubMenu(t, C) {
    return this.m_elSubmenuItem == t
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = t),
        (this.m_submenu = new y1(this, C(), t, this.m_options.bForcePopup)),
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
d([q], J.prototype, "m_bVisible", 2), d([q.ref], J.prototype, "m_rctLabel", 2);
var K = J,
  n1 = class extends K {
    constructor(t, C, r, o, i, l) {
      super(t, C),
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
  y1 = class extends K {
    constructor(t, C, r, o) {
      super(t.Manager, C),
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
  m_callbacksMenusChanged = new D1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(t, C, r, o, i) {
    let l = new n1(this, t, C, r, o, i);
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
      t.sort((C, r) => C.key - r.key)
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
      ? N1(this.m_rgActiveSubmenus, t) &&
        this.m_callbacksMenusChanged.Dispatch()
      : (U(t == this.m_ActiveMenu, "Call to hide inactive menu"),
        t == this.m_ActiveMenu &&
          (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
  }
  ReleaseHiddenMenu(t) {
    this.m_setHiddenMenus.delete(t);
  }
};
var b1 = class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(t) {
      let C = t?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(C);
    }
    GetContextMenuManager(t) {
      let C = this.m_mapManagers.get(t);
      if (!C) {
        let r = t;
        for (; !C && r.opener; )
          (r = r.opener), (C = this.m_mapManagers.get(r));
      }
      return C || ((C = new s1()), this.m_mapManagers.set(t, C)), C;
    }
    SetMenuManager(t, C) {
      U(
        this.m_mapManagers.get(t) === void 0 || !C || t == window,
        `Stomping CContextMenuManager for ${t.document.title}!`,
      ),
        this.m_mapManagers.set(t, C);
    }
    RegisterChildWindow(t, C) {
      return (
        this.m_mapManagers.set(C, this.GetContextMenuManager(t)),
        () => this.m_mapManagers.delete(C)
      );
    }
  },
  o3 = new b1();
function v2(e, t, C) {
  let r,
    o,
    i,
    l = t;
  if (l?.preventDefault && l?.stopPropagation) {
    if (l.shiftKey || (l.altKey && !C?.bRootContextMenu)) return null;
    l.preventDefault(),
      l.stopPropagation(),
      (i = l.currentTarget),
      (r = l.clientX),
      (o = l.clientY);
  } else i = t;
  let c = o3
    .GetContextMenuManagerFromWindow(i)
    .CreateContextMenuInstance(e, i, r, o, C);
  return c.Show(), C?.bCreateHidden && c.Hide(), c;
}
var a = u(S());
function w5(e) {
  let { direction: t, ...C } = e;
  switch (t) {
    case "up":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...C,
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
        ...C,
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
        ...C,
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
        ...C,
        children: (0, a.jsx)("path", {
          d: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
          fill: "currentColor",
        }),
      });
  }
}
function x5(e) {
  let { direction: t, ...C } = e;
  switch (t) {
    case "up":
      return (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
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
        ...e,
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
        ...e,
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
        ...e,
        children: (0, a.jsx)("path", {
          d: "M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z",
          fill: "currentColor",
        }),
      });
  }
}
function Z5(e) {
  return (0, a.jsx)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: (0, a.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.7 15.2077C31.703 12.5623 30.94 9.97259 29.5032 7.75136C28.0664 5.53014 26.0172 3.77242 23.6031 2.69048C21.189 1.60855 18.5133 1.24869 15.8992 1.65436C13.2851 2.06002 10.8443 3.21387 8.87163 4.97655C6.89899 6.73922 5.47888 9.03532 4.78281 11.5875C4.08673 14.1397 4.14447 16.8389 4.94905 19.359C5.75363 21.8791 7.27063 24.1124 9.31684 25.7891C11.363 27.4658 13.8509 28.5142 16.48 28.8077V34.5077L27.31 25.2477C28.6947 23.9675 29.7996 22.4147 30.5551 20.6869C31.3106 18.959 31.7004 17.0935 31.7 15.2077ZM15.3 7.06885L16.3075 16.9577H20.1309L21.1039 7.06885H15.3ZM20.6927 22.0125C20.6927 23.3774 19.5862 24.4838 18.2213 24.4838C16.8564 24.4838 15.7499 23.3774 15.7499 22.0125C15.7499 20.6475 16.8564 19.5411 18.2213 19.5411C19.5862 19.5411 20.6927 20.6475 20.6927 22.0125Z",
      fill: "currentColor",
    }),
  });
}
function S5(e) {
  let { alert: t, urgent: C, ...r } = e;
  return C
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
function y5(e) {
  return (0, a.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, a.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
      fill: "currentColor",
    }),
  });
}
function b5(e) {
  return (0, a.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
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
function R5(e) {
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
function _5(e) {
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
var V2 = u(V());
var i3 = u(V());
var t1 = class e {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(t, C, r = null, o = null) {
    (e.sm_strDomain = t),
      (e.sm_strController = C),
      (e.sm_strMethod = r),
      (e.sm_strSubmethod = o),
      (e.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let t = { domain: e.sm_strDomain, controller: e.sm_strController };
    return (
      e.sm_strMethod && (t.method = e.sm_strMethod),
      e.sm_strSubmethod && (t.submethod = e.sm_strSubmethod),
      t
    );
  }
  static InstrumentLink(t, C, r = null) {
    let o = e.GetLinkParam(C, r);
    return Q.AddNavParamToURL(t, o);
  }
  static GetLinkParam(t, C = null) {
    let r;
    if (typeof t != "string") {
      if (t.domain) return Q.GetLinkParam(t, C);
      r = t.feature || "";
    }
    let o;
    if (!e.sm_strComputedLinkPrefix && !e.ComputeStaticLinkPrefix())
      return null;
    o = e.sm_strComputedLinkPrefix;
    let i = Q.EncodeEventComponent(r);
    return i && ((o += "_" + i), C && (o += "_" + C)), o;
  }
  static ComputeStaticLinkPrefix() {
    return e.sm_strDomain
      ? ((e.sm_strComputedLinkPrefix = Q.ComputeLinkPrefix(
          e.sm_strDomain,
          e.sm_strController,
          e.sm_strMethod,
          e.sm_strSubmethod,
        )),
        !0)
      : (U(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var R1 = u(V()),
  l3 = u(S()),
  $5 = R1.createContext({});
var w2 = u(S());
function n3(e) {
  let { children: t, ...C } = e,
    r = O1(),
    o = V2.useMemo(
      () => ({ ...t1.GetDefaultParams(), ...r, ...C }),
      [r, C.domain, C.controller, C.method, C.submethod, C.feature, C.depth],
    );
  return (0, w2.jsx)(I1, { ...o, children: t });
}
export {
  F2 as a,
  x1 as b,
  m4 as c,
  v as d,
  H2 as e,
  l1 as f,
  G as g,
  g as h,
  m2 as i,
  X4 as j,
  R as k,
  J4 as l,
  z4 as m,
  s1 as n,
  o3 as o,
  v2 as p,
  L3 as q,
  w5 as r,
  x5 as s,
  Z5 as t,
  S5 as u,
  y5 as v,
  b5 as w,
  R5 as x,
  _5 as y,
  n3 as z,
};

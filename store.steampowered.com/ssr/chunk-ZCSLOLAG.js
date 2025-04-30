const CLSTAMP = 9703338;

import { a as k } from "./chunk-56IQZL2R.js";
import {
  a as K,
  b as J1,
  c as o1,
  f as $1,
  g as Q1,
  i as i1,
  u as Y,
} from "./chunk-VQI5CIZU.js";
import { a as R2 } from "./chunk-BJ44MWDU.js";
import { a as b2 } from "./chunk-QBQELJ7R.js";
import { a as M1 } from "./chunk-5AMXFNAE.js";
import { C as X1, i as j } from "./chunk-XF6F5WR3.js";
import { a as U1, q as D, s as j1, u as Y1 } from "./chunk-3EAK3O6G.js";
import { c as t1 } from "./chunk-EKS4M6CW.js";
import { a as U } from "./chunk-646H7O4Q.js";
import {
  j as D1,
  n as z1,
  r as f,
  s as q,
  u as F1,
  v as O1,
} from "./chunk-6ZT5Z6YV.js";
import { i as b, o as Z } from "./chunk-INHMP3CA.js";
import { a as V } from "./chunk-FO667VDJ.js";
import { b as y2, d as u, e as g, f as T1 } from "./chunk-3UOKURNK.js";
var m3 = y2((h1) => {
  "use strict";
  h1.byteLength = d3;
  h1.toByteArray = f3;
  h1.fromByteArray = v3;
  var _ = [],
    y = [],
    u3 = typeof Uint8Array < "u" ? Uint8Array : Array,
    B1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (z = 0, Z2 = B1.length; z < Z2; ++z)
    (_[z] = B1[z]), (y[B1.charCodeAt(z)] = z);
  var z, Z2;
  y[45] = 62;
  y[95] = 63;
  function S2(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    r === -1 && (r = t);
    var C = r === t ? 0 : 4 - (r % 4);
    return [r, C];
  }
  function d3(e) {
    var t = S2(e),
      r = t[0],
      C = t[1];
    return ((r + C) * 3) / 4 - C;
  }
  function g3(e, t, r) {
    return ((t + r) * 3) / 4 - r;
  }
  function f3(e) {
    var t,
      r = S2(e),
      C = r[0],
      o = r[1],
      i = new u3(g3(e, C, o)),
      l = 0,
      s = o > 0 ? C - 4 : C,
      a;
    for (a = 0; a < s; a += 4)
      (t =
        (y[e.charCodeAt(a)] << 18) |
        (y[e.charCodeAt(a + 1)] << 12) |
        (y[e.charCodeAt(a + 2)] << 6) |
        y[e.charCodeAt(a + 3)]),
        (i[l++] = (t >> 16) & 255),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255);
    return (
      o === 2 &&
        ((t = (y[e.charCodeAt(a)] << 2) | (y[e.charCodeAt(a + 1)] >> 4)),
        (i[l++] = t & 255)),
      o === 1 &&
        ((t =
          (y[e.charCodeAt(a)] << 10) |
          (y[e.charCodeAt(a + 1)] << 4) |
          (y[e.charCodeAt(a + 2)] >> 2)),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255)),
      i
    );
  }
  function L3(e) {
    return _[(e >> 18) & 63] + _[(e >> 12) & 63] + _[(e >> 6) & 63] + _[e & 63];
  }
  function M3(e, t, r) {
    for (var C, o = [], i = t; i < r; i += 3)
      (C =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        o.push(L3(C));
    return o.join("");
  }
  function v3(e) {
    for (
      var t, r = e.length, C = r % 3, o = [], i = 16383, l = 0, s = r - C;
      l < s;
      l += i
    )
      o.push(M3(e, l, l + i > s ? s : l + i));
    return (
      C === 1
        ? ((t = e[r - 1]), o.push(_[t >> 2] + _[(t << 4) & 63] + "=="))
        : C === 2 &&
          ((t = (e[r - 2] << 8) + e[r - 1]),
          o.push(_[t >> 10] + _[(t >> 4) & 63] + _[(t << 2) & 63] + "=")),
      o.join("")
    );
  }
});
var q1 = u(V());
if (!q1.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!i1)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var v1 = u(b2());
function _2(e) {
  e();
}
function l1(e) {
  e || (e = _2), $1({ reactionScheduler: e });
}
var m1 = u(V());
function K1(e) {
  return Q1(e);
}
var G2 = !1;
function R() {
  return G2;
}
var B2 = 1e4,
  A2 = 1e4,
  W2 = (function () {
    function e(t) {
      var r = this;
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
            C === void 0 && (C = B2),
              clearTimeout(r.sweepTimeout),
              (r.sweepTimeout = void 0);
            var o = Date.now();
            r.registrations.forEach(function (i, l) {
              o - i.registeredAt >= C &&
                (r.finalize(i.value), r.registrations.delete(l));
            }),
              r.registrations.size > 0 && r.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, r, C) {
          this.registrations.set(C, { value: r, registeredAt: Date.now() }),
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
            (this.sweepTimeout = setTimeout(this.sweep, A2));
        },
      }),
      e
    );
  })();
var t2 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : W2;
var N = new t2(function (e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
});
var r2 = u(R2()),
  P2 = function () {};
function e2(e) {
  e.reaction = new o1("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function X(e, t) {
  if ((t === void 0 && (t = "observed"), R())) return e();
  var r = m1.default.useRef(null);
  if (!r.current) {
    var C = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          N.unregister(C),
          (C.onStoreChange = s),
          C.reaction || (e2(C), (C.stateVersion = Symbol())),
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
    r.current = C;
  }
  var o = r.current;
  o.reaction || (e2(o), N.register(r, o, o)),
    m1.default.useDebugValue(o.reaction, K1),
    (0, r2.useSyncExternalStore)(o.subscribe, o.getSnapshot, P2);
  var i, l;
  if (
    (o.reaction.track(function () {
      try {
        i = e();
      } catch (s) {
        l = s;
      }
    }),
    l)
  )
    throw l;
  return i;
}
var E = u(V());
var i2 = typeof Symbol == "function" && Symbol.for,
  C2 = i2
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
function w1(e, t) {
  var r;
  if (o2 && e.$$typeof === o2)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (R()) return e;
  var C = (r = t?.forwardRef) !== null && r !== void 0 ? r : !1,
    o = e,
    i = e.displayName || e.name;
  if (
    C2 &&
    e.$$typeof === C2 &&
    ((C = !0), (o = e.render), typeof o != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var l = function (s, a) {
    return X(function () {
      return o(s, a);
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
    C && (l = (0, E.forwardRef)(l)),
    (l = (0, E.memo)(l)),
    E2(e, l),
    l
  );
}
var N2 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function E2(e, t) {
  Object.keys(e).forEach(function (r) {
    N2[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
function x1(e) {
  var t = e.children,
    r = e.render,
    C = t || r;
  return typeof C != "function" ? null : X(C);
}
x1.displayName = "Observer";
var I2 = u(V());
var D2 = u(V());
var T2 = u(V());
var V1;
l1(v1.unstable_batchedUpdates);
var i4 =
  (V1 = N.finalizeAllImmediately) !== null && V1 !== void 0
    ? V1
    : function () {};
function O2(e, t) {
  return t === void 0 && (t = "observed"), X(e, t);
}
var S = u(V());
function U2(e, t) {
  if (s2(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    C = Object.keys(t);
  if (r.length !== C.length) return !1;
  for (var o = 0; o < r.length; o++)
    if (!Object.hasOwnProperty.call(t, r[o]) || !s2(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
function s2(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var c2 = Symbol("patchMixins"),
  f2 = Symbol("patchedDefinition");
function j2(e, t) {
  var r = (e[c2] = e[c2] || {}),
    C = (r[t] = r[t] || {});
  return (C.locks = C.locks || 0), (C.methods = C.methods || []), C;
}
function a2(e, t) {
  for (
    var r = this, C = arguments.length, o = new Array(C > 2 ? C - 2 : 0), i = 2;
    i < C;
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
        t.methods.forEach(function (s) {
          s.apply(r, o);
        });
  }
}
function h2(e, t) {
  var r = function () {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    a2.call.apply(a2, [this, e, t].concat(i));
  };
  return r;
}
function Y2(e, t, r) {
  var C = j2(e, t);
  C.methods.indexOf(r) < 0 && C.methods.push(r);
  var o = Object.getOwnPropertyDescriptor(e, t);
  if (!(o && o[f2])) {
    var i = e[t],
      l = L2(e, t, o ? o.enumerable : void 0, C, i);
    Object.defineProperty(e, t, l);
  }
}
function L2(e, t, r, C, o) {
  var i,
    l = h2(o, C);
  return (
    (i = {}),
    (i[f2] = !0),
    (i.get = function () {
      return l;
    }),
    (i.set = function (a) {
      if (this === e) l = h2(a, C);
      else {
        var d = L2(this, t, r, C, a);
        Object.defineProperty(this, t, d);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var p2 = Symbol("ObserverAdministration"),
  u2 = Symbol("isMobXReactObserver");
function H1(e) {
  var t;
  return (t = e[p2]) != null
    ? t
    : (e[p2] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: k1(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function X2(e) {
  var t = e.prototype;
  if (e[u2]) {
    var r = k1(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[u2] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (e.__proto__ !== S.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = d2;
    else if (t.shouldComponentUpdate !== d2)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var C = t.render;
  if (typeof C != "function") {
    var o = k1(e);
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
        value: R() ? C : J2.call(this, C),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var l = this;
      if (0) var s;
      var a = H1(this);
      return (
        (a.mounted = !0),
        N.unregister(this),
        (a.forceUpdate = function () {
          return l.forceUpdate();
        }),
        (!a.reaction || a.reactionInvalidatedBeforeMount) && a.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    Y2(t, "componentWillUnmount", function () {
      var l;
      if (!R()) {
        var s = H1(this);
        (l = s.reaction) == null || l.dispose(),
          (s.reaction = null),
          (s.forceUpdate = null),
          (s.mounted = !1),
          (s.reactionInvalidatedBeforeMount = !1);
      }
    }),
    e
  );
}
function k1(e) {
  return e.displayName || e.name || "<component>";
}
function J2(e) {
  var t = e.bind(this),
    r = H1(this);
  function C() {
    r.reaction ||
      ((r.reaction = $2(r)), r.mounted || N.register(this, r, this));
    var o = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = J1(!1, t);
        } catch (l) {
          o = l;
        }
      }),
      o)
    )
      throw o;
    return i;
  }
  return C;
}
function $2(e) {
  return new o1(e.name + ".render()", function () {
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
    R() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== t ? !0 : !U2(this.props, e)
  );
}
function S1(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(S.Component, e) ||
    Object.prototype.isPrototypeOf.call(S.PureComponent, e)
      ? X2(e)
      : w1(e)
  );
}
function Z1() {
  return (
    (Z1 = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var C in r)
              Object.prototype.hasOwnProperty.call(r, C) && (e[C] = r[C]);
          }
          return e;
        }),
    Z1.apply(this, arguments)
  );
}
function Q2(e, t) {
  if (e == null) return {};
  var r = {},
    C = Object.keys(e),
    o,
    i;
  for (i = 0; i < C.length; i++)
    (o = C[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var q2 = ["children"],
  g2 = S.default.createContext({});
function K2(e) {
  var t = e.children,
    r = Q2(e, q2),
    C = S.default.useContext(g2),
    o = S.default.useRef(Z1({}, C, r)),
    i = o.current;
  if (0) var l;
  return S.default.createElement(g2.Provider, { value: i }, t);
}
K2.displayName = "MobXProvider";
var x4 = Number.parseInt(S.default.version.split(".")[0]);
if (!S.Component) throw new Error("mobx-react requires React to be available");
if (!K) throw new Error("mobx-react requires mobx to be available");
var r3 = u(V());
var t3 = u(V());
var n = u(Z());
function N4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.48 35.05V29.35L16.51 29.34C13.4035 28.995 10.5086 27.5974 8.30636 25.3795C6.10411 23.1615 4.72712 20.2568 4.40423 17.1479C4.08134 14.039 4.83199 10.9133 6.53143 8.29011C8.23087 5.66691 10.7768 3.70423 13.7461 2.72822C16.7153 1.7522 19.9292 1.82163 22.8536 2.92496C25.7779 4.02829 28.2367 6.09909 29.8213 8.79322C31.4058 11.4874 32.0208 14.6426 31.564 17.7346C31.1071 20.8266 29.606 23.6692 27.31 25.79L16.48 35.05ZM10.36 15.65L15.77 21.05L25.39 11.43L23 9.04999L15.77 16.28L12.75 13.26L10.36 15.65Z",
      fill: "currentColor",
    }),
  });
}
function E4(e) {
  return (0, n.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      (0, n.jsx)("path", {
        d: "M14 17C15.4706 16.9968 16.9289 17.2682 18.3 17.8C16.5605 19.2553 15.269 21.1737 14.5752 23.333C13.8814 25.4922 13.8137 27.8039 14.38 30H2V29C2 25.8174 3.26428 22.7652 5.51472 20.5147C7.76515 18.2643 10.8174 17 14 17Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M10.6666 2.01118C11.6533 1.35189 12.8133 1 14 1C15.5913 1 17.1174 1.63214 18.2426 2.75736C19.3679 3.88258 20 5.4087 20 7C20 8.18669 19.6481 9.34673 18.9888 10.3334C18.3295 11.3201 17.3925 12.0892 16.2961 12.5433C15.1997 12.9974 13.9933 13.1162 12.8295 12.8847C11.6656 12.6532 10.5965 12.0818 9.75736 11.2426C8.91824 10.4035 8.3468 9.33443 8.11529 8.17054C7.88378 7.00666 8.0026 5.80026 8.45672 4.7039C8.91085 3.60754 9.67988 2.67047 10.6666 2.01118Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M32.5 27C32.5 28.2856 32.1188 29.5423 31.4046 30.6112C30.6903 31.6801 29.6752 32.5132 28.4874 33.0052C27.2997 33.4972 25.9928 33.6259 24.7319 33.3751C23.471 33.1243 22.3128 32.5052 21.4038 31.5962C20.4948 30.6872 19.8757 29.529 19.6249 28.2681C19.3741 27.0072 19.5028 25.7003 19.9948 24.5126C20.4868 23.3248 21.3199 22.3097 22.3888 21.5954C23.4577 20.8812 24.7144 20.5 26 20.5",
        stroke: "currentColor",
        strokeWidth: "3",
      }),
      (0, n.jsx)("path", {
        d: "M32.7419 20.4742L25.9919 24.3713L25.9919 16.5771L32.7419 20.4742Z",
        fill: "currentColor",
      }),
    ],
  });
}
function I4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 7H11V12H2V7ZM2 16H11V23L16 20.9545V31H2V16ZM20 31V20.9545L25 23V16H34V31H20ZM34 12H25V7H34V12ZM22 7H14V19L18 17.3636L22 19V7Z",
    }),
  });
}
function T4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      d: "M18 17.8L4 10.05L18 2.29999L32 10.05L18 17.8ZM18 22.37L7.1 16.37L4 18.05L18 25.8L32 18.05L28.9 16.34L18 22.37ZM18 30.37L7.1 24.37L4 26.05L18 33.8L32 26.05L28.9 24.34L18 30.37Z",
      fill: "currentColor",
    }),
  });
}
function M2() {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
    "data-name": "Layer 1",
    viewBox: "0 0 128 128",
    x: "0px",
    y: "0px",
    children: (0, n.jsx)("polygon", {
      points:
        "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49",
    }),
  });
}
function D4(e) {
  let t = e.color || "#FFFFFF";
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: k("SVGIcon_Button", "SVGIcon_X_Line", e.className),
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("line", {
        fill: "none",
        stroke: t,
        strokeWidth: "45",
        strokeMiterlimit: "10",
        x1: "212",
        y1: "212",
        x2: "44",
        y2: "44",
      }),
      (0, n.jsx)("line", {
        fill: "none",
        stroke: t,
        strokeWidth: "45",
        strokeMiterlimit: "10",
        x1: "44",
        y1: "212",
        x2: "212",
        y2: "44",
      }),
    ],
  });
}
function z4(e) {
  return t1()
    ? (0, n.jsxs)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.63604 19.636C7.32387 17.9482 9.61305 17 12 17C12.4664 17 12.9292 17.0362 13.3844 17.1071C13.1338 18.0289 13 18.9988 13 20C13 25.0351 16.383 29.2801 21 30.5859V31H3V26C3 23.6131 3.94821 21.3239 5.63604 19.636ZM14.7779 13.1573C13.9556 13.7068 12.9889 14 12 14C10.6739 14 9.40215 13.4732 8.46447 12.5355C7.52678 11.5979 7 10.3261 7 9C7 8.0111 7.29324 7.0444 7.84265 6.22215C8.39206 5.39991 9.17295 4.75904 10.0866 4.3806C11.0002 4.00217 12.0055 3.90315 12.9755 4.09608C13.9454 4.289 14.8363 4.76521 15.5355 5.46447C16.2348 6.16373 16.711 7.05465 16.9039 8.02455C17.0969 8.99446 16.9978 9.99979 16.6194 10.9134C16.241 11.827 15.6001 12.6079 14.7779 13.1573Z",
            fill: "currentColor",
          }),
          (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28ZM22.5 21.5V26H25.5V21.5H30V18.5H25.5V14H22.5V18.5H18V21.5H22.5Z",
            fill: "currentColor",
          }),
        ],
      })
    : (0, n.jsxs)("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        className: "SVGIcon_Button SVGIcon_AddFriend",
        x: "0px",
        y: "0px",
        width: "256px",
        height: "256px",
        viewBox: "0 0 256 256",
        children: [
          (0, n.jsx)("g", {
            className: "friendHead",
            transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
            children: (0, n.jsx)("circle", {
              cx: "86.296",
              cy: "47.419",
              r: "33.526",
              fill: "currentcolor",
            }),
          }),
          (0, n.jsx)("path", {
            className: "friendBody",
            d: "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231	c-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z",
            fill: "currentColor",
          }),
          (0, n.jsx)("path", {
            className: "plusCircle",
            d: "M179.01,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.989,66.99,66.989c36.997,0,66.99-29.991,66.99-66.989 S216.008,103.892,179.01,103.892z M217.893,175.882h-33.647v33.882c0,2.762-2.239,5-5,5s-5-2.238-5-5v-33.882h-33.647 c-2.762,0-5-2.238-5-5c0-2.763,2.238-5,5-5h33.647V132.47c0-2.762,2.239-5,5-5s5,2.238,5,5v33.412h33.647c2.762,0,5,2.237,5,5 C222.893,173.643,220.654,175.882,217.893,175.882z",
            fill: "currentColor",
          }),
        ],
      });
}
function F4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_4",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_FriendRequest",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("g", {
        className: "friendHead",
        transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
        children: (0, n.jsx)("circle", {
          cx: "85.923",
          cy: "47.419",
          r: "33.526",
        }),
      }),
      (0, n.jsx)("path", {
        className: "friendBody",
        d: "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231	c-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z",
      }),
      (0, n.jsx)("path", {
        className: "friendBodyFull",
        d: "M176.504,217.922v-42.624c0-35.443-17.002-64.217-57.483-64.217H106.96h-1.017H94.898 c-40.48,0.001-57.484,28.774-57.484,64.217v42.624c0,0,0,22.197,69.544,22.197C177.521,240.121,176.504,217.922,176.504,217.922z",
      }),
      (0, n.jsx)("path", {
        className: "friendArm",
        d: "M18.167,63.833c6.53-0.734,39.348,39.127,50.007,47.647s21.327,16.686,15.16,25.353s-20.646,16.74-36.167,2.5 S-1.349,90.532,0,85.333S8.599,64.909,18.167,63.833z",
      }),
      (0, n.jsx)("path", {
        className: "redCircle",
        d: "M178.51,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.99,66.99,66.99c36.997,0,66.99-29.992,66.99-66.99 S215.508,103.892,178.51,103.892z",
      }),
    ],
  });
}
function O4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "base",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Maximize",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("rect", {
        x: "24",
        y: "42.167",
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "18",
        strokeMiterlimit: "10",
        width: "208",
        height: "171.667",
      }),
      (0, n.jsx)("line", {
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "42",
        strokeMiterlimit: "10",
        x1: "24",
        y1: "54.01",
        x2: "232",
        y2: "54.01",
      }),
    ],
  });
}
function U4() {
  return (0, n.jsx)("svg", {
    version: "1.1",
    id: "base",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Minimize",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: (0, n.jsx)("line", {
      fill: "none",
      stroke: "rgb(120, 138, 146)",
      strokeWidth: "18",
      strokeMiterlimit: "10",
      x1: "24",
      y1: "209.01",
      x2: "232",
      y2: "209.01",
    }),
  });
}
function j4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Restore",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("polyline", {
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "12",
        strokeMiterlimit: "10",
        points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
      }),
      (0, n.jsx)("rect", {
        x: "24",
        y: "90.861",
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "18",
        strokeMiterlimit: "10",
        width: "149",
        height: "122.973",
      }),
    ],
  });
}
function Y4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Trade",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("path", {
        d: "M132.025,162.943h40.246c0,0,3.219,56.879-31.303,79.599c-12.298,8.094,71.103-6.708,75.574-79.599h35.775l-60.146-74.681 L132.025,162.943z",
      }),
      (0, n.jsx)("path", {
        d: "M123.975,93.056H83.729c0,0-3.219-56.879,31.303-79.599c12.298-8.094-71.103,6.708-75.574,79.599H3.682l60.146,74.681 L123.975,93.056z",
      }),
    ],
  });
}
function X4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      overflow: "visible",
      width: "100%",
      height: "100%",
      maxWidth: "320px",
      maxHeight: "320px",
    },
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("g", {
        className: "base",
        children: (0, n.jsx)("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909",
        }),
      }),
      (0, n.jsxs)("g", {
        className: "lines",
        children: [
          (0, n.jsx)("path", {
            className: "line1",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M128,68.12v137.197",
          }),
          (0, n.jsx)("path", {
            className: "line2",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M83.613,68.12 l4.035,137.197",
          }),
          (0, n.jsx)("path", {
            className: "line3",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M172.387,68.12 l-4.035,137.197",
          }),
        ],
      }),
      (0, n.jsxs)("g", {
        className: "lid",
        children: [
          (0, n.jsx)("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M27.121,38.577H228.88",
          }),
          (0, n.jsx)("path", {
            fill: "none",
            strokeWidth: "10",
            d: "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796",
          }),
        ],
      }),
    ],
  });
}
function J4(e) {
  let { bPending: t, bShowArm: r, className: C, ...o } = e;
  return t1({ bSuppressAssert: !0 })
    ? (0, n.jsxs)("svg", {
        className: k("SVGIcon_Button", "SVGIcon_FriendIcon", C),
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...o,
        children: [
          (0, n.jsx)("path", {
            d: "M18 17C15.6131 17 13.3239 17.9482 11.636 19.636C9.94821 21.3239 9 23.6131 9 26V31H27V26C27 23.6131 26.0518 21.3239 24.364 19.636C22.6761 17.9482 20.3869 17 18 17ZM18 14C18.9889 14 19.9556 13.7068 20.7779 13.1573C21.6001 12.6079 22.241 11.827 22.6194 10.9134C22.9978 9.99979 23.0969 8.99446 22.9039 8.02455C22.711 7.05465 22.2348 6.16373 21.5355 5.46447C20.8363 4.76521 19.9454 4.289 18.9755 4.09608C18.0055 3.90315 17.0002 4.00217 16.0866 4.3806C15.173 4.75904 14.3921 5.39991 13.8427 6.22215C13.2932 7.0444 13 8.0111 13 9C13 10.3261 13.5268 11.5979 14.4645 12.5355C15.4021 13.4732 16.6739 14 18 14Z",
            fill: "currentColor",
          }),
          (0, n.jsx)("path", {
            className: "WavingArm",
            opacity: r ? "1" : "0",
            d: "M4.67541 11.8555C5.6007 10.8308 7.18156 10.7501 8.20635 11.6754L18.9515 21.3773L15.6007 25.0884L4.85556 15.3865C3.83077 14.4612 3.75011 12.8803 4.67541 11.8555V11.8555Z",
            fill: "currentColor",
            strokeWidth: "0",
          }),
          (0, n.jsx)("path", {
            opacity: r ? "1" : "0",
            d: "M32.3573 11.8876C33.2626 12.93 33.1515 14.509 32.109 15.4144L23.2784 23.083L20 19.3078L28.8305 11.6392C29.873 10.7339 31.452 10.8451 32.3573 11.8876Z",
            fill: "currentColor",
            strokeWidth: "0",
          }),
        ],
      })
    : (0, n.jsxs)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        className: k(
          "SVGIcon_Button",
          "SVGIcon_FriendIcon",
          t ? " SVGIcon_FriendIcon_Pending" : "",
          C,
        ),
        x: "0px",
        y: "0px",
        width: "256px",
        height: "256px",
        viewBox: "0 0 256 256",
        children: [
          (0, n.jsxs)("g", {
            className: "Outline",
            children: [
              (0, n.jsx)("g", {
                transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
                children: (0, n.jsx)("path", {
                  d: "M102.239,90.394c-22.556,0-40.906-18.351-40.906-40.906c0-22.556,18.35-40.906,40.906-40.906s40.906,18.35,40.906,40.906 C143.145,72.043,124.795,90.394,102.239,90.394z",
                }),
              }),
              (0, n.jsx)("path", {
                d: "M127.453,250.212c-30.208,0-52.086-4.188-65.028-12.45c-12.507-7.983-13.141-17.484-13.141-19.308v-41.781 c0-20.554,5.356-38.104,15.489-50.754c11.63-14.519,29.216-22.193,50.858-22.194h23.646c21.643,0,39.229,7.674,50.858,22.193 c10.133,12.65,15.488,30.201,15.488,50.754v41.751c0.011,2.202-0.586,8.058-6.43,14.175 c-11.164,11.687-35.301,17.613-71.732,17.613C127.458,250.212,127.458,250.212,127.453,250.212z",
              }),
              (0, n.jsx)("path", {
                className: "WavingArm",
                opacity: t ? "1" : "0",
                d: "M87.625,170.102c-5.877,0-14.85-1.804-24.219-10.4c-8.677-7.961-20.959-20.438-30.563-31.048 c-18.766-20.732-21.125-26.658-19.522-32.832c1.463-5.64,10.288-27.077,26.729-28.926c0.429-0.048,0.867-0.072,1.303-0.072 c7.609,0,14.543,6.335,38.063,31.516c7.141,7.645,14.524,15.549,18.002,18.33l0.803,0.641c5.551,4.432,11.291,9.015,15.104,14.136 c8.477,11.383,3.634,20.705,1.158,24.185C108.034,164.692,97.995,170.102,87.625,170.102z",
              }),
            ],
          }),
          (0, n.jsxs)("g", {
            className: "foreground",
            children: [
              (0, n.jsx)("g", {
                transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
                children: (0, n.jsx)("circle", {
                  fill: "currentColor",
                  cx: "102.239",
                  cy: "49.488",
                  r: "33.446",
                }),
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M195.624,218.454v-41.781c0-34.743-16.666-62.948-56.347-62.948h-11.822h-0.997h-10.826 c-39.68,0.001-56.348,28.205-56.348,62.948v41.781c0,0,0,21.758,68.169,21.758C196.62,240.214,195.624,218.454,195.624,218.454z",
              }),
              (0, n.jsx)("path", {
                className: "WavingArm",
                opacity: t ? "1" : "0",
                d: "M41.167,76.833c6.53-0.734,39.348,39.127,50.007,47.647c10.659,8.52,21.327,16.686,15.16,25.353 s-20.646,16.74-36.167,2.5 s-48.516-48.801-47.167-54S31.599,77.909,41.167,76.833z",
              }),
            ],
          }),
        ],
      });
}
function $4(e) {
  let t = k("SVGIcon_Button", "SVGIcon_SteamLogo", e && e.className);
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#FFFFFF",
    className: t,
    x: "0px",
    y: "0px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("path", {
        fill: "currentColor",
        d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
      }),
      (0, n.jsx)("path", {
        fill: "currentColor",
        d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
      }),
      (0, n.jsx)("path", {
        fill: "currentColor",
        d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
      }),
    ],
  });
}
function Q4() {
  return (0, n.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    x: "0px",
    y: "0px",
    children: [
      (0, n.jsx)("path", {
        d: "M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z",
        fill: "currentColor",
      }),
    ],
  });
}
function q4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 4V20V24L7 20H24V4H2ZM34 12V32L29 28H12V24H28V12H34Z",
      fill: "currentColor",
    }),
  });
}
function K4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33.78 19.22L19.22 33.78L4 18.56V4H18.56L33.78 19.22Z",
      fill: "currentColor",
    }),
  });
}
function t5(e) {
  let { className: t, ...r } = e;
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: t,
    ...r,
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    children: (0, n.jsx)("circle", {
      fill: "currentColor",
      cx: "25",
      cy: "25",
      r: "25",
    }),
  });
}
var v2 = Object.seal({ onMoveUp: n1, onMoveDown: n1 }),
  e5 = Object.seal({ onMoveRight: n1, onMoveLeft: n1 });
function n1(e, t) {
  if (e.is_repeat) return !1;
  let r = t.GetRelativeDirection(e.button);
  return r == 1 ? t.BFocusFirstChild(0) : r == 2 ? t.BFocusLastChild(0) : !1;
}
var L = u(V());
var m2 = u(V());
var H = {
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
var b1 = u(Z()),
  y1 = m2.forwardRef((e, t) => {
    let { className: r, contextMenuStyles: C, disabled: o, ...i } = e;
    return (0, b1.jsx)("div", {
      ...i,
      ref: t,
      className: k(
        r,
        (C || H).contextMenuItem,
        "contextMenuItem",
        o && "disabled",
      ),
    });
  });
y1.displayName = "MenuItem";
function w2(e, t = !0) {
  return function (r, C, o) {
    let i = o.value;
    o.value = function (...l) {
      let s = this[C + "_DebounceProperties"];
      s === void 0 &&
        (s = this[C + "_DebounceProperties"] = { hTimer: void 0, nPending: 0 }),
        s.hTimer === void 0
          ? (t ? i.apply(this, l) : (s.nPending += 1),
            (s.hTimer = window.setInterval(() => {
              s.nPending > 0
                ? (i.apply(this, l), (s.nPending = 0))
                : (window.clearInterval(s.hTimer), (s.hTimer = void 0));
            }, e)))
          : (s.nPending += 1);
    };
  };
}
var p = u(Z()),
  s1 = L.createContext(null),
  A = class extends L.Component {
    m_navRef = X1();
    m_divRef = L.createRef();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        U1(this.props.refInstance, this.instance);
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
          className: r,
          label: C,
          onCancel: o,
          cancelText: i,
          refInstance: l,
          bForceDesktopPresentation: s,
          footer: a,
          ...d
        } = this.props,
        v = this.context.styles ?? H,
        m = i ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !s) {
        let w = () => {
          o && o(), this.instance.Hide();
        };
        return (0, p.jsxs)(M1, {
          ...d,
          className: k(
            v.contextMenuContents,
            { [v.hasSubMenu]: this.instance.BIsSubMenuVisible() },
            r,
          ),
          "flow-children": "column",
          onMoveLeft: this.HideIfSubmenu,
          onCancel: this.instance.BIsSubMenu() ? this.HideMenu : w,
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
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(x2, {}),
                  (0, p.jsx)(M, {
                    className: v.Cancel,
                    onSelected: w,
                    children: Y(m),
                  }),
                  a,
                ],
              }),
            this.instance.BIsSubMenuVisible() &&
              (0, p.jsx)("div", {
                className: v.contextMenuFade,
                onClick: () => this.instance.HideSubMenu(),
              }),
          ],
        });
      } else
        return (0, p.jsx)("div", {
          ...d,
          ref: this.m_divRef,
          className: k(
            {
              [v.contextMenuContents]: !0,
              [v.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [v.ForceDesktop]: s,
            },
            r,
          ),
          children: t,
        });
    }
  };
T1(A, "contextType", s1),
  g([f], A.prototype, "HideIfSubmenu", 1),
  g([f], A.prototype, "HideMenu", 1),
  (A = g([S1], A));
var M = class extends L.PureComponent {
  static contextType = s1;
  m_ref = L.createRef();
  m_refDiv = L.createRef();
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
        bInteractableItem: r,
        onMoveRight: C,
        ...o
      } = this.props,
      i = this.context?.styles ?? H;
    return this.context.presentation == 1
      ? (0, p.jsx)(M1, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ...o,
          className: k(
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
          role: o.role ?? "option",
          "aria-selected": this.props.selected ?? !1,
          children: this.props.children,
        })
      : (0, p.jsx)(y1, {
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
g([f], M.prototype, "OnClick", 1),
  g([f], M.prototype, "OnOKButton", 1),
  g([f], M.prototype, "OnMouseEnter", 1),
  g([f], M.prototype, "Focus", 1);
function x2(e) {
  let r = L.useContext(s1).styles ?? H;
  return (0, p.jsx)("div", { className: r.ContextMenuSeparator });
}
var Z5 = (e) => {
    let t = t1();
    return (0, p.jsx)(B, { ...e, bInGamepadUI: t });
  },
  B = class extends L.PureComponent {
    static contextType = s1;
    m_refItem = L.createRef();
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
      let r = t || this.m_refItem.current.element,
        C = this.instance.ShowSubMenu(r, this.RenderSubMenu);
      return C
        ? (this.setState({ bActive: !0 }),
          C.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, p.jsx)(A, {
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
          selectedWithin: r,
          children: C,
          className: o,
          bInGamepadUI: i,
          ...l
        } = this.props,
        s = this.context.styles ?? H;
      return (0, p.jsxs)(M, {
        ...l,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: r && !this.state.bActive,
        className: k(o, s.SubMenu, this.state.bActive && s.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, p.jsx)("div", { className: s.Label, children: t }),
          (0, p.jsx)("div", {
            className: s.Arrow,
            children: (0, p.jsx)(M2, {}),
          }),
        ],
      });
    }
  };
g([f], B.prototype, "OnSubMenuMouseEnter", 1),
  g([f], B.prototype, "OnSubMenuHidden", 1),
  g([f], B.prototype, "ShowSubMenu", 1),
  g([f], B.prototype, "RenderSubMenu", 1),
  g([f], B.prototype, "OnMouseEnter", 1),
  g([f], B.prototype, "OnClick", 1);
var G = class extends L.Component {
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
      b.IN_CLIENT && this.props.popup && this.m_elMenu
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
  OnMenuMutation(t, r) {
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
      let r = n3() ? 150 : 0;
      this.props.instance.OnCancel(r);
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
    let r = this.props.options,
      C = this.m_elMenu,
      o = this.props.element;
    if (!C) return;
    let i = this.props.popup != null,
      l = this.parentWin;
    if (!l || (o && l.getComputedStyle(o).display === "none")) return;
    let s = this.props.clientX,
      a = this.props.clientY,
      d = 0,
      v = 0,
      m = l.innerWidth,
      w = l.innerHeight,
      p1 = 1,
      I = o?.getBoundingClientRect();
    if (i)
      if (
        (!r.bScreenCoordinates &&
          s !== void 0 &&
          a !== void 0 &&
          ((s += l.screenLeft), (a += l.screenTop)),
        I && (I = j1(l, I)),
        r.targetMonitor)
      )
        (p1 = r.targetMonitor.flMonitorScale),
          (d = r.targetMonitor.nScreenLeft),
          (v = r.targetMonitor.nScreenTop),
          (m = r.targetMonitor.nScreenWidth),
          (w = r.targetMonitor.nScreenHeight);
      else {
        let x = l.screen,
          E1 = 0,
          I1 = 0;
        x.availLeft && (E1 = x.availLeft),
          x.availTop && (I1 = x.availTop),
          (d = E1),
          (v = I1),
          (m = x.availWidth),
          (w = x.availHeight);
      }
    (r.bOverlapHorizontal || r.bOverlapVertical) && (s = a = void 0);
    let W = C.getBoundingClientRect();
    if (r.flGamepadScale && r.flGamepadScale > 0) {
      let x = r.flGamepadScale;
      W = new DOMRect(W.x * x, W.y * x, W.width * x, W.height * x);
    }
    let c = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      F = s ?? I.left,
      O = s ?? I.right,
      T = W.width;
    r.bMatchWidth && ((T = O - F), (c.menuWidth = T)),
      r.bGrowToElementWidth && (c.menuMinWidth = Math.max(T, O - F));
    let A1 = (r.bOverlapHorizontal ? O : F) - d - T,
      u1 = A1 > 0,
      W1 = d + m - (r.bOverlapHorizontal ? F : O) - T,
      d1 = W1 > 0,
      g1 = (r.bPreferPopLeft || !d1) && u1;
    !u1 &&
      !d1 &&
      ((g1 = u1 > d1),
      r.bFitToWindow && ((T += (g1 ? A1 : W1) - 8), (c.menuWidth = T))),
      g1
        ? (c.menuRight = m - (r.bOverlapHorizontal ? O : F))
        : (c.menuLeft = r.bOverlapHorizontal ? F : O);
    let $ = a ?? I.top,
      Q = a ?? I.bottom,
      P = C.scrollHeight;
    r.bMatchHeight && ((P = Q - $), (c.menuHeight = P));
    let f1 = (r.bOverlapVertical ? Q : $) - v - P,
      P1 = f1 > 0,
      L1 = v + w - (r.bOverlapVertical ? $ : Q) - P,
      N1 = L1 > 0,
      C1 = (r.bPreferPopTop || !N1) && P1 && !r.bDisablePopTop;
    if (!P1 && !N1) {
      let x =
        r.bShiftToFitWindow !== void 0
          ? r.bShiftToFitWindow
          : !!r.bFitToWindow && !r.bOverlapHorizontal;
      (C1 = f1 > L1 && !r.bDisablePopTop),
        x && (C1 ? (c.menuTop = 4) : (c.menuBottom = 4)),
        r.bFitToWindow &&
          (x ? (P = Math.min(P, w - 8)) : (P += C1 ? f1 : L1),
          (c.menuHeight = P - 8));
    }
    c.menuBottom === void 0 &&
      c.menuTop === void 0 &&
      (C1
        ? (c.menuBottom = w - (r.bOverlapVertical ? Q : $))
        : (c.menuTop = r.bOverlapVertical ? $ : Q)),
      i
        ? (c.menuHeight || (c.menuHeight = W.height),
          c.menuWidth || (c.menuWidth = W.width),
          c.menuBottom &&
            !c.menuTop &&
            ((c.menuTop = w - c.menuBottom - c.menuHeight),
            (c.menuBottom = void 0)),
          c.menuRight &&
            !c.menuLeft &&
            ((c.menuLeft = m - c.menuRight - c.menuWidth),
            (c.menuRight = void 0)))
        : l.getComputedStyle(C).position != "fixed" &&
          (c.menuLeft && (c.menuLeft += l.scrollX),
          c.menuTop && (c.menuTop += l.scrollY),
          c.menuBottom &&
            (c.menuBottom +=
              l.document.body.clientHeight - l.scrollY - l.innerHeight),
          c.menuRight &&
            (c.menuRight +=
              l.document.body.clientWidth - l.scrollX - l.innerWidth)),
      (t ||
        c.menuLeft !== this.state.menuLeft ||
        c.menuRight !== this.state.menuRight ||
        c.menuTop !== this.state.menuTop ||
        c.menuBottom !== this.state.menuBottom ||
        c.menuWidth !== this.state.menuWidth ||
        c.menuHeight !== this.state.menuHeight) &&
        this.setState(c);
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
    let r = this.props.popup?.window,
      C = this.props.options;
    if (C.bScreenCoordinates) {
      let o = this.parentWin?.devicePixelRatio;
      if (C.targetMonitor) {
        let i = C.flGamepadScale || 1;
        o = (C.targetMonitor.flMonitorScale ?? 1) / i;
      }
      r?.SteamClient.Window.MoveTo(this.state.menuLeft, this.state.menuTop, o),
        r?.SteamClient.Window.ResizeTo(
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
        r?.SteamClient.Window.PositionWindowRelative(
          o,
          i,
          l,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (s) {
        console.error(s);
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
    let r = this.props.options.strClassName || H.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (r += " visible"),
      (r += " " + H.ContextMenuPosition),
      (0, p.jsx)("div", {
        className: r,
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
g([f], G.prototype, "BindMenuElement", 1),
  g([f, w2(100)], G.prototype, "OnMenuMutation", 1),
  g([f], G.prototype, "OnWindowResize", 1),
  g([f], G.prototype, "OnBlur", 1),
  g([f], G.prototype, "OnKeyDown", 1),
  (G = g([S1], G));
function S5(e) {
  return (0, p.jsx)("div", { className: H.ContextMenuMouseOverlay });
}
function i3(e, t) {
  let r = t.createEvent("HTMLEvents");
  r.initEvent("change", !0, !1), e.dispatchEvent(r);
}
function y5(e) {
  let t = [],
    r = Y1(e),
    C = r.getSelection(),
    o = C && C.rangeCount > 0 && C.toString().length > 0,
    i = e.target,
    l = !1,
    s = e.clientY,
    a = e.clientX;
  if (
    (i &&
      "tagName" in i &&
      (i.tagName == "INPUT" || i.tagName == "TEXTAREA") &&
      (l = !0),
    b.IN_CLIENT && l && j(r, "Browser.GetSpellingSuggestions"))
  ) {
    let [d, ...v] = r.SteamClient.Browser.GetSpellingSuggestions(),
      m = i;
    m &&
      v.forEach((w, p1) => {
        t.push(
          (0, p.jsx)(
            M,
            {
              onSelected: () => {
                m.setRangeText(w),
                  i3(m, r.document),
                  m.setSelectionRange(m.selectionEnd, m.selectionEnd),
                  i.focus();
              },
              className: H.NoSeparation,
              children: w,
            },
            `spelling_${p1}_${w}`,
          ),
        );
      }),
      d &&
        j(r, "Browser.AddWordToDictionary") &&
        ((d = d.trim()),
        t.push(
          (0, p.jsx)(
            M,
            {
              onSelected: () => r.SteamClient.Browser.AddWordToDictionary(d),
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
    ((r.document.queryCommandEnabled("cut") || (o && l)) &&
      t.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              r.document.execCommand("cut");
            },
            children: Y("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (r.document.queryCommandEnabled("copy") || o) &&
      t.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              r.document.execCommand("copy");
            },
            className: H.NoSeparation,
            children: Y("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    b.IN_CLIENT &&
      l &&
      j(r, "Browser.Paste") &&
      t.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              i.focus(), r.SteamClient.Browser.Paste();
            },
            className: H.NoSeparation,
            children: Y("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    b.IN_CLIENT && b.DEV_MODE)
  ) {
    let d = [];
    j(r, "Browser.OpenDevTools") &&
      d.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              i.focus(), r.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      j(r, "Browser.InspectElement") &&
        d.push(
          (0, p.jsx)(
            M,
            {
              onSelected: () => {
                i.focus(), r.SteamClient.Browser.InspectElement(s, a);
              },
              className: H.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      d.length > 0 &&
        (t.push((0, p.jsx)(x2, {}, "devtools-separator")), t.push(...d));
  }
  if (t.length) V2((0, p.jsx)(A, { children: t }), e, { bRootContextMenu: !0 });
  else {
    if (e.shiftKey) return;
    e.preventDefault(), e.stopPropagation();
  }
}
var l3 = "EnableContextMenuBlurDelay3";
function n3() {
  return (window.localStorage && window.localStorage.getItem(l3)) === "true";
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
  constructor(t, r) {
    i1(this), (this.m_ContextMenuManager = t), (this.m_rctElement = r);
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
  SetPosition(t, r, C) {
    (this.m_options = { ...this.m_options, ...C }),
      (this.m_position.clientX = t),
      (this.m_position.clientY = r),
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
  ShowSubMenu(t, r) {
    return this.m_elSubmenuItem == t
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = t),
        (this.m_submenu = new R1(this, r(), t, this.m_options.bForcePopup)),
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
g([K], J.prototype, "m_bVisible", 2), g([K.ref], J.prototype, "m_rctLabel", 2);
var e1 = J,
  c1 = class extends e1 {
    constructor(t, r, C, o, i, l) {
      super(t, r),
        (this.m_options = l || {}),
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
  R1 = class extends e1 {
    constructor(t, r, C, o) {
      super(t.Manager, r),
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
  m_callbacksMenusChanged = new z1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(t, r, C, o, i) {
    let l = new c1(this, t, r, C, o, i);
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
      t.sort((r, C) => r.key - C.key)
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
      ? D1(this.m_rgActiveSubmenus, t) &&
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
      let r = t?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(r);
    }
    GetContextMenuManager(t) {
      let r = this.m_mapManagers.get(t);
      if (!r) {
        let C = t;
        for (; !r && C.opener; )
          (C = C.opener), (r = this.m_mapManagers.get(C));
      }
      return r || ((r = new a1()), this.m_mapManagers.set(t, r)), r;
    }
    SetMenuManager(t, r) {
      U(
        this.m_mapManagers.get(t) === void 0 || !r || t == window,
        `Stomping CContextMenuManager for ${t.document.title}!`,
      ),
        this.m_mapManagers.set(t, r);
    }
    RegisterChildWindow(t, r) {
      return (
        this.m_mapManagers.set(r, this.GetContextMenuManager(t)),
        () => this.m_mapManagers.delete(r)
      );
    }
  },
  c3 = new _1();
function V2(e, t, r) {
  let C,
    o,
    i,
    l = t;
  if (l?.preventDefault && l?.stopPropagation) {
    if (l.shiftKey || (l.altKey && !r?.bRootContextMenu)) return null;
    l.preventDefault(),
      l.stopPropagation(),
      (i = l.currentTarget),
      (C = l.clientX),
      (o = l.clientY);
  } else i = t;
  let a = c3
    .GetContextMenuManagerFromWindow(i)
    .CreateContextMenuInstance(e, i, C, o, r);
  return a.Show(), r?.bCreateHidden && a.Hide(), a;
}
var h = u(Z());
function r6(e) {
  let { direction: t, ...r } = e;
  switch (t) {
    case "up":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M17.98 10.23L3.20996 25H32.75L17.98 10.23Z",
          fill: "currentColor",
        }),
      });
    case "down":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
          fill: "currentColor",
        }),
      });
    case "left":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
          fill: "currentColor",
        }),
      });
  }
}
function C6(e) {
  let { direction: t, ...r } = e;
  switch (t) {
    case "up":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          fill: "currentColor",
          d: "M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z",
        }),
      });
    case "down":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          fill: "currentColor",
          d: "M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z",
        }),
      });
    case "left":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          d: "M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          d: "M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z",
          fill: "currentColor",
        }),
      });
  }
}
function o6(e) {
  return (0, h.jsx)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: (0, h.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.7 15.2077C31.703 12.5623 30.94 9.97259 29.5032 7.75136C28.0664 5.53014 26.0172 3.77242 23.6031 2.69048C21.189 1.60855 18.5133 1.24869 15.8992 1.65436C13.2851 2.06002 10.8443 3.21387 8.87163 4.97655C6.89899 6.73922 5.47888 9.03532 4.78281 11.5875C4.08673 14.1397 4.14447 16.8389 4.94905 19.359C5.75363 21.8791 7.27063 24.1124 9.31684 25.7891C11.363 27.4658 13.8509 28.5142 16.48 28.8077V34.5077L27.31 25.2477C28.6947 23.9675 29.7996 22.4147 30.5551 20.6869C31.3106 18.959 31.7004 17.0935 31.7 15.2077ZM15.3 7.06885L16.3075 16.9577H20.1309L21.1039 7.06885H15.3ZM20.6927 22.0125C20.6927 23.3774 19.5862 24.4838 18.2213 24.4838C16.8564 24.4838 15.7499 23.3774 15.7499 22.0125C15.7499 20.6475 16.8564 19.5411 18.2213 19.5411C19.5862 19.5411 20.6927 20.6475 20.6927 22.0125Z",
      fill: "currentColor",
    }),
  });
}
function i6(e) {
  let { alert: t, urgent: r, ...C } = e;
  return r
    ? (0, h.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...C,
        children: [
          (0, h.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
          }),
          (0, h.jsx)("path", {
            fill: "#FFC82C",
            d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
          }),
        ],
      })
    : t
      ? (0, h.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...C,
          children: [
            (0, h.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
            }),
            (0, h.jsx)("path", {
              fill: "#1A9FFF",
              d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
            }),
          ],
        })
      : (0, h.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...C,
          children: (0, h.jsxs)("g", {
            className: "SVGIcon_Notification",
            children: [
              (0, h.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z",
                fill: "currentColor",
              }),
              (0, h.jsx)("path", {
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
function l6(e) {
  return (0, h.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, h.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
      fill: "currentColor",
    }),
  });
}
function n6(e) {
  return (0, h.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: [
      (0, h.jsx)("path", {
        d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
        fill: "currentColor",
      }),
      (0, h.jsx)("path", {
        d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
        fill: "currentColor",
      }),
    ],
  });
}
function s6(e) {
  return (0, h.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, h.jsx)("path", {
      d: "M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z",
      fill: "white",
    }),
  });
}
function c6(e) {
  return (0, h.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, h.jsx)("path", {
      d: "M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z",
      fill: "white",
    }),
  });
}
var H2 = u(V());
var a3 = u(V());
var r1 = class e {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(t, r, C = null, o = null) {
    (e.sm_strDomain = t),
      (e.sm_strController = r),
      (e.sm_strMethod = C),
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
  static InstrumentLink(t, r, C = null) {
    let o = e.GetLinkParam(r, C);
    return q.AddNavParamToURL(t, o);
  }
  static GetLinkParam(t, r = null) {
    let C;
    if (typeof t != "string") {
      if (t.domain) return q.GetLinkParam(t, r);
      C = t.feature || "";
    }
    let o;
    if (!e.sm_strComputedLinkPrefix && !e.ComputeStaticLinkPrefix())
      return null;
    o = e.sm_strComputedLinkPrefix;
    let i = q.EncodeEventComponent(C);
    return i && ((o += "_" + i), r && (o += "_" + r)), o;
  }
  static ComputeStaticLinkPrefix() {
    return e.sm_strDomain
      ? ((e.sm_strComputedLinkPrefix = q.ComputeLinkPrefix(
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
var G1 = u(V()),
  h3 = u(Z()),
  y6 = G1.createContext({});
var k2 = u(Z());
function p3(e) {
  let { children: t, ...r } = e,
    C = O1(),
    o = H2.useMemo(
      () => ({ ...r1.GetDefaultParams(), ...C, ...r }),
      [C, r.domain, r.controller, r.method, r.submethod, r.feature, r.depth],
    );
  return (0, k2.jsx)(F1, { ...o, children: t });
}
export {
  O2 as a,
  S1 as b,
  H as c,
  N4 as d,
  E4 as e,
  I4 as f,
  T4 as g,
  M2 as h,
  D4 as i,
  z4 as j,
  F4 as k,
  O4 as l,
  U4 as m,
  j4 as n,
  Y4 as o,
  X4 as p,
  J4 as q,
  $4 as r,
  Q4 as s,
  q4 as t,
  K4 as u,
  t5 as v,
  w2 as w,
  s1 as x,
  A as y,
  M as z,
  x2 as A,
  Z5 as B,
  G as C,
  S5 as D,
  y5 as E,
  a1 as F,
  c3 as G,
  V2 as H,
  m3 as I,
  r6 as J,
  C6 as K,
  o6 as L,
  i6 as M,
  l6 as N,
  n6 as O,
  s6 as P,
  c6 as Q,
  p3 as R,
};

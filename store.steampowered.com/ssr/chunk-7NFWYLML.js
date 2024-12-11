const CLSTAMP = 9406869;

import { a as V } from "./chunk-V7Y4LWEF.js";
import {
  a as Q,
  b as O1,
  c as r1,
  f as U1,
  g as j1,
  i as C1,
  u as j,
} from "./chunk-KUPPF7KT.js";
import { a as H2 } from "./chunk-LI6NTZBK.js";
import { c as q } from "./chunk-4DGHJVEW.js";
import { a as m2 } from "./chunk-FI4AM633.js";
import {
  E as U,
  S as F1,
  a as D1,
  ba as g1,
  o as T,
  p as T1,
  r as z1,
} from "./chunk-342AXII3.js";
import { a as e1 } from "./chunk-IVX676NW.js";
import { i as E1, m as I1, q as g } from "./chunk-ZUI3JXBC.js";
import { g as W, l as S, m as N } from "./chunk-D4VJXM5Y.js";
import { b as w2, d as f, e as d, f as P1 } from "./chunk-G7GZWTND.js";
var a3 = w2((c1) => {
  "use strict";
  c1.byteLength = o3;
  c1.toByteArray = l3;
  c1.fromByteArray = c3;
  var b = [],
    Z = [],
    C3 = typeof Uint8Array < "u" ? Uint8Array : Array,
    R1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (z = 0, v2 = R1.length; z < v2; ++z)
    (b[z] = R1[z]), (Z[R1.charCodeAt(z)] = z);
  var z, v2;
  Z[45] = 62;
  Z[95] = 63;
  function x2(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    r === -1 && (r = t);
    var C = r === t ? 0 : 4 - (r % 4);
    return [r, C];
  }
  function o3(e) {
    var t = x2(e),
      r = t[0],
      C = t[1];
    return ((r + C) * 3) / 4 - C;
  }
  function i3(e, t, r) {
    return ((t + r) * 3) / 4 - r;
  }
  function l3(e) {
    var t,
      r = x2(e),
      C = r[0],
      i = r[1],
      o = new C3(i3(e, C, i)),
      l = 0,
      s = i > 0 ? C - 4 : C,
      a;
    for (a = 0; a < s; a += 4)
      (t =
        (Z[e.charCodeAt(a)] << 18) |
        (Z[e.charCodeAt(a + 1)] << 12) |
        (Z[e.charCodeAt(a + 2)] << 6) |
        Z[e.charCodeAt(a + 3)]),
        (o[l++] = (t >> 16) & 255),
        (o[l++] = (t >> 8) & 255),
        (o[l++] = t & 255);
    return (
      i === 2 &&
        ((t = (Z[e.charCodeAt(a)] << 2) | (Z[e.charCodeAt(a + 1)] >> 4)),
        (o[l++] = t & 255)),
      i === 1 &&
        ((t =
          (Z[e.charCodeAt(a)] << 10) |
          (Z[e.charCodeAt(a + 1)] << 4) |
          (Z[e.charCodeAt(a + 2)] >> 2)),
        (o[l++] = (t >> 8) & 255),
        (o[l++] = t & 255)),
      o
    );
  }
  function n3(e) {
    return b[(e >> 18) & 63] + b[(e >> 12) & 63] + b[(e >> 6) & 63] + b[e & 63];
  }
  function s3(e, t, r) {
    for (var C, i = [], o = t; o < r; o += 3)
      (C =
        ((e[o] << 16) & 16711680) +
        ((e[o + 1] << 8) & 65280) +
        (e[o + 2] & 255)),
        i.push(n3(C));
    return i.join("");
  }
  function c3(e) {
    for (
      var t, r = e.length, C = r % 3, i = [], o = 16383, l = 0, s = r - C;
      l < s;
      l += o
    )
      i.push(s3(e, l, l + o > s ? s : l + o));
    return (
      C === 1
        ? ((t = e[r - 1]), i.push(b[t >> 2] + b[(t << 4) & 63] + "=="))
        : C === 2 &&
          ((t = (e[r - 2] << 8) + e[r - 1]),
          i.push(b[t >> 10] + b[(t >> 4) & 63] + b[(t << 2) & 63] + "=")),
      i.join("")
    );
  }
});
var Y1 = f(S());
if (!Y1.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!C1)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var L1 = f(m2());
function V2(e) {
  e();
}
function o1(e) {
  e || (e = V2), U1({ reactionScheduler: e });
}
var M1 = f(S());
function X1(e) {
  return j1(e);
}
var k2 = !1;
function y() {
  return k2;
}
var Z2 = 1e4,
  S2 = 1e4,
  y2 = (function () {
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
            C === void 0 && (C = Z2),
              clearTimeout(r.sweepTimeout),
              (r.sweepTimeout = void 0);
            var i = Date.now();
            r.registrations.forEach(function (o, l) {
              i - o.registeredAt >= C &&
                (r.finalize(o.value), r.registrations.delete(l));
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
            (this.sweepTimeout = setTimeout(this.sweep, S2));
        },
      }),
      e
    );
  })();
var J1 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : y2;
var P = new J1(function (e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
});
var Q1 = f(H2()),
  b2 = function () {};
function $1(e) {
  e.reaction = new r1("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function Y(e, t) {
  if ((t === void 0 && (t = "observed"), y())) return e();
  var r = M1.default.useRef(null);
  if (!r.current) {
    var C = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          P.unregister(C),
          (C.onStoreChange = s),
          C.reaction || ($1(C), (C.stateVersion = Symbol())),
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
  var i = r.current;
  i.reaction || ($1(i), P.register(r, i, i)),
    M1.default.useDebugValue(i.reaction, X1),
    (0, Q1.useSyncExternalStore)(i.subscribe, i.getSnapshot, b2);
  var o, l;
  if (
    (i.reaction.track(function () {
      try {
        o = e();
      } catch (s) {
        l = s;
      }
    }),
    l)
  )
    throw l;
  return o;
}
var E = f(S());
var t2 = typeof Symbol == "function" && Symbol.for,
  q1 = t2
    ? Symbol.for("react.forward_ref")
    : typeof E.forwardRef == "function" &&
      (0, E.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  K1 = t2
    ? Symbol.for("react.memo")
    : typeof E.memo == "function" &&
      (0, E.memo)(function (e) {
        return null;
      }).$$typeof;
function v1(e, t) {
  var r;
  if (K1 && e.$$typeof === K1)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (y()) return e;
  var C = (r = t?.forwardRef) !== null && r !== void 0 ? r : !1,
    i = e,
    o = e.displayName || e.name;
  if (
    q1 &&
    e.$$typeof === q1 &&
    ((C = !0), (i = e.render), typeof i != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var l = function (s, a) {
    return Y(function () {
      return i(s, a);
    }, o);
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
    G2(e, l),
    l
  );
}
var R2 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function G2(e, t) {
  Object.keys(e).forEach(function (r) {
    R2[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
function x1(e) {
  var t = e.children,
    r = e.render,
    C = t || r;
  return typeof C != "function" ? null : Y(C);
}
x1.displayName = "Observer";
var B2 = f(S());
var A2 = f(S());
var _2 = f(S());
var w1;
o1(L1.unstable_batchedUpdates);
var J3 =
  (w1 = P.finalizeAllImmediately) !== null && w1 !== void 0
    ? w1
    : function () {};
function P2(e, t) {
  return t === void 0 && (t = "observed"), Y(e, t);
}
var k = f(S());
function E2(e, t) {
  if (C2(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    C = Object.keys(t);
  if (r.length !== C.length) return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.hasOwnProperty.call(t, r[i]) || !C2(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
function C2(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var o2 = Symbol("patchMixins"),
  h2 = Symbol("patchedDefinition");
function I2(e, t) {
  var r = (e[o2] = e[o2] || {}),
    C = (r[t] = r[t] || {});
  return (C.locks = C.locks || 0), (C.methods = C.methods || []), C;
}
function i2(e, t) {
  for (
    var r = this, C = arguments.length, i = new Array(C > 2 ? C - 2 : 0), o = 2;
    o < C;
    o++
  )
    i[o - 2] = arguments[o];
  t.locks++;
  try {
    var l;
    return e != null && (l = e.apply(this, i)), l;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(r, i);
        });
  }
}
function l2(e, t) {
  var r = function () {
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    i2.call.apply(i2, [this, e, t].concat(o));
  };
  return r;
}
function D2(e, t, r) {
  var C = I2(e, t);
  C.methods.indexOf(r) < 0 && C.methods.push(r);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[h2])) {
    var o = e[t],
      l = p2(e, t, i ? i.enumerable : void 0, C, o);
    Object.defineProperty(e, t, l);
  }
}
function p2(e, t, r, C, i) {
  var o,
    l = l2(i, C);
  return (
    (o = {}),
    (o[h2] = !0),
    (o.get = function () {
      return l;
    }),
    (o.set = function (a) {
      if (this === e) l = l2(a, C);
      else {
        var u = p2(this, t, r, C, a);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var n2 = Symbol("ObserverAdministration"),
  s2 = Symbol("isMobXReactObserver");
function m1(e) {
  var t;
  return (t = e[n2]) != null
    ? t
    : (e[n2] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: H1(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function T2(e) {
  var t = e.prototype;
  if (e[s2]) {
    var r = H1(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[s2] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (e.__proto__ !== k.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = c2;
    else if (t.shouldComponentUpdate !== c2)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var C = t.render;
  if (typeof C != "function") {
    var i = H1(e);
    throw new Error(
      "[mobx-react] class component (" +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: y() ? C : z2.call(this, C),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var l = this;
      if (0) var s;
      var a = m1(this);
      return (
        (a.mounted = !0),
        P.unregister(this),
        (a.forceUpdate = function () {
          return l.forceUpdate();
        }),
        (!a.reaction || a.reactionInvalidatedBeforeMount) && a.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    D2(t, "componentWillUnmount", function () {
      var l;
      if (!y()) {
        var s = m1(this);
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
function H1(e) {
  return e.displayName || e.name || "<component>";
}
function z2(e) {
  var t = e.bind(this),
    r = m1(this);
  function C() {
    r.reaction ||
      ((r.reaction = F2(r)), r.mounted || P.register(this, r, this));
    var i = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = O1(!1, t);
        } catch (l) {
          i = l;
        }
      }),
      i)
    )
      throw i;
    return o;
  }
  return C;
}
function F2(e) {
  return new r1(e.name + ".render()", function () {
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
function c2(e, t) {
  return (
    y() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== t ? !0 : !E2(this.props, e)
  );
}
function k1(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(k.Component, e) ||
    Object.prototype.isPrototypeOf.call(k.PureComponent, e)
      ? T2(e)
      : v1(e)
  );
}
function V1() {
  return (
    (V1 = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var C in r)
              Object.prototype.hasOwnProperty.call(r, C) && (e[C] = r[C]);
          }
          return e;
        }),
    V1.apply(this, arguments)
  );
}
function O2(e, t) {
  if (e == null) return {};
  var r = {},
    C = Object.keys(e),
    i,
    o;
  for (o = 0; o < C.length; o++)
    (i = C[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var U2 = ["children"],
  a2 = k.default.createContext({});
function j2(e) {
  var t = e.children,
    r = O2(e, U2),
    C = k.default.useContext(a2),
    i = k.default.useRef(V1({}, C, r)),
    o = i.current;
  if (0) var l;
  return k.default.createElement(a2.Provider, { value: o }, t);
}
j2.displayName = "MobXProvider";
var p4 = Number.parseInt(k.default.version.split(".")[0]);
if (!k.Component) throw new Error("mobx-react requires React to be available");
if (!Q) throw new Error("mobx-react requires mobx to be available");
var J2 = f(S());
var Y2 = f(S());
var n = f(N());
function S4(e) {
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
function y4(e) {
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
function b4(e) {
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
function R4(e) {
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
function u2() {
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
function G4(e) {
  let t = e.color || "#FFFFFF";
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: V("SVGIcon_Button", "SVGIcon_X_Line", e.className),
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
function B4(e) {
  return q()
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
function _4() {
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
function A4() {
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
function W4() {
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
function N4() {
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
function P4() {
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
function E4() {
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
function I4(e) {
  let { bPending: t, bShowArm: r, className: C, ...i } = e;
  return q({ bSuppressAssert: !0 })
    ? (0, n.jsxs)("svg", {
        className: V("SVGIcon_Button", "SVGIcon_FriendIcon", C),
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...i,
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
        className: V(
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
function D4(e) {
  let t = V("SVGIcon_Button", "SVGIcon_SteamLogo", e && e.className);
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
function T4() {
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
function z4(e) {
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
function F4(e) {
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
function O4(e) {
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
var d2 = Object.seal({ onMoveUp: i1, onMoveDown: i1 }),
  U4 = Object.seal({ onMoveRight: i1, onMoveLeft: i1 });
function i1(e, t) {
  if (e.is_repeat) return !1;
  let r = t.GetRelativeDirection(e.button);
  return r == 1 ? t.BFocusFirstChild(0) : r == 2 ? t.BFocusLastChild(0) : !1;
}
var L = f(S());
var f2 = f(S());
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
var S1 = f(N()),
  Z1 = f2.forwardRef((e, t) => {
    let { className: r, contextMenuStyles: C, disabled: i, ...o } = e;
    return (0, S1.jsx)("div", {
      ...o,
      ref: t,
      className: V(
        r,
        (C || H).contextMenuItem,
        "contextMenuItem",
        i && "disabled",
      ),
    });
  });
Z1.displayName = "MenuItem";
function g2(e, t = !0) {
  return function (r, C, i) {
    let o = i.value;
    i.value = function (...l) {
      let s = this[C + "_DebounceProperties"];
      s === void 0 &&
        (s = this[C + "_DebounceProperties"] = { hTimer: void 0, nPending: 0 }),
        s.hTimer === void 0
          ? (t ? o.apply(this, l) : (s.nPending += 1),
            (s.hTimer = window.setInterval(() => {
              s.nPending > 0
                ? (o.apply(this, l), (s.nPending = 0))
                : (window.clearInterval(s.hTimer), (s.hTimer = void 0));
            }, e)))
          : (s.nPending += 1);
    };
  };
}
var p = f(N()),
  l1 = L.createContext(null),
  B = class extends L.Component {
    m_navRef = F1();
    m_divRef = L.createRef();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        D1(this.props.refInstance, this.instance);
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
          onCancel: i,
          cancelText: o,
          refInstance: l,
          bForceDesktopPresentation: s,
          footer: a,
          ...u
        } = this.props,
        v = this.context.styles ?? H,
        x = o ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !s) {
        let w = () => {
          i && i(), this.instance.Hide();
        };
        return (0, p.jsxs)(g1, {
          ...u,
          className: V(
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
          ...d2,
          children: [
            t,
            !this.instance.BIsSubMenu() &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(L2, {}),
                  (0, p.jsx)(M, {
                    className: v.Cancel,
                    onSelected: w,
                    children: j(x),
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
          ...u,
          ref: this.m_divRef,
          className: V(
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
P1(B, "contextType", l1),
  d([g], B.prototype, "HideIfSubmenu", 1),
  d([g], B.prototype, "HideMenu", 1),
  (B = d([k1], B));
var M = class extends L.PureComponent {
  static contextType = l1;
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
        ...i
      } = this.props,
      o = this.context?.styles ?? H;
    return this.context.presentation == 1
      ? (0, p.jsx)(g1, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ...i,
          className: V(
            this.props.className,
            o.contextMenuItem,
            "contextMenuItem",
            this.props.disabled && "disabled",
            this.props.selected && o.Selected,
            this.props.tone == "positive" && o.Positive,
            this.props.tone == "emphasis" && o.Emphasis,
            this.props.tone == "destructive" && o.Destructive,
          ),
          focusClassName: o.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: C,
          unselectable: this.props.unselectable,
          children: this.props.children,
        })
      : (0, p.jsx)(Z1, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ...i,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          children: this.props.children,
        });
  }
};
d([g], M.prototype, "OnClick", 1),
  d([g], M.prototype, "OnOKButton", 1),
  d([g], M.prototype, "OnMouseEnter", 1),
  d([g], M.prototype, "Focus", 1);
function L2(e) {
  let r = L.useContext(l1).styles ?? H;
  return (0, p.jsx)("div", { className: r.ContextMenuSeparator });
}
var g5 = (e) => {
    let t = q();
    return (0, p.jsx)(G, { ...e, bInGamepadUI: t });
  },
  G = class extends L.PureComponent {
    static contextType = l1;
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
      return (0, p.jsx)(B, {
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
          className: i,
          bInGamepadUI: o,
          ...l
        } = this.props,
        s = this.context.styles ?? H;
      return (0, p.jsxs)(M, {
        ...l,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: r && !this.state.bActive,
        className: V(i, s.SubMenu, this.state.bActive && s.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, p.jsx)("div", { className: s.Label, children: t }),
          (0, p.jsx)("div", {
            className: s.Arrow,
            children: (0, p.jsx)(u2, {}),
          }),
        ],
      });
    }
  };
d([g], G.prototype, "OnSubMenuMouseEnter", 1),
  d([g], G.prototype, "OnSubMenuHidden", 1),
  d([g], G.prototype, "ShowSubMenu", 1),
  d([g], G.prototype, "RenderSubMenu", 1),
  d([g], G.prototype, "OnMouseEnter", 1),
  d([g], G.prototype, "OnClick", 1);
var R = class extends L.Component {
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
      W.IN_CLIENT && this.props.popup && this.m_elMenu
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
      !(t.relatedTarget && T(t.currentTarget, t.relatedTarget)) &&
      !(
        t.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(t.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let r = t3() ? 150 : 0;
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
        !T(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let t = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
      t && t.focus ? t.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(t = !1) {
    let r = this.props.options,
      C = this.m_elMenu,
      i = this.props.element;
    if (!C) return;
    let o = this.props.popup != null,
      l = this.parentWin;
    if (!l || (i && l.getComputedStyle(i).display === "none")) return;
    let s = this.props.clientX,
      a = this.props.clientY,
      u = 0,
      v = 0,
      x = l.innerWidth,
      w = l.innerHeight,
      a1 = 1,
      I = i?.getBoundingClientRect();
    if (o)
      if (
        (!r.bScreenCoordinates &&
          s !== void 0 &&
          a !== void 0 &&
          ((s += l.screenLeft), (a += l.screenTop)),
        I && (I = T1(l, I)),
        r.targetMonitor)
      )
        (a1 = r.targetMonitor.flMonitorScale),
          (u = r.targetMonitor.nScreenLeft),
          (v = r.targetMonitor.nScreenTop),
          (x = r.targetMonitor.nScreenWidth),
          (w = r.targetMonitor.nScreenHeight);
      else {
        let m = l.screen,
          W1 = 0,
          N1 = 0;
        m.availLeft && (W1 = m.availLeft),
          m.availTop && (N1 = m.availTop),
          (u = W1),
          (v = N1),
          (x = m.availWidth),
          (w = m.availHeight);
      }
    (r.bOverlapHorizontal || r.bOverlapVertical) && (s = a = void 0);
    let _ = C.getBoundingClientRect();
    if (r.flGamepadScale && r.flGamepadScale > 0) {
      let m = r.flGamepadScale;
      _ = new DOMRect(_.x * m, _.y * m, _.width * m, _.height * m);
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
      D = _.width;
    r.bMatchWidth && ((D = O - F), (c.menuWidth = D)),
      r.bGrowToElementWidth && (c.menuMinWidth = Math.max(D, O - F));
    let G1 = (r.bOverlapHorizontal ? O : F) - u - D,
      h1 = G1 > 0,
      B1 = u + x - (r.bOverlapHorizontal ? F : O) - D,
      p1 = B1 > 0,
      u1 = (r.bPreferPopLeft || !p1) && h1;
    !h1 &&
      !p1 &&
      ((u1 = h1 > p1),
      r.bFitToWindow && ((D += (u1 ? G1 : B1) - 8), (c.menuWidth = D))),
      u1
        ? (c.menuRight = x - (r.bOverlapHorizontal ? O : F))
        : (c.menuLeft = r.bOverlapHorizontal ? F : O);
    let J = a ?? I.top,
      $ = a ?? I.bottom,
      A = C.scrollHeight;
    r.bMatchHeight && ((A = $ - J), (c.menuHeight = A));
    let d1 = (r.bOverlapVertical ? $ : J) - v - A,
      _1 = d1 > 0,
      f1 = v + w - (r.bOverlapVertical ? J : $) - A,
      A1 = f1 > 0,
      t1 = (r.bPreferPopTop || !A1) && _1 && !r.bDisablePopTop;
    if (!_1 && !A1) {
      let m =
        r.bShiftToFitWindow !== void 0
          ? r.bShiftToFitWindow
          : !!r.bFitToWindow && !r.bOverlapHorizontal;
      (t1 = d1 > f1 && !r.bDisablePopTop),
        m && (t1 ? (c.menuTop = 4) : (c.menuBottom = 4)),
        r.bFitToWindow &&
          (m ? (A = Math.min(A, w - 8)) : (A += t1 ? d1 : f1),
          (c.menuHeight = A - 8));
    }
    c.menuBottom === void 0 &&
      c.menuTop === void 0 &&
      (t1
        ? (c.menuBottom = w - (r.bOverlapVertical ? $ : J))
        : (c.menuTop = r.bOverlapVertical ? J : $)),
      o
        ? (c.menuHeight || (c.menuHeight = _.height),
          c.menuWidth || (c.menuWidth = _.width),
          c.menuBottom &&
            !c.menuTop &&
            ((c.menuTop = w - c.menuBottom - c.menuHeight),
            (c.menuBottom = void 0)),
          c.menuRight &&
            !c.menuLeft &&
            ((c.menuLeft = x - c.menuRight - c.menuWidth),
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
      let i = this.parentWin?.devicePixelRatio;
      if (C.targetMonitor) {
        let o = C.flGamepadScale || 1;
        i = (C.targetMonitor.flMonitorScale ?? 1) / o;
      }
      r?.SteamClient.Window.MoveTo(this.state.menuLeft, this.state.menuTop, i),
        r?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          i,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((i) => {
      let o = this.state.menuLeft - this.parentWin.screenX,
        l = this.state.menuTop - this.parentWin.screenY;
      try {
        r?.SteamClient.Window.PositionWindowRelative(
          i,
          o,
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
d([g], R.prototype, "BindMenuElement", 1),
  d([g, g2(100)], R.prototype, "OnMenuMutation", 1),
  d([g], R.prototype, "OnWindowResize", 1),
  d([g], R.prototype, "OnBlur", 1),
  d([g], R.prototype, "OnKeyDown", 1),
  (R = d([k1], R));
function L5(e) {
  return (0, p.jsx)("div", { className: H.ContextMenuMouseOverlay });
}
function q2(e, t) {
  let r = t.createEvent("HTMLEvents");
  r.initEvent("change", !0, !1), e.dispatchEvent(r);
}
function M5(e) {
  let t = [],
    r = z1(e),
    C = r.getSelection(),
    i = C && C.rangeCount > 0 && C.toString().length > 0,
    o = e.target,
    l = !1,
    s = e.clientY,
    a = e.clientX;
  if (
    (o &&
      "tagName" in o &&
      (o.tagName == "INPUT" || o.tagName == "TEXTAREA") &&
      (l = !0),
    W.IN_CLIENT && l && U(r, "Browser.GetSpellingSuggestions"))
  ) {
    let [u, ...v] = r.SteamClient.Browser.GetSpellingSuggestions(),
      x = o;
    x &&
      v.forEach((w, a1) => {
        t.push(
          (0, p.jsx)(
            M,
            {
              onSelected: () => {
                x.setRangeText(w),
                  q2(x, r.document),
                  x.setSelectionRange(x.selectionEnd, x.selectionEnd),
                  o.focus();
              },
              className: H.NoSeparation,
              children: w,
            },
            `spelling_${a1}_${w}`,
          ),
        );
      }),
      u &&
        U(r, "Browser.AddWordToDictionary") &&
        ((u = u.trim()),
        t.push(
          (0, p.jsx)(
            M,
            {
              onSelected: () => r.SteamClient.Browser.AddWordToDictionary(u),
              children: j(
                "#ContextMenu_AddToDictionary",
                u.length < 30 ? u : u.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${u}`,
          ),
        ));
  }
  if (
    ((r.document.queryCommandEnabled("cut") || (i && l)) &&
      t.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              r.document.execCommand("cut");
            },
            children: j("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (r.document.queryCommandEnabled("copy") || i) &&
      t.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              r.document.execCommand("copy");
            },
            className: H.NoSeparation,
            children: j("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    W.IN_CLIENT &&
      l &&
      U(r, "Browser.Paste") &&
      t.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              o.focus(), r.SteamClient.Browser.Paste();
            },
            className: H.NoSeparation,
            children: j("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    W.IN_CLIENT && W.DEV_MODE)
  ) {
    let u = [];
    U(r, "Browser.OpenDevTools") &&
      u.push(
        (0, p.jsx)(
          M,
          {
            onSelected: () => {
              o.focus(), r.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      U(r, "Browser.InspectElement") &&
        u.push(
          (0, p.jsx)(
            M,
            {
              onSelected: () => {
                o.focus(), r.SteamClient.Browser.InspectElement(s, a);
              },
              className: H.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      u.length > 0 &&
        (t.push((0, p.jsx)(L2, {}, "devtools-separator")), t.push(...u));
  }
  if (t.length) M2((0, p.jsx)(B, { children: t }), e, { bRootContextMenu: !0 });
  else {
    if (e.shiftKey) return;
    e.preventDefault(), e.stopPropagation();
  }
}
var K2 = "EnableContextMenuBlurDelay3";
function t3() {
  return (window.localStorage && window.localStorage.getItem(K2)) === "true";
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
  constructor(t, r) {
    C1(this), (this.m_ContextMenuManager = t), (this.m_rctElement = r);
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
        (this.m_submenu = new y1(this, r(), t, this.m_options.bForcePopup)),
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
      ? T(this.m_element, t)
      : T(this.m_popupContextMenu?.root_element, t);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : T(this.m_element, this.m_element?.ownerDocument.activeElement);
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
d([Q], X.prototype, "m_bVisible", 2), d([Q.ref], X.prototype, "m_rctLabel", 2);
var K = X,
  n1 = class extends K {
    constructor(t, r, C, i, o, l) {
      super(t, r),
        (this.m_options = l || {}),
        (this.m_position = {
          element: C,
          clientX: i,
          clientY: o,
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
    constructor(t, r, C, i) {
      super(t.Manager, r),
        (this.m_parentInstance = t),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: t.options.strClassName,
          bFitToWindow: t.options.bFitToWindow,
          bShiftToFitWindow: t.options.bShiftToFitWindow,
          bForcePopup: i,
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
var s1 = class {
  m_callbacksMenusChanged = new I1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(t, r, C, i, o) {
    let l = new n1(this, t, r, C, i, o);
    return (
      o?.bCreateHidden &&
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
      ? E1(this.m_rgActiveSubmenus, t) &&
        this.m_callbacksMenusChanged.Dispatch()
      : (e1(t == this.m_ActiveMenu, "Call to hide inactive menu"),
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
      return r || ((r = new s1()), this.m_mapManagers.set(t, r)), r;
    }
    SetMenuManager(t, r) {
      e1(
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
  r3 = new b1();
function M2(e, t, r) {
  let C,
    i,
    o,
    l = t;
  if (l?.preventDefault && l?.stopPropagation) {
    if (l.shiftKey || (l.altKey && !r?.bRootContextMenu)) return null;
    l.preventDefault(),
      l.stopPropagation(),
      (o = l.currentTarget),
      (C = l.clientX),
      (i = l.clientY);
  } else o = t;
  let a = r3
    .GetContextMenuManagerFromWindow(o)
    .CreateContextMenuInstance(e, o, C, i, r);
  return a.Show(), r?.bCreateHidden && a.Hide(), a;
}
var h = f(N());
function j5(e) {
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
function Y5(e) {
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
function X5(e) {
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
function J5(e) {
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
function $5(e) {
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
function Q5(e) {
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
function q5(e) {
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
function K5(e) {
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
export {
  P2 as a,
  k1 as b,
  H as c,
  S4 as d,
  y4 as e,
  b4 as f,
  R4 as g,
  u2 as h,
  G4 as i,
  B4 as j,
  _4 as k,
  A4 as l,
  W4 as m,
  N4 as n,
  P4 as o,
  E4 as p,
  I4 as q,
  D4 as r,
  T4 as s,
  z4 as t,
  F4 as u,
  O4 as v,
  g2 as w,
  l1 as x,
  B as y,
  M as z,
  L2 as A,
  g5 as B,
  R as C,
  L5 as D,
  M5 as E,
  s1 as F,
  r3 as G,
  M2 as H,
  a3 as I,
  j5 as J,
  Y5 as K,
  X5 as L,
  J5 as M,
  $5 as N,
  Q5 as O,
  q5 as P,
  K5 as Q,
};

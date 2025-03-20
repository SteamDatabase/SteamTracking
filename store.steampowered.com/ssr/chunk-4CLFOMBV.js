const CLSTAMP = 9621725;

import { e as Ge } from "./chunk-Z5ZSSGNQ.js";
import { m as Xt } from "./chunk-V6NE4MIP.js";
import { i as ue } from "./chunk-K34HL7TB.js";
import { a as br } from "./chunk-LTXTEHOA.js";
import { d as _r } from "./chunk-GT4J6GNR.js";
function v(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  if (0) var i;
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
          e +
          (r.length ? " " + r.map(String).join(",") : "") +
          ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
var gr = {};
function Mt() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : gr;
}
var dn = Object.assign,
  Qe = Object.getOwnPropertyDescriptor,
  B = Object.defineProperty,
  Me = Object.prototype,
  Et = [];
Object.freeze(Et);
var Vt = {};
Object.freeze(Vt);
var mr = typeof Proxy < "u",
  yr = Object.toString();
function pn() {
  mr || v("Proxy not available");
}
function hn(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var me = function () {};
function M(e) {
  return typeof e == "function";
}
function ce(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function ot(e) {
  return e !== null && typeof e == "object";
}
function ne(e) {
  if (!ot(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === yr;
}
function vn(e) {
  var t = e?.constructor;
  return t
    ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction"
    : !1;
}
function at(e, t, r) {
  B(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function _n(e, t, r) {
  B(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function re(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return ot(n) && n[r] === !0;
    }
  );
}
function De(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Or(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function $(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var bn = typeof Object.getOwnPropertySymbols < "u";
function Er(e) {
  var t = Object.keys(e);
  if (!bn) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Me.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var st =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : bn
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e),
          );
        }
      : Object.getOwnPropertyNames;
function gn(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function W(e, t) {
  return Me.hasOwnProperty.call(e, t);
}
var Dr =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      st(t).forEach(function (n) {
        r[n] = Qe(t, n);
      }),
      r
    );
  };
function Jt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Qt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ar(n.key), n);
  }
}
function ut(e, t, r) {
  return (
    t && Qt(e.prototype, t),
    r && Qt(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ye(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (
    Array.isArray(e) ||
    (r = Nr(e)) ||
    (t && e && typeof e.length == "number")
  ) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fe.apply(null, arguments)
  );
}
function mn(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Dt(e, t);
}
function Dt(e, t) {
  return (
    (Dt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Dt(e, t)
  );
}
function wr(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ar(e) {
  var t = wr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Nr(e, t) {
  if (e) {
    if (typeof e == "string") return Jt(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Jt(e, t)
          : void 0
    );
  }
}
var F = Symbol("mobx-stored-annotations");
function G(e) {
  function t(r, n) {
    if (Ve(n)) return e.decorate_20223_(r, n);
    we(r, n, e);
  }
  return Object.assign(t, e);
}
function we(e, t, r) {
  if ((W(e, F) || at(e, F, fe({}, e[F])), 0)) var n;
  Sr(e, r, t), jr(r) || (e[F][t] = r);
}
function Sr(e, t, r) {
  if (0) var n, i, o;
}
function Tr(e) {
  return W(e, F) || at(e, F, fe({}, e[F])), e[F];
}
function Ve(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var d = Symbol("mobx administration"),
  Ce = (function () {
    function e(r) {
      r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.isPendingUnobservation = !1),
        (this.isBeingObserved = !1),
        (this.observers_ = new Set()),
        (this.diffValue_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = _.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = r);
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.reportObserved = function () {
        return jn(this);
      }),
      (t.reportChanged = function () {
        L(), kn(this), R();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      e
    );
  })(),
  Ct = re("Atom", Ce);
function lt(e, t, r) {
  t === void 0 && (t = me), r === void 0 && (r = me);
  var n = new Ce(e);
  return t !== me && Ii(n, t), r !== me && Ft(n, r), n;
}
function Pr(e, t) {
  return e === t;
}
function xr(e, t) {
  return Yt(e, t);
}
function Lr(e, t) {
  return Yt(e, t, 1);
}
function Rr(e, t) {
  return Object.is
    ? Object.is(e, t)
    : e === t
      ? e !== 0 || 1 / e === 1 / t
      : e !== e && t !== t;
}
var Oe = { identity: Pr, structural: xr, default: Rr, shallow: Lr };
function de(e, t, r) {
  return Bt(e)
    ? e
    : Array.isArray(e)
      ? y.array(e, { name: r })
      : ne(e)
        ? y.object(e, void 0, { name: r })
        : De(e)
          ? y.map(e, { name: r })
          : $(e)
            ? y.set(e, { name: r })
            : typeof e == "function" && !ke(e) && !Le(e)
              ? vn(e)
                ? Ee(e)
                : xe(r, e)
              : e;
}
function Mr(e, t, r) {
  if (e == null || Y(e) || oe(e) || k(e) || ae(e)) return e;
  if (Array.isArray(e)) return y.array(e, { name: r, deep: !1 });
  if (ne(e)) return y.object(e, void 0, { name: r, deep: !1 });
  if (De(e)) return y.map(e, { name: r, deep: !1 });
  if ($(e)) return y.set(e, { name: r, deep: !1 });
}
function ct(e) {
  return e;
}
function Vr(e, t) {
  return Yt(e, t) ? t : e;
}
var Cr = "override";
function jr(e) {
  return e.annotationType_ === Cr;
}
function je(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: kr,
    extend_: Ir,
    decorate_20223_: Fr,
  };
}
function kr(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (ke(r.value)) return 1;
  var o = yn(e, this, t, r, !1);
  return B(n, t, o), 2;
}
function Ir(e, t, r, n) {
  var i = yn(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function Fr(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    o = this,
    a = function (c) {
      var l, p, h, w;
      return pe(
        (l = (p = o.options_) == null ? void 0 : p.name) != null
          ? l
          : n.toString(),
        c,
        (h = (w = o.options_) == null ? void 0 : w.autoAction) != null ? h : !1,
      );
    };
  if (r == "field") {
    i(function () {
      we(this, n, o);
    });
    return;
  }
  if (r == "method") {
    var s;
    return (
      ke(e) || (e = a(e)),
      (s = this.options_) != null &&
        s.bound &&
        i(function () {
          var u = this,
            c = u[n].bind(u);
          (c.isMobxAction = !0), (u[n] = c);
        }),
      e
    );
  }
  v(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function zr(e, t, r, n) {
  var i = t.annotationType_,
    o = n.value;
}
function yn(e, t, r, n, i) {
  var o, a, s, u, c, l, p;
  i === void 0 && (i = f.safeDescriptors), zr(e, t, r, n);
  var h = n.value;
  if ((o = t.options_) != null && o.bound) {
    var w;
    h = h.bind((w = e.proxy_) != null ? w : e.target_);
  }
  return {
    value: pe(
      (a = (s = t.options_) == null ? void 0 : s.name) != null
        ? a
        : r.toString(),
      h,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      (l = t.options_) != null && l.bound
        ? (p = e.proxy_) != null
          ? p
          : e.target_
        : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function On(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Br,
    extend_: Gr,
    decorate_20223_: Ur,
  };
}
function Br(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!W(e.target_, t) || !Le(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Le(r.value)) return 1;
  var o = En(e, this, t, r, !1, !1);
  return B(n, t, o), 2;
}
function Gr(e, t, r, n) {
  var i,
    o = En(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, n);
}
function Ur(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    Le(e) || (e = Ee(e)),
    (r = this.options_) != null &&
      r.bound &&
      i(function () {
        var o = this,
          a = o[n].bind(o);
        (a.isMobXFlow = !0), (o[n] = a);
      }),
    e
  );
}
function Hr(e, t, r, n) {
  var i = t.annotationType_,
    o = n.value;
}
function En(e, t, r, n, i, o) {
  o === void 0 && (o = f.safeDescriptors), Hr(e, t, r, n);
  var a = n.value;
  if ((Le(a) || (a = Ee(a)), i)) {
    var s;
    (a = a.bind((s = e.proxy_) != null ? s : e.target_)), (a.isMobXFlow = !0);
  }
  return {
    value: a,
    configurable: o ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !o,
  };
}
function jt(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Yr,
    extend_: Kr,
    decorate_20223_: $r,
  };
}
function Yr(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Kr(e, t, r, n) {
  return (
    Wr(e, this, t, r),
    e.defineComputedProperty_(
      t,
      fe({}, this.options_, { get: r.get, set: r.set }),
      n,
    )
  );
}
function $r(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var o = Ae(this)[d],
        a = fe({}, r.options_, { get: e, context: this });
      a.name || (a.name = "ObservableObject." + n.toString()),
        o.values_.set(n, new H(a));
    }),
    function () {
      return this[d].getObservablePropValue_(n);
    }
  );
}
function Wr(e, t, r, n) {
  var i = t.annotationType_,
    o = n.get;
}
function ft(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: qr,
    extend_: Xr,
    decorate_20223_: Jr,
  };
}
function qr(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Xr(e, t, r, n) {
  var i, o;
  return (
    Qr(e, this, t, r),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : de,
      n,
    )
  );
}
function Jr(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    o = new WeakSet();
  function a(s, u) {
    var c,
      l,
      p = Ae(s)[d],
      h = new ee(
        u,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : de,
        "ObservableObject." + i.toString(),
        !1,
      );
    p.values_.set(i, h), o.add(s);
  }
  if (n == "accessor")
    return {
      get: function () {
        return (
          o.has(this) || a(this, e.get.call(this)),
          this[d].getObservablePropValue_(i)
        );
      },
      set: function (u) {
        return o.has(this) || a(this, u), this[d].setObservablePropValue_(i, u);
      },
      init: function (u) {
        return o.has(this) || a(this, u), u;
      },
    };
}
function Qr(e, t, r, n) {
  var i = t.annotationType_;
}
var Zr = "true",
  ei = Dn();
function Dn(e) {
  return {
    annotationType_: Zr,
    options_: e,
    make_: ti,
    extend_: ni,
    decorate_20223_: ri,
  };
}
function ti(e, t, r, n) {
  var i, o;
  if (r.get) return ie.make_(e, t, r, n);
  if (r.set) {
    var a = pe(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: f.safeDescriptors ? e.isPlainObject_ : !0,
          set: a,
        }) === null
        ? 0
        : 2
      : (B(n, t, { configurable: !0, set: a }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (vn(r.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Ee.bound : Ee;
      return c.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? xe.bound : xe;
    return l.make_(e, t, r, n);
  }
  var p = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? y.ref : y;
  if (
    typeof r.value == "function" &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    var h;
    r.value = r.value.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return p.make_(e, t, r, n);
}
function ni(e, t, r, n) {
  var i, o;
  if (r.get) return ie.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      {
        configurable: f.safeDescriptors ? e.isPlainObject_ : !0,
        set: pe(t.toString(), r.set),
      },
      n,
    );
  if (
    typeof r.value == "function" &&
    (i = this.options_) != null &&
    i.autoBind
  ) {
    var a;
    r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? y.ref : y;
  return s.extend_(e, t, r, n);
}
function ri(e, t) {
  v("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var ii = "observable",
  oi = "observable.ref",
  ai = "observable.shallow",
  si = "observable.struct",
  wn = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(wn);
function Ue(e) {
  return e || wn;
}
var wt = ft(ii),
  ui = ft(oi, { enhancer: ct }),
  li = ft(ai, { enhancer: Mr }),
  ci = ft(si, { enhancer: Vr }),
  An = G(wt);
function He(e) {
  return e.deep === !0 ? de : e.deep === !1 ? ct : di(e.defaultDecorator);
}
function fi(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Dn(e)) : void 0;
}
function di(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null
    ? t
    : de;
}
function Nn(e, t, r) {
  if (Ve(t)) return wt.decorate_20223_(e, t);
  if (ce(t)) {
    we(e, t, wt);
    return;
  }
  return Bt(e)
    ? e
    : ne(e)
      ? y.object(e, t, r)
      : Array.isArray(e)
        ? y.array(e, t)
        : De(e)
          ? y.map(e, t)
          : $(e)
            ? y.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : y.box(e, t);
}
dn(Nn, An);
var pi = {
    box: function (t, r) {
      var n = Ue(r);
      return new ee(t, He(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ue(r);
      return (f.useProxies === !1 || n.proxy === !1 ? co : eo)(
        t,
        He(n),
        n.name,
      );
    },
    map: function (t, r) {
      var n = Ue(r);
      return new vt(t, He(n), n.name);
    },
    set: function (t, r) {
      var n = Ue(r);
      return new tr(t, He(n), n.name);
    },
    object: function (t, r, n) {
      return _e(function () {
        return zt(
          f.useProxies === !1 || n?.proxy === !1 ? Ae({}, n) : Ji({}, n),
          t,
          r,
        );
      });
    },
    ref: G(ui),
    shallow: G(li),
    deep: An,
    struct: G(ci),
  },
  y = dn(Nn, pi),
  Sn = "computed",
  hi = "computed.struct",
  At = jt(Sn),
  vi = jt(hi, { equals: Oe.structural }),
  ie = function (t, r) {
    if (Ve(r)) return At.decorate_20223_(t, r);
    if (ce(r)) return we(t, r, At);
    if (ne(t)) return G(jt(Sn, t));
    var n = ne(r) ? r : {};
    return (n.get = t), n.name || (n.name = t.name || ""), new H(n);
  };
Object.assign(ie, At);
ie.struct = G(vi);
var Zt,
  en,
  Ze = 0,
  _i = 1,
  bi =
    (Zt =
      (en = Qe(function () {}, "name")) == null ? void 0 : en.configurable) !=
    null
      ? Zt
      : !1,
  tn = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function pe(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return Tn(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    bi && ((tn.value = e), B(i, "name", tn)),
    i
  );
}
function Tn(e, t, r, n, i) {
  var o = gi(e, t, n, i);
  try {
    return r.apply(n, i);
  } catch (a) {
    throw ((o.error_ = a), a);
  } finally {
    mi(o);
  }
}
function gi(e, t, r, n) {
  var i = !1,
    o = 0;
  if (0) var a;
  var s = f.trackingDerivation,
    u = !t || !s;
  L();
  var c = f.allowStateChanges;
  u && (ve(), (c = dt(!0)));
  var l = It(!0),
    p = {
      runAsAction_: u,
      prevDerivation_: s,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: i,
      startTime_: o,
      actionId_: _i++,
      parentActionId_: Ze,
    };
  return (Ze = p.actionId_), p;
}
function mi(e) {
  Ze !== e.actionId_ && v(30),
    (Ze = e.parentActionId_),
    e.error_ !== void 0 && (f.suppressReactionErrors = !0),
    pt(e.prevAllowStateChanges_),
    Pe(e.prevAllowStateReads_),
    R(),
    e.runAsAction_ && q(e.prevDerivation_),
    (f.suppressReactionErrors = !1);
}
function kt(e, t) {
  var r = dt(e);
  try {
    return t();
  } finally {
    pt(r);
  }
}
function dt(e) {
  var t = f.allowStateChanges;
  return (f.allowStateChanges = e), t;
}
function pt(e) {
  f.allowStateChanges = e;
}
var ee = (function (e) {
    function t(n, i, o, a, s) {
      var u;
      return (
        o === void 0 && (o = "ObservableValue"),
        a === void 0 && (a = !0),
        s === void 0 && (s = Oe.default),
        (u = e.call(this, o) || this),
        (u.enhancer = void 0),
        (u.name_ = void 0),
        (u.equals = void 0),
        (u.hasUnreportedChange_ = !1),
        (u.interceptors_ = void 0),
        (u.changeListeners_ = void 0),
        (u.value_ = void 0),
        (u.dehancer = void 0),
        (u.enhancer = i),
        (u.name_ = o),
        (u.equals = s),
        (u.value_ = i(n, void 0, o)),
        u
      );
    }
    mn(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        var o = this.value_;
        if (((i = this.prepareNewValue_(i)), i !== f.UNCHANGED)) {
          var a = le();
          this.setNewValue_(i);
        }
      }),
      (r.prepareNewValue_ = function (i) {
        if ((z(this), P(this))) {
          var o = x(this, { object: this, type: U, newValue: i });
          if (!o) return f.UNCHANGED;
          i = o.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? f.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var o = this.value_;
        (this.value_ = i),
          this.reportChanged(),
          V(this) &&
            C(this, { type: U, object: this, newValue: i, oldValue: o });
      }),
      (r.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (r.intercept_ = function (i) {
        return Ie(this, i);
      }),
      (r.observe_ = function (i, o) {
        return (
          o &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: U,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Fe(this, i)
        );
      }),
      (r.raw = function () {
        return this.value_;
      }),
      (r.toJSON = function () {
        return this.get();
      }),
      (r.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (r.valueOf = function () {
        return gn(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Ce),
  yi = re("ObservableValue", ee);
function Ye(e, t) {
  return !!(e & t);
}
function Ke(e, t, r) {
  return r ? (e |= t) : (e &= ~t), e;
}
var H = (function () {
  function e(r) {
    (this.dependenciesState_ = _.NOT_TRACKING_),
      (this.observing_ = []),
      (this.newObserving_ = null),
      (this.observers_ = new Set()),
      (this.diffValue_ = 0),
      (this.runId_ = 0),
      (this.lastAccessedBy_ = 0),
      (this.lowestObserverState_ = _.UP_TO_DATE_),
      (this.unboundDepsCount_ = 0),
      (this.value_ = new et(null)),
      (this.name_ = void 0),
      (this.triggeredBy_ = void 0),
      (this.flags_ = 0),
      (this.derivation = void 0),
      (this.setter_ = void 0),
      (this.isTracing_ = te.NONE),
      (this.scope_ = void 0),
      (this.equals_ = void 0),
      (this.requiresReaction_ = void 0),
      (this.keepAlive_ = void 0),
      (this.onBOL = void 0),
      (this.onBUOL = void 0),
      r.get || v(31),
      (this.derivation = r.get),
      (this.name_ = r.name || "ComputedValue"),
      r.set && (this.setter_ = pe("ComputedValue-setter", r.set)),
      (this.equals_ =
        r.equals ||
        (r.compareStructural || r.struct ? Oe.structural : Oe.default)),
      (this.scope_ = r.context),
      (this.requiresReaction_ = r.requiresReaction),
      (this.keepAlive_ = !!r.keepAlive);
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      Ai(this);
    }),
    (t.onBO = function () {
      this.onBOL &&
        this.onBOL.forEach(function (n) {
          return n();
        });
    }),
    (t.onBUO = function () {
      this.onBUOL &&
        this.onBUOL.forEach(function (n) {
          return n();
        });
    }),
    (t.get = function () {
      if (
        (this.isComputing && v(32, this.name_, this.derivation),
        f.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
      )
        Nt(this) &&
          (this.warnAboutUntrackedRead_(),
          L(),
          (this.value_ = this.computeValue_(!1)),
          R());
      else if ((jn(this), Nt(this))) {
        var n = f.trackingContext;
        this.keepAlive_ && !n && (f.trackingContext = this),
          this.trackAndCompute() && wi(this),
          (f.trackingContext = n);
      }
      var i = this.value_;
      if (qe(i)) throw i.cause;
      return i;
    }),
    (t.set = function (n) {
      if (this.setter_) {
        this.isRunningSetter && v(33, this.name_), (this.isRunningSetter = !0);
        try {
          this.setter_.call(this.scope_, n);
        } finally {
          this.isRunningSetter = !1;
        }
      } else v(34, this.name_);
    }),
    (t.trackAndCompute = function () {
      var n = this.value_,
        i = this.dependenciesState_ === _.NOT_TRACKING_,
        o = this.computeValue_(!0),
        a = i || qe(n) || qe(o) || !this.equals_(n, o);
      return a && (this.value_ = o), a;
    }),
    (t.computeValue_ = function (n) {
      this.isComputing = !0;
      var i = dt(!1),
        o;
      if (n) o = xn(this, this.derivation, this.scope_);
      else if (f.disableErrorBoundaries === !0)
        o = this.derivation.call(this.scope_);
      else
        try {
          o = this.derivation.call(this.scope_);
        } catch (a) {
          o = new et(a);
        }
      return pt(i), (this.isComputing = !1), o;
    }),
    (t.suspend_ = function () {
      this.keepAlive_ || (St(this), (this.value_ = void 0));
    }),
    (t.observe_ = function (n, i) {
      var o = this,
        a = !0,
        s = void 0;
      return Hn(function () {
        var u = o.get();
        if (!a || i) {
          var c = ve();
          n({
            observableKind: "computed",
            debugObjectName: o.name_,
            type: U,
            object: o,
            newValue: u,
            oldValue: s,
          }),
            q(c);
        }
        (a = !1), (s = u);
      });
    }),
    (t.warnAboutUntrackedRead_ = function () {}),
    (t.toString = function () {
      return this.name_ + "[" + this.derivation.toString() + "]";
    }),
    (t.valueOf = function () {
      return gn(this.get());
    }),
    (t[Symbol.toPrimitive] = function () {
      return this.valueOf();
    }),
    ut(e, [
      {
        key: "isComputing",
        get: function () {
          return Ye(this.flags_, e.isComputingMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isComputingMask_, n);
        },
      },
      {
        key: "isRunningSetter",
        get: function () {
          return Ye(this.flags_, e.isRunningSetterMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isRunningSetterMask_, n);
        },
      },
      {
        key: "isBeingObserved",
        get: function () {
          return Ye(this.flags_, e.isBeingObservedMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isBeingObservedMask_, n);
        },
      },
      {
        key: "isPendingUnobservation",
        get: function () {
          return Ye(this.flags_, e.isPendingUnobservationMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isPendingUnobservationMask_, n);
        },
      },
    ])
  );
})();
H.isComputingMask_ = 1;
H.isRunningSetterMask_ = 2;
H.isBeingObservedMask_ = 4;
H.isPendingUnobservationMask_ = 8;
var he = re("ComputedValue", H),
  _;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(_ || (_ = {}));
var te;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LOG = 1)] = "LOG"),
    (e[(e.BREAK = 2)] = "BREAK");
})(te || (te = {}));
var et = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function qe(e) {
  return e instanceof et;
}
function Nt(e) {
  switch (e.dependenciesState_) {
    case _.UP_TO_DATE_:
      return !1;
    case _.NOT_TRACKING_:
    case _.STALE_:
      return !0;
    case _.POSSIBLY_STALE_: {
      for (
        var t = It(!0), r = ve(), n = e.observing_, i = n.length, o = 0;
        o < i;
        o++
      ) {
        var a = n[o];
        if (he(a)) {
          if (f.disableErrorBoundaries) a.get();
          else
            try {
              a.get();
            } catch {
              return q(r), Pe(t), !0;
            }
          if (e.dependenciesState_ === _.STALE_) return q(r), Pe(t), !0;
        }
      }
      return Rn(e), q(r), Pe(t), !1;
    }
  }
}
function Pn() {
  return f.trackingDerivation !== null;
}
function z(e) {
  return;
  var t;
}
function xn(e, t, r) {
  var n = It(!0);
  Rn(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++f.runId);
  var i = f.trackingDerivation;
  (f.trackingDerivation = e), f.inBatch++;
  var o;
  if (f.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (a) {
      o = new et(a);
    }
  return f.inBatch--, (f.trackingDerivation = i), Oi(e), Pe(n), o;
}
function Oi(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = _.UP_TO_DATE_,
      i = 0,
      o = e.unboundDepsCount_,
      a = 0;
    a < o;
    a++
  ) {
    var s = r[a];
    s.diffValue_ === 0 && ((s.diffValue_ = 1), i !== a && (r[i] = s), i++),
      s.dependenciesState_ > n && (n = s.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var u = t[o];
    u.diffValue_ === 0 && Vn(u, e), (u.diffValue_ = 0);
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue_ === 1 && ((c.diffValue_ = 0), Di(c, e));
  }
  n !== _.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function St(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Vn(t[r], e);
  e.dependenciesState_ = _.NOT_TRACKING_;
}
function Ln(e) {
  var t = ve();
  try {
    return e();
  } finally {
    q(t);
  }
}
function ve() {
  var e = f.trackingDerivation;
  return (f.trackingDerivation = null), e;
}
function q(e) {
  f.trackingDerivation = e;
}
function It(e) {
  var t = f.allowStateReads;
  return (f.allowStateReads = e), t;
}
function Pe(e) {
  f.allowStateReads = e;
}
function Rn(e) {
  if (e.dependenciesState_ !== _.UP_TO_DATE_) {
    e.dependenciesState_ = _.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = _.UP_TO_DATE_;
  }
}
var Xe = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  Je = !0,
  Mn = !1,
  f = (function () {
    var e = Mt();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Je = !1),
      e.__mobxGlobals &&
        e.__mobxGlobals.version !== new Xe().version &&
        (Je = !1),
      Je
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Xe()))
        : (setTimeout(function () {
            Mn || v(35);
          }, 1),
          new Xe())
    );
  })();
function Ei() {
  if (
    ((f.pendingReactions.length || f.inBatch || f.isRunningReactions) && v(36),
    (Mn = !0),
    Je)
  ) {
    var e = Mt();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (f = new Xe());
  }
}
function Di(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function Vn(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Cn(e);
}
function Cn(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), f.pendingUnobservations.push(e));
}
function L() {
  f.inBatch++;
}
function R() {
  if (--f.inBatch === 0) {
    In();
    for (var e = f.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      (r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof H && r.suspend_());
    }
    f.pendingUnobservations = [];
  }
}
function jn(e) {
  var t = f.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved &&
          f.trackingContext &&
          ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && f.inBatch > 0 && Cn(e), !1);
}
function kn(e) {
  e.lowestObserverState_ !== _.STALE_ &&
    ((e.lowestObserverState_ = _.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = _.STALE_);
    }));
}
function wi(e) {
  e.lowestObserverState_ !== _.STALE_ &&
    ((e.lowestObserverState_ = _.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _.POSSIBLY_STALE_
        ? (t.dependenciesState_ = _.STALE_)
        : t.dependenciesState_ === _.UP_TO_DATE_ &&
          (e.lowestObserverState_ = _.UP_TO_DATE_);
    }));
}
function Ai(e) {
  e.lowestObserverState_ === _.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = _.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _.UP_TO_DATE_ &&
        ((t.dependenciesState_ = _.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var tt = (function () {
  function e(r, n, i, o) {
    r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = _.NOT_TRACKING_),
      (this.diffValue_ = 0),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.isDisposed_ = !1),
      (this.isScheduled_ = !1),
      (this.isTrackPending_ = !1),
      (this.isRunning_ = !1),
      (this.isTracing_ = te.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = o);
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled_ ||
        ((this.isScheduled_ = !0), f.pendingReactions.push(this), In());
    }),
    (t.isScheduled = function () {
      return this.isScheduled_;
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed_) {
        L(), (this.isScheduled_ = !1);
        var n = f.trackingContext;
        if (((f.trackingContext = this), Nt(this))) {
          this.isTrackPending_ = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        (f.trackingContext = n), R();
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed_) {
        L();
        var i = le(),
          o;
        this.isRunning_ = !0;
        var a = f.trackingContext;
        f.trackingContext = this;
        var s = xn(this, n, void 0);
        (f.trackingContext = a),
          (this.isRunning_ = !1),
          (this.isTrackPending_ = !1),
          this.isDisposed_ && St(this),
          qe(s) && this.reportExceptionInDerivation_(s.cause),
          R();
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (f.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      f.suppressReactionErrors || console.error(o, n),
        f.globalReactionErrorHandlers.forEach(function (a) {
          return a(n, i);
        });
    }),
    (t.dispose = function () {
      this.isDisposed_ ||
        ((this.isDisposed_ = !0), this.isRunning_ || (L(), St(this), R()));
    }),
    (t.getDisposer_ = function (n) {
      var i = this,
        o = function a() {
          i.dispose(),
            n == null ||
              n.removeEventListener == null ||
              n.removeEventListener("abort", a);
        };
      return (
        n == null ||
          n.addEventListener == null ||
          n.addEventListener("abort", o),
        (o[d] = this),
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {
      n === void 0 && (n = !1), Wi(this, n);
    }),
    e
  );
})();
var Ni = 100,
  Tt = function (t) {
    return t();
  };
function In() {
  f.inBatch > 0 || f.isRunningReactions || Tt(Si);
}
function Si() {
  f.isRunningReactions = !0;
  for (var e = f.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Ni &&
      (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  f.isRunningReactions = !1;
}
var nt = re("Reaction", tt);
function Ti(e) {
  var t = Tt;
  Tt = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function le() {
  return !1;
}
function Pi(e) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var Fn = "action",
  xi = "action.bound",
  zn = "autoAction",
  Li = "autoAction.bound",
  Bn = "<unnamed action>",
  Pt = je(Fn),
  Ri = je(xi, { bound: !0 }),
  xt = je(zn, { autoAction: !0 }),
  Mi = je(Li, { autoAction: !0, bound: !0 });
function Gn(e) {
  var t = function (n, i) {
    if (M(n)) return pe(n.name || Bn, n, e);
    if (M(i)) return pe(n, i, e);
    if (Ve(i)) return (e ? xt : Pt).decorate_20223_(n, i);
    if (ce(i)) return we(n, i, e ? xt : Pt);
    if (ce(n)) return G(je(e ? zn : Fn, { name: n, autoAction: e }));
  };
  return t;
}
var O = Gn(!1);
Object.assign(O, Pt);
var xe = Gn(!0);
Object.assign(xe, xt);
O.bound = G(Ri);
xe.bound = G(Mi);
function Un(e) {
  return Tn(e.name || Bn, !1, e, this, void 0);
}
function ke(e) {
  return M(e) && e.isMobxAction === !0;
}
function Hn(e, t) {
  var r, n, i, o;
  t === void 0 && (t = Vt);
  var a = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    u;
  if (s)
    u = new tt(
      a,
      function () {
        this.track(p);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = Yn(t),
      l = !1;
    u = new tt(
      a,
      function () {
        l ||
          ((l = !0),
          c(function () {
            (l = !1), u.isDisposed_ || u.track(p);
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function p() {
    e(u);
  }
  return (
    ((i = t) != null && (i = i.signal) != null && i.aborted) || u.schedule_(),
    u.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var Vi = function (t) {
  return t();
};
function Yn(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Vi;
}
function Kn(e, t, r) {
  var n, i, o;
  r === void 0 && (r = Vt);
  var a = (n = r.name) != null ? n : "Reaction",
    s = O(a, r.onError ? Ci(r.onError, t) : t),
    u = !r.scheduler && !r.delay,
    c = Yn(r),
    l = !0,
    p = !1,
    h,
    w = r.compareStructural ? Oe.structural : r.equals || Oe.default,
    E = new tt(
      a,
      function () {
        l || u ? A() : p || ((p = !0), c(A));
      },
      r.onError,
      r.requiresObservable,
    );
  function A() {
    if (((p = !1), !E.isDisposed_)) {
      var D = !1,
        I = h;
      E.track(function () {
        var J = kt(!1, function () {
          return e(E);
        });
        (D = l || !w(h, J)), (h = J);
      }),
        ((l && r.fireImmediately) || (!l && D)) && s(h, I, E),
        (l = !1);
    }
  }
  return (
    ((i = r) != null && (i = i.signal) != null && i.aborted) || E.schedule_(),
    E.getDisposer_((o = r) == null ? void 0 : o.signal)
  );
}
function Ci(e, t) {
  return function () {
    try {
      return t.apply(this, arguments);
    } catch (r) {
      e.call(this, r);
    }
  };
}
var ji = "onBO",
  ki = "onBUO";
function Ii(e, t, r) {
  return $n(ji, e, t, r);
}
function Ft(e, t, r) {
  return $n(ki, e, t, r);
}
function $n(e, t, r, n) {
  var i = typeof n == "function" ? K(t, r) : K(t),
    o = M(n) ? n : r,
    a = e + "L";
  return (
    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
    function () {
      var s = i[a];
      s && (s.delete(o), s.size === 0 && delete i[a]);
    }
  );
}
var Fi = "never",
  $e = "always",
  zi = "observed";
function Po(e) {
  e.isolateGlobalState === !0 && Ei();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 &&
      (f.useProxies = t === $e ? !0 : t === Fi ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (f.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === $e ? $e : r === zi;
    (f.enforceActions = n), (f.allowStateChanges = !(n === !0 || n === $e));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (f[i] = !!e[i]);
  }),
    (f.allowStateReads = !f.observableRequiresReaction),
    e.reactionScheduler && Ti(e.reactionScheduler);
}
function zt(e, t, r, n) {
  var i = Dr(t);
  return (
    _e(function () {
      var o = Ae(e, n)[d];
      st(i).forEach(function (a) {
        o.extend_(a, i[a], r && a in r ? r[a] : !0);
      });
    }),
    e
  );
}
function xo(e, t) {
  return Wn(K(e, t));
}
function Wn(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ &&
      e.observing_.length > 0 &&
      (t.dependencies = Bi(e.observing_).map(Wn)),
    t
  );
}
function Bi(e) {
  return Array.from(new Set(e));
}
var Gi = 0;
function qn() {
  this.message = "FLOW_CANCELLED";
}
qn.prototype = Object.create(Error.prototype);
var yt = On("flow"),
  Ui = On("flow.bound", { bound: !0 }),
  Ee = Object.assign(function (t, r) {
    if (Ve(r)) return yt.decorate_20223_(t, r);
    if (ce(r)) return we(t, r, yt);
    var n = t,
      i = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          u = arguments,
          c = ++Gi,
          l = O(i + " - runid: " + c + " - init", n).apply(s, u),
          p,
          h = void 0,
          w = new Promise(function (E, A) {
            var D = 0;
            p = A;
            function I(N) {
              h = void 0;
              var Q;
              try {
                Q = O(i + " - runid: " + c + " - yield " + D++, l.next).call(
                  l,
                  N,
                );
              } catch (se) {
                return A(se);
              }
              Te(Q);
            }
            function J(N) {
              h = void 0;
              var Q;
              try {
                Q = O(i + " - runid: " + c + " - yield " + D++, l.throw).call(
                  l,
                  N,
                );
              } catch (se) {
                return A(se);
              }
              Te(Q);
            }
            function Te(N) {
              if (M(N?.then)) {
                N.then(Te, A);
                return;
              }
              return N.done
                ? E(N.value)
                : ((h = Promise.resolve(N.value)), h.then(I, J));
            }
            I(void 0);
          });
        return (
          (w.cancel = O(i + " - runid: " + c + " - cancel", function () {
            try {
              h && nn(h);
              var E = l.return(void 0),
                A = Promise.resolve(E.value);
              A.then(me, me), nn(A), p(new qn());
            } catch (D) {
              p(D);
            }
          })),
          w
        );
      };
    return (o.isMobXFlow = !0), o;
  }, yt);
Ee.bound = G(Ui);
function nn(e) {
  M(e.cancel) && e.cancel();
}
function Le(e) {
  return e?.isMobXFlow === !0;
}
function Xn(e, t) {
  if (t === void 0) return he(e);
  if (Y(e) === !1 || !e[d].values_.has(t)) return !1;
  var r = K(e, t);
  return he(r);
}
function Jn(e) {
  return Xn(e);
}
function ht(e, t) {
  return Xn(e, t);
}
function Hi(e, t) {
  return e
    ? t !== void 0
      ? Y(e)
        ? e[d].values_.has(t)
        : !1
      : Y(e) || !!e[d] || Ct(e) || nt(e) || he(e)
    : !1;
}
function Bt(e) {
  return Hi(e);
}
function Qn(e) {
  if (Y(e)) return e[d].keys_();
  if (k(e) || ae(e)) return Array.from(e.keys());
  if (oe(e))
    return e.map(function (t, r) {
      return r;
    });
  v(5);
}
function Yi(e) {
  if (Y(e)) return e[d].ownKeys_();
  v(38);
}
function Zn(e, t, r, n) {
  return M(r) ? $i(e, t, r, n) : Ki(e, t, r);
}
function Ki(e, t, r) {
  return Ne(e).observe_(t, r);
}
function $i(e, t, r, n) {
  return Ne(e, t).observe_(r, n);
}
function We(e, t, r) {
  return e.set(t, r), r;
}
function ge(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !Bt(e))
    return e;
  if (yi(e) || he(e)) return ge(e.get(), t);
  if (t.has(e)) return t.get(e);
  if (oe(e)) {
    var r = We(t, e, new Array(e.length));
    return (
      e.forEach(function (a, s) {
        r[s] = ge(a, t);
      }),
      r
    );
  }
  if (ae(e)) {
    var n = We(t, e, new Set());
    return (
      e.forEach(function (a) {
        n.add(ge(a, t));
      }),
      n
    );
  }
  if (k(e)) {
    var i = We(t, e, new Map());
    return (
      e.forEach(function (a, s) {
        i.set(s, ge(a, t));
      }),
      i
    );
  } else {
    var o = We(t, e, {});
    return (
      Yi(e).forEach(function (a) {
        Me.propertyIsEnumerable.call(e, a) && (o[a] = ge(e[a], t));
      }),
      o
    );
  }
}
function Lo(e, t) {
  return ge(e, new Map());
}
function Wi() {
  return;
  for (var e, t, r, n; n < t; n++) r[n] = arguments[n];
  var i;
}
function qi(e) {
  switch (e.length) {
    case 0:
      return f.trackingDerivation;
    case 1:
      return K(e[0]);
    case 2:
      return K(e[0], e[1]);
  }
}
function T(e, t) {
  t === void 0 && (t = void 0), L();
  try {
    return e.apply(t);
  } finally {
    R();
  }
}
function be(e) {
  return e[d];
}
var Xi = {
  has: function (t, r) {
    return be(t).has_(r);
  },
  get: function (t, r) {
    return be(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return ce(r) ? ((i = be(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return ce(r) ? ((n = be(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = be(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return be(t).ownKeys_();
  },
  preventExtensions: function (t) {
    v(13);
  },
};
function Ji(e, t) {
  var r, n;
  return (
    pn(),
    (e = Ae(e, t)),
    (n = (r = e[d]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Xi))
  );
}
function P(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ie(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    hn(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function x(e, t) {
  var r = ve();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, o = n.length;
      i < o && ((t = n[i](t)), t && !t.type && v(14), !!t);
      i++
    );
    return t;
  } finally {
    q(r);
  }
}
function V(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Fe(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    hn(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function C(e, t) {
  var r = ve(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, o = n.length; i < o; i++) n[i](t);
    q(r);
  }
}
function Gt(e, t, r) {
  return (
    _e(function () {
      var n,
        i = Ae(e, r)[d];
      (n = t) != null || (t = Tr(e)),
        st(t).forEach(function (o) {
          return i.make_(o, t[o]);
        });
    }),
    e
  );
}
var rn = "splice",
  U = "update",
  Qi = 1e4,
  Zi = {
    get: function (t, r) {
      var n = t[d];
      return r === d
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : W(rt, r)
              ? rt[r]
              : t[r];
    },
    set: function (t, r, n) {
      var i = t[d];
      return (
        r === "length" && i.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : i.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      v(15);
    },
  },
  Ut = (function () {
    function e(r, n, i, o) {
      r === void 0 && (r = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = i),
        (this.legacyMode_ = o),
        (this.atom_ = new Ce(r)),
        (this.enhancer_ = function (a, s) {
          return n(a, s, "ObservableArray[..]");
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.dehanceValues_ = function (n) {
        return this.dehancer !== void 0 && n.length > 0
          ? n.map(this.dehancer)
          : n;
      }),
      (t.intercept_ = function (n) {
        return Ie(this, n);
      }),
      (t.observe_ = function (n, i) {
        return (
          i === void 0 && (i = !1),
          i &&
            n({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          Fe(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && v("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
          if (n > i) {
            for (var o = new Array(n - i), a = 0; a < n - i; a++) o[a] = void 0;
            this.spliceWithArray_(i, 0, o);
          } else this.spliceWithArray_(n, i - n);
      }),
      (t.updateArrayLength_ = function (n, i) {
        n !== this.lastKnownLength_ && v(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && or(n + i + 1);
      }),
      (t.spliceWithArray_ = function (n, i, o) {
        var a = this;
        z(this.atom_);
        var s = this.values_.length;
        if (
          (n === void 0
            ? (n = 0)
            : n > s
              ? (n = s)
              : n < 0 && (n = Math.max(0, s + n)),
          arguments.length === 1
            ? (i = s - n)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, s - n))),
          o === void 0 && (o = Et),
          P(this))
        ) {
          var u = x(this, {
            object: this.proxy_,
            type: rn,
            index: n,
            removedCount: i,
            added: o,
          });
          if (!u) return Et;
          (i = u.removedCount), (o = u.added);
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (p) {
                  return a.enhancer_(p, void 0);
                })),
          this.legacyMode_)
        ) {
          var c = o.length - i;
          this.updateArrayLength_(s, c);
        }
        var l = this.spliceItemsIntoValues_(n, i, o);
        return (
          (i !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, i, o) {
        if (o.length < Qi) {
          var a;
          return (a = this.values_).splice.apply(a, [n, i].concat(o));
        } else {
          var s = this.values_.slice(n, n + i),
            u = this.values_.slice(n + i);
          this.values_.length += o.length - i;
          for (var c = 0; c < o.length; c++) this.values_[n + c] = o[c];
          for (var l = 0; l < u.length; l++)
            this.values_[n + o.length + l] = u[l];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, i, o) {
        var a = !this.owned_ && le(),
          s = V(this),
          u =
            s || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: U,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: o,
                }
              : null;
        this.atom_.reportChanged(), s && C(this, u);
      }),
      (t.notifyArraySplice_ = function (n, i, o) {
        var a = !this.owned_ && le(),
          s = V(this),
          u =
            s || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: rn,
                  index: n,
                  removed: o,
                  added: i,
                  removedCount: o.length,
                  addedCount: i.length,
                }
              : null;
        this.atom_.reportChanged(), s && C(this, u);
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
      }),
      (t.set_ = function (n, i) {
        var o = this.values_;
        if (
          (this.legacyMode_ && n > o.length && v(17, n, o.length), n < o.length)
        ) {
          z(this.atom_);
          var a = o[n];
          if (P(this)) {
            var s = x(this, {
              type: U,
              object: this.proxy_,
              index: n,
              newValue: i,
            });
            if (!s) return;
            i = s.newValue;
          }
          i = this.enhancer_(i, a);
          var u = i !== a;
          u && ((o[n] = i), this.notifyArrayChildUpdate_(n, i, a));
        } else {
          for (
            var c = new Array(n + 1 - o.length), l = 0;
            l < c.length - 1;
            l++
          )
            c[l] = void 0;
          (c[c.length - 1] = i), this.spliceWithArray_(o.length, 0, c);
        }
      }),
      e
    );
  })();
function eo(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    pn(),
    _e(function () {
      var i = new Ut(r, t, n, !1);
      _n(i.values_, d, i);
      var o = new Proxy(i.values_, Zi);
      return (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o;
    })
  );
}
var rt = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[d];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
      o < n;
      o++
    )
      i[o - 2] = arguments[o];
    var a = this[d];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, r);
    }
    return a.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function (t, r, n) {
    return this[d].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (
      var t = this[d], r = arguments.length, n = new Array(r), i = 0;
      i < r;
      i++
    )
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[d].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var t = this[d], r = arguments.length, n = new Array(r), i = 0;
      i < r;
      i++
    )
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function () {
    return (
      f.trackingDerivation && v(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    f.trackingDerivation && v(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var r = this[d],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
m("at", S);
m("concat", S);
m("flat", S);
m("includes", S);
m("indexOf", S);
m("join", S);
m("lastIndexOf", S);
m("slice", S);
m("toString", S);
m("toLocaleString", S);
m("toSorted", S);
m("toSpliced", S);
m("with", S);
m("every", j);
m("filter", j);
m("find", j);
m("findIndex", j);
m("findLast", j);
m("findLastIndex", j);
m("flatMap", j);
m("forEach", j);
m("map", j);
m("some", j);
m("toReversed", j);
m("reduce", er);
m("reduceRight", er);
function m(e, t) {
  typeof Array.prototype[e] == "function" && (rt[e] = t(e));
}
function S(e) {
  return function () {
    var t = this[d];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function j(e) {
  return function (t, r) {
    var n = this,
      i = this[d];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function (a, s) {
      return t.call(r, a, s, n);
    });
  };
}
function er(e) {
  return function () {
    var t = this,
      r = this[d];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (o, a, s) {
        return i(o, a, s, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var to = re("ObservableArrayAdministration", Ut);
function oe(e) {
  return ot(e) && to(e[d]);
}
var no = {},
  Z = "add",
  it = "delete",
  vt = (function () {
    function e(r, n, i) {
      var o = this;
      n === void 0 && (n = de),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[d] = no),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        M(Map) || v(18),
        _e(function () {
          (o.keysAtom_ = lt("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            r && o.merge(r);
        });
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var i = this;
        if (!f.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var a = (o = new ee(this.has_(n), ct, "ObservableMap.key?", !1));
          this.hasMap_.set(n, a),
            Ft(a, function () {
              return i.hasMap_.delete(n);
            });
        }
        return o.get();
      }),
      (t.set = function (n, i) {
        var o = this.has_(n);
        if (P(this)) {
          var a = x(this, {
            type: o ? U : Z,
            object: this,
            newValue: i,
            name: n,
          });
          if (!a) return this;
          i = a.newValue;
        }
        return o ? this.updateValue_(n, i) : this.addValue_(n, i), this;
      }),
      (t.delete = function (n) {
        var i = this;
        if ((z(this.keysAtom_), P(this))) {
          var o = x(this, { type: it, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var a = le(),
            s = V(this),
            u =
              s || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: it,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            T(function () {
              var c;
              i.keysAtom_.reportChanged(),
                (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1);
              var l = i.data_.get(n);
              l.setNewValue_(void 0), i.data_.delete(n);
            }),
            s && C(this, u),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var o = this.data_.get(n);
        if (((i = o.prepareNewValue_(i)), i !== f.UNCHANGED)) {
          var a = le(),
            s = V(this),
            u =
              s || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: U,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), s && C(this, u);
        }
      }),
      (t.addValue_ = function (n, i) {
        var o = this;
        z(this.keysAtom_),
          T(function () {
            var c,
              l = new ee(i, o.enhancer_, "ObservableMap.key", !1);
            o.data_.set(n, l),
              (i = l.value_),
              (c = o.hasMap_.get(n)) == null || c.setNewValue_(!0),
              o.keysAtom_.reportChanged();
          });
        var a = le(),
          s = V(this),
          u =
            s || a
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Z,
                  object: this,
                  name: n,
                  newValue: i,
                }
              : null;
        s && C(this, u);
      }),
      (t.get = function (n) {
        return this.has(n)
          ? this.dehanceValue_(this.data_.get(n).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var n = this,
          i = this.keys();
        return Re({
          next: function () {
            var a = i.next(),
              s = a.done,
              u = a.value;
            return { done: s, value: s ? void 0 : n.get(u) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          i = this.keys();
        return Re({
          next: function () {
            var a = i.next(),
              s = a.done,
              u = a.value;
            return { done: s, value: s ? void 0 : [u, n.get(u)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, i) {
        for (var o = ye(this), a; !(a = o()).done; ) {
          var s = a.value,
            u = s[0],
            c = s[1];
          n.call(i, c, u, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          k(n) && (n = new Map(n)),
          T(function () {
            ne(n)
              ? Er(n).forEach(function (o) {
                  return i.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var a = o[0],
                      s = o[1];
                    return i.set(a, s);
                  })
                : De(n)
                  ? (Or(n) || v(19, n),
                    n.forEach(function (o, a) {
                      return i.set(a, o);
                    }))
                  : n != null && v(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        T(function () {
          Ln(function () {
            for (var i = ye(n.keys()), o; !(o = i()).done; ) {
              var a = o.value;
              n.delete(a);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          T(function () {
            for (
              var o = ro(n), a = new Map(), s = !1, u = ye(i.data_.keys()), c;
              !(c = u()).done;
            ) {
              var l = c.value;
              if (!o.has(l)) {
                var p = i.delete(l);
                if (p) s = !0;
                else {
                  var h = i.data_.get(l);
                  a.set(l, h);
                }
              }
            }
            for (var w = ye(o.entries()), E; !(E = w()).done; ) {
              var A = E.value,
                D = A[0],
                I = A[1],
                J = i.data_.has(D);
              if ((i.set(D, I), i.data_.has(D))) {
                var Te = i.data_.get(D);
                a.set(D, Te), J || (s = !0);
              }
            }
            if (!s)
              if (i.data_.size !== a.size) i.keysAtom_.reportChanged();
              else
                for (
                  var N = i.data_.keys(),
                    Q = a.keys(),
                    se = N.next(),
                    qt = Q.next();
                  !se.done;
                ) {
                  if (se.value !== qt.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  (se = N.next()), (qt = Q.next());
                }
            i.data_ = a;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (n, i) {
        return Fe(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ie(this, n);
      }),
      ut(e, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  k = re("ObservableMap", vt);
function ro(e) {
  if (De(e) || k(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (ne(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return v(21, e);
}
var io = {},
  tr = (function () {
    function e(r, n, i) {
      var o = this;
      n === void 0 && (n = de),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[d] = io),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        M(Set) || v(22),
        (this.enhancer_ = function (a, s) {
          return n(a, s, i);
        }),
        _e(function () {
          (o.atom_ = lt(o.name_)), r && o.replace(r);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        T(function () {
          Ln(function () {
            for (var i = ye(n.data_.values()), o; !(o = i()).done; ) {
              var a = o.value;
              n.delete(a);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var o = ye(this), a; !(a = o()).done; ) {
          var s = a.value;
          n.call(i, s, s, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((z(this.atom_), P(this))) {
          var o = x(this, { type: Z, object: this, newValue: n });
          if (!o) return this;
        }
        if (!this.has(n)) {
          T(function () {
            i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
          });
          var a = !1,
            s = V(this),
            u =
              s || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Z,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && C(this, u);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (P(this)) {
          var o = x(this, { type: it, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var a = !1,
            s = V(this),
            u =
              s || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: it,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            T(function () {
              i.atom_.reportChanged(), i.data_.delete(n);
            }),
            s && C(this, u),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (n) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n))
        );
      }),
      (t.entries = function () {
        var n = 0,
          i = Array.from(this.keys()),
          o = Array.from(this.values());
        return Re({
          next: function () {
            var s = n;
            return (
              (n += 1),
              s < o.length ? { value: [i[s], o[s]], done: !1 } : { done: !0 }
            );
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var n = this,
          i = 0,
          o = Array.from(this.data_.values());
        return Re({
          next: function () {
            return i < o.length
              ? { value: n.dehanceValue_(o[i++]), done: !1 }
              : { done: !0 };
          },
        });
      }),
      (t.intersection = function (n) {
        if ($(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if ($(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if ($(n)) return n.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if ($(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          ae(n) && (n = new Set(n)),
          T(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (o) {
                  return i.add(o);
                }))
              : $(n)
                ? (i.clear(),
                  n.forEach(function (o) {
                    return i.add(o);
                  }))
                : n != null && v("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, i) {
        return Fe(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ie(this, n);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[Symbol.iterator] = function () {
        return this.values();
      }),
      ut(e, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  ae = re("ObservableSet", tr),
  on = Object.create(null),
  an = "remove",
  nr = (function () {
    function e(r, n, i, o) {
      n === void 0 && (n = new Map()),
        o === void 0 && (o = ei),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = r),
        (this.values_ = n),
        (this.name_ = i),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new Ce("ObservableObject.keys")),
        (this.isPlainObject_ = ne(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var o = this.values_.get(n);
        if (o instanceof H) return o.set(i), !0;
        if (P(this)) {
          var a = x(this, {
            type: U,
            object: this.proxy_ || this.target_,
            name: n,
            newValue: i,
          });
          if (!a) return null;
          i = a.newValue;
        }
        if (((i = o.prepareNewValue_(i)), i !== f.UNCHANGED)) {
          var s = V(this),
            u = !1,
            c =
              s || u
                ? {
                    type: U,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), s && C(this, c);
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (
          f.trackingDerivation && !W(this.target_, n) && this.has_(n),
          this.target_[n]
        );
      }),
      (t.set_ = function (n, i, o) {
        return (
          o === void 0 && (o = !1),
          W(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, i)
              : o
                ? Reflect.set(this.target_, n, i)
                : ((this.target_[n] = i), !0)
            : this.extend_(
                n,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!f.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new ee(n in this.target_, ct, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if ((ln(this, i, n), !(n in this.target_))) {
            var o;
            if ((o = this.target_[F]) != null && o[n]) return;
            v(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var a = this.target_; a && a !== Me; ) {
            var s = Qe(a, n);
            if (s) {
              var u = i.make_(this, n, s, a);
              if (u === 0) return;
              if (u === 1) break;
            }
            a = Object.getPrototypeOf(a);
          }
          un(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, o, a) {
        if (
          (a === void 0 && (a = !1),
          o === !0 && (o = this.defaultAnnotation_),
          o === !1)
        )
          return this.defineProperty_(n, i, a);
        ln(this, o, n);
        var s = o.extend_(this, n, i, a);
        return s && un(this, o, n), s;
      }),
      (t.defineProperty_ = function (n, i, o) {
        o === void 0 && (o = !1), z(this.keysAtom_);
        try {
          L();
          var a = this.delete_(n);
          if (!a) return a;
          if (P(this)) {
            var s = x(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Z,
              newValue: i.value,
            });
            if (!s) return null;
            var u = s.newValue;
            i.value !== u && (i = fe({}, i, { value: u }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else B(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          R();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, o, a) {
        a === void 0 && (a = !1), z(this.keysAtom_);
        try {
          L();
          var s = this.delete_(n);
          if (!s) return s;
          if (P(this)) {
            var u = x(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Z,
              newValue: i,
            });
            if (!u) return null;
            i = u.newValue;
          }
          var c = sn(n),
            l = {
              configurable: f.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else B(this.target_, n, l);
          var p = new ee(i, o, "ObservableObject.key", !1);
          this.values_.set(n, p), this.notifyPropertyAddition_(n, p.value_);
        } finally {
          R();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, o) {
        o === void 0 && (o = !1), z(this.keysAtom_);
        try {
          L();
          var a = this.delete_(n);
          if (!a) return a;
          if (P(this)) {
            var s = x(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Z,
              newValue: void 0,
            });
            if (!s) return null;
          }
          i.name || (i.name = "ObservableObject.key"),
            (i.context = this.proxy_ || this.target_);
          var u = sn(n),
            c = {
              configurable: f.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: u.get,
              set: u.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else B(this.target_, n, c);
          this.values_.set(n, new H(i)),
            this.notifyPropertyAddition_(n, void 0);
        } finally {
          R();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), z(this.keysAtom_), !W(this.target_, n)))
          return !0;
        if (P(this)) {
          var o = x(this, {
            object: this.proxy_ || this.target_,
            name: n,
            type: an,
          });
          if (!o) return null;
        }
        try {
          var a;
          L();
          var s = V(this),
            u = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (s || u)) {
            var p;
            l = (p = Qe(this.target_, n)) == null ? void 0 : p.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c &&
              (this.values_.delete(n),
              c instanceof ee && (l = c.value_),
              kn(c)),
            this.keysAtom_.reportChanged(),
            (a = this.pendingKeys_) == null ||
              (a = a.get(n)) == null ||
              a.set(n in this.target_),
            s || u)
          ) {
            var h = {
              type: an,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && C(this, h);
          }
        } finally {
          R();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return Fe(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ie(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var o,
          a = V(this),
          s = !1;
        if (a || s) {
          var u =
            a || s
              ? {
                  type: Z,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: i,
                }
              : null;
          a && C(this, u);
        }
        (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), st(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function Ae(e, t) {
  var r;
  if (W(e, d)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new nr(e, new Map(), String(n), fi(t));
  return at(e, d, i), e;
}
var oo = re("ObservableObjectAdministration", nr);
function sn(e) {
  return (
    on[e] ||
    (on[e] = {
      get: function () {
        return this[d].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[d].setObservablePropValue_(e, r);
      },
    })
  );
}
function Y(e) {
  return ot(e) ? oo(e[d]) : !1;
}
function un(e, t, r) {
  var n;
  (n = e.target_[F]) == null || delete n[r];
}
function ln(e, t, r) {
  if (0) var n, i, o;
}
var ao = ir(0),
  so = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  Ot = 0,
  rr = function () {};
function uo(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
uo(rr, Array.prototype);
var Ht = (function (e) {
  function t(n, i, o, a) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      a === void 0 && (a = !1),
      (s = e.call(this) || this),
      _e(function () {
        var u = new Ut(o, i, a, !0);
        (u.proxy_ = s),
          _n(s, d, u),
          n && n.length && s.spliceWithArray(0, 0, n),
          so && Object.defineProperty(s, "0", ao);
      }),
      s
    );
  }
  mn(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[d].atom_.reportObserved();
      for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
        o[a] = arguments[a];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return oe(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return Re({
        next: function () {
          return i < n.length
            ? { value: n[i++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    ut(t, [
      {
        key: "length",
        get: function () {
          return this[d].getArrayLength_();
        },
        set: function (i) {
          this[d].setArrayLength_(i);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(rr);
Object.entries(rt).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && at(Ht.prototype, t, r);
});
function ir(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[d].get_(e);
    },
    set: function (r) {
      this[d].set_(e, r);
    },
  };
}
function lo(e) {
  B(Ht.prototype, "" + e, ir(e));
}
function or(e) {
  if (e > Ot) {
    for (var t = Ot; t < e + 100; t++) lo(t);
    Ot = e;
  }
}
or(1e3);
function co(e, t, r) {
  return new Ht(e, t, r);
}
function K(e, t) {
  if (typeof e == "object" && e !== null) {
    if (oe(e)) return t !== void 0 && v(23), e[d].atom_;
    if (ae(e)) return e.atom_;
    if (k(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || v(25, t, Lt(e)), r;
    }
    if (Y(e)) {
      if (!t) return v(26);
      var n = e[d].values_.get(t);
      return n || v(27, t, Lt(e)), n;
    }
    if (Ct(e) || he(e) || nt(e)) return e;
  } else if (M(e) && nt(e[d])) return e[d];
  v(28);
}
function Ne(e, t) {
  if ((e || v(29), t !== void 0)) return Ne(K(e, t));
  if (Ct(e) || he(e) || nt(e) || k(e) || ae(e)) return e;
  if (e[d]) return e[d];
  v(24, e);
}
function Lt(e, t) {
  var r;
  if (t !== void 0) r = K(e, t);
  else {
    if (ke(e)) return e.name;
    Y(e) || k(e) || ae(e) ? (r = Ne(e)) : (r = K(e));
  }
  return r.name_;
}
function _e(e) {
  var t = ve(),
    r = dt(!0);
  L();
  try {
    return e();
  } finally {
    R(), pt(r), q(t);
  }
}
var cn = Me.toString;
function Yt(e, t, r) {
  return r === void 0 && (r = -1), Rt(e, t, r);
}
function Rt(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var a = cn.call(e);
  if (a !== cn.call(t)) return !1;
  switch (a) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
      );
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  (e = fn(e)), (t = fn(t));
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var u = e.constructor,
      c = t.constructor;
    if (
      u !== c &&
      !(M(u) && u instanceof u && M(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  r < 0 && (r = -1), (n = n || []), (i = i || []);
  for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
  if ((n.push(e), i.push(t), s)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Rt(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var p = Object.keys(e),
      h;
    if (((l = p.length), Object.keys(t).length !== l)) return !1;
    for (; l--; )
      if (((h = p[l]), !(W(t, h) && Rt(e[h], t[h], r - 1, n, i)))) return !1;
  }
  return n.pop(), i.pop(), !0;
}
function fn(e) {
  return oe(e)
    ? e.slice()
    : De(e) || k(e) || $(e) || ae(e)
      ? Array.from(e.entries())
      : e;
}
function Re(e) {
  return (e[Symbol.iterator] = fo), e;
}
function fo() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Mt();
  typeof t[e] > "u" &&
    v("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: Pi,
    extras: { getDebugName: Lt },
    $mobx: d,
  });
var Be = _r(br());
var po = function () {};
function ho(e) {
  throw new Error("[mobx-utils] " + e);
}
function Se(e, t) {
  t === void 0 && (t = "Illegal state"), e || ho(t);
}
var ur = function (e) {
    return (
      e &&
      e !== Object.prototype &&
      Object.getOwnPropertyNames(e).concat(ur(Object.getPrototypeOf(e)) || [])
    );
  },
  vo = function (e) {
    var t = ur(e),
      r = t.filter(function (n, i) {
        return t.indexOf(n) === i;
      });
    return r;
  },
  ar = function (e) {
    return vo(e).filter(function (t) {
      return t !== "constructor" && !~t.indexOf("__");
    });
  },
  Kt = "pending",
  gt = "fulfilled",
  $t = "rejected";
function _o(e) {
  switch (this.state) {
    case Kt:
      return e.pending && e.pending(this.value);
    case $t:
      return e.rejected && e.rejected(this.value);
    case gt:
      return e.fulfilled ? e.fulfilled(this.value) : this.value;
  }
}
function sr(e, t) {
  if (
    (Se(arguments.length <= 2, "fromPromise expects up to two arguments"),
    Se(
      typeof e == "function" ||
        (typeof e == "object" && e && typeof e.then == "function"),
      "Please pass a promise or function to fromPromise",
    ),
    e.isPromiseBasedObservable === !0)
  )
    return e;
  typeof e == "function" && (e = new Promise(e));
  var r = e;
  e.then(
    O("observableFromPromise-resolve", function (i) {
      (r.value = i), (r.state = gt);
    }),
    O("observableFromPromise-reject", function (i) {
      (r.value = i), (r.state = $t);
    }),
  ),
    (r.isPromiseBasedObservable = !0),
    (r.case = _o);
  var n = t && (t.state === gt || t.state === Kt) ? t.value : void 0;
  return zt(r, { value: n, state: Kt }, {}, { deep: !1 }), r;
}
(function (e) {
  e.reject = O("fromPromise.reject", function (r) {
    var n = e(Promise.reject(r));
    return (n.state = $t), (n.value = r), n;
  });
  function t(r) {
    r === void 0 && (r = void 0);
    var n = e(Promise.resolve(r));
    return (n.state = gt), (n.value = r), n;
  }
  e.resolve = O("fromPromise.resolve", t);
})(sr || (sr = {}));
function lr(e, t, r) {
  t === void 0 && (t = po), r === void 0 && (r = void 0);
  var n = !1,
    i = !1,
    o = r,
    a = function () {
      n && ((n = !1), t());
    },
    s = lt(
      "ResourceBasedObservable",
      function () {
        Se(!n && !i),
          (n = !0),
          e(function (u) {
            kt(!0, function () {
              (o = u), s.reportChanged();
            });
          });
      },
      a,
    );
  return {
    current: function () {
      Se(!i, "subscribingObservable has already been disposed");
      var u = s.reportObserved();
      return (
        !u &&
          !n &&
          console.warn(
            "Called `get` of a subscribingObservable outside a reaction. Current value will be returned but no new subscription has started",
          ),
        o
      );
    },
    dispose: function () {
      (i = !0), a();
    },
    isAlive: function () {
      return n;
    },
  };
}
var _t = function (e, t, r, n) {
  var i = arguments.length,
    o =
      i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, r, n);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, r, o) : a(t, r)) || o);
  return i > 3 && o && Object.defineProperty(t, r, o), o;
};
var ko = (function () {
  function e(t, r) {
    var n = this;
    Object.defineProperty(this, "current", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0,
    }),
      Object.defineProperty(this, "subscription", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Gt(this),
      Un(function () {
        (n.current = r), (n.subscription = t.subscribe(n));
      });
  }
  return (
    Object.defineProperty(e.prototype, "dispose", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.subscription && this.subscription.unsubscribe();
      },
    }),
    Object.defineProperty(e.prototype, "next", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (t) {
        this.current = t;
      },
    }),
    Object.defineProperty(e.prototype, "complete", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.dispose();
      },
    }),
    Object.defineProperty(e.prototype, "error", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (t) {
        (this.current = t), this.dispose();
      },
    }),
    _t([y.ref], e.prototype, "current", void 0),
    _t([O.bound], e.prototype, "next", null),
    _t([O.bound], e.prototype, "complete", null),
    _t([O.bound], e.prototype, "error", null),
    e
  );
})();
var mt = function () {
    return (
      (mt =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      mt.apply(this, arguments)
    );
  },
  ze = function (e, t, r, n) {
    var i = arguments.length,
      o =
        i < 3
          ? t
          : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, r))
            : n,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(e, t, r, n);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, r, o) : a(t, r)) || o);
    return i > 3 && o && Object.defineProperty(t, r, o), o;
  },
  bo = [
    "model",
    "reset",
    "submit",
    "isDirty",
    "isPropertyDirty",
    "resetProperty",
  ],
  Io = (function () {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "model", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "localValues", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: y.map({}),
        }),
        Object.defineProperty(this, "localComputedValues", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: y.map({}),
        }),
        Object.defineProperty(this, "isPropertyDirty", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (i) {
            return r.localValues.has(i);
          },
        }),
        Gt(this),
        Se(Y(t), "createViewModel expects an observable object");
      var n = ar(this);
      ar(t).forEach(function (i) {
        var o;
        if (
          !n.includes(i) &&
          !(i === d || i === "__mobxDidRunLazyInitializers")
        ) {
          if (
            (Se(
              bo.indexOf(i) === -1,
              "The propertyname " +
                i +
                " is reserved and cannot be used with viewModels",
            ),
            ht(t, i))
          ) {
            var a = Ne(t, i),
              s = a.derivation.bind(r),
              u = (o = a.setter_) === null || o === void 0 ? void 0 : o.bind(r);
            r.localComputedValues.set(i, ie(s, { set: u }));
          }
          var c = Object.getOwnPropertyDescriptor(t, i),
            l = c ? { enumerable: c.enumerable } : {};
          Object.defineProperty(
            r,
            i,
            mt(mt({}, l), {
              configurable: !0,
              get: function () {
                return ht(t, i)
                  ? r.localComputedValues.get(i).get()
                  : r.isPropertyDirty(i)
                    ? r.localValues.get(i)
                    : r.model[i];
              },
              set: O(function (p) {
                ht(t, i)
                  ? r.localComputedValues.get(i).set(p)
                  : p !== r.model[i]
                    ? r.localValues.set(i, p)
                    : r.localValues.delete(i);
              }),
            }),
          );
        }
      });
    }
    return (
      Object.defineProperty(e.prototype, "isDirty", {
        get: function () {
          return this.localValues.size > 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "changedValues", {
        get: function () {
          return new Map(this.localValues);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "submit", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          var t = this;
          Qn(this.localValues).forEach(function (r) {
            var n = t.localValues.get(r),
              i = t.model[r];
            oe(i)
              ? i.replace(n)
              : k(i)
                ? (i.clear(), i.merge(n))
                : Jn(n) || (t.model[r] = n);
          }),
            this.localValues.clear();
        },
      }),
      Object.defineProperty(e.prototype, "reset", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.localValues.clear();
        },
      }),
      Object.defineProperty(e.prototype, "resetProperty", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.localValues.delete(t);
        },
      }),
      ze([ie], e.prototype, "isDirty", null),
      ze([ie], e.prototype, "changedValues", null),
      ze([O.bound], e.prototype, "submit", null),
      ze([O.bound], e.prototype, "reset", null),
      ze([O.bound], e.prototype, "resetProperty", null),
      e
    );
  })();
var bt = {};
function cr(e) {
  return (
    e === void 0 && (e = 1e3),
    Pn()
      ? (bt[e] || (typeof e == "number" ? (bt[e] = go(e)) : (bt[e] = mo())),
        bt[e].current())
      : Date.now()
  );
}
function go(e) {
  var t;
  return lr(
    function (r) {
      r(Date.now()),
        (t = setInterval(function () {
          return r(Date.now());
        }, e));
    },
    function () {
      clearInterval(t);
    },
    Date.now(),
  );
}
function mo() {
  var e = lr(
    function (t) {
      t(Date.now());
      function r() {
        window.requestAnimationFrame(function () {
          t(Date.now()), e.isAlive() && r();
        });
      }
      r();
    },
    function () {},
    Date.now(),
  );
  return e;
}
var yo = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, i) {
              n.__proto__ = i;
            }) ||
          function (n, i) {
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype =
        r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })(),
  Fo = (function (e) {
    yo(t, e);
    function t(r, n, i) {
      var o = i === void 0 ? {} : i,
        a = o.name,
        s = a === void 0 ? "ogm" + ((Math.random() * 1e3) | 0) : a,
        u = o.keyToName,
        c =
          u === void 0
            ? function (h) {
                return "" + h;
              }
            : u,
        l = e.call(this) || this;
      Object.defineProperty(l, "_base", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
        Object.defineProperty(l, "_ogmInfoKey", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(l, "_groupBy", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(l, "_keyToName", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(l, "_disposeBaseObserver", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (l._keyToName = c),
        (l._groupBy = n),
        (l._ogmInfoKey = Symbol("ogmInfo" + s)),
        (l._base = r);
      for (var p = 0; p < r.length; p++) l._addItem(r[p]);
      return (
        (l._disposeBaseObserver = Zn(l._base, function (h) {
          if (h.type === "splice")
            T(function () {
              for (var w = 0, E = h.removed; w < E.length; w++) {
                var A = E[w];
                l._removeItem(A);
              }
              for (var D = 0, I = h.added; D < I.length; D++) {
                var J = I[D];
                l._addItem(J);
              }
            });
          else if (h.type === "update")
            T(function () {
              l._removeItem(h.oldValue), l._addItem(h.newValue);
            });
          else throw new Error("illegal state");
        })),
        l
      );
    }
    return (
      Object.defineProperty(t.prototype, "clear", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          throw new Error("not supported");
        },
      }),
      Object.defineProperty(t.prototype, "delete", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (r) {
          throw new Error("not supported");
        },
      }),
      Object.defineProperty(t.prototype, "set", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (r, n) {
          throw new Error("not supported");
        },
      }),
      Object.defineProperty(t.prototype, "dispose", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this._disposeBaseObserver();
          for (var r = 0; r < this._base.length; r++) {
            var n = this._base[r],
              i = n[this._ogmInfoKey];
            i.reaction(), delete n[this._ogmInfoKey];
          }
        },
      }),
      Object.defineProperty(t.prototype, "_getGroupArr", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (r) {
          var n = e.prototype.get.call(this, r);
          return (
            n === void 0 &&
              ((n = y([], {
                name: "GroupArray[" + this._keyToName(r) + "]",
                deep: !1,
              })),
              e.prototype.set.call(this, r, n)),
            n
          );
        },
      }),
      Object.defineProperty(t.prototype, "_removeFromGroupArr", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (r, n) {
          var i = e.prototype.get.call(this, r);
          i.length === 1
            ? e.prototype.delete.call(this, r)
            : (n === i.length - 1 ||
                ((i[n] = i[i.length - 1]),
                (i[n][this._ogmInfoKey].groupArrIndex = n)),
              i.length--);
        },
      }),
      Object.defineProperty(t.prototype, "_addItem", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (r) {
          var n = this,
            i = this._groupBy(r),
            o = this._getGroupArr(i),
            a = {
              groupByValue: i,
              groupArrIndex: o.length,
              reaction: Kn(
                function () {
                  return n._groupBy(r);
                },
                function (s, u) {
                  var c = r[n._ogmInfoKey];
                  n._removeFromGroupArr(c.groupByValue, c.groupArrIndex);
                  var l = n._getGroupArr(s),
                    p = l.length;
                  l.push(r), (c.groupByValue = s), (c.groupArrIndex = p);
                },
              ),
            };
          Object.defineProperty(r, this._ogmInfoKey, {
            configurable: !0,
            enumerable: !1,
            value: a,
          }),
            o.push(r);
        },
      }),
      Object.defineProperty(t.prototype, "_removeItem", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (r) {
          var n = r[this._ogmInfoKey];
          this._removeFromGroupArr(n.groupByValue, n.groupArrIndex),
            n.reaction(),
            delete r[this._ogmInfoKey];
        },
      }),
      t
    );
  })(vt),
  Oo = (function () {
    function e(t, r) {
      Object.defineProperty(this, "base", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "args", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r,
        }),
        Object.defineProperty(this, "root", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "closest", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "closestIdx", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "isDisposed", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        });
      for (
        var n = (this.closest = this.root = t), i = 0;
        i < this.args.length - 1 && ((n = n.get(r[i])), n);
        i++
      )
        this.closest = n;
      this.closestIdx = i;
    }
    return (
      Object.defineProperty(e.prototype, "exists", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.assertNotDisposed();
          var t = this.args.length;
          return this.closestIdx >= t - 1 && this.closest.has(this.args[t - 1]);
        },
      }),
      Object.defineProperty(e.prototype, "get", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          if ((this.assertNotDisposed(), !this.exists()))
            throw new Error("Entry doesn't exist");
          return this.closest.get(this.args[this.args.length - 1]);
        },
      }),
      Object.defineProperty(e.prototype, "set", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.assertNotDisposed();
          for (
            var r = this.args.length, n = this.closest, i = this.closestIdx;
            i < r - 1;
            i++
          ) {
            var o = new Map();
            n.set(this.args[i], o), (n = o);
          }
          (this.closestIdx = r - 1),
            (this.closest = n),
            n.set(this.args[r - 1], t);
        },
      }),
      Object.defineProperty(e.prototype, "delete", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          if ((this.assertNotDisposed(), !this.exists()))
            throw new Error("Entry doesn't exist");
          var t = this.args.length;
          this.closest.delete(this.args[t - 1]);
          for (var r = this.root, n = [r], i = 0; i < t - 1; i++)
            (r = r.get(this.args[i])), n.push(r);
          for (var i = n.length - 1; i > 0; i--)
            n[i].size === 0 && n[i - 1].delete(this.args[i - 1]);
          this.isDisposed = !0;
        },
      }),
      Object.defineProperty(e.prototype, "assertNotDisposed", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          if (this.isDisposed)
            throw new Error("Concurrent modification exception");
        },
      }),
      e
    );
  })(),
  zo = (function () {
    function e() {
      Object.defineProperty(this, "store", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map(),
      }),
        Object.defineProperty(this, "argsLength", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -1,
        }),
        Object.defineProperty(this, "last", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        });
    }
    return (
      Object.defineProperty(e.prototype, "entry", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          if (this.argsLength === -1) this.argsLength = t.length;
          else if (this.argsLength !== t.length)
            throw new Error(
              "DeepMap should be used with functions with a consistent length, expected: " +
                this.argsLength +
                ", got: " +
                t.length,
            );
          return (
            this.last && (this.last.isDisposed = !0),
            (this.last = new Oo(this.store, t))
          );
        },
      }),
      e
    );
  })();
var b = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function Bo(e, t) {
  return (
    e.getFullYear() == t.getFullYear() &&
    e.getMonth() == t.getMonth() &&
    e.getDate() == t.getDate()
  );
}
function Go() {
  return Math.floor(Date.now() / 1e3);
}
function Do(e, t, r) {
  let n;
  typeof t == "boolean"
    ? (n = { eSuffix: t ? 0 : 1, bForceSingleUnits: r, bHighGranularity: !1 })
    : (n = { eSuffix: 1, bForceSingleUnits: !1, bHighGranularity: !1, ...t });
  let i = "#TimeInterval_";
  n.eSuffix == 1
    ? (i = "#TimeSince_")
    : n.eSuffix == 2 && (i = "#TimeRemaining_");
  let o = (a) => Math.floor(a);
  if (
    (n.bAllowDecimal && (o = (a) => Math.round(a * 10) / 10),
    e >= b.PerYear * 2)
  )
    return g(i + "XYears", o(e / b.PerYear));
  if (e >= b.PerYear)
    return (
      (e -= b.PerYear),
      e >= b.PerMonth * 2 && !n.bForceSingleUnits
        ? g(i + "1YearXMonths", o(e / b.PerMonth))
        : g(i + "1Year")
    );
  if (e >= b.PerMonth * 2) return g(i + "XMonths", o(e / b.PerMonth));
  if (e >= b.PerWeek * 2) return g(i + "XWeeks", o(e / b.PerWeek));
  if (e >= b.PerWeek) return g(i + "1Week", o(e / b.PerWeek));
  if (e >= b.PerDay * 2) return g(i + "XDays", o(e / b.PerDay));
  if (e >= b.PerDay)
    return (
      (e -= b.PerDay),
      e >= b.PerHour * 2 && !n.bForceSingleUnits
        ? g(i + "1DayXHours", o(e / b.PerHour))
        : g(i + "1Day")
    );
  if (e >= b.PerHour * 2) return g(i + "XHours", o(e / b.PerHour));
  if (e >= b.PerHour)
    return (
      (e -= b.PerHour),
      e >= b.PerMinute * 2 && !n.bForceSingleUnits
        ? g(i + "1HourXMinutes", o(e / b.PerMinute))
        : g(i + "1Hour")
    );
  if (e >= b.PerMinute * 2) {
    let a = Math.floor(e / b.PerMinute),
      s = e % b.PerMinute;
    return !n.bHighGranularity || s == 0
      ? g(i + "XMinutes", o(e / b.PerMinute))
      : s == 1
        ? g(i + "XMinutes1Second", a)
        : g(i + "XMinutesXSeconds", a, s);
  } else if (e >= b.PerMinute) {
    let a = e % b.PerMinute;
    return !n.bHighGranularity || a == 0
      ? g(i + "1Minute")
      : a == 1
        ? g(i + "1Minute1Second")
        : g(i + "1MinuteXSeconds", a);
  } else
    return n.bHighGranularity
      ? e == 1
        ? g(i + "1Second")
        : g(i + "XSeconds", e)
      : g(i + "LessThanAMinute");
}
function vr(e, t) {
  let r = new Date(e * 1e3),
    n = { year: "numeric", month: "short", day: "numeric", ...t };
  return r.toLocaleDateString(X.GetPreferredLocales(), n);
}
var fr = new Map();
function wo(e) {
  let t = fr.get(e);
  if (t === !0 || t === !1) return t;
  let r = new Date();
  r.setHours(15);
  let n = r.toLocaleTimeString(e, { hour: "numeric" }),
    i = r.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
  return (t = n == i), fr.set(e, t), t;
}
function $o(e, t, r) {
  let n = new Date(e * 1e3),
    i = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    o = { hour: "numeric", minute: "2-digit" },
    a = X.GetPreferredLocales(),
    u = { ...(t?.bForce24HourClock || wo(a[0]) ? i : o), ...r };
  return n.toLocaleTimeString(a, u);
}
var dr = new Map();
function Ao(e, t, r = !0, n = !0, i = !1) {
  let o = new Date(),
    a = new Date(e * 1e3);
  if (a.getFullYear() != o.getFullYear()) return vr(e);
  n && cr(new Date().setHours(24, 0, 0, 0) - o.getTime());
  let s = new Date();
  if ((s.setHours(0, 0, 0, 0), r)) {
    if (a >= s) {
      if ((s.setDate(s.getDate() + 1), a < s)) return g("#Time_Today");
      if ((s.setDate(s.getDate() + 1), a < s)) return g("#Time_Tomorrow");
    } else if ((s.setDate(s.getDate() - 1), a >= s))
      return g("#Time_Yesterday");
  }
  let u = { month: t ? "long" : "short", day: "numeric" };
  i && (u.weekday = "long");
  let c = a.setHours(0, 0, 0, 0) + u.month,
    l = dr.get(c);
  return (
    l ||
    ((l = a.toLocaleDateString(X.GetPreferredLocales(), u)), dr.set(c, l), l)
  );
}
var pr = new Map(),
  hr = new Map();
function No(e) {
  let t = pr.get(e.getFullYear());
  return (
    t ||
    ((t = e.toLocaleDateString(X.GetPreferredLocales(), { year: "numeric" })),
    pr.set(e.getFullYear(), t),
    t)
  );
}
function Wo(e) {
  let t = e.getMonth() + 12 * e.getFullYear(),
    r = hr.get(t);
  return (
    r ||
    ((r = e.toLocaleDateString(X.GetPreferredLocales(), {
      month: "long",
      year: "numeric",
    })),
    hr.set(t, r),
    r)
  );
}
function qo(e, t) {
  switch (e.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return g(
        t ? "#Time_QuarterOfYear_Expanded_Q1" : "#Time_QuarterOfYear_Q1",
        e.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return g(
        t ? "#Time_QuarterOfYear_Expanded_Q2" : "#Time_QuarterOfYear_Q2",
        e.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return g(
        t ? "#Time_QuarterOfYear_Expanded_Q3" : "#Time_QuarterOfYear_Q3",
        e.getUTCFullYear(),
      );
    case 9:
    case 10:
    case 11:
    default:
      return g(
        t ? "#Time_QuarterOfYear_Expanded_Q4" : "#Time_QuarterOfYear_Q4",
        e.getUTCFullYear(),
      );
  }
}
var Wt = class e {
  m_mapTokens = new Map();
  m_mapFallbackTokens = new Map();
  m_cbkTokensChanged = new Xt();
  m_rgLocalesToUse;
  static sm_ErrorReportingStore;
  static InstallErrorReportingStore(t) {
    this.sm_ErrorReportingStore = t;
  }
  static GetLanguageFallback(t) {
    return t === "sc_schinese" ? "schinese" : "english";
  }
  static GetELanguageFallback(t) {
    return t === 29 ? 6 : 0;
  }
  static IsELanguageValidInRealm(t, r) {
    let n = t === 29 ? 2 : 1;
    return r === n;
  }
  static GetLanguageListForRealms(t) {
    let r = new Array();
    for (let n = 0; n < 31; n++)
      for (let i of t)
        if (this.IsELanguageValidInRealm(n, i)) {
          r.push(n);
          break;
        }
    return r;
  }
  InitFromObjects(t, r, n, i, o) {
    o || this.m_mapTokens.clear();
    let a = { ...(n || {}), ...t },
      s = { ...(i || {}), ...(r || {}) };
    this.AddTokens(a, s), this.m_cbkTokensChanged.Dispatch();
  }
  InitDirect(t, r) {
    this.m_mapTokens.clear(),
      this.m_mapFallbackTokens.clear(),
      this.AddTokens(t, r),
      this.m_cbkTokensChanged.Dispatch();
  }
  AddTokens(t, r) {
    Object.keys(t).forEach((n) => {
      this.m_mapTokens.set(n, t[n]);
    }),
      r &&
        Object.keys(r).forEach((n) => {
          this.m_mapTokens.has(n) || this.m_mapTokens.set(n, r[n]),
            this.m_mapFallbackTokens.set(n, r[n]);
        });
  }
  GetTokensChangedCallbackList() {
    return this.m_cbkTokensChanged;
  }
  GetPreferredLocales() {
    return this.m_rgLocalesToUse
      ? this.m_rgLocalesToUse
      : navigator && navigator.languages
        ? navigator.languages
        : ["en-US"];
  }
  GetELanguageFallbackOrder(t = null) {
    let r = new Array();
    return (
      r.push(Ge(ue.LANGUAGE)),
      (ue.SUPPORTED_LANGUAGES || []).forEach((i) => {
        i.value != ue.LANGUAGE && r.push(Ge(i.value));
      }),
      t &&
        e.GetLanguageListForRealms(t).forEach((o) => {
          r.indexOf(o) == -1 && r.push(o);
        }),
      r
    );
  }
  SetPreferredLocales(t) {
    this.m_rgLocalesToUse = t;
  }
  BLooksLikeToken(t) {
    return !!t && t.length > 0 && t.charAt(0) == "#";
  }
  LocalizeIfToken(t, r) {
    return this.BLooksLikeToken(t) ? this.LocalizeString(t, r) : t;
  }
  LocalizeString(t, r) {
    if (!this.BLooksLikeToken(t)) return;
    let n = this.m_mapTokens.get(t.substring(1));
    if (n === void 0) {
      !r &&
        e.sm_ErrorReportingStore &&
        e.sm_ErrorReportingStore.ReportError(
          new Error(
            `Unable to find localization token '${t}' for language '${ue.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
          ),
          { bIncludeMessageInIdentifier: !0 },
        );
      return;
    }
    return n;
  }
  LocalizeStringFromFallback(t) {
    if (!t || t.length == 0 || t.charAt(0) != "#") return;
    let r = this.m_mapFallbackTokens.get(t.substring(1));
    if (r !== void 0) return r;
  }
  static GetTokenWithFallback(t) {
    if (!t) return "";
    let r = Ge(ue.LANGUAGE),
      n = t.find((a) => a.language == r);
    if (n) return n.localized_string;
    let i = e.GetELanguageFallback(r);
    return t.find((a) => a.language == i)?.localized_string ?? "";
  }
  static BHasTokenLanguage(t, r) {
    return !!r.find((n) => n.language == t);
  }
};
function g(e, ...t) {
  let r = X.LocalizeString(e);
  return r === void 0 ? e : So(r, ...t);
}
function ha(e, ...t) {
  let r = X.LocalizeString(e);
  if (r === void 0) return e;
  let n = [],
    i = /(.*?)%(\d+)\$s/g,
    o = 0,
    a;
  for (; (a = i.exec(r)); ) {
    (o += a[0].length), n.push(a[1]);
    let s = parseInt(a[2]);
    s >= 1 && s <= t.length && n.push(t[s - 1]);
  }
  return n.push(r.substr(o)), Be.createElement(Be.Fragment, null, ...n);
}
function va(e, t, ...r) {
  return t === 1 || t === "1" ? g(e, t, ...r) : g(e + "_Plural", t, ...r);
}
function So(e, ...t) {
  return (
    t.length == 0 ||
      (e = e.replace(/%(?:(\d+)\$)?s/g, function (r, n) {
        if (n <= t.length && n >= 1) {
          let i = t[n - 1];
          return String(i ?? "");
        }
        return r;
      })),
    e
  );
}
var To = {
    english: "en",
    german: "de",
    french: "fr",
    italian: "it",
    korean: "ko",
    latam: "es-419",
    spanish: "es",
    schinese: "zh-cn",
    tchinese: "zh-tw",
    russian: "ru",
    thai: "th",
    japanese: "ja",
    brazilian: "pt-br",
    portuguese: "pt",
    polish: "pl",
    danish: "da",
    dutch: "nl",
    finnish: "fi",
    norwegian: "no",
    swedish: "sv",
    hungarian: "hu",
    czech: "cs",
    romanian: "ro",
    turkish: "tr",
    arabic: "ar",
    bulgarian: "bg",
    greek: "el",
    ukrainian: "uk",
    vietnamese: "vi",
    indonesian: "id",
    sc_schinese: "zh-cn",
    koreana: "ko",
  },
  _a = {
    "en-US": 0,
    "de-DE": 1,
    "fr-FR": 2,
    "it-IT": 3,
    "ko-KR": 4,
    "es-ES": 5,
    "zh-CH": 6,
    "zh-CN": 7,
    "ru-RU": 8,
    "th-TH": 9,
    "ja-JP": 10,
    "pt-PT": 11,
    "pl-PL": 12,
    "da-DK": 13,
    "nl-NL": 14,
    "fi-FI": 15,
    "nb-NO": 16,
    "sv-SE": 17,
    "hu-HU": 18,
    "cs-CZ": 19,
    "ro-RO": 20,
    "tr-TR": 21,
    "pt-BR": 22,
    "bg-BG": 23,
    "el-GR": 24,
    "ar-SA": 25,
    "uk-UA": 26,
    "es-419": 27,
    "vi-VN": 28,
    "id-ID": 30,
  };
function ba() {
  return To[ue.LANGUAGE] || null;
}
function ga(e) {
  let t,
    r = new Promise((o) => (t = o)),
    n = Array(e.length),
    i = e.length;
  return (
    e.forEach((o, a) => {
      Promise.resolve(o)
        .then((s) => {
          (n[a] = s), i--, i == 0 && t(n);
        })
        .catch((s) => {
          console.error("Failed to load localization file: " + s),
            (n[a] = {}),
            i--,
            i == 0 && t(n);
        });
    }),
    r
  );
}
var X = new Wt();
window.LocalizationManager = X;
export {
  y as a,
  kt as b,
  tt as c,
  O as d,
  Un as e,
  Po as f,
  xo as g,
  Lo as h,
  Gt as i,
  cr as j,
  Bo as k,
  Go as l,
  Do as m,
  vr as n,
  $o as o,
  Ao as p,
  No as q,
  Wo as r,
  qo as s,
  Wt as t,
  g as u,
  ha as v,
  va as w,
  ba as x,
  ga as y,
  X as z,
};

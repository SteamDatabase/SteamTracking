import { a as b } from "./chunk-CVL4H5BD.js";
import { e as Be } from "./chunk-G6VSCJJ2.js";
import { h as Xt, o as Jt } from "./chunk-OELMNAT4.js";
import { j as ue } from "./chunk-T4K7M5DN.js";
import { a as gr } from "./chunk-4KB54E2E.js";
import { e as br } from "./chunk-QCEAHXA2.js";
function h(e) {
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
var mr = {};
function Vt() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : mr;
}
var pn = Object.assign,
  Qe = Object.getOwnPropertyDescriptor,
  G = Object.defineProperty,
  Ve = Object.prototype,
  Et = [];
Object.freeze(Et);
var Mt = {};
Object.freeze(Mt);
var yr = typeof Proxy < "u",
  Or = Object.toString();
function vn() {
  yr || h("Proxy not available");
}
function hn(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var me = function () {};
function V(e) {
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
  return typeof r == "function" && r.toString() === Or;
}
function _n(e) {
  var t = e?.constructor;
  return t
    ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction"
    : !1;
}
function at(e, t, r) {
  G(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function bn(e, t, r) {
  G(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
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
function we(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Er(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Y(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var gn = typeof Object.getOwnPropertySymbols < "u";
function wr(e) {
  var t = Object.keys(e);
  if (!gn) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ve.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var st =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : gn
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e),
          );
        }
      : Object.getOwnPropertyNames;
function mn(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function W(e, t) {
  return Ve.hasOwnProperty.call(e, t);
}
var Ar =
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
function Qt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Nr(n.key), n);
  }
}
function ut(e, t, r) {
  return (
    t && Zt(e.prototype, t),
    r && Zt(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ye(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (
    Array.isArray(e) ||
    (r = Sr(e)) ||
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
function yn(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    wt(e, t);
}
function wt(e, t) {
  return (
    (wt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    wt(e, t)
  );
}
function Dr(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nr(e) {
  var t = Dr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Sr(e, t) {
  if (e) {
    if (typeof e == "string") return Qt(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Qt(e, t)
          : void 0
    );
  }
}
var F = Symbol("mobx-stored-annotations");
function B(e) {
  function t(r, n) {
    if (Me(n)) return e.decorate_20223_(r, n);
    Ae(r, n, e);
  }
  return Object.assign(t, e);
}
function Ae(e, t, r) {
  if ((W(e, F) || at(e, F, fe({}, e[F])), 0)) var n;
  Pr(e, r, t), kr(r) || (e[F][t] = r);
}
function Pr(e, t, r) {
  if (0) var n, i, o;
}
function Tr(e) {
  return W(e, F) || at(e, F, fe({}, e[F])), e[F];
}
function Me(e) {
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
        return kn(this);
      }),
      (t.reportChanged = function () {
        R(), In(this), x();
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
  return t !== me && Fi(n, t), r !== me && Ft(n, r), n;
}
function Lr(e, t) {
  return e === t;
}
function Rr(e, t) {
  return Kt(e, t);
}
function xr(e, t) {
  return Kt(e, t, 1);
}
function Vr(e, t) {
  return Object.is
    ? Object.is(e, t)
    : e === t
      ? e !== 0 || 1 / e === 1 / t
      : e !== e && t !== t;
}
var Oe = { identity: Lr, structural: Rr, default: Vr, shallow: xr };
function de(e, t, r) {
  return Gt(e)
    ? e
    : Array.isArray(e)
      ? y.array(e, { name: r })
      : ne(e)
        ? y.object(e, void 0, { name: r })
        : we(e)
          ? y.map(e, { name: r })
          : Y(e)
            ? y.set(e, { name: r })
            : typeof e == "function" && !ke(e) && !Re(e)
              ? _n(e)
                ? Ee(e)
                : Le(r, e)
              : e;
}
function Mr(e, t, r) {
  if (e == null || K(e) || oe(e) || k(e) || ae(e)) return e;
  if (Array.isArray(e)) return y.array(e, { name: r, deep: !1 });
  if (ne(e)) return y.object(e, void 0, { name: r, deep: !1 });
  if (we(e)) return y.map(e, { name: r, deep: !1 });
  if (Y(e)) return y.set(e, { name: r, deep: !1 });
}
function ct(e) {
  return e;
}
function Cr(e, t) {
  return Kt(e, t) ? t : e;
}
var jr = "override";
function kr(e) {
  return e.annotationType_ === jr;
}
function je(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Ir,
    extend_: Fr,
    decorate_20223_: zr,
  };
}
function Ir(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (ke(r.value)) return 1;
  var o = On(e, this, t, r, !1);
  return G(n, t, o), 2;
}
function Fr(e, t, r, n) {
  var i = On(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function zr(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    o = this,
    a = function (c) {
      var l, p, v, A;
      return pe(
        (l = (p = o.options_) == null ? void 0 : p.name) != null
          ? l
          : n.toString(),
        c,
        (v = (A = o.options_) == null ? void 0 : A.autoAction) != null ? v : !1,
      );
    };
  if (r == "field") {
    i(function () {
      Ae(this, n, o);
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
  h(
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
function Gr(e, t, r, n) {
  var i = t.annotationType_,
    o = n.value;
}
function On(e, t, r, n, i) {
  var o, a, s, u, c, l, p;
  i === void 0 && (i = f.safeDescriptors), Gr(e, t, r, n);
  var v = n.value;
  if ((o = t.options_) != null && o.bound) {
    var A;
    v = v.bind((A = e.proxy_) != null ? A : e.target_);
  }
  return {
    value: pe(
      (a = (s = t.options_) == null ? void 0 : s.name) != null
        ? a
        : r.toString(),
      v,
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
function En(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Br,
    extend_: Ur,
    decorate_20223_: Hr,
  };
}
function Br(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!W(e.target_, t) || !Re(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Re(r.value)) return 1;
  var o = wn(e, this, t, r, !1, !1);
  return G(n, t, o), 2;
}
function Ur(e, t, r, n) {
  var i,
    o = wn(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, n);
}
function Hr(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    Re(e) || (e = Ee(e)),
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
function Kr(e, t, r, n) {
  var i = t.annotationType_,
    o = n.value;
}
function wn(e, t, r, n, i, o) {
  o === void 0 && (o = f.safeDescriptors), Kr(e, t, r, n);
  var a = n.value;
  if ((Re(a) || (a = Ee(a)), i)) {
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
    make_: $r,
    extend_: Yr,
    decorate_20223_: Wr,
  };
}
function $r(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Yr(e, t, r, n) {
  return (
    qr(e, this, t, r),
    e.defineComputedProperty_(
      t,
      fe({}, this.options_, { get: r.get, set: r.set }),
      n,
    )
  );
}
function Wr(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var o = De(this)[d],
        a = fe({}, r.options_, { get: e, context: this });
      a.name || (a.name = "ObservableObject." + n.toString()),
        o.values_.set(n, new H(a));
    }),
    function () {
      return this[d].getObservablePropValue_(n);
    }
  );
}
function qr(e, t, r, n) {
  var i = t.annotationType_,
    o = n.get;
}
function ft(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Xr,
    extend_: Jr,
    decorate_20223_: Qr,
  };
}
function Xr(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Jr(e, t, r, n) {
  var i, o;
  return (
    Zr(e, this, t, r),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : de,
      n,
    )
  );
}
function Qr(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    o = new WeakSet();
  function a(s, u) {
    var c,
      l,
      p = De(s)[d],
      v = new ee(
        u,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : de,
        "ObservableObject." + i.toString(),
        !1,
      );
    p.values_.set(i, v), o.add(s);
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
function Zr(e, t, r, n) {
  var i = t.annotationType_;
}
var ei = "true",
  ti = An();
function An(e) {
  return {
    annotationType_: ei,
    options_: e,
    make_: ni,
    extend_: ri,
    decorate_20223_: ii,
  };
}
function ni(e, t, r, n) {
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
      : (G(n, t, { configurable: !0, set: a }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (_n(r.value)) {
      var u,
        c = (u = this.options_) != null && u.autoBind ? Ee.bound : Ee;
      return c.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? Le.bound : Le;
    return l.make_(e, t, r, n);
  }
  var p = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? y.ref : y;
  if (
    typeof r.value == "function" &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    var v;
    r.value = r.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return p.make_(e, t, r, n);
}
function ri(e, t, r, n) {
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
function ii(e, t) {
  h("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var oi = "observable",
  ai = "observable.ref",
  si = "observable.shallow",
  ui = "observable.struct",
  Dn = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Dn);
function Ue(e) {
  return e || Dn;
}
var At = ft(oi),
  li = ft(ai, { enhancer: ct }),
  ci = ft(si, { enhancer: Mr }),
  fi = ft(ui, { enhancer: Cr }),
  Nn = B(At);
function He(e) {
  return e.deep === !0 ? de : e.deep === !1 ? ct : pi(e.defaultDecorator);
}
function di(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : An(e)) : void 0;
}
function pi(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null
    ? t
    : de;
}
function Sn(e, t, r) {
  if (Me(t)) return At.decorate_20223_(e, t);
  if (ce(t)) {
    Ae(e, t, At);
    return;
  }
  return Gt(e)
    ? e
    : ne(e)
      ? y.object(e, t, r)
      : Array.isArray(e)
        ? y.array(e, t)
        : we(e)
          ? y.map(e, t)
          : Y(e)
            ? y.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : y.box(e, t);
}
pn(Sn, Nn);
var vi = {
    box: function (t, r) {
      var n = Ue(r);
      return new ee(t, He(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ue(r);
      return (f.useProxies === !1 || n.proxy === !1 ? fo : to)(
        t,
        He(n),
        n.name,
      );
    },
    map: function (t, r) {
      var n = Ue(r);
      return new ht(t, He(n), n.name);
    },
    set: function (t, r) {
      var n = Ue(r);
      return new nr(t, He(n), n.name);
    },
    object: function (t, r, n) {
      return _e(function () {
        return zt(
          f.useProxies === !1 || n?.proxy === !1 ? De({}, n) : Qi({}, n),
          t,
          r,
        );
      });
    },
    ref: B(li),
    shallow: B(ci),
    deep: Nn,
    struct: B(fi),
  },
  y = pn(Sn, vi),
  Pn = "computed",
  hi = "computed.struct",
  Dt = jt(Pn),
  _i = jt(hi, { equals: Oe.structural }),
  ie = function (t, r) {
    if (Me(r)) return Dt.decorate_20223_(t, r);
    if (ce(r)) return Ae(t, r, Dt);
    if (ne(t)) return B(jt(Pn, t));
    var n = ne(r) ? r : {};
    return (n.get = t), n.name || (n.name = t.name || ""), new H(n);
  };
Object.assign(ie, Dt);
ie.struct = B(_i);
var en,
  tn,
  Ze = 0,
  bi = 1,
  gi =
    (en =
      (tn = Qe(function () {}, "name")) == null ? void 0 : tn.configurable) !=
    null
      ? en
      : !1,
  nn = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
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
    gi && ((nn.value = e), G(i, "name", nn)),
    i
  );
}
function Tn(e, t, r, n, i) {
  var o = mi(e, t, n, i);
  try {
    return r.apply(n, i);
  } catch (a) {
    throw ((o.error_ = a), a);
  } finally {
    yi(o);
  }
}
function mi(e, t, r, n) {
  var i = !1,
    o = 0;
  if (0) var a;
  var s = f.trackingDerivation,
    u = !t || !s;
  R();
  var c = f.allowStateChanges;
  u && (he(), (c = dt(!0)));
  var l = It(!0),
    p = {
      runAsAction_: u,
      prevDerivation_: s,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: i,
      startTime_: o,
      actionId_: bi++,
      parentActionId_: Ze,
    };
  return (Ze = p.actionId_), p;
}
function yi(e) {
  Ze !== e.actionId_ && h(30),
    (Ze = e.parentActionId_),
    e.error_ !== void 0 && (f.suppressReactionErrors = !0),
    pt(e.prevAllowStateChanges_),
    Te(e.prevAllowStateReads_),
    x(),
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
    yn(t, e);
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
        if ((z(this), T(this))) {
          var o = L(this, { object: this, type: U, newValue: i });
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
          M(this) &&
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
        return mn(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Ce),
  Oi = re("ObservableValue", ee);
function Ke(e, t) {
  return !!(e & t);
}
function $e(e, t, r) {
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
      r.get || h(31),
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
      Ni(this);
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
        (this.isComputing && h(32, this.name_, this.derivation),
        f.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
      )
        Nt(this) &&
          (this.warnAboutUntrackedRead_(),
          R(),
          (this.value_ = this.computeValue_(!1)),
          x());
      else if ((kn(this), Nt(this))) {
        var n = f.trackingContext;
        this.keepAlive_ && !n && (f.trackingContext = this),
          this.trackAndCompute() && Di(this),
          (f.trackingContext = n);
      }
      var i = this.value_;
      if (qe(i)) throw i.cause;
      return i;
    }),
    (t.set = function (n) {
      if (this.setter_) {
        this.isRunningSetter && h(33, this.name_), (this.isRunningSetter = !0);
        try {
          this.setter_.call(this.scope_, n);
        } finally {
          this.isRunningSetter = !1;
        }
      } else h(34, this.name_);
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
      if (n) o = Rn(this, this.derivation, this.scope_);
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
      return Kn(function () {
        var u = o.get();
        if (!a || i) {
          var c = he();
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
      return mn(this.get());
    }),
    (t[Symbol.toPrimitive] = function () {
      return this.valueOf();
    }),
    ut(e, [
      {
        key: "isComputing",
        get: function () {
          return Ke(this.flags_, e.isComputingMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isComputingMask_, n);
        },
      },
      {
        key: "isRunningSetter",
        get: function () {
          return Ke(this.flags_, e.isRunningSetterMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isRunningSetterMask_, n);
        },
      },
      {
        key: "isBeingObserved",
        get: function () {
          return Ke(this.flags_, e.isBeingObservedMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isBeingObservedMask_, n);
        },
      },
      {
        key: "isPendingUnobservation",
        get: function () {
          return Ke(this.flags_, e.isPendingUnobservationMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isPendingUnobservationMask_, n);
        },
      },
    ])
  );
})();
H.isComputingMask_ = 1;
H.isRunningSetterMask_ = 2;
H.isBeingObservedMask_ = 4;
H.isPendingUnobservationMask_ = 8;
var ve = re("ComputedValue", H),
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
        var t = It(!0), r = he(), n = e.observing_, i = n.length, o = 0;
        o < i;
        o++
      ) {
        var a = n[o];
        if (ve(a)) {
          if (f.disableErrorBoundaries) a.get();
          else
            try {
              a.get();
            } catch {
              return q(r), Te(t), !0;
            }
          if (e.dependenciesState_ === _.STALE_) return q(r), Te(t), !0;
        }
      }
      return Vn(e), q(r), Te(t), !1;
    }
  }
}
function Ln() {
  return f.trackingDerivation !== null;
}
function z(e) {
  return;
  var t;
}
function Rn(e, t, r) {
  var n = It(!0);
  Vn(e),
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
  return f.inBatch--, (f.trackingDerivation = i), Ei(e), Te(n), o;
}
function Ei(e) {
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
    u.diffValue_ === 0 && Cn(u, e), (u.diffValue_ = 0);
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue_ === 1 && ((c.diffValue_ = 0), Ai(c, e));
  }
  n !== _.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function St(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Cn(t[r], e);
  e.dependenciesState_ = _.NOT_TRACKING_;
}
function xn(e) {
  var t = he();
  try {
    return e();
  } finally {
    q(t);
  }
}
function he() {
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
function Te(e) {
  f.allowStateReads = e;
}
function Vn(e) {
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
    var e = Vt();
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
            Mn || h(35);
          }, 1),
          new Xe())
    );
  })();
function wi() {
  if (
    ((f.pendingReactions.length || f.inBatch || f.isRunningReactions) && h(36),
    (Mn = !0),
    Je)
  ) {
    var e = Vt();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (f = new Xe());
  }
}
function Ai(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function Cn(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && jn(e);
}
function jn(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), f.pendingUnobservations.push(e));
}
function R() {
  f.inBatch++;
}
function x() {
  if (--f.inBatch === 0) {
    Fn();
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
function kn(e) {
  var t = f.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved &&
          f.trackingContext &&
          ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && f.inBatch > 0 && jn(e), !1);
}
function In(e) {
  e.lowestObserverState_ !== _.STALE_ &&
    ((e.lowestObserverState_ = _.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = _.STALE_);
    }));
}
function Di(e) {
  e.lowestObserverState_ !== _.STALE_ &&
    ((e.lowestObserverState_ = _.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _.POSSIBLY_STALE_
        ? (t.dependenciesState_ = _.STALE_)
        : t.dependenciesState_ === _.UP_TO_DATE_ &&
          (e.lowestObserverState_ = _.UP_TO_DATE_);
    }));
}
function Ni(e) {
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
        ((this.isScheduled_ = !0), f.pendingReactions.push(this), Fn());
    }),
    (t.isScheduled = function () {
      return this.isScheduled_;
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed_) {
        R(), (this.isScheduled_ = !1);
        var n = f.trackingContext;
        if (((f.trackingContext = this), Nt(this))) {
          this.isTrackPending_ = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        (f.trackingContext = n), x();
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed_) {
        R();
        var i = le(),
          o;
        this.isRunning_ = !0;
        var a = f.trackingContext;
        f.trackingContext = this;
        var s = Rn(this, n, void 0);
        (f.trackingContext = a),
          (this.isRunning_ = !1),
          (this.isTrackPending_ = !1),
          this.isDisposed_ && St(this),
          qe(s) && this.reportExceptionInDerivation_(s.cause),
          x();
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
        ((this.isDisposed_ = !0), this.isRunning_ || (R(), St(this), x()));
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
      n === void 0 && (n = !1), qi(this, n);
    }),
    e
  );
})();
var Si = 100,
  Pt = function (t) {
    return t();
  };
function Fn() {
  f.inBatch > 0 || f.isRunningReactions || Pt(Pi);
}
function Pi() {
  f.isRunningReactions = !0;
  for (var e = f.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Si &&
      (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  f.isRunningReactions = !1;
}
var nt = re("Reaction", tt);
function Ti(e) {
  var t = Pt;
  Pt = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function le() {
  return !1;
}
function Li(e) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var zn = "action",
  Ri = "action.bound",
  Gn = "autoAction",
  xi = "autoAction.bound",
  Bn = "<unnamed action>",
  Tt = je(zn),
  Vi = je(Ri, { bound: !0 }),
  Lt = je(Gn, { autoAction: !0 }),
  Mi = je(xi, { autoAction: !0, bound: !0 });
function Un(e) {
  var t = function (n, i) {
    if (V(n)) return pe(n.name || Bn, n, e);
    if (V(i)) return pe(n, i, e);
    if (Me(i)) return (e ? Lt : Tt).decorate_20223_(n, i);
    if (ce(i)) return Ae(n, i, e ? Lt : Tt);
    if (ce(n)) return B(je(e ? Gn : zn, { name: n, autoAction: e }));
  };
  return t;
}
var O = Un(!1);
Object.assign(O, Tt);
var Le = Un(!0);
Object.assign(Le, Lt);
O.bound = B(Vi);
Le.bound = B(Mi);
function Hn(e) {
  return Tn(e.name || Bn, !1, e, this, void 0);
}
function ke(e) {
  return V(e) && e.isMobxAction === !0;
}
function Kn(e, t) {
  var r, n, i, o;
  t === void 0 && (t = Mt);
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
    var c = $n(t),
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
var Ci = function (t) {
  return t();
};
function $n(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Ci;
}
function Yn(e, t, r) {
  var n, i, o;
  r === void 0 && (r = Mt);
  var a = (n = r.name) != null ? n : "Reaction",
    s = O(a, r.onError ? ji(r.onError, t) : t),
    u = !r.scheduler && !r.delay,
    c = $n(r),
    l = !0,
    p = !1,
    v,
    A = r.compareStructural ? Oe.structural : r.equals || Oe.default,
    E = new tt(
      a,
      function () {
        l || u ? D() : p || ((p = !0), c(D));
      },
      r.onError,
      r.requiresObservable,
    );
  function D() {
    if (((p = !1), !E.isDisposed_)) {
      var w = !1,
        I = v;
      E.track(function () {
        var J = kt(!1, function () {
          return e(E);
        });
        (w = l || !A(v, J)), (v = J);
      }),
        ((l && r.fireImmediately) || (!l && w)) && s(v, I, E),
        (l = !1);
    }
  }
  return (
    ((i = r) != null && (i = i.signal) != null && i.aborted) || E.schedule_(),
    E.getDisposer_((o = r) == null ? void 0 : o.signal)
  );
}
function ji(e, t) {
  return function () {
    try {
      return t.apply(this, arguments);
    } catch (r) {
      e.call(this, r);
    }
  };
}
var ki = "onBO",
  Ii = "onBUO";
function Fi(e, t, r) {
  return Wn(ki, e, t, r);
}
function Ft(e, t, r) {
  return Wn(Ii, e, t, r);
}
function Wn(e, t, r, n) {
  var i = typeof n == "function" ? $(t, r) : $(t),
    o = V(n) ? n : r,
    a = e + "L";
  return (
    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
    function () {
      var s = i[a];
      s && (s.delete(o), s.size === 0 && delete i[a]);
    }
  );
}
var zi = "never",
  Ye = "always",
  Gi = "observed";
function Lo(e) {
  e.isolateGlobalState === !0 && wi();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 &&
      (f.useProxies = t === Ye ? !0 : t === zi ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (f.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ye ? Ye : r === Gi;
    (f.enforceActions = n), (f.allowStateChanges = !(n === !0 || n === Ye));
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
  var i = Ar(t);
  return (
    _e(function () {
      var o = De(e, n)[d];
      st(i).forEach(function (a) {
        o.extend_(a, i[a], r && a in r ? r[a] : !0);
      });
    }),
    e
  );
}
function Ro(e, t) {
  return qn($(e, t));
}
function qn(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ &&
      e.observing_.length > 0 &&
      (t.dependencies = Bi(e.observing_).map(qn)),
    t
  );
}
function Bi(e) {
  return Array.from(new Set(e));
}
var Ui = 0;
function Xn() {
  this.message = "FLOW_CANCELLED";
}
Xn.prototype = Object.create(Error.prototype);
var yt = En("flow"),
  Hi = En("flow.bound", { bound: !0 }),
  Ee = Object.assign(function (t, r) {
    if (Me(r)) return yt.decorate_20223_(t, r);
    if (ce(r)) return Ae(t, r, yt);
    var n = t,
      i = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          u = arguments,
          c = ++Ui,
          l = O(i + " - runid: " + c + " - init", n).apply(s, u),
          p,
          v = void 0,
          A = new Promise(function (E, D) {
            var w = 0;
            p = D;
            function I(N) {
              v = void 0;
              var Q;
              try {
                Q = O(i + " - runid: " + c + " - yield " + w++, l.next).call(
                  l,
                  N,
                );
              } catch (se) {
                return D(se);
              }
              Pe(Q);
            }
            function J(N) {
              v = void 0;
              var Q;
              try {
                Q = O(i + " - runid: " + c + " - yield " + w++, l.throw).call(
                  l,
                  N,
                );
              } catch (se) {
                return D(se);
              }
              Pe(Q);
            }
            function Pe(N) {
              if (V(N?.then)) {
                N.then(Pe, D);
                return;
              }
              return N.done
                ? E(N.value)
                : ((v = Promise.resolve(N.value)), v.then(I, J));
            }
            I(void 0);
          });
        return (
          (A.cancel = O(i + " - runid: " + c + " - cancel", function () {
            try {
              v && rn(v);
              var E = l.return(void 0),
                D = Promise.resolve(E.value);
              D.then(me, me), rn(D), p(new Xn());
            } catch (w) {
              p(w);
            }
          })),
          A
        );
      };
    return (o.isMobXFlow = !0), o;
  }, yt);
Ee.bound = B(Hi);
function rn(e) {
  V(e.cancel) && e.cancel();
}
function Re(e) {
  return e?.isMobXFlow === !0;
}
function Jn(e, t) {
  if (t === void 0) return ve(e);
  if (K(e) === !1 || !e[d].values_.has(t)) return !1;
  var r = $(e, t);
  return ve(r);
}
function Qn(e) {
  return Jn(e);
}
function vt(e, t) {
  return Jn(e, t);
}
function Ki(e, t) {
  return e
    ? t !== void 0
      ? K(e)
        ? e[d].values_.has(t)
        : !1
      : K(e) || !!e[d] || Ct(e) || nt(e) || ve(e)
    : !1;
}
function Gt(e) {
  return Ki(e);
}
function Zn(e) {
  if (K(e)) return e[d].keys_();
  if (k(e) || ae(e)) return Array.from(e.keys());
  if (oe(e))
    return e.map(function (t, r) {
      return r;
    });
  h(5);
}
function $i(e) {
  if (K(e)) return e[d].ownKeys_();
  h(38);
}
function er(e, t, r, n) {
  return V(r) ? Wi(e, t, r, n) : Yi(e, t, r);
}
function Yi(e, t, r) {
  return Ne(e).observe_(t, r);
}
function Wi(e, t, r, n) {
  return Ne(e, t).observe_(r, n);
}
function We(e, t, r) {
  return e.set(t, r), r;
}
function ge(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !Gt(e))
    return e;
  if (Oi(e) || ve(e)) return ge(e.get(), t);
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
      $i(e).forEach(function (a) {
        Ve.propertyIsEnumerable.call(e, a) && (o[a] = ge(e[a], t));
      }),
      o
    );
  }
}
function xo(e, t) {
  return ge(e, new Map());
}
function qi() {
  return;
  for (var e, t, r, n; n < t; n++) r[n] = arguments[n];
  var i;
}
function Xi(e) {
  switch (e.length) {
    case 0:
      return f.trackingDerivation;
    case 1:
      return $(e[0]);
    case 2:
      return $(e[0], e[1]);
  }
}
function P(e, t) {
  t === void 0 && (t = void 0), R();
  try {
    return e.apply(t);
  } finally {
    x();
  }
}
function be(e) {
  return e[d];
}
var Ji = {
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
    h(13);
  },
};
function Qi(e, t) {
  var r, n;
  return (
    vn(),
    (e = De(e, t)),
    (n = (r = e[d]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Ji))
  );
}
function T(e) {
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
function L(e, t) {
  var r = he();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, o = n.length;
      i < o && ((t = n[i](t)), t && !t.type && h(14), !!t);
      i++
    );
    return t;
  } finally {
    q(r);
  }
}
function M(e) {
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
  var r = he(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, o = n.length; i < o; i++) n[i](t);
    q(r);
  }
}
function Bt(e, t, r) {
  return (
    _e(function () {
      var n,
        i = De(e, r)[d];
      (n = t) != null || (t = Tr(e)),
        st(t).forEach(function (o) {
          return i.make_(o, t[o]);
        });
    }),
    e
  );
}
var on = "splice",
  U = "update",
  Zi = 1e4,
  eo = {
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
      h(15);
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
        (typeof n != "number" || isNaN(n) || n < 0) && h("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
          if (n > i) {
            for (var o = new Array(n - i), a = 0; a < n - i; a++) o[a] = void 0;
            this.spliceWithArray_(i, 0, o);
          } else this.spliceWithArray_(n, i - n);
      }),
      (t.updateArrayLength_ = function (n, i) {
        n !== this.lastKnownLength_ && h(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && ar(n + i + 1);
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
          T(this))
        ) {
          var u = L(this, {
            object: this.proxy_,
            type: on,
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
        if (o.length < Zi) {
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
          s = M(this),
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
          s = M(this),
          u =
            s || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: on,
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
          (this.legacyMode_ && n > o.length && h(17, n, o.length), n < o.length)
        ) {
          z(this.atom_);
          var a = o[n];
          if (T(this)) {
            var s = L(this, {
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
function to(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    vn(),
    _e(function () {
      var i = new Ut(r, t, n, !1);
      bn(i.values_, d, i);
      var o = new Proxy(i.values_, eo);
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
      f.trackingDerivation && h(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    f.trackingDerivation && h(37, "sort");
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
m("reduce", tr);
m("reduceRight", tr);
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
function tr(e) {
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
var no = re("ObservableArrayAdministration", Ut);
function oe(e) {
  return ot(e) && no(e[d]);
}
var ro = {},
  Z = "add",
  it = "delete",
  ht = (function () {
    function e(r, n, i) {
      var o = this;
      n === void 0 && (n = de),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[d] = ro),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        V(Map) || h(18),
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
        if (T(this)) {
          var a = L(this, {
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
        if ((z(this.keysAtom_), T(this))) {
          var o = L(this, { type: it, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var a = le(),
            s = M(this),
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
            P(function () {
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
            s = M(this),
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
          P(function () {
            var c,
              l = new ee(i, o.enhancer_, "ObservableMap.key", !1);
            o.data_.set(n, l),
              (i = l.value_),
              (c = o.hasMap_.get(n)) == null || c.setNewValue_(!0),
              o.keysAtom_.reportChanged();
          });
        var a = le(),
          s = M(this),
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
        return xe({
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
        return xe({
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
          P(function () {
            ne(n)
              ? wr(n).forEach(function (o) {
                  return i.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var a = o[0],
                      s = o[1];
                    return i.set(a, s);
                  })
                : we(n)
                  ? (Er(n) || h(19, n),
                    n.forEach(function (o, a) {
                      return i.set(a, o);
                    }))
                  : n != null && h(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        P(function () {
          xn(function () {
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
          P(function () {
            for (
              var o = io(n), a = new Map(), s = !1, u = ye(i.data_.keys()), c;
              !(c = u()).done;
            ) {
              var l = c.value;
              if (!o.has(l)) {
                var p = i.delete(l);
                if (p) s = !0;
                else {
                  var v = i.data_.get(l);
                  a.set(l, v);
                }
              }
            }
            for (var A = ye(o.entries()), E; !(E = A()).done; ) {
              var D = E.value,
                w = D[0],
                I = D[1],
                J = i.data_.has(w);
              if ((i.set(w, I), i.data_.has(w))) {
                var Pe = i.data_.get(w);
                a.set(w, Pe), J || (s = !0);
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
  k = re("ObservableMap", ht);
function io(e) {
  if (we(e) || k(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (ne(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return h(21, e);
}
var oo = {},
  nr = (function () {
    function e(r, n, i) {
      var o = this;
      n === void 0 && (n = de),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[d] = oo),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        V(Set) || h(22),
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
        P(function () {
          xn(function () {
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
        if ((z(this.atom_), T(this))) {
          var o = L(this, { type: Z, object: this, newValue: n });
          if (!o) return this;
        }
        if (!this.has(n)) {
          P(function () {
            i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
          });
          var a = !1,
            s = M(this),
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
        if (T(this)) {
          var o = L(this, { type: it, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var a = !1,
            s = M(this),
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
            P(function () {
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
        return xe({
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
        return xe({
          next: function () {
            return i < o.length
              ? { value: n.dehanceValue_(o[i++]), done: !1 }
              : { done: !0 };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Y(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Y(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Y(n)) return n.symmetricDifference(this);
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
        if (Y(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          ae(n) && (n = new Set(n)),
          P(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (o) {
                  return i.add(o);
                }))
              : Y(n)
                ? (i.clear(),
                  n.forEach(function (o) {
                    return i.add(o);
                  }))
                : n != null && h("Cannot initialize set from " + n);
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
  ae = re("ObservableSet", nr),
  an = Object.create(null),
  sn = "remove",
  rr = (function () {
    function e(r, n, i, o) {
      n === void 0 && (n = new Map()),
        o === void 0 && (o = ti),
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
        if (T(this)) {
          var a = L(this, {
            type: U,
            object: this.proxy_ || this.target_,
            name: n,
            newValue: i,
          });
          if (!a) return null;
          i = a.newValue;
        }
        if (((i = o.prepareNewValue_(i)), i !== f.UNCHANGED)) {
          var s = M(this),
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
          if ((cn(this, i, n), !(n in this.target_))) {
            var o;
            if ((o = this.target_[F]) != null && o[n]) return;
            h(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var a = this.target_; a && a !== Ve; ) {
            var s = Qe(a, n);
            if (s) {
              var u = i.make_(this, n, s, a);
              if (u === 0) return;
              if (u === 1) break;
            }
            a = Object.getPrototypeOf(a);
          }
          ln(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, o, a) {
        if (
          (a === void 0 && (a = !1),
          o === !0 && (o = this.defaultAnnotation_),
          o === !1)
        )
          return this.defineProperty_(n, i, a);
        cn(this, o, n);
        var s = o.extend_(this, n, i, a);
        return s && ln(this, o, n), s;
      }),
      (t.defineProperty_ = function (n, i, o) {
        o === void 0 && (o = !1), z(this.keysAtom_);
        try {
          R();
          var a = this.delete_(n);
          if (!a) return a;
          if (T(this)) {
            var s = L(this, {
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
          } else G(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          x();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, o, a) {
        a === void 0 && (a = !1), z(this.keysAtom_);
        try {
          R();
          var s = this.delete_(n);
          if (!s) return s;
          if (T(this)) {
            var u = L(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Z,
              newValue: i,
            });
            if (!u) return null;
            i = u.newValue;
          }
          var c = un(n),
            l = {
              configurable: f.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else G(this.target_, n, l);
          var p = new ee(i, o, "ObservableObject.key", !1);
          this.values_.set(n, p), this.notifyPropertyAddition_(n, p.value_);
        } finally {
          x();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, o) {
        o === void 0 && (o = !1), z(this.keysAtom_);
        try {
          R();
          var a = this.delete_(n);
          if (!a) return a;
          if (T(this)) {
            var s = L(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Z,
              newValue: void 0,
            });
            if (!s) return null;
          }
          i.name || (i.name = "ObservableObject.key"),
            (i.context = this.proxy_ || this.target_);
          var u = un(n),
            c = {
              configurable: f.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: u.get,
              set: u.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else G(this.target_, n, c);
          this.values_.set(n, new H(i)),
            this.notifyPropertyAddition_(n, void 0);
        } finally {
          x();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), z(this.keysAtom_), !W(this.target_, n)))
          return !0;
        if (T(this)) {
          var o = L(this, {
            object: this.proxy_ || this.target_,
            name: n,
            type: sn,
          });
          if (!o) return null;
        }
        try {
          var a;
          R();
          var s = M(this),
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
              In(c)),
            this.keysAtom_.reportChanged(),
            (a = this.pendingKeys_) == null ||
              (a = a.get(n)) == null ||
              a.set(n in this.target_),
            s || u)
          ) {
            var v = {
              type: sn,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && C(this, v);
          }
        } finally {
          x();
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
          a = M(this),
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
function De(e, t) {
  var r;
  if (W(e, d)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new rr(e, new Map(), String(n), di(t));
  return at(e, d, i), e;
}
var ao = re("ObservableObjectAdministration", rr);
function un(e) {
  return (
    an[e] ||
    (an[e] = {
      get: function () {
        return this[d].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[d].setObservablePropValue_(e, r);
      },
    })
  );
}
function K(e) {
  return ot(e) ? ao(e[d]) : !1;
}
function ln(e, t, r) {
  var n;
  (n = e.target_[F]) == null || delete n[r];
}
function cn(e, t, r) {
  if (0) var n, i, o;
}
var so = or(0),
  uo = (function () {
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
  ir = function () {};
function lo(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
lo(ir, Array.prototype);
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
          bn(s, d, u),
          n && n.length && s.spliceWithArray(0, 0, n),
          uo && Object.defineProperty(s, "0", so);
      }),
      s
    );
  }
  yn(t, e);
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
      return xe({
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
})(ir);
Object.entries(rt).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && at(Ht.prototype, t, r);
});
function or(e) {
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
function co(e) {
  G(Ht.prototype, "" + e, or(e));
}
function ar(e) {
  if (e > Ot) {
    for (var t = Ot; t < e + 100; t++) co(t);
    Ot = e;
  }
}
ar(1e3);
function fo(e, t, r) {
  return new Ht(e, t, r);
}
function $(e, t) {
  if (typeof e == "object" && e !== null) {
    if (oe(e)) return t !== void 0 && h(23), e[d].atom_;
    if (ae(e)) return e.atom_;
    if (k(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || h(25, t, Rt(e)), r;
    }
    if (K(e)) {
      if (!t) return h(26);
      var n = e[d].values_.get(t);
      return n || h(27, t, Rt(e)), n;
    }
    if (Ct(e) || ve(e) || nt(e)) return e;
  } else if (V(e) && nt(e[d])) return e[d];
  h(28);
}
function Ne(e, t) {
  if ((e || h(29), t !== void 0)) return Ne($(e, t));
  if (Ct(e) || ve(e) || nt(e) || k(e) || ae(e)) return e;
  if (e[d]) return e[d];
  h(24, e);
}
function Rt(e, t) {
  var r;
  if (t !== void 0) r = $(e, t);
  else {
    if (ke(e)) return e.name;
    K(e) || k(e) || ae(e) ? (r = Ne(e)) : (r = $(e));
  }
  return r.name_;
}
function _e(e) {
  var t = he(),
    r = dt(!0);
  R();
  try {
    return e();
  } finally {
    x(), pt(r), q(t);
  }
}
var fn = Ve.toString;
function Kt(e, t, r) {
  return r === void 0 && (r = -1), xt(e, t, r);
}
function xt(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var a = fn.call(e);
  if (a !== fn.call(t)) return !1;
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
  (e = dn(e)), (t = dn(t));
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var u = e.constructor,
      c = t.constructor;
    if (
      u !== c &&
      !(V(u) && u instanceof u && V(c) && c instanceof c) &&
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
    for (; l--; ) if (!xt(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var p = Object.keys(e),
      v;
    if (((l = p.length), Object.keys(t).length !== l)) return !1;
    for (; l--; )
      if (((v = p[l]), !(W(t, v) && xt(e[v], t[v], r - 1, n, i)))) return !1;
  }
  return n.pop(), i.pop(), !0;
}
function dn(e) {
  return oe(e)
    ? e.slice()
    : we(e) || k(e) || Y(e) || ae(e)
      ? Array.from(e.entries())
      : e;
}
function xe(e) {
  return (e[Symbol.iterator] = po), e;
}
function po() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Vt();
  typeof t[e] > "u" &&
    h("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: Li,
    extras: { getDebugName: Rt },
    $mobx: d,
  });
var Ge = br(gr());
var vo = function () {};
function ho(e) {
  throw new Error("[mobx-utils] " + e);
}
function Se(e, t) {
  t === void 0 && (t = "Illegal state"), e || ho(t);
}
var lr = function (e) {
    return (
      e &&
      e !== Object.prototype &&
      Object.getOwnPropertyNames(e).concat(lr(Object.getPrototypeOf(e)) || [])
    );
  },
  _o = function (e) {
    var t = lr(e),
      r = t.filter(function (n, i) {
        return t.indexOf(n) === i;
      });
    return r;
  },
  sr = function (e) {
    return _o(e).filter(function (t) {
      return t !== "constructor" && !~t.indexOf("__");
    });
  },
  $t = "pending",
  gt = "fulfilled",
  Yt = "rejected";
function bo(e) {
  switch (this.state) {
    case $t:
      return e.pending && e.pending(this.value);
    case Yt:
      return e.rejected && e.rejected(this.value);
    case gt:
      return e.fulfilled ? e.fulfilled(this.value) : this.value;
  }
}
function ur(e, t) {
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
      (r.value = i), (r.state = Yt);
    }),
  ),
    (r.isPromiseBasedObservable = !0),
    (r.case = bo);
  var n = t && (t.state === gt || t.state === $t) ? t.value : void 0;
  return zt(r, { value: n, state: $t }, {}, { deep: !1 }), r;
}
(function (e) {
  e.reject = O("fromPromise.reject", function (r) {
    var n = e(Promise.reject(r));
    return (n.state = Yt), (n.value = r), n;
  });
  function t(r) {
    r === void 0 && (r = void 0);
    var n = e(Promise.resolve(r));
    return (n.state = gt), (n.value = r), n;
  }
  e.resolve = O("fromPromise.resolve", t);
})(ur || (ur = {}));
function cr(e, t, r) {
  t === void 0 && (t = vo), r === void 0 && (r = void 0);
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
var Io = (function () {
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
      Bt(this),
      Hn(function () {
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
  go = [
    "model",
    "reset",
    "submit",
    "isDirty",
    "isPropertyDirty",
    "resetProperty",
  ],
  Fo = (function () {
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
        Bt(this),
        Se(K(t), "createViewModel expects an observable object");
      var n = sr(this);
      sr(t).forEach(function (i) {
        var o;
        if (
          !n.includes(i) &&
          !(i === d || i === "__mobxDidRunLazyInitializers")
        ) {
          if (
            (Se(
              go.indexOf(i) === -1,
              "The propertyname " +
                i +
                " is reserved and cannot be used with viewModels",
            ),
            vt(t, i))
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
                return vt(t, i)
                  ? r.localComputedValues.get(i).get()
                  : r.isPropertyDirty(i)
                    ? r.localValues.get(i)
                    : r.model[i];
              },
              set: O(function (p) {
                vt(t, i)
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
          Zn(this.localValues).forEach(function (r) {
            var n = t.localValues.get(r),
              i = t.model[r];
            oe(i)
              ? i.replace(n)
              : k(i)
                ? (i.clear(), i.merge(n))
                : Qn(n) || (t.model[r] = n);
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
function fr(e) {
  return (
    e === void 0 && (e = 1e3),
    Ln()
      ? (bt[e] || (typeof e == "number" ? (bt[e] = mo(e)) : (bt[e] = yo())),
        bt[e].current())
      : Date.now()
  );
}
function mo(e) {
  var t;
  return cr(
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
function yo() {
  var e = cr(
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
var Oo = (function () {
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
  zo = (function (e) {
    Oo(t, e);
    function t(r, n, i) {
      var o = i === void 0 ? {} : i,
        a = o.name,
        s = a === void 0 ? "ogm" + ((Math.random() * 1e3) | 0) : a,
        u = o.keyToName,
        c =
          u === void 0
            ? function (v) {
                return "" + v;
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
        (l._disposeBaseObserver = er(l._base, function (v) {
          if (v.type === "splice")
            P(function () {
              for (var A = 0, E = v.removed; A < E.length; A++) {
                var D = E[A];
                l._removeItem(D);
              }
              for (var w = 0, I = v.added; w < I.length; w++) {
                var J = I[w];
                l._addItem(J);
              }
            });
          else if (v.type === "update")
            P(function () {
              l._removeItem(v.oldValue), l._addItem(v.newValue);
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
              reaction: Yn(
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
  })(ht),
  Eo = (function () {
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
  Go = (function () {
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
            (this.last = new Eo(this.store, t))
          );
        },
      }),
      e
    );
  })();
function Ao(e, t, r) {
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
function _r(e, t) {
  let r = new Date(e * 1e3),
    n = { year: "numeric", month: "short", day: "numeric", ...t };
  return r.toLocaleDateString(X.GetPreferredLocales(), n);
}
var dr = new Map();
function Do(e) {
  let t = dr.get(e);
  if (t === !0 || t === !1) return t;
  let r = new Date();
  r.setHours(15);
  let n = r.toLocaleTimeString(e, { hour: "numeric" }),
    i = r.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
  return (t = n == i), dr.set(e, t), t;
}
function Ko(e, t, r) {
  let n = new Date(e * 1e3),
    i = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    o = { hour: "numeric", minute: "2-digit" },
    a = X.GetPreferredLocales(),
    u = { ...(t?.bForce24HourClock || Do(a[0]) ? i : o), ...r };
  return n.toLocaleTimeString(a, u);
}
var pr = new Map();
function No(e, t, r = !0, n = !0, i = !1) {
  let o = new Date(),
    a = new Date(e * 1e3);
  if (a.getFullYear() != o.getFullYear()) return _r(e);
  n && fr(new Date().setHours(24, 0, 0, 0) - o.getTime());
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
    l = pr.get(c);
  return (
    l ||
    ((l = a.toLocaleDateString(X.GetPreferredLocales(), u)), pr.set(c, l), l)
  );
}
var vr = new Map(),
  hr = new Map();
function So(e) {
  let t = vr.get(e.getFullYear());
  return (
    t ||
    ((t = e.toLocaleDateString(X.GetPreferredLocales(), { year: "numeric" })),
    vr.set(e.getFullYear(), t),
    t)
  );
}
function $o(e) {
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
function Yo(e, t) {
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
  m_cbkTokensChanged = new Jt();
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
      r.push(Be(ue.LANGUAGE)),
      (ue.SUPPORTED_LANGUAGES || []).forEach((i) => {
        i.value != ue.LANGUAGE && r.push(Be(i.value));
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
    let n = this.m_mapTokens.size == 0;
    if (
      (Xt(!n, `Attempting to localize token '${t}' with no tokens in our map.`),
      !this.BLooksLikeToken(t))
    )
      return;
    let i = this.m_mapTokens.get(t.substring(1));
    if (i === void 0) {
      !r &&
        e.sm_ErrorReportingStore &&
        !n &&
        e.sm_ErrorReportingStore.ReportError(
          new Error(
            `Unable to find localization token '${t}' for language '${ue.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
          ),
          { bIncludeMessageInIdentifier: !0 },
        );
      return;
    }
    return i;
  }
  LocalizeStringFromFallback(t) {
    if (!t || t.length == 0 || t.charAt(0) != "#") return;
    let r = this.m_mapFallbackTokens.get(t.substring(1));
    if (r !== void 0) return r;
  }
  static GetTokenWithFallback(t) {
    if (!t) return "";
    let r = Be(ue.LANGUAGE),
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
  return r === void 0 ? e : Po(r, ...t);
}
function fa(e, ...t) {
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
  return n.push(r.substr(o)), Ge.createElement(Ge.Fragment, null, ...n);
}
function da(e, t, ...r) {
  return t === 1 || t === "1" ? g(e, t, ...r) : g(e + "_Plural", t, ...r);
}
function Po(e, ...t) {
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
  pa = {
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
function va() {
  return To[ue.LANGUAGE] || null;
}
function ha(e) {
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
  Hn as e,
  Lo as f,
  Ro as g,
  xo as h,
  Bt as i,
  fr as j,
  Ao as k,
  _r as l,
  Ko as m,
  No as n,
  So as o,
  $o as p,
  Yo as q,
  Wt as r,
  g as s,
  fa as t,
  da as u,
  va as v,
  ha as w,
  X as x,
};

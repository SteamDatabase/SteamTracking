const CLSTAMP = 9498097;

import { f as Jt } from "./chunk-D5L4QSAI.js";
import { a as er } from "./chunk-S3IVLEEY.js";
import { G as Zt } from "./chunk-MCHGPKOT.js";
import { c as Qt } from "./chunk-KX2Y6S36.js";
import {
  J as qt,
  N as Yt,
  Q as Kt,
  R as zt,
  W as Xt,
  b as le,
  ca as Fe,
  f as Gt,
  s as Wt,
  y as jt,
} from "./chunk-C743RRVI.js";
import { a as ct } from "./chunk-MNZ3SY7M.js";
import { o as $t } from "./chunk-LAK4OCC2.js";
import {
  d as Bt,
  g as Ut,
  l as Vt,
  u as kt,
  y as st,
} from "./chunk-KKRSJTWB.js";
import { i as Le, j as ie, l as Z, m as ee } from "./chunk-7NUMJLOY.js";
import { b as ae, d as S } from "./chunk-L35YOXDF.js";
var Sr = ae((Wa, Er) => {
  "use strict";
  var Qn = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  Er.exports = Qn;
});
var xr = ae((ja, wr) => {
  "use strict";
  var Jn = Sr();
  function _r() {}
  function Tr() {}
  Tr.resetWarningCache = _r;
  wr.exports = function () {
    function e(o, n, a, i, u, s) {
      if (s !== Jn) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((c.name = "Invariant Violation"), c);
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Tr,
      resetWarningCache: _r,
    };
    return (r.PropTypes = r), r;
  };
});
var Or = ae((Ka, Nr) => {
  "use strict";
  Nr.exports = xr()();
  var qa, Ya;
});
var qr = ae((ai, jr) => {
  "use strict";
  jr.exports =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    };
});
var Xr = ae((ii, Pe) => {
  "use strict";
  var Be = qr();
  Pe.exports = zr;
  Pe.exports.parse = dt;
  Pe.exports.compile = po;
  Pe.exports.tokensToFunction = Yr;
  Pe.exports.tokensToRegExp = Kr;
  var uo = new RegExp(
    [
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    ].join("|"),
    "g",
  );
  function dt(e, t) {
    for (
      var r = [], o = 0, n = 0, a = "", i = (t && t.delimiter) || "/", u;
      (u = uo.exec(e)) != null;
    ) {
      var s = u[0],
        c = u[1],
        l = u.index;
      if (((a += e.slice(n, l)), (n = l + s.length), c)) {
        a += c[1];
        continue;
      }
      var p = e[n],
        f = u[2],
        d = u[3],
        m = u[4],
        v = u[5],
        y = u[6],
        b = u[7];
      a && (r.push(a), (a = ""));
      var N = f != null && p != null && p !== f,
        _ = y === "+" || y === "*",
        F = y === "?" || y === "*",
        A = f || i,
        O = m || v,
        R = f || (typeof r[r.length - 1] == "string" ? r[r.length - 1] : "");
      r.push({
        name: d || o++,
        prefix: f || "",
        delimiter: A,
        optional: F,
        repeat: _,
        partial: N,
        asterisk: !!b,
        pattern: O ? ho(O) : b ? ".*" : lo(A, R),
      });
    }
    return n < e.length && (a += e.substr(n)), a && r.push(a), r;
  }
  function lo(e, t) {
    return !t || t.indexOf(e) > -1
      ? "[^" + ve(e) + "]+?"
      : ve(t) + "|(?:(?!" + ve(t) + ")[^" + ve(e) + "])+?";
  }
  function po(e, t) {
    return Yr(dt(e, t), t);
  }
  function fo(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function mo(e) {
    return encodeURI(e).replace(/[?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function Yr(e, t) {
    for (var r = new Array(e.length), o = 0; o < e.length; o++)
      typeof e[o] == "object" &&
        (r[o] = new RegExp("^(?:" + e[o].pattern + ")$", ht(t)));
    return function (n, a) {
      for (
        var i = "",
          u = n || {},
          s = a || {},
          c = s.pretty ? fo : encodeURIComponent,
          l = 0;
        l < e.length;
        l++
      ) {
        var p = e[l];
        if (typeof p == "string") {
          i += p;
          continue;
        }
        var f = u[p.name],
          d;
        if (f == null)
          if (p.optional) {
            p.partial && (i += p.prefix);
            continue;
          } else throw new TypeError('Expected "' + p.name + '" to be defined');
        if (Be(f)) {
          if (!p.repeat)
            throw new TypeError(
              'Expected "' +
                p.name +
                '" to not repeat, but received `' +
                JSON.stringify(f) +
                "`",
            );
          if (f.length === 0) {
            if (p.optional) continue;
            throw new TypeError('Expected "' + p.name + '" to not be empty');
          }
          for (var m = 0; m < f.length; m++) {
            if (((d = c(f[m])), !r[l].test(d)))
              throw new TypeError(
                'Expected all "' +
                  p.name +
                  '" to match "' +
                  p.pattern +
                  '", but received `' +
                  JSON.stringify(d) +
                  "`",
              );
            i += (m === 0 ? p.prefix : p.delimiter) + d;
          }
          continue;
        }
        if (((d = p.asterisk ? mo(f) : c(f)), !r[l].test(d)))
          throw new TypeError(
            'Expected "' +
              p.name +
              '" to match "' +
              p.pattern +
              '", but received "' +
              d +
              '"',
          );
        i += p.prefix + d;
      }
      return i;
    };
  }
  function ve(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  function ho(e) {
    return e.replace(/([=!:$\/()])/g, "\\$1");
  }
  function mt(e, t) {
    return (e.keys = t), e;
  }
  function ht(e) {
    return e && e.sensitive ? "" : "i";
  }
  function vo(e, t) {
    var r = e.source.match(/\((?!\?)/g);
    if (r)
      for (var o = 0; o < r.length; o++)
        t.push({
          name: o,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          partial: !1,
          asterisk: !1,
          pattern: null,
        });
    return mt(e, t);
  }
  function yo(e, t, r) {
    for (var o = [], n = 0; n < e.length; n++) o.push(zr(e[n], t, r).source);
    var a = new RegExp("(?:" + o.join("|") + ")", ht(r));
    return mt(a, t);
  }
  function go(e, t, r) {
    return Kr(dt(e, r), t, r);
  }
  function Kr(e, t, r) {
    Be(t) || ((r = t || r), (t = [])), (r = r || {});
    for (var o = r.strict, n = r.end !== !1, a = "", i = 0; i < e.length; i++) {
      var u = e[i];
      if (typeof u == "string") a += ve(u);
      else {
        var s = ve(u.prefix),
          c = "(?:" + u.pattern + ")";
        t.push(u),
          u.repeat && (c += "(?:" + s + c + ")*"),
          u.optional
            ? u.partial
              ? (c = s + "(" + c + ")?")
              : (c = "(?:" + s + "(" + c + "))?")
            : (c = s + "(" + c + ")"),
          (a += c);
      }
    }
    var l = ve(r.delimiter || "/"),
      p = a.slice(-l.length) === l;
    return (
      o || (a = (p ? a.slice(0, -l.length) : a) + "(?:" + l + "(?=$))?"),
      n ? (a += "$") : (a += o && p ? "" : "(?=" + l + "|$)"),
      mt(new RegExp("^" + a, ht(r)), t)
    );
  }
  function zr(e, t, r) {
    return (
      Be(t) || ((r = t || r), (t = [])),
      (r = r || {}),
      e instanceof RegExp ? vo(e, t) : Be(e) ? yo(e, t, r) : go(e, t, r)
    );
  }
});
var Jr = ae((w) => {
  "use strict";
  var I = typeof Symbol == "function" && Symbol.for,
    vt = I ? Symbol.for("react.element") : 60103,
    yt = I ? Symbol.for("react.portal") : 60106,
    Ue = I ? Symbol.for("react.fragment") : 60107,
    Ve = I ? Symbol.for("react.strict_mode") : 60108,
    ke = I ? Symbol.for("react.profiler") : 60114,
    $e = I ? Symbol.for("react.provider") : 60109,
    Ge = I ? Symbol.for("react.context") : 60110,
    gt = I ? Symbol.for("react.async_mode") : 60111,
    We = I ? Symbol.for("react.concurrent_mode") : 60111,
    je = I ? Symbol.for("react.forward_ref") : 60112,
    qe = I ? Symbol.for("react.suspense") : 60113,
    bo = I ? Symbol.for("react.suspense_list") : 60120,
    Ye = I ? Symbol.for("react.memo") : 60115,
    Ke = I ? Symbol.for("react.lazy") : 60116,
    Po = I ? Symbol.for("react.block") : 60121,
    Ro = I ? Symbol.for("react.fundamental") : 60117,
    Eo = I ? Symbol.for("react.responder") : 60118,
    So = I ? Symbol.for("react.scope") : 60119;
  function Y(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case vt:
          switch (((e = e.type), e)) {
            case gt:
            case We:
            case Ue:
            case ke:
            case Ve:
            case qe:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ge:
                case je:
                case Ke:
                case Ye:
                case $e:
                  return e;
                default:
                  return t;
              }
          }
        case yt:
          return t;
      }
    }
  }
  function Qr(e) {
    return Y(e) === We;
  }
  w.AsyncMode = gt;
  w.ConcurrentMode = We;
  w.ContextConsumer = Ge;
  w.ContextProvider = $e;
  w.Element = vt;
  w.ForwardRef = je;
  w.Fragment = Ue;
  w.Lazy = Ke;
  w.Memo = Ye;
  w.Portal = yt;
  w.Profiler = ke;
  w.StrictMode = Ve;
  w.Suspense = qe;
  w.isAsyncMode = function (e) {
    return Qr(e) || Y(e) === gt;
  };
  w.isConcurrentMode = Qr;
  w.isContextConsumer = function (e) {
    return Y(e) === Ge;
  };
  w.isContextProvider = function (e) {
    return Y(e) === $e;
  };
  w.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === vt;
  };
  w.isForwardRef = function (e) {
    return Y(e) === je;
  };
  w.isFragment = function (e) {
    return Y(e) === Ue;
  };
  w.isLazy = function (e) {
    return Y(e) === Ke;
  };
  w.isMemo = function (e) {
    return Y(e) === Ye;
  };
  w.isPortal = function (e) {
    return Y(e) === yt;
  };
  w.isProfiler = function (e) {
    return Y(e) === ke;
  };
  w.isStrictMode = function (e) {
    return Y(e) === Ve;
  };
  w.isSuspense = function (e) {
    return Y(e) === qe;
  };
  w.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Ue ||
      e === We ||
      e === ke ||
      e === Ve ||
      e === qe ||
      e === bo ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Ke ||
          e.$$typeof === Ye ||
          e.$$typeof === $e ||
          e.$$typeof === Ge ||
          e.$$typeof === je ||
          e.$$typeof === Ro ||
          e.$$typeof === Eo ||
          e.$$typeof === So ||
          e.$$typeof === Po))
    );
  };
  w.typeOf = Y;
});
var en = ae((ci, Zr) => {
  "use strict";
  Zr.exports = Jr();
});
var rn = ae((x) => {
  "use strict";
  var B = typeof Symbol == "function" && Symbol.for,
    bt = B ? Symbol.for("react.element") : 60103,
    Pt = B ? Symbol.for("react.portal") : 60106,
    ze = B ? Symbol.for("react.fragment") : 60107,
    Xe = B ? Symbol.for("react.strict_mode") : 60108,
    Qe = B ? Symbol.for("react.profiler") : 60114,
    Je = B ? Symbol.for("react.provider") : 60109,
    Ze = B ? Symbol.for("react.context") : 60110,
    Rt = B ? Symbol.for("react.async_mode") : 60111,
    et = B ? Symbol.for("react.concurrent_mode") : 60111,
    tt = B ? Symbol.for("react.forward_ref") : 60112,
    rt = B ? Symbol.for("react.suspense") : 60113,
    _o = B ? Symbol.for("react.suspense_list") : 60120,
    nt = B ? Symbol.for("react.memo") : 60115,
    ot = B ? Symbol.for("react.lazy") : 60116,
    To = B ? Symbol.for("react.block") : 60121,
    wo = B ? Symbol.for("react.fundamental") : 60117,
    xo = B ? Symbol.for("react.responder") : 60118,
    No = B ? Symbol.for("react.scope") : 60119;
  function K(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case bt:
          switch (((e = e.type), e)) {
            case Rt:
            case et:
            case ze:
            case Qe:
            case Xe:
            case rt:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ze:
                case tt:
                case ot:
                case nt:
                case Je:
                  return e;
                default:
                  return t;
              }
          }
        case Pt:
          return t;
      }
    }
  }
  function tn(e) {
    return K(e) === et;
  }
  x.AsyncMode = Rt;
  x.ConcurrentMode = et;
  x.ContextConsumer = Ze;
  x.ContextProvider = Je;
  x.Element = bt;
  x.ForwardRef = tt;
  x.Fragment = ze;
  x.Lazy = ot;
  x.Memo = nt;
  x.Portal = Pt;
  x.Profiler = Qe;
  x.StrictMode = Xe;
  x.Suspense = rt;
  x.isAsyncMode = function (e) {
    return tn(e) || K(e) === Rt;
  };
  x.isConcurrentMode = tn;
  x.isContextConsumer = function (e) {
    return K(e) === Ze;
  };
  x.isContextProvider = function (e) {
    return K(e) === Je;
  };
  x.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === bt;
  };
  x.isForwardRef = function (e) {
    return K(e) === tt;
  };
  x.isFragment = function (e) {
    return K(e) === ze;
  };
  x.isLazy = function (e) {
    return K(e) === ot;
  };
  x.isMemo = function (e) {
    return K(e) === nt;
  };
  x.isPortal = function (e) {
    return K(e) === Pt;
  };
  x.isProfiler = function (e) {
    return K(e) === Qe;
  };
  x.isStrictMode = function (e) {
    return K(e) === Xe;
  };
  x.isSuspense = function (e) {
    return K(e) === rt;
  };
  x.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === ze ||
      e === et ||
      e === Qe ||
      e === Xe ||
      e === rt ||
      e === _o ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === ot ||
          e.$$typeof === nt ||
          e.$$typeof === Je ||
          e.$$typeof === Ze ||
          e.$$typeof === tt ||
          e.$$typeof === wo ||
          e.$$typeof === xo ||
          e.$$typeof === No ||
          e.$$typeof === To))
    );
  };
  x.typeOf = K;
});
var on = ae((pi, nn) => {
  "use strict";
  nn.exports = rn();
});
var fn = ae((fi, pn) => {
  "use strict";
  var Et = on(),
    Oo = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    Co = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    Ao = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    un = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    St = {};
  St[Et.ForwardRef] = Ao;
  St[Et.Memo] = un;
  function an(e) {
    return Et.isMemo(e) ? un : St[e.$$typeof] || Oo;
  }
  var Do = Object.defineProperty,
    Lo = Object.getOwnPropertyNames,
    sn = Object.getOwnPropertySymbols,
    Fo = Object.getOwnPropertyDescriptor,
    Mo = Object.getPrototypeOf,
    cn = Object.prototype;
  function ln(e, t, r) {
    if (typeof t != "string") {
      if (cn) {
        var o = Mo(t);
        o && o !== cn && ln(e, o, r);
      }
      var n = Lo(t);
      sn && (n = n.concat(sn(t)));
      for (var a = an(e), i = an(t), u = 0; u < n.length; ++u) {
        var s = n[u];
        if (!Co[s] && !(r && r[s]) && !(i && i[s]) && !(a && a[s])) {
          var c = Fo(t, s);
          try {
            Do(e, s, c);
          } catch {}
        }
      }
    }
    return e;
  }
  pn.exports = ln;
});
function tr(e) {
  return e === 2;
}
var Te = S(Z(), 1);
var rr = S(ee(), 1);
function On(e, t, r) {
  return (0, Te.useMemo)(
    () =>
      t
        ? r
        : async (o) => {
            if (!o.ctrlKey) return o.preventDefault(), $t(e);
          },
    [e, t, r],
  );
}
function Cn(e) {
  let t = "steam://";
  return tr(ie.EREALM) && (t = "steamchina://"), t + e;
}
var An = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Dn(e, t) {
  let {
      to: r,
      external: o = !0,
      openInNewWindow: n,
      onClick: a,
      snr: i,
      gamepadFocusable: u,
      ...s
    } = e,
    c = r,
    l = kt();
  i && (typeof i == "boolean" ? (c = st(l, c)) : (c = st({ ...l, ...i }, c)));
  let p = c,
    f = o ?? n ?? !1,
    d = An.test(p);
  if (!f && d) {
    let y = new URL(location.href),
      b = new URL(r.startsWith("//") ? y.protocol + r : r);
    b.origin === y.origin
      ? ((p = b.pathname + b.search + b.hash), (f = !1))
      : (f = !0);
  }
  n &&
    (ie.IN_CLIENT
      ? (p = Cn(`openurl/${c}`))
      : ((s.target ??= "_blank"), (s.rel ??= "noreferrer noopener")));
  let m = On(p, f, a),
    v = e.gamepadFocusable ? Xt : "a";
  return (0, rr.jsx)(v, { ref: t, href: c, onClick: m, ...s });
}
var la = Te.default.memo(Te.default.forwardRef(Dn));
var V = S(Z()),
  xe = S(ct());
var we = {
  FocusRingRoot: "zMwifnPqWAI-",
  FocusRing: "G7jPexLcZ14-",
  flash: "FLDEa7rRhyY-",
  growOutline: "nWDadfKww6s-",
  fadeOutline: "N5-VUB--qfQ-",
  blinker: "ppcisOXf8KU-",
  DebugFocusRing: "wakyoxMBdvA-",
  FocusRingOnHiddenItem: "Ubvx1pqfMh8-",
};
var se = S(ee()),
  or = S(Z()),
  Ln = new jt("FocusNavigation").Debug;
function nr(e) {
  let { children: t, ...r } = e,
    [o, n] = V.default.useState({
      bFocusWithin: !1,
      navTarget: null,
      prevTarget: null,
    }),
    a = V.default.useRef(null),
    i = V.default.useMemo(
      () => ({
        OnBlur: (u, s, c) => {
          n({ bFocusWithin: !1, navTarget: null, prevTarget: null });
        },
        OnFocus: (u, s, c) => {
          n({ bFocusWithin: !0, navTarget: s, prevTarget: null });
        },
        OnFocusChange: (u, s, c) => {
          n({ bFocusWithin: !0, navTarget: c, prevTarget: s });
        },
        OnForceMeasureFocusRing: () => {
          a.current?.MeasureElementAndUpdate();
        },
      }),
      [n],
    );
  return (0, se.jsxs)(se.Fragment, {
    children: [
      (0, se.jsx)(Fn, { ...r, ...o, refMeasure: a }),
      (0, se.jsx)(zt.Provider, { value: i, children: t }),
    ],
  });
}
function Fn(e) {
  let {
      rootClassName: t,
      className: r,
      bFocusWithin: o,
      navTarget: n,
      refMeasure: a,
    } = e,
    [i, u] = V.default.useState(null),
    s = qt(),
    c = Qt(),
    l = Yt(!1);
  return !c && !l
    ? null
    : (0, se.jsx)("div", {
        className: (0, xe.default)(we.FocusRingRoot, t),
        ref: u,
        children: (0, se.jsx)(Mn, {
          refMeasure: a,
          className: (0, xe.default)(r, s && we.DebugFocusRing),
          bFocusWithin: o && (l || s),
          navTarget: n,
          elContainer: i,
          bDebug: s,
        }),
      });
}
function Mn(e) {
  let {
      className: t,
      bFocusWithin: r,
      navTarget: o,
      elContainer: n,
      bDebug: a,
      refMeasure: i,
    } = e,
    [u, s] = V.default.useState(null),
    [c, l] = V.default.useReducer((_) => _ + 1, 0),
    [p, f] = V.default.useReducer((_) => _ + 1, 0);
  Gt(
    i,
    V.default.useMemo(() => ({ MeasureElementAndUpdate: f }), []),
  );
  let { bActiveTree: d, bDisableFocusClasses: m } = Kt(),
    v = d && !m,
    y = In(a, o),
    b = V.default.useCallback(() => {
      if (!o || !o.BWantsFocusRing() || !n || !v) {
        s(null);
        return;
      }
      let _ = o.GetBoundingRect(),
        F = n.getBoundingClientRect(),
        A = {
          left: _.x - F.x,
          top: _.y - F.y,
          height: _.height,
          width: _.width,
        };
      s((O) =>
        !O ||
        A.left != O.left ||
        A.top != O.top ||
        A.height != O.height ||
        A.width != O.width
          ? A
          : O,
      );
    }, [o, n, v]);
  V.default.useLayoutEffect(() => b(), [b]),
    V.default.useLayoutEffect(() => {
      l();
    }, [o]);
  let N = r;
  return (
    o && n && (o.BWantsFocusRing() || (N = !1)),
    V.default.useEffect(() => {
      if (!N) return;
      let _ = performance.now(),
        F,
        A = () => {
          b(), performance.now() - _ <= 500 && (F = requestAnimationFrame(A));
        };
      return A(), () => cancelAnimationFrame(F);
    }, [N, b, u, p]),
    !N || !u
      ? null
      : (0, or.createElement)(Hn, {
          ...u,
          key: c,
          className: (0, xe.default)(t, y && we.FocusRingOnHiddenItem),
          target: o,
        })
  );
}
function Hn(e) {
  let { className: t, left: r, top: o, height: n, width: a, target: i } = e,
    u = 0,
    s = {
      left: (r ?? 0) - u + "px",
      top: (o ?? 0) - u + "px",
      height: n + "px",
      width: a + "px",
    };
  return (0, se.jsx)("div", {
    className: (0, xe.default)(we.FocusRing, t),
    style: s,
  });
}
function In(e, t) {
  let [r, o] = V.default.useState(!1);
  return (
    (0, V.useEffect)(() => {
      if (e && t) {
        let n = t.GetBoundingRect(),
          a = t.Element,
          i = a.ownerDocument.defaultView,
          u = (c) =>
            i.getComputedStyle(c).display == "none" ||
            (n?.width == 0 && n.height == 0 && n.x == 0 && n.y == 0);
        for (; u(a) && a?.parentElement; )
          (a = a.parentElement), (n = a.getBoundingClientRect());
        let s = t.Element != a;
        o(
          (c) => (
            s &&
              s != c &&
              Ln(
                "Focused on hidden item: ",
                t.Element,
                ". Closest visible ancestor: ",
                a,
              ),
            s
          ),
        );
      }
    }, [e, t]),
    r
  );
}
var ar = "/PPCEHXCA.jpg";
var ir = "/QLK737BA.jpg";
var sr = "/UA7RT5CA.jpg";
function kn(e, t) {
  return {
    queryKey: ["ProfileItemsEquipped", t],
    async queryFn() {
      let r = await Jt.GetProfileItemsEquipped(e, {
        steamid: t,
        language: ie.LANGUAGE,
      });
      if (r.GetEResult() != 1)
        throw (
          (r.DEBUG_LogToConsole(),
          new Vt(r.GetEResult(), "Failed to load equipped profile items"))
        );
      return r.Body().toObject();
    },
  };
}
function cr(e) {
  let t = Zt();
  return Bt(kn(t, e));
}
var ur = S(Z()),
  pr = S(ee());
function lr(e) {
  let { rgSources: t, onIncrementalError: r, alt: o, ...n } = e,
    [a, i] = (0, ur.useState)(0),
    u = t[a];
  return (0, pr.jsx)("img", {
    onError: (s) => {
      i((c) => c + 1), r?.(s, u, a);
    },
    alt: o,
    ...n,
    src: u,
  });
}
var Me = S(ct()),
  Ne = S(Z());
var fr = "t1-DQ4KhiQ0-";
var dr = "YbrTGQJwy1w-";
var mr = "_4-VIszWOyjU-";
var hr = "_-2DlbVABlsg-";
var vr = "gRteJ-XhQG8-";
var yr = "X0rP4JDEGys-";
var gr = "HM2pmBPb6yk-";
var br = "DHqf1E6df88-";
var Pr = "EeeZUuRovTI-";
var Rr = "CdtBH5cDo-Q-";
var oe = S(ee());
function Gn(e) {
  let {
      avatarURL: t,
      size: r,
      statusStyle: o,
      statusPosition: n,
      className: a,
      children: i,
      isOnline: u,
      isInGame: s,
      isWatchingBroadcast: c,
      isAwayOrSnooze: l,
      alt: p,
    } = e,
    f = [];
  return (
    t && f.push(t),
    f.push(Xn(r ?? "Medium")),
    (0, oe.jsxs)("div", {
      className: (0, Me.default)(
        fr,
        { [mr]: !u, [hr]: u, [yr]: s, [br]: c, [gr]: l },
        a,
      ),
      "data-size": r,
      "data-status-position": n,
      children: [
        (0, oe.jsx)("div", { className: vr, style: o }),
        (0, oe.jsx)(lr, {
          className: (0, Me.default)(dr),
          rgSources: f,
          draggable: !1,
          alt: p,
        }),
        i,
      ],
    })
  );
}
function Wn(e) {
  let { profileItem: t, className: r, bDisableAnimation: o, ...n } = e;
  if (!t || !t.image_small || t.image_small.length == 0) return null;
  let a = o ? t.image_large : t.image_small;
  return (
    a || (a = t.image_small),
    a.startsWith("https://") ||
      (a = ie.MEDIA_CDN_COMMUNITY_URL + "images/" + a),
    (0, oe.jsx)("div", {
      className: (0, Me.default)(Pr, r),
      ...n,
      children: (0, oe.jsx)("img", {
        className: Rr,
        src: a,
        alt: "",
        role: "presentation",
      }),
    })
  );
}
var jn = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function qn(e) {
  return [...e].map((t) => t.toString(16).padStart(2, "0")).join("");
}
function Yn(e, t) {
  e === void 0 && (e = new Uint8Array(20));
  let r = qn(e),
    o = ".jpg";
  r === "0000000000000000000000000000000000000000" && (r = jn),
    r.length == 44 && ((o = r.slice(-4)), (r = r.slice(0, 40)));
  let n = ie.AVATAR_BASE_URL;
  switch (
    (n ||
      ((n = ie.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (n += r.slice(0, 2) + "/")),
    (n += r),
    t)
  ) {
    case "X-Small":
    case "Small":
      break;
    case "Medium":
    case "MediumLarge":
      n += "_medium";
      break;
    case "Large":
    case "X-Large":
    case "FillArea":
      n += "_full";
      break;
  }
  return (n += o), n;
}
function Kn(e) {
  let {
      playerLinkDetails: t,
      animatedAvatar: r,
      avatarFrame: o,
      size: n,
      ...a
    } = e,
    i = Yn(t.public_data?.sha_digest_avatar, n);
  return (
    r?.image_small?.length &&
      (i = ie.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small),
    (0, oe.jsx)(Gn, {
      avatarURL: i,
      size: n,
      isOnline: t.private_data?.persona_state === 1,
      isInGame: t.private_data?.game_id !== void 0,
      isWatchingBroadcast:
        t.private_data?.watching_broadcast_accountid !== void 0,
      isAwayOrSnooze:
        t.private_data?.persona_state === 3 ||
        t.private_data?.persona_state === 4,
      ...a,
    })
  );
}
function zn(e, t) {
  let [r, o] = (0, Ne.useState)(e !== "None");
  return (
    (0, Ne.useEffect)(() => {
      if ((o(e !== "None"), e === "None" || e === "Infinite")) return;
      let n;
      switch (e) {
        case "Short":
          n = 2500;
          break;
        case "Medium":
          n = 5e3;
          break;
        case "Long":
          n = 1e4;
          break;
      }
      let a = setTimeout(() => {
        o(t);
      }, n);
      return () => {
        clearTimeout(a);
      };
    }, [e, t]),
    r
  );
}
function Ua(e) {
  let {
      loopDuration: t = "Infinite",
      bParentHovered: r,
      bLimitProfileFrameAnimationTime: o,
      className: n,
      ...a
    } = e,
    [i, u] = (0, Ne.useState)(!1),
    s = zn(t, i),
    c = cr(a.playerLinkDetails.public_data.steamid);
  return (0, oe.jsx)("div", {
    className: n,
    onMouseEnter: () => u(!0),
    onMouseLeave: () => u(!1),
    children: (0, oe.jsx)(Kn, {
      ...a,
      animatedAvatar: s ? c.data?.animated_avatar : void 0,
      children: (0, oe.jsx)(Wn, {
        profileItem: c.data?.avatar_frame,
        bDisableAnimation: o && !s,
      }),
    }),
  });
}
function Xn(e) {
  switch (e) {
    case "X-Small":
    case "Small":
      return Le(ar);
    case "Medium":
    case "MediumLarge":
      return Le(sr);
    case "Large":
    case "X-Large":
    case "FillArea":
      return Le(ir);
  }
}
var ue = S(Z());
var Tn = S(ct(), 1),
  z = S(Z(), 1);
var pe = S(Z());
function He(e, t) {
  return (
    (He = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    He(e, t)
  );
}
function te(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    He(e, t);
}
var L = S(Z()),
  wt = S(Or());
function H() {
  return (
    (H = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
          }
          return e;
        }),
    H.apply(null, arguments)
  );
}
function Ie(e) {
  return e.charAt(0) === "/";
}
function ut(e, t) {
  for (var r = t, o = r + 1, n = e.length; o < n; r += 1, o += 1) e[r] = e[o];
  e.pop();
}
function Zn(e, t) {
  t === void 0 && (t = "");
  var r = (e && e.split("/")) || [],
    o = (t && t.split("/")) || [],
    n = e && Ie(e),
    a = t && Ie(t),
    i = n || a;
  if (
    (e && Ie(e) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))), !o.length)
  )
    return "/";
  var u;
  if (o.length) {
    var s = o[o.length - 1];
    u = s === "." || s === ".." || s === "";
  } else u = !1;
  for (var c = 0, l = o.length; l >= 0; l--) {
    var p = o[l];
    p === "." ? ut(o, l) : p === ".." ? (ut(o, l), c++) : c && (ut(o, l), c--);
  }
  if (!i) for (; c--; c) o.unshift("..");
  i && o[0] !== "" && (!o[0] || !Ie(o[0])) && o.unshift("");
  var f = o.join("/");
  return u && f.substr(-1) !== "/" && (f += "/"), f;
}
var Cr = Zn;
var eo = !0,
  lt = "Invariant failed";
function ce(e, t) {
  if (!e) {
    if (eo) throw new Error(lt);
    var r = typeof t == "function" ? t() : t,
      o = r ? "".concat(lt, ": ").concat(r) : lt;
    throw new Error(o);
  }
}
function Ce(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Ar(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function to(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function Ir(e, t) {
  return to(e, t) ? e.substr(t.length) : e;
}
function Br(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function ro(e) {
  var t = e || "/",
    r = "",
    o = "",
    n = t.indexOf("#");
  n !== -1 && ((o = t.substr(n)), (t = t.substr(0, n)));
  var a = t.indexOf("?");
  return (
    a !== -1 && ((r = t.substr(a)), (t = t.substr(0, a))),
    { pathname: t, search: r === "?" ? "" : r, hash: o === "#" ? "" : o }
  );
}
function k(e) {
  var t = e.pathname,
    r = e.search,
    o = e.hash,
    n = t || "/";
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    o && o !== "#" && (n += o.charAt(0) === "#" ? o : "#" + o),
    n
  );
}
function G(e, t, r, o) {
  var n;
  typeof e == "string"
    ? ((n = ro(e)), (n.state = t))
    : ((n = H({}, e)),
      n.pathname === void 0 && (n.pathname = ""),
      n.search
        ? n.search.charAt(0) !== "?" && (n.search = "?" + n.search)
        : (n.search = ""),
      n.hash
        ? n.hash.charAt(0) !== "#" && (n.hash = "#" + n.hash)
        : (n.hash = ""),
      t !== void 0 && n.state === void 0 && (n.state = t));
  try {
    n.pathname = decodeURI(n.pathname);
  } catch (a) {
    throw a instanceof URIError
      ? new URIError(
          'Pathname "' +
            n.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.',
        )
      : a;
  }
  return (
    r && (n.key = r),
    o
      ? n.pathname
        ? n.pathname.charAt(0) !== "/" &&
          (n.pathname = Cr(n.pathname, o.pathname))
        : (n.pathname = o.pathname)
      : n.pathname || (n.pathname = "/"),
    n
  );
}
function ft() {
  var e = null;
  function t(i) {
    return (
      (e = i),
      function () {
        e === i && (e = null);
      }
    );
  }
  function r(i, u, s, c) {
    if (e != null) {
      var l = typeof e == "function" ? e(i, u) : e;
      typeof l == "string"
        ? typeof s == "function"
          ? s(l, c)
          : c(!0)
        : c(l !== !1);
    } else c(!0);
  }
  var o = [];
  function n(i) {
    var u = !0;
    function s() {
      u && i.apply(void 0, arguments);
    }
    return (
      o.push(s),
      function () {
        (u = !1),
          (o = o.filter(function (c) {
            return c !== s;
          }));
      }
    );
  }
  function a() {
    for (var i = arguments.length, u = new Array(i), s = 0; s < i; s++)
      u[s] = arguments[s];
    o.forEach(function (c) {
      return c.apply(void 0, u);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: r,
    appendListener: n,
    notifyListeners: a,
  };
}
var Ur = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function Vr(e, t) {
  t(window.confirm(e));
}
function no() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function oo() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function ao() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function io(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Dr = "popstate",
  Lr = "hashchange";
function Fr() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function kr(e) {
  e === void 0 && (e = {}), Ur || ce(!1);
  var t = window.history,
    r = no(),
    o = !oo(),
    n = e,
    a = n.forceRefresh,
    i = a === void 0 ? !1 : a,
    u = n.getUserConfirmation,
    s = u === void 0 ? Vr : u,
    c = n.keyLength,
    l = c === void 0 ? 6 : c,
    p = e.basename ? Br(Ce(e.basename)) : "";
  function f(E) {
    var C = E || {},
      h = C.key,
      g = C.state,
      T = window.location,
      D = T.pathname,
      J = T.search,
      q = T.hash,
      j = D + J + q;
    return p && (j = Ir(j, p)), G(j, g, h);
  }
  function d() {
    return Math.random().toString(36).substr(2, l);
  }
  var m = ft();
  function v(E) {
    H(Q, E), (Q.length = t.length), m.notifyListeners(Q.location, Q.action);
  }
  function y(E) {
    io(E) || _(f(E.state));
  }
  function b() {
    _(f(Fr()));
  }
  var N = !1;
  function _(E) {
    if (N) (N = !1), v();
    else {
      var C = "POP";
      m.confirmTransitionTo(E, C, s, function (h) {
        h ? v({ action: C, location: E }) : F(E);
      });
    }
  }
  function F(E) {
    var C = Q.location,
      h = O.indexOf(C.key);
    h === -1 && (h = 0);
    var g = O.indexOf(E.key);
    g === -1 && (g = 0);
    var T = h - g;
    T && ((N = !0), M(T));
  }
  var A = f(Fr()),
    O = [A.key];
  function R(E) {
    return p + k(E);
  }
  function P(E, C) {
    var h = "PUSH",
      g = G(E, C, d(), Q.location);
    m.confirmTransitionTo(g, h, s, function (T) {
      if (T) {
        var D = R(g),
          J = g.key,
          q = g.state;
        if (r)
          if ((t.pushState({ key: J, state: q }, null, D), i))
            window.location.href = D;
          else {
            var j = O.indexOf(Q.location.key),
              be = O.slice(0, j + 1);
            be.push(g.key), (O = be), v({ action: h, location: g });
          }
        else window.location.href = D;
      }
    });
  }
  function U(E, C) {
    var h = "REPLACE",
      g = G(E, C, d(), Q.location);
    m.confirmTransitionTo(g, h, s, function (T) {
      if (T) {
        var D = R(g),
          J = g.key,
          q = g.state;
        if (r)
          if ((t.replaceState({ key: J, state: q }, null, D), i))
            window.location.replace(D);
          else {
            var j = O.indexOf(Q.location.key);
            j !== -1 && (O[j] = g.key), v({ action: h, location: g });
          }
        else window.location.replace(D);
      }
    });
  }
  function M(E) {
    t.go(E);
  }
  function $() {
    M(-1);
  }
  function X() {
    M(1);
  }
  var he = 0;
  function ne(E) {
    (he += E),
      he === 1 && E === 1
        ? (window.addEventListener(Dr, y), o && window.addEventListener(Lr, b))
        : he === 0 &&
          (window.removeEventListener(Dr, y),
          o && window.removeEventListener(Lr, b));
  }
  var W = !1;
  function ye(E) {
    E === void 0 && (E = !1);
    var C = m.setPrompt(E);
    return (
      W || (ne(1), (W = !0)),
      function () {
        return W && ((W = !1), ne(-1)), C();
      }
    );
  }
  function ge(E) {
    var C = m.appendListener(E);
    return (
      ne(1),
      function () {
        ne(-1), C();
      }
    );
  }
  var Q = {
    length: t.length,
    action: "POP",
    location: A,
    createHref: R,
    push: P,
    replace: U,
    go: M,
    goBack: $,
    goForward: X,
    block: ye,
    listen: ge,
  };
  return Q;
}
var Mr = "hashchange",
  so = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Ar(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Ar, decodePath: Ce },
    slash: { encodePath: Ce, decodePath: Ce },
  };
function $r(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function Oe() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function co(e) {
  window.location.hash = e;
}
function pt(e) {
  window.location.replace($r(window.location.href) + "#" + e);
}
function Gr(e) {
  e === void 0 && (e = {}), Ur || ce(!1);
  var t = window.history,
    r = ao(),
    o = e,
    n = o.getUserConfirmation,
    a = n === void 0 ? Vr : n,
    i = o.hashType,
    u = i === void 0 ? "slash" : i,
    s = e.basename ? Br(Ce(e.basename)) : "",
    c = so[u],
    l = c.encodePath,
    p = c.decodePath;
  function f() {
    var h = p(Oe());
    return s && (h = Ir(h, s)), G(h);
  }
  var d = ft();
  function m(h) {
    H(C, h), (C.length = t.length), d.notifyListeners(C.location, C.action);
  }
  var v = !1,
    y = null;
  function b(h, g) {
    return (
      h.pathname === g.pathname && h.search === g.search && h.hash === g.hash
    );
  }
  function N() {
    var h = Oe(),
      g = l(h);
    if (h !== g) pt(g);
    else {
      var T = f(),
        D = C.location;
      if ((!v && b(D, T)) || y === k(T)) return;
      (y = null), _(T);
    }
  }
  function _(h) {
    if (v) (v = !1), m();
    else {
      var g = "POP";
      d.confirmTransitionTo(h, g, a, function (T) {
        T ? m({ action: g, location: h }) : F(h);
      });
    }
  }
  function F(h) {
    var g = C.location,
      T = P.lastIndexOf(k(g));
    T === -1 && (T = 0);
    var D = P.lastIndexOf(k(h));
    D === -1 && (D = 0);
    var J = T - D;
    J && ((v = !0), X(J));
  }
  var A = Oe(),
    O = l(A);
  A !== O && pt(O);
  var R = f(),
    P = [k(R)];
  function U(h) {
    var g = document.querySelector("base"),
      T = "";
    return (
      g && g.getAttribute("href") && (T = $r(window.location.href)),
      T + "#" + l(s + k(h))
    );
  }
  function M(h, g) {
    var T = "PUSH",
      D = G(h, void 0, void 0, C.location);
    d.confirmTransitionTo(D, T, a, function (J) {
      if (J) {
        var q = k(D),
          j = l(s + q),
          be = Oe() !== j;
        if (be) {
          (y = q), co(j);
          var De = P.lastIndexOf(k(C.location)),
            It = P.slice(0, De + 1);
          It.push(q), (P = It), m({ action: T, location: D });
        } else m();
      }
    });
  }
  function $(h, g) {
    var T = "REPLACE",
      D = G(h, void 0, void 0, C.location);
    d.confirmTransitionTo(D, T, a, function (J) {
      if (J) {
        var q = k(D),
          j = l(s + q),
          be = Oe() !== j;
        be && ((y = q), pt(j));
        var De = P.indexOf(k(C.location));
        De !== -1 && (P[De] = q), m({ action: T, location: D });
      }
    });
  }
  function X(h) {
    t.go(h);
  }
  function he() {
    X(-1);
  }
  function ne() {
    X(1);
  }
  var W = 0;
  function ye(h) {
    (W += h),
      W === 1 && h === 1
        ? window.addEventListener(Mr, N)
        : W === 0 && window.removeEventListener(Mr, N);
  }
  var ge = !1;
  function Q(h) {
    h === void 0 && (h = !1);
    var g = d.setPrompt(h);
    return (
      ge || (ye(1), (ge = !0)),
      function () {
        return ge && ((ge = !1), ye(-1)), g();
      }
    );
  }
  function E(h) {
    var g = d.appendListener(h);
    return (
      ye(1),
      function () {
        ye(-1), g();
      }
    );
  }
  var C = {
    length: t.length,
    action: "POP",
    location: R,
    createHref: U,
    push: M,
    replace: $,
    go: X,
    goBack: he,
    goForward: ne,
    block: Q,
    listen: E,
  };
  return C;
}
function Hr(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Wr(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.getUserConfirmation,
    o = t.initialEntries,
    n = o === void 0 ? ["/"] : o,
    a = t.initialIndex,
    i = a === void 0 ? 0 : a,
    u = t.keyLength,
    s = u === void 0 ? 6 : u,
    c = ft();
  function l(P) {
    H(R, P),
      (R.length = R.entries.length),
      c.notifyListeners(R.location, R.action);
  }
  function p() {
    return Math.random().toString(36).substr(2, s);
  }
  var f = Hr(i, 0, n.length - 1),
    d = n.map(function (P) {
      return typeof P == "string"
        ? G(P, void 0, p())
        : G(P, void 0, P.key || p());
    }),
    m = k;
  function v(P, U) {
    var M = "PUSH",
      $ = G(P, U, p(), R.location);
    c.confirmTransitionTo($, M, r, function (X) {
      if (X) {
        var he = R.index,
          ne = he + 1,
          W = R.entries.slice(0);
        W.length > ne ? W.splice(ne, W.length - ne, $) : W.push($),
          l({ action: M, location: $, index: ne, entries: W });
      }
    });
  }
  function y(P, U) {
    var M = "REPLACE",
      $ = G(P, U, p(), R.location);
    c.confirmTransitionTo($, M, r, function (X) {
      X && ((R.entries[R.index] = $), l({ action: M, location: $ }));
    });
  }
  function b(P) {
    var U = Hr(R.index + P, 0, R.entries.length - 1),
      M = "POP",
      $ = R.entries[U];
    c.confirmTransitionTo($, M, r, function (X) {
      X ? l({ action: M, location: $, index: U }) : l();
    });
  }
  function N() {
    b(-1);
  }
  function _() {
    b(1);
  }
  function F(P) {
    var U = R.index + P;
    return U >= 0 && U < R.entries.length;
  }
  function A(P) {
    return P === void 0 && (P = !1), c.setPrompt(P);
  }
  function O(P) {
    return c.appendListener(P);
  }
  var R = {
    length: d.length,
    action: "POP",
    location: d[f],
    index: f,
    entries: d,
    createHref: m,
    push: v,
    replace: y,
    go: b,
    goBack: N,
    goForward: _,
    canGo: F,
    block: A,
    listen: O,
  };
  return R;
}
var gn = S(Xr()),
  gi = S(en());
function Re(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e)
    if ({}.hasOwnProperty.call(e, o)) {
      if (t.includes(o)) continue;
      r[o] = e[o];
    }
  return r;
}
var Ho = S(fn()),
  _t = 1073741823,
  dn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
function Io() {
  var e = "__global_unique_id__";
  return (dn[e] = (dn[e] || 0) + 1);
}
function Bo(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Uo(e) {
  var t = [];
  return {
    on: function (o) {
      t.push(o);
    },
    off: function (o) {
      t = t.filter(function (n) {
        return n !== o;
      });
    },
    get: function () {
      return e;
    },
    set: function (o, n) {
      (e = o),
        t.forEach(function (a) {
          return a(e, n);
        });
    },
  };
}
function Vo(e) {
  return Array.isArray(e) ? e[0] : e;
}
function ko(e, t) {
  var r,
    o,
    n = "__create-react-context-" + Io() + "__",
    a = (function (u) {
      te(s, u);
      function s() {
        for (var l, p = arguments.length, f = new Array(p), d = 0; d < p; d++)
          f[d] = arguments[d];
        return (
          (l = u.call.apply(u, [this].concat(f)) || this),
          (l.emitter = Uo(l.props.value)),
          l
        );
      }
      var c = s.prototype;
      return (
        (c.getChildContext = function () {
          var p;
          return (p = {}), (p[n] = this.emitter), p;
        }),
        (c.componentWillReceiveProps = function (p) {
          if (this.props.value !== p.value) {
            var f = this.props.value,
              d = p.value,
              m;
            Bo(f, d)
              ? (m = 0)
              : ((m = typeof t == "function" ? t(f, d) : _t),
                (m |= 0),
                m !== 0 && this.emitter.set(p.value, m));
          }
        }),
        (c.render = function () {
          return this.props.children;
        }),
        s
      );
    })(L.default.Component);
  a.childContextTypes = ((r = {}), (r[n] = wt.default.object.isRequired), r);
  var i = (function (u) {
    te(s, u);
    function s() {
      for (var l, p = arguments.length, f = new Array(p), d = 0; d < p; d++)
        f[d] = arguments[d];
      return (
        (l = u.call.apply(u, [this].concat(f)) || this),
        (l.observedBits = void 0),
        (l.state = { value: l.getValue() }),
        (l.onUpdate = function (m, v) {
          var y = l.observedBits | 0;
          y & v && l.setState({ value: l.getValue() });
        }),
        l
      );
    }
    var c = s.prototype;
    return (
      (c.componentWillReceiveProps = function (p) {
        var f = p.observedBits;
        this.observedBits = f ?? _t;
      }),
      (c.componentDidMount = function () {
        this.context[n] && this.context[n].on(this.onUpdate);
        var p = this.props.observedBits;
        this.observedBits = p ?? _t;
      }),
      (c.componentWillUnmount = function () {
        this.context[n] && this.context[n].off(this.onUpdate);
      }),
      (c.getValue = function () {
        return this.context[n] ? this.context[n].get() : e;
      }),
      (c.render = function () {
        return Vo(this.props.children)(this.state.value);
      }),
      s
    );
  })(L.default.Component);
  return (
    (i.contextTypes = ((o = {}), (o[n] = wt.default.object), o)),
    { Provider: a, Consumer: i }
  );
}
var $o = L.default.createContext || ko,
  bn = function (t) {
    var r = $o();
    return (r.displayName = t), r;
  },
  Pn = bn("Router-History"),
  de = bn("Router"),
  Ee = (function (e) {
    te(t, e),
      (t.computeRootMatch = function (n) {
        return { path: "/", url: "/", params: {}, isExact: n === "/" };
      });
    function t(o) {
      var n;
      return (
        (n = e.call(this, o) || this),
        (n.state = { location: o.history.location }),
        (n._isMounted = !1),
        (n._pendingLocation = null),
        o.staticContext ||
          (n.unlisten = o.history.listen(function (a) {
            n._pendingLocation = a;
          })),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        var n = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (a) {
              n._isMounted && n.setState({ location: a });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (r.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (r.render = function () {
        return L.default.createElement(
          de.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          L.default.createElement(Pn.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          }),
        );
      }),
      t
    );
  })(L.default.Component),
  Go = (function (e) {
    te(t, e);
    function t() {
      for (var o, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (o = e.call.apply(e, [this].concat(a)) || this),
        (o.history = Wr(o.props)),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return L.default.createElement(Ee, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(L.default.Component),
  Ri = (function (e) {
    te(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (r.componentDidUpdate = function (n) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, n);
      }),
      (r.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (r.render = function () {
        return null;
      }),
      t
    );
  })(L.default.Component);
var mn = {},
  Wo = 1e4,
  hn = 0;
function jo(e, t) {
  var r = "" + t.end + t.strict + t.sensitive,
    o = mn[r] || (mn[r] = {});
  if (o[e]) return o[e];
  var n = [],
    a = (0, gn.default)(e, n, t),
    i = { regexp: a, keys: n };
  return hn < Wo && ((o[e] = i), hn++), i;
}
function Se(e, t) {
  t === void 0 && (t = {}),
    (typeof t == "string" || Array.isArray(t)) && (t = { path: t });
  var r = t,
    o = r.path,
    n = r.exact,
    a = n === void 0 ? !1 : n,
    i = r.strict,
    u = i === void 0 ? !1 : i,
    s = r.sensitive,
    c = s === void 0 ? !1 : s,
    l = [].concat(o);
  return l.reduce(function (p, f) {
    if (!f && f !== "") return null;
    if (p) return p;
    var d = jo(f, { end: a, strict: u, sensitive: c }),
      m = d.regexp,
      v = d.keys,
      y = m.exec(e);
    if (!y) return null;
    var b = y[0],
      N = y.slice(1),
      _ = e === b;
    return a && !_
      ? null
      : {
          path: f,
          url: f === "/" && b === "" ? "/" : b,
          isExact: _,
          params: v.reduce(function (F, A, O) {
            return (F[A.name] = N[O]), F;
          }, {}),
        };
  }, null);
}
function qo(e) {
  return L.default.Children.count(e) === 0;
}
var Yo = (function (e) {
  te(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return (
    (r.render = function () {
      var n = this;
      return L.default.createElement(de.Consumer, null, function (a) {
        a || ce(!1);
        var i = n.props.location || a.location,
          u = n.props.computedMatch
            ? n.props.computedMatch
            : n.props.path
              ? Se(i.pathname, n.props)
              : a.match,
          s = H({}, a, { location: i, match: u }),
          c = n.props,
          l = c.children,
          p = c.component,
          f = c.render;
        return (
          Array.isArray(l) && qo(l) && (l = null),
          L.default.createElement(
            de.Provider,
            { value: s },
            s.match
              ? l
                ? typeof l == "function"
                  ? l(s)
                  : l
                : p
                  ? L.default.createElement(p, s)
                  : f
                    ? f(s)
                    : null
              : typeof l == "function"
                ? l(s)
                : null,
          )
        );
      });
    }),
    t
  );
})(L.default.Component);
function xt(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Ko(e, t) {
  return e ? H({}, t, { pathname: xt(e) + t.pathname }) : t;
}
function zo(e, t) {
  if (!e) return t;
  var r = xt(e);
  return t.pathname.indexOf(r) !== 0
    ? t
    : H({}, t, { pathname: t.pathname.substr(r.length) });
}
function vn(e) {
  return typeof e == "string" ? e : k(e);
}
function Tt(e) {
  return function () {
    ce(!1);
  };
}
function yn() {}
var Xo = (function (e) {
    te(t, e);
    function t() {
      for (var o, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (o = e.call.apply(e, [this].concat(a)) || this),
        (o.handlePush = function (u) {
          return o.navigateTo(u, "PUSH");
        }),
        (o.handleReplace = function (u) {
          return o.navigateTo(u, "REPLACE");
        }),
        (o.handleListen = function () {
          return yn;
        }),
        (o.handleBlock = function () {
          return yn;
        }),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.navigateTo = function (n, a) {
        var i = this.props,
          u = i.basename,
          s = u === void 0 ? "" : u,
          c = i.context,
          l = c === void 0 ? {} : c;
        (l.action = a), (l.location = Ko(s, G(n))), (l.url = vn(l.location));
      }),
      (r.render = function () {
        var n = this.props,
          a = n.basename,
          i = a === void 0 ? "" : a,
          u = n.context,
          s = u === void 0 ? {} : u,
          c = n.location,
          l = c === void 0 ? "/" : c,
          p = Re(n, ["basename", "context", "location"]),
          f = {
            createHref: function (m) {
              return xt(i + vn(m));
            },
            action: "POP",
            location: zo(i, G(l)),
            push: this.handlePush,
            replace: this.handleReplace,
            go: Tt("go"),
            goBack: Tt("goBack"),
            goForward: Tt("goForward"),
            listen: this.handleListen,
            block: this.handleBlock,
          };
        return L.default.createElement(
          Ee,
          H({}, p, { history: f, staticContext: s }),
        );
      }),
      t
    );
  })(L.default.Component),
  Qo = (function (e) {
    te(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        var n = this;
        return L.default.createElement(de.Consumer, null, function (a) {
          a || ce(!1);
          var i = n.props.location || a.location,
            u,
            s;
          return (
            L.default.Children.forEach(n.props.children, function (c) {
              if (s == null && L.default.isValidElement(c)) {
                u = c;
                var l = c.props.path || c.props.from;
                s = l ? Se(i.pathname, H({}, c.props, { path: l })) : a.match;
              }
            }),
            s
              ? L.default.cloneElement(u, { location: i, computedMatch: s })
              : null
          );
        });
      }),
      t
    );
  })(L.default.Component);
var Rn = L.default.useContext;
function Nt() {
  return Rn(Pn);
}
function Ot() {
  return Rn(de).location;
}
var re = S(Z());
var Mi = (function (e) {
    te(t, e);
    function t() {
      for (var o, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (o = e.call.apply(e, [this].concat(a)) || this),
        (o.history = kr(o.props)),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return re.default.createElement(Ee, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(re.default.Component),
  Hi = (function (e) {
    te(t, e);
    function t() {
      for (var o, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (o = e.call.apply(e, [this].concat(a)) || this),
        (o.history = Gr(o.props)),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return re.default.createElement(Ee, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(re.default.Component),
  Ct = function (t, r) {
    return typeof t == "function" ? t(r) : t;
  },
  At = function (t, r) {
    return typeof t == "string" ? G(t, null, null, r) : t;
  },
  Dt = function (t) {
    return t;
  },
  _e = re.default.forwardRef;
typeof _e > "u" && (_e = Dt);
function Jo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Zo = _e(function (e, t) {
    var r = e.innerRef,
      o = e.navigate,
      n = e.onClick,
      a = Re(e, ["innerRef", "navigate", "onClick"]),
      i = a.target,
      u = H({}, a, {
        onClick: function (c) {
          try {
            n && n(c);
          } catch (l) {
            throw (c.preventDefault(), l);
          }
          !c.defaultPrevented &&
            c.button === 0 &&
            (!i || i === "_self") &&
            !Jo(c) &&
            (c.preventDefault(), o());
        },
      });
    return (
      Dt !== _e ? (u.ref = t || r) : (u.ref = r),
      re.default.createElement("a", u)
    );
  }),
  ea = _e(function (e, t) {
    var r = e.component,
      o = r === void 0 ? Zo : r,
      n = e.replace,
      a = e.to,
      i = e.innerRef,
      u = Re(e, ["component", "replace", "to", "innerRef"]);
    return re.default.createElement(de.Consumer, null, function (s) {
      s || ce(!1);
      var c = s.history,
        l = At(Ct(a, s.location), s.location),
        p = l ? c.createHref(l) : "",
        f = H({}, u, {
          href: p,
          navigate: function () {
            var m = Ct(a, s.location),
              v = k(s.location) === k(At(m)),
              y = n || v ? c.replace : c.push;
            y(m);
          },
        });
      return (
        Dt !== _e ? (f.ref = t || i) : (f.innerRef = i),
        re.default.createElement(o, f)
      );
    });
  });
var En = function (t) {
    return t;
  },
  at = re.default.forwardRef;
typeof at > "u" && (at = En);
function ta() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t
    .filter(function (o) {
      return o;
    })
    .join(" ");
}
var Ii = at(function (e, t) {
  var r = e["aria-current"],
    o = r === void 0 ? "page" : r,
    n = e.activeClassName,
    a = n === void 0 ? "active" : n,
    i = e.activeStyle,
    u = e.className,
    s = e.exact,
    c = e.isActive,
    l = e.location,
    p = e.sensitive,
    f = e.strict,
    d = e.style,
    m = e.to,
    v = e.innerRef,
    y = Re(e, [
      "aria-current",
      "activeClassName",
      "activeStyle",
      "className",
      "exact",
      "isActive",
      "location",
      "sensitive",
      "strict",
      "style",
      "to",
      "innerRef",
    ]);
  return re.default.createElement(de.Consumer, null, function (b) {
    b || ce(!1);
    var N = l || b.location,
      _ = At(Ct(m, N), N),
      F = _.pathname,
      A = F && F.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      O = A
        ? Se(N.pathname, { path: A, exact: s, sensitive: p, strict: f })
        : null,
      R = !!(c ? c(O, N) : O),
      P = typeof u == "function" ? u(R) : u,
      U = typeof d == "function" ? d(R) : d;
    R && ((P = ta(P, a)), (U = H({}, U, i)));
    var M = H(
      { "aria-current": (R && o) || null, className: P, style: U, to: _ },
      y,
    );
    return (
      En !== at ? (M.ref = t || v) : (M.innerRef = v),
      re.default.createElement(ea, M)
    );
  });
});
function Lt(e, t, r) {
  let o = `${e}_HistoryValue`,
    n = Nt(),
    a = Ot(),
    i = (a.state && a.state[o]) ?? r,
    u = pe.useRef(!1),
    s = pe.useRef(),
    c = pe.useRef(),
    l = pe.useCallback(
      (p) => {
        if (u.current && ((s.current = p), !c.current)) {
          let f = n.location.pathname;
          c.current = window.setTimeout(() => {
            n.location.pathname == f &&
              (!n.location.state || n.location.state[o] != s.current) &&
              n.replace(n.location.pathname, {
                ...(n.location.state || {}),
                [o]: s.current,
              }),
              (c.current = void 0);
          }, t);
        }
      },
      [n, o, t],
    );
  return (
    pe.useEffect(() => {
      u.current = !0;
    }, []),
    [i, l]
  );
}
var fe = S(Z(), 1);
var Ft = class {
  m_options;
  m_msStart;
  m_msEnd;
  m_bActive = !1;
  m_fnBoundAnimationFunc = void 0;
  m_window;
  constructor(t, r) {
    (this.m_window = t), (this.m_options = { timing: "sine", ...r });
  }
  Start() {
    (this.m_msStart = performance.now()),
      (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
    let t;
    switch (this.m_options.timing) {
      case "linear":
        t = function (r) {
          return r;
        };
        break;
      case "cubic-in-out":
        t = function (r) {
          return r < 0.5
            ? 4 * r * r * r
            : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1;
        };
        break;
      case "sine":
      default:
        t = function (r) {
          return 0.5 - Math.cos(r * Math.PI) / 2;
        };
        break;
    }
    (this.m_bActive = !0),
      (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, t)),
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
  }
  BIsActive() {
    return this.m_bActive;
  }
  End() {
    if (this.m_bActive) {
      try {
        this.Update(1);
      } catch {}
      this.ClearInterval(), this.FireOnComplete();
    }
  }
  FireOnComplete() {
    this.m_options.onComplete && this.m_options.onComplete();
  }
  Cancel() {
    this.m_bActive = !1;
  }
  OnInterval(t) {
    if (!this.m_bActive) return;
    let r = performance.now() - this.m_msStart,
      o = !1;
    if (r >= this.m_options.msDuration) {
      this.End();
      return;
    }
    let n = r / this.m_options.msDuration;
    try {
      this.Update(t(n));
    } catch {}
    this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
  }
  ClearInterval() {
    this.m_bActive = !1;
  }
};
var it = class extends Ft {
  m_object;
  m_propTargets;
  m_props = {};
  constructor(t, r, o) {
    super("ownerDocument" in t ? Wt(t) : t, o),
      (this.m_object = t),
      (this.m_propTargets = r);
  }
  Start() {
    this.m_props = {};
    for (let t in this.m_propTargets) {
      let r = parseFloat(this.m_object[t]) || 0,
        o = this.m_propTargets[t];
      r != o && (this.m_props[t] = { start: r, end: o });
    }
    super.Start();
  }
  Update(t) {
    for (let r in this.m_props) {
      let o = this.m_props[r],
        n = o.start + (o.end - o.start) * t;
      this.m_object[r] = n;
    }
  }
};
function ra(e, t) {
  let r = fe.default.useRef();
  return fe.default.useCallback(
    (o, n) => {
      let a = "sine";
      if ((r.current && (r.current.Cancel(), (a = "linear")), !e.current))
        return;
      o === void 0 && (o = e.current.scrollTop),
        n === void 0 && (n = e.current.scrollLeft);
      let i = Math.max(
        Math.abs(e.current.scrollTop - o),
        Math.abs(e.current.scrollLeft - n),
      );
      if (i > 0) {
        let u = Math.max(Math.min((i / 1e3) * 200, 500), 300);
        (r.current = new it(
          e.current,
          { scrollTop: o, scrollLeft: n },
          { msDuration: u, timing: a, onComplete: t },
        )),
          r.current.Start();
      } else t && t();
    },
    [e, t],
  );
}
function Sn(e, t = "smooth", r, o) {
  let n = (r ?? 30) / 100,
    a = fe.default.useRef(void 0),
    i = fe.default.useRef(void 0),
    u = fe.default.useCallback(() => {
      (a.current = void 0), (i.current = void 0);
    }, []),
    s = ra(e, u);
  return fe.default.useCallback(
    (l) => {
      if ((o && !o(l)) || l.defaultPrevented || !e.current) return !1;
      let {
          scrollTop: p,
          scrollHeight: f,
          clientHeight: d,
          scrollLeft: m,
          scrollWidth: v,
          clientWidth: y,
        } = e.current,
        b = a.current ?? p,
        N = i.current ?? m,
        _ = 2;
      switch (l.detail.button) {
        case 9:
          if (b <= _) return !1;
          a.current = Math.max(0, b - d * n);
          break;
        case 10:
          if (b >= f - d - _) return !1;
          a.current = Math.min(f - d, b + d * n);
          break;
        case 11:
          if (N <= _) return !1;
          i.current = Math.max(0, N - y * n);
          break;
        case 12:
          if (N >= v - y - _) return !1;
          i.current = Math.min(v - y, N + y * n);
          break;
        default:
          return !1;
      }
      return (
        !t || t == "smooth"
          ? s(a.current, i.current)
          : (e.current.scrollTo({
              top: a.current,
              left: i.current,
              behavior: "auto",
            }),
            u()),
        !0
      );
    },
    [o, e, t, n, s, u],
  );
}
function _n() {
  let e = fe.default.useRef(null),
    t = fe.default.useCallback(
      (o) => {
        window.requestAnimationFrame(() => {
          e.current?.BFocusWithin() &&
            e.current
              .Node()
              ?.GetLastFocusElement()
              ?.scrollIntoView({ behavior: "auto", block: "nearest" });
        });
      },
      [e],
    );
  return { ref: er(t), navRef: e };
}
var Ae = {
  ScrollPanel: "LOBCiSXGyJg-",
  ScrollY: "XnhvXyT1-F0-",
  ScrollX: "oHmIKsgLAUY-",
  ScrollBoth: "_4gs8FnVjoXA-",
};
var me = S(ee(), 1),
  wn = z.default.forwardRef(function (t, r) {
    let {
        scrollDirection: o,
        scrollPaddingTop: n,
        scrollPaddingRight: a,
        scrollPaddingBottom: i,
        scrollPaddingLeft: u,
        className: s,
        children: c,
        style: l,
        ...p
      } = t,
      f;
    switch (o) {
      case "x":
        f = Ae.ScrollX;
        break;
      case "both":
        f = Ae.ScrollBoth;
        break;
      case "y":
      default:
        f = Ae.ScrollY;
        break;
    }
    let d = { ...l };
    (n || n === 0) && (d.scrollPaddingTop = n),
      (a || a === 0) && (d.scrollPaddingRight = a),
      (i || i === 0) && (d.scrollPaddingBottom = i),
      (u || u === 0) && (d.scrollPaddingLeft = u);
    let { ref: m, navRef: v } = _n(),
      y = le(v, p.navRef),
      b = le(m, r);
    return (0, me.jsx)(Fe, {
      ...p,
      style: d,
      className: (0, Tn.default)(s, Ae.ScrollPanel, f),
      ref: b,
      navRef: y,
      children: (0, me.jsx)(nr, { children: c }),
    });
  }),
  Mt = z.default.forwardRef(function (t, r) {
    let { scrollStepPercent: o, scrollBehavior: n, ...a } = t,
      i = z.default.useRef(null),
      u = z.default.useCallback((l) => l.currentTarget != l.target, []),
      s = Sn(i, n, o, u),
      c = le(i, r);
    return (0, me.jsx)(wn, {
      ...a,
      onGamepadDirection: s,
      ref: c,
      scrollIntoViewType: 2,
    });
  }),
  ts = z.default.forwardRef(function (t, r) {
    let { name: o, msScrollRestoreDelay: n, onScroll: a, ...i } = t;
    return (0, me.jsx)(xn, {
      name: o,
      msScrollRestoreDelay: n,
      parentOnScroll: a,
      refDiv: r,
      children: (u, s) => (0, me.jsx)(wn, { ...i, onScroll: u, ref: s }),
    });
  }),
  rs = z.default.forwardRef(function (t, r) {
    let { name: o, msScrollRestoreDelay: n, onScroll: a, ...i } = t;
    return (0, me.jsx)(xn, {
      name: o,
      msScrollRestoreDelay: n,
      parentOnScroll: a,
      refDiv: r,
      children: (u, s) => (0, me.jsx)(Mt, { ...i, onScroll: u, ref: s }),
    });
  });
function xn(e) {
  let {
      name: t,
      msScrollRestoreDelay: r,
      parentOnScroll: o,
      refDiv: n,
      children: a,
    } = e,
    [i, u] = Lt(`${t}ScrollTop`, 250, 0),
    [s, c] = Lt(`${t}ScrollLeft`, 250, 0),
    l = z.default.useRef(0),
    p = z.default.useRef(0),
    f = z.default.useRef(),
    d = z.default.useCallback(
      (v) => {
        let { scrollTop: y, scrollLeft: b } = v.currentTarget;
        u(y), (l.current = y), c(b), (p.current = b), o && o(v);
      },
      [u, c, o],
    );
  z.default.useEffect(() => {
    let v = function () {
      f.current &&
        (Ut(
          f.current.scrollHeight >= i,
          `Element is ${f.current.scrollHeight} high but trying to restore scrollTop of ${i}, element may need more time to lay out.`,
          f.current,
        ),
        (l.current = i),
        (p.current = s),
        f.current.scrollTo({ top: i, left: s, behavior: "auto" }),
        f.current.dispatchEvent(new UIEvent("scroll")));
    };
    (i != l.current || s != p.current) && (r ? window.setTimeout(v, r) : v());
  }, [i, s, r]);
  let m = le(f, n);
  return z.default.useMemo(() => a(d, m), [d, m, a]);
}
var Ht = S(ee()),
  ss = ue.default.forwardRef(function (t, r) {
    let {
        onExplicitFocusLevelChanged: o,
        onOKButton: n,
        onCancelButton: a,
        navRef: i,
        focusable: u,
        ...s
      } = t,
      c = ue.default.useRef(null),
      { fnOnOKButton: l, fnOnCancelButton: p } = Nn({
        navRefPanel: c,
        onOKButton: n,
        onCancelButton: a,
        onExplicitFocusLevelChanged: o,
      }),
      f = le(i, c);
    return (0, Ht.jsx)(Fe, {
      ...s,
      onOKButton: l,
      onCancelButton: p,
      navRef: f,
      ref: r,
      focusable: u !== !1,
    });
  });
var cs = ue.default.forwardRef(function (t, r) {
  let { onOKButton: o, onCancelButton: n, navRef: a, focusable: i, ...u } = t,
    s = ue.default.useRef(null),
    c = ue.default.useRef(null),
    l = ue.default.useCallback((v, y) => v.FocusVisibleChild(), []),
    { fnOnOKButton: p, fnOnCancelButton: f } = Nn({
      navRefPanel: s,
      onOKButton: o,
      onCancelButton: n,
      fnFocusChildren: l,
    }),
    d = le(c, r),
    m = le(a, s);
  return (0, Ht.jsx)(Mt, {
    ...u,
    onOKButton: (v) => p?.(v),
    onCancelButton: f,
    navRef: m,
    ref: d,
    focusable: i !== !1,
  });
});
function Nn(e) {
  let {
    navRefPanel: t,
    onOKButton: r,
    onCancelButton: o,
    onExplicitFocusLevelChanged: n,
    fnFocusChildren: a,
  } = e;
  a = a ?? na;
  let i = ue.default.useCallback(
      (s) => {
        let c = t.current;
        return c?.BHasFocus() && a(c, s.detail.button)
          ? (n && n(!0), !0)
          : r
            ? r(s)
            : !1;
      },
      [t, r, n, a],
    ),
    u = ue.default.useCallback(
      (s) => {
        let c = t.current;
        return c?.BFocusWithin() &&
          !c.BHasFocus() &&
          c.TakeFocus(s.detail.button)
          ? (n && n(!1), !0)
          : o
            ? o(s)
            : !1;
      },
      [t, o, n],
    );
  return { fnOnOKButton: i, fnOnCancelButton: u };
}
function na(e, t) {
  return e.ChildTakeFocus(t);
}
export {
  tr as a,
  la as b,
  nr as c,
  Kn as d,
  Ua as e,
  fn as f,
  Ft as g,
  H as h,
  Re as i,
  te as j,
  ce as k,
  _n as l,
  wn as m,
  ss as n,
};
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

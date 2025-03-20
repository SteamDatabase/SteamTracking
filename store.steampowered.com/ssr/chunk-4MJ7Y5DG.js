const CLSTAMP = 9621725;

import {
  H as Mt,
  b as Ct,
  m as At,
  q as Lt,
  t as Nt,
  u as Vt,
} from "./chunk-J4WWSJ5J.js";
import { a as Dt } from "./chunk-VT5P5CPI.js";
import { a as It } from "./chunk-EMD4TCMF.js";
import { b as be, f as Rt, v as xt } from "./chunk-7CZT6RLZ.js";
import { c as Ot } from "./chunk-D3P3S5VH.js";
import { c as Et } from "./chunk-MBG223ZF.js";
import { g as Tt } from "./chunk-V6NE4MIP.js";
import { o as Ee } from "./chunk-K34HL7TB.js";
import { a as le } from "./chunk-LTXTEHOA.js";
import { b as se, d as N } from "./chunk-GT4J6GNR.js";
var Bt = se((Sa, Ut) => {
  "use strict";
  var Es = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  Ut.exports = Es;
});
var Wt = se((Pa, Gt) => {
  "use strict";
  var Ts = Bt();
  function Kt() {}
  function qt() {}
  qt.resetWarningCache = Kt;
  Gt.exports = function () {
    function e(s, o, a, n, l, r) {
      if (r !== Ts) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((_.name = "Invariant Violation"), _);
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var i = {
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
      checkPropTypes: qt,
      resetWarningCache: Kt,
    };
    return (i.PropTypes = i), i;
  };
});
var Jt = se((ja, Yt) => {
  "use strict";
  Yt.exports = Wt()();
  var $a, za;
});
var pi = se((Oa, ui) => {
  "use strict";
  ui.exports =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    };
});
var yi = se((Ma, ve) => {
  "use strict";
  var De = pi();
  ve.exports = vi;
  ve.exports.parse = ot;
  ve.exports.compile = Hs;
  ve.exports.tokensToFunction = mi;
  ve.exports.tokensToRegExp = hi;
  var Is = new RegExp(
    [
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    ].join("|"),
    "g",
  );
  function ot(e, t) {
    for (
      var i = [], s = 0, o = 0, a = "", n = (t && t.delimiter) || "/", l;
      (l = Is.exec(e)) != null;
    ) {
      var r = l[0],
        _ = l[1],
        c = l.index;
      if (((a += e.slice(o, c)), (o = c + r.length), _)) {
        a += _[1];
        continue;
      }
      var d = e[o],
        u = l[2],
        p = l[3],
        h = l[4],
        y = l[5],
        g = l[6],
        w = l[7];
      a && (i.push(a), (a = ""));
      var E = u != null && d != null && d !== u,
        P = g === "+" || g === "*",
        A = g === "?" || g === "*",
        D = u || n,
        T = h || y,
        b = u || (typeof i[i.length - 1] == "string" ? i[i.length - 1] : "");
      i.push({
        name: p || s++,
        prefix: u || "",
        delimiter: D,
        optional: A,
        repeat: P,
        partial: E,
        asterisk: !!w,
        pattern: T ? Ks(T) : w ? ".*" : Fs(D, b),
      });
    }
    return o < e.length && (a += e.substr(o)), a && i.push(a), i;
  }
  function Fs(e, t) {
    return !t || t.indexOf(e) > -1
      ? "[^" + ue(e) + "]+?"
      : ue(t) + "|(?:(?!" + ue(t) + ")[^" + ue(e) + "])+?";
  }
  function Hs(e, t) {
    return mi(ot(e, t), t);
  }
  function Us(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function Bs(e) {
    return encodeURI(e).replace(/[?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function mi(e, t) {
    for (var i = new Array(e.length), s = 0; s < e.length; s++)
      typeof e[s] == "object" &&
        (i[s] = new RegExp("^(?:" + e[s].pattern + ")$", nt(t)));
    return function (o, a) {
      for (
        var n = "",
          l = o || {},
          r = a || {},
          _ = r.pretty ? Us : encodeURIComponent,
          c = 0;
        c < e.length;
        c++
      ) {
        var d = e[c];
        if (typeof d == "string") {
          n += d;
          continue;
        }
        var u = l[d.name],
          p;
        if (u == null)
          if (d.optional) {
            d.partial && (n += d.prefix);
            continue;
          } else throw new TypeError('Expected "' + d.name + '" to be defined');
        if (De(u)) {
          if (!d.repeat)
            throw new TypeError(
              'Expected "' +
                d.name +
                '" to not repeat, but received `' +
                JSON.stringify(u) +
                "`",
            );
          if (u.length === 0) {
            if (d.optional) continue;
            throw new TypeError('Expected "' + d.name + '" to not be empty');
          }
          for (var h = 0; h < u.length; h++) {
            if (((p = _(u[h])), !i[c].test(p)))
              throw new TypeError(
                'Expected all "' +
                  d.name +
                  '" to match "' +
                  d.pattern +
                  '", but received `' +
                  JSON.stringify(p) +
                  "`",
              );
            n += (h === 0 ? d.prefix : d.delimiter) + p;
          }
          continue;
        }
        if (((p = d.asterisk ? Bs(u) : _(u)), !i[c].test(p)))
          throw new TypeError(
            'Expected "' +
              d.name +
              '" to match "' +
              d.pattern +
              '", but received "' +
              p +
              '"',
          );
        n += d.prefix + p;
      }
      return n;
    };
  }
  function ue(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  function Ks(e) {
    return e.replace(/([=!:$\/()])/g, "\\$1");
  }
  function at(e, t) {
    return (e.keys = t), e;
  }
  function nt(e) {
    return e && e.sensitive ? "" : "i";
  }
  function qs(e, t) {
    var i = e.source.match(/\((?!\?)/g);
    if (i)
      for (var s = 0; s < i.length; s++)
        t.push({
          name: s,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          partial: !1,
          asterisk: !1,
          pattern: null,
        });
    return at(e, t);
  }
  function Gs(e, t, i) {
    for (var s = [], o = 0; o < e.length; o++) s.push(vi(e[o], t, i).source);
    var a = new RegExp("(?:" + s.join("|") + ")", nt(i));
    return at(a, t);
  }
  function Ws(e, t, i) {
    return hi(ot(e, i), t, i);
  }
  function hi(e, t, i) {
    De(t) || ((i = t || i), (t = [])), (i = i || {});
    for (var s = i.strict, o = i.end !== !1, a = "", n = 0; n < e.length; n++) {
      var l = e[n];
      if (typeof l == "string") a += ue(l);
      else {
        var r = ue(l.prefix),
          _ = "(?:" + l.pattern + ")";
        t.push(l),
          l.repeat && (_ += "(?:" + r + _ + ")*"),
          l.optional
            ? l.partial
              ? (_ = r + "(" + _ + ")?")
              : (_ = "(?:" + r + "(" + _ + "))?")
            : (_ = r + "(" + _ + ")"),
          (a += _);
      }
    }
    var c = ue(i.delimiter || "/"),
      d = a.slice(-c.length) === c;
    return (
      s || (a = (d ? a.slice(0, -c.length) : a) + "(?:" + c + "(?=$))?"),
      o ? (a += "$") : (a += s && d ? "" : "(?=" + c + "|$)"),
      at(new RegExp("^" + a, nt(i)), t)
    );
  }
  function vi(e, t, i) {
    return (
      De(t) || ((i = t || i), (t = [])),
      (i = i || {}),
      e instanceof RegExp ? qs(e, t) : De(e) ? Gs(e, t, i) : Ws(e, t, i)
    );
  }
});
var fi = se((z) => {
  "use strict";
  var O = typeof Symbol == "function" && Symbol.for,
    rt = O ? Symbol.for("react.element") : 60103,
    lt = O ? Symbol.for("react.portal") : 60106,
    xe = O ? Symbol.for("react.fragment") : 60107,
    Ce = O ? Symbol.for("react.strict_mode") : 60108,
    Ae = O ? Symbol.for("react.profiler") : 60114,
    Le = O ? Symbol.for("react.provider") : 60109,
    Ne = O ? Symbol.for("react.context") : 60110,
    _t = O ? Symbol.for("react.async_mode") : 60111,
    Ve = O ? Symbol.for("react.concurrent_mode") : 60111,
    Oe = O ? Symbol.for("react.forward_ref") : 60112,
    Me = O ? Symbol.for("react.suspense") : 60113,
    Ys = O ? Symbol.for("react.suspense_list") : 60120,
    Ie = O ? Symbol.for("react.memo") : 60115,
    Fe = O ? Symbol.for("react.lazy") : 60116,
    Js = O ? Symbol.for("react.block") : 60121,
    Zs = O ? Symbol.for("react.fundamental") : 60117,
    Xs = O ? Symbol.for("react.responder") : 60118,
    Qs = O ? Symbol.for("react.scope") : 60119;
  function W(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case rt:
          switch (((e = e.type), e)) {
            case _t:
            case Ve:
            case xe:
            case Ae:
            case Ce:
            case Me:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ne:
                case Oe:
                case Fe:
                case Ie:
                case Le:
                  return e;
                default:
                  return t;
              }
          }
        case lt:
          return t;
      }
    }
  }
  function gi(e) {
    return W(e) === Ve;
  }
  z.AsyncMode = _t;
  z.ConcurrentMode = Ve;
  z.ContextConsumer = Ne;
  z.ContextProvider = Le;
  z.Element = rt;
  z.ForwardRef = Oe;
  z.Fragment = xe;
  z.Lazy = Fe;
  z.Memo = Ie;
  z.Portal = lt;
  z.Profiler = Ae;
  z.StrictMode = Ce;
  z.Suspense = Me;
  z.isAsyncMode = function (e) {
    return gi(e) || W(e) === _t;
  };
  z.isConcurrentMode = gi;
  z.isContextConsumer = function (e) {
    return W(e) === Ne;
  };
  z.isContextProvider = function (e) {
    return W(e) === Le;
  };
  z.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === rt;
  };
  z.isForwardRef = function (e) {
    return W(e) === Oe;
  };
  z.isFragment = function (e) {
    return W(e) === xe;
  };
  z.isLazy = function (e) {
    return W(e) === Fe;
  };
  z.isMemo = function (e) {
    return W(e) === Ie;
  };
  z.isPortal = function (e) {
    return W(e) === lt;
  };
  z.isProfiler = function (e) {
    return W(e) === Ae;
  };
  z.isStrictMode = function (e) {
    return W(e) === Ce;
  };
  z.isSuspense = function (e) {
    return W(e) === Me;
  };
  z.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === xe ||
      e === Ve ||
      e === Ae ||
      e === Ce ||
      e === Me ||
      e === Ys ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Fe ||
          e.$$typeof === Ie ||
          e.$$typeof === Le ||
          e.$$typeof === Ne ||
          e.$$typeof === Oe ||
          e.$$typeof === Zs ||
          e.$$typeof === Xs ||
          e.$$typeof === Qs ||
          e.$$typeof === Js))
    );
  };
  z.typeOf = W;
});
var bi = se((Fa, wi) => {
  "use strict";
  wi.exports = fi();
});
var Si = se((j) => {
  "use strict";
  var M = typeof Symbol == "function" && Symbol.for,
    ct = M ? Symbol.for("react.element") : 60103,
    dt = M ? Symbol.for("react.portal") : 60106,
    He = M ? Symbol.for("react.fragment") : 60107,
    Ue = M ? Symbol.for("react.strict_mode") : 60108,
    Be = M ? Symbol.for("react.profiler") : 60114,
    Ke = M ? Symbol.for("react.provider") : 60109,
    qe = M ? Symbol.for("react.context") : 60110,
    ut = M ? Symbol.for("react.async_mode") : 60111,
    Ge = M ? Symbol.for("react.concurrent_mode") : 60111,
    We = M ? Symbol.for("react.forward_ref") : 60112,
    Ye = M ? Symbol.for("react.suspense") : 60113,
    eo = M ? Symbol.for("react.suspense_list") : 60120,
    Je = M ? Symbol.for("react.memo") : 60115,
    Ze = M ? Symbol.for("react.lazy") : 60116,
    to = M ? Symbol.for("react.block") : 60121,
    io = M ? Symbol.for("react.fundamental") : 60117,
    so = M ? Symbol.for("react.responder") : 60118,
    oo = M ? Symbol.for("react.scope") : 60119;
  function Y(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ct:
          switch (((e = e.type), e)) {
            case ut:
            case Ge:
            case He:
            case Be:
            case Ue:
            case Ye:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case qe:
                case We:
                case Ze:
                case Je:
                case Ke:
                  return e;
                default:
                  return t;
              }
          }
        case dt:
          return t;
      }
    }
  }
  function ki(e) {
    return Y(e) === Ge;
  }
  j.AsyncMode = ut;
  j.ConcurrentMode = Ge;
  j.ContextConsumer = qe;
  j.ContextProvider = Ke;
  j.Element = ct;
  j.ForwardRef = We;
  j.Fragment = He;
  j.Lazy = Ze;
  j.Memo = Je;
  j.Portal = dt;
  j.Profiler = Be;
  j.StrictMode = Ue;
  j.Suspense = Ye;
  j.isAsyncMode = function (e) {
    return ki(e) || Y(e) === ut;
  };
  j.isConcurrentMode = ki;
  j.isContextConsumer = function (e) {
    return Y(e) === qe;
  };
  j.isContextProvider = function (e) {
    return Y(e) === Ke;
  };
  j.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === ct;
  };
  j.isForwardRef = function (e) {
    return Y(e) === We;
  };
  j.isFragment = function (e) {
    return Y(e) === He;
  };
  j.isLazy = function (e) {
    return Y(e) === Ze;
  };
  j.isMemo = function (e) {
    return Y(e) === Je;
  };
  j.isPortal = function (e) {
    return Y(e) === dt;
  };
  j.isProfiler = function (e) {
    return Y(e) === Be;
  };
  j.isStrictMode = function (e) {
    return Y(e) === Ue;
  };
  j.isSuspense = function (e) {
    return Y(e) === Ye;
  };
  j.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === He ||
      e === Ge ||
      e === Be ||
      e === Ue ||
      e === Ye ||
      e === eo ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Ze ||
          e.$$typeof === Je ||
          e.$$typeof === Ke ||
          e.$$typeof === qe ||
          e.$$typeof === We ||
          e.$$typeof === io ||
          e.$$typeof === so ||
          e.$$typeof === oo ||
          e.$$typeof === to))
    );
  };
  j.typeOf = Y;
});
var $i = se((Ba, Pi) => {
  "use strict";
  Pi.exports = Si();
});
var xi = se((Ka, Di) => {
  "use strict";
  var pt = $i(),
    ao = {
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
    no = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    ro = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    Ti = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    mt = {};
  mt[pt.ForwardRef] = ro;
  mt[pt.Memo] = Ti;
  function zi(e) {
    return pt.isMemo(e) ? Ti : mt[e.$$typeof] || ao;
  }
  var lo = Object.defineProperty,
    _o = Object.getOwnPropertyNames,
    ji = Object.getOwnPropertySymbols,
    co = Object.getOwnPropertyDescriptor,
    uo = Object.getPrototypeOf,
    Ei = Object.prototype;
  function Ri(e, t, i) {
    if (typeof t != "string") {
      if (Ei) {
        var s = uo(t);
        s && s !== Ei && Ri(e, s, i);
      }
      var o = _o(t);
      ji && (o = o.concat(ji(t)));
      for (var a = zi(e), n = zi(t), l = 0; l < o.length; ++l) {
        var r = o[l];
        if (!no[r] && !(i && i[r]) && !(n && n[r]) && !(a && a[r])) {
          var _ = co(t, r);
          try {
            lo(e, r, _);
          } catch {}
        }
      }
    }
    return e;
  }
  Di.exports = Ri;
});
var F = N(le()),
  Se = N(Dt());
var ke = {
  FocusRingRoot: "zMwifnPqWAI-",
  FocusRing: "G7jPexLcZ14-",
  flash: "FLDEa7rRhyY-",
  growOutline: "nWDadfKww6s-",
  fadeOutline: "N5-VUB--qfQ-",
  blinker: "ppcisOXf8KU-",
  DebugFocusRing: "wakyoxMBdvA-",
  FocusRingOnHiddenItem: "Ubvx1pqfMh8-",
};
var oe = N(Ee()),
  Ht = N(le()),
  Ss = new Ct("FocusNavigation").Debug;
function Ft(e) {
  let { children: t, ...i } = e,
    [s, o] = F.default.useState({
      bFocusWithin: !1,
      navTarget: null,
      prevTarget: null,
    }),
    a = F.default.useRef(null),
    n = F.default.useMemo(
      () => ({
        OnBlur: (l, r, _) => {
          o({ bFocusWithin: !1, navTarget: null, prevTarget: null });
        },
        OnFocus: (l, r, _) => {
          o({ bFocusWithin: !0, navTarget: r, prevTarget: null });
        },
        OnFocusChange: (l, r, _) => {
          o({ bFocusWithin: !0, navTarget: _, prevTarget: r });
        },
        OnForceMeasureFocusRing: () => {
          a.current?.MeasureElementAndUpdate();
        },
      }),
      [o],
    );
  return (0, oe.jsxs)(oe.Fragment, {
    children: [
      (0, oe.jsx)(Ps, { ...i, ...s, refMeasure: a }),
      (0, oe.jsx)(Vt.Provider, { value: n, children: t }),
    ],
  });
}
function Ps(e) {
  let {
      rootClassName: t,
      className: i,
      bFocusWithin: s,
      navTarget: o,
      refMeasure: a,
    } = e,
    [n, l] = F.default.useState(null),
    r = At(),
    _ = Ot(),
    c = Lt(!1);
  return !_ && !c
    ? null
    : (0, oe.jsx)("div", {
        className: (0, Se.default)(ke.FocusRingRoot, t),
        ref: l,
        children: (0, oe.jsx)($s, {
          refMeasure: a,
          className: (0, Se.default)(i, r && ke.DebugFocusRing),
          bFocusWithin: s && (c || r),
          navTarget: o,
          elContainer: n,
          bDebug: r,
        }),
      });
}
function $s(e) {
  let {
      className: t,
      bFocusWithin: i,
      navTarget: s,
      elContainer: o,
      bDebug: a,
      refMeasure: n,
    } = e,
    [l, r] = F.default.useState(null),
    [_, c] = F.default.useReducer((P) => P + 1, 0),
    [d, u] = F.default.useReducer((P) => P + 1, 0);
  Rt(
    n,
    F.default.useMemo(() => ({ MeasureElementAndUpdate: u }), []),
  );
  let { bActiveTree: p, bDisableFocusClasses: h } = Nt(),
    y = p && !h,
    g = js(a, s),
    w = F.default.useCallback(() => {
      if (!s || !s.BWantsFocusRing() || !o || !y) {
        r(null);
        return;
      }
      let P = s.GetBoundingRect(),
        A = o.getBoundingClientRect(),
        D = {
          left: P.x - A.x,
          top: P.y - A.y,
          height: P.height,
          width: P.width,
        };
      r((T) =>
        !T ||
        D.left != T.left ||
        D.top != T.top ||
        D.height != T.height ||
        D.width != T.width
          ? D
          : T,
      );
    }, [s, o, y]);
  F.default.useLayoutEffect(() => w(), [w]),
    F.default.useLayoutEffect(() => {
      c();
    }, [s]);
  let E = i;
  return (
    s && o && (s.BWantsFocusRing() || (E = !1)),
    F.default.useEffect(() => {
      if (!E) return;
      let P = performance.now(),
        A,
        D = () => {
          w(), performance.now() - P <= 500 && (A = requestAnimationFrame(D));
        };
      return D(), () => cancelAnimationFrame(A);
    }, [E, w, l, d]),
    !E || !l
      ? null
      : (0, Ht.createElement)(zs, {
          ...l,
          key: _,
          className: (0, Se.default)(t, g && ke.FocusRingOnHiddenItem),
          target: s,
        })
  );
}
function zs(e) {
  let { className: t, left: i, top: s, height: o, width: a, target: n } = e,
    l = 0,
    r = {
      left: (i ?? 0) - l + "px",
      top: (s ?? 0) - l + "px",
      height: o + "px",
      width: a + "px",
    };
  return (0, oe.jsx)("div", {
    className: (0, Se.default)(ke.FocusRing, t),
    style: r,
  });
}
function js(e, t) {
  let [i, s] = F.default.useState(!1);
  return (
    (0, F.useEffect)(() => {
      if (e && t) {
        let o = t.GetBoundingRect(),
          a = t.Element,
          n = a.ownerDocument.defaultView,
          l = (_) =>
            n.getComputedStyle(_).display == "none" ||
            (o?.width == 0 && o.height == 0 && o.x == 0 && o.y == 0);
        for (; l(a) && a?.parentElement; )
          (a = a.parentElement), (o = a.getBoundingClientRect());
        let r = t.Element != a;
        s(
          (_) => (
            r &&
              r != _ &&
              Ss(
                "Focused on hidden item: ",
                t.Element,
                ". Closest visible ancestor: ",
                a,
              ),
            r
          ),
        );
      }
    }, [e, t]),
    i
  );
}
var Ki = N(Dt()),
  J = N(le());
var ne = N(le());
function Te(e, t) {
  return (
    (Te = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, s) {
          return (i.__proto__ = s), i;
        }),
    Te(e, t)
  );
}
function ee(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Te(e, t);
}
var C = N(le()),
  yt = N(Jt());
function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i) ({}).hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
    V.apply(null, arguments)
  );
}
function Re(e) {
  return e.charAt(0) === "/";
}
function et(e, t) {
  for (var i = t, s = i + 1, o = e.length; s < o; i += 1, s += 1) e[i] = e[s];
  e.pop();
}
function Rs(e, t) {
  t === void 0 && (t = "");
  var i = (e && e.split("/")) || [],
    s = (t && t.split("/")) || [],
    o = e && Re(e),
    a = t && Re(t),
    n = o || a;
  if (
    (e && Re(e) ? (s = i) : i.length && (s.pop(), (s = s.concat(i))), !s.length)
  )
    return "/";
  var l;
  if (s.length) {
    var r = s[s.length - 1];
    l = r === "." || r === ".." || r === "";
  } else l = !1;
  for (var _ = 0, c = s.length; c >= 0; c--) {
    var d = s[c];
    d === "." ? et(s, c) : d === ".." ? (et(s, c), _++) : _ && (et(s, c), _--);
  }
  if (!n) for (; _--; _) s.unshift("..");
  n && s[0] !== "" && (!s[0] || !Re(s[0])) && s.unshift("");
  var u = s.join("/");
  return l && u.substr(-1) !== "/" && (u += "/"), u;
}
var Zt = Rs;
var Ds = !0,
  tt = "Invariant failed";
function ae(e, t) {
  if (!e) {
    if (Ds) throw new Error(tt);
    var i = typeof t == "function" ? t() : t,
      s = i ? "".concat(tt, ": ").concat(i) : tt;
    throw new Error(s);
  }
}
function $e(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Xt(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function xs(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function oi(e, t) {
  return xs(e, t) ? e.substr(t.length) : e;
}
function ai(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function Cs(e) {
  var t = e || "/",
    i = "",
    s = "",
    o = t.indexOf("#");
  o !== -1 && ((s = t.substr(o)), (t = t.substr(0, o)));
  var a = t.indexOf("?");
  return (
    a !== -1 && ((i = t.substr(a)), (t = t.substr(0, a))),
    { pathname: t, search: i === "?" ? "" : i, hash: s === "#" ? "" : s }
  );
}
function H(e) {
  var t = e.pathname,
    i = e.search,
    s = e.hash,
    o = t || "/";
  return (
    i && i !== "?" && (o += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (o += s.charAt(0) === "#" ? s : "#" + s),
    o
  );
}
function B(e, t, i, s) {
  var o;
  typeof e == "string"
    ? ((o = Cs(e)), (o.state = t))
    : ((o = V({}, e)),
      o.pathname === void 0 && (o.pathname = ""),
      o.search
        ? o.search.charAt(0) !== "?" && (o.search = "?" + o.search)
        : (o.search = ""),
      o.hash
        ? o.hash.charAt(0) !== "#" && (o.hash = "#" + o.hash)
        : (o.hash = ""),
      t !== void 0 && o.state === void 0 && (o.state = t));
  try {
    o.pathname = decodeURI(o.pathname);
  } catch (a) {
    throw a instanceof URIError
      ? new URIError(
          'Pathname "' +
            o.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.',
        )
      : a;
  }
  return (
    i && (o.key = i),
    s
      ? o.pathname
        ? o.pathname.charAt(0) !== "/" &&
          (o.pathname = Zt(o.pathname, s.pathname))
        : (o.pathname = s.pathname)
      : o.pathname || (o.pathname = "/"),
    o
  );
}
function st() {
  var e = null;
  function t(n) {
    return (
      (e = n),
      function () {
        e === n && (e = null);
      }
    );
  }
  function i(n, l, r, _) {
    if (e != null) {
      var c = typeof e == "function" ? e(n, l) : e;
      typeof c == "string"
        ? typeof r == "function"
          ? r(c, _)
          : _(!0)
        : _(c !== !1);
    } else _(!0);
  }
  var s = [];
  function o(n) {
    var l = !0;
    function r() {
      l && n.apply(void 0, arguments);
    }
    return (
      s.push(r),
      function () {
        (l = !1),
          (s = s.filter(function (_) {
            return _ !== r;
          }));
      }
    );
  }
  function a() {
    for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++)
      l[r] = arguments[r];
    s.forEach(function (_) {
      return _.apply(void 0, l);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: i,
    appendListener: o,
    notifyListeners: a,
  };
}
var ni = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function ri(e, t) {
  t(window.confirm(e));
}
function As() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function Ls() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function Ns() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function Vs(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Qt = "popstate",
  ei = "hashchange";
function ti() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function li(e) {
  e === void 0 && (e = {}), ni || ae(!1);
  var t = window.history,
    i = As(),
    s = !Ls(),
    o = e,
    a = o.forceRefresh,
    n = a === void 0 ? !1 : a,
    l = o.getUserConfirmation,
    r = l === void 0 ? ri : l,
    _ = o.keyLength,
    c = _ === void 0 ? 6 : _,
    d = e.basename ? ai($e(e.basename)) : "";
  function u(k) {
    var R = k || {},
      m = R.key,
      v = R.state,
      $ = window.location,
      x = $.pathname,
      Q = $.search,
      G = $.hash,
      q = x + Q + G;
    return d && (q = oi(q, d)), B(q, v, m);
  }
  function p() {
    return Math.random().toString(36).substr(2, c);
  }
  var h = st();
  function y(k) {
    V(X, k), (X.length = t.length), h.notifyListeners(X.location, X.action);
  }
  function g(k) {
    Vs(k) || P(u(k.state));
  }
  function w() {
    P(u(ti()));
  }
  var E = !1;
  function P(k) {
    if (E) (E = !1), y();
    else {
      var R = "POP";
      h.confirmTransitionTo(k, R, r, function (m) {
        m ? y({ action: R, location: k }) : A(k);
      });
    }
  }
  function A(k) {
    var R = X.location,
      m = T.indexOf(R.key);
    m === -1 && (m = 0);
    var v = T.indexOf(k.key);
    v === -1 && (v = 0);
    var $ = m - v;
    $ && ((E = !0), L($));
  }
  var D = u(ti()),
    T = [D.key];
  function b(k) {
    return d + H(k);
  }
  function f(k, R) {
    var m = "PUSH",
      v = B(k, R, p(), X.location);
    h.confirmTransitionTo(v, m, r, function ($) {
      if ($) {
        var x = b(v),
          Q = v.key,
          G = v.state;
        if (i)
          if ((t.pushState({ key: Q, state: G }, null, x), n))
            window.location.href = x;
          else {
            var q = T.indexOf(X.location.key),
              he = T.slice(0, q + 1);
            he.push(v.key), (T = he), y({ action: m, location: v });
          }
        else window.location.href = x;
      }
    });
  }
  function I(k, R) {
    var m = "REPLACE",
      v = B(k, R, p(), X.location);
    h.confirmTransitionTo(v, m, r, function ($) {
      if ($) {
        var x = b(v),
          Q = v.key,
          G = v.state;
        if (i)
          if ((t.replaceState({ key: Q, state: G }, null, x), n))
            window.location.replace(x);
          else {
            var q = T.indexOf(X.location.key);
            q !== -1 && (T[q] = v.key), y({ action: m, location: v });
          }
        else window.location.replace(x);
      }
    });
  }
  function L(k) {
    t.go(k);
  }
  function U() {
    L(-1);
  }
  function Z() {
    L(1);
  }
  var de = 0;
  function ie(k) {
    (de += k),
      de === 1 && k === 1
        ? (window.addEventListener(Qt, g), s && window.addEventListener(ei, w))
        : de === 0 &&
          (window.removeEventListener(Qt, g),
          s && window.removeEventListener(ei, w));
  }
  var K = !1;
  function pe(k) {
    k === void 0 && (k = !1);
    var R = h.setPrompt(k);
    return (
      K || (ie(1), (K = !0)),
      function () {
        return K && ((K = !1), ie(-1)), R();
      }
    );
  }
  function me(k) {
    var R = h.appendListener(k);
    return (
      ie(1),
      function () {
        ie(-1), R();
      }
    );
  }
  var X = {
    length: t.length,
    action: "POP",
    location: D,
    createHref: b,
    push: f,
    replace: I,
    go: L,
    goBack: U,
    goForward: Z,
    block: pe,
    listen: me,
  };
  return X;
}
var ii = "hashchange",
  Os = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Xt(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Xt, decodePath: $e },
    slash: { encodePath: $e, decodePath: $e },
  };
function _i(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function Pe() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function Ms(e) {
  window.location.hash = e;
}
function it(e) {
  window.location.replace(_i(window.location.href) + "#" + e);
}
function ci(e) {
  e === void 0 && (e = {}), ni || ae(!1);
  var t = window.history,
    i = Ns(),
    s = e,
    o = s.getUserConfirmation,
    a = o === void 0 ? ri : o,
    n = s.hashType,
    l = n === void 0 ? "slash" : n,
    r = e.basename ? ai($e(e.basename)) : "",
    _ = Os[l],
    c = _.encodePath,
    d = _.decodePath;
  function u() {
    var m = d(Pe());
    return r && (m = oi(m, r)), B(m);
  }
  var p = st();
  function h(m) {
    V(R, m), (R.length = t.length), p.notifyListeners(R.location, R.action);
  }
  var y = !1,
    g = null;
  function w(m, v) {
    return (
      m.pathname === v.pathname && m.search === v.search && m.hash === v.hash
    );
  }
  function E() {
    var m = Pe(),
      v = c(m);
    if (m !== v) it(v);
    else {
      var $ = u(),
        x = R.location;
      if ((!y && w(x, $)) || g === H($)) return;
      (g = null), P($);
    }
  }
  function P(m) {
    if (y) (y = !1), h();
    else {
      var v = "POP";
      p.confirmTransitionTo(m, v, a, function ($) {
        $ ? h({ action: v, location: m }) : A(m);
      });
    }
  }
  function A(m) {
    var v = R.location,
      $ = f.lastIndexOf(H(v));
    $ === -1 && ($ = 0);
    var x = f.lastIndexOf(H(m));
    x === -1 && (x = 0);
    var Q = $ - x;
    Q && ((y = !0), Z(Q));
  }
  var D = Pe(),
    T = c(D);
  D !== T && it(T);
  var b = u(),
    f = [H(b)];
  function I(m) {
    var v = document.querySelector("base"),
      $ = "";
    return (
      v && v.getAttribute("href") && ($ = _i(window.location.href)),
      $ + "#" + c(r + H(m))
    );
  }
  function L(m, v) {
    var $ = "PUSH",
      x = B(m, void 0, void 0, R.location);
    p.confirmTransitionTo(x, $, a, function (Q) {
      if (Q) {
        var G = H(x),
          q = c(r + G),
          he = Pe() !== q;
        if (he) {
          (g = G), Ms(q);
          var je = f.lastIndexOf(H(R.location)),
            jt = f.slice(0, je + 1);
          jt.push(G), (f = jt), h({ action: $, location: x });
        } else h();
      }
    });
  }
  function U(m, v) {
    var $ = "REPLACE",
      x = B(m, void 0, void 0, R.location);
    p.confirmTransitionTo(x, $, a, function (Q) {
      if (Q) {
        var G = H(x),
          q = c(r + G),
          he = Pe() !== q;
        he && ((g = G), it(q));
        var je = f.indexOf(H(R.location));
        je !== -1 && (f[je] = G), h({ action: $, location: x });
      }
    });
  }
  function Z(m) {
    t.go(m);
  }
  function de() {
    Z(-1);
  }
  function ie() {
    Z(1);
  }
  var K = 0;
  function pe(m) {
    (K += m),
      K === 1 && m === 1
        ? window.addEventListener(ii, E)
        : K === 0 && window.removeEventListener(ii, E);
  }
  var me = !1;
  function X(m) {
    m === void 0 && (m = !1);
    var v = p.setPrompt(m);
    return (
      me || (pe(1), (me = !0)),
      function () {
        return me && ((me = !1), pe(-1)), v();
      }
    );
  }
  function k(m) {
    var v = p.appendListener(m);
    return (
      pe(1),
      function () {
        pe(-1), v();
      }
    );
  }
  var R = {
    length: t.length,
    action: "POP",
    location: b,
    createHref: I,
    push: L,
    replace: U,
    go: Z,
    goBack: de,
    goForward: ie,
    block: X,
    listen: k,
  };
  return R;
}
function si(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
function di(e) {
  e === void 0 && (e = {});
  var t = e,
    i = t.getUserConfirmation,
    s = t.initialEntries,
    o = s === void 0 ? ["/"] : s,
    a = t.initialIndex,
    n = a === void 0 ? 0 : a,
    l = t.keyLength,
    r = l === void 0 ? 6 : l,
    _ = st();
  function c(f) {
    V(b, f),
      (b.length = b.entries.length),
      _.notifyListeners(b.location, b.action);
  }
  function d() {
    return Math.random().toString(36).substr(2, r);
  }
  var u = si(n, 0, o.length - 1),
    p = o.map(function (f) {
      return typeof f == "string"
        ? B(f, void 0, d())
        : B(f, void 0, f.key || d());
    }),
    h = H;
  function y(f, I) {
    var L = "PUSH",
      U = B(f, I, d(), b.location);
    _.confirmTransitionTo(U, L, i, function (Z) {
      if (Z) {
        var de = b.index,
          ie = de + 1,
          K = b.entries.slice(0);
        K.length > ie ? K.splice(ie, K.length - ie, U) : K.push(U),
          c({ action: L, location: U, index: ie, entries: K });
      }
    });
  }
  function g(f, I) {
    var L = "REPLACE",
      U = B(f, I, d(), b.location);
    _.confirmTransitionTo(U, L, i, function (Z) {
      Z && ((b.entries[b.index] = U), c({ action: L, location: U }));
    });
  }
  function w(f) {
    var I = si(b.index + f, 0, b.entries.length - 1),
      L = "POP",
      U = b.entries[I];
    _.confirmTransitionTo(U, L, i, function (Z) {
      Z ? c({ action: L, location: U, index: I }) : c();
    });
  }
  function E() {
    w(-1);
  }
  function P() {
    w(1);
  }
  function A(f) {
    var I = b.index + f;
    return I >= 0 && I < b.entries.length;
  }
  function D(f) {
    return f === void 0 && (f = !1), _.setPrompt(f);
  }
  function T(f) {
    return _.appendListener(f);
  }
  var b = {
    length: p.length,
    action: "POP",
    location: p[u],
    index: u,
    entries: p,
    createHref: h,
    push: y,
    replace: g,
    go: w,
    goBack: E,
    goForward: P,
    canGo: A,
    block: D,
    listen: T,
  };
  return b;
}
var Oi = N(yi()),
  Za = N(bi());
function ye(e, t) {
  if (e == null) return {};
  var i = {};
  for (var s in e)
    if ({}.hasOwnProperty.call(e, s)) {
      if (t.includes(s)) continue;
      i[s] = e[s];
    }
  return i;
}
var po = N(xi()),
  ht = 1073741823,
  Ci =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
function mo() {
  var e = "__global_unique_id__";
  return (Ci[e] = (Ci[e] || 0) + 1);
}
function ho(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vo(e) {
  var t = [];
  return {
    on: function (s) {
      t.push(s);
    },
    off: function (s) {
      t = t.filter(function (o) {
        return o !== s;
      });
    },
    get: function () {
      return e;
    },
    set: function (s, o) {
      (e = s),
        t.forEach(function (a) {
          return a(e, o);
        });
    },
  };
}
function yo(e) {
  return Array.isArray(e) ? e[0] : e;
}
function go(e, t) {
  var i,
    s,
    o = "__create-react-context-" + mo() + "__",
    a = (function (l) {
      ee(r, l);
      function r() {
        for (var c, d = arguments.length, u = new Array(d), p = 0; p < d; p++)
          u[p] = arguments[p];
        return (
          (c = l.call.apply(l, [this].concat(u)) || this),
          (c.emitter = vo(c.props.value)),
          c
        );
      }
      var _ = r.prototype;
      return (
        (_.getChildContext = function () {
          var d;
          return (d = {}), (d[o] = this.emitter), d;
        }),
        (_.componentWillReceiveProps = function (d) {
          if (this.props.value !== d.value) {
            var u = this.props.value,
              p = d.value,
              h;
            ho(u, p)
              ? (h = 0)
              : ((h = typeof t == "function" ? t(u, p) : ht),
                (h |= 0),
                h !== 0 && this.emitter.set(d.value, h));
          }
        }),
        (_.render = function () {
          return this.props.children;
        }),
        r
      );
    })(C.default.Component);
  a.childContextTypes = ((i = {}), (i[o] = yt.default.object.isRequired), i);
  var n = (function (l) {
    ee(r, l);
    function r() {
      for (var c, d = arguments.length, u = new Array(d), p = 0; p < d; p++)
        u[p] = arguments[p];
      return (
        (c = l.call.apply(l, [this].concat(u)) || this),
        (c.observedBits = void 0),
        (c.state = { value: c.getValue() }),
        (c.onUpdate = function (h, y) {
          var g = c.observedBits | 0;
          g & y && c.setState({ value: c.getValue() });
        }),
        c
      );
    }
    var _ = r.prototype;
    return (
      (_.componentWillReceiveProps = function (d) {
        var u = d.observedBits;
        this.observedBits = u ?? ht;
      }),
      (_.componentDidMount = function () {
        this.context[o] && this.context[o].on(this.onUpdate);
        var d = this.props.observedBits;
        this.observedBits = d ?? ht;
      }),
      (_.componentWillUnmount = function () {
        this.context[o] && this.context[o].off(this.onUpdate);
      }),
      (_.getValue = function () {
        return this.context[o] ? this.context[o].get() : e;
      }),
      (_.render = function () {
        return yo(this.props.children)(this.state.value);
      }),
      r
    );
  })(C.default.Component);
  return (
    (n.contextTypes = ((s = {}), (s[o] = yt.default.object), s)),
    { Provider: a, Consumer: n }
  );
}
var fo = C.default.createContext || go,
  Mi = function (t) {
    var i = fo();
    return (i.displayName = t), i;
  },
  Ii = Mi("Router-History"),
  _e = Mi("Router"),
  ge = (function (e) {
    ee(t, e),
      (t.computeRootMatch = function (o) {
        return { path: "/", url: "/", params: {}, isExact: o === "/" };
      });
    function t(s) {
      var o;
      return (
        (o = e.call(this, s) || this),
        (o.state = { location: s.history.location }),
        (o._isMounted = !1),
        (o._pendingLocation = null),
        s.staticContext ||
          (o.unlisten = s.history.listen(function (a) {
            o._pendingLocation = a;
          })),
        o
      );
    }
    var i = t.prototype;
    return (
      (i.componentDidMount = function () {
        var o = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (a) {
              o._isMounted && o.setState({ location: a });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (i.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (i.render = function () {
        return C.default.createElement(
          _e.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          C.default.createElement(Ii.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          }),
        );
      }),
      t
    );
  })(C.default.Component),
  wo = (function (e) {
    ee(t, e);
    function t() {
      for (var s, o = arguments.length, a = new Array(o), n = 0; n < o; n++)
        a[n] = arguments[n];
      return (
        (s = e.call.apply(e, [this].concat(a)) || this),
        (s.history = di(s.props)),
        s
      );
    }
    var i = t.prototype;
    return (
      (i.render = function () {
        return C.default.createElement(ge, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(C.default.Component),
  en = (function (e) {
    ee(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var i = t.prototype;
    return (
      (i.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (i.componentDidUpdate = function (o) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, o);
      }),
      (i.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (i.render = function () {
        return null;
      }),
      t
    );
  })(C.default.Component);
var Ai = {},
  bo = 1e4,
  Li = 0;
function ko(e, t) {
  var i = "" + t.end + t.strict + t.sensitive,
    s = Ai[i] || (Ai[i] = {});
  if (s[e]) return s[e];
  var o = [],
    a = (0, Oi.default)(e, o, t),
    n = { regexp: a, keys: o };
  return Li < bo && ((s[e] = n), Li++), n;
}
function fe(e, t) {
  t === void 0 && (t = {}),
    (typeof t == "string" || Array.isArray(t)) && (t = { path: t });
  var i = t,
    s = i.path,
    o = i.exact,
    a = o === void 0 ? !1 : o,
    n = i.strict,
    l = n === void 0 ? !1 : n,
    r = i.sensitive,
    _ = r === void 0 ? !1 : r,
    c = [].concat(s);
  return c.reduce(function (d, u) {
    if (!u && u !== "") return null;
    if (d) return d;
    var p = ko(u, { end: a, strict: l, sensitive: _ }),
      h = p.regexp,
      y = p.keys,
      g = h.exec(e);
    if (!g) return null;
    var w = g[0],
      E = g.slice(1),
      P = e === w;
    return a && !P
      ? null
      : {
          path: u,
          url: u === "/" && w === "" ? "/" : w,
          isExact: P,
          params: y.reduce(function (A, D, T) {
            return (A[D.name] = E[T]), A;
          }, {}),
        };
  }, null);
}
function So(e) {
  return C.default.Children.count(e) === 0;
}
var Po = (function (e) {
  ee(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var i = t.prototype;
  return (
    (i.render = function () {
      var o = this;
      return C.default.createElement(_e.Consumer, null, function (a) {
        a || ae(!1);
        var n = o.props.location || a.location,
          l = o.props.computedMatch
            ? o.props.computedMatch
            : o.props.path
              ? fe(n.pathname, o.props)
              : a.match,
          r = V({}, a, { location: n, match: l }),
          _ = o.props,
          c = _.children,
          d = _.component,
          u = _.render;
        return (
          Array.isArray(c) && So(c) && (c = null),
          C.default.createElement(
            _e.Provider,
            { value: r },
            r.match
              ? c
                ? typeof c == "function"
                  ? c(r)
                  : c
                : d
                  ? C.default.createElement(d, r)
                  : u
                    ? u(r)
                    : null
              : typeof c == "function"
                ? c(r)
                : null,
          )
        );
      });
    }),
    t
  );
})(C.default.Component);
function gt(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function $o(e, t) {
  return e ? V({}, t, { pathname: gt(e) + t.pathname }) : t;
}
function zo(e, t) {
  if (!e) return t;
  var i = gt(e);
  return t.pathname.indexOf(i) !== 0
    ? t
    : V({}, t, { pathname: t.pathname.substr(i.length) });
}
function Ni(e) {
  return typeof e == "string" ? e : H(e);
}
function vt(e) {
  return function () {
    ae(!1);
  };
}
function Vi() {}
var jo = (function (e) {
    ee(t, e);
    function t() {
      for (var s, o = arguments.length, a = new Array(o), n = 0; n < o; n++)
        a[n] = arguments[n];
      return (
        (s = e.call.apply(e, [this].concat(a)) || this),
        (s.handlePush = function (l) {
          return s.navigateTo(l, "PUSH");
        }),
        (s.handleReplace = function (l) {
          return s.navigateTo(l, "REPLACE");
        }),
        (s.handleListen = function () {
          return Vi;
        }),
        (s.handleBlock = function () {
          return Vi;
        }),
        s
      );
    }
    var i = t.prototype;
    return (
      (i.navigateTo = function (o, a) {
        var n = this.props,
          l = n.basename,
          r = l === void 0 ? "" : l,
          _ = n.context,
          c = _ === void 0 ? {} : _;
        (c.action = a), (c.location = $o(r, B(o))), (c.url = Ni(c.location));
      }),
      (i.render = function () {
        var o = this.props,
          a = o.basename,
          n = a === void 0 ? "" : a,
          l = o.context,
          r = l === void 0 ? {} : l,
          _ = o.location,
          c = _ === void 0 ? "/" : _,
          d = ye(o, ["basename", "context", "location"]),
          u = {
            createHref: function (h) {
              return gt(n + Ni(h));
            },
            action: "POP",
            location: zo(n, B(c)),
            push: this.handlePush,
            replace: this.handleReplace,
            go: vt("go"),
            goBack: vt("goBack"),
            goForward: vt("goForward"),
            listen: this.handleListen,
            block: this.handleBlock,
          };
        return C.default.createElement(
          ge,
          V({}, d, { history: u, staticContext: r }),
        );
      }),
      t
    );
  })(C.default.Component),
  Eo = (function (e) {
    ee(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var i = t.prototype;
    return (
      (i.render = function () {
        var o = this;
        return C.default.createElement(_e.Consumer, null, function (a) {
          a || ae(!1);
          var n = o.props.location || a.location,
            l,
            r;
          return (
            C.default.Children.forEach(o.props.children, function (_) {
              if (r == null && C.default.isValidElement(_)) {
                l = _;
                var c = _.props.path || _.props.from;
                r = c ? fe(n.pathname, V({}, _.props, { path: c })) : a.match;
              }
            }),
            r
              ? C.default.cloneElement(l, { location: n, computedMatch: r })
              : null
          );
        });
      }),
      t
    );
  })(C.default.Component);
var Fi = C.default.useContext;
function ft() {
  return Fi(Ii);
}
function wt() {
  return Fi(_e).location;
}
var te = N(le());
var hn = (function (e) {
    ee(t, e);
    function t() {
      for (var s, o = arguments.length, a = new Array(o), n = 0; n < o; n++)
        a[n] = arguments[n];
      return (
        (s = e.call.apply(e, [this].concat(a)) || this),
        (s.history = li(s.props)),
        s
      );
    }
    var i = t.prototype;
    return (
      (i.render = function () {
        return te.default.createElement(ge, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(te.default.Component),
  vn = (function (e) {
    ee(t, e);
    function t() {
      for (var s, o = arguments.length, a = new Array(o), n = 0; n < o; n++)
        a[n] = arguments[n];
      return (
        (s = e.call.apply(e, [this].concat(a)) || this),
        (s.history = ci(s.props)),
        s
      );
    }
    var i = t.prototype;
    return (
      (i.render = function () {
        return te.default.createElement(ge, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(te.default.Component),
  bt = function (t, i) {
    return typeof t == "function" ? t(i) : t;
  },
  kt = function (t, i) {
    return typeof t == "string" ? B(t, null, null, i) : t;
  },
  St = function (t) {
    return t;
  },
  we = te.default.forwardRef;
typeof we > "u" && (we = St);
function To(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Ro = we(function (e, t) {
    var i = e.innerRef,
      s = e.navigate,
      o = e.onClick,
      a = ye(e, ["innerRef", "navigate", "onClick"]),
      n = a.target,
      l = V({}, a, {
        onClick: function (_) {
          try {
            o && o(_);
          } catch (c) {
            throw (_.preventDefault(), c);
          }
          !_.defaultPrevented &&
            _.button === 0 &&
            (!n || n === "_self") &&
            !To(_) &&
            (_.preventDefault(), s());
        },
      });
    return (
      St !== we ? (l.ref = t || i) : (l.ref = i),
      te.default.createElement("a", l)
    );
  }),
  Do = we(function (e, t) {
    var i = e.component,
      s = i === void 0 ? Ro : i,
      o = e.replace,
      a = e.to,
      n = e.innerRef,
      l = ye(e, ["component", "replace", "to", "innerRef"]);
    return te.default.createElement(_e.Consumer, null, function (r) {
      r || ae(!1);
      var _ = r.history,
        c = kt(bt(a, r.location), r.location),
        d = c ? _.createHref(c) : "",
        u = V({}, l, {
          href: d,
          navigate: function () {
            var h = bt(a, r.location),
              y = H(r.location) === H(kt(h)),
              g = o || y ? _.replace : _.push;
            g(h);
          },
        });
      return (
        St !== we ? (u.ref = t || n) : (u.innerRef = n),
        te.default.createElement(s, u)
      );
    });
  });
var Hi = function (t) {
    return t;
  },
  Xe = te.default.forwardRef;
typeof Xe > "u" && (Xe = Hi);
function xo() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return t
    .filter(function (s) {
      return s;
    })
    .join(" ");
}
var yn = Xe(function (e, t) {
  var i = e["aria-current"],
    s = i === void 0 ? "page" : i,
    o = e.activeClassName,
    a = o === void 0 ? "active" : o,
    n = e.activeStyle,
    l = e.className,
    r = e.exact,
    _ = e.isActive,
    c = e.location,
    d = e.sensitive,
    u = e.strict,
    p = e.style,
    h = e.to,
    y = e.innerRef,
    g = ye(e, [
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
  return te.default.createElement(_e.Consumer, null, function (w) {
    w || ae(!1);
    var E = c || w.location,
      P = kt(bt(h, E), E),
      A = P.pathname,
      D = A && A.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      T = D
        ? fe(E.pathname, { path: D, exact: r, sensitive: d, strict: u })
        : null,
      b = !!(_ ? _(T, E) : T),
      f = typeof l == "function" ? l(b) : l,
      I = typeof p == "function" ? p(b) : p;
    b && ((f = xo(f, a)), (I = V({}, I, n)));
    var L = V(
      { "aria-current": (b && s) || null, className: f, style: I, to: P },
      g,
    );
    return (
      Hi !== Xe ? (L.ref = t || y) : (L.innerRef = y),
      te.default.createElement(Do, L)
    );
  });
});
function Pt(e, t, i) {
  let s = `${e}_HistoryValue`,
    o = ft(),
    a = wt(),
    n = (a.state && a.state[s]) ?? i,
    l = ne.useRef(!1),
    r = ne.useRef(),
    _ = ne.useRef(),
    c = ne.useCallback(
      (d) => {
        if (l.current && ((r.current = d), !_.current)) {
          let u = o.location.pathname;
          _.current = window.setTimeout(() => {
            o.location.pathname == u &&
              (!o.location.state || o.location.state[s] != r.current) &&
              o.replace(o.location.pathname, {
                ...(o.location.state || {}),
                [s]: r.current,
              }),
              (_.current = void 0);
          }, t);
        }
      },
      [o, s, t],
    );
  return (
    ne.useEffect(() => {
      l.current = !0;
    }, []),
    [n, c]
  );
}
var re = N(le(), 1);
var $t = class {
  m_options;
  m_msStart;
  m_msEnd;
  m_bActive = !1;
  m_fnBoundAnimationFunc = void 0;
  m_window;
  constructor(t, i) {
    (this.m_window = t), (this.m_options = { timing: "sine", ...i });
  }
  Start() {
    (this.m_msStart = performance.now()),
      (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
    let t;
    switch (this.m_options.timing) {
      case "linear":
        t = function (i) {
          return i;
        };
        break;
      case "cubic-in-out":
        t = function (i) {
          return i < 0.5
            ? 4 * i * i * i
            : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1;
        };
        break;
      case "sine":
      default:
        t = function (i) {
          return 0.5 - Math.cos(i * Math.PI) / 2;
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
    let i = performance.now() - this.m_msStart,
      s = !1;
    if (i >= this.m_options.msDuration) {
      this.End();
      return;
    }
    let o = i / this.m_options.msDuration;
    try {
      this.Update(t(o));
    } catch {}
    this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
  }
  ClearInterval() {
    this.m_bActive = !1;
  }
};
var Qe = class extends $t {
  m_object;
  m_propTargets;
  m_props = {};
  constructor(t, i, s) {
    super("ownerDocument" in t ? xt(t) : t, s),
      (this.m_object = t),
      (this.m_propTargets = i);
  }
  Start() {
    this.m_props = {};
    for (let t in this.m_propTargets) {
      let i = parseFloat(this.m_object[t]) || 0,
        s = this.m_propTargets[t];
      i != s && (this.m_props[t] = { start: i, end: s });
    }
    super.Start();
  }
  Update(t) {
    for (let i in this.m_props) {
      let s = this.m_props[i],
        o = s.start + (s.end - s.start) * t;
      this.m_object[i] = o;
    }
  }
};
function Co(e, t) {
  let i = re.default.useRef();
  return re.default.useCallback(
    (s, o) => {
      let a = "sine";
      if ((i.current && (i.current.Cancel(), (a = "linear")), !e.current))
        return;
      s === void 0 && (s = e.current.scrollTop),
        o === void 0 && (o = e.current.scrollLeft);
      let n = Math.max(
        Math.abs(e.current.scrollTop - s),
        Math.abs(e.current.scrollLeft - o),
      );
      if (n > 0) {
        let l = Math.max(Math.min((n / 1e3) * 200, 500), 300);
        (i.current = new Qe(
          e.current,
          { scrollTop: s, scrollLeft: o },
          { msDuration: l, timing: a, onComplete: t },
        )),
          i.current.Start();
      } else t && t();
    },
    [e, t],
  );
}
function Ui(e, t = "smooth", i, s) {
  let o = (i ?? 30) / 100,
    a = re.default.useRef(void 0),
    n = re.default.useRef(void 0),
    l = re.default.useCallback(() => {
      (a.current = void 0), (n.current = void 0);
    }, []),
    r = Co(e, l);
  return re.default.useCallback(
    (c) => {
      if ((s && !s(c)) || c.defaultPrevented || !e.current) return !1;
      let {
          scrollTop: d,
          scrollHeight: u,
          clientHeight: p,
          scrollLeft: h,
          scrollWidth: y,
          clientWidth: g,
        } = e.current,
        w = a.current ?? d,
        E = n.current ?? h,
        P = 2;
      switch (c.detail.button) {
        case 9:
          if (w <= P) return !1;
          a.current = Math.max(0, w - p * o);
          break;
        case 10:
          if (w >= u - p - P) return !1;
          a.current = Math.min(u - p, w + p * o);
          break;
        case 11:
          if (E <= P) return !1;
          n.current = Math.max(0, E - g * o);
          break;
        case 12:
          if (E >= y - g - P) return !1;
          n.current = Math.min(y - g, E + g * o);
          break;
        default:
          return !1;
      }
      return (
        !t || t == "smooth"
          ? r(a.current, n.current)
          : (e.current.scrollTo({
              top: a.current,
              left: n.current,
              behavior: "auto",
            }),
            l()),
        !0
      );
    },
    [s, e, t, o, r, l],
  );
}
function Bi() {
  let e = re.default.useRef(null),
    t = re.default.useCallback(
      (s) => {
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
  return { ref: It(t), navRef: e };
}
var ze = {
  ScrollPanel: "LOBCiSXGyJg-",
  ScrollY: "XnhvXyT1-F0-",
  ScrollX: "oHmIKsgLAUY-",
  ScrollBoth: "_4gs8FnVjoXA-",
};
var ce = N(Ee()),
  qi = J.default.forwardRef(function (t, i) {
    let {
        scrollDirection: s,
        scrollPaddingTop: o,
        scrollPaddingRight: a,
        scrollPaddingBottom: n,
        scrollPaddingLeft: l,
        className: r,
        children: _,
        style: c,
        ...d
      } = t,
      u;
    switch (s) {
      case "x":
        u = ze.ScrollX;
        break;
      case "both":
        u = ze.ScrollBoth;
        break;
      case "y":
      default:
        u = ze.ScrollY;
        break;
    }
    let p = { ...c };
    (o || o === 0) && (p.scrollPaddingTop = o),
      (a || a === 0) && (p.scrollPaddingRight = a),
      (n || n === 0) && (p.scrollPaddingBottom = n),
      (l || l === 0) && (p.scrollPaddingLeft = l);
    let { ref: h, navRef: y } = Bi(),
      g = be(y, d.navRef),
      w = be(h, i);
    return (0, ce.jsx)(Mt, {
      ...d,
      style: p,
      className: (0, Ki.default)(r, ze.ScrollPanel, u),
      ref: w,
      navRef: g,
      children: (0, ce.jsx)(Ft, { children: _ }),
    });
  }),
  Ao = J.default.forwardRef(function (t, i) {
    let { scrollStepPercent: s, scrollBehavior: o, ...a } = t,
      n = J.default.useRef(null),
      l = J.default.useCallback((c) => c.currentTarget != c.target, []),
      r = Ui(n, o, s, l),
      _ = be(n, i);
    return (0, ce.jsx)(qi, {
      ...a,
      onGamepadDirection: r,
      ref: _,
      scrollIntoViewType: 2,
    });
  }),
  Ln = J.default.forwardRef(function (t, i) {
    let { name: s, msScrollRestoreDelay: o, onScroll: a, ...n } = t;
    return (0, ce.jsx)(Gi, {
      name: s,
      msScrollRestoreDelay: o,
      parentOnScroll: a,
      refDiv: i,
      children: (l, r) => (0, ce.jsx)(qi, { ...n, onScroll: l, ref: r }),
    });
  }),
  Nn = J.default.forwardRef(function (t, i) {
    let { name: s, msScrollRestoreDelay: o, onScroll: a, ...n } = t;
    return (0, ce.jsx)(Gi, {
      name: s,
      msScrollRestoreDelay: o,
      parentOnScroll: a,
      refDiv: i,
      children: (l, r) => (0, ce.jsx)(Ao, { ...n, onScroll: l, ref: r }),
    });
  });
function Gi(e) {
  let {
      name: t,
      msScrollRestoreDelay: i,
      parentOnScroll: s,
      refDiv: o,
      children: a,
    } = e,
    [n, l] = Pt(`${t}ScrollTop`, 250, 0),
    [r, _] = Pt(`${t}ScrollLeft`, 250, 0),
    c = J.default.useRef(0),
    d = J.default.useRef(0),
    u = J.default.useRef(),
    p = J.default.useCallback(
      (y) => {
        let { scrollTop: g, scrollLeft: w } = y.currentTarget;
        l(g), (c.current = g), _(w), (d.current = w), s && s(y);
      },
      [l, _, s],
    );
  J.default.useLayoutEffect(() => {
    let y = function () {
      u.current &&
        (Tt(
          u.current.scrollHeight >= n,
          `Element is ${u.current.scrollHeight} high but trying to restore scrollTop of ${n}, element may need more time to lay out.`,
          u.current,
        ),
        (c.current = n),
        (d.current = r),
        u.current.scrollTo({ top: n, left: r, behavior: "auto" }),
        u.current.dispatchEvent(new UIEvent("scroll")));
    };
    (n != c.current || r != d.current) && (i ? window.setTimeout(y, i) : y());
  }, [n, r, i]);
  let h = be(u, o);
  return J.default.useMemo(() => a(p, h), [p, h, a]);
}
var Wi = "./store_brazilian-JSCVXYAA.json";
var Yi = "./store_bulgarian-2NXL7ODA.json";
var Ji = "./store_czech-DUA6ENDA.json";
var Zi = "./store_danish-SDG4HWAA.json";
var Xi = "./store_dutch-UEFVERDA.json";
var Qi = "./store_english-LYVSXCAA.json";
var es = "./store_finnish-GFYOJLBA.json";
var ts = "./store_french-T27EKYCA.json";
var is = "./store_german-AWJMA2AA.json";
var ss = "./store_greek-UOOUJKCA.json";
var os = "./store_hungarian-F7E4YLCA.json";
var as = "./store_indonesian-HBNNN3DA.json";
var ns = "./store_italian-PDZJIOAA.json";
var rs = "./store_japanese-HJJRCGAA.json";
var ls = "./store_koreana-OEEAYRBA.json";
var _s = "./store_latam-BSAMSQDA.json";
var cs = "./store_norwegian-GVLPEKBA.json";
var ds = "./store_polish-O5D6OQDA.json";
var us = "./store_portuguese-TTGN5BBA.json";
var ps = "./store_romanian-4FRTRYAA.json";
var ms = "./store_russian-NZGLQYAA.json";
var hs = "./store_schinese-J5GYUHCA.json";
var vs = "./store_spanish-FZXH4DAA.json";
var ys = "./store_swedish-O6WZR2AA.json";
var gs = "./store_tchinese-HL4FPGDA.json";
var fs = "./store_thai-RCGBO5AA.json";
var ws = "./store_turkish-755R4WAA.json";
var bs = "./store_ukrainian-ZTKGB5CA.json";
var ks = "./store_vietnamese-ZGXTJNBA.json";
var S = {};
S.brazilian = Wi;
S.bulgarian = Yi;
S.czech = Ji;
S.danish = Zi;
S.dutch = Xi;
S.english = Qi;
S.finnish = es;
S.french = ts;
S.german = is;
S.greek = ss;
S.hungarian = os;
S.indonesian = as;
S.italian = ns;
S.japanese = rs;
S.koreana = ls;
S.latam = _s;
S.norwegian = cs;
S.polish = ds;
S.portuguese = us;
S.romanian = ps;
S.russian = ms;
S.schinese = hs;
S.spanish = vs;
S.swedish = ys;
S.tchinese = gs;
S.thai = fs;
S.turkish = ws;
S.ukrainian = bs;
S.vietnamese = ks;
async function zt(e) {
  if (S[e]) return (await fetch(new URL(S[e], import.meta.url))).json();
}
var Kr = Et(zt);
export {
  Ft as a,
  xi as b,
  $t as c,
  V as d,
  ye as e,
  ee as f,
  ae as g,
  Bi as h,
  qi as i,
  Ao as j,
  Kr as k,
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

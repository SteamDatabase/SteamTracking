const CLSTAMP = 9686915;

import {
  H as Mt,
  b as Ct,
  m as At,
  q as Lt,
  t as Vt,
  u as Nt,
} from "./chunk-NL75PMJV.js";
import { a as Dt } from "./chunk-YK2VXHHZ.js";
import { a as It } from "./chunk-VJFIVOW4.js";
import { b as be, f as Rt, v as xt } from "./chunk-UD465EZP.js";
import { c as Ot } from "./chunk-CYEYUUAJ.js";
import { d as Et } from "./chunk-GENZKDKH.js";
import { h as Tt } from "./chunk-CG2AVMMX.js";
import { o as Ee } from "./chunk-NSLGW32G.js";
import { a as le } from "./chunk-ASFGMT32.js";
import { b as se, d as V } from "./chunk-BWYQWJMA.js";
var Ut = se((Sa, Bt) => {
  "use strict";
  var Es = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  Bt.exports = Es;
});
var Gt = se((za, Wt) => {
  "use strict";
  var Ts = Ut();
  function Kt() {}
  function qt() {}
  qt.resetWarningCache = Kt;
  Wt.exports = function () {
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
var Jt = se((Pa, Yt) => {
  "use strict";
  Yt.exports = Gt()();
  var $a, ja;
});
var pi = se((Oa, ui) => {
  "use strict";
  ui.exports =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    };
});
var gi = se((Ma, ve) => {
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
        g = l[5],
        y = l[6],
        w = l[7];
      a && (i.push(a), (a = ""));
      var E = u != null && d != null && d !== u,
        z = y === "+" || y === "*",
        A = y === "?" || y === "*",
        D = u || n,
        T = h || g,
        b = u || (typeof i[i.length - 1] == "string" ? i[i.length - 1] : "");
      i.push({
        name: p || s++,
        prefix: u || "",
        delimiter: D,
        optional: A,
        repeat: z,
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
  function Bs(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function Us(e) {
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
          _ = r.pretty ? Bs : encodeURIComponent,
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
        if (((p = d.asterisk ? Us(u) : _(u)), !i[c].test(p)))
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
  function Ws(e, t, i) {
    for (var s = [], o = 0; o < e.length; o++) s.push(vi(e[o], t, i).source);
    var a = new RegExp("(?:" + s.join("|") + ")", nt(i));
    return at(a, t);
  }
  function Gs(e, t, i) {
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
      e instanceof RegExp ? qs(e, t) : De(e) ? Ws(e, t, i) : Gs(e, t, i)
    );
  }
});
var fi = se((j) => {
  "use strict";
  var O = typeof Symbol == "function" && Symbol.for,
    rt = O ? Symbol.for("react.element") : 60103,
    lt = O ? Symbol.for("react.portal") : 60106,
    xe = O ? Symbol.for("react.fragment") : 60107,
    Ce = O ? Symbol.for("react.strict_mode") : 60108,
    Ae = O ? Symbol.for("react.profiler") : 60114,
    Le = O ? Symbol.for("react.provider") : 60109,
    Ve = O ? Symbol.for("react.context") : 60110,
    _t = O ? Symbol.for("react.async_mode") : 60111,
    Ne = O ? Symbol.for("react.concurrent_mode") : 60111,
    Oe = O ? Symbol.for("react.forward_ref") : 60112,
    Me = O ? Symbol.for("react.suspense") : 60113,
    Ys = O ? Symbol.for("react.suspense_list") : 60120,
    Ie = O ? Symbol.for("react.memo") : 60115,
    Fe = O ? Symbol.for("react.lazy") : 60116,
    Js = O ? Symbol.for("react.block") : 60121,
    Zs = O ? Symbol.for("react.fundamental") : 60117,
    Xs = O ? Symbol.for("react.responder") : 60118,
    Qs = O ? Symbol.for("react.scope") : 60119;
  function G(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case rt:
          switch (((e = e.type), e)) {
            case _t:
            case Ne:
            case xe:
            case Ae:
            case Ce:
            case Me:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ve:
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
  function yi(e) {
    return G(e) === Ne;
  }
  j.AsyncMode = _t;
  j.ConcurrentMode = Ne;
  j.ContextConsumer = Ve;
  j.ContextProvider = Le;
  j.Element = rt;
  j.ForwardRef = Oe;
  j.Fragment = xe;
  j.Lazy = Fe;
  j.Memo = Ie;
  j.Portal = lt;
  j.Profiler = Ae;
  j.StrictMode = Ce;
  j.Suspense = Me;
  j.isAsyncMode = function (e) {
    return yi(e) || G(e) === _t;
  };
  j.isConcurrentMode = yi;
  j.isContextConsumer = function (e) {
    return G(e) === Ve;
  };
  j.isContextProvider = function (e) {
    return G(e) === Le;
  };
  j.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === rt;
  };
  j.isForwardRef = function (e) {
    return G(e) === Oe;
  };
  j.isFragment = function (e) {
    return G(e) === xe;
  };
  j.isLazy = function (e) {
    return G(e) === Fe;
  };
  j.isMemo = function (e) {
    return G(e) === Ie;
  };
  j.isPortal = function (e) {
    return G(e) === lt;
  };
  j.isProfiler = function (e) {
    return G(e) === Ae;
  };
  j.isStrictMode = function (e) {
    return G(e) === Ce;
  };
  j.isSuspense = function (e) {
    return G(e) === Me;
  };
  j.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === xe ||
      e === Ne ||
      e === Ae ||
      e === Ce ||
      e === Me ||
      e === Ys ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Fe ||
          e.$$typeof === Ie ||
          e.$$typeof === Le ||
          e.$$typeof === Ve ||
          e.$$typeof === Oe ||
          e.$$typeof === Zs ||
          e.$$typeof === Xs ||
          e.$$typeof === Qs ||
          e.$$typeof === Js))
    );
  };
  j.typeOf = G;
});
var bi = se((Fa, wi) => {
  "use strict";
  wi.exports = fi();
});
var Si = se((P) => {
  "use strict";
  var M = typeof Symbol == "function" && Symbol.for,
    ct = M ? Symbol.for("react.element") : 60103,
    dt = M ? Symbol.for("react.portal") : 60106,
    He = M ? Symbol.for("react.fragment") : 60107,
    Be = M ? Symbol.for("react.strict_mode") : 60108,
    Ue = M ? Symbol.for("react.profiler") : 60114,
    Ke = M ? Symbol.for("react.provider") : 60109,
    qe = M ? Symbol.for("react.context") : 60110,
    ut = M ? Symbol.for("react.async_mode") : 60111,
    We = M ? Symbol.for("react.concurrent_mode") : 60111,
    Ge = M ? Symbol.for("react.forward_ref") : 60112,
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
            case We:
            case He:
            case Ue:
            case Be:
            case Ye:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case qe:
                case Ge:
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
    return Y(e) === We;
  }
  P.AsyncMode = ut;
  P.ConcurrentMode = We;
  P.ContextConsumer = qe;
  P.ContextProvider = Ke;
  P.Element = ct;
  P.ForwardRef = Ge;
  P.Fragment = He;
  P.Lazy = Ze;
  P.Memo = Je;
  P.Portal = dt;
  P.Profiler = Ue;
  P.StrictMode = Be;
  P.Suspense = Ye;
  P.isAsyncMode = function (e) {
    return ki(e) || Y(e) === ut;
  };
  P.isConcurrentMode = ki;
  P.isContextConsumer = function (e) {
    return Y(e) === qe;
  };
  P.isContextProvider = function (e) {
    return Y(e) === Ke;
  };
  P.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === ct;
  };
  P.isForwardRef = function (e) {
    return Y(e) === Ge;
  };
  P.isFragment = function (e) {
    return Y(e) === He;
  };
  P.isLazy = function (e) {
    return Y(e) === Ze;
  };
  P.isMemo = function (e) {
    return Y(e) === Je;
  };
  P.isPortal = function (e) {
    return Y(e) === dt;
  };
  P.isProfiler = function (e) {
    return Y(e) === Ue;
  };
  P.isStrictMode = function (e) {
    return Y(e) === Be;
  };
  P.isSuspense = function (e) {
    return Y(e) === Ye;
  };
  P.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === He ||
      e === We ||
      e === Ue ||
      e === Be ||
      e === Ye ||
      e === eo ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Ze ||
          e.$$typeof === Je ||
          e.$$typeof === Ke ||
          e.$$typeof === qe ||
          e.$$typeof === Ge ||
          e.$$typeof === io ||
          e.$$typeof === so ||
          e.$$typeof === oo ||
          e.$$typeof === to))
    );
  };
  P.typeOf = Y;
});
var $i = se((Ua, zi) => {
  "use strict";
  zi.exports = Si();
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
  function ji(e) {
    return pt.isMemo(e) ? Ti : mt[e.$$typeof] || ao;
  }
  var lo = Object.defineProperty,
    _o = Object.getOwnPropertyNames,
    Pi = Object.getOwnPropertySymbols,
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
      Pi && (o = o.concat(Pi(t)));
      for (var a = ji(e), n = ji(t), l = 0; l < o.length; ++l) {
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
var F = V(le()),
  Se = V(Dt());
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
var oe = V(Ee()),
  Ht = V(le()),
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
      (0, oe.jsx)(zs, { ...i, ...s, refMeasure: a }),
      (0, oe.jsx)(Nt.Provider, { value: n, children: t }),
    ],
  });
}
function zs(e) {
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
    [_, c] = F.default.useReducer((z) => z + 1, 0),
    [d, u] = F.default.useReducer((z) => z + 1, 0);
  Rt(
    n,
    F.default.useMemo(() => ({ MeasureElementAndUpdate: u }), []),
  );
  let { bActiveTree: p, bDisableFocusClasses: h } = Vt(),
    g = p && !h,
    y = Ps(a, s),
    w = F.default.useCallback(() => {
      if (!s || !s.BWantsFocusRing() || !o || !g) {
        r(null);
        return;
      }
      let z = s.GetBoundingRect(),
        A = o.getBoundingClientRect(),
        D = {
          left: z.x - A.x,
          top: z.y - A.y,
          height: z.height,
          width: z.width,
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
    }, [s, o, g]);
  F.default.useLayoutEffect(() => w(), [w]),
    F.default.useLayoutEffect(() => {
      c();
    }, [s]);
  let E = i;
  return (
    s && o && (s.BWantsFocusRing() || (E = !1)),
    F.default.useEffect(() => {
      if (!E) return;
      let z = performance.now(),
        A,
        D = () => {
          w(), performance.now() - z <= 500 && (A = requestAnimationFrame(D));
        };
      return D(), () => cancelAnimationFrame(A);
    }, [E, w, l, d]),
    !E || !l
      ? null
      : (0, Ht.createElement)(js, {
          ...l,
          key: _,
          className: (0, Se.default)(t, y && ke.FocusRingOnHiddenItem),
          target: s,
        })
  );
}
function js(e) {
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
function Ps(e, t) {
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
var Ki = V(Dt()),
  J = V(le());
var ne = V(le());
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
var C = V(le()),
  gt = V(Jt());
function N() {
  return (
    (N = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i) ({}).hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
    N.apply(null, arguments)
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
function U(e, t, i, s) {
  var o;
  typeof e == "string"
    ? ((o = Cs(e)), (o.state = t))
    : ((o = N({}, e)),
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
function Vs() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function Ns(e) {
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
      W = $.hash,
      q = x + Q + W;
    return d && (q = oi(q, d)), U(q, v, m);
  }
  function p() {
    return Math.random().toString(36).substr(2, c);
  }
  var h = st();
  function g(k) {
    N(X, k), (X.length = t.length), h.notifyListeners(X.location, X.action);
  }
  function y(k) {
    Ns(k) || z(u(k.state));
  }
  function w() {
    z(u(ti()));
  }
  var E = !1;
  function z(k) {
    if (E) (E = !1), g();
    else {
      var R = "POP";
      h.confirmTransitionTo(k, R, r, function (m) {
        m ? g({ action: R, location: k }) : A(k);
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
      v = U(k, R, p(), X.location);
    h.confirmTransitionTo(v, m, r, function ($) {
      if ($) {
        var x = b(v),
          Q = v.key,
          W = v.state;
        if (i)
          if ((t.pushState({ key: Q, state: W }, null, x), n))
            window.location.href = x;
          else {
            var q = T.indexOf(X.location.key),
              he = T.slice(0, q + 1);
            he.push(v.key), (T = he), g({ action: m, location: v });
          }
        else window.location.href = x;
      }
    });
  }
  function I(k, R) {
    var m = "REPLACE",
      v = U(k, R, p(), X.location);
    h.confirmTransitionTo(v, m, r, function ($) {
      if ($) {
        var x = b(v),
          Q = v.key,
          W = v.state;
        if (i)
          if ((t.replaceState({ key: Q, state: W }, null, x), n))
            window.location.replace(x);
          else {
            var q = T.indexOf(X.location.key);
            q !== -1 && (T[q] = v.key), g({ action: m, location: v });
          }
        else window.location.replace(x);
      }
    });
  }
  function L(k) {
    t.go(k);
  }
  function B() {
    L(-1);
  }
  function Z() {
    L(1);
  }
  var de = 0;
  function ie(k) {
    (de += k),
      de === 1 && k === 1
        ? (window.addEventListener(Qt, y), s && window.addEventListener(ei, w))
        : de === 0 &&
          (window.removeEventListener(Qt, y),
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
    goBack: B,
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
function ze() {
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
    i = Vs(),
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
    var m = d(ze());
    return r && (m = oi(m, r)), U(m);
  }
  var p = st();
  function h(m) {
    N(R, m), (R.length = t.length), p.notifyListeners(R.location, R.action);
  }
  var g = !1,
    y = null;
  function w(m, v) {
    return (
      m.pathname === v.pathname && m.search === v.search && m.hash === v.hash
    );
  }
  function E() {
    var m = ze(),
      v = c(m);
    if (m !== v) it(v);
    else {
      var $ = u(),
        x = R.location;
      if ((!g && w(x, $)) || y === H($)) return;
      (y = null), z($);
    }
  }
  function z(m) {
    if (g) (g = !1), h();
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
    Q && ((g = !0), Z(Q));
  }
  var D = ze(),
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
      x = U(m, void 0, void 0, R.location);
    p.confirmTransitionTo(x, $, a, function (Q) {
      if (Q) {
        var W = H(x),
          q = c(r + W),
          he = ze() !== q;
        if (he) {
          (y = W), Ms(q);
          var Pe = f.lastIndexOf(H(R.location)),
            Pt = f.slice(0, Pe + 1);
          Pt.push(W), (f = Pt), h({ action: $, location: x });
        } else h();
      }
    });
  }
  function B(m, v) {
    var $ = "REPLACE",
      x = U(m, void 0, void 0, R.location);
    p.confirmTransitionTo(x, $, a, function (Q) {
      if (Q) {
        var W = H(x),
          q = c(r + W),
          he = ze() !== q;
        he && ((y = W), it(q));
        var Pe = f.indexOf(H(R.location));
        Pe !== -1 && (f[Pe] = W), h({ action: $, location: x });
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
    replace: B,
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
    N(b, f),
      (b.length = b.entries.length),
      _.notifyListeners(b.location, b.action);
  }
  function d() {
    return Math.random().toString(36).substr(2, r);
  }
  var u = si(n, 0, o.length - 1),
    p = o.map(function (f) {
      return typeof f == "string"
        ? U(f, void 0, d())
        : U(f, void 0, f.key || d());
    }),
    h = H;
  function g(f, I) {
    var L = "PUSH",
      B = U(f, I, d(), b.location);
    _.confirmTransitionTo(B, L, i, function (Z) {
      if (Z) {
        var de = b.index,
          ie = de + 1,
          K = b.entries.slice(0);
        K.length > ie ? K.splice(ie, K.length - ie, B) : K.push(B),
          c({ action: L, location: B, index: ie, entries: K });
      }
    });
  }
  function y(f, I) {
    var L = "REPLACE",
      B = U(f, I, d(), b.location);
    _.confirmTransitionTo(B, L, i, function (Z) {
      Z && ((b.entries[b.index] = B), c({ action: L, location: B }));
    });
  }
  function w(f) {
    var I = si(b.index + f, 0, b.entries.length - 1),
      L = "POP",
      B = b.entries[I];
    _.confirmTransitionTo(B, L, i, function (Z) {
      Z ? c({ action: L, location: B, index: I }) : c();
    });
  }
  function E() {
    w(-1);
  }
  function z() {
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
    push: g,
    replace: y,
    go: w,
    goBack: E,
    goForward: z,
    canGo: A,
    block: D,
    listen: T,
  };
  return b;
}
var Oi = V(gi()),
  Za = V(bi());
function ge(e, t) {
  if (e == null) return {};
  var i = {};
  for (var s in e)
    if ({}.hasOwnProperty.call(e, s)) {
      if (t.includes(s)) continue;
      i[s] = e[s];
    }
  return i;
}
var po = V(xi()),
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
function go(e) {
  return Array.isArray(e) ? e[0] : e;
}
function yo(e, t) {
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
  a.childContextTypes = ((i = {}), (i[o] = gt.default.object.isRequired), i);
  var n = (function (l) {
    ee(r, l);
    function r() {
      for (var c, d = arguments.length, u = new Array(d), p = 0; p < d; p++)
        u[p] = arguments[p];
      return (
        (c = l.call.apply(l, [this].concat(u)) || this),
        (c.observedBits = void 0),
        (c.state = { value: c.getValue() }),
        (c.onUpdate = function (h, g) {
          var y = c.observedBits | 0;
          y & g && c.setState({ value: c.getValue() });
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
        return go(this.props.children)(this.state.value);
      }),
      r
    );
  })(C.default.Component);
  return (
    (n.contextTypes = ((s = {}), (s[o] = gt.default.object), s)),
    { Provider: a, Consumer: n }
  );
}
var fo = C.default.createContext || yo,
  Mi = function (t) {
    var i = fo();
    return (i.displayName = t), i;
  },
  Ii = Mi("Router-History"),
  _e = Mi("Router"),
  ye = (function (e) {
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
        return C.default.createElement(ye, {
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
      g = p.keys,
      y = h.exec(e);
    if (!y) return null;
    var w = y[0],
      E = y.slice(1),
      z = e === w;
    return a && !z
      ? null
      : {
          path: u,
          url: u === "/" && w === "" ? "/" : w,
          isExact: z,
          params: g.reduce(function (A, D, T) {
            return (A[D.name] = E[T]), A;
          }, {}),
        };
  }, null);
}
function So(e) {
  return C.default.Children.count(e) === 0;
}
var zo = (function (e) {
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
          r = N({}, a, { location: n, match: l }),
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
function yt(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function $o(e, t) {
  return e ? N({}, t, { pathname: yt(e) + t.pathname }) : t;
}
function jo(e, t) {
  if (!e) return t;
  var i = yt(e);
  return t.pathname.indexOf(i) !== 0
    ? t
    : N({}, t, { pathname: t.pathname.substr(i.length) });
}
function Vi(e) {
  return typeof e == "string" ? e : H(e);
}
function vt(e) {
  return function () {
    ae(!1);
  };
}
function Ni() {}
var Po = (function (e) {
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
          return Ni;
        }),
        (s.handleBlock = function () {
          return Ni;
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
        (c.action = a), (c.location = $o(r, U(o))), (c.url = Vi(c.location));
      }),
      (i.render = function () {
        var o = this.props,
          a = o.basename,
          n = a === void 0 ? "" : a,
          l = o.context,
          r = l === void 0 ? {} : l,
          _ = o.location,
          c = _ === void 0 ? "/" : _,
          d = ge(o, ["basename", "context", "location"]),
          u = {
            createHref: function (h) {
              return yt(n + Vi(h));
            },
            action: "POP",
            location: jo(n, U(c)),
            push: this.handlePush,
            replace: this.handleReplace,
            go: vt("go"),
            goBack: vt("goBack"),
            goForward: vt("goForward"),
            listen: this.handleListen,
            block: this.handleBlock,
          };
        return C.default.createElement(
          ye,
          N({}, d, { history: u, staticContext: r }),
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
                r = c ? fe(n.pathname, N({}, _.props, { path: c })) : a.match;
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
var te = V(le());
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
        return te.default.createElement(ye, {
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
        return te.default.createElement(ye, {
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
    return typeof t == "string" ? U(t, null, null, i) : t;
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
      a = ge(e, ["innerRef", "navigate", "onClick"]),
      n = a.target,
      l = N({}, a, {
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
      l = ge(e, ["component", "replace", "to", "innerRef"]);
    return te.default.createElement(_e.Consumer, null, function (r) {
      r || ae(!1);
      var _ = r.history,
        c = kt(bt(a, r.location), r.location),
        d = c ? _.createHref(c) : "",
        u = N({}, l, {
          href: d,
          navigate: function () {
            var h = bt(a, r.location),
              g = H(r.location) === H(kt(h)),
              y = o || g ? _.replace : _.push;
            y(h);
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
var gn = Xe(function (e, t) {
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
    g = e.innerRef,
    y = ge(e, [
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
      z = kt(bt(h, E), E),
      A = z.pathname,
      D = A && A.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      T = D
        ? fe(E.pathname, { path: D, exact: r, sensitive: d, strict: u })
        : null,
      b = !!(_ ? _(T, E) : T),
      f = typeof l == "function" ? l(b) : l,
      I = typeof p == "function" ? p(b) : p;
    b && ((f = xo(f, a)), (I = N({}, I, n)));
    var L = N(
      { "aria-current": (b && s) || null, className: f, style: I, to: z },
      y,
    );
    return (
      Hi !== Xe ? (L.ref = t || g) : (L.innerRef = g),
      te.default.createElement(Do, L)
    );
  });
});
function zt(e, t, i) {
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
var re = V(le(), 1);
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
function Bi(e, t = "smooth", i, s) {
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
          scrollWidth: g,
          clientWidth: y,
        } = e.current,
        w = a.current ?? d,
        E = n.current ?? h,
        z = 2;
      switch (c.detail.button) {
        case 9:
          if (w <= z) return !1;
          a.current = Math.max(0, w - p * o);
          break;
        case 10:
          if (w >= u - p - z) return !1;
          a.current = Math.min(u - p, w + p * o);
          break;
        case 11:
          if (E <= z) return !1;
          n.current = Math.max(0, E - y * o);
          break;
        case 12:
          if (E >= g - y - z) return !1;
          n.current = Math.min(g - y, E + y * o);
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
function Ui() {
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
var je = {
  ScrollPanel: "LOBCiSXGyJg-",
  ScrollY: "XnhvXyT1-F0-",
  ScrollX: "oHmIKsgLAUY-",
  ScrollBoth: "_4gs8FnVjoXA-",
};
var ce = V(Ee()),
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
        u = je.ScrollX;
        break;
      case "both":
        u = je.ScrollBoth;
        break;
      case "y":
      default:
        u = je.ScrollY;
        break;
    }
    let p = { ...c };
    (o || o === 0) && (p.scrollPaddingTop = o),
      (a || a === 0) && (p.scrollPaddingRight = a),
      (n || n === 0) && (p.scrollPaddingBottom = n),
      (l || l === 0) && (p.scrollPaddingLeft = l);
    let { ref: h, navRef: g } = Ui(),
      y = be(g, d.navRef),
      w = be(h, i);
    return (0, ce.jsx)(Mt, {
      ...d,
      style: p,
      className: (0, Ki.default)(r, je.ScrollPanel, u),
      ref: w,
      navRef: y,
      children: (0, ce.jsx)(Ft, { children: _ }),
    });
  }),
  Ao = J.default.forwardRef(function (t, i) {
    let { scrollStepPercent: s, scrollBehavior: o, ...a } = t,
      n = J.default.useRef(null),
      l = J.default.useCallback((c) => c.currentTarget != c.target, []),
      r = Bi(n, o, s, l),
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
    return (0, ce.jsx)(Wi, {
      name: s,
      msScrollRestoreDelay: o,
      parentOnScroll: a,
      refDiv: i,
      children: (l, r) => (0, ce.jsx)(qi, { ...n, onScroll: l, ref: r }),
    });
  }),
  Vn = J.default.forwardRef(function (t, i) {
    let { name: s, msScrollRestoreDelay: o, onScroll: a, ...n } = t;
    return (0, ce.jsx)(Wi, {
      name: s,
      msScrollRestoreDelay: o,
      parentOnScroll: a,
      refDiv: i,
      children: (l, r) => (0, ce.jsx)(Ao, { ...n, onScroll: l, ref: r }),
    });
  });
function Wi(e) {
  let {
      name: t,
      msScrollRestoreDelay: i,
      parentOnScroll: s,
      refDiv: o,
      children: a,
    } = e,
    [n, l] = zt(`${t}ScrollTop`, 250, 0),
    [r, _] = zt(`${t}ScrollLeft`, 250, 0),
    c = J.default.useRef(0),
    d = J.default.useRef(0),
    u = J.default.useRef(),
    p = J.default.useCallback(
      (g) => {
        let { scrollTop: y, scrollLeft: w } = g.currentTarget;
        l(y), (c.current = y), _(w), (d.current = w), s && s(g);
      },
      [l, _, s],
    );
  J.default.useLayoutEffect(() => {
    let g = function () {
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
    (n != c.current || r != d.current) && (i ? window.setTimeout(g, i) : g());
  }, [n, r, i]);
  let h = be(u, o);
  return J.default.useMemo(() => a(p, h), [p, h, a]);
}
var Gi = "./store_brazilian-CF6E7JDA.json";
var Yi = "./store_bulgarian-GAM7VEBA.json";
var Ji = "./store_czech-TXMQIHCA.json";
var Zi = "./store_danish-WTY4PFDA.json";
var Xi = "./store_dutch-IXFHIUCA.json";
var Qi = "./store_english-GSJZJYBA.json";
var es = "./store_finnish-D2U55PDA.json";
var ts = "./store_french-GPDZILBA.json";
var is = "./store_german-W7SYKCDA.json";
var ss = "./store_greek-5Y3XDXBA.json";
var os = "./store_hungarian-SWFWYQCA.json";
var as = "./store_indonesian-5XBUIFCA.json";
var ns = "./store_italian-D23ACLDA.json";
var rs = "./store_japanese-SP6T35AA.json";
var ls = "./store_koreana-AU7DDKDA.json";
var _s = "./store_latam-C4ENL2DA.json";
var cs = "./store_norwegian-WDYSOOAA.json";
var ds = "./store_polish-GO4FDGBA.json";
var us = "./store_portuguese-WSGMLNCA.json";
var ps = "./store_romanian-HZJO45CA.json";
var ms = "./store_russian-CPHUN5AA.json";
var hs = "./store_schinese-5ZCR5TBA.json";
var vs = "./store_spanish-UZ4OFYBA.json";
var gs = "./store_swedish-4YABY7DA.json";
var ys = "./store_tchinese-5GUTAPBA.json";
var fs = "./store_thai-GXJPENAA.json";
var ws = "./store_turkish-IFUHK5DA.json";
var bs = "./store_ukrainian-UOHSJFAA.json";
var ks = "./store_vietnamese-S7QRHWBA.json";
var S = {};
S.brazilian = Gi;
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
S.swedish = gs;
S.tchinese = ys;
S.thai = fs;
S.turkish = ws;
S.ukrainian = bs;
S.vietnamese = ks;
async function jt(e) {
  if (S[e]) return (await fetch(new URL(S[e], import.meta.url))).json();
}
var Kr = Et(jt);
export {
  Ft as a,
  xi as b,
  $t as c,
  N as d,
  ge as e,
  ee as f,
  ae as g,
  Ui as h,
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

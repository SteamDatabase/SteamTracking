const CLSTAMP = 9545617;

import {
  H as It,
  b as Ct,
  m as At,
  q as Nt,
  t as Vt,
  u as Ot,
} from "./chunk-BLLLWA5F.js";
import { a as Dt } from "./chunk-KTXTSOOQ.js";
import { a as Mt } from "./chunk-2BDDOQN3.js";
import { b as be, f as Rt, u as xt } from "./chunk-BZG6S6XJ.js";
import { c as Lt } from "./chunk-L4XTGFEY.js";
import { c as Et } from "./chunk-L4X6MDS2.js";
import { g as Tt } from "./chunk-P7FJYUXW.js";
import { m as Ee } from "./chunk-QTORK3PE.js";
import { a as le } from "./chunk-SAZNMYRS.js";
import { b as se, d as V } from "./chunk-TFJQIY2G.js";
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
  var za, $a;
});
var di = se((La, pi) => {
  "use strict";
  pi.exports =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    };
});
var yi = se((Ia, ve) => {
  "use strict";
  var De = di();
  ve.exports = vi;
  ve.exports.parse = ot;
  ve.exports.compile = Hs;
  ve.exports.tokensToFunction = mi;
  ve.exports.tokensToRegExp = hi;
  var Ms = new RegExp(
    [
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    ].join("|"),
    "g",
  );
  function ot(e, t) {
    for (
      var i = [], s = 0, o = 0, a = "", n = (t && t.delimiter) || "/", l;
      (l = Ms.exec(e)) != null;
    ) {
      var r = l[0],
        _ = l[1],
        c = l.index;
      if (((a += e.slice(o, c)), (o = c + r.length), _)) {
        a += _[1];
        continue;
      }
      var u = e[o],
        p = l[2],
        d = l[3],
        h = l[4],
        y = l[5],
        g = l[6],
        w = l[7];
      a && (i.push(a), (a = ""));
      var E = p != null && u != null && u !== p,
        P = g === "+" || g === "*",
        A = g === "?" || g === "*",
        D = p || n,
        T = h || y,
        b = p || (typeof i[i.length - 1] == "string" ? i[i.length - 1] : "");
      i.push({
        name: d || s++,
        prefix: p || "",
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
      ? "[^" + pe(e) + "]+?"
      : pe(t) + "|(?:(?!" + pe(t) + ")[^" + pe(e) + "])+?";
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
        var u = e[c];
        if (typeof u == "string") {
          n += u;
          continue;
        }
        var p = l[u.name],
          d;
        if (p == null)
          if (u.optional) {
            u.partial && (n += u.prefix);
            continue;
          } else throw new TypeError('Expected "' + u.name + '" to be defined');
        if (De(p)) {
          if (!u.repeat)
            throw new TypeError(
              'Expected "' +
                u.name +
                '" to not repeat, but received `' +
                JSON.stringify(p) +
                "`",
            );
          if (p.length === 0) {
            if (u.optional) continue;
            throw new TypeError('Expected "' + u.name + '" to not be empty');
          }
          for (var h = 0; h < p.length; h++) {
            if (((d = _(p[h])), !i[c].test(d)))
              throw new TypeError(
                'Expected all "' +
                  u.name +
                  '" to match "' +
                  u.pattern +
                  '", but received `' +
                  JSON.stringify(d) +
                  "`",
              );
            n += (h === 0 ? u.prefix : u.delimiter) + d;
          }
          continue;
        }
        if (((d = u.asterisk ? Bs(p) : _(p)), !i[c].test(d)))
          throw new TypeError(
            'Expected "' +
              u.name +
              '" to match "' +
              u.pattern +
              '", but received "' +
              d +
              '"',
          );
        n += u.prefix + d;
      }
      return n;
    };
  }
  function pe(e) {
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
      if (typeof l == "string") a += pe(l);
      else {
        var r = pe(l.prefix),
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
    var c = pe(i.delimiter || "/"),
      u = a.slice(-c.length) === c;
    return (
      s || (a = (u ? a.slice(0, -c.length) : a) + "(?:" + c + "(?=$))?"),
      o ? (a += "$") : (a += s && u ? "" : "(?=" + c + "|$)"),
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
var fi = se(($) => {
  "use strict";
  var L = typeof Symbol == "function" && Symbol.for,
    rt = L ? Symbol.for("react.element") : 60103,
    lt = L ? Symbol.for("react.portal") : 60106,
    xe = L ? Symbol.for("react.fragment") : 60107,
    Ce = L ? Symbol.for("react.strict_mode") : 60108,
    Ae = L ? Symbol.for("react.profiler") : 60114,
    Ne = L ? Symbol.for("react.provider") : 60109,
    Ve = L ? Symbol.for("react.context") : 60110,
    _t = L ? Symbol.for("react.async_mode") : 60111,
    Oe = L ? Symbol.for("react.concurrent_mode") : 60111,
    Le = L ? Symbol.for("react.forward_ref") : 60112,
    Ie = L ? Symbol.for("react.suspense") : 60113,
    Ys = L ? Symbol.for("react.suspense_list") : 60120,
    Me = L ? Symbol.for("react.memo") : 60115,
    Fe = L ? Symbol.for("react.lazy") : 60116,
    Js = L ? Symbol.for("react.block") : 60121,
    Zs = L ? Symbol.for("react.fundamental") : 60117,
    Xs = L ? Symbol.for("react.responder") : 60118,
    Qs = L ? Symbol.for("react.scope") : 60119;
  function W(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case rt:
          switch (((e = e.type), e)) {
            case _t:
            case Oe:
            case xe:
            case Ae:
            case Ce:
            case Ie:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ve:
                case Le:
                case Fe:
                case Me:
                case Ne:
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
    return W(e) === Oe;
  }
  $.AsyncMode = _t;
  $.ConcurrentMode = Oe;
  $.ContextConsumer = Ve;
  $.ContextProvider = Ne;
  $.Element = rt;
  $.ForwardRef = Le;
  $.Fragment = xe;
  $.Lazy = Fe;
  $.Memo = Me;
  $.Portal = lt;
  $.Profiler = Ae;
  $.StrictMode = Ce;
  $.Suspense = Ie;
  $.isAsyncMode = function (e) {
    return gi(e) || W(e) === _t;
  };
  $.isConcurrentMode = gi;
  $.isContextConsumer = function (e) {
    return W(e) === Ve;
  };
  $.isContextProvider = function (e) {
    return W(e) === Ne;
  };
  $.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === rt;
  };
  $.isForwardRef = function (e) {
    return W(e) === Le;
  };
  $.isFragment = function (e) {
    return W(e) === xe;
  };
  $.isLazy = function (e) {
    return W(e) === Fe;
  };
  $.isMemo = function (e) {
    return W(e) === Me;
  };
  $.isPortal = function (e) {
    return W(e) === lt;
  };
  $.isProfiler = function (e) {
    return W(e) === Ae;
  };
  $.isStrictMode = function (e) {
    return W(e) === Ce;
  };
  $.isSuspense = function (e) {
    return W(e) === Ie;
  };
  $.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === xe ||
      e === Oe ||
      e === Ae ||
      e === Ce ||
      e === Ie ||
      e === Ys ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Fe ||
          e.$$typeof === Me ||
          e.$$typeof === Ne ||
          e.$$typeof === Ve ||
          e.$$typeof === Le ||
          e.$$typeof === Zs ||
          e.$$typeof === Xs ||
          e.$$typeof === Qs ||
          e.$$typeof === Js))
    );
  };
  $.typeOf = W;
});
var bi = se((Fa, wi) => {
  "use strict";
  wi.exports = fi();
});
var Si = se((j) => {
  "use strict";
  var I = typeof Symbol == "function" && Symbol.for,
    ct = I ? Symbol.for("react.element") : 60103,
    ut = I ? Symbol.for("react.portal") : 60106,
    He = I ? Symbol.for("react.fragment") : 60107,
    Ue = I ? Symbol.for("react.strict_mode") : 60108,
    Be = I ? Symbol.for("react.profiler") : 60114,
    Ke = I ? Symbol.for("react.provider") : 60109,
    qe = I ? Symbol.for("react.context") : 60110,
    pt = I ? Symbol.for("react.async_mode") : 60111,
    Ge = I ? Symbol.for("react.concurrent_mode") : 60111,
    We = I ? Symbol.for("react.forward_ref") : 60112,
    Ye = I ? Symbol.for("react.suspense") : 60113,
    eo = I ? Symbol.for("react.suspense_list") : 60120,
    Je = I ? Symbol.for("react.memo") : 60115,
    Ze = I ? Symbol.for("react.lazy") : 60116,
    to = I ? Symbol.for("react.block") : 60121,
    io = I ? Symbol.for("react.fundamental") : 60117,
    so = I ? Symbol.for("react.responder") : 60118,
    oo = I ? Symbol.for("react.scope") : 60119;
  function Y(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ct:
          switch (((e = e.type), e)) {
            case pt:
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
        case ut:
          return t;
      }
    }
  }
  function ki(e) {
    return Y(e) === Ge;
  }
  j.AsyncMode = pt;
  j.ConcurrentMode = Ge;
  j.ContextConsumer = qe;
  j.ContextProvider = Ke;
  j.Element = ct;
  j.ForwardRef = We;
  j.Fragment = He;
  j.Lazy = Ze;
  j.Memo = Je;
  j.Portal = ut;
  j.Profiler = Be;
  j.StrictMode = Ue;
  j.Suspense = Ye;
  j.isAsyncMode = function (e) {
    return ki(e) || Y(e) === pt;
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
    return Y(e) === ut;
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
var zi = se((Ba, Pi) => {
  "use strict";
  Pi.exports = Si();
});
var xi = se((Ka, Di) => {
  "use strict";
  var dt = zi(),
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
  mt[dt.ForwardRef] = ro;
  mt[dt.Memo] = Ti;
  function $i(e) {
    return dt.isMemo(e) ? Ti : mt[e.$$typeof] || ao;
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
      for (var a = $i(e), n = $i(t), l = 0; l < o.length; ++l) {
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
      (0, oe.jsx)(Ps, { ...i, ...s, refMeasure: a }),
      (0, oe.jsx)(Ot.Provider, { value: n, children: t }),
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
    _ = Lt(),
    c = Nt(!1);
  return !_ && !c
    ? null
    : (0, oe.jsx)("div", {
        className: (0, Se.default)(ke.FocusRingRoot, t),
        ref: l,
        children: (0, oe.jsx)(zs, {
          refMeasure: a,
          className: (0, Se.default)(i, r && ke.DebugFocusRing),
          bFocusWithin: s && (c || r),
          navTarget: o,
          elContainer: n,
          bDebug: r,
        }),
      });
}
function zs(e) {
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
    [u, p] = F.default.useReducer((P) => P + 1, 0);
  Rt(
    n,
    F.default.useMemo(() => ({ MeasureElementAndUpdate: p }), []),
  );
  let { bActiveTree: d, bDisableFocusClasses: h } = Vt(),
    y = d && !h,
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
    }, [E, w, l, u]),
    !E || !l
      ? null
      : (0, Ht.createElement)($s, {
          ...l,
          key: _,
          className: (0, Se.default)(t, g && ke.FocusRingOnHiddenItem),
          target: s,
        })
  );
}
function $s(e) {
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
  yt = V(Jt());
function O() {
  return (
    (O = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i) ({}).hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
    O.apply(null, arguments)
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
    var u = s[c];
    u === "." ? et(s, c) : u === ".." ? (et(s, c), _++) : _ && (et(s, c), _--);
  }
  if (!n) for (; _--; _) s.unshift("..");
  n && s[0] !== "" && (!s[0] || !Re(s[0])) && s.unshift("");
  var p = s.join("/");
  return l && p.substr(-1) !== "/" && (p += "/"), p;
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
function ze(e) {
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
    : ((o = O({}, e)),
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
function Ns() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function Vs() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function Os(e) {
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
    s = !Ns(),
    o = e,
    a = o.forceRefresh,
    n = a === void 0 ? !1 : a,
    l = o.getUserConfirmation,
    r = l === void 0 ? ri : l,
    _ = o.keyLength,
    c = _ === void 0 ? 6 : _,
    u = e.basename ? ai(ze(e.basename)) : "";
  function p(k) {
    var R = k || {},
      m = R.key,
      v = R.state,
      z = window.location,
      x = z.pathname,
      Q = z.search,
      G = z.hash,
      q = x + Q + G;
    return u && (q = oi(q, u)), B(q, v, m);
  }
  function d() {
    return Math.random().toString(36).substr(2, c);
  }
  var h = st();
  function y(k) {
    O(X, k), (X.length = t.length), h.notifyListeners(X.location, X.action);
  }
  function g(k) {
    Os(k) || P(p(k.state));
  }
  function w() {
    P(p(ti()));
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
    var z = m - v;
    z && ((E = !0), N(z));
  }
  var D = p(ti()),
    T = [D.key];
  function b(k) {
    return u + H(k);
  }
  function f(k, R) {
    var m = "PUSH",
      v = B(k, R, d(), X.location);
    h.confirmTransitionTo(v, m, r, function (z) {
      if (z) {
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
  function M(k, R) {
    var m = "REPLACE",
      v = B(k, R, d(), X.location);
    h.confirmTransitionTo(v, m, r, function (z) {
      if (z) {
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
  function N(k) {
    t.go(k);
  }
  function U() {
    N(-1);
  }
  function Z() {
    N(1);
  }
  var ue = 0;
  function ie(k) {
    (ue += k),
      ue === 1 && k === 1
        ? (window.addEventListener(Qt, g), s && window.addEventListener(ei, w))
        : ue === 0 &&
          (window.removeEventListener(Qt, g),
          s && window.removeEventListener(ei, w));
  }
  var K = !1;
  function de(k) {
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
    replace: M,
    go: N,
    goBack: U,
    goForward: Z,
    block: de,
    listen: me,
  };
  return X;
}
var ii = "hashchange",
  Ls = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Xt(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Xt, decodePath: ze },
    slash: { encodePath: ze, decodePath: ze },
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
function Is(e) {
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
    r = e.basename ? ai(ze(e.basename)) : "",
    _ = Ls[l],
    c = _.encodePath,
    u = _.decodePath;
  function p() {
    var m = u(Pe());
    return r && (m = oi(m, r)), B(m);
  }
  var d = st();
  function h(m) {
    O(R, m), (R.length = t.length), d.notifyListeners(R.location, R.action);
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
      var z = p(),
        x = R.location;
      if ((!y && w(x, z)) || g === H(z)) return;
      (g = null), P(z);
    }
  }
  function P(m) {
    if (y) (y = !1), h();
    else {
      var v = "POP";
      d.confirmTransitionTo(m, v, a, function (z) {
        z ? h({ action: v, location: m }) : A(m);
      });
    }
  }
  function A(m) {
    var v = R.location,
      z = f.lastIndexOf(H(v));
    z === -1 && (z = 0);
    var x = f.lastIndexOf(H(m));
    x === -1 && (x = 0);
    var Q = z - x;
    Q && ((y = !0), Z(Q));
  }
  var D = Pe(),
    T = c(D);
  D !== T && it(T);
  var b = p(),
    f = [H(b)];
  function M(m) {
    var v = document.querySelector("base"),
      z = "";
    return (
      v && v.getAttribute("href") && (z = _i(window.location.href)),
      z + "#" + c(r + H(m))
    );
  }
  function N(m, v) {
    var z = "PUSH",
      x = B(m, void 0, void 0, R.location);
    d.confirmTransitionTo(x, z, a, function (Q) {
      if (Q) {
        var G = H(x),
          q = c(r + G),
          he = Pe() !== q;
        if (he) {
          (g = G), Is(q);
          var je = f.lastIndexOf(H(R.location)),
            jt = f.slice(0, je + 1);
          jt.push(G), (f = jt), h({ action: z, location: x });
        } else h();
      }
    });
  }
  function U(m, v) {
    var z = "REPLACE",
      x = B(m, void 0, void 0, R.location);
    d.confirmTransitionTo(x, z, a, function (Q) {
      if (Q) {
        var G = H(x),
          q = c(r + G),
          he = Pe() !== q;
        he && ((g = G), it(q));
        var je = f.indexOf(H(R.location));
        je !== -1 && (f[je] = G), h({ action: z, location: x });
      }
    });
  }
  function Z(m) {
    t.go(m);
  }
  function ue() {
    Z(-1);
  }
  function ie() {
    Z(1);
  }
  var K = 0;
  function de(m) {
    (K += m),
      K === 1 && m === 1
        ? window.addEventListener(ii, E)
        : K === 0 && window.removeEventListener(ii, E);
  }
  var me = !1;
  function X(m) {
    m === void 0 && (m = !1);
    var v = d.setPrompt(m);
    return (
      me || (de(1), (me = !0)),
      function () {
        return me && ((me = !1), de(-1)), v();
      }
    );
  }
  function k(m) {
    var v = d.appendListener(m);
    return (
      de(1),
      function () {
        de(-1), v();
      }
    );
  }
  var R = {
    length: t.length,
    action: "POP",
    location: b,
    createHref: M,
    push: N,
    replace: U,
    go: Z,
    goBack: ue,
    goForward: ie,
    block: X,
    listen: k,
  };
  return R;
}
function si(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
function ui(e) {
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
    O(b, f),
      (b.length = b.entries.length),
      _.notifyListeners(b.location, b.action);
  }
  function u() {
    return Math.random().toString(36).substr(2, r);
  }
  var p = si(n, 0, o.length - 1),
    d = o.map(function (f) {
      return typeof f == "string"
        ? B(f, void 0, u())
        : B(f, void 0, f.key || u());
    }),
    h = H;
  function y(f, M) {
    var N = "PUSH",
      U = B(f, M, u(), b.location);
    _.confirmTransitionTo(U, N, i, function (Z) {
      if (Z) {
        var ue = b.index,
          ie = ue + 1,
          K = b.entries.slice(0);
        K.length > ie ? K.splice(ie, K.length - ie, U) : K.push(U),
          c({ action: N, location: U, index: ie, entries: K });
      }
    });
  }
  function g(f, M) {
    var N = "REPLACE",
      U = B(f, M, u(), b.location);
    _.confirmTransitionTo(U, N, i, function (Z) {
      Z && ((b.entries[b.index] = U), c({ action: N, location: U }));
    });
  }
  function w(f) {
    var M = si(b.index + f, 0, b.entries.length - 1),
      N = "POP",
      U = b.entries[M];
    _.confirmTransitionTo(U, N, i, function (Z) {
      Z ? c({ action: N, location: U, index: M }) : c();
    });
  }
  function E() {
    w(-1);
  }
  function P() {
    w(1);
  }
  function A(f) {
    var M = b.index + f;
    return M >= 0 && M < b.entries.length;
  }
  function D(f) {
    return f === void 0 && (f = !1), _.setPrompt(f);
  }
  function T(f) {
    return _.appendListener(f);
  }
  var b = {
    length: d.length,
    action: "POP",
    location: d[p],
    index: p,
    entries: d,
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
var Li = V(yi()),
  Za = V(bi());
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
        for (var c, u = arguments.length, p = new Array(u), d = 0; d < u; d++)
          p[d] = arguments[d];
        return (
          (c = l.call.apply(l, [this].concat(p)) || this),
          (c.emitter = vo(c.props.value)),
          c
        );
      }
      var _ = r.prototype;
      return (
        (_.getChildContext = function () {
          var u;
          return (u = {}), (u[o] = this.emitter), u;
        }),
        (_.componentWillReceiveProps = function (u) {
          if (this.props.value !== u.value) {
            var p = this.props.value,
              d = u.value,
              h;
            ho(p, d)
              ? (h = 0)
              : ((h = typeof t == "function" ? t(p, d) : ht),
                (h |= 0),
                h !== 0 && this.emitter.set(u.value, h));
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
      for (var c, u = arguments.length, p = new Array(u), d = 0; d < u; d++)
        p[d] = arguments[d];
      return (
        (c = l.call.apply(l, [this].concat(p)) || this),
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
      (_.componentWillReceiveProps = function (u) {
        var p = u.observedBits;
        this.observedBits = p ?? ht;
      }),
      (_.componentDidMount = function () {
        this.context[o] && this.context[o].on(this.onUpdate);
        var u = this.props.observedBits;
        this.observedBits = u ?? ht;
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
  Ii = function (t) {
    var i = fo();
    return (i.displayName = t), i;
  },
  Mi = Ii("Router-History"),
  _e = Ii("Router"),
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
          C.default.createElement(Mi.Provider, {
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
        (s.history = ui(s.props)),
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
  Ni = 0;
function ko(e, t) {
  var i = "" + t.end + t.strict + t.sensitive,
    s = Ai[i] || (Ai[i] = {});
  if (s[e]) return s[e];
  var o = [],
    a = (0, Li.default)(e, o, t),
    n = { regexp: a, keys: o };
  return Ni < bo && ((s[e] = n), Ni++), n;
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
  return c.reduce(function (u, p) {
    if (!p && p !== "") return null;
    if (u) return u;
    var d = ko(p, { end: a, strict: l, sensitive: _ }),
      h = d.regexp,
      y = d.keys,
      g = h.exec(e);
    if (!g) return null;
    var w = g[0],
      E = g.slice(1),
      P = e === w;
    return a && !P
      ? null
      : {
          path: p,
          url: p === "/" && w === "" ? "/" : w,
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
          r = O({}, a, { location: n, match: l }),
          _ = o.props,
          c = _.children,
          u = _.component,
          p = _.render;
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
                : u
                  ? C.default.createElement(u, r)
                  : p
                    ? p(r)
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
function zo(e, t) {
  return e ? O({}, t, { pathname: gt(e) + t.pathname }) : t;
}
function $o(e, t) {
  if (!e) return t;
  var i = gt(e);
  return t.pathname.indexOf(i) !== 0
    ? t
    : O({}, t, { pathname: t.pathname.substr(i.length) });
}
function Vi(e) {
  return typeof e == "string" ? e : H(e);
}
function vt(e) {
  return function () {
    ae(!1);
  };
}
function Oi() {}
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
          return Oi;
        }),
        (s.handleBlock = function () {
          return Oi;
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
        (c.action = a), (c.location = zo(r, B(o))), (c.url = Vi(c.location));
      }),
      (i.render = function () {
        var o = this.props,
          a = o.basename,
          n = a === void 0 ? "" : a,
          l = o.context,
          r = l === void 0 ? {} : l,
          _ = o.location,
          c = _ === void 0 ? "/" : _,
          u = ye(o, ["basename", "context", "location"]),
          p = {
            createHref: function (h) {
              return gt(n + Vi(h));
            },
            action: "POP",
            location: $o(n, B(c)),
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
          O({}, u, { history: p, staticContext: r }),
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
                r = c ? fe(n.pathname, O({}, _.props, { path: c })) : a.match;
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
  return Fi(Mi);
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
      l = O({}, a, {
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
        u = c ? _.createHref(c) : "",
        p = O({}, l, {
          href: u,
          navigate: function () {
            var h = bt(a, r.location),
              y = H(r.location) === H(kt(h)),
              g = o || y ? _.replace : _.push;
            g(h);
          },
        });
      return (
        St !== we ? (p.ref = t || n) : (p.innerRef = n),
        te.default.createElement(s, p)
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
    u = e.sensitive,
    p = e.strict,
    d = e.style,
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
        ? fe(E.pathname, { path: D, exact: r, sensitive: u, strict: p })
        : null,
      b = !!(_ ? _(T, E) : T),
      f = typeof l == "function" ? l(b) : l,
      M = typeof d == "function" ? d(b) : d;
    b && ((f = xo(f, a)), (M = O({}, M, n)));
    var N = O(
      { "aria-current": (b && s) || null, className: f, style: M, to: P },
      g,
    );
    return (
      Hi !== Xe ? (N.ref = t || y) : (N.innerRef = y),
      te.default.createElement(Do, N)
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
      (u) => {
        if (l.current && ((r.current = u), !_.current)) {
          let p = o.location.pathname;
          _.current = window.setTimeout(() => {
            o.location.pathname == p &&
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
var zt = class {
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
var Qe = class extends zt {
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
          scrollTop: u,
          scrollHeight: p,
          clientHeight: d,
          scrollLeft: h,
          scrollWidth: y,
          clientWidth: g,
        } = e.current,
        w = a.current ?? u,
        E = n.current ?? h,
        P = 2;
      switch (c.detail.button) {
        case 9:
          if (w <= P) return !1;
          a.current = Math.max(0, w - d * o);
          break;
        case 10:
          if (w >= p - d - P) return !1;
          a.current = Math.min(p - d, w + d * o);
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
  return { ref: Mt(t), navRef: e };
}
var $e = {
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
        ...u
      } = t,
      p;
    switch (s) {
      case "x":
        p = $e.ScrollX;
        break;
      case "both":
        p = $e.ScrollBoth;
        break;
      case "y":
      default:
        p = $e.ScrollY;
        break;
    }
    let d = { ...c };
    (o || o === 0) && (d.scrollPaddingTop = o),
      (a || a === 0) && (d.scrollPaddingRight = a),
      (n || n === 0) && (d.scrollPaddingBottom = n),
      (l || l === 0) && (d.scrollPaddingLeft = l);
    let { ref: h, navRef: y } = Bi(),
      g = be(y, u.navRef),
      w = be(h, i);
    return (0, ce.jsx)(It, {
      ...u,
      style: d,
      className: (0, Ki.default)(r, $e.ScrollPanel, p),
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
  Nn = J.default.forwardRef(function (t, i) {
    let { name: s, msScrollRestoreDelay: o, onScroll: a, ...n } = t;
    return (0, ce.jsx)(Gi, {
      name: s,
      msScrollRestoreDelay: o,
      parentOnScroll: a,
      refDiv: i,
      children: (l, r) => (0, ce.jsx)(qi, { ...n, onScroll: l, ref: r }),
    });
  }),
  Vn = J.default.forwardRef(function (t, i) {
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
    u = J.default.useRef(0),
    p = J.default.useRef(),
    d = J.default.useCallback(
      (y) => {
        let { scrollTop: g, scrollLeft: w } = y.currentTarget;
        l(g), (c.current = g), _(w), (u.current = w), s && s(y);
      },
      [l, _, s],
    );
  J.default.useEffect(() => {
    let y = function () {
      p.current &&
        (Tt(
          p.current.scrollHeight >= n,
          `Element is ${p.current.scrollHeight} high but trying to restore scrollTop of ${n}, element may need more time to lay out.`,
          p.current,
        ),
        (c.current = n),
        (u.current = r),
        p.current.scrollTo({ top: n, left: r, behavior: "auto" }),
        p.current.dispatchEvent(new UIEvent("scroll")));
    };
    (n != c.current || r != u.current) && (i ? window.setTimeout(y, i) : y());
  }, [n, r, i]);
  let h = be(p, o);
  return J.default.useMemo(() => a(d, h), [d, h, a]);
}
var Wi = "./store_brazilian-W4KFJIAA.json";
var Yi = "./store_bulgarian-PM4R57BA.json";
var Ji = "./store_czech-7QAVRPCA.json";
var Zi = "./store_danish-OKGVSEBA.json";
var Xi = "./store_dutch-RX4JG3CA.json";
var Qi = "./store_english-UO6IOVCA.json";
var es = "./store_finnish-6EGZJ7AA.json";
var ts = "./store_french-7WL75OBA.json";
var is = "./store_german-XHGZPAAA.json";
var ss = "./store_greek-CELHFJDA.json";
var os = "./store_hungarian-A7CPLFCA.json";
var as = "./store_indonesian-F5MJ54CA.json";
var ns = "./store_italian-G4VJEKCA.json";
var rs = "./store_japanese-QC6M26CA.json";
var ls = "./store_koreana-FF33QFCA.json";
var _s = "./store_latam-ZOCACABA.json";
var cs = "./store_norwegian-SI4WYMAA.json";
var us = "./store_polish-5VIMHABA.json";
var ps = "./store_portuguese-DHCKCBAA.json";
var ds = "./store_romanian-RLNFWODA.json";
var ms = "./store_russian-QA5YLNDA.json";
var hs = "./store_schinese-SIIHG2CA.json";
var vs = "./store_spanish-3UJIXIDA.json";
var ys = "./store_swedish-75XIKOBA.json";
var gs = "./store_tchinese-HOCU32CA.json";
var fs = "./store_thai-4TPL35AA.json";
var ws = "./store_turkish-7F3GOUCA.json";
var bs = "./store_ukrainian-ZDUPAIDA.json";
var ks = "./store_vietnamese-V662OTBA.json";
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
S.polish = us;
S.portuguese = ps;
S.romanian = ds;
S.russian = ms;
S.schinese = hs;
S.spanish = vs;
S.swedish = ys;
S.tchinese = gs;
S.thai = fs;
S.turkish = ws;
S.ukrainian = bs;
S.vietnamese = ks;
async function $t(e) {
  if (S[e]) return (await fetch(new URL(S[e], import.meta.url))).json();
}
var Kr = Et($t);
export {
  Ft as a,
  xi as b,
  zt as c,
  O as d,
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

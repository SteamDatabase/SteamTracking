import { a as Vt } from "./chunk-QVSW5BYR.js";
import { a as At } from "./chunk-TVJSUJYQ.js";
import {
  A as Lt,
  b as Ct,
  r as Dt,
  v as Ft,
  y as Mt,
} from "./chunk-TJIBXEAD.js";
import { b as Re, f as _t, v as Ot } from "./chunk-ARXSSSYK.js";
import { a as xt } from "./chunk-RZSNYZTD.js";
import { c as Ht } from "./chunk-XPD6H46R.js";
import { h as Nt } from "./chunk-XAVWBSYL.js";
import { p as _e } from "./chunk-2JQZQ44F.js";
import { a as se } from "./chunk-7HR4H3FY.js";
import { c as re, e as H } from "./chunk-6LV3XD5Z.js";
var Bt = re((yo, It) => {
  "use strict";
  var Xr = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  It.exports = Xr;
});
var qt = re((go, Wt) => {
  "use strict";
  var Jr = Bt();
  function jt() {}
  function kt() {}
  kt.resetWarningCache = jt;
  Wt.exports = function () {
    function e(n, o, i, a, c, s) {
      if (s !== Jr) {
        var l = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((l.name = "Invariant Violation"), l);
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
      checkPropTypes: kt,
      resetWarningCache: jt,
    };
    return (r.PropTypes = r), r;
  };
});
var Gt = re((Po, Yt) => {
  "use strict";
  Yt.exports = qt()();
  var bo, Ro;
});
var lr = re((Fo, ur) => {
  "use strict";
  ur.exports =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    };
});
var hr = re((Mo, me) => {
  "use strict";
  var Ce = lr();
  me.exports = dr;
  me.exports.parse = nt;
  me.exports.compile = pn;
  me.exports.tokensToFunction = pr;
  me.exports.tokensToRegExp = fr;
  var un = new RegExp(
    [
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    ].join("|"),
    "g",
  );
  function nt(e, t) {
    for (
      var r = [], n = 0, o = 0, i = "", a = (t && t.delimiter) || "/", c;
      (c = un.exec(e)) != null;
    ) {
      var s = c[0],
        l = c[1],
        u = c.index;
      if (((i += e.slice(o, u)), (o = u + s.length), l)) {
        i += l[1];
        continue;
      }
      var p = e[o],
        f = c[2],
        d = c[3],
        m = c[4],
        y = c[5],
        g = c[6],
        R = c[7];
      i && (r.push(i), (i = ""));
      var _ = f != null && p != null && p !== f,
        T = g === "+" || g === "*",
        M = g === "?" || g === "*",
        C = f || a,
        x = m || y,
        P = f || (typeof r[r.length - 1] == "string" ? r[r.length - 1] : "");
      r.push({
        name: d || n++,
        prefix: f || "",
        delimiter: C,
        optional: M,
        repeat: T,
        partial: _,
        asterisk: !!R,
        pattern: x ? hn(x) : R ? ".*" : ln(C, P),
      });
    }
    return o < e.length && (i += e.substr(o)), i && r.push(i), r;
  }
  function ln(e, t) {
    return !t || t.indexOf(e) > -1
      ? "[^" + pe(e) + "]+?"
      : pe(t) + "|(?:(?!" + pe(t) + ")[^" + pe(e) + "])+?";
  }
  function pn(e, t) {
    return pr(nt(e, t), t);
  }
  function fn(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function dn(e) {
    return encodeURI(e).replace(/[?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function pr(e, t) {
    for (var r = new Array(e.length), n = 0; n < e.length; n++)
      typeof e[n] == "object" &&
        (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", it(t)));
    return function (o, i) {
      for (
        var a = "",
          c = o || {},
          s = i || {},
          l = s.pretty ? fn : encodeURIComponent,
          u = 0;
        u < e.length;
        u++
      ) {
        var p = e[u];
        if (typeof p == "string") {
          a += p;
          continue;
        }
        var f = c[p.name],
          d;
        if (f == null)
          if (p.optional) {
            p.partial && (a += p.prefix);
            continue;
          } else throw new TypeError('Expected "' + p.name + '" to be defined');
        if (Ce(f)) {
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
            if (((d = l(f[m])), !r[u].test(d)))
              throw new TypeError(
                'Expected all "' +
                  p.name +
                  '" to match "' +
                  p.pattern +
                  '", but received `' +
                  JSON.stringify(d) +
                  "`",
              );
            a += (m === 0 ? p.prefix : p.delimiter) + d;
          }
          continue;
        }
        if (((d = p.asterisk ? dn(f) : l(f)), !r[u].test(d)))
          throw new TypeError(
            'Expected "' +
              p.name +
              '" to match "' +
              p.pattern +
              '", but received "' +
              d +
              '"',
          );
        a += p.prefix + d;
      }
      return a;
    };
  }
  function pe(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  function hn(e) {
    return e.replace(/([=!:$\/()])/g, "\\$1");
  }
  function ot(e, t) {
    return (e.keys = t), e;
  }
  function it(e) {
    return e && e.sensitive ? "" : "i";
  }
  function mn(e, t) {
    var r = e.source.match(/\((?!\?)/g);
    if (r)
      for (var n = 0; n < r.length; n++)
        t.push({
          name: n,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          partial: !1,
          asterisk: !1,
          pattern: null,
        });
    return ot(e, t);
  }
  function vn(e, t, r) {
    for (var n = [], o = 0; o < e.length; o++) n.push(dr(e[o], t, r).source);
    var i = new RegExp("(?:" + n.join("|") + ")", it(r));
    return ot(i, t);
  }
  function yn(e, t, r) {
    return fr(nt(e, r), t, r);
  }
  function fr(e, t, r) {
    Ce(t) || ((r = t || r), (t = [])), (r = r || {});
    for (var n = r.strict, o = r.end !== !1, i = "", a = 0; a < e.length; a++) {
      var c = e[a];
      if (typeof c == "string") i += pe(c);
      else {
        var s = pe(c.prefix),
          l = "(?:" + c.pattern + ")";
        t.push(c),
          c.repeat && (l += "(?:" + s + l + ")*"),
          c.optional
            ? c.partial
              ? (l = s + "(" + l + ")?")
              : (l = "(?:" + s + "(" + l + "))?")
            : (l = s + "(" + l + ")"),
          (i += l);
      }
    }
    var u = pe(r.delimiter || "/"),
      p = i.slice(-u.length) === u;
    return (
      n || (i = (p ? i.slice(0, -u.length) : i) + "(?:" + u + "(?=$))?"),
      o ? (i += "$") : (i += n && p ? "" : "(?=" + u + "|$)"),
      ot(new RegExp("^" + i, it(r)), t)
    );
  }
  function dr(e, t, r) {
    return (
      Ce(t) || ((r = t || r), (t = [])),
      (r = r || {}),
      e instanceof RegExp ? mn(e, t) : Ce(e) ? vn(e, t, r) : yn(e, t, r)
    );
  }
});
var vr = re((S) => {
  "use strict";
  var V = typeof Symbol == "function" && Symbol.for,
    at = V ? Symbol.for("react.element") : 60103,
    st = V ? Symbol.for("react.portal") : 60106,
    De = V ? Symbol.for("react.fragment") : 60107,
    Fe = V ? Symbol.for("react.strict_mode") : 60108,
    Me = V ? Symbol.for("react.profiler") : 60114,
    Le = V ? Symbol.for("react.provider") : 60109,
    He = V ? Symbol.for("react.context") : 60110,
    ct = V ? Symbol.for("react.async_mode") : 60111,
    Ae = V ? Symbol.for("react.concurrent_mode") : 60111,
    Ve = V ? Symbol.for("react.forward_ref") : 60112,
    $e = V ? Symbol.for("react.suspense") : 60113,
    gn = V ? Symbol.for("react.suspense_list") : 60120,
    Ue = V ? Symbol.for("react.memo") : 60115,
    Ie = V ? Symbol.for("react.lazy") : 60116,
    bn = V ? Symbol.for("react.block") : 60121,
    Rn = V ? Symbol.for("react.fundamental") : 60117,
    Pn = V ? Symbol.for("react.responder") : 60118,
    En = V ? Symbol.for("react.scope") : 60119;
  function G(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case at:
          switch (((e = e.type), e)) {
            case ct:
            case Ae:
            case De:
            case Me:
            case Fe:
            case $e:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case He:
                case Ve:
                case Ie:
                case Ue:
                case Le:
                  return e;
                default:
                  return t;
              }
          }
        case st:
          return t;
      }
    }
  }
  function mr(e) {
    return G(e) === Ae;
  }
  S.AsyncMode = ct;
  S.ConcurrentMode = Ae;
  S.ContextConsumer = He;
  S.ContextProvider = Le;
  S.Element = at;
  S.ForwardRef = Ve;
  S.Fragment = De;
  S.Lazy = Ie;
  S.Memo = Ue;
  S.Portal = st;
  S.Profiler = Me;
  S.StrictMode = Fe;
  S.Suspense = $e;
  S.isAsyncMode = function (e) {
    return mr(e) || G(e) === ct;
  };
  S.isConcurrentMode = mr;
  S.isContextConsumer = function (e) {
    return G(e) === He;
  };
  S.isContextProvider = function (e) {
    return G(e) === Le;
  };
  S.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === at;
  };
  S.isForwardRef = function (e) {
    return G(e) === Ve;
  };
  S.isFragment = function (e) {
    return G(e) === De;
  };
  S.isLazy = function (e) {
    return G(e) === Ie;
  };
  S.isMemo = function (e) {
    return G(e) === Ue;
  };
  S.isPortal = function (e) {
    return G(e) === st;
  };
  S.isProfiler = function (e) {
    return G(e) === Me;
  };
  S.isStrictMode = function (e) {
    return G(e) === Fe;
  };
  S.isSuspense = function (e) {
    return G(e) === $e;
  };
  S.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === De ||
      e === Ae ||
      e === Me ||
      e === Fe ||
      e === $e ||
      e === gn ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Ie ||
          e.$$typeof === Ue ||
          e.$$typeof === Le ||
          e.$$typeof === He ||
          e.$$typeof === Ve ||
          e.$$typeof === Rn ||
          e.$$typeof === Pn ||
          e.$$typeof === En ||
          e.$$typeof === bn))
    );
  };
  S.typeOf = G;
});
var gr = re((Ho, yr) => {
  "use strict";
  yr.exports = vr();
});
var Rr = re((N) => {
  "use strict";
  var $ = typeof Symbol == "function" && Symbol.for,
    ut = $ ? Symbol.for("react.element") : 60103,
    lt = $ ? Symbol.for("react.portal") : 60106,
    Be = $ ? Symbol.for("react.fragment") : 60107,
    je = $ ? Symbol.for("react.strict_mode") : 60108,
    ke = $ ? Symbol.for("react.profiler") : 60114,
    We = $ ? Symbol.for("react.provider") : 60109,
    qe = $ ? Symbol.for("react.context") : 60110,
    pt = $ ? Symbol.for("react.async_mode") : 60111,
    Ye = $ ? Symbol.for("react.concurrent_mode") : 60111,
    Ge = $ ? Symbol.for("react.forward_ref") : 60112,
    Ke = $ ? Symbol.for("react.suspense") : 60113,
    Tn = $ ? Symbol.for("react.suspense_list") : 60120,
    ze = $ ? Symbol.for("react.memo") : 60115,
    Xe = $ ? Symbol.for("react.lazy") : 60116,
    wn = $ ? Symbol.for("react.block") : 60121,
    Sn = $ ? Symbol.for("react.fundamental") : 60117,
    Nn = $ ? Symbol.for("react.responder") : 60118,
    _n = $ ? Symbol.for("react.scope") : 60119;
  function K(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ut:
          switch (((e = e.type), e)) {
            case pt:
            case Ye:
            case Be:
            case ke:
            case je:
            case Ke:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case qe:
                case Ge:
                case Xe:
                case ze:
                case We:
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
  function br(e) {
    return K(e) === Ye;
  }
  N.AsyncMode = pt;
  N.ConcurrentMode = Ye;
  N.ContextConsumer = qe;
  N.ContextProvider = We;
  N.Element = ut;
  N.ForwardRef = Ge;
  N.Fragment = Be;
  N.Lazy = Xe;
  N.Memo = ze;
  N.Portal = lt;
  N.Profiler = ke;
  N.StrictMode = je;
  N.Suspense = Ke;
  N.isAsyncMode = function (e) {
    return br(e) || K(e) === pt;
  };
  N.isConcurrentMode = br;
  N.isContextConsumer = function (e) {
    return K(e) === qe;
  };
  N.isContextProvider = function (e) {
    return K(e) === We;
  };
  N.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === ut;
  };
  N.isForwardRef = function (e) {
    return K(e) === Ge;
  };
  N.isFragment = function (e) {
    return K(e) === Be;
  };
  N.isLazy = function (e) {
    return K(e) === Xe;
  };
  N.isMemo = function (e) {
    return K(e) === ze;
  };
  N.isPortal = function (e) {
    return K(e) === lt;
  };
  N.isProfiler = function (e) {
    return K(e) === ke;
  };
  N.isStrictMode = function (e) {
    return K(e) === je;
  };
  N.isSuspense = function (e) {
    return K(e) === Ke;
  };
  N.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Be ||
      e === Ye ||
      e === ke ||
      e === je ||
      e === Ke ||
      e === Tn ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Xe ||
          e.$$typeof === ze ||
          e.$$typeof === We ||
          e.$$typeof === qe ||
          e.$$typeof === Ge ||
          e.$$typeof === Sn ||
          e.$$typeof === Nn ||
          e.$$typeof === _n ||
          e.$$typeof === wn))
    );
  };
  N.typeOf = K;
});
var Er = re(($o, Pr) => {
  "use strict";
  Pr.exports = Rr();
});
var Or = re((Uo, xr) => {
  "use strict";
  var ft = Er(),
    xn = {
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
    On = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    Cn = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    Nr = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    dt = {};
  dt[ft.ForwardRef] = Cn;
  dt[ft.Memo] = Nr;
  function Tr(e) {
    return ft.isMemo(e) ? Nr : dt[e.$$typeof] || xn;
  }
  var Dn = Object.defineProperty,
    Fn = Object.getOwnPropertyNames,
    wr = Object.getOwnPropertySymbols,
    Mn = Object.getOwnPropertyDescriptor,
    Ln = Object.getPrototypeOf,
    Sr = Object.prototype;
  function _r(e, t, r) {
    if (typeof t != "string") {
      if (Sr) {
        var n = Ln(t);
        n && n !== Sr && _r(e, n, r);
      }
      var o = Fn(t);
      wr && (o = o.concat(wr(t)));
      for (var i = Tr(e), a = Tr(t), c = 0; c < o.length; ++c) {
        var s = o[c];
        if (!On[s] && !(r && r[s]) && !(a && a[s]) && !(i && i[s])) {
          var l = Mn(t, s);
          try {
            Dn(e, s, l);
          } catch {}
        }
      }
    }
    return e;
  }
  xr.exports = _r;
});
var I = H(se()),
  Ee = H(xt());
var Pe = {
  FocusRingRoot: "zMwifnPqWAI-",
  FocusRing: "G7jPexLcZ14-",
  flash: "FLDEa7rRhyY-",
  growOutline: "nWDadfKww6s-",
  fadeOutline: "N5-VUB--qfQ-",
  blinker: "ppcisOXf8KU-",
  DebugFocusRing: "wakyoxMBdvA-",
  FocusRingOnHiddenItem: "Ubvx1pqfMh8-",
};
var ne = H(_e()),
  Ut = H(se()),
  qr = new Ct("FocusNavigation").Debug;
function $t(e) {
  let { children: t, disableFocusRing: r, ...n } = e,
    [o, i] = I.default.useState({
      bFocusWithin: !1,
      navTarget: null,
      prevTarget: null,
    }),
    a = I.default.useRef(null),
    c = I.default.useMemo(
      () => ({
        OnBlur: (s, l, u) => {
          i({ bFocusWithin: !1, navTarget: null, prevTarget: null });
        },
        OnFocus: (s, l, u) => {
          i({ bFocusWithin: !0, navTarget: l, prevTarget: null });
        },
        OnFocusChange: (s, l, u) => {
          i({ bFocusWithin: !0, navTarget: u, prevTarget: l });
        },
        OnForceMeasureFocusRing: () => {
          a.current?.MeasureElementAndUpdate();
        },
      }),
      [i],
    );
  return (0, ne.jsxs)(ne.Fragment, {
    children: [
      !r && (0, ne.jsx)(Yr, { ...n, ...o, refMeasure: a }),
      (0, ne.jsx)(Lt.Provider, { value: c, children: t }),
    ],
  });
}
function Yr(e) {
  let {
      rootClassName: t,
      className: r,
      bFocusWithin: n,
      navTarget: o,
      refMeasure: i,
    } = e,
    [a, c] = I.default.useState(null),
    s = Dt(),
    l = Ht(),
    u = Ft(!1);
  return !l && !u
    ? null
    : (0, ne.jsx)("div", {
        className: (0, Ee.default)(Pe.FocusRingRoot, t),
        ref: c,
        children: (0, ne.jsx)(Gr, {
          refMeasure: i,
          className: (0, Ee.default)(r, s && Pe.DebugFocusRing),
          bFocusWithin: n && (u || s),
          navTarget: o,
          elContainer: a,
          bDebug: s,
        }),
      });
}
function Gr(e) {
  let {
      className: t,
      bFocusWithin: r,
      navTarget: n,
      elContainer: o,
      bDebug: i,
      refMeasure: a,
    } = e,
    [c, s] = I.default.useState(null),
    [l, u] = I.default.useReducer((T) => T + 1, 0),
    [p, f] = I.default.useReducer((T) => T + 1, 0);
  _t(
    a,
    I.default.useMemo(() => ({ MeasureElementAndUpdate: f }), []),
  );
  let { bActiveTree: d, bDisableFocusClasses: m } = Mt(),
    y = d && !m,
    g = zr(i, n),
    R = I.default.useCallback(() => {
      if (!n || !n.BWantsFocusRing() || !o || !y) {
        s(null);
        return;
      }
      let T = n.GetBoundingRect(),
        M = o.getBoundingClientRect(),
        C = {
          left: T.x - M.x,
          top: T.y - M.y,
          height: T.height,
          width: T.width,
        };
      s((x) =>
        !x ||
        C.left != x.left ||
        C.top != x.top ||
        C.height != x.height ||
        C.width != x.width
          ? C
          : x,
      );
    }, [n, o, y]);
  I.default.useLayoutEffect(() => R(), [R]),
    I.default.useLayoutEffect(() => {
      u();
    }, [n]);
  let _ = r;
  return (
    n && o && (n.BWantsFocusRing() || (_ = !1)),
    I.default.useEffect(() => {
      if (!_) return;
      let T = performance.now(),
        M,
        C = () => {
          R(), performance.now() - T <= 500 && (M = requestAnimationFrame(C));
        };
      return C(), () => cancelAnimationFrame(M);
    }, [_, R, c, p]),
    !_ || !c
      ? null
      : (0, Ut.createElement)(Kr, {
          ...c,
          key: l,
          className: (0, Ee.default)(t, g && Pe.FocusRingOnHiddenItem),
          target: n,
        })
  );
}
function Kr(e) {
  let { className: t, left: r, top: n, height: o, width: i, target: a } = e,
    c = 0,
    s = {
      left: (r ?? 0) - c + "px",
      top: (n ?? 0) - c + "px",
      height: o + "px",
      width: i + "px",
    };
  return (0, ne.jsx)("div", {
    className: (0, Ee.default)(Pe.FocusRing, t),
    style: s,
  });
}
function zr(e, t) {
  let [r, n] = I.default.useState(!1);
  return (
    (0, I.useEffect)(() => {
      if (e && t) {
        let o = t.GetBoundingRect(),
          i = t.Element,
          a = i.ownerDocument.defaultView,
          c = (l) =>
            a.getComputedStyle(l).display == "none" ||
            (o?.width == 0 && o.height == 0 && o.x == 0 && o.y == 0);
        for (; c(i) && i?.parentElement; )
          (i = i.parentElement), (o = i.getBoundingClientRect());
        let s = t.Element != i;
        n(
          (l) => (
            s &&
              s != l &&
              qr(
                "Focused on hidden item: ",
                t.Element,
                ". Closest visible ancestor: ",
                i,
              ),
            s
          ),
        );
      }
    }, [e, t]),
    r
  );
}
var jr = H(xt()),
  z = H(se());
var ie = H(se());
function xe(e, t) {
  return (
    (xe = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    xe(e, t)
  );
}
function Z(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    xe(e, t);
}
var F = H(se()),
  vt = H(Gt());
function A() {
  return (
    (A = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    A.apply(null, arguments)
  );
}
function Oe(e) {
  return e.charAt(0) === "/";
}
function Ze(e, t) {
  for (var r = t, n = r + 1, o = e.length; n < o; r += 1, n += 1) e[r] = e[n];
  e.pop();
}
function Qr(e, t) {
  t === void 0 && (t = "");
  var r = (e && e.split("/")) || [],
    n = (t && t.split("/")) || [],
    o = e && Oe(e),
    i = t && Oe(t),
    a = o || i;
  if (
    (e && Oe(e) ? (n = r) : r.length && (n.pop(), (n = n.concat(r))), !n.length)
  )
    return "/";
  var c;
  if (n.length) {
    var s = n[n.length - 1];
    c = s === "." || s === ".." || s === "";
  } else c = !1;
  for (var l = 0, u = n.length; u >= 0; u--) {
    var p = n[u];
    p === "." ? Ze(n, u) : p === ".." ? (Ze(n, u), l++) : l && (Ze(n, u), l--);
  }
  if (!a) for (; l--; l) n.unshift("..");
  a && n[0] !== "" && (!n[0] || !Oe(n[0])) && n.unshift("");
  var f = n.join("/");
  return c && f.substr(-1) !== "/" && (f += "/"), f;
}
var Kt = Qr;
var Zr = !0,
  et = "Invariant failed";
function oe(e, t) {
  if (!e) {
    if (Zr) throw new Error(et);
    var r = typeof t == "function" ? t() : t,
      n = r ? "".concat(et, ": ").concat(r) : et;
    throw new Error(n);
  }
}
function we(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function zt(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function en(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function tr(e, t) {
  return en(e, t) ? e.substr(t.length) : e;
}
function rr(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function tn(e) {
  var t = e || "/",
    r = "",
    n = "",
    o = t.indexOf("#");
  o !== -1 && ((n = t.substr(o)), (t = t.substr(0, o)));
  var i = t.indexOf("?");
  return (
    i !== -1 && ((r = t.substr(i)), (t = t.substr(0, i))),
    { pathname: t, search: r === "?" ? "" : r, hash: n === "#" ? "" : n }
  );
}
function B(e) {
  var t = e.pathname,
    r = e.search,
    n = e.hash,
    o = t || "/";
  return (
    r && r !== "?" && (o += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (o += n.charAt(0) === "#" ? n : "#" + n),
    o
  );
}
function k(e, t, r, n) {
  var o;
  typeof e == "string"
    ? ((o = tn(e)), (o.state = t))
    : ((o = A({}, e)),
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
  } catch (i) {
    throw i instanceof URIError
      ? new URIError(
          'Pathname "' +
            o.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.',
        )
      : i;
  }
  return (
    r && (o.key = r),
    n
      ? o.pathname
        ? o.pathname.charAt(0) !== "/" &&
          (o.pathname = Kt(o.pathname, n.pathname))
        : (o.pathname = n.pathname)
      : o.pathname || (o.pathname = "/"),
    o
  );
}
function rt() {
  var e = null;
  function t(a) {
    return (
      (e = a),
      function () {
        e === a && (e = null);
      }
    );
  }
  function r(a, c, s, l) {
    if (e != null) {
      var u = typeof e == "function" ? e(a, c) : e;
      typeof u == "string"
        ? typeof s == "function"
          ? s(u, l)
          : l(!0)
        : l(u !== !1);
    } else l(!0);
  }
  var n = [];
  function o(a) {
    var c = !0;
    function s() {
      c && a.apply(void 0, arguments);
    }
    return (
      n.push(s),
      function () {
        (c = !1),
          (n = n.filter(function (l) {
            return l !== s;
          }));
      }
    );
  }
  function i() {
    for (var a = arguments.length, c = new Array(a), s = 0; s < a; s++)
      c[s] = arguments[s];
    n.forEach(function (l) {
      return l.apply(void 0, c);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: r,
    appendListener: o,
    notifyListeners: i,
  };
}
var nr = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function or(e, t) {
  t(window.confirm(e));
}
function rn() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function nn() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function on() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function an(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Xt = "popstate",
  Jt = "hashchange";
function Qt() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function ir(e) {
  e === void 0 && (e = {}), nr || oe(!1);
  var t = window.history,
    r = rn(),
    n = !nn(),
    o = e,
    i = o.forceRefresh,
    a = i === void 0 ? !1 : i,
    c = o.getUserConfirmation,
    s = c === void 0 ? or : c,
    l = o.keyLength,
    u = l === void 0 ? 6 : l,
    p = e.basename ? rr(we(e.basename)) : "";
  function f(E) {
    var O = E || {},
      h = O.key,
      v = O.state,
      w = window.location,
      D = w.pathname,
      Q = w.search,
      Y = w.hash,
      q = D + Q + Y;
    return p && (q = tr(q, p)), k(q, v, h);
  }
  function d() {
    return Math.random().toString(36).substr(2, u);
  }
  var m = rt();
  function y(E) {
    A(J, E), (J.length = t.length), m.notifyListeners(J.location, J.action);
  }
  function g(E) {
    an(E) || T(f(E.state));
  }
  function R() {
    T(f(Qt()));
  }
  var _ = !1;
  function T(E) {
    if (_) (_ = !1), y();
    else {
      var O = "POP";
      m.confirmTransitionTo(E, O, s, function (h) {
        h ? y({ action: O, location: E }) : M(E);
      });
    }
  }
  function M(E) {
    var O = J.location,
      h = x.indexOf(O.key);
    h === -1 && (h = 0);
    var v = x.indexOf(E.key);
    v === -1 && (v = 0);
    var w = h - v;
    w && ((_ = !0), L(w));
  }
  var C = f(Qt()),
    x = [C.key];
  function P(E) {
    return p + B(E);
  }
  function b(E, O) {
    var h = "PUSH",
      v = k(E, O, d(), J.location);
    m.confirmTransitionTo(v, h, s, function (w) {
      if (w) {
        var D = P(v),
          Q = v.key,
          Y = v.state;
        if (r)
          if ((t.pushState({ key: Q, state: Y }, null, D), a))
            window.location.href = D;
          else {
            var q = x.indexOf(J.location.key),
              he = x.slice(0, q + 1);
            he.push(v.key), (x = he), y({ action: h, location: v });
          }
        else window.location.href = D;
      }
    });
  }
  function U(E, O) {
    var h = "REPLACE",
      v = k(E, O, d(), J.location);
    m.confirmTransitionTo(v, h, s, function (w) {
      if (w) {
        var D = P(v),
          Q = v.key,
          Y = v.state;
        if (r)
          if ((t.replaceState({ key: Q, state: Y }, null, D), a))
            window.location.replace(D);
          else {
            var q = x.indexOf(J.location.key);
            q !== -1 && (x[q] = v.key), y({ action: h, location: v });
          }
        else window.location.replace(D);
      }
    });
  }
  function L(E) {
    t.go(E);
  }
  function j() {
    L(-1);
  }
  function X() {
    L(1);
  }
  var le = 0;
  function te(E) {
    (le += E),
      le === 1 && E === 1
        ? (window.addEventListener(Xt, g), n && window.addEventListener(Jt, R))
        : le === 0 &&
          (window.removeEventListener(Xt, g),
          n && window.removeEventListener(Jt, R));
  }
  var W = !1;
  function fe(E) {
    E === void 0 && (E = !1);
    var O = m.setPrompt(E);
    return (
      W || (te(1), (W = !0)),
      function () {
        return W && ((W = !1), te(-1)), O();
      }
    );
  }
  function de(E) {
    var O = m.appendListener(E);
    return (
      te(1),
      function () {
        te(-1), O();
      }
    );
  }
  var J = {
    length: t.length,
    action: "POP",
    location: C,
    createHref: P,
    push: b,
    replace: U,
    go: L,
    goBack: j,
    goForward: X,
    block: fe,
    listen: de,
  };
  return J;
}
var Zt = "hashchange",
  sn = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + zt(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: zt, decodePath: we },
    slash: { encodePath: we, decodePath: we },
  };
function ar(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function Te() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function cn(e) {
  window.location.hash = e;
}
function tt(e) {
  window.location.replace(ar(window.location.href) + "#" + e);
}
function sr(e) {
  e === void 0 && (e = {}), nr || oe(!1);
  var t = window.history,
    r = on(),
    n = e,
    o = n.getUserConfirmation,
    i = o === void 0 ? or : o,
    a = n.hashType,
    c = a === void 0 ? "slash" : a,
    s = e.basename ? rr(we(e.basename)) : "",
    l = sn[c],
    u = l.encodePath,
    p = l.decodePath;
  function f() {
    var h = p(Te());
    return s && (h = tr(h, s)), k(h);
  }
  var d = rt();
  function m(h) {
    A(O, h), (O.length = t.length), d.notifyListeners(O.location, O.action);
  }
  var y = !1,
    g = null;
  function R(h, v) {
    return (
      h.pathname === v.pathname && h.search === v.search && h.hash === v.hash
    );
  }
  function _() {
    var h = Te(),
      v = u(h);
    if (h !== v) tt(v);
    else {
      var w = f(),
        D = O.location;
      if ((!y && R(D, w)) || g === B(w)) return;
      (g = null), T(w);
    }
  }
  function T(h) {
    if (y) (y = !1), m();
    else {
      var v = "POP";
      d.confirmTransitionTo(h, v, i, function (w) {
        w ? m({ action: v, location: h }) : M(h);
      });
    }
  }
  function M(h) {
    var v = O.location,
      w = b.lastIndexOf(B(v));
    w === -1 && (w = 0);
    var D = b.lastIndexOf(B(h));
    D === -1 && (D = 0);
    var Q = w - D;
    Q && ((y = !0), X(Q));
  }
  var C = Te(),
    x = u(C);
  C !== x && tt(x);
  var P = f(),
    b = [B(P)];
  function U(h) {
    var v = document.querySelector("base"),
      w = "";
    return (
      v && v.getAttribute("href") && (w = ar(window.location.href)),
      w + "#" + u(s + B(h))
    );
  }
  function L(h, v) {
    var w = "PUSH",
      D = k(h, void 0, void 0, O.location);
    d.confirmTransitionTo(D, w, i, function (Q) {
      if (Q) {
        var Y = B(D),
          q = u(s + Y),
          he = Te() !== q;
        if (he) {
          (g = Y), cn(q);
          var Ne = b.lastIndexOf(B(O.location)),
            St = b.slice(0, Ne + 1);
          St.push(Y), (b = St), m({ action: w, location: D });
        } else m();
      }
    });
  }
  function j(h, v) {
    var w = "REPLACE",
      D = k(h, void 0, void 0, O.location);
    d.confirmTransitionTo(D, w, i, function (Q) {
      if (Q) {
        var Y = B(D),
          q = u(s + Y),
          he = Te() !== q;
        he && ((g = Y), tt(q));
        var Ne = b.indexOf(B(O.location));
        Ne !== -1 && (b[Ne] = Y), m({ action: w, location: D });
      }
    });
  }
  function X(h) {
    t.go(h);
  }
  function le() {
    X(-1);
  }
  function te() {
    X(1);
  }
  var W = 0;
  function fe(h) {
    (W += h),
      W === 1 && h === 1
        ? window.addEventListener(Zt, _)
        : W === 0 && window.removeEventListener(Zt, _);
  }
  var de = !1;
  function J(h) {
    h === void 0 && (h = !1);
    var v = d.setPrompt(h);
    return (
      de || (fe(1), (de = !0)),
      function () {
        return de && ((de = !1), fe(-1)), v();
      }
    );
  }
  function E(h) {
    var v = d.appendListener(h);
    return (
      fe(1),
      function () {
        fe(-1), v();
      }
    );
  }
  var O = {
    length: t.length,
    action: "POP",
    location: P,
    createHref: U,
    push: L,
    replace: j,
    go: X,
    goBack: le,
    goForward: te,
    block: J,
    listen: E,
  };
  return O;
}
function er(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function cr(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.getUserConfirmation,
    n = t.initialEntries,
    o = n === void 0 ? ["/"] : n,
    i = t.initialIndex,
    a = i === void 0 ? 0 : i,
    c = t.keyLength,
    s = c === void 0 ? 6 : c,
    l = rt();
  function u(b) {
    A(P, b),
      (P.length = P.entries.length),
      l.notifyListeners(P.location, P.action);
  }
  function p() {
    return Math.random().toString(36).substr(2, s);
  }
  var f = er(a, 0, o.length - 1),
    d = o.map(function (b) {
      return typeof b == "string"
        ? k(b, void 0, p())
        : k(b, void 0, b.key || p());
    }),
    m = B;
  function y(b, U) {
    var L = "PUSH",
      j = k(b, U, p(), P.location);
    l.confirmTransitionTo(j, L, r, function (X) {
      if (X) {
        var le = P.index,
          te = le + 1,
          W = P.entries.slice(0);
        W.length > te ? W.splice(te, W.length - te, j) : W.push(j),
          u({ action: L, location: j, index: te, entries: W });
      }
    });
  }
  function g(b, U) {
    var L = "REPLACE",
      j = k(b, U, p(), P.location);
    l.confirmTransitionTo(j, L, r, function (X) {
      X && ((P.entries[P.index] = j), u({ action: L, location: j }));
    });
  }
  function R(b) {
    var U = er(P.index + b, 0, P.entries.length - 1),
      L = "POP",
      j = P.entries[U];
    l.confirmTransitionTo(j, L, r, function (X) {
      X ? u({ action: L, location: j, index: U }) : u();
    });
  }
  function _() {
    R(-1);
  }
  function T() {
    R(1);
  }
  function M(b) {
    var U = P.index + b;
    return U >= 0 && U < P.entries.length;
  }
  function C(b) {
    return b === void 0 && (b = !1), l.setPrompt(b);
  }
  function x(b) {
    return l.appendListener(b);
  }
  var P = {
    length: d.length,
    action: "POP",
    location: d[f],
    index: f,
    entries: d,
    createHref: m,
    push: y,
    replace: g,
    go: R,
    goBack: _,
    goForward: T,
    canGo: M,
    block: C,
    listen: x,
  };
  return P;
}
var Hr = H(hr()),
  qo = H(gr());
function ve(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var Hn = H(Or()),
  ht = 1073741823,
  Cr =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
function An() {
  var e = "__global_unique_id__";
  return (Cr[e] = (Cr[e] || 0) + 1);
}
function Vn(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function $n(e) {
  var t = [];
  return {
    on: function (n) {
      t.push(n);
    },
    off: function (n) {
      t = t.filter(function (o) {
        return o !== n;
      });
    },
    get: function () {
      return e;
    },
    set: function (n, o) {
      (e = n),
        t.forEach(function (i) {
          return i(e, o);
        });
    },
  };
}
function Un(e) {
  return Array.isArray(e) ? e[0] : e;
}
function In(e, t) {
  var r,
    n,
    o = "__create-react-context-" + An() + "__",
    i = (function (c) {
      Z(s, c);
      function s() {
        for (var u, p = arguments.length, f = new Array(p), d = 0; d < p; d++)
          f[d] = arguments[d];
        return (
          (u = c.call.apply(c, [this].concat(f)) || this),
          (u.emitter = $n(u.props.value)),
          u
        );
      }
      var l = s.prototype;
      return (
        (l.getChildContext = function () {
          var p;
          return (p = {}), (p[o] = this.emitter), p;
        }),
        (l.componentWillReceiveProps = function (p) {
          if (this.props.value !== p.value) {
            var f = this.props.value,
              d = p.value,
              m;
            Vn(f, d)
              ? (m = 0)
              : ((m = typeof t == "function" ? t(f, d) : ht),
                (m |= 0),
                m !== 0 && this.emitter.set(p.value, m));
          }
        }),
        (l.render = function () {
          return this.props.children;
        }),
        s
      );
    })(F.default.Component);
  i.childContextTypes = ((r = {}), (r[o] = vt.default.object.isRequired), r);
  var a = (function (c) {
    Z(s, c);
    function s() {
      for (var u, p = arguments.length, f = new Array(p), d = 0; d < p; d++)
        f[d] = arguments[d];
      return (
        (u = c.call.apply(c, [this].concat(f)) || this),
        (u.observedBits = void 0),
        (u.state = { value: u.getValue() }),
        (u.onUpdate = function (m, y) {
          var g = u.observedBits | 0;
          g & y && u.setState({ value: u.getValue() });
        }),
        u
      );
    }
    var l = s.prototype;
    return (
      (l.componentWillReceiveProps = function (p) {
        var f = p.observedBits;
        this.observedBits = f ?? ht;
      }),
      (l.componentDidMount = function () {
        this.context[o] && this.context[o].on(this.onUpdate);
        var p = this.props.observedBits;
        this.observedBits = p ?? ht;
      }),
      (l.componentWillUnmount = function () {
        this.context[o] && this.context[o].off(this.onUpdate);
      }),
      (l.getValue = function () {
        return this.context[o] ? this.context[o].get() : e;
      }),
      (l.render = function () {
        return Un(this.props.children)(this.state.value);
      }),
      s
    );
  })(F.default.Component);
  return (
    (a.contextTypes = ((n = {}), (n[o] = vt.default.object), n)),
    { Provider: i, Consumer: a }
  );
}
var Bn = F.default.createContext || In,
  Ar = function (t) {
    var r = Bn();
    return (r.displayName = t), r;
  },
  Vr = Ar("Router-History"),
  ce = Ar("Router"),
  ye = (function (e) {
    Z(t, e),
      (t.computeRootMatch = function (o) {
        return { path: "/", url: "/", params: {}, isExact: o === "/" };
      });
    function t(n) {
      var o;
      return (
        (o = e.call(this, n) || this),
        (o.state = { location: n.history.location }),
        (o._isMounted = !1),
        (o._pendingLocation = null),
        n.staticContext ||
          (o.unlisten = n.history.listen(function (i) {
            o._pendingLocation = i;
          })),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        var o = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (i) {
              o._isMounted && o.setState({ location: i });
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
        return F.default.createElement(
          ce.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          F.default.createElement(Vr.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          }),
        );
      }),
      t
    );
  })(F.default.Component),
  jn = (function (e) {
    Z(t, e);
    function t() {
      for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (n = e.call.apply(e, [this].concat(i)) || this),
        (n.history = cr(n.props)),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return F.default.createElement(ye, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(F.default.Component),
  Ko = (function (e) {
    Z(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (r.componentDidUpdate = function (o) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, o);
      }),
      (r.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (r.render = function () {
        return null;
      }),
      t
    );
  })(F.default.Component);
var Dr = {},
  kn = 1e4,
  Fr = 0;
function Wn(e, t) {
  var r = "" + t.end + t.strict + t.sensitive,
    n = Dr[r] || (Dr[r] = {});
  if (n[e]) return n[e];
  var o = [],
    i = (0, Hr.default)(e, o, t),
    a = { regexp: i, keys: o };
  return Fr < kn && ((n[e] = a), Fr++), a;
}
function ge(e, t) {
  t === void 0 && (t = {}),
    (typeof t == "string" || Array.isArray(t)) && (t = { path: t });
  var r = t,
    n = r.path,
    o = r.exact,
    i = o === void 0 ? !1 : o,
    a = r.strict,
    c = a === void 0 ? !1 : a,
    s = r.sensitive,
    l = s === void 0 ? !1 : s,
    u = [].concat(n);
  return u.reduce(function (p, f) {
    if (!f && f !== "") return null;
    if (p) return p;
    var d = Wn(f, { end: i, strict: c, sensitive: l }),
      m = d.regexp,
      y = d.keys,
      g = m.exec(e);
    if (!g) return null;
    var R = g[0],
      _ = g.slice(1),
      T = e === R;
    return i && !T
      ? null
      : {
          path: f,
          url: f === "/" && R === "" ? "/" : R,
          isExact: T,
          params: y.reduce(function (M, C, x) {
            return (M[C.name] = _[x]), M;
          }, {}),
        };
  }, null);
}
function qn(e) {
  return F.default.Children.count(e) === 0;
}
var Yn = (function (e) {
  Z(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return (
    (r.render = function () {
      var o = this;
      return F.default.createElement(ce.Consumer, null, function (i) {
        i || oe(!1);
        var a = o.props.location || i.location,
          c = o.props.computedMatch
            ? o.props.computedMatch
            : o.props.path
              ? ge(a.pathname, o.props)
              : i.match,
          s = A({}, i, { location: a, match: c }),
          l = o.props,
          u = l.children,
          p = l.component,
          f = l.render;
        return (
          Array.isArray(u) && qn(u) && (u = null),
          F.default.createElement(
            ce.Provider,
            { value: s },
            s.match
              ? u
                ? typeof u == "function"
                  ? u(s)
                  : u
                : p
                  ? F.default.createElement(p, s)
                  : f
                    ? f(s)
                    : null
              : typeof u == "function"
                ? u(s)
                : null,
          )
        );
      });
    }),
    t
  );
})(F.default.Component);
function yt(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Gn(e, t) {
  return e ? A({}, t, { pathname: yt(e) + t.pathname }) : t;
}
function Kn(e, t) {
  if (!e) return t;
  var r = yt(e);
  return t.pathname.indexOf(r) !== 0
    ? t
    : A({}, t, { pathname: t.pathname.substr(r.length) });
}
function Mr(e) {
  return typeof e == "string" ? e : B(e);
}
function mt(e) {
  return function () {
    oe(!1);
  };
}
function Lr() {}
var zn = (function (e) {
    Z(t, e);
    function t() {
      for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (n = e.call.apply(e, [this].concat(i)) || this),
        (n.handlePush = function (c) {
          return n.navigateTo(c, "PUSH");
        }),
        (n.handleReplace = function (c) {
          return n.navigateTo(c, "REPLACE");
        }),
        (n.handleListen = function () {
          return Lr;
        }),
        (n.handleBlock = function () {
          return Lr;
        }),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.navigateTo = function (o, i) {
        var a = this.props,
          c = a.basename,
          s = c === void 0 ? "" : c,
          l = a.context,
          u = l === void 0 ? {} : l;
        (u.action = i), (u.location = Gn(s, k(o))), (u.url = Mr(u.location));
      }),
      (r.render = function () {
        var o = this.props,
          i = o.basename,
          a = i === void 0 ? "" : i,
          c = o.context,
          s = c === void 0 ? {} : c,
          l = o.location,
          u = l === void 0 ? "/" : l,
          p = ve(o, ["basename", "context", "location"]),
          f = {
            createHref: function (m) {
              return yt(a + Mr(m));
            },
            action: "POP",
            location: Kn(a, k(u)),
            push: this.handlePush,
            replace: this.handleReplace,
            go: mt("go"),
            goBack: mt("goBack"),
            goForward: mt("goForward"),
            listen: this.handleListen,
            block: this.handleBlock,
          };
        return F.default.createElement(
          ye,
          A({}, p, { history: f, staticContext: s }),
        );
      }),
      t
    );
  })(F.default.Component),
  Xn = (function (e) {
    Z(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        var o = this;
        return F.default.createElement(ce.Consumer, null, function (i) {
          i || oe(!1);
          var a = o.props.location || i.location,
            c,
            s;
          return (
            F.default.Children.forEach(o.props.children, function (l) {
              if (s == null && F.default.isValidElement(l)) {
                c = l;
                var u = l.props.path || l.props.from;
                s = u ? ge(a.pathname, A({}, l.props, { path: u })) : i.match;
              }
            }),
            s
              ? F.default.cloneElement(c, { location: a, computedMatch: s })
              : null
          );
        });
      }),
      t
    );
  })(F.default.Component);
var $r = F.default.useContext;
function gt() {
  return $r(Vr);
}
function bt() {
  return $r(ce).location;
}
var ee = H(se());
var ci = (function (e) {
    Z(t, e);
    function t() {
      for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (n = e.call.apply(e, [this].concat(i)) || this),
        (n.history = ir(n.props)),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return ee.default.createElement(ye, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(ee.default.Component),
  ui = (function (e) {
    Z(t, e);
    function t() {
      for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (n = e.call.apply(e, [this].concat(i)) || this),
        (n.history = sr(n.props)),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return ee.default.createElement(ye, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(ee.default.Component),
  Rt = function (t, r) {
    return typeof t == "function" ? t(r) : t;
  },
  Pt = function (t, r) {
    return typeof t == "string" ? k(t, null, null, r) : t;
  },
  Et = function (t) {
    return t;
  },
  be = ee.default.forwardRef;
typeof be > "u" && (be = Et);
function Jn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Qn = be(function (e, t) {
    var r = e.innerRef,
      n = e.navigate,
      o = e.onClick,
      i = ve(e, ["innerRef", "navigate", "onClick"]),
      a = i.target,
      c = A({}, i, {
        onClick: function (l) {
          try {
            o && o(l);
          } catch (u) {
            throw (l.preventDefault(), u);
          }
          !l.defaultPrevented &&
            l.button === 0 &&
            (!a || a === "_self") &&
            !Jn(l) &&
            (l.preventDefault(), n());
        },
      });
    return (
      Et !== be ? (c.ref = t || r) : (c.ref = r),
      ee.default.createElement("a", c)
    );
  }),
  Zn = be(function (e, t) {
    var r = e.component,
      n = r === void 0 ? Qn : r,
      o = e.replace,
      i = e.to,
      a = e.innerRef,
      c = ve(e, ["component", "replace", "to", "innerRef"]);
    return ee.default.createElement(ce.Consumer, null, function (s) {
      s || oe(!1);
      var l = s.history,
        u = Pt(Rt(i, s.location), s.location),
        p = u ? l.createHref(u) : "",
        f = A({}, c, {
          href: p,
          navigate: function () {
            var m = Rt(i, s.location),
              y = B(s.location) === B(Pt(m)),
              g = o || y ? l.replace : l.push;
            g(m);
          },
        });
      return (
        Et !== be ? (f.ref = t || a) : (f.innerRef = a),
        ee.default.createElement(n, f)
      );
    });
  });
var Ur = function (t) {
    return t;
  },
  Je = ee.default.forwardRef;
typeof Je > "u" && (Je = Ur);
function eo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t
    .filter(function (n) {
      return n;
    })
    .join(" ");
}
var li = Je(function (e, t) {
  var r = e["aria-current"],
    n = r === void 0 ? "page" : r,
    o = e.activeClassName,
    i = o === void 0 ? "active" : o,
    a = e.activeStyle,
    c = e.className,
    s = e.exact,
    l = e.isActive,
    u = e.location,
    p = e.sensitive,
    f = e.strict,
    d = e.style,
    m = e.to,
    y = e.innerRef,
    g = ve(e, [
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
  return ee.default.createElement(ce.Consumer, null, function (R) {
    R || oe(!1);
    var _ = u || R.location,
      T = Pt(Rt(m, _), _),
      M = T.pathname,
      C = M && M.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      x = C
        ? ge(_.pathname, { path: C, exact: s, sensitive: p, strict: f })
        : null,
      P = !!(l ? l(x, _) : x),
      b = typeof c == "function" ? c(P) : c,
      U = typeof d == "function" ? d(P) : d;
    P && ((b = eo(b, i)), (U = A({}, U, a)));
    var L = A(
      { "aria-current": (P && n) || null, className: b, style: U, to: T },
      g,
    );
    return (
      Ur !== Je ? (L.ref = t || y) : (L.innerRef = y),
      ee.default.createElement(Zn, L)
    );
  });
});
function Tt(e, t, r) {
  let n = `${e}_HistoryValue`,
    o = gt(),
    i = bt(),
    a = (i.state && i.state[n]) ?? r,
    c = ie.useRef(!1),
    s = ie.useRef(),
    l = ie.useRef(),
    u = ie.useCallback(
      (p) => {
        if (c.current && ((s.current = p), !l.current)) {
          let f = o.location.pathname;
          l.current = window.setTimeout(() => {
            o.location.pathname == f &&
              (!o.location.state || o.location.state[n] != s.current) &&
              o.replace(o.location.pathname, {
                ...(o.location.state || {}),
                [n]: s.current,
              }),
              (l.current = void 0);
          }, t);
        }
      },
      [o, n, t],
    );
  return (
    ie.useEffect(() => {
      c.current = !0;
    }, []),
    [a, u]
  );
}
var ae = H(se(), 1);
var wt = class {
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
      n = !1;
    if (r >= this.m_options.msDuration) {
      this.End();
      return;
    }
    let o = r / this.m_options.msDuration;
    try {
      this.Update(t(o));
    } catch {}
    this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
  }
  ClearInterval() {
    this.m_bActive = !1;
  }
};
var Qe = class extends wt {
  m_object;
  m_propTargets;
  m_props = {};
  constructor(t, r, n) {
    super("ownerDocument" in t ? Ot(t) : t, n),
      (this.m_object = t),
      (this.m_propTargets = r);
  }
  Start() {
    this.m_props = {};
    for (let t in this.m_propTargets) {
      let r = parseFloat(this.m_object[t]) || 0,
        n = this.m_propTargets[t];
      r != n && (this.m_props[t] = { start: r, end: n });
    }
    super.Start();
  }
  Update(t) {
    for (let r in this.m_props) {
      let n = this.m_props[r],
        o = n.start + (n.end - n.start) * t;
      this.m_object[r] = o;
    }
  }
};
function to(e, t) {
  let r = ae.default.useRef();
  return ae.default.useCallback(
    (n, o) => {
      let i = "sine";
      if ((r.current && (r.current.Cancel(), (i = "linear")), !e.current))
        return;
      n === void 0 && (n = e.current.scrollTop),
        o === void 0 && (o = e.current.scrollLeft);
      let a = Math.max(
        Math.abs(e.current.scrollTop - n),
        Math.abs(e.current.scrollLeft - o),
      );
      if (a > 0) {
        let c = Math.max(Math.min((a / 1e3) * 200, 500), 300);
        (r.current = new Qe(
          e.current,
          { scrollTop: n, scrollLeft: o },
          { msDuration: c, timing: i, onComplete: t },
        )),
          r.current.Start();
      } else t && t();
    },
    [e, t],
  );
}
function Ir(e, t = "smooth", r, n) {
  let o = (r ?? 30) / 100,
    i = ae.default.useRef(void 0),
    a = ae.default.useRef(void 0),
    c = ae.default.useCallback(() => {
      (i.current = void 0), (a.current = void 0);
    }, []),
    s = to(e, c);
  return ae.default.useCallback(
    (u) => {
      if ((n && !n(u)) || u.defaultPrevented || !e.current) return !1;
      let {
          scrollTop: p,
          scrollHeight: f,
          clientHeight: d,
          scrollLeft: m,
          scrollWidth: y,
          clientWidth: g,
        } = e.current,
        R = i.current ?? p,
        _ = a.current ?? m,
        T = 2;
      switch (u.detail.button) {
        case 9:
          if (R <= T) return !1;
          i.current = Math.max(0, R - d * o);
          break;
        case 10:
          if (R >= f - d - T) return !1;
          i.current = Math.min(f - d, R + d * o);
          break;
        case 11:
          if (_ <= T) return !1;
          a.current = Math.max(0, _ - g * o);
          break;
        case 12:
          if (_ >= y - g - T) return !1;
          a.current = Math.min(y - g, _ + g * o);
          break;
        default:
          return !1;
      }
      return (
        !t || t == "smooth"
          ? s(i.current, a.current)
          : (e.current.scrollTo({
              top: i.current,
              left: a.current,
              behavior: "auto",
            }),
            c()),
        !0
      );
    },
    [n, e, t, o, s, c],
  );
}
function Br() {
  let e = ae.default.useRef(null),
    t = ae.default.useCallback(
      (n) => {
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
  return { ref: Vt(t), navRef: e };
}
var Se = {
  ScrollPanel: "LOBCiSXGyJg-",
  ScrollY: "XnhvXyT1-F0-",
  ScrollX: "oHmIKsgLAUY-",
  ScrollBoth: "_4gs8FnVjoXA-",
};
var ue = H(_e()),
  kr = z.default.forwardRef(function (t, r) {
    let {
        scrollDirection: n,
        scrollPaddingTop: o,
        scrollPaddingRight: i,
        scrollPaddingBottom: a,
        scrollPaddingLeft: c,
        className: s,
        children: l,
        style: u,
        ...p
      } = t,
      f;
    switch (n) {
      case "x":
        f = Se.ScrollX;
        break;
      case "both":
        f = Se.ScrollBoth;
        break;
      case "y":
      default:
        f = Se.ScrollY;
        break;
    }
    let d = { ...u };
    (o || o === 0) && (d.scrollPaddingTop = o),
      (i || i === 0) && (d.scrollPaddingRight = i),
      (a || a === 0) && (d.scrollPaddingBottom = a),
      (c || c === 0) && (d.scrollPaddingLeft = c);
    let { ref: m, navRef: y } = Br(),
      g = Re(y, p.navRef),
      R = Re(m, r);
    return (0, ue.jsx)(At, {
      ...p,
      style: d,
      className: (0, jr.default)(s, Se.ScrollPanel, f),
      ref: R,
      navRef: g,
      children: (0, ue.jsx)($t, { children: l }),
    });
  }),
  ro = z.default.forwardRef(function (t, r) {
    let { scrollStepPercent: n, scrollBehavior: o, ...i } = t,
      a = z.default.useRef(null),
      c = z.default.useCallback((u) => u.currentTarget != u.target, []),
      s = Ir(a, o, n, c),
      l = Re(a, r);
    return (0, ue.jsx)(kr, {
      ...i,
      onGamepadDirection: s,
      ref: l,
      scrollIntoViewType: 2,
    });
  }),
  xi = z.default.forwardRef(function (t, r) {
    let { name: n, msScrollRestoreDelay: o, onScroll: i, ...a } = t;
    return (0, ue.jsx)(Wr, {
      name: n,
      msScrollRestoreDelay: o,
      parentOnScroll: i,
      refDiv: r,
      children: (c, s) => (0, ue.jsx)(kr, { ...a, onScroll: c, ref: s }),
    });
  }),
  Oi = z.default.forwardRef(function (t, r) {
    let { name: n, msScrollRestoreDelay: o, onScroll: i, ...a } = t;
    return (0, ue.jsx)(Wr, {
      name: n,
      msScrollRestoreDelay: o,
      parentOnScroll: i,
      refDiv: r,
      children: (c, s) => (0, ue.jsx)(ro, { ...a, onScroll: c, ref: s }),
    });
  });
function Wr(e) {
  let {
      name: t,
      msScrollRestoreDelay: r,
      parentOnScroll: n,
      refDiv: o,
      children: i,
    } = e,
    [a, c] = Tt(`${t}ScrollTop`, 250, 0),
    [s, l] = Tt(`${t}ScrollLeft`, 250, 0),
    u = z.default.useRef(0),
    p = z.default.useRef(0),
    f = z.default.useRef(),
    d = z.default.useCallback(
      (y) => {
        let { scrollTop: g, scrollLeft: R } = y.currentTarget;
        c(g), (u.current = g), l(R), (p.current = R), n && n(y);
      },
      [c, l, n],
    );
  z.default.useLayoutEffect(() => {
    let y = function () {
      f.current &&
        (Nt(
          f.current.scrollHeight >= a,
          `Element is ${f.current.scrollHeight} high but trying to restore scrollTop of ${a}, element may need more time to lay out.`,
          f.current,
        ),
        (u.current = a),
        (p.current = s),
        f.current.scrollTo({ top: a, left: s, behavior: "auto" }),
        f.current.dispatchEvent(new UIEvent("scroll")));
    };
    (a != u.current || s != p.current) && (r ? window.setTimeout(y, r) : y());
  }, [a, s, r]);
  let m = Re(f, o);
  return z.default.useMemo(() => i(d, m), [d, m, i]);
}
export {
  $t as a,
  Or as b,
  A as c,
  ve as d,
  Z as e,
  wt as f,
  oe as g,
  Br as h,
  kr as i,
  ro as j,
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

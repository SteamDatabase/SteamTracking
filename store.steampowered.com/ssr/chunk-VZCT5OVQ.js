const CLSTAMP = 9413726;

import { f as Qt } from "./chunk-HIECV7ZI.js";
import { a as Zt } from "./chunk-P2PVWVQG.js";
import { G as Jt } from "./chunk-URRQZYHY.js";
import { c as Xt } from "./chunk-P3TGTAV2.js";
import {
  J as qt,
  N as Yt,
  Q as Kt,
  V as zt,
  b as le,
  ba as Fe,
  f as Gt,
  s as Wt,
  y as jt,
} from "./chunk-J434WIC3.js";
import { a as ct } from "./chunk-XH7U7AW6.js";
import { p as $t } from "./chunk-R4FESFN3.js";
import {
  d as Bt,
  g as Ut,
  l as Vt,
  u as kt,
  y as st,
} from "./chunk-O746S3Z7.js";
import { i as Le, j as ie, l as Z, m as ee } from "./chunk-H6MD6SRD.js";
import { b as ae, d as _ } from "./chunk-ENIO5D24.js";
var Er = ae(($a, Rr) => {
  "use strict";
  var Xn = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  Rr.exports = Xn;
});
var wr = ae((Ga, Tr) => {
  "use strict";
  var Qn = Er();
  function Sr() {}
  function _r() {}
  _r.resetWarningCache = Sr;
  Tr.exports = function () {
    function e(o, n, a, i, u, s) {
      if (s !== Qn) {
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
      checkPropTypes: _r,
      resetWarningCache: Sr,
    };
    return (r.PropTypes = r), r;
  };
});
var Nr = ae((qa, xr) => {
  "use strict";
  xr.exports = wr()();
  var Wa, ja;
});
var jr = ae((ni, Wr) => {
  "use strict";
  Wr.exports =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    };
});
var zr = ae((oi, Pe) => {
  "use strict";
  var Be = jr();
  Pe.exports = Kr;
  Pe.exports.parse = dt;
  Pe.exports.compile = lo;
  Pe.exports.tokensToFunction = qr;
  Pe.exports.tokensToRegExp = Yr;
  var co = new RegExp(
    [
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    ].join("|"),
    "g",
  );
  function dt(e, t) {
    for (
      var r = [], o = 0, n = 0, a = "", i = (t && t.delimiter) || "/", u;
      (u = co.exec(e)) != null;
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
        y = u[5],
        h = u[6],
        b = u[7];
      a && (r.push(a), (a = ""));
      var R = f != null && p != null && p !== f,
        O = h === "+" || h === "*",
        j = h === "?" || h === "*",
        V = f || i,
        D = m || y,
        E = f || (typeof r[r.length - 1] == "string" ? r[r.length - 1] : "");
      r.push({
        name: d || o++,
        prefix: f || "",
        delimiter: V,
        optional: j,
        repeat: O,
        partial: R,
        asterisk: !!b,
        pattern: D ? mo(D) : b ? ".*" : uo(V, E),
      });
    }
    return n < e.length && (a += e.substr(n)), a && r.push(a), r;
  }
  function uo(e, t) {
    return !t || t.indexOf(e) > -1
      ? "[^" + ve(e) + "]+?"
      : ve(t) + "|(?:(?!" + ve(t) + ")[^" + ve(e) + "])+?";
  }
  function lo(e, t) {
    return qr(dt(e, t), t);
  }
  function po(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function fo(e) {
    return encodeURI(e).replace(/[?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function qr(e, t) {
    for (var r = new Array(e.length), o = 0; o < e.length; o++)
      typeof e[o] == "object" &&
        (r[o] = new RegExp("^(?:" + e[o].pattern + ")$", ht(t)));
    return function (n, a) {
      for (
        var i = "",
          u = n || {},
          s = a || {},
          c = s.pretty ? po : encodeURIComponent,
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
        if (((d = p.asterisk ? fo(f) : c(f)), !r[l].test(d)))
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
  function mo(e) {
    return e.replace(/([=!:$\/()])/g, "\\$1");
  }
  function mt(e, t) {
    return (e.keys = t), e;
  }
  function ht(e) {
    return e && e.sensitive ? "" : "i";
  }
  function ho(e, t) {
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
  function vo(e, t, r) {
    for (var o = [], n = 0; n < e.length; n++) o.push(Kr(e[n], t, r).source);
    var a = new RegExp("(?:" + o.join("|") + ")", ht(r));
    return mt(a, t);
  }
  function yo(e, t, r) {
    return Yr(dt(e, r), t, r);
  }
  function Yr(e, t, r) {
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
  function Kr(e, t, r) {
    return (
      Be(t) || ((r = t || r), (t = [])),
      (r = r || {}),
      e instanceof RegExp ? ho(e, t) : Be(e) ? vo(e, t, r) : yo(e, t, r)
    );
  }
});
var Qr = ae((w) => {
  "use strict";
  var M = typeof Symbol == "function" && Symbol.for,
    vt = M ? Symbol.for("react.element") : 60103,
    yt = M ? Symbol.for("react.portal") : 60106,
    Ue = M ? Symbol.for("react.fragment") : 60107,
    Ve = M ? Symbol.for("react.strict_mode") : 60108,
    ke = M ? Symbol.for("react.profiler") : 60114,
    $e = M ? Symbol.for("react.provider") : 60109,
    Ge = M ? Symbol.for("react.context") : 60110,
    gt = M ? Symbol.for("react.async_mode") : 60111,
    We = M ? Symbol.for("react.concurrent_mode") : 60111,
    je = M ? Symbol.for("react.forward_ref") : 60112,
    qe = M ? Symbol.for("react.suspense") : 60113,
    go = M ? Symbol.for("react.suspense_list") : 60120,
    Ye = M ? Symbol.for("react.memo") : 60115,
    Ke = M ? Symbol.for("react.lazy") : 60116,
    bo = M ? Symbol.for("react.block") : 60121,
    Po = M ? Symbol.for("react.fundamental") : 60117,
    Ro = M ? Symbol.for("react.responder") : 60118,
    Eo = M ? Symbol.for("react.scope") : 60119;
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
  function Xr(e) {
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
    return Xr(e) || Y(e) === gt;
  };
  w.isConcurrentMode = Xr;
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
      e === go ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Ke ||
          e.$$typeof === Ye ||
          e.$$typeof === $e ||
          e.$$typeof === Ge ||
          e.$$typeof === je ||
          e.$$typeof === Po ||
          e.$$typeof === Ro ||
          e.$$typeof === Eo ||
          e.$$typeof === bo))
    );
  };
  w.typeOf = Y;
});
var Zr = ae((ii, Jr) => {
  "use strict";
  Jr.exports = Qr();
});
var tn = ae((x) => {
  "use strict";
  var H = typeof Symbol == "function" && Symbol.for,
    bt = H ? Symbol.for("react.element") : 60103,
    Pt = H ? Symbol.for("react.portal") : 60106,
    ze = H ? Symbol.for("react.fragment") : 60107,
    Xe = H ? Symbol.for("react.strict_mode") : 60108,
    Qe = H ? Symbol.for("react.profiler") : 60114,
    Je = H ? Symbol.for("react.provider") : 60109,
    Ze = H ? Symbol.for("react.context") : 60110,
    Rt = H ? Symbol.for("react.async_mode") : 60111,
    et = H ? Symbol.for("react.concurrent_mode") : 60111,
    tt = H ? Symbol.for("react.forward_ref") : 60112,
    rt = H ? Symbol.for("react.suspense") : 60113,
    So = H ? Symbol.for("react.suspense_list") : 60120,
    nt = H ? Symbol.for("react.memo") : 60115,
    ot = H ? Symbol.for("react.lazy") : 60116,
    _o = H ? Symbol.for("react.block") : 60121,
    To = H ? Symbol.for("react.fundamental") : 60117,
    wo = H ? Symbol.for("react.responder") : 60118,
    xo = H ? Symbol.for("react.scope") : 60119;
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
  function en(e) {
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
    return en(e) || K(e) === Rt;
  };
  x.isConcurrentMode = en;
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
      e === So ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === ot ||
          e.$$typeof === nt ||
          e.$$typeof === Je ||
          e.$$typeof === Ze ||
          e.$$typeof === tt ||
          e.$$typeof === To ||
          e.$$typeof === wo ||
          e.$$typeof === xo ||
          e.$$typeof === _o))
    );
  };
  x.typeOf = K;
});
var nn = ae((ui, rn) => {
  "use strict";
  rn.exports = tn();
});
var pn = ae((li, ln) => {
  "use strict";
  var Et = nn(),
    No = {
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
    Oo = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    Co = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    cn = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    St = {};
  St[Et.ForwardRef] = Co;
  St[Et.Memo] = cn;
  function on(e) {
    return Et.isMemo(e) ? cn : St[e.$$typeof] || No;
  }
  var Ao = Object.defineProperty,
    Do = Object.getOwnPropertyNames,
    an = Object.getOwnPropertySymbols,
    Lo = Object.getOwnPropertyDescriptor,
    Fo = Object.getPrototypeOf,
    sn = Object.prototype;
  function un(e, t, r) {
    if (typeof t != "string") {
      if (sn) {
        var o = Fo(t);
        o && o !== sn && un(e, o, r);
      }
      var n = Do(t);
      an && (n = n.concat(an(t)));
      for (var a = on(e), i = on(t), u = 0; u < n.length; ++u) {
        var s = n[u];
        if (!Oo[s] && !(r && r[s]) && !(i && i[s]) && !(a && a[s])) {
          var c = Lo(t, s);
          try {
            Ao(e, s, c);
          } catch {}
        }
      }
    }
    return e;
  }
  ln.exports = un;
});
function er(e) {
  return e === 2;
}
var Te = _(Z(), 1);
var tr = _(ee(), 1);
function Nn(e, t, r) {
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
function On(e) {
  let t = "steam://";
  return er(ie.EREALM) && (t = "steamchina://"), t + e;
}
var Cn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function An(e, t) {
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
    d = Cn.test(p);
  if (!f && d) {
    let h = new URL(location.href),
      b = new URL(r.startsWith("//") ? h.protocol + r : r);
    b.origin === h.origin
      ? ((p = b.pathname + b.search + b.hash), (f = !1))
      : (f = !0);
  }
  n &&
    (ie.IN_CLIENT
      ? (p = On(`openurl/${c}`))
      : ((s.target ??= "_blank"), (s.rel ??= "noreferrer noopener")));
  let m = Nn(p, f, a),
    y = e.gamepadFocusable ? zt : "a";
  return (0, tr.jsx)(y, { ref: t, href: c, onClick: m, ...s });
}
var ua = Te.default.memo(Te.default.forwardRef(An));
var B = _(Z()),
  xe = _(ct());
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
var se = _(ee()),
  nr = _(Z()),
  Dn = new jt("FocusNavigation").Debug;
function rr(e) {
  let { children: t, ...r } = e,
    [o, n] = B.default.useState({
      bFocusWithin: !1,
      navTarget: null,
      prevTarget: null,
    }),
    a = B.default.useRef(null),
    i = B.default.useMemo(
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
      (0, se.jsx)(Ln, { ...r, ...o, refMeasure: a }),
      (0, se.jsx)(Kt.Provider, { value: i, children: t }),
    ],
  });
}
function Ln(e) {
  let {
      rootClassName: t,
      className: r,
      bFocusWithin: o,
      navTarget: n,
      refMeasure: a,
    } = e,
    [i, u] = B.default.useState(null),
    s = qt(),
    c = Xt(),
    l = Yt(!1);
  return !c && !l
    ? null
    : (0, se.jsx)("div", {
        className: (0, xe.default)(we.FocusRingRoot, t),
        ref: u,
        children: (0, se.jsx)(Fn, {
          refMeasure: a,
          className: (0, xe.default)(r, s && we.DebugFocusRing),
          bFocusWithin: o && (l || s),
          navTarget: n,
          elContainer: i,
          bDebug: s,
        }),
      });
}
function Fn(e) {
  let {
      className: t,
      bFocusWithin: r,
      navTarget: o,
      elContainer: n,
      bDebug: a,
      refMeasure: i,
    } = e,
    [u, s] = B.default.useState(null),
    [c, l] = B.default.useReducer((h) => h + 1, 0),
    [p, f] = B.default.useReducer((h) => h + 1, 0);
  Gt(
    i,
    B.default.useMemo(() => ({ MeasureElementAndUpdate: f }), []),
  );
  let d = Hn(a, o),
    m = B.default.useCallback(() => {
      if (!o || !o.BWantsFocusRing() || !n) {
        s(null);
        return;
      }
      let h = o.GetBoundingRect(),
        b = n.getBoundingClientRect(),
        R = {
          left: h.x - b.x,
          top: h.y - b.y,
          height: h.height,
          width: h.width,
        };
      s((O) =>
        !O ||
        R.left != O.left ||
        R.top != O.top ||
        R.height != O.height ||
        R.width != O.width
          ? R
          : O,
      );
    }, [o, n]);
  B.default.useLayoutEffect(() => m(), [m]),
    B.default.useLayoutEffect(() => {
      l();
    }, [o]);
  let y = r;
  return (
    o && n && (o.BWantsFocusRing() || (y = !1)),
    B.default.useEffect(() => {
      if (!y) return;
      let h = performance.now(),
        b,
        R = () => {
          m(), performance.now() - h <= 500 && (b = requestAnimationFrame(R));
        };
      return R(), () => cancelAnimationFrame(b);
    }, [y, m, u, p]),
    !y || !u
      ? null
      : (0, nr.createElement)(Mn, {
          ...u,
          key: c,
          className: (0, xe.default)(t, d && we.FocusRingOnHiddenItem),
          target: o,
        })
  );
}
function Mn(e) {
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
function Hn(e, t) {
  let [r, o] = B.default.useState(!1);
  return (
    (0, B.useEffect)(() => {
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
              Dn(
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
var or = "/PPCEHXCA.jpg";
var ar = "/QLK737BA.jpg";
var ir = "/UA7RT5CA.jpg";
function Vn(e, t) {
  return {
    queryKey: ["ProfileItemsEquipped", t],
    async queryFn() {
      let r = await Qt.GetProfileItemsEquipped(e, {
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
function sr(e) {
  let t = Jt();
  return Bt(Vn(t, e));
}
var cr = _(Z()),
  lr = _(ee());
function ur(e) {
  let { rgSources: t, onIncrementalError: r, alt: o, ...n } = e,
    [a, i] = (0, cr.useState)(0),
    u = t[a];
  return (0, lr.jsx)("img", {
    onError: (s) => {
      i((c) => c + 1), r?.(s, u, a);
    },
    alt: o,
    ...n,
    src: u,
  });
}
var Me = _(ct()),
  Ne = _(Z());
var pr = "t1-DQ4KhiQ0-";
var fr = "YbrTGQJwy1w-";
var dr = "_4-VIszWOyjU-";
var mr = "_-2DlbVABlsg-";
var hr = "gRteJ-XhQG8-";
var vr = "X0rP4JDEGys-";
var yr = "HM2pmBPb6yk-";
var gr = "DHqf1E6df88-";
var br = "EeeZUuRovTI-";
var Pr = "CdtBH5cDo-Q-";
var oe = _(ee());
function $n(e) {
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
    f.push(zn(r ?? "Medium")),
    (0, oe.jsxs)("div", {
      className: (0, Me.default)(
        pr,
        { [dr]: !u, [mr]: u, [vr]: s, [gr]: c, [yr]: l },
        a,
      ),
      "data-size": r,
      "data-status-position": n,
      children: [
        (0, oe.jsx)("div", { className: hr, style: o }),
        (0, oe.jsx)(ur, {
          className: (0, Me.default)(fr),
          rgSources: f,
          draggable: !1,
          alt: p,
        }),
        i,
      ],
    })
  );
}
function Gn(e) {
  let { profileItem: t, className: r, bDisableAnimation: o, ...n } = e;
  if (!t || !t.image_small || t.image_small.length == 0) return null;
  let a = o ? t.image_large : t.image_small;
  return (
    a || (a = t.image_small),
    a.startsWith("https://") ||
      (a = ie.MEDIA_CDN_COMMUNITY_URL + "images/" + a),
    (0, oe.jsx)("div", {
      className: (0, Me.default)(br, r),
      ...n,
      children: (0, oe.jsx)("img", {
        className: Pr,
        src: a,
        alt: "",
        role: "presentation",
      }),
    })
  );
}
var Wn = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function jn(e) {
  return [...e].map((t) => t.toString(16).padStart(2, "0")).join("");
}
function qn(e, t) {
  e === void 0 && (e = new Uint8Array(20));
  let r = jn(e),
    o = ".jpg";
  r === "0000000000000000000000000000000000000000" && (r = Wn),
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
function Yn(e) {
  let {
      playerLinkDetails: t,
      animatedAvatar: r,
      avatarFrame: o,
      size: n,
      ...a
    } = e,
    i = qn(t.public_data?.sha_digest_avatar, n);
  return (
    r?.image_small?.length &&
      (i = ie.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small),
    (0, oe.jsx)($n, {
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
function Kn(e, t) {
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
function Ia(e) {
  let {
      loopDuration: t = "Infinite",
      bParentHovered: r,
      bLimitProfileFrameAnimationTime: o,
      className: n,
      ...a
    } = e,
    [i, u] = (0, Ne.useState)(!1),
    s = Kn(t, i),
    c = sr(a.playerLinkDetails.public_data.steamid);
  return (0, oe.jsx)("div", {
    className: n,
    onMouseEnter: () => u(!0),
    onMouseLeave: () => u(!1),
    children: (0, oe.jsx)(Yn, {
      ...a,
      animatedAvatar: s ? c.data?.animated_avatar : void 0,
      children: (0, oe.jsx)(Gn, {
        profileItem: c.data?.avatar_frame,
        bDisableAnimation: o && !s,
      }),
    }),
  });
}
function zn(e) {
  switch (e) {
    case "X-Small":
    case "Small":
      return Le(or);
    case "Medium":
    case "MediumLarge":
      return Le(ir);
    case "Large":
    case "X-Large":
    case "FillArea":
      return Le(ar);
  }
}
var ue = _(Z());
var _n = _(ct(), 1),
  z = _(Z(), 1);
var pe = _(Z());
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
var A = _(Z()),
  wt = _(Nr());
function F() {
  return (
    (F = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
          }
          return e;
        }),
    F.apply(null, arguments)
  );
}
function Ie(e) {
  return e.charAt(0) === "/";
}
function ut(e, t) {
  for (var r = t, o = r + 1, n = e.length; o < n; r += 1, o += 1) e[r] = e[o];
  e.pop();
}
function Jn(e, t) {
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
var Or = Jn;
var Zn = !0,
  lt = "Invariant failed";
function ce(e, t) {
  if (!e) {
    if (Zn) throw new Error(lt);
    var r = typeof t == "function" ? t() : t,
      o = r ? "".concat(lt, ": ").concat(r) : lt;
    throw new Error(o);
  }
}
function Ce(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Cr(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function eo(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function Hr(e, t) {
  return eo(e, t) ? e.substr(t.length) : e;
}
function Ir(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function to(e) {
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
function U(e) {
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
function $(e, t, r, o) {
  var n;
  typeof e == "string"
    ? ((n = to(e)), (n.state = t))
    : ((n = F({}, e)),
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
          (n.pathname = Or(n.pathname, o.pathname))
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
var Br = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function Ur(e, t) {
  t(window.confirm(e));
}
function ro() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function no() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function oo() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function ao(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Ar = "popstate",
  Dr = "hashchange";
function Lr() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function Vr(e) {
  e === void 0 && (e = {}), Br || ce(!1);
  var t = window.history,
    r = ro(),
    o = !no(),
    n = e,
    a = n.forceRefresh,
    i = a === void 0 ? !1 : a,
    u = n.getUserConfirmation,
    s = u === void 0 ? Ur : u,
    c = n.keyLength,
    l = c === void 0 ? 6 : c,
    p = e.basename ? Ir(Ce(e.basename)) : "";
  function f(S) {
    var N = S || {},
      v = N.key,
      g = N.state,
      T = window.location,
      C = T.pathname,
      J = T.search,
      q = T.hash,
      W = C + J + q;
    return p && (W = Hr(W, p)), $(W, g, v);
  }
  function d() {
    return Math.random().toString(36).substr(2, l);
  }
  var m = ft();
  function y(S) {
    F(Q, S), (Q.length = t.length), m.notifyListeners(Q.location, Q.action);
  }
  function h(S) {
    ao(S) || O(f(S.state));
  }
  function b() {
    O(f(Lr()));
  }
  var R = !1;
  function O(S) {
    if (R) (R = !1), y();
    else {
      var N = "POP";
      m.confirmTransitionTo(S, N, s, function (v) {
        v ? y({ action: N, location: S }) : j(S);
      });
    }
  }
  function j(S) {
    var N = Q.location,
      v = D.indexOf(N.key);
    v === -1 && (v = 0);
    var g = D.indexOf(S.key);
    g === -1 && (g = 0);
    var T = v - g;
    T && ((R = !0), L(T));
  }
  var V = f(Lr()),
    D = [V.key];
  function E(S) {
    return p + U(S);
  }
  function P(S, N) {
    var v = "PUSH",
      g = $(S, N, d(), Q.location);
    m.confirmTransitionTo(g, v, s, function (T) {
      if (T) {
        var C = E(g),
          J = g.key,
          q = g.state;
        if (r)
          if ((t.pushState({ key: J, state: q }, null, C), i))
            window.location.href = C;
          else {
            var W = D.indexOf(Q.location.key),
              be = D.slice(0, W + 1);
            be.push(g.key), (D = be), y({ action: v, location: g });
          }
        else window.location.href = C;
      }
    });
  }
  function I(S, N) {
    var v = "REPLACE",
      g = $(S, N, d(), Q.location);
    m.confirmTransitionTo(g, v, s, function (T) {
      if (T) {
        var C = E(g),
          J = g.key,
          q = g.state;
        if (r)
          if ((t.replaceState({ key: J, state: q }, null, C), i))
            window.location.replace(C);
          else {
            var W = D.indexOf(Q.location.key);
            W !== -1 && (D[W] = g.key), y({ action: v, location: g });
          }
        else window.location.replace(C);
      }
    });
  }
  function L(S) {
    t.go(S);
  }
  function k() {
    L(-1);
  }
  function X() {
    L(1);
  }
  var he = 0;
  function ne(S) {
    (he += S),
      he === 1 && S === 1
        ? (window.addEventListener(Ar, h), o && window.addEventListener(Dr, b))
        : he === 0 &&
          (window.removeEventListener(Ar, h),
          o && window.removeEventListener(Dr, b));
  }
  var G = !1;
  function ye(S) {
    S === void 0 && (S = !1);
    var N = m.setPrompt(S);
    return (
      G || (ne(1), (G = !0)),
      function () {
        return G && ((G = !1), ne(-1)), N();
      }
    );
  }
  function ge(S) {
    var N = m.appendListener(S);
    return (
      ne(1),
      function () {
        ne(-1), N();
      }
    );
  }
  var Q = {
    length: t.length,
    action: "POP",
    location: V,
    createHref: E,
    push: P,
    replace: I,
    go: L,
    goBack: k,
    goForward: X,
    block: ye,
    listen: ge,
  };
  return Q;
}
var Fr = "hashchange",
  io = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Cr(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Cr, decodePath: Ce },
    slash: { encodePath: Ce, decodePath: Ce },
  };
function kr(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function Oe() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function so(e) {
  window.location.hash = e;
}
function pt(e) {
  window.location.replace(kr(window.location.href) + "#" + e);
}
function $r(e) {
  e === void 0 && (e = {}), Br || ce(!1);
  var t = window.history,
    r = oo(),
    o = e,
    n = o.getUserConfirmation,
    a = n === void 0 ? Ur : n,
    i = o.hashType,
    u = i === void 0 ? "slash" : i,
    s = e.basename ? Ir(Ce(e.basename)) : "",
    c = io[u],
    l = c.encodePath,
    p = c.decodePath;
  function f() {
    var v = p(Oe());
    return s && (v = Hr(v, s)), $(v);
  }
  var d = ft();
  function m(v) {
    F(N, v), (N.length = t.length), d.notifyListeners(N.location, N.action);
  }
  var y = !1,
    h = null;
  function b(v, g) {
    return (
      v.pathname === g.pathname && v.search === g.search && v.hash === g.hash
    );
  }
  function R() {
    var v = Oe(),
      g = l(v);
    if (v !== g) pt(g);
    else {
      var T = f(),
        C = N.location;
      if ((!y && b(C, T)) || h === U(T)) return;
      (h = null), O(T);
    }
  }
  function O(v) {
    if (y) (y = !1), m();
    else {
      var g = "POP";
      d.confirmTransitionTo(v, g, a, function (T) {
        T ? m({ action: g, location: v }) : j(v);
      });
    }
  }
  function j(v) {
    var g = N.location,
      T = P.lastIndexOf(U(g));
    T === -1 && (T = 0);
    var C = P.lastIndexOf(U(v));
    C === -1 && (C = 0);
    var J = T - C;
    J && ((y = !0), X(J));
  }
  var V = Oe(),
    D = l(V);
  V !== D && pt(D);
  var E = f(),
    P = [U(E)];
  function I(v) {
    var g = document.querySelector("base"),
      T = "";
    return (
      g && g.getAttribute("href") && (T = kr(window.location.href)),
      T + "#" + l(s + U(v))
    );
  }
  function L(v, g) {
    var T = "PUSH",
      C = $(v, void 0, void 0, N.location);
    d.confirmTransitionTo(C, T, a, function (J) {
      if (J) {
        var q = U(C),
          W = l(s + q),
          be = Oe() !== W;
        if (be) {
          (h = q), so(W);
          var De = P.lastIndexOf(U(N.location)),
            It = P.slice(0, De + 1);
          It.push(q), (P = It), m({ action: T, location: C });
        } else m();
      }
    });
  }
  function k(v, g) {
    var T = "REPLACE",
      C = $(v, void 0, void 0, N.location);
    d.confirmTransitionTo(C, T, a, function (J) {
      if (J) {
        var q = U(C),
          W = l(s + q),
          be = Oe() !== W;
        be && ((h = q), pt(W));
        var De = P.indexOf(U(N.location));
        De !== -1 && (P[De] = q), m({ action: T, location: C });
      }
    });
  }
  function X(v) {
    t.go(v);
  }
  function he() {
    X(-1);
  }
  function ne() {
    X(1);
  }
  var G = 0;
  function ye(v) {
    (G += v),
      G === 1 && v === 1
        ? window.addEventListener(Fr, R)
        : G === 0 && window.removeEventListener(Fr, R);
  }
  var ge = !1;
  function Q(v) {
    v === void 0 && (v = !1);
    var g = d.setPrompt(v);
    return (
      ge || (ye(1), (ge = !0)),
      function () {
        return ge && ((ge = !1), ye(-1)), g();
      }
    );
  }
  function S(v) {
    var g = d.appendListener(v);
    return (
      ye(1),
      function () {
        ye(-1), g();
      }
    );
  }
  var N = {
    length: t.length,
    action: "POP",
    location: E,
    createHref: I,
    push: L,
    replace: k,
    go: X,
    goBack: he,
    goForward: ne,
    block: Q,
    listen: S,
  };
  return N;
}
function Mr(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Gr(e) {
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
    F(E, P),
      (E.length = E.entries.length),
      c.notifyListeners(E.location, E.action);
  }
  function p() {
    return Math.random().toString(36).substr(2, s);
  }
  var f = Mr(i, 0, n.length - 1),
    d = n.map(function (P) {
      return typeof P == "string"
        ? $(P, void 0, p())
        : $(P, void 0, P.key || p());
    }),
    m = U;
  function y(P, I) {
    var L = "PUSH",
      k = $(P, I, p(), E.location);
    c.confirmTransitionTo(k, L, r, function (X) {
      if (X) {
        var he = E.index,
          ne = he + 1,
          G = E.entries.slice(0);
        G.length > ne ? G.splice(ne, G.length - ne, k) : G.push(k),
          l({ action: L, location: k, index: ne, entries: G });
      }
    });
  }
  function h(P, I) {
    var L = "REPLACE",
      k = $(P, I, p(), E.location);
    c.confirmTransitionTo(k, L, r, function (X) {
      X && ((E.entries[E.index] = k), l({ action: L, location: k }));
    });
  }
  function b(P) {
    var I = Mr(E.index + P, 0, E.entries.length - 1),
      L = "POP",
      k = E.entries[I];
    c.confirmTransitionTo(k, L, r, function (X) {
      X ? l({ action: L, location: k, index: I }) : l();
    });
  }
  function R() {
    b(-1);
  }
  function O() {
    b(1);
  }
  function j(P) {
    var I = E.index + P;
    return I >= 0 && I < E.entries.length;
  }
  function V(P) {
    return P === void 0 && (P = !1), c.setPrompt(P);
  }
  function D(P) {
    return c.appendListener(P);
  }
  var E = {
    length: d.length,
    action: "POP",
    location: d[f],
    index: f,
    entries: d,
    createHref: m,
    push: y,
    replace: h,
    go: b,
    goBack: R,
    goForward: O,
    canGo: j,
    block: V,
    listen: D,
  };
  return E;
}
var yn = _(zr()),
  vi = _(Zr());
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
var Mo = _(pn()),
  _t = 1073741823,
  fn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
function Ho() {
  var e = "__global_unique_id__";
  return (fn[e] = (fn[e] || 0) + 1);
}
function Io(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Bo(e) {
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
function Uo(e) {
  return Array.isArray(e) ? e[0] : e;
}
function Vo(e, t) {
  var r,
    o,
    n = "__create-react-context-" + Ho() + "__",
    a = (function (u) {
      te(s, u);
      function s() {
        for (var l, p = arguments.length, f = new Array(p), d = 0; d < p; d++)
          f[d] = arguments[d];
        return (
          (l = u.call.apply(u, [this].concat(f)) || this),
          (l.emitter = Bo(l.props.value)),
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
            Io(f, d)
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
    })(A.default.Component);
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
        (l.onUpdate = function (m, y) {
          var h = l.observedBits | 0;
          h & y && l.setState({ value: l.getValue() });
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
        return Uo(this.props.children)(this.state.value);
      }),
      s
    );
  })(A.default.Component);
  return (
    (i.contextTypes = ((o = {}), (o[n] = wt.default.object), o)),
    { Provider: a, Consumer: i }
  );
}
var ko = A.default.createContext || Vo,
  gn = function (t) {
    var r = ko();
    return (r.displayName = t), r;
  },
  bn = gn("Router-History"),
  de = gn("Router"),
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
        return A.default.createElement(
          de.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          A.default.createElement(bn.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          }),
        );
      }),
      t
    );
  })(A.default.Component),
  $o = (function (e) {
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
        return A.default.createElement(Ee, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(A.default.Component),
  bi = (function (e) {
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
  })(A.default.Component);
var dn = {},
  Go = 1e4,
  mn = 0;
function Wo(e, t) {
  var r = "" + t.end + t.strict + t.sensitive,
    o = dn[r] || (dn[r] = {});
  if (o[e]) return o[e];
  var n = [],
    a = (0, yn.default)(e, n, t),
    i = { regexp: a, keys: n };
  return mn < Go && ((o[e] = i), mn++), i;
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
    var d = Wo(f, { end: a, strict: u, sensitive: c }),
      m = d.regexp,
      y = d.keys,
      h = m.exec(e);
    if (!h) return null;
    var b = h[0],
      R = h.slice(1),
      O = e === b;
    return a && !O
      ? null
      : {
          path: f,
          url: f === "/" && b === "" ? "/" : b,
          isExact: O,
          params: y.reduce(function (j, V, D) {
            return (j[V.name] = R[D]), j;
          }, {}),
        };
  }, null);
}
function jo(e) {
  return A.default.Children.count(e) === 0;
}
var qo = (function (e) {
  te(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return (
    (r.render = function () {
      var n = this;
      return A.default.createElement(de.Consumer, null, function (a) {
        a || ce(!1);
        var i = n.props.location || a.location,
          u = n.props.computedMatch
            ? n.props.computedMatch
            : n.props.path
              ? Se(i.pathname, n.props)
              : a.match,
          s = F({}, a, { location: i, match: u }),
          c = n.props,
          l = c.children,
          p = c.component,
          f = c.render;
        return (
          Array.isArray(l) && jo(l) && (l = null),
          A.default.createElement(
            de.Provider,
            { value: s },
            s.match
              ? l
                ? typeof l == "function"
                  ? l(s)
                  : l
                : p
                  ? A.default.createElement(p, s)
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
})(A.default.Component);
function xt(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Yo(e, t) {
  return e ? F({}, t, { pathname: xt(e) + t.pathname }) : t;
}
function Ko(e, t) {
  if (!e) return t;
  var r = xt(e);
  return t.pathname.indexOf(r) !== 0
    ? t
    : F({}, t, { pathname: t.pathname.substr(r.length) });
}
function hn(e) {
  return typeof e == "string" ? e : U(e);
}
function Tt(e) {
  return function () {
    ce(!1);
  };
}
function vn() {}
var zo = (function (e) {
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
          return vn;
        }),
        (o.handleBlock = function () {
          return vn;
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
        (l.action = a), (l.location = Yo(s, $(n))), (l.url = hn(l.location));
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
              return xt(i + hn(m));
            },
            action: "POP",
            location: Ko(i, $(l)),
            push: this.handlePush,
            replace: this.handleReplace,
            go: Tt("go"),
            goBack: Tt("goBack"),
            goForward: Tt("goForward"),
            listen: this.handleListen,
            block: this.handleBlock,
          };
        return A.default.createElement(
          Ee,
          F({}, p, { history: f, staticContext: s }),
        );
      }),
      t
    );
  })(A.default.Component),
  Xo = (function (e) {
    te(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        var n = this;
        return A.default.createElement(de.Consumer, null, function (a) {
          a || ce(!1);
          var i = n.props.location || a.location,
            u,
            s;
          return (
            A.default.Children.forEach(n.props.children, function (c) {
              if (s == null && A.default.isValidElement(c)) {
                u = c;
                var l = c.props.path || c.props.from;
                s = l ? Se(i.pathname, F({}, c.props, { path: l })) : a.match;
              }
            }),
            s
              ? A.default.cloneElement(u, { location: i, computedMatch: s })
              : null
          );
        });
      }),
      t
    );
  })(A.default.Component);
var Pn = A.default.useContext;
function Nt() {
  return Pn(bn);
}
function Ot() {
  return Pn(de).location;
}
var re = _(Z());
var Li = (function (e) {
    te(t, e);
    function t() {
      for (var o, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (o = e.call.apply(e, [this].concat(a)) || this),
        (o.history = Vr(o.props)),
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
  Fi = (function (e) {
    te(t, e);
    function t() {
      for (var o, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      return (
        (o = e.call.apply(e, [this].concat(a)) || this),
        (o.history = $r(o.props)),
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
    return typeof t == "string" ? $(t, null, null, r) : t;
  },
  Dt = function (t) {
    return t;
  },
  _e = re.default.forwardRef;
typeof _e > "u" && (_e = Dt);
function Qo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Jo = _e(function (e, t) {
    var r = e.innerRef,
      o = e.navigate,
      n = e.onClick,
      a = Re(e, ["innerRef", "navigate", "onClick"]),
      i = a.target,
      u = F({}, a, {
        onClick: function (c) {
          try {
            n && n(c);
          } catch (l) {
            throw (c.preventDefault(), l);
          }
          !c.defaultPrevented &&
            c.button === 0 &&
            (!i || i === "_self") &&
            !Qo(c) &&
            (c.preventDefault(), o());
        },
      });
    return (
      Dt !== _e ? (u.ref = t || r) : (u.ref = r),
      re.default.createElement("a", u)
    );
  }),
  Zo = _e(function (e, t) {
    var r = e.component,
      o = r === void 0 ? Jo : r,
      n = e.replace,
      a = e.to,
      i = e.innerRef,
      u = Re(e, ["component", "replace", "to", "innerRef"]);
    return re.default.createElement(de.Consumer, null, function (s) {
      s || ce(!1);
      var c = s.history,
        l = At(Ct(a, s.location), s.location),
        p = l ? c.createHref(l) : "",
        f = F({}, u, {
          href: p,
          navigate: function () {
            var m = Ct(a, s.location),
              y = U(s.location) === U(At(m)),
              h = n || y ? c.replace : c.push;
            h(m);
          },
        });
      return (
        Dt !== _e ? (f.ref = t || i) : (f.innerRef = i),
        re.default.createElement(o, f)
      );
    });
  });
var Rn = function (t) {
    return t;
  },
  at = re.default.forwardRef;
typeof at > "u" && (at = Rn);
function ea() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t
    .filter(function (o) {
      return o;
    })
    .join(" ");
}
var Mi = at(function (e, t) {
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
    y = e.innerRef,
    h = Re(e, [
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
    var R = l || b.location,
      O = At(Ct(m, R), R),
      j = O.pathname,
      V = j && j.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      D = V
        ? Se(R.pathname, { path: V, exact: s, sensitive: p, strict: f })
        : null,
      E = !!(c ? c(D, R) : D),
      P = typeof u == "function" ? u(E) : u,
      I = typeof d == "function" ? d(E) : d;
    E && ((P = ea(P, a)), (I = F({}, I, i)));
    var L = F(
      { "aria-current": (E && o) || null, className: P, style: I, to: O },
      h,
    );
    return (
      Rn !== at ? (L.ref = t || y) : (L.innerRef = y),
      re.default.createElement(Zo, L)
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
var fe = _(Z(), 1);
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
function ta(e, t) {
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
function En(e, t = "smooth", r, o) {
  let n = (r ?? 30) / 100,
    a = fe.default.useRef(void 0),
    i = fe.default.useRef(void 0),
    u = fe.default.useCallback(() => {
      (a.current = void 0), (i.current = void 0);
    }, []),
    s = ta(e, u);
  return fe.default.useCallback(
    (l) => {
      if ((o && !o(l)) || l.defaultPrevented || !e.current) return !1;
      let {
          scrollTop: p,
          scrollHeight: f,
          clientHeight: d,
          scrollLeft: m,
          scrollWidth: y,
          clientWidth: h,
        } = e.current,
        b = a.current ?? p,
        R = i.current ?? m,
        O = 2;
      switch (l.detail.button) {
        case 9:
          if (b <= O) return !1;
          a.current = Math.max(0, b - d * n);
          break;
        case 10:
          if (b >= f - d - O) return !1;
          a.current = Math.min(f - d, b + d * n);
          break;
        case 11:
          if (R <= O) return !1;
          i.current = Math.max(0, R - h * n);
          break;
        case 12:
          if (R >= y - h - O) return !1;
          i.current = Math.min(y - h, R + h * n);
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
function Sn() {
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
  return { ref: Zt(t), navRef: e };
}
var Ae = {
  ScrollPanel: "LOBCiSXGyJg-",
  ScrollY: "XnhvXyT1-F0-",
  ScrollX: "oHmIKsgLAUY-",
  ScrollBoth: "_4gs8FnVjoXA-",
};
var me = _(ee(), 1),
  Tn = z.default.forwardRef(function (t, r) {
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
    let { ref: m, navRef: y } = Sn(),
      h = le(y, p.navRef),
      b = le(m, r);
    return (0, me.jsx)(Fe, {
      ...p,
      style: d,
      className: (0, _n.default)(s, Ae.ScrollPanel, f),
      ref: b,
      navRef: h,
      children: (0, me.jsx)(rr, { children: c }),
    });
  }),
  Mt = z.default.forwardRef(function (t, r) {
    let { scrollStepPercent: o, scrollBehavior: n, ...a } = t,
      i = z.default.useRef(null),
      u = z.default.useCallback((l) => l.currentTarget != l.target, []),
      s = En(i, n, o, u),
      c = le(i, r);
    return (0, me.jsx)(Tn, {
      ...a,
      onGamepadDirection: s,
      ref: c,
      scrollIntoViewType: 2,
    });
  }),
  Zi = z.default.forwardRef(function (t, r) {
    let { name: o, msScrollRestoreDelay: n, onScroll: a, ...i } = t;
    return (0, me.jsx)(wn, {
      name: o,
      msScrollRestoreDelay: n,
      parentOnScroll: a,
      refDiv: r,
      children: (u, s) => (0, me.jsx)(Tn, { ...i, onScroll: u, ref: s }),
    });
  }),
  es = z.default.forwardRef(function (t, r) {
    let { name: o, msScrollRestoreDelay: n, onScroll: a, ...i } = t;
    return (0, me.jsx)(wn, {
      name: o,
      msScrollRestoreDelay: n,
      parentOnScroll: a,
      refDiv: r,
      children: (u, s) => (0, me.jsx)(Mt, { ...i, onScroll: u, ref: s }),
    });
  });
function wn(e) {
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
      (y) => {
        let { scrollTop: h, scrollLeft: b } = y.currentTarget;
        u(h), (l.current = h), c(b), (p.current = b), o && o(y);
      },
      [u, c, o],
    );
  z.default.useEffect(() => {
    let y = function () {
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
    (i != l.current || s != p.current) && (r ? window.setTimeout(y, r) : y());
  }, [i, s, r]);
  let m = le(f, n);
  return z.default.useMemo(() => a(d, m), [d, m, a]);
}
var Ht = _(ee()),
  as = ue.default.forwardRef(function (t, r) {
    let {
        onExplicitFocusLevelChanged: o,
        onOKButton: n,
        onCancelButton: a,
        navRef: i,
        focusable: u,
        ...s
      } = t,
      c = ue.default.useRef(null),
      { fnOnOKButton: l, fnOnCancelButton: p } = xn({
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
var is = ue.default.forwardRef(function (t, r) {
  let { onOKButton: o, onCancelButton: n, navRef: a, focusable: i, ...u } = t,
    s = ue.default.useRef(null),
    c = ue.default.useRef(null),
    l = ue.default.useCallback((y, h) => y.FocusVisibleChild(), []),
    { fnOnOKButton: p, fnOnCancelButton: f } = xn({
      navRefPanel: s,
      onOKButton: o,
      onCancelButton: n,
      fnFocusChildren: l,
    }),
    d = le(c, r),
    m = le(a, s);
  return (0, Ht.jsx)(Mt, {
    ...u,
    onOKButton: (y) => p?.(y),
    onCancelButton: f,
    navRef: m,
    ref: d,
    focusable: i !== !1,
  });
});
function xn(e) {
  let {
    navRefPanel: t,
    onOKButton: r,
    onCancelButton: o,
    onExplicitFocusLevelChanged: n,
    fnFocusChildren: a,
  } = e;
  a = a ?? ra;
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
function ra(e, t) {
  return e.ChildTakeFocus(t);
}
export {
  er as a,
  ua as b,
  rr as c,
  Yn as d,
  Ia as e,
  pn as f,
  Ft as g,
  F as h,
  Re as i,
  te as j,
  ce as k,
  Sn as l,
  Tn as m,
  as as n,
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

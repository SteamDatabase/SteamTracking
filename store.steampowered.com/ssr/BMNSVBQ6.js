const CLSTAMP = 9650136;

import { a as Ai, b as Vi } from "./chunk-2LRTM7LP.js";
import {
  b as nn,
  c as Fi,
  d as Ti,
  e as Li,
  f as Bi,
  h as Wi,
  i as Gi,
} from "./chunk-3TYO32AI.js";
import "./chunk-V5BPBZD6.js";
import "./chunk-O4DM4LFE.js";
import { b as ki, c as Mi } from "./chunk-YMCPVSOS.js";
import { c as Ni } from "./chunk-6GL7VVIS.js";
import {
  a as Jo,
  c as ai,
  e as rn,
  g as _i,
  h as xi,
  i as wi,
  j as Ci,
  k as yt,
  l as Ii,
  m as Pi,
} from "./chunk-ISFCJC3S.js";
import { a as Zo } from "./chunk-PYKMIR4B.js";
import {
  A as si,
  f as jo,
  g as Yo,
  h as Ko,
  o as ri,
  p as ni,
  y as oi,
  z as ii,
} from "./chunk-3F4DGW7D.js";
import "./chunk-75BZWA34.js";
import { b as bt, d as Xo, e as Si } from "./chunk-V57BFN4R.js";
import { i as ei } from "./chunk-HIVCLXPV.js";
import { a as Ei } from "./chunk-QHRQHLVL.js";
import "./chunk-XEA6MXLW.js";
import "./chunk-ASHNC7S3.js";
import {
  A as he,
  d as ci,
  e as li,
  g as nr,
  h as ui,
  i as di,
  k as De,
  m as pi,
  o as fi,
  p as mi,
  q as gi,
  r as hi,
  s as bi,
  w as yi,
  z as vi,
} from "./chunk-LO42DGM4.js";
import "./chunk-3I7V66YX.js";
import {
  A as ko,
  E as Mo,
  F as Vo,
  H as Ne,
  I as Qo,
  r as tn,
  t as Ke,
} from "./chunk-UKYUA5SV.js";
import "./chunk-D3UH7XG2.js";
import { a as Ao } from "./chunk-3DSWPP42.js";
import { a as Wo } from "./chunk-K7QQAC7U.js";
import {
  a as rr,
  b as lu,
  d as Se,
  e as or,
  g as Di,
  k as y,
} from "./chunk-VARXYOCI.js";
import {
  A as $o,
  C as X,
  D as Pe,
  E as Uo,
  F as zo,
  H as Xe,
  y as Qe,
} from "./chunk-E3DFKZCX.js";
import { a as Ie } from "./chunk-DKD2IIKU.js";
import { b as ti } from "./chunk-FQGDHUSH.js";
import { b as Go } from "./chunk-UNPMX6VQ.js";
import { c as qo } from "./chunk-ZPLSSCBY.js";
import "./chunk-JBQOR54O.js";
import "./chunk-3DHZ3D7W.js";
import "./chunk-6GVOFTIA.js";
import { a as on, c as Ri, d as Oi } from "./chunk-KO3VZSTR.js";
import { a as Ho } from "./chunk-ZFAGXXLP.js";
import { c as en, g as we } from "./chunk-NJLDZKBU.js";
import "./chunk-TEHPVM5M.js";
import { f as Oo } from "./chunk-HSDZMS7H.js";
import {
  b as je,
  e as Ce,
  g as tr,
  h as Fo,
  i as Ye,
  m as To,
  u as Lo,
  y as Bo,
} from "./chunk-6XJQQZ7Z.js";
import {
  i as Ro,
  j as gt,
  k as er,
  l as H,
  m as ht,
  o as N,
} from "./chunk-C37XGPEG.js";
import { a as V } from "./chunk-4HQPZ5LY.js";
import { b as Zt, d as _ } from "./chunk-HHDRG5ZJ.js";
var cs = Zt((as) => {
  "use strict";
  var ar = V(),
    bu = Zo();
  function yu(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var vu = typeof Object.is == "function" ? Object.is : yu,
    _u = bu.useSyncExternalStore,
    Du = ar.useRef,
    Su = ar.useEffect,
    Eu = ar.useMemo,
    xu = ar.useDebugValue;
  as.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
    var i = Du(null);
    if (i.current === null) {
      var s = { hasValue: !1, value: null };
      i.current = s;
    } else s = i.current;
    i = Eu(
      function () {
        function c(f) {
          if (!l) {
            if (((l = !0), (p = f), (f = n(f)), o !== void 0 && s.hasValue)) {
              var m = s.value;
              if (o(m, f)) return (u = m);
            }
            return (u = f);
          }
          if (((m = u), vu(p, f))) return m;
          var h = n(f);
          return o !== void 0 && o(m, h) ? m : ((p = f), (u = h));
        }
        var l = !1,
          p,
          u,
          d = r === void 0 ? null : r;
        return [
          function () {
            return c(t());
          },
          d === null
            ? void 0
            : function () {
                return c(d());
              },
        ];
      },
      [t, r, n, o],
    );
    var a = _u(e, i[0], i[1]);
    return (
      Su(
        function () {
          (s.hasValue = !0), (s.value = a);
        },
        [a],
      ),
      xu(a),
      a
    );
  };
});
var us = Zt((Wb, ls) => {
  "use strict";
  ls.exports = cs();
});
var ys = Zt((T) => {
  "use strict";
  var vn = Symbol.for("react.element"),
    _n = Symbol.for("react.portal"),
    lr = Symbol.for("react.fragment"),
    ur = Symbol.for("react.strict_mode"),
    dr = Symbol.for("react.profiler"),
    pr = Symbol.for("react.provider"),
    fr = Symbol.for("react.context"),
    Ou = Symbol.for("react.server_context"),
    mr = Symbol.for("react.forward_ref"),
    gr = Symbol.for("react.suspense"),
    hr = Symbol.for("react.suspense_list"),
    br = Symbol.for("react.memo"),
    yr = Symbol.for("react.lazy"),
    Au = Symbol.for("react.offscreen"),
    bs;
  bs = Symbol.for("react.module.reference");
  function ce(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case vn:
          switch (((e = e.type), e)) {
            case lr:
            case dr:
            case ur:
            case gr:
            case hr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ou:
                case fr:
                case mr:
                case yr:
                case br:
                case pr:
                  return e;
                default:
                  return t;
              }
          }
        case _n:
          return t;
      }
    }
  }
  T.ContextConsumer = fr;
  T.ContextProvider = pr;
  T.Element = vn;
  T.ForwardRef = mr;
  T.Fragment = lr;
  T.Lazy = yr;
  T.Memo = br;
  T.Portal = _n;
  T.Profiler = dr;
  T.StrictMode = ur;
  T.Suspense = gr;
  T.SuspenseList = hr;
  T.isAsyncMode = function () {
    return !1;
  };
  T.isConcurrentMode = function () {
    return !1;
  };
  T.isContextConsumer = function (e) {
    return ce(e) === fr;
  };
  T.isContextProvider = function (e) {
    return ce(e) === pr;
  };
  T.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === vn;
  };
  T.isForwardRef = function (e) {
    return ce(e) === mr;
  };
  T.isFragment = function (e) {
    return ce(e) === lr;
  };
  T.isLazy = function (e) {
    return ce(e) === yr;
  };
  T.isMemo = function (e) {
    return ce(e) === br;
  };
  T.isPortal = function (e) {
    return ce(e) === _n;
  };
  T.isProfiler = function (e) {
    return ce(e) === dr;
  };
  T.isStrictMode = function (e) {
    return ce(e) === ur;
  };
  T.isSuspense = function (e) {
    return ce(e) === gr;
  };
  T.isSuspenseList = function (e) {
    return ce(e) === hr;
  };
  T.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === lr ||
      e === dr ||
      e === ur ||
      e === gr ||
      e === hr ||
      e === Au ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === yr ||
          e.$$typeof === br ||
          e.$$typeof === pr ||
          e.$$typeof === fr ||
          e.$$typeof === mr ||
          e.$$typeof === bs ||
          e.getModuleId !== void 0))
    );
  };
  T.typeOf = ce;
});
var _s = Zt((Kb, vs) => {
  "use strict";
  vs.exports = ys();
});
var Te = _(V(), 1);
function $i(e) {
  return (
    e.strPlatform == "all" &&
    e.strMinDiscount == "" &&
    e.rgTypeFilters.length == 0 &&
    !e.bExcludeEarlyAccess &&
    !e.bExcludePrerelease &&
    !e.bExcludeVR &&
    e.rgDeckFilters.length == 0 &&
    e.nMaxPriceStop === "none" &&
    e.rgTagFilters.length == 0
  );
}
function sn(e) {
  return e == "mac" || e == "linux" ? e : "all";
}
function an(e) {
  return e == "any" || e == "50" || e == "75" ? e : "";
}
function uu(e, t) {
  if (e === "free") return e;
  if (e && e.length) {
    Fo(t, "cannot EnsureValidPriceStop without rgPriceStops data");
    let r = parseInt(e);
    if ((r || e === "0") && (!t || r < t.length)) return r;
  }
  return "none";
}
function du(e) {
  if (e == "games" || e == "software" || e == "dlc") return e;
}
function pu(e) {
  if (e == "verified" || e == "playable") return e;
}
function Ui(e, t) {
  let r = {};
  return (
    e.strPlatform == "mac"
      ? (r.macos_only = !0)
      : e.strPlatform == "linux"
        ? (r.steamos_linux_only = !0)
        : e.strPlatform != "all" &&
          Ye(e.strPlatform, `Unhandled platform value: ${e.strPlatform}`),
    e.rgTypeFilters.forEach((n) => {
      n == "games"
        ? (r.only_games = !0)
        : n == "software"
          ? (r.only_software = !0)
          : n == "dlc"
            ? (r.only_dlc = !0)
            : Ye(n, `Unhandled type filter: ${n}`);
    }),
    e.strMinDiscount == "any"
      ? (r.min_discount_percent = 1)
      : e.strMinDiscount == "50"
        ? (r.min_discount_percent = 50)
        : e.strMinDiscount == "75"
          ? (r.min_discount_percent = 75)
          : e.strMinDiscount != "" &&
            Ye(
              e.strMinDiscount,
              `Unhandled min discount value: ${e.strMinDiscount}`,
            ),
    (e.bExcludeEarlyAccess || e.bExcludePrerelease || e.bExcludeVR) &&
      ((r.exclude_types = {}),
      e.bExcludeEarlyAccess && (r.exclude_types.exclude_early_access = !0),
      e.bExcludePrerelease && (r.exclude_types.exclude_coming_soon = !0),
      e.bExcludeVR && (r.exclude_types.exclude_vr_only = !0)),
    e.rgDeckFilters.length &&
      ((r.steam_deck_filters = {}),
      e.rgDeckFilters.forEach((n) => {
        n == "verified"
          ? (r.steam_deck_filters.include_verified = !0)
          : n == "playable" && (r.steam_deck_filters.include_playable = !0);
      })),
    e.nMaxPriceStop !== "none" &&
      (e.nMaxPriceStop === "free"
        ? (r.only_free = !0)
        : t &&
          e.nMaxPriceStop < t.length &&
          (r.max_price_in_cents = t[e.nMaxPriceStop].amount_in_cents)),
    e.rgTagFilters.length && (r.tagids_must_match = [...e.rgTagFilters]),
    r
  );
}
function zi(e, t) {
  return {
    strPlatform: sn(e.platform),
    strMinDiscount: an(e.min_discount),
    nMaxPriceStop: uu(e.max_price, t),
    rgTypeFilters: ir(e.type_filters, du),
    bExcludeEarlyAccess: e.exclude_early_access == "1",
    bExcludePrerelease: e.exclude_prerelease == "1",
    bExcludeVR: e.exclude_vr == "1",
    rgDeckFilters: ir(e.deck_filters, pu),
    rgTagFilters: ir(e.tagids, (r) => parseInt(r) || void 0),
    rgWishlistNotificationGames: ir(e.wng, (r) => parseInt(r) || void 0),
  };
}
function ir(e, t) {
  return (
    e
      ?.split(/,/)
      .map(t)
      .filter((r) => r !== void 0) || []
  );
}
function Hi(e) {
  let t = {};
  return (
    e.strPlatform && e.strPlatform != "all" && (t.platform = e.strPlatform),
    e.strMinDiscount && (t.min_discount = e.strMinDiscount),
    e.nMaxPriceStop != "none" && (t.max_price = e.nMaxPriceStop.toString()),
    e.rgTypeFilters.length && (t.type_filters = e.rgTypeFilters.join(",")),
    e.bExcludeEarlyAccess && (t.exclude_early_access = "1"),
    e.bExcludePrerelease && (t.exclude_prerelease = "1"),
    e.bExcludeVR && (t.exclude_vr = "1"),
    e.rgDeckFilters.length && (t.deck_filters = e.rgDeckFilters.join(",")),
    e.rgTagFilters.length && (t.tagids = e.rgTagFilters.join(",")),
    e.rgWishlistNotificationGames?.length &&
      (t.wng = e.rgWishlistNotificationGames.join(",")),
    t
  );
}
var sr = [
    "order",
    "name",
    "price",
    "discount",
    "dateadded",
    "topsellers",
    "releasedate",
    "reviews",
  ],
  cn = {
    order: "order",
    name: "name",
    price: "price",
    discount: "discount",
    dateadded: "dateadded",
    salesrank: "topsellers",
    releasedate: "releasedate",
    reviewscore: "reviews",
  };
function qi(e) {
  return e in cn;
}
var ln = {
  order: 0,
  name: 1,
  price: 2,
  discount: 3,
  dateadded: 4,
  topsellers: 5,
  releasedate: 6,
  reviews: 7,
};
var un = {
  name: "wishlistPrefs",
  options: { path: "/wishlist", secure: !0, maxAge: 365 * 24 * 60 * 60 * 1e3 },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
function dn() {
  try {
    let e = JSON.parse(jo(un) || "{}");
    return e.filterParams?.wng && delete e.filterParams.wng, e;
  } catch {}
  return {};
}
function ji(e) {
  Object.keys(e).length == 0 ? Ko(un) : Yo(un, JSON.stringify(e));
}
function Yi() {
  return !!dn().bCompactView;
}
function Ki(e) {
  let t = dn();
  e ? (t.bCompactView = !0) : delete t.bCompactView, ji(t);
}
function Qi(e, t) {
  ji({ ...dn(), sort: e, filterParams: t });
}
var Xi = "a20CyZYbgnQ-";
var Le = _(N(), 1);
function Ji(e) {
  return (0, Le.jsx)("div", {
    className: Xi,
    children: (0, Le.jsxs)("div", {
      children: [
        (0, Le.jsx)("h1", { children: y.Localize("#errorpage_error") }),
        (0, Le.jsx)("h3", { children: (0, Le.jsx)(gu, { error: e.error }) }),
      ],
    }),
  });
}
function gu(e) {
  let { error: t } = e;
  switch (t) {
    case "ProfileNotFound":
      return y.Localize("#wishlist_error_profilenotfound");
    case "WishlistLoadFailed":
      return y.Localize("#wishlist_error_wishlistunavailable");
    case "RateLimit":
      return y.Localize("#Error_RateLimited");
    default:
      return (
        Ye(t, `Unhandled error code ${t}`),
        y.Localize("#errorpage_unknownerror")
      );
  }
}
var v = _(V()),
  Bt = _(Ao());
function Be(e) {
  "@babel/helpers - typeof";
  return (
    (Be =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Be(e)
  );
}
function Zi(e, t) {
  if (Be(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Be(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function es(e) {
  var t = Zi(e, "string");
  return Be(t) == "symbol" ? t : t + "";
}
function ts(e, t, r) {
  return (
    (t = es(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function rs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rs(Object(r), !0).forEach(function (n) {
          ts(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rs(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ee(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var ns = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  fn = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  os = {
    INIT: "@@redux/INIT" + fn(),
    REPLACE: "@@redux/REPLACE" + fn(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + fn();
    },
  };
function hu(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function mn(e, t, r) {
  var n;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ee(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(ee(1));
    return r(mn)(e, t);
  }
  if (typeof e != "function") throw new Error(ee(2));
  var o = e,
    i = t,
    s = [],
    a = s,
    c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function p() {
    if (c) throw new Error(ee(3));
    return i;
  }
  function u(h) {
    if (typeof h != "function") throw new Error(ee(4));
    if (c) throw new Error(ee(5));
    var g = !0;
    return (
      l(),
      a.push(h),
      function () {
        if (g) {
          if (c) throw new Error(ee(6));
          (g = !1), l();
          var S = a.indexOf(h);
          a.splice(S, 1), (s = null);
        }
      }
    );
  }
  function d(h) {
    if (!hu(h)) throw new Error(ee(7));
    if (typeof h.type > "u") throw new Error(ee(8));
    if (c) throw new Error(ee(9));
    try {
      (c = !0), (i = o(i, h));
    } finally {
      c = !1;
    }
    for (var g = (s = a), D = 0; D < g.length; D++) {
      var S = g[D];
      S();
    }
    return h;
  }
  function f(h) {
    if (typeof h != "function") throw new Error(ee(10));
    (o = h), d({ type: os.REPLACE });
  }
  function m() {
    var h,
      g = u;
    return (
      (h = {
        subscribe: function (S) {
          if (typeof S != "object" || S === null) throw new Error(ee(11));
          function C() {
            S.next && S.next(p());
          }
          C();
          var w = g(C);
          return { unsubscribe: w };
        },
      }),
      (h[ns] = function () {
        return this;
      }),
      h
    );
  }
  return (
    d({ type: os.INIT }),
    (n = { dispatch: d, subscribe: u, getState: p, replaceReducer: f }),
    (n[ns] = m),
    n
  );
}
function is(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function gn(e, t) {
  if (typeof e == "function") return is(e, t);
  if (typeof e != "object" || e === null) throw new Error(ee(16));
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = is(o, t));
  }
  return r;
}
function hn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (n, o) {
          return function () {
            return n(o.apply(void 0, arguments));
          };
        });
}
function ss() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var o = n.apply(void 0, arguments),
        i = function () {
          throw new Error(ee(15));
        },
        s = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        a = t.map(function (c) {
          return c(s);
        });
      return (
        (i = hn.apply(void 0, a)(o.dispatch)),
        pn(pn({}, o), {}, { dispatch: i })
      );
    };
  };
}
var Rs = _(Zo()),
  Os = _(us());
var bn = _(Ao());
function wu(e) {
  e();
}
var ds = wu,
  ps = (e) => (ds = e),
  fs = () => ds;
var yn = _(V());
var Iu = _(V());
var vt = _(V()),
  ms = Symbol.for("react-redux-context"),
  gs = typeof globalThis < "u" ? globalThis : {};
function Cu() {
  var e;
  if (!vt.createContext) return {};
  let t = (e = gs[ms]) != null ? e : (gs[ms] = new Map()),
    r = t.get(vt.createContext);
  return r || ((r = vt.createContext(null)), t.set(vt.createContext, r)), r;
}
var Ee = Cu();
var cr = () => {
  throw new Error("uSES not initialized!");
};
var Ru = cr,
  hs = (e) => {
    Ru = e;
  };
var En = _(lu()),
  L = _(V()),
  Is = _(_s());
var Tu = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Lu(
  e,
  t,
  r,
  n,
  { areStatesEqual: o, areOwnPropsEqual: i, areStatePropsEqual: s },
) {
  let a = !1,
    c,
    l,
    p,
    u,
    d;
  function f(S, C) {
    return (
      (c = S),
      (l = C),
      (p = e(c, l)),
      (u = t(n, l)),
      (d = r(p, u, l)),
      (a = !0),
      d
    );
  }
  function m() {
    return (
      (p = e(c, l)), t.dependsOnOwnProps && (u = t(n, l)), (d = r(p, u, l)), d
    );
  }
  function h() {
    return (
      e.dependsOnOwnProps && (p = e(c, l)),
      t.dependsOnOwnProps && (u = t(n, l)),
      (d = r(p, u, l)),
      d
    );
  }
  function g() {
    let S = e(c, l),
      C = !s(S, p);
    return (p = S), C && (d = r(p, u, l)), d;
  }
  function D(S, C) {
    let w = !i(C, l),
      I = !o(S, c, C, l);
    return (c = S), (l = C), w && I ? m() : w ? h() : I ? g() : d;
  }
  return function (C, w) {
    return a ? D(C, w) : f(C, w);
  };
}
function Dn(e, t) {
  let {
      initMapStateToProps: r,
      initMapDispatchToProps: n,
      initMergeProps: o,
    } = t,
    i = or(t, Tu),
    s = r(e, i),
    a = n(e, i),
    c = o(e, i);
  return Lu(s, a, c, e, i);
}
function Sn(e, t) {
  let r = {};
  for (let n in e) {
    let o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function _t(e) {
  return function (r) {
    let n = e(r);
    function o() {
      return n;
    }
    return (o.dependsOnOwnProps = !1), o;
  };
}
function Ds(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function vr(e, t) {
  return function (n, { displayName: o }) {
    let i = function (a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return (
      (i.dependsOnOwnProps = !0),
      (i.mapToProps = function (a, c) {
        (i.mapToProps = e), (i.dependsOnOwnProps = Ds(e));
        let l = i(a, c);
        return (
          typeof l == "function" &&
            ((i.mapToProps = l), (i.dependsOnOwnProps = Ds(l)), (l = i(a, c))),
          l
        );
      }),
      i
    );
  };
}
function Je(e, t) {
  return (r, n) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`,
    );
  };
}
function Ss(e) {
  return e && typeof e == "object"
    ? _t((t) => Sn(e, t))
    : e
      ? typeof e == "function"
        ? vr(e, "mapDispatchToProps")
        : Je(e, "mapDispatchToProps")
      : _t((t) => ({ dispatch: t }));
}
function Es(e) {
  return e
    ? typeof e == "function"
      ? vr(e, "mapStateToProps")
      : Je(e, "mapStateToProps")
    : _t(() => ({}));
}
function Bu(e, t, r) {
  return Se({}, r, e, t);
}
function Wu(e) {
  return function (r, { displayName: n, areMergedPropsEqual: o }) {
    let i = !1,
      s;
    return function (c, l, p) {
      let u = e(c, l, p);
      return i ? o(u, s) || (s = u) : ((i = !0), (s = u)), s;
    };
  };
}
function xs(e) {
  return e ? (typeof e == "function" ? Wu(e) : Je(e, "mergeProps")) : () => Bu;
}
function ku() {
  let e = fs(),
    t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        o = t;
      for (; o; ) n.push(o), (o = o.next);
      return n;
    },
    subscribe(n) {
      let o = !0,
        i = (r = { callback: n, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
var ws = { notify() {}, get: () => [] };
function _r(e, t) {
  let r,
    n = ws,
    o = 0,
    i = !1;
  function s(h) {
    p();
    let g = n.subscribe(h),
      D = !1;
    return () => {
      D || ((D = !0), g(), u());
    };
  }
  function a() {
    n.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return i;
  }
  function p() {
    o++, r || ((r = t ? t.addNestedSub(c) : e.subscribe(c)), (n = ku()));
  }
  function u() {
    o--, r && o === 0 && (r(), (r = void 0), n.clear(), (n = ws));
  }
  function d() {
    i || ((i = !0), p());
  }
  function f() {
    i && ((i = !1), u());
  }
  let m = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n,
  };
  return m;
}
var Dr = _(V()),
  Mu =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ze = Mu ? Dr.useLayoutEffect : Dr.useEffect;
function Cs(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function et(e, t) {
  if (Cs(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  let r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Cs(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
var Vu = ["reactReduxForwardedRef"],
  Ps = cr,
  Ns = (e) => {
    Ps = e;
  };
var Gu = [null, null];
function $u(e, t, r) {
  Ze(() => e(...t), r);
}
function Uu(e, t, r, n, o, i) {
  (e.current = n), (r.current = !1), o.current && ((o.current = null), i());
}
function zu(e, t, r, n, o, i, s, a, c, l, p) {
  if (!e) return () => {};
  let u = !1,
    d = null,
    f = () => {
      if (u || !a.current) return;
      let h = t.getState(),
        g,
        D;
      try {
        g = n(h, o.current);
      } catch (S) {
        (D = S), (d = S);
      }
      D || (d = null),
        g === i.current
          ? s.current || l()
          : ((i.current = g), (c.current = g), (s.current = !0), p());
    };
  return (
    (r.onStateChange = f),
    r.trySubscribe(),
    f(),
    () => {
      if (((u = !0), r.tryUnsubscribe(), (r.onStateChange = null), d)) throw d;
    }
  );
}
function Hu(e, t) {
  return e === t;
}
function qu(
  e,
  t,
  r,
  {
    pure: n,
    areStatesEqual: o = Hu,
    areOwnPropsEqual: i = et,
    areStatePropsEqual: s = et,
    areMergedPropsEqual: a = et,
    forwardRef: c = !1,
    context: l = Ee,
  } = {},
) {
  let p = l,
    u = Es(e),
    d = Ss(t),
    f = xs(r),
    m = !!e;
  return (g) => {
    let D = g.displayName || g.name || "Component",
      S = `Connect(${D})`,
      C = {
        shouldHandleStateChanges: m,
        displayName: S,
        wrappedComponentName: D,
        WrappedComponent: g,
        initMapStateToProps: u,
        initMapDispatchToProps: d,
        initMergeProps: f,
        areStatesEqual: o,
        areStatePropsEqual: s,
        areOwnPropsEqual: i,
        areMergedPropsEqual: a,
      };
    function w(W) {
      let [B, te, M] = L.useMemo(() => {
          let { reactReduxForwardedRef: ge } = W,
            mt = or(W, Vu);
          return [W.context, ge, mt];
        }, [W]),
        ae = L.useMemo(
          () =>
            B &&
            B.Consumer &&
            (0, Is.isContextConsumer)(L.createElement(B.Consumer, null))
              ? B
              : p,
          [B, p],
        ),
        U = L.useContext(ae),
        _e = !!W.store && !!W.store.getState && !!W.store.dispatch,
        dt = !!U && !!U.store,
        me = _e ? W.store : U.store,
        Xt = dt ? U.getServerState : me.getState,
        Yr = L.useMemo(() => Dn(me.dispatch, C), [me]),
        [pt, Co] = L.useMemo(() => {
          if (!m) return Gu;
          let ge = _r(me, _e ? void 0 : U.subscription),
            mt = ge.notifyNestedSubs.bind(ge);
          return [ge, mt];
        }, [me, _e, U]),
        Io = L.useMemo(
          () => (_e ? U : Se({}, U, { subscription: pt })),
          [_e, U, pt],
        ),
        Kr = L.useRef(),
        Qr = L.useRef(M),
        ft = L.useRef(),
        Po = L.useRef(!1),
        fb = L.useRef(!1),
        Xr = L.useRef(!1),
        Jr = L.useRef();
      Ze(
        () => (
          (Xr.current = !0),
          () => {
            Xr.current = !1;
          }
        ),
        [],
      );
      let No = L.useMemo(
          () => () =>
            ft.current && M === Qr.current ? ft.current : Yr(me.getState(), M),
          [me, M],
        ),
        cu = L.useMemo(
          () => (mt) =>
            pt ? zu(m, me, pt, Yr, Qr, Kr, Po, Xr, ft, Co, mt) : () => {},
          [pt],
        );
      $u(Uu, [Qr, Kr, Po, M, ft, Co]);
      let Jt;
      try {
        Jt = Ps(cu, No, Xt ? () => Yr(Xt(), M) : No);
      } catch (ge) {
        throw (
          (Jr.current &&
            (ge.message += `
The error may be correlated with this previous error:
${Jr.current.stack}

`),
          ge)
        );
      }
      Ze(() => {
        (Jr.current = void 0), (ft.current = void 0), (Kr.current = Jt);
      });
      let Zr = L.useMemo(
        () => L.createElement(g, Se({}, Jt, { ref: te })),
        [te, g, Jt],
      );
      return L.useMemo(
        () => (m ? L.createElement(ae.Provider, { value: Io }, Zr) : Zr),
        [ae, Zr, Io],
      );
    }
    let P = L.memo(w);
    if (((P.WrappedComponent = g), (P.displayName = w.displayName = S), c)) {
      let B = L.forwardRef(function (M, ae) {
        return L.createElement(P, Se({}, M, { reactReduxForwardedRef: ae }));
      });
      return (
        (B.displayName = S), (B.WrappedComponent = g), (0, En.default)(B, g)
      );
    }
    return (0, En.default)(P, g);
  };
}
var Sr = qu;
var Dt = _(V());
function ju({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once",
}) {
  let s = Dt.useMemo(() => {
      let l = _r(e);
      return {
        store: e,
        subscription: l,
        getServerState: n ? () => n : void 0,
        stabilityCheck: o,
        noopCheck: i,
      };
    }, [e, n, o, i]),
    a = Dt.useMemo(() => e.getState(), [e]);
  return (
    Ze(() => {
      let { subscription: l } = s;
      return (
        (l.onStateChange = l.notifyNestedSubs),
        l.trySubscribe(),
        a !== e.getState() && l.notifyNestedSubs(),
        () => {
          l.tryUnsubscribe(), (l.onStateChange = void 0);
        }
      );
    }, [s, a]),
    Dt.createElement((t || Ee).Provider, { value: s }, r)
  );
}
var xn = ju;
hs(Os.useSyncExternalStoreWithSelector);
Ns(Rs.useSyncExternalStore);
ps(bn.unstable_batchedUpdates);
var We = _(V());
function Qu(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function As(e, t) {
  var r = (0, We.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    n = (0, We.useRef)(!0),
    o = (0, We.useRef)(r),
    i = n.current || !!(t && o.current.inputs && Qu(t, o.current.inputs)),
    s = i ? o.current : { inputs: t, result: e() };
  return (
    (0, We.useEffect)(
      function () {
        (n.current = !1), (o.current = s);
      },
      [s],
    ),
    s.result
  );
}
function Xu(e, t) {
  return As(function () {
    return e;
  }, t);
}
var R = As,
  x = Xu;
var ue = function (t) {
    var r = t.top,
      n = t.right,
      o = t.bottom,
      i = t.left,
      s = n - i,
      a = o - r,
      c = {
        top: r,
        right: n,
        bottom: o,
        left: i,
        width: s,
        height: a,
        x: i,
        y: r,
        center: { x: (n + i) / 2, y: (o + r) / 2 },
      };
    return c;
  },
  Er = function (t, r) {
    return {
      top: t.top - r.top,
      left: t.left - r.left,
      bottom: t.bottom + r.bottom,
      right: t.right + r.right,
    };
  },
  Fs = function (t, r) {
    return {
      top: t.top + r.top,
      left: t.left + r.left,
      bottom: t.bottom - r.bottom,
      right: t.right - r.right,
    };
  },
  Ju = function (t, r) {
    return {
      top: t.top + r.y,
      left: t.left + r.x,
      bottom: t.bottom + r.y,
      right: t.right + r.x,
    };
  },
  wn = { top: 0, right: 0, bottom: 0, left: 0 },
  xr = function (t) {
    var r = t.borderBox,
      n = t.margin,
      o = n === void 0 ? wn : n,
      i = t.border,
      s = i === void 0 ? wn : i,
      a = t.padding,
      c = a === void 0 ? wn : a,
      l = ue(Er(r, o)),
      p = ue(Fs(r, s)),
      u = ue(Fs(p, c));
    return {
      marginBox: l,
      borderBox: ue(r),
      paddingBox: p,
      contentBox: u,
      margin: o,
      border: s,
      padding: c,
    };
  },
  le = function (t) {
    var r = t.slice(0, -2),
      n = t.slice(-2);
    if (n !== "px") return 0;
    var o = Number(r);
    return isNaN(o) && Di(!1), o;
  },
  Zu = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  St = function (t, r) {
    var n = t.borderBox,
      o = t.border,
      i = t.margin,
      s = t.padding,
      a = Ju(n, r);
    return xr({ borderBox: a, border: o, margin: i, padding: s });
  },
  Et = function (t, r) {
    return r === void 0 && (r = Zu()), St(t, r);
  },
  Cn = function (t, r) {
    var n = {
        top: le(r.marginTop),
        right: le(r.marginRight),
        bottom: le(r.marginBottom),
        left: le(r.marginLeft),
      },
      o = {
        top: le(r.paddingTop),
        right: le(r.paddingRight),
        bottom: le(r.paddingBottom),
        left: le(r.paddingLeft),
      },
      i = {
        top: le(r.borderTopWidth),
        right: le(r.borderRightWidth),
        bottom: le(r.borderBottomWidth),
        left: le(r.borderLeftWidth),
      };
    return xr({ borderBox: t, margin: n, padding: o, border: i });
  },
  In = function (t) {
    var r = t.getBoundingClientRect(),
      n = window.getComputedStyle(t);
    return Cn(r, n);
  };
var Ts =
  Number.isNaN ||
  function (t) {
    return typeof t == "number" && t !== t;
  };
function ed(e, t) {
  return !!(e === t || (Ts(e) && Ts(t)));
}
function td(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!ed(e[r], t[r])) return !1;
  return !0;
}
function z(e, t) {
  t === void 0 && (t = td);
  var r = null;
  function n() {
    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
    if (r && r.lastThis === this && t(o, r.lastArgs)) return r.lastResult;
    var s = e.apply(this, o);
    return (r = { lastResult: s, lastArgs: o, lastThis: this }), s;
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var rd = function (t) {
    var r = [],
      n = null,
      o = function () {
        for (var s = arguments.length, a = new Array(s), c = 0; c < s; c++)
          a[c] = arguments[c];
        (r = a),
          !n &&
            (n = requestAnimationFrame(function () {
              (n = null), t.apply(void 0, r);
            }));
      };
    return (
      (o.cancel = function () {
        n && (cancelAnimationFrame(n), (n = null));
      }),
      o
    );
  },
  tt = rd;
var nd = !0,
  od = /[ \t]{2,}/g,
  id = /^[ \t]*/gm,
  Ls = (e) => e.replace(od, " ").replace(id, "").trim(),
  sd = (e) =>
    Ls(`
  %c@hello-pangea/dnd

  %c${Ls(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`),
  ad = (e) => [
    sd(e),
    "color: #00C584; font-size: 1.2em; font-weight: bold;",
    "line-height: 1.5",
    "color: #723874;",
  ],
  cd = "__@hello-pangea/dnd-disable-dev-warnings";
function la(e, t) {
  nd || (typeof window < "u" && window[cd]) || console[e](...ad(t));
}
var Ov = la.bind(null, "warn"),
  ld = la.bind(null, "error");
function Re() {}
function ud(e, t) {
  return { ...e, ...t };
}
function de(e, t, r) {
  let n = t.map((o) => {
    let i = ud(r, o.options);
    return (
      e.addEventListener(o.eventName, o.fn, i),
      function () {
        e.removeEventListener(o.eventName, o.fn, i);
      }
    );
  });
  return function () {
    n.forEach((i) => {
      i();
    });
  };
}
var dd = !0,
  Bs = "Invariant failed",
  Ve = class extends Error {};
Ve.prototype.toString = function () {
  return this.message;
};
function b(e, t) {
  if (!e) throw dd ? new Ve(Bs) : new Ve(`${Bs}: ${t || ""}`);
}
var kn = class extends v.default.Component {
    constructor(...t) {
      super(...t),
        (this.callbacks = null),
        (this.unbind = Re),
        (this.onWindowError = (r) => {
          let n = this.getCallbacks();
          n.isDragging() && n.tryAbort(),
            r.error instanceof Ve && r.preventDefault();
        }),
        (this.getCallbacks = () => {
          if (!this.callbacks)
            throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return this.callbacks;
        }),
        (this.setCallbacks = (r) => {
          this.callbacks = r;
        });
    }
    componentDidMount() {
      this.unbind = de(window, [
        { eventName: "error", fn: this.onWindowError },
      ]);
    }
    componentDidCatch(t) {
      if (t instanceof Ve) {
        this.setState({});
        return;
      }
      throw t;
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  },
  pd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Nr = (e) => e + 1,
  fd = (e) => `
  You have lifted an item in position ${Nr(e.source.index)}
`,
  ua = (e, t) => {
    let r = e.droppableId === t.droppableId,
      n = Nr(e.index),
      o = Nr(t.index);
    return r
      ? `
      You have moved the item from position ${n}
      to position ${o}
    `
      : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
  },
  da = (e, t, r) =>
    t.droppableId === r.droppableId
      ? `
      The item ${e}
      has been combined with ${r.draggableId}`
      : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `,
  md = (e) => {
    let t = e.destination;
    if (t) return ua(e.source, t);
    let r = e.combine;
    return r
      ? da(e.draggableId, e.source, r)
      : "You are over an area that cannot be dropped on";
  },
  Ws = (e) => `
  The item has returned to its starting position
  of ${Nr(e.index)}
`,
  gd = (e) => {
    if (e.reason === "CANCEL")
      return `
      Movement cancelled.
      ${Ws(e.source)}
    `;
    let t = e.destination,
      r = e.combine;
    return t
      ? `
      You have dropped the item.
      ${ua(e.source, t)}
    `
      : r
        ? `
      You have dropped the item.
      ${da(e.draggableId, e.source, r)}
    `
        : `
    The item has been dropped while not over a drop area.
    ${Ws(e.source)}
  `;
  },
  hd = {
    dragHandleUsageInstructions: pd,
    onDragStart: fd,
    onDragUpdate: md,
    onDragEnd: gd,
  },
  Pr = hd,
  q = { x: 0, y: 0 },
  Y = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
  re = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  Oe = (e, t) => e.x === t.x && e.y === t.y,
  it = (e) => ({ x: e.x !== 0 ? -e.x : 0, y: e.y !== 0 ? -e.y : 0 }),
  Ge = (e, t, r = 0) => (e === "x" ? { x: t, y: r } : { x: r, y: t }),
  Nt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
  ks = (e, t) => Math.min(...t.map((r) => Nt(e, r))),
  pa = (e) => (t) => ({ x: e(t.x), y: e(t.y) }),
  bd = (e, t) => {
    let r = ue({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left),
    });
    return r.width <= 0 || r.height <= 0 ? null : r;
  },
  Wt = (e, t) => ({
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x,
  }),
  Ms = (e) => [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.left, y: e.bottom },
    { x: e.right, y: e.bottom },
  ],
  yd = { top: 0, right: 0, bottom: 0, left: 0 },
  vd = (e, t) => (t ? Wt(e, t.scroll.diff.displacement) : e),
  _d = (e, t, r) =>
    r && r.increasedBy
      ? { ...e, [t.end]: e[t.end] + r.increasedBy[t.line] }
      : e,
  Dd = (e, t) => (t && t.shouldClipSubject ? bd(t.pageMarginBox, e) : ue(e)),
  rt = ({ page: e, withPlaceholder: t, axis: r, frame: n }) => {
    let o = vd(e.marginBox, n),
      i = _d(o, r, t),
      s = Dd(i, n);
    return { page: e, withPlaceholder: t, active: s };
  },
  qn = (e, t) => {
    e.frame || b(!1);
    let r = e.frame,
      n = re(t, r.scroll.initial),
      o = it(n),
      i = {
        ...r,
        scroll: {
          initial: r.scroll.initial,
          current: t,
          diff: { value: n, displacement: o },
          max: r.scroll.max,
        },
      },
      s = rt({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: i,
      });
    return { ...e, frame: i, subject: s };
  },
  fa = z((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  ma = z((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  Ar = z((e) => Object.values(e)),
  Sd = z((e) => Object.values(e)),
  st = z((e, t) =>
    Sd(t)
      .filter((n) => e === n.descriptor.droppableId)
      .sort((n, o) => n.descriptor.index - o.descriptor.index),
  );
function jn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Fr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Tr = z((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)),
  Ed = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: n,
    previousImpact: o,
  }) => {
    if (!r.isCombineEnabled || !jn(o)) return null;
    function s(f) {
      let m = {
        type: "COMBINE",
        combine: { draggableId: f, droppableId: r.descriptor.id },
      };
      return { ...o, at: m };
    }
    let a = o.displaced.all,
      c = a.length ? a[0] : null;
    if (e) return c ? s(c) : null;
    let l = Tr(t, n);
    if (!c) {
      if (!l.length) return null;
      let f = l[l.length - 1];
      return s(f.descriptor.id);
    }
    let p = l.findIndex((f) => f.descriptor.id === c);
    p === -1 && b(!1);
    let u = p - 1;
    if (u < 0) return null;
    let d = l[u];
    return s(d.descriptor.id);
  },
  at = (e, t) => e.descriptor.droppableId === t.descriptor.id,
  ga = { point: q, value: 0 },
  Rt = { invisible: {}, visible: {}, all: [] },
  xd = { displaced: Rt, displacedBy: ga, at: null },
  wd = xd,
  pe = (e, t) => (r) => e <= r && r <= t,
  ha = (e) => {
    let t = pe(e.top, e.bottom),
      r = pe(e.left, e.right);
    return (n) => {
      if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right)) return !0;
      let i = t(n.top) || t(n.bottom),
        s = r(n.left) || r(n.right);
      if (i && s) return !0;
      let c = n.top < e.top && n.bottom > e.bottom,
        l = n.left < e.left && n.right > e.right;
      return c && l ? !0 : (c && s) || (l && i);
    };
  },
  Cd = (e) => {
    let t = pe(e.top, e.bottom),
      r = pe(e.left, e.right);
    return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
  },
  Yn = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width",
  },
  ba = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height",
  },
  Id = (e) => (t) => {
    let r = pe(t.top, t.bottom),
      n = pe(t.left, t.right);
    return (o) =>
      e === Yn ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
  },
  Pd = (e, t) => {
    let r = t.frame ? t.frame.scroll.diff.displacement : q;
    return Wt(e, r);
  },
  Nd = (e, t, r) => (t.subject.active ? r(t.subject.active)(e) : !1),
  Rd = (e, t, r) => r(t)(e),
  Kn = ({
    target: e,
    destination: t,
    viewport: r,
    withDroppableDisplacement: n,
    isVisibleThroughFrameFn: o,
  }) => {
    let i = n ? Pd(e, t) : e;
    return Nd(i, t, o) && Rd(i, r, o);
  },
  Od = (e) => Kn({ ...e, isVisibleThroughFrameFn: ha }),
  ya = (e) => Kn({ ...e, isVisibleThroughFrameFn: Cd }),
  Ad = (e) => Kn({ ...e, isVisibleThroughFrameFn: Id(e.destination.axis) }),
  Fd = (e, t, r) => {
    if (typeof r == "boolean") return r;
    if (!t) return !0;
    let { invisible: n, visible: o } = t;
    if (n[e]) return !1;
    let i = o[e];
    return i ? i.shouldAnimate : !0;
  };
function Td(e, t) {
  let r = e.page.marginBox,
    n = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return ue(Er(r, n));
}
function Ot({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i,
}) {
  return e.reduce(
    function (a, c) {
      let l = Td(c, r),
        p = c.descriptor.id;
      if (
        (a.all.push(p),
        !Od({
          target: l,
          destination: t,
          viewport: n,
          withDroppableDisplacement: !0,
        }))
      )
        return (a.invisible[c.descriptor.id] = !0), a;
      let d = Fd(p, i, o),
        f = { draggableId: p, shouldAnimate: d };
      return (a.visible[p] = f), a;
    },
    { all: [], visible: {}, invisible: {} },
  );
}
function Ld(e, t) {
  if (!e.length) return 0;
  let r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Vs({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n,
}) {
  let o = Ld(e, { inHomeList: t });
  return {
    displaced: Rt,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: { droppableId: n.descriptor.id, index: o },
    },
  };
}
function Rr({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a,
}) {
  let c = at(e, r);
  if (s == null)
    return Vs({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r,
    });
  let l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return Vs({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r,
    });
  let p = Tr(e, t),
    u = t.indexOf(l),
    d = p.slice(u);
  return {
    displaced: Ot({
      afterDragging: d,
      destination: r,
      displacedBy: o,
      last: i,
      viewport: n.frame,
      forceShouldAnimate: a,
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: { droppableId: r.descriptor.id, index: s },
    },
  };
}
function Ae(e, t) {
  return !!t.effected[e];
}
var Bd = ({
    isMovingForward: e,
    destination: t,
    draggables: r,
    combine: n,
    afterCritical: o,
  }) => {
    if (!t.isCombineEnabled) return null;
    let i = n.draggableId,
      a = r[i].descriptor.index;
    return Ae(i, o) ? (e ? a : a - 1) : e ? a + 1 : a;
  },
  Wd = ({
    isMovingForward: e,
    isInHomeList: t,
    insideDestination: r,
    location: n,
  }) => {
    if (!r.length) return null;
    let o = n.index,
      i = e ? o + 1 : o - 1,
      s = r[0].descriptor.index,
      a = r[r.length - 1].descriptor.index,
      c = t ? a : a + 1;
    return i < s || i > c ? null : i;
  },
  kd = ({
    isMovingForward: e,
    isInHomeList: t,
    draggable: r,
    draggables: n,
    destination: o,
    insideDestination: i,
    previousImpact: s,
    viewport: a,
    afterCritical: c,
  }) => {
    let l = s.at;
    if ((l || b(!1), l.type === "REORDER")) {
      let u = Wd({
        isMovingForward: e,
        isInHomeList: t,
        location: l.destination,
        insideDestination: i,
      });
      return u == null
        ? null
        : Rr({
            draggable: r,
            insideDestination: i,
            destination: o,
            viewport: a,
            last: s.displaced,
            displacedBy: s.displacedBy,
            index: u,
          });
    }
    let p = Bd({
      isMovingForward: e,
      destination: o,
      displaced: s.displaced,
      draggables: n,
      combine: l.combine,
      afterCritical: c,
    });
    return p == null
      ? null
      : Rr({
          draggable: r,
          insideDestination: i,
          destination: o,
          viewport: a,
          last: s.displaced,
          displacedBy: s.displacedBy,
          index: p,
        });
  },
  Md = ({ displaced: e, afterCritical: t, combineWith: r, displacedBy: n }) => {
    let o = !!(e.visible[r] || e.invisible[r]);
    return Ae(r, t) ? (o ? q : it(n.point)) : o ? n.point : q;
  },
  Vd = ({ afterCritical: e, impact: t, draggables: r }) => {
    let n = Fr(t);
    n || b(!1);
    let o = n.draggableId,
      i = r[o].page.borderBox.center,
      s = Md({
        displaced: t.displaced,
        afterCritical: e,
        combineWith: o,
        displacedBy: t.displacedBy,
      });
    return Y(i, s);
  },
  va = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
  Gd = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
  Qn = (e, t, r) =>
    t[e.crossAxisStart] +
    r.margin[e.crossAxisStart] +
    r.borderBox[e.crossAxisSize] / 2,
  Gs = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    Ge(e.line, t.marginBox[e.end] + va(e, r), Qn(e, t.marginBox, r)),
  $s = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    Ge(e.line, t.marginBox[e.start] - Gd(e, r), Qn(e, t.marginBox, r)),
  $d = ({ axis: e, moveInto: t, isMoving: r }) =>
    Ge(e.line, t.contentBox[e.start] + va(e, r), Qn(e, t.contentBox, r)),
  Ud = ({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o,
  }) => {
    let i = st(n.descriptor.id, r),
      s = t.page,
      a = n.axis;
    if (!i.length) return $d({ axis: a, moveInto: n.page, isMoving: s });
    let { displaced: c, displacedBy: l } = e,
      p = c.all[0];
    if (p) {
      let d = r[p];
      if (Ae(p, o)) return $s({ axis: a, moveRelativeTo: d.page, isMoving: s });
      let f = St(d.page, l.point);
      return $s({ axis: a, moveRelativeTo: f, isMoving: s });
    }
    let u = i[i.length - 1];
    if (u.descriptor.id === t.descriptor.id) return s.borderBox.center;
    if (Ae(u.descriptor.id, o)) {
      let d = St(u.page, it(o.displacedBy.point));
      return Gs({ axis: a, moveRelativeTo: d, isMoving: s });
    }
    return Gs({ axis: a, moveRelativeTo: u.page, isMoving: s });
  },
  Mn = (e, t) => {
    let r = e.frame;
    return r ? Y(t, r.scroll.diff.displacement) : t;
  },
  zd = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: o,
  }) => {
    let i = t.page.borderBox.center,
      s = e.at;
    return !r || !s
      ? i
      : s.type === "REORDER"
        ? Ud({
            impact: e,
            draggable: t,
            draggables: n,
            droppable: r,
            afterCritical: o,
          })
        : Vd({ impact: e, draggables: n, afterCritical: o });
  },
  Lr = (e) => {
    let t = zd(e),
      r = e.droppable;
    return r ? Mn(r, t) : t;
  },
  _a = (e, t) => {
    let r = re(t, e.scroll.initial),
      n = it(r);
    return {
      frame: ue({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width,
      }),
      scroll: {
        initial: e.scroll.initial,
        max: e.scroll.max,
        current: t,
        diff: { value: r, displacement: n },
      },
    };
  };
function Us(e, t) {
  return e.map((r) => t[r]);
}
function Hd(e, t) {
  for (let r = 0; r < t.length; r++) {
    let n = t[r].visible[e];
    if (n) return n;
  }
  return null;
}
var qd = ({
    impact: e,
    viewport: t,
    destination: r,
    draggables: n,
    maxScrollChange: o,
  }) => {
    let i = _a(t, Y(t.scroll.current, o)),
      s = r.frame ? qn(r, Y(r.frame.scroll.current, o)) : r,
      a = e.displaced,
      c = Ot({
        afterDragging: Us(a.all, n),
        destination: r,
        displacedBy: e.displacedBy,
        viewport: i.frame,
        last: a,
        forceShouldAnimate: !1,
      }),
      l = Ot({
        afterDragging: Us(a.all, n),
        destination: s,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        last: a,
        forceShouldAnimate: !1,
      }),
      p = {},
      u = {},
      d = [a, c, l];
    return (
      a.all.forEach((m) => {
        let h = Hd(m, d);
        if (h) {
          u[m] = h;
          return;
        }
        p[m] = !0;
      }),
      { ...e, displaced: { all: a.all, invisible: p, visible: u } }
    );
  },
  jd = (e, t) => Y(e.scroll.diff.displacement, t),
  Xn = ({ pageBorderBoxCenter: e, draggable: t, viewport: r }) => {
    let n = jd(r, e),
      o = re(n, t.page.borderBox.center);
    return Y(t.client.borderBox.center, o);
  },
  Da = ({
    draggable: e,
    destination: t,
    newPageBorderBoxCenter: r,
    viewport: n,
    withDroppableDisplacement: o,
    onlyOnMainAxis: i = !1,
  }) => {
    let s = re(r, e.page.borderBox.center),
      c = {
        target: Wt(e.page.borderBox, s),
        destination: t,
        withDroppableDisplacement: o,
        viewport: n,
      };
    return i ? Ad(c) : ya(c);
  },
  Yd = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    draggables: n,
    previousImpact: o,
    viewport: i,
    previousPageBorderBoxCenter: s,
    previousClientSelection: a,
    afterCritical: c,
  }) => {
    if (!r.isEnabled) return null;
    let l = st(r.descriptor.id, n),
      p = at(t, r),
      u =
        Ed({
          isMovingForward: e,
          draggable: t,
          destination: r,
          insideDestination: l,
          previousImpact: o,
        }) ||
        kd({
          isMovingForward: e,
          isInHomeList: p,
          draggable: t,
          draggables: n,
          destination: r,
          insideDestination: l,
          previousImpact: o,
          viewport: i,
          afterCritical: c,
        });
    if (!u) return null;
    let d = Lr({
      impact: u,
      draggable: t,
      droppable: r,
      draggables: n,
      afterCritical: c,
    });
    if (
      Da({
        draggable: t,
        destination: r,
        newPageBorderBoxCenter: d,
        viewport: i.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: Xn({
          pageBorderBoxCenter: d,
          draggable: t,
          viewport: i,
        }),
        impact: u,
        scrollJumpRequest: null,
      };
    let m = re(d, s),
      h = qd({
        impact: u,
        viewport: i,
        destination: r,
        draggables: n,
        maxScrollChange: m,
      });
    return { clientSelection: a, impact: h, scrollJumpRequest: m };
  },
  J = (e) => {
    let t = e.subject.active;
    return t || b(!1), t;
  },
  Kd = ({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: n,
    viewport: o,
  }) => {
    let i = r.subject.active;
    if (!i) return null;
    let s = r.axis,
      a = pe(i[s.start], i[s.end]),
      c = Ar(n)
        .filter((p) => p !== r)
        .filter((p) => p.isEnabled)
        .filter((p) => !!p.subject.active)
        .filter((p) => ha(o.frame)(J(p)))
        .filter((p) => {
          let u = J(p);
          return e
            ? i[s.crossAxisEnd] < u[s.crossAxisEnd]
            : u[s.crossAxisStart] < i[s.crossAxisStart];
        })
        .filter((p) => {
          let u = J(p),
            d = pe(u[s.start], u[s.end]);
          return a(u[s.start]) || a(u[s.end]) || d(i[s.start]) || d(i[s.end]);
        })
        .sort((p, u) => {
          let d = J(p)[s.crossAxisStart],
            f = J(u)[s.crossAxisStart];
          return e ? d - f : f - d;
        })
        .filter(
          (p, u, d) => J(p)[s.crossAxisStart] === J(d[0])[s.crossAxisStart],
        );
    if (!c.length) return null;
    if (c.length === 1) return c[0];
    let l = c.filter((p) => pe(J(p)[s.start], J(p)[s.end])(t[s.line]));
    return l.length === 1
      ? l[0]
      : l.length > 1
        ? l.sort((p, u) => J(p)[s.start] - J(u)[s.start])[0]
        : c.sort((p, u) => {
            let d = ks(t, Ms(J(p))),
              f = ks(t, Ms(J(u)));
            return d !== f ? d - f : J(p)[s.start] - J(u)[s.start];
          })[0];
  },
  zs = (e, t) => {
    let r = e.page.borderBox.center;
    return Ae(e.descriptor.id, t) ? re(r, t.displacedBy.point) : r;
  },
  Qd = (e, t) => {
    let r = e.page.borderBox;
    return Ae(e.descriptor.id, t) ? Wt(r, it(t.displacedBy.point)) : r;
  },
  Xd = ({
    pageBorderBoxCenter: e,
    viewport: t,
    destination: r,
    insideDestination: n,
    afterCritical: o,
  }) =>
    n
      .filter((s) =>
        ya({
          target: Qd(s, o),
          destination: r,
          viewport: t.frame,
          withDroppableDisplacement: !0,
        }),
      )
      .sort((s, a) => {
        let c = Nt(e, Mn(r, zs(s, o))),
          l = Nt(e, Mn(r, zs(a, o)));
        return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
      })[0] || null,
  kt = z(function (t, r) {
    let n = r[t.line];
    return { value: n, point: Ge(t.line, n) };
  }),
  Jd = (e, t, r) => {
    let n = e.axis;
    if (e.descriptor.mode === "virtual") return Ge(n.line, t[n.line]);
    let o = e.subject.page.contentBox[n.size],
      c =
        st(e.descriptor.id, r).reduce(
          (l, p) => l + p.client.marginBox[n.size],
          0,
        ) +
        t[n.line] -
        o;
    return c <= 0 ? null : Ge(n.line, c);
  },
  Sa = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
  Ea = (e, t, r) => {
    let n = e.frame;
    at(t, e) && b(!1), e.subject.withPlaceholder && b(!1);
    let o = kt(e.axis, t.displaceBy).point,
      i = Jd(e, o, r),
      s = {
        placeholderSize: o,
        increasedBy: i,
        oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
      };
    if (!n) {
      let p = rt({
        page: e.subject.page,
        withPlaceholder: s,
        axis: e.axis,
        frame: e.frame,
      });
      return { ...e, subject: p };
    }
    let a = i ? Y(n.scroll.max, i) : n.scroll.max,
      c = Sa(n, a),
      l = rt({
        page: e.subject.page,
        withPlaceholder: s,
        axis: e.axis,
        frame: c,
      });
    return { ...e, subject: l, frame: c };
  },
  Zd = (e) => {
    let t = e.subject.withPlaceholder;
    t || b(!1);
    let r = e.frame;
    if (!r) {
      let s = rt({
        page: e.subject.page,
        axis: e.axis,
        frame: null,
        withPlaceholder: null,
      });
      return { ...e, subject: s };
    }
    let n = t.oldFrameMaxScroll;
    n || b(!1);
    let o = Sa(r, n),
      i = rt({
        page: e.subject.page,
        axis: e.axis,
        frame: o,
        withPlaceholder: null,
      });
    return { ...e, subject: i, frame: o };
  },
  ep = ({
    previousPageBorderBoxCenter: e,
    moveRelativeTo: t,
    insideDestination: r,
    draggable: n,
    draggables: o,
    destination: i,
    viewport: s,
    afterCritical: a,
  }) => {
    if (!t) {
      if (r.length) return null;
      let u = {
          displaced: Rt,
          displacedBy: ga,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: 0 },
          },
        },
        d = Lr({
          impact: u,
          draggable: n,
          droppable: i,
          draggables: o,
          afterCritical: a,
        }),
        f = at(n, i) ? i : Ea(i, n, o);
      return Da({
        draggable: n,
        destination: f,
        newPageBorderBoxCenter: d,
        viewport: s.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? u
        : null;
    }
    let c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line],
      l = (() => {
        let u = t.descriptor.index;
        return t.descriptor.id === n.descriptor.id || c ? u : u + 1;
      })(),
      p = kt(i.axis, n.displaceBy);
    return Rr({
      draggable: n,
      insideDestination: r,
      destination: i,
      viewport: s,
      displacedBy: p,
      last: Rt,
      index: l,
    });
  },
  tp = ({
    isMovingForward: e,
    previousPageBorderBoxCenter: t,
    draggable: r,
    isOver: n,
    draggables: o,
    droppables: i,
    viewport: s,
    afterCritical: a,
  }) => {
    let c = Kd({
      isMovingForward: e,
      pageBorderBoxCenter: t,
      source: n,
      droppables: i,
      viewport: s,
    });
    if (!c) return null;
    let l = st(c.descriptor.id, o),
      p = Xd({
        pageBorderBoxCenter: t,
        viewport: s,
        destination: c,
        insideDestination: l,
        afterCritical: a,
      }),
      u = ep({
        previousPageBorderBoxCenter: t,
        destination: c,
        draggable: r,
        draggables: o,
        moveRelativeTo: p,
        insideDestination: l,
        viewport: s,
        afterCritical: a,
      });
    if (!u) return null;
    let d = Lr({
      impact: u,
      draggable: r,
      droppable: c,
      draggables: o,
      afterCritical: a,
    });
    return {
      clientSelection: Xn({
        pageBorderBoxCenter: d,
        draggable: r,
        viewport: s,
      }),
      impact: u,
      scrollJumpRequest: null,
    };
  },
  ne = (e) => {
    let t = e.at;
    return t
      ? t.type === "REORDER"
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  },
  rp = (e, t) => {
    let r = ne(e);
    return r ? t[r] : null;
  },
  np = ({ state: e, type: t }) => {
    let r = rp(e.impact, e.dimensions.droppables),
      n = !!r,
      o = e.dimensions.droppables[e.critical.droppable.id],
      i = r || o,
      s = i.axis.direction,
      a =
        (s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
        (s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
    if (a && !n) return null;
    let c = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
      l = e.dimensions.draggables[e.critical.draggable.id],
      p = e.current.page.borderBoxCenter,
      { draggables: u, droppables: d } = e.dimensions;
    return a
      ? Yd({
          isMovingForward: c,
          previousPageBorderBoxCenter: p,
          draggable: l,
          destination: i,
          draggables: u,
          viewport: e.viewport,
          previousClientSelection: e.current.client.selection,
          previousImpact: e.impact,
          afterCritical: e.afterCritical,
        })
      : tp({
          isMovingForward: c,
          previousPageBorderBoxCenter: p,
          draggable: l,
          isOver: i,
          draggables: u,
          droppables: d,
          viewport: e.viewport,
          afterCritical: e.afterCritical,
        });
  };
function Me(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function xa(e) {
  let t = pe(e.top, e.bottom),
    r = pe(e.left, e.right);
  return function (o) {
    return t(o.y) && r(o.x);
  };
}
function op(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function ip({ pageBorderBox: e, draggable: t, candidates: r }) {
  let n = t.page.borderBox.center,
    o = r
      .map((i) => {
        let s = i.axis,
          a = Ge(
            i.axis.line,
            e.center[s.line],
            i.page.borderBox.center[s.crossAxisLine],
          );
        return { id: i.descriptor.id, distance: Nt(n, a) };
      })
      .sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function sp({ pageBorderBox: e, draggable: t, droppables: r }) {
  let n = Ar(r).filter((o) => {
    if (!o.isEnabled) return !1;
    let i = o.subject.active;
    if (!i || !op(e, i)) return !1;
    if (xa(i)(e.center)) return !0;
    let s = o.axis,
      a = i.center[s.crossAxisLine],
      c = e[s.crossAxisStart],
      l = e[s.crossAxisEnd],
      p = pe(i[s.crossAxisStart], i[s.crossAxisEnd]),
      u = p(c),
      d = p(l);
    return !u && !d ? !0 : u ? c < a : l > a;
  });
  return n.length
    ? n.length === 1
      ? n[0].descriptor.id
      : ip({ pageBorderBox: e, draggable: t, candidates: n })
    : null;
}
var wa = (e, t) => ue(Wt(e, t)),
  ap = (e, t) => {
    let r = e.frame;
    return r ? wa(t, r.scroll.diff.value) : t;
  };
function Ca({ displaced: e, id: t }) {
  return !!(e.visible[t] || e.invisible[t]);
}
function cp({ draggable: e, closest: t, inHomeList: r }) {
  return t
    ? r && t.descriptor.index > e.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var lp = ({
    pageBorderBoxWithDroppableScroll: e,
    draggable: t,
    destination: r,
    insideDestination: n,
    last: o,
    viewport: i,
    afterCritical: s,
  }) => {
    let a = r.axis,
      c = kt(r.axis, t.displaceBy),
      l = c.value,
      p = e[a.start],
      u = e[a.end],
      f =
        Tr(t, n).find((h) => {
          let g = h.descriptor.id,
            D = h.page.borderBox.center[a.line],
            S = Ae(g, s),
            C = Ca({ displaced: o, id: g });
          return S ? (C ? u <= D : p < D - l) : C ? u <= D + l : p < D;
        }) || null,
      m = cp({ draggable: t, closest: f, inHomeList: at(t, r) });
    return Rr({
      draggable: t,
      insideDestination: n,
      destination: r,
      viewport: i,
      last: o,
      displacedBy: c,
      index: m,
    });
  },
  up = 4,
  dp = ({
    draggable: e,
    pageBorderBoxWithDroppableScroll: t,
    previousImpact: r,
    destination: n,
    insideDestination: o,
    afterCritical: i,
  }) => {
    if (!n.isCombineEnabled) return null;
    let s = n.axis,
      a = kt(n.axis, e.displaceBy),
      c = a.value,
      l = t[s.start],
      p = t[s.end],
      d = Tr(e, o).find((m) => {
        let h = m.descriptor.id,
          g = m.page.borderBox,
          S = g[s.size] / up,
          C = Ae(h, i),
          w = Ca({ displaced: r.displaced, id: h });
        return C
          ? w
            ? p > g[s.start] + S && p < g[s.end] - S
            : l > g[s.start] - c + S && l < g[s.end] - c - S
          : w
            ? p > g[s.start] + c + S && p < g[s.end] + c - S
            : l > g[s.start] + S && l < g[s.end] - S;
      });
    return d
      ? {
          displacedBy: a,
          displaced: r.displaced,
          at: {
            type: "COMBINE",
            combine: {
              draggableId: d.descriptor.id,
              droppableId: n.descriptor.id,
            },
          },
        }
      : null;
  },
  Ia = ({
    pageOffset: e,
    draggable: t,
    draggables: r,
    droppables: n,
    previousImpact: o,
    viewport: i,
    afterCritical: s,
  }) => {
    let a = wa(t.page.borderBox, e),
      c = sp({ pageBorderBox: a, draggable: t, droppables: n });
    if (!c) return wd;
    let l = n[c],
      p = st(l.descriptor.id, r),
      u = ap(l, a);
    return (
      dp({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        previousImpact: o,
        destination: l,
        insideDestination: p,
        afterCritical: s,
      }) ||
      lp({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        destination: l,
        insideDestination: p,
        last: o.displaced,
        viewport: i,
        afterCritical: s,
      })
    );
  },
  Jn = (e, t) => ({ ...e, [t.descriptor.id]: t }),
  pp = ({ previousImpact: e, impact: t, droppables: r }) => {
    let n = ne(e),
      o = ne(t);
    if (!n || n === o) return r;
    let i = r[n];
    if (!i.subject.withPlaceholder) return r;
    let s = Zd(i);
    return Jn(r, s);
  },
  fp = ({
    draggable: e,
    draggables: t,
    droppables: r,
    previousImpact: n,
    impact: o,
  }) => {
    let i = pp({ previousImpact: n, impact: o, droppables: r }),
      s = ne(o);
    if (!s) return i;
    let a = r[s];
    if (at(e, a) || a.subject.withPlaceholder) return i;
    let c = Ea(a, e, t);
    return Jn(i, c);
  },
  It = ({
    state: e,
    clientSelection: t,
    dimensions: r,
    viewport: n,
    impact: o,
    scrollJumpRequest: i,
  }) => {
    let s = n || e.viewport,
      a = r || e.dimensions,
      c = t || e.current.client.selection,
      l = re(c, e.initial.client.selection),
      p = {
        offset: l,
        selection: c,
        borderBoxCenter: Y(e.initial.client.borderBoxCenter, l),
      },
      u = {
        selection: Y(p.selection, s.scroll.current),
        borderBoxCenter: Y(p.borderBoxCenter, s.scroll.current),
        offset: Y(p.offset, s.scroll.diff.value),
      },
      d = { client: p, page: u };
    if (e.phase === "COLLECTING")
      return { ...e, dimensions: a, viewport: s, current: d };
    let f = a.draggables[e.critical.draggable.id],
      m =
        o ||
        Ia({
          pageOffset: u.offset,
          draggable: f,
          draggables: a.draggables,
          droppables: a.droppables,
          previousImpact: e.impact,
          viewport: s,
          afterCritical: e.afterCritical,
        }),
      h = fp({
        draggable: f,
        impact: m,
        previousImpact: e.impact,
        draggables: a.draggables,
        droppables: a.droppables,
      });
    return {
      ...e,
      current: d,
      dimensions: { draggables: a.draggables, droppables: h },
      impact: m,
      viewport: s,
      scrollJumpRequest: i || null,
      forceShouldAnimate: i ? !1 : null,
    };
  };
function mp(e, t) {
  return e.map((r) => t[r]);
}
var Pa = ({
    impact: e,
    viewport: t,
    draggables: r,
    destination: n,
    forceShouldAnimate: o,
  }) => {
    let i = e.displaced,
      s = mp(i.all, r),
      a = Ot({
        afterDragging: s,
        destination: n,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: o,
        last: i,
      });
    return { ...e, displaced: a };
  },
  Na = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: n,
    viewport: o,
    afterCritical: i,
  }) => {
    let s = Lr({
      impact: e,
      draggable: t,
      draggables: n,
      droppable: r,
      afterCritical: i,
    });
    return Xn({ pageBorderBoxCenter: s, draggable: t, viewport: o });
  },
  Ra = ({ state: e, dimensions: t, viewport: r }) => {
    e.movementMode !== "SNAP" && b(!1);
    let n = e.impact,
      o = r || e.viewport,
      i = t || e.dimensions,
      { draggables: s, droppables: a } = i,
      c = s[e.critical.draggable.id],
      l = ne(n);
    l || b(!1);
    let p = a[l],
      u = Pa({ impact: n, viewport: o, destination: p, draggables: s }),
      d = Na({
        impact: u,
        draggable: c,
        droppable: p,
        draggables: s,
        viewport: o,
        afterCritical: e.afterCritical,
      });
    return It({
      impact: u,
      clientSelection: d,
      state: e,
      dimensions: i,
      viewport: o,
    });
  },
  gp = (e) => ({ index: e.index, droppableId: e.droppableId }),
  Oa = ({ draggable: e, home: t, draggables: r, viewport: n }) => {
    let o = kt(t.axis, e.displaceBy),
      i = st(t.descriptor.id, r),
      s = i.indexOf(e);
    s === -1 && b(!1);
    let a = i.slice(s + 1),
      c = a.reduce((d, f) => ((d[f.descriptor.id] = !0), d), {}),
      l = {
        inVirtualList: t.descriptor.mode === "virtual",
        displacedBy: o,
        effected: c,
      };
    return {
      impact: {
        displaced: Ot({
          afterDragging: a,
          destination: t,
          displacedBy: o,
          last: null,
          viewport: n.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: o,
        at: { type: "REORDER", destination: gp(e.descriptor) },
      },
      afterCritical: l,
    };
  },
  hp = (e, t) => ({
    draggables: e.draggables,
    droppables: Jn(e.droppables, t),
  }),
  Mt = (e) => {},
  Vt = (e) => {},
  bp = ({ draggable: e, offset: t, initialWindowScroll: r }) => {
    let n = St(e.client, t),
      o = Et(n, r);
    return {
      ...e,
      placeholder: { ...e.placeholder, client: n },
      client: n,
      page: o,
    };
  },
  yp = (e) => {
    let t = e.frame;
    return t || b(!1), t;
  },
  vp = ({ additions: e, updatedDroppables: t, viewport: r }) => {
    let n = r.scroll.diff.value;
    return e.map((o) => {
      let i = o.descriptor.droppableId,
        s = t[i],
        c = yp(s).scroll.diff.value,
        l = Y(n, c);
      return bp({
        draggable: o,
        offset: l,
        initialWindowScroll: r.scroll.initial,
      });
    });
  },
  _p = "Processing dynamic changes",
  Dp = ({ state: e, published: t }) => {
    Mt();
    let r = t.modified.map((D) => {
        let S = e.dimensions.droppables[D.droppableId];
        return qn(S, D.scroll);
      }),
      n = { ...e.dimensions.droppables, ...fa(r) },
      o = ma(
        vp({
          additions: t.additions,
          updatedDroppables: n,
          viewport: e.viewport,
        }),
      ),
      i = { ...e.dimensions.draggables, ...o };
    t.removals.forEach((D) => {
      delete i[D];
    });
    let s = { droppables: n, draggables: i },
      a = ne(e.impact),
      c = a ? s.droppables[a] : null,
      l = s.draggables[e.critical.draggable.id],
      p = s.droppables[e.critical.droppable.id],
      { impact: u, afterCritical: d } = Oa({
        draggable: l,
        home: p,
        draggables: i,
        viewport: e.viewport,
      }),
      f = c && c.isCombineEnabled ? e.impact : u,
      m = Ia({
        pageOffset: e.current.page.offset,
        draggable: s.draggables[e.critical.draggable.id],
        draggables: s.draggables,
        droppables: s.droppables,
        previousImpact: f,
        viewport: e.viewport,
        afterCritical: d,
      });
    Vt(_p);
    let h = {
      ...e,
      phase: "DRAGGING",
      impact: m,
      onLiftImpact: u,
      dimensions: s,
      afterCritical: d,
      forceShouldAnimate: !1,
    };
    return e.phase === "COLLECTING"
      ? h
      : { ...h, phase: "DROP_PENDING", reason: e.reason, isWaiting: !1 };
  },
  Vn = (e) => e.movementMode === "SNAP",
  Pn = (e, t, r) => {
    let n = hp(e.dimensions, t);
    return !Vn(e) || r
      ? It({ state: e, dimensions: n })
      : Ra({ state: e, dimensions: n });
  };
function Nn(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? { ...e, scrollJumpRequest: null }
    : e;
}
var Hs = { phase: "IDLE", completed: null, shouldFlush: !1 },
  Sp = (e = Hs, t) => {
    if (t.type === "FLUSH") return { ...Hs, shouldFlush: !0 };
    if (t.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && b(!1);
      let {
          critical: r,
          clientSelection: n,
          viewport: o,
          dimensions: i,
          movementMode: s,
        } = t.payload,
        a = i.draggables[r.draggable.id],
        c = i.droppables[r.droppable.id],
        l = {
          selection: n,
          borderBoxCenter: a.client.borderBox.center,
          offset: q,
        },
        p = {
          client: l,
          page: {
            selection: Y(l.selection, o.scroll.initial),
            borderBoxCenter: Y(l.selection, o.scroll.initial),
            offset: Y(l.selection, o.scroll.diff.value),
          },
        },
        u = Ar(i.droppables).every((h) => !h.isFixedOnPage),
        { impact: d, afterCritical: f } = Oa({
          draggable: a,
          home: c,
          draggables: i.draggables,
          viewport: o,
        });
      return {
        phase: "DRAGGING",
        isDragging: !0,
        critical: r,
        movementMode: s,
        dimensions: i,
        initial: p,
        current: p,
        isWindowScrollAllowed: u,
        impact: d,
        afterCritical: f,
        onLiftImpact: d,
        viewport: o,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if (t.type === "COLLECTION_STARTING")
      return e.phase === "COLLECTING" || e.phase === "DROP_PENDING"
        ? e
        : (e.phase !== "DRAGGING" && b(!1), { ...e, phase: "COLLECTING" });
    if (t.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || b(!1),
        Dp({ state: e, published: t.payload })
      );
    if (t.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      Me(e) || b(!1);
      let { client: r } = t.payload;
      return Oe(r, e.current.client.selection)
        ? e
        : It({ state: e, clientSelection: r, impact: Vn(e) ? e.impact : null });
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return Nn(e);
      Me(e) || b(!1);
      let { id: r, newScroll: n } = t.payload,
        o = e.dimensions.droppables[r];
      if (!o) return e;
      let i = qn(o, n);
      return Pn(e, i, !1);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Me(e) || b(!1);
      let { id: r, isEnabled: n } = t.payload,
        o = e.dimensions.droppables[r];
      o || b(!1), o.isEnabled === n && b(!1);
      let i = { ...o, isEnabled: n };
      return Pn(e, i, !0);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Me(e) || b(!1);
      let { id: r, isCombineEnabled: n } = t.payload,
        o = e.dimensions.droppables[r];
      o || b(!1), o.isCombineEnabled === n && b(!1);
      let i = { ...o, isCombineEnabled: n };
      return Pn(e, i, !0);
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      Me(e) || b(!1), e.isWindowScrollAllowed || b(!1);
      let r = t.payload.newScroll;
      if (Oe(e.viewport.scroll.current, r)) return Nn(e);
      let n = _a(e.viewport, r);
      return Vn(e)
        ? Ra({ state: e, viewport: n })
        : It({ state: e, viewport: n });
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!Me(e)) return e;
      let r = t.payload.maxScroll;
      if (Oe(r, e.viewport.scroll.max)) return e;
      let n = { ...e.viewport, scroll: { ...e.viewport.scroll, max: r } };
      return { ...e, viewport: n };
    }
    if (
      t.type === "MOVE_UP" ||
      t.type === "MOVE_DOWN" ||
      t.type === "MOVE_LEFT" ||
      t.type === "MOVE_RIGHT"
    ) {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && b(!1);
      let r = np({ state: e, type: t.type });
      return r
        ? It({
            state: e,
            impact: r.impact,
            clientSelection: r.clientSelection,
            scrollJumpRequest: r.scrollJumpRequest,
          })
        : e;
    }
    if (t.type === "DROP_PENDING") {
      let r = t.payload.reason;
      return (
        e.phase !== "COLLECTING" && b(!1),
        { ...e, phase: "DROP_PENDING", isWaiting: !0, reason: r }
      );
    }
    if (t.type === "DROP_ANIMATE") {
      let { completed: r, dropDuration: n, newHomeClientOffset: o } = t.payload;
      return (
        e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || b(!1),
        {
          phase: "DROP_ANIMATING",
          completed: r,
          dropDuration: n,
          newHomeClientOffset: o,
          dimensions: e.dimensions,
        }
      );
    }
    if (t.type === "DROP_COMPLETE") {
      let { completed: r } = t.payload;
      return { phase: "IDLE", completed: r, shouldFlush: !1 };
    }
    return e;
  },
  Ep = (e) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: e }),
  xp = (e) => ({ type: "LIFT", payload: e }),
  wp = (e) => ({ type: "INITIAL_PUBLISH", payload: e }),
  Cp = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
  Ip = () => ({ type: "COLLECTION_STARTING", payload: null }),
  Pp = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
  Np = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
  Rp = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
  Aa = (e) => ({ type: "MOVE", payload: e }),
  Op = (e) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: e }),
  Ap = (e) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e }),
  Fp = () => ({ type: "MOVE_UP", payload: null }),
  Tp = () => ({ type: "MOVE_DOWN", payload: null }),
  Lp = () => ({ type: "MOVE_RIGHT", payload: null }),
  Bp = () => ({ type: "MOVE_LEFT", payload: null }),
  Zn = () => ({ type: "FLUSH", payload: null }),
  Wp = (e) => ({ type: "DROP_ANIMATE", payload: e }),
  eo = (e) => ({ type: "DROP_COMPLETE", payload: e }),
  Fa = (e) => ({ type: "DROP", payload: e }),
  kp = (e) => ({ type: "DROP_PENDING", payload: e }),
  Ta = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
var Mp =
    (e) =>
    ({ getState: t, dispatch: r }) =>
    (n) =>
    (o) => {
      if (o.type !== "LIFT") {
        n(o);
        return;
      }
      let { id: i, clientSelection: s, movementMode: a } = o.payload,
        c = t();
      c.phase === "DROP_ANIMATING" && r(eo({ completed: c.completed })),
        t().phase !== "IDLE" && b(!1),
        r(Zn()),
        r(Ep({ draggableId: i, movementMode: a }));
      let p = {
          draggableId: i,
          scrollOptions: { shouldPublishImmediately: a === "SNAP" },
        },
        { critical: u, dimensions: d, viewport: f } = e.startPublishing(p);
      r(
        wp({
          critical: u,
          dimensions: d,
          clientSelection: s,
          movementMode: a,
          viewport: f,
        }),
      );
    },
  Vp = (e) => () => (t) => (r) => {
    r.type === "INITIAL_PUBLISH" && e.dragging(),
      r.type === "DROP_ANIMATE" &&
        e.dropping(r.payload.completed.result.reason),
      (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
      t(r);
  },
  to = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  At = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  La = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  ke = `${La.outOfTheWay}s ${to.outOfTheWay}`,
  Pt = {
    fluid: `opacity ${ke}`,
    snap: `transform ${ke}, opacity ${ke}`,
    drop: (e) => {
      let t = `${e}s ${to.drop}`;
      return `transform ${t}, opacity ${t}`;
    },
    outOfTheWay: `transform ${ke}`,
    placeholder: `height ${ke}, width ${ke}, margin ${ke}`,
  },
  qs = (e) => (Oe(e, q) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
  Gn = {
    moveTo: qs,
    drop: (e, t) => {
      let r = qs(e);
      if (r) return t ? `${r} scale(${At.scale.drop})` : r;
    },
  },
  { minDropTime: $n, maxDropTime: Ba } = La,
  Gp = Ba - $n,
  js = 1500,
  $p = 0.6,
  Up = ({ current: e, destination: t, reason: r }) => {
    let n = Nt(e, t);
    if (n <= 0) return $n;
    if (n >= js) return Ba;
    let o = n / js,
      i = $n + Gp * o,
      s = r === "CANCEL" ? i * $p : i;
    return Number(s.toFixed(2));
  },
  zp = ({
    impact: e,
    draggable: t,
    dimensions: r,
    viewport: n,
    afterCritical: o,
  }) => {
    let { draggables: i, droppables: s } = r,
      a = ne(e),
      c = a ? s[a] : null,
      l = s[t.descriptor.droppableId],
      p = Na({
        impact: e,
        draggable: t,
        draggables: i,
        afterCritical: o,
        droppable: c || l,
        viewport: n,
      });
    return re(p, t.client.borderBox.center);
  },
  Hp = ({
    draggables: e,
    reason: t,
    lastImpact: r,
    home: n,
    viewport: o,
    onLiftImpact: i,
  }) =>
    !r.at || t !== "DROP"
      ? {
          impact: Pa({
            draggables: e,
            impact: i,
            destination: n,
            viewport: o,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : r.at.type === "REORDER"
        ? { impact: r, didDropInsideDroppable: !0 }
        : { impact: { ...r, displaced: Rt }, didDropInsideDroppable: !0 },
  qp =
    ({ getState: e, dispatch: t }) =>
    (r) =>
    (n) => {
      if (n.type !== "DROP") {
        r(n);
        return;
      }
      let o = e(),
        i = n.payload.reason;
      if (o.phase === "COLLECTING") {
        t(kp({ reason: i }));
        return;
      }
      if (o.phase === "IDLE") return;
      o.phase === "DROP_PENDING" && o.isWaiting && b(!1),
        o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || b(!1);
      let a = o.critical,
        c = o.dimensions,
        l = c.draggables[o.critical.draggable.id],
        { impact: p, didDropInsideDroppable: u } = Hp({
          reason: i,
          lastImpact: o.impact,
          afterCritical: o.afterCritical,
          onLiftImpact: o.onLiftImpact,
          home: o.dimensions.droppables[o.critical.droppable.id],
          viewport: o.viewport,
          draggables: o.dimensions.draggables,
        }),
        d = u ? jn(p) : null,
        f = u ? Fr(p) : null,
        m = { index: a.draggable.index, droppableId: a.droppable.id },
        h = {
          draggableId: l.descriptor.id,
          type: l.descriptor.type,
          source: m,
          reason: i,
          mode: o.movementMode,
          destination: d,
          combine: f,
        },
        g = zp({
          impact: p,
          draggable: l,
          dimensions: c,
          viewport: o.viewport,
          afterCritical: o.afterCritical,
        }),
        D = {
          critical: o.critical,
          afterCritical: o.afterCritical,
          result: h,
          impact: p,
        };
      if (!(!Oe(o.current.client.offset, g) || !!h.combine)) {
        t(eo({ completed: D }));
        return;
      }
      let C = Up({
        current: o.current.client.offset,
        destination: g,
        reason: i,
      });
      t(Wp({ newHomeClientOffset: g, dropDuration: C, completed: D }));
    },
  jp = qp,
  Wa = () => ({ x: window.pageXOffset, y: window.pageYOffset });
function Yp(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: (t) => {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function Kp({ onWindowScroll: e }) {
  function t() {
    e(Wa());
  }
  let r = tt(t),
    n = Yp(r),
    o = Re;
  function i() {
    return o !== Re;
  }
  function s() {
    i() && b(!1), (o = de(window, [n]));
  }
  function a() {
    i() || b(!1), r.cancel(), o(), (o = Re);
  }
  return { start: s, stop: a, isActive: i };
}
var Qp = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  Xp = (e) => {
    let t = Kp({
      onWindowScroll: (r) => {
        e.dispatch(Op({ newScroll: r }));
      },
    });
    return (r) => (n) => {
      !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(),
        t.isActive() && Qp(n) && t.stop(),
        r(n);
    };
  },
  Jp = Xp,
  Zp = (e) => {
    let t = !1,
      r = !1,
      n = setTimeout(() => {
        r = !0;
      }),
      o = (i) => {
        t || r || ((t = !0), e(i), clearTimeout(n));
      };
    return (o.wasCalled = () => t), o;
  },
  ef = () => {
    let e = [],
      t = (o) => {
        let i = e.findIndex((a) => a.timerId === o);
        i === -1 && b(!1);
        let [s] = e.splice(i, 1);
        s.callback();
      };
    return {
      add: (o) => {
        let i = setTimeout(() => t(i)),
          s = { timerId: i, callback: o };
        e.push(s);
      },
      flush: () => {
        if (!e.length) return;
        let o = [...e];
        (e.length = 0),
          o.forEach((i) => {
            clearTimeout(i.timerId), i.callback();
          });
      },
    };
  },
  tf = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.droppableId === t.droppableId && e.index === t.index,
  rf = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.draggableId === t.draggableId && e.droppableId === t.droppableId,
  nf = (e, t) => {
    if (e === t) return !0;
    let r =
        e.draggable.id === t.draggable.id &&
        e.draggable.droppableId === t.draggable.droppableId &&
        e.draggable.type === t.draggable.type &&
        e.draggable.index === t.draggable.index,
      n =
        e.droppable.id === t.droppable.id &&
        e.droppable.type === t.droppable.type;
    return r && n;
  },
  xt = (e, t) => {
    Mt(), t(), Vt();
  },
  wr = (e, t) => ({
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: { droppableId: e.droppable.id, index: e.draggable.index },
    mode: t,
  });
function Rn(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  let o = Zp(r);
  e(t, { announce: o }), o.wasCalled() || r(n(t));
}
var of = (e, t) => {
    let r = ef(),
      n = null,
      o = (u, d) => {
        n && b(!1),
          xt("onBeforeCapture", () => {
            let f = e().onBeforeCapture;
            f && f({ draggableId: u, mode: d });
          });
      },
      i = (u, d) => {
        n && b(!1),
          xt("onBeforeDragStart", () => {
            let f = e().onBeforeDragStart;
            f && f(wr(u, d));
          });
      },
      s = (u, d) => {
        n && b(!1);
        let f = wr(u, d);
        (n = {
          mode: d,
          lastCritical: u,
          lastLocation: f.source,
          lastCombine: null,
        }),
          r.add(() => {
            xt("onDragStart", () => Rn(e().onDragStart, f, t, Pr.onDragStart));
          });
      },
      a = (u, d) => {
        let f = jn(d),
          m = Fr(d);
        n || b(!1);
        let h = !nf(u, n.lastCritical);
        h && (n.lastCritical = u);
        let g = !tf(n.lastLocation, f);
        g && (n.lastLocation = f);
        let D = !rf(n.lastCombine, m);
        if ((D && (n.lastCombine = m), !h && !g && !D)) return;
        let S = { ...wr(u, n.mode), combine: m, destination: f };
        r.add(() => {
          xt("onDragUpdate", () => Rn(e().onDragUpdate, S, t, Pr.onDragUpdate));
        });
      },
      c = () => {
        n || b(!1), r.flush();
      },
      l = (u) => {
        n || b(!1),
          (n = null),
          xt("onDragEnd", () => Rn(e().onDragEnd, u, t, Pr.onDragEnd));
      };
    return {
      beforeCapture: o,
      beforeStart: i,
      start: s,
      update: a,
      flush: c,
      drop: l,
      abort: () => {
        if (!n) return;
        let u = {
          ...wr(n.lastCritical, n.mode),
          combine: null,
          destination: null,
          reason: "CANCEL",
        };
        l(u);
      },
    };
  },
  sf = (e, t) => {
    let r = of(e, t);
    return (n) => (o) => (i) => {
      if (i.type === "BEFORE_INITIAL_CAPTURE") {
        r.beforeCapture(i.payload.draggableId, i.payload.movementMode);
        return;
      }
      if (i.type === "INITIAL_PUBLISH") {
        let a = i.payload.critical;
        r.beforeStart(a, i.payload.movementMode),
          o(i),
          r.start(a, i.payload.movementMode);
        return;
      }
      if (i.type === "DROP_COMPLETE") {
        let a = i.payload.completed.result;
        r.flush(), o(i), r.drop(a);
        return;
      }
      if ((o(i), i.type === "FLUSH")) {
        r.abort();
        return;
      }
      let s = n.getState();
      s.phase === "DRAGGING" && r.update(s.critical, s.impact);
    };
  },
  af = (e) => (t) => (r) => {
    if (r.type !== "DROP_ANIMATION_FINISHED") {
      t(r);
      return;
    }
    let n = e.getState();
    n.phase !== "DROP_ANIMATING" && b(!1),
      e.dispatch(eo({ completed: n.completed }));
  },
  cf = af,
  lf = (e) => {
    let t = null,
      r = null;
    function n() {
      r && (cancelAnimationFrame(r), (r = null)), t && (t(), (t = null));
    }
    return (o) => (i) => {
      if (
        ((i.type === "FLUSH" ||
          i.type === "DROP_COMPLETE" ||
          i.type === "DROP_ANIMATION_FINISHED") &&
          n(),
        o(i),
        i.type !== "DROP_ANIMATE")
      )
        return;
      let s = {
        eventName: "scroll",
        options: { capture: !0, passive: !1, once: !0 },
        fn: function () {
          e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ta());
        },
      };
      r = requestAnimationFrame(() => {
        (r = null), (t = de(window, [s]));
      });
    };
  },
  uf = lf,
  df = (e) => () => (t) => (r) => {
    (r.type === "DROP_COMPLETE" ||
      r.type === "FLUSH" ||
      r.type === "DROP_ANIMATE") &&
      e.stopPublishing(),
      t(r);
  },
  pf = (e) => {
    let t = !1;
    return () => (r) => (n) => {
      if (n.type === "INITIAL_PUBLISH") {
        (t = !0),
          e.tryRecordFocus(n.payload.critical.draggable.id),
          r(n),
          e.tryRestoreFocusRecorded();
        return;
      }
      if ((r(n), !!t)) {
        if (n.type === "FLUSH") {
          (t = !1), e.tryRestoreFocusRecorded();
          return;
        }
        if (n.type === "DROP_COMPLETE") {
          t = !1;
          let o = n.payload.completed.result;
          o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId),
            e.tryRestoreFocusRecorded();
        }
      }
    };
  },
  ff = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  mf = (e) => (t) => (r) => (n) => {
    if (ff(n)) {
      e.stop(), r(n);
      return;
    }
    if (n.type === "INITIAL_PUBLISH") {
      r(n);
      let o = t.getState();
      o.phase !== "DRAGGING" && b(!1), e.start(o);
      return;
    }
    r(n), e.scroll(t.getState());
  },
  gf = (e) => (t) => (r) => {
    if ((t(r), r.type !== "PUBLISH_WHILE_DRAGGING")) return;
    let n = e.getState();
    n.phase === "DROP_PENDING" &&
      (n.isWaiting || e.dispatch(Fa({ reason: n.reason })));
  },
  hf = gf,
  bf = hn,
  yf = ({
    dimensionMarshal: e,
    focusMarshal: t,
    styleMarshal: r,
    getResponders: n,
    announce: o,
    autoScroller: i,
  }) =>
    mn(
      Sp,
      bf(ss(Vp(r), df(e), Mp(e), jp, cf, uf, hf, mf(i), Jp, pf(t), sf(n, o))),
    ),
  On = () => ({ additions: {}, removals: {}, modified: {} });
function vf({ registry: e, callbacks: t }) {
  let r = On(),
    n = null,
    o = () => {
      n ||
        (t.collectionStarting(),
        (n = requestAnimationFrame(() => {
          (n = null), Mt();
          let { additions: c, removals: l, modified: p } = r,
            u = Object.keys(c)
              .map((m) => e.draggable.getById(m).getDimension(q))
              .sort((m, h) => m.descriptor.index - h.descriptor.index),
            d = Object.keys(p).map((m) => {
              let g = e.droppable.getById(m).callbacks.getScrollWhileDragging();
              return { droppableId: m, scroll: g };
            }),
            f = { additions: u, removals: Object.keys(l), modified: d };
          (r = On()), Vt(), t.publish(f);
        })));
    };
  return {
    add: (c) => {
      let l = c.descriptor.id;
      (r.additions[l] = c),
        (r.modified[c.descriptor.droppableId] = !0),
        r.removals[l] && delete r.removals[l],
        o();
    },
    remove: (c) => {
      let l = c.descriptor;
      (r.removals[l.id] = !0),
        (r.modified[l.droppableId] = !0),
        r.additions[l.id] && delete r.additions[l.id],
        o();
    },
    stop: () => {
      n && (cancelAnimationFrame(n), (n = null), (r = On()));
    },
  };
}
var ka = ({ scrollHeight: e, scrollWidth: t, height: r, width: n }) => {
    let o = re({ x: t, y: e }, { x: n, y: r });
    return { x: Math.max(0, o.x), y: Math.max(0, o.y) };
  },
  Ma = () => {
    let e = document.documentElement;
    return e || b(!1), e;
  },
  Va = () => {
    let e = Ma();
    return ka({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  _f = () => {
    let e = Wa(),
      t = Va(),
      r = e.y,
      n = e.x,
      o = Ma(),
      i = o.clientWidth,
      s = o.clientHeight,
      a = n + i,
      c = r + s;
    return {
      frame: ue({ top: r, left: n, right: a, bottom: c }),
      scroll: {
        initial: e,
        current: e,
        max: t,
        diff: { value: q, displacement: q },
      },
    };
  },
  Df = ({ critical: e, scrollOptions: t, registry: r }) => {
    Mt();
    let n = _f(),
      o = n.scroll.current,
      i = e.droppable,
      s = r.droppable
        .getAllByType(i.type)
        .map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)),
      a = r.draggable
        .getAllByType(e.draggable.type)
        .map((p) => p.getDimension(o)),
      c = { draggables: ma(a), droppables: fa(s) };
    return Vt(), { dimensions: c, critical: e, viewport: n };
  };
function Ys(e, t, r) {
  return !(
    r.descriptor.id === t.id ||
    r.descriptor.type !== t.type ||
    e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual"
  );
}
var Sf = (e, t) => {
    let r = null,
      n = vf({
        callbacks: {
          publish: t.publishWhileDragging,
          collectionStarting: t.collectionStarting,
        },
        registry: e,
      }),
      o = (d, f) => {
        e.droppable.exists(d) || b(!1),
          r && t.updateDroppableIsEnabled({ id: d, isEnabled: f });
      },
      i = (d, f) => {
        r &&
          (e.droppable.exists(d) || b(!1),
          t.updateDroppableIsCombineEnabled({ id: d, isCombineEnabled: f }));
      },
      s = (d, f) => {
        r &&
          (e.droppable.exists(d) || b(!1),
          t.updateDroppableScroll({ id: d, newScroll: f }));
      },
      a = (d, f) => {
        r && e.droppable.getById(d).callbacks.scroll(f);
      },
      c = () => {
        if (!r) return;
        n.stop();
        let d = r.critical.droppable;
        e.droppable
          .getAllByType(d.type)
          .forEach((f) => f.callbacks.dragStopped()),
          r.unsubscribe(),
          (r = null);
      },
      l = (d) => {
        r || b(!1);
        let f = r.critical.draggable;
        d.type === "ADDITION" && Ys(e, f, d.value) && n.add(d.value),
          d.type === "REMOVAL" && Ys(e, f, d.value) && n.remove(d.value);
      };
    return {
      updateDroppableIsEnabled: o,
      updateDroppableIsCombineEnabled: i,
      scrollDroppable: a,
      updateDroppableScroll: s,
      startPublishing: (d) => {
        r && b(!1);
        let f = e.draggable.getById(d.draggableId),
          m = e.droppable.getById(f.descriptor.droppableId),
          h = { draggable: f.descriptor, droppable: m.descriptor },
          g = e.subscribe(l);
        return (
          (r = { critical: h, unsubscribe: g }),
          Df({ critical: h, registry: e, scrollOptions: d.scrollOptions })
        );
      },
      stopPublishing: c,
    };
  },
  Ga = (e, t) =>
    e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
        ? !1
        : e.completed.result.reason === "DROP",
  Ef = (e) => {
    window.scrollBy(e.x, e.y);
  },
  xf = z((e) => Ar(e).filter((t) => !(!t.isEnabled || !t.frame))),
  wf = (e, t) =>
    xf(t).find((n) => (n.frame || b(!1), xa(n.frame.pageMarginBox)(e))) || null,
  Cf = ({ center: e, destination: t, droppables: r }) => {
    if (t) {
      let o = r[t];
      return o.frame ? o : null;
    }
    return wf(e, r);
  },
  Ft = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  },
  If = (e, t, r = () => Ft) => {
    let n = r(),
      o = e[t.size] * n.startFromPercentage,
      i = e[t.size] * n.maxScrollAtPercentage;
    return { startScrollingFrom: o, maxScrollValueAt: i };
  },
  $a = ({ startOfRange: e, endOfRange: t, current: r }) => {
    let n = t - e;
    return n === 0 ? 0 : (r - e) / n;
  },
  ro = 1,
  Pf = (e, t, r = () => Ft) => {
    let n = r();
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return n.maxPixelScroll;
    if (e === t.startScrollingFrom) return ro;
    let i =
        1 -
        $a({
          startOfRange: t.maxScrollValueAt,
          endOfRange: t.startScrollingFrom,
          current: e,
        }),
      s = n.maxPixelScroll * n.ease(i);
    return Math.ceil(s);
  },
  Nf = (e, t, r) => {
    let n = r(),
      o = n.durationDampening.accelerateAt,
      i = n.durationDampening.stopDampeningAt,
      s = t,
      a = i,
      l = Date.now() - s;
    if (l >= i) return e;
    if (l < o) return ro;
    let p = $a({ startOfRange: o, endOfRange: a, current: l }),
      u = e * n.ease(p);
    return Math.ceil(u);
  },
  Ks = ({
    distanceToEdge: e,
    thresholds: t,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: o,
  }) => {
    let i = Pf(e, t, o);
    return i === 0 ? 0 : n ? Math.max(Nf(i, r, o), ro) : i;
  },
  Qs = ({
    container: e,
    distanceToEdges: t,
    dragStartTime: r,
    axis: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = If(e, n, i);
    return t[n.end] < t[n.start]
      ? Ks({
          distanceToEdge: t[n.end],
          thresholds: s,
          dragStartTime: r,
          shouldUseTimeDampening: o,
          getAutoScrollerOptions: i,
        })
      : -1 *
          Ks({
            distanceToEdge: t[n.start],
            thresholds: s,
            dragStartTime: r,
            shouldUseTimeDampening: o,
            getAutoScrollerOptions: i,
          });
  },
  Rf = ({ container: e, subject: t, proposedScroll: r }) => {
    let n = t.height > e.height,
      o = t.width > e.width;
    return !o && !n ? r : o && n ? null : { x: o ? 0 : r.x, y: n ? 0 : r.y };
  },
  Of = pa((e) => (e === 0 ? 0 : e)),
  Ua = ({
    dragStartTime: e,
    container: t,
    subject: r,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = {
        top: n.y - t.top,
        right: t.right - n.x,
        bottom: t.bottom - n.y,
        left: n.x - t.left,
      },
      a = Qs({
        container: t,
        distanceToEdges: s,
        dragStartTime: e,
        axis: Yn,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: i,
      }),
      c = Qs({
        container: t,
        distanceToEdges: s,
        dragStartTime: e,
        axis: ba,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: i,
      }),
      l = Of({ x: c, y: a });
    if (Oe(l, q)) return null;
    let p = Rf({ container: t, subject: r, proposedScroll: l });
    return p ? (Oe(p, q) ? null : p) : null;
  },
  Af = pa((e) => (e === 0 ? 0 : e > 0 ? 1 : -1)),
  no = (() => {
    let e = (t, r) => (t < 0 ? t : t > r ? t - r : 0);
    return ({ current: t, max: r, change: n }) => {
      let o = Y(t, n),
        i = { x: e(o.x, r.x), y: e(o.y, r.y) };
      return Oe(i, q) ? null : i;
    };
  })(),
  za = ({ max: e, current: t, change: r }) => {
    let n = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
      o = Af(r),
      i = no({ max: n, current: t, change: o });
    return !i || (o.x !== 0 && i.x === 0) || (o.y !== 0 && i.y === 0);
  },
  oo = (e, t) =>
    za({ current: e.scroll.current, max: e.scroll.max, change: t }),
  Ff = (e, t) => {
    if (!oo(e, t)) return null;
    let r = e.scroll.max,
      n = e.scroll.current;
    return no({ current: n, max: r, change: t });
  },
  io = (e, t) => {
    let r = e.frame;
    return r
      ? za({ current: r.scroll.current, max: r.scroll.max, change: t })
      : !1;
  },
  Tf = (e, t) => {
    let r = e.frame;
    return !r || !io(e, t)
      ? null
      : no({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  Lf = ({
    viewport: e,
    subject: t,
    center: r,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = Ua({
      dragStartTime: n,
      container: e.frame,
      subject: t,
      center: r,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: i,
    });
    return s && oo(e, s) ? s : null;
  },
  Bf = ({
    droppable: e,
    subject: t,
    center: r,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = e.frame;
    if (!s) return null;
    let a = Ua({
      dragStartTime: n,
      container: s.pageMarginBox,
      subject: t,
      center: r,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: i,
    });
    return a && io(e, a) ? a : null;
  },
  Xs = ({
    state: e,
    dragStartTime: t,
    shouldUseTimeDampening: r,
    scrollWindow: n,
    scrollDroppable: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = e.current.page.borderBoxCenter,
      c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
    if (e.isWindowScrollAllowed) {
      let u = e.viewport,
        d = Lf({
          dragStartTime: t,
          viewport: u,
          subject: c,
          center: s,
          shouldUseTimeDampening: r,
          getAutoScrollerOptions: i,
        });
      if (d) {
        n(d);
        return;
      }
    }
    let l = Cf({
      center: s,
      destination: ne(e.impact),
      droppables: e.dimensions.droppables,
    });
    if (!l) return;
    let p = Bf({
      dragStartTime: t,
      droppable: l,
      subject: c,
      center: s,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i,
    });
    p && o(l.descriptor.id, p);
  },
  Wf = ({
    scrollWindow: e,
    scrollDroppable: t,
    getAutoScrollerOptions: r = () => Ft,
  }) => {
    let n = tt(e),
      o = tt(t),
      i = null,
      s = (l) => {
        i || b(!1);
        let { shouldUseTimeDampening: p, dragStartTime: u } = i;
        Xs({
          state: l,
          scrollWindow: n,
          scrollDroppable: o,
          dragStartTime: u,
          shouldUseTimeDampening: p,
          getAutoScrollerOptions: r,
        });
      };
    return {
      start: (l) => {
        Mt(), i && b(!1);
        let p = Date.now(),
          u = !1,
          d = () => {
            u = !0;
          };
        Xs({
          state: l,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: d,
          scrollDroppable: d,
          getAutoScrollerOptions: r,
        }),
          (i = { dragStartTime: p, shouldUseTimeDampening: u }),
          Vt(),
          u && s(l);
      },
      stop: () => {
        i && (n.cancel(), o.cancel(), (i = null));
      },
      scroll: s,
    };
  },
  kf = ({ move: e, scrollDroppable: t, scrollWindow: r }) => {
    let n = (a, c) => {
        let l = Y(a.current.client.selection, c);
        e({ client: l });
      },
      o = (a, c) => {
        if (!io(a, c)) return c;
        let l = Tf(a, c);
        if (!l) return t(a.descriptor.id, c), null;
        let p = re(c, l);
        return t(a.descriptor.id, p), re(c, p);
      },
      i = (a, c, l) => {
        if (!a || !oo(c, l)) return l;
        let p = Ff(c, l);
        if (!p) return r(l), null;
        let u = re(l, p);
        return r(u), re(l, u);
      };
    return (a) => {
      let c = a.scrollJumpRequest;
      if (!c) return;
      let l = ne(a.impact);
      l || b(!1);
      let p = o(a.dimensions.droppables[l], c);
      if (!p) return;
      let u = a.viewport,
        d = i(a.isWindowScrollAllowed, u, p);
      d && n(a, d);
    };
  },
  Mf = ({
    scrollDroppable: e,
    scrollWindow: t,
    move: r,
    getAutoScrollerOptions: n,
  }) => {
    let o = Wf({
        scrollWindow: t,
        scrollDroppable: e,
        getAutoScrollerOptions: n,
      }),
      i = kf({ move: r, scrollWindow: t, scrollDroppable: e });
    return {
      scroll: (c) => {
        if (!(n().disabled || c.phase !== "DRAGGING")) {
          if (c.movementMode === "FLUID") {
            o.scroll(c);
            return;
          }
          c.scrollJumpRequest && i(c);
        }
      },
      start: o.start,
      stop: o.stop,
    };
  },
  nt = "data-rfd",
  ot = (() => {
    let e = `${nt}-drag-handle`;
    return {
      base: e,
      draggableId: `${e}-draggable-id`,
      contextId: `${e}-context-id`,
    };
  })(),
  Un = (() => {
    let e = `${nt}-draggable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  Vf = (() => {
    let e = `${nt}-droppable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  Js = { contextId: `${nt}-scroll-container-context-id` },
  Gf = (e) => (t) => `[${t}="${e}"]`,
  wt = (e, t) =>
    e
      .map((r) => {
        let n = r.styles[t];
        return n ? `${r.selector} { ${n} }` : "";
      })
      .join(" "),
  $f = "pointer-events: none;",
  Uf = (e) => {
    let t = Gf(e),
      r = (() => {
        let a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: t(ot.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: a,
            dragging: $f,
            dropAnimating: a,
          },
        };
      })(),
      n = (() => {
        let a = `
      transition: ${Pt.outOfTheWay};
    `;
        return {
          selector: t(Un.contextId),
          styles: { dragging: a, dropAnimating: a, userCancel: a },
        };
      })(),
      o = {
        selector: t(Vf.contextId),
        styles: { always: "overflow-anchor: none;" },
      },
      s = [
        n,
        r,
        o,
        {
          selector: "body",
          styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
          },
        },
      ];
    return {
      always: wt(s, "always"),
      resting: wt(s, "resting"),
      dragging: wt(s, "dragging"),
      dropAnimating: wt(s, "dropAnimating"),
      userCancel: wt(s, "userCancel"),
    };
  },
  zf =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? v.useLayoutEffect
      : v.useEffect,
  oe = zf,
  An = () => {
    let e = document.querySelector("head");
    return e || b(!1), e;
  },
  Zs = (e) => {
    let t = document.createElement("style");
    return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
  };
function Hf(e, t) {
  let r = R(() => Uf(e), [e]),
    n = (0, v.useRef)(null),
    o = (0, v.useRef)(null),
    i = x(
      z((u) => {
        let d = o.current;
        d || b(!1), (d.textContent = u);
      }),
      [],
    ),
    s = x((u) => {
      let d = n.current;
      d || b(!1), (d.textContent = u);
    }, []);
  oe(() => {
    (!n.current && !o.current) || b(!1);
    let u = Zs(t),
      d = Zs(t);
    return (
      (n.current = u),
      (o.current = d),
      u.setAttribute(`${nt}-always`, e),
      d.setAttribute(`${nt}-dynamic`, e),
      An().appendChild(u),
      An().appendChild(d),
      s(r.always),
      i(r.resting),
      () => {
        let f = (m) => {
          let h = m.current;
          h || b(!1), An().removeChild(h), (m.current = null);
        };
        f(n), f(o);
      }
    );
  }, [t, s, i, r.always, r.resting, e]);
  let a = x(() => i(r.dragging), [i, r.dragging]),
    c = x(
      (u) => {
        if (u === "DROP") {
          i(r.dropAnimating);
          return;
        }
        i(r.userCancel);
      },
      [i, r.dropAnimating, r.userCancel],
    ),
    l = x(() => {
      o.current && i(r.resting);
    }, [i, r.resting]);
  return R(() => ({ dragging: a, dropping: c, resting: l }), [a, c, l]);
}
function Ha(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var qa = (e) =>
  e && e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView
    : window;
function Gt(e) {
  return e instanceof qa(e).HTMLElement;
}
function ja(e, t) {
  let r = `[${ot.contextId}="${e}"]`,
    n = Ha(document, r);
  if (!n.length) return null;
  let o = n.find((i) => i.getAttribute(ot.draggableId) === t);
  return !o || !Gt(o) ? null : o;
}
function qf(e) {
  let t = (0, v.useRef)({}),
    r = (0, v.useRef)(null),
    n = (0, v.useRef)(null),
    o = (0, v.useRef)(!1),
    i = x(function (d, f) {
      let m = { id: d, focus: f };
      return (
        (t.current[d] = m),
        function () {
          let g = t.current;
          g[d] !== m && delete g[d];
        }
      );
    }, []),
    s = x(
      function (d) {
        let f = ja(e, d);
        f && f !== document.activeElement && f.focus();
      },
      [e],
    ),
    a = x(function (d, f) {
      r.current === d && (r.current = f);
    }, []),
    c = x(
      function () {
        n.current ||
          (o.current &&
            (n.current = requestAnimationFrame(() => {
              n.current = null;
              let d = r.current;
              d && s(d);
            })));
      },
      [s],
    ),
    l = x(function (d) {
      r.current = null;
      let f = document.activeElement;
      f && f.getAttribute(ot.draggableId) === d && (r.current = d);
    }, []);
  return (
    oe(
      () => (
        (o.current = !0),
        function () {
          o.current = !1;
          let d = n.current;
          d && cancelAnimationFrame(d);
        }
      ),
      [],
    ),
    R(
      () => ({
        register: i,
        tryRecordFocus: l,
        tryRestoreFocusRecorded: c,
        tryShiftRecord: a,
      }),
      [i, l, c, a],
    )
  );
}
function jf() {
  let e = { draggables: {}, droppables: {} },
    t = [];
  function r(u) {
    return (
      t.push(u),
      function () {
        let f = t.indexOf(u);
        f !== -1 && t.splice(f, 1);
      }
    );
  }
  function n(u) {
    t.length && t.forEach((d) => d(u));
  }
  function o(u) {
    return e.draggables[u] || null;
  }
  function i(u) {
    let d = o(u);
    return d || b(!1), d;
  }
  let s = {
    register: (u) => {
      (e.draggables[u.descriptor.id] = u), n({ type: "ADDITION", value: u });
    },
    update: (u, d) => {
      let f = e.draggables[d.descriptor.id];
      f &&
        f.uniqueId === u.uniqueId &&
        (delete e.draggables[d.descriptor.id],
        (e.draggables[u.descriptor.id] = u));
    },
    unregister: (u) => {
      let d = u.descriptor.id,
        f = o(d);
      f &&
        u.uniqueId === f.uniqueId &&
        (delete e.draggables[d],
        e.droppables[u.descriptor.droppableId] &&
          n({ type: "REMOVAL", value: u }));
    },
    getById: i,
    findById: o,
    exists: (u) => !!o(u),
    getAllByType: (u) =>
      Object.values(e.draggables).filter((d) => d.descriptor.type === u),
  };
  function a(u) {
    return e.droppables[u] || null;
  }
  function c(u) {
    let d = a(u);
    return d || b(!1), d;
  }
  let l = {
    register: (u) => {
      e.droppables[u.descriptor.id] = u;
    },
    unregister: (u) => {
      let d = a(u.descriptor.id);
      d && u.uniqueId === d.uniqueId && delete e.droppables[u.descriptor.id];
    },
    getById: c,
    findById: a,
    exists: (u) => !!a(u),
    getAllByType: (u) =>
      Object.values(e.droppables).filter((d) => d.descriptor.type === u),
  };
  function p() {
    (e.draggables = {}), (e.droppables = {}), (t.length = 0);
  }
  return { draggable: s, droppable: l, subscribe: r, clean: p };
}
function Yf() {
  let e = R(jf, []);
  return (
    (0, v.useEffect)(
      () =>
        function () {
          v.default.version.startsWith("16") ||
          v.default.version.startsWith("17")
            ? requestAnimationFrame(e.clean)
            : e.clean();
        },
      [e],
    ),
    e
  );
}
var so = v.default.createContext(null),
  Tt = () => {
    let e = document.body;
    return e || b(!1), e;
  },
  Kf = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  },
  Qf = Kf,
  Xf = (e) => `rfd-announcement-${e}`;
function Jf(e) {
  let t = R(() => Xf(e), [e]),
    r = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(
      function () {
        let i = document.createElement("div");
        return (
          (r.current = i),
          (i.id = t),
          i.setAttribute("aria-live", "assertive"),
          i.setAttribute("aria-atomic", "true"),
          Se(i.style, Qf),
          Tt().appendChild(i),
          function () {
            setTimeout(function () {
              let c = Tt();
              c.contains(i) && c.removeChild(i),
                i === r.current && (r.current = null);
            });
          }
        );
      },
      [t],
    ),
    x((o) => {
      let i = r.current;
      if (i) {
        i.textContent = o;
        return;
      }
    }, [])
  );
}
var Zf = 0,
  Ya = { separator: "::" };
function em(e, t = Ya) {
  return R(() => `${e}${t.separator}${Zf++}`, [t.separator, e]);
}
function tm(e, t = Ya) {
  let r = v.default.useId();
  return R(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var ao = "useId" in v.default ? tm : em;
function rm({ contextId: e, uniqueId: t }) {
  return `rfd-hidden-text-${e}-${t}`;
}
function nm({ contextId: e, text: t }) {
  let r = ao("hidden-text", { separator: "-" }),
    n = R(() => rm({ contextId: e, uniqueId: r }), [r, e]);
  return (
    (0, v.useEffect)(
      function () {
        let i = document.createElement("div");
        return (
          (i.id = n),
          (i.textContent = t),
          (i.style.display = "none"),
          Tt().appendChild(i),
          function () {
            let a = Tt();
            a.contains(i) && a.removeChild(i);
          }
        );
      },
      [n, t],
    ),
    n
  );
}
var Br = v.default.createContext(null),
  om = {
    react: "^16.8.5 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
  },
  im = /(\d+)\.(\d+)\.(\d+)/,
  ea = (e) => {
    let t = im.exec(e);
    t == null && b(!1);
    let r = Number(t[1]),
      n = Number(t[2]),
      o = Number(t[3]);
    return { major: r, minor: n, patch: o, raw: e };
  },
  sm = (e, t) =>
    t.major > e.major
      ? !0
      : t.major < e.major
        ? !1
        : t.minor > e.minor
          ? !0
          : t.minor < e.minor
            ? !1
            : t.patch >= e.patch,
  am = (e, t) => {
    let r = ea(e),
      n = ea(t);
    sm(r, n);
  };
var cm = (e) => {
  let t = e.doctype;
  t && (t.name.toLowerCase(), t.publicId);
};
function $t(e, t) {}
function lm() {
  $t(() => {
    am(om.react, v.default.version), cm(document);
  }, []);
}
function co(e) {
  let t = (0, v.useRef)(e);
  return (
    (0, v.useEffect)(() => {
      t.current = e;
    }),
    t
  );
}
function um() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(s) {
    return s === e;
  }
  function n(s) {
    e && b(!1);
    let a = { abandon: s };
    return (e = a), a;
  }
  function o() {
    e || b(!1), (e = null);
  }
  function i() {
    e && (e.abandon(), o());
  }
  return { isClaimed: t, isActive: r, claim: n, release: o, tryAbandon: i };
}
function Lt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
var dm = 9,
  pm = 13,
  lo = 27,
  Ka = 32,
  fm = 33,
  mm = 34,
  gm = 35,
  hm = 36,
  bm = 37,
  ym = 38,
  vm = 39,
  _m = 40,
  Dm = { [pm]: !0, [dm]: !0 },
  Qa = (e) => {
    Dm[e.keyCode] && e.preventDefault();
  },
  Sm = (() => {
    let e = "visibilitychange";
    return typeof document > "u"
      ? e
      : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
          (n) => `on${n}` in document,
        ) || e;
  })(),
  Wr = Sm,
  Xa = 0,
  ta = 5;
function Em(e, t) {
  return Math.abs(t.x - e.x) >= ta || Math.abs(t.y - e.y) >= ta;
}
var ra = { type: "IDLE" };
function xm({ cancel: e, completed: t, getPhase: r, setPhase: n }) {
  return [
    {
      eventName: "mousemove",
      fn: (o) => {
        let { button: i, clientX: s, clientY: a } = o;
        if (i !== Xa) return;
        let c = { x: s, y: a },
          l = r();
        if (l.type === "DRAGGING") {
          o.preventDefault(), l.actions.move(c);
          return;
        }
        l.type !== "PENDING" && b(!1);
        let p = l.point;
        if (!Em(p, c)) return;
        o.preventDefault();
        let u = l.actions.fluidLift(c);
        n({ type: "DRAGGING", actions: u });
      },
    },
    {
      eventName: "mouseup",
      fn: (o) => {
        let i = r();
        if (i.type !== "DRAGGING") {
          e();
          return;
        }
        o.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "mousedown",
      fn: (o) => {
        r().type === "DRAGGING" && o.preventDefault(), e();
      },
    },
    {
      eventName: "keydown",
      fn: (o) => {
        if (r().type === "PENDING") {
          e();
          return;
        }
        if (o.keyCode === lo) {
          o.preventDefault(), e();
          return;
        }
        Qa(o);
      },
    },
    { eventName: "resize", fn: e },
    {
      eventName: "scroll",
      options: { passive: !0, capture: !1 },
      fn: () => {
        r().type === "PENDING" && e();
      },
    },
    {
      eventName: "webkitmouseforcedown",
      fn: (o) => {
        let i = r();
        if ((i.type === "IDLE" && b(!1), i.actions.shouldRespectForcePress())) {
          e();
          return;
        }
        o.preventDefault();
      },
    },
    { eventName: Wr, fn: e },
  ];
}
function wm(e) {
  let t = (0, v.useRef)(ra),
    r = (0, v.useRef)(Re),
    n = R(
      () => ({
        eventName: "mousedown",
        fn: function (u) {
          if (
            u.defaultPrevented ||
            u.button !== Xa ||
            u.ctrlKey ||
            u.metaKey ||
            u.shiftKey ||
            u.altKey
          )
            return;
          let d = e.findClosestDraggableId(u);
          if (!d) return;
          let f = e.tryGetLock(d, s, { sourceEvent: u });
          if (!f) return;
          u.preventDefault();
          let m = { x: u.clientX, y: u.clientY };
          r.current(), l(f, m);
        },
      }),
      [e],
    ),
    o = R(
      () => ({
        eventName: "webkitmouseforcewillbegin",
        fn: (p) => {
          if (p.defaultPrevented) return;
          let u = e.findClosestDraggableId(p);
          if (!u) return;
          let d = e.findOptionsForDraggable(u);
          d &&
            (d.shouldRespectForcePress ||
              (e.canGetLock(u) && p.preventDefault()));
        },
      }),
      [e],
    ),
    i = x(
      function () {
        let u = { passive: !1, capture: !0 };
        r.current = de(window, [o, n], u);
      },
      [o, n],
    ),
    s = x(() => {
      t.current.type !== "IDLE" && ((t.current = ra), r.current(), i());
    }, [i]),
    a = x(() => {
      let p = t.current;
      s(),
        p.type === "DRAGGING" && p.actions.cancel({ shouldBlockNextClick: !0 }),
        p.type === "PENDING" && p.actions.abort();
    }, [s]),
    c = x(
      function () {
        let u = { capture: !0, passive: !1 },
          d = xm({
            cancel: a,
            completed: s,
            getPhase: () => t.current,
            setPhase: (f) => {
              t.current = f;
            },
          });
        r.current = de(window, d, u);
      },
      [a, s],
    ),
    l = x(
      function (u, d) {
        t.current.type !== "IDLE" && b(!1),
          (t.current = { type: "PENDING", point: d, actions: u }),
          c();
      },
      [c],
    );
  oe(
    function () {
      return (
        i(),
        function () {
          r.current();
        }
      );
    },
    [i],
  );
}
function Cm() {}
var Im = { [mm]: !0, [fm]: !0, [hm]: !0, [gm]: !0 };
function Pm(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [
    {
      eventName: "keydown",
      fn: (o) => {
        if (o.keyCode === lo) {
          o.preventDefault(), r();
          return;
        }
        if (o.keyCode === Ka) {
          o.preventDefault(), n();
          return;
        }
        if (o.keyCode === _m) {
          o.preventDefault(), e.moveDown();
          return;
        }
        if (o.keyCode === ym) {
          o.preventDefault(), e.moveUp();
          return;
        }
        if (o.keyCode === vm) {
          o.preventDefault(), e.moveRight();
          return;
        }
        if (o.keyCode === bm) {
          o.preventDefault(), e.moveLeft();
          return;
        }
        if (Im[o.keyCode]) {
          o.preventDefault();
          return;
        }
        Qa(o);
      },
    },
    { eventName: "mousedown", fn: r },
    { eventName: "mouseup", fn: r },
    { eventName: "click", fn: r },
    { eventName: "touchstart", fn: r },
    { eventName: "resize", fn: r },
    { eventName: "wheel", fn: r, options: { passive: !0 } },
    { eventName: Wr, fn: r },
  ];
}
function Nm(e) {
  let t = (0, v.useRef)(Cm),
    r = R(
      () => ({
        eventName: "keydown",
        fn: function (i) {
          if (i.defaultPrevented || i.keyCode !== Ka) return;
          let s = e.findClosestDraggableId(i);
          if (!s) return;
          let a = e.tryGetLock(s, p, { sourceEvent: i });
          if (!a) return;
          i.preventDefault();
          let c = !0,
            l = a.snapLift();
          t.current();
          function p() {
            c || b(!1), (c = !1), t.current(), n();
          }
          t.current = de(window, Pm(l, p), { capture: !0, passive: !1 });
        },
      }),
      [e],
    ),
    n = x(
      function () {
        let i = { passive: !1, capture: !0 };
        t.current = de(window, [r], i);
      },
      [r],
    );
  oe(
    function () {
      return (
        n(),
        function () {
          t.current();
        }
      );
    },
    [n],
  );
}
var Fn = { type: "IDLE" },
  Rm = 120,
  Om = 0.15;
function Am({ cancel: e, getPhase: t }) {
  return [
    { eventName: "orientationchange", fn: e },
    { eventName: "resize", fn: e },
    {
      eventName: "contextmenu",
      fn: (r) => {
        r.preventDefault();
      },
    },
    {
      eventName: "keydown",
      fn: (r) => {
        if (t().type !== "DRAGGING") {
          e();
          return;
        }
        r.keyCode === lo && r.preventDefault(), e();
      },
    },
    { eventName: Wr, fn: e },
  ];
}
function Fm({ cancel: e, completed: t, getPhase: r }) {
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: (n) => {
        let o = r();
        if (o.type !== "DRAGGING") {
          e();
          return;
        }
        o.hasMoved = !0;
        let { clientX: i, clientY: s } = n.touches[0],
          a = { x: i, y: s };
        n.preventDefault(), o.actions.move(a);
      },
    },
    {
      eventName: "touchend",
      fn: (n) => {
        let o = r();
        if (o.type !== "DRAGGING") {
          e();
          return;
        }
        n.preventDefault(), o.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "touchcancel",
      fn: (n) => {
        if (r().type !== "DRAGGING") {
          e();
          return;
        }
        n.preventDefault(), e();
      },
    },
    {
      eventName: "touchforcechange",
      fn: (n) => {
        let o = r();
        o.type === "IDLE" && b(!1);
        let i = n.touches[0];
        if (!i || !(i.force >= Om)) return;
        let a = o.actions.shouldRespectForcePress();
        if (o.type === "PENDING") {
          a && e();
          return;
        }
        if (a) {
          if (o.hasMoved) {
            n.preventDefault();
            return;
          }
          e();
          return;
        }
        n.preventDefault();
      },
    },
    { eventName: Wr, fn: e },
  ];
}
function Tm(e) {
  let t = (0, v.useRef)(Fn),
    r = (0, v.useRef)(Re),
    n = x(function () {
      return t.current;
    }, []),
    o = x(function (f) {
      t.current = f;
    }, []),
    i = R(
      () => ({
        eventName: "touchstart",
        fn: function (f) {
          if (f.defaultPrevented) return;
          let m = e.findClosestDraggableId(f);
          if (!m) return;
          let h = e.tryGetLock(m, a, { sourceEvent: f });
          if (!h) return;
          let g = f.touches[0],
            { clientX: D, clientY: S } = g,
            C = { x: D, y: S };
          r.current(), u(h, C);
        },
      }),
      [e],
    ),
    s = x(
      function () {
        let f = { capture: !0, passive: !1 };
        r.current = de(window, [i], f);
      },
      [i],
    ),
    a = x(() => {
      let d = t.current;
      d.type !== "IDLE" &&
        (d.type === "PENDING" && clearTimeout(d.longPressTimerId),
        o(Fn),
        r.current(),
        s());
    }, [s, o]),
    c = x(() => {
      let d = t.current;
      a(),
        d.type === "DRAGGING" && d.actions.cancel({ shouldBlockNextClick: !0 }),
        d.type === "PENDING" && d.actions.abort();
    }, [a]),
    l = x(
      function () {
        let f = { capture: !0, passive: !1 },
          m = { cancel: c, completed: a, getPhase: n },
          h = de(window, Fm(m), f),
          g = de(window, Am(m), f);
        r.current = function () {
          h(), g();
        };
      },
      [c, n, a],
    ),
    p = x(
      function () {
        let f = n();
        f.type !== "PENDING" && b(!1);
        let m = f.actions.fluidLift(f.point);
        o({ type: "DRAGGING", actions: m, hasMoved: !1 });
      },
      [n, o],
    ),
    u = x(
      function (f, m) {
        n().type !== "IDLE" && b(!1);
        let h = setTimeout(p, Rm);
        o({ type: "PENDING", point: m, actions: f, longPressTimerId: h }), l();
      },
      [l, n, o, p],
    );
  oe(
    function () {
      return (
        s(),
        function () {
          r.current();
          let m = n();
          m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Fn));
        }
      );
    },
    [n, s, o],
  ),
    oe(function () {
      return de(window, [
        {
          eventName: "touchmove",
          fn: () => {},
          options: { capture: !1, passive: !1 },
        },
      ]);
    }, []);
}
function Lm(e) {}
var Bm = [
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "optgroup",
  "video",
  "audio",
];
function Ja(e, t) {
  if (t == null) return !1;
  if (Bm.includes(t.tagName.toLowerCase())) return !0;
  let n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Ja(e, t.parentElement);
}
function Wm(e, t) {
  let r = t.target;
  return Gt(r) ? Ja(e, r) : !1;
}
var km = (e) => ue(e.getBoundingClientRect()).center;
function Mm(e) {
  return e instanceof qa(e).Element;
}
var Vm = (() => {
  let e = "matches";
  return typeof document > "u"
    ? e
    : [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (n) => n in Element.prototype,
      ) || e;
})();
function Za(e, t) {
  return e == null ? null : e[Vm](t) ? e : Za(e.parentElement, t);
}
function Gm(e, t) {
  return e.closest ? e.closest(t) : Za(e, t);
}
function $m(e) {
  return `[${ot.contextId}="${e}"]`;
}
function Um(e, t) {
  let r = t.target;
  if (!Mm(r)) return null;
  let n = $m(e),
    o = Gm(r, n);
  return !o || !Gt(o) ? null : o;
}
function zm(e, t) {
  let r = Um(e, t);
  return r ? r.getAttribute(ot.draggableId) : null;
}
function Hm(e, t) {
  let r = `[${Un.contextId}="${e}"]`,
    o = Ha(document, r).find((i) => i.getAttribute(Un.id) === t);
  return !o || !Gt(o) ? null : o;
}
function qm(e) {
  e.preventDefault();
}
function Cr({ expected: e, phase: t, isLockActive: r, shouldWarn: n }) {
  return !(!r() || e !== t);
}
function ec({ lockAPI: e, store: t, registry: r, draggableId: n }) {
  if (e.isClaimed()) return !1;
  let o = r.draggable.findById(n);
  return !(!o || !o.options.isEnabled || !Ga(t.getState(), n));
}
function jm({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s,
}) {
  if (!ec({ lockAPI: e, store: r, registry: n, draggableId: o })) return null;
  let c = n.draggable.getById(o),
    l = Hm(t, c.descriptor.id);
  if (!l || (s && !c.options.canDragInteractiveElements && Wm(l, s)))
    return null;
  let p = e.claim(i || Re),
    u = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function m(I, P) {
    Cr({ expected: I, phase: u, isLockActive: f, shouldWarn: !0 }) &&
      r.dispatch(P());
  }
  let h = m.bind(null, "DRAGGING");
  function g(I) {
    function P() {
      e.release(), (u = "COMPLETED");
    }
    u !== "PRE_DRAG" && (P(), b(!1)),
      r.dispatch(xp(I.liftActionArgs)),
      (u = "DRAGGING");
    function W(B, te = { shouldBlockNextClick: !1 }) {
      if ((I.cleanup(), te.shouldBlockNextClick)) {
        let M = de(window, [
          {
            eventName: "click",
            fn: qm,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(M);
      }
      P(), r.dispatch(Fa({ reason: B }));
    }
    return {
      isActive: () =>
        Cr({ expected: "DRAGGING", phase: u, isLockActive: f, shouldWarn: !1 }),
      shouldRespectForcePress: d,
      drop: (B) => W("DROP", B),
      cancel: (B) => W("CANCEL", B),
      ...I.actions,
    };
  }
  function D(I) {
    let P = tt((B) => {
      h(() => Aa({ client: B }));
    });
    return {
      ...g({
        liftActionArgs: { id: o, clientSelection: I, movementMode: "FLUID" },
        cleanup: () => P.cancel(),
        actions: { move: P },
      }),
      move: P,
    };
  }
  function S() {
    let I = {
      moveUp: () => h(Fp),
      moveRight: () => h(Lp),
      moveDown: () => h(Tp),
      moveLeft: () => h(Bp),
    };
    return g({
      liftActionArgs: { id: o, clientSelection: km(l), movementMode: "SNAP" },
      cleanup: Re,
      actions: I,
    });
  }
  function C() {
    Cr({ expected: "PRE_DRAG", phase: u, isLockActive: f, shouldWarn: !0 }) &&
      e.release();
  }
  return {
    isActive: () =>
      Cr({ expected: "PRE_DRAG", phase: u, isLockActive: f, shouldWarn: !1 }),
    shouldRespectForcePress: d,
    fluidLift: D,
    snapLift: S,
    abort: C,
  };
}
var Ym = [wm, Nm, Tm];
function Km({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o,
}) {
  let i = [...(o ? Ym : []), ...(n || [])],
    s = (0, v.useState)(() => um())[0],
    a = x(
      function (g, D) {
        Lt(g) && !Lt(D) && s.tryAbandon();
      },
      [s],
    );
  oe(
    function () {
      let g = t.getState();
      return t.subscribe(() => {
        let S = t.getState();
        a(g, S), (g = S);
      });
    },
    [s, t, a],
  ),
    oe(() => s.tryAbandon, [s.tryAbandon]);
  let c = x(
      (h) => ec({ lockAPI: s, registry: r, store: t, draggableId: h }),
      [s, r, t],
    ),
    l = x(
      (h, g, D) =>
        jm({
          lockAPI: s,
          registry: r,
          contextId: e,
          store: t,
          draggableId: h,
          forceSensorStop: g || null,
          sourceEvent: D && D.sourceEvent ? D.sourceEvent : null,
        }),
      [e, s, r, t],
    ),
    p = x((h) => zm(e, h), [e]),
    u = x(
      (h) => {
        let g = r.draggable.findById(h);
        return g ? g.options : null;
      },
      [r.draggable],
    ),
    d = x(
      function () {
        s.isClaimed() &&
          (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Zn()));
      },
      [s, t],
    ),
    f = x(() => s.isClaimed(), [s]),
    m = R(
      () => ({
        canGetLock: c,
        tryGetLock: l,
        findClosestDraggableId: p,
        findOptionsForDraggable: u,
        tryReleaseLock: d,
        isLockClaimed: f,
      }),
      [c, l, p, u, d, f],
    );
  Lm(i);
  for (let h = 0; h < i.length; h++) i[h](m);
}
var Qm = (e) => ({
    onBeforeCapture: (t) => {
      let r = () => {
        e.onBeforeCapture && e.onBeforeCapture(t);
      };
      v.default.version.startsWith("16") || v.default.version.startsWith("17")
        ? r()
        : (0, Bt.flushSync)(r);
    },
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragEnd: e.onDragEnd,
    onDragUpdate: e.onDragUpdate,
  }),
  Xm = (e) => ({
    ...Ft,
    ...e.autoScrollerOptions,
    durationDampening: { ...Ft.durationDampening, ...e.autoScrollerOptions },
  });
function Ct(e) {
  return e.current || b(!1), e.current;
}
function Jm(e) {
  let {
      contextId: t,
      setCallbacks: r,
      sensors: n,
      nonce: o,
      dragHandleUsageInstructions: i,
    } = e,
    s = (0, v.useRef)(null);
  lm();
  let a = co(e),
    c = x(() => Qm(a.current), [a]),
    l = x(() => Xm(a.current), [a]),
    p = Jf(t),
    u = nm({ contextId: t, text: i }),
    d = Hf(t, o),
    f = x((M) => {
      Ct(s).dispatch(M);
    }, []),
    m = R(
      () =>
        gn(
          {
            publishWhileDragging: Cp,
            updateDroppableScroll: Pp,
            updateDroppableIsEnabled: Np,
            updateDroppableIsCombineEnabled: Rp,
            collectionStarting: Ip,
          },
          f,
        ),
      [f],
    ),
    h = Yf(),
    g = R(() => Sf(h, m), [h, m]),
    D = R(
      () =>
        Mf({
          scrollWindow: Ef,
          scrollDroppable: g.scrollDroppable,
          getAutoScrollerOptions: l,
          ...gn({ move: Aa }, f),
        }),
      [g.scrollDroppable, f, l],
    ),
    S = qf(t),
    C = R(
      () =>
        yf({
          announce: p,
          autoScroller: D,
          dimensionMarshal: g,
          focusMarshal: S,
          getResponders: c,
          styleMarshal: d,
        }),
      [p, D, g, S, c, d],
    );
  s.current = C;
  let w = x(() => {
      let M = Ct(s);
      M.getState().phase !== "IDLE" && M.dispatch(Zn());
    }, []),
    I = x(() => {
      let M = Ct(s).getState();
      return M.phase === "DROP_ANIMATING"
        ? !0
        : M.phase === "IDLE"
          ? !1
          : M.isDragging;
    }, []),
    P = R(() => ({ isDragging: I, tryAbort: w }), [I, w]);
  r(P);
  let W = x((M) => Ga(Ct(s).getState(), M), []),
    B = x(() => Me(Ct(s).getState()), []),
    te = R(
      () => ({
        marshal: g,
        focus: S,
        contextId: t,
        canLift: W,
        isMovementAllowed: B,
        dragHandleUsageInstructionsId: u,
        registry: h,
      }),
      [t, g, u, S, W, B, h],
    );
  return (
    Km({
      contextId: t,
      store: C,
      registry: h,
      customSensors: n || null,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    (0, v.useEffect)(() => w, [w]),
    v.default.createElement(
      Br.Provider,
      { value: te },
      v.default.createElement(xn, { context: so, store: C }, e.children),
    )
  );
}
var Zm = 0;
function eg() {
  return R(() => `${Zm++}`, []);
}
function tg() {
  return v.default.useId();
}
var rg = "useId" in v.default ? tg : eg;
function tc(e) {
  let t = rg(),
    r = e.dragHandleUsageInstructions || Pr.dragHandleUsageInstructions;
  return v.default.createElement(kn, null, (n) =>
    v.default.createElement(
      Jm,
      {
        nonce: e.nonce,
        contextId: t,
        setCallbacks: n,
        dragHandleUsageInstructions: r,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd,
        autoScrollerOptions: e.autoScrollerOptions,
      },
      e.children,
    ),
  );
}
var na = { dragging: 5e3, dropAnimating: 4500 },
  ng = (e, t) => (t ? Pt.drop(t.duration) : e ? Pt.snap : Pt.fluid),
  og = (e, t) => {
    if (e) return t ? At.opacity.drop : At.opacity.combining;
  },
  ig = (e) =>
    e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function sg(e) {
  let r = e.dimension.client,
    { offset: n, combineWith: o, dropping: i } = e,
    s = !!o,
    a = ig(e),
    c = !!i,
    l = c ? Gn.drop(n, s) : Gn.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: ng(a, i),
    transform: l,
    opacity: og(s, c),
    zIndex: c ? na.dropAnimating : na.dragging,
    pointerEvents: "none",
  };
}
function ag(e) {
  return {
    transform: Gn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none",
  };
}
function cg(e) {
  return e.type === "DRAGGING" ? sg(e) : ag(e);
}
function lg(e, t, r = q) {
  let n = window.getComputedStyle(t),
    o = t.getBoundingClientRect(),
    i = Cn(o, n),
    s = Et(i, r),
    a = { client: i, tagName: t.tagName.toLowerCase(), display: n.display },
    c = { x: i.marginBox.width, y: i.marginBox.height };
  return { descriptor: e, placeholder: a, displaceBy: c, client: i, page: s };
}
function ug(e) {
  let t = ao("draggable"),
    {
      descriptor: r,
      registry: n,
      getDraggableRef: o,
      canDragInteractiveElements: i,
      shouldRespectForcePress: s,
      isEnabled: a,
    } = e,
    c = R(
      () => ({
        canDragInteractiveElements: i,
        shouldRespectForcePress: s,
        isEnabled: a,
      }),
      [i, a, s],
    ),
    l = x(
      (f) => {
        let m = o();
        return m || b(!1), lg(r, m, f);
      },
      [r, o],
    ),
    p = R(
      () => ({ uniqueId: t, descriptor: r, options: c, getDimension: l }),
      [r, l, c, t],
    ),
    u = (0, v.useRef)(p),
    d = (0, v.useRef)(!0);
  oe(
    () => (
      n.draggable.register(u.current), () => n.draggable.unregister(u.current)
    ),
    [n.draggable],
  ),
    oe(() => {
      if (d.current) {
        d.current = !1;
        return;
      }
      let f = u.current;
      (u.current = p), n.draggable.update(p, f);
    }, [p, n.draggable]);
}
var uo = v.default.createContext(null);
function rc(e) {
  (e && Gt(e)) || b(!1);
}
function dg(e, t, r) {
  $t(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    let o = e.draggableId;
    o || b(!1),
      typeof o != "string" && b(!1),
      Number.isInteger(e.index) || b(!1),
      e.mapped.type !== "DRAGGING" &&
        (rc(r()), e.isEnabled && (ja(t, o) || b(!1)));
  });
}
function pg(e) {}
function Or(e) {
  let t = (0, v.useContext)(e);
  return t || b(!1), t;
}
function fg(e) {
  e.preventDefault();
}
var mg = (e) => {
    let t = (0, v.useRef)(null),
      r = x((P = null) => {
        t.current = P;
      }, []),
      n = x(() => t.current, []),
      { contextId: o, dragHandleUsageInstructionsId: i, registry: s } = Or(Br),
      { type: a, droppableId: c } = Or(uo),
      l = R(
        () => ({ id: e.draggableId, index: e.index, type: a, droppableId: c }),
        [e.draggableId, e.index, a, c],
      ),
      {
        children: p,
        draggableId: u,
        isEnabled: d,
        shouldRespectForcePress: f,
        canDragInteractiveElements: m,
        isClone: h,
        mapped: g,
        dropAnimationFinished: D,
      } = e;
    if ((dg(e, o, n), pg(h), !h)) {
      let P = R(
        () => ({
          descriptor: l,
          registry: s,
          getDraggableRef: n,
          canDragInteractiveElements: m,
          shouldRespectForcePress: f,
          isEnabled: d,
        }),
        [l, s, n, m, f, d],
      );
      ug(P);
    }
    let S = R(
        () =>
          d
            ? {
                tabIndex: 0,
                role: "button",
                "aria-describedby": i,
                "data-rfd-drag-handle-draggable-id": u,
                "data-rfd-drag-handle-context-id": o,
                draggable: !1,
                onDragStart: fg,
              }
            : null,
        [o, i, u, d],
      ),
      C = x(
        (P) => {
          g.type === "DRAGGING" &&
            g.dropping &&
            P.propertyName === "transform" &&
            (v.default.version.startsWith("16") ||
            v.default.version.startsWith("17")
              ? D()
              : (0, Bt.flushSync)(D));
        },
        [D, g],
      ),
      w = R(() => {
        let P = cg(g),
          W = g.type === "DRAGGING" && g.dropping ? C : void 0;
        return {
          innerRef: r,
          draggableProps: {
            "data-rfd-draggable-context-id": o,
            "data-rfd-draggable-id": u,
            style: P,
            onTransitionEnd: W,
          },
          dragHandleProps: S,
        };
      }, [o, S, u, g, C, r]),
      I = R(
        () => ({
          draggableId: l.id,
          type: l.type,
          source: { index: l.index, droppableId: l.droppableId },
        }),
        [l.droppableId, l.id, l.index, l.type],
      );
    return v.default.createElement(
      v.default.Fragment,
      null,
      p(w, g.snapshot, I),
    );
  },
  gg = mg,
  nc = (e, t) => e === t,
  oc = (e) => {
    let { combine: t, destination: r } = e;
    return r ? r.droppableId : t ? t.droppableId : null;
  },
  hg = (e) => (e.combine ? e.combine.draggableId : null),
  bg = (e) =>
    e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function yg() {
  let e = z((o, i) => ({ x: o, y: i })),
    t = z((o, i, s = null, a = null, c = null) => ({
      isDragging: !0,
      isClone: i,
      isDropAnimating: !!c,
      dropAnimation: c,
      mode: o,
      draggingOver: s,
      combineWith: a,
      combineTargetFor: null,
    })),
    r = z((o, i, s, a, c = null, l = null, p = null) => ({
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: c,
        combineWith: l,
        mode: i,
        offset: o,
        dimension: s,
        forceShouldAnimate: p,
        snapshot: t(i, a, c, l, null),
      },
    }));
  return (o, i) => {
    if (Lt(o)) {
      if (o.critical.draggable.id !== i.draggableId) return null;
      let s = o.current.client.offset,
        a = o.dimensions.draggables[i.draggableId],
        c = ne(o.impact),
        l = bg(o.impact),
        p = o.forceShouldAnimate;
      return r(e(s.x, s.y), o.movementMode, a, i.isClone, c, l, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      let s = o.completed;
      if (s.result.draggableId !== i.draggableId) return null;
      let a = i.isClone,
        c = o.dimensions.draggables[i.draggableId],
        l = s.result,
        p = l.mode,
        u = oc(l),
        d = hg(l),
        m = {
          duration: o.dropDuration,
          curve: to.drop,
          moveTo: o.newHomeClientOffset,
          opacity: d ? At.opacity.drop : null,
          scale: d ? At.scale.drop : null,
        };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: m,
          draggingOver: u,
          combineWith: d,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, a, u, d, m),
        },
      };
    }
    return null;
  };
}
function ic(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null,
  };
}
var vg = {
  mapped: {
    type: "SECONDARY",
    offset: q,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ic(null),
  },
};
function _g() {
  let e = z((s, a) => ({ x: s, y: a })),
    t = z(ic),
    r = z((s, a = null, c) => ({
      mapped: {
        type: "SECONDARY",
        offset: s,
        combineTargetFor: a,
        shouldAnimateDisplacement: c,
        snapshot: t(a),
      },
    })),
    n = (s) => (s ? r(q, s, !0) : null),
    o = (s, a, c, l) => {
      let p = c.displaced.visible[s],
        u = !!(l.inVirtualList && l.effected[s]),
        d = Fr(c),
        f = d && d.draggableId === s ? a : null;
      if (!p) {
        if (!u) return n(f);
        if (c.displaced.invisible[s]) return null;
        let g = it(l.displacedBy.point),
          D = e(g.x, g.y);
        return r(D, f, !0);
      }
      if (u) return n(f);
      let m = c.displacedBy.point,
        h = e(m.x, m.y);
      return r(h, f, p.shouldAnimate);
    };
  return (s, a) => {
    if (Lt(s))
      return s.critical.draggable.id === a.draggableId
        ? null
        : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      let c = s.completed;
      return c.result.draggableId === a.draggableId
        ? null
        : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
var Dg = () => {
    let e = yg(),
      t = _g();
    return (n, o) => e(n, o) || t(n, o) || vg;
  },
  Sg = { dropAnimationFinished: Ta },
  Eg = Sr(Dg, Sg, null, { context: so, areStatePropsEqual: nc })(gg),
  xg = Eg;
function sc(e) {
  return Or(uo).isUsingCloneFor === e.draggableId && !e.isClone
    ? null
    : v.default.createElement(xg, e);
}
function ac(e) {
  let t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    r = !!e.disableInteractiveElementBlocking,
    n = !!e.shouldRespectForcePress;
  return v.default.createElement(
    sc,
    Se({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: r,
      shouldRespectForcePress: n,
    }),
  );
}
var po = (e) => (t) => e === t,
  wg = po("scroll"),
  Cg = po("auto"),
  Ig = po("visible"),
  oa = (e, t) => t(e.overflowX) || t(e.overflowY),
  Pg = (e, t) => t(e.overflowX) && t(e.overflowY),
  cc = (e) => {
    let t = window.getComputedStyle(e),
      r = { overflowX: t.overflowX, overflowY: t.overflowY };
    return oa(r, wg) || oa(r, Cg);
  },
  Ng = () => !1,
  lc = (e) =>
    e == null
      ? null
      : e === document.body
        ? Ng()
          ? e
          : null
        : e === document.documentElement
          ? null
          : cc(e)
            ? e
            : lc(e.parentElement);
var zn = (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
  uc = (e) =>
    e
      ? window.getComputedStyle(e).position === "fixed"
        ? !0
        : uc(e.parentElement)
      : !1,
  Rg = (e) => {
    let t = lc(e),
      r = uc(e);
    return { closestScrollable: t, isFixedOnPage: r };
  },
  Og = ({
    descriptor: e,
    isEnabled: t,
    isCombineEnabled: r,
    isFixedOnPage: n,
    direction: o,
    client: i,
    page: s,
    closest: a,
  }) => {
    let c = (() => {
        if (!a) return null;
        let { scrollSize: d, client: f } = a,
          m = ka({
            scrollHeight: d.scrollHeight,
            scrollWidth: d.scrollWidth,
            height: f.paddingBox.height,
            width: f.paddingBox.width,
          });
        return {
          pageMarginBox: a.page.marginBox,
          frameClient: f,
          scrollSize: d,
          shouldClipSubject: a.shouldClipSubject,
          scroll: {
            initial: a.scroll,
            current: a.scroll,
            max: m,
            diff: { value: q, displacement: q },
          },
        };
      })(),
      l = o === "vertical" ? Yn : ba,
      p = rt({ page: s, withPlaceholder: null, axis: l, frame: c });
    return {
      descriptor: e,
      isCombineEnabled: r,
      isFixedOnPage: n,
      axis: l,
      isEnabled: t,
      client: i,
      page: s,
      frame: c,
      subject: p,
    };
  },
  Ag = (e, t) => {
    let r = In(e);
    if (!t || e !== t) return r;
    let n = r.paddingBox.top - t.scrollTop,
      o = r.paddingBox.left - t.scrollLeft,
      i = n + t.scrollHeight,
      s = o + t.scrollWidth,
      c = Er({ top: n, right: s, bottom: i, left: o }, r.border);
    return xr({
      borderBox: c,
      margin: r.margin,
      border: r.border,
      padding: r.padding,
    });
  },
  Fg = ({
    ref: e,
    descriptor: t,
    env: r,
    windowScroll: n,
    direction: o,
    isDropDisabled: i,
    isCombineEnabled: s,
    shouldClipSubject: a,
  }) => {
    let c = r.closestScrollable,
      l = Ag(e, c),
      p = Et(l, n),
      u = (() => {
        if (!c) return null;
        let f = In(c),
          m = { scrollHeight: c.scrollHeight, scrollWidth: c.scrollWidth };
        return {
          client: f,
          page: Et(f, n),
          scroll: zn(c),
          scrollSize: m,
          shouldClipSubject: a,
        };
      })();
    return Og({
      descriptor: t,
      isEnabled: !i,
      isCombineEnabled: s,
      isFixedOnPage: r.isFixedOnPage,
      direction: o,
      client: l,
      page: p,
      closest: u,
    });
  },
  Tg = { passive: !1 },
  Lg = { passive: !0 },
  ia = (e) => (e.shouldPublishImmediately ? Tg : Lg),
  Ir = (e) => (e && e.env.closestScrollable) || null;
function Bg(e) {
  let t = (0, v.useRef)(null),
    r = Or(Br),
    n = ao("droppable"),
    { registry: o, marshal: i } = r,
    s = co(e),
    a = R(
      () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
      [e.droppableId, e.mode, e.type],
    ),
    c = (0, v.useRef)(a),
    l = R(
      () =>
        z((w, I) => {
          t.current || b(!1);
          let P = { x: w, y: I };
          i.updateDroppableScroll(a.id, P);
        }),
      [a.id, i],
    ),
    p = x(() => {
      let w = t.current;
      return !w || !w.env.closestScrollable ? q : zn(w.env.closestScrollable);
    }, []),
    u = x(() => {
      let w = p();
      l(w.x, w.y);
    }, [p, l]),
    d = R(() => tt(u), [u]),
    f = x(() => {
      let w = t.current,
        I = Ir(w);
      if (((w && I) || b(!1), w.scrollOptions.shouldPublishImmediately)) {
        u();
        return;
      }
      d();
    }, [d, u]),
    m = x(
      (w, I) => {
        t.current && b(!1);
        let P = s.current,
          W = P.getDroppableRef();
        W || b(!1);
        let B = Rg(W),
          te = { ref: W, descriptor: a, env: B, scrollOptions: I };
        t.current = te;
        let M = Fg({
            ref: W,
            descriptor: a,
            env: B,
            windowScroll: w,
            direction: P.direction,
            isDropDisabled: P.isDropDisabled,
            isCombineEnabled: P.isCombineEnabled,
            shouldClipSubject: !P.ignoreContainerClipping,
          }),
          ae = B.closestScrollable;
        return (
          ae &&
            (ae.setAttribute(Js.contextId, r.contextId),
            ae.addEventListener("scroll", f, ia(te.scrollOptions))),
          M
        );
      },
      [r.contextId, a, f, s],
    ),
    h = x(() => {
      let w = t.current,
        I = Ir(w);
      return (w && I) || b(!1), zn(I);
    }, []),
    g = x(() => {
      let w = t.current;
      w || b(!1);
      let I = Ir(w);
      (t.current = null),
        I &&
          (d.cancel(),
          I.removeAttribute(Js.contextId),
          I.removeEventListener("scroll", f, ia(w.scrollOptions)));
    }, [f, d]),
    D = x((w) => {
      let I = t.current;
      I || b(!1);
      let P = Ir(I);
      P || b(!1), (P.scrollTop += w.y), (P.scrollLeft += w.x);
    }, []),
    S = R(
      () => ({
        getDimensionAndWatchScroll: m,
        getScrollWhileDragging: h,
        dragStopped: g,
        scroll: D,
      }),
      [g, m, h, D],
    ),
    C = R(() => ({ uniqueId: n, descriptor: a, callbacks: S }), [S, a, n]);
  oe(
    () => (
      (c.current = C.descriptor),
      o.droppable.register(C),
      () => {
        t.current && g(), o.droppable.unregister(C);
      }
    ),
    [S, a, g, C, i, o.droppable],
  ),
    oe(() => {
      t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
    }, [e.isDropDisabled, i]),
    oe(() => {
      t.current &&
        i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
    }, [e.isCombineEnabled, i]);
}
function Tn() {}
var sa = { width: 0, height: 0, margin: yd },
  Wg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) =>
    e || r === "close"
      ? sa
      : {
          height: t.client.borderBox.height,
          width: t.client.borderBox.width,
          margin: t.client.margin,
        },
  kg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) => {
    let n = Wg({ isAnimatingOpenOnMount: e, placeholder: t, animate: r });
    return {
      display: t.display,
      boxSizing: "border-box",
      width: n.width,
      height: n.height,
      marginTop: n.margin.top,
      marginRight: n.margin.right,
      marginBottom: n.margin.bottom,
      marginLeft: n.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: r !== "none" ? Pt.placeholder : null,
    };
  },
  Mg = (e) => {
    let t = (0, v.useRef)(null),
      r = x(() => {
        t.current && (clearTimeout(t.current), (t.current = null));
      }, []),
      { animate: n, onTransitionEnd: o, onClose: i, contextId: s } = e,
      [a, c] = (0, v.useState)(e.animate === "open");
    (0, v.useEffect)(
      () =>
        a
          ? n !== "open"
            ? (r(), c(!1), Tn)
            : t.current
              ? Tn
              : ((t.current = setTimeout(() => {
                  (t.current = null), c(!1);
                })),
                r)
          : Tn,
      [n, a, r],
    );
    let l = x(
        (u) => {
          u.propertyName === "height" && (o(), n === "close" && i());
        },
        [n, i, o],
      ),
      p = kg({
        isAnimatingOpenOnMount: a,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return v.default.createElement(e.placeholder.tagName, {
      style: p,
      "data-rfd-placeholder-context-id": s,
      onTransitionEnd: l,
      ref: e.innerRef,
    });
  },
  Vg = v.default.memo(Mg);
function Ln(e) {
  return typeof e == "boolean";
}
function Bn(e, t) {
  t.forEach((r) => r(e));
}
var Gg = [
    function ({ props: t }) {
      t.droppableId || b(!1), typeof t.droppableId != "string" && b(!1);
    },
    function ({ props: t }) {
      Ln(t.isDropDisabled) || b(!1),
        Ln(t.isCombineEnabled) || b(!1),
        Ln(t.ignoreContainerClipping) || b(!1);
    },
    function ({ getDroppableRef: t }) {
      rc(t());
    },
  ],
  $g = [
    function ({ props: t, getPlaceholderRef: r }) {
      !t.placeholder || r();
    },
  ],
  Ug = [
    function ({ props: t }) {
      t.renderClone || b(!1);
    },
    function ({ getPlaceholderRef: t }) {
      t() && b(!1);
    },
  ];
function zg(e) {
  $t(() => {
    Bn(e, Gg),
      e.props.mode === "standard" && Bn(e, $g),
      e.props.mode === "virtual" && Bn(e, Ug);
  });
}
var Hn = class extends v.default.PureComponent {
    constructor(...t) {
      super(...t),
        (this.state = {
          isVisible: !!this.props.on,
          data: this.props.on,
          animate: this.props.shouldAnimate && this.props.on ? "open" : "none",
        }),
        (this.onClose = () => {
          this.state.animate === "close" && this.setState({ isVisible: !1 });
        });
    }
    static getDerivedStateFromProps(t, r) {
      return t.shouldAnimate
        ? t.on
          ? { isVisible: !0, data: t.on, animate: "open" }
          : r.isVisible
            ? { isVisible: !0, data: r.data, animate: "close" }
            : { isVisible: !1, animate: "close", data: null }
        : { isVisible: !!t.on, data: t.on, animate: "none" };
    }
    render() {
      if (!this.state.isVisible) return null;
      let t = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate,
      };
      return this.props.children(t);
    }
  },
  Hg = (e) => {
    let t = (0, v.useContext)(Br);
    t || b(!1);
    let { contextId: r, isMovementAllowed: n } = t,
      o = (0, v.useRef)(null),
      i = (0, v.useRef)(null),
      {
        children: s,
        droppableId: a,
        type: c,
        mode: l,
        direction: p,
        ignoreContainerClipping: u,
        isDropDisabled: d,
        isCombineEnabled: f,
        snapshot: m,
        useClone: h,
        updateViewportMaxScroll: g,
        getContainerForClone: D,
      } = e,
      S = x(() => o.current, []),
      C = x((U = null) => {
        o.current = U;
      }, []),
      w = x(() => i.current, []),
      I = x((U = null) => {
        i.current = U;
      }, []);
    zg({ props: e, getDroppableRef: S, getPlaceholderRef: w });
    let P = x(() => {
      n() && g({ maxScroll: Va() });
    }, [n, g]);
    Bg({
      droppableId: a,
      type: c,
      mode: l,
      direction: p,
      isDropDisabled: d,
      isCombineEnabled: f,
      ignoreContainerClipping: u,
      getDroppableRef: S,
    });
    let W = R(
        () =>
          v.default.createElement(
            Hn,
            { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
            ({ onClose: U, data: _e, animate: dt }) =>
              v.default.createElement(Vg, {
                placeholder: _e,
                onClose: U,
                innerRef: I,
                animate: dt,
                contextId: r,
                onTransitionEnd: P,
              }),
          ),
        [r, P, e.placeholder, e.shouldAnimatePlaceholder, I],
      ),
      B = R(
        () => ({
          innerRef: C,
          placeholder: W,
          droppableProps: {
            "data-rfd-droppable-id": a,
            "data-rfd-droppable-context-id": r,
          },
        }),
        [r, a, W, C],
      ),
      te = h ? h.dragging.draggableId : null,
      M = R(
        () => ({ droppableId: a, type: c, isUsingCloneFor: te }),
        [a, te, c],
      );
    function ae() {
      if (!h) return null;
      let { dragging: U, render: _e } = h,
        dt = v.default.createElement(
          sc,
          {
            draggableId: U.draggableId,
            index: U.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (me, Xt) => _e(me, Xt, U),
        );
      return Bt.default.createPortal(dt, D());
    }
    return v.default.createElement(uo.Provider, { value: M }, s(B, m), ae());
  },
  qg = Hg;
function jg() {
  return document.body || b(!1), document.body;
}
var aa = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: jg,
  },
  dc = (e) => {
    let t = { ...e },
      r;
    for (r in aa) e[r] === void 0 && (t = { ...t, [r]: aa[r] });
    return t;
  },
  Wn = (e, t) => e === t.droppable.type,
  ca = (e, t) => t.draggables[e.draggable.id],
  Yg = () => {
    let e = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
          isDraggingOver: !1,
          draggingOverWith: null,
          draggingFromThisWith: null,
          isUsingPlaceholder: !1,
        },
        useClone: null,
      },
      t = { ...e, shouldAnimatePlaceholder: !1 },
      r = z((i) => ({
        draggableId: i.id,
        type: i.type,
        source: { index: i.index, droppableId: i.droppableId },
      })),
      n = z((i, s, a, c, l, p) => {
        let u = l.descriptor.id;
        if (l.descriptor.droppableId === i) {
          let m = p ? { render: p, dragging: r(l.descriptor) } : null,
            h = {
              isDraggingOver: a,
              draggingOverWith: a ? u : null,
              draggingFromThisWith: u,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: l.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: h,
            useClone: m,
          };
        }
        if (!s) return t;
        if (!c) return e;
        let f = {
          isDraggingOver: a,
          draggingOverWith: u,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: l.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: f,
          useClone: null,
        };
      });
    return (i, s) => {
      let a = dc(s),
        c = a.droppableId,
        l = a.type,
        p = !a.isDropDisabled,
        u = a.renderClone;
      if (Lt(i)) {
        let d = i.critical;
        if (!Wn(l, d)) return t;
        let f = ca(d, i.dimensions),
          m = ne(i.impact) === c;
        return n(c, p, m, m, f, u);
      }
      if (i.phase === "DROP_ANIMATING") {
        let d = i.completed;
        if (!Wn(l, d.critical)) return t;
        let f = ca(d.critical, i.dimensions);
        return n(c, p, oc(d.result) === c, ne(d.impact) === c, f, u);
      }
      if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
        let d = i.completed;
        if (!Wn(l, d.critical)) return t;
        let f = ne(d.impact) === c,
          m = !!(d.impact.at && d.impact.at.type === "COMBINE"),
          h = d.critical.droppable.id === c;
        return f ? (m ? e : t) : h ? e : t;
      }
      return t;
    };
  },
  Kg = { updateViewportMaxScroll: Ap },
  Qg = Sr(Yg, Kg, (e, t, r) => ({ ...dc(r), ...e, ...t }), {
    context: so,
    areStatePropsEqual: nc,
  })(qg),
  pc = Qg;
function Ut() {
  let e = nr(),
    t = Qo();
  return Ce(Xg(t, e));
}
function Xg(e, t) {
  let { country: r } = t;
  return {
    queryKey: ["StoreBrowsePriceStops", r],
    queryFn: async () => Jg(e, r),
    staleTime: 24 * 60 * 60 * 1e3,
  };
}
async function Jg(e, t) {
  let r = Ke.Init(Mo);
  r.Body().set_country_code(t);
  let n = await Vo.GetPriceStops(e, r);
  if (!n.BSuccess()) throw `Error loading price stops: ${n.GetErrorMessage()}`;
  return n.Body().toObject().price_stops || [];
}
var Eo = _(Ie(), 1),
  k = _(V(), 1);
var ie = _(V(), 1);
var gc = _(N(), 1),
  zt = ie.createContext(void 0);
function fc(e) {
  let { steamid: t, children: r } = e,
    [n, o] = ie.useState(() => Yi()),
    i = ei(),
    s = ie.useCallback((c) => {
      Ki(c), o(c);
    }, []),
    a = ie.useMemo(
      () => ({
        steamid: t,
        bViewingOwnWishlist:
          !!i && new tn(i).GetAccountID() == new tn(t).GetAccountID(),
        bCompactView: n,
        setCompactView: s,
      }),
      [t, i, n, s],
    );
  return (0, gc.jsx)(zt.Provider, { value: a, children: r });
}
function $e() {
  return ie.useContext(zt).bViewingOwnWishlist;
}
function Ht() {
  return ie.useContext(zt).steamid;
}
function fe() {
  return ie.useContext(zt).bCompactView;
}
function mc() {
  return ie.useContext(zt).setCompactView;
}
function fo(e, t) {
  return {
    data_request: {
      include_assets: !0,
      include_reviews: !0,
      include_release: !0,
      include_platforms: !0,
      include_tag_count: 20,
    },
    page_size: e ? 60 : 20,
    cacheStoreItemData: t,
  };
}
async function Zg(e, t, r, n, o, i) {
  let s = Ke.Init(wi);
  s.Body().set_steamid(r),
    ci(t, s),
    n &&
      (li(s, n.data_request),
      s.Body().set_start_index(n.page_start || 0),
      s.Body().set_page_size(n.page_size)),
    o && s.Body().set_sort_order(o),
    i && s.Body().set_filters(xi.fromObject(i));
  let a = await Ci.GetWishlistSortedFiltered(e, s);
  if (!a.BSuccess())
    throw new To(
      a.GetEResult(),
      `Error loading sorted/filtered wishlist: ${a.GetErrorMessage()}`,
    );
  let c;
  return (
    n
      ? (c = eh(n.cacheStoreItemData, n.data_request, a.Body().items() || []))
      : (c = a.Body().toObject().items || []),
    { steamid: r, items: c }
  );
}
function eh(e, t, r) {
  let n = [];
  return (
    r.forEach((o) => {
      o.store_item(!1) && e(o.store_item(), t);
      let i = o.toObject();
      delete i.store_item, n.push(i);
    }),
    n
  );
}
function mo(e, t = 0, r = {}) {
  return ["WishlistSortedFiltered", e, t, r];
}
function go(e, t, r, n, o = 0, i = {}) {
  return {
    queryKey: mo(r, o, i),
    queryFn: () => Zg(e, t, r, n, o, i),
    staleTime: 10 * 60 * 1e3,
  };
}
function hc(e, t = 0, r = {}) {
  let n = Ne(),
    o = nr(),
    i = ui(),
    s = fe();
  return Ce(go(n, o, e, fo(s, i), t, r));
}
function bc(e, t, r) {
  e.setQueryData(mo(t), (n) => n && { ...n, items: r });
}
function yc(e, t) {
  e.invalidateQueries({ queryKey: mo(t), exact: !1 });
}
var qt = _(V(), 1);
var vc = "/TB3SP4DA.png";
var _c = "s3BAyjuoPYA-";
var Dc = "wgHGKOWFf8c-";
var Sc = "dIPGtN9kABg-";
var Ue = _(N(), 1);
function Ec(e) {
  let { dragHandleProps: t, index: r, updateWishlistPriority: n } = e,
    [o, i] = qt.useState(void 0),
    s = qt.useCallback((l) => {
      i(l.currentTarget.value);
    }, []),
    a = qt.useCallback(
      (l) => {
        let p = parseInt(l.currentTarget.value);
        p && p - 1 != r && n(r, p - 1), i(void 0);
      },
      [r, n],
    ),
    c = o !== void 0 ? o : r + 1;
  return (0, Ue.jsxs)("div", {
    className: _c,
    children: [
      (0, Ue.jsx)("div", {
        className: Dc,
        ...t,
        children: (0, Ue.jsx)("img", { src: er(vc), alt: "" }),
      }),
      (0, Ue.jsx)("div", {
        className: Sc,
        children: (0, Ue.jsx)("input", {
          type: "text",
          value: c,
          onChange: s,
          onBlur: a,
        }),
      }),
    ],
  });
}
var xe = _(V());
var nh = "unUserdataVersion";
async function xc(e, t) {
  let r = Number.parseInt(window.localStorage.getItem(nh) || "0"),
    n = `${Ro.STORE_BASE_URL}dynamicstore/userdata/?id=${t}&cc=${gt.country_code}`;
  return (
    r && (n += `&v=${r}`), (await (await fetch(n)).json()).rgOwnedApps || []
  );
}
function wc() {
  let e = Ne(),
    t = gt.accountid;
  return Ce(oh(e, t));
}
function oh(e, t) {
  return {
    queryKey: Ic(t),
    queryFn: async () => {
      if (!t) return new Set();
      let r = await xc(e, t);
      return new Set(r);
    },
    staleTime: 10 * 60 * 1e3,
  };
}
function Cc() {
  let e = je(),
    t = gt.accountid;
  return (r) => {
    e.setQueryData(Ic(t), (n) => {
      if (n) return new Set([...n.values(), ...r]);
    });
  };
}
function Ic(e) {
  return ["AccountOwnedApps", e ?? 0];
}
function Pc(e) {
  let t = Ne(),
    r = Cc();
  return tr({
    mutationFn: () => ih(t, e),
    onSuccess(n) {
      let [
        o,
        { packageids_added: i, appids_added: s, purchase_result_detail: a },
      ] = n;
      s && r(s);
    },
  });
}
async function ih(e, t) {
  let r = Ke.Init(ri);
  r.Body().set_item_id(ko.fromObject(t));
  let n = await ni.AddFreeLicense(e, r);
  return [n.GetEResult(), n.Body().toObject()];
}
var kr = _(V(), 1);
var Rc = _(N(), 1);
function Nc(e) {
  let [t, r] = (0, kr.useState)(void 0),
    n = `${H.STORE_BASE_URL}login/${t ? `?redir=${encodeURIComponent(t)}` : ""}`;
  return (
    (0, kr.useEffect)(() => {
      r(location.href);
    }, []),
    (0, Rc.jsx)(Bi, {
      href: n,
      title: e.strToolTip,
      children: he.Localize("#Button_SignIn"),
    })
  );
}
var jt = _(N());
function Mr(e) {
  let { itemid: t } = e,
    { bIsOwned: r, unAppID: n } = ah(t);
  return ht.logged_in
    ? r
      ? (0, jt.jsx)(Wi, { appid: n })
      : (0, jt.jsx)(sh, { itemid: t })
    : (0, jt.jsx)(Nc, {
        strToolTip: he.Localize("#SignInToAddToLibrary_Tooltip"),
      });
}
function sh(e) {
  let { mutate: t } = Pc(e.itemid);
  return (0, jt.jsx)(Li, {
    onClick: () => t(),
    children: he.Localize("#AddToLibraryButton"),
  });
}
function ah(e) {
  let { data: t } = De("appid" in e ? void 0 : e),
    { data: r } = wc(),
    n;
  return (
    "appid" in e ? (n = [e.appid]) : t && (n = t.included_appids),
    n === void 0 || r === void 0 || n.length == 0
      ? { bIsOwned: void 0 }
      : { bIsOwned: !n.some((o) => !r.has(o)), unAppID: n[0] }
  );
}
var se = _(N()),
  ch = xe.lazy(() => import("./cartmodal-DPZINKZR.js"));
function Oc(e) {
  let { purchaseOption: t } = e;
  if (!t) return null;
  if (t.is_free_to_keep)
    return (0, se.jsx)(Mr, { itemid: { packageid: t.packageid } });
  if (t.packageid) return (0, se.jsx)(lh, { packageid: t.packageid });
  if (t.bundleid) return (0, se.jsx)(uh, { bundleid: t.bundleid });
  throw "Purchase option does not have package or bundle associated";
}
var lh = xe.memo(function (t) {
    return Ac(t.packageid, void 0);
  }),
  uh = xe.memo(function (t) {
    return Ac(void 0, t.bundleid);
  });
function Ac(e, t) {
  let { data: r } = oi(),
    [n, o] = xe.useState(void 0),
    i = xe.useMemo(() => ii(r, e, t), [r, e, t]),
    { mutate: s } = Ai(e, t, i);
  return (0, se.jsxs)(se.Fragment, {
    children: [
      n && (0, se.jsx)(ch, { lineItemIDs: n, closeCart: () => o(void 0) }),
      i
        ? (0, se.jsx)(dh, {})
        : (0, se.jsx)(ph, {
            addToCart: () => {
              s(void 0, { onSuccess: (a) => o(a) });
            },
          }),
    ],
  });
}
function dh() {
  return (0, se.jsx)(Ti, {
    href: `${H.STORE_BASE_URL}cart/`,
    children: he.Localize("#AddToCartButton_InCart"),
  });
}
function ph(e) {
  return (0, se.jsx)(Fi, {
    onClick: e.addToCart,
    children: he.Localize("#AddToCartButton_AddToCart"),
  });
}
var ct = _(V());
function Fc(e) {
  let { appID: t, feature: r, depth: n, children: o } = e,
    i = Bo(r, n),
    s = ai(),
    [a, c] = ct.default.useState(void 0),
    l = ct.default.useCallback(
      (f) => {
        f.isIntersecting &&
          c((m) => (m?.appID == t && m.snr == i ? m : { appID: t, snr: i }));
      },
      [t, i],
    );
  (0, ct.useEffect)(() => {
    a && s.AddImpression(a.appID, a.snr);
  }, [s, a]);
  let p = ti(l),
    u = t && (!a || (a.appID != t && a.snr != i)),
    d = Go(o.ref, u ? p : void 0);
  return ct.default.cloneElement(o, { ref: d });
}
var Qt = _(Ie(), 1),
  qe = _(V(), 1);
var Ur = _(V(), 1);
var Tc = "160px";
var Lc = "20px";
var Bc = "82px";
var Wc = "8px";
var kc = "pAoL4PrPWdg-";
var Vr = "XNnjz6jit-E-";
var Mc = "LSY1zV2DJSM-";
var Vc = "mYGhH-Z5fCw-";
var Gc = "Fuz2JeT4RfI-";
var $c = "s5Uj2rl926U-";
var Uc = "FMRSvVtOAmQ-";
var zc = "oVvbc-NOBF8-";
var Hc = "S4P-Tu6KIaQ-";
var qc = "XAEHFx5bCT0-";
var jc = "LhqQh5zRkIw-";
var Yc = "TjfbNdRyip4-";
var Kc = "_0arfU0-7OcQ-";
var Qc = "pMrnNJp5sDA-";
var Xc = "p2qp0XfBE8M-";
var ho = "j7Wl8MzErkA-";
var lt = "vdNOP82JYX8-";
var Jc = "xlAKnJ50oYQ-";
var Zc = "DUS6KmDUKhc-";
var Gr = "yrG419d95pU-";
var $r = "mOoPKvox-wE-";
var el = "_7zQ9up20PmA-";
var bo = "wzQIocnKXn4-";
var tl = "_-6uwAFLL9K0-";
var rl = "DKmMkONAXgw-";
var nl = "_93IWcQLinlA-";
var ol = "_7GG-Yb2cOxg-";
var il = "jHvUCZyctAM-";
var sl = "Ypx0AcKkoSM-";
var al = "nK8lTB5HZ5o-";
var cl = "_80azkrfBXSM-";
var Yt = "yO-tcJ7evNI-";
var G = _(N(), 1);
function ll(e) {
  let { appid: t, item: r } = e,
    n = r?.name;
  return (
    !n &&
      r &&
      !r.visible &&
      (n = y.Localize("#wishlist_item_unavailable_title")),
    (0, G.jsx)(dl, { item: r, appid: t, className: Gc, children: n || " " })
  );
}
function ul(e) {
  let { appid: t } = e,
    { data: r } = De({ appid: t });
  return (0, G.jsx)(dl, {
    item: r,
    appid: t,
    className: zc,
    children: (0, G.jsx)(fh, { item: r, appid: t }),
  });
}
function fh(e) {
  let { appid: t, item: r } = e,
    [n, o] = Ur.useState(!1),
    i = Ur.useCallback(() => o(!0), []);
  return (0, G.jsxs)("div", {
    className: Yc,
    onMouseEnter: i,
    children: [
      n && r?.visible && (0, G.jsx)(gh, { appid: t, item: r }),
      (0, G.jsx)(mh, { appid: t, item: r }),
    ],
  });
}
function mh(e) {
  let { appid: t, item: r } = e,
    { data: n } = fi({ appid: t });
  if (!n?.header && !n?.library_capsule_2x) return (0, G.jsx)("div", {});
  let o =
      n.header &&
      n?.asset_url_format?.replace(
        "${FILENAME}",
        n.header.replace(/header/, "header_292x136"),
      ),
    i = n.library_capsule_2x ?? n.library_capsule,
    s = i && n?.asset_url_format?.replace("${FILENAME}", i);
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)("img", {
        className: Hc,
        src: `${H.STORE_ITEM_BASE_URL}${o}`,
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      (0, G.jsx)("img", {
        className: qc,
        src: s ? `${H.STORE_ITEM_BASE_URL}${s}` : er(Gi),
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      !s && (0, G.jsx)("div", { className: jc, children: r?.name }),
    ],
  });
}
function gh(e) {
  let { item: t, appid: r } = e,
    { data: n } = mi({ appid: r });
  return !n || !n.all_ages_screenshots || n.all_ages_screenshots.length < 4
    ? null
    : (0, G.jsxs)("div", {
        className: cl,
        children: [
          (0, G.jsx)("img", {
            className: Yt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[0].filename}`,
            alt: t.name,
          }),
          (0, G.jsx)("img", {
            className: Yt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[1].filename}`,
            alt: t.name,
          }),
          (0, G.jsx)("img", {
            className: Yt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[2].filename}`,
            alt: t.name,
          }),
          (0, G.jsx)("img", {
            className: Yt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[3].filename}`,
            alt: t.name,
          }),
        ],
      });
}
function dl(e) {
  let t,
    r = zo();
  if (e.item) t = `${H.STORE_BASE_URL}${e.item.store_url_path}`;
  else if (e.appid) t = `${H.STORE_BASE_URL}app/${e.appid}/`;
  else
    return (0, G.jsx)("span", { className: e.className, children: e.children });
  return (0, G.jsx)(bt, {
    ref: r,
    snr: !0,
    to: t,
    className: e.className,
    openInNewWindow: !0,
    children: e.children,
  });
}
var hl = _(Ie());
var pl = "cWLPuFe-zxc-";
var fl = "z-ezG-Xu844-";
var ml = "Kech-xMfQ8o-";
var gl = "MbdBgOhlg7c-";
var yl = _(N());
function bl(e) {
  let { reviewScore: t } = e,
    r = bh(t),
    n = t.summary_filtered,
    o;
  return (
    n?.review_count &&
      (o = he.Localize(
        "#review_summary_reviewrate",
        n.percent_positive,
        n.review_count.toLocaleString(),
      )),
    (0, yl.jsx)("span", {
      className: r,
      title: o,
      children: n?.review_score_label,
    })
  );
}
function bh(e) {
  let t;
  if (e && e.summary_filtered)
    switch (e.summary_filtered.review_score) {
      case 9:
      case 8:
      case 7:
      case 6:
        t = gl;
        break;
      case 5:
        t = ml;
        break;
      case 4:
      case 3:
      case 2:
      case 1:
        t = fl;
        break;
    }
  return (0, hl.default)(pl, t);
}
var $ = _(N(), 1);
function vl(e) {
  let { appid: t } = e;
  return (0, $.jsxs)("div", {
    className: Zc,
    children: [(0, $.jsx)(yh, { appid: t }), (0, $.jsx)(vh, { appid: t })],
  });
}
function _l() {
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)("div", { className: Gr }),
      (0, $.jsx)("div", { className: $r, children: " " }),
    ],
  });
}
function yh(e) {
  let { appid: t } = e,
    { data: r } = gi({ appid: t });
  return !r || !r.summary_filtered
    ? (0, $.jsx)(_l, {})
    : (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)("div", {
            className: Gr,
            children: y.Localize("#wishlist_item_overallreviews"),
          }),
          (0, $.jsx)("div", {
            className: $r,
            children: (0, $.jsx)(bl, { reviewScore: r }),
          }),
        ],
      });
}
function vh(e) {
  let { appid: t } = e,
    { data: r } = hi({ appid: t }),
    n = Vi(r);
  return !r || !n
    ? (0, $.jsx)(_l, {})
    : (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)("div", {
            className: Gr,
            children: y.Localize("#wishlist_item_releasedate"),
          }),
          (0, $.jsx)("div", { className: $r, children: n }),
        ],
      });
}
var $l = _(Ie(), 1);
var Dl = _(Ie()),
  ze = _(V());
var He = _(N());
function zr(e) {
  let {
      direction: t,
      interactionMode: r = 0,
      ignoreHorizontal: n,
      ignoreVertical: o,
      dismissOnClick: i,
      menuTarget: s,
      className: a,
      children: c,
      ...l
    } = e,
    { isShowingMenu: p, triggerProps: u, menuProps: d, closeMenu: f } = Jo(e),
    m = ze.useRef(null),
    h = ze.useRef(null);
  return (
    ze.useEffect(() => {
      p
        ? h.current?.TakeFocus()
        : h.current?.BFocusWithin() && m.current?.TakeFocus();
    }, [p]),
    (0, He.jsxs)(He.Fragment, {
      children: [
        ze.cloneElement(s, { ...u, navRef: m }),
        (0, He.jsx)(Xe, {
          ...l,
          ...d,
          className: (0, Dl.default)(d.className, a),
          navRef: h,
          onCancel: f,
          onFocusWithin: (g) => !g && f(),
          childFocusDisabled: !p,
          children: (0, He.jsx)(rr, { children: c }),
        }),
      ],
    })
  );
}
var _o = _(Ie(), 1),
  K = _(V(), 1);
var j = _(V(), 1);
var Sl = "WrZdqiILDmU-";
var El = "idELaaXmvTo-";
var E = _(N(), 1);
function wl(e) {
  let { menuTarget: t, filters: r, setFilters: n } = e;
  return (0, E.jsx)(zr, {
    menuTarget: t,
    direction: "down",
    className: Sl,
    ignoreHorizontal: !0,
    interactionMode: 1,
    children: (0, E.jsxs)(Uo, {
      "flow-children": "grid",
      children: [
        (0, E.jsx)(Dh, {}),
        (0, E.jsx)(Sh, { strPlatform: r.strPlatform, setFilters: n }),
        (0, E.jsx)(Eh, { rgTypeFilters: r.rgTypeFilters, setFilters: n }),
        (0, E.jsx)(xh, { nMaxPriceStop: r.nMaxPriceStop, setFilters: n }),
        (0, E.jsx)(Ch, { strMinDiscount: r.strMinDiscount, setFilters: n }),
        (0, E.jsx)(Ih, {
          bExcludeEarlyAccess: r.bExcludeEarlyAccess,
          bExcludePrerelease: r.bExcludePrerelease,
          bExcludeVR: r.bExcludeVR,
          setFilters: n,
        }),
        (0, E.jsx)(Ph, { rgDeckFilters: r.rgDeckFilters, setFilters: n }),
      ],
    }),
  });
}
function Dh(e) {
  let t = fe(),
    r = mc();
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_view"),
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "compact",
            checked: t,
            onChange: (n) => n.currentTarget.checked && r(!0),
          }),
          y.Localize("#wishlist_controls_options_view_compact"),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "expanded",
            checked: !t,
            onChange: (n) => n.currentTarget.checked && r(!1),
          }),
          y.Localize("#wishlist_controls_options_view_expanded"),
        ],
      }),
    ],
  });
}
function Sh(e) {
  let { strPlatform: t, setFilters: r } = e,
    n = j.useCallback(
      (o) => {
        let i = sn(o.currentTarget.value);
        r((s) => ({ ...s, strPlatform: i }));
      },
      [r],
    );
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_platform"),
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "all",
            checked: t == "all",
            onChange: n,
          }),
          y.Localize("#wishlist_controls_options_platform_all"),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "mac",
            checked: t == "mac",
            onChange: n,
          }),
          y.Localize("#wishlist_controls_options_platform_mac"),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "linux",
            checked: t == "linux",
            onChange: n,
          }),
          y.Localize("#wishlist_controls_options_platform_linux"),
        ],
      }),
    ],
  });
}
function yo(e) {
  let { typeFilter: t, rgTypeFilters: r, setFilters: n, children: o } = e,
    i = j.useCallback(
      (s) => {
        let a = s.currentTarget.checked;
        n((c) => {
          let l = new Set(c.rgTypeFilters);
          return (
            a ? l.add(t) : l.delete(t),
            { ...c, rgTypeFilters: Array.from(l.values()) }
          );
        });
      },
      [n, t],
    );
  return (0, E.jsxs)(X, {
    children: [
      (0, E.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: i,
      }),
      o,
    ],
  });
}
function Eh(e) {
  let { rgTypeFilters: t, setFilters: r } = e;
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_type"),
      }),
      (0, E.jsx)(yo, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "games",
        children: y.Localize("#wishlist_controls_options_type_game"),
      }),
      (0, E.jsx)(yo, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "software",
        children: y.Localize("#wishlist_controls_options_type_application"),
      }),
      (0, E.jsx)(yo, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "dlc",
        children: y.Localize("#wishlist_controls_options_type_dlc"),
      }),
    ],
  });
}
function xh(e) {
  let { nMaxPriceStop: t, setFilters: r } = e,
    [n, o] = j.useState(void 0),
    { data: i } = Ut(),
    s = j.useId(),
    a = `priceFiltersDataList-${s}`,
    c = `priceFiltersRange-${s}`,
    l = j.useCallback((f) => {
      o(parseInt(f.currentTarget.value));
    }, []),
    p = j.useRef();
  if (
    ((p.current = () => {
      n !== void 0 &&
        (r((f) => {
          let m;
          return (
            n == 0 ? (m = "free") : n <= i.length ? (m = n - 1) : (m = "none"),
            { ...f, nMaxPriceStop: m }
          );
        }),
        o(void 0));
    }),
    j.useEffect(() => {
      if (n === void 0) return;
      let f = window.setTimeout(() => p.current(), 500);
      return () => window.clearTimeout(f);
    }, [n]),
    j.useEffect(() => () => p.current(), []),
    !i)
  )
    return null;
  let u;
  n !== void 0
    ? (u = n)
    : t === "free"
      ? (u = 0)
      : t === "none"
        ? (u = i.length + 1)
        : (u = t + 1);
  let d = ["free", ...i, "max"];
  return (0, E.jsxs)(Pe, {
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_price"),
      }),
      (0, E.jsx)("input", {
        type: "range",
        id: c,
        list: a,
        min: 0,
        max: d.length - 1,
        value: u,
        onChange: l,
      }),
      (0, E.jsx)("datalist", {
        id: a,
        children: d.map((f, m) =>
          (0, E.jsx)(wh, { value: m, priceStop: f }, m),
        ),
      }),
      (0, E.jsx)("label", { htmlFor: c, className: El, children: Kt(d[u]) }),
    ],
  });
}
function wh(e) {
  let { value: t, priceStop: r } = e;
  return (0, E.jsx)("option", { value: t, label: Kt(r) });
}
function Kt(e) {
  return e === "free"
    ? y.Localize("#wishlist_controls_options_price_free")
    : e === "max"
      ? y.Localize("#wishlist_controls_options_price_any")
      : y.Localize(
          "#wishlist_controls_options_price_max_price",
          e.formatted_amount,
        );
}
function Ch(e) {
  let { strMinDiscount: t, setFilters: r } = e,
    n = j.useCallback(
      (o) => {
        let i = an(o.currentTarget.value);
        r((s) => ({ ...s, strMinDiscount: i }));
      },
      [r],
    );
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_discount"),
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "",
            checked: t == "",
            onChange: n,
          }),
          y.Localize("#wishlist_controls_options_discount_all"),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "any",
            checked: t == "any",
            onChange: n,
          }),
          y.Localize("#wishlist_controls_options_discount_any"),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "50",
            checked: t == "50",
            onChange: n,
          }),
          y.Localize("#wishlist_controls_options_discount_or_more", 50),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "75",
            checked: t == "75",
            onChange: n,
          }),
          y.Localize("#wishlist_controls_options_discount_or_more", 75),
        ],
      }),
    ],
  });
}
function Ih(e) {
  let {
      bExcludeEarlyAccess: t,
      bExcludePrerelease: r,
      bExcludeVR: n,
      setFilters: o,
    } = e,
    i = j.useCallback(
      (c) => {
        let l = !!c.currentTarget.checked;
        o((p) => ({ ...p, bExcludeEarlyAccess: l }));
      },
      [o],
    ),
    s = j.useCallback(
      (c) => {
        let l = !!c.currentTarget.checked;
        o((p) => ({ ...p, bExcludePrerelease: l }));
      },
      [o],
    ),
    a = j.useCallback(
      (c) => {
        let l = !!c.currentTarget.checked;
        o((p) => ({ ...p, bExcludeVR: l }));
      },
      [o],
    );
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_exclude"),
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "checkbox",
            name: "exclude_earlyaccess",
            checked: t,
            onChange: i,
          }),
          y.Localize("#genre_early_access"),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "checkbox",
            name: "exclude_prerelease",
            checked: r,
            onChange: s,
          }),
          y.Localize("#category_prerelease"),
        ],
      }),
      (0, E.jsxs)(X, {
        children: [
          (0, E.jsx)("input", {
            type: "checkbox",
            name: "exclude_vr",
            checked: n,
            onChange: a,
          }),
          y.Localize("#wishlist_controls_options_exclude_vr"),
        ],
      }),
    ],
  });
}
function xl(e) {
  let { deckFilter: t, rgDeckFilters: r, setFilters: n, children: o } = e,
    i = j.useCallback(
      (s) => {
        let a = s.currentTarget.checked;
        n((c) => {
          let l = new Set(c.rgDeckFilters);
          return (
            a ? l.add(t) : l.delete(t),
            { ...c, rgDeckFilters: Array.from(l.values()) }
          );
        });
      },
      [n, t],
    );
  return (0, E.jsxs)(X, {
    children: [
      (0, E.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: i,
      }),
      o,
    ],
  });
}
function Ph(e) {
  let { rgDeckFilters: t, setFilters: r } = e;
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_deck"),
      }),
      (0, E.jsx)(xl, {
        deckFilter: "verified",
        rgDeckFilters: t,
        setFilters: r,
        children: y.Localize("#wishlist_controls_options_deck_verified"),
      }),
      (0, E.jsx)(xl, {
        deckFilter: "playable",
        rgDeckFilters: t,
        setFilters: r,
        children: y.Localize("#wishlist_controls_options_deck_playable"),
      }),
    ],
  });
}
var Cl = "TU227nj1DiE-";
var Il = "JqFaNxdHYhs-";
var Pl = "ADJFyRYJvZU-";
var vo = "_1PVYT-GpKSQ-";
var Nl = "qysDgzabHUo-";
var Rl = "QKns7sLqOwg-";
var Ol = "-tV92khCNDs-";
var Al = "ScuzYU4NgQA-";
var Fl = "Wh-OfiQaHSM-";
var F = _(N(), 1);
function Tl(e) {
  return K.useState(e);
}
function Ll(e) {
  return K.useState(e);
}
var Bl = K.createContext(void 0);
function Wl(e) {
  let { filters: t, setFilters: r, children: n } = e,
    o = K.useMemo(() => ({ filters: t, setFilters: r }), [t, r]);
  return (0, F.jsx)(Bl.Provider, { value: o, children: n });
}
function Hr() {
  let { filters: e, setFilters: t } = K.useContext(Bl);
  return [e, t];
}
function kl(e, t, r, n) {
  let o = je(),
    i = Ne(),
    s = di(),
    { data: a } = Ut(),
    c = fe(),
    l = K.useMemo(() => Ui(r, a), [r, a]),
    { data: p } = hc(e, ln[t], l),
    { data: u } = rn(we().strLanguage),
    { data: d, isLoading: f } = Ce({
      ...Lh(e, t, l, o, i, c, s),
      enabled: !!n,
    }),
    m = K.useMemo(() => {
      if (p !== void 0)
        return {
          ...p,
          items: p.items.filter(
            (g) =>
              !(
                r.rgWishlistNotificationGames?.length &&
                !r.rgWishlistNotificationGames.includes(g.appid)
              ),
          ),
        };
    }, [p, r.rgWishlistNotificationGames]),
    h = K.useMemo(() => {
      if (!n || m === void 0 || u === void 0 || d === void 0) return;
      let g = Do(n),
        D = Th(n, u);
      return {
        ...m,
        items: m.items.filter((C) => {
          let w = d.apps[C.appid];
          return w
            ? !!(
                w.name.indexOf(g) !== -1 ||
                (D.size > 0 && w.tagids.some((I) => D.has(I)))
              )
            : !1;
        }),
      };
    }, [n, m, u, d]);
  return n ? { wishlist: h, bLoading: f } : { wishlist: m, bLoading: !1 };
}
function Rh(e) {
  let t = (0, F.jsx)(Qe, {
    className: vo,
    children: y.Localize("#wishlist_options_button"),
  });
  return (0, F.jsx)(wl, {
    menuTarget: t,
    filters: e.filters,
    setFilters: e.setFilters,
  });
}
function Oh(e) {
  let { option: t, setSelectedSort: r } = e,
    n = K.useCallback(() => r(t), [r, t]);
  return (0, F.jsx)(Qe, {
    focusClassName: (0, _o.default)("test", Al),
    noFocusRing: !0,
    onClick: n,
    children: (0, F.jsx)(Ml, { option: t }),
  });
}
function Ml(e) {
  let { option: t } = e,
    r = $e(),
    n = `#wishlist_controls_sortby_${t}`;
  return (
    t === "order" && !r && (n = "#wishlist_controls_sortby_their_order"),
    y.Localize(n)
  );
}
function Ah(e) {
  let t = (0, F.jsx)(Qe, {
    className: (0, _o.default)(vo, Nl),
    children: y.LocalizeReact(
      "#wishlist_sortby_button",
      (0, F.jsx)("span", {
        className: Rl,
        children: (0, F.jsx)(Ml, { option: e.selectedSort }),
      }),
    ),
  });
  return (0, F.jsx)(zr, {
    menuTarget: t,
    direction: "down",
    className: Ol,
    interactionMode: 1,
    dismissOnClick: !0,
    children: sr.map((r) =>
      (0, F.jsx)(Oh, { option: r, setSelectedSort: e.setSelectedSort }, r),
    ),
  });
}
function Vl(e) {
  let {
    filters: t,
    setFilters: r,
    sort: n,
    setSort: o,
    strTextFilter: i,
    setTextFilter: s,
  } = e;
  return (0, F.jsxs)(Xe, {
    "flow-children": "row",
    className: Cl,
    children: [
      (0, F.jsx)(Fh, { strTextFilter: i, setTextFilter: s }),
      (0, F.jsxs)("div", {
        className: Pl,
        children: [
          (0, F.jsx)(Rh, { filters: t, setFilters: r }),
          (0, F.jsx)(Ah, { selectedSort: n, setSelectedSort: o }),
        ],
      }),
    ],
  });
}
function Q(e, t) {
  return y.Localize("#wishlist_controls_filter_tag_label", e, t);
}
function be(e, t, r, n) {
  switch (e) {
    case "strMinDiscount": {
      let o = t,
        i = y.Localize("#wishlist_controls_options_category_discount");
      return o === ""
        ? Q(i, y.Localize("#wishlist_controls_options_discount_all"))
        : o == "50" || o === "75"
          ? Q(i, y.Localize("#wishlist_controls_options_discount_or_more", o))
          : Q(i, y.Localize(`#wishlist_controls_options_discount_${o}`));
    }
    case "strPlatform": {
      let o = t,
        i = y.Localize("#wishlist_controls_options_category_platform");
      return Q(i, y.Localize(`#wishlist_controls_options_platform_${o}`));
    }
    case "bExcludeEarlyAccess": {
      let o = y.Localize("#wishlist_controls_options_category_exclude");
      return Q(o, y.Localize("#genre_early_access"));
    }
    case "bExcludePrerelease": {
      let o = y.Localize("#wishlist_controls_options_category_exclude");
      return Q(o, y.Localize("#category_prerelease"));
    }
    case "bExcludeVR": {
      let o = y.Localize("#wishlist_controls_options_category_exclude");
      return Q(o, y.Localize("#wishlist_controls_options_exclude_vr"));
    }
    case "nMaxPriceStop": {
      let o = t,
        i = y.Localize("#wishlist_controls_options_category_price");
      return o === "none"
        ? Q(i, y.Localize("#wishlist_controls_options_price_any"))
        : o === "free"
          ? Q(i, Kt("free"))
          : r?.[o].formatted_amount
            ? Q(i, Kt(r[o]))
            : Q(i, "");
    }
    case "rgTypeFilters": {
      let o = t,
        i = y.Localize("#wishlist_controls_options_category_type");
      return o === "games"
        ? Q(i, y.Localize("#wishlist_controls_options_type_game"))
        : o === "software"
          ? Q(i, y.Localize("#wishlist_controls_options_type_application"))
          : Q(i, y.Localize(`#wishlist_controls_options_type_${o}`));
    }
    case "rgDeckFilters": {
      let o = t,
        i = y.Localize("#wishlist_controls_options_category_deck");
      return Q(i, y.Localize(`#wishlist_controls_options_deck_${o}`));
    }
    case "rgTagFilters": {
      let o = t,
        i = y.Localize("#wishlist_controls_options_category_tag"),
        s = n && n[o];
      return Q(i, s || `${o}`);
    }
    case "rgWishlistNotificationGames":
      return y.Localize("#wishlist_filters_notification");
  }
}
function Gl(e) {
  let { filters: t, setFilters: r } = e,
    { data: n } = Ut(),
    { data: o } = rn(we().strLanguage);
  return (0, F.jsxs)("span", {
    children: [
      t.strPlatform !== "all" &&
        (0, F.jsx)(ye, {
          onClick: () => r({ ...t, strPlatform: "all" }),
          children: be("strPlatform", t.strPlatform),
        }),
      t.rgTypeFilters.map((i) =>
        (0, F.jsx)(
          ye,
          {
            onClick: () =>
              r({
                ...t,
                rgTypeFilters: t.rgTypeFilters.filter((s) => s !== i),
              }),
            children: be("rgTypeFilters", i),
          },
          i,
        ),
      ),
      t.nMaxPriceStop !== "none" &&
        (0, F.jsx)(ye, {
          onClick: () => r({ ...t, nMaxPriceStop: "none" }),
          children: be("nMaxPriceStop", t.nMaxPriceStop, n),
        }),
      t.strMinDiscount !== "" &&
        (0, F.jsx)(ye, {
          onClick: () => r({ ...t, strMinDiscount: "" }),
          children: be("strMinDiscount", t.strMinDiscount),
        }),
      t.bExcludeEarlyAccess &&
        (0, F.jsx)(ye, {
          onClick: () => r({ ...t, bExcludeEarlyAccess: !1 }),
          children: be("bExcludeEarlyAccess", t.bExcludeEarlyAccess),
        }),
      t.bExcludeVR &&
        (0, F.jsx)(ye, {
          onClick: () => r({ ...t, bExcludeVR: !1 }),
          children: be("bExcludeVR", t.bExcludeVR),
        }),
      t.bExcludePrerelease &&
        (0, F.jsx)(ye, {
          onClick: () => r({ ...t, bExcludePrerelease: !1 }),
          children: be("bExcludePrerelease", t.bExcludePrerelease),
        }),
      t.rgDeckFilters.map((i) =>
        (0, F.jsx)(
          ye,
          {
            onClick: () =>
              r({
                ...t,
                rgDeckFilters: t.rgDeckFilters.filter((s) => s !== i),
              }),
            children: be("rgDeckFilters", i),
          },
          i,
        ),
      ),
      t.rgTagFilters.map((i) =>
        (0, F.jsx)(
          ye,
          {
            onClick: () =>
              r({ ...t, rgTagFilters: t.rgTagFilters.filter((s) => s !== i) }),
            children: be("rgTagFilters", i, void 0, o),
          },
          i,
        ),
      ),
      !!t.rgWishlistNotificationGames?.length &&
        (0, F.jsx)(ye, {
          onClick: () => r({ ...t, rgWishlistNotificationGames: void 0 }),
          children: be(
            "rgWishlistNotificationGames",
            t.rgWishlistNotificationGames,
          ),
        }),
    ],
  });
}
function ye(e) {
  return (0, F.jsx)("button", {
    onClick: e.onClick,
    className: Fl,
    children: e.children,
  });
}
var Fh = K.memo(function (t) {
  let { strTextFilter: r, setTextFilter: n } = t,
    o = K.useCallback(
      (i) => {
        n(i.currentTarget.value);
      },
      [n],
    );
  return (0, F.jsx)($o, {
    className: Il,
    value: r,
    onChange: o,
    placeholder: y.Localize("#wishlist_search"),
  });
});
function Do(e) {
  return e.toLocaleLowerCase();
}
function Th(e, t) {
  let r = new Set();
  for (let n in t) Do(t[n]).indexOf(e) !== -1 && r.add(parseInt(n));
  return r;
}
function Lh(e, t, r, n, o, i, s) {
  let a = ln[t],
    { dataLoader: c, storeBrowseContext: l, cacheStoreItemData: p } = s;
  return {
    queryKey: ["WishlistAppData", e, a, r],
    queryFn: async () => {
      let u = await n.fetchQuery(go(o, l, e, fo(i, p), a, r)),
        d = {};
      return (
        await Promise.all(
          u.items.map(({ appid: f }) =>
            Promise.all([
              n.fetchQuery(vi(c, { appid: f })),
              n.fetchQuery(yi(c, { appid: f })),
            ]).then(([m, h]) => {
              d[f] = {
                name: Do(m.name || ""),
                tagids: h?.map(({ tagid: g }) => g) || [],
              };
            }),
          ),
        ),
        { apps: d }
      );
    },
  };
}
var Fe = _(N(), 1);
function Ul(e) {
  let { wishlistItem: t } = e,
    { data: r } = De(t);
  return (0, Fe.jsxs)("div", {
    className: (0, $l.default)(lt, tl),
    children: [
      r?.is_early_access && (0, Fe.jsx)(Bh, {}),
      (0, Fe.jsx)(Wh, { wishlistItem: t }),
      (0, Fe.jsx)(ki, { id: t }),
    ],
  });
}
function Bh() {
  return (0, Fe.jsx)("span", {
    className: rl,
    children: y.Localize("#genre_early_access"),
  });
}
function Wh(e) {
  let { wishlistItem: t } = e,
    [r] = Hr();
  return !qo() && !r.rgDeckFilters.length ? null : (0, Fe.jsx)(Mi, { id: t });
}
var zl = _(Ie(), 1),
  Hl = _(V(), 1);
var qr = _(N(), 1);
function ql(e) {
  let { appid: t } = e,
    { data: r } = bi({ appid: t });
  return (0, qr.jsx)("div", {
    className: ol,
    children: r?.slice(0, 5).map((n) => (0, qr.jsx)(kh, { tag: n }, n.tagid)),
  });
}
function kh(e) {
  let { tag: t } = e,
    [r, n] = Hr(),
    o = t.tagid,
    i = r.rgTagFilters.includes(o),
    s = Hl.useCallback(
      () =>
        n((c) => {
          let { rgTagFilters: l } = c,
            p = i ? l.filter((u) => u != o) : l.concat(o);
          return { ...c, rgTagFilters: p };
        }),
      [n, i, o],
    ),
    a = _i(o, we().strLanguage);
  return (0, qr.jsx)("button", {
    className: (0, zl.default)(il, i && sl),
    onClick: s,
    title: y.Localize("#wishlist_controls_tag_description"),
    children: a,
  });
}
var O = _(N(), 1),
  So = qe.memo(function (t) {
    let {
        wishlistItem: r,
        draggableProvided: n,
        isDragging: o,
        dragHandle: i,
        ...s
      } = t,
      { data: a } = De({ appid: r.appid }),
      c = Ht(),
      l = fe(),
      { mutate: p, isPending: u } = Ii(c, r.appid);
    return (0, O.jsxs)(Mh, {
      appid: r.appid,
      item: a,
      draggableProvided: n,
      isDragging: o,
      isRemoving: u,
      ...s,
      children: [
        i,
        (0, O.jsx)(ul, { appid: r.appid }),
        (0, O.jsxs)("div", {
          className: Kc,
          children: [
            (0, O.jsxs)("div", {
              className: Qc,
              children: [
                (0, O.jsx)(ll, { appid: r.appid, item: a }),
                l && (0, O.jsx)(jl, { wishlistItem: r, removeItem: p }),
              ],
            }),
            (0, O.jsx)(Gh, { appid: r.appid, item: a }),
            !l && (0, O.jsx)($h, { wishlistItem: r, removeItem: p }),
          ],
        }),
      ],
    });
  });
function Mh(e) {
  let {
      appid: t,
      item: r,
      draggableProvided: n,
      isDragging: o,
      isRemoving: i,
      children: s,
      ...a
    } = e,
    c = fe(),
    l = (0, Qt.default)(Mc, r && !r.visible && Vc, o && $c, i && Uc, c && Vr),
    p = Vh(t, o, a),
    u = n?.draggableProps.style,
    d =
      o && a.bIsGamepadDragClone && u
        ? { ...u, transform: (u.transform ?? "") + " scale( 1.04 )" }
        : u;
  return (0, O.jsx)(Lo, {
    feature: "wishlist-capsule",
    children: (0, O.jsx)(Fc, {
      appID: t,
      children: (0, O.jsx)(Si, {
        className: l,
        ref: n?.innerRef,
        ...n?.draggableProps,
        focusable: !0,
        ...p,
        style: d,
        children: s,
      }),
    }),
  });
}
function Vh(e, t, r) {
  let { draggableId: n, gamepadStartDrag: o, navRefDraggable: i } = r,
    s = qe.useCallback((c) => o(n, e, c), [o, e, n]),
    a = qe.useCallback((c) => i(e, c), [i, e]);
  return t || !n || !o || !i
    ? {}
    : {
        onSecondaryButton: s,
        navRef: a,
        onSecondaryActionDescription: y.Localize(
          "#wishlist_gamepaddragdrop_reorderaction",
        ),
      };
}
function Gh(e) {
  let { appid: t, item: r } = e;
  if (r && !r.visible) {
    let n = y.Localize("#wishlist_item_unavailable_retired");
    return (
      r.unvailable_for_country_restriction &&
        (n = y.Localize("#wishlist_item_unavailable_region")),
      (0, O.jsx)("div", {
        className: (0, Qt.default)(lt, ho),
        children: (0, O.jsx)("div", { className: Jc, children: n }),
      })
    );
  } else
    return (0, O.jsxs)("div", {
      className: (0, Qt.default)(lt, ho),
      children: [
        (0, O.jsx)(vl, { appid: t }),
        (0, O.jsx)("div", {
          className: el,
          children: (0, O.jsx)(Uh, { appid: t }),
        }),
      ],
    });
}
function $h(e) {
  let { wishlistItem: t, removeItem: r } = e;
  return (0, O.jsxs)(O.Fragment, {
    children: [
      (0, O.jsx)(Ul, { wishlistItem: t }),
      (0, O.jsxs)("div", {
        className: (0, Qt.default)(lt, nl),
        children: [
          (0, O.jsx)(ql, { appid: t.appid }),
          (0, O.jsx)(jl, { wishlistItem: t, removeItem: r }),
        ],
      }),
    ],
  });
}
function Uh(e) {
  let { appid: t } = e,
    { data: r } = De({ appid: t }),
    { data: n } = pi({ appid: t });
  return n
    ? (0, O.jsxs)("div", {
        className: bo,
        children: [
          (0, O.jsx)(Ei, { purchaseOption: n, transparentBackground: !0 }),
          (0, O.jsx)(Oc, { purchaseOption: n }),
        ],
      })
    : r?.is_free && !r.is_coming_soon
      ? (0, O.jsx)("div", {
          className: bo,
          children: (0, O.jsx)(Mr, { itemid: { appid: t } }),
        })
      : null;
}
function jl(e) {
  let { wishlistItem: t, removeItem: r } = e,
    n = $e(),
    o = qe.useMemo(
      () => new Date(t.date_added * 1e3).toLocaleDateString(Oo()),
      [t.date_added],
    );
  return (0, O.jsxs)("div", {
    className: Xc,
    children: [
      y.Localize("#wishlist_item_addedon_date", o),
      n &&
        (0, O.jsxs)(O.Fragment, {
          children: [
            " ( ",
            (0, O.jsx)(Qe, {
              className: al,
              onClick: r,
              children: y.Localize("#wishlist_item_remove"),
            }),
            " )",
          ],
        }),
    ],
  });
}
var Yl = "oI5QPBYWG8c-";
var Kl = "iiFX76jX8MI-";
var Ql = "tcByxp5r-As-";
var Xl = "OVtmn7mzw0o-";
var Jl = "jfAmlCmNzHQ-";
var Zl = "_0tyA9oW-HwA-";
var jr = "cy7Yf-ZR9xQ-";
var Z = _(N(), 1),
  zh = parseInt(Tc),
  Hh = parseInt(Lc),
  qh = parseInt(Bc),
  jh = parseInt(Wc);
function tu(e) {
  let { wishlist: t, loading: r, bEnableDragDrop: n } = e,
    o = k.useCallback((i) => (0, Z.jsx)(So, { wishlistItem: t.items[i] }), [t]);
  return n
    ? (0, Z.jsx)(Yh, { loading: r, wishlist: t })
    : (0, Z.jsx)(ru, { loading: r, nRows: t.items.length || 0, fnRender: o });
}
var ru = k.forwardRef(function (t, r) {
  let { loading: n, nRows: o, fnRender: i, ...s } = t,
    a = fe(),
    c = a ? qh + jh : zh + Hh,
    l = a ? 30 : 10,
    p = k.useRef(),
    u = k.useCallback((d) => {
      p.current && clearTimeout(p.current),
        (p.current = setTimeout(() => {
          history.replaceState({ ...(history.state ?? {}), scrollY: d }, "");
        }, 100));
    }, []);
  return (0, Z.jsx)(Ni, {
    className: (0, Eo.default)(Kl, n && Ql),
    nRows: o,
    nItemHeight: c,
    nRowGap: 0,
    overscan: l,
    renderItem: i,
    ref: r,
    forceVirtualizeType: "element",
    onOffsetChange: u,
    initialOffset: window?.history?.state?.scrollY,
    ...s,
  });
});
function Yh(e) {
  let { loading: t } = e,
    [r, n] = Kh(!t, e.wishlist),
    o = fe(),
    {
      useGamepadSensor: i,
      gamepadStartDrag: s,
      onButtonDown: a,
      refCloneContainer: c,
      navRefDraggable: l,
      fnEndGamepadDrag: p,
      bInGamepadDrag: u,
    } = Xh(),
    d = k.useCallback(
      (g) => {
        p(), g.destination && r(g.source.index, g.destination.index);
      },
      [p, r],
    ),
    f = k.useCallback(
      (g, D, S, C = !1) => {
        let w = (0, Z.jsx)(Ec, {
            dragHandleProps: g.dragHandleProps,
            index: S.source.index,
            updateWishlistPriority: r,
          }),
          I = {
            draggableId: S.draggableId,
            gamepadStartDrag: s,
            navRefDraggable: l,
            bIsGamepadDragClone: C,
          };
        return (0, Z.jsx)(So, {
          wishlistItem: n.items[S.source.index],
          draggableProvided: g,
          isDragging: D.isDragging,
          dragHandle: w,
          ...I,
        });
      },
      [n, r, s, l],
    ),
    m = k.useCallback(
      (g) => {
        let D = n.items[g];
        return (0, Z.jsx)("div", {
          className: (0, Eo.default)(kc, o && Vr),
          children: (0, Z.jsx)(ac, {
            draggableId: `WishlistItem-${D.appid}-${g}`,
            index: g,
            children: f,
          }),
        });
      },
      [n, o, f],
    ),
    h = k.useCallback(
      (g, D, S) =>
        (0, Z.jsx)(Qh, {
          onButtonDown: a,
          navRef: c,
          children: f(g, D, S, !0),
        }),
      [f, a, c],
    );
  return (0, Z.jsx)(tc, {
    onDragEnd: d,
    sensors: [i],
    children: (0, Z.jsx)(pc, {
      droppableId: "droppable",
      renderClone: u ? h : f,
      mode: "virtual",
      children: (g, D) =>
        (0, Z.jsx)(ru, {
          onButtonDown: a,
          loading: t,
          fnRender: m,
          nRows: n.items.length || 0,
          ...g.droppableProps,
          ref: g.innerRef,
        }),
    }),
  });
}
function Kh(e, t) {
  let r = je(),
    [n, o] = k.useState(void 0),
    i = k.useMemo(() => (n ? { ...t, items: n } : t), [t, n]),
    { mutate: s } = tr({
      async mutationFn([c, l]) {
        let p = l.map((d) => ({ appid: c[d].appid, priority: c[d].priority })),
          u = await Ri(p);
        if (u?.result != 1) throw `Error updating wishlist data: ${u?.result}`;
        return !0;
      },
      onMutate([c]) {
        bc(r, t.steamid, c);
      },
      onError() {
        yc(r, t.steamid);
      },
    });
  return [
    k.useCallback(
      (c, l) => {
        if (!e) {
          console.error("Cannot modify wishlist in this mode");
          return;
        }
        if (c == l) return;
        let { rgNewItems: p, rgChangedIndicies: u } = Oi(i.items, c, l);
        o(p), s([p, u], { onSettled: () => o(void 0) });
      },
      [e, i, s],
    ),
    i,
  ];
}
function Qh(e) {
  let { onButtonDown: t, navRef: r, children: n } = e;
  return (0, Z.jsx)(rr, {
    children: (0, Z.jsx)(Xe, {
      autoFocus: !0,
      onButtonDown: t,
      navRef: r,
      onOKActionDescription: y.Localize(
        "#wishlist_gamepaddragdrop_commitreorder",
      ),
      onCancelActionDescription: y.Localize(
        "#wishlist_gamepaddragdrop_cancelreorder",
      ),
      children: n,
    }),
  });
}
function Xh() {
  let [e, t] = k.useState(void 0),
    [r] = k.useState(() => new Map()),
    n = k.useRef(null),
    o = k.useRef(void 0),
    i = k.useCallback((d) => (o.current = d), []),
    s = k.useRef(void 0),
    a = k.useCallback(() => {
      let d = s.current;
      d !== void 0 &&
        (setTimeout(() => r.get(d)?.TakeFocus(), 1), (s.current = void 0)),
        t(void 0);
    }, [r]),
    c = k.useCallback(
      (d, f) => {
        f ? r.set(d, f) : r.delete(d);
      },
      [r],
    ),
    l = k.useCallback((d, f, m) => {
      let h = o.current;
      if (h) {
        let g = h.tryGetLock(d);
        if (g) return (s.current = f), t(g.snapLift()), !0;
      }
      return !1;
    }, []),
    p = k.useCallback(
      (d) => {
        if (!(!e || !e.isActive())) {
          switch (d.detail.button) {
            case 9:
              e.moveUp(), d.stopPropagation();
              break;
            case 12:
              e.moveRight(), d.stopPropagation();
              break;
            case 10:
              e.moveDown(), d.stopPropagation();
              break;
            case 11:
              e.moveLeft(), d.stopPropagation();
              break;
            case 2:
              e.cancel(), d.stopPropagation();
              break;
            case 1:
            case 3:
              e.drop(), d.stopPropagation();
              break;
          }
          n.current?.Node().ForceMeasureFocusRing();
        }
      },
      [e],
    );
  return {
    useGamepadSensor: i,
    gamepadStartDrag: l,
    onButtonDown: p,
    refCloneContainer: n,
    navRefDraggable: c,
    fnEndGamepadDrag: a,
    bInGamepadDrag: !!e,
  };
}
var wo = _(Ie(), 1);
var xo = "bFz2fxg5qDY-";
var nu = "v0rte85hBgA-";
var ou = "mMC3clyeve4-";
var iu = "oRgdZRX3fBo-";
var su = "wA5EFNQ7hrU-";
var ve = _(N(), 1);
function Zh(e) {
  return (0, ve.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, ve.jsx)("path", {
      d: "M33.63 8.05005L30.11 20.81C29.9416 21.453 29.5645 22.0219 29.0378 22.4273C28.5111 22.8328 27.8647 23.0518 27.2 23.05H14.75C14.1022 23.0507 13.4715 22.8416 12.9524 22.4541C12.4333 22.0665 12.0536 21.5213 11.87 20.9L7.56 8.05005H2V4.05005H8.28C8.90845 4.05122 9.52067 4.24973 10.0302 4.61755C10.5398 4.98538 10.921 5.50394 11.12 6.10005L11.78 8.10005L33.63 8.05005ZM15 27.05C14.5055 27.05 14.0222 27.1967 13.6111 27.4714C13.2 27.7461 12.8795 28.1365 12.6903 28.5933C12.5011 29.0502 12.4516 29.5528 12.548 30.0378C12.6445 30.5227 12.8826 30.9682 13.2322 31.3178C13.5819 31.6674 14.0273 31.9056 14.5123 32.002C14.9972 32.0985 15.4999 32.049 15.9567 31.8597C16.4135 31.6705 16.804 31.3501 17.0787 30.939C17.3534 30.5278 17.5 30.0445 17.5 29.55C17.5 28.887 17.2366 28.2511 16.7678 27.7823C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1967 25.6111 27.4714C25.2 27.7461 24.8795 28.1365 24.6903 28.5933C24.5011 29.0502 24.4516 29.5528 24.548 30.0378C24.6445 30.5227 24.8826 30.9682 25.2322 31.3178C25.5819 31.6674 26.0273 31.9056 26.5123 32.002C26.9972 32.0985 27.4999 32.049 27.9567 31.8597C28.4135 31.6705 28.804 31.3501 29.0787 30.939C29.3534 30.5278 29.5 30.0445 29.5 29.55C29.5 28.887 29.2366 28.2511 28.7678 27.7823C28.2989 27.3134 27.663 27.05 27 27.05Z",
      fill: "currentColor",
    }),
  });
}
function eb() {
  let { data: e } = si();
  return e
    ? (0, ve.jsxs)(bt, {
        snr: !0,
        external: !0,
        to: H.STORE_BASE_URL + "cart",
        className: (0, wo.default)(xo, nu),
        children: [
          (0, ve.jsx)(Zh, { className: iu }),
          y.Localize("#cart_count", en(e)),
        ],
      })
    : null;
}
function tb() {
  let { data: e } = yt(ht.steamid);
  return e
    ? (0, ve.jsx)(bt, {
        snr: !0,
        external: !0,
        to: H.STORE_BASE_URL + "wishlist",
        className: (0, wo.default)(xo, ou),
        children: y.Localize("#wishlist_count", en(e)),
      })
    : null;
}
function au() {
  return !ht.logged_in || Pi()
    ? null
    : (0, ve.jsxs)("div", {
        className: su,
        children: [(0, ve.jsx)(tb, {}), (0, ve.jsx)(eb, {})],
      });
}
var A = _(N(), 1),
  rb = Ho({ Component: nb, TemplateConfig: { bVirtualizedScrolling: !0 } });
function nb() {
  let { error: e, steamid: t, sort: r, filters: n } = rb.useLoaderData();
  return (0, A.jsx)(ob, { error: e, steamid: t, sort: r, filters: n });
}
function ob(e) {
  let { error: t, steamid: r, sort: n, filters: o } = e;
  return (0, A.jsx)(fc, {
    steamid: r ?? "0",
    children: (0, A.jsxs)("div", {
      className: Yl,
      children: [
        (0, A.jsx)(au, {}),
        (0, A.jsx)(sb, { steamid: r }),
        t || !r
          ? (0, A.jsx)(Ji, { error: t || "ProfileNotFound" })
          : (0, A.jsx)(Wo, {
              children: (0, A.jsx)(ib, { steamid: r, sort: n, filters: o }),
            }),
      ],
    }),
  });
}
function ib(e) {
  let { steamid: t } = e,
    [r, n] = Tl(e.filters),
    [o, i] = Ll(e.sort),
    [s, a] = (0, Te.useState)(""),
    { data: c } = yt(t);
  return (
    db(i, n, a),
    pb(t, o, r),
    c === 0
      ? (0, A.jsx)(lb, {})
      : (0, A.jsxs)(Wl, {
          filters: r,
          setFilters: n,
          children: [
            (0, A.jsx)(Vl, {
              filters: r,
              setFilters: n,
              sort: o,
              setSort: i,
              strTextFilter: s,
              setTextFilter: a,
            }),
            (0, A.jsx)("hr", { className: Zl }),
            (0, A.jsx)(Gl, { filters: r, setFilters: n }),
            (0, A.jsx)(cb, { sort: o, filters: r, strTextFilter: s }),
          ],
        })
  );
}
function sb(e) {
  let { steamid: t } = e,
    r = nn(t);
  return r.data
    ? (0, A.jsxs)("div", {
        className: Jl,
        children: [
          (0, A.jsx)(Xo, {
            playerLinkDetails: r.data,
            statusPosition: "border",
            alt: "",
            role: "presentation",
            size: "FillArea",
            className: Xl,
          }),
          (0, A.jsx)("h2", {
            children: y.Localize(
              "#wishlist_header",
              r.data.public_data?.persona_name?.toLocaleUpperCase(
                we().strISOCode,
              ) ?? "",
            ),
          }),
        ],
      })
    : null;
}
function ab(e, t, r) {
  let n = $e(),
    o = $i(t) && !r;
  return n && o && e == "order";
}
function cb(e) {
  let { sort: t, filters: r, strTextFilter: n } = e,
    o = Ht(),
    { wishlist: i, bLoading: s } = kl(o, t, r, n),
    a = (0, Te.useRef)(i),
    c = ab(t, r, n),
    l = i || a.current;
  if (!l) return null;
  a.current = l;
  let p = !i || s;
  return l.items.length == 0
    ? (0, A.jsx)(ub, {})
    : (0, A.jsx)(tu, { wishlist: l, loading: p, bEnableDragDrop: c && !p });
}
function lb() {
  return $e()
    ? (0, A.jsx)("div", {
        className: jr,
        children: (0, A.jsxs)("div", {
          children: [
            (0, A.jsx)("h3", {
              children: y.Localize("#wishlist_your_wishlist_empty"),
            }),
            (0, A.jsx)("p", {
              children: y.Localize("#wishlist_browse_the_store"),
            }),
            (0, A.jsx)("p", {
              children: (0, A.jsx)("a", {
                href: `${H.HELP_BASE_URL}${we().strISOCode}/faqs/view/0CAD-3B4D-B874-A065`,
                children: y.Localize("#wishlist_learn_more_button"),
              }),
            }),
          ],
        }),
      })
    : (0, A.jsx)("div", {
        className: jr,
        children: (0, A.jsxs)("div", {
          children: [
            (0, A.jsx)("h3", {
              children: y.Localize("#wishlist_others_wishlist_empty"),
            }),
            (0, A.jsx)("p", {}),
          ],
        }),
      });
}
function ub() {
  let e = Ht(),
    { data: t } = yt(e);
  return (0, A.jsx)("div", {
    className: jr,
    children: (0, A.jsxs)("div", {
      children: [
        (0, A.jsx)("h3", {
          children: y.Localize("#wishlist_no_items_matching_filters"),
        }),
        !!t &&
          (0, A.jsx)("p", {
            children: y.Localize(
              "#wishlist_x_items_on_wishlist_but_none_match",
              t.toLocaleString(),
            ),
          }),
      ],
    }),
  });
}
function db(e, t, r) {
  (0, Te.useEffect)(() => {
    if (location.hash) {
      let n = new URLSearchParams(location.hash.slice(1));
      if (n.has("sort")) {
        let s = n.get("sort");
        qi(s) && e(cn[s]);
      }
      if (n.has("term")) {
        let s = n.get("term");
        r(s);
      }
      let o = {};
      n.has("platform") && (o.platform = n.get("platform")),
        n.has("type") && (o.type_filters = n.get("type")),
        n.has("ex_earlyaccess") &&
          (o.exclude_early_access = n.get("ex_earlyaccess")),
        n.has("ex_prerelease") &&
          (o.exclude_prerelease = n.get("ex_prerelease")),
        n.has("ex_vr") && (o.exclude_vr = n.get("ex_vr")),
        n.get("discount_any") === "1" && (o.min_discount = "any"),
        n.get("discount_50") === "1" && (o.min_discount = "50"),
        n.get("discount_75") === "1" && (o.min_discount = "75");
      let i = [];
      if (
        (n.get("deck_verified") === "1" && i.push("verified"),
        n.get("deck_playable") === "1" && i.push("playable"),
        i.length > 0 && (o.deck_filters = i.join(",")),
        Object.keys(o).length > 0)
      ) {
        let s = zi(o, void 0);
        t(s);
      }
    }
  }, [e, t, r]);
}
function pb(e, t, r) {
  let { data: n } = nn(e),
    o = (0, Te.useRef)(void 0),
    i;
  n?.public_data?.profile_url
    ? (i = on(`/wishlist/id/${n.public_data.profile_url}/`))
    : n?.public_data?.steamid &&
      (i = on(`/wishlist/profiles/${n.public_data.steamid}/`)),
    (0, Te.useEffect)(() => {
      if (!i) return;
      let { protocol: s, hostname: a, search: c } = window.location,
        l = new URL(`${s}//${a}${i}`),
        p = new URLSearchParams(c);
      t && t != sr[0] && l.searchParams.append("sort", t);
      let u = Hi(r);
      for (let d of Object.keys(u)) u[d] && l.searchParams.append(d, u[d]);
      o.current !== void 0 &&
        o.current !== l.searchParams.toString() &&
        Qi(t, u),
        (o.current = l.searchParams.toString()),
        p.has("cc") && l.searchParams.append("cc", p.get("cc")),
        history.replaceState(history.state, "", l);
    }, [i, t, r]);
}
export { rb as route };
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

const CLSTAMP = 9751509;

import { a as Ii, b as Li } from "./chunk-ZQYWOP6I.js";
import { b as rn, c as Ai, d as Bi } from "./chunk-VHQ5HPLJ.js";
import "./chunk-7YCSUF7S.js";
import { a as Pi, c as Ni, d as Ri, e as Oi } from "./chunk-NI3MT6DY.js";
import "./chunk-VANT4S23.js";
import { b as Fi, c as Ti } from "./chunk-6J6F5YQ4.js";
import { c as xi } from "./chunk-T5DT4EF5.js";
import { a as Ko, c as tn, e as gi, g as Di } from "./chunk-UA4MNELK.js";
import { a as Qo } from "./chunk-DXID2LRD.js";
import { b as Yo, c as Ei } from "./chunk-4R3ZF4JO.js";
import { i as Xo } from "./chunk-USLWSCUU.js";
import {
  a as hi,
  b as bi,
  c as yi,
  d as bt,
  e as vi,
} from "./chunk-5KIQ5MQF.js";
import {
  A as ri,
  f as zo,
  g as Ho,
  h as qo,
  o as Jo,
  p as Zo,
  y as ei,
  z as ti,
} from "./chunk-2DDZQUGY.js";
import "./chunk-GECPIY2T.js";
import { a as _i } from "./chunk-OLD6V7A6.js";
import "./chunk-YSXIPEWN.js";
import { a as he } from "./chunk-VFD6FD66.js";
import "./chunk-5I7J532D.js";
import "./chunk-7ZYX2OAB.js";
import {
  d as ni,
  e as oi,
  g as rr,
  h as ii,
  i as si,
  k as De,
  m as ai,
  o as ci,
  p as li,
  q as ui,
  r as di,
  s as pi,
  w as fi,
  z as mi,
} from "./chunk-IN3ECHZ4.js";
import "./chunk-XAYKSZFO.js";
import { f as Bo, j as Wo, k as ko } from "./chunk-KHBR22II.js";
import { r as en, t as Ke, w as Ne, x as jo } from "./chunk-MBESTK3H.js";
import { b as ht } from "./chunk-MORXSHKQ.js";
import "./chunk-6AVOGM3N.js";
import { a as Oo } from "./chunk-E7JZLIU2.js";
import {
  a as tr,
  b as nu,
  c as Se,
  d as nr,
  g as Si,
} from "./chunk-OHA4AFGT.js";
import { a as Lo } from "./chunk-YIEPIMJS.js";
import { a as y } from "./chunk-BE6WO7O2.js";
import { a as Xe } from "./chunk-PCR444WQ.js";
import {
  E as Qe,
  G as Mo,
  I as X,
  J as Pe,
  K as Vo,
  L as Go,
} from "./chunk-QD35AW3P.js";
import { a as Ie } from "./chunk-JTNZZDFM.js";
import "./chunk-3O6X6DC6.js";
import "./chunk-G3SHD7WC.js";
import { c as Uo } from "./chunk-XUYA2EVD.js";
import "./chunk-E5ZDJ6F7.js";
import "./chunk-RMDTKJVO.js";
import "./chunk-OTMFJRGN.js";
import { b as wi, c as Ci } from "./chunk-K7D2L6YT.js";
import { a as nn } from "./chunk-6GHAJQG7.js";
import { a as $o } from "./chunk-O4YU2DVW.js";
import { c as Zr, g as we } from "./chunk-SUZCPLIH.js";
import "./chunk-SA3XWOEA.js";
import { f as Ro } from "./chunk-YDEKJSNU.js";
import {
  b as je,
  e as Ce,
  g as er,
  h as Ao,
  i as Ye,
  n as Fo,
  v as To,
} from "./chunk-L7CVXBMP.js";
import {
  j as No,
  k as mt,
  l as Zt,
  m as H,
  n as gt,
  p as N,
} from "./chunk-TOHILYNG.js";
import { a as G } from "./chunk-GX7N3KBC.js";
import { c as Jt, e as D } from "./chunk-QAUDHXYH.js";
var ns = Jt((rs) => {
  "use strict";
  var sr = G(),
    fu = Qo();
  function mu(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gu = typeof Object.is == "function" ? Object.is : mu,
    hu = fu.useSyncExternalStore,
    bu = sr.useRef,
    yu = sr.useEffect,
    vu = sr.useMemo,
    _u = sr.useDebugValue;
  rs.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
    var i = bu(null);
    if (i.current === null) {
      var s = { hasValue: !1, value: null };
      i.current = s;
    } else s = i.current;
    i = vu(
      function () {
        function c(f) {
          if (!l) {
            if (((l = !0), (p = f), (f = n(f)), o !== void 0 && s.hasValue)) {
              var m = s.value;
              if (o(m, f)) return (u = m);
            }
            return (u = f);
          }
          if (((m = u), gu(p, f))) return m;
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
    var a = hu(e, i[0], i[1]);
    return (
      yu(
        function () {
          (s.hasValue = !0), (s.value = a);
        },
        [a],
      ),
      _u(a),
      a
    );
  };
});
var is = Jt((Wb, os) => {
  "use strict";
  os.exports = ns();
});
var fs = Jt((T) => {
  "use strict";
  var yn = Symbol.for("react.element"),
    vn = Symbol.for("react.portal"),
    cr = Symbol.for("react.fragment"),
    lr = Symbol.for("react.strict_mode"),
    ur = Symbol.for("react.profiler"),
    dr = Symbol.for("react.provider"),
    pr = Symbol.for("react.context"),
    Iu = Symbol.for("react.server_context"),
    fr = Symbol.for("react.forward_ref"),
    mr = Symbol.for("react.suspense"),
    gr = Symbol.for("react.suspense_list"),
    hr = Symbol.for("react.memo"),
    br = Symbol.for("react.lazy"),
    Pu = Symbol.for("react.offscreen"),
    ps;
  ps = Symbol.for("react.module.reference");
  function ce(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case yn:
          switch (((e = e.type), e)) {
            case cr:
            case ur:
            case lr:
            case mr:
            case gr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Iu:
                case pr:
                case fr:
                case br:
                case hr:
                case dr:
                  return e;
                default:
                  return t;
              }
          }
        case vn:
          return t;
      }
    }
  }
  T.ContextConsumer = pr;
  T.ContextProvider = dr;
  T.Element = yn;
  T.ForwardRef = fr;
  T.Fragment = cr;
  T.Lazy = br;
  T.Memo = hr;
  T.Portal = vn;
  T.Profiler = ur;
  T.StrictMode = lr;
  T.Suspense = mr;
  T.SuspenseList = gr;
  T.isAsyncMode = function () {
    return !1;
  };
  T.isConcurrentMode = function () {
    return !1;
  };
  T.isContextConsumer = function (e) {
    return ce(e) === pr;
  };
  T.isContextProvider = function (e) {
    return ce(e) === dr;
  };
  T.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === yn;
  };
  T.isForwardRef = function (e) {
    return ce(e) === fr;
  };
  T.isFragment = function (e) {
    return ce(e) === cr;
  };
  T.isLazy = function (e) {
    return ce(e) === br;
  };
  T.isMemo = function (e) {
    return ce(e) === hr;
  };
  T.isPortal = function (e) {
    return ce(e) === vn;
  };
  T.isProfiler = function (e) {
    return ce(e) === ur;
  };
  T.isStrictMode = function (e) {
    return ce(e) === lr;
  };
  T.isSuspense = function (e) {
    return ce(e) === mr;
  };
  T.isSuspenseList = function (e) {
    return ce(e) === gr;
  };
  T.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === cr ||
      e === ur ||
      e === lr ||
      e === mr ||
      e === gr ||
      e === Pu ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === br ||
          e.$$typeof === hr ||
          e.$$typeof === dr ||
          e.$$typeof === pr ||
          e.$$typeof === fr ||
          e.$$typeof === ps ||
          e.getModuleId !== void 0))
    );
  };
  T.typeOf = ce;
});
var gs = Jt((Kb, ms) => {
  "use strict";
  ms.exports = fs();
});
var Te = D(G(), 1);
function Wi(e) {
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
function on(e) {
  return e == "mac" || e == "linux" ? e : "all";
}
function sn(e) {
  return e == "any" || e == "50" || e == "75" ? e : "";
}
function ou(e, t) {
  if (e === "free") return e;
  if (e && e.length) {
    Ao(t, "cannot EnsureValidPriceStop without rgPriceStops data");
    let r = parseInt(e);
    if ((r || e === "0") && (!t || r < t.length)) return r;
  }
  return "none";
}
function iu(e) {
  if (e == "games" || e == "software" || e == "dlc") return e;
}
function su(e) {
  if (e == "verified" || e == "playable") return e;
}
function ki(e, t) {
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
function Mi(e, t) {
  return {
    strPlatform: on(e.platform),
    strMinDiscount: sn(e.min_discount),
    nMaxPriceStop: ou(e.max_price, t),
    rgTypeFilters: or(e.type_filters, iu),
    bExcludeEarlyAccess: e.exclude_early_access == "1",
    bExcludePrerelease: e.exclude_prerelease == "1",
    bExcludeVR: e.exclude_vr == "1",
    rgDeckFilters: or(e.deck_filters, su),
    rgTagFilters: or(e.tagids, (r) => parseInt(r) || void 0),
    rgWishlistNotificationGames: or(e.wng, (r) => parseInt(r) || void 0),
  };
}
function or(e, t) {
  return (
    e
      ?.split(/,/)
      .map(t)
      .filter((r) => r !== void 0) || []
  );
}
function Vi(e) {
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
var ir = [
    "order",
    "name",
    "price",
    "discount",
    "dateadded",
    "topsellers",
    "releasedate",
    "reviews",
  ],
  an = {
    order: "order",
    name: "name",
    price: "price",
    discount: "discount",
    dateadded: "dateadded",
    salesrank: "topsellers",
    releasedate: "releasedate",
    reviewscore: "reviews",
  };
function Gi(e) {
  return e in an;
}
var cn = {
  order: 0,
  name: 1,
  price: 2,
  discount: 3,
  dateadded: 4,
  topsellers: 5,
  releasedate: 6,
  reviews: 7,
};
var ln = {
  name: "wishlistPrefs",
  options: { path: "/wishlist", secure: !0, maxAge: 365 * 24 * 60 * 60 * 1e3 },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
function un() {
  try {
    let e = JSON.parse(zo(ln) || "{}");
    return e.filterParams?.wng && delete e.filterParams.wng, e;
  } catch {}
  return {};
}
function $i(e) {
  Object.keys(e).length == 0 ? qo(ln) : Ho(ln, JSON.stringify(e));
}
function Ui() {
  return !!un().bCompactView;
}
function zi(e) {
  let t = un();
  e ? (t.bCompactView = !0) : delete t.bCompactView, $i(t);
}
function Hi(e, t) {
  $i({ ...un(), sort: e, filterParams: t });
}
function yt() {
  let e = rr(),
    t = jo();
  return Ce(cu(t, e));
}
function cu(e, t) {
  let { country: r } = t;
  return {
    queryKey: ["StoreBrowsePriceStops", r],
    queryFn: async () => lu(e, r),
    staleTime: 24 * 60 * 60 * 1e3,
  };
}
async function lu(e, t) {
  let r = Ke.Init(Wo);
  r.Body().set_country_code(t);
  let n = await ko.GetPriceStops(e, r);
  if (!n.BSuccess()) throw `Error loading price stops: ${n.GetErrorMessage()}`;
  return n.Body().toObject().price_stops || [];
}
var qi = "a20CyZYbgnQ-";
var Le = D(N(), 1);
function ji(e) {
  return (0, Le.jsx)("div", {
    className: qi,
    children: (0, Le.jsxs)("div", {
      children: [
        (0, Le.jsx)("h1", { children: y.Localize("#errorpage_error") }),
        (0, Le.jsx)("h3", { children: (0, Le.jsx)(du, { error: e.error }) }),
      ],
    }),
  });
}
function du(e) {
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
var v = D(G()),
  Bt = D(Oo());
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
function Yi(e, t) {
  if (Be(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Be(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ki(e) {
  var t = Yi(e, "string");
  return Be(t) == "symbol" ? t : t + "";
}
function Qi(e, t, r) {
  return (
    (t = Ki(t)) in e
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
function Xi(e, t) {
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
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xi(Object(r), !0).forEach(function (n) {
          Qi(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xi(Object(r)).forEach(function (n) {
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
var Ji = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  pn = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Zi = {
    INIT: "@@redux/INIT" + pn(),
    REPLACE: "@@redux/REPLACE" + pn(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + pn();
    },
  };
function pu(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function fn(e, t, r) {
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
    return r(fn)(e, t);
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
    if (!pu(h)) throw new Error(ee(7));
    if (typeof h.type > "u") throw new Error(ee(8));
    if (c) throw new Error(ee(9));
    try {
      (c = !0), (i = o(i, h));
    } finally {
      c = !1;
    }
    for (var g = (s = a), _ = 0; _ < g.length; _++) {
      var S = g[_];
      S();
    }
    return h;
  }
  function f(h) {
    if (typeof h != "function") throw new Error(ee(10));
    (o = h), d({ type: Zi.REPLACE });
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
      (h[Ji] = function () {
        return this;
      }),
      h
    );
  }
  return (
    d({ type: Zi.INIT }),
    (n = { dispatch: d, subscribe: u, getState: p, replaceReducer: f }),
    (n[Ji] = m),
    n
  );
}
function es(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function mn(e, t) {
  if (typeof e == "function") return es(e, t);
  if (typeof e != "object" || e === null) throw new Error(ee(16));
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = es(o, t));
  }
  return r;
}
function gn() {
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
function ts() {
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
        (i = gn.apply(void 0, a)(o.dispatch)),
        dn(dn({}, o), {}, { dispatch: i })
      );
    };
  };
}
var ws = D(Qo()),
  Cs = D(is());
var hn = D(Oo());
function Du(e) {
  e();
}
var ss = Du,
  as = (e) => (ss = e),
  cs = () => ss;
var bn = D(G());
var Eu = D(G());
var vt = D(G()),
  ls = Symbol.for("react-redux-context"),
  us = typeof globalThis < "u" ? globalThis : {};
function Su() {
  var e;
  if (!vt.createContext) return {};
  let t = (e = us[ls]) != null ? e : (us[ls] = new Map()),
    r = t.get(vt.createContext);
  return r || ((r = vt.createContext(null)), t.set(vt.createContext, r)), r;
}
var Ee = Su();
var ar = () => {
  throw new Error("uSES not initialized!");
};
var Cu = ar,
  ds = (e) => {
    Cu = e;
  };
var Sn = D(nu()),
  L = D(G()),
  Ss = D(gs());
var Ru = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Ou(
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
  function _(S, C) {
    let w = !i(C, l),
      I = !o(S, c, C, l);
    return (c = S), (l = C), w && I ? m() : w ? h() : I ? g() : d;
  }
  return function (C, w) {
    return a ? _(C, w) : f(C, w);
  };
}
function _n(e, t) {
  let {
      initMapStateToProps: r,
      initMapDispatchToProps: n,
      initMergeProps: o,
    } = t,
    i = nr(t, Ru),
    s = r(e, i),
    a = n(e, i),
    c = o(e, i);
  return Ou(s, a, c, e, i);
}
function Dn(e, t) {
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
function hs(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function yr(e, t) {
  return function (n, { displayName: o }) {
    let i = function (a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return (
      (i.dependsOnOwnProps = !0),
      (i.mapToProps = function (a, c) {
        (i.mapToProps = e), (i.dependsOnOwnProps = hs(e));
        let l = i(a, c);
        return (
          typeof l == "function" &&
            ((i.mapToProps = l), (i.dependsOnOwnProps = hs(l)), (l = i(a, c))),
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
function bs(e) {
  return e && typeof e == "object"
    ? _t((t) => Dn(e, t))
    : e
      ? typeof e == "function"
        ? yr(e, "mapDispatchToProps")
        : Je(e, "mapDispatchToProps")
      : _t((t) => ({ dispatch: t }));
}
function ys(e) {
  return e
    ? typeof e == "function"
      ? yr(e, "mapStateToProps")
      : Je(e, "mapStateToProps")
    : _t(() => ({}));
}
function Au(e, t, r) {
  return Se({}, r, e, t);
}
function Fu(e) {
  return function (r, { displayName: n, areMergedPropsEqual: o }) {
    let i = !1,
      s;
    return function (c, l, p) {
      let u = e(c, l, p);
      return i ? o(u, s) || (s = u) : ((i = !0), (s = u)), s;
    };
  };
}
function vs(e) {
  return e ? (typeof e == "function" ? Fu(e) : Je(e, "mergeProps")) : () => Au;
}
function Tu() {
  let e = cs(),
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
var _s = { notify() {}, get: () => [] };
function vr(e, t) {
  let r,
    n = _s,
    o = 0,
    i = !1;
  function s(h) {
    p();
    let g = n.subscribe(h),
      _ = !1;
    return () => {
      _ || ((_ = !0), g(), u());
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
    o++, r || ((r = t ? t.addNestedSub(c) : e.subscribe(c)), (n = Tu()));
  }
  function u() {
    o--, r && o === 0 && (r(), (r = void 0), n.clear(), (n = _s));
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
var _r = D(G()),
  Lu =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ze = Lu ? _r.useLayoutEffect : _r.useEffect;
function Ds(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function et(e, t) {
  if (Ds(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  let r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Ds(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
var Bu = ["reactReduxForwardedRef"],
  Es = ar,
  xs = (e) => {
    Es = e;
  };
var Wu = [null, null];
function ku(e, t, r) {
  Ze(() => e(...t), r);
}
function Mu(e, t, r, n, o, i) {
  (e.current = n), (r.current = !1), o.current && ((o.current = null), i());
}
function Vu(e, t, r, n, o, i, s, a, c, l, p) {
  if (!e) return () => {};
  let u = !1,
    d = null,
    f = () => {
      if (u || !a.current) return;
      let h = t.getState(),
        g,
        _;
      try {
        g = n(h, o.current);
      } catch (S) {
        (_ = S), (d = S);
      }
      _ || (d = null),
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
function Gu(e, t) {
  return e === t;
}
function $u(
  e,
  t,
  r,
  {
    pure: n,
    areStatesEqual: o = Gu,
    areOwnPropsEqual: i = et,
    areStatePropsEqual: s = et,
    areMergedPropsEqual: a = et,
    forwardRef: c = !1,
    context: l = Ee,
  } = {},
) {
  let p = l,
    u = ys(e),
    d = bs(t),
    f = vs(r),
    m = !!e;
  return (g) => {
    let _ = g.displayName || g.name || "Component",
      S = `Connect(${_})`,
      C = {
        shouldHandleStateChanges: m,
        displayName: S,
        wrappedComponentName: _,
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
            ft = nr(W, Bu);
          return [W.context, ge, ft];
        }, [W]),
        ae = L.useMemo(
          () =>
            B &&
            B.Consumer &&
            (0, Ss.isContextConsumer)(L.createElement(B.Consumer, null))
              ? B
              : p,
          [B, p],
        ),
        U = L.useContext(ae),
        _e = !!W.store && !!W.store.getState && !!W.store.dispatch,
        ut = !!U && !!U.store,
        me = _e ? W.store : U.store,
        Qt = ut ? U.getServerState : me.getState,
        jr = L.useMemo(() => _n(me.dispatch, C), [me]),
        [dt, wo] = L.useMemo(() => {
          if (!m) return Wu;
          let ge = vr(me, _e ? void 0 : U.subscription),
            ft = ge.notifyNestedSubs.bind(ge);
          return [ge, ft];
        }, [me, _e, U]),
        Co = L.useMemo(
          () => (_e ? U : Se({}, U, { subscription: dt })),
          [_e, U, dt],
        ),
        Yr = L.useRef(),
        Kr = L.useRef(M),
        pt = L.useRef(),
        Io = L.useRef(!1),
        ab = L.useRef(!1),
        Qr = L.useRef(!1),
        Xr = L.useRef();
      Ze(
        () => (
          (Qr.current = !0),
          () => {
            Qr.current = !1;
          }
        ),
        [],
      );
      let Po = L.useMemo(
          () => () =>
            pt.current && M === Kr.current ? pt.current : jr(me.getState(), M),
          [me, M],
        ),
        ru = L.useMemo(
          () => (ft) =>
            dt ? Vu(m, me, dt, jr, Kr, Yr, Io, Qr, pt, wo, ft) : () => {},
          [dt],
        );
      ku(Mu, [Kr, Yr, Io, M, pt, wo]);
      let Xt;
      try {
        Xt = Es(ru, Po, Qt ? () => jr(Qt(), M) : Po);
      } catch (ge) {
        throw (
          (Xr.current &&
            (ge.message += `
The error may be correlated with this previous error:
${Xr.current.stack}

`),
          ge)
        );
      }
      Ze(() => {
        (Xr.current = void 0), (pt.current = void 0), (Yr.current = Xt);
      });
      let Jr = L.useMemo(
        () => L.createElement(g, Se({}, Xt, { ref: te })),
        [te, g, Xt],
      );
      return L.useMemo(
        () => (m ? L.createElement(ae.Provider, { value: Co }, Jr) : Jr),
        [ae, Jr, Co],
      );
    }
    let P = L.memo(w);
    if (((P.WrappedComponent = g), (P.displayName = w.displayName = S), c)) {
      let B = L.forwardRef(function (M, ae) {
        return L.createElement(P, Se({}, M, { reactReduxForwardedRef: ae }));
      });
      return (
        (B.displayName = S), (B.WrappedComponent = g), (0, Sn.default)(B, g)
      );
    }
    return (0, Sn.default)(P, g);
  };
}
var Dr = $u;
var Dt = D(G());
function Uu({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once",
}) {
  let s = Dt.useMemo(() => {
      let l = vr(e);
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
var En = Uu;
ds(Cs.useSyncExternalStoreWithSelector);
xs(ws.useSyncExternalStore);
as(hn.unstable_batchedUpdates);
var We = D(G());
function qu(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Is(e, t) {
  var r = (0, We.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    n = (0, We.useRef)(!0),
    o = (0, We.useRef)(r),
    i = n.current || !!(t && o.current.inputs && qu(t, o.current.inputs)),
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
function ju(e, t) {
  return Is(function () {
    return e;
  }, t);
}
var R = Is,
  x = ju;
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
  Sr = function (t, r) {
    return {
      top: t.top - r.top,
      left: t.left - r.left,
      bottom: t.bottom + r.bottom,
      right: t.right + r.right,
    };
  },
  Ps = function (t, r) {
    return {
      top: t.top + r.top,
      left: t.left + r.left,
      bottom: t.bottom - r.bottom,
      right: t.right - r.right,
    };
  },
  Yu = function (t, r) {
    return {
      top: t.top + r.y,
      left: t.left + r.x,
      bottom: t.bottom + r.y,
      right: t.right + r.x,
    };
  },
  xn = { top: 0, right: 0, bottom: 0, left: 0 },
  Er = function (t) {
    var r = t.borderBox,
      n = t.margin,
      o = n === void 0 ? xn : n,
      i = t.border,
      s = i === void 0 ? xn : i,
      a = t.padding,
      c = a === void 0 ? xn : a,
      l = ue(Sr(r, o)),
      p = ue(Ps(r, s)),
      u = ue(Ps(p, c));
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
    return isNaN(o) && Si(!1), o;
  },
  Ku = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  St = function (t, r) {
    var n = t.borderBox,
      o = t.border,
      i = t.margin,
      s = t.padding,
      a = Yu(n, r);
    return Er({ borderBox: a, border: o, margin: i, padding: s });
  },
  Et = function (t, r) {
    return r === void 0 && (r = Ku()), St(t, r);
  },
  wn = function (t, r) {
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
    return Er({ borderBox: t, margin: n, padding: o, border: i });
  },
  Cn = function (t) {
    var r = t.getBoundingClientRect(),
      n = window.getComputedStyle(t);
    return wn(r, n);
  };
var Ns =
  Number.isNaN ||
  function (t) {
    return typeof t == "number" && t !== t;
  };
function Qu(e, t) {
  return !!(e === t || (Ns(e) && Ns(t)));
}
function Xu(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Qu(e[r], t[r])) return !1;
  return !0;
}
function z(e, t) {
  t === void 0 && (t = Xu);
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
var Ju = function (t) {
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
  tt = Ju;
var Zu = !0,
  ed = /[ \t]{2,}/g,
  td = /^[ \t]*/gm,
  Rs = (e) => e.replace(ed, " ").replace(td, "").trim(),
  rd = (e) =>
    Rs(`
  %c@hello-pangea/dnd

  %c${Rs(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`),
  nd = (e) => [
    rd(e),
    "color: #00C584; font-size: 1.2em; font-weight: bold;",
    "line-height: 1.5",
    "color: #723874;",
  ],
  od = "__@hello-pangea/dnd-disable-dev-warnings";
function oa(e, t) {
  Zu || (typeof window < "u" && window[od]) || console[e](...nd(t));
}
var Ov = oa.bind(null, "warn"),
  id = oa.bind(null, "error");
function Re() {}
function sd(e, t) {
  return { ...e, ...t };
}
function de(e, t, r) {
  let n = t.map((o) => {
    let i = sd(r, o.options);
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
var ad = !0,
  Os = "Invariant failed",
  Ve = class extends Error {};
Ve.prototype.toString = function () {
  return this.message;
};
function b(e, t) {
  if (!e) throw ad ? new Ve(Os) : new Ve(`${Os}: ${t || ""}`);
}
var Wn = class extends v.default.Component {
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
  cd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Pr = (e) => e + 1,
  ld = (e) => `
  You have lifted an item in position ${Pr(e.source.index)}
`,
  ia = (e, t) => {
    let r = e.droppableId === t.droppableId,
      n = Pr(e.index),
      o = Pr(t.index);
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
  sa = (e, t, r) =>
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
  ud = (e) => {
    let t = e.destination;
    if (t) return ia(e.source, t);
    let r = e.combine;
    return r
      ? sa(e.draggableId, e.source, r)
      : "You are over an area that cannot be dropped on";
  },
  As = (e) => `
  The item has returned to its starting position
  of ${Pr(e.index)}
`,
  dd = (e) => {
    if (e.reason === "CANCEL")
      return `
      Movement cancelled.
      ${As(e.source)}
    `;
    let t = e.destination,
      r = e.combine;
    return t
      ? `
      You have dropped the item.
      ${ia(e.source, t)}
    `
      : r
        ? `
      You have dropped the item.
      ${sa(e.draggableId, e.source, r)}
    `
        : `
    The item has been dropped while not over a drop area.
    ${As(e.source)}
  `;
  },
  pd = {
    dragHandleUsageInstructions: cd,
    onDragStart: ld,
    onDragUpdate: ud,
    onDragEnd: dd,
  },
  Ir = pd,
  q = { x: 0, y: 0 },
  Y = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
  re = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  Oe = (e, t) => e.x === t.x && e.y === t.y,
  it = (e) => ({ x: e.x !== 0 ? -e.x : 0, y: e.y !== 0 ? -e.y : 0 }),
  Ge = (e, t, r = 0) => (e === "x" ? { x: t, y: r } : { x: r, y: t }),
  Nt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
  Fs = (e, t) => Math.min(...t.map((r) => Nt(e, r))),
  aa = (e) => (t) => ({ x: e(t.x), y: e(t.y) }),
  fd = (e, t) => {
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
  Ts = (e) => [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.left, y: e.bottom },
    { x: e.right, y: e.bottom },
  ],
  md = { top: 0, right: 0, bottom: 0, left: 0 },
  gd = (e, t) => (t ? Wt(e, t.scroll.diff.displacement) : e),
  hd = (e, t, r) =>
    r && r.increasedBy
      ? { ...e, [t.end]: e[t.end] + r.increasedBy[t.line] }
      : e,
  bd = (e, t) => (t && t.shouldClipSubject ? fd(t.pageMarginBox, e) : ue(e)),
  rt = ({ page: e, withPlaceholder: t, axis: r, frame: n }) => {
    let o = gd(e.marginBox, n),
      i = hd(o, r, t),
      s = bd(i, n);
    return { page: e, withPlaceholder: t, active: s };
  },
  Hn = (e, t) => {
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
  ca = z((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  la = z((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  Or = z((e) => Object.values(e)),
  yd = z((e) => Object.values(e)),
  st = z((e, t) =>
    yd(t)
      .filter((n) => e === n.descriptor.droppableId)
      .sort((n, o) => n.descriptor.index - o.descriptor.index),
  );
function qn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Ar(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Fr = z((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)),
  vd = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: n,
    previousImpact: o,
  }) => {
    if (!r.isCombineEnabled || !qn(o)) return null;
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
    let l = Fr(t, n);
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
  ua = { point: q, value: 0 },
  Rt = { invisible: {}, visible: {}, all: [] },
  _d = { displaced: Rt, displacedBy: ua, at: null },
  Dd = _d,
  pe = (e, t) => (r) => e <= r && r <= t,
  da = (e) => {
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
  Sd = (e) => {
    let t = pe(e.top, e.bottom),
      r = pe(e.left, e.right);
    return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
  },
  jn = {
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
  pa = {
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
  Ed = (e) => (t) => {
    let r = pe(t.top, t.bottom),
      n = pe(t.left, t.right);
    return (o) =>
      e === jn ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
  },
  xd = (e, t) => {
    let r = t.frame ? t.frame.scroll.diff.displacement : q;
    return Wt(e, r);
  },
  wd = (e, t, r) => (t.subject.active ? r(t.subject.active)(e) : !1),
  Cd = (e, t, r) => r(t)(e),
  Yn = ({
    target: e,
    destination: t,
    viewport: r,
    withDroppableDisplacement: n,
    isVisibleThroughFrameFn: o,
  }) => {
    let i = n ? xd(e, t) : e;
    return wd(i, t, o) && Cd(i, r, o);
  },
  Id = (e) => Yn({ ...e, isVisibleThroughFrameFn: da }),
  fa = (e) => Yn({ ...e, isVisibleThroughFrameFn: Sd }),
  Pd = (e) => Yn({ ...e, isVisibleThroughFrameFn: Ed(e.destination.axis) }),
  Nd = (e, t, r) => {
    if (typeof r == "boolean") return r;
    if (!t) return !0;
    let { invisible: n, visible: o } = t;
    if (n[e]) return !1;
    let i = o[e];
    return i ? i.shouldAnimate : !0;
  };
function Rd(e, t) {
  let r = e.page.marginBox,
    n = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return ue(Sr(r, n));
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
      let l = Rd(c, r),
        p = c.descriptor.id;
      if (
        (a.all.push(p),
        !Id({
          target: l,
          destination: t,
          viewport: n,
          withDroppableDisplacement: !0,
        }))
      )
        return (a.invisible[c.descriptor.id] = !0), a;
      let d = Nd(p, i, o),
        f = { draggableId: p, shouldAnimate: d };
      return (a.visible[p] = f), a;
    },
    { all: [], visible: {}, invisible: {} },
  );
}
function Od(e, t) {
  if (!e.length) return 0;
  let r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Ls({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n,
}) {
  let o = Od(e, { inHomeList: t });
  return {
    displaced: Rt,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: { droppableId: n.descriptor.id, index: o },
    },
  };
}
function Nr({
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
    return Ls({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r,
    });
  let l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return Ls({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r,
    });
  let p = Fr(e, t),
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
var Ad = ({
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
  Fd = ({
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
  Td = ({
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
      let u = Fd({
        isMovingForward: e,
        isInHomeList: t,
        location: l.destination,
        insideDestination: i,
      });
      return u == null
        ? null
        : Nr({
            draggable: r,
            insideDestination: i,
            destination: o,
            viewport: a,
            last: s.displaced,
            displacedBy: s.displacedBy,
            index: u,
          });
    }
    let p = Ad({
      isMovingForward: e,
      destination: o,
      displaced: s.displaced,
      draggables: n,
      combine: l.combine,
      afterCritical: c,
    });
    return p == null
      ? null
      : Nr({
          draggable: r,
          insideDestination: i,
          destination: o,
          viewport: a,
          last: s.displaced,
          displacedBy: s.displacedBy,
          index: p,
        });
  },
  Ld = ({ displaced: e, afterCritical: t, combineWith: r, displacedBy: n }) => {
    let o = !!(e.visible[r] || e.invisible[r]);
    return Ae(r, t) ? (o ? q : it(n.point)) : o ? n.point : q;
  },
  Bd = ({ afterCritical: e, impact: t, draggables: r }) => {
    let n = Ar(t);
    n || b(!1);
    let o = n.draggableId,
      i = r[o].page.borderBox.center,
      s = Ld({
        displaced: t.displaced,
        afterCritical: e,
        combineWith: o,
        displacedBy: t.displacedBy,
      });
    return Y(i, s);
  },
  ma = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
  Wd = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
  Kn = (e, t, r) =>
    t[e.crossAxisStart] +
    r.margin[e.crossAxisStart] +
    r.borderBox[e.crossAxisSize] / 2,
  Bs = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    Ge(e.line, t.marginBox[e.end] + ma(e, r), Kn(e, t.marginBox, r)),
  Ws = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    Ge(e.line, t.marginBox[e.start] - Wd(e, r), Kn(e, t.marginBox, r)),
  kd = ({ axis: e, moveInto: t, isMoving: r }) =>
    Ge(e.line, t.contentBox[e.start] + ma(e, r), Kn(e, t.contentBox, r)),
  Md = ({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o,
  }) => {
    let i = st(n.descriptor.id, r),
      s = t.page,
      a = n.axis;
    if (!i.length) return kd({ axis: a, moveInto: n.page, isMoving: s });
    let { displaced: c, displacedBy: l } = e,
      p = c.all[0];
    if (p) {
      let d = r[p];
      if (Ae(p, o)) return Ws({ axis: a, moveRelativeTo: d.page, isMoving: s });
      let f = St(d.page, l.point);
      return Ws({ axis: a, moveRelativeTo: f, isMoving: s });
    }
    let u = i[i.length - 1];
    if (u.descriptor.id === t.descriptor.id) return s.borderBox.center;
    if (Ae(u.descriptor.id, o)) {
      let d = St(u.page, it(o.displacedBy.point));
      return Bs({ axis: a, moveRelativeTo: d, isMoving: s });
    }
    return Bs({ axis: a, moveRelativeTo: u.page, isMoving: s });
  },
  kn = (e, t) => {
    let r = e.frame;
    return r ? Y(t, r.scroll.diff.displacement) : t;
  },
  Vd = ({
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
        ? Md({
            impact: e,
            draggable: t,
            draggables: n,
            droppable: r,
            afterCritical: o,
          })
        : Bd({ impact: e, draggables: n, afterCritical: o });
  },
  Tr = (e) => {
    let t = Vd(e),
      r = e.droppable;
    return r ? kn(r, t) : t;
  },
  ga = (e, t) => {
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
function ks(e, t) {
  return e.map((r) => t[r]);
}
function Gd(e, t) {
  for (let r = 0; r < t.length; r++) {
    let n = t[r].visible[e];
    if (n) return n;
  }
  return null;
}
var $d = ({
    impact: e,
    viewport: t,
    destination: r,
    draggables: n,
    maxScrollChange: o,
  }) => {
    let i = ga(t, Y(t.scroll.current, o)),
      s = r.frame ? Hn(r, Y(r.frame.scroll.current, o)) : r,
      a = e.displaced,
      c = Ot({
        afterDragging: ks(a.all, n),
        destination: r,
        displacedBy: e.displacedBy,
        viewport: i.frame,
        last: a,
        forceShouldAnimate: !1,
      }),
      l = Ot({
        afterDragging: ks(a.all, n),
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
        let h = Gd(m, d);
        if (h) {
          u[m] = h;
          return;
        }
        p[m] = !0;
      }),
      { ...e, displaced: { all: a.all, invisible: p, visible: u } }
    );
  },
  Ud = (e, t) => Y(e.scroll.diff.displacement, t),
  Qn = ({ pageBorderBoxCenter: e, draggable: t, viewport: r }) => {
    let n = Ud(r, e),
      o = re(n, t.page.borderBox.center);
    return Y(t.client.borderBox.center, o);
  },
  ha = ({
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
    return i ? Pd(c) : fa(c);
  },
  zd = ({
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
        vd({
          isMovingForward: e,
          draggable: t,
          destination: r,
          insideDestination: l,
          previousImpact: o,
        }) ||
        Td({
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
    let d = Tr({
      impact: u,
      draggable: t,
      droppable: r,
      draggables: n,
      afterCritical: c,
    });
    if (
      ha({
        draggable: t,
        destination: r,
        newPageBorderBoxCenter: d,
        viewport: i.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: Qn({
          pageBorderBoxCenter: d,
          draggable: t,
          viewport: i,
        }),
        impact: u,
        scrollJumpRequest: null,
      };
    let m = re(d, s),
      h = $d({
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
  Hd = ({
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
      c = Or(n)
        .filter((p) => p !== r)
        .filter((p) => p.isEnabled)
        .filter((p) => !!p.subject.active)
        .filter((p) => da(o.frame)(J(p)))
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
            let d = Fs(t, Ts(J(p))),
              f = Fs(t, Ts(J(u)));
            return d !== f ? d - f : J(p)[s.start] - J(u)[s.start];
          })[0];
  },
  Ms = (e, t) => {
    let r = e.page.borderBox.center;
    return Ae(e.descriptor.id, t) ? re(r, t.displacedBy.point) : r;
  },
  qd = (e, t) => {
    let r = e.page.borderBox;
    return Ae(e.descriptor.id, t) ? Wt(r, it(t.displacedBy.point)) : r;
  },
  jd = ({
    pageBorderBoxCenter: e,
    viewport: t,
    destination: r,
    insideDestination: n,
    afterCritical: o,
  }) =>
    n
      .filter((s) =>
        fa({
          target: qd(s, o),
          destination: r,
          viewport: t.frame,
          withDroppableDisplacement: !0,
        }),
      )
      .sort((s, a) => {
        let c = Nt(e, kn(r, Ms(s, o))),
          l = Nt(e, kn(r, Ms(a, o)));
        return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
      })[0] || null,
  kt = z(function (t, r) {
    let n = r[t.line];
    return { value: n, point: Ge(t.line, n) };
  }),
  Yd = (e, t, r) => {
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
  ba = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
  ya = (e, t, r) => {
    let n = e.frame;
    at(t, e) && b(!1), e.subject.withPlaceholder && b(!1);
    let o = kt(e.axis, t.displaceBy).point,
      i = Yd(e, o, r),
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
      c = ba(n, a),
      l = rt({
        page: e.subject.page,
        withPlaceholder: s,
        axis: e.axis,
        frame: c,
      });
    return { ...e, subject: l, frame: c };
  },
  Kd = (e) => {
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
    let o = ba(r, n),
      i = rt({
        page: e.subject.page,
        axis: e.axis,
        frame: o,
        withPlaceholder: null,
      });
    return { ...e, subject: i, frame: o };
  },
  Qd = ({
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
          displacedBy: ua,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: 0 },
          },
        },
        d = Tr({
          impact: u,
          draggable: n,
          droppable: i,
          draggables: o,
          afterCritical: a,
        }),
        f = at(n, i) ? i : ya(i, n, o);
      return ha({
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
    return Nr({
      draggable: n,
      insideDestination: r,
      destination: i,
      viewport: s,
      displacedBy: p,
      last: Rt,
      index: l,
    });
  },
  Xd = ({
    isMovingForward: e,
    previousPageBorderBoxCenter: t,
    draggable: r,
    isOver: n,
    draggables: o,
    droppables: i,
    viewport: s,
    afterCritical: a,
  }) => {
    let c = Hd({
      isMovingForward: e,
      pageBorderBoxCenter: t,
      source: n,
      droppables: i,
      viewport: s,
    });
    if (!c) return null;
    let l = st(c.descriptor.id, o),
      p = jd({
        pageBorderBoxCenter: t,
        viewport: s,
        destination: c,
        insideDestination: l,
        afterCritical: a,
      }),
      u = Qd({
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
    let d = Tr({
      impact: u,
      draggable: r,
      droppable: c,
      draggables: o,
      afterCritical: a,
    });
    return {
      clientSelection: Qn({
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
  Jd = (e, t) => {
    let r = ne(e);
    return r ? t[r] : null;
  },
  Zd = ({ state: e, type: t }) => {
    let r = Jd(e.impact, e.dimensions.droppables),
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
      ? zd({
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
      : Xd({
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
function va(e) {
  let t = pe(e.top, e.bottom),
    r = pe(e.left, e.right);
  return function (o) {
    return t(o.y) && r(o.x);
  };
}
function ep(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function tp({ pageBorderBox: e, draggable: t, candidates: r }) {
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
function rp({ pageBorderBox: e, draggable: t, droppables: r }) {
  let n = Or(r).filter((o) => {
    if (!o.isEnabled) return !1;
    let i = o.subject.active;
    if (!i || !ep(e, i)) return !1;
    if (va(i)(e.center)) return !0;
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
      : tp({ pageBorderBox: e, draggable: t, candidates: n })
    : null;
}
var _a = (e, t) => ue(Wt(e, t)),
  np = (e, t) => {
    let r = e.frame;
    return r ? _a(t, r.scroll.diff.value) : t;
  };
function Da({ displaced: e, id: t }) {
  return !!(e.visible[t] || e.invisible[t]);
}
function op({ draggable: e, closest: t, inHomeList: r }) {
  return t
    ? r && t.descriptor.index > e.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var ip = ({
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
        Fr(t, n).find((h) => {
          let g = h.descriptor.id,
            _ = h.page.borderBox.center[a.line],
            S = Ae(g, s),
            C = Da({ displaced: o, id: g });
          return S ? (C ? u <= _ : p < _ - l) : C ? u <= _ + l : p < _;
        }) || null,
      m = op({ draggable: t, closest: f, inHomeList: at(t, r) });
    return Nr({
      draggable: t,
      insideDestination: n,
      destination: r,
      viewport: i,
      last: o,
      displacedBy: c,
      index: m,
    });
  },
  sp = 4,
  ap = ({
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
      d = Fr(e, o).find((m) => {
        let h = m.descriptor.id,
          g = m.page.borderBox,
          S = g[s.size] / sp,
          C = Ae(h, i),
          w = Da({ displaced: r.displaced, id: h });
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
  Sa = ({
    pageOffset: e,
    draggable: t,
    draggables: r,
    droppables: n,
    previousImpact: o,
    viewport: i,
    afterCritical: s,
  }) => {
    let a = _a(t.page.borderBox, e),
      c = rp({ pageBorderBox: a, draggable: t, droppables: n });
    if (!c) return Dd;
    let l = n[c],
      p = st(l.descriptor.id, r),
      u = np(l, a);
    return (
      ap({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        previousImpact: o,
        destination: l,
        insideDestination: p,
        afterCritical: s,
      }) ||
      ip({
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
  Xn = (e, t) => ({ ...e, [t.descriptor.id]: t }),
  cp = ({ previousImpact: e, impact: t, droppables: r }) => {
    let n = ne(e),
      o = ne(t);
    if (!n || n === o) return r;
    let i = r[n];
    if (!i.subject.withPlaceholder) return r;
    let s = Kd(i);
    return Xn(r, s);
  },
  lp = ({
    draggable: e,
    draggables: t,
    droppables: r,
    previousImpact: n,
    impact: o,
  }) => {
    let i = cp({ previousImpact: n, impact: o, droppables: r }),
      s = ne(o);
    if (!s) return i;
    let a = r[s];
    if (at(e, a) || a.subject.withPlaceholder) return i;
    let c = ya(a, e, t);
    return Xn(i, c);
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
        Sa({
          pageOffset: u.offset,
          draggable: f,
          draggables: a.draggables,
          droppables: a.droppables,
          previousImpact: e.impact,
          viewport: s,
          afterCritical: e.afterCritical,
        }),
      h = lp({
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
function up(e, t) {
  return e.map((r) => t[r]);
}
var Ea = ({
    impact: e,
    viewport: t,
    draggables: r,
    destination: n,
    forceShouldAnimate: o,
  }) => {
    let i = e.displaced,
      s = up(i.all, r),
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
  xa = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: n,
    viewport: o,
    afterCritical: i,
  }) => {
    let s = Tr({
      impact: e,
      draggable: t,
      draggables: n,
      droppable: r,
      afterCritical: i,
    });
    return Qn({ pageBorderBoxCenter: s, draggable: t, viewport: o });
  },
  wa = ({ state: e, dimensions: t, viewport: r }) => {
    e.movementMode !== "SNAP" && b(!1);
    let n = e.impact,
      o = r || e.viewport,
      i = t || e.dimensions,
      { draggables: s, droppables: a } = i,
      c = s[e.critical.draggable.id],
      l = ne(n);
    l || b(!1);
    let p = a[l],
      u = Ea({ impact: n, viewport: o, destination: p, draggables: s }),
      d = xa({
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
  dp = (e) => ({ index: e.index, droppableId: e.droppableId }),
  Ca = ({ draggable: e, home: t, draggables: r, viewport: n }) => {
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
        at: { type: "REORDER", destination: dp(e.descriptor) },
      },
      afterCritical: l,
    };
  },
  pp = (e, t) => ({
    draggables: e.draggables,
    droppables: Xn(e.droppables, t),
  }),
  Mt = (e) => {},
  Vt = (e) => {},
  fp = ({ draggable: e, offset: t, initialWindowScroll: r }) => {
    let n = St(e.client, t),
      o = Et(n, r);
    return {
      ...e,
      placeholder: { ...e.placeholder, client: n },
      client: n,
      page: o,
    };
  },
  mp = (e) => {
    let t = e.frame;
    return t || b(!1), t;
  },
  gp = ({ additions: e, updatedDroppables: t, viewport: r }) => {
    let n = r.scroll.diff.value;
    return e.map((o) => {
      let i = o.descriptor.droppableId,
        s = t[i],
        c = mp(s).scroll.diff.value,
        l = Y(n, c);
      return fp({
        draggable: o,
        offset: l,
        initialWindowScroll: r.scroll.initial,
      });
    });
  },
  hp = "Processing dynamic changes",
  bp = ({ state: e, published: t }) => {
    Mt();
    let r = t.modified.map((_) => {
        let S = e.dimensions.droppables[_.droppableId];
        return Hn(S, _.scroll);
      }),
      n = { ...e.dimensions.droppables, ...ca(r) },
      o = la(
        gp({
          additions: t.additions,
          updatedDroppables: n,
          viewport: e.viewport,
        }),
      ),
      i = { ...e.dimensions.draggables, ...o };
    t.removals.forEach((_) => {
      delete i[_];
    });
    let s = { droppables: n, draggables: i },
      a = ne(e.impact),
      c = a ? s.droppables[a] : null,
      l = s.draggables[e.critical.draggable.id],
      p = s.droppables[e.critical.droppable.id],
      { impact: u, afterCritical: d } = Ca({
        draggable: l,
        home: p,
        draggables: i,
        viewport: e.viewport,
      }),
      f = c && c.isCombineEnabled ? e.impact : u,
      m = Sa({
        pageOffset: e.current.page.offset,
        draggable: s.draggables[e.critical.draggable.id],
        draggables: s.draggables,
        droppables: s.droppables,
        previousImpact: f,
        viewport: e.viewport,
        afterCritical: d,
      });
    Vt(hp);
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
  Mn = (e) => e.movementMode === "SNAP",
  In = (e, t, r) => {
    let n = pp(e.dimensions, t);
    return !Mn(e) || r
      ? It({ state: e, dimensions: n })
      : wa({ state: e, dimensions: n });
  };
function Pn(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? { ...e, scrollJumpRequest: null }
    : e;
}
var Vs = { phase: "IDLE", completed: null, shouldFlush: !1 },
  yp = (e = Vs, t) => {
    if (t.type === "FLUSH") return { ...Vs, shouldFlush: !0 };
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
        u = Or(i.droppables).every((h) => !h.isFixedOnPage),
        { impact: d, afterCritical: f } = Ca({
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
        bp({ state: e, published: t.payload })
      );
    if (t.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      Me(e) || b(!1);
      let { client: r } = t.payload;
      return Oe(r, e.current.client.selection)
        ? e
        : It({ state: e, clientSelection: r, impact: Mn(e) ? e.impact : null });
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return Pn(e);
      Me(e) || b(!1);
      let { id: r, newScroll: n } = t.payload,
        o = e.dimensions.droppables[r];
      if (!o) return e;
      let i = Hn(o, n);
      return In(e, i, !1);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Me(e) || b(!1);
      let { id: r, isEnabled: n } = t.payload,
        o = e.dimensions.droppables[r];
      o || b(!1), o.isEnabled === n && b(!1);
      let i = { ...o, isEnabled: n };
      return In(e, i, !0);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Me(e) || b(!1);
      let { id: r, isCombineEnabled: n } = t.payload,
        o = e.dimensions.droppables[r];
      o || b(!1), o.isCombineEnabled === n && b(!1);
      let i = { ...o, isCombineEnabled: n };
      return In(e, i, !0);
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      Me(e) || b(!1), e.isWindowScrollAllowed || b(!1);
      let r = t.payload.newScroll;
      if (Oe(e.viewport.scroll.current, r)) return Pn(e);
      let n = ga(e.viewport, r);
      return Mn(e)
        ? wa({ state: e, viewport: n })
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
      let r = Zd({ state: e, type: t.type });
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
  vp = (e) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: e }),
  _p = (e) => ({ type: "LIFT", payload: e }),
  Dp = (e) => ({ type: "INITIAL_PUBLISH", payload: e }),
  Sp = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
  Ep = () => ({ type: "COLLECTION_STARTING", payload: null }),
  xp = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
  wp = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
  Cp = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
  Ia = (e) => ({ type: "MOVE", payload: e }),
  Ip = (e) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: e }),
  Pp = (e) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e }),
  Np = () => ({ type: "MOVE_UP", payload: null }),
  Rp = () => ({ type: "MOVE_DOWN", payload: null }),
  Op = () => ({ type: "MOVE_RIGHT", payload: null }),
  Ap = () => ({ type: "MOVE_LEFT", payload: null }),
  Jn = () => ({ type: "FLUSH", payload: null }),
  Fp = (e) => ({ type: "DROP_ANIMATE", payload: e }),
  Zn = (e) => ({ type: "DROP_COMPLETE", payload: e }),
  Pa = (e) => ({ type: "DROP", payload: e }),
  Tp = (e) => ({ type: "DROP_PENDING", payload: e }),
  Na = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
var Lp =
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
      c.phase === "DROP_ANIMATING" && r(Zn({ completed: c.completed })),
        t().phase !== "IDLE" && b(!1),
        r(Jn()),
        r(vp({ draggableId: i, movementMode: a }));
      let p = {
          draggableId: i,
          scrollOptions: { shouldPublishImmediately: a === "SNAP" },
        },
        { critical: u, dimensions: d, viewport: f } = e.startPublishing(p);
      r(
        Dp({
          critical: u,
          dimensions: d,
          clientSelection: s,
          movementMode: a,
          viewport: f,
        }),
      );
    },
  Bp = (e) => () => (t) => (r) => {
    r.type === "INITIAL_PUBLISH" && e.dragging(),
      r.type === "DROP_ANIMATE" &&
        e.dropping(r.payload.completed.result.reason),
      (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
      t(r);
  },
  eo = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  At = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  Ra = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  ke = `${Ra.outOfTheWay}s ${eo.outOfTheWay}`,
  Pt = {
    fluid: `opacity ${ke}`,
    snap: `transform ${ke}, opacity ${ke}`,
    drop: (e) => {
      let t = `${e}s ${eo.drop}`;
      return `transform ${t}, opacity ${t}`;
    },
    outOfTheWay: `transform ${ke}`,
    placeholder: `height ${ke}, width ${ke}, margin ${ke}`,
  },
  Gs = (e) => (Oe(e, q) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
  Vn = {
    moveTo: Gs,
    drop: (e, t) => {
      let r = Gs(e);
      if (r) return t ? `${r} scale(${At.scale.drop})` : r;
    },
  },
  { minDropTime: Gn, maxDropTime: Oa } = Ra,
  Wp = Oa - Gn,
  $s = 1500,
  kp = 0.6,
  Mp = ({ current: e, destination: t, reason: r }) => {
    let n = Nt(e, t);
    if (n <= 0) return Gn;
    if (n >= $s) return Oa;
    let o = n / $s,
      i = Gn + Wp * o,
      s = r === "CANCEL" ? i * kp : i;
    return Number(s.toFixed(2));
  },
  Vp = ({
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
      p = xa({
        impact: e,
        draggable: t,
        draggables: i,
        afterCritical: o,
        droppable: c || l,
        viewport: n,
      });
    return re(p, t.client.borderBox.center);
  },
  Gp = ({
    draggables: e,
    reason: t,
    lastImpact: r,
    home: n,
    viewport: o,
    onLiftImpact: i,
  }) =>
    !r.at || t !== "DROP"
      ? {
          impact: Ea({
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
  $p =
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
        t(Tp({ reason: i }));
        return;
      }
      if (o.phase === "IDLE") return;
      o.phase === "DROP_PENDING" && o.isWaiting && b(!1),
        o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || b(!1);
      let a = o.critical,
        c = o.dimensions,
        l = c.draggables[o.critical.draggable.id],
        { impact: p, didDropInsideDroppable: u } = Gp({
          reason: i,
          lastImpact: o.impact,
          afterCritical: o.afterCritical,
          onLiftImpact: o.onLiftImpact,
          home: o.dimensions.droppables[o.critical.droppable.id],
          viewport: o.viewport,
          draggables: o.dimensions.draggables,
        }),
        d = u ? qn(p) : null,
        f = u ? Ar(p) : null,
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
        g = Vp({
          impact: p,
          draggable: l,
          dimensions: c,
          viewport: o.viewport,
          afterCritical: o.afterCritical,
        }),
        _ = {
          critical: o.critical,
          afterCritical: o.afterCritical,
          result: h,
          impact: p,
        };
      if (!(!Oe(o.current.client.offset, g) || !!h.combine)) {
        t(Zn({ completed: _ }));
        return;
      }
      let C = Mp({
        current: o.current.client.offset,
        destination: g,
        reason: i,
      });
      t(Fp({ newHomeClientOffset: g, dropDuration: C, completed: _ }));
    },
  Up = $p,
  Aa = () => ({ x: window.pageXOffset, y: window.pageYOffset });
function zp(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: (t) => {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function Hp({ onWindowScroll: e }) {
  function t() {
    e(Aa());
  }
  let r = tt(t),
    n = zp(r),
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
var qp = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  jp = (e) => {
    let t = Hp({
      onWindowScroll: (r) => {
        e.dispatch(Ip({ newScroll: r }));
      },
    });
    return (r) => (n) => {
      !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(),
        t.isActive() && qp(n) && t.stop(),
        r(n);
    };
  },
  Yp = jp,
  Kp = (e) => {
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
  Qp = () => {
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
  Xp = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.droppableId === t.droppableId && e.index === t.index,
  Jp = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.draggableId === t.draggableId && e.droppableId === t.droppableId,
  Zp = (e, t) => {
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
  xr = (e, t) => ({
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: { droppableId: e.droppable.id, index: e.draggable.index },
    mode: t,
  });
function Nn(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  let o = Kp(r);
  e(t, { announce: o }), o.wasCalled() || r(n(t));
}
var ef = (e, t) => {
    let r = Qp(),
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
            f && f(xr(u, d));
          });
      },
      s = (u, d) => {
        n && b(!1);
        let f = xr(u, d);
        (n = {
          mode: d,
          lastCritical: u,
          lastLocation: f.source,
          lastCombine: null,
        }),
          r.add(() => {
            xt("onDragStart", () => Nn(e().onDragStart, f, t, Ir.onDragStart));
          });
      },
      a = (u, d) => {
        let f = qn(d),
          m = Ar(d);
        n || b(!1);
        let h = !Zp(u, n.lastCritical);
        h && (n.lastCritical = u);
        let g = !Xp(n.lastLocation, f);
        g && (n.lastLocation = f);
        let _ = !Jp(n.lastCombine, m);
        if ((_ && (n.lastCombine = m), !h && !g && !_)) return;
        let S = { ...xr(u, n.mode), combine: m, destination: f };
        r.add(() => {
          xt("onDragUpdate", () => Nn(e().onDragUpdate, S, t, Ir.onDragUpdate));
        });
      },
      c = () => {
        n || b(!1), r.flush();
      },
      l = (u) => {
        n || b(!1),
          (n = null),
          xt("onDragEnd", () => Nn(e().onDragEnd, u, t, Ir.onDragEnd));
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
          ...xr(n.lastCritical, n.mode),
          combine: null,
          destination: null,
          reason: "CANCEL",
        };
        l(u);
      },
    };
  },
  tf = (e, t) => {
    let r = ef(e, t);
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
  rf = (e) => (t) => (r) => {
    if (r.type !== "DROP_ANIMATION_FINISHED") {
      t(r);
      return;
    }
    let n = e.getState();
    n.phase !== "DROP_ANIMATING" && b(!1),
      e.dispatch(Zn({ completed: n.completed }));
  },
  nf = rf,
  of = (e) => {
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
          e.getState().phase === "DROP_ANIMATING" && e.dispatch(Na());
        },
      };
      r = requestAnimationFrame(() => {
        (r = null), (t = de(window, [s]));
      });
    };
  },
  sf = of,
  af = (e) => () => (t) => (r) => {
    (r.type === "DROP_COMPLETE" ||
      r.type === "FLUSH" ||
      r.type === "DROP_ANIMATE") &&
      e.stopPublishing(),
      t(r);
  },
  cf = (e) => {
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
  lf = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  uf = (e) => (t) => (r) => (n) => {
    if (lf(n)) {
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
  df = (e) => (t) => (r) => {
    if ((t(r), r.type !== "PUBLISH_WHILE_DRAGGING")) return;
    let n = e.getState();
    n.phase === "DROP_PENDING" &&
      (n.isWaiting || e.dispatch(Pa({ reason: n.reason })));
  },
  pf = df,
  ff = gn,
  mf = ({
    dimensionMarshal: e,
    focusMarshal: t,
    styleMarshal: r,
    getResponders: n,
    announce: o,
    autoScroller: i,
  }) =>
    fn(
      yp,
      ff(ts(Bp(r), af(e), Lp(e), Up, nf, sf, pf, uf(i), Yp, cf(t), tf(n, o))),
    ),
  Rn = () => ({ additions: {}, removals: {}, modified: {} });
function gf({ registry: e, callbacks: t }) {
  let r = Rn(),
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
          (r = Rn()), Vt(), t.publish(f);
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
      n && (cancelAnimationFrame(n), (n = null), (r = Rn()));
    },
  };
}
var Fa = ({ scrollHeight: e, scrollWidth: t, height: r, width: n }) => {
    let o = re({ x: t, y: e }, { x: n, y: r });
    return { x: Math.max(0, o.x), y: Math.max(0, o.y) };
  },
  Ta = () => {
    let e = document.documentElement;
    return e || b(!1), e;
  },
  La = () => {
    let e = Ta();
    return Fa({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  hf = () => {
    let e = Aa(),
      t = La(),
      r = e.y,
      n = e.x,
      o = Ta(),
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
  bf = ({ critical: e, scrollOptions: t, registry: r }) => {
    Mt();
    let n = hf(),
      o = n.scroll.current,
      i = e.droppable,
      s = r.droppable
        .getAllByType(i.type)
        .map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)),
      a = r.draggable
        .getAllByType(e.draggable.type)
        .map((p) => p.getDimension(o)),
      c = { draggables: la(a), droppables: ca(s) };
    return Vt(), { dimensions: c, critical: e, viewport: n };
  };
function Us(e, t, r) {
  return !(
    r.descriptor.id === t.id ||
    r.descriptor.type !== t.type ||
    e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual"
  );
}
var yf = (e, t) => {
    let r = null,
      n = gf({
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
        d.type === "ADDITION" && Us(e, f, d.value) && n.add(d.value),
          d.type === "REMOVAL" && Us(e, f, d.value) && n.remove(d.value);
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
          bf({ critical: h, registry: e, scrollOptions: d.scrollOptions })
        );
      },
      stopPublishing: c,
    };
  },
  Ba = (e, t) =>
    e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
        ? !1
        : e.completed.result.reason === "DROP",
  vf = (e) => {
    window.scrollBy(e.x, e.y);
  },
  _f = z((e) => Or(e).filter((t) => !(!t.isEnabled || !t.frame))),
  Df = (e, t) =>
    _f(t).find((n) => (n.frame || b(!1), va(n.frame.pageMarginBox)(e))) || null,
  Sf = ({ center: e, destination: t, droppables: r }) => {
    if (t) {
      let o = r[t];
      return o.frame ? o : null;
    }
    return Df(e, r);
  },
  Ft = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  },
  Ef = (e, t, r = () => Ft) => {
    let n = r(),
      o = e[t.size] * n.startFromPercentage,
      i = e[t.size] * n.maxScrollAtPercentage;
    return { startScrollingFrom: o, maxScrollValueAt: i };
  },
  Wa = ({ startOfRange: e, endOfRange: t, current: r }) => {
    let n = t - e;
    return n === 0 ? 0 : (r - e) / n;
  },
  to = 1,
  xf = (e, t, r = () => Ft) => {
    let n = r();
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return n.maxPixelScroll;
    if (e === t.startScrollingFrom) return to;
    let i =
        1 -
        Wa({
          startOfRange: t.maxScrollValueAt,
          endOfRange: t.startScrollingFrom,
          current: e,
        }),
      s = n.maxPixelScroll * n.ease(i);
    return Math.ceil(s);
  },
  wf = (e, t, r) => {
    let n = r(),
      o = n.durationDampening.accelerateAt,
      i = n.durationDampening.stopDampeningAt,
      s = t,
      a = i,
      l = Date.now() - s;
    if (l >= i) return e;
    if (l < o) return to;
    let p = Wa({ startOfRange: o, endOfRange: a, current: l }),
      u = e * n.ease(p);
    return Math.ceil(u);
  },
  zs = ({
    distanceToEdge: e,
    thresholds: t,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: o,
  }) => {
    let i = xf(e, t, o);
    return i === 0 ? 0 : n ? Math.max(wf(i, r, o), to) : i;
  },
  Hs = ({
    container: e,
    distanceToEdges: t,
    dragStartTime: r,
    axis: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = Ef(e, n, i);
    return t[n.end] < t[n.start]
      ? zs({
          distanceToEdge: t[n.end],
          thresholds: s,
          dragStartTime: r,
          shouldUseTimeDampening: o,
          getAutoScrollerOptions: i,
        })
      : -1 *
          zs({
            distanceToEdge: t[n.start],
            thresholds: s,
            dragStartTime: r,
            shouldUseTimeDampening: o,
            getAutoScrollerOptions: i,
          });
  },
  Cf = ({ container: e, subject: t, proposedScroll: r }) => {
    let n = t.height > e.height,
      o = t.width > e.width;
    return !o && !n ? r : o && n ? null : { x: o ? 0 : r.x, y: n ? 0 : r.y };
  },
  If = aa((e) => (e === 0 ? 0 : e)),
  ka = ({
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
      a = Hs({
        container: t,
        distanceToEdges: s,
        dragStartTime: e,
        axis: jn,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: i,
      }),
      c = Hs({
        container: t,
        distanceToEdges: s,
        dragStartTime: e,
        axis: pa,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: i,
      }),
      l = If({ x: c, y: a });
    if (Oe(l, q)) return null;
    let p = Cf({ container: t, subject: r, proposedScroll: l });
    return p ? (Oe(p, q) ? null : p) : null;
  },
  Pf = aa((e) => (e === 0 ? 0 : e > 0 ? 1 : -1)),
  ro = (() => {
    let e = (t, r) => (t < 0 ? t : t > r ? t - r : 0);
    return ({ current: t, max: r, change: n }) => {
      let o = Y(t, n),
        i = { x: e(o.x, r.x), y: e(o.y, r.y) };
      return Oe(i, q) ? null : i;
    };
  })(),
  Ma = ({ max: e, current: t, change: r }) => {
    let n = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
      o = Pf(r),
      i = ro({ max: n, current: t, change: o });
    return !i || (o.x !== 0 && i.x === 0) || (o.y !== 0 && i.y === 0);
  },
  no = (e, t) =>
    Ma({ current: e.scroll.current, max: e.scroll.max, change: t }),
  Nf = (e, t) => {
    if (!no(e, t)) return null;
    let r = e.scroll.max,
      n = e.scroll.current;
    return ro({ current: n, max: r, change: t });
  },
  oo = (e, t) => {
    let r = e.frame;
    return r
      ? Ma({ current: r.scroll.current, max: r.scroll.max, change: t })
      : !1;
  },
  Rf = (e, t) => {
    let r = e.frame;
    return !r || !oo(e, t)
      ? null
      : ro({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  Of = ({
    viewport: e,
    subject: t,
    center: r,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = ka({
      dragStartTime: n,
      container: e.frame,
      subject: t,
      center: r,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: i,
    });
    return s && no(e, s) ? s : null;
  },
  Af = ({
    droppable: e,
    subject: t,
    center: r,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i,
  }) => {
    let s = e.frame;
    if (!s) return null;
    let a = ka({
      dragStartTime: n,
      container: s.pageMarginBox,
      subject: t,
      center: r,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: i,
    });
    return a && oo(e, a) ? a : null;
  },
  qs = ({
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
        d = Of({
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
    let l = Sf({
      center: s,
      destination: ne(e.impact),
      droppables: e.dimensions.droppables,
    });
    if (!l) return;
    let p = Af({
      dragStartTime: t,
      droppable: l,
      subject: c,
      center: s,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i,
    });
    p && o(l.descriptor.id, p);
  },
  Ff = ({
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
        qs({
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
        qs({
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
  Tf = ({ move: e, scrollDroppable: t, scrollWindow: r }) => {
    let n = (a, c) => {
        let l = Y(a.current.client.selection, c);
        e({ client: l });
      },
      o = (a, c) => {
        if (!oo(a, c)) return c;
        let l = Rf(a, c);
        if (!l) return t(a.descriptor.id, c), null;
        let p = re(c, l);
        return t(a.descriptor.id, p), re(c, p);
      },
      i = (a, c, l) => {
        if (!a || !no(c, l)) return l;
        let p = Nf(c, l);
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
  Lf = ({
    scrollDroppable: e,
    scrollWindow: t,
    move: r,
    getAutoScrollerOptions: n,
  }) => {
    let o = Ff({
        scrollWindow: t,
        scrollDroppable: e,
        getAutoScrollerOptions: n,
      }),
      i = Tf({ move: r, scrollWindow: t, scrollDroppable: e });
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
  $n = (() => {
    let e = `${nt}-draggable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  Bf = (() => {
    let e = `${nt}-droppable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  js = { contextId: `${nt}-scroll-container-context-id` },
  Wf = (e) => (t) => `[${t}="${e}"]`,
  wt = (e, t) =>
    e
      .map((r) => {
        let n = r.styles[t];
        return n ? `${r.selector} { ${n} }` : "";
      })
      .join(" "),
  kf = "pointer-events: none;",
  Mf = (e) => {
    let t = Wf(e),
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
            dragging: kf,
            dropAnimating: a,
          },
        };
      })(),
      n = (() => {
        let a = `
      transition: ${Pt.outOfTheWay};
    `;
        return {
          selector: t($n.contextId),
          styles: { dragging: a, dropAnimating: a, userCancel: a },
        };
      })(),
      o = {
        selector: t(Bf.contextId),
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
  Vf =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? v.useLayoutEffect
      : v.useEffect,
  oe = Vf,
  On = () => {
    let e = document.querySelector("head");
    return e || b(!1), e;
  },
  Ys = (e) => {
    let t = document.createElement("style");
    return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
  };
function Gf(e, t) {
  let r = R(() => Mf(e), [e]),
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
    let u = Ys(t),
      d = Ys(t);
    return (
      (n.current = u),
      (o.current = d),
      u.setAttribute(`${nt}-always`, e),
      d.setAttribute(`${nt}-dynamic`, e),
      On().appendChild(u),
      On().appendChild(d),
      s(r.always),
      i(r.resting),
      () => {
        let f = (m) => {
          let h = m.current;
          h || b(!1), On().removeChild(h), (m.current = null);
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
function Va(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ga = (e) =>
  e && e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView
    : window;
function Gt(e) {
  return e instanceof Ga(e).HTMLElement;
}
function $a(e, t) {
  let r = `[${ot.contextId}="${e}"]`,
    n = Va(document, r);
  if (!n.length) return null;
  let o = n.find((i) => i.getAttribute(ot.draggableId) === t);
  return !o || !Gt(o) ? null : o;
}
function $f(e) {
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
        let f = $a(e, d);
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
function Uf() {
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
function zf() {
  let e = R(Uf, []);
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
var io = v.default.createContext(null),
  Tt = () => {
    let e = document.body;
    return e || b(!1), e;
  },
  Hf = {
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
  qf = Hf,
  jf = (e) => `rfd-announcement-${e}`;
function Yf(e) {
  let t = R(() => jf(e), [e]),
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
          Se(i.style, qf),
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
var Kf = 0,
  Ua = { separator: "::" };
function Qf(e, t = Ua) {
  return R(() => `${e}${t.separator}${Kf++}`, [t.separator, e]);
}
function Xf(e, t = Ua) {
  let r = v.default.useId();
  return R(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var so = "useId" in v.default ? Xf : Qf;
function Jf({ contextId: e, uniqueId: t }) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Zf({ contextId: e, text: t }) {
  let r = so("hidden-text", { separator: "-" }),
    n = R(() => Jf({ contextId: e, uniqueId: r }), [r, e]);
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
var Lr = v.default.createContext(null),
  em = {
    react: "^16.8.5 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
  },
  tm = /(\d+)\.(\d+)\.(\d+)/,
  Ks = (e) => {
    let t = tm.exec(e);
    t == null && b(!1);
    let r = Number(t[1]),
      n = Number(t[2]),
      o = Number(t[3]);
    return { major: r, minor: n, patch: o, raw: e };
  },
  rm = (e, t) =>
    t.major > e.major
      ? !0
      : t.major < e.major
        ? !1
        : t.minor > e.minor
          ? !0
          : t.minor < e.minor
            ? !1
            : t.patch >= e.patch,
  nm = (e, t) => {
    let r = Ks(e),
      n = Ks(t);
    rm(r, n);
  };
var om = (e) => {
  let t = e.doctype;
  t && (t.name.toLowerCase(), t.publicId);
};
function $t(e, t) {}
function im() {
  $t(() => {
    nm(em.react, v.default.version), om(document);
  }, []);
}
function ao(e) {
  let t = (0, v.useRef)(e);
  return (
    (0, v.useEffect)(() => {
      t.current = e;
    }),
    t
  );
}
function sm() {
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
var am = 9,
  cm = 13,
  co = 27,
  za = 32,
  lm = 33,
  um = 34,
  dm = 35,
  pm = 36,
  fm = 37,
  mm = 38,
  gm = 39,
  hm = 40,
  bm = { [cm]: !0, [am]: !0 },
  Ha = (e) => {
    bm[e.keyCode] && e.preventDefault();
  },
  ym = (() => {
    let e = "visibilitychange";
    return typeof document > "u"
      ? e
      : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
          (n) => `on${n}` in document,
        ) || e;
  })(),
  Br = ym,
  qa = 0,
  Qs = 5;
function vm(e, t) {
  return Math.abs(t.x - e.x) >= Qs || Math.abs(t.y - e.y) >= Qs;
}
var Xs = { type: "IDLE" };
function _m({ cancel: e, completed: t, getPhase: r, setPhase: n }) {
  return [
    {
      eventName: "mousemove",
      fn: (o) => {
        let { button: i, clientX: s, clientY: a } = o;
        if (i !== qa) return;
        let c = { x: s, y: a },
          l = r();
        if (l.type === "DRAGGING") {
          o.preventDefault(), l.actions.move(c);
          return;
        }
        l.type !== "PENDING" && b(!1);
        let p = l.point;
        if (!vm(p, c)) return;
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
        if (o.keyCode === co) {
          o.preventDefault(), e();
          return;
        }
        Ha(o);
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
    { eventName: Br, fn: e },
  ];
}
function Dm(e) {
  let t = (0, v.useRef)(Xs),
    r = (0, v.useRef)(Re),
    n = R(
      () => ({
        eventName: "mousedown",
        fn: function (u) {
          if (
            u.defaultPrevented ||
            u.button !== qa ||
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
      t.current.type !== "IDLE" && ((t.current = Xs), r.current(), i());
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
          d = _m({
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
function Sm() {}
var Em = { [um]: !0, [lm]: !0, [pm]: !0, [dm]: !0 };
function xm(e, t) {
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
        if (o.keyCode === co) {
          o.preventDefault(), r();
          return;
        }
        if (o.keyCode === za) {
          o.preventDefault(), n();
          return;
        }
        if (o.keyCode === hm) {
          o.preventDefault(), e.moveDown();
          return;
        }
        if (o.keyCode === mm) {
          o.preventDefault(), e.moveUp();
          return;
        }
        if (o.keyCode === gm) {
          o.preventDefault(), e.moveRight();
          return;
        }
        if (o.keyCode === fm) {
          o.preventDefault(), e.moveLeft();
          return;
        }
        if (Em[o.keyCode]) {
          o.preventDefault();
          return;
        }
        Ha(o);
      },
    },
    { eventName: "mousedown", fn: r },
    { eventName: "mouseup", fn: r },
    { eventName: "click", fn: r },
    { eventName: "touchstart", fn: r },
    { eventName: "resize", fn: r },
    { eventName: "wheel", fn: r, options: { passive: !0 } },
    { eventName: Br, fn: r },
  ];
}
function wm(e) {
  let t = (0, v.useRef)(Sm),
    r = R(
      () => ({
        eventName: "keydown",
        fn: function (i) {
          if (i.defaultPrevented || i.keyCode !== za) return;
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
          t.current = de(window, xm(l, p), { capture: !0, passive: !1 });
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
var An = { type: "IDLE" },
  Cm = 120,
  Im = 0.15;
function Pm({ cancel: e, getPhase: t }) {
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
        r.keyCode === co && r.preventDefault(), e();
      },
    },
    { eventName: Br, fn: e },
  ];
}
function Nm({ cancel: e, completed: t, getPhase: r }) {
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
        if (!i || !(i.force >= Im)) return;
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
    { eventName: Br, fn: e },
  ];
}
function Rm(e) {
  let t = (0, v.useRef)(An),
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
            { clientX: _, clientY: S } = g,
            C = { x: _, y: S };
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
        o(An),
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
          h = de(window, Nm(m), f),
          g = de(window, Pm(m), f);
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
        let h = setTimeout(p, Cm);
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
          m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(An));
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
function Om(e) {}
var Am = [
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "optgroup",
  "video",
  "audio",
];
function ja(e, t) {
  if (t == null) return !1;
  if (Am.includes(t.tagName.toLowerCase())) return !0;
  let n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : ja(e, t.parentElement);
}
function Fm(e, t) {
  let r = t.target;
  return Gt(r) ? ja(e, r) : !1;
}
var Tm = (e) => ue(e.getBoundingClientRect()).center;
function Lm(e) {
  return e instanceof Ga(e).Element;
}
var Bm = (() => {
  let e = "matches";
  return typeof document > "u"
    ? e
    : [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (n) => n in Element.prototype,
      ) || e;
})();
function Ya(e, t) {
  return e == null ? null : e[Bm](t) ? e : Ya(e.parentElement, t);
}
function Wm(e, t) {
  return e.closest ? e.closest(t) : Ya(e, t);
}
function km(e) {
  return `[${ot.contextId}="${e}"]`;
}
function Mm(e, t) {
  let r = t.target;
  if (!Lm(r)) return null;
  let n = km(e),
    o = Wm(r, n);
  return !o || !Gt(o) ? null : o;
}
function Vm(e, t) {
  let r = Mm(e, t);
  return r ? r.getAttribute(ot.draggableId) : null;
}
function Gm(e, t) {
  let r = `[${$n.contextId}="${e}"]`,
    o = Va(document, r).find((i) => i.getAttribute($n.id) === t);
  return !o || !Gt(o) ? null : o;
}
function $m(e) {
  e.preventDefault();
}
function wr({ expected: e, phase: t, isLockActive: r, shouldWarn: n }) {
  return !(!r() || e !== t);
}
function Ka({ lockAPI: e, store: t, registry: r, draggableId: n }) {
  if (e.isClaimed()) return !1;
  let o = r.draggable.findById(n);
  return !(!o || !o.options.isEnabled || !Ba(t.getState(), n));
}
function Um({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s,
}) {
  if (!Ka({ lockAPI: e, store: r, registry: n, draggableId: o })) return null;
  let c = n.draggable.getById(o),
    l = Gm(t, c.descriptor.id);
  if (!l || (s && !c.options.canDragInteractiveElements && Fm(l, s)))
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
    wr({ expected: I, phase: u, isLockActive: f, shouldWarn: !0 }) &&
      r.dispatch(P());
  }
  let h = m.bind(null, "DRAGGING");
  function g(I) {
    function P() {
      e.release(), (u = "COMPLETED");
    }
    u !== "PRE_DRAG" && (P(), b(!1)),
      r.dispatch(_p(I.liftActionArgs)),
      (u = "DRAGGING");
    function W(B, te = { shouldBlockNextClick: !1 }) {
      if ((I.cleanup(), te.shouldBlockNextClick)) {
        let M = de(window, [
          {
            eventName: "click",
            fn: $m,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(M);
      }
      P(), r.dispatch(Pa({ reason: B }));
    }
    return {
      isActive: () =>
        wr({ expected: "DRAGGING", phase: u, isLockActive: f, shouldWarn: !1 }),
      shouldRespectForcePress: d,
      drop: (B) => W("DROP", B),
      cancel: (B) => W("CANCEL", B),
      ...I.actions,
    };
  }
  function _(I) {
    let P = tt((B) => {
      h(() => Ia({ client: B }));
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
      moveUp: () => h(Np),
      moveRight: () => h(Op),
      moveDown: () => h(Rp),
      moveLeft: () => h(Ap),
    };
    return g({
      liftActionArgs: { id: o, clientSelection: Tm(l), movementMode: "SNAP" },
      cleanup: Re,
      actions: I,
    });
  }
  function C() {
    wr({ expected: "PRE_DRAG", phase: u, isLockActive: f, shouldWarn: !0 }) &&
      e.release();
  }
  return {
    isActive: () =>
      wr({ expected: "PRE_DRAG", phase: u, isLockActive: f, shouldWarn: !1 }),
    shouldRespectForcePress: d,
    fluidLift: _,
    snapLift: S,
    abort: C,
  };
}
var zm = [Dm, wm, Rm];
function Hm({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o,
}) {
  let i = [...(o ? zm : []), ...(n || [])],
    s = (0, v.useState)(() => sm())[0],
    a = x(
      function (g, _) {
        Lt(g) && !Lt(_) && s.tryAbandon();
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
      (h) => Ka({ lockAPI: s, registry: r, store: t, draggableId: h }),
      [s, r, t],
    ),
    l = x(
      (h, g, _) =>
        Um({
          lockAPI: s,
          registry: r,
          contextId: e,
          store: t,
          draggableId: h,
          forceSensorStop: g || null,
          sourceEvent: _ && _.sourceEvent ? _.sourceEvent : null,
        }),
      [e, s, r, t],
    ),
    p = x((h) => Vm(e, h), [e]),
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
          (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Jn()));
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
  Om(i);
  for (let h = 0; h < i.length; h++) i[h](m);
}
var qm = (e) => ({
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
  jm = (e) => ({
    ...Ft,
    ...e.autoScrollerOptions,
    durationDampening: { ...Ft.durationDampening, ...e.autoScrollerOptions },
  });
function Ct(e) {
  return e.current || b(!1), e.current;
}
function Ym(e) {
  let {
      contextId: t,
      setCallbacks: r,
      sensors: n,
      nonce: o,
      dragHandleUsageInstructions: i,
    } = e,
    s = (0, v.useRef)(null);
  im();
  let a = ao(e),
    c = x(() => qm(a.current), [a]),
    l = x(() => jm(a.current), [a]),
    p = Yf(t),
    u = Zf({ contextId: t, text: i }),
    d = Gf(t, o),
    f = x((M) => {
      Ct(s).dispatch(M);
    }, []),
    m = R(
      () =>
        mn(
          {
            publishWhileDragging: Sp,
            updateDroppableScroll: xp,
            updateDroppableIsEnabled: wp,
            updateDroppableIsCombineEnabled: Cp,
            collectionStarting: Ep,
          },
          f,
        ),
      [f],
    ),
    h = zf(),
    g = R(() => yf(h, m), [h, m]),
    _ = R(
      () =>
        Lf({
          scrollWindow: vf,
          scrollDroppable: g.scrollDroppable,
          getAutoScrollerOptions: l,
          ...mn({ move: Ia }, f),
        }),
      [g.scrollDroppable, f, l],
    ),
    S = $f(t),
    C = R(
      () =>
        mf({
          announce: p,
          autoScroller: _,
          dimensionMarshal: g,
          focusMarshal: S,
          getResponders: c,
          styleMarshal: d,
        }),
      [p, _, g, S, c, d],
    );
  s.current = C;
  let w = x(() => {
      let M = Ct(s);
      M.getState().phase !== "IDLE" && M.dispatch(Jn());
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
  let W = x((M) => Ba(Ct(s).getState(), M), []),
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
    Hm({
      contextId: t,
      store: C,
      registry: h,
      customSensors: n || null,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    (0, v.useEffect)(() => w, [w]),
    v.default.createElement(
      Lr.Provider,
      { value: te },
      v.default.createElement(En, { context: io, store: C }, e.children),
    )
  );
}
var Km = 0;
function Qm() {
  return R(() => `${Km++}`, []);
}
function Xm() {
  return v.default.useId();
}
var Jm = "useId" in v.default ? Xm : Qm;
function Qa(e) {
  let t = Jm(),
    r = e.dragHandleUsageInstructions || Ir.dragHandleUsageInstructions;
  return v.default.createElement(Wn, null, (n) =>
    v.default.createElement(
      Ym,
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
var Js = { dragging: 5e3, dropAnimating: 4500 },
  Zm = (e, t) => (t ? Pt.drop(t.duration) : e ? Pt.snap : Pt.fluid),
  eg = (e, t) => {
    if (e) return t ? At.opacity.drop : At.opacity.combining;
  },
  tg = (e) =>
    e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function rg(e) {
  let r = e.dimension.client,
    { offset: n, combineWith: o, dropping: i } = e,
    s = !!o,
    a = tg(e),
    c = !!i,
    l = c ? Vn.drop(n, s) : Vn.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Zm(a, i),
    transform: l,
    opacity: eg(s, c),
    zIndex: c ? Js.dropAnimating : Js.dragging,
    pointerEvents: "none",
  };
}
function ng(e) {
  return {
    transform: Vn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none",
  };
}
function og(e) {
  return e.type === "DRAGGING" ? rg(e) : ng(e);
}
function ig(e, t, r = q) {
  let n = window.getComputedStyle(t),
    o = t.getBoundingClientRect(),
    i = wn(o, n),
    s = Et(i, r),
    a = { client: i, tagName: t.tagName.toLowerCase(), display: n.display },
    c = { x: i.marginBox.width, y: i.marginBox.height };
  return { descriptor: e, placeholder: a, displaceBy: c, client: i, page: s };
}
function sg(e) {
  let t = so("draggable"),
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
        return m || b(!1), ig(r, m, f);
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
var lo = v.default.createContext(null);
function Xa(e) {
  (e && Gt(e)) || b(!1);
}
function ag(e, t, r) {
  $t(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    let o = e.draggableId;
    o || b(!1),
      typeof o != "string" && b(!1),
      Number.isInteger(e.index) || b(!1),
      e.mapped.type !== "DRAGGING" &&
        (Xa(r()), e.isEnabled && ($a(t, o) || b(!1)));
  });
}
function cg(e) {}
function Rr(e) {
  let t = (0, v.useContext)(e);
  return t || b(!1), t;
}
function lg(e) {
  e.preventDefault();
}
var ug = (e) => {
    let t = (0, v.useRef)(null),
      r = x((P = null) => {
        t.current = P;
      }, []),
      n = x(() => t.current, []),
      { contextId: o, dragHandleUsageInstructionsId: i, registry: s } = Rr(Lr),
      { type: a, droppableId: c } = Rr(lo),
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
        dropAnimationFinished: _,
      } = e;
    if ((ag(e, o, n), cg(h), !h)) {
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
      sg(P);
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
                onDragStart: lg,
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
              ? _()
              : (0, Bt.flushSync)(_));
        },
        [_, g],
      ),
      w = R(() => {
        let P = og(g),
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
  dg = ug,
  Ja = (e, t) => e === t,
  Za = (e) => {
    let { combine: t, destination: r } = e;
    return r ? r.droppableId : t ? t.droppableId : null;
  },
  pg = (e) => (e.combine ? e.combine.draggableId : null),
  fg = (e) =>
    e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function mg() {
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
        l = fg(o.impact),
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
        u = Za(l),
        d = pg(l),
        m = {
          duration: o.dropDuration,
          curve: eo.drop,
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
function ec(e = null) {
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
var gg = {
  mapped: {
    type: "SECONDARY",
    offset: q,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ec(null),
  },
};
function hg() {
  let e = z((s, a) => ({ x: s, y: a })),
    t = z(ec),
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
        d = Ar(c),
        f = d && d.draggableId === s ? a : null;
      if (!p) {
        if (!u) return n(f);
        if (c.displaced.invisible[s]) return null;
        let g = it(l.displacedBy.point),
          _ = e(g.x, g.y);
        return r(_, f, !0);
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
var bg = () => {
    let e = mg(),
      t = hg();
    return (n, o) => e(n, o) || t(n, o) || gg;
  },
  yg = { dropAnimationFinished: Na },
  vg = Dr(bg, yg, null, { context: io, areStatePropsEqual: Ja })(dg),
  _g = vg;
function tc(e) {
  return Rr(lo).isUsingCloneFor === e.draggableId && !e.isClone
    ? null
    : v.default.createElement(_g, e);
}
function rc(e) {
  let t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    r = !!e.disableInteractiveElementBlocking,
    n = !!e.shouldRespectForcePress;
  return v.default.createElement(
    tc,
    Se({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: r,
      shouldRespectForcePress: n,
    }),
  );
}
var uo = (e) => (t) => e === t,
  Dg = uo("scroll"),
  Sg = uo("auto"),
  Eg = uo("visible"),
  Zs = (e, t) => t(e.overflowX) || t(e.overflowY),
  xg = (e, t) => t(e.overflowX) && t(e.overflowY),
  nc = (e) => {
    let t = window.getComputedStyle(e),
      r = { overflowX: t.overflowX, overflowY: t.overflowY };
    return Zs(r, Dg) || Zs(r, Sg);
  },
  wg = () => !1,
  oc = (e) =>
    e == null
      ? null
      : e === document.body
        ? wg()
          ? e
          : null
        : e === document.documentElement
          ? null
          : nc(e)
            ? e
            : oc(e.parentElement);
var Un = (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
  ic = (e) =>
    e
      ? window.getComputedStyle(e).position === "fixed"
        ? !0
        : ic(e.parentElement)
      : !1,
  Cg = (e) => {
    let t = oc(e),
      r = ic(e);
    return { closestScrollable: t, isFixedOnPage: r };
  },
  Ig = ({
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
          m = Fa({
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
      l = o === "vertical" ? jn : pa,
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
  Pg = (e, t) => {
    let r = Cn(e);
    if (!t || e !== t) return r;
    let n = r.paddingBox.top - t.scrollTop,
      o = r.paddingBox.left - t.scrollLeft,
      i = n + t.scrollHeight,
      s = o + t.scrollWidth,
      c = Sr({ top: n, right: s, bottom: i, left: o }, r.border);
    return Er({
      borderBox: c,
      margin: r.margin,
      border: r.border,
      padding: r.padding,
    });
  },
  Ng = ({
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
      l = Pg(e, c),
      p = Et(l, n),
      u = (() => {
        if (!c) return null;
        let f = Cn(c),
          m = { scrollHeight: c.scrollHeight, scrollWidth: c.scrollWidth };
        return {
          client: f,
          page: Et(f, n),
          scroll: Un(c),
          scrollSize: m,
          shouldClipSubject: a,
        };
      })();
    return Ig({
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
  Rg = { passive: !1 },
  Og = { passive: !0 },
  ea = (e) => (e.shouldPublishImmediately ? Rg : Og),
  Cr = (e) => (e && e.env.closestScrollable) || null;
function Ag(e) {
  let t = (0, v.useRef)(null),
    r = Rr(Lr),
    n = so("droppable"),
    { registry: o, marshal: i } = r,
    s = ao(e),
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
      return !w || !w.env.closestScrollable ? q : Un(w.env.closestScrollable);
    }, []),
    u = x(() => {
      let w = p();
      l(w.x, w.y);
    }, [p, l]),
    d = R(() => tt(u), [u]),
    f = x(() => {
      let w = t.current,
        I = Cr(w);
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
        let B = Cg(W),
          te = { ref: W, descriptor: a, env: B, scrollOptions: I };
        t.current = te;
        let M = Ng({
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
            (ae.setAttribute(js.contextId, r.contextId),
            ae.addEventListener("scroll", f, ea(te.scrollOptions))),
          M
        );
      },
      [r.contextId, a, f, s],
    ),
    h = x(() => {
      let w = t.current,
        I = Cr(w);
      return (w && I) || b(!1), Un(I);
    }, []),
    g = x(() => {
      let w = t.current;
      w || b(!1);
      let I = Cr(w);
      (t.current = null),
        I &&
          (d.cancel(),
          I.removeAttribute(js.contextId),
          I.removeEventListener("scroll", f, ea(w.scrollOptions)));
    }, [f, d]),
    _ = x((w) => {
      let I = t.current;
      I || b(!1);
      let P = Cr(I);
      P || b(!1), (P.scrollTop += w.y), (P.scrollLeft += w.x);
    }, []),
    S = R(
      () => ({
        getDimensionAndWatchScroll: m,
        getScrollWhileDragging: h,
        dragStopped: g,
        scroll: _,
      }),
      [g, m, h, _],
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
function Fn() {}
var ta = { width: 0, height: 0, margin: md },
  Fg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) =>
    e || r === "close"
      ? ta
      : {
          height: t.client.borderBox.height,
          width: t.client.borderBox.width,
          margin: t.client.margin,
        },
  Tg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) => {
    let n = Fg({ isAnimatingOpenOnMount: e, placeholder: t, animate: r });
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
  Lg = (e) => {
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
            ? (r(), c(!1), Fn)
            : t.current
              ? Fn
              : ((t.current = setTimeout(() => {
                  (t.current = null), c(!1);
                })),
                r)
          : Fn,
      [n, a, r],
    );
    let l = x(
        (u) => {
          u.propertyName === "height" && (o(), n === "close" && i());
        },
        [n, i, o],
      ),
      p = Tg({
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
  Bg = v.default.memo(Lg);
function Tn(e) {
  return typeof e == "boolean";
}
function Ln(e, t) {
  t.forEach((r) => r(e));
}
var Wg = [
    function ({ props: t }) {
      t.droppableId || b(!1), typeof t.droppableId != "string" && b(!1);
    },
    function ({ props: t }) {
      Tn(t.isDropDisabled) || b(!1),
        Tn(t.isCombineEnabled) || b(!1),
        Tn(t.ignoreContainerClipping) || b(!1);
    },
    function ({ getDroppableRef: t }) {
      Xa(t());
    },
  ],
  kg = [
    function ({ props: t, getPlaceholderRef: r }) {
      !t.placeholder || r();
    },
  ],
  Mg = [
    function ({ props: t }) {
      t.renderClone || b(!1);
    },
    function ({ getPlaceholderRef: t }) {
      t() && b(!1);
    },
  ];
function Vg(e) {
  $t(() => {
    Ln(e, Wg),
      e.props.mode === "standard" && Ln(e, kg),
      e.props.mode === "virtual" && Ln(e, Mg);
  });
}
var zn = class extends v.default.PureComponent {
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
  Gg = (e) => {
    let t = (0, v.useContext)(Lr);
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
        getContainerForClone: _,
      } = e,
      S = x(() => o.current, []),
      C = x((U = null) => {
        o.current = U;
      }, []),
      w = x(() => i.current, []),
      I = x((U = null) => {
        i.current = U;
      }, []);
    Vg({ props: e, getDroppableRef: S, getPlaceholderRef: w });
    let P = x(() => {
      n() && g({ maxScroll: La() });
    }, [n, g]);
    Ag({
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
            zn,
            { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
            ({ onClose: U, data: _e, animate: ut }) =>
              v.default.createElement(Bg, {
                placeholder: _e,
                onClose: U,
                innerRef: I,
                animate: ut,
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
        ut = v.default.createElement(
          tc,
          {
            draggableId: U.draggableId,
            index: U.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (me, Qt) => _e(me, Qt, U),
        );
      return Bt.default.createPortal(ut, _());
    }
    return v.default.createElement(lo.Provider, { value: M }, s(B, m), ae());
  },
  $g = Gg;
function Ug() {
  return document.body || b(!1), document.body;
}
var ra = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Ug,
  },
  sc = (e) => {
    let t = { ...e },
      r;
    for (r in ra) e[r] === void 0 && (t = { ...t, [r]: ra[r] });
    return t;
  },
  Bn = (e, t) => e === t.droppable.type,
  na = (e, t) => t.draggables[e.draggable.id],
  zg = () => {
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
      let a = sc(s),
        c = a.droppableId,
        l = a.type,
        p = !a.isDropDisabled,
        u = a.renderClone;
      if (Lt(i)) {
        let d = i.critical;
        if (!Bn(l, d)) return t;
        let f = na(d, i.dimensions),
          m = ne(i.impact) === c;
        return n(c, p, m, m, f, u);
      }
      if (i.phase === "DROP_ANIMATING") {
        let d = i.completed;
        if (!Bn(l, d.critical)) return t;
        let f = na(d.critical, i.dimensions);
        return n(c, p, Za(d.result) === c, ne(d.impact) === c, f, u);
      }
      if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
        let d = i.completed;
        if (!Bn(l, d.critical)) return t;
        let f = ne(d.impact) === c,
          m = !!(d.impact.at && d.impact.at.type === "COMBINE"),
          h = d.critical.droppable.id === c;
        return f ? (m ? e : t) : h ? e : t;
      }
      return t;
    };
  },
  Hg = { updateViewportMaxScroll: Pp },
  qg = Dr(zg, Hg, (e, t, r) => ({ ...sc(r), ...e, ...t }), {
    context: io,
    areStatePropsEqual: Ja,
  })($g),
  ac = qg;
var So = D(Ie(), 1),
  k = D(G(), 1);
var ie = D(G(), 1);
var uc = D(N(), 1),
  Ut = ie.createContext(void 0);
function cc(e) {
  let { steamid: t, children: r } = e,
    [n, o] = ie.useState(() => Ui()),
    i = Xo(),
    s = ie.useCallback((c) => {
      zi(c), o(c);
    }, []),
    a = ie.useMemo(
      () => ({
        steamid: t,
        bViewingOwnWishlist:
          !!i && new en(i).GetAccountID() == new en(t).GetAccountID(),
        bCompactView: n,
        setCompactView: s,
      }),
      [t, i, n, s],
    );
  return (0, uc.jsx)(Ut.Provider, { value: a, children: r });
}
function $e() {
  return ie.useContext(Ut).bViewingOwnWishlist;
}
function zt() {
  return ie.useContext(Ut).steamid;
}
function fe() {
  return ie.useContext(Ut).bCompactView;
}
function lc() {
  return ie.useContext(Ut).setCompactView;
}
function po(e, t) {
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
async function jg(e, t, r, n, o, i) {
  let s = Ke.Init(bi);
  s.Body().set_steamid(r),
    ni(t, s),
    n &&
      (oi(s, n.data_request),
      s.Body().set_start_index(n.page_start || 0),
      s.Body().set_page_size(n.page_size)),
    o && s.Body().set_sort_order(o),
    i && s.Body().set_filters(hi.fromObject(i));
  let a = await yi.GetWishlistSortedFiltered(e, s);
  if (!a.BSuccess())
    throw new Fo(
      a.GetEResult(),
      `Error loading sorted/filtered wishlist: ${a.GetErrorMessage()}`,
    );
  let c;
  return (
    n
      ? (c = Yg(n.cacheStoreItemData, n.data_request, a.Body().items() || []))
      : (c = a.Body().toObject().items || []),
    { steamid: r, items: c }
  );
}
function Yg(e, t, r) {
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
function fo(e, t = 0, r = {}) {
  return ["WishlistSortedFiltered", e, t, r];
}
function mo(e, t, r, n, o = 0, i = {}) {
  return {
    queryKey: fo(r, o, i),
    queryFn: () => jg(e, t, r, n, o, i),
    staleTime: 10 * 60 * 1e3,
  };
}
function dc(e, t = 0, r = {}) {
  let n = Ne(),
    o = rr(),
    i = ii(),
    s = fe();
  return Ce(mo(n, o, e, po(s, i), t, r));
}
function pc(e, t, r) {
  e.setQueryData(fo(t), (n) => n && { ...n, items: r });
}
function fc(e, t) {
  e.invalidateQueries({ queryKey: fo(t), exact: !1 });
}
var Ht = D(G(), 1);
var mc = "/TB3SP4DA.png";
var gc = "s3BAyjuoPYA-";
var hc = "wgHGKOWFf8c-";
var bc = "dIPGtN9kABg-";
var Ue = D(N(), 1);
function yc(e) {
  let { dragHandleProps: t, index: r, updateWishlistPriority: n } = e,
    [o, i] = Ht.useState(void 0),
    s = Ht.useCallback((l) => {
      i(l.currentTarget.value);
    }, []),
    a = Ht.useCallback(
      (l) => {
        let p = parseInt(l.currentTarget.value);
        p && p - 1 != r && n(r, p - 1), i(void 0);
      },
      [r, n],
    ),
    c = o !== void 0 ? o : r + 1;
  return (0, Ue.jsxs)("div", {
    className: gc,
    children: [
      (0, Ue.jsx)("div", {
        className: hc,
        ...t,
        children: (0, Ue.jsx)("img", { src: Zt(mc), alt: "" }),
      }),
      (0, Ue.jsx)("div", {
        className: bc,
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
var xe = D(G());
var Xg = "unUserdataVersion";
async function vc(e, t) {
  let r = Number.parseInt(window.localStorage.getItem(Xg) || "0"),
    n = `${No.STORE_BASE_URL}dynamicstore/userdata/?id=${t}&cc=${mt.country_code}`;
  return (
    r && (n += `&v=${r}`), (await (await fetch(n)).json()).rgOwnedApps || []
  );
}
function _c() {
  let e = Ne(),
    t = mt.accountid;
  return Ce(Jg(e, t));
}
function Jg(e, t) {
  return {
    queryKey: Sc(t),
    queryFn: async () => {
      if (!t) return new Set();
      let r = await vc(e, t);
      return new Set(r);
    },
    staleTime: 10 * 60 * 1e3,
  };
}
function Dc() {
  let e = je(),
    t = mt.accountid;
  return (r) => {
    e.setQueryData(Sc(t), (n) => {
      if (n) return new Set([...n.values(), ...r]);
    });
  };
}
function Sc(e) {
  return ["AccountOwnedApps", e ?? 0];
}
function Ec(e) {
  let t = Ne(),
    r = Dc();
  return er({
    mutationFn: () => Zg(t, e),
    onSuccess(n) {
      let [
        o,
        { packageids_added: i, appids_added: s, purchase_result_detail: a },
      ] = n;
      s && r(s);
    },
  });
}
async function Zg(e, t) {
  let r = Ke.Init(Jo);
  r.Body().set_item_id(Bo.fromObject(t));
  let n = await Zo.AddFreeLicense(e, r);
  return [n.GetEResult(), n.Body().toObject()];
}
var Wr = D(G(), 1);
var wc = D(N(), 1);
function xc(e) {
  let [t, r] = (0, Wr.useState)(void 0),
    n = `${H.STORE_BASE_URL}login/${t ? `?redir=${encodeURIComponent(t)}` : ""}`;
  return (
    (0, Wr.useEffect)(() => {
      r(location.href);
    }, []),
    (0, wc.jsx)(Oi, {
      href: n,
      title: e.strToolTip,
      children: he.Localize("#Button_SignIn"),
    })
  );
}
var qt = D(N());
function kr(e) {
  let { itemid: t } = e,
    { bIsOwned: r, unAppID: n } = th(t);
  return gt.logged_in
    ? r
      ? (0, qt.jsx)(Ai, { appid: n })
      : (0, qt.jsx)(eh, { itemid: t })
    : (0, qt.jsx)(xc, {
        strToolTip: he.Localize("#SignInToAddToLibrary_Tooltip"),
      });
}
function eh(e) {
  let { mutate: t } = Ec(e.itemid);
  return (0, qt.jsx)(Ri, {
    onClick: () => t(),
    children: he.Localize("#AddToLibraryButton"),
  });
}
function th(e) {
  let { data: t } = De("appid" in e ? void 0 : e),
    { data: r } = _c(),
    n;
  return (
    "appid" in e ? (n = [e.appid]) : t && (n = t.included_appids),
    n === void 0 || r === void 0 || n.length == 0
      ? { bIsOwned: void 0 }
      : { bIsOwned: !n.some((o) => !r.has(o)), unAppID: n[0] }
  );
}
var se = D(N()),
  rh = xe.lazy(() => import("./cartmodal-ZI3V6ZJW.js"));
function Cc(e) {
  let { purchaseOption: t } = e;
  if (!t) return null;
  if (t.is_free_to_keep)
    return (0, se.jsx)(kr, { itemid: { packageid: t.packageid } });
  if (t.packageid) return (0, se.jsx)(nh, { packageid: t.packageid });
  if (t.bundleid) return (0, se.jsx)(oh, { bundleid: t.bundleid });
  throw "Purchase option does not have package or bundle associated";
}
var nh = xe.memo(function (t) {
    return Ic(t.packageid, void 0);
  }),
  oh = xe.memo(function (t) {
    return Ic(void 0, t.bundleid);
  });
function Ic(e, t) {
  let { data: r } = ei(),
    [n, o] = xe.useState(void 0),
    i = xe.useMemo(() => ti(r, e, t), [r, e, t]),
    { mutate: s } = Ii(e, t, i);
  return (0, se.jsxs)(se.Fragment, {
    children: [
      n && (0, se.jsx)(rh, { lineItemIDs: n, closeCart: () => o(void 0) }),
      i
        ? (0, se.jsx)(ih, {})
        : (0, se.jsx)(sh, {
            addToCart: () => {
              s(void 0, { onSuccess: (a) => o(a) });
            },
          }),
    ],
  });
}
function ih() {
  return (0, se.jsx)(Ni, {
    href: `${H.STORE_BASE_URL}cart/`,
    children: he.Localize("#AddToCartButton_InCart"),
  });
}
function sh(e) {
  return (0, se.jsx)(Pi, {
    onClick: e.addToCart,
    children: he.Localize("#AddToCartButton_AddToCart"),
  });
}
var Kt = D(Ie(), 1),
  qe = D(G(), 1);
var $r = D(G(), 1);
var Pc = "160px";
var Nc = "20px";
var Rc = "82px";
var Oc = "8px";
var Ac = "pAoL4PrPWdg-";
var Mr = "XNnjz6jit-E-";
var Fc = "LSY1zV2DJSM-";
var Tc = "mYGhH-Z5fCw-";
var Lc = "Fuz2JeT4RfI-";
var Bc = "s5Uj2rl926U-";
var Wc = "FMRSvVtOAmQ-";
var kc = "oVvbc-NOBF8-";
var Mc = "S4P-Tu6KIaQ-";
var Vc = "XAEHFx5bCT0-";
var Gc = "LhqQh5zRkIw-";
var $c = "TjfbNdRyip4-";
var Uc = "_0arfU0-7OcQ-";
var zc = "pMrnNJp5sDA-";
var Hc = "p2qp0XfBE8M-";
var go = "j7Wl8MzErkA-";
var ct = "vdNOP82JYX8-";
var qc = "xlAKnJ50oYQ-";
var jc = "DUS6KmDUKhc-";
var Vr = "yrG419d95pU-";
var Gr = "mOoPKvox-wE-";
var Yc = "_7zQ9up20PmA-";
var ho = "wzQIocnKXn4-";
var Kc = "_-6uwAFLL9K0-";
var Qc = "DKmMkONAXgw-";
var Xc = "_93IWcQLinlA-";
var Jc = "_7GG-Yb2cOxg-";
var Zc = "jHvUCZyctAM-";
var el = "Ypx0AcKkoSM-";
var tl = "nK8lTB5HZ5o-";
var rl = "_80azkrfBXSM-";
var jt = "yO-tcJ7evNI-";
var V = D(N(), 1);
function nl(e) {
  let { appid: t, item: r } = e,
    n = r?.name;
  return (
    !n &&
      r &&
      !r.visible &&
      (n = y.Localize("#wishlist_item_unavailable_title")),
    (0, V.jsx)(il, { item: r, appid: t, className: Lc, children: n || " " })
  );
}
function ol(e) {
  let { appid: t } = e,
    { data: r } = De({ appid: t });
  return (0, V.jsx)(il, {
    item: r,
    appid: t,
    className: kc,
    children: (0, V.jsx)(ah, { item: r, appid: t }),
  });
}
function ah(e) {
  let { appid: t, item: r } = e,
    [n, o] = $r.useState(!1),
    i = $r.useCallback(() => o(!0), []);
  return (0, V.jsxs)("div", {
    className: $c,
    onMouseEnter: i,
    children: [
      n && r?.visible && (0, V.jsx)(lh, { appid: t, item: r }),
      (0, V.jsx)(ch, { appid: t, item: r }),
    ],
  });
}
function ch(e) {
  let { appid: t, item: r } = e,
    { data: n } = ci({ appid: t });
  if (!n?.header && !n?.library_capsule_2x) return (0, V.jsx)("div", {});
  let o =
      n.header &&
      n?.asset_url_format?.replace(
        "${FILENAME}",
        n.header.replace(/header/, "header_292x136"),
      ),
    i = n.library_capsule_2x ?? n.library_capsule,
    s = i && n?.asset_url_format?.replace("${FILENAME}", i);
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsx)("img", {
        className: Mc,
        src: `${H.STORE_ITEM_BASE_URL}${o}`,
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      (0, V.jsx)("img", {
        className: Vc,
        src: s ? `${H.STORE_ITEM_BASE_URL}${s}` : Zt(Bi),
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      !s && (0, V.jsx)("div", { className: Gc, children: r?.name }),
    ],
  });
}
function lh(e) {
  let { item: t, appid: r } = e,
    { data: n } = li({ appid: r });
  return !n || !n.all_ages_screenshots || n.all_ages_screenshots.length < 4
    ? null
    : (0, V.jsxs)("div", {
        className: rl,
        children: [
          (0, V.jsx)("img", {
            className: jt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[0].filename}`,
            alt: t.name,
          }),
          (0, V.jsx)("img", {
            className: jt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[1].filename}`,
            alt: t.name,
          }),
          (0, V.jsx)("img", {
            className: jt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[2].filename}`,
            alt: t.name,
          }),
          (0, V.jsx)("img", {
            className: jt,
            src: `${H.STORE_ITEM_BASE_URL}${n.all_ages_screenshots[3].filename}`,
            alt: t.name,
          }),
        ],
      });
}
function il(e) {
  let t,
    r = Go();
  if (e.item) t = `${H.STORE_BASE_URL}${e.item.store_url_path}`;
  else if (e.appid) t = `${H.STORE_BASE_URL}app/${e.appid}/`;
  else
    return (0, V.jsx)("span", { className: e.className, children: e.children });
  return (0, V.jsx)(ht, {
    ref: r,
    snr: !0,
    to: t,
    className: e.className,
    openInNewWindow: !0,
    children: e.children,
  });
}
var ul = D(Ie());
var sl = "cWLPuFe-zxc-";
var al = "z-ezG-Xu844-";
var cl = "Kech-xMfQ8o-";
var ll = "MbdBgOhlg7c-";
var pl = D(N());
function dl(e) {
  let { reviewScore: t } = e,
    r = dh(t),
    n = t.summary_filtered,
    o;
  return (
    n?.review_count &&
      (o = he.Localize(
        "#review_summary_reviewrate",
        n.percent_positive,
        n.review_count.toLocaleString(),
      )),
    (0, pl.jsx)("span", {
      className: r,
      title: o,
      children: n?.review_score_label,
    })
  );
}
function dh(e) {
  let t;
  if (e && e.summary_filtered)
    switch (e.summary_filtered.review_score) {
      case 9:
      case 8:
      case 7:
      case 6:
        t = ll;
        break;
      case 5:
        t = cl;
        break;
      case 4:
      case 3:
      case 2:
      case 1:
        t = al;
        break;
    }
  return (0, ul.default)(sl, t);
}
var $ = D(N(), 1);
function fl(e) {
  let { appid: t } = e;
  return (0, $.jsxs)("div", {
    className: jc,
    children: [(0, $.jsx)(ph, { appid: t }), (0, $.jsx)(fh, { appid: t })],
  });
}
function ml() {
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)("div", { className: Vr }),
      (0, $.jsx)("div", { className: Gr, children: " " }),
    ],
  });
}
function ph(e) {
  let { appid: t } = e,
    { data: r } = ui({ appid: t });
  return !r || !r.summary_filtered
    ? (0, $.jsx)(ml, {})
    : (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)("div", {
            className: Vr,
            children: y.Localize("#wishlist_item_overallreviews"),
          }),
          (0, $.jsx)("div", {
            className: Gr,
            children: (0, $.jsx)(dl, { reviewScore: r }),
          }),
        ],
      });
}
function fh(e) {
  let { appid: t } = e,
    { data: r } = di({ appid: t }),
    n = Li(r);
  return !r || !n
    ? (0, $.jsx)(ml, {})
    : (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)("div", {
            className: Vr,
            children: y.Localize("#wishlist_item_releasedate"),
          }),
          (0, $.jsx)("div", { className: Gr, children: n }),
        ],
      });
}
var Bl = D(Ie(), 1);
var gl = D(Ie()),
  ze = D(G());
var He = D(N());
function Ur(e) {
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
    { isShowingMenu: p, triggerProps: u, menuProps: d, closeMenu: f } = Ko(e),
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
          className: (0, gl.default)(d.className, a),
          navRef: h,
          onCancel: f,
          onFocusWithin: (g) => !g && f(),
          childFocusDisabled: !p,
          children: (0, He.jsx)(tr, { children: c }),
        }),
      ],
    })
  );
}
var vo = D(Ie(), 1),
  K = D(G(), 1);
var j = D(G(), 1);
var hl = "WrZdqiILDmU-";
var bl = "idELaaXmvTo-";
var E = D(N(), 1);
function vl(e) {
  let { menuTarget: t, filters: r, setFilters: n } = e;
  return (0, E.jsx)(Ur, {
    menuTarget: t,
    direction: "down",
    className: hl,
    ignoreHorizontal: !0,
    interactionMode: 1,
    children: (0, E.jsxs)(Vo, {
      "flow-children": "grid",
      children: [
        (0, E.jsx)(gh, {}),
        (0, E.jsx)(hh, { strPlatform: r.strPlatform, setFilters: n }),
        (0, E.jsx)(bh, { rgTypeFilters: r.rgTypeFilters, setFilters: n }),
        (0, E.jsx)(yh, { nMaxPriceStop: r.nMaxPriceStop, setFilters: n }),
        (0, E.jsx)(_h, { strMinDiscount: r.strMinDiscount, setFilters: n }),
        (0, E.jsx)(Dh, {
          bExcludeEarlyAccess: r.bExcludeEarlyAccess,
          bExcludePrerelease: r.bExcludePrerelease,
          bExcludeVR: r.bExcludeVR,
          setFilters: n,
        }),
        (0, E.jsx)(Sh, { rgDeckFilters: r.rgDeckFilters, setFilters: n }),
      ],
    }),
  });
}
function gh(e) {
  let t = fe(),
    r = lc();
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
function hh(e) {
  let { strPlatform: t, setFilters: r } = e,
    n = j.useCallback(
      (o) => {
        let i = on(o.currentTarget.value);
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
function bo(e) {
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
function bh(e) {
  let { rgTypeFilters: t, setFilters: r } = e;
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_type"),
      }),
      (0, E.jsx)(bo, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "games",
        children: y.Localize("#wishlist_controls_options_type_game"),
      }),
      (0, E.jsx)(bo, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "software",
        children: y.Localize("#wishlist_controls_options_type_application"),
      }),
      (0, E.jsx)(bo, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "dlc",
        children: y.Localize("#wishlist_controls_options_type_dlc"),
      }),
    ],
  });
}
function yh(e) {
  let { nMaxPriceStop: t, setFilters: r } = e,
    [n, o] = j.useState(void 0),
    { data: i } = yt(),
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
          (0, E.jsx)(vh, { value: m, priceStop: f }, m),
        ),
      }),
      (0, E.jsx)("label", { htmlFor: c, className: bl, children: Yt(d[u]) }),
    ],
  });
}
function vh(e) {
  let { value: t, priceStop: r } = e;
  return (0, E.jsx)("option", { value: t, label: Yt(r) });
}
function Yt(e) {
  return e === "free"
    ? y.Localize("#wishlist_controls_options_price_free")
    : e === "max"
      ? y.Localize("#wishlist_controls_options_price_any")
      : y.Localize(
          "#wishlist_controls_options_price_max_price",
          e.formatted_amount,
        );
}
function _h(e) {
  let { strMinDiscount: t, setFilters: r } = e,
    n = j.useCallback(
      (o) => {
        let i = sn(o.currentTarget.value);
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
function Dh(e) {
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
function yl(e) {
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
function Sh(e) {
  let { rgDeckFilters: t, setFilters: r } = e;
  return (0, E.jsxs)(Pe, {
    navEntryPreferPosition: 3,
    children: [
      (0, E.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_deck"),
      }),
      (0, E.jsx)(yl, {
        deckFilter: "verified",
        rgDeckFilters: t,
        setFilters: r,
        children: y.Localize("#wishlist_controls_options_deck_verified"),
      }),
      (0, E.jsx)(yl, {
        deckFilter: "playable",
        rgDeckFilters: t,
        setFilters: r,
        children: y.Localize("#wishlist_controls_options_deck_playable"),
      }),
    ],
  });
}
var _l = "TU227nj1DiE-";
var Dl = "JqFaNxdHYhs-";
var Sl = "ADJFyRYJvZU-";
var yo = "_1PVYT-GpKSQ-";
var El = "qysDgzabHUo-";
var xl = "QKns7sLqOwg-";
var wl = "-tV92khCNDs-";
var Cl = "ScuzYU4NgQA-";
var Il = "Wh-OfiQaHSM-";
var F = D(N(), 1);
function Pl(e) {
  return K.useState(e);
}
function Nl(e) {
  return K.useState(e);
}
var Rl = K.createContext(void 0);
function Ol(e) {
  let { filters: t, setFilters: r, children: n } = e,
    o = K.useMemo(() => ({ filters: t, setFilters: r }), [t, r]);
  return (0, F.jsx)(Rl.Provider, { value: o, children: n });
}
function zr() {
  let { filters: e, setFilters: t } = K.useContext(Rl);
  return [e, t];
}
function Al(e, t, r, n) {
  let o = je(),
    i = Ne(),
    s = si(),
    { data: a } = yt(),
    c = fe(),
    l = K.useMemo(() => ki(r, a), [r, a]),
    { data: p } = dc(e, cn[t], l),
    { data: u } = tn(we().strLanguage),
    { data: d, isLoading: f } = Ce({
      ...Nh(e, t, l, o, i, c, s),
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
      let g = _o(n),
        _ = Ph(n, u);
      return {
        ...m,
        items: m.items.filter((C) => {
          let w = d.apps[C.appid];
          return w
            ? !!(
                w.name.indexOf(g) !== -1 ||
                (_.size > 0 && w.tagids.some((I) => _.has(I)))
              )
            : !1;
        }),
      };
    }, [n, m, u, d]);
  return n ? { wishlist: h, bLoading: f } : { wishlist: m, bLoading: !1 };
}
function xh(e) {
  let t = (0, F.jsx)(Qe, {
    className: yo,
    children: y.Localize("#wishlist_options_button"),
  });
  return (0, F.jsx)(vl, {
    menuTarget: t,
    filters: e.filters,
    setFilters: e.setFilters,
  });
}
function wh(e) {
  let { option: t, setSelectedSort: r } = e,
    n = K.useCallback(() => r(t), [r, t]);
  return (0, F.jsx)(Qe, {
    focusClassName: (0, vo.default)("test", Cl),
    noFocusRing: !0,
    onClick: n,
    children: (0, F.jsx)(Fl, { option: t }),
  });
}
function Fl(e) {
  let { option: t } = e,
    r = $e(),
    n = `#wishlist_controls_sortby_${t}`;
  return (
    t === "order" && !r && (n = "#wishlist_controls_sortby_their_order"),
    y.Localize(n)
  );
}
function Ch(e) {
  let t = (0, F.jsx)(Qe, {
    className: (0, vo.default)(yo, El),
    children: y.LocalizeReact(
      "#wishlist_sortby_button",
      (0, F.jsx)("span", {
        className: xl,
        children: (0, F.jsx)(Fl, { option: e.selectedSort }),
      }),
    ),
  });
  return (0, F.jsx)(Ur, {
    menuTarget: t,
    direction: "down",
    className: wl,
    interactionMode: 1,
    dismissOnClick: !0,
    children: ir.map((r) =>
      (0, F.jsx)(wh, { option: r, setSelectedSort: e.setSelectedSort }, r),
    ),
  });
}
function Tl(e) {
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
    className: _l,
    children: [
      (0, F.jsx)(Ih, { strTextFilter: i, setTextFilter: s }),
      (0, F.jsxs)("div", {
        className: Sl,
        children: [
          (0, F.jsx)(xh, { filters: t, setFilters: r }),
          (0, F.jsx)(Ch, { selectedSort: n, setSelectedSort: o }),
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
          ? Q(i, Yt("free"))
          : r?.[o].formatted_amount
            ? Q(i, Yt(r[o]))
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
function Ll(e) {
  let { filters: t, setFilters: r } = e,
    { data: n } = yt(),
    { data: o } = tn(we().strLanguage);
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
    className: Il,
    children: e.children,
  });
}
var Ih = K.memo(function (t) {
  let { strTextFilter: r, setTextFilter: n } = t,
    o = K.useCallback(
      (i) => {
        n(i.currentTarget.value);
      },
      [n],
    );
  return (0, F.jsx)(Mo, {
    className: Dl,
    value: r,
    onChange: o,
    placeholder: y.Localize("#wishlist_search"),
  });
});
function _o(e) {
  return e.toLocaleLowerCase();
}
function Ph(e, t) {
  let r = new Set();
  for (let n in t) _o(t[n]).indexOf(e) !== -1 && r.add(parseInt(n));
  return r;
}
function Nh(e, t, r, n, o, i, s) {
  let a = cn[t],
    { dataLoader: c, storeBrowseContext: l, cacheStoreItemData: p } = s;
  return {
    queryKey: ["WishlistAppData", e, a, r],
    queryFn: async () => {
      let u = await n.fetchQuery(mo(o, l, e, po(i, p), a, r)),
        d = {};
      return (
        await Promise.all(
          u.items.map(({ appid: f }) =>
            Promise.all([
              n.fetchQuery(mi(c, { appid: f })),
              n.fetchQuery(fi(c, { appid: f })),
            ]).then(([m, h]) => {
              d[f] = {
                name: _o(m.name || ""),
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
var Fe = D(N(), 1);
function Wl(e) {
  let { wishlistItem: t } = e,
    { data: r } = De(t);
  return (0, Fe.jsxs)("div", {
    className: (0, Bl.default)(ct, Kc),
    children: [
      r?.is_early_access && (0, Fe.jsx)(Rh, {}),
      (0, Fe.jsx)(Oh, { wishlistItem: t }),
      (0, Fe.jsx)(Fi, { id: t }),
    ],
  });
}
function Rh() {
  return (0, Fe.jsx)("span", {
    className: Qc,
    children: y.Localize("#genre_early_access"),
  });
}
function Oh(e) {
  let { wishlistItem: t } = e,
    [r] = zr();
  return !Uo() && !r.rgDeckFilters.length ? null : (0, Fe.jsx)(Ti, { id: t });
}
var kl = D(Ie(), 1),
  Ml = D(G(), 1);
var Hr = D(N(), 1);
function Vl(e) {
  let { appid: t } = e,
    { data: r } = pi({ appid: t });
  return (0, Hr.jsx)("div", {
    className: Jc,
    children: r?.slice(0, 5).map((n) => (0, Hr.jsx)(Ah, { tag: n }, n.tagid)),
  });
}
function Ah(e) {
  let { tag: t } = e,
    [r, n] = zr(),
    o = t.tagid,
    i = r.rgTagFilters.includes(o),
    s = Ml.useCallback(
      () =>
        n((c) => {
          let { rgTagFilters: l } = c,
            p = i ? l.filter((u) => u != o) : l.concat(o);
          return { ...c, rgTagFilters: p };
        }),
      [n, i, o],
    ),
    a = gi(o, we().strLanguage);
  return (0, Hr.jsx)("button", {
    className: (0, kl.default)(Zc, i && el),
    onClick: s,
    title: y.Localize("#wishlist_controls_tag_description"),
    children: a,
  });
}
var O = D(N(), 1),
  Do = qe.memo(function (t) {
    let {
        wishlistItem: r,
        draggableProvided: n,
        isDragging: o,
        dragHandle: i,
        ...s
      } = t,
      { data: a } = De({ appid: r.appid }),
      c = zt(),
      l = fe(),
      { mutate: p, isPending: u } = vi(c, r.appid);
    return (0, O.jsxs)(Fh, {
      appid: r.appid,
      item: a,
      draggableProvided: n,
      isDragging: o,
      isRemoving: u,
      ...s,
      children: [
        i,
        (0, O.jsx)(ol, { appid: r.appid }),
        (0, O.jsxs)("div", {
          className: Uc,
          children: [
            (0, O.jsxs)("div", {
              className: zc,
              children: [
                (0, O.jsx)(nl, { appid: r.appid, item: a }),
                l && (0, O.jsx)(Gl, { wishlistItem: r, removeItem: p }),
              ],
            }),
            (0, O.jsx)(Lh, { appid: r.appid, item: a }),
            !l && (0, O.jsx)(Bh, { wishlistItem: r, removeItem: p }),
          ],
        }),
      ],
    });
  });
function Fh(e) {
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
    l = (0, Kt.default)(Fc, r && !r.visible && Tc, o && Bc, i && Wc, c && Mr),
    p = Th(t, o, a),
    u = n?.draggableProps.style,
    d =
      o && a.bIsGamepadDragClone && u
        ? { ...u, transform: (u.transform ?? "") + " scale( 1.04 )" }
        : u;
  return (0, O.jsx)(To, {
    feature: "wishlist-capsule",
    children: (0, O.jsx)(Di, {
      appID: t,
      children: (0, O.jsx)(Ei, {
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
function Th(e, t, r) {
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
function Lh(e) {
  let { appid: t, item: r } = e;
  if (r && !r.visible) {
    let n = y.Localize("#wishlist_item_unavailable_retired");
    return (
      r.unvailable_for_country_restriction &&
        (n = y.Localize("#wishlist_item_unavailable_region")),
      (0, O.jsx)("div", {
        className: (0, Kt.default)(ct, go),
        children: (0, O.jsx)("div", { className: qc, children: n }),
      })
    );
  } else
    return (0, O.jsxs)("div", {
      className: (0, Kt.default)(ct, go),
      children: [
        (0, O.jsx)(fl, { appid: t }),
        (0, O.jsx)("div", {
          className: Yc,
          children: (0, O.jsx)(Wh, { appid: t }),
        }),
      ],
    });
}
function Bh(e) {
  let { wishlistItem: t, removeItem: r } = e;
  return (0, O.jsxs)(O.Fragment, {
    children: [
      (0, O.jsx)(Wl, { wishlistItem: t }),
      (0, O.jsxs)("div", {
        className: (0, Kt.default)(ct, Xc),
        children: [
          (0, O.jsx)(Vl, { appid: t.appid }),
          (0, O.jsx)(Gl, { wishlistItem: t, removeItem: r }),
        ],
      }),
    ],
  });
}
function Wh(e) {
  let { appid: t } = e,
    { data: r } = De({ appid: t }),
    { data: n } = ai({ appid: t });
  return n
    ? (0, O.jsxs)("div", {
        className: ho,
        children: [
          (0, O.jsx)(_i, { purchaseOption: n, transparentBackground: !0 }),
          (0, O.jsx)(Cc, { purchaseOption: n }),
        ],
      })
    : r?.is_free && !r.is_coming_soon
      ? (0, O.jsx)("div", {
          className: ho,
          children: (0, O.jsx)(kr, { itemid: { appid: t } }),
        })
      : null;
}
function Gl(e) {
  let { wishlistItem: t, removeItem: r } = e,
    n = $e(),
    o = qe.useMemo(
      () => new Date(t.date_added * 1e3).toLocaleDateString(Ro()),
      [t.date_added],
    );
  return (0, O.jsxs)("div", {
    className: Hc,
    children: [
      y.Localize("#wishlist_item_addedon_date", o),
      n &&
        (0, O.jsxs)(O.Fragment, {
          children: [
            " ( ",
            (0, O.jsx)(Qe, {
              className: tl,
              onClick: r,
              children: y.Localize("#wishlist_item_remove"),
            }),
            " )",
          ],
        }),
    ],
  });
}
var $l = "oI5QPBYWG8c-";
var Ul = "iiFX76jX8MI-";
var zl = "tcByxp5r-As-";
var Hl = "OVtmn7mzw0o-";
var ql = "jfAmlCmNzHQ-";
var jl = "_0tyA9oW-HwA-";
var qr = "cy7Yf-ZR9xQ-";
var Z = D(N(), 1),
  kh = parseInt(Pc),
  Mh = parseInt(Nc),
  Vh = parseInt(Rc),
  Gh = parseInt(Oc);
function Kl(e) {
  let { wishlist: t, loading: r, bEnableDragDrop: n } = e,
    o = k.useCallback((i) => (0, Z.jsx)(Do, { wishlistItem: t.items[i] }), [t]);
  return n
    ? (0, Z.jsx)($h, { loading: r, wishlist: t })
    : (0, Z.jsx)(Ql, { loading: r, nRows: t.items.length || 0, fnRender: o });
}
var Ql = k.forwardRef(function (t, r) {
  let { loading: n, nRows: o, fnRender: i, ...s } = t,
    a = fe(),
    c = a ? Vh + Gh : kh + Mh,
    l = a ? 30 : 10,
    p = k.useRef(),
    u = k.useCallback((d) => {
      p.current && clearTimeout(p.current),
        (p.current = setTimeout(() => {
          history.replaceState({ ...(history.state ?? {}), scrollY: d }, "");
        }, 100));
    }, []);
  return (0, Z.jsx)(xi, {
    className: (0, So.default)(Ul, n && zl),
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
function $h(e) {
  let { loading: t } = e,
    [r, n] = Uh(!t, e.wishlist),
    o = fe(),
    {
      useGamepadSensor: i,
      gamepadStartDrag: s,
      onButtonDown: a,
      refCloneContainer: c,
      navRefDraggable: l,
      fnEndGamepadDrag: p,
      bInGamepadDrag: u,
    } = Hh(),
    d = k.useCallback(
      (g) => {
        p(), g.destination && r(g.source.index, g.destination.index);
      },
      [p, r],
    ),
    f = k.useCallback(
      (g, _, S, C = !1) => {
        let w = (0, Z.jsx)(yc, {
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
        return (0, Z.jsx)(Do, {
          wishlistItem: n.items[S.source.index],
          draggableProvided: g,
          isDragging: _.isDragging,
          dragHandle: w,
          ...I,
        });
      },
      [n, r, s, l],
    ),
    m = k.useCallback(
      (g) => {
        let _ = n.items[g];
        return (0, Z.jsx)("div", {
          className: (0, So.default)(Ac, o && Mr),
          children: (0, Z.jsx)(rc, {
            draggableId: `WishlistItem-${_.appid}-${g}`,
            index: g,
            children: f,
          }),
        });
      },
      [n, o, f],
    ),
    h = k.useCallback(
      (g, _, S) =>
        (0, Z.jsx)(zh, {
          onButtonDown: a,
          navRef: c,
          children: f(g, _, S, !0),
        }),
      [f, a, c],
    );
  return (0, Z.jsx)(Qa, {
    onDragEnd: d,
    sensors: [i],
    children: (0, Z.jsx)(ac, {
      droppableId: "droppable",
      renderClone: u ? h : f,
      mode: "virtual",
      children: (g, _) =>
        (0, Z.jsx)(Ql, {
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
function Uh(e, t) {
  let r = je(),
    [n, o] = k.useState(void 0),
    i = k.useMemo(() => (n ? { ...t, items: n } : t), [t, n]),
    { mutate: s } = er({
      async mutationFn([c, l]) {
        let p = l.map((d) => ({ appid: c[d].appid, priority: c[d].priority })),
          u = await wi(p);
        if (u?.result != 1) throw `Error updating wishlist data: ${u?.result}`;
        return !0;
      },
      onMutate([c]) {
        pc(r, t.steamid, c);
      },
      onError() {
        fc(r, t.steamid);
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
        let { rgNewItems: p, rgChangedIndicies: u } = Ci(i.items, c, l);
        o(p), s([p, u], { onSettled: () => o(void 0) });
      },
      [e, i, s],
    ),
    i,
  ];
}
function zh(e) {
  let { onButtonDown: t, navRef: r, children: n } = e;
  return (0, Z.jsx)(tr, {
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
function Hh() {
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
var xo = D(Ie(), 1);
var Eo = "bFz2fxg5qDY-";
var Xl = "v0rte85hBgA-";
var Jl = "mMC3clyeve4-";
var Zl = "oRgdZRX3fBo-";
var eu = "wA5EFNQ7hrU-";
var ve = D(N(), 1);
function jh(e) {
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
function Yh() {
  let { data: e } = ri();
  return e
    ? (0, ve.jsxs)(ht, {
        snr: !0,
        external: !0,
        to: H.STORE_BASE_URL + "cart",
        className: (0, xo.default)(Eo, Xl),
        children: [
          (0, ve.jsx)(jh, { className: Zl }),
          y.Localize("#cart_count", Zr(e)),
        ],
      })
    : null;
}
function Kh() {
  let { data: e } = bt(gt.steamid);
  return e
    ? (0, ve.jsx)(ht, {
        snr: !0,
        external: !0,
        to: H.STORE_BASE_URL + "wishlist",
        className: (0, xo.default)(Eo, Jl),
        children: y.Localize("#wishlist_count", Zr(e)),
      })
    : null;
}
function tu() {
  return gt.logged_in
    ? (0, ve.jsxs)("div", {
        className: eu,
        children: [(0, ve.jsx)(Kh, {}), (0, ve.jsx)(Yh, {})],
      })
    : null;
}
var A = D(N(), 1),
  Qh = $o({ Component: Xh, TemplateConfig: { bVirtualizedScrolling: !0 } });
function Xh() {
  let {
    error: e,
    steamid: t,
    sort: r,
    filters: n,
    bUseV7Menu: o,
  } = Qh.useLoaderData();
  return (0, A.jsx)(Jh, {
    error: e,
    steamid: t,
    sort: r,
    filters: n,
    bUseV7Menu: o,
  });
}
function Jh(e) {
  let { error: t, steamid: r, sort: n, filters: o, bUseV7Menu: i } = e;
  return (0, A.jsx)(cc, {
    steamid: r ?? "0",
    children: (0, A.jsxs)("div", {
      className: $l,
      children: [
        !i && (0, A.jsx)(tu, {}),
        (0, A.jsx)(eb, { steamid: r }),
        t || !r
          ? (0, A.jsx)(ji, { error: t || "ProfileNotFound" })
          : (0, A.jsx)(Lo, {
              children: (0, A.jsx)(Zh, { steamid: r, sort: n, filters: o }),
            }),
      ],
    }),
  });
}
function Zh(e) {
  let { steamid: t } = e,
    [r, n] = Pl(e.filters),
    [o, i] = Nl(e.sort),
    [s, a] = (0, Te.useState)(""),
    { data: c } = bt(t);
  return (
    ib(i, n, a),
    sb(t, o, r),
    c === 0
      ? (0, A.jsx)(nb, {})
      : (0, A.jsxs)(Ol, {
          filters: r,
          setFilters: n,
          children: [
            (0, A.jsx)(Tl, {
              filters: r,
              setFilters: n,
              sort: o,
              setSort: i,
              strTextFilter: s,
              setTextFilter: a,
            }),
            (0, A.jsx)("hr", { className: jl }),
            (0, A.jsx)(Ll, { filters: r, setFilters: n }),
            (0, A.jsx)(rb, { sort: o, filters: r, strTextFilter: s }),
          ],
        })
  );
}
function eb(e) {
  let { steamid: t } = e,
    r = rn(t);
  return r.data
    ? (0, A.jsxs)("div", {
        className: ql,
        children: [
          (0, A.jsx)(Yo, {
            playerLinkDetails: r.data,
            statusPosition: "border",
            alt: "",
            role: "presentation",
            size: "FillArea",
            className: Hl,
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
function tb(e, t, r) {
  let n = $e(),
    o = Wi(t) && !r;
  return n && o && e == "order";
}
function rb(e) {
  let { sort: t, filters: r, strTextFilter: n } = e,
    o = zt(),
    { wishlist: i, bLoading: s } = Al(o, t, r, n),
    a = (0, Te.useRef)(i),
    c = tb(t, r, n),
    l = i || a.current;
  if (!l) return null;
  a.current = l;
  let p = !i || s;
  return l.items.length == 0
    ? (0, A.jsx)(ob, {})
    : (0, A.jsx)(Kl, { wishlist: l, loading: p, bEnableDragDrop: c && !p });
}
function nb() {
  return $e()
    ? (0, A.jsx)("div", {
        className: qr,
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
        className: qr,
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
function ob() {
  let e = zt(),
    { data: t } = bt(e);
  return (0, A.jsx)("div", {
    className: qr,
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
function ib(e, t, r) {
  (0, Te.useEffect)(() => {
    if (location.hash) {
      let n = new URLSearchParams(location.hash.slice(1));
      if (n.has("sort")) {
        let s = n.get("sort");
        Gi(s) && e(an[s]);
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
        let s = Mi(o, void 0);
        t(s);
      }
    }
  }, [e, t, r]);
}
function sb(e, t, r) {
  let { data: n } = rn(e),
    o = (0, Te.useRef)(void 0),
    i;
  n?.public_data?.profile_url
    ? (i = nn(`/wishlist/id/${n.public_data.profile_url}/`))
    : n?.public_data?.steamid &&
      (i = nn(`/wishlist/profiles/${n.public_data.steamid}/`)),
    (0, Te.useEffect)(() => {
      if (!i) return;
      let { protocol: s, hostname: a, search: c } = window.location,
        l = new URL(`${s}//${a}${i}`),
        p = new URLSearchParams(c);
      t && t != ir[0] && l.searchParams.append("sort", t);
      let u = Vi(r);
      for (let d of Object.keys(u)) u[d] && l.searchParams.append(d, u[d]);
      o.current !== void 0 &&
        o.current !== l.searchParams.toString() &&
        Hi(t, u),
        (o.current = l.searchParams.toString()),
        p.has("cc") && l.searchParams.append("cc", p.get("cc")),
        history.replaceState(history.state, "", l);
    }, [i, t, r]);
}
export { Qh as route };
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

const CLSTAMP = 9598355;

import { a as un, b as yn } from "./chunk-TMKEMOG3.js";
import {
  b as Ss,
  c as dn,
  d as pn,
  e as mn,
  f as fn,
  h as hn,
  i as vn,
} from "./chunk-X36R5N4E.js";
import "./chunk-QI3YEDEP.js";
import "./chunk-WBOOEVJJ.js";
import { b as gn, c as _n, d as bn } from "./chunk-R7W7NKJC.js";
import { a as tn, k as rn } from "./chunk-JDO7HNFE.js";
import { c as an } from "./chunk-I5P7XC3X.js";
import { a as Fo, c as zo, e as nn } from "./chunk-A2PRZ7X2.js";
import { a as No } from "./chunk-MSQ5TJT7.js";
import {
  A as Ho,
  f as Io,
  g as wo,
  h as Po,
  k as To,
  o as Mo,
  p as Go,
  y as Lo,
  z as ko,
} from "./chunk-VDFBB5QF.js";
import "./chunk-XIZPEQIU.js";
import { b as Et, d as Bo, e as on } from "./chunk-SOS72HVP.js";
import { i as Oo } from "./chunk-2EXHVSCL.js";
import "./chunk-Q6BLM6LR.js";
import {
  A as De,
  d as Vo,
  e as jo,
  g as br,
  h as Uo,
  i as qo,
  k as Oe,
  m as $o,
  o as Qo,
  p as Ko,
  q as Yo,
  r as Xo,
  s as Jo,
  w as Zo,
  z as en,
} from "./chunk-LUDE7UI3.js";
import "./chunk-CLJLRWDQ.js";
import {
  A as go,
  D as _o,
  E as bo,
  G as Ie,
  H as xo,
  I as Do,
  J as Eo,
  a as Uu,
  b as A,
  c as T,
  d as Q,
  e as K,
  f as Y,
  g as X,
  h as J,
  i as Z,
  r as bs,
  t as xe,
  u as $e,
  x as ys,
  y as vs,
  z as Cs,
} from "./chunk-RG74SZKD.js";
import "./chunk-L3CD5JXR.js";
import { a as co } from "./chunk-FKBHXF3F.js";
import { a as ho } from "./chunk-AVTVEOGQ.js";
import {
  a as _r,
  b as qu,
  d as Ae,
  e as yr,
  g as sn,
  k as b,
} from "./chunk-N66JXOTC.js";
import {
  A as vo,
  C as ae,
  D as He,
  E as Co,
  F as So,
  H as ct,
  y as lt,
} from "./chunk-XCCLP6QA.js";
import { a as ke } from "./chunk-667HSWGZ.js";
import { b as Ao } from "./chunk-TRM4CV6N.js";
import { b as yo } from "./chunk-GW7ACP5Y.js";
import { c as Ro } from "./chunk-NKKAQ2TM.js";
import "./chunk-6QXOH4QT.js";
import "./chunk-VNJLWCEK.js";
import "./chunk-LI3EY6TN.js";
import { a as Ws, c as ln, d as cn } from "./chunk-DO2UT7EO.js";
import { a as Wo } from "./chunk-ZZKST2S4.js";
import { c as _s, g as Ge } from "./chunk-VYVGNWSX.js";
import "./chunk-LTCM4FBG.js";
import { e as lo } from "./chunk-NCBAOU5T.js";
import {
  b as Le,
  d as be,
  f as nt,
  g as uo,
  h as at,
  m as po,
  u as mo,
  y as fo,
} from "./chunk-A7W4HGSY.js";
import {
  g as ao,
  h as xt,
  i as gr,
  j as te,
  k as Dt,
  m as E,
} from "./chunk-DNKCKFVA.js";
import { a as j } from "./chunk-OZ6CSMNN.js";
import { b as hr, d as y } from "./chunk-XL5OQFLS.js";
var Vn = hr((zn) => {
  "use strict";
  var Wr = j(),
    sd = No();
  function id(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var od = typeof Object.is == "function" ? Object.is : id,
    nd = sd.useSyncExternalStore,
    ad = Wr.useRef,
    ld = Wr.useEffect,
    cd = Wr.useMemo,
    ud = Wr.useDebugValue;
  zn.useSyncExternalStoreWithSelector = function (e, t, r, s, i) {
    var o = ad(null);
    if (o.current === null) {
      var n = { hasValue: !1, value: null };
      o.current = n;
    } else n = o.current;
    o = cd(
      function () {
        function l(m) {
          if (!c) {
            if (((c = !0), (p = m), (m = s(m)), i !== void 0 && n.hasValue)) {
              var f = n.value;
              if (i(f, m)) return (u = f);
            }
            return (u = m);
          }
          if (((f = u), od(p, m))) return f;
          var g = s(m);
          return i !== void 0 && i(f, g) ? f : ((p = m), (u = g));
        }
        var c = !1,
          p,
          u,
          d = r === void 0 ? null : r;
        return [
          function () {
            return l(t());
          },
          d === null
            ? void 0
            : function () {
                return l(d());
              },
        ];
      },
      [t, r, s, i],
    );
    var a = nd(e, o[0], o[1]);
    return (
      ld(
        function () {
          (n.hasValue = !0), (n.value = a);
        },
        [a],
      ),
      ud(a),
      a
    );
  };
});
var Un = hr((kb, jn) => {
  "use strict";
  jn.exports = Vn();
});
var Zn = hr((G) => {
  "use strict";
  var Xs = Symbol.for("react.element"),
    Js = Symbol.for("react.portal"),
    Ir = Symbol.for("react.fragment"),
    wr = Symbol.for("react.strict_mode"),
    Pr = Symbol.for("react.profiler"),
    xr = Symbol.for("react.provider"),
    Dr = Symbol.for("react.context"),
    _d = Symbol.for("react.server_context"),
    Er = Symbol.for("react.forward_ref"),
    Br = Symbol.for("react.suspense"),
    Fr = Symbol.for("react.suspense_list"),
    Nr = Symbol.for("react.memo"),
    Or = Symbol.for("react.lazy"),
    bd = Symbol.for("react.offscreen"),
    Jn;
  Jn = Symbol.for("react.module.reference");
  function ye(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Xs:
          switch (((e = e.type), e)) {
            case Ir:
            case Pr:
            case wr:
            case Br:
            case Fr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case _d:
                case Dr:
                case Er:
                case Or:
                case Nr:
                case xr:
                  return e;
                default:
                  return t;
              }
          }
        case Js:
          return t;
      }
    }
  }
  G.ContextConsumer = Dr;
  G.ContextProvider = xr;
  G.Element = Xs;
  G.ForwardRef = Er;
  G.Fragment = Ir;
  G.Lazy = Or;
  G.Memo = Nr;
  G.Portal = Js;
  G.Profiler = Pr;
  G.StrictMode = wr;
  G.Suspense = Br;
  G.SuspenseList = Fr;
  G.isAsyncMode = function () {
    return !1;
  };
  G.isConcurrentMode = function () {
    return !1;
  };
  G.isContextConsumer = function (e) {
    return ye(e) === Dr;
  };
  G.isContextProvider = function (e) {
    return ye(e) === xr;
  };
  G.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xs;
  };
  G.isForwardRef = function (e) {
    return ye(e) === Er;
  };
  G.isFragment = function (e) {
    return ye(e) === Ir;
  };
  G.isLazy = function (e) {
    return ye(e) === Or;
  };
  G.isMemo = function (e) {
    return ye(e) === Nr;
  };
  G.isPortal = function (e) {
    return ye(e) === Js;
  };
  G.isProfiler = function (e) {
    return ye(e) === Pr;
  };
  G.isStrictMode = function (e) {
    return ye(e) === wr;
  };
  G.isSuspense = function (e) {
    return ye(e) === Br;
  };
  G.isSuspenseList = function (e) {
    return ye(e) === Fr;
  };
  G.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Ir ||
      e === Pr ||
      e === wr ||
      e === Br ||
      e === Fr ||
      e === bd ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Or ||
          e.$$typeof === Nr ||
          e.$$typeof === xr ||
          e.$$typeof === Dr ||
          e.$$typeof === Er ||
          e.$$typeof === Jn ||
          e.getModuleId !== void 0))
    );
  };
  G.typeOf = ye;
});
var ta = hr((Jb, ea) => {
  "use strict";
  ea.exports = Zn();
});
var qe = y(j(), 1);
function Cn(e) {
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
function Rs(e) {
  return e == "mac" || e == "linux" ? e : "all";
}
function Is(e) {
  return e == "any" || e == "50" || e == "75" ? e : "";
}
function $u(e, t) {
  if (e === "free") return e;
  if (e && e.length) {
    uo(t, "cannot EnsureValidPriceStop without rgPriceStops data");
    let r = parseInt(e);
    if ((r || e === "0") && (!t || r < t.length)) return r;
  }
  return "none";
}
function Qu(e) {
  if (e == "games" || e == "software" || e == "dlc") return e;
}
function Ku(e) {
  if (e == "verified" || e == "playable") return e;
}
function Sn(e, t) {
  let r = {};
  return (
    e.strPlatform == "mac"
      ? (r.macos_only = !0)
      : e.strPlatform == "linux"
        ? (r.steamos_linux_only = !0)
        : e.strPlatform != "all" &&
          at(e.strPlatform, `Unhandled platform value: ${e.strPlatform}`),
    e.rgTypeFilters.forEach((s) => {
      s == "games"
        ? (r.only_games = !0)
        : s == "software"
          ? (r.only_software = !0)
          : s == "dlc"
            ? (r.only_dlc = !0)
            : at(s, `Unhandled type filter: ${s}`);
    }),
    e.strMinDiscount == "any"
      ? (r.min_discount_percent = 1)
      : e.strMinDiscount == "50"
        ? (r.min_discount_percent = 50)
        : e.strMinDiscount == "75"
          ? (r.min_discount_percent = 75)
          : e.strMinDiscount != "" &&
            at(
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
      e.rgDeckFilters.forEach((s) => {
        s == "verified"
          ? (r.steam_deck_filters.include_verified = !0)
          : s == "playable" && (r.steam_deck_filters.include_playable = !0);
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
function Wn(e, t) {
  return {
    strPlatform: Rs(e.platform),
    strMinDiscount: Is(e.min_discount),
    nMaxPriceStop: $u(e.max_price, t),
    rgTypeFilters: vr(e.type_filters, Qu),
    bExcludeEarlyAccess: e.exclude_early_access == "1",
    bExcludePrerelease: e.exclude_prerelease == "1",
    bExcludeVR: e.exclude_vr == "1",
    rgDeckFilters: vr(e.deck_filters, Ku),
    rgTagFilters: vr(e.tagids, (r) => parseInt(r) || void 0),
    rgWishlistNotificationGames: vr(e.wng, (r) => parseInt(r) || void 0),
  };
}
function vr(e, t) {
  return (
    e
      ?.split(/,/)
      .map(t)
      .filter((r) => r !== void 0) || []
  );
}
function Rn(e) {
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
var R = y(Uu());
var B = R.Message;
var Cr = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              steamid: {
                n: 1,
                br: A.readFixed64String,
                bw: T.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Request";
    }
  },
  ws = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || Z(e.M()),
        B.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Ps, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response";
    }
  },
  Ps = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: A.readUint32, bw: T.writeUint32 },
              priority: { n: 2, br: A.readUint32, bw: T.writeUint32 },
              date_added: { n: 3, br: A.readUint32, bw: T.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response_WishlistItem";
    }
  },
  xs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: A.readUint32, bw: T.writeUint32 },
              navdata: { n: 2, c: To },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Request";
    }
  },
  Ds = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              wishlist_count: { n: 1, br: A.readUint32, bw: T.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Response";
    }
  },
  Bt = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { appid: { n: 1, br: A.readUint32, bw: T.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Request";
    }
  },
  Es = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              wishlist_count: { n: 1, br: A.readUint32, bw: T.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Response";
    }
  },
  Bs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              steamid: {
                n: 1,
                br: A.readFixed64String,
                bw: T.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Request";
    }
  },
  Fs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.count || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { count: { n: 1, br: A.readUint32, bw: T.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Response";
    }
  },
  Ns = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: Cs }, data_request: { n: 2, c: vs } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Request";
    }
  },
  Os = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || Z(e.M()),
        B.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: As, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response";
    }
  },
  As = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: A.readUint32, bw: T.writeUint32 },
              store_item: { n: 2, c: ys },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response_WishlistItem";
    }
  },
  Ft = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.macos_only || Z(e.M()),
        B.initialize(this, t, 0, -1, [24], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              macos_only: { n: 1, br: A.readBool, bw: T.writeBool },
              steamos_linux_only: { n: 2, br: A.readBool, bw: T.writeBool },
              only_games: { n: 10, br: A.readBool, bw: T.writeBool },
              only_software: { n: 11, br: A.readBool, bw: T.writeBool },
              only_dlc: { n: 12, br: A.readBool, bw: T.writeBool },
              only_free: { n: 13, br: A.readBool, bw: T.writeBool },
              max_price_in_cents: {
                n: 20,
                br: A.readInt64String,
                bw: T.writeInt64String,
              },
              min_discount_percent: {
                n: 21,
                br: A.readInt32,
                bw: T.writeInt32,
              },
              exclude_types: { n: 22, c: Ts },
              steam_deck_filters: { n: 23, c: Ms },
              tagids_must_match: {
                n: 24,
                r: !0,
                q: !0,
                br: A.readInt32,
                pbr: A.readPackedInt32,
                bw: T.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters";
    }
  },
  Ts = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.exclude_early_access || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              exclude_early_access: { n: 1, br: A.readBool, bw: T.writeBool },
              exclude_coming_soon: { n: 2, br: A.readBool, bw: T.writeBool },
              exclude_vr_only: { n: 3, br: A.readBool, bw: T.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_ExcludeTypeFilters";
    }
  },
  Ms = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_verified || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              include_verified: { n: 1, br: A.readBool, bw: T.writeBool },
              include_playable: { n: 2, br: A.readBool, bw: T.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_SteamDeckFilters";
    }
  },
  Nt = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              steamid: {
                n: 1,
                br: A.readFixed64String,
                bw: T.writeFixed64String,
              },
              context: { n: 2, c: Cs },
              data_request: { n: 3, c: vs },
              sort_order: { n: 4, d: 0, br: A.readEnum, bw: T.writeEnum },
              filters: { n: 5, c: Ft },
              start_index: { n: 6, d: 0, br: A.readInt32, bw: T.writeInt32 },
              page_size: { n: 7, d: 100, br: A.readInt32, bw: T.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Request";
    }
  },
  Gs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || Z(e.M()),
        B.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Ls, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response";
    }
  },
  Ls = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || Z(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: A.readUint32, bw: T.writeUint32 },
              priority: { n: 2, br: A.readUint32, bw: T.writeUint32 },
              date_added: { n: 3, br: A.readUint32, bw: T.writeUint32 },
              store_item: { n: 4, c: ys },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = Q(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return Y(e.M(), t, r);
    }
    static fromObject(t) {
      return K(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return X(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      J(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response_WishlistItem";
    }
  },
  ut;
((n) => {
  function e(a, l) {
    return a.SendMsg("Wishlist.GetWishlist#1", $e(Cr, l), ws, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.GetWishlist = e;
  function t(a, l) {
    return a.SendMsg("Wishlist.AddToWishlist#1", $e(xs, l), Ds, {
      ePrivilege: 1,
    });
  }
  n.AddToWishlist = t;
  function r(a, l) {
    return a.SendMsg("Wishlist.RemoveFromWishlist#1", $e(Bt, l), Es, {
      ePrivilege: 1,
    });
  }
  n.RemoveFromWishlist = r;
  function s(a, l) {
    return a.SendMsg("Wishlist.GetWishlistItemCount#1", $e(Bs, l), Fs, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.GetWishlistItemCount = s;
  function i(a, l) {
    return a.SendMsg("Wishlist.GetWishlistItemsOnSale#1", $e(Ns, l), Os, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  n.GetWishlistItemsOnSale = i;
  function o(a, l) {
    return a.SendMsg("Wishlist.GetWishlistSortedFiltered#1", $e(Nt, l), Gs, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.GetWishlistSortedFiltered = o;
})((ut ||= {}));
var Sr = [
    "order",
    "name",
    "price",
    "discount",
    "dateadded",
    "topsellers",
    "releasedate",
    "reviews",
  ],
  ks = {
    order: "order",
    name: "name",
    price: "price",
    discount: "discount",
    dateadded: "dateadded",
    salesrank: "topsellers",
    releasedate: "releasedate",
    reviewscore: "reviews",
  };
function In(e) {
  return e in ks;
}
var Hs = {
  order: 0,
  name: 1,
  price: 2,
  discount: 3,
  dateadded: 4,
  topsellers: 5,
  releasedate: 6,
  reviews: 7,
};
var zs = {
  name: "wishlistPrefs",
  options: { path: "/wishlist", secure: !0, maxAge: 365 * 24 * 60 * 60 * 1e3 },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
function Vs() {
  try {
    let e = JSON.parse(Io(zs) || "{}");
    return e.filterParams?.wng && delete e.filterParams.wng, e;
  } catch {}
  return {};
}
function wn(e) {
  Object.keys(e).length == 0 ? Po(zs) : wo(zs, JSON.stringify(e));
}
function Pn() {
  return !!Vs().bCompactView;
}
function xn(e) {
  let t = Vs();
  e ? (t.bCompactView = !0) : delete t.bCompactView, wn(t);
}
function Dn(e, t) {
  wn({ ...Vs(), sort: e, filterParams: t });
}
async function Xu(e, t) {
  let r = await ut.GetWishlistItemCount(e, { steamid: t });
  if (!r.BSuccess())
    throw `Error loading wishlist item count: ${r.GetErrorMessage()}`;
  return r.Body().toObject().count;
}
function En(e) {
  return ["wishlistitemcount", e];
}
function Ju(e, t) {
  return {
    queryKey: En(t),
    queryFn: () => Xu(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function Ot(e) {
  let t = Ie();
  return be(Ju(t, e));
}
async function Zu(e, t) {
  let r = xe.Init(Bt);
  r.Body().set_appid(t);
  let s = await ut.RemoveFromWishlist(e, r);
  if (!s.BSuccess()) throw s.GetErrorMessage();
  return s.Body().wishlist_count();
}
function Bn(e, t) {
  let r = Ie(),
    s = Le();
  return nt({
    mutationFn: async () => await Zu(r, t),
    onSuccess(i) {
      s.setQueryData(En(e), () => i);
      let o = (n) => n && { ...n, items: n.items.filter((a) => a.appid != t) };
      s.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, o),
        s.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          o,
        );
    },
  });
}
var Fn = "a20CyZYbgnQ-";
var Qe = y(E(), 1);
function Nn(e) {
  return (0, Qe.jsx)("div", {
    className: Fn,
    children: (0, Qe.jsxs)("div", {
      children: [
        (0, Qe.jsx)("h1", { children: b.Localize("#errorpage_error") }),
        (0, Qe.jsx)("h3", { children: (0, Qe.jsx)(td, { error: e.error }) }),
      ],
    }),
  });
}
function td(e) {
  let { error: t } = e;
  switch (t) {
    case "ProfileNotFound":
      return b.Localize("#wishlist_error_profilenotfound");
    case "WishlistLoadFailed":
      return b.Localize("#wishlist_error_wishlistunavailable");
    case "RateLimit":
      return b.Localize("#Error_RateLimited");
    default:
      return (
        at(t, `Unhandled error code ${t}`),
        b.Localize("#errorpage_unknownerror")
      );
  }
}
var v = y(j()),
  Jt = y(co());
function Ke(e) {
  "@babel/helpers - typeof";
  return (
    (Ke =
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
    Ke(e)
  );
}
function On(e, t) {
  if (Ke(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(e, t || "default");
    if (Ke(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function An(e) {
  var t = On(e, "string");
  return Ke(t) == "symbol" ? t : t + "";
}
function Tn(e, t, r) {
  return (
    (t = An(t)) in e
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
function Mn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t &&
      (s = s.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, s);
  }
  return r;
}
function js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mn(Object(r), !0).forEach(function (s) {
          Tn(e, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mn(Object(r)).forEach(function (s) {
            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
          });
  }
  return e;
}
function ue(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Gn = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Us = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Ln = {
    INIT: "@@redux/INIT" + Us(),
    REPLACE: "@@redux/REPLACE" + Us(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Us();
    },
  };
function rd(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function qs(e, t, r) {
  var s;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ue(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(ue(1));
    return r(qs)(e, t);
  }
  if (typeof e != "function") throw new Error(ue(2));
  var i = e,
    o = t,
    n = [],
    a = n,
    l = !1;
  function c() {
    a === n && (a = n.slice());
  }
  function p() {
    if (l) throw new Error(ue(3));
    return o;
  }
  function u(g) {
    if (typeof g != "function") throw new Error(ue(4));
    if (l) throw new Error(ue(5));
    var h = !0;
    return (
      c(),
      a.push(g),
      function () {
        if (h) {
          if (l) throw new Error(ue(6));
          (h = !1), c();
          var S = a.indexOf(g);
          a.splice(S, 1), (n = null);
        }
      }
    );
  }
  function d(g) {
    if (!rd(g)) throw new Error(ue(7));
    if (typeof g.type > "u") throw new Error(ue(8));
    if (l) throw new Error(ue(9));
    try {
      (l = !0), (o = i(o, g));
    } finally {
      l = !1;
    }
    for (var h = (n = a), C = 0; C < h.length; C++) {
      var S = h[C];
      S();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function") throw new Error(ue(10));
    (i = g), d({ type: Ln.REPLACE });
  }
  function f() {
    var g,
      h = u;
    return (
      (g = {
        subscribe: function (S) {
          if (typeof S != "object" || S === null) throw new Error(ue(11));
          function P() {
            S.next && S.next(p());
          }
          P();
          var w = h(P);
          return { unsubscribe: w };
        },
      }),
      (g[Gn] = function () {
        return this;
      }),
      g
    );
  }
  return (
    d({ type: Ln.INIT }),
    (s = { dispatch: d, subscribe: u, getState: p, replaceReducer: m }),
    (s[Gn] = f),
    s
  );
}
function kn(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function $s(e, t) {
  if (typeof e == "function") return kn(e, t);
  if (typeof e != "object" || e === null) throw new Error(ue(16));
  var r = {};
  for (var s in e) {
    var i = e[s];
    typeof i == "function" && (r[s] = kn(i, t));
  }
  return r;
}
function Qs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (s) {
        return s;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (s, i) {
          return function () {
            return s(i.apply(void 0, arguments));
          };
        });
}
function Hn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (s) {
    return function () {
      var i = s.apply(void 0, arguments),
        o = function () {
          throw new Error(ue(15));
        },
        n = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        a = t.map(function (l) {
          return l(n);
        });
      return (
        (o = Qs.apply(void 0, a)(i.dispatch)),
        js(js({}, i), {}, { dispatch: o })
      );
    };
  };
}
var da = y(No()),
  pa = y(Un());
var Ks = y(co());
function dd(e) {
  e();
}
var qn = dd,
  $n = (e) => (qn = e),
  Qn = () => qn;
var Ys = y(j());
var md = y(j());
var At = y(j()),
  Kn = Symbol.for("react-redux-context"),
  Yn = typeof globalThis < "u" ? globalThis : {};
function pd() {
  var e;
  if (!At.createContext) return {};
  let t = (e = Yn[Kn]) != null ? e : (Yn[Kn] = new Map()),
    r = t.get(At.createContext);
  return r || ((r = At.createContext(null)), t.set(At.createContext, r)), r;
}
var Te = pd();
var Rr = () => {
  throw new Error("uSES not initialized!");
};
var gd = Rr,
  Xn = (e) => {
    gd = e;
  };
var ti = y(qu()),
  L = y(j()),
  la = y(ta());
var vd = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Cd(
  e,
  t,
  r,
  s,
  { areStatesEqual: i, areOwnPropsEqual: o, areStatePropsEqual: n },
) {
  let a = !1,
    l,
    c,
    p,
    u,
    d;
  function m(S, P) {
    return (
      (l = S),
      (c = P),
      (p = e(l, c)),
      (u = t(s, c)),
      (d = r(p, u, c)),
      (a = !0),
      d
    );
  }
  function f() {
    return (
      (p = e(l, c)), t.dependsOnOwnProps && (u = t(s, c)), (d = r(p, u, c)), d
    );
  }
  function g() {
    return (
      e.dependsOnOwnProps && (p = e(l, c)),
      t.dependsOnOwnProps && (u = t(s, c)),
      (d = r(p, u, c)),
      d
    );
  }
  function h() {
    let S = e(l, c),
      P = !n(S, p);
    return (p = S), P && (d = r(p, u, c)), d;
  }
  function C(S, P) {
    let w = !o(P, c),
      x = !i(S, l, P, c);
    return (l = S), (c = P), w && x ? f() : w ? g() : x ? h() : d;
  }
  return function (P, w) {
    return a ? C(P, w) : m(P, w);
  };
}
function Zs(e, t) {
  let {
      initMapStateToProps: r,
      initMapDispatchToProps: s,
      initMergeProps: i,
    } = t,
    o = yr(t, vd),
    n = r(e, o),
    a = s(e, o),
    l = i(e, o);
  return Cd(n, a, l, e, o);
}
function ei(e, t) {
  let r = {};
  for (let s in e) {
    let i = e[s];
    typeof i == "function" && (r[s] = (...o) => t(i(...o)));
  }
  return r;
}
function Tt(e) {
  return function (r) {
    let s = e(r);
    function i() {
      return s;
    }
    return (i.dependsOnOwnProps = !1), i;
  };
}
function ra(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ar(e, t) {
  return function (s, { displayName: i }) {
    let o = function (a, l) {
      return o.dependsOnOwnProps ? o.mapToProps(a, l) : o.mapToProps(a, void 0);
    };
    return (
      (o.dependsOnOwnProps = !0),
      (o.mapToProps = function (a, l) {
        (o.mapToProps = e), (o.dependsOnOwnProps = ra(e));
        let c = o(a, l);
        return (
          typeof c == "function" &&
            ((o.mapToProps = c), (o.dependsOnOwnProps = ra(c)), (c = o(a, l))),
          c
        );
      }),
      o
    );
  };
}
function dt(e, t) {
  return (r, s) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${s.wrappedComponentName}.`,
    );
  };
}
function sa(e) {
  return e && typeof e == "object"
    ? Tt((t) => ei(e, t))
    : e
      ? typeof e == "function"
        ? Ar(e, "mapDispatchToProps")
        : dt(e, "mapDispatchToProps")
      : Tt((t) => ({ dispatch: t }));
}
function ia(e) {
  return e
    ? typeof e == "function"
      ? Ar(e, "mapStateToProps")
      : dt(e, "mapStateToProps")
    : Tt(() => ({}));
}
function Sd(e, t, r) {
  return Ae({}, r, e, t);
}
function Wd(e) {
  return function (r, { displayName: s, areMergedPropsEqual: i }) {
    let o = !1,
      n;
    return function (l, c, p) {
      let u = e(l, c, p);
      return o ? i(u, n) || (n = u) : ((o = !0), (n = u)), n;
    };
  };
}
function oa(e) {
  return e ? (typeof e == "function" ? Wd(e) : dt(e, "mergeProps")) : () => Sd;
}
function Rd() {
  let e = Qn(),
    t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let s = t;
        for (; s; ) s.callback(), (s = s.next);
      });
    },
    get() {
      let s = [],
        i = t;
      for (; i; ) s.push(i), (i = i.next);
      return s;
    },
    subscribe(s) {
      let i = !0,
        o = (r = { callback: s, next: null, prev: r });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (r = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
var na = { notify() {}, get: () => [] };
function Tr(e, t) {
  let r,
    s = na,
    i = 0,
    o = !1;
  function n(g) {
    p();
    let h = s.subscribe(g),
      C = !1;
    return () => {
      C || ((C = !0), h(), u());
    };
  }
  function a() {
    s.notify();
  }
  function l() {
    f.onStateChange && f.onStateChange();
  }
  function c() {
    return o;
  }
  function p() {
    i++, r || ((r = t ? t.addNestedSub(l) : e.subscribe(l)), (s = Rd()));
  }
  function u() {
    i--, r && i === 0 && (r(), (r = void 0), s.clear(), (s = na));
  }
  function d() {
    o || ((o = !0), p());
  }
  function m() {
    o && ((o = !1), u());
  }
  let f = {
    addNestedSub: n,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => s,
  };
  return f;
}
var Mr = y(j()),
  Id =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pt = Id ? Mr.useLayoutEffect : Mr.useEffect;
function aa(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function mt(e, t) {
  if (aa(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  let r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !aa(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var wd = ["reactReduxForwardedRef"],
  ca = Rr,
  ua = (e) => {
    ca = e;
  };
var Pd = [null, null];
function xd(e, t, r) {
  pt(() => e(...t), r);
}
function Dd(e, t, r, s, i, o) {
  (e.current = s), (r.current = !1), i.current && ((i.current = null), o());
}
function Ed(e, t, r, s, i, o, n, a, l, c, p) {
  if (!e) return () => {};
  let u = !1,
    d = null,
    m = () => {
      if (u || !a.current) return;
      let g = t.getState(),
        h,
        C;
      try {
        h = s(g, i.current);
      } catch (S) {
        (C = S), (d = S);
      }
      C || (d = null),
        h === o.current
          ? n.current || c()
          : ((o.current = h), (l.current = h), (n.current = !0), p());
    };
  return (
    (r.onStateChange = m),
    r.trySubscribe(),
    m(),
    () => {
      if (((u = !0), r.tryUnsubscribe(), (r.onStateChange = null), d)) throw d;
    }
  );
}
function Bd(e, t) {
  return e === t;
}
function Fd(
  e,
  t,
  r,
  {
    pure: s,
    areStatesEqual: i = Bd,
    areOwnPropsEqual: o = mt,
    areStatePropsEqual: n = mt,
    areMergedPropsEqual: a = mt,
    forwardRef: l = !1,
    context: c = Te,
  } = {},
) {
  let p = c,
    u = ia(e),
    d = sa(t),
    m = oa(r),
    f = !!e;
  return (h) => {
    let C = h.displayName || h.name || "Component",
      S = `Connect(${C})`,
      P = {
        shouldHandleStateChanges: f,
        displayName: S,
        wrappedComponentName: C,
        WrappedComponent: h,
        initMapStateToProps: u,
        initMapDispatchToProps: d,
        initMergeProps: m,
        areStatesEqual: i,
        areStatePropsEqual: n,
        areOwnPropsEqual: o,
        areMergedPropsEqual: a,
      };
    function w(H) {
      let [k, de, V] = L.useMemo(() => {
          let { reactReduxForwardedRef: Pe } = H,
            Pt = yr(H, wd);
          return [H.context, Pe, Pt];
        }, [H]),
        _e = L.useMemo(
          () =>
            k &&
            k.Consumer &&
            (0, la.isContextConsumer)(L.createElement(k.Consumer, null))
              ? k
              : p,
          [k, p],
        ),
        $ = L.useContext(_e),
        Ne = !!H.store && !!H.store.getState && !!H.store.dispatch,
        Rt = !!$ && !!$.store,
        we = Ne ? H.store : $.store,
        mr = Rt ? $.getServerState : we.getState,
        ds = L.useMemo(() => Zs(we.dispatch, P), [we]),
        [It, so] = L.useMemo(() => {
          if (!f) return Pd;
          let Pe = Tr(we, Ne ? void 0 : $.subscription),
            Pt = Pe.notifyNestedSubs.bind(Pe);
          return [Pe, Pt];
        }, [we, Ne, $]),
        io = L.useMemo(
          () => (Ne ? $ : Ae({}, $, { subscription: It })),
          [Ne, $, It],
        ),
        ps = L.useRef(),
        ms = L.useRef(V),
        wt = L.useRef(),
        oo = L.useRef(!1),
        eb = L.useRef(!1),
        fs = L.useRef(!1),
        hs = L.useRef();
      pt(
        () => (
          (fs.current = !0),
          () => {
            fs.current = !1;
          }
        ),
        [],
      );
      let no = L.useMemo(
          () => () =>
            wt.current && V === ms.current ? wt.current : ds(we.getState(), V),
          [we, V],
        ),
        ju = L.useMemo(
          () => (Pt) =>
            It ? Ed(f, we, It, ds, ms, ps, oo, fs, wt, so, Pt) : () => {},
          [It],
        );
      xd(Dd, [ms, ps, oo, V, wt, so]);
      let fr;
      try {
        fr = ca(ju, no, mr ? () => ds(mr(), V) : no);
      } catch (Pe) {
        throw (
          (hs.current &&
            (Pe.message += `
The error may be correlated with this previous error:
${hs.current.stack}

`),
          Pe)
        );
      }
      pt(() => {
        (hs.current = void 0), (wt.current = void 0), (ps.current = fr);
      });
      let gs = L.useMemo(
        () => L.createElement(h, Ae({}, fr, { ref: de })),
        [de, h, fr],
      );
      return L.useMemo(
        () => (f ? L.createElement(_e.Provider, { value: io }, gs) : gs),
        [_e, gs, io],
      );
    }
    let D = L.memo(w);
    if (((D.WrappedComponent = h), (D.displayName = w.displayName = S), l)) {
      let k = L.forwardRef(function (V, _e) {
        return L.createElement(D, Ae({}, V, { reactReduxForwardedRef: _e }));
      });
      return (
        (k.displayName = S), (k.WrappedComponent = h), (0, ti.default)(k, h)
      );
    }
    return (0, ti.default)(D, h);
  };
}
var Gr = Fd;
var Mt = y(j());
function Nd({
  store: e,
  context: t,
  children: r,
  serverState: s,
  stabilityCheck: i = "once",
  noopCheck: o = "once",
}) {
  let n = Mt.useMemo(() => {
      let c = Tr(e);
      return {
        store: e,
        subscription: c,
        getServerState: s ? () => s : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, s, i, o]),
    a = Mt.useMemo(() => e.getState(), [e]);
  return (
    pt(() => {
      let { subscription: c } = n;
      return (
        (c.onStateChange = c.notifyNestedSubs),
        c.trySubscribe(),
        a !== e.getState() && c.notifyNestedSubs(),
        () => {
          c.tryUnsubscribe(), (c.onStateChange = void 0);
        }
      );
    }, [n, a]),
    Mt.createElement((t || Te).Provider, { value: n }, r)
  );
}
var ri = Nd;
Xn(pa.useSyncExternalStoreWithSelector);
ua(da.useSyncExternalStore);
$n(Ks.unstable_batchedUpdates);
var Ye = y(j());
function Td(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function ma(e, t) {
  var r = (0, Ye.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    s = (0, Ye.useRef)(!0),
    i = (0, Ye.useRef)(r),
    o = s.current || !!(t && i.current.inputs && Td(t, i.current.inputs)),
    n = o ? i.current : { inputs: t, result: e() };
  return (
    (0, Ye.useEffect)(
      function () {
        (s.current = !1), (i.current = n);
      },
      [n],
    ),
    n.result
  );
}
function Md(e, t) {
  return ma(function () {
    return e;
  }, t);
}
var F = ma,
  I = Md;
var Ce = function (t) {
    var r = t.top,
      s = t.right,
      i = t.bottom,
      o = t.left,
      n = s - o,
      a = i - r,
      l = {
        top: r,
        right: s,
        bottom: i,
        left: o,
        width: n,
        height: a,
        x: o,
        y: r,
        center: { x: (s + o) / 2, y: (i + r) / 2 },
      };
    return l;
  },
  Lr = function (t, r) {
    return {
      top: t.top - r.top,
      left: t.left - r.left,
      bottom: t.bottom + r.bottom,
      right: t.right + r.right,
    };
  },
  fa = function (t, r) {
    return {
      top: t.top + r.top,
      left: t.left + r.left,
      bottom: t.bottom - r.bottom,
      right: t.right - r.right,
    };
  },
  Gd = function (t, r) {
    return {
      top: t.top + r.y,
      left: t.left + r.x,
      bottom: t.bottom + r.y,
      right: t.right + r.x,
    };
  },
  si = { top: 0, right: 0, bottom: 0, left: 0 },
  kr = function (t) {
    var r = t.borderBox,
      s = t.margin,
      i = s === void 0 ? si : s,
      o = t.border,
      n = o === void 0 ? si : o,
      a = t.padding,
      l = a === void 0 ? si : a,
      c = Ce(Lr(r, i)),
      p = Ce(fa(r, n)),
      u = Ce(fa(p, l));
    return {
      marginBox: c,
      borderBox: Ce(r),
      paddingBox: p,
      contentBox: u,
      margin: i,
      border: n,
      padding: l,
    };
  },
  ve = function (t) {
    var r = t.slice(0, -2),
      s = t.slice(-2);
    if (s !== "px") return 0;
    var i = Number(r);
    return isNaN(i) && sn(!1), i;
  },
  Ld = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  Gt = function (t, r) {
    var s = t.borderBox,
      i = t.border,
      o = t.margin,
      n = t.padding,
      a = Gd(s, r);
    return kr({ borderBox: a, border: i, margin: o, padding: n });
  },
  Lt = function (t, r) {
    return r === void 0 && (r = Ld()), Gt(t, r);
  },
  ii = function (t, r) {
    var s = {
        top: ve(r.marginTop),
        right: ve(r.marginRight),
        bottom: ve(r.marginBottom),
        left: ve(r.marginLeft),
      },
      i = {
        top: ve(r.paddingTop),
        right: ve(r.paddingRight),
        bottom: ve(r.paddingBottom),
        left: ve(r.paddingLeft),
      },
      o = {
        top: ve(r.borderTopWidth),
        right: ve(r.borderRightWidth),
        bottom: ve(r.borderBottomWidth),
        left: ve(r.borderLeftWidth),
      };
    return kr({ borderBox: t, margin: s, padding: i, border: o });
  },
  oi = function (t) {
    var r = t.getBoundingClientRect(),
      s = window.getComputedStyle(t);
    return ii(r, s);
  };
var ha =
  Number.isNaN ||
  function (t) {
    return typeof t == "number" && t !== t;
  };
function kd(e, t) {
  return !!(e === t || (ha(e) && ha(t)));
}
function Hd(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!kd(e[r], t[r])) return !1;
  return !0;
}
function ee(e, t) {
  t === void 0 && (t = Hd);
  var r = null;
  function s() {
    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
    if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult;
    var n = e.apply(this, i);
    return (r = { lastResult: n, lastArgs: i, lastThis: this }), n;
  }
  return (
    (s.clear = function () {
      r = null;
    }),
    s
  );
}
var zd = function (t) {
    var r = [],
      s = null,
      i = function () {
        for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++)
          a[l] = arguments[l];
        (r = a),
          !s &&
            (s = requestAnimationFrame(function () {
              (s = null), t.apply(void 0, r);
            }));
      };
    return (
      (i.cancel = function () {
        s && (cancelAnimationFrame(s), (s = null));
      }),
      i
    );
  },
  ft = zd;
var Vd = !0,
  jd = /[ \t]{2,}/g,
  Ud = /^[ \t]*/gm,
  ga = (e) => e.replace(jd, " ").replace(Ud, "").trim(),
  qd = (e) =>
    ga(`
  %c@hello-pangea/dnd

  %c${ga(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`),
  $d = (e) => [
    qd(e),
    "color: #00C584; font-size: 1.2em; font-weight: bold;",
    "line-height: 1.5",
    "color: #723874;",
  ],
  Qd = "__@hello-pangea/dnd-disable-dev-warnings";
function ja(e, t) {
  Vd || (typeof window < "u" && window[Qd]) || console[e](...$d(t));
}
var Ov = ja.bind(null, "warn"),
  Kd = ja.bind(null, "error");
function ze() {}
function Yd(e, t) {
  return { ...e, ...t };
}
function Se(e, t, r) {
  let s = t.map((i) => {
    let o = Yd(r, i.options);
    return (
      e.addEventListener(i.eventName, i.fn, o),
      function () {
        e.removeEventListener(i.eventName, i.fn, o);
      }
    );
  });
  return function () {
    s.forEach((o) => {
      o();
    });
  };
}
var Xd = !0,
  _a = "Invariant failed",
  Ze = class extends Error {};
Ze.prototype.toString = function () {
  return this.message;
};
function _(e, t) {
  if (!e) throw Xd ? new Ze(_a) : new Ze(`${_a}: ${t || ""}`);
}
var gi = class extends v.default.Component {
    constructor(...t) {
      super(...t),
        (this.callbacks = null),
        (this.unbind = ze),
        (this.onWindowError = (r) => {
          let s = this.getCallbacks();
          s.isDragging() && s.tryAbort(),
            r.error instanceof Ze && r.preventDefault();
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
      this.unbind = Se(window, [
        { eventName: "error", fn: this.onWindowError },
      ]);
    }
    componentDidCatch(t) {
      if (t instanceof Ze) {
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
  Jd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Ur = (e) => e + 1,
  Zd = (e) => `
  You have lifted an item in position ${Ur(e.source.index)}
`,
  Ua = (e, t) => {
    let r = e.droppableId === t.droppableId,
      s = Ur(e.index),
      i = Ur(t.index);
    return r
      ? `
      You have moved the item from position ${s}
      to position ${i}
    `
      : `
    You have moved the item from position ${s}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${i}
  `;
  },
  qa = (e, t, r) =>
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
  ep = (e) => {
    let t = e.destination;
    if (t) return Ua(e.source, t);
    let r = e.combine;
    return r
      ? qa(e.draggableId, e.source, r)
      : "You are over an area that cannot be dropped on";
  },
  ba = (e) => `
  The item has returned to its starting position
  of ${Ur(e.index)}
`,
  tp = (e) => {
    if (e.reason === "CANCEL")
      return `
      Movement cancelled.
      ${ba(e.source)}
    `;
    let t = e.destination,
      r = e.combine;
    return t
      ? `
      You have dropped the item.
      ${Ua(e.source, t)}
    `
      : r
        ? `
      You have dropped the item.
      ${qa(e.draggableId, e.source, r)}
    `
        : `
    The item has been dropped while not over a drop area.
    ${ba(e.source)}
  `;
  },
  rp = {
    dragHandleUsageInstructions: Jd,
    onDragStart: Zd,
    onDragUpdate: ep,
    onDragEnd: tp,
  },
  jr = rp,
  re = { x: 0, y: 0 },
  ie = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
  pe = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  Ve = (e, t) => e.x === t.x && e.y === t.y,
  bt = (e) => ({ x: e.x !== 0 ? -e.x : 0, y: e.y !== 0 ? -e.y : 0 }),
  et = (e, t, r = 0) => (e === "x" ? { x: t, y: r } : { x: r, y: t }),
  Ut = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
  ya = (e, t) => Math.min(...t.map((r) => Ut(e, r))),
  $a = (e) => (t) => ({ x: e(t.x), y: e(t.y) }),
  sp = (e, t) => {
    let r = Ce({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left),
    });
    return r.width <= 0 || r.height <= 0 ? null : r;
  },
  Zt = (e, t) => ({
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x,
  }),
  va = (e) => [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.left, y: e.bottom },
    { x: e.right, y: e.bottom },
  ],
  ip = { top: 0, right: 0, bottom: 0, left: 0 },
  op = (e, t) => (t ? Zt(e, t.scroll.diff.displacement) : e),
  np = (e, t, r) =>
    r && r.increasedBy
      ? { ...e, [t.end]: e[t.end] + r.increasedBy[t.line] }
      : e,
  ap = (e, t) => (t && t.shouldClipSubject ? sp(t.pageMarginBox, e) : Ce(e)),
  ht = ({ page: e, withPlaceholder: t, axis: r, frame: s }) => {
    let i = op(e.marginBox, s),
      o = np(i, r, t),
      n = ap(o, s);
    return { page: e, withPlaceholder: t, active: n };
  },
  Ri = (e, t) => {
    e.frame || _(!1);
    let r = e.frame,
      s = pe(t, r.scroll.initial),
      i = bt(s),
      o = {
        ...r,
        scroll: {
          initial: r.scroll.initial,
          current: t,
          diff: { value: s, displacement: i },
          max: r.scroll.max,
        },
      },
      n = ht({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: o,
      });
    return { ...e, frame: o, subject: n };
  },
  Qa = ee((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  Ka = ee((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  Qr = ee((e) => Object.values(e)),
  lp = ee((e) => Object.values(e)),
  yt = ee((e, t) =>
    lp(t)
      .filter((s) => e === s.descriptor.droppableId)
      .sort((s, i) => s.descriptor.index - i.descriptor.index),
  );
function Ii(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Kr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Yr = ee((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)),
  cp = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: s,
    previousImpact: i,
  }) => {
    if (!r.isCombineEnabled || !Ii(i)) return null;
    function n(m) {
      let f = {
        type: "COMBINE",
        combine: { draggableId: m, droppableId: r.descriptor.id },
      };
      return { ...i, at: f };
    }
    let a = i.displaced.all,
      l = a.length ? a[0] : null;
    if (e) return l ? n(l) : null;
    let c = Yr(t, s);
    if (!l) {
      if (!c.length) return null;
      let m = c[c.length - 1];
      return n(m.descriptor.id);
    }
    let p = c.findIndex((m) => m.descriptor.id === l);
    p === -1 && _(!1);
    let u = p - 1;
    if (u < 0) return null;
    let d = c[u];
    return n(d.descriptor.id);
  },
  vt = (e, t) => e.descriptor.droppableId === t.descriptor.id,
  Ya = { point: re, value: 0 },
  qt = { invisible: {}, visible: {}, all: [] },
  up = { displaced: qt, displacedBy: Ya, at: null },
  dp = up,
  We = (e, t) => (r) => e <= r && r <= t,
  Xa = (e) => {
    let t = We(e.top, e.bottom),
      r = We(e.left, e.right);
    return (s) => {
      if (t(s.top) && t(s.bottom) && r(s.left) && r(s.right)) return !0;
      let o = t(s.top) || t(s.bottom),
        n = r(s.left) || r(s.right);
      if (o && n) return !0;
      let l = s.top < e.top && s.bottom > e.bottom,
        c = s.left < e.left && s.right > e.right;
      return l && c ? !0 : (l && n) || (c && o);
    };
  },
  pp = (e) => {
    let t = We(e.top, e.bottom),
      r = We(e.left, e.right);
    return (s) => t(s.top) && t(s.bottom) && r(s.left) && r(s.right);
  },
  wi = {
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
  Ja = {
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
  mp = (e) => (t) => {
    let r = We(t.top, t.bottom),
      s = We(t.left, t.right);
    return (i) =>
      e === wi ? r(i.top) && r(i.bottom) : s(i.left) && s(i.right);
  },
  fp = (e, t) => {
    let r = t.frame ? t.frame.scroll.diff.displacement : re;
    return Zt(e, r);
  },
  hp = (e, t, r) => (t.subject.active ? r(t.subject.active)(e) : !1),
  gp = (e, t, r) => r(t)(e),
  Pi = ({
    target: e,
    destination: t,
    viewport: r,
    withDroppableDisplacement: s,
    isVisibleThroughFrameFn: i,
  }) => {
    let o = s ? fp(e, t) : e;
    return hp(o, t, i) && gp(o, r, i);
  },
  _p = (e) => Pi({ ...e, isVisibleThroughFrameFn: Xa }),
  Za = (e) => Pi({ ...e, isVisibleThroughFrameFn: pp }),
  bp = (e) => Pi({ ...e, isVisibleThroughFrameFn: mp(e.destination.axis) }),
  yp = (e, t, r) => {
    if (typeof r == "boolean") return r;
    if (!t) return !0;
    let { invisible: s, visible: i } = t;
    if (s[e]) return !1;
    let o = i[e];
    return o ? o.shouldAnimate : !0;
  };
function vp(e, t) {
  let r = e.page.marginBox,
    s = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return Ce(Lr(r, s));
}
function $t({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: s,
  forceShouldAnimate: i,
  last: o,
}) {
  return e.reduce(
    function (a, l) {
      let c = vp(l, r),
        p = l.descriptor.id;
      if (
        (a.all.push(p),
        !_p({
          target: c,
          destination: t,
          viewport: s,
          withDroppableDisplacement: !0,
        }))
      )
        return (a.invisible[l.descriptor.id] = !0), a;
      let d = yp(p, o, i),
        m = { draggableId: p, shouldAnimate: d };
      return (a.visible[p] = m), a;
    },
    { all: [], visible: {}, invisible: {} },
  );
}
function Cp(e, t) {
  if (!e.length) return 0;
  let r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Ca({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: s,
}) {
  let i = Cp(e, { inHomeList: t });
  return {
    displaced: qt,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: { droppableId: s.descriptor.id, index: i },
    },
  };
}
function qr({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: s,
  displacedBy: i,
  last: o,
  index: n,
  forceShouldAnimate: a,
}) {
  let l = vt(e, r);
  if (n == null)
    return Ca({
      insideDestination: t,
      inHomeList: l,
      displacedBy: i,
      destination: r,
    });
  let c = t.find((f) => f.descriptor.index === n);
  if (!c)
    return Ca({
      insideDestination: t,
      inHomeList: l,
      displacedBy: i,
      destination: r,
    });
  let p = Yr(e, t),
    u = t.indexOf(c),
    d = p.slice(u);
  return {
    displaced: $t({
      afterDragging: d,
      destination: r,
      displacedBy: i,
      last: o,
      viewport: s.frame,
      forceShouldAnimate: a,
    }),
    displacedBy: i,
    at: {
      type: "REORDER",
      destination: { droppableId: r.descriptor.id, index: n },
    },
  };
}
function je(e, t) {
  return !!t.effected[e];
}
var Sp = ({
    isMovingForward: e,
    destination: t,
    draggables: r,
    combine: s,
    afterCritical: i,
  }) => {
    if (!t.isCombineEnabled) return null;
    let o = s.draggableId,
      a = r[o].descriptor.index;
    return je(o, i) ? (e ? a : a - 1) : e ? a + 1 : a;
  },
  Wp = ({
    isMovingForward: e,
    isInHomeList: t,
    insideDestination: r,
    location: s,
  }) => {
    if (!r.length) return null;
    let i = s.index,
      o = e ? i + 1 : i - 1,
      n = r[0].descriptor.index,
      a = r[r.length - 1].descriptor.index,
      l = t ? a : a + 1;
    return o < n || o > l ? null : o;
  },
  Rp = ({
    isMovingForward: e,
    isInHomeList: t,
    draggable: r,
    draggables: s,
    destination: i,
    insideDestination: o,
    previousImpact: n,
    viewport: a,
    afterCritical: l,
  }) => {
    let c = n.at;
    if ((c || _(!1), c.type === "REORDER")) {
      let u = Wp({
        isMovingForward: e,
        isInHomeList: t,
        location: c.destination,
        insideDestination: o,
      });
      return u == null
        ? null
        : qr({
            draggable: r,
            insideDestination: o,
            destination: i,
            viewport: a,
            last: n.displaced,
            displacedBy: n.displacedBy,
            index: u,
          });
    }
    let p = Sp({
      isMovingForward: e,
      destination: i,
      displaced: n.displaced,
      draggables: s,
      combine: c.combine,
      afterCritical: l,
    });
    return p == null
      ? null
      : qr({
          draggable: r,
          insideDestination: o,
          destination: i,
          viewport: a,
          last: n.displaced,
          displacedBy: n.displacedBy,
          index: p,
        });
  },
  Ip = ({ displaced: e, afterCritical: t, combineWith: r, displacedBy: s }) => {
    let i = !!(e.visible[r] || e.invisible[r]);
    return je(r, t) ? (i ? re : bt(s.point)) : i ? s.point : re;
  },
  wp = ({ afterCritical: e, impact: t, draggables: r }) => {
    let s = Kr(t);
    s || _(!1);
    let i = s.draggableId,
      o = r[i].page.borderBox.center,
      n = Ip({
        displaced: t.displaced,
        afterCritical: e,
        combineWith: i,
        displacedBy: t.displacedBy,
      });
    return ie(o, n);
  },
  el = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
  Pp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
  xi = (e, t, r) =>
    t[e.crossAxisStart] +
    r.margin[e.crossAxisStart] +
    r.borderBox[e.crossAxisSize] / 2,
  Sa = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    et(e.line, t.marginBox[e.end] + el(e, r), xi(e, t.marginBox, r)),
  Wa = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    et(e.line, t.marginBox[e.start] - Pp(e, r), xi(e, t.marginBox, r)),
  xp = ({ axis: e, moveInto: t, isMoving: r }) =>
    et(e.line, t.contentBox[e.start] + el(e, r), xi(e, t.contentBox, r)),
  Dp = ({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: s,
    afterCritical: i,
  }) => {
    let o = yt(s.descriptor.id, r),
      n = t.page,
      a = s.axis;
    if (!o.length) return xp({ axis: a, moveInto: s.page, isMoving: n });
    let { displaced: l, displacedBy: c } = e,
      p = l.all[0];
    if (p) {
      let d = r[p];
      if (je(p, i)) return Wa({ axis: a, moveRelativeTo: d.page, isMoving: n });
      let m = Gt(d.page, c.point);
      return Wa({ axis: a, moveRelativeTo: m, isMoving: n });
    }
    let u = o[o.length - 1];
    if (u.descriptor.id === t.descriptor.id) return n.borderBox.center;
    if (je(u.descriptor.id, i)) {
      let d = Gt(u.page, bt(i.displacedBy.point));
      return Sa({ axis: a, moveRelativeTo: d, isMoving: n });
    }
    return Sa({ axis: a, moveRelativeTo: u.page, isMoving: n });
  },
  _i = (e, t) => {
    let r = e.frame;
    return r ? ie(t, r.scroll.diff.displacement) : t;
  },
  Ep = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: s,
    afterCritical: i,
  }) => {
    let o = t.page.borderBox.center,
      n = e.at;
    return !r || !n
      ? o
      : n.type === "REORDER"
        ? Dp({
            impact: e,
            draggable: t,
            draggables: s,
            droppable: r,
            afterCritical: i,
          })
        : wp({ impact: e, draggables: s, afterCritical: i });
  },
  Xr = (e) => {
    let t = Ep(e),
      r = e.droppable;
    return r ? _i(r, t) : t;
  },
  tl = (e, t) => {
    let r = pe(t, e.scroll.initial),
      s = bt(r);
    return {
      frame: Ce({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width,
      }),
      scroll: {
        initial: e.scroll.initial,
        max: e.scroll.max,
        current: t,
        diff: { value: r, displacement: s },
      },
    };
  };
function Ra(e, t) {
  return e.map((r) => t[r]);
}
function Bp(e, t) {
  for (let r = 0; r < t.length; r++) {
    let s = t[r].visible[e];
    if (s) return s;
  }
  return null;
}
var Fp = ({
    impact: e,
    viewport: t,
    destination: r,
    draggables: s,
    maxScrollChange: i,
  }) => {
    let o = tl(t, ie(t.scroll.current, i)),
      n = r.frame ? Ri(r, ie(r.frame.scroll.current, i)) : r,
      a = e.displaced,
      l = $t({
        afterDragging: Ra(a.all, s),
        destination: r,
        displacedBy: e.displacedBy,
        viewport: o.frame,
        last: a,
        forceShouldAnimate: !1,
      }),
      c = $t({
        afterDragging: Ra(a.all, s),
        destination: n,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        last: a,
        forceShouldAnimate: !1,
      }),
      p = {},
      u = {},
      d = [a, l, c];
    return (
      a.all.forEach((f) => {
        let g = Bp(f, d);
        if (g) {
          u[f] = g;
          return;
        }
        p[f] = !0;
      }),
      { ...e, displaced: { all: a.all, invisible: p, visible: u } }
    );
  },
  Np = (e, t) => ie(e.scroll.diff.displacement, t),
  Di = ({ pageBorderBoxCenter: e, draggable: t, viewport: r }) => {
    let s = Np(r, e),
      i = pe(s, t.page.borderBox.center);
    return ie(t.client.borderBox.center, i);
  },
  rl = ({
    draggable: e,
    destination: t,
    newPageBorderBoxCenter: r,
    viewport: s,
    withDroppableDisplacement: i,
    onlyOnMainAxis: o = !1,
  }) => {
    let n = pe(r, e.page.borderBox.center),
      l = {
        target: Zt(e.page.borderBox, n),
        destination: t,
        withDroppableDisplacement: i,
        viewport: s,
      };
    return o ? bp(l) : Za(l);
  },
  Op = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    draggables: s,
    previousImpact: i,
    viewport: o,
    previousPageBorderBoxCenter: n,
    previousClientSelection: a,
    afterCritical: l,
  }) => {
    if (!r.isEnabled) return null;
    let c = yt(r.descriptor.id, s),
      p = vt(t, r),
      u =
        cp({
          isMovingForward: e,
          draggable: t,
          destination: r,
          insideDestination: c,
          previousImpact: i,
        }) ||
        Rp({
          isMovingForward: e,
          isInHomeList: p,
          draggable: t,
          draggables: s,
          destination: r,
          insideDestination: c,
          previousImpact: i,
          viewport: o,
          afterCritical: l,
        });
    if (!u) return null;
    let d = Xr({
      impact: u,
      draggable: t,
      droppable: r,
      draggables: s,
      afterCritical: l,
    });
    if (
      rl({
        draggable: t,
        destination: r,
        newPageBorderBoxCenter: d,
        viewport: o.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: Di({
          pageBorderBoxCenter: d,
          draggable: t,
          viewport: o,
        }),
        impact: u,
        scrollJumpRequest: null,
      };
    let f = pe(d, n),
      g = Fp({
        impact: u,
        viewport: o,
        destination: r,
        draggables: s,
        maxScrollChange: f,
      });
    return { clientSelection: a, impact: g, scrollJumpRequest: f };
  },
  le = (e) => {
    let t = e.subject.active;
    return t || _(!1), t;
  },
  Ap = ({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: s,
    viewport: i,
  }) => {
    let o = r.subject.active;
    if (!o) return null;
    let n = r.axis,
      a = We(o[n.start], o[n.end]),
      l = Qr(s)
        .filter((p) => p !== r)
        .filter((p) => p.isEnabled)
        .filter((p) => !!p.subject.active)
        .filter((p) => Xa(i.frame)(le(p)))
        .filter((p) => {
          let u = le(p);
          return e
            ? o[n.crossAxisEnd] < u[n.crossAxisEnd]
            : u[n.crossAxisStart] < o[n.crossAxisStart];
        })
        .filter((p) => {
          let u = le(p),
            d = We(u[n.start], u[n.end]);
          return a(u[n.start]) || a(u[n.end]) || d(o[n.start]) || d(o[n.end]);
        })
        .sort((p, u) => {
          let d = le(p)[n.crossAxisStart],
            m = le(u)[n.crossAxisStart];
          return e ? d - m : m - d;
        })
        .filter(
          (p, u, d) => le(p)[n.crossAxisStart] === le(d[0])[n.crossAxisStart],
        );
    if (!l.length) return null;
    if (l.length === 1) return l[0];
    let c = l.filter((p) => We(le(p)[n.start], le(p)[n.end])(t[n.line]));
    return c.length === 1
      ? c[0]
      : c.length > 1
        ? c.sort((p, u) => le(p)[n.start] - le(u)[n.start])[0]
        : l.sort((p, u) => {
            let d = ya(t, va(le(p))),
              m = ya(t, va(le(u)));
            return d !== m ? d - m : le(p)[n.start] - le(u)[n.start];
          })[0];
  },
  Ia = (e, t) => {
    let r = e.page.borderBox.center;
    return je(e.descriptor.id, t) ? pe(r, t.displacedBy.point) : r;
  },
  Tp = (e, t) => {
    let r = e.page.borderBox;
    return je(e.descriptor.id, t) ? Zt(r, bt(t.displacedBy.point)) : r;
  },
  Mp = ({
    pageBorderBoxCenter: e,
    viewport: t,
    destination: r,
    insideDestination: s,
    afterCritical: i,
  }) =>
    s
      .filter((n) =>
        Za({
          target: Tp(n, i),
          destination: r,
          viewport: t.frame,
          withDroppableDisplacement: !0,
        }),
      )
      .sort((n, a) => {
        let l = Ut(e, _i(r, Ia(n, i))),
          c = Ut(e, _i(r, Ia(a, i)));
        return l < c ? -1 : c < l ? 1 : n.descriptor.index - a.descriptor.index;
      })[0] || null,
  er = ee(function (t, r) {
    let s = r[t.line];
    return { value: s, point: et(t.line, s) };
  }),
  Gp = (e, t, r) => {
    let s = e.axis;
    if (e.descriptor.mode === "virtual") return et(s.line, t[s.line]);
    let i = e.subject.page.contentBox[s.size],
      l =
        yt(e.descriptor.id, r).reduce(
          (c, p) => c + p.client.marginBox[s.size],
          0,
        ) +
        t[s.line] -
        i;
    return l <= 0 ? null : et(s.line, l);
  },
  sl = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
  il = (e, t, r) => {
    let s = e.frame;
    vt(t, e) && _(!1), e.subject.withPlaceholder && _(!1);
    let i = er(e.axis, t.displaceBy).point,
      o = Gp(e, i, r),
      n = {
        placeholderSize: i,
        increasedBy: o,
        oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
      };
    if (!s) {
      let p = ht({
        page: e.subject.page,
        withPlaceholder: n,
        axis: e.axis,
        frame: e.frame,
      });
      return { ...e, subject: p };
    }
    let a = o ? ie(s.scroll.max, o) : s.scroll.max,
      l = sl(s, a),
      c = ht({
        page: e.subject.page,
        withPlaceholder: n,
        axis: e.axis,
        frame: l,
      });
    return { ...e, subject: c, frame: l };
  },
  Lp = (e) => {
    let t = e.subject.withPlaceholder;
    t || _(!1);
    let r = e.frame;
    if (!r) {
      let n = ht({
        page: e.subject.page,
        axis: e.axis,
        frame: null,
        withPlaceholder: null,
      });
      return { ...e, subject: n };
    }
    let s = t.oldFrameMaxScroll;
    s || _(!1);
    let i = sl(r, s),
      o = ht({
        page: e.subject.page,
        axis: e.axis,
        frame: i,
        withPlaceholder: null,
      });
    return { ...e, subject: o, frame: i };
  },
  kp = ({
    previousPageBorderBoxCenter: e,
    moveRelativeTo: t,
    insideDestination: r,
    draggable: s,
    draggables: i,
    destination: o,
    viewport: n,
    afterCritical: a,
  }) => {
    if (!t) {
      if (r.length) return null;
      let u = {
          displaced: qt,
          displacedBy: Ya,
          at: {
            type: "REORDER",
            destination: { droppableId: o.descriptor.id, index: 0 },
          },
        },
        d = Xr({
          impact: u,
          draggable: s,
          droppable: o,
          draggables: i,
          afterCritical: a,
        }),
        m = vt(s, o) ? o : il(o, s, i);
      return rl({
        draggable: s,
        destination: m,
        newPageBorderBoxCenter: d,
        viewport: n.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? u
        : null;
    }
    let l = e[o.axis.line] <= t.page.borderBox.center[o.axis.line],
      c = (() => {
        let u = t.descriptor.index;
        return t.descriptor.id === s.descriptor.id || l ? u : u + 1;
      })(),
      p = er(o.axis, s.displaceBy);
    return qr({
      draggable: s,
      insideDestination: r,
      destination: o,
      viewport: n,
      displacedBy: p,
      last: qt,
      index: c,
    });
  },
  Hp = ({
    isMovingForward: e,
    previousPageBorderBoxCenter: t,
    draggable: r,
    isOver: s,
    draggables: i,
    droppables: o,
    viewport: n,
    afterCritical: a,
  }) => {
    let l = Ap({
      isMovingForward: e,
      pageBorderBoxCenter: t,
      source: s,
      droppables: o,
      viewport: n,
    });
    if (!l) return null;
    let c = yt(l.descriptor.id, i),
      p = Mp({
        pageBorderBoxCenter: t,
        viewport: n,
        destination: l,
        insideDestination: c,
        afterCritical: a,
      }),
      u = kp({
        previousPageBorderBoxCenter: t,
        destination: l,
        draggable: r,
        draggables: i,
        moveRelativeTo: p,
        insideDestination: c,
        viewport: n,
        afterCritical: a,
      });
    if (!u) return null;
    let d = Xr({
      impact: u,
      draggable: r,
      droppable: l,
      draggables: i,
      afterCritical: a,
    });
    return {
      clientSelection: Di({
        pageBorderBoxCenter: d,
        draggable: r,
        viewport: n,
      }),
      impact: u,
      scrollJumpRequest: null,
    };
  },
  me = (e) => {
    let t = e.at;
    return t
      ? t.type === "REORDER"
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  },
  zp = (e, t) => {
    let r = me(e);
    return r ? t[r] : null;
  },
  Vp = ({ state: e, type: t }) => {
    let r = zp(e.impact, e.dimensions.droppables),
      s = !!r,
      i = e.dimensions.droppables[e.critical.droppable.id],
      o = r || i,
      n = o.axis.direction,
      a =
        (n === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
        (n === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
    if (a && !s) return null;
    let l = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
      c = e.dimensions.draggables[e.critical.draggable.id],
      p = e.current.page.borderBoxCenter,
      { draggables: u, droppables: d } = e.dimensions;
    return a
      ? Op({
          isMovingForward: l,
          previousPageBorderBoxCenter: p,
          draggable: c,
          destination: o,
          draggables: u,
          viewport: e.viewport,
          previousClientSelection: e.current.client.selection,
          previousImpact: e.impact,
          afterCritical: e.afterCritical,
        })
      : Hp({
          isMovingForward: l,
          previousPageBorderBoxCenter: p,
          draggable: c,
          isOver: o,
          draggables: u,
          droppables: d,
          viewport: e.viewport,
          afterCritical: e.afterCritical,
        });
  };
function Je(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ol(e) {
  let t = We(e.top, e.bottom),
    r = We(e.left, e.right);
  return function (i) {
    return t(i.y) && r(i.x);
  };
}
function jp(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function Up({ pageBorderBox: e, draggable: t, candidates: r }) {
  let s = t.page.borderBox.center,
    i = r
      .map((o) => {
        let n = o.axis,
          a = et(
            o.axis.line,
            e.center[n.line],
            o.page.borderBox.center[n.crossAxisLine],
          );
        return { id: o.descriptor.id, distance: Ut(s, a) };
      })
      .sort((o, n) => n.distance - o.distance);
  return i[0] ? i[0].id : null;
}
function qp({ pageBorderBox: e, draggable: t, droppables: r }) {
  let s = Qr(r).filter((i) => {
    if (!i.isEnabled) return !1;
    let o = i.subject.active;
    if (!o || !jp(e, o)) return !1;
    if (ol(o)(e.center)) return !0;
    let n = i.axis,
      a = o.center[n.crossAxisLine],
      l = e[n.crossAxisStart],
      c = e[n.crossAxisEnd],
      p = We(o[n.crossAxisStart], o[n.crossAxisEnd]),
      u = p(l),
      d = p(c);
    return !u && !d ? !0 : u ? l < a : c > a;
  });
  return s.length
    ? s.length === 1
      ? s[0].descriptor.id
      : Up({ pageBorderBox: e, draggable: t, candidates: s })
    : null;
}
var nl = (e, t) => Ce(Zt(e, t)),
  $p = (e, t) => {
    let r = e.frame;
    return r ? nl(t, r.scroll.diff.value) : t;
  };
function al({ displaced: e, id: t }) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Qp({ draggable: e, closest: t, inHomeList: r }) {
  return t
    ? r && t.descriptor.index > e.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var Kp = ({
    pageBorderBoxWithDroppableScroll: e,
    draggable: t,
    destination: r,
    insideDestination: s,
    last: i,
    viewport: o,
    afterCritical: n,
  }) => {
    let a = r.axis,
      l = er(r.axis, t.displaceBy),
      c = l.value,
      p = e[a.start],
      u = e[a.end],
      m =
        Yr(t, s).find((g) => {
          let h = g.descriptor.id,
            C = g.page.borderBox.center[a.line],
            S = je(h, n),
            P = al({ displaced: i, id: h });
          return S ? (P ? u <= C : p < C - c) : P ? u <= C + c : p < C;
        }) || null,
      f = Qp({ draggable: t, closest: m, inHomeList: vt(t, r) });
    return qr({
      draggable: t,
      insideDestination: s,
      destination: r,
      viewport: o,
      last: i,
      displacedBy: l,
      index: f,
    });
  },
  Yp = 4,
  Xp = ({
    draggable: e,
    pageBorderBoxWithDroppableScroll: t,
    previousImpact: r,
    destination: s,
    insideDestination: i,
    afterCritical: o,
  }) => {
    if (!s.isCombineEnabled) return null;
    let n = s.axis,
      a = er(s.axis, e.displaceBy),
      l = a.value,
      c = t[n.start],
      p = t[n.end],
      d = Yr(e, i).find((f) => {
        let g = f.descriptor.id,
          h = f.page.borderBox,
          S = h[n.size] / Yp,
          P = je(g, o),
          w = al({ displaced: r.displaced, id: g });
        return P
          ? w
            ? p > h[n.start] + S && p < h[n.end] - S
            : c > h[n.start] - l + S && c < h[n.end] - l - S
          : w
            ? p > h[n.start] + l + S && p < h[n.end] + l - S
            : c > h[n.start] + S && c < h[n.end] - S;
      });
    return d
      ? {
          displacedBy: a,
          displaced: r.displaced,
          at: {
            type: "COMBINE",
            combine: {
              draggableId: d.descriptor.id,
              droppableId: s.descriptor.id,
            },
          },
        }
      : null;
  },
  ll = ({
    pageOffset: e,
    draggable: t,
    draggables: r,
    droppables: s,
    previousImpact: i,
    viewport: o,
    afterCritical: n,
  }) => {
    let a = nl(t.page.borderBox, e),
      l = qp({ pageBorderBox: a, draggable: t, droppables: s });
    if (!l) return dp;
    let c = s[l],
      p = yt(c.descriptor.id, r),
      u = $p(c, a);
    return (
      Xp({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        previousImpact: i,
        destination: c,
        insideDestination: p,
        afterCritical: n,
      }) ||
      Kp({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        destination: c,
        insideDestination: p,
        last: i.displaced,
        viewport: o,
        afterCritical: n,
      })
    );
  },
  Ei = (e, t) => ({ ...e, [t.descriptor.id]: t }),
  Jp = ({ previousImpact: e, impact: t, droppables: r }) => {
    let s = me(e),
      i = me(t);
    if (!s || s === i) return r;
    let o = r[s];
    if (!o.subject.withPlaceholder) return r;
    let n = Lp(o);
    return Ei(r, n);
  },
  Zp = ({
    draggable: e,
    draggables: t,
    droppables: r,
    previousImpact: s,
    impact: i,
  }) => {
    let o = Jp({ previousImpact: s, impact: i, droppables: r }),
      n = me(i);
    if (!n) return o;
    let a = r[n];
    if (vt(e, a) || a.subject.withPlaceholder) return o;
    let l = il(a, e, t);
    return Ei(o, l);
  },
  Vt = ({
    state: e,
    clientSelection: t,
    dimensions: r,
    viewport: s,
    impact: i,
    scrollJumpRequest: o,
  }) => {
    let n = s || e.viewport,
      a = r || e.dimensions,
      l = t || e.current.client.selection,
      c = pe(l, e.initial.client.selection),
      p = {
        offset: c,
        selection: l,
        borderBoxCenter: ie(e.initial.client.borderBoxCenter, c),
      },
      u = {
        selection: ie(p.selection, n.scroll.current),
        borderBoxCenter: ie(p.borderBoxCenter, n.scroll.current),
        offset: ie(p.offset, n.scroll.diff.value),
      },
      d = { client: p, page: u };
    if (e.phase === "COLLECTING")
      return { ...e, dimensions: a, viewport: n, current: d };
    let m = a.draggables[e.critical.draggable.id],
      f =
        i ||
        ll({
          pageOffset: u.offset,
          draggable: m,
          draggables: a.draggables,
          droppables: a.droppables,
          previousImpact: e.impact,
          viewport: n,
          afterCritical: e.afterCritical,
        }),
      g = Zp({
        draggable: m,
        impact: f,
        previousImpact: e.impact,
        draggables: a.draggables,
        droppables: a.droppables,
      });
    return {
      ...e,
      current: d,
      dimensions: { draggables: a.draggables, droppables: g },
      impact: f,
      viewport: n,
      scrollJumpRequest: o || null,
      forceShouldAnimate: o ? !1 : null,
    };
  };
function em(e, t) {
  return e.map((r) => t[r]);
}
var cl = ({
    impact: e,
    viewport: t,
    draggables: r,
    destination: s,
    forceShouldAnimate: i,
  }) => {
    let o = e.displaced,
      n = em(o.all, r),
      a = $t({
        afterDragging: n,
        destination: s,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: i,
        last: o,
      });
    return { ...e, displaced: a };
  },
  ul = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: s,
    viewport: i,
    afterCritical: o,
  }) => {
    let n = Xr({
      impact: e,
      draggable: t,
      draggables: s,
      droppable: r,
      afterCritical: o,
    });
    return Di({ pageBorderBoxCenter: n, draggable: t, viewport: i });
  },
  dl = ({ state: e, dimensions: t, viewport: r }) => {
    e.movementMode !== "SNAP" && _(!1);
    let s = e.impact,
      i = r || e.viewport,
      o = t || e.dimensions,
      { draggables: n, droppables: a } = o,
      l = n[e.critical.draggable.id],
      c = me(s);
    c || _(!1);
    let p = a[c],
      u = cl({ impact: s, viewport: i, destination: p, draggables: n }),
      d = ul({
        impact: u,
        draggable: l,
        droppable: p,
        draggables: n,
        viewport: i,
        afterCritical: e.afterCritical,
      });
    return Vt({
      impact: u,
      clientSelection: d,
      state: e,
      dimensions: o,
      viewport: i,
    });
  },
  tm = (e) => ({ index: e.index, droppableId: e.droppableId }),
  pl = ({ draggable: e, home: t, draggables: r, viewport: s }) => {
    let i = er(t.axis, e.displaceBy),
      o = yt(t.descriptor.id, r),
      n = o.indexOf(e);
    n === -1 && _(!1);
    let a = o.slice(n + 1),
      l = a.reduce((d, m) => ((d[m.descriptor.id] = !0), d), {}),
      c = {
        inVirtualList: t.descriptor.mode === "virtual",
        displacedBy: i,
        effected: l,
      };
    return {
      impact: {
        displaced: $t({
          afterDragging: a,
          destination: t,
          displacedBy: i,
          last: null,
          viewport: s.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: i,
        at: { type: "REORDER", destination: tm(e.descriptor) },
      },
      afterCritical: c,
    };
  },
  rm = (e, t) => ({
    draggables: e.draggables,
    droppables: Ei(e.droppables, t),
  }),
  tr = (e) => {},
  rr = (e) => {},
  sm = ({ draggable: e, offset: t, initialWindowScroll: r }) => {
    let s = Gt(e.client, t),
      i = Lt(s, r);
    return {
      ...e,
      placeholder: { ...e.placeholder, client: s },
      client: s,
      page: i,
    };
  },
  im = (e) => {
    let t = e.frame;
    return t || _(!1), t;
  },
  om = ({ additions: e, updatedDroppables: t, viewport: r }) => {
    let s = r.scroll.diff.value;
    return e.map((i) => {
      let o = i.descriptor.droppableId,
        n = t[o],
        l = im(n).scroll.diff.value,
        c = ie(s, l);
      return sm({
        draggable: i,
        offset: c,
        initialWindowScroll: r.scroll.initial,
      });
    });
  },
  nm = "Processing dynamic changes",
  am = ({ state: e, published: t }) => {
    tr();
    let r = t.modified.map((C) => {
        let S = e.dimensions.droppables[C.droppableId];
        return Ri(S, C.scroll);
      }),
      s = { ...e.dimensions.droppables, ...Qa(r) },
      i = Ka(
        om({
          additions: t.additions,
          updatedDroppables: s,
          viewport: e.viewport,
        }),
      ),
      o = { ...e.dimensions.draggables, ...i };
    t.removals.forEach((C) => {
      delete o[C];
    });
    let n = { droppables: s, draggables: o },
      a = me(e.impact),
      l = a ? n.droppables[a] : null,
      c = n.draggables[e.critical.draggable.id],
      p = n.droppables[e.critical.droppable.id],
      { impact: u, afterCritical: d } = pl({
        draggable: c,
        home: p,
        draggables: o,
        viewport: e.viewport,
      }),
      m = l && l.isCombineEnabled ? e.impact : u,
      f = ll({
        pageOffset: e.current.page.offset,
        draggable: n.draggables[e.critical.draggable.id],
        draggables: n.draggables,
        droppables: n.droppables,
        previousImpact: m,
        viewport: e.viewport,
        afterCritical: d,
      });
    rr(nm);
    let g = {
      ...e,
      phase: "DRAGGING",
      impact: f,
      onLiftImpact: u,
      dimensions: n,
      afterCritical: d,
      forceShouldAnimate: !1,
    };
    return e.phase === "COLLECTING"
      ? g
      : { ...g, phase: "DROP_PENDING", reason: e.reason, isWaiting: !1 };
  },
  bi = (e) => e.movementMode === "SNAP",
  ni = (e, t, r) => {
    let s = rm(e.dimensions, t);
    return !bi(e) || r
      ? Vt({ state: e, dimensions: s })
      : dl({ state: e, dimensions: s });
  };
function ai(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? { ...e, scrollJumpRequest: null }
    : e;
}
var wa = { phase: "IDLE", completed: null, shouldFlush: !1 },
  lm = (e = wa, t) => {
    if (t.type === "FLUSH") return { ...wa, shouldFlush: !0 };
    if (t.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && _(!1);
      let {
          critical: r,
          clientSelection: s,
          viewport: i,
          dimensions: o,
          movementMode: n,
        } = t.payload,
        a = o.draggables[r.draggable.id],
        l = o.droppables[r.droppable.id],
        c = {
          selection: s,
          borderBoxCenter: a.client.borderBox.center,
          offset: re,
        },
        p = {
          client: c,
          page: {
            selection: ie(c.selection, i.scroll.initial),
            borderBoxCenter: ie(c.selection, i.scroll.initial),
            offset: ie(c.selection, i.scroll.diff.value),
          },
        },
        u = Qr(o.droppables).every((g) => !g.isFixedOnPage),
        { impact: d, afterCritical: m } = pl({
          draggable: a,
          home: l,
          draggables: o.draggables,
          viewport: i,
        });
      return {
        phase: "DRAGGING",
        isDragging: !0,
        critical: r,
        movementMode: n,
        dimensions: o,
        initial: p,
        current: p,
        isWindowScrollAllowed: u,
        impact: d,
        afterCritical: m,
        onLiftImpact: d,
        viewport: i,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if (t.type === "COLLECTION_STARTING")
      return e.phase === "COLLECTING" || e.phase === "DROP_PENDING"
        ? e
        : (e.phase !== "DRAGGING" && _(!1), { ...e, phase: "COLLECTING" });
    if (t.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || _(!1),
        am({ state: e, published: t.payload })
      );
    if (t.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      Je(e) || _(!1);
      let { client: r } = t.payload;
      return Ve(r, e.current.client.selection)
        ? e
        : Vt({ state: e, clientSelection: r, impact: bi(e) ? e.impact : null });
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return ai(e);
      Je(e) || _(!1);
      let { id: r, newScroll: s } = t.payload,
        i = e.dimensions.droppables[r];
      if (!i) return e;
      let o = Ri(i, s);
      return ni(e, o, !1);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Je(e) || _(!1);
      let { id: r, isEnabled: s } = t.payload,
        i = e.dimensions.droppables[r];
      i || _(!1), i.isEnabled === s && _(!1);
      let o = { ...i, isEnabled: s };
      return ni(e, o, !0);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Je(e) || _(!1);
      let { id: r, isCombineEnabled: s } = t.payload,
        i = e.dimensions.droppables[r];
      i || _(!1), i.isCombineEnabled === s && _(!1);
      let o = { ...i, isCombineEnabled: s };
      return ni(e, o, !0);
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      Je(e) || _(!1), e.isWindowScrollAllowed || _(!1);
      let r = t.payload.newScroll;
      if (Ve(e.viewport.scroll.current, r)) return ai(e);
      let s = tl(e.viewport, r);
      return bi(e)
        ? dl({ state: e, viewport: s })
        : Vt({ state: e, viewport: s });
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!Je(e)) return e;
      let r = t.payload.maxScroll;
      if (Ve(r, e.viewport.scroll.max)) return e;
      let s = { ...e.viewport, scroll: { ...e.viewport.scroll, max: r } };
      return { ...e, viewport: s };
    }
    if (
      t.type === "MOVE_UP" ||
      t.type === "MOVE_DOWN" ||
      t.type === "MOVE_LEFT" ||
      t.type === "MOVE_RIGHT"
    ) {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && _(!1);
      let r = Vp({ state: e, type: t.type });
      return r
        ? Vt({
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
        e.phase !== "COLLECTING" && _(!1),
        { ...e, phase: "DROP_PENDING", isWaiting: !0, reason: r }
      );
    }
    if (t.type === "DROP_ANIMATE") {
      let { completed: r, dropDuration: s, newHomeClientOffset: i } = t.payload;
      return (
        e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || _(!1),
        {
          phase: "DROP_ANIMATING",
          completed: r,
          dropDuration: s,
          newHomeClientOffset: i,
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
  cm = (e) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: e }),
  um = (e) => ({ type: "LIFT", payload: e }),
  dm = (e) => ({ type: "INITIAL_PUBLISH", payload: e }),
  pm = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
  mm = () => ({ type: "COLLECTION_STARTING", payload: null }),
  fm = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
  hm = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
  gm = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
  ml = (e) => ({ type: "MOVE", payload: e }),
  _m = (e) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: e }),
  bm = (e) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e }),
  ym = () => ({ type: "MOVE_UP", payload: null }),
  vm = () => ({ type: "MOVE_DOWN", payload: null }),
  Cm = () => ({ type: "MOVE_RIGHT", payload: null }),
  Sm = () => ({ type: "MOVE_LEFT", payload: null }),
  Bi = () => ({ type: "FLUSH", payload: null }),
  Wm = (e) => ({ type: "DROP_ANIMATE", payload: e }),
  Fi = (e) => ({ type: "DROP_COMPLETE", payload: e }),
  fl = (e) => ({ type: "DROP", payload: e }),
  Rm = (e) => ({ type: "DROP_PENDING", payload: e }),
  hl = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
var Im =
    (e) =>
    ({ getState: t, dispatch: r }) =>
    (s) =>
    (i) => {
      if (i.type !== "LIFT") {
        s(i);
        return;
      }
      let { id: o, clientSelection: n, movementMode: a } = i.payload,
        l = t();
      l.phase === "DROP_ANIMATING" && r(Fi({ completed: l.completed })),
        t().phase !== "IDLE" && _(!1),
        r(Bi()),
        r(cm({ draggableId: o, movementMode: a }));
      let p = {
          draggableId: o,
          scrollOptions: { shouldPublishImmediately: a === "SNAP" },
        },
        { critical: u, dimensions: d, viewport: m } = e.startPublishing(p);
      r(
        dm({
          critical: u,
          dimensions: d,
          clientSelection: n,
          movementMode: a,
          viewport: m,
        }),
      );
    },
  wm = (e) => () => (t) => (r) => {
    r.type === "INITIAL_PUBLISH" && e.dragging(),
      r.type === "DROP_ANIMATE" &&
        e.dropping(r.payload.completed.result.reason),
      (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
      t(r);
  },
  Ni = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  Qt = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  gl = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  Xe = `${gl.outOfTheWay}s ${Ni.outOfTheWay}`,
  jt = {
    fluid: `opacity ${Xe}`,
    snap: `transform ${Xe}, opacity ${Xe}`,
    drop: (e) => {
      let t = `${e}s ${Ni.drop}`;
      return `transform ${t}, opacity ${t}`;
    },
    outOfTheWay: `transform ${Xe}`,
    placeholder: `height ${Xe}, width ${Xe}, margin ${Xe}`,
  },
  Pa = (e) => (Ve(e, re) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
  yi = {
    moveTo: Pa,
    drop: (e, t) => {
      let r = Pa(e);
      if (r) return t ? `${r} scale(${Qt.scale.drop})` : r;
    },
  },
  { minDropTime: vi, maxDropTime: _l } = gl,
  Pm = _l - vi,
  xa = 1500,
  xm = 0.6,
  Dm = ({ current: e, destination: t, reason: r }) => {
    let s = Ut(e, t);
    if (s <= 0) return vi;
    if (s >= xa) return _l;
    let i = s / xa,
      o = vi + Pm * i,
      n = r === "CANCEL" ? o * xm : o;
    return Number(n.toFixed(2));
  },
  Em = ({
    impact: e,
    draggable: t,
    dimensions: r,
    viewport: s,
    afterCritical: i,
  }) => {
    let { draggables: o, droppables: n } = r,
      a = me(e),
      l = a ? n[a] : null,
      c = n[t.descriptor.droppableId],
      p = ul({
        impact: e,
        draggable: t,
        draggables: o,
        afterCritical: i,
        droppable: l || c,
        viewport: s,
      });
    return pe(p, t.client.borderBox.center);
  },
  Bm = ({
    draggables: e,
    reason: t,
    lastImpact: r,
    home: s,
    viewport: i,
    onLiftImpact: o,
  }) =>
    !r.at || t !== "DROP"
      ? {
          impact: cl({
            draggables: e,
            impact: o,
            destination: s,
            viewport: i,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : r.at.type === "REORDER"
        ? { impact: r, didDropInsideDroppable: !0 }
        : { impact: { ...r, displaced: qt }, didDropInsideDroppable: !0 },
  Fm =
    ({ getState: e, dispatch: t }) =>
    (r) =>
    (s) => {
      if (s.type !== "DROP") {
        r(s);
        return;
      }
      let i = e(),
        o = s.payload.reason;
      if (i.phase === "COLLECTING") {
        t(Rm({ reason: o }));
        return;
      }
      if (i.phase === "IDLE") return;
      i.phase === "DROP_PENDING" && i.isWaiting && _(!1),
        i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || _(!1);
      let a = i.critical,
        l = i.dimensions,
        c = l.draggables[i.critical.draggable.id],
        { impact: p, didDropInsideDroppable: u } = Bm({
          reason: o,
          lastImpact: i.impact,
          afterCritical: i.afterCritical,
          onLiftImpact: i.onLiftImpact,
          home: i.dimensions.droppables[i.critical.droppable.id],
          viewport: i.viewport,
          draggables: i.dimensions.draggables,
        }),
        d = u ? Ii(p) : null,
        m = u ? Kr(p) : null,
        f = { index: a.draggable.index, droppableId: a.droppable.id },
        g = {
          draggableId: c.descriptor.id,
          type: c.descriptor.type,
          source: f,
          reason: o,
          mode: i.movementMode,
          destination: d,
          combine: m,
        },
        h = Em({
          impact: p,
          draggable: c,
          dimensions: l,
          viewport: i.viewport,
          afterCritical: i.afterCritical,
        }),
        C = {
          critical: i.critical,
          afterCritical: i.afterCritical,
          result: g,
          impact: p,
        };
      if (!(!Ve(i.current.client.offset, h) || !!g.combine)) {
        t(Fi({ completed: C }));
        return;
      }
      let P = Dm({
        current: i.current.client.offset,
        destination: h,
        reason: o,
      });
      t(Wm({ newHomeClientOffset: h, dropDuration: P, completed: C }));
    },
  Nm = Fm,
  bl = () => ({ x: window.pageXOffset, y: window.pageYOffset });
function Om(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: (t) => {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function Am({ onWindowScroll: e }) {
  function t() {
    e(bl());
  }
  let r = ft(t),
    s = Om(r),
    i = ze;
  function o() {
    return i !== ze;
  }
  function n() {
    o() && _(!1), (i = Se(window, [s]));
  }
  function a() {
    o() || _(!1), r.cancel(), i(), (i = ze);
  }
  return { start: n, stop: a, isActive: o };
}
var Tm = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  Mm = (e) => {
    let t = Am({
      onWindowScroll: (r) => {
        e.dispatch(_m({ newScroll: r }));
      },
    });
    return (r) => (s) => {
      !t.isActive() && s.type === "INITIAL_PUBLISH" && t.start(),
        t.isActive() && Tm(s) && t.stop(),
        r(s);
    };
  },
  Gm = Mm,
  Lm = (e) => {
    let t = !1,
      r = !1,
      s = setTimeout(() => {
        r = !0;
      }),
      i = (o) => {
        t || r || ((t = !0), e(o), clearTimeout(s));
      };
    return (i.wasCalled = () => t), i;
  },
  km = () => {
    let e = [],
      t = (i) => {
        let o = e.findIndex((a) => a.timerId === i);
        o === -1 && _(!1);
        let [n] = e.splice(o, 1);
        n.callback();
      };
    return {
      add: (i) => {
        let o = setTimeout(() => t(o)),
          n = { timerId: o, callback: i };
        e.push(n);
      },
      flush: () => {
        if (!e.length) return;
        let i = [...e];
        (e.length = 0),
          i.forEach((o) => {
            clearTimeout(o.timerId), o.callback();
          });
      },
    };
  },
  Hm = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.droppableId === t.droppableId && e.index === t.index,
  zm = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.draggableId === t.draggableId && e.droppableId === t.droppableId,
  Vm = (e, t) => {
    if (e === t) return !0;
    let r =
        e.draggable.id === t.draggable.id &&
        e.draggable.droppableId === t.draggable.droppableId &&
        e.draggable.type === t.draggable.type &&
        e.draggable.index === t.draggable.index,
      s =
        e.droppable.id === t.droppable.id &&
        e.droppable.type === t.droppable.type;
    return r && s;
  },
  kt = (e, t) => {
    tr(), t(), rr();
  },
  Hr = (e, t) => ({
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: { droppableId: e.droppable.id, index: e.draggable.index },
    mode: t,
  });
function li(e, t, r, s) {
  if (!e) {
    r(s(t));
    return;
  }
  let i = Lm(r);
  e(t, { announce: i }), i.wasCalled() || r(s(t));
}
var jm = (e, t) => {
    let r = km(),
      s = null,
      i = (u, d) => {
        s && _(!1),
          kt("onBeforeCapture", () => {
            let m = e().onBeforeCapture;
            m && m({ draggableId: u, mode: d });
          });
      },
      o = (u, d) => {
        s && _(!1),
          kt("onBeforeDragStart", () => {
            let m = e().onBeforeDragStart;
            m && m(Hr(u, d));
          });
      },
      n = (u, d) => {
        s && _(!1);
        let m = Hr(u, d);
        (s = {
          mode: d,
          lastCritical: u,
          lastLocation: m.source,
          lastCombine: null,
        }),
          r.add(() => {
            kt("onDragStart", () => li(e().onDragStart, m, t, jr.onDragStart));
          });
      },
      a = (u, d) => {
        let m = Ii(d),
          f = Kr(d);
        s || _(!1);
        let g = !Vm(u, s.lastCritical);
        g && (s.lastCritical = u);
        let h = !Hm(s.lastLocation, m);
        h && (s.lastLocation = m);
        let C = !zm(s.lastCombine, f);
        if ((C && (s.lastCombine = f), !g && !h && !C)) return;
        let S = { ...Hr(u, s.mode), combine: f, destination: m };
        r.add(() => {
          kt("onDragUpdate", () => li(e().onDragUpdate, S, t, jr.onDragUpdate));
        });
      },
      l = () => {
        s || _(!1), r.flush();
      },
      c = (u) => {
        s || _(!1),
          (s = null),
          kt("onDragEnd", () => li(e().onDragEnd, u, t, jr.onDragEnd));
      };
    return {
      beforeCapture: i,
      beforeStart: o,
      start: n,
      update: a,
      flush: l,
      drop: c,
      abort: () => {
        if (!s) return;
        let u = {
          ...Hr(s.lastCritical, s.mode),
          combine: null,
          destination: null,
          reason: "CANCEL",
        };
        c(u);
      },
    };
  },
  Um = (e, t) => {
    let r = jm(e, t);
    return (s) => (i) => (o) => {
      if (o.type === "BEFORE_INITIAL_CAPTURE") {
        r.beforeCapture(o.payload.draggableId, o.payload.movementMode);
        return;
      }
      if (o.type === "INITIAL_PUBLISH") {
        let a = o.payload.critical;
        r.beforeStart(a, o.payload.movementMode),
          i(o),
          r.start(a, o.payload.movementMode);
        return;
      }
      if (o.type === "DROP_COMPLETE") {
        let a = o.payload.completed.result;
        r.flush(), i(o), r.drop(a);
        return;
      }
      if ((i(o), o.type === "FLUSH")) {
        r.abort();
        return;
      }
      let n = s.getState();
      n.phase === "DRAGGING" && r.update(n.critical, n.impact);
    };
  },
  qm = (e) => (t) => (r) => {
    if (r.type !== "DROP_ANIMATION_FINISHED") {
      t(r);
      return;
    }
    let s = e.getState();
    s.phase !== "DROP_ANIMATING" && _(!1),
      e.dispatch(Fi({ completed: s.completed }));
  },
  $m = qm,
  Qm = (e) => {
    let t = null,
      r = null;
    function s() {
      r && (cancelAnimationFrame(r), (r = null)), t && (t(), (t = null));
    }
    return (i) => (o) => {
      if (
        ((o.type === "FLUSH" ||
          o.type === "DROP_COMPLETE" ||
          o.type === "DROP_ANIMATION_FINISHED") &&
          s(),
        i(o),
        o.type !== "DROP_ANIMATE")
      )
        return;
      let n = {
        eventName: "scroll",
        options: { capture: !0, passive: !1, once: !0 },
        fn: function () {
          e.getState().phase === "DROP_ANIMATING" && e.dispatch(hl());
        },
      };
      r = requestAnimationFrame(() => {
        (r = null), (t = Se(window, [n]));
      });
    };
  },
  Km = Qm,
  Ym = (e) => () => (t) => (r) => {
    (r.type === "DROP_COMPLETE" ||
      r.type === "FLUSH" ||
      r.type === "DROP_ANIMATE") &&
      e.stopPublishing(),
      t(r);
  },
  Xm = (e) => {
    let t = !1;
    return () => (r) => (s) => {
      if (s.type === "INITIAL_PUBLISH") {
        (t = !0),
          e.tryRecordFocus(s.payload.critical.draggable.id),
          r(s),
          e.tryRestoreFocusRecorded();
        return;
      }
      if ((r(s), !!t)) {
        if (s.type === "FLUSH") {
          (t = !1), e.tryRestoreFocusRecorded();
          return;
        }
        if (s.type === "DROP_COMPLETE") {
          t = !1;
          let i = s.payload.completed.result;
          i.combine && e.tryShiftRecord(i.draggableId, i.combine.draggableId),
            e.tryRestoreFocusRecorded();
        }
      }
    };
  },
  Jm = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  Zm = (e) => (t) => (r) => (s) => {
    if (Jm(s)) {
      e.stop(), r(s);
      return;
    }
    if (s.type === "INITIAL_PUBLISH") {
      r(s);
      let i = t.getState();
      i.phase !== "DRAGGING" && _(!1), e.start(i);
      return;
    }
    r(s), e.scroll(t.getState());
  },
  ef = (e) => (t) => (r) => {
    if ((t(r), r.type !== "PUBLISH_WHILE_DRAGGING")) return;
    let s = e.getState();
    s.phase === "DROP_PENDING" &&
      (s.isWaiting || e.dispatch(fl({ reason: s.reason })));
  },
  tf = ef,
  rf = Qs,
  sf = ({
    dimensionMarshal: e,
    focusMarshal: t,
    styleMarshal: r,
    getResponders: s,
    announce: i,
    autoScroller: o,
  }) =>
    qs(
      lm,
      rf(Hn(wm(r), Ym(e), Im(e), Nm, $m, Km, tf, Zm(o), Gm, Xm(t), Um(s, i))),
    ),
  ci = () => ({ additions: {}, removals: {}, modified: {} });
function of({ registry: e, callbacks: t }) {
  let r = ci(),
    s = null,
    i = () => {
      s ||
        (t.collectionStarting(),
        (s = requestAnimationFrame(() => {
          (s = null), tr();
          let { additions: l, removals: c, modified: p } = r,
            u = Object.keys(l)
              .map((f) => e.draggable.getById(f).getDimension(re))
              .sort((f, g) => f.descriptor.index - g.descriptor.index),
            d = Object.keys(p).map((f) => {
              let h = e.droppable.getById(f).callbacks.getScrollWhileDragging();
              return { droppableId: f, scroll: h };
            }),
            m = { additions: u, removals: Object.keys(c), modified: d };
          (r = ci()), rr(), t.publish(m);
        })));
    };
  return {
    add: (l) => {
      let c = l.descriptor.id;
      (r.additions[c] = l),
        (r.modified[l.descriptor.droppableId] = !0),
        r.removals[c] && delete r.removals[c],
        i();
    },
    remove: (l) => {
      let c = l.descriptor;
      (r.removals[c.id] = !0),
        (r.modified[c.droppableId] = !0),
        r.additions[c.id] && delete r.additions[c.id],
        i();
    },
    stop: () => {
      s && (cancelAnimationFrame(s), (s = null), (r = ci()));
    },
  };
}
var yl = ({ scrollHeight: e, scrollWidth: t, height: r, width: s }) => {
    let i = pe({ x: t, y: e }, { x: s, y: r });
    return { x: Math.max(0, i.x), y: Math.max(0, i.y) };
  },
  vl = () => {
    let e = document.documentElement;
    return e || _(!1), e;
  },
  Cl = () => {
    let e = vl();
    return yl({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  nf = () => {
    let e = bl(),
      t = Cl(),
      r = e.y,
      s = e.x,
      i = vl(),
      o = i.clientWidth,
      n = i.clientHeight,
      a = s + o,
      l = r + n;
    return {
      frame: Ce({ top: r, left: s, right: a, bottom: l }),
      scroll: {
        initial: e,
        current: e,
        max: t,
        diff: { value: re, displacement: re },
      },
    };
  },
  af = ({ critical: e, scrollOptions: t, registry: r }) => {
    tr();
    let s = nf(),
      i = s.scroll.current,
      o = e.droppable,
      n = r.droppable
        .getAllByType(o.type)
        .map((p) => p.callbacks.getDimensionAndWatchScroll(i, t)),
      a = r.draggable
        .getAllByType(e.draggable.type)
        .map((p) => p.getDimension(i)),
      l = { draggables: Ka(a), droppables: Qa(n) };
    return rr(), { dimensions: l, critical: e, viewport: s };
  };
function Da(e, t, r) {
  return !(
    r.descriptor.id === t.id ||
    r.descriptor.type !== t.type ||
    e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual"
  );
}
var lf = (e, t) => {
    let r = null,
      s = of({
        callbacks: {
          publish: t.publishWhileDragging,
          collectionStarting: t.collectionStarting,
        },
        registry: e,
      }),
      i = (d, m) => {
        e.droppable.exists(d) || _(!1),
          r && t.updateDroppableIsEnabled({ id: d, isEnabled: m });
      },
      o = (d, m) => {
        r &&
          (e.droppable.exists(d) || _(!1),
          t.updateDroppableIsCombineEnabled({ id: d, isCombineEnabled: m }));
      },
      n = (d, m) => {
        r &&
          (e.droppable.exists(d) || _(!1),
          t.updateDroppableScroll({ id: d, newScroll: m }));
      },
      a = (d, m) => {
        r && e.droppable.getById(d).callbacks.scroll(m);
      },
      l = () => {
        if (!r) return;
        s.stop();
        let d = r.critical.droppable;
        e.droppable
          .getAllByType(d.type)
          .forEach((m) => m.callbacks.dragStopped()),
          r.unsubscribe(),
          (r = null);
      },
      c = (d) => {
        r || _(!1);
        let m = r.critical.draggable;
        d.type === "ADDITION" && Da(e, m, d.value) && s.add(d.value),
          d.type === "REMOVAL" && Da(e, m, d.value) && s.remove(d.value);
      };
    return {
      updateDroppableIsEnabled: i,
      updateDroppableIsCombineEnabled: o,
      scrollDroppable: a,
      updateDroppableScroll: n,
      startPublishing: (d) => {
        r && _(!1);
        let m = e.draggable.getById(d.draggableId),
          f = e.droppable.getById(m.descriptor.droppableId),
          g = { draggable: m.descriptor, droppable: f.descriptor },
          h = e.subscribe(c);
        return (
          (r = { critical: g, unsubscribe: h }),
          af({ critical: g, registry: e, scrollOptions: d.scrollOptions })
        );
      },
      stopPublishing: l,
    };
  },
  Sl = (e, t) =>
    e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
        ? !1
        : e.completed.result.reason === "DROP",
  cf = (e) => {
    window.scrollBy(e.x, e.y);
  },
  uf = ee((e) => Qr(e).filter((t) => !(!t.isEnabled || !t.frame))),
  df = (e, t) =>
    uf(t).find((s) => (s.frame || _(!1), ol(s.frame.pageMarginBox)(e))) || null,
  pf = ({ center: e, destination: t, droppables: r }) => {
    if (t) {
      let i = r[t];
      return i.frame ? i : null;
    }
    return df(e, r);
  },
  Kt = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  },
  mf = (e, t, r = () => Kt) => {
    let s = r(),
      i = e[t.size] * s.startFromPercentage,
      o = e[t.size] * s.maxScrollAtPercentage;
    return { startScrollingFrom: i, maxScrollValueAt: o };
  },
  Wl = ({ startOfRange: e, endOfRange: t, current: r }) => {
    let s = t - e;
    return s === 0 ? 0 : (r - e) / s;
  },
  Oi = 1,
  ff = (e, t, r = () => Kt) => {
    let s = r();
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return s.maxPixelScroll;
    if (e === t.startScrollingFrom) return Oi;
    let o =
        1 -
        Wl({
          startOfRange: t.maxScrollValueAt,
          endOfRange: t.startScrollingFrom,
          current: e,
        }),
      n = s.maxPixelScroll * s.ease(o);
    return Math.ceil(n);
  },
  hf = (e, t, r) => {
    let s = r(),
      i = s.durationDampening.accelerateAt,
      o = s.durationDampening.stopDampeningAt,
      n = t,
      a = o,
      c = Date.now() - n;
    if (c >= o) return e;
    if (c < i) return Oi;
    let p = Wl({ startOfRange: i, endOfRange: a, current: c }),
      u = e * s.ease(p);
    return Math.ceil(u);
  },
  Ea = ({
    distanceToEdge: e,
    thresholds: t,
    dragStartTime: r,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: i,
  }) => {
    let o = ff(e, t, i);
    return o === 0 ? 0 : s ? Math.max(hf(o, r, i), Oi) : o;
  },
  Ba = ({
    container: e,
    distanceToEdges: t,
    dragStartTime: r,
    axis: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = mf(e, s, o);
    return t[s.end] < t[s.start]
      ? Ea({
          distanceToEdge: t[s.end],
          thresholds: n,
          dragStartTime: r,
          shouldUseTimeDampening: i,
          getAutoScrollerOptions: o,
        })
      : -1 *
          Ea({
            distanceToEdge: t[s.start],
            thresholds: n,
            dragStartTime: r,
            shouldUseTimeDampening: i,
            getAutoScrollerOptions: o,
          });
  },
  gf = ({ container: e, subject: t, proposedScroll: r }) => {
    let s = t.height > e.height,
      i = t.width > e.width;
    return !i && !s ? r : i && s ? null : { x: i ? 0 : r.x, y: s ? 0 : r.y };
  },
  _f = $a((e) => (e === 0 ? 0 : e)),
  Rl = ({
    dragStartTime: e,
    container: t,
    subject: r,
    center: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = {
        top: s.y - t.top,
        right: t.right - s.x,
        bottom: t.bottom - s.y,
        left: s.x - t.left,
      },
      a = Ba({
        container: t,
        distanceToEdges: n,
        dragStartTime: e,
        axis: wi,
        shouldUseTimeDampening: i,
        getAutoScrollerOptions: o,
      }),
      l = Ba({
        container: t,
        distanceToEdges: n,
        dragStartTime: e,
        axis: Ja,
        shouldUseTimeDampening: i,
        getAutoScrollerOptions: o,
      }),
      c = _f({ x: l, y: a });
    if (Ve(c, re)) return null;
    let p = gf({ container: t, subject: r, proposedScroll: c });
    return p ? (Ve(p, re) ? null : p) : null;
  },
  bf = $a((e) => (e === 0 ? 0 : e > 0 ? 1 : -1)),
  Ai = (() => {
    let e = (t, r) => (t < 0 ? t : t > r ? t - r : 0);
    return ({ current: t, max: r, change: s }) => {
      let i = ie(t, s),
        o = { x: e(i.x, r.x), y: e(i.y, r.y) };
      return Ve(o, re) ? null : o;
    };
  })(),
  Il = ({ max: e, current: t, change: r }) => {
    let s = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
      i = bf(r),
      o = Ai({ max: s, current: t, change: i });
    return !o || (i.x !== 0 && o.x === 0) || (i.y !== 0 && o.y === 0);
  },
  Ti = (e, t) =>
    Il({ current: e.scroll.current, max: e.scroll.max, change: t }),
  yf = (e, t) => {
    if (!Ti(e, t)) return null;
    let r = e.scroll.max,
      s = e.scroll.current;
    return Ai({ current: s, max: r, change: t });
  },
  Mi = (e, t) => {
    let r = e.frame;
    return r
      ? Il({ current: r.scroll.current, max: r.scroll.max, change: t })
      : !1;
  },
  vf = (e, t) => {
    let r = e.frame;
    return !r || !Mi(e, t)
      ? null
      : Ai({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  Cf = ({
    viewport: e,
    subject: t,
    center: r,
    dragStartTime: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = Rl({
      dragStartTime: s,
      container: e.frame,
      subject: t,
      center: r,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: o,
    });
    return n && Ti(e, n) ? n : null;
  },
  Sf = ({
    droppable: e,
    subject: t,
    center: r,
    dragStartTime: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = e.frame;
    if (!n) return null;
    let a = Rl({
      dragStartTime: s,
      container: n.pageMarginBox,
      subject: t,
      center: r,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: o,
    });
    return a && Mi(e, a) ? a : null;
  },
  Fa = ({
    state: e,
    dragStartTime: t,
    shouldUseTimeDampening: r,
    scrollWindow: s,
    scrollDroppable: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = e.current.page.borderBoxCenter,
      l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
    if (e.isWindowScrollAllowed) {
      let u = e.viewport,
        d = Cf({
          dragStartTime: t,
          viewport: u,
          subject: l,
          center: n,
          shouldUseTimeDampening: r,
          getAutoScrollerOptions: o,
        });
      if (d) {
        s(d);
        return;
      }
    }
    let c = pf({
      center: n,
      destination: me(e.impact),
      droppables: e.dimensions.droppables,
    });
    if (!c) return;
    let p = Sf({
      dragStartTime: t,
      droppable: c,
      subject: l,
      center: n,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: o,
    });
    p && i(c.descriptor.id, p);
  },
  Wf = ({
    scrollWindow: e,
    scrollDroppable: t,
    getAutoScrollerOptions: r = () => Kt,
  }) => {
    let s = ft(e),
      i = ft(t),
      o = null,
      n = (c) => {
        o || _(!1);
        let { shouldUseTimeDampening: p, dragStartTime: u } = o;
        Fa({
          state: c,
          scrollWindow: s,
          scrollDroppable: i,
          dragStartTime: u,
          shouldUseTimeDampening: p,
          getAutoScrollerOptions: r,
        });
      };
    return {
      start: (c) => {
        tr(), o && _(!1);
        let p = Date.now(),
          u = !1,
          d = () => {
            u = !0;
          };
        Fa({
          state: c,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: d,
          scrollDroppable: d,
          getAutoScrollerOptions: r,
        }),
          (o = { dragStartTime: p, shouldUseTimeDampening: u }),
          rr(),
          u && n(c);
      },
      stop: () => {
        o && (s.cancel(), i.cancel(), (o = null));
      },
      scroll: n,
    };
  },
  Rf = ({ move: e, scrollDroppable: t, scrollWindow: r }) => {
    let s = (a, l) => {
        let c = ie(a.current.client.selection, l);
        e({ client: c });
      },
      i = (a, l) => {
        if (!Mi(a, l)) return l;
        let c = vf(a, l);
        if (!c) return t(a.descriptor.id, l), null;
        let p = pe(l, c);
        return t(a.descriptor.id, p), pe(l, p);
      },
      o = (a, l, c) => {
        if (!a || !Ti(l, c)) return c;
        let p = yf(l, c);
        if (!p) return r(c), null;
        let u = pe(c, p);
        return r(u), pe(c, u);
      };
    return (a) => {
      let l = a.scrollJumpRequest;
      if (!l) return;
      let c = me(a.impact);
      c || _(!1);
      let p = i(a.dimensions.droppables[c], l);
      if (!p) return;
      let u = a.viewport,
        d = o(a.isWindowScrollAllowed, u, p);
      d && s(a, d);
    };
  },
  If = ({
    scrollDroppable: e,
    scrollWindow: t,
    move: r,
    getAutoScrollerOptions: s,
  }) => {
    let i = Wf({
        scrollWindow: t,
        scrollDroppable: e,
        getAutoScrollerOptions: s,
      }),
      o = Rf({ move: r, scrollWindow: t, scrollDroppable: e });
    return {
      scroll: (l) => {
        if (!(s().disabled || l.phase !== "DRAGGING")) {
          if (l.movementMode === "FLUID") {
            i.scroll(l);
            return;
          }
          l.scrollJumpRequest && o(l);
        }
      },
      start: i.start,
      stop: i.stop,
    };
  },
  gt = "data-rfd",
  _t = (() => {
    let e = `${gt}-drag-handle`;
    return {
      base: e,
      draggableId: `${e}-draggable-id`,
      contextId: `${e}-context-id`,
    };
  })(),
  Ci = (() => {
    let e = `${gt}-draggable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  wf = (() => {
    let e = `${gt}-droppable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  Na = { contextId: `${gt}-scroll-container-context-id` },
  Pf = (e) => (t) => `[${t}="${e}"]`,
  Ht = (e, t) =>
    e
      .map((r) => {
        let s = r.styles[t];
        return s ? `${r.selector} { ${s} }` : "";
      })
      .join(" "),
  xf = "pointer-events: none;",
  Df = (e) => {
    let t = Pf(e),
      r = (() => {
        let a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: t(_t.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: a,
            dragging: xf,
            dropAnimating: a,
          },
        };
      })(),
      s = (() => {
        let a = `
      transition: ${jt.outOfTheWay};
    `;
        return {
          selector: t(Ci.contextId),
          styles: { dragging: a, dropAnimating: a, userCancel: a },
        };
      })(),
      i = {
        selector: t(wf.contextId),
        styles: { always: "overflow-anchor: none;" },
      },
      n = [
        s,
        r,
        i,
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
      always: Ht(n, "always"),
      resting: Ht(n, "resting"),
      dragging: Ht(n, "dragging"),
      dropAnimating: Ht(n, "dropAnimating"),
      userCancel: Ht(n, "userCancel"),
    };
  },
  Ef =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? v.useLayoutEffect
      : v.useEffect,
  fe = Ef,
  ui = () => {
    let e = document.querySelector("head");
    return e || _(!1), e;
  },
  Oa = (e) => {
    let t = document.createElement("style");
    return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
  };
function Bf(e, t) {
  let r = F(() => Df(e), [e]),
    s = (0, v.useRef)(null),
    i = (0, v.useRef)(null),
    o = I(
      ee((u) => {
        let d = i.current;
        d || _(!1), (d.textContent = u);
      }),
      [],
    ),
    n = I((u) => {
      let d = s.current;
      d || _(!1), (d.textContent = u);
    }, []);
  fe(() => {
    (!s.current && !i.current) || _(!1);
    let u = Oa(t),
      d = Oa(t);
    return (
      (s.current = u),
      (i.current = d),
      u.setAttribute(`${gt}-always`, e),
      d.setAttribute(`${gt}-dynamic`, e),
      ui().appendChild(u),
      ui().appendChild(d),
      n(r.always),
      o(r.resting),
      () => {
        let m = (f) => {
          let g = f.current;
          g || _(!1), ui().removeChild(g), (f.current = null);
        };
        m(s), m(i);
      }
    );
  }, [t, n, o, r.always, r.resting, e]);
  let a = I(() => o(r.dragging), [o, r.dragging]),
    l = I(
      (u) => {
        if (u === "DROP") {
          o(r.dropAnimating);
          return;
        }
        o(r.userCancel);
      },
      [o, r.dropAnimating, r.userCancel],
    ),
    c = I(() => {
      i.current && o(r.resting);
    }, [o, r.resting]);
  return F(() => ({ dragging: a, dropping: l, resting: c }), [a, l, c]);
}
function wl(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Pl = (e) =>
  e && e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView
    : window;
function sr(e) {
  return e instanceof Pl(e).HTMLElement;
}
function xl(e, t) {
  let r = `[${_t.contextId}="${e}"]`,
    s = wl(document, r);
  if (!s.length) return null;
  let i = s.find((o) => o.getAttribute(_t.draggableId) === t);
  return !i || !sr(i) ? null : i;
}
function Ff(e) {
  let t = (0, v.useRef)({}),
    r = (0, v.useRef)(null),
    s = (0, v.useRef)(null),
    i = (0, v.useRef)(!1),
    o = I(function (d, m) {
      let f = { id: d, focus: m };
      return (
        (t.current[d] = f),
        function () {
          let h = t.current;
          h[d] !== f && delete h[d];
        }
      );
    }, []),
    n = I(
      function (d) {
        let m = xl(e, d);
        m && m !== document.activeElement && m.focus();
      },
      [e],
    ),
    a = I(function (d, m) {
      r.current === d && (r.current = m);
    }, []),
    l = I(
      function () {
        s.current ||
          (i.current &&
            (s.current = requestAnimationFrame(() => {
              s.current = null;
              let d = r.current;
              d && n(d);
            })));
      },
      [n],
    ),
    c = I(function (d) {
      r.current = null;
      let m = document.activeElement;
      m && m.getAttribute(_t.draggableId) === d && (r.current = d);
    }, []);
  return (
    fe(
      () => (
        (i.current = !0),
        function () {
          i.current = !1;
          let d = s.current;
          d && cancelAnimationFrame(d);
        }
      ),
      [],
    ),
    F(
      () => ({
        register: o,
        tryRecordFocus: c,
        tryRestoreFocusRecorded: l,
        tryShiftRecord: a,
      }),
      [o, c, l, a],
    )
  );
}
function Nf() {
  let e = { draggables: {}, droppables: {} },
    t = [];
  function r(u) {
    return (
      t.push(u),
      function () {
        let m = t.indexOf(u);
        m !== -1 && t.splice(m, 1);
      }
    );
  }
  function s(u) {
    t.length && t.forEach((d) => d(u));
  }
  function i(u) {
    return e.draggables[u] || null;
  }
  function o(u) {
    let d = i(u);
    return d || _(!1), d;
  }
  let n = {
    register: (u) => {
      (e.draggables[u.descriptor.id] = u), s({ type: "ADDITION", value: u });
    },
    update: (u, d) => {
      let m = e.draggables[d.descriptor.id];
      m &&
        m.uniqueId === u.uniqueId &&
        (delete e.draggables[d.descriptor.id],
        (e.draggables[u.descriptor.id] = u));
    },
    unregister: (u) => {
      let d = u.descriptor.id,
        m = i(d);
      m &&
        u.uniqueId === m.uniqueId &&
        (delete e.draggables[d],
        e.droppables[u.descriptor.droppableId] &&
          s({ type: "REMOVAL", value: u }));
    },
    getById: o,
    findById: i,
    exists: (u) => !!i(u),
    getAllByType: (u) =>
      Object.values(e.draggables).filter((d) => d.descriptor.type === u),
  };
  function a(u) {
    return e.droppables[u] || null;
  }
  function l(u) {
    let d = a(u);
    return d || _(!1), d;
  }
  let c = {
    register: (u) => {
      e.droppables[u.descriptor.id] = u;
    },
    unregister: (u) => {
      let d = a(u.descriptor.id);
      d && u.uniqueId === d.uniqueId && delete e.droppables[u.descriptor.id];
    },
    getById: l,
    findById: a,
    exists: (u) => !!a(u),
    getAllByType: (u) =>
      Object.values(e.droppables).filter((d) => d.descriptor.type === u),
  };
  function p() {
    (e.draggables = {}), (e.droppables = {}), (t.length = 0);
  }
  return { draggable: n, droppable: c, subscribe: r, clean: p };
}
function Of() {
  let e = F(Nf, []);
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
var Gi = v.default.createContext(null),
  Yt = () => {
    let e = document.body;
    return e || _(!1), e;
  },
  Af = {
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
  Tf = Af,
  Mf = (e) => `rfd-announcement-${e}`;
function Gf(e) {
  let t = F(() => Mf(e), [e]),
    r = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(
      function () {
        let o = document.createElement("div");
        return (
          (r.current = o),
          (o.id = t),
          o.setAttribute("aria-live", "assertive"),
          o.setAttribute("aria-atomic", "true"),
          Ae(o.style, Tf),
          Yt().appendChild(o),
          function () {
            setTimeout(function () {
              let l = Yt();
              l.contains(o) && l.removeChild(o),
                o === r.current && (r.current = null);
            });
          }
        );
      },
      [t],
    ),
    I((i) => {
      let o = r.current;
      if (o) {
        o.textContent = i;
        return;
      }
    }, [])
  );
}
var Lf = 0,
  Dl = { separator: "::" };
function kf(e, t = Dl) {
  return F(() => `${e}${t.separator}${Lf++}`, [t.separator, e]);
}
function Hf(e, t = Dl) {
  let r = v.default.useId();
  return F(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Li = "useId" in v.default ? Hf : kf;
function zf({ contextId: e, uniqueId: t }) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Vf({ contextId: e, text: t }) {
  let r = Li("hidden-text", { separator: "-" }),
    s = F(() => zf({ contextId: e, uniqueId: r }), [r, e]);
  return (
    (0, v.useEffect)(
      function () {
        let o = document.createElement("div");
        return (
          (o.id = s),
          (o.textContent = t),
          (o.style.display = "none"),
          Yt().appendChild(o),
          function () {
            let a = Yt();
            a.contains(o) && a.removeChild(o);
          }
        );
      },
      [s, t],
    ),
    s
  );
}
var Jr = v.default.createContext(null),
  jf = {
    react: "^16.8.5 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
  },
  Uf = /(\d+)\.(\d+)\.(\d+)/,
  Aa = (e) => {
    let t = Uf.exec(e);
    t == null && _(!1);
    let r = Number(t[1]),
      s = Number(t[2]),
      i = Number(t[3]);
    return { major: r, minor: s, patch: i, raw: e };
  },
  qf = (e, t) =>
    t.major > e.major
      ? !0
      : t.major < e.major
        ? !1
        : t.minor > e.minor
          ? !0
          : t.minor < e.minor
            ? !1
            : t.patch >= e.patch,
  $f = (e, t) => {
    let r = Aa(e),
      s = Aa(t);
    qf(r, s);
  };
var Qf = (e) => {
  let t = e.doctype;
  t && (t.name.toLowerCase(), t.publicId);
};
function ir(e, t) {}
function Kf() {
  ir(() => {
    $f(jf.react, v.default.version), Qf(document);
  }, []);
}
function ki(e) {
  let t = (0, v.useRef)(e);
  return (
    (0, v.useEffect)(() => {
      t.current = e;
    }),
    t
  );
}
function Yf() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(n) {
    return n === e;
  }
  function s(n) {
    e && _(!1);
    let a = { abandon: n };
    return (e = a), a;
  }
  function i() {
    e || _(!1), (e = null);
  }
  function o() {
    e && (e.abandon(), i());
  }
  return { isClaimed: t, isActive: r, claim: s, release: i, tryAbandon: o };
}
function Xt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
var Xf = 9,
  Jf = 13,
  Hi = 27,
  El = 32,
  Zf = 33,
  eh = 34,
  th = 35,
  rh = 36,
  sh = 37,
  ih = 38,
  oh = 39,
  nh = 40,
  ah = { [Jf]: !0, [Xf]: !0 },
  Bl = (e) => {
    ah[e.keyCode] && e.preventDefault();
  },
  lh = (() => {
    let e = "visibilitychange";
    return typeof document > "u"
      ? e
      : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
          (s) => `on${s}` in document,
        ) || e;
  })(),
  Zr = lh,
  Fl = 0,
  Ta = 5;
function ch(e, t) {
  return Math.abs(t.x - e.x) >= Ta || Math.abs(t.y - e.y) >= Ta;
}
var Ma = { type: "IDLE" };
function uh({ cancel: e, completed: t, getPhase: r, setPhase: s }) {
  return [
    {
      eventName: "mousemove",
      fn: (i) => {
        let { button: o, clientX: n, clientY: a } = i;
        if (o !== Fl) return;
        let l = { x: n, y: a },
          c = r();
        if (c.type === "DRAGGING") {
          i.preventDefault(), c.actions.move(l);
          return;
        }
        c.type !== "PENDING" && _(!1);
        let p = c.point;
        if (!ch(p, l)) return;
        i.preventDefault();
        let u = c.actions.fluidLift(l);
        s({ type: "DRAGGING", actions: u });
      },
    },
    {
      eventName: "mouseup",
      fn: (i) => {
        let o = r();
        if (o.type !== "DRAGGING") {
          e();
          return;
        }
        i.preventDefault(), o.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "mousedown",
      fn: (i) => {
        r().type === "DRAGGING" && i.preventDefault(), e();
      },
    },
    {
      eventName: "keydown",
      fn: (i) => {
        if (r().type === "PENDING") {
          e();
          return;
        }
        if (i.keyCode === Hi) {
          i.preventDefault(), e();
          return;
        }
        Bl(i);
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
      fn: (i) => {
        let o = r();
        if ((o.type === "IDLE" && _(!1), o.actions.shouldRespectForcePress())) {
          e();
          return;
        }
        i.preventDefault();
      },
    },
    { eventName: Zr, fn: e },
  ];
}
function dh(e) {
  let t = (0, v.useRef)(Ma),
    r = (0, v.useRef)(ze),
    s = F(
      () => ({
        eventName: "mousedown",
        fn: function (u) {
          if (
            u.defaultPrevented ||
            u.button !== Fl ||
            u.ctrlKey ||
            u.metaKey ||
            u.shiftKey ||
            u.altKey
          )
            return;
          let d = e.findClosestDraggableId(u);
          if (!d) return;
          let m = e.tryGetLock(d, n, { sourceEvent: u });
          if (!m) return;
          u.preventDefault();
          let f = { x: u.clientX, y: u.clientY };
          r.current(), c(m, f);
        },
      }),
      [e],
    ),
    i = F(
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
    o = I(
      function () {
        let u = { passive: !1, capture: !0 };
        r.current = Se(window, [i, s], u);
      },
      [i, s],
    ),
    n = I(() => {
      t.current.type !== "IDLE" && ((t.current = Ma), r.current(), o());
    }, [o]),
    a = I(() => {
      let p = t.current;
      n(),
        p.type === "DRAGGING" && p.actions.cancel({ shouldBlockNextClick: !0 }),
        p.type === "PENDING" && p.actions.abort();
    }, [n]),
    l = I(
      function () {
        let u = { capture: !0, passive: !1 },
          d = uh({
            cancel: a,
            completed: n,
            getPhase: () => t.current,
            setPhase: (m) => {
              t.current = m;
            },
          });
        r.current = Se(window, d, u);
      },
      [a, n],
    ),
    c = I(
      function (u, d) {
        t.current.type !== "IDLE" && _(!1),
          (t.current = { type: "PENDING", point: d, actions: u }),
          l();
      },
      [l],
    );
  fe(
    function () {
      return (
        o(),
        function () {
          r.current();
        }
      );
    },
    [o],
  );
}
function ph() {}
var mh = { [eh]: !0, [Zf]: !0, [rh]: !0, [th]: !0 };
function fh(e, t) {
  function r() {
    t(), e.cancel();
  }
  function s() {
    t(), e.drop();
  }
  return [
    {
      eventName: "keydown",
      fn: (i) => {
        if (i.keyCode === Hi) {
          i.preventDefault(), r();
          return;
        }
        if (i.keyCode === El) {
          i.preventDefault(), s();
          return;
        }
        if (i.keyCode === nh) {
          i.preventDefault(), e.moveDown();
          return;
        }
        if (i.keyCode === ih) {
          i.preventDefault(), e.moveUp();
          return;
        }
        if (i.keyCode === oh) {
          i.preventDefault(), e.moveRight();
          return;
        }
        if (i.keyCode === sh) {
          i.preventDefault(), e.moveLeft();
          return;
        }
        if (mh[i.keyCode]) {
          i.preventDefault();
          return;
        }
        Bl(i);
      },
    },
    { eventName: "mousedown", fn: r },
    { eventName: "mouseup", fn: r },
    { eventName: "click", fn: r },
    { eventName: "touchstart", fn: r },
    { eventName: "resize", fn: r },
    { eventName: "wheel", fn: r, options: { passive: !0 } },
    { eventName: Zr, fn: r },
  ];
}
function hh(e) {
  let t = (0, v.useRef)(ph),
    r = F(
      () => ({
        eventName: "keydown",
        fn: function (o) {
          if (o.defaultPrevented || o.keyCode !== El) return;
          let n = e.findClosestDraggableId(o);
          if (!n) return;
          let a = e.tryGetLock(n, p, { sourceEvent: o });
          if (!a) return;
          o.preventDefault();
          let l = !0,
            c = a.snapLift();
          t.current();
          function p() {
            l || _(!1), (l = !1), t.current(), s();
          }
          t.current = Se(window, fh(c, p), { capture: !0, passive: !1 });
        },
      }),
      [e],
    ),
    s = I(
      function () {
        let o = { passive: !1, capture: !0 };
        t.current = Se(window, [r], o);
      },
      [r],
    );
  fe(
    function () {
      return (
        s(),
        function () {
          t.current();
        }
      );
    },
    [s],
  );
}
var di = { type: "IDLE" },
  gh = 120,
  _h = 0.15;
function bh({ cancel: e, getPhase: t }) {
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
        r.keyCode === Hi && r.preventDefault(), e();
      },
    },
    { eventName: Zr, fn: e },
  ];
}
function yh({ cancel: e, completed: t, getPhase: r }) {
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: (s) => {
        let i = r();
        if (i.type !== "DRAGGING") {
          e();
          return;
        }
        i.hasMoved = !0;
        let { clientX: o, clientY: n } = s.touches[0],
          a = { x: o, y: n };
        s.preventDefault(), i.actions.move(a);
      },
    },
    {
      eventName: "touchend",
      fn: (s) => {
        let i = r();
        if (i.type !== "DRAGGING") {
          e();
          return;
        }
        s.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "touchcancel",
      fn: (s) => {
        if (r().type !== "DRAGGING") {
          e();
          return;
        }
        s.preventDefault(), e();
      },
    },
    {
      eventName: "touchforcechange",
      fn: (s) => {
        let i = r();
        i.type === "IDLE" && _(!1);
        let o = s.touches[0];
        if (!o || !(o.force >= _h)) return;
        let a = i.actions.shouldRespectForcePress();
        if (i.type === "PENDING") {
          a && e();
          return;
        }
        if (a) {
          if (i.hasMoved) {
            s.preventDefault();
            return;
          }
          e();
          return;
        }
        s.preventDefault();
      },
    },
    { eventName: Zr, fn: e },
  ];
}
function vh(e) {
  let t = (0, v.useRef)(di),
    r = (0, v.useRef)(ze),
    s = I(function () {
      return t.current;
    }, []),
    i = I(function (m) {
      t.current = m;
    }, []),
    o = F(
      () => ({
        eventName: "touchstart",
        fn: function (m) {
          if (m.defaultPrevented) return;
          let f = e.findClosestDraggableId(m);
          if (!f) return;
          let g = e.tryGetLock(f, a, { sourceEvent: m });
          if (!g) return;
          let h = m.touches[0],
            { clientX: C, clientY: S } = h,
            P = { x: C, y: S };
          r.current(), u(g, P);
        },
      }),
      [e],
    ),
    n = I(
      function () {
        let m = { capture: !0, passive: !1 };
        r.current = Se(window, [o], m);
      },
      [o],
    ),
    a = I(() => {
      let d = t.current;
      d.type !== "IDLE" &&
        (d.type === "PENDING" && clearTimeout(d.longPressTimerId),
        i(di),
        r.current(),
        n());
    }, [n, i]),
    l = I(() => {
      let d = t.current;
      a(),
        d.type === "DRAGGING" && d.actions.cancel({ shouldBlockNextClick: !0 }),
        d.type === "PENDING" && d.actions.abort();
    }, [a]),
    c = I(
      function () {
        let m = { capture: !0, passive: !1 },
          f = { cancel: l, completed: a, getPhase: s },
          g = Se(window, yh(f), m),
          h = Se(window, bh(f), m);
        r.current = function () {
          g(), h();
        };
      },
      [l, s, a],
    ),
    p = I(
      function () {
        let m = s();
        m.type !== "PENDING" && _(!1);
        let f = m.actions.fluidLift(m.point);
        i({ type: "DRAGGING", actions: f, hasMoved: !1 });
      },
      [s, i],
    ),
    u = I(
      function (m, f) {
        s().type !== "IDLE" && _(!1);
        let g = setTimeout(p, gh);
        i({ type: "PENDING", point: f, actions: m, longPressTimerId: g }), c();
      },
      [c, s, i, p],
    );
  fe(
    function () {
      return (
        n(),
        function () {
          r.current();
          let f = s();
          f.type === "PENDING" && (clearTimeout(f.longPressTimerId), i(di));
        }
      );
    },
    [s, n, i],
  ),
    fe(function () {
      return Se(window, [
        {
          eventName: "touchmove",
          fn: () => {},
          options: { capture: !1, passive: !1 },
        },
      ]);
    }, []);
}
function Ch(e) {}
var Sh = [
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "optgroup",
  "video",
  "audio",
];
function Nl(e, t) {
  if (t == null) return !1;
  if (Sh.includes(t.tagName.toLowerCase())) return !0;
  let s = t.getAttribute("contenteditable");
  return s === "true" || s === "" ? !0 : t === e ? !1 : Nl(e, t.parentElement);
}
function Wh(e, t) {
  let r = t.target;
  return sr(r) ? Nl(e, r) : !1;
}
var Rh = (e) => Ce(e.getBoundingClientRect()).center;
function Ih(e) {
  return e instanceof Pl(e).Element;
}
var wh = (() => {
  let e = "matches";
  return typeof document > "u"
    ? e
    : [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (s) => s in Element.prototype,
      ) || e;
})();
function Ol(e, t) {
  return e == null ? null : e[wh](t) ? e : Ol(e.parentElement, t);
}
function Ph(e, t) {
  return e.closest ? e.closest(t) : Ol(e, t);
}
function xh(e) {
  return `[${_t.contextId}="${e}"]`;
}
function Dh(e, t) {
  let r = t.target;
  if (!Ih(r)) return null;
  let s = xh(e),
    i = Ph(r, s);
  return !i || !sr(i) ? null : i;
}
function Eh(e, t) {
  let r = Dh(e, t);
  return r ? r.getAttribute(_t.draggableId) : null;
}
function Bh(e, t) {
  let r = `[${Ci.contextId}="${e}"]`,
    i = wl(document, r).find((o) => o.getAttribute(Ci.id) === t);
  return !i || !sr(i) ? null : i;
}
function Fh(e) {
  e.preventDefault();
}
function zr({ expected: e, phase: t, isLockActive: r, shouldWarn: s }) {
  return !(!r() || e !== t);
}
function Al({ lockAPI: e, store: t, registry: r, draggableId: s }) {
  if (e.isClaimed()) return !1;
  let i = r.draggable.findById(s);
  return !(!i || !i.options.isEnabled || !Sl(t.getState(), s));
}
function Nh({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: s,
  draggableId: i,
  forceSensorStop: o,
  sourceEvent: n,
}) {
  if (!Al({ lockAPI: e, store: r, registry: s, draggableId: i })) return null;
  let l = s.draggable.getById(i),
    c = Bh(t, l.descriptor.id);
  if (!c || (n && !l.options.canDragInteractiveElements && Wh(c, n)))
    return null;
  let p = e.claim(o || ze),
    u = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(p);
  }
  function f(x, D) {
    zr({ expected: x, phase: u, isLockActive: m, shouldWarn: !0 }) &&
      r.dispatch(D());
  }
  let g = f.bind(null, "DRAGGING");
  function h(x) {
    function D() {
      e.release(), (u = "COMPLETED");
    }
    u !== "PRE_DRAG" && (D(), _(!1)),
      r.dispatch(um(x.liftActionArgs)),
      (u = "DRAGGING");
    function H(k, de = { shouldBlockNextClick: !1 }) {
      if ((x.cleanup(), de.shouldBlockNextClick)) {
        let V = Se(window, [
          {
            eventName: "click",
            fn: Fh,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(V);
      }
      D(), r.dispatch(fl({ reason: k }));
    }
    return {
      isActive: () =>
        zr({ expected: "DRAGGING", phase: u, isLockActive: m, shouldWarn: !1 }),
      shouldRespectForcePress: d,
      drop: (k) => H("DROP", k),
      cancel: (k) => H("CANCEL", k),
      ...x.actions,
    };
  }
  function C(x) {
    let D = ft((k) => {
      g(() => ml({ client: k }));
    });
    return {
      ...h({
        liftActionArgs: { id: i, clientSelection: x, movementMode: "FLUID" },
        cleanup: () => D.cancel(),
        actions: { move: D },
      }),
      move: D,
    };
  }
  function S() {
    let x = {
      moveUp: () => g(ym),
      moveRight: () => g(Cm),
      moveDown: () => g(vm),
      moveLeft: () => g(Sm),
    };
    return h({
      liftActionArgs: { id: i, clientSelection: Rh(c), movementMode: "SNAP" },
      cleanup: ze,
      actions: x,
    });
  }
  function P() {
    zr({ expected: "PRE_DRAG", phase: u, isLockActive: m, shouldWarn: !0 }) &&
      e.release();
  }
  return {
    isActive: () =>
      zr({ expected: "PRE_DRAG", phase: u, isLockActive: m, shouldWarn: !1 }),
    shouldRespectForcePress: d,
    fluidLift: C,
    snapLift: S,
    abort: P,
  };
}
var Oh = [dh, hh, vh];
function Ah({
  contextId: e,
  store: t,
  registry: r,
  customSensors: s,
  enableDefaultSensors: i,
}) {
  let o = [...(i ? Oh : []), ...(s || [])],
    n = (0, v.useState)(() => Yf())[0],
    a = I(
      function (h, C) {
        Xt(h) && !Xt(C) && n.tryAbandon();
      },
      [n],
    );
  fe(
    function () {
      let h = t.getState();
      return t.subscribe(() => {
        let S = t.getState();
        a(h, S), (h = S);
      });
    },
    [n, t, a],
  ),
    fe(() => n.tryAbandon, [n.tryAbandon]);
  let l = I(
      (g) => Al({ lockAPI: n, registry: r, store: t, draggableId: g }),
      [n, r, t],
    ),
    c = I(
      (g, h, C) =>
        Nh({
          lockAPI: n,
          registry: r,
          contextId: e,
          store: t,
          draggableId: g,
          forceSensorStop: h || null,
          sourceEvent: C && C.sourceEvent ? C.sourceEvent : null,
        }),
      [e, n, r, t],
    ),
    p = I((g) => Eh(e, g), [e]),
    u = I(
      (g) => {
        let h = r.draggable.findById(g);
        return h ? h.options : null;
      },
      [r.draggable],
    ),
    d = I(
      function () {
        n.isClaimed() &&
          (n.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Bi()));
      },
      [n, t],
    ),
    m = I(() => n.isClaimed(), [n]),
    f = F(
      () => ({
        canGetLock: l,
        tryGetLock: c,
        findClosestDraggableId: p,
        findOptionsForDraggable: u,
        tryReleaseLock: d,
        isLockClaimed: m,
      }),
      [l, c, p, u, d, m],
    );
  Ch(o);
  for (let g = 0; g < o.length; g++) o[g](f);
}
var Th = (e) => ({
    onBeforeCapture: (t) => {
      let r = () => {
        e.onBeforeCapture && e.onBeforeCapture(t);
      };
      v.default.version.startsWith("16") || v.default.version.startsWith("17")
        ? r()
        : (0, Jt.flushSync)(r);
    },
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragEnd: e.onDragEnd,
    onDragUpdate: e.onDragUpdate,
  }),
  Mh = (e) => ({
    ...Kt,
    ...e.autoScrollerOptions,
    durationDampening: { ...Kt.durationDampening, ...e.autoScrollerOptions },
  });
function zt(e) {
  return e.current || _(!1), e.current;
}
function Gh(e) {
  let {
      contextId: t,
      setCallbacks: r,
      sensors: s,
      nonce: i,
      dragHandleUsageInstructions: o,
    } = e,
    n = (0, v.useRef)(null);
  Kf();
  let a = ki(e),
    l = I(() => Th(a.current), [a]),
    c = I(() => Mh(a.current), [a]),
    p = Gf(t),
    u = Vf({ contextId: t, text: o }),
    d = Bf(t, i),
    m = I((V) => {
      zt(n).dispatch(V);
    }, []),
    f = F(
      () =>
        $s(
          {
            publishWhileDragging: pm,
            updateDroppableScroll: fm,
            updateDroppableIsEnabled: hm,
            updateDroppableIsCombineEnabled: gm,
            collectionStarting: mm,
          },
          m,
        ),
      [m],
    ),
    g = Of(),
    h = F(() => lf(g, f), [g, f]),
    C = F(
      () =>
        If({
          scrollWindow: cf,
          scrollDroppable: h.scrollDroppable,
          getAutoScrollerOptions: c,
          ...$s({ move: ml }, m),
        }),
      [h.scrollDroppable, m, c],
    ),
    S = Ff(t),
    P = F(
      () =>
        sf({
          announce: p,
          autoScroller: C,
          dimensionMarshal: h,
          focusMarshal: S,
          getResponders: l,
          styleMarshal: d,
        }),
      [p, C, h, S, l, d],
    );
  n.current = P;
  let w = I(() => {
      let V = zt(n);
      V.getState().phase !== "IDLE" && V.dispatch(Bi());
    }, []),
    x = I(() => {
      let V = zt(n).getState();
      return V.phase === "DROP_ANIMATING"
        ? !0
        : V.phase === "IDLE"
          ? !1
          : V.isDragging;
    }, []),
    D = F(() => ({ isDragging: x, tryAbort: w }), [x, w]);
  r(D);
  let H = I((V) => Sl(zt(n).getState(), V), []),
    k = I(() => Je(zt(n).getState()), []),
    de = F(
      () => ({
        marshal: h,
        focus: S,
        contextId: t,
        canLift: H,
        isMovementAllowed: k,
        dragHandleUsageInstructionsId: u,
        registry: g,
      }),
      [t, h, u, S, H, k, g],
    );
  return (
    Ah({
      contextId: t,
      store: P,
      registry: g,
      customSensors: s || null,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    (0, v.useEffect)(() => w, [w]),
    v.default.createElement(
      Jr.Provider,
      { value: de },
      v.default.createElement(ri, { context: Gi, store: P }, e.children),
    )
  );
}
var Lh = 0;
function kh() {
  return F(() => `${Lh++}`, []);
}
function Hh() {
  return v.default.useId();
}
var zh = "useId" in v.default ? Hh : kh;
function Tl(e) {
  let t = zh(),
    r = e.dragHandleUsageInstructions || jr.dragHandleUsageInstructions;
  return v.default.createElement(gi, null, (s) =>
    v.default.createElement(
      Gh,
      {
        nonce: e.nonce,
        contextId: t,
        setCallbacks: s,
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
var Ga = { dragging: 5e3, dropAnimating: 4500 },
  Vh = (e, t) => (t ? jt.drop(t.duration) : e ? jt.snap : jt.fluid),
  jh = (e, t) => {
    if (e) return t ? Qt.opacity.drop : Qt.opacity.combining;
  },
  Uh = (e) =>
    e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function qh(e) {
  let r = e.dimension.client,
    { offset: s, combineWith: i, dropping: o } = e,
    n = !!i,
    a = Uh(e),
    l = !!o,
    c = l ? yi.drop(s, n) : yi.moveTo(s);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Vh(a, o),
    transform: c,
    opacity: jh(n, l),
    zIndex: l ? Ga.dropAnimating : Ga.dragging,
    pointerEvents: "none",
  };
}
function $h(e) {
  return {
    transform: yi.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none",
  };
}
function Qh(e) {
  return e.type === "DRAGGING" ? qh(e) : $h(e);
}
function Kh(e, t, r = re) {
  let s = window.getComputedStyle(t),
    i = t.getBoundingClientRect(),
    o = ii(i, s),
    n = Lt(o, r),
    a = { client: o, tagName: t.tagName.toLowerCase(), display: s.display },
    l = { x: o.marginBox.width, y: o.marginBox.height };
  return { descriptor: e, placeholder: a, displaceBy: l, client: o, page: n };
}
function Yh(e) {
  let t = Li("draggable"),
    {
      descriptor: r,
      registry: s,
      getDraggableRef: i,
      canDragInteractiveElements: o,
      shouldRespectForcePress: n,
      isEnabled: a,
    } = e,
    l = F(
      () => ({
        canDragInteractiveElements: o,
        shouldRespectForcePress: n,
        isEnabled: a,
      }),
      [o, a, n],
    ),
    c = I(
      (m) => {
        let f = i();
        return f || _(!1), Kh(r, f, m);
      },
      [r, i],
    ),
    p = F(
      () => ({ uniqueId: t, descriptor: r, options: l, getDimension: c }),
      [r, c, l, t],
    ),
    u = (0, v.useRef)(p),
    d = (0, v.useRef)(!0);
  fe(
    () => (
      s.draggable.register(u.current), () => s.draggable.unregister(u.current)
    ),
    [s.draggable],
  ),
    fe(() => {
      if (d.current) {
        d.current = !1;
        return;
      }
      let m = u.current;
      (u.current = p), s.draggable.update(p, m);
    }, [p, s.draggable]);
}
var zi = v.default.createContext(null);
function Ml(e) {
  (e && sr(e)) || _(!1);
}
function Xh(e, t, r) {
  ir(() => {
    function s(o) {
      return `Draggable[id: ${o}]: `;
    }
    let i = e.draggableId;
    i || _(!1),
      typeof i != "string" && _(!1),
      Number.isInteger(e.index) || _(!1),
      e.mapped.type !== "DRAGGING" &&
        (Ml(r()), e.isEnabled && (xl(t, i) || _(!1)));
  });
}
function Jh(e) {}
function $r(e) {
  let t = (0, v.useContext)(e);
  return t || _(!1), t;
}
function Zh(e) {
  e.preventDefault();
}
var eg = (e) => {
    let t = (0, v.useRef)(null),
      r = I((D = null) => {
        t.current = D;
      }, []),
      s = I(() => t.current, []),
      { contextId: i, dragHandleUsageInstructionsId: o, registry: n } = $r(Jr),
      { type: a, droppableId: l } = $r(zi),
      c = F(
        () => ({ id: e.draggableId, index: e.index, type: a, droppableId: l }),
        [e.draggableId, e.index, a, l],
      ),
      {
        children: p,
        draggableId: u,
        isEnabled: d,
        shouldRespectForcePress: m,
        canDragInteractiveElements: f,
        isClone: g,
        mapped: h,
        dropAnimationFinished: C,
      } = e;
    if ((Xh(e, i, s), Jh(g), !g)) {
      let D = F(
        () => ({
          descriptor: c,
          registry: n,
          getDraggableRef: s,
          canDragInteractiveElements: f,
          shouldRespectForcePress: m,
          isEnabled: d,
        }),
        [c, n, s, f, m, d],
      );
      Yh(D);
    }
    let S = F(
        () =>
          d
            ? {
                tabIndex: 0,
                role: "button",
                "aria-describedby": o,
                "data-rfd-drag-handle-draggable-id": u,
                "data-rfd-drag-handle-context-id": i,
                draggable: !1,
                onDragStart: Zh,
              }
            : null,
        [i, o, u, d],
      ),
      P = I(
        (D) => {
          h.type === "DRAGGING" &&
            h.dropping &&
            D.propertyName === "transform" &&
            (v.default.version.startsWith("16") ||
            v.default.version.startsWith("17")
              ? C()
              : (0, Jt.flushSync)(C));
        },
        [C, h],
      ),
      w = F(() => {
        let D = Qh(h),
          H = h.type === "DRAGGING" && h.dropping ? P : void 0;
        return {
          innerRef: r,
          draggableProps: {
            "data-rfd-draggable-context-id": i,
            "data-rfd-draggable-id": u,
            style: D,
            onTransitionEnd: H,
          },
          dragHandleProps: S,
        };
      }, [i, S, u, h, P, r]),
      x = F(
        () => ({
          draggableId: c.id,
          type: c.type,
          source: { index: c.index, droppableId: c.droppableId },
        }),
        [c.droppableId, c.id, c.index, c.type],
      );
    return v.default.createElement(
      v.default.Fragment,
      null,
      p(w, h.snapshot, x),
    );
  },
  tg = eg,
  Gl = (e, t) => e === t,
  Ll = (e) => {
    let { combine: t, destination: r } = e;
    return r ? r.droppableId : t ? t.droppableId : null;
  },
  rg = (e) => (e.combine ? e.combine.draggableId : null),
  sg = (e) =>
    e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function ig() {
  let e = ee((i, o) => ({ x: i, y: o })),
    t = ee((i, o, n = null, a = null, l = null) => ({
      isDragging: !0,
      isClone: o,
      isDropAnimating: !!l,
      dropAnimation: l,
      mode: i,
      draggingOver: n,
      combineWith: a,
      combineTargetFor: null,
    })),
    r = ee((i, o, n, a, l = null, c = null, p = null) => ({
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: l,
        combineWith: c,
        mode: o,
        offset: i,
        dimension: n,
        forceShouldAnimate: p,
        snapshot: t(o, a, l, c, null),
      },
    }));
  return (i, o) => {
    if (Xt(i)) {
      if (i.critical.draggable.id !== o.draggableId) return null;
      let n = i.current.client.offset,
        a = i.dimensions.draggables[o.draggableId],
        l = me(i.impact),
        c = sg(i.impact),
        p = i.forceShouldAnimate;
      return r(e(n.x, n.y), i.movementMode, a, o.isClone, l, c, p);
    }
    if (i.phase === "DROP_ANIMATING") {
      let n = i.completed;
      if (n.result.draggableId !== o.draggableId) return null;
      let a = o.isClone,
        l = i.dimensions.draggables[o.draggableId],
        c = n.result,
        p = c.mode,
        u = Ll(c),
        d = rg(c),
        f = {
          duration: i.dropDuration,
          curve: Ni.drop,
          moveTo: i.newHomeClientOffset,
          opacity: d ? Qt.opacity.drop : null,
          scale: d ? Qt.scale.drop : null,
        };
      return {
        mapped: {
          type: "DRAGGING",
          offset: i.newHomeClientOffset,
          dimension: l,
          dropping: f,
          draggingOver: u,
          combineWith: d,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, a, u, d, f),
        },
      };
    }
    return null;
  };
}
function kl(e = null) {
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
var og = {
  mapped: {
    type: "SECONDARY",
    offset: re,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: kl(null),
  },
};
function ng() {
  let e = ee((n, a) => ({ x: n, y: a })),
    t = ee(kl),
    r = ee((n, a = null, l) => ({
      mapped: {
        type: "SECONDARY",
        offset: n,
        combineTargetFor: a,
        shouldAnimateDisplacement: l,
        snapshot: t(a),
      },
    })),
    s = (n) => (n ? r(re, n, !0) : null),
    i = (n, a, l, c) => {
      let p = l.displaced.visible[n],
        u = !!(c.inVirtualList && c.effected[n]),
        d = Kr(l),
        m = d && d.draggableId === n ? a : null;
      if (!p) {
        if (!u) return s(m);
        if (l.displaced.invisible[n]) return null;
        let h = bt(c.displacedBy.point),
          C = e(h.x, h.y);
        return r(C, m, !0);
      }
      if (u) return s(m);
      let f = l.displacedBy.point,
        g = e(f.x, f.y);
      return r(g, m, p.shouldAnimate);
    };
  return (n, a) => {
    if (Xt(n))
      return n.critical.draggable.id === a.draggableId
        ? null
        : i(a.draggableId, n.critical.draggable.id, n.impact, n.afterCritical);
    if (n.phase === "DROP_ANIMATING") {
      let l = n.completed;
      return l.result.draggableId === a.draggableId
        ? null
        : i(a.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
var ag = () => {
    let e = ig(),
      t = ng();
    return (s, i) => e(s, i) || t(s, i) || og;
  },
  lg = { dropAnimationFinished: hl },
  cg = Gr(ag, lg, null, { context: Gi, areStatePropsEqual: Gl })(tg),
  ug = cg;
function Hl(e) {
  return $r(zi).isUsingCloneFor === e.draggableId && !e.isClone
    ? null
    : v.default.createElement(ug, e);
}
function zl(e) {
  let t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    r = !!e.disableInteractiveElementBlocking,
    s = !!e.shouldRespectForcePress;
  return v.default.createElement(
    Hl,
    Ae({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: r,
      shouldRespectForcePress: s,
    }),
  );
}
var Vi = (e) => (t) => e === t,
  dg = Vi("scroll"),
  pg = Vi("auto"),
  mg = Vi("visible"),
  La = (e, t) => t(e.overflowX) || t(e.overflowY),
  fg = (e, t) => t(e.overflowX) && t(e.overflowY),
  Vl = (e) => {
    let t = window.getComputedStyle(e),
      r = { overflowX: t.overflowX, overflowY: t.overflowY };
    return La(r, dg) || La(r, pg);
  },
  hg = () => !1,
  jl = (e) =>
    e == null
      ? null
      : e === document.body
        ? hg()
          ? e
          : null
        : e === document.documentElement
          ? null
          : Vl(e)
            ? e
            : jl(e.parentElement);
var Si = (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
  Ul = (e) =>
    e
      ? window.getComputedStyle(e).position === "fixed"
        ? !0
        : Ul(e.parentElement)
      : !1,
  gg = (e) => {
    let t = jl(e),
      r = Ul(e);
    return { closestScrollable: t, isFixedOnPage: r };
  },
  _g = ({
    descriptor: e,
    isEnabled: t,
    isCombineEnabled: r,
    isFixedOnPage: s,
    direction: i,
    client: o,
    page: n,
    closest: a,
  }) => {
    let l = (() => {
        if (!a) return null;
        let { scrollSize: d, client: m } = a,
          f = yl({
            scrollHeight: d.scrollHeight,
            scrollWidth: d.scrollWidth,
            height: m.paddingBox.height,
            width: m.paddingBox.width,
          });
        return {
          pageMarginBox: a.page.marginBox,
          frameClient: m,
          scrollSize: d,
          shouldClipSubject: a.shouldClipSubject,
          scroll: {
            initial: a.scroll,
            current: a.scroll,
            max: f,
            diff: { value: re, displacement: re },
          },
        };
      })(),
      c = i === "vertical" ? wi : Ja,
      p = ht({ page: n, withPlaceholder: null, axis: c, frame: l });
    return {
      descriptor: e,
      isCombineEnabled: r,
      isFixedOnPage: s,
      axis: c,
      isEnabled: t,
      client: o,
      page: n,
      frame: l,
      subject: p,
    };
  },
  bg = (e, t) => {
    let r = oi(e);
    if (!t || e !== t) return r;
    let s = r.paddingBox.top - t.scrollTop,
      i = r.paddingBox.left - t.scrollLeft,
      o = s + t.scrollHeight,
      n = i + t.scrollWidth,
      l = Lr({ top: s, right: n, bottom: o, left: i }, r.border);
    return kr({
      borderBox: l,
      margin: r.margin,
      border: r.border,
      padding: r.padding,
    });
  },
  yg = ({
    ref: e,
    descriptor: t,
    env: r,
    windowScroll: s,
    direction: i,
    isDropDisabled: o,
    isCombineEnabled: n,
    shouldClipSubject: a,
  }) => {
    let l = r.closestScrollable,
      c = bg(e, l),
      p = Lt(c, s),
      u = (() => {
        if (!l) return null;
        let m = oi(l),
          f = { scrollHeight: l.scrollHeight, scrollWidth: l.scrollWidth };
        return {
          client: m,
          page: Lt(m, s),
          scroll: Si(l),
          scrollSize: f,
          shouldClipSubject: a,
        };
      })();
    return _g({
      descriptor: t,
      isEnabled: !o,
      isCombineEnabled: n,
      isFixedOnPage: r.isFixedOnPage,
      direction: i,
      client: c,
      page: p,
      closest: u,
    });
  },
  vg = { passive: !1 },
  Cg = { passive: !0 },
  ka = (e) => (e.shouldPublishImmediately ? vg : Cg),
  Vr = (e) => (e && e.env.closestScrollable) || null;
function Sg(e) {
  let t = (0, v.useRef)(null),
    r = $r(Jr),
    s = Li("droppable"),
    { registry: i, marshal: o } = r,
    n = ki(e),
    a = F(
      () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
      [e.droppableId, e.mode, e.type],
    ),
    l = (0, v.useRef)(a),
    c = F(
      () =>
        ee((w, x) => {
          t.current || _(!1);
          let D = { x: w, y: x };
          o.updateDroppableScroll(a.id, D);
        }),
      [a.id, o],
    ),
    p = I(() => {
      let w = t.current;
      return !w || !w.env.closestScrollable ? re : Si(w.env.closestScrollable);
    }, []),
    u = I(() => {
      let w = p();
      c(w.x, w.y);
    }, [p, c]),
    d = F(() => ft(u), [u]),
    m = I(() => {
      let w = t.current,
        x = Vr(w);
      if (((w && x) || _(!1), w.scrollOptions.shouldPublishImmediately)) {
        u();
        return;
      }
      d();
    }, [d, u]),
    f = I(
      (w, x) => {
        t.current && _(!1);
        let D = n.current,
          H = D.getDroppableRef();
        H || _(!1);
        let k = gg(H),
          de = { ref: H, descriptor: a, env: k, scrollOptions: x };
        t.current = de;
        let V = yg({
            ref: H,
            descriptor: a,
            env: k,
            windowScroll: w,
            direction: D.direction,
            isDropDisabled: D.isDropDisabled,
            isCombineEnabled: D.isCombineEnabled,
            shouldClipSubject: !D.ignoreContainerClipping,
          }),
          _e = k.closestScrollable;
        return (
          _e &&
            (_e.setAttribute(Na.contextId, r.contextId),
            _e.addEventListener("scroll", m, ka(de.scrollOptions))),
          V
        );
      },
      [r.contextId, a, m, n],
    ),
    g = I(() => {
      let w = t.current,
        x = Vr(w);
      return (w && x) || _(!1), Si(x);
    }, []),
    h = I(() => {
      let w = t.current;
      w || _(!1);
      let x = Vr(w);
      (t.current = null),
        x &&
          (d.cancel(),
          x.removeAttribute(Na.contextId),
          x.removeEventListener("scroll", m, ka(w.scrollOptions)));
    }, [m, d]),
    C = I((w) => {
      let x = t.current;
      x || _(!1);
      let D = Vr(x);
      D || _(!1), (D.scrollTop += w.y), (D.scrollLeft += w.x);
    }, []),
    S = F(
      () => ({
        getDimensionAndWatchScroll: f,
        getScrollWhileDragging: g,
        dragStopped: h,
        scroll: C,
      }),
      [h, f, g, C],
    ),
    P = F(() => ({ uniqueId: s, descriptor: a, callbacks: S }), [S, a, s]);
  fe(
    () => (
      (l.current = P.descriptor),
      i.droppable.register(P),
      () => {
        t.current && h(), i.droppable.unregister(P);
      }
    ),
    [S, a, h, P, o, i.droppable],
  ),
    fe(() => {
      t.current && o.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
    }, [e.isDropDisabled, o]),
    fe(() => {
      t.current &&
        o.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
    }, [e.isCombineEnabled, o]);
}
function pi() {}
var Ha = { width: 0, height: 0, margin: ip },
  Wg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) =>
    e || r === "close"
      ? Ha
      : {
          height: t.client.borderBox.height,
          width: t.client.borderBox.width,
          margin: t.client.margin,
        },
  Rg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) => {
    let s = Wg({ isAnimatingOpenOnMount: e, placeholder: t, animate: r });
    return {
      display: t.display,
      boxSizing: "border-box",
      width: s.width,
      height: s.height,
      marginTop: s.margin.top,
      marginRight: s.margin.right,
      marginBottom: s.margin.bottom,
      marginLeft: s.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: r !== "none" ? jt.placeholder : null,
    };
  },
  Ig = (e) => {
    let t = (0, v.useRef)(null),
      r = I(() => {
        t.current && (clearTimeout(t.current), (t.current = null));
      }, []),
      { animate: s, onTransitionEnd: i, onClose: o, contextId: n } = e,
      [a, l] = (0, v.useState)(e.animate === "open");
    (0, v.useEffect)(
      () =>
        a
          ? s !== "open"
            ? (r(), l(!1), pi)
            : t.current
              ? pi
              : ((t.current = setTimeout(() => {
                  (t.current = null), l(!1);
                })),
                r)
          : pi,
      [s, a, r],
    );
    let c = I(
        (u) => {
          u.propertyName === "height" && (i(), s === "close" && o());
        },
        [s, o, i],
      ),
      p = Rg({
        isAnimatingOpenOnMount: a,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return v.default.createElement(e.placeholder.tagName, {
      style: p,
      "data-rfd-placeholder-context-id": n,
      onTransitionEnd: c,
      ref: e.innerRef,
    });
  },
  wg = v.default.memo(Ig);
function mi(e) {
  return typeof e == "boolean";
}
function fi(e, t) {
  t.forEach((r) => r(e));
}
var Pg = [
    function ({ props: t }) {
      t.droppableId || _(!1), typeof t.droppableId != "string" && _(!1);
    },
    function ({ props: t }) {
      mi(t.isDropDisabled) || _(!1),
        mi(t.isCombineEnabled) || _(!1),
        mi(t.ignoreContainerClipping) || _(!1);
    },
    function ({ getDroppableRef: t }) {
      Ml(t());
    },
  ],
  xg = [
    function ({ props: t, getPlaceholderRef: r }) {
      !t.placeholder || r();
    },
  ],
  Dg = [
    function ({ props: t }) {
      t.renderClone || _(!1);
    },
    function ({ getPlaceholderRef: t }) {
      t() && _(!1);
    },
  ];
function Eg(e) {
  ir(() => {
    fi(e, Pg),
      e.props.mode === "standard" && fi(e, xg),
      e.props.mode === "virtual" && fi(e, Dg);
  });
}
var Wi = class extends v.default.PureComponent {
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
  Bg = (e) => {
    let t = (0, v.useContext)(Jr);
    t || _(!1);
    let { contextId: r, isMovementAllowed: s } = t,
      i = (0, v.useRef)(null),
      o = (0, v.useRef)(null),
      {
        children: n,
        droppableId: a,
        type: l,
        mode: c,
        direction: p,
        ignoreContainerClipping: u,
        isDropDisabled: d,
        isCombineEnabled: m,
        snapshot: f,
        useClone: g,
        updateViewportMaxScroll: h,
        getContainerForClone: C,
      } = e,
      S = I(() => i.current, []),
      P = I(($ = null) => {
        i.current = $;
      }, []),
      w = I(() => o.current, []),
      x = I(($ = null) => {
        o.current = $;
      }, []);
    Eg({ props: e, getDroppableRef: S, getPlaceholderRef: w });
    let D = I(() => {
      s() && h({ maxScroll: Cl() });
    }, [s, h]);
    Sg({
      droppableId: a,
      type: l,
      mode: c,
      direction: p,
      isDropDisabled: d,
      isCombineEnabled: m,
      ignoreContainerClipping: u,
      getDroppableRef: S,
    });
    let H = F(
        () =>
          v.default.createElement(
            Wi,
            { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
            ({ onClose: $, data: Ne, animate: Rt }) =>
              v.default.createElement(wg, {
                placeholder: Ne,
                onClose: $,
                innerRef: x,
                animate: Rt,
                contextId: r,
                onTransitionEnd: D,
              }),
          ),
        [r, D, e.placeholder, e.shouldAnimatePlaceholder, x],
      ),
      k = F(
        () => ({
          innerRef: P,
          placeholder: H,
          droppableProps: {
            "data-rfd-droppable-id": a,
            "data-rfd-droppable-context-id": r,
          },
        }),
        [r, a, H, P],
      ),
      de = g ? g.dragging.draggableId : null,
      V = F(
        () => ({ droppableId: a, type: l, isUsingCloneFor: de }),
        [a, de, l],
      );
    function _e() {
      if (!g) return null;
      let { dragging: $, render: Ne } = g,
        Rt = v.default.createElement(
          Hl,
          {
            draggableId: $.draggableId,
            index: $.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (we, mr) => Ne(we, mr, $),
        );
      return Jt.default.createPortal(Rt, C());
    }
    return v.default.createElement(zi.Provider, { value: V }, n(k, f), _e());
  },
  Fg = Bg;
function Ng() {
  return document.body || _(!1), document.body;
}
var za = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Ng,
  },
  ql = (e) => {
    let t = { ...e },
      r;
    for (r in za) e[r] === void 0 && (t = { ...t, [r]: za[r] });
    return t;
  },
  hi = (e, t) => e === t.droppable.type,
  Va = (e, t) => t.draggables[e.draggable.id],
  Og = () => {
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
      r = ee((o) => ({
        draggableId: o.id,
        type: o.type,
        source: { index: o.index, droppableId: o.droppableId },
      })),
      s = ee((o, n, a, l, c, p) => {
        let u = c.descriptor.id;
        if (c.descriptor.droppableId === o) {
          let f = p ? { render: p, dragging: r(c.descriptor) } : null,
            g = {
              isDraggingOver: a,
              draggingOverWith: a ? u : null,
              draggingFromThisWith: u,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: c.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: g,
            useClone: f,
          };
        }
        if (!n) return t;
        if (!l) return e;
        let m = {
          isDraggingOver: a,
          draggingOverWith: u,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: c.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: m,
          useClone: null,
        };
      });
    return (o, n) => {
      let a = ql(n),
        l = a.droppableId,
        c = a.type,
        p = !a.isDropDisabled,
        u = a.renderClone;
      if (Xt(o)) {
        let d = o.critical;
        if (!hi(c, d)) return t;
        let m = Va(d, o.dimensions),
          f = me(o.impact) === l;
        return s(l, p, f, f, m, u);
      }
      if (o.phase === "DROP_ANIMATING") {
        let d = o.completed;
        if (!hi(c, d.critical)) return t;
        let m = Va(d.critical, o.dimensions);
        return s(l, p, Ll(d.result) === l, me(d.impact) === l, m, u);
      }
      if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
        let d = o.completed;
        if (!hi(c, d.critical)) return t;
        let m = me(d.impact) === l,
          f = !!(d.impact.at && d.impact.at.type === "COMBINE"),
          g = d.critical.droppable.id === l;
        return m ? (f ? e : t) : g ? e : t;
      }
      return t;
    };
  },
  Ag = { updateViewportMaxScroll: bm },
  Tg = Gr(Og, Ag, (e, t, r) => ({ ...ql(r), ...e, ...t }), {
    context: Gi,
    areStatePropsEqual: Gl,
  })(Fg),
  $l = Tg;
function es(e) {
  let t = Eo(),
    r = Do();
  return be(Mg(t.GetAnonymousServiceTransport(), r, e));
}
function Mg(e, t, r) {
  return {
    queryKey: ["LocalizedTagNames", r],
    queryFn: async () => {
      let s = `LocalizedTagNames2_${r}`,
        i = await t.GetObject(s),
        o = xe.Init(tn);
      o.Body().set_language(r),
        i?.version_hash && o.Body().set_have_version_hash(i.version_hash);
      let n = await rn.GetTagList(e, o),
        a;
      if (n.GetEResult() == 1)
        (a = n.Body().toObject()), t && t.StoreObject(s, a);
      else if (n.GetEResult() == 29) a = i || void 0;
      else if (i)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (a = i);
      else throw n.GetErrorMessage();
      let l = {};
      return (a?.tags || []).forEach(({ tagid: p, name: u }) => (l[p] = u)), l;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function Ql(e, t) {
  let { data: r } = es(t);
  return r && r[e];
}
function or() {
  let e = br(),
    t = xo();
  return be(Gg(t, e));
}
function Gg(e, t) {
  let { country: r } = t;
  return {
    queryKey: ["StoreBrowsePriceStops", r],
    queryFn: async () => Lg(e, r),
    staleTime: 24 * 60 * 60 * 1e3,
  };
}
async function Lg(e, t) {
  let r = xe.Init(_o);
  r.Body().set_country_code(t);
  let s = await bo.GetPriceStops(e, r);
  if (!s.BSuccess()) throw `Error loading price stops: ${s.GetErrorMessage()}`;
  return s.Body().toObject().price_stops || [];
}
var eo = y(ke(), 1),
  z = y(j(), 1);
var he = y(j(), 1);
var Xl = y(E(), 1),
  nr = he.createContext(void 0);
function Kl(e) {
  let { steamid: t, children: r } = e,
    [s, i] = he.useState(() => Pn()),
    o = Oo(),
    n = he.useCallback((l) => {
      xn(l), i(l);
    }, []),
    a = he.useMemo(
      () => ({
        steamid: t,
        bViewingOwnWishlist:
          !!o && new bs(o).GetAccountID() == new bs(t).GetAccountID(),
        bCompactView: s,
        setCompactView: n,
      }),
      [t, o, s, n],
    );
  return (0, Xl.jsx)(nr.Provider, { value: a, children: r });
}
function tt() {
  return he.useContext(nr).bViewingOwnWishlist;
}
function ar() {
  return he.useContext(nr).steamid;
}
function Re() {
  return he.useContext(nr).bCompactView;
}
function Yl() {
  return he.useContext(nr).setCompactView;
}
function ji(e, t) {
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
async function kg(e, t, r, s, i, o) {
  let n = xe.Init(Nt);
  n.Body().set_steamid(r),
    Vo(t, n),
    s &&
      (jo(n, s.data_request),
      n.Body().set_start_index(s.page_start || 0),
      n.Body().set_page_size(s.page_size)),
    i && n.Body().set_sort_order(i),
    o && n.Body().set_filters(Ft.fromObject(o));
  let a = await ut.GetWishlistSortedFiltered(e, n);
  if (!a.BSuccess())
    throw new po(
      a.GetEResult(),
      `Error loading sorted/filtered wishlist: ${a.GetErrorMessage()}`,
    );
  let l;
  return (
    s
      ? (l = Hg(s.cacheStoreItemData, s.data_request, a.Body().items() || []))
      : (l = a.Body().toObject().items || []),
    { steamid: r, items: l }
  );
}
function Hg(e, t, r) {
  let s = [];
  return (
    r.forEach((i) => {
      i.store_item(!1) && e(i.store_item(), t);
      let o = i.toObject();
      delete o.store_item, s.push(o);
    }),
    s
  );
}
function Ui(e, t = 0, r = {}) {
  return ["WishlistSortedFiltered", e, t, r];
}
function qi(e, t, r, s, i = 0, o = {}) {
  return {
    queryKey: Ui(r, i, o),
    queryFn: () => kg(e, t, r, s, i, o),
    staleTime: 10 * 60 * 1e3,
  };
}
function Jl(e, t = 0, r = {}) {
  let s = Ie(),
    i = br(),
    o = Uo(),
    n = Re();
  return be(qi(s, i, e, ji(n, o), t, r));
}
function Zl(e, t, r) {
  e.setQueryData(Ui(t), (s) => s && { ...s, items: r });
}
function ec(e, t) {
  e.invalidateQueries({ queryKey: Ui(t), exact: !1 });
}
var lr = y(j(), 1);
var tc = "/TB3SP4DA.png";
var rc = "s3BAyjuoPYA-";
var sc = "wgHGKOWFf8c-";
var ic = "dIPGtN9kABg-";
var rt = y(E(), 1);
function oc(e) {
  let { dragHandleProps: t, index: r, updateWishlistPriority: s } = e,
    [i, o] = lr.useState(void 0),
    n = lr.useCallback((c) => {
      o(c.currentTarget.value);
    }, []),
    a = lr.useCallback(
      (c) => {
        let p = parseInt(c.currentTarget.value);
        p && p - 1 != r && s(r, p - 1), o(void 0);
      },
      [r, s],
    ),
    l = i !== void 0 ? i : r + 1;
  return (0, rt.jsxs)("div", {
    className: rc,
    children: [
      (0, rt.jsx)("div", {
        className: sc,
        ...t,
        children: (0, rt.jsx)("img", { src: gr(tc), alt: "" }),
      }),
      (0, rt.jsx)("div", {
        className: ic,
        children: (0, rt.jsx)("input", {
          type: "text",
          value: l,
          onChange: n,
          onBlur: a,
        }),
      }),
    ],
  });
}
var Me = y(j());
var jg = "unUserdataVersion";
async function nc(e, t) {
  let r = Number.parseInt(window.localStorage.getItem(jg) || "0"),
    s = `${ao.STORE_BASE_URL}dynamicstore/userdata/?id=${t}&cc=${xt.country_code}`;
  return (
    r && (s += `&v=${r}`), (await (await fetch(s)).json()).rgOwnedApps || []
  );
}
function ac() {
  let e = Ie(),
    t = xt.accountid;
  return be(Ug(e, t));
}
function Ug(e, t) {
  return {
    queryKey: cc(t),
    queryFn: async () => {
      if (!t) return new Set();
      let r = await nc(e, t);
      return new Set(r);
    },
    staleTime: 10 * 60 * 1e3,
  };
}
function lc() {
  let e = Le(),
    t = xt.accountid;
  return (r) => {
    e.setQueryData(cc(t), (s) => {
      if (s) return new Set([...s.values(), ...r]);
    });
  };
}
function cc(e) {
  return ["AccountOwnedApps", e ?? 0];
}
function uc(e) {
  let t = Ie(),
    r = lc();
  return nt({
    mutationFn: () => qg(t, e),
    onSuccess(s) {
      let [
        i,
        { packageids_added: o, appids_added: n, purchase_result_detail: a },
      ] = s;
      n && r(n);
    },
  });
}
async function qg(e, t) {
  let r = xe.Init(Mo);
  r.Body().set_item_id(go.fromObject(t));
  let s = await Go.AddFreeLicense(e, r);
  return [s.GetEResult(), s.Body().toObject()];
}
var ts = y(j(), 1);
var pc = y(E(), 1);
function dc(e) {
  let [t, r] = (0, ts.useState)(void 0),
    s = `${te.STORE_BASE_URL}login/${t ? `?redir=${encodeURIComponent(t)}` : ""}`;
  return (
    (0, ts.useEffect)(() => {
      r(location.href);
    }, []),
    (0, pc.jsx)(fn, {
      href: s,
      title: e.strToolTip,
      children: De.Localize("#Button_SignIn"),
    })
  );
}
var cr = y(E());
function rs(e) {
  let { itemid: t } = e,
    { bIsOwned: r, unAppID: s } = Qg(t);
  return Dt.logged_in
    ? r
      ? (0, cr.jsx)(hn, { appid: s })
      : (0, cr.jsx)($g, { itemid: t })
    : (0, cr.jsx)(dc, {
        strToolTip: De.Localize("#SignInToAddToLibrary_Tooltip"),
      });
}
function $g(e) {
  let { mutate: t } = uc(e.itemid);
  return (0, cr.jsx)(mn, {
    onClick: () => t,
    children: De.Localize("#AddToLibraryButton"),
  });
}
function Qg(e) {
  let { data: t } = Oe("appid" in e ? void 0 : e),
    { data: r } = ac(),
    s;
  return (
    "appid" in e ? (s = [e.appid]) : t && (s = t.included_appids),
    s === void 0 || r === void 0 || s.length == 0
      ? { bIsOwned: void 0 }
      : { bIsOwned: !s.some((i) => !r.has(i)), unAppID: s[0] }
  );
}
var ge = y(E()),
  Kg = Me.lazy(() => import("./cartmodal-5AOVKKPJ.js"));
function mc(e) {
  let { purchaseOption: t } = e;
  if (!t) return null;
  if (t.is_free_to_keep)
    return (0, ge.jsx)(rs, { itemid: { packageid: t.packageid } });
  if (t.packageid) return (0, ge.jsx)(Yg, { packageid: t.packageid });
  if (t.bundleid) return (0, ge.jsx)(Xg, { bundleid: t.bundleid });
  throw "Purchase option does not have package or bundle associated";
}
var Yg = Me.memo(function (t) {
    return fc(t.packageid, void 0);
  }),
  Xg = Me.memo(function (t) {
    return fc(void 0, t.bundleid);
  });
function fc(e, t) {
  let { data: r } = Lo(),
    [s, i] = Me.useState(void 0),
    o = Me.useMemo(() => ko(r, e, t), [r, e, t]),
    { mutate: n } = un(e, t, o);
  return (0, ge.jsxs)(ge.Fragment, {
    children: [
      s && (0, ge.jsx)(Kg, { lineItemIDs: s, closeCart: () => i(void 0) }),
      o
        ? (0, ge.jsx)(Jg, {})
        : (0, ge.jsx)(Zg, {
            addToCart: () => {
              n(void 0, { onSuccess: (a) => i(a) });
            },
          }),
    ],
  });
}
function Jg() {
  return (0, ge.jsx)(pn, {
    href: `${te.STORE_BASE_URL}cart/`,
    children: De.Localize("#AddToCartButton_InCart"),
  });
}
function Zg(e) {
  return (0, ge.jsx)(dn, {
    onClick: e.addToCart,
    children: De.Localize("#AddToCartButton_AddToCart"),
  });
}
var Ct = y(j());
function hc(e) {
  let { appID: t, feature: r, depth: s, children: i } = e,
    o = fo(r, s),
    n = zo(),
    [a, l] = Ct.default.useState(void 0),
    c = Ct.default.useCallback(
      (m) => {
        m.isIntersecting &&
          l((f) => (f?.appID == t && f.snr == o ? f : { appID: t, snr: o }));
      },
      [t, o],
    );
  (0, Ct.useEffect)(() => {
    a && n.AddImpression(a.appID, a.snr);
  }, [n, a]);
  let p = Ao(c),
    u = t && (!a || (a.appID != t && a.snr != o)),
    d = yo(i.ref, u ? p : void 0);
  return Ct.default.cloneElement(i, { ref: d });
}
var pr = y(ke(), 1),
  ot = y(j(), 1);
var ns = y(j(), 1);
var gc = "160px";
var _c = "20px";
var bc = "82px";
var yc = "8px";
var vc = "pAoL4PrPWdg-";
var ss = "XNnjz6jit-E-";
var Cc = "LSY1zV2DJSM-";
var Sc = "mYGhH-Z5fCw-";
var Wc = "Fuz2JeT4RfI-";
var Rc = "s5Uj2rl926U-";
var Ic = "FMRSvVtOAmQ-";
var wc = "oVvbc-NOBF8-";
var Pc = "S4P-Tu6KIaQ-";
var xc = "XAEHFx5bCT0-";
var Dc = "LhqQh5zRkIw-";
var Ec = "TjfbNdRyip4-";
var Bc = "_0arfU0-7OcQ-";
var Fc = "pMrnNJp5sDA-";
var Nc = "p2qp0XfBE8M-";
var $i = "j7Wl8MzErkA-";
var St = "vdNOP82JYX8-";
var Oc = "xlAKnJ50oYQ-";
var Ac = "DUS6KmDUKhc-";
var is = "yrG419d95pU-";
var os = "mOoPKvox-wE-";
var Tc = "_7zQ9up20PmA-";
var Qi = "wzQIocnKXn4-";
var Mc = "_-6uwAFLL9K0-";
var Gc = "DKmMkONAXgw-";
var Lc = "_93IWcQLinlA-";
var kc = "_7GG-Yb2cOxg-";
var Hc = "jHvUCZyctAM-";
var zc = "Ypx0AcKkoSM-";
var Vc = "nK8lTB5HZ5o-";
var jc = "_80azkrfBXSM-";
var ur = "yO-tcJ7evNI-";
var U = y(E(), 1);
function Uc(e) {
  let { appid: t, item: r } = e,
    s = r?.name;
  return (
    !s &&
      r &&
      !r.visible &&
      (s = b.Localize("#wishlist_item_unavailable_title")),
    (0, U.jsx)($c, { item: r, appid: t, className: Wc, children: s || " " })
  );
}
function qc(e) {
  let { appid: t } = e,
    { data: r } = Oe({ appid: t });
  return (0, U.jsx)($c, {
    item: r,
    appid: t,
    className: wc,
    children: (0, U.jsx)(e_, { item: r, appid: t }),
  });
}
function e_(e) {
  let { appid: t, item: r } = e,
    [s, i] = ns.useState(!1),
    o = ns.useCallback(() => i(!0), []);
  return (0, U.jsxs)("div", {
    className: Ec,
    onMouseEnter: o,
    children: [
      s && r?.visible && (0, U.jsx)(r_, { appid: t, item: r }),
      (0, U.jsx)(t_, { appid: t, item: r }),
    ],
  });
}
function t_(e) {
  let { appid: t, item: r } = e,
    { data: s } = Qo({ appid: t });
  if (!s?.header && !s?.library_capsule_2x) return (0, U.jsx)("div", {});
  let i =
      s.header &&
      s?.asset_url_format?.replace(
        "${FILENAME}",
        s.header.replace(/header/, "header_292x136"),
      ),
    o = s.library_capsule_2x ?? s.library_capsule,
    n = o && s?.asset_url_format?.replace("${FILENAME}", o);
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)("img", {
        className: Pc,
        src: `${te.STORE_ITEM_BASE_URL}${i}`,
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      (0, U.jsx)("img", {
        className: xc,
        src: n ? `${te.STORE_ITEM_BASE_URL}${n}` : gr(vn),
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      !n && (0, U.jsx)("div", { className: Dc, children: r?.name }),
    ],
  });
}
function r_(e) {
  let { item: t, appid: r } = e,
    { data: s } = Ko({ appid: r });
  return !s || !s.all_ages_screenshots || s.all_ages_screenshots.length < 4
    ? null
    : (0, U.jsxs)("div", {
        className: jc,
        children: [
          (0, U.jsx)("img", {
            className: ur,
            src: `${te.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[0].filename}`,
            alt: t.name,
          }),
          (0, U.jsx)("img", {
            className: ur,
            src: `${te.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[1].filename}`,
            alt: t.name,
          }),
          (0, U.jsx)("img", {
            className: ur,
            src: `${te.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[2].filename}`,
            alt: t.name,
          }),
          (0, U.jsx)("img", {
            className: ur,
            src: `${te.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[3].filename}`,
            alt: t.name,
          }),
        ],
      });
}
function $c(e) {
  let t,
    r = So();
  if (e.item) t = `${te.STORE_BASE_URL}${e.item.store_url_path}`;
  else if (e.appid) t = `${te.STORE_BASE_URL}app/${e.appid}/`;
  else
    return (0, U.jsx)("span", { className: e.className, children: e.children });
  return (0, U.jsx)(Et, {
    ref: r,
    snr: !0,
    to: t,
    className: e.className,
    openInNewWindow: !0,
    children: e.children,
  });
}
var Jc = y(ke());
var Qc = "cWLPuFe-zxc-";
var Kc = "z-ezG-Xu844-";
var Yc = "Kech-xMfQ8o-";
var Xc = "MbdBgOhlg7c-";
var eu = y(E());
function Zc(e) {
  let { reviewScore: t } = e,
    r = i_(t),
    s = t.summary_filtered,
    i;
  return (
    s?.review_count &&
      (i = De.Localize(
        "#review_summary_reviewrate",
        s.percent_positive,
        s.review_count.toLocaleString(),
      )),
    (0, eu.jsx)("span", {
      className: r,
      title: i,
      children: s?.review_score_label,
    })
  );
}
function i_(e) {
  let t;
  if (e && e.summary_filtered)
    switch (e.summary_filtered.review_score) {
      case 9:
      case 8:
      case 7:
      case 6:
        t = Xc;
        break;
      case 5:
        t = Yc;
        break;
      case 4:
      case 3:
      case 2:
      case 1:
        t = Kc;
        break;
    }
  return (0, Jc.default)(Qc, t);
}
var q = y(E(), 1);
function tu(e) {
  let { appid: t } = e;
  return (0, q.jsxs)("div", {
    className: Ac,
    children: [(0, q.jsx)(o_, { appid: t }), (0, q.jsx)(n_, { appid: t })],
  });
}
function ru() {
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)("div", { className: is }),
      (0, q.jsx)("div", { className: os, children: " " }),
    ],
  });
}
function o_(e) {
  let { appid: t } = e,
    { data: r } = Yo({ appid: t });
  return !r || !r.summary_filtered
    ? (0, q.jsx)(ru, {})
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)("div", {
            className: is,
            children: b.Localize("#wishlist_item_overallreviews"),
          }),
          (0, q.jsx)("div", {
            className: os,
            children: (0, q.jsx)(Zc, { reviewScore: r }),
          }),
        ],
      });
}
function n_(e) {
  let { appid: t } = e,
    { data: r } = Xo({ appid: t }),
    s = yn(r);
  return !r || !s
    ? (0, q.jsx)(ru, {})
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)("div", {
            className: is,
            children: b.Localize("#wishlist_item_releasedate"),
          }),
          (0, q.jsx)("div", { className: os, children: s }),
        ],
      });
}
var Ru = y(ke(), 1);
var su = y(ke()),
  st = y(j());
var it = y(E());
function as(e) {
  let {
      direction: t,
      interactionMode: r = 0,
      ignoreHorizontal: s,
      ignoreVertical: i,
      dismissOnClick: o,
      menuTarget: n,
      className: a,
      children: l,
      ...c
    } = e,
    { isShowingMenu: p, triggerProps: u, menuProps: d, closeMenu: m } = Fo(e),
    f = st.useRef(null),
    g = st.useRef(null);
  return (
    st.useEffect(() => {
      p
        ? g.current?.TakeFocus()
        : g.current?.BFocusWithin() && f.current?.TakeFocus();
    }, [p]),
    (0, it.jsxs)(it.Fragment, {
      children: [
        st.cloneElement(n, { ...u, navRef: f }),
        (0, it.jsx)(ct, {
          ...c,
          ...d,
          className: (0, su.default)(d.className, a),
          navRef: g,
          onCancel: m,
          onFocusWithin: (h) => !h && m(),
          childFocusDisabled: !p,
          children: (0, it.jsx)(_r, { children: l }),
        }),
      ],
    })
  );
}
var Xi = y(ke(), 1),
  oe = y(j(), 1);
var se = y(j(), 1);
var iu = "WrZdqiILDmU-";
var ou = "idELaaXmvTo-";
var W = y(E(), 1);
function au(e) {
  let { menuTarget: t, filters: r, setFilters: s } = e;
  return (0, W.jsx)(as, {
    menuTarget: t,
    direction: "down",
    className: iu,
    ignoreHorizontal: !0,
    interactionMode: 1,
    children: (0, W.jsxs)(Co, {
      "flow-children": "grid",
      children: [
        (0, W.jsx)(l_, {}),
        (0, W.jsx)(c_, { strPlatform: r.strPlatform, setFilters: s }),
        (0, W.jsx)(u_, { rgTypeFilters: r.rgTypeFilters, setFilters: s }),
        (0, W.jsx)(d_, { nMaxPriceStop: r.nMaxPriceStop, setFilters: s }),
        (0, W.jsx)(m_, { strMinDiscount: r.strMinDiscount, setFilters: s }),
        (0, W.jsx)(f_, {
          bExcludeEarlyAccess: r.bExcludeEarlyAccess,
          bExcludePrerelease: r.bExcludePrerelease,
          bExcludeVR: r.bExcludeVR,
          setFilters: s,
        }),
        (0, W.jsx)(h_, { rgDeckFilters: r.rgDeckFilters, setFilters: s }),
      ],
    }),
  });
}
function l_(e) {
  let t = Re(),
    r = Yl();
  return (0, W.jsxs)(He, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: b.Localize("#wishlist_controls_options_category_view"),
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "compact",
            checked: t,
            onChange: (s) => s.currentTarget.checked && r(!0),
          }),
          b.Localize("#wishlist_controls_options_view_compact"),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "expanded",
            checked: !t,
            onChange: (s) => s.currentTarget.checked && r(!1),
          }),
          b.Localize("#wishlist_controls_options_view_expanded"),
        ],
      }),
    ],
  });
}
function c_(e) {
  let { strPlatform: t, setFilters: r } = e,
    s = se.useCallback(
      (i) => {
        let o = Rs(i.currentTarget.value);
        r((n) => ({ ...n, strPlatform: o }));
      },
      [r],
    );
  return (0, W.jsxs)(He, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: b.Localize("#wishlist_controls_options_category_platform"),
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "all",
            checked: t == "all",
            onChange: s,
          }),
          b.Localize("#wishlist_controls_options_platform_all"),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "mac",
            checked: t == "mac",
            onChange: s,
          }),
          b.Localize("#wishlist_controls_options_platform_mac"),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "linux",
            checked: t == "linux",
            onChange: s,
          }),
          b.Localize("#wishlist_controls_options_platform_linux"),
        ],
      }),
    ],
  });
}
function Ki(e) {
  let { typeFilter: t, rgTypeFilters: r, setFilters: s, children: i } = e,
    o = se.useCallback(
      (n) => {
        let a = n.currentTarget.checked;
        s((l) => {
          let c = new Set(l.rgTypeFilters);
          return (
            a ? c.add(t) : c.delete(t),
            { ...l, rgTypeFilters: Array.from(c.values()) }
          );
        });
      },
      [s, t],
    );
  return (0, W.jsxs)(ae, {
    children: [
      (0, W.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: o,
      }),
      i,
    ],
  });
}
function u_(e) {
  let { rgTypeFilters: t, setFilters: r } = e;
  return (0, W.jsxs)(He, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: b.Localize("#wishlist_controls_options_category_type"),
      }),
      (0, W.jsx)(Ki, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "games",
        children: b.Localize("#wishlist_controls_options_type_game"),
      }),
      (0, W.jsx)(Ki, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "software",
        children: b.Localize("#wishlist_controls_options_type_application"),
      }),
      (0, W.jsx)(Ki, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "dlc",
        children: b.Localize("#wishlist_controls_options_type_dlc"),
      }),
    ],
  });
}
function d_(e) {
  let { nMaxPriceStop: t, setFilters: r } = e,
    [s, i] = se.useState(void 0),
    { data: o } = or(),
    n = se.useId(),
    a = `priceFiltersDataList-${n}`,
    l = `priceFiltersRange-${n}`,
    c = se.useCallback((m) => {
      i(parseInt(m.currentTarget.value));
    }, []),
    p = se.useRef();
  if (
    ((p.current = () => {
      s !== void 0 &&
        (r((m) => {
          let f;
          return (
            s == 0 ? (f = "free") : s <= o.length ? (f = s - 1) : (f = "none"),
            { ...m, nMaxPriceStop: f }
          );
        }),
        i(void 0));
    }),
    se.useEffect(() => {
      if (s === void 0) return;
      let m = window.setTimeout(() => p.current(), 500);
      return () => window.clearTimeout(m);
    }, [s]),
    se.useEffect(() => () => p.current(), []),
    !o)
  )
    return null;
  let u;
  s !== void 0
    ? (u = s)
    : t === "free"
      ? (u = 0)
      : t === "none"
        ? (u = o.length + 1)
        : (u = t + 1);
  let d = ["free", ...o, "max"];
  return (0, W.jsxs)(He, {
    children: [
      (0, W.jsx)("h3", {
        children: b.Localize("#wishlist_controls_options_category_price"),
      }),
      (0, W.jsx)("input", {
        type: "range",
        id: l,
        list: a,
        min: 0,
        max: d.length - 1,
        value: u,
        onChange: c,
      }),
      (0, W.jsx)("datalist", {
        id: a,
        children: d.map((m, f) =>
          (0, W.jsx)(p_, { value: f, priceStop: m }, f),
        ),
      }),
      (0, W.jsx)("label", { htmlFor: l, className: ou, children: dr(d[u]) }),
    ],
  });
}
function p_(e) {
  let { value: t, priceStop: r } = e;
  return (0, W.jsx)("option", { value: t, label: dr(r) });
}
function dr(e) {
  return e === "free"
    ? b.Localize("#wishlist_controls_options_price_free")
    : e === "max"
      ? b.Localize("#wishlist_controls_options_price_any")
      : b.Localize(
          "#wishlist_controls_options_price_max_price",
          e.formatted_amount,
        );
}
function m_(e) {
  let { strMinDiscount: t, setFilters: r } = e,
    s = se.useCallback(
      (i) => {
        let o = Is(i.currentTarget.value);
        r((n) => ({ ...n, strMinDiscount: o }));
      },
      [r],
    );
  return (0, W.jsxs)(He, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: b.Localize("#wishlist_controls_options_category_discount"),
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "",
            checked: t == "",
            onChange: s,
          }),
          b.Localize("#wishlist_controls_options_discount_all"),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "any",
            checked: t == "any",
            onChange: s,
          }),
          b.Localize("#wishlist_controls_options_discount_any"),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "50",
            checked: t == "50",
            onChange: s,
          }),
          b.Localize("#wishlist_controls_options_discount_or_more", 50),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "75",
            checked: t == "75",
            onChange: s,
          }),
          b.Localize("#wishlist_controls_options_discount_or_more", 75),
        ],
      }),
    ],
  });
}
function f_(e) {
  let {
      bExcludeEarlyAccess: t,
      bExcludePrerelease: r,
      bExcludeVR: s,
      setFilters: i,
    } = e,
    o = se.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludeEarlyAccess: c }));
      },
      [i],
    ),
    n = se.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludePrerelease: c }));
      },
      [i],
    ),
    a = se.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludeVR: c }));
      },
      [i],
    );
  return (0, W.jsxs)(He, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: b.Localize("#wishlist_controls_options_category_exclude"),
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "checkbox",
            name: "exclude_earlyaccess",
            checked: t,
            onChange: o,
          }),
          b.Localize("#genre_early_access"),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "checkbox",
            name: "exclude_prerelease",
            checked: r,
            onChange: n,
          }),
          b.Localize("#category_prerelease"),
        ],
      }),
      (0, W.jsxs)(ae, {
        children: [
          (0, W.jsx)("input", {
            type: "checkbox",
            name: "exclude_vr",
            checked: s,
            onChange: a,
          }),
          b.Localize("#wishlist_controls_options_exclude_vr"),
        ],
      }),
    ],
  });
}
function nu(e) {
  let { deckFilter: t, rgDeckFilters: r, setFilters: s, children: i } = e,
    o = se.useCallback(
      (n) => {
        let a = n.currentTarget.checked;
        s((l) => {
          let c = new Set(l.rgDeckFilters);
          return (
            a ? c.add(t) : c.delete(t),
            { ...l, rgDeckFilters: Array.from(c.values()) }
          );
        });
      },
      [s, t],
    );
  return (0, W.jsxs)(ae, {
    children: [
      (0, W.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: o,
      }),
      i,
    ],
  });
}
function h_(e) {
  let { rgDeckFilters: t, setFilters: r } = e;
  return (0, W.jsxs)(He, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: b.Localize("#wishlist_controls_options_category_deck"),
      }),
      (0, W.jsx)(nu, {
        deckFilter: "verified",
        rgDeckFilters: t,
        setFilters: r,
        children: b.Localize("#wishlist_controls_options_deck_verified"),
      }),
      (0, W.jsx)(nu, {
        deckFilter: "playable",
        rgDeckFilters: t,
        setFilters: r,
        children: b.Localize("#wishlist_controls_options_deck_playable"),
      }),
    ],
  });
}
var lu = "TU227nj1DiE-";
var cu = "JqFaNxdHYhs-";
var uu = "ADJFyRYJvZU-";
var Yi = "_1PVYT-GpKSQ-";
var du = "qysDgzabHUo-";
var pu = "QKns7sLqOwg-";
var mu = "-tV92khCNDs-";
var fu = "ScuzYU4NgQA-";
var hu = "Wh-OfiQaHSM-";
var M = y(E(), 1);
function gu(e) {
  return oe.useState(e);
}
function _u(e) {
  return oe.useState(e);
}
var bu = oe.createContext(void 0);
function yu(e) {
  let { filters: t, setFilters: r, children: s } = e,
    i = oe.useMemo(() => ({ filters: t, setFilters: r }), [t, r]);
  return (0, M.jsx)(bu.Provider, { value: i, children: s });
}
function ls() {
  let { filters: e, setFilters: t } = oe.useContext(bu);
  return [e, t];
}
function vu(e, t, r, s) {
  let i = Le(),
    o = Ie(),
    n = qo(),
    { data: a } = or(),
    l = Re(),
    c = oe.useMemo(() => Sn(r, a), [r, a]),
    { data: p } = Jl(e, Hs[t], c),
    { data: u } = es(Ge().strLanguage),
    { data: d, isLoading: m } = be({
      ...S_(e, t, c, i, o, l, n),
      enabled: !!s,
    }),
    f = oe.useMemo(() => {
      if (p !== void 0)
        return {
          ...p,
          items: p.items.filter(
            (h) =>
              !(
                r.rgWishlistNotificationGames?.length &&
                !r.rgWishlistNotificationGames.includes(h.appid)
              ),
          ),
        };
    }, [p, r.rgWishlistNotificationGames]),
    g = oe.useMemo(() => {
      if (!s || f === void 0 || u === void 0 || d === void 0) return;
      let h = Ji(s),
        C = C_(s, u);
      return {
        ...f,
        items: f.items.filter((P) => {
          let w = d.apps[P.appid];
          return w
            ? !!(
                w.name.indexOf(h) !== -1 ||
                (C.size > 0 && w.tagids.some((x) => C.has(x)))
              )
            : !1;
        }),
      };
    }, [s, f, u, d]);
  return s ? { wishlist: g, bLoading: m } : { wishlist: f, bLoading: !1 };
}
function __(e) {
  let t = (0, M.jsx)(lt, {
    className: Yi,
    children: b.Localize("#wishlist_options_button"),
  });
  return (0, M.jsx)(au, {
    menuTarget: t,
    filters: e.filters,
    setFilters: e.setFilters,
  });
}
function b_(e) {
  let { option: t, setSelectedSort: r } = e,
    s = oe.useCallback(() => r(t), [r, t]);
  return (0, M.jsx)(lt, {
    focusClassName: (0, Xi.default)("test", fu),
    noFocusRing: !0,
    onClick: s,
    children: (0, M.jsx)(Cu, { option: t }),
  });
}
function Cu(e) {
  let { option: t } = e,
    r = tt(),
    s = `#wishlist_controls_sortby_${t}`;
  return (
    t === "order" && !r && (s = "#wishlist_controls_sortby_their_order"),
    b.Localize(s)
  );
}
function y_(e) {
  let t = (0, M.jsx)(lt, {
    className: (0, Xi.default)(Yi, du),
    children: b.LocalizeReact(
      "#wishlist_sortby_button",
      (0, M.jsx)("span", {
        className: pu,
        children: (0, M.jsx)(Cu, { option: e.selectedSort }),
      }),
    ),
  });
  return (0, M.jsx)(as, {
    menuTarget: t,
    direction: "down",
    className: mu,
    interactionMode: 1,
    dismissOnClick: !0,
    children: Sr.map((r) =>
      (0, M.jsx)(b_, { option: r, setSelectedSort: e.setSelectedSort }, r),
    ),
  });
}
function Su(e) {
  let {
    filters: t,
    setFilters: r,
    sort: s,
    setSort: i,
    strTextFilter: o,
    setTextFilter: n,
  } = e;
  return (0, M.jsxs)(ct, {
    "flow-children": "row",
    className: lu,
    children: [
      (0, M.jsx)(v_, { strTextFilter: o, setTextFilter: n }),
      (0, M.jsxs)("div", {
        className: uu,
        children: [
          (0, M.jsx)(__, { filters: t, setFilters: r }),
          (0, M.jsx)(y_, { selectedSort: s, setSelectedSort: i }),
        ],
      }),
    ],
  });
}
function ne(e, t) {
  return b.Localize("#wishlist_controls_filter_tag_label", e, t);
}
function Ee(e, t, r, s) {
  switch (e) {
    case "strMinDiscount": {
      let i = t,
        o = b.Localize("#wishlist_controls_options_category_discount");
      return i === ""
        ? ne(o, b.Localize("#wishlist_controls_options_discount_all"))
        : i == "50" || i === "75"
          ? ne(o, b.Localize("#wishlist_controls_options_discount_or_more", i))
          : ne(o, b.Localize(`#wishlist_controls_options_discount_${i}`));
    }
    case "strPlatform": {
      let i = t,
        o = b.Localize("#wishlist_controls_options_category_platform");
      return ne(o, b.Localize(`#wishlist_controls_options_platform_${i}`));
    }
    case "bExcludeEarlyAccess": {
      let i = b.Localize("#wishlist_controls_options_category_exclude");
      return ne(i, b.Localize("#genre_early_access"));
    }
    case "bExcludePrerelease": {
      let i = b.Localize("#wishlist_controls_options_category_exclude");
      return ne(i, b.Localize("#category_prerelease"));
    }
    case "bExcludeVR": {
      let i = b.Localize("#wishlist_controls_options_category_exclude");
      return ne(i, b.Localize("#wishlist_controls_options_exclude_vr"));
    }
    case "nMaxPriceStop": {
      let i = t,
        o = b.Localize("#wishlist_controls_options_category_price");
      return i === "none"
        ? ne(o, b.Localize("#wishlist_controls_options_price_any"))
        : i === "free"
          ? ne(o, dr("free"))
          : r?.[i].formatted_amount
            ? ne(o, dr(r[i]))
            : ne(o, "");
    }
    case "rgTypeFilters": {
      let i = t,
        o = b.Localize("#wishlist_controls_options_category_type");
      return i === "games"
        ? ne(o, b.Localize("#wishlist_controls_options_type_game"))
        : i === "software"
          ? ne(o, b.Localize("#wishlist_controls_options_type_application"))
          : ne(o, b.Localize(`#wishlist_controls_options_type_${i}`));
    }
    case "rgDeckFilters": {
      let i = t,
        o = b.Localize("#wishlist_controls_options_category_deck");
      return ne(o, b.Localize(`#wishlist_controls_options_deck_${i}`));
    }
    case "rgTagFilters": {
      let i = t,
        o = b.Localize("#wishlist_controls_options_category_tag"),
        n = s && s[i];
      return ne(o, n || `${i}`);
    }
    case "rgWishlistNotificationGames":
      return b.Localize("#wishlist_filters_notification");
  }
}
function Wu(e) {
  let { filters: t, setFilters: r } = e,
    { data: s } = or(),
    { data: i } = es(Ge().strLanguage);
  return (0, M.jsxs)("span", {
    children: [
      t.strPlatform !== "all" &&
        (0, M.jsx)(Be, {
          onClick: () => r({ ...t, strPlatform: "all" }),
          children: Ee("strPlatform", t.strPlatform),
        }),
      t.rgTypeFilters.map((o) =>
        (0, M.jsx)(
          Be,
          {
            onClick: () =>
              r({
                ...t,
                rgTypeFilters: t.rgTypeFilters.filter((n) => n !== o),
              }),
            children: Ee("rgTypeFilters", o),
          },
          o,
        ),
      ),
      t.nMaxPriceStop !== "none" &&
        (0, M.jsx)(Be, {
          onClick: () => r({ ...t, nMaxPriceStop: "none" }),
          children: Ee("nMaxPriceStop", t.nMaxPriceStop, s),
        }),
      t.strMinDiscount !== "" &&
        (0, M.jsx)(Be, {
          onClick: () => r({ ...t, strMinDiscount: "" }),
          children: Ee("strMinDiscount", t.strMinDiscount),
        }),
      t.bExcludeEarlyAccess &&
        (0, M.jsx)(Be, {
          onClick: () => r({ ...t, bExcludeEarlyAccess: !1 }),
          children: Ee("bExcludeEarlyAccess", t.bExcludeEarlyAccess),
        }),
      t.bExcludeVR &&
        (0, M.jsx)(Be, {
          onClick: () => r({ ...t, bExcludeVR: !1 }),
          children: Ee("bExcludeVR", t.bExcludeVR),
        }),
      t.bExcludePrerelease &&
        (0, M.jsx)(Be, {
          onClick: () => r({ ...t, bExcludePrerelease: !1 }),
          children: Ee("bExcludePrerelease", t.bExcludePrerelease),
        }),
      t.rgDeckFilters.map((o) =>
        (0, M.jsx)(
          Be,
          {
            onClick: () =>
              r({
                ...t,
                rgDeckFilters: t.rgDeckFilters.filter((n) => n !== o),
              }),
            children: Ee("rgDeckFilters", o),
          },
          o,
        ),
      ),
      t.rgTagFilters.map((o) =>
        (0, M.jsx)(
          Be,
          {
            onClick: () =>
              r({ ...t, rgTagFilters: t.rgTagFilters.filter((n) => n !== o) }),
            children: Ee("rgTagFilters", o, void 0, i),
          },
          o,
        ),
      ),
      !!t.rgWishlistNotificationGames?.length &&
        (0, M.jsx)(Be, {
          onClick: () => r({ ...t, rgWishlistNotificationGames: void 0 }),
          children: Ee(
            "rgWishlistNotificationGames",
            t.rgWishlistNotificationGames,
          ),
        }),
    ],
  });
}
function Be(e) {
  return (0, M.jsx)("button", {
    onClick: e.onClick,
    className: hu,
    children: e.children,
  });
}
var v_ = oe.memo(function (t) {
  let { strTextFilter: r, setTextFilter: s } = t,
    i = oe.useCallback(
      (o) => {
        s(o.currentTarget.value);
      },
      [s],
    );
  return (0, M.jsx)(vo, {
    className: cu,
    value: r,
    onChange: i,
    placeholder: b.Localize("#wishlist_search"),
  });
});
function Ji(e) {
  return e.toLocaleLowerCase();
}
function C_(e, t) {
  let r = new Set();
  for (let s in t) Ji(t[s]).indexOf(e) !== -1 && r.add(parseInt(s));
  return r;
}
function S_(e, t, r, s, i, o, n) {
  let a = Hs[t],
    { dataLoader: l, storeBrowseContext: c, cacheStoreItemData: p } = n;
  return {
    queryKey: ["WishlistAppData", e, a, r],
    queryFn: async () => {
      let u = await s.fetchQuery(qi(i, c, e, ji(o, p), a, r)),
        d = {};
      return (
        await Promise.all(
          u.items.map(({ appid: m }) =>
            Promise.all([
              s.fetchQuery(en(l, { appid: m })),
              s.fetchQuery(Zo(l, { appid: m })),
            ]).then(([f, g]) => {
              d[m] = {
                name: Ji(f.name || ""),
                tagids: g?.map(({ tagid: h }) => h) || [],
              };
            }),
          ),
        ),
        { apps: d }
      );
    },
  };
}
var Ue = y(E(), 1);
function Iu(e) {
  let { wishlistItem: t } = e,
    { data: r } = Oe(t);
  return (0, Ue.jsxs)("div", {
    className: (0, Ru.default)(St, Mc),
    children: [
      r?.is_early_access && (0, Ue.jsx)(W_, {}),
      (0, Ue.jsx)(R_, { wishlistItem: t }),
      (0, Ue.jsx)(gn, { id: t }),
    ],
  });
}
function W_() {
  return (0, Ue.jsx)("span", {
    className: Gc,
    children: b.Localize("#genre_early_access"),
  });
}
function R_(e) {
  let { wishlistItem: t } = e,
    [r] = ls();
  return !Ro() && !r.rgDeckFilters.length ? null : (0, Ue.jsx)(_n, { id: t });
}
var wu = y(ke(), 1),
  Pu = y(j(), 1);
var cs = y(E(), 1);
function xu(e) {
  let { appid: t } = e,
    { data: r } = Jo({ appid: t });
  return (0, cs.jsx)("div", {
    className: kc,
    children: r?.slice(0, 5).map((s) => (0, cs.jsx)(I_, { tag: s }, s.tagid)),
  });
}
function I_(e) {
  let { tag: t } = e,
    [r, s] = ls(),
    i = t.tagid,
    o = r.rgTagFilters.includes(i),
    n = Pu.useCallback(
      () =>
        s((l) => {
          let { rgTagFilters: c } = l,
            p = o ? c.filter((u) => u != i) : c.concat(i);
          return { ...l, rgTagFilters: p };
        }),
      [s, o, i],
    ),
    a = Ql(i, Ge().strLanguage);
  return (0, cs.jsx)("button", {
    className: (0, wu.default)(Hc, o && zc),
    onClick: n,
    title: b.Localize("#wishlist_controls_tag_description"),
    children: a,
  });
}
var N = y(E(), 1),
  Zi = ot.memo(function (t) {
    let {
        wishlistItem: r,
        draggableProvided: s,
        isDragging: i,
        dragHandle: o,
        ...n
      } = t,
      { data: a } = Oe({ appid: r.appid }),
      l = ar(),
      c = Re(),
      { mutate: p, isPending: u } = Bn(l, r.appid);
    return (0, N.jsxs)(w_, {
      appid: r.appid,
      item: a,
      draggableProvided: s,
      isDragging: i,
      isRemoving: u,
      ...n,
      children: [
        o,
        (0, N.jsx)(qc, { appid: r.appid }),
        (0, N.jsxs)("div", {
          className: Bc,
          children: [
            (0, N.jsxs)("div", {
              className: Fc,
              children: [
                (0, N.jsx)(Uc, { appid: r.appid, item: a }),
                c && (0, N.jsx)(Du, { wishlistItem: r, removeItem: p }),
              ],
            }),
            (0, N.jsx)(x_, { appid: r.appid, item: a }),
            !c && (0, N.jsx)(D_, { wishlistItem: r, removeItem: p }),
          ],
        }),
      ],
    });
  });
function w_(e) {
  let {
      appid: t,
      item: r,
      draggableProvided: s,
      isDragging: i,
      isRemoving: o,
      children: n,
      ...a
    } = e,
    l = Re(),
    c = (0, pr.default)(Cc, r && !r.visible && Sc, i && Rc, o && Ic, l && ss),
    p = P_(t, i, a),
    u = s?.draggableProps.style,
    d =
      i && a.bIsGamepadDragClone && u
        ? { ...u, transform: (u.transform ?? "") + " scale( 1.04 )" }
        : u;
  return (0, N.jsx)(mo, {
    feature: "wishlist-capsule",
    children: (0, N.jsx)(hc, {
      appID: t,
      children: (0, N.jsx)(on, {
        className: c,
        ref: s?.innerRef,
        ...s?.draggableProps,
        focusable: !0,
        ...p,
        style: d,
        children: n,
      }),
    }),
  });
}
function P_(e, t, r) {
  let { draggableId: s, gamepadStartDrag: i, navRefDraggable: o } = r,
    n = ot.useCallback((l) => i(s, e, l), [i, e, s]),
    a = ot.useCallback((l) => o(e, l), [o, e]);
  return t || !s || !i || !o
    ? {}
    : {
        onSecondaryButton: n,
        navRef: a,
        onSecondaryActionDescription: b.Localize(
          "#wishlist_gamepaddragdrop_reorderaction",
        ),
      };
}
function x_(e) {
  let { appid: t, item: r } = e;
  if (r && !r.visible) {
    let s = b.Localize("#wishlist_item_unavailable_retired");
    return (
      r.unvailable_for_country_restriction &&
        (s = b.Localize("#wishlist_item_unavailable_region")),
      (0, N.jsx)("div", {
        className: (0, pr.default)(St, $i),
        children: (0, N.jsx)("div", { className: Oc, children: s }),
      })
    );
  } else
    return (0, N.jsxs)("div", {
      className: (0, pr.default)(St, $i),
      children: [
        (0, N.jsx)(tu, { appid: t }),
        (0, N.jsx)("div", {
          className: Tc,
          children: (0, N.jsx)(E_, { appid: t }),
        }),
      ],
    });
}
function D_(e) {
  let { wishlistItem: t, removeItem: r } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(Iu, { wishlistItem: t }),
      (0, N.jsxs)("div", {
        className: (0, pr.default)(St, Lc),
        children: [
          (0, N.jsx)(xu, { appid: t.appid }),
          (0, N.jsx)(Du, { wishlistItem: t, removeItem: r }),
        ],
      }),
    ],
  });
}
function E_(e) {
  let { appid: t } = e,
    { data: r } = Oe({ appid: t }),
    { data: s } = $o({ appid: t });
  return s
    ? (0, N.jsxs)("div", {
        className: Qi,
        children: [
          (0, N.jsx)(bn, { purchaseOption: s, transparentBackground: !0 }),
          (0, N.jsx)(mc, { purchaseOption: s }),
        ],
      })
    : r?.is_free && !r.is_coming_soon
      ? (0, N.jsx)("div", {
          className: Qi,
          children: (0, N.jsx)(rs, { itemid: { appid: t } }),
        })
      : null;
}
function Du(e) {
  let { wishlistItem: t, removeItem: r } = e,
    s = tt(),
    i = ot.useMemo(
      () => new Date(t.date_added * 1e3).toLocaleDateString(lo()),
      [t.date_added],
    );
  return (0, N.jsxs)("div", {
    className: Nc,
    children: [
      b.Localize("#wishlist_item_addedon_date", i),
      s &&
        (0, N.jsxs)(N.Fragment, {
          children: [
            " ( ",
            (0, N.jsx)(lt, {
              className: Vc,
              onClick: r,
              children: b.Localize("#wishlist_item_remove"),
            }),
            " )",
          ],
        }),
    ],
  });
}
var Eu = "oI5QPBYWG8c-";
var Bu = "iiFX76jX8MI-";
var Fu = "tcByxp5r-As-";
var Nu = "OVtmn7mzw0o-";
var Ou = "jfAmlCmNzHQ-";
var Au = "_0tyA9oW-HwA-";
var us = "cy7Yf-ZR9xQ-";
var ce = y(E(), 1),
  B_ = parseInt(gc),
  F_ = parseInt(_c),
  N_ = parseInt(bc),
  O_ = parseInt(yc);
function Mu(e) {
  let { wishlist: t, loading: r, bEnableDragDrop: s } = e,
    i = z.useCallback(
      (o) => (0, ce.jsx)(Zi, { wishlistItem: t.items[o] }),
      [t],
    );
  return s
    ? (0, ce.jsx)(A_, { loading: r, wishlist: t })
    : (0, ce.jsx)(Gu, { loading: r, nRows: t.items.length || 0, fnRender: i });
}
var Gu = z.forwardRef(function (t, r) {
  let { loading: s, nRows: i, fnRender: o, ...n } = t,
    a = Re(),
    l = a ? N_ + O_ : B_ + F_,
    c = a ? 30 : 10,
    p = z.useRef(),
    u = z.useCallback((d) => {
      p.current && clearTimeout(p.current),
        (p.current = setTimeout(() => {
          history.replaceState({ ...(history.state ?? {}), scrollY: d }, "");
        }, 100));
    }, []);
  return (0, ce.jsx)(an, {
    className: (0, eo.default)(Bu, s && Fu),
    nRows: i,
    nItemHeight: l,
    nRowGap: 0,
    overscan: c,
    renderItem: o,
    ref: r,
    forceVirtualizeType: "element",
    onOffsetChange: u,
    initialOffset: window?.history?.state?.scrollY,
    ...n,
  });
});
function A_(e) {
  let { loading: t } = e,
    [r, s] = T_(!t, e.wishlist),
    i = Re(),
    {
      useGamepadSensor: o,
      gamepadStartDrag: n,
      onButtonDown: a,
      refCloneContainer: l,
      navRefDraggable: c,
      fnEndGamepadDrag: p,
      bInGamepadDrag: u,
    } = G_(),
    d = z.useCallback(
      (h) => {
        p(), h.destination && r(h.source.index, h.destination.index);
      },
      [p, r],
    ),
    m = z.useCallback(
      (h, C, S, P = !1) => {
        let w = (0, ce.jsx)(oc, {
            dragHandleProps: h.dragHandleProps,
            index: S.source.index,
            updateWishlistPriority: r,
          }),
          x = {
            draggableId: S.draggableId,
            gamepadStartDrag: n,
            navRefDraggable: c,
            bIsGamepadDragClone: P,
          };
        return (0, ce.jsx)(Zi, {
          wishlistItem: s.items[S.source.index],
          draggableProvided: h,
          isDragging: C.isDragging,
          dragHandle: w,
          ...x,
        });
      },
      [s, r, n, c],
    ),
    f = z.useCallback(
      (h) => {
        let C = s.items[h];
        return (0, ce.jsx)("div", {
          className: (0, eo.default)(vc, i && ss),
          children: (0, ce.jsx)(zl, {
            draggableId: `WishlistItem-${C.appid}-${h}`,
            index: h,
            children: m,
          }),
        });
      },
      [s, i, m],
    ),
    g = z.useCallback(
      (h, C, S) =>
        (0, ce.jsx)(M_, {
          onButtonDown: a,
          navRef: l,
          children: m(h, C, S, !0),
        }),
      [m, a, l],
    );
  return (0, ce.jsx)(Tl, {
    onDragEnd: d,
    sensors: [o],
    children: (0, ce.jsx)($l, {
      droppableId: "droppable",
      renderClone: u ? g : m,
      mode: "virtual",
      children: (h, C) =>
        (0, ce.jsx)(Gu, {
          onButtonDown: a,
          loading: t,
          fnRender: f,
          nRows: s.items.length || 0,
          ...h.droppableProps,
          ref: h.innerRef,
        }),
    }),
  });
}
function T_(e, t) {
  let r = Le(),
    [s, i] = z.useState(void 0),
    o = z.useMemo(() => (s ? { ...t, items: s } : t), [t, s]),
    { mutate: n } = nt({
      async mutationFn([l, c]) {
        let p = c.map((d) => ({ appid: l[d].appid, priority: l[d].priority })),
          u = await ln(p);
        if (u?.result != 1) throw `Error updating wishlist data: ${u?.result}`;
        return !0;
      },
      onMutate([l]) {
        Zl(r, t.steamid, l);
      },
      onError() {
        ec(r, t.steamid);
      },
    });
  return [
    z.useCallback(
      (l, c) => {
        if (!e) {
          console.error("Cannot modify wishlist in this mode");
          return;
        }
        if (l == c) return;
        let { rgNewItems: p, rgChangedIndicies: u } = cn(o.items, l, c);
        i(p), n([p, u], { onSettled: () => i(void 0) });
      },
      [e, o, n],
    ),
    o,
  ];
}
function M_(e) {
  let { onButtonDown: t, navRef: r, children: s } = e;
  return (0, ce.jsx)(_r, {
    children: (0, ce.jsx)(ct, {
      autoFocus: !0,
      onButtonDown: t,
      navRef: r,
      onOKActionDescription: b.Localize(
        "#wishlist_gamepaddragdrop_commitreorder",
      ),
      onCancelActionDescription: b.Localize(
        "#wishlist_gamepaddragdrop_cancelreorder",
      ),
      children: s,
    }),
  });
}
function G_() {
  let [e, t] = z.useState(void 0),
    [r] = z.useState(() => new Map()),
    s = z.useRef(null),
    i = z.useRef(void 0),
    o = z.useCallback((d) => (i.current = d), []),
    n = z.useRef(void 0),
    a = z.useCallback(() => {
      let d = n.current;
      d !== void 0 &&
        (setTimeout(() => r.get(d)?.TakeFocus(), 1), (n.current = void 0)),
        t(void 0);
    }, [r]),
    l = z.useCallback(
      (d, m) => {
        m ? r.set(d, m) : r.delete(d);
      },
      [r],
    ),
    c = z.useCallback((d, m, f) => {
      let g = i.current;
      if (g) {
        let h = g.tryGetLock(d);
        if (h) return (n.current = m), t(h.snapLift()), !0;
      }
      return !1;
    }, []),
    p = z.useCallback(
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
          s.current?.Node().ForceMeasureFocusRing();
        }
      },
      [e],
    );
  return {
    useGamepadSensor: o,
    gamepadStartDrag: c,
    onButtonDown: p,
    refCloneContainer: s,
    navRefDraggable: l,
    fnEndGamepadDrag: a,
    bInGamepadDrag: !!e,
  };
}
var ro = y(ke(), 1);
var to = "bFz2fxg5qDY-";
var Lu = "v0rte85hBgA-";
var ku = "mMC3clyeve4-";
var Hu = "oRgdZRX3fBo-";
var zu = "wA5EFNQ7hrU-";
var Fe = y(E(), 1);
function k_(e) {
  return (0, Fe.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, Fe.jsx)("path", {
      d: "M33.63 8.05005L30.11 20.81C29.9416 21.453 29.5645 22.0219 29.0378 22.4273C28.5111 22.8328 27.8647 23.0518 27.2 23.05H14.75C14.1022 23.0507 13.4715 22.8416 12.9524 22.4541C12.4333 22.0665 12.0536 21.5213 11.87 20.9L7.56 8.05005H2V4.05005H8.28C8.90845 4.05122 9.52067 4.24973 10.0302 4.61755C10.5398 4.98538 10.921 5.50394 11.12 6.10005L11.78 8.10005L33.63 8.05005ZM15 27.05C14.5055 27.05 14.0222 27.1967 13.6111 27.4714C13.2 27.7461 12.8795 28.1365 12.6903 28.5933C12.5011 29.0502 12.4516 29.5528 12.548 30.0378C12.6445 30.5227 12.8826 30.9682 13.2322 31.3178C13.5819 31.6674 14.0273 31.9056 14.5123 32.002C14.9972 32.0985 15.4999 32.049 15.9567 31.8597C16.4135 31.6705 16.804 31.3501 17.0787 30.939C17.3534 30.5278 17.5 30.0445 17.5 29.55C17.5 28.887 17.2366 28.2511 16.7678 27.7823C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1967 25.6111 27.4714C25.2 27.7461 24.8795 28.1365 24.6903 28.5933C24.5011 29.0502 24.4516 29.5528 24.548 30.0378C24.6445 30.5227 24.8826 30.9682 25.2322 31.3178C25.5819 31.6674 26.0273 31.9056 26.5123 32.002C26.9972 32.0985 27.4999 32.049 27.9567 31.8597C28.4135 31.6705 28.804 31.3501 29.0787 30.939C29.3534 30.5278 29.5 30.0445 29.5 29.55C29.5 28.887 29.2366 28.2511 28.7678 27.7823C28.2989 27.3134 27.663 27.05 27 27.05Z",
      fill: "currentColor",
    }),
  });
}
function H_() {
  let { data: e } = Ho();
  return e
    ? (0, Fe.jsxs)(Et, {
        snr: !0,
        external: !0,
        to: te.STORE_BASE_URL + "cart",
        className: (0, ro.default)(to, Lu),
        children: [
          (0, Fe.jsx)(k_, { className: Hu }),
          b.Localize("#cart_count", _s(e)),
        ],
      })
    : null;
}
function z_() {
  let { data: e } = Ot(Dt.steamid);
  return e
    ? (0, Fe.jsx)(Et, {
        snr: !0,
        external: !0,
        to: te.STORE_BASE_URL + "wishlist",
        className: (0, ro.default)(to, ku),
        children: b.Localize("#wishlist_count", _s(e)),
      })
    : null;
}
function Vu() {
  return !Dt.logged_in || nn()
    ? null
    : (0, Fe.jsxs)("div", {
        className: zu,
        children: [(0, Fe.jsx)(z_, {}), (0, Fe.jsx)(H_, {})],
      });
}
var O = y(E(), 1),
  V_ = Wo({ Component: j_, TemplateConfig: { bVirtualizedScrolling: !0 } });
function j_() {
  let { error: e, steamid: t, sort: r, filters: s } = V_.useLoaderData();
  return (0, O.jsx)(U_, { error: e, steamid: t, sort: r, filters: s });
}
function U_(e) {
  let { error: t, steamid: r, sort: s, filters: i } = e;
  return (0, O.jsx)(Kl, {
    steamid: r ?? "0",
    children: (0, O.jsxs)("div", {
      className: Eu,
      children: [
        (0, O.jsx)(Vu, {}),
        (0, O.jsx)($_, { steamid: r }),
        t || !r
          ? (0, O.jsx)(Nn, { error: t || "ProfileNotFound" })
          : (0, O.jsx)(ho, {
              children: (0, O.jsx)(q_, { steamid: r, sort: s, filters: i }),
            }),
      ],
    }),
  });
}
function q_(e) {
  let { steamid: t } = e,
    [r, s] = gu(e.filters),
    [i, o] = _u(e.sort),
    [n, a] = (0, qe.useState)(""),
    { data: l } = Ot(t);
  return (
    J_(o, s, a),
    Z_(t, i, r),
    l === 0
      ? (0, O.jsx)(Y_, {})
      : (0, O.jsxs)(yu, {
          filters: r,
          setFilters: s,
          children: [
            (0, O.jsx)(Su, {
              filters: r,
              setFilters: s,
              sort: i,
              setSort: o,
              strTextFilter: n,
              setTextFilter: a,
            }),
            (0, O.jsx)("hr", { className: Au }),
            (0, O.jsx)(Wu, { filters: r, setFilters: s }),
            (0, O.jsx)(K_, { sort: i, filters: r, strTextFilter: n }),
          ],
        })
  );
}
function $_(e) {
  let { steamid: t } = e,
    r = Ss(t);
  return r.data
    ? (0, O.jsxs)("div", {
        className: Ou,
        children: [
          (0, O.jsx)(Bo, {
            playerLinkDetails: r.data,
            statusPosition: "border",
            alt: "",
            role: "presentation",
            size: "FillArea",
            className: Nu,
          }),
          (0, O.jsx)("h2", {
            children: b.Localize(
              "#wishlist_header",
              r.data.public_data?.persona_name?.toLocaleUpperCase(
                Ge().strISOCode,
              ) ?? "",
            ),
          }),
        ],
      })
    : null;
}
function Q_(e, t, r) {
  let s = tt(),
    i = Cn(t) && !r;
  return s && i && e == "order";
}
function K_(e) {
  let { sort: t, filters: r, strTextFilter: s } = e,
    i = ar(),
    { wishlist: o, bLoading: n } = vu(i, t, r, s),
    a = (0, qe.useRef)(o),
    l = Q_(t, r, s),
    c = o || a.current;
  if (!c) return null;
  a.current = c;
  let p = !o || n;
  return c.items.length == 0
    ? (0, O.jsx)(X_, {})
    : (0, O.jsx)(Mu, { wishlist: c, loading: p, bEnableDragDrop: l && !p });
}
function Y_() {
  return tt()
    ? (0, O.jsx)("div", {
        className: us,
        children: (0, O.jsxs)("div", {
          children: [
            (0, O.jsx)("h3", {
              children: b.Localize("#wishlist_your_wishlist_empty"),
            }),
            (0, O.jsx)("p", {
              children: b.Localize("#wishlist_browse_the_store"),
            }),
            (0, O.jsx)("p", {
              children: (0, O.jsx)("a", {
                href: `${te.HELP_BASE_URL}${Ge().strISOCode}/faqs/view/0CAD-3B4D-B874-A065`,
                children: b.Localize("#wishlist_learn_more_button"),
              }),
            }),
          ],
        }),
      })
    : (0, O.jsx)("div", {
        className: us,
        children: (0, O.jsxs)("div", {
          children: [
            (0, O.jsx)("h3", {
              children: b.Localize("#wishlist_others_wishlist_empty"),
            }),
            (0, O.jsx)("p", {}),
          ],
        }),
      });
}
function X_() {
  let e = ar(),
    { data: t } = Ot(e);
  return (0, O.jsx)("div", {
    className: us,
    children: (0, O.jsxs)("div", {
      children: [
        (0, O.jsx)("h3", {
          children: b.Localize("#wishlist_no_items_matching_filters"),
        }),
        !!t &&
          (0, O.jsx)("p", {
            children: b.Localize(
              "#wishlist_x_items_on_wishlist_but_none_match",
              t.toLocaleString(),
            ),
          }),
      ],
    }),
  });
}
function J_(e, t, r) {
  (0, qe.useEffect)(() => {
    if (location.hash) {
      let s = new URLSearchParams(location.hash.slice(1));
      if (s.has("sort")) {
        let n = s.get("sort");
        In(n) && e(ks[n]);
      }
      if (s.has("term")) {
        let n = s.get("term");
        r(n);
      }
      let i = {};
      s.has("platform") && (i.platform = s.get("platform")),
        s.has("type") && (i.type_filters = s.get("type")),
        s.has("ex_earlyaccess") &&
          (i.exclude_early_access = s.get("ex_earlyaccess")),
        s.has("ex_prerelease") &&
          (i.exclude_prerelease = s.get("ex_prerelease")),
        s.has("ex_vr") && (i.exclude_vr = s.get("ex_vr")),
        s.get("discount_any") === "1" && (i.min_discount = "any"),
        s.get("discount_50") === "1" && (i.min_discount = "50"),
        s.get("discount_75") === "1" && (i.min_discount = "75");
      let o = [];
      if (
        (s.get("deck_verified") === "1" && o.push("verified"),
        s.get("deck_playable") === "1" && o.push("playable"),
        o.length > 0 && (i.deck_filters = o.join(",")),
        Object.keys(i).length > 0)
      ) {
        let n = Wn(i, void 0);
        t(n);
      }
    }
  }, [e, t, r]);
}
function Z_(e, t, r) {
  let { data: s } = Ss(e),
    i = (0, qe.useRef)(void 0),
    o;
  s?.public_data?.profile_url
    ? (o = Ws(`/wishlist/id/${s.public_data.profile_url}/`))
    : s?.public_data?.steamid &&
      (o = Ws(`/wishlist/profiles/${s.public_data.steamid}/`)),
    (0, qe.useEffect)(() => {
      if (!o) return;
      let { protocol: n, hostname: a, search: l } = window.location,
        c = new URL(`${n}//${a}${o}`),
        p = new URLSearchParams(l);
      t && t != Sr[0] && c.searchParams.append("sort", t);
      let u = Rn(r);
      for (let d of Object.keys(u)) u[d] && c.searchParams.append(d, u[d]);
      i.current !== void 0 &&
        i.current !== c.searchParams.toString() &&
        Dn(t, u),
        (i.current = c.searchParams.toString()),
        p.has("cc") && c.searchParams.append("cc", p.get("cc")),
        history.replaceState(history.state, "", c);
    }, [o, t, r]);
}
export { V_ as route };
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

const CLSTAMP = 9413726;

import { a as bo, b as Io } from "./chunk-EZEDOWCV.js";
import {
  a as uo,
  g as po,
  j as Fs,
  k as _o,
  l as yo,
  m as vo,
  n as Co,
  p as So,
  q as xo,
} from "./chunk-EOYHB3V7.js";
import "./chunk-GQ5VFXMK.js";
import "./chunk-H6XNQVBX.js";
import { a as Wo, b as Ro, c as wo } from "./chunk-O645XGQJ.js";
import { a as Fe } from "./chunk-GXC23GPH.js";
import { a as zn, c as Xn } from "./chunk-PC57YTHJ.js";
import { a as Hn } from "./chunk-H7GYYQUJ.js";
import {
  A as Yn,
  f as Nn,
  g as Tn,
  h as An,
  k as Un,
  o as qn,
  p as $n,
  y as Qn,
  z as Kn,
} from "./chunk-G2U5TTIO.js";
import "./chunk-YXUXCCFX.js";
import {
  b as Nt,
  c as Wr,
  e as kn,
  f as hd,
  h as Ge,
  i as wr,
  k as mo,
  n as fo,
} from "./chunk-VZCT5OVQ.js";
import { h as Vn } from "./chunk-HIECV7ZI.js";
import { b as jn } from "./chunk-P2PVWVQG.js";
import "./chunk-OM5LTIYW.js";
import "./chunk-T65DE3KS.js";
import {
  d as Jn,
  e as Zn,
  f as Rr,
  g as eo,
  h as to,
  j as Me,
  l as ro,
  n as so,
  o as io,
  p as no,
  q as oo,
  r as ao,
  u as lo,
  w as co,
} from "./chunk-DUVMPMV4.js";
import "./chunk-MAEZ7XCT.js";
import {
  A as wn,
  D as In,
  E as xn,
  G as xe,
  H as Mn,
  I as Gn,
  J as Ln,
  a as fd,
  b as T,
  c as A,
  d as K,
  e as Y,
  f as X,
  g as J,
  h as Z,
  i as ee,
  r as Ps,
  t as De,
  u as Xe,
  x as Es,
  y as Ds,
  z as Bs,
} from "./chunk-URRQZYHY.js";
import { c as On } from "./chunk-P3TGTAV2.js";
import "./chunk-MUIIEDSJ.js";
import { a as xs } from "./chunk-AFKYJH2Z.js";
import { a as Rn } from "./chunk-G6CDNZON.js";
import { a as _ } from "./chunk-C3KZTFB3.js";
import {
  $ as Bn,
  D as Pn,
  U as mt,
  W as En,
  Y as le,
  Z as Ue,
  _ as Dn,
  b as Sr,
  ba as Be,
} from "./chunk-J434WIC3.js";
import { a as je } from "./chunk-XH7U7AW6.js";
import "./chunk-NEGZR2O7.js";
import "./chunk-QUKHHH6H.js";
import { a as Os, c as ho, d as go } from "./chunk-MIKL4WOL.js";
import { a as Fn } from "./chunk-RLB6R43G.js";
import { c as Is, e as He } from "./chunk-R4FESFN3.js";
import "./chunk-JLQ4IZR3.js";
import { d as vn } from "./chunk-YVPXPFEZ.js";
import {
  b as Ve,
  d as ye,
  f as dt,
  g as Cn,
  h as pt,
  t as Sn,
  x as Wn,
} from "./chunk-O746S3Z7.js";
import {
  g as yn,
  h as Ft,
  i as Cr,
  j as re,
  k as Ot,
  l as j,
  m as D,
} from "./chunk-H6MD6SRD.js";
import { b as vr, d as v } from "./chunk-ENIO5D24.js";
var Yo = vr((Ko) => {
  "use strict";
  var Er = j(),
    Id = Hn();
  function xd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pd = typeof Object.is == "function" ? Object.is : xd,
    Ed = Id.useSyncExternalStore,
    Dd = Er.useRef,
    Bd = Er.useEffect,
    Fd = Er.useMemo,
    Od = Er.useDebugValue;
  Ko.useSyncExternalStoreWithSelector = function (e, t, r, s, i) {
    var n = Dd(null);
    if (n.current === null) {
      var o = { hasValue: !1, value: null };
      n.current = o;
    } else o = n.current;
    n = Fd(
      function () {
        function l(m) {
          if (!c) {
            if (((c = !0), (p = m), (m = s(m)), i !== void 0 && o.hasValue)) {
              var f = o.value;
              if (i(f, m)) return (u = f);
            }
            return (u = m);
          }
          if (((f = u), Pd(p, m))) return f;
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
    var a = Ed(e, n[0], n[1]);
    return (
      Bd(
        function () {
          (o.hasValue = !0), (o.value = a);
        },
        [a],
      ),
      Od(a),
      a
    );
  };
});
var Jo = vr((yy, Xo) => {
  "use strict";
  Xo.exports = Yo();
});
var oa = vr((k) => {
  "use strict";
  var ai = Symbol.for("react.element"),
    li = Symbol.for("react.portal"),
    Br = Symbol.for("react.fragment"),
    Fr = Symbol.for("react.strict_mode"),
    Or = Symbol.for("react.profiler"),
    Nr = Symbol.for("react.provider"),
    Tr = Symbol.for("react.context"),
    kd = Symbol.for("react.server_context"),
    Ar = Symbol.for("react.forward_ref"),
    Mr = Symbol.for("react.suspense"),
    Gr = Symbol.for("react.suspense_list"),
    Lr = Symbol.for("react.memo"),
    kr = Symbol.for("react.lazy"),
    zd = Symbol.for("react.offscreen"),
    na;
  na = Symbol.for("react.module.reference");
  function ve(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ai:
          switch (((e = e.type), e)) {
            case Br:
            case Or:
            case Fr:
            case Mr:
            case Gr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case kd:
                case Tr:
                case Ar:
                case kr:
                case Lr:
                case Nr:
                  return e;
                default:
                  return t;
              }
          }
        case li:
          return t;
      }
    }
  }
  k.ContextConsumer = Tr;
  k.ContextProvider = Nr;
  k.Element = ai;
  k.ForwardRef = Ar;
  k.Fragment = Br;
  k.Lazy = kr;
  k.Memo = Lr;
  k.Portal = li;
  k.Profiler = Or;
  k.StrictMode = Fr;
  k.Suspense = Mr;
  k.SuspenseList = Gr;
  k.isAsyncMode = function () {
    return !1;
  };
  k.isConcurrentMode = function () {
    return !1;
  };
  k.isContextConsumer = function (e) {
    return ve(e) === Tr;
  };
  k.isContextProvider = function (e) {
    return ve(e) === Nr;
  };
  k.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === ai;
  };
  k.isForwardRef = function (e) {
    return ve(e) === Ar;
  };
  k.isFragment = function (e) {
    return ve(e) === Br;
  };
  k.isLazy = function (e) {
    return ve(e) === kr;
  };
  k.isMemo = function (e) {
    return ve(e) === Lr;
  };
  k.isPortal = function (e) {
    return ve(e) === li;
  };
  k.isProfiler = function (e) {
    return ve(e) === Or;
  };
  k.isStrictMode = function (e) {
    return ve(e) === Fr;
  };
  k.isSuspense = function (e) {
    return ve(e) === Mr;
  };
  k.isSuspenseList = function (e) {
    return ve(e) === Gr;
  };
  k.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Br ||
      e === Or ||
      e === Fr ||
      e === Mr ||
      e === Gr ||
      e === zd ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === kr ||
          e.$$typeof === Lr ||
          e.$$typeof === Nr ||
          e.$$typeof === Tr ||
          e.$$typeof === Ar ||
          e.$$typeof === na ||
          e.getModuleId !== void 0))
    );
  };
  k.typeOf = ve;
});
var la = vr((By, aa) => {
  "use strict";
  aa.exports = oa();
});
var Ye = v(j(), 1);
function Po(e) {
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
function Ns(e) {
  return e == "mac" || e == "linux" ? e : "all";
}
function Ts(e) {
  return e == "any" || e == "50" || e == "75" ? e : "";
}
function gd(e, t) {
  if (e === "free") return e;
  if (e && e.length) {
    Cn(t, "cannot EnsureValidPriceStop without rgPriceStops data");
    let r = parseInt(e);
    if ((r || e === "0") && (!t || r < t.length)) return r;
  }
  return "none";
}
function bd(e) {
  if (e == "games" || e == "software" || e == "dlc") return e;
}
function _d(e) {
  if (e == "verified" || e == "playable") return e;
}
function Eo(e, t) {
  let r = {};
  return (
    e.strPlatform == "mac"
      ? (r.macos_only = !0)
      : e.strPlatform == "linux"
        ? (r.steamos_linux_only = !0)
        : e.strPlatform != "all" &&
          pt(e.strPlatform, `Unhandled platform value: ${e.strPlatform}`),
    e.rgTypeFilters.forEach((s) => {
      s == "games"
        ? (r.only_games = !0)
        : s == "software"
          ? (r.only_software = !0)
          : s == "dlc"
            ? (r.only_dlc = !0)
            : pt(s, `Unhandled type filter: ${s}`);
    }),
    e.strMinDiscount == "any"
      ? (r.min_discount_percent = 1)
      : e.strMinDiscount == "50"
        ? (r.min_discount_percent = 50)
        : e.strMinDiscount == "75"
          ? (r.min_discount_percent = 75)
          : e.strMinDiscount != "" &&
            pt(
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
function Do(e, t) {
  return {
    strPlatform: Ns(e.platform),
    strMinDiscount: Ts(e.min_discount),
    nMaxPriceStop: gd(e.max_price, t),
    rgTypeFilters: Ir(e.type_filters, bd),
    bExcludeEarlyAccess: e.exclude_early_access == "1",
    bExcludePrerelease: e.exclude_prerelease == "1",
    bExcludeVR: e.exclude_vr == "1",
    rgDeckFilters: Ir(e.deck_filters, _d),
    rgTagFilters: Ir(e.tagids, (r) => parseInt(r) || void 0),
    rgWishlistNotificationGames: Ir(e.wng, (r) => parseInt(r) || void 0),
  };
}
function Ir(e, t) {
  return (
    e
      ?.split(/,/)
      .map(t)
      .filter((r) => r !== void 0) || []
  );
}
function Bo(e) {
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
var R = v(fd());
var B = R.Message;
var xr = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || ee(e.M()),
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
                br: T.readFixed64String,
                bw: A.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Request";
    }
  },
  As = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || ee(e.M()),
        B.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Ms, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response";
    }
  },
  Ms = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || ee(e.M()),
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
              appid: { n: 1, br: T.readUint32, bw: A.writeUint32 },
              priority: { n: 2, br: T.readUint32, bw: A.writeUint32 },
              date_added: { n: 3, br: T.readUint32, bw: A.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response_WishlistItem";
    }
  },
  Gs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || ee(e.M()),
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
              appid: { n: 1, br: T.readUint32, bw: A.writeUint32 },
              navdata: { n: 2, c: Un },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Request";
    }
  },
  Ls = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || ee(e.M()),
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
              wishlist_count: { n: 1, br: T.readUint32, bw: A.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Response";
    }
  },
  Tt = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || ee(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { appid: { n: 1, br: T.readUint32, bw: A.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Request";
    }
  },
  ks = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || ee(e.M()),
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
              wishlist_count: { n: 1, br: T.readUint32, bw: A.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Response";
    }
  },
  zs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || ee(e.M()),
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
                br: T.readFixed64String,
                bw: A.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Request";
    }
  },
  Hs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.count || ee(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { count: { n: 1, br: T.readUint32, bw: A.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Response";
    }
  },
  Vs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || ee(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: Bs }, data_request: { n: 2, c: Ds } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Request";
    }
  },
  js = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || ee(e.M()),
        B.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Us, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response";
    }
  },
  Us = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || ee(e.M()),
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
              appid: { n: 1, br: T.readUint32, bw: A.writeUint32 },
              store_item: { n: 2, c: Es },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response_WishlistItem";
    }
  },
  At = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.macos_only || ee(e.M()),
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
              macos_only: { n: 1, br: T.readBool, bw: A.writeBool },
              steamos_linux_only: { n: 2, br: T.readBool, bw: A.writeBool },
              only_games: { n: 10, br: T.readBool, bw: A.writeBool },
              only_software: { n: 11, br: T.readBool, bw: A.writeBool },
              only_dlc: { n: 12, br: T.readBool, bw: A.writeBool },
              only_free: { n: 13, br: T.readBool, bw: A.writeBool },
              max_price_in_cents: {
                n: 20,
                br: T.readInt64String,
                bw: A.writeInt64String,
              },
              min_discount_percent: {
                n: 21,
                br: T.readInt32,
                bw: A.writeInt32,
              },
              exclude_types: { n: 22, c: qs },
              steam_deck_filters: { n: 23, c: $s },
              tagids_must_match: {
                n: 24,
                r: !0,
                q: !0,
                br: T.readInt32,
                pbr: T.readPackedInt32,
                bw: A.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters";
    }
  },
  qs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.exclude_early_access || ee(e.M()),
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
              exclude_early_access: { n: 1, br: T.readBool, bw: A.writeBool },
              exclude_coming_soon: { n: 2, br: T.readBool, bw: A.writeBool },
              exclude_vr_only: { n: 3, br: T.readBool, bw: A.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_ExcludeTypeFilters";
    }
  },
  $s = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_verified || ee(e.M()),
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
              include_verified: { n: 1, br: T.readBool, bw: A.writeBool },
              include_playable: { n: 2, br: T.readBool, bw: A.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_SteamDeckFilters";
    }
  },
  Mt = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || ee(e.M()),
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
                br: T.readFixed64String,
                bw: A.writeFixed64String,
              },
              context: { n: 2, c: Bs },
              data_request: { n: 3, c: Ds },
              sort_order: { n: 4, d: 0, br: T.readEnum, bw: A.writeEnum },
              filters: { n: 5, c: At },
              start_index: { n: 6, d: 0, br: T.readInt32, bw: A.writeInt32 },
              page_size: { n: 7, d: 100, br: T.readInt32, bw: A.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Request";
    }
  },
  Qs = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || ee(e.M()),
        B.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Ks, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response";
    }
  },
  Ks = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || ee(e.M()),
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
              appid: { n: 1, br: T.readUint32, bw: A.writeUint32 },
              priority: { n: 2, br: T.readUint32, bw: A.writeUint32 },
              date_added: { n: 3, br: T.readUint32, bw: A.writeUint32 },
              store_item: { n: 4, c: Es },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = K(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return X(e.M(), t, r);
    }
    static fromObject(t) {
      return Y(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new R.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return J(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      Z(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response_WishlistItem";
    }
  },
  ft;
((o) => {
  function e(a, l) {
    return a.SendMsg("Wishlist.GetWishlist#1", Xe(xr, l), As, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlist = e;
  function t(a, l) {
    return a.SendMsg("Wishlist.AddToWishlist#1", Xe(Gs, l), Ls, {
      ePrivilege: 1,
    });
  }
  o.AddToWishlist = t;
  function r(a, l) {
    return a.SendMsg("Wishlist.RemoveFromWishlist#1", Xe(Tt, l), ks, {
      ePrivilege: 1,
    });
  }
  o.RemoveFromWishlist = r;
  function s(a, l) {
    return a.SendMsg("Wishlist.GetWishlistItemCount#1", Xe(zs, l), Hs, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistItemCount = s;
  function i(a, l) {
    return a.SendMsg("Wishlist.GetWishlistItemsOnSale#1", Xe(Vs, l), js, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  o.GetWishlistItemsOnSale = i;
  function n(a, l) {
    return a.SendMsg("Wishlist.GetWishlistSortedFiltered#1", Xe(Mt, l), Qs, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistSortedFiltered = n;
})((ft ||= {}));
var Pr = [
    "order",
    "name",
    "price",
    "discount",
    "dateadded",
    "topsellers",
    "releasedate",
    "reviews",
  ],
  Ys = {
    order: "order",
    name: "name",
    price: "price",
    discount: "discount",
    dateadded: "dateadded",
    salesrank: "topsellers",
    releasedate: "releasedate",
    reviewscore: "reviews",
  };
function Fo(e) {
  return e in Ys;
}
var Xs = {
  order: 0,
  name: 1,
  price: 2,
  discount: 3,
  dateadded: 4,
  topsellers: 5,
  releasedate: 6,
  reviews: 7,
};
var Js = {
  name: "wishlistPrefs",
  options: { path: "/wishlist", secure: !0, maxAge: 365 * 24 * 60 * 60 * 1e3 },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
function Zs() {
  try {
    return JSON.parse(Nn(Js) || "{}");
  } catch {}
  return {};
}
function Oo(e) {
  Object.keys(e).length == 0 ? An(Js) : Tn(Js, JSON.stringify(e));
}
function No() {
  return !!Zs().bCompactView;
}
function To(e) {
  let t = Zs();
  e ? (t.bCompactView = !0) : delete t.bCompactView, Oo(t);
}
function Ao(e, t) {
  Oo({ ...Zs(), sort: e, filterParams: t });
}
async function vd(e, t) {
  let r = await ft.GetWishlistItemCount(e, { steamid: t });
  if (!r.BSuccess())
    throw `Error loading wishlist item count: ${r.GetErrorMessage()}`;
  return r.Body().toObject().count;
}
function Mo(e) {
  return ["wishlistitemcount", e];
}
function Cd(e, t) {
  return {
    queryKey: Mo(t),
    queryFn: () => vd(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function Gt(e) {
  let t = xe();
  return ye(Cd(t, e));
}
async function Sd(e, t) {
  let r = De.Init(Tt);
  r.Body().set_appid(t);
  let s = await ft.RemoveFromWishlist(e, r);
  if (!s.BSuccess()) throw s.GetErrorMessage();
  return s.Body().wishlist_count();
}
function Go(e, t) {
  let r = xe(),
    s = Ve();
  return dt({
    mutationFn: async () => await Sd(r, t),
    onSuccess(i) {
      s.setQueryData(Mo(e), () => i);
      let n = (o) => o && { ...o, items: o.items.filter((a) => a.appid != t) };
      s.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, n),
        s.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          n,
        );
    },
  });
}
var Lo = "a20CyZYbgnQ-";
var Je = v(D(), 1);
function ko(e) {
  return (0, Je.jsx)("div", {
    className: Lo,
    children: (0, Je.jsxs)("div", {
      children: [
        (0, Je.jsx)("h1", { children: _.Localize("#errorpage_error") }),
        (0, Je.jsx)("h3", { children: (0, Je.jsx)(Rd, { error: e.error }) }),
      ],
    }),
  });
}
function Rd(e) {
  let { error: t } = e;
  switch (t) {
    case "ProfileNotFound":
      return _.Localize("#wishlist_error_profilenotfound");
    case "WishlistLoadFailed":
      return _.Localize("#wishlist_error_wishlistunavailable");
    default:
      return (
        pt(t, `Unhandled error code ${t}`),
        _.Localize("#errorpage_unknownerror")
      );
  }
}
var S = v(j()),
  rr = v(xs());
function Ze(e) {
  "@babel/helpers - typeof";
  return (
    (Ze =
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
    Ze(e)
  );
}
function zo(e, t) {
  if (Ze(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(e, t || "default");
    if (Ze(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ho(e) {
  var t = zo(e, "string");
  return Ze(t) == "symbol" ? t : t + "";
}
function Vo(e, t, r) {
  return (
    (t = Ho(t)) in e
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
function jo(e, t) {
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
function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jo(Object(r), !0).forEach(function (s) {
          Vo(e, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jo(Object(r)).forEach(function (s) {
            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
          });
  }
  return e;
}
function de(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Uo = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  ti = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  qo = {
    INIT: "@@redux/INIT" + ti(),
    REPLACE: "@@redux/REPLACE" + ti(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + ti();
    },
  };
function wd(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ri(e, t, r) {
  var s;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(de(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(de(1));
    return r(ri)(e, t);
  }
  if (typeof e != "function") throw new Error(de(2));
  var i = e,
    n = t,
    o = [],
    a = o,
    l = !1;
  function c() {
    a === o && (a = o.slice());
  }
  function p() {
    if (l) throw new Error(de(3));
    return n;
  }
  function u(g) {
    if (typeof g != "function") throw new Error(de(4));
    if (l) throw new Error(de(5));
    var h = !0;
    return (
      c(),
      a.push(g),
      function () {
        if (h) {
          if (l) throw new Error(de(6));
          (h = !1), c();
          var C = a.indexOf(g);
          a.splice(C, 1), (o = null);
        }
      }
    );
  }
  function d(g) {
    if (!wd(g)) throw new Error(de(7));
    if (typeof g.type > "u") throw new Error(de(8));
    if (l) throw new Error(de(9));
    try {
      (l = !0), (n = i(n, g));
    } finally {
      l = !1;
    }
    for (var h = (o = a), y = 0; y < h.length; y++) {
      var C = h[y];
      C();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function") throw new Error(de(10));
    (i = g), d({ type: qo.REPLACE });
  }
  function f() {
    var g,
      h = u;
    return (
      (g = {
        subscribe: function (C) {
          if (typeof C != "object" || C === null) throw new Error(de(11));
          function x() {
            C.next && C.next(p());
          }
          x();
          var I = h(x);
          return { unsubscribe: I };
        },
      }),
      (g[Uo] = function () {
        return this;
      }),
      g
    );
  }
  return (
    d({ type: qo.INIT }),
    (s = { dispatch: d, subscribe: u, getState: p, replaceReducer: m }),
    (s[Uo] = f),
    s
  );
}
function $o(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function si(e, t) {
  if (typeof e == "function") return $o(e, t);
  if (typeof e != "object" || e === null) throw new Error(de(16));
  var r = {};
  for (var s in e) {
    var i = e[s];
    typeof i == "function" && (r[s] = $o(i, t));
  }
  return r;
}
function ii() {
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
function Qo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (s) {
    return function () {
      var i = s.apply(void 0, arguments),
        n = function () {
          throw new Error(de(15));
        },
        o = {
          getState: i.getState,
          dispatch: function () {
            return n.apply(void 0, arguments);
          },
        },
        a = t.map(function (l) {
          return l(o);
        });
      return (
        (n = ii.apply(void 0, a)(i.dispatch)),
        ei(ei({}, i), {}, { dispatch: n })
      );
    };
  };
}
var _a = v(Hn()),
  ya = v(Jo());
var ni = v(xs());
function Nd(e) {
  e();
}
var Zo = Nd,
  ea = (e) => (Zo = e),
  ta = () => Zo;
var oi = v(j());
var Ad = v(j());
var Lt = v(j()),
  ra = Symbol.for("react-redux-context"),
  sa = typeof globalThis < "u" ? globalThis : {};
function Td() {
  var e;
  if (!Lt.createContext) return {};
  let t = (e = sa[ra]) != null ? e : (sa[ra] = new Map()),
    r = t.get(Lt.createContext);
  return r || ((r = Lt.createContext(null)), t.set(Lt.createContext, r)), r;
}
var Le = Td();
var Dr = () => {
  throw new Error("uSES not initialized!");
};
var Ld = Dr,
  ia = (e) => {
    Ld = e;
  };
var di = v(hd()),
  z = v(j()),
  ha = v(la());
var Vd = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function jd(
  e,
  t,
  r,
  s,
  { areStatesEqual: i, areOwnPropsEqual: n, areStatePropsEqual: o },
) {
  let a = !1,
    l,
    c,
    p,
    u,
    d;
  function m(C, x) {
    return (
      (l = C),
      (c = x),
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
    let C = e(l, c),
      x = !o(C, p);
    return (p = C), x && (d = r(p, u, c)), d;
  }
  function y(C, x) {
    let I = !n(x, c),
      P = !i(C, l, x, c);
    return (l = C), (c = x), I && P ? f() : I ? g() : P ? h() : d;
  }
  return function (x, I) {
    return a ? y(x, I) : m(x, I);
  };
}
function ci(e, t) {
  let {
      initMapStateToProps: r,
      initMapDispatchToProps: s,
      initMergeProps: i,
    } = t,
    n = wr(t, Vd),
    o = r(e, n),
    a = s(e, n),
    l = i(e, n);
  return jd(o, a, l, e, n);
}
function ui(e, t) {
  let r = {};
  for (let s in e) {
    let i = e[s];
    typeof i == "function" && (r[s] = (...n) => t(i(...n)));
  }
  return r;
}
function kt(e) {
  return function (r) {
    let s = e(r);
    function i() {
      return s;
    }
    return (i.dependsOnOwnProps = !1), i;
  };
}
function ca(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function zr(e, t) {
  return function (s, { displayName: i }) {
    let n = function (a, l) {
      return n.dependsOnOwnProps ? n.mapToProps(a, l) : n.mapToProps(a, void 0);
    };
    return (
      (n.dependsOnOwnProps = !0),
      (n.mapToProps = function (a, l) {
        (n.mapToProps = e), (n.dependsOnOwnProps = ca(e));
        let c = n(a, l);
        return (
          typeof c == "function" &&
            ((n.mapToProps = c), (n.dependsOnOwnProps = ca(c)), (c = n(a, l))),
          c
        );
      }),
      n
    );
  };
}
function ht(e, t) {
  return (r, s) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${s.wrappedComponentName}.`,
    );
  };
}
function ua(e) {
  return e && typeof e == "object"
    ? kt((t) => ui(e, t))
    : e
      ? typeof e == "function"
        ? zr(e, "mapDispatchToProps")
        : ht(e, "mapDispatchToProps")
      : kt((t) => ({ dispatch: t }));
}
function da(e) {
  return e
    ? typeof e == "function"
      ? zr(e, "mapStateToProps")
      : ht(e, "mapStateToProps")
    : kt(() => ({}));
}
function Ud(e, t, r) {
  return Ge({}, r, e, t);
}
function qd(e) {
  return function (r, { displayName: s, areMergedPropsEqual: i }) {
    let n = !1,
      o;
    return function (l, c, p) {
      let u = e(l, c, p);
      return n ? i(u, o) || (o = u) : ((n = !0), (o = u)), o;
    };
  };
}
function pa(e) {
  return e ? (typeof e == "function" ? qd(e) : ht(e, "mergeProps")) : () => Ud;
}
function $d() {
  let e = ta(),
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
        n = (r = { callback: s, next: null, prev: r });
      return (
        n.prev ? (n.prev.next = n) : (t = n),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            n.next ? (n.next.prev = n.prev) : (r = n.prev),
            n.prev ? (n.prev.next = n.next) : (t = n.next));
        }
      );
    },
  };
}
var ma = { notify() {}, get: () => [] };
function Hr(e, t) {
  let r,
    s = ma,
    i = 0,
    n = !1;
  function o(g) {
    p();
    let h = s.subscribe(g),
      y = !1;
    return () => {
      y || ((y = !0), h(), u());
    };
  }
  function a() {
    s.notify();
  }
  function l() {
    f.onStateChange && f.onStateChange();
  }
  function c() {
    return n;
  }
  function p() {
    i++, r || ((r = t ? t.addNestedSub(l) : e.subscribe(l)), (s = $d()));
  }
  function u() {
    i--, r && i === 0 && (r(), (r = void 0), s.clear(), (s = ma));
  }
  function d() {
    n || ((n = !0), p());
  }
  function m() {
    n && ((n = !1), u());
  }
  let f = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => s,
  };
  return f;
}
var Vr = v(j()),
  Qd =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  gt = Qd ? Vr.useLayoutEffect : Vr.useEffect;
function fa(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function bt(e, t) {
  if (fa(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  let r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !fa(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var Kd = ["reactReduxForwardedRef"],
  ga = Dr,
  ba = (e) => {
    ga = e;
  };
var Yd = [null, null];
function Xd(e, t, r) {
  gt(() => e(...t), r);
}
function Jd(e, t, r, s, i, n) {
  (e.current = s), (r.current = !1), i.current && ((i.current = null), n());
}
function Zd(e, t, r, s, i, n, o, a, l, c, p) {
  if (!e) return () => {};
  let u = !1,
    d = null,
    m = () => {
      if (u || !a.current) return;
      let g = t.getState(),
        h,
        y;
      try {
        h = s(g, i.current);
      } catch (C) {
        (y = C), (d = C);
      }
      y || (d = null),
        h === n.current
          ? o.current || c()
          : ((n.current = h), (l.current = h), (o.current = !0), p());
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
function ep(e, t) {
  return e === t;
}
function tp(
  e,
  t,
  r,
  {
    pure: s,
    areStatesEqual: i = ep,
    areOwnPropsEqual: n = bt,
    areStatePropsEqual: o = bt,
    areMergedPropsEqual: a = bt,
    forwardRef: l = !1,
    context: c = Le,
  } = {},
) {
  let p = c,
    u = da(e),
    d = ua(t),
    m = pa(r),
    f = !!e;
  return (h) => {
    let y = h.displayName || h.name || "Component",
      C = `Connect(${y})`,
      x = {
        shouldHandleStateChanges: f,
        displayName: C,
        wrappedComponentName: y,
        WrappedComponent: h,
        initMapStateToProps: u,
        initMapDispatchToProps: d,
        initMergeProps: m,
        areStatesEqual: i,
        areStatePropsEqual: o,
        areOwnPropsEqual: n,
        areMergedPropsEqual: a,
      };
    function I(M) {
      let [G, pe, V] = z.useMemo(() => {
          let { reactReduxForwardedRef: Ee } = M,
            Bt = wr(M, Kd);
          return [M.context, Ee, Bt];
        }, [M]),
        _e = z.useMemo(
          () =>
            G &&
            G.Consumer &&
            (0, ha.isContextConsumer)(z.createElement(G.Consumer, null))
              ? G
              : p,
          [G, p],
        ),
        Q = z.useContext(_e),
        Ae = !!M.store && !!M.store.getState && !!M.store.dispatch,
        Pt = !!Q && !!Q.store,
        Pe = Ae ? M.store : Q.store,
        _r = Pt ? Q.getServerState : Pe.getState,
        vs = z.useMemo(() => ci(Pe.dispatch, x), [Pe]),
        [Et, hn] = z.useMemo(() => {
          if (!f) return Yd;
          let Ee = Hr(Pe, Ae ? void 0 : Q.subscription),
            Bt = Ee.notifyNestedSubs.bind(Ee);
          return [Ee, Bt];
        }, [Pe, Ae, Q]),
        gn = z.useMemo(
          () => (Ae ? Q : Ge({}, Q, { subscription: Et })),
          [Ae, Q, Et],
        ),
        Cs = z.useRef(),
        Ss = z.useRef(V),
        Dt = z.useRef(),
        bn = z.useRef(!1),
        O_ = z.useRef(!1),
        Ws = z.useRef(!1),
        Rs = z.useRef();
      gt(
        () => (
          (Ws.current = !0),
          () => {
            Ws.current = !1;
          }
        ),
        [],
      );
      let _n = z.useMemo(
          () => () =>
            Dt.current && V === Ss.current ? Dt.current : vs(Pe.getState(), V),
          [Pe, V],
        ),
        md = z.useMemo(
          () => (Bt) =>
            Et ? Zd(f, Pe, Et, vs, Ss, Cs, bn, Ws, Dt, hn, Bt) : () => {},
          [Et],
        );
      Xd(Jd, [Ss, Cs, bn, V, Dt, hn]);
      let yr;
      try {
        yr = ga(md, _n, _r ? () => vs(_r(), V) : _n);
      } catch (Ee) {
        throw (
          (Rs.current &&
            (Ee.message += `
The error may be correlated with this previous error:
${Rs.current.stack}

`),
          Ee)
        );
      }
      gt(() => {
        (Rs.current = void 0), (Dt.current = void 0), (Cs.current = yr);
      });
      let ws = z.useMemo(
        () => z.createElement(h, Ge({}, yr, { ref: pe })),
        [pe, h, yr],
      );
      return z.useMemo(
        () => (f ? z.createElement(_e.Provider, { value: gn }, ws) : ws),
        [_e, ws, gn],
      );
    }
    let E = z.memo(I);
    if (((E.WrappedComponent = h), (E.displayName = I.displayName = C), l)) {
      let G = z.forwardRef(function (V, _e) {
        return z.createElement(E, Ge({}, V, { reactReduxForwardedRef: _e }));
      });
      return (
        (G.displayName = C), (G.WrappedComponent = h), (0, di.default)(G, h)
      );
    }
    return (0, di.default)(E, h);
  };
}
var jr = tp;
var zt = v(j());
function rp({
  store: e,
  context: t,
  children: r,
  serverState: s,
  stabilityCheck: i = "once",
  noopCheck: n = "once",
}) {
  let o = zt.useMemo(() => {
      let c = Hr(e);
      return {
        store: e,
        subscription: c,
        getServerState: s ? () => s : void 0,
        stabilityCheck: i,
        noopCheck: n,
      };
    }, [e, s, i, n]),
    a = zt.useMemo(() => e.getState(), [e]);
  return (
    gt(() => {
      let { subscription: c } = o;
      return (
        (c.onStateChange = c.notifyNestedSubs),
        c.trySubscribe(),
        a !== e.getState() && c.notifyNestedSubs(),
        () => {
          c.tryUnsubscribe(), (c.onStateChange = void 0);
        }
      );
    }, [o, a]),
    zt.createElement((t || Le).Provider, { value: o }, r)
  );
}
var pi = rp;
ia(ya.useSyncExternalStoreWithSelector);
ba(_a.useSyncExternalStore);
ea(ni.unstable_batchedUpdates);
var et = v(j());
function np(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function va(e, t) {
  var r = (0, et.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    s = (0, et.useRef)(!0),
    i = (0, et.useRef)(r),
    n = s.current || !!(t && i.current.inputs && np(t, i.current.inputs)),
    o = n ? i.current : { inputs: t, result: e() };
  return (
    (0, et.useEffect)(
      function () {
        (s.current = !1), (i.current = o);
      },
      [o],
    ),
    o.result
  );
}
function op(e, t) {
  return va(function () {
    return e;
  }, t);
}
var F = va,
  w = op;
var Se = function (t) {
    var r = t.top,
      s = t.right,
      i = t.bottom,
      n = t.left,
      o = s - n,
      a = i - r,
      l = {
        top: r,
        right: s,
        bottom: i,
        left: n,
        width: o,
        height: a,
        x: n,
        y: r,
        center: { x: (s + n) / 2, y: (i + r) / 2 },
      };
    return l;
  },
  Ur = function (t, r) {
    return {
      top: t.top - r.top,
      left: t.left - r.left,
      bottom: t.bottom + r.bottom,
      right: t.right + r.right,
    };
  },
  Ca = function (t, r) {
    return {
      top: t.top + r.top,
      left: t.left + r.left,
      bottom: t.bottom - r.bottom,
      right: t.right - r.right,
    };
  },
  ap = function (t, r) {
    return {
      top: t.top + r.y,
      left: t.left + r.x,
      bottom: t.bottom + r.y,
      right: t.right + r.x,
    };
  },
  mi = { top: 0, right: 0, bottom: 0, left: 0 },
  qr = function (t) {
    var r = t.borderBox,
      s = t.margin,
      i = s === void 0 ? mi : s,
      n = t.border,
      o = n === void 0 ? mi : n,
      a = t.padding,
      l = a === void 0 ? mi : a,
      c = Se(Ur(r, i)),
      p = Se(Ca(r, o)),
      u = Se(Ca(p, l));
    return {
      marginBox: c,
      borderBox: Se(r),
      paddingBox: p,
      contentBox: u,
      margin: i,
      border: o,
      padding: l,
    };
  },
  Ce = function (t) {
    var r = t.slice(0, -2),
      s = t.slice(-2);
    if (s !== "px") return 0;
    var i = Number(r);
    return isNaN(i) && mo(!1), i;
  },
  lp = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  Ht = function (t, r) {
    var s = t.borderBox,
      i = t.border,
      n = t.margin,
      o = t.padding,
      a = ap(s, r);
    return qr({ borderBox: a, border: i, margin: n, padding: o });
  },
  Vt = function (t, r) {
    return r === void 0 && (r = lp()), Ht(t, r);
  },
  fi = function (t, r) {
    var s = {
        top: Ce(r.marginTop),
        right: Ce(r.marginRight),
        bottom: Ce(r.marginBottom),
        left: Ce(r.marginLeft),
      },
      i = {
        top: Ce(r.paddingTop),
        right: Ce(r.paddingRight),
        bottom: Ce(r.paddingBottom),
        left: Ce(r.paddingLeft),
      },
      n = {
        top: Ce(r.borderTopWidth),
        right: Ce(r.borderRightWidth),
        bottom: Ce(r.borderBottomWidth),
        left: Ce(r.borderLeftWidth),
      };
    return qr({ borderBox: t, margin: s, padding: i, border: n });
  },
  hi = function (t) {
    var r = t.getBoundingClientRect(),
      s = window.getComputedStyle(t);
    return fi(r, s);
  };
var Sa =
  Number.isNaN ||
  function (t) {
    return typeof t == "number" && t !== t;
  };
function cp(e, t) {
  return !!(e === t || (Sa(e) && Sa(t)));
}
function up(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!cp(e[r], t[r])) return !1;
  return !0;
}
function te(e, t) {
  t === void 0 && (t = up);
  var r = null;
  function s() {
    for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
    if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult;
    var o = e.apply(this, i);
    return (r = { lastResult: o, lastArgs: i, lastThis: this }), o;
  }
  return (
    (s.clear = function () {
      r = null;
    }),
    s
  );
}
var dp = function (t) {
    var r = [],
      s = null,
      i = function () {
        for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
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
  _t = dp;
var pp = !0,
  mp = /[ \t]{2,}/g,
  fp = /^[ \t]*/gm,
  Wa = (e) => e.replace(mp, " ").replace(fp, "").trim(),
  hp = (e) =>
    Wa(`
  %c@hello-pangea/dnd

  %c${Wa(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`),
  gp = (e) => [
    hp(e),
    "color: #00C584; font-size: 1.2em; font-weight: bold;",
    "line-height: 1.5",
    "color: #723874;",
  ],
  bp = "__@hello-pangea/dnd-disable-dev-warnings";
function Xa(e, t) {
  pp || (typeof window < "u" && window[bp]) || console[e](...gp(t));
}
var mC = Xa.bind(null, "warn"),
  _p = Xa.bind(null, "error");
function qe() {}
function yp(e, t) {
  return { ...e, ...t };
}
function We(e, t, r) {
  let s = t.map((i) => {
    let n = yp(r, i.options);
    return (
      e.addEventListener(i.eventName, i.fn, n),
      function () {
        e.removeEventListener(i.eventName, i.fn, n);
      }
    );
  });
  return function () {
    s.forEach((n) => {
      n();
    });
  };
}
var vp = !0,
  Ra = "Invariant failed",
  st = class extends Error {};
st.prototype.toString = function () {
  return this.message;
};
function b(e, t) {
  if (!e) throw vp ? new st(Ra) : new st(`${Ra}: ${t || ""}`);
}
var Ii = class extends S.default.Component {
    constructor(...t) {
      super(...t),
        (this.callbacks = null),
        (this.unbind = qe),
        (this.onWindowError = (r) => {
          let s = this.getCallbacks();
          s.isDragging() && s.tryAbort(),
            r.error instanceof st && r.preventDefault();
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
      this.unbind = We(window, [
        { eventName: "error", fn: this.onWindowError },
      ]);
    }
    componentDidCatch(t) {
      if (t instanceof st) {
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
  Cp = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Xr = (e) => e + 1,
  Sp = (e) => `
  You have lifted an item in position ${Xr(e.source.index)}
`,
  Ja = (e, t) => {
    let r = e.droppableId === t.droppableId,
      s = Xr(e.index),
      i = Xr(t.index);
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
  Za = (e, t, r) =>
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
  Wp = (e) => {
    let t = e.destination;
    if (t) return Ja(e.source, t);
    let r = e.combine;
    return r
      ? Za(e.draggableId, e.source, r)
      : "You are over an area that cannot be dropped on";
  },
  wa = (e) => `
  The item has returned to its starting position
  of ${Xr(e.index)}
`,
  Rp = (e) => {
    if (e.reason === "CANCEL")
      return `
      Movement cancelled.
      ${wa(e.source)}
    `;
    let t = e.destination,
      r = e.combine;
    return t
      ? `
      You have dropped the item.
      ${Ja(e.source, t)}
    `
      : r
        ? `
      You have dropped the item.
      ${Za(e.draggableId, e.source, r)}
    `
        : `
    The item has been dropped while not over a drop area.
    ${wa(e.source)}
  `;
  },
  wp = {
    dragHandleUsageInstructions: Cp,
    onDragStart: Sp,
    onDragUpdate: Wp,
    onDragEnd: Rp,
  },
  Yr = wp,
  se = { x: 0, y: 0 },
  ne = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
  me = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  $e = (e, t) => e.x === t.x && e.y === t.y,
  St = (e) => ({ x: e.x !== 0 ? -e.x : 0, y: e.y !== 0 ? -e.y : 0 }),
  it = (e, t, r = 0) => (e === "x" ? { x: t, y: r } : { x: r, y: t }),
  Kt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
  Ia = (e, t) => Math.min(...t.map((r) => Kt(e, r))),
  el = (e) => (t) => ({ x: e(t.x), y: e(t.y) }),
  Ip = (e, t) => {
    let r = Se({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left),
    });
    return r.width <= 0 || r.height <= 0 ? null : r;
  },
  sr = (e, t) => ({
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x,
  }),
  xa = (e) => [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.left, y: e.bottom },
    { x: e.right, y: e.bottom },
  ],
  xp = { top: 0, right: 0, bottom: 0, left: 0 },
  Pp = (e, t) => (t ? sr(e, t.scroll.diff.displacement) : e),
  Ep = (e, t, r) =>
    r && r.increasedBy
      ? { ...e, [t.end]: e[t.end] + r.increasedBy[t.line] }
      : e,
  Dp = (e, t) => (t && t.shouldClipSubject ? Ip(t.pageMarginBox, e) : Se(e)),
  yt = ({ page: e, withPlaceholder: t, axis: r, frame: s }) => {
    let i = Pp(e.marginBox, s),
      n = Ep(i, r, t),
      o = Dp(n, s);
    return { page: e, withPlaceholder: t, active: o };
  },
  Ni = (e, t) => {
    e.frame || b(!1);
    let r = e.frame,
      s = me(t, r.scroll.initial),
      i = St(s),
      n = {
        ...r,
        scroll: {
          initial: r.scroll.initial,
          current: t,
          diff: { value: s, displacement: i },
          max: r.scroll.max,
        },
      },
      o = yt({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: n,
      });
    return { ...e, frame: n, subject: o };
  },
  tl = te((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  rl = te((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  es = te((e) => Object.values(e)),
  Bp = te((e) => Object.values(e)),
  Wt = te((e, t) =>
    Bp(t)
      .filter((s) => e === s.descriptor.droppableId)
      .sort((s, i) => s.descriptor.index - i.descriptor.index),
  );
function Ti(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function ts(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var rs = te((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)),
  Fp = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: s,
    previousImpact: i,
  }) => {
    if (!r.isCombineEnabled || !Ti(i)) return null;
    function o(m) {
      let f = {
        type: "COMBINE",
        combine: { draggableId: m, droppableId: r.descriptor.id },
      };
      return { ...i, at: f };
    }
    let a = i.displaced.all,
      l = a.length ? a[0] : null;
    if (e) return l ? o(l) : null;
    let c = rs(t, s);
    if (!l) {
      if (!c.length) return null;
      let m = c[c.length - 1];
      return o(m.descriptor.id);
    }
    let p = c.findIndex((m) => m.descriptor.id === l);
    p === -1 && b(!1);
    let u = p - 1;
    if (u < 0) return null;
    let d = c[u];
    return o(d.descriptor.id);
  },
  Rt = (e, t) => e.descriptor.droppableId === t.descriptor.id,
  sl = { point: se, value: 0 },
  Yt = { invisible: {}, visible: {}, all: [] },
  Op = { displaced: Yt, displacedBy: sl, at: null },
  Np = Op,
  Re = (e, t) => (r) => e <= r && r <= t,
  il = (e) => {
    let t = Re(e.top, e.bottom),
      r = Re(e.left, e.right);
    return (s) => {
      if (t(s.top) && t(s.bottom) && r(s.left) && r(s.right)) return !0;
      let n = t(s.top) || t(s.bottom),
        o = r(s.left) || r(s.right);
      if (n && o) return !0;
      let l = s.top < e.top && s.bottom > e.bottom,
        c = s.left < e.left && s.right > e.right;
      return l && c ? !0 : (l && o) || (c && n);
    };
  },
  Tp = (e) => {
    let t = Re(e.top, e.bottom),
      r = Re(e.left, e.right);
    return (s) => t(s.top) && t(s.bottom) && r(s.left) && r(s.right);
  },
  Ai = {
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
  nl = {
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
  Ap = (e) => (t) => {
    let r = Re(t.top, t.bottom),
      s = Re(t.left, t.right);
    return (i) =>
      e === Ai ? r(i.top) && r(i.bottom) : s(i.left) && s(i.right);
  },
  Mp = (e, t) => {
    let r = t.frame ? t.frame.scroll.diff.displacement : se;
    return sr(e, r);
  },
  Gp = (e, t, r) => (t.subject.active ? r(t.subject.active)(e) : !1),
  Lp = (e, t, r) => r(t)(e),
  Mi = ({
    target: e,
    destination: t,
    viewport: r,
    withDroppableDisplacement: s,
    isVisibleThroughFrameFn: i,
  }) => {
    let n = s ? Mp(e, t) : e;
    return Gp(n, t, i) && Lp(n, r, i);
  },
  kp = (e) => Mi({ ...e, isVisibleThroughFrameFn: il }),
  ol = (e) => Mi({ ...e, isVisibleThroughFrameFn: Tp }),
  zp = (e) => Mi({ ...e, isVisibleThroughFrameFn: Ap(e.destination.axis) }),
  Hp = (e, t, r) => {
    if (typeof r == "boolean") return r;
    if (!t) return !0;
    let { invisible: s, visible: i } = t;
    if (s[e]) return !1;
    let n = i[e];
    return n ? n.shouldAnimate : !0;
  };
function Vp(e, t) {
  let r = e.page.marginBox,
    s = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return Se(Ur(r, s));
}
function Xt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: s,
  forceShouldAnimate: i,
  last: n,
}) {
  return e.reduce(
    function (a, l) {
      let c = Vp(l, r),
        p = l.descriptor.id;
      if (
        (a.all.push(p),
        !kp({
          target: c,
          destination: t,
          viewport: s,
          withDroppableDisplacement: !0,
        }))
      )
        return (a.invisible[l.descriptor.id] = !0), a;
      let d = Hp(p, n, i),
        m = { draggableId: p, shouldAnimate: d };
      return (a.visible[p] = m), a;
    },
    { all: [], visible: {}, invisible: {} },
  );
}
function jp(e, t) {
  if (!e.length) return 0;
  let r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Pa({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: s,
}) {
  let i = jp(e, { inHomeList: t });
  return {
    displaced: Yt,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: { droppableId: s.descriptor.id, index: i },
    },
  };
}
function Jr({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: s,
  displacedBy: i,
  last: n,
  index: o,
  forceShouldAnimate: a,
}) {
  let l = Rt(e, r);
  if (o == null)
    return Pa({
      insideDestination: t,
      inHomeList: l,
      displacedBy: i,
      destination: r,
    });
  let c = t.find((f) => f.descriptor.index === o);
  if (!c)
    return Pa({
      insideDestination: t,
      inHomeList: l,
      displacedBy: i,
      destination: r,
    });
  let p = rs(e, t),
    u = t.indexOf(c),
    d = p.slice(u);
  return {
    displaced: Xt({
      afterDragging: d,
      destination: r,
      displacedBy: i,
      last: n,
      viewport: s.frame,
      forceShouldAnimate: a,
    }),
    displacedBy: i,
    at: {
      type: "REORDER",
      destination: { droppableId: r.descriptor.id, index: o },
    },
  };
}
function Qe(e, t) {
  return !!t.effected[e];
}
var Up = ({
    isMovingForward: e,
    destination: t,
    draggables: r,
    combine: s,
    afterCritical: i,
  }) => {
    if (!t.isCombineEnabled) return null;
    let n = s.draggableId,
      a = r[n].descriptor.index;
    return Qe(n, i) ? (e ? a : a - 1) : e ? a + 1 : a;
  },
  qp = ({
    isMovingForward: e,
    isInHomeList: t,
    insideDestination: r,
    location: s,
  }) => {
    if (!r.length) return null;
    let i = s.index,
      n = e ? i + 1 : i - 1,
      o = r[0].descriptor.index,
      a = r[r.length - 1].descriptor.index,
      l = t ? a : a + 1;
    return n < o || n > l ? null : n;
  },
  $p = ({
    isMovingForward: e,
    isInHomeList: t,
    draggable: r,
    draggables: s,
    destination: i,
    insideDestination: n,
    previousImpact: o,
    viewport: a,
    afterCritical: l,
  }) => {
    let c = o.at;
    if ((c || b(!1), c.type === "REORDER")) {
      let u = qp({
        isMovingForward: e,
        isInHomeList: t,
        location: c.destination,
        insideDestination: n,
      });
      return u == null
        ? null
        : Jr({
            draggable: r,
            insideDestination: n,
            destination: i,
            viewport: a,
            last: o.displaced,
            displacedBy: o.displacedBy,
            index: u,
          });
    }
    let p = Up({
      isMovingForward: e,
      destination: i,
      displaced: o.displaced,
      draggables: s,
      combine: c.combine,
      afterCritical: l,
    });
    return p == null
      ? null
      : Jr({
          draggable: r,
          insideDestination: n,
          destination: i,
          viewport: a,
          last: o.displaced,
          displacedBy: o.displacedBy,
          index: p,
        });
  },
  Qp = ({ displaced: e, afterCritical: t, combineWith: r, displacedBy: s }) => {
    let i = !!(e.visible[r] || e.invisible[r]);
    return Qe(r, t) ? (i ? se : St(s.point)) : i ? s.point : se;
  },
  Kp = ({ afterCritical: e, impact: t, draggables: r }) => {
    let s = ts(t);
    s || b(!1);
    let i = s.draggableId,
      n = r[i].page.borderBox.center,
      o = Qp({
        displaced: t.displaced,
        afterCritical: e,
        combineWith: i,
        displacedBy: t.displacedBy,
      });
    return ne(n, o);
  },
  al = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
  Yp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
  Gi = (e, t, r) =>
    t[e.crossAxisStart] +
    r.margin[e.crossAxisStart] +
    r.borderBox[e.crossAxisSize] / 2,
  Ea = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    it(e.line, t.marginBox[e.end] + al(e, r), Gi(e, t.marginBox, r)),
  Da = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    it(e.line, t.marginBox[e.start] - Yp(e, r), Gi(e, t.marginBox, r)),
  Xp = ({ axis: e, moveInto: t, isMoving: r }) =>
    it(e.line, t.contentBox[e.start] + al(e, r), Gi(e, t.contentBox, r)),
  Jp = ({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: s,
    afterCritical: i,
  }) => {
    let n = Wt(s.descriptor.id, r),
      o = t.page,
      a = s.axis;
    if (!n.length) return Xp({ axis: a, moveInto: s.page, isMoving: o });
    let { displaced: l, displacedBy: c } = e,
      p = l.all[0];
    if (p) {
      let d = r[p];
      if (Qe(p, i)) return Da({ axis: a, moveRelativeTo: d.page, isMoving: o });
      let m = Ht(d.page, c.point);
      return Da({ axis: a, moveRelativeTo: m, isMoving: o });
    }
    let u = n[n.length - 1];
    if (u.descriptor.id === t.descriptor.id) return o.borderBox.center;
    if (Qe(u.descriptor.id, i)) {
      let d = Ht(u.page, St(i.displacedBy.point));
      return Ea({ axis: a, moveRelativeTo: d, isMoving: o });
    }
    return Ea({ axis: a, moveRelativeTo: u.page, isMoving: o });
  },
  xi = (e, t) => {
    let r = e.frame;
    return r ? ne(t, r.scroll.diff.displacement) : t;
  },
  Zp = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: s,
    afterCritical: i,
  }) => {
    let n = t.page.borderBox.center,
      o = e.at;
    return !r || !o
      ? n
      : o.type === "REORDER"
        ? Jp({
            impact: e,
            draggable: t,
            draggables: s,
            droppable: r,
            afterCritical: i,
          })
        : Kp({ impact: e, draggables: s, afterCritical: i });
  },
  ss = (e) => {
    let t = Zp(e),
      r = e.droppable;
    return r ? xi(r, t) : t;
  },
  ll = (e, t) => {
    let r = me(t, e.scroll.initial),
      s = St(r);
    return {
      frame: Se({
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
function Ba(e, t) {
  return e.map((r) => t[r]);
}
function em(e, t) {
  for (let r = 0; r < t.length; r++) {
    let s = t[r].visible[e];
    if (s) return s;
  }
  return null;
}
var tm = ({
    impact: e,
    viewport: t,
    destination: r,
    draggables: s,
    maxScrollChange: i,
  }) => {
    let n = ll(t, ne(t.scroll.current, i)),
      o = r.frame ? Ni(r, ne(r.frame.scroll.current, i)) : r,
      a = e.displaced,
      l = Xt({
        afterDragging: Ba(a.all, s),
        destination: r,
        displacedBy: e.displacedBy,
        viewport: n.frame,
        last: a,
        forceShouldAnimate: !1,
      }),
      c = Xt({
        afterDragging: Ba(a.all, s),
        destination: o,
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
        let g = em(f, d);
        if (g) {
          u[f] = g;
          return;
        }
        p[f] = !0;
      }),
      { ...e, displaced: { all: a.all, invisible: p, visible: u } }
    );
  },
  rm = (e, t) => ne(e.scroll.diff.displacement, t),
  Li = ({ pageBorderBoxCenter: e, draggable: t, viewport: r }) => {
    let s = rm(r, e),
      i = me(s, t.page.borderBox.center);
    return ne(t.client.borderBox.center, i);
  },
  cl = ({
    draggable: e,
    destination: t,
    newPageBorderBoxCenter: r,
    viewport: s,
    withDroppableDisplacement: i,
    onlyOnMainAxis: n = !1,
  }) => {
    let o = me(r, e.page.borderBox.center),
      l = {
        target: sr(e.page.borderBox, o),
        destination: t,
        withDroppableDisplacement: i,
        viewport: s,
      };
    return n ? zp(l) : ol(l);
  },
  sm = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    draggables: s,
    previousImpact: i,
    viewport: n,
    previousPageBorderBoxCenter: o,
    previousClientSelection: a,
    afterCritical: l,
  }) => {
    if (!r.isEnabled) return null;
    let c = Wt(r.descriptor.id, s),
      p = Rt(t, r),
      u =
        Fp({
          isMovingForward: e,
          draggable: t,
          destination: r,
          insideDestination: c,
          previousImpact: i,
        }) ||
        $p({
          isMovingForward: e,
          isInHomeList: p,
          draggable: t,
          draggables: s,
          destination: r,
          insideDestination: c,
          previousImpact: i,
          viewport: n,
          afterCritical: l,
        });
    if (!u) return null;
    let d = ss({
      impact: u,
      draggable: t,
      droppable: r,
      draggables: s,
      afterCritical: l,
    });
    if (
      cl({
        draggable: t,
        destination: r,
        newPageBorderBoxCenter: d,
        viewport: n.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: Li({
          pageBorderBoxCenter: d,
          draggable: t,
          viewport: n,
        }),
        impact: u,
        scrollJumpRequest: null,
      };
    let f = me(d, o),
      g = tm({
        impact: u,
        viewport: n,
        destination: r,
        draggables: s,
        maxScrollChange: f,
      });
    return { clientSelection: a, impact: g, scrollJumpRequest: f };
  },
  ce = (e) => {
    let t = e.subject.active;
    return t || b(!1), t;
  },
  im = ({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: s,
    viewport: i,
  }) => {
    let n = r.subject.active;
    if (!n) return null;
    let o = r.axis,
      a = Re(n[o.start], n[o.end]),
      l = es(s)
        .filter((p) => p !== r)
        .filter((p) => p.isEnabled)
        .filter((p) => !!p.subject.active)
        .filter((p) => il(i.frame)(ce(p)))
        .filter((p) => {
          let u = ce(p);
          return e
            ? n[o.crossAxisEnd] < u[o.crossAxisEnd]
            : u[o.crossAxisStart] < n[o.crossAxisStart];
        })
        .filter((p) => {
          let u = ce(p),
            d = Re(u[o.start], u[o.end]);
          return a(u[o.start]) || a(u[o.end]) || d(n[o.start]) || d(n[o.end]);
        })
        .sort((p, u) => {
          let d = ce(p)[o.crossAxisStart],
            m = ce(u)[o.crossAxisStart];
          return e ? d - m : m - d;
        })
        .filter(
          (p, u, d) => ce(p)[o.crossAxisStart] === ce(d[0])[o.crossAxisStart],
        );
    if (!l.length) return null;
    if (l.length === 1) return l[0];
    let c = l.filter((p) => Re(ce(p)[o.start], ce(p)[o.end])(t[o.line]));
    return c.length === 1
      ? c[0]
      : c.length > 1
        ? c.sort((p, u) => ce(p)[o.start] - ce(u)[o.start])[0]
        : l.sort((p, u) => {
            let d = Ia(t, xa(ce(p))),
              m = Ia(t, xa(ce(u)));
            return d !== m ? d - m : ce(p)[o.start] - ce(u)[o.start];
          })[0];
  },
  Fa = (e, t) => {
    let r = e.page.borderBox.center;
    return Qe(e.descriptor.id, t) ? me(r, t.displacedBy.point) : r;
  },
  nm = (e, t) => {
    let r = e.page.borderBox;
    return Qe(e.descriptor.id, t) ? sr(r, St(t.displacedBy.point)) : r;
  },
  om = ({
    pageBorderBoxCenter: e,
    viewport: t,
    destination: r,
    insideDestination: s,
    afterCritical: i,
  }) =>
    s
      .filter((o) =>
        ol({
          target: nm(o, i),
          destination: r,
          viewport: t.frame,
          withDroppableDisplacement: !0,
        }),
      )
      .sort((o, a) => {
        let l = Kt(e, xi(r, Fa(o, i))),
          c = Kt(e, xi(r, Fa(a, i)));
        return l < c ? -1 : c < l ? 1 : o.descriptor.index - a.descriptor.index;
      })[0] || null,
  ir = te(function (t, r) {
    let s = r[t.line];
    return { value: s, point: it(t.line, s) };
  }),
  am = (e, t, r) => {
    let s = e.axis;
    if (e.descriptor.mode === "virtual") return it(s.line, t[s.line]);
    let i = e.subject.page.contentBox[s.size],
      l =
        Wt(e.descriptor.id, r).reduce(
          (c, p) => c + p.client.marginBox[s.size],
          0,
        ) +
        t[s.line] -
        i;
    return l <= 0 ? null : it(s.line, l);
  },
  ul = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
  dl = (e, t, r) => {
    let s = e.frame;
    Rt(t, e) && b(!1), e.subject.withPlaceholder && b(!1);
    let i = ir(e.axis, t.displaceBy).point,
      n = am(e, i, r),
      o = {
        placeholderSize: i,
        increasedBy: n,
        oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
      };
    if (!s) {
      let p = yt({
        page: e.subject.page,
        withPlaceholder: o,
        axis: e.axis,
        frame: e.frame,
      });
      return { ...e, subject: p };
    }
    let a = n ? ne(s.scroll.max, n) : s.scroll.max,
      l = ul(s, a),
      c = yt({
        page: e.subject.page,
        withPlaceholder: o,
        axis: e.axis,
        frame: l,
      });
    return { ...e, subject: c, frame: l };
  },
  lm = (e) => {
    let t = e.subject.withPlaceholder;
    t || b(!1);
    let r = e.frame;
    if (!r) {
      let o = yt({
        page: e.subject.page,
        axis: e.axis,
        frame: null,
        withPlaceholder: null,
      });
      return { ...e, subject: o };
    }
    let s = t.oldFrameMaxScroll;
    s || b(!1);
    let i = ul(r, s),
      n = yt({
        page: e.subject.page,
        axis: e.axis,
        frame: i,
        withPlaceholder: null,
      });
    return { ...e, subject: n, frame: i };
  },
  cm = ({
    previousPageBorderBoxCenter: e,
    moveRelativeTo: t,
    insideDestination: r,
    draggable: s,
    draggables: i,
    destination: n,
    viewport: o,
    afterCritical: a,
  }) => {
    if (!t) {
      if (r.length) return null;
      let u = {
          displaced: Yt,
          displacedBy: sl,
          at: {
            type: "REORDER",
            destination: { droppableId: n.descriptor.id, index: 0 },
          },
        },
        d = ss({
          impact: u,
          draggable: s,
          droppable: n,
          draggables: i,
          afterCritical: a,
        }),
        m = Rt(s, n) ? n : dl(n, s, i);
      return cl({
        draggable: s,
        destination: m,
        newPageBorderBoxCenter: d,
        viewport: o.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? u
        : null;
    }
    let l = e[n.axis.line] <= t.page.borderBox.center[n.axis.line],
      c = (() => {
        let u = t.descriptor.index;
        return t.descriptor.id === s.descriptor.id || l ? u : u + 1;
      })(),
      p = ir(n.axis, s.displaceBy);
    return Jr({
      draggable: s,
      insideDestination: r,
      destination: n,
      viewport: o,
      displacedBy: p,
      last: Yt,
      index: c,
    });
  },
  um = ({
    isMovingForward: e,
    previousPageBorderBoxCenter: t,
    draggable: r,
    isOver: s,
    draggables: i,
    droppables: n,
    viewport: o,
    afterCritical: a,
  }) => {
    let l = im({
      isMovingForward: e,
      pageBorderBoxCenter: t,
      source: s,
      droppables: n,
      viewport: o,
    });
    if (!l) return null;
    let c = Wt(l.descriptor.id, i),
      p = om({
        pageBorderBoxCenter: t,
        viewport: o,
        destination: l,
        insideDestination: c,
        afterCritical: a,
      }),
      u = cm({
        previousPageBorderBoxCenter: t,
        destination: l,
        draggable: r,
        draggables: i,
        moveRelativeTo: p,
        insideDestination: c,
        viewport: o,
        afterCritical: a,
      });
    if (!u) return null;
    let d = ss({
      impact: u,
      draggable: r,
      droppable: l,
      draggables: i,
      afterCritical: a,
    });
    return {
      clientSelection: Li({
        pageBorderBoxCenter: d,
        draggable: r,
        viewport: o,
      }),
      impact: u,
      scrollJumpRequest: null,
    };
  },
  fe = (e) => {
    let t = e.at;
    return t
      ? t.type === "REORDER"
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  },
  dm = (e, t) => {
    let r = fe(e);
    return r ? t[r] : null;
  },
  pm = ({ state: e, type: t }) => {
    let r = dm(e.impact, e.dimensions.droppables),
      s = !!r,
      i = e.dimensions.droppables[e.critical.droppable.id],
      n = r || i,
      o = n.axis.direction,
      a =
        (o === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
        (o === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
    if (a && !s) return null;
    let l = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
      c = e.dimensions.draggables[e.critical.draggable.id],
      p = e.current.page.borderBoxCenter,
      { draggables: u, droppables: d } = e.dimensions;
    return a
      ? sm({
          isMovingForward: l,
          previousPageBorderBoxCenter: p,
          draggable: c,
          destination: n,
          draggables: u,
          viewport: e.viewport,
          previousClientSelection: e.current.client.selection,
          previousImpact: e.impact,
          afterCritical: e.afterCritical,
        })
      : um({
          isMovingForward: l,
          previousPageBorderBoxCenter: p,
          draggable: c,
          isOver: n,
          draggables: u,
          droppables: d,
          viewport: e.viewport,
          afterCritical: e.afterCritical,
        });
  };
function rt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function pl(e) {
  let t = Re(e.top, e.bottom),
    r = Re(e.left, e.right);
  return function (i) {
    return t(i.y) && r(i.x);
  };
}
function mm(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function fm({ pageBorderBox: e, draggable: t, candidates: r }) {
  let s = t.page.borderBox.center,
    i = r
      .map((n) => {
        let o = n.axis,
          a = it(
            n.axis.line,
            e.center[o.line],
            n.page.borderBox.center[o.crossAxisLine],
          );
        return { id: n.descriptor.id, distance: Kt(s, a) };
      })
      .sort((n, o) => o.distance - n.distance);
  return i[0] ? i[0].id : null;
}
function hm({ pageBorderBox: e, draggable: t, droppables: r }) {
  let s = es(r).filter((i) => {
    if (!i.isEnabled) return !1;
    let n = i.subject.active;
    if (!n || !mm(e, n)) return !1;
    if (pl(n)(e.center)) return !0;
    let o = i.axis,
      a = n.center[o.crossAxisLine],
      l = e[o.crossAxisStart],
      c = e[o.crossAxisEnd],
      p = Re(n[o.crossAxisStart], n[o.crossAxisEnd]),
      u = p(l),
      d = p(c);
    return !u && !d ? !0 : u ? l < a : c > a;
  });
  return s.length
    ? s.length === 1
      ? s[0].descriptor.id
      : fm({ pageBorderBox: e, draggable: t, candidates: s })
    : null;
}
var ml = (e, t) => Se(sr(e, t)),
  gm = (e, t) => {
    let r = e.frame;
    return r ? ml(t, r.scroll.diff.value) : t;
  };
function fl({ displaced: e, id: t }) {
  return !!(e.visible[t] || e.invisible[t]);
}
function bm({ draggable: e, closest: t, inHomeList: r }) {
  return t
    ? r && t.descriptor.index > e.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var _m = ({
    pageBorderBoxWithDroppableScroll: e,
    draggable: t,
    destination: r,
    insideDestination: s,
    last: i,
    viewport: n,
    afterCritical: o,
  }) => {
    let a = r.axis,
      l = ir(r.axis, t.displaceBy),
      c = l.value,
      p = e[a.start],
      u = e[a.end],
      m =
        rs(t, s).find((g) => {
          let h = g.descriptor.id,
            y = g.page.borderBox.center[a.line],
            C = Qe(h, o),
            x = fl({ displaced: i, id: h });
          return C ? (x ? u <= y : p < y - c) : x ? u <= y + c : p < y;
        }) || null,
      f = bm({ draggable: t, closest: m, inHomeList: Rt(t, r) });
    return Jr({
      draggable: t,
      insideDestination: s,
      destination: r,
      viewport: n,
      last: i,
      displacedBy: l,
      index: f,
    });
  },
  ym = 4,
  vm = ({
    draggable: e,
    pageBorderBoxWithDroppableScroll: t,
    previousImpact: r,
    destination: s,
    insideDestination: i,
    afterCritical: n,
  }) => {
    if (!s.isCombineEnabled) return null;
    let o = s.axis,
      a = ir(s.axis, e.displaceBy),
      l = a.value,
      c = t[o.start],
      p = t[o.end],
      d = rs(e, i).find((f) => {
        let g = f.descriptor.id,
          h = f.page.borderBox,
          C = h[o.size] / ym,
          x = Qe(g, n),
          I = fl({ displaced: r.displaced, id: g });
        return x
          ? I
            ? p > h[o.start] + C && p < h[o.end] - C
            : c > h[o.start] - l + C && c < h[o.end] - l - C
          : I
            ? p > h[o.start] + l + C && p < h[o.end] + l - C
            : c > h[o.start] + C && c < h[o.end] - C;
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
  hl = ({
    pageOffset: e,
    draggable: t,
    draggables: r,
    droppables: s,
    previousImpact: i,
    viewport: n,
    afterCritical: o,
  }) => {
    let a = ml(t.page.borderBox, e),
      l = hm({ pageBorderBox: a, draggable: t, droppables: s });
    if (!l) return Np;
    let c = s[l],
      p = Wt(c.descriptor.id, r),
      u = gm(c, a);
    return (
      vm({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        previousImpact: i,
        destination: c,
        insideDestination: p,
        afterCritical: o,
      }) ||
      _m({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        destination: c,
        insideDestination: p,
        last: i.displaced,
        viewport: n,
        afterCritical: o,
      })
    );
  },
  ki = (e, t) => ({ ...e, [t.descriptor.id]: t }),
  Cm = ({ previousImpact: e, impact: t, droppables: r }) => {
    let s = fe(e),
      i = fe(t);
    if (!s || s === i) return r;
    let n = r[s];
    if (!n.subject.withPlaceholder) return r;
    let o = lm(n);
    return ki(r, o);
  },
  Sm = ({
    draggable: e,
    draggables: t,
    droppables: r,
    previousImpact: s,
    impact: i,
  }) => {
    let n = Cm({ previousImpact: s, impact: i, droppables: r }),
      o = fe(i);
    if (!o) return n;
    let a = r[o];
    if (Rt(e, a) || a.subject.withPlaceholder) return n;
    let l = dl(a, e, t);
    return ki(n, l);
  },
  $t = ({
    state: e,
    clientSelection: t,
    dimensions: r,
    viewport: s,
    impact: i,
    scrollJumpRequest: n,
  }) => {
    let o = s || e.viewport,
      a = r || e.dimensions,
      l = t || e.current.client.selection,
      c = me(l, e.initial.client.selection),
      p = {
        offset: c,
        selection: l,
        borderBoxCenter: ne(e.initial.client.borderBoxCenter, c),
      },
      u = {
        selection: ne(p.selection, o.scroll.current),
        borderBoxCenter: ne(p.borderBoxCenter, o.scroll.current),
        offset: ne(p.offset, o.scroll.diff.value),
      },
      d = { client: p, page: u };
    if (e.phase === "COLLECTING")
      return { ...e, dimensions: a, viewport: o, current: d };
    let m = a.draggables[e.critical.draggable.id],
      f =
        i ||
        hl({
          pageOffset: u.offset,
          draggable: m,
          draggables: a.draggables,
          droppables: a.droppables,
          previousImpact: e.impact,
          viewport: o,
          afterCritical: e.afterCritical,
        }),
      g = Sm({
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
      viewport: o,
      scrollJumpRequest: n || null,
      forceShouldAnimate: n ? !1 : null,
    };
  };
function Wm(e, t) {
  return e.map((r) => t[r]);
}
var gl = ({
    impact: e,
    viewport: t,
    draggables: r,
    destination: s,
    forceShouldAnimate: i,
  }) => {
    let n = e.displaced,
      o = Wm(n.all, r),
      a = Xt({
        afterDragging: o,
        destination: s,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: i,
        last: n,
      });
    return { ...e, displaced: a };
  },
  bl = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: s,
    viewport: i,
    afterCritical: n,
  }) => {
    let o = ss({
      impact: e,
      draggable: t,
      draggables: s,
      droppable: r,
      afterCritical: n,
    });
    return Li({ pageBorderBoxCenter: o, draggable: t, viewport: i });
  },
  _l = ({ state: e, dimensions: t, viewport: r }) => {
    e.movementMode !== "SNAP" && b(!1);
    let s = e.impact,
      i = r || e.viewport,
      n = t || e.dimensions,
      { draggables: o, droppables: a } = n,
      l = o[e.critical.draggable.id],
      c = fe(s);
    c || b(!1);
    let p = a[c],
      u = gl({ impact: s, viewport: i, destination: p, draggables: o }),
      d = bl({
        impact: u,
        draggable: l,
        droppable: p,
        draggables: o,
        viewport: i,
        afterCritical: e.afterCritical,
      });
    return $t({
      impact: u,
      clientSelection: d,
      state: e,
      dimensions: n,
      viewport: i,
    });
  },
  Rm = (e) => ({ index: e.index, droppableId: e.droppableId }),
  yl = ({ draggable: e, home: t, draggables: r, viewport: s }) => {
    let i = ir(t.axis, e.displaceBy),
      n = Wt(t.descriptor.id, r),
      o = n.indexOf(e);
    o === -1 && b(!1);
    let a = n.slice(o + 1),
      l = a.reduce((d, m) => ((d[m.descriptor.id] = !0), d), {}),
      c = {
        inVirtualList: t.descriptor.mode === "virtual",
        displacedBy: i,
        effected: l,
      };
    return {
      impact: {
        displaced: Xt({
          afterDragging: a,
          destination: t,
          displacedBy: i,
          last: null,
          viewport: s.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: i,
        at: { type: "REORDER", destination: Rm(e.descriptor) },
      },
      afterCritical: c,
    };
  },
  wm = (e, t) => ({
    draggables: e.draggables,
    droppables: ki(e.droppables, t),
  }),
  nr = (e) => {},
  or = (e) => {},
  Im = ({ draggable: e, offset: t, initialWindowScroll: r }) => {
    let s = Ht(e.client, t),
      i = Vt(s, r);
    return {
      ...e,
      placeholder: { ...e.placeholder, client: s },
      client: s,
      page: i,
    };
  },
  xm = (e) => {
    let t = e.frame;
    return t || b(!1), t;
  },
  Pm = ({ additions: e, updatedDroppables: t, viewport: r }) => {
    let s = r.scroll.diff.value;
    return e.map((i) => {
      let n = i.descriptor.droppableId,
        o = t[n],
        l = xm(o).scroll.diff.value,
        c = ne(s, l);
      return Im({
        draggable: i,
        offset: c,
        initialWindowScroll: r.scroll.initial,
      });
    });
  },
  Em = "Processing dynamic changes",
  Dm = ({ state: e, published: t }) => {
    nr();
    let r = t.modified.map((y) => {
        let C = e.dimensions.droppables[y.droppableId];
        return Ni(C, y.scroll);
      }),
      s = { ...e.dimensions.droppables, ...tl(r) },
      i = rl(
        Pm({
          additions: t.additions,
          updatedDroppables: s,
          viewport: e.viewport,
        }),
      ),
      n = { ...e.dimensions.draggables, ...i };
    t.removals.forEach((y) => {
      delete n[y];
    });
    let o = { droppables: s, draggables: n },
      a = fe(e.impact),
      l = a ? o.droppables[a] : null,
      c = o.draggables[e.critical.draggable.id],
      p = o.droppables[e.critical.droppable.id],
      { impact: u, afterCritical: d } = yl({
        draggable: c,
        home: p,
        draggables: n,
        viewport: e.viewport,
      }),
      m = l && l.isCombineEnabled ? e.impact : u,
      f = hl({
        pageOffset: e.current.page.offset,
        draggable: o.draggables[e.critical.draggable.id],
        draggables: o.draggables,
        droppables: o.droppables,
        previousImpact: m,
        viewport: e.viewport,
        afterCritical: d,
      });
    or(Em);
    let g = {
      ...e,
      phase: "DRAGGING",
      impact: f,
      onLiftImpact: u,
      dimensions: o,
      afterCritical: d,
      forceShouldAnimate: !1,
    };
    return e.phase === "COLLECTING"
      ? g
      : { ...g, phase: "DROP_PENDING", reason: e.reason, isWaiting: !1 };
  },
  Pi = (e) => e.movementMode === "SNAP",
  gi = (e, t, r) => {
    let s = wm(e.dimensions, t);
    return !Pi(e) || r
      ? $t({ state: e, dimensions: s })
      : _l({ state: e, dimensions: s });
  };
function bi(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? { ...e, scrollJumpRequest: null }
    : e;
}
var Oa = { phase: "IDLE", completed: null, shouldFlush: !1 },
  Bm = (e = Oa, t) => {
    if (t.type === "FLUSH") return { ...Oa, shouldFlush: !0 };
    if (t.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && b(!1);
      let {
          critical: r,
          clientSelection: s,
          viewport: i,
          dimensions: n,
          movementMode: o,
        } = t.payload,
        a = n.draggables[r.draggable.id],
        l = n.droppables[r.droppable.id],
        c = {
          selection: s,
          borderBoxCenter: a.client.borderBox.center,
          offset: se,
        },
        p = {
          client: c,
          page: {
            selection: ne(c.selection, i.scroll.initial),
            borderBoxCenter: ne(c.selection, i.scroll.initial),
            offset: ne(c.selection, i.scroll.diff.value),
          },
        },
        u = es(n.droppables).every((g) => !g.isFixedOnPage),
        { impact: d, afterCritical: m } = yl({
          draggable: a,
          home: l,
          draggables: n.draggables,
          viewport: i,
        });
      return {
        phase: "DRAGGING",
        isDragging: !0,
        critical: r,
        movementMode: o,
        dimensions: n,
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
        : (e.phase !== "DRAGGING" && b(!1), { ...e, phase: "COLLECTING" });
    if (t.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || b(!1),
        Dm({ state: e, published: t.payload })
      );
    if (t.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      rt(e) || b(!1);
      let { client: r } = t.payload;
      return $e(r, e.current.client.selection)
        ? e
        : $t({ state: e, clientSelection: r, impact: Pi(e) ? e.impact : null });
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return bi(e);
      rt(e) || b(!1);
      let { id: r, newScroll: s } = t.payload,
        i = e.dimensions.droppables[r];
      if (!i) return e;
      let n = Ni(i, s);
      return gi(e, n, !1);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      rt(e) || b(!1);
      let { id: r, isEnabled: s } = t.payload,
        i = e.dimensions.droppables[r];
      i || b(!1), i.isEnabled === s && b(!1);
      let n = { ...i, isEnabled: s };
      return gi(e, n, !0);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      rt(e) || b(!1);
      let { id: r, isCombineEnabled: s } = t.payload,
        i = e.dimensions.droppables[r];
      i || b(!1), i.isCombineEnabled === s && b(!1);
      let n = { ...i, isCombineEnabled: s };
      return gi(e, n, !0);
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      rt(e) || b(!1), e.isWindowScrollAllowed || b(!1);
      let r = t.payload.newScroll;
      if ($e(e.viewport.scroll.current, r)) return bi(e);
      let s = ll(e.viewport, r);
      return Pi(e)
        ? _l({ state: e, viewport: s })
        : $t({ state: e, viewport: s });
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!rt(e)) return e;
      let r = t.payload.maxScroll;
      if ($e(r, e.viewport.scroll.max)) return e;
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
      e.phase !== "DRAGGING" && b(!1);
      let r = pm({ state: e, type: t.type });
      return r
        ? $t({
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
      let { completed: r, dropDuration: s, newHomeClientOffset: i } = t.payload;
      return (
        e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || b(!1),
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
  Fm = (e) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: e }),
  Om = (e) => ({ type: "LIFT", payload: e }),
  Nm = (e) => ({ type: "INITIAL_PUBLISH", payload: e }),
  Tm = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
  Am = () => ({ type: "COLLECTION_STARTING", payload: null }),
  Mm = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
  Gm = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
  Lm = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
  vl = (e) => ({ type: "MOVE", payload: e }),
  km = (e) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: e }),
  zm = (e) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e }),
  Hm = () => ({ type: "MOVE_UP", payload: null }),
  Vm = () => ({ type: "MOVE_DOWN", payload: null }),
  jm = () => ({ type: "MOVE_RIGHT", payload: null }),
  Um = () => ({ type: "MOVE_LEFT", payload: null }),
  zi = () => ({ type: "FLUSH", payload: null }),
  qm = (e) => ({ type: "DROP_ANIMATE", payload: e }),
  Hi = (e) => ({ type: "DROP_COMPLETE", payload: e }),
  Cl = (e) => ({ type: "DROP", payload: e }),
  $m = (e) => ({ type: "DROP_PENDING", payload: e }),
  Sl = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
var Qm =
    (e) =>
    ({ getState: t, dispatch: r }) =>
    (s) =>
    (i) => {
      if (i.type !== "LIFT") {
        s(i);
        return;
      }
      let { id: n, clientSelection: o, movementMode: a } = i.payload,
        l = t();
      l.phase === "DROP_ANIMATING" && r(Hi({ completed: l.completed })),
        t().phase !== "IDLE" && b(!1),
        r(zi()),
        r(Fm({ draggableId: n, movementMode: a }));
      let p = {
          draggableId: n,
          scrollOptions: { shouldPublishImmediately: a === "SNAP" },
        },
        { critical: u, dimensions: d, viewport: m } = e.startPublishing(p);
      r(
        Nm({
          critical: u,
          dimensions: d,
          clientSelection: o,
          movementMode: a,
          viewport: m,
        }),
      );
    },
  Km = (e) => () => (t) => (r) => {
    r.type === "INITIAL_PUBLISH" && e.dragging(),
      r.type === "DROP_ANIMATE" &&
        e.dropping(r.payload.completed.result.reason),
      (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
      t(r);
  },
  Vi = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  Jt = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  Wl = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  tt = `${Wl.outOfTheWay}s ${Vi.outOfTheWay}`,
  Qt = {
    fluid: `opacity ${tt}`,
    snap: `transform ${tt}, opacity ${tt}`,
    drop: (e) => {
      let t = `${e}s ${Vi.drop}`;
      return `transform ${t}, opacity ${t}`;
    },
    outOfTheWay: `transform ${tt}`,
    placeholder: `height ${tt}, width ${tt}, margin ${tt}`,
  },
  Na = (e) => ($e(e, se) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
  Ei = {
    moveTo: Na,
    drop: (e, t) => {
      let r = Na(e);
      if (r) return t ? `${r} scale(${Jt.scale.drop})` : r;
    },
  },
  { minDropTime: Di, maxDropTime: Rl } = Wl,
  Ym = Rl - Di,
  Ta = 1500,
  Xm = 0.6,
  Jm = ({ current: e, destination: t, reason: r }) => {
    let s = Kt(e, t);
    if (s <= 0) return Di;
    if (s >= Ta) return Rl;
    let i = s / Ta,
      n = Di + Ym * i,
      o = r === "CANCEL" ? n * Xm : n;
    return Number(o.toFixed(2));
  },
  Zm = ({
    impact: e,
    draggable: t,
    dimensions: r,
    viewport: s,
    afterCritical: i,
  }) => {
    let { draggables: n, droppables: o } = r,
      a = fe(e),
      l = a ? o[a] : null,
      c = o[t.descriptor.droppableId],
      p = bl({
        impact: e,
        draggable: t,
        draggables: n,
        afterCritical: i,
        droppable: l || c,
        viewport: s,
      });
    return me(p, t.client.borderBox.center);
  },
  ef = ({
    draggables: e,
    reason: t,
    lastImpact: r,
    home: s,
    viewport: i,
    onLiftImpact: n,
  }) =>
    !r.at || t !== "DROP"
      ? {
          impact: gl({
            draggables: e,
            impact: n,
            destination: s,
            viewport: i,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : r.at.type === "REORDER"
        ? { impact: r, didDropInsideDroppable: !0 }
        : { impact: { ...r, displaced: Yt }, didDropInsideDroppable: !0 },
  tf =
    ({ getState: e, dispatch: t }) =>
    (r) =>
    (s) => {
      if (s.type !== "DROP") {
        r(s);
        return;
      }
      let i = e(),
        n = s.payload.reason;
      if (i.phase === "COLLECTING") {
        t($m({ reason: n }));
        return;
      }
      if (i.phase === "IDLE") return;
      i.phase === "DROP_PENDING" && i.isWaiting && b(!1),
        i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || b(!1);
      let a = i.critical,
        l = i.dimensions,
        c = l.draggables[i.critical.draggable.id],
        { impact: p, didDropInsideDroppable: u } = ef({
          reason: n,
          lastImpact: i.impact,
          afterCritical: i.afterCritical,
          onLiftImpact: i.onLiftImpact,
          home: i.dimensions.droppables[i.critical.droppable.id],
          viewport: i.viewport,
          draggables: i.dimensions.draggables,
        }),
        d = u ? Ti(p) : null,
        m = u ? ts(p) : null,
        f = { index: a.draggable.index, droppableId: a.droppable.id },
        g = {
          draggableId: c.descriptor.id,
          type: c.descriptor.type,
          source: f,
          reason: n,
          mode: i.movementMode,
          destination: d,
          combine: m,
        },
        h = Zm({
          impact: p,
          draggable: c,
          dimensions: l,
          viewport: i.viewport,
          afterCritical: i.afterCritical,
        }),
        y = {
          critical: i.critical,
          afterCritical: i.afterCritical,
          result: g,
          impact: p,
        };
      if (!(!$e(i.current.client.offset, h) || !!g.combine)) {
        t(Hi({ completed: y }));
        return;
      }
      let x = Jm({
        current: i.current.client.offset,
        destination: h,
        reason: n,
      });
      t(qm({ newHomeClientOffset: h, dropDuration: x, completed: y }));
    },
  rf = tf,
  wl = () => ({ x: window.pageXOffset, y: window.pageYOffset });
function sf(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: (t) => {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function nf({ onWindowScroll: e }) {
  function t() {
    e(wl());
  }
  let r = _t(t),
    s = sf(r),
    i = qe;
  function n() {
    return i !== qe;
  }
  function o() {
    n() && b(!1), (i = We(window, [s]));
  }
  function a() {
    n() || b(!1), r.cancel(), i(), (i = qe);
  }
  return { start: o, stop: a, isActive: n };
}
var of = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  af = (e) => {
    let t = nf({
      onWindowScroll: (r) => {
        e.dispatch(km({ newScroll: r }));
      },
    });
    return (r) => (s) => {
      !t.isActive() && s.type === "INITIAL_PUBLISH" && t.start(),
        t.isActive() && of(s) && t.stop(),
        r(s);
    };
  },
  lf = af,
  cf = (e) => {
    let t = !1,
      r = !1,
      s = setTimeout(() => {
        r = !0;
      }),
      i = (n) => {
        t || r || ((t = !0), e(n), clearTimeout(s));
      };
    return (i.wasCalled = () => t), i;
  },
  uf = () => {
    let e = [],
      t = (i) => {
        let n = e.findIndex((a) => a.timerId === i);
        n === -1 && b(!1);
        let [o] = e.splice(n, 1);
        o.callback();
      };
    return {
      add: (i) => {
        let n = setTimeout(() => t(n)),
          o = { timerId: n, callback: i };
        e.push(o);
      },
      flush: () => {
        if (!e.length) return;
        let i = [...e];
        (e.length = 0),
          i.forEach((n) => {
            clearTimeout(n.timerId), n.callback();
          });
      },
    };
  },
  df = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.droppableId === t.droppableId && e.index === t.index,
  pf = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.draggableId === t.draggableId && e.droppableId === t.droppableId,
  mf = (e, t) => {
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
  jt = (e, t) => {
    nr(), t(), or();
  },
  $r = (e, t) => ({
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: { droppableId: e.droppable.id, index: e.draggable.index },
    mode: t,
  });
function _i(e, t, r, s) {
  if (!e) {
    r(s(t));
    return;
  }
  let i = cf(r);
  e(t, { announce: i }), i.wasCalled() || r(s(t));
}
var ff = (e, t) => {
    let r = uf(),
      s = null,
      i = (u, d) => {
        s && b(!1),
          jt("onBeforeCapture", () => {
            let m = e().onBeforeCapture;
            m && m({ draggableId: u, mode: d });
          });
      },
      n = (u, d) => {
        s && b(!1),
          jt("onBeforeDragStart", () => {
            let m = e().onBeforeDragStart;
            m && m($r(u, d));
          });
      },
      o = (u, d) => {
        s && b(!1);
        let m = $r(u, d);
        (s = {
          mode: d,
          lastCritical: u,
          lastLocation: m.source,
          lastCombine: null,
        }),
          r.add(() => {
            jt("onDragStart", () => _i(e().onDragStart, m, t, Yr.onDragStart));
          });
      },
      a = (u, d) => {
        let m = Ti(d),
          f = ts(d);
        s || b(!1);
        let g = !mf(u, s.lastCritical);
        g && (s.lastCritical = u);
        let h = !df(s.lastLocation, m);
        h && (s.lastLocation = m);
        let y = !pf(s.lastCombine, f);
        if ((y && (s.lastCombine = f), !g && !h && !y)) return;
        let C = { ...$r(u, s.mode), combine: f, destination: m };
        r.add(() => {
          jt("onDragUpdate", () => _i(e().onDragUpdate, C, t, Yr.onDragUpdate));
        });
      },
      l = () => {
        s || b(!1), r.flush();
      },
      c = (u) => {
        s || b(!1),
          (s = null),
          jt("onDragEnd", () => _i(e().onDragEnd, u, t, Yr.onDragEnd));
      };
    return {
      beforeCapture: i,
      beforeStart: n,
      start: o,
      update: a,
      flush: l,
      drop: c,
      abort: () => {
        if (!s) return;
        let u = {
          ...$r(s.lastCritical, s.mode),
          combine: null,
          destination: null,
          reason: "CANCEL",
        };
        c(u);
      },
    };
  },
  hf = (e, t) => {
    let r = ff(e, t);
    return (s) => (i) => (n) => {
      if (n.type === "BEFORE_INITIAL_CAPTURE") {
        r.beforeCapture(n.payload.draggableId, n.payload.movementMode);
        return;
      }
      if (n.type === "INITIAL_PUBLISH") {
        let a = n.payload.critical;
        r.beforeStart(a, n.payload.movementMode),
          i(n),
          r.start(a, n.payload.movementMode);
        return;
      }
      if (n.type === "DROP_COMPLETE") {
        let a = n.payload.completed.result;
        r.flush(), i(n), r.drop(a);
        return;
      }
      if ((i(n), n.type === "FLUSH")) {
        r.abort();
        return;
      }
      let o = s.getState();
      o.phase === "DRAGGING" && r.update(o.critical, o.impact);
    };
  },
  gf = (e) => (t) => (r) => {
    if (r.type !== "DROP_ANIMATION_FINISHED") {
      t(r);
      return;
    }
    let s = e.getState();
    s.phase !== "DROP_ANIMATING" && b(!1),
      e.dispatch(Hi({ completed: s.completed }));
  },
  bf = gf,
  _f = (e) => {
    let t = null,
      r = null;
    function s() {
      r && (cancelAnimationFrame(r), (r = null)), t && (t(), (t = null));
    }
    return (i) => (n) => {
      if (
        ((n.type === "FLUSH" ||
          n.type === "DROP_COMPLETE" ||
          n.type === "DROP_ANIMATION_FINISHED") &&
          s(),
        i(n),
        n.type !== "DROP_ANIMATE")
      )
        return;
      let o = {
        eventName: "scroll",
        options: { capture: !0, passive: !1, once: !0 },
        fn: function () {
          e.getState().phase === "DROP_ANIMATING" && e.dispatch(Sl());
        },
      };
      r = requestAnimationFrame(() => {
        (r = null), (t = We(window, [o]));
      });
    };
  },
  yf = _f,
  vf = (e) => () => (t) => (r) => {
    (r.type === "DROP_COMPLETE" ||
      r.type === "FLUSH" ||
      r.type === "DROP_ANIMATE") &&
      e.stopPublishing(),
      t(r);
  },
  Cf = (e) => {
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
  Sf = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  Wf = (e) => (t) => (r) => (s) => {
    if (Sf(s)) {
      e.stop(), r(s);
      return;
    }
    if (s.type === "INITIAL_PUBLISH") {
      r(s);
      let i = t.getState();
      i.phase !== "DRAGGING" && b(!1), e.start(i);
      return;
    }
    r(s), e.scroll(t.getState());
  },
  Rf = (e) => (t) => (r) => {
    if ((t(r), r.type !== "PUBLISH_WHILE_DRAGGING")) return;
    let s = e.getState();
    s.phase === "DROP_PENDING" &&
      (s.isWaiting || e.dispatch(Cl({ reason: s.reason })));
  },
  wf = Rf,
  If = ii,
  xf = ({
    dimensionMarshal: e,
    focusMarshal: t,
    styleMarshal: r,
    getResponders: s,
    announce: i,
    autoScroller: n,
  }) =>
    ri(
      Bm,
      If(Qo(Km(r), vf(e), Qm(e), rf, bf, yf, wf, Wf(n), lf, Cf(t), hf(s, i))),
    ),
  yi = () => ({ additions: {}, removals: {}, modified: {} });
function Pf({ registry: e, callbacks: t }) {
  let r = yi(),
    s = null,
    i = () => {
      s ||
        (t.collectionStarting(),
        (s = requestAnimationFrame(() => {
          (s = null), nr();
          let { additions: l, removals: c, modified: p } = r,
            u = Object.keys(l)
              .map((f) => e.draggable.getById(f).getDimension(se))
              .sort((f, g) => f.descriptor.index - g.descriptor.index),
            d = Object.keys(p).map((f) => {
              let h = e.droppable.getById(f).callbacks.getScrollWhileDragging();
              return { droppableId: f, scroll: h };
            }),
            m = { additions: u, removals: Object.keys(c), modified: d };
          (r = yi()), or(), t.publish(m);
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
      s && (cancelAnimationFrame(s), (s = null), (r = yi()));
    },
  };
}
var Il = ({ scrollHeight: e, scrollWidth: t, height: r, width: s }) => {
    let i = me({ x: t, y: e }, { x: s, y: r });
    return { x: Math.max(0, i.x), y: Math.max(0, i.y) };
  },
  xl = () => {
    let e = document.documentElement;
    return e || b(!1), e;
  },
  Pl = () => {
    let e = xl();
    return Il({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  Ef = () => {
    let e = wl(),
      t = Pl(),
      r = e.y,
      s = e.x,
      i = xl(),
      n = i.clientWidth,
      o = i.clientHeight,
      a = s + n,
      l = r + o;
    return {
      frame: Se({ top: r, left: s, right: a, bottom: l }),
      scroll: {
        initial: e,
        current: e,
        max: t,
        diff: { value: se, displacement: se },
      },
    };
  },
  Df = ({ critical: e, scrollOptions: t, registry: r }) => {
    nr();
    let s = Ef(),
      i = s.scroll.current,
      n = e.droppable,
      o = r.droppable
        .getAllByType(n.type)
        .map((p) => p.callbacks.getDimensionAndWatchScroll(i, t)),
      a = r.draggable
        .getAllByType(e.draggable.type)
        .map((p) => p.getDimension(i)),
      l = { draggables: rl(a), droppables: tl(o) };
    return or(), { dimensions: l, critical: e, viewport: s };
  };
function Aa(e, t, r) {
  return !(
    r.descriptor.id === t.id ||
    r.descriptor.type !== t.type ||
    e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual"
  );
}
var Bf = (e, t) => {
    let r = null,
      s = Pf({
        callbacks: {
          publish: t.publishWhileDragging,
          collectionStarting: t.collectionStarting,
        },
        registry: e,
      }),
      i = (d, m) => {
        e.droppable.exists(d) || b(!1),
          r && t.updateDroppableIsEnabled({ id: d, isEnabled: m });
      },
      n = (d, m) => {
        r &&
          (e.droppable.exists(d) || b(!1),
          t.updateDroppableIsCombineEnabled({ id: d, isCombineEnabled: m }));
      },
      o = (d, m) => {
        r &&
          (e.droppable.exists(d) || b(!1),
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
        r || b(!1);
        let m = r.critical.draggable;
        d.type === "ADDITION" && Aa(e, m, d.value) && s.add(d.value),
          d.type === "REMOVAL" && Aa(e, m, d.value) && s.remove(d.value);
      };
    return {
      updateDroppableIsEnabled: i,
      updateDroppableIsCombineEnabled: n,
      scrollDroppable: a,
      updateDroppableScroll: o,
      startPublishing: (d) => {
        r && b(!1);
        let m = e.draggable.getById(d.draggableId),
          f = e.droppable.getById(m.descriptor.droppableId),
          g = { draggable: m.descriptor, droppable: f.descriptor },
          h = e.subscribe(c);
        return (
          (r = { critical: g, unsubscribe: h }),
          Df({ critical: g, registry: e, scrollOptions: d.scrollOptions })
        );
      },
      stopPublishing: l,
    };
  },
  El = (e, t) =>
    e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
        ? !1
        : e.completed.result.reason === "DROP",
  Ff = (e) => {
    window.scrollBy(e.x, e.y);
  },
  Of = te((e) => es(e).filter((t) => !(!t.isEnabled || !t.frame))),
  Nf = (e, t) =>
    Of(t).find((s) => (s.frame || b(!1), pl(s.frame.pageMarginBox)(e))) || null,
  Tf = ({ center: e, destination: t, droppables: r }) => {
    if (t) {
      let i = r[t];
      return i.frame ? i : null;
    }
    return Nf(e, r);
  },
  Zt = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  },
  Af = (e, t, r = () => Zt) => {
    let s = r(),
      i = e[t.size] * s.startFromPercentage,
      n = e[t.size] * s.maxScrollAtPercentage;
    return { startScrollingFrom: i, maxScrollValueAt: n };
  },
  Dl = ({ startOfRange: e, endOfRange: t, current: r }) => {
    let s = t - e;
    return s === 0 ? 0 : (r - e) / s;
  },
  ji = 1,
  Mf = (e, t, r = () => Zt) => {
    let s = r();
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return s.maxPixelScroll;
    if (e === t.startScrollingFrom) return ji;
    let n =
        1 -
        Dl({
          startOfRange: t.maxScrollValueAt,
          endOfRange: t.startScrollingFrom,
          current: e,
        }),
      o = s.maxPixelScroll * s.ease(n);
    return Math.ceil(o);
  },
  Gf = (e, t, r) => {
    let s = r(),
      i = s.durationDampening.accelerateAt,
      n = s.durationDampening.stopDampeningAt,
      o = t,
      a = n,
      c = Date.now() - o;
    if (c >= n) return e;
    if (c < i) return ji;
    let p = Dl({ startOfRange: i, endOfRange: a, current: c }),
      u = e * s.ease(p);
    return Math.ceil(u);
  },
  Ma = ({
    distanceToEdge: e,
    thresholds: t,
    dragStartTime: r,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: i,
  }) => {
    let n = Mf(e, t, i);
    return n === 0 ? 0 : s ? Math.max(Gf(n, r, i), ji) : n;
  },
  Ga = ({
    container: e,
    distanceToEdges: t,
    dragStartTime: r,
    axis: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: n,
  }) => {
    let o = Af(e, s, n);
    return t[s.end] < t[s.start]
      ? Ma({
          distanceToEdge: t[s.end],
          thresholds: o,
          dragStartTime: r,
          shouldUseTimeDampening: i,
          getAutoScrollerOptions: n,
        })
      : -1 *
          Ma({
            distanceToEdge: t[s.start],
            thresholds: o,
            dragStartTime: r,
            shouldUseTimeDampening: i,
            getAutoScrollerOptions: n,
          });
  },
  Lf = ({ container: e, subject: t, proposedScroll: r }) => {
    let s = t.height > e.height,
      i = t.width > e.width;
    return !i && !s ? r : i && s ? null : { x: i ? 0 : r.x, y: s ? 0 : r.y };
  },
  kf = el((e) => (e === 0 ? 0 : e)),
  Bl = ({
    dragStartTime: e,
    container: t,
    subject: r,
    center: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: n,
  }) => {
    let o = {
        top: s.y - t.top,
        right: t.right - s.x,
        bottom: t.bottom - s.y,
        left: s.x - t.left,
      },
      a = Ga({
        container: t,
        distanceToEdges: o,
        dragStartTime: e,
        axis: Ai,
        shouldUseTimeDampening: i,
        getAutoScrollerOptions: n,
      }),
      l = Ga({
        container: t,
        distanceToEdges: o,
        dragStartTime: e,
        axis: nl,
        shouldUseTimeDampening: i,
        getAutoScrollerOptions: n,
      }),
      c = kf({ x: l, y: a });
    if ($e(c, se)) return null;
    let p = Lf({ container: t, subject: r, proposedScroll: c });
    return p ? ($e(p, se) ? null : p) : null;
  },
  zf = el((e) => (e === 0 ? 0 : e > 0 ? 1 : -1)),
  Ui = (() => {
    let e = (t, r) => (t < 0 ? t : t > r ? t - r : 0);
    return ({ current: t, max: r, change: s }) => {
      let i = ne(t, s),
        n = { x: e(i.x, r.x), y: e(i.y, r.y) };
      return $e(n, se) ? null : n;
    };
  })(),
  Fl = ({ max: e, current: t, change: r }) => {
    let s = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
      i = zf(r),
      n = Ui({ max: s, current: t, change: i });
    return !n || (i.x !== 0 && n.x === 0) || (i.y !== 0 && n.y === 0);
  },
  qi = (e, t) =>
    Fl({ current: e.scroll.current, max: e.scroll.max, change: t }),
  Hf = (e, t) => {
    if (!qi(e, t)) return null;
    let r = e.scroll.max,
      s = e.scroll.current;
    return Ui({ current: s, max: r, change: t });
  },
  $i = (e, t) => {
    let r = e.frame;
    return r
      ? Fl({ current: r.scroll.current, max: r.scroll.max, change: t })
      : !1;
  },
  Vf = (e, t) => {
    let r = e.frame;
    return !r || !$i(e, t)
      ? null
      : Ui({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  jf = ({
    viewport: e,
    subject: t,
    center: r,
    dragStartTime: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: n,
  }) => {
    let o = Bl({
      dragStartTime: s,
      container: e.frame,
      subject: t,
      center: r,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: n,
    });
    return o && qi(e, o) ? o : null;
  },
  Uf = ({
    droppable: e,
    subject: t,
    center: r,
    dragStartTime: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: n,
  }) => {
    let o = e.frame;
    if (!o) return null;
    let a = Bl({
      dragStartTime: s,
      container: o.pageMarginBox,
      subject: t,
      center: r,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: n,
    });
    return a && $i(e, a) ? a : null;
  },
  La = ({
    state: e,
    dragStartTime: t,
    shouldUseTimeDampening: r,
    scrollWindow: s,
    scrollDroppable: i,
    getAutoScrollerOptions: n,
  }) => {
    let o = e.current.page.borderBoxCenter,
      l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
    if (e.isWindowScrollAllowed) {
      let u = e.viewport,
        d = jf({
          dragStartTime: t,
          viewport: u,
          subject: l,
          center: o,
          shouldUseTimeDampening: r,
          getAutoScrollerOptions: n,
        });
      if (d) {
        s(d);
        return;
      }
    }
    let c = Tf({
      center: o,
      destination: fe(e.impact),
      droppables: e.dimensions.droppables,
    });
    if (!c) return;
    let p = Uf({
      dragStartTime: t,
      droppable: c,
      subject: l,
      center: o,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: n,
    });
    p && i(c.descriptor.id, p);
  },
  qf = ({
    scrollWindow: e,
    scrollDroppable: t,
    getAutoScrollerOptions: r = () => Zt,
  }) => {
    let s = _t(e),
      i = _t(t),
      n = null,
      o = (c) => {
        n || b(!1);
        let { shouldUseTimeDampening: p, dragStartTime: u } = n;
        La({
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
        nr(), n && b(!1);
        let p = Date.now(),
          u = !1,
          d = () => {
            u = !0;
          };
        La({
          state: c,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: d,
          scrollDroppable: d,
          getAutoScrollerOptions: r,
        }),
          (n = { dragStartTime: p, shouldUseTimeDampening: u }),
          or(),
          u && o(c);
      },
      stop: () => {
        n && (s.cancel(), i.cancel(), (n = null));
      },
      scroll: o,
    };
  },
  $f = ({ move: e, scrollDroppable: t, scrollWindow: r }) => {
    let s = (a, l) => {
        let c = ne(a.current.client.selection, l);
        e({ client: c });
      },
      i = (a, l) => {
        if (!$i(a, l)) return l;
        let c = Vf(a, l);
        if (!c) return t(a.descriptor.id, l), null;
        let p = me(l, c);
        return t(a.descriptor.id, p), me(l, p);
      },
      n = (a, l, c) => {
        if (!a || !qi(l, c)) return c;
        let p = Hf(l, c);
        if (!p) return r(c), null;
        let u = me(c, p);
        return r(u), me(c, u);
      };
    return (a) => {
      let l = a.scrollJumpRequest;
      if (!l) return;
      let c = fe(a.impact);
      c || b(!1);
      let p = i(a.dimensions.droppables[c], l);
      if (!p) return;
      let u = a.viewport,
        d = n(a.isWindowScrollAllowed, u, p);
      d && s(a, d);
    };
  },
  Qf = ({
    scrollDroppable: e,
    scrollWindow: t,
    move: r,
    getAutoScrollerOptions: s,
  }) => {
    let i = qf({
        scrollWindow: t,
        scrollDroppable: e,
        getAutoScrollerOptions: s,
      }),
      n = $f({ move: r, scrollWindow: t, scrollDroppable: e });
    return {
      scroll: (l) => {
        if (!(s().disabled || l.phase !== "DRAGGING")) {
          if (l.movementMode === "FLUID") {
            i.scroll(l);
            return;
          }
          l.scrollJumpRequest && n(l);
        }
      },
      start: i.start,
      stop: i.stop,
    };
  },
  vt = "data-rfd",
  Ct = (() => {
    let e = `${vt}-drag-handle`;
    return {
      base: e,
      draggableId: `${e}-draggable-id`,
      contextId: `${e}-context-id`,
    };
  })(),
  Bi = (() => {
    let e = `${vt}-draggable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  Kf = (() => {
    let e = `${vt}-droppable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  ka = { contextId: `${vt}-scroll-container-context-id` },
  Yf = (e) => (t) => `[${t}="${e}"]`,
  Ut = (e, t) =>
    e
      .map((r) => {
        let s = r.styles[t];
        return s ? `${r.selector} { ${s} }` : "";
      })
      .join(" "),
  Xf = "pointer-events: none;",
  Jf = (e) => {
    let t = Yf(e),
      r = (() => {
        let a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: t(Ct.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: a,
            dragging: Xf,
            dropAnimating: a,
          },
        };
      })(),
      s = (() => {
        let a = `
      transition: ${Qt.outOfTheWay};
    `;
        return {
          selector: t(Bi.contextId),
          styles: { dragging: a, dropAnimating: a, userCancel: a },
        };
      })(),
      i = {
        selector: t(Kf.contextId),
        styles: { always: "overflow-anchor: none;" },
      },
      o = [
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
      always: Ut(o, "always"),
      resting: Ut(o, "resting"),
      dragging: Ut(o, "dragging"),
      dropAnimating: Ut(o, "dropAnimating"),
      userCancel: Ut(o, "userCancel"),
    };
  },
  Zf =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? S.useLayoutEffect
      : S.useEffect,
  he = Zf,
  vi = () => {
    let e = document.querySelector("head");
    return e || b(!1), e;
  },
  za = (e) => {
    let t = document.createElement("style");
    return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
  };
function eh(e, t) {
  let r = F(() => Jf(e), [e]),
    s = (0, S.useRef)(null),
    i = (0, S.useRef)(null),
    n = w(
      te((u) => {
        let d = i.current;
        d || b(!1), (d.textContent = u);
      }),
      [],
    ),
    o = w((u) => {
      let d = s.current;
      d || b(!1), (d.textContent = u);
    }, []);
  he(() => {
    (!s.current && !i.current) || b(!1);
    let u = za(t),
      d = za(t);
    return (
      (s.current = u),
      (i.current = d),
      u.setAttribute(`${vt}-always`, e),
      d.setAttribute(`${vt}-dynamic`, e),
      vi().appendChild(u),
      vi().appendChild(d),
      o(r.always),
      n(r.resting),
      () => {
        let m = (f) => {
          let g = f.current;
          g || b(!1), vi().removeChild(g), (f.current = null);
        };
        m(s), m(i);
      }
    );
  }, [t, o, n, r.always, r.resting, e]);
  let a = w(() => n(r.dragging), [n, r.dragging]),
    l = w(
      (u) => {
        if (u === "DROP") {
          n(r.dropAnimating);
          return;
        }
        n(r.userCancel);
      },
      [n, r.dropAnimating, r.userCancel],
    ),
    c = w(() => {
      i.current && n(r.resting);
    }, [n, r.resting]);
  return F(() => ({ dragging: a, dropping: l, resting: c }), [a, l, c]);
}
function Ol(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Nl = (e) =>
  e && e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView
    : window;
function ar(e) {
  return e instanceof Nl(e).HTMLElement;
}
function Tl(e, t) {
  let r = `[${Ct.contextId}="${e}"]`,
    s = Ol(document, r);
  if (!s.length) return null;
  let i = s.find((n) => n.getAttribute(Ct.draggableId) === t);
  return !i || !ar(i) ? null : i;
}
function th(e) {
  let t = (0, S.useRef)({}),
    r = (0, S.useRef)(null),
    s = (0, S.useRef)(null),
    i = (0, S.useRef)(!1),
    n = w(function (d, m) {
      let f = { id: d, focus: m };
      return (
        (t.current[d] = f),
        function () {
          let h = t.current;
          h[d] !== f && delete h[d];
        }
      );
    }, []),
    o = w(
      function (d) {
        let m = Tl(e, d);
        m && m !== document.activeElement && m.focus();
      },
      [e],
    ),
    a = w(function (d, m) {
      r.current === d && (r.current = m);
    }, []),
    l = w(
      function () {
        s.current ||
          (i.current &&
            (s.current = requestAnimationFrame(() => {
              s.current = null;
              let d = r.current;
              d && o(d);
            })));
      },
      [o],
    ),
    c = w(function (d) {
      r.current = null;
      let m = document.activeElement;
      m && m.getAttribute(Ct.draggableId) === d && (r.current = d);
    }, []);
  return (
    he(
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
        register: n,
        tryRecordFocus: c,
        tryRestoreFocusRecorded: l,
        tryShiftRecord: a,
      }),
      [n, c, l, a],
    )
  );
}
function rh() {
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
  function n(u) {
    let d = i(u);
    return d || b(!1), d;
  }
  let o = {
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
    getById: n,
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
    return d || b(!1), d;
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
  return { draggable: o, droppable: c, subscribe: r, clean: p };
}
function sh() {
  let e = F(rh, []);
  return (
    (0, S.useEffect)(
      () =>
        function () {
          S.default.version.startsWith("16") ||
          S.default.version.startsWith("17")
            ? requestAnimationFrame(e.clean)
            : e.clean();
        },
      [e],
    ),
    e
  );
}
var Qi = S.default.createContext(null),
  er = () => {
    let e = document.body;
    return e || b(!1), e;
  },
  ih = {
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
  nh = ih,
  oh = (e) => `rfd-announcement-${e}`;
function ah(e) {
  let t = F(() => oh(e), [e]),
    r = (0, S.useRef)(null);
  return (
    (0, S.useEffect)(
      function () {
        let n = document.createElement("div");
        return (
          (r.current = n),
          (n.id = t),
          n.setAttribute("aria-live", "assertive"),
          n.setAttribute("aria-atomic", "true"),
          Ge(n.style, nh),
          er().appendChild(n),
          function () {
            setTimeout(function () {
              let l = er();
              l.contains(n) && l.removeChild(n),
                n === r.current && (r.current = null);
            });
          }
        );
      },
      [t],
    ),
    w((i) => {
      let n = r.current;
      if (n) {
        n.textContent = i;
        return;
      }
    }, [])
  );
}
var lh = 0,
  Al = { separator: "::" };
function ch(e, t = Al) {
  return F(() => `${e}${t.separator}${lh++}`, [t.separator, e]);
}
function uh(e, t = Al) {
  let r = S.default.useId();
  return F(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Ki = "useId" in S.default ? uh : ch;
function dh({ contextId: e, uniqueId: t }) {
  return `rfd-hidden-text-${e}-${t}`;
}
function ph({ contextId: e, text: t }) {
  let r = Ki("hidden-text", { separator: "-" }),
    s = F(() => dh({ contextId: e, uniqueId: r }), [r, e]);
  return (
    (0, S.useEffect)(
      function () {
        let n = document.createElement("div");
        return (
          (n.id = s),
          (n.textContent = t),
          (n.style.display = "none"),
          er().appendChild(n),
          function () {
            let a = er();
            a.contains(n) && a.removeChild(n);
          }
        );
      },
      [s, t],
    ),
    s
  );
}
var is = S.default.createContext(null),
  mh = {
    react: "^16.8.5 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
  },
  fh = /(\d+)\.(\d+)\.(\d+)/,
  Ha = (e) => {
    let t = fh.exec(e);
    t == null && b(!1);
    let r = Number(t[1]),
      s = Number(t[2]),
      i = Number(t[3]);
    return { major: r, minor: s, patch: i, raw: e };
  },
  hh = (e, t) =>
    t.major > e.major
      ? !0
      : t.major < e.major
        ? !1
        : t.minor > e.minor
          ? !0
          : t.minor < e.minor
            ? !1
            : t.patch >= e.patch,
  gh = (e, t) => {
    let r = Ha(e),
      s = Ha(t);
    hh(r, s);
  };
var bh = (e) => {
  let t = e.doctype;
  t && (t.name.toLowerCase(), t.publicId);
};
function lr(e, t) {}
function _h() {
  lr(() => {
    gh(mh.react, S.default.version), bh(document);
  }, []);
}
function Yi(e) {
  let t = (0, S.useRef)(e);
  return (
    (0, S.useEffect)(() => {
      t.current = e;
    }),
    t
  );
}
function yh() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(o) {
    return o === e;
  }
  function s(o) {
    e && b(!1);
    let a = { abandon: o };
    return (e = a), a;
  }
  function i() {
    e || b(!1), (e = null);
  }
  function n() {
    e && (e.abandon(), i());
  }
  return { isClaimed: t, isActive: r, claim: s, release: i, tryAbandon: n };
}
function tr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
var vh = 9,
  Ch = 13,
  Xi = 27,
  Ml = 32,
  Sh = 33,
  Wh = 34,
  Rh = 35,
  wh = 36,
  Ih = 37,
  xh = 38,
  Ph = 39,
  Eh = 40,
  Dh = { [Ch]: !0, [vh]: !0 },
  Gl = (e) => {
    Dh[e.keyCode] && e.preventDefault();
  },
  Bh = (() => {
    let e = "visibilitychange";
    return typeof document > "u"
      ? e
      : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
          (s) => `on${s}` in document,
        ) || e;
  })(),
  ns = Bh,
  Ll = 0,
  Va = 5;
function Fh(e, t) {
  return Math.abs(t.x - e.x) >= Va || Math.abs(t.y - e.y) >= Va;
}
var ja = { type: "IDLE" };
function Oh({ cancel: e, completed: t, getPhase: r, setPhase: s }) {
  return [
    {
      eventName: "mousemove",
      fn: (i) => {
        let { button: n, clientX: o, clientY: a } = i;
        if (n !== Ll) return;
        let l = { x: o, y: a },
          c = r();
        if (c.type === "DRAGGING") {
          i.preventDefault(), c.actions.move(l);
          return;
        }
        c.type !== "PENDING" && b(!1);
        let p = c.point;
        if (!Fh(p, l)) return;
        i.preventDefault();
        let u = c.actions.fluidLift(l);
        s({ type: "DRAGGING", actions: u });
      },
    },
    {
      eventName: "mouseup",
      fn: (i) => {
        let n = r();
        if (n.type !== "DRAGGING") {
          e();
          return;
        }
        i.preventDefault(), n.actions.drop({ shouldBlockNextClick: !0 }), t();
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
        if (i.keyCode === Xi) {
          i.preventDefault(), e();
          return;
        }
        Gl(i);
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
        let n = r();
        if ((n.type === "IDLE" && b(!1), n.actions.shouldRespectForcePress())) {
          e();
          return;
        }
        i.preventDefault();
      },
    },
    { eventName: ns, fn: e },
  ];
}
function Nh(e) {
  let t = (0, S.useRef)(ja),
    r = (0, S.useRef)(qe),
    s = F(
      () => ({
        eventName: "mousedown",
        fn: function (u) {
          if (
            u.defaultPrevented ||
            u.button !== Ll ||
            u.ctrlKey ||
            u.metaKey ||
            u.shiftKey ||
            u.altKey
          )
            return;
          let d = e.findClosestDraggableId(u);
          if (!d) return;
          let m = e.tryGetLock(d, o, { sourceEvent: u });
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
    n = w(
      function () {
        let u = { passive: !1, capture: !0 };
        r.current = We(window, [i, s], u);
      },
      [i, s],
    ),
    o = w(() => {
      t.current.type !== "IDLE" && ((t.current = ja), r.current(), n());
    }, [n]),
    a = w(() => {
      let p = t.current;
      o(),
        p.type === "DRAGGING" && p.actions.cancel({ shouldBlockNextClick: !0 }),
        p.type === "PENDING" && p.actions.abort();
    }, [o]),
    l = w(
      function () {
        let u = { capture: !0, passive: !1 },
          d = Oh({
            cancel: a,
            completed: o,
            getPhase: () => t.current,
            setPhase: (m) => {
              t.current = m;
            },
          });
        r.current = We(window, d, u);
      },
      [a, o],
    ),
    c = w(
      function (u, d) {
        t.current.type !== "IDLE" && b(!1),
          (t.current = { type: "PENDING", point: d, actions: u }),
          l();
      },
      [l],
    );
  he(
    function () {
      return (
        n(),
        function () {
          r.current();
        }
      );
    },
    [n],
  );
}
function Th() {}
var Ah = { [Wh]: !0, [Sh]: !0, [wh]: !0, [Rh]: !0 };
function Mh(e, t) {
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
        if (i.keyCode === Xi) {
          i.preventDefault(), r();
          return;
        }
        if (i.keyCode === Ml) {
          i.preventDefault(), s();
          return;
        }
        if (i.keyCode === Eh) {
          i.preventDefault(), e.moveDown();
          return;
        }
        if (i.keyCode === xh) {
          i.preventDefault(), e.moveUp();
          return;
        }
        if (i.keyCode === Ph) {
          i.preventDefault(), e.moveRight();
          return;
        }
        if (i.keyCode === Ih) {
          i.preventDefault(), e.moveLeft();
          return;
        }
        if (Ah[i.keyCode]) {
          i.preventDefault();
          return;
        }
        Gl(i);
      },
    },
    { eventName: "mousedown", fn: r },
    { eventName: "mouseup", fn: r },
    { eventName: "click", fn: r },
    { eventName: "touchstart", fn: r },
    { eventName: "resize", fn: r },
    { eventName: "wheel", fn: r, options: { passive: !0 } },
    { eventName: ns, fn: r },
  ];
}
function Gh(e) {
  let t = (0, S.useRef)(Th),
    r = F(
      () => ({
        eventName: "keydown",
        fn: function (n) {
          if (n.defaultPrevented || n.keyCode !== Ml) return;
          let o = e.findClosestDraggableId(n);
          if (!o) return;
          let a = e.tryGetLock(o, p, { sourceEvent: n });
          if (!a) return;
          n.preventDefault();
          let l = !0,
            c = a.snapLift();
          t.current();
          function p() {
            l || b(!1), (l = !1), t.current(), s();
          }
          t.current = We(window, Mh(c, p), { capture: !0, passive: !1 });
        },
      }),
      [e],
    ),
    s = w(
      function () {
        let n = { passive: !1, capture: !0 };
        t.current = We(window, [r], n);
      },
      [r],
    );
  he(
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
var Ci = { type: "IDLE" },
  Lh = 120,
  kh = 0.15;
function zh({ cancel: e, getPhase: t }) {
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
        r.keyCode === Xi && r.preventDefault(), e();
      },
    },
    { eventName: ns, fn: e },
  ];
}
function Hh({ cancel: e, completed: t, getPhase: r }) {
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
        let { clientX: n, clientY: o } = s.touches[0],
          a = { x: n, y: o };
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
        i.type === "IDLE" && b(!1);
        let n = s.touches[0];
        if (!n || !(n.force >= kh)) return;
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
    { eventName: ns, fn: e },
  ];
}
function Vh(e) {
  let t = (0, S.useRef)(Ci),
    r = (0, S.useRef)(qe),
    s = w(function () {
      return t.current;
    }, []),
    i = w(function (m) {
      t.current = m;
    }, []),
    n = F(
      () => ({
        eventName: "touchstart",
        fn: function (m) {
          if (m.defaultPrevented) return;
          let f = e.findClosestDraggableId(m);
          if (!f) return;
          let g = e.tryGetLock(f, a, { sourceEvent: m });
          if (!g) return;
          let h = m.touches[0],
            { clientX: y, clientY: C } = h,
            x = { x: y, y: C };
          r.current(), u(g, x);
        },
      }),
      [e],
    ),
    o = w(
      function () {
        let m = { capture: !0, passive: !1 };
        r.current = We(window, [n], m);
      },
      [n],
    ),
    a = w(() => {
      let d = t.current;
      d.type !== "IDLE" &&
        (d.type === "PENDING" && clearTimeout(d.longPressTimerId),
        i(Ci),
        r.current(),
        o());
    }, [o, i]),
    l = w(() => {
      let d = t.current;
      a(),
        d.type === "DRAGGING" && d.actions.cancel({ shouldBlockNextClick: !0 }),
        d.type === "PENDING" && d.actions.abort();
    }, [a]),
    c = w(
      function () {
        let m = { capture: !0, passive: !1 },
          f = { cancel: l, completed: a, getPhase: s },
          g = We(window, Hh(f), m),
          h = We(window, zh(f), m);
        r.current = function () {
          g(), h();
        };
      },
      [l, s, a],
    ),
    p = w(
      function () {
        let m = s();
        m.type !== "PENDING" && b(!1);
        let f = m.actions.fluidLift(m.point);
        i({ type: "DRAGGING", actions: f, hasMoved: !1 });
      },
      [s, i],
    ),
    u = w(
      function (m, f) {
        s().type !== "IDLE" && b(!1);
        let g = setTimeout(p, Lh);
        i({ type: "PENDING", point: f, actions: m, longPressTimerId: g }), c();
      },
      [c, s, i, p],
    );
  he(
    function () {
      return (
        o(),
        function () {
          r.current();
          let f = s();
          f.type === "PENDING" && (clearTimeout(f.longPressTimerId), i(Ci));
        }
      );
    },
    [s, o, i],
  ),
    he(function () {
      return We(window, [
        {
          eventName: "touchmove",
          fn: () => {},
          options: { capture: !1, passive: !1 },
        },
      ]);
    }, []);
}
function jh(e) {}
var Uh = [
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "optgroup",
  "video",
  "audio",
];
function kl(e, t) {
  if (t == null) return !1;
  if (Uh.includes(t.tagName.toLowerCase())) return !0;
  let s = t.getAttribute("contenteditable");
  return s === "true" || s === "" ? !0 : t === e ? !1 : kl(e, t.parentElement);
}
function qh(e, t) {
  let r = t.target;
  return ar(r) ? kl(e, r) : !1;
}
var $h = (e) => Se(e.getBoundingClientRect()).center;
function Qh(e) {
  return e instanceof Nl(e).Element;
}
var Kh = (() => {
  let e = "matches";
  return typeof document > "u"
    ? e
    : [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (s) => s in Element.prototype,
      ) || e;
})();
function zl(e, t) {
  return e == null ? null : e[Kh](t) ? e : zl(e.parentElement, t);
}
function Yh(e, t) {
  return e.closest ? e.closest(t) : zl(e, t);
}
function Xh(e) {
  return `[${Ct.contextId}="${e}"]`;
}
function Jh(e, t) {
  let r = t.target;
  if (!Qh(r)) return null;
  let s = Xh(e),
    i = Yh(r, s);
  return !i || !ar(i) ? null : i;
}
function Zh(e, t) {
  let r = Jh(e, t);
  return r ? r.getAttribute(Ct.draggableId) : null;
}
function eg(e, t) {
  let r = `[${Bi.contextId}="${e}"]`,
    i = Ol(document, r).find((n) => n.getAttribute(Bi.id) === t);
  return !i || !ar(i) ? null : i;
}
function tg(e) {
  e.preventDefault();
}
function Qr({ expected: e, phase: t, isLockActive: r, shouldWarn: s }) {
  return !(!r() || e !== t);
}
function Hl({ lockAPI: e, store: t, registry: r, draggableId: s }) {
  if (e.isClaimed()) return !1;
  let i = r.draggable.findById(s);
  return !(!i || !i.options.isEnabled || !El(t.getState(), s));
}
function rg({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: s,
  draggableId: i,
  forceSensorStop: n,
  sourceEvent: o,
}) {
  if (!Hl({ lockAPI: e, store: r, registry: s, draggableId: i })) return null;
  let l = s.draggable.getById(i),
    c = eg(t, l.descriptor.id);
  if (!c || (o && !l.options.canDragInteractiveElements && qh(c, o)))
    return null;
  let p = e.claim(n || qe),
    u = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(p);
  }
  function f(P, E) {
    Qr({ expected: P, phase: u, isLockActive: m, shouldWarn: !0 }) &&
      r.dispatch(E());
  }
  let g = f.bind(null, "DRAGGING");
  function h(P) {
    function E() {
      e.release(), (u = "COMPLETED");
    }
    u !== "PRE_DRAG" && (E(), b(!1)),
      r.dispatch(Om(P.liftActionArgs)),
      (u = "DRAGGING");
    function M(G, pe = { shouldBlockNextClick: !1 }) {
      if ((P.cleanup(), pe.shouldBlockNextClick)) {
        let V = We(window, [
          {
            eventName: "click",
            fn: tg,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(V);
      }
      E(), r.dispatch(Cl({ reason: G }));
    }
    return {
      isActive: () =>
        Qr({ expected: "DRAGGING", phase: u, isLockActive: m, shouldWarn: !1 }),
      shouldRespectForcePress: d,
      drop: (G) => M("DROP", G),
      cancel: (G) => M("CANCEL", G),
      ...P.actions,
    };
  }
  function y(P) {
    let E = _t((G) => {
      g(() => vl({ client: G }));
    });
    return {
      ...h({
        liftActionArgs: { id: i, clientSelection: P, movementMode: "FLUID" },
        cleanup: () => E.cancel(),
        actions: { move: E },
      }),
      move: E,
    };
  }
  function C() {
    let P = {
      moveUp: () => g(Hm),
      moveRight: () => g(jm),
      moveDown: () => g(Vm),
      moveLeft: () => g(Um),
    };
    return h({
      liftActionArgs: { id: i, clientSelection: $h(c), movementMode: "SNAP" },
      cleanup: qe,
      actions: P,
    });
  }
  function x() {
    Qr({ expected: "PRE_DRAG", phase: u, isLockActive: m, shouldWarn: !0 }) &&
      e.release();
  }
  return {
    isActive: () =>
      Qr({ expected: "PRE_DRAG", phase: u, isLockActive: m, shouldWarn: !1 }),
    shouldRespectForcePress: d,
    fluidLift: y,
    snapLift: C,
    abort: x,
  };
}
var sg = [Nh, Gh, Vh];
function ig({
  contextId: e,
  store: t,
  registry: r,
  customSensors: s,
  enableDefaultSensors: i,
}) {
  let n = [...(i ? sg : []), ...(s || [])],
    o = (0, S.useState)(() => yh())[0],
    a = w(
      function (h, y) {
        tr(h) && !tr(y) && o.tryAbandon();
      },
      [o],
    );
  he(
    function () {
      let h = t.getState();
      return t.subscribe(() => {
        let C = t.getState();
        a(h, C), (h = C);
      });
    },
    [o, t, a],
  ),
    he(() => o.tryAbandon, [o.tryAbandon]);
  let l = w(
      (g) => Hl({ lockAPI: o, registry: r, store: t, draggableId: g }),
      [o, r, t],
    ),
    c = w(
      (g, h, y) =>
        rg({
          lockAPI: o,
          registry: r,
          contextId: e,
          store: t,
          draggableId: g,
          forceSensorStop: h || null,
          sourceEvent: y && y.sourceEvent ? y.sourceEvent : null,
        }),
      [e, o, r, t],
    ),
    p = w((g) => Zh(e, g), [e]),
    u = w(
      (g) => {
        let h = r.draggable.findById(g);
        return h ? h.options : null;
      },
      [r.draggable],
    ),
    d = w(
      function () {
        o.isClaimed() &&
          (o.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(zi()));
      },
      [o, t],
    ),
    m = w(() => o.isClaimed(), [o]),
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
  jh(n);
  for (let g = 0; g < n.length; g++) n[g](f);
}
var ng = (e) => ({
    onBeforeCapture: (t) => {
      let r = () => {
        e.onBeforeCapture && e.onBeforeCapture(t);
      };
      S.default.version.startsWith("16") || S.default.version.startsWith("17")
        ? r()
        : (0, rr.flushSync)(r);
    },
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragEnd: e.onDragEnd,
    onDragUpdate: e.onDragUpdate,
  }),
  og = (e) => ({
    ...Zt,
    ...e.autoScrollerOptions,
    durationDampening: { ...Zt.durationDampening, ...e.autoScrollerOptions },
  });
function qt(e) {
  return e.current || b(!1), e.current;
}
function ag(e) {
  let {
      contextId: t,
      setCallbacks: r,
      sensors: s,
      nonce: i,
      dragHandleUsageInstructions: n,
    } = e,
    o = (0, S.useRef)(null);
  _h();
  let a = Yi(e),
    l = w(() => ng(a.current), [a]),
    c = w(() => og(a.current), [a]),
    p = ah(t),
    u = ph({ contextId: t, text: n }),
    d = eh(t, i),
    m = w((V) => {
      qt(o).dispatch(V);
    }, []),
    f = F(
      () =>
        si(
          {
            publishWhileDragging: Tm,
            updateDroppableScroll: Mm,
            updateDroppableIsEnabled: Gm,
            updateDroppableIsCombineEnabled: Lm,
            collectionStarting: Am,
          },
          m,
        ),
      [m],
    ),
    g = sh(),
    h = F(() => Bf(g, f), [g, f]),
    y = F(
      () =>
        Qf({
          scrollWindow: Ff,
          scrollDroppable: h.scrollDroppable,
          getAutoScrollerOptions: c,
          ...si({ move: vl }, m),
        }),
      [h.scrollDroppable, m, c],
    ),
    C = th(t),
    x = F(
      () =>
        xf({
          announce: p,
          autoScroller: y,
          dimensionMarshal: h,
          focusMarshal: C,
          getResponders: l,
          styleMarshal: d,
        }),
      [p, y, h, C, l, d],
    );
  o.current = x;
  let I = w(() => {
      let V = qt(o);
      V.getState().phase !== "IDLE" && V.dispatch(zi());
    }, []),
    P = w(() => {
      let V = qt(o).getState();
      return V.phase === "DROP_ANIMATING"
        ? !0
        : V.phase === "IDLE"
          ? !1
          : V.isDragging;
    }, []),
    E = F(() => ({ isDragging: P, tryAbort: I }), [P, I]);
  r(E);
  let M = w((V) => El(qt(o).getState(), V), []),
    G = w(() => rt(qt(o).getState()), []),
    pe = F(
      () => ({
        marshal: h,
        focus: C,
        contextId: t,
        canLift: M,
        isMovementAllowed: G,
        dragHandleUsageInstructionsId: u,
        registry: g,
      }),
      [t, h, u, C, M, G, g],
    );
  return (
    ig({
      contextId: t,
      store: x,
      registry: g,
      customSensors: s || null,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    (0, S.useEffect)(() => I, [I]),
    S.default.createElement(
      is.Provider,
      { value: pe },
      S.default.createElement(pi, { context: Qi, store: x }, e.children),
    )
  );
}
var lg = 0;
function cg() {
  return F(() => `${lg++}`, []);
}
function ug() {
  return S.default.useId();
}
var dg = "useId" in S.default ? ug : cg;
function Vl(e) {
  let t = dg(),
    r = e.dragHandleUsageInstructions || Yr.dragHandleUsageInstructions;
  return S.default.createElement(Ii, null, (s) =>
    S.default.createElement(
      ag,
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
var Ua = { dragging: 5e3, dropAnimating: 4500 },
  pg = (e, t) => (t ? Qt.drop(t.duration) : e ? Qt.snap : Qt.fluid),
  mg = (e, t) => {
    if (e) return t ? Jt.opacity.drop : Jt.opacity.combining;
  },
  fg = (e) =>
    e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function hg(e) {
  let r = e.dimension.client,
    { offset: s, combineWith: i, dropping: n } = e,
    o = !!i,
    a = fg(e),
    l = !!n,
    c = l ? Ei.drop(s, o) : Ei.moveTo(s);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: pg(a, n),
    transform: c,
    opacity: mg(o, l),
    zIndex: l ? Ua.dropAnimating : Ua.dragging,
    pointerEvents: "none",
  };
}
function gg(e) {
  return {
    transform: Ei.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none",
  };
}
function bg(e) {
  return e.type === "DRAGGING" ? hg(e) : gg(e);
}
function _g(e, t, r = se) {
  let s = window.getComputedStyle(t),
    i = t.getBoundingClientRect(),
    n = fi(i, s),
    o = Vt(n, r),
    a = { client: n, tagName: t.tagName.toLowerCase(), display: s.display },
    l = { x: n.marginBox.width, y: n.marginBox.height };
  return { descriptor: e, placeholder: a, displaceBy: l, client: n, page: o };
}
function yg(e) {
  let t = Ki("draggable"),
    {
      descriptor: r,
      registry: s,
      getDraggableRef: i,
      canDragInteractiveElements: n,
      shouldRespectForcePress: o,
      isEnabled: a,
    } = e,
    l = F(
      () => ({
        canDragInteractiveElements: n,
        shouldRespectForcePress: o,
        isEnabled: a,
      }),
      [n, a, o],
    ),
    c = w(
      (m) => {
        let f = i();
        return f || b(!1), _g(r, f, m);
      },
      [r, i],
    ),
    p = F(
      () => ({ uniqueId: t, descriptor: r, options: l, getDimension: c }),
      [r, c, l, t],
    ),
    u = (0, S.useRef)(p),
    d = (0, S.useRef)(!0);
  he(
    () => (
      s.draggable.register(u.current), () => s.draggable.unregister(u.current)
    ),
    [s.draggable],
  ),
    he(() => {
      if (d.current) {
        d.current = !1;
        return;
      }
      let m = u.current;
      (u.current = p), s.draggable.update(p, m);
    }, [p, s.draggable]);
}
var Ji = S.default.createContext(null);
function jl(e) {
  (e && ar(e)) || b(!1);
}
function vg(e, t, r) {
  lr(() => {
    function s(n) {
      return `Draggable[id: ${n}]: `;
    }
    let i = e.draggableId;
    i || b(!1),
      typeof i != "string" && b(!1),
      Number.isInteger(e.index) || b(!1),
      e.mapped.type !== "DRAGGING" &&
        (jl(r()), e.isEnabled && (Tl(t, i) || b(!1)));
  });
}
function Cg(e) {}
function Zr(e) {
  let t = (0, S.useContext)(e);
  return t || b(!1), t;
}
function Sg(e) {
  e.preventDefault();
}
var Wg = (e) => {
    let t = (0, S.useRef)(null),
      r = w((E = null) => {
        t.current = E;
      }, []),
      s = w(() => t.current, []),
      { contextId: i, dragHandleUsageInstructionsId: n, registry: o } = Zr(is),
      { type: a, droppableId: l } = Zr(Ji),
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
        dropAnimationFinished: y,
      } = e;
    if ((vg(e, i, s), Cg(g), !g)) {
      let E = F(
        () => ({
          descriptor: c,
          registry: o,
          getDraggableRef: s,
          canDragInteractiveElements: f,
          shouldRespectForcePress: m,
          isEnabled: d,
        }),
        [c, o, s, f, m, d],
      );
      yg(E);
    }
    let C = F(
        () =>
          d
            ? {
                tabIndex: 0,
                role: "button",
                "aria-describedby": n,
                "data-rfd-drag-handle-draggable-id": u,
                "data-rfd-drag-handle-context-id": i,
                draggable: !1,
                onDragStart: Sg,
              }
            : null,
        [i, n, u, d],
      ),
      x = w(
        (E) => {
          h.type === "DRAGGING" &&
            h.dropping &&
            E.propertyName === "transform" &&
            (S.default.version.startsWith("16") ||
            S.default.version.startsWith("17")
              ? y()
              : (0, rr.flushSync)(y));
        },
        [y, h],
      ),
      I = F(() => {
        let E = bg(h),
          M = h.type === "DRAGGING" && h.dropping ? x : void 0;
        return {
          innerRef: r,
          draggableProps: {
            "data-rfd-draggable-context-id": i,
            "data-rfd-draggable-id": u,
            style: E,
            onTransitionEnd: M,
          },
          dragHandleProps: C,
        };
      }, [i, C, u, h, x, r]),
      P = F(
        () => ({
          draggableId: c.id,
          type: c.type,
          source: { index: c.index, droppableId: c.droppableId },
        }),
        [c.droppableId, c.id, c.index, c.type],
      );
    return S.default.createElement(
      S.default.Fragment,
      null,
      p(I, h.snapshot, P),
    );
  },
  Rg = Wg,
  Ul = (e, t) => e === t,
  ql = (e) => {
    let { combine: t, destination: r } = e;
    return r ? r.droppableId : t ? t.droppableId : null;
  },
  wg = (e) => (e.combine ? e.combine.draggableId : null),
  Ig = (e) =>
    e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function xg() {
  let e = te((i, n) => ({ x: i, y: n })),
    t = te((i, n, o = null, a = null, l = null) => ({
      isDragging: !0,
      isClone: n,
      isDropAnimating: !!l,
      dropAnimation: l,
      mode: i,
      draggingOver: o,
      combineWith: a,
      combineTargetFor: null,
    })),
    r = te((i, n, o, a, l = null, c = null, p = null) => ({
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: l,
        combineWith: c,
        mode: n,
        offset: i,
        dimension: o,
        forceShouldAnimate: p,
        snapshot: t(n, a, l, c, null),
      },
    }));
  return (i, n) => {
    if (tr(i)) {
      if (i.critical.draggable.id !== n.draggableId) return null;
      let o = i.current.client.offset,
        a = i.dimensions.draggables[n.draggableId],
        l = fe(i.impact),
        c = Ig(i.impact),
        p = i.forceShouldAnimate;
      return r(e(o.x, o.y), i.movementMode, a, n.isClone, l, c, p);
    }
    if (i.phase === "DROP_ANIMATING") {
      let o = i.completed;
      if (o.result.draggableId !== n.draggableId) return null;
      let a = n.isClone,
        l = i.dimensions.draggables[n.draggableId],
        c = o.result,
        p = c.mode,
        u = ql(c),
        d = wg(c),
        f = {
          duration: i.dropDuration,
          curve: Vi.drop,
          moveTo: i.newHomeClientOffset,
          opacity: d ? Jt.opacity.drop : null,
          scale: d ? Jt.scale.drop : null,
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
function $l(e = null) {
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
var Pg = {
  mapped: {
    type: "SECONDARY",
    offset: se,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: $l(null),
  },
};
function Eg() {
  let e = te((o, a) => ({ x: o, y: a })),
    t = te($l),
    r = te((o, a = null, l) => ({
      mapped: {
        type: "SECONDARY",
        offset: o,
        combineTargetFor: a,
        shouldAnimateDisplacement: l,
        snapshot: t(a),
      },
    })),
    s = (o) => (o ? r(se, o, !0) : null),
    i = (o, a, l, c) => {
      let p = l.displaced.visible[o],
        u = !!(c.inVirtualList && c.effected[o]),
        d = ts(l),
        m = d && d.draggableId === o ? a : null;
      if (!p) {
        if (!u) return s(m);
        if (l.displaced.invisible[o]) return null;
        let h = St(c.displacedBy.point),
          y = e(h.x, h.y);
        return r(y, m, !0);
      }
      if (u) return s(m);
      let f = l.displacedBy.point,
        g = e(f.x, f.y);
      return r(g, m, p.shouldAnimate);
    };
  return (o, a) => {
    if (tr(o))
      return o.critical.draggable.id === a.draggableId
        ? null
        : i(a.draggableId, o.critical.draggable.id, o.impact, o.afterCritical);
    if (o.phase === "DROP_ANIMATING") {
      let l = o.completed;
      return l.result.draggableId === a.draggableId
        ? null
        : i(a.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
var Dg = () => {
    let e = xg(),
      t = Eg();
    return (s, i) => e(s, i) || t(s, i) || Pg;
  },
  Bg = { dropAnimationFinished: Sl },
  Fg = jr(Dg, Bg, null, { context: Qi, areStatePropsEqual: Ul })(Rg),
  Og = Fg;
function Ql(e) {
  return Zr(Ji).isUsingCloneFor === e.draggableId && !e.isClone
    ? null
    : S.default.createElement(Og, e);
}
function Kl(e) {
  let t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    r = !!e.disableInteractiveElementBlocking,
    s = !!e.shouldRespectForcePress;
  return S.default.createElement(
    Ql,
    Ge({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: r,
      shouldRespectForcePress: s,
    }),
  );
}
var Zi = (e) => (t) => e === t,
  Ng = Zi("scroll"),
  Tg = Zi("auto"),
  Ag = Zi("visible"),
  qa = (e, t) => t(e.overflowX) || t(e.overflowY),
  Mg = (e, t) => t(e.overflowX) && t(e.overflowY),
  Yl = (e) => {
    let t = window.getComputedStyle(e),
      r = { overflowX: t.overflowX, overflowY: t.overflowY };
    return qa(r, Ng) || qa(r, Tg);
  },
  Gg = () => !1,
  Xl = (e) =>
    e == null
      ? null
      : e === document.body
        ? Gg()
          ? e
          : null
        : e === document.documentElement
          ? null
          : Yl(e)
            ? e
            : Xl(e.parentElement);
var Fi = (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
  Jl = (e) =>
    e
      ? window.getComputedStyle(e).position === "fixed"
        ? !0
        : Jl(e.parentElement)
      : !1,
  Lg = (e) => {
    let t = Xl(e),
      r = Jl(e);
    return { closestScrollable: t, isFixedOnPage: r };
  },
  kg = ({
    descriptor: e,
    isEnabled: t,
    isCombineEnabled: r,
    isFixedOnPage: s,
    direction: i,
    client: n,
    page: o,
    closest: a,
  }) => {
    let l = (() => {
        if (!a) return null;
        let { scrollSize: d, client: m } = a,
          f = Il({
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
            diff: { value: se, displacement: se },
          },
        };
      })(),
      c = i === "vertical" ? Ai : nl,
      p = yt({ page: o, withPlaceholder: null, axis: c, frame: l });
    return {
      descriptor: e,
      isCombineEnabled: r,
      isFixedOnPage: s,
      axis: c,
      isEnabled: t,
      client: n,
      page: o,
      frame: l,
      subject: p,
    };
  },
  zg = (e, t) => {
    let r = hi(e);
    if (!t || e !== t) return r;
    let s = r.paddingBox.top - t.scrollTop,
      i = r.paddingBox.left - t.scrollLeft,
      n = s + t.scrollHeight,
      o = i + t.scrollWidth,
      l = Ur({ top: s, right: o, bottom: n, left: i }, r.border);
    return qr({
      borderBox: l,
      margin: r.margin,
      border: r.border,
      padding: r.padding,
    });
  },
  Hg = ({
    ref: e,
    descriptor: t,
    env: r,
    windowScroll: s,
    direction: i,
    isDropDisabled: n,
    isCombineEnabled: o,
    shouldClipSubject: a,
  }) => {
    let l = r.closestScrollable,
      c = zg(e, l),
      p = Vt(c, s),
      u = (() => {
        if (!l) return null;
        let m = hi(l),
          f = { scrollHeight: l.scrollHeight, scrollWidth: l.scrollWidth };
        return {
          client: m,
          page: Vt(m, s),
          scroll: Fi(l),
          scrollSize: f,
          shouldClipSubject: a,
        };
      })();
    return kg({
      descriptor: t,
      isEnabled: !n,
      isCombineEnabled: o,
      isFixedOnPage: r.isFixedOnPage,
      direction: i,
      client: c,
      page: p,
      closest: u,
    });
  },
  Vg = { passive: !1 },
  jg = { passive: !0 },
  $a = (e) => (e.shouldPublishImmediately ? Vg : jg),
  Kr = (e) => (e && e.env.closestScrollable) || null;
function Ug(e) {
  let t = (0, S.useRef)(null),
    r = Zr(is),
    s = Ki("droppable"),
    { registry: i, marshal: n } = r,
    o = Yi(e),
    a = F(
      () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
      [e.droppableId, e.mode, e.type],
    ),
    l = (0, S.useRef)(a),
    c = F(
      () =>
        te((I, P) => {
          t.current || b(!1);
          let E = { x: I, y: P };
          n.updateDroppableScroll(a.id, E);
        }),
      [a.id, n],
    ),
    p = w(() => {
      let I = t.current;
      return !I || !I.env.closestScrollable ? se : Fi(I.env.closestScrollable);
    }, []),
    u = w(() => {
      let I = p();
      c(I.x, I.y);
    }, [p, c]),
    d = F(() => _t(u), [u]),
    m = w(() => {
      let I = t.current,
        P = Kr(I);
      if (((I && P) || b(!1), I.scrollOptions.shouldPublishImmediately)) {
        u();
        return;
      }
      d();
    }, [d, u]),
    f = w(
      (I, P) => {
        t.current && b(!1);
        let E = o.current,
          M = E.getDroppableRef();
        M || b(!1);
        let G = Lg(M),
          pe = { ref: M, descriptor: a, env: G, scrollOptions: P };
        t.current = pe;
        let V = Hg({
            ref: M,
            descriptor: a,
            env: G,
            windowScroll: I,
            direction: E.direction,
            isDropDisabled: E.isDropDisabled,
            isCombineEnabled: E.isCombineEnabled,
            shouldClipSubject: !E.ignoreContainerClipping,
          }),
          _e = G.closestScrollable;
        return (
          _e &&
            (_e.setAttribute(ka.contextId, r.contextId),
            _e.addEventListener("scroll", m, $a(pe.scrollOptions))),
          V
        );
      },
      [r.contextId, a, m, o],
    ),
    g = w(() => {
      let I = t.current,
        P = Kr(I);
      return (I && P) || b(!1), Fi(P);
    }, []),
    h = w(() => {
      let I = t.current;
      I || b(!1);
      let P = Kr(I);
      (t.current = null),
        P &&
          (d.cancel(),
          P.removeAttribute(ka.contextId),
          P.removeEventListener("scroll", m, $a(I.scrollOptions)));
    }, [m, d]),
    y = w((I) => {
      let P = t.current;
      P || b(!1);
      let E = Kr(P);
      E || b(!1), (E.scrollTop += I.y), (E.scrollLeft += I.x);
    }, []),
    C = F(
      () => ({
        getDimensionAndWatchScroll: f,
        getScrollWhileDragging: g,
        dragStopped: h,
        scroll: y,
      }),
      [h, f, g, y],
    ),
    x = F(() => ({ uniqueId: s, descriptor: a, callbacks: C }), [C, a, s]);
  he(
    () => (
      (l.current = x.descriptor),
      i.droppable.register(x),
      () => {
        t.current && h(), i.droppable.unregister(x);
      }
    ),
    [C, a, h, x, n, i.droppable],
  ),
    he(() => {
      t.current && n.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
    }, [e.isDropDisabled, n]),
    he(() => {
      t.current &&
        n.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
    }, [e.isCombineEnabled, n]);
}
function Si() {}
var Qa = { width: 0, height: 0, margin: xp },
  qg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) =>
    e || r === "close"
      ? Qa
      : {
          height: t.client.borderBox.height,
          width: t.client.borderBox.width,
          margin: t.client.margin,
        },
  $g = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) => {
    let s = qg({ isAnimatingOpenOnMount: e, placeholder: t, animate: r });
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
      transition: r !== "none" ? Qt.placeholder : null,
    };
  },
  Qg = (e) => {
    let t = (0, S.useRef)(null),
      r = w(() => {
        t.current && (clearTimeout(t.current), (t.current = null));
      }, []),
      { animate: s, onTransitionEnd: i, onClose: n, contextId: o } = e,
      [a, l] = (0, S.useState)(e.animate === "open");
    (0, S.useEffect)(
      () =>
        a
          ? s !== "open"
            ? (r(), l(!1), Si)
            : t.current
              ? Si
              : ((t.current = setTimeout(() => {
                  (t.current = null), l(!1);
                })),
                r)
          : Si,
      [s, a, r],
    );
    let c = w(
        (u) => {
          u.propertyName === "height" && (i(), s === "close" && n());
        },
        [s, n, i],
      ),
      p = $g({
        isAnimatingOpenOnMount: a,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return S.default.createElement(e.placeholder.tagName, {
      style: p,
      "data-rfd-placeholder-context-id": o,
      onTransitionEnd: c,
      ref: e.innerRef,
    });
  },
  Kg = S.default.memo(Qg);
function Wi(e) {
  return typeof e == "boolean";
}
function Ri(e, t) {
  t.forEach((r) => r(e));
}
var Yg = [
    function ({ props: t }) {
      t.droppableId || b(!1), typeof t.droppableId != "string" && b(!1);
    },
    function ({ props: t }) {
      Wi(t.isDropDisabled) || b(!1),
        Wi(t.isCombineEnabled) || b(!1),
        Wi(t.ignoreContainerClipping) || b(!1);
    },
    function ({ getDroppableRef: t }) {
      jl(t());
    },
  ],
  Xg = [
    function ({ props: t, getPlaceholderRef: r }) {
      !t.placeholder || r();
    },
  ],
  Jg = [
    function ({ props: t }) {
      t.renderClone || b(!1);
    },
    function ({ getPlaceholderRef: t }) {
      t() && b(!1);
    },
  ];
function Zg(e) {
  lr(() => {
    Ri(e, Yg),
      e.props.mode === "standard" && Ri(e, Xg),
      e.props.mode === "virtual" && Ri(e, Jg);
  });
}
var Oi = class extends S.default.PureComponent {
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
  eb = (e) => {
    let t = (0, S.useContext)(is);
    t || b(!1);
    let { contextId: r, isMovementAllowed: s } = t,
      i = (0, S.useRef)(null),
      n = (0, S.useRef)(null),
      {
        children: o,
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
        getContainerForClone: y,
      } = e,
      C = w(() => i.current, []),
      x = w((Q = null) => {
        i.current = Q;
      }, []),
      I = w(() => n.current, []),
      P = w((Q = null) => {
        n.current = Q;
      }, []);
    Zg({ props: e, getDroppableRef: C, getPlaceholderRef: I });
    let E = w(() => {
      s() && h({ maxScroll: Pl() });
    }, [s, h]);
    Ug({
      droppableId: a,
      type: l,
      mode: c,
      direction: p,
      isDropDisabled: d,
      isCombineEnabled: m,
      ignoreContainerClipping: u,
      getDroppableRef: C,
    });
    let M = F(
        () =>
          S.default.createElement(
            Oi,
            { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
            ({ onClose: Q, data: Ae, animate: Pt }) =>
              S.default.createElement(Kg, {
                placeholder: Ae,
                onClose: Q,
                innerRef: P,
                animate: Pt,
                contextId: r,
                onTransitionEnd: E,
              }),
          ),
        [r, E, e.placeholder, e.shouldAnimatePlaceholder, P],
      ),
      G = F(
        () => ({
          innerRef: x,
          placeholder: M,
          droppableProps: {
            "data-rfd-droppable-id": a,
            "data-rfd-droppable-context-id": r,
          },
        }),
        [r, a, M, x],
      ),
      pe = g ? g.dragging.draggableId : null,
      V = F(
        () => ({ droppableId: a, type: l, isUsingCloneFor: pe }),
        [a, pe, l],
      );
    function _e() {
      if (!g) return null;
      let { dragging: Q, render: Ae } = g,
        Pt = S.default.createElement(
          Ql,
          {
            draggableId: Q.draggableId,
            index: Q.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (Pe, _r) => Ae(Pe, _r, Q),
        );
      return rr.default.createPortal(Pt, y());
    }
    return S.default.createElement(Ji.Provider, { value: V }, o(G, f), _e());
  },
  tb = eb;
function rb() {
  return document.body || b(!1), document.body;
}
var Ka = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: rb,
  },
  Zl = (e) => {
    let t = { ...e },
      r;
    for (r in Ka) e[r] === void 0 && (t = { ...t, [r]: Ka[r] });
    return t;
  },
  wi = (e, t) => e === t.droppable.type,
  Ya = (e, t) => t.draggables[e.draggable.id],
  sb = () => {
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
      r = te((n) => ({
        draggableId: n.id,
        type: n.type,
        source: { index: n.index, droppableId: n.droppableId },
      })),
      s = te((n, o, a, l, c, p) => {
        let u = c.descriptor.id;
        if (c.descriptor.droppableId === n) {
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
        if (!o) return t;
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
    return (n, o) => {
      let a = Zl(o),
        l = a.droppableId,
        c = a.type,
        p = !a.isDropDisabled,
        u = a.renderClone;
      if (tr(n)) {
        let d = n.critical;
        if (!wi(c, d)) return t;
        let m = Ya(d, n.dimensions),
          f = fe(n.impact) === l;
        return s(l, p, f, f, m, u);
      }
      if (n.phase === "DROP_ANIMATING") {
        let d = n.completed;
        if (!wi(c, d.critical)) return t;
        let m = Ya(d.critical, n.dimensions);
        return s(l, p, ql(d.result) === l, fe(d.impact) === l, m, u);
      }
      if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
        let d = n.completed;
        if (!wi(c, d.critical)) return t;
        let m = fe(d.impact) === l,
          f = !!(d.impact.at && d.impact.at.type === "COMBINE"),
          g = d.critical.droppable.id === l;
        return m ? (f ? e : t) : g ? e : t;
      }
      return t;
    };
  },
  ib = { updateViewportMaxScroll: zm },
  nb = jr(sb, ib, (e, t, r) => ({ ...Zl(r), ...e, ...t }), {
    context: Qi,
    areStatePropsEqual: Ul,
  })(tb),
  ec = nb;
function os(e) {
  let t = Ln(),
    r = Gn();
  return ye(ob(t.GetAnonymousServiceTransport(), r, e));
}
function ob(e, t, r) {
  return {
    queryKey: ["LocalizedTagNames", r],
    queryFn: async () => {
      let s = `LocalizedTagNames2_${r}`,
        i = await t.GetObject(s),
        n = De.Init(uo);
      n.Body().set_language(r),
        i?.version_hash && n.Body().set_have_version_hash(i.version_hash);
      let o = await po.GetTagList(e, n),
        a;
      if (o.GetEResult() == 1)
        (a = o.Body().toObject()), t && t.StoreObject(s, a);
      else if (o.GetEResult() == 29) a = i || void 0;
      else if (i)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (a = i);
      else throw o.GetErrorMessage();
      let l = {};
      return (a?.tags || []).forEach(({ tagid: p, name: u }) => (l[p] = u)), l;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function tc(e, t) {
  let { data: r } = os(t);
  return r && r[e];
}
function cr() {
  let e = Rr(),
    t = Mn();
  return ye(ab(t, e));
}
function ab(e, t) {
  let { country: r } = t;
  return {
    queryKey: ["StoreBrowsePriceStops", r],
    queryFn: async () => lb(e, r),
    staleTime: 24 * 60 * 60 * 1e3,
  };
}
async function lb(e, t) {
  let r = De.Init(In);
  r.Body().set_country_code(t);
  let s = await xn.GetPriceStops(e, r);
  if (!s.BSuccess()) throw `Error loading price stops: ${s.GetErrorMessage()}`;
  return s.Body().toObject().price_stops || [];
}
var ke = v(j()),
  dc = v(xs());
function nt(e, t, r) {
  let s = r.initialDeps ?? [],
    i;
  return () => {
    var n, o, a, l;
    let c;
    r.key && (n = r.debug) != null && n.call(r) && (c = Date.now());
    let p = e();
    if (!(p.length !== s.length || p.some((m, f) => s[f] !== m))) return i;
    s = p;
    let d;
    if (
      (r.key && (o = r.debug) != null && o.call(r) && (d = Date.now()),
      (i = t(...p)),
      r.key && (a = r.debug) != null && a.call(r))
    ) {
      let m = Math.round((Date.now() - c) * 100) / 100,
        f = Math.round((Date.now() - d) * 100) / 100,
        g = f / 16,
        h = (y, C) => {
          for (y = String(y); y.length < C; ) y = " " + y;
          return y;
        };
      console.info(
        `%c⏱ ${h(f, 5)} /${h(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`,
        r?.key,
      );
    }
    return (l = r?.onChange) == null || l.call(r, i), i;
  };
}
function as(e, t) {
  if (e === void 0) throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
var rc = (e, t) => Math.abs(e - t) < 1,
  en = (e, t, r) => {
    let s;
    return function (...i) {
      e.clearTimeout(s), (s = e.setTimeout(() => t.apply(this, i), r));
    };
  };
var cb = (e) => e,
  ub = (e) => {
    let t = Math.max(e.startIndex - e.overscan, 0),
      r = Math.min(e.endIndex + e.overscan, e.count - 1),
      s = [];
    for (let i = t; i <= r; i++) s.push(i);
    return s;
  },
  sc = (e, t) => {
    let r = e.scrollElement;
    if (!r) return;
    let s = e.targetWindow;
    if (!s) return;
    let i = (o) => {
      let { width: a, height: l } = o;
      t({ width: Math.round(a), height: Math.round(l) });
    };
    if ((i(r.getBoundingClientRect()), !s.ResizeObserver)) return () => {};
    let n = new s.ResizeObserver((o) => {
      let a = o[0];
      if (a?.borderBoxSize) {
        let l = a.borderBoxSize[0];
        if (l) {
          i({ width: l.inlineSize, height: l.blockSize });
          return;
        }
      }
      i(r.getBoundingClientRect());
    });
    return (
      n.observe(r, { box: "border-box" }),
      () => {
        n.unobserve(r);
      }
    );
  },
  ur = { passive: !0 },
  ic = (e, t) => {
    let r = e.scrollElement;
    if (!r) return;
    let s = () => {
      t({ width: r.innerWidth, height: r.innerHeight });
    };
    return (
      s(),
      r.addEventListener("resize", s, ur),
      () => {
        r.removeEventListener("resize", s);
      }
    );
  },
  nc = typeof window > "u" ? !0 : "onscrollend" in window,
  oc = (e, t) => {
    let r = e.scrollElement;
    if (!r) return;
    let s = e.targetWindow;
    if (!s) return;
    let i = 0,
      n = nc
        ? () => {}
        : en(
            s,
            () => {
              t(i, !1);
            },
            e.options.isScrollingResetDelay,
          ),
      o = (c) => () => {
        let { horizontal: p, isRtl: u } = e.options;
        (i = p ? r.scrollLeft * ((u && -1) || 1) : r.scrollTop), n(), t(i, c);
      },
      a = o(!0),
      l = o(!1);
    return (
      l(),
      r.addEventListener("scroll", a, ur),
      r.addEventListener("scrollend", l, ur),
      () => {
        r.removeEventListener("scroll", a),
          r.removeEventListener("scrollend", l);
      }
    );
  },
  ac = (e, t) => {
    let r = e.scrollElement;
    if (!r) return;
    let s = e.targetWindow;
    if (!s) return;
    let i = 0,
      n = nc
        ? () => {}
        : en(
            s,
            () => {
              t(i, !1);
            },
            e.options.isScrollingResetDelay,
          ),
      o = (c) => () => {
        (i = r[e.options.horizontal ? "scrollX" : "scrollY"]), n(), t(i, c);
      },
      a = o(!0),
      l = o(!1);
    return (
      l(),
      r.addEventListener("scroll", a, ur),
      r.addEventListener("scrollend", l, ur),
      () => {
        r.removeEventListener("scroll", a),
          r.removeEventListener("scrollend", l);
      }
    );
  },
  db = (e, t, r) => {
    if (t?.borderBoxSize) {
      let s = t.borderBoxSize[0];
      if (s)
        return Math.round(s[r.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return Math.round(
      e.getBoundingClientRect()[r.options.horizontal ? "width" : "height"],
    );
  },
  lc = (e, { adjustments: t = 0, behavior: r }, s) => {
    var i, n;
    let o = e + t;
    (n = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null ||
      n.call(i, { [s.options.horizontal ? "left" : "top"]: o, behavior: r });
  },
  cc = (e, { adjustments: t = 0, behavior: r }, s) => {
    var i, n;
    let o = e + t;
    (n = (i = s.scrollElement) == null ? void 0 : i.scrollTo) == null ||
      n.call(i, { [s.options.horizontal ? "left" : "top"]: o, behavior: r });
  },
  ls = class {
    constructor(t) {
      (this.unsubs = []),
        (this.scrollElement = null),
        (this.targetWindow = null),
        (this.isScrolling = !1),
        (this.scrollToIndexTimeoutId = null),
        (this.measurementsCache = []),
        (this.itemSizeCache = new Map()),
        (this.pendingMeasuredCacheIndexes = []),
        (this.scrollRect = null),
        (this.scrollOffset = null),
        (this.scrollDirection = null),
        (this.scrollAdjustments = 0),
        (this.elementsCache = new Map()),
        (this.observer = (() => {
          let r = null,
            s = () =>
              r ||
              (!this.targetWindow || !this.targetWindow.ResizeObserver
                ? null
                : (r = new this.targetWindow.ResizeObserver((i) => {
                    i.forEach((n) => {
                      this._measureElement(n.target, n);
                    });
                  })));
          return {
            disconnect: () => {
              var i;
              return (i = s()) == null ? void 0 : i.disconnect();
            },
            observe: (i) => {
              var n;
              return (n = s()) == null
                ? void 0
                : n.observe(i, { box: "border-box" });
            },
            unobserve: (i) => {
              var n;
              return (n = s()) == null ? void 0 : n.unobserve(i);
            },
          };
        })()),
        (this.range = null),
        (this.setOptions = (r) => {
          Object.entries(r).forEach(([s, i]) => {
            typeof i > "u" && delete r[s];
          }),
            (this.options = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: cb,
              rangeExtractor: ub,
              onChange: () => {},
              measureElement: db,
              initialRect: { width: 0, height: 0 },
              scrollMargin: 0,
              gap: 0,
              indexAttribute: "data-index",
              initialMeasurementsCache: [],
              lanes: 1,
              isScrollingResetDelay: 150,
              enabled: !0,
              isRtl: !1,
              ...r,
            });
        }),
        (this.notify = (r) => {
          var s, i;
          (i = (s = this.options).onChange) == null || i.call(s, this, r);
        }),
        (this.maybeNotify = nt(
          () => (
            this.calculateRange(),
            [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ]
          ),
          (r) => {
            this.notify(r);
          },
          {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ],
          },
        )),
        (this.cleanup = () => {
          this.unsubs.filter(Boolean).forEach((r) => r()),
            (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            this.observer.disconnect(),
            this.elementsCache.clear();
        }),
        (this._didMount = () => () => {
          this.cleanup();
        }),
        (this._willUpdate = () => {
          var r;
          let s = this.options.enabled ? this.options.getScrollElement() : null;
          if (this.scrollElement !== s) {
            if ((this.cleanup(), !s)) {
              this.maybeNotify();
              return;
            }
            (this.scrollElement = s),
              this.scrollElement && "ownerDocument" in this.scrollElement
                ? (this.targetWindow =
                    this.scrollElement.ownerDocument.defaultView)
                : (this.targetWindow =
                    ((r = this.scrollElement) == null ? void 0 : r.window) ??
                    null),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: void 0,
                behavior: void 0,
              }),
              this.unsubs.push(
                this.options.observeElementRect(this, (i) => {
                  (this.scrollRect = i), this.maybeNotify();
                }),
              ),
              this.unsubs.push(
                this.options.observeElementOffset(this, (i, n) => {
                  (this.scrollAdjustments = 0),
                    (this.scrollDirection = n
                      ? this.getScrollOffset() < i
                        ? "forward"
                        : "backward"
                      : null),
                    (this.scrollOffset = i),
                    (this.isScrolling = n),
                    this.maybeNotify();
                }),
              );
          }
        }),
        (this.getSize = () =>
          this.options.enabled
            ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
              this.scrollRect[this.options.horizontal ? "width" : "height"])
            : ((this.scrollRect = null), 0)),
        (this.getScrollOffset = () =>
          this.options.enabled
            ? ((this.scrollOffset =
                this.scrollOffset ??
                (typeof this.options.initialOffset == "function"
                  ? this.options.initialOffset()
                  : this.options.initialOffset)),
              this.scrollOffset)
            : ((this.scrollOffset = null), 0)),
        (this.getFurthestMeasurement = (r, s) => {
          let i = new Map(),
            n = new Map();
          for (let o = s - 1; o >= 0; o--) {
            let a = r[o];
            if (i.has(a.lane)) continue;
            let l = n.get(a.lane);
            if (
              (l == null || a.end > l.end
                ? n.set(a.lane, a)
                : a.end < l.end && i.set(a.lane, !0),
              i.size === this.options.lanes)
            )
              break;
          }
          return n.size === this.options.lanes
            ? Array.from(n.values()).sort((o, a) =>
                o.end === a.end ? o.index - a.index : o.end - a.end,
              )[0]
            : void 0;
        }),
        (this.getMeasurementOptions = nt(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled,
          ],
          (r, s, i, n, o) => (
            (this.pendingMeasuredCacheIndexes = []),
            {
              count: r,
              paddingStart: s,
              scrollMargin: i,
              getItemKey: n,
              enabled: o,
            }
          ),
          { key: !1 },
        )),
        (this.getMeasurements = nt(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          (
            {
              count: r,
              paddingStart: s,
              scrollMargin: i,
              getItemKey: n,
              enabled: o,
            },
            a,
          ) => {
            if (!o)
              return (
                (this.measurementsCache = []), this.itemSizeCache.clear(), []
              );
            this.measurementsCache.length === 0 &&
              ((this.measurementsCache = this.options.initialMeasurementsCache),
              this.measurementsCache.forEach((p) => {
                this.itemSizeCache.set(p.key, p.size);
              }));
            let l =
              this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            this.pendingMeasuredCacheIndexes = [];
            let c = this.measurementsCache.slice(0, l);
            for (let p = l; p < r; p++) {
              let u = n(p),
                d =
                  this.options.lanes === 1
                    ? c[p - 1]
                    : this.getFurthestMeasurement(c, p),
                m = d ? d.end + this.options.gap : s + i,
                f = a.get(u),
                g = typeof f == "number" ? f : this.options.estimateSize(p),
                h = m + g,
                y = d ? d.lane : p % this.options.lanes;
              c[p] = { index: p, start: m, size: g, end: h, key: u, lane: y };
            }
            return (this.measurementsCache = c), c;
          },
          { key: !1, debug: () => this.options.debug },
        )),
        (this.calculateRange = nt(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
          ],
          (r, s, i) =>
            (this.range =
              r.length > 0 && s > 0
                ? pb({ measurements: r, outerSize: s, scrollOffset: i })
                : null),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getIndexes = nt(
          () => [
            this.options.rangeExtractor,
            this.calculateRange(),
            this.options.overscan,
            this.options.count,
          ],
          (r, s, i, n) =>
            s === null
              ? []
              : r({
                  startIndex: s.startIndex,
                  endIndex: s.endIndex,
                  overscan: i,
                  count: n,
                }),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.indexFromElement = (r) => {
          let s = this.options.indexAttribute,
            i = r.getAttribute(s);
          return i
            ? parseInt(i, 10)
            : (console.warn(
                `Missing attribute name '${s}={index}' on measured element.`,
              ),
              -1);
        }),
        (this._measureElement = (r, s) => {
          let i = this.indexFromElement(r),
            n = this.measurementsCache[i];
          if (!n) return;
          let o = n.key,
            a = this.elementsCache.get(o);
          a !== r &&
            (a && this.observer.unobserve(a),
            this.observer.observe(r),
            this.elementsCache.set(o, r)),
            r.isConnected &&
              this.resizeItem(i, this.options.measureElement(r, s, this));
        }),
        (this.resizeItem = (r, s) => {
          let i = this.measurementsCache[r];
          if (!i) return;
          let n = this.itemSizeCache.get(i.key) ?? i.size,
            o = s - n;
          o !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
              ? this.shouldAdjustScrollPositionOnItemSizeChange(i, o, this)
              : i.start < this.getScrollOffset() + this.scrollAdjustments) &&
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += o),
                behavior: void 0,
              }),
            this.pendingMeasuredCacheIndexes.push(i.index),
            (this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, s))),
            this.notify(!1));
        }),
        (this.measureElement = (r) => {
          if (!r) {
            this.elementsCache.forEach((s, i) => {
              s.isConnected ||
                (this.observer.unobserve(s), this.elementsCache.delete(i));
            });
            return;
          }
          this._measureElement(r, void 0);
        }),
        (this.getVirtualItems = nt(
          () => [this.getIndexes(), this.getMeasurements()],
          (r, s) => {
            let i = [];
            for (let n = 0, o = r.length; n < o; n++) {
              let a = r[n],
                l = s[a];
              i.push(l);
            }
            return i;
          },
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getVirtualItemForOffset = (r) => {
          let s = this.getMeasurements();
          if (s.length !== 0)
            return as(s[uc(0, s.length - 1, (i) => as(s[i]).start, r)]);
        }),
        (this.getOffsetForAlignment = (r, s) => {
          let i = this.getSize(),
            n = this.getScrollOffset();
          s === "auto" &&
            (r <= n ? (s = "start") : r >= n + i ? (s = "end") : (s = "start")),
            s === "start"
              ? (r = r)
              : s === "end"
                ? (r = r - i)
                : s === "center" && (r = r - i / 2);
          let o = this.options.horizontal ? "scrollWidth" : "scrollHeight",
            l =
              (this.scrollElement
                ? "document" in this.scrollElement
                  ? this.scrollElement.document.documentElement[o]
                  : this.scrollElement[o]
                : 0) - i;
          return Math.max(Math.min(l, r), 0);
        }),
        (this.getOffsetForIndex = (r, s = "auto") => {
          r = Math.max(0, Math.min(r, this.options.count - 1));
          let i = this.measurementsCache[r];
          if (!i) return;
          let n = this.getSize(),
            o = this.getScrollOffset();
          if (s === "auto")
            if (i.end >= o + n - this.options.scrollPaddingEnd) s = "end";
            else if (i.start <= o + this.options.scrollPaddingStart)
              s = "start";
            else return [o, s];
          let a =
            s === "end"
              ? i.end + this.options.scrollPaddingEnd
              : i.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(a, s), s];
        }),
        (this.isDynamicMode = () => this.elementsCache.size > 0),
        (this.cancelScrollToIndex = () => {
          this.scrollToIndexTimeoutId !== null &&
            this.targetWindow &&
            (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
            (this.scrollToIndexTimeoutId = null));
        }),
        (this.scrollToOffset = (
          r,
          { align: s = "start", behavior: i } = {},
        ) => {
          this.cancelScrollToIndex(),
            i === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              ),
            this._scrollToOffset(this.getOffsetForAlignment(r, s), {
              adjustments: void 0,
              behavior: i,
            });
        }),
        (this.scrollToIndex = (r, { align: s = "auto", behavior: i } = {}) => {
          (r = Math.max(0, Math.min(r, this.options.count - 1))),
            this.cancelScrollToIndex(),
            i === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              );
          let n = this.getOffsetForIndex(r, s);
          if (!n) return;
          let [o, a] = n;
          this._scrollToOffset(o, { adjustments: void 0, behavior: i }),
            i !== "smooth" &&
              this.isDynamicMode() &&
              this.targetWindow &&
              (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                () => {
                  if (
                    ((this.scrollToIndexTimeoutId = null),
                    this.elementsCache.has(this.options.getItemKey(r)))
                  ) {
                    let [c] = as(this.getOffsetForIndex(r, a));
                    rc(c, this.getScrollOffset()) ||
                      this.scrollToIndex(r, { align: a, behavior: i });
                  } else this.scrollToIndex(r, { align: a, behavior: i });
                },
              ));
        }),
        (this.scrollBy = (r, { behavior: s } = {}) => {
          this.cancelScrollToIndex(),
            s === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              ),
            this._scrollToOffset(this.getScrollOffset() + r, {
              adjustments: void 0,
              behavior: s,
            });
        }),
        (this.getTotalSize = () => {
          var r;
          let s = this.getMeasurements(),
            i;
          return (
            s.length === 0
              ? (i = this.options.paddingStart)
              : (i =
                  this.options.lanes === 1
                    ? (((r = s[s.length - 1]) == null ? void 0 : r.end) ?? 0)
                    : Math.max(
                        ...s.slice(-this.options.lanes).map((n) => n.end),
                      )),
            i - this.options.scrollMargin + this.options.paddingEnd
          );
        }),
        (this._scrollToOffset = (r, { adjustments: s, behavior: i }) => {
          this.options.scrollToFn(r, { behavior: i, adjustments: s }, this);
        }),
        (this.measure = () => {
          (this.itemSizeCache = new Map()), this.notify(!1);
        }),
        this.setOptions(t);
    }
  },
  uc = (e, t, r, s) => {
    for (; e <= t; ) {
      let i = ((e + t) / 2) | 0,
        n = r(i);
      if (n < s) e = i + 1;
      else if (n > s) t = i - 1;
      else return i;
    }
    return e > 0 ? e - 1 : 0;
  };
function pb({ measurements: e, outerSize: t, scrollOffset: r }) {
  let s = e.length - 1,
    n = uc(0, s, (a) => e[a].start, r),
    o = n;
  for (; o < s && e[o].end < r + t; ) o++;
  return { startIndex: n, endIndex: o };
}
var mb = typeof document < "u" ? ke.useLayoutEffect : ke.useEffect;
function pc(e) {
  let t = ke.useReducer(() => ({}), {})[1],
    r = {
      ...e,
      onChange: (i, n) => {
        var o;
        n ? (0, dc.flushSync)(t) : t(),
          (o = e.onChange) == null || o.call(e, i, n);
      },
    },
    [s] = ke.useState(() => new ls(r));
  return (
    s.setOptions(r),
    ke.useEffect(() => s._didMount(), []),
    mb(() => s._willUpdate()),
    s
  );
}
function mc(e) {
  return pc({
    observeElementRect: sc,
    observeElementOffset: oc,
    scrollToFn: cc,
    ...e,
  });
}
function fc(e) {
  return pc({
    getScrollElement: () => (typeof document < "u" ? window : null),
    observeElementRect: ic,
    observeElementOffset: ac,
    scrollToFn: lc,
    initialOffset: () => (typeof document < "u" ? window.scrollY : 0),
    ...e,
  });
}
var $ = v(j(), 1);
var we = v(D(), 1),
  fb = $.default.memo(function (t) {
    let { virtualizer: r, bDynamic: s, idx: i, rowGap: n, renderItem: o } = t,
      a = $.default.useCallback(
        (l, c, p) => (r.scrollToIndex(i, { align: "center" }), !0),
        [r, i],
      );
    return (0, we.jsx)(Be, {
      ref: s ? r.measureElement : void 0,
      "data-index": i,
      fnScrollIntoViewHandler: a,
      scrollIntoViewWhenChildFocused: "force",
      style: { width: "100%", paddingBottom: n },
      children: o(i),
    });
  }),
  hc = $.default.forwardRef(function (t, r) {
    let {
        nRows: s,
        nItemHeight: i,
        nRowGap: n,
        overscan: o,
        renderItem: a,
        bDynamic: l,
        className: c,
        forceVirtualizeType: p,
        initialOffset: u,
        onOffsetChange: d,
        ...m
      } = t,
      [f, g] = (0, $.useState)(p),
      [h, y] = $.default.useState(),
      [C, x] = $.default.useState(),
      I = $.default.useCallback(
        (M) => {
          if (!M || p == "window") return;
          let G = Pn(M, "y");
          (0, $.startTransition)(() => {
            y(G || void 0), x(M.offsetTop), p || g(G ? "element" : "window");
          });
        },
        [p],
      ),
      P = Sr(I, r),
      E = {
        nRows: s,
        nItemHeight: i,
        nRowGap: n,
        overscan: o,
        renderItem: a,
        bDynamic: l,
        forceVirtualizeType: p,
        initialOffset: u,
        onOffsetChange: d,
      };
    return (0, we.jsx)(Be, {
      className: c,
      ref: P,
      ...m,
      children: (0, we.jsxs)($.Suspense, {
        children: [
          f === "element" &&
            (0, we.jsx)(gb, { ...E, nScrollMargin: C || 0, elScrollable: h }),
          f === "window" && (0, we.jsx)(hb, { ...E, nScrollMargin: C }),
        ],
      }),
    });
  });
function hb(e) {
  let {
      nScrollMargin: t,
      nRows: r,
      nItemHeight: s,
      nRowGap: i = 10,
      overscan: n = 6,
      initialOffset: o,
      onOffsetChange: a,
    } = e,
    l = s + i,
    c = fc({
      count: r,
      scrollMargin: t,
      estimateSize: $.default.useCallback(() => l, [l]),
      overscan: n,
      initialOffset: o,
      initialRect: { height: 1e3, width: 1e3 },
      observeElementOffset: bc,
      observeElementRect: bb,
      onChange(p, u) {
        a?.(p.scrollOffset);
      },
    });
  return (
    $.default.useEffect(() => {
      (0, $.startTransition)(() => {
        c.measure();
      });
    }, [c, l]),
    (0, we.jsx)(gc, { ...e, virtualizer: c })
  );
}
function gb(e) {
  let {
      nRows: t,
      nScrollMargin: r,
      elScrollable: s,
      nItemHeight: i,
      nRowGap: n = 10,
      overscan: o = 6,
      initialOffset: a,
      onOffsetChange: l,
    } = e,
    c = i + n,
    p = mc({
      count: t,
      scrollMargin: r - (s?.offsetTop || 0),
      getScrollElement: () => s,
      estimateSize: $.default.useCallback(() => c, [c]),
      overscan: o,
      initialRect: { height: 1e3, width: 1e3 },
      initialOffset: a,
      observeElementOffset: bc,
      observeElementRect: _b,
      onChange(u, d) {
        l?.(u.scrollOffset);
      },
    });
  return (
    $.default.useEffect(() => {
      (0, $.startTransition)(() => {
        p.measure();
      });
    }, [p, c]),
    (0, we.jsx)(gc, { ...e, virtualizer: p })
  );
}
function gc(e) {
  let { virtualizer: t, nRowGap: r, renderItem: s, bDynamic: i } = e,
    n = t.getVirtualItems(),
    o = n.length ? n[0].start - t.options.scrollMargin : 0,
    a = Math.max(0, t.getTotalSize());
  return (0, we.jsx)(Be, {
    "flow-children": "column",
    navEntryPreferPosition: 3,
    style: { height: `${a}px`, width: "100%", position: "relative" },
    children: (0, we.jsx)("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY( ${o}px )`,
      },
      children: n.map((l) =>
        (0, we.jsx)(
          fb,
          {
            virtualizer: t,
            bDynamic: i,
            idx: l.index,
            rowGap: r,
            renderItem: s,
          },
          l.key,
        ),
      ),
    }),
  });
}
function cs(e) {
  return (...t) => {
    queueMicrotask(() => {
      (0, $.startTransition)(() => {
        e(...t);
      });
    });
  };
}
function bc(e, t) {
  let r = e.scrollElement;
  if (!r) return;
  let s;
  "scrollX" in r
    ? (s = cs((o) => t(r[e.options.horizontal ? "scrollX" : "scrollY"], o)))
    : (s = cs((o) =>
        t(r[e.options.horizontal ? "scrollLeft" : "scrollTop"], o),
      ));
  let i = () => s(!0),
    n = () => s(!1);
  return (
    n(),
    r.addEventListener("scroll", i, { passive: !0 }),
    r.addEventListener("scrollend", n, { passive: !0 }),
    () => {
      r.removeEventListener("scroll", i), r.removeEventListener("scrollend", n);
    }
  );
}
function bb(e, t) {
  let r = e.scrollElement;
  if (!r) return;
  let s = cs(() => t({ width: r.innerWidth, height: r.innerHeight }));
  return (
    s(),
    r.addEventListener("resize", s, { passive: !0 }),
    () => {
      r.removeEventListener("resize", s);
    }
  );
}
function _b(e, t) {
  let r = e.scrollElement;
  if (!r) return;
  let s = cs((o) =>
    t({ width: Math.round(o.width), height: Math.round(o.height) }),
  );
  s(r.getBoundingClientRect());
  let i = r.ownerDocument.defaultView;
  if (!i?.ResizeObserver) return () => {};
  let n = new i.ResizeObserver((o) => {
    if (o[0]?.borderBoxSize[0]) {
      s({
        width: o[0].borderBoxSize[0].inlineSize,
        height: o[0].borderBoxSize[0].blockSize,
      });
      return;
    }
    s(r.getBoundingClientRect());
  });
  return (
    n.observe(r, { box: "border-box" }),
    () => {
      n.unobserve(r);
    }
  );
}
var pn = v(je(), 1),
  H = v(j(), 1);
var ge = v(j(), 1);
var vc = v(D(), 1),
  dr = ge.createContext(void 0);
function _c(e) {
  let { steamid: t, children: r } = e,
    [s, i] = ge.useState(() => No()),
    n = Vn(),
    o = ge.useCallback((l) => {
      To(l), i(l);
    }, []),
    a = ge.useMemo(
      () => ({
        steamid: t,
        bViewingOwnWishlist:
          !!n && new Ps(n).GetAccountID() == new Ps(t).GetAccountID(),
        bCompactView: s,
        setCompactView: o,
      }),
      [t, n, s, o],
    );
  return (0, vc.jsx)(dr.Provider, { value: a, children: r });
}
function ot() {
  return ge.useContext(dr).bViewingOwnWishlist;
}
function pr() {
  return ge.useContext(dr).steamid;
}
function Ie() {
  return ge.useContext(dr).bCompactView;
}
function yc() {
  return ge.useContext(dr).setCompactView;
}
function tn(e, t) {
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
async function yb(e, t, r, s, i, n) {
  let o = De.Init(Mt);
  o.Body().set_steamid(r),
    Jn(t, o),
    s &&
      (Zn(o, s.data_request),
      o.Body().set_start_index(s.page_start || 0),
      o.Body().set_page_size(s.page_size)),
    i && o.Body().set_sort_order(i),
    n && o.Body().set_filters(At.fromObject(n));
  let a = await ft.GetWishlistSortedFiltered(e, o);
  if (!a.BSuccess()) throw `Error loading wishlist: ${a.GetErrorMessage()}`;
  let l;
  return (
    s
      ? (l = vb(s.cacheStoreItemData, s.data_request, a.Body().items() || []))
      : (l = a.Body().toObject().items || []),
    { steamid: r, items: l }
  );
}
function vb(e, t, r) {
  let s = [];
  return (
    r.forEach((i) => {
      i.store_item(!1) && e(i.store_item(), t);
      let n = i.toObject();
      delete n.store_item, s.push(n);
    }),
    s
  );
}
function rn(e, t = 0, r = {}) {
  return ["WishlistSortedFiltered", e, t, r];
}
function sn(e, t, r, s, i = 0, n = {}) {
  return {
    queryKey: rn(r, i, n),
    queryFn: () => yb(e, t, r, s, i, n),
    staleTime: 10 * 60 * 1e3,
  };
}
function Cc(e, t = 0, r = {}) {
  let s = xe(),
    i = Rr(),
    n = eo(),
    o = Ie();
  return ye(sn(s, i, e, tn(o, n), t, r));
}
function Sc(e, t, r) {
  e.setQueryData(rn(t), (s) => s && { ...s, items: r });
}
function Wc(e, t) {
  e.invalidateQueries({ queryKey: rn(t), exact: !1 });
}
var mr = v(j(), 1);
var Rc = "/TB3SP4DA.png";
var wc = "s3BAyjuoPYA-";
var Ic = "wgHGKOWFf8c-";
var xc = "dIPGtN9kABg-";
var at = v(D(), 1);
function Pc(e) {
  let { dragHandleProps: t, index: r, updateWishlistPriority: s } = e,
    [i, n] = mr.useState(void 0),
    o = mr.useCallback((c) => {
      n(c.currentTarget.value);
    }, []),
    a = mr.useCallback(
      (c) => {
        let p = parseInt(c.currentTarget.value);
        p && p - 1 != r && s(r, p - 1), n(void 0);
      },
      [r, s],
    ),
    l = i !== void 0 ? i : r + 1;
  return (0, at.jsxs)("div", {
    className: wc,
    children: [
      (0, at.jsx)("div", {
        className: Ic,
        ...t,
        children: (0, at.jsx)("img", { src: Cr(Rc), alt: "" }),
      }),
      (0, at.jsx)("div", {
        className: xc,
        children: (0, at.jsx)("input", {
          type: "text",
          value: l,
          onChange: o,
          onBlur: a,
        }),
      }),
    ],
  });
}
var ze = v(j());
var Wb = "unUserdataVersion";
async function Ec(e, t) {
  let r = Number.parseInt(window.localStorage.getItem(Wb) || "0"),
    s = `${yn.STORE_BASE_URL}dynamicstore/userdata/?id=${t}&cc=${Ft.country_code}`;
  return (
    r && (s += `&v=${r}`), (await (await fetch(s)).json()).rgOwnedApps || []
  );
}
function Dc() {
  let e = xe(),
    t = Ft.accountid;
  return ye(Rb(e, t));
}
function Rb(e, t) {
  return {
    queryKey: Fc(t),
    queryFn: async () => {
      if (!t) return new Set();
      let r = await Ec(e, t);
      return new Set(r);
    },
    staleTime: 10 * 60 * 1e3,
  };
}
function Bc() {
  let e = Ve(),
    t = Ft.accountid;
  return (r) => {
    e.setQueryData(Fc(t), (s) => {
      if (s) return new Set([...s.values(), ...r]);
    });
  };
}
function Fc(e) {
  return ["AccountOwnedApps", e ?? 0];
}
function Oc(e) {
  let t = xe(),
    r = Bc();
  return dt({
    mutationFn: () => wb(t, e),
    onSuccess(s) {
      let [
        i,
        { packageids_added: n, appids_added: o, purchase_result_detail: a },
      ] = s;
      o && r(o);
    },
  });
}
async function wb(e, t) {
  let r = De.Init(qn);
  r.Body().set_item_id(wn.fromObject(t));
  let s = await $n.AddFreeLicense(e, r);
  return [s.GetEResult(), s.Body().toObject()];
}
var us = v(j(), 1);
var Tc = v(D(), 1);
function Nc(e) {
  let [t, r] = (0, us.useState)(void 0),
    s = `${re.STORE_BASE_URL}login/${t ? `?redir=${encodeURIComponent(t)}` : ""}`;
  return (
    (0, us.useEffect)(() => {
      r(location.href);
    }, []),
    (0, Tc.jsx)(Co, {
      href: s,
      title: e.strToolTip,
      children: Fe.Localize("#Button_SignIn"),
    })
  );
}
var fr = v(D());
function ds(e) {
  let { itemid: t } = e,
    { bIsOwned: r, unAppID: s } = xb(t);
  return Ot.logged_in
    ? r
      ? (0, fr.jsx)(So, { appid: s })
      : (0, fr.jsx)(Ib, { itemid: t })
    : (0, fr.jsx)(Nc, {
        strToolTip: Fe.Localize("#SignInToAddToLibrary_Tooltip"),
      });
}
function Ib(e) {
  let { mutate: t } = Oc(e.itemid);
  return (0, fr.jsx)(vo, {
    onClick: () => t,
    children: Fe.Localize("#AddToLibraryButton"),
  });
}
function xb(e) {
  let { data: t } = Me("appid" in e ? void 0 : e),
    { data: r } = Dc(),
    s;
  return (
    "appid" in e ? (s = [e.appid]) : t && (s = t.included_appids),
    s === void 0 || r === void 0 || s.length == 0
      ? { bIsOwned: void 0 }
      : { bIsOwned: !s.some((i) => !r.has(i)), unAppID: s[0] }
  );
}
var be = v(D()),
  Pb = ze.lazy(() => import("./cartmodal-ODBONHO5.js"));
function Ac(e) {
  let { purchaseOption: t } = e;
  if (!t) return null;
  if (t.is_free_to_keep)
    return (0, be.jsx)(ds, { itemid: { packageid: t.packageid } });
  if (t.packageid) return (0, be.jsx)(Eb, { packageid: t.packageid });
  if (t.bundleid) return (0, be.jsx)(Db, { bundleid: t.bundleid });
  throw "Purchase option does not have package or bundle associated";
}
var Eb = ze.memo(function (t) {
    return Mc(t.packageid, void 0);
  }),
  Db = ze.memo(function (t) {
    return Mc(void 0, t.bundleid);
  });
function Mc(e, t) {
  let { data: r } = Qn(),
    [s, i] = ze.useState(void 0),
    n = ze.useMemo(() => Kn(r, e, t), [r, e, t]),
    { mutate: o } = bo(e, t, n);
  return (0, be.jsxs)(be.Fragment, {
    children: [
      s && (0, be.jsx)(Pb, { lineItemIDs: s, closeCart: () => i(void 0) }),
      n
        ? (0, be.jsx)(Bb, {})
        : (0, be.jsx)(Fb, {
            addToCart: () => {
              o(void 0, { onSuccess: (a) => i(a) });
            },
          }),
    ],
  });
}
function Bb() {
  return (0, be.jsx)(yo, {
    href: `${re.STORE_BASE_URL}cart/`,
    children: Fe.Localize("#AddToCartButton_InCart"),
  });
}
function Fb(e) {
  return (0, be.jsx)(_o, {
    onClick: e.addToCart,
    children: Fe.Localize("#AddToCartButton_AddToCart"),
  });
}
var wt = v(j());
function Gc(e) {
  let { appID: t, feature: r, depth: s, children: i } = e,
    n = Wn(r, s),
    o = Xn(),
    [a, l] = wt.default.useState(void 0),
    c = wt.default.useCallback(
      (m) => {
        m.isIntersecting &&
          l((f) => (f?.appID == t && f.snr == n ? f : { appID: t, snr: n }));
      },
      [t, n],
    );
  (0, wt.useEffect)(() => {
    a && o.AddImpression(a.appID, a.snr);
  }, [o, a]);
  let p = jn(c),
    u = t && (!a || (a.appID != t && a.snr != n)),
    d = Sr(i.ref, u ? p : void 0);
  return wt.default.cloneElement(i, { ref: d });
}
var br = v(je(), 1),
  ut = v(j(), 1);
var hs = v(j(), 1);
var Lc = "160px";
var kc = "20px";
var zc = "82px";
var Hc = "8px";
var Vc = "pAoL4PrPWdg-";
var ps = "XNnjz6jit-E-";
var jc = "LSY1zV2DJSM-";
var Uc = "mYGhH-Z5fCw-";
var qc = "Fuz2JeT4RfI-";
var $c = "s5Uj2rl926U-";
var Qc = "FMRSvVtOAmQ-";
var Kc = "oVvbc-NOBF8-";
var Yc = "S4P-Tu6KIaQ-";
var Xc = "XAEHFx5bCT0-";
var Jc = "LhqQh5zRkIw-";
var Zc = "TjfbNdRyip4-";
var eu = "_0arfU0-7OcQ-";
var tu = "pMrnNJp5sDA-";
var ru = "p2qp0XfBE8M-";
var nn = "j7Wl8MzErkA-";
var It = "vdNOP82JYX8-";
var su = "xlAKnJ50oYQ-";
var iu = "DUS6KmDUKhc-";
var ms = "yrG419d95pU-";
var fs = "mOoPKvox-wE-";
var nu = "_7zQ9up20PmA-";
var on = "wzQIocnKXn4-";
var ou = "_-6uwAFLL9K0-";
var au = "DKmMkONAXgw-";
var lu = "_93IWcQLinlA-";
var cu = "_7GG-Yb2cOxg-";
var uu = "jHvUCZyctAM-";
var du = "Ypx0AcKkoSM-";
var pu = "nK8lTB5HZ5o-";
var mu = "_80azkrfBXSM-";
var hr = "yO-tcJ7evNI-";
var U = v(D(), 1);
function fu(e) {
  let { appid: t, item: r } = e,
    s = r?.name;
  return (
    !s &&
      r &&
      !r.visible &&
      (s = _.Localize("#wishlist_item_unavailable_title")),
    (0, U.jsx)(gu, { item: r, appid: t, className: qc, children: s || " " })
  );
}
function hu(e) {
  let { appid: t } = e,
    { data: r } = Me({ appid: t });
  return (0, U.jsx)(gu, {
    item: r,
    appid: t,
    className: Kc,
    children: (0, U.jsx)(Ob, { item: r, appid: t }),
  });
}
function Ob(e) {
  let { appid: t, item: r } = e,
    [s, i] = hs.useState(!1),
    n = hs.useCallback(() => i(!0), []);
  return (0, U.jsxs)("div", {
    className: Zc,
    onMouseEnter: n,
    children: [
      s && r?.visible && (0, U.jsx)(Tb, { appid: t, item: r }),
      (0, U.jsx)(Nb, { appid: t, item: r }),
    ],
  });
}
function Nb(e) {
  let { appid: t, item: r } = e,
    { data: s } = so({ appid: t });
  if (!s?.header && !s?.library_capsule_2x) return (0, U.jsx)("div", {});
  let i =
      s.header &&
      s?.asset_url_format?.replace(
        "${FILENAME}",
        s.header.replace(/header/, "header_292x136"),
      ),
    n = s.library_capsule_2x ?? s.library_capsule,
    o = n && s?.asset_url_format?.replace("${FILENAME}", n);
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)("img", {
        className: Yc,
        src: `${re.STORE_ITEM_BASE_URL}${i}`,
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      (0, U.jsx)("img", {
        className: Xc,
        src: o ? `${re.STORE_ITEM_BASE_URL}${o}` : Cr(xo),
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      !o && (0, U.jsx)("div", { className: Jc, children: r?.name }),
    ],
  });
}
function Tb(e) {
  let { item: t, appid: r } = e,
    { data: s } = io({ appid: r });
  return !s || !s.all_ages_screenshots || s.all_ages_screenshots.length < 4
    ? null
    : (0, U.jsxs)("div", {
        className: mu,
        children: [
          (0, U.jsx)("img", {
            className: hr,
            src: `${re.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[0].filename}`,
            alt: t.name,
          }),
          (0, U.jsx)("img", {
            className: hr,
            src: `${re.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[1].filename}`,
            alt: t.name,
          }),
          (0, U.jsx)("img", {
            className: hr,
            src: `${re.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[2].filename}`,
            alt: t.name,
          }),
          (0, U.jsx)("img", {
            className: hr,
            src: `${re.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[3].filename}`,
            alt: t.name,
          }),
        ],
      });
}
function gu(e) {
  let t,
    r = Bn();
  if (e.item) t = `${re.STORE_BASE_URL}${e.item.store_url_path}`;
  else if (e.appid) t = `${re.STORE_BASE_URL}app/${e.appid}/`;
  else
    return (0, U.jsx)("span", { className: e.className, children: e.children });
  return (0, U.jsx)(Nt, {
    ref: r,
    snr: !0,
    to: t,
    className: e.className,
    openInNewWindow: !0,
    children: e.children,
  });
}
var Cu = v(je());
var bu = "cWLPuFe-zxc-";
var _u = "z-ezG-Xu844-";
var yu = "Kech-xMfQ8o-";
var vu = "MbdBgOhlg7c-";
var Wu = v(D());
function Su(e) {
  let { reviewScore: t } = e,
    r = Mb(t),
    s = t.summary_filtered,
    i;
  return (
    s?.review_count &&
      (i = Fe.Localize(
        "#review_summary_reviewrate",
        s.percent_positive,
        s.review_count.toLocaleString(),
      )),
    (0, Wu.jsx)("span", {
      className: r,
      title: i,
      children: s?.review_score_label,
    })
  );
}
function Mb(e) {
  let t;
  if (e && e.summary_filtered)
    switch (e.summary_filtered.review_score) {
      case 9:
      case 8:
      case 7:
      case 6:
        t = vu;
        break;
      case 5:
        t = yu;
        break;
      case 4:
      case 3:
      case 2:
      case 1:
        t = _u;
        break;
    }
  return (0, Cu.default)(bu, t);
}
var q = v(D(), 1);
function Ru(e) {
  let { appid: t } = e;
  return (0, q.jsxs)("div", {
    className: iu,
    children: [(0, q.jsx)(Gb, { appid: t }), (0, q.jsx)(Lb, { appid: t })],
  });
}
function wu() {
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)("div", { className: ms }),
      (0, q.jsx)("div", { className: fs, children: " " }),
    ],
  });
}
function Gb(e) {
  let { appid: t } = e,
    { data: r } = no({ appid: t });
  return !r || !r.summary_filtered
    ? (0, q.jsx)(wu, {})
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)("div", {
            className: ms,
            children: _.Localize("#wishlist_item_overallreviews"),
          }),
          (0, q.jsx)("div", {
            className: fs,
            children: (0, q.jsx)(Su, { reviewScore: r }),
          }),
        ],
      });
}
function Lb(e) {
  let { appid: t } = e,
    { data: r } = oo({ appid: t }),
    s = Io(r);
  return !r || !s
    ? (0, q.jsx)(wu, {})
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)("div", {
            className: ms,
            children: _.Localize("#wishlist_item_releasedate"),
          }),
          (0, q.jsx)("div", { className: fs, children: s }),
        ],
      });
}
var $u = v(je(), 1);
var Iu = v(je()),
  lt = v(j());
var ct = v(D());
function gs(e) {
  let {
      direction: t,
      interactionMode: r = 0,
      ignoreHorizontal: s,
      ignoreVertical: i,
      dismissOnClick: n,
      menuTarget: o,
      className: a,
      children: l,
      ...c
    } = e,
    { isShowingMenu: p, triggerProps: u, menuProps: d, closeMenu: m } = zn(e),
    f = lt.useRef(null),
    g = lt.useRef(null);
  return (
    lt.useEffect(() => {
      p
        ? g.current?.TakeFocus()
        : g.current?.BFocusWithin() && f.current?.TakeFocus();
    }, [p]),
    (0, ct.jsxs)(ct.Fragment, {
      children: [
        lt.cloneElement(o, { ...u, navRef: f }),
        (0, ct.jsx)(Be, {
          ...c,
          ...d,
          className: (0, Iu.default)(d.className, a),
          navRef: g,
          onCancel: m,
          onFocusWithin: (h) => !h && m(),
          childFocusDisabled: !p,
          children: (0, ct.jsx)(Wr, { children: l }),
        }),
      ],
    })
  );
}
var cn = v(je(), 1),
  oe = v(j(), 1);
var ie = v(j(), 1);
var xu = "WrZdqiILDmU-";
var Pu = "idELaaXmvTo-";
var W = v(D(), 1);
function Du(e) {
  let { menuTarget: t, filters: r, setFilters: s } = e;
  return (0, W.jsx)(gs, {
    menuTarget: t,
    direction: "down",
    className: xu,
    ignoreHorizontal: !0,
    interactionMode: 1,
    children: (0, W.jsxs)(Dn, {
      "flow-children": "grid",
      children: [
        (0, W.jsx)(zb, {}),
        (0, W.jsx)(Hb, { strPlatform: r.strPlatform, setFilters: s }),
        (0, W.jsx)(Vb, { rgTypeFilters: r.rgTypeFilters, setFilters: s }),
        (0, W.jsx)(jb, { nMaxPriceStop: r.nMaxPriceStop, setFilters: s }),
        (0, W.jsx)(qb, { strMinDiscount: r.strMinDiscount, setFilters: s }),
        (0, W.jsx)($b, {
          bExcludeEarlyAccess: r.bExcludeEarlyAccess,
          bExcludePrerelease: r.bExcludePrerelease,
          bExcludeVR: r.bExcludeVR,
          setFilters: s,
        }),
        (0, W.jsx)(Qb, { rgDeckFilters: r.rgDeckFilters, setFilters: s }),
      ],
    }),
  });
}
function zb(e) {
  let t = Ie(),
    r = yc();
  return (0, W.jsxs)(Ue, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: _.Localize("#wishlist_controls_options_category_view"),
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "compact",
            checked: t,
            onChange: (s) => s.currentTarget.checked && r(!0),
          }),
          _.Localize("#wishlist_controls_options_view_compact"),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "expanded",
            checked: !t,
            onChange: (s) => s.currentTarget.checked && r(!1),
          }),
          _.Localize("#wishlist_controls_options_view_expanded"),
        ],
      }),
    ],
  });
}
function Hb(e) {
  let { strPlatform: t, setFilters: r } = e,
    s = ie.useCallback(
      (i) => {
        let n = Ns(i.currentTarget.value);
        r((o) => ({ ...o, strPlatform: n }));
      },
      [r],
    );
  return (0, W.jsxs)(Ue, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: _.Localize("#wishlist_controls_options_category_platform"),
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "all",
            checked: t == "all",
            onChange: s,
          }),
          _.Localize("#wishlist_controls_options_platform_all"),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "mac",
            checked: t == "mac",
            onChange: s,
          }),
          _.Localize("#wishlist_controls_options_platform_mac"),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "linux",
            checked: t == "linux",
            onChange: s,
          }),
          _.Localize("#wishlist_controls_options_platform_linux"),
        ],
      }),
    ],
  });
}
function an(e) {
  let { typeFilter: t, rgTypeFilters: r, setFilters: s, children: i } = e,
    n = ie.useCallback(
      (o) => {
        let a = o.currentTarget.checked;
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
  return (0, W.jsxs)(le, {
    children: [
      (0, W.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: n,
      }),
      i,
    ],
  });
}
function Vb(e) {
  let { rgTypeFilters: t, setFilters: r } = e;
  return (0, W.jsxs)(Ue, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: _.Localize("#wishlist_controls_options_category_type"),
      }),
      (0, W.jsx)(an, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "games",
        children: _.Localize("#wishlist_controls_options_type_game"),
      }),
      (0, W.jsx)(an, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "software",
        children: _.Localize("#wishlist_controls_options_type_application"),
      }),
      (0, W.jsx)(an, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "dlc",
        children: _.Localize("#wishlist_controls_options_type_dlc"),
      }),
    ],
  });
}
function jb(e) {
  let { nMaxPriceStop: t, setFilters: r } = e,
    [s, i] = ie.useState(void 0),
    { data: n } = cr(),
    o = ie.useId(),
    a = `priceFiltersDataList-${o}`,
    l = `priceFiltersRange-${o}`,
    c = ie.useCallback((m) => {
      i(parseInt(m.currentTarget.value));
    }, []),
    p = ie.useRef();
  if (
    ((p.current = () => {
      s !== void 0 &&
        (r((m) => {
          let f;
          return (
            s == 0 ? (f = "free") : s <= n.length ? (f = s - 1) : (f = "none"),
            { ...m, nMaxPriceStop: f }
          );
        }),
        i(void 0));
    }),
    ie.useEffect(() => {
      if (s === void 0) return;
      let m = window.setTimeout(() => p.current(), 500);
      return () => window.clearTimeout(m);
    }, [s]),
    ie.useEffect(() => () => p.current(), []),
    !n)
  )
    return null;
  let u;
  s !== void 0
    ? (u = s)
    : t === "free"
      ? (u = 0)
      : t === "none"
        ? (u = n.length + 1)
        : (u = t + 1);
  let d = ["free", ...n, "max"];
  return (0, W.jsxs)(Ue, {
    children: [
      (0, W.jsx)("h3", {
        children: _.Localize("#wishlist_controls_options_category_price"),
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
          (0, W.jsx)(Ub, { value: f, priceStop: m }, f),
        ),
      }),
      (0, W.jsx)("label", { htmlFor: l, className: Pu, children: gr(d[u]) }),
    ],
  });
}
function Ub(e) {
  let { value: t, priceStop: r } = e;
  return (0, W.jsx)("option", { value: t, label: gr(r) });
}
function gr(e) {
  return e === "free"
    ? _.Localize("#wishlist_controls_options_price_free")
    : e === "max"
      ? _.Localize("#wishlist_controls_options_price_any")
      : _.Localize(
          "#wishlist_controls_options_price_max_price",
          e.formatted_amount,
        );
}
function qb(e) {
  let { strMinDiscount: t, setFilters: r } = e,
    s = ie.useCallback(
      (i) => {
        let n = Ts(i.currentTarget.value);
        r((o) => ({ ...o, strMinDiscount: n }));
      },
      [r],
    );
  return (0, W.jsxs)(Ue, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: _.Localize("#wishlist_controls_options_category_discount"),
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "",
            checked: t == "",
            onChange: s,
          }),
          _.Localize("#wishlist_controls_options_discount_all"),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "any",
            checked: t == "any",
            onChange: s,
          }),
          _.Localize("#wishlist_controls_options_discount_any"),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "50",
            checked: t == "50",
            onChange: s,
          }),
          _.Localize("#wishlist_controls_options_discount_or_more", 50),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "75",
            checked: t == "75",
            onChange: s,
          }),
          _.Localize("#wishlist_controls_options_discount_or_more", 75),
        ],
      }),
    ],
  });
}
function $b(e) {
  let {
      bExcludeEarlyAccess: t,
      bExcludePrerelease: r,
      bExcludeVR: s,
      setFilters: i,
    } = e,
    n = ie.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludeEarlyAccess: c }));
      },
      [i],
    ),
    o = ie.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludePrerelease: c }));
      },
      [i],
    ),
    a = ie.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludeVR: c }));
      },
      [i],
    );
  return (0, W.jsxs)(Ue, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: _.Localize("#wishlist_controls_options_category_exclude"),
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "checkbox",
            name: "exclude_earlyaccess",
            checked: t,
            onChange: n,
          }),
          _.Localize("#genre_early_access"),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "checkbox",
            name: "exclude_prerelease",
            checked: r,
            onChange: o,
          }),
          _.Localize("#category_prerelease"),
        ],
      }),
      (0, W.jsxs)(le, {
        children: [
          (0, W.jsx)("input", {
            type: "checkbox",
            name: "exclude_vr",
            checked: s,
            onChange: a,
          }),
          _.Localize("#wishlist_controls_options_exclude_vr"),
        ],
      }),
    ],
  });
}
function Eu(e) {
  let { deckFilter: t, rgDeckFilters: r, setFilters: s, children: i } = e,
    n = ie.useCallback(
      (o) => {
        let a = o.currentTarget.checked;
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
  return (0, W.jsxs)(le, {
    children: [
      (0, W.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: n,
      }),
      i,
    ],
  });
}
function Qb(e) {
  let { rgDeckFilters: t, setFilters: r } = e;
  return (0, W.jsxs)(Ue, {
    navEntryPreferPosition: 3,
    children: [
      (0, W.jsx)("h3", {
        children: _.Localize("#wishlist_controls_options_category_deck"),
      }),
      (0, W.jsx)(Eu, {
        deckFilter: "verified",
        rgDeckFilters: t,
        setFilters: r,
        children: _.Localize("#wishlist_controls_options_deck_verified"),
      }),
      (0, W.jsx)(Eu, {
        deckFilter: "playable",
        rgDeckFilters: t,
        setFilters: r,
        children: _.Localize("#wishlist_controls_options_deck_playable"),
      }),
    ],
  });
}
var Bu = "TU227nj1DiE-";
var Fu = "JqFaNxdHYhs-";
var Ou = "ADJFyRYJvZU-";
var ln = "_1PVYT-GpKSQ-";
var Nu = "qysDgzabHUo-";
var Tu = "QKns7sLqOwg-";
var Au = "-tV92khCNDs-";
var Mu = "ScuzYU4NgQA-";
var Gu = "Wh-OfiQaHSM-";
var L = v(D(), 1);
function Lu(e) {
  return oe.useState(e);
}
function ku(e) {
  return oe.useState(e);
}
var zu = oe.createContext(void 0);
function Hu(e) {
  let { filters: t, setFilters: r, children: s } = e,
    i = oe.useMemo(() => ({ filters: t, setFilters: r }), [t, r]);
  return (0, L.jsx)(zu.Provider, { value: i, children: s });
}
function bs() {
  let { filters: e, setFilters: t } = oe.useContext(zu);
  return [e, t];
}
function Vu(e, t, r, s) {
  let i = Ve(),
    n = xe(),
    o = to(),
    { data: a } = cr(),
    l = Ie(),
    c = oe.useMemo(() => Eo(r, a), [r, a]),
    { data: p } = Cc(e, Xs[t], c),
    { data: u } = os(He().strLanguage),
    { data: d, isLoading: m } = ye({
      ...t_(e, t, c, i, n, l, o),
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
      let h = un(s),
        y = e_(s, u);
      return {
        ...f,
        items: f.items.filter((x) => {
          let I = d.apps[x.appid];
          return I
            ? !!(
                I.name.indexOf(h) !== -1 ||
                (y.size > 0 && I.tagids.some((P) => y.has(P)))
              )
            : !1;
        }),
      };
    }, [s, f, u, d]);
  return s ? { wishlist: g, bLoading: m } : { wishlist: f, bLoading: !1 };
}
function Yb(e) {
  let t = (0, L.jsx)(mt, {
    className: ln,
    children: _.Localize("#wishlist_options_button"),
  });
  return (0, L.jsx)(Du, {
    menuTarget: t,
    filters: e.filters,
    setFilters: e.setFilters,
  });
}
function Xb(e) {
  let { option: t, setSelectedSort: r } = e,
    s = oe.useCallback(() => r(t), [r, t]);
  return (0, L.jsx)(mt, {
    focusClassName: (0, cn.default)("test", Mu),
    noFocusRing: !0,
    onClick: s,
    children: (0, L.jsx)(ju, { option: t }),
  });
}
function ju(e) {
  let { option: t } = e,
    r = ot(),
    s = `#wishlist_controls_sortby_${t}`;
  return (
    t === "order" && !r && (s = "#wishlist_controls_sortby_their_order"),
    _.Localize(s)
  );
}
function Jb(e) {
  let t = (0, L.jsx)(mt, {
    className: (0, cn.default)(ln, Nu),
    children: _.LocalizeReact(
      "#wishlist_sortby_button",
      (0, L.jsx)("span", {
        className: Tu,
        children: (0, L.jsx)(ju, { option: e.selectedSort }),
      }),
    ),
  });
  return (0, L.jsx)(gs, {
    menuTarget: t,
    direction: "down",
    className: Au,
    interactionMode: 1,
    dismissOnClick: !0,
    children: Pr.map((r) =>
      (0, L.jsx)(Xb, { option: r, setSelectedSort: e.setSelectedSort }, r),
    ),
  });
}
function Uu(e) {
  let {
    filters: t,
    setFilters: r,
    sort: s,
    setSort: i,
    strTextFilter: n,
    setTextFilter: o,
  } = e;
  return (0, L.jsxs)(Be, {
    "flow-children": "row",
    className: Bu,
    children: [
      (0, L.jsx)(Zb, { strTextFilter: n, setTextFilter: o }),
      (0, L.jsxs)("div", {
        className: Ou,
        children: [
          (0, L.jsx)(Yb, { filters: t, setFilters: r }),
          (0, L.jsx)(Jb, { selectedSort: s, setSelectedSort: i }),
        ],
      }),
    ],
  });
}
function ae(e, t) {
  return _.Localize("#wishlist_controls_filter_tag_label", e, t);
}
function Oe(e, t, r, s) {
  switch (e) {
    case "strMinDiscount": {
      let i = t,
        n = _.Localize("#wishlist_controls_options_category_discount");
      return i === ""
        ? ae(n, _.Localize("#wishlist_controls_options_discount_all"))
        : i == "50" || i === "75"
          ? ae(n, _.Localize("#wishlist_controls_options_discount_or_more", i))
          : ae(n, _.Localize(`#wishlist_controls_options_discount_${i}`));
    }
    case "strPlatform": {
      let i = t,
        n = _.Localize("#wishlist_controls_options_category_platform");
      return ae(n, _.Localize(`#wishlist_controls_options_platform_${i}`));
    }
    case "bExcludeEarlyAccess": {
      let i = _.Localize("#wishlist_controls_options_category_exclude");
      return ae(i, _.Localize("#genre_early_access"));
    }
    case "bExcludePrerelease": {
      let i = _.Localize("#wishlist_controls_options_category_exclude");
      return ae(i, _.Localize("#category_prerelease"));
    }
    case "bExcludeVR": {
      let i = _.Localize("#wishlist_controls_options_category_exclude");
      return ae(i, _.Localize("#wishlist_controls_options_exclude_vr"));
    }
    case "nMaxPriceStop": {
      let i = t,
        n = _.Localize("#wishlist_controls_options_category_price");
      return i === "none"
        ? ae(n, _.Localize("#wishlist_controls_options_price_any"))
        : i === "free"
          ? ae(n, gr("free"))
          : r?.[i].formatted_amount
            ? ae(n, gr(r[i]))
            : ae(n, "");
    }
    case "rgTypeFilters": {
      let i = t,
        n = _.Localize("#wishlist_controls_options_category_type");
      return i === "games"
        ? ae(n, _.Localize("#wishlist_controls_options_type_game"))
        : i === "software"
          ? ae(n, _.Localize("#wishlist_controls_options_type_application"))
          : ae(n, _.Localize(`#wishlist_controls_options_type_${i}`));
    }
    case "rgDeckFilters": {
      let i = t,
        n = _.Localize("#wishlist_controls_options_category_deck");
      return ae(n, _.Localize(`#wishlist_controls_options_deck_${i}`));
    }
    case "rgTagFilters": {
      let i = t,
        n = _.Localize("#wishlist_controls_options_category_tag"),
        o = s && s[i];
      return ae(n, o || `${i}`);
    }
    case "rgWishlistNotificationGames":
      return _.Localize("#wishlist_filters_notification");
  }
}
function qu(e) {
  let { filters: t, setFilters: r } = e,
    { data: s } = cr(),
    { data: i } = os(He().strLanguage);
  return (0, L.jsxs)("span", {
    children: [
      t.strPlatform !== "all" &&
        (0, L.jsx)(Ne, {
          onClick: () => r({ ...t, strPlatform: "all" }),
          children: Oe("strPlatform", t.strPlatform),
        }),
      t.rgTypeFilters.map((n) =>
        (0, L.jsx)(
          Ne,
          {
            onClick: () =>
              r({
                ...t,
                rgTypeFilters: t.rgTypeFilters.filter((o) => o !== n),
              }),
            children: Oe("rgTypeFilters", n),
          },
          n,
        ),
      ),
      t.nMaxPriceStop !== "none" &&
        (0, L.jsx)(Ne, {
          onClick: () => r({ ...t, nMaxPriceStop: "none" }),
          children: Oe("nMaxPriceStop", t.nMaxPriceStop, s),
        }),
      t.strMinDiscount !== "" &&
        (0, L.jsx)(Ne, {
          onClick: () => r({ ...t, strMinDiscount: "" }),
          children: Oe("strMinDiscount", t.strMinDiscount),
        }),
      t.bExcludeEarlyAccess &&
        (0, L.jsx)(Ne, {
          onClick: () => r({ ...t, bExcludeEarlyAccess: !1 }),
          children: Oe("bExcludeEarlyAccess", t.bExcludeEarlyAccess),
        }),
      t.bExcludeVR &&
        (0, L.jsx)(Ne, {
          onClick: () => r({ ...t, bExcludeVR: !1 }),
          children: Oe("bExcludeVR", t.bExcludeVR),
        }),
      t.bExcludePrerelease &&
        (0, L.jsx)(Ne, {
          onClick: () => r({ ...t, bExcludePrerelease: !1 }),
          children: Oe("bExcludePrerelease", t.bExcludePrerelease),
        }),
      t.rgDeckFilters.map((n) =>
        (0, L.jsx)(
          Ne,
          {
            onClick: () =>
              r({
                ...t,
                rgDeckFilters: t.rgDeckFilters.filter((o) => o !== n),
              }),
            children: Oe("rgDeckFilters", n),
          },
          n,
        ),
      ),
      t.rgTagFilters.map((n) =>
        (0, L.jsx)(
          Ne,
          {
            onClick: () =>
              r({ ...t, rgTagFilters: t.rgTagFilters.filter((o) => o !== n) }),
            children: Oe("rgTagFilters", n, void 0, i),
          },
          n,
        ),
      ),
      !!t.rgWishlistNotificationGames?.length &&
        (0, L.jsx)(Ne, {
          onClick: () => r({ ...t, rgWishlistNotificationGames: void 0 }),
          children: Oe(
            "rgWishlistNotificationGames",
            t.rgWishlistNotificationGames,
          ),
        }),
    ],
  });
}
function Ne(e) {
  return (0, L.jsx)("button", {
    onClick: e.onClick,
    className: Gu,
    children: e.children,
  });
}
var Zb = oe.memo(function (t) {
  let { strTextFilter: r, setTextFilter: s } = t,
    i = oe.useCallback(
      (n) => {
        s(n.currentTarget.value);
      },
      [s],
    );
  return (0, L.jsx)(En, {
    className: Fu,
    value: r,
    onChange: i,
    placeholder: _.Localize("#wishlist_search"),
  });
});
function un(e) {
  return e.toLocaleLowerCase();
}
function e_(e, t) {
  let r = new Set();
  for (let s in t) un(t[s]).indexOf(e) !== -1 && r.add(parseInt(s));
  return r;
}
function t_(e, t, r, s, i, n, o) {
  let a = Xs[t],
    { dataLoader: l, storeBrowseContext: c, cacheStoreItemData: p } = o;
  return {
    queryKey: ["WishlistAppData", e, a, r],
    queryFn: async () => {
      let u = await s.fetchQuery(sn(i, c, e, tn(n, p), a, r)),
        d = {};
      return (
        await Promise.all(
          u.items.map(({ appid: m }) =>
            Promise.all([
              s.fetchQuery(co(l, { appid: m })),
              s.fetchQuery(lo(l, { appid: m })),
            ]).then(([f, g]) => {
              d[m] = {
                name: un(f.name || ""),
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
var Ke = v(D(), 1);
function Qu(e) {
  let { wishlistItem: t } = e,
    { data: r } = Me(t);
  return (0, Ke.jsxs)("div", {
    className: (0, $u.default)(It, ou),
    children: [
      r?.is_early_access && (0, Ke.jsx)(r_, {}),
      (0, Ke.jsx)(s_, { wishlistItem: t }),
      (0, Ke.jsx)(Wo, { id: t }),
    ],
  });
}
function r_() {
  return (0, Ke.jsx)("span", {
    className: au,
    children: _.Localize("#genre_early_access"),
  });
}
function s_(e) {
  let { wishlistItem: t } = e,
    [r] = bs();
  return !On() && !r.rgDeckFilters.length ? null : (0, Ke.jsx)(Ro, { id: t });
}
var Ku = v(je(), 1),
  Yu = v(j(), 1);
var _s = v(D(), 1);
function Xu(e) {
  let { appid: t } = e,
    { data: r } = ao({ appid: t });
  return (0, _s.jsx)("div", {
    className: cu,
    children: r?.slice(0, 5).map((s) => (0, _s.jsx)(i_, { tag: s }, s.tagid)),
  });
}
function i_(e) {
  let { tag: t } = e,
    [r, s] = bs(),
    i = t.tagid,
    n = r.rgTagFilters.includes(i),
    o = Yu.useCallback(
      () =>
        s((l) => {
          let { rgTagFilters: c } = l,
            p = n ? c.filter((u) => u != i) : c.concat(i);
          return { ...l, rgTagFilters: p };
        }),
      [s, n, i],
    ),
    a = tc(i, He().strLanguage);
  return (0, _s.jsx)("button", {
    className: (0, Ku.default)(uu, n && du),
    onClick: o,
    title: _.Localize("#wishlist_controls_tag_description"),
    children: a,
  });
}
var O = v(D(), 1),
  dn = ut.memo(function (t) {
    let {
        wishlistItem: r,
        draggableProvided: s,
        isDragging: i,
        dragHandle: n,
        ...o
      } = t,
      { data: a } = Me({ appid: r.appid }),
      l = pr(),
      c = Ie(),
      { mutate: p, isPending: u } = Go(l, r.appid);
    return (0, O.jsxs)(n_, {
      appid: r.appid,
      item: a,
      draggableProvided: s,
      isDragging: i,
      isRemoving: u,
      ...o,
      children: [
        n,
        (0, O.jsx)(hu, { appid: r.appid }),
        (0, O.jsxs)("div", {
          className: eu,
          children: [
            (0, O.jsxs)("div", {
              className: tu,
              children: [
                (0, O.jsx)(fu, { appid: r.appid, item: a }),
                c && (0, O.jsx)(Ju, { wishlistItem: r, removeItem: p }),
              ],
            }),
            (0, O.jsx)(a_, { appid: r.appid, item: a }),
            !c && (0, O.jsx)(l_, { wishlistItem: r, removeItem: p }),
          ],
        }),
      ],
    });
  });
function n_(e) {
  let {
      appid: t,
      item: r,
      draggableProvided: s,
      isDragging: i,
      isRemoving: n,
      children: o,
      ...a
    } = e,
    l = Ie(),
    c = (0, br.default)(jc, r && !r.visible && Uc, i && $c, n && Qc, l && ps),
    p = o_(t, i, a),
    u = s?.draggableProps.style,
    d =
      i && a.bIsGamepadDragClone && u
        ? { ...u, transform: (u.transform ?? "") + " scale( 1.04 )" }
        : u;
  return (0, O.jsx)(Sn, {
    feature: "wishlist-capsule",
    children: (0, O.jsx)(Gc, {
      appID: t,
      children: (0, O.jsx)(fo, {
        className: c,
        ref: s?.innerRef,
        ...s?.draggableProps,
        focusable: !0,
        ...p,
        style: d,
        children: o,
      }),
    }),
  });
}
function o_(e, t, r) {
  let { draggableId: s, gamepadStartDrag: i, navRefDraggable: n } = r,
    o = ut.useCallback((l) => i(s, e, l), [i, e, s]),
    a = ut.useCallback((l) => n(e, l), [n, e]);
  return t || !s || !i || !n
    ? {}
    : {
        onSecondaryButton: o,
        navRef: a,
        onSecondaryActionDescription: _.Localize(
          "#wishlist_gamepaddragdrop_reorderaction",
        ),
      };
}
function a_(e) {
  let { appid: t, item: r } = e;
  if (r && !r.visible) {
    let s = _.Localize("#wishlist_item_unavailable_retired");
    return (
      r.unvailable_for_country_restriction &&
        (s = _.Localize("#wishlist_item_unavailable_region")),
      (0, O.jsx)("div", {
        className: (0, br.default)(It, nn),
        children: (0, O.jsx)("div", { className: su, children: s }),
      })
    );
  } else
    return (0, O.jsxs)("div", {
      className: (0, br.default)(It, nn),
      children: [
        (0, O.jsx)(Ru, { appid: t }),
        (0, O.jsx)("div", {
          className: nu,
          children: (0, O.jsx)(c_, { appid: t }),
        }),
      ],
    });
}
function l_(e) {
  let { wishlistItem: t, removeItem: r } = e;
  return (0, O.jsxs)(O.Fragment, {
    children: [
      (0, O.jsx)(Qu, { wishlistItem: t }),
      (0, O.jsxs)("div", {
        className: (0, br.default)(It, lu),
        children: [
          (0, O.jsx)(Xu, { appid: t.appid }),
          (0, O.jsx)(Ju, { wishlistItem: t, removeItem: r }),
        ],
      }),
    ],
  });
}
function c_(e) {
  let { appid: t } = e,
    { data: r } = Me({ appid: t }),
    { data: s } = ro({ appid: t });
  return s
    ? (0, O.jsxs)("div", {
        className: on,
        children: [
          (0, O.jsx)(wo, { purchaseOption: s, transparentBackground: !0 }),
          (0, O.jsx)(Ac, { purchaseOption: s }),
        ],
      })
    : r?.is_free && !r.is_coming_soon
      ? (0, O.jsx)("div", {
          className: on,
          children: (0, O.jsx)(ds, { itemid: { appid: t } }),
        })
      : null;
}
function Ju(e) {
  let { wishlistItem: t, removeItem: r } = e,
    s = ot(),
    i = ut.useMemo(
      () => new Date(t.date_added * 1e3).toLocaleDateString(vn()),
      [t.date_added],
    );
  return (0, O.jsxs)("div", {
    className: ru,
    children: [
      _.Localize("#wishlist_item_addedon_date", i),
      s &&
        (0, O.jsxs)(O.Fragment, {
          children: [
            " ( ",
            (0, O.jsx)(mt, {
              className: pu,
              onClick: r,
              children: _.Localize("#wishlist_item_remove"),
            }),
            " )",
          ],
        }),
    ],
  });
}
var Zu = "oI5QPBYWG8c-";
var ed = "iiFX76jX8MI-";
var td = "tcByxp5r-As-";
var rd = "OVtmn7mzw0o-";
var sd = "jfAmlCmNzHQ-";
var id = "_0tyA9oW-HwA-";
var ys = "cy7Yf-ZR9xQ-";
var ue = v(D(), 1),
  u_ = parseInt(Lc),
  d_ = parseInt(kc),
  p_ = parseInt(zc),
  m_ = parseInt(Hc);
function od(e) {
  let { wishlist: t, loading: r, bEnableDragDrop: s } = e,
    i = H.useCallback(
      (n) => (0, ue.jsx)(dn, { wishlistItem: t.items[n] }),
      [t],
    );
  return s
    ? (0, ue.jsx)(f_, { loading: r, wishlist: t })
    : (0, ue.jsx)(ad, { loading: r, nRows: t.items.length || 0, fnRender: i });
}
var ad = H.forwardRef(function (t, r) {
  let { loading: s, nRows: i, fnRender: n, ...o } = t,
    a = Ie(),
    l = a ? p_ + m_ : u_ + d_,
    c = a ? 30 : 10,
    p = H.useRef(),
    u = H.useCallback((d) => {
      p.current && clearTimeout(p.current),
        (p.current = setTimeout(() => {
          history.replaceState({ ...(history.state ?? {}), scrollY: d }, "");
        }, 100));
    }, []);
  return (0, ue.jsx)(hc, {
    className: (0, pn.default)(ed, s && td),
    nRows: i,
    nItemHeight: l,
    nRowGap: 0,
    overscan: c,
    renderItem: n,
    ref: r,
    forceVirtualizeType: "element",
    onOffsetChange: u,
    initialOffset: window?.history?.state?.scrollY,
    ...o,
  });
});
function f_(e) {
  let { loading: t } = e,
    [r, s] = h_(!t, e.wishlist),
    i = Ie(),
    {
      useGamepadSensor: n,
      gamepadStartDrag: o,
      onButtonDown: a,
      refCloneContainer: l,
      navRefDraggable: c,
      fnEndGamepadDrag: p,
      bInGamepadDrag: u,
    } = b_(),
    d = H.useCallback(
      (h) => {
        p(), h.destination && r(h.source.index, h.destination.index);
      },
      [p, r],
    ),
    m = H.useCallback(
      (h, y, C, x = !1) => {
        let I = (0, ue.jsx)(Pc, {
            dragHandleProps: h.dragHandleProps,
            index: C.source.index,
            updateWishlistPriority: r,
          }),
          P = {
            draggableId: C.draggableId,
            gamepadStartDrag: o,
            navRefDraggable: c,
            bIsGamepadDragClone: x,
          };
        return (0, ue.jsx)(dn, {
          wishlistItem: s.items[C.source.index],
          draggableProvided: h,
          isDragging: y.isDragging,
          dragHandle: I,
          ...P,
        });
      },
      [s, r, o, c],
    ),
    f = H.useCallback(
      (h) => {
        let y = s.items[h];
        return (0, ue.jsx)("div", {
          className: (0, pn.default)(Vc, i && ps),
          children: (0, ue.jsx)(Kl, {
            draggableId: `WishlistItem-${y.appid}-${h}`,
            index: h,
            children: m,
          }),
        });
      },
      [s, i, m],
    ),
    g = H.useCallback(
      (h, y, C) =>
        (0, ue.jsx)(g_, {
          onButtonDown: a,
          navRef: l,
          children: m(h, y, C, !0),
        }),
      [m, a, l],
    );
  return (0, ue.jsx)(Vl, {
    onDragEnd: d,
    sensors: [n],
    children: (0, ue.jsx)(ec, {
      droppableId: "droppable",
      renderClone: u ? g : m,
      mode: "virtual",
      children: (h, y) =>
        (0, ue.jsx)(ad, {
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
function h_(e, t) {
  let r = Ve(),
    [s, i] = H.useState(void 0),
    n = H.useMemo(() => (s ? { ...t, items: s } : t), [t, s]),
    { mutate: o } = dt({
      async mutationFn([l, c]) {
        let p = c.map((d) => ({ appid: l[d].appid, priority: l[d].priority })),
          u = await ho(p);
        if (u?.result != 1) throw `Error updating wishlist data: ${u?.result}`;
        return !0;
      },
      onMutate([l]) {
        Sc(r, t.steamid, l);
      },
      onError() {
        Wc(r, t.steamid);
      },
    });
  return [
    H.useCallback(
      (l, c) => {
        if (!e) {
          console.error("Cannot modify wishlist in this mode");
          return;
        }
        if (l == c) return;
        let { rgNewItems: p, rgChangedIndicies: u } = go(n.items, l, c);
        i(p), o([p, u], { onSettled: () => i(void 0) });
      },
      [e, n, o],
    ),
    n,
  ];
}
function g_(e) {
  let { onButtonDown: t, navRef: r, children: s } = e;
  return (0, ue.jsx)(Wr, {
    children: (0, ue.jsx)(Be, {
      autoFocus: !0,
      onButtonDown: t,
      navRef: r,
      onOKActionDescription: _.Localize(
        "#wishlist_gamepaddragdrop_commitreorder",
      ),
      onCancelActionDescription: _.Localize(
        "#wishlist_gamepaddragdrop_cancelreorder",
      ),
      children: s,
    }),
  });
}
function b_() {
  let [e, t] = H.useState(void 0),
    [r] = H.useState(() => new Map()),
    s = H.useRef(null),
    i = H.useRef(void 0),
    n = H.useCallback((d) => (i.current = d), []),
    o = H.useRef(void 0),
    a = H.useCallback(() => {
      let d = o.current;
      d !== void 0 &&
        (setTimeout(() => r.get(d)?.TakeFocus(), 1), (o.current = void 0)),
        t(void 0);
    }, [r]),
    l = H.useCallback(
      (d, m) => {
        m ? r.set(d, m) : r.delete(d);
      },
      [r],
    ),
    c = H.useCallback((d, m, f) => {
      let g = i.current;
      if (g) {
        let h = g.tryGetLock(d);
        if (h) return (o.current = m), t(h.snapLift()), !0;
      }
      return !1;
    }, []),
    p = H.useCallback(
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
    useGamepadSensor: n,
    gamepadStartDrag: c,
    onButtonDown: p,
    refCloneContainer: s,
    navRefDraggable: l,
    fnEndGamepadDrag: a,
    bInGamepadDrag: !!e,
  };
}
var fn = v(je(), 1);
var mn = "bFz2fxg5qDY-";
var ld = "v0rte85hBgA-";
var cd = "mMC3clyeve4-";
var ud = "oRgdZRX3fBo-";
var dd = "wA5EFNQ7hrU-";
var Te = v(D(), 1);
function y_(e) {
  return (0, Te.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, Te.jsx)("path", {
      d: "M33.63 8.05005L30.11 20.81C29.9416 21.453 29.5645 22.0219 29.0378 22.4273C28.5111 22.8328 27.8647 23.0518 27.2 23.05H14.75C14.1022 23.0507 13.4715 22.8416 12.9524 22.4541C12.4333 22.0665 12.0536 21.5213 11.87 20.9L7.56 8.05005H2V4.05005H8.28C8.90845 4.05122 9.52067 4.24973 10.0302 4.61755C10.5398 4.98538 10.921 5.50394 11.12 6.10005L11.78 8.10005L33.63 8.05005ZM15 27.05C14.5055 27.05 14.0222 27.1967 13.6111 27.4714C13.2 27.7461 12.8795 28.1365 12.6903 28.5933C12.5011 29.0502 12.4516 29.5528 12.548 30.0378C12.6445 30.5227 12.8826 30.9682 13.2322 31.3178C13.5819 31.6674 14.0273 31.9056 14.5123 32.002C14.9972 32.0985 15.4999 32.049 15.9567 31.8597C16.4135 31.6705 16.804 31.3501 17.0787 30.939C17.3534 30.5278 17.5 30.0445 17.5 29.55C17.5 28.887 17.2366 28.2511 16.7678 27.7823C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1967 25.6111 27.4714C25.2 27.7461 24.8795 28.1365 24.6903 28.5933C24.5011 29.0502 24.4516 29.5528 24.548 30.0378C24.6445 30.5227 24.8826 30.9682 25.2322 31.3178C25.5819 31.6674 26.0273 31.9056 26.5123 32.002C26.9972 32.0985 27.4999 32.049 27.9567 31.8597C28.4135 31.6705 28.804 31.3501 29.0787 30.939C29.3534 30.5278 29.5 30.0445 29.5 29.55C29.5 28.887 29.2366 28.2511 28.7678 27.7823C28.2989 27.3134 27.663 27.05 27 27.05Z",
      fill: "currentColor",
    }),
  });
}
function v_() {
  let { data: e } = Yn();
  return e
    ? (0, Te.jsxs)(Nt, {
        snr: !0,
        external: !0,
        to: re.STORE_BASE_URL + "cart",
        className: (0, fn.default)(mn, ld),
        children: [
          (0, Te.jsx)(y_, { className: ud }),
          _.Localize("#cart_count", Is(e)),
        ],
      })
    : null;
}
function C_() {
  let { data: e } = Gt(Ot.steamid);
  return e
    ? (0, Te.jsx)(Nt, {
        snr: !0,
        external: !0,
        to: re.STORE_BASE_URL + "wishlist",
        className: (0, fn.default)(mn, cd),
        children: _.Localize("#wishlist_count", Is(e)),
      })
    : null;
}
function pd() {
  return Ot.logged_in
    ? (0, Te.jsxs)("div", {
        className: dd,
        children: [(0, Te.jsx)(C_, {}), (0, Te.jsx)(v_, {})],
      })
    : null;
}
var N = v(D(), 1),
  S_ = Fn({ Component: W_ });
function W_() {
  let { error: e, steamid: t, sort: r, filters: s } = S_.useLoaderData();
  return (0, N.jsx)(R_, { error: e, steamid: t, sort: r, filters: s });
}
function R_(e) {
  let { error: t, steamid: r, sort: s, filters: i } = e;
  return (0, N.jsx)(_c, {
    steamid: r ?? "0",
    children: (0, N.jsxs)("div", {
      className: Zu,
      children: [
        (0, N.jsx)(pd, {}),
        (0, N.jsx)(I_, { steamid: r }),
        t || !r
          ? (0, N.jsx)(ko, { error: t || "ProfileNotFound" })
          : (0, N.jsx)(Rn, {
              children: (0, N.jsx)(w_, { steamid: r, sort: s, filters: i }),
            }),
      ],
    }),
  });
}
function w_(e) {
  let { steamid: t } = e,
    [r, s] = Lu(e.filters),
    [i, n] = ku(e.sort),
    [o, a] = (0, Ye.useState)(""),
    { data: l } = Gt(t);
  return (
    B_(n, s, a),
    F_(t, i, r),
    l === 0
      ? (0, N.jsx)(E_, {})
      : (0, N.jsxs)(Hu, {
          filters: r,
          setFilters: s,
          children: [
            (0, N.jsx)(Uu, {
              filters: r,
              setFilters: s,
              sort: i,
              setSort: n,
              strTextFilter: o,
              setTextFilter: a,
            }),
            (0, N.jsx)("hr", { className: id }),
            (0, N.jsx)(qu, { filters: r, setFilters: s }),
            (0, N.jsx)(P_, { sort: i, filters: r, strTextFilter: o }),
          ],
        })
  );
}
function I_(e) {
  let { steamid: t } = e,
    r = Fs(t);
  return r.data
    ? (0, N.jsxs)("div", {
        className: sd,
        children: [
          (0, N.jsx)(kn, {
            playerLinkDetails: r.data,
            statusPosition: "border",
            alt: "",
            role: "presentation",
            size: "FillArea",
            className: rd,
          }),
          (0, N.jsx)("h2", {
            children: _.Localize(
              "#wishlist_header",
              r.data.public_data?.persona_name?.toLocaleUpperCase(
                He().strISOCode,
              ) ?? "",
            ),
          }),
        ],
      })
    : null;
}
function x_(e, t, r) {
  let s = ot(),
    i = Po(t) && !r;
  return s && i && e == "order";
}
function P_(e) {
  let { sort: t, filters: r, strTextFilter: s } = e,
    i = pr(),
    { wishlist: n, bLoading: o } = Vu(i, t, r, s),
    a = (0, Ye.useRef)(n),
    l = x_(t, r, s),
    c = n || a.current;
  if (!c) return null;
  a.current = c;
  let p = !n || o;
  return c.items.length == 0
    ? (0, N.jsx)(D_, {})
    : (0, N.jsx)(od, { wishlist: c, loading: p, bEnableDragDrop: l && !p });
}
function E_() {
  return ot()
    ? (0, N.jsx)("div", {
        className: ys,
        children: (0, N.jsxs)("div", {
          children: [
            (0, N.jsx)("h3", {
              children: _.Localize("#wishlist_your_wishlist_empty"),
            }),
            (0, N.jsx)("p", {
              children: _.Localize("#wishlist_browse_the_store"),
            }),
            (0, N.jsx)("p", {
              children: (0, N.jsx)("a", {
                href: `${re.HELP_BASE_URL}${He().strISOCode}/faqs/view/0CAD-3B4D-B874-A065`,
                children: _.Localize("#wishlist_learn_more_button"),
              }),
            }),
          ],
        }),
      })
    : (0, N.jsx)("div", {
        className: ys,
        children: (0, N.jsxs)("div", {
          children: [
            (0, N.jsx)("h3", {
              children: _.Localize("#wishlist_others_wishlist_empty"),
            }),
            (0, N.jsx)("p", {}),
          ],
        }),
      });
}
function D_() {
  let e = pr(),
    { data: t } = Gt(e);
  return (0, N.jsx)("div", {
    className: ys,
    children: (0, N.jsxs)("div", {
      children: [
        (0, N.jsx)("h3", {
          children: _.Localize("#wishlist_no_items_matching_filters"),
        }),
        !!t &&
          (0, N.jsx)("p", {
            children: _.Localize(
              "#wishlist_x_items_on_wishlist_but_none_match",
              t.toLocaleString(),
            ),
          }),
      ],
    }),
  });
}
function B_(e, t, r) {
  (0, Ye.useEffect)(() => {
    if (location.hash) {
      let s = new URLSearchParams(location.hash.slice(1));
      if (s.has("sort")) {
        let o = s.get("sort");
        Fo(o) && e(Ys[o]);
      }
      if (s.has("term")) {
        let o = s.get("term");
        r(o);
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
      let n = [];
      if (
        (s.get("deck_verified") === "1" && n.push("verified"),
        s.get("deck_playable") === "1" && n.push("playable"),
        n.length > 0 && (i.deck_filters = n.join(",")),
        Object.keys(i).length > 0)
      ) {
        let o = Do(i, void 0);
        t(o);
      }
    }
  }, [e, t, r]);
}
function F_(e, t, r) {
  let { data: s } = Fs(e),
    i = (0, Ye.useRef)(void 0),
    n;
  s?.public_data?.profile_url
    ? (n = Os(`/wishlist/id/${s.public_data.profile_url}/`))
    : s?.public_data?.steamid &&
      (n = Os(`/wishlist/profiles/${s.public_data.steamid}/`)),
    (0, Ye.useEffect)(() => {
      if (!n) return;
      let { protocol: o, hostname: a, search: l } = window.location,
        c = new URL(`${o}//${a}${n}`),
        p = new URLSearchParams(l);
      t && t != Pr[0] && c.searchParams.append("sort", t);
      let u = Bo(r);
      for (let d of Object.keys(u)) u[d] && c.searchParams.append(d, u[d]);
      i.current !== void 0 &&
        i.current !== c.searchParams.toString() &&
        Ao(t, u),
        (i.current = c.searchParams.toString()),
        p.has("cc") && c.searchParams.append("cc", p.get("cc")),
        history.replaceState(history.state, "", c);
    }, [n, t, r]);
}
export { S_ as route };
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

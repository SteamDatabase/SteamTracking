const CLSTAMP = 9621725;

import { a as cn, b as bn } from "./chunk-NF6MR5D3.js";
import {
  b as Cs,
  c as un,
  d as dn,
  e as pn,
  f as mn,
  h as fn,
  i as yn,
} from "./chunk-ZNIQDEVJ.js";
import "./chunk-AHODHMRX.js";
import "./chunk-I4HRQOFL.js";
import { b as hn, c as gn, d as _n } from "./chunk-DRGKSTFU.js";
import { a as en, k as tn } from "./chunk-LLLE4I7A.js";
import { c as nn } from "./chunk-HZRWIEAG.js";
import { a as Bo, c as Ho, e as on } from "./chunk-XAIYUPEN.js";
import { a as Fo } from "./chunk-VMNQEAPJ.js";
import {
  A as ko,
  f as Ro,
  g as Io,
  h as wo,
  k as Ao,
  o as To,
  p as Mo,
  y as Go,
  z as Lo,
} from "./chunk-T5R5HA6V.js";
import "./chunk-TL5AGPUO.js";
import { b as Dt, d as Eo, e as sn } from "./chunk-Z5PB7HON.js";
import { i as No } from "./chunk-OIB4W63F.js";
import "./chunk-H6BW4J65.js";
import {
  A as xe,
  d as zo,
  e as Vo,
  g as _r,
  h as jo,
  i as Uo,
  k as Ne,
  m as qo,
  o as $o,
  p as Qo,
  q as Ko,
  r as Yo,
  s as Xo,
  w as Jo,
  z as Zo,
} from "./chunk-52D4XJSF.js";
import "./chunk-KHREW4X3.js";
import {
  A as ho,
  D as go,
  E as _o,
  G as Re,
  H as Po,
  I as xo,
  J as Do,
  a as ju,
  b as O,
  c as A,
  d as $,
  e as Q,
  f as K,
  g as Y,
  h as X,
  i as J,
  r as _s,
  t as Pe,
  u as qe,
  x as bs,
  y as ys,
  z as vs,
} from "./chunk-FLM2RWKS.js";
import "./chunk-Z5ZSSGNQ.js";
import { a as lo } from "./chunk-7QXB6VNI.js";
import { a as fo } from "./chunk-5CQONC6K.js";
import {
  a as gr,
  b as Uu,
  d as Oe,
  e as br,
  g as rn,
  k as y,
} from "./chunk-4MJ7Y5DG.js";
import {
  A as yo,
  C as ne,
  D as ke,
  E as vo,
  F as Co,
  H as lt,
  y as at,
} from "./chunk-J4WWSJ5J.js";
import { a as Le } from "./chunk-VT5P5CPI.js";
import { b as Oo } from "./chunk-EMD4TCMF.js";
import { b as bo } from "./chunk-7CZT6RLZ.js";
import { c as Wo } from "./chunk-D3P3S5VH.js";
import "./chunk-GAMLKW4O.js";
import "./chunk-DGIEEIOT.js";
import "./chunk-DGBBVGKD.js";
import { a as Ss, c as an, d as ln } from "./chunk-WIIXRVXR.js";
import { a as So } from "./chunk-V5X7Y6PQ.js";
import { c as gs, g as Me } from "./chunk-MYRGI4P6.js";
import "./chunk-RB7KZ3PF.js";
import { e as ao } from "./chunk-MBG223ZF.js";
import {
  b as Ge,
  d as _e,
  f as ot,
  g as co,
  h as nt,
  l as uo,
  t as po,
  x as mo,
} from "./chunk-V6NE4MIP.js";
import {
  i as no,
  j as Pt,
  k as hr,
  l as ee,
  m as xt,
  o as E,
} from "./chunk-K34HL7TB.js";
import { a as V } from "./chunk-LTXTEHOA.js";
import { b as fr, d as v } from "./chunk-GT4J6GNR.js";
var zn = fr((Hn) => {
  "use strict";
  var Sr = V(),
    rd = Fo();
  function sd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var id = typeof Object.is == "function" ? Object.is : sd,
    od = rd.useSyncExternalStore,
    nd = Sr.useRef,
    ad = Sr.useEffect,
    ld = Sr.useMemo,
    cd = Sr.useDebugValue;
  Hn.useSyncExternalStoreWithSelector = function (e, t, r, s, i) {
    var o = nd(null);
    if (o.current === null) {
      var n = { hasValue: !1, value: null };
      o.current = n;
    } else n = o.current;
    o = ld(
      function () {
        function l(m) {
          if (!c) {
            if (((c = !0), (p = m), (m = s(m)), i !== void 0 && n.hasValue)) {
              var f = n.value;
              if (i(f, m)) return (u = f);
            }
            return (u = m);
          }
          if (((f = u), id(p, m))) return f;
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
    var a = od(e, o[0], o[1]);
    return (
      ad(
        function () {
          (n.hasValue = !0), (n.value = a);
        },
        [a],
      ),
      cd(a),
      a
    );
  };
});
var jn = fr((Lb, Vn) => {
  "use strict";
  Vn.exports = zn();
});
var Jn = fr((M) => {
  "use strict";
  var Ys = Symbol.for("react.element"),
    Xs = Symbol.for("react.portal"),
    Rr = Symbol.for("react.fragment"),
    Ir = Symbol.for("react.strict_mode"),
    wr = Symbol.for("react.profiler"),
    Pr = Symbol.for("react.provider"),
    xr = Symbol.for("react.context"),
    gd = Symbol.for("react.server_context"),
    Dr = Symbol.for("react.forward_ref"),
    Er = Symbol.for("react.suspense"),
    Br = Symbol.for("react.suspense_list"),
    Fr = Symbol.for("react.memo"),
    Nr = Symbol.for("react.lazy"),
    _d = Symbol.for("react.offscreen"),
    Xn;
  Xn = Symbol.for("react.module.reference");
  function be(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Ys:
          switch (((e = e.type), e)) {
            case Rr:
            case wr:
            case Ir:
            case Er:
            case Br:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case gd:
                case xr:
                case Dr:
                case Nr:
                case Fr:
                case Pr:
                  return e;
                default:
                  return t;
              }
          }
        case Xs:
          return t;
      }
    }
  }
  M.ContextConsumer = xr;
  M.ContextProvider = Pr;
  M.Element = Ys;
  M.ForwardRef = Dr;
  M.Fragment = Rr;
  M.Lazy = Nr;
  M.Memo = Fr;
  M.Portal = Xs;
  M.Profiler = wr;
  M.StrictMode = Ir;
  M.Suspense = Er;
  M.SuspenseList = Br;
  M.isAsyncMode = function () {
    return !1;
  };
  M.isConcurrentMode = function () {
    return !1;
  };
  M.isContextConsumer = function (e) {
    return be(e) === xr;
  };
  M.isContextProvider = function (e) {
    return be(e) === Pr;
  };
  M.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ys;
  };
  M.isForwardRef = function (e) {
    return be(e) === Dr;
  };
  M.isFragment = function (e) {
    return be(e) === Rr;
  };
  M.isLazy = function (e) {
    return be(e) === Nr;
  };
  M.isMemo = function (e) {
    return be(e) === Fr;
  };
  M.isPortal = function (e) {
    return be(e) === Xs;
  };
  M.isProfiler = function (e) {
    return be(e) === wr;
  };
  M.isStrictMode = function (e) {
    return be(e) === Ir;
  };
  M.isSuspense = function (e) {
    return be(e) === Er;
  };
  M.isSuspenseList = function (e) {
    return be(e) === Br;
  };
  M.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Rr ||
      e === wr ||
      e === Ir ||
      e === Er ||
      e === Br ||
      e === _d ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Nr ||
          e.$$typeof === Fr ||
          e.$$typeof === Pr ||
          e.$$typeof === xr ||
          e.$$typeof === Dr ||
          e.$$typeof === Xn ||
          e.getModuleId !== void 0))
    );
  };
  M.typeOf = be;
});
var ea = fr((Xb, Zn) => {
  "use strict";
  Zn.exports = Jn();
});
var Ue = v(V(), 1);
function vn(e) {
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
function Ws(e) {
  return e == "mac" || e == "linux" ? e : "all";
}
function Rs(e) {
  return e == "any" || e == "50" || e == "75" ? e : "";
}
function qu(e, t) {
  if (e === "free") return e;
  if (e && e.length) {
    co(t, "cannot EnsureValidPriceStop without rgPriceStops data");
    let r = parseInt(e);
    if ((r || e === "0") && (!t || r < t.length)) return r;
  }
  return "none";
}
function $u(e) {
  if (e == "games" || e == "software" || e == "dlc") return e;
}
function Qu(e) {
  if (e == "verified" || e == "playable") return e;
}
function Cn(e, t) {
  let r = {};
  return (
    e.strPlatform == "mac"
      ? (r.macos_only = !0)
      : e.strPlatform == "linux"
        ? (r.steamos_linux_only = !0)
        : e.strPlatform != "all" &&
          nt(e.strPlatform, `Unhandled platform value: ${e.strPlatform}`),
    e.rgTypeFilters.forEach((s) => {
      s == "games"
        ? (r.only_games = !0)
        : s == "software"
          ? (r.only_software = !0)
          : s == "dlc"
            ? (r.only_dlc = !0)
            : nt(s, `Unhandled type filter: ${s}`);
    }),
    e.strMinDiscount == "any"
      ? (r.min_discount_percent = 1)
      : e.strMinDiscount == "50"
        ? (r.min_discount_percent = 50)
        : e.strMinDiscount == "75"
          ? (r.min_discount_percent = 75)
          : e.strMinDiscount != "" &&
            nt(
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
function Sn(e, t) {
  return {
    strPlatform: Ws(e.platform),
    strMinDiscount: Rs(e.min_discount),
    nMaxPriceStop: qu(e.max_price, t),
    rgTypeFilters: yr(e.type_filters, $u),
    bExcludeEarlyAccess: e.exclude_early_access == "1",
    bExcludePrerelease: e.exclude_prerelease == "1",
    bExcludeVR: e.exclude_vr == "1",
    rgDeckFilters: yr(e.deck_filters, Qu),
    rgTagFilters: yr(e.tagids, (r) => parseInt(r) || void 0),
    rgWishlistNotificationGames: yr(e.wng, (r) => parseInt(r) || void 0),
  };
}
function yr(e, t) {
  return (
    e
      ?.split(/,/)
      .map(t)
      .filter((r) => r !== void 0) || []
  );
}
function Wn(e) {
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
var b = v(ju());
var vr = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
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
                br: O.readFixed64String,
                bw: A.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Request";
    }
  },
  Is = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || J(e.M()),
        b.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: ws, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response";
    }
  },
  ws = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: O.readUint32, bw: A.writeUint32 },
              priority: { n: 2, br: O.readUint32, bw: A.writeUint32 },
              date_added: { n: 3, br: O.readUint32, bw: A.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response_WishlistItem";
    }
  },
  Ps = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: O.readUint32, bw: A.writeUint32 },
              navdata: { n: 2, c: Ao },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Request";
    }
  },
  xs = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              wishlist_count: { n: 1, br: O.readUint32, bw: A.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Response";
    }
  },
  Et = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { appid: { n: 1, br: O.readUint32, bw: A.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Request";
    }
  },
  Ds = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              wishlist_count: { n: 1, br: O.readUint32, bw: A.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Response";
    }
  },
  Es = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
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
                br: O.readFixed64String,
                bw: A.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Request";
    }
  },
  Bs = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.count || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { count: { n: 1, br: O.readUint32, bw: A.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Response";
    }
  },
  Fs = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: vs }, data_request: { n: 2, c: ys } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Request";
    }
  },
  Ns = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || J(e.M()),
        b.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Os, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response";
    }
  },
  Os = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: O.readUint32, bw: A.writeUint32 },
              store_item: { n: 2, c: bs },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response_WishlistItem";
    }
  },
  Bt = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.macos_only || J(e.M()),
        b.Message.initialize(this, t, 0, -1, [24], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              macos_only: { n: 1, br: O.readBool, bw: A.writeBool },
              steamos_linux_only: { n: 2, br: O.readBool, bw: A.writeBool },
              only_games: { n: 10, br: O.readBool, bw: A.writeBool },
              only_software: { n: 11, br: O.readBool, bw: A.writeBool },
              only_dlc: { n: 12, br: O.readBool, bw: A.writeBool },
              only_free: { n: 13, br: O.readBool, bw: A.writeBool },
              max_price_in_cents: {
                n: 20,
                br: O.readInt64String,
                bw: A.writeInt64String,
              },
              min_discount_percent: {
                n: 21,
                br: O.readInt32,
                bw: A.writeInt32,
              },
              exclude_types: { n: 22, c: As },
              steam_deck_filters: { n: 23, c: Ts },
              tagids_must_match: {
                n: 24,
                r: !0,
                q: !0,
                br: O.readInt32,
                pbr: O.readPackedInt32,
                bw: A.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters";
    }
  },
  As = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.exclude_early_access || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              exclude_early_access: { n: 1, br: O.readBool, bw: A.writeBool },
              exclude_coming_soon: { n: 2, br: O.readBool, bw: A.writeBool },
              exclude_vr_only: { n: 3, br: O.readBool, bw: A.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_ExcludeTypeFilters";
    }
  },
  Ts = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_verified || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              include_verified: { n: 1, br: O.readBool, bw: A.writeBool },
              include_playable: { n: 2, br: O.readBool, bw: A.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_SteamDeckFilters";
    }
  },
  Ft = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
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
                br: O.readFixed64String,
                bw: A.writeFixed64String,
              },
              context: { n: 2, c: vs },
              data_request: { n: 3, c: ys },
              sort_order: { n: 4, d: 0, br: O.readEnum, bw: A.writeEnum },
              filters: { n: 5, c: Bt },
              start_index: { n: 6, d: 0, br: O.readInt32, bw: A.writeInt32 },
              page_size: { n: 7, d: 100, br: O.readInt32, bw: A.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Request";
    }
  },
  Ms = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || J(e.M()),
        b.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Gs, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response";
    }
  },
  Gs = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || J(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: O.readUint32, bw: A.writeUint32 },
              priority: { n: 2, br: O.readUint32, bw: A.writeUint32 },
              date_added: { n: 3, br: O.readUint32, bw: A.writeUint32 },
              store_item: { n: 4, c: bs },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = $(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return K(e.M(), t, r);
    }
    static fromObject(t) {
      return Q(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new b.default.BinaryReader(t),
        s = new e();
      return e.deserializeBinaryFromReader(s, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return Y(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      X(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new b.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response_WishlistItem";
    }
  },
  ct;
((n) => {
  function e(a, l) {
    return a.SendMsg("Wishlist.GetWishlist#1", qe(vr, l), Is, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.GetWishlist = e;
  function t(a, l) {
    return a.SendMsg("Wishlist.AddToWishlist#1", qe(Ps, l), xs, {
      ePrivilege: 1,
    });
  }
  n.AddToWishlist = t;
  function r(a, l) {
    return a.SendMsg("Wishlist.RemoveFromWishlist#1", qe(Et, l), Ds, {
      ePrivilege: 1,
    });
  }
  n.RemoveFromWishlist = r;
  function s(a, l) {
    return a.SendMsg("Wishlist.GetWishlistItemCount#1", qe(Es, l), Bs, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.GetWishlistItemCount = s;
  function i(a, l) {
    return a.SendMsg("Wishlist.GetWishlistItemsOnSale#1", qe(Fs, l), Ns, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  n.GetWishlistItemsOnSale = i;
  function o(a, l) {
    return a.SendMsg("Wishlist.GetWishlistSortedFiltered#1", qe(Ft, l), Ms, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.GetWishlistSortedFiltered = o;
})((ct ||= {}));
var Cr = [
    "order",
    "name",
    "price",
    "discount",
    "dateadded",
    "topsellers",
    "releasedate",
    "reviews",
  ],
  Ls = {
    order: "order",
    name: "name",
    price: "price",
    discount: "discount",
    dateadded: "dateadded",
    salesrank: "topsellers",
    releasedate: "releasedate",
    reviewscore: "reviews",
  };
function Rn(e) {
  return e in Ls;
}
var ks = {
  order: 0,
  name: 1,
  price: 2,
  discount: 3,
  dateadded: 4,
  topsellers: 5,
  releasedate: 6,
  reviews: 7,
};
var Hs = {
  name: "wishlistPrefs",
  options: { path: "/wishlist", secure: !0, maxAge: 365 * 24 * 60 * 60 * 1e3 },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
function zs() {
  try {
    let e = JSON.parse(Ro(Hs) || "{}");
    return e.filterParams?.wng && delete e.filterParams.wng, e;
  } catch {}
  return {};
}
function In(e) {
  Object.keys(e).length == 0 ? wo(Hs) : Io(Hs, JSON.stringify(e));
}
function wn() {
  return !!zs().bCompactView;
}
function Pn(e) {
  let t = zs();
  e ? (t.bCompactView = !0) : delete t.bCompactView, In(t);
}
function xn(e, t) {
  In({ ...zs(), sort: e, filterParams: t });
}
async function Yu(e, t) {
  let r = await ct.GetWishlistItemCount(e, { steamid: t });
  if (!r.BSuccess())
    throw `Error loading wishlist item count: ${r.GetErrorMessage()}`;
  return r.Body().toObject().count;
}
function Dn(e) {
  return ["wishlistitemcount", e];
}
function Xu(e, t) {
  return {
    queryKey: Dn(t),
    queryFn: () => Yu(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function Nt(e) {
  let t = Re();
  return _e(Xu(t, e));
}
async function Ju(e, t) {
  let r = Pe.Init(Et);
  r.Body().set_appid(t);
  let s = await ct.RemoveFromWishlist(e, r);
  if (!s.BSuccess()) throw s.GetErrorMessage();
  return s.Body().wishlist_count();
}
function En(e, t) {
  let r = Re(),
    s = Ge();
  return ot({
    mutationFn: async () => await Ju(r, t),
    onSuccess(i) {
      s.setQueryData(Dn(e), () => i);
      let o = (n) => n && { ...n, items: n.items.filter((a) => a.appid != t) };
      s.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, o),
        s.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          o,
        );
    },
  });
}
var Bn = "a20CyZYbgnQ-";
var $e = v(E(), 1);
function Fn(e) {
  return (0, $e.jsx)("div", {
    className: Bn,
    children: (0, $e.jsxs)("div", {
      children: [
        (0, $e.jsx)("h1", { children: y.Localize("#errorpage_error") }),
        (0, $e.jsx)("h3", { children: (0, $e.jsx)(ed, { error: e.error }) }),
      ],
    }),
  });
}
function ed(e) {
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
        nt(t, `Unhandled error code ${t}`),
        y.Localize("#errorpage_unknownerror")
      );
  }
}
var C = v(V()),
  Xt = v(lo());
function Qe(e) {
  "@babel/helpers - typeof";
  return (
    (Qe =
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
    Qe(e)
  );
}
function Nn(e, t) {
  if (Qe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(e, t || "default");
    if (Qe(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function On(e) {
  var t = Nn(e, "string");
  return Qe(t) == "symbol" ? t : t + "";
}
function An(e, t, r) {
  return (
    (t = On(t)) in e
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
function Tn(e, t) {
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
function Vs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tn(Object(r), !0).forEach(function (s) {
          An(e, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tn(Object(r)).forEach(function (s) {
            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
          });
  }
  return e;
}
function ce(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Mn = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  js = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Gn = {
    INIT: "@@redux/INIT" + js(),
    REPLACE: "@@redux/REPLACE" + js(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + js();
    },
  };
function td(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Us(e, t, r) {
  var s;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ce(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(ce(1));
    return r(Us)(e, t);
  }
  if (typeof e != "function") throw new Error(ce(2));
  var i = e,
    o = t,
    n = [],
    a = n,
    l = !1;
  function c() {
    a === n && (a = n.slice());
  }
  function p() {
    if (l) throw new Error(ce(3));
    return o;
  }
  function u(g) {
    if (typeof g != "function") throw new Error(ce(4));
    if (l) throw new Error(ce(5));
    var h = !0;
    return (
      c(),
      a.push(g),
      function () {
        if (h) {
          if (l) throw new Error(ce(6));
          (h = !1), c();
          var W = a.indexOf(g);
          a.splice(W, 1), (n = null);
        }
      }
    );
  }
  function d(g) {
    if (!td(g)) throw new Error(ce(7));
    if (typeof g.type > "u") throw new Error(ce(8));
    if (l) throw new Error(ce(9));
    try {
      (l = !0), (o = i(o, g));
    } finally {
      l = !1;
    }
    for (var h = (n = a), S = 0; S < h.length; S++) {
      var W = h[S];
      W();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function") throw new Error(ce(10));
    (i = g), d({ type: Gn.REPLACE });
  }
  function f() {
    var g,
      h = u;
    return (
      (g = {
        subscribe: function (W) {
          if (typeof W != "object" || W === null) throw new Error(ce(11));
          function P() {
            W.next && W.next(p());
          }
          P();
          var w = h(P);
          return { unsubscribe: w };
        },
      }),
      (g[Mn] = function () {
        return this;
      }),
      g
    );
  }
  return (
    d({ type: Gn.INIT }),
    (s = { dispatch: d, subscribe: u, getState: p, replaceReducer: m }),
    (s[Mn] = f),
    s
  );
}
function Ln(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function qs(e, t) {
  if (typeof e == "function") return Ln(e, t);
  if (typeof e != "object" || e === null) throw new Error(ce(16));
  var r = {};
  for (var s in e) {
    var i = e[s];
    typeof i == "function" && (r[s] = Ln(i, t));
  }
  return r;
}
function $s() {
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
function kn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (s) {
    return function () {
      var i = s.apply(void 0, arguments),
        o = function () {
          throw new Error(ce(15));
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
        (o = $s.apply(void 0, a)(i.dispatch)),
        Vs(Vs({}, i), {}, { dispatch: o })
      );
    };
  };
}
var ua = v(Fo()),
  da = v(jn());
var Qs = v(lo());
function ud(e) {
  e();
}
var Un = ud,
  qn = (e) => (Un = e),
  $n = () => Un;
var Ks = v(V());
var pd = v(V());
var Ot = v(V()),
  Qn = Symbol.for("react-redux-context"),
  Kn = typeof globalThis < "u" ? globalThis : {};
function dd() {
  var e;
  if (!Ot.createContext) return {};
  let t = (e = Kn[Qn]) != null ? e : (Kn[Qn] = new Map()),
    r = t.get(Ot.createContext);
  return r || ((r = Ot.createContext(null)), t.set(Ot.createContext, r)), r;
}
var Ae = dd();
var Wr = () => {
  throw new Error("uSES not initialized!");
};
var hd = Wr,
  Yn = (e) => {
    hd = e;
  };
var ei = v(Uu()),
  G = v(V()),
  aa = v(ea());
var yd = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function vd(
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
  function m(W, P) {
    return (
      (l = W),
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
    let W = e(l, c),
      P = !n(W, p);
    return (p = W), P && (d = r(p, u, c)), d;
  }
  function S(W, P) {
    let w = !o(P, c),
      x = !i(W, l, P, c);
    return (l = W), (c = P), w && x ? f() : w ? g() : x ? h() : d;
  }
  return function (P, w) {
    return a ? S(P, w) : m(P, w);
  };
}
function Js(e, t) {
  let {
      initMapStateToProps: r,
      initMapDispatchToProps: s,
      initMergeProps: i,
    } = t,
    o = br(t, yd),
    n = r(e, o),
    a = s(e, o),
    l = i(e, o);
  return vd(n, a, l, e, o);
}
function Zs(e, t) {
  let r = {};
  for (let s in e) {
    let i = e[s];
    typeof i == "function" && (r[s] = (...o) => t(i(...o)));
  }
  return r;
}
function At(e) {
  return function (r) {
    let s = e(r);
    function i() {
      return s;
    }
    return (i.dependsOnOwnProps = !1), i;
  };
}
function ta(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Or(e, t) {
  return function (s, { displayName: i }) {
    let o = function (a, l) {
      return o.dependsOnOwnProps ? o.mapToProps(a, l) : o.mapToProps(a, void 0);
    };
    return (
      (o.dependsOnOwnProps = !0),
      (o.mapToProps = function (a, l) {
        (o.mapToProps = e), (o.dependsOnOwnProps = ta(e));
        let c = o(a, l);
        return (
          typeof c == "function" &&
            ((o.mapToProps = c), (o.dependsOnOwnProps = ta(c)), (c = o(a, l))),
          c
        );
      }),
      o
    );
  };
}
function ut(e, t) {
  return (r, s) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${s.wrappedComponentName}.`,
    );
  };
}
function ra(e) {
  return e && typeof e == "object"
    ? At((t) => Zs(e, t))
    : e
      ? typeof e == "function"
        ? Or(e, "mapDispatchToProps")
        : ut(e, "mapDispatchToProps")
      : At((t) => ({ dispatch: t }));
}
function sa(e) {
  return e
    ? typeof e == "function"
      ? Or(e, "mapStateToProps")
      : ut(e, "mapStateToProps")
    : At(() => ({}));
}
function Cd(e, t, r) {
  return Oe({}, r, e, t);
}
function Sd(e) {
  return function (r, { displayName: s, areMergedPropsEqual: i }) {
    let o = !1,
      n;
    return function (l, c, p) {
      let u = e(l, c, p);
      return o ? i(u, n) || (n = u) : ((o = !0), (n = u)), n;
    };
  };
}
function ia(e) {
  return e ? (typeof e == "function" ? Sd(e) : ut(e, "mergeProps")) : () => Cd;
}
function Wd() {
  let e = $n(),
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
var oa = { notify() {}, get: () => [] };
function Ar(e, t) {
  let r,
    s = oa,
    i = 0,
    o = !1;
  function n(g) {
    p();
    let h = s.subscribe(g),
      S = !1;
    return () => {
      S || ((S = !0), h(), u());
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
    i++, r || ((r = t ? t.addNestedSub(l) : e.subscribe(l)), (s = Wd()));
  }
  function u() {
    i--, r && i === 0 && (r(), (r = void 0), s.clear(), (s = oa));
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
var Tr = v(V()),
  Rd =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  dt = Rd ? Tr.useLayoutEffect : Tr.useEffect;
function na(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function pt(e, t) {
  if (na(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  let r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !na(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var Id = ["reactReduxForwardedRef"],
  la = Wr,
  ca = (e) => {
    la = e;
  };
var wd = [null, null];
function Pd(e, t, r) {
  dt(() => e(...t), r);
}
function xd(e, t, r, s, i, o) {
  (e.current = s), (r.current = !1), i.current && ((i.current = null), o());
}
function Dd(e, t, r, s, i, o, n, a, l, c, p) {
  if (!e) return () => {};
  let u = !1,
    d = null,
    m = () => {
      if (u || !a.current) return;
      let g = t.getState(),
        h,
        S;
      try {
        h = s(g, i.current);
      } catch (W) {
        (S = W), (d = W);
      }
      S || (d = null),
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
function Ed(e, t) {
  return e === t;
}
function Bd(
  e,
  t,
  r,
  {
    pure: s,
    areStatesEqual: i = Ed,
    areOwnPropsEqual: o = pt,
    areStatePropsEqual: n = pt,
    areMergedPropsEqual: a = pt,
    forwardRef: l = !1,
    context: c = Ae,
  } = {},
) {
  let p = c,
    u = sa(e),
    d = ra(t),
    m = ia(r),
    f = !!e;
  return (h) => {
    let S = h.displayName || h.name || "Component",
      W = `Connect(${S})`,
      P = {
        shouldHandleStateChanges: f,
        displayName: W,
        wrappedComponentName: S,
        WrappedComponent: h,
        initMapStateToProps: u,
        initMapDispatchToProps: d,
        initMergeProps: m,
        areStatesEqual: i,
        areStatePropsEqual: n,
        areOwnPropsEqual: o,
        areMergedPropsEqual: a,
      };
    function w(k) {
      let [L, ue, z] = G.useMemo(() => {
          let { reactReduxForwardedRef: we } = k,
            wt = br(k, Id);
          return [k.context, we, wt];
        }, [k]),
        ge = G.useMemo(
          () =>
            L &&
            L.Consumer &&
            (0, aa.isContextConsumer)(G.createElement(L.Consumer, null))
              ? L
              : p,
          [L, p],
        ),
        q = G.useContext(ge),
        Fe = !!k.store && !!k.store.getState && !!k.store.dispatch,
        Wt = !!q && !!q.store,
        Ie = Fe ? k.store : q.store,
        pr = Wt ? q.getServerState : Ie.getState,
        us = G.useMemo(() => Js(Ie.dispatch, P), [Ie]),
        [Rt, ro] = G.useMemo(() => {
          if (!f) return wd;
          let we = Ar(Ie, Fe ? void 0 : q.subscription),
            wt = we.notifyNestedSubs.bind(we);
          return [we, wt];
        }, [Ie, Fe, q]),
        so = G.useMemo(
          () => (Fe ? q : Oe({}, q, { subscription: Rt })),
          [Fe, q, Rt],
        ),
        ds = G.useRef(),
        ps = G.useRef(z),
        It = G.useRef(),
        io = G.useRef(!1),
        Z_ = G.useRef(!1),
        ms = G.useRef(!1),
        fs = G.useRef();
      dt(
        () => (
          (ms.current = !0),
          () => {
            ms.current = !1;
          }
        ),
        [],
      );
      let oo = G.useMemo(
          () => () =>
            It.current && z === ps.current ? It.current : us(Ie.getState(), z),
          [Ie, z],
        ),
        Vu = G.useMemo(
          () => (wt) =>
            Rt ? Dd(f, Ie, Rt, us, ps, ds, io, ms, It, ro, wt) : () => {},
          [Rt],
        );
      Pd(xd, [ps, ds, io, z, It, ro]);
      let mr;
      try {
        mr = la(Vu, oo, pr ? () => us(pr(), z) : oo);
      } catch (we) {
        throw (
          (fs.current &&
            (we.message += `
The error may be correlated with this previous error:
${fs.current.stack}

`),
          we)
        );
      }
      dt(() => {
        (fs.current = void 0), (It.current = void 0), (ds.current = mr);
      });
      let hs = G.useMemo(
        () => G.createElement(h, Oe({}, mr, { ref: ue })),
        [ue, h, mr],
      );
      return G.useMemo(
        () => (f ? G.createElement(ge.Provider, { value: so }, hs) : hs),
        [ge, hs, so],
      );
    }
    let D = G.memo(w);
    if (((D.WrappedComponent = h), (D.displayName = w.displayName = W), l)) {
      let L = G.forwardRef(function (z, ge) {
        return G.createElement(D, Oe({}, z, { reactReduxForwardedRef: ge }));
      });
      return (
        (L.displayName = W), (L.WrappedComponent = h), (0, ei.default)(L, h)
      );
    }
    return (0, ei.default)(D, h);
  };
}
var Mr = Bd;
var Tt = v(V());
function Fd({
  store: e,
  context: t,
  children: r,
  serverState: s,
  stabilityCheck: i = "once",
  noopCheck: o = "once",
}) {
  let n = Tt.useMemo(() => {
      let c = Ar(e);
      return {
        store: e,
        subscription: c,
        getServerState: s ? () => s : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, s, i, o]),
    a = Tt.useMemo(() => e.getState(), [e]);
  return (
    dt(() => {
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
    Tt.createElement((t || Ae).Provider, { value: n }, r)
  );
}
var ti = Fd;
Yn(da.useSyncExternalStoreWithSelector);
ca(ua.useSyncExternalStore);
qn(Qs.unstable_batchedUpdates);
var Ke = v(V());
function Ad(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function pa(e, t) {
  var r = (0, Ke.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    s = (0, Ke.useRef)(!0),
    i = (0, Ke.useRef)(r),
    o = s.current || !!(t && i.current.inputs && Ad(t, i.current.inputs)),
    n = o ? i.current : { inputs: t, result: e() };
  return (
    (0, Ke.useEffect)(
      function () {
        (s.current = !1), (i.current = n);
      },
      [n],
    ),
    n.result
  );
}
function Td(e, t) {
  return pa(function () {
    return e;
  }, t);
}
var B = pa,
  I = Td;
var ve = function (t) {
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
  Gr = function (t, r) {
    return {
      top: t.top - r.top,
      left: t.left - r.left,
      bottom: t.bottom + r.bottom,
      right: t.right + r.right,
    };
  },
  ma = function (t, r) {
    return {
      top: t.top + r.top,
      left: t.left + r.left,
      bottom: t.bottom - r.bottom,
      right: t.right - r.right,
    };
  },
  Md = function (t, r) {
    return {
      top: t.top + r.y,
      left: t.left + r.x,
      bottom: t.bottom + r.y,
      right: t.right + r.x,
    };
  },
  ri = { top: 0, right: 0, bottom: 0, left: 0 },
  Lr = function (t) {
    var r = t.borderBox,
      s = t.margin,
      i = s === void 0 ? ri : s,
      o = t.border,
      n = o === void 0 ? ri : o,
      a = t.padding,
      l = a === void 0 ? ri : a,
      c = ve(Gr(r, i)),
      p = ve(ma(r, n)),
      u = ve(ma(p, l));
    return {
      marginBox: c,
      borderBox: ve(r),
      paddingBox: p,
      contentBox: u,
      margin: i,
      border: n,
      padding: l,
    };
  },
  ye = function (t) {
    var r = t.slice(0, -2),
      s = t.slice(-2);
    if (s !== "px") return 0;
    var i = Number(r);
    return isNaN(i) && rn(!1), i;
  },
  Gd = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  Mt = function (t, r) {
    var s = t.borderBox,
      i = t.border,
      o = t.margin,
      n = t.padding,
      a = Md(s, r);
    return Lr({ borderBox: a, border: i, margin: o, padding: n });
  },
  Gt = function (t, r) {
    return r === void 0 && (r = Gd()), Mt(t, r);
  },
  si = function (t, r) {
    var s = {
        top: ye(r.marginTop),
        right: ye(r.marginRight),
        bottom: ye(r.marginBottom),
        left: ye(r.marginLeft),
      },
      i = {
        top: ye(r.paddingTop),
        right: ye(r.paddingRight),
        bottom: ye(r.paddingBottom),
        left: ye(r.paddingLeft),
      },
      o = {
        top: ye(r.borderTopWidth),
        right: ye(r.borderRightWidth),
        bottom: ye(r.borderBottomWidth),
        left: ye(r.borderLeftWidth),
      };
    return Lr({ borderBox: t, margin: s, padding: i, border: o });
  },
  ii = function (t) {
    var r = t.getBoundingClientRect(),
      s = window.getComputedStyle(t);
    return si(r, s);
  };
var fa =
  Number.isNaN ||
  function (t) {
    return typeof t == "number" && t !== t;
  };
function Ld(e, t) {
  return !!(e === t || (fa(e) && fa(t)));
}
function kd(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Ld(e[r], t[r])) return !1;
  return !0;
}
function Z(e, t) {
  t === void 0 && (t = kd);
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
var Hd = function (t) {
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
  mt = Hd;
var zd = !0,
  Vd = /[ \t]{2,}/g,
  jd = /^[ \t]*/gm,
  ha = (e) => e.replace(Vd, " ").replace(jd, "").trim(),
  Ud = (e) =>
    ha(`
  %c@hello-pangea/dnd

  %c${ha(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`),
  qd = (e) => [
    Ud(e),
    "color: #00C584; font-size: 1.2em; font-weight: bold;",
    "line-height: 1.5",
    "color: #723874;",
  ],
  $d = "__@hello-pangea/dnd-disable-dev-warnings";
function Va(e, t) {
  zd || (typeof window < "u" && window[$d]) || console[e](...qd(t));
}
var Nv = Va.bind(null, "warn"),
  Qd = Va.bind(null, "error");
function He() {}
function Kd(e, t) {
  return { ...e, ...t };
}
function Ce(e, t, r) {
  let s = t.map((i) => {
    let o = Kd(r, i.options);
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
var Yd = !0,
  ga = "Invariant failed",
  Je = class extends Error {};
Je.prototype.toString = function () {
  return this.message;
};
function _(e, t) {
  if (!e) throw Yd ? new Je(ga) : new Je(`${ga}: ${t || ""}`);
}
var hi = class extends C.default.Component {
    constructor(...t) {
      super(...t),
        (this.callbacks = null),
        (this.unbind = He),
        (this.onWindowError = (r) => {
          let s = this.getCallbacks();
          s.isDragging() && s.tryAbort(),
            r.error instanceof Je && r.preventDefault();
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
      this.unbind = Ce(window, [
        { eventName: "error", fn: this.onWindowError },
      ]);
    }
    componentDidCatch(t) {
      if (t instanceof Je) {
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
  Xd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  jr = (e) => e + 1,
  Jd = (e) => `
  You have lifted an item in position ${jr(e.source.index)}
`,
  ja = (e, t) => {
    let r = e.droppableId === t.droppableId,
      s = jr(e.index),
      i = jr(t.index);
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
  Ua = (e, t, r) =>
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
  Zd = (e) => {
    let t = e.destination;
    if (t) return ja(e.source, t);
    let r = e.combine;
    return r
      ? Ua(e.draggableId, e.source, r)
      : "You are over an area that cannot be dropped on";
  },
  _a = (e) => `
  The item has returned to its starting position
  of ${jr(e.index)}
`,
  ep = (e) => {
    if (e.reason === "CANCEL")
      return `
      Movement cancelled.
      ${_a(e.source)}
    `;
    let t = e.destination,
      r = e.combine;
    return t
      ? `
      You have dropped the item.
      ${ja(e.source, t)}
    `
      : r
        ? `
      You have dropped the item.
      ${Ua(e.draggableId, e.source, r)}
    `
        : `
    The item has been dropped while not over a drop area.
    ${_a(e.source)}
  `;
  },
  tp = {
    dragHandleUsageInstructions: Xd,
    onDragStart: Jd,
    onDragUpdate: Zd,
    onDragEnd: ep,
  },
  Vr = tp,
  te = { x: 0, y: 0 },
  se = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
  de = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  ze = (e, t) => e.x === t.x && e.y === t.y,
  _t = (e) => ({ x: e.x !== 0 ? -e.x : 0, y: e.y !== 0 ? -e.y : 0 }),
  Ze = (e, t, r = 0) => (e === "x" ? { x: t, y: r } : { x: r, y: t }),
  jt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
  ba = (e, t) => Math.min(...t.map((r) => jt(e, r))),
  qa = (e) => (t) => ({ x: e(t.x), y: e(t.y) }),
  rp = (e, t) => {
    let r = ve({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left),
    });
    return r.width <= 0 || r.height <= 0 ? null : r;
  },
  Jt = (e, t) => ({
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x,
  }),
  ya = (e) => [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.left, y: e.bottom },
    { x: e.right, y: e.bottom },
  ],
  sp = { top: 0, right: 0, bottom: 0, left: 0 },
  ip = (e, t) => (t ? Jt(e, t.scroll.diff.displacement) : e),
  op = (e, t, r) =>
    r && r.increasedBy
      ? { ...e, [t.end]: e[t.end] + r.increasedBy[t.line] }
      : e,
  np = (e, t) => (t && t.shouldClipSubject ? rp(t.pageMarginBox, e) : ve(e)),
  ft = ({ page: e, withPlaceholder: t, axis: r, frame: s }) => {
    let i = ip(e.marginBox, s),
      o = op(i, r, t),
      n = np(o, s);
    return { page: e, withPlaceholder: t, active: n };
  },
  Wi = (e, t) => {
    e.frame || _(!1);
    let r = e.frame,
      s = de(t, r.scroll.initial),
      i = _t(s),
      o = {
        ...r,
        scroll: {
          initial: r.scroll.initial,
          current: t,
          diff: { value: s, displacement: i },
          max: r.scroll.max,
        },
      },
      n = ft({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: o,
      });
    return { ...e, frame: o, subject: n };
  },
  $a = Z((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  Qa = Z((e) => e.reduce((t, r) => ((t[r.descriptor.id] = r), t), {})),
  $r = Z((e) => Object.values(e)),
  ap = Z((e) => Object.values(e)),
  bt = Z((e, t) =>
    ap(t)
      .filter((s) => e === s.descriptor.droppableId)
      .sort((s, i) => s.descriptor.index - i.descriptor.index),
  );
function Ri(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Qr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Kr = Z((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)),
  lp = ({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: s,
    previousImpact: i,
  }) => {
    if (!r.isCombineEnabled || !Ri(i)) return null;
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
    let c = Kr(t, s);
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
  yt = (e, t) => e.descriptor.droppableId === t.descriptor.id,
  Ka = { point: te, value: 0 },
  Ut = { invisible: {}, visible: {}, all: [] },
  cp = { displaced: Ut, displacedBy: Ka, at: null },
  up = cp,
  Se = (e, t) => (r) => e <= r && r <= t,
  Ya = (e) => {
    let t = Se(e.top, e.bottom),
      r = Se(e.left, e.right);
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
  dp = (e) => {
    let t = Se(e.top, e.bottom),
      r = Se(e.left, e.right);
    return (s) => t(s.top) && t(s.bottom) && r(s.left) && r(s.right);
  },
  Ii = {
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
  Xa = {
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
  pp = (e) => (t) => {
    let r = Se(t.top, t.bottom),
      s = Se(t.left, t.right);
    return (i) =>
      e === Ii ? r(i.top) && r(i.bottom) : s(i.left) && s(i.right);
  },
  mp = (e, t) => {
    let r = t.frame ? t.frame.scroll.diff.displacement : te;
    return Jt(e, r);
  },
  fp = (e, t, r) => (t.subject.active ? r(t.subject.active)(e) : !1),
  hp = (e, t, r) => r(t)(e),
  wi = ({
    target: e,
    destination: t,
    viewport: r,
    withDroppableDisplacement: s,
    isVisibleThroughFrameFn: i,
  }) => {
    let o = s ? mp(e, t) : e;
    return fp(o, t, i) && hp(o, r, i);
  },
  gp = (e) => wi({ ...e, isVisibleThroughFrameFn: Ya }),
  Ja = (e) => wi({ ...e, isVisibleThroughFrameFn: dp }),
  _p = (e) => wi({ ...e, isVisibleThroughFrameFn: pp(e.destination.axis) }),
  bp = (e, t, r) => {
    if (typeof r == "boolean") return r;
    if (!t) return !0;
    let { invisible: s, visible: i } = t;
    if (s[e]) return !1;
    let o = i[e];
    return o ? o.shouldAnimate : !0;
  };
function yp(e, t) {
  let r = e.page.marginBox,
    s = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return ve(Gr(r, s));
}
function qt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: s,
  forceShouldAnimate: i,
  last: o,
}) {
  return e.reduce(
    function (a, l) {
      let c = yp(l, r),
        p = l.descriptor.id;
      if (
        (a.all.push(p),
        !gp({
          target: c,
          destination: t,
          viewport: s,
          withDroppableDisplacement: !0,
        }))
      )
        return (a.invisible[l.descriptor.id] = !0), a;
      let d = bp(p, o, i),
        m = { draggableId: p, shouldAnimate: d };
      return (a.visible[p] = m), a;
    },
    { all: [], visible: {}, invisible: {} },
  );
}
function vp(e, t) {
  if (!e.length) return 0;
  let r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function va({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: s,
}) {
  let i = vp(e, { inHomeList: t });
  return {
    displaced: Ut,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: { droppableId: s.descriptor.id, index: i },
    },
  };
}
function Ur({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: s,
  displacedBy: i,
  last: o,
  index: n,
  forceShouldAnimate: a,
}) {
  let l = yt(e, r);
  if (n == null)
    return va({
      insideDestination: t,
      inHomeList: l,
      displacedBy: i,
      destination: r,
    });
  let c = t.find((f) => f.descriptor.index === n);
  if (!c)
    return va({
      insideDestination: t,
      inHomeList: l,
      displacedBy: i,
      destination: r,
    });
  let p = Kr(e, t),
    u = t.indexOf(c),
    d = p.slice(u);
  return {
    displaced: qt({
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
function Ve(e, t) {
  return !!t.effected[e];
}
var Cp = ({
    isMovingForward: e,
    destination: t,
    draggables: r,
    combine: s,
    afterCritical: i,
  }) => {
    if (!t.isCombineEnabled) return null;
    let o = s.draggableId,
      a = r[o].descriptor.index;
    return Ve(o, i) ? (e ? a : a - 1) : e ? a + 1 : a;
  },
  Sp = ({
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
  Wp = ({
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
      let u = Sp({
        isMovingForward: e,
        isInHomeList: t,
        location: c.destination,
        insideDestination: o,
      });
      return u == null
        ? null
        : Ur({
            draggable: r,
            insideDestination: o,
            destination: i,
            viewport: a,
            last: n.displaced,
            displacedBy: n.displacedBy,
            index: u,
          });
    }
    let p = Cp({
      isMovingForward: e,
      destination: i,
      displaced: n.displaced,
      draggables: s,
      combine: c.combine,
      afterCritical: l,
    });
    return p == null
      ? null
      : Ur({
          draggable: r,
          insideDestination: o,
          destination: i,
          viewport: a,
          last: n.displaced,
          displacedBy: n.displacedBy,
          index: p,
        });
  },
  Rp = ({ displaced: e, afterCritical: t, combineWith: r, displacedBy: s }) => {
    let i = !!(e.visible[r] || e.invisible[r]);
    return Ve(r, t) ? (i ? te : _t(s.point)) : i ? s.point : te;
  },
  Ip = ({ afterCritical: e, impact: t, draggables: r }) => {
    let s = Qr(t);
    s || _(!1);
    let i = s.draggableId,
      o = r[i].page.borderBox.center,
      n = Rp({
        displaced: t.displaced,
        afterCritical: e,
        combineWith: i,
        displacedBy: t.displacedBy,
      });
    return se(o, n);
  },
  Za = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
  wp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
  Pi = (e, t, r) =>
    t[e.crossAxisStart] +
    r.margin[e.crossAxisStart] +
    r.borderBox[e.crossAxisSize] / 2,
  Ca = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    Ze(e.line, t.marginBox[e.end] + Za(e, r), Pi(e, t.marginBox, r)),
  Sa = ({ axis: e, moveRelativeTo: t, isMoving: r }) =>
    Ze(e.line, t.marginBox[e.start] - wp(e, r), Pi(e, t.marginBox, r)),
  Pp = ({ axis: e, moveInto: t, isMoving: r }) =>
    Ze(e.line, t.contentBox[e.start] + Za(e, r), Pi(e, t.contentBox, r)),
  xp = ({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: s,
    afterCritical: i,
  }) => {
    let o = bt(s.descriptor.id, r),
      n = t.page,
      a = s.axis;
    if (!o.length) return Pp({ axis: a, moveInto: s.page, isMoving: n });
    let { displaced: l, displacedBy: c } = e,
      p = l.all[0];
    if (p) {
      let d = r[p];
      if (Ve(p, i)) return Sa({ axis: a, moveRelativeTo: d.page, isMoving: n });
      let m = Mt(d.page, c.point);
      return Sa({ axis: a, moveRelativeTo: m, isMoving: n });
    }
    let u = o[o.length - 1];
    if (u.descriptor.id === t.descriptor.id) return n.borderBox.center;
    if (Ve(u.descriptor.id, i)) {
      let d = Mt(u.page, _t(i.displacedBy.point));
      return Ca({ axis: a, moveRelativeTo: d, isMoving: n });
    }
    return Ca({ axis: a, moveRelativeTo: u.page, isMoving: n });
  },
  gi = (e, t) => {
    let r = e.frame;
    return r ? se(t, r.scroll.diff.displacement) : t;
  },
  Dp = ({
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
        ? xp({
            impact: e,
            draggable: t,
            draggables: s,
            droppable: r,
            afterCritical: i,
          })
        : Ip({ impact: e, draggables: s, afterCritical: i });
  },
  Yr = (e) => {
    let t = Dp(e),
      r = e.droppable;
    return r ? gi(r, t) : t;
  },
  el = (e, t) => {
    let r = de(t, e.scroll.initial),
      s = _t(r);
    return {
      frame: ve({
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
function Wa(e, t) {
  return e.map((r) => t[r]);
}
function Ep(e, t) {
  for (let r = 0; r < t.length; r++) {
    let s = t[r].visible[e];
    if (s) return s;
  }
  return null;
}
var Bp = ({
    impact: e,
    viewport: t,
    destination: r,
    draggables: s,
    maxScrollChange: i,
  }) => {
    let o = el(t, se(t.scroll.current, i)),
      n = r.frame ? Wi(r, se(r.frame.scroll.current, i)) : r,
      a = e.displaced,
      l = qt({
        afterDragging: Wa(a.all, s),
        destination: r,
        displacedBy: e.displacedBy,
        viewport: o.frame,
        last: a,
        forceShouldAnimate: !1,
      }),
      c = qt({
        afterDragging: Wa(a.all, s),
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
        let g = Ep(f, d);
        if (g) {
          u[f] = g;
          return;
        }
        p[f] = !0;
      }),
      { ...e, displaced: { all: a.all, invisible: p, visible: u } }
    );
  },
  Fp = (e, t) => se(e.scroll.diff.displacement, t),
  xi = ({ pageBorderBoxCenter: e, draggable: t, viewport: r }) => {
    let s = Fp(r, e),
      i = de(s, t.page.borderBox.center);
    return se(t.client.borderBox.center, i);
  },
  tl = ({
    draggable: e,
    destination: t,
    newPageBorderBoxCenter: r,
    viewport: s,
    withDroppableDisplacement: i,
    onlyOnMainAxis: o = !1,
  }) => {
    let n = de(r, e.page.borderBox.center),
      l = {
        target: Jt(e.page.borderBox, n),
        destination: t,
        withDroppableDisplacement: i,
        viewport: s,
      };
    return o ? _p(l) : Ja(l);
  },
  Np = ({
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
    let c = bt(r.descriptor.id, s),
      p = yt(t, r),
      u =
        lp({
          isMovingForward: e,
          draggable: t,
          destination: r,
          insideDestination: c,
          previousImpact: i,
        }) ||
        Wp({
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
    let d = Yr({
      impact: u,
      draggable: t,
      droppable: r,
      draggables: s,
      afterCritical: l,
    });
    if (
      tl({
        draggable: t,
        destination: r,
        newPageBorderBoxCenter: d,
        viewport: o.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: xi({
          pageBorderBoxCenter: d,
          draggable: t,
          viewport: o,
        }),
        impact: u,
        scrollJumpRequest: null,
      };
    let f = de(d, n),
      g = Bp({
        impact: u,
        viewport: o,
        destination: r,
        draggables: s,
        maxScrollChange: f,
      });
    return { clientSelection: a, impact: g, scrollJumpRequest: f };
  },
  ae = (e) => {
    let t = e.subject.active;
    return t || _(!1), t;
  },
  Op = ({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: s,
    viewport: i,
  }) => {
    let o = r.subject.active;
    if (!o) return null;
    let n = r.axis,
      a = Se(o[n.start], o[n.end]),
      l = $r(s)
        .filter((p) => p !== r)
        .filter((p) => p.isEnabled)
        .filter((p) => !!p.subject.active)
        .filter((p) => Ya(i.frame)(ae(p)))
        .filter((p) => {
          let u = ae(p);
          return e
            ? o[n.crossAxisEnd] < u[n.crossAxisEnd]
            : u[n.crossAxisStart] < o[n.crossAxisStart];
        })
        .filter((p) => {
          let u = ae(p),
            d = Se(u[n.start], u[n.end]);
          return a(u[n.start]) || a(u[n.end]) || d(o[n.start]) || d(o[n.end]);
        })
        .sort((p, u) => {
          let d = ae(p)[n.crossAxisStart],
            m = ae(u)[n.crossAxisStart];
          return e ? d - m : m - d;
        })
        .filter(
          (p, u, d) => ae(p)[n.crossAxisStart] === ae(d[0])[n.crossAxisStart],
        );
    if (!l.length) return null;
    if (l.length === 1) return l[0];
    let c = l.filter((p) => Se(ae(p)[n.start], ae(p)[n.end])(t[n.line]));
    return c.length === 1
      ? c[0]
      : c.length > 1
        ? c.sort((p, u) => ae(p)[n.start] - ae(u)[n.start])[0]
        : l.sort((p, u) => {
            let d = ba(t, ya(ae(p))),
              m = ba(t, ya(ae(u)));
            return d !== m ? d - m : ae(p)[n.start] - ae(u)[n.start];
          })[0];
  },
  Ra = (e, t) => {
    let r = e.page.borderBox.center;
    return Ve(e.descriptor.id, t) ? de(r, t.displacedBy.point) : r;
  },
  Ap = (e, t) => {
    let r = e.page.borderBox;
    return Ve(e.descriptor.id, t) ? Jt(r, _t(t.displacedBy.point)) : r;
  },
  Tp = ({
    pageBorderBoxCenter: e,
    viewport: t,
    destination: r,
    insideDestination: s,
    afterCritical: i,
  }) =>
    s
      .filter((n) =>
        Ja({
          target: Ap(n, i),
          destination: r,
          viewport: t.frame,
          withDroppableDisplacement: !0,
        }),
      )
      .sort((n, a) => {
        let l = jt(e, gi(r, Ra(n, i))),
          c = jt(e, gi(r, Ra(a, i)));
        return l < c ? -1 : c < l ? 1 : n.descriptor.index - a.descriptor.index;
      })[0] || null,
  Zt = Z(function (t, r) {
    let s = r[t.line];
    return { value: s, point: Ze(t.line, s) };
  }),
  Mp = (e, t, r) => {
    let s = e.axis;
    if (e.descriptor.mode === "virtual") return Ze(s.line, t[s.line]);
    let i = e.subject.page.contentBox[s.size],
      l =
        bt(e.descriptor.id, r).reduce(
          (c, p) => c + p.client.marginBox[s.size],
          0,
        ) +
        t[s.line] -
        i;
    return l <= 0 ? null : Ze(s.line, l);
  },
  rl = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
  sl = (e, t, r) => {
    let s = e.frame;
    yt(t, e) && _(!1), e.subject.withPlaceholder && _(!1);
    let i = Zt(e.axis, t.displaceBy).point,
      o = Mp(e, i, r),
      n = {
        placeholderSize: i,
        increasedBy: o,
        oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
      };
    if (!s) {
      let p = ft({
        page: e.subject.page,
        withPlaceholder: n,
        axis: e.axis,
        frame: e.frame,
      });
      return { ...e, subject: p };
    }
    let a = o ? se(s.scroll.max, o) : s.scroll.max,
      l = rl(s, a),
      c = ft({
        page: e.subject.page,
        withPlaceholder: n,
        axis: e.axis,
        frame: l,
      });
    return { ...e, subject: c, frame: l };
  },
  Gp = (e) => {
    let t = e.subject.withPlaceholder;
    t || _(!1);
    let r = e.frame;
    if (!r) {
      let n = ft({
        page: e.subject.page,
        axis: e.axis,
        frame: null,
        withPlaceholder: null,
      });
      return { ...e, subject: n };
    }
    let s = t.oldFrameMaxScroll;
    s || _(!1);
    let i = rl(r, s),
      o = ft({
        page: e.subject.page,
        axis: e.axis,
        frame: i,
        withPlaceholder: null,
      });
    return { ...e, subject: o, frame: i };
  },
  Lp = ({
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
          displaced: Ut,
          displacedBy: Ka,
          at: {
            type: "REORDER",
            destination: { droppableId: o.descriptor.id, index: 0 },
          },
        },
        d = Yr({
          impact: u,
          draggable: s,
          droppable: o,
          draggables: i,
          afterCritical: a,
        }),
        m = yt(s, o) ? o : sl(o, s, i);
      return tl({
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
      p = Zt(o.axis, s.displaceBy);
    return Ur({
      draggable: s,
      insideDestination: r,
      destination: o,
      viewport: n,
      displacedBy: p,
      last: Ut,
      index: c,
    });
  },
  kp = ({
    isMovingForward: e,
    previousPageBorderBoxCenter: t,
    draggable: r,
    isOver: s,
    draggables: i,
    droppables: o,
    viewport: n,
    afterCritical: a,
  }) => {
    let l = Op({
      isMovingForward: e,
      pageBorderBoxCenter: t,
      source: s,
      droppables: o,
      viewport: n,
    });
    if (!l) return null;
    let c = bt(l.descriptor.id, i),
      p = Tp({
        pageBorderBoxCenter: t,
        viewport: n,
        destination: l,
        insideDestination: c,
        afterCritical: a,
      }),
      u = Lp({
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
    let d = Yr({
      impact: u,
      draggable: r,
      droppable: l,
      draggables: i,
      afterCritical: a,
    });
    return {
      clientSelection: xi({
        pageBorderBoxCenter: d,
        draggable: r,
        viewport: n,
      }),
      impact: u,
      scrollJumpRequest: null,
    };
  },
  pe = (e) => {
    let t = e.at;
    return t
      ? t.type === "REORDER"
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  },
  Hp = (e, t) => {
    let r = pe(e);
    return r ? t[r] : null;
  },
  zp = ({ state: e, type: t }) => {
    let r = Hp(e.impact, e.dimensions.droppables),
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
      ? Np({
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
      : kp({
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
function Xe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function il(e) {
  let t = Se(e.top, e.bottom),
    r = Se(e.left, e.right);
  return function (i) {
    return t(i.y) && r(i.x);
  };
}
function Vp(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function jp({ pageBorderBox: e, draggable: t, candidates: r }) {
  let s = t.page.borderBox.center,
    i = r
      .map((o) => {
        let n = o.axis,
          a = Ze(
            o.axis.line,
            e.center[n.line],
            o.page.borderBox.center[n.crossAxisLine],
          );
        return { id: o.descriptor.id, distance: jt(s, a) };
      })
      .sort((o, n) => n.distance - o.distance);
  return i[0] ? i[0].id : null;
}
function Up({ pageBorderBox: e, draggable: t, droppables: r }) {
  let s = $r(r).filter((i) => {
    if (!i.isEnabled) return !1;
    let o = i.subject.active;
    if (!o || !Vp(e, o)) return !1;
    if (il(o)(e.center)) return !0;
    let n = i.axis,
      a = o.center[n.crossAxisLine],
      l = e[n.crossAxisStart],
      c = e[n.crossAxisEnd],
      p = Se(o[n.crossAxisStart], o[n.crossAxisEnd]),
      u = p(l),
      d = p(c);
    return !u && !d ? !0 : u ? l < a : c > a;
  });
  return s.length
    ? s.length === 1
      ? s[0].descriptor.id
      : jp({ pageBorderBox: e, draggable: t, candidates: s })
    : null;
}
var ol = (e, t) => ve(Jt(e, t)),
  qp = (e, t) => {
    let r = e.frame;
    return r ? ol(t, r.scroll.diff.value) : t;
  };
function nl({ displaced: e, id: t }) {
  return !!(e.visible[t] || e.invisible[t]);
}
function $p({ draggable: e, closest: t, inHomeList: r }) {
  return t
    ? r && t.descriptor.index > e.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var Qp = ({
    pageBorderBoxWithDroppableScroll: e,
    draggable: t,
    destination: r,
    insideDestination: s,
    last: i,
    viewport: o,
    afterCritical: n,
  }) => {
    let a = r.axis,
      l = Zt(r.axis, t.displaceBy),
      c = l.value,
      p = e[a.start],
      u = e[a.end],
      m =
        Kr(t, s).find((g) => {
          let h = g.descriptor.id,
            S = g.page.borderBox.center[a.line],
            W = Ve(h, n),
            P = nl({ displaced: i, id: h });
          return W ? (P ? u <= S : p < S - c) : P ? u <= S + c : p < S;
        }) || null,
      f = $p({ draggable: t, closest: m, inHomeList: yt(t, r) });
    return Ur({
      draggable: t,
      insideDestination: s,
      destination: r,
      viewport: o,
      last: i,
      displacedBy: l,
      index: f,
    });
  },
  Kp = 4,
  Yp = ({
    draggable: e,
    pageBorderBoxWithDroppableScroll: t,
    previousImpact: r,
    destination: s,
    insideDestination: i,
    afterCritical: o,
  }) => {
    if (!s.isCombineEnabled) return null;
    let n = s.axis,
      a = Zt(s.axis, e.displaceBy),
      l = a.value,
      c = t[n.start],
      p = t[n.end],
      d = Kr(e, i).find((f) => {
        let g = f.descriptor.id,
          h = f.page.borderBox,
          W = h[n.size] / Kp,
          P = Ve(g, o),
          w = nl({ displaced: r.displaced, id: g });
        return P
          ? w
            ? p > h[n.start] + W && p < h[n.end] - W
            : c > h[n.start] - l + W && c < h[n.end] - l - W
          : w
            ? p > h[n.start] + l + W && p < h[n.end] + l - W
            : c > h[n.start] + W && c < h[n.end] - W;
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
  al = ({
    pageOffset: e,
    draggable: t,
    draggables: r,
    droppables: s,
    previousImpact: i,
    viewport: o,
    afterCritical: n,
  }) => {
    let a = ol(t.page.borderBox, e),
      l = Up({ pageBorderBox: a, draggable: t, droppables: s });
    if (!l) return up;
    let c = s[l],
      p = bt(c.descriptor.id, r),
      u = qp(c, a);
    return (
      Yp({
        pageBorderBoxWithDroppableScroll: u,
        draggable: t,
        previousImpact: i,
        destination: c,
        insideDestination: p,
        afterCritical: n,
      }) ||
      Qp({
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
  Di = (e, t) => ({ ...e, [t.descriptor.id]: t }),
  Xp = ({ previousImpact: e, impact: t, droppables: r }) => {
    let s = pe(e),
      i = pe(t);
    if (!s || s === i) return r;
    let o = r[s];
    if (!o.subject.withPlaceholder) return r;
    let n = Gp(o);
    return Di(r, n);
  },
  Jp = ({
    draggable: e,
    draggables: t,
    droppables: r,
    previousImpact: s,
    impact: i,
  }) => {
    let o = Xp({ previousImpact: s, impact: i, droppables: r }),
      n = pe(i);
    if (!n) return o;
    let a = r[n];
    if (yt(e, a) || a.subject.withPlaceholder) return o;
    let l = sl(a, e, t);
    return Di(o, l);
  },
  zt = ({
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
      c = de(l, e.initial.client.selection),
      p = {
        offset: c,
        selection: l,
        borderBoxCenter: se(e.initial.client.borderBoxCenter, c),
      },
      u = {
        selection: se(p.selection, n.scroll.current),
        borderBoxCenter: se(p.borderBoxCenter, n.scroll.current),
        offset: se(p.offset, n.scroll.diff.value),
      },
      d = { client: p, page: u };
    if (e.phase === "COLLECTING")
      return { ...e, dimensions: a, viewport: n, current: d };
    let m = a.draggables[e.critical.draggable.id],
      f =
        i ||
        al({
          pageOffset: u.offset,
          draggable: m,
          draggables: a.draggables,
          droppables: a.droppables,
          previousImpact: e.impact,
          viewport: n,
          afterCritical: e.afterCritical,
        }),
      g = Jp({
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
function Zp(e, t) {
  return e.map((r) => t[r]);
}
var ll = ({
    impact: e,
    viewport: t,
    draggables: r,
    destination: s,
    forceShouldAnimate: i,
  }) => {
    let o = e.displaced,
      n = Zp(o.all, r),
      a = qt({
        afterDragging: n,
        destination: s,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: i,
        last: o,
      });
    return { ...e, displaced: a };
  },
  cl = ({
    impact: e,
    draggable: t,
    droppable: r,
    draggables: s,
    viewport: i,
    afterCritical: o,
  }) => {
    let n = Yr({
      impact: e,
      draggable: t,
      draggables: s,
      droppable: r,
      afterCritical: o,
    });
    return xi({ pageBorderBoxCenter: n, draggable: t, viewport: i });
  },
  ul = ({ state: e, dimensions: t, viewport: r }) => {
    e.movementMode !== "SNAP" && _(!1);
    let s = e.impact,
      i = r || e.viewport,
      o = t || e.dimensions,
      { draggables: n, droppables: a } = o,
      l = n[e.critical.draggable.id],
      c = pe(s);
    c || _(!1);
    let p = a[c],
      u = ll({ impact: s, viewport: i, destination: p, draggables: n }),
      d = cl({
        impact: u,
        draggable: l,
        droppable: p,
        draggables: n,
        viewport: i,
        afterCritical: e.afterCritical,
      });
    return zt({
      impact: u,
      clientSelection: d,
      state: e,
      dimensions: o,
      viewport: i,
    });
  },
  em = (e) => ({ index: e.index, droppableId: e.droppableId }),
  dl = ({ draggable: e, home: t, draggables: r, viewport: s }) => {
    let i = Zt(t.axis, e.displaceBy),
      o = bt(t.descriptor.id, r),
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
        displaced: qt({
          afterDragging: a,
          destination: t,
          displacedBy: i,
          last: null,
          viewport: s.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: i,
        at: { type: "REORDER", destination: em(e.descriptor) },
      },
      afterCritical: c,
    };
  },
  tm = (e, t) => ({
    draggables: e.draggables,
    droppables: Di(e.droppables, t),
  }),
  er = (e) => {},
  tr = (e) => {},
  rm = ({ draggable: e, offset: t, initialWindowScroll: r }) => {
    let s = Mt(e.client, t),
      i = Gt(s, r);
    return {
      ...e,
      placeholder: { ...e.placeholder, client: s },
      client: s,
      page: i,
    };
  },
  sm = (e) => {
    let t = e.frame;
    return t || _(!1), t;
  },
  im = ({ additions: e, updatedDroppables: t, viewport: r }) => {
    let s = r.scroll.diff.value;
    return e.map((i) => {
      let o = i.descriptor.droppableId,
        n = t[o],
        l = sm(n).scroll.diff.value,
        c = se(s, l);
      return rm({
        draggable: i,
        offset: c,
        initialWindowScroll: r.scroll.initial,
      });
    });
  },
  om = "Processing dynamic changes",
  nm = ({ state: e, published: t }) => {
    er();
    let r = t.modified.map((S) => {
        let W = e.dimensions.droppables[S.droppableId];
        return Wi(W, S.scroll);
      }),
      s = { ...e.dimensions.droppables, ...$a(r) },
      i = Qa(
        im({
          additions: t.additions,
          updatedDroppables: s,
          viewport: e.viewport,
        }),
      ),
      o = { ...e.dimensions.draggables, ...i };
    t.removals.forEach((S) => {
      delete o[S];
    });
    let n = { droppables: s, draggables: o },
      a = pe(e.impact),
      l = a ? n.droppables[a] : null,
      c = n.draggables[e.critical.draggable.id],
      p = n.droppables[e.critical.droppable.id],
      { impact: u, afterCritical: d } = dl({
        draggable: c,
        home: p,
        draggables: o,
        viewport: e.viewport,
      }),
      m = l && l.isCombineEnabled ? e.impact : u,
      f = al({
        pageOffset: e.current.page.offset,
        draggable: n.draggables[e.critical.draggable.id],
        draggables: n.draggables,
        droppables: n.droppables,
        previousImpact: m,
        viewport: e.viewport,
        afterCritical: d,
      });
    tr(om);
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
  _i = (e) => e.movementMode === "SNAP",
  oi = (e, t, r) => {
    let s = tm(e.dimensions, t);
    return !_i(e) || r
      ? zt({ state: e, dimensions: s })
      : ul({ state: e, dimensions: s });
  };
function ni(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? { ...e, scrollJumpRequest: null }
    : e;
}
var Ia = { phase: "IDLE", completed: null, shouldFlush: !1 },
  am = (e = Ia, t) => {
    if (t.type === "FLUSH") return { ...Ia, shouldFlush: !0 };
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
          offset: te,
        },
        p = {
          client: c,
          page: {
            selection: se(c.selection, i.scroll.initial),
            borderBoxCenter: se(c.selection, i.scroll.initial),
            offset: se(c.selection, i.scroll.diff.value),
          },
        },
        u = $r(o.droppables).every((g) => !g.isFixedOnPage),
        { impact: d, afterCritical: m } = dl({
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
        nm({ state: e, published: t.payload })
      );
    if (t.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      Xe(e) || _(!1);
      let { client: r } = t.payload;
      return ze(r, e.current.client.selection)
        ? e
        : zt({ state: e, clientSelection: r, impact: _i(e) ? e.impact : null });
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return ni(e);
      Xe(e) || _(!1);
      let { id: r, newScroll: s } = t.payload,
        i = e.dimensions.droppables[r];
      if (!i) return e;
      let o = Wi(i, s);
      return oi(e, o, !1);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Xe(e) || _(!1);
      let { id: r, isEnabled: s } = t.payload,
        i = e.dimensions.droppables[r];
      i || _(!1), i.isEnabled === s && _(!1);
      let o = { ...i, isEnabled: s };
      return oi(e, o, !0);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Xe(e) || _(!1);
      let { id: r, isCombineEnabled: s } = t.payload,
        i = e.dimensions.droppables[r];
      i || _(!1), i.isCombineEnabled === s && _(!1);
      let o = { ...i, isCombineEnabled: s };
      return oi(e, o, !0);
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      Xe(e) || _(!1), e.isWindowScrollAllowed || _(!1);
      let r = t.payload.newScroll;
      if (ze(e.viewport.scroll.current, r)) return ni(e);
      let s = el(e.viewport, r);
      return _i(e)
        ? ul({ state: e, viewport: s })
        : zt({ state: e, viewport: s });
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!Xe(e)) return e;
      let r = t.payload.maxScroll;
      if (ze(r, e.viewport.scroll.max)) return e;
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
      let r = zp({ state: e, type: t.type });
      return r
        ? zt({
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
  lm = (e) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: e }),
  cm = (e) => ({ type: "LIFT", payload: e }),
  um = (e) => ({ type: "INITIAL_PUBLISH", payload: e }),
  dm = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
  pm = () => ({ type: "COLLECTION_STARTING", payload: null }),
  mm = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
  fm = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
  hm = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
  pl = (e) => ({ type: "MOVE", payload: e }),
  gm = (e) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: e }),
  _m = (e) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e }),
  bm = () => ({ type: "MOVE_UP", payload: null }),
  ym = () => ({ type: "MOVE_DOWN", payload: null }),
  vm = () => ({ type: "MOVE_RIGHT", payload: null }),
  Cm = () => ({ type: "MOVE_LEFT", payload: null }),
  Ei = () => ({ type: "FLUSH", payload: null }),
  Sm = (e) => ({ type: "DROP_ANIMATE", payload: e }),
  Bi = (e) => ({ type: "DROP_COMPLETE", payload: e }),
  ml = (e) => ({ type: "DROP", payload: e }),
  Wm = (e) => ({ type: "DROP_PENDING", payload: e }),
  fl = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
var Rm =
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
      l.phase === "DROP_ANIMATING" && r(Bi({ completed: l.completed })),
        t().phase !== "IDLE" && _(!1),
        r(Ei()),
        r(lm({ draggableId: o, movementMode: a }));
      let p = {
          draggableId: o,
          scrollOptions: { shouldPublishImmediately: a === "SNAP" },
        },
        { critical: u, dimensions: d, viewport: m } = e.startPublishing(p);
      r(
        um({
          critical: u,
          dimensions: d,
          clientSelection: n,
          movementMode: a,
          viewport: m,
        }),
      );
    },
  Im = (e) => () => (t) => (r) => {
    r.type === "INITIAL_PUBLISH" && e.dragging(),
      r.type === "DROP_ANIMATE" &&
        e.dropping(r.payload.completed.result.reason),
      (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
      t(r);
  },
  Fi = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  $t = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  hl = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  Ye = `${hl.outOfTheWay}s ${Fi.outOfTheWay}`,
  Vt = {
    fluid: `opacity ${Ye}`,
    snap: `transform ${Ye}, opacity ${Ye}`,
    drop: (e) => {
      let t = `${e}s ${Fi.drop}`;
      return `transform ${t}, opacity ${t}`;
    },
    outOfTheWay: `transform ${Ye}`,
    placeholder: `height ${Ye}, width ${Ye}, margin ${Ye}`,
  },
  wa = (e) => (ze(e, te) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
  bi = {
    moveTo: wa,
    drop: (e, t) => {
      let r = wa(e);
      if (r) return t ? `${r} scale(${$t.scale.drop})` : r;
    },
  },
  { minDropTime: yi, maxDropTime: gl } = hl,
  wm = gl - yi,
  Pa = 1500,
  Pm = 0.6,
  xm = ({ current: e, destination: t, reason: r }) => {
    let s = jt(e, t);
    if (s <= 0) return yi;
    if (s >= Pa) return gl;
    let i = s / Pa,
      o = yi + wm * i,
      n = r === "CANCEL" ? o * Pm : o;
    return Number(n.toFixed(2));
  },
  Dm = ({
    impact: e,
    draggable: t,
    dimensions: r,
    viewport: s,
    afterCritical: i,
  }) => {
    let { draggables: o, droppables: n } = r,
      a = pe(e),
      l = a ? n[a] : null,
      c = n[t.descriptor.droppableId],
      p = cl({
        impact: e,
        draggable: t,
        draggables: o,
        afterCritical: i,
        droppable: l || c,
        viewport: s,
      });
    return de(p, t.client.borderBox.center);
  },
  Em = ({
    draggables: e,
    reason: t,
    lastImpact: r,
    home: s,
    viewport: i,
    onLiftImpact: o,
  }) =>
    !r.at || t !== "DROP"
      ? {
          impact: ll({
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
        : { impact: { ...r, displaced: Ut }, didDropInsideDroppable: !0 },
  Bm =
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
        t(Wm({ reason: o }));
        return;
      }
      if (i.phase === "IDLE") return;
      i.phase === "DROP_PENDING" && i.isWaiting && _(!1),
        i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || _(!1);
      let a = i.critical,
        l = i.dimensions,
        c = l.draggables[i.critical.draggable.id],
        { impact: p, didDropInsideDroppable: u } = Em({
          reason: o,
          lastImpact: i.impact,
          afterCritical: i.afterCritical,
          onLiftImpact: i.onLiftImpact,
          home: i.dimensions.droppables[i.critical.droppable.id],
          viewport: i.viewport,
          draggables: i.dimensions.draggables,
        }),
        d = u ? Ri(p) : null,
        m = u ? Qr(p) : null,
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
        h = Dm({
          impact: p,
          draggable: c,
          dimensions: l,
          viewport: i.viewport,
          afterCritical: i.afterCritical,
        }),
        S = {
          critical: i.critical,
          afterCritical: i.afterCritical,
          result: g,
          impact: p,
        };
      if (!(!ze(i.current.client.offset, h) || !!g.combine)) {
        t(Bi({ completed: S }));
        return;
      }
      let P = xm({
        current: i.current.client.offset,
        destination: h,
        reason: o,
      });
      t(Sm({ newHomeClientOffset: h, dropDuration: P, completed: S }));
    },
  Fm = Bm,
  _l = () => ({ x: window.pageXOffset, y: window.pageYOffset });
function Nm(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: (t) => {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function Om({ onWindowScroll: e }) {
  function t() {
    e(_l());
  }
  let r = mt(t),
    s = Nm(r),
    i = He;
  function o() {
    return i !== He;
  }
  function n() {
    o() && _(!1), (i = Ce(window, [s]));
  }
  function a() {
    o() || _(!1), r.cancel(), i(), (i = He);
  }
  return { start: n, stop: a, isActive: o };
}
var Am = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  Tm = (e) => {
    let t = Om({
      onWindowScroll: (r) => {
        e.dispatch(gm({ newScroll: r }));
      },
    });
    return (r) => (s) => {
      !t.isActive() && s.type === "INITIAL_PUBLISH" && t.start(),
        t.isActive() && Am(s) && t.stop(),
        r(s);
    };
  },
  Mm = Tm,
  Gm = (e) => {
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
  Lm = () => {
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
  km = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.droppableId === t.droppableId && e.index === t.index,
  Hm = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.draggableId === t.draggableId && e.droppableId === t.droppableId,
  zm = (e, t) => {
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
  Lt = (e, t) => {
    er(), t(), tr();
  },
  kr = (e, t) => ({
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: { droppableId: e.droppable.id, index: e.draggable.index },
    mode: t,
  });
function ai(e, t, r, s) {
  if (!e) {
    r(s(t));
    return;
  }
  let i = Gm(r);
  e(t, { announce: i }), i.wasCalled() || r(s(t));
}
var Vm = (e, t) => {
    let r = Lm(),
      s = null,
      i = (u, d) => {
        s && _(!1),
          Lt("onBeforeCapture", () => {
            let m = e().onBeforeCapture;
            m && m({ draggableId: u, mode: d });
          });
      },
      o = (u, d) => {
        s && _(!1),
          Lt("onBeforeDragStart", () => {
            let m = e().onBeforeDragStart;
            m && m(kr(u, d));
          });
      },
      n = (u, d) => {
        s && _(!1);
        let m = kr(u, d);
        (s = {
          mode: d,
          lastCritical: u,
          lastLocation: m.source,
          lastCombine: null,
        }),
          r.add(() => {
            Lt("onDragStart", () => ai(e().onDragStart, m, t, Vr.onDragStart));
          });
      },
      a = (u, d) => {
        let m = Ri(d),
          f = Qr(d);
        s || _(!1);
        let g = !zm(u, s.lastCritical);
        g && (s.lastCritical = u);
        let h = !km(s.lastLocation, m);
        h && (s.lastLocation = m);
        let S = !Hm(s.lastCombine, f);
        if ((S && (s.lastCombine = f), !g && !h && !S)) return;
        let W = { ...kr(u, s.mode), combine: f, destination: m };
        r.add(() => {
          Lt("onDragUpdate", () => ai(e().onDragUpdate, W, t, Vr.onDragUpdate));
        });
      },
      l = () => {
        s || _(!1), r.flush();
      },
      c = (u) => {
        s || _(!1),
          (s = null),
          Lt("onDragEnd", () => ai(e().onDragEnd, u, t, Vr.onDragEnd));
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
          ...kr(s.lastCritical, s.mode),
          combine: null,
          destination: null,
          reason: "CANCEL",
        };
        c(u);
      },
    };
  },
  jm = (e, t) => {
    let r = Vm(e, t);
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
  Um = (e) => (t) => (r) => {
    if (r.type !== "DROP_ANIMATION_FINISHED") {
      t(r);
      return;
    }
    let s = e.getState();
    s.phase !== "DROP_ANIMATING" && _(!1),
      e.dispatch(Bi({ completed: s.completed }));
  },
  qm = Um,
  $m = (e) => {
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
          e.getState().phase === "DROP_ANIMATING" && e.dispatch(fl());
        },
      };
      r = requestAnimationFrame(() => {
        (r = null), (t = Ce(window, [n]));
      });
    };
  },
  Qm = $m,
  Km = (e) => () => (t) => (r) => {
    (r.type === "DROP_COMPLETE" ||
      r.type === "FLUSH" ||
      r.type === "DROP_ANIMATE") &&
      e.stopPublishing(),
      t(r);
  },
  Ym = (e) => {
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
  Xm = (e) =>
    e.type === "DROP_COMPLETE" ||
    e.type === "DROP_ANIMATE" ||
    e.type === "FLUSH",
  Jm = (e) => (t) => (r) => (s) => {
    if (Xm(s)) {
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
  Zm = (e) => (t) => (r) => {
    if ((t(r), r.type !== "PUBLISH_WHILE_DRAGGING")) return;
    let s = e.getState();
    s.phase === "DROP_PENDING" &&
      (s.isWaiting || e.dispatch(ml({ reason: s.reason })));
  },
  ef = Zm,
  tf = $s,
  rf = ({
    dimensionMarshal: e,
    focusMarshal: t,
    styleMarshal: r,
    getResponders: s,
    announce: i,
    autoScroller: o,
  }) =>
    Us(
      am,
      tf(kn(Im(r), Km(e), Rm(e), Fm, qm, Qm, ef, Jm(o), Mm, Ym(t), jm(s, i))),
    ),
  li = () => ({ additions: {}, removals: {}, modified: {} });
function sf({ registry: e, callbacks: t }) {
  let r = li(),
    s = null,
    i = () => {
      s ||
        (t.collectionStarting(),
        (s = requestAnimationFrame(() => {
          (s = null), er();
          let { additions: l, removals: c, modified: p } = r,
            u = Object.keys(l)
              .map((f) => e.draggable.getById(f).getDimension(te))
              .sort((f, g) => f.descriptor.index - g.descriptor.index),
            d = Object.keys(p).map((f) => {
              let h = e.droppable.getById(f).callbacks.getScrollWhileDragging();
              return { droppableId: f, scroll: h };
            }),
            m = { additions: u, removals: Object.keys(c), modified: d };
          (r = li()), tr(), t.publish(m);
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
      s && (cancelAnimationFrame(s), (s = null), (r = li()));
    },
  };
}
var bl = ({ scrollHeight: e, scrollWidth: t, height: r, width: s }) => {
    let i = de({ x: t, y: e }, { x: s, y: r });
    return { x: Math.max(0, i.x), y: Math.max(0, i.y) };
  },
  yl = () => {
    let e = document.documentElement;
    return e || _(!1), e;
  },
  vl = () => {
    let e = yl();
    return bl({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  of = () => {
    let e = _l(),
      t = vl(),
      r = e.y,
      s = e.x,
      i = yl(),
      o = i.clientWidth,
      n = i.clientHeight,
      a = s + o,
      l = r + n;
    return {
      frame: ve({ top: r, left: s, right: a, bottom: l }),
      scroll: {
        initial: e,
        current: e,
        max: t,
        diff: { value: te, displacement: te },
      },
    };
  },
  nf = ({ critical: e, scrollOptions: t, registry: r }) => {
    er();
    let s = of(),
      i = s.scroll.current,
      o = e.droppable,
      n = r.droppable
        .getAllByType(o.type)
        .map((p) => p.callbacks.getDimensionAndWatchScroll(i, t)),
      a = r.draggable
        .getAllByType(e.draggable.type)
        .map((p) => p.getDimension(i)),
      l = { draggables: Qa(a), droppables: $a(n) };
    return tr(), { dimensions: l, critical: e, viewport: s };
  };
function xa(e, t, r) {
  return !(
    r.descriptor.id === t.id ||
    r.descriptor.type !== t.type ||
    e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual"
  );
}
var af = (e, t) => {
    let r = null,
      s = sf({
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
        d.type === "ADDITION" && xa(e, m, d.value) && s.add(d.value),
          d.type === "REMOVAL" && xa(e, m, d.value) && s.remove(d.value);
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
          nf({ critical: g, registry: e, scrollOptions: d.scrollOptions })
        );
      },
      stopPublishing: l,
    };
  },
  Cl = (e, t) =>
    e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
        ? !1
        : e.completed.result.reason === "DROP",
  lf = (e) => {
    window.scrollBy(e.x, e.y);
  },
  cf = Z((e) => $r(e).filter((t) => !(!t.isEnabled || !t.frame))),
  uf = (e, t) =>
    cf(t).find((s) => (s.frame || _(!1), il(s.frame.pageMarginBox)(e))) || null,
  df = ({ center: e, destination: t, droppables: r }) => {
    if (t) {
      let i = r[t];
      return i.frame ? i : null;
    }
    return uf(e, r);
  },
  Qt = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  },
  pf = (e, t, r = () => Qt) => {
    let s = r(),
      i = e[t.size] * s.startFromPercentage,
      o = e[t.size] * s.maxScrollAtPercentage;
    return { startScrollingFrom: i, maxScrollValueAt: o };
  },
  Sl = ({ startOfRange: e, endOfRange: t, current: r }) => {
    let s = t - e;
    return s === 0 ? 0 : (r - e) / s;
  },
  Ni = 1,
  mf = (e, t, r = () => Qt) => {
    let s = r();
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return s.maxPixelScroll;
    if (e === t.startScrollingFrom) return Ni;
    let o =
        1 -
        Sl({
          startOfRange: t.maxScrollValueAt,
          endOfRange: t.startScrollingFrom,
          current: e,
        }),
      n = s.maxPixelScroll * s.ease(o);
    return Math.ceil(n);
  },
  ff = (e, t, r) => {
    let s = r(),
      i = s.durationDampening.accelerateAt,
      o = s.durationDampening.stopDampeningAt,
      n = t,
      a = o,
      c = Date.now() - n;
    if (c >= o) return e;
    if (c < i) return Ni;
    let p = Sl({ startOfRange: i, endOfRange: a, current: c }),
      u = e * s.ease(p);
    return Math.ceil(u);
  },
  Da = ({
    distanceToEdge: e,
    thresholds: t,
    dragStartTime: r,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: i,
  }) => {
    let o = mf(e, t, i);
    return o === 0 ? 0 : s ? Math.max(ff(o, r, i), Ni) : o;
  },
  Ea = ({
    container: e,
    distanceToEdges: t,
    dragStartTime: r,
    axis: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = pf(e, s, o);
    return t[s.end] < t[s.start]
      ? Da({
          distanceToEdge: t[s.end],
          thresholds: n,
          dragStartTime: r,
          shouldUseTimeDampening: i,
          getAutoScrollerOptions: o,
        })
      : -1 *
          Da({
            distanceToEdge: t[s.start],
            thresholds: n,
            dragStartTime: r,
            shouldUseTimeDampening: i,
            getAutoScrollerOptions: o,
          });
  },
  hf = ({ container: e, subject: t, proposedScroll: r }) => {
    let s = t.height > e.height,
      i = t.width > e.width;
    return !i && !s ? r : i && s ? null : { x: i ? 0 : r.x, y: s ? 0 : r.y };
  },
  gf = qa((e) => (e === 0 ? 0 : e)),
  Wl = ({
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
      a = Ea({
        container: t,
        distanceToEdges: n,
        dragStartTime: e,
        axis: Ii,
        shouldUseTimeDampening: i,
        getAutoScrollerOptions: o,
      }),
      l = Ea({
        container: t,
        distanceToEdges: n,
        dragStartTime: e,
        axis: Xa,
        shouldUseTimeDampening: i,
        getAutoScrollerOptions: o,
      }),
      c = gf({ x: l, y: a });
    if (ze(c, te)) return null;
    let p = hf({ container: t, subject: r, proposedScroll: c });
    return p ? (ze(p, te) ? null : p) : null;
  },
  _f = qa((e) => (e === 0 ? 0 : e > 0 ? 1 : -1)),
  Oi = (() => {
    let e = (t, r) => (t < 0 ? t : t > r ? t - r : 0);
    return ({ current: t, max: r, change: s }) => {
      let i = se(t, s),
        o = { x: e(i.x, r.x), y: e(i.y, r.y) };
      return ze(o, te) ? null : o;
    };
  })(),
  Rl = ({ max: e, current: t, change: r }) => {
    let s = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
      i = _f(r),
      o = Oi({ max: s, current: t, change: i });
    return !o || (i.x !== 0 && o.x === 0) || (i.y !== 0 && o.y === 0);
  },
  Ai = (e, t) =>
    Rl({ current: e.scroll.current, max: e.scroll.max, change: t }),
  bf = (e, t) => {
    if (!Ai(e, t)) return null;
    let r = e.scroll.max,
      s = e.scroll.current;
    return Oi({ current: s, max: r, change: t });
  },
  Ti = (e, t) => {
    let r = e.frame;
    return r
      ? Rl({ current: r.scroll.current, max: r.scroll.max, change: t })
      : !1;
  },
  yf = (e, t) => {
    let r = e.frame;
    return !r || !Ti(e, t)
      ? null
      : Oi({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  vf = ({
    viewport: e,
    subject: t,
    center: r,
    dragStartTime: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = Wl({
      dragStartTime: s,
      container: e.frame,
      subject: t,
      center: r,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: o,
    });
    return n && Ai(e, n) ? n : null;
  },
  Cf = ({
    droppable: e,
    subject: t,
    center: r,
    dragStartTime: s,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: o,
  }) => {
    let n = e.frame;
    if (!n) return null;
    let a = Wl({
      dragStartTime: s,
      container: n.pageMarginBox,
      subject: t,
      center: r,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: o,
    });
    return a && Ti(e, a) ? a : null;
  },
  Ba = ({
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
        d = vf({
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
    let c = df({
      center: n,
      destination: pe(e.impact),
      droppables: e.dimensions.droppables,
    });
    if (!c) return;
    let p = Cf({
      dragStartTime: t,
      droppable: c,
      subject: l,
      center: n,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: o,
    });
    p && i(c.descriptor.id, p);
  },
  Sf = ({
    scrollWindow: e,
    scrollDroppable: t,
    getAutoScrollerOptions: r = () => Qt,
  }) => {
    let s = mt(e),
      i = mt(t),
      o = null,
      n = (c) => {
        o || _(!1);
        let { shouldUseTimeDampening: p, dragStartTime: u } = o;
        Ba({
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
        er(), o && _(!1);
        let p = Date.now(),
          u = !1,
          d = () => {
            u = !0;
          };
        Ba({
          state: c,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: d,
          scrollDroppable: d,
          getAutoScrollerOptions: r,
        }),
          (o = { dragStartTime: p, shouldUseTimeDampening: u }),
          tr(),
          u && n(c);
      },
      stop: () => {
        o && (s.cancel(), i.cancel(), (o = null));
      },
      scroll: n,
    };
  },
  Wf = ({ move: e, scrollDroppable: t, scrollWindow: r }) => {
    let s = (a, l) => {
        let c = se(a.current.client.selection, l);
        e({ client: c });
      },
      i = (a, l) => {
        if (!Ti(a, l)) return l;
        let c = yf(a, l);
        if (!c) return t(a.descriptor.id, l), null;
        let p = de(l, c);
        return t(a.descriptor.id, p), de(l, p);
      },
      o = (a, l, c) => {
        if (!a || !Ai(l, c)) return c;
        let p = bf(l, c);
        if (!p) return r(c), null;
        let u = de(c, p);
        return r(u), de(c, u);
      };
    return (a) => {
      let l = a.scrollJumpRequest;
      if (!l) return;
      let c = pe(a.impact);
      c || _(!1);
      let p = i(a.dimensions.droppables[c], l);
      if (!p) return;
      let u = a.viewport,
        d = o(a.isWindowScrollAllowed, u, p);
      d && s(a, d);
    };
  },
  Rf = ({
    scrollDroppable: e,
    scrollWindow: t,
    move: r,
    getAutoScrollerOptions: s,
  }) => {
    let i = Sf({
        scrollWindow: t,
        scrollDroppable: e,
        getAutoScrollerOptions: s,
      }),
      o = Wf({ move: r, scrollWindow: t, scrollDroppable: e });
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
  ht = "data-rfd",
  gt = (() => {
    let e = `${ht}-drag-handle`;
    return {
      base: e,
      draggableId: `${e}-draggable-id`,
      contextId: `${e}-context-id`,
    };
  })(),
  vi = (() => {
    let e = `${ht}-draggable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  If = (() => {
    let e = `${ht}-droppable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  Fa = { contextId: `${ht}-scroll-container-context-id` },
  wf = (e) => (t) => `[${t}="${e}"]`,
  kt = (e, t) =>
    e
      .map((r) => {
        let s = r.styles[t];
        return s ? `${r.selector} { ${s} }` : "";
      })
      .join(" "),
  Pf = "pointer-events: none;",
  xf = (e) => {
    let t = wf(e),
      r = (() => {
        let a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: t(gt.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: a,
            dragging: Pf,
            dropAnimating: a,
          },
        };
      })(),
      s = (() => {
        let a = `
      transition: ${Vt.outOfTheWay};
    `;
        return {
          selector: t(vi.contextId),
          styles: { dragging: a, dropAnimating: a, userCancel: a },
        };
      })(),
      i = {
        selector: t(If.contextId),
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
      always: kt(n, "always"),
      resting: kt(n, "resting"),
      dragging: kt(n, "dragging"),
      dropAnimating: kt(n, "dropAnimating"),
      userCancel: kt(n, "userCancel"),
    };
  },
  Df =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? C.useLayoutEffect
      : C.useEffect,
  me = Df,
  ci = () => {
    let e = document.querySelector("head");
    return e || _(!1), e;
  },
  Na = (e) => {
    let t = document.createElement("style");
    return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
  };
function Ef(e, t) {
  let r = B(() => xf(e), [e]),
    s = (0, C.useRef)(null),
    i = (0, C.useRef)(null),
    o = I(
      Z((u) => {
        let d = i.current;
        d || _(!1), (d.textContent = u);
      }),
      [],
    ),
    n = I((u) => {
      let d = s.current;
      d || _(!1), (d.textContent = u);
    }, []);
  me(() => {
    (!s.current && !i.current) || _(!1);
    let u = Na(t),
      d = Na(t);
    return (
      (s.current = u),
      (i.current = d),
      u.setAttribute(`${ht}-always`, e),
      d.setAttribute(`${ht}-dynamic`, e),
      ci().appendChild(u),
      ci().appendChild(d),
      n(r.always),
      o(r.resting),
      () => {
        let m = (f) => {
          let g = f.current;
          g || _(!1), ci().removeChild(g), (f.current = null);
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
  return B(() => ({ dragging: a, dropping: l, resting: c }), [a, l, c]);
}
function Il(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var wl = (e) =>
  e && e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView
    : window;
function rr(e) {
  return e instanceof wl(e).HTMLElement;
}
function Pl(e, t) {
  let r = `[${gt.contextId}="${e}"]`,
    s = Il(document, r);
  if (!s.length) return null;
  let i = s.find((o) => o.getAttribute(gt.draggableId) === t);
  return !i || !rr(i) ? null : i;
}
function Bf(e) {
  let t = (0, C.useRef)({}),
    r = (0, C.useRef)(null),
    s = (0, C.useRef)(null),
    i = (0, C.useRef)(!1),
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
        let m = Pl(e, d);
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
      m && m.getAttribute(gt.draggableId) === d && (r.current = d);
    }, []);
  return (
    me(
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
    B(
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
function Ff() {
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
function Nf() {
  let e = B(Ff, []);
  return (
    (0, C.useEffect)(
      () =>
        function () {
          C.default.version.startsWith("16") ||
          C.default.version.startsWith("17")
            ? requestAnimationFrame(e.clean)
            : e.clean();
        },
      [e],
    ),
    e
  );
}
var Mi = C.default.createContext(null),
  Kt = () => {
    let e = document.body;
    return e || _(!1), e;
  },
  Of = {
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
  Af = Of,
  Tf = (e) => `rfd-announcement-${e}`;
function Mf(e) {
  let t = B(() => Tf(e), [e]),
    r = (0, C.useRef)(null);
  return (
    (0, C.useEffect)(
      function () {
        let o = document.createElement("div");
        return (
          (r.current = o),
          (o.id = t),
          o.setAttribute("aria-live", "assertive"),
          o.setAttribute("aria-atomic", "true"),
          Oe(o.style, Af),
          Kt().appendChild(o),
          function () {
            setTimeout(function () {
              let l = Kt();
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
var Gf = 0,
  xl = { separator: "::" };
function Lf(e, t = xl) {
  return B(() => `${e}${t.separator}${Gf++}`, [t.separator, e]);
}
function kf(e, t = xl) {
  let r = C.default.useId();
  return B(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Gi = "useId" in C.default ? kf : Lf;
function Hf({ contextId: e, uniqueId: t }) {
  return `rfd-hidden-text-${e}-${t}`;
}
function zf({ contextId: e, text: t }) {
  let r = Gi("hidden-text", { separator: "-" }),
    s = B(() => Hf({ contextId: e, uniqueId: r }), [r, e]);
  return (
    (0, C.useEffect)(
      function () {
        let o = document.createElement("div");
        return (
          (o.id = s),
          (o.textContent = t),
          (o.style.display = "none"),
          Kt().appendChild(o),
          function () {
            let a = Kt();
            a.contains(o) && a.removeChild(o);
          }
        );
      },
      [s, t],
    ),
    s
  );
}
var Xr = C.default.createContext(null),
  Vf = {
    react: "^16.8.5 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
  },
  jf = /(\d+)\.(\d+)\.(\d+)/,
  Oa = (e) => {
    let t = jf.exec(e);
    t == null && _(!1);
    let r = Number(t[1]),
      s = Number(t[2]),
      i = Number(t[3]);
    return { major: r, minor: s, patch: i, raw: e };
  },
  Uf = (e, t) =>
    t.major > e.major
      ? !0
      : t.major < e.major
        ? !1
        : t.minor > e.minor
          ? !0
          : t.minor < e.minor
            ? !1
            : t.patch >= e.patch,
  qf = (e, t) => {
    let r = Oa(e),
      s = Oa(t);
    Uf(r, s);
  };
var $f = (e) => {
  let t = e.doctype;
  t && (t.name.toLowerCase(), t.publicId);
};
function sr(e, t) {}
function Qf() {
  sr(() => {
    qf(Vf.react, C.default.version), $f(document);
  }, []);
}
function Li(e) {
  let t = (0, C.useRef)(e);
  return (
    (0, C.useEffect)(() => {
      t.current = e;
    }),
    t
  );
}
function Kf() {
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
function Yt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
var Yf = 9,
  Xf = 13,
  ki = 27,
  Dl = 32,
  Jf = 33,
  Zf = 34,
  eh = 35,
  th = 36,
  rh = 37,
  sh = 38,
  ih = 39,
  oh = 40,
  nh = { [Xf]: !0, [Yf]: !0 },
  El = (e) => {
    nh[e.keyCode] && e.preventDefault();
  },
  ah = (() => {
    let e = "visibilitychange";
    return typeof document > "u"
      ? e
      : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
          (s) => `on${s}` in document,
        ) || e;
  })(),
  Jr = ah,
  Bl = 0,
  Aa = 5;
function lh(e, t) {
  return Math.abs(t.x - e.x) >= Aa || Math.abs(t.y - e.y) >= Aa;
}
var Ta = { type: "IDLE" };
function ch({ cancel: e, completed: t, getPhase: r, setPhase: s }) {
  return [
    {
      eventName: "mousemove",
      fn: (i) => {
        let { button: o, clientX: n, clientY: a } = i;
        if (o !== Bl) return;
        let l = { x: n, y: a },
          c = r();
        if (c.type === "DRAGGING") {
          i.preventDefault(), c.actions.move(l);
          return;
        }
        c.type !== "PENDING" && _(!1);
        let p = c.point;
        if (!lh(p, l)) return;
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
        if (i.keyCode === ki) {
          i.preventDefault(), e();
          return;
        }
        El(i);
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
    { eventName: Jr, fn: e },
  ];
}
function uh(e) {
  let t = (0, C.useRef)(Ta),
    r = (0, C.useRef)(He),
    s = B(
      () => ({
        eventName: "mousedown",
        fn: function (u) {
          if (
            u.defaultPrevented ||
            u.button !== Bl ||
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
    i = B(
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
        r.current = Ce(window, [i, s], u);
      },
      [i, s],
    ),
    n = I(() => {
      t.current.type !== "IDLE" && ((t.current = Ta), r.current(), o());
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
          d = ch({
            cancel: a,
            completed: n,
            getPhase: () => t.current,
            setPhase: (m) => {
              t.current = m;
            },
          });
        r.current = Ce(window, d, u);
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
  me(
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
function dh() {}
var ph = { [Zf]: !0, [Jf]: !0, [th]: !0, [eh]: !0 };
function mh(e, t) {
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
        if (i.keyCode === ki) {
          i.preventDefault(), r();
          return;
        }
        if (i.keyCode === Dl) {
          i.preventDefault(), s();
          return;
        }
        if (i.keyCode === oh) {
          i.preventDefault(), e.moveDown();
          return;
        }
        if (i.keyCode === sh) {
          i.preventDefault(), e.moveUp();
          return;
        }
        if (i.keyCode === ih) {
          i.preventDefault(), e.moveRight();
          return;
        }
        if (i.keyCode === rh) {
          i.preventDefault(), e.moveLeft();
          return;
        }
        if (ph[i.keyCode]) {
          i.preventDefault();
          return;
        }
        El(i);
      },
    },
    { eventName: "mousedown", fn: r },
    { eventName: "mouseup", fn: r },
    { eventName: "click", fn: r },
    { eventName: "touchstart", fn: r },
    { eventName: "resize", fn: r },
    { eventName: "wheel", fn: r, options: { passive: !0 } },
    { eventName: Jr, fn: r },
  ];
}
function fh(e) {
  let t = (0, C.useRef)(dh),
    r = B(
      () => ({
        eventName: "keydown",
        fn: function (o) {
          if (o.defaultPrevented || o.keyCode !== Dl) return;
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
          t.current = Ce(window, mh(c, p), { capture: !0, passive: !1 });
        },
      }),
      [e],
    ),
    s = I(
      function () {
        let o = { passive: !1, capture: !0 };
        t.current = Ce(window, [r], o);
      },
      [r],
    );
  me(
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
var ui = { type: "IDLE" },
  hh = 120,
  gh = 0.15;
function _h({ cancel: e, getPhase: t }) {
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
        r.keyCode === ki && r.preventDefault(), e();
      },
    },
    { eventName: Jr, fn: e },
  ];
}
function bh({ cancel: e, completed: t, getPhase: r }) {
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
        if (!o || !(o.force >= gh)) return;
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
    { eventName: Jr, fn: e },
  ];
}
function yh(e) {
  let t = (0, C.useRef)(ui),
    r = (0, C.useRef)(He),
    s = I(function () {
      return t.current;
    }, []),
    i = I(function (m) {
      t.current = m;
    }, []),
    o = B(
      () => ({
        eventName: "touchstart",
        fn: function (m) {
          if (m.defaultPrevented) return;
          let f = e.findClosestDraggableId(m);
          if (!f) return;
          let g = e.tryGetLock(f, a, { sourceEvent: m });
          if (!g) return;
          let h = m.touches[0],
            { clientX: S, clientY: W } = h,
            P = { x: S, y: W };
          r.current(), u(g, P);
        },
      }),
      [e],
    ),
    n = I(
      function () {
        let m = { capture: !0, passive: !1 };
        r.current = Ce(window, [o], m);
      },
      [o],
    ),
    a = I(() => {
      let d = t.current;
      d.type !== "IDLE" &&
        (d.type === "PENDING" && clearTimeout(d.longPressTimerId),
        i(ui),
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
          g = Ce(window, bh(f), m),
          h = Ce(window, _h(f), m);
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
        let g = setTimeout(p, hh);
        i({ type: "PENDING", point: f, actions: m, longPressTimerId: g }), c();
      },
      [c, s, i, p],
    );
  me(
    function () {
      return (
        n(),
        function () {
          r.current();
          let f = s();
          f.type === "PENDING" && (clearTimeout(f.longPressTimerId), i(ui));
        }
      );
    },
    [s, n, i],
  ),
    me(function () {
      return Ce(window, [
        {
          eventName: "touchmove",
          fn: () => {},
          options: { capture: !1, passive: !1 },
        },
      ]);
    }, []);
}
function vh(e) {}
var Ch = [
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "optgroup",
  "video",
  "audio",
];
function Fl(e, t) {
  if (t == null) return !1;
  if (Ch.includes(t.tagName.toLowerCase())) return !0;
  let s = t.getAttribute("contenteditable");
  return s === "true" || s === "" ? !0 : t === e ? !1 : Fl(e, t.parentElement);
}
function Sh(e, t) {
  let r = t.target;
  return rr(r) ? Fl(e, r) : !1;
}
var Wh = (e) => ve(e.getBoundingClientRect()).center;
function Rh(e) {
  return e instanceof wl(e).Element;
}
var Ih = (() => {
  let e = "matches";
  return typeof document > "u"
    ? e
    : [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (s) => s in Element.prototype,
      ) || e;
})();
function Nl(e, t) {
  return e == null ? null : e[Ih](t) ? e : Nl(e.parentElement, t);
}
function wh(e, t) {
  return e.closest ? e.closest(t) : Nl(e, t);
}
function Ph(e) {
  return `[${gt.contextId}="${e}"]`;
}
function xh(e, t) {
  let r = t.target;
  if (!Rh(r)) return null;
  let s = Ph(e),
    i = wh(r, s);
  return !i || !rr(i) ? null : i;
}
function Dh(e, t) {
  let r = xh(e, t);
  return r ? r.getAttribute(gt.draggableId) : null;
}
function Eh(e, t) {
  let r = `[${vi.contextId}="${e}"]`,
    i = Il(document, r).find((o) => o.getAttribute(vi.id) === t);
  return !i || !rr(i) ? null : i;
}
function Bh(e) {
  e.preventDefault();
}
function Hr({ expected: e, phase: t, isLockActive: r, shouldWarn: s }) {
  return !(!r() || e !== t);
}
function Ol({ lockAPI: e, store: t, registry: r, draggableId: s }) {
  if (e.isClaimed()) return !1;
  let i = r.draggable.findById(s);
  return !(!i || !i.options.isEnabled || !Cl(t.getState(), s));
}
function Fh({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: s,
  draggableId: i,
  forceSensorStop: o,
  sourceEvent: n,
}) {
  if (!Ol({ lockAPI: e, store: r, registry: s, draggableId: i })) return null;
  let l = s.draggable.getById(i),
    c = Eh(t, l.descriptor.id);
  if (!c || (n && !l.options.canDragInteractiveElements && Sh(c, n)))
    return null;
  let p = e.claim(o || He),
    u = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(p);
  }
  function f(x, D) {
    Hr({ expected: x, phase: u, isLockActive: m, shouldWarn: !0 }) &&
      r.dispatch(D());
  }
  let g = f.bind(null, "DRAGGING");
  function h(x) {
    function D() {
      e.release(), (u = "COMPLETED");
    }
    u !== "PRE_DRAG" && (D(), _(!1)),
      r.dispatch(cm(x.liftActionArgs)),
      (u = "DRAGGING");
    function k(L, ue = { shouldBlockNextClick: !1 }) {
      if ((x.cleanup(), ue.shouldBlockNextClick)) {
        let z = Ce(window, [
          {
            eventName: "click",
            fn: Bh,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(z);
      }
      D(), r.dispatch(ml({ reason: L }));
    }
    return {
      isActive: () =>
        Hr({ expected: "DRAGGING", phase: u, isLockActive: m, shouldWarn: !1 }),
      shouldRespectForcePress: d,
      drop: (L) => k("DROP", L),
      cancel: (L) => k("CANCEL", L),
      ...x.actions,
    };
  }
  function S(x) {
    let D = mt((L) => {
      g(() => pl({ client: L }));
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
  function W() {
    let x = {
      moveUp: () => g(bm),
      moveRight: () => g(vm),
      moveDown: () => g(ym),
      moveLeft: () => g(Cm),
    };
    return h({
      liftActionArgs: { id: i, clientSelection: Wh(c), movementMode: "SNAP" },
      cleanup: He,
      actions: x,
    });
  }
  function P() {
    Hr({ expected: "PRE_DRAG", phase: u, isLockActive: m, shouldWarn: !0 }) &&
      e.release();
  }
  return {
    isActive: () =>
      Hr({ expected: "PRE_DRAG", phase: u, isLockActive: m, shouldWarn: !1 }),
    shouldRespectForcePress: d,
    fluidLift: S,
    snapLift: W,
    abort: P,
  };
}
var Nh = [uh, fh, yh];
function Oh({
  contextId: e,
  store: t,
  registry: r,
  customSensors: s,
  enableDefaultSensors: i,
}) {
  let o = [...(i ? Nh : []), ...(s || [])],
    n = (0, C.useState)(() => Kf())[0],
    a = I(
      function (h, S) {
        Yt(h) && !Yt(S) && n.tryAbandon();
      },
      [n],
    );
  me(
    function () {
      let h = t.getState();
      return t.subscribe(() => {
        let W = t.getState();
        a(h, W), (h = W);
      });
    },
    [n, t, a],
  ),
    me(() => n.tryAbandon, [n.tryAbandon]);
  let l = I(
      (g) => Ol({ lockAPI: n, registry: r, store: t, draggableId: g }),
      [n, r, t],
    ),
    c = I(
      (g, h, S) =>
        Fh({
          lockAPI: n,
          registry: r,
          contextId: e,
          store: t,
          draggableId: g,
          forceSensorStop: h || null,
          sourceEvent: S && S.sourceEvent ? S.sourceEvent : null,
        }),
      [e, n, r, t],
    ),
    p = I((g) => Dh(e, g), [e]),
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
          (n.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Ei()));
      },
      [n, t],
    ),
    m = I(() => n.isClaimed(), [n]),
    f = B(
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
  vh(o);
  for (let g = 0; g < o.length; g++) o[g](f);
}
var Ah = (e) => ({
    onBeforeCapture: (t) => {
      let r = () => {
        e.onBeforeCapture && e.onBeforeCapture(t);
      };
      C.default.version.startsWith("16") || C.default.version.startsWith("17")
        ? r()
        : (0, Xt.flushSync)(r);
    },
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragEnd: e.onDragEnd,
    onDragUpdate: e.onDragUpdate,
  }),
  Th = (e) => ({
    ...Qt,
    ...e.autoScrollerOptions,
    durationDampening: { ...Qt.durationDampening, ...e.autoScrollerOptions },
  });
function Ht(e) {
  return e.current || _(!1), e.current;
}
function Mh(e) {
  let {
      contextId: t,
      setCallbacks: r,
      sensors: s,
      nonce: i,
      dragHandleUsageInstructions: o,
    } = e,
    n = (0, C.useRef)(null);
  Qf();
  let a = Li(e),
    l = I(() => Ah(a.current), [a]),
    c = I(() => Th(a.current), [a]),
    p = Mf(t),
    u = zf({ contextId: t, text: o }),
    d = Ef(t, i),
    m = I((z) => {
      Ht(n).dispatch(z);
    }, []),
    f = B(
      () =>
        qs(
          {
            publishWhileDragging: dm,
            updateDroppableScroll: mm,
            updateDroppableIsEnabled: fm,
            updateDroppableIsCombineEnabled: hm,
            collectionStarting: pm,
          },
          m,
        ),
      [m],
    ),
    g = Nf(),
    h = B(() => af(g, f), [g, f]),
    S = B(
      () =>
        Rf({
          scrollWindow: lf,
          scrollDroppable: h.scrollDroppable,
          getAutoScrollerOptions: c,
          ...qs({ move: pl }, m),
        }),
      [h.scrollDroppable, m, c],
    ),
    W = Bf(t),
    P = B(
      () =>
        rf({
          announce: p,
          autoScroller: S,
          dimensionMarshal: h,
          focusMarshal: W,
          getResponders: l,
          styleMarshal: d,
        }),
      [p, S, h, W, l, d],
    );
  n.current = P;
  let w = I(() => {
      let z = Ht(n);
      z.getState().phase !== "IDLE" && z.dispatch(Ei());
    }, []),
    x = I(() => {
      let z = Ht(n).getState();
      return z.phase === "DROP_ANIMATING"
        ? !0
        : z.phase === "IDLE"
          ? !1
          : z.isDragging;
    }, []),
    D = B(() => ({ isDragging: x, tryAbort: w }), [x, w]);
  r(D);
  let k = I((z) => Cl(Ht(n).getState(), z), []),
    L = I(() => Xe(Ht(n).getState()), []),
    ue = B(
      () => ({
        marshal: h,
        focus: W,
        contextId: t,
        canLift: k,
        isMovementAllowed: L,
        dragHandleUsageInstructionsId: u,
        registry: g,
      }),
      [t, h, u, W, k, L, g],
    );
  return (
    Oh({
      contextId: t,
      store: P,
      registry: g,
      customSensors: s || null,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    (0, C.useEffect)(() => w, [w]),
    C.default.createElement(
      Xr.Provider,
      { value: ue },
      C.default.createElement(ti, { context: Mi, store: P }, e.children),
    )
  );
}
var Gh = 0;
function Lh() {
  return B(() => `${Gh++}`, []);
}
function kh() {
  return C.default.useId();
}
var Hh = "useId" in C.default ? kh : Lh;
function Al(e) {
  let t = Hh(),
    r = e.dragHandleUsageInstructions || Vr.dragHandleUsageInstructions;
  return C.default.createElement(hi, null, (s) =>
    C.default.createElement(
      Mh,
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
var Ma = { dragging: 5e3, dropAnimating: 4500 },
  zh = (e, t) => (t ? Vt.drop(t.duration) : e ? Vt.snap : Vt.fluid),
  Vh = (e, t) => {
    if (e) return t ? $t.opacity.drop : $t.opacity.combining;
  },
  jh = (e) =>
    e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Uh(e) {
  let r = e.dimension.client,
    { offset: s, combineWith: i, dropping: o } = e,
    n = !!i,
    a = jh(e),
    l = !!o,
    c = l ? bi.drop(s, n) : bi.moveTo(s);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: zh(a, o),
    transform: c,
    opacity: Vh(n, l),
    zIndex: l ? Ma.dropAnimating : Ma.dragging,
    pointerEvents: "none",
  };
}
function qh(e) {
  return {
    transform: bi.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none",
  };
}
function $h(e) {
  return e.type === "DRAGGING" ? Uh(e) : qh(e);
}
function Qh(e, t, r = te) {
  let s = window.getComputedStyle(t),
    i = t.getBoundingClientRect(),
    o = si(i, s),
    n = Gt(o, r),
    a = { client: o, tagName: t.tagName.toLowerCase(), display: s.display },
    l = { x: o.marginBox.width, y: o.marginBox.height };
  return { descriptor: e, placeholder: a, displaceBy: l, client: o, page: n };
}
function Kh(e) {
  let t = Gi("draggable"),
    {
      descriptor: r,
      registry: s,
      getDraggableRef: i,
      canDragInteractiveElements: o,
      shouldRespectForcePress: n,
      isEnabled: a,
    } = e,
    l = B(
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
        return f || _(!1), Qh(r, f, m);
      },
      [r, i],
    ),
    p = B(
      () => ({ uniqueId: t, descriptor: r, options: l, getDimension: c }),
      [r, c, l, t],
    ),
    u = (0, C.useRef)(p),
    d = (0, C.useRef)(!0);
  me(
    () => (
      s.draggable.register(u.current), () => s.draggable.unregister(u.current)
    ),
    [s.draggable],
  ),
    me(() => {
      if (d.current) {
        d.current = !1;
        return;
      }
      let m = u.current;
      (u.current = p), s.draggable.update(p, m);
    }, [p, s.draggable]);
}
var Hi = C.default.createContext(null);
function Tl(e) {
  (e && rr(e)) || _(!1);
}
function Yh(e, t, r) {
  sr(() => {
    function s(o) {
      return `Draggable[id: ${o}]: `;
    }
    let i = e.draggableId;
    i || _(!1),
      typeof i != "string" && _(!1),
      Number.isInteger(e.index) || _(!1),
      e.mapped.type !== "DRAGGING" &&
        (Tl(r()), e.isEnabled && (Pl(t, i) || _(!1)));
  });
}
function Xh(e) {}
function qr(e) {
  let t = (0, C.useContext)(e);
  return t || _(!1), t;
}
function Jh(e) {
  e.preventDefault();
}
var Zh = (e) => {
    let t = (0, C.useRef)(null),
      r = I((D = null) => {
        t.current = D;
      }, []),
      s = I(() => t.current, []),
      { contextId: i, dragHandleUsageInstructionsId: o, registry: n } = qr(Xr),
      { type: a, droppableId: l } = qr(Hi),
      c = B(
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
        dropAnimationFinished: S,
      } = e;
    if ((Yh(e, i, s), Xh(g), !g)) {
      let D = B(
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
      Kh(D);
    }
    let W = B(
        () =>
          d
            ? {
                tabIndex: 0,
                role: "button",
                "aria-describedby": o,
                "data-rfd-drag-handle-draggable-id": u,
                "data-rfd-drag-handle-context-id": i,
                draggable: !1,
                onDragStart: Jh,
              }
            : null,
        [i, o, u, d],
      ),
      P = I(
        (D) => {
          h.type === "DRAGGING" &&
            h.dropping &&
            D.propertyName === "transform" &&
            (C.default.version.startsWith("16") ||
            C.default.version.startsWith("17")
              ? S()
              : (0, Xt.flushSync)(S));
        },
        [S, h],
      ),
      w = B(() => {
        let D = $h(h),
          k = h.type === "DRAGGING" && h.dropping ? P : void 0;
        return {
          innerRef: r,
          draggableProps: {
            "data-rfd-draggable-context-id": i,
            "data-rfd-draggable-id": u,
            style: D,
            onTransitionEnd: k,
          },
          dragHandleProps: W,
        };
      }, [i, W, u, h, P, r]),
      x = B(
        () => ({
          draggableId: c.id,
          type: c.type,
          source: { index: c.index, droppableId: c.droppableId },
        }),
        [c.droppableId, c.id, c.index, c.type],
      );
    return C.default.createElement(
      C.default.Fragment,
      null,
      p(w, h.snapshot, x),
    );
  },
  eg = Zh,
  Ml = (e, t) => e === t,
  Gl = (e) => {
    let { combine: t, destination: r } = e;
    return r ? r.droppableId : t ? t.droppableId : null;
  },
  tg = (e) => (e.combine ? e.combine.draggableId : null),
  rg = (e) =>
    e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function sg() {
  let e = Z((i, o) => ({ x: i, y: o })),
    t = Z((i, o, n = null, a = null, l = null) => ({
      isDragging: !0,
      isClone: o,
      isDropAnimating: !!l,
      dropAnimation: l,
      mode: i,
      draggingOver: n,
      combineWith: a,
      combineTargetFor: null,
    })),
    r = Z((i, o, n, a, l = null, c = null, p = null) => ({
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
    if (Yt(i)) {
      if (i.critical.draggable.id !== o.draggableId) return null;
      let n = i.current.client.offset,
        a = i.dimensions.draggables[o.draggableId],
        l = pe(i.impact),
        c = rg(i.impact),
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
        u = Gl(c),
        d = tg(c),
        f = {
          duration: i.dropDuration,
          curve: Fi.drop,
          moveTo: i.newHomeClientOffset,
          opacity: d ? $t.opacity.drop : null,
          scale: d ? $t.scale.drop : null,
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
function Ll(e = null) {
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
var ig = {
  mapped: {
    type: "SECONDARY",
    offset: te,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ll(null),
  },
};
function og() {
  let e = Z((n, a) => ({ x: n, y: a })),
    t = Z(Ll),
    r = Z((n, a = null, l) => ({
      mapped: {
        type: "SECONDARY",
        offset: n,
        combineTargetFor: a,
        shouldAnimateDisplacement: l,
        snapshot: t(a),
      },
    })),
    s = (n) => (n ? r(te, n, !0) : null),
    i = (n, a, l, c) => {
      let p = l.displaced.visible[n],
        u = !!(c.inVirtualList && c.effected[n]),
        d = Qr(l),
        m = d && d.draggableId === n ? a : null;
      if (!p) {
        if (!u) return s(m);
        if (l.displaced.invisible[n]) return null;
        let h = _t(c.displacedBy.point),
          S = e(h.x, h.y);
        return r(S, m, !0);
      }
      if (u) return s(m);
      let f = l.displacedBy.point,
        g = e(f.x, f.y);
      return r(g, m, p.shouldAnimate);
    };
  return (n, a) => {
    if (Yt(n))
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
var ng = () => {
    let e = sg(),
      t = og();
    return (s, i) => e(s, i) || t(s, i) || ig;
  },
  ag = { dropAnimationFinished: fl },
  lg = Mr(ng, ag, null, { context: Mi, areStatePropsEqual: Ml })(eg),
  cg = lg;
function kl(e) {
  return qr(Hi).isUsingCloneFor === e.draggableId && !e.isClone
    ? null
    : C.default.createElement(cg, e);
}
function Hl(e) {
  let t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    r = !!e.disableInteractiveElementBlocking,
    s = !!e.shouldRespectForcePress;
  return C.default.createElement(
    kl,
    Oe({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: r,
      shouldRespectForcePress: s,
    }),
  );
}
var zi = (e) => (t) => e === t,
  ug = zi("scroll"),
  dg = zi("auto"),
  pg = zi("visible"),
  Ga = (e, t) => t(e.overflowX) || t(e.overflowY),
  mg = (e, t) => t(e.overflowX) && t(e.overflowY),
  zl = (e) => {
    let t = window.getComputedStyle(e),
      r = { overflowX: t.overflowX, overflowY: t.overflowY };
    return Ga(r, ug) || Ga(r, dg);
  },
  fg = () => !1,
  Vl = (e) =>
    e == null
      ? null
      : e === document.body
        ? fg()
          ? e
          : null
        : e === document.documentElement
          ? null
          : zl(e)
            ? e
            : Vl(e.parentElement);
var Ci = (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
  jl = (e) =>
    e
      ? window.getComputedStyle(e).position === "fixed"
        ? !0
        : jl(e.parentElement)
      : !1,
  hg = (e) => {
    let t = Vl(e),
      r = jl(e);
    return { closestScrollable: t, isFixedOnPage: r };
  },
  gg = ({
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
          f = bl({
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
            diff: { value: te, displacement: te },
          },
        };
      })(),
      c = i === "vertical" ? Ii : Xa,
      p = ft({ page: n, withPlaceholder: null, axis: c, frame: l });
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
  _g = (e, t) => {
    let r = ii(e);
    if (!t || e !== t) return r;
    let s = r.paddingBox.top - t.scrollTop,
      i = r.paddingBox.left - t.scrollLeft,
      o = s + t.scrollHeight,
      n = i + t.scrollWidth,
      l = Gr({ top: s, right: n, bottom: o, left: i }, r.border);
    return Lr({
      borderBox: l,
      margin: r.margin,
      border: r.border,
      padding: r.padding,
    });
  },
  bg = ({
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
      c = _g(e, l),
      p = Gt(c, s),
      u = (() => {
        if (!l) return null;
        let m = ii(l),
          f = { scrollHeight: l.scrollHeight, scrollWidth: l.scrollWidth };
        return {
          client: m,
          page: Gt(m, s),
          scroll: Ci(l),
          scrollSize: f,
          shouldClipSubject: a,
        };
      })();
    return gg({
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
  yg = { passive: !1 },
  vg = { passive: !0 },
  La = (e) => (e.shouldPublishImmediately ? yg : vg),
  zr = (e) => (e && e.env.closestScrollable) || null;
function Cg(e) {
  let t = (0, C.useRef)(null),
    r = qr(Xr),
    s = Gi("droppable"),
    { registry: i, marshal: o } = r,
    n = Li(e),
    a = B(
      () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
      [e.droppableId, e.mode, e.type],
    ),
    l = (0, C.useRef)(a),
    c = B(
      () =>
        Z((w, x) => {
          t.current || _(!1);
          let D = { x: w, y: x };
          o.updateDroppableScroll(a.id, D);
        }),
      [a.id, o],
    ),
    p = I(() => {
      let w = t.current;
      return !w || !w.env.closestScrollable ? te : Ci(w.env.closestScrollable);
    }, []),
    u = I(() => {
      let w = p();
      c(w.x, w.y);
    }, [p, c]),
    d = B(() => mt(u), [u]),
    m = I(() => {
      let w = t.current,
        x = zr(w);
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
          k = D.getDroppableRef();
        k || _(!1);
        let L = hg(k),
          ue = { ref: k, descriptor: a, env: L, scrollOptions: x };
        t.current = ue;
        let z = bg({
            ref: k,
            descriptor: a,
            env: L,
            windowScroll: w,
            direction: D.direction,
            isDropDisabled: D.isDropDisabled,
            isCombineEnabled: D.isCombineEnabled,
            shouldClipSubject: !D.ignoreContainerClipping,
          }),
          ge = L.closestScrollable;
        return (
          ge &&
            (ge.setAttribute(Fa.contextId, r.contextId),
            ge.addEventListener("scroll", m, La(ue.scrollOptions))),
          z
        );
      },
      [r.contextId, a, m, n],
    ),
    g = I(() => {
      let w = t.current,
        x = zr(w);
      return (w && x) || _(!1), Ci(x);
    }, []),
    h = I(() => {
      let w = t.current;
      w || _(!1);
      let x = zr(w);
      (t.current = null),
        x &&
          (d.cancel(),
          x.removeAttribute(Fa.contextId),
          x.removeEventListener("scroll", m, La(w.scrollOptions)));
    }, [m, d]),
    S = I((w) => {
      let x = t.current;
      x || _(!1);
      let D = zr(x);
      D || _(!1), (D.scrollTop += w.y), (D.scrollLeft += w.x);
    }, []),
    W = B(
      () => ({
        getDimensionAndWatchScroll: f,
        getScrollWhileDragging: g,
        dragStopped: h,
        scroll: S,
      }),
      [h, f, g, S],
    ),
    P = B(() => ({ uniqueId: s, descriptor: a, callbacks: W }), [W, a, s]);
  me(
    () => (
      (l.current = P.descriptor),
      i.droppable.register(P),
      () => {
        t.current && h(), i.droppable.unregister(P);
      }
    ),
    [W, a, h, P, o, i.droppable],
  ),
    me(() => {
      t.current && o.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
    }, [e.isDropDisabled, o]),
    me(() => {
      t.current &&
        o.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
    }, [e.isCombineEnabled, o]);
}
function di() {}
var ka = { width: 0, height: 0, margin: sp },
  Sg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) =>
    e || r === "close"
      ? ka
      : {
          height: t.client.borderBox.height,
          width: t.client.borderBox.width,
          margin: t.client.margin,
        },
  Wg = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: r }) => {
    let s = Sg({ isAnimatingOpenOnMount: e, placeholder: t, animate: r });
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
      transition: r !== "none" ? Vt.placeholder : null,
    };
  },
  Rg = (e) => {
    let t = (0, C.useRef)(null),
      r = I(() => {
        t.current && (clearTimeout(t.current), (t.current = null));
      }, []),
      { animate: s, onTransitionEnd: i, onClose: o, contextId: n } = e,
      [a, l] = (0, C.useState)(e.animate === "open");
    (0, C.useEffect)(
      () =>
        a
          ? s !== "open"
            ? (r(), l(!1), di)
            : t.current
              ? di
              : ((t.current = setTimeout(() => {
                  (t.current = null), l(!1);
                })),
                r)
          : di,
      [s, a, r],
    );
    let c = I(
        (u) => {
          u.propertyName === "height" && (i(), s === "close" && o());
        },
        [s, o, i],
      ),
      p = Wg({
        isAnimatingOpenOnMount: a,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return C.default.createElement(e.placeholder.tagName, {
      style: p,
      "data-rfd-placeholder-context-id": n,
      onTransitionEnd: c,
      ref: e.innerRef,
    });
  },
  Ig = C.default.memo(Rg);
function pi(e) {
  return typeof e == "boolean";
}
function mi(e, t) {
  t.forEach((r) => r(e));
}
var wg = [
    function ({ props: t }) {
      t.droppableId || _(!1), typeof t.droppableId != "string" && _(!1);
    },
    function ({ props: t }) {
      pi(t.isDropDisabled) || _(!1),
        pi(t.isCombineEnabled) || _(!1),
        pi(t.ignoreContainerClipping) || _(!1);
    },
    function ({ getDroppableRef: t }) {
      Tl(t());
    },
  ],
  Pg = [
    function ({ props: t, getPlaceholderRef: r }) {
      !t.placeholder || r();
    },
  ],
  xg = [
    function ({ props: t }) {
      t.renderClone || _(!1);
    },
    function ({ getPlaceholderRef: t }) {
      t() && _(!1);
    },
  ];
function Dg(e) {
  sr(() => {
    mi(e, wg),
      e.props.mode === "standard" && mi(e, Pg),
      e.props.mode === "virtual" && mi(e, xg);
  });
}
var Si = class extends C.default.PureComponent {
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
  Eg = (e) => {
    let t = (0, C.useContext)(Xr);
    t || _(!1);
    let { contextId: r, isMovementAllowed: s } = t,
      i = (0, C.useRef)(null),
      o = (0, C.useRef)(null),
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
        getContainerForClone: S,
      } = e,
      W = I(() => i.current, []),
      P = I((q = null) => {
        i.current = q;
      }, []),
      w = I(() => o.current, []),
      x = I((q = null) => {
        o.current = q;
      }, []);
    Dg({ props: e, getDroppableRef: W, getPlaceholderRef: w });
    let D = I(() => {
      s() && h({ maxScroll: vl() });
    }, [s, h]);
    Cg({
      droppableId: a,
      type: l,
      mode: c,
      direction: p,
      isDropDisabled: d,
      isCombineEnabled: m,
      ignoreContainerClipping: u,
      getDroppableRef: W,
    });
    let k = B(
        () =>
          C.default.createElement(
            Si,
            { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
            ({ onClose: q, data: Fe, animate: Wt }) =>
              C.default.createElement(Ig, {
                placeholder: Fe,
                onClose: q,
                innerRef: x,
                animate: Wt,
                contextId: r,
                onTransitionEnd: D,
              }),
          ),
        [r, D, e.placeholder, e.shouldAnimatePlaceholder, x],
      ),
      L = B(
        () => ({
          innerRef: P,
          placeholder: k,
          droppableProps: {
            "data-rfd-droppable-id": a,
            "data-rfd-droppable-context-id": r,
          },
        }),
        [r, a, k, P],
      ),
      ue = g ? g.dragging.draggableId : null,
      z = B(
        () => ({ droppableId: a, type: l, isUsingCloneFor: ue }),
        [a, ue, l],
      );
    function ge() {
      if (!g) return null;
      let { dragging: q, render: Fe } = g,
        Wt = C.default.createElement(
          kl,
          {
            draggableId: q.draggableId,
            index: q.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (Ie, pr) => Fe(Ie, pr, q),
        );
      return Xt.default.createPortal(Wt, S());
    }
    return C.default.createElement(Hi.Provider, { value: z }, n(L, f), ge());
  },
  Bg = Eg;
function Fg() {
  return document.body || _(!1), document.body;
}
var Ha = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Fg,
  },
  Ul = (e) => {
    let t = { ...e },
      r;
    for (r in Ha) e[r] === void 0 && (t = { ...t, [r]: Ha[r] });
    return t;
  },
  fi = (e, t) => e === t.droppable.type,
  za = (e, t) => t.draggables[e.draggable.id],
  Ng = () => {
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
      r = Z((o) => ({
        draggableId: o.id,
        type: o.type,
        source: { index: o.index, droppableId: o.droppableId },
      })),
      s = Z((o, n, a, l, c, p) => {
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
      let a = Ul(n),
        l = a.droppableId,
        c = a.type,
        p = !a.isDropDisabled,
        u = a.renderClone;
      if (Yt(o)) {
        let d = o.critical;
        if (!fi(c, d)) return t;
        let m = za(d, o.dimensions),
          f = pe(o.impact) === l;
        return s(l, p, f, f, m, u);
      }
      if (o.phase === "DROP_ANIMATING") {
        let d = o.completed;
        if (!fi(c, d.critical)) return t;
        let m = za(d.critical, o.dimensions);
        return s(l, p, Gl(d.result) === l, pe(d.impact) === l, m, u);
      }
      if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
        let d = o.completed;
        if (!fi(c, d.critical)) return t;
        let m = pe(d.impact) === l,
          f = !!(d.impact.at && d.impact.at.type === "COMBINE"),
          g = d.critical.droppable.id === l;
        return m ? (f ? e : t) : g ? e : t;
      }
      return t;
    };
  },
  Og = { updateViewportMaxScroll: _m },
  Ag = Mr(Ng, Og, (e, t, r) => ({ ...Ul(r), ...e, ...t }), {
    context: Mi,
    areStatePropsEqual: Ml,
  })(Bg),
  ql = Ag;
function Zr(e) {
  let t = Do(),
    r = xo();
  return _e(Tg(t.GetAnonymousServiceTransport(), r, e));
}
function Tg(e, t, r) {
  return {
    queryKey: ["LocalizedTagNames", r],
    queryFn: async () => {
      let s = `LocalizedTagNames2_${r}`,
        i = await t.GetObject(s),
        o = Pe.Init(en);
      o.Body().set_language(r),
        i?.version_hash && o.Body().set_have_version_hash(i.version_hash);
      let n = await tn.GetTagList(e, o),
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
function $l(e, t) {
  let { data: r } = Zr(t);
  return r && r[e];
}
function ir() {
  let e = _r(),
    t = Po();
  return _e(Mg(t, e));
}
function Mg(e, t) {
  let { country: r } = t;
  return {
    queryKey: ["StoreBrowsePriceStops", r],
    queryFn: async () => Gg(e, r),
    staleTime: 24 * 60 * 60 * 1e3,
  };
}
async function Gg(e, t) {
  let r = Pe.Init(go);
  r.Body().set_country_code(t);
  let s = await _o.GetPriceStops(e, r);
  if (!s.BSuccess()) throw `Error loading price stops: ${s.GetErrorMessage()}`;
  return s.Body().toObject().price_stops || [];
}
var Zi = v(Le(), 1),
  H = v(V(), 1);
var fe = v(V(), 1);
var Yl = v(E(), 1),
  or = fe.createContext(void 0);
function Ql(e) {
  let { steamid: t, children: r } = e,
    [s, i] = fe.useState(() => wn()),
    o = No(),
    n = fe.useCallback((l) => {
      Pn(l), i(l);
    }, []),
    a = fe.useMemo(
      () => ({
        steamid: t,
        bViewingOwnWishlist:
          !!o && new _s(o).GetAccountID() == new _s(t).GetAccountID(),
        bCompactView: s,
        setCompactView: n,
      }),
      [t, o, s, n],
    );
  return (0, Yl.jsx)(or.Provider, { value: a, children: r });
}
function et() {
  return fe.useContext(or).bViewingOwnWishlist;
}
function nr() {
  return fe.useContext(or).steamid;
}
function We() {
  return fe.useContext(or).bCompactView;
}
function Kl() {
  return fe.useContext(or).setCompactView;
}
function Vi(e, t) {
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
async function Lg(e, t, r, s, i, o) {
  let n = Pe.Init(Ft);
  n.Body().set_steamid(r),
    zo(t, n),
    s &&
      (Vo(n, s.data_request),
      n.Body().set_start_index(s.page_start || 0),
      n.Body().set_page_size(s.page_size)),
    i && n.Body().set_sort_order(i),
    o && n.Body().set_filters(Bt.fromObject(o));
  let a = await ct.GetWishlistSortedFiltered(e, n);
  if (!a.BSuccess())
    throw new uo(
      a.GetEResult(),
      `Error loading sorted/filtered wishlist: ${a.GetErrorMessage()}`,
    );
  let l;
  return (
    s
      ? (l = kg(s.cacheStoreItemData, s.data_request, a.Body().items() || []))
      : (l = a.Body().toObject().items || []),
    { steamid: r, items: l }
  );
}
function kg(e, t, r) {
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
function ji(e, t = 0, r = {}) {
  return ["WishlistSortedFiltered", e, t, r];
}
function Ui(e, t, r, s, i = 0, o = {}) {
  return {
    queryKey: ji(r, i, o),
    queryFn: () => Lg(e, t, r, s, i, o),
    staleTime: 10 * 60 * 1e3,
  };
}
function Xl(e, t = 0, r = {}) {
  let s = Re(),
    i = _r(),
    o = jo(),
    n = We();
  return _e(Ui(s, i, e, Vi(n, o), t, r));
}
function Jl(e, t, r) {
  e.setQueryData(ji(t), (s) => s && { ...s, items: r });
}
function Zl(e, t) {
  e.invalidateQueries({ queryKey: ji(t), exact: !1 });
}
var ar = v(V(), 1);
var ec = "/TB3SP4DA.png";
var tc = "s3BAyjuoPYA-";
var rc = "wgHGKOWFf8c-";
var sc = "dIPGtN9kABg-";
var tt = v(E(), 1);
function ic(e) {
  let { dragHandleProps: t, index: r, updateWishlistPriority: s } = e,
    [i, o] = ar.useState(void 0),
    n = ar.useCallback((c) => {
      o(c.currentTarget.value);
    }, []),
    a = ar.useCallback(
      (c) => {
        let p = parseInt(c.currentTarget.value);
        p && p - 1 != r && s(r, p - 1), o(void 0);
      },
      [r, s],
    ),
    l = i !== void 0 ? i : r + 1;
  return (0, tt.jsxs)("div", {
    className: tc,
    children: [
      (0, tt.jsx)("div", {
        className: rc,
        ...t,
        children: (0, tt.jsx)("img", { src: hr(ec), alt: "" }),
      }),
      (0, tt.jsx)("div", {
        className: sc,
        children: (0, tt.jsx)("input", {
          type: "text",
          value: l,
          onChange: n,
          onBlur: a,
        }),
      }),
    ],
  });
}
var Te = v(V());
var Vg = "unUserdataVersion";
async function oc(e, t) {
  let r = Number.parseInt(window.localStorage.getItem(Vg) || "0"),
    s = `${no.STORE_BASE_URL}dynamicstore/userdata/?id=${t}&cc=${Pt.country_code}`;
  return (
    r && (s += `&v=${r}`), (await (await fetch(s)).json()).rgOwnedApps || []
  );
}
function nc() {
  let e = Re(),
    t = Pt.accountid;
  return _e(jg(e, t));
}
function jg(e, t) {
  return {
    queryKey: lc(t),
    queryFn: async () => {
      if (!t) return new Set();
      let r = await oc(e, t);
      return new Set(r);
    },
    staleTime: 10 * 60 * 1e3,
  };
}
function ac() {
  let e = Ge(),
    t = Pt.accountid;
  return (r) => {
    e.setQueryData(lc(t), (s) => {
      if (s) return new Set([...s.values(), ...r]);
    });
  };
}
function lc(e) {
  return ["AccountOwnedApps", e ?? 0];
}
function cc(e) {
  let t = Re(),
    r = ac();
  return ot({
    mutationFn: () => Ug(t, e),
    onSuccess(s) {
      let [
        i,
        { packageids_added: o, appids_added: n, purchase_result_detail: a },
      ] = s;
      n && r(n);
    },
  });
}
async function Ug(e, t) {
  let r = Pe.Init(To);
  r.Body().set_item_id(ho.fromObject(t));
  let s = await Mo.AddFreeLicense(e, r);
  return [s.GetEResult(), s.Body().toObject()];
}
var es = v(V(), 1);
var dc = v(E(), 1);
function uc(e) {
  let [t, r] = (0, es.useState)(void 0),
    s = `${ee.STORE_BASE_URL}login/${t ? `?redir=${encodeURIComponent(t)}` : ""}`;
  return (
    (0, es.useEffect)(() => {
      r(location.href);
    }, []),
    (0, dc.jsx)(mn, {
      href: s,
      title: e.strToolTip,
      children: xe.Localize("#Button_SignIn"),
    })
  );
}
var lr = v(E());
function ts(e) {
  let { itemid: t } = e,
    { bIsOwned: r, unAppID: s } = $g(t);
  return xt.logged_in
    ? r
      ? (0, lr.jsx)(fn, { appid: s })
      : (0, lr.jsx)(qg, { itemid: t })
    : (0, lr.jsx)(uc, {
        strToolTip: xe.Localize("#SignInToAddToLibrary_Tooltip"),
      });
}
function qg(e) {
  let { mutate: t } = cc(e.itemid);
  return (0, lr.jsx)(pn, {
    onClick: () => t,
    children: xe.Localize("#AddToLibraryButton"),
  });
}
function $g(e) {
  let { data: t } = Ne("appid" in e ? void 0 : e),
    { data: r } = nc(),
    s;
  return (
    "appid" in e ? (s = [e.appid]) : t && (s = t.included_appids),
    s === void 0 || r === void 0 || s.length == 0
      ? { bIsOwned: void 0 }
      : { bIsOwned: !s.some((i) => !r.has(i)), unAppID: s[0] }
  );
}
var he = v(E()),
  Qg = Te.lazy(() => import("./cartmodal-XVFXGCAP.js"));
function pc(e) {
  let { purchaseOption: t } = e;
  if (!t) return null;
  if (t.is_free_to_keep)
    return (0, he.jsx)(ts, { itemid: { packageid: t.packageid } });
  if (t.packageid) return (0, he.jsx)(Kg, { packageid: t.packageid });
  if (t.bundleid) return (0, he.jsx)(Yg, { bundleid: t.bundleid });
  throw "Purchase option does not have package or bundle associated";
}
var Kg = Te.memo(function (t) {
    return mc(t.packageid, void 0);
  }),
  Yg = Te.memo(function (t) {
    return mc(void 0, t.bundleid);
  });
function mc(e, t) {
  let { data: r } = Go(),
    [s, i] = Te.useState(void 0),
    o = Te.useMemo(() => Lo(r, e, t), [r, e, t]),
    { mutate: n } = cn(e, t, o);
  return (0, he.jsxs)(he.Fragment, {
    children: [
      s && (0, he.jsx)(Qg, { lineItemIDs: s, closeCart: () => i(void 0) }),
      o
        ? (0, he.jsx)(Xg, {})
        : (0, he.jsx)(Jg, {
            addToCart: () => {
              n(void 0, { onSuccess: (a) => i(a) });
            },
          }),
    ],
  });
}
function Xg() {
  return (0, he.jsx)(dn, {
    href: `${ee.STORE_BASE_URL}cart/`,
    children: xe.Localize("#AddToCartButton_InCart"),
  });
}
function Jg(e) {
  return (0, he.jsx)(un, {
    onClick: e.addToCart,
    children: xe.Localize("#AddToCartButton_AddToCart"),
  });
}
var vt = v(V());
function fc(e) {
  let { appID: t, feature: r, depth: s, children: i } = e,
    o = mo(r, s),
    n = Ho(),
    [a, l] = vt.default.useState(void 0),
    c = vt.default.useCallback(
      (m) => {
        m.isIntersecting &&
          l((f) => (f?.appID == t && f.snr == o ? f : { appID: t, snr: o }));
      },
      [t, o],
    );
  (0, vt.useEffect)(() => {
    a && n.AddImpression(a.appID, a.snr);
  }, [n, a]);
  let p = Oo(c),
    u = t && (!a || (a.appID != t && a.snr != o)),
    d = bo(i.ref, u ? p : void 0);
  return vt.default.cloneElement(i, { ref: d });
}
var dr = v(Le(), 1),
  it = v(V(), 1);
var os = v(V(), 1);
var hc = "160px";
var gc = "20px";
var _c = "82px";
var bc = "8px";
var yc = "pAoL4PrPWdg-";
var rs = "XNnjz6jit-E-";
var vc = "LSY1zV2DJSM-";
var Cc = "mYGhH-Z5fCw-";
var Sc = "Fuz2JeT4RfI-";
var Wc = "s5Uj2rl926U-";
var Rc = "FMRSvVtOAmQ-";
var Ic = "oVvbc-NOBF8-";
var wc = "S4P-Tu6KIaQ-";
var Pc = "XAEHFx5bCT0-";
var xc = "LhqQh5zRkIw-";
var Dc = "TjfbNdRyip4-";
var Ec = "_0arfU0-7OcQ-";
var Bc = "pMrnNJp5sDA-";
var Fc = "p2qp0XfBE8M-";
var qi = "j7Wl8MzErkA-";
var Ct = "vdNOP82JYX8-";
var Nc = "xlAKnJ50oYQ-";
var Oc = "DUS6KmDUKhc-";
var ss = "yrG419d95pU-";
var is = "mOoPKvox-wE-";
var Ac = "_7zQ9up20PmA-";
var $i = "wzQIocnKXn4-";
var Tc = "_-6uwAFLL9K0-";
var Mc = "DKmMkONAXgw-";
var Gc = "_93IWcQLinlA-";
var Lc = "_7GG-Yb2cOxg-";
var kc = "jHvUCZyctAM-";
var Hc = "Ypx0AcKkoSM-";
var zc = "nK8lTB5HZ5o-";
var Vc = "_80azkrfBXSM-";
var cr = "yO-tcJ7evNI-";
var j = v(E(), 1);
function jc(e) {
  let { appid: t, item: r } = e,
    s = r?.name;
  return (
    !s &&
      r &&
      !r.visible &&
      (s = y.Localize("#wishlist_item_unavailable_title")),
    (0, j.jsx)(qc, { item: r, appid: t, className: Sc, children: s || " " })
  );
}
function Uc(e) {
  let { appid: t } = e,
    { data: r } = Ne({ appid: t });
  return (0, j.jsx)(qc, {
    item: r,
    appid: t,
    className: Ic,
    children: (0, j.jsx)(Zg, { item: r, appid: t }),
  });
}
function Zg(e) {
  let { appid: t, item: r } = e,
    [s, i] = os.useState(!1),
    o = os.useCallback(() => i(!0), []);
  return (0, j.jsxs)("div", {
    className: Dc,
    onMouseEnter: o,
    children: [
      s && r?.visible && (0, j.jsx)(t_, { appid: t, item: r }),
      (0, j.jsx)(e_, { appid: t, item: r }),
    ],
  });
}
function e_(e) {
  let { appid: t, item: r } = e,
    { data: s } = $o({ appid: t });
  if (!s?.header && !s?.library_capsule_2x) return (0, j.jsx)("div", {});
  let i =
      s.header &&
      s?.asset_url_format?.replace(
        "${FILENAME}",
        s.header.replace(/header/, "header_292x136"),
      ),
    o = s.library_capsule_2x ?? s.library_capsule,
    n = o && s?.asset_url_format?.replace("${FILENAME}", o);
  return (0, j.jsxs)(j.Fragment, {
    children: [
      (0, j.jsx)("img", {
        className: wc,
        src: `${ee.STORE_ITEM_BASE_URL}${i}`,
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      (0, j.jsx)("img", {
        className: Pc,
        src: n ? `${ee.STORE_ITEM_BASE_URL}${n}` : hr(yn),
        alt: "",
        role: "presentation",
        loading: "lazy",
      }),
      !n && (0, j.jsx)("div", { className: xc, children: r?.name }),
    ],
  });
}
function t_(e) {
  let { item: t, appid: r } = e,
    { data: s } = Qo({ appid: r });
  return !s || !s.all_ages_screenshots || s.all_ages_screenshots.length < 4
    ? null
    : (0, j.jsxs)("div", {
        className: Vc,
        children: [
          (0, j.jsx)("img", {
            className: cr,
            src: `${ee.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[0].filename}`,
            alt: t.name,
          }),
          (0, j.jsx)("img", {
            className: cr,
            src: `${ee.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[1].filename}`,
            alt: t.name,
          }),
          (0, j.jsx)("img", {
            className: cr,
            src: `${ee.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[2].filename}`,
            alt: t.name,
          }),
          (0, j.jsx)("img", {
            className: cr,
            src: `${ee.STORE_ITEM_BASE_URL}${s.all_ages_screenshots[3].filename}`,
            alt: t.name,
          }),
        ],
      });
}
function qc(e) {
  let t,
    r = Co();
  if (e.item) t = `${ee.STORE_BASE_URL}${e.item.store_url_path}`;
  else if (e.appid) t = `${ee.STORE_BASE_URL}app/${e.appid}/`;
  else
    return (0, j.jsx)("span", { className: e.className, children: e.children });
  return (0, j.jsx)(Dt, {
    ref: r,
    snr: !0,
    to: t,
    className: e.className,
    openInNewWindow: !0,
    children: e.children,
  });
}
var Xc = v(Le());
var $c = "cWLPuFe-zxc-";
var Qc = "z-ezG-Xu844-";
var Kc = "Kech-xMfQ8o-";
var Yc = "MbdBgOhlg7c-";
var Zc = v(E());
function Jc(e) {
  let { reviewScore: t } = e,
    r = s_(t),
    s = t.summary_filtered,
    i;
  return (
    s?.review_count &&
      (i = xe.Localize(
        "#review_summary_reviewrate",
        s.percent_positive,
        s.review_count.toLocaleString(),
      )),
    (0, Zc.jsx)("span", {
      className: r,
      title: i,
      children: s?.review_score_label,
    })
  );
}
function s_(e) {
  let t;
  if (e && e.summary_filtered)
    switch (e.summary_filtered.review_score) {
      case 9:
      case 8:
      case 7:
      case 6:
        t = Yc;
        break;
      case 5:
        t = Kc;
        break;
      case 4:
      case 3:
      case 2:
      case 1:
        t = Qc;
        break;
    }
  return (0, Xc.default)($c, t);
}
var U = v(E(), 1);
function eu(e) {
  let { appid: t } = e;
  return (0, U.jsxs)("div", {
    className: Oc,
    children: [(0, U.jsx)(i_, { appid: t }), (0, U.jsx)(o_, { appid: t })],
  });
}
function tu() {
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)("div", { className: ss }),
      (0, U.jsx)("div", { className: is, children: " " }),
    ],
  });
}
function i_(e) {
  let { appid: t } = e,
    { data: r } = Ko({ appid: t });
  return !r || !r.summary_filtered
    ? (0, U.jsx)(tu, {})
    : (0, U.jsxs)(U.Fragment, {
        children: [
          (0, U.jsx)("div", {
            className: ss,
            children: y.Localize("#wishlist_item_overallreviews"),
          }),
          (0, U.jsx)("div", {
            className: is,
            children: (0, U.jsx)(Jc, { reviewScore: r }),
          }),
        ],
      });
}
function o_(e) {
  let { appid: t } = e,
    { data: r } = Yo({ appid: t }),
    s = bn(r);
  return !r || !s
    ? (0, U.jsx)(tu, {})
    : (0, U.jsxs)(U.Fragment, {
        children: [
          (0, U.jsx)("div", {
            className: ss,
            children: y.Localize("#wishlist_item_releasedate"),
          }),
          (0, U.jsx)("div", { className: is, children: s }),
        ],
      });
}
var Wu = v(Le(), 1);
var ru = v(Le()),
  rt = v(V());
var st = v(E());
function ns(e) {
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
    { isShowingMenu: p, triggerProps: u, menuProps: d, closeMenu: m } = Bo(e),
    f = rt.useRef(null),
    g = rt.useRef(null);
  return (
    rt.useEffect(() => {
      p
        ? g.current?.TakeFocus()
        : g.current?.BFocusWithin() && f.current?.TakeFocus();
    }, [p]),
    (0, st.jsxs)(st.Fragment, {
      children: [
        rt.cloneElement(n, { ...u, navRef: f }),
        (0, st.jsx)(lt, {
          ...c,
          ...d,
          className: (0, ru.default)(d.className, a),
          navRef: g,
          onCancel: m,
          onFocusWithin: (h) => !h && m(),
          childFocusDisabled: !p,
          children: (0, st.jsx)(gr, { children: l }),
        }),
      ],
    })
  );
}
var Yi = v(Le(), 1),
  ie = v(V(), 1);
var re = v(V(), 1);
var su = "WrZdqiILDmU-";
var iu = "idELaaXmvTo-";
var R = v(E(), 1);
function nu(e) {
  let { menuTarget: t, filters: r, setFilters: s } = e;
  return (0, R.jsx)(ns, {
    menuTarget: t,
    direction: "down",
    className: su,
    ignoreHorizontal: !0,
    interactionMode: 1,
    children: (0, R.jsxs)(vo, {
      "flow-children": "grid",
      children: [
        (0, R.jsx)(a_, {}),
        (0, R.jsx)(l_, { strPlatform: r.strPlatform, setFilters: s }),
        (0, R.jsx)(c_, { rgTypeFilters: r.rgTypeFilters, setFilters: s }),
        (0, R.jsx)(u_, { nMaxPriceStop: r.nMaxPriceStop, setFilters: s }),
        (0, R.jsx)(p_, { strMinDiscount: r.strMinDiscount, setFilters: s }),
        (0, R.jsx)(m_, {
          bExcludeEarlyAccess: r.bExcludeEarlyAccess,
          bExcludePrerelease: r.bExcludePrerelease,
          bExcludeVR: r.bExcludeVR,
          setFilters: s,
        }),
        (0, R.jsx)(f_, { rgDeckFilters: r.rgDeckFilters, setFilters: s }),
      ],
    }),
  });
}
function a_(e) {
  let t = We(),
    r = Kl();
  return (0, R.jsxs)(ke, {
    navEntryPreferPosition: 3,
    children: [
      (0, R.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_view"),
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "compact",
            checked: t,
            onChange: (s) => s.currentTarget.checked && r(!0),
          }),
          y.Localize("#wishlist_controls_options_view_compact"),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "viewmode",
            value: "expanded",
            checked: !t,
            onChange: (s) => s.currentTarget.checked && r(!1),
          }),
          y.Localize("#wishlist_controls_options_view_expanded"),
        ],
      }),
    ],
  });
}
function l_(e) {
  let { strPlatform: t, setFilters: r } = e,
    s = re.useCallback(
      (i) => {
        let o = Ws(i.currentTarget.value);
        r((n) => ({ ...n, strPlatform: o }));
      },
      [r],
    );
  return (0, R.jsxs)(ke, {
    navEntryPreferPosition: 3,
    children: [
      (0, R.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_platform"),
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "all",
            checked: t == "all",
            onChange: s,
          }),
          y.Localize("#wishlist_controls_options_platform_all"),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "mac",
            checked: t == "mac",
            onChange: s,
          }),
          y.Localize("#wishlist_controls_options_platform_mac"),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "platform",
            value: "linux",
            checked: t == "linux",
            onChange: s,
          }),
          y.Localize("#wishlist_controls_options_platform_linux"),
        ],
      }),
    ],
  });
}
function Qi(e) {
  let { typeFilter: t, rgTypeFilters: r, setFilters: s, children: i } = e,
    o = re.useCallback(
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
  return (0, R.jsxs)(ne, {
    children: [
      (0, R.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: o,
      }),
      i,
    ],
  });
}
function c_(e) {
  let { rgTypeFilters: t, setFilters: r } = e;
  return (0, R.jsxs)(ke, {
    navEntryPreferPosition: 3,
    children: [
      (0, R.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_type"),
      }),
      (0, R.jsx)(Qi, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "games",
        children: y.Localize("#wishlist_controls_options_type_game"),
      }),
      (0, R.jsx)(Qi, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "software",
        children: y.Localize("#wishlist_controls_options_type_application"),
      }),
      (0, R.jsx)(Qi, {
        rgTypeFilters: t,
        setFilters: r,
        typeFilter: "dlc",
        children: y.Localize("#wishlist_controls_options_type_dlc"),
      }),
    ],
  });
}
function u_(e) {
  let { nMaxPriceStop: t, setFilters: r } = e,
    [s, i] = re.useState(void 0),
    { data: o } = ir(),
    n = re.useId(),
    a = `priceFiltersDataList-${n}`,
    l = `priceFiltersRange-${n}`,
    c = re.useCallback((m) => {
      i(parseInt(m.currentTarget.value));
    }, []),
    p = re.useRef();
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
    re.useEffect(() => {
      if (s === void 0) return;
      let m = window.setTimeout(() => p.current(), 500);
      return () => window.clearTimeout(m);
    }, [s]),
    re.useEffect(() => () => p.current(), []),
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
  return (0, R.jsxs)(ke, {
    children: [
      (0, R.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_price"),
      }),
      (0, R.jsx)("input", {
        type: "range",
        id: l,
        list: a,
        min: 0,
        max: d.length - 1,
        value: u,
        onChange: c,
      }),
      (0, R.jsx)("datalist", {
        id: a,
        children: d.map((m, f) =>
          (0, R.jsx)(d_, { value: f, priceStop: m }, f),
        ),
      }),
      (0, R.jsx)("label", { htmlFor: l, className: iu, children: ur(d[u]) }),
    ],
  });
}
function d_(e) {
  let { value: t, priceStop: r } = e;
  return (0, R.jsx)("option", { value: t, label: ur(r) });
}
function ur(e) {
  return e === "free"
    ? y.Localize("#wishlist_controls_options_price_free")
    : e === "max"
      ? y.Localize("#wishlist_controls_options_price_any")
      : y.Localize(
          "#wishlist_controls_options_price_max_price",
          e.formatted_amount,
        );
}
function p_(e) {
  let { strMinDiscount: t, setFilters: r } = e,
    s = re.useCallback(
      (i) => {
        let o = Rs(i.currentTarget.value);
        r((n) => ({ ...n, strMinDiscount: o }));
      },
      [r],
    );
  return (0, R.jsxs)(ke, {
    navEntryPreferPosition: 3,
    children: [
      (0, R.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_discount"),
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "",
            checked: t == "",
            onChange: s,
          }),
          y.Localize("#wishlist_controls_options_discount_all"),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "any",
            checked: t == "any",
            onChange: s,
          }),
          y.Localize("#wishlist_controls_options_discount_any"),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "50",
            checked: t == "50",
            onChange: s,
          }),
          y.Localize("#wishlist_controls_options_discount_or_more", 50),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "radio",
            name: "discount",
            value: "75",
            checked: t == "75",
            onChange: s,
          }),
          y.Localize("#wishlist_controls_options_discount_or_more", 75),
        ],
      }),
    ],
  });
}
function m_(e) {
  let {
      bExcludeEarlyAccess: t,
      bExcludePrerelease: r,
      bExcludeVR: s,
      setFilters: i,
    } = e,
    o = re.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludeEarlyAccess: c }));
      },
      [i],
    ),
    n = re.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludePrerelease: c }));
      },
      [i],
    ),
    a = re.useCallback(
      (l) => {
        let c = !!l.currentTarget.checked;
        i((p) => ({ ...p, bExcludeVR: c }));
      },
      [i],
    );
  return (0, R.jsxs)(ke, {
    navEntryPreferPosition: 3,
    children: [
      (0, R.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_exclude"),
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "checkbox",
            name: "exclude_earlyaccess",
            checked: t,
            onChange: o,
          }),
          y.Localize("#genre_early_access"),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "checkbox",
            name: "exclude_prerelease",
            checked: r,
            onChange: n,
          }),
          y.Localize("#category_prerelease"),
        ],
      }),
      (0, R.jsxs)(ne, {
        children: [
          (0, R.jsx)("input", {
            type: "checkbox",
            name: "exclude_vr",
            checked: s,
            onChange: a,
          }),
          y.Localize("#wishlist_controls_options_exclude_vr"),
        ],
      }),
    ],
  });
}
function ou(e) {
  let { deckFilter: t, rgDeckFilters: r, setFilters: s, children: i } = e,
    o = re.useCallback(
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
  return (0, R.jsxs)(ne, {
    children: [
      (0, R.jsx)("input", {
        type: "checkbox",
        name: `type_${t}`,
        checked: r.includes(t),
        onChange: o,
      }),
      i,
    ],
  });
}
function f_(e) {
  let { rgDeckFilters: t, setFilters: r } = e;
  return (0, R.jsxs)(ke, {
    navEntryPreferPosition: 3,
    children: [
      (0, R.jsx)("h3", {
        children: y.Localize("#wishlist_controls_options_category_deck"),
      }),
      (0, R.jsx)(ou, {
        deckFilter: "verified",
        rgDeckFilters: t,
        setFilters: r,
        children: y.Localize("#wishlist_controls_options_deck_verified"),
      }),
      (0, R.jsx)(ou, {
        deckFilter: "playable",
        rgDeckFilters: t,
        setFilters: r,
        children: y.Localize("#wishlist_controls_options_deck_playable"),
      }),
    ],
  });
}
var au = "TU227nj1DiE-";
var lu = "JqFaNxdHYhs-";
var cu = "ADJFyRYJvZU-";
var Ki = "_1PVYT-GpKSQ-";
var uu = "qysDgzabHUo-";
var du = "QKns7sLqOwg-";
var pu = "-tV92khCNDs-";
var mu = "ScuzYU4NgQA-";
var fu = "Wh-OfiQaHSM-";
var T = v(E(), 1);
function hu(e) {
  return ie.useState(e);
}
function gu(e) {
  return ie.useState(e);
}
var _u = ie.createContext(void 0);
function bu(e) {
  let { filters: t, setFilters: r, children: s } = e,
    i = ie.useMemo(() => ({ filters: t, setFilters: r }), [t, r]);
  return (0, T.jsx)(_u.Provider, { value: i, children: s });
}
function as() {
  let { filters: e, setFilters: t } = ie.useContext(_u);
  return [e, t];
}
function yu(e, t, r, s) {
  let i = Ge(),
    o = Re(),
    n = Uo(),
    { data: a } = ir(),
    l = We(),
    c = ie.useMemo(() => Cn(r, a), [r, a]),
    { data: p } = Xl(e, ks[t], c),
    { data: u } = Zr(Me().strLanguage),
    { data: d, isLoading: m } = _e({
      ...C_(e, t, c, i, o, l, n),
      enabled: !!s,
    }),
    f = ie.useMemo(() => {
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
    g = ie.useMemo(() => {
      if (!s || f === void 0 || u === void 0 || d === void 0) return;
      let h = Xi(s),
        S = v_(s, u);
      return {
        ...f,
        items: f.items.filter((P) => {
          let w = d.apps[P.appid];
          return w
            ? !!(
                w.name.indexOf(h) !== -1 ||
                (S.size > 0 && w.tagids.some((x) => S.has(x)))
              )
            : !1;
        }),
      };
    }, [s, f, u, d]);
  return s ? { wishlist: g, bLoading: m } : { wishlist: f, bLoading: !1 };
}
function g_(e) {
  let t = (0, T.jsx)(at, {
    className: Ki,
    children: y.Localize("#wishlist_options_button"),
  });
  return (0, T.jsx)(nu, {
    menuTarget: t,
    filters: e.filters,
    setFilters: e.setFilters,
  });
}
function __(e) {
  let { option: t, setSelectedSort: r } = e,
    s = ie.useCallback(() => r(t), [r, t]);
  return (0, T.jsx)(at, {
    focusClassName: (0, Yi.default)("test", mu),
    noFocusRing: !0,
    onClick: s,
    children: (0, T.jsx)(vu, { option: t }),
  });
}
function vu(e) {
  let { option: t } = e,
    r = et(),
    s = `#wishlist_controls_sortby_${t}`;
  return (
    t === "order" && !r && (s = "#wishlist_controls_sortby_their_order"),
    y.Localize(s)
  );
}
function b_(e) {
  let t = (0, T.jsx)(at, {
    className: (0, Yi.default)(Ki, uu),
    children: y.LocalizeReact(
      "#wishlist_sortby_button",
      (0, T.jsx)("span", {
        className: du,
        children: (0, T.jsx)(vu, { option: e.selectedSort }),
      }),
    ),
  });
  return (0, T.jsx)(ns, {
    menuTarget: t,
    direction: "down",
    className: pu,
    interactionMode: 1,
    dismissOnClick: !0,
    children: Cr.map((r) =>
      (0, T.jsx)(__, { option: r, setSelectedSort: e.setSelectedSort }, r),
    ),
  });
}
function Cu(e) {
  let {
    filters: t,
    setFilters: r,
    sort: s,
    setSort: i,
    strTextFilter: o,
    setTextFilter: n,
  } = e;
  return (0, T.jsxs)(lt, {
    "flow-children": "row",
    className: au,
    children: [
      (0, T.jsx)(y_, { strTextFilter: o, setTextFilter: n }),
      (0, T.jsxs)("div", {
        className: cu,
        children: [
          (0, T.jsx)(g_, { filters: t, setFilters: r }),
          (0, T.jsx)(b_, { selectedSort: s, setSelectedSort: i }),
        ],
      }),
    ],
  });
}
function oe(e, t) {
  return y.Localize("#wishlist_controls_filter_tag_label", e, t);
}
function De(e, t, r, s) {
  switch (e) {
    case "strMinDiscount": {
      let i = t,
        o = y.Localize("#wishlist_controls_options_category_discount");
      return i === ""
        ? oe(o, y.Localize("#wishlist_controls_options_discount_all"))
        : i == "50" || i === "75"
          ? oe(o, y.Localize("#wishlist_controls_options_discount_or_more", i))
          : oe(o, y.Localize(`#wishlist_controls_options_discount_${i}`));
    }
    case "strPlatform": {
      let i = t,
        o = y.Localize("#wishlist_controls_options_category_platform");
      return oe(o, y.Localize(`#wishlist_controls_options_platform_${i}`));
    }
    case "bExcludeEarlyAccess": {
      let i = y.Localize("#wishlist_controls_options_category_exclude");
      return oe(i, y.Localize("#genre_early_access"));
    }
    case "bExcludePrerelease": {
      let i = y.Localize("#wishlist_controls_options_category_exclude");
      return oe(i, y.Localize("#category_prerelease"));
    }
    case "bExcludeVR": {
      let i = y.Localize("#wishlist_controls_options_category_exclude");
      return oe(i, y.Localize("#wishlist_controls_options_exclude_vr"));
    }
    case "nMaxPriceStop": {
      let i = t,
        o = y.Localize("#wishlist_controls_options_category_price");
      return i === "none"
        ? oe(o, y.Localize("#wishlist_controls_options_price_any"))
        : i === "free"
          ? oe(o, ur("free"))
          : r?.[i].formatted_amount
            ? oe(o, ur(r[i]))
            : oe(o, "");
    }
    case "rgTypeFilters": {
      let i = t,
        o = y.Localize("#wishlist_controls_options_category_type");
      return i === "games"
        ? oe(o, y.Localize("#wishlist_controls_options_type_game"))
        : i === "software"
          ? oe(o, y.Localize("#wishlist_controls_options_type_application"))
          : oe(o, y.Localize(`#wishlist_controls_options_type_${i}`));
    }
    case "rgDeckFilters": {
      let i = t,
        o = y.Localize("#wishlist_controls_options_category_deck");
      return oe(o, y.Localize(`#wishlist_controls_options_deck_${i}`));
    }
    case "rgTagFilters": {
      let i = t,
        o = y.Localize("#wishlist_controls_options_category_tag"),
        n = s && s[i];
      return oe(o, n || `${i}`);
    }
    case "rgWishlistNotificationGames":
      return y.Localize("#wishlist_filters_notification");
  }
}
function Su(e) {
  let { filters: t, setFilters: r } = e,
    { data: s } = ir(),
    { data: i } = Zr(Me().strLanguage);
  return (0, T.jsxs)("span", {
    children: [
      t.strPlatform !== "all" &&
        (0, T.jsx)(Ee, {
          onClick: () => r({ ...t, strPlatform: "all" }),
          children: De("strPlatform", t.strPlatform),
        }),
      t.rgTypeFilters.map((o) =>
        (0, T.jsx)(
          Ee,
          {
            onClick: () =>
              r({
                ...t,
                rgTypeFilters: t.rgTypeFilters.filter((n) => n !== o),
              }),
            children: De("rgTypeFilters", o),
          },
          o,
        ),
      ),
      t.nMaxPriceStop !== "none" &&
        (0, T.jsx)(Ee, {
          onClick: () => r({ ...t, nMaxPriceStop: "none" }),
          children: De("nMaxPriceStop", t.nMaxPriceStop, s),
        }),
      t.strMinDiscount !== "" &&
        (0, T.jsx)(Ee, {
          onClick: () => r({ ...t, strMinDiscount: "" }),
          children: De("strMinDiscount", t.strMinDiscount),
        }),
      t.bExcludeEarlyAccess &&
        (0, T.jsx)(Ee, {
          onClick: () => r({ ...t, bExcludeEarlyAccess: !1 }),
          children: De("bExcludeEarlyAccess", t.bExcludeEarlyAccess),
        }),
      t.bExcludeVR &&
        (0, T.jsx)(Ee, {
          onClick: () => r({ ...t, bExcludeVR: !1 }),
          children: De("bExcludeVR", t.bExcludeVR),
        }),
      t.bExcludePrerelease &&
        (0, T.jsx)(Ee, {
          onClick: () => r({ ...t, bExcludePrerelease: !1 }),
          children: De("bExcludePrerelease", t.bExcludePrerelease),
        }),
      t.rgDeckFilters.map((o) =>
        (0, T.jsx)(
          Ee,
          {
            onClick: () =>
              r({
                ...t,
                rgDeckFilters: t.rgDeckFilters.filter((n) => n !== o),
              }),
            children: De("rgDeckFilters", o),
          },
          o,
        ),
      ),
      t.rgTagFilters.map((o) =>
        (0, T.jsx)(
          Ee,
          {
            onClick: () =>
              r({ ...t, rgTagFilters: t.rgTagFilters.filter((n) => n !== o) }),
            children: De("rgTagFilters", o, void 0, i),
          },
          o,
        ),
      ),
      !!t.rgWishlistNotificationGames?.length &&
        (0, T.jsx)(Ee, {
          onClick: () => r({ ...t, rgWishlistNotificationGames: void 0 }),
          children: De(
            "rgWishlistNotificationGames",
            t.rgWishlistNotificationGames,
          ),
        }),
    ],
  });
}
function Ee(e) {
  return (0, T.jsx)("button", {
    onClick: e.onClick,
    className: fu,
    children: e.children,
  });
}
var y_ = ie.memo(function (t) {
  let { strTextFilter: r, setTextFilter: s } = t,
    i = ie.useCallback(
      (o) => {
        s(o.currentTarget.value);
      },
      [s],
    );
  return (0, T.jsx)(yo, {
    className: lu,
    value: r,
    onChange: i,
    placeholder: y.Localize("#wishlist_search"),
  });
});
function Xi(e) {
  return e.toLocaleLowerCase();
}
function v_(e, t) {
  let r = new Set();
  for (let s in t) Xi(t[s]).indexOf(e) !== -1 && r.add(parseInt(s));
  return r;
}
function C_(e, t, r, s, i, o, n) {
  let a = ks[t],
    { dataLoader: l, storeBrowseContext: c, cacheStoreItemData: p } = n;
  return {
    queryKey: ["WishlistAppData", e, a, r],
    queryFn: async () => {
      let u = await s.fetchQuery(Ui(i, c, e, Vi(o, p), a, r)),
        d = {};
      return (
        await Promise.all(
          u.items.map(({ appid: m }) =>
            Promise.all([
              s.fetchQuery(Zo(l, { appid: m })),
              s.fetchQuery(Jo(l, { appid: m })),
            ]).then(([f, g]) => {
              d[m] = {
                name: Xi(f.name || ""),
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
var je = v(E(), 1);
function Ru(e) {
  let { wishlistItem: t } = e,
    { data: r } = Ne(t);
  return (0, je.jsxs)("div", {
    className: (0, Wu.default)(Ct, Tc),
    children: [
      r?.is_early_access && (0, je.jsx)(S_, {}),
      (0, je.jsx)(W_, { wishlistItem: t }),
      (0, je.jsx)(hn, { id: t }),
    ],
  });
}
function S_() {
  return (0, je.jsx)("span", {
    className: Mc,
    children: y.Localize("#genre_early_access"),
  });
}
function W_(e) {
  let { wishlistItem: t } = e,
    [r] = as();
  return !Wo() && !r.rgDeckFilters.length ? null : (0, je.jsx)(gn, { id: t });
}
var Iu = v(Le(), 1),
  wu = v(V(), 1);
var ls = v(E(), 1);
function Pu(e) {
  let { appid: t } = e,
    { data: r } = Xo({ appid: t });
  return (0, ls.jsx)("div", {
    className: Lc,
    children: r?.slice(0, 5).map((s) => (0, ls.jsx)(R_, { tag: s }, s.tagid)),
  });
}
function R_(e) {
  let { tag: t } = e,
    [r, s] = as(),
    i = t.tagid,
    o = r.rgTagFilters.includes(i),
    n = wu.useCallback(
      () =>
        s((l) => {
          let { rgTagFilters: c } = l,
            p = o ? c.filter((u) => u != i) : c.concat(i);
          return { ...l, rgTagFilters: p };
        }),
      [s, o, i],
    ),
    a = $l(i, Me().strLanguage);
  return (0, ls.jsx)("button", {
    className: (0, Iu.default)(kc, o && Hc),
    onClick: n,
    title: y.Localize("#wishlist_controls_tag_description"),
    children: a,
  });
}
var F = v(E(), 1),
  Ji = it.memo(function (t) {
    let {
        wishlistItem: r,
        draggableProvided: s,
        isDragging: i,
        dragHandle: o,
        ...n
      } = t,
      { data: a } = Ne({ appid: r.appid }),
      l = nr(),
      c = We(),
      { mutate: p, isPending: u } = En(l, r.appid);
    return (0, F.jsxs)(I_, {
      appid: r.appid,
      item: a,
      draggableProvided: s,
      isDragging: i,
      isRemoving: u,
      ...n,
      children: [
        o,
        (0, F.jsx)(Uc, { appid: r.appid }),
        (0, F.jsxs)("div", {
          className: Ec,
          children: [
            (0, F.jsxs)("div", {
              className: Bc,
              children: [
                (0, F.jsx)(jc, { appid: r.appid, item: a }),
                c && (0, F.jsx)(xu, { wishlistItem: r, removeItem: p }),
              ],
            }),
            (0, F.jsx)(P_, { appid: r.appid, item: a }),
            !c && (0, F.jsx)(x_, { wishlistItem: r, removeItem: p }),
          ],
        }),
      ],
    });
  });
function I_(e) {
  let {
      appid: t,
      item: r,
      draggableProvided: s,
      isDragging: i,
      isRemoving: o,
      children: n,
      ...a
    } = e,
    l = We(),
    c = (0, dr.default)(vc, r && !r.visible && Cc, i && Wc, o && Rc, l && rs),
    p = w_(t, i, a),
    u = s?.draggableProps.style,
    d =
      i && a.bIsGamepadDragClone && u
        ? { ...u, transform: (u.transform ?? "") + " scale( 1.04 )" }
        : u;
  return (0, F.jsx)(po, {
    feature: "wishlist-capsule",
    children: (0, F.jsx)(fc, {
      appID: t,
      children: (0, F.jsx)(sn, {
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
function w_(e, t, r) {
  let { draggableId: s, gamepadStartDrag: i, navRefDraggable: o } = r,
    n = it.useCallback((l) => i(s, e, l), [i, e, s]),
    a = it.useCallback((l) => o(e, l), [o, e]);
  return t || !s || !i || !o
    ? {}
    : {
        onSecondaryButton: n,
        navRef: a,
        onSecondaryActionDescription: y.Localize(
          "#wishlist_gamepaddragdrop_reorderaction",
        ),
      };
}
function P_(e) {
  let { appid: t, item: r } = e;
  if (r && !r.visible) {
    let s = y.Localize("#wishlist_item_unavailable_retired");
    return (
      r.unvailable_for_country_restriction &&
        (s = y.Localize("#wishlist_item_unavailable_region")),
      (0, F.jsx)("div", {
        className: (0, dr.default)(Ct, qi),
        children: (0, F.jsx)("div", { className: Nc, children: s }),
      })
    );
  } else
    return (0, F.jsxs)("div", {
      className: (0, dr.default)(Ct, qi),
      children: [
        (0, F.jsx)(eu, { appid: t }),
        (0, F.jsx)("div", {
          className: Ac,
          children: (0, F.jsx)(D_, { appid: t }),
        }),
      ],
    });
}
function x_(e) {
  let { wishlistItem: t, removeItem: r } = e;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(Ru, { wishlistItem: t }),
      (0, F.jsxs)("div", {
        className: (0, dr.default)(Ct, Gc),
        children: [
          (0, F.jsx)(Pu, { appid: t.appid }),
          (0, F.jsx)(xu, { wishlistItem: t, removeItem: r }),
        ],
      }),
    ],
  });
}
function D_(e) {
  let { appid: t } = e,
    { data: r } = Ne({ appid: t }),
    { data: s } = qo({ appid: t });
  return s
    ? (0, F.jsxs)("div", {
        className: $i,
        children: [
          (0, F.jsx)(_n, { purchaseOption: s, transparentBackground: !0 }),
          (0, F.jsx)(pc, { purchaseOption: s }),
        ],
      })
    : r?.is_free && !r.is_coming_soon
      ? (0, F.jsx)("div", {
          className: $i,
          children: (0, F.jsx)(ts, { itemid: { appid: t } }),
        })
      : null;
}
function xu(e) {
  let { wishlistItem: t, removeItem: r } = e,
    s = et(),
    i = it.useMemo(
      () => new Date(t.date_added * 1e3).toLocaleDateString(ao()),
      [t.date_added],
    );
  return (0, F.jsxs)("div", {
    className: Fc,
    children: [
      y.Localize("#wishlist_item_addedon_date", i),
      s &&
        (0, F.jsxs)(F.Fragment, {
          children: [
            " ( ",
            (0, F.jsx)(at, {
              className: zc,
              onClick: r,
              children: y.Localize("#wishlist_item_remove"),
            }),
            " )",
          ],
        }),
    ],
  });
}
var Du = "oI5QPBYWG8c-";
var Eu = "iiFX76jX8MI-";
var Bu = "tcByxp5r-As-";
var Fu = "OVtmn7mzw0o-";
var Nu = "jfAmlCmNzHQ-";
var Ou = "_0tyA9oW-HwA-";
var cs = "cy7Yf-ZR9xQ-";
var le = v(E(), 1),
  E_ = parseInt(hc),
  B_ = parseInt(gc),
  F_ = parseInt(_c),
  N_ = parseInt(bc);
function Tu(e) {
  let { wishlist: t, loading: r, bEnableDragDrop: s } = e,
    i = H.useCallback(
      (o) => (0, le.jsx)(Ji, { wishlistItem: t.items[o] }),
      [t],
    );
  return s
    ? (0, le.jsx)(O_, { loading: r, wishlist: t })
    : (0, le.jsx)(Mu, { loading: r, nRows: t.items.length || 0, fnRender: i });
}
var Mu = H.forwardRef(function (t, r) {
  let { loading: s, nRows: i, fnRender: o, ...n } = t,
    a = We(),
    l = a ? F_ + N_ : E_ + B_,
    c = a ? 30 : 10,
    p = H.useRef(),
    u = H.useCallback((d) => {
      p.current && clearTimeout(p.current),
        (p.current = setTimeout(() => {
          history.replaceState({ ...(history.state ?? {}), scrollY: d }, "");
        }, 100));
    }, []);
  return (0, le.jsx)(nn, {
    className: (0, Zi.default)(Eu, s && Bu),
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
function O_(e) {
  let { loading: t } = e,
    [r, s] = A_(!t, e.wishlist),
    i = We(),
    {
      useGamepadSensor: o,
      gamepadStartDrag: n,
      onButtonDown: a,
      refCloneContainer: l,
      navRefDraggable: c,
      fnEndGamepadDrag: p,
      bInGamepadDrag: u,
    } = M_(),
    d = H.useCallback(
      (h) => {
        p(), h.destination && r(h.source.index, h.destination.index);
      },
      [p, r],
    ),
    m = H.useCallback(
      (h, S, W, P = !1) => {
        let w = (0, le.jsx)(ic, {
            dragHandleProps: h.dragHandleProps,
            index: W.source.index,
            updateWishlistPriority: r,
          }),
          x = {
            draggableId: W.draggableId,
            gamepadStartDrag: n,
            navRefDraggable: c,
            bIsGamepadDragClone: P,
          };
        return (0, le.jsx)(Ji, {
          wishlistItem: s.items[W.source.index],
          draggableProvided: h,
          isDragging: S.isDragging,
          dragHandle: w,
          ...x,
        });
      },
      [s, r, n, c],
    ),
    f = H.useCallback(
      (h) => {
        let S = s.items[h];
        return (0, le.jsx)("div", {
          className: (0, Zi.default)(yc, i && rs),
          children: (0, le.jsx)(Hl, {
            draggableId: `WishlistItem-${S.appid}-${h}`,
            index: h,
            children: m,
          }),
        });
      },
      [s, i, m],
    ),
    g = H.useCallback(
      (h, S, W) =>
        (0, le.jsx)(T_, {
          onButtonDown: a,
          navRef: l,
          children: m(h, S, W, !0),
        }),
      [m, a, l],
    );
  return (0, le.jsx)(Al, {
    onDragEnd: d,
    sensors: [o],
    children: (0, le.jsx)(ql, {
      droppableId: "droppable",
      renderClone: u ? g : m,
      mode: "virtual",
      children: (h, S) =>
        (0, le.jsx)(Mu, {
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
function A_(e, t) {
  let r = Ge(),
    [s, i] = H.useState(void 0),
    o = H.useMemo(() => (s ? { ...t, items: s } : t), [t, s]),
    { mutate: n } = ot({
      async mutationFn([l, c]) {
        let p = c.map((d) => ({ appid: l[d].appid, priority: l[d].priority })),
          u = await an(p);
        if (u?.result != 1) throw `Error updating wishlist data: ${u?.result}`;
        return !0;
      },
      onMutate([l]) {
        Jl(r, t.steamid, l);
      },
      onError() {
        Zl(r, t.steamid);
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
        let { rgNewItems: p, rgChangedIndicies: u } = ln(o.items, l, c);
        i(p), n([p, u], { onSettled: () => i(void 0) });
      },
      [e, o, n],
    ),
    o,
  ];
}
function T_(e) {
  let { onButtonDown: t, navRef: r, children: s } = e;
  return (0, le.jsx)(gr, {
    children: (0, le.jsx)(lt, {
      autoFocus: !0,
      onButtonDown: t,
      navRef: r,
      onOKActionDescription: y.Localize(
        "#wishlist_gamepaddragdrop_commitreorder",
      ),
      onCancelActionDescription: y.Localize(
        "#wishlist_gamepaddragdrop_cancelreorder",
      ),
      children: s,
    }),
  });
}
function M_() {
  let [e, t] = H.useState(void 0),
    [r] = H.useState(() => new Map()),
    s = H.useRef(null),
    i = H.useRef(void 0),
    o = H.useCallback((d) => (i.current = d), []),
    n = H.useRef(void 0),
    a = H.useCallback(() => {
      let d = n.current;
      d !== void 0 &&
        (setTimeout(() => r.get(d)?.TakeFocus(), 1), (n.current = void 0)),
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
        if (h) return (n.current = m), t(h.snapLift()), !0;
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
    useGamepadSensor: o,
    gamepadStartDrag: c,
    onButtonDown: p,
    refCloneContainer: s,
    navRefDraggable: l,
    fnEndGamepadDrag: a,
    bInGamepadDrag: !!e,
  };
}
var to = v(Le(), 1);
var eo = "bFz2fxg5qDY-";
var Gu = "v0rte85hBgA-";
var Lu = "mMC3clyeve4-";
var ku = "oRgdZRX3fBo-";
var Hu = "wA5EFNQ7hrU-";
var Be = v(E(), 1);
function L_(e) {
  return (0, Be.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, Be.jsx)("path", {
      d: "M33.63 8.05005L30.11 20.81C29.9416 21.453 29.5645 22.0219 29.0378 22.4273C28.5111 22.8328 27.8647 23.0518 27.2 23.05H14.75C14.1022 23.0507 13.4715 22.8416 12.9524 22.4541C12.4333 22.0665 12.0536 21.5213 11.87 20.9L7.56 8.05005H2V4.05005H8.28C8.90845 4.05122 9.52067 4.24973 10.0302 4.61755C10.5398 4.98538 10.921 5.50394 11.12 6.10005L11.78 8.10005L33.63 8.05005ZM15 27.05C14.5055 27.05 14.0222 27.1967 13.6111 27.4714C13.2 27.7461 12.8795 28.1365 12.6903 28.5933C12.5011 29.0502 12.4516 29.5528 12.548 30.0378C12.6445 30.5227 12.8826 30.9682 13.2322 31.3178C13.5819 31.6674 14.0273 31.9056 14.5123 32.002C14.9972 32.0985 15.4999 32.049 15.9567 31.8597C16.4135 31.6705 16.804 31.3501 17.0787 30.939C17.3534 30.5278 17.5 30.0445 17.5 29.55C17.5 28.887 17.2366 28.2511 16.7678 27.7823C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1967 25.6111 27.4714C25.2 27.7461 24.8795 28.1365 24.6903 28.5933C24.5011 29.0502 24.4516 29.5528 24.548 30.0378C24.6445 30.5227 24.8826 30.9682 25.2322 31.3178C25.5819 31.6674 26.0273 31.9056 26.5123 32.002C26.9972 32.0985 27.4999 32.049 27.9567 31.8597C28.4135 31.6705 28.804 31.3501 29.0787 30.939C29.3534 30.5278 29.5 30.0445 29.5 29.55C29.5 28.887 29.2366 28.2511 28.7678 27.7823C28.2989 27.3134 27.663 27.05 27 27.05Z",
      fill: "currentColor",
    }),
  });
}
function k_() {
  let { data: e } = ko();
  return e
    ? (0, Be.jsxs)(Dt, {
        snr: !0,
        external: !0,
        to: ee.STORE_BASE_URL + "cart",
        className: (0, to.default)(eo, Gu),
        children: [
          (0, Be.jsx)(L_, { className: ku }),
          y.Localize("#cart_count", gs(e)),
        ],
      })
    : null;
}
function H_() {
  let { data: e } = Nt(xt.steamid);
  return e
    ? (0, Be.jsx)(Dt, {
        snr: !0,
        external: !0,
        to: ee.STORE_BASE_URL + "wishlist",
        className: (0, to.default)(eo, Lu),
        children: y.Localize("#wishlist_count", gs(e)),
      })
    : null;
}
function zu() {
  return !xt.logged_in || on()
    ? null
    : (0, Be.jsxs)("div", {
        className: Hu,
        children: [(0, Be.jsx)(H_, {}), (0, Be.jsx)(k_, {})],
      });
}
var N = v(E(), 1),
  z_ = So({ Component: V_, TemplateConfig: { bVirtualizedScrolling: !0 } });
function V_() {
  let { error: e, steamid: t, sort: r, filters: s } = z_.useLoaderData();
  return (0, N.jsx)(j_, { error: e, steamid: t, sort: r, filters: s });
}
function j_(e) {
  let { error: t, steamid: r, sort: s, filters: i } = e;
  return (0, N.jsx)(Ql, {
    steamid: r ?? "0",
    children: (0, N.jsxs)("div", {
      className: Du,
      children: [
        (0, N.jsx)(zu, {}),
        (0, N.jsx)(q_, { steamid: r }),
        t || !r
          ? (0, N.jsx)(Fn, { error: t || "ProfileNotFound" })
          : (0, N.jsx)(fo, {
              children: (0, N.jsx)(U_, { steamid: r, sort: s, filters: i }),
            }),
      ],
    }),
  });
}
function U_(e) {
  let { steamid: t } = e,
    [r, s] = hu(e.filters),
    [i, o] = gu(e.sort),
    [n, a] = (0, Ue.useState)(""),
    { data: l } = Nt(t);
  return (
    X_(o, s, a),
    J_(t, i, r),
    l === 0
      ? (0, N.jsx)(K_, {})
      : (0, N.jsxs)(bu, {
          filters: r,
          setFilters: s,
          children: [
            (0, N.jsx)(Cu, {
              filters: r,
              setFilters: s,
              sort: i,
              setSort: o,
              strTextFilter: n,
              setTextFilter: a,
            }),
            (0, N.jsx)("hr", { className: Ou }),
            (0, N.jsx)(Su, { filters: r, setFilters: s }),
            (0, N.jsx)(Q_, { sort: i, filters: r, strTextFilter: n }),
          ],
        })
  );
}
function q_(e) {
  let { steamid: t } = e,
    r = Cs(t);
  return r.data
    ? (0, N.jsxs)("div", {
        className: Nu,
        children: [
          (0, N.jsx)(Eo, {
            playerLinkDetails: r.data,
            statusPosition: "border",
            alt: "",
            role: "presentation",
            size: "FillArea",
            className: Fu,
          }),
          (0, N.jsx)("h2", {
            children: y.Localize(
              "#wishlist_header",
              r.data.public_data?.persona_name?.toLocaleUpperCase(
                Me().strISOCode,
              ) ?? "",
            ),
          }),
        ],
      })
    : null;
}
function $_(e, t, r) {
  let s = et(),
    i = vn(t) && !r;
  return s && i && e == "order";
}
function Q_(e) {
  let { sort: t, filters: r, strTextFilter: s } = e,
    i = nr(),
    { wishlist: o, bLoading: n } = yu(i, t, r, s),
    a = (0, Ue.useRef)(o),
    l = $_(t, r, s),
    c = o || a.current;
  if (!c) return null;
  a.current = c;
  let p = !o || n;
  return c.items.length == 0
    ? (0, N.jsx)(Y_, {})
    : (0, N.jsx)(Tu, { wishlist: c, loading: p, bEnableDragDrop: l && !p });
}
function K_() {
  return et()
    ? (0, N.jsx)("div", {
        className: cs,
        children: (0, N.jsxs)("div", {
          children: [
            (0, N.jsx)("h3", {
              children: y.Localize("#wishlist_your_wishlist_empty"),
            }),
            (0, N.jsx)("p", {
              children: y.Localize("#wishlist_browse_the_store"),
            }),
            (0, N.jsx)("p", {
              children: (0, N.jsx)("a", {
                href: `${ee.HELP_BASE_URL}${Me().strISOCode}/faqs/view/0CAD-3B4D-B874-A065`,
                children: y.Localize("#wishlist_learn_more_button"),
              }),
            }),
          ],
        }),
      })
    : (0, N.jsx)("div", {
        className: cs,
        children: (0, N.jsxs)("div", {
          children: [
            (0, N.jsx)("h3", {
              children: y.Localize("#wishlist_others_wishlist_empty"),
            }),
            (0, N.jsx)("p", {}),
          ],
        }),
      });
}
function Y_() {
  let e = nr(),
    { data: t } = Nt(e);
  return (0, N.jsx)("div", {
    className: cs,
    children: (0, N.jsxs)("div", {
      children: [
        (0, N.jsx)("h3", {
          children: y.Localize("#wishlist_no_items_matching_filters"),
        }),
        !!t &&
          (0, N.jsx)("p", {
            children: y.Localize(
              "#wishlist_x_items_on_wishlist_but_none_match",
              t.toLocaleString(),
            ),
          }),
      ],
    }),
  });
}
function X_(e, t, r) {
  (0, Ue.useEffect)(() => {
    if (location.hash) {
      let s = new URLSearchParams(location.hash.slice(1));
      if (s.has("sort")) {
        let n = s.get("sort");
        Rn(n) && e(Ls[n]);
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
        let n = Sn(i, void 0);
        t(n);
      }
    }
  }, [e, t, r]);
}
function J_(e, t, r) {
  let { data: s } = Cs(e),
    i = (0, Ue.useRef)(void 0),
    o;
  s?.public_data?.profile_url
    ? (o = Ss(`/wishlist/id/${s.public_data.profile_url}/`))
    : s?.public_data?.steamid &&
      (o = Ss(`/wishlist/profiles/${s.public_data.steamid}/`)),
    (0, Ue.useEffect)(() => {
      if (!o) return;
      let { protocol: n, hostname: a, search: l } = window.location,
        c = new URL(`${n}//${a}${o}`),
        p = new URLSearchParams(l);
      t && t != Cr[0] && c.searchParams.append("sort", t);
      let u = Wn(r);
      for (let d of Object.keys(u)) u[d] && c.searchParams.append(d, u[d]);
      i.current !== void 0 &&
        i.current !== c.searchParams.toString() &&
        xn(t, u),
        (i.current = c.searchParams.toString()),
        p.has("cc") && c.searchParams.append("cc", p.get("cc")),
        history.replaceState(history.state, "", c);
    }, [o, t, r]);
}
export { z_ as route };
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

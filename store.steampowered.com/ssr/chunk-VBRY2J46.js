import { a as R, b as Y, c as Z, d as ee, e as te } from "./chunk-XGJJMH5S.js";
import { c as K, d as $, e as J, f as V, z as X } from "./chunk-RXGZIXJE.js";
import { d as N, e as L, g as U } from "./chunk-YZGIGRTM.js";
import { f as w, g as T, h, i as b } from "./chunk-CKW2XZZM.js";
import {
  a as se,
  b as n,
  c as l,
  d as p,
  e as d,
  f as m,
  g as _,
  h as g,
  i as c,
  t as E,
  u as v,
  w as F,
} from "./chunk-FREFVYXB.js";
import { e as Q } from "./chunk-57TLESZE.js";
import { b as D, e as P } from "./chunk-OEXNR4NM.js";
import { m as A } from "./chunk-ZZOBHWVT.js";
import { e as re } from "./chunk-VTJ2AC5Q.js";
function oe(e, t, r, o) {
  let {
    item_count: i,
    owned_games: a = "exclude",
    wishlisted_games: u,
    ignored_games: S = "exclude",
    dlc_for_unowned_games: B = "exclude",
  } = o;
  return {
    queryKey: [
      "FilterListForUser",
      r,
      {
        item_count: i,
        owned_games: a,
        wishlisted_games: u,
        ignored_games: S,
        dlc_for_unowned_games: B,
      },
    ],
    queryFn: async () =>
      (
        await Promise.all(
          r.map(async (y) => ({
            id: y,
            user_filter: await e.fetchQuery(X(t, y)),
          })),
        )
      )
        .filter(({ id: y, user_filter: C }) =>
          (a == "only" && !C?.already_owned) || (u == "only" && !C?.on_wishlist)
            ? !1
            : C
              ? !(
                  C.excluded_content_descriptorids?.length ||
                  (a == "exclude" && C.already_owned) ||
                  (u == "exclude" && C.on_wishlist) ||
                  (S == "exclude" && C.ignored) ||
                  (B == "exclude" && C.dlc_for_unowned_game)
                )
              : !0,
        )
        .slice(0, i)
        .map(({ id: y }) => y),
    staleTime: 10 * 60 * 1e3,
    enabled: r !== void 0,
  };
}
function Se(e, t) {
  let r = D(),
    o = V();
  return P(oe(r, o, e, t));
}
function M(e, t, r, o, i) {
  return {
    queryKey: ["StoreQuery", o],
    queryFn: () => ie(e, t, r, o, i),
    staleTime: 10 * 60 * 1e3,
  };
}
async function ie(e, t, r, o, i) {
  let a = E.Init(L);
  $(r, a),
    i && J(a, i.data_request),
    a.Body().set_query(N.fromObject(o)),
    a.Body().set_query_name(e);
  let u = await U.Query(t, a);
  if (u.GetEResult() != 1)
    throw `Error executing StoreQuery "${e}": ${u.GetErrorMessage()}`;
  return (
    i &&
      u
        .Body()
        .store_items()
        .forEach((S) => i.cacheStoreItemData(S, i.data_request)),
    {
      rgItemIDs: u.Body().ids().map(K),
      metadata: u.Body().metadata().toObject(),
    }
  );
}
function le(e, t, r, o, i, a) {
  let { count: u = 40, name: S = "PopularNewReleases" } = a ?? {};
  return M(
    S,
    e,
    t,
    {
      sort: 40,
      start: 0,
      count: u,
      filters: {
        released_only: !0,
        exclude_from: [3, 2],
        predefined_filter: { filter_type: 1, language_preferences: o },
        content_descriptors_excluded: i,
      },
    },
    r,
  );
}
function xe(e, t) {
  let r = F(),
    { storeBrowseContext: o, dataPreload: i } = R(t),
    { data: a } = Y();
  return P({
    ...le(r, o, i, ee(a, Q(A.LANGUAGE)), te(a), e),
    enabled: a !== void 0,
  });
}
function ue(e, t, r, o, i) {
  let {
      count: a = 40,
      name: u = "TopGrossing",
      discounts_only: S = !1,
    } = i ?? {},
    B = S ? { min_discount_percent: 15 } : void 0;
  return M(
    u,
    e,
    t,
    {
      sort: 10,
      start: 0,
      count: a,
      filters: {
        type_filters: { include_apps: !0 },
        price_filters: B,
        exclude_from: [2],
        content_descriptors_excluded: o,
      },
    },
    r,
  );
}
function pe(e, t) {
  let r = F(),
    { storeBrowseContext: o, dataPreload: i } = R(t),
    { data: a } = Z();
  return P({ ...ue(r, o, i, a, e), enabled: a !== void 0 });
}
function Ae(e, t) {
  return pe({ ...(e ?? {}), discounts_only: !0 }, t);
}
var s = re(se());
var f = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || c(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { item_id: { n: 1, c: b }, item: { n: 2, c: w } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "StoreCapsule";
    }
  },
  G = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || c(e.M()),
        s.Message.initialize(this, t, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              context: { n: 1, c: h },
              data_request: { n: 2, c: T },
              include_spotlights: { n: 5, c: x },
              include_dailydeals: { n: 6, br: n.readBool, bw: l.writeBool },
              include_top_specials_count: {
                n: 7,
                br: n.readInt32,
                bw: l.writeInt32,
              },
              include_purchase_recommendations: {
                n: 8,
                br: n.readBool,
                bw: l.writeBool,
              },
              additional_purchase_item_ids: { n: 9, c: b, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Request";
    }
  },
  x = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.location || c(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              location: { n: 1, br: n.readString, bw: l.writeString },
              category: { n: 2, br: n.readString, bw: l.writeString },
              genre_id: { n: 3, br: n.readInt32, bw: l.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter";
    }
  },
  H = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.spotlights || c(e.M()),
        s.Message.initialize(this, t, 0, -1, [1, 2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              spotlights: { n: 1, c: k, r: !0, q: !0 },
              daily_deals: { n: 2, c: f, r: !0, q: !0 },
              specials: { n: 3, c: f, r: !0, q: !0 },
              purchase_recommendations: { n: 4, c: f, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Response";
    }
  },
  k = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || c(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              item_id: { n: 1, c: b },
              associated_item: { n: 2, c: w },
              spotlight_template: { n: 3, br: n.readString, bw: l.writeString },
              spotlight_title: { n: 4, br: n.readString, bw: l.writeString },
              spotlight_body: { n: 5, br: n.readString, bw: l.writeString },
              asset_url: { n: 6, br: n.readString, bw: l.writeString },
              spotlight_link_url: { n: 7, br: n.readString, bw: l.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Response_Spotlight";
    }
  },
  z = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.capsule_lists || c(e.M()),
        s.Message.initialize(this, t, 0, -1, [1, 3, 4, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              capsule_lists: { n: 1, c: j, r: !0, q: !0 },
              takeover: { n: 2, c: f },
              assets: { n: 3, c: I, r: !0, q: !0 },
              custom_assets: { n: 4, c: I, r: !0, q: !0 },
              layout: { n: 5, br: n.readString, bw: l.writeString },
              fields: { n: 6, c: q, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster";
    }
  },
  j = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || c(e.M()),
        s.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              name: { n: 1, br: n.readString, bw: l.writeString },
              capsules: { n: 2, c: f, r: !0, q: !0 },
              max_visible: { n: 3, br: n.readInt32, bw: l.writeInt32 },
              max_unreleased: { n: 4, br: n.readInt32, bw: l.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_CapsuleList";
    }
  },
  I = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.asset_name || c(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              asset_name: { n: 1, br: n.readString, bw: l.writeString },
              asset_path: { n: 2, br: n.readString, bw: l.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_Asset";
    }
  },
  q = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || c(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              name: { n: 1, br: n.readString, bw: l.writeString },
              value: { n: 2, br: n.readString, bw: l.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_Field";
    }
  },
  O = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || c(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: h }, data_request: { n: 2, c: T } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetFrontPageConfig_Request";
    }
  },
  W = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cluster || c(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cluster: { n: 1, c: z } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return _(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetFrontPageConfig_Response";
    }
  },
  de;
((r) => {
  function e(o, i) {
    return o.SendMsg("StoreMarketing.GetItemsToFeature#1", v(G, i), H, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetItemsToFeature = e;
  function t(o, i) {
    return o.SendMsg("StoreMarketing.GetFrontPageConfig#1", v(O, i), W, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetFrontPageConfig = t;
})((de ||= {}));
export { Se as a, xe as b, pe as c, Ae as d, G as e, x as f, de as g };

import { a as F, b as Y, c as Z, d as ee, e as te } from "./chunk-3XZKGMMO.js";
import { c as K, d as $, e as J, f as V, z as X } from "./chunk-7EVTPCQK.js";
import { d as N, e as L, g as U } from "./chunk-JAPN6LIT.js";
import { f as v, g as w, h as T, i as B } from "./chunk-PY6WSLKA.js";
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
  u as I,
  w as b,
} from "./chunk-46J3XY4H.js";
import { e as Q } from "./chunk-AFJ7U5HD.js";
import { b as D, e as P } from "./chunk-R2DII6BZ.js";
import { m as A } from "./chunk-IWW7GU2Z.js";
import { e as re } from "./chunk-DGTYJ2T6.js";
function oe(e, t, r, o) {
  let {
    item_count: a,
    owned_games: i = "exclude",
    wishlisted_games: u,
    ignored_games: f = "exclude",
    dlc_for_unowned_games: W = "exclude",
  } = o;
  return {
    queryKey: [
      "FilterListForUser",
      r,
      {
        item_count: a,
        owned_games: i,
        wishlisted_games: u,
        ignored_games: f,
        dlc_for_unowned_games: W,
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
        .filter(({ id: y, user_filter: S }) =>
          (i == "only" && !S?.already_owned) || (u == "only" && !S?.on_wishlist)
            ? !1
            : S
              ? !(
                  S.excluded_content_descriptorids?.length ||
                  (i == "exclude" && S.already_owned) ||
                  (u == "exclude" && S.on_wishlist) ||
                  (f == "exclude" && S.ignored) ||
                  (W == "exclude" && S.dlc_for_unowned_game)
                )
              : !0,
        )
        .slice(0, a)
        .map(({ id: y }) => y),
    staleTime: 10 * 60 * 1e3,
    enabled: r !== void 0,
  };
}
function ce(e, t) {
  let r = D(),
    o = V();
  return P(oe(r, o, e, t));
}
function R(e, t, r, o, a) {
  return {
    queryKey: ["StoreQuery", o],
    queryFn: () => ae(e, t, r, o, a),
    staleTime: 10 * 60 * 1e3,
  };
}
async function ae(e, t, r, o, a) {
  let i = E.Init(L);
  $(r, i),
    a && J(i, a.data_request),
    i.Body().set_query(N.fromObject(o)),
    i.Body().set_query_name(e);
  let u = await U.Query(t, i);
  if (u.GetEResult() != 1)
    throw `Error executing StoreQuery "${e}": ${u.GetErrorMessage()}`;
  return (
    a &&
      u
        .Body()
        .store_items()
        .forEach((f) => a.cacheStoreItemData(f, a.data_request)),
    {
      rgItemIDs: u.Body().ids().map(K),
      metadata: u.Body().metadata().toObject(),
    }
  );
}
function le(e, t, r, o, a, i) {
  let { count: u = 40, name: f = "PopularNewReleases" } = i ?? {};
  return R(
    f,
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
        content_descriptors_excluded: a,
      },
    },
    r,
  );
}
function Ge(e, t) {
  let r = b(),
    { storeBrowseContext: o, dataPreload: a } = F(t),
    { data: i } = Y();
  return P({
    ...le(r, o, a, ee(i, Q(A.LANGUAGE)), te(i), e),
    enabled: i !== void 0,
  });
}
function ue(e, t, r, o, a) {
  let { count: i = 40, name: u = "TopGrossing" } = a ?? {};
  return R(
    u,
    e,
    t,
    {
      sort: 10,
      start: 0,
      count: i,
      filters: {
        type_filters: { include_apps: !0 },
        exclude_from: [2],
        content_descriptors_excluded: o,
      },
    },
    r,
  );
}
function We(e, t) {
  let r = b(),
    { storeBrowseContext: o, dataPreload: a } = F(t),
    { data: i } = Z();
  return P({ ...ue(r, o, a, i, e), enabled: i !== void 0 });
}
var s = re(se());
var C = class e extends s.Message {
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
            fields: { item_id: { n: 1, c: B }, item: { n: 2, c: v } },
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
  h = class e extends s.Message {
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
              context: { n: 1, c: T },
              data_request: { n: 2, c: w },
              include_spotlights: { n: 5, c: G },
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
              additional_purchase_item_ids: { n: 9, c: B, r: !0, q: !0 },
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
  G = class e extends s.Message {
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
              spotlights: { n: 1, c: x, r: !0, q: !0 },
              daily_deals: { n: 2, c: C, r: !0, q: !0 },
              specials: { n: 3, c: C, r: !0, q: !0 },
              purchase_recommendations: { n: 4, c: C, r: !0, q: !0 },
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
  x = class e extends s.Message {
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
              item_id: { n: 1, c: B },
              associated_item: { n: 2, c: v },
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
  k = class e extends s.Message {
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
              capsule_lists: { n: 1, c: z, r: !0, q: !0 },
              takeover: { n: 2, c: C },
              assets: { n: 3, c: M, r: !0, q: !0 },
              custom_assets: { n: 4, c: M, r: !0, q: !0 },
              layout: { n: 5, br: n.readString, bw: l.writeString },
              fields: { n: 6, c: j, r: !0, q: !0 },
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
  z = class e extends s.Message {
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
              capsules: { n: 2, c: C, r: !0, q: !0 },
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
  M = class e extends s.Message {
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
  j = class e extends s.Message {
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
  q = class e extends s.Message {
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
            fields: { context: { n: 1, c: T }, data_request: { n: 2, c: w } },
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
  O = class e extends s.Message {
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
        e.sm_m || (e.sm_m = { proto: e, fields: { cluster: { n: 1, c: k } } }),
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
  pe;
((r) => {
  function e(o, a) {
    return o.SendMsg("StoreMarketing.GetItemsToFeature#1", I(h, a), H, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetItemsToFeature = e;
  function t(o, a) {
    return o.SendMsg("StoreMarketing.GetFrontPageConfig#1", I(q, a), O, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetFrontPageConfig = t;
})((pe ||= {}));
export { ce as a, Ge as b, h as c, G as d, pe as e, We as f };

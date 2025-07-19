import { a as N, c as Q } from "./chunk-RNEFI6Q3.js";
import { c as O, d as A, e as D } from "./chunk-ZKC7NHWH.js";
import { d as j, e as q, g as W } from "./chunk-LTBK4ZTE.js";
import { f as B, g as b, h as M, i as c } from "./chunk-D5TZ6UOZ.js";
import {
  a as K,
  b as i,
  c as a,
  d as l,
  e as u,
  f as p,
  g as d,
  h as m,
  i as _,
  t as z,
  u as y,
  w as x,
} from "./chunk-C2T5LAGG.js";
import { e as k } from "./chunk-6FFQPNDI.js";
import { e as U } from "./chunk-XSIUNGIQ.js";
function L(e, t, r, o, n) {
  return {
    queryKey: ["StoreQuery", o],
    queryFn: () => $(e, t, r, o, n),
    staleTime: 10 * 60 * 1e3,
  };
}
async function $(e, t, r, o, n) {
  let g = z.Init(q);
  A(r, g),
    n && D(g, n.data_request),
    g.Body().set_query(j.fromObject(o)),
    g.Body().set_query_name(e);
  let C = await W.Query(t, g);
  if (C.GetEResult() != 1)
    throw `Error executing StoreQuery "${e}": ${C.GetErrorMessage()}`;
  return (
    n &&
      C.Body()
        .store_items()
        .forEach((P) => n.cacheStoreItemData(P, n.data_request)),
    {
      rgItemIDs: C.Body().ids().map(O),
      metadata: C.Body().metadata().toObject(),
    }
  );
}
function J(e, t, r, o, n) {
  let {
      count: g = 40,
      name: C = "TopGrossing",
      discounts_only: P = !1,
    } = n ?? {},
    E = P ? { min_discount_percent: 15 } : void 0;
  return L(
    C,
    e,
    t,
    {
      sort: 10,
      start: 0,
      count: g,
      filters: {
        type_filters: { include_apps: !0 },
        price_filters: E,
        exclude_from: [2],
        content_descriptors_excluded: o,
      },
    },
    r,
  );
}
function V(e, t) {
  let r = x(),
    { storeBrowseContext: o, dataPreload: n } = N(t),
    { data: g } = Q();
  return k({ ...J(r, o, n, g, e), enabled: g !== void 0 });
}
function de(e, t) {
  return V({ ...(e ?? {}), discounts_only: !0 }, t);
}
var s = U(K());
var S = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || _(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { item_id: { n: 1, c }, item: { n: 2, c: B } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "StoreCapsule";
    }
  },
  R = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || _(e.M()),
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
              context: { n: 1, c: M },
              data_request: { n: 2, c: b },
              include_spotlights: { n: 5, c: F },
              include_dailydeals: { n: 6, br: i.readBool, bw: a.writeBool },
              include_top_specials_count: {
                n: 7,
                br: i.readInt32,
                bw: a.writeInt32,
              },
              include_purchase_recommendations: {
                n: 8,
                br: i.readBool,
                bw: a.writeBool,
              },
              additional_purchase_item_ids: { n: 9, c, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Request";
    }
  },
  F = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.location || _(e.M()),
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
              location: { n: 1, br: i.readString, bw: a.writeString },
              category: { n: 2, br: i.readString, bw: a.writeString },
              genre_id: { n: 3, br: i.readInt32, bw: a.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter";
    }
  },
  I = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.spotlights || _(e.M()),
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
              spotlights: { n: 1, c: v, r: !0, q: !0 },
              daily_deals: { n: 2, c: S, r: !0, q: !0 },
              specials: { n: 3, c: S, r: !0, q: !0 },
              purchase_recommendations: { n: 4, c: S, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Response";
    }
  },
  v = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || _(e.M()),
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
              item_id: { n: 1, c },
              associated_item: { n: 2, c: B },
              spotlight_template: { n: 3, br: i.readString, bw: a.writeString },
              spotlight_title: { n: 4, br: i.readString, bw: a.writeString },
              spotlight_body: { n: 5, br: i.readString, bw: a.writeString },
              asset_url: { n: 6, br: i.readString, bw: a.writeString },
              spotlight_link_url: { n: 7, br: i.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Response_Spotlight";
    }
  },
  T = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.capsule_lists || _(e.M()),
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
              capsule_lists: { n: 1, c: w, r: !0, q: !0 },
              takeover: { n: 2, c: S },
              assets: { n: 3, c: f, r: !0, q: !0 },
              custom_assets: { n: 4, c: f, r: !0, q: !0 },
              layout: { n: 5, br: i.readString, bw: a.writeString },
              fields: { n: 6, c: H, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster";
    }
  },
  w = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || _(e.M()),
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
              name: { n: 1, br: i.readString, bw: a.writeString },
              capsules: { n: 2, c: S, r: !0, q: !0 },
              max_visible: { n: 3, br: i.readInt32, bw: a.writeInt32 },
              max_unreleased: { n: 4, br: i.readInt32, bw: a.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_CapsuleList";
    }
  },
  f = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.asset_name || _(e.M()),
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
              asset_name: { n: 1, br: i.readString, bw: a.writeString },
              asset_path: { n: 2, br: i.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_Asset";
    }
  },
  H = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || _(e.M()),
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
              name: { n: 1, br: i.readString, bw: a.writeString },
              value: { n: 2, br: i.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_Field";
    }
  },
  G = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || _(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: M }, data_request: { n: 2, c: b } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetFrontPageConfig_Request";
    }
  },
  h = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cluster || _(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cluster: { n: 1, c: T } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return p(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      m(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetFrontPageConfig_Response";
    }
  },
  X;
((r) => {
  function e(o, n) {
    return o.SendMsg("StoreMarketing.GetItemsToFeature#1", y(R, n), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetItemsToFeature = e;
  function t(o, n) {
    return o.SendMsg("StoreMarketing.GetFrontPageConfig#1", y(G, n), h, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetFrontPageConfig = t;
})((X ||= {}));
export { L as a, V as b, de as c, R as d, F as e, X as f };

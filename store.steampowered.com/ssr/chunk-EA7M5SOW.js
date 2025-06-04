import { a as y, b as U, c as K, d as $, e as J } from "./chunk-KUGGUCUI.js";
import { c as Q, d as E, e as L } from "./chunk-Z4JFYMVC.js";
import { d as A, e as D, g as N } from "./chunk-RQKDO56E.js";
import { f as F, g as I, h as v, i as f } from "./chunk-B5ZXSVB3.js";
import {
  a as X,
  b as a,
  c as i,
  d as u,
  e as p,
  f as m,
  g as d,
  h as g,
  i as _,
  t as O,
  u as M,
  w as P,
} from "./chunk-4FTNGOE5.js";
import { e as W } from "./chunk-UFFE35NY.js";
import { e as C } from "./chunk-R6GEVKLE.js";
import { m as q } from "./chunk-TSBVJ6DK.js";
import { e as V } from "./chunk-QYDZXQ52.js";
function B(e, t, r, o, n) {
  return {
    queryKey: ["StoreQuery", o],
    queryFn: () => Y(e, t, r, o, n),
    staleTime: 10 * 60 * 1e3,
  };
}
async function Y(e, t, r, o, n) {
  let l = O.Init(D);
  E(r, l),
    n && L(l, n.data_request),
    l.Body().set_query(A.fromObject(o)),
    l.Body().set_query_name(e);
  let S = await N.Query(t, l);
  if (S.GetEResult() != 1)
    throw `Error executing StoreQuery "${e}": ${S.GetErrorMessage()}`;
  return (
    n &&
      S.Body()
        .store_items()
        .forEach((R) => n.cacheStoreItemData(R, n.data_request)),
    {
      rgItemIDs: S.Body().ids().map(Q),
      metadata: S.Body().metadata().toObject(),
    }
  );
}
function te(e, t, r, o, n, l) {
  let { count: S = 40, name: R = "PopularNewReleases" } = l ?? {};
  return B(
    R,
    e,
    t,
    {
      sort: 40,
      start: 0,
      count: S,
      filters: {
        released_only: !0,
        exclude_from: [3, 2],
        predefined_filter: { filter_type: 1, language_preferences: o },
        content_descriptors_excluded: n,
      },
    },
    r,
  );
}
function fe(e, t) {
  let r = P(),
    { storeBrowseContext: o, dataPreload: n } = y(t),
    { data: l } = U();
  return C({
    ...te(r, o, n, $(l, W(q.LANGUAGE)), J(l), e),
    enabled: l !== void 0,
  });
}
function re(e, t, r, o, n) {
  let { count: l = 40, name: S = "TopGrossing" } = n ?? {};
  return B(
    S,
    e,
    t,
    {
      sort: 10,
      start: 0,
      count: l,
      filters: {
        type_filters: { include_apps: !0 },
        exclude_from: [2],
        content_descriptors_excluded: o,
      },
    },
    r,
  );
}
function Ie(e, t) {
  let r = P(),
    { storeBrowseContext: o, dataPreload: n } = y(t),
    { data: l } = K();
  return C({ ...re(r, o, n, l, e), enabled: l !== void 0 });
}
var s = V(X());
var c = class e extends s.Message {
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
            fields: { item_id: { n: 1, c: f }, item: { n: 2, c: F } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  w = class e extends s.Message {
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
              context: { n: 1, c: v },
              data_request: { n: 2, c: I },
              include_spotlights: { n: 5, c: T },
              include_dailydeals: { n: 6, br: a.readBool, bw: i.writeBool },
              include_top_specials_count: {
                n: 7,
                br: a.readInt32,
                bw: i.writeInt32,
              },
              include_purchase_recommendations: {
                n: 8,
                br: a.readBool,
                bw: i.writeBool,
              },
              additional_purchase_item_ids: { n: 9, c: f, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  T = class e extends s.Message {
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
              location: { n: 1, br: a.readString, bw: i.writeString },
              category: { n: 2, br: a.readString, bw: i.writeString },
              genre_id: { n: 3, br: a.readInt32, bw: i.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
              spotlights: { n: 1, c: G, r: !0, q: !0 },
              daily_deals: { n: 2, c, r: !0, q: !0 },
              specials: { n: 3, c, r: !0, q: !0 },
              purchase_recommendations: { n: 4, c, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  G = class e extends s.Message {
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
              item_id: { n: 1, c: f },
              associated_item: { n: 2, c: F },
              spotlight_template: { n: 3, br: a.readString, bw: i.writeString },
              spotlight_title: { n: 4, br: a.readString, bw: i.writeString },
              spotlight_body: { n: 5, br: a.readString, bw: i.writeString },
              asset_url: { n: 6, br: a.readString, bw: i.writeString },
              spotlight_link_url: { n: 7, br: a.readString, bw: i.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
              capsule_lists: { n: 1, c: h, r: !0, q: !0 },
              takeover: { n: 2, c },
              assets: { n: 3, c: b, r: !0, q: !0 },
              custom_assets: { n: 4, c: b, r: !0, q: !0 },
              layout: { n: 5, br: a.readString, bw: i.writeString },
              fields: { n: 6, c: x, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  h = class e extends s.Message {
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
              name: { n: 1, br: a.readString, bw: i.writeString },
              capsules: { n: 2, c, r: !0, q: !0 },
              max_visible: { n: 3, br: a.readInt32, bw: i.writeInt32 },
              max_unreleased: { n: 4, br: a.readInt32, bw: i.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  b = class e extends s.Message {
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
              asset_name: { n: 1, br: a.readString, bw: i.writeString },
              asset_path: { n: 2, br: a.readString, bw: i.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  x = class e extends s.Message {
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
              name: { n: 1, br: a.readString, bw: i.writeString },
              value: { n: 2, br: a.readString, bw: i.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  z = class e extends s.Message {
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
            fields: { context: { n: 1, c: v }, data_request: { n: 2, c: I } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  j = class e extends s.Message {
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
        e.sm_m || (e.sm_m = { proto: e, fields: { cluster: { n: 1, c: k } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return m(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
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
  se;
((r) => {
  function e(o, n) {
    return o.SendMsg("StoreMarketing.GetItemsToFeature#1", M(w, n), H, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetItemsToFeature = e;
  function t(o, n) {
    return o.SendMsg("StoreMarketing.GetFrontPageConfig#1", M(z, n), j, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetFrontPageConfig = t;
})((se ||= {}));
export { fe as a, w as b, T as c, se as d, Ie as e };

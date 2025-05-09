const CLSTAMP = 9728496;

import { f as P, g as f, h as b, i as _ } from "./chunk-FOXJ5T3M.js";
import {
  a as k,
  b as a,
  c as o,
  d as n,
  e as l,
  f as u,
  g as p,
  h as d,
  i as g,
  u as c,
} from "./chunk-CVUMGOQH.js";
import { e as h } from "./chunk-CKLXZZTE.js";
var s = h(k());
var m = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || g(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { item_id: { n: 1, c: _ }, item: { n: 2, c: P } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "StoreCapsule";
    }
  },
  B = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || g(e.M()),
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
              context: { n: 1, c: b },
              data_request: { n: 2, c: f },
              include_spotlights: { n: 5, c: M },
              include_dailydeals: { n: 6, br: a.readBool, bw: o.writeBool },
              include_top_specials_count: {
                n: 7,
                br: a.readInt32,
                bw: o.writeInt32,
              },
              include_purchase_recommendations: {
                n: 8,
                br: a.readBool,
                bw: o.writeBool,
              },
              additional_purchase_item_ids: { n: 9, c: _, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Request";
    }
  },
  M = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.location || g(e.M()),
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
              location: { n: 1, br: a.readString, bw: o.writeString },
              category: { n: 2, br: a.readString, bw: o.writeString },
              genre_id: { n: 3, br: a.readInt32, bw: o.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter";
    }
  },
  y = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.spotlights || g(e.M()),
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
              spotlights: { n: 1, c: F, r: !0, q: !0 },
              daily_deals: { n: 2, c: m, r: !0, q: !0 },
              specials: { n: 3, c: m, r: !0, q: !0 },
              purchase_recommendations: { n: 4, c: m, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Response";
    }
  },
  F = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || g(e.M()),
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
              item_id: { n: 1, c: _ },
              associated_item: { n: 2, c: P },
              spotlight_template: { n: 3, br: a.readString, bw: o.writeString },
              spotlight_title: { n: 4, br: a.readString, bw: o.writeString },
              spotlight_body: { n: 5, br: a.readString, bw: o.writeString },
              asset_url: { n: 6, br: a.readString, bw: o.writeString },
              spotlight_link_url: { n: 7, br: a.readString, bw: o.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetItemsToFeature_Response_Spotlight";
    }
  },
  R = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.capsule_lists || g(e.M()),
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
              capsule_lists: { n: 1, c: v, r: !0, q: !0 },
              takeover: { n: 2, c: m },
              assets: { n: 3, c: C, r: !0, q: !0 },
              custom_assets: { n: 4, c: C, r: !0, q: !0 },
              layout: { n: 5, br: a.readString, bw: o.writeString },
              fields: { n: 6, c: I, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster";
    }
  },
  v = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || g(e.M()),
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
              name: { n: 1, br: a.readString, bw: o.writeString },
              capsules: { n: 2, c: m, r: !0, q: !0 },
              max_visible: { n: 3, br: a.readInt32, bw: o.writeInt32 },
              max_unreleased: { n: 4, br: a.readInt32, bw: o.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_CapsuleList";
    }
  },
  C = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.asset_name || g(e.M()),
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
              asset_name: { n: 1, br: a.readString, bw: o.writeString },
              asset_path: { n: 2, br: a.readString, bw: o.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_Asset";
    }
  },
  I = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || g(e.M()),
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
              name: { n: 1, br: a.readString, bw: o.writeString },
              value: { n: 2, br: a.readString, bw: o.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStorePageCluster_Field";
    }
  },
  H = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || g(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: b }, data_request: { n: 2, c: f } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetFrontPageConfig_Request";
    }
  },
  T = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cluster || g(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cluster: { n: 1, c: R } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return p(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      d(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CStoreMarketing_GetFrontPageConfig_Response";
    }
  },
  G;
((r) => {
  function e(i, S) {
    return i.SendMsg("StoreMarketing.GetItemsToFeature#1", c(B, S), y, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetItemsToFeature = e;
  function t(i, S) {
    return i.SendMsg("StoreMarketing.GetFrontPageConfig#1", c(H, S), T, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  r.GetFrontPageConfig = t;
})((G ||= {}));
export { B as a, M as b, G as c };

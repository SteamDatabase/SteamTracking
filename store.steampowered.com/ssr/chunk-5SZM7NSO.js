import { a as S, f as Ae, g as xe, h as Oe } from "./chunk-KOBJA5FL.js";
import {
  a as Ke,
  b as i,
  c as o,
  d as n,
  e as p,
  f as l,
  g as u,
  h as _,
  i as d,
  m as Ue,
  n as C,
  u as P,
} from "./chunk-WSHEPKLJ.js";
import { e as Le } from "./chunk-QFZBH32V.js";
var s = Le(Ke());
var B = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.activation_code || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              activation_code: { n: 1, br: i.readString, bw: o.writeString },
              purchase_platform: { n: 2, br: i.readInt32, bw: o.writeInt32 },
              is_request_from_client: { n: 3, br: i.readBool, bw: o.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_RegisterCDKey_Request";
    }
  },
  M = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.transactionid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              transactionid: {
                n: 1,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              packageid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              purchase_status: { n: 3, br: i.readUint32, bw: o.writeUint32 },
              result_detail: { n: 4, br: i.readUint32, bw: o.writeUint32 },
              transaction_time: { n: 5, br: i.readUint32, bw: o.writeUint32 },
              payment_method: { n: 6, br: i.readUint32, bw: o.writeUint32 },
              base_price: {
                n: 7,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              total_discount: {
                n: 8,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              tax: { n: 9, br: i.readUint64String, bw: o.writeUint64String },
              shipping: {
                n: 10,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              currency_code: { n: 11, br: i.readUint32, bw: o.writeUint32 },
              country_code: { n: 12, br: i.readString, bw: o.writeString },
              error_headline: { n: 13, br: i.readString, bw: o.writeString },
              error_string: { n: 14, br: i.readString, bw: o.writeString },
              error_link_text: { n: 15, br: i.readString, bw: o.writeString },
              error_link_url: { n: 16, br: i.readString, bw: o.writeString },
              error_appid: { n: 17, br: i.readUint32, bw: o.writeUint32 },
              line_items: { n: 18, c: H, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_PurchaseReceiptInfo";
    }
  },
  H = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.packageid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packageid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              line_item_description: {
                n: 3,
                br: i.readString,
                bw: o.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_PurchaseReceiptInfo_LineItem";
    }
  },
  T = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.purchase_result_details || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              purchase_result_details: {
                n: 1,
                br: i.readInt32,
                bw: o.writeInt32,
              },
              purchase_receipt_info: { n: 2, c: M },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_RegisterCDKey_Response";
    }
  },
  G = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 2, br: i.readString, bw: o.writeString },
              country_code: { n: 3, br: i.readString, bw: o.writeString },
              favor_rarer_tags: { n: 4, br: i.readBool, bw: o.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetRecommendedTagsForUser_Request";
    }
  },
  w = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags: { n: 1, c: I, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetRecommendedTagsForUser_Response";
    }
  },
  I = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              name: { n: 2, br: i.readString, bw: o.writeString },
              weight: { n: 3, br: i.readFloat, bw: o.writeFloat },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetRecommendedTagsForUser_Response_Tag";
    }
  },
  z = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { language: { n: 1, br: i.readString, bw: o.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Request";
    }
  },
  F = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags: { n: 1, c: k, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Response";
    }
  },
  k = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              name: { n: 2, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Response_Tag";
    }
  },
  j = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: i.readString, bw: o.writeString },
              tagids: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Request";
    }
  },
  q = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags: { n: 1, c: W, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Response";
    }
  },
  W = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              english_name: { n: 2, br: i.readString, bw: o.writeString },
              name: { n: 3, br: i.readString, bw: o.writeString },
              normalized_name: { n: 4, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Response_Tag";
    }
  },
  h = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: i.readString, bw: o.writeString },
              have_version_hash: { n: 2, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Request";
    }
  },
  D = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.version_hash || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              version_hash: { n: 1, br: i.readString, bw: o.writeString },
              tags: { n: 2, c: U, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Response";
    }
  },
  U = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              name: { n: 2, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Response_Tag";
    }
  },
  y = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.os_win || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [10, 16], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              os_win: { n: 4, br: i.readBool, bw: o.writeBool },
              os_mac: { n: 5, br: i.readBool, bw: o.writeBool },
              os_linux: { n: 6, br: i.readBool, bw: o.writeBool },
              full_controller_support: {
                n: 7,
                br: i.readBool,
                bw: o.writeBool,
              },
              native_steam_controller: {
                n: 8,
                br: i.readBool,
                bw: o.writeBool,
              },
              include_coming_soon: { n: 9, br: i.readBool, bw: o.writeBool },
              excluded_tagids: {
                n: 10,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              exclude_early_access: { n: 11, br: i.readBool, bw: o.writeBool },
              exclude_videos: { n: 12, br: i.readBool, bw: o.writeBool },
              exclude_software: { n: 13, br: i.readBool, bw: o.writeBool },
              exclude_dlc: { n: 14, br: i.readBool, bw: o.writeBool },
              exclude_soundtracks: { n: 15, br: i.readBool, bw: o.writeBool },
              featured_tagids: {
                n: 16,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStoreDiscoveryQueueSettings";
    }
  },
  A = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              queue_type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              country_code: { n: 2, br: i.readString, bw: o.writeString },
              rebuild_queue: { n: 3, br: i.readBool, bw: o.writeBool },
              settings_changed: { n: 4, br: i.readBool, bw: o.writeBool },
              settings: { n: 5, c: y },
              rebuild_queue_if_stale: { n: 6, br: i.readBool, bw: o.writeBool },
              ignore_user_preferences: {
                n: 8,
                br: i.readBool,
                bw: o.writeBool,
              },
              no_experimental_results: {
                n: 9,
                br: i.readBool,
                bw: o.writeBool,
              },
              experimental_cohort: {
                n: 10,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              debug_get_solr_query: { n: 11, br: i.readBool, bw: o.writeBool },
              store_page_filter: { n: 12, c: S },
              context: { n: 13, c: Oe },
              data_request: { n: 14, c: xe },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueue_Request";
    }
  },
  x = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appids: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              country_code: { n: 2, br: i.readString, bw: o.writeString },
              settings: { n: 3, c: y },
              skipped: { n: 4, br: i.readInt32, bw: o.writeInt32 },
              exhausted: { n: 5, br: i.readBool, bw: o.writeBool },
              experimental_cohort: {
                n: 6,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              debug_solr_query: { n: 7, br: i.readString, bw: o.writeString },
              store_items: { n: 8, c: Ae, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueue_Response";
    }
  },
  O = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              queue_type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              store_page_filter: { n: 2, c: S },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSettings_Request";
    }
  },
  N = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              country_code: { n: 1, br: i.readString, bw: o.writeString },
              settings: { n: 2, c: y },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSettings_Response";
    }
  },
  Q = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              queue_type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              store_page_filter: { n: 3, c: S },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SkipDiscoveryQueueItem_Request";
    }
  },
  E = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SkipDiscoveryQueueItem_Response";
    }
  },
  L = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              store_appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              beta_appid: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Request";
    }
  },
  K = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.owned || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              owned: { n: 1, br: i.readBool, bw: o.writeBool },
              wishlist: { n: 2, br: i.readBool, bw: o.writeBool },
              ignored: { n: 3, br: i.readBool, bw: o.writeBool },
              following: { n: 4, br: i.readBool, bw: o.writeBool },
              in_queues: {
                n: 5,
                r: !0,
                q: !0,
                br: i.readEnum,
                pbr: i.readPackedEnum,
                bw: o.writeRepeatedEnum,
              },
              queues_with_skip: {
                n: 6,
                r: !0,
                q: !0,
                br: i.readEnum,
                pbr: i.readPackedEnum,
                bw: o.writeRepeatedEnum,
              },
              queue_items_remaining: {
                n: 7,
                r: !0,
                q: !0,
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: o.writeRepeatedInt32,
              },
              queue_items_next_appid: {
                n: 8,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              temporarily_owned: { n: 9, br: i.readBool, bw: o.writeBool },
              queues: { n: 10, c: V, r: !0, q: !0 },
              ignored_reason: { n: 11, br: i.readInt32, bw: o.writeInt32 },
              beta_status: { n: 12, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Response";
    }
  },
  V = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.type || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              skipped: { n: 2, br: i.readBool, bw: o.writeBool },
              items_remaining: { n: 3, br: i.readInt32, bw: o.writeInt32 },
              next_appid: { n: 4, br: i.readUint32, bw: o.writeUint32 },
              experimental_cohort: {
                n: 5,
                br: i.readUint32,
                bw: o.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Response_InQueue";
    }
  },
  $ = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              report_type: { n: 2, br: i.readEnum, bw: o.writeEnum },
              report: { n: 3, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReportApp_Request";
    }
  },
  X = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReportApp_Response";
    }
  },
  b = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.primary_language || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              primary_language: { n: 1, br: i.readInt32, bw: o.writeInt32 },
              secondary_languages: {
                n: 2,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              platform_windows: { n: 3, br: i.readBool, bw: o.writeBool },
              platform_mac: { n: 4, br: i.readBool, bw: o.writeBool },
              platform_linux: { n: 5, br: i.readBool, bw: o.writeBool },
              timestamp_updated: { n: 8, br: i.readUint32, bw: o.writeUint32 },
              hide_store_broadcast: { n: 9, br: i.readBool, bw: o.writeBool },
              review_score_preference: {
                n: 10,
                br: i.readEnum,
                bw: o.writeEnum,
              },
              timestamp_content_descriptor_preferences_updated: {
                n: 11,
                br: i.readInt32,
                bw: o.writeInt32,
              },
              provide_deck_feedback: { n: 12, br: i.readEnum, bw: o.writeEnum },
              additional_languages: {
                n: 13,
                br: i.readString,
                bw: o.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserPreferences";
    }
  },
  f = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags_to_exclude || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags_to_exclude: { n: 1, c: Y, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserTagPreferences";
    }
  },
  Y = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              name: { n: 2, br: i.readString, bw: o.writeString },
              timestamp_added: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserTagPreferences_Tag";
    }
  },
  J = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetStorePreferences_Request";
    }
  },
  Z = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              preferences: { n: 1, c: b },
              tag_preferences: { n: 2, c: f },
              content_descriptor_preferences: { n: 3, c: C },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetStorePreferences_Response";
    }
  },
  ee = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.num_apps || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              num_apps: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              num_top_friends: { n: 2, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Request";
    }
  },
  te = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.trending_apps || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { trending_apps: { n: 1, c: re, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Response";
    }
  },
  re = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              steamids_top_friends: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readUint64String,
                pbr: i.readPackedUint64String,
                bw: o.writeRepeatedUint64String,
              },
              total_friends: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
    }
  },
  se = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.packages_to_reserve || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packages_to_reserve: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              packages_to_unreserve: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              country_code: { n: 3, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UpdatePackageReservations_Request";
    }
  },
  ie = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.reservation_status || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { reservation_status: { n: 1, c: Ue, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UpdatePackageReservations_Response";
    }
  },
  v = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.edistributor || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              edistributor: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              product_identifier: { n: 2, br: i.readString, bw: o.writeString },
              start_queue_position: {
                n: 3,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              rtime_estimated_notification: {
                n: 4,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              localization_token: { n: 5, br: i.readString, bw: o.writeString },
              accountid: { n: 6, br: i.readUint32, bw: o.writeUint32 },
              rtime_created: { n: 7, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CReservationPositionMessage";
    }
  },
  oe = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.settings || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { settings: { n: 1, c: v, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SetReservationPositionMessage_Request";
    }
  },
  ae = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SetReservationPositionMessage_Response";
    }
  },
  ne = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.edistributor || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              edistributor: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              product_identifier: { n: 2, br: i.readString, bw: o.writeString },
              start_queue_position: {
                n: 3,
                br: i.readUint32,
                bw: o.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_DeleteReservationPositionMessage_Request";
    }
  },
  pe = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_DeleteReservationPositionMessage_Response";
    }
  },
  le = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetAllReservationPositionMessages_Request";
    }
  },
  ue = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.settings || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { settings: { n: 1, c: v, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetAllReservationPositionMessages_Response";
    }
  },
  _e = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReloadAllReservationPositionMessages_Notification";
    }
  },
  de = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.accountid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              accountid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              browserid: {
                n: 2,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              backfill_source: { n: 3, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_MigratePartnerLinkTracking_Notification";
    }
  },
  ce = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              feedback: { n: 2, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_SetFeedback_Request";
    }
  },
  me = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_SetFeedback_Response";
    }
  },
  Pe = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: i.readUint32, bw: o.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_ShouldPrompt_Request";
    }
  },
  ge = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.prompt || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              prompt: { n: 1, br: i.readBool, bw: o.writeBool },
              feedback_eligible: { n: 2, br: i.readBool, bw: o.writeBool },
              existing_feedback: { n: 3, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_ShouldPrompt_Response";
    }
  },
  Re = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              demo_appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              allow_late_firing: { n: 3, br: i.readBool, bw: o.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetWishlistDemoEmailStatus_Request";
    }
  },
  Se = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.can_fire || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              can_fire: { n: 1, d: !1, br: i.readBool, bw: o.writeBool },
              time_staged: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              demo_release_date: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetWishlistDemoEmailStatus_Response";
    }
  },
  ye = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              demo_appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              allow_late_firing: { n: 3, br: i.readBool, bw: o.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_QueueWishlistDemoEmailToFire_Request";
    }
  },
  be = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_QueueWishlistDemoEmailToFire_Response";
    }
  },
  fe = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: i.readFixed64String,
                bw: o.writeFixed64String,
              },
              queue_type: { n: 2, br: i.readEnum, bw: o.writeEnum },
              store_page_filter: { n: 3, c: S },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSkippedApps_Request";
    }
  },
  ve = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appids: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSkippedApps_Response";
    }
  },
  Ce = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              preferences: { n: 1, c: b },
              tag_preferences: { n: 2, c: f },
              content_descriptor_preferences: { n: 3, c: C },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_StorePreferencesChanged_Notification";
    }
  },
  Be = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              steamid: {
                n: 2,
                br: i.readFixed64String,
                bw: o.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_RequestInvite_Request";
    }
  },
  Me = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites_remaining || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invites_remaining: { n: 1, br: i.readInt32, bw: o.writeInt32 },
              status: { n: 2, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_RequestInvite_Response";
    }
  },
  He = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_ids || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_ids: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint64String,
                pbr: i.readPackedUint64String,
                bw: o.writeRepeatedUint64String,
              },
              status: { n: 2, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_UpdateInvites_Request";
    }
  },
  Te = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites_updated || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invites_updated: { n: 1, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_UpdateInvites_Response";
    }
  },
  Ge = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_id || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_id: {
                n: 1,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Request";
    }
  },
  we = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { invites: { n: 1, c: Ie, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Response";
    }
  },
  Ie = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_id || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_id: {
                n: 1,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              steamid_inviter: {
                n: 3,
                br: i.readFixed64String,
                bw: o.writeFixed64String,
              },
              status: { n: 4, br: i.readEnum, bw: o.writeEnum },
              time_created: { n: 5, br: i.readUint32, bw: o.writeUint32 },
              app_name: { n: 6, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Response_Invite";
    }
  },
  ze = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.limit || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              limit: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              time_before: { n: 2, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteHistory_Request";
    }
  },
  Fe = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { invites: { n: 1, c: ke, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteHistory_Response";
    }
  },
  ke = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              steamid_invited: {
                n: 2,
                br: i.readFixed64String,
                bw: o.writeFixed64String,
              },
              time_created: { n: 3, br: i.readUint32, bw: o.writeUint32 },
              app_name: { n: 4, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteHistory_Response_Invite";
    }
  },
  je = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: i.readUint32, bw: o.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Request";
    }
  },
  qe = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: We, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Response";
    }
  },
  We = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              status: { n: 2, br: i.readEnum, bw: o.writeEnum },
              invites_remaining: { n: 3, br: i.readInt32, bw: o.writeInt32 },
              time_joined: { n: 4, br: i.readUint32, bw: o.writeUint32 },
              packageid: { n: 5, br: i.readUint32, bw: o.writeUint32 },
              invites_sent: { n: 6, br: i.readInt32, bw: o.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Response_AppStatus";
    }
  },
  he = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || d(t.M()),
        s.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: i.readUint32, bw: o.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteOptions_Request";
    }
  },
  De = class t extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.ineligible_friends || d(t.M()),
        s.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              ineligible_friends: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = n(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return l(t.M(), e, r);
    }
    static fromObject(e) {
      return p(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.default.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return u(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      _(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteOptions_Response";
    }
  },
  Ve;
((_t) => {
  function t(c, m) {
    return c.SendMsg("Store.RegisterCDKey#1", P(B, m), T, { ePrivilege: 1 });
  }
  _t.RegisterCDKey = t;
  function e(c, m) {
    return c.SendMsg("Store.GetRecommendedTagsForUser#1", P(G, m), w, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _t.GetRecommendedTagsForUser = e;
  function r(c, m) {
    return c.SendMsg("Store.GetMostPopularTags#1", P(z, m), F, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _t.GetMostPopularTags = r;
  function a(c, m) {
    return c.SendMsg("Store.GetLocalizedNameForTags#1", P(j, m), q, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _t.GetLocalizedNameForTags = a;
  function Ne(c, m) {
    return c.SendMsg("Store.GetTagList#1", P(h, m), D, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _t.GetTagList = Ne;
  function Qe(c, m) {
    return c.SendMsg("Store.GetDiscoveryQueue#1", P(A, m), x, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _t.GetDiscoveryQueue = Qe;
  function Ee(c, m) {
    return c.SendMsg("Store.GetDiscoveryQueueSettings#1", P(O, m), N, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _t.GetDiscoveryQueueSettings = Ee;
  function g(c, m) {
    return c.SendMsg("Store.SkipDiscoveryQueueItem#1", P(Q, m), E, {
      ePrivilege: 1,
    });
  }
  _t.SkipDiscoveryQueueItem = g;
  function R(c, m) {
    return c.SendMsg("Store.GetUserGameInterestState#1", P(L, m), K, {
      ePrivilege: 1,
    });
  }
  _t.GetUserGameInterestState = R;
  function Ye(c, m) {
    return c.SendMsg("Store.GetDiscoveryQueueSkippedApps#1", P(fe, m), ve, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _t.GetDiscoveryQueueSkippedApps = Ye;
  function Je(c, m) {
    return c.SendMsg("Store.ReportApp#1", P($, m), X, { ePrivilege: 3 });
  }
  _t.ReportApp = Je;
  function Ze(c, m) {
    return c.SendMsg("Store.GetStorePreferences#1", P(J, m), Z, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _t.GetStorePreferences = Ze;
  function et(c, m) {
    return c.SendMsg("Store.GetTrendingAppsAmongFriends#1", P(ee, m), te, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _t.GetTrendingAppsAmongFriends = et;
  function tt(c, m) {
    return c.SendNotification("Store.MigratePartnerLinkTracking#1", P(de, m), {
      ePrivilege: 1,
    });
  }
  _t.MigratePartnerLinkTracking = tt;
  function rt(c, m) {
    return c.SendMsg("Store.UpdatePackageReservations#1", P(se, m), ie, {
      ePrivilege: 1,
    });
  }
  _t.UpdatePackageReservations = rt;
  function st(c, m) {
    return c.SendMsg("Store.GetWishlistDemoEmailStatus#1", P(Re, m), Se, {
      ePrivilege: 1,
    });
  }
  _t.GetWishlistDemoEmailStatus = st;
  function it(c, m) {
    return c.SendMsg("Store.QueueWishlistDemoEmailToFire#1", P(ye, m), be, {
      ePrivilege: 1,
    });
  }
  _t.QueueWishlistDemoEmailToFire = it;
  function ot(c, m) {
    return c.SendMsg("Store.SetReservationPositionMessage#1", P(oe, m), ae, {
      ePrivilege: 4,
    });
  }
  _t.SetReservationPositionMessage = ot;
  function at(c, m) {
    return c.SendMsg("Store.DeleteReservationPositionMessage#1", P(ne, m), pe, {
      ePrivilege: 4,
    });
  }
  _t.DeleteReservationPositionMessage = at;
  function nt(c, m) {
    return c.SendMsg(
      "Store.GetAllReservationPositionMessages#1",
      P(le, m),
      ue,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  _t.GetAllReservationPositionMessages = nt;
  function pt(c, m) {
    return c.SendNotification(
      "Store.ReloadAllReservationPositionMessages#1",
      P(_e, m),
      { ePrivilege: 4 },
    );
  }
  _t.ReloadAllReservationPositionMessages = pt;
  function lt(c, m) {
    return c.SendMsg("Store.SetCompatibilityFeedback#1", P(ce, m), me, {
      ePrivilege: 1,
    });
  }
  _t.SetCompatibilityFeedback = lt;
  function ut(c, m) {
    return c.SendMsg(
      "Store.ShouldPromptForCompatibilityFeedback#1",
      P(Pe, m),
      ge,
      { ePrivilege: 1 },
    );
  }
  _t.ShouldPromptForCompatibilityFeedback = ut;
})((Ve ||= {}));
var $e;
((e) =>
  (e.NotifyStorePreferencesChangedHandler = {
    name: "StoreClient.NotifyStorePreferencesChanged#1",
    request: Ce,
  }))(($e ||= {}));
var Xe;
((Ee) => {
  function t(g, R) {
    return g.SendMsg("Playtest.RequestInvite#1", P(Be, R), Me, {
      ePrivilege: 1,
    });
  }
  Ee.RequestInvite = t;
  function e(g, R) {
    return g.SendMsg("Playtest.UpdateInvites#1", P(He, R), Te, {
      ePrivilege: 1,
    });
  }
  Ee.UpdateInvites = e;
  function r(g, R) {
    return g.SendMsg("Playtest.GetInvites#1", P(Ge, R), we, { ePrivilege: 1 });
  }
  Ee.GetInvites = r;
  function a(g, R) {
    return g.SendMsg("Playtest.GetInviteHistory#1", P(ze, R), Fe, {
      ePrivilege: 1,
    });
  }
  Ee.GetInviteHistory = a;
  function Ne(g, R) {
    return g.SendMsg("Playtest.GetUserStatus#1", P(je, R), qe, {
      ePrivilege: 1,
    });
  }
  Ee.GetUserStatus = Ne;
  function Qe(g, R) {
    return g.SendMsg("Playtest.GetInviteOptions#1", P(he, R), De, {
      ePrivilege: 1,
    });
  }
  Ee.GetInviteOptions = Qe;
})((Xe ||= {}));
export {
  G as a,
  h as b,
  A as c,
  b as d,
  J as e,
  Be as f,
  He as g,
  Ge as h,
  ze as i,
  Fe as j,
  je as k,
  he as l,
  Ve as m,
  Xe as n,
};

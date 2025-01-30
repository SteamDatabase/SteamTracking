const CLSTAMP = 9498097;

import {
  a as he,
  b as i,
  c as o,
  d as p,
  e as l,
  f as u,
  g as _,
  h as d,
  i as c,
  m as Ie,
  n as B,
  u as g,
  v as b,
} from "./chunk-MCHGPKOT.js";
import { d as De } from "./chunk-L35YOXDF.js";
var s = De(he(), 1);
var n = s.Message;
var M = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.activation_code || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_RegisterCDKey_Request";
    }
  },
  H = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.transactionid || c(t.M()),
        n.initialize(this, e, 0, -1, [18], null);
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
              line_items: { n: 18, c: T, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_PurchaseReceiptInfo";
    }
  },
  T = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.packageid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_PurchaseReceiptInfo_LineItem";
    }
  },
  w = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.purchase_result_details || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
              purchase_receipt_info: { n: 2, c: H },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_RegisterCDKey_Response";
    }
  },
  j = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Request";
    }
  },
  G = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags: { n: 1, c: z, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Response";
    }
  },
  z = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Response_Tag";
    }
  },
  k = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || c(t.M()),
        n.initialize(this, e, 0, -1, [2], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Request";
    }
  },
  F = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Response";
    }
  },
  I = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Response_Tag";
    }
  },
  W = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Request";
    }
  },
  q = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.version_hash || c(t.M()),
        n.initialize(this, e, 0, -1, [2], null);
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
              tags: { n: 2, c: D, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Response";
    }
  },
  D = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Response_Tag";
    }
  },
  y = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.os_win || c(t.M()),
        n.initialize(this, e, 0, -1, [10, 16], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStoreDiscoveryQueueSettings";
    }
  },
  h = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
              store_page_filter: { n: 12, c: b },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueue_Request";
    }
  },
  A = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
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
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueue_Response";
    }
  },
  U = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
              store_page_filter: { n: 2, c: b },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSettings_Request";
    }
  },
  x = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSettings_Response";
    }
  },
  O = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
              store_page_filter: { n: 3, c: b },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SkipDiscoveryQueueItem_Request";
    }
  },
  Q = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SkipDiscoveryQueueItem_Response";
    }
  },
  N = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Request";
    }
  },
  E = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.owned || c(t.M()),
        n.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
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
              queues: { n: 10, c: L, r: !0, q: !0 },
              ignored_reason: { n: 11, br: i.readInt32, bw: o.writeInt32 },
              beta_status: { n: 12, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Response";
    }
  },
  L = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Response_InQueue";
    }
  },
  K = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReportApp_Request";
    }
  },
  V = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReportApp_Response";
    }
  },
  f = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.primary_language || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserPreferences";
    }
  },
  C = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags_to_exclude || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags_to_exclude: { n: 1, c: $, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserTagPreferences";
    }
  },
  $ = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserTagPreferences_Tag";
    }
  },
  X = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetStorePreferences_Request";
    }
  },
  Y = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              preferences: { n: 1, c: f },
              tag_preferences: { n: 2, c: C },
              content_descriptor_preferences: { n: 3, c: B },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetStorePreferences_Response";
    }
  },
  J = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.num_apps || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Request";
    }
  },
  Z = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.trending_apps || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { trending_apps: { n: 1, c: ee, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Response";
    }
  },
  ee = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, [2], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
    }
  },
  te = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.packages_to_reserve || c(t.M()),
        n.initialize(this, e, 0, -1, [1, 2], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UpdatePackageReservations_Request";
    }
  },
  re = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.reservation_status || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { reservation_status: { n: 1, c: Ie, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UpdatePackageReservations_Response";
    }
  },
  v = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.edistributor || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CReservationPositionMessage";
    }
  },
  se = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.settings || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SetReservationPositionMessage_Request";
    }
  },
  ie = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SetReservationPositionMessage_Response";
    }
  },
  oe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.edistributor || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_DeleteReservationPositionMessage_Request";
    }
  },
  ae = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_DeleteReservationPositionMessage_Response";
    }
  },
  ne = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetAllReservationPositionMessages_Request";
    }
  },
  pe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.settings || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetAllReservationPositionMessages_Response";
    }
  },
  le = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReloadAllReservationPositionMessages_Notification";
    }
  },
  ue = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.accountid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_MigratePartnerLinkTracking_Notification";
    }
  },
  _e = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_SetFeedback_Request";
    }
  },
  de = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_SetFeedback_Response";
    }
  },
  ce = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_ShouldPrompt_Request";
    }
  },
  me = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.prompt || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_ShouldPrompt_Response";
    }
  },
  Pe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetWishlistDemoEmailStatus_Request";
    }
  },
  ge = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.can_fire || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetWishlistDemoEmailStatus_Response";
    }
  },
  Re = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_QueueWishlistDemoEmailToFire_Request";
    }
  },
  Se = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
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
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_QueueWishlistDemoEmailToFire_Response";
    }
  },
  be = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
              store_page_filter: { n: 3, c: b },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSkippedApps_Request";
    }
  },
  ye = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSkippedApps_Response";
    }
  },
  fe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              preferences: { n: 1, c: f },
              tag_preferences: { n: 2, c: C },
              content_descriptor_preferences: { n: 3, c: B },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_StorePreferencesChanged_Notification";
    }
  },
  Ce = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_RequestInvite_Request";
    }
  },
  ve = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites_remaining || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_RequestInvite_Response";
    }
  },
  Be = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_ids || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_UpdateInvites_Request";
    }
  },
  Me = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites_updated || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_UpdateInvites_Response";
    }
  },
  He = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_id || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Request";
    }
  },
  Te = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { invites: { n: 1, c: we, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Response";
    }
  },
  we = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_id || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Response_Invite";
    }
  },
  je = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Request";
    }
  },
  Ge = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: ze, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Response";
    }
  },
  ze = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Response_AppStatus";
    }
  },
  ke = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteOptions_Request";
    }
  },
  Fe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.ineligible_friends || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
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
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteOptions_Response";
    }
  },
  Ae;
((rt) => {
  function t(m, P) {
    return m.SendMsg("Store.RegisterCDKey#1", g(M, P), w, { ePrivilege: 1 });
  }
  rt.RegisterCDKey = t;
  function e(m, P) {
    return m.SendMsg("Store.GetMostPopularTags#1", g(j, P), G, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  rt.GetMostPopularTags = e;
  function r(m, P) {
    return m.SendMsg("Store.GetLocalizedNameForTags#1", g(k, P), F, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  rt.GetLocalizedNameForTags = r;
  function a(m, P) {
    return m.SendMsg("Store.GetTagList#1", g(W, P), q, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  rt.GetTagList = a;
  function We(m, P) {
    return m.SendMsg("Store.GetDiscoveryQueue#1", g(h, P), A, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  rt.GetDiscoveryQueue = We;
  function qe(m, P) {
    return m.SendMsg("Store.GetDiscoveryQueueSettings#1", g(U, P), x, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  rt.GetDiscoveryQueueSettings = qe;
  function R(m, P) {
    return m.SendMsg("Store.SkipDiscoveryQueueItem#1", g(O, P), Q, {
      ePrivilege: 1,
    });
  }
  rt.SkipDiscoveryQueueItem = R;
  function S(m, P) {
    return m.SendMsg("Store.GetUserGameInterestState#1", g(N, P), E, {
      ePrivilege: 1,
    });
  }
  rt.GetUserGameInterestState = S;
  function Oe(m, P) {
    return m.SendMsg("Store.GetDiscoveryQueueSkippedApps#1", g(be, P), ye, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  rt.GetDiscoveryQueueSkippedApps = Oe;
  function Qe(m, P) {
    return m.SendMsg("Store.ReportApp#1", g(K, P), V, { ePrivilege: 3 });
  }
  rt.ReportApp = Qe;
  function Ne(m, P) {
    return m.SendMsg("Store.GetStorePreferences#1", g(X, P), Y, {
      ePrivilege: 1,
    });
  }
  rt.GetStorePreferences = Ne;
  function Ee(m, P) {
    return m.SendMsg("Store.GetTrendingAppsAmongFriends#1", g(J, P), Z, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  rt.GetTrendingAppsAmongFriends = Ee;
  function Le(m, P) {
    return m.SendNotification("Store.MigratePartnerLinkTracking#1", g(ue, P), {
      ePrivilege: 1,
    });
  }
  rt.MigratePartnerLinkTracking = Le;
  function Ke(m, P) {
    return m.SendMsg("Store.UpdatePackageReservations#1", g(te, P), re, {
      ePrivilege: 1,
    });
  }
  rt.UpdatePackageReservations = Ke;
  function Ve(m, P) {
    return m.SendMsg("Store.GetWishlistDemoEmailStatus#1", g(Pe, P), ge, {
      ePrivilege: 1,
    });
  }
  rt.GetWishlistDemoEmailStatus = Ve;
  function $e(m, P) {
    return m.SendMsg("Store.QueueWishlistDemoEmailToFire#1", g(Re, P), Se, {
      ePrivilege: 1,
    });
  }
  rt.QueueWishlistDemoEmailToFire = $e;
  function Xe(m, P) {
    return m.SendMsg("Store.SetReservationPositionMessage#1", g(se, P), ie, {
      ePrivilege: 4,
    });
  }
  rt.SetReservationPositionMessage = Xe;
  function Ye(m, P) {
    return m.SendMsg("Store.DeleteReservationPositionMessage#1", g(oe, P), ae, {
      ePrivilege: 4,
    });
  }
  rt.DeleteReservationPositionMessage = Ye;
  function Je(m, P) {
    return m.SendMsg(
      "Store.GetAllReservationPositionMessages#1",
      g(ne, P),
      pe,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  rt.GetAllReservationPositionMessages = Je;
  function Ze(m, P) {
    return m.SendNotification(
      "Store.ReloadAllReservationPositionMessages#1",
      g(le, P),
      { ePrivilege: 4 },
    );
  }
  rt.ReloadAllReservationPositionMessages = Ze;
  function et(m, P) {
    return m.SendMsg("Store.SetCompatibilityFeedback#1", g(_e, P), de, {
      ePrivilege: 1,
    });
  }
  rt.SetCompatibilityFeedback = et;
  function tt(m, P) {
    return m.SendMsg(
      "Store.ShouldPromptForCompatibilityFeedback#1",
      g(ce, P),
      me,
      { ePrivilege: 1 },
    );
  }
  rt.ShouldPromptForCompatibilityFeedback = tt;
})((Ae ||= {}));
var Ue;
((e) =>
  (e.NotifyStorePreferencesChangedHandler = {
    name: "StoreClient.NotifyStorePreferencesChanged#1",
    request: fe,
  }))((Ue ||= {}));
var xe;
((qe) => {
  function t(R, S) {
    return R.SendMsg("Playtest.RequestInvite#1", g(Ce, S), ve, {
      ePrivilege: 1,
    });
  }
  qe.RequestInvite = t;
  function e(R, S) {
    return R.SendMsg("Playtest.UpdateInvites#1", g(Be, S), Me, {
      ePrivilege: 1,
    });
  }
  qe.UpdateInvites = e;
  function r(R, S) {
    return R.SendMsg("Playtest.GetInvites#1", g(He, S), Te, { ePrivilege: 1 });
  }
  qe.GetInvites = r;
  function a(R, S) {
    return R.SendMsg("Playtest.GetUserStatus#1", g(je, S), Ge, {
      ePrivilege: 1,
    });
  }
  qe.GetUserStatus = a;
  function We(R, S) {
    return R.SendMsg("Playtest.GetInviteOptions#1", g(ke, S), Fe, {
      ePrivilege: 1,
    });
  }
  qe.GetInviteOptions = We;
})((xe ||= {}));
export {
  W as a,
  f as b,
  X as c,
  Ce as d,
  Be as e,
  He as f,
  je as g,
  ke as h,
  Ae as i,
  xe as j,
};

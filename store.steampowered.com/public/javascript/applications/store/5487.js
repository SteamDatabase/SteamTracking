/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5487],
  {
    75487: (e, t, r) => {
      r.d(t, {
        BL: () => v,
        BX: () => a,
        Gr: () => j,
        fE: () => X,
        fe: () => I,
        mk: () => y,
        nd: () => i,
        pS: () => ge,
        q: () => pe,
        rX: () => ze,
        xf: () => Q,
      });
      var i,
        s,
        a,
        n = r(80613),
        l = r.n(n),
        o = r(89068),
        m = r(56545),
        c = r(8114),
        u = r(15161),
        B = r(36003);
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.activation_code || o.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  activation_code: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  purchase_platform: {
                    n: 2,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  is_request_from_client: {
                    n: 3,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = o.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Request";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.transactionid || o.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  transactionid: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  line_items: { n: 18, c: b, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = o.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.packageid || o.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  packageid: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = o.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.purchase_result_details || o.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: g },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = o.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Response";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.language || o.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  language: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  country_code: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  favor_rarer_tags: {
                    n: 4,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Request";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.tags || o.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { tags: { n: 1, c: p, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = o.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Response";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.tagid || o.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  tagid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  name: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  weight: { n: 3, br: o.qM.readFloat, bw: o.gp.writeFloat },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Response_Tag";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || o.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = o.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Request";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.tags || o.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { tags: { n: 1, c: f, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = o.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.tagid || o.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  tagid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  name: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = o.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.language || o.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  language: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = o.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.tags || o.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { tags: { n: 1, c: W, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = o.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.tagid || o.Sg(W.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  tagid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  english_name: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  name: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                  normalized_name: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = o.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class j extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.language || o.Sg(j.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  language: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  have_version_hash: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = o.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Request";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.version_hash || o.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  version_hash: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  tags: { n: 2, c: q, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = o.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.tagid || o.Sg(q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  tagid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  name: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = o.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response_Tag";
        }
      }
      class T extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.os_win || o.Sg(T.M()),
            n.Message.initialize(this, e, 0, -1, [10, 16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  os_win: { n: 4, br: o.qM.readBool, bw: o.gp.writeBool },
                  os_mac: { n: 5, br: o.qM.readBool, bw: o.gp.writeBool },
                  os_linux: { n: 6, br: o.qM.readBool, bw: o.gp.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  exclude_dlc: { n: 14, br: o.qM.readBool, bw: o.gp.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = o.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.queue_type || o.Sg(v.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  queue_type: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  country_code: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  settings: { n: 5, c: T },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  store_page_filter: { n: 12, c: c.S7 },
                  context: { n: 13, c: u.TS },
                  data_request: { n: 14, c: u.gn },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = o.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class F extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appids || o.Sg(F.M()),
            n.Message.initialize(this, e, 0, -1, [1, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  settings: { n: 3, c: T },
                  skipped: { n: 4, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  exhausted: { n: 5, br: o.qM.readBool, bw: o.gp.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  store_items: { n: 8, c: u.vB, r: !0, q: !0 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = o.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class O extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.queue_type || o.Sg(O.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  queue_type: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  store_page_filter: { n: 2, c: c.S7 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = o.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Request";
        }
      }
      class U extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.country_code || o.Sg(U.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  country_code: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  settings: { n: 2, c: T },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = o.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.queue_type || o.Sg(I.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  queue_type: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  store_page_filter: { n: 3, c: c.S7 },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = o.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class C extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class P extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || o.Sg(P.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  store_appid: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  beta_appid: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = o.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Request";
        }
      }
      class x extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.owned || o.Sg(x.M()),
            n.Message.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  owned: { n: 1, br: o.qM.readBool, bw: o.gp.writeBool },
                  wishlist: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                  ignored: { n: 3, br: o.qM.readBool, bw: o.gp.writeBool },
                  following: { n: 4, br: o.qM.readBool, bw: o.gp.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: o.qM.readEnum,
                    pbr: o.qM.readPackedEnum,
                    bw: o.gp.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: o.qM.readEnum,
                    pbr: o.qM.readPackedEnum,
                    bw: o.gp.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: o.qM.readInt32,
                    pbr: o.qM.readPackedInt32,
                    bw: o.gp.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  queues: { n: 10, c: N, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  beta_status: { n: 12, br: o.qM.readEnum, bw: o.gp.writeEnum },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = o.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class N extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.type || o.Sg(N.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  type: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  skipped: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                  items_remaining: {
                    n: 3,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = o.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class G extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appid || o.Sg(G.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  report_type: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  report: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = o.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Request";
        }
      }
      class k extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Response";
        }
      }
      class E extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.primary_language || o.Sg(E.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  primary_language: {
                    n: 1,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  platform_mac: { n: 4, br: o.qM.readBool, bw: o.gp.writeBool },
                  platform_linux: {
                    n: 5,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = o.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class D extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.tags_to_exclude || o.Sg(D.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { tags_to_exclude: { n: 1, c: A, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = o.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class A extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.tagid || o.Sg(A.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  tagid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  name: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  timestamp_added: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = o.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class Q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Request";
        }
      }
      class L extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.preferences || o.Sg(L.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  preferences: { n: 1, c: E },
                  tag_preferences: { n: 2, c: D },
                  content_descriptor_preferences: { n: 3, c: B.u2 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = o.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class $ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.num_apps || o.Sg($.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  num_apps: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  num_top_friends: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = o.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT($.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Request";
        }
      }
      class K extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.trending_apps || o.Sg(K.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: { trending_apps: { n: 1, c: H, r: !0, q: !0 } },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = o.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class H extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || o.Sg(H.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = o.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class X extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.packages_to_reserve || o.Sg(X.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  packages_to_reserve: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  packages_to_unreserve: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = o.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Request";
        }
      }
      class J extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.reservation_status || o.Sg(J.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { reservation_status: { n: 1, c: B.ke, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = o.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Response";
        }
      }
      class V extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.edistributor || o.Sg(V.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  edistributor: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  rtime_estimated_notification: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  localization_token: {
                    n: 5,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  accountid: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  rtime_created: {
                    n: 7,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = o.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CReservationPositionMessage";
        }
      }
      class Y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.settings || o.Sg(Y.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { settings: { n: 1, c: V, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = o.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Request";
        }
      }
      class Z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Response";
        }
      }
      class ee extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.edistributor || o.Sg(ee.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  edistributor: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = o.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Request";
        }
      }
      class te extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Response";
        }
      }
      class re extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Request";
        }
      }
      class ie extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.settings || o.Sg(ie.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: { settings: { n: 1, c: V, r: !0, q: !0 } },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = o.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Response";
        }
      }
      class se extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReloadAllReservationPositionMessages_Notification";
        }
      }
      class ae extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.accountid || o.Sg(ae.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  accountid: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  browserid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  backfill_source: {
                    n: 3,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = o.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_MigratePartnerLinkTracking_Notification";
        }
      }
      class ne extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || o.Sg(ne.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  feedback: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = o.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Request";
        }
      }
      class le extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class oe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || o.Sg(oe.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = o.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Request";
        }
      }
      class me extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.prompt || o.Sg(me.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  prompt: { n: 1, br: o.qM.readBool, bw: o.gp.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = o.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class ce extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || o.Sg(ce.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = o.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Request";
        }
      }
      class ue extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.can_fire || o.Sg(ue.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  can_fire: {
                    n: 1,
                    d: !1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  time_staged: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  demo_release_date: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = o.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Response";
        }
      }
      class Be extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.appid || o.Sg(Be.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = o.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Request";
        }
      }
      class de extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new de();
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Response";
        }
      }
      class ge extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.steamid || o.Sg(ge.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  queue_type: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  store_page_filter: { n: 3, c: c.S7 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = o.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Request";
        }
      }
      class be extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appids || o.Sg(be.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = o.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class Me extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.preferences || o.Sg(Me.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  preferences: { n: 1, c: E },
                  tag_preferences: { n: 2, c: D },
                  content_descriptor_preferences: { n: 3, c: B.u2 },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = o.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      class ye extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.appid || o.Sg(ye.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  steamid: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = o.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Request";
        }
      }
      class _e extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.invites_remaining || o.Sg(_e.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  invites_remaining: {
                    n: 1,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  status: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = o.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Response";
        }
      }
      class pe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.invite_ids || o.Sg(pe.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  invite_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
                  },
                  status: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = o.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Request";
        }
      }
      class we extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.invites_updated || o.Sg(we.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  invites_updated: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = o.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Response";
        }
      }
      class ze extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.invite_id || o.Sg(ze.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  invite_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = o.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Request";
        }
      }
      class fe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.invites || o.Sg(fe.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { invites: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = o.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Response";
        }
      }
      class Se extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.invite_id || o.Sg(Se.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  invite_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  steamid_inviter: {
                    n: 3,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  status: { n: 4, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  time_created: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  app_name: { n: 6, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = o.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Response_Invite";
        }
      }
      class Re extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.limit || o.Sg(Re.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  limit: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  time_before: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = o.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Request";
        }
      }
      class We extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.invites || o.Sg(We.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { invites: { n: 1, c: je, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = o.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response";
        }
      }
      class je extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.appid || o.Sg(je.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  steamid_invited: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  time_created: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  app_name: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = o.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response_Invite";
        }
      }
      class he extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.appid || o.Sg(he.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = o.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Request";
        }
      }
      class qe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.results || o.Sg(qe.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = o.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Response";
        }
      }
      class Te extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.appid || o.Sg(Te.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  status: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  invites_remaining: {
                    n: 3,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  time_joined: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  packageid: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  invites_sent: {
                    n: 6,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = o.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Response_AppStatus";
        }
      }
      class ve extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.appid || o.Sg(ve.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = o.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Request";
        }
      }
      class Fe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.ineligible_friends || o.Sg(Fe.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  ineligible_friends: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = o.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Response";
        }
      }
      !(function (e) {
        (e.RegisterCDKey = function (e, t) {
          return e.SendMsg("Store.RegisterCDKey#1", (0, m.I8)(d, t), M, {
            ePrivilege: 1,
          });
        }),
          (e.GetRecommendedTagsForUser = function (e, t) {
            return e.SendMsg(
              "Store.GetRecommendedTagsForUser#1",
              (0, m.I8)(y, t),
              _,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetMostPopularTags = function (e, t) {
            return e.SendMsg("Store.GetMostPopularTags#1", (0, m.I8)(w, t), z, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, t) {
            return e.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, m.I8)(S, t),
              R,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTagList = function (e, t) {
            return e.SendMsg("Store.GetTagList#1", (0, m.I8)(j, t), h, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, t) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", (0, m.I8)(v, t), F, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, m.I8)(O, t),
              U,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SkipDiscoveryQueueItem = function (e, t) {
            return e.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, m.I8)(I, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserGameInterestState = function (e, t) {
            return e.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, m.I8)(P, t),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, m.I8)(ge, t),
              be,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ReportApp = function (e, t) {
            return e.SendMsg("Store.ReportApp#1", (0, m.I8)(G, t), k, {
              ePrivilege: 3,
            });
          }),
          (e.GetStorePreferences = function (e, t) {
            return e.SendMsg(
              "Store.GetStorePreferences#1",
              (0, m.I8)(Q, t),
              L,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrendingAppsAmongFriends = function (e, t) {
            return e.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, m.I8)($, t),
              K,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigratePartnerLinkTracking = function (e, t) {
            return e.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, m.I8)(ae, t),
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePackageReservations = function (e, t) {
            return e.SendMsg(
              "Store.UpdatePackageReservations#1",
              (0, m.I8)(X, t),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.GetWishlistDemoEmailStatus = function (e, t) {
            return e.SendMsg(
              "Store.GetWishlistDemoEmailStatus#1",
              (0, m.I8)(ce, t),
              ue,
              { ePrivilege: 1 },
            );
          }),
          (e.QueueWishlistDemoEmailToFire = function (e, t) {
            return e.SendMsg(
              "Store.QueueWishlistDemoEmailToFire#1",
              (0, m.I8)(Be, t),
              de,
              { ePrivilege: 1 },
            );
          }),
          (e.SetReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.SetReservationPositionMessage#1",
              (0, m.I8)(Y, t),
              Z,
              { ePrivilege: 4 },
            );
          }),
          (e.DeleteReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.DeleteReservationPositionMessage#1",
              (0, m.I8)(ee, t),
              te,
              { ePrivilege: 4 },
            );
          }),
          (e.GetAllReservationPositionMessages = function (e, t) {
            return e.SendMsg(
              "Store.GetAllReservationPositionMessages#1",
              (0, m.I8)(re, t),
              ie,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.ReloadAllReservationPositionMessages = function (e, t) {
            return e.SendNotification(
              "Store.ReloadAllReservationPositionMessages#1",
              (0, m.I8)(se, t),
              { ePrivilege: 4 },
            );
          }),
          (e.SetCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, m.I8)(ne, t),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, m.I8)(oe, t),
              me,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: Me,
          };
        })(s || (s = {})),
        (function (e) {
          (e.RequestInvite = function (e, t) {
            return e.SendMsg("Playtest.RequestInvite#1", (0, m.I8)(ye, t), _e, {
              ePrivilege: 1,
            });
          }),
            (e.UpdateInvites = function (e, t) {
              return e.SendMsg(
                "Playtest.UpdateInvites#1",
                (0, m.I8)(pe, t),
                we,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInvites = function (e, t) {
              return e.SendMsg("Playtest.GetInvites#1", (0, m.I8)(ze, t), fe, {
                ePrivilege: 1,
              });
            }),
            (e.GetInviteHistory = function (e, t) {
              return e.SendMsg(
                "Playtest.GetInviteHistory#1",
                (0, m.I8)(Re, t),
                We,
                { ePrivilege: 1 },
              );
            }),
            (e.GetUserStatus = function (e, t) {
              return e.SendMsg(
                "Playtest.GetUserStatus#1",
                (0, m.I8)(he, t),
                qe,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInviteOptions = function (e, t) {
              return e.SendMsg(
                "Playtest.GetInviteOptions#1",
                (0, m.I8)(ve, t),
                Fe,
                { ePrivilege: 1 },
              );
            });
        })(a || (a = {}));
    },
  },
]);

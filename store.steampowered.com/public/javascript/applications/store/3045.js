/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3045],
  {
    39449: (e) => {
      e.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    67523: (e) => {
      e.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
    },
    21038: (e) => {
      e.exports = {
        PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
        SVG: "_3Mns5ZEBThi10kv9zwdCRr",
      };
    },
    45387: (e) => {
      e.exports = {
        strMaxMobileWidth: "700px",
        strMaxResponsiveWidth: "910px",
      };
    },
    75487: (e, r, t) => {
      "use strict";
      t.d(r, {
        BL: () => v,
        BX: () => a,
        Gr: () => h,
        fE: () => V,
        fe: () => U,
        nd: () => i,
        pS: () => ge,
        q: () => _e,
        rX: () => fe,
      });
      var i,
        s,
        a,
        n = t(80613),
        o = t.n(n),
        l = t(89068),
        c = t(56545),
        u = t(8114),
        m = t(15161),
        d = t(36003);
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.activation_code || l.Sg(B.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  activation_code: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  purchase_platform: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  is_request_from_client: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = l.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Request";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.transactionid || l.Sg(g.M()),
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
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  line_items: { n: 18, c: b, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            b.prototype.packageid || l.Sg(b.M()),
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
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = l.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            M.prototype.purchase_result_details || l.Sg(M.M()),
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
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: g },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            y.prototype.language || l.Sg(y.M()),
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
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  country_code: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  favor_rarer_tags: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Request";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.tags || l.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { tags: { n: 1, c: _, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Response";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.tagid || l.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  tagid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  weight: { n: 3, br: l.qM.readFloat, bw: l.gp.writeFloat },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Response_Tag";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || l.Sg(w.M()),
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
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Request";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.tags || l.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { tags: { n: 1, c: z, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.tagid || l.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  tagid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.language || l.Sg(S.M()),
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
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            R.prototype.tags || l.Sg(R.M()),
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
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            W.prototype.tagid || l.Sg(W.M()),
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
                  tagid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  english_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  name: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  normalized_name: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = l.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.language || l.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  have_version_hash: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Request";
        }
      }
      class j extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.version_hash || l.Sg(j.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  version_hash: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  tags: { n: 2, c: O, r: !0, q: !0 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response";
        }
      }
      class O extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.tagid || l.Sg(O.M()),
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
                  tagid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = l.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response_Tag";
        }
      }
      class T extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.os_win || l.Sg(T.M()),
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
                  os_win: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  os_mac: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  os_linux: { n: 6, br: l.qM.readBool, bw: l.gp.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  exclude_dlc: { n: 14, br: l.qM.readBool, bw: l.gp.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            v.prototype.queue_type || l.Sg(v.M()),
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
                  queue_type: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  country_code: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  settings: { n: 5, c: T },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  store_page_filter: { n: 12, c: u.S7 },
                  context: { n: 13, c: m.TS },
                  data_request: { n: 14, c: m.gn },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = l.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.appids || l.Sg(q.M()),
            n.Message.initialize(this, e, 0, -1, [1, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  settings: { n: 3, c: T },
                  skipped: { n: 4, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  exhausted: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  store_items: { n: 8, c: m.vB, r: !0, q: !0 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = l.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class F extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.queue_type || l.Sg(F.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  queue_type: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  store_page_filter: { n: 2, c: u.S7 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = l.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Request";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.country_code || l.Sg(I.M()),
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
                  country_code: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  settings: { n: 2, c: T },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = l.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class U extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.queue_type || l.Sg(U.M()),
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
                  queue_type: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  store_page_filter: { n: 3, c: u.S7 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = l.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            P.prototype.appid || l.Sg(P.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  store_appid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  beta_appid: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = l.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            x.prototype.owned || l.Sg(x.M()),
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
                  owned: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  wishlist: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  ignored: { n: 3, br: l.qM.readBool, bw: l.gp.writeBool },
                  following: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: l.qM.readEnum,
                    pbr: l.qM.readPackedEnum,
                    bw: l.gp.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: l.qM.readEnum,
                    pbr: l.qM.readPackedEnum,
                    bw: l.gp.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: l.qM.readInt32,
                    pbr: l.qM.readPackedInt32,
                    bw: l.gp.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  queues: { n: 10, c: E, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  beta_status: { n: 12, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = l.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class E extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.type || l.Sg(E.M()),
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
                  type: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  skipped: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  items_remaining: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = l.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class k extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appid || l.Sg(k.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  report_type: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  report: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = l.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Request";
        }
      }
      class N extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Response";
        }
      }
      class G extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.primary_language || l.Sg(G.M()),
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
                  primary_language: {
                    n: 1,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  platform_mac: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  platform_linux: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = l.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class L extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.tags_to_exclude || l.Sg(L.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { tags_to_exclude: { n: 1, c: A, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = l.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class A extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.tagid || l.Sg(A.M()),
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
                  tagid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  timestamp_added: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = l.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class D extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Request";
        }
      }
      class Q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.preferences || l.Sg(Q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  preferences: { n: 1, c: G },
                  tag_preferences: { n: 2, c: L },
                  content_descriptor_preferences: { n: 3, c: d.u2 },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = l.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class H extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.num_apps || l.Sg(H.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  num_apps: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  num_top_friends: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = l.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Request";
        }
      }
      class K extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.trending_apps || l.Sg(K.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: { trending_apps: { n: 1, c: X, r: !0, q: !0 } },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = l.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class X extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appid || l.Sg(X.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint64String,
                    pbr: l.qM.readPackedUint64String,
                    bw: l.gp.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = l.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class V extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.packages_to_reserve || l.Sg(V.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  packages_to_reserve: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  packages_to_unreserve: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = l.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Request";
        }
      }
      class $ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.reservation_status || l.Sg($.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: { reservation_status: { n: 1, c: d.ke, r: !0, q: !0 } },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = l.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT($.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Response";
        }
      }
      class J extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.edistributor || l.Sg(J.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  edistributor: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_estimated_notification: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  localization_token: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  accountid: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_created: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = l.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CReservationPositionMessage";
        }
      }
      class Z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.settings || l.Sg(Z.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { settings: { n: 1, c: J, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = l.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Request";
        }
      }
      class Y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Response";
        }
      }
      class ee extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.edistributor || l.Sg(ee.M()),
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
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = l.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Request";
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
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Response";
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
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Request";
        }
      }
      class ie extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.settings || l.Sg(ie.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: { settings: { n: 1, c: J, r: !0, q: !0 } },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = l.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            ae.prototype.accountid || l.Sg(ae.M()),
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
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  browserid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  backfill_source: {
                    n: 3,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = l.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            ne.prototype.appid || l.Sg(ne.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  feedback: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = l.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ne.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Request";
        }
      }
      class oe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new oe();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class le extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appid || l.Sg(le.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = l.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(le.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Request";
        }
      }
      class ce extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.prompt || l.Sg(ce.M()),
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
                  prompt: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = l.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ce.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class ue extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appid || l.Sg(ue.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = l.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ue.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Request";
        }
      }
      class me extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.can_fire || l.Sg(me.M()),
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
                  can_fire: {
                    n: 1,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  time_staged: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  demo_release_date: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = l.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(me.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Response";
        }
      }
      class de extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.appid || l.Sg(de.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = l.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(de.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Request";
        }
      }
      class Be extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Response";
        }
      }
      class ge extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.steamid || l.Sg(ge.M()),
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  queue_type: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  store_page_filter: { n: 3, c: u.S7 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = l.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            be.prototype.appids || l.Sg(be.M()),
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
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = l.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(be.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            Me.prototype.preferences || l.Sg(Me.M()),
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
                  preferences: { n: 1, c: G },
                  tag_preferences: { n: 2, c: L },
                  content_descriptor_preferences: { n: 3, c: d.u2 },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = l.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            ye.prototype.appid || l.Sg(ye.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  steamid: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = l.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ye.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Request";
        }
      }
      class pe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.invites_remaining || l.Sg(pe.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  invites_remaining: {
                    n: 1,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  status: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = l.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(pe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Response";
        }
      }
      class _e extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.invite_ids || l.Sg(_e.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  invite_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint64String,
                    pbr: l.qM.readPackedUint64String,
                    bw: l.gp.writeRepeatedUint64String,
                  },
                  status: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = l.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(_e.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Request";
        }
      }
      class we extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.invites_updated || l.Sg(we.M()),
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
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = l.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(we.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Response";
        }
      }
      class fe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.invite_id || l.Sg(fe.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  invite_id: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = l.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Request";
        }
      }
      class ze extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.invites || l.Sg(ze.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: { invites: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = l.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ze.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Response";
        }
      }
      class Se extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.invite_id || l.Sg(Se.M()),
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
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  steamid_inviter: {
                    n: 3,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  status: { n: 4, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  time_created: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  app_name: { n: 6, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = l.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            Re.prototype.limit || l.Sg(Re.M()),
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
                  limit: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  time_before: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = l.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            We.prototype.invites || l.Sg(We.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { invites: { n: 1, c: he, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = l.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(We.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response";
        }
      }
      class he extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.appid || l.Sg(he.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  steamid_invited: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  time_created: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  app_name: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = l.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response_Invite";
        }
      }
      class je extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.appid || l.Sg(je.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = l.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Request";
        }
      }
      class Oe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.results || l.Sg(Oe.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = l.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Oe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Response";
        }
      }
      class Te extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.appid || l.Sg(Te.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  status: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  invites_remaining: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  time_joined: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  packageid: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  invites_sent: {
                    n: 6,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = l.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Te.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
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
            ve.prototype.appid || l.Sg(ve.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = l.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Request";
        }
      }
      class qe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.ineligible_friends || l.Sg(qe.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  ineligible_friends: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = l.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(qe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Response";
        }
      }
      !(function (e) {
        (e.RegisterCDKey = function (e, r) {
          return e.SendMsg("Store.RegisterCDKey#1", (0, c.I8)(B, r), M, {
            ePrivilege: 1,
          });
        }),
          (e.GetRecommendedTagsForUser = function (e, r) {
            return e.SendMsg(
              "Store.GetRecommendedTagsForUser#1",
              (0, c.I8)(y, r),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetMostPopularTags = function (e, r) {
            return e.SendMsg("Store.GetMostPopularTags#1", (0, c.I8)(w, r), f, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, r) {
            return e.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, c.I8)(S, r),
              R,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTagList = function (e, r) {
            return e.SendMsg("Store.GetTagList#1", (0, c.I8)(h, r), j, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", (0, c.I8)(v, r), q, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, r) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, c.I8)(F, r),
              I,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SkipDiscoveryQueueItem = function (e, r) {
            return e.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, c.I8)(U, r),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserGameInterestState = function (e, r) {
            return e.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, c.I8)(P, r),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, r) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, c.I8)(ge, r),
              be,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ReportApp = function (e, r) {
            return e.SendMsg("Store.ReportApp#1", (0, c.I8)(k, r), N, {
              ePrivilege: 3,
            });
          }),
          (e.GetStorePreferences = function (e, r) {
            return e.SendMsg(
              "Store.GetStorePreferences#1",
              (0, c.I8)(D, r),
              Q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrendingAppsAmongFriends = function (e, r) {
            return e.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, c.I8)(H, r),
              K,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigratePartnerLinkTracking = function (e, r) {
            return e.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, c.I8)(ae, r),
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePackageReservations = function (e, r) {
            return e.SendMsg(
              "Store.UpdatePackageReservations#1",
              (0, c.I8)(V, r),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.GetWishlistDemoEmailStatus = function (e, r) {
            return e.SendMsg(
              "Store.GetWishlistDemoEmailStatus#1",
              (0, c.I8)(ue, r),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.QueueWishlistDemoEmailToFire = function (e, r) {
            return e.SendMsg(
              "Store.QueueWishlistDemoEmailToFire#1",
              (0, c.I8)(de, r),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.SetReservationPositionMessage = function (e, r) {
            return e.SendMsg(
              "Store.SetReservationPositionMessage#1",
              (0, c.I8)(Z, r),
              Y,
              { ePrivilege: 4 },
            );
          }),
          (e.DeleteReservationPositionMessage = function (e, r) {
            return e.SendMsg(
              "Store.DeleteReservationPositionMessage#1",
              (0, c.I8)(ee, r),
              re,
              { ePrivilege: 4 },
            );
          }),
          (e.GetAllReservationPositionMessages = function (e, r) {
            return e.SendMsg(
              "Store.GetAllReservationPositionMessages#1",
              (0, c.I8)(te, r),
              ie,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.ReloadAllReservationPositionMessages = function (e, r) {
            return e.SendNotification(
              "Store.ReloadAllReservationPositionMessages#1",
              (0, c.I8)(se, r),
              { ePrivilege: 4 },
            );
          }),
          (e.SetCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, c.I8)(ne, r),
              oe,
              { ePrivilege: 1 },
            );
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, c.I8)(le, r),
              ce,
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
          (e.RequestInvite = function (e, r) {
            return e.SendMsg("Playtest.RequestInvite#1", (0, c.I8)(ye, r), pe, {
              ePrivilege: 1,
            });
          }),
            (e.UpdateInvites = function (e, r) {
              return e.SendMsg(
                "Playtest.UpdateInvites#1",
                (0, c.I8)(_e, r),
                we,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInvites = function (e, r) {
              return e.SendMsg("Playtest.GetInvites#1", (0, c.I8)(fe, r), ze, {
                ePrivilege: 1,
              });
            }),
            (e.GetInviteHistory = function (e, r) {
              return e.SendMsg(
                "Playtest.GetInviteHistory#1",
                (0, c.I8)(Re, r),
                We,
                { ePrivilege: 1 },
              );
            }),
            (e.GetUserStatus = function (e, r) {
              return e.SendMsg(
                "Playtest.GetUserStatus#1",
                (0, c.I8)(je, r),
                Oe,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInviteOptions = function (e, r) {
              return e.SendMsg(
                "Playtest.GetInviteOptions#1",
                (0, c.I8)(ve, r),
                qe,
                { ePrivilege: 1 },
              );
            });
        })(a || (a = {}));
    },
    31258: (e, r, t) => {
      "use strict";
      function i(e) {
        switch (e) {
          case 0:
            return "Windows";
          case 1:
            return "Windows 3.11";
          case 2:
            return "Windows 95";
          case 3:
            return "Windows 98";
          case 4:
            return "Windows ME";
          case 5:
            return "Windows NT";
          case 6:
            return "Windows 2000";
          case 7:
            return "Windows XP";
          case 8:
            return "Windows 2003";
          case 9:
            return "Windows Vista";
          case 10:
            return "Windows 7";
          case 11:
            return "Windows 2008";
          case 12:
            return "Windows 2012";
          case 15:
            return "Windows 2012 R2";
          case 13:
            return "Windows 8";
          case 14:
            return "Windows 8.1";
          case 16:
            return "Windows 10";
          case 17:
            return "Windows 2016";
          case 18:
            return "Windows 2019";
          case 19:
            return "Windows 2022";
          case 20:
            return "Windows 11";
          case -102:
            return "Mac OS";
          case -101:
            return "MacOS 10.4";
          case -100:
            return "MacOS 10.5";
          case -99:
            return "MacOS 10.5.8";
          case -95:
            return "MacOS 10.6";
          case -94:
            return "MacOS 10.6.3";
          case -93:
            return "MacOS 10.6.4 with Apple's Snow Leopard Graphics Update";
          case -92:
            return "MacOS 10.6.7";
          case -90:
            return "MacOS 10.7";
          case -89:
            return "MacOS 10.8";
          case -88:
            return "MacOS 10.9";
          case -87:
            return "MacOS 10.10";
          case -86:
            return "MacOS 10.11";
          case -85:
            return "MacOS 10.12";
          case -84:
            return "MacOS 10.13";
          case -83:
            return "MacOS 10.14";
          case -82:
            return "MacOS 10.15";
          case -81:
            return "MacOS 11 (as 10.16)";
          case -75:
            return "MacOS 12 (as 10.17)";
          case -70:
            return "MacOS 13 (as 10.18)";
          case -80:
            return "MacOS 11";
          case -79:
            return "MacOS 11.1";
          case -74:
            return "MacOS 12";
          case -69:
            return "MacOS 13";
          case -68:
            return "MacOS 14";
          case -67:
            return "MacOS 15";
          case -203:
            return "Linux";
          case -202:
            return "Linux 2.2";
          case -201:
            return "Linux 2.4";
          case -200:
            return "Linux 2.6";
          case -199:
            return "Linux 3.2";
          case -198:
            return "Linux 3.5";
          case -197:
            return "Linux 3.6";
          case -196:
            return "Linux 3.10";
          case -195:
            return "Linux 3.16";
          case -194:
            return "Linux 3.18";
          case -193:
            return "Linux 3.x";
          case -191:
            return "Linux 4.1";
          case -190:
            return "Linux 4.4";
          case -189:
            return "Linux 4.9";
          case -188:
            return "Linux 4.14";
          case -187:
            return "Linux 4.19";
          case -192:
            return "Linux 4.x";
          case -186:
            return "Linux 5.x";
          case -185:
            return "Linux 5.4";
          case -184:
            return "Linux 6.x";
          case -183:
            return "Linux 7.x";
          case -182:
            return "Linux 5.10";
          case -300:
            return "PS3";
          case -700:
            return "Web Client";
          case -500:
            return "Android";
          case -499:
            return "Android 6.x";
          case -498:
            return "Android 7.x";
          case -497:
            return "Android 8.x";
          case -496:
            return "Android 9.x";
          case -600:
            return "iOS";
          case -599:
            return "iOS 1";
          case -598:
            return "iOS 2";
          case -597:
            return "iOS 3";
          case -596:
            return "iOS 4";
          case -595:
            return "iOS 5";
          case -594:
            return "iOS 6";
          case -593:
            return "iOS 6.1";
          case -592:
            return "iOS 7";
          case -591:
            return "iOS 7.1";
          case -590:
            return "iOS 8";
          case -589:
            return "iOS 8.1";
          case -588:
            return "iOS 8.2";
          case -587:
            return "iOS 8.3";
          case -586:
            return "iOS 8.4";
          case -585:
            return "iOS 9";
          case -584:
            return "iOS 9.1";
          case -583:
            return "iOS 9.2";
          case -582:
            return "iOS 9_.3";
          case -581:
            return "iOS 10";
          case -580:
            return "iOS 10.1";
          case -579:
            return "iOS 10.2";
          case -578:
            return "iOS 10.3";
          case -577:
            return "iOS 11";
          case -576:
            return "iOS 11.1";
          case -575:
            return "iOS 11.2";
          case -574:
            return "iOS 11.3";
          case -573:
            return "iOS 11.4";
          case -572:
            return "iOS 12";
          case -571:
            return "iOS 12.1";
          default:
            return "Unknown";
        }
      }
      var s;
      t.d(r, { g: () => i, t: () => s }),
        (function (e) {
          (e[(e.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
            (e[(e.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
            (e[(e.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
            (e[(e.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
            (e[(e.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
            (e[(e.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
            (e[(e.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
            (e[(e.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
            (e[(e.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
            (e[(e.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
            (e[(e.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
            (e[(e.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
            (e[(e.k_EPlatformTypeEmbeddedClient = 12)] =
              "k_EPlatformTypeEmbeddedClient"),
            (e[(e.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
            (e[(e.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax");
        })(s || (s = {}));
    },
    1078: (e, r, t) => {
      "use strict";
      t.d(r, { XC: () => u, _G: () => d });
      var i = t(90626),
        s = t(12155),
        a = t(52038),
        n = t(44691),
        o = t(51706),
        l = t(39449),
        c = t.n(l);
      function u() {
        const [e, r] = i.useState(void 0),
          t = i.useCallback(() => r(void 0), []),
          s = i.createElement(
            o.EN,
            { active: void 0 !== e },
            i.createElement(m, { closeModal: t, rgImageURL: e }),
          );
        return [r, s];
      }
      function m(e) {
        const { closeModal: r, rgImageURL: t } = e,
          [s, a] = i.useState(0),
          n = i.useCallback(() => {
            a(0 == s ? t.length - 1 : s - 1);
          }, [s, t.length]),
          l = i.useCallback(() => {
            s + 1 >= t.length ? a(0) : a(s + 1);
          }, [s, t.length]);
        return i.createElement(
          o.eV,
          {
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: r,
            bHideCloseIcon: !0,
            modalClassName: c().PopupScreenshotModal,
          },
          i.createElement(d, {
            index: s,
            numElements: t.length,
            fnForward: l,
            fnBackwards: n,
            fnClose: r,
            bCircular: !0,
          }),
          i.createElement(
            "div",
            { className: c().PopupScreenshotContainer },
            i.createElement("img", {
              className: c().PopupScreenshot,
              src: t[s],
            }),
          ),
        );
      }
      function d(e) {
        const {
          index: r,
          numElements: t,
          fnForward: o,
          fnBackwards: l,
          fnClose: u,
          bCircular: m,
        } = e;
        (0, n.E)("ArrowLeft", l, !0, !0),
          (0, n.E)("Left", l, !0, !0),
          (0, n.E)("ArrowRight", o, !0, !0),
          (0, n.E)("Right", o, !0, !0),
          (0, n.E)("Escape", () => u && u(), !0, !0),
          (0, n.E)("Esc", () => u && u(), !0, !0);
        let d = t > 1;
        return i.createElement(
          "div",
          { className: c().ButtonCtn },
          d &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                {
                  className: (0, a.A)(
                    c().ButtonIcon,
                    0 !== r || m ? null : c().Disabled,
                  ),
                  onClick: l,
                },
                i.createElement(s.V5W, { angle: 270 }),
              ),
              i.createElement(
                "div",
                {
                  className: (0, a.A)(
                    c().ButtonIcon,
                    r !== t - 1 || m ? null : c().Disabled,
                  ),
                  onClick: o,
                },
                i.createElement(s.V5W, { angle: 90 }),
              ),
            ),
          i.createElement(
            "div",
            { className: c().ButtonIcon, onClick: u },
            i.createElement(s.X, null),
          ),
        );
      }
    },
    26296: (e, r, t) => {
      "use strict";
      t.d(r, { i: () => l, o: () => o });
      var i = t(90626),
        s = t(61859),
        a = t(67523),
        n = t(41951);
      function o(e) {
        const {
            className: r,
            srcs: t,
            lazyLoad: s,
            width: a,
            height: n,
            alt: o,
            crossOrigin: l,
          } = e,
          [c, u] = i.useState(t.length),
          [m, d] = i.useState(0);
        i.useEffect(() => {
          c != t.length && (u(t.length), d(0));
        }, [c, t.length]);
        const B = i.useCallback(() => {
          e.onImageError && e.onImageError(e.srcs[m]),
            m + 1 < e.srcs.length && d(m + 1);
        }, [m, e]);
        return 0 == t.length
          ? null
          : i.createElement("img", {
              className: r,
              src: t[m],
              crossOrigin: l,
              onError: B,
              loading: s ? "lazy" : void 0,
              width: a,
              height: n,
              alt: o,
            });
      }
      function l(e) {
        const [r, t] = i.useState(!1),
          {
            className: o,
            src: l,
            lazyLoad: c,
            width: u,
            height: m,
            alt: d,
            crossOrigin: B,
          } = e;
        return r
          ? i.createElement(
              "div",
              { className: a.ErrorDiv },
              i.createElement("p", null, (0, s.we)("#Image_ErrorTitle", l)),
              i.createElement(
                "ul",
                null,
                i.createElement("li", null, (0, s.we)("#Image_Error_msg1")),
                i.createElement("li", null, (0, s.we)("#Image_Error_msg2")),
                i.createElement("li", null, (0, s.we)("#Image_Error_msg3")),
              ),
              i.createElement("p", null, (0, s.we)("#Image_Error_suggestion")),
            )
          : i.createElement(n.o, {
              className: o,
              src: l,
              onError: () => t(!0),
              crossOrigin: B,
              loading: c ? "lazy" : void 0,
              width: u,
              height: m,
              alt: d,
            });
      }
    },
    41951: (e, r, t) => {
      "use strict";
      t.d(r, { o: () => d });
      var i = t(90626),
        s = t(12155),
        a = t(52038),
        n = t(1078),
        o = t(10224),
        l = t(21038);
      const c = 1.3,
        u = 3,
        m = 256;
      function d(e) {
        const [r, t] = (0, i.useState)(!1),
          [d, B] = (0, i.useState)({
            naturalWidth: 0,
            naturalHeight: 0,
            displayWidth: 0,
            displayHeight: 0,
          }),
          g = (0, i.useRef)(),
          [b, M] = (0, n.XC)();
        return (
          (0, i.useEffect)(() => {
            if (
              d.naturalWidth > d.displayWidth * c &&
              d.naturalHeight > d.displayHeight * c &&
              d.naturalWidth > m
            ) {
              d.naturalWidth / d.naturalHeight < u && t(!0);
            }
          }, [d]),
          r
            ? i.createElement(
                "span",
                { className: l.PreviewCtn },
                M,
                i.createElement(
                  "span",
                  { className: l.SVG },
                  i.createElement(s.YNO, null),
                ),
                i.createElement("img", {
                  ...e,
                  className: (0, a.A)({
                    [e.className]: Boolean(e.className),
                    [l.ExpandableHover]: !0,
                  }),
                  onClick: (r) => b([e.src]),
                }),
              )
            : i.createElement("img", {
                ...e,
                ref: g,
                onLoad: (e) => {
                  if (!e.currentTarget.closest("a") && !(0, o.c5)()) {
                    const {
                      naturalWidth: r,
                      naturalHeight: t,
                      width: i,
                      height: s,
                    } = e.currentTarget;
                    B({
                      naturalWidth: r,
                      naturalHeight: t,
                      displayWidth: i,
                      displayHeight: s,
                    });
                  }
                },
              })
        );
      }
    },
    10224: (e, r, t) => {
      "use strict";
      t.d(r, { c5: () => o, zI: () => l });
      var i = t(90626),
        s = t(45387),
        a = t.n(s),
        n = t(73745);
      function o() {
        return window.innerWidth < parseInt(a().strMaxMobileWidth);
      }
      function l() {
        const e = (0, n.CH)();
        return (
          i.useEffect(
            () => (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            ),
            [e],
          ),
          window.innerWidth < parseInt(a().strMaxMobileWidth)
        );
      }
    },
    44691: (e, r, t) => {
      "use strict";
      t.d(r, { E: () => s });
      var i = t(90626);
      t(13871);
      function s(e, r, t, s) {
        i.useEffect(() => {
          const i = (i) => {
            i.key === e &&
              (r(i), t && i.preventDefault(), s && i.stopPropagation());
          };
          return (
            document.addEventListener("keydown", i),
            () => document.removeEventListener("keydown", i)
          );
        }, [e, r, t, s]);
      }
    },
    61855: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => i });
      const i =
        t.p +
        "images/applications/store/defaultappheader.png?v=valveisgoodatcaching";
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [98453],
    {
      74916: (C, _, w) => {
        "use strict";
        w.d(_, {
          CP: () => K,
          K: () => M,
          PS: () => c,
          QE: () => Z,
          RD: () => Q,
          b5: () => H,
          hU: () => p,
          k_: () => E,
          lk: () => d,
          nR: () => $,
          q3: () => W,
          vn: () => Y,
        });
        var o = w(80613),
          m = w.n(o),
          t = w(75245),
          L = w(35038);
        class O extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.faq_id || t.Sg(O.M()),
              o.Message.initialize(this, r, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    internal_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    visible_in_global_realm: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    visible_in_china_realm: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    json_data: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    per_language_info: { n: 6, c: f, r: !0, q: !0 },
                    url_code: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(O.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new O();
            return O.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(O.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(O.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQSummary";
          }
        }
        class f extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.language || t.Sg(f.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    last_update_timestamp: {
                      n: 2,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    last_publish_timestamp: {
                      n: 3,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = t.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(f.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new f();
            return f.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(f.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(f.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQSummary_CLanguageInfo";
          }
        }
        class u extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.faq_id || t.Sg(u.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    version: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    content: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    timestamp: {
                      n: 6,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    author_account_id: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    url_code: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = t.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(u.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new u();
            return u.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(u.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(u.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQContent";
          }
        }
        class W extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.steamid || t.Sg(W.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    internal_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    json_data: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(W.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new W();
            return W.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(W.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(W.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Create_Request";
          }
        }
        class v extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.faq_id || t.Sg(v.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(v.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new v();
            return v.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(v.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(v.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Create_Response";
          }
        }
        class H extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.steamid || t.Sg(H.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(H.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new H();
            return H.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(H.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(H.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Delete_Request";
          }
        }
        class R extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new R();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new R();
            return R.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Delete_Response";
          }
        }
        class p extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.steamid || t.Sg(p.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    internal_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = t.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(p.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new p();
            return p.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(p.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(p.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateInternalName_Request";
          }
        }
        class j extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new j();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new j();
            return j.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateInternalName_Response";
          }
        }
        class Y extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.steamid || t.Sg(Y.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    json_data: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Y.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new Y();
            return Y.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Y.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Y.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateJsonData_Request";
          }
        }
        class F extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new F();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new F();
            return F.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateJsonData_Response";
          }
        }
        class K extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.steamid || t.Sg(K.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    visible_in_global_realm: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    visible_in_china_realm: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(K.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new K();
            return K.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(K.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(K.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SetVisibility_Request";
          }
        }
        class S extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new S();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new S();
            return S.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SetVisibility_Response";
          }
        }
        class Z extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.steamid || t.Sg(Z.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    content: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Z.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new Z();
            return Z.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateDraft_Request";
          }
        }
        class X extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.last_update_timestamp || t.Sg(X.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    last_update_timestamp: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(X.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new X();
            return X.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(X.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(X.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateDraft_Response";
          }
        }
        class M extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.steamid || t.Sg(M.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(M.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new M();
            return M.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(M.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(M.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PublishDraft_Request";
          }
        }
        class T extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.last_publish_timestamp || t.Sg(T.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    last_publish_timestamp: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(T.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new T();
            return T.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(T.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(T.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PublishDraft_Response";
          }
        }
        class z extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.steamid || t.Sg(z.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(z.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new z();
            return z.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PreviewDraft_Request";
          }
        }
        class U extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.faq || t.Sg(U.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = { proto: U, fields: { faq: { n: 1, c: u } } }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(U.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new U();
            return U.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(U.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(U.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PreviewDraft_Response";
          }
        }
        class l extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.faq_id || t.Sg(l.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = t.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(l.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new l();
            return l.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(l.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(l.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQ_Request";
          }
        }
        class h extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.faq || t.Sg(h.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    faq: { n: 1, c: u },
                    faq_exists: {
                      n: 2,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = t.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(h.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new h();
            return h.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(h.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(h.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQ_Response";
          }
        }
        class E extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.steamid || t.Sg(E.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    version: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(E.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new E();
            return E.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(E.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(E.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQVersion_Request";
          }
        }
        class J extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.faq || t.Sg(J.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = { proto: J, fields: { faq: { n: 1, c: u } } }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(J.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new J();
            return J.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(J.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(J.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQVersion_Response";
          }
        }
        class $ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.steamid || t.Sg($.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new $();
            return $.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllDrafts_Request";
          }
        }
        class D extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.summary || t.Sg(D.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    summary: { n: 1, c: O },
                    draft: { n: 2, c: u, r: !0, q: !0 },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(D.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new D();
            return D.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(D.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(D.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllDrafts_Response";
          }
        }
        class P extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.steamid || t.Sg(P.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(P.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new P();
            return P.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(P.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(P.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllFAQsForClan_Request";
          }
        }
        class k extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.faq || t.Sg(k.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: { faq: { n: 1, c: O, r: !0, q: !0 } },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(k.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new k();
            return k.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(k.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(k.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllFAQsForClan_Response";
          }
        }
        class V extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.steamid || t.Sg(V.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(V.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new V();
            return V.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(V.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(V.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
          }
        }
        class G extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.faqs || t.Sg(G.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { faqs: { n: 1, c: u, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(G.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new G();
            return G.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(G.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(G.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
          }
        }
        class y extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.steamid || t.Sg(y.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = t.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(y.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new y();
            return y.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(y.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(y.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_CheckFAQPermissions_Request";
          }
        }
        class e extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return e.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new e();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new e();
            return e.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_CheckFAQPermissions_Response";
          }
        }
        class s extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.search_text || t.Sg(s.M()),
              o.Message.initialize(this, r, 0, -1, [2, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    search_text: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    elanguages: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                    count: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    cursor: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    filter_clanids: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = t.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(s.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new s();
            return s.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(s.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(s.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Request";
          }
        }
        class a extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.faqs || t.Sg(a.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    faqs: { n: 1, c: n, r: !0, q: !0 },
                    num_total_results: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    next_cursor: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = t.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(a.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new a();
            return a.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(a.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(a.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Response";
          }
        }
        class n extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.articleid || t.Sg(n.M()),
              o.Message.initialize(this, r, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    articleid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    content: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    clan_accountid: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    localized_names: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = t.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(n.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new n();
            return n.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(n.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(n.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
          }
        }
        class c extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.faq_id || t.Sg(c.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = t.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(c.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new c();
            return c.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(c.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(c.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_FetchLocalizationFromCrowdIn_Request";
          }
        }
        class B extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new B();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new B();
            return B.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_FetchLocalizationFromCrowdIn_Response";
          }
        }
        class d extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.faq_id || t.Sg(d.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = t.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(d.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new d();
            return d.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(d.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(d.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_GetCrowdInMetadata_Request";
          }
        }
        class b extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.crowdin_project_id || t.Sg(b.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    crowdin_project_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    crowdin_file_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = t.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(b.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              g = new b();
            return b.deserializeBinaryFromReader(g, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(b.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(b.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_GetCrowdInMetadata_Response";
          }
        }
        var Q;
        ((q) => {
          function r(I, x, N) {
            return I.SendMsg("ClanFAQS.Create#1", (0, L.I8)(W, x, N), v, {
              ePrivilege: 1,
            });
          }
          q.Create = r;
          function i(I, x, N) {
            return I.SendMsg("ClanFAQS.Delete#1", (0, L.I8)(H, x, N), R, {
              ePrivilege: 1,
            });
          }
          q.Delete = i;
          function g(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, L.I8)(p, x, N),
              j,
              { ePrivilege: 1 },
            );
          }
          q.UpdateInternalName = g;
          function rr(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.UpdateJsonData#1",
              (0, L.I8)(Y, x, N),
              F,
              { ePrivilege: 1 },
            );
          }
          q.UpdateJsonData = rr;
          function tr(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.SetVisibility#1",
              (0, L.I8)(K, x, N),
              S,
              { ePrivilege: 1 },
            );
          }
          q.SetVisibility = tr;
          function ir(I, x, N) {
            return I.SendMsg("ClanFAQS.UpdateDraft#1", (0, L.I8)(Z, x, N), X, {
              ePrivilege: 1,
            });
          }
          q.UpdateDraft = ir;
          function er(I, x, N) {
            return I.SendMsg("ClanFAQS.PublishDraft#1", (0, L.I8)(M, x, N), T, {
              ePrivilege: 1,
            });
          }
          q.PublishDraft = er;
          function sr(I, x, N) {
            return I.SendMsg("ClanFAQS.PreviewDraft#1", (0, L.I8)(z, x, N), U, {
              ePrivilege: 1,
            });
          }
          q.PreviewDraft = sr;
          function ar(I, x, N) {
            return I.SendMsg("ClanFAQS.GetFAQ#1", (0, L.I8)(l, x, N), h, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          q.GetFAQ = ar;
          function mr(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.GetFAQVersion#1",
              (0, L.I8)(E, x, N),
              J,
              { ePrivilege: 1, rgBrowserAPISites: ["help"] },
            );
          }
          q.GetFAQVersion = mr;
          function nr(I, x, N) {
            return I.SendMsg("ClanFAQS.GetAllDrafts#1", (0, L.I8)($, x, N), D, {
              ePrivilege: 1,
              rgBrowserAPISites: ["help"],
            });
          }
          q.GetAllDrafts = nr;
          function cr(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, L.I8)(P, x, N),
              k,
              { ePrivilege: 1 },
            );
          }
          q.GetAllFAQsForClan = cr;
          function or(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, L.I8)(V, x, N),
              G,
              { ePrivilege: 1 },
            );
          }
          q.GetAllLatestVersionPublishedFAQS = or;
          function gr(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, L.I8)(y, x, N),
              e,
              { ePrivilege: 1 },
            );
          }
          q.CheckFAQPermissions = gr;
          function Br(I, x, N) {
            return I.SendMsg("ClanFAQS.SearchFAQs#1", (0, L.I8)(s, x, N), a, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["help"],
            });
          }
          q.SearchFAQs = Br;
          function dr(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.FetchLocalizationFromCrowdIn#1",
              (0, L.I8)(c, x, N),
              B,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          q.FetchLocalizationFromCrowdIn = dr;
          function fr(I, x, N) {
            return I.SendMsg(
              "ClanFAQS.GetCrowdInMetadata#1",
              (0, L.I8)(d, x, N),
              b,
              { ePrivilege: 5 },
            );
          }
          q.GetCrowdInMetadata = fr;
        })(Q || (Q = {}));
      },
      71462: (C, _, w) => {
        "use strict";
        w.d(_, { u: () => S });
        var o = w(7850),
          m = w(90626),
          t = w(32093),
          L = w(39239),
          O = w(13465),
          f = w(36707),
          u = w(3166),
          W = w(96232),
          v = w(7487),
          H = w(70187),
          R = w(26763),
          p = w(16516),
          j = w.n(p),
          Y = w(43597),
          F = w(29630);
        const K = new Map([
            ...Array.from(H.W4.entries()),
            ...Array.from(H.N2.entries()),
            ["section", { Constructor: Z, autocloses: !1 }],
            ["img", { Constructor: X, autocloses: !1 }],
            ["exclude_realm", { Constructor: M, autocloses: !1 }],
          ]),
          S = (T) => {
            const { text: z, bShowErrorInfo: U, version: l, language: h } = T,
              E = m.useCallback(
                ($) =>
                  new R.gL(
                    new R.pH(
                      new v.OJ(new v.R8()),
                      $,
                      [
                        {
                          urlRegExp: /youtu.be|youtube.com/i,
                          fnBBComponent: Y.j6,
                        },
                      ],
                      {},
                    ),
                    $,
                  ),
                [],
              ),
              J = m.useMemo(() => new W.B(K, E, h ?? u.TS.LANGUAGE), [E, h]);
            return (0, o.jsx)("div", {
              className: j().FAQContainer,
              children: J.ParseBBCode(z, { showErrorInfo: U, version: l }),
            });
          };
        function Z(T) {
          let z = (0, H.j$)(T.args, "id");
          z &&
            typeof z == "string" &&
            z.length > 0 &&
            z[0] === "#" &&
            (z = z.substring(1));
          const U = (0, H.j$)(T.args, "style"),
            l = (0, f.A)(
              j().Section,
              U == "note" && j().Note,
              U == "important" && j().Important,
              U == "warning" && j().Warning,
            );
          return (0, o.jsx)("div", {
            id: z || void 0,
            className: l,
            children: T.children,
          });
        }
        function X(T) {
          const { showErrorInfo: z, version: U } = T.context;
          let l = T?.children?.toString();
          (l == null || l == null || l.length == 0) && (l = T?.args?.[""]);
          const h = T?.args?.alt,
            E = (0, F.z5)(l, T.language, Number.parseInt(U));
          return E == null
            ? null
            : typeof E == "string"
              ? ((l = E),
                z
                  ? (0, o.jsx)(L.i, { className: j().FAQImage, src: l, alt: h })
                  : ((l = l.replace("http://", "https://")),
                    (0, o.jsx)("img", {
                      className: j().FAQImage,
                      src: l,
                      alt: h,
                    })))
              : (0, o.jsx)(O.c, {
                  className: j().FAQImage,
                  rgSources: E,
                  alt: h,
                });
        }
        function M(T) {
          const z = (0, H.j$)(T.args);
          return (z == "global" && u.TS.EREALM == t.TU.k_ESteamRealmGlobal) ||
            (z == "china" && (0, u.Y2)())
            ? null
            : (0, o.jsx)(o.Fragment, { children: T.children });
        }
      },
      90395: (C, _, w) => {
        "use strict";
        w.d(_, {
          pN: () => h,
          Wj: () => $,
          CJ: () => J,
          z5: () => P,
          cf: () => V,
          g5: () => k,
          W: () => G,
          Kv: () => D,
        });
        var o = w(41735),
          m = w.n(o),
          t = w(38506),
          L = w(14947),
          O = w(90626),
          f = w(72604),
          u = w(99412),
          W = w(35038),
          v = w(32093),
          H = w(71742),
          R = w(27066),
          p = w(34592),
          j = w(3166),
          Y = Object.defineProperty,
          F = Object.getOwnPropertyDescriptor,
          K = (y, e, s, a) => {
            for (
              var n = a > 1 ? void 0 : a ? F(e, s) : e, c = y.length - 1, B;
              c >= 0;
              c--
            )
              (B = y[c]) && (n = (a ? B(e, s, n) : B(n)) || n);
            return a && n && Y(e, s, n), n;
          };
        class S {
          m_summary = void 0;
          m_mapStoredDrafts;
          m_mapLocalUpdates = new Map();
          constructor(e, s) {
            (0, L.Gn)(this),
              (this.m_summary = e),
              (this.m_mapStoredDrafts = s),
              (this.m_mapLocalUpdates = new Map());
            for (let a = u.Bhc; a < u.bP9; a++)
              this.m_mapLocalUpdates.set(a, {});
          }
          BNeedsSaving(e) {
            if (e !== void 0) {
              const s = this.m_mapLocalUpdates.get(e);
              return !!s.strTitle || !!s.strContent;
            }
            return Array.from(this.m_mapLocalUpdates.values()).some(
              (s) => !!s.strTitle || !!s.strContent,
            );
          }
          async SaveDrafts() {
            (0, H.wT)(
              !!this.m_summary?.faq_id,
              "Attempting to save when we lack a FaqID in the summary object",
            );
            let e = f.R,
              s = new Array();
            for (let a = u.Bhc; a < u.bP9; ++a)
              if (
                (this.m_mapLocalUpdates.get(a).strTitle &&
                  this.m_mapLocalUpdates.get(a).strTitle !==
                    this.m_mapStoredDrafts.get(a)?.title) ||
                (this.m_mapLocalUpdates.get(a).strContent &&
                  this.m_mapLocalUpdates.get(a).strContent !==
                    this.m_mapStoredDrafts.get(a)?.content)
              ) {
                const n = this.GetDraftTitle(a),
                  c = this.GetDraftContent(a),
                  B = h.Get().UpdateDraft(this.m_summary?.faq_id, a, n, c);
                B.then((d) => {
                  d.eResult == f.R
                    ? (0, L.h5)(() => {
                        this.m_mapStoredDrafts.has(a) ||
                          this.m_mapStoredDrafts.set(a, {}),
                          (this.m_mapStoredDrafts.get(a).title = n),
                          (this.m_mapStoredDrafts.get(a).content = c),
                          (this.m_mapStoredDrafts.get(a).timestamp =
                            d.rtUpdateTime),
                          (this.m_mapStoredDrafts.get(a).author_account_id =
                            j.iA.accountid.toString()),
                          (this.m_mapLocalUpdates.get(a).strTitle = null),
                          (this.m_mapLocalUpdates.get(a).strContent = null);
                        let b = !1;
                        this.m_summary.per_language_info.forEach((Q) => {
                          a == Q.language &&
                            ((b = !0),
                            (Q.last_update_timestamp = Math.max(
                              Q.last_update_timestamp,
                              d.rtUpdateTime,
                            )));
                        }),
                          b ||
                            this.m_summary.per_language_info.push({
                              language: a,
                              last_update_timestamp: d.rtUpdateTime,
                            });
                      })
                    : e == f.R &&
                      (console.error(
                        "FAQModel.SaveDraft: Response not ok " + d.eResult,
                        d,
                      ),
                      (e = d.eResult));
                }).catch((d) => {
                  console.error(
                    "FAQModel.SaveDrafts: Hit error " + (0, p.H)(d).strErrorMsg,
                  ),
                    e == f.R && (e = f.zi);
                }),
                  s.push(B);
              }
            return await Promise.all(s), e;
          }
          GetFAQInternalName() {
            return this.m_summary?.internal_name;
          }
          GetDraftTitle(e) {
            return this.m_mapLocalUpdates.get(e).strTitle !== null &&
              this.m_mapLocalUpdates.get(e).strTitle !== void 0
              ? this.m_mapLocalUpdates.get(e).strTitle
              : this.m_mapStoredDrafts.get(e)?.title;
          }
          GetDraftContent(e) {
            return this.m_mapLocalUpdates.get(e).strContent !== null &&
              this.m_mapLocalUpdates.get(e).strContent !== void 0
              ? this.m_mapLocalUpdates.get(e).strContent
              : this.m_mapStoredDrafts.get(e)?.content;
          }
          GetDraftTitleWithFallback(e, s = v.TU.k_ESteamRealmGlobal) {
            const a = s == v.TU.k_ESteamRealmChina ? u.NFp : u.Bhc;
            return (
              this.m_mapLocalUpdates.get(e).strTitle ??
              this.m_mapLocalUpdates.get(a).strTitle ??
              this.m_mapStoredDrafts.get(e)?.title ??
              this.m_mapStoredDrafts.get(a)?.title ??
              ""
            );
          }
          GetDraftContentWithFallback(e, s = v.TU.k_ESteamRealmGlobal) {
            const a = s == v.TU.k_ESteamRealmChina ? u.NFp : u.Bhc;
            return (
              this.m_mapLocalUpdates.get(e).strContent ??
              this.m_mapLocalUpdates.get(a).strContent ??
              this.m_mapStoredDrafts.get(e)?.content ??
              this.m_mapStoredDrafts.get(a)?.content ??
              ""
            );
          }
          GetLastSavedDraftVersion(e) {
            return this.m_mapStoredDrafts.get(e);
          }
          BHasSomeTextForLanguage(e) {
            return !!(this.GetDraftContent(e) || this.GetDraftTitle(e));
          }
          SetDraftTitle(e, s) {
            s === this.m_mapStoredDrafts.get(e)?.title
              ? (this.m_mapLocalUpdates.get(e).strTitle = null)
              : (this.m_mapLocalUpdates.get(e).strTitle = s);
          }
          SetDraftContent(e, s) {
            s === this.m_mapStoredDrafts.get(e)?.content
              ? (this.m_mapLocalUpdates.get(e).strContent = null)
              : (this.m_mapLocalUpdates.get(e).strContent = s);
          }
          GetIncludedRealmList() {
            const e = new Array();
            return (
              this.m_summary.visible_in_global_realm &&
                e.push(v.TU.k_ESteamRealmGlobal),
              this.m_summary.visible_in_china_realm &&
                e.push(v.TU.k_ESteamRealmChina),
              e.length == 0 && e.push(v.TU.k_ESteamRealmGlobal),
              (0, H.wT)(
                e.length > 0,
                `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
              ),
              e
            );
          }
          BHasPublished() {
            return !!this.m_summary.per_language_info.some(
              (e) => !!e.last_publish_timestamp,
            );
          }
          GetLastTimeLanguageUpdated(e) {
            return this.GetLastSavedDraftVersion(e)?.timestamp ?? 0;
          }
          GetFAQID() {
            return this.m_summary.faq_id;
          }
          GetSummary() {
            return this.m_summary;
          }
          BLocalizeDraft() {
            return this.m_summary.json_data.length === 0
              ? !1
              : (JSON.parse(this.m_summary.json_data).localizeDraft ?? !1);
          }
          BPushToCrowdIn() {
            return this.m_summary.json_data.length === 0
              ? !1
              : (JSON.parse(this.m_summary.json_data).pushToCrowdIn ?? !1);
          }
          GetJsonData() {
            return this.m_summary.json_data;
          }
          async UpdateJsonData(e) {
            const s = await h.Get().UpdateJsonData(this.GetFAQID(), e);
            return (
              s === f.R && (this.m_summary.json_data = JSON.stringify(e)), s
            );
          }
        }
        K([L.sH], S.prototype, "m_summary", 2),
          K([L.sH], S.prototype, "m_mapLocalUpdates", 2),
          K([R.o], S.prototype, "BHasSomeTextForLanguage", 1),
          K([R.o], S.prototype, "GetLastTimeLanguageUpdated", 1);
        var Z = w(77008),
          X = w(60298),
          M = w(74916),
          T = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          U = (y, e, s, a) => {
            for (
              var n = a > 1 ? void 0 : a ? z(e, s) : e, c = y.length - 1, B;
              c >= 0;
              c--
            )
              (B = y[c]) && (n = (a ? B(e, s, n) : B(n)) || n);
            return a && n && T(e, s, n), n;
          };
        const l = class A {
          m_mapFAQSummaries = new Map();
          m_mapFAQPublishedContent = new Map();
          m_mapFAQDrafts = new Map();
          m_bHasFAQEdit = !1;
          m_steamInterface = null;
          static s_Singleton;
          static Get() {
            return A.s_Singleton || (A.s_Singleton = new A()), A.s_Singleton;
          }
          static Init(e) {
            A.Get().m_steamInterface = e;
          }
          constructor() {
            (0, L.Gn)(this),
              j.TS.IN_STEAMUI ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
          }
          SetUpWebAPIInterface() {
            const s = (0, j.Tc)("faqstore", "application_config")?.webapi_token;
            this.m_steamInterface = (0, X.C)(new Z.D(j.TS.WEBAPI_BASE_URL, s));
          }
          ReadInitialPayload() {
            const e = (0, j.Tc)("faqstore", "application_config");
            if (this.BIsConfigValid(e)) {
              if (e.faqs)
                for (const s in e.faqs) {
                  const a = e.faqs[s];
                  a?.faq_id != s ||
                    a?.language === void 0 ||
                    (this.m_mapFAQPublishedContent.has(s) ||
                      this.m_mapFAQPublishedContent.set(s, new Map()),
                    this.m_mapFAQPublishedContent.get(s).set(a.language, a));
                }
              if (e.alldrafts)
                for (const s in e.alldrafts) {
                  const a = e.alldrafts[s];
                  if (!a?.summary || !a.draft) continue;
                  this.m_mapFAQSummaries.set(s, a.summary);
                  const n = new Map();
                  for (const c of a.draft) n.set(c.language, c);
                  this.m_mapFAQDrafts.set(
                    s,
                    new S(this.m_mapFAQSummaries.get(s), n),
                  );
                }
              if (e.allfaqs)
                for (const s of e.allfaqs)
                  s.faq_id &&
                    (this.m_mapFAQSummaries.has(s.faq_id) ||
                      this.m_mapFAQSummaries.set(s.faq_id, s));
              this.m_bHasFAQEdit = !!e.has_faq_edit;
            }
          }
          BIsConfigValid(e) {
            const s = e;
            return !!(
              (s && s.faqs && typeof s.faqs == "object") ||
              (s.alldrafts && typeof s.alldrafts == "object") ||
              (s.allfaqs && Array.isArray(s.allfaqs))
            );
          }
          async CreateFAQ(e) {
            const s = W.w.Init(M.q3);
            s.Body().set_steamid(j.UF.CLANSTEAMID),
              s.Body().set_internal_name(e);
            let a = f.zi,
              n;
            try {
              const c = await M.RD.Create(
                this.m_steamInterface.GetServiceTransport(),
                s,
              );
              if (((a = c.GetEResult()), a == f.R)) {
                n = c.Body().faq_id();
                const B = { faq_id: n, internal_name: e };
                this.m_mapFAQSummaries.set(n, B);
              } else
                console.error("FAQStore.CreateFAQ: Create request failed:", a);
            } catch (c) {
              const B = (0, p.H)(c);
              console.error(
                "FAQStore.CreateFAQ: caught error " + B.strErrorMsg,
                B,
              );
            }
            return { eResult: a, strFaqId: n };
          }
          async UpdateDraft(e, s, a, n) {
            const c = W.w.Init(M.QE);
            c.Body().set_steamid(j.UF.CLANSTEAMID),
              c.Body().set_faq_id(e),
              c.Body().set_language(s),
              c.Body().set_content(n),
              c.Body().set_title(a);
            let B = f.zi,
              d = 0;
            try {
              const b = await M.RD.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                c,
              );
              (B = b.GetEResult()),
                B != f.R
                  ? console.error("FAQStore.UpdateDraft request failed:", B)
                  : (d = b.Body().last_update_timestamp());
            } catch (b) {
              const Q = (0, p.H)(b);
              console.error(
                "FAQStore.UpdateDraft: caught error " + Q.strErrorMsg,
                Q,
              );
            }
            return { eResult: B, rtUpdateTime: d };
          }
          async UpdateJsonData(e, s) {
            const a = JSON.stringify(s),
              n = W.w.Init(M.vn);
            n.Body().set_steamid(j.UF.CLANSTEAMID),
              n.Body().set_faq_id(e),
              n.Body().set_json_data(a);
            let c = f.zi;
            try {
              (c = (
                await M.RD.UpdateJsonData(
                  this.m_steamInterface.GetServiceTransport(),
                  n,
                )
              ).GetEResult()),
                c != f.R
                  ? console.error("FAQStore.UpdateJsonData request failed:", c)
                  : (this.m_mapFAQSummaries.get(e).json_data = a);
            } catch (B) {
              const d = (0, p.H)(B);
              console.error(
                "FAQStore.UpdateJsonData: caught error " + d.strErrorMsg,
                d,
              );
            }
            return c;
          }
          async GetFAQVersion(e, s, a) {
            const n = W.w.Init(M.k_);
            n.Body().set_steamid(j.UF.CLANSTEAMID),
              n.Body().set_faq_id(e),
              n.Body().set_version(s),
              n.Body().set_language(a);
            try {
              const c = await M.RD.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  n,
                ),
                B = c.GetEResult();
              if (B == f.R) return c.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", B);
            } catch (c) {
              const B = (0, p.H)(c);
              console.error(
                "FAQStore.GetFAQVersion: caught error " + B.strErrorMsg,
                B,
              );
            }
            return null;
          }
          async DeleteFAQ(e) {
            const s = W.w.Init(M.b5);
            s.Body().set_steamid(j.UF.CLANSTEAMID), s.Body().set_faq_id(e);
            let a = f.zi;
            try {
              (a = (
                await M.RD.Delete(
                  this.m_steamInterface.GetServiceTransport(),
                  s,
                )
              ).GetEResult()),
                a != f.R
                  ? console.error("FAQStore.DeleteFAQ request failed:", a)
                  : (this.m_mapFAQDrafts.delete(e),
                    this.m_mapFAQPublishedContent.delete(e),
                    this.m_mapFAQSummaries.delete(e));
            } catch (n) {
              const c = (0, p.H)(n);
              console.error(
                "FAQStore.DeleteFAQ: caught error " + c.strErrorMsg,
                c,
              );
            }
            return a;
          }
          static sm_mapFallbackLanguages = new Map([
            [u.HkE, u.FHN],
            [u.FHN, u.HkE],
            [u.ZLm, u.NFp],
          ]);
          GetFAQPublishedContent(e, s) {
            const a = this.m_mapFAQPublishedContent.get(e);
            if (!a) return null;
            let n = a.get(s);
            return (
              !n &&
                A.sm_mapFallbackLanguages.has(s) &&
                (n = a.get(A.sm_mapFallbackLanguages.get(s))),
              !n && s != u.Bhc && !(0, j.Y2)() && (n = a.get(u.Bhc)),
              n
            );
          }
          GetFAQDraftContent(e) {
            return this.m_mapFAQDrafts.get(e);
          }
          GetAllFAQSummaries() {
            return Array.from(this.m_mapFAQSummaries.values());
          }
          GetFAQArticleSummary(e) {
            return this.m_mapFAQSummaries.get(e) || {};
          }
          async LoadFAQDraftContent(e) {
            if (this.m_mapFAQDrafts.has(e)) return this.m_mapFAQDrafts.get(e);
            const s = W.w.Init(M.nR);
            s.Body().set_steamid(j.UF.CLANSTEAMID), s.Body().set_faq_id(e);
            let a = f.zi;
            try {
              const n = await M.RD.GetAllDrafts(
                this.m_steamInterface.GetServiceTransport(),
                s,
              );
              if (((a = n.GetEResult()), a != f.R))
                return (
                  console.error(
                    "FaqStore.LoadFAQDraftContent request failed:",
                    a,
                  ),
                  null
                );
              {
                const c = n.Body().summary().toObject();
                this.m_mapFAQSummaries.set(e, c);
                const B = new Map();
                n.Body()
                  .draft()
                  .forEach((b) => B.set(b.language(), b.toObject()));
                const d = new S(this.m_mapFAQSummaries.get(e), B);
                return this.m_mapFAQDrafts.set(e, d), d;
              }
            } catch (n) {
              const c = (0, p.H)(n);
              console.error(
                "FaqStore.LoadFAQDraftContent: exception " + c.strErrorMsg,
                c,
              );
            }
            return null;
          }
          async UpdateVisibility(e, s, a) {
            const n = W.w.Init(M.CP);
            n.Body().set_steamid(j.UF.CLANSTEAMID),
              n.Body().set_faq_id(e),
              n.Body().set_visible_in_global_realm(s),
              n.Body().set_visible_in_china_realm(a);
            let c = f.zi;
            try {
              if (
                ((c = (
                  await M.RD.SetVisibility(
                    this.m_steamInterface.GetServiceTransport(),
                    n,
                  )
                ).GetEResult()),
                c === f.R)
              ) {
                const d = this.m_mapFAQSummaries.get(e);
                d &&
                  ((d.visible_in_global_realm = s),
                  (d.visible_in_china_realm = a),
                  this.m_mapFAQSummaries.set(e, d));
              } else console.error("FaqStore.UpdateVisibility: Failed " + c);
            } catch (B) {
              const d = (0, p.H)(B);
              console.error(
                "FaqStore.UpdateVisibility: exception " + d.strErrorMsg,
                d,
              );
            }
            return c;
          }
          async PublishDraftByLanguage(e, s) {
            if (!s || s.length == 0) return f.R;
            const a = W.w.Init(M.K);
            a.Body().set_steamid(j.UF.CLANSTEAMID),
              a.Body().set_faq_id(e),
              s.forEach((c) => a.Body().add_language(c));
            let n = f.zi;
            try {
              const c = await M.RD.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (((n = c.GetEResult()), n === f.R)) {
                const B = this.m_mapFAQSummaries.get(e);
                B &&
                  (0, L.h5)(() => {
                    this.m_mapFAQPublishedContent.has(e) ||
                      this.m_mapFAQPublishedContent.set(e, new Map()),
                      B.per_language_info.forEach((d) => {
                        const b = d.language;
                        if (s.indexOf(b) >= 0) {
                          d.last_publish_timestamp = Math.max(
                            d.last_publish_timestamp,
                            c.Body().last_publish_timestamp(),
                          );
                          const Q = this.m_mapFAQDrafts
                            .get(e)
                            ?.GetLastSavedDraftVersion(b);
                          this.m_mapFAQPublishedContent.get(e).set(b, Q);
                        }
                      });
                  });
              } else
                console.error("FaqStore.PublishDraftByLanguage: Failed " + n);
            } catch (c) {
              const B = (0, p.H)(c);
              console.error(
                "FaqStore.PublishDraftByLanguage: exception " + B.strErrorMsg,
                B,
              );
            }
            return n;
          }
          async UpdateInternalName(e, s) {
            const a = W.w.Init(M.hU);
            a.Body().set_steamid(j.UF.CLANSTEAMID),
              a.Body().set_faq_id(e),
              a.Body().set_internal_name(s);
            let n = f.zi;
            try {
              (n = (
                await M.RD.UpdateInternalName(
                  this.m_steamInterface.GetServiceTransport(),
                  a,
                )
              ).GetEResult()),
                n === f.R
                  ? (0, L.h5)(() => {
                      this.m_mapFAQSummaries.get(e)?.internal_name &&
                        (this.m_mapFAQSummaries.get(e).internal_name = s),
                        this.m_mapFAQDrafts.get(e)?.GetSummary()
                          ?.internal_name &&
                          (this.m_mapFAQDrafts
                            .get(e)
                            .GetSummary().internal_name = s);
                    })
                  : console.error("FaqStore.UpdateInternalName: Failed " + n);
            } catch (c) {
              const B = (0, p.H)(c);
              console.error(
                "FaqStore.UpdateInternalName: exception " + B.strErrorMsg,
                B,
              );
            }
            return n;
          }
          GetLoadedDraftObjs() {
            return Array.from(this.m_mapFAQDrafts.values());
          }
          RemoveAllDirtyDrafts() {
            this.GetLoadedDraftObjs()
              ?.filter((s) => s.BNeedsSaving())
              ?.map((s) => s.GetFAQID())
              ?.forEach((s) => this.m_mapFAQDrafts.delete(s));
          }
          BHasFAQEdit() {
            return this.m_bHasFAQEdit;
          }
          async ExportEnglishDraftToCrowdin(e) {
            const s =
              j.TS.COMMUNITY_BASE_URL +
              "faqs/" +
              j.UF.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              $(e);
            await m().get(s);
          }
          async ImportNonEnglishDraftsFromCrowdin(e, s, a) {
            const n =
                j.TS.COMMUNITY_BASE_URL +
                "faqs/" +
                j.UF.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                $(e),
              c = new FormData();
            c.append("sessionid", (0, j.KC)()),
              c.append("languages", s.join(","));
            let B = null;
            try {
              const b = await m().post(n, c, {
                withCredentials: !0,
                cancelToken: a?.token,
              });
              if (b?.status == 200 && b.data?.success == f.R) {
                const q = b.data.updated?.[e] ?? [];
                return (
                  q.length > 0 &&
                    (this.m_mapFAQSummaries.has(e) ||
                      this.m_mapFAQDrafts.has(e)) &&
                    (this.m_mapFAQDrafts.delete(e),
                    await this.LoadFAQDraftContent(e)),
                  q
                );
              }
              B = { response: b };
            } catch (b) {
              B = b;
            }
            const d = (0, p.H)(B);
            return (
              console.error(
                "Could not import from crowdin",
                e,
                d.strErrorMsg,
                d,
              ),
              []
            );
          }
          BHasLiveEnglishVersion(e) {
            return this.m_mapFAQSummaries
              .get(e)
              .per_language_info.some(
                (a) => a.language == u.Bhc && a.last_publish_timestamp > 0,
              );
          }
          GetNonEnglishDraftsToPublish(e) {
            return this.m_mapFAQSummaries
              .get(e)
              .per_language_info.filter(
                (n) =>
                  n.language != u.Bhc &&
                  n.last_update_timestamp > (n.last_publish_timestamp ?? 0),
              )
              .map((n) => n.language);
          }
        };
        U([L.sH], l.prototype, "m_mapFAQSummaries", 2),
          U([L.XI], l.prototype, "RemoveAllDirtyDrafts", 1);
        let h = l;
        const E = /^[0-9a-fA-F]+$/;
        function J(y) {
          const e = y?.replace(/-/g, "");
          return e?.length != 16 || !E.test(e)
            ? null
            : t.A.fromString(e, !0, 16).toString();
        }
        function $(y) {
          const s = (
            "0000000000000000" + t.A.fromString(y, !0, 10).toString(16)
          )
            .slice(-16)
            .toUpperCase();
          return `${s.slice(0, 4)}-${s.slice(4, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}`;
        }
        function D(y, e) {
          return [y && h.Get().GetFAQPublishedContent(y, e), !0];
        }
        function P(y) {
          const [e, s] = O.useState(h.Get().GetFAQDraftContent(y)),
            [a, n] = O.useState(!!e);
          return (
            (0, O.useEffect)(() => {
              h.Get()
                .LoadFAQDraftContent(y)
                .then((c) => s(c))
                .finally(() => n(!0));
            }, [y]),
            [e, a]
          );
        }
        function k(y) {
          return [h.Get().GetFAQArticleSummary(y), !0];
        }
        function V() {
          const y = h.Get().GetAllFAQSummaries();
          return O.useRef([y, !0]).current;
        }
        function G(y, e, s) {
          const [a, n] = O.useState(null),
            [c, B] = O.useState(!1);
          return (
            (0, O.useEffect)(() => {
              h.Get().BHasFAQEdit() &&
                h
                  .Get()
                  .GetFAQVersion(y, e, s)
                  .then((d) => n(d))
                  .finally(() => B(!0));
            }, [y, e, s]),
            [a, c]
          );
        }
      },
      16516: (C) => {
        C.exports = {
          FAQContainer: "_2PQsW53YUsH-Z6TICGEF3K",
          Section: "bjwwIcPcDhqU8vTIhRti3",
          Note: "XjQ8ghCC1Ncl0mZyQ3iDM",
          Important: "mRx2Io-gR5pz0gqZnF4e7",
          Warning: "_3Hvtr6roA7ZUH4Vmi-YiYS",
          FAQImage: "_3EebtYBetncFupzjwjtJ8k",
        };
      },
    },
  ]);
})();

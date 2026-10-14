/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8453],
    {
      74916: (De, je, B) => {
        "use strict";
        B.d(je, {
          CP: () => de,
          K: () => Pe,
          PS: () => tt,
          QE: () => Ie,
          RD: () => et,
          b5: () => Me,
          hU: () => b,
          k_: () => Q,
          lk: () => rt,
          nR: () => _e,
          q3: () => Ue,
          vn: () => Se,
        });
        var o = B(80613),
          s = B.n(o),
          t = B(75245),
          h = B(35038),
          ye = Object.defineProperty,
          F = (A, e, r) =>
            e in A
              ? ye(A, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (A[e] = r),
          m = (A, e, r) => F(A, typeof e != "symbol" ? e + "" : e, r);
        const ce = class q extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.faq_id || t.Sg(q.M()),
              o.Message.initialize(this, e, 0, -1, [6], null);
          }
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
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
                    per_language_info: { n: 6, c: ve, r: !0, q: !0 },
                    url_code: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(q.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new q();
            return q.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQSummary";
          }
        };
        m(ce, "sm_m"), m(ce, "sm_mbf");
        let ge = ce;
        const be = class U extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.language || t.Sg(U.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
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
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(U.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new U();
            return U.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(U.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(U.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQSummary_CLanguageInfo";
          }
        };
        m(be, "sm_m"), m(be, "sm_mbf");
        let ve = be;
        const oe = class _ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.faq_id || t.Sg(_.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
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
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new _();
            return _.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQContent";
          }
        };
        m(oe, "sm_m"), m(oe, "sm_mbf");
        let p = oe;
        const Ce = class j extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.steamid || t.Sg(j.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
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
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(j.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new j();
            return j.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(j.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(j.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Create_Request";
          }
        };
        m(Ce, "sm_m"), m(Ce, "sm_mbf");
        let Ue = Ce;
        const Qe = class T extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.faq_id || t.Sg(T.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(T.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new T();
            return T.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(T.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(T.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Create_Response";
          }
        };
        m(Qe, "sm_m"), m(Qe, "sm_mbf");
        let ze = Qe;
        const we = class W extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.steamid || t.Sg(W.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
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
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(W.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new W();
            return W.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(W.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(W.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Delete_Request";
          }
        };
        m(we, "sm_m"), m(we, "sm_mbf");
        let Me = we;
        class Be extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
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
            let r = new (s().BinaryReader)(e),
              c = new Be();
            return Be.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Delete_Response";
          }
        }
        const z = class O extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.steamid || t.Sg(O.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
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
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(O.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new O();
            return O.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(O.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(O.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateInternalName_Request";
          }
        };
        m(z, "sm_m"), m(z, "sm_mbf");
        let b = z;
        class v extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new v();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new v();
            return v.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateInternalName_Response";
          }
        }
        const pe = class D extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.steamid || t.Sg(D.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
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
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(D.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new D();
            return D.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(D.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(D.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateJsonData_Request";
          }
        };
        m(pe, "sm_m"), m(pe, "sm_mbf");
        let Se = pe;
        class me extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new me();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new me();
            return me.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateJsonData_Response";
          }
        }
        const C = class I extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.steamid || t.Sg(I.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
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
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(I.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new I();
            return I.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(I.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(I.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SetVisibility_Request";
          }
        };
        m(C, "sm_m"), m(C, "sm_mbf");
        let de = C;
        class R extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new R();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new R();
            return R.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SetVisibility_Response";
          }
        }
        const Te = class P extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.steamid || t.Sg(P.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
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
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(P.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new P();
            return P.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(P.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(P.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateDraft_Request";
          }
        };
        m(Te, "sm_m"), m(Te, "sm_mbf");
        let Ie = Te;
        const qe = class G extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.last_update_timestamp || t.Sg(G.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    last_update_timestamp: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(G.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new G();
            return G.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(G.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(G.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateDraft_Response";
          }
        };
        m(qe, "sm_m"), m(qe, "sm_mbf");
        let Ge = qe;
        const We = class E extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              E.prototype.steamid || t.Sg(E.M()),
              o.Message.initialize(this, e, 0, -1, [3], null);
          }
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
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(E.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(E.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new E();
            return E.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(E.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(E.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PublishDraft_Request";
          }
        };
        m(We, "sm_m"), m(We, "sm_mbf");
        let Pe = We;
        const Oe = class L extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.last_publish_timestamp || t.Sg(L.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    last_publish_timestamp: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(L.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new L();
            return L.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(L.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(L.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PublishDraft_Response";
          }
        };
        m(Oe, "sm_m"), m(Oe, "sm_mbf");
        let Ee = Oe;
        const g = class x extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.steamid || t.Sg(x.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
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
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = t.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(x.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new x();
            return x.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(x.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(x.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PreviewDraft_Request";
          }
        };
        m(g, "sm_m"), m(g, "sm_mbf");
        let i = g;
        const a = class N extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.faq || t.Sg(N.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = { proto: N, fields: { faq: { n: 1, c: p } } }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(N.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new N();
            return N.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(N.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(N.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PreviewDraft_Response";
          }
        };
        m(a, "sm_m"), m(a, "sm_mbf");
        let n = a;
        const l = class V extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.faq_id || t.Sg(V.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
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
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(V.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new V();
            return V.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(V.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(V.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQ_Request";
          }
        };
        m(l, "sm_m"), m(l, "sm_mbf");
        let u = l;
        const d = class H extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.faq || t.Sg(H.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    faq: { n: 1, c: p },
                    faq_exists: {
                      n: 2,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(H.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new H();
            return H.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(H.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(H.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQ_Response";
          }
        };
        m(d, "sm_m"), m(d, "sm_mbf");
        let f = d;
        const w = class K extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.steamid || t.Sg(K.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
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
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(K.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new K();
            return K.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(K.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(K.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQVersion_Request";
          }
        };
        m(w, "sm_m"), m(w, "sm_mbf");
        let Q = w;
        const ue = class J extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.faq || t.Sg(J.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = { proto: J, fields: { faq: { n: 1, c: p } } }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(J.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new J();
            return J.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(J.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(J.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQVersion_Response";
          }
        };
        m(ue, "sm_m"), m(ue, "sm_mbf");
        let fe = ue;
        const he = class $ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.steamid || t.Sg($.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
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
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new $();
            return $.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllDrafts_Request";
          }
        };
        m(he, "sm_m"), m(he, "sm_mbf");
        let _e = he;
        const Le = class Y extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.summary || t.Sg(Y.M()),
              o.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    summary: { n: 1, c: ge },
                    draft: { n: 2, c: p, r: !0, q: !0 },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Y.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Y();
            return Y.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Y.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Y.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllDrafts_Response";
          }
        };
        m(Le, "sm_m"), m(Le, "sm_mbf");
        let it = Le;
        const xe = class Z extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.steamid || t.Sg(Z.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
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
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Z.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Z();
            return Z.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllFAQsForClan_Request";
          }
        };
        m(xe, "sm_m"), m(xe, "sm_mbf");
        let at = xe;
        const Ne = class X extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.faq || t.Sg(X.M()),
              o.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: { faq: { n: 1, c: ge, r: !0, q: !0 } },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(X.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new X();
            return X.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(X.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(X.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllFAQsForClan_Response";
          }
        };
        m(Ne, "sm_m"), m(Ne, "sm_mbf");
        let st = Ne;
        const Ve = class k extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.steamid || t.Sg(k.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
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
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(k.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new k();
            return k.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(k.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(k.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
          }
        };
        m(Ve, "sm_m"), m(Ve, "sm_mbf");
        let nt = Ve;
        const He = class ee extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.faqs || t.Sg(ee.M()),
              o.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: { faqs: { n: 1, c: p, r: !0, q: !0 } },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ee.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ee();
            return ee.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
          }
        };
        m(He, "sm_m"), m(He, "sm_mbf");
        let lt = He;
        const Ke = class te extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.steamid || t.Sg(te.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = t.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(te.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new te();
            return te.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_CheckFAQPermissions_Request";
          }
        };
        m(Ke, "sm_m"), m(Ke, "sm_mbf");
        let ot = Ke;
        class Fe extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Fe();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Fe();
            return Fe.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_CheckFAQPermissions_Response";
          }
        }
        const Je = class re extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.search_text || t.Sg(re.M()),
              o.Message.initialize(this, e, 0, -1, [2, 5], null);
          }
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
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
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new re();
            return re.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Request";
          }
        };
        m(Je, "sm_m"), m(Je, "sm_mbf");
        let mt = Je;
        const $e = class ie extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.faqs || t.Sg(ie.M()),
              o.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    faqs: { n: 1, c: ct, r: !0, q: !0 },
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
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ie();
            return ie.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Response";
          }
        };
        m($e, "sm_m"), m($e, "sm_mbf");
        let ut = $e;
        const Ye = class ae extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.articleid || t.Sg(ae.M()),
              o.Message.initialize(this, e, 0, -1, [6], null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
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
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ae();
            return ae.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
          }
        };
        m(Ye, "sm_m"), m(Ye, "sm_mbf");
        let ct = Ye;
        const Ze = class se extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.faq_id || t.Sg(se.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
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
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new se();
            return se.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_FetchLocalizationFromCrowdIn_Request";
          }
        };
        m(Ze, "sm_m"), m(Ze, "sm_mbf");
        let tt = Ze;
        class Re extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Re();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Re();
            return Re.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_FetchLocalizationFromCrowdIn_Response";
          }
        }
        const Xe = class ne extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.faq_id || t.Sg(ne.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
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
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ne();
            return ne.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_GetCrowdInMetadata_Request";
          }
        };
        m(Xe, "sm_m"), m(Xe, "sm_mbf");
        let rt = Xe;
        const ke = class le extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.crowdin_project_id || t.Sg(le.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
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
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new le();
            return le.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_GetCrowdInMetadata_Response";
          }
        };
        m(ke, "sm_m"), m(ke, "sm_mbf");
        let dt = ke;
        var et;
        ((A) => {
          function e(y, M, S) {
            return y.SendMsg("ClanFAQS.Create#1", (0, h.I8)(Ue, M, S), ze, {
              ePrivilege: 1,
            });
          }
          A.Create = e;
          function r(y, M, S) {
            return y.SendMsg("ClanFAQS.Delete#1", (0, h.I8)(Me, M, S), Be, {
              ePrivilege: 1,
            });
          }
          A.Delete = r;
          function c(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, h.I8)(b, M, S),
              v,
              { ePrivilege: 1 },
            );
          }
          A.UpdateInternalName = c;
          function ft(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.UpdateJsonData#1",
              (0, h.I8)(Se, M, S),
              me,
              { ePrivilege: 1 },
            );
          }
          A.UpdateJsonData = ft;
          function gt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.SetVisibility#1",
              (0, h.I8)(de, M, S),
              R,
              { ePrivilege: 1 },
            );
          }
          A.SetVisibility = gt;
          function Bt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.UpdateDraft#1",
              (0, h.I8)(Ie, M, S),
              Ge,
              { ePrivilege: 1 },
            );
          }
          A.UpdateDraft = Bt;
          function bt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.PublishDraft#1",
              (0, h.I8)(Pe, M, S),
              Ee,
              { ePrivilege: 1 },
            );
          }
          A.PublishDraft = bt;
          function pt(y, M, S) {
            return y.SendMsg("ClanFAQS.PreviewDraft#1", (0, h.I8)(i, M, S), n, {
              ePrivilege: 1,
            });
          }
          A.PreviewDraft = pt;
          function yt(y, M, S) {
            return y.SendMsg("ClanFAQS.GetFAQ#1", (0, h.I8)(u, M, S), f, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          A.GetFAQ = yt;
          function Mt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetFAQVersion#1",
              (0, h.I8)(Q, M, S),
              fe,
              { ePrivilege: 1 },
            );
          }
          A.GetFAQVersion = Mt;
          function St(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetAllDrafts#1",
              (0, h.I8)(_e, M, S),
              it,
              { ePrivilege: 1 },
            );
          }
          A.GetAllDrafts = St;
          function wt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, h.I8)(at, M, S),
              st,
              { ePrivilege: 1 },
            );
          }
          A.GetAllFAQsForClan = wt;
          function ht(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, h.I8)(nt, M, S),
              lt,
              { ePrivilege: 1 },
            );
          }
          A.GetAllLatestVersionPublishedFAQS = ht;
          function Ft(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, h.I8)(ot, M, S),
              Fe,
              { ePrivilege: 1 },
            );
          }
          A.CheckFAQPermissions = Ft;
          function Rt(y, M, S) {
            return y.SendMsg("ClanFAQS.SearchFAQs#1", (0, h.I8)(mt, M, S), ut, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          A.SearchFAQs = Rt;
          function Ct(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.FetchLocalizationFromCrowdIn#1",
              (0, h.I8)(tt, M, S),
              Re,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          A.FetchLocalizationFromCrowdIn = Ct;
          function zt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetCrowdInMetadata#1",
              (0, h.I8)(rt, M, S),
              dt,
              { ePrivilege: 5 },
            );
          }
          A.GetCrowdInMetadata = zt;
        })(et || (et = {}));
      },
      71462: (De, je, B) => {
        "use strict";
        B.d(je, { u: () => ze });
        var o = B(7850),
          s = B(90626),
          t = B(32093),
          h = B(39239),
          ye = B(13465),
          F = B(36707),
          m = B(3166),
          ce = B(96232),
          ge = B(7487),
          be = B(70187),
          ve = B(26763),
          oe = B(16516),
          p = B.n(oe),
          Ce = B(43597),
          Ue = B(29630);
        const Qe = new Map([
            ...Array.from(be.W4.entries()),
            ...Array.from(be.N2.entries()),
            ["section", { Constructor: we, autocloses: !1 }],
            ["img", { Constructor: Me, autocloses: !1 }],
            ["exclude_realm", { Constructor: Be, autocloses: !1 }],
          ]),
          ze = (z) => {
            const { text: b, bShowErrorInfo: v, version: pe, language: Se } = z,
              me = s.useCallback(
                (de) =>
                  new ve.gL(
                    new ve.pH(
                      new ge.OJ(new ge.R8()),
                      de,
                      [
                        {
                          urlRegExp: /youtu.be|youtube.com/i,
                          fnBBComponent: Ce.j6,
                        },
                      ],
                      {},
                    ),
                    de,
                  ),
                [],
              ),
              C = s.useMemo(
                () => new ce.B(Qe, me, Se != null ? Se : m.TS.LANGUAGE),
                [me, Se],
              );
            return (0, o.jsx)("div", {
              className: p().FAQContainer,
              children: C.ParseBBCode(b, { showErrorInfo: v, version: pe }),
            });
          };
        function we(z) {
          let b = (0, be.j$)(z.args, "id");
          b &&
            typeof b == "string" &&
            b.length > 0 &&
            b[0] === "#" &&
            (b = b.substring(1));
          const v = (0, be.j$)(z.args, "style"),
            pe = (0, F.A)(
              p().Section,
              v == "note" && p().Note,
              v == "important" && p().Important,
              v == "warning" && p().Warning,
            );
          return (0, o.jsx)("div", {
            id: b || void 0,
            className: pe,
            children: z.children,
          });
        }
        function Me(z) {
          var b, v, pe;
          const { showErrorInfo: Se, version: me } = z.context;
          let C =
            (b = z == null ? void 0 : z.children) == null
              ? void 0
              : b.toString();
          (C == null || C == null || C.length == 0) &&
            (C = (v = z == null ? void 0 : z.args) == null ? void 0 : v[""]);
          const de =
              (pe = z == null ? void 0 : z.args) == null ? void 0 : pe.alt,
            R = (0, Ue.z5)(C, z.language, Number.parseInt(me));
          return R == null
            ? null
            : typeof R == "string"
              ? ((C = R),
                Se
                  ? (0, o.jsx)(h.i, {
                      className: p().FAQImage,
                      src: C,
                      alt: de,
                    })
                  : ((C = C.replace("http://", "https://")),
                    (0, o.jsx)("img", {
                      className: p().FAQImage,
                      src: C,
                      alt: de,
                    })))
              : (0, o.jsx)(ye.c, {
                  className: p().FAQImage,
                  rgSources: R,
                  alt: de,
                });
        }
        function Be(z) {
          const b = (0, be.j$)(z.args);
          return (b == "global" && m.TS.EREALM == t.TU.k_ESteamRealmGlobal) ||
            (b == "china" && (0, m.Y2)())
            ? null
            : (0, o.jsx)(o.Fragment, { children: z.children });
        }
      },
      90395: (De, je, B) => {
        "use strict";
        B.d(je, {
          pN: () => R,
          Wj: () => qe,
          CJ: () => Ie,
          z5: () => We,
          cf: () => Oe,
          g5: () => Pe,
          W: () => Ee,
          Kv: () => Ge,
        });
        var o = B(41735),
          s = B.n(o),
          t = B(38506),
          h = B(14947),
          ye = B(90626),
          F = B(72604),
          m = B(99412),
          ce = B(35038),
          ge = B(32093),
          be = B(71742),
          ve = B(27066),
          oe = B(34592),
          p = B(3166),
          Ce = Object.defineProperty,
          Ue = Object.getOwnPropertyDescriptor,
          Qe = (g, i, a) =>
            i in g
              ? Ce(g, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (g[i] = a),
          ze = (g, i, a, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Ue(i, a) : i, u = g.length - 1, d;
              u >= 0;
              u--
            )
              (d = g[u]) && (l = (n ? d(i, a, l) : d(l)) || l);
            return n && l && Ce(i, a, l), l;
          },
          we = (g, i, a) => Qe(g, typeof i != "symbol" ? i + "" : i, a);
        class Me {
          constructor(i, a) {
            we(this, "m_summary"),
              we(this, "m_mapStoredDrafts"),
              we(this, "m_mapLocalUpdates", new Map()),
              (0, h.Gn)(this),
              (this.m_summary = i),
              (this.m_mapStoredDrafts = a),
              (this.m_mapLocalUpdates = new Map());
            for (let n = m.Bhc; n < m.bP9; n++)
              this.m_mapLocalUpdates.set(n, {});
          }
          BNeedsSaving(i) {
            if (i !== void 0) {
              const a = this.m_mapLocalUpdates.get(i);
              return !!a.strTitle || !!a.strContent;
            }
            return Array.from(this.m_mapLocalUpdates.values()).some(
              (a) => !!a.strTitle || !!a.strContent,
            );
          }
          async SaveDrafts() {
            var i, a, n, l;
            (0, be.wT)(
              !!((i = this.m_summary) != null && i.faq_id),
              "Attempting to save when we lack a FaqID in the summary object",
            );
            let u = F.R,
              d = new Array();
            for (let f = m.Bhc; f < m.bP9; ++f)
              if (
                (this.m_mapLocalUpdates.get(f).strTitle &&
                  this.m_mapLocalUpdates.get(f).strTitle !==
                    ((a = this.m_mapStoredDrafts.get(f)) == null
                      ? void 0
                      : a.title)) ||
                (this.m_mapLocalUpdates.get(f).strContent &&
                  this.m_mapLocalUpdates.get(f).strContent !==
                    ((n = this.m_mapStoredDrafts.get(f)) == null
                      ? void 0
                      : n.content))
              ) {
                const w = this.GetDraftTitle(f),
                  Q = this.GetDraftContent(f),
                  ue = R.Get().UpdateDraft(
                    (l = this.m_summary) == null ? void 0 : l.faq_id,
                    f,
                    w,
                    Q,
                  );
                ue
                  .then((fe) => {
                    fe.eResult == F.R
                      ? (0, h.h5)(() => {
                          this.m_mapStoredDrafts.has(f) ||
                            this.m_mapStoredDrafts.set(f, {}),
                            (this.m_mapStoredDrafts.get(f).title = w),
                            (this.m_mapStoredDrafts.get(f).content = Q),
                            (this.m_mapStoredDrafts.get(f).timestamp =
                              fe.rtUpdateTime),
                            (this.m_mapStoredDrafts.get(f).author_account_id =
                              p.iA.accountid.toString()),
                            (this.m_mapLocalUpdates.get(f).strTitle = null),
                            (this.m_mapLocalUpdates.get(f).strContent = null);
                          let he = !1;
                          this.m_summary.per_language_info.forEach((_e) => {
                            f == _e.language &&
                              ((he = !0),
                              (_e.last_update_timestamp = Math.max(
                                _e.last_update_timestamp,
                                fe.rtUpdateTime,
                              )));
                          }),
                            he ||
                              this.m_summary.per_language_info.push({
                                language: f,
                                last_update_timestamp: fe.rtUpdateTime,
                              });
                        })
                      : u == F.R &&
                        (console.error(
                          "FAQModel.SaveDraft: Response not ok " + fe.eResult,
                          fe,
                        ),
                        (u = fe.eResult));
                  })
                  .catch((fe) => {
                    console.error(
                      "FAQModel.SaveDrafts: Hit error " +
                        (0, oe.H)(fe).strErrorMsg,
                    ),
                      u == F.R && (u = F.zi);
                  }),
                  d.push(ue);
              }
            return await Promise.all(d), u;
          }
          GetFAQInternalName() {
            var i;
            return (i = this.m_summary) == null ? void 0 : i.internal_name;
          }
          GetDraftTitle(i) {
            var a;
            return this.m_mapLocalUpdates.get(i).strTitle !== null &&
              this.m_mapLocalUpdates.get(i).strTitle !== void 0
              ? this.m_mapLocalUpdates.get(i).strTitle
              : (a = this.m_mapStoredDrafts.get(i)) == null
                ? void 0
                : a.title;
          }
          GetDraftContent(i) {
            var a;
            return this.m_mapLocalUpdates.get(i).strContent !== null &&
              this.m_mapLocalUpdates.get(i).strContent !== void 0
              ? this.m_mapLocalUpdates.get(i).strContent
              : (a = this.m_mapStoredDrafts.get(i)) == null
                ? void 0
                : a.content;
          }
          GetDraftTitleWithFallback(i, a = ge.TU.k_ESteamRealmGlobal) {
            var n, l, u, d, f, w;
            const Q = a == ge.TU.k_ESteamRealmChina ? m.NFp : m.Bhc;
            return (w =
              (f =
                (u =
                  (n = this.m_mapLocalUpdates.get(i).strTitle) != null
                    ? n
                    : this.m_mapLocalUpdates.get(Q).strTitle) != null
                  ? u
                  : (l = this.m_mapStoredDrafts.get(i)) == null
                    ? void 0
                    : l.title) != null
                ? f
                : (d = this.m_mapStoredDrafts.get(Q)) == null
                  ? void 0
                  : d.title) != null
              ? w
              : "";
          }
          GetDraftContentWithFallback(i, a = ge.TU.k_ESteamRealmGlobal) {
            var n, l, u, d, f, w;
            const Q = a == ge.TU.k_ESteamRealmChina ? m.NFp : m.Bhc;
            return (w =
              (f =
                (u =
                  (n = this.m_mapLocalUpdates.get(i).strContent) != null
                    ? n
                    : this.m_mapLocalUpdates.get(Q).strContent) != null
                  ? u
                  : (l = this.m_mapStoredDrafts.get(i)) == null
                    ? void 0
                    : l.content) != null
                ? f
                : (d = this.m_mapStoredDrafts.get(Q)) == null
                  ? void 0
                  : d.content) != null
              ? w
              : "";
          }
          GetLastSavedDraftVersion(i) {
            return this.m_mapStoredDrafts.get(i);
          }
          BHasSomeTextForLanguage(i) {
            return !!(this.GetDraftContent(i) || this.GetDraftTitle(i));
          }
          SetDraftTitle(i, a) {
            var n;
            a ===
            ((n = this.m_mapStoredDrafts.get(i)) == null ? void 0 : n.title)
              ? (this.m_mapLocalUpdates.get(i).strTitle = null)
              : (this.m_mapLocalUpdates.get(i).strTitle = a);
          }
          SetDraftContent(i, a) {
            var n;
            a ===
            ((n = this.m_mapStoredDrafts.get(i)) == null ? void 0 : n.content)
              ? (this.m_mapLocalUpdates.get(i).strContent = null)
              : (this.m_mapLocalUpdates.get(i).strContent = a);
          }
          GetIncludedRealmList() {
            const i = new Array();
            return (
              this.m_summary.visible_in_global_realm &&
                i.push(ge.TU.k_ESteamRealmGlobal),
              this.m_summary.visible_in_china_realm &&
                i.push(ge.TU.k_ESteamRealmChina),
              i.length == 0 && i.push(ge.TU.k_ESteamRealmGlobal),
              (0, be.wT)(
                i.length > 0,
                `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
              ),
              i
            );
          }
          BHasPublished() {
            return !!this.m_summary.per_language_info.some(
              (i) => !!i.last_publish_timestamp,
            );
          }
          GetLastTimeLanguageUpdated(i) {
            var a, n;
            return (n =
              (a = this.GetLastSavedDraftVersion(i)) == null
                ? void 0
                : a.timestamp) != null
              ? n
              : 0;
          }
          GetFAQID() {
            return this.m_summary.faq_id;
          }
          GetSummary() {
            return this.m_summary;
          }
          BLocalizeDraft() {
            var i;
            return this.m_summary.json_data.length === 0
              ? !1
              : (i = JSON.parse(this.m_summary.json_data).localizeDraft) != null
                ? i
                : !1;
          }
          BPushToCrowdIn() {
            var i;
            return this.m_summary.json_data.length === 0
              ? !1
              : (i = JSON.parse(this.m_summary.json_data).pushToCrowdIn) != null
                ? i
                : !1;
          }
          GetJsonData() {
            return this.m_summary.json_data;
          }
          async UpdateJsonData(i) {
            const a = await R.Get().UpdateJsonData(this.GetFAQID(), i);
            return (
              a === F.R && (this.m_summary.json_data = JSON.stringify(i)), a
            );
          }
        }
        ze([h.sH], Me.prototype, "m_summary", 2),
          ze([h.sH], Me.prototype, "m_mapLocalUpdates", 2),
          ze([ve.o], Me.prototype, "BHasSomeTextForLanguage", 1),
          ze([ve.o], Me.prototype, "GetLastTimeLanguageUpdated", 1);
        var Be = B(77008),
          z = B(60298),
          b = B(74916),
          v = Object.defineProperty,
          pe = Object.getOwnPropertyDescriptor,
          Se = (g, i, a) =>
            i in g
              ? v(g, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (g[i] = a),
          me = (g, i, a, n) => {
            for (
              var l = n > 1 ? void 0 : n ? pe(i, a) : i, u = g.length - 1, d;
              u >= 0;
              u--
            )
              (d = g[u]) && (l = (n ? d(i, a, l) : d(l)) || l);
            return n && l && v(i, a, l), l;
          },
          C = (g, i, a) => Se(g, typeof i != "symbol" ? i + "" : i, a);
        const de = class Ae {
          constructor() {
            C(this, "m_mapFAQSummaries", new Map()),
              C(this, "m_mapFAQPublishedContent", new Map()),
              C(this, "m_mapFAQDrafts", new Map()),
              C(this, "m_bHasFAQEdit", !1),
              C(this, "m_steamInterface", null),
              (0, h.Gn)(this),
              p.TS.IN_STEAMUI ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
          }
          static Get() {
            return (
              Ae.s_Singleton || (Ae.s_Singleton = new Ae()), Ae.s_Singleton
            );
          }
          static Init(i) {
            Ae.Get().m_steamInterface = i;
          }
          SetUpWebAPIInterface() {
            const i = (0, p.Tc)("faqstore", "application_config"),
              a = i == null ? void 0 : i.webapi_token;
            this.m_steamInterface = (0, z.C)(new Be.D(p.TS.WEBAPI_BASE_URL, a));
          }
          ReadInitialPayload() {
            const i = (0, p.Tc)("faqstore", "application_config");
            if (this.BIsConfigValid(i)) {
              if (i.faqs)
                for (const a in i.faqs) {
                  const n = i.faqs[a];
                  (n == null ? void 0 : n.faq_id) != a ||
                    (n == null ? void 0 : n.language) === void 0 ||
                    (this.m_mapFAQPublishedContent.has(a) ||
                      this.m_mapFAQPublishedContent.set(a, new Map()),
                    this.m_mapFAQPublishedContent.get(a).set(n.language, n));
                }
              if (i.alldrafts)
                for (const a in i.alldrafts) {
                  const n = i.alldrafts[a];
                  if (!(n != null && n.summary) || !n.draft) continue;
                  this.m_mapFAQSummaries.set(a, n.summary);
                  const l = new Map();
                  for (const u of n.draft) l.set(u.language, u);
                  this.m_mapFAQDrafts.set(
                    a,
                    new Me(this.m_mapFAQSummaries.get(a), l),
                  );
                }
              if (i.allfaqs)
                for (const a of i.allfaqs)
                  a.faq_id &&
                    (this.m_mapFAQSummaries.has(a.faq_id) ||
                      this.m_mapFAQSummaries.set(a.faq_id, a));
              this.m_bHasFAQEdit = !!i.has_faq_edit;
            }
          }
          BIsConfigValid(i) {
            const a = i;
            return !!(
              (a && a.faqs && typeof a.faqs == "object") ||
              (a.alldrafts && typeof a.alldrafts == "object") ||
              (a.allfaqs && Array.isArray(a.allfaqs))
            );
          }
          async CreateFAQ(i) {
            const a = ce.w.Init(b.q3);
            a.Body().set_steamid(p.UF.CLANSTEAMID),
              a.Body().set_internal_name(i);
            let n = F.zi,
              l;
            try {
              const u = await b.RD.Create(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (((n = u.GetEResult()), n == F.R)) {
                l = u.Body().faq_id();
                const d = { faq_id: l, internal_name: i };
                this.m_mapFAQSummaries.set(l, d);
              } else
                console.error("FAQStore.CreateFAQ: Create request failed:", n);
            } catch (u) {
              const d = (0, oe.H)(u);
              console.error(
                "FAQStore.CreateFAQ: caught error " + d.strErrorMsg,
                d,
              );
            }
            return { eResult: n, strFaqId: l };
          }
          async UpdateDraft(i, a, n, l) {
            const u = ce.w.Init(b.QE);
            u.Body().set_steamid(p.UF.CLANSTEAMID),
              u.Body().set_faq_id(i),
              u.Body().set_language(a),
              u.Body().set_content(l),
              u.Body().set_title(n);
            let d = F.zi,
              f = 0;
            try {
              const w = await b.RD.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                u,
              );
              (d = w.GetEResult()),
                d != F.R
                  ? console.error("FAQStore.UpdateDraft request failed:", d)
                  : (f = w.Body().last_update_timestamp());
            } catch (w) {
              const Q = (0, oe.H)(w);
              console.error(
                "FAQStore.UpdateDraft: caught error " + Q.strErrorMsg,
                Q,
              );
            }
            return { eResult: d, rtUpdateTime: f };
          }
          async UpdateJsonData(i, a) {
            const n = JSON.stringify(a),
              l = ce.w.Init(b.vn);
            l.Body().set_steamid(p.UF.CLANSTEAMID),
              l.Body().set_faq_id(i),
              l.Body().set_json_data(n);
            let u = F.zi;
            try {
              (u = (
                await b.RD.UpdateJsonData(
                  this.m_steamInterface.GetServiceTransport(),
                  l,
                )
              ).GetEResult()),
                u != F.R
                  ? console.error("FAQStore.UpdateJsonData request failed:", u)
                  : (this.m_mapFAQSummaries.get(i).json_data = n);
            } catch (d) {
              const f = (0, oe.H)(d);
              console.error(
                "FAQStore.UpdateJsonData: caught error " + f.strErrorMsg,
                f,
              );
            }
            return u;
          }
          async GetFAQVersion(i, a, n) {
            const l = ce.w.Init(b.k_);
            l.Body().set_steamid(p.UF.CLANSTEAMID),
              l.Body().set_faq_id(i),
              l.Body().set_version(a),
              l.Body().set_language(n);
            try {
              const u = await b.RD.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  l,
                ),
                d = u.GetEResult();
              if (d == F.R) return u.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", d);
            } catch (u) {
              const d = (0, oe.H)(u);
              console.error(
                "FAQStore.GetFAQVersion: caught error " + d.strErrorMsg,
                d,
              );
            }
            return null;
          }
          async DeleteFAQ(i) {
            const a = ce.w.Init(b.b5);
            a.Body().set_steamid(p.UF.CLANSTEAMID), a.Body().set_faq_id(i);
            let n = F.zi;
            try {
              (n = (
                await b.RD.Delete(
                  this.m_steamInterface.GetServiceTransport(),
                  a,
                )
              ).GetEResult()),
                n != F.R
                  ? console.error("FAQStore.DeleteFAQ request failed:", n)
                  : (this.m_mapFAQDrafts.delete(i),
                    this.m_mapFAQPublishedContent.delete(i),
                    this.m_mapFAQSummaries.delete(i));
            } catch (l) {
              const u = (0, oe.H)(l);
              console.error(
                "FAQStore.DeleteFAQ: caught error " + u.strErrorMsg,
                u,
              );
            }
            return n;
          }
          GetFAQPublishedContent(i, a) {
            const n = this.m_mapFAQPublishedContent.get(i);
            if (!n) return null;
            let l = n.get(a);
            return (
              !l &&
                Ae.sm_mapFallbackLanguages.has(a) &&
                (l = n.get(Ae.sm_mapFallbackLanguages.get(a))),
              !l && a != m.Bhc && !(0, p.Y2)() && (l = n.get(m.Bhc)),
              l
            );
          }
          GetFAQDraftContent(i) {
            return this.m_mapFAQDrafts.get(i);
          }
          GetAllFAQSummaries() {
            return Array.from(this.m_mapFAQSummaries.values());
          }
          GetFAQArticleSummary(i) {
            return this.m_mapFAQSummaries.get(i) || {};
          }
          async LoadFAQDraftContent(i) {
            if (this.m_mapFAQDrafts.has(i)) return this.m_mapFAQDrafts.get(i);
            const a = ce.w.Init(b.nR);
            a.Body().set_steamid(p.UF.CLANSTEAMID), a.Body().set_faq_id(i);
            let n = F.zi;
            try {
              const l = await b.RD.GetAllDrafts(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (((n = l.GetEResult()), n != F.R))
                return (
                  console.error(
                    "FaqStore.LoadFAQDraftContent request failed:",
                    n,
                  ),
                  null
                );
              {
                const u = l.Body().summary().toObject();
                this.m_mapFAQSummaries.set(i, u);
                const d = new Map();
                l.Body()
                  .draft()
                  .forEach((w) => d.set(w.language(), w.toObject()));
                const f = new Me(this.m_mapFAQSummaries.get(i), d);
                return this.m_mapFAQDrafts.set(i, f), f;
              }
            } catch (l) {
              const u = (0, oe.H)(l);
              console.error(
                "FaqStore.LoadFAQDraftContent: exception " + u.strErrorMsg,
                u,
              );
            }
            return null;
          }
          async UpdateVisibility(i, a, n) {
            const l = ce.w.Init(b.CP);
            l.Body().set_steamid(p.UF.CLANSTEAMID),
              l.Body().set_faq_id(i),
              l.Body().set_visible_in_global_realm(a),
              l.Body().set_visible_in_china_realm(n);
            let u = F.zi;
            try {
              if (
                ((u = (
                  await b.RD.SetVisibility(
                    this.m_steamInterface.GetServiceTransport(),
                    l,
                  )
                ).GetEResult()),
                u === F.R)
              ) {
                const f = this.m_mapFAQSummaries.get(i);
                f &&
                  ((f.visible_in_global_realm = a),
                  (f.visible_in_china_realm = n),
                  this.m_mapFAQSummaries.set(i, f));
              } else console.error("FaqStore.UpdateVisibility: Failed " + u);
            } catch (d) {
              const f = (0, oe.H)(d);
              console.error(
                "FaqStore.UpdateVisibility: exception " + f.strErrorMsg,
                f,
              );
            }
            return u;
          }
          async PublishDraftByLanguage(i, a) {
            if (!a || a.length == 0) return F.R;
            const n = ce.w.Init(b.K);
            n.Body().set_steamid(p.UF.CLANSTEAMID),
              n.Body().set_faq_id(i),
              a.forEach((u) => n.Body().add_language(u));
            let l = F.zi;
            try {
              const u = await b.RD.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                n,
              );
              if (((l = u.GetEResult()), l === F.R)) {
                const d = this.m_mapFAQSummaries.get(i);
                d &&
                  (0, h.h5)(() => {
                    this.m_mapFAQPublishedContent.has(i) ||
                      this.m_mapFAQPublishedContent.set(i, new Map()),
                      d.per_language_info.forEach((f) => {
                        var w;
                        const Q = f.language;
                        if (a.indexOf(Q) >= 0) {
                          f.last_publish_timestamp = Math.max(
                            f.last_publish_timestamp,
                            u.Body().last_publish_timestamp(),
                          );
                          const ue =
                            (w = this.m_mapFAQDrafts.get(i)) == null
                              ? void 0
                              : w.GetLastSavedDraftVersion(Q);
                          this.m_mapFAQPublishedContent.get(i).set(Q, ue);
                        }
                      });
                  });
              } else
                console.error("FaqStore.PublishDraftByLanguage: Failed " + l);
            } catch (u) {
              const d = (0, oe.H)(u);
              console.error(
                "FaqStore.PublishDraftByLanguage: exception " + d.strErrorMsg,
                d,
              );
            }
            return l;
          }
          async UpdateInternalName(i, a) {
            const n = ce.w.Init(b.hU);
            n.Body().set_steamid(p.UF.CLANSTEAMID),
              n.Body().set_faq_id(i),
              n.Body().set_internal_name(a);
            let l = F.zi;
            try {
              (l = (
                await b.RD.UpdateInternalName(
                  this.m_steamInterface.GetServiceTransport(),
                  n,
                )
              ).GetEResult()),
                l === F.R
                  ? (0, h.h5)(() => {
                      var d, f, w;
                      (d = this.m_mapFAQSummaries.get(i)) != null &&
                        d.internal_name &&
                        (this.m_mapFAQSummaries.get(i).internal_name = a),
                        (w =
                          (f = this.m_mapFAQDrafts.get(i)) == null
                            ? void 0
                            : f.GetSummary()) != null &&
                          w.internal_name &&
                          (this.m_mapFAQDrafts
                            .get(i)
                            .GetSummary().internal_name = a);
                    })
                  : console.error("FaqStore.UpdateInternalName: Failed " + l);
            } catch (u) {
              const d = (0, oe.H)(u);
              console.error(
                "FaqStore.UpdateInternalName: exception " + d.strErrorMsg,
                d,
              );
            }
            return l;
          }
          GetLoadedDraftObjs() {
            return Array.from(this.m_mapFAQDrafts.values());
          }
          RemoveAllDirtyDrafts() {
            var i, a;
            const n =
              (a =
                (i = this.GetLoadedDraftObjs()) == null
                  ? void 0
                  : i.filter((l) => l.BNeedsSaving())) == null
                ? void 0
                : a.map((l) => l.GetFAQID());
            n == null || n.forEach((l) => this.m_mapFAQDrafts.delete(l));
          }
          BHasFAQEdit() {
            return this.m_bHasFAQEdit;
          }
          async ExportEnglishDraftToCrowdin(i) {
            const a =
              p.TS.COMMUNITY_BASE_URL +
              "faqs/" +
              p.UF.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              qe(i);
            await s().get(a);
          }
          async ImportNonEnglishDraftsFromCrowdin(i, a, n) {
            var l, u;
            const d =
                p.TS.COMMUNITY_BASE_URL +
                "faqs/" +
                p.UF.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                qe(i),
              f = new FormData();
            f.append("sessionid", (0, p.KC)()),
              f.append("languages", a.join(","));
            let w = null;
            try {
              const ue = await s().post(d, f, {
                withCredentials: !0,
                cancelToken: n == null ? void 0 : n.token,
              });
              if (
                (ue == null ? void 0 : ue.status) == 200 &&
                ((l = ue.data) == null ? void 0 : l.success) == F.R
              ) {
                const fe = ue.data.updated,
                  he = (u = fe == null ? void 0 : fe[i]) != null ? u : [];
                return (
                  he.length > 0 &&
                    (this.m_mapFAQSummaries.has(i) ||
                      this.m_mapFAQDrafts.has(i)) &&
                    (this.m_mapFAQDrafts.delete(i),
                    await this.LoadFAQDraftContent(i)),
                  he
                );
              }
              w = { response: ue };
            } catch (ue) {
              w = ue;
            }
            const Q = (0, oe.H)(w);
            return (
              console.error(
                "Could not import from crowdin",
                i,
                Q.strErrorMsg,
                Q,
              ),
              []
            );
          }
          BHasLiveEnglishVersion(i) {
            return this.m_mapFAQSummaries
              .get(i)
              .per_language_info.some(
                (n) => n.language == m.Bhc && n.last_publish_timestamp > 0,
              );
          }
          GetNonEnglishDraftsToPublish(i) {
            return this.m_mapFAQSummaries
              .get(i)
              .per_language_info.filter((l) => {
                var u;
                return (
                  l.language != m.Bhc &&
                  l.last_update_timestamp >
                    ((u = l.last_publish_timestamp) != null ? u : 0)
                );
              })
              .map((l) => l.language);
          }
        };
        C(de, "s_Singleton"),
          C(
            de,
            "sm_mapFallbackLanguages",
            new Map([
              [m.HkE, m.FHN],
              [m.FHN, m.HkE],
              [m.ZLm, m.NFp],
            ]),
          ),
          me([h.sH], de.prototype, "m_mapFAQSummaries", 2),
          me([h.XI], de.prototype, "RemoveAllDirtyDrafts", 1);
        let R = de;
        const Te = /^[0-9a-fA-F]+$/;
        function Ie(g) {
          const i = g == null ? void 0 : g.replace(/-/g, "");
          return (i == null ? void 0 : i.length) != 16 || !Te.test(i)
            ? null
            : t.A.fromString(i, !0, 16).toString();
        }
        function qe(g) {
          const a = (
            "0000000000000000" + t.A.fromString(g, !0, 10).toString(16)
          )
            .slice(-16)
            .toUpperCase();
          return `${a.slice(0, 4)}-${a.slice(4, 8)}-${a.slice(8, 12)}-${a.slice(12, 16)}`;
        }
        function Ge(g, i) {
          return [g && R.Get().GetFAQPublishedContent(g, i), !0];
        }
        function We(g) {
          const [i, a] = ye.useState(R.Get().GetFAQDraftContent(g)),
            [n, l] = ye.useState(!!i);
          return (
            (0, ye.useEffect)(() => {
              R.Get()
                .LoadFAQDraftContent(g)
                .then((u) => a(u))
                .finally(() => l(!0));
            }, [g]),
            [i, n]
          );
        }
        function Pe(g) {
          return [R.Get().GetFAQArticleSummary(g), !0];
        }
        function Oe() {
          const g = R.Get().GetAllFAQSummaries();
          return ye.useRef([g, !0]).current;
        }
        function Ee(g, i, a) {
          const [n, l] = ye.useState(null),
            [u, d] = ye.useState(!1);
          return (
            (0, ye.useEffect)(() => {
              R.Get().BHasFAQEdit() &&
                R.Get()
                  .GetFAQVersion(g, i, a)
                  .then((f) => l(f))
                  .finally(() => d(!0));
            }, [g, i, a]),
            [n, u]
          );
        }
      },
      16516: (De) => {
        De.exports = {
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

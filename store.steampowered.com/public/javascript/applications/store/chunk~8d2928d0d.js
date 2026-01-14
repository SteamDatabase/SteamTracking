/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3615],
  {
    60092: (e, t, r) => {
      r.d(t, { g: () => Pt });
      var i,
        n,
        a,
        s = r(41735),
        o = r.n(s),
        l = r(65946),
        m = r(90626),
        c = r(89128),
        u = r(75933),
        d = r(39733),
        g = r(81393),
        B = r(56545),
        _ = r(80613),
        b = r.n(_),
        p = r(89068);
      class y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.promotion_id || p.Sg(y.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_readonly_jsondata: {
                    n: 10,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_writable_jsondata: {
                    n: 11,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  assets_readonly_jsondata: {
                    n: 12,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  assets_writable_jsondata: {
                    n: 13,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  last_update_time: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = p.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class M extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.plan || p.Sg(M.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m || (M.sm_m = { proto: M, fields: { plan: { n: 1, c: y } } }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = p.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class w extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.promotion_id || p.Sg(w.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = p.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.plan || p.Sg(z.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  plan: { n: 1, c: y },
                  promotion_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = p.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class f extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class S extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.promotion_id || p.Sg(S.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = p.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class R extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.plan || p.Sg(R.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m || (R.sm_m = { proto: R, fields: { plan: { n: 1, c: y } } }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = p.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class h extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class v extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.plan || p.Sg(v.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { plan: { n: 1, c: y, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = p.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class F extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.oldest_rtime || p.Sg(F.M()),
            _.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  oldest_rtime: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  newest_rtime: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  promotion_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = p.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
        }
      }
      class j extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.plans || p.Sg(j.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { plans: { n: 1, c: y, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = p.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
        }
      }
      class P extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.type || p.Sg(P.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  type: { n: 1, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  promotion_planid: {
                    n: 3,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = p.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromoAssociation";
        }
      }
      class W extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.requested || p.Sg(W.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { requested: { n: 1, c: P, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = p.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Request";
        }
      }
      class q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.matching || p.Sg(q.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  matching: { n: 1, c: P, r: !0, q: !0 },
                  plans: { n: 2, c: y, r: !0, q: !0 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = p.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Response";
        }
      }
      class T extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.rtime || p.Sg(T.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  rtime: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = p.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class O extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.plans || p.Sg(O.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  plans: { n: 1, c: y, r: !0, q: !0 },
                  deleted_plan_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readFixed64String,
                    pbr: p.qM.readPackedFixed64String,
                    bw: p.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = p.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class I extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.promotion_id || p.Sg(I.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = p.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class C extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (b().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class U extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.token || p.Sg(U.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  token: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = p.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class E extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.plan || p.Sg(E.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { plan: { n: 1, c: y, r: !0, q: !0 } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = p.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class A extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appids || p.Sg(A.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  exclude_sales: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  exclude_direct_featuring: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = p.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class x extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.plans || p.Sg(x.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  plans: { n: 1, c: y, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: D, r: !0, q: !0 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = p.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class D extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appids || p.Sg(D.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = p.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class N extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.partnerid || p.Sg(N.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  partnerid: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  start_date: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  end_date: { n: 6, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  show_hidden: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = p.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Request";
        }
      }
      class G extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.plans || p.Sg(G.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { plans: { n: 1, c: y, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = p.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Response";
        }
      }
      class k extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.input_access_key || p.Sg(k.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = p.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class L extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.plan || p.Sg(L.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m || (L.sm_m = { proto: L, fields: { plan: { n: 1, c: y } } }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = p.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class V extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.promotion_id || p.Sg(V.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  value: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = p.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
        }
      }
      class H extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
        }
      }
      class K extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.promotion_id || p.Sg(K.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: p.qM.readEnum,
                    bw: p.gp.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = p.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class Y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class J extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.promotion_id || p.Sg(J.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = p.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class X extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.results || p.Sg(X.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: { results: { n: 1, c: Z, r: !0, q: !0 } },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = p.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class Z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.notification_id || p.Sg(Z.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  notification_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  status: { n: 5, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  type: { n: 6, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = p.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class $ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.promotion_id || p.Sg($.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = p.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT($.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class Q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (b().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class ee extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.promotion_id || p.Sg(ee.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  add: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
                  email_address: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = p.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class te extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (b().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class re extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.clan_account_id || p.Sg(re.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  rtime_sale_start: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_sale_end: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  daily_deal_gid: {
                    n: 5,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 6,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  create_asset_request: {
                    n: 7,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  partner_id: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  advertising_appid: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = p.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Request";
        }
      }
      class ie extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.clan_account_id || p.Sg(ie.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  daily_deal_gid: {
                    n: 3,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 4,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  asset_request_gid: {
                    n: 5,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  advertising_appid: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = p.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Response";
        }
      }
      class ne extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.total_gross_sales_usdx100 || p.Sg(ne.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  total_gross_sales_usdx100: {
                    n: 1,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  total_gross_returns_usdx100: {
                    n: 2,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  total_net_tax_usdx100: {
                    n: 3,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_sales_usdx100: {
                    n: 4,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_returns_usdx100: {
                    n: 5,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_net_tax_usdx100: {
                    n: 6,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_gross_sales_usdx100: {
                    n: 7,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_gross_returns_usdx100: {
                    n: 8,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_net_tax_usdx100: {
                    n: 9,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  total_net_sales_usdx100: {
                    n: 10,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_net_sales_usdx100: {
                    n: 11,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_net_sales_usdx100: {
                    n: 12,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_units_sold: {
                    n: 13,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_units_returned: {
                    n: 14,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  gross_units_activated: {
                    n: 15,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = p.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_SummarySaleResult";
        }
      }
      class ae extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.promotionids || p.Sg(ae.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  promotionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint64String,
                    pbr: p.qM.readPackedUint64String,
                    bw: p.gp.writeRepeatedUint64String,
                  },
                  partnerid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = p.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
        }
      }
      class se extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.sales || p.Sg(se.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  sales: { n: 1, c: me, r: !0, q: !0 },
                  partial_access: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = p.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
        }
      }
      class oe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.rtime_date || p.Sg(oe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  date: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  summary_sales: { n: 3, c: ne },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = p.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
        }
      }
      class le extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appid || p.Sg(le.M()),
            _.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  packageid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  secondary_product_id: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  summary_sales: { n: 4, c: ne },
                  daily_promo_sales: { n: 5, c: oe, r: !0, q: !0 },
                  package_billing_type: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = p.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
        }
      }
      class me extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.promotionid || p.Sg(me.M()),
            _.Message.initialize(this, e, 0, -1, [2, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  promotionid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  daily_promo_sales: { n: 2, c: oe, r: !0, q: !0 },
                  summary_sales: { n: 3, c: ne },
                  products: { n: 4, c: le, r: !0, q: !0 },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = p.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
        }
      }
      class ce extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.request_list || p.Sg(ce.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: { request_list: { n: 1, c: ue, r: !0, q: !0 } },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = p.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
        }
      }
      class ue extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.clan_account_id || p.Sg(ue.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = p.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
        }
      }
      class de extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.plans || p.Sg(de.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { plans: { n: 1, c: y, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = p.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
        }
      }
      class ge extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.rtstart || p.Sg(ge.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  rtstart: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  rtend: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  include_packages: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  filter_modified_sales_rank: {
                    n: 4,
                    d: !0,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = p.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
        }
      }
      class Be extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.package_details || p.Sg(Be.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  package_details: { n: 1, c: _e, r: !0, q: !0 },
                  app_details: { n: 2, c: be, r: !0, q: !0 },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = p.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
        }
      }
      class _e extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.package_id || p.Sg(_e.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  package_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_id: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  discount_percentage: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  original_price_usd: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_price_usd: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = p.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
        }
      }
      class be extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appid || p.Sg(be.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  cheapest_package_id: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  cheapest_discount_id: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  cheapest_discount_name: {
                    n: 5,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  package_original_price_usd: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discounted_price_usd: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_percentage: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 10,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  num_discounted_packages: {
                    n: 11,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  modified_sales_rank: {
                    n: 12,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = p.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
        }
      }
      class pe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.account_id || p.Sg(pe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  include_published: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = p.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
        }
      }
      class ye extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.clans || p.Sg(ye.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: { clans: { n: 1, c: we, r: !0, q: !0 } },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = p.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
        }
      }
      class Me extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.clan_account_id || p.Sg(Me.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  name: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  published: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                  start_time: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  end_time: { n: 6, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  external_sale_event_type: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = p.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
        }
      }
      class we extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.clan_account_id || p.Sg(we.M()),
            _.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  clan_name: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  is_creator_home: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  sale_pages: { n: 4, c: Me, r: !0, q: !0 },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = p.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
        }
      }
      class ze extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.partner_id || p.Sg(ze.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  partner_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = p.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
        }
      }
      class fe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.advertising_apps || p.Sg(fe.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { advertising_apps: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = p.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
        }
      }
      class Se extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.appid || p.Sg(Se.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  app_name: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  itemid: { n: 3, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = p.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
        }
      }
      class Re extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.spotlight_due_date || p.Sg(Re.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = p.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class he extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.inviteid || p.Sg(he.M()),
            _.Message.initialize(this, e, 0, -1, [16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  type: { n: 6, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  accept_account: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  deadlines: { n: 14, c: Re },
                  notify_partner: {
                    n: 15,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  cancelled: { n: 18, br: p.qM.readBool, bw: p.gp.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  require_sale_page: {
                    n: 20,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  require_sale_page_type: {
                    n: 21,
                    br: p.qM.readEnum,
                    bw: p.gp.writeEnum,
                  },
                  admin_notes: {
                    n: 22,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_notes: {
                    n: 23,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = p.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class ve extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.invite || p.Sg(ve.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  invite: { n: 1, c: he },
                  queue_email_to_send: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = p.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class Fe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.inviteid || p.Sg(Fe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = p.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class je extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.inviteid || p.Sg(je.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  packageid: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  bundleid: { n: 4, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = p.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class Pe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.invites || p.Sg(Pe.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: { invites: { n: 1, c: he, r: !0, q: !0 } },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = p.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class We extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.inviteid || p.Sg(We.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = p.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class qe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new qe();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class Te extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.inviteid || p.Sg(Te.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = p.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class Oe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.accountid || p.Sg(Oe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  accountid: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = p.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class Ie extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.targets || p.Sg(Ie.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  targets: { n: 1, c: Oe, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = p.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class Ce extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.inviteid || p.Sg(Ce.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = p.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class Ue extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.gid || p.Sg(Ue.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  gid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = p.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class Ee extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.inviteid || p.Sg(Ee.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = p.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class Ae extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ae();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      class xe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.opt_in_name || p.Sg(xe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_id: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = p.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Request";
        }
      }
      class De extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.stats || p.Sg(De.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  stats: { n: 1, c: Ne, r: !0, q: !0 },
                  appid_without_permissions: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = p.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response";
        }
      }
      class Ne extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.appid || p.Sg(Ne.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rt_start_time: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  demo_player_count: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  wishlist_count: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  player_wishlist_count: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rt_last_update_time: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = p.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, B.I8)(M, t),
            w,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, B.I8)(M, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, B.I8)(z, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, B.I8)(z, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, B.I8)(z, t),
              f,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, B.I8)(I, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, B.I8)(S, t),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, B.I8)(h, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanCompletedInDateRange = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, B.I8)(F, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByAssociationID = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, B.I8)(W, t),
              q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, B.I8)(T, t),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, B.I8)(U, t),
              E,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, B.I8)(A, t),
              x,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetAllPlansForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, B.I8)(N, t),
              G,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, B.I8)(k, t),
              L,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, B.I8)(V, t),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, B.I8)(K, t),
              Y,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, B.I8)(J, t),
              X,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, B.I8)($, t),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, B.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanSalesDaily = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, B.I8)(ae, t),
              se,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanForSalePages = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, B.I8)(ce, t),
              de,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.CreateSalePageForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, B.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUpcomingScheduledDiscounts = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, B.I8)(ge, t),
              Be,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetSalePageCandidatesForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, B.I8)(pe, t),
              ye,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAdvertisingAppsForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, B.I8)(ze, t),
              fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, B.I8)(ve, t),
              Fe,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, B.I8)(je, t),
                Pe,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, B.I8)(Ce, t),
                Ue,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, B.I8)(Ee, t),
                Ae,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, B.I8)(We, t),
                qe,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, B.I8)(Te, t),
                Ie,
                { ePrivilege: 4 },
              );
            });
        })(n || (n = {})),
        (function (e) {
          e.GetOptInDemoStats = function (e, t) {
            return e.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, B.I8)(xe, t),
              De,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(a || (a = {}));
      var Ge = r(20194),
        ke = r(72034),
        Le = r(30470),
        Ve = r(24484);
      function He(e, t) {
        const [r] = (0, m.useState)(() =>
          (function () {
            const e = (0, Ve.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            return (
              (0, g.wT)(
                e,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              e
                ? new ke.D(Le.TS.WEBAPI_BASE_URL, e).GetServiceTransport()
                : null
            );
          })(),
        );
        return (0, Ge.I)({
          queryKey: ["usePromotionPlanBySalePage", t],
          queryFn: async () => {
            const n = B.w.Init(ce),
              a = new ue();
            a.set_clan_account_id(e),
              a.set_gid_clan_event(t),
              n.Body().add_request_list(a);
            const s = await i.GetPromotionPlanForSalePages(r, n);
            if (1 != s.GetEResult())
              throw new Error(
                `Error from PromotionPlanBySalePage: ${s.GetEResult()}`,
              );
            return s
              .Body()
              .plans()
              .map((e) => e.promotion_id());
          },
          placeholderData: null,
          enabled: Boolean(r),
        }).data;
      }
      var Ke = r(60746),
        Ye = r(34824),
        Je = r(53835),
        Xe = r(84811),
        Ze = r(34629),
        $e = r(51706),
        Qe = r(61859),
        et = r(84933),
        tt = r(56330),
        rt = r.n(tt),
        it = r(22837),
        nt = r(22797),
        at = r(78327),
        st = r(68797);
      const ot = new (class {
        async DeleteForumTopic(e, t, r, i, n) {
          let a =
            at.TS.COMMUNITY_BASE_URL +
            "forum/" +
            e.GetAccountID() +
            "/" +
            t +
            "/deletetopic/";
          null != r && "" != r && (a += r + "/");
          const s = new FormData();
          s.append("sessionid", at.TS.SESSIONID), s.append("gidforumtopic", i);
          let l = await o().post(a, s, {
            withCredentials: !0,
            cancelToken: n.token,
          });
          if (1 != l.data.success) throw l.data;
          return l.data;
        }
      })();
      class lt extends m.Component {
        static m_uniqueError = 0;
        m_forumTopicGID;
        m_clanSteamID;
        m_cancelSignal = o().CancelToken.source();
        constructor(e) {
          super(e),
            (this.state = {
              dialogState: this.props.bNoConfirmationNeeded
                ? "waiting"
                : "confirmation",
              bDeleteCommentThread: !1,
            });
        }
        componentDidMount() {
          this.props.bNoConfirmationNeeded && this.OnDelete();
        }
        OnDeleteEventSuccessCallback() {
          this.props.partnerEventStore.ResetModel(),
            this.state.bDeleteCommentThread
              ? ot
                  .DeleteForumTopic(
                    this.m_clanSteamID,
                    "Event",
                    void 0,
                    this.m_forumTopicGID,
                    this.m_cancelSignal,
                  )
                  .then(this.OnDeleteForumTopicSuccessCallback)
                  .catch(this.OnDeleteForumTopicFailureCallback)
              : this.setState({ dialogState: "success" });
        }
        OnDeleteForumTopicSuccessCallback() {
          this.setState({ dialogState: "success" });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("component unmounted");
        }
        OnDeleteEventFailureCallback(e) {
          this.setState({ dialogState: "error", ...(0, st.H)(e) });
        }
        OnDeleteForumTopicFailureCallback(e) {
          this.setState({
            dialogState: "failed_thread_delete",
            ...(0, st.H)(e),
          });
        }
        SetToWaiting() {
          "waiting" != this.state.dialogState &&
            this.setState({ dialogState: "waiting" });
        }
        OnDelete() {
          const { eventModel: e, partnerEventStore: t } = this.props;
          let r = e.clanSteamID,
            i = e.GID,
            n = e.AnnouncementGID;
          (this.m_forumTopicGID = e.forumTopicGID),
            (this.m_clanSteamID = r),
            !this.props.eventModel.bOldAnnouncement &&
            i &&
            "0" != i &&
            i != it.kF
              ? (this.SetToWaiting(),
                t
                  .DeleteClanEvent(r, i)
                  .then(this.OnDeleteEventSuccessCallback)
                  .catch(this.OnDeleteEventFailureCallback))
              : this.props.eventModel.bOldAnnouncement
                ? (this.SetToWaiting(),
                  t
                    .DeleteOldAnnouncement(r, n)
                    .then(this.OnDeleteEventSuccessCallback)
                    .catch(this.OnDeleteEventFailureCallback))
                : (t.ResetModel(), this.setState({ dialogState: "success" }));
        }
        OnChangeDeleteForum() {
          this.setState({
            bDeleteCommentThread: !this.state.bDeleteCommentThread,
          });
        }
        render() {
          let e = this.props.eventModel,
            t = this.props.closeModal,
            r = "",
            i = new Array();
          switch (this.state.dialogState) {
            case "confirmation":
              let n = e.GetNameWithFallback((0, it.sf)(at.TS.LANGUAGE)),
                a = e.BIsVisibleEvent()
                  ? "#EventDisplay_AreYouSure_Visible"
                  : "#EventDisplay_AreYouSure";
              (r = (0, Qe.we)(a, n)),
                (t = this.OnDelete),
                e.BHasForumTopicGID() &&
                  i.push(
                    m.createElement(
                      "div",
                      { key: "WantToDeleteCmtThread", className: rt().Padding },
                      m.createElement("input", {
                        type: "checkbox",
                        id: "del_cmt_post",
                        name: "del_cmt_post",
                        defaultChecked: this.state.bDeleteCommentThread,
                        onChange: this.OnChangeDeleteForum,
                      }),
                      m.createElement(
                        "label",
                        { htmlFor: "del_cmt_post" },
                        (0, Qe.we)("#EventDisplay_DeleteEvent_Comment"),
                      ),
                    ),
                  );
              break;
            case "waiting":
              (r = (0, Qe.we)("#EventDisplay_DeleteEvent_InProgress")),
                i.push(m.createElement(nt.t, { key: "throbber" }));
              break;
            case "error":
              (r = (0, Qe.we)("#EventDisplay_DeleteEvent_Error")),
                i.push(
                  m.createElement(
                    "div",
                    {
                      key: "deleteerror_" + ++lt.m_uniqueError,
                      className: rt().ErrorStyles,
                    },
                    this.state.strErrorMsg,
                  ),
                );
              break;
            case "failed_thread_delete":
              (r = (0, Qe.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                i.push(
                  m.createElement(
                    "div",
                    {
                      key: "deleteerror_" + ++lt.m_uniqueError,
                      className: rt().ErrorStyles,
                    },
                    this.state.strErrorMsg,
                  ),
                ),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
              break;
            case "success":
              (r = (0, Qe.we)("#EventDisplay_DeleteEvent_Success")),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
          }
          return m.createElement(
            $e.o0,
            {
              strTitle: (0, Qe.we)("#EventDisplay_DeleteEvent"),
              strDescription: r,
              onCancel: this.props.closeModal,
              onOK: t,
              bAlertDialog: "confirmation" != this.state.dialogState,
              bOKDisabled: "waiting" == this.state.dialogState,
              bDestructiveWarning: "error" == this.state.dialogState,
            },
            i,
          );
        }
      }
      (0, Ze.Cg)([et.oI], lt.prototype, "OnDeleteEventSuccessCallback", null),
        (0, Ze.Cg)(
          [et.oI],
          lt.prototype,
          "OnDeleteForumTopicSuccessCallback",
          null,
        ),
        (0, Ze.Cg)([et.oI], lt.prototype, "OnDeleteEventFailureCallback", null),
        (0, Ze.Cg)(
          [et.oI],
          lt.prototype,
          "OnDeleteForumTopicFailureCallback",
          null,
        ),
        (0, Ze.Cg)([et.oI], lt.prototype, "SetToWaiting", null),
        (0, Ze.Cg)([et.oI], lt.prototype, "OnDelete", null),
        (0, Ze.Cg)([et.oI], lt.prototype, "OnChangeDeleteForum", null);
      var mt = r(75113),
        ct = r(96971),
        ut = r(95695),
        dt = r(738),
        gt = r(52038),
        Bt = r(56011),
        _t = r(64846),
        bt = r(14947),
        pt = r(1501),
        yt = r(35400),
        Mt = r(36735),
        wt = r(90316);
      function zt(e) {
        const { eventModel: t } = e,
          r = (0, l.q3)(() => t.jsondata.sale_sections);
        return (0, m.useMemo)(
          () =>
            r?.some(
              (e) =>
                ("quiz" == e.section_type &&
                  e.quiz?.track_with_cozy_cottage_doors) ||
                "quest" == e.section_type ||
                "rewards" == e.section_type,
            ),
          [r],
        )
          ? m.createElement(St, { ...e })
          : null;
      }
      const ft = "Answered as: ";
      function St(e) {
        const { eventModel: t } = e,
          [r, i] = (0, m.useState)(!1),
          n = (0, yt.Tn)();
        if (
          ((0, m.useEffect)(() => {
            yt.hH
              .Get()
              .LoadDoorData()
              .then(() => i(!0));
          }, []),
          !r)
        )
          return null;
        const a = t.GetSaleSectionsByType("quiz"),
          s = [],
          o =
            1 == a?.length &&
            ("scenario" == a[0].quiz.quiz_type ||
              "branching" == a[0].quiz.quiz_type) &&
            a[0].quiz.answer_categories?.length > 0;
        if (o)
          s.push({ label: "State: Reset the Quiz", data: -1 }),
            s.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: ft + e.category_name,
                data: e.door_index,
              })),
            ),
            s.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: "Rewarded as: " + e.category_name,
                data: e.door_index,
              })),
            );
        else {
          const e = yt.hH.Get().GetMaxDoor();
          for (let t = -1; t <= e; ++t)
            s.push({ label: "Doors Opened " + (t + 1), data: t });
        }
        const l = t.GetSaleSectionsByType("rewards"),
          c = l?.length > 0 ? l[0] : null;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "a",
            {
              className: (0, gt.A)(ut.Button, wt.AdminButton),
              onClick: (e) => {
                (0, dt.pg)(
                  m.createElement($e.o0, {
                    strTitle: (0, Qe.we)("#Dialog_AreYouSure"),
                    strDescription:
                      "Reload page after you hit OK; will not grant virtual reward items a second itme",
                    onOK: () => yt.hH.Get().CloseAllDoors(at.UF.CLANACCOUNTID),
                  }),
                  (0, Bt.uX)(e),
                );
              },
            },
            "Reset All Doors",
          ),
          m.createElement(Je.m, {
            strDropDownClassName: (0, gt.A)(ut.DropDownScroll),
            rgOptions: s,
            selectedOption: n,
            label: "Minigame States:",
            onChange: (e) => {
              const t = new Array();
              if (o)
                (0, bt.h5)(() => {
                  if (
                    ((0, yt.Sp)(-1),
                    pt.N.Get().ClearAnswersAndCategories(),
                    -1 != e.data)
                  ) {
                    const r = a[0].quiz.answer_categories.find(
                      (t) => t.door_index == e.data,
                    );
                    r &&
                      a[0].quiz.questions
                        .filter((e) => e.answers?.length > 0)
                        .forEach((e, t) => {
                          let i = e.answers.findIndex((e) =>
                            e.category_ids?.includes(r.category_id),
                          );
                          i < 0 && (i = 0),
                            pt.N.Get().SetAnswerCategory(
                              t,
                              e.answers[i].category_ids,
                            ),
                            pt.N.Get().SetAnswer(t, e.answers[i]);
                        }),
                      e.label.toString().startsWith(ft) ||
                        ((0, yt.my)(0, !0),
                        (0, yt.my)(e.data, !0),
                        t.push(0),
                        t.push(e.data));
                  }
                });
              else {
                for (let r = 0; r <= e.data; ++r) t.push(r);
                (0, yt.Sp)(e.data);
              }
              if (
                c &&
                c.rewards?.reward_items?.length > 0 &&
                e.data > -1 &&
                !e.label.toString().startsWith(ft)
              ) {
                const e = t
                    .map((e) =>
                      (function (e, t) {
                        if (e && "rewards" == e.section_type) {
                          const r = e.rewards.reward_items?.filter(
                            (e) => e.item_bucket == t,
                          );
                          if (r?.length > 0)
                            return r.map((e) => ({
                              appid: e.appid,
                              item_type: e.community_item_type,
                              amount: "1",
                            }));
                        }
                        return null;
                      })(c, e),
                    )
                    .filter(Boolean),
                  r = new Array();
                e.forEach((e) => r.push(...e)),
                  (0, Mt.l5)(c.rewards?.reward_items[0].appid, r);
              }
            },
          }),
        );
      }
      var Rt = r(95034),
        ht = r(12155),
        vt = r(32754),
        Ft = r(77021),
        jt = r(8092);
      function Pt(e) {
        const {
            eventModel: t,
            partnerEventStore: r,
            addtionalAdminButtons: i,
            fnOnUpdateSaleDayIndex: n,
            bSupportsSticky: a = !1,
          } = e,
          s = (0, at.Qn)(),
          o = (0, ct.MU)(),
          [u, d] = m.useState(!1),
          g = (0, l.q3)(() =>
            (function (e) {
              let t;
              e?.BHasSaleEnabled() &&
                (e.GetSaleSectionCount() > 0 &&
                  e.GetSaleSections().forEach((e) => {
                    (0, c.ye)(e.section_type) &&
                      !(0, c.CU)(e) &&
                      e.capsules.forEach((e) => {
                        void 0 !== e.visibility_index &&
                          (void 0 === t || t < e.visibility_index) &&
                          (t = e.visibility_index);
                      });
                  }),
                e.jsondata.sale_num_headers > 1 &&
                  (void 0 === t || t < e.jsondata.sale_num_headers) &&
                  (t = e.jsondata.sale_num_headers));
              return t;
            })(t),
          ),
          [B, _] = m.useState(t ? t.GetDayIndexFromEventStart() : 0),
          [b, p, y, M] = (0, l.q3)(() => [
            t.visibility_state,
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          w = (0, Ke.Ec)(M),
          [z, f] = m.useState(a),
          { bVisible: S, ref: R } = (0, et.hd)(),
          h = (e) => {
            (0, dt.pg)(
              m.createElement(lt, {
                eventModel: t,
                onDeleteSuccessAndCloseDialog: () => d(!0),
                partnerEventStore: r,
              }),
              (0, Bt.uX)(e),
            );
          },
          v = (0, Ft.ty)(),
          { creatorHome: F } = (0, jt.FV)(M);
        if (u)
          return m.createElement(mt.OG, {
            eventModel: t,
            route: mt.PH.k_eCommunityAdminPage,
          });
        if ((w.can_edit || w.support_user) && !s && !v) {
          const e = [];
          if (void 0 !== g)
            for (let t = 0; t <= g; ++t)
              e.push({
                label: (0, Qe.we)("#SalePage_Admin_SaleEventDay", t + 1),
                data: t,
              });
          const s = (0, at.yK)(),
            l = "community" == s,
            u = "store" == s,
            d = at.iA.is_support && (0, _t.m)(t.clanSteamID, !0),
            w = z && !S,
            v = 36 == t.GetEventType(),
            j = v && F?.GetLinkedEventGID() == t.GID,
            P =
              (b == c.zv.k_EEventStateVisible ||
                b == c.zv.k_EEventStateUnlisted) &&
              (!v || j),
            W = b == c.zv.k_EEventStateStaged;
          return m.createElement(
            Xe.tH,
            null,
            m.createElement("div", {
              className: (0, gt.A)(
                wt.DisplayAdminPanel_TopSpacer,
                w && wt.Sticky,
              ),
            }),
            m.createElement(
              "div",
              {
                className: (0, gt.A)({
                  [wt.DisplayAdminPanel]: !0,
                  [wt.Locked]: l,
                  [wt.Sticky]: w,
                }),
              },
              m.createElement(
                "span",
                { className: wt.DisplayAdminPanel_Title },
                (0, Qe.we)("#EventDisplay_Admin_Title"),
              ),
              m.createElement(
                "div",
                {
                  className: (0, gt.A)(
                    wt.DisplayAdminPanel_ctn,
                    w && wt.Sticky,
                  ),
                },
                i,
                i &&
                  m.createElement(
                    "span",
                    { className: wt.DisplayAdminPanel_Spacer },
                    " ",
                  ),
                m.createElement(
                  mt.tj,
                  {
                    eventModel: t,
                    route: mt.PH.k_eCommunityEdit,
                    className: (0, gt.A)(ut.Button, wt.AdminButton),
                  },
                  v
                    ? (0, Qe.we)("#EventEditor_Edit_Page")
                    : (0, Qe.we)("#EventEditor_Edit"),
                ),
                Boolean(r && "community" == (0, at.yK)()) &&
                  m.createElement(
                    "span",
                    { className: ut.Button + " " + wt.AdminButton, onClick: h },
                    (0, Qe.we)("#EventDisplay_DeleteEvent"),
                  ),
                !P &&
                  m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      mt.tj,
                      {
                        eventModel: t,
                        route: mt.PH.k_eCommunityPublish,
                        className: (0, gt.A)(ut.Button, wt.AdminButton),
                      },
                      (0, Qe.we)(
                        W
                          ? "#EventEditor_Publish_VisibleNow"
                          : "#Button_Publish",
                      ),
                    ),
                  ),
                m.createElement(
                  mt.tj,
                  {
                    eventModel: t,
                    route: mt.PH.k_eCommunityAdminPage,
                    className: (0, gt.A)(ut.Button, wt.AdminButton),
                  },
                  (0, Qe.we)("#EventDisplay_Events"),
                ),
                Boolean(void 0 !== g && e.length > 0) &&
                  m.createElement(Je.m, {
                    strDropDownClassName: ut.DropDownScroll,
                    rgOptions: e,
                    selectedOption: Math.min(g, B),
                    onChange: (e) => {
                      _(e.data), n(e.data);
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                Boolean(t.jsondata.bSaleEnabled && o && !v) &&
                  m.createElement(
                    mt.tj,
                    {
                      eventModel: t,
                      route: mt.PH.k_eStoreSalePage,
                      className: (0, gt.A)(ut.Button, wt.AdminButton),
                    },
                    (0, Qe.we)("#EventDisplay_SalesPage"),
                  ),
                Boolean(p && at.iA.is_support && y) &&
                  m.createElement(
                    "a",
                    {
                      href:
                        at.TS.STATS_BASE_URL +
                        "sales/details/?gid=" +
                        y +
                        "&clanid=" +
                        M,
                      target: at.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, gt.A)(
                        ut.Button,
                        wt.AdminButton,
                        ut.ValveOnlyBackground,
                      ),
                    },
                    (0, Qe.we)("#EventDisplay_StatsPage"),
                  ),
                Boolean(p && at.iA.is_support && y && !v) &&
                  m.createElement(
                    "a",
                    {
                      href:
                        at.TS.PARTNER_BASE_URL +
                        "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                        y +
                        "&saleclanaccountid=" +
                        M,
                      target: at.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, gt.A)(
                        ut.Button,
                        wt.AdminButton,
                        ut.ValveOnlyBackground,
                      ),
                    },
                    (0, Qe.we)("#EventDisplay_InvitationPlannerPage"),
                  ),
                Boolean(p && d && y) &&
                  m.createElement(Ot, {
                    clanAccountID: t.clanSteamID.GetAccountID(),
                    gidClanEvent: y,
                  }),
                Boolean(p && d && c.bv == M && t.GetContentHubCategory()) &&
                  m.createElement(
                    "a",
                    {
                      href: `${at.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                      target: at.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, gt.A)(
                        ut.Button,
                        wt.AdminButton,
                        ut.ValveOnlyBackground,
                      ),
                    },
                    (0, Qe.we)("#EventDisplay_CategoryEditor"),
                  ),
                Boolean(P && (u || (o && !l))) &&
                  m.createElement(
                    mt.tj,
                    {
                      eventModel: t,
                      route: p
                        ? mt.PH.k_eCommunityPreviewSale
                        : mt.PH.k_eCommunityView,
                      className: (0, gt.A)(ut.Button, wt.AdminButton),
                    },
                    (0, Qe.we)(
                      p
                        ? "#EventDisplay_PreviewOnCommunity"
                        : "#EventDisplay_ViewOnCommunity",
                    ),
                  ),
                Boolean(P && l) &&
                  m.createElement(
                    mt.tj,
                    {
                      eventModel: t,
                      route: mt.PH.k_eStoreView,
                      className: (0, gt.A)(ut.Button, wt.AdminButton),
                    },
                    (0, Qe.we)("#EventDisplay_ViewOnStore"),
                  ),
                m.createElement(zt, { eventModel: t }),
                m.createElement(qt, { eventModel: t }),
                Boolean(at.iA.is_support) &&
                  m.createElement(Wt, { eventModel: t }),
                w &&
                  m.createElement(
                    "div",
                    {
                      className: wt.DisplayAdminPanelClose,
                      onClick: () => f(!1),
                    },
                    m.createElement(
                      vt.Gq,
                      {
                        toolTipContent: (0, Qe.we)(
                          "#EventDisplay_Admin_Close_ttip",
                        ),
                      },
                      m.createElement(ht.X, null),
                    ),
                  ),
                !z &&
                  a &&
                  m.createElement(
                    "div",
                    {
                      className: wt.DisplayAdminPanelClose,
                      onClick: () => f(!0),
                    },
                    m.createElement(
                      vt.Gq,
                      {
                        toolTipContent: (0, Qe.we)(
                          "#EventDisplay_Admin_Reopen_ttip",
                        ),
                      },
                      m.createElement(ht.i3G, { angle: 0 }),
                    ),
                  ),
              ),
            ),
            m.createElement("div", {
              className: wt.DisplayAdminPanelMarker,
              ref: R,
            }),
          );
        }
        return m.createElement("span", null);
      }
      function Wt(e) {
        const { eventModel: t } = e,
          r = (0, Ye.Fb)(),
          [i] = (0, Rt.QD)(u.jD, void 0);
        return Boolean(
          r &&
            t.jsondata?.bSaleEnabled &&
            t.jsondata?.sale_sections?.length > 0,
        )
          ? m.createElement(
              m.Fragment,
              null,
              m.createElement(
                "a",
                {
                  className: (0, gt.A)(
                    ut.Button,
                    wt.AdminButton,
                    ut.ValveOnlyBackground,
                  ),
                  onClick: () => {
                    const e = t.jsondata.sale_sections.find(
                        (e) => "tabs" == e.section_type,
                      ),
                      n =
                        i ||
                        (e?.tabs?.length > 0 && e.tabs[0].unique_id) ||
                        null,
                      a = new Array();
                    t.jsondata.sale_sections.forEach((e) => {
                      (0, Ye.Jz)(e) &&
                        a.push({
                          ...r,
                          insertion_requirement: null,
                          sectionID: e.unique_id,
                          tabID: n,
                          insertionIndex: 0,
                          force_preview_mode: !0,
                        });
                    }),
                      (0, Ye.YH)(a);
                  },
                },
                "(VO) Inject Capsule",
              ),
              m.createElement(
                "a",
                {
                  className: (0, gt.A)(
                    ut.Button,
                    wt.AdminButton,
                    ut.ValveOnlyBackground,
                  ),
                  onClick: (e) =>
                    (0, dt.pg)(
                      m.createElement($e.o0, {
                        strTitle: "Clear Rewards for Summer 2022",
                        onOK: async () => {
                          const e = new FormData();
                          e.append("sessionid", at.TS.SESSIONID),
                            e.append(
                              "clan_accountid",
                              "" + at.UF.CLANACCOUNTID,
                            ),
                            e.append("event_id", "15");
                          const t = await o().post(
                            `${at.TS.STORE_BASE_URL}saleaction/ajaxgresetopendoorrewards`,
                            e,
                            { withCredentials: !0 },
                          );
                          console.log("ajaxgresetopendoorrewards", t);
                        },
                      }),
                      (0, Bt.uX)(e),
                    ),
                },
                "( VO ) Clear Summer 2022 Rewards",
              ),
            )
          : null;
      }
      function qt(e) {
        const { eventModel: t } = e,
          r = (0, l.q3)(() => t.jsondata.sale_sections),
          i = (0, m.useMemo)(
            () => r?.find((e) => "badge_progress" == e.section_type),
            [r],
          );
        return i?.badge_progress?.levels?.length > 0 && at.iA.is_support
          ? m.createElement(Tt, { section: i })
          : null;
      }
      function Tt(e) {
        const { section: t } = e,
          r = (0, d.fy)(t.badge_progress?.event_badgeid),
          i = (0, l.q3)(() => t.badge_progress.levels),
          n = Math.max(...i.map((e) => e.level));
        if (!r) return null;
        const a = [];
        for (let e = 0; e <= n; ++e) a.push({ label: "Level " + e, data: e });
        return m.createElement(Je.m, {
          strDropDownClassName: (0, gt.A)(
            ut.DropDownScroll,
            ut.ValveOnlyBackground,
          ),
          rgOptions: a,
          selectedOption: r.level,
          onChange: (e) =>
            (0, d.Du)({
              badgeid: t.badge_progress?.event_badgeid,
              level: e.data,
            }),
        });
      }
      function Ot(e) {
        const { clanAccountID: t, gidClanEvent: r } = e,
          i = He(t, r);
        return i
          ? m.createElement(
              m.Fragment,
              null,
              i.map((e) =>
                m.createElement(
                  "a",
                  {
                    key: e,
                    href: `${at.TS.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
                    target: at.TS.IN_CLIENT ? "" : "_blank",
                    className: (0, gt.A)(
                      ut.Button,
                      wt.AdminButton,
                      ut.ValveOnlyBackground,
                    ),
                  },
                  (0, Qe.we)("#EventDisplay_PromotionEditor"),
                ),
              ),
            )
          : null;
      }
    },
    64846: (e, t, r) => {
      r.d(t, { m: () => n });
      r(90626);
      var i = r(60746);
      r(95695);
      function n(e, t) {
        if (!e || !e.BIsClanAccount()) return !1;
        const r = i.KN.Get().GetPartnerEventPermissions(e);
        return !!r && (t ? r.valve_admin : r.valve_admin || r.support_user);
      }
    },
    44894: (e, t, r) => {
      r.d(t, { A: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

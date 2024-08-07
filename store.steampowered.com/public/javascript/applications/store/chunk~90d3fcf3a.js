/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3645],
  {
    30756: (e, t, r) => {
      r.d(t, { g: () => Rt });
      var i = r(41735),
        n = r.n(i),
        a = r(65946),
        s = r(90626),
        o = r(77516),
        l = r(75933),
        m = r(39733),
        c = r(81393),
        u = r(56545),
        d = r(80613),
        B = r(89068);
      const g = d.Message;
      class _ extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.promotion_id || B.Sg(_.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  partner_readonly_jsondata: {
                    n: 10,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  partner_writable_jsondata: {
                    n: 11,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  assets_readonly_jsondata: {
                    n: 12,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  assets_writable_jsondata: {
                    n: 13,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  last_update_time: {
                    n: 9,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = B.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class b extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.plan || B.Sg(b.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m || (b.sm_m = { proto: b, fields: { plan: { n: 1, c: _ } } }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = B.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class p extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.promotion_id || B.Sg(p.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = B.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class y extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.plan || B.Sg(y.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  plan: { n: 1, c: _ },
                  promotion_id: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = B.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class w extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class M extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.promotion_id || B.Sg(M.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = B.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class f extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.plan || B.Sg(f.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m || (f.sm_m = { proto: f, fields: { plan: { n: 1, c: _ } } }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = B.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class z extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class S extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.plan || B.Sg(S.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { plan: { n: 1, c: _, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = B.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class R extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.oldest_rtime || B.Sg(R.M()),
            g.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  oldest_rtime: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  newest_rtime: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  promotion_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: B.qM.readString,
                    bw: B.gp.writeRepeatedString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = B.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
        }
      }
      class h extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.plans || B.Sg(h.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { plans: { n: 1, c: _, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = B.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
        }
      }
      class v extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.rtime || B.Sg(v.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  rtime: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = B.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class F extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.plans || B.Sg(F.M()),
            g.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  plans: { n: 1, c: _, r: !0, q: !0 },
                  deleted_plan_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: B.qM.readFixed64String,
                    pbr: B.qM.readPackedFixed64String,
                    bw: B.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = B.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class P extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.promotion_id || B.Sg(P.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = B.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class j extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class W extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.token || B.Sg(W.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  token: { n: 1, br: B.qM.readString, bw: B.gp.writeString },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = B.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class O extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.plan || B.Sg(O.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { plan: { n: 1, c: _, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = B.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class T extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appids || B.Sg(T.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  exclude_sales: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  exclude_direct_featuring: {
                    n: 3,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = B.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class q extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.plans || B.Sg(q.M()),
            g.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  plans: { n: 1, c: _, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: I, r: !0, q: !0 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = B.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class I extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appids || B.Sg(I.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = B.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class U extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.partnerid || B.Sg(U.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  partnerid: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  start_date: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  end_date: { n: 6, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  show_hidden: { n: 4, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = B.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Request";
        }
      }
      class C extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.plans || B.Sg(C.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { plans: { n: 1, c: _, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = B.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Response";
        }
      }
      class E extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.input_access_key || B.Sg(E.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = B.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class x extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.plan || B.Sg(x.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m || (x.sm_m = { proto: x, fields: { plan: { n: 1, c: _ } } }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = B.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class D extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.promotion_id || B.Sg(D.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  value: { n: 2, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = B.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
        }
      }
      class A extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
        }
      }
      class N extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.promotion_id || B.Sg(N.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = B.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class G extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class k extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.promotion_id || B.Sg(k.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = B.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class L extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.results || B.Sg(L.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { results: { n: 1, c: H, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = B.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class H extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.notification_id || B.Sg(H.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  notification_id: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  status: { n: 5, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  type: { n: 6, br: B.qM.readEnum, bw: B.gp.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = B.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class K extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.promotion_id || B.Sg(K.M()),
            g.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = B.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class V extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class $ extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.promotion_id || B.Sg($.M()),
            g.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  add: { n: 2, br: B.qM.readBool, bw: B.gp.writeBool },
                  email_address: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = B.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT($.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class Y extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
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
          let t = new d.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class Q extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.promotion_id || B.Sg(Q.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  partnerid: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = B.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanPackageSales_Request";
        }
      }
      class X extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.promo_plan_package_sales_details || B.Sg(X.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  promo_plan_package_sales_details: {
                    n: 1,
                    c: J,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = B.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanPackageSales_Response";
        }
      }
      class J extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.date || B.Sg(J.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  date: { n: 1, br: B.qM.readString, bw: B.gp.writeString },
                  packageid: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  primary_app_id: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  is_dlc: { n: 4, br: B.qM.readBool, bw: B.gp.writeBool },
                  gross_units_sold: {
                    n: 5,
                    br: B.qM.readInt32,
                    bw: B.gp.writeInt32,
                  },
                  gross_sales_usdx100: {
                    n: 6,
                    br: B.qM.readInt64String,
                    bw: B.gp.writeInt64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = B.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanPackageSales_Response_PromotionPlanPackageSalesDetails";
        }
      }
      class Z extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.num_weeks || B.Sg(Z.M()),
            g.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  num_weeks: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  promotion_types: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: B.qM.readString,
                    bw: B.gp.writeRepeatedString,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = B.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanSummarySales_Request";
        }
      }
      class ee extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.results || B.Sg(ee.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { results: { n: 1, c: te, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = B.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanSummarySales_Response";
        }
      }
      class te extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.promotion_type || B.Sg(te.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  promotion_type: {
                    n: 1,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  gross_sales_minimum_usdx100: {
                    n: 2,
                    br: B.qM.readInt64String,
                    bw: B.gp.writeInt64String,
                  },
                  gross_sales_median_usdx100: {
                    n: 3,
                    br: B.qM.readInt64String,
                    bw: B.gp.writeInt64String,
                  },
                  gross_sales_average_usdx100: {
                    n: 4,
                    br: B.qM.readInt64String,
                    bw: B.gp.writeInt64String,
                  },
                  gross_sales_maximum_usdx100: {
                    n: 5,
                    br: B.qM.readInt64String,
                    bw: B.gp.writeInt64String,
                  },
                  num_weeks: { n: 6, br: B.qM.readInt32, bw: B.gp.writeInt32 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = B.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanSummarySales_Response_CSummaryResults";
        }
      }
      class re extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.clan_account_id || B.Sg(re.M()),
            g.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  rtime_sale_start: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtime_sale_end: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  daily_deal_gid: {
                    n: 5,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 6,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  create_asset_request: {
                    n: 7,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  partner_id: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  advertising_appid: {
                    n: 9,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = B.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Request";
        }
      }
      class ie extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.clan_account_id || B.Sg(ie.M()),
            g.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  daily_deal_gid: {
                    n: 3,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 4,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  asset_request_gid: {
                    n: 5,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  advertising_appid: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = B.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Response";
        }
      }
      class ne extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.request_list || B.Sg(ne.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { request_list: { n: 1, c: ae, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = B.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
        }
      }
      class ae extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.clan_account_id || B.Sg(ae.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = B.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
        }
      }
      class se extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.plans || B.Sg(se.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { plans: { n: 1, c: _, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = B.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
        }
      }
      class oe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.rtstart || B.Sg(oe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  rtstart: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  rtend: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  include_packages: {
                    n: 3,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  filter_modified_sales_rank: {
                    n: 4,
                    d: !0,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = B.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
        }
      }
      class le extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.package_details || B.Sg(le.M()),
            g.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  package_details: { n: 1, c: me, r: !0, q: !0 },
                  app_details: { n: 2, c: ce, r: !0, q: !0 },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = B.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
        }
      }
      class me extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.package_id || B.Sg(me.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  package_id: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_id: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_name: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  discount_percentage: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  original_price_usd: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_price_usd: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = B.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
        }
      }
      class ce extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || B.Sg(ce.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  cheapest_package_id: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  cheapest_discount_id: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  cheapest_discount_name: {
                    n: 5,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  package_original_price_usd: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discounted_price_usd: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_percentage: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 9,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 10,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  num_discounted_packages: {
                    n: 11,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  modified_sales_rank: {
                    n: 12,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = B.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
        }
      }
      class ue extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.account_id || B.Sg(ue.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  account_id: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  include_published: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = B.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
        }
      }
      class de extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.clans || B.Sg(de.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { clans: { n: 1, c: ge, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = B.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
        }
      }
      class Be extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.clan_account_id || B.Sg(Be.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  name: { n: 3, br: B.qM.readString, bw: B.gp.writeString },
                  published: { n: 4, br: B.qM.readBool, bw: B.gp.writeBool },
                  start_time: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  end_time: { n: 6, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  external_sale_event_type: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = B.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
        }
      }
      class ge extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.clan_account_id || B.Sg(ge.M()),
            g.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  clan_name: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  is_creator_home: {
                    n: 3,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  sale_pages: { n: 4, c: Be, r: !0, q: !0 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = B.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
        }
      }
      class _e extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.partner_id || B.Sg(_e.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  partner_id: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = B.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
        }
      }
      class be extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.advertising_apps || B.Sg(be.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: { advertising_apps: { n: 1, c: pe, r: !0, q: !0 } },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = B.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
        }
      }
      class pe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.appid || B.Sg(pe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  app_name: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  itemid: { n: 3, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = B.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
        }
      }
      class ye extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.publisherid || B.Sg(ye.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  publisherid: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtime_start: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = B.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAvailableWeekSlots_Request";
        }
      }
      class we extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.rt_weeklong_deals || B.Sg(we.M()),
            g.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  rt_weeklong_deals: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  rt_weekend_deals: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = B.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAvailableWeekSlots_Response";
        }
      }
      class Me extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.spotlight_due_date || B.Sg(Me.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = B.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class fe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.inviteid || B.Sg(fe.M()),
            g.initialize(this, e, 0, -1, [16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  type: { n: 6, br: B.qM.readEnum, bw: B.gp.writeEnum },
                  accept_account: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  deadlines: { n: 14, c: Me },
                  notify_partner: {
                    n: 15,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: B.qM.readString,
                    bw: B.gp.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  cancelled: { n: 18, br: B.qM.readBool, bw: B.gp.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  require_sale_page: {
                    n: 20,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  require_sale_page_type: {
                    n: 21,
                    br: B.qM.readEnum,
                    bw: B.gp.writeEnum,
                  },
                  admin_notes: {
                    n: 22,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  partner_notes: {
                    n: 23,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = B.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class ze extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.invite || B.Sg(ze.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  invite: { n: 1, c: fe },
                  queue_email_to_send: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = B.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class Se extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.inviteid || B.Sg(Se.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  inviteid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = B.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class Re extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.inviteid || B.Sg(Re.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  inviteid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  packageid: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  bundleid: { n: 4, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = B.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class he extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.invites || B.Sg(he.M()),
            g.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: { invites: { n: 1, c: fe, r: !0, q: !0 } },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = B.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class ve extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.inviteid || B.Sg(ve.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  inviteid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = B.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class Fe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Fe();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class Pe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.inviteid || B.Sg(Pe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = B.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class je extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.accountid || B.Sg(je.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  accountid: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = B.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class We extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.targets || B.Sg(We.M()),
            g.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  targets: { n: 1, c: je, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: B.qM.readString,
                    bw: B.gp.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = B.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class Oe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.inviteid || B.Sg(Oe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = B.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class Te extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.gid || B.Sg(Te.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  gid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = B.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class qe extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.inviteid || B.Sg(qe.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = B.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class Ie extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ie();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      class Ue extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.opt_in_name || B.Sg(Ue.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  partner_id: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = B.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Request";
        }
      }
      class Ce extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.stats || B.Sg(Ce.M()),
            g.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  stats: { n: 1, c: Ee, r: !0, q: !0 },
                  appid_without_permissions: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = B.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response";
        }
      }
      class Ee extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.appid || B.Sg(Ee.M()),
            g.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rt_start_time: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  demo_player_count: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  wishlist_count: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  player_wishlist_count: {
                    n: 7,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  rt_last_update_time: {
                    n: 9,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = B.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
        }
      }
      var xe, De, Ae;
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, u.I8)(b, t),
            p,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, u.I8)(b, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, u.I8)(y, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, u.I8)(y, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, u.I8)(y, t),
              w,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, u.I8)(P, t),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, u.I8)(M, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, u.I8)(z, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanCompletedInDateRange = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, u.I8)(R, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, u.I8)(v, t),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, u.I8)(W, t),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, u.I8)(T, t),
              q,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetAllPlansForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, u.I8)(U, t),
              C,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, u.I8)(E, t),
              x,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, u.I8)(D, t),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, u.I8)(N, t),
              G,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, u.I8)(k, t),
              L,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, u.I8)(K, t),
              V,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, u.I8)($, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanForSalePages = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, u.I8)(ne, t),
              se,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetPromotionPlanPackageSales = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanPackageSales#1",
              (0, u.I8)(Q, t),
              X,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetPromotionPlanSummarySales = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanSummarySales#1",
              (0, u.I8)(Z, t),
              ee,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.CreateSalePageForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, u.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUpcomingScheduledDiscounts = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, u.I8)(oe, t),
              le,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetSalePageCandidatesForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, u.I8)(ue, t),
              de,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAdvertisingAppsForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, u.I8)(_e, t),
              be,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAvailableWeekSlots = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAvailableWeekSlots#1",
              (0, u.I8)(ye, t),
              we,
              { bConstMethod: !0, ePrivilege: 8 },
            );
          });
      })(xe || (xe = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, u.I8)(ze, t),
              Se,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, u.I8)(Re, t),
                he,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, u.I8)(Oe, t),
                Te,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, u.I8)(qe, t),
                Ie,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, u.I8)(ve, t),
                Fe,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, u.I8)(Pe, t),
                We,
                { ePrivilege: 4 },
              );
            });
        })(De || (De = {})),
        (function (e) {
          e.GetOptInDemoStats = function (e, t) {
            return e.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, u.I8)(Ue, t),
              Ce,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(Ae || (Ae = {}));
      var Ne = r(20194),
        Ge = r(72034),
        ke = r(30470),
        Le = r(24484);
      function He(e, t) {
        const [r] = (0, s.useState)(() =>
          (function () {
            const e = (0, Le.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            return (
              (0, c.w)(
                e,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              e
                ? new Ge.D(ke.TS.WEBAPI_BASE_URL, e).GetServiceTransport()
                : null
            );
          })(),
        );
        return (0, Ne.I)({
          queryKey: ["usePromotionPlanBySalePage", t],
          queryFn: async () => {
            const i = u.w.Init(ne),
              n = new ae();
            n.set_clan_account_id(e),
              n.set_gid_clan_event(t),
              i.Body().add_request_list(n);
            const a = await xe.GetPromotionPlanForSalePages(r, i);
            if (1 != a.GetEResult())
              throw new Error(
                `Error from PromotionPlanBySalePage: ${a.GetEResult()}`,
              );
            return a
              .Body()
              .plans()
              .map((e) => e.promotion_id());
          },
          placeholderData: null,
          enabled: Boolean(r),
        }).data;
      }
      var Ke = r(60746),
        Ve = r(12443),
        $e = r(7068),
        Ye = r(84811),
        Qe = r(34629),
        Xe = r(44325),
        Je = r(61859),
        Ze = r(56093),
        et = r(56330),
        tt = r.n(et),
        rt = r(22837),
        it = r(22797),
        nt = r(78327),
        at = r(68797);
      const st = new (class {
        async DeleteForumTopic(e, t, r, i, a) {
          let s =
            nt.TS.COMMUNITY_BASE_URL +
            "forum/" +
            e.GetAccountID() +
            "/" +
            t +
            "/deletetopic/";
          null != r && "" != r && (s += r + "/");
          const o = new FormData();
          o.append("sessionid", nt.TS.SESSIONID), o.append("gidforumtopic", i);
          let l = await n().post(s, o, {
            withCredentials: !0,
            cancelToken: a.token,
          });
          if (1 != l.data.success) throw l.data;
          return l.data;
        }
      })();
      class ot extends s.Component {
        static m_uniqueError = 0;
        m_forumTopicGID;
        m_clanSteamID;
        m_cancelSignal = n().CancelToken.source();
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
              ? st
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
          this.setState({ dialogState: "error", ...(0, at.H)(e) });
        }
        OnDeleteForumTopicFailureCallback(e) {
          this.setState({
            dialogState: "failed_thread_delete",
            ...(0, at.H)(e),
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
            i != rt.kF
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
              let n = e.GetNameWithFallback((0, rt.sf)(nt.TS.LANGUAGE)),
                a = e.BIsVisibleEvent()
                  ? "#EventDisplay_AreYouSure_Visible"
                  : "#EventDisplay_AreYouSure";
              (r = (0, Je.we)(a, n)),
                (t = this.OnDelete),
                e.BHasForumTopicGID() &&
                  i.push(
                    s.createElement(
                      "div",
                      { key: "WantToDeleteCmtThread", className: tt().Padding },
                      s.createElement("input", {
                        type: "checkbox",
                        id: "del_cmt_post",
                        name: "del_cmt_post",
                        defaultChecked: this.state.bDeleteCommentThread,
                        onChange: this.OnChangeDeleteForum,
                      }),
                      s.createElement(
                        "label",
                        { htmlFor: "del_cmt_post" },
                        (0, Je.we)("#EventDisplay_DeleteEvent_Comment"),
                      ),
                    ),
                  );
              break;
            case "waiting":
              (r = (0, Je.we)("#EventDisplay_DeleteEvent_InProgress")),
                i.push(s.createElement(it.t, { key: "throbber" }));
              break;
            case "error":
              (r = (0, Je.we)("#EventDisplay_DeleteEvent_Error")),
                i.push(
                  s.createElement(
                    "div",
                    {
                      key: "deleteerror_" + ++ot.m_uniqueError,
                      className: tt().ErrorStyles,
                    },
                    this.state.strErrorMsg,
                  ),
                );
              break;
            case "failed_thread_delete":
              (r = (0, Je.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                i.push(
                  s.createElement(
                    "div",
                    {
                      key: "deleteerror_" + ++ot.m_uniqueError,
                      className: tt().ErrorStyles,
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
              (r = (0, Je.we)("#EventDisplay_DeleteEvent_Success")),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
          }
          return s.createElement(
            Xe.o0,
            {
              strTitle: (0, Je.we)("#EventDisplay_DeleteEvent"),
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
      (0, Qe.Cg)([Ze.oI], ot.prototype, "OnDeleteEventSuccessCallback", null),
        (0, Qe.Cg)(
          [Ze.oI],
          ot.prototype,
          "OnDeleteForumTopicSuccessCallback",
          null,
        ),
        (0, Qe.Cg)([Ze.oI], ot.prototype, "OnDeleteEventFailureCallback", null),
        (0, Qe.Cg)(
          [Ze.oI],
          ot.prototype,
          "OnDeleteForumTopicFailureCallback",
          null,
        ),
        (0, Qe.Cg)([Ze.oI], ot.prototype, "SetToWaiting", null),
        (0, Qe.Cg)([Ze.oI], ot.prototype, "OnDelete", null),
        (0, Qe.Cg)([Ze.oI], ot.prototype, "OnChangeDeleteForum", null);
      var lt = r(75113),
        mt = r(96971),
        ct = r(95695),
        ut = r(738),
        dt = r(52038),
        Bt = r(56011);
      function gt(e, t) {
        if (!e || !e.BIsClanAccount) return !1;
        const r = Ke.KN.Get().GetPartnerEventPermissions(e);
        return !!r && (t ? r.valve_admin : r.valve_admin || r.support_user);
      }
      var _t = r(14947),
        bt = r(1501),
        pt = r(35400),
        yt = r(36735),
        wt = r(90316);
      function Mt(e) {
        const { eventModel: t } = e,
          r = (0, a.q3)(() => t.jsondata.sale_sections);
        return (0, s.useMemo)(
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
          ? s.createElement(zt, { ...e })
          : null;
      }
      const ft = "Answered as: ";
      function zt(e) {
        const { eventModel: t } = e,
          [r, i] = (0, s.useState)(!1),
          n = (0, pt.Tn)();
        if (
          ((0, s.useEffect)(() => {
            pt.hH
              .Get()
              .LoadDoorData()
              .then(() => i(!0));
          }, []),
          !r)
        )
          return null;
        const a = t.GetSaleSectionsByType("quiz"),
          o = [],
          l =
            1 == a?.length &&
            ("scenario" == a[0].quiz.quiz_type ||
              "branching" == a[0].quiz.quiz_type) &&
            a[0].quiz.answer_categories?.length > 0;
        if (l)
          o.push({ label: "State: Reset the Quiz", data: -1 }),
            o.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: ft + e.category_name,
                data: e.door_index,
              })),
            ),
            o.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: "Rewarded as: " + e.category_name,
                data: e.door_index,
              })),
            );
        else {
          const e = pt.hH.Get().GetMaxDoor();
          for (let t = -1; t <= e; ++t)
            o.push({ label: "Doors Opened " + (t + 1), data: t });
        }
        const m = t.GetSaleSectionsByType("rewards"),
          c = m?.length > 0 ? m[0] : null;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "a",
            {
              className: (0, dt.A)(ct.Button, wt.AdminButton),
              onClick: (e) => {
                (0, ut.pg)(
                  s.createElement(Xe.o0, {
                    strTitle: (0, Je.we)("#Dialog_AreYouSure"),
                    strDescription:
                      "Reload page after you hit OK; will not grant virtual reward items a second itme",
                    onOK: () => pt.hH.Get().CloseAllDoors(nt.UF.CLANACCOUNTID),
                  }),
                  (0, Bt.uX)(e),
                );
              },
            },
            "Reset All Doors",
          ),
          s.createElement($e.m, {
            strDropDownClassName: (0, dt.A)(ct.DropDownScroll),
            rgOptions: o,
            selectedOption: n,
            label: "Minigame States:",
            onChange: (e) => {
              const t = new Array();
              if (l)
                (0, _t.h5)(() => {
                  if (
                    ((0, pt.Sp)(-1),
                    bt.N.Get().ClearAnswersAndCategories(),
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
                            bt.N.Get().SetAnswerCategory(
                              t,
                              e.answers[i].category_ids,
                            ),
                            bt.N.Get().SetAnswer(t, e.answers[i]);
                        }),
                      e.label.toString().startsWith(ft) ||
                        ((0, pt.my)(0, !0),
                        (0, pt.my)(e.data, !0),
                        t.push(0),
                        t.push(e.data));
                  }
                });
              else {
                for (let r = 0; r <= e.data; ++r) t.push(r);
                (0, pt.Sp)(e.data);
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
                  (0, yt.l5)(c.rewards?.reward_items[0].appid, r);
              }
            },
          }),
        );
      }
      var St = r(95034);
      function Rt(e) {
        const {
            eventModel: t,
            partnerEventStore: r,
            addtionalAdminButtons: i,
            fnOnUpdateSaleDayIndex: n,
          } = e,
          l = (0, nt.Qn)(),
          m = (0, mt.MU)(),
          [c, u] = s.useState(!1),
          d = (0, a.q3)(() =>
            (function (e) {
              let t;
              e?.BHasSaleEnabled() &&
                (e.GetSaleSectionCount() > 0 &&
                  e.GetSaleSections().forEach((e) => {
                    "items" != e.section_type ||
                      e.smart_section ||
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
          [B, g] = s.useState(t ? t.GetDayIndexFromEventStart() : 0),
          [_, b, p, y] = (0, a.q3)(() => [
            t.visibility_state,
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          w = (0, Ke.Ec)(y),
          M = (e) => {
            (0, ut.pg)(
              s.createElement(ot, {
                eventModel: t,
                onDeleteSuccessAndCloseDialog: () => u(!0),
                partnerEventStore: r,
              }),
              (0, Bt.uX)(e),
            );
          };
        if (c) return (0, lt.OG)(t, lt.PH.k_eCommunityAdminPage);
        const f = _ == o.zv.k_EEventStateVisible,
          z = _ == o.zv.k_EEventStateStaged;
        if ((w.can_edit || w.support_user) && !l) {
          const e = [];
          if (void 0 !== d)
            for (let t = 0; t <= d; ++t)
              e.push({
                label: (0, Je.we)("#SalePage_Admin_SaleEventDay", t + 1),
                data: t,
              });
          const a = (0, nt.yK)(),
            o = "community" == a,
            l = "store" == a,
            c = nt.iA.is_support && gt(t.clanSteamID, !0);
          return s.createElement(
            Ye.tH,
            null,
            s.createElement(
              "div",
              {
                className: (0, dt.A)({
                  [wt.DisplayAdminPanel]: !0,
                  [wt.Locked]: o,
                }),
              },
              s.createElement(
                "span",
                { className: wt.DisplayAdminPanel_Title },
                (0, Je.we)("#EventDisplay_Admin_Title"),
              ),
              s.createElement(
                "div",
                { className: wt.DisplayAdminPanel_ctn },
                i,
                i &&
                  s.createElement(
                    "span",
                    { className: wt.DisplayAdminPanel_Spacer },
                    " ",
                  ),
                s.createElement(
                  lt.tj,
                  {
                    eventModel: t,
                    route: lt.PH.k_eCommunityEdit,
                    className: (0, dt.A)(ct.Button, wt.AdminButton),
                  },
                  (0, Je.we)("#EventEditor_Edit"),
                ),
                Boolean(r && "community" == (0, nt.yK)()) &&
                  s.createElement(
                    "span",
                    { className: ct.Button + " " + wt.AdminButton, onClick: M },
                    (0, Je.we)("#EventDisplay_DeleteEvent"),
                  ),
                !f &&
                  s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      lt.tj,
                      {
                        eventModel: t,
                        route: lt.PH.k_eCommunityPublish,
                        className: (0, dt.A)(ct.Button, wt.AdminButton),
                      },
                      (0, Je.we)(
                        z
                          ? "#EventEditor_Publish_VisibleNow"
                          : "#Button_Publish",
                      ),
                    ),
                  ),
                s.createElement(
                  lt.tj,
                  {
                    eventModel: t,
                    route: lt.PH.k_eCommunityAdminPage,
                    className: (0, dt.A)(ct.Button, wt.AdminButton),
                  },
                  (0, Je.we)("#EventDisplay_Events"),
                ),
                Boolean(void 0 !== d && e.length > 0) &&
                  s.createElement($e.m, {
                    strDropDownClassName: ct.DropDownScroll,
                    rgOptions: e,
                    selectedOption: Math.min(d, B),
                    onChange: (e) => {
                      g(e.data), n(e.data);
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                Boolean(t.jsondata.bSaleEnabled && m) &&
                  s.createElement(
                    lt.tj,
                    {
                      eventModel: t,
                      route: lt.PH.k_eStoreSalePage,
                      className: (0, dt.A)(ct.Button, wt.AdminButton),
                    },
                    (0, Je.we)("#EventDisplay_SalesPage"),
                  ),
                Boolean(b && nt.iA.is_support && p) &&
                  s.createElement(
                    "a",
                    {
                      href:
                        nt.TS.STATS_BASE_URL +
                        "sales/details/?gid=" +
                        p +
                        "&clanid=" +
                        y,
                      target: nt.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, dt.A)(
                        ct.Button,
                        wt.AdminButton,
                        ct.ValveOnlyBackground,
                      ),
                    },
                    (0, Je.we)("#EventDisplay_StatsPage"),
                  ),
                Boolean(b && nt.iA.is_support && p) &&
                  s.createElement(
                    "a",
                    {
                      href:
                        nt.TS.PARTNER_BASE_URL +
                        "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                        p +
                        "&saleclanaccountid=" +
                        y,
                      target: nt.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, dt.A)(
                        ct.Button,
                        wt.AdminButton,
                        ct.ValveOnlyBackground,
                      ),
                    },
                    (0, Je.we)("#EventDisplay_InvitationPlannerPage"),
                  ),
                Boolean(b && c && p) &&
                  s.createElement(Pt, {
                    clanAccountID: t.clanSteamID.GetAccountID(),
                    gidClanEvent: p,
                  }),
                Boolean(f && (l || m)) &&
                  s.createElement(
                    lt.tj,
                    {
                      eventModel: t,
                      route: b
                        ? lt.PH.k_eCommunityPreviewSale
                        : lt.PH.k_eCommunityView,
                      className: (0, dt.A)(ct.Button, wt.AdminButton),
                    },
                    (0, Je.we)(
                      b
                        ? "#EventDisplay_PreviewOnCommunity"
                        : "#EventDisplay_ViewOnCommunity",
                    ),
                  ),
                Boolean(f && o) &&
                  s.createElement(
                    lt.tj,
                    {
                      eventModel: t,
                      route: lt.PH.k_eStoreView,
                      className: (0, dt.A)(ct.Button, wt.AdminButton),
                    },
                    (0, Je.we)("#EventDisplay_ViewOnStore"),
                  ),
                s.createElement(Mt, { eventModel: t }),
                s.createElement(vt, { eventModel: t }),
                Boolean(nt.iA.is_support) &&
                  s.createElement(ht, { eventModel: t }),
              ),
            ),
          );
        }
        return s.createElement("span", null);
      }
      function ht(e) {
        const { eventModel: t } = e,
          r = (0, Ve.Fb)(),
          [i] = (0, St.QD)(l.jD, void 0);
        return Boolean(
          r &&
            t.jsondata?.bSaleEnabled &&
            t.jsondata?.sale_sections?.length > 0,
        )
          ? s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "a",
                {
                  className: (0, dt.A)(
                    ct.Button,
                    wt.AdminButton,
                    ct.ValveOnlyBackground,
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
                      (0, Ve.Jz)(e) &&
                        a.push({
                          ...r,
                          insertion_requirement: null,
                          sectionID: e.unique_id,
                          tabID: n,
                          insertionIndex: 0,
                          force_preview_mode: !0,
                        });
                    }),
                      (0, Ve.YH)(a);
                  },
                },
                "(VO) Inject Capsule",
              ),
              s.createElement(
                "a",
                {
                  className: (0, dt.A)(
                    ct.Button,
                    wt.AdminButton,
                    ct.ValveOnlyBackground,
                  ),
                  onClick: (e) =>
                    (0, ut.pg)(
                      s.createElement(Xe.o0, {
                        strTitle: "Clear Rewards for Summer 2022",
                        onOK: async () => {
                          const e = new FormData();
                          e.append("sessionid", nt.TS.SESSIONID),
                            e.append(
                              "clan_accountid",
                              "" + nt.UF.CLANACCOUNTID,
                            ),
                            e.append("event_id", "15");
                          const t = await n().post(
                            `${nt.TS.STORE_BASE_URL}saleaction/ajaxgresetopendoorrewards`,
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
      function vt(e) {
        const { eventModel: t } = e,
          r = (0, a.q3)(() => t.jsondata.sale_sections),
          i = (0, s.useMemo)(
            () => r?.find((e) => "badge_progress" == e.section_type),
            [r],
          );
        return i?.badge_progress?.levels?.length > 0 && nt.iA.is_support
          ? s.createElement(Ft, { section: i })
          : null;
      }
      function Ft(e) {
        const { section: t } = e,
          r = (0, m.fy)(t.badge_progress?.event_badgeid),
          i = (0, a.q3)(() => t.badge_progress.levels),
          n = Math.max(...i.map((e) => e.level));
        if (!r) return null;
        const o = [];
        for (let e = 0; e <= n; ++e) o.push({ label: "Level " + e, data: e });
        return s.createElement($e.m, {
          strDropDownClassName: (0, dt.A)(
            ct.DropDownScroll,
            ct.ValveOnlyBackground,
          ),
          rgOptions: o,
          selectedOption: r.level,
          onChange: (e) =>
            (0, m.Du)({
              badgeid: t.badge_progress?.event_badgeid,
              level: e.data,
            }),
        });
      }
      function Pt(e) {
        const { clanAccountID: t, gidClanEvent: r } = e,
          i = He(t, r);
        return i
          ? s.createElement(
              s.Fragment,
              null,
              i.map((e) =>
                s.createElement(
                  "a",
                  {
                    key: e,
                    href: `${nt.TS.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
                    target: nt.TS.IN_CLIENT ? "" : "_blank",
                    className: (0, dt.A)(
                      ct.Button,
                      wt.AdminButton,
                      ct.ValveOnlyBackground,
                    ),
                  },
                  (0, Je.we)("#EventDisplay_PromotionEditor"),
                ),
              ),
            )
          : null;
      }
    },
  },
]);

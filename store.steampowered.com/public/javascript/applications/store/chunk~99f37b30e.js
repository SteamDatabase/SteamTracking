/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [97250],
    {
      85671: (ht, Ke, w) => {
        w.d(Ke, { g: () => Mt });
        var b = w(7850),
          Se = w(26589),
          je = w(99412),
          ye = w(65946),
          Yr = w(90626),
          ze = w(73259),
          Fe = w(35702),
          me = w(72604),
          Ee = w(71742),
          z = w(35038),
          a = w(80613),
          i = w.n(a),
          e = w(75245);
        function Tt(B) {
          return "unknown EPromoPlanAssociationType ( " + B + " )";
        }
        function Ot(B) {
          return "unknown EPromotionNotification ( " + B + " )";
        }
        function xt(B) {
          return "unknown EPromotionEventInviteType ( " + B + " )";
        }
        class W extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.promotion_id || e.Sg(W.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    admin_jsondata: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_jsondata: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    input_jsondata: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_readonly_jsondata: {
                      n: 10,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_writable_jsondata: {
                      n: 11,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    assets_readonly_jsondata: {
                      n: 12,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    assets_writable_jsondata: {
                      n: 13,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    rtime32_start_time: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime32_end_time: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    partner_id: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    input_access_key: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    last_update_time: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = e.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(W.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new W();
            return W.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(W.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(W.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan";
          }
        }
        class F extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.plan || e.Sg(F.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = { proto: F, fields: { plan: { n: 1, c: W } } }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = e.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(F.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new F();
            return F.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(F.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(F.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_CreatePlan_Request";
          }
        }
        class m extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.promotion_id || e.Sg(m.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    input_access_key: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = e.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(m.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new m();
            return m.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(m.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(m.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_CreatePlan_Response";
          }
        }
        class g extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.plan || e.Sg(g.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    plan: { n: 1, c: W },
                    promotion_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = e.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(g.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new g();
            return g.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(g.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(g.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_UpdatePlan_Request";
          }
        }
        class _r extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new _r();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new _r();
            return _r.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_UpdatePlan_Response";
          }
        }
        class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.promotion_id || e.Sg($.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT($.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new $();
            return $.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj($.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0($.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlan_Request";
          }
        }
        class k extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.plan || e.Sg(k.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = { proto: k, fields: { plan: { n: 1, c: W } } }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = e.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(k.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new k();
            return k.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(k.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(k.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlan_Response";
          }
        }
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ee.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ee();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ee();
            return ee.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllActivePlan_Request";
          }
        }
        class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.plan || e.Sg(Z.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: { plan: { n: 1, c: W, r: !0, q: !0 } },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = e.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Z.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Z();
            return Z.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllActivePlan_Response";
          }
        }
        class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.oldest_rtime || e.Sg(Q.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    oldest_rtime: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    newest_rtime: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    promotion_types: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readString,
                      bw: e.gp.writeRepeatedString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = e.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Q.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
          }
        }
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.plans || e.Sg(X.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: { plans: { n: 1, c: W, r: !0, q: !0 } },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = e.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(X.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new X();
            return X.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(X.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(X.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
          }
        }
        class l extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.type || e.Sg(l.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    type: { n: 1, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    promotion_planid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = e.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(l.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new l();
            return l.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(l.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(l.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromoAssociation";
          }
        }
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.requested || e.Sg(Y.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: { requested: { n: 1, c: l, r: !0, q: !0 } },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = e.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Y.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Y();
            return Y.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByAssociationID_Request";
          }
        }
        class J extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.matching || e.Sg(J.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    matching: { n: 1, c: l, r: !0, q: !0 },
                    plans: { n: 2, c: W, r: !0, q: !0 },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = e.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(J.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new J();
            return J.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(J.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(J.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByAssociationID_Response";
          }
        }
        class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.rtime || e.Sg(K.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    rtime: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    upto_rtime: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = e.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(K.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new K();
            return K.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(K.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(K.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlansUpdatedSince_Request";
          }
        }
        class S extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.plans || e.Sg(S.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    plans: { n: 1, c: W, r: !0, q: !0 },
                    deleted_plan_ids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readFixed64String,
                      pbr: e.qM.readPackedFixed64String,
                      bw: e.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = e.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(S.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new S();
            return S.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(S.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(S.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlansUpdatedSince_Response";
          }
        }
        class E extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.promotion_id || e.Sg(E.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = e.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(E.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new E();
            return E.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(E.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(E.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_DeletePlan_Request";
          }
        }
        class te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return te.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new te();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new te();
            return te.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_DeletePlan_Response";
          }
        }
        class D extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.token || e.Sg(D.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    token: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = e.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(D.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new D();
            return D.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(D.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(D.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SearchPlan_Request";
          }
        }
        class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.plan || e.Sg(v.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: { plan: { n: 1, c: W, r: !0, q: !0 } },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = e.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(v.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new v();
            return v.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(v.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(v.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SearchPlan_Response";
          }
        }
        class I extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.appids || e.Sg(I.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
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
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    exclude_sales: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    exclude_direct_featuring: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = e.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(I.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new I();
            return I.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(I.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(I.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForApps_Request";
          }
        }
        class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.plans || e.Sg(q.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    plans: { n: 1, c: W, r: !0, q: !0 },
                    apps_included_in_sales: { n: 2, c: A, r: !0, q: !0 },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = e.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(q.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new q();
            return q.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForApps_Response";
          }
        }
        class A extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.appids || e.Sg(A.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
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
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    clan_event_gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = e.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(A.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new A();
            return A.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(A.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(A.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
          }
        }
        class p extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.input_access_key || e.Sg(p.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    input_access_key: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = e.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(p.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new p();
            return p.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(p.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(p.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.plan || e.Sg(G.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = { proto: G, fields: { plan: { n: 1, c: W } } }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = e.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(G.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new G();
            return G.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(G.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(G.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
          }
        }
        class R extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.promotion_id || e.Sg(R.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    value: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = e.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(R.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new R();
            return R.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(R.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(R.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
          }
        }
        class ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ie.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ie();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ie();
            return ie.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.promotion_id || e.Sg(C.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    notification_type: {
                      n: 2,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    only_explicit_email_addresses: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = e.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(C.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new C();
            return C.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(C.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(C.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SendNotification_Request";
          }
        }
        class se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return se.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new se();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new se();
            return se.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SendNotification_Response";
          }
        }
        class n extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.promotion_id || e.Sg(n.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    notification_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = e.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(n.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new n();
            return n.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(n.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(n.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSentNotification_Request";
          }
        }
        class P extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.results || e.Sg(P.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: { results: { n: 1, c: _, r: !0, q: !0 } },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = e.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(P.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new P();
            return P.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(P.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(P.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSentNotification_Response";
          }
        }
        class _ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.notification_id || e.Sg(_.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    notification_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    tracking_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    email_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    accountid: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    status: { n: 5, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    type: { n: 6, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    rt_send_time: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = e.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(_.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new _();
            return _.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(_.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(_.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionNotificationResults";
          }
        }
        class o extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.promotion_id || e.Sg(o.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    notification_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = e.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(o.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new o();
            return o.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(o.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(o.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_ResendNotification_Request";
          }
        }
        class ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ae.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ae();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ae();
            return ae.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_ResendNotification_Response";
          }
        }
        class rr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.promotion_id || e.Sg(rr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    add: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    email_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = e.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(rr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new rr();
            return rr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SetPromotionEmailTarget_Request";
          }
        }
        class Be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Be.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Be();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Be();
            return Be.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SetPromotionEmailTarget_Response";
          }
        }
        class er extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.clan_account_id || e.Sg(er.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    clan_event_gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    rtime_sale_start: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_sale_end: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    daily_deal_gid: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    promotion_gid: {
                      n: 6,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    create_asset_request: {
                      n: 7,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    partner_id: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    advertising_appid: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = e.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(er.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new er();
            return er.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_CreateSalePageForPromo_Request";
          }
        }
        class tr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.clan_account_id || e.Sg(tr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    clan_event_gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    daily_deal_gid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    promotion_gid: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    asset_request_gid: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    advertising_appid: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = e.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(tr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new tr();
            return tr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_CreateSalePageForPromo_Response";
          }
        }
        class U extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.total_gross_sales_usdx100 || e.Sg(U.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    total_gross_sales_usdx100: {
                      n: 1,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    total_gross_returns_usdx100: {
                      n: 2,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    total_net_tax_usdx100: {
                      n: 3,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_sales_usdx100: {
                      n: 4,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_returns_usdx100: {
                      n: 5,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_net_tax_usdx100: {
                      n: 6,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_gross_sales_usdx100: {
                      n: 7,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_gross_returns_usdx100: {
                      n: 8,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_net_tax_usdx100: {
                      n: 9,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    total_net_sales_usdx100: {
                      n: 10,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_net_sales_usdx100: {
                      n: 11,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_net_sales_usdx100: {
                      n: 12,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_units_sold: {
                      n: 13,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_units_returned: {
                      n: 14,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    gross_units_activated: {
                      n: 15,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = e.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(U.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new U();
            return U.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(U.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(U.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_SummarySaleResult";
          }
        }
        class ir extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.promotionids || e.Sg(ir.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    promotionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    partnerid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = e.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(ir.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ir();
            return ir.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
          }
        }
        class sr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.sales || e.Sg(sr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    sales: { n: 1, c: Br, r: !0, q: !0 },
                    partial_access: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = e.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(sr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new sr();
            return sr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
          }
        }
        class N extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.rtime_date || e.Sg(N.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    rtime_date: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    date: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                    summary_sales: { n: 3, c: U },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = e.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(N.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new N();
            return N.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(N.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(N.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
          }
        }
        class ar extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.appid || e.Sg(ar.M()),
              a.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    packageid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    secondary_product_id: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    summary_sales: { n: 4, c: U },
                    daily_promo_sales: { n: 5, c: N, r: !0, q: !0 },
                    package_billing_type: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = e.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(ar.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ar();
            return ar.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
          }
        }
        class Br extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.promotionid || e.Sg(Br.M()),
              a.Message.initialize(this, r, 0, -1, [2, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    promotionid: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    daily_promo_sales: { n: 2, c: N, r: !0, q: !0 },
                    summary_sales: { n: 3, c: U },
                    products: { n: 4, c: ar, r: !0, q: !0 },
                    products_missing_user_rights: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Br.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Br();
            return Br.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
          }
        }
        class V extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.request_list || e.Sg(V.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { request_list: { n: 1, c: H, r: !0, q: !0 } },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = e.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(V.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new V();
            return V.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(V.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(V.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
          }
        }
        class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.clan_account_id || e.Sg(H.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gid_clan_event: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = e.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(H.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new H();
            return H.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(H.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(H.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
          }
        }
        class cr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.plans || e.Sg(cr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { plans: { n: 1, c: W, r: !0, q: !0 } },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = e.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(cr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new cr();
            return cr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
          }
        }
        class br extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.rtstart || e.Sg(br.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    rtstart: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtend: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    include_packages: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    filter_modified_sales_rank: {
                      n: 4,
                      d: !0,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = e.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(br.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new br();
            return br.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
          }
        }
        class dr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.package_details || e.Sg(dr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    package_details: { n: 1, c: wr, r: !0, q: !0 },
                    app_details: { n: 2, c: fr, r: !0, q: !0 },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = e.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(dr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new dr();
            return dr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
          }
        }
        class wr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.package_id || e.Sg(wr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    package_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_id: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_name: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    discount_percentage: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    original_price_usd: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_price_usd: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_start: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_end: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = e.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(wr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new wr();
            return wr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
          }
        }
        class fr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.appid || e.Sg(fr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    cheapest_package_id: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    cheapest_discount_id: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    cheapest_discount_name: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    package_original_price_usd: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discounted_price_usd: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_percentage: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_start: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_end: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    num_discounted_packages: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    modified_sales_rank: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = e.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(fr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new fr();
            return fr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
          }
        }
        class ur extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.account_id || e.Sg(ur.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    include_published: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = e.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(ur.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ur();
            return ur.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
          }
        }
        class Mr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.clans || e.Sg(Mr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: { clans: { n: 1, c: zr, r: !0, q: !0 } },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = e.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Mr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Mr();
            return Mr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
          }
        }
        class yr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.clan_account_id || e.Sg(yr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gid_clan_event: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    name: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    published: { n: 4, br: e.qM.readBool, bw: e.gp.writeBool },
                    start_time: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_time: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    external_sale_event_type: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = e.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(yr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new yr();
            return yr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
          }
        }
        class zr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.clan_account_id || e.Sg(zr.M()),
              a.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    clan_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_creator_home: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    sale_pages: { n: 4, c: yr, r: !0, q: !0 },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = e.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(zr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new zr();
            return zr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
          }
        }
        class jr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.partner_id || e.Sg(jr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    partner_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = e.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(jr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new jr();
            return jr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
          }
        }
        class Wr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.advertising_apps || e.Sg(Wr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: { advertising_apps: { n: 1, c: hr, r: !0, q: !0 } },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = e.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Wr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Wr();
            return Wr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
          }
        }
        class hr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.appid || e.Sg(hr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    app_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    itemid: { n: 3, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = e.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(hr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new hr();
            return hr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
          }
        }
        class Tr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.spotlight_due_date || e.Sg(Tr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    spotlight_due_date: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    marketing_message_due_date: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_event_due_date: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = e.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Tr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Tr();
            return Tr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionRequirements";
          }
        }
        class L extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.inviteid || e.Sg(L.M()),
              a.Message.initialize(this, r, 0, -1, [16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    invite_account: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtinvitetime: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtexpiretime: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    type: { n: 6, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    accept_account: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtaccepttime: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtdatechosen: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_eventid: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    packageid: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    primary_partnerid: {
                      n: 13,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    deadlines: { n: 14, c: Tr },
                    notify_partner: {
                      n: 15,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    additional_email: {
                      n: 16,
                      r: !0,
                      q: !0,
                      br: e.qM.readString,
                      bw: e.gp.writeRepeatedString,
                    },
                    promotion_id: {
                      n: 17,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    cancelled: { n: 18, br: e.qM.readBool, bw: e.gp.writeBool },
                    rtime32_cancel_time: {
                      n: 19,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    require_sale_page: {
                      n: 20,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    require_sale_page_type: {
                      n: 21,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    admin_notes: {
                      n: 22,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_notes: {
                      n: 23,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = e.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(L.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new L();
            return L.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(L.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(L.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvitation";
          }
        }
        class Or extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.invite || e.Sg(Or.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    invite: { n: 1, c: L },
                    queue_email_to_send: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = e.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Or.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Or();
            return Or.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_SetInvite_Request";
          }
        }
        class xr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.inviteid || e.Sg(xr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = e.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(xr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new xr();
            return xr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_SetInvite_Response";
          }
        }
        class gr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.inviteid || e.Sg(gr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    partnerid: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    promotion_id: {
                      n: 6,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = e.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(gr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new gr();
            return gr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetInvite_Request";
          }
        }
        class Ur extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.invites || e.Sg(Ur.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: { invites: { n: 1, c: L, r: !0, q: !0 } },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = e.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Ur.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Ur();
            return Ur.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetInvite_Response";
          }
        }
        class Fr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.inviteid || e.Sg(Fr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    only_notify_additional_email: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = e.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Fr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Fr();
            return Fr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_ResendEmailInvite_Request";
          }
        }
        class ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ce.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ce();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ce();
            return ce.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_ResendEmailInvite_Response";
          }
        }
        class mr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.inviteid || e.Sg(mr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = e.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(mr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new mr();
            return mr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetEmailTargets_Request";
          }
        }
        class lr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.accountid || e.Sg(lr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    accountid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    partnerid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    email_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = e.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(lr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new lr();
            return lr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInviteReceive";
          }
        }
        class Nr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.targets || e.Sg(Nr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    targets: { n: 1, c: lr, r: !0, q: !0 },
                    additional_email_address: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readString,
                      bw: e.gp.writeRepeatedString,
                    },
                    valve_account_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    operation_email: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = e.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Nr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Nr();
            return Nr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetEmailTargets_Response";
          }
        }
        class Vr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.inviteid || e.Sg(Vr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    rtdatechosen: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_days: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_info: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    skip_discount_event: {
                      n: 5,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = e.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Vr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Vr();
            return Vr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_AcceptInvite_Request";
          }
        }
        class Hr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.gid || e.Sg(Hr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    gid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Hr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Hr();
            return Hr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_AcceptInvite_Response";
          }
        }
        class Lr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.inviteid || e.Sg(Lr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = e.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Lr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Lr();
            return Lr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_CancelInvite_Request";
          }
        }
        class be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return be.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new be();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new be();
            return be.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_CancelInvite_Response";
          }
        }
        class $r extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.opt_in_name || e.Sg($r.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_id: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = e.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT($r.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new $r();
            return $r.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj($r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0($r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionStats_GetOptInDemoStats_Request";
          }
        }
        class kr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.stats || e.Sg(kr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    stats: { n: 1, c: Zr, r: !0, q: !0 },
                    appid_without_permissions: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = e.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(kr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new kr();
            return kr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionStats_GetOptInDemoStats_Response";
          }
        }
        class Zr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.appid || e.Sg(Zr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    demo_appid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rt_start_time: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rt_end_time: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    demo_player_count: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    wishlist_count: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    player_wishlist_count: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rt_last_update_time: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    fest_page_views: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    fest_period_page_views: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = e.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Zr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Zr();
            return Zr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
          }
        }
        var We;
        ((B) => {
          function r(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.CreatePlan#1",
              (0, z.I8)(F, d, f),
              m,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          B.CreatePlan = r;
          function t(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, z.I8)(F, d, f),
              m,
              { ePrivilege: 1 },
            );
          }
          B.CreateTentativePlan = t;
          function s(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, z.I8)(g, d, f),
              _r,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          B.UpdatePlan = s;
          function u(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, z.I8)(g, d, f),
              _r,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          B.UpdatePlanPartnerInfo = u;
          function y(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, z.I8)(g, d, f),
              _r,
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.UpdatePlanInputData = y;
          function T(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, z.I8)(E, d, f),
              te,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          B.DeletePlan = T;
          function M(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, z.I8)($, d, f),
              k,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetPlan = M;
          function h(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, z.I8)(ee, d, f),
              Z,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetAllActivePlan = h;
          function O(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, z.I8)(Q, d, f),
              X,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetPlanCompletedInDateRange = O;
          function Ir(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, z.I8)(Y, d, f),
              J,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetPlanByAssociationID = Ir;
          function Pr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, z.I8)(K, d, f),
              S,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetPlansUpdatedSince = Pr;
          function qr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, z.I8)(D, d, f),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.SearchPlan = qr;
          function Jr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, z.I8)(I, d, f),
              q,
              {
                bConstMethod: !0,
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetAllPlansForApps = Jr;
          function Ar(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, z.I8)(p, d, f),
              G,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          B.GetPlanByInputAccessKey = Ar;
          function Cr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, z.I8)(R, d, f),
              ie,
              { ePrivilege: 1 },
            );
          }
          B.MarkLocalizationAssetComplete = Cr;
          function j(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, z.I8)(C, d, f),
              se,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          B.SendNotification = j;
          function Sr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, z.I8)(n, d, f),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetSentNotification = Sr;
          function nr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, z.I8)(o, d, f),
              ae,
              { ePrivilege: 1 },
            );
          }
          B.ResendNotification = nr;
          function Kr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, z.I8)(rr, d, f),
              Be,
              { ePrivilege: 1 },
            );
          }
          B.SetPromotionEmailTarget = Kr;
          function x(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, z.I8)(ir, d, f),
              sr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetPromotionPlanSalesDaily = x;
          function Xr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, z.I8)(V, d, f),
              cr,
              {
                bConstMethod: !0,
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetPromotionPlanForSalePages = Xr;
          function Er(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, z.I8)(er, d, f),
              tr,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          B.CreateSalePageForPromo = Er;
          function Dr(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, z.I8)(br, d, f),
              dr,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          B.GetUpcomingScheduledDiscounts = Dr;
          function or(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, z.I8)(ur, d, f),
              Mr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetSalePageCandidatesForPromo = or;
          function fe(c, d, f) {
            return c.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, z.I8)(jr, d, f),
              Wr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetAdvertisingAppsForPartner = fe;
        })(We || (We = {}));
        var le;
        ((B) => {
          function r(M, h, O) {
            return M.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, z.I8)(Or, h, O),
              xr,
              { ePrivilege: 4 },
            );
          }
          B.SetInvite = r;
          function t(M, h, O) {
            return M.SendMsg(
              "PromotionEventInvites.GetInvite#1",
              (0, z.I8)(gr, h, O),
              Ur,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetInvite = t;
          function s(M, h, O) {
            return M.SendMsg(
              "PromotionEventInvites.AcceptInvite#1",
              (0, z.I8)(Vr, h, O),
              Hr,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          B.AcceptInvite = s;
          function u(M, h, O) {
            return M.SendMsg(
              "PromotionEventInvites.CancelInvite#1",
              (0, z.I8)(Lr, h, O),
              be,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          B.CancelInvite = u;
          function y(M, h, O) {
            return M.SendMsg(
              "PromotionEventInvites.ResendEmailInvite#1",
              (0, z.I8)(Fr, h, O),
              ce,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          B.ResendEmailInvite = y;
          function T(M, h, O) {
            return M.SendMsg(
              "PromotionEventInvites.GetEmailTargets#1",
              (0, z.I8)(mr, h, O),
              Nr,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          B.GetEmailTargets = T;
        })(le || (le = {}));
        var Ne;
        ((B) => {
          function r(t, s, u) {
            return t.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, z.I8)($r, s, u),
              kr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          B.GetOptInDemoStats = r;
        })(Ne || (Ne = {}));
        var De = w(80902),
          ve = w(3685),
          Ie = w(60298),
          qe = w(98609),
          Ve = w(67705);
        function Ae() {
          const B = (0, Ve.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          return B
            ? (0, Ie.p)(
                new ve.D(qe.TS.WEBAPI_BASE_URL, B),
              ).GetServiceTransport()
            : ((0, Ee.wT)(
                !1,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              null);
        }
        function pe(B, r) {
          const [t] = (0, Yr.useState)(() => Ae());
          return (0, De.I)({
            queryKey: ["usePromotionPlanBySalePage", r],
            queryFn: async () => {
              if (!t) return null;
              const u = z.w.Init(V),
                y = new H();
              y.set_clan_account_id(B),
                y.set_gid_clan_event(r),
                u.Body().add_request_list(y);
              const T = await We.GetPromotionPlanForSalePages(t, u);
              if (T.GetEResult() != me.R)
                throw new Error(
                  `Error from PromotionPlanBySalePage: ${T.GetEResult()}`,
                );
              return T.Body()
                .plans()
                .map((M) => M.promotion_id());
            },
            placeholderData: null,
            enabled: !!t,
          }).data;
        }
        var he = w(16412),
          He = w(96538),
          re = w(18210),
          Ge = w(56330),
          Te = w.n(Ge),
          Re = w(85599),
          de = w(3166),
          Le = w(34592),
          ue = w(72609),
          Ce = w(51614);
        async function ne(B) {
          const {
            clanAccountID: r,
            forumType: t,
            forumGID: s,
            forumTopicGID: u,
            signal: y,
          } = B;
          let T =
            ue.TS.COMMUNITY_BASE_URL + "forum/" + r + "/" + t + "/deletetopic/";
          s != null && s != "" && (T += s + "/");
          const M = new FormData();
          M.append("sessionid", (0, Ve.KC)()), M.append("gidforumtopic", u);
          const h = await fetch(T, {
            method: "POST",
            body: M,
            credentials: "include",
            signal: y,
          });
          if (!h.ok) throw new Error(`${T} answered ${h.status}`);
          const O = await h.json();
          if (O.success != me.R) throw O;
          return O;
        }
        function Pe() {
          return (0, Ce.n)({ mutationFn: (B) => ne(B) });
        }
        let $e = 0;
        function _e(B) {
          const {
              closeModal: r,
              eventModel: t,
              onDeleteSuccessAndCloseDialog: s,
              bNoConfirmationNeeded: u,
              partnerEventStore: y,
            } = B,
            [T, M] = (0, Yr.useState)(u ? "waiting" : "confirmation"),
            [h, O] = (0, Yr.useState)({}),
            [Ir, Pr] = (0, Yr.useState)(!1),
            qr = (0, Yr.useRef)(void 0),
            Jr = (0, Yr.useMemo)(() => new AbortController(), []);
          Yr.useEffect(() => () => Jr.abort(), [Jr]);
          const { mutate: Ar } = Pe(),
            Cr = (0, Yr.useCallback)(() => {
              y.ResetModel();
              const Er = qr.current?.forumTopicGID;
              Ir && Er && qr.current
                ? Ar(
                    {
                      clanAccountID: qr.current.clanAccountID,
                      forumType: "Event",
                      forumTopicGID: Er,
                      signal: Jr.signal,
                    },
                    {
                      onSuccess: () => M("success"),
                      onError: (Dr) => {
                        O((0, Le.H)(Dr)), M("failed_thread_delete");
                      },
                    },
                  )
                : M("success");
            }, [y, Ir, Ar, Jr]),
            j = (0, Yr.useCallback)((Er) => {
              O((0, Le.H)(Er)), M("error");
            }, []),
            Sr = (0, Yr.useCallback)(() => {
              const Er = t.clanSteamID,
                Dr = t.GID,
                or = t.AnnouncementGID;
              (qr.current = {
                clanAccountID: Er.GetAccountID(),
                forumTopicGID: t.forumTopicGID,
              }),
                !t.bOldAnnouncement && Dr && Dr != "0" && Dr != je.kFb
                  ? (M("waiting"), y.DeleteClanEvent(Er, Dr).then(Cr).catch(j))
                  : t.bOldAnnouncement && or
                    ? (M("waiting"),
                      y.DeleteOldAnnouncement(Er, or).then(Cr).catch(j))
                    : (y.ResetModel(), M("success"));
            }, [t, y, Cr, j]),
            nr = (0, Yr.useRef)(!1);
          Yr.useEffect(() => {
            u && !nr.current && ((nr.current = !0), Sr());
          }, [u, Sr]);
          let Kr = r,
            x = "";
          const Xr = new Array();
          switch (T) {
            case "confirmation":
              const Er = t.GetNameWithFallback((0, je.sfN)(de.TS.LANGUAGE)),
                Dr = t.BIsVisibleEvent()
                  ? "#EventDisplay_AreYouSure_Visible"
                  : "#EventDisplay_AreYouSure";
              (x = (0, re.we)(Dr, Er ?? "")),
                (Kr = Sr),
                t.BHasForumTopicGID() &&
                  Xr.push(
                    (0, b.jsxs)(
                      "div",
                      {
                        className: Te().Padding,
                        children: [
                          (0, b.jsx)("input", {
                            type: "checkbox",
                            id: "del_cmt_post",
                            name: "del_cmt_post",
                            defaultChecked: Ir,
                            onChange: () => Pr(!Ir),
                          }),
                          (0, b.jsx)("label", {
                            htmlFor: "del_cmt_post",
                            children: (0, re.we)(
                              "#EventDisplay_DeleteEvent_Comment",
                            ),
                          }),
                        ],
                      },
                      "WantToDeleteCmtThread",
                    ),
                  );
              break;
            case "waiting":
              (x = (0, re.we)("#EventDisplay_DeleteEvent_InProgress")),
                Xr.push((0, b.jsx)(Re.t, {}, "throbber"));
              break;
            case "error":
              (x = (0, re.we)("#EventDisplay_DeleteEvent_Error")),
                Xr.push(
                  (0, b.jsx)(
                    "div",
                    { className: Te().ErrorStyles, children: h.strErrorMsg },
                    "deleteerror_" + ++$e,
                  ),
                );
              break;
            case "failed_thread_delete":
              (x = (0, re.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                Xr.push(
                  (0, b.jsx)(
                    "div",
                    { className: Te().ErrorStyles, children: h.strErrorMsg },
                    "deleteerror_" + ++$e,
                  ),
                ),
                s &&
                  (Kr = () => {
                    s?.(), r?.();
                  });
              break;
            case "success":
              (x = (0, re.we)("#EventDisplay_DeleteEvent_Success")),
                s &&
                  (Kr = () => {
                    s?.(), r?.();
                  });
              break;
          }
          return (0, b.jsx)(He.o0, {
            strTitle: (0, re.we)("#EventDisplay_DeleteEvent"),
            strDescription: x,
            onCancel: r,
            onOK: Kr,
            bAlertDialog: T != "confirmation",
            bOKDisabled: T == "waiting",
            bDestructiveWarning: T == "error",
            children: Xr,
          });
        }
        var pr = w(56492),
          oe = w(50974),
          rt = w(36631),
          Gr = w(39905),
          et = w(25792),
          Oe = w(90316),
          Qr = w.n(Oe),
          we = w(95695),
          Rr = w.n(we),
          ke = w(36118),
          Ze = w(71421),
          vr = w(36707),
          tt = w(30096);
        function it(B) {
          const {
              eventModel: r,
              permissions: t,
              bIsCreatorHomeVisible: s,
              additionalButtons: u,
              onDeleteRequest: y,
              saleDayControl: T,
              promotionPlanLinks: M,
              testControls: h,
              bSupportsSticky: O = !1,
            } = B,
            Ir = (0, de.Qn)(),
            Pr = (0, rt.MU)(),
            [qr, Jr, Ar, Cr] = (0, ye.q3)(() => [
              r.visibility_state,
              r.jsondata.bSaleEnabled,
              r.GID,
              r.clanSteamID.GetAccountID(),
            ]),
            [j, Sr] = Yr.useState(O),
            { bVisible: nr, ref: Kr } = (0, tt.hd)();
          if (!(t?.can_edit || t?.support_user) || Ir)
            return (0, b.jsx)("span", {});
          const x = (0, de.yK)(),
            Xr = x == "community",
            Er = x == "store",
            Dr = !!t.support_user,
            or = Qe(t),
            fe = j && !nr,
            c = r.GetEventType() == je.ajI,
            d =
              (qr == ze.zv.k_EEventStateVisible ||
                qr == ze.zv.k_EEventStateUnlisted) &&
              (!c || s),
            f = qr == ze.zv.k_EEventStateStaged;
          return (0, b.jsxs)(et.tH, {
            children: [
              (0, b.jsx)("div", {
                className: (0, vr.A)(
                  Qr().DisplayAdminPanel_TopSpacer,
                  fe && Qr().Sticky,
                ),
              }),
              (0, b.jsxs)("div", {
                className: (0, vr.A)({
                  [Qr().DisplayAdminPanel]: !0,
                  [Qr().Locked]: Xr,
                  [Qr().Sticky]: fe,
                }),
                children: [
                  (0, b.jsx)("span", {
                    className: Qr().DisplayAdminPanel_Title,
                    children: Gr.Z.Localize("#EventDisplay_Admin_Title"),
                  }),
                  (0, b.jsxs)("div", {
                    className: (0, vr.A)(
                      Qr().DisplayAdminPanel_ctn,
                      fe && Qr().Sticky,
                    ),
                    children: [
                      u,
                      u &&
                        (0, b.jsx)("span", {
                          className: Qr().DisplayAdminPanel_Spacer,
                          children: " ",
                        }),
                      (0, b.jsx)(pr.tj, {
                        eventModel: r,
                        route: pr.PH.k_eCommunityEdit,
                        className: (0, vr.A)(Rr().Button, Qr().AdminButton),
                        children: c
                          ? Gr.Z.Localize("#EventEditor_Edit_Page")
                          : Gr.Z.Localize("#EventEditor_Edit"),
                      }),
                      y &&
                        (0, b.jsx)("span", {
                          className: Rr().Button + " " + Qr().AdminButton,
                          role: "button",
                          tabIndex: 0,
                          onClick: y,
                          onKeyDown: xe(y),
                          children: Gr.Z.Localize("#EventDisplay_DeleteEvent"),
                        }),
                      !d &&
                        (0, b.jsx)(Yr.Fragment, {
                          children: (0, b.jsx)(pr.tj, {
                            eventModel: r,
                            route: pr.PH.k_eCommunityPublish,
                            className: (0, vr.A)(Rr().Button, Qr().AdminButton),
                            children: Gr.Z.Localize(
                              f
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish",
                            ),
                          }),
                        }),
                      (0, b.jsx)(pr.tj, {
                        eventModel: r,
                        route: pr.PH.k_eCommunityAdminPage,
                        className: (0, vr.A)(Rr().Button, Qr().AdminButton),
                        children: Gr.Z.Localize("#EventDisplay_Events"),
                      }),
                      T,
                      !!(Jr && Pr && !c) &&
                        (0, b.jsx)(pr.tj, {
                          eventModel: r,
                          route: pr.PH.k_eStoreSalePage,
                          className: (0, vr.A)(Rr().Button, Qr().AdminButton),
                          children: Gr.Z.Localize("#EventDisplay_SalesPage"),
                        }),
                      !!(Jr && Dr && Ar) &&
                        (0, b.jsx)("a", {
                          href:
                            ue.TS.STATS_BASE_URL +
                            "sales/details/?gid=" +
                            Ar +
                            "&clanid=" +
                            Cr,
                          target: ue.TS.IN_CLIENT ? "" : "_blank",
                          rel: "noreferrer",
                          className: (0, vr.A)(
                            Rr().Button,
                            Qr().AdminButton,
                            Rr().ValveOnlyBackground,
                          ),
                          children: Gr.Z.Localize("#EventDisplay_StatsPage"),
                        }),
                      !!(Jr && Dr && Ar && !c) &&
                        (0, b.jsx)("a", {
                          href:
                            ue.TS.PARTNER_BASE_URL +
                            "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                            Ar +
                            "&saleclanaccountid=" +
                            Cr,
                          target: ue.TS.IN_CLIENT ? "" : "_blank",
                          rel: "noreferrer",
                          className: (0, vr.A)(
                            Rr().Button,
                            Qr().AdminButton,
                            Rr().ValveOnlyBackground,
                          ),
                          children: Gr.Z.Localize(
                            "#EventDisplay_InvitationPlannerPage",
                          ),
                        }),
                      M,
                      !!(
                        Jr &&
                        or &&
                        oe.bv == Cr &&
                        r.GetContentHubCategory()
                      ) &&
                        (0, b.jsx)("a", {
                          href: `${ue.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${r.GetContentHubCategory()}`,
                          target: ue.TS.IN_CLIENT ? "" : "_blank",
                          rel: "noreferrer",
                          className: (0, vr.A)(
                            Rr().Button,
                            Qr().AdminButton,
                            Rr().ValveOnlyBackground,
                          ),
                          children: Gr.Z.Localize(
                            "#EventDisplay_CategoryEditor",
                          ),
                        }),
                      !!(d && (Er || (Pr && !Xr))) &&
                        (0, b.jsx)(pr.tj, {
                          eventModel: r,
                          route: Jr
                            ? pr.PH.k_eCommunityPreviewSale
                            : pr.PH.k_eCommunityView,
                          className: (0, vr.A)(Rr().Button, Qr().AdminButton),
                          children: Gr.Z.Localize(
                            Jr
                              ? "#EventDisplay_PreviewOnCommunity"
                              : "#EventDisplay_ViewOnCommunity",
                          ),
                        }),
                      !!(d && Xr) &&
                        (0, b.jsx)(pr.tj, {
                          eventModel: r,
                          route: pr.PH.k_eStoreView,
                          className: (0, vr.A)(Rr().Button, Qr().AdminButton),
                          children: Gr.Z.Localize("#EventDisplay_ViewOnStore"),
                        }),
                      h,
                      fe &&
                        (0, b.jsx)("div", {
                          className: Qr().DisplayAdminPanelClose,
                          role: "button",
                          tabIndex: 0,
                          onClick: () => Sr(!1),
                          onKeyDown: xe(() => Sr(!1)),
                          children: (0, b.jsx)(Ze.Gq, {
                            toolTipContent: Gr.Z.Localize(
                              "#EventDisplay_Admin_Close_ttip",
                            ),
                            children: (0, b.jsx)(ke.X, {}),
                          }),
                        }),
                      !j &&
                        O &&
                        (0, b.jsx)("div", {
                          className: Qr().DisplayAdminPanelClose,
                          role: "button",
                          tabIndex: 0,
                          onClick: () => Sr(!0),
                          onKeyDown: xe(() => Sr(!0)),
                          children: (0, b.jsx)(Ze.Gq, {
                            toolTipContent: Gr.Z.Localize(
                              "#EventDisplay_Admin_Reopen_ttip",
                            ),
                            children: (0, b.jsx)(ke.i3G, { angle: 0 }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: Qr().DisplayAdminPanelMarker,
                ref: Kr,
              }),
            ],
          });
        }
        function xe(B) {
          return (r) => {
            (r.key === "Enter" || r.key === " ") && (r.preventDefault(), B(r));
          };
        }
        function Qe(B) {
          return !!(B?.support_user && B?.valve_admin);
        }
        var Xe = w(88003),
          Ye = w(82734),
          st = w(14947),
          Me = w(39153),
          at = w(75565),
          ge = w(54622),
          Bt = w(6881),
          ct = w(75233);
        function bt(B) {
          const { eventModel: r } = B,
            t = (0, ye.q3)(() => r.jsondata.sale_sections);
          return (0, Yr.useMemo)(
            () =>
              t?.some(
                (u) =>
                  (u.section_type == "quiz" &&
                    u.quiz?.track_with_cozy_cottage_doors) ||
                  u.section_type == "quest" ||
                  u.section_type == "rewards",
              ),
            [t],
          )
            ? (0, b.jsx)(wt, { ...B })
            : null;
        }
        function dt(B, r) {
          if (B && B.section_type == "rewards") {
            const t = B.rewards?.reward_items?.filter(
              (s) => s.item_bucket == r,
            );
            if (t && t.length > 0)
              return t.map((u) => ({
                appid: u.appid,
                item_type: u.community_item_type,
                amount: "1",
              }));
          }
          return [];
        }
        const Ue = "Answered as: ";
        function Je(B) {
          return typeof B == "string" ? B : "";
        }
        function wt(B) {
          const { eventModel: r } = B,
            [t, s] = (0, Yr.useState)(!1),
            u = (0, Me.Tn)(),
            y = (0, ct.jE)(),
            T = (0, Me.Um)();
          if (
            ((0, Yr.useEffect)(() => {
              (0, Me.Nb)(y).then(() => s(!0));
            }, [y]),
            !t)
          )
            return null;
          const M = r.GetSaleSectionsByType("quiz"),
            h = M.length > 0 ? M[0].quiz : void 0,
            O = h?.answer_categories ?? [],
            Ir = [],
            Pr = M.length > 0 ? M[0].unique_id : void 0,
            qr =
              M.length == 1 &&
              (h?.quiz_type == "scenario" || h?.quiz_type == "branching") &&
              O.length > 0;
          if (qr)
            Ir.push({ label: "State: Reset the Quiz", data: -1 }),
              Ir.push(
                ...O.map((j) => ({
                  label: Ue + j.category_name,
                  data: j.door_index ?? 0,
                })),
              ),
              Ir.push(
                ...O.map((j) => ({
                  label: "Rewarded as: " + j.category_name,
                  data: j.door_index ?? 0,
                })),
              );
          else
            for (let j = -1; j <= at.F; ++j)
              Ir.push({ label: "Doors Opened " + (j + 1), data: j });
          const Jr = r.GetSaleSectionsByType("rewards"),
            Ar = Jr.length > 0 ? Jr[0] : void 0,
            Cr = Ar?.rewards?.reward_items ?? [];
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)("a", {
                className: (0, vr.A)(we.Button, Oe.AdminButton),
                onClick: (j) => {
                  (0, Xe.pg)(
                    (0, b.jsx)(He.o0, {
                      strTitle: (0, re.we)("#Dialog_AreYouSure"),
                      strDescription:
                        "Reload page after you hit OK; will not grant virtual reward items a second itme",
                      onOK: () => T(de.UF.CLANACCOUNTID),
                    }),
                    (0, Ye.uX)(j) ?? window,
                  );
                },
                children: "Reset All Doors",
              }),
              (0, b.jsx)(he.m, {
                strDropDownClassName: (0, vr.A)(we.DropDownScroll),
                rgOptions: Ir,
                selectedOption: u,
                label: "Minigame States:",
                onChange: (j) => {
                  const Sr = new Array();
                  if (qr)
                    (0, st.h5)(() => {
                      if (
                        ((0, Me.qn)(y, -1), (0, ge.LM)(y, Pr), j.data != -1)
                      ) {
                        const Kr = O.find((Xr) => Xr.door_index == j.data),
                          x = Kr?.category_id;
                        Kr &&
                          x !== void 0 &&
                          (h?.questions ?? [])
                            .filter((Xr) => (Xr.answers?.length ?? 0) > 0)
                            .forEach((Xr, Er) => {
                              const Dr = Xr.answers ?? [];
                              let or = Dr.findIndex((fe) =>
                                fe.category_ids?.includes(x),
                              );
                              or < 0 && (or = 0),
                                (0, ge.VX)(y, Pr, Er, Dr[or].category_ids),
                                (0, ge.xN)(y, Pr, Er, Dr[or]);
                            }),
                          Je(j.label).startsWith(Ue) ||
                            ((0, Me.kW)(y, 0, !0),
                            (0, Me.kW)(y, j.data, !0),
                            Sr.push(0),
                            Sr.push(j.data));
                      }
                    });
                  else {
                    for (let Kr = 0; Kr <= j.data; ++Kr) Sr.push(Kr);
                    (0, Me.qn)(y, j.data);
                  }
                  const nr = Cr[0]?.appid;
                  if (
                    Ar &&
                    nr !== void 0 &&
                    j.data > -1 &&
                    !Je(j.label).startsWith(Ue)
                  ) {
                    const Kr = Sr.map((Xr) => dt(Ar, Xr)).filter(Boolean),
                      x = new Array();
                    Kr.forEach((Xr) => x.push(...Xr)), (0, Bt._u)(y, nr, x);
                  }
                },
              }),
            ],
          });
        }
        var ft = w(85692),
          ut = w(60480);
        function Mt(B) {
          const {
              eventModel: r,
              partnerEventStore: t,
              addtionalAdminButtons: s,
              fnOnUpdateSaleDayIndex: u,
              bSupportsSticky: y = !1,
            } = B,
            [T, M] = Yr.useState(!1),
            h = (0, ye.q3)(() => yt(r)),
            [O, Ir] = Yr.useState(r ? r.GetDayIndexFromEventStart() : 0),
            [Pr, qr, Jr] = (0, ye.q3)(() => [
              r.jsondata.bSaleEnabled,
              r.GID,
              r.clanSteamID.GetAccountID(),
            ]),
            { data: Ar } = (0, Se.hM)(Jr),
            Cr = (x) => {
              t &&
                (0, Xe.pg)(
                  (0, b.jsx)(_e, {
                    eventModel: r,
                    onDeleteSuccessAndCloseDialog: () => M(!0),
                    partnerEventStore: t,
                  }),
                  (0, Ye.uX)(x) ?? window,
                );
            },
            j = (0, ft.ty)(),
            { creatorHome: Sr } = (0, ut.FV)(Jr);
          if (T)
            return (0, b.jsx)(pr.OG, {
              eventModel: r,
              route: pr.PH.k_eCommunityAdminPage,
            });
          if (j) return (0, b.jsx)("span", {});
          const nr = [];
          if (h !== void 0)
            for (let x = 0; x <= h; ++x)
              nr.push({
                label: (0, re.we)("#SalePage_Admin_SaleEventDay", x + 1),
                data: x,
              });
          const Kr = r.GetEventType() == je.ajI;
          return (0, b.jsx)(it, {
            eventModel: r,
            permissions: Ar,
            bIsCreatorHomeVisible: Kr && Sr?.GetLinkedEventGID() == r.GID,
            additionalButtons: s,
            onDeleteRequest: t && (0, de.yK)() == "community" ? Cr : void 0,
            saleDayControl:
              h !== void 0 &&
              nr.length > 0 &&
              (0, b.jsx)(he.m, {
                strDropDownClassName: we.DropDownScroll,
                rgOptions: nr,
                selectedOption: Math.min(h, O),
                onChange: (x) => {
                  Ir(x.data), u?.(x.data);
                },
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            promotionPlanLinks:
              !!(Pr && Qe(Ar)) &&
              qr !== void 0 &&
              (0, b.jsx)(Wt, { clanAccountID: Jr, gidClanEvent: qr }),
            testControls: (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(bt, { eventModel: r }),
                (0, b.jsx)(zt, { eventModel: r }),
              ],
            }),
            bSupportsSticky: y,
          });
        }
        function yt(B) {
          let r;
          if (B?.BHasSaleEnabled()) {
            B.GetSaleSectionCount() > 0 &&
              B.GetSaleSections().forEach((s) => {
                (0, ze.ye)(s.section_type) &&
                  !(0, ze.CU)(s) &&
                  s.capsules.forEach((u) => {
                    u.visibility_index !== void 0 &&
                      (r === void 0 || r < u.visibility_index) &&
                      (r = u.visibility_index);
                  });
              });
            const t = B.jsondata.sale_num_headers ?? 0;
            t > 1 && (r === void 0 || r < t) && (r = t);
          }
          return r;
        }
        function zt(B) {
          const { eventModel: r } = B,
            t = (0, ye.q3)(() => r.jsondata.sale_sections),
            s = (0, Yr.useMemo)(
              () => t?.find((u) => u.section_type == "badge_progress"),
              [t],
            );
          return s &&
            (s.badge_progress?.levels?.length ?? 0) > 0 &&
            de.iA.is_support
            ? (0, b.jsx)(jt, { section: s })
            : null;
        }
        function jt(B) {
          const { section: r } = B,
            t = (0, Fe.fy)(r.badge_progress?.event_badgeid),
            s = (0, ye.q3)(() => r.badge_progress?.levels),
            u = Math.max(...(s ?? []).map((T) => T.level ?? 0));
          if (!t) return null;
          const y = [];
          for (let T = 0; T <= u; ++T) y.push({ label: "Level " + T, data: T });
          return (0, b.jsx)(he.m, {
            strDropDownClassName: (0, vr.A)(
              we.DropDownScroll,
              we.ValveOnlyBackground,
            ),
            rgOptions: y,
            selectedOption: t.level,
            onChange: (T) =>
              (0, Fe.Du)({
                badgeid: r.badge_progress?.event_badgeid,
                level: T.data,
              }),
          });
        }
        function Wt(B) {
          const { clanAccountID: r, gidClanEvent: t } = B,
            s = pe(r, t);
          return s
            ? (0, b.jsx)(b.Fragment, {
                children: s.map((u) =>
                  (0, b.jsx)(
                    "a",
                    {
                      href: `${de.TS.PARTNER_BASE_URL}promotion/planning/edit/${u}`,
                      target: de.TS.IN_CLIENT ? "" : "_blank",
                      rel: "noreferrer",
                      className: (0, vr.A)(
                        we.Button,
                        Oe.AdminButton,
                        we.ValveOnlyBackground,
                      ),
                      children: (0, re.we)("#EventDisplay_PromotionEditor"),
                    },
                    u,
                  ),
                ),
              })
            : null;
        }
      },
    },
  ]);
})();

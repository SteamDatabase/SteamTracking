/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [24317],
    {
      24642: (Xe, ne, Z) => {
        Z.d(ne, { D: () => ae });
        var ie = Z(84346);
        function ae(a) {
          return a.toLocaleString((0, ie.J)());
        }
      },
      9591: (Xe, ne, Z) => {
        Z.d(ne, {
          RY: () => $e,
          Sm: () => Ze,
          bA: () => Je,
          pt: () => He,
          Pw: () => ae,
          Pk: () => ie,
          l3: () => se,
          a9: () => Ke,
        });
        var ie = {};
        Z.r(ie), Z.d(ie, { au: () => er });
        var ae = {};
        Z.r(ae),
          Z.d(ae, {
            Zp: () => nr,
            uz: () => sr,
            Ri: () => rr,
            BZ: () => ar,
            tN: () => ir,
            j3: () => tr,
          });
        var a = Z(80613),
          i = Z.n(a),
          r = Z(75245),
          J = Z(35038);
        const er = 0,
          et = 1,
          rt = 2,
          tt = 3,
          it = 4,
          at = 5,
          st = 6,
          nt = 7,
          ot = 8,
          lt = 9,
          mt = 10,
          ut = 11,
          dt = 12,
          ct = 13,
          yt = 14,
          wt = 15,
          gt = 16,
          Bt = 17,
          Rt = 18,
          ft = 19,
          pt = 20,
          bt = 21,
          Mt = 22,
          zt = 23,
          St = 24,
          qt = 25,
          Tt = 26,
          Ft = 27,
          Wt = 28,
          ht = 29,
          jt = 30,
          It = 31,
          Ct = 32,
          Lt = 33,
          Ot = 34,
          Ut = 35,
          rr = 0,
          tr = 1,
          ir = 2,
          ar = 3,
          sr = 4,
          nr = 5,
          or = 1,
          vt = 2;
        var lr = Object.defineProperty,
          mr = (o, e, t) =>
            e in o
              ? lr(o, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (o[e] = t),
          n = (o, e, t) => mr(o, typeof e != "symbol" ? e + "" : e, t);
        function Pt(o) {
          return "unknown ELoyaltyRewardAuditType ( " + o + " )";
        }
        function Et(o) {
          return "unknown ELoyaltyRewardDefinitionID ( " + o + " )";
        }
        function Gt(o) {
          return "unknown ELoyaltyRewardType ( " + o + " )";
        }
        function kt(o) {
          return "unknown ELoyaltyRewardPointTransferType ( " + o + " )";
        }
        function xt(o) {
          return "unknown ELoyaltyRewardReactionType ( " + o + " )";
        }
        function _t(o) {
          return "unknown ELoyaltyRewardReactionTargetType ( " + o + " )";
        }
        function Nt(o) {
          return "unknown ELoyaltyRewardsQuerySort ( " + o + " )";
        }
        function Dt(o) {
          return "unknown ELoyaltyRewardQueryFilter ( " + o + " )";
        }
        const oe = class d extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              d.prototype.steamid || r.Sg(d.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = r.w0(d.M())), d.sm_mbf;
          }
          toObject(e = !1) {
            return d.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(d.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(d.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new d();
            return d.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(d.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(d.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Request";
          }
        };
        n(oe, "sm_m"), n(oe, "sm_mbf");
        let He = oe;
        const le = class c extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              c.prototype.summary || r.Sg(c.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    summary: { n: 1, c: dr },
                    timestamp_updated: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    auditid_highwater: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = r.w0(c.M())), c.sm_mbf;
          }
          toObject(e = !1) {
            return c.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(c.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(c.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new c();
            return c.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(c.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(c.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Response";
          }
        };
        n(le, "sm_m"), n(le, "sm_mbf");
        let ur = le;
        const me = class y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.points || r.Sg(y.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    points: {
                      n: 1,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    points_earned: {
                      n: 2,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    points_spent: {
                      n: 3,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(y.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new y();
            return y.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(y.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(y.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Response_Summary";
          }
        };
        n(me, "sm_m"), n(me, "sm_mbf");
        let dr = me;
        const ue = class w extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.amount || r.Sg(w.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    amount: {
                      n: 1,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    ecurrency: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(w.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new w();
            return w.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(w.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(w.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetPointsForSpend_Request";
          }
        };
        n(ue, "sm_m"), n(ue, "sm_mbf");
        let cr = ue;
        const de = class g extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              g.prototype.points || r.Sg(g.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    points: {
                      n: 1,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(e = !1) {
            return g.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(g.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(g.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new g();
            return g.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(g.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(g.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetPointsForSpend_Response";
          }
        };
        n(de, "sm_m"), n(de, "sm_mbf");
        let yr = de;
        const ce = class B extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.defid || r.Sg(B.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    defid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    expected_points_cost: {
                      n: 2,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = r.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(B.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new B();
            return B.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(B.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(B.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPoints_Request";
          }
        };
        n(ce, "sm_m"), n(ce, "sm_mbf");
        let wr = ce;
        const ye = class R extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.defid || r.Sg(R.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    defid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    num_levels: {
                      n: 2,
                      d: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(R.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new R();
            return R.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(R.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(R.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
          }
        };
        n(ye, "sm_m"), n(ye, "sm_mbf");
        let gr = ye;
        const we = class f extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              f.prototype.defid || r.Sg(f.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    defid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    communityitemid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(e = !1) {
            return f.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(f.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(f.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new f();
            return f.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(f.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(f.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
          }
        };
        n(we, "sm_m"), n(we, "sm_mbf");
        let Br = we;
        const ge = class p extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.communityitemid || r.Sg(p.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    bundle_community_item_ids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(p.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new p();
            return p.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(p.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(p.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPoints_Response";
          }
        };
        n(ge, "sm_m"), n(ge, "sm_mbf");
        let Be = ge;
        const Re = class b extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.customization_type || r.Sg(b.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(b.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new b();
            return b.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(b.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(b.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
          }
        };
        n(Re, "sm_m"), n(Re, "sm_mbf");
        let Rr = Re;
        const fe = class M extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.purchaseid || r.Sg(M.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    purchaseid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = r.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(M.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new M();
            return M.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(M.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(M.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
          }
        };
        n(fe, "sm_m"), n(fe, "sm_mbf");
        let fr = fe;
        const pe = class z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.customization_type || r.Sg(z.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    new_level: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(z.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new z();
            return z.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(z.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(z.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
          }
        };
        n(pe, "sm_m"), n(pe, "sm_mbf");
        let pr = pe;
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
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
            let t = new (i().BinaryReader)(e),
              s = new Y();
            return Y.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
          }
        }
        const be = class S extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.serial_number || r.Sg(S.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(S.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new S();
            return S.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(S.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(S.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
          }
        };
        n(be, "sm_m"), n(be, "sm_mbf");
        let br = be;
        const Me = class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.granted_profile_modifier || r.Sg(q.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    granted_profile_modifier: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(q.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new q();
            return q.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(q.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(q.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
          }
        };
        n(Me, "sm_m"), n(Me, "sm_mbf");
        let Mr = Me;
        const ze = class T extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.target_type || r.Sg(T.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    target_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    targetid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    reactionid: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = r.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(T.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new T();
            return T.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(T.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(T.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Request";
          }
        };
        n(ze, "sm_m"), n(ze, "sm_mbf");
        let $e = ze;
        class V extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
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
            let t = new (i().BinaryReader)(e),
              s = new V();
            return V.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Response";
          }
        }
        const Se = class F extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.target_type || r.Sg(F.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    target_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    targetid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(F.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new F();
            return F.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(F.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(F.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactions_Request";
          }
        };
        n(Se, "sm_m"), n(Se, "sm_mbf");
        let Je = Se;
        const qe = class W extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.reactionids || r.Sg(W.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    reactionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = r.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(W.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new W();
            return W.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(W.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(W.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactions_Response";
          }
        };
        n(qe, "sm_m"), n(qe, "sm_mbf");
        let zr = qe;
        const Te = class h extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              h.prototype.steamid || r.Sg(h.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = r.w0(h.M())), h.sm_mbf;
          }
          toObject(e = !1) {
            return h.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(h.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(h.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new h();
            return h.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(h.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(h.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
          }
        };
        n(Te, "sm_m"), n(Te, "sm_mbf");
        let Sr = Te;
        const Fe = class j extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.total || r.Sg(j.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
          }
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    total: { n: 1, c: te, r: !0, q: !0 },
                    user_reviews: { n: 2, c: te, r: !0, q: !0 },
                    ugc: { n: 3, c: te, r: !0, q: !0 },
                    profile: { n: 4, c: te, r: !0, q: !0 },
                    forum_topics: { n: 5, c: te, r: !0, q: !0 },
                    comments: { n: 6, c: te, r: !0, q: !0 },
                    total_given: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_received: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_points_given: {
                      n: 9,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    total_points_received: {
                      n: 10,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(j.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new j();
            return j.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(j.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(j.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
          }
        };
        n(Fe, "sm_m"), n(Fe, "sm_mbf");
        let qr = Fe;
        const We = class I extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.reactionid || r.Sg(I.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    reactionid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    given: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    received: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    points_given: {
                      n: 4,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    points_received: {
                      n: 5,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    purchaseable: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(I.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new I();
            return I.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(I.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(I.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
          }
        };
        n(We, "sm_m"), n(We, "sm_mbf");
        let te = We;
        const he = class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.elanguage || r.Sg(C.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(C.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new C();
            return C.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(C.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(C.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Request";
          }
        };
        n(he, "sm_m"), n(he, "sm_mbf");
        let Ze = he;
        const je = class L extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.reactions || r.Sg(L.M()),
              a.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: { reactions: { n: 3, c: Fr, r: !0, q: !0 } },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = r.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(L.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new L();
            return L.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(L.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(L.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Response";
          }
        };
        n(je, "sm_m"), n(je, "sm_mbf");
        let Tr = je;
        const Ie = class O extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.reactionid || r.Sg(O.M()),
              a.Message.initialize(this, e, 0, -1, [4, 5], null);
          }
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    reactionid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    points_cost: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    points_transferred: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    valid_target_types: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    valid_ugc_types: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    purchaseable: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    localized_title: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    localized_desc: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    available_until: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = r.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(O.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new O();
            return O.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(O.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(O.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
          }
        };
        n(Ie, "sm_m"), n(Ie, "sm_mbf");
        let Fr = Ie;
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new X();
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new X();
            return X.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
          }
        }
        const Ce = class U extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.points_cost || r.Sg(U.M()),
              a.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    points_cost: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    upgrade_points_cost: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    purchasable_customization_types: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    upgradable_customization_types: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    max_slots_per_type: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    max_upgradable_level: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(U.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new U();
            return U.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(U.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(U.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
          }
        };
        n(Ce, "sm_m"), n(Ce, "sm_mbf");
        let Wr = Ce;
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ee();
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new ee();
            return ee.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Request";
          }
        }
        const Le = class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              v.prototype.apps || r.Sg(v.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: { apps: { n: 1, c: jr, r: !0, q: !0 } },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = r.w0(v.M())), v.sm_mbf;
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(v.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(v.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new v();
            return v.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(v.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(v.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Response";
          }
        };
        n(Le, "sm_m"), n(Le, "sm_mbf");
        let hr = Le;
        const Oe = class P extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.appid || r.Sg(P.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    has_items_anyone_can_purchase: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    event_app: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                    hero_carousel_image: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    owned: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(P.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new P();
            return P.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(P.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(P.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
          }
        };
        n(Oe, "sm_m"), n(Oe, "sm_mbf");
        let jr = Oe;
        const Ue = class E extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              E.prototype.appid || r.Sg(E.M()),
              a.Message.initialize(this, e, 0, -1, [15], null);
          }
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    defid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    community_item_class: {
                      n: 4,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    community_item_type: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    point_cost: {
                      n: 6,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    timestamp_created: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_available: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_available_end: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    quantity: {
                      n: 10,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    internal_description: {
                      n: 11,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    active: { n: 12, br: r.qM.readBool, bw: r.gp.writeBool },
                    community_item_data: { n: 13, c: Ir },
                    bundle_defids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    usable_duration: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    bundle_discount: {
                      n: 17,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_free_until: {
                      n: 18,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = r.w0(E.M())), E.sm_mbf;
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(E.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(E.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new E();
            return E.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(E.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(E.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition";
          }
        };
        n(Ue, "sm_m"), n(Ue, "sm_mbf");
        let se = Ue;
        const ve = class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.item_name || r.Sg(G.M()),
              a.Message.initialize(this, e, 0, -1, [9], null);
          }
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    item_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_title: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_description: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_small: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_large: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_webm: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 11,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    animated: { n: 8, br: r.qM.readBool, bw: r.gp.writeBool },
                    badge_data: { n: 9, c: Cr, r: !0, q: !0 },
                    profile_theme_id: {
                      n: 12,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    tiled: { n: 13, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(G.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new G();
            return G.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(G.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(G.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition_CommunityItemData";
          }
        };
        n(ve, "sm_m"), n(ve, "sm_mbf");
        let Ir = ve;
        const Pe = class k extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.level || r.Sg(k.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    level: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    image: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(k.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new k();
            return k.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(k.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(k.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition_BadgeData";
          }
        };
        n(Pe, "sm_m"), n(Pe, "sm_mbf");
        let Cr = Pe;
        const Ee = class x extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.bonusid || r.Sg(x.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    bonusid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    active: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                    points: { n: 4, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    timestamp_start: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_end: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    internal_description: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = r.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(x.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new x();
            return x.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(x.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(x.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardPurchaseBonus";
          }
        };
        n(Ee, "sm_m"), n(Ee, "sm_mbf");
        let Lr = Ee;
        class re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
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
            let t = new (i().BinaryReader)(e),
              s = new re();
            return re.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
          }
        }
        const Ge = class _ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.bonuses || r.Sg(_.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { bonuses: { n: 1, c: Lr, r: !0, q: !0 } },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = r.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(_.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new _();
            return _.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(_.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(_.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
          }
        };
        n(Ge, "sm_m"), n(Ge, "sm_mbf");
        let Or = Ge;
        const ke = class N extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.appids || r.Sg(N.M()),
              a.Message.initialize(
                this,
                e,
                0,
                -1,
                [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
                null,
              );
          }
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    time_available: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    community_item_classes: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readInt32,
                      pbr: r.qM.readPackedInt32,
                      bw: r.gp.writeRepeatedInt32,
                    },
                    language: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    count: { n: 5, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    cursor: { n: 6, br: r.qM.readString, bw: r.gp.writeString },
                    sort: {
                      n: 7,
                      d: or,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    sort_descending: {
                      n: 8,
                      d: !0,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    reward_types: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    excluded_community_item_classes: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: r.qM.readInt32,
                      pbr: r.qM.readPackedInt32,
                      bw: r.gp.writeRepeatedInt32,
                    },
                    definitionids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    filters: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    filter_match_all_category_tags: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    filter_match_any_category_tags: {
                      n: 14,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    contains_definitionids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    include_direct_purchase_disabled: {
                      n: 16,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    excluded_content_descriptors: {
                      n: 17,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    excluded_appids: {
                      n: 18,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    excluded_store_tagids: {
                      n: 19,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    store_tagids: {
                      n: 20,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    search_term: {
                      n: 21,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(N.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new N();
            return N.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(N.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(N.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_QueryRewardItems_Request";
          }
        };
        n(ke, "sm_m"), n(ke, "sm_mbf");
        let Ye = ke;
        const xe = class D extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.definitions || r.Sg(D.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    definitions: { n: 1, c: se, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    count: { n: 3, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    next_cursor: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(D.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new D();
            return D.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(D.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(D.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_QueryRewardItems_Response";
          }
        };
        n(xe, "sm_m"), n(xe, "sm_mbf");
        let Ve = xe;
        const _e = class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.requests || r.Sg(Q.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: { requests: { n: 1, c: Ye, r: !0, q: !0 } },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(Q.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(Q.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(Q.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
          }
        };
        n(_e, "sm_m"), n(_e, "sm_mbf");
        let Ur = _e;
        const Ne = class A extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.responses || r.Sg(A.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: { responses: { n: 1, c: Pr, r: !0, q: !0 } },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = r.w0(A.M())), A.sm_mbf;
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(A.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(A.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new A();
            return A.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(A.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(A.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
          }
        };
        n(Ne, "sm_m"), n(Ne, "sm_mbf");
        let vr = Ne;
        const De = class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.eresult || r.Sg(K.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    eresult: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    response: { n: 2, c: Ve },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(K.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new K();
            return K.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(K.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(K.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
          }
        };
        n(De, "sm_m"), n(De, "sm_mbf");
        let Pr = De;
        const Qe = class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.steamid || r.Sg(H.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = r.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(H.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new H();
            return H.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(H.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(H.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEquippedProfileItems_Request";
          }
        };
        n(Qe, "sm_m"), n(Qe, "sm_mbf");
        let Er = Qe;
        const Ae = class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.active_definitions || r.Sg($.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    active_definitions: { n: 1, c: se, r: !0, q: !0 },
                    inactive_definitions: { n: 2, c: se, r: !0, q: !0 },
                    bundle_definitions: { n: 3, c: se, r: !0, q: !0 },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT($.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              s = new $();
            return $.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj($.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0($.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEquippedProfileItems_Response";
          }
        };
        n(Ae, "sm_m"), n(Ae, "sm_mbf");
        let Gr = Ae;
        var Ke;
        ((o) => {
          function e(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetPointsForSpend#1",
              (0, J.I8)(cr, m, u),
              yr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetPointsForSpend = e;
          function t(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, J.I8)(He, m, u),
              ur,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.GetSummary = t;
          function s(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, J.I8)(wr, m, u),
              Be,
              { ePrivilege: 1 },
            );
          }
          o.RedeemPoints = s;
          function kr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, J.I8)(gr, m, u),
              Be,
              { ePrivilege: 1 },
            );
          }
          o.RedeemPointsForBadgeLevel = kr;
          function xr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, J.I8)(Br, m, u),
              Be,
              { ePrivilege: 1 },
            );
          }
          o.RedeemPointsToUpgradeItem = xr;
          function _r(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, J.I8)(Rr, m, u),
              fr,
              { ePrivilege: 1 },
            );
          }
          o.RedeemPointsForProfileCustomization = _r;
          function Nr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, J.I8)(pr, m, u),
              Y,
              { ePrivilege: 1 },
            );
          }
          o.RedeemPointsForProfileCustomizationUpgrade = Nr;
          function Dr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, J.I8)(br, m, u),
              Mr,
              { ePrivilege: 1 },
            );
          }
          o.RegisterForSteamDeckRewards = Dr;
          function Qr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, J.I8)($e, m, u),
              V,
              { ePrivilege: 1 },
            );
          }
          o.AddReaction = Qr;
          function Ar(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, J.I8)(Je, m, u),
              zr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.GetReactions = Ar;
          function Kr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, J.I8)(Sr, m, u),
              qr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetReactionsSummaryForUser = Kr;
          function Hr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, J.I8)(Ze, m, u),
              Tr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetReactionConfig = Hr;
          function $r(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, J.I8)(X, m, u),
              Wr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetProfileCustomizationsConfig = $r;
          function Jr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, J.I8)(ee, m, u),
              hr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetEligibleApps = Jr;
          function Zr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, J.I8)(re, m, u),
              Or,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetActivePurchaseBonuses = Zr;
          function Yr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, J.I8)(Ye, m, u),
              Ve,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          o.QueryRewardItems = Yr;
          function Vr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, J.I8)(Ur, m, u),
              vr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.BatchedQueryRewardItems = Vr;
          function Xr(l, m, u) {
            return l.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, J.I8)(Er, m, u),
              Gr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetEquippedProfileItems = Xr;
        })(Ke || (Ke = {}));
      },
    },
  ]);
})();

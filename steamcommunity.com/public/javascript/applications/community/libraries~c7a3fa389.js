/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3275],
  {
    88016: (e, t, r) => {
      r.d(t, {
        FE: () => V,
        GE: () => ie,
        HW: () => p,
        Yl: () => F,
        aO: () => l,
        eQ: () => N,
        f_: () => O,
        hW: () => te,
        pQ: () => se,
        tE: () => ne,
        xs: () => Y,
      });
      var i = r(10059),
        a = r(39087),
        s = r(79545);
      const n = i.Message;
      class l extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.steamid || a.aR(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class m extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.summary || a.aR(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  summary: { n: 1, c },
                  timestamp_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  auditid_highwater: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class c extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.points || a.aR(c.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  points: {
                    n: 1,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  points_earned: {
                    n: 2,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  points_spent: {
                    n: 3,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class o extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.amount || a.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  amount: {
                    n: 1,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  ecurrency: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Request";
        }
      }
      class u extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.points || a.aR(u.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  points: {
                    n: 1,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class d extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.defid || a.aR(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  defid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  expected_points_cost: {
                    n: 2,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Request";
        }
      }
      class B extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.defid || a.aR(B.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  defid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  num_levels: {
                    n: 2,
                    d: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
        }
      }
      class y extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.defid || a.aR(y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  defid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
        }
      }
      class b extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.communityitemid || a.aR(b.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  bundle_community_item_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class _ extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.customization_type || a.aR(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
        }
      }
      class w extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.purchaseid || a.aR(w.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class f extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.customization_type || a.aR(f.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  new_level: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
        }
      }
      class R extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class z extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.serial_number || a.aR(z.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  serial_number: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  controller_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
        }
      }
      class g extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.granted_profile_modifier || a.aR(g.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class p extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.target_type || a.aR(p.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  target_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  targetid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  reactionid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class M extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class F extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.target_type || a.aR(F.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  target_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  targetid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class S extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.reactionids || a.aR(S.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  reactionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class h extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || a.aR(h.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
        }
      }
      class W extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.total || a.aR(W.M()),
            n.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  total: { n: 1, c: j, r: !0, q: !0 },
                  user_reviews: { n: 2, c: j, r: !0, q: !0 },
                  ugc: { n: 3, c: j, r: !0, q: !0 },
                  profile: { n: 4, c: j, r: !0, q: !0 },
                  forum_topics: { n: 5, c: j, r: !0, q: !0 },
                  comments: { n: 6, c: j, r: !0, q: !0 },
                  total_given: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  total_received: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  total_points_given: {
                    n: 9,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  total_points_received: {
                    n: 10,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class j extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.reactionid || a.aR(j.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  reactionid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  given: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  received: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  points_given: {
                    n: 4,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  points_received: {
                    n: 5,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class O extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class v extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.reactions || a.aR(v.M()),
            n.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { reactions: { n: 3, c: I, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class I extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.reactionid || a.aR(I.M()),
            n.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  reactionid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  points_cost: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  points_transferred: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  valid_target_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  valid_ugc_types: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class T extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
        }
      }
      class E extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.points_cost || a.aR(E.M()),
            n.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  points_cost: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  upgrade_points_cost: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  purchasable_customization_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  upgradable_customization_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  max_slots_per_type: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  max_upgradable_level: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class C extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Request";
        }
      }
      class U extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.apps || a.aR(U.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { apps: { n: 1, c: X, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class X extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appid || a.aR(X.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  has_items_anyone_can_purchase: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  event_app: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  hero_carousel_image: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class P extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || a.aR(P.M()),
            n.initialize(this, e, 0, -1, [15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  defid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  type: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  community_item_class: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  community_item_type: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  point_cost: {
                    n: 6,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  timestamp_created: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_available: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_available_end: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  quantity: {
                    n: 10,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  internal_description: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  active: { n: 12, br: a.FE.readBool, bw: a.Xc.writeBool },
                  community_item_data: { n: 13, c: D },
                  bundle_defids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  usable_duration: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  bundle_discount: {
                    n: 17,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_free_until: {
                    n: 18,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class D extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.item_name || a.aR(D.M()),
            n.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  item_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_title: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_description: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_small: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_large: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_webm: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_webm_small: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  animated: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                  badge_data: { n: 9, c: q, r: !0, q: !0 },
                  profile_theme_id: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class q extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.level || a.aR(q.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  level: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  image: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class x extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.bonusid || a.aR(x.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  bonusid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  active: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  points: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  timestamp_start: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  internal_description: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class A extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
        }
      }
      class L extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.bonuses || a.aR(L.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { bonuses: { n: 1, c: x, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class N extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appids || a.aR(N.M()),
            n.initialize(
              this,
              e,
              0,
              -1,
              [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
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
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  time_available: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  community_item_classes: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  language: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  count: { n: 5, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  cursor: { n: 6, br: a.FE.readString, bw: a.Xc.writeString },
                  sort: { n: 7, d: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  sort_descending: {
                    n: 8,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  reward_types: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  excluded_community_item_classes: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  definitionids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  filters: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  filter_match_all_category_tags: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  filter_match_any_category_tags: {
                    n: 14,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  contains_definitionids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  include_direct_purchase_disabled: {
                    n: 16,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  excluded_content_descriptors: {
                    n: 17,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  excluded_appids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  search_term: {
                    n: 19,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Request";
        }
      }
      class G extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.definitions || a.aR(G.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  definitions: { n: 1, c: P, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  count: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  next_cursor: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class k extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.requests || a.aR(k.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { requests: { n: 1, c: N, r: !0, q: !0 } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
        }
      }
      class Q extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.responses || a.aR(Q.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { responses: { n: 1, c: K, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class K extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.eresult || a.aR(K.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  eresult: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  response: { n: 2, c: G },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class $ extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.steamid || a.aR($.M()),
            n.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA($.M(), e, t);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Request";
        }
      }
      class H extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.active_definitions || a.aR(H.M()),
            n.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  active_definitions: { n: 1, c: P, r: !0, q: !0 },
                  inactive_definitions: { n: 2, c: P, r: !0, q: !0 },
                  bundle_definitions: { n: 3, c: P, r: !0, q: !0 },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Response";
        }
      }
      class Y extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.language || a.aR(Y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Request";
        }
      }
      class J extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.communityitemid || a.aR(J.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  next_claim_time: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  reward_item: { n: 3, c: P },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Response";
        }
      }
      class V extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.language || a.aR(V.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Request";
        }
      }
      class Z extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.can_claim || a.aR(Z.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  can_claim: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  next_claim_time: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  reward_item: { n: 3, c: P },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Response";
        }
      }
      class ee extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.sale_reward_def_id || a.aR(ee.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  sale_reward_def_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  virtual_item_reward_event_id: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_start_time: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_end_time: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamItemRewardDefinition";
        }
      }
      class te extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.virtual_item_reward_event_id || a.aR(te.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  virtual_item_reward_event_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Request";
        }
      }
      class re extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.definitions || a.aR(re.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { definitions: { n: 1, c: ee, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Response";
        }
      }
      class ie extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.definitions || a.aR(ie.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  definitions: { n: 1, c: ee, r: !0, q: !0 },
                  action: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Request";
        }
      }
      class ae extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Response";
        }
      }
      var se, ne;
      !(function (e) {
        (e.GetPointsForSpend = function (e, t) {
          return e.SendMsg(
            "LoyaltyRewards.GetPointsForSpend#1",
            (0, s.MD)(o, t),
            u,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetSummary = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, s.MD)(l, t),
              m,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RedeemPoints = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, s.MD)(d, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForBadgeLevel = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, s.MD)(B, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, s.MD)(y, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, s.MD)(_, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, s.MD)(f, t),
              R,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, s.MD)(z, t),
              g,
              { ePrivilege: 1 },
            );
          }),
          (e.AddReaction = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, s.MD)(p, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReactions = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, s.MD)(F, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReactionsSummaryForUser = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, s.MD)(h, t),
              W,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetReactionConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, s.MD)(O, t),
              v,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileCustomizationsConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, s.MD)(T, t),
              E,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEligibleApps = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, s.MD)(C, t),
              U,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetActivePurchaseBonuses = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, s.MD)(A, t),
              L,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.QueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, s.MD)(N, t),
              G,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BatchedQueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, s.MD)(k, t),
              Q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEquippedProfileItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, s.MD)($, t),
              H,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(se || (se = {})),
        (function (e) {
          (e.ClaimItem = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.ClaimItem#1",
              (0, s.MD)(Y, t),
              J,
              { ePrivilege: 1 },
            );
          }),
            (e.CanClaimItem = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.CanClaimItem#1",
                (0, s.MD)(V, t),
                Z,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetRewardDefinitions = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.GetRewardDefinitions#1",
                (0, s.MD)(te, t),
                re,
                { bConstMethod: !0, ePrivilege: 4 },
              );
            }),
            (e.SetRewardDefinitions = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.SetRewardDefinitions#1",
                (0, s.MD)(ie, t),
                ae,
                { ePrivilege: 4 },
              );
            });
        })(ne || (ne = {}));
    },
  },
]);

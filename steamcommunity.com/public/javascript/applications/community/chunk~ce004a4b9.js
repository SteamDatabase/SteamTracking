/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8024],
  {
    96352: (e, r, t) => {
      t.d(r, { w1: () => Ye });
      var i,
        a,
        s = t(90626),
        n = t(56545),
        l = t(80613),
        o = t.n(l),
        u = t(89068);
      class m extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.name || u.Sg(m.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  name: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = u.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(m.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class c extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.family_groupid || u.Sg(c.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  cooldown_skip_granted: {
                    n: 2,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = u.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.family_groupid || u.Sg(d.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  send_running_apps: {
                    n: 2,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = u.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || u.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  role: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  time_joined: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  cooldown_seconds_remaining: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = u.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMember";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || u.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  role: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = u.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInvite";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || u.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = u.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupFormerMember";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.name || u.Sg(p.M()),
            l.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  name: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  members: { n: 2, c: B, r: !0, q: !0 },
                  pending_invites: { n: 3, c: g, r: !0, q: !0 },
                  free_spots: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  country: { n: 5, br: u.qM.readString, bw: u.gp.writeString },
                  slot_cooldown_remaining_seconds: {
                    n: 6,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  former_members: { n: 7, c: y, r: !0, q: !0 },
                  slot_cooldown_overrides: {
                    n: 8,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = u.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class M extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.family_groupid || u.Sg(M.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  role: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  inviter_steamid: {
                    n: 3,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  awaiting_2fa: { n: 4, br: u.qM.readBool, bw: u.gp.writeBool },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = u.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class b extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || u.Sg(b.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  include_family_group_response: {
                    n: 2,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = u.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class z extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.family_groupid || u.Sg(z.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  rtime_joined: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  rtime_left: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  role: { n: 4, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  participated: { n: 5, br: u.qM.readBool, bw: u.gp.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = u.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMembership";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.family_groupid || u.Sg(w.M()),
            l.Message.initialize(this, e, 0, -1, [5, 10], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  is_not_member_of_any_group: {
                    n: 2,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  latest_time_joined: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  latest_joined_family_groupid: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  pending_group_invites: { n: 5, c: M, r: !0, q: !0 },
                  role: { n: 6, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  cooldown_seconds_remaining: {
                    n: 7,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  family_group: { n: 8, c: p },
                  can_undelete_last_joined_family: {
                    n: 9,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  membership_history: { n: 10, c: z, r: !0, q: !0 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = u.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.family_groupid || u.Sg(_.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  name: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = u.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class S extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.family_groupid || u.Sg(S.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  receiver_steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  receiver_role: {
                    n: 3,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = u.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class F extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.invite_id || u.Sg(F.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  invite_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  two_factor_method: {
                    n: 2,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = u.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class R extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.family_groupid || u.Sg(R.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  nonce: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = u.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.two_factor_method || u.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  two_factor_method: {
                    n: 2,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  cooldown_skip_granted: {
                    n: 3,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  invite_already_accepted: {
                    n: 4,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = u.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class W extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.family_groupid || u.Sg(W.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  steamid_to_remove: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = u.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
        }
      }
      class j extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class q extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.family_groupid || u.Sg(q.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  steamid_to_cancel: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = u.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
        }
      }
      class T extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class O extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.family_groupid || u.Sg(O.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = u.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
        }
      }
      class v extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (o().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class U extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.family_groupid || u.Sg(U.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  client_instance_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = u.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class C extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.users || u.Sg(C.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  users: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: u.qM.readFixed64String,
                    pbr: u.qM.readPackedFixed64String,
                    bw: u.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = u.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class I extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.family_groupid || u.Sg(I.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  store_country_code: {
                    n: 3,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  use_account_cart: {
                    n: 4,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = u.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class G extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.gidshoppingcart || u.Sg(G.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  request_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = u.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class x extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.family_groupid || u.Sg(x.M()),
            l.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  request_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint64String,
                    pbr: u.qM.readPackedUint64String,
                    bw: u.gp.writeRepeatedUint64String,
                  },
                  rt_include_completed_since: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = u.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class N extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.requester_steamid || u.Sg(N.M()),
            l.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  requester_steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  gidshoppingcart: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  time_requested: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  time_responded: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  responder_steamid: {
                    n: 5,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  response_action: {
                    n: 6,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  is_completed: { n: 7, br: u.qM.readBool, bw: u.gp.writeBool },
                  request_id: {
                    n: 8,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  requested_packageids: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                  purchased_packageids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                  requested_bundleids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                  purchased_bundleids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = u.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PurchaseRequest";
        }
      }
      class P extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.requests || u.Sg(P.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { requests: { n: 1, c: N, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = u.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class k extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.family_groupid || u.Sg(k.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  action: { n: 3, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  request_id: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = u.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
        }
      }
      class E extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class Q extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.family_groupid || u.Sg(Q.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  running_apps: { n: 2, c: L, r: !0, q: !0 },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = u.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class A extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.member_steamid || u.Sg(A.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  member_steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  owner_steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = u.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class L extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appid || u.Sg(L.M()),
            l.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  playing_members: { n: 3, c: A, r: !0, q: !0 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = u.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
        }
      }
      class D extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
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
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class $ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.family_groupid || u.Sg($.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = u.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT($.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class J extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.family_groupid || u.Sg(J.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = u.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class K extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.changes || u.Sg(K.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: { changes: { n: 1, c: H, r: !0, q: !0 } },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = u.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class H extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.timestamp || u.Sg(H.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  timestamp: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  actor_steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  type: { n: 3, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  body: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                  by_support: { n: 5, br: u.qM.readBool, bw: u.gp.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = u.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class V extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || u.Sg(V.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  first_played: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  latest_played: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  seconds_played: {
                    n: 5,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = u.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class X extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.family_groupid || u.Sg(X.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = u.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class Y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.entries || u.Sg(Y.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  entries: { n: 1, c: V, r: !0, q: !0 },
                  entries_by_owner: { n: 2, c: V, r: !0, q: !0 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = u.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Y.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class Z extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.family_groupid || u.Sg(Z.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  cooldown_count: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = u.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
        }
      }
      class ee extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class re extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.family_groupid || u.Sg(re.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  include_own: { n: 2, br: u.qM.readBool, bw: u.gp.writeBool },
                  include_excluded: {
                    n: 3,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  language: { n: 5, br: u.qM.readString, bw: u.gp.writeString },
                  max_apps: { n: 6, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  include_non_games: {
                    n: 7,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  steamid: {
                    n: 8,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = u.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class te extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.apps || u.Sg(te.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  apps: { n: 1, c: ie, r: !0, q: !0 },
                  owner_steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = u.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(te.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class ie extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.appid || u.Sg(ie.M()),
            l.Message.initialize(this, e, 0, -1, [2, 15], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  owner_steamids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: u.qM.readFixed64String,
                    pbr: u.qM.readPackedFixed64String,
                    bw: u.gp.writeRepeatedFixed64String,
                  },
                  name: { n: 6, br: u.qM.readString, bw: u.gp.writeString },
                  sort_as: { n: 7, br: u.qM.readString, bw: u.gp.writeString },
                  capsule_filename: {
                    n: 8,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  img_icon_hash: {
                    n: 9,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  exclude_reason: {
                    n: 10,
                    d: 0,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  rt_time_acquired: {
                    n: 11,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  rt_last_played: {
                    n: 12,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  rt_playtime: {
                    n: 13,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  app_type: {
                    n: 14,
                    d: 1,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  content_descriptors: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = u.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class ae extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.family_groupid || u.Sg(ae.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = u.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
        }
      }
      class se extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
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
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class ne extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.family_groupid || u.Sg(ne.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  invite_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  nonce: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = u.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ne.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
        }
      }
      class le extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class oe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.family_groupid || u.Sg(oe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = u.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
        }
      }
      class ue extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class me extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.family_groupid || u.Sg(me.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  appid: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  lender_steamid: {
                    n: 3,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = u.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(me.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Request";
        }
      }
      class ce extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ce();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class de extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.family_groupid || u.Sg(de.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = u.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(de.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class Be extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.members || u.Sg(Be.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: { members: { n: 1, c: ge, r: !0, q: !0 } },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = u.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Be.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class ge extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.steamid || u.Sg(ge.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  preferred_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = u.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class ye extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.family_groupid || u.Sg(ye.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = u.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ye.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
        }
      }
      class pe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class Me extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.family_groupid || u.Sg(Me.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = u.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
        }
      }
      class be extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new be();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class ze extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.family_groupid || u.Sg(ze.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = u.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ze.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class we extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.wallet_country_matches || u.Sg(we.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  wallet_country_matches: {
                    n: 1,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  ip_match: { n: 2, br: u.qM.readBool, bw: u.gp.writeBool },
                  join_restriction: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = u.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(we.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class _e extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.steamid || u.Sg(_e.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  invite_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = u.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(_e.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Request";
        }
      }
      class fe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new fe();
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      class Se extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.family_groupid || u.Sg(Se.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  rtime32_target: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = u.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RollbackFamilyGroup_Request";
        }
      }
      class Fe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (o().BinaryReader)(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RollbackFamilyGroup_Response";
        }
      }
      !(function (e) {
        (e.CreateFamilyGroup = function (e, r) {
          return e.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, n.I8)(m, r),
            c,
            { ePrivilege: 1 },
          );
        }),
          (e.GetFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, n.I8)(d, r),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFamilyGroupForUser = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, n.I8)(b, r),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ModifyFamilyGroupDetails = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, n.I8)(_, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.InviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, n.I8)(S, r),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmInviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, n.I8)(ae, r),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.ResendInvitationToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, n.I8)(oe, r),
              ue,
              { ePrivilege: 1 },
            );
          }),
          (e.JoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, n.I8)(R, r),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmJoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, n.I8)(ne, r),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveFromFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, n.I8)(W, r),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelFamilyGroupInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, n.I8)(q, r),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUsersSharingDevice = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, n.I8)(U, r),
              C,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, n.I8)(O, r),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.UndeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, n.I8)(ye, r),
              pe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlaytimeSummary = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, n.I8)(X, r),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.RequestPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, n.I8)(I, r),
              G,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPurchaseRequests = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, n.I8)(x, r),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RespondToRequestedPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, n.I8)(k, r),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.GetChangeLog = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, n.I8)(J, r),
              K,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFamilyCooldownOverrides = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, n.I8)(Z, r),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedLibraryApps = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, n.I8)(re, r),
              te,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPreferredLender = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, n.I8)(me, r),
              ce,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferredLenders = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, n.I8)(de, r),
              Be,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ForceAcceptInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, n.I8)(Me, r),
              be,
              { ePrivilege: 5 },
            );
          }),
          (e.GetInviteCheckResults = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, n.I8)(ze, r),
              we,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ClearCooldownSkip = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, n.I8)(_e, r),
              fe,
              { ePrivilege: 5 },
            );
          }),
          (e.RollbackFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, n.I8)(Se, r),
              Fe,
              { ePrivilege: 5 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: Q,
          }),
            (e.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: D,
            }),
            (e.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: $,
            });
        })(a || (a = {}));
      var Re;
      t(37735), t(61859);
      class he extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.steamid_requester || u.Sg(he.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  steamid_requester: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  purchase_request_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = u.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CreateNew_Request";
        }
      }
      class We extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.gidshoppingcart || u.Sg(We.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = u.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(We.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CreateNew_Response";
        }
      }
      class je extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.amount || u.Sg(je.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  amount: {
                    n: 1,
                    br: u.qM.readInt64String,
                    bw: u.gp.writeInt64String,
                  },
                  currencycode: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = u.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Amount";
        }
      }
      class qe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.packageid || u.Sg(qe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  packageid: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  costwhenadded: { n: 2, c: je },
                  is_gift: { n: 3, br: u.qM.readBool, bw: u.gp.writeBool },
                  gidbundle: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  quantity: { n: 5, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = u.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(qe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_PackageItem";
        }
      }
      class Te extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.walletcredit || u.Sg(Te.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: { walletcredit: { n: 1, c: je } },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = u.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Te.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_WalletCreditItem";
        }
      }
      class Oe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.couponid || u.Sg(Oe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  couponid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  gidcoupontarget: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  packageid: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  gidcoupon: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = u.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Oe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CouponItem";
        }
      }
      class ve extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.microtxnappid || u.Sg(ve.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  microtxnappid: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  microtxnassetclassid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = u.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_MicroTxnAsset";
        }
      }
      class Ue extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.bundleid || u.Sg(Ue.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  bundleid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  quantity: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = u.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ue.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_BundleItem";
        }
      }
      class Ce extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.reward_id || u.Sg(Ce.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  reward_id: { n: 1, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = u.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ce.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_LoyaltyRewardItem";
        }
      }
      class Ie extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.gidparent || u.Sg(Ie.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  gidparent: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  children: { n: 2, c: Ie, r: !0, q: !0 },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = u.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ie.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RelationShip";
        }
      }
      class Ge extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.couponid || u.Sg(Ge.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  couponid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  gidcoupon: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  gidlineitem: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = u.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ge.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AvailableCoupon";
        }
      }
      class xe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.gidlineitem || u.Sg(xe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  gidlineitem: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  package_item: { n: 2, c: qe },
                  wallet_credit_item: { n: 3, c: Te },
                  coupon_item: { n: 4, c: Oe },
                  micro_item: { n: 5, c: ve },
                  bundle_item: { n: 7, c: Ue },
                  loyalty_item: { n: 8, c: Ce },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = u.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(xe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Item";
        }
      }
      class Ne extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.coupons || u.Sg(Ne.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: { coupons: { n: 1, c: Ge, r: !0, q: !0 } },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = u.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ne.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Potentials";
        }
      }
      class Pe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.gidshoppingcart || u.Sg(Pe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = u.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Pe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_GetContents_Request";
        }
      }
      class ke extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.lineitems || u.Sg(ke.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  lineitems: { n: 1, c: xe, r: !0, q: !0 },
                  treeview: { n: 2, c: Ie, r: !0, q: !0 },
                  potentials: { n: 3, c: Ne },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = u.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ke.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Contents";
        }
      }
      class Ee extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.gidshoppingcart || u.Sg(Ee.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  contents: { n: 2, c: ke },
                  time_created: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  merged_into_account_cart: {
                    n: 4,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  steamid_requester: {
                    n: 5,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  purchase_request_id: {
                    n: 6,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = u.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ee.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_GetContents_Response";
        }
      }
      class Qe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.gidshoppingcart || u.Sg(Qe.M()),
            l.Message.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  browserid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  cart_items: { n: 4, c: qe, r: !0, q: !0 },
                  store_country_code: {
                    n: 5,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  beta_mode: {
                    n: 6,
                    d: !1,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = u.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Qe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddPackages_Request";
        }
      }
      class Ae extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.gidshoppingcart || u.Sg(Ae.M()),
            l.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  contents: { n: 2, c: ke },
                  result_details: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = u.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ae.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddPackages_Response";
        }
      }
      class Le extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.gidshoppingcart || u.Sg(Le.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  gidlineitem: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  quantity: { n: 3, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = u.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Le.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_UpdatePackageQuantity_Request";
        }
      }
      class De extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.gidshoppingcart || u.Sg(De.M()),
            l.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  contents: { n: 2, c: ke },
                  result_details: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = u.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(De.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_UpdatePackageQuantity_Response";
        }
      }
      class $e extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.gidshoppingcart || u.Sg($e.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  bundleid: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  browserid: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  store_country: {
                    n: 5,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  quantity: { n: 6, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  beta_mode: {
                    n: 7,
                    d: !1,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = u.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT($e.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddBundle_Request";
        }
      }
      class Je extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.contents || u.Sg(Je.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  contents: { n: 1, c: ke },
                  result_details: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = u.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Je.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Je();
          return Je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddBundle_Response";
        }
      }
      class Ke extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.gidshoppingcart || u.Sg(Ke.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  gidlineitems: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint64String,
                    pbr: u.qM.readPackedUint64String,
                    bw: u.gp.writeRepeatedUint64String,
                  },
                  browserid: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = u.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Ke.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RemoveLineItems_Request";
        }
      }
      class He extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.contents || u.Sg(He.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  contents: { n: 1, c: ke },
                  result_details: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = u.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(He.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (o().BinaryReader)(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(He.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(He.M(), e, r);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RemoveLineItems_Response";
        }
      }
      !(function (e) {
        (e.CreateNewShoppingCart = function (e, r) {
          return e.SendMsg(
            "ShoppingCart.CreateNewShoppingCart#1",
            (0, n.I8)(he, r),
            We,
            { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetShoppingCartContents = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, n.I8)(Pe, r),
              Ee,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.AddPackages = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, n.I8)(Qe, r),
              Ae,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.UpdatePackageQuantity = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, n.I8)(Le, r),
              De,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.AddBundle = function (e, r) {
            return e.SendMsg("ShoppingCart.AddBundle#1", (0, n.I8)($e, r), Je, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.RemoveLineItems = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, n.I8)(Ke, r),
              He,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          });
      })(Re || (Re = {}));
      var Ve = t(30470);
      t(60011), t(29233);
      s.createContext({ staleTimeMs: 1 / 0 });
      (0, s.createContext)({ errorMessage: null, setErrorMessage: (e) => {} });
      var Xe;
      !(function (e) {
        (e[(e.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (e[(e.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (e[(e.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (e[(e.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (e[(e.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (e[(e.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (e[(e.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (e[(e.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (e[(e.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (e[(e.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (e[(e.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (e[(e.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (e[(e.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (e[(e.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (e[(e.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (e[(e.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (e[(e.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite");
      })(Xe || (Xe = {}));
      Xe.k_EFamilyQueryCreateFamily,
        Xe.k_EFamilyQueryCreateFamily,
        Xe.k_EFamilyQueryJoinFamily,
        Xe.k_EFamilyQueryJoinFamily,
        Xe.k_EFamilyQueryCreateFamily,
        Xe.k_EFamilyQueryJoinFamily,
        Xe.k_EFamilyQueryRemoveFromFamily,
        Xe.k_EFamilyQueryJoinFamily,
        Xe.k_EFamilyQueryInviteToFamily,
        Xe.k_EFamilyQueryRemoveFromFamily,
        Xe.k_EFamilyQueryInviteToFamily;
      function Ye(e, r) {
        return `${Ve.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${r}`;
      }
    },
  },
]);

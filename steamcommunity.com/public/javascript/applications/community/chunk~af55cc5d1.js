/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5955],
  {
    96352: (e, r, t) => {
      t.d(r, { w1: () => Je });
      var i,
        a,
        n = t(90626),
        s = t(56545),
        o = t(80613),
        l = t.n(o),
        u = t(89068);
      class m extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.name || u.Sg(m.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Request";
        }
      }
      class c extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.family_groupid || u.Sg(c.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CreateFamilyGroup_Response";
        }
      }
      class d extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.family_groupid || u.Sg(d.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Request";
        }
      }
      class g extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || u.Sg(g.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupMember";
        }
      }
      class B extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || u.Sg(B.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInvite";
        }
      }
      class y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || u.Sg(y.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupFormerMember";
        }
      }
      class p extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.name || u.Sg(p.M()),
            o.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  name: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  members: { n: 2, c: g, r: !0, q: !0 },
                  pending_invites: { n: 3, c: B, r: !0, q: !0 },
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
          let r = new (l().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroup_Response";
        }
      }
      class _ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.family_groupid || u.Sg(_.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
                  role: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  inviter_steamid: {
                    n: 3,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  awaiting_2fa: { n: 4, br: u.qM.readBool, bw: u.gp.writeBool },
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
          let r = new (l().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "FamilyGroupPendingInviteForUser";
        }
      }
      class b extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || u.Sg(b.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Request";
        }
      }
      class M extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.family_groupid || u.Sg(M.M()),
            o.Message.initialize(this, e, 0, -1, [5], null);
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
                  pending_group_invites: { n: 5, c: _, r: !0, q: !0 },
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
          let r = new (l().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetFamilyGroupForUser_Response";
        }
      }
      class f extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.family_groupid || u.Sg(f.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  name: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = u.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
        }
      }
      class w extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
        }
      }
      class z extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.family_groupid || u.Sg(z.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Request";
        }
      }
      class S extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.invite_id || u.Sg(S.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
          let r = new (l().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_InviteToFamilyGroup_Response";
        }
      }
      class h extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.family_groupid || u.Sg(h.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
          let r = new (l().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Request";
        }
      }
      class F extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.two_factor_method || u.Sg(F.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
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
          let r = new (l().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_JoinFamilyGroup_Response";
        }
      }
      class R extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.family_groupid || u.Sg(R.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
                  steamid_to_remove: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
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
          let r = new (l().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Request";
        }
      }
      class I extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RemoveFromFamilyGroup_Response";
        }
      }
      class C extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.family_groupid || u.Sg(C.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
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
          let r = new (l().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Request";
        }
      }
      class j extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_CancelFamilyGroupInvite_Response";
        }
      }
      class T extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.family_groupid || u.Sg(T.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = u.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Request";
        }
      }
      class W extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_DeleteFamilyGroup_Response";
        }
      }
      class v extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.family_groupid || u.Sg(v.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
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
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = u.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Request";
        }
      }
      class q extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.users || u.Sg(q.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
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
          let r = new (l().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetUsersSharingDevice_Response";
        }
      }
      class O extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.family_groupid || u.Sg(O.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Request";
        }
      }
      class U extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.gidshoppingcart || u.Sg(U.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
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
          let r = new (l().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RequestPurchase_Response";
        }
      }
      class G extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.family_groupid || u.Sg(G.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
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
          let r = new (l().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Request";
        }
      }
      class L extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.requester_steamid || u.Sg(L.M()),
            o.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
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
          let r = new (l().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PurchaseRequest";
        }
      }
      class x extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.requests || u.Sg(x.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { requests: { n: 1, c: L, r: !0, q: !0 } },
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
          let r = new (l().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPurchaseRequests_Response";
        }
      }
      class A extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.family_groupid || u.Sg(A.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
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
          let r = new (l().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Request";
        }
      }
      class P extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_RespondToRequestedPurchase_Response";
        }
      }
      class D extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.family_groupid || u.Sg(D.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  running_apps: { n: 2, c: k, r: !0, q: !0 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = u.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(D.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification";
        }
      }
      class N extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.member_steamid || u.Sg(N.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
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
          let r = new (l().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
        }
      }
      class k extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appid || u.Sg(k.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  playing_members: { n: 3, c: N, r: !0, q: !0 },
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
          let r = new (l().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
        }
      }
      class E extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_InviteStatus_Notification";
        }
      }
      class H extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.family_groupid || u.Sg(H.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
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
          let r = new (l().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroupsClient_GroupChanged_Notification";
        }
      }
      class Q extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.family_groupid || u.Sg(Q.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Request";
        }
      }
      class V extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.changes || u.Sg(V.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { changes: { n: 1, c: $, r: !0, q: !0 } },
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
          let r = new (l().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response";
        }
      }
      class $ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.timestamp || u.Sg($.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
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
          let r = new (l().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetChangeLog_Response_Change";
        }
      }
      class J extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.steamid || u.Sg(J.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
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
          let r = new (l().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_PlaytimeEntry";
        }
      }
      class K extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.family_groupid || u.Sg(K.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
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
          let r = new (l().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Request";
        }
      }
      class Y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.entries || u.Sg(Y.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  entries: { n: 1, c: J, r: !0, q: !0 },
                  entries_by_owner: { n: 2, c: J, r: !0, q: !0 },
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
          let r = new (l().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPlaytimeSummary_Response";
        }
      }
      class X extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.family_groupid || u.Sg(X.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
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
          let r = new (l().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
        }
      }
      class Z extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
        }
      }
      class ee extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.family_groupid || u.Sg(ee.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
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
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = u.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Request";
        }
      }
      class re extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.apps || u.Sg(re.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  apps: { n: 1, c: te, r: !0, q: !0 },
                  owner_steamid: {
                    n: 2,
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
          let r = new (l().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response";
        }
      }
      class te extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.appid || u.Sg(te.M()),
            o.Message.initialize(this, e, 0, -1, [2, 15], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
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
          let r = new (l().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
        }
      }
      class ie extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.family_groupid || u.Sg(ie.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
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
          let r = new (l().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
        }
      }
      class ae extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
        }
      }
      class ne extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.family_groupid || u.Sg(ne.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
        }
      }
      class se extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
        }
      }
      class oe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.family_groupid || u.Sg(oe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
        }
      }
      class le extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (l().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
        }
      }
      class ue extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.family_groupid || u.Sg(ue.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
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
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = u.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ue.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Request";
        }
      }
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
          let r = new (l().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_SetPreferredLender_Response";
        }
      }
      class ce extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.family_groupid || u.Sg(ce.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = u.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(ce.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Request";
        }
      }
      class de extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.members || u.Sg(de.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { members: { n: 1, c: ge, r: !0, q: !0 } },
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
          let r = new (l().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response";
        }
      }
      class ge extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.steamid || u.Sg(ge.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
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
          let r = new (l().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
        }
      }
      class Be extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.family_groupid || u.Sg(Be.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  family_groupid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
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
          let r = new (l().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Request";
        }
      }
      class ye extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_UndeleteFamilyGroup_Response";
        }
      }
      class pe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.family_groupid || u.Sg(pe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
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
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = u.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(pe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Request";
        }
      }
      class _e extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new _e();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ForceAcceptInvite_Response";
        }
      }
      class be extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.family_groupid || u.Sg(be.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
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
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = u.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(be.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Request";
        }
      }
      class Me extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.wallet_country_matches || u.Sg(Me.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
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
          let r = new (l().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_GetInviteCheckResults_Response";
        }
      }
      class fe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.steamid || u.Sg(fe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
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
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = u.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Request";
        }
      }
      class we extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new we();
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFamilyGroups_ClearCooldownSkip_Response";
        }
      }
      !(function (e) {
        (e.CreateFamilyGroup = function (e, r) {
          return e.SendMsg(
            "FamilyGroups.CreateFamilyGroup#1",
            (0, s.I8)(m, r),
            c,
            { ePrivilege: 1 },
          );
        }),
          (e.GetFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, s.I8)(d, r),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFamilyGroupForUser = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, s.I8)(b, r),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ModifyFamilyGroupDetails = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, s.I8)(f, r),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.InviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, s.I8)(z, r),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmInviteToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, s.I8)(ie, r),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.ResendInvitationToFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, s.I8)(oe, r),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.JoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, s.I8)(h, r),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.ConfirmJoinFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, s.I8)(ne, r),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveFromFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, s.I8)(R, r),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelFamilyGroupInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, s.I8)(C, r),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUsersSharingDevice = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, s.I8)(v, r),
              q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, s.I8)(T, r),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.UndeleteFamilyGroup = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, s.I8)(Be, r),
              ye,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlaytimeSummary = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, s.I8)(K, r),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.RequestPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, s.I8)(O, r),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPurchaseRequests = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, s.I8)(G, r),
              x,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RespondToRequestedPurchase = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, s.I8)(A, r),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.GetChangeLog = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, s.I8)(Q, r),
              V,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFamilyCooldownOverrides = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, s.I8)(X, r),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedLibraryApps = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, s.I8)(ee, r),
              re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPreferredLender = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, s.I8)(ue, r),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferredLenders = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, s.I8)(ce, r),
              de,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ForceAcceptInvite = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, s.I8)(pe, r),
              _e,
              { ePrivilege: 5 },
            );
          }),
          (e.GetInviteCheckResults = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, s.I8)(be, r),
              Me,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ClearCooldownSkip = function (e, r) {
            return e.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, s.I8)(fe, r),
              we,
              { ePrivilege: 5 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: D,
          }),
            (e.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: E,
            }),
            (e.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: H,
            });
        })(a || (a = {}));
      var ze;
      t(37735), t(61859);
      class Se extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.steamid_requester || u.Sg(Se.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
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
          let r = new (l().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CreateNew_Request";
        }
      }
      class he extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.gidshoppingcart || u.Sg(he.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  gidshoppingcart: {
                    n: 1,
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
          let r = new (l().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CreateNew_Response";
        }
      }
      class Fe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.amount || u.Sg(Fe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
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
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = u.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Fe.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Amount";
        }
      }
      class Re extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.packageid || u.Sg(Re.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  packageid: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  costwhenadded: { n: 2, c: Fe },
                  is_gift: { n: 3, br: u.qM.readBool, bw: u.gp.writeBool },
                  gidbundle: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  quantity: { n: 5, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = u.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return u.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return u.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_PackageItem";
        }
      }
      class Ie extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.walletcredit || u.Sg(Ie.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: { walletcredit: { n: 1, c: Fe } },
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
          let r = new (l().BinaryReader)(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_WalletCreditItem";
        }
      }
      class Ce extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.couponid || u.Sg(Ce.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
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
          let r = new (l().BinaryReader)(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CouponItem";
        }
      }
      class je extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.microtxnappid || u.Sg(je.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
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
          let r = new (l().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_MicroTxnAsset";
        }
      }
      class Te extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.bundleid || u.Sg(Te.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  bundleid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  quantity: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
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
          let r = new (l().BinaryReader)(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_BundleItem";
        }
      }
      class We extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.reward_id || u.Sg(We.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  reward_id: { n: 1, br: u.qM.readInt32, bw: u.gp.writeInt32 },
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
          let r = new (l().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_LoyaltyRewardItem";
        }
      }
      class ve extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.gidparent || u.Sg(ve.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  gidparent: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  children: { n: 2, c: ve, r: !0, q: !0 },
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
          let r = new (l().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RelationShip";
        }
      }
      class qe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.couponid || u.Sg(qe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
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
          let r = new (l().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AvailableCoupon";
        }
      }
      class Oe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.gidlineitem || u.Sg(Oe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  gidlineitem: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  package_item: { n: 2, c: Re },
                  wallet_credit_item: { n: 3, c: Ie },
                  coupon_item: { n: 4, c: Ce },
                  micro_item: { n: 5, c: je },
                  bundle_item: { n: 7, c: Te },
                  loyalty_item: { n: 8, c: We },
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
          let r = new (l().BinaryReader)(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Item";
        }
      }
      class Ue extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.coupons || u.Sg(Ue.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: { coupons: { n: 1, c: qe, r: !0, q: !0 } },
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
          let r = new (l().BinaryReader)(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Potentials";
        }
      }
      class Ge extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.gidshoppingcart || u.Sg(Ge.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  gidshoppingcart: {
                    n: 1,
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
          let r = new (l().BinaryReader)(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_GetContents_Request";
        }
      }
      class Le extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.lineitems || u.Sg(Le.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  lineitems: { n: 1, c: Oe, r: !0, q: !0 },
                  treeview: { n: 2, c: ve, r: !0, q: !0 },
                  potentials: { n: 3, c: Ue },
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
          let r = new (l().BinaryReader)(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Contents";
        }
      }
      class xe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.gidshoppingcart || u.Sg(xe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  contents: { n: 2, c: Le },
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
          let r = new (l().BinaryReader)(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_GetContents_Response";
        }
      }
      class Ae extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.gidshoppingcart || u.Sg(Ae.M()),
            o.Message.initialize(this, e, 0, -1, [4], null);
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
                  browserid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  cart_items: { n: 4, c: Re, r: !0, q: !0 },
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
          let r = new (l().BinaryReader)(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddPackages_Request";
        }
      }
      class Pe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.gidshoppingcart || u.Sg(Pe.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
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
                  contents: { n: 2, c: Le },
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
          let r = new (l().BinaryReader)(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddPackages_Response";
        }
      }
      class De extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.gidshoppingcart || u.Sg(De.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
                  gidlineitem: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  quantity: { n: 3, br: u.qM.readUint32, bw: u.gp.writeUint32 },
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
          let r = new (l().BinaryReader)(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_UpdatePackageQuantity_Request";
        }
      }
      class Ne extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.gidshoppingcart || u.Sg(Ne.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  contents: { n: 2, c: Le },
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
          let r = new (l().BinaryReader)(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_UpdatePackageQuantity_Response";
        }
      }
      class ke extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.gidshoppingcart || u.Sg(ke.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
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
          let r = new (l().BinaryReader)(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddBundle_Request";
        }
      }
      class Ee extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.contents || u.Sg(Ee.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  contents: { n: 1, c: Le },
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
          let r = new (l().BinaryReader)(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddBundle_Response";
        }
      }
      class He extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.gidshoppingcart || u.Sg(He.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
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
          let r = new (l().BinaryReader)(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(He.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(He.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RemoveLineItems_Request";
        }
      }
      class Qe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.contents || u.Sg(Qe.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  contents: { n: 1, c: Le },
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
          let r = new (l().BinaryReader)(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return u.zj(Qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          u.i0(Qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RemoveLineItems_Response";
        }
      }
      !(function (e) {
        (e.CreateNewShoppingCart = function (e, r) {
          return e.SendMsg(
            "ShoppingCart.CreateNewShoppingCart#1",
            (0, s.I8)(Se, r),
            he,
            { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetShoppingCartContents = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, s.I8)(Ge, r),
              xe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.AddPackages = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, s.I8)(Ae, r),
              Pe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.UpdatePackageQuantity = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, s.I8)(De, r),
              Ne,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.AddBundle = function (e, r) {
            return e.SendMsg("ShoppingCart.AddBundle#1", (0, s.I8)(ke, r), Ee, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.RemoveLineItems = function (e, r) {
            return e.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, s.I8)(He, r),
              Qe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          });
      })(ze || (ze = {}));
      var Ve = t(30470);
      t(60011), t(29233);
      n.createContext({ staleTimeMs: 1 / 0 });
      (0, n.createContext)({ errorMessage: null, setErrorMessage: (e) => {} });
      var $e;
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
      })($e || ($e = {}));
      $e.k_EFamilyQueryCreateFamily,
        $e.k_EFamilyQueryCreateFamily,
        $e.k_EFamilyQueryJoinFamily,
        $e.k_EFamilyQueryJoinFamily,
        $e.k_EFamilyQueryCreateFamily,
        $e.k_EFamilyQueryJoinFamily,
        $e.k_EFamilyQueryRemoveFromFamily,
        $e.k_EFamilyQueryJoinFamily,
        $e.k_EFamilyQueryInviteToFamily,
        $e.k_EFamilyQueryRemoveFromFamily,
        $e.k_EFamilyQueryInviteToFamily;
      function Je(e, r) {
        return `${Ve.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${r}`;
      }
    },
    4796: (e, r, t) => {
      t.d(r, { TB: () => B, W$: () => y, ac: () => g });
      var i = t(34629),
        a = t(41735),
        n = t.n(a),
        s = t(14947),
        o = t(90626),
        l = t(17720),
        u = t(81393),
        m = t(78327),
        c = t(67165);
      class d {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.Gn)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, s.h5)(() => {
              let e = (0, m.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, s.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const r = e;
          return (
            !!(
              r &&
              Array.isArray(r) &&
              r.length > 0 &&
              "object" == typeof r[0]
            ) &&
            "number" == typeof r[0].clanAccountID &&
            ("number" == typeof r[0].appid ||
              "string" == typeof r[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, u.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, u.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const r of e) this.InternalSetupValue(r);
        }
        InternalSetupValue(e) {
          const r = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new l.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : 0,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, r),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                r,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, r);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, u.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let r = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const r =
            m.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let t = null;
          try {
            t = (await n().get(r, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return t
            ? (this.InternalSetupValue(t), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let r = "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const r =
            m.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let t = await n().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(t.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let r = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  null == e ? void 0 : e.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const r =
            m.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let t = await n().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(t.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let r = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(r))
            return this.m_mapClanAccountIDToClanInfo.get(r);
          let t = "clanaccountid_" + r;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const r = l.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(r);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let r = e.GetAccountID();
          const t =
            m.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let i = await n().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(i.data),
            this.m_mapClanAccountIDToClanInfo.get(r)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, u.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let r = c.pF.GetCreatorHome(e);
          if (r) return r.GetCreatorHomeURL("developer");
          let t = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            m.TS.COMMUNITY_BASE_URL +
            (t.vanity_url
              ? "groups/" + t.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, i.Cg)([s.sH], d.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, i.Cg)([s.sH], d.prototype, "m_mapVanityToClanInfo", void 0),
        (0, i.Cg)([s.sH], d.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, i.Cg)([s.XI], d.prototype, "RegisterClanData", null),
        (0, i.Cg)([s.XI], d.prototype, "InternalSetupValue", null);
      const g = new d();
      function B(e) {
        const [r, t] = (0, o.useState)(
            e ? g.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [i, a] = (0, o.useState)(!!e && !g.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (g.BHasClanInfoLoadedByAccountID(e))
                t(g.GetClanInfoByClanAccountID(e)), a(!1);
              else {
                a(!0);
                const r = l.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                g.LoadClanInfoForClanSteamID(r)
                  .then((e) => {
                    t(null != e ? e : void 0), a(!1);
                  })
                  .catch((r) =>
                    console.error(`Failed to load clan info ${e}`, r),
                  );
              }
            else t(void 0), a(!1);
          }, [e]),
          [i, r]
        );
      }
      function y(e) {
        const [r, t] = (0, o.useState)(g.GetOGGClanInfo(e));
        return (
          (0, o.useEffect)(() => {
            r || g.LoadOGGClanInfoForGroupVanity(e).then(t);
          }, [r, e]),
          r
        );
      }
      window.g_ClanStore = g;
    },
    67165: (e, r, t) => {
      t.d(r, { pF: () => j, FV: () => T });
      var i = t(34629),
        a = t(4434),
        n = t(41735),
        s = t.n(n),
        o = t(14947),
        l = t(90626),
        u = t(78327);
      class m {
        constructor(e) {
          (this.m_appidList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (0, o.Gn)(this),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          var r;
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (r = e.clan_account_flags) && void 0 !== r ? r : 0),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  u.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  u.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return u.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            u.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(e, r) {
          let t = u.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            i = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              r ? (i |= e) : (i &= ~e);
            }),
            i == this.m_clanAccountFlags)
          )
            return;
          let a = new Array();
          1 & i && a.push(1),
            8 & i && a.push(8),
            2 & i && a.push(2),
            4 & i && a.push(4),
            16 & i && a.push(16),
            32 & i && a.push(32),
            64 & i && a.push(64);
          let n = new FormData();
          n.append("sessionid", u.TS.SESSIONID),
            n.append("clan_account_id", this.GetClanAccountID().toString()),
            n.append("accountflags", JSON.stringify(a));
          let o = await s().post(t, n);
          o &&
            200 == o.status &&
            1 == o.data.success &&
            (this.m_clanAccountFlags = i);
        }
      }
      (0, i.Cg)([o.sH], m.prototype, "m_appidList", void 0),
        (0, i.Cg)([o.sH], m.prototype, "m_nFollowers", void 0),
        (0, i.Cg)([o.sH], m.prototype, "m_clanAccountFlags", void 0);
      var c,
        d = t(17720),
        g = t(56545),
        B = t(80613),
        y = t.n(B),
        p = t(89068);
      class _ extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || p.Sg(_.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  linkname: { n: 4, br: p.qM.readString, bw: p.gp.writeString },
                  json: { n: 5, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = p.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class b extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.clan_account_id || p.Sg(b.M()),
            B.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = p.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class M extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || p.Sg(M.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  link: { n: 2, c: _ },
                  remove: {
                    n: 3,
                    d: !1,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = p.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class f extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (y().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class w extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || p.Sg(w.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
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
        static toObject(e, r) {
          return p.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class z extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.links || p.Sg(z.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { links: { n: 1, c: _, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return p.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class S extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clan_account_ids || p.Sg(S.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
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
        static toObject(e, r) {
          return p.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class h extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.results || p.Sg(h.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { results: { n: 1, c: b, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = p.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class F extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.partnerid || p.Sg(F.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  partnerid: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
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
        static toObject(e, r) {
          return p.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class R extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.results || p.Sg(R.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = p.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return p.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class I extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.clan_accountid || p.Sg(I.M()),
            B.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
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
        static toObject(e, r) {
          return p.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return p.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (y().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return p.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          p.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, r) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, g.I8)(M, r),
            f,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, g.I8)(w, r),
              z,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, g.I8)(S, r),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, g.I8)(F, r),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(c || (c = {}));
      class C {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, o.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, u.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let r = Number(e.creator_clan_id),
                  t = d.b.InitFromClanID(r),
                  i = new m(t);
                i.Initialize(e),
                  (i.m_promise = C.GetAsPromise(i)),
                  this.m_mapClanToCreatorHome.set(r, i);
              });
            let r = (0, u.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(r) &&
              r.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const r = e;
          return (
            !!(
              r &&
              Array.isArray(r) &&
              r.length > 0 &&
              "object" == typeof r[0]
            ) &&
            "string" == typeof r[0].name &&
            ("string" == typeof r[0].creator_clan_id ||
              "number" == typeof r[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const r = e;
          return (
            !!(
              r &&
              Array.isArray(r) &&
              r.length > 0 &&
              "object" == typeof r[0]
            ) &&
            "number" == typeof r[0].clan_account_id &&
              r[0].clan_account_id > 0 &&
              "number" == typeof r[0].appid &&
            r[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, r) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let t = new m(e);
            (t.m_promise = this.InternalCreatorHome(t, r)),
              await t.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, r) {
          let t = { get_appids: !0, l: u.TS.LANGUAGE, origin: self.origin },
            i =
              u.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            a = await s().get(i, { params: t, cancelToken: r && r.token });
          return e.Initialize(a.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, r) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let t = { appid: e },
              i = u.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              a = await s().get(i, {
                params: t,
                cancelToken: r && r.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, a.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, r, t) {
          let i = `${u.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            a = {
              term: e.replace(" ", "+"),
              require_creator: r,
              cc: u.TS.COUNTRY,
              l: u.TS.LANGUAGE,
              origin: self.origin,
            },
            n = new Array();
          const l = await s().get(i, { params: a, cancelToken: t.token });
          return (
            l.data.curators &&
              (0, o.h5)(() => {
                l.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let r = d.b.InitFromClanID(e.creator_clan_id),
                      t = new m(r);
                    t.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, t);
                  }
                  n.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            n
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, i.Cg)([o.sH], C.prototype, "m_mapClanToCreatorHome", void 0),
        (0, i.Cg)([o.sH], C.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, i.Cg)([o.XI], C.prototype, "LazyInit", null);
      const j = new C();
      function T(e) {
        var r;
        const t = d.b.InitFromClanID(e),
          [i, n] = l.useState(j.GetCreatorHome(t)),
          s = (0, a.m)("useCreatorHome");
        return (
          l.useEffect(() => {
            const r = d.b.InitFromClanID(e);
            j.BHasCreatorHomeLoaded(r)
              ? i
                ? i.GetClanAccountID() != e && n(j.GetCreatorHome(r))
                : n(j.GetCreatorHome(r))
              : j.LoadCreatorHome(r).then(() => {
                  var e;
                  (null === (e = null == s ? void 0 : s.token) || void 0 === e
                    ? void 0
                    : e.reason) || n(j.GetCreatorHome(r));
                });
          }, [
            null === (r = null == s ? void 0 : s.token) || void 0 === r
              ? void 0
              : r.reason,
            e,
            i,
          ]),
          i
        );
      }
      window.g_CreatorHomeStore = j;
    },
  },
]);

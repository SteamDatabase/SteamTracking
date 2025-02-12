/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8310],
  {
    97788: (e, t, i) => {
      i.d(t, {
        Fn: () => S,
        GG: () => l,
        V4: () => d,
        b$: () => b,
        nH: () => u,
        p$: () => o,
      });
      var r = i(80613),
        n = i(89068),
        a = i(56545);
      const s = r.Message;
      function o(e) {
        return "unknown ESteamNotificationType ( " + e + " )";
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.notification_id || n.Sg(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  notification_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  notification_targets: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  notification_type: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  body_data: {
                    n: 4,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  read: { n: 7, br: n.qM.readBool, bw: n.gp.writeBool },
                  timestamp: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  hidden: { n: 9, br: n.qM.readBool, bw: n.gp.writeBool },
                  expiry: { n: 10, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  viewed: { n: 11, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new c();
          return c.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationData";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.include_hidden || n.Sg(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  include_hidden: {
                    n: 1,
                    d: !1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  language: {
                    n: 2,
                    d: 0,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  include_confirmation_count: {
                    n: 3,
                    d: !0,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_pinned_counts: {
                    n: 4,
                    d: !1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_read: {
                    n: 5,
                    d: !0,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  count_only: {
                    n: 6,
                    d: !1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new l();
          return l.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.notifications || n.Sg(m.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  notifications: { n: 1, c, r: !0, q: !0 },
                  confirmation_count: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  pending_gift_count: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  pending_friend_count: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  unread_count: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  pending_family_invite_count: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.timestamp || n.Sg(d.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  timestamp: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  notification_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  notification_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint64String,
                    pbr: n.qM.readPackedUint64String,
                    bw: n.gp.writeRepeatedUint64String,
                  },
                  mark_all_read: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsRead_Notification";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.remote_client_id || n.Sg(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  remote_client_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  target_client_type: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsViewed_Notification";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.notification_type || n.Sg(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  notification_type: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  notification_targets: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new _();
          return _.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationPreference";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.preferences || n.Sg(f.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { preferences: { n: 1, c: _, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.preferences || n.Sg(y.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { preferences: { n: 1, c: _, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.notification_ids || n.Sg(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  notification_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint64String,
                    pbr: n.qM.readPackedUint64String,
                    bw: n.gp.writeRepeatedUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_HideNotification_Notification";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.notifications || n.Sg(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  notifications: { n: 1, c, r: !0, q: !0 },
                  pending_gift_count: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  pending_friend_count: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  pending_family_invite_count: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_NotificationsReceived_Notification";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.preferences || n.Sg(w.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { preferences: { n: 1, c: _, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new w();
          return w.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_PreferencesUpdated_Notification";
        }
      }
      var S, M;
      !(function (e) {
        (e.GetSteamNotifications = function (e, t) {
          return e.SendMsg(
            "SteamNotification.GetSteamNotifications#1",
            (0, a.I8)(l, t),
            m,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.MarkNotificationsRead = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, a.I8)(d, t),
              { ePrivilege: 1 },
            );
          }),
          (e.MarkNotificationsViewed = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, a.I8)(u, t),
              { ePrivilege: 1 },
            );
          }),
          (e.HideNotification = function (e, t) {
            return e.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, a.I8)(b, t),
              { ePrivilege: 1 },
            );
          }),
          (e.SetPreferences = function (e, t) {
            return e.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, a.I8)(f, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferences = function (e, t) {
            return e.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, a.I8)(g, t),
              y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(S || (S = {})),
        (function (e) {
          (e.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: B,
          }),
            (e.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: w,
            });
        })(M || (M = {}));
    },
    92406: (e, t, i) => {
      i.d(t, {
        OT: () => le,
        iO: () => ce,
        T4: () => oe,
        n8: () => se,
        hr: () => ae,
        IC: () => E,
        V4: () => L,
        sR: () => D,
        jb: () => ye,
        Rl: () => Be,
        XT: () => we,
        cE: () => Z,
        tM: () => ee,
        K9: () => A,
        bP: () => ue,
        aq: () => P,
        u5: () => me,
        IL: () => re,
      });
      var r = i(34629),
        n = i(97788),
        a = i(56545),
        s = i(80613),
        o = i(89068);
      const c = s.Message;
      class l extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.type || o.Sg(l.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  type: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  value: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  color: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                  label: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                  name: { n: 5, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = o.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new l();
          return l.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_DescriptionLine";
        }
      }
      class m extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.link || o.Sg(m.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  link: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  name: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = o.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Action";
        }
      }
      class d extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || o.Sg(d.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  category: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  color: { n: 6, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = o.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Tag";
        }
      }
      class u extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || o.Sg(u.M()),
            c.initialize(this, e, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  currency: { n: 4, br: o.qM.readBool, bw: o.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  icon_url: { n: 6, br: o.qM.readString, bw: o.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  descriptions: { n: 8, c: l, r: !0, q: !0 },
                  tradable: { n: 9, br: o.qM.readBool, bw: o.gp.writeBool },
                  actions: { n: 10, c: m, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: l, r: !0, q: !0 },
                  owner_actions: { n: 12, c: m, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: o.qM.readString,
                    bw: o.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: o.qM.readString, bw: o.gp.writeString },
                  name_color: {
                    n: 15,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  type: { n: 16, br: o.qM.readString, bw: o.gp.writeString },
                  market_name: {
                    n: 17,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: u },
                  market_actions: { n: 21, c: m, r: !0, q: !0 },
                  commodity: { n: 22, br: o.qM.readBool, bw: o.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  marketable: { n: 25, br: o.qM.readBool, bw: o.gp.writeBool },
                  tags: { n: 26, c: d, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  sealed: { n: 32, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = o.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Description";
        }
      }
      class _ extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || o.Sg(_.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  missing: { n: 8, br: o.qM.readBool, bw: o.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = o.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new _();
          return _.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class f extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || o.Sg(f.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  language: { n: 5, br: o.qM.readString, bw: o.gp.writeString },
                  filters: { n: 6, c: p },
                  start_assetid: {
                    n: 8,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  count: { n: 9, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = o.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class p extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.assetids || o.Sg(p.M()),
            c.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class g extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.assets || o.Sg(g.M()),
            c.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  assets: { n: 1, c: _, r: !0, q: !0 },
                  descriptions: { n: 2, c: u, r: !0, q: !0 },
                  missing_assets: { n: 3, c: _, r: !0, q: !0 },
                  more_items: { n: 4, br: o.qM.readBool, bw: o.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = o.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class y extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.generate_new_token || o.Sg(y.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  generate_new_token: {
                    n: 1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class b extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.trade_offer_access_token || o.Sg(b.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = o.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class B extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.return_url || o.Sg(B.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  return_url: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = o.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class w extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.url || o.Sg(w.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  url: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = o.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new w();
          return w.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class S extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.language || o.Sg(S.M()),
            c.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  language: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  classes: { n: 3, c: M, r: !0, q: !0 },
                  high_pri: { n: 4, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = o.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new S();
          return S.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class M extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.classid || o.Sg(M.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  classid: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = o.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new M();
          return M.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request_Class";
        }
      }
      class h extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.descriptions || o.Sg(h.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { descriptions: { n: 1, c: u, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = o.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            i = new h();
          return h.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      var z;
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, t) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, a.I8)(f, t),
            g,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, t) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, a.I8)(y, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, t) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, a.I8)(B, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, t) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", (0, a.I8)(S, t), h, {
              ePrivilege: 1,
            });
          });
      })(z || (z = {}));
      var R = i(20194),
        v = i(14947),
        N = i(17720),
        q = i(82097),
        T = i(9344),
        I = i(14771),
        j = i(60778),
        F = i(30470),
        O = i(78327),
        W = i(14860),
        U = i(44332),
        C = i(15419);
      const k = {
        11: {
          displayNameLoc: "#SteamNotification_HelpRequest_Author",
          titleLoc: "#SteamNotification_HelpRequest_Title",
          bodyLoc: (e) => ({
            locString: "#SteamNotification_HelpRequest_Body",
            params: [e.ticket],
          }),
          link: (e) => F.TS.HELP_BASE_URL + "wizard/HelpRequest/" + e.ticket,
        },
        6: {
          displayNameLoc: "#SteamNotifications_MajorSale",
          titleLoc: (e) => ({ locString: e.title }),
          bodyLoc: (e) =>
            (0, O.Y2)() && e.link.includes("https://store.steampowered.com")
              ? "#SteamNotifications_MajorSale_SteamChina_Title"
              : e.body,
          image: (e) => e.image,
          link: (e) =>
            (0, O.Y2)() && e.link.includes("https://store.steampowered.com")
              ? e.link.replace(
                  "https://store.steampowered.com",
                  F.TS.STORE_BASE_URL,
                )
              : e.link,
        },
        10: {
          displayNameLoc: (e) => e.display_name,
          titleLoc: (e) => e.title,
          bodyLoc: (e) => e.body,
          image: (e) => e.image,
          link: (e) => e.link,
        },
        14: {
          titleLoc: "#SteamNotification_ModeratorMessage_Title",
          link: (e) =>
            F.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + e.msgid,
        },
      };
      function A(e) {
        if (void 0 !== e) return k[e];
      }
      function E(e) {
        return !!A(e);
      }
      const x = {
        16: {
          steamidAttribute: "inviter",
          titleLoc: "#SteamNotifications_FamilyInviteTitle",
          bodyLoc: "#SteamNotifications_FamilyInviteBody",
          url: (e) =>
            `${F.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
        },
        15: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
          url: () =>
            `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        17: {
          steamidAttribute: "requestor_steamid",
          titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
          bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
          url: (e) => (0, W.w1)(e.familyid, e.request_id),
        },
        19: {
          steamidAttribute: "responder_steamid",
          titleLoc: (e) =>
            1 == e.action
              ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
              : "",
          bodyLoc: (e) =>
            1 == e.action
              ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
              : "",
          url: () =>
            `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        18: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
          url: () =>
            `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        20: {
          steamidAttribute: "steamid_approver",
          titleLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
              : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
          bodyLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
              : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
          url: () =>
            `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        21: {
          steamidAttribute: "steamid_approver",
          titleLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
              : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
          bodyLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
              : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
          url: () =>
            `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
      };
      function P(e) {
        if (void 0 !== e) return x[e];
      }
      function D(e) {
        return !!P(e);
      }
      const G = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23];
      function L(e) {
        return null != G.findIndex((t) => t == e);
      }
      function H(e) {
        return (
          !e.hidden &&
          (E((t = e.notification_type)) || D(t) || L(t)) &&
          me(e.body_data)
        );
        var t;
      }
      var $;
      !(function (e) {
        (e[(e.New = 0)] = "New"),
          (e[(e.Update = 1)] = "Update"),
          (e[(e.Remove = 2)] = "Remove");
      })($ || ($ = {}));
      const X = 172800,
        J = 600,
        V = new j.wd("SteamNotificationStore"),
        Q = V.Debug,
        K = V.Error,
        Y = V.Warning;
      class Z {
        constructor() {
          (0, v.Gn)(this);
        }
        m_rgNotificationRollups = [];
        m_summary = {
          comments: 0,
          inventory_items: 0,
          invites: 0,
          gifts: 0,
          offline_messages: 0,
          trade_offers: 0,
          async_game_updates: 0,
          moderator_messages: 0,
          help_request_replies: 0,
          general: 0,
          wishlist: 0,
          pending_gifts: 0,
          pending_invites: 0,
          major_sale: 0,
          parental_feature_requests: 0,
          family_invites: 0,
          family_purchase_requests: 0,
          family_purchase_request_responses: 0,
          pending_family_invites: 0,
          parental_playtime_requests: 0,
          parental_feature_access_responses: 0,
          parental_playtime_responses: 0,
          requested_game_added: 0,
        };
        m_bLoaded = !1;
        m_nUnviewed = 0;
        m_rgNotifyServerRead = [];
        m_rgNotifyServerHidden = [];
        m_keyNotifyServerRead = "";
        m_keyNotifyServerHidden = "";
        m_steamid;
        m_transport;
        m_rgUnreadNotificationIDs = [];
        m_rgNewRollupIDs = new Map();
        m_rgTestNotifications = [];
        m_currentNotificationsData = null;
        m_strRemoteClientID = "";
        m_eTargetClientType = 0;
        m_fnOnNotificationCallback = null;
        BHasNotificationsData() {
          return null != this.m_currentNotificationsData;
        }
        setTransport(e) {
          this.m_transport = e;
        }
        RegisterOnNotificationCallback(e) {
          this.m_fnOnNotificationCallback = e;
        }
        SetClientFilters(e, t = 0) {
          (this.m_strRemoteClientID = e), (this.m_eTargetClientType = t);
        }
        NotifyServerNotificationsRead(e) {
          this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
        }
        NotifyServerNotificationsHidden(e) {
          this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
        }
        BSendToCallbackAsNew(e) {
          return (
            !e.read &&
            !we(e) &&
            !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
          );
        }
        Dev_AddTestNotification(e) {}
        Dev_UpdateTestNotificationReadState(e, t) {
          const i = this.m_rgTestNotifications.findIndex(
            (t) => t.notification_id == e,
          );
          return (
            -1 !== i &&
            this.m_rgTestNotifications[i].read != t &&
            ((this.m_rgTestNotifications[i].read = t), !0)
          );
        }
        UpdateServer() {
          if (this.m_rgNotifyServerRead.length > 0) {
            const e = a.w.Init(n.V4);
            e.Body().set_notification_ids(this.m_rgNotifyServerRead),
              n.Fn.MarkNotificationsRead(this.m_transport, e) &&
                (this.m_rgNotifyServerRead = []);
          }
          if (this.m_rgNotifyServerHidden.length > 0) {
            const e = a.w.Init(n.b$);
            e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
              n.Fn.HideNotification(this.m_transport, e) &&
                (this.m_rgNotifyServerHidden = []);
          }
        }
        MarkItemRead(e, t = !1) {
          let i = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e,
          );
          if (-1 === i)
            return void (t
              ? this.NotifyServerNotificationsRead([e])
              : K(
                  "Attempted to mark notification read that is not in the notification store",
                ));
          let r = this.m_rgNotificationRollups[i];
          if (r.item.read)
            K("Attempted to mark notification read that is already read");
          else if (((r.item.read = !0), r.rgunread?.length > 0)) {
            this.ReduceNewTotals(r.type, r.rgunread.length);
            let e = [];
            r.rgunread.forEach((t) => {
              e.push(t);
            }),
              r.rgread.push(...r.rgunread),
              (r.rgunread = []),
              this.NotifyServerNotificationsRead(e);
          }
        }
        MarkItemHidden(e) {
          let t = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e,
          );
          if (-1 === t)
            return void K(
              "Attempted to mark notification hidden that is not in the notification store",
            );
          let i = this.m_rgNotificationRollups[t];
          (i.item.hidden = !0),
            i.rgunread?.length > 0 &&
              this.ReduceNewTotals(i.type, i.rgunread?.length),
            this.NotifyServerNotificationsHidden([...i.rgunread, ...i.rgread]);
        }
        ReduceNewTotals(e, t) {
          be(this.m_summary, e, -t);
        }
        MarkAllItemsViewed() {
          const e = a.w.Init(n.nH);
          e.Body().set_remote_client_id(this.m_strRemoteClientID),
            e.Body().set_target_client_type(this.m_eTargetClientType),
            n.Fn.MarkNotificationsViewed(this.m_transport, e),
            (this.m_nUnviewed = 0);
        }
        MarkAllItemsRead(e) {
          let t = [],
            i = [];
          const r = e ?? this.m_rgNotificationRollups;
          return (
            r.forEach((e, r) => {
              e.rgunread.length > 0 &&
                (e.rgunread.forEach((e) => {
                  t.push(e);
                }),
                i.push(r));
            }),
            t.length > 0 &&
              ((this.m_summary = Object.assign(
                {
                  comments: 0,
                  inventory_items: 0,
                  invites: 0,
                  gifts: 0,
                  offline_messages: 0,
                  trade_offers: 0,
                  async_game_updates: 0,
                  moderator_messages: 0,
                  help_request_replies: 0,
                  general: 0,
                  wishlist: 0,
                  pending_gifts: 0,
                  pending_invites: 0,
                  major_sale: 0,
                  parental_feature_requests: 0,
                  family_invites: 0,
                  family_purchase_requests: 0,
                  family_purchase_request_responses: 0,
                  pending_family_invites: 0,
                  parental_playtime_requests: 0,
                  parental_feature_access_responses: 0,
                  parental_playtime_responses: 0,
                  requested_game_added: 0,
                },
                {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                },
              )),
              i.forEach((e) => {
                let t = r[e];
                (t.item.read = !0), (t.rgunread = []);
              }),
              this.NotifyServerNotificationsRead(t)),
            t.length + 0
          );
        }
        ApplyNotificationsUpdate(e) {
          if (
            (Q("ApplyNotificationsUpdate", e),
            !e ||
              (!e.notifications?.length &&
                void 0 === e.pending_friend_count &&
                void 0 === e.pending_gift_count))
          )
            return void Q(
              "Error: ApplyNotificationsUpdate was called with no data",
            );
          if (!this.m_currentNotificationsData)
            return void Q(
              "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
            );
          const t = this.m_currentNotificationsData;
          e.notifications?.forEach((e) => {
            const i = t.notifications.findIndex(
              (t) => t.notification_id == e.notification_id,
            );
            -1 != i
              ? Object.assign(t.notifications[i], e)
              : t.notifications.push(e);
          }),
            void 0 !== e.pending_friend_count &&
              (this.m_currentNotificationsData.pending_friend_count =
                e.pending_friend_count),
            void 0 !== e.pending_gift_count &&
              (this.m_currentNotificationsData.pending_gift_count =
                e.pending_gift_count),
            void 0 !== e.pending_family_invite_count &&
              (this.m_currentNotificationsData.pending_family_invite_count =
                e.pending_family_invite_count),
            this.ProcessNotifications();
        }
        ProcessNewNotificationPayload(e) {
          (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
            this.ProcessNotifications();
        }
        ProcessNotifications() {
          let e = [],
            t = {
              comments: 0,
              inventory_items: 0,
              invites: 0,
              gifts: 0,
              offline_messages: 0,
              trade_offers: 0,
              async_game_updates: 0,
              moderator_messages: 0,
              help_request_replies: 0,
              general: 0,
              wishlist: 0,
              pending_gifts: 0,
              pending_invites: 0,
              major_sale: 0,
              parental_feature_requests: 0,
              family_invites: 0,
              family_purchase_requests: 0,
              family_purchase_request_responses: 0,
              pending_family_invites: 0,
              parental_playtime_requests: 0,
              parental_feature_access_responses: 0,
              parental_playtime_responses: 0,
              requested_game_added: 0,
            },
            i = 0;
          if (
            (this.m_currentNotificationsData?.notifications?.forEach((r) => {
              if (!this.BExcludeClientTargetedNotification(r)) {
                if (this.m_rgNotifyServerHidden.length > 0) {
                  -1 !==
                    this.m_rgNotifyServerHidden.findIndex(
                      (e) => e == r.notification_id,
                    ) && (r.hidden = !0);
                }
                if (H(r)) {
                  if (this.m_rgNotifyServerRead.length > 0) {
                    -1 !==
                      this.m_rgNotifyServerRead.findIndex(
                        (e) => e == r.notification_id,
                      ) && (r.read = !0);
                  }
                  r.read || be(t, r.notification_type, 1),
                    r.viewed || i++,
                    this.AddNotificationToRollups(e, r);
                }
              }
            }),
            e.sort((e, t) => e.timestamp - t.timestamp),
            this.m_fnOnNotificationCallback)
          ) {
            for (const t of e)
              if (t.bSendToCallbackAsNew)
                this.m_rgNewRollupIDs.set(
                  t.rollup_key,
                  JSON.parse(JSON.stringify(t)),
                ),
                  this.m_fnOnNotificationCallback(t, $.New);
              else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
                let e = this.m_rgNewRollupIDs.get(t.rollup_key);
                (e.item.read == t.item.read &&
                  e.item.viewed == t.item.viewed) ||
                  (this.m_rgNewRollupIDs.set(
                    t.rollup_key,
                    JSON.parse(JSON.stringify(t)),
                  ),
                  this.m_fnOnNotificationCallback(t, $.Update));
              }
            for (const [t, i] of this.m_rgNewRollupIDs)
              -1 == e.findIndex((e) => e.rollup_key == t) &&
                (this.m_fnOnNotificationCallback(i, $.Remove),
                this.m_rgNewRollupIDs.delete(t));
          }
          e.reverse(),
            (t.pending_gifts =
              this.m_currentNotificationsData?.pending_gift_count ?? 0),
            (t.pending_invites =
              this.m_currentNotificationsData?.pending_friend_count ?? 0),
            (t.pending_family_invites =
              this.m_currentNotificationsData?.pending_family_invite_count ??
              0),
            (this.m_rgNotificationRollups = e.slice()),
            (this.m_summary = t),
            (this.m_bLoaded = !0),
            (this.m_nUnviewed = i);
        }
        BExcludeClientTargetedNotification(e) {
          const t = me(e.body_data);
          return (
            !!t &&
            (!(
              !t.remote_client_id ||
              this.m_strRemoteClientID == t.remote_client_id
            ) ||
              !(
                !t.target_client_types ||
                this.m_eTargetClientType & t.target_client_types
              ))
          );
        }
        BReplaceRollupItem(e, t) {
          return e.read != t.read
            ? t.read
            : (e.read && t.read) || t.viewed == e.viewed
              ? t.timestamp < e.timestamp
              : !(e.viewed || !t.viewed) ||
                (!(!e.viewed || !t.viewed) && t.viewed < e.viewed);
        }
        AddNotificationToRollups(e, t) {
          const i = this.BSendToCallbackAsNew(t);
          i && this.m_rgUnreadNotificationIDs.push(t.notification_id);
          let r = t.notification_type;
          switch (r) {
            case 3:
              {
                const n = de(t);
                if (!n) return;
                const a =
                  "comment_" +
                  n.owner_steam_id?.GetAccountID() +
                  "_" +
                  n.forum_id +
                  "_" +
                  n.topic_id;
                let s = e.findIndex((e) => e.rollup_key == a);
                if (-1 == s)
                  e.push({
                    type: r,
                    rollup_key: a,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bSendToCallbackAsNew: i,
                    url: ne(n),
                  });
                else {
                  let r = e[s];
                  this.BReplaceRollupItem(t, r.item) &&
                    ((r.url = ne(n)),
                    (r.item = t),
                    (r.timestamp = t.timestamp),
                    (r.bSendToCallbackAsNew = i)),
                    (r.rollup_count = r.rollup_count + 1),
                    t.read
                      ? r.rgread.push(t.notification_id)
                      : r.rgunread.push(t.notification_id);
                }
                n.json_data?.app_id &&
                  q.A.Get().QueueAppRequest(n.json_data.app_id, {
                    include_assets: !0,
                  });
              }
              break;
            case 4:
              const n = de(t);
              if (n) {
                const a = "item_" + n.appid;
                this.AddNotificationToRollupByAppID(e, t, a, r, i, n.appid);
              }
              break;
            case 12:
              const a = de(t)?.appid.toString();
              if (a) {
                const n = "asyncgame_" + a;
                this.AddNotificationToRollupByAppID(e, t, n, r, i, a);
              }
              break;
            case 8:
              const s = de(t)?.appid;
              s && q.A.Get().QueueAppRequest(s, { include_assets: !0 });
            default:
              e.push({
                type: r,
                rollup_key: t.notification_id,
                item: t,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: i,
              });
          }
        }
        AddNotificationToRollupByAppID(e, t, i, r, n, a) {
          let s = e.findIndex((e) => e.rollup_key == i);
          if (-1 == s)
            e.push({
              type: r,
              rollup_key: i,
              item: t,
              rollup_count: 1,
              timestamp: t.timestamp,
              rgunread: t.read ? [] : [t.notification_id],
              rgread: t.read ? [t.notification_id] : [],
              bSendToCallbackAsNew: n,
            });
          else {
            let i = e[s];
            this.BReplaceRollupItem(t, i.item) &&
              ((i.item = t),
              (i.timestamp = t.timestamp),
              (i.bSendToCallbackAsNew = n)),
              (i.rollup_count = i.rollup_count + 1),
              t.read
                ? i.rgread.push(t.notification_id)
                : i.rgunread.push(t.notification_id);
          }
          q.A.Get().QueueAppRequest(parseInt(a), { include_assets: !0 });
        }
      }
      async function ee(e, t, i, r, s, o = !0, c = !1) {
        if (!t) throw new Error("Invalid steamid for GetSteamNotifications");
        const l = a.w.Init(n.GG);
        l.Body().set_language(i),
          l.Body().set_include_read(o),
          l.Body().set_include_pinned_counts(!0),
          l.Body().set_include_confirmation_count(c);
        const m = await n.Fn.GetSteamNotifications(e, l);
        if (1 !== m.GetEResult())
          throw (
            (Y(
              `Received error from GetSteamNotifications. Result ${m.GetEResult()}. Transport ${m.Hdr().transport_error()}`,
            ),
            new Error(`Error from GetSteamNotifications: ${m.GetEResult()}`))
          );
        const d = m.Body().toObject();
        return (
          r &&
            (d.notifications = d.notifications?.filter(
              (e) => !ye(e.notification_type, r, s),
            )),
          d
        );
      }
      (0, r.Cg)([v.sH], Z.prototype, "m_rgNotificationRollups", void 0),
        (0, r.Cg)([v.sH], Z.prototype, "m_summary", void 0),
        (0, r.Cg)([v.sH], Z.prototype, "m_bLoaded", void 0),
        (0, r.Cg)([v.sH], Z.prototype, "m_nUnviewed", void 0),
        (0, r.Cg)([v.XI], Z.prototype, "ProcessNotifications", null);
      const te = "ItemMetadata";
      function ie(e) {
        return [
          `${te}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`,
        ];
      }
      function re(e, t, i) {
        let r = _e(4, e.body_data);
        r.steamid = t;
        let n = (0, R.I)({
          queryKey: ie(r),
          queryFn: async () =>
            (async function (e, t) {
              if (!(e && e.steamid && e.contextid && e.appid && e.assetid))
                return K("Item notification missing required attributes"), null;
              const i = a.w.Init(f);
              i.Body().set_steamid(e.steamid),
                i.Body().set_contextid(e.contextid),
                i.Body().set_appid(parseInt(e.appid)),
                i.Body().set_get_descriptions(!0),
                i.Body().set_language(F.TS.LANGUAGE);
              let r = new p();
              r.add_assetids(e.assetid), i.Body().set_filters(r);
              const n = await z.GetInventoryItemsWithDescriptions(t, i);
              if (1 !== n.GetEResult())
                return (
                  K(
                    "Request for steam item metadata did not succeed",
                    n.GetEResult(),
                  ),
                  null
                );
              let s = "";
              const o = await q.A.Get().QueueAppRequest(parseInt(e.appid), {});
              if (1 == o) {
                const t = q.A.Get().GetApp(parseInt(e.appid));
                s = t?.GetName();
              } else K("Failed getting app info", o);
              return {
                app_name: s,
                item_data: n.Body().toObject().descriptions[0],
              };
            })(r, i),
          staleTime: 1 / 0,
        });
        return n.isSuccess ? n.data : null;
      }
      function ne(e) {
        let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
        return e.last_post > 0 && (t += "&tscn=" + (e.last_post - 1)), t;
      }
      function ae(e) {
        return 10 == e.comment_type;
      }
      function se(e) {
        return e?.bhas_friend;
      }
      function oe(e) {
        return 10 == e.comment_type;
      }
      function ce(e) {
        return ae(e) || se(e);
      }
      function le(e) {
        return oe(e);
      }
      function me(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (t) {
          Q("Steam notification in invalid format:", e);
        }
        return null;
      }
      function de(e) {
        return _e(e.notification_type, e.body_data);
      }
      function ue(e) {
        return _e(e.type, e.item?.body_data);
      }
      function _e(e, t) {
        let i = me(t);
        if (!i) return null;
        switch (e) {
          case 2:
            return i.gifter_account;
          case 22:
            return {
              responder_steamid: i.responder_steamid,
              package_id: i.package_id,
              bundle_id: i.bundle_id,
            };
          case 9:
            return parseInt(i.sender);
          case 8:
            return {
              appid: i.appid,
              count: i.count ?? 1,
              appids: i.appids ?? [],
            };
          case 12:
            return !i.appid || !i.state || (1 != i.state && 2 != i.state)
              ? (Q("Async game notification invalid data", t), null)
              : { appid: parseInt(i.appid), state: parseInt(i.state) };
          case 3:
            let r = {
              owner_steam_id: i.owner_steam_id
                ? new N.b(i.owner_steam_id)
                : null,
              bclan_account: fe(i.bclan_account),
              title: i.title,
              comment: i.text,
              time: i.last_post,
              comment_type: Number(i.type),
              topic_id: i.topic_id,
              forum_id: i.forum_id,
              account_steam_id: i.account_id
                ? N.b.InitFromAccountID(i.account_id)
                : null,
              bhas_friend: fe(i.bhas_friend),
              bis_forum: fe(i.bis_forum),
              last_post: i.last_post,
              bsubscribed: fe(i.subscribed),
              bis_owner: fe(i.bis_owner),
            };
            return (
              i.json_data &&
                (r.json_data = {
                  app_id: parseInt(i.json_data.app_id),
                  file_type: parseInt(i.json_data.file_type),
                  title: i.json_data.title,
                }),
              r
            );
          case 5:
            return {
              requestorID: parseInt(i.requestor_id),
              state: i.state ? parseInt(i.state) : 0,
            };
          case 4:
            return {
              appid: parseInt(i.app_id),
              assetid: i.asset_id ?? "",
              contextid: i.context_id ?? "",
            };
          case 23:
            return {
              url: i.url ?? "",
              strGameName: i.content_app_name ?? "",
              mediaType: i.media_type ?? "clip",
              secDuration: parseFloat(i.duration_seconds ?? 0),
              nSize: parseInt(i.file_size ?? 0),
              strMachineName: i.machine_name,
              rtExpiration: i.expiration,
              thumbnailURL: i.thumbnail_url,
            };
          default:
            return (
              Q(
                "GetCustomNotificationDataByType called with unexpected type:" +
                  e,
                t,
              ),
              null
            );
        }
      }
      function fe(e) {
        if (void 0 === e) return !1;
        if ("number" == typeof e) return e > 0;
        if ("string" == typeof e)
          switch (e.toLowerCase()?.trim()) {
            case "true":
            case "1":
              return !0;
            default:
              return !1;
          }
        return Q("notification contained unexpected boolean value"), !1;
      }
      const pe = {
        0: { rollup_field: void 0, eFeature: void 0 },
        1: { rollup_field: void 0, eFeature: void 0 },
        2: { rollup_field: "gifts", eFeature: T.uX },
        3: { rollup_field: "comments", eFeature: 2 },
        4: { rollup_field: "inventory_items", eFeature: 3 },
        5: { rollup_field: "invites", eFeature: 4 },
        6: { rollup_field: "major_sale", eFeature: 1 },
        7: { rollup_field: void 0, eFeature: void 0 },
        8: { rollup_field: "wishlist", eFeature: 1 },
        9: { rollup_field: "trade_offers", eFeature: 6 },
        10: { rollup_field: "general", eFeature: T.uX },
        11: { rollup_field: "help_request_replies", eFeature: T.uX },
        12: { rollup_field: "async_game_updates", eFeature: T.uX },
        14: { rollup_field: "moderator_messages", eFeature: 2 },
        15: { rollup_field: "parental_feature_requests", eFeature: T.uX },
        16: { rollup_field: "family_invites", eFeature: T.uX },
        17: { rollup_field: "family_purchase_requests", eFeature: T.uX },
        18: { rollup_field: "parental_playtime_requests", eFeature: T.uX },
        19: {
          rollup_field: "family_purchase_request_responses",
          eFeature: T.uX,
        },
        20: {
          rollup_field: "parental_feature_access_responses",
          eFeature: T.uX,
        },
        21: { rollup_field: "parental_playtime_responses", eFeature: T.uX },
        22: { rollup_field: "requested_game_added", eFeature: T.uX },
        23: { rollup_field: void 0, eFeature: T.uX },
        24: { rollup_field: void 0, eFeature: T.uX },
      };
      function ge(e) {
        const t = pe[e];
        return (0, U.w)(!!t, `Missing notification type data for ${e}`), t;
      }
      function ye(e, t, i) {
        if (!t) return !1;
        const r = ge(e);
        return (0, C.EC)(t, r?.eFeature ?? T.JC, i);
      }
      function be(e, t, i) {
        (0, v.h5)(() => {
          const r = ge(t);
          r?.rollup_field &&
            (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + i));
        });
      }
      function Be(e) {
        return !e.viewed || e.viewed + J > (0, I._2)();
      }
      function we(e) {
        return e.viewed && e.viewed + X < (0, I._2)();
      }
    },
  },
]);

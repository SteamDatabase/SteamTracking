/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8310],
  {
    97788: (e, t, i) => {
      i.d(t, {
        Fn: () => r,
        GG: () => m,
        V4: () => _,
        b$: () => w,
        nH: () => f,
        p$: () => l,
      });
      var r,
        n,
        s = i(80613),
        a = i.n(s),
        o = i(89068),
        c = i(56545);
      function l(e) {
        return "unknown ESteamNotificationType ( " + e + " )";
      }
      class u extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.notification_id || o.Sg(u.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  notification_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  notification_targets: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  notification_type: {
                    n: 3,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  body_data: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  read: { n: 7, br: o.qM.readBool, bw: o.gp.writeBool },
                  timestamp: {
                    n: 8,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  hidden: { n: 9, br: o.qM.readBool, bw: o.gp.writeBool },
                  expiry: { n: 10, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  viewed: { n: 11, br: o.qM.readUint32, bw: o.gp.writeUint32 },
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
          let t = new (a().BinaryReader)(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationData";
        }
      }
      class m extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.include_hidden || o.Sg(m.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  include_hidden: {
                    n: 1,
                    d: !1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  language: {
                    n: 2,
                    d: 0,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  include_confirmation_count: {
                    n: 3,
                    d: !0,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  include_pinned_counts: {
                    n: 4,
                    d: !1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  include_read: {
                    n: 5,
                    d: !0,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  count_only: {
                    n: 6,
                    d: !1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
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
          let t = new (a().BinaryReader)(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Request";
        }
      }
      class d extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.notifications || o.Sg(d.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  notifications: { n: 1, c: u, r: !0, q: !0 },
                  confirmation_count: {
                    n: 2,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  pending_gift_count: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_friend_count: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  unread_count: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_family_invite_count: {
                    n: 7,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
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
          let t = new (a().BinaryReader)(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Response";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.timestamp || o.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  timestamp: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  notification_type: {
                    n: 2,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  notification_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
                  },
                  mark_all_read: {
                    n: 4,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
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
          let t = new (a().BinaryReader)(e),
            i = new _();
          return _.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsRead_Notification";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.remote_client_id || o.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  remote_client_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  target_client_type: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
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
          let t = new (a().BinaryReader)(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsViewed_Notification";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.notification_type || o.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  notification_type: {
                    n: 1,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  notification_targets: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
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
          let t = new (a().BinaryReader)(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationPreference";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.preferences || o.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { preferences: { n: 1, c: p, r: !0, q: !0 } },
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
          let t = new (a().BinaryReader)(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Request";
        }
      }
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Response";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Request";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.preferences || o.Sg(B.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { preferences: { n: 1, c: p, r: !0, q: !0 } },
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
          let t = new (a().BinaryReader)(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Response";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.notification_ids || o.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  notification_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
                  },
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
          let t = new (a().BinaryReader)(e),
            i = new w();
          return w.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_HideNotification_Notification";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.notifications || o.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  notifications: { n: 1, c: u, r: !0, q: !0 },
                  pending_gift_count: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_friend_count: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_family_invite_count: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
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
          let t = new (a().BinaryReader)(e),
            i = new M();
          return M.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_NotificationsReceived_Notification";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.preferences || o.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { preferences: { n: 1, c: p, r: !0, q: !0 } },
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
          let t = new (a().BinaryReader)(e),
            i = new h();
          return h.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_PreferencesUpdated_Notification";
        }
      }
      !(function (e) {
        (e.GetSteamNotifications = function (e, t) {
          return e.SendMsg(
            "SteamNotification.GetSteamNotifications#1",
            (0, c.I8)(m, t),
            d,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.MarkNotificationsRead = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, c.I8)(_, t),
              { ePrivilege: 1 },
            );
          }),
          (e.MarkNotificationsViewed = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, c.I8)(f, t),
              { ePrivilege: 1 },
            );
          }),
          (e.HideNotification = function (e, t) {
            return e.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, c.I8)(w, t),
              { ePrivilege: 1 },
            );
          }),
          (e.SetPreferences = function (e, t) {
            return e.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, c.I8)(g, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferences = function (e, t) {
            return e.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, c.I8)(y, t),
              B,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(r || (r = {})),
        (function (e) {
          (e.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: M,
          }),
            (e.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: h,
            });
        })(n || (n = {}));
    },
    92406: (e, t, i) => {
      i.d(t, {
        OT: () => le,
        iO: () => ce,
        T4: () => oe,
        n8: () => ae,
        hr: () => se,
        IC: () => A,
        V4: () => L,
        sR: () => D,
        jb: () => be,
        Rl: () => Be,
        XT: () => we,
        cE: () => Z,
        tM: () => ee,
        K9: () => E,
        bP: () => de,
        aq: () => P,
        u5: () => ue,
        IL: () => re,
      });
      var r,
        n = i(34629),
        s = i(97788),
        a = i(56545),
        o = i(80613),
        c = i.n(o),
        l = i(89068);
      class u extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.type || l.Sg(u.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  type: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  color: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  label: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  name: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = l.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_DescriptionLine";
        }
      }
      class m extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.link || l.Sg(m.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  link: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = l.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Action";
        }
      }
      class d extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || l.Sg(d.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  category: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  color: { n: 6, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = l.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Tag";
        }
      }
      class _ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || l.Sg(_.M()),
            o.Message.initialize(
              this,
              e,
              0,
              -1,
              [8, 10, 11, 12, 13, 21, 26],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  currency: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  icon_url: { n: 6, br: l.qM.readString, bw: l.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  descriptions: { n: 8, c: u, r: !0, q: !0 },
                  tradable: { n: 9, br: l.qM.readBool, bw: l.gp.writeBool },
                  actions: { n: 10, c: m, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: u, r: !0, q: !0 },
                  owner_actions: { n: 12, c: m, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: l.qM.readString, bw: l.gp.writeString },
                  name_color: {
                    n: 15,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  type: { n: 16, br: l.qM.readString, bw: l.gp.writeString },
                  market_name: {
                    n: 17,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: _ },
                  market_actions: { n: 21, c: m, r: !0, q: !0 },
                  commodity: { n: 22, br: l.qM.readBool, bw: l.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  marketable: { n: 25, br: l.qM.readBool, bw: l.gp.writeBool },
                  tags: { n: 26, c: d, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  sealed: { n: 32, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new _();
          return _.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Description";
        }
      }
      class f extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || l.Sg(f.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: l.qM.readInt64String,
                    bw: l.gp.writeInt64String,
                  },
                  missing: { n: 8, br: l.qM.readBool, bw: l.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: l.qM.readInt64String,
                    bw: l.gp.writeInt64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class p extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || l.Sg(p.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  language: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                  filters: { n: 6, c: g },
                  start_assetid: {
                    n: 8,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  count: { n: 9, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class g extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.assetids || l.Sg(g.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint64String,
                    pbr: l.qM.readPackedUint64String,
                    bw: l.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class b extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.assets || l.Sg(b.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  assets: { n: 1, c: f, r: !0, q: !0 },
                  descriptions: { n: 2, c: _, r: !0, q: !0 },
                  missing_assets: { n: 3, c: f, r: !0, q: !0 },
                  more_items: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = l.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.generate_new_token || l.Sg(y.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class B extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.trade_offer_access_token || l.Sg(B.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = l.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class w extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.return_url || l.Sg(w.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  return_url: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new w();
          return w.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class M extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.url || l.Sg(M.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  url: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new M();
          return M.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class h extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.language || l.Sg(h.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  classes: { n: 3, c: S, r: !0, q: !0 },
                  high_pri: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new h();
          return h.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class S extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.classid || l.Sg(S.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  classid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new S();
          return S.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request_Class";
        }
      }
      class R extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.descriptions || l.Sg(R.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { descriptions: { n: 1, c: _, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new R();
          return R.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, t) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, a.I8)(p, t),
            b,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, t) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, a.I8)(y, t),
              B,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, t) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, a.I8)(w, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, t) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", (0, a.I8)(h, t), R, {
              ePrivilege: 1,
            });
          });
      })(r || (r = {}));
      var z = i(20194),
        v = i(14947),
        q = i(17720),
        N = i(82097),
        T = i(9344),
        I = i(14771),
        O = i(60778),
        j = i(30470),
        F = i(78327),
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
          link: (e) => j.TS.HELP_BASE_URL + "wizard/HelpRequest/" + e.ticket,
        },
        6: {
          displayNameLoc: "#SteamNotifications_MajorSale",
          titleLoc: (e) => ({ locString: e.title }),
          bodyLoc: (e) =>
            (0, F.Y2)() && e.link.includes("https://store.steampowered.com")
              ? "#SteamNotifications_MajorSale_SteamChina_Title"
              : e.body,
          image: (e) => e.image,
          link: (e) =>
            (0, F.Y2)() && e.link.includes("https://store.steampowered.com")
              ? e.link.replace(
                  "https://store.steampowered.com",
                  j.TS.STORE_BASE_URL,
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
            j.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + e.msgid,
        },
      };
      function E(e) {
        if (void 0 !== e) return k[e];
      }
      function A(e) {
        return !!E(e);
      }
      const x = {
        16: {
          steamidAttribute: "inviter",
          titleLoc: "#SteamNotifications_FamilyInviteTitle",
          bodyLoc: "#SteamNotifications_FamilyInviteBody",
          url: (e) =>
            `${j.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
        },
        15: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
          url: () =>
            `${j.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
            `${j.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        18: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
          url: () =>
            `${j.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
            `${j.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
            `${j.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
          (A((t = e.notification_type)) || D(t) || L(t)) &&
          ue(e.body_data)
        );
        var t;
      }
      var $;
      !(function (e) {
        (e[(e.New = 0)] = "New"),
          (e[(e.Update = 1)] = "Update"),
          (e[(e.Remove = 2)] = "Remove");
      })($ || ($ = {}));
      const Q = 172800,
        X = 600,
        J = new O.wd("SteamNotificationStore"),
        V = J.Debug,
        K = J.Error,
        Y = J.Warning;
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
            const e = a.w.Init(s.V4);
            e.Body().set_notification_ids(this.m_rgNotifyServerRead),
              s.Fn.MarkNotificationsRead(this.m_transport, e) &&
                (this.m_rgNotifyServerRead = []);
          }
          if (this.m_rgNotifyServerHidden.length > 0) {
            const e = a.w.Init(s.b$);
            e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
              s.Fn.HideNotification(this.m_transport, e) &&
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
          ye(this.m_summary, e, -t);
        }
        MarkAllItemsViewed() {
          const e = a.w.Init(s.nH);
          e.Body().set_remote_client_id(this.m_strRemoteClientID),
            e.Body().set_target_client_type(this.m_eTargetClientType),
            s.Fn.MarkNotificationsViewed(this.m_transport, e),
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
            (V("ApplyNotificationsUpdate", e),
            !e ||
              (!e.notifications?.length &&
                void 0 === e.pending_friend_count &&
                void 0 === e.pending_gift_count))
          )
            return void V(
              "Error: ApplyNotificationsUpdate was called with no data",
            );
          if (!this.m_currentNotificationsData)
            return void V(
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
                  r.read || ye(t, r.notification_type, 1),
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
          const t = ue(e.body_data);
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
                const n = me(t);
                if (!n) return;
                const s =
                  "comment_" +
                  n.owner_steam_id?.GetAccountID() +
                  "_" +
                  n.forum_id +
                  "_" +
                  n.topic_id;
                let a = e.findIndex((e) => e.rollup_key == s);
                if (-1 == a)
                  e.push({
                    type: r,
                    rollup_key: s,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bSendToCallbackAsNew: i,
                    url: ne(n),
                  });
                else {
                  let r = e[a];
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
                  N.A.Get().QueueAppRequest(n.json_data.app_id, {
                    include_assets: !0,
                  });
              }
              break;
            case 4:
              const n = me(t);
              if (n) {
                const s = "item_" + n.appid;
                this.AddNotificationToRollupByAppID(e, t, s, r, i, n.appid);
              }
              break;
            case 12:
              const s = me(t)?.appid.toString();
              if (s) {
                const n = "asyncgame_" + s;
                this.AddNotificationToRollupByAppID(e, t, n, r, i, s);
              }
              break;
            case 8:
              const a = me(t)?.appid;
              a && N.A.Get().QueueAppRequest(a, { include_assets: !0 });
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
        AddNotificationToRollupByAppID(e, t, i, r, n, s) {
          let a = e.findIndex((e) => e.rollup_key == i);
          if (-1 == a)
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
            let i = e[a];
            this.BReplaceRollupItem(t, i.item) &&
              ((i.item = t),
              (i.timestamp = t.timestamp),
              (i.bSendToCallbackAsNew = n)),
              (i.rollup_count = i.rollup_count + 1),
              t.read
                ? i.rgread.push(t.notification_id)
                : i.rgunread.push(t.notification_id);
          }
          N.A.Get().QueueAppRequest(parseInt(s), { include_assets: !0 });
        }
      }
      async function ee(e, t, i, r, n, o = !0, c = !1) {
        if (!t) throw new Error("Invalid steamid for GetSteamNotifications");
        const l = a.w.Init(s.GG);
        l.Body().set_language(i),
          l.Body().set_include_read(o),
          l.Body().set_include_pinned_counts(!0),
          l.Body().set_include_confirmation_count(c);
        const u = await s.Fn.GetSteamNotifications(e, l);
        if (1 !== u.GetEResult())
          throw (
            (Y(
              `Received error from GetSteamNotifications. Result ${u.GetEResult()}. Transport ${u.Hdr().transport_error()}`,
            ),
            new Error(`Error from GetSteamNotifications: ${u.GetEResult()}`))
          );
        const m = u.Body().toObject();
        return (
          r &&
            (m.notifications = m.notifications?.filter(
              (e) => !be(e.notification_type, r, n),
            )),
          m
        );
      }
      (0, n.Cg)([v.sH], Z.prototype, "m_rgNotificationRollups", void 0),
        (0, n.Cg)([v.sH], Z.prototype, "m_summary", void 0),
        (0, n.Cg)([v.sH], Z.prototype, "m_bLoaded", void 0),
        (0, n.Cg)([v.sH], Z.prototype, "m_nUnviewed", void 0),
        (0, n.Cg)([v.XI], Z.prototype, "ProcessNotifications", null);
      const te = "ItemMetadata";
      function ie(e) {
        return [
          `${te}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`,
        ];
      }
      function re(e, t, i) {
        let n = _e(4, e.body_data);
        n.steamid = t;
        let s = (0, z.I)({
          queryKey: ie(n),
          queryFn: async () =>
            (async function (e, t) {
              if (!(e && e.steamid && e.contextid && e.appid && e.assetid))
                return K("Item notification missing required attributes"), null;
              const i = a.w.Init(p);
              i.Body().set_steamid(e.steamid),
                i.Body().set_contextid(e.contextid),
                i.Body().set_appid(parseInt(e.appid)),
                i.Body().set_get_descriptions(!0),
                i.Body().set_language(j.TS.LANGUAGE);
              let n = new g();
              n.add_assetids(e.assetid), i.Body().set_filters(n);
              const s = await r.GetInventoryItemsWithDescriptions(t, i);
              if (1 !== s.GetEResult())
                return (
                  K(
                    "Request for steam item metadata did not succeed",
                    s.GetEResult(),
                  ),
                  null
                );
              let o = "";
              const c = await N.A.Get().QueueAppRequest(parseInt(e.appid), {});
              if (1 == c) {
                const t = N.A.Get().GetApp(parseInt(e.appid));
                o = t?.GetName();
              } else K("Failed getting app info", c);
              return {
                app_name: o,
                item_data: s.Body().toObject().descriptions[0],
              };
            })(n, i),
          staleTime: 1 / 0,
        });
        return s.isSuccess ? s.data : null;
      }
      function ne(e) {
        let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
        return e.last_post > 0 && (t += "&tscn=" + (e.last_post - 1)), t;
      }
      function se(e) {
        return 10 == e.comment_type;
      }
      function ae(e) {
        return e?.bhas_friend;
      }
      function oe(e) {
        return 10 == e.comment_type;
      }
      function ce(e) {
        return se(e) || ae(e);
      }
      function le(e) {
        return oe(e);
      }
      function ue(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (t) {
          V("Steam notification in invalid format:", e);
        }
        return null;
      }
      function me(e) {
        return _e(e.notification_type, e.body_data);
      }
      function de(e) {
        return _e(e.type, e.item?.body_data);
      }
      function _e(e, t) {
        let i = ue(t);
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
              ? (V("Async game notification invalid data", t), null)
              : { appid: parseInt(i.appid), state: parseInt(i.state) };
          case 3:
            let r = {
              owner_steam_id: i.owner_steam_id
                ? new q.b(i.owner_steam_id)
                : null,
              bclan_account: fe(i.bclan_account),
              title: i.title,
              comment: i.text,
              time: i.last_post,
              comment_type: Number(i.type),
              topic_id: i.topic_id,
              forum_id: i.forum_id,
              account_steam_id: i.account_id
                ? q.b.InitFromAccountID(i.account_id)
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
              V(
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
        return V("notification contained unexpected boolean value"), !1;
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
      function be(e, t, i) {
        if (!t) return !1;
        const r = ge(e);
        return (0, C.EC)(t, r?.eFeature ?? T.JC, i);
      }
      function ye(e, t, i) {
        (0, v.h5)(() => {
          const r = ge(t);
          r?.rollup_field &&
            (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + i));
        });
      }
      function Be(e) {
        return !e.viewed || e.viewed + X > (0, I._2)();
      }
      function we(e) {
        return e.viewed && e.viewed + Q < (0, I._2)();
      }
    },
    54806: (e, t, i) => {
      i.d(t, { E: () => g });
      var r = i(90626),
        n = i(86709),
        s = i(45747),
        a = i(74500),
        o = i(57168);
      function c(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var l = class extends a.Q {
          #e;
          #t;
          #i;
          #r;
          #n;
          #s;
          #a;
          #o;
          constructor(e, t, i) {
            super(),
              (this.#e = e),
              (this.#r = i),
              (this.#i = []),
              (this.#n = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#n.forEach((e) => {
                e.subscribe((t) => {
                  this.#c(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#n.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, i) {
            (this.#i = e),
              (this.#r = t),
              n.j.batch(() => {
                const e = this.#n,
                  t = this.#l(this.#i);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, i),
                );
                const r = t.map((e) => e.observer),
                  n = r.map((e) => e.getCurrentResult()),
                  s = r.some((t, i) => t !== e[i]);
                (e.length !== r.length || s) &&
                  ((this.#n = r),
                  (this.#t = n),
                  this.hasListeners() &&
                    (c(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    c(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#c(e, t);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#n.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#n;
          }
          getOptimisticResult(e, t) {
            const i = this.#l(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [i, (e) => this.#m(e ?? i, t), () => this.#d(i, e)];
          }
          #d(e, t) {
            const i = this.#l(t);
            return i.map((t, r) => {
              const n = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? n
                : t.observer.trackResult(n, (e) => {
                    i.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #m(e, t) {
            return t
              ? ((this.#s && this.#t === this.#o && t === this.#a) ||
                  ((this.#a = t),
                  (this.#o = this.#t),
                  (this.#s = (0, o.BH)(this.#s, t(e)))),
                this.#s)
              : e;
          }
          #l(e) {
            const t = new Map(this.#n.map((e) => [e.options.queryHash, e])),
              i = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  n = t.get(r.queryHash);
                if (n) i.push({ defaultedQueryOptions: r, observer: n });
                else {
                  const e = this.#n.find(
                    (e) => e.options.queryHash === r.queryHash,
                  );
                  i.push({
                    defaultedQueryOptions: r,
                    observer: e ?? new s.$(this.#e, r),
                  });
                }
              }),
              i.sort(
                (t, i) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === i.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #c(e, t) {
            const i = this.#n.indexOf(e);
            -1 !== i &&
              ((this.#t = (function (e, t, i) {
                const r = e.slice(0);
                return (r[t] = i), r;
              })(this.#t, i, t)),
              this.#u());
          }
          #u() {
            if (this.hasListeners()) {
              this.#s !==
                this.#m(this.#d(this.#t, this.#i), this.#r?.combine) &&
                n.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        u = i(75233),
        m = i(22730),
        d = i(43424),
        _ = i(19086),
        f = i(44407),
        p = i(19866);
      function g({ queries: e, ...t }, i) {
        const a = (0, u.jE)(i),
          o = (0, m.w)(),
          c = (0, d.h)(),
          g = r.useMemo(
            () =>
              e.map((e) => {
                const t = a.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, a, o],
          );
        g.forEach((e) => {
          (0, f.jv)(e), (0, _.LJ)(e, c);
        }),
          (0, _.wZ)(c);
        const [b] = r.useState(() => new l(a, g, t)),
          [y, B, w] = b.getOptimisticResult(g, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (o ? p.l : b.subscribe(n.j.batchCalls(e))),
            [b, o],
          ),
          () => b.getCurrentResult(),
          () => b.getCurrentResult(),
        ),
          r.useEffect(() => {
            b.setQueries(g, t, { listeners: !1 });
          }, [g, t, b]);
        const M = y.some((e, t) => (0, f.EU)(g[t], e))
          ? y.flatMap((e, t) => {
              const i = g[t];
              if (i) {
                const t = new s.$(a, i);
                if ((0, f.EU)(i, e)) return (0, f.iL)(i, t, c);
                (0, f.nE)(e, o) && (0, f.iL)(i, t, c);
              }
              return [];
            })
          : [];
        if (M.length > 0) throw Promise.all(M);
        const h = y.find((e, t) => {
          const i = g[t];
          return (
            i &&
            (0, _.$1)({
              result: e,
              errorResetBoundary: c,
              throwOnError: i.throwOnError,
              query: a.getQueryCache().get(i.queryHash),
            })
          );
        });
        if (h?.error) throw h.error;
        return B(w());
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8310],
  {
    97788: (e, t, i) => {
      i.d(t, {
        Fn: () => r,
        GG: () => u,
        V4: () => _,
        b$: () => w,
        nH: () => p,
        p$: () => l,
      });
      var r,
        a,
        n = i(80613),
        s = i.n(n),
        o = i(89068),
        c = i(56545);
      function l(e) {
        return "unknown ESteamNotificationType ( " + e + " )";
      }
      class m extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.notification_id || o.Sg(m.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
          let t = new (s().BinaryReader)(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationData";
        }
      }
      class u extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.include_hidden || o.Sg(u.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
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
          let t = new (s().BinaryReader)(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Request";
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.notifications || o.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  notifications: { n: 1, c: m, r: !0, q: !0 },
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
          let t = new (s().BinaryReader)(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Response";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.timestamp || o.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, [3], null);
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
          let t = new (s().BinaryReader)(e),
            i = new _();
          return _.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsRead_Notification";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.remote_client_id || o.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
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
          let t = new (s().BinaryReader)(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsViewed_Notification";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.notification_type || o.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
          let t = new (s().BinaryReader)(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationPreference";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.preferences || o.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { preferences: { n: 1, c: f, r: !0, q: !0 } },
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
          let t = new (s().BinaryReader)(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Request";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (s().BinaryReader)(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Response";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Request";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.preferences || o.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { preferences: { n: 1, c: f, r: !0, q: !0 } },
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
          let t = new (s().BinaryReader)(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Response";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.notification_ids || o.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
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
          let t = new (s().BinaryReader)(e),
            i = new w();
          return w.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_HideNotification_Notification";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.notifications || o.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  notifications: { n: 1, c: m, r: !0, q: !0 },
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
          let t = new (s().BinaryReader)(e),
            i = new M();
          return M.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_NotificationsReceived_Notification";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.preferences || o.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { preferences: { n: 1, c: f, r: !0, q: !0 } },
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
          let t = new (s().BinaryReader)(e),
            i = new S();
          return S.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_PreferencesUpdated_Notification";
        }
      }
      !(function (e) {
        (e.GetSteamNotifications = function (e, t) {
          return e.SendMsg(
            "SteamNotification.GetSteamNotifications#1",
            (0, c.I8)(u, t),
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
              (0, c.I8)(p, t),
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
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferences = function (e, t) {
            return e.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, c.I8)(B, t),
              b,
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
              request: S,
            });
        })(a || (a = {}));
    },
    92406: (e, t, i) => {
      i.d(t, {
        OT: () => ge,
        iO: () => fe,
        T4: () => pe,
        n8: () => _e,
        hr: () => de,
        IC: () => $,
        V4: () => Q,
        sR: () => V,
        jb: () => he,
        Rl: () => qe,
        XT: () => ve,
        cE: () => se,
        tM: () => oe,
        K9: () => H,
        bP: () => be,
        aq: () => J,
        u5: () => ye,
        IL: () => me,
      });
      var r,
        a = i(34629),
        n = i(97788),
        s = i(56545),
        o = i(80613),
        c = i.n(o),
        l = i(89068);
      class m extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.type || l.Sg(m.M()),
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
                  type: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  color: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  label: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  name: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
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
          return "CEconItem_DescriptionLine";
        }
      }
      class u extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.link || l.Sg(u.M()),
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
                  link: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
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
            _.prototype.contained_items || l.Sg(_.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  contained_items: { n: 1, c: p, r: !0, q: !0 },
                  search_tags: { n: 2, c: d, r: !0, q: !0 },
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
          return "CEconItem_ContainerProperties";
        }
      }
      class p extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.classid || l.Sg(p.M()),
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
          return "CEconItem_ClassIdentifiers";
        }
      }
      class f extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || l.Sg(f.M()),
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
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
                  descriptions: { n: 8, c: m, r: !0, q: !0 },
                  tradable: { n: 9, br: l.qM.readBool, bw: l.gp.writeBool },
                  actions: { n: 10, c: u, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: m, r: !0, q: !0 },
                  owner_actions: { n: 12, c: u, r: !0, q: !0 },
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
                  contained_item: { n: 20, c: f },
                  market_actions: { n: 21, c: u, r: !0, q: !0 },
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
                  container_properties: { n: 33, c: _ },
                  market_bucket_group_name: {
                    n: 34,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  market_bucket_group_id: {
                    n: 35,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  sealed_type: {
                    n: 37,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
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
          return "CEconItem_Description";
        }
      }
      class g extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.propertyid || l.Sg(g.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  propertyid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  int_value: {
                    n: 2,
                    br: l.qM.readInt64String,
                    bw: l.gp.writeInt64String,
                  },
                  float_value: {
                    n: 3,
                    br: l.qM.readFloat,
                    bw: l.gp.writeFloat,
                  },
                  string_value: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
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
          return "CEconItem_AssetProperty";
        }
      }
      class y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.classid || l.Sg(y.M()),
            o.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
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
                  standalone_properties: { n: 3, c: g, r: !0, q: !0 },
                  parent_relationship_properties: { n: 4, c: g, r: !0, q: !0 },
                  nested_accessories: { n: 5, c: y, r: !0, q: !0 },
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
          return "CEconItem_AssetAccessory";
        }
      }
      class B extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || l.Sg(B.M()),
            o.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
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
                  asset_properties: { n: 4, c: g, r: !0, q: !0 },
                  asset_accessories: { n: 5, c: y, r: !0, q: !0 },
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
          return "CEconItem_AssetProperties";
        }
      }
      class b extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.id || l.Sg(b.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  id: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  type: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  float_min: { n: 4, br: l.qM.readFloat, bw: l.gp.writeFloat },
                  float_max: { n: 5, br: l.qM.readFloat, bw: l.gp.writeFloat },
                  int_min: {
                    n: 6,
                    br: l.qM.readInt64String,
                    bw: l.gp.writeInt64String,
                  },
                  int_max: {
                    n: 7,
                    br: l.qM.readInt64String,
                    bw: l.gp.writeInt64String,
                  },
                  localized_label: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  hide_from_description: {
                    n: 9,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
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
          return "CEconItem_AssetPropertySchema";
        }
      }
      class w extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || l.Sg(w.M()),
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
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
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
          return "CEcon_GetAssetPropertySchema_Request";
        }
      }
      class M extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.property_schemas || l.Sg(M.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { property_schemas: { n: 1, c: b, r: !0, q: !0 } },
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
          return "CEcon_GetAssetPropertySchema_Response";
        }
      }
      class S extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || l.Sg(S.M()),
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
          return "CEcon_Asset";
        }
      }
      class z extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || l.Sg(z.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
                  get_asset_properties: {
                    n: 11,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  language: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                  filters: { n: 6, c: h },
                  start_assetid: {
                    n: 8,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  count: { n: 9, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new z();
          return z.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class h extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.assetids || l.Sg(h.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class R extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.assets || l.Sg(R.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  assets: { n: 1, c: S, r: !0, q: !0 },
                  descriptions: { n: 2, c: f, r: !0, q: !0 },
                  missing_assets: { n: 3, c: S, r: !0, q: !0 },
                  asset_properties: { n: 7, c: B, r: !0, q: !0 },
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
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class q extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.generate_new_token || l.Sg(q.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  generate_new_token: {
                    n: 1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = l.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new q();
          return q.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class v extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.trade_offer_access_token || l.Sg(v.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = l.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new v();
          return v.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class N extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.return_url || l.Sg(N.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  return_url: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = l.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new N();
          return N.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class T extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.url || l.Sg(T.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  url: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new T();
          return T.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class I extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.language || l.Sg(I.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  classes: { n: 3, c: p, r: !0, q: !0 },
                  high_pri: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = l.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new I();
          return I.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class j extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.descriptions || l.Sg(j.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { descriptions: { n: 1, c: f, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            i = new j();
          return j.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, t) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, s.I8)(z, t),
            R,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, t) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, s.I8)(q, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, t) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, s.I8)(N, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, t) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", (0, s.I8)(I, t), j, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAssetPropertySchema = function (e, t) {
            return e.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, s.I8)(w, t),
              M,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(r || (r = {}));
      var F = i(20194),
        W = i(14947),
        O = i(17720),
        U = i(16021),
        C = i(9344),
        k = i(14771),
        A = i(60778),
        E = i(30470),
        P = i(78327),
        x = i(14860),
        G = i(81393),
        D = i(15419);
      const L = {
        11: {
          displayNameLoc: "#SteamNotification_HelpRequest_Author",
          titleLoc: "#SteamNotification_HelpRequest_Title",
          bodyLoc: (e) => ({
            locString: "#SteamNotification_HelpRequest_Body",
            params: [e.ticket],
          }),
          link: (e) => E.TS.HELP_BASE_URL + "wizard/HelpRequest/" + e.ticket,
        },
        6: {
          displayNameLoc: "#SteamNotifications_MajorSale",
          titleLoc: (e) => ({ locString: e.title }),
          bodyLoc: (e) =>
            (0, P.Y2)() && e.link.includes("https://store.steampowered.com")
              ? "#SteamNotifications_MajorSale_SteamChina_Title"
              : e.body,
          image: (e) => e.image,
          link: (e) =>
            (0, P.Y2)() && e.link.includes("https://store.steampowered.com")
              ? e.link.replace(
                  "https://store.steampowered.com",
                  E.TS.STORE_BASE_URL,
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
            E.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + e.msgid,
        },
        28: {
          displayNameLoc: (e) =>
            e.is_limited_launch
              ? "#Notification_LimitedLaunchInviteTitle"
              : "#Notification_PlaytestInviteTitle",
          titleLoc: (e) =>
            e.is_limited_launch
              ? "#Notification_LimitedLaunchInviteBody"
              : "#Notification_PlaytestInviteBody",
          image: (e) => e.appid,
          link: (e) =>
            E.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + e.appid,
        },
      };
      function H(e) {
        if (void 0 !== e) return L[e];
      }
      function $(e) {
        return !!H(e);
      }
      const X = {
        16: {
          steamidAttribute: "inviter",
          titleLoc: "#SteamNotifications_FamilyInviteTitle",
          bodyLoc: "#SteamNotifications_FamilyInviteBody",
          url: (e) =>
            `${E.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
        },
        15: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
          url: () =>
            `${E.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        17: {
          steamidAttribute: "requestor_steamid",
          titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
          bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
          url: (e) => (0, x.w1)(e.familyid, e.request_id),
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
            `${E.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        18: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
          url: () =>
            `${E.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
            `${E.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
            `${E.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
      };
      function J(e) {
        if (void 0 !== e) return X[e];
      }
      function V(e) {
        return !!J(e);
      }
      const K = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
      function Q(e) {
        return null != K.findIndex((t) => t == e);
      }
      function Y(e) {
        return (
          !e.hidden &&
          ($((t = e.notification_type)) || V(t) || Q(t)) &&
          ye(e.body_data)
        );
        var t;
      }
      var Z;
      !(function (e) {
        (e[(e.New = 0)] = "New"),
          (e[(e.Update = 1)] = "Update"),
          (e[(e.Remove = 2)] = "Remove");
      })(Z || (Z = {}));
      const ee = 172800,
        te = 600,
        ie = new A.wd("SteamNotificationStore"),
        re = ie.Debug,
        ae = ie.Error,
        ne = ie.Warning;
      class se {
        constructor() {
          (0, W.Gn)(this);
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
          playtest_invites: 0,
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
            !ve(e) &&
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
            const e = s.w.Init(n.V4);
            e.Body().set_notification_ids(this.m_rgNotifyServerRead),
              n.Fn.MarkNotificationsRead(this.m_transport, e) &&
                (this.m_rgNotifyServerRead = []);
          }
          if (this.m_rgNotifyServerHidden.length > 0) {
            const e = s.w.Init(n.b$);
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
              : ae(
                  "Attempted to mark notification read that is not in the notification store",
                ));
          let r = this.m_rgNotificationRollups[i];
          if (r.item.read)
            ae("Attempted to mark notification read that is already read");
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
            return void ae(
              "Attempted to mark notification hidden that is not in the notification store",
            );
          let i = this.m_rgNotificationRollups[t];
          (i.item.hidden = !0),
            i.rgunread?.length > 0 &&
              this.ReduceNewTotals(i.type, i.rgunread?.length),
            this.NotifyServerNotificationsHidden([...i.rgunread, ...i.rgread]);
        }
        ReduceNewTotals(e, t) {
          Re(this.m_summary, e, -t);
        }
        MarkAllItemsViewed() {
          const e = s.w.Init(n.nH);
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
                  playtest_invites: 0,
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
            (re("ApplyNotificationsUpdate", e),
            !e ||
              (!e.notifications?.length &&
                void 0 === e.pending_friend_count &&
                void 0 === e.pending_gift_count))
          )
            return void re(
              "Error: ApplyNotificationsUpdate was called with no data",
            );
          if (!this.m_currentNotificationsData)
            return void re(
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
              playtest_invites: 0,
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
                if (Y(r)) {
                  if (this.m_rgNotifyServerRead.length > 0) {
                    -1 !==
                      this.m_rgNotifyServerRead.findIndex(
                        (e) => e == r.notification_id,
                      ) && (r.read = !0);
                  }
                  r.read || Re(t, r.notification_type, 1),
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
                  this.m_fnOnNotificationCallback(t, Z.New);
              else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
                let e = this.m_rgNewRollupIDs.get(t.rollup_key);
                (e.item.read == t.item.read &&
                  e.item.viewed == t.item.viewed) ||
                  (this.m_rgNewRollupIDs.set(
                    t.rollup_key,
                    JSON.parse(JSON.stringify(t)),
                  ),
                  this.m_fnOnNotificationCallback(t, Z.Update));
              }
            for (const [t, i] of this.m_rgNewRollupIDs)
              -1 == e.findIndex((e) => e.rollup_key == t) &&
                (this.m_fnOnNotificationCallback(i, Z.Remove),
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
          const t = ye(e.body_data);
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
                const a = Be(t);
                if (!a) return;
                const n =
                  "comment_" +
                  a.owner_steam_id?.GetAccountID() +
                  "_" +
                  a.forum_id +
                  "_" +
                  a.topic_id;
                let s = e.findIndex((e) => e.rollup_key == n);
                if (-1 == s)
                  e.push({
                    type: r,
                    rollup_key: n,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bSendToCallbackAsNew: i,
                    url: ue(a),
                  });
                else {
                  let r = e[s];
                  this.BReplaceRollupItem(t, r.item) &&
                    ((r.url = ue(a)),
                    (r.item = t),
                    (r.timestamp = t.timestamp),
                    (r.bSendToCallbackAsNew = i)),
                    (r.rollup_count = r.rollup_count + 1),
                    t.read
                      ? r.rgread.push(t.notification_id)
                      : r.rgunread.push(t.notification_id);
                }
                a.json_data?.app_id &&
                  U.A.Get().QueueAppRequest(a.json_data.app_id, {
                    include_assets: !0,
                  });
              }
              break;
            case 4:
              const a = Be(t);
              if (a) {
                const n = "item_" + a.appid;
                this.AddNotificationToRollupByAppID(e, t, n, r, i, a.appid);
              }
              break;
            case 12:
              const n = Be(t)?.appid.toString();
              if (n) {
                const a = "asyncgame_" + n;
                this.AddNotificationToRollupByAppID(e, t, a, r, i, n);
              }
              break;
            case 8:
              const s = Be(t)?.appid;
              s && U.A.Get().QueueAppRequest(s, { include_assets: !0 });
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
        AddNotificationToRollupByAppID(e, t, i, r, a, n) {
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
              bSendToCallbackAsNew: a,
            });
          else {
            let i = e[s];
            this.BReplaceRollupItem(t, i.item) &&
              ((i.item = t),
              (i.timestamp = t.timestamp),
              (i.bSendToCallbackAsNew = a)),
              (i.rollup_count = i.rollup_count + 1),
              t.read
                ? i.rgread.push(t.notification_id)
                : i.rgunread.push(t.notification_id);
          }
          U.A.Get().QueueAppRequest(parseInt(n), { include_assets: !0 });
        }
      }
      async function oe(e, t, i, r, a, o = !0, c = !1) {
        if (!t) throw new Error("Invalid steamid for GetSteamNotifications");
        const l = s.w.Init(n.GG);
        l.Body().set_language(i),
          l.Body().set_include_read(o),
          l.Body().set_include_pinned_counts(!0),
          l.Body().set_include_confirmation_count(c);
        const m = await n.Fn.GetSteamNotifications(e, l);
        if (1 !== m.GetEResult())
          throw (
            (ne(
              `Received error from GetSteamNotifications. Result ${m.GetEResult()}. Transport ${m.Hdr().transport_error()}`,
            ),
            new Error(`Error from GetSteamNotifications: ${m.GetEResult()}`))
          );
        const u = m.Body().toObject();
        return (
          r &&
            (u.notifications = u.notifications?.filter(
              (e) => !he(e.notification_type, r, a),
            )),
          u
        );
      }
      (0, a.Cg)([W.sH], se.prototype, "m_rgNotificationRollups", void 0),
        (0, a.Cg)([W.sH], se.prototype, "m_summary", void 0),
        (0, a.Cg)([W.sH], se.prototype, "m_bLoaded", void 0),
        (0, a.Cg)([W.sH], se.prototype, "m_nUnviewed", void 0),
        (0, a.Cg)([W.XI], se.prototype, "ProcessNotifications", null);
      const ce = "ItemMetadata";
      function le(e) {
        return [
          `${ce}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`,
        ];
      }
      function me(e, t, i) {
        let a = we(4, e.body_data);
        a.steamid = t;
        let n = (0, F.I)({
          queryKey: le(a),
          queryFn: async () =>
            (async function (e, t) {
              if (!(e && e.steamid && e.contextid && e.appid && e.assetid))
                return (
                  ae("Item notification missing required attributes"), null
                );
              const i = s.w.Init(z);
              i.Body().set_steamid(e.steamid),
                i.Body().set_contextid(e.contextid),
                i.Body().set_appid(parseInt(e.appid)),
                i.Body().set_get_descriptions(!0),
                i.Body().set_language(E.TS.LANGUAGE);
              let a = new h();
              a.add_assetids(e.assetid), i.Body().set_filters(a);
              const n = await r.GetInventoryItemsWithDescriptions(t, i);
              if (1 !== n.GetEResult())
                return (
                  ae(
                    "Request for steam item metadata did not succeed",
                    n.GetEResult(),
                  ),
                  null
                );
              let o = "";
              const c = await U.A.Get().QueueAppRequest(parseInt(e.appid), {});
              if (1 == c) {
                const t = U.A.Get().GetApp(parseInt(e.appid));
                o = t?.GetName();
              } else ae("Failed getting app info", c);
              return {
                app_name: o,
                item_data: n.Body().toObject().descriptions[0],
              };
            })(a, i),
          staleTime: 1 / 0,
        });
        return n.isSuccess ? n.data : null;
      }
      function ue(e) {
        let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
        return e.last_post > 0 && (t += "&tscn=" + (e.last_post - 1)), t;
      }
      function de(e) {
        return 10 == e.comment_type;
      }
      function _e(e) {
        return e?.bhas_friend;
      }
      function pe(e) {
        return 10 == e.comment_type;
      }
      function fe(e) {
        return de(e) || _e(e);
      }
      function ge(e) {
        return pe(e);
      }
      function ye(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (t) {
          re("Steam notification in invalid format:", e);
        }
        return null;
      }
      function Be(e) {
        return we(e.notification_type, e.body_data);
      }
      function be(e) {
        return we(e.type, e.item?.body_data);
      }
      function we(e, t) {
        let i = ye(t);
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
              ? (re("Async game notification invalid data", t), null)
              : { appid: parseInt(i.appid), state: parseInt(i.state) };
          case 3:
            let r = {
              owner_steam_id: i.owner_steam_id
                ? new O.b(i.owner_steam_id)
                : null,
              bclan_account: Me(i.bclan_account),
              title: i.title,
              comment: i.text,
              time: i.last_post,
              comment_type: Number(i.type),
              topic_id: i.topic_id,
              forum_id: i.forum_id,
              account_steam_id: i.account_id
                ? O.b.InitFromAccountID(i.account_id)
                : null,
              bhas_friend: Me(i.bhas_friend),
              bis_forum: Me(i.bis_forum),
              last_post: i.last_post,
              bsubscribed: Me(i.subscribed),
              bis_owner: Me(i.bis_owner),
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
              re(
                "GetCustomNotificationDataByType called with unexpected type:" +
                  e,
                t,
              ),
              null
            );
        }
      }
      function Me(e) {
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
        return re("notification contained unexpected boolean value"), !1;
      }
      const Se = {
        0: { rollup_field: void 0, eFeature: void 0 },
        1: { rollup_field: void 0, eFeature: void 0 },
        2: { rollup_field: "gifts", eFeature: C.uX },
        3: { rollup_field: "comments", eFeature: 2 },
        4: { rollup_field: "inventory_items", eFeature: 3 },
        5: { rollup_field: "invites", eFeature: 4 },
        6: { rollup_field: "major_sale", eFeature: 1 },
        7: { rollup_field: void 0, eFeature: void 0 },
        8: { rollup_field: "wishlist", eFeature: 1 },
        9: { rollup_field: "trade_offers", eFeature: 6 },
        10: { rollup_field: "general", eFeature: C.uX },
        11: { rollup_field: "help_request_replies", eFeature: C.uX },
        12: { rollup_field: "async_game_updates", eFeature: C.uX },
        14: { rollup_field: "moderator_messages", eFeature: 2 },
        15: { rollup_field: "parental_feature_requests", eFeature: C.uX },
        16: { rollup_field: "family_invites", eFeature: C.uX },
        17: { rollup_field: "family_purchase_requests", eFeature: C.uX },
        18: { rollup_field: "parental_playtime_requests", eFeature: C.uX },
        19: {
          rollup_field: "family_purchase_request_responses",
          eFeature: C.uX,
        },
        20: {
          rollup_field: "parental_feature_access_responses",
          eFeature: C.uX,
        },
        21: { rollup_field: "parental_playtime_responses", eFeature: C.uX },
        22: { rollup_field: "requested_game_added", eFeature: C.uX },
        23: { rollup_field: void 0, eFeature: C.uX },
        24: { rollup_field: void 0, eFeature: C.uX },
        28: { rollup_field: "playtest_invites", eFeature: 1 },
        29: { rollup_field: void 0, eFeature: 6 },
      };
      function ze(e) {
        const t = Se[e];
        return (0, G.wT)(!!t, `Missing notification type data for ${e}`), t;
      }
      function he(e, t, i) {
        if (!t) return !1;
        const r = ze(e);
        return (0, D.EC)(t, r?.eFeature ?? C.JC, i);
      }
      function Re(e, t, i) {
        (0, W.h5)(() => {
          const r = ze(t);
          r?.rollup_field &&
            (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + i));
        });
      }
      function qe(e) {
        return !e.viewed || e.viewed + te > (0, k._2)();
      }
      function ve(e) {
        return e.viewed && e.viewed + ee < (0, k._2)();
      }
    },
  },
]);

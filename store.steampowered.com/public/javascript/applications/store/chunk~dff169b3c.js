/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [28310],
    {
      25236: (ki, ei, y) => {
        y.d(ei, { GO: () => v, cf: () => d });
        const u = null,
          T = 0,
          v = 1,
          d = 2;
      },
      68495: (ki, ei, y) => {
        y.d(ei, { Bv: () => di, Dq: () => l, Yd: () => Ui });
        const u = 0,
          T = 1,
          v = 2,
          d = 3,
          s = 4,
          l = 5,
          i = 6,
          di = 7,
          ji = 8,
          Fi = 9,
          Ui = 10,
          H = 11,
          X = 12,
          Z = 13,
          V = 14,
          J = 15,
          k = 16,
          $ = 17,
          K = 18,
          S = 19,
          b = 20,
          h = 21;
      },
      48453: (ki, ei, y) => {
        y.d(ei, {
          GG: () => P,
          b$: () => er,
          V4: () => L,
          nH: () => C,
          rB: () => T,
          Vv: () => u,
          p$: () => Hi,
          Fn: () => Oi,
        });
        var u = {};
        y.r(u),
          y.d(u, {
            Y9: () => K,
            bh: () => sr,
            v_: () => Fi,
            Rj: () => f,
            Cz: () => F,
            HN: () => R,
            pZ: () => H,
            e9: () => k,
            K: () => ji,
            wY: () => $,
            Jo: () => i,
            hW: () => Ui,
            wp: () => X,
            oe: () => b,
            Sx: () => h,
            uH: () => _,
            j3: () => W,
            JN: () => rr,
            FK: () => Ni,
            Ol: () => Z,
            Iz: () => $i,
            YE: () => ir,
            js: () => ar,
            yh: () => di,
            an: () => J,
            mr: () => ti,
            XJ: () => V,
          });
        var T = {};
        y.r(T), y.d(T, { D: () => N });
        var v = y(80613),
          d = y.n(v),
          s = y(75245),
          l = y(35038);
        const i = 0,
          di = 1,
          ji = 2,
          Fi = 3,
          Ui = 4,
          H = 5,
          X = 6,
          Z = 7,
          V = 8,
          J = 9,
          k = 10,
          $ = 11,
          K = 12,
          S = 13,
          b = 14,
          h = 15,
          f = 16,
          F = 17,
          W = 18,
          R = 19,
          _ = 20,
          rr = 21,
          ir = 22,
          ar = 23,
          sr = 24,
          Br = 25,
          fr = 26,
          Vi = 27,
          Ni = 28,
          ti = 29,
          $i = 30,
          N = 0,
          Si = 1;
        function Hi(ii) {
          return "unknown ESteamNotificationType ( " + ii + " )";
        }
        function Pi(ii) {
          return "unknown ESteamNotificationTarget ( " + ii + " )";
        }
        function Ei(ii) {
          return "unknown ESteamNotificationTargetClientType ( " + ii + " )";
        }
        class p extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.notification_id || s.Sg(p.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    notification_id: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    notification_targets: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    notification_type: {
                      n: 3,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                    body_data: {
                      n: 4,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    read: { n: 7, br: s.qM.readBool, bw: s.gp.writeBool },
                    timestamp: {
                      n: 8,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    hidden: { n: 9, br: s.qM.readBool, bw: s.gp.writeBool },
                    expiry: {
                      n: 10,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    viewed: {
                      n: 11,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(p.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new p();
            return p.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(p.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(p.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationData";
          }
        }
        class P extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.include_hidden || s.Sg(P.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    include_hidden: {
                      n: 1,
                      d: !1,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    language: {
                      n: 2,
                      d: 0,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    include_confirmation_count: {
                      n: 3,
                      d: !0,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    include_pinned_counts: {
                      n: 4,
                      d: !1,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    include_read: {
                      n: 5,
                      d: !0,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    count_only: {
                      n: 6,
                      d: !1,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = s.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(P.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new P();
            return P.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(P.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(P.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Request";
          }
        }
        class lr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lr.prototype.notifications || s.Sg(lr.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    notifications: { n: 1, c: p, r: !0, q: !0 },
                    confirmation_count: {
                      n: 2,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    pending_gift_count: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 5,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    unread_count: {
                      n: 6,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = s.w0(lr.M())), lr.sm_mbf;
          }
          toObject(e = !1) {
            return lr.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(lr.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(lr.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new lr();
            return lr.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(lr.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(lr.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Response";
          }
        }
        class L extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.timestamp || s.Sg(L.M()),
              v.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    notification_type: {
                      n: 2,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                    notification_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint64String,
                      pbr: s.qM.readPackedUint64String,
                      bw: s.gp.writeRepeatedUint64String,
                    },
                    mark_all_read: {
                      n: 4,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = s.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(L.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new L();
            return L.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(L.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(L.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsRead_Notification";
          }
        }
        class C extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.remote_client_id || s.Sg(C.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    remote_client_id: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    target_client_type: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = s.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(C.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new C();
            return C.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(C.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(C.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsViewed_Notification";
          }
        }
        class q extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.notification_type || s.Sg(q.M()),
              v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                    notification_targets: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = s.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(q.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new q();
            return q.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(q.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(q.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationPreference";
          }
        }
        class o extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.preferences || s.Sg(o.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: { preferences: { n: 1, c: q, r: !0, q: !0 } },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = s.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(o.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new o();
            return o.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(o.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(o.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Request";
          }
        }
        class si extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return si.toObject(e, this);
          }
          static toObject(e, g) {
            return e ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(e) {
            return new si();
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new si();
            return si.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return si.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Response";
          }
        }
        class li extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), v.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return li.toObject(e, this);
          }
          static toObject(e, g) {
            return e ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(e) {
            return new li();
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new li();
            return li.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return li.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Request";
          }
        }
        class wr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wr.prototype.preferences || s.Sg(wr.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: { preferences: { n: 1, c: q, r: !0, q: !0 } },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = s.w0(wr.M())), wr.sm_mbf;
          }
          toObject(e = !1) {
            return wr.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(wr.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(wr.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new wr();
            return wr.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(wr.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(wr.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Response";
          }
        }
        class er extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              er.prototype.notification_ids || s.Sg(er.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    notification_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint64String,
                      pbr: s.qM.readPackedUint64String,
                      bw: s.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = s.w0(er.M())), er.sm_mbf;
          }
          toObject(e = !1) {
            return er.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(er.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(er.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new er();
            return er.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(er.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(er.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_HideNotification_Notification";
          }
        }
        class tr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tr.prototype.notifications || s.Sg(tr.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    notifications: { n: 1, c: p, r: !0, q: !0 },
                    pending_gift_count: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = s.w0(tr.M())), tr.sm_mbf;
          }
          toObject(e = !1) {
            return tr.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(tr.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(tr.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new tr();
            return tr.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(tr.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(tr.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_NotificationsReceived_Notification";
          }
        }
        class mr extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mr.prototype.preferences || s.Sg(mr.M()),
              v.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: { preferences: { n: 1, c: q, r: !0, q: !0 } },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = s.w0(mr.M())), mr.sm_mbf;
          }
          toObject(e = !1) {
            return mr.toObject(e, this);
          }
          static toObject(e, g) {
            return s.BT(mr.M(), e, g);
          }
          static fromObject(e) {
            return s.Uq(mr.M(), e);
          }
          static deserializeBinary(e) {
            let g = new (d().BinaryReader)(e),
              w = new mr();
            return mr.deserializeBinaryFromReader(w, g);
          }
          static deserializeBinaryFromReader(e, g) {
            return s.zj(mr.MBF(), e, g);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, g) {
            s.i0(mr.M(), e, g);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_PreferencesUpdated_Notification";
          }
        }
        var Oi;
        ((ii) => {
          function e(O, x, Y) {
            return O.SendMsg(
              "SteamNotification.GetSteamNotifications#1",
              (0, l.I8)(P, x, Y),
              lr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          ii.GetSteamNotifications = e;
          function g(O, x) {
            return O.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, l.I8)(L, x),
              { ePrivilege: 1, rgBrowserAPISites: ["partner", "help"] },
            );
          }
          ii.MarkNotificationsRead = g;
          function w(O, x) {
            return O.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, l.I8)(C, x),
              { ePrivilege: 1, rgBrowserAPISites: ["partner", "help"] },
            );
          }
          ii.MarkNotificationsViewed = w;
          function gr(O, x) {
            return O.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, l.I8)(er, x),
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          ii.HideNotification = gr;
          function ur(O, x, Y) {
            return O.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, l.I8)(o, x, Y),
              si,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          ii.SetPreferences = ur;
          function I(O, x, Y) {
            return O.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, l.I8)(li, x, Y),
              wr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          ii.GetPreferences = I;
        })(Oi || (Oi = {}));
        var Xi;
        ((ii) => {
          (ii.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: tr,
          }),
            (ii.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: mr,
            });
        })(Xi || (Xi = {}));
      },
      35098: (ki, ei, y) => {
        y.d(ei, { DW: () => H, js: () => Fi, mK: () => k, tb: () => J });
        var u = y(90626),
          T = y(80902),
          v = y(54806),
          d = y(99412),
          s = y(68312),
          l = y(15369),
          i = y(5858),
          di = y(76559),
          ji = y(15860);
        function Fi(b) {
          const h = (0, s.KV)(),
            f = u.useContext(V);
          return (0, T.I)(k(f, h, b));
        }
        function Ui(b) {
          const h = React.useRef(void 0),
            f = Fi(b);
          return f.data
            ? f
            : (h.current ||
                (h.current = new CPersonaStateImpl(
                  typeof b == "string"
                    ? new CSteamID(b)
                    : CSteamID.InitFromAccountID(b),
                )),
              { ...f, data: h.current });
        }
        function H(b) {
          const h = (0, s.KV)(),
            f = u.useContext(V);
          return (0, v.E)({ queries: b.map((F) => k(f, h, F)) });
        }
        function X(b) {
          return ReactQueryClient.getQueryData(["PlayerSummary", b]);
        }
        function Z(b) {
          const { loadPersonaState: h, children: f } = b,
            F = React.useMemo(() => ({ loadPersonaState: h }), [h]);
          return React.createElement(V.Provider, { value: F }, f);
        }
        const V = u.createContext({
          loadPersonaState: async (b, h) => {
            if (b == null) return null;
            const f = await K(h).load(
              di.b.InitFromAccountID(b).ConvertTo64BitString(),
            );
            return S(di.b.InitFromAccountID(b), f);
          },
        });
        function J() {
          return u.useContext(V);
        }
        function k(b, h, f) {
          const F = typeof f == "string" ? new di.b(f).GetAccountID() : f;
          return {
            queryKey: ["PlayerSummary", F],
            queryFn: () => b.loadPersonaState(F, h),
            enabled: !!F,
          };
        }
        let $;
        function K(b) {
          return ($ ??= (0, ji.c)(b));
        }
        function S(b, h) {
          let f = new i.Z(b);
          const F = h?.public_data,
            W = h?.private_data;
          return (
            (f.m_bInitialized = !!h),
            (f.m_ePersonaState = W?.persona_state ?? d.cU3),
            (f.m_strAvatarHash = F?.sha_digest_avatar
              ? (0, l.Kx)(F.sha_digest_avatar)
              : i.dV),
            (f.m_strPlayerName = F?.persona_name ?? b.ConvertTo64BitString()),
            (f.m_strAccountName = W?.account_name),
            W?.persona_state_flags &&
              (f.m_unPersonaStateFlags = W?.persona_state_flags),
            W?.game_id && (f.m_gameid = W?.game_id),
            W?.game_server_ip_address &&
              (f.m_unGameServerIP = W?.game_server_ip_address),
            W?.lobby_steam_id && (f.m_game_lobby_id = W?.lobby_steam_id),
            W?.game_extra_info && (f.m_strGameExtraInfo = W?.game_extra_info),
            F?.profile_url && (f.m_strProfileURL = F.profile_url),
            f
          );
        }
      },
      84750: (ki, ei, y) => {
        y.d(ei, {
          OT: () => Ua,
          iO: () => ja,
          T4: () => la,
          n8: () => sa,
          hr: () => aa,
          IC: () => Ri,
          V4: () => _i,
          sR: () => oi,
          jb: () => ta,
          Rl: () => ka,
          XT: () => ga,
          cE: () => pi,
          tM: () => Ta,
          K9: () => Gi,
          bP: () => Oa,
          aq: () => Ci,
          u5: () => Ji,
          IL: () => va,
        });
        var u = y(48453),
          T = y(35038),
          v = y(72604),
          d = y(99412),
          s = y(80613),
          l = y.n(s),
          i = y(75245);
        function di(m) {
          return "unknown EMarketBucketLevel ( " + m + " )";
        }
        function ji(m) {
          return "unknown EAssetPropertyType ( " + m + " )";
        }
        function Fi(m) {
          return "unknown ETradeOfferState ( " + m + " )";
        }
        function Ui(m) {
          return "unknown ETradeOfferConfirmationMethod ( " + m + " )";
        }
        class H extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.type || i.Sg(H.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    type: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    color: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    label: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(H.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new H();
            return H.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(H.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(H.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_DescriptionLine";
          }
        }
        class X extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.link || i.Sg(X.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    link: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = i.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(X.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new X();
            return X.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(X.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(X.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Action";
          }
        }
        class Z extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.appid || i.Sg(Z.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    category: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    internal_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_category_name: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_tag_name: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    color: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = i.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Z.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Z();
            return Z.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Tag";
          }
        }
        class V extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.contained_items || i.Sg(V.M()),
              s.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    contained_items: { n: 1, c: J, r: !0, q: !0 },
                    search_tags: { n: 2, c: Z, r: !0, q: !0 },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new V();
            return V.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ContainerProperties";
          }
        }
        class J extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.classid || i.Sg(J.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    classid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = i.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new J();
            return J.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ClassIdentifiers";
          }
        }
        class k extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.appid || i.Sg(k.M()),
              s.Message.initialize(
                this,
                r,
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
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    appid: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    classid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currency: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    background_color: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    icon_url: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    icon_url_large: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    descriptions: { n: 8, c: H, r: !0, q: !0 },
                    tradable: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
                    actions: { n: 10, c: X, r: !0, q: !0 },
                    owner_descriptions: { n: 11, c: H, r: !0, q: !0 },
                    owner_actions: { n: 12, c: X, r: !0, q: !0 },
                    fraudwarnings: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    name: { n: 14, br: i.qM.readString, bw: i.gp.writeString },
                    name_color: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 16, br: i.qM.readString, bw: i.gp.writeString },
                    market_name: {
                      n: 17,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_hash_name: {
                      n: 18,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_fee: {
                      n: 19,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_fee_app: {
                      n: 28,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    contained_item: { n: 20, c: k },
                    market_actions: { n: 21, c: X, r: !0, q: !0 },
                    commodity: { n: 22, br: i.qM.readBool, bw: i.gp.writeBool },
                    market_tradable_restriction: {
                      n: 23,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    market_marketable_restriction: {
                      n: 24,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    marketable: {
                      n: 25,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    tags: { n: 26, c: Z, r: !0, q: !0 },
                    item_expiration: {
                      n: 27,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_buy_country_restriction: {
                      n: 30,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_sell_country_restriction: {
                      n: 31,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sealed: { n: 32, br: i.qM.readBool, bw: i.gp.writeBool },
                    container_properties: { n: 33, c: V },
                    market_bucket_group_name: {
                      n: 34,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_bucket_group_id: {
                      n: 35,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sealed_type: {
                      n: 37,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    market_name_inside_group: {
                      n: 38,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_bucket_id: {
                      n: 39,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new k();
            return k.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Description";
          }
        }
        class $ extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.propertyid || i.Sg($.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    propertyid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    int_value: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    float_value: {
                      n: 3,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    string_value: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = i.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT($.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new $();
            return $.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperty";
          }
        }
        class K extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.classid || i.Sg(K.M()),
              s.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    classid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    standalone_properties: { n: 3, c: $, r: !0, q: !0 },
                    parent_relationship_properties: {
                      n: 4,
                      c: $,
                      r: !0,
                      q: !0,
                    },
                    nested_accessories: { n: 5, c: K, r: !0, q: !0 },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(K.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new K();
            return K.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(K.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(K.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetAccessory";
          }
        }
        class S extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.appid || i.Sg(S.M()),
              s.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    asset_properties: { n: 4, c: $, r: !0, q: !0 },
                    asset_accessories: { n: 5, c: K, r: !0, q: !0 },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new S();
            return S.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperties";
          }
        }
        class b extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.id || i.Sg(b.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    float_min: {
                      n: 4,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    float_max: {
                      n: 5,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    int_min: {
                      n: 6,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    int_max: {
                      n: 7,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    localized_label: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    hide_from_description: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = i.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(b.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new b();
            return b.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(b.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(b.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetPropertySchema";
          }
        }
        class h extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.appid || i.Sg(h.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(h.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new h();
            return h.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(h.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(h.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Request";
          }
        }
        class f extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.property_schemas || i.Sg(f.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: { property_schemas: { n: 1, c: b, r: !0, q: !0 } },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = i.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(f.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new f();
            return f.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(f.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(f.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Response";
          }
        }
        class F extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.appid || i.Sg(F.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    classid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currencyid: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    amount: {
                      n: 7,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    missing: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    est_usd: {
                      n: 9,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = i.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(F.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new F();
            return F.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(F.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(F.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Asset";
          }
        }
        class W extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.steamid || i.Sg(W.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    get_descriptions: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    get_asset_properties: {
                      n: 11,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    for_trade_offer_verification: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    filters: { n: 6, c: R },
                    start_assetid: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    count: { n: 9, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(W.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new W();
            return W.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(W.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(W.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request";
          }
        }
        class R extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.assetids || i.Sg(R.M()),
              s.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    assetids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    currencyids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    tradable_only: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    marketable_only: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(R.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new R();
            return R.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(R.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(R.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
          }
        }
        class _ extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.assets || i.Sg(_.M()),
              s.Message.initialize(this, r, 0, -1, [1, 2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    assets: { n: 1, c: F, r: !0, q: !0 },
                    descriptions: { n: 2, c: k, r: !0, q: !0 },
                    missing_assets: { n: 3, c: F, r: !0, q: !0 },
                    asset_properties: { n: 7, c: S, r: !0, q: !0 },
                    more_items: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    last_assetid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    total_inventory_count: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new _();
            return _.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Response";
          }
        }
        class rr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.generate_new_token || i.Sg(rr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    generate_new_token: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = i.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(rr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new rr();
            return rr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Request";
          }
        }
        class ir extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.trade_offer_access_token || i.Sg(ir.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    trade_offer_access_token: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new ir();
            return ir.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Response";
          }
        }
        class ar extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.return_url || i.Sg(ar.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    return_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = i.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new ar();
            return ar.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
          }
        }
        class sr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.url || i.Sg(sr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    url: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new sr();
            return sr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
          }
        }
        class Br extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.language || i.Sg(Br.M()),
              s.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    classes: { n: 3, c: J, r: !0, q: !0 },
                    high_pri: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = i.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Br();
            return Br.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Request";
          }
        }
        class fr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.descriptions || i.Sg(fr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: { descriptions: { n: 1, c: k, r: !0, q: !0 } },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(fr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new fr();
            return fr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Response";
          }
        }
        var Vi;
        ((m) => {
          function r(U, Q, M) {
            return U.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, T.I8)(W, Q, M),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          m.GetInventoryItemsWithDescriptions = r;
          function a(U, Q, M) {
            return U.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, T.I8)(rr, Q, M),
              ir,
              { ePrivilege: 1 },
            );
          }
          m.GetTradeOfferAccessToken = a;
          function t(U, Q, M) {
            return U.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, T.I8)(ar, Q, M),
              sr,
              { ePrivilege: 1 },
            );
          }
          m.ClientGetItemShopOverlayAuthURL = t;
          function B(U, Q, M) {
            return U.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, T.I8)(Br, Q, M),
              fr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetClassInfo = B;
          function j(U, Q, M) {
            return U.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, T.I8)(h, Q, M),
              f,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          m.GetAssetPropertySchema = j;
        })(Vi || (Vi = {}));
        var Ni = y(80902),
          ti = y(14947),
          $i = y(76559),
          N = y(79365),
          Si = y(68495),
          Hi = y(25236),
          Pi = y(36174),
          Ei = y(57589),
          p = y(98609),
          P = y(3166),
          lr = y(4874),
          L = y(2289),
          C = y(71742),
          q = y(96214);
        const o = 0,
          si = 1,
          li = 2,
          wr = 3,
          er = 0,
          tr = 1,
          mr = 2,
          Oi = 3,
          Xi = 4,
          ii = 5,
          e = 6;
        function g(m) {
          return "unknown EReportedContentNotificationStatus ( " + m + " )";
        }
        class w extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.data || i.Sg(w.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { data: { n: 1, c: gr, r: !0, q: !0 } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(w.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new w();
            return w.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(w.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(w.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData";
          }
        }
        class gr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.key || i.Sg(gr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    key: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = i.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(gr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new gr();
            return gr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData_DataEntry";
          }
        }
        class ur extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.steamid || i.Sg(ur.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    start: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    count: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = i.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ur.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new ur();
            return ur.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Request";
          }
        }
        class I extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.report_id || i.Sg(I.M()),
              s.Message.initialize(this, r, 0, -1, [23, 24], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    report_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reporter_steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_reported: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    report_reason: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    report_text: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    subject_type: {
                      n: 6,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    resolved: { n: 9, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    time_resolved: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_notified: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    additional_subject_data: { n: 13, c: w },
                    time_disputed: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    dispute_details: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    dispute_resolver_steamid: {
                      n: 16,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    dispute_resolved: {
                      n: 17,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    time_dispute_resolved: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    detected_by_automation: {
                      n: 19,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    resolved_by_automation: {
                      n: 20,
                      d: o,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 21,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    dispute_resolved_reason: {
                      n: 22,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sanctions_applied: { n: 23, c: A, r: !0, q: !0 },
                    sanctions_applied_on_dispute: { n: 24, c: A, r: !0, q: !0 },
                    reported_content_id: {
                      n: 25,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    coordinates: { n: 26, c: D },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = i.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(I.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new I();
            return I.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(I.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(I.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReport";
          }
        }
        class O extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.content_report || i.Sg(O.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    content_report: { n: 1, c: I, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(O.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new O();
            return O.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(O.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(O.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Response";
          }
        }
        class x extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.steamid || i.Sg(x.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_type: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = i.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(x.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new x();
            return x.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(x.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(x.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Request";
          }
        }
        class Y extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.content_report || i.Sg(Y.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: { content_report: { n: 1, c: I } },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = i.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Y.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Y();
            return Y.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Response";
          }
        }
        class br extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.steamid || i.Sg(br.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = i.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new br();
            return br.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Request";
          }
        }
        class E extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.subject_type || i.Sg(E.M()),
              s.Message.initialize(this, r, 0, -1, [13, 31, 32], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    owner_steam_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: { n: 5, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    resolved: { n: 6, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    time_resolved: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unresolved_report_count: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_report_time: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assigned_moderator_steamid: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_claimed_by_moderator: {
                      n: 12,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reports: { n: 13, c: I, r: !0, q: !0 },
                    additional_subject_data: { n: 14, c: w },
                    csam_status: {
                      n: 15,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 16,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 17,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    unresolved_dispute_count: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_dispute_time: {
                      n: 19,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    owner_dispute_time: {
                      n: 24,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    owner_dispute_resolved_time: {
                      n: 25,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    owner_dispute_details: {
                      n: 26,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    required_moderator_level: {
                      n: 27,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    resolved_by_automation: {
                      n: 28,
                      d: o,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    detected_by_automation: {
                      n: 29,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    credible_threat_of_violence_status: {
                      n: 30,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sanctions_applied: { n: 31, c: A, r: !0, q: !0 },
                    sanctions_applied_after_dispute: {
                      n: 32,
                      c: A,
                      r: !0,
                      q: !0,
                    },
                    decision_reversed: {
                      n: 33,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    reported_content_id: {
                      n: 34,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    coordinates: { n: 35, c: D },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = i.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(E.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new E();
            return E.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(E.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(E.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubject";
          }
        }
        class cr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.subject || i.Sg(cr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { subject: { n: 1, c: E, r: !0, q: !0 } },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = i.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(cr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new cr();
            return cr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Response";
          }
        }
        class A extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.sanction || i.Sg(A.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    sanction: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    days: { n: 2, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    escalate_to: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = i.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(A.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new A();
            return A.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(A.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(A.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectSanction";
          }
        }
        class mi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new mi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new mi();
            return mi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Request";
          }
        }
        class nr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.buckets || i.Sg(nr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    buckets: { n: 1, c: zr, r: !0, q: !0 },
                    pending_for_any_moderator: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = i.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(nr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new nr();
            return nr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response";
          }
        }
        class zr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.subject_type || i.Sg(zr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    unresolved_count: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unclaimed_count: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_disputed: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    disputed_count: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    unclaimed_disputed_count: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_any_moderator: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_for_any_moderator: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_for_supervisor: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oldest_unresolved_for_valve: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    coordinates: { n: 14, c: D },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = i.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(zr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new zr();
            return zr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response_Bucket";
          }
        }
        class yr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.subject_type || i.Sg(yr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = i.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(yr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new yr();
            return yr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectKey";
          }
        }
        class dr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.steamid || i.Sg(dr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    rtime_cooldown_ends: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    acquit_unresolved_reports: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = i.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(dr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new dr();
            return dr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Request";
          }
        }
        class gi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new gi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new gi();
            return gi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Response";
          }
        }
        class hr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.steamid || i.Sg(hr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = i.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(hr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new hr();
            return hr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Request";
          }
        }
        class Tr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.rtime_cooldown_ends || i.Sg(Tr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    rtime_cooldown_ends: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = i.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Tr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Tr();
            return Tr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Tr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Tr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Response";
          }
        }
        class Fr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.steamid || i.Sg(Fr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = i.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Fr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Fr();
            return Fr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Request";
          }
        }
        class Wr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.preferred_level || i.Sg(Wr.M()),
              s.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    enabled_subject_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = i.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Wr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Wr();
            return Wr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Response";
          }
        }
        class pr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.preferred_level || i.Sg(pr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    enabled_subject_types: { n: 2, c: vr },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = i.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(pr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new pr();
            return pr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request";
          }
        }
        class vr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.subject_types || i.Sg(vr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    subject_types: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = i.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(vr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new vr();
            return vr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(vr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(vr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
          }
        }
        class ui extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ui.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ui();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new ui();
            return ui.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Response";
          }
        }
        class jr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.steamid || i.Sg(jr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    rt_start: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = i.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(jr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new jr();
            return jr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Request";
          }
        }
        class Ur extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.activities || i.Sg(Ur.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: { activities: { n: 1, c: Or, r: !0, q: !0 } },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = i.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ur.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Ur();
            return Ur.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response";
          }
        }
        class Or extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.subject_type || i.Sg(Or.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    timestamp: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    action: { n: 5, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    json_data: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    reported_content_id: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = i.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Or.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Or();
            return Or.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
          }
        }
        class xr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.rtime_start_date || i.Sg(xr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    rtime_start_date: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_end_date: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    subject_type: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = i.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(xr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new xr();
            return xr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Request";
          }
        }
        class Mr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.stats || i.Sg(Mr.M()),
              s.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: { stats: { n: 2, c: kr, r: !0, q: !0 } },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = i.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Mr();
            return Mr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response";
          }
        }
        class kr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.rtime_date || i.Sg(kr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    rtime_date: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    times_unresolved: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    times_resolved: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = i.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(kr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new kr();
            return kr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(kr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(kr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
          }
        }
        class Vr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.subject_type || i.Sg(Vr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    count: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = i.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Vr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Vr();
            return Vr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Vr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Vr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Request";
          }
        }
        class $r extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.subjects || i.Sg($r.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: { subjects: { n: 1, c: Hr, r: !0, q: !0 } },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = i.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT($r.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new $r();
            return $r.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response";
          }
        }
        class Hr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.subject_type || i.Sg(Hr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reported_content_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = i.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Hr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Hr();
            return Hr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
          }
        }
        class Xr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.steamid || i.Sg(Xr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = i.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Xr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Xr();
            return Xr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Request";
          }
        }
        class Jr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.total_reports || i.Sg(Jr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    total_reports: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_acquitted_reports: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    reports_in_last_week: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    acquitted_reports_in_last_week: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = i.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Jr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Jr();
            return Jr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Response";
          }
        }
        class Kr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.subject_type || i.Sg(Kr.M()),
              s.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    moderator_level: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    filters: { n: 3, c: D, r: !0, q: !0 },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = i.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Kr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Kr();
            return Kr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Kr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Kr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Request";
          }
        }
        class Yr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.subjects || i.Sg(Yr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: { subjects: { n: 1, c: E, r: !0, q: !0 } },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = i.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Yr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Yr();
            return Yr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Response";
          }
        }
        class Qr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.steamid || i.Sg(Qr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = i.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Qr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Qr();
            return Qr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Request";
          }
        }
        class Zr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.subjects || i.Sg(Zr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: { subjects: { n: 1, c: E, r: !0, q: !0 } },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = i.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Zr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Zr();
            return Zr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Response";
          }
        }
        class Nr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.subjects_to_release || i.Sg(Nr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    subjects_to_release: { n: 1, c: yr, r: !0, q: !0 },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = i.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Nr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Nr();
            return Nr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Request";
          }
        }
        class Bi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Bi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Bi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Bi();
            return Bi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Response";
          }
        }
        class D extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.subject_type || i.Sg(D.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    forum: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    topic: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    comment: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    comment_thread_id: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    sender_account_id: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    chat_message_rtime: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    chat_message_ordinal: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    chat_group_id: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    chat_room_id: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    receiver_account_id: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    published_file_id: {
                      n: 13,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    ugc_content_type: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(D.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new D();
            return D.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(D.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(D.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ReportedContentCoordinates";
          }
        }
        class Sr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.reported_content_id || i.Sg(Sr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = i.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Sr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Sr();
            return Sr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContentByID_Request";
          }
        }
        class Pr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.subject || i.Sg(Pr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = { proto: Pr, fields: { subject: { n: 1, c: E } } }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = i.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Pr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Pr();
            return Pr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContentByID_Response";
          }
        }
        class Lr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.coordinates || i.Sg(Lr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: { coordinates: { n: 1, c: D } },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = i.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Lr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Lr();
            return Lr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContent_Request";
          }
        }
        class qr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.subjects || i.Sg(qr.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: { subjects: { n: 1, c: E, r: !0, q: !0 } },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = i.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(qr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new qr();
            return qr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedContent_Response";
          }
        }
        class Ir extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.reported_content_id || i.Sg(Ir.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    details: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = i.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Ir();
            return Ir.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Request";
          }
        }
        class fi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new fi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new fi();
            return fi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Response";
          }
        }
        class Er extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.reported_content_id || i.Sg(Er.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = i.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Er.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Er();
            return Er.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Request";
          }
        }
        class Ar extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.entries || i.Sg(Ar.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: { entries: { n: 1, c: Dr, r: !0, q: !0 } },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = i.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ar.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Ar();
            return Ar.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Response";
          }
        }
        class Dr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.timestamp || i.Sg(Dr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    actor_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    automated_action: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    action: { n: 4, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    additional_json_data: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = i.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Dr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Dr();
            return Dr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
          }
        }
        class Gr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.reported_content_id || i.Sg(Gr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    report_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    dispute_details: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = i.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Gr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Gr();
            return Gr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Request";
          }
        }
        class wi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return wi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new wi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new wi();
            return wi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Response";
          }
        }
        class Rr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.reported_content_id || i.Sg(Rr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = i.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Rr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Rr();
            return Rr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModerationByID_Request";
          }
        }
        class bi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return bi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new bi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new bi();
            return bi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModerationByID_Response";
          }
        }
        class Cr extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.reported_content_id || i.Sg(Cr.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    new_level: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    reason: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    note: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = i.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Cr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new Cr();
            return Cr.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubjectByID_Request";
          }
        }
        class ci extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ci();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new ci();
            return ci.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubjectByID_Response";
          }
        }
        class or extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.reported_content_id || i.Sg(or.M()),
              s.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    resolution: { n: 4, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    reason: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    note: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    resolved_by_automation: {
                      n: 7,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sanctions_applied: { n: 9, c: A, r: !0, q: !0 },
                    skip_lock: { n: 10, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = i.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(or.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new or();
            return or.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveByID_Request";
          }
        }
        class ni extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ni.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ni();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new ni();
            return ni.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveByID_Response";
          }
        }
        class _r extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.reported_content_id || i.Sg(_r.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    csam_status: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    credible_threat_of_violence_status: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    additional_subject_data: { n: 5, c: w },
                    owner_dispute_details: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = i.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_r.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new _r();
            return _r.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectByID_Request";
          }
        }
        class zi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return zi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new zi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new zi();
            return zi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectByID_Response";
          }
        }
        class ri extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ri.prototype.reported_content_id || i.Sg(ri.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    action: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    automated_action: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    additional_json_data: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    actor_steamid: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = i.w0(ri.M())), ri.sm_mbf;
          }
          toObject(r = !1) {
            return ri.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ri.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ri.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new ri();
            return ri.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ri.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ri.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLogByID_Request";
          }
        }
        class yi extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return yi.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new yi();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              t = new yi();
            return yi.deserializeBinaryFromReader(t, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLogByID_Response";
          }
        }
        var Ai;
        ((m) => {
          function r(c, n, z) {
            return c.SendMsg(
              "ContentModeration.ClaimBatch#1",
              (0, T.I8)(Kr, n, z),
              Yr,
              { ePrivilege: 5 },
            );
          }
          m.ClaimBatch = r;
          function a(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, T.I8)(Qr, n, z),
              Zr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetClaimedSubjects = a;
          function t(c, n, z) {
            return c.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, T.I8)(Nr, n, z),
              Bi,
              { ePrivilege: 5 },
            );
          }
          m.ReleaseSubjects = t;
          function B(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, T.I8)(ur, n, z),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetReportsSubmittedByUser = B;
          function j(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, T.I8)(x, n, z),
              Y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetOneReportSubmittedByUser = j;
          function U(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, T.I8)(br, n, z),
              cr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetReportedSubjectsByOwner = U;
          function Q(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, T.I8)(mi, n, z),
              nr,
              { ePrivilege: 5 },
            );
          }
          m.GetSubjectOverview = Q;
          function M(c, n, z) {
            return c.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, T.I8)(dr, n, z),
              gi,
              { ePrivilege: 5 },
            );
          }
          m.UpdateReporterCooldown = M;
          function hi(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, T.I8)(hr, n, z),
              Tr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetReporterCooldown = hi;
          function vi(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, T.I8)(Fr, n, z),
              Wr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetModeratorPreferences = vi;
          function Yi(c, n, z) {
            return c.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, T.I8)(pr, n, z),
              ui,
              { ePrivilege: 5 },
            );
          }
          m.SetModeratorPreferences = Yi;
          function G(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, T.I8)(jr, n, z),
              Ur,
              { ePrivilege: 5 },
            );
          }
          m.GetModeratorActivity = G;
          function Qi(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, T.I8)(xr, n, z),
              Mr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetDailyModerationStatistics = Qi;
          function Zi(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, T.I8)(Vr, n, z),
              $r,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetOldestUnresolvedSubjects = Zi;
          function ai(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, T.I8)(Xr, n, z),
              Jr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetReporterStats = ai;
          function Va(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, T.I8)(Sr, n, z),
              Pr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetReportedContentByID = Va;
          function $a(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, T.I8)(Lr, n, z),
              qr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetReportedContent = $a;
          function Ha(c, n, z) {
            return c.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, T.I8)(Ir, n, z),
              fi,
              { ePrivilege: 1 },
            );
          }
          m.OwnerDisputeModeration = Ha;
          function Xa(c, n, z) {
            return c.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, T.I8)(Er, n, z),
              Ar,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          m.GetAuditLogByID = Xa;
          function Ja(c, n, z) {
            return c.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, T.I8)(Gr, n, z),
              wi,
              { ePrivilege: 1 },
            );
          }
          m.ReporterDisputeModeration = Ja;
          function Ka(c, n, z) {
            return c.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, T.I8)(Rr, n, z),
              bi,
              { ePrivilege: 5 },
            );
          }
          m.SustainModerationByID = Ka;
          function Ya(c, n, z) {
            return c.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, T.I8)(Cr, n, z),
              ci,
              { ePrivilege: 5 },
            );
          }
          m.EscalateSubjectByID = Ya;
          function Qa(c, n, z) {
            return c.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, T.I8)(or, n, z),
              ni,
              { ePrivilege: 5 },
            );
          }
          m.ResolveByID = Qa;
          function Za(c, n, z) {
            return c.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, T.I8)(_r, n, z),
              zi,
              { ePrivilege: 5 },
            );
          }
          m.UpdateSubjectByID = Za;
          function Na(c, n, z) {
            return c.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, T.I8)(ri, n, z),
              yi,
              { ePrivilege: 5 },
            );
          }
          m.WriteToAuditLogByID = Na;
        })(Ai || (Ai = {}));
        var ua = Object.defineProperty,
          Ba = Object.getOwnPropertyDescriptor,
          xi = (m, r, a, t) => {
            for (
              var B = t > 1 ? void 0 : t ? Ba(r, a) : r, j = m.length - 1, U;
              j >= 0;
              j--
            )
              (U = m[j]) && (B = (t ? U(r, a, B) : U(B)) || B);
            return t && B && ua(r, a, B), B;
          };
        function Di(m) {
          const r = m?.reported_content_id
            ? m.reported_content_id
            : `${m?.subject_type}-${m?.subject_group_id}-${m?.subject_id}`;
          return `${p.TS.COMMUNITY_BASE_URL}my/reportedcontent/${r}`;
        }
        const fa = {
          [u.Vv.wY]: {
            displayNameLoc: "#SteamNotification_HelpRequest_Author",
            titleLoc: "#SteamNotification_HelpRequest_Title",
            bodyLoc: (m) => ({
              locString: "#SteamNotification_HelpRequest_Body",
              params: [m.ticket],
            }),
            link: (m) => p.TS.HELP_BASE_URL + "wizard/HelpRequest/" + m.ticket,
          },
          [u.Vv.wp]: {
            displayNameLoc: "#SteamNotifications_MajorSale",
            titleLoc: (m) => ({ locString: m.title }),
            bodyLoc: (m) =>
              (0, P.Y2)() && m.link.includes("https://store.steampowered.com")
                ? "#SteamNotifications_MajorSale_SteamChina_Title"
                : m.body,
            image: (m) => m.image,
            link: (m) =>
              (0, P.Y2)() && m.link.includes("https://store.steampowered.com")
                ? m.link.replace(
                    "https://store.steampowered.com",
                    p.TS.STORE_BASE_URL,
                  )
                : m.link,
          },
          [u.Vv.e9]: {
            displayNameLoc: (m) => m.display_name,
            titleLoc: (m) => m.title,
            bodyLoc: (m) => m.body,
            image: (m) => m.image,
            link: (m) => m.link,
          },
          [u.Vv.oe]: {
            titleLoc: "#SteamNotification_ModeratorMessage_Title",
            link: (m) =>
              p.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + m.msgid,
          },
          [u.Vv.FK]: {
            displayNameLoc: (m) =>
              m.is_limited_launch
                ? "#Notification_LimitedLaunchInviteTitle"
                : "#Notification_PlaytestInviteTitle",
            titleLoc: (m) =>
              m.is_limited_launch
                ? "#Notification_LimitedLaunchInviteBody"
                : "#Notification_PlaytestInviteBody",
            image: (m) => m.appid,
            link: (m) =>
              p.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + m.appid,
          },
          [u.Vv.Iz]: {
            titleLoc: (m) => {
              switch (m.status) {
                case tr:
                  return "#Notification_ReportedContentAction_Received";
                case mr:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case Oi:
                  return "#Notification_ReportedContentAction_Acquitted";
                case Xi:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case ii:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case e:
                  return "#Notification_ReportedContentAction_DisputeAcquitted";
                default:
                  return "#Notification_ReportedContentAction_Unknown";
              }
            },
            link: (m) => Di(m),
          },
        };
        function Gi(m) {
          if (m !== void 0) return fa[m];
        }
        function Ri(m) {
          return !!Gi(m);
        }
        const wa = {
          [u.Vv.Rj]: {
            steamidAttribute: "inviter",
            titleLoc: "#SteamNotifications_FamilyInviteTitle",
            bodyLoc: "#SteamNotifications_FamilyInviteBody",
            url: (m) =>
              `${p.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${m.familyid}`,
          },
          [u.Vv.Sx]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
            url: () =>
              `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [u.Vv.Cz]: {
            steamidAttribute: "requestor_steamid",
            titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
            bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
            url: (m) => (0, lr.w1)(m.familyid, m.request_id),
          },
          [u.Vv.HN]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (m) =>
              m.action == L.IG.DP
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (m) =>
              m.action == L.IG.DP
                ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
                : "",
            url: () =>
              `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [u.Vv.j3]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
            url: () =>
              `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [u.Vv.uH]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (m) =>
              m.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
            bodyLoc: (m) =>
              m.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
            url: () =>
              `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [u.Vv.JN]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (m) =>
              m.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
            bodyLoc: (m) =>
              m.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
            url: () =>
              `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
        };
        function Ci(m) {
          if (m !== void 0) return wa[m];
        }
        function oi(m) {
          return !!Ci(m);
        }
        const ba = [
          u.Vv.v_,
          u.Vv.pZ,
          u.Vv.K,
          u.Vv.hW,
          u.Vv.XJ,
          u.Vv.an,
          u.Vv.Y9,
          u.Vv.YE,
          u.Vv.bh,
          u.Vv.js,
          u.Vv.mr,
        ];
        function _i(m) {
          return ba.findIndex((r) => r == m) != null;
        }
        function ca(m) {
          return m.hidden ? !1 : na(m.notification_type) && Ji(m.body_data);
        }
        function na(m) {
          return Ri(m) || oi(m) || _i(m);
        }
        var za = ((m) => (
          (m[(m.New = 0)] = "New"),
          (m[(m.Update = 1)] = "Update"),
          (m[(m.Remove = 2)] = "Remove"),
          m
        ))(za || {});
        const Sa = "Test_",
          ya = 3600 * 48,
          da = 600,
          ra = !1,
          Li = new Ei.wd("SteamNotificationStore"),
          Ti = Li.Debug,
          Wi = Li.Error,
          ha = Li.Warning;
        class pi {
          constructor() {
            (0, ti.Gn)(this);
          }
          m_rgNotificationRollups = [];
          m_summary = qi();
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
          m_eTargetClientType = u.rB.D;
          m_fnOnNotificationCallback = null;
          BHasNotificationsData() {
            return this.m_currentNotificationsData != null;
          }
          setTransport(r) {
            this.m_transport = r;
          }
          RegisterOnNotificationCallback(r) {
            this.m_fnOnNotificationCallback = r;
          }
          SetClientFilters(r, a = u.rB.D) {
            (this.m_strRemoteClientID = r), (this.m_eTargetClientType = a);
          }
          NotifyServerNotificationsRead(r) {
            this.m_rgNotifyServerRead.push(...r), this.UpdateServer();
          }
          NotifyServerNotificationsHidden(r) {
            this.m_rgNotifyServerHidden.push(...r), this.UpdateServer();
          }
          BSendToCallbackAsNew(r) {
            return (
              !r.read &&
              !ga(r) &&
              !this.m_rgUnreadNotificationIDs.includes(r.notification_id)
            );
          }
          Dev_AddTestNotification(r) {}
          Dev_UpdateTestNotificationReadState(r, a) {
            const t = this.m_rgTestNotifications.findIndex(
              (B) => B.notification_id == r,
            );
            return t !== -1 && this.m_rgTestNotifications[t].read != a
              ? ((this.m_rgTestNotifications[t].read = a), !0)
              : !1;
          }
          UpdateServer() {
            if (this.m_rgNotifyServerRead.length > 0) {
              const r = T.w.Init(u.V4);
              r.Body().set_notification_ids(this.m_rgNotifyServerRead),
                u.Fn.MarkNotificationsRead(this.m_transport, r) &&
                  (this.m_rgNotifyServerRead = []);
            }
            if (this.m_rgNotifyServerHidden.length > 0) {
              const r = T.w.Init(u.b$);
              r.Body().set_notification_ids(this.m_rgNotifyServerHidden),
                u.Fn.HideNotification(this.m_transport, r) &&
                  (this.m_rgNotifyServerHidden = []);
            }
          }
          MarkItemRead(r, a = !1) {
            let t = this.m_rgNotificationRollups.findIndex(
              (j) => j.item.notification_id == r,
            );
            if (t === -1) {
              a
                ? this.NotifyServerNotificationsRead([r])
                : Wi(
                    "Attempted to mark notification read that is not in the notification store",
                  );
              return;
            }
            let B = this.m_rgNotificationRollups[t];
            if (B.item.read) {
              Wi("Attempted to mark notification read that is already read");
              return;
            }
            if (((B.item.read = !0), B.rgunread?.length > 0)) {
              this.ReduceNewTotals(B.type, B.rgunread.length);
              let j = [];
              B.rgunread.forEach((U) => {
                j.push(U);
              }),
                B.rgread.push(...B.rgunread),
                (B.rgunread = []),
                this.NotifyServerNotificationsRead(j);
            }
          }
          MarkItemHidden(r) {
            let a = this.m_rgNotificationRollups.findIndex(
              (B) => B.item.notification_id == r,
            );
            if (a === -1) {
              Wi(
                "Attempted to mark notification hidden that is not in the notification store",
              );
              return;
            }
            let t = this.m_rgNotificationRollups[a];
            (t.item.hidden = !0),
              t.rgunread?.length > 0 &&
                this.ReduceNewTotals(t.type, t.rgunread?.length),
              this.NotifyServerNotificationsHidden([
                ...t.rgunread,
                ...t.rgread,
              ]);
          }
          ReduceNewTotals(r, a) {
            ma(this.m_summary, r, -a);
          }
          MarkAllItemsViewed() {
            const r = T.w.Init(u.nH);
            r.Body().set_remote_client_id(this.m_strRemoteClientID),
              r.Body().set_target_client_type(this.m_eTargetClientType),
              u.Fn.MarkNotificationsViewed(this.m_transport, r),
              (this.m_nUnviewed = 0);
          }
          MarkAllItemsRead(r) {
            let a = [],
              t = [],
              B = 0;
            const j = r ?? this.m_rgNotificationRollups;
            return (
              j.forEach((U, Q) => {
                U.rgunread.length > 0 &&
                  (U.rgunread.forEach((M) => {
                    a.push(M);
                  }),
                  t.push(Q));
              }),
              a.length > 0 &&
                ((this.m_summary = Object.assign(qi(), {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                })),
                t.forEach((U) => {
                  let Q = j[U];
                  (Q.item.read = !0), (Q.rgunread = []);
                }),
                this.NotifyServerNotificationsRead(a)),
              a.length + B
            );
          }
          ApplyNotificationsUpdate(r) {
            if (
              (Ti("ApplyNotificationsUpdate", r),
              !r ||
                (!r.notifications?.length &&
                  r.pending_friend_count === void 0 &&
                  r.pending_gift_count === void 0))
            ) {
              Ti("Error: ApplyNotificationsUpdate was called with no data");
              return;
            }
            if (!this.m_currentNotificationsData) {
              Ti(
                "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
              );
              return;
            }
            const a = this.m_currentNotificationsData;
            r.notifications?.forEach((t) => {
              const B = a.notifications.findIndex(
                (j) => j.notification_id == t.notification_id,
              );
              B != -1
                ? Object.assign(a.notifications[B], t)
                : a.notifications.push(t);
            }),
              r.pending_friend_count !== void 0 &&
                (this.m_currentNotificationsData.pending_friend_count =
                  r.pending_friend_count),
              r.pending_gift_count !== void 0 &&
                (this.m_currentNotificationsData.pending_gift_count =
                  r.pending_gift_count),
              r.pending_family_invite_count !== void 0 &&
                (this.m_currentNotificationsData.pending_family_invite_count =
                  r.pending_family_invite_count),
              this.ProcessNotifications();
          }
          ProcessNewNotificationPayload(r) {
            (this.m_currentNotificationsData = JSON.parse(JSON.stringify(r))),
              this.ProcessNotifications();
          }
          ProcessNotifications() {
            let r = [],
              a = qi(),
              t = 0;
            if (
              (this.m_currentNotificationsData?.notifications?.forEach((B) => {
                this.BExcludeClientTargetedNotification(B) ||
                  (this.m_rgNotifyServerHidden.length > 0 &&
                    this.m_rgNotifyServerHidden.findIndex(
                      (U) => U == B.notification_id,
                    ) !== -1 &&
                    (B.hidden = !0),
                  ca(B) &&
                    (this.m_rgNotifyServerRead.length > 0 &&
                      this.m_rgNotifyServerRead.findIndex(
                        (U) => U == B.notification_id,
                      ) !== -1 &&
                      (B.read = !0),
                    B.read || ma(a, B.notification_type, 1),
                    B.viewed || t++,
                    this.AddNotificationToRollups(r, B)));
              }),
              r.sort((B, j) => B.timestamp - j.timestamp),
              this.m_fnOnNotificationCallback)
            ) {
              for (const B of r)
                if (B.bSendToCallbackAsNew)
                  this.m_rgNewRollupIDs.set(
                    B.rollup_key,
                    JSON.parse(JSON.stringify(B)),
                  ),
                    this.m_fnOnNotificationCallback(B, 0);
                else if (this.m_rgNewRollupIDs.has(B.rollup_key)) {
                  let j = this.m_rgNewRollupIDs.get(B.rollup_key);
                  (j.item.read != B.item.read ||
                    j.item.viewed != B.item.viewed) &&
                    (this.m_rgNewRollupIDs.set(
                      B.rollup_key,
                      JSON.parse(JSON.stringify(B)),
                    ),
                    this.m_fnOnNotificationCallback(B, 1));
                }
              for (const [B, j] of this.m_rgNewRollupIDs)
                r.findIndex((U) => U.rollup_key == B) == -1 &&
                  (this.m_fnOnNotificationCallback(j, 2),
                  this.m_rgNewRollupIDs.delete(B));
            }
            r.reverse(),
              (a.pending_gifts =
                this.m_currentNotificationsData?.pending_gift_count ?? 0),
              (a.pending_invites =
                this.m_currentNotificationsData?.pending_friend_count ?? 0),
              (a.pending_family_invites =
                this.m_currentNotificationsData?.pending_family_invite_count ??
                0),
              (this.m_rgNotificationRollups = r.slice()),
              (this.m_summary = a),
              (this.m_bLoaded = !0),
              (this.m_nUnviewed = t);
          }
          BExcludeClientTargetedNotification(r) {
            const a = Ji(r.body_data);
            return a
              ? a.remote_client_id &&
                this.m_strRemoteClientID != a.remote_client_id
                ? !0
                : !!(
                    a.target_client_types &&
                    !(this.m_eTargetClientType & a.target_client_types)
                  )
              : !1;
          }
          BReplaceRollupItem(r, a) {
            return r.read != a.read
              ? a.read
              : (r.read && a.read) || a.viewed == r.viewed
                ? a.timestamp < r.timestamp
                : !r.viewed && a.viewed
                  ? !0
                  : r.viewed && a.viewed
                    ? a.viewed < r.viewed
                    : !1;
          }
          AddNotificationToRollups(r, a) {
            const t = this.BSendToCallbackAsNew(a);
            t && this.m_rgUnreadNotificationIDs.push(a.notification_id);
            let B = a.notification_type;
            switch (B) {
              case u.Vv.v_:
                {
                  const G = Ki(a);
                  if (!G) return;
                  const Qi =
                    "comment_" +
                    G.owner_steam_id?.GetAccountID() +
                    "_" +
                    G.forum_id +
                    "_" +
                    G.topic_id +
                    (G.brate_limited ? "_ratelimited" : "");
                  let Zi = r.findIndex((ai) => ai.rollup_key == Qi);
                  if (Zi == -1)
                    r.push({
                      type: B,
                      rollup_key: Qi,
                      item: a,
                      rollup_count: 1,
                      timestamp: a.timestamp,
                      rgunread: a.read ? [] : [a.notification_id],
                      rgread: a.read ? [a.notification_id] : [],
                      bSendToCallbackAsNew: t,
                      url: ia(G),
                    });
                  else {
                    let ai = r[Zi];
                    this.BReplaceRollupItem(a, ai.item) &&
                      ((!ra || ai.item.read) && (ai.url = ia(G)),
                      (ai.item = a),
                      (ai.timestamp = a.timestamp),
                      (ai.bSendToCallbackAsNew = t)),
                      (ai.rollup_count = ai.rollup_count + 1),
                      a.read
                        ? ai.rgread.push(a.notification_id)
                        : ai.rgunread.push(a.notification_id);
                  }
                }
                break;
              case u.Vv.hW:
                const j = Ki(a);
                if (j) {
                  const G = "item_" + j.appid;
                  this.AddNotificationToRollupByAppID(r, a, G, B, t, j.appid);
                }
                break;
              case u.Vv.Y9:
                const U = Ki(a)?.appid.toString();
                if (U) {
                  const G = "asyncgame_" + U;
                  this.AddNotificationToRollupByAppID(r, a, G, B, t, U);
                }
                break;
              case u.Vv.Iz:
                const Q = Ki(a),
                  M = Q?.report_id,
                  hi = Di(Q),
                  vi = `contentreport_${M}`;
                let Yi = r.findIndex((G) => G.rollup_key == vi);
                if (Yi == -1)
                  r.push({
                    type: B,
                    rollup_key: vi,
                    item: a,
                    rollup_count: 1,
                    timestamp: a.timestamp,
                    rgunread: a.read ? [] : [a.notification_id],
                    rgread: a.read ? [a.notification_id] : [],
                    bSendToCallbackAsNew: t,
                    url: hi,
                  });
                else {
                  let G = r[Yi];
                  this.BReplaceRollupItem(a, G.item) &&
                    ((!ra || G.item.read) && (G.url = hi),
                    (G.item = a),
                    (G.timestamp = a.timestamp),
                    (G.bSendToCallbackAsNew = t)),
                    (G.rollup_count = G.rollup_count + 1),
                    a.read
                      ? G.rgread.push(a.notification_id)
                      : G.rgunread.push(a.notification_id);
                }
                break;
              default:
                r.push({
                  type: B,
                  rollup_key: a.notification_id,
                  item: a,
                  timestamp: a.timestamp,
                  rgunread: a.read ? [] : [a.notification_id],
                  rgread: a.read ? [a.notification_id] : [],
                  bSendToCallbackAsNew: t,
                });
                break;
            }
          }
          AddNotificationToRollupByAppID(r, a, t, B, j, U) {
            let Q = r.findIndex((M) => M.rollup_key == t);
            if (Q == -1)
              r.push({
                type: B,
                rollup_key: t,
                item: a,
                rollup_count: 1,
                timestamp: a.timestamp,
                rgunread: a.read ? [] : [a.notification_id],
                rgread: a.read ? [a.notification_id] : [],
                bSendToCallbackAsNew: j,
              });
            else {
              let M = r[Q];
              this.BReplaceRollupItem(a, M.item) &&
                ((M.item = a),
                (M.timestamp = a.timestamp),
                (M.bSendToCallbackAsNew = j)),
                (M.rollup_count = M.rollup_count + 1),
                a.read
                  ? M.rgread.push(a.notification_id)
                  : M.rgunread.push(a.notification_id);
            }
          }
        }
        xi([ti.sH], pi.prototype, "m_rgNotificationRollups", 2),
          xi([ti.sH], pi.prototype, "m_summary", 2),
          xi([ti.sH], pi.prototype, "m_bLoaded", 2),
          xi([ti.sH], pi.prototype, "m_nUnviewed", 2),
          xi([ti.XI], pi.prototype, "ProcessNotifications", 1);
        function qi() {
          return {
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
        }
        async function Ta(m, r, a, t, B, j = !0, U = !1) {
          if (!r) throw new Error("Invalid steamid for GetSteamNotifications");
          const Q = T.w.Init(u.GG);
          Q.Body().set_language(a),
            Q.Body().set_include_read(j),
            Q.Body().set_include_pinned_counts(!0),
            Q.Body().set_include_confirmation_count(U);
          const M = await u.Fn.GetSteamNotifications(m, Q);
          if (M.GetEResult() !== v.R)
            throw (
              (ha(
                `Received error from GetSteamNotifications. Result ${M.GetEResult()}. Transport ${M.Hdr().transport_error()}`,
              ),
              new Error(`Error from GetSteamNotifications: ${M.GetEResult()}`))
            );
          const hi = M.Body().toObject();
          return (
            t &&
              (hi.notifications = hi.notifications?.filter(
                (vi) => !ta(vi.notification_type, t, B),
              )),
            hi
          );
        }
        async function Fa(m, r) {
          if (!m || !m.steamid || !m.contextid || !m.appid || !m.assetid)
            return Wi("Item notification missing required attributes"), null;
          const a = T.w.Init(W);
          a.Body().set_steamid(m.steamid),
            a.Body().set_contextid(m.contextid),
            a.Body().set_appid(parseInt(m.appid)),
            a.Body().set_get_descriptions(!0),
            a.Body().set_language(p.TS.LANGUAGE);
          let t = new R();
          t.add_assetids(m.assetid), a.Body().set_filters(t);
          const B = await Vi.GetInventoryItemsWithDescriptions(r, a);
          return B.GetEResult() !== v.R
            ? (Wi(
                "Request for steam item metadata did not succeed",
                B.GetEResult(),
              ),
              null)
            : (B.Body().toObject().descriptions[0] ?? null);
        }
        const Wa = "ItemMetadata";
        function pa(m) {
          return [
            `${Wa}_${m?.steamid}_${m?.appid}_${m?.contextid}_${m?.assetid}`,
          ];
        }
        async function Pa(m, r) {
          if (!r) return [];
          const a = CProtoBufMsg.Init(
            CSteamNotification_GetPreferences_Request,
          );
          let t = await SteamNotificationService.GetPreferences(m, a);
          return t.GetEResult() != k_EResultOK
            ? (Wi("Getting notification preferences failed " + t.GetEResult()),
              [])
            : t.Body().toObject().preferences;
        }
        function va(m, r, a) {
          let t = Ii(u.Vv.hW, m.body_data);
          t.steamid = r;
          let B = (0, Ni.I)({
            queryKey: pa(t),
            queryFn: async () => Fa(t, a),
            staleTime: 1 / 0,
          });
          return B.isSuccess ? B.data : null;
        }
        function ia(m) {
          let r = `comment/${m.comment_type}/bounce/${m.owner_steam_id.ConvertTo64BitString()}/${m.forum_id}/?feature2=${m.topic_id}`;
          return m.last_post > 0 && (r += "&tscn=" + (m.last_post - 1)), r;
        }
        function aa(m) {
          return m.comment_type == Si.Yd;
        }
        function sa(m) {
          return m?.bhas_friend;
        }
        function la(m) {
          return m.comment_type == Si.Yd;
        }
        function ja(m) {
          return aa(m) || sa(m);
        }
        function Ua(m) {
          return la(m);
        }
        function Ji(m) {
          if (!m) return null;
          try {
            return JSON.parse(m);
          } catch {
            Ti("Steam notification in invalid format:", m);
          }
          return null;
        }
        function Ki(m) {
          return Ii(m.notification_type, m.body_data);
        }
        function Oa(m) {
          return Ii(m.type, m.item?.body_data);
        }
        function Ii(m, r) {
          let a = Ji(r);
          if (!a) return null;
          switch (m) {
            case u.Vv.K:
              return a.gifter_account;
            case u.Vv.YE:
              return {
                responder_steamid: a.responder_steamid,
                package_id: a.package_id,
                bundle_id: a.bundle_id,
              };
            case u.Vv.an:
              return parseInt(a.sender);
            case u.Vv.XJ:
              return {
                appid: a.appid,
                count: a.count ?? 1,
                appids: a.appids ?? [],
              };
            case u.Vv.Y9:
              return !a.appid ||
                !a.state ||
                (a.state != Hi.GO && a.state != Hi.cf)
                ? (Ti("Async game notification invalid data", r), null)
                : { appid: parseInt(a.appid), state: parseInt(a.state) };
            case u.Vv.v_:
              let t = {
                owner_steam_id: a.owner_steam_id
                  ? new $i.b(a.owner_steam_id)
                  : null,
                bclan_account: Mi(a.bclan_account),
                title: a.title,
                comment: a.text,
                time: a.last_post,
                comment_type: Number(a.type),
                topic_id: a.topic_id,
                forum_id: a.forum_id,
                account_steam_id: a.account_id
                  ? $i.b.InitFromAccountID(a.account_id)
                  : null,
                bhas_friend: Mi(a.bhas_friend),
                bis_forum: Mi(a.bis_forum),
                last_post: a.last_post,
                bsubscribed: Mi(a.subscribed),
                bis_owner: Mi(a.bis_owner),
                brate_limited: !!a.brate_limited,
              };
              return (
                a.json_data &&
                  (t.json_data = {
                    app_id: parseInt(a.json_data.app_id),
                    file_type: parseInt(a.json_data.file_type),
                    title: a.json_data.title,
                  }),
                t
              );
            case u.Vv.pZ:
              return {
                requestorID: parseInt(a.requestor_id),
                state: a.state ? parseInt(a.state) : d.abL,
              };
            case u.Vv.hW:
              return {
                appid: parseInt(a.app_id),
                assetid: a.asset_id ?? "",
                contextid: a.context_id ?? "",
              };
            case u.Vv.js:
              return {
                url: a.url ?? "",
                strGameName: a.content_app_name ?? "",
                mediaType: a.media_type ?? "clip",
                secDuration: parseFloat(a.duration_seconds ?? 0),
                nSize: parseInt(a.file_size ?? 0),
                strMachineName: a.machine_name,
                rtExpiration: a.expiration,
                thumbnailURL: a.thumbnail_url,
              };
            case u.Vv.Iz:
              return {
                report_id: a.report_id ?? "",
                reported_content_id: a.reported_content_id ?? "",
                subject_type: a.subject_type ?? 0,
                subject_group_id: a.subject_group_id ?? "0",
                subject_id: a.subject_id ?? "0",
                status: a.status ?? 0,
              };
            default:
              return (
                Ti(
                  "GetCustomNotificationDataByType called with unexpected type:" +
                    m,
                  r,
                ),
                null
              );
          }
        }
        function Mi(m) {
          if (typeof m > "u") return !1;
          if (typeof m == "number") return m > 0;
          if (typeof m == "string")
            switch (m.toLowerCase()?.trim()) {
              case "true":
              case "1":
                return !0;
              default:
                return !1;
            }
          return Ti("notification contained unexpected boolean value"), !1;
        }
        function xa(m) {
          let r = 0;
          return (
            (function (t) {
              return Object.keys(t);
            })(m).forEach((t) => {
              t != "pending_gifts" && t != "pending_invites" && (r += m[t]);
            }),
            r
          );
        }
        const Ma = {
          [u.Vv.Jo]: { rollup_field: void 0, eFeature: void 0 },
          [u.Vv.yh]: { rollup_field: void 0, eFeature: void 0 },
          [u.Vv.K]: { rollup_field: "gifts", eFeature: N.uX },
          [u.Vv.v_]: { rollup_field: "comments", eFeature: N.qR },
          [u.Vv.hW]: { rollup_field: "inventory_items", eFeature: N.WJ },
          [u.Vv.pZ]: { rollup_field: "invites", eFeature: N.M },
          [u.Vv.wp]: { rollup_field: "major_sale", eFeature: N.ip },
          [u.Vv.Ol]: { rollup_field: void 0, eFeature: void 0 },
          [u.Vv.XJ]: { rollup_field: "wishlist", eFeature: N.ip },
          [u.Vv.an]: { rollup_field: "trade_offers", eFeature: N.ut },
          [u.Vv.e9]: { rollup_field: "general", eFeature: N.uX },
          [u.Vv.wY]: { rollup_field: "help_request_replies", eFeature: N.uX },
          [u.Vv.Y9]: { rollup_field: "async_game_updates", eFeature: N.uX },
          [u.Vv.oe]: { rollup_field: "moderator_messages", eFeature: N.qR },
          [u.Vv.Sx]: {
            rollup_field: "parental_feature_requests",
            eFeature: N.uX,
          },
          [u.Vv.Rj]: { rollup_field: "family_invites", eFeature: N.uX },
          [u.Vv.Cz]: {
            rollup_field: "family_purchase_requests",
            eFeature: N.uX,
          },
          [u.Vv.j3]: {
            rollup_field: "parental_playtime_requests",
            eFeature: N.uX,
          },
          [u.Vv.HN]: {
            rollup_field: "family_purchase_request_responses",
            eFeature: N.uX,
          },
          [u.Vv.uH]: {
            rollup_field: "parental_feature_access_responses",
            eFeature: N.uX,
          },
          [u.Vv.JN]: {
            rollup_field: "parental_playtime_responses",
            eFeature: N.uX,
          },
          [u.Vv.YE]: { rollup_field: "requested_game_added", eFeature: N.uX },
          [u.Vv.js]: { rollup_field: void 0, eFeature: N.uX },
          [u.Vv.bh]: { rollup_field: void 0, eFeature: N.uX },
          [u.Vv.FK]: { rollup_field: "playtest_invites", eFeature: N.ip },
          [u.Vv.mr]: { rollup_field: void 0, eFeature: N.ut },
          [u.Vv.Iz]: { rollup_field: void 0, eFeature: N.uX },
        };
        function ea(m) {
          const r = Ma[m];
          return (0, C.wT)(!!r, `Missing notification type data for ${m}`), r;
        }
        function ta(m, r, a) {
          if (!r) return !1;
          const t = ea(m);
          return (0, q.EC)(r, t?.eFeature ?? N.JC, a);
        }
        function ma(m, r, a) {
          (0, ti.h5)(() => {
            const t = ea(r);
            t?.rollup_field &&
              (m[t.rollup_field] = Math.max(0, m[t.rollup_field] + a));
          });
        }
        function ka(m) {
          return !m.viewed || m.viewed + da > (0, Pi._2)();
        }
        function ga(m) {
          return m.viewed && m.viewed + ya < (0, Pi._2)();
        }
        function La(m) {
          return (
            xa(m) +
              m.pending_gifts +
              m.pending_invites +
              m.pending_family_invites >
            0
          );
        }
      },
    },
  ]);
})();

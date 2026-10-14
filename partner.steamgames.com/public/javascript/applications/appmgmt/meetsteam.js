/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [86762],
    {
      12946: (be, Ue, f) => {
        "use strict";
        f.r(Ue), f.d(Ue, { MeetSteamRoutes: () => at, default: () => rs });
        var t = f(7850),
          fe = f(58732),
          p = f(90626),
          X = f(17083),
          P = f(92757),
          Be = f(61266),
          Ee = f(26485),
          Me = f(90783),
          ge = f(25792),
          A = f(95695),
          te = f.n(A),
          Se = f(21418),
          Le = f(45737),
          B = f.n(Le),
          N = f(67705),
          $ = f(99412),
          Z = f(72604),
          ae = f(35038),
          K = f(80613),
          E = f.n(K),
          o = f(75245);
        class oe extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.clan_event_gid || o.Sg(oe.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    registration_group_id: {
                      n: 3,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    registration_session_id: {
                      n: 4,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guest_count: {
                      n: 5,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    jsondata: {
                      n: 7,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    skip_email: { n: 8, br: o.qM.readBool, bw: o.gp.writeBool },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = o.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(oe.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new oe();
            return oe.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(oe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(oe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Request";
          }
        }
        class je extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new je();
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new je();
            return je.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Response";
          }
        }
        class k extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.clan_event_gid || o.Sg(k.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = o.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(k.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new k();
            return k.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(k.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(k.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Request";
          }
        }
        class c extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              c.prototype.availability || o.Sg(c.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: { availability: { n: 1, c: d, r: !0, q: !0 } },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = o.w0(c.M())), c.sm_mbf;
          }
          toObject(e = !1) {
            return c.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(c.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(c.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new c();
            return c.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(c.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(c.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response";
          }
        }
        class d extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              d.prototype.group_id || o.Sg(d.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    group_id: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guest_count: {
                      n: 3,
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
          static toObject(e, n) {
            return o.BT(d.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(d.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new d();
            return d.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(d.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(d.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response_Session";
          }
        }
        class m extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              m.prototype.clan_event_gid || o.Sg(m.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
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
          static toObject(e, n) {
            return o.BT(m.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(m.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new m();
            return m.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(m.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(m.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Request";
          }
        }
        class j extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.registrations || o.Sg(j.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: { registrations: { n: 1, c: x, r: !0, q: !0 } },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = o.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(j.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new j();
            return j.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(j.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(j.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response";
          }
        }
        class x extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.group_id || o.Sg(x.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    group_id: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    steamid: {
                      n: 3,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    guests_registered: {
                      n: 4,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    jsondata: {
                      n: 5,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    rt_attendance_marked: {
                      n: 6,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    attendance_count: {
                      n: 7,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guests_attendance: {
                      n: 8,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = o.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(x.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new x();
            return x.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(x.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(x.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
          }
        }
        class L extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.clan_event_gid || o.Sg(L.M()),
              K.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    accountids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = o.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(L.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new L();
            return L.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(L.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(L.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Request";
          }
        }
        class H extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.num_emailed || o.Sg(H.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    num_emailed: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    num_skipped: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = o.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(H.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new H();
            return H.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(H.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(H.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Response";
          }
        }
        class G extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.clan_event_gid || o.Sg(G.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = o.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(G.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new G();
            return G.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(G.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(G.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Request";
          }
        }
        class q extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.sessionids || o.Sg(q.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    sessionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = o.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(q.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new q();
            return q.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(q.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(q.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Response";
          }
        }
        class F extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.rt_oldest_date || o.Sg(F.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    rt_oldest_date: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = o.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(F.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new F();
            return F.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(F.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(F.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
          }
        }
        class C extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.accountid || o.Sg(C.M()),
              K.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    accountid: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    clan_event_gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: o.qM.readFixed64String,
                      pbr: o.qM.readPackedFixed64String,
                      bw: o.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = o.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(C.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new C();
            return C.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(C.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(C.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleEventOrganizerInfo";
          }
        }
        class b extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.info || o.Sg(b.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: { info: { n: 1, c: C, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return o.BT(b.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new b();
            return b.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(b.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(b.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
          }
        }
        class Q extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.accountids || o.Sg(Q.M()),
              K.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    accountids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                    partnerids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = o.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(Q.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(Q.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(Q.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
          }
        }
        class I extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.accountid || o.Sg(I.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    accountid: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    partnerid: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    realname: {
                      n: 3,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    email: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = o.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(I.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new I();
            return I.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(I.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(I.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerEmailAndName";
          }
        }
        class O extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.info || o.Sg(O.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { info: { n: 1, c: I, r: !0, q: !0 } },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = o.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(O.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new O();
            return O.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(O.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(O.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
          }
        }
        var M;
        ((r) => {
          function e(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.UpdateRegistration#1",
              (0, ae.I8)(oe, g, v),
              je,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.UpdateRegistration = e;
          function n(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, ae.I8)(k, g, v),
              c,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          r.GetAvailability = n;
          function s(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, ae.I8)(m, g, v),
              j,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetRegistrations = s;
          function a(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, ae.I8)(L, g, v),
              H,
              { ePrivilege: 4 },
            );
          }
          r.EmailInvitees = a;
          function i(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, ae.I8)(G, g, v),
              q,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          r.TestFireEmails = i;
          function l(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, ae.I8)(F, g, v),
              b,
              {
                bConstMethod: !0,
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetSaleEventOrganizers = l;
          function u(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, ae.I8)(Q, g, v),
              O,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetBatchPartnerEmailAndName = u;
        })(M || (M = {}));
        var ce = f(64868),
          ne = f(20194),
          he = f(75233),
          Fe = f(41735),
          Y = f.n(Fe),
          R = f(76559),
          U = f(3166),
          W = f(91916),
          re = f(40772),
          pe = f(7582),
          le = f(179);
        function se(r, e = !1) {
          const [n, s = "00:00:00"] = r.trim().split(/\s+/),
            [a, i, l] = n.split("-").map(Number),
            [u, h, g] = s.split(":").map(Number),
            v = e
              ? Date.UTC(a, i - 1, l, u, h, g ?? 0)
              : new Date(a, i - 1, l, u, h, g ?? 0).getTime();
          return Math.floor(v / 1e3);
        }
        function J() {
          const [r] = p.useState(() =>
              (0, U.Tc)("events_list", "application_config"),
            ),
            [e] = (0, le.QD)("filter"),
            n = (0, pe.f1)(),
            [s, a] = p.useMemo(() => {
              let l = new Array(),
                u = new Array();
              return (
                r.forEach((h) => {
                  h.endtime && se(h.endtime) < n ? u.push(h) : l.push(h);
                }),
                [u, l]
              );
            }, [r, n]),
            i = (0, p.useMemo)(
              () => r.find((l) => l.id === e?.toLocaleLowerCase()),
              [r, e],
            );
          return { rgOldEvents: s, rgEvents: a, selectConference: i };
        }
        function ve(r) {
          return ["usePartnerRevAndBestAppSlow", r];
        }
        async function ee(r) {
          const e = `${U.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
            n = { sessionid: (0, U.KC)(), partnerid: r };
          return (await Y().get(e, { params: n }))?.data?.data;
        }
        function de(r) {
          const e = (0, ne.I)({
            queryKey: ve(r),
            queryFn: async () => ee(r),
            enabled: !!r,
          });
          return e.isLoading ? null : e.data;
        }
        function me(r, e) {
          return r.getQueryData(["usePartnerRevAndBestAppSlow", e]);
        }
        function Ke(r, e, n) {
          return (0, ne.I)({
            queryKey: ["useMeetSteamGetAllRegistration", e, n],
            queryFn: async () => {
              const a = ae.w.Init(m);
              a.Body().set_clan_event_gid(e);
              const i = await M.GetRegistrations(r, a);
              return i.BSuccess()
                ? i
                    .Body()
                    .registrations()
                    .map((l) => l.toObject())
                : [];
            },
            enabled: e != null && n != 0,
          });
        }
        function We(r) {
          const e = (0, ne.I)({
            queryKey: ["useMeetSteamSaleOperators"],
            queryFn: async () => {
              const n = ae.w.Init(F),
                s = new Date();
              s.setFullYear(s.getFullYear() - 2),
                n.Body().set_rt_oldest_date(0);
              const a = await M.GetSaleEventOrganizers(r, n);
              return a.BSuccess()
                ? a
                    .Body()
                    .info()
                    .map((i) => i.toObject())
                : [];
            },
          });
          return e.isLoading ? null : e.data;
        }
        function Je(r) {
          const [e, n] = (0, p.useState)(!1),
            [s, a] = (0, p.useState)(0),
            i = (0, he.jE)();
          return (
            (0, p.useEffect)(() => {
              (async () => {
                let u = 0;
                for (const h of r) {
                  const g = h.results.partner_id,
                    v = new R.b(h.steamid).GetAccountID();
                  await Promise.all([
                    (0, W.qG)(g),
                    i.prefetchQuery({
                      queryKey: ve(g),
                      queryFn: async () => ee(g),
                    }),
                    (0, re.PQ)(i, g),
                  ]),
                    ++u,
                    a(u);
                }
                n(!0);
              })();
            }, [i, r]),
            { bComplete: e, nCount: s }
          );
        }
        var ye = f(19367),
          Oe = f.n(ye),
          ue = f(48421),
          we = f(69909),
          De = f(63854),
          V = f(58534),
          Ze = f(16369),
          Ie = f(1880),
          xe = f(69168),
          ie = f(85599),
          Pe = f(11243),
          et = f(36707),
          Tt = f(41502),
          T = f(18210),
          ct = f(92264),
          ke = f(98609),
          on = f(30565),
          Te = f.n(on);
        function cn(r) {
          const e = At();
          return (0, t.jsx)("div", {
            children: (0, t.jsx)("ol", {
              children: Array.from(e.entries()).map(([n, s]) =>
                (0, t.jsx)(
                  "li",
                  {
                    children: (0, t.jsx)("a", {
                      href: `${U.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${n}`,
                      target: "_blank",
                      children: s,
                    }),
                  },
                  n,
                ),
              ),
            }),
          });
        }
        function At() {
          const [r] = (0, p.useState)(() => {
            const e = (0, U.Tc)("survey_list", "application_config") || {},
              n = new Map();
            for (const s of Object.keys(e)) n.set(s, e[s]);
            return n;
          });
          return r;
        }
        const dt = new Set();
        function ln() {
          for (const r of dt) r(location.search);
        }
        function dn() {
          const [r, e] = (0, p.useState)(location.search);
          return (
            (0, p.useEffect)(() => {
              function n() {
                e(location.search);
              }
              return (
                dt.add(e),
                window.addEventListener("popstate", n),
                e(location.search),
                () => {
                  dt.delete(e), window.removeEventListener("popstate", n);
                }
              );
            }, []),
            r
          );
        }
        function Et(r, e) {
          const n = dn(),
            s = (0, p.useMemo)(() => {
              const l = new URLSearchParams(n.substring(1)).get(r);
              return l != null
                ? e != null
                  ? typeof e == "boolean"
                    ? e.constructor(l !== "false")
                    : e.constructor(l)
                  : l
                : e;
            }, [r, e, n]),
            a = p.useCallback(
              (i, l = !1) => {
                const u = new URLSearchParams(location.search.substring(1));
                if (i != null) {
                  if (u.get(r) == i) return;
                  u.set(r, String(i));
                } else {
                  if (!u.has(r)) return;
                  u.delete(r);
                }
                l
                  ? history.replaceState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${u}`),
                    )
                  : history.pushState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${u}`),
                    ),
                  (0, p.startTransition)(ln);
              },
              [r],
            );
          return [s, a];
        }
        const Mt = p.createContext(void 0);
        function un(r) {
          const { children: e } = r,
            [n, s] = Et("showpastevents", !1);
          return (0, t.jsx)(Mt.Provider, {
            value: { bShowArchived: n, setShowArchived: s },
            children: e,
          });
        }
        const Lt = () => {
          const r = (0, p.useContext)(Mt);
          if (!r)
            throw new Error(
              "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
            );
          return r;
        };
        var hn = f(34283),
          $e = f.n(hn),
          rt = f(34592),
          Xe = f(22880),
          st = f(45926),
          ut = f(54407),
          gn = f(77008),
          mn = f(60298);
        class Ge {
          m_steamInterface;
          GetSaleFeatureTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              Ge.s_Singleton ||
                ((Ge.s_Singleton = new Ge()), Ge.s_Singleton.Init()),
              Ge.s_Singleton
            );
          }
          Init() {
            this.m_steamInterface = (0, mn.p)(new gn.D(ke.TS.WEBAPI_BASE_URL));
          }
        }
        function ht() {
          return Ge.Get().GetSaleFeatureTransport().GetServiceTransport();
        }
        var it = f(24642),
          Ft = f(72609);
        async function fn(r) {
          const e = `${Ft.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${r}`,
            n = await fetch(e);
          if (!n.ok)
            throw new Error(`Failed to read the partner list for account ${r}`);
          const s = await n.json();
          if (s.success != Z.R)
            throw new Error(
              `Failed to read the partner list for account ${r}: ${s.msg}`,
            );
          return s.partners ?? [];
        }
        function pn(r) {
          return (0, ne.I)({
            queryKey: ["MeetSteamPartnersForAccount", r],
            queryFn: () => fn(r),
            enabled: r > 0,
          });
        }
        function is(r, e) {
          const [n, s] = useState(r),
            a = zt(n, {
              nTimeoutMS: e,
              nTimeoutExtensionMS: e,
              nMaxTimeoutExtensions: 1 / 0,
            });
          return [n, a, s];
        }
        function zt(r, e = {}) {
          const {
              nTimeoutMS: n = 350,
              nTimeoutExtensionMS: s = 125,
              nMaxTimeoutExtensions: a = 3,
            } = e,
            [i, l] = p.useState(r),
            u = p.useRef(void 0);
          return (
            p.useEffect(() => {
              const h = performance.now();
              u.current
                ? h - u.current.tsLastChange < a * n &&
                  (u.current.tsScheduledTimeout = Math.max(
                    performance.now() + s,
                    u.current.tsScheduledTimeout,
                  ))
                : (u.current = {
                    tsLastChange: h,
                    tsScheduledTimeout: performance.now() + n,
                  });
              const g = u.current.tsScheduledTimeout - performance.now(),
                v = window.setTimeout(() => {
                  (u.current = void 0), l(r);
                }, g);
              return () => window.clearTimeout(v);
            }, [r, n, s, a]),
            i
          );
        }
        function vn(r) {
          const e = r.trim();
          if (!/^\d+$/.test(e)) return 0;
          if (Number(e) > 4294967295) {
            const n = new R.b(e);
            return n.BIsValid() && n.BIsIndividualAccount()
              ? n.GetAccountID()
              : 0;
          }
          return Number(e);
        }
        function xn(r) {
          const { hideModal: e, gid: n } = r,
            [s, a] = (0, p.useState)(!1),
            [i, l] = (0, p.useState)(null),
            [u, h] = p.useState(""),
            [g, v] = p.useState(""),
            [y, w] = p.useState(""),
            [z, S] = p.useState(!1),
            D = zt(u),
            _ = vn(D),
            ze = !!D.trim() && !_,
            Qe = ht(),
            qe = pn(_),
            Ne = qe.data,
            Ae = (0, ne.I)({
              queryKey: ["MeetSteamInviteDirectDialog", n, _],
              queryFn: async () => {
                const Re = {
                    steamid: R.b.InitFromAccountID(_).ConvertTo64BitString(),
                    gid: n,
                    type: st.Dk.rV,
                  },
                  _e = await st.Nl.GetUserActionData(Qe, Re);
                return _e.BSuccess() && _e.Body().jsondata()
                  ? JSON.parse(_e.Body().jsondata())
                  : {};
              },
              enabled: !!n && _ > 0,
            });
          p.useEffect(() => {
            if (!Ae.isLoading && Ae.isSuccess) {
              const Re = Ne?.length == 1 ? Ne[0].partnerid.toString() : "";
              v(Ae.data.partner_id ? Ae.data.partner_id.toString() : Re),
                w(Ae.data.email_override ?? ""),
                S(Ae.data.allow_registration_if_full ?? !1);
            }
          }, [Ae.isLoading, Ae.isSuccess, Ae.data, Ne]);
          const ss = async () => {
            a(!0);
            const Re = Number.parseInt(g) > 0 ? Number.parseInt(g) : 0,
              _e = await Ot(
                n,
                [
                  {
                    nAccountID: _,
                    nPartnerID: Re,
                    strEmailOverride: y,
                    bAllowRegistrationIfFull: z,
                  },
                ],
                !0,
              ),
              an = _e && _e.success == Z.R;
            an || l("We hit error during invite, check console: " + _e?.msg),
              a(!1),
              Ae.refetch(),
              an && e();
          };
          return (0, t.jsxs)(Ie.o0, {
            strTitle: "Invite User",
            bOKDisabled: !_ || s || Ae.isLoading,
            onOK: ss,
            onCancel: e,
            children: [
              !!i &&
                (0, t.jsx)("div", {
                  className: A.ErrorStylesWithIcon,
                  children: i,
                }),
              !s &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      children:
                        "Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.",
                    }),
                    (0, t.jsx)(V.pd, {
                      type: "text",
                      label: "Account ID or Steam ID",
                      description:
                        "Accepts either the 32-bit account id or the 64-bit steam id",
                      onChange: (Re) => h(Re.currentTarget.value),
                      value: u,
                    }),
                    ze &&
                      (0, t.jsx)("div", {
                        className: A.ErrorStylesWithIcon,
                        children: "That is not a valid account id or steam id.",
                      }),
                    _ != 0 && (0, t.jsx)(jn, { nAccountID: _ }),
                    _ != 0 &&
                      !Ae.isLoading &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(V.pd, {
                            type: "number",
                            label: "Partner ID (optional)",
                            onChange: (Re) => v(Re.currentTarget.value),
                            value: g,
                          }),
                          (0, t.jsx)(yn, {
                            rgPartners: Ne,
                            bLoading: qe.isLoading,
                            bFailed: qe.isError,
                            strPartnerID: g,
                            SetPartnerID: v,
                          }),
                          (0, t.jsx)(V.pd, {
                            type: "text",
                            label: "Email override (optional)",
                            onChange: (Re) => w(Re.currentTarget.value.trim()),
                            value: y,
                          }),
                          (0, t.jsx)(V.Yh, {
                            controlled: !0,
                            checked: z,
                            onChange: S,
                            label: "Allow if registration is full",
                          }),
                        ],
                      }),
                  ],
                }),
              s &&
                (0, t.jsx)(ie.t, {
                  size: "small",
                  position: "center",
                  string: (0, T.we)("#Saving"),
                }),
              Ae.isLoading &&
                (0, t.jsx)(ie.t, {
                  size: "small",
                  position: "center",
                  string: (0, T.we)("#Loading"),
                }),
            ],
          });
        }
        function jn(r) {
          const { nAccountID: e } = r,
            [n, s] = (0, ut.KT)(e);
          if (s)
            return (0, t.jsx)(ie.t, {
              size: "small",
              position: "center",
              string: (0, T.we)("#Loading"),
            });
          if (!n)
            return (0, t.jsx)("div", {
              className: A.ErrorStylesWithIcon,
              children: `We could not find an account for ${e}.`,
            });
          const a = R.b.InitFromAccountID(e).ConvertTo64BitString();
          return (0, t.jsxs)("div", {
            className: $e().AccountSummary,
            children: [
              (0, t.jsx)("img", {
                className: $e().AccountAvatar,
                src: n.avatar_url?.replace(/\.jpg$/, "_medium.jpg"),
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: $e().AccountPersonaName,
                    children: n.persona_name,
                  }),
                  (0, t.jsx)("a", {
                    href: `${ke.TS.SUPPORT_BASE_URL}account/overview/${a}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: `Account ${e} / SteamID ${a}`,
                  }),
                ],
              }),
            ],
          });
        }
        function yn(r) {
          const {
            rgPartners: e,
            bLoading: n,
            bFailed: s,
            strPartnerID: a,
            SetPartnerID: i,
          } = r;
          return n
            ? (0, t.jsx)(ie.t, {
                size: "small",
                position: "center",
                string: "Looking up partner membership",
              })
            : s
              ? (0, t.jsx)("div", {
                  className: $e().PartnerListHeader,
                  children:
                    "We could not look up partner membership, enter the partner id above.",
                })
              : !e || e.length == 0
                ? (0, t.jsx)("div", {
                    className: $e().PartnerListHeader,
                    children: "This account is not a member of any partner.",
                  })
                : (0, t.jsxs)("div", {
                    className: $e().PartnerList,
                    children: [
                      (0, t.jsx)("div", {
                        className: $e().PartnerListHeader,
                        children: "Member of, click to use:",
                      }),
                      e.map((l) =>
                        (0, t.jsxs)(
                          "a",
                          {
                            href: "#",
                            className: (0, et.A)(
                              $e().PartnerListRow,
                              l.partnerid.toString() == a
                                ? $e().PartnerListRowSelected
                                : "",
                            ),
                            onClick: (u) => {
                              u.preventDefault(), i(l.partnerid.toString());
                            },
                            children: [l.partner_name, " (", l.partnerid, ")"],
                          },
                          l.partnerid,
                        ),
                      ),
                    ],
                  });
        }
        function wn(r) {
          const { hideModal: e, gid: n } = r,
            [s, a] = (0, p.useState)(null),
            [i, l] = (0, p.useState)(!1),
            [u, h] = (0, p.useState)(null),
            [g, v] = (0, p.useState)(null),
            [y, w] = (0, p.useState)(null),
            z = async () => {
              l(!0);
              const D = await Ot(n, s, !1);
              D?.success == Z.R
                ? (v(D.rgInvitedAccounts.length), w(D.rgSkippedAccounts.length))
                : h("We hit error during invite, check console: " + D?.msg),
                l(!1);
            },
            S = () => {
              v(null), w(null), l(!1), a(null), e();
            };
          return (0, t.jsxs)(Ie.o0, {
            strTitle: "Invite Users",
            bOKDisabled: !s || s.length == 0 || g != null,
            strCancelButtonText: g !== null ? "Close" : "Cancel",
            onOK: z,
            onCancel: S,
            children: [
              !!u &&
                (0, t.jsx)("div", {
                  className: A.ErrorStylesWithIcon,
                  children: u,
                }),
              g != null &&
                (0, t.jsxs)("div", {
                  children: [
                    "Invited ",
                    (0, it.D)(g),
                    " accounts, skipped previously invited ",
                    (0, it.D)(y),
                  ],
                }),
              i &&
                (0, t.jsx)(ie.t, {
                  size: "small",
                  position: "center",
                  string: (0, T.we)("#Saving"),
                }),
              (0, t.jsx)("div", {
                children:
                  "Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.",
              }),
              s == null
                ? (0, t.jsx)(Bn, { setInvites: a })
                : (0, t.jsx)(bn, { rgInvites: s }),
            ],
          });
        }
        function bn(r) {
          const { rgInvites: e } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                children: ["Total Invites Parsed: ", e.length, " "],
              }),
              (0, t.jsxs)("table", {
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "AccountID" }),
                        (0, t.jsx)("th", { children: "PartnerID" }),
                        (0, t.jsx)("th", { children: "Email Override" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: e.map((n, s) =>
                      (0, t.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, t.jsx)("td", { children: n.nAccountID }),
                            (0, t.jsx)("td", { children: n.nPartnerID }),
                            (0, t.jsx)("td", { children: n.strEmailOverride }),
                          ],
                        },
                        "invite" + n.nAccountID + "_" + s,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Bn(r) {
          const { setInvites: e } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                children: "Format for CSV File, please use the template below:",
              }),
              (0, t.jsxs)("ul", {
                children: [
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "nAccountID" }),
                      " - required, 32-bit integer value, not the 64-bit steam id",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "nPartnerID" }),
                      " - (preferred for biz contact)",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "strOverrideEmail" }),
                      " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("a", {
                href: "#",
                onClick: async (n) => {
                  n.preventDefault(), n.stopPropagation();
                  const s = [];
                  s.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                    s.push(["388445686", "1", "adils@valvesoftware.com"]),
                    Xe.g.WriteCSVToFile(s, "invite_template.csv");
                },
                children: "Download Template Example",
              }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("br", {}),
              (0, t.jsx)(V.$n, {
                children: (0, t.jsxs)("label", {
                  className: $e().ImportButtonLabel,
                  htmlFor: "import-discount-input",
                  children: [
                    "Choose CSV File",
                    (0, t.jsx)("input", {
                      id: "import-discount-input",
                      type: "file",
                      style: { display: "none" },
                      onChange: async (n) => {
                        if (n.target.files.length >= 1) {
                          const s = n.target.files[0],
                            a = await Xe.g.ParseCSVFile(s);
                          if (a?.data) {
                            const i = new Array();
                            a.data.forEach((l) => {
                              if (l.nAccountID) {
                                const u = {
                                  nAccountID: Number.parseInt(l.nAccountID),
                                };
                                l.nPartnerID &&
                                  (u.nPartnerID = Number.parseInt(
                                    l.nPartnerID,
                                  )),
                                  l.strEmailOverride &&
                                    (u.strEmailOverride = l.strEmailOverride),
                                  i.push(u);
                              }
                            }),
                              e(i);
                          }
                        }
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        async function Ot(r, e, n) {
          const s = e.map((g) => g.nAccountID).join(","),
            a = e.map((g) => g.nPartnerID).join(","),
            i = e.map((g) => g.strEmailOverride).join(","),
            l = e
              .map((g) => (g.bAllowRegistrationIfFull ? "1" : "0"))
              .join(",");
          let u = new FormData();
          u.append("sessionid", (0, U.KC)()),
            u.append("gid", r),
            u.append("accounts", s),
            u.append("partnerids", a),
            u.append("emailoverride", i),
            u.append("allowregistrationiffull", l),
            u.append("forceupdate", n ? "1" : "0");
          const h = `${ke.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
          try {
            const g = await Y().post(h, u, { withCredentials: !0 });
            if (g?.data?.success != Z.R) {
              let v = (0, rt.H)(g);
              console.error(
                "DisplayPartnerEventRow error: " + v.strErrorMsg,
                v,
              );
            }
            return g?.data;
          } catch (g) {
            let v = (0, rt.H)(g);
            console.error("DisplayPartnerEventRow error: " + v.strErrorMsg, v);
          }
          return null;
        }
        var gt = f(16666),
          mt = f(32),
          Nt = f(54806),
          Sn = f(58632),
          ft = f.n(Sn);
        function Ut(r) {
          const e = ht(),
            n = p.useContext(pt),
            s = (0, ne.I)(kt(n, e, r));
          return s.isLoading ? null : s.data;
        }
        function Wt(r) {
          const e = ht(),
            n = p.useContext(pt);
          return (0, Nt.E)({ queries: r.map((s) => kt(n, e, s)) });
        }
        function as(r) {
          return ReactQueryClient.getQueryData([
            "MeetSteamAllRegistrationStatus",
            r,
          ]);
        }
        function os(r) {
          const { loadMeetSteamAllRegistration: e, children: n } = r,
            s = React.useMemo(() => ({ loadMeetSteamAllRegistration: e }), [e]);
          return React.createElement(pt.Provider, { value: s }, n);
        }
        const pt = p.createContext({
          loadMeetSteamAllRegistration: async (r, e) => await Dn(r).load(e),
        });
        function kt(r, e, n) {
          return {
            queryKey: ["MeetSteamAllRegistrationStatus", n],
            queryFn: () => r.loadMeetSteamAllRegistration(e, n),
            enabled: !!n,
          };
        }
        let vt;
        function Dn(r) {
          return (
            vt ||
              (vt = new (ft())(
                async (e) => {
                  const n = ae.w.Init(st.j3);
                  n.Body().set_gids([...e]), n.Body().set_type(st.Dk.rV);
                  const s = await st.Nl.GetMultipleUserActionData(r, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${s.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    s
                      .Body()
                      .entries()
                      .forEach((i) => {
                        try {
                          const l = JSON.parse(i.jsondata());
                          if (!("steamid" in l) || !l.steamid) {
                            l.steamid = i.steamid();
                            const h = new R.b(l.steamid);
                            l.accountid = h.GetAccountID();
                          }
                          const u = i.gid();
                          return (
                            a.has(u) ? a.get(u).push(l) : a.set(u, [l]), [l]
                          );
                        } catch {
                          throw `Failed to parse GetMultipleUserActionData with details: ${i.steamid()}`;
                        }
                      }),
                    e.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              )),
            vt
          );
        }
        var Rt = f(40497);
        function $t(r, e) {
          const n = (0, De.a)(),
            s = p.useContext(jt),
            a = (0, ne.I)(Ct(s, n, r, e));
          return a.isLoading ? null : a.data;
        }
        function In(r, e) {
          const n = (0, De.a)(),
            s = p.useContext(jt);
          return (0, Nt.E)({ queries: r.map((a, i) => Ct(s, n, a, e[i])) });
        }
        function xt(r, e) {
          return Rt.L.getQueryData(["PartnerEmailAndName", r, e]);
        }
        function cs(r) {
          const { loadPartnerEmailAndName: e, children: n } = r,
            s = React.useMemo(() => ({ loadPartnerEmailAndName: e }), [e]);
          return React.createElement(jt.Provider, { value: s }, n);
        }
        const jt = p.createContext({
          loadPartnerEmailAndName: async (r, e, n) =>
            await Tn(r).load({ accountID: e, partnerID: n }),
        });
        function Ct(r, e, n, s) {
          return {
            queryKey: ["PartnerEmailAndName", n, s],
            queryFn: () => r.loadPartnerEmailAndName(e, n, s),
            enabled: !!n || !!s,
          };
        }
        let yt;
        function Tn(r) {
          return (
            yt ||
              (yt = new (ft())(
                async (e) => {
                  const n = ae.w.Init(Q);
                  n.Body().set_accountids(e.map((i) => i.accountID)),
                    n.Body().set_partnerids(e.map((i) => i.partnerID));
                  const s = await M.GetBatchPartnerEmailAndName(r, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${s.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    s
                      .Body()
                      .info()
                      .forEach((i) => {
                        a.set(
                          "" + i.accountid() + "_" + i.partnerid(),
                          i.toObject(),
                        );
                      }),
                    e.map(
                      (i) =>
                        a.get("" + i.accountID + "_" + i.partnerID) ?? null,
                    )
                  );
                },
                { maxBatchSize: 100 },
              )),
            yt
          );
        }
        function An(r) {
          const { rgEventGIDs: e } = r,
            [n, s, a] = (0, ce.uD)(),
            [i, l] = (0, p.useState)(null);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: " | " }),
              (0, t.jsx)("a", {
                href: "#",
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                children: "Analyse Top Partner Coverage",
              }),
              (0, t.jsx)(xe.E, {
                active: n,
                children: (0, t.jsx)(ge.tH, {
                  children: (0, t.jsx)(Ie.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, t.jsx)(Ht, {
                            rgEventGIDs: e,
                            fnSelectedEvents: l,
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Mn, { rgGidMeetSteamEvents: i }),
                              (0, t.jsx)(V.$n, {
                                onClick: () => l(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        const lt = (0, gt.FB)();
        function Kt(r) {
          return (
            (r = r?.filter(
              (e, n) =>
                n == 0 ||
                !r.slice(0, n).some((s) => s.accountid == e.accountid),
            )),
            r
              ?.map(
                (e) =>
                  e.name ||
                  xt(e.accountid, e.partner_id)?.realname ||
                  e.accountid,
              )
              .join(",") || ""
          );
        }
        function Vt(r) {
          return Kt(r.cell.getValue());
        }
        function En(r, e) {
          const n = Wt(e),
            [s, a, i] = (0, p.useMemo)(() => {
              if (n.filter((y) => !y.isLoading).length != n.length)
                return [null, [], []];
              const u = new Map(),
                h = new Set(r),
                g = new Map();
              n.forEach((y) =>
                y.data.forEach((w) => {
                  if (
                    h.has(w.partner_id) &&
                    (g.has(w.partner_id)
                      ? g.get(w.partner_id).push(w)
                      : g.set(w.partner_id, [w]),
                    !w.name)
                  ) {
                    const z = w.accountid;
                    u.set(`${z}_${w.partner_id}`, {
                      accountID: z,
                      partnerID: w.partner_id,
                    });
                  }
                }),
              );
              const v = Array.from(u.values());
              return [g, v.map((y) => y.accountID), v.map((y) => y.partnerID)];
            }, [n, r]),
            l = In(a, i);
          return l.filter((u) => !u.isLoading).length == l.length ? s : null;
        }
        function Mn(r) {
          const { rgGidMeetSteamEvents: e } = r,
            n = Fn(),
            s = (0, W.vh)(n),
            a = En(n, e),
            i = (0, p.useMemo)(() => {
              if (!s || !a) return null;
              const h = [];
              return (
                n.forEach((g) => {
                  const v = a.get(g);
                  h.push({
                    partner_id: g,
                    partner_name: (0, W.Yd)(g)?.name || "Unknown",
                    invitations:
                      v?.filter(
                        (y) =>
                          y.invited &&
                          !Object.keys(y).some((w) =>
                            w.startsWith("registration_emailed"),
                          ),
                      ) || [],
                    registrations:
                      v?.filter((y) =>
                        Object.keys(y).some((w) =>
                          w.startsWith("registration_emailed"),
                        ),
                      ) || [],
                  });
                }),
                h
              );
            }, [s, a, n]),
            l = (0, p.useMemo)(
              () => [
                lt.accessor("partner_id", { header: "Partner ID", size: 100 }),
                lt.accessor("partner_name", {
                  header: "Partner Name",
                  size: 300,
                }),
                lt.accessor("invitations", {
                  header: "Invitations",
                  cell: Vt,
                  size: 300,
                }),
                lt.accessor("registrations", {
                  header: "Registered to Attend",
                  cell: Vt,
                  size: 300,
                }),
              ],
              [],
            );
          function u() {
            const h = [],
              g = [];
            for (const y of l) g.push(y.header);
            h.push(g);
            for (const y of i) {
              const w = [];
              for (const z of l) {
                const S = y[z.accessorKey];
                w.push(
                  z.accessorKey == "invitations" ||
                    z.accessorKey == "registrations"
                    ? Kt(S)
                    : S.toString(),
                );
              }
              h.push(w);
            }
            Xe.g.WriteCSVToFile(h, "partneranalysis.csv");
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(V.JU, { children: "Partner Analysis" }),
              i
                ? (0, t.jsxs)(ge.tH, {
                    children: [
                      (0, t.jsx)(V.$n, {
                        id: "download-csv",
                        onClick: u,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                      (0, t.jsx)(mt.k, {
                        columns: l,
                        data: i,
                        getRowKey: (h) => h,
                        stickyHeader: !0,
                        nItemHeight: 28,
                        overscan: n.length,
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)(V.$n, {
                        id: "download-csv",
                        onClick: u,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                    ],
                  })
                : (0, t.jsx)(ie.t, {
                    string: (0, T.we)("#Loading"),
                    position: "center",
                  }),
            ],
          });
        }
        function Ht(r) {
          const { rgEventGIDs: e, fnSelectedEvents: n } = r,
            [s, a] = (0, p.useState)([]),
            { bShowArchived: i, setShowArchived: l } = Lt(),
            { bIsLoading: u, events: h } = (0, ue.PB)(e),
            g = (0, p.useMemo)(() => {
              const v = Math.floor(new Date().getTime() / 1e3);
              return i && h ? [...h] : h?.filter((w) => w.endTime >= v);
            }, [h, i]);
          return u
            ? (0, t.jsx)(ie.t, { string: "Loading..." })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(V.Yh, {
                    checked: i,
                    onChange: l,
                    label: "Show Past Events",
                  }),
                  (0, t.jsx)(V.JU, { children: "Choose Events" }),
                  g.map((v) =>
                    (0, t.jsx)(
                      Ln,
                      { gidClanEvent: v.GID, rgSelected: s, fnSetSelected: a },
                      v.GID,
                    ),
                  ),
                  (0, t.jsx)(V.$n, {
                    disabled: s.length == 0,
                    onClick: () => n(s),
                    children: "Continue",
                  }),
                ],
              });
        }
        function Ln(r) {
          const { gidClanEvent: e, rgSelected: n, fnSetSelected: s } = r,
            i = (0, ue.RR)(e).GetNameWithFallback($.Bhc);
          return (0, t.jsx)(V.Yh, {
            label: i,
            checked: n.includes(e),
            onChange: (l) => {
              const u = n.indexOf(e),
                h = u >= 0;
              l && !h
                ? s([...n, e])
                : !l && h && s([...n.slice(0, u), ...n.slice(u + 1)]);
            },
          });
        }
        function Fn() {
          const [r] = (0, p.useState)(() =>
            (0, N.Tc)("partners_to_verify", "application_config"),
          );
          return r;
        }
        var wt = f(16114),
          He = f(20117),
          zn = f(30603),
          Yt = f.n(zn);
        function On(r) {
          const { hideModal: e, gid: n } = r,
            s = Ut(n),
            a = (0, he.jE)(),
            [i, l] = (0, p.useMemo)(
              () =>
                s
                  ? [
                      s.length,
                      s.filter(
                        (u) =>
                          !u.invitation_emailed &&
                          !u.invite_registration_auto_create,
                      ).length,
                    ]
                  : [0, 0],
              [s],
            );
          return (0, t.jsxs)(Ie.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: e,
            strDescription:
              "Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.",
            strTitle: "Invitation And Registration Status",
            children: [
              !s &&
                (0, t.jsx)(ie.t, {
                  size: "medium",
                  position: "center",
                  string: (0, T.we)("#Loading"),
                }),
              s &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        "There are ",
                        i,
                        " invitation/registration records.",
                      ],
                    }),
                    l > 0 &&
                      (0, t.jsxs)(V.$n, {
                        onClick: async () => {
                          await $n(a, n);
                        },
                        children: [
                          l,
                          " invitation emails are queued for this event. Send them all now?",
                        ],
                      }),
                    (0, t.jsxs)("table", {
                      children: [
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", { children: "SteamID" }),
                              (0, t.jsx)("th", { children: "Name" }),
                              (0, t.jsx)("th", { children: "invited" }),
                              (0, t.jsx)("th", { children: "Invite Emailed" }),
                              (0, t.jsx)("th", { children: "Partner" }),
                              (0, t.jsx)("th", { children: "Email Override" }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("tbody", {
                          children: s?.map((u) =>
                            (0, t.jsx)(Nn, { reg: u }, "regentry_" + u.steamid),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function Nn(r) {
          const { reg: e } = r,
            [n] = (0, W.UA)(e.partner_id);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: e.steamid }),
              (0, t.jsx)("td", { children: e.name }),
              (0, t.jsx)("td", { children: e.invited ? "YES" : "" }),
              (0, t.jsx)("td", { children: e.invitation_emailed ? "YES" : "" }),
              (0, t.jsxs)("td", {
                children: [n?.name, " (", e.partner_id, ")"],
              }),
              (0, t.jsx)("td", { children: e.email_override }),
            ],
          });
        }
        function Un(r) {
          const { hideModal: e, gid: n, title: s, group: a, session: i } = r,
            l = (0, De.a)(),
            u = Ut(n),
            h = Ke(l, n, a?.group_id),
            [g, v] = (0, p.useMemo)(() => {
              const w = h?.data?.filter((D) => D.session_id == i.id),
                z = new Map(),
                S = new Map();
              return (
                w?.forEach((D) => {
                  const _ = new He.b2(D.steamid).GetAccountID();
                  if ((z.set(_, D), D.jsondata)) {
                    const ze = JSON.parse(D.jsondata);
                    ze.pre_event_partner_questions &&
                      S.set(_, ze.pre_event_partner_questions);
                  }
                }),
                [z, S]
              );
            }, [i, h]),
            y = u?.filter((w) => g.has(new He.b2(w.steamid).GetAccountID()));
          return (0, t.jsxs)(Ie.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: e,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
            children: [
              (0, t.jsx)("div", {
                className: Yt().ExportToCSV,
                children: (0, t.jsx)("a", {
                  onClick: () => Wn(a, i, s, y, g, v),
                  children: "Export to CSV",
                }),
              }),
              (0, t.jsxs)("table", {
                className: Yt().Table,
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "SteamID" }),
                        (0, t.jsx)("th", { children: "Name" }),
                        (0, t.jsx)("th", { children: "Invited" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Game" }),
                        (0, t.jsx)("th", { children: "Email Override" }),
                        (0, t.jsxs)("th", {
                          children: [
                            "Guest Count ",
                            (0, t.jsx)(Pe.o, {
                              tooltip:
                                "Additional guests, doesn't include main registrant",
                            }),
                          ],
                        }),
                        (0, t.jsx)("th", {
                          children: "Reg Confirm Email Sent",
                        }),
                        a.ask_registration_question &&
                          (0, t.jsx)("th", { children: "Answer" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: y?.flatMap((w) => {
                      const z = new He.b2(w.steamid).GetAccountID(),
                        S = [
                          (0, t.jsx)(
                            kn,
                            {
                              group: a,
                              regInfo: g.get(z),
                              inviteInfo: w,
                              preRegQuestions: v.get(z),
                            },
                            "regrow" + w.steamid,
                          ),
                        ];
                      for (let D = 0; D < w.guest_names?.length; D++)
                        S.push(
                          (0, t.jsx)(
                            Rn,
                            { guestName: w.guest_names[D] },
                            "regguestrow" + w.steamid + "_" + D,
                          ),
                        );
                      return S;
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Wn(r, e, n, s, a, i) {
          const l = [],
            u = [
              "SteamID",
              "Name",
              "Invited",
              "Partner",
              "Game",
              "Email Override",
              "Guest Count",
              "Reg Confirmation Email Sent",
            ];
          r.ask_registration_question && u.push("Pre Reg Answer"),
            l.push(u),
            s.forEach((g) => {
              const v = [],
                y = g.partner_id ? (0, W.Yd)(g.partner_id) : void 0;
              v.push("" + g.steamid),
                v.push(g.name),
                v.push(g.invited ? "YES" : ""),
                v.push(y ? `${y?.name} (${g.partner_id})` : ""),
                v.push(g.game ? `Game: ${g.game}` : ""),
                v.push(g.email_override),
                v.push(
                  "" + (g.guests_registered ? g.guests_registered - 1 : 0),
                );
              const w = new He.b2(g.steamid);
              if (a.has(w.GetAccountID())) {
                const z = a.get(w.GetAccountID()),
                  S = Qt(z, g);
                if (S) {
                  const D = new Date(S * 1e3)
                    .toISOString()
                    .replace("T", " ")
                    .split(".")[0];
                  v.push(D);
                } else v.push("");
              } else v.push("");
              if (r.ask_registration_question) {
                const z = i
                  .get(w.GetAccountID())
                  ?.find((S) => S.group_id == r.group_id);
                z && v.push(z.question);
              }
              l.push(v);
              for (let z = 0; z < g.guest_names?.length; z++) {
                const S = [];
                S.push("(guest)"), S.push(g.guest_names[z]), l.push(S);
              }
            });
          const h =
            `meetsteam_${n}_${(0, T.TW)(e.rtime_start)}_at_${(0, wt.KC)(e.rtime_start)}.csv`.replace(
              /[ <>:"/\\|?*\x00-\x1F]/g,
              "_",
            );
          Xe.g.WriteCSVToFile(l, h);
        }
        function Qt(r, e) {
          const n = `registration_emailed_${r.group_id}_${r.session_id}`;
          let s = null;
          return n in e && (s = e[n]), s;
        }
        function kn(r) {
          const { inviteInfo: e, regInfo: n, group: s, preRegQuestions: a } = r,
            [i] = (0, W.UA)(e.partner_id),
            l = Qt(n, e);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: e.steamid }),
              (0, t.jsx)("td", { children: e.name }),
              (0, t.jsx)("td", { children: e.invited ? "YES" : "" }),
              (0, t.jsx)("td", { children: i?.name ?? `(${e.partner_id})` }),
              (0, t.jsx)("td", { children: e.game ? `Game: ${e.game}` : "" }),
              (0, t.jsx)("td", { children: e.email_override }),
              (0, t.jsx)("td", {
                children: n.guests_registered ? n.guests_registered - 1 : 0,
              }),
              (0, t.jsx)("td", { children: l ? (0, T.TW)(l) : "" }),
              s.ask_registration_question &&
                (0, t.jsx)("td", {
                  children:
                    a?.find((u) => u.group_id == s.group_id)?.question || "",
                }),
            ],
          });
        }
        function Rn(r) {
          const { guestName: e } = r;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: "(guest)" }),
              (0, t.jsx)("td", { children: e }),
            ],
          });
        }
        async function $n(r, e) {
          let n = new FormData();
          n.append("sessionid", (0, U.KC)()), n.append("gid", e);
          const s = `${ke.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
          try {
            const a = await Y().post(s, n, { withCredentials: !0 });
            if (a?.data?.success != Z.R) {
              let i = (0, rt.H)(a);
              console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
            }
            return (
              r.invalidateQueries({
                queryKey: ["useMeetSteamAllRegistrationStatus", e],
              }),
              a?.data
            );
          } catch (a) {
            let i = (0, rt.H)(a);
            console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
          }
          return null;
        }
        var Jt = f(40299),
          tt = f(55298);
        async function Cn(r) {
          const e = { sessionid: (0, N.KC)(), gids: r },
            n = `${Ft.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
            s = await fetch(n, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            });
          if (!s.ok)
            throw new Error(
              `Failed to read registrations for gids ${r.join(",")}`,
            );
          const a = await s.json();
          if (a.success != Z.R)
            throw new Error(
              `Failed to read registrations for gids ${r.join(",")}: ${a.msg}`,
            );
          return a.lists ?? [];
        }
        function Kn(r) {
          return (0, ne.I)({
            queryKey: [],
            queryFn: async () => await Cn(r),
            enabled: r && r.length > 0,
          });
        }
        function ls(r) {
          return ["MeetSteamGetRegistration", ...(r || []).sort()];
        }
        function Vn(r) {
          const { rgEventGIDs: e } = r,
            [n, s, a] = (0, ce.uD)(),
            [i, l] = (0, p.useState)(null);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: " | " }),
              (0, t.jsx)("a", {
                href: "#",
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                children: "Show Registration Across Events",
              }),
              (0, t.jsx)(xe.E, {
                active: n,
                children: (0, t.jsx)(ge.tH, {
                  children: (0, t.jsx)(Ie.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, t.jsx)(Ht, {
                            rgEventGIDs: e,
                            fnSelectedEvents: l,
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Yn, { rgGidMeetSteamEvents: i }),
                              (0, t.jsx)(V.$n, {
                                onClick: () => l(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        function Hn(r) {
          const e = Wt(r),
            n = (0, tt.qh)(),
            { bIsLoading: s, events: a } = (0, ue.PB)(r),
            { data: i } = Kn(r),
            [l, u, h] = (0, p.useMemo)(() => {
              if (
                s ||
                !i ||
                i.length == 0 ||
                e.filter((S) => !S.isLoading).length != e.length
              )
                return [null, null, null];
              const v = new Array(),
                y = new Set(),
                w = new Map();
              e.forEach((S) => {
                S.data.forEach((D) => {
                  D.guests_registered > 0 &&
                    (v.push(D), D.partner_id && y.add(D.partner_id));
                });
              });
              const z = new Map();
              return (
                a.forEach((S) => {
                  S.jsondata.meet_steam_groups?.forEach((D) => {
                    D.sessions?.forEach((_) => {
                      z.set(
                        `${S.GID}_${D.group_id}_${_.id}`,
                        `${D.localized_session_title[$.Bhc]}@${(0, wt.TW)(_.rtime_start)} ${(0, wt.KC)(_.rtime_start)}`,
                      );
                    });
                  });
                }),
                i.forEach((S) => {
                  S.rgRegistrations.forEach((D) => {
                    const ze = new R.b(D.steamid).GetAccountID(),
                      Qe =
                        z.get(`${S.gid}_${D.group_id}_${D.session_id}`) ||
                        `${D.group_id}:${D.session_id}`;
                    w.has(ze) ? w.set(ze, w.get(ze) + `,${Qe}`) : w.set(ze, Qe);
                  });
                }),
                [Array.from(y), v, w]
              );
            }, [e, s, i, a]);
          return (0, re.fI)(l)
            ? {
                rgAllRegistrations: u,
                rgPartnerIDs: l,
                rgValveAccounts: n,
                rgMapAccountToSessionTimes: h,
              }
            : {
                rgAllRegistrations: void 0,
                rgPartnerIDs: void 0,
                rgValveAccounts: void 0,
                rgMapAccountToSessionTimes: void 0,
              };
        }
        const Ce = (0, gt.FB)();
        function Yn(r) {
          const { rgGidMeetSteamEvents: e } = r,
            {
              rgAllRegistrations: n,
              rgPartnerIDs: s,
              rgValveAccounts: a,
              rgMapAccountToSessionTimes: i,
            } = Hn(e),
            l = (0, W.vh)(s),
            u = (0, p.useMemo)(() => {
              if (!l || !n || !a || !i) return null;
              const g = new Map();
              a.forEach((y) => g.set(y.id, y));
              const v = [];
              return (
                n.forEach((y) => {
                  const w = (0, W.Yd)(y.partner_id),
                    z = (0, re.Gl)(y.partner_id);
                  v.push({
                    partner_id: y.partner_id ? "" + y.partner_id : "",
                    partner_name: w?.name || "Unknown",
                    name: y.name,
                    game: y.game || "",
                    accountid: y.accountid,
                    email: y.email_override,
                    guest_registrated: y.guests_registered - 1,
                    guest_names:
                      y.guest_names?.length > 0 ? y.guest_names.join(",") : "",
                    business_contact:
                      z && z.length > 0
                        ? z
                            .filter((S) => S.is_business_contact)
                            .map((S) => {
                              const D = new R.b(S.steamid);
                              return (
                                g.get(D.GetAccountID())?.displayName ||
                                S.steamid
                              );
                            })
                            .join(",")
                        : "",
                    sessions: i.get(y.accountid) || "missing data",
                  });
                }),
                v
              );
            }, [l, n, a, i]),
            h = Zt();
          return !l || !s || !u
            ? (0, t.jsx)(ie.t, { string: (0, T.we)("#Loading") })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(V.JU, { children: "Registations" }),
                  u
                    ? (0, t.jsxs)(ge.tH, {
                        children: [
                          (0, t.jsx)(Pt, { rgData: u }),
                          (0, t.jsx)(mt.k, {
                            columns: h,
                            data: u,
                            getRowKey: (g) => g,
                            stickyHeader: !0,
                            nItemHeight: 28,
                            overscan: s.length,
                          }),
                          (0, t.jsx)("br", {}),
                          (0, t.jsx)(Pt, { rgData: u }),
                        ],
                      })
                    : (0, t.jsx)(ie.t, {
                        string: (0, T.we)("#Loading"),
                        position: "center",
                      }),
                ],
              });
        }
        function Zt() {
          return (0, p.useMemo)(
            () => [
              Ce.accessor("name", { header: "Name", size: 200 }),
              Ce.accessor("accountid", { header: "Account ID", size: 150 }),
              Ce.accessor("email", { header: "Email", size: 150 }),
              Ce.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              Ce.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              Ce.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ce.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Ce.accessor("game", { header: "Game Name", size: 150 }),
              Ce.accessor("business_contact", {
                header: "Business Contact",
                size: 150,
              }),
              Ce.accessor("sessions", { header: "Sessions", size: 150 }),
            ],
            [],
          );
        }
        function Pt(r) {
          const { rgData: e } = r,
            n = Zt();
          return (0, t.jsx)(V.$n, {
            id: "download-csv",
            onClick: () =>
              (0, Jt.K)(
                "registrationdump.csv",
                e,
                n.map((s) => ({
                  accessorKey: s.accessorKey,
                  header:
                    typeof s.header == "string"
                      ? s.header
                      : (s.accessorKey ?? ""),
                })),
              ),
            style: { width: "120px" },
            children: "Download CSV",
          });
        }
        const Xt = p.createContext(void 0);
        function Qn(r) {
          const { children: e } = r,
            [n, s] = Et("search", ""),
            [a, i] = (0, p.useState)(() => n || ""),
            l = (0, p.useCallback)(
              (h) => {
                i(h), s(h || void 0, !0);
              },
              [s],
            ),
            u = (0, p.useMemo)(() => ({ strSearch: a, setSearch: l }), [a, l]);
          return (0, t.jsx)(Xt.Provider, { value: u, children: e });
        }
        const Gt = () => {
          const r = (0, p.useContext)(Xt);
          if (!r)
            throw new Error(
              "useMeetSteamSearch must be used within MeetSteamSearchProvider",
            );
          return r;
        };
        function Jn(r, e) {
          const n = e?.trim().toLowerCase();
          return n ? !!r && r.toLowerCase().includes(n) : !0;
        }
        function Zn(r, e) {
          const n = e?.trim().toLowerCase();
          if (!r || !n) return [{ strText: r || "", bMatch: !1 }];
          const s = new Array(),
            a = r.toLowerCase();
          let i = 0;
          for (let l = a.indexOf(n); l >= 0; l = a.indexOf(n, i))
            l > i && s.push({ strText: r.slice(i, l), bMatch: !1 }),
              s.push({ strText: r.slice(l, l + n.length), bMatch: !0 }),
              (i = l + n.length);
          return i < r.length && s.push({ strText: r.slice(i), bMatch: !1 }), s;
        }
        function bt(r) {
          const { text: e } = r,
            { strSearch: n } = Gt(),
            s = (0, p.useMemo)(() => Zn(e, n), [e, n]);
          return (0, t.jsx)(t.Fragment, {
            children: s.map((a, i) =>
              a.bMatch
                ? (0, t.jsx)(
                    "span",
                    { className: Te().SearchMatch, children: a.strText },
                    i,
                  )
                : (0, t.jsx)(p.Fragment, { children: a.strText }, i),
            ),
          });
        }
        function Pn(r) {
          const e = R.b.InitFromClanID((0, Ze.H)()),
            n = ar(),
            { bShowArchived: s, setShowArchived: a } = Lt(),
            { strSearch: i, setSearch: l } = Gt(),
            { bIsLoading: u, events: h } = (0, ue.PB)(n),
            {
              rgEventsByMonth: g,
              cEvents: v,
              cMatchingEvents: y,
            } = p.useMemo(() => {
              if (!h)
                return {
                  rgEventsByMonth: null,
                  cEvents: 0,
                  cMatchingEvents: 0,
                };
              const w =
                  s && h
                    ? [...h]
                    : h?.filter((D) => D.endTime >= new Date().getTime() / 1e3),
                z = w.filter((D) => Xn(D, i)),
                S = Array.from(
                  (0, Tt.bv)(z, (D) => (0, Tt.J2)(new Date(D.startTime * 1e3))),
                );
              return (
                S?.sort((D) => -D[0]),
                {
                  rgEventsByMonth: S,
                  cEvents: w.length,
                  cMatchingEvents: z.length,
                }
              );
            }, [h, s, i]);
          return u
            ? (0, t.jsx)(ie.t, {})
            : g
              ? (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("a", {
                          href: `${ke.TS.COMMUNITY_BASE_URL}gid/${e.ConvertTo64BitString()}/partnerevents/`,
                          children: "Open Meet Steam Event Dashboard",
                        }),
                        (0, t.jsx)(An, { rgEventGIDs: n }),
                        (0, t.jsx)(Vn, { rgEventGIDs: n }),
                      ],
                    }),
                    (0, t.jsx)(V.Yh, {
                      checked: s,
                      onChange: a,
                      label: "Show Past Events",
                    }),
                    (0, t.jsxs)("div", {
                      className: Te().SearchLine,
                      children: [
                        (0, t.jsx)(V.pd, {
                          type: "text",
                          placeholder: "Search events",
                          tooltip:
                            "In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience",
                          value: i,
                          onChange: (w) => l(w?.currentTarget?.value || ""),
                        }),
                        !!i.trim() &&
                          (0, t.jsxs)("div", {
                            className: Te().SearchSummary,
                            children: [
                              "Showing ",
                              y,
                              " of ",
                              v,
                              " events \xA0",
                              (0, t.jsx)("a", {
                                href: "#",
                                onClick: (w) => {
                                  w.preventDefault(), l("");
                                },
                                children: "Clear",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, t.jsx)("hr", {}),
                    g.map((w) =>
                      (0, t.jsx)(
                        Gn,
                        { month: new Date(w[0] * 1e3), events: w[1] },
                        w[0],
                      ),
                    ),
                  ],
                })
              : null;
        }
        function Xn(r, e) {
          if (!e?.trim()) return !0;
          const n = [
            r.GID,
            r.GetNameWithFallback($.Bhc),
            r.GetDescriptionWithFallback($.Bhc),
          ];
          return (
            r.jsondata.meet_steam_groups?.forEach((s) => {
              n.push(T.NT.GetWithFallback(s.localized_session_title, $.Bhc)),
                n.push(
                  T.NT.GetWithFallback(s.localized_session_description, $.Bhc),
                ),
                n.push(
                  T.NT.GetWithFallback(s.localized_intended_audience, $.Bhc),
                ),
                n.push(T.NT.GetWithFallback(s.localized_sesssion_faq, $.Bhc));
            }),
            n.some((s) => Jn(s, e))
          );
        }
        function Gn(r) {
          const { month: e, events: n } = r,
            s = p.useMemo(() => [...n].sort((l) => -l.startTime), [n]),
            a = { year: "numeric", month: "long" },
            i = new Intl.DateTimeFormat(navigator.language, a).format(e);
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("div", { className: Te().MonthTitle, children: i }),
              (0, t.jsx)("div", {
                className: Te().MonthEvents,
                children: s.map((l) => (0, t.jsx)(qn, { oEvent: l }, l.GID)),
              }),
            ],
          });
        }
        function qn(r) {
          const { oEvent: e } = r,
            n = e.GID,
            s = R.b.InitFromClanID((0, Ze.H)()),
            a = (0, we.my)((0, Ze.H)(), n),
            i = a.isSuccess ? a.data : null,
            l = e.GetNameWithFallback($.Bhc),
            u = (0, p.useMemo)(() => {
              const h = new Array();
              return (
                e.jsondata.meet_steam_groups?.forEach((g) => {
                  g.sessions.forEach((v, y) => {
                    h.push({ group: g, session: v, firstSession: y == 0 });
                  });
                }),
                h
              );
            }, [e.jsondata.meet_steam_groups]);
          return (0, t.jsxs)("div", {
            className: Te().EventRow,
            children: [
              (0, t.jsxs)("div", {
                className: Te().EventMainDetails,
                children: [
                  (0, t.jsxs)("div", {
                    className: Te().TitleLine,
                    children: [
                      (0, t.jsx)("div", {
                        className: Te().Title,
                        children: (0, t.jsx)(bt, { text: l }),
                      }),
                      (0, t.jsx)("div", {
                        className: Te().StartDate,
                        children: (0, T.TW)(e?.startTime),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: Te().ActionLine,
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("a", {
                          href: `${ke.TS.COMMUNITY_BASE_URL}gid/${s.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                          children: "Edit",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          "\xA0|\xA0",
                          (0, t.jsx)("a", {
                            href: `${ke.TS.STORE_BASE_URL}meetsteam/${n}`,
                            children: "View",
                          }),
                        ],
                      }),
                      !!(
                        e.BIsUnlistedEvent() &&
                        e.jsondata.meet_steam_groups?.length > 0
                      ) &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(rr, { gid: n }),
                            "\xA0|\xA0",
                            (0, t.jsx)("a", {
                              href: `${ke.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${ke.iA.accountid}`,
                              children: "QR Page",
                            }),
                            "\xA0|\xA0",
                            (0, t.jsx)("a", {
                              href: `${ke.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                              children: "Attendance List",
                            }),
                            (0, t.jsx)(_n, { gid: n }),
                            (0, t.jsx)(tr, { gid: n }),
                            (0, t.jsx)(er, { gid: n }),
                            (0, t.jsx)(nr, { gid: n }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                children: (0, t.jsxs)("table", {
                  className: "landingTable",
                  children: [
                    (0, t.jsx)("thead", {
                      children: (0, t.jsxs)("tr", {
                        children: [
                          (0, t.jsx)("th", { children: "Group" }),
                          (0, t.jsx)("th", { children: "Session Start" }),
                          (0, t.jsx)("th", { children: "Session Duration" }),
                          (0, t.jsx)("th", { children: "Seats" }),
                          (0, t.jsx)("th", {
                            style: { width: "50px" },
                            children: "Registered",
                          }),
                          (0, t.jsx)("th", {
                            style: { width: "50px" },
                            children: "Guests",
                          }),
                          (0, t.jsx)("th", {
                            style: { width: "100px" },
                            children: "Details",
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)("tbody", {
                      children: [
                        (0, t.jsxs)("tr", {
                          children: [
                            u.length > 0
                              ? (0, t.jsx)(
                                  qt,
                                  {
                                    gid: n,
                                    group: u[0].group,
                                    session: u[0].session,
                                    rgAvailability: i,
                                  },
                                  u[0].session.id,
                                )
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)("td", { children: "None" }),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                  ],
                                }),
                            (0, t.jsx)("td", {
                              children:
                                !(
                                  e?.BIsUnlistedEvent() &&
                                  e.jsondata.meet_steam_groups?.length > 0
                                ) &&
                                (0, t.jsx)("div", {
                                  children:
                                    "Invite Disabled. Event need to publish into Unlisted State",
                                }),
                            }),
                          ],
                        }),
                        u
                          .filter((h, g) => g > 0)
                          .map((h) =>
                            (0, t.jsx)(
                              "tr",
                              {
                                children: (0, t.jsx)(qt, {
                                  group: h.group,
                                  gid: n,
                                  session: h.session,
                                  rgAvailability: i,
                                  firstSession: h.firstSession,
                                }),
                              },
                              h.session.id,
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function _n(r) {
          const { gid: e } = r,
            n = At();
          return Array.from(n.keys()).includes(e)
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  "\xA0|\xA0",
                  (0, t.jsx)("a", {
                    href: `${ke.TS.PARTNER_BASE_URL}meetsteam/survey/${e}`,
                    children: "Survey",
                  }),
                ],
              })
            : null;
        }
        function er(r) {
          const { gid: e } = r,
            [n, s, a] = (0, ce.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsxs)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: [
                  "Invite via CSV",
                  (0, t.jsx)(Pe.o, {
                    tooltip:
                      "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                  }),
                ],
              }),
              (0, t.jsx)(ge.tH, {
                children: (0, t.jsx)(xe.E, {
                  active: n,
                  children: (0, t.jsx)(wn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function tr(r) {
          const { gid: e } = r,
            [n, s, a] = (0, ce.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: "Invite",
              }),
              (0, t.jsx)(ge.tH, {
                children: (0, t.jsx)(xe.E, {
                  active: n,
                  children: (0, t.jsx)(xn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function nr(r) {
          const { gid: e } = r,
            [n, s, a] = (0, ce.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: "Show Invites",
              }),
              (0, t.jsx)(ge.tH, {
                children: (0, t.jsx)(xe.E, {
                  active: n,
                  children: (0, t.jsx)(On, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function rr(r) {
          const { gid: e } = r,
            n = (0, De.a)(),
            [s, a] = (0, p.useState)(!1),
            [i, l] = (0, p.useState)(null);
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("a", {
                href: "#",
                onClick: async (u) => {
                  u.preventDefault(), u.stopPropagation(), a(!0);
                  const h = await sr(n, e);
                  l(h);
                },
                children: "Email Self",
              }),
              (0, t.jsx)(xe.E, {
                active: s,
                children: (0, t.jsxs)(Ie.o0, {
                  bAlertDialog: !0,
                  strTitle: "Test Emails",
                  closeModal: () => {
                    a(!1), l(null);
                  },
                  onOK: () => {},
                  children: [
                    (0, t.jsx)("div", {
                      children:
                        "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                    }),
                    i == null &&
                      (0, t.jsx)(ie.t, { string: (0, T.we)("#Loading") }),
                    i == Z.R &&
                      (0, t.jsx)("div", { children: "Test Emails Sent" }),
                    !!(i && i != Z.R) &&
                      (0, t.jsx)("div", {
                        children: "Email Failed to Send. Check console",
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        async function sr(r, e) {
          const n = ae.w.Init(G),
            s = R.b.InitFromClanID((0, Ze.H)());
          n.Body().set_clan_event_gid(e),
            n.Body().set_steamid(s.ConvertTo64BitString());
          const a = await M.TestFireEmails(r, n);
          return console.log("test fire", a), a.GetEResult();
        }
        function ir(r, e) {
          const n = Oe().unix(r),
            s = Oe().unix(r).tz(e),
            a = s.utcOffset() - n.utcOffset(),
            i = new Date((r + a * 60) * 1e3),
            l = new Date(),
            u =
              i.getFullYear() == l.getFullYear()
                ? (0, ct.$w)(i, !1, !1)
                : (0, ct._9)(i, !1, !1),
            h = (0, ct.KC)(r + a * 60);
          return `${u} ${h} ${s.format("z")}`;
        }
        function qt(r) {
          const {
              gid: e,
              group: n,
              rgAvailability: s,
              session: a,
              firstSession: i = !0,
            } = r,
            l = T.NT.GetWithFallback(n?.localized_session_title, $.Bhc),
            u = T.NT.GetWithFallback(n?.localized_session_description, $.Bhc),
            h = T.NT.GetWithFallback(n?.localized_intended_audience, $.Bhc),
            g = s?.find(
              (Ne) => Ne.group_id == n.group_id && Ne.session_id == a.id,
            ),
            [v, y, w] = (0, ce.uD)(),
            z = (0, De.a)(),
            S = Ke(z, e, n?.group_id);
          let D = Math.min((g?.guest_count / a.max_capacity) * 100, 100),
            _ = g?.guest_count > 0 ? `${D}%` : "0%",
            ze = g?.guest_count >= a.max_capacity;
          const Qe = Intl.DateTimeFormat().resolvedOptions().timeZone,
            qe =
              a.location_type === "in_person"
                ? (a.in_person_time_zone ?? we.hh)
                : Qe;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              i && n
                ? (0, t.jsxs)("td", {
                    children: [
                      (0, t.jsx)(bt, { text: l }),
                      (0, t.jsx)(Pe.o, { tooltip: u }),
                      !!h &&
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)(bt, { text: h }),
                        }),
                    ],
                  })
                : (0, t.jsx)("td", {}),
              (0, t.jsx)("td", {
                children: (0, t.jsx)("span", {
                  children: ir(a.rtime_start, qe),
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, ct.IH)(a.rtime_end - a.rtime_start),
              }),
              (0, t.jsxs)("td", {
                children: [
                  g?.guest_count || 0,
                  " / ",
                  a.max_capacity,
                  (0, t.jsx)("br", {}),
                  (0, t.jsx)("div", {
                    className: Te().CapacityBarMax,
                    children: (0, t.jsx)("div", {
                      className: (0, et.A)(
                        Te().CapacityBarCurrent,
                        ze ? Te().Full : "",
                      ),
                      style: { width: _ },
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("td", {
                children:
                  S.isSuccess &&
                  (0, t.jsx)(t.Fragment, {
                    children: S.data?.filter((Ne) => Ne.session_id == a.id)
                      .length,
                  }),
              }),
              (0, t.jsx)("td", {
                children:
                  S.isSuccess &&
                  (0, t.jsx)(t.Fragment, {
                    children: S.data
                      ?.filter((Ne) => Ne.session_id == a.id)
                      .reduce((Ne, Ae) => Ne + Ae.guests_registered - 1, 0),
                  }),
              }),
              (0, t.jsxs)("td", {
                children: [
                  (0, t.jsx)(V.$n, { onClick: y, children: "Details" }),
                  (0, t.jsx)(ge.tH, {
                    children: (0, t.jsx)(xe.E, {
                      active: v,
                      children: (0, t.jsx)(Un, {
                        gid: e,
                        title: l,
                        group: n,
                        session: a,
                        hideModal: w,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function ar() {
          const [r] = (0, p.useState)(() =>
            (0, N.Tc)("event_gids", "application_config"),
          );
          return r;
        }
        var or = f(29522),
          cr = f(40358),
          Ye = f(62092),
          lr = f(10142),
          dr = f(24237),
          Bt = f(12932);
        function ur(r) {
          const { rgEvents: e } = J(),
            n = vr(),
            [s, a] = (0, p.useState)(""),
            i = U.TS.PARTNER_BASE_URL + "meetsteam",
            l = (0, p.useMemo)(() => {
              const u = new Map();
              return (
                n.forEach((h) => {
                  h.results?.attending?.forEach((g) => {
                    u.has(g) ? u.set(g, u.get(g) + 1) : u.set(g, 1);
                  });
                }),
                u
              );
            }, [n]);
          return (0, t.jsxs)("div", {
            className: Te().EventList,
            children: [
              (0, t.jsx)(V.pd, {
                type: "text",
                value: s,
                onChange: (u) => a(u.currentTarget.value.trim()),
                label: "Filter",
              }),
              (0, t.jsxs)("div", {
                children: [
                  "Total Survey Responses: ",
                  (0, it.D)(n?.length || 0),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  "Link to partner-facing survey: ",
                  (0, t.jsx)("a", { href: i, children: i }),
                ],
              }),
              e
                .filter(
                  (u) =>
                    s.length == 0 || u.name.includes(s) || u.id.includes(s),
                )
                .map((u) =>
                  (0, t.jsx)(
                    hr,
                    {
                      conf: u,
                      nInterestCount: l.get(u.id) ?? 0,
                      rgSurveyInterest: n,
                    },
                    u.id,
                  ),
                ),
              (0, t.jsx)(xr, { rgSurveyInterest: n }),
            ],
          });
        }
        function hr(r) {
          const { conf: e, nInterestCount: n, rgSurveyInterest: s } = r;
          return (0, t.jsx)(Bt.qx, {
            title: `${e.name} in ${e.place} around ${e.time}: Interest: ${(0, it.D)(n)}`,
            bStartMinimized: !0,
            children: (0, t.jsx)(gr, { conf: e, rgSurveyInterest: s }),
          });
        }
        function _t(r) {
          if (typeof r == "number") return r;
          const e = r.slice(-1).toUpperCase(),
            n = parseFloat(r.slice(0, -1));
          switch (e) {
            case "K":
              return n * 1e3;
            case "M":
              return n * 1e6;
            case "B":
              return n * 1e9;
            default:
              return parseFloat(r);
          }
        }
        function gr(r) {
          const { conf: e, rgSurveyInterest: n } = r,
            s = (0, p.useMemo)(
              () => n.filter((u) => u.results?.attending?.includes(e.id)),
              [e, n],
            ),
            a = (0, tt.qh)(),
            { bComplete: i, nCount: l } = Je(s);
          return i
            ? a?.length
              ? !s || s.length == 0
                ? (0, t.jsx)("div", { children: "No users with interest" })
                : (0, t.jsx)(mr, { conf: e, rgSurveyInterest: s })
              : (0, t.jsx)(ie.t, {
                  position: "center",
                  string:
                    "Loading Valve Account info (this shouldn't take long)",
                })
            : (0, t.jsx)(ie.t, {
                position: "center",
                string: `Loading ${l} of ${s.length}`,
              });
        }
        function mr(r) {
          const { conf: e, rgSurveyInterest: n } = r,
            s = (0, he.jE)();
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(V.$n, {
                onClick: () => {
                  const a = [];
                  a.push([
                    "AccountID",
                    "Partner ID",
                    "Valve Partner Contacts",
                    "Email Override",
                    "Account Name",
                    "Name",
                    "Have you met steam",
                    "Survey Time",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Best AppID Name",
                    "Long Term Sales Rank",
                  ]),
                    n.forEach((l) => {
                      const u = [],
                        h = new He.b2(l.steamid);
                      u.push("" + h.GetAccountID());
                      const g = (0, Ye.z0)(h.GetAccountID()),
                        v = l.results.partner_id;
                      u.push("" + v);
                      const y = (0, re.N6)(v).map(
                        (_) => (0, tt.YA)(s, _)?.displayName || "" + _,
                      );
                      u.push(y.join("|"));
                      const w = l.results.email_override || "";
                      u.push("" + w),
                        u.push(g?.m_strPlayerName ? g.m_strPlayerName : "");
                      const z = xt(h.GetAccountID(), v);
                      if (
                        (u.push(z ? z.realname : ""),
                        u.push(l.results.have_you_met_steam ? "yes" : "no"),
                        l.results.submit_time)
                      ) {
                        const _ = l.results.submit_time,
                          ze = new Date(_ * 1e3)
                            .toISOString()
                            .replace("T", " ")
                            .split(".")[0];
                        u.push(ze);
                      } else u.push("");
                      u.push("" + l.results.attending?.length),
                        u.push(l.results.country_code),
                        u.push(
                          l.results.preferred_language
                            ? (0, $.LgB)(l.results.preferred_language)
                            : "",
                        );
                      const S = (0, W.Yd)(v);
                      u.push(S ? S.name : "");
                      const D = me(s, v);
                      D
                        ? (u.push("" + _t(D.strGrossUSD)),
                          u.push("" + D.nBestAppID),
                          u.push(lr.A.Get().GetApp(D.nBestAppID)?.GetName()),
                          u.push("" + D.nBestAppLongTermSalesRank))
                        : (u.push(""), u.push(""), u.push(""), u.push("")),
                        a.push(u);
                    });
                  const i =
                    e.name.replace(" ", "_") + "_conference_interest.csv";
                  Xe.g.WriteCSVToFile(a, i);
                },
                children: "Export to CSV",
              }),
              (0, t.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "Name and Email" }),
                        (0, t.jsx)("th", { children: "Have you met steam?" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Valve Contacts" }),
                        (0, t.jsx)("th", { children: "Partner Revenue" }),
                        (0, t.jsx)("th", { children: "Biggest Game" }),
                        (0, t.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, t.jsx)("th", { children: "Attending count?" }),
                        (0, t.jsx)("th", { children: "Alt Language" }),
                        (0, t.jsx)("th", { children: "Country" }),
                        (0, t.jsx)("th", { children: "Submit Survey Time" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: n.map((a) =>
                      (0, t.jsx)(
                        fr,
                        {
                          strsteamid: a.steamid,
                          partnerID: a.results.partner_id,
                          registration: a.results,
                        },
                        e.id + "_" + a.steamid,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function fr(r) {
          const { partnerID: e, registration: n } = r;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: (0, t.jsx)(en, { ...r }) }),
              (0, t.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
              (0, t.jsx)(tn, { nPartnerID: e }),
              (0, t.jsx)("td", { children: n.attending.length }),
              (0, t.jsx)("td", {
                children:
                  n.english_not_good && n.preferred_language
                    ? (0, $.LgB)(n.preferred_language)
                    : "",
              }),
              (0, t.jsx)("td", { children: n.country_code }),
              (0, t.jsx)("td", { children: (0, T.TW)(n.submit_time) }),
            ],
          });
        }
        function en(r) {
          const { strsteamid: e, partnerID: n, registration: s } = r,
            a = (0, Ye.hW)(e),
            i = new He.b2(e),
            l = $t(i.GetAccountID(), n),
            u = l?.realname || a.data?.m_strPlayerName;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: u }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("span", { children: s.email_override || l?.email }),
            ],
          });
        }
        function tn(r) {
          const { nPartnerID: e } = r,
            [n] = (0, W.UA)(e),
            s = de(e),
            a = (0, re.Z4)(e),
            i = (0, he.jE)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("td", { children: n ? n?.name + ` (${e})` : e }),
              (0, t.jsx)("td", {
                children: a
                  ?.map((l) => (0, tt.YA)(i, l)?.displayName || "" + l)
                  .join(","),
              }),
              (0, t.jsxs)("td", { children: ["$", s?.strGrossUSD] }),
              (0, t.jsx)("td", {
                children:
                  s?.nBestAppID > 0
                    ? (0, t.jsx)(pr, { appid: s?.nBestAppID })
                    : "N/A",
              }),
              (0, t.jsx)("td", { children: s?.nBestAppLongTermSalesRank }),
            ],
          });
        }
        const ds = {};
        function pr(r) {
          const { appid: e } = r,
            n = (0, or.$5)(e),
            { data: s } = (0, cr.J$)(n);
          return (0, t.jsx)(dr.Q, {
            id: n,
            children: (0, t.jsx)("span", { children: s?.name || e }),
          });
        }
        function vr() {
          const [r] = (0, p.useState)(() =>
            (0, N.Tc)("interest_results", "application_config"),
          );
          return (0, p.useMemo)(
            () => r.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
            [r],
          );
        }
        function xr(r) {
          const { rgSurveyInterest: e } = r,
            n = (0, he.jE)(),
            s = (0, tt.qh)(),
            a = (0, p.useMemo)(
              () => e.filter((i) => i.results?.suggestion?.trim().length > 0),
              [e],
            );
          return (0, t.jsxs)(Bt.qx, {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
            children: [
              (0, t.jsx)(V.$n, {
                onClick: () => {
                  const i = [];
                  i.push([
                    "AccountID",
                    "Partner ID",
                    "Email Override",
                    "Account Name",
                    "name",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Long Term Sales Rank",
                    "Suggestion",
                  ]),
                    a.forEach((u) => {
                      const h = [],
                        g = new He.b2(u.steamid);
                      h.push("" + g.GetAccountID());
                      const v = (0, Ye.z0)(g.GetAccountID()),
                        y = u.results.partner_id;
                      h.push("" + y);
                      const w = u.results.email_override || "";
                      h.push("" + w),
                        h.push(v?.m_strPlayerName ? v.m_strPlayerName : "");
                      const z = xt(g.GetAccountID(), y);
                      h.push(z ? z.realname : ""),
                        h.push("" + u.results.attending?.length),
                        h.push(u.results.country_code),
                        h.push(
                          u.results.preferred_language
                            ? (0, $.LgB)(u.results.preferred_language)
                            : "",
                        );
                      const S = (0, W.Yd)(y);
                      h.push(S ? S.name : "");
                      const D = me(n, y);
                      D
                        ? (h.push("" + _t(D.strGrossUSD)),
                          h.push("" + D.nBestAppID),
                          h.push("" + D.nBestAppLongTermSalesRank))
                        : (h.push(""), h.push(""), h.push("")),
                        h.push(u.results.suggestion),
                        i.push(h);
                    }),
                    Xe.g.WriteCSVToFile(i, "suggestsion.csv");
                },
                children:
                  "Export to CSV (wait until the table populates fully)",
              }),
              (0, t.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "Name and Email" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Valve Contacts" }),
                        (0, t.jsx)("th", { children: "Partner Revenue" }),
                        (0, t.jsx)("th", { children: "Biggest Game" }),
                        (0, t.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, t.jsx)("th", { children: "Suggestions" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: a.map((i) =>
                      (0, t.jsx)(jr, { survey: i }, "suggested" + i.steamid),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function jr(r) {
          const { survey: e } = r,
            n = new He.b2(e.steamid);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", {
                children: (0, t.jsx)(en, {
                  strsteamid: e.steamid,
                  partnerID: e.results.partner_id,
                  registration: e.results,
                }),
              }),
              (0, t.jsx)(tn, { nPartnerID: e.results.partner_id }),
              (0, t.jsx)("td", { children: e.results.suggestion.trim() }),
            ],
          });
        }
        function yr(r) {
          const e = p.useContext(St);
          return (0, ne.I)(nn(e, r));
        }
        function us(r) {
          const e = React.useContext(St);
          return useQueries({ queries: r.map((n) => nn(e, n)) });
        }
        function wr(r) {
          return Rt.L.getQueryData(["UserEmailAndLangs", r]);
        }
        function hs(r) {
          const { loadUserEmailAndLangs: e, children: n } = r,
            s = React.useMemo(() => ({ loadUserEmailAndLangs: e }), [e]);
          return React.createElement(St.Provider, { value: s }, n);
        }
        const St = p.createContext({
          loadUserEmailAndLangs: async (r) => await br().load(r),
        });
        function nn(r, e) {
          return {
            queryKey: ["UserEmailAndLangs", e],
            queryFn: () => r.loadUserEmailAndLangs(e),
            enabled: !!e,
          };
        }
        let Dt;
        function br() {
          return (
            Dt ||
              (Dt = new (ft())(
                async (r) => {
                  const e = `${U.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = { sessionid: (0, U.KC)(), strAccountIDs: r.join(",") },
                    s = await Y().get(e, { params: n, withCredentials: !0 });
                  if (!s || s?.status != 200 || s?.data?.success != Z.R)
                    throw `Failed to load app to user email and langs: ${((0, rt.H))(s).strErrorMsg}`;
                  const a = new Map();
                  return (
                    s.data.users.forEach((i) => {
                      const l = new R.b(i.steamid);
                      a.set(l.GetAccountID(), i);
                    }),
                    r.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              )),
            Dt
          );
        }
        var Br = f(54963),
          Sr = f(84346);
        function Dr(r) {
          const e = (0, De.a)(),
            n = (0, tt.qh)(),
            s = We(e),
            a = (0, p.useMemo)(() => {
              if (!s || !n) return null;
              const i = new Set(n.map((l) => l.id));
              return s
                .filter((l) => !i.has(l.accountid))
                .sort(
                  (l, u) =>
                    u.clan_event_gids?.length - l.clan_event_gids.length,
                );
            }, [s, n]);
          return a
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)(V.$n, {
                    onClick: () => {
                      const i = [];
                      i.push([
                        "User Name",
                        "account id",
                        "Email",
                        "Event Count",
                      ]),
                        a.forEach((u) => {
                          const h = (0, Ye.z0)(u.accountid),
                            g = wr(u.accountid);
                          i.push([
                            h?.m_strPlayerName || "",
                            "" + u.accountid,
                            g?.email_address || "",
                            u.clan_event_gids?.length.toLocaleString(
                              (0, Sr.J)(),
                            ),
                          ]);
                        }),
                        Xe.g.WriteCSVToFile(i, "sale_operators.csv");
                    },
                    children: [
                      "CSV Export",
                      (0, t.jsx)(Pe.o, {
                        tooltip:
                          "Wait until the page finishes loading before export",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("table", {
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", { children: "User" }),
                            (0, t.jsx)("th", { children: "Email" }),
                            (0, t.jsx)("th", { children: "Events" }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("tbody", {
                        children: a.map((i) =>
                          (0, t.jsx)(Ir, { organizer: i }, i.accountid),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, t.jsx)(ie.t, {
                string: (0, T.we)("#Loading"),
                size: "medium",
              });
        }
        function Ir(r) {
          const { organizer: e } = r,
            n = (0, p.useMemo)(
              () => R.b.InitFromAccountID(e.accountid).ConvertTo64BitString(),
              [e],
            ),
            s = (0, Ye.hW)(n),
            a = yr(e.accountid),
            i = s.data?.m_strPlayerName || "";
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsxs)("td", { children: [i, " (", e.accountid, ")"] }),
              (0, t.jsx)("td", { children: a?.data?.email_address }),
              (0, t.jsx)("td", {
                children: (0, t.jsx)(Tr, {
                  name: i,
                  rgClanEventGIDs: e.clan_event_gids,
                }),
              }),
            ],
          });
        }
        function Tr(r) {
          const { name: e, rgClanEventGIDs: n } = r,
            [s, a, i] = (0, Br.uD)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(V.$n, {
                onClick: a,
                children: ["See ", (0, it.D)(n.length), " Events"],
              }),
              (0, t.jsx)(xe.E, {
                active: s,
                children: (0, t.jsx)(Ie.o0, {
                  bAlertDialog: !0,
                  closeModal: i,
                  strTitle: `${e}'s Events`,
                  children: n.map((l) => (0, t.jsx)(Ar, { gid: l }, l)),
                }),
              }),
            ],
          });
        }
        function Ar(r) {
          const { gid: e } = r,
            n = (0, ue.RR)(e);
          return n
            ? (0, t.jsxs)("a", {
                href: `${ke.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${e}`,
                target: "_blank",
                children: [
                  (0, t.jsx)("div", { children: n.GetNameWithFallback($.Bhc) }),
                  (0, t.jsx)("img", { src: n.GetImageURL("capsule", $.Bhc) }),
                ],
              })
            : (0, t.jsxs)("div", { children: ["Loading ", e] });
        }
        function Er(r) {
          const e = (s) =>
              window.sessionStorage.setItem("meetsteamadmin", `?tab=${s.key}`),
            n = [
              {
                name: "Interest Survey Results",
                key: "survey",
                contents: (0, t.jsx)(ge.tH, { children: (0, t.jsx)(ur, {}) }),
                onClick: e,
              },
              {
                name: "Event Management",
                key: "event",
                contents: (0, t.jsx)(ge.tH, { children: (0, t.jsx)(Pn, {}) }),
                onClick: e,
              },
              {
                name: "Sale Operators",
                key: "saleops",
                contents: (0, t.jsx)(ge.tH, { children: (0, t.jsx)(Dr, {}) }),
                onClick: e,
              },
              {
                name: "Post Event Surveys",
                key: "postsurvey",
                contents: (0, t.jsx)(ge.tH, { children: (0, t.jsx)(cn, {}) }),
                onClick: e,
              },
            ];
          return (0, t.jsx)(un, {
            children: (0, t.jsx)(Qn, {
              children: (0, t.jsxs)("div", {
                className: B().AdminPageCtn,
                children: [
                  (0, t.jsxs)("div", {
                    className: B().PageTitle,
                    children: [
                      "Meet Steam Admin Dashboard ",
                      (0, N.Fd)("current_year", "application_config"),
                    ],
                  }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)(Se.V, { tabs: n }),
                  (0, t.jsx)("div", { className: te().ClearThings }),
                  (0, t.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var Mr = f(65946),
          Lr = f(19324),
          Fr = f(24806),
          rn = f(56330),
          zr = f(85761),
          Ve = f.n(zr);
        function Or(r) {
          const e = Rr(),
            n = $r(),
            { data: s } = (0, Ye.js)(U.iA.accountid),
            [a, i] = (0, p.useState)(!1),
            [l, u] = (0, p.useState)(!1),
            [h, g] = (0, p.useState)(!1),
            [v, y] = (0, p.useState)(() => JSON.parse(JSON.stringify(n)));
          return e
            ? !s || s.m_bPlayerNamePending
              ? (0, t.jsx)(ie.t, {
                  size: "medium",
                  position: "center",
                  string: (0, T.we)("#Loading"),
                })
              : (0, t.jsxs)("div", {
                  className: (0, et.A)(B().AdminPageCtn, Ve().Ctn),
                  children: [
                    (0, t.jsx)("div", {
                      className: B().PageTitle,
                      children: (0, T.we)("#MeetSteam_MainTitle"),
                    }),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("div", {
                      className: B().ColumnCtn,
                      children: (0, t.jsxs)("div", {
                        className: B().LeftCol,
                        children: [
                          (0, t.jsxs)("div", {
                            className: B().SectionCtn,
                            children: [
                              (0, t.jsxs)("h1", {
                                children: [
                                  " ",
                                  (0, T.PP)(
                                    "#MeetSteam_Intro",
                                    s.m_strPlayerName,
                                    (0, t.jsx)("br", {}),
                                  ),
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: B().IntroText,
                                children: (0, T.we)("#MeetSteam_Desc1"),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: B().SectionCtn,
                            children: (0, t.jsx)(Wr, {
                              oRegistration: v,
                              fnSetRegistration: y,
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: B().SectionCtn,
                            children: (0, t.jsx)(Nr, {
                              oRegistration: v,
                              fnSetRegistration: y,
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: (0, et.A)(B().SectionCtn, B().ActionBar),
                            children: [
                              (0, t.jsx)(V.jn, {
                                onClick: async () => {
                                  u(!0), i(!1), g(!1);
                                  const w = `${U.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                    z = new FormData();
                                  z.append("sessionid", (0, U.KC)()),
                                    z.append(
                                      "registrationJson",
                                      JSON.stringify(v),
                                    );
                                  try {
                                    const S = await Y().post(w, z, {
                                      withCredentials: !0,
                                    });
                                    S.data.success != Z.R
                                      ? (console.error(
                                          "MeetSteamLanding failed " +
                                            S.data.success,
                                        ),
                                        i(!0))
                                      : g(!0);
                                  } catch (S) {
                                    console.error(
                                      "MeetSteamLanding failed caught",
                                      S,
                                    );
                                  }
                                  u(!1);
                                },
                                children: (0, T.we)("#Button_Submit"),
                              }),
                              l &&
                                (0, t.jsx)(ie.t, {
                                  size: "medium",
                                  position: "center",
                                  string: (0, T.we)("#Saving"),
                                }),
                              h &&
                                (0, t.jsx)("div", {
                                  children: (0, T.we)("#Button_Saved"),
                                }),
                              a &&
                                (0, t.jsx)("div", {
                                  className: rn.ErrorStylesWithIcon,
                                  children: (0, T.we)(
                                    "#Error_ErrorCommunicatingWithNetwork",
                                  ),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
            : (0, t.jsx)("div", {
                className: Ve().Ctn,
                children: (0, T.we)("#MeetSteam_closed"),
              });
        }
        function Nr(r) {
          const { oRegistration: e, fnSetRegistration: n } = r,
            { rgEvents: s, rgOldEvents: a, selectConference: i } = J();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("h1", {
                children: (0, T.we)("#MeetSteam_Events_Interest"),
              }),
              (0, t.jsx)("p", {
                children: (0, T.PP)(
                  "#MeetSteam_Events_title",
                  (0, U.Tc)("meet_steam_year", "application_config") || "2025",
                ),
              }),
              (0, t.jsxs)("p", {
                children: [
                  (0, t.jsx)("span", {
                    className: Ve().Indicator,
                    children: "*",
                  }),
                  " ",
                  (0, T.PP)("#MeetSteam_Events_desc"),
                ],
              }),
              !!i &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("p", {
                      children: (0, T.we)("#MeetSteam_ConferenceOrg"),
                    }),
                    (0, t.jsx)(It, { ...r, rgConference: [i] }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("h2", {
                      children: (0, T.we)("#MeetSteam_OtherConference"),
                    }),
                  ],
                }),
              (0, t.jsx)(It, { ...r, rgConference: s }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)(V.pd, {
                type: "text",
                value: e.suggestion || "",
                onChange: (l) => n({ ...e, suggestion: l.currentTarget.value }),
                label: (0, T.we)("#MeetSteam_others"),
              }),
              a?.length > 0 &&
                (0, t.jsx)(Bt.qx, {
                  bStartMinimized: !0,
                  title: (0, T.we)("#MeetSteam_PastEvents", a.length),
                  children: (0, t.jsx)(It, { ...r, rgConference: a }),
                }),
            ],
          });
        }
        function It(r) {
          const { rgConference: e } = r;
          return (0, t.jsxs)("table", {
            children: [
              (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                  children: [
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                  ],
                }),
              }),
              (0, t.jsx)("tbody", {
                children: e.map((n) =>
                  (0, t.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, t.jsx)("td", {
                          children: n.attending
                            ? (0, t.jsx)("span", {
                                className: Ve().Indicator,
                                children: "*",
                              })
                            : "",
                        }),
                        (0, t.jsxs)("td", {
                          children: [
                            (0, t.jsx)("div", { children: n.name }),
                            (0, t.jsx)("div", { children: n.place }),
                          ],
                        }),
                        (0, t.jsx)("td", {
                          children: (0, t.jsx)("div", { children: n.time }),
                        }),
                        (0, t.jsx)("td", {
                          children: (0, t.jsx)(Ur, { ...r, conf: n }),
                        }),
                      ],
                    },
                    n.id,
                  ),
                ),
              }),
            ],
          });
        }
        function Ur(r) {
          const { oRegistration: e, fnSetRegistration: n, conf: s } = r;
          return (0, t.jsx)(V.Yh, {
            checked: e.attending?.includes(s.id),
            onChange: (a) => {
              let i = e.attending ? [...e.attending] : [];
              a && !i.includes(s.id)
                ? (i.push(s.id), n({ ...e, attending: i }))
                : !a &&
                  i.includes(s.id) &&
                  (i.splice(i.indexOf(s.id), 1), n({ ...e, attending: i }));
            },
            tooltip: (0, T.we)("#MeetSteam_attend_ttip"),
          });
        }
        function Wr(r) {
          const { oRegistration: e, fnSetRegistration: n } = r,
            s = (0, Ye.js)(U.iA.accountid),
            a = Vr(e?.partner_id),
            [i, l] = (0, p.useState)(
              () => !!((e.email_override && e.email_override != a) || !a),
            ),
            [u, h, g] = (0, Mr.q3)(() => [
              !e.have_you_met_steam,
              !!e.english_not_good,
              e.preferred_language,
            ]);
          return s.data
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h1", { children: (0, T.we)("#MeetSteam_You") }),
                  (0, t.jsx)("p", {
                    children: (0, T.we)("#MeetSteam_You_Desc"),
                  }),
                  (0, t.jsx)(kr, {
                    nPartnerID: e.partner_id,
                    label: (0, T.we)("#MeetSteam_You_Company"),
                    setPartnerID: (v) => n({ ...e, partner_id: v }),
                  }),
                  (0, t.jsxs)("div", {
                    className: Ve().EmailInfoRow,
                    children: [
                      (0, t.jsx)("div", {
                        className: Ve().EmailField,
                        children: (0, t.jsx)(V.pd, {
                          type: "string",
                          label: (0, T.we)("#MeetSteam_You_Email"),
                          disabled: !i,
                          value: e.email_override || a || "",
                          placeholder: (0, T.we)("#MeetSteam_You_EmailMissing"),
                          mustBeEmail: !0,
                          onChange: (v) =>
                            n({ ...e, email_override: v.currentTarget.value }),
                        }),
                      }),
                      !i &&
                        (0, t.jsx)(V.Yh, {
                          checked: i,
                          onChange: l,
                          label: (0, T.we)("#MeetSteam_You_Update"),
                          tooltip: (0, T.we)("#MeetSteam_You_Update_ttip"),
                        }),
                    ],
                  }),
                  (0, t.jsx)(V.JU, {
                    children: (0, T.we)("#MeetSteam_NeverMet"),
                  }),
                  (0, t.jsx)(V.Yh, {
                    label: (0, T.we)("#MeetSteam_NeverMetNo"),
                    checked: u,
                    onChange: (v) => n({ ...e, have_you_met_steam: !v }),
                  }),
                  (0, t.jsx)(V.JU, {
                    children: (0, T.we)("#MeetSteam_CapabableEnglish"),
                  }),
                  (0, t.jsxs)("div", {
                    className: Ve().RadioButtonCtn,
                    children: [
                      (0, t.jsx)(V.Od, {
                        className: Ve().RadioButtons,
                        checked: !h,
                        onChange: (v) =>
                          v &&
                          n({
                            ...e,
                            english_not_good: void 0,
                            preferred_language: void 0,
                          }),
                        label: (0, T.we)("#MeetSteam_CapabableEnglish_Yes"),
                      }),
                      (0, t.jsx)(V.Od, {
                        className: Ve().RadioButtons,
                        checked: h,
                        onChange: (v) =>
                          v &&
                          n({
                            ...e,
                            english_not_good: !0,
                            preferred_language: (0, $.sfN)(U.TS.LANGUAGE),
                          }),
                        label: (0, T.we)("#MeetSteam_CapabableEnglish_No"),
                      }),
                    ],
                  }),
                  h &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)(V.JU, {
                          children: (0, T.we)("#MeetSteam_LanguagePref"),
                        }),
                        (0, t.jsx)(Fr.Ng, {
                          selectedLang: g,
                          bAllowUnsetOption: !1,
                          strTooltip: (0, T.we)("#MeetSteam_LanguagePref_ttip"),
                          fnOnLanguageChanged: (v) =>
                            n({ ...e, preferred_language: v }),
                        }),
                      ],
                    }),
                ],
              })
            : (0, t.jsx)(ie.t, {
                size: "medium",
                position: "center",
                string: (0, T.we)("#Loading"),
              });
        }
        function kr(r) {
          const { nPartnerID: e, setPartnerID: n, label: s } = r,
            a = (0, Lr.c)(U.iA.accountid);
          if (!a)
            return (0, t.jsx)(ie.t, {
              size: "small",
              position: "center",
              string: (0, T.we)("#Loading"),
            });
          if (a.length == 1) return null;
          const i = [];
          return (
            a.forEach((l) =>
              i.push({ label: l?.partner_name, data: l.partnerid }),
            ),
            (0, t.jsx)(V.m, {
              layout: "inline",
              label: s,
              rgOptions: i,
              selectedOption: e,
              onChange: (l) => {
                n(l.data);
              },
            })
          );
        }
        function Rr() {
          const [r] = (0, p.useState)(() =>
            (0, U.Tc)("registration_open", "application_config"),
          );
          return r;
        }
        function $r() {
          const [r] = (0, p.useState)(
            () => (0, U.Tc)("user_reg", "application_config") || {},
          );
          return r;
        }
        function Cr() {
          const [r] = (0, p.useState)(
            () => (0, U.Tc)("partner_user_email", "application_config") || "",
          );
          return r;
        }
        function Kr() {
          const [r] = (0, p.useState)(() =>
            (0, U.Tc)("primary_partner_id", "application_config"),
          );
          return r;
        }
        function Vr(r) {
          const e = Cr(),
            n = Kr(),
            s = $t(U.iA.accountid, r != n ? r : null);
          return r == n ? e : s?.email;
        }
        var Hr = f(65804),
          Yr = f(13038),
          Qr = f.n(Yr);
        function Jr(r) {
          const { data: e } = (0, Ye.js)(U.iA.accountid),
            n = Zr(),
            s = Pr(),
            [a, i] = (0, p.useState)(() => s || ""),
            { surveyGID: l } = (0, P.g)(),
            [u, h] = (0, p.useState)(!1),
            [g, v] = (0, p.useState)(!1),
            [y, w] = (0, p.useState)(!1);
          return !e || e.m_bPlayerNamePending
            ? (0, t.jsx)(ie.t, {
                size: "medium",
                position: "center",
                string: (0, T.we)("#Loading"),
              })
            : (0, t.jsxs)("div", {
                className: (0, et.A)(B().AdminPageCtn, Qr().Ctn),
                children: [
                  (0, t.jsx)("div", {
                    className: B().PageTitle,
                    children: (0, T.we)("#MeetSteam_PostSurvey_Title", n),
                  }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)("div", {
                    className: B().ColumnCtn,
                    children: (0, t.jsxs)("div", {
                      className: B().LeftCol,
                      children: [
                        (0, t.jsxs)("div", {
                          className: B().SectionCtn,
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, T.we)(
                                "#MeetSteam_PostSurvey_Question",
                              ),
                            }),
                            (0, t.jsx)("textarea", {
                              rows: 10,
                              onChange: (z) => i(z.currentTarget.value),
                              value: a,
                              autoFocus: !0,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: (0, et.A)(B().SectionCtn, B().ActionBar),
                          children: [
                            (0, t.jsx)(V.jn, {
                              onClick: async () => {
                                v(!0), h(!1), w(!1);
                                const z = `${U.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${l}`,
                                  S = new FormData();
                                S.append("gid", l),
                                  S.append("sessionid", (0, U.KC)());
                                let D = {
                                  gid: l,
                                  simple_response: a,
                                  submit_time: Math.floor(
                                    new Date().getTime() / 1e3,
                                  ),
                                };
                                S.append("surveyjson", JSON.stringify(D));
                                try {
                                  const _ = await Y().post(z, S, {
                                    withCredentials: !0,
                                  });
                                  _.data.success != Z.R
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          _.data.success,
                                      ),
                                      h(!0))
                                    : w(!0);
                                } catch (_) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    _,
                                  );
                                }
                                v(!1);
                              },
                              children: (0, T.we)("#Button_Submit"),
                            }),
                            g &&
                              (0, t.jsx)(ie.t, {
                                size: "medium",
                                position: "center",
                                string: (0, T.we)("#Saving"),
                              }),
                            y &&
                              (0, t.jsx)("div", {
                                children: (0, T.we)("#Button_Saved"),
                              }),
                            u &&
                              (0, t.jsx)("div", {
                                className: rn.ErrorStylesWithIcon,
                                children: (0, T.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
        }
        function Zr() {
          const [r] = (0, p.useState)(
            () => (0, U.Tc)("survey_event_name", "application_config") || "",
          );
          return r;
        }
        function Pr() {
          const [r] = (0, p.useState)(
            () => (0, U.Tc)("survey_data", "application_config") || "",
          );
          return r;
        }
        var sn = f(65532);
        function Xr(r) {
          const e = ts(),
            n = ns(),
            s = _r(),
            { surveyGID: a } = (0, P.g)(),
            { bIsLoading: i, events: l } = (0, ue.PB)(e),
            [u, h] = (0, p.useMemo)(
              () => [
                n
                  .map((y) => {
                    const w = new R.b(y.steamid);
                    if (s.has(w.GetAccountID())) {
                      const z = s.get(w.GetAccountID());
                      return JSON.parse(z[0].jsondata).partner_id;
                    }
                    return null;
                  })
                  .filter(Boolean),
                n.map((y) => new R.b(y.steamid).GetAccountID()),
              ],
              [s, n],
            ),
            g = (0, W.vh)(u),
            v = (0, ut.B3)(h);
          return i || !g || !v
            ? (0, t.jsx)(ie.t, {
                string: "Loading Event, Partner and User Info",
              })
            : (0, t.jsx)(Gr, {
                rgSurveyResults: n,
                mapAccountsToReg: s,
                meetSteamEvents: l,
              });
        }
        const nt = (0, gt.FB)();
        function Gr(r) {
          const {
              rgSurveyResults: e,
              mapAccountsToReg: n,
              meetSteamEvents: s,
            } = r,
            a = (0, p.useMemo)(() => {
              if (!e) return null;
              const l = new Map();
              s.forEach((h) => l.set(h.GID, h));
              const u = [];
              return (
                e.forEach((h) => {
                  const g = JSON.parse(h.jsondata),
                    v = new R.b(h.steamid);
                  let y = {
                    feedback: g.simple_response,
                    accountid: v.GetAccountID(),
                  };
                  if (n.has(v.GetAccountID())) {
                    const w = n.get(v.GetAccountID()),
                      z = JSON.parse(w[0].jsondata);
                    (y.partner_id = z.partner_id),
                      (y.email = z.email_override),
                      (y.name = z.name),
                      (y.registrations = "");
                    const S = (0, W.Yd)(z.partner_id);
                    S && (y.partner_name = S.name),
                      w.forEach((D) => {
                        const _ = l.get(D.gidEvent);
                        if (_) {
                          const Qe = _.jsondata.meet_steam_groups.find(
                            (qe) => qe.group_id === D.group_id,
                          ).localized_session_title[$.Bhc];
                          y.registrations.length > 0 &&
                            (y.registrations += "|"),
                            (y.registrations += Qe);
                        }
                      });
                  } else {
                    const w = (0, ut.CF)(v.GetAccountID());
                    w && (y.name = w.persona_name);
                  }
                  u.push(y);
                }),
                u
              );
            }, [n, s, e]),
            i = (0, p.useMemo)(
              () => [
                nt.accessor("name", { header: "Name", size: 150 }),
                nt.accessor("feedback", {
                  header: "Feedback",
                  size: 500,
                  cell: sn.Gb,
                }),
                nt.accessor("registrations", {
                  header: "Sessions",
                  size: 200,
                  cell: qr,
                }),
                nt.accessor("accountid", { header: "Account ID", size: 150 }),
                nt.accessor("email", { header: "Email", size: 150 }),
                nt.accessor("partner_name", {
                  header: "Partner Name",
                  size: 200,
                }),
              ],
              [],
            );
          return a
            ? (0, t.jsx)(ge.tH, {
                children: (0, t.jsxs)("div", {
                  className: B().AdminPageCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: B().PageTitle,
                      children: "Survey Results",
                    }),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)(V.$n, {
                      id: "download-csv",
                      onClick: () =>
                        (0, Jt.K)(
                          "meetsteam_survey_results.csv",
                          a,
                          i.map((l) => ({
                            accessorKey: l.accessorKey,
                            header:
                              typeof l.header == "string"
                                ? l.header
                                : (l.accessorKey ?? ""),
                          })),
                        ),
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)(mt.k, {
                      columns: i,
                      data: a,
                      getRowKey: (l) => l,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                  ],
                }),
              })
            : (0, t.jsx)(ie.t, { string: (0, T.we)("#Loading") });
        }
        function qr(r) {
          return r.getValue()?.length > 0
            ? (0, t.jsx)(sn.DP, { text: r.getValue(), regExp: /\|/ })
            : "";
        }
        function _r() {
          const r = es();
          return (0, p.useMemo)(() => {
            const n = new Map();
            return (
              r.forEach((s, a) => {
                s.forEach((i) => {
                  const l = new R.b(i.steamid);
                  n.has(l.GetAccountID()) || n.set(l.GetAccountID(), []),
                    (i.gidEvent = a),
                    n.get(l.GetAccountID()).push(i);
                });
              }),
              n
            );
          }, [r]);
        }
        function es() {
          const [r] = (0, p.useState)(() => {
            const e = new Map(),
              n = (0, U.Tc)("registration_by_gid", "application_config") || {};
            for (const s in n) {
              const a = n[s];
              e.set(s, a);
            }
            return e;
          });
          return r;
        }
        function ts() {
          const [r] = (0, p.useState)(
            () => (0, U.Tc)("event_gids", "application_config") || [],
          );
          return r;
        }
        function ns() {
          const [r] = (0, p.useState)(
            () => (0, U.Tc)("survey_results", "application_config") || [],
          );
          return r;
        }
        const at = {
          YearlySurvery: (r = ":year") => `/${r}`,
          PostEventSurvey: (r = ":surveyGID") => `/survey/${r}`,
          AdminDashboard: () => "/admin",
          PostEventSurveyResults: (r = ":surveyGID") => `/surveyresults/${r}`,
        };
        function rs(r) {
          return (
            (0, p.useEffect)(() => {
              Hr.O3.Init();
            }, []),
            (0, t.jsx)(Be.m, {
              children: (0, t.jsx)(X.Kd, {
                basename: (0, fe.C)() + "meetsteam/",
                children: (0, t.jsxs)(P.dO, {
                  children: [
                    (0, t.jsx)(P.qh, {
                      exact: !0,
                      path: fe.B.DiagData(),
                      render: (e) =>
                        (0, t.jsx)(Ee.z, {
                          ...e,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, t.jsx)(P.qh, {
                      exact: !0,
                      path: at.AdminDashboard(),
                      component: Er,
                    }),
                    (0, t.jsx)(P.qh, {
                      exact: !0,
                      path: at.YearlySurvery(":year(\\d+)"),
                      component: Or,
                    }),
                    (0, t.jsx)(P.qh, {
                      exact: !0,
                      path: at.PostEventSurvey(":surveyGID(\\d+)"),
                      component: Jr,
                    }),
                    (0, t.jsx)(P.qh, {
                      exact: !0,
                      path: at.PostEventSurveyResults(":surveyGID(\\d+)"),
                      component: Xr,
                    }),
                    (0, t.jsx)(P.qh, { component: Me.a }),
                  ],
                }),
              }),
            })
          );
        }
      },
      7742: (be, Ue, f) => {
        "use strict";
        f.d(Ue, { x0: () => fe, yI: () => p });
        async function t(X) {
          try {
            return await X;
          } catch (P) {
            console.error(P);
            return;
          }
        }
        function fe() {
          let X, P;
          return {
            promise: new Promise((Ee, Me) => {
              (X = Ee), (P = Me);
            }),
            resolve: X,
            reject: P,
          };
        }
        function p(X) {
          return new Promise((P) => setTimeout(P, X));
        }
      },
      50109: (be, Ue, f) => {
        "use strict";
        f.d(Ue, { E: () => Le, O: () => Se });
        var t = f(14947),
          fe = f(65946),
          p = f(99412),
          X = f(41635),
          P = f(27066),
          Be = f(3166),
          Ee = f(38585),
          Me = Object.defineProperty,
          ge = Object.getOwnPropertyDescriptor,
          A = (B, N, $, Z) => {
            for (
              var ae = Z > 1 ? void 0 : Z ? ge(N, $) : N, K = B.length - 1, E;
              K >= 0;
              K--
            )
              (E = B[K]) && (ae = (Z ? E(N, $, ae) : E(ae)) || ae);
            return Z && ae && Me(N, $, ae), ae;
          };
        const te = class ot {
          m_eCurLang = (0, p.sfN)(Be.TS.LANGUAGE);
          m_rgHasData = (0, X.$Y)([], p.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new Ee.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(N) {
            return this.m_eCurLang != N
              ? ((this.m_eCurLang = N), this.GetCallback().Dispatch(N), !0)
              : !1;
          }
          SetHasLanguage(N) {
            N.forEach(($, Z) => {
              this.m_rgHasData[Z] != $ && (this.m_rgHasData[Z] = $);
            });
          }
          BHasLanguageData(N) {
            return this.m_rgHasData[N];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(N) {
            N != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = N);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              ot.s_globalSingletonStore ||
                (ot.s_globalSingletonStore = new ot()),
              ot.s_globalSingletonStore
            );
          }
          constructor() {
            (0, t.Gn)(this);
          }
        };
        A([t.sH], te.prototype, "m_eCurLang", 2),
          A([t.sH], te.prototype, "m_rgHasData", 2),
          A([t.sH], te.prototype, "m_bHasLocalizationContext", 2),
          A([P.o], te.prototype, "GetCurEditLanguage", 1),
          A([P.o], te.prototype, "SetCurEditLanguage", 1),
          A([t.XI.bound], te.prototype, "SetHasLanguage", 1),
          A([P.o], te.prototype, "BHasLanguageData", 1);
        let Se = te;
        function Le() {
          return (0, fe.q3)(() => Se.Get().GetCurEditLanguage());
        }
      },
      61266: (be, Ue, f) => {
        "use strict";
        f.d(Ue, { T: () => Me, m: () => Ee });
        var t = f(90626),
          fe = f(77008),
          p = f(60298),
          X = f(10142),
          P = f(3166),
          Be = f(14616);
        function Ee(te) {
          const [Se, Le] = (0, t.useState)(!1),
            [B] = (0, t.useState)(() => ge()),
            N = (0, t.useMemo)(
              () => ({
                country: P.TS.COUNTRY,
                language: P.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, t.useEffect)(() => (Le(!0), A(B)), [B]),
            Se
              ? (0, t.createElement)(Be.V3, {
                  context: N,
                  serviceTransportOverride: B.GetServiceTransport(),
                  children: te.children,
                })
              : null
          );
        }
        function Me(te) {
          const [Se] = (0, t.useState)(() => ge()),
            Le = (0, t.useMemo)(
              () => ({
                country: P.TS.COUNTRY,
                language: P.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: te.bIncludeUnpublished,
              }),
              [te.bIncludeUnpublished],
            );
          return (0, t.createElement)(Be.V3, {
            context: Le,
            serviceTransportOverride: Se.GetServiceTransport(),
            children: te.children,
          });
        }
        function ge() {
          const te = (0, P.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, p.p)(new fe.D(P.TS.WEBAPI_BASE_URL, te));
        }
        function A(te) {
          return X.A.Initialize(
            te.GetServiceTransport(),
            P.iA.is_partner_member,
          );
        }
      },
      51746: (be, Ue, f) => {
        "use strict";
        f.d(Ue, {
          EG: () => P,
          II: () => Se,
          N1: () => Le,
          S2: () => A,
          Uz: () => ge,
          aL: () => Me,
          ab: () => p,
          qR: () => X,
          zB: () => te,
        });
        var t = f(7742),
          fe = f(72849);
        function p(B) {
          const N = B.toLowerCase();
          if (N.endsWith(".jpg") || N.endsWith(".jpeg")) return "image/jpeg";
          if (N.endsWith(".png")) return "image/png";
          if (N.endsWith(".gif")) return "image/gif";
          if (N.endsWith(".mp4")) return "video/mp4";
          if (N.endsWith(".webm")) return "video/webm";
          if (N.endsWith(".srt")) return "text/srt";
          if (N.endsWith(".vtt")) return "text/vtt";
          if (N.endsWith(".webp")) return "image/webp";
        }
        function X(B) {
          switch (B) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              B,
            ),
            ".jpg"
          );
        }
        function P(B) {
          switch (B) {
            case fe.bg.iS:
              return ".jpg";
            case fe.bg.CK:
              return ".gif";
            case fe.bg.dU:
              return ".png";
            case fe.bg.pJ:
              return ".webm";
            case fe.bg.nn:
              return ".mp4";
            case fe.bg.pi:
              return ".srt";
            case fe.bg.k7:
              return ".vtt";
            case fe.bg.wD:
              return ".webp";
          }
        }
        function Be(B) {
          const N = (0, t.x0)(),
            $ = new Image();
          return (
            ($.onload = () => N.resolve($)),
            ($.onerror = (Z) => {
              console.error("LoadImage failed to load the image, details", Z),
                N.resolve(void 0);
            }),
            ($.src = B),
            N.promise
          );
        }
        function Ee(B) {
          const N = (0, t.x0)(),
            $ = document.createElement("video");
          return (
            ($.preload = "metadata"),
            $.addEventListener("loadedmetadata", () => N.resolve($)),
            ($.onerror = (Z) => {
              console.error("LoadVideo failed to load the video, details", Z),
                N.resolve(void 0);
            }),
            ($.src = B),
            N.promise
          );
        }
        function Me(B) {
          return B.startsWith("image/");
        }
        function ge(B) {
          return B.startsWith("video/");
        }
        function A(B, N) {
          return N ? Ee(B) : Be(B);
        }
        async function te(B, N) {
          if (N) return Ee(URL.createObjectURL(B));
          {
            const $ = (0, t.x0)(),
              Z = new FileReader();
            (Z.onload = () => $.resolve(Z.result ?? void 0)),
              (Z.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  Z.error,
                ),
                  $.resolve(void 0);
              }),
              Z.readAsDataURL(B);
            const ae = await $.promise;
            return ae ? Be(ae.toString()) : void 0;
          }
        }
        function Se(B) {
          return B
            ? B instanceof HTMLVideoElement
              ? { width: B.videoWidth, height: B.videoHeight }
              : { width: B.width, height: B.height }
            : { width: 0, height: 0 };
        }
        function Le(B, N) {
          if (!N) return B;
          const $ = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const Z of N)
            $.has(Z.name.toLowerCase()) || (B[Z.name] = Z.value);
          return B;
        }
      },
      30565: (be) => {
        be.exports = {
          EventList: "_3iKeBOMuwqPC87BLxvCKll",
          EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
          EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
          Title: "_1bLTz07sQnRA0DjTpjXCza",
          StartDate: "_6accgtG1qR7tHFL1wnO58",
          TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
          ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
          SearchLine: "_3WR8L9DXe8JRgcUuBlzxCV",
          SearchSummary: "_2ZYKXsT05br_fBl6Al_Ok2",
          SearchMatch: "_3NPtUvJyTjDkKKBkXpmMMh",
          CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
          CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
          Full: "ndEhtgivpXhCilYDnAAVe",
          MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
          MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
        };
      },
      34283: (be) => {
        be.exports = {
          ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
          AccountSummary: "_3ASk__24cRSvf749cMDwat",
          AccountAvatar: "_2xoRnY-a7zMtF4eXy564LW",
          AccountPersonaName: "_13y5R1N5OAhnGi8UjBv9ZK",
          PartnerList: "_EdCW3WiSPTQsVts-RIeJ",
          PartnerListHeader: "_4TErK934px6TrK1V9JGoD",
          PartnerListRow: "CZqR_ufpzWTsB5Z6N9Zut",
          PartnerListRowSelected: "_2d0ftwVO6CThilpy0rp1mx",
        };
      },
      85761: (be) => {
        be.exports = {
          Ctn: "_8n9wPNrWDu91tlwBW9bHt",
          Indicator: "_355XkH0xfIpJF1YsMX7I7k",
          EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
          EmailField: "_1E-g4exFlAQhvXDqspYTR0",
          RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
          RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
        };
      },
      13038: (be) => {
        be.exports = {
          Ctn: "_1olTwzPkPjzL36u0WgyDG0",
          Indicator: "_3d0cYrmQzzda_P3DQ994kX",
        };
      },
      30603: (be) => {
        be.exports = {
          ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
          Table: "_2JSoC65mCQdxh-B_srjUjf",
        };
      },
      40323: function (be, Ue) {
        var f, t, fe; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((p, X) => {
          (t = []),
            (f = X),
            (fe = typeof f == "function" ? f.apply(Ue, t) : f),
            fe !== void 0 && (be.exports = fe);
        })(this, function p() {
          var X =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : X !== void 0
                    ? X
                    : {},
            P,
            Be = !X.document && !!X.postMessage,
            Ee = X.IS_PAPA_WORKER || !1,
            Me = {},
            ge = 0,
            A = {};
          function te(c) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (d) {
                var m = oe(d);
                (m.chunkSize = parseInt(m.chunkSize)),
                  d.step || d.chunk || (m.chunkSize = null),
                  (this._handle = new $(m)),
                  ((this._handle.streamer = this)._config = m);
              }.call(this, c),
              (this.parseChunk = function (d, m) {
                var j = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < j) {
                  let L = this._config.newline;
                  L ||
                    ((x = this._config.quoteChar || '"'),
                    (L = this._handle.guessLineEndings(d, x))),
                    (d = [...d.split(L).slice(j)].join(L));
                }
                this.isFirstChunk &&
                  k(this._config.beforeFirstChunk) &&
                  (x = this._config.beforeFirstChunk(d)) !== void 0 &&
                  (d = x),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var j = this._partialLine + d,
                  x =
                    ((this._partialLine = ""),
                    this._handle.parse(j, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((d = x.meta.cursor),
                    (j =
                      (this._finished ||
                        ((this._partialLine = j.substring(d - this._baseIndex)),
                        (this._baseIndex = d)),
                      x && x.data && (this._rowCount += x.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    Ee)
                  )
                    X.postMessage({
                      results: x,
                      workerId: A.WORKER_ID,
                      finished: j,
                    });
                  else if (k(this._config.chunk) && !m) {
                    if (
                      (this._config.chunk(x, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = x = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(x.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(x.errors)),
                      (this._completeResults.meta = x.meta)),
                    this._completed ||
                      !j ||
                      !k(this._config.complete) ||
                      (x && x.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    j || (x && x.meta.paused) || this._nextChunk(),
                    x
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (d) {
                k(this._config.error)
                  ? this._config.error(d)
                  : Ee &&
                    this._config.error &&
                    X.postMessage({
                      workerId: A.WORKER_ID,
                      error: d,
                      finished: !1,
                    });
              });
          }
          function Se(c) {
            var d;
            (c = c || {}).chunkSize || (c.chunkSize = A.RemoteChunkSize),
              te.call(this, c),
              (this._nextChunk = Be
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (m) {
                (this._input = m), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((d = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (d.withCredentials = this._config.withCredentials),
                    Be ||
                      ((d.onload = je(this._chunkLoaded, this)),
                      (d.onerror = je(this._chunkError, this))),
                    d.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !Be,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var m,
                      j = this._config.downloadRequestHeaders;
                    for (m in j) d.setRequestHeader(m, j[m]);
                  }
                  var x;
                  this._config.chunkSize &&
                    ((x = this._start + this._config.chunkSize - 1),
                    d.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + x,
                    ));
                  try {
                    d.send(this._config.downloadRequestBody);
                  } catch (L) {
                    this._chunkError(L.message);
                  }
                  Be && d.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                d.readyState === 4 &&
                  (d.status < 200 || 400 <= d.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || d.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((m) =>
                            (m = m.getResponseHeader("Content-Range")) !== null
                              ? parseInt(m.substring(m.lastIndexOf("/") + 1))
                              : -1)(d)),
                      this.parseChunk(d.responseText)));
              }),
              (this._chunkError = function (m) {
                (m = d.statusText || m), this._sendError(new Error(m));
              });
          }
          function Le(c) {
            (c = c || {}).chunkSize || (c.chunkSize = A.LocalChunkSize),
              te.call(this, c);
            var d,
              m,
              j = typeof FileReader < "u";
            (this.stream = function (x) {
              (this._input = x),
                (m = x.slice || x.webkitSlice || x.mozSlice),
                j
                  ? (((d = new FileReader()).onload = je(
                      this._chunkLoaded,
                      this,
                    )),
                    (d.onerror = je(this._chunkError, this)))
                  : (d = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var x = this._input,
                  L =
                    (this._config.chunkSize &&
                      ((L = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (x = m.call(x, this._start, L))),
                    d.readAsText(x, this._config.encoding));
                j || this._chunkLoaded({ target: { result: L } });
              }),
              (this._chunkLoaded = function (x) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(x.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(d.error);
              });
          }
          function B(c) {
            var d;
            te.call(this, (c = c || {})),
              (this.stream = function (m) {
                return (d = m), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var m, j;
                if (!this._finished)
                  return (
                    (m = this._config.chunkSize),
                    (d = m
                      ? ((j = d.substring(0, m)), d.substring(m))
                      : ((j = d), "")),
                    (this._finished = !d),
                    this.parseChunk(j)
                  );
              });
          }
          function N(c) {
            te.call(this, (c = c || {}));
            var d = [],
              m = !0,
              j = !1;
            (this.pause = function () {
              te.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                te.prototype.resume.apply(this, arguments),
                  this._input.resume();
              }),
              (this.stream = function (x) {
                (this._input = x),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                j && d.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  d.length ? this.parseChunk(d.shift()) : (m = !0);
              }),
              (this._streamData = je(function (x) {
                try {
                  d.push(
                    typeof x == "string"
                      ? x
                      : x.toString(this._config.encoding),
                  ),
                    m &&
                      ((m = !1),
                      this._checkIsFinished(),
                      this.parseChunk(d.shift()));
                } catch (L) {
                  this._streamError(L);
                }
              }, this)),
              (this._streamError = je(function (x) {
                this._streamCleanUp(), this._sendError(x);
              }, this)),
              (this._streamEnd = je(function () {
                this._streamCleanUp(), (j = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = je(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function $(c) {
            var d,
              m,
              j,
              x,
              L = Math.pow(2, 53),
              H = -L,
              G = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              q =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              F = this,
              C = 0,
              b = 0,
              Q = !1,
              I = !1,
              O = [],
              M = { data: [], errors: [], meta: {} };
            function ce(Y) {
              return c.skipEmptyLines === "greedy"
                ? Y.join("").trim() === ""
                : Y.length === 1 && Y[0].length === 0;
            }
            function ne() {
              if (
                (M &&
                  j &&
                  (Fe(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      A.DefaultDelimiter +
                      "'",
                  ),
                  (j = !1)),
                c.skipEmptyLines &&
                  (M.data = M.data.filter(function (re) {
                    return !ce(re);
                  })),
                he())
              ) {
                let re = function (pe, le) {
                  k(c.transformHeader) && (pe = c.transformHeader(pe, le)),
                    O.push(pe);
                };
                var W = re;
                if (M)
                  if (Array.isArray(M.data[0])) {
                    for (var Y = 0; he() && Y < M.data.length; Y++)
                      M.data[Y].forEach(re);
                    M.data.splice(0, 1);
                  } else M.data.forEach(re);
              }
              function R(re, pe) {
                for (
                  var le = c.header ? {} : [], se = 0;
                  se < re.length;
                  se++
                ) {
                  var J = se,
                    ve = re[se],
                    ve = ((ee, de) =>
                      ((me) => (
                        c.dynamicTypingFunction &&
                          c.dynamicTyping[me] === void 0 &&
                          (c.dynamicTyping[me] = c.dynamicTypingFunction(me)),
                        (c.dynamicTyping[me] || c.dynamicTyping) === !0
                      ))(ee)
                        ? de === "true" ||
                          de === "TRUE" ||
                          (de !== "false" &&
                            de !== "FALSE" &&
                            (((me) => {
                              if (
                                G.test(me) &&
                                ((me = parseFloat(me)), H < me && me < L)
                              )
                                return 1;
                            })(de)
                              ? parseFloat(de)
                              : q.test(de)
                                ? new Date(de)
                                : de === ""
                                  ? null
                                  : de))
                        : de)(
                      (J = c.header
                        ? se >= O.length
                          ? "__parsed_extra"
                          : O[se]
                        : J),
                      (ve = c.transform ? c.transform(ve, J) : ve),
                    );
                  J === "__parsed_extra"
                    ? ((le[J] = le[J] || []), le[J].push(ve))
                    : (le[J] = ve);
                }
                return (
                  c.header &&
                    (se > O.length
                      ? Fe(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            O.length +
                            " fields but parsed " +
                            se,
                          b + pe,
                        )
                      : se < O.length &&
                        Fe(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            O.length +
                            " fields but parsed " +
                            se,
                          b + pe,
                        )),
                  le
                );
              }
              var U;
              M &&
                (c.header || c.dynamicTyping || c.transform) &&
                ((U = 1),
                !M.data.length || Array.isArray(M.data[0])
                  ? ((M.data = M.data.map(R)), (U = M.data.length))
                  : (M.data = R(M.data, 0)),
                c.header && M.meta && (M.meta.fields = O),
                (b += U));
            }
            function he() {
              return c.header && O.length === 0;
            }
            function Fe(Y, R, U, W) {
              (Y = { type: Y, code: R, message: U }),
                W !== void 0 && (Y.row = W),
                M.errors.push(Y);
            }
            k(c.step) &&
              ((x = c.step),
              (c.step = function (Y) {
                (M = Y),
                  he()
                    ? ne()
                    : (ne(),
                      M.data.length !== 0 &&
                        ((C += Y.data.length),
                        c.preview && C > c.preview
                          ? m.abort()
                          : ((M.data = M.data[0]), x(M, F))));
              })),
              (this.parse = function (Y, R, U) {
                var W = c.quoteChar || '"',
                  W =
                    (c.newline || (c.newline = this.guessLineEndings(Y, W)),
                    (j = !1),
                    c.delimiter
                      ? k(c.delimiter) &&
                        ((c.delimiter = c.delimiter(Y)),
                        (M.meta.delimiter = c.delimiter))
                      : ((W = ((re, pe, le, se, J) => {
                          var ve, ee, de, me;
                          J = J || [
                            ",",
                            "	",
                            "|",
                            ";",
                            A.RECORD_SEP,
                            A.UNIT_SEP,
                          ];
                          for (var Ke = 0; Ke < J.length; Ke++) {
                            for (
                              var We,
                                Je = J[Ke],
                                ye = 0,
                                Oe = 0,
                                ue = 0,
                                we =
                                  ((de = void 0),
                                  new ae({
                                    comments: se,
                                    delimiter: Je,
                                    newline: pe,
                                    preview: 10,
                                  }).parse(re)),
                                De = 0;
                              De < we.data.length;
                              De++
                            )
                              le && ce(we.data[De])
                                ? ue++
                                : ((We = we.data[De].length),
                                  (Oe += We),
                                  de === void 0
                                    ? (de = We)
                                    : 0 < We &&
                                      ((ye += Math.abs(We - de)), (de = We)));
                            0 < we.data.length && (Oe /= we.data.length - ue),
                              (ee === void 0 || ye <= ee) &&
                                (me === void 0 || me < Oe) &&
                                1.99 < Oe &&
                                ((ee = ye), (ve = Je), (me = Oe));
                          }
                          return {
                            successful: !!(c.delimiter = ve),
                            bestDelimiter: ve,
                          };
                        })(
                          Y,
                          c.newline,
                          c.skipEmptyLines,
                          c.comments,
                          c.delimitersToGuess,
                        )).successful
                          ? (c.delimiter = W.bestDelimiter)
                          : ((j = !0), (c.delimiter = A.DefaultDelimiter)),
                        (M.meta.delimiter = c.delimiter)),
                    oe(c));
                return (
                  c.preview && c.header && W.preview++,
                  (d = Y),
                  (m = new ae(W)),
                  (M = m.parse(d, R, U)),
                  ne(),
                  Q ? { meta: { paused: !0 } } : M || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return Q;
              }),
              (this.pause = function () {
                (Q = !0),
                  m.abort(),
                  (d = k(c.chunk) ? "" : d.substring(m.getCharIndex()));
              }),
              (this.resume = function () {
                F.streamer._halted
                  ? ((Q = !1), F.streamer.parseChunk(d, !0))
                  : setTimeout(F.resume, 3);
              }),
              (this.aborted = function () {
                return I;
              }),
              (this.abort = function () {
                (I = !0),
                  m.abort(),
                  (M.meta.aborted = !0),
                  k(c.complete) && c.complete(M),
                  (d = "");
              }),
              (this.guessLineEndings = function (re, W) {
                re = re.substring(0, 1048576);
                var W = new RegExp(Z(W) + "([^]*?)" + Z(W), "gm"),
                  U = (re = re.replace(W, "")).split("\r"),
                  W = re.split(`
`),
                  re = 1 < W.length && W[0].length < U[0].length;
                if (U.length === 1 || re)
                  return `
`;
                for (var pe = 0, le = 0; le < U.length; le++)
                  U[le][0] ===
                    `
` && pe++;
                return pe >= U.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function Z(c) {
            return c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function ae(c) {
            var d = (c = c || {}).delimiter,
              m = c.newline,
              j = c.comments,
              x = c.step,
              L = c.preview,
              H = c.fastMode,
              G = null,
              q = !1,
              F = c.quoteChar == null ? '"' : c.quoteChar,
              C = F;
            if (
              (c.escapeChar !== void 0 && (C = c.escapeChar),
              (typeof d != "string" || -1 < A.BAD_DELIMITERS.indexOf(d)) &&
                (d = ","),
              j === d)
            )
              throw new Error("Comment character same as delimiter");
            j === !0
              ? (j = "#")
              : (typeof j != "string" || -1 < A.BAD_DELIMITERS.indexOf(j)) &&
                (j = !1),
              m !==
                `
` &&
                m !== "\r" &&
                m !==
                  `\r
` &&
                (m = `
`);
            var b = 0,
              Q = !1;
            (this.parse = function (I, O, M) {
              if (typeof I != "string")
                throw new Error("Input must be a string");
              var ce = I.length,
                ne = d.length,
                he = m.length,
                Fe = j.length,
                Y = k(x),
                R = [],
                U = [],
                W = [],
                re = (b = 0);
              if (!I) return ye();
              if (H || (H !== !1 && I.indexOf(F) === -1)) {
                for (var pe = I.split(m), le = 0; le < pe.length; le++) {
                  if (((W = pe[le]), (b += W.length), le !== pe.length - 1))
                    b += m.length;
                  else if (M) return ye();
                  if (!j || W.substring(0, Fe) !== j) {
                    if (Y) {
                      if (((R = []), me(W.split(d)), Oe(), Q)) return ye();
                    } else me(W.split(d));
                    if (L && L <= le) return (R = R.slice(0, L)), ye(!0);
                  }
                }
                return ye();
              }
              for (
                var se = I.indexOf(d, b),
                  J = I.indexOf(m, b),
                  ve = new RegExp(Z(C) + Z(F), "g"),
                  ee = I.indexOf(F, b);
                ;
              )
                if (I[b] === F)
                  for (ee = b, b++; ; ) {
                    if ((ee = I.indexOf(F, ee + 1)) === -1)
                      return (
                        M ||
                          U.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: R.length,
                            index: b,
                          }),
                        We()
                      );
                    if (ee === ce - 1)
                      return We(I.substring(b, ee).replace(ve, F));
                    if (F === C && I[ee + 1] === C) ee++;
                    else if (F === C || ee === 0 || I[ee - 1] !== C) {
                      se !== -1 && se < ee + 1 && (se = I.indexOf(d, ee + 1));
                      var de = Ke(
                        (J =
                          J !== -1 && J < ee + 1 ? I.indexOf(m, ee + 1) : J) ===
                          -1
                          ? se
                          : Math.min(se, J),
                      );
                      if (I.substr(ee + 1 + de, ne) === d) {
                        W.push(I.substring(b, ee).replace(ve, F)),
                          I[(b = ee + 1 + de + ne)] !== F &&
                            (ee = I.indexOf(F, b)),
                          (se = I.indexOf(d, b)),
                          (J = I.indexOf(m, b));
                        break;
                      }
                      if (
                        ((de = Ke(J)),
                        I.substring(ee + 1 + de, ee + 1 + de + he) === m)
                      ) {
                        if (
                          (W.push(I.substring(b, ee).replace(ve, F)),
                          Je(ee + 1 + de + he),
                          (se = I.indexOf(d, b)),
                          (ee = I.indexOf(F, b)),
                          Y && (Oe(), Q))
                        )
                          return ye();
                        if (L && R.length >= L) return ye(!0);
                        break;
                      }
                      U.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: R.length,
                        index: b,
                      }),
                        ee++;
                    }
                  }
                else if (j && W.length === 0 && I.substring(b, b + Fe) === j) {
                  if (J === -1) return ye();
                  (b = J + he), (J = I.indexOf(m, b)), (se = I.indexOf(d, b));
                } else if (se !== -1 && (se < J || J === -1))
                  W.push(I.substring(b, se)),
                    (b = se + ne),
                    (se = I.indexOf(d, b));
                else {
                  if (J === -1) break;
                  if ((W.push(I.substring(b, J)), Je(J + he), Y && (Oe(), Q)))
                    return ye();
                  if (L && R.length >= L) return ye(!0);
                }
              return We();
              function me(ue) {
                R.push(ue), (re = b);
              }
              function Ke(ue) {
                var we = 0;
                return (we =
                  ue !== -1 &&
                  (ue = I.substring(ee + 1, ue)) &&
                  ue.trim() === ""
                    ? ue.length
                    : we);
              }
              function We(ue) {
                return (
                  M ||
                    (ue === void 0 && (ue = I.substring(b)),
                    W.push(ue),
                    (b = ce),
                    me(W),
                    Y && Oe()),
                  ye()
                );
              }
              function Je(ue) {
                (b = ue), me(W), (W = []), (J = I.indexOf(m, b));
              }
              function ye(ue) {
                if (c.header && !O && R.length && !q) {
                  var we = R[0],
                    De = Object.create(null),
                    V = new Set(we);
                  let Ze = !1;
                  for (let Ie = 0; Ie < we.length; Ie++) {
                    let xe = we[Ie];
                    if (
                      De[
                        (xe = k(c.transformHeader)
                          ? c.transformHeader(xe, Ie)
                          : xe)
                      ]
                    ) {
                      let ie,
                        Pe = De[xe];
                      for (; (ie = xe + "_" + Pe), Pe++, V.has(ie); );
                      V.add(ie),
                        (we[Ie] = ie),
                        De[xe]++,
                        (Ze = !0),
                        ((G = G === null ? {} : G)[ie] = xe);
                    } else (De[xe] = 1), (we[Ie] = xe);
                    V.add(xe);
                  }
                  Ze && console.warn("Duplicate headers found and renamed."),
                    (q = !0);
                }
                return {
                  data: R,
                  errors: U,
                  meta: {
                    delimiter: d,
                    linebreak: m,
                    aborted: Q,
                    truncated: !!ue,
                    cursor: re + (O || 0),
                    renamedHeaders: G,
                  },
                };
              }
              function Oe() {
                x(ye()), (R = []), (U = []);
              }
            }),
              (this.abort = function () {
                Q = !0;
              }),
              (this.getCharIndex = function () {
                return b;
              });
          }
          function K(c) {
            var d = c.data,
              m = Me[d.workerId],
              j = !1;
            if (d.error) m.userError(d.error, d.file);
            else if (d.results && d.results.data) {
              var x = {
                abort: function () {
                  (j = !0),
                    E(d.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: o,
                resume: o,
              };
              if (k(m.userStep)) {
                for (
                  var L = 0;
                  L < d.results.data.length &&
                  (m.userStep(
                    {
                      data: d.results.data[L],
                      errors: d.results.errors,
                      meta: d.results.meta,
                    },
                    x,
                  ),
                  !j);
                  L++
                );
                delete d.results;
              } else
                k(m.userChunk) &&
                  (m.userChunk(d.results, x, d.file), delete d.results);
            }
            d.finished && !j && E(d.workerId, d.results);
          }
          function E(c, d) {
            var m = Me[c];
            k(m.userComplete) && m.userComplete(d), m.terminate(), delete Me[c];
          }
          function o() {
            throw new Error("Not implemented.");
          }
          function oe(c) {
            if (typeof c != "object" || c === null) return c;
            var d,
              m = Array.isArray(c) ? [] : {};
            for (d in c) m[d] = oe(c[d]);
            return m;
          }
          function je(c, d) {
            return function () {
              c.apply(d, arguments);
            };
          }
          function k(c) {
            return typeof c == "function";
          }
          return (
            (A.parse = function (c, d) {
              var m = (d = d || {}).dynamicTyping || !1;
              if (
                (k(m) && ((d.dynamicTypingFunction = m), (m = {})),
                (d.dynamicTyping = m),
                (d.transform = !!k(d.transform) && d.transform),
                !d.worker || !A.WORKERS_SUPPORTED)
              )
                return (
                  (m = null),
                  A.NODE_STREAM_INPUT,
                  typeof c == "string"
                    ? ((c = ((j) =>
                        j.charCodeAt(0) !== 65279 ? j : j.slice(1))(c)),
                      (m = new (d.download ? Se : B)(d)))
                    : c.readable === !0 && k(c.read) && k(c.on)
                      ? (m = new N(d))
                      : ((X.File && c instanceof File) ||
                          c instanceof Object) &&
                        (m = new Le(d)),
                  m.stream(c)
                );
              ((m = (() => {
                var j;
                return (
                  !!A.WORKERS_SUPPORTED &&
                  ((j = (() => {
                    var x = X.URL || X.webkitURL || null,
                      L = p.toString();
                    return (
                      A.BLOB_URL ||
                      (A.BLOB_URL = x.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            L,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((j = new X.Worker(j)).onmessage = K),
                  (j.id = ge++),
                  (Me[j.id] = j))
                );
              })()).userStep = d.step),
                (m.userChunk = d.chunk),
                (m.userComplete = d.complete),
                (m.userError = d.error),
                (d.step = k(d.step)),
                (d.chunk = k(d.chunk)),
                (d.complete = k(d.complete)),
                (d.error = k(d.error)),
                delete d.worker,
                m.postMessage({ input: c, config: d, workerId: m.id });
            }),
            (A.unparse = function (c, d) {
              var m = !1,
                j = !0,
                x = ",",
                L = `\r
`,
                H = '"',
                G = H + H,
                q = !1,
                F = null,
                C = !1,
                b =
                  ((() => {
                    if (typeof d == "object") {
                      if (
                        (typeof d.delimiter != "string" ||
                          A.BAD_DELIMITERS.filter(function (O) {
                            return d.delimiter.indexOf(O) !== -1;
                          }).length ||
                          (x = d.delimiter),
                        (typeof d.quotes != "boolean" &&
                          typeof d.quotes != "function" &&
                          !Array.isArray(d.quotes)) ||
                          (m = d.quotes),
                        (typeof d.skipEmptyLines != "boolean" &&
                          typeof d.skipEmptyLines != "string") ||
                          (q = d.skipEmptyLines),
                        typeof d.newline == "string" && (L = d.newline),
                        typeof d.quoteChar == "string" && (H = d.quoteChar),
                        typeof d.header == "boolean" && (j = d.header),
                        Array.isArray(d.columns))
                      ) {
                        if (d.columns.length === 0)
                          throw new Error("Option columns is empty");
                        F = d.columns;
                      }
                      d.escapeChar !== void 0 && (G = d.escapeChar + H),
                        d.escapeFormulae instanceof RegExp
                          ? (C = d.escapeFormulae)
                          : typeof d.escapeFormulae == "boolean" &&
                            d.escapeFormulae &&
                            (C = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(Z(H), "g"));
              if (
                (typeof c == "string" && (c = JSON.parse(c)), Array.isArray(c))
              ) {
                if (!c.length || Array.isArray(c[0])) return Q(null, c, q);
                if (typeof c[0] == "object")
                  return Q(F || Object.keys(c[0]), c, q);
              } else if (typeof c == "object")
                return (
                  typeof c.data == "string" && (c.data = JSON.parse(c.data)),
                  Array.isArray(c.data) &&
                    (c.fields || (c.fields = (c.meta && c.meta.fields) || F),
                    c.fields ||
                      (c.fields = Array.isArray(c.data[0])
                        ? c.fields
                        : typeof c.data[0] == "object"
                          ? Object.keys(c.data[0])
                          : []),
                    Array.isArray(c.data[0]) ||
                      typeof c.data[0] == "object" ||
                      (c.data = [c.data])),
                  Q(c.fields || [], c.data || [], q)
                );
              throw new Error("Unable to serialize unrecognized input");
              function Q(O, M, ce) {
                var ne = "",
                  he =
                    (typeof O == "string" && (O = JSON.parse(O)),
                    typeof M == "string" && (M = JSON.parse(M)),
                    Array.isArray(O) && 0 < O.length),
                  Fe = !Array.isArray(M[0]);
                if (he && j) {
                  for (var Y = 0; Y < O.length; Y++)
                    0 < Y && (ne += x), (ne += I(O[Y], Y));
                  0 < M.length && (ne += L);
                }
                for (var R = 0; R < M.length; R++) {
                  var U = (he ? O : M[R]).length,
                    W = !1,
                    re = he
                      ? Object.keys(M[R]).length === 0
                      : M[R].length === 0;
                  if (
                    (ce &&
                      !he &&
                      (W =
                        ce === "greedy"
                          ? M[R].join("").trim() === ""
                          : M[R].length === 1 && M[R][0].length === 0),
                    ce === "greedy" && he)
                  ) {
                    for (var pe = [], le = 0; le < U; le++) {
                      var se = Fe ? O[le] : le;
                      pe.push(M[R][se]);
                    }
                    W = pe.join("").trim() === "";
                  }
                  if (!W) {
                    for (var J = 0; J < U; J++) {
                      0 < J && !re && (ne += x);
                      var ve = he && Fe ? O[J] : J;
                      ne += I(M[R][ve], J);
                    }
                    R < M.length - 1 && (!ce || (0 < U && !re)) && (ne += L);
                  }
                }
                return ne;
              }
              function I(O, M) {
                var ce, ne;
                return O == null
                  ? ""
                  : O.constructor === Date
                    ? JSON.stringify(O).slice(1, 25)
                    : ((ne = !1),
                      C &&
                        typeof O == "string" &&
                        C.test(O) &&
                        ((O = "'" + O), (ne = !0)),
                      (ce = O.toString().replace(b, G)),
                      (ne =
                        ne ||
                        m === !0 ||
                        (typeof m == "function" && m(O, M)) ||
                        (Array.isArray(m) && m[M]) ||
                        ((he, Fe) => {
                          for (var Y = 0; Y < Fe.length; Y++)
                            if (-1 < he.indexOf(Fe[Y])) return !0;
                          return !1;
                        })(ce, A.BAD_DELIMITERS) ||
                        -1 < ce.indexOf(x) ||
                        ce.charAt(0) === " " ||
                        ce.charAt(ce.length - 1) === " ")
                        ? H + ce + H
                        : ce);
              }
            }),
            (A.RECORD_SEP = ""),
            (A.UNIT_SEP = ""),
            (A.BYTE_ORDER_MARK = "\uFEFF"),
            (A.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              A.BYTE_ORDER_MARK,
            ]),
            (A.WORKERS_SUPPORTED = !Be && !!X.Worker),
            (A.NODE_STREAM_INPUT = 1),
            (A.LocalChunkSize = 10485760),
            (A.RemoteChunkSize = 5242880),
            (A.DefaultDelimiter = ","),
            (A.Parser = ae),
            (A.ParserHandle = $),
            (A.NetworkStreamer = Se),
            (A.FileStreamer = Le),
            (A.StringStreamer = B),
            (A.ReadableStreamStreamer = N),
            X.jQuery &&
              ((P = X.jQuery).fn.parse = function (c) {
                var d = c.config || {},
                  m = [];
                return (
                  this.each(function (L) {
                    if (
                      !(
                        P(this).prop("tagName").toUpperCase() === "INPUT" &&
                        P(this).attr("type").toLowerCase() === "file" &&
                        X.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var H = 0; H < this.files.length; H++)
                      m.push({
                        file: this.files[H],
                        inputElem: this,
                        instanceConfig: P.extend({}, d),
                      });
                  }),
                  j(),
                  this
                );
                function j() {
                  if (m.length === 0) k(c.complete) && c.complete();
                  else {
                    var L,
                      H,
                      G,
                      q,
                      F = m[0];
                    if (k(c.before)) {
                      var C = c.before(F.file, F.inputElem);
                      if (typeof C == "object") {
                        if (C.action === "abort")
                          return (
                            (L = "AbortError"),
                            (H = F.file),
                            (G = F.inputElem),
                            (q = C.reason),
                            void (k(c.error) && c.error({ name: L }, H, G, q))
                          );
                        if (C.action === "skip") return void x();
                        typeof C.config == "object" &&
                          (F.instanceConfig = P.extend(
                            F.instanceConfig,
                            C.config,
                          ));
                      } else if (C === "skip") return void x();
                    }
                    var b = F.instanceConfig.complete;
                    (F.instanceConfig.complete = function (Q) {
                      k(b) && b(Q, F.file, F.inputElem), x();
                    }),
                      A.parse(F.file, F.instanceConfig);
                  }
                }
                function x() {
                  m.splice(0, 1), j();
                }
              }),
            Ee &&
              (X.onmessage = function (c) {
                (c = c.data),
                  A.WORKER_ID === void 0 && c && (A.WORKER_ID = c.workerId),
                  typeof c.input == "string"
                    ? X.postMessage({
                        workerId: A.WORKER_ID,
                        results: A.parse(c.input, c.config),
                        finished: !0,
                      })
                    : ((X.File && c.input instanceof File) ||
                        c.input instanceof Object) &&
                      (c = A.parse(c.input, c.config)) &&
                      X.postMessage({
                        workerId: A.WORKER_ID,
                        results: c,
                        finished: !0,
                      });
              }),
            ((Se.prototype = Object.create(te.prototype)).constructor = Se),
            ((Le.prototype = Object.create(te.prototype)).constructor = Le),
            ((B.prototype = Object.create(B.prototype)).constructor = B),
            ((N.prototype = Object.create(te.prototype)).constructor = N),
            A
          );
        });
      },
    },
  ]);
})();

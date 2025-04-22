/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3270],
  {
    79908: (e, t, r) => {
      r.d(t, { o6: () => le, we: () => ae, Vc: () => X });
      var i,
        n,
        s = r(90626),
        a = r(20194),
        l = r(54806),
        o = r(75233),
        c = r(51614),
        u = r(22837),
        m = r(68950),
        d = r(56545),
        g = r(23809),
        B = r(80613),
        p = r.n(B),
        b = r(89068);
      class _ extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || b.Sg(_.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    n: 1,
                    br: b.qM.readFixed64String,
                    bw: b.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: b.qM.readBool, bw: b.gp.writeBool },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = b.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class w extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class y extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || b.Sg(y.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: b.qM.readFixed64String,
                    bw: b.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = b.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class M extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.snippets || b.Sg(M.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { snippets: { n: 1, c: f, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = b.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class f extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.gid || b.Sg(f.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  gid: {
                    n: 1,
                    br: b.qM.readFixed64String,
                    bw: b.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: b.qM.readFixed64String,
                    bw: b.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: b.qM.readBool, bw: b.gp.writeBool },
                  published: { n: 4, br: b.qM.readBool, bw: b.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                  event_type: { n: 7, br: b.qM.readEnum, bw: b.gp.writeEnum },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = b.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class z extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.requests || b.Sg(z.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  requests: { n: 1, c: S, r: !0, q: !0 },
                  cursor: { n: 2, br: b.qM.readString, bw: b.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = b.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class S extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || b.Sg(S.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  branch: { n: 4, br: b.qM.readString, bw: b.gp.writeString },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = b.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class R extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.matches || b.Sg(R.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  matches: { n: 1, c: h, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = b.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class h extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || b.Sg(h.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                  build_id: { n: 2, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                  branch: { n: 3, br: b.qM.readString, bw: b.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: b.qM.readFixed64String,
                    bw: b.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = b.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, d.I8)(_, t), w, {
            ePrivilege: 1,
          });
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, d.I8)(y, t),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, d.I8)(z, t),
              R,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {}));
      class C extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.client_instanceid || b.Sg(C.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = b.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class q extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.protocol_version || b.Sg(q.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  protocol_version: {
                    n: 1,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  os: { n: 2, br: b.qM.readString, bw: b.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = b.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class j extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class v extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.sessions || b.Sg(v.M()),
            B.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  sessions: { n: 1, c: W, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = b.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class W extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.client_instanceid || b.Sg(W.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  protocol_version: {
                    n: 2,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  os_name: { n: 3, br: b.qM.readString, bw: b.gp.writeString },
                  machine_name: {
                    n: 4,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                  os_type: { n: 5, br: b.qM.readInt32, bw: b.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: b.qM.readInt32,
                    bw: b.gp.writeInt32,
                  },
                  realm: { n: 7, br: b.qM.readInt32, bw: b.gp.writeInt32 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = b.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class I extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.client_instanceid || b.Sg(I.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = b.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class U extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.package_version || b.Sg(U.M()),
            B.Message.initialize(this, e, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  package_version: {
                    n: 1,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  os: { n: 2, br: b.qM.readString, bw: b.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                  ip_public: {
                    n: 4,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                  ip_private: {
                    n: 5,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                  bytes_available: {
                    n: 6,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  running_games: { n: 7, c: O, r: !0, q: !0 },
                  protocol_version: {
                    n: 8,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  clientcomm_version: {
                    n: 9,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  local_users: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: b.qM.readUint32,
                    pbr: b.qM.readPackedUint32,
                    bw: b.gp.writeRepeatedUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = b.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class O extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.appid || b.Sg(O.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                  extra_info: {
                    n: 2,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                  time_running_sec: {
                    n: 3,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = b.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class F extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.client_info || b.Sg(F.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = { proto: F, fields: { client_info: { n: 1, c: U } } }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = b.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class T extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.fields || b.Sg(T.M()),
            B.Message.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  fields: { n: 1, br: b.qM.readString, bw: b.gp.writeString },
                  filters: { n: 2, br: b.qM.readString, bw: b.gp.writeString },
                  client_instanceid: {
                    n: 3,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  include_client_info: {
                    n: 4,
                    br: b.qM.readBool,
                    bw: b.gp.writeBool,
                  },
                  language: { n: 5, br: b.qM.readString, bw: b.gp.writeString },
                  filter_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: b.qM.readUint32,
                    pbr: b.qM.readPackedUint32,
                    bw: b.gp.writeRepeatedUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = b.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class A extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.bytes_available || b.Sg(A.M()),
            B.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  apps: { n: 2, c: E, r: !0, q: !0 },
                  client_info: { n: 3, c: U },
                  refetch_interval_sec_full: {
                    n: 4,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    n: 5,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  refetch_interval_sec_updating: {
                    n: 6,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = b.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class E extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appid || b.Sg(E.M()),
            B.Message.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                  app: { n: 2, br: b.qM.readString, bw: b.gp.writeString },
                  category: { n: 3, br: b.qM.readString, bw: b.gp.writeString },
                  app_type: { n: 4, br: b.qM.readString, bw: b.gp.writeString },
                  num_downloading: {
                    n: 8,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  bytes_download_rate: {
                    n: 11,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  bytes_downloaded: {
                    n: 12,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  bytes_to_download: {
                    n: 13,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  dlcs: { n: 17, c: G, r: !0, q: !0 },
                  favorite: { n: 18, br: b.qM.readBool, bw: b.gp.writeBool },
                  auto_update: { n: 19, br: b.qM.readBool, bw: b.gp.writeBool },
                  installed: { n: 20, br: b.qM.readBool, bw: b.gp.writeBool },
                  download_paused: {
                    n: 21,
                    br: b.qM.readBool,
                    bw: b.gp.writeBool,
                  },
                  changing: { n: 22, br: b.qM.readBool, bw: b.gp.writeBool },
                  available_on_platform: {
                    n: 23,
                    br: b.qM.readBool,
                    bw: b.gp.writeBool,
                  },
                  bytes_staged: {
                    n: 24,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  bytes_to_stage: {
                    n: 25,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  bytes_required: {
                    n: 26,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  source_buildid: {
                    n: 27,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  target_buildid: {
                    n: 28,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    n: 29,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  queue_position: {
                    n: 30,
                    d: -1,
                    br: b.qM.readInt32,
                    bw: b.gp.writeInt32,
                  },
                  uninstalling: {
                    n: 31,
                    br: b.qM.readBool,
                    bw: b.gp.writeBool,
                  },
                  rt_time_scheduled: {
                    n: 32,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  running: { n: 33, br: b.qM.readBool, bw: b.gp.writeBool },
                  update_percentage: {
                    n: 34,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = b.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class G extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appid || b.Sg(G.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: { n: 1, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                  app: { n: 2, br: b.qM.readString, bw: b.gp.writeString },
                  installed: {
                    n: 3,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = b.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class x extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.appid || b.Sg(x.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = b.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class L extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class D extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || b.Sg(D.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = b.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class N extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class P extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || b.Sg(P.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  action: {
                    n: 2,
                    q: !0,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 3,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = b.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class k extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.client_instanceid || b.Sg(k.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  appid: {
                    n: 2,
                    q: !0,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
                  query_params: {
                    n: 3,
                    br: b.qM.readString,
                    bw: b.gp.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = b.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class $ extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class K extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class H extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.client_instanceid || b.Sg(H.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  enable: { n: 2, br: b.qM.readBool, bw: b.gp.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = b.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class Q extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      !(function (e) {
        (e.GetClientLogonInfo = function (e, t) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, d.I8)(C, t),
            q,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAllClientLogonInfo = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, d.I8)(j, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClientInfo = function (e, t) {
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, d.I8)(I, t), F, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, d.I8)(T, t),
              A,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, d.I8)(x, t),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.UninstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, d.I8)(D, t),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.LaunchClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, d.I8)(k, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, t) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, d.I8)(P, t),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, t) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, d.I8)(H, t),
              Q,
              { ePrivilege: 1 },
            );
          });
      })(n || (n = {}));
      const V = "RemoteDownload_OnlineClient",
        Y = "RemoteDownload_ClientAppList",
        Z = "RemoteDownload_ClientAppData";
      class J extends Error {
        constructor(e, t) {
          super(e), (this.result = t);
        }
        result;
      }
      function X() {
        const e = (0, g.KV)(),
          t = (0, m.LH)();
        return (0, a.I)({
          queryKey: [V, t],
          queryFn: async () => {
            const t = d.w.Init(j),
              r = await n.GetAllClientLogonInfo(e, t);
            if (1 !== r.GetEResult())
              throw (
                (console.error(
                  "Received error from GetAllClientLogonInfo",
                  r.GetEResult(),
                  r.Hdr().transport_error(),
                ),
                new Error(
                  `Error from GetAllClientLogonInfo: ${r.GetEResult()}`,
                ))
              );
            const i = [];
            for (const e of r.Body().sessions())
              e.device_type() !== u.zm.k_EGamingDeviceType_Unknown &&
                i.push(e.toObject());
            return {
              sessions: i,
              refetchInterval: r.Body().refetch_interval_sec() || 300,
            };
          },
          staleTime: 3e5,
          refetchInterval: (e) => 1e3 * (e.state.data?.refetchInterval || 300),
        });
      }
      class ee {
        constructor(e) {
          Object.assign(this, e.toObject()),
            (this.bytes_to_download = parseInt(e.bytes_to_download()) || 0),
            (this.bytes_downloaded = parseInt(e.bytes_downloaded()) || 0),
            (this.bytes_staged = parseInt(e.bytes_staged()) || 0),
            (this.bytes_to_stage = parseInt(e.bytes_to_stage()) || 0),
            (this.bytes_required = parseInt(e.bytes_required()) || 0);
        }
        appid;
        app;
        category;
        app_type;
        num_downloading;
        bytes_download_rate;
        bytes_downloaded;
        bytes_to_download;
        favorite;
        auto_update;
        installed;
        download_paused;
        changing;
        available_on_platform;
        bytes_staged;
        bytes_to_stage;
        bytes_required;
        source_buildid;
        target_buildid;
        estimated_seconds_remaining;
        queue_position;
        uninstalling;
        rt_time_scheduled;
        update_percentage;
        BIsDownloading() {
          return this.num_downloading > 0;
        }
        SetDownloading() {
          (this.num_downloading = 1), (this.download_paused = !1);
        }
        SetPaused(e) {
          (this.download_paused = e), (this.num_downloading = e ? 0 : 1);
        }
        BIsAtTopOfQueue() {
          return 0 === this.queue_position;
        }
        BIsPaused() {
          return (
            this.download_paused &&
            (this.bytes_downloaded < this.bytes_to_download ||
              this.bytes_staged < this.bytes_to_stage ||
              -1 != this.queue_position)
          );
        }
        BHasPendingUpdate() {
          return (
            !this.BIsDownloading() &&
            !this.download_paused &&
            (this.bytes_downloaded < this.bytes_to_download ||
              this.bytes_staged < this.bytes_to_stage)
          );
        }
        GetPercentComplete() {
          return this.update_percentage
            ? this.update_percentage
            : this.bytes_to_download
              ? Math.floor(
                  (100 * this.bytes_downloaded) / this.bytes_to_download,
                )
              : 0;
        }
      }
      async function te(e, t, r) {
        const i = t.client_instanceid,
          s = d.w.Init(T);
        s.Body().set_fields("games"),
          s.Body().set_filters(r),
          s.Body().set_client_instanceid(i),
          s.Body().set_include_client_info(!0);
        const a = await n.GetClientAppList(e, s);
        if (1 !== a.GetEResult())
          throw (
            (console.error(
              "Received error from GetClientAppList",
              a.GetEResult(),
              a.Hdr().transport_error(),
            ),
            new J(
              `Error from GetClientAppList: ${a.GetEResult()}`,
              a.GetEResult(),
            ))
          );
        const l = new Map();
        for (const e of a.Body().apps()) {
          const t = new ee(e);
          l.set(e.appid(), t);
        }
        return {
          session: t,
          mapApps: l,
          clientInfo: a.Body().client_info().toObject(),
          refetchIntervals: {
            full: a.Body().refetch_interval_sec_full() || 3600,
            changing: a.Body().refetch_interval_sec_changing() || 60,
            updating: a.Body().refetch_interval_sec_updating() || 10,
          },
        };
      }
      function re(e, t, r) {
        return [Y, e, t, r];
      }
      function ie(e, t = !0) {
        const r = X(),
          i = (0, g.KV)(),
          n = (0, m.LH)(),
          a = (e) => {
            t && ((21 != e.result && 16 != e.result) || r.refetch());
          },
          c = (0, l.E)({
            queries: (r.data?.sessions || []).map((e) => ({
              queryKey: re(n, e.client_instanceid, "none"),
              queryFn: async () => te(i, e, "none"),
              staletime: 36e5,
              refetchInterval: (e) =>
                1e3 * (e.state.data?.refetchIntervals.full || 3600),
              enabled: r.isSuccess && !r.isFetching,
              onError: a,
              retry: t,
            })),
          }),
          u = (0, s.useCallback)(
            (t) => {
              if (!e) return t;
              const r = new Map(Array.from(t.mapApps.entries()).filter(e));
              return { ...t, mapApps: r };
            },
            [e],
          ),
          d = (0, o.jE)(),
          B = (0, l.E)({
            queries: (r.data?.sessions || []).map((e, r) => ({
              queryKey: re(n, e.client_instanceid, "changing"),
              queryFn: async () =>
                (async function (e, t, r, i) {
                  if (!i) return;
                  const n = await te(e, t, r);
                  for (const [e, t] of n.mapApps) i.mapApps.set(e, t);
                  return { ...n, mapApps: i.mapApps };
                })(i, e, "changing", c[r].data),
              enabled: c[r].isSuccess && !c[r].isFetching,
              staletime: 1e4,
              select: u,
              refetchInterval: (e) => {
                const t = e.state.data;
                if (!t) return 6e4;
                let r = !1;
                for (const e of t.mapApps.values())
                  if (e.BIsDownloading() || e.uninstalling) {
                    r = !0;
                    break;
                  }
                const i = t.refetchIntervals;
                return 1e3 * (r ? i.updating : i.changing);
              },
              onError: a,
              retry: t,
            })),
          });
        return {
          rgQueries: B.map((e, t) =>
            c[t].isError && !c[t].isFetching ? c[t] : e,
          ),
          refetch: () => {
            for (const e of r.data?.sessions || []) {
              const t = re(n, e.client_instanceid, "changing");
              d.removeQueries({ queryKey: t });
            }
            for (const e of c) e.refetch();
          },
        };
      }
      function ne(e, t) {
        return [Z, e, t];
      }
      function se(e, t = !0) {
        const r = (0, m.LH)(),
          { rgQueries: i } = ie(void 0, t);
        return (0, a.I)({
          queryKey: ne(r, e),
          queryFn: () => {
            const t = new Map();
            for (const r of i)
              if (r.isSuccess) {
                const i = r.data?.session.client_instanceid,
                  n = r.data?.mapApps,
                  s = n.get(e);
                s &&
                  t.set(i, {
                    session: r.data.session,
                    app: s,
                    clientInfo: r.data.clientInfo,
                  });
              }
            return t;
          },
          enabled: i.reduce((e, t) => e && t.isSuccess && !t.isFetching, !0),
          staleTime: 0,
          gcTime: 0,
        });
      }
      function ae(e, t, r) {
        const i = (0, g.KV)(),
          s = se(e),
          a = (0, m.LH)(),
          l = (0, o.jE)();
        return (0, c.n)({
          mutationFn: async () => {
            const r = d.w.Init(x);
            r.Body().set_appid(e), r.Body().set_client_instanceid(t);
            const o = await n.InstallClientApp(i, r);
            if (1 != o.GetEResult())
              throw (
                (console.error(
                  "Received error from InstallClientApp",
                  o.GetEResult(),
                ),
                new Error(`Error from InstallClientApp: ${o.GetEResult()}`))
              );
            const c = s?.data;
            c && c.get(t) && c.get(t).app.SetDownloading(),
              l.setQueryData(ne(a, e), c),
              s.refetch();
          },
          onSuccess: r,
        });
      }
      async function le(e, t, r, i) {
        const s = d.w.Init(k);
        s.Body().set_appid(r),
          s.Body().set_client_instanceid(t),
          s.Body().set_query_params(i);
        const a = await n.LaunchClientApp(e, s);
        if (1 !== a.GetEResult())
          throw (
            (console.error(
              "Received error from LaunchClientApp",
              a.GetEResult(),
              a.Hdr().transport_error(),
            ),
            new Error(`Error from LaunchClientApp: ${a.GetEResult()}`))
          );
      }
    },
    82477: (e, t, r) => {
      r.d(t, { Cg: () => d, pZ: () => B, vg: () => g });
      var i = r(90626),
        n = r(738),
        s = r(61859),
        a = r(78327),
        l = r(97436),
        o = r(72034),
        c = r(28240),
        u = r(51706);
      function m(e) {
        return i.createElement(
          n.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          i.createElement(p, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function d(e) {
        const { redirectURL: t = window.location.href } = e;
        return i.createElement(
          u.EN,
          { active: !0 },
          i.createElement(m, { redirectURL: t }),
        );
      }
      function g() {
        (0, n.pg)(
          i.createElement(m, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function B(e, t) {
        (0, n.pg)(
          i.createElement(m, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function p(e) {
        const { redirectURL: t, guestOption: r } = e,
          [n] = (0, i.useState)(
            new o.D(a.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [s, u] = (0, i.useState)(!1);
        return i.createElement(
          "div",
          null,
          s
            ? i.createElement(l.Fn, null)
            : i.createElement(
                l.YN,
                {
                  autoFocus: !0,
                  transport: n,
                  platform: 2,
                  onComplete: (e) => {
                    e == c.wI.k_PrimaryDomainFail
                      ? u(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                r && i.createElement(l.Mk, { redirectURL: t }),
              ),
        );
      }
    },
  },
]);

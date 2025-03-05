/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3270],
  {
    79908: (e, t, r) => {
      r.d(t, { o6: () => oe, we: () => le, Vc: () => ee });
      var i = r(90626),
        n = r(20194),
        a = r(54806),
        s = r(75233),
        l = r(51614),
        o = r(22837),
        c = r(68950),
        m = r(56545),
        u = r(23809),
        d = r(80613),
        B = r(89068);
      const p = d.Message;
      class g extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || B.Sg(g.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = B.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class b extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), p.initialize(this, e, 0, -1, void 0, null);
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
          let t = new d.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class _ extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || B.Sg(_.M()),
            p.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = B.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class y extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.snippets || B.Sg(y.M()),
            p.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { snippets: { n: 1, c: w, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = B.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class w extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.gid || B.Sg(w.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  gid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: B.qM.readBool, bw: B.gp.writeBool },
                  published: { n: 4, br: B.qM.readBool, bw: B.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  event_type: { n: 7, br: B.qM.readEnum, bw: B.gp.writeEnum },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = B.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class f extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.requests || B.Sg(f.M()),
            p.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  requests: { n: 1, c: M, r: !0, q: !0 },
                  cursor: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = B.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class M extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || B.Sg(M.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  branch: { n: 4, br: B.qM.readString, bw: B.gp.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = B.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class z extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.matches || B.Sg(z.M()),
            p.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  matches: { n: 1, c: S, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = B.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class S extends p {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || B.Sg(S.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  build_id: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  branch: { n: 3, br: B.qM.readString, bw: B.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = B.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var R;
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, m.I8)(g, t), b, {
            ePrivilege: 1,
          });
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, m.I8)(_, t),
              y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, m.I8)(f, t),
              z,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(R || (R = {}));
      const h = d.Message;
      class C extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.client_instanceid || B.Sg(C.M()),
            h.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = B.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class v extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.protocol_version || B.Sg(v.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  protocol_version: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  os: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = B.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class q extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class j extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.sessions || B.Sg(j.M()),
            h.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  sessions: { n: 1, c: W, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = B.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class W extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.client_instanceid || B.Sg(W.M()),
            h.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  protocol_version: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  os_name: { n: 3, br: B.qM.readString, bw: B.gp.writeString },
                  machine_name: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  os_type: { n: 5, br: B.qM.readInt32, bw: B.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: B.qM.readInt32,
                    bw: B.gp.writeInt32,
                  },
                  realm: { n: 7, br: B.qM.readInt32, bw: B.gp.writeInt32 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = B.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class I extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.client_instanceid || B.Sg(I.M()),
            h.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = B.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class U extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.package_version || B.Sg(U.M()),
            h.initialize(this, e, 0, -1, [7, 10], null);
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
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  os: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  ip_public: {
                    n: 4,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  ip_private: {
                    n: 5,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  bytes_available: {
                    n: 6,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  running_games: { n: 7, c: O, r: !0, q: !0 },
                  protocol_version: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  clientcomm_version: {
                    n: 9,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  local_users: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = B.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class O extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.appid || B.Sg(O.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  extra_info: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                  time_running_sec: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = B.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class T extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.client_info || B.Sg(T.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = { proto: T, fields: { client_info: { n: 1, c: U } } }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = B.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class F extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.fields || B.Sg(F.M()),
            h.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  fields: { n: 1, br: B.qM.readString, bw: B.gp.writeString },
                  filters: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  client_instanceid: {
                    n: 3,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  include_client_info: {
                    n: 4,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  language: { n: 5, br: B.qM.readString, bw: B.gp.writeString },
                  filter_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = B.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class E extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.bytes_available || B.Sg(E.M()),
            h.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  apps: { n: 2, c: A, r: !0, q: !0 },
                  client_info: { n: 3, c: U },
                  refetch_interval_sec_full: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    n: 5,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  refetch_interval_sec_updating: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = B.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class A extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || B.Sg(A.M()),
            h.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  app: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  category: { n: 3, br: B.qM.readString, bw: B.gp.writeString },
                  app_type: { n: 4, br: B.qM.readString, bw: B.gp.writeString },
                  num_downloading: {
                    n: 8,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  num_paused: {
                    n: 10,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  bytes_download_rate: {
                    n: 11,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  bytes_downloaded: {
                    n: 12,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  bytes_to_download: {
                    n: 13,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  dlcs: { n: 17, c: G, r: !0, q: !0 },
                  favorite: { n: 18, br: B.qM.readBool, bw: B.gp.writeBool },
                  auto_update: { n: 19, br: B.qM.readBool, bw: B.gp.writeBool },
                  installed: { n: 20, br: B.qM.readBool, bw: B.gp.writeBool },
                  download_paused: {
                    n: 21,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  changing: { n: 22, br: B.qM.readBool, bw: B.gp.writeBool },
                  available_on_platform: {
                    n: 23,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  bytes_staged: {
                    n: 24,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  bytes_to_stage: {
                    n: 25,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  bytes_required: {
                    n: 26,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  source_buildid: {
                    n: 27,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  target_buildid: {
                    n: 28,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    n: 29,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  queue_position: {
                    n: 30,
                    d: -1,
                    br: B.qM.readInt32,
                    bw: B.gp.writeInt32,
                  },
                  uninstalling: {
                    n: 31,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  rt_time_scheduled: {
                    n: 32,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  running: { n: 33, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = B.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class G extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appid || B.Sg(G.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  app: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  installed: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = B.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class x extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.appid || B.Sg(x.M()),
            h.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = B.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class N extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
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
          let t = new d.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class L extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appid || B.Sg(L.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = B.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class D extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class P extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || B.Sg(P.M()),
            h.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  action: {
                    n: 2,
                    q: !0,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 3,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = B.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class k extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.client_instanceid || B.Sg(k.M()),
            h.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  appid: {
                    n: 2,
                    q: !0,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  query_params: {
                    n: 3,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = B.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class K extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
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
          let t = new d.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class $ extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
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
          let t = new d.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class H extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.client_instanceid || B.Sg(H.M()),
            h.initialize(this, e, 0, -1, void 0, null);
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
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  enable: { n: 2, br: B.qM.readBool, bw: B.gp.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = B.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class Q extends h {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
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
          let t = new d.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      var V;
      !(function (e) {
        (e.GetClientLogonInfo = function (e, t) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, m.I8)(C, t),
            v,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAllClientLogonInfo = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, m.I8)(q, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClientInfo = function (e, t) {
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, m.I8)(I, t), T, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, m.I8)(F, t),
              E,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, m.I8)(x, t),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.UninstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, m.I8)(L, t),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.LaunchClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, m.I8)(k, t),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, t) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, m.I8)(P, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, t) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, m.I8)(H, t),
              Q,
              { ePrivilege: 1 },
            );
          });
      })(V || (V = {}));
      const Y = "RemoteDownload_OnlineClient",
        Z = "RemoteDownload_ClientAppList",
        J = "RemoteDownload_ClientAppData";
      class X extends Error {
        constructor(e, t) {
          super(e), (this.result = t);
        }
        result;
      }
      function ee() {
        const e = (0, u.KV)(),
          t = (0, c.LH)();
        return (0, n.I)({
          queryKey: [Y, t],
          queryFn: async () => {
            const t = m.w.Init(q),
              r = await V.GetAllClientLogonInfo(e, t);
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
              e.device_type() !== o.zm.k_EGamingDeviceType_Unknown &&
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
      class te {
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
        num_paused;
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
        BIsDownloading() {
          return this.num_downloading > 0;
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
      }
      async function re(e, t, r) {
        const i = t.client_instanceid,
          n = m.w.Init(F);
        n.Body().set_fields("games"),
          n.Body().set_filters(r),
          n.Body().set_client_instanceid(i),
          n.Body().set_include_client_info(!0);
        const a = await V.GetClientAppList(e, n);
        if (1 !== a.GetEResult())
          throw (
            (console.error(
              "Received error from GetClientAppList",
              a.GetEResult(),
              a.Hdr().transport_error(),
            ),
            new X(
              `Error from GetClientAppList: ${a.GetEResult()}`,
              a.GetEResult(),
            ))
          );
        const s = new Map();
        for (const e of a.Body().apps()) {
          const t = new te(e);
          s.set(e.appid(), t);
        }
        return {
          session: t,
          mapApps: s,
          clientInfo: a.Body().client_info().toObject(),
          refetchIntervals: {
            full: a.Body().refetch_interval_sec_full() || 3600,
            changing: a.Body().refetch_interval_sec_changing() || 60,
            updating: a.Body().refetch_interval_sec_updating() || 10,
          },
        };
      }
      function ie(e, t, r) {
        return [Z, e, t, r];
      }
      function ne(e, t = !0) {
        const r = ee(),
          n = (0, u.KV)(),
          l = (0, c.LH)(),
          o = (e) => {
            t && ((21 != e.result && 16 != e.result) || r.refetch());
          },
          m = (0, a.E)({
            queries: (r.data?.sessions || []).map((e) => ({
              queryKey: ie(l, e.client_instanceid, "none"),
              queryFn: async () => re(n, e, "none"),
              staletime: 36e5,
              refetchInterval: (e) =>
                1e3 * (e.state.data?.refetchIntervals.full || 3600),
              enabled: r.isSuccess && !r.isFetching,
              onError: o,
              retry: t,
            })),
          }),
          d = (0, i.useCallback)(
            (t) => {
              if (!e) return t;
              const r = new Map(Array.from(t.mapApps.entries()).filter(e));
              return { ...t, mapApps: r };
            },
            [e],
          ),
          B = (0, s.jE)(),
          p = (0, a.E)({
            queries: (r.data?.sessions || []).map((e, r) => ({
              queryKey: ie(l, e.client_instanceid, "changing"),
              queryFn: async () =>
                (async function (e, t, r, i) {
                  if (!i) return;
                  const n = await re(e, t, r);
                  for (const [e, t] of n.mapApps) i.mapApps.set(e, t);
                  return { ...n, mapApps: i.mapApps };
                })(n, e, "changing", m[r].data),
              enabled: m[r].isSuccess && !m[r].isFetching,
              staletime: 1e4,
              select: d,
              refetchInterval: (e) => {
                const t = e.state.data;
                if (!t) return 6e4;
                let r = !1;
                for (const e of t.mapApps.values())
                  if (e.num_downloading > 0 || e.uninstalling) {
                    r = !0;
                    break;
                  }
                const i = t.refetchIntervals;
                return 1e3 * (r ? i.updating : i.changing);
              },
              onError: o,
              retry: t,
            })),
          });
        return {
          rgQueries: p.map((e, t) =>
            m[t].isError && !m[t].isFetching ? m[t] : e,
          ),
          refetch: () => {
            for (const e of r.data?.sessions || []) {
              const t = ie(l, e.client_instanceid, "changing");
              B.removeQueries({ queryKey: t });
            }
            for (const e of m) e.refetch();
          },
        };
      }
      function ae(e, t) {
        return [J, e, t];
      }
      function se(e, t = !0) {
        const r = (0, c.LH)(),
          { rgQueries: i } = ne(void 0, t);
        return (0, n.I)({
          queryKey: ae(r, e),
          queryFn: () => {
            const t = new Map();
            for (const r of i)
              if (r.isSuccess) {
                const i = r.data?.session.client_instanceid,
                  n = r.data?.mapApps,
                  a = n.get(e);
                a &&
                  t.set(i, {
                    session: r.data.session,
                    app: a,
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
      function le(e, t, r) {
        const i = (0, u.KV)(),
          n = se(e),
          a = (0, c.LH)(),
          o = (0, s.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const r = m.w.Init(x);
            r.Body().set_appid(e), r.Body().set_client_instanceid(t);
            const s = await V.InstallClientApp(i, r);
            if (1 != s.GetEResult())
              throw (
                (console.error(
                  "Received error from InstallClientApp",
                  s.GetEResult(),
                ),
                new Error(`Error from InstallClientApp: ${s.GetEResult()}`))
              );
            const l = n?.data;
            l &&
              l.get(t) &&
              ((l.get(t).app.num_downloading = 1),
              (l.get(t).app.download_paused = !1)),
              o.setQueryData(ae(a, e), l),
              n.refetch();
          },
          onSuccess: r,
        });
      }
      async function oe(e, t, r, i) {
        const n = m.w.Init(k);
        n.Body().set_appid(r),
          n.Body().set_client_instanceid(t),
          n.Body().set_query_params(i);
        const a = await V.LaunchClientApp(e, n);
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
      r.d(t, { Cg: () => d, pZ: () => p, vg: () => B });
      var i = r(90626),
        n = r(738),
        a = r(61859),
        s = r(78327),
        l = r(97436),
        o = r(72034),
        c = r(28240),
        m = r(51706);
      function u(e) {
        return i.createElement(
          n.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          i.createElement(g, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function d(e) {
        const { redirectURL: t = window.location.href } = e;
        return i.createElement(
          m.EN,
          { active: !0 },
          i.createElement(u, { redirectURL: t }),
        );
      }
      function B() {
        (0, n.pg)(
          i.createElement(u, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, a.we)("#Login_SignInTitle") },
        );
      }
      function p(e, t) {
        (0, n.pg)(
          i.createElement(u, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, a.we)("#Login_SignInTitle") },
        );
      }
      function g(e) {
        const { redirectURL: t, guestOption: r } = e,
          [n] = (0, i.useState)(
            new o.D(s.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [a, m] = (0, i.useState)(!1);
        return i.createElement(
          "div",
          null,
          a
            ? i.createElement(l.Fn, null)
            : i.createElement(
                l.YN,
                {
                  autoFocus: !0,
                  transport: n,
                  platform: 2,
                  onComplete: (e) => {
                    e == c.wI.k_PrimaryDomainFail
                      ? m(!0)
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
    51706: (e, t, r) => {
      r.d(t, {
        mt: () => o,
        Qs: () => p,
        o0: () => g.o0,
        eV: () => b.e,
        KG: () => g.KG,
        Ee: () => g.Ee,
        x_: () => s.x_,
        of: () => c,
        pY: () => g.pY,
        EN: () => a.E,
      });
      var i = r(90626),
        n = r(33737),
        a = r(21869),
        s = r(2654),
        l =
          (r(72739),
          r(48902),
          r(68451),
          r(25118),
          r(73745),
          r(52745),
          r(13871),
          r(78327));
      r(28460);
      const o = ({
        active: e,
        onDismiss: t,
        className: r,
        modalClassName: l,
        children: o,
      }) =>
        i.createElement(
          a.E,
          { active: e },
          i.createElement(
            s.x_,
            { onEscKeypress: t, className: l },
            i.createElement(n.UC, { className: r }, o),
          ),
        );
      function c(e) {
        const { className: t, children: r } = e;
        return i.createElement(
          a.E,
          { active: !0 },
          i.createElement("div", { className: t }, r),
        );
      }
      r(81194);
      var m = r(85585),
        u = r(7445),
        d = r(76217),
        B = r(88843);
      function p(e) {
        const { children: t, navID: r, closeModal: n } = e,
          a = i.createRef(),
          s = (e) => (e.stopPropagation(), e.preventDefault(), !0);
        return (0, l.Qn)() && !l.TS.IN_STEAMUI
          ? i.createElement(
              m.B2,
              {
                navID: r,
                navTreeRef: a,
                onCancelButton: n,
                className: B.GamepadOnlyModalWrapper,
              },
              i.createElement(
                u.q,
                null,
                i.createElement(
                  d.Z,
                  {
                    className: B.GamepadOnlyPanelWrapper,
                    onGamepadDirection: s,
                    focusableIfNoChildren: !0,
                  },
                  t,
                ),
              ),
            )
          : i.createElement(i.Fragment, null, t);
      }
      var g = r(78395),
        b = r(10411);
      r(76222);
    },
  },
]);

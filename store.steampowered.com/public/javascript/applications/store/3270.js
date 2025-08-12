/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3270],
  {
    79908: (e, t, r) => {
      r.d(t, { o6: () => ae, we: () => se, Vc: () => J });
      var i,
        n,
        s = r(90626),
        a = r(20194),
        l = r(54806),
        o = r(75233),
        c = r(51614),
        u = r(68950),
        m = r(56545),
        d = r(23809),
        g = r(80613),
        B = r.n(g),
        p = r(89068);
      class b extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || p.Sg(b.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
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
        static toObject(e, t) {
          return p.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class _ extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class w extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || p.Sg(w.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
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
        static toObject(e, t) {
          return p.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class y extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.snippets || p.Sg(y.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { snippets: { n: 1, c: M, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = p.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class M extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.gid || p.Sg(M.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  gid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: p.qM.readBool, bw: p.gp.writeBool },
                  published: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  event_type: { n: 7, br: p.qM.readEnum, bw: p.gp.writeEnum },
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
        static toObject(e, t) {
          return p.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class f extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.requests || p.Sg(f.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  requests: { n: 1, c: z, r: !0, q: !0 },
                  cursor: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = p.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class z extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appid || p.Sg(z.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  branch: { n: 4, br: p.qM.readString, bw: p.gp.writeString },
                },
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
        static toObject(e, t) {
          return p.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class S extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.matches || p.Sg(S.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  matches: { n: 1, c: R, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
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
        static toObject(e, t) {
          return p.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class R extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || p.Sg(R.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  build_id: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  branch: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
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
        static toObject(e, t) {
          return p.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, m.I8)(b, t), _, {
            ePrivilege: 1,
          });
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, m.I8)(w, t),
              y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, m.I8)(f, t),
              S,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {}));
      class h extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.client_instanceid || p.Sg(h.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                },
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
        static toObject(e, t) {
          return p.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class C extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.protocol_version || p.Sg(C.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  protocol_version: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  os: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = p.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class q extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (B().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class j extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.sessions || p.Sg(j.M()),
            g.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  sessions: { n: 1, c: v, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = p.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class v extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.client_instanceid || p.Sg(v.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  protocol_version: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  os_name: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  machine_name: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  os_type: { n: 5, br: p.qM.readInt32, bw: p.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: p.qM.readInt32,
                    bw: p.gp.writeInt32,
                  },
                  realm: { n: 7, br: p.qM.readInt32, bw: p.gp.writeInt32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = p.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class W extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.client_instanceid || p.Sg(W.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = p.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class I extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.package_version || p.Sg(I.M()),
            g.Message.initialize(this, e, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  package_version: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  os: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  ip_public: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  ip_private: {
                    n: 5,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  bytes_available: {
                    n: 6,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  running_games: { n: 7, c: U, r: !0, q: !0 },
                  protocol_version: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  clientcomm_version: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  local_users: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
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
        static toObject(e, t) {
          return p.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class U extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || p.Sg(U.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  extra_info: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  time_running_sec: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = p.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class O extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.client_info || p.Sg(O.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = { proto: O, fields: { client_info: { n: 1, c: I } } }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = p.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class F extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.fields || p.Sg(F.M()),
            g.Message.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  fields: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                  filters: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  client_instanceid: {
                    n: 3,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  include_client_info: {
                    n: 4,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  language: { n: 5, br: p.qM.readString, bw: p.gp.writeString },
                  filter_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
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
        static toObject(e, t) {
          return p.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class T extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.bytes_available || p.Sg(T.M()),
            g.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  apps: { n: 2, c: A, r: !0, q: !0 },
                  client_info: { n: 3, c: I },
                  refetch_interval_sec_full: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  refetch_interval_sec_updating: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = p.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class A extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || p.Sg(A.M()),
            g.Message.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  app: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  category: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  app_type: { n: 4, br: p.qM.readString, bw: p.gp.writeString },
                  num_downloading: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  bytes_download_rate: {
                    n: 11,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  bytes_downloaded: {
                    n: 12,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  bytes_to_download: {
                    n: 13,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  dlcs: { n: 17, c: E, r: !0, q: !0 },
                  favorite: { n: 18, br: p.qM.readBool, bw: p.gp.writeBool },
                  auto_update: { n: 19, br: p.qM.readBool, bw: p.gp.writeBool },
                  installed: { n: 20, br: p.qM.readBool, bw: p.gp.writeBool },
                  download_paused: {
                    n: 21,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  changing: { n: 22, br: p.qM.readBool, bw: p.gp.writeBool },
                  available_on_platform: {
                    n: 23,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  bytes_staged: {
                    n: 24,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  bytes_to_stage: {
                    n: 25,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  bytes_required: {
                    n: 26,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  source_buildid: {
                    n: 27,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  target_buildid: {
                    n: 28,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    n: 29,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  queue_position: {
                    n: 30,
                    d: -1,
                    br: p.qM.readInt32,
                    bw: p.gp.writeInt32,
                  },
                  uninstalling: {
                    n: 31,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  rt_time_scheduled: {
                    n: 32,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  running: { n: 33, br: p.qM.readBool, bw: p.gp.writeBool },
                  update_percentage: {
                    n: 34,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = p.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class E extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appid || p.Sg(E.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  app: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  installed: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = p.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class G extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appid || p.Sg(G.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = p.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class x extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class L extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appid || p.Sg(L.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = p.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class D extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (B().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class N extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appid || p.Sg(N.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  action: {
                    n: 2,
                    q: !0,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 3,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = p.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class P extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.client_instanceid || p.Sg(P.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  appid: {
                    n: 2,
                    q: !0,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  query_params: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = p.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class k extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class $ extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (B().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class K extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.client_instanceid || p.Sg(K.M()),
            g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  enable: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = p.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class H extends g.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), g.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      !(function (e) {
        (e.GetClientLogonInfo = function (e, t) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, m.I8)(h, t),
            C,
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
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, m.I8)(W, t), O, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, m.I8)(F, t),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, m.I8)(G, t),
              x,
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
              (0, m.I8)(P, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, t) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, m.I8)(N, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, t) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, m.I8)(K, t),
              H,
              { ePrivilege: 1 },
            );
          });
      })(n || (n = {}));
      const Q = "RemoteDownload_OnlineClient",
        V = "RemoteDownload_ClientAppList",
        Y = "RemoteDownload_ClientAppData";
      class Z extends Error {
        constructor(e, t) {
          super(e), (this.result = t);
        }
        result;
      }
      function J() {
        const e = (0, d.KV)(),
          t = (0, u.LH)();
        return (0, a.I)({
          queryKey: [Q, t],
          queryFn: async () => {
            const t = m.w.Init(q),
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
              0 !== e.device_type() && i.push(e.toObject());
            return {
              sessions: i,
              refetchInterval: r.Body().refetch_interval_sec() || 300,
            };
          },
          staleTime: 3e5,
          refetchInterval: (e) => 1e3 * (e.state.data?.refetchInterval || 300),
        });
      }
      class X {
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
      async function ee(e, t, r) {
        const i = t.client_instanceid,
          s = m.w.Init(F);
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
            new Z(
              `Error from GetClientAppList: ${a.GetEResult()}`,
              a.GetEResult(),
            ))
          );
        const l = new Map();
        for (const e of a.Body().apps()) {
          const t = new X(e);
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
      function te(e, t, r) {
        return [V, e, t, r];
      }
      function re(e, t = !0) {
        const r = J(),
          i = (0, d.KV)(),
          n = (0, u.LH)(),
          a = (e) => {
            t && ((21 != e.result && 16 != e.result) || r.refetch());
          },
          c = (0, l.E)({
            queries: (r.data?.sessions || []).map((e) => ({
              queryKey: te(n, e.client_instanceid, "none"),
              queryFn: async () => ee(i, e, "none"),
              staletime: 36e5,
              refetchInterval: (e) =>
                1e3 * (e.state.data?.refetchIntervals.full || 3600),
              enabled: r.isSuccess && !r.isFetching,
              onError: a,
              retry: t,
            })),
          }),
          m = (0, s.useCallback)(
            (t) => {
              if (!e) return t;
              const r = new Map(Array.from(t.mapApps.entries()).filter(e));
              return { ...t, mapApps: r };
            },
            [e],
          ),
          g = (0, o.jE)(),
          B = (0, l.E)({
            queries: (r.data?.sessions || []).map((e, r) => ({
              queryKey: te(n, e.client_instanceid, "changing"),
              queryFn: async () =>
                (async function (e, t, r, i) {
                  if (!i) return;
                  const n = await ee(e, t, r);
                  for (const [e, t] of n.mapApps) i.mapApps.set(e, t);
                  return { ...n, mapApps: i.mapApps };
                })(i, e, "changing", c[r].data),
              enabled: c[r].isSuccess && !c[r].isFetching,
              staletime: 1e4,
              select: m,
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
              const t = te(n, e.client_instanceid, "changing");
              g.removeQueries({ queryKey: t });
            }
            for (const e of c) e.refetch();
          },
        };
      }
      function ie(e, t) {
        return [Y, e, t];
      }
      function ne(e, t = !0) {
        const r = (0, u.LH)(),
          { rgQueries: i } = re(void 0, t);
        return (0, a.I)({
          queryKey: ie(r, e),
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
      function se(e, t, r) {
        const i = (0, d.KV)(),
          s = ne(e),
          a = (0, u.LH)(),
          l = (0, o.jE)();
        return (0, c.n)({
          mutationFn: async () => {
            const r = m.w.Init(G);
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
              l.setQueryData(ie(a, e), c),
              s.refetch();
          },
          onSuccess: r,
        });
      }
      async function ae(e, t, r, i) {
        const s = m.w.Init(P);
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4789],
  {
    96873: (e, t, r) => {
      r.d(t, { o6: () => J, we: () => Z, Vc: () => P });
      var i,
        n = r(90626),
        s = r(20194),
        a = r(54806),
        o = r(75233),
        l = r(51614),
        c = r(37085),
        u = r(22837),
        m = r(68950),
        d = r(56545),
        g = r(23809),
        p = (r(31540), r(80613)),
        B = r.n(p),
        b = r(89068);
      class _ extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.client_instanceid || b.Sg(_.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
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
          let t = new (B().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class w extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.protocol_version || b.Sg(w.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = b.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class y extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (B().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class f extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.sessions || b.Sg(f.M()),
            p.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  sessions: { n: 1, c: M, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: b.qM.readUint32,
                    bw: b.gp.writeUint32,
                  },
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
          let t = new (B().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class M extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.client_instanceid || b.Sg(M.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
          let t = new (B().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class z extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.client_instanceid || b.Sg(z.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
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
          let t = new (B().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class S extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.package_version || b.Sg(S.M()),
            p.Message.initialize(this, e, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
                  running_games: { n: 7, c: h, r: !0, q: !0 },
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
          let t = new (B().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class h extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || b.Sg(h.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (B().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class R extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.client_info || b.Sg(R.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = { proto: R, fields: { client_info: { n: 1, c: S } } }),
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
          let t = new (B().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class C extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.fields || b.Sg(C.M()),
            p.Message.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
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
          let t = new (B().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class q extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.bytes_available || b.Sg(q.M()),
            p.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  apps: { n: 2, c: U, r: !0, q: !0 },
                  client_info: { n: 3, c: S },
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
          let t = new (B().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class U extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || b.Sg(U.M()),
            p.Message.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
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
                  dlcs: { n: 17, c: I, r: !0, q: !0 },
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
          let t = new (B().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class I extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appid || b.Sg(I.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
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
          let t = new (B().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class j extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.appid || b.Sg(j.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
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
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = b.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class v extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class W extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.appid || b.Sg(W.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
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
          let t = new (B().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class O extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class T extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appid || b.Sg(T.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
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
          let t = new (B().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class F extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.client_instanceid || b.Sg(F.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
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
          let t = new (B().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class A extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class E extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class L extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.client_instanceid || b.Sg(L.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: b.qM.readUint64String,
                    bw: b.gp.writeUint64String,
                  },
                  enable: { n: 2, br: b.qM.readBool, bw: b.gp.writeBool },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = b.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return b.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return b.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class G extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new (B().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (B().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      !(function (e) {
        (e.GetClientLogonInfo = function (e, t) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, d.I8)(_, t),
            w,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAllClientLogonInfo = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, d.I8)(y, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClientInfo = function (e, t) {
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, d.I8)(z, t), R, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, d.I8)(C, t),
              q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, d.I8)(j, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.UninstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, d.I8)(W, t),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.LaunchClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, d.I8)(F, t),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, t) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, d.I8)(T, t),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, t) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, d.I8)(L, t),
              G,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
      const D = "RemoteDownload_OnlineClient",
        x = "RemoteDownload_ClientAppList",
        N = "RemoteDownload_ClientAppData";
      class k extends Error {
        constructor(e, t) {
          super(e), (this.result = t);
        }
        result;
      }
      function P() {
        const e = (0, g.KV)(),
          t = (0, m.LH)();
        return (0, s.I)({
          queryKey: [D, t],
          queryFn: async () => {
            const t = d.w.Init(y),
              r = await i.GetAllClientLogonInfo(e, t);
            if (r.GetEResult() !== c.d.k_EResultOK)
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
            const n = [];
            for (const e of r.Body().sessions())
              e.device_type() !== u.zm.k_EGamingDeviceType_Unknown &&
                n.push(e.toObject());
            return {
              sessions: n,
              refetchInterval: r.Body().refetch_interval_sec() || 300,
            };
          },
          staleTime: 3e5,
          refetchInterval: (e) => 1e3 * (e.state.data?.refetchInterval || 300),
        });
      }
      class K {
        constructor(e) {
          Object.assign(this, e.toObject()),
            (this.bytes_to_download = parseInt(e.bytes_to_download() ?? "0")),
            (this.bytes_downloaded = parseInt(e.bytes_downloaded() ?? "0")),
            (this.bytes_staged = parseInt(e.bytes_staged() ?? "0")),
            (this.bytes_to_stage = parseInt(e.bytes_to_stage() ?? "0")),
            (this.bytes_required = parseInt(e.bytes_required() ?? "0"));
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
          return void 0 !== this.num_downloading && this.num_downloading > 0;
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
            !!this.download_paused &&
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
      async function $(e, t, r) {
        const n = t.client_instanceid,
          s = d.w.Init(C);
        s.Body().set_fields("games"),
          s.Body().set_filters(r),
          s.Body().set_client_instanceid(n),
          s.Body().set_include_client_info(!0);
        const a = await i.GetClientAppList(e, s);
        if (a.GetEResult() !== c.d.k_EResultOK)
          throw (
            (console.error(
              "Received error from GetClientAppList",
              a.GetEResult(),
              a.Hdr().transport_error(),
            ),
            new k(
              `Error from GetClientAppList: ${a.GetEResult()}`,
              a.GetEResult(),
            ))
          );
        const o = new Map();
        for (const e of a.Body().apps()) {
          const t = new K(e);
          o.set(e.appid(), t);
        }
        return {
          session: t,
          mapApps: o,
          clientInfo: a.Body().client_info()?.toObject(),
          refetchIntervals: {
            full: a.Body().refetch_interval_sec_full() || 3600,
            changing: a.Body().refetch_interval_sec_changing() || 60,
            updating: a.Body().refetch_interval_sec_updating() || 10,
          },
        };
      }
      function H(e, t, r) {
        return [x, e, t, r];
      }
      function Q(e, t = !0) {
        const r = P(),
          i = (0, g.KV)(),
          s = (0, m.LH)(),
          l = (e) => {
            t &&
              ((e.result != c.d.k_EResultNotLoggedOn &&
                e.result != c.d.k_EResultTimeout) ||
                r.refetch());
          },
          u = (0, a.E)({
            queries: (r.data?.sessions || []).map((e) => ({
              queryKey: H(s, e.client_instanceid, "none"),
              queryFn: async () => $(i, e, "none"),
              staletime: 36e5,
              refetchInterval: (e) =>
                1e3 * (e.state.data?.refetchIntervals.full || 3600),
              enabled: r.isSuccess && !r.isFetching,
              onError: l,
              retry: t,
            })),
          }),
          d = (0, n.useCallback)(
            (t) => {
              if (!e) return t;
              const r = new Map(
                Array.from(t?.mapApps.entries() ?? []).filter(e),
              );
              return { ...t, mapApps: r };
            },
            [e],
          ),
          p = (0, o.jE)(),
          B = (0, a.E)({
            queries: (r.data?.sessions || []).map((e, r) => ({
              queryKey: H(s, e.client_instanceid, "changing"),
              queryFn: async () =>
                (async function (e, t, r, i) {
                  if (!i) return;
                  const n = await $(e, t, r);
                  for (const [e, t] of n.mapApps) i.mapApps.set(e, t);
                  return { ...n, mapApps: i.mapApps };
                })(i, e, "changing", u[r].data),
              enabled: u[r].isSuccess && !u[r].isFetching,
              staletime: 1e4,
              select: d,
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
              onError: l,
              retry: t,
            })),
          });
        return {
          rgQueries: B.map((e, t) =>
            u[t].isError && !u[t].isFetching ? u[t] : e,
          ),
          refetch: () => {
            for (const e of r.data?.sessions || []) {
              const t = H(s, e.client_instanceid, "changing");
              p.removeQueries({ queryKey: t });
            }
            for (const e of u) e.refetch();
          },
        };
      }
      function V(e, t) {
        return [N, e, t];
      }
      function Y(e, t = !0) {
        const r = (0, m.LH)(),
          { rgQueries: i } = Q(void 0, t);
        return (0, s.I)({
          queryKey: V(r, e),
          queryFn: () => {
            const t = new Map();
            for (const r of i)
              if (r.isSuccess) {
                const i = r.data?.session?.client_instanceid,
                  n = r.data?.mapApps,
                  s = n?.get(e);
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
      function Z(e, t, r) {
        const n = (0, g.KV)(),
          s = Y(e),
          a = (0, m.LH)(),
          u = (0, o.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const r = d.w.Init(j);
            r.Body().set_appid(e), r.Body().set_client_instanceid(t);
            const o = await i.InstallClientApp(n, r);
            if (o.GetEResult() != c.d.k_EResultOK)
              throw (
                (console.error(
                  "Received error from InstallClientApp",
                  o.GetEResult(),
                ),
                new Error(`Error from InstallClientApp: ${o.GetEResult()}`))
              );
            const l = s?.data;
            l && l.get(t) && l.get(t).app.SetDownloading(),
              u.setQueryData(V(a, e), l),
              s.refetch();
          },
          onSuccess: r,
        });
      }
      async function J(e, t, r, n) {
        const s = d.w.Init(F);
        s.Body().set_appid(r),
          s.Body().set_client_instanceid(t),
          s.Body().set_query_params(n);
        const a = await i.LaunchClientApp(e, s);
        if (a.GetEResult() !== c.d.k_EResultOK)
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
      r.d(t, { Cg: () => g, pZ: () => B, vg: () => p });
      var i = r(90626),
        n = r(738),
        s = r(61859),
        a = r(78327),
        o = r(92120),
        l = r(21565),
        c = r(72034),
        u = r(28240),
        m = r(51706);
      function d(e) {
        return i.createElement(
          n.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          i.createElement(b, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function g(e) {
        const { redirectURL: t = window.location.href } = e;
        return i.createElement(
          m.EN,
          { active: !0 },
          i.createElement(d, { redirectURL: t }),
        );
      }
      function p() {
        (0, n.pg)(
          i.createElement(d, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function B(e, t) {
        (0, n.pg)(
          i.createElement(d, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function b(e) {
        const { redirectURL: t, guestOption: r } = e,
          [n] = (0, i.useState)(
            new c.D(a.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [s, m] = (0, i.useState)(!1);
        return i.createElement(
          "div",
          null,
          s
            ? i.createElement(o.Fn, null)
            : i.createElement(
                o.YN,
                {
                  autoFocus: !0,
                  transport: n,
                  platform: l.SS.k_EAuthTokenPlatformType_WebBrowser,
                  onComplete: (e) => {
                    e == u.wI.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                r && i.createElement(o.Mk, { redirectURL: t }),
              ),
        );
      }
    },
  },
]);

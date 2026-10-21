/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68396],
    {
      90711: (Mi, hi, g) => {
        "use strict";
        g.d(hi, {
          DK: () => te,
          hW: () => ui,
          Lw: () => kr,
          ku: () => Wr,
          Mn: () => Nr,
          sW: () => mr,
          nn: () => l,
        });
        var l = {};
        g.r(l), g.d(l, { Tq: () => ur, TC: () => o, fe: () => ei });
        var mr = {};
        g.r(mr), g.d(mr, { rx: () => X, XP: () => K });
        var f = g(80613),
          u = g.n(f),
          e = g(75245),
          I = g(35038);
        const cr = 0,
          $ = 1,
          ur = 0,
          j = 1,
          gr = 2,
          P = 3,
          yi = 4,
          Rr = 5,
          ei = 6,
          _ = 7,
          w = 8,
          o = 9,
          m = 10,
          n = 11,
          or = 12,
          A = 13,
          v = 14,
          W = 15,
          X = 0,
          K = 1,
          er = 2;
        function wr(Q) {
          return "unknown EBroadcastChatPermission ( " + Q + " )";
        }
        function L(Q) {
          return "unknown EBroadcastWatchLocation ( " + Q + " )";
        }
        function Ii(Q) {
          return "unknown EBroadcastChatBan ( " + Q + " )";
        }
        function $r(Q) {
          return "unknown EBroadcastRestriction ( " + Q + " )";
        }
        class N extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              N.prototype.permission || e.Sg(N.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 4, br: e.qM.readString, bw: e.gp.writeString },
                    cellid: { n: 5, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    rtmp_token: {
                      n: 6,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    thumbnail_upload: {
                      n: 7,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    sysid: { n: 9, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    allow_webrtc: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = e.w0(N.M())), N.sm_mbf;
          }
          toObject(i = !1) {
            return N.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(N.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(N.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new N();
            return N.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(N.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return N.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(N.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class E extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              E.prototype.broadcast_id || e.Sg(E.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    thumbnail_upload_token: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    thumbnail_interval_seconds: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = e.w0(E.M())), E.sm_mbf;
          }
          toObject(i = !1) {
            return E.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(E.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(E.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new E();
            return E.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(E.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return E.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(E.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class tr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              tr.prototype.broadcast_id || e.Sg(tr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = e.w0(tr.M())), tr.sm_mbf;
          }
          toObject(i = !1) {
            return tr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(tr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(tr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new tr();
            return tr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(tr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(tr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class Mr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Mr.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new Mr();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Mr();
            return Mr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class D extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              D.prototype.broadcast_id || e.Sg(D.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    cellid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    as_rtmp: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    delay_seconds: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtmp_token: {
                      n: 5,
                      d: "0",
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    upload_ip_address: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_replay: { n: 7, br: e.qM.readBool, bw: e.gp.writeBool },
                    sysid: { n: 8, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = e.w0(D.M())), D.sm_mbf;
          }
          toObject(i = !1) {
            return D.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(D.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(D.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new D();
            return D.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(D.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return D.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(D.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class Z extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Z.prototype.upload_token || e.Sg(Z.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    upload_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    upload_address: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    enable_replay: {
                      n: 6,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    http_address: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = e.w0(Z.M())), Z.sm_mbf;
          }
          toObject(i = !1) {
            return Z.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Z.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Z.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Z();
            return Z.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Z.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Z.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class nr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              nr.prototype.broadcast_id || e.Sg(nr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    upload_token: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    upload_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    http_address: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_rtmp: { n: 7, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = e.w0(nr.M())), nr.sm_mbf;
          }
          toObject(i = !1) {
            return nr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(nr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(nr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new nr();
            return nr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(nr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(nr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class zr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              zr.prototype.steamid || e.Sg(zr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = e.w0(zr.M())), zr.sm_mbf;
          }
          toObject(i = !1) {
            return zr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(zr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(zr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new zr();
            return zr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(zr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(zr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class jr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              jr.prototype.gameid || e.Sg(jr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                    num_viewers: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    permission: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_rtmp: { n: 5, br: e.qM.readBool, bw: e.gp.writeBool },
                    seconds_delay: {
                      n: 6,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_publisher: {
                      n: 7,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    thumbnail_url: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    update_interval: {
                      n: 9,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_uploading: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    duration: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_replay: { n: 12, br: e.qM.readBool, bw: e.gp.writeBool },
                    is_capturing_vod: {
                      n: 13,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_store_whitelisted: {
                      n: 14,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = e.w0(jr.M())), jr.sm_mbf;
          }
          toObject(i = !1) {
            return jr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(jr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(jr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new jr();
            return jr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(jr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(jr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class vr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              vr.prototype.steamid || e.Sg(vr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = e.w0(vr.M())), vr.sm_mbf;
          }
          toObject(i = !1) {
            return vr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(vr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(vr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new vr();
            return vr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(vr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(vr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class pr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              pr.prototype.thumbnail_url || e.Sg(pr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    thumbnail_url: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    update_interval: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    num_viewers: {
                      n: 3,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    duration: { n: 4, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = e.w0(pr.M())), pr.sm_mbf;
          }
          toObject(i = !1) {
            return pr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(pr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(pr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new pr();
            return pr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(pr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(pr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class si extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              si.prototype.steamid || e.Sg(si.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              si.sm_m ||
                (si.sm_m = {
                  proto: si,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    client_cell: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    watch_location: {
                      n: 6,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    is_webrtc: { n: 7, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              si.sm_m
            );
          }
          static MBF() {
            return si.sm_mbf || (si.sm_mbf = e.w0(si.M())), si.sm_mbf;
          }
          toObject(i = !1) {
            return si.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(si.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(si.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new si();
            return si.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(si.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return si.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(si.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class Or extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Or.prototype.response || e.Sg(Or.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    response: { n: 1, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    mpd_url: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_id: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
                    num_viewers: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    permission: {
                      n: 7,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    is_rtmp: { n: 8, br: e.qM.readBool, bw: e.gp.writeBool },
                    seconds_delay: {
                      n: 9,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    viewer_token: {
                      n: 10,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      n: 11,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    heartbeat_interval: {
                      n: 12,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    thumbnail_url: {
                      n: 13,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_webrtc: { n: 14, br: e.qM.readBool, bw: e.gp.writeBool },
                    webrtc_session_id: {
                      n: 15,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      n: 16,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    webrtc_turn_server: {
                      n: 17,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_replay: { n: 18, br: e.qM.readBool, bw: e.gp.writeBool },
                    duration: {
                      n: 19,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      n: 20,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = e.w0(Or.M())), Or.sm_mbf;
          }
          toObject(i = !1) {
            return Or.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Or.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Or.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Or();
            return Or.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Or.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Or.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function xi(Q) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            Q +
            " )"
          );
        }
        class Y extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Y.prototype.steamid || e.Sg(Y.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    representation: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = e.w0(Y.M())), Y.sm_mbf;
          }
          toObject(i = !1) {
            return Y.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Y.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Y.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Y();
            return Y.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Y.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Y.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class ti extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ti.prototype.steamid || e.Sg(ti.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              ti.sm_m
            );
          }
          static MBF() {
            return ti.sm_mbf || (ti.sm_mbf = e.w0(ti.M())), ti.sm_mbf;
          }
          toObject(i = !1) {
            return ti.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ti.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ti.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ti();
            return ti.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ti.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ti.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class fr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              fr.prototype.steamid || e.Sg(fr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    approval_response: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = e.w0(fr.M())), fr.sm_mbf;
          }
          toObject(i = !1) {
            return fr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(fr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(fr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new fr();
            return fr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(fr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(fr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class ni extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ni.prototype.success || e.Sg(ni.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ni.sm_m ||
                (ni.sm_m = {
                  proto: ni,
                  fields: {
                    success: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              ni.sm_m
            );
          }
          static MBF() {
            return ni.sm_mbf || (ni.sm_mbf = e.w0(ni.M())), ni.sm_mbf;
          }
          toObject(i = !1) {
            return ni.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ni.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ni.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ni();
            return ni.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ni.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ni.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class br extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              br.prototype.permission || e.Sg(br.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    title: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    game_data_config: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = e.w0(br.M())), br.sm_mbf;
          }
          toObject(i = !1) {
            return br.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(br.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(br.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new br();
            return br.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(br.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return br.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(br.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class fi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return fi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new fi();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new fi();
            return fi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class q extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              q.prototype.steamid || e.Sg(q.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    state: { n: 2, br: e.qM.readEnum, bw: e.gp.writeEnum },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = e.w0(q.M())), q.sm_mbf;
          }
          toObject(i = !1) {
            return q.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(q.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(q.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new q();
            return q.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(q.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return q.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(q.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function Oi(Q) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            Q +
            " )"
          );
        }
        class Lr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Lr.prototype.broadcast_id || e.Sg(Lr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = e.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(i = !1) {
            return Lr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Lr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Lr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Lr();
            return Lr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Lr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Lr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class yr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              yr.prototype.broadcast_id || e.Sg(yr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    too_many_poor_uploads: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = e.w0(yr.M())), yr.sm_mbf;
          }
          toObject(i = !1) {
            return yr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(yr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(yr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new yr();
            return yr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(yr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(yr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class ai extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ai.prototype.broadcast_id || e.Sg(ai.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ai.sm_m ||
                (ai.sm_m = {
                  proto: ai,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              ai.sm_m
            );
          }
          static MBF() {
            return ai.sm_mbf || (ai.sm_mbf = e.w0(ai.M())), ai.sm_mbf;
          }
          toObject(i = !1) {
            return ai.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ai.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ai.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ai();
            return ai.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ai.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ai.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class Zr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Zr.prototype.broadcast_id || e.Sg(Zr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    num_viewers: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = e.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(i = !1) {
            return Zr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Zr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Zr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Zr();
            return Zr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Zr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Zr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class Qr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Qr.prototype.broadcast_channel_id || e.Sg(Qr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_channel_avatar: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = e.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(i = !1) {
            return Qr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Qr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Qr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Qr();
            return Qr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Qr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Qr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class Jr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Jr.prototype.thumbnail_upload_token || e.Sg(Jr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    thumbnail_upload_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    thumbnail_data: {
                      n: 3,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    thumbnail_width: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = e.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(i = !1) {
            return Jr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Jr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Jr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Jr();
            return Jr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Jr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Jr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class B extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              B.prototype.broadcast_upload_id || e.Sg(B.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    broadcast_upload_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = e.w0(B.M())), B.sm_mbf;
          }
          toObject(i = !1) {
            return B.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(B.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(B.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new B();
            return B.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(B.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return B.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(B.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class Ar extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ar.prototype.broadcaster_steamid || e.Sg(Ar.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = e.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(i = !1) {
            return Ar.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ar.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ar.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Ar();
            return Ar.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ar.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ar.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class xr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              xr.prototype.broadcast_id || e.Sg(xr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = e.w0(xr.M())), xr.sm_mbf;
          }
          toObject(i = !1) {
            return xr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(xr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(xr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new xr();
            return xr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(xr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(xr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class G extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              G.prototype.steamid || e.Sg(G.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    client_ip: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    client_cell: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = e.w0(G.M())), G.sm_mbf;
          }
          toObject(i = !1) {
            return G.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(G.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(G.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new G();
            return G.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(G.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return G.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(G.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class Br extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Br.prototype.chat_id || e.Sg(Br.M()),
              f.Message.initialize(this, i, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(i = !1) {
            return Br.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Br.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Br.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Br();
            return Br.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Br.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Br.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class kr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              kr.prototype.chat_id || e.Sg(kr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    message: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    instance_id: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    country_code: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = e.w0(kr.M())), kr.sm_mbf;
          }
          toObject(i = !1) {
            return kr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(kr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(kr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new kr();
            return kr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(kr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(kr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class Er extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Er.prototype.persona_name || e.Sg(Er.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    persona_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    in_game: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    result: { n: 3, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    cooldown_time_seconds: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = e.w0(Er.M())), Er.sm_mbf;
          }
          toObject(i = !1) {
            return Er.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Er.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Er.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Er();
            return Er.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Er.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Er.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class Nr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Nr.prototype.chat_id || e.Sg(Nr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = e.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(i = !1) {
            return Nr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Nr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Nr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Nr();
            return Nr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Nr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Nr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class Ir extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ir.prototype.result || e.Sg(Ir.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    result: { n: 1, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = e.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(i = !1) {
            return Ir.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ir.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ir.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Ir();
            return Ir.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ir.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ir.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class ui extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ui.prototype.chat_id || e.Sg(ui.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ui.sm_m ||
                (ui.sm_m = {
                  proto: ui,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    muted: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              ui.sm_m
            );
          }
          static MBF() {
            return ui.sm_mbf || (ui.sm_mbf = e.w0(ui.M())), ui.sm_mbf;
          }
          toObject(i = !1) {
            return ui.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ui.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ui.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ui();
            return ui.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ui.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ui.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class mi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return mi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new mi();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new mi();
            return mi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class Wr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Wr.prototype.chat_id || e.Sg(Wr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = e.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(i = !1) {
            return Wr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Wr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Wr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Wr();
            return Wr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Wr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Wr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class zi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return zi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new zi();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new zi();
            return zi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class Gr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Gr.prototype.chat_id || e.Sg(Gr.M()),
              f.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readFixed64String,
                      pbr: e.qM.readPackedFixed64String,
                      bw: e.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = e.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(i = !1) {
            return Gr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Gr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Gr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Gr();
            return Gr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Gr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Gr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class Dr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Dr.prototype.persona_names || e.Sg(Dr.M()),
              f.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: { persona_names: { n: 1, c: Kr, r: !0, q: !0 } },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = e.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(i = !1) {
            return Dr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Dr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Dr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Dr();
            return Dr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Dr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Dr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class Kr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Kr.prototype.steam_id || e.Sg(Kr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    steam_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    persona: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = e.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(i = !1) {
            return Kr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Kr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Kr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Kr();
            return Kr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Kr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Kr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class dr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              dr.prototype.steamid || e.Sg(dr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
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
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    broadcast_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    first_segment: {
                      n: 3,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    num_segments: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    clip_description: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = e.w0(dr.M())), dr.sm_mbf;
          }
          toObject(i = !1) {
            return dr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(dr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(dr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new dr();
            return dr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(dr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(dr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class a extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              a.prototype.broadcast_clip_id || e.Sg(a.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = e.w0(a.M())), a.sm_mbf;
          }
          toObject(i = !1) {
            return a.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(a.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(a.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new a();
            return a.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(a.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return a.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(a.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class b extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              b.prototype.broadcast_clip_id || e.Sg(b.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = e.w0(b.M())), b.sm_mbf;
          }
          toObject(i = !1) {
            return b.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(b.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(b.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new b();
            return b.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(b.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return b.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(b.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class h extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return h.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new h();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new h();
            return h.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return h.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class z extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              z.prototype.broadcast_clip_id || e.Sg(z.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    start_time: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_time: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    video_description: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = e.w0(z.M())), z.sm_mbf;
          }
          toObject(i = !1) {
            return z.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(z.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(z.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new z();
            return z.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(z.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return z.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(z.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class O extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return O.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new O();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new O();
            return O.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return O.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class x extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              x.prototype.broadcast_clip_id || e.Sg(x.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = e.w0(x.M())), x.sm_mbf;
          }
          toObject(i = !1) {
            return x.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(x.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(x.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new x();
            return x.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(x.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return x.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(x.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class F extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              F.prototype.broadcast_clip_id || e.Sg(F.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    video_id: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    accountid_broadcaster: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    accountid_clipmaker: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    video_description: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    start_time: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 10,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = e.w0(F.M())), F.sm_mbf;
          }
          toObject(i = !1) {
            return F.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(F.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(F.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new F();
            return F.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(F.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return F.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(F.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class S extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              S.prototype.broadcast_permission || e.Sg(S.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    update_token: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    broadcast_delay: {
                      n: 3,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    app_id: { n: 4, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    required_app_id: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 6,
                      d: cr,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 7,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    steamid: {
                      n: 8,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    wordban_list: {
                      n: 12,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = e.w0(S.M())), S.sm_mbf;
          }
          toObject(i = !1) {
            return S.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(S.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(S.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new S();
            return S.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(S.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return S.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(S.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class Di extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Di.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new Di();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Di();
            return Di.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class lr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              lr.prototype.ip || e.Sg(lr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    ip: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = e.w0(lr.M())), lr.sm_mbf;
          }
          toObject(i = !1) {
            return lr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(lr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(lr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new lr();
            return lr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(lr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(lr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class ar extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ar.prototype.broadcast_permission || e.Sg(ar.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    rtmp_host: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    rtmp_token: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    broadcast_delay: {
                      n: 4,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    app_id: { n: 5, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    required_app_id: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 7,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 8,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    steamid: {
                      n: 9,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 12,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    wordban_list: {
                      n: 13,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = e.w0(ar.M())), ar.sm_mbf;
          }
          toObject(i = !1) {
            return ar.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ar.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ar.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ar();
            return ar.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ar.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ar.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class ci extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ci.prototype.row_limit || e.Sg(ci.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ci.sm_m ||
                (ci.sm_m = {
                  proto: ci,
                  fields: {
                    row_limit: {
                      n: 1,
                      d: 100,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    start_time: {
                      n: 2,
                      d: 0,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    upload_id: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    session_id: {
                      n: 5,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              ci.sm_m
            );
          }
          static MBF() {
            return ci.sm_mbf || (ci.sm_mbf = e.w0(ci.M())), ci.sm_mbf;
          }
          toObject(i = !1) {
            return ci.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ci.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ci.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ci();
            return ci.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ci.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ci.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class gi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              gi.prototype.upload_stats || e.Sg(gi.M()),
              f.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gi.sm_m ||
                (gi.sm_m = {
                  proto: gi,
                  fields: { upload_stats: { n: 1, c: rr, r: !0, q: !0 } },
                }),
              gi.sm_m
            );
          }
          static MBF() {
            return gi.sm_mbf || (gi.sm_mbf = e.w0(gi.M())), gi.sm_mbf;
          }
          toObject(i = !1) {
            return gi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(gi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(gi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new gi();
            return gi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(gi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(gi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class rr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              rr.prototype.upload_result || e.Sg(rr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    upload_result: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    time_stopped: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    seconds_uploaded: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    max_viewers: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    resolution_x: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    avg_bandwidth: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    total_bytes: {
                      n: 8,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    app_id: { n: 9, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    total_unique_viewers: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    total_seconds_watched: {
                      n: 11,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    time_started: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    upload_id: {
                      n: 13,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    local_address: {
                      n: 14,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    remote_address: {
                      n: 15,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    frames_per_second: {
                      n: 16,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    num_representations: {
                      n: 17,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    app_name: {
                      n: 18,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_replay: { n: 19, br: e.qM.readBool, bw: e.gp.writeBool },
                    session_id: {
                      n: 20,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = e.w0(rr.M())), rr.sm_mbf;
          }
          toObject(i = !1) {
            return rr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(rr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(rr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new rr();
            return rr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(rr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(rr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class hr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              hr.prototype.upload_id || e.Sg(hr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    upload_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = e.w0(hr.M())), hr.sm_mbf;
          }
          toObject(i = !1) {
            return hr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(hr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(hr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new hr();
            return hr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(hr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(hr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class Pr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Pr.prototype.viewer_stats || e.Sg(Pr.M()),
              f.Message.initialize(this, i, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    viewer_stats: { n: 1, c: Xr, r: !0, q: !0 },
                    country_stats: { n: 2, c: Yr, r: !0, q: !0 },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = e.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(i = !1) {
            return Pr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Pr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Pr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Pr();
            return Pr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Pr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Pr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class Xr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Xr.prototype.time || e.Sg(Xr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = e.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(i = !1) {
            return Xr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Xr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Xr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Xr();
            return Xr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Xr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Xr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class Yr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Yr.prototype.country_code || e.Sg(Yr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    country_code: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    num_viewers: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = e.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(i = !1) {
            return Yr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Yr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Yr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Yr();
            return Yr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Yr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Yr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class Hr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Hr.prototype.webrtc_session_id || e.Sg(Hr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    started: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    offer: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    resolution_x: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    fps: { n: 6, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(i = !1) {
            return Hr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Hr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Hr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Hr();
            return Hr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Hr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Hr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class ji extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return ji.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new ji();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ji();
            return ji.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ji.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ji.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class Sr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Sr.prototype.webrtc_session_id || e.Sg(Sr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = e.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(i = !1) {
            return Sr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Sr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Sr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Sr();
            return Sr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Sr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Sr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class Vr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Vr.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new Vr();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Vr();
            return Vr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class Ur extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ur.prototype.broadcaster_steamid || e.Sg(Ur.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = e.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(i = !1) {
            return Ur.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ur.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ur.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Ur();
            return Ur.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ur.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ur.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class oi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return oi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new oi();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new oi();
            return oi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class bi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              bi.prototype.sdp_mid || e.Sg(bi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bi.sm_m ||
                (bi.sm_m = {
                  proto: bi,
                  fields: {
                    sdp_mid: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    sdp_mline_index: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    candidate: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              bi.sm_m
            );
          }
          static MBF() {
            return bi.sm_mbf || (bi.sm_mbf = e.w0(bi.M())), bi.sm_mbf;
          }
          toObject(i = !1) {
            return bi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(bi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(bi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new bi();
            return bi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(bi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(bi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class Tr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Tr.prototype.webrtc_session_id || e.Sg(Tr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate: { n: 2, c: bi },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = e.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(i = !1) {
            return Tr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Tr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Tr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Tr();
            return Tr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Tr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Tr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class vi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return vi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new vi();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new vi();
            return vi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class Cr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Cr.prototype.broadcaster_steamid || e.Sg(Cr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: bi },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = e.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(i = !1) {
            return Cr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Cr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Cr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Cr();
            return Cr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Cr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Cr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class pi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return pi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new pi();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new pi();
            return pi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class _r extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              _r.prototype.broadcaster_steamid || e.Sg(_r.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate_generation: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = e.w0(_r.M())), _r.sm_mbf;
          }
          toObject(i = !1) {
            return _r.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(_r.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(_r.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new _r();
            return _r.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(_r.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(_r.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class ri extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ri.prototype.candidate_generation || e.Sg(ri.M()),
              f.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    candidates: { n: 2, c: bi, r: !0, q: !0 },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = e.w0(ri.M())), ri.sm_mbf;
          }
          toObject(i = !1) {
            return ri.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ri.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ri.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ri();
            return ri.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ri.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ri.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class ii extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ii.prototype.broadcast_session_id || e.Sg(ii.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ii.sm_m ||
                (ii.sm_m = {
                  proto: ii,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              ii.sm_m
            );
          }
          static MBF() {
            return ii.sm_mbf || (ii.sm_mbf = e.w0(ii.M())), ii.sm_mbf;
          }
          toObject(i = !1) {
            return ii.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ii.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ii.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ii();
            return ii.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ii.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ii.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Wi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Wi.prototype.cellid || e.Sg(Wi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wi.sm_m ||
                (Wi.sm_m = {
                  proto: Wi,
                  fields: {
                    cellid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              Wi.sm_m
            );
          }
          static MBF() {
            return Wi.sm_mbf || (Wi.sm_mbf = e.w0(Wi.M())), Wi.sm_mbf;
          }
          toObject(i = !1) {
            return Wi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Wi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Wi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Wi();
            return Wi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Wi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Wi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Wi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Wi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class Bi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Bi.prototype.turn_server || e.Sg(Bi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bi.sm_m ||
                (Bi.sm_m = {
                  proto: Bi,
                  fields: {
                    turn_server: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Bi.sm_m
            );
          }
          static MBF() {
            return Bi.sm_mbf || (Bi.sm_mbf = e.w0(Bi.M())), Bi.sm_mbf;
          }
          toObject(i = !1) {
            return Bi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Bi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Bi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Bi();
            return Bi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Bi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Bi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class Ei extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ei.prototype.broadcast_session_id || e.Sg(Ei.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ei.sm_m ||
                (Ei.sm_m = {
                  proto: Ei,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    turn_server: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Ei.sm_m
            );
          }
          static MBF() {
            return Ei.sm_mbf || (Ei.sm_mbf = e.w0(Ei.M())), Ei.sm_mbf;
          }
          toObject(i = !1) {
            return Ei.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Ei.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Ei.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Ei();
            return Ei.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Ei.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Ei.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Ei.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Ei.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class U extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              U.prototype.broadcast_session_id || e.Sg(U.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_steamid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = e.w0(U.M())), U.sm_mbf;
          }
          toObject(i = !1) {
            return U.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(U.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(U.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new U();
            return U.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(U.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return U.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(U.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class T extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              T.prototype.broadcast_session_id || e.Sg(T.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = e.w0(T.M())), T.sm_mbf;
          }
          toObject(i = !1) {
            return T.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(T.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(T.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new T();
            return T.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(T.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return T.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(T.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class Pi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Pi.prototype.broadcast_session_id || e.Sg(Pi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pi.sm_m ||
                (Pi.sm_m = {
                  proto: Pi,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: bi },
                  },
                }),
              Pi.sm_m
            );
          }
          static MBF() {
            return Pi.sm_mbf || (Pi.sm_mbf = e.w0(Pi.M())), Pi.sm_mbf;
          }
          toObject(i = !1) {
            return Pi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Pi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Pi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Pi();
            return Pi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Pi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Pi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Pi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Pi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var te;
        ((Q) => {
          function i(J, H, sr) {
            return J.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, I.I8)(N, H, sr),
              E,
              { ePrivilege: 1 },
            );
          }
          Q.BeginBroadcastSession = i;
          function s(J, H, sr) {
            return J.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, I.I8)(tr, H, sr),
              Mr,
              { ePrivilege: 1 },
            );
          }
          Q.EndBroadcastSession = s;
          function M(J, H, sr) {
            return J.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, I.I8)(D, H, sr),
              Z,
              { ePrivilege: 1 },
            );
          }
          Q.StartBroadcastUpload = M;
          function ue(J, H) {
            return J.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, I.I8)(B, H),
              { ePrivilege: 1 },
            );
          }
          Q.NotifyBroadcastUploadStop = ue;
          function ne(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, I.I8)(si, H, sr),
              Or,
              { ePrivilege: 2 },
            );
          }
          Q.WatchBroadcast = ne;
          function Yi(J, H) {
            return J.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, I.I8)(Y, H),
              { ePrivilege: 2 },
            );
          }
          Q.HeartbeatBroadcast = Yi;
          function me(J, H) {
            return J.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, I.I8)(ti, H),
              { ePrivilege: 2 },
            );
          }
          Q.StopWatchingBroadcast = me;
          function Me(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, I.I8)(zr, H, sr),
              jr,
              { ePrivilege: 2 },
            );
          }
          Q.GetBroadcastStatus = Me;
          function Hi(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, I.I8)(vr, H, sr),
              pr,
              { ePrivilege: 2 },
            );
          }
          Q.GetBroadcastThumbnail = Hi;
          function Xi(J, H, sr) {
            return J.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, I.I8)(fr, H, sr),
              ni,
              { ePrivilege: 1 },
            );
          }
          Q.InviteToBroadcast = Xi;
          function ce(J, H, sr) {
            return J.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, I.I8)(br, H, sr),
              fi,
              { ePrivilege: 1 },
            );
          }
          Q.SendBroadcastStateToServer = ce;
          function ye(J, H) {
            return J.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, I.I8)(xr, H),
              { ePrivilege: 1 },
            );
          }
          Q.NotifyBroadcastSessionHeartbeat = ye;
          function ge(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, I.I8)(G, H, sr),
              Br,
              { ePrivilege: 2 },
            );
          }
          Q.GetBroadcastChatInfo = ge;
          function he(J, H, sr) {
            return J.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, I.I8)(kr, H, sr),
              Er,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Q.PostChatMessage = he;
          function ze(J, H, sr) {
            return J.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, I.I8)(Nr, H, sr),
              Ir,
              { ePrivilege: 1, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Q.UpdateChatMessageFlair = ze;
          function je(J, H, sr) {
            return J.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, I.I8)(ui, H, sr),
              mi,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Q.MuteBroadcastChatUser = je;
          function Vi(J, H, sr) {
            return J.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, I.I8)(Wr, H, sr),
              zi,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Q.RemoveUserChatText = Vi;
          function ve(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, I.I8)(Gr, H, sr),
              Dr,
              { ePrivilege: 1 },
            );
          }
          Q.GetBroadcastChatUserNames = ve;
          function pe(J, H, sr) {
            return J.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, I.I8)(dr, H, sr),
              a,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Q.StartBuildClip = pe;
          function Ki(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, I.I8)(b, H, sr),
              h,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Q.GetBuildClipStatus = Ki;
          function wi(J, H, sr) {
            return J.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, I.I8)(z, H, sr),
              O,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Q.SetClipDetails = wi;
          function ki(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, I.I8)(x, H, sr),
              F,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          Q.GetClipDetails = ki;
          function Oe(J, H, sr) {
            return J.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, I.I8)(S, H, sr),
              Di,
              { ePrivilege: 1 },
            );
          }
          Q.SetRTMPInfo = Oe;
          function di(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, I.I8)(lr, H, sr),
              ar,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Q.GetRTMPInfo = di;
          function Li(J, H) {
            return J.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, I.I8)(Ei, H),
              { ePrivilege: 1 },
            );
          }
          Q.NotifyWebRTCHaveTURNServer = Li;
          function oe(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, I.I8)(Hr, H, sr),
              ji,
              { ePrivilege: 1 },
            );
          }
          Q.WebRTCStartResult = oe;
          function xe(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, I.I8)(Sr, H, sr),
              Vr,
              { ePrivilege: 1 },
            );
          }
          Q.WebRTCStopped = xe;
          function Fe(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, I.I8)(Ur, H, sr),
              oi,
              { ePrivilege: 1 },
            );
          }
          Q.WebRTCSetAnswer = Fe;
          function Ci(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, I.I8)(Wi, H, sr),
              Bi,
              { ePrivilege: 1 },
            );
          }
          Q.WebRTCLookupTURNServer = Ci;
          function Ie(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, I.I8)(Tr, H, sr),
              vi,
              { ePrivilege: 1 },
            );
          }
          Q.WebRTCAddHostCandidate = Ie;
          function fe(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, I.I8)(Cr, H, sr),
              pi,
              { ePrivilege: 1 },
            );
          }
          Q.WebRTCAddViewerCandidate = fe;
          function De(J, H, sr) {
            return J.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, I.I8)(_r, H, sr),
              ri,
              { ePrivilege: 1 },
            );
          }
          Q.WebRTCGetHostCandidates = De;
          function Ni(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, I.I8)(ci, H, sr),
              gi,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Q.GetBroadcastUploadStats = Ni;
          function We(J, H, sr) {
            return J.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, I.I8)(hr, H, sr),
              Pr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Q.GetBroadcastViewerStats = We;
        })(te || (te = {}));
        var ae;
        ((Q) => {
          (Q.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: q,
          }),
            (Q.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: Lr,
            }),
            (Q.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: nr,
            }),
            (Q.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: yr,
            }),
            (Q.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: ai,
            }),
            (Q.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: Ar,
            }),
            (Q.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: Zr,
            }),
            (Q.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: Qr,
            }),
            (Q.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: Jr,
            }),
            (Q.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: ii,
            }),
            (Q.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: U,
            }),
            (Q.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: T,
            }),
            (Q.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Pi,
            });
        })(ae || (ae = {}));
      },
      61639: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { Mc: () => l });
        var l = {};
        g.r(l),
          g.d(l, {
            Ms: () => A,
            n6: () => yi,
            U6: () => $,
            kz: () => gr,
            ej: () => X,
            R: () => W,
            mZ: () => v,
            Is: () => ei,
            B_: () => ur,
            bW: () => j,
            iy: () => cr,
          });
        var mr = g(80613),
          f = g.n(mr),
          u = g(75245),
          e = g(35038);
        const I = 0,
          cr = 1,
          $ = 2,
          ur = 3,
          j = 4,
          gr = 5,
          P = 6,
          yi = 7,
          Rr = 8,
          ei = 9,
          _ = 10,
          w = 11,
          o = 12,
          m = 13,
          n = 14,
          or = 15,
          A = 16,
          v = 17,
          W = 18,
          X = 19;
        function K(Mr) {
          return "unknown EProductPageAction ( " + Mr + " )";
        }
        function er(Mr) {
          return "unknown EProductViewAction ( " + Mr + " )";
        }
        function wr(Mr) {
          return "unknown EProductImpressionFromClientType ( " + Mr + " )";
        }
        function L(Mr) {
          return "unknown ETrackedEmailType ( " + Mr + " )";
        }
        function Ii(Mr) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + Mr + " )"
          );
        }
        function $r(Mr) {
          return "unknown EUnifedProductInteractionActions ( " + Mr + " )";
        }
        class N extends mr.Message {
          static ImplementsStaticInterface() {}
          constructor(D = null) {
            super(),
              N.prototype.impressions || u.Sg(N.M()),
              mr.Message.initialize(this, D, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: { impressions: { n: 1, c: E, r: !0, q: !0 } },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = u.w0(N.M())), N.sm_mbf;
          }
          toObject(D = !1) {
            return N.toObject(D, this);
          }
          static toObject(D, Z) {
            return u.BT(N.M(), D, Z);
          }
          static fromObject(D) {
            return u.Uq(N.M(), D);
          }
          static deserializeBinary(D) {
            let Z = new (f().BinaryReader)(D),
              nr = new N();
            return N.deserializeBinaryFromReader(nr, Z);
          }
          static deserializeBinaryFromReader(D, Z) {
            return u.zj(N.MBF(), D, Z);
          }
          serializeBinary() {
            var D = new (f().BinaryWriter)();
            return N.serializeBinaryToWriter(this, D), D.getResultBuffer();
          }
          static serializeBinaryToWriter(D, Z) {
            u.i0(N.M(), D, Z);
          }
          serializeBase64String() {
            var D = new (f().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, D), D.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class E extends mr.Message {
          static ImplementsStaticInterface() {}
          constructor(D = null) {
            super(),
              E.prototype.type || u.Sg(E.M()),
              mr.Message.initialize(this, D, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                    appid: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    num_impressions: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = u.w0(E.M())), E.sm_mbf;
          }
          toObject(D = !1) {
            return E.toObject(D, this);
          }
          static toObject(D, Z) {
            return u.BT(E.M(), D, Z);
          }
          static fromObject(D) {
            return u.Uq(E.M(), D);
          }
          static deserializeBinary(D) {
            let Z = new (f().BinaryReader)(D),
              nr = new E();
            return E.deserializeBinaryFromReader(nr, Z);
          }
          static deserializeBinaryFromReader(D, Z) {
            return u.zj(E.MBF(), D, Z);
          }
          serializeBinary() {
            var D = new (f().BinaryWriter)();
            return E.serializeBinaryToWriter(this, D), D.getResultBuffer();
          }
          static serializeBinaryToWriter(D, Z) {
            u.i0(E.M(), D, Z);
          }
          serializeBase64String() {
            var D = new (f().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, D), D.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var tr;
        ((Mr) => {
          function D(Z, nr) {
            return Z.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, e.I8)(N, nr),
              { ePrivilege: 1 },
            );
          }
          Mr.ReportProductImpressionsFromClient = D;
        })(tr || (tr = {}));
      },
      95414: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { j: () => P, u: () => yi });
        var l = g(7850),
          mr = g(90626),
          f = g(24660),
          u = g(83482),
          e = g(72865),
          I = g(77200),
          cr = g(53113),
          $ = g(68094),
          ur = g(72609),
          j = g(3166);
        function gr(Rr) {
          if (Rr) {
            if ("appid" in Rr) return "app";
            if ("bundleid" in Rr) return "bundle";
            if ("packageid" in Rr) return "sub";
          }
        }
        function P(Rr) {
          const {
              id: ei,
              hoverClassName: _,
              fnGetIDOverride: w,
              fnHoverState: o,
              disableScreenshots: m,
              children: n,
            } = Rr,
            or = mr.useRef(null),
            A = mr.useCallback(
              (W) => {
                const X = gr(ei);
                X &&
                  (o && o(!0),
                  window.GameHover &&
                    (or.current &&
                      m &&
                      (or.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(w ? w() : or.current, W, "global_hover", {
                      type: X,
                      id: (0, $.G$)(ei).id,
                      v6: 1,
                    })));
              },
              [o, w, m, ei],
            ),
            v = mr.useCallback(
              (W) => {
                gr(ei) &&
                  (o && W.relatedTarget && o(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      w ? w() : or.current,
                      W,
                      "global_hover",
                    ));
              },
              [ei, o, w],
            );
          return (0, l.jsx)("div", {
            ref: or,
            className: _,
            onMouseEnter: A,
            onMouseLeave: v,
            onFocus: A,
            onBlur: v,
            children: n,
          });
        }
        function yi(Rr) {
          const {
              id: ei,
              strExtraParams: _,
              fnOnClickOverride: w,
              strOverrideURL: o,
            } = Rr,
            m = (0, e.n9)(),
            n = (0, I.w)(),
            or = (0, cr.NT)(
              o ||
                (ei && "creatorid" in ei
                  ? (0, u.It)(
                      `${ur.TS.STORE_BASE_URL}curator/${((0, $.G$))(ei).id}${_ ? `?${_}` : ""}`,
                      m,
                      n,
                    )
                  : (0, u.It)(
                      `${ur.TS.STORE_BASE_URL}${gr(ei)}/${((0, $.G$))(ei).id}${_ ? `?${_}` : ""}`,
                      m,
                      n,
                    )),
            );
          return (0, l.jsx)(P, {
            ...Rr,
            children: (0, l.jsx)(f.Ii, {
              className: Rr.className,
              href: w ? void 0 : or,
              target: ur.TS.IN_CLIENT || w ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: w,
              children: Rr.children,
            }),
          });
        }
      },
      11587: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { Qg: () => _, h3: () => ei });
        var l = g(72609),
          mr = g(80902),
          f = g(75233),
          u = g(51614),
          e = g(90626),
          I = g(72604);
        const cr = "saleaction/giveawayregistration",
          $ = "saleaction/creategiveawayregistration";
        async function ur(w) {
          const o = l.TS.STORE_BASE_URL + cr + "?name=" + encodeURIComponent(w),
            m = await fetch(o, { credentials: "include" });
          return await gr("GetUserGiveawayRegistration", w, o, m);
        }
        async function j(w) {
          const o = l.TS.STORE_BASE_URL + $,
            m = await fetch(o, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: w }),
            });
          return await gr("UpdateUserGiveawayRegistration", w, o, m);
        }
        async function gr(w, o, m, n) {
          if (!n.ok) throw new Error(m + " answered " + n.status);
          const or = await n.json();
          if (or?.success == I.R && or.registration) return or.registration;
          throw new Error(w + " on " + o + " answered " + or?.success);
        }
        const P = { registered: !1 };
        function yi(w, o) {
          return ["sale", "giveawayregistration", w, o];
        }
        function Rr(w, o) {
          return {
            queryKey: yi(w, o),
            queryFn: () => ur(w),
            enabled: !!w,
            retry: !1,
          };
        }
        function ei(w) {
          const { data: o, isError: m } = (0, mr.I)(Rr(w, l.iA.accountid));
          return m ? P : o;
        }
        function _() {
          const w = (0, f.jE)(),
            { mutateAsync: o } = (0, u.n)({
              mutationFn: j,
              onSuccess: (n, or) => w.setQueryData(yi(or, l.iA.accountid), n),
            });
          return {
            fnCreateRegistration: (0, e.useCallback)(
              async (n) => {
                try {
                  return await o(n);
                } catch (or) {
                  return (
                    console.error(
                      "Registering for giveaway " + n + " failed",
                      or,
                    ),
                    P
                  );
                }
              },
              [o],
            ),
          };
        }
      },
      90405: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { K: () => cr, _: () => I });
        var l = g(7850),
          mr = g(90626),
          f = g(81944),
          u = g(19298);
        const e = mr.createContext({ enabled: !0 });
        function I($) {
          const { enabled: ur, children: j } = $,
            gr = mr.useMemo(() => ({ enabled: ur }), [ur]);
          return (0, l.jsx)(e.Provider, { value: gr, children: j });
        }
        function cr($) {
          const {
              placeholderWidth: ur,
              placeholderHeight: j,
              holdGamepadFocus: gr = !1,
              onRender: P,
              style: yi,
              mode: Rr = "JustLoad",
              children: ei,
              ..._
            } = $,
            w = mr.useContext(e),
            [o, m] = mr.useState(() => ({
              bRenderChildren: !w.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            n = mr.useRef(null),
            or = Rr === "LoadAndUnload" && w.enabled,
            A = mr.useCallback(
              (K) => {
                m((er) => {
                  if (er.bRenderChildren === K || (er.bRenderChildren && !or))
                    return er;
                  let wr = 0,
                    L = 0;
                  if (n.current) {
                    const Ii = n.current.getBoundingClientRect();
                    Ii && ((wr = Ii.width), (L = Ii.height));
                  }
                  return (
                    K && P && P(),
                    {
                      bRenderChildren: K,
                      nPrevRenderWidth: wr,
                      nPrevRenderHeight: L,
                    }
                  );
                });
              },
              [or, P],
            );
          mr.useEffect(() => {
            w.enabled || A(!0);
          }, [w.enabled, A]);
          let v = yi;
          if (!o.bRenderChildren) {
            const K = o.nPrevRenderWidth || ur,
              er = o.nPrevRenderHeight || j;
            (er !== void 0 || K !== void 0) &&
              (v = { ...yi, minHeight: er, minWidth: K });
          }
          const W = or ? "repeated" : "once";
          let X = (0, l.jsx)(f.J, {
            containerRef: n,
            style: v,
            ..._,
            onVisibilityChange: A,
            trigger: W,
            children: o.bRenderChildren && ei,
          });
          return (
            gr &&
              (X = (0, l.jsx)(u.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: X,
              })),
            X
          );
        }
      },
      9032: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { uj: () => I, fB: () => cr });
        var l = g(80902),
          mr = g(72604),
          f = g(72609);
        async function u($, ur) {
          const j = f.TS.STORE_BASE_URL + "video/details/" + $ + "/0",
            gr = await fetch(j, { credentials: "include", signal: ur });
          if (!gr.ok) throw new Error(j + " answered " + gr.status);
          const P = await gr.json();
          if (P?.success != mr.R && P?.success != "ready")
            throw new Error(
              "video/details on " + $ + " answered " + P?.success,
            );
          return { appid: $, video_url: P.video_url, bookmark: P.bookmark };
        }
        function e($) {
          return ["video", "vod", $];
        }
        function I($) {
          return {
            queryKey: e($),
            queryFn: ({ signal: ur }) => u($, ur),
            retry: !1,
          };
        }
        function cr($) {
          const { data: ur, isPending: j } = (0, l.I)(I($));
          return { vodInfo: ur, bLoading: j };
        }
      },
      2422: (Mi, hi, g) => {
        "use strict";
        g.r(hi),
          g.d(hi, {
            BroadcastEmbeddablePopoutHeader: () => Je,
            default: () => Kt,
          });
        var l = g(7850),
          mr = g(41735),
          f = g.n(mr),
          u = g(75844),
          e = g(65946),
          I = g(90626),
          cr = g(14947),
          $ = g(16346),
          ur = g(90711),
          j = g(90828),
          gr = g(72604),
          P = g(35038),
          yi = g(84110),
          Rr = g(3685),
          ei = g(60298),
          _ = g(45806),
          w = g(76559),
          o = g(80613),
          m = g.n(o),
          n = g(75245);
        function or(d) {
          return "unknown EBroadcastImageType ( " + d + " )";
        }
        function A(d) {
          return "unknown EGetGamesAlgorithm ( " + d + " )";
        }
        function v(d) {
          return "unknown EGetChannelsAlgorithm ( " + d + " )";
        }
        function W(d) {
          return "unknown ESteamTVContentTemplate ( " + d + " )";
        }
        class X extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.unique_name || n.Sg(X.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = n.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(X.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new X();
            return X.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(X.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(X.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class K extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.broadcast_channel_id || n.Sg(K.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = n.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(K.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new K();
            return K.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(K.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(K.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class er extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.unique_name || n.Sg(er.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = n.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(er.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new er();
            return er.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class wr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.broadcast_channel_id || n.Sg(wr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = n.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(wr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new wr();
            return wr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class L extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.broadcast_channel_id || n.Sg(L.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    name: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    language: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    rules: { n: 8, br: n.qM.readString, bw: n.gp.writeString },
                    panels: { n: 9, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = n.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(L.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new L();
            return L.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(L.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(L.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class Ii extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ii.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ii();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Ii();
            return Ii.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class $r extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.broadcast_channel_id || n.Sg($r.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = n.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT($r.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new $r();
            return $r.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj($r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0($r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class N extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.unique_name || n.Sg(N.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    name: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                    language: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    rules: { n: 8, br: n.qM.readString, bw: n.gp.writeString },
                    panels: { n: 9, br: n.qM.readString, bw: n.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = n.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(N.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new N();
            return N.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(N.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(N.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class E extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.broadcast_channel_id || n.Sg(E.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: n.qM.readEnum, bw: n.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    undo: { n: 9, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(E.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new E();
            return E.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(E.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(E.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class tr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.replace_image_hash || n.Sg(tr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = n.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(tr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new tr();
            return tr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class Mr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.broadcast_channel_id || n.Sg(Mr.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: n.qM.readEnum,
                      pbr: n.qM.readPackedEnum,
                      bw: n.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = n.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Mr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Mr();
            return Mr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class D extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.images || n.Sg(D.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: { images: { n: 1, c: Z, r: !0, q: !0 } },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = n.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(D.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new D();
            return D.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(D.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(D.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class Z extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.image_type || n.Sg(Z.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    image_type: { n: 1, br: n.qM.readEnum, bw: n.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = n.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Z.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Z();
            return Z.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class nr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.broadcast_channel_id || n.Sg(nr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = n.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(nr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new nr();
            return nr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        }
        class zr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.links || n.Sg(zr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: { links: { n: 1, c: jr, r: !0, q: !0 } },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = n.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(zr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new zr();
            return zr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class jr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.link_index || n.Sg(jr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    url: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    link_description: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    left: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    top: { n: 5, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    width: { n: 6, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    height: { n: 7, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = n.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(jr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new jr();
            return jr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class vr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.broadcast_channel_id || n.Sg(vr.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    links: { n: 2, c: pr, r: !0, q: !0 },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = n.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(vr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new vr();
            return vr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class pr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.link_index || n.Sg(pr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    link_index: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    url: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    link_description: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    left: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    top: { n: 5, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    width: { n: 6, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    height: { n: 7, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = n.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(pr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new pr();
            return pr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        }
        class si extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return si.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new si();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new si();
            return si.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class Or extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.broadcast_channel_id || n.Sg(Or.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = n.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Or.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Or();
            return Or.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class xi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xi.prototype.is_live || n.Sg(xi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xi.sm_m ||
                (xi.sm_m = {
                  proto: xi,
                  fields: {
                    is_live: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    appid: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              xi.sm_m
            );
          }
          static MBF() {
            return xi.sm_mbf || (xi.sm_mbf = n.w0(xi.M())), xi.sm_mbf;
          }
          toObject(r = !1) {
            return xi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(xi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(xi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new xi();
            return xi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(xi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(xi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class Y extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.broadcast_channel_id || n.Sg(Y.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    name: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                    appid: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    is_live: { n: 16, br: n.qM.readBool, bw: n.gp.writeBool },
                    language: {
                      n: 17,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = n.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Y.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Y();
            return Y.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        }
        class ti extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ti.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ti();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ti();
            return ti.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class fr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.results || n.Sg(fr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: { results: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = n.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(fr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new fr();
            return fr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        }
        class ni extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ni.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ni();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ni();
            return ni.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        class br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.results || n.Sg(br.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: { results: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = n.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(br.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new br();
            return br.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class fi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fi.prototype.broadcast_channel_id || n.Sg(fi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fi.sm_m ||
                (fi.sm_m = {
                  proto: fi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              fi.sm_m
            );
          }
          static MBF() {
            return fi.sm_mbf || (fi.sm_mbf = n.w0(fi.M())), fi.sm_mbf;
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(fi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(fi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new fi();
            return fi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(fi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(fi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class q extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.is_followed || n.Sg(q.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = n.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(q.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new q();
            return q.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class Oi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oi.prototype.broadcast_channel_id || n.Sg(Oi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oi.sm_m ||
                (Oi.sm_m = {
                  proto: Oi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              Oi.sm_m
            );
          }
          static MBF() {
            return Oi.sm_mbf || (Oi.sm_mbf = n.w0(Oi.M())), Oi.sm_mbf;
          }
          toObject(r = !1) {
            return Oi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Oi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Oi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Oi();
            return Oi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Oi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Oi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class Lr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.is_subscribed || n.Sg(Lr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = n.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Lr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Lr();
            return Lr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class yr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.broadcast_channel_id || n.Sg(yr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = n.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(yr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new yr();
            return yr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        }
        class ai extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ai.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ai();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ai();
            return ai.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class Zr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.broadcast_channel_id || n.Sg(Zr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = n.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Zr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Zr();
            return Zr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class Qr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.is_followed || n.Sg(Qr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = n.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Qr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Qr();
            return Qr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Qr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Qr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class Jr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.appid || n.Sg(Jr.M()),
              o.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    name: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    image: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                    viewers: {
                      n: 4,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    channels: { n: 5, c: Y, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = n.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Jr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Jr();
            return Jr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        }
        class B extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.appid || n.Sg(B.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    algorithm: { n: 2, br: n.qM.readEnum, bw: n.gp.writeEnum },
                    count: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(B.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new B();
            return B.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(B.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(B.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class Ar extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.results || n.Sg(Ar.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: { results: { n: 1, c: Jr, r: !0, q: !0 } },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = n.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Ar.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Ar();
            return Ar.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        }
        class xr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.algorithm || n.Sg(xr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    algorithm: { n: 1, br: n.qM.readEnum, bw: n.gp.writeEnum },
                    count: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    appid: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = n.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(xr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new xr();
            return xr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        }
        class G extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.results || n.Sg(G.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { results: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = n.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(G.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new G();
            return G.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(G.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(G.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        }
        class Br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.broadcast_channel_id || n.Sg(Br.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = n.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Br.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Br();
            return Br.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.broadcasters || n.Sg(kr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: { broadcasters: { n: 1, c: Er, r: !0, q: !0 } },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = n.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(kr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new kr();
            return kr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class Er extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.steamid || n.Sg(Er.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    name: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = n.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Er.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Er();
            return Er.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class Nr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.issuer_steamid || n.Sg(Nr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    permanent: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                    name: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = n.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Nr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Nr();
            return Nr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        }
        class Ir extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.broadcast_channel_id || n.Sg(Ir.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    permanent: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                    undo: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = n.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Ir.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Ir();
            return Ir.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        }
        class ui extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ui.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ui();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ui();
            return ui.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class mi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mi.prototype.broadcast_channel_id || n.Sg(mi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mi.sm_m ||
                (mi.sm_m = {
                  proto: mi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              mi.sm_m
            );
          }
          static MBF() {
            return mi.sm_mbf || (mi.sm_mbf = n.w0(mi.M())), mi.sm_mbf;
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(mi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(mi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new mi();
            return mi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(mi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(mi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class Wr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.results || n.Sg(Wr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: { results: { n: 1, c: Nr, r: !0, q: !0 } },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = n.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Wr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Wr();
            return Wr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class zi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zi.prototype.broadcast_channel_id || n.Sg(zi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zi.sm_m ||
                (zi.sm_m = {
                  proto: zi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              zi.sm_m
            );
          }
          static MBF() {
            return zi.sm_mbf || (zi.sm_mbf = n.w0(zi.M())), zi.sm_mbf;
          }
          toObject(r = !1) {
            return zi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(zi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(zi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new zi();
            return zi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(zi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(zi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        }
        class Gr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Gr();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Gr();
            return Gr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class Dr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.broadcast_channel_id || n.Sg(Dr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = n.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Dr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Dr();
            return Dr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class Kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.steamid || n.Sg(Kr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    name: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = n.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Kr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Kr();
            return Kr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        }
        class dr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.results || n.Sg(dr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: { results: { n: 1, c: Kr, r: !0, q: !0 } },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = n.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(dr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new dr();
            return dr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class a extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.broadcast_channel_id || n.Sg(a.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    word: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    undo: { n: 3, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = n.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(a.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new a();
            return a.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(a.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(a.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        }
        class b extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new b();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new b();
            return b.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class h extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.broadcast_channel_id || n.Sg(h.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = n.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(h.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new h();
            return h.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(h.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(h.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        }
        class z extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.results || n.Sg(z.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: n.qM.readString,
                      bw: n.gp.writeRepeatedString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(z.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new z();
            return z.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class O extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.broadcast_channel_id || n.Sg(O.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(O.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new O();
            return O.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(O.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(O.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        }
        class x extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.chat_id || n.Sg(x.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint64String,
                      pbr: n.qM.readPackedUint64String,
                      bw: n.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(x.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new x();
            return x.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(x.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(x.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        }
        class F extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.term || n.Sg(F.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    term: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = n.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(F.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new F();
            return F.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(F.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(F.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        }
        class S extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.results || n.Sg(S.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: { results: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(S.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new S();
            return S.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(S.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(S.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        }
        class Di extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Di.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Di();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Di();
            return Di.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class lr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.stream_live_email || n.Sg(lr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = n.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(lr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new lr();
            return lr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class ar extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.stream_live_email || n.Sg(ar.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = n.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(ar.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ar();
            return ar.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        }
        class ci extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ci();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ci();
            return ci.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class gi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new gi();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new gi();
            return gi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class rr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.results || n.Sg(rr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: { results: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = n.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(rr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new rr();
            return rr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class hr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.broadcasts || n.Sg(hr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: { broadcasts: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = n.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(hr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new hr();
            return hr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class Pr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.broadcasts || n.Sg(Pr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    broadcasts: { n: 1, c: Y, r: !0, q: !0 },
                    appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    title: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = n.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Pr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Pr();
            return Pr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class Xr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.appid || n.Sg(Xr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    broadcast: { n: 3, c: Y },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = n.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Xr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Xr();
            return Xr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        }
        class Yr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.entries || n.Sg(Yr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    entries: { n: 1, c: Xr, r: !0, q: !0 },
                    title: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = n.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Yr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Yr();
            return Yr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class Hr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.broadcasts || n.Sg(Hr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    broadcasts: { n: 1, c: Y, r: !0, q: !0 },
                    title: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = n.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Hr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Hr();
            return Hr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class ji extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ji.prototype.broadcasts || n.Sg(ji.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ji.sm_m ||
                (ji.sm_m = {
                  proto: ji,
                  fields: {
                    broadcasts: { n: 1, c: Y, r: !0, q: !0 },
                    title: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              ji.sm_m
            );
          }
          static MBF() {
            return ji.sm_mbf || (ji.sm_mbf = n.w0(ji.M())), ji.sm_mbf;
          }
          toObject(r = !1) {
            return ji.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(ji.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(ji.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ji();
            return ji.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(ji.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(ji.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class Sr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.broadcast || n.Sg(Sr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    broadcast: { n: 1, c: Y },
                    title: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = n.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Sr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Sr();
            return Sr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class Vr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.broadcast || n.Sg(Vr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    broadcast: { n: 1, c: Y },
                    title: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = n.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Vr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Vr();
            return Vr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class Ur extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.title || n.Sg(Ur.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    title: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = n.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Ur.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Ur();
            return Ur.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class oi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oi.prototype.template_type || n.Sg(oi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oi.sm_m ||
                (oi.sm_m = {
                  proto: oi,
                  fields: {
                    template_type: {
                      n: 1,
                      br: n.qM.readEnum,
                      bw: n.gp.writeEnum,
                    },
                    takeover: { n: 2, c: hr },
                    single_game: { n: 3, c: Pr },
                    game_list: { n: 4, c: Yr },
                    quick_explore: { n: 5, c: Hr },
                    conveyor_belt: { n: 6, c: ji },
                    watch_party: { n: 7, c: Sr },
                    developer: { n: 8, c: Vr },
                    event: { n: 9, c: Ur },
                  },
                }),
              oi.sm_m
            );
          }
          static MBF() {
            return oi.sm_mbf || (oi.sm_mbf = n.w0(oi.M())), oi.sm_mbf;
          }
          toObject(r = !1) {
            return oi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(oi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(oi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new oi();
            return oi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(oi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(oi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        }
        class bi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return bi.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new bi();
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new bi();
            return bi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class Tr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.rows || n.Sg(Tr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: { rows: { n: 1, c: oi, r: !0, q: !0 } },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = n.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Tr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Tr();
            return Tr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class vi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vi.prototype.broadcast_channel_id || n.Sg(vi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vi.sm_m ||
                (vi.sm_m = {
                  proto: vi,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              vi.sm_m
            );
          }
          static MBF() {
            return vi.sm_mbf || (vi.sm_mbf = n.w0(vi.M())), vi.sm_mbf;
          }
          toObject(r = !1) {
            return vi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(vi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(vi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new vi();
            return vi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(vi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(vi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class Cr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.broadcast_clip_id || n.Sg(Cr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = n.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(Cr.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new Cr();
            return Cr.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(Cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(Cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class pi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pi.prototype.clips || n.Sg(pi.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pi.sm_m ||
                (pi.sm_m = {
                  proto: pi,
                  fields: {
                    clips: { n: 1, c: Cr, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              pi.sm_m
            );
          }
          static MBF() {
            return pi.sm_mbf || (pi.sm_mbf = n.w0(pi.M())), pi.sm_mbf;
          }
          toObject(r = !1) {
            return pi.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(pi.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(pi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new pi();
            return pi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(pi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(pi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class _r extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.cheer_type || n.Sg(_r.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = n.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(_r.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new _r();
            return _r.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(_r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(_r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class ri extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ri.prototype.app_id || n.Sg(ri.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    app_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: _r, r: !0, q: !0 },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = n.w0(ri.M())), ri.sm_mbf;
          }
          toObject(r = !1) {
            return ri.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(ri.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(ri.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ri();
            return ri.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(ri.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(ri.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class ii extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ii.prototype.aggregation_delay_ms || n.Sg(ii.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ii.sm_m ||
                (ii.sm_m = {
                  proto: ii,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              ii.sm_m
            );
          }
          static MBF() {
            return ii.sm_mbf || (ii.sm_mbf = n.w0(ii.M())), ii.sm_mbf;
          }
          toObject(r = !1) {
            return ii.toObject(r, this);
          }
          static toObject(r, t) {
            return n.BT(ii.M(), r, t);
          }
          static fromObject(r) {
            return n.Uq(ii.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (m().BinaryReader)(r),
              c = new ii();
            return ii.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return n.zj(ii.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            n.i0(ii.M(), r, t);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        }
        var Wi;
        ((d) => {
          function r(R, V, C) {
            return R.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, P.I8)(X, V, C),
              K,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.CreateBroadcastChannel = r;
          function t(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, P.I8)(er, V, C),
              wr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelID = t;
          function c(R, V, C) {
            return R.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, P.I8)(L, V, C),
              Ii,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelProfile = c;
          function y(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, P.I8)($r, V, C),
              N,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelProfile = y;
          function p(R, V, C) {
            return R.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, P.I8)(E, V, C),
              tr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelImage = p;
          function k(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, P.I8)(Mr, V, C),
              D,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelImages = k;
          function Fr(R, V, C) {
            return R.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, P.I8)(vr, V, C),
              si,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetBroadcastChannelLinkRegions = Fr;
          function qr(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, P.I8)(nr, V, C),
              zr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelLinks = qr;
          function li(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, P.I8)(Br, V, C),
              kr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetBroadcastChannelBroadcasters = li;
          function Ai(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, P.I8)(ti, V, C),
              fr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetFollowedChannels = Ai;
          function Zi(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, P.I8)(ni, V, C),
              br,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetSubscribedChannels = Zi;
          function Ui(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, P.I8)(Or, V, C),
              xi,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelStatus = Ui;
          function Si(R, V, C) {
            return R.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, P.I8)(fi, V, C),
              q,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.FollowBroadcastChannel = Si;
          function Ri(R, V, C) {
            return R.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, P.I8)(Oi, V, C),
              Lr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SubscribeBroadcastChannel = Ri;
          function Ae(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, P.I8)(vi, V, C),
              pi,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          d.GetBroadcastChannelClips = Ae;
          function Ht(R, V, C) {
            return R.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, P.I8)(yr, V, C),
              ai,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.ReportBroadcastChannel = Ht;
          function St(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, P.I8)(Zr, V, C),
              Qr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetBroadcastChannelInteraction = St;
          function qt(R, V, C) {
            return R.SendMsg("SteamTV.GetGames#1", (0, P.I8)(B, V, C), Ar, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.GetGames = qt;
          function Gt(R, V, C) {
            return R.SendMsg("SteamTV.GetChannels#1", (0, P.I8)(xr, V, C), G, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.GetChannels = Gt;
          function Tt(R, V, C) {
            return R.SendMsg("SteamTV.AddChatBan#1", (0, P.I8)(Ir, V, C), ui, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          d.AddChatBan = Tt;
          function Rt(R, V, C) {
            return R.SendMsg("SteamTV.GetChatBans#1", (0, P.I8)(mi, V, C), Wr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.GetChatBans = Rt;
          function Vt(R, V, C) {
            return R.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, P.I8)(zi, V, C),
              Gr,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          d.AddChatModerator = Vt;
          function Ct(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, P.I8)(Dr, V, C),
              dr,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          d.GetChatModerators = Ct;
          function _t(R, V, C) {
            return R.SendMsg("SteamTV.AddWordBan#1", (0, P.I8)(a, V, C), b, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.AddWordBan = _t;
          function rn(R, V, C) {
            return R.SendMsg("SteamTV.GetWordBans#1", (0, P.I8)(h, V, C), z, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          d.GetWordBans = rn;
          function en(R, V, C) {
            return R.SendMsg("SteamTV.JoinChat#1", (0, P.I8)(O, V, C), x, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          d.JoinChat = en;
          function tn(R, V, C) {
            return R.SendMsg("SteamTV.Search#1", (0, P.I8)(F, V, C), S, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          d.Search = tn;
          function nn(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, P.I8)(Di, V, C),
              lr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetSteamTVUserSettings = nn;
          function sn(R, V, C) {
            return R.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, P.I8)(ar, V, C),
              ci,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.SetSteamTVUserSettings = sn;
          function ln(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, P.I8)(gi, V, C),
              rr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          d.GetMyBroadcastChannels = ln;
          function an(R, V, C) {
            return R.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, P.I8)(bi, V, C),
              Tr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          d.GetHomePageContents = an;
          function un(R, V, C) {
            return R.SendMsg("SteamTV.AppCheer#1", (0, P.I8)(ri, V, C), ii, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          d.AppCheer = un;
        })(Wi || (Wi = {}));
        var Bi = g(27066),
          Ei = g(8323),
          U = g(18210),
          T = g(3166),
          Pi = g(24544),
          te = Object.defineProperty,
          ae = Object.getOwnPropertyDescriptor,
          Q = (d, r, t, c) => {
            for (
              var y = c > 1 ? void 0 : c ? ae(r, t) : r, p = d.length - 1, k;
              p >= 0;
              p--
            )
              (k = d[p]) && (y = (c ? k(r, t, y) : k(y)) || y);
            return c && y && te(r, t, y), y;
          };
        const i = 4,
          s = 500,
          M = 10,
          ue = class le {
            m_mapChats = new Map();
            m_cmInterface;
            SetCMInterface(r) {
              this.m_cmInterface = r;
            }
            GetCMInterface() {
              return this.m_cmInterface;
            }
            GetChat(r, t) {
              return this.m_mapChats.get(r) || this.m_mapChats.get(t);
            }
            GetOrCreateChat(r, t) {
              let c = this.GetChat(r, t);
              return c || ((c = new Yi()), this.m_mapChats.set(r || t, c)), c;
            }
            static s_Singleton;
            static Get() {
              return (
                le.s_Singleton || (le.s_Singleton = new le()), le.s_Singleton
              );
            }
            constructor() {
              (0, cr.Gn)(this);
            }
          };
        Q([cr.sH], ue.prototype, "m_mapChats", 2);
        let ne = ue;
        class Yi {
          m_ulBroadcastChannelID = "";
          m_ulChatID = "";
          m_strFlairGroupID = "";
          m_bAutoScroll = !0;
          m_ulBroadcastID = "";
          m_ulBroadcastSteamID = "";
          m_tsFirstRequest = null;
          m_nFromFirstRequestMS = 0;
          m_nNextChatTS = 0;
          m_cConsecutiveErrors = 0;
          m_nNudgeFactorMS = 0;
          m_nLastSleepMS = 0;
          m_bReconnecting = !1;
          m_strChatURL = "";
          m_unInstanceID = Math.floor(Math.random() * 4294967296);
          m_strUserSteamID = "";
          m_regexUserEmoticons;
          m_chatScheduledFunc;
          m_steamInterface;
          m_textFilterStore;
          m_bHasAddedWelcomeChat = !1;
          m_mapMutedUsers = {};
          m_mapChannelModeratorUsers = new Map();
          m_mapBroadcastModeratorUsers = new Map();
          m_nRateLimitSeconds = 0;
          m_bRateLimited = !1;
          m_rgChatMessages = [];
          m_rgAnnouncements = [];
          m_latestAnnouncement = null;
          constructor() {
            (0, cr.Gn)(this),
              (this.m_steamInterface = this.CreateSteamInterface());
          }
          InitTextFilter() {
            this.m_textFilterStore = new Pi.s({ BIsFriend: (0, Pi.Q)() });
            let r = 0;
            T.iA.steamid !== "" && (r = new w.b(T.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(r, null, new yi.A());
          }
          get TextFilterStore() {
            return this.m_textFilterStore;
          }
          GetBroadcastSteamID() {
            return this.m_ulBroadcastSteamID;
          }
          GetUserSteamID() {
            return this.m_strUserSteamID;
          }
          CreateSteamInterface() {
            const r = (0, _.q)() ?? ne.Get().GetCMInterface();
            return (
              r || (0, ei.C)(new Rr.D(T.TS.WEBAPI_BASE_URL, T.iA.webapi_token))
            );
          }
          StartForSteamID(r, t) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastSteamID = r),
              (this.m_ulBroadcastID = t),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(r) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastChannelID = r),
              (this.m_strUserSteamID = T.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(r) {
            const t = r.trim();
            if (t.length != 0)
              try {
                const c = P.w.Init(ur.Lw);
                c.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  message: t,
                  instance_id: this.m_unInstanceID.toString(),
                });
                const y = await ur.DK.PostChatMessage(
                    this.m_steamInterface.GetServiceTransport(),
                    c,
                  ),
                  p = {
                    result: y.GetEResult(),
                    cooldown_time_seconds: y.Body().cooldown_time_seconds(),
                    in_game: y.Body().in_game(),
                    persona_name: y.Body().persona_name(),
                  };
                if (p && p.result && p.result != gr.R) {
                  let k = "";
                  p.result == gr.f4
                    ? (k = (0, U.we)("#BroadcastChat_YouMuted"))
                    : p.result == gr.h_
                      ? (k = (0, U.we)(
                          "#BroadcastChat_Cooldown",
                          p.cooldown_time_seconds ?? 0,
                        ))
                      : (k = (0, U.we)("#BroadcastChat_FailedToSendMsg", t)),
                    this.m_rgChatMessages.push({
                      type: j.X8.Error,
                      msg: k,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: p.in_game,
                      persona_name: p.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = p.cooldown_time_seconds ?? 0),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, U.we)("#BroadcastChat_FailedToSendMsg", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(r) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const t = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, T.KC)(),
                  notoken: 1,
                },
                c = await f().get(
                  `${T.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: t, withCredentials: !0, cancelToken: r?.token },
                );
              (!r || !r.token.reason) &&
                (0, cr.h5)(() => {
                  const y = c.data;
                  (this.m_strChatURL = y.view_url_template ?? ""),
                    (this.m_ulChatID = y.chat_id ?? ""),
                    (this.m_strFlairGroupID = y.flair_group_ids?.[0] ?? ""),
                    y.blocked && console.log("User is blocked from chat"),
                    y.steamid && (this.m_strUserSteamID = y.steamid),
                    y.emoticons && this.SetOwnedEmoticons(y.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: j.X8.Notification,
                        msg: (0, U.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    y.moderators_steamid &&
                      y.moderators_steamid.forEach((p) =>
                        this.m_mapBroadcastModeratorUsers.set(p, !0),
                      ),
                    (this.m_chatScheduledFunc = new Ei.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (t) {
              console.error(t), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const r = P.w.Init(O);
              r.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = await Wi.JoinChat(
                this.m_steamInterface.GetServiceTransport(),
                r,
              );
              const c = t.Body().view_url_template(),
                y = t.Body().chat_id();
              if (!y || !c) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = c),
                (this.m_ulChatID = y),
                (this.m_strFlairGroupID =
                  t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: j.X8.Notification,
                  msg: (0, U.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Ei.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (r) {
              console.error(r), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const r = P.w.Init(Dr);
            r.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const c = (
                await Wi.GetChatModerators(
                  this.m_steamInterface.GetServiceTransport(),
                  r,
                )
              )
                .Body()
                .results(),
              y = new Map();
            c.forEach((p) => {
              const k = p.steamid();
              k && y.set(k, !0);
            }),
              (this.m_mapChannelModeratorUsers = y);
          }
          ReplaceChatAnnouncementIfAny(r) {
            r.announcements?.length > 0
              ? ((this.m_rgAnnouncements = r.announcements.reverse()),
                (!this.m_latestAnnouncement ||
                  JSON.stringify(this.m_latestAnnouncement) !=
                    JSON.stringify(
                      this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
                    )) &&
                  (this.m_latestAnnouncement =
                    this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
              : this.m_rgAnnouncements.length > 0 &&
                ((this.m_rgAnnouncements = []),
                (this.m_latestAnnouncement = null));
          }
          async RequestLoop() {
            const r = {},
              t = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            t == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (r.t = this.m_nNextChatTS);
            try {
              const y = (await f().get(t, { params: r })).data;
              this.m_cConsecutiveErrors = 0;
              const p = y.messages
                .map((qr) => ({
                  ...qr,
                  type: j.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((qr) => !this.IsUserMutedLocally(qr.steamid));
              this.m_rgChatMessages.push(...p),
                this.ReplaceChatAnnouncementIfAny(y);
              const k = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > k &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - k,
                  ),
                y.muted)
              )
                for (const qr of y.muted) {
                  const li =
                    qr.muted == this.m_strUserSteamID
                      ? (0, U.we)("#BroadcastChat_YouMuted", qr.persona_name)
                      : (0, U.we)("#BroadcastChat_UserMuted", qr.persona_name);
                  this.m_rgChatMessages.push({
                    type: j.X8.Notification,
                    msg: li,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (y.remove_msgs)
                for (const qr of y.remove_msgs)
                  this.RemoveUserMessagesLocal(qr.steamid);
              let Fr = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                y.initial_delay
              ) {
                if (y.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + y.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = y.next_request),
                  (Fr = y.initial_delay);
              } else {
                if (y.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  y.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = y.next_request),
                  (Fr =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = Fr),
                Fr < 0 && (Fr = 0),
                this.m_chatScheduledFunc?.Schedule(Fr, this.RequestLoop);
            } catch {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS,
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += M),
                this.m_cConsecutiveErrors >= i)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: j.X8.Error,
                    msg: (0, U.we)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                  return;
                }
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc?.Schedule(s, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(r) {
            let t = [];
            for (let y = 0; y < r.length; y++) {
              let p = r[y];
              p.length >= 2 && p[0] == ":"
                ? t.push(p.substr(1, p.length - 2))
                : t.push(p);
            }
            let c = ":(" + t.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(c, "g");
          }
          async UpdateBroadcastChatModerator(r, t, c) {
            {
              const y = new FormData();
              y.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                y.append("moderatorsteamid", r),
                y.append("bAdd", t ? "1" : "0"),
                y.append("sessionid", (0, T.KC)());
              try {
                await f().post(
                  `${T.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  y,
                ),
                  this.m_mapBroadcastModeratorUsers.set(r, t);
                const p = (0, U.we)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  c,
                );
                this.m_rgChatMessages.push({ type: j.X8.Notification, msg: p });
              } catch {
                const p = (0, U.we)(
                  t
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  c,
                );
                this.m_rgChatMessages.push({ type: j.X8.Error, msg: p });
              }
            }
          }
          async UpdateUserChatBan(r, t, c, y, p, k) {
            const Fr = this.m_ulBroadcastSteamID,
              qr = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const li = P.w.Init(Ir);
              li.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: r,
                duration: c * 3600,
                permanent: y,
                undo: k,
              }),
                await Wi.AddChatBan(
                  this.m_steamInterface.GetServiceTransport(),
                  li,
                );
            } else {
              const li = new FormData();
              li.append("broadcaststeamid", Fr),
                li.append("issuersteamid", qr),
                li.append("chattersteamid", r),
                li.append("bantype", t),
                li.append("duration", c.toString()),
                li.append("perm", y ? "1" : "0"),
                li.append("sessionid", (0, T.KC)());
              try {
                await f().post(
                  `${T.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  li,
                ),
                  t == ur.sW.rx
                    ? delete this.m_mapMutedUsers[r]
                    : (this.m_mapMutedUsers[r] = p);
              } catch {
                console.log("Failed to update mute for " + p);
              }
            }
          }
          async MuteUserForSession(r, t) {
            if (r == this.m_strUserSteamID || this.m_ulBroadcastSteamID == r)
              return;
            let c = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[r]) {
              this.m_mapMutedUsers[r] = t;
              try {
                const y = P.w.Init(ur.hW);
                y.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: r,
                  muted: !0,
                }),
                  await ur.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    y,
                  );
              } catch {
                c &&
                  (this.m_rgChatMessages.push({
                    type: j.X8.Error,
                    msg: (0, U.we)("#BroadcastChat_UserMuteFailed", t),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[r]);
              }
            }
            c ||
              this.m_rgChatMessages.push({
                type: j.X8.Notification,
                msg: (0, U.we)("#BroadcastChat_UserMutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(r, t) {
            if (r == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[r] && delete this.m_mapMutedUsers[r],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                const y = P.w.Init(ur.hW);
                y.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: r,
                  muted: !1,
                }),
                  await ur.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    y,
                  ),
                  this.m_rgChatMessages.push({
                    type: j.X8.Notification,
                    msg: (0, U.we)("#BroadcastChat_UserUnmutedLocal", t),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, U.we)("#BroadcastChat_UserUnmuteFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: j.X8.Notification,
                msg: (0, U.we)("#BroadcastChat_UserUnmutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(r) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (t) => t.steamid !== r,
            );
          }
          async RemoveUserMessagesServer(r, t) {
            if (r != this.m_strUserSteamID)
              try {
                const c = P.w.Init(ur.ku);
                c.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: r }),
                  await ur.DK.RemoveUserChatText(
                    this.m_steamInterface.GetServiceTransport(),
                    c,
                  );
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, U.we)("#BroadcastChat_RemoveMessagesFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(r) {
            const t = P.w.Init(ur.Mn);
            t.SetBodyFields({
              chat_id: this.m_ulChatID,
              flair: `^${this.m_strFlairGroupID}^:${r}:`,
            }),
              await ur.DK.UpdateChatMessageFlair(
                this.m_steamInterface.GetServiceTransport(),
                t,
              );
          }
          IsUserMutedLocally(r) {
            return !!this.m_mapMutedUsers[r];
          }
          BIsUserBroadcastModerator(r) {
            return this.m_mapBroadcastModeratorUsers.has(r);
          }
          IsUserBroadcaster(r) {
            return r === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        Q([cr.sH], Yi.prototype, "m_mapChannelModeratorUsers", 2),
          Q([cr.sH], Yi.prototype, "m_mapBroadcastModeratorUsers", 2),
          Q([cr.sH], Yi.prototype, "m_nRateLimitSeconds", 2),
          Q([cr.sH], Yi.prototype, "m_bRateLimited", 2),
          Q([cr.sH], Yi.prototype, "m_rgChatMessages", 2),
          Q([cr.sH], Yi.prototype, "m_latestAnnouncement", 2),
          Q([Bi.o], Yi.prototype, "FetchChatModerators", 1),
          Q([Bi.o], Yi.prototype, "RequestLoop", 1),
          Q([Bi.o], Yi.prototype, "MuteUserForSession", 1);
        var me = g(18614),
          Me = g(90024),
          Hi = g.n(Me),
          Xi = g(34360),
          ce = g(16412),
          ye = g(96197),
          ge = g(22714),
          he = g(86390),
          ze = g(34736),
          je = g(33543),
          Vi = g.n(je);
        const ve = () =>
            (0, l.jsx)("div", {
              className: Vi().FriendsListInsetShadowCtn,
              children: (0, l.jsx)("div", {
                className: Vi().FriendListInsetShadowTop,
              }),
            }),
          pe = () =>
            (0, l.jsx)("div", {
              className: Vi().FriendsListInsetShadowCtn,
              children: (0, l.jsx)("div", {
                className: Vi().FriendListInsetShadowBottom,
              }),
            });
        var Ki = g(36118),
          wi = g(36707),
          ki = g(30096),
          Oe = g(63508),
          di = g.n(Oe),
          Li = g(22950),
          oe = g(29630),
          xe = g(37656),
          Fe = g(11587),
          Ci = g(53107),
          Ie = g(71742),
          fe = g(53113),
          De = g(8287),
          Ni = g.n(De);
        function We(d) {
          const { latestAnnouncement: r } = d;
          return r?.type == "giveaway_draw"
            ? (0, l.jsx)(J, { latestWinner: r })
            : null;
        }
        function J(d) {
          const {
              latestWinner: r,
              className: t,
              strActionButton: c,
              strActionClassname: y,
            } = d,
            p = r.winners_info ?? [],
            k = p.length > 0 ? p[0].accountid : 0,
            [Fr, qr] = I.useState(k),
            li =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            Ai = (0, fe.L$)(
              `${oe.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            Zi = (0, fe.L$)(
              `${oe.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            );
          (0, Ie.wT)(
            !!r.giveaway_gid,
            "Giveaway draw announcement is missing its giveaway",
            r,
          );
          const Ui = (0, xe.w)(r.giveaway_gid);
          let Si =
            Ui.bLoadingGiveawayInfo || Ui.closed
              ? null
              : Ui.seconds_until_drawing;
          const Ri = k === T.iA.accountid;
          I.useEffect(() => {
            Fr != k && setTimeout(() => qr(k), 1500);
          }, [k, Fr]);
          const Ae =
            p.length > 0 && p[0].persona
              ? p[0].persona
              : (0, U.we)("#GA2022_UnknownPersonaName");
          return (0, l.jsx)(Ci.uU, {
            href: li,
            className: t,
            children: (0, l.jsxs)("div", {
              className: (0, wi.A)({
                [Ni().GiveawayWinnerBox]: !0,
                [Ni().GiveawayWinnerAnnounced]: Fr === k,
              }),
              children: [
                (0, l.jsx)("div", {
                  className: Ni().GiveawayWinnerBoxLeft,
                  children: (0, l.jsx)("img", {
                    className: Ni().GiveawayWinnerArt,
                    src: Ai,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: Ni().GiveawayWinnerBoxRight,
                  children: [
                    Fr !== k &&
                      (0, l.jsx)("div", {
                        className: (0, wi.A)(Ni().GiveawayWinnerText),
                        children: (0, U.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, l.jsx)("br", {}),
                        ),
                      }),
                    Fr === k &&
                      (0, l.jsx)("div", {
                        className: (0, wi.A)(
                          Ni().GiveawayWinnerText,
                          Ni().GiveawayWinnerAnnounced,
                        ),
                        children: (0, U.PP)(
                          Ri
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          Ae,
                          (0, l.jsx)("br", {}),
                        ),
                      }),
                    !!(Si && Si > 0) &&
                      (0, l.jsx)("div", {
                        className: Ni().GiveawayWinnerCountdown,
                        children: (0, U.PP)("#GA2022_Congrats_NextDraw", Si),
                      }),
                  ],
                }),
                (0, l.jsx)("img", {
                  className: Ni().GiveawayWinnerQuestion,
                  src: Zi,
                }),
                !!c &&
                  (0, l.jsx)("div", {
                    className: y,
                    children: Ri ? (0, U.we)("#GA2022_YouWonNextSteps") : c,
                  }),
              ],
            }),
          });
        }
        function H(d, r) {
          const [t, c] = (0, e.q3)(() => [
              r?.steamid,
              r?.steamid
                ? Li.es.GetBroadcast(r.steamid)?.m_ulBroadcastID
                : void 0,
            ]),
            [y, p] = I.useState(null);
          I.useEffect(() => {
            let Fr = null;
            return (
              t &&
                ((Fr = ne.Get().GetOrCreateChat(c ?? "", t)),
                Fr.StartForSteamID(t, c ?? ""),
                p(Fr)),
              () => {
                Fr && (Fr.Stop(), p(null));
              }
            );
          }, [t, c]);
          const k = (0, e.q3)(() => y?.m_latestAnnouncement || null);
          if (k?.type == "giveaway_draw") {
            const Fr = k;
            if (Fr.giveaway_gid == d) return Fr;
          }
          return null;
        }
        function sr(d) {
          const { gidGiveaway: r, stream: t } = d,
            c = H(r, t),
            y = (0, Fe.h3)("GameAwardDrop2022");
          let p = null,
            k = Ni().GiveawayRegisterButton;
          return (
            T.iA.logged_in
              ? y?.registered
                ? ((p = (0, U.we)("#GA2022_AlreadyRegistered")),
                  (k = Ni().GiveawayAlreadyRegistered))
                : (p = (0, U.we)("#GA2022_RegisterToWin"))
              : (p = (0, U.we)("#GA2022_RegisterLoginToWin")),
            c
              ? (0, l.jsx)(J, {
                  latestWinner: c,
                  className: Ni().InViewerBar,
                  strActionButton: p,
                  strActionClassname: k,
                })
              : null
          );
        }
        var $i = g(71421),
          Se = Object.defineProperty,
          qe = Object.getOwnPropertyDescriptor,
          _i = (d, r, t, c) => {
            for (
              var y = c > 1 ? void 0 : c ? qe(r, t) : r, p = d.length - 1, k;
              p >= 0;
              p--
            )
              (k = d[p]) && (y = (c ? k(r, t, y) : k(y)) || y);
            return c && y && Se(r, t, y), y;
          };
        const Ne = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          mn = null,
          Ge = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function Te(d, r, t) {
          return t
            ? "presenter"
            : r.GetBroadcastSteamID() === d
              ? "broadcaster"
              : r.BIsUserBroadcastModerator(d)
                ? "moderator"
                : "";
        }
        const Re = (d) => {
            const { userType: r, msg: t, presenterInfo: c } = d;
            if (r === "presenter" && c)
              return (0, l.jsx)("span", {
                children: (0, l.jsx)(ze.fI, {
                  name: c.name ?? "",
                  title: c.title,
                  photo: c.photo,
                  company: c.company ?? "",
                  bioString: c.bio,
                  children: (0, l.jsx)("a", {
                    className: (0, wi.A)(
                      di().MessageName,
                      di().MessagePresenter,
                    ),
                    href: T.TS.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: t.persona_name,
                  }),
                }),
              });
            {
              let y;
              return (
                r === "broadcaster"
                  ? (y = di().MessageBroadcaster)
                  : r === "moderator" && (y = di().MessageModerator),
                (0, l.jsx)("span", {
                  children: (0, l.jsx)("a", {
                    className: (0, wi.A)(di().MessageName, y),
                    href: T.TS.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                    "data-miniprofile": "s" + t.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: t.persona_name,
                  }),
                })
              );
            }
          },
          Ve = (d) => {
            switch (d.userType) {
              case "presenter":
                return (0, l.jsx)($i.Gq, {
                  toolTipContent: (0, U.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: di().RoleFlairContainer,
                    children: (0, l.jsx)(Ki.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, l.jsx)($i.Gq, {
                  toolTipContent: (0, U.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: di().RoleFlairContainer,
                    children: (0, l.jsx)(Ki.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, l.jsx)($i.Gq, {
                  toolTipContent: (0, U.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: di().RoleFlairContainer,
                    children: (0, l.jsx)(Ki.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let qi = class extends I.Component {
          constructor(d) {
            super(d), (0, cr.Gn)(this);
          }
          m_chat = void 0;
          messagesContainer = I.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(d) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== d.steamID ||
                this.props.broadcastID !== d.broadcastID ||
                this.props.broadcastChannelID !== d.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            this.m_chat && this.m_chat.Stop();
            const d = ne
              .Get()
              .GetOrCreateChat(
                this.props.broadcastChannelID ?? "",
                this.props.steamID ?? "",
              );
            if (((this.m_chat = d), this.props.broadcastChannelID))
              d.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let r = this.props.broadcastID || "0";
              d.StartForSteamID(this.props.steamID, r),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(d) {
            return !!d.match(Ge);
          }
          AddLinksEmoticons(d, r) {
            let t = Ne;
            r && (t = this.m_chat?.GetUserEmoticons());
            let c = d.split(Ne);
            const y = [];
            for (let p = 0; p < c.length; p += 1)
              p % 2 === 1
                ? y.push((0, l.jsx)(ye.n, { emoticon: c[p], large: !0 }, p))
                : y.push(c[p]);
            return y;
          }
          HandleScroll(d) {
            const r = this.props.bInvertLayout
              ? d.currentTarget.scrollTop < 6
              : d.currentTarget.scrollTop + d.currentTarget.clientHeight >=
                d.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = r);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(d, r) {
            const t = this.m_chat;
            if (!t || r.type !== j.X8.Chat) return null;
            const c = [],
              y = t.IsUserBroadcaster(t.GetUserSteamID()),
              p = t.BIsUserBroadcastModerator(t.GetUserSteamID());
            return (
              (T.iA && T.iA.is_support) || y || p
                ? c.push(
                    (0, l.jsx)(
                      Xi.kt,
                      {
                        onSelected: () =>
                          t.RemoveUserMessagesServer(r.steamid, r.persona_name),
                        children: (0, U.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, l.jsx)(
                      Xi.kt,
                      {
                        onSelected: () =>
                          t.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            12,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, U.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, l.jsx)(
                      Xi.kt,
                      {
                        onSelected: () =>
                          t.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            24,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, U.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, l.jsx)(
                      Xi.kt,
                      {
                        onSelected: () =>
                          t.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            168,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, U.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, l.jsx)(
                      Xi.kt,
                      {
                        onSelected: () =>
                          t.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            0,
                            !0,
                            r.persona_name,
                          ),
                        children: (0, U.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, l.jsx)(
                      Xi.kt,
                      {
                        onSelected: () =>
                          t.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.rx,
                            0,
                            !1,
                            r.persona_name,
                            !0,
                          ),
                        children: (0, U.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : t.IsUserMutedLocally(r.steamid)
                  ? c.push(
                      (0, l.jsx)(
                        Xi.kt,
                        {
                          onSelected: () =>
                            t.UnmuteUserForSession(r.steamid, r.persona_name),
                          children: (0, U.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : c.push(
                      (0, l.jsx)(
                        Xi.kt,
                        {
                          onSelected: () =>
                            t.MuteUserForSession(r.steamid, r.persona_name),
                          children: (0, U.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((T.iA && T.iA.is_support) ||
                t.IsUserBroadcaster(t.GetUserSteamID())) &&
                r.steamid &&
                (t.BIsUserBroadcastModerator(r.steamid)
                  ? c.push(
                      (0, l.jsx)(
                        Xi.kt,
                        {
                          onSelected: () =>
                            t.UpdateBroadcastChatModerator(
                              r.steamid,
                              !1,
                              r.persona_name,
                            ),
                          children: (0, U.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : c.push(
                      (0, l.jsx)(
                        Xi.kt,
                        {
                          onSelected: () =>
                            t.UpdateBroadcastChatModerator(
                              r.steamid,
                              !0,
                              r.persona_name,
                            ),
                          children: (0, U.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              c.length
                ? (0, $.lX)(
                    (0, l.jsxs)(Xi.tz, {
                      children: [
                        (0, l.jsxs)("div", {
                          className: di().SelectedUserNameCtn,
                          children: [
                            (0, U.we)("#BroadcastChat_User"),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("span", {
                              className: di().SelectedUserName,
                              children: r.persona_name,
                            }),
                          ],
                        }),
                        c,
                      ],
                    }),
                    d,
                  )
                : null
            );
          }
          GetTypeClassName(d) {
            return d.type === j.X8.Notification
              ? di().MessageNotification
              : d.type === j.X8.Error
                ? di().MessageError
                : di().MessageChat;
          }
          FormatMessage(d, r) {
            if (d.type === j.X8.Chat) {
              let t = r ? r.FilterText(d.steamid, d.msg) : d.msg;
              return this.AddLinksEmoticons(t, !1);
            } else return d.msg;
          }
          RenderUserChatLine(d, r, t, c) {
            let y = c?.get(r.steamid);
            const p = r.type === j.X8.Chat ? Te(r.steamid, d, y) : "";
            return (0, l.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(r),
                onContextMenu: (k) => this.OnContextMenu(k, r),
                children: [
                  r.type === j.X8.Chat && (0, l.jsx)(Ve, { userType: p }),
                  r.flair &&
                    (0, l.jsx)("span", {
                      className: di().FlairContainer,
                      children: this.AddLinksEmoticons(r.flair, !1),
                    }),
                  r.type === j.X8.Chat &&
                    (0, l.jsx)(Re, { userType: p, msg: r, presenterInfo: y }),
                  r.type === j.X8.Chat &&
                    d.GetBroadcastSteamID() === r.steamid &&
                    (0, l.jsx)("span", {
                      className: `${di().MessageNotification} ${di().MessageContents}`,
                      children: ` (${(0, U.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  r.type === j.X8.Chat &&
                    d.m_mapChannelModeratorUsers.get(r.steamid) &&
                    (0, l.jsx)("span", {
                      className: `${di().MessageNotification} ${di().MessageContents}`,
                      children: ` (${(0, U.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, l.jsxs)("span", {
                    className: `${di().MessageContents} ${this.AddLinksEmoticons(r.msg, !1).filter((k) => k && typeof k == "string").length ? "" : di().EmoticonsOnly}`,
                    children: [
                      r.type === j.X8.Chat ? " : " : "",
                      this.FormatMessage(r, d.TextFilterStore),
                    ],
                  }),
                ],
              },
              r.instance_id + "_" + r.client_ts + "_" + t,
            );
          }
          render() {
            const {
                hidden: d,
                bPartnerMemberOnlyChat: r,
                bInvertLayout: t,
                onSignIn: c,
              } = this.props,
              y = this.m_chat,
              p = y ? y.m_rgChatMessages : [],
              k = t ? p.reverse() : p,
              Fr = this.m_chat
                ? me.l.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              qr = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, l.jsxs)("div", {
              className: (0, wi.A)(di().ChatPanel, "ChatPanel"),
              style: d ? { display: "none" } : void 0,
              children: [
                (0, l.jsx)(We, { latestAnnouncement: qr }),
                t &&
                  !!this.m_chat &&
                  (0, l.jsx)(Ke, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                    onSignIn: c,
                  }),
                (0, l.jsx)(ve, {}),
                (0, l.jsx)("div", {
                  className: (0, wi.A)(
                    `${di().ChatMessages} ${Hi().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children:
                    y &&
                    k.map((li, Ai) => this.RenderUserChatLine(y, li, Ai, Fr)),
                }),
                (0, l.jsx)(pe, {}),
                !t &&
                  !!this.m_chat &&
                  (0, l.jsx)(Ke, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                    onSignIn: c,
                  }),
              ],
            });
          }
        };
        _i([cr.sH], qi.prototype, "m_chat", 2),
          _i([ki.oI], qi.prototype, "StartChat", 1),
          _i([ki.oI], qi.prototype, "HandleScroll", 1),
          _i([ki.oI], qi.prototype, "OnContextMenu", 1),
          _i([ki.oI], qi.prototype, "RenderUserChatLine", 1),
          (qi = _i([u.PA], qi));
        function Ke(d) {
          const {
            oChat: r,
            emoticonStore: t,
            bPartnerMemberOnlyChat: c,
            onSignIn: y,
          } = d;
          return c && (!T.iA?.logged_in || !T.iA?.is_partner_member)
            ? (0, l.jsx)(et, {})
            : T.iA?.logged_in
              ? (0, l.jsx)(Ce, { oChat: r, emoticonStore: t })
              : y
                ? (0, l.jsx)(it, { onSignIn: y })
                : null;
        }
        function Ce(d) {
          const { oChat: r, emoticonStore: t } = d,
            [c, y] = I.useState(""),
            p = I.useRef(null),
            k = (0, e.q3)(() => r.m_bRateLimited),
            Fr = I.useCallback(
              (Ui) => {
                !Ui.shiftKey &&
                  Ui.charCode === 13 &&
                  (r.m_bRateLimited || (r.SendMessage(c), y("")),
                  Ui.preventDefault());
              },
              [r, c],
            ),
            qr = I.useCallback(
              (Ui, Si = !1) => {
                y(c + `\u02D0${Ui}\u02D0`), p?.current && p.current.focus();
              },
              [c, p],
            ),
            li = () => {
              r.SendMessage(c), y("");
            };
          let Ai = k || c.trim().length == 0,
            Zi = (0, wi.A)(
              Hi().chatSubmitButton,
              c.length == 0 && Hi().disabled,
            );
          return (0, l.jsx)("div", {
            className: (0, wi.A)(di().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, l.jsxs)("div", {
              className: (0, wi.A)(di().ChatEntry, "ChatEntry"),
              children: [
                (0, l.jsxs)("form", {
                  className: `${Hi().chatEntryControls}`,
                  children: [
                    (0, l.jsx)("textarea", {
                      className: Hi().chatTextarea,
                      placeholder: (0, U.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: Fr,
                      onChange: (Ui) => y(Ui.target.value),
                      value: c,
                      ref: p,
                    }),
                    k &&
                      (0, l.jsx)(rt, {
                        nSeconds: r.m_nRateLimitSeconds,
                        bRateLimited: r.m_bRateLimited,
                      }),
                    (0, l.jsx)("button", {
                      className: Zi,
                      title: (0, U.we)("#ChatEntryButton_Submit"),
                      disabled: Ai,
                      onClick: li,
                      children: (0, l.jsx)(Ki.XTb, {}),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  style: { height: "50px" },
                  className: `${Hi().chatEntryActionsContainer}`,
                  children: (0, l.jsxs)("div", {
                    className: Hi().chatEntryActionsGroup,
                    children: [
                      (0, l.jsx)(ge.A, {
                        disabled: !1,
                        OnEmoticonSelected: qr,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: t,
                      }),
                      (0, l.jsx)(_e, { ...d, textInputRef: p }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function _e(d) {
          const { oChat: r, emoticonStore: t, textInputRef: c } = d;
          return r.m_strFlairGroupID &&
            t.flair_list &&
            t.GetFlairListByGroupID(r.m_strFlairGroupID)?.length
            ? (0, l.jsx)(ge.A, {
                disabled: !1,
                OnEmoticonSelected: (y) => {
                  r.UpdateChatMessageFlair(y), c?.current && c.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: t,
                strFlairGroupID: r.m_strFlairGroupID,
                title: (0, U.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, l.jsx)(Ki.P7r, {}),
              })
            : null;
        }
        class rt extends I.Component {
          render() {
            return (0, l.jsx)("div", {
              className: di().TimedProgressBarContainer,
              children: (0, l.jsxs)("div", {
                className: di().wrapper,
                children: [
                  (0, l.jsx)("div", {
                    className: `${di().spinner} ${di().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: `${di().filler} ${di().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: di().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function it(d) {
          return (0, l.jsx)("div", {
            className: di().Description,
            children: (0, l.jsx)(ce.$n, {
              onClick: d.onSignIn,
              className: (0, wi.A)(di().SignInButton),
              children: (0, U.we)("#BroadcastChat_Login"),
            }),
          });
        }
        function et(d) {
          return (0, l.jsxs)("div", {
            className: di().Description,
            children: [
              (0, l.jsx)("div", {
                className: di().LogInPrompt,
                children: (0, U.we)("#Broadcast_PartnerChat_Login"),
              }),
              !T.iA.logged_in &&
                !T.TS.IN_STEAMUI &&
                (0, l.jsx)(ce.$n, {
                  onClick: he.vg,
                  className: (0, wi.A)(di().SignInButton),
                  children: (0, U.we)("#Login_SignIn"),
                }),
            ],
          });
        }
        var tt = g(7132),
          nt = g(83482),
          st = g(48156),
          lt = g(84676),
          be = g(76532),
          de = g(95414),
          at = g(4705),
          ut = g(72865),
          mt = g(85599),
          ct = g(43087),
          Be = g.n(ct),
          Ee = g(29522),
          re = g(40358),
          gt = g(47875),
          Xe = g(21721),
          ot = g(3348);
        const ft = (0, u.PA)((d) => {
          const { appid: r } = d,
            t = (0, ut.n9)(),
            c = (0, I.useRef)({ include_assets: !0, include_release: !0 }),
            y = (0, Ee.$5)(r),
            { data: p } = (0, re.J$)(y),
            { data: k } = (0, re.lv)(y),
            { data: Fr } = (0, re.by)(y),
            [qr, li] = (0, lt.t7)(r, c.current);
          let Ai = (0, wi.A)(
              Be().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            Zi = Be().StoreSaleWidgetImage_mini,
            Ui = Be().StoreSaleImage_mini;
          if (p == null)
            return (0, l.jsx)("div", {
              className: Ai,
              children: (0, l.jsx)(mt.t, { size: "medium" }),
            });
          if (p == null || !p.name)
            return (0, l.jsx)("div", {
              className: be.StoreSaleWidgetEmptyContainer,
            });
          const Si = p.type != st.uE.gQ,
            Ri = (0, nt.wJ)((0, gt._)(p), t);
          return (0, l.jsxs)("div", {
            className: Ai,
            children: [
              (0, l.jsx)("a", {
                href: Ri,
                target: T.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, l.jsx)(de.j, {
                  id: y,
                  children: (0, l.jsx)("div", {
                    className: Zi,
                    children:
                      k &&
                      (0, l.jsx)("img", {
                        className: Ui,
                        src: (0, Xe.b0)(k, "small_capsule"),
                        alt: p.name,
                      }),
                  }),
                }),
              }),
              (0, l.jsxs)("div", {
                className: be.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, l.jsx)("a", {
                    href: Ri,
                    target: T.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, l.jsx)(de.j, {
                      id: y,
                      children: (0, l.jsx)("div", {
                        className: (0, wi.A)(
                          be.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: p.name,
                      }),
                    }),
                  }),
                  Fr &&
                    (0, l.jsx)("div", {
                      className: be.StoreSaleWidgetRelease,
                      children: (0, ot.CC)(Fr),
                    }),
                  !!Si && (0, l.jsx)(at.w, { id: y, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        var Pe = g(99412),
          Ue = g(46477),
          ie = g(61639),
          Le = g(55051),
          Fi = g(25317),
          Ye = g(10142),
          bt = g(23627),
          dt = g(39239),
          wt = g(90405),
          $e = g(19730),
          Ze = g(60480),
          Mt = g(53120),
          ir = g.n(Mt);
        const yt = (0, u.PA)((d) => {
          const { event: r } = d,
            t = r.clanSteamID.GetAccountID(),
            c = !r || !r.jsondata || !r.jsondata.broadcast_item_drops_enabled,
            y = (0, I.useRef)(null),
            [p, k] = (0, I.useState)(
              r ? Ze.pF.GetCreatorHome(r.clanSteamID) : void 0,
            );
          if (
            ((0, I.useEffect)(() => {
              const li = f().CancelToken.source();
              return (
                (y.current = li.cancel),
                (async () => {
                  const Zi = w.b.InitFromClanID(t),
                    Ui = await Ze.pF.LoadCreatorHome(Zi, !1, li);
                  li.token.reason || k(Ui);
                })(),
                () => {
                  y.current && y.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [t]),
            c || !p || !p.BIsLoaded())
          )
            return null;
          const Fr =
              T.TS.COMMUNITY_BASE_URL +
              "gid/" +
              r.jsondata.broadcast_item_drops_details_clan_accountid +
              "/partnerevents/view/" +
              r.jsondata.broadcast_item_drops_details_event_gid,
            qr = r.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
          return (0, l.jsx)("div", {
            className: ir().item_drop_ctn,
            children: (0, l.jsxs)("div", {
              children: [
                (0, U.we)(
                  p.GetName().length > 0
                    ? qr % 60 == 0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : qr % 60 == 0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  qr % 60 == 0 ? qr / 60 : qr,
                  p.GetName(),
                ),
                !!r.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, l.jsx)("a", {
                    href: Fr,
                    target: T.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, U.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var ht = g(95695),
          Gi = g.n(ht),
          zt = g(96715),
          jt = g(10886),
          vt = g(19654),
          pt = g(3209),
          Ot = g(96538),
          xt = g(14256),
          Ji = g.n(xt);
        function Ft(d) {
          const { steamid: r, closeModal: t } = d;
          return (0, l.jsxs)(Ot.o0, {
            strDescription: "",
            strTitle: (0, U.we)("#Button_Share"),
            onCancel: t,
            onOK: t,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, l.jsx)(It, { steamid: r }),
              (0, l.jsx)(Dt, { steamid: r }),
            ],
          });
        }
        function It(d) {
          const { steamid: r } = d,
            t = Wt(r);
          return (0, l.jsxs)("div", {
            className: (0, wi.A)(
              Gi().FlexRowContainer,
              Ji().share_controls_ctn,
            ),
            children: [
              (0, l.jsx)($i.he, {
                toolTipContent: (0, U.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, l.jsx)(Ci.uU, {
                  href: t.strFacebookUrl,
                  className: Ji().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, wi.A)(Gi().Button),
                    src: jt.A,
                  }),
                }),
              }),
              (0, l.jsx)($i.he, {
                toolTipContent: (0, U.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, l.jsx)(Ci.uU, {
                  href: t.strTwitterUrl,
                  className: Ji().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, wi.A)(Gi().Button),
                    src: pt.A,
                  }),
                }),
              }),
              (0, l.jsx)($i.he, {
                toolTipContent: (0, U.we)("#EventDisplay_Share_OnReddit"),
                children: (0, l.jsx)(Ci.uU, {
                  href: t.strRedditUrl,
                  className: Ji().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, wi.A)(Gi().Button),
                    src: vt.A,
                  }),
                }),
              }),
            ],
          });
        }
        function Dt(d) {
          const { steamid: r } = d,
            t = I.createRef(),
            [c, y] = I.useState(""),
            p = I.createRef(),
            k = I.useCallback(
              (qr) => {
                t.current &&
                  t.current.ownerDocument.defaultView?.navigator.clipboard
                    .writeText(t.current.value)
                    .then((li) => {
                      y((0, U.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((li) => {
                      y(
                        (0, U.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", li);
                    });
              },
              [t],
            ),
            Fr = T.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + r;
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsxs)("div", {
                className: (0, wi.A)(Gi().FlexRowContainer, Ji().linkField),
                onClick: k,
                children: [
                  (0, l.jsx)("span", {
                    className: Ji().LinkInputLabel,
                    children: (0, U.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, l.jsx)("textarea", {
                    className: Ji().LinkInput,
                    ref: t,
                    value: Fr,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, l.jsx)($i.he, {
                      toolTipContent: (0, U.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, l.jsx)("div", {
                        className: (0, wi.A)(
                          Gi().Button,
                          Gi().Icon,
                          Ji().LinkButton,
                        ),
                        children: (0, l.jsx)("img", {
                          className: Ji().ClipboardIcon,
                          src: zt.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, l.jsx)("div", {
                ref: p,
                className: Ji().ClipboardText,
                children: c,
              }),
            ],
          });
        }
        function Wt(d) {
          const r = T.TS.COMMUNITY_BASE_URL + "broadcast/share/" + d;
          return {
            strFacebookUrl: r + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: r + "?site=twitter",
            strRedditUrl: r + "?site=reddit",
          };
        }
        var Bt = g(82734),
          Et = g(88003),
          Pt = g(37589),
          Ut = g(34032),
          Lt = Object.defineProperty,
          At = Object.getOwnPropertyDescriptor,
          Qi = (d, r, t, c) => {
            for (
              var y = c > 1 ? void 0 : c ? At(r, t) : r, p = d.length - 1, k;
              p >= 0;
              p--
            )
              (k = d[p]) && (y = (c ? k(r, t, y) : k(y)) || y);
            return c && y && Lt(r, t, y), y;
          };
        const kt = {
          list: [
            { appid: 444090, url: "https://steam.tv/paladins" },
            { appid: 386360, url: "https://steam.tv/smite" },
            { appid: 813820, url: "https://steam.tv/realmroyale" },
            {
              appid: 583950,
              url: "https://steam.tv/artifact",
              broadcasterAccountID: 912972716,
            },
            {
              appid: 570,
              url: "https://steam.tv/dota",
              broadcasterAccountID: 238221269,
            },
            {
              appid: 1025790,
              url: "https://steam.tv/steamawards",
              broadcasterAccountID: 934427243,
            },
            {
              appid: 730,
              url: "https://steam.tv/csgo",
              broadcasterAccountID: 927819071,
            },
          ],
        };
        function Nt() {
          const d = (0, T.Qn)();
          return !(0, T.Y2)() && !d;
        }
        function Kt(d) {
          return Nt() ? (0, l.jsx)(Ti, { ...d }) : null;
        }
        let Ti = class extends I.Component {
          m_cancelSignal = f().CancelToken.source();
          m_bMarkedUsabilitySeen = !1;
          state = {
            bShowPopoutHeader: !1,
            bExpanded: !1,
            bLoadingPreference: !0,
            style: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            innerStyle: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            bStartMuted: !0,
          };
          async componentDidMount() {
            await Fi.j
              .Get()
              .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !Fi.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: Fi.j
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event?.BUsesContentHubForItemSource()
                ? Fi.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : Fi.j.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                Fi.j
                  .Get()
                  .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
              window.setTimeout(() => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    style: { ...this.state.style, maxHeight: "100vh" },
                  });
              }, 10);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "BroadcastEmbeddable component unmounted",
            );
          }
          ToggleBroadcastExpandShrink() {
            let d = Fi.j.Get().GetPlayReadyStream(this.props);
            if (!d) return;
            const r = this.state.bExpanded,
              t = Li.es.GetOrCreateBroadcastInfo(d.steamid).m_nAppID;
            (0, Fi.U7)(t, r ? ie.Mc.U6 : ie.Mc.B_, d.snr),
              r && (0, Ue.D)()?.AddEvent(Le.Xm.d),
              window.setTimeout(
                () =>
                  this.setState({
                    innerStyle: {
                      ...this.state.innerStyle,
                      maxHeight: r ? "0vh" : "100vh",
                    },
                  }),
                10,
              ),
              r ||
                this.setState({ bExpanded: !this.state.bExpanded }, () =>
                  Fi.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                Fi.j.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(d) {
            this.setState({ bStartMuted: !1 }),
              Fi.j.Get().GetPlayReadyStream(this.props)?.accountid !=
                d.accountid &&
                (await Fi.j.Get().AttemptToPlayStream(this.props, d));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const d = (Fi.j.Get().GetStreams(this.props) ?? []).filter(
              (r) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(r),
            );
            await Fi.j.Get().PlayFromAvailableStreams(this.props, d, !0);
          }
          ConstructSidePanels(d, r) {
            let t = { bRightPanelArtworkOrEmpty: !0 };
            if (this.props.bWidePlayer) return t;
            const c = Fi.j.Get().GetConcurrentStreams(this.props) > 1;
            let y = Li.es.GetOrCreateBroadcastInfo(d.steamid).m_nAppID,
              p = (0, l.jsx)(Qe, { ImgUrl: d.right_panel }, "right" + y),
              k = (0, l.jsx)(Qe, { ImgUrl: d.left_panel }, "left" + y);
            const Fr = 11;
            if (y < Fr) {
              const qr = d.steamid
                ? me.l.GetAppIDListForBroadcasterSteamID(d.steamid)
                : void 0;
              qr && qr.length === 1 && (y = qr[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                y >= Fr &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((p = (0, l.jsx)(ft, { appid: y }, "mini" + d.accountid)),
                (t.bRightPanelArtworkOrEmpty = !1)),
              c && !r
                ? ((t.leftPanel = (0, l.jsx)(
                    $t,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: d,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + y,
                  )),
                  (t.rightPanel = p))
                : r
                  ? ((t.leftPanel = (0, l.jsx)("div", {})),
                    (t.rightPanel = (0, l.jsx)(Jt, {
                      stream: d,
                      orientation: "rightside",
                    })),
                    (t.bRightPanelArtworkOrEmpty = !1))
                  : ((t.leftPanel = k), (t.rightPanel = p)),
              t
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              (0, Ue.D)()?.AddEvent(Le.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            const d = Fi.j.Get().GetPlayReadyStream(this.props);
            if (d) {
              this.MarkBroadcastSeen();
              let r = Fi.j.Get().GetChatVisibility() === "show";
              const {
                  event: t,
                  language: c,
                  fnRenderBroadcastContext: y,
                } = this.props,
                p = t
                  ? {
                      ...d,
                      left_panel: t.GetImageURL(
                        "broadcast_left",
                        c || (0, Pe.sfN)(T.TS.LANGUAGE),
                      ),
                      right_panel: t.GetImageURL(
                        "broadcast_right",
                        c || (0, Pe.sfN)(T.TS.LANGUAGE),
                      ),
                      store_title: t.GetBroadcastTitle(
                        c || (0, Pe.sfN)(T.TS.LANGUAGE),
                      ),
                      broadcast_chat_visibility: t.GetBroadcastChatVisibility(),
                    }
                  : d;
              let k = this.ConstructSidePanels(p, r),
                Fr = p.store_title ? p.store_title : p.title,
                qr = Fi.j.Get().GetConcurrentStreams(this.props) > 1;
              const li = () => {
                p.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, l.jsx)(I.Fragment, {
                children: (0, l.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, l.jsxs)("div", {
                      className: (0, wi.A)({
                        [ir().bordered_container]: !0,
                        [ir().Event]: !!t,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, l.jsxs)("div", {
                          className: (0, wi.A)(
                            ir().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, l.jsx)(bt.K, {}),
                            (0, l.jsx)("div", {
                              className: ir().streamTitle,
                              children: Fr,
                            }),
                            (0, l.jsxs)("div", {
                              className: ir().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, l.jsx)($i.he, {
                                    toolTipContent: (0, U.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, l.jsx)("div", {
                                      className: ir().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${T.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, l.jsx)($i.he, {
                                  toolTipContent: (0, U.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, l.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? ir().bordered_corner_expanded
                                      : ir().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!p.gamedata_subtitle &&
                              (0, l.jsx)("div", {
                                className: ir().bordered_subtitle,
                                children: p.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, l.jsxs)("div", {
                            className: (0, wi.A)({
                              [ir().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: qr,
                              broadcast_right_panel_simple:
                                k.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: r,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, l.jsx)("div", {
                                className: ir().LeftPanelCtn,
                                children: k.leftPanel,
                              }),
                              (0, l.jsx)(we, {
                                stream: p,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: y,
                                fnOnVideoEnd: li,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, l.jsx)("div", {
                                className: ir().RightPanelCtn,
                                children: k.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, l.jsx)(se, {
                                  stream: p,
                                  bMultistream: qr,
                                  chatAnnouncementGivewayGID: k.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!t &&
                      !!(
                        t.jsondata && t.jsondata.broadcast_item_drops_enabled
                      ) &&
                      (0, l.jsx)(yt, { event: t }),
                    (0, l.jsx)("div", { className: ir().clear_div }),
                  ],
                }),
              });
            } else
              return (0, l.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        Qi([ki.oI], Ti.prototype, "ToggleBroadcastExpandShrink", 1),
          Qi([ki.oI], Ti.prototype, "OnShrinkTransitionEnd", 1),
          Qi([ki.oI], Ti.prototype, "onStreamSelect", 1),
          Qi([ki.oI], Ti.prototype, "PlayNextNonVOD", 1),
          (Ti = Qi([u.PA], Ti));
        class we extends I.Component {
          m_iVideoContainerRef = I.createRef();
          constructor(r) {
            super(r),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const r = Li.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Fi.U7)(r, ie.Mc.n6, this.props.stream.snr),
              (0, Ue.D)()?.AddEvent(Le.Xm.ok),
              this.setState({ bPopout: !1, bPreventPopup: !0 });
          }
          OnEnter() {
            !this.state.bPreventPopup &&
              this.state.bPopout &&
              this.setState({ bPopout: !1 });
          }
          OnLeave() {
            !this.state.bPreventPopup &&
              !this.state.bPopout &&
              this.setState({ bPopout: !0 });
          }
          render() {
            return (0, l.jsx)("div", {
              className: ir().wrapper,
              children: (0, l.jsx)(Pt.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (r) => {
                  r.isIntersecting || this.OnLeave();
                },
                className: (0, wi.A)({
                  [ir().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [ir().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, l.jsxs)("div", {
                  className: this.state.bPopout
                    ? ir().broadcast_floating
                    : ir().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, l.jsx)(Je, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, l.jsx)("div", {
                      className: ir().BroadcastPlayerContainer,
                      children: (0, l.jsx)(tt.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: ur.nn.fe,
                        bStartMuted: this.props.bStartMuted,
                        fnRenderBroadcastContext:
                          this.props.fnRenderBroadcastContext,
                        fnOnVideoEnd: this.props.fnOnVideoEnd,
                        nAppIDVOD: this.props.stream.nAppIDVOD,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }
        }
        Qi([ki.oI], we.prototype, "CloseBroadcastPopup", 1),
          Qi([ki.oI], we.prototype, "OnEnter", 1),
          Qi([ki.oI], we.prototype, "OnLeave", 1);
        function Xt(d) {
          const { stream: r } = d,
            [t] = (0, e.q3)(() => [r.steamid]),
            c = Li.es.GetOrCreateBroadcastInfo(t).m_nAppID,
            y = kt.list.find(
              (p) =>
                p.appid == c &&
                (!p.broadcasterAccountID ||
                  p.broadcasterAccountID == r.accountid),
            );
          if (y) {
            let p = y.url;
            return (
              (T.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (p = "steam://openurl/" + p),
              (0, l.jsx)("a", {
                href: p,
                children: (0, U.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const p = T.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
            return (0, l.jsx)($i.he, {
              toolTipContent: (0, U.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, l.jsx)("a", {
                href: p,
                className: ir().external_link,
                children: (0, l.jsx)(Ki.GrD, {}),
              }),
            });
          }
        }
        let se = class extends I.Component {
          OnToggleChat(d) {
            d.preventDefault();
            const r = Li.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Fi.U7)(
              r,
              Fi.j.Get().GetChatVisibility() === "show" ? ie.Mc.kz : ie.Mc.bW,
              this.props.stream.snr,
            ),
              Fi.j.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const d = Li.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Fi.U7)(d, ie.Mc.Is, this.props.stream.snr);
          }
          render() {
            const d = Fi.j.Get().GetChatVisibility() != "remove",
              r = Fi.j.Get().GetChatVisibility() === "hide",
              t = !this.props.stream.nAppIDVOD,
              c = t;
            let y = Number.parseInt(
              "" +
                Li.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, l.jsxs)("div", {
              className: (0, wi.A)(ir().viewer_bar, "viewer_bar"),
              children: [
                (0, l.jsxs)("div", {
                  className: (0, wi.A)(ir().viewer_count, "viewer_count"),
                  children: [(0, l.jsx)(Ki.y_e, {}), (0, $e.Dq)(y)],
                }),
                (0, l.jsxs)("div", {
                  className: (0, wi.A)(ir().viewer_links, "viewer_links"),
                  children: [
                    !!(d && !r && this.props.bMultistream) &&
                      (0, l.jsx)("div", {
                        className: ir().chat_link,
                        children: (0, l.jsx)("a", {
                          href: "#",
                          className: ir().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, U.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    d &&
                      (0, l.jsxs)("div", {
                        className: ir().chat_link,
                        children: [
                          (0, l.jsx)(Ki.ROZ, {}),
                          (0, l.jsx)("a", {
                            href: "#",
                            className: ir().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, U.we)(
                              r
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    c &&
                      (0, l.jsxs)("div", {
                        className: ir().chat_link,
                        children: [
                          (0, l.jsx)(Ki.SYj, {}),
                          (0, l.jsx)("a", {
                            href: "#",
                            className: ir().ChatToggle,
                            onClick: (p) => {
                              const k = (0, Bt.uX)(p);
                              k &&
                                (0, Et.pg)(
                                  (0, l.jsx)(Ft, {
                                    steamid: this.props.stream.steamid ?? "",
                                  }),
                                  k,
                                );
                            },
                            children: (0, U.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, l.jsx)($i.he, {
                      toolTipContent: (0, U.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, l.jsx)("a", {
                        href:
                          T.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: T.TS.IN_CLIENT ? void 0 : "_blank",
                        className: ir().settings_link,
                        children: (0, l.jsx)(Ki.wB_, {}),
                      }),
                    }),
                    t && (0, l.jsx)(Xt, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, l.jsx)(sr, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        Qi([ki.oI], se.prototype, "OnToggleChat", 1),
          Qi([ki.oI], se.prototype, "onWatchBroadcastPage", 1),
          (se = Qi([u.PA], se));
        class Qe extends I.Component {
          render() {
            let r = this.props.ImgUrl;
            return (0, l.jsxs)("div", {
              className: ir().SidePanelBackground,
              children: [
                r &&
                  (0, l.jsx)("img", {
                    className: ir().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !r && (0, l.jsx)("div", { className: ir().side_panels }),
              ],
            });
          }
        }
        const Je = (0, u.PA)((d) => {
          const { steamIDBroadcast: r } = d;
          let t = Li.es.GetOrCreateBroadcastInfo(r).m_nAppID;
          t = t != Li.fO ? t : 0;
          const c = (0, Ee.$5)(t),
            { data: y } = (0, re.J$)(c);
          return (0, l.jsxs)("div", {
            className: [ir().PopOutVideoTitleBar, ir().NoSeslect].join(" "),
            children: [
              y
                ? (0, l.jsx)(de.u, {
                    id: c,
                    className: ir().PopOutVideoTitleText,
                    children: (0, U.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, l.jsx)("div", {
                    className: ir().PopOutVideoTitleText,
                    children: (0, U.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, l.jsx)($i.he, {
                toolTipContent: (0, U.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, l.jsx)("button", {
                  className: ir().PopOutVideoCloseButton,
                  onClick: d.OnPreventPopup,
                  children: (0, l.jsx)(Ki.X, {}),
                }),
              }),
            ],
          });
        });
        function Yt(d, r) {
          const t = Li.es.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
            c = Ye.A.Get().GetApp(t),
            y = d && c?.GetAssets()?.GetHeaderURL();
          return parseInt(
            y
              ? ir().strStreamIconCapsuleArtHeight
              : ir().strStreamIconScreenshotArtHeight,
          );
        }
        function $t(d) {
          const {
              curStream: r,
              onStreamSelect: t,
              fnFilterStreams: c,
              bShowCapsuleArt: y,
              broadcastEmbedContext: p,
            } = d,
            k = (0, I.useRef)(null),
            Fr = (0, I.useMemo)(() => {
              const qr = (Fi.j.Get().GetStreams(p) ?? []).filter(
                (li) => !c || c(li),
              );
              return (0, Fi.MU)(qr), qr;
            }, [p, c]);
          return (
            (0, I.useEffect)(() => {
              if (k && k.current) {
                const qr = Fr.map(
                  (li) => Li.es.GetOrCreateBroadcastInfo(li.steamid).m_nAppID,
                ).filter(Boolean);
                Ye.A.Get()
                  .QueueMultipleAppRequests(qr, { include_assets: !0 })
                  .then(() => {
                    if (k.current) {
                      let li = 0;
                      for (const Ai of Fr) {
                        if (r.accountid == Ai.accountid) break;
                        li += Yt(y, Ai);
                      }
                      k.current.scrollTop = li;
                    }
                  });
              }
            }, [Fr, y, r.accountid, k]),
            (0, l.jsx)("div", {
              ref: k,
              className: (0, wi.A)({
                [ir().side_panels]: !0,
                side_panels: !0,
                [ir().multistream]: !0,
                [ir().scrollingstreams]: Fr.length > 3,
              }),
              children: (0, l.jsx)("div", {
                className: ir().MultiStreamCtn,
                children: Fr.map((qr) =>
                  (0, l.jsx)(
                    Zt,
                    {
                      stream: qr,
                      bSelected: r.accountid == qr.accountid,
                      onStreamSelect: t,
                      bShowCapsuleArt: y,
                    },
                    qr.accountid ?? qr.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function Zt(d) {
          const {
            onStreamSelect: r,
            bSelected: t,
            stream: c,
            bShowCapsuleArt: y,
          } = d;
          let p = (0, e.q3)(
            () => Li.es.GetOrCreateBroadcastInfo(c.steamid).m_nAppID,
          );
          p = p != Li.fO ? p : 0;
          const k = (0, Ee.$5)(p),
            { data: Fr } = (0, re.J$)(k),
            { data: qr } = (0, re.lv)(k);
          if (!(0, Fi.fn)(c)) return null;
          const li = y && qr ? (0, Xe.b0)(qr, "header") : void 0,
            Ai = Number.parseInt("" + c.viewer_count),
            Zi = !Number.isNaN(Ai),
            Ui = !!c.nAppIDVOD && Fr?.name;
          return (0, l.jsxs)("div", {
            className: (0, wi.A)({
              [ir().stream_icon_and_viewer_container]: !0,
              [ir().stream_featured]:
                c.current_selection_priority == Ut.mY.k_eFeatured,
              [ir().display_capsule_art]: !!li,
            }),
            children: [
              (0, l.jsx)(de.j, {
                id: k,
                hoverClassName: ir().StreamCapsule,
                children: (0, l.jsx)(wt.K, {
                  className: (0, wi.A)(
                    ir().stream_icon_container,
                    t && ir().stream_selected,
                  ),
                  onClick: () => r && r(c),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, l.jsx)(Qt, {
                    strThumbnail: c.thumbnail_http_address,
                    bSelected: t,
                    strCapsuleArtURL: li,
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: (0, wi.A)(ir().viewer_count, !Zi && ir().vod_title),
                children: Zi
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(Ki.y_e, {}),
                        (0, l.jsx)("div", {
                          className: ir().ViewerNum,
                          children: (0, $e.Dq)(Ai),
                        }),
                      ],
                    })
                  : Ui,
              }),
            ],
          });
        }
        function Qt(d) {
          const { strCapsuleArtURL: r, strThumbnail: t, bSelected: c } = d,
            y = c ? ir().stream_icon_selected : ir().stream_icon;
          if (r) {
            const p = [r];
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("img", {
                  className: (0, wi.A)(y, ir().stream_icon_hide_on_hover),
                  src: r,
                }),
                (0, l.jsx)(dt.o, {
                  className: (0, wi.A)(y, ir().stream_icon_show_on_hover),
                  srcs: p,
                }),
              ],
            });
          } else return (0, l.jsx)("img", { className: y, src: t });
        }
        function Jt(d) {
          const { stream: r, orientation: t } = d,
            c = t == "below",
            [y, p] = (0, e.q3)(() => {
              const Fr = r.steamid ? Li.es.GetBroadcast(r.steamid) : void 0;
              return [Fr, Fr?.m_ulBroadcastID];
            }),
            k = (0, e.q3)(() => r.steamid);
          return y
            ? (0, l.jsx)("div", {
                className: (0, wi.A)({
                  [ir().chat_below_container]: c,
                  [ir().chat_rightside_container]: !c,
                  [ir().store_chat_ctn]: !0,
                }),
                children: (0, l.jsx)("div", {
                  className: ir().ChatContainer,
                  children: (0, l.jsx)(qi, {
                    emoticonStore: Fi.MX,
                    watchLocation: ur.nn.fe,
                    steamID: k,
                    broadcastID: p,
                  }),
                }),
              })
            : null;
        }
      },
      7132: (Mi, hi, g) => {
        "use strict";
        g.r(hi),
          g.d(hi, {
            BroadcastDetails: () => Dr,
            LinkOverlay: () => dr,
            default: () => G,
          });
        var l = g(7850),
          mr = g(14947),
          f = g(75844),
          u = g(90626),
          e = g(16346),
          I = g(41301),
          cr = g(83482),
          $ = g(22950),
          ur = g(10142),
          j = g(30096),
          gr = g(8323),
          P = Object.defineProperty,
          yi = Object.getOwnPropertyDescriptor,
          Rr = (a, b, h, z) => {
            for (
              var O = z > 1 ? void 0 : z ? yi(b, h) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, h, O) : F(O)) || O);
            return z && O && P(b, h, O), O;
          };
        class ei extends u.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new gr.LU();
          m_bSetupComplete = !1;
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(b) {
            this.m_elCanvas = b;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let b = this.props.scaleFactor || [1, 1],
              h = this.props.elementRef,
              z = this.props.updateRate;
            const O = this.m_elCanvas.getContext("2d");
            if (!O) return;
            this.m_Context = O;
            let x = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              F = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = x),
              (this.m_elCanvas.height = F),
              (this.props.blurAmount ?? 0) > 0 &&
                (O.filter = "blur(" + this.props.blurAmount + "px)");
            let S = () => {
              O.drawImage(h, 0, 0, x * b[0], F * b[1]),
                z > 0 && this.m_schUpdate.Schedule(z, S);
            };
            S(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, l.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        Rr([j.oI], ei.prototype, "BindCanvasRef", 1),
          Rr([j.oI], ei.prototype, "updateCanvas", 1);
        var _ = g(34360),
          w = g(16569),
          o = g(90740),
          m = g(36707);
        const n = 500;
        class or extends u.Component {
          render() {
            let {
              keyExtractor: b,
              style: h,
              duration: z = n,
              className: O,
              children: x,
              childRef: F,
              ...S
            } = this.props;
            const Di = { ...(h || {}), transitionDuration: `${z / 1e3}s` };
            return (0, l.jsx)(w.A, {
              ...S,
              className: (0, m.A)("crossfade", O),
              children: (0, l.jsx)(
                o.A,
                {
                  nodeRef: F,
                  classNames: "crossfade-anim",
                  timeout: z,
                  style: Di,
                  children: x,
                },
                b(),
              ),
            });
          }
        }
        function A(a) {
          const { src: b, ...h } = a,
            z = { backgroundImage: `url(${b})` },
            O = u.useRef(null);
          return (0, l.jsx)(or, {
            style: z,
            keyExtractor: () => b,
            childRef: O,
            ...h,
            children: (0, l.jsx)("div", { ref: O, className: "crossfade-img" }),
          });
        }
        var v = g(61431),
          W = g(79590),
          X = g(79167),
          K = g(36118),
          er = g(53107),
          wr = g(82734),
          L = g(18210),
          Ii = g(19730),
          $r = g(13854),
          N = g(3166),
          E = g(6600),
          tr = g(48937),
          Mr = g(15527),
          D = g.n(Mr),
          Z = g(85599),
          nr = Object.defineProperty,
          zr = Object.getOwnPropertyDescriptor,
          jr = (a, b, h, z) => {
            for (
              var O = z > 1 ? void 0 : z ? zr(b, h) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, h, O) : F(O)) || O);
            return z && O && nr(b, h, O), O;
          };
        function vr() {
          return (0, l.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, L.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const pr = (0, f.PA)((a) => {
          let b = a.video;
          if (b && (b.IsBroadcastClip() || b.IsBroadcastVOD())) return null;
          let h = $.fK.Loading,
            z = "";
          if (b) {
            (h = b.GetBroadcastState()), (z = b.GetBroadcastStateDescription());
            let x = b.IsBuffering();
            h == $.fK.Unlocking && ((h = $.fK.Loading), (z = "")),
              h == $.fK.Ready && x && ((h = $.fK.Loading), (z = ""));
          }
          if (
            (b && h != $.fK.Error && b.GetUserInputNeeded()) ||
            h == $.fK.Ready
          )
            return null;
          let O = h == $.fK.Loading;
          return (0, l.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              O && (0, l.jsx)(Z.t, {}),
              !O &&
                (0, l.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: z,
                }),
            ],
          });
        });
        class si extends u.Component {
          OnClick() {
            $.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, l.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, l.jsx)(K.jGG, {}),
                (0, l.jsx)("span", {
                  children: (0, L.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        jr([j.oI], si.prototype, "OnClick", 1);
        var Or = Object.defineProperty,
          xi = Object.getOwnPropertyDescriptor,
          Y = (a, b, h, z) => {
            for (
              var O = z > 1 ? void 0 : z ? xi(b, h) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, h, O) : F(O)) || O);
            return z && O && Or(b, h, O), O;
          };
        let ti = class extends u.Component {
          constructor(a) {
            super(a);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let a = this.props.stats;
            return (0, l.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, l.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, l.jsx)(K.sED, {}),
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, l.jsx)(fr, { stats: a }),
              ],
            });
          }
        };
        Y([j.oI], ti.prototype, "HideStats", 1), (ti = Y([f.PA], ti));
        let fr = class extends u.Component {
          constructor(a) {
            super(a);
          }
          createBufferedRange(a) {
            let b = this.props.stats,
              h = [],
              z = a ? "vidbuf" : "audbuf",
              O = a
                ? b.GetNumBufferedVideoRanges()
                : b.GetNumBufferedAudioRanges();
            if (O > 0)
              for (let x = 0; x < O; ++x) {
                let F = (0, L.we)(
                    a
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    x,
                  ),
                  S = a
                    ? b.GetBufferedVideoSegmentForDisplay(x)
                    : b.GetBufferedAudioSegmentForDisplay(x);
                h.push(
                  (0, l.jsxs)(
                    "div",
                    {
                      children: [
                        F,
                        " ",
                        (0, l.jsx)("span", {
                          className: "videoStatsValue",
                          children: S,
                        }),
                      ],
                    },
                    z + x,
                  ),
                );
              }
            else {
              let x = (0, L.we)(
                a
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              h.push((0, l.jsx)("div", { children: x }, z + "none"));
            }
            return h;
          }
          render() {
            let a = this.props.stats;
            return (0, l.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, l.jsxs)("div", {
                    children: [
                      (0, L.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, l.jsx)("span", {
                        className: "videoStatsValue",
                        children: a.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, l.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [a.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, l.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [a.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, L.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        fr = Y([f.PA], fr);
        var ni = g(82581),
          br = Object.defineProperty,
          fi = Object.getOwnPropertyDescriptor,
          q = (a, b, h, z) => {
            for (
              var O = z > 1 ? void 0 : z ? fi(b, h) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, h, O) : F(O)) || O);
            return z && O && br(b, h, O), O;
          };
        class Oi extends u.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = u.createRef();
          m_elSubtitlesPanel = u.createRef();
          m_SubtitlesButtonPos;
          constructor(b) {
            super(b), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(b) {
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                b.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(b) {
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                b.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(b) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, wr.id)(this.m_elSettingsPanel, b.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, wr.id)(this.m_elSubtitlesPanel.current, b.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(b) {
            this.m_elSettingsButton = b;
          }
          BindSettingsPanel(b) {
            this.m_elSettingsPanel = b;
          }
          OnShowStats(b) {
            this.props.onShowStats(b),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let b = !1,
              h = !1;
            const { video: z, actions: O } = this.props;
            let x,
              F = [],
              S = 0,
              Di = (0, l.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const lr = 260,
              ar = 32;
            if (
              (this.state.bSettingsOpen &&
                ((b = !0),
                (x = this.props.video.GetVideoRepresentations()),
                (F = x.map((rr) =>
                  (0, l.jsx)(
                    ni.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(rr),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: rr.selected,
                      children: rr.displayName,
                    },
                    rr.id,
                  ),
                )),
                F.push(Di),
                F.push(
                  (0, l.jsxs)(
                    ni.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, L.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (S = 0 - (F.length * 21 + ar))),
              this.state.bSubtitlesOpen)
            ) {
              (h = !0),
                (F = []),
                F.push(
                  (0, l.jsx)(
                    ni.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, L.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let rr = 0;
                rr < this.props.video.ListSubtitles().length;
                rr++
              ) {
                const hr = this.props.video.ListSubtitles()[rr];
                F.push(
                  (0, l.jsx)(
                    ni.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(hr.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: hr.mode === "showing",
                      children: hr.label,
                    },
                    hr.language,
                  ),
                );
              }
              S = 0 - (lr + ar);
            }
            const gi =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, l.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                gi &&
                  (0, l.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (gi ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, l.jsx)(K.N8C, {}),
                  }),
                (0, l.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (b ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, l.jsx)(K.wB_, {}),
                }),
                (0, l.jsx)(yr, { video: z }),
                O &&
                  O.map((rr) =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: rr,
                      },
                      rr.key,
                    ),
                  ),
                b &&
                  (0, l.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: S,
                    },
                    children: (0, l.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: F,
                    }),
                  }),
                h &&
                  (0, l.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: lr + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: S,
                    },
                    children: (0, l.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: F,
                    }),
                  }),
              ],
            });
          }
        }
        q([j.oI], Oi.prototype, "OnVideoControlClick", 1),
          q([j.oI], Oi.prototype, "OnSubtitlesClick", 1),
          q([j.oI], Oi.prototype, "OnMouseUp", 1),
          q([j.oI], Oi.prototype, "bindSettingsButton", 1),
          q([j.oI], Oi.prototype, "BindSettingsPanel", 1),
          q([j.oI], Oi.prototype, "OnShowStats", 1);
        const Lr = !0;
        let yr = class extends u.Component {
          constructor(a) {
            super(a), (0, mr.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = Lr;
          m_schHideSlider = new gr.LU();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let a = this.props.video,
              b = a.IsMuted();
            a.SetMute(!b), a.GetVolume() < 0.01 && a.SetVolume(0.5);
          }
          OnMouseEnter(a) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(a) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(a) {
            (this.m_bChildDragging = a), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = Lr),
              );
          }
          render() {
            let a = this.props.video,
              b = a.IsMuted(),
              h = a.GetVolume() * 100,
              z = "videoControlButton";
            h > 65
              ? (z += " HighestVolume")
              : h > 45
                ? (z += " HighVolume")
                : h < 46 && h > 24
                  ? (z += " MedVolume")
                  : h < 25 && (z += " LowVolume");
            let O = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (O += " ShowVolumeSlider"),
              b && (O += " muted"),
              (0, l.jsx)("div", {
                className: O,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, l.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, l.jsx)("div", {
                      className: z,
                      onClick: this.ToggleMute,
                      children: (0, l.jsx)(K.fSs, {}),
                    }),
                    (0, l.jsx)(ai, { video: a, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        q([mr.sH], yr.prototype, "m_bShowSlider", 2),
          q([j.oI], yr.prototype, "ToggleMute", 1),
          q([j.oI], yr.prototype, "OnMouseEnter", 1),
          q([j.oI], yr.prototype, "OnMouseLeave", 1),
          q([j.oI], yr.prototype, "OnChildDrag", 1),
          (yr = q([f.PA], yr));
        let ai = class extends u.Component {
          constructor(a) {
            super(a), (0, mr.Gn)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(a) {
            let b = a.currentTarget;
            (this.m_elSlider = b),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(b, a.clientX),
              b.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              b.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(a) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, a.clientX);
          }
          OnMouseUp(a) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, a.clientX);
            let b = this.props.video;
            b.IsMuted() && b.SetVolume(this.m_nVolumeStartOfDrag),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(a, b) {
            let h = a.getBoundingClientRect(),
              z = $r.Fu(b, h.left, h.right, 0, 1),
              O = $r.OQ(z, 0, 1),
              x = this.props.video;
            x.SetMute(z < 0.01), x.SetVolume(O);
          }
          render() {
            let a = this.props.video,
              b = a.GetVolume() * 100;
            a.IsMuted() && (b = 0);
            let z = { left: `${b}%` },
              O = { width: `${b}%` };
            return (0, l.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, l.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, l.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: O,
                }),
                (0, l.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: z,
                }),
              ],
            });
          }
        };
        q([j.oI], ai.prototype, "OnMouseDown", 1),
          q([j.oI], ai.prototype, "OnMouseMove", 1),
          q([j.oI], ai.prototype, "OnMouseUp", 1),
          q([mr.XI], ai.prototype, "SetVolumeWithCoord", 1),
          (ai = q([f.PA], ai));
        var Zr = g(43434),
          Qr = Object.defineProperty,
          Jr = Object.getOwnPropertyDescriptor,
          B = (a, b, h, z) => {
            for (
              var O = z > 1 ? void 0 : z ? Jr(b, h) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, h, O) : F(O)) || O);
            return z && O && Qr(b, h, O), O;
          };
        const Ar = 3200,
          xr = 15;
        let G = class extends u.Component {
          m_schHideControls = new gr.LU();
          m_schUnmountControls = new gr.LU();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new gr.Ji();
          constructor(a) {
            super(a),
              (this.state = {
                bMountControls: !1,
                bControlsVisible: !1,
                bShowStats: !1,
                video: null,
                nResizedHeight: null,
                bFullscreen: !1,
              });
          }
          StopVideo() {
            let a = this.state.video;
            a &&
              ($.es.StopVideo(a),
              this.setState({ video: null }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let a = this.state.video;
            return !a || a.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let a = this.state.video;
            a && a.StopPlaybackTillUserInput();
          }
          componentDidUpdate(a, b) {
            !b.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((z) => ({
                    bControlsVisible: z.bMountControls,
                  }));
                }, 15)
              : b.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== a.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const h = this.props.nAppIDVOD;
            h &&
              (b.strInitialCapsuleImageUrl === void 0 || a.nAppIDVOD != h) &&
              ur.A.Get()
                .QueueAppRequest(h, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const O =
                    ur.A.Get().GetApp(h)?.GetAssets()?.GetMainCapsuleURL() ||
                    "";
                  this.setState({ strInitialCapsuleImageUrl: O });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(a) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = a),
              a &&
                (this.m_listeners.AddEventListener(
                  a,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  a,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  a,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  a,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(a) {
            let b = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? a &&
                  (b = $.es.CreateBroadcastVideo(
                    a,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? a &&
                    (b = $.es.CreateClipVideo(
                      a,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    a &&
                    ((b = $.es.CreateVODVideo(
                      a,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      b.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              b &&
                (this.props.bStartMuted && b.SetMute(!0),
                this.props.bStartWithSubtitles && b.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? b.StopPlaybackTillUserInput()
                  : b.Play()),
              this.setState({ video: b }),
              this.props.fnSetBroadcastVideo?.(b),
              (this.m_elVideo = a);
          }
          OnMouseDown(a) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = a.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(a) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(Ar, this.HideControls);
          }
          OnMouseMove(a) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Ar, this.HideControls);
          }
          OnMouseLeave(a) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((a) =>
              !a.bControlsVisible && a.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let a = this.state.video;
            if (!a) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), a.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(a) {
            this.state.bFullscreen ||
              ((0, e.lX)(
                (0, l.jsx)(_.tz, { children: this.GetContextMenuItems() }),
                a,
              ),
              a.preventDefault());
          }
          ToggleStatsView(a) {
            let b = !this.state.bShowStats;
            this.setState({ bShowStats: b });
            let h = this.state.video;
            h && h.SetStatsViewIsVisible(b);
          }
          ShowStorePage(a) {
            let b = this.state.video;
            if (!b || !this.props.onOpenLinkInNewWindow) return;
            let h = b.GetBroadcastInfo();
            if (!h) return;
            let z = (0, cr.k2)(`${N.TS.STORE_BASE_URL}app/${h.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(a, z), a.stopPropagation();
          }
          GetContextMenuItems() {
            let a = [],
              b = this.state.video;
            if (!b) return a;
            let h = b.GetBroadcastInfo();
            return (
              a.push(
                (0, l.jsx)(
                  _.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (z) => {
                      this.ToggleStatsView(z);
                    },
                    children: (0, L.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              h &&
                h.m_strAppId != "0" &&
                Number.parseInt(h.m_strAppId) != $.fO &&
                a.push(
                  (0, l.jsx)(
                    _.kt,
                    {
                      onSelected: (z) => {
                        this.ShowStorePage(z);
                      },
                      children: (0, L.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              a
            );
          }
          CloseStats() {
            let a = this.state.video;
            a &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), a.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, wr.ww)(this.m_elBroadcastPlayer)
                ? (0, wr.MS)(this.m_elBroadcastPlayer)
                : (0, wr.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(a) {
            if (!this.m_elBroadcastPlayer) return;
            let b = (0, wr.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: b });
          }
          BHideVideoControls() {
            let a = this.state.video;
            return !a || a.GetUserInputNeeded()
              ? !0
              : $.es.GetBroadcastState(a) == $.fK.Error;
          }
          render() {
            const a = this.state.video,
              b = a && a.IsPaused(),
              h = a && a.BHasDASHStats() && this.state.bShowStats,
              z = !!(a && a.IsReplay()),
              O = this.state.bMountControls,
              x = this.state.bControlsVisible || b,
              F = !!(a && a.GetUserInputNeeded()),
              S = a?.GetDASHPlayerStats(),
              Di =
                a?.IsBroadcastVOD() &&
                F &&
                this.state.strInitialCapsuleImageUrl;
            let lr = "videoContainer";
            x || (lr += " HidePlayerControls"),
              b && (lr += " VideoPaused"),
              this.state.bFullscreen && (lr += " fullscreenVideo"),
              this.props.classes && (lr += " " + this.props.classes);
            let ar = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (ar = ar.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                ar.push(
                  (0, l.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, L.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              ar.push(
                (0, l.jsx)(
                  "div",
                  {
                    title: (0, L.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const ci = O && !this.BHideVideoControls(),
              gi = O && !this.state.bFullscreen,
              rr =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, l.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: lr,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                rr &&
                  (0, l.jsx)("div", {
                    className: D().BroadcastContext,
                    children: rr,
                  }),
                z && (0, l.jsx)(vr, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, l.jsx)(ei, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, l.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: this.props.bMuted ?? !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, l.jsx)(dr, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                Di &&
                  (0, l.jsx)("img", {
                    loading: "lazy",
                    className: (0, m.A)(
                      D().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                ci &&
                  a &&
                  (0, l.jsx)(Br, {
                    video: a,
                    actions: ar,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                gi && (0, l.jsx)(kr, { onClick: this.props.onRequestClose }),
                h &&
                  S &&
                  (0, l.jsx)(ti, { stats: S, closeStats: this.CloseStats }),
                (0, l.jsx)(pr, { video: a }),
                F && a && (0, l.jsx)(si, { video: a }),
              ],
            });
          }
        };
        B([j.oI], G.prototype, "BindBroadcastPlayerRef", 1),
          B([j.oI], G.prototype, "BindVideoRef", 1),
          B([j.oI], G.prototype, "OnMouseDown", 1),
          B([j.oI], G.prototype, "OnMouseUp", 1),
          B([j.oI], G.prototype, "OnMouseMove", 1),
          B([j.oI], G.prototype, "OnMouseLeave", 1),
          B([j.oI], G.prototype, "HideControls", 1),
          B([j.oI], G.prototype, "UmountControls", 1),
          B([j.oI], G.prototype, "ShowStatsView", 1),
          B([j.oI], G.prototype, "OnContextMenu", 1),
          B([j.oI], G.prototype, "ToggleStatsView", 1),
          B([j.oI], G.prototype, "ShowStorePage", 1),
          B([j.oI], G.prototype, "CloseStats", 1),
          B([j.oI], G.prototype, "OnToggleFullscreen", 1),
          B([j.oI], G.prototype, "OnFullscreenChange", 1),
          (G = B([f.PA], G));
        let Br = class extends u.Component {
          render() {
            const { video: a } = this.props;
            if (!a) return null;
            let b = a.has_segments;
            return (0, l.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, l.jsx)(Dr, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, l.jsxs)("div", {
                  className: "videoControlsBottom" + (b ? "" : " noSegments"),
                  children: [
                    (0, l.jsx)(Gr, {
                      video: a,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, l.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, l.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, l.jsx)(Er, { video: a }),
                        (0, l.jsx)(Nr, { video: a }),
                        (0, l.jsx)(Oi, {
                          video: a,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Br = B([f.PA], Br);
        class kr extends u.PureComponent {
          render() {
            return this.props.onClick
              ? (0, l.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, l.jsx)(K.sED, {}),
                })
              : null;
          }
        }
        class Er extends u.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-xr);
          }
          OnJumpForward() {
            this.props.video.JumpTime(xr);
          }
          render() {
            let b = this.props.video,
              h = b.CanSeek();
            return (0, l.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, l.jsx)(ui, { video: b }),
                h &&
                  (0, l.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, l.jsx)(K.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, l.jsx)("div", {
                        className: "jumpAheadValue",
                        children: xr,
                      }),
                    ],
                  }),
                (0, l.jsx)(Ir, { video: b }),
                h &&
                  (0, l.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, l.jsx)(K.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: "jumpAheadValue",
                        children: xr,
                      }),
                    ],
                  }),
                h && (0, l.jsx)(mi, { video: b }),
              ],
            });
          }
        }
        B([j.oI], Er.prototype, "OnJumpBackward", 1),
          B([j.oI], Er.prototype, "OnJumpForward", 1);
        const Nr = (0, f.PA)((a) => {
          if (a.video.IsBroadcastClip() || a.video.IsBroadcastVOD())
            return null;
          const b = (z) => {
            a.video.JumpToLiveEdge();
          };
          let h = a.video.IsOnLiveEdge();
          return (0, l.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, l.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (h ? " isLiveEdge" : ""),
              onClick: h ? void 0 : b,
              children: [
                (0, l.jsx)(K.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, l.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, L.we)(
                    h
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let Ir = class extends u.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let b = this.props.video.IsPaused();
            return (0, l.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: b ? (0, l.jsx)(K.jGG, {}) : (0, l.jsx)(K.vRz, {}),
            });
          }
        };
        B([j.oI], Ir.prototype, "OnTogglePlayPause", 1), (Ir = B([f.PA], Ir));
        let ui = class extends u.Component {
          constructor(a) {
            super(a), (0, mr.Gn)(this), (this.video = a.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const a = this.video;
            if (!a?.has_markers) return;
            let b = a.GetTimelineMarkers(),
              h = a.GetPlaybackTime();
            for (let z = b.length - 1; z >= 0; z--)
              if (!(b[z].nTime >= h)) return b[z].nTime;
          }
          OnJumpToPreviousMarkerClicked(a) {
            let b = this.GetPreviousMarkerTime();
            b !== void 0 && this.props.video.Seek(b - 0.2);
          }
          render() {
            let a = this.props.video.BHasMarkersOrSegments();
            return (0, l.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (a ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, l.jsx)(K.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        B([mr.sH], ui.prototype, "video", 2),
          B([mr.EW], ui.prototype, "has_previous_marker", 1),
          B([j.oI], ui.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (ui = B([f.PA], ui));
        let mi = class extends u.Component {
          constructor(a) {
            super(a), (0, mr.Gn)(this), (this.video = a.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const a = this.video;
            if (!a?.has_markers) return;
            let b = a.GetTimelineMarkers(),
              h = a.GetPlaybackTime();
            for (let z = 0; z < b.length; z++)
              if (!(b[z].nTime <= h)) return b[z].nTime;
          }
          OnJumpToNextMarkerClicked(a) {
            let b = this.GetNextMarkerTime();
            b !== void 0 && this.props.video.Seek(b);
          }
          render() {
            let a = this.props.video.BHasMarkersOrSegments();
            return (0, l.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (a ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, l.jsx)(K.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        B([mr.sH], mi.prototype, "video", 2),
          B([mr.EW], mi.prototype, "has_next_marker", 1),
          B([j.oI], mi.prototype, "OnJumpToNextMarkerClicked", 1),
          (mi = B([f.PA], mi));
        const Wr = (a) => {
          let b = () => a.onMouseEnter(a.pos);
          return (0, l.jsx)("div", {
            className: "timelineMarker",
            title: a.label,
            style: { left: a.pos + "%" },
            onMouseEnter: b,
            onMouseLeave: a.onMouseLeave,
            onMouseDown: a.onMouseDown ? a.onMouseDown : void 0,
            children: (0, l.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, l.jsx)(K.Dp6, {}),
            }),
          });
        };
        function zi(a) {
          let b = a.startPos,
            h = a.endPos,
            z = "",
            O = 1;
          return (
            b < 0 && ((O = (h - b) / 10), (b = 0), (z = " hideFront")),
            (0, l.jsxs)("div", {
              className: "STV_timelineSegment" + z,
              style: { left: b + "%", width: h - b + "%", opacity: O },
              onClick: a.onClick,
              children: [
                (0, l.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + a.color + ")" },
                }),
                (0, l.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + a.color + ")" },
                  children: a.label,
                }),
                (0, l.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + a.color + ")" },
                }),
              ],
            })
          );
        }
        let Gr = class extends u.Component {
          m_elSlider = u.createRef();
          m_rectSlider = void 0;
          constructor(a) {
            super(a),
              (this.state = {
                nGrabberMouseDownTime: 0,
                bGrabberMouseDown: !1,
                nHoverValue: void 0,
                hoverX: 0,
                bStartMouseDown: !1,
                bEndMouseDown: !1,
                thumbnailURL: "",
              });
          }
          OnMouseDown(a, b) {
            const h = this.m_elSlider.current;
            if (h) {
              a.persist(), (this.m_rectSlider = h.getBoundingClientRect());
              let z = {};
              b === "start"
                ? ((z = { bStartMouseDown: !0 }), a.stopPropagation())
                : b === "end"
                  ? ((z = { bEndMouseDown: !0 }), a.stopPropagation())
                  : (z = { bGrabberMouseDown: !0 }),
                this.setState(z, () => this.AdjustSliderForClientX(a.clientX)),
                h.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                h.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(a) {
            this.AdjustSliderForClientX(a.clientX);
          }
          OnMouseUp(a) {
            this.state.bStartMouseDown
              ? this.setState({ bStartMouseDown: !1 })
              : this.state.bEndMouseDown
                ? this.setState({ bEndMouseDown: !1 })
                : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                  this.setState({
                    bGrabberMouseDown: !1,
                    nGrabberMouseDownTime: 0,
                  })),
              this.m_elSlider.current &&
                (this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mouseup",
                  this.OnMouseUp,
                ));
          }
          OnKeyDown(a) {
            a.keyCode == I.ek
              ? (this.props.video.JumpTime(-1 * xr), a.preventDefault())
              : a.keyCode == I.JI &&
                (this.props.video.JumpTime(1 * xr), a.preventDefault());
          }
          AdjustSliderForClientX(a) {
            const b = this.m_rectSlider;
            if (!b) return;
            let h = this.props.video,
              z = h.GetTimelineStartPos(),
              O = h.GetTimelineStartPos() + h.GetTimelineDuration(),
              x = h.GetTimeAtMousePosition(a, b, z, O);
            const F = 5;
            if (this.state.bStartMouseDown) {
              const S = $r.OQ(x, z, h.m_editorEndTime - F);
              h.m_editorStartTime = S;
            } else if (this.state.bEndMouseDown) {
              const S = $r.OQ(x, h.m_editorStartTime + F, O);
              h.m_editorEndTime = S;
            } else
              x != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: x });
          }
          OnMouseHoverMove(a) {
            this.AdjustHoverForClientX(a.clientX);
          }
          OnMouseHoverLeave(a) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(a) {
            let b = this.props.video,
              h = b.GetTimelineStartPos(),
              z = b.GetTimelineStartPos() + b.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let O =
              this.m_rectSlider &&
              b.GetTimeAtMousePosition(a, this.m_rectSlider, h, z);
          }
          OnSegmentClick(a) {
            this.props.video.Seek(a);
          }
          OnMarkerMouseEnter(a) {
            this.setState({ nHoverValue: a });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            let a = this.props.video,
              b = this.state.bGrabberMouseDown,
              h = a.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                $.a0.Timeline,
              ),
              z = a.GetPercentOffsetFromTime(
                a.GetPlaybackTime(),
                $.a0.Timeline,
              ),
              O = a.GetPercentOffsetFromTime(
                a.GetVideoAvailableStartTime(),
                $.a0.Timeline,
              );
            O < 0.05 && (O = 0);
            let x = $r.OQ(h, 0, 100).toFixed(1) + "%",
              F = $r.OQ(z, 0, 100).toFixed(1) + "%",
              S = $r.OQ(O, 0, 100).toFixed(1) + "%",
              Di = {},
              lr = {},
              ar = {},
              ci = {};
            b
              ? ((ci.left = x), (Di.width = x), (lr.width = F), (ar.width = S))
              : ((ci.left = F), (lr.width = F), (ar.width = S));
            let gi = (0, tr.ap)(a.GetPlaybackTime()),
              rr = (0, tr.ap)(this.state.nHoverValue ?? 0),
              hr = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (hr += " grabberDown"),
              a.IsTimelineMapActive() && (hr += " minimapActive");
            let Pr = "";
            (h = b ? h : z),
              h > 100
                ? (Pr = " grabberOffScreenRight grabberOffscreen")
                : h < 0 && (Pr = " grabberOffScreenLeft grabberOffscreen");
            let Xr = [];
            a.GetTimelineMarkers().forEach((Vr, Ur) => {
              let oi = a.GetPercentOffsetFromTime(Vr.nTime, $.a0.Timeline);
              oi < 0 ||
                oi > 100 ||
                Xr.push(
                  (0, l.jsx)(
                    Wr,
                    {
                      pos: oi,
                      label: Vr.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    Ur,
                  ),
                );
            });
            let Yr = [];
            a.GetTimelineSegments().forEach((Vr, Ur) => {
              let oi = a.GetPercentOffsetFromTime(Vr.nTimeStart, $.a0.Timeline);
              if (oi > 100) return;
              let bi = a.GetPercentOffsetFromTime(Vr.nTimeEnd, $.a0.Timeline);
              bi < 0 ||
                Yr.push(
                  (0, l.jsx)(
                    zi,
                    {
                      startPos: oi,
                      endPos: bi,
                      label: Vr.strTemplateName,
                      color: Vr.color,
                      onClick: (Tr) => this.OnSegmentClick(Vr.nTimeStart),
                    },
                    Ur,
                  ),
                );
            });
            const Hr = a.GetPercentOffsetFromTime(
                a.m_editorStartTime,
                $.a0.Timeline,
              ),
              ji = a.GetPercentOffsetFromTime(a.m_editorEndTime, $.a0.Timeline),
              Sr = this.props.bIncludeClipEditor
                ? [
                    (0, l.jsx)(
                      Wr,
                      {
                        pos: Hr,
                        label: (0, L.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Vr) => this.OnMouseDown(Vr, "start"),
                      },
                      "start",
                    ),
                    (0, l.jsx)(
                      Wr,
                      {
                        pos: ji,
                        label: (0, L.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Vr) => this.OnMouseDown(Vr, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, l.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, l.jsxs)("div", {
                className: hr,
                children: [
                  (0, l.jsx)("div", { className: "DialogLabel", children: gi }),
                  (0, l.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: Yr,
                  }),
                  (0, l.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, l.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, l.jsx)("div", {
                          className: "STV_timelineValue",
                          style: Di,
                        }),
                        (0, l.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: lr,
                        }),
                        (0, l.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: ar,
                        }),
                        Xr,
                        Sr,
                        !!this.state.hoverX &&
                          (0, l.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, l.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, l.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, l.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: rr,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, l.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: ci,
                          children: (0, l.jsx)("div", {
                            className: "STV_timelineGrabber" + Pr,
                            children: (0, l.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, l.jsx)(K.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        B([j.oI], Gr.prototype, "OnMouseDown", 1),
          B([j.oI], Gr.prototype, "OnMouseMove", 1),
          B([j.oI], Gr.prototype, "OnMouseUp", 1),
          B([j.oI], Gr.prototype, "OnKeyDown", 1),
          B([j.oI], Gr.prototype, "OnMouseHoverMove", 1),
          B([j.oI], Gr.prototype, "OnMouseHoverLeave", 1),
          B([j.oI], Gr.prototype, "AdjustHoverForClientX", 1),
          B([j.oI], Gr.prototype, "OnSegmentClick", 1),
          B([j.oI], Gr.prototype, "OnMarkerMouseEnter", 1),
          B([j.oI], Gr.prototype, "OnMarkerMouseLeave", 1),
          (Gr = B([f.PA], Gr));
        let Dr = class extends u.Component {
          state = { info: null };
          static getDerivedStateFromProps(a, b) {
            return (!b.info || b.info.m_steamIDBroadcast !== a.steamID) &&
              (b.info && ($.es.StopInfo(b.info), (b.info = null)), a.steamID)
              ? { info: $.es.StartInfo(a.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && $.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const a = this.props.steamID,
              b = this.props.onLocalStreamChange;
            return b && E.td.stream[a]
              ? (0, l.jsx)(Kr, { value: a, options: E.td.stream, onChange: b })
              : null;
          }
          render() {
            let { info: a } = this.state;
            if (!a) return null;
            let b = "";
            a.m_nViewerCount && (b = (0, Ii.Dq)(a.m_nViewerCount));
            let h =
                E.td.bValid && E.td.stream && E.td.stream[a.m_steamIDBroadcast],
              z =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(a.m_strAppId) > 0 || h);
            const O =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              h &&
              E.td.gidEvent;
            return (0, l.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, l.jsx)(A, {
                    className: "broadcastDetailsThumbBlur",
                    src: a.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, l.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    a &&
                      a.m_strAppTitle &&
                      (0, l.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, l.jsx)("span", {
                                className: "AppTitle",
                                children: a.m_strAppTitle,
                              }),
                              a.m_strTitle &&
                                (0, l.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", a.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          b &&
                            (0, l.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, l.jsx)(K.y_e, {}),
                                (0, L.Yp)("#Broadcast_ViewerCount", b),
                              ],
                            }),
                        ],
                      }),
                    h &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, l.jsx)("div", {
                        className: "Actions",
                        children: (0, l.jsx)("div", {
                          onClick: (x) =>
                            this.props.onOpenLinkInNewWindow?.(x, E.td.link),
                          className: "BroadcastLink",
                          children: E.td.linkName,
                        }),
                      }),
                  ],
                }),
                O && (0, l.jsx)(W.m, { gidEvent: E.td.gidEvent }),
                z &&
                  (0, l.jsx)(v.p, {
                    id:
                      E.td.bValid &&
                      E.td.stream &&
                      E.td.stream[a.m_steamIDBroadcast]
                        ? E.td.appID
                        : parseInt(a.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        Dr = B([f.PA], Dr);
        class Kr extends u.Component {
          showContextMenu(b) {
            const { options: h, value: z, onChange: O } = this.props,
              x = Object.keys(h).map((F) =>
                (0, l.jsx)(
                  _.IK,
                  {
                    onSelected: () => O(F),
                    bChecked: F === z,
                    children: (0, L.we)(h[F]),
                  },
                  F,
                ),
              );
            (0, e.lX)((0, l.jsx)(_.tz, { children: x }), b);
          }
          render() {
            const { value: b, options: h } = this.props,
              z = h[b];
            return (0, l.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, l.jsxs)("span", { children: ["\xA0- ", (0, L.we)(z)] }),
                (0, l.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, l.jsx)(K.GB9, {}),
                }),
              ],
            });
          }
        }
        B([j.oI], Kr.prototype, "showContextMenu", 1);
        let dr = class extends u.Component {
          constructor(a) {
            super(a), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let a = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + a,
              yPosPct: 2.5 + a,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(a) {
            a.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((b, h) => {
                this.LoadLinkRegion(b, h);
              });
          }
          async LoadLinkRegion(a, b) {
            let h = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: a.left,
              yPosPct: a.top,
              widthPct: a.width,
              heightPct: a.height,
              link_url: a.url,
              link_description: a.link_description,
              link_index: a.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            let a;
            a = { links: [] };
            for (let b = 0; b < this.state.sizableRegion.length; b++) {
              let h;
              (h = {
                left: Math.floor(this.state.sizableRegion[b].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[b].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[b].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[b].heightPct * 100),
                url: this.state.sizableRegion[b].link_url,
                link_description: this.state.sizableRegion[b].link_description,
                link_index: b,
              }),
                a.links.push(h);
            }
            this.props.onSaveLinkRegions?.(a);
          }
          async DeleteRegion(a) {
            this.state.sizableRegion.splice(a, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(a, b) {
            const h = [...this.state.sizableRegion];
            (h[a] = b),
              this.setState({ sizableRegion: h }, () => this.OnSaveRegions());
          }
          render() {
            return (0, l.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, l.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((a) => {
                          const b = (0, Zr.p)(a.url);
                          return (0, l.jsx)(
                            er.uU,
                            {
                              href: a.url,
                              bForceExternal: b,
                              bUseLinkFilter: b,
                              children: (0, l.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: a.left + "%",
                                  top: a.top + "%",
                                  width: a.width + "%",
                                  height: a.height + "%",
                                },
                                children: (0, l.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [a.link_description, " "],
                                }),
                              }),
                            },
                            a.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((a, b) =>
                        (0, l.jsx)(
                          X.I,
                          {
                            index: b,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: a.xPosPct,
                            yPosPct: a.yPosPct,
                            widthPct: a.widthPct,
                            heightPct: a.heightPct,
                            link_url: a.link_url,
                            link_description: a.link_description,
                          },
                          b * 100 + a.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, l.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, L.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, l.jsx)("div", {
                    children: (0, L.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        B([j.oI], dr.prototype, "AddLinkRegion", 1),
          B([j.oI], dr.prototype, "LoadLinkRegion", 1),
          B([j.oI], dr.prototype, "OnSaveRegions", 1),
          B([j.oI], dr.prototype, "DeleteRegion", 1),
          B([j.oI], dr.prototype, "UpdatePanel", 1),
          (dr = B([f.PA], dr));
      },
      7582: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { HD: () => $, f1: () => Rr, s4: () => ei, sB: () => yi });
        var l = g(19367),
          mr = g.n(l),
          f = g(90626),
          u = g(59432),
          e = g(47689),
          I = g(77291);
        class cr {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, u.mm)();
          }
          set nOverrideDateNow(w) {
            (0, u.ai)(w);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, u.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, u.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, u.mm)();
          }
          ParseDevOverrides(w) {
            if (!w || w.length == 0) return;
            new URLSearchParams(w[0] == "?" ? w.substring(1) : w).has("t");
          }
        }
        const $ = new cr();
        (0, I.V)("g_EventCalendarDevFeatures", $);
        function ur(_ = 1) {
          const [w, o] = React.useState(() => P()),
            m = useCancelTokenSource("useTimeNowWithOverride"),
            n = React.useCallback(() => {
              m.token.reason || o(P());
            }, []);
          return (
            React.useEffect(() => {
              const or = 1e3 * _,
                A = Date.now() % or,
                v = or - A,
                W = window.setTimeout(n, v);
              return () => {
                window.clearTimeout(W);
              };
            }, [w, _, n]),
            w
          );
        }
        const gr = Math.floor(new Date().getTime() / 1e3);
        function P() {
          const _ = Math.floor(Date.now() / 1e3);
          return $.nOverrideDateNow ? $.nOverrideDateNow + (_ - gr) : _;
        }
        function yi() {
          return $.nOverrideDateNow ?? gr;
        }
        function Rr() {
          return f.useMemo(() => yi(), []);
        }
        function ei() {
          return f.useMemo(() => $.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      37656: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { w: () => or });
        var l = g(41735),
          mr = g.n(l),
          f = g(14947),
          u = g(65946),
          e = g(90626),
          I = g(27066),
          cr = g(8323),
          $ = g(30096),
          ur = g(3166),
          j = Object.defineProperty,
          gr = Object.getOwnPropertyDescriptor,
          P = (A, v, W, X) => {
            for (
              var K = X > 1 ? void 0 : X ? gr(v, W) : v, er = A.length - 1, wr;
              er >= 0;
              er--
            )
              (wr = A[er]) && (K = (X ? wr(v, W, K) : wr(K)) || K);
            return X && K && j(v, W, K), K;
          };
        const yi = class He {
          constructor() {
            (0, f.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
          }
          clone() {
            const v = new He();
            return (
              (v.giveaway_id = this.giveaway_id),
              (v.seconds_until_drawing = this.seconds_until_drawing),
              (v.rtime_start = this.rtime_start),
              (v.rtime_end = this.rtime_end),
              (v.closed = this.closed),
              (v.winner_count = this.winner_count),
              v
            );
          }
        };
        P([f.sH], yi.prototype, "giveaway_id", 2),
          P([f.sH], yi.prototype, "seconds_until_drawing", 2),
          P([f.sH], yi.prototype, "rtime_start", 2),
          P([f.sH], yi.prototype, "rtime_end", 2),
          P([f.sH], yi.prototype, "closed", 2),
          P([f.sH], yi.prototype, "winner_count", 2);
        let Rr = yi;
        const ei = class ee {
          constructor() {
            (0, f.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(v, W) {
            return v + "_" + W;
          }
          GetInfoByInstance(v, W) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(v, W),
            );
          }
          GetNextDrawChangeCallback(v) {
            let W = this.m_mapNextDrawChangeCallback.get(v);
            return (
              W ||
                ((W = new cr.lu()), this.m_mapNextDrawChangeCallback.set(v, W)),
              W
            );
          }
          CopyToGiveaway(v, W) {
            W.closed != v.closed && (W.closed = v.closed),
              W.giveaway_id != v.giveaway_id && (W.giveaway_id = v.giveaway_id),
              W.rtime_start != v.rtime_start && (W.rtime_start = v.rtime_start),
              W.rtime_end != v.rtime_end && (W.rtime_end = v.rtime_end),
              W.winner_count != v.winner_count &&
                (W.winner_count = v.winner_count),
              W.seconds_until_drawing != v.seconds_until_drawing &&
                (W.seconds_until_drawing = v.seconds_until_drawing);
          }
          async ReloadGiveaway(v, W) {
            if (!v) return null;
            let X = ur.TS.STORE_BASE_URL + "prizes/nextdraw/" + v,
              K = { origin: self.origin };
            const er = await mr().get(X, { params: K }),
              wr = (0, f.h5)(() => {
                let L = this.m_mapGiveawayIDToNextDrawInfo.get(v);
                if (
                  (L ||
                    ((L = new Rr()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(v, L)),
                  this.CopyToGiveaway(er.data, L),
                  W !== void 0)
                ) {
                  const Ii = this.GetKey(v, W);
                  let $r =
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(Ii);
                  $r ||
                    (($r = new Rr()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(Ii, $r)),
                    this.CopyToGiveaway(er.data, $r);
                }
                return L;
              });
            return this.GetNextDrawChangeCallback(v).Dispatch(wr), wr;
          }
          static s_Singleton;
          static Get() {
            return (
              ee.s_Singleton ||
                ((ee.s_Singleton = new ee()), ee.s_Singleton.Init()),
              ee.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let v = (0, ur.Tc)("giveawaynextdraw", "application_config");
              if (v && v.giveaway_id) {
                let W = new Rr();
                this.CopyToGiveaway(v, W),
                  this.m_mapGiveawayIDToNextDrawInfo.set(v.giveaway_id, W);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        P([f.sH], ei.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          P([f.XI], ei.prototype, "CopyToGiveaway", 1);
        let _ = ei;
        const w = class ke {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = ke.s_GlobalInstance),
              (ke.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(v, W) {
            if ((this.ClearRefreshInterval(), !v.closed)) {
              let K =
                v.seconds_until_drawing !== void 0 &&
                v.seconds_until_drawing <= 0 &&
                v.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(W, K);
            }
          }
          SetupCountDown(v, W) {
            v !== void 0 &&
              v > 0 &&
              (this.m_intervalCountDownID = window.setInterval(W, 1e3));
          }
        };
        P([I.o], w.prototype, "ClearRefreshInterval", 1),
          P([I.o], w.prototype, "ClearCountDown", 1),
          P([I.o], w.prototype, "SetupRefreshDataInterval", 1),
          P([I.o], w.prototype, "SetupCountDown", 1);
        let o = w;
        function m(A, v) {
          const W = _.Get().GetInfoByInstance(A, v.m_myInstanceNumber);
          !W ||
            W.seconds_until_drawing === void 0 ||
            ((W.seconds_until_drawing -= 1),
            W.seconds_until_drawing == 0 && v.ClearCountDown());
        }
        function n(A, v) {
          const W = _.Get().GetInfoByInstance(A, v.m_myInstanceNumber);
          W &&
            W.BIsValid() &&
            W.seconds_until_drawing !== void 0 &&
            W.seconds_until_drawing <= 0 &&
            !W.closed &&
            (v.ClearCountDown(),
            _.Get()
              .ReloadGiveaway(A, v.m_myInstanceNumber)
              .then((X) => {
                X && v.SetupCountDown(X.seconds_until_drawing, () => m(A, v));
              }));
        }
        function or(A) {
          const [v] = (0, e.useState)(new o()),
            W = (0, $.CH)();
          (0, e.useEffect)(
            () => (
              _.Get()
                .ReloadGiveaway(A, v.m_myInstanceNumber)
                .then((L) => {
                  L &&
                    (v.SetupRefreshDataInterval(L, () => n(A, v)),
                    v.SetupCountDown(L.seconds_until_drawing, () => m(A, v)),
                    W());
                }),
              () => {
                v.ClearRefreshInterval(), v.ClearCountDown();
              }
            ),
            [v, A, W],
          );
          const X = _.Get().GetInfoByInstance(A, v.m_myInstanceNumber),
            [K, er, wr] = (0, u.q3)(() => [
              X?.winner_count,
              X?.closed,
              X?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !X || X.giveaway_id == null || !X.BStarted() || K === void 0,
            winner_count: K,
            closed: er,
            seconds_until_drawing: wr,
          };
        }
      },
      84676: (Mi, hi, g) => {
        "use strict";
        g.d(hi, {
          G6: () => P,
          Gg: () => ei,
          Ow: () => Rr,
          Sq: () => ur,
          YM: () => or,
          eR: () => j,
          ik: () => gr,
          mZ: () => _,
          t7: () => yi,
          zX: () => o,
        });
        var l = g(41735),
          mr = g.n(l),
          f = g(90626),
          u = g(72604),
          e = g(48156),
          I = g(30096),
          cr = g(10142);
        function $(A, v, W = !0) {
          const X = W
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            K = W || CStoreItemCache.Get().BHasStoreItem(A, v, X) ? A : null,
            [er, wr] = P(K, v, X),
            [L, Ii] = useState(null),
            [$r, N] = P(L, v, X);
          useEffect(() => {
            er?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              Ii(er.GetParentAppID());
          }, [er]);
          let E = er?.GetShortDescription()
            ? StripBBCodeTags(er.GetShortDescription())
            : "";
          (!E || E.length === 0) &&
            $r &&
            (E = $r?.GetShortDescription()
              ? StripBBCodeTags($r.GetShortDescription())
              : "");
          const tr = wr == gr && (!L || N == gr);
          return [E, tr];
        }
        const ur = 1,
          j = 2,
          gr = 3;
        function P(A, v, W, X) {
          const K = (0, f.useRef)(void 0),
            er = (0, f.useRef)(void 0),
            wr = (0, I.CH)();
          K.current = A;
          const [L, Ii] = (0, f.useState)(void 0),
            {
              include_assets: $r,
              include_release: N,
              include_platforms: E,
              include_all_purchase_options: tr,
              include_screenshots: Mr,
              include_trailers: D,
              include_ratings: Z,
              include_tag_count: nr,
              include_reviews: zr,
              include_basic_info: jr,
              include_supported_languages: vr,
              include_full_description: pr,
              include_included_items: si,
              include_assets_without_overrides: Or,
              apply_user_filters: xi,
              include_links: Y,
              include_extra_details: ti,
              include_optin_registration_tags: fr,
            } = W;
          if (
            ((0, f.useEffect)(() => {
              const br = {
                include_assets: $r,
                include_release: N,
                include_platforms: E,
                include_all_purchase_options: tr,
                include_screenshots: Mr,
                include_trailers: D,
                include_ratings: Z,
                include_tag_count: nr,
                include_reviews: zr,
                include_basic_info: jr,
                include_supported_languages: vr,
                include_full_description: pr,
                include_included_items: si,
                include_assets_without_overrides: Or,
                apply_user_filters: xi,
                include_links: Y,
                include_extra_details: ti,
                include_optin_registration_tags: fr,
              };
              let fi = null;
              return (
                !A ||
                  A < 0 ||
                  cr.A.Get().BHasStoreItem(A, v, br) ||
                  (L !== void 0 && X && X == er.current) ||
                  (X !== er.current && (Ii(void 0), (er.current = X)),
                  (fi = mr().CancelToken.source()),
                  cr.A.Get()
                    .QueueStoreItemRequest(A, v, br)
                    .then((q) => {
                      !fi?.token.reason && K.current === A && Ii(q == u.R),
                        wr();
                    })),
                () => fi?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              A,
              v,
              X,
              L,
              $r,
              N,
              E,
              tr,
              Mr,
              D,
              Z,
              nr,
              zr,
              jr,
              vr,
              pr,
              si,
              Or,
              xi,
              Y,
              ti,
              fr,
              wr,
            ]),
            !A)
          )
            return [null, j];
          if (L === !1) return [void 0, j];
          if (cr.A.Get().BIsStoreItemMissing(A, v)) return [void 0, j];
          if (!cr.A.Get().BHasStoreItem(A, v, W)) return [void 0, ur];
          const ni = cr.A.Get().GetStoreItemWithLegacyVisibilityCheck(A, v);
          return ni ? [ni, gr] : [null, j];
        }
        function yi(A, v, W) {
          return P(A, e.c6.qI, v, W);
        }
        function Rr(A, v, W) {
          return P(A, e.c6.xO, v, W);
        }
        function ei(A, v, W) {
          return P(A, e.c6.RD, v, W);
        }
        function _(A, v, W) {
          const [X, K] = P(A, v, W);
          let er;
          X?.GetStoreItemType() == e.c6.RD &&
            !X.GetAssets()?.GetHeaderURL() &&
            X?.GetIncludedAppIDs().length == 1 &&
            (er = X.GetIncludedAppIDs()[0]);
          const [wr, L] = yi(er, W);
          return er && wr?.BIsVisible() ? [wr, L] : [X, K];
        }
        function w(A, v, W, X) {
          const K = (0, I.CH)(),
            {
              include_assets: er,
              include_release: wr,
              include_platforms: L,
              include_all_purchase_options: Ii,
              include_screenshots: $r,
              include_trailers: N,
              include_ratings: E,
              include_tag_count: tr,
              include_reviews: Mr,
              include_basic_info: D,
              include_supported_languages: Z,
              include_full_description: nr,
              include_included_items: zr,
              include_assets_without_overrides: jr,
              apply_user_filters: vr,
              include_links: pr,
              include_extra_details: si,
              include_optin_registration_tags: Or,
            } = W;
          return (
            (0, f.useEffect)(() => {
              if (!A || A.length == 0) return;
              const Y = {
                  include_assets: er,
                  include_release: wr,
                  include_platforms: L,
                  include_all_purchase_options: Ii,
                  include_screenshots: $r,
                  include_trailers: N,
                  include_ratings: E,
                  include_tag_count: tr,
                  include_reviews: Mr,
                  include_basic_info: D,
                  include_supported_languages: Z,
                  include_full_description: nr,
                  include_included_items: zr,
                  include_assets_without_overrides: jr,
                  apply_user_filters: vr,
                  include_links: pr,
                  include_extra_details: si,
                  include_optin_registration_tags: Or,
                },
                ti = A.filter(
                  (br) =>
                    !(
                      cr.A.Get().BHasStoreItem(br, v, Y) ||
                      cr.A.Get().BIsStoreItemMissing(br, v)
                    ),
                );
              if (ti.length == 0) return;
              const fr = mr().CancelToken.source(),
                ni = ti.map((br) => cr.A.Get().QueueStoreItemRequest(br, v, Y));
              return (
                Promise.all(ni).then(() => {
                  fr.token.reason || K();
                }),
                () => fr.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              A,
              v,
              X,
              K,
              er,
              wr,
              L,
              Ii,
              $r,
              N,
              E,
              tr,
              Mr,
              D,
              Z,
              nr,
              zr,
              jr,
              vr,
              pr,
              si,
              Or,
            ]),
            A
              ? A.every(
                  (Y) =>
                    cr.A.Get().BHasStoreItem(Y, v, W) ||
                    cr.A.Get().BIsStoreItemMissing(Y, v),
                )
                ? A.every((Y) =>
                    cr.A.Get().GetStoreItemWithLegacyVisibilityCheck(Y, v),
                  )
                  ? gr
                  : j
                : ur
              : j
          );
        }
        function o(A, v, W) {
          return w(A, e.c6.qI, v, W);
        }
        function m(A, v, W) {
          return w(A, EStoreItemType.k_EStoreItemType_Bundle, v, W);
        }
        function n(A, v, W) {
          return w(A, EStoreItemType.k_EStoreItemType_Package, v, W);
        }
        function or() {
          f.useEffect(
            () => (
              cr.A.Get().SetReturnUnavailableItems(!0),
              () => cr.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      86390: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { Cg: () => yi, pZ: () => ei, vg: () => Rr });
        var l = g(7850),
          mr = g(90626),
          f = g(88003),
          u = g(18210),
          e = g(3166),
          I = g(87242),
          cr = g(74974),
          $ = g(6740),
          ur = g(62179),
          j = g(3685),
          gr = g(96538);
        function P(w) {
          return (0, l.jsx)(f.x_, {
            onEscKeypress: w.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, l.jsx)(_, {
              redirectURL: w.redirectURL,
              guestOption: w.guestOption,
            }),
          });
        }
        function yi(w) {
          const { redirectURL: o = window.location.href } = w;
          return (0, l.jsx)(gr.EN, {
            active: !0,
            children: (0, l.jsx)(P, { redirectURL: o }),
          });
        }
        function Rr() {
          (0, f.pg)(
            (0, l.jsx)(P, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, u.we)("#Login_SignInTitle") },
          );
        }
        function ei(w, o) {
          (0, f.pg)(
            (0, l.jsx)(P, { ownerWin: window, redirectURL: w, guestOption: o }),
            window,
            { strTitle: (0, u.we)("#Login_SignInTitle") },
          );
        }
        function _(w) {
          const { redirectURL: o, guestOption: m } = w,
            [n] = (0, mr.useState)(
              new ur.x(
                new j.D(e.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [or, A] = (0, mr.useState)(!1),
            v = (W) => {
              W == I.wI.k_PrimaryDomainFail ? A(!0) : window.location.assign(o);
            };
          return (0, l.jsx)("div", {
            children: or
              ? (0, l.jsx)(cr.Fn, {})
              : (0, l.jsx)(cr.YN, {
                  autoFocus: !0,
                  transport: n,
                  platform: $.SS.tS,
                  onComplete: v,
                  redirectUrl: o,
                  theme: "modal",
                  children: m && (0, l.jsx)(cr.Mk, { redirectURL: o }),
                }),
          });
        }
      },
      79590: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { m: () => Rr });
        var l = g(7850),
          mr = g(99412),
          f = g(29630),
          u = g(72609),
          e = g(90626),
          I = g(48421),
          cr = g(60480),
          $ = g(36707),
          ur = g(18210),
          j = g(53113),
          gr = g(20193);
        function P(ei) {
          const { gidEvent: _ } = ei,
            w = usePartnerEventByEventGID(_);
          return w
            ? jsx(yi, {
                event: w,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(w) ?? ""),
              })
            : null;
        }
        function yi(ei) {
          const { event: _, lang: w, href: o } = ei,
            [m, n] = (0, e.useMemo)(() => {
              const or = _.jsondata.localized_sale_product_banner,
                A = _.jsondata.localized_sale_product_mobile_banner;
              if (or?.length && A?.length) {
                const v = ur.NT.GetWithFallback(or, w),
                  W = ur.NT.GetWithFallback(A, w);
                if (v?.length && W?.length)
                  return [
                    f.zU.GenerateURLFromHashAndExt(_.clanSteamID, v),
                    f.zU.GenerateURLFromHashAndExt(_.clanSteamID, W),
                  ];
              }
              return [void 0, void 0];
            }, [_, w]);
          return !m?.length || !n?.length
            ? null
            : (0, l.jsxs)("a", {
                href: o,
                className: gr.Link,
                children: [
                  (0, l.jsx)("img", {
                    src: m,
                    className: (0, $.A)(gr.Banner, gr.Big),
                    alt: _.GetNameWithFallback(w),
                  }),
                  (0, l.jsx)("img", {
                    src: n,
                    className: (0, $.A)(gr.Banner, gr.Mobile),
                    alt: _.GetNameWithFallback(w),
                  }),
                ],
              });
        }
        function Rr(ei) {
          const { gidEvent: _ } = ei,
            w = (0, I.RR)(_);
          return w
            ? (0, l.jsx)(yi, {
                event: w,
                lang: (0, mr.sfN)(u.TS.LANGUAGE),
                href: (0, j.k2)((0, cr.n4)(w) ?? ""),
              })
            : null;
        }
      },
      79167: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { I: () => _ });
        var l = g(7850),
          mr = g(90626),
          f = g(30096),
          u = g(75844),
          e = g(8323),
          I = g(18210),
          cr = g(16412),
          $ = g(36118),
          ur = g(81315),
          j = g.n(ur),
          gr = g(13854),
          P = Object.defineProperty,
          yi = Object.getOwnPropertyDescriptor,
          Rr = (w, o, m, n) => {
            for (
              var or = n > 1 ? void 0 : n ? yi(o, m) : o, A = w.length - 1, v;
              A >= 0;
              A--
            )
              (v = w[A]) && (or = (n ? v(o, m, or) : v(or)) || or);
            return n && or && P(o, m, or), or;
          },
          ei = ((w) => (
            (w.topleft = "topleft"),
            (w.top = "top"),
            (w.topright = "topright"),
            (w.left = "left"),
            (w.middle = "middle"),
            (w.right = "right"),
            (w.bottomleft = "bottomleft"),
            (w.bottom = "bottom"),
            (w.bottomright = "bottomright"),
            w
          ))(ei || {});
        let _ = class extends mr.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new e.Ji();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(w) {
            super(w),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(w) {
            this.m_elLinkRegionBox = w;
          }
          OnMouseDown(w, o) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (m) => {
                this.OnMouseUp(m, o);
              }),
              (this.m_fnMouseMove = (m) => {
                this.OnMouseMove(m, o);
              }),
              this.setState({ EdgeDown: o }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((w.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((w.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              w.preventDefault(),
              w.stopPropagation();
          }
          OnMouseMove(w, o) {
            if (this.state.EdgeDown !== void 0) {
              switch ((w.shiftKey && this.m_fnMouseUp(), o)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(w.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(w.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(w.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(w.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(w.clientY),
                    curLeftPosPct: this.CalcLeftEdge(w.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(w.clientY),
                    curRightPosPct: this.CalcRightEdge(w.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(w.clientX),
                    curBottomPosPct: this.CalcBottomEdge(w.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(w.clientX),
                    curBottomPosPct: this.CalcBottomEdge(w.clientY),
                  });
                  break;
                }
                case "middle": {
                  const m = (0, gr.OQ)(
                      this.CalcLeftEdge(w.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    n = 100 - (m + this.state.curWidthPct),
                    or = (0, gr.OQ)(
                      this.CalcTopEdge(w.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    A = 100 - (or + this.state.curHeightPct),
                    v = {
                      curLeftPosPct: m,
                      curRightPosPct: n,
                      curTopPosPct: or,
                      curBottomPosPct: A,
                    };
                  this.setState(v);
                  break;
                }
                default:
                  break;
              }
              w.preventDefault(), w.stopPropagation();
            }
          }
          IsValidPct(w) {
            return w >= 0 && w <= 100;
          }
          UpdateState(w) {
            let o =
                w.curTopPosPct !== void 0
                  ? w.curTopPosPct
                  : this.state.curTopPosPct,
              m =
                w.curBottomPosPct !== void 0
                  ? w.curBottomPosPct
                  : this.state.curBottomPosPct,
              n =
                w.curLeftPosPct !== void 0
                  ? w.curLeftPosPct
                  : this.state.curLeftPosPct,
              or =
                w.curRightPosPct !== void 0
                  ? w.curRightPosPct
                  : this.state.curRightPosPct,
              A = (0, gr.OQ)(
                100 - or - n,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              v = (0, gr.OQ)(
                100 - m - o,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (w.curLeftPosPct !== void 0 || w.curRightPosPct !== void 0
                ? (v = A / this.m_aspectRatio)
                : (A = v * this.m_aspectRatio)),
              w.curLeftPosPct !== void 0
                ? (n = 100 - or - A)
                : (or = 100 - (n + A)),
              w.curTopPosPct !== void 0
                ? (o = 100 - m - v)
                : (m = 100 - (o + v));
            const W = 100 - or - n,
              X = 100 - m - o;
            this.IsValidPct(n) &&
              this.IsValidPct(or) &&
              this.IsValidPct(o) &&
              this.IsValidPct(m) &&
              this.IsValidPct(W) &&
              this.IsValidPct(X) &&
              this.setState({
                curLeftPosPct: n,
                curRightPosPct: or,
                curTopPosPct: o,
                curBottomPosPct: m,
              });
          }
          GetXPercent(w) {
            return this.m_rectLinkRegion
              ? ((w - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(w) {
            return this.m_rectLinkRegion
              ? ((w - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(w) {
            return (0, gr.OQ)(this.GetXPercent(w), 0, 100);
          }
          CalcRightEdge(w) {
            return (0, gr.OQ)(
              100 - (this.GetXPercent(w) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(w) {
            return (0, gr.OQ)(this.GetYPercent(w), 0, 100);
          }
          CalcBottomEdge(w) {
            return (0, gr.OQ)(
              100 - (this.GetYPercent(w) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(w, o) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({ EdgeDown: void 0 }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(w) {
            this.setState({
              text_link_url: w.target.value,
              valid_link: this.validateUrl(w.target.value),
            });
          }
          OnSetLinkDescriptionChange(w) {
            this.setState({ text_link_description: w.target.value });
          }
          validateUrl(w) {
            return w != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  w,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({ bEditingLink: !this.state.bEditingLink }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({ bEditingLink: !this.state.bEditingLink });
          }
          render() {
            let w = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              o = j().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (o += ` ${j().EdgeDown} ` + j()[this.state.EdgeDown]),
              (0, l.jsxs)("div", {
                className: o,
                style: w,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, l.jsxs)("div", {
                    className: j().LinkRegionGridBox,
                    children: [
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().TopLeft}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Top}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "top");
                        },
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().TopRight}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Left}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "left");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsxs)("div", {
                        className: `${j().LinkRegionEdge} ${j().Middle}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, l.jsx)("div", {
                              className: j().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, l.jsx)($.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, l.jsx)("div", {
                              className: j().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, l.jsx)($.xv8, {}),
                            }),
                          (0, l.jsxs)("div", {
                            className: j().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Right}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "right");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().BottomLeft}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().Bottom}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, l.jsx)("div", {
                        className: `${j().LinkRegionEdge} ${j().BottomRight}`,
                        onMouseDown: (m) => {
                          this.OnMouseDown(m, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, l.jsxs)("div", {
                      className: j().LinkRegionInfo,
                      children: [
                        (0, l.jsx)(cr.pd, {
                          className: j().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, I.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, l.jsx)(cr.pd, {
                          className: j().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, I.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, I.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, l.jsxs)("div", {
                          className: j().LinkRegionButtonContainer,
                          children: [
                            (0, l.jsxs)(cr.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, I.we)("#Button_OK"), " "],
                            }),
                            (0, l.jsxs)(cr.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, I.we)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        Rr([f.oI], _.prototype, "LinkRegionBoxRef", 1),
          Rr([f.oI], _.prototype, "OnMouseDown", 1),
          Rr([f.oI], _.prototype, "OnMouseMove", 1),
          Rr([f.oI], _.prototype, "OnMouseUp", 1),
          Rr([f.oI], _.prototype, "HandleDelete", 1),
          Rr([f.oI], _.prototype, "OnSetLinkURLChange", 1),
          Rr([f.oI], _.prototype, "OnSetLinkDescriptionChange", 1),
          Rr([f.oI], _.prototype, "OnSaveLink", 1),
          Rr([f.oI], _.prototype, "OnEditLink", 1),
          (_ = Rr([u.PA], _));
      },
      20193: (Mi) => {
        Mi.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      53120: (Mi) => {
        Mi.exports = {
          strStreamIconCapsuleArtHeight: "58px",
          strStreamIconScreenshotArtHeight: "58px",
          bordered_container: "_3zXpFCyX2IiaD-MNF5KJFf",
          WidePlayer: "_3zjvrmOCIh31clDHjpLE2a",
          store_chat_ctn: "_21N-VV6Gvjjc1FqzOMJQfi",
          item_drop_ctn: "ifxDfv8dAGa5u71nRT0CJ",
          BorderedContainerPromotion: "-b_1HPR-CqjjzrTnTG2fn",
          bordered_title: "WsfbqpkdutNGWu3V4uhn_",
          streamTitle: "XMkaslAYoJyTgLBY3WHVJ",
          bordered_subtitle: "_3tYeiJ6LHC_iVhqb9zqOMy",
          bordered_corner_container: "_3IBcNy1U-I38_F9BNw-VHE",
          bordered_corner_expanded: "ahz31bshwySKGB_tBKf14",
          bordered_corner_shrinked: "L8sFYvKOUztrhXdjxy7mp",
          broadcast_settings_icon: "_37ugZJhL-qCRkdeZBRju2h",
          side_panels: "T_zpRAGXggYgVaRyCSXDu",
          wrapper: "_1mH-vDK7JF0NBAdZfdzr1a",
          video_placeholder: "_1KU955BfHBkZdSvJncjc9V",
          embedded_player: "_12fBJU1kOnQCeKc9JFTGMX",
          NoChat: "_2QQm1StfkXOLXrBhLy_jYP",
          video_container: "_1gbNxru_N2ui-EXc2_zmRy",
          viewer_bar: "_2YgphHYykz192eH3FgalS4",
          viewer_links: "_2EQpO5nLkHNXFdPk0ZnoY2",
          chat_link: "_3a0zX_I8eGlU5CYF3lcQjs",
          settings_link: "_1ThkelBkPfoE80ibfGyyVB",
          external_link: "_1n1BMOyCVFA0y6ULd_laPH",
          viewer_count: "_1MrTWpNan4htXK4Kql6ms8",
          vod_title: "_2xKaMJn0nexa3MMJvN6yq-",
          stream_icon_and_viewer_container: "_2sbrGTttGmHbz8ZPsO1YuR",
          display_capsule_art: "SsORVFNW3KBOdsIxDVqcd",
          ViewerNum: "_1reMoMi3BZbMUs6jHW93f1",
          StreamCapsule: "biTh7mrlaSv_WSY2gFsCH",
          stream_icon_container: "_2zBOiujXasDdHPmFPW4O90",
          stream_icon_hide_on_hover: "qYFsGojW19eJQAuemyuHQ",
          stream_icon_show_on_hover: "_29z3Nu6SGTNFDwIw8Gdvuk",
          stream_icon: "_1LBYspkgF9X97b89kPRBFC",
          stream_icon_selected: "mSpzeNvpTqIiZHkJgHRw7",
          multistream: "_1DS-WZoUJyBitKOZoq7u3n",
          MultiStreamCtn: "_1K6j5rrGvLPb8aT2L7CBAA",
          scrollingstreams: "_3aYWlUqW6-SosI72nizpP4",
          clear_div: "_1oCVbTJqa4Av40NuPdztIv",
          NoSelect: "_3Zm9dcDmIQkcWVzEq0IB-E",
          broadcast_floating: "_2WNxa8Qii8HrG8e0th6oB8",
          PopOutVideoTitleBar: "_184SIP7TlwJaOjOVVxLBLS",
          PopOutVideoTitleText: "_28O6dX6-Xf37oViWRRhvjz",
          PopOutVideoCloseButton: "_3bIsS_eft2P6BaAUZdlqme",
          BroadcastPlayerContainer: "_3VvcXgvuoyH2OXPyzZXeVT",
          ChatContainer: "_3kqwu6KzpbMqW5fIlXMIKI",
          BroadcastAndChat: "_1aJ9yfIUd-oGDvpo5-BuBx",
          detail_chat_ctn: "IaFnsy98_mIwYox4zmFu2",
          ChatEntry: "Rs7EltAKuQWw9U0v2bKxp",
          Event: "_1A0NY-wvZmZAqMMiw9oTYR",
          container: "_2yiy6ghVhj3fkC4I01odHC",
          LeftPanelCtn: "_6O_psaoFJTLs30M_ePzZ7",
          RightPanelCtn: "yRHl2kJWdMGdwVN_70nrP",
          SidePanelBackground: "_2FYu31I46rjm0DVxq-ufK9",
          LeftPanel: "o6XqrPpvDrpRsE7SpW8qJ",
        };
      },
      63508: (Mi) => {
        Mi.exports = {
          BroadcastChat: "_3URK7gSLJV_b2M32URtdZ1",
          ChatEntry: "_3soy-wJhd4RZ8SNtC31AOz",
          ChatPanel: "_2ZCAIdTy8CoxNNL8KBGNM",
          ChatMessages: "_3M5L0Ioa2wfgEXvySi1hr6",
          EmoticonContainer: "_1wa4oT25nXzeGxGXYpgDwI",
          ChatSend: "_3JUnDuh4M77s4kfjpnkaYW",
          ChatBox: "_2qfgSP2OtiZ-r-oBJanIaJ",
          ChatControls: "_1TekO7c6uL1uezWI5iWEBG",
          MessageChat: "_22PB4rET-Rx8JtZs34nMkf",
          MessageName: "BJe6CMne992juEIk9iv-k",
          MessageContents: "PNYZaITw4xz8Xi60JGcBM",
          EmoticonsOnly: "gFjH8o1u6iAUuxxkUey3m",
          MessageNotification: "_3Xb4_FEsLWwa-ux6iYDjLZ",
          MessageError: "_8MzyWIQ6TwS_AnWj_m4rL",
          minHeightZero: "r7HLM4rGlw8BlvCfsQoMx",
          ChatLoginButton: "_2TAQo-af_j4l7zy9uy5p-l",
          RateLimitProgressBarContainer: "JPqUGxAKEhSxZR4Hr99D1",
          RateLimitProgressBar: "_1EcVKYO2FR6NiyJchLLbol",
          TimedProgressBarContainer: "_39xGjKkRIIE7HwloXCWT41",
          wrapper: "_2vz6RRjc3uhVClPT9KmsWO",
          pie: "_1k4dSfTb9MQQkhRmcTNjXs",
          spinner: "_3nRh57_ZMuIbHDg29qxFoy",
          rota: "_1xXh6121fD_MtzKqUoAKP8",
          filler: "_3EegkD4UmE1ZI1j7DOgAIe",
          fill: "_2tyuX1freBgl1ICX3yI2qG",
          mask: "_1V4KedCnQKPf-TNpoigdVe",
          SelectedUserNameCtn: "_3K4QXV1l7toIASzIn03a9w",
          SelectedUserName: "c907VNi3QBNJZYF7xxgUB",
          FlairContainer: "_166wpHbAcQPnZog52jPZLN",
          RoleFlairContainer: "_1QRJ2HWdG8P7m3J0-ATU4u",
          Description: "_105HH_vRwSwjIsvw_F-73M",
          LogInPrompt: "CsA8vCxom50xEpq0oyOHG",
          SignInButton: "_1dMwWQHXZbAAqaFBL4YyCP",
        };
      },
      8287: (Mi) => {
        Mi.exports = {
          GiveawayWinnerBox: "_3cv4lblvGYp_wrnLaNEVn0",
          GiveawayWinnerAnnounced: "oLk3wFE5C0ocSKj9h7UMR",
          WinnerFlash: "_29x--KnTUnv5WIHAtqtwID",
          GiveawayWinnerBoxRight: "_2ftrc0KIXzfdR16ghJYvPg",
          GiveawayWinnerText: "_1SY2g9O-qYNIpmXPLu4XKK",
          GiveawayWinnerCountdown: "_1eP67dgalghp9Y7VMqedDT",
          GiveawayWinnerBoxLeft: "N6Rk1L-HIjqiJV3iXqRGK",
          GiveawayWinnerArt: "_1sgypTHPFS1VzmPOCkP_pK",
          GiveawayWinnerQuestion: "_3mvdct5S8-AGn0JrsRW0Vo",
          InViewerBar: "_25VQ8K4B2BcYKAbkfDx6Z_",
          GiveawayRegisterButton: "eKSAvf7P4Na3LE-0FkJFY",
          GiveawayAlreadyRegistered: "_2AVNRKDYvludWnAzqwlRYA",
        };
      },
      15527: (Mi) => {
        Mi.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      43087: (Mi) => {
        Mi.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      14256: (Mi) => {
        Mi.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      33543: (Mi) => {
        Mi.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
      81315: (Mi) => {
        Mi.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      61738: (Mi, hi, g) => {
        var l = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function mr(u) {
          var e = f(u);
          return g(e);
        }
        function f(u) {
          if (!g.o(l, u)) {
            var e = new Error("Cannot find module '" + u + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return l[u];
        }
        (mr.keys = function () {
          return Object.keys(l);
        }),
          (mr.resolve = f),
          (Mi.exports = mr),
          (mr.id = 61738);
      },
      96715: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { A: () => l });
        const l =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      19654: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { A: () => l });
        const l =
          g.p +
          "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
      },
    },
  ]);
})();

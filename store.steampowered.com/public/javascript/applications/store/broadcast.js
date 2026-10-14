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
          hW: () => ai,
          Lw: () => Ar,
          ku: () => Dr,
          Mn: () => kr,
          sW: () => mr,
          nn: () => l,
        });
        var l = {};
        g.r(l), g.d(l, { Tq: () => ur, TC: () => o, fe: () => ii });
        var mr = {};
        g.r(mr), g.d(mr, { rx: () => K, XP: () => N });
        var f = g(80613),
          u = g.n(f),
          e = g(75245),
          I = g(35038);
        const cr = 0,
          Y = 1,
          ur = 0,
          j = 1,
          gr = 2,
          E = 3,
          yi = 4,
          Gr = 5,
          ii = 6,
          rr = 7,
          d = 8,
          o = 9,
          m = 10,
          t = 11,
          or = 12,
          L = 13,
          v = 14,
          U = 15,
          K = 0,
          N = 1,
          sr = 2;
        function fr(Z) {
          return "unknown EBroadcastChatPermission ( " + Z + " )";
        }
        function A(Z) {
          return "unknown EBroadcastWatchLocation ( " + Z + " )";
        }
        function Bi(Z) {
          return "unknown EBroadcastChatBan ( " + Z + " )";
        }
        function ti(Z) {
          return "unknown EBroadcastRestriction ( " + Z + " )";
        }
        class k extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              k.prototype.permission || e.Sg(k.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
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
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = e.w0(k.M())), k.sm_mbf;
          }
          toObject(i = !1) {
            return k.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(k.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(k.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new k();
            return k.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(k.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return k.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(k.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class B extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              B.prototype.broadcast_id || e.Sg(B.M()),
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
        class $ extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              $.prototype.upload_token || e.Sg($.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(i = !1) {
            return $.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT($.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq($.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new $();
            return $.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj($.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return $.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0($.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, i), i.getResultBase64String()
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
        function xi(Z) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            Z +
            " )"
          );
        }
        class X extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              X.prototype.steamid || e.Sg(X.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
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
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = e.w0(X.M())), X.sm_mbf;
          }
          toObject(i = !1) {
            return X.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(X.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(X.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new X();
            return X.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(X.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return X.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(X.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class ei extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ei.prototype.steamid || e.Sg(ei.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ei.sm_m ||
                (ei.sm_m = {
                  proto: ei,
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
              ei.sm_m
            );
          }
          static MBF() {
            return ei.sm_mbf || (ei.sm_mbf = e.w0(ei.M())), ei.sm_mbf;
          }
          toObject(i = !1) {
            return ei.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ei.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ei.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ei();
            return ei.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ei.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ei.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class br extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              br.prototype.steamid || e.Sg(br.M()),
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
        class wr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              wr.prototype.permission || e.Sg(wr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
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
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = e.w0(wr.M())), wr.sm_mbf;
          }
          toObject(i = !1) {
            return wr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(wr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(wr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new wr();
            return wr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(wr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(wr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
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
        function Oi(Z) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            Z +
            " )"
          );
        }
        class Ur extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ur.prototype.broadcast_id || e.Sg(Ur.M()),
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
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
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
        class li extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              li.prototype.broadcast_id || e.Sg(li.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              li.sm_m ||
                (li.sm_m = {
                  proto: li,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              li.sm_m
            );
          }
          static MBF() {
            return li.sm_mbf || (li.sm_mbf = e.w0(li.M())), li.sm_mbf;
          }
          toObject(i = !1) {
            return li.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(li.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(li.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new li();
            return li.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(li.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return li.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(li.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class Yr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Yr.prototype.broadcast_id || e.Sg(Yr.M()),
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
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class $r extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              $r.prototype.broadcast_channel_id || e.Sg($r.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
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
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = e.w0($r.M())), $r.sm_mbf;
          }
          toObject(i = !1) {
            return $r.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT($r.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq($r.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new $r();
            return $r.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj($r.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0($r.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class Zr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Zr.prototype.thumbnail_upload_token || e.Sg(Zr.M()),
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
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class W extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              W.prototype.broadcast_upload_id || e.Sg(W.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
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
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = e.w0(W.M())), W.sm_mbf;
          }
          toObject(i = !1) {
            return W.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(W.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(W.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new W();
            return W.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(W.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return W.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(W.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class Lr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Lr.prototype.broadcaster_steamid || e.Sg(Lr.M()),
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
                    broadcaster_steamid: {
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
        class Wr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Wr.prototype.chat_id || e.Sg(Wr.M()),
              f.Message.initialize(this, i, 0, -1, [4], null);
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
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class Ar extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ar.prototype.chat_id || e.Sg(Ar.M()),
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
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class Br extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Br.prototype.persona_name || e.Sg(Br.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
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
            return "CBroadcast_PostChatMessage_Response";
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
                    flair: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
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
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class Fr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Fr.prototype.result || e.Sg(Fr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
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
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = e.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(i = !1) {
            return Fr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Fr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Fr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Fr();
            return Fr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Fr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Fr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class ai extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ai.prototype.chat_id || e.Sg(ai.M()),
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
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class ui extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return ui.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new ui();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ui();
            return ui.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class Dr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Dr.prototype.chat_id || e.Sg(Dr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
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
        class Hr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Hr.prototype.chat_id || e.Sg(Hr.M()),
              f.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
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
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class Ir extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ir.prototype.persona_names || e.Sg(Ir.M()),
              f.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: { persona_names: { n: 1, c: Nr, r: !0, q: !0 } },
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
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class Nr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Nr.prototype.steam_id || e.Sg(Nr.M()),
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
        class y extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return y.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new y();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new y();
            return y.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return y.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, i), i.getResultBase64String()
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
        class Ii extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Ii.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new Ii();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Ii();
            return Ii.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, i), i.getResultBase64String()
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
        class mi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              mi.prototype.row_limit || e.Sg(mi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mi.sm_m ||
                (mi.sm_m = {
                  proto: mi,
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
              mi.sm_m
            );
          }
          static MBF() {
            return mi.sm_mbf || (mi.sm_mbf = e.w0(mi.M())), mi.sm_mbf;
          }
          toObject(i = !1) {
            return mi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(mi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(mi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new mi();
            return mi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(mi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(mi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class ci extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ci.prototype.upload_stats || e.Sg(ci.M()),
              f.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ci.sm_m ||
                (ci.sm_m = {
                  proto: ci,
                  fields: { upload_stats: { n: 1, c: ir, r: !0, q: !0 } },
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
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class ir extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ir.prototype.upload_result || e.Sg(ir.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
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
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = e.w0(ir.M())), ir.sm_mbf;
          }
          toObject(i = !1) {
            return ir.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(ir.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(ir.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new ir();
            return ir.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(ir.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(ir.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, i), i.getResultBase64String()
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
        class Er extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Er.prototype.viewer_stats || e.Sg(Er.M()),
              f.Message.initialize(this, i, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    viewer_stats: { n: 1, c: Kr, r: !0, q: !0 },
                    country_stats: { n: 2, c: Xr, r: !0, q: !0 },
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
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class Kr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Kr.prototype.time || e.Sg(Kr.M()),
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
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
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
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class Xr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Xr.prototype.country_code || e.Sg(Xr.M()),
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
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class Qr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Qr.prototype.webrtc_session_id || e.Sg(Qr.M()),
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
        class Jr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Jr.prototype.webrtc_session_id || e.Sg(Jr.M()),
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
                    webrtc_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
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
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class Tr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Tr.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new Tr();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Tr();
            return Tr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class Pr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Pr.prototype.broadcaster_steamid || e.Sg(Pr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
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
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class gi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return gi.toObject(i, this);
          }
          static toObject(i, s) {
            return i ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(i) {
            return new gi();
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new gi();
            return gi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return i;
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {}
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class fi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              fi.prototype.sdp_mid || e.Sg(fi.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fi.sm_m ||
                (fi.sm_m = {
                  proto: fi,
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
              fi.sm_m
            );
          }
          static MBF() {
            return fi.sm_mbf || (fi.sm_mbf = e.w0(fi.M())), fi.sm_mbf;
          }
          toObject(i = !1) {
            return fi.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(fi.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(fi.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new fi();
            return fi.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(fi.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(fi.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
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
                    candidate: { n: 2, c: fi },
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
        class Rr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Rr.prototype.broadcaster_steamid || e.Sg(Rr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
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
                    candidate: { n: 3, c: fi },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = e.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(i = !1) {
            return Rr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Rr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Rr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Rr();
            return Rr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Rr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Rr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, i), i.getResultBase64String()
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
        class Vr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Vr.prototype.broadcaster_steamid || e.Sg(Vr.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
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
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = e.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(i = !1) {
            return Vr.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Vr.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Vr.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Vr();
            return Vr.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Vr.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Vr.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class Cr extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Cr.prototype.candidate_generation || e.Sg(Cr.M()),
              f.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    candidates: { n: 2, c: fi, r: !0, q: !0 },
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
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class _r extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              _r.prototype.broadcast_session_id || e.Sg(_r.M()),
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
                    broadcast_session_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
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
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Di extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Di.prototype.cellid || e.Sg(Di.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Di.sm_m ||
                (Di.sm_m = {
                  proto: Di,
                  fields: {
                    cellid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              Di.sm_m
            );
          }
          static MBF() {
            return Di.sm_mbf || (Di.sm_mbf = e.w0(Di.M())), Di.sm_mbf;
          }
          toObject(i = !1) {
            return Di.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(Di.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(Di.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new Di();
            return Di.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(Di.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(Di.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class Wi extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Wi.prototype.turn_server || e.Sg(Wi.M()),
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
                    turn_server: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
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
        class P extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              P.prototype.broadcast_session_id || e.Sg(P.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
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
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = e.w0(P.M())), P.sm_mbf;
          }
          toObject(i = !1) {
            return P.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(P.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(P.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new P();
            return P.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(P.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return P.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(P.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class R extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              R.prototype.broadcast_session_id || e.Sg(R.M()),
              f.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
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
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = e.w0(R.M())), R.sm_mbf;
          }
          toObject(i = !1) {
            return R.toObject(i, this);
          }
          static toObject(i, s) {
            return e.BT(R.M(), i, s);
          }
          static fromObject(i) {
            return e.Uq(R.M(), i);
          }
          static deserializeBinary(i) {
            let s = new (u().BinaryReader)(i),
              M = new R();
            return R.deserializeBinaryFromReader(M, s);
          }
          static deserializeBinaryFromReader(i, s) {
            return e.zj(R.MBF(), i, s);
          }
          serializeBinary() {
            var i = new (u().BinaryWriter)();
            return R.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, s) {
            e.i0(R.M(), i, s);
          }
          serializeBase64String() {
            var i = new (u().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, i), i.getResultBase64String()
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
                    candidate: { n: 3, c: fi },
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
        ((Z) => {
          function i(J, H, Q) {
            return J.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, I.I8)(k, H, Q),
              B,
              { ePrivilege: 1 },
            );
          }
          Z.BeginBroadcastSession = i;
          function s(J, H, Q) {
            return J.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, I.I8)(tr, H, Q),
              Mr,
              { ePrivilege: 1 },
            );
          }
          Z.EndBroadcastSession = s;
          function M(J, H, Q) {
            return J.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, I.I8)(D, H, Q),
              $,
              { ePrivilege: 1 },
            );
          }
          Z.StartBroadcastUpload = M;
          function ue(J, H) {
            return J.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, I.I8)(W, H),
              { ePrivilege: 1 },
            );
          }
          Z.NotifyBroadcastUploadStop = ue;
          function ne(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, I.I8)(si, H, Q),
              Or,
              { ePrivilege: 2 },
            );
          }
          Z.WatchBroadcast = ne;
          function $i(J, H) {
            return J.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, I.I8)(X, H),
              { ePrivilege: 2 },
            );
          }
          Z.HeartbeatBroadcast = $i;
          function me(J, H) {
            return J.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, I.I8)(ei, H),
              { ePrivilege: 2 },
            );
          }
          Z.StopWatchingBroadcast = me;
          function ye(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, I.I8)(zr, H, Q),
              jr,
              { ePrivilege: 2 },
            );
          }
          Z.GetBroadcastStatus = ye;
          function Ji(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, I.I8)(vr, H, Q),
              pr,
              { ePrivilege: 2 },
            );
          }
          Z.GetBroadcastThumbnail = Ji;
          function Yi(J, H, Q) {
            return J.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, I.I8)(br, H, Q),
              ni,
              { ePrivilege: 1 },
            );
          }
          Z.InviteToBroadcast = Yi;
          function ce(J, H, Q) {
            return J.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, I.I8)(wr, H, Q),
              oi,
              { ePrivilege: 1 },
            );
          }
          Z.SendBroadcastStateToServer = ce;
          function he(J, H) {
            return J.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, I.I8)(xr, H),
              { ePrivilege: 1 },
            );
          }
          Z.NotifyBroadcastSessionHeartbeat = he;
          function ge(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, I.I8)(G, H, Q),
              Wr,
              { ePrivilege: 2 },
            );
          }
          Z.GetBroadcastChatInfo = ge;
          function ze(J, H, Q) {
            return J.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, I.I8)(Ar, H, Q),
              Br,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Z.PostChatMessage = ze;
          function je(J, H, Q) {
            return J.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, I.I8)(kr, H, Q),
              Fr,
              { ePrivilege: 1, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Z.UpdateChatMessageFlair = je;
          function ve(J, H, Q) {
            return J.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, I.I8)(ai, H, Q),
              ui,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Z.MuteBroadcastChatUser = ve;
          function Ti(J, H, Q) {
            return J.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, I.I8)(Dr, H, Q),
              zi,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Z.RemoveUserChatText = Ti;
          function pe(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, I.I8)(Hr, H, Q),
              Ir,
              { ePrivilege: 1 },
            );
          }
          Z.GetBroadcastChatUserNames = pe;
          function Oe(J, H, Q) {
            return J.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, I.I8)(dr, H, Q),
              a,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.StartBuildClip = Oe;
          function Ki(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, I.I8)(b, H, Q),
              y,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetBuildClipStatus = Ki;
          function wi(J, H, Q) {
            return J.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, I.I8)(z, H, Q),
              O,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.SetClipDetails = wi;
          function ki(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, I.I8)(x, H, Q),
              F,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetClipDetails = ki;
          function xe(J, H, Q) {
            return J.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, I.I8)(S, H, Q),
              Ii,
              { ePrivilege: 1 },
            );
          }
          Z.SetRTMPInfo = xe;
          function bi(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, I.I8)(lr, H, Q),
              ar,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetRTMPInfo = bi;
          function Ui(J, H) {
            return J.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, I.I8)(Ei, H),
              { ePrivilege: 1 },
            );
          }
          Z.NotifyWebRTCHaveTURNServer = Ui;
          function oe(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, I.I8)(Qr, H, Q),
              ji,
              { ePrivilege: 1 },
            );
          }
          Z.WebRTCStartResult = oe;
          function Fe(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, I.I8)(Jr, H, Q),
              Tr,
              { ePrivilege: 1 },
            );
          }
          Z.WebRTCStopped = Fe;
          function Ie(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, I.I8)(Pr, H, Q),
              gi,
              { ePrivilege: 1 },
            );
          }
          Z.WebRTCSetAnswer = Ie;
          function Ri(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, I.I8)(Di, H, Q),
              Wi,
              { ePrivilege: 1 },
            );
          }
          Z.WebRTCLookupTURNServer = Ri;
          function fe(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, I.I8)(Sr, H, Q),
              vi,
              { ePrivilege: 1 },
            );
          }
          Z.WebRTCAddHostCandidate = fe;
          function De(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, I.I8)(Rr, H, Q),
              pi,
              { ePrivilege: 1 },
            );
          }
          Z.WebRTCAddViewerCandidate = De;
          function Ni(J, H, Q) {
            return J.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, I.I8)(Vr, H, Q),
              Cr,
              { ePrivilege: 1 },
            );
          }
          Z.WebRTCGetHostCandidates = Ni;
          function We(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, I.I8)(mi, H, Q),
              ci,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetBroadcastUploadStats = We;
          function be(J, H, Q) {
            return J.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, I.I8)(hr, H, Q),
              Er,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Z.GetBroadcastViewerStats = be;
        })(te || (te = {}));
        var ae;
        ((Z) => {
          (Z.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: q,
          }),
            (Z.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: Ur,
            }),
            (Z.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: nr,
            }),
            (Z.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: yr,
            }),
            (Z.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: li,
            }),
            (Z.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: Lr,
            }),
            (Z.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: Yr,
            }),
            (Z.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: $r,
            }),
            (Z.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: Zr,
            }),
            (Z.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: _r,
            }),
            (Z.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: P,
            }),
            (Z.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: R,
            }),
            (Z.NotifyWebRTCAddViewerCandidateHandler = {
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
            Ms: () => L,
            n6: () => yi,
            U6: () => Y,
            kz: () => gr,
            ej: () => K,
            R: () => U,
            mZ: () => v,
            Is: () => ii,
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
          Y = 2,
          ur = 3,
          j = 4,
          gr = 5,
          E = 6,
          yi = 7,
          Gr = 8,
          ii = 9,
          rr = 10,
          d = 11,
          o = 12,
          m = 13,
          t = 14,
          or = 15,
          L = 16,
          v = 17,
          U = 18,
          K = 19;
        function N(Mr) {
          return "unknown EProductPageAction ( " + Mr + " )";
        }
        function sr(Mr) {
          return "unknown EProductViewAction ( " + Mr + " )";
        }
        function fr(Mr) {
          return "unknown EProductImpressionFromClientType ( " + Mr + " )";
        }
        function A(Mr) {
          return "unknown ETrackedEmailType ( " + Mr + " )";
        }
        function Bi(Mr) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + Mr + " )"
          );
        }
        function ti(Mr) {
          return "unknown EUnifedProductInteractionActions ( " + Mr + " )";
        }
        class k extends mr.Message {
          static ImplementsStaticInterface() {}
          constructor(D = null) {
            super(),
              k.prototype.impressions || u.Sg(k.M()),
              mr.Message.initialize(this, D, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: { impressions: { n: 1, c: B, r: !0, q: !0 } },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = u.w0(k.M())), k.sm_mbf;
          }
          toObject(D = !1) {
            return k.toObject(D, this);
          }
          static toObject(D, $) {
            return u.BT(k.M(), D, $);
          }
          static fromObject(D) {
            return u.Uq(k.M(), D);
          }
          static deserializeBinary(D) {
            let $ = new (f().BinaryReader)(D),
              nr = new k();
            return k.deserializeBinaryFromReader(nr, $);
          }
          static deserializeBinaryFromReader(D, $) {
            return u.zj(k.MBF(), D, $);
          }
          serializeBinary() {
            var D = new (f().BinaryWriter)();
            return k.serializeBinaryToWriter(this, D), D.getResultBuffer();
          }
          static serializeBinaryToWriter(D, $) {
            u.i0(k.M(), D, $);
          }
          serializeBase64String() {
            var D = new (f().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, D), D.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class B extends mr.Message {
          static ImplementsStaticInterface() {}
          constructor(D = null) {
            super(),
              B.prototype.type || u.Sg(B.M()),
              mr.Message.initialize(this, D, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
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
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = u.w0(B.M())), B.sm_mbf;
          }
          toObject(D = !1) {
            return B.toObject(D, this);
          }
          static toObject(D, $) {
            return u.BT(B.M(), D, $);
          }
          static fromObject(D) {
            return u.Uq(B.M(), D);
          }
          static deserializeBinary(D) {
            let $ = new (f().BinaryReader)(D),
              nr = new B();
            return B.deserializeBinaryFromReader(nr, $);
          }
          static deserializeBinaryFromReader(D, $) {
            return u.zj(B.MBF(), D, $);
          }
          serializeBinary() {
            var D = new (f().BinaryWriter)();
            return B.serializeBinaryToWriter(this, D), D.getResultBuffer();
          }
          static serializeBinaryToWriter(D, $) {
            u.i0(B.M(), D, $);
          }
          serializeBase64String() {
            var D = new (f().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, D), D.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var tr;
        ((Mr) => {
          function D($, nr) {
            return $.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, e.I8)(k, nr),
              { ePrivilege: 1 },
            );
          }
          Mr.ReportProductImpressionsFromClient = D;
        })(tr || (tr = {}));
      },
      95414: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { j: () => E, u: () => yi });
        var l = g(7850),
          mr = g(90626),
          f = g(24660),
          u = g(83482),
          e = g(72865),
          I = g(77200),
          cr = g(53113),
          Y = g(68094),
          ur = g(72609),
          j = g(3166);
        function gr(Gr) {
          if (Gr) {
            if ("appid" in Gr) return "app";
            if ("bundleid" in Gr) return "bundle";
            if ("packageid" in Gr) return "sub";
          }
        }
        function E(Gr) {
          const {
              id: ii,
              hoverClassName: rr,
              fnGetIDOverride: d,
              fnHoverState: o,
              disableScreenshots: m,
              children: t,
            } = Gr,
            or = mr.useRef(null),
            L = mr.useCallback(
              (U) => {
                const K = gr(ii);
                K &&
                  (o && o(!0),
                  window.GameHover &&
                    (or.current &&
                      m &&
                      (or.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(d ? d() : or.current, U, "global_hover", {
                      type: K,
                      id: (0, Y.G$)(ii).id,
                      v6: 1,
                    })));
              },
              [o, d, m, ii],
            ),
            v = mr.useCallback(
              (U) => {
                gr(ii) &&
                  (o && U.relatedTarget && o(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      d ? d() : or.current,
                      U,
                      "global_hover",
                    ));
              },
              [ii, o, d],
            );
          return (0, l.jsx)("div", {
            ref: or,
            className: rr,
            onMouseEnter: L,
            onMouseLeave: v,
            onFocus: L,
            onBlur: v,
            children: t,
          });
        }
        function yi(Gr) {
          const {
              id: ii,
              strExtraParams: rr,
              fnOnClickOverride: d,
              strOverrideURL: o,
            } = Gr,
            m = (0, e.n9)(),
            t = (0, I.w)(),
            or = (0, cr.NT)(
              o ||
                (ii && "creatorid" in ii
                  ? (0, u.It)(
                      `${ur.TS.STORE_BASE_URL}curator/${((0, Y.G$))(ii).id}${rr ? `?${rr}` : ""}`,
                      m,
                      t,
                    )
                  : (0, u.It)(
                      `${ur.TS.STORE_BASE_URL}${gr(ii)}/${((0, Y.G$))(ii).id}${rr ? `?${rr}` : ""}`,
                      m,
                      t,
                    )),
            );
          return (0, l.jsx)(E, {
            ...Gr,
            children: (0, l.jsx)(f.Ii, {
              className: Gr.className,
              href: d ? void 0 : or,
              target: ur.TS.IN_CLIENT || d ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: d,
              children: Gr.children,
            }),
          });
        }
      },
      11587: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { Qg: () => rr, h3: () => ii });
        var l = g(72609),
          mr = g(80902),
          f = g(75233),
          u = g(51614),
          e = g(90626),
          I = g(72604);
        const cr = "saleaction/giveawayregistration",
          Y = "saleaction/creategiveawayregistration";
        async function ur(d) {
          const o = l.TS.STORE_BASE_URL + cr + "?name=" + encodeURIComponent(d),
            m = await fetch(o, { credentials: "include" });
          return await gr("GetUserGiveawayRegistration", d, o, m);
        }
        async function j(d) {
          const o = l.TS.STORE_BASE_URL + Y,
            m = await fetch(o, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: d }),
            });
          return await gr("UpdateUserGiveawayRegistration", d, o, m);
        }
        async function gr(d, o, m, t) {
          if (!t.ok) throw new Error(m + " answered " + t.status);
          const or = await t.json();
          if (or?.success == I.R && or.registration) return or.registration;
          throw new Error(d + " on " + o + " answered " + or?.success);
        }
        const E = { registered: !1 };
        function yi(d, o) {
          return ["sale", "giveawayregistration", d, o];
        }
        function Gr(d, o) {
          return {
            queryKey: yi(d, o),
            queryFn: () => ur(d),
            enabled: !!d,
            retry: !1,
          };
        }
        function ii(d) {
          const { data: o, isError: m } = (0, mr.I)(Gr(d, l.iA.accountid));
          return m ? E : o;
        }
        function rr() {
          const d = (0, f.jE)(),
            { mutateAsync: o } = (0, u.n)({
              mutationFn: j,
              onSuccess: (t, or) => d.setQueryData(yi(or, l.iA.accountid), t),
            });
          return {
            fnCreateRegistration: (0, e.useCallback)(
              async (t) => {
                try {
                  return await o(t);
                } catch (or) {
                  return (
                    console.error(
                      "Registering for giveaway " + t + " failed",
                      or,
                    ),
                    E
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
        function I(Y) {
          const { enabled: ur, children: j } = Y,
            gr = mr.useMemo(() => ({ enabled: ur }), [ur]);
          return (0, l.jsx)(e.Provider, { value: gr, children: j });
        }
        function cr(Y) {
          const {
              placeholderWidth: ur,
              placeholderHeight: j,
              holdGamepadFocus: gr = !1,
              onRender: E,
              style: yi,
              mode: Gr = "JustLoad",
              children: ii,
              ...rr
            } = Y,
            d = mr.useContext(e),
            [o, m] = mr.useState(() => ({
              bRenderChildren: !d.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            t = mr.useRef(null),
            or = Gr === "LoadAndUnload" && d.enabled,
            L = mr.useCallback(
              (N) => {
                m((sr) => {
                  if (sr.bRenderChildren === N || (sr.bRenderChildren && !or))
                    return sr;
                  let fr = 0,
                    A = 0;
                  if (t.current) {
                    const Bi = t.current.getBoundingClientRect();
                    Bi && ((fr = Bi.width), (A = Bi.height));
                  }
                  return (
                    N && E && E(),
                    {
                      bRenderChildren: N,
                      nPrevRenderWidth: fr,
                      nPrevRenderHeight: A,
                    }
                  );
                });
              },
              [or, E],
            );
          mr.useEffect(() => {
            d.enabled || L(!0);
          }, [d.enabled, L]);
          let v = yi;
          if (!o.bRenderChildren) {
            const N = o.nPrevRenderWidth || ur,
              sr = o.nPrevRenderHeight || j;
            (sr !== void 0 || N !== void 0) &&
              (v = { ...yi, minHeight: sr, minWidth: N });
          }
          const U = or ? "repeated" : "once";
          let K = (0, l.jsx)(f.J, {
            containerRef: t,
            style: v,
            ...rr,
            onVisibilityChange: L,
            trigger: U,
            children: o.bRenderChildren && ii,
          });
          return (
            gr &&
              (K = (0, l.jsx)(u.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: K,
              })),
            K
          );
        }
      },
      9032: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { uj: () => I, fB: () => cr });
        var l = g(80902),
          mr = g(72604),
          f = g(72609);
        async function u(Y, ur) {
          const j = f.TS.STORE_BASE_URL + "video/details/" + Y + "/0",
            gr = await fetch(j, { credentials: "include", signal: ur });
          if (!gr.ok) throw new Error(j + " answered " + gr.status);
          const E = await gr.json();
          if (E?.success != mr.R && E?.success != "ready")
            throw new Error(
              "video/details on " + Y + " answered " + E?.success,
            );
          return { appid: Y, video_url: E.video_url, bookmark: E.bookmark };
        }
        function e(Y) {
          return ["video", "vod", Y];
        }
        function I(Y) {
          return {
            queryKey: e(Y),
            queryFn: ({ signal: ur }) => u(Y, ur),
            retry: !1,
          };
        }
        function cr(Y) {
          const { data: ur, isPending: j } = (0, l.I)(I(Y));
          return { vodInfo: ur, bLoading: j };
        }
      },
      2422: (Mi, hi, g) => {
        "use strict";
        g.r(hi),
          g.d(hi, {
            BroadcastEmbeddablePopoutHeader: () => Ze,
            default: () => kt,
          });
        var l = g(7850),
          mr = g(41735),
          f = g.n(mr),
          u = g(75844),
          e = g(65946),
          I = g(90626),
          cr = g(14947),
          Y = g(16346),
          ur = g(90711),
          j = g(90828),
          gr = g(72604),
          E = g(35038),
          yi = g(84110),
          Gr = g(3685),
          ii = g(60298),
          rr = g(45806),
          d = g(76559),
          o = g(80613),
          m = g.n(o),
          t = g(75245);
        function or(w) {
          return "unknown EBroadcastImageType ( " + w + " )";
        }
        function L(w) {
          return "unknown EGetGamesAlgorithm ( " + w + " )";
        }
        function v(w) {
          return "unknown EGetChannelsAlgorithm ( " + w + " )";
        }
        function U(w) {
          return "unknown ESteamTVContentTemplate ( " + w + " )";
        }
        class K extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.unique_name || t.Sg(K.M()),
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
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(K.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new K();
            return K.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(K.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(K.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class N extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.broadcast_channel_id || t.Sg(N.M()),
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
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(N.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new N();
            return N.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(N.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(N.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class sr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.unique_name || t.Sg(sr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = t.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(sr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new sr();
            return sr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(sr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(sr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class fr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.broadcast_channel_id || t.Sg(fr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = t.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(fr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new fr();
            return fr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(fr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(fr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class A extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.broadcast_channel_id || t.Sg(A.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = t.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(A.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new A();
            return A.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(A.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(A.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        }
        class Bi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Bi.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new Bi();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Bi();
            return Bi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class ti extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ti.prototype.broadcast_channel_id || t.Sg(ti.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ti.sm_m
            );
          }
          static MBF() {
            return ti.sm_mbf || (ti.sm_mbf = t.w0(ti.M())), ti.sm_mbf;
          }
          toObject(r = !1) {
            return ti.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ti.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ti.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ti();
            return ti.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ti.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ti.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class k extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.unique_name || t.Sg(k.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(k.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new k();
            return k.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(k.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(k.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class B extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.broadcast_channel_id || t.Sg(B.M()),
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
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    undo: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = t.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(B.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new B();
            return B.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(B.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(B.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              tr.prototype.replace_image_hash || t.Sg(tr.M()),
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
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = t.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(tr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new tr();
            return tr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(tr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(tr.M(), r, n);
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
              Mr.prototype.broadcast_channel_id || t.Sg(Mr.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = t.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Mr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Mr();
            return Mr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Mr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Mr.M(), r, n);
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
              D.prototype.images || t.Sg(D.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: { images: { n: 1, c: $, r: !0, q: !0 } },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(D.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new D();
            return D.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(D.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(D.M(), r, n);
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
        class $ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.image_type || t.Sg($.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    image_type: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT($.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new $();
            return $.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj($.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0($.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              nr.prototype.broadcast_channel_id || t.Sg(nr.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = t.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(nr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new nr();
            return nr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(nr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(nr.M(), r, n);
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
              zr.prototype.links || t.Sg(zr.M()),
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
            return zr.sm_mbf || (zr.sm_mbf = t.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(zr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new zr();
            return zr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(zr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(zr.M(), r, n);
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
              jr.prototype.link_index || t.Sg(jr.M()),
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
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = t.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(jr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new jr();
            return jr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(jr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(jr.M(), r, n);
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
              vr.prototype.broadcast_channel_id || t.Sg(vr.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    links: { n: 2, c: pr, r: !0, q: !0 },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = t.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(vr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new vr();
            return vr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(vr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(vr.M(), r, n);
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
              pr.prototype.link_index || t.Sg(pr.M()),
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
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = t.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(pr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new pr();
            return pr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(pr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(pr.M(), r, n);
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
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new si();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new si();
            return si.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
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
              Or.prototype.broadcast_channel_id || t.Sg(Or.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = t.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Or.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Or();
            return Or.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Or.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Or.M(), r, n);
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
              xi.prototype.is_live || t.Sg(xi.M()),
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
                    is_live: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              xi.sm_m
            );
          }
          static MBF() {
            return xi.sm_mbf || (xi.sm_mbf = t.w0(xi.M())), xi.sm_mbf;
          }
          toObject(r = !1) {
            return xi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(xi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(xi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new xi();
            return xi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(xi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(xi.M(), r, n);
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
        class X extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.broadcast_channel_id || t.Sg(X.M()),
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
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    appid: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_live: { n: 16, br: t.qM.readBool, bw: t.gp.writeBool },
                    language: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(X.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new X();
            return X.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(X.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(X.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        }
        class ei extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ei.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ei();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ei();
            return ei.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        class br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.results || t.Sg(br.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = t.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(br.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new br();
            return br.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(br.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(br.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ni();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ni();
            return ni.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
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
        class wr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.results || t.Sg(wr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = t.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(wr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new wr();
            return wr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(wr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(wr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class oi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oi.prototype.broadcast_channel_id || t.Sg(oi.M()),
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
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              oi.sm_m
            );
          }
          static MBF() {
            return oi.sm_mbf || (oi.sm_mbf = t.w0(oi.M())), oi.sm_mbf;
          }
          toObject(r = !1) {
            return oi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(oi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(oi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new oi();
            return oi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(oi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(oi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              q.prototype.is_followed || t.Sg(q.M()),
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
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(q.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new q();
            return q.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(q.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(q.M(), r, n);
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
              Oi.prototype.broadcast_channel_id || t.Sg(Oi.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Oi.sm_m
            );
          }
          static MBF() {
            return Oi.sm_mbf || (Oi.sm_mbf = t.w0(Oi.M())), Oi.sm_mbf;
          }
          toObject(r = !1) {
            return Oi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Oi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Oi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Oi();
            return Oi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Oi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Oi.M(), r, n);
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
        class Ur extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.is_subscribed || t.Sg(Ur.M()),
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
                    is_subscribed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = t.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Ur.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Ur();
            return Ur.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Ur.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Ur.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              yr.prototype.broadcast_channel_id || t.Sg(yr.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = t.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(yr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new yr();
            return yr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(yr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(yr.M(), r, n);
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
        class li extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return li.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new li();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new li();
            return li.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class Yr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.broadcast_channel_id || t.Sg(Yr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = t.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Yr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Yr();
            return Yr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Yr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Yr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class $r extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.is_followed || t.Sg($r.M()),
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
                    is_followed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = t.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT($r.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new $r();
            return $r.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj($r.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0($r.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class Zr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.appid || t.Sg(Zr.M()),
              o.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    image: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channels: { n: 5, c: X, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = t.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Zr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Zr();
            return Zr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Zr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Zr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        }
        class W extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.appid || t.Sg(W.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    algorithm: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(W.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new W();
            return W.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(W.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(W.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        }
        class Lr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.results || t.Sg(Lr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: { results: { n: 1, c: Zr, r: !0, q: !0 } },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = t.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Lr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Lr();
            return Lr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Lr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Lr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              xr.prototype.algorithm || t.Sg(xr.M()),
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
                    algorithm: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = t.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(xr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new xr();
            return xr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(xr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(xr.M(), r, n);
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
              G.prototype.results || t.Sg(G.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(G.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new G();
            return G.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(G.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(G.M(), r, n);
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
        class Wr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.broadcast_channel_id || t.Sg(Wr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = t.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Wr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Wr();
            return Wr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Wr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Wr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class Ar extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.broadcasters || t.Sg(Ar.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: { broadcasters: { n: 1, c: Br, r: !0, q: !0 } },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = t.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Ar.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Ar();
            return Ar.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Ar.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Ar.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        }
        class Br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.steamid || t.Sg(Br.M()),
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
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = t.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Br.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Br();
            return Br.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Br.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Br.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.issuer_steamid || t.Sg(kr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    name: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = t.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(kr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new kr();
            return kr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(kr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(kr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        }
        class Fr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.broadcast_channel_id || t.Sg(Fr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    undo: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = t.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Fr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Fr();
            return Fr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Fr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Fr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
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
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ai();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ai();
            return ai.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class ui extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ui.prototype.broadcast_channel_id || t.Sg(ui.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ui.sm_m ||
                (ui.sm_m = {
                  proto: ui,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ui.sm_m
            );
          }
          static MBF() {
            return ui.sm_mbf || (ui.sm_mbf = t.w0(ui.M())), ui.sm_mbf;
          }
          toObject(r = !1) {
            return ui.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ui.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ui.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ui();
            return ui.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ui.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ui.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        }
        class Dr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.results || t.Sg(Dr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: { results: { n: 1, c: kr, r: !0, q: !0 } },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = t.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Dr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Dr();
            return Dr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Dr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Dr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              zi.prototype.broadcast_channel_id || t.Sg(zi.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              zi.sm_m
            );
          }
          static MBF() {
            return zi.sm_mbf || (zi.sm_mbf = t.w0(zi.M())), zi.sm_mbf;
          }
          toObject(r = !1) {
            return zi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(zi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(zi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new zi();
            return zi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(zi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(zi.M(), r, n);
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
        class Hr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new Hr();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Hr();
            return Hr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class Ir extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.broadcast_channel_id || t.Sg(Ir.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = t.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Ir.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Ir();
            return Ir.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Ir.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Ir.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        }
        class Nr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.steamid || t.Sg(Nr.M()),
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
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = t.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Nr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Nr();
            return Nr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Nr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Nr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              dr.prototype.results || t.Sg(dr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: { results: { n: 1, c: Nr, r: !0, q: !0 } },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = t.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(dr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new dr();
            return dr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(dr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(dr.M(), r, n);
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
              a.prototype.broadcast_channel_id || t.Sg(a.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    word: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = t.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(a.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new a();
            return a.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(a.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(a.M(), r, n);
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
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new b();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new b();
            return b.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
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
        class y extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.broadcast_channel_id || t.Sg(y.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = t.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(y.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new y();
            return y.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(y.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(y.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              z.prototype.results || t.Sg(z.M()),
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
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(z.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new z();
            return z.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(z.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(z.M(), r, n);
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
              O.prototype.broadcast_channel_id || t.Sg(O.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(O.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new O();
            return O.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(O.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(O.M(), r, n);
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
              x.prototype.chat_id || t.Sg(x.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = t.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(x.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new x();
            return x.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(x.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(x.M(), r, n);
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
              F.prototype.term || t.Sg(F.M()),
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
                    term: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = t.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(F.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new F();
            return F.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(F.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(F.M(), r, n);
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
              S.prototype.results || t.Sg(S.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = t.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(S.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new S();
            return S.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(S.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(S.M(), r, n);
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
        class Ii extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ii.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new Ii();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Ii();
            return Ii.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              lr.prototype.stream_live_email || t.Sg(lr.M()),
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
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = t.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(lr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new lr();
            return lr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(lr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(lr.M(), r, n);
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
              ar.prototype.stream_live_email || t.Sg(ar.M()),
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
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = t.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ar.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ar();
            return ar.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ar.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ar.M(), r, n);
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
        class mi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new mi();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new mi();
            return mi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
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
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new ci();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ci();
            return ci.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        class ir extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.results || t.Sg(ir.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: { results: { n: 1, c: X, r: !0, q: !0 } },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = t.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ir.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ir();
            return ir.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ir.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ir.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              hr.prototype.broadcasts || t.Sg(hr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: { broadcasts: { n: 1, c: X, r: !0, q: !0 } },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = t.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(hr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new hr();
            return hr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(hr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(hr.M(), r, n);
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
        class Er extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.broadcasts || t.Sg(Er.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    broadcasts: { n: 1, c: X, r: !0, q: !0 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = t.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Er.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Er();
            return Er.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Er.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Er.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        }
        class Kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.appid || t.Sg(Kr.M()),
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
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast: { n: 3, c: X },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = t.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Kr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Kr();
            return Kr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Kr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Kr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        }
        class Xr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.entries || t.Sg(Xr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    entries: { n: 1, c: Kr, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = t.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Xr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Xr();
            return Xr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Xr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Xr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class Qr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.broadcasts || t.Sg(Qr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    broadcasts: { n: 1, c: X, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = t.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Qr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Qr();
            return Qr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Qr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Qr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              ji.prototype.broadcasts || t.Sg(ji.M()),
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
                    broadcasts: { n: 1, c: X, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ji.sm_m
            );
          }
          static MBF() {
            return ji.sm_mbf || (ji.sm_mbf = t.w0(ji.M())), ji.sm_mbf;
          }
          toObject(r = !1) {
            return ji.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(ji.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(ji.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new ji();
            return ji.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(ji.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(ji.M(), r, n);
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
        class Jr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.broadcast || t.Sg(Jr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    broadcast: { n: 1, c: X },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = t.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Jr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Jr();
            return Jr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Jr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Jr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class Tr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.broadcast || t.Sg(Tr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    broadcast: { n: 1, c: X },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = t.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Tr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Tr();
            return Tr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Tr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Tr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class Pr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.title || t.Sg(Pr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    title: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = t.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Pr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Pr();
            return Pr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Pr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Pr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class gi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gi.prototype.template_type || t.Sg(gi.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gi.sm_m ||
                (gi.sm_m = {
                  proto: gi,
                  fields: {
                    template_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    takeover: { n: 2, c: hr },
                    single_game: { n: 3, c: Er },
                    game_list: { n: 4, c: Xr },
                    quick_explore: { n: 5, c: Qr },
                    conveyor_belt: { n: 6, c: ji },
                    watch_party: { n: 7, c: Jr },
                    developer: { n: 8, c: Tr },
                    event: { n: 9, c: Pr },
                  },
                }),
              gi.sm_m
            );
          }
          static MBF() {
            return gi.sm_mbf || (gi.sm_mbf = t.w0(gi.M())), gi.sm_mbf;
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(gi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(gi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new gi();
            return gi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(gi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(gi.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        }
        class fi extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, n) {
            return r ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(r) {
            return new fi();
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new fi();
            return fi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class Sr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.rows || t.Sg(Sr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: { rows: { n: 1, c: gi, r: !0, q: !0 } },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = t.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Sr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Sr();
            return Sr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Sr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Sr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              vi.prototype.broadcast_channel_id || t.Sg(vi.M()),
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
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              vi.sm_m
            );
          }
          static MBF() {
            return vi.sm_mbf || (vi.sm_mbf = t.w0(vi.M())), vi.sm_mbf;
          }
          toObject(r = !1) {
            return vi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(vi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(vi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new vi();
            return vi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(vi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(vi.M(), r, n);
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
        class Rr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.broadcast_clip_id || t.Sg(Rr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = t.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Rr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Rr();
            return Rr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Rr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Rr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
              pi.prototype.clips || t.Sg(pi.M()),
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
                    clips: { n: 1, c: Rr, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              pi.sm_m
            );
          }
          static MBF() {
            return pi.sm_mbf || (pi.sm_mbf = t.w0(pi.M())), pi.sm_mbf;
          }
          toObject(r = !1) {
            return pi.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(pi.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(pi.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new pi();
            return pi.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(pi.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(pi.M(), r, n);
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
        class Vr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.cheer_type || t.Sg(Vr.M()),
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
                    cheer_type: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = t.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Vr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Vr();
            return Vr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Vr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Vr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class Cr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.app_id || t.Sg(Cr.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: Vr, r: !0, q: !0 },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = t.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(Cr.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new Cr();
            return Cr.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(Cr.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(Cr.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        }
        class _r extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.aggregation_delay_ms || t.Sg(_r.M()),
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
                    aggregation_delay_ms: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = t.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, n) {
            return t.BT(_r.M(), r, n);
          }
          static fromObject(r) {
            return t.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let n = new (m().BinaryReader)(r),
              c = new _r();
            return _r.deserializeBinaryFromReader(c, n);
          }
          static deserializeBinaryFromReader(r, n) {
            return t.zj(_r.MBF(), r, n);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, n) {
            t.i0(_r.M(), r, n);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        }
        var Di;
        ((w) => {
          function r(V, C, _) {
            return V.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, E.I8)(K, C, _),
              N,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.CreateBroadcastChannel = r;
          function n(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, E.I8)(sr, C, _),
              fr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelID = n;
          function c(V, C, _) {
            return V.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, E.I8)(A, C, _),
              Bi,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetBroadcastChannelProfile = c;
          function h(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, E.I8)(ti, C, _),
              k,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelProfile = h;
          function p(V, C, _) {
            return V.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, E.I8)(B, C, _),
              tr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetBroadcastChannelImage = p;
          function T(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, E.I8)(Mr, C, _),
              D,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelImages = T;
          function qr(V, C, _) {
            return V.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, E.I8)(vr, C, _),
              si,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetBroadcastChannelLinkRegions = qr;
          function ri(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, E.I8)(nr, C, _),
              zr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelLinks = ri;
          function di(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, E.I8)(Wr, C, _),
              Ar,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetBroadcastChannelBroadcasters = di;
          function Li(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, E.I8)(ei, C, _),
              br,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetFollowedChannels = Li;
          function Xi(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, E.I8)(ni, C, _),
              wr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetSubscribedChannels = Xi;
          function Ai(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, E.I8)(Or, C, _),
              xi,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelStatus = Ai;
          function Si(V, C, _) {
            return V.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, E.I8)(oi, C, _),
              q,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.FollowBroadcastChannel = Si;
          function ie(V, C, _) {
            return V.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, E.I8)(Oi, C, _),
              Ur,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SubscribeBroadcastChannel = ie;
          function Qt(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, E.I8)(vi, C, _),
              pi,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          w.GetBroadcastChannelClips = Qt;
          function Jt(V, C, _) {
            return V.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, E.I8)(yr, C, _),
              li,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.ReportBroadcastChannel = Jt;
          function Ht(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, E.I8)(Yr, C, _),
              $r,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetBroadcastChannelInteraction = Ht;
          function St(V, C, _) {
            return V.SendMsg("SteamTV.GetGames#1", (0, E.I8)(W, C, _), Lr, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.GetGames = St;
          function qt(V, C, _) {
            return V.SendMsg("SteamTV.GetChannels#1", (0, E.I8)(xr, C, _), G, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.GetChannels = qt;
          function Gt(V, C, _) {
            return V.SendMsg("SteamTV.AddChatBan#1", (0, E.I8)(Fr, C, _), ai, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          w.AddChatBan = Gt;
          function Tt(V, C, _) {
            return V.SendMsg("SteamTV.GetChatBans#1", (0, E.I8)(ui, C, _), Dr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.GetChatBans = Tt;
          function Rt(V, C, _) {
            return V.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, E.I8)(zi, C, _),
              Hr,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          w.AddChatModerator = Rt;
          function Vt(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, E.I8)(Ir, C, _),
              dr,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          w.GetChatModerators = Vt;
          function Ct(V, C, _) {
            return V.SendMsg("SteamTV.AddWordBan#1", (0, E.I8)(a, C, _), b, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.AddWordBan = Ct;
          function _t(V, C, _) {
            return V.SendMsg("SteamTV.GetWordBans#1", (0, E.I8)(y, C, _), z, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          w.GetWordBans = _t;
          function rn(V, C, _) {
            return V.SendMsg("SteamTV.JoinChat#1", (0, E.I8)(O, C, _), x, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          w.JoinChat = rn;
          function en(V, C, _) {
            return V.SendMsg("SteamTV.Search#1", (0, E.I8)(F, C, _), S, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          w.Search = en;
          function tn(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, E.I8)(Ii, C, _),
              lr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetSteamTVUserSettings = tn;
          function nn(V, C, _) {
            return V.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, E.I8)(ar, C, _),
              mi,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetSteamTVUserSettings = nn;
          function sn(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, E.I8)(ci, C, _),
              ir,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetMyBroadcastChannels = sn;
          function ln(V, C, _) {
            return V.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, E.I8)(fi, C, _),
              Sr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetHomePageContents = ln;
          function an(V, C, _) {
            return V.SendMsg("SteamTV.AppCheer#1", (0, E.I8)(Cr, C, _), _r, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          w.AppCheer = an;
        })(Di || (Di = {}));
        var Wi = g(27066),
          Ei = g(8323),
          P = g(18210),
          R = g(3166),
          Pi = g(24544),
          te = Object.defineProperty,
          ae = Object.getOwnPropertyDescriptor,
          Z = (w, r, n, c) => {
            for (
              var h = c > 1 ? void 0 : c ? ae(r, n) : r, p = w.length - 1, T;
              p >= 0;
              p--
            )
              (T = w[p]) && (h = (c ? T(r, n, h) : T(h)) || h);
            return c && h && te(r, n, h), h;
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
            GetChat(r, n) {
              return this.m_mapChats.get(r) || this.m_mapChats.get(n);
            }
            GetOrCreateChat(r, n) {
              let c = this.GetChat(r, n);
              return c || ((c = new $i()), this.m_mapChats.set(r || n, c)), c;
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
        Z([cr.sH], ue.prototype, "m_mapChats", 2);
        let ne = ue;
        class $i {
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
          m_strChatURL;
          m_unInstanceID = Math.floor(Math.random() * 4294967296);
          m_strUserSteamID = "";
          m_regexUserEmoticons = null;
          m_chatScheduledFunc = null;
          m_steamInterface = null;
          m_textFilterStore = null;
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
            R.iA.steamid !== "" && (r = new d.b(R.iA.steamid).GetAccountID()),
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
            const r = (0, rr.q)() ?? ne.Get().GetCMInterface();
            return (
              r || (0, ii.C)(new Gr.D(R.TS.WEBAPI_BASE_URL, R.iA.webapi_token))
            );
          }
          StartForSteamID(r, n) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastSteamID = r),
              (this.m_ulBroadcastID = n),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(r) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastChannelID = r),
              (this.m_strUserSteamID = R.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(r) {
            const n = r.trim();
            if (n.length != 0)
              try {
                const c = E.w.Init(ur.Lw);
                c.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  message: n,
                  instance_id: this.m_unInstanceID.toString(),
                });
                const h = await ur.DK.PostChatMessage(
                    this.m_steamInterface.GetServiceTransport(),
                    c,
                  ),
                  p = {
                    result: h.GetEResult(),
                    cooldown_time_seconds: h.Body().cooldown_time_seconds(),
                    in_game: h.Body().in_game(),
                    persona_name: h.Body().persona_name(),
                  };
                if (p && p.result && p.result != gr.R) {
                  let T = "";
                  p.result == gr.f4
                    ? (T = (0, P.we)("#BroadcastChat_YouMuted"))
                    : p.result == gr.h_
                      ? (T = (0, P.we)(
                          "#BroadcastChat_Cooldown",
                          p.cooldown_time_seconds,
                        ))
                      : (T = (0, P.we)("#BroadcastChat_FailedToSendMsg", n)),
                    this.m_rgChatMessages.push({
                      type: j.X8.Error,
                      msg: T,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: p.in_game,
                      persona_name: p.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = p.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, P.we)("#BroadcastChat_FailedToSendMsg", n),
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
              const n = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, R.KC)(),
                  notoken: 1,
                },
                c = await f().get(
                  `${R.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  { params: n, withCredentials: !0, cancelToken: r?.token },
                );
              (!r || !r.token.reason) &&
                (0, cr.h5)(() => {
                  const h = c.data;
                  (this.m_strChatURL = h.view_url_template),
                    (this.m_ulChatID = h.chat_id),
                    (this.m_strFlairGroupID =
                      h.flair_group_ids && h.flair_group_ids[0]),
                    h.blocked && console.log("User is blocked from chat"),
                    h.steamid && (this.m_strUserSteamID = h.steamid),
                    h.emoticons && this.SetOwnedEmoticons(h.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: j.X8.Notification,
                        msg: (0, P.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    h.moderators_steamid &&
                      h.moderators_steamid.forEach((p) =>
                        this.m_mapBroadcastModeratorUsers.set(p, !0),
                      ),
                    (this.m_chatScheduledFunc = new Ei.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (n) {
              console.error(n), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const r = E.w.Init(O);
              r.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let n = await Di.JoinChat(
                this.m_steamInterface.GetServiceTransport(),
                r,
              );
              if (!n.Body().chat_id || !n.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = n.Body().view_url_template()),
                (this.m_ulChatID = n.Body().chat_id()),
                (this.m_strFlairGroupID =
                  n.Body().flair_group_ids() && n.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: j.X8.Notification,
                  msg: (0, P.we)("#BroadcastChat_DefaultMessage"),
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
            const r = E.w.Init(Ir);
            r.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const c = (
                await Di.GetChatModerators(
                  this.m_steamInterface.GetServiceTransport(),
                  r,
                )
              )
                .Body()
                .results(),
              h = new Map();
            c.forEach((p) => {
              h.set(p.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = h);
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
              n = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            n == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (r.t = this.m_nNextChatTS);
            try {
              const h = (await f().get(n, { params: r })).data;
              this.m_cConsecutiveErrors = 0;
              const p = h.messages
                .map((ri) => ({
                  ...ri,
                  type: j.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((ri) => !this.IsUserMutedLocally(ri.steamid));
              this.m_rgChatMessages.push(...p),
                this.ReplaceChatAnnouncementIfAny(h);
              const T = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > T &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - T,
                  ),
                h.muted)
              )
                for (const ri of h.muted) {
                  const di =
                    ri.muted == this.m_strUserSteamID
                      ? (0, P.we)("#BroadcastChat_YouMuted", ri.persona_name)
                      : (0, P.we)("#BroadcastChat_UserMuted", ri.persona_name);
                  this.m_rgChatMessages.push({
                    type: j.X8.Notification,
                    msg: di,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (h.remove_msgs)
                for (const ri of h.remove_msgs)
                  this.RemoveUserMessagesLocal(ri.steamid);
              let qr = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                h.initial_delay
              ) {
                if (h.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + h.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = h.next_request),
                  (qr = h.initial_delay);
              } else {
                if (h.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  h.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = h.next_request),
                  (qr =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = qr),
                qr < 0 && (qr = 0),
                this.m_chatScheduledFunc.Schedule(qr, this.RequestLoop);
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
                    msg: (0, P.we)("#BroadcastChat_UnableToJoinChat"),
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
              this.m_chatScheduledFunc.Schedule(s, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(r) {
            let n = [];
            for (let h = 0; h < r.length; h++) {
              let p = r[h];
              p.length >= 2 && p[0] == ":"
                ? n.push(p.substr(1, p.length - 2))
                : n.push(p);
            }
            let c = ":(" + n.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(c, "g");
          }
          async UpdateBroadcastChatModerator(r, n, c) {
            {
              const h = new FormData();
              h.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                h.append("moderatorsteamid", r),
                h.append("bAdd", n ? "1" : "0"),
                h.append("sessionid", (0, R.KC)());
              try {
                await f().post(
                  `${R.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  h,
                ),
                  this.m_mapBroadcastModeratorUsers.set(r, n);
                const p = (0, P.we)(
                  n
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  c,
                );
                this.m_rgChatMessages.push({ type: j.X8.Notification, msg: p });
              } catch {
                const p = (0, P.we)(
                  n
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  c,
                );
                this.m_rgChatMessages.push({ type: j.X8.Error, msg: p });
              }
            }
          }
          async UpdateUserChatBan(r, n, c, h, p, T) {
            const qr = this.m_ulBroadcastSteamID,
              ri = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const di = E.w.Init(Fr);
              di.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: r,
                duration: c * 3600,
                permanent: h,
                undo: T,
              }),
                await Di.AddChatBan(
                  this.m_steamInterface.GetServiceTransport(),
                  di,
                );
            } else {
              const di = new FormData();
              di.append("broadcaststeamid", qr),
                di.append("issuersteamid", ri),
                di.append("chattersteamid", r),
                di.append("bantype", n),
                di.append("duration", c.toString()),
                di.append("perm", h ? "1" : "0"),
                di.append("sessionid", (0, R.KC)());
              try {
                await f().post(
                  `${R.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  di,
                ),
                  n == ur.sW.rx
                    ? delete this.m_mapMutedUsers[r]
                    : (this.m_mapMutedUsers[r] = p);
              } catch {
                console.log("Failed to update mute for " + p);
              }
            }
          }
          async MuteUserForSession(r, n) {
            if (r == this.m_strUserSteamID || this.m_ulBroadcastSteamID == r)
              return;
            let c = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[r]) {
              this.m_mapMutedUsers[r] = n;
              try {
                const h = E.w.Init(ur.hW);
                h.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: r,
                  muted: !0,
                }),
                  await ur.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    h,
                  );
              } catch {
                c &&
                  (this.m_rgChatMessages.push({
                    type: j.X8.Error,
                    msg: (0, P.we)("#BroadcastChat_UserMuteFailed", n),
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
                msg: (0, P.we)("#BroadcastChat_UserMutedLocal", n),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(r, n) {
            if (r == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[r] && delete this.m_mapMutedUsers[r],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                const h = E.w.Init(ur.hW);
                h.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: r,
                  muted: !1,
                }),
                  await ur.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    h,
                  ),
                  this.m_rgChatMessages.push({
                    type: j.X8.Notification,
                    msg: (0, P.we)("#BroadcastChat_UserUnmutedLocal", n),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, P.we)("#BroadcastChat_UserUnmuteFailed", n),
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
                msg: (0, P.we)("#BroadcastChat_UserUnmutedLocal", n),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(r) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (n) => n.steamid !== r,
            );
          }
          async RemoveUserMessagesServer(r, n) {
            if (r != this.m_strUserSteamID)
              try {
                const c = E.w.Init(ur.ku);
                c.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: r }),
                  await ur.DK.RemoveUserChatText(
                    this.m_steamInterface.GetServiceTransport(),
                    c,
                  );
              } catch {
                this.m_rgChatMessages.push({
                  type: j.X8.Error,
                  msg: (0, P.we)("#BroadcastChat_RemoveMessagesFailed", n),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(r) {
            const n = E.w.Init(ur.Mn);
            n.SetBodyFields({
              chat_id: this.m_ulChatID,
              flair: `^${this.m_strFlairGroupID}^:${r}:`,
            }),
              await ur.DK.UpdateChatMessageFlair(
                this.m_steamInterface.GetServiceTransport(),
                n,
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
        Z([cr.sH], $i.prototype, "m_mapChannelModeratorUsers", 2),
          Z([cr.sH], $i.prototype, "m_mapBroadcastModeratorUsers", 2),
          Z([cr.sH], $i.prototype, "m_nRateLimitSeconds", 2),
          Z([cr.sH], $i.prototype, "m_bRateLimited", 2),
          Z([cr.sH], $i.prototype, "m_rgChatMessages", 2),
          Z([cr.sH], $i.prototype, "m_latestAnnouncement", 2),
          Z([Wi.o], $i.prototype, "FetchChatModerators", 1),
          Z([Wi.o], $i.prototype, "RequestLoop", 1),
          Z([Wi.o], $i.prototype, "MuteUserForSession", 1);
        var me = g(18614),
          ye = g(90024),
          Ji = g.n(ye),
          Yi = g(34360),
          ce = g(16412),
          he = g(96197),
          ge = g(22714),
          ze = g(86390),
          je = g(34736),
          ve = g(33543),
          Ti = g.n(ve);
        const pe = () =>
            (0, l.jsx)("div", {
              className: Ti().FriendsListInsetShadowCtn,
              children: (0, l.jsx)("div", {
                className: Ti().FriendListInsetShadowTop,
              }),
            }),
          Oe = () =>
            (0, l.jsx)("div", {
              className: Ti().FriendsListInsetShadowCtn,
              children: (0, l.jsx)("div", {
                className: Ti().FriendListInsetShadowBottom,
              }),
            });
        var Ki = g(36118),
          wi = g(36707),
          ki = g(30096),
          xe = g(63508),
          bi = g.n(xe),
          Ui = g(22950),
          oe = g(29630),
          Fe = g(37656),
          Ie = g(11587),
          Ri = g(53107),
          fe = g(53113),
          De = g(8287),
          Ni = g.n(De);
        function We(w) {
          const { latestAnnouncement: r } = w;
          return r?.type == "giveaway_draw"
            ? (0, l.jsx)(be, { latestWinner: r })
            : null;
        }
        function be(w) {
          const {
              latestWinner: r,
              className: n,
              strActionButton: c,
              strActionClassname: h,
            } = w,
            p = r.winners_info?.length > 0 ? r.winners_info[0].accountid : 0,
            [T, qr] = I.useState(p),
            ri =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            di = (0, fe.L$)(
              `${oe.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            Li = (0, fe.L$)(
              `${oe.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            Xi = (0, Fe.w)(r.giveaway_gid);
          let Ai =
            Xi.bLoadingGiveawayInfo || Xi.closed
              ? null
              : Xi.seconds_until_drawing;
          const Si = p === R.iA.accountid;
          I.useEffect(() => {
            T != p && setTimeout(() => qr(p), 1500);
          }, [p, T]);
          const ie =
            r.winners_info?.length > 0 && r.winners_info[0].persona
              ? r.winners_info[0].persona
              : (0, P.we)("#GA2022_UnknownPersonaName");
          return (0, l.jsx)(Ri.uU, {
            href: ri,
            className: n,
            children: (0, l.jsxs)("div", {
              className: (0, wi.A)({
                [Ni().GiveawayWinnerBox]: !0,
                [Ni().GiveawayWinnerAnnounced]: T === p,
              }),
              children: [
                (0, l.jsx)("div", {
                  className: Ni().GiveawayWinnerBoxLeft,
                  children: (0, l.jsx)("img", {
                    className: Ni().GiveawayWinnerArt,
                    src: di,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: Ni().GiveawayWinnerBoxRight,
                  children: [
                    T !== p &&
                      (0, l.jsx)("div", {
                        className: (0, wi.A)(Ni().GiveawayWinnerText),
                        children: (0, P.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, l.jsx)("br", {}),
                        ),
                      }),
                    T === p &&
                      (0, l.jsx)("div", {
                        className: (0, wi.A)(
                          Ni().GiveawayWinnerText,
                          Ni().GiveawayWinnerAnnounced,
                        ),
                        children: (0, P.PP)(
                          Si
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          ie,
                          (0, l.jsx)("br", {}),
                        ),
                      }),
                    Ai > 0 &&
                      (0, l.jsx)("div", {
                        className: Ni().GiveawayWinnerCountdown,
                        children: (0, P.PP)("#GA2022_Congrats_NextDraw", Ai),
                      }),
                  ],
                }),
                (0, l.jsx)("img", {
                  className: Ni().GiveawayWinnerQuestion,
                  src: Li,
                }),
                !!c &&
                  (0, l.jsx)("div", {
                    className: h,
                    children: Si ? (0, P.we)("#GA2022_YouWonNextSteps") : c,
                  }),
              ],
            }),
          });
        }
        function J(w, r) {
          const [n, c] = (0, e.q3)(() => [
              r?.steamid,
              Ui.es.GetBroadcast(r?.steamid)?.m_ulBroadcastID,
            ]),
            [h, p] = I.useState(null);
          I.useEffect(() => {
            let qr = null;
            return (
              (n || c) &&
                ((qr = ne.Get().GetOrCreateChat(c, n)),
                qr.StartForSteamID(n, c),
                p(qr)),
              () => {
                qr && (qr.Stop(), p(null));
              }
            );
          }, [n, c]);
          const T = (0, e.q3)(() => h?.m_latestAnnouncement || null);
          if (T?.type == "giveaway_draw") {
            const qr = T;
            if (qr.giveaway_gid == w) return qr;
          }
          return null;
        }
        function H(w) {
          const { gidGiveaway: r, stream: n } = w,
            c = J(r, n),
            h = (0, Ie.h3)("GameAwardDrop2022");
          let p = null,
            T = Ni().GiveawayRegisterButton;
          return (
            R.iA.logged_in
              ? h?.registered
                ? ((p = (0, P.we)("#GA2022_AlreadyRegistered")),
                  (T = Ni().GiveawayAlreadyRegistered))
                : (p = (0, P.we)("#GA2022_RegisterToWin"))
              : (p = (0, P.we)("#GA2022_RegisterLoginToWin")),
            c
              ? (0, l.jsx)(be, {
                  latestWinner: c,
                  className: Ni().InViewerBar,
                  strActionButton: p,
                  strActionClassname: T,
                })
              : null
          );
        }
        var Q = g(71421),
          Je = Object.defineProperty,
          He = Object.getOwnPropertyDescriptor,
          Vi = (w, r, n, c) => {
            for (
              var h = c > 1 ? void 0 : c ? He(r, n) : r, p = w.length - 1, T;
              p >= 0;
              p--
            )
              (T = w[p]) && (h = (c ? T(r, n, h) : T(h)) || h);
            return c && h && Je(r, n, h), h;
          };
        const Ae = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          un = null,
          Se = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function qe(w, r, n) {
          return n
            ? "presenter"
            : r.GetBroadcastSteamID() === w
              ? "broadcaster"
              : r.BIsUserBroadcastModerator(w)
                ? "moderator"
                : "";
        }
        const Ge = (w) => {
            const { userType: r, msg: n, presenterInfo: c } = w;
            if (r === "presenter")
              return (0, l.jsx)("span", {
                children: (0, l.jsx)(je.fI, {
                  name: c.name,
                  title: c.title,
                  photo: c.photo,
                  company: c.company,
                  bioString: c.bio,
                  children: (0, l.jsx)("a", {
                    className: (0, wi.A)(
                      bi().MessageName,
                      bi().MessagePresenter,
                    ),
                    href: R.TS.COMMUNITY_BASE_URL + "profiles/" + n.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n.persona_name,
                  }),
                }),
              });
            {
              let h = null;
              return (
                r === "broadcaster"
                  ? (h = bi().MessageBroadcaster)
                  : r === "moderator" && (h = bi().MessageModerator),
                (0, l.jsx)("span", {
                  children: (0, l.jsx)("a", {
                    className: (0, wi.A)(bi().MessageName, h),
                    href: R.TS.COMMUNITY_BASE_URL + "profiles/" + n.steamid,
                    "data-miniprofile": "s" + n.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n.persona_name,
                  }),
                })
              );
            }
          },
          Te = (w) => {
            switch (w.userType) {
              case "presenter":
                return (0, l.jsx)(Q.Gq, {
                  toolTipContent: (0, P.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: bi().RoleFlairContainer,
                    children: (0, l.jsx)(Ki.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, l.jsx)(Q.Gq, {
                  toolTipContent: (0, P.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: bi().RoleFlairContainer,
                    children: (0, l.jsx)(Ki.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, l.jsx)(Q.Gq, {
                  toolTipContent: (0, P.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, l.jsx)("span", {
                    className: bi().RoleFlairContainer,
                    children: (0, l.jsx)(Ki.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let Hi = class extends I.Component {
          constructor(w) {
            super(w), (0, cr.Gn)(this);
          }
          m_chat = null;
          messagesContainer = I.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(w) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== w.steamID ||
                this.props.broadcastID !== w.broadcastID ||
                this.props.broadcastChannelID !== w.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = ne
                .Get()
                .GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID,
                )),
              this.props.broadcastChannelID)
            )
              this.m_chat.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let w = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, w),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(w) {
            return !!w.match(Se);
          }
          AddLinksEmoticons(w, r) {
            let n = Ae;
            r && (n = this.m_chat.GetUserEmoticons());
            let c = w.split(Ae);
            const h = [];
            for (let p = 0; p < c.length; p += 1)
              p % 2 === 1
                ? h.push((0, l.jsx)(he.n, { emoticon: c[p], large: !0 }, p))
                : h.push(c[p]);
            return h;
          }
          HandleScroll(w) {
            const r = this.props.bInvertLayout
              ? w.currentTarget.scrollTop < 6
              : w.currentTarget.scrollTop + w.currentTarget.clientHeight >=
                w.currentTarget.scrollHeight - 6;
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
          OnContextMenu(w, r) {
            if (r.type !== j.X8.Chat) return null;
            const n = [],
              c = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              h = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (R.iA && R.iA.is_support) || c || h
                ? n.push(
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            r.steamid,
                            r.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            12,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            24,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            168,
                            !1,
                            r.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.XP,
                            0,
                            !0,
                            r.persona_name,
                          ),
                        children: (0, P.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, l.jsx)(
                      Yi.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            r.steamid,
                            ur.sW.rx,
                            0,
                            !1,
                            r.persona_name,
                            !0,
                          ),
                        children: (0, P.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(r.steamid)
                  ? n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              r.steamid,
                              r.persona_name,
                            ),
                          children: (0, P.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              r.steamid,
                              r.persona_name,
                            ),
                          children: (0, P.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((R.iA && R.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                r.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(r.steamid)
                  ? n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              r.steamid,
                              !1,
                              r.persona_name,
                            ),
                          children: (0, P.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : n.push(
                      (0, l.jsx)(
                        Yi.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              r.steamid,
                              !0,
                              r.persona_name,
                            ),
                          children: (0, P.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              n.length
                ? (0, Y.lX)(
                    (0, l.jsxs)(Yi.tz, {
                      children: [
                        (0, l.jsxs)("div", {
                          className: bi().SelectedUserNameCtn,
                          children: [
                            (0, P.we)("#BroadcastChat_User"),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("span", {
                              className: bi().SelectedUserName,
                              children: r.persona_name,
                            }),
                          ],
                        }),
                        n,
                      ],
                    }),
                    w,
                  )
                : null
            );
          }
          GetTypeClassName(w) {
            return w.type === j.X8.Notification
              ? bi().MessageNotification
              : w.type === j.X8.Error
                ? bi().MessageError
                : bi().MessageChat;
          }
          FormatMessage(w, r) {
            if (w.type === j.X8.Chat) {
              let n = r ? r.FilterText(w.steamid, w.msg) : w.msg;
              return this.AddLinksEmoticons(n, !1);
            } else return w.msg;
          }
          RenderUserChatLine(w, r, n) {
            let c = n ? n.get(w.steamid) : void 0;
            const h = w.type === j.X8.Chat ? qe(w.steamid, this.m_chat, c) : "";
            return (0, l.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(w),
                onContextMenu: (p) => this.OnContextMenu(p, w),
                children: [
                  w.type === j.X8.Chat && (0, l.jsx)(Te, { userType: h }),
                  w.flair &&
                    (0, l.jsx)("span", {
                      className: bi().FlairContainer,
                      children: this.AddLinksEmoticons(w.flair, !1),
                    }),
                  w.type === j.X8.Chat &&
                    (0, l.jsx)(Ge, { userType: h, msg: w, presenterInfo: c }),
                  w.type === j.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === w.steamid &&
                    (0, l.jsx)("span", {
                      className: `${bi().MessageNotification} ${bi().MessageContents}`,
                      children: ` (${(0, P.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  w.type === j.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(w.steamid) &&
                    (0, l.jsx)("span", {
                      className: `${bi().MessageNotification} ${bi().MessageContents}`,
                      children: ` (${(0, P.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, l.jsxs)("span", {
                    className: `${bi().MessageContents} ${this.AddLinksEmoticons(w.msg, !1).filter((p) => p && typeof p == "string").length ? "" : bi().EmoticonsOnly}`,
                    children: [
                      w.type === j.X8.Chat ? " : " : "",
                      this.FormatMessage(w, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              w.instance_id + "_" + w.client_ts + "_" + r,
            );
          }
          render() {
            const {
                hidden: w,
                bPartnerMemberOnlyChat: r,
                bInvertLayout: n,
                onSignIn: c,
              } = this.props,
              h = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              p = n ? h.reverse() : h,
              T = this.m_chat
                ? me.l.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              qr = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, l.jsxs)("div", {
              className: (0, wi.A)(bi().ChatPanel, "ChatPanel"),
              style: w ? { display: "none" } : void 0,
              children: [
                (0, l.jsx)(We, { latestAnnouncement: qr }),
                n &&
                  !!this.m_chat &&
                  (0, l.jsx)(ke, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                    onSignIn: c,
                  }),
                (0, l.jsx)(pe, {}),
                (0, l.jsx)("div", {
                  className: (0, wi.A)(
                    `${bi().ChatMessages} ${Ji().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: p.map((ri, di) =>
                    this.RenderUserChatLine(ri, di, T),
                  ),
                }),
                (0, l.jsx)(Oe, {}),
                !n &&
                  !!this.m_chat &&
                  (0, l.jsx)(ke, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: r,
                    onSignIn: c,
                  }),
              ],
            });
          }
        };
        Vi([cr.sH], Hi.prototype, "m_chat", 2),
          Vi([ki.oI], Hi.prototype, "StartChat", 1),
          Vi([ki.oI], Hi.prototype, "HandleScroll", 1),
          Vi([ki.oI], Hi.prototype, "OnContextMenu", 1),
          Vi([ki.oI], Hi.prototype, "RenderUserChatLine", 1),
          (Hi = Vi([u.PA], Hi));
        function ke(w) {
          const {
            oChat: r,
            emoticonStore: n,
            bPartnerMemberOnlyChat: c,
            onSignIn: h,
          } = w;
          return c && (!R.iA?.logged_in || !R.iA?.is_partner_member)
            ? (0, l.jsx)(rt, {})
            : R.iA?.logged_in
              ? (0, l.jsx)(Re, { oChat: r, emoticonStore: n })
              : h
                ? (0, l.jsx)(_e, { onSignIn: h })
                : null;
        }
        function Re(w) {
          const { oChat: r, emoticonStore: n } = w,
            [c, h] = I.useState(""),
            p = I.useRef(void 0),
            T = (0, e.q3)(() => r.m_bRateLimited),
            qr = I.useCallback(
              (Ai) => {
                !Ai.shiftKey &&
                  Ai.charCode === 13 &&
                  (r.m_bRateLimited || (r.SendMessage(c), h("")),
                  Ai.preventDefault());
              },
              [r, c],
            ),
            ri = I.useCallback(
              (Ai, Si = !1) => {
                h(c + `\u02D0${Ai}\u02D0`), p?.current && p.current.focus();
              },
              [c, p],
            ),
            di = () => {
              r.SendMessage(c), h("");
            };
          let Li = T || c.trim().length == 0,
            Xi = (0, wi.A)(
              Ji().chatSubmitButton,
              c.length == 0 && Ji().disabled,
            );
          return (0, l.jsx)("div", {
            className: (0, wi.A)(bi().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, l.jsxs)("div", {
              className: (0, wi.A)(bi().ChatEntry, "ChatEntry"),
              children: [
                (0, l.jsxs)("form", {
                  className: `${Ji().chatEntryControls}`,
                  children: [
                    (0, l.jsx)("textarea", {
                      className: Ji().chatTextarea,
                      placeholder: (0, P.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: qr,
                      onChange: (Ai) => h(Ai.target.value),
                      value: c,
                      ref: p,
                    }),
                    T &&
                      (0, l.jsx)(Ce, {
                        nSeconds: r.m_nRateLimitSeconds,
                        bRateLimited: r.m_bRateLimited,
                      }),
                    (0, l.jsx)("button", {
                      className: Xi,
                      title: (0, P.we)("#ChatEntryButton_Submit"),
                      disabled: Li,
                      onClick: di,
                      children: (0, l.jsx)(Ki.XTb, {}),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  style: { height: "50px" },
                  className: `${Ji().chatEntryActionsContainer}`,
                  children: (0, l.jsxs)("div", {
                    className: Ji().chatEntryActionsGroup,
                    children: [
                      (0, l.jsx)(ge.A, {
                        disabled: !1,
                        OnEmoticonSelected: ri,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: n,
                      }),
                      (0, l.jsx)(Ve, { ...w, textInputRef: p }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Ve(w) {
          const { oChat: r, emoticonStore: n, textInputRef: c } = w;
          return r.m_strFlairGroupID &&
            n.flair_list &&
            n.GetFlairListByGroupID(r.m_strFlairGroupID)?.length
            ? (0, l.jsx)(ge.A, {
                disabled: !1,
                OnEmoticonSelected: (h) => {
                  r.UpdateChatMessageFlair(h), c?.current && c.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
                strFlairGroupID: r.m_strFlairGroupID,
                title: (0, P.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, l.jsx)(Ki.P7r, {}),
              })
            : null;
        }
        class Ce extends I.Component {
          render() {
            return (0, l.jsx)("div", {
              className: bi().TimedProgressBarContainer,
              children: (0, l.jsxs)("div", {
                className: bi().wrapper,
                children: [
                  (0, l.jsx)("div", {
                    className: `${bi().spinner} ${bi().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: `${bi().filler} ${bi().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: bi().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function _e(w) {
          return (0, l.jsx)("div", {
            className: bi().Description,
            children: (0, l.jsx)(ce.$n, {
              onClick: w.onSignIn,
              className: (0, wi.A)(bi().SignInButton),
              children: (0, P.we)("#BroadcastChat_Login"),
            }),
          });
        }
        function rt(w) {
          return (0, l.jsxs)("div", {
            className: bi().Description,
            children: [
              (0, l.jsx)("div", {
                className: bi().LogInPrompt,
                children: (0, P.we)("#Broadcast_PartnerChat_Login"),
              }),
              !R.iA.logged_in &&
                !R.TS.IN_STEAMUI &&
                (0, l.jsx)(ce.$n, {
                  onClick: ze.vg,
                  className: (0, wi.A)(bi().SignInButton),
                  children: (0, P.we)("#Login_SignIn"),
                }),
            ],
          });
        }
        var it = g(7132),
          et = g(83482),
          tt = g(48156),
          nt = g(84676),
          we = g(76532),
          de = g(95414),
          st = g(4705),
          lt = g(72865),
          at = g(85599),
          ut = g(43087),
          Be = g.n(ut),
          Ee = g(29522),
          Ci = g(40358),
          mt = g(47875),
          Ne = g(21721),
          ct = g(3348);
        const gt = (0, u.PA)((w) => {
          const { appid: r } = w,
            n = (0, lt.n9)(),
            c = (0, I.useRef)({ include_assets: !0, include_release: !0 }),
            h = (0, Ee.$5)(r),
            { data: p } = (0, Ci.J$)(h),
            { data: T } = (0, Ci.lv)(h),
            { data: qr } = (0, Ci.by)(h),
            [ri, di] = (0, nt.t7)(r, c.current);
          let Li = (0, wi.A)(
              Be().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            Xi = Be().StoreSaleWidgetImage_mini,
            Ai = Be().StoreSaleImage_mini;
          if (p == null)
            return (0, l.jsx)("div", {
              className: Li,
              children: (0, l.jsx)(at.t, { size: "medium" }),
            });
          if (p == null || !p.name)
            return (0, l.jsx)("div", {
              className: we.StoreSaleWidgetEmptyContainer,
            });
          const Si = p.type != tt.uE.gQ,
            ie = (0, et.wJ)((0, mt._)(p), n);
          return (0, l.jsxs)("div", {
            className: Li,
            children: [
              (0, l.jsx)("a", {
                href: ie,
                target: R.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, l.jsx)(de.j, {
                  id: h,
                  children: (0, l.jsx)("div", {
                    className: Xi,
                    children:
                      T &&
                      (0, l.jsx)("img", {
                        className: Ai,
                        src: (0, Ne.b0)(T, "small_capsule"),
                        alt: p.name,
                      }),
                  }),
                }),
              }),
              (0, l.jsxs)("div", {
                className: we.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, l.jsx)("a", {
                    href: ie,
                    target: R.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, l.jsx)(de.j, {
                      id: h,
                      children: (0, l.jsx)("div", {
                        className: (0, wi.A)(
                          we.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: p.name,
                      }),
                    }),
                  }),
                  qr &&
                    (0, l.jsx)("div", {
                      className: we.StoreSaleWidgetRelease,
                      children: (0, ct.CC)(qr),
                    }),
                  !!Si && (0, l.jsx)(st.w, { id: h, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        var Pe = g(99412),
          _i = g(46477),
          re = g(61639),
          Ue = g(55051),
          Fi = g(25317),
          Ke = g(10142),
          ot = g(23627),
          ft = g(39239),
          bt = g(90405),
          Xe = g(19730),
          Ye = g(60480),
          wt = g(53120),
          er = g.n(wt);
        const dt = (0, u.PA)((w) => {
          const { event: r } = w,
            n = r.clanSteamID.GetAccountID(),
            c = !r || !r.jsondata || !r.jsondata.broadcast_item_drops_enabled,
            h = (0, I.useRef)(null),
            [p, T] = (0, I.useState)(
              r ? Ye.pF.GetCreatorHome(r.clanSteamID) : null,
            );
          if (
            ((0, I.useEffect)(() => {
              const ri = f().CancelToken.source();
              return (
                (h.current = ri.cancel),
                (async () => {
                  const Li = d.b.InitFromClanID(n),
                    Xi = await Ye.pF.LoadCreatorHome(Li, !1, ri);
                  ri.token.reason || T(Xi);
                })(),
                () => {
                  h.current && h.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [n]),
            c || !p || !p.BIsLoaded())
          )
            return null;
          const qr =
            R.TS.COMMUNITY_BASE_URL +
            "gid/" +
            r.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            r.jsondata.broadcast_item_drops_details_event_gid;
          return (0, l.jsx)("div", {
            className: er().item_drop_ctn,
            children: (0, l.jsxs)("div", {
              children: [
                (0, P.we)(
                  p.GetName().length > 0
                    ? r.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : r.jsondata.broadcast_item_drops_min_watch_time_minutes %
                          60 ==
                        0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  r.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                    ? r.jsondata.broadcast_item_drops_min_watch_time_minutes /
                        60
                    : r.jsondata.broadcast_item_drops_min_watch_time_minutes,
                  p.GetName(),
                ),
                !!r.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, l.jsx)("a", {
                    href: qr,
                    target: R.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, P.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var Mt = g(95695),
          qi = g.n(Mt),
          yt = g(96715),
          ht = g(10886),
          zt = g(19654),
          jt = g(3209),
          vt = g(96538),
          pt = g(14256),
          Qi = g.n(pt);
        function Ot(w) {
          const { steamid: r, closeModal: n } = w;
          return (0, l.jsxs)(vt.o0, {
            strDescription: "",
            strTitle: (0, P.we)("#Button_Share"),
            onCancel: n,
            onOK: n,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, l.jsx)(xt, { steamid: r }),
              (0, l.jsx)(Ft, { steamid: r }),
            ],
          });
        }
        function xt(w) {
          const { steamid: r } = w,
            n = It(r);
          return (0, l.jsxs)("div", {
            className: (0, wi.A)(
              qi().FlexRowContainer,
              Qi().share_controls_ctn,
            ),
            children: [
              (0, l.jsx)(Q.he, {
                toolTipContent: (0, P.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, l.jsx)(Ri.uU, {
                  href: n.strFacebookUrl,
                  className: Qi().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, wi.A)(qi().Button),
                    src: ht.A,
                  }),
                }),
              }),
              (0, l.jsx)(Q.he, {
                toolTipContent: (0, P.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, l.jsx)(Ri.uU, {
                  href: n.strTwitterUrl,
                  className: Qi().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, wi.A)(qi().Button),
                    src: jt.A,
                  }),
                }),
              }),
              (0, l.jsx)(Q.he, {
                toolTipContent: (0, P.we)("#EventDisplay_Share_OnReddit"),
                children: (0, l.jsx)(Ri.uU, {
                  href: n.strRedditUrl,
                  className: Qi().ShareBtn,
                  children: (0, l.jsx)("img", {
                    className: (0, wi.A)(qi().Button),
                    src: zt.A,
                  }),
                }),
              }),
            ],
          });
        }
        function Ft(w) {
          const { steamid: r } = w,
            n = I.createRef(),
            [c, h] = I.useState(""),
            p = I.createRef(),
            T = I.useCallback(
              (ri) => {
                n.current &&
                  n.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(n.current.value)
                    .then((di) => {
                      h((0, P.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((di) => {
                      h(
                        (0, P.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", di);
                    });
              },
              [n],
            ),
            qr = R.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + r;
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsxs)("div", {
                className: (0, wi.A)(qi().FlexRowContainer, Qi().linkField),
                onClick: T,
                children: [
                  (0, l.jsx)("span", {
                    className: Qi().LinkInputLabel,
                    children: (0, P.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, l.jsx)("textarea", {
                    className: Qi().LinkInput,
                    ref: n,
                    value: qr,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, l.jsx)(Q.he, {
                      toolTipContent: (0, P.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, l.jsx)("div", {
                        className: (0, wi.A)(
                          qi().Button,
                          qi().Icon,
                          Qi().LinkButton,
                        ),
                        children: (0, l.jsx)("img", {
                          className: Qi().ClipboardIcon,
                          src: yt.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, l.jsx)("div", {
                ref: p,
                className: Qi().ClipboardText,
                children: c,
              }),
            ],
          });
        }
        function It(w) {
          const r = R.TS.COMMUNITY_BASE_URL + "broadcast/share/" + w;
          return {
            strFacebookUrl: r + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: r + "?site=twitter",
            strRedditUrl: r + "?site=reddit",
          };
        }
        var Dt = g(82734),
          Wt = g(88003),
          Bt = g(37589),
          Et = g(34032),
          Pt = Object.defineProperty,
          Ut = Object.getOwnPropertyDescriptor,
          Zi = (w, r, n, c) => {
            for (
              var h = c > 1 ? void 0 : c ? Ut(r, n) : r, p = w.length - 1, T;
              p >= 0;
              p--
            )
              (T = w[p]) && (h = (c ? T(r, n, h) : T(h)) || h);
            return c && h && Pt(r, n, h), h;
          };
        const Lt = {
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
        function At() {
          const w = (0, R.Qn)();
          return !(0, R.Y2)() && !w;
        }
        function kt(w) {
          return At() ? (0, l.jsx)(Gi, { ...w }) : null;
        }
        let Gi = class extends I.Component {
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
              !this.props.event.BUsesContentHubForItemSource()
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
            let w = Fi.j.Get().GetPlayReadyStream(this.props);
            const r = this.state.bExpanded,
              n = Ui.es.GetOrCreateBroadcastInfo(w.steamid).m_nAppID;
            (0, Fi.U7)(n, r ? re.Mc.U6 : re.Mc.B_, w.snr),
              r && (0, _i.D)() && (0, _i.D)().AddEvent(Ue.Xm.d),
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
          async onStreamSelect(w) {
            this.setState({ bStartMuted: !1 }),
              Fi.j.Get().GetPlayReadyStream(this.props).accountid !=
                w.accountid &&
                (await Fi.j.Get().AttemptToPlayStream(this.props, w));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const w = Fi.j
              .Get()
              .GetStreams(this.props)
              .filter(
                (r) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(r),
              );
            await Fi.j.Get().PlayFromAvailableStreams(this.props, w, !0);
          }
          ConstructSidePanels(w, r) {
            let n = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return n;
            const c = Fi.j.Get().GetConcurrentStreams(this.props) > 1;
            let h = Ui.es.GetOrCreateBroadcastInfo(w.steamid).m_nAppID,
              p = (0, l.jsx)($e, { ImgUrl: w.right_panel }, "right" + h),
              T = (0, l.jsx)($e, { ImgUrl: w.left_panel }, "left" + h);
            const qr = 11;
            if (h < qr) {
              const ri = me.l.GetAppIDListForBroadcasterSteamID(w.steamid);
              ri && ri.length === 1 && (h = ri[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                h >= qr &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((p = (0, l.jsx)(gt, { appid: h }, "mini" + w.accountid)),
                (n.bRightPanelArtworkOrEmpty = !1)),
              c && !r
                ? ((n.leftPanel = (0, l.jsx)(
                    Xt,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: w,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + h,
                  )),
                  (n.rightPanel = p))
                : r
                  ? ((n.leftPanel = (0, l.jsx)("div", {})),
                    (n.rightPanel = (0, l.jsx)(Zt, {
                      stream: w,
                      orientation: "rightside",
                    })),
                    (n.bRightPanelArtworkOrEmpty = !1))
                  : ((n.leftPanel = T), (n.rightPanel = p)),
              n
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              (0, _i.D)() && (0, _i.D)().AddEvent(Ue.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let w = Fi.j.Get().GetPlayReadyStream(this.props);
            if (w) {
              this.MarkBroadcastSeen();
              let r = Fi.j.Get().GetChatVisibility() === "show";
              const {
                event: n,
                language: c,
                fnRenderBroadcastContext: h,
              } = this.props;
              n &&
                (w = {
                  ...w,
                  left_panel: n.GetImageURL(
                    "broadcast_left",
                    c || (0, Pe.sfN)(R.TS.LANGUAGE),
                  ),
                  right_panel: n.GetImageURL(
                    "broadcast_right",
                    c || (0, Pe.sfN)(R.TS.LANGUAGE),
                  ),
                  store_title: n.GetBroadcastTitle(
                    c || (0, Pe.sfN)(R.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
                });
              let p = this.ConstructSidePanels(w, r),
                T = w.store_title ? w.store_title : w.title,
                qr = Fi.j.Get().GetConcurrentStreams(this.props) > 1;
              const ri = () => {
                w.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, l.jsx)(I.Fragment, {
                children: (0, l.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, l.jsxs)("div", {
                      className: (0, wi.A)({
                        [er().bordered_container]: !0,
                        [er().Event]: !!n,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, l.jsxs)("div", {
                          className: (0, wi.A)(
                            er().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, l.jsx)(ot.K, {}),
                            (0, l.jsx)("div", {
                              className: er().streamTitle,
                              children: T,
                            }),
                            (0, l.jsxs)("div", {
                              className: er().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, l.jsx)(Q.he, {
                                    toolTipContent: (0, P.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, l.jsx)("div", {
                                      className: er().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${R.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, l.jsx)(Q.he, {
                                  toolTipContent: (0, P.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, l.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? er().bordered_corner_expanded
                                      : er().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!w.gamedata_subtitle &&
                              (0, l.jsx)("div", {
                                className: er().bordered_subtitle,
                                children: w.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, l.jsxs)("div", {
                            className: (0, wi.A)({
                              [er().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: qr,
                              broadcast_right_panel_simple:
                                p.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: r,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, l.jsx)("div", {
                                className: er().LeftPanelCtn,
                                children: p.leftPanel,
                              }),
                              (0, l.jsx)(Me, {
                                stream: w,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: h,
                                fnOnVideoEnd: ri,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, l.jsx)("div", {
                                className: er().RightPanelCtn,
                                children: p.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, l.jsx)(se, {
                                  stream: w,
                                  bMultistream: qr,
                                  chatAnnouncementGivewayGID: p.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!(
                      n &&
                      n.jsondata &&
                      n.jsondata.broadcast_item_drops_enabled
                    ) && (0, l.jsx)(dt, { event: n }),
                    (0, l.jsx)("div", { className: er().clear_div }),
                  ],
                }),
              });
            } else
              return (0, l.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        Zi([ki.oI], Gi.prototype, "ToggleBroadcastExpandShrink", 1),
          Zi([ki.oI], Gi.prototype, "OnShrinkTransitionEnd", 1),
          Zi([ki.oI], Gi.prototype, "onStreamSelect", 1),
          Zi([ki.oI], Gi.prototype, "PlayNextNonVOD", 1),
          (Gi = Zi([u.PA], Gi));
        class Me extends I.Component {
          m_iVideoContainerRef = I.createRef();
          constructor(r) {
            super(r),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const r = Ui.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Fi.U7)(r, re.Mc.n6, this.props.stream.snr),
              (0, _i.D)() && (0, _i.D)().AddEvent(Ue.Xm.ok),
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
              className: er().wrapper,
              children: (0, l.jsx)(Bt.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (r) => {
                  r.isIntersecting || this.OnLeave();
                },
                className: (0, wi.A)({
                  [er().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [er().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, l.jsxs)("div", {
                  className: this.state.bPopout
                    ? er().broadcast_floating
                    : er().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, l.jsx)(Ze, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, l.jsx)("div", {
                      className: er().BroadcastPlayerContainer,
                      children: (0, l.jsx)(it.default, {
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
        Zi([ki.oI], Me.prototype, "CloseBroadcastPopup", 1),
          Zi([ki.oI], Me.prototype, "OnEnter", 1),
          Zi([ki.oI], Me.prototype, "OnLeave", 1);
        function Nt(w) {
          const { stream: r } = w,
            [n] = (0, e.q3)(() => [r.steamid]),
            c = Ui.es.GetOrCreateBroadcastInfo(n).m_nAppID,
            h = Lt.list.find(
              (p) =>
                p.appid == c &&
                (!p.broadcasterAccountID ||
                  p.broadcasterAccountID == r.accountid),
            );
          if (h) {
            let p = h.url;
            return (
              (R.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (p = "steam://openurl/" + p),
              (0, l.jsx)("a", {
                href: p,
                children: (0, P.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const p = R.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + n;
            return (0, l.jsx)(Q.he, {
              toolTipContent: (0, P.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, l.jsx)("a", {
                href: p,
                className: er().external_link,
                children: (0, l.jsx)(Ki.GrD, {}),
              }),
            });
          }
        }
        let se = class extends I.Component {
          OnToggleChat(w) {
            w.preventDefault();
            const r = Ui.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Fi.U7)(
              r,
              Fi.j.Get().GetChatVisibility() === "show" ? re.Mc.kz : re.Mc.bW,
              this.props.stream.snr,
            ),
              Fi.j.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const w = Ui.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, Fi.U7)(w, re.Mc.Is, this.props.stream.snr);
          }
          render() {
            const w = Fi.j.Get().GetChatVisibility() != "remove",
              r = Fi.j.Get().GetChatVisibility() === "hide",
              n = !this.props.stream.nAppIDVOD,
              c = n;
            let h = Number.parseInt(
              "" +
                Ui.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, l.jsxs)("div", {
              className: (0, wi.A)(er().viewer_bar, "viewer_bar"),
              children: [
                (0, l.jsxs)("div", {
                  className: (0, wi.A)(er().viewer_count, "viewer_count"),
                  children: [(0, l.jsx)(Ki.y_e, {}), (0, Xe.Dq)(h)],
                }),
                (0, l.jsxs)("div", {
                  className: (0, wi.A)(er().viewer_links, "viewer_links"),
                  children: [
                    !!(w && !r && this.props.bMultistream) &&
                      (0, l.jsx)("div", {
                        className: er().chat_link,
                        children: (0, l.jsx)("a", {
                          href: "#",
                          className: er().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, P.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    w &&
                      (0, l.jsxs)("div", {
                        className: er().chat_link,
                        children: [
                          (0, l.jsx)(Ki.ROZ, {}),
                          (0, l.jsx)("a", {
                            href: "#",
                            className: er().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, P.we)(
                              r
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    c &&
                      (0, l.jsxs)("div", {
                        className: er().chat_link,
                        children: [
                          (0, l.jsx)(Ki.SYj, {}),
                          (0, l.jsx)("a", {
                            href: "#",
                            className: er().ChatToggle,
                            onClick: (p) =>
                              (0, Wt.pg)(
                                (0, l.jsx)(Ot, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, Dt.uX)(p),
                              ),
                            children: (0, P.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, l.jsx)(Q.he, {
                      toolTipContent: (0, P.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, l.jsx)("a", {
                        href:
                          R.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: R.TS.IN_CLIENT ? void 0 : "_blank",
                        className: er().settings_link,
                        children: (0, l.jsx)(Ki.wB_, {}),
                      }),
                    }),
                    n && (0, l.jsx)(Nt, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, l.jsx)(H, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        Zi([ki.oI], se.prototype, "OnToggleChat", 1),
          Zi([ki.oI], se.prototype, "onWatchBroadcastPage", 1),
          (se = Zi([u.PA], se));
        class $e extends I.Component {
          render() {
            let r = this.props.ImgUrl;
            return (0, l.jsxs)("div", {
              className: er().SidePanelBackground,
              children: [
                r &&
                  (0, l.jsx)("img", {
                    className: er().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !r && (0, l.jsx)("div", { className: er().side_panels }),
              ],
            });
          }
        }
        const Ze = (0, u.PA)((w) => {
          const { steamIDBroadcast: r } = w;
          let n = Ui.es.GetOrCreateBroadcastInfo(r).m_nAppID;
          n = n != Ui.fO ? n : 0;
          const c = (0, Ee.$5)(n),
            { data: h } = (0, Ci.J$)(c);
          return (0, l.jsxs)("div", {
            className: [er().PopOutVideoTitleBar, er().NoSeslect].join(" "),
            children: [
              h
                ? (0, l.jsx)(de.u, {
                    id: c,
                    className: er().PopOutVideoTitleText,
                    children: (0, P.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, l.jsx)("div", {
                    className: er().PopOutVideoTitleText,
                    children: (0, P.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, l.jsx)(Q.he, {
                toolTipContent: (0, P.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, l.jsx)("button", {
                  className: er().PopOutVideoCloseButton,
                  onClick: w.OnPreventPopup,
                  children: (0, l.jsx)(Ki.X, {}),
                }),
              }),
            ],
          });
        });
        function Kt(w, r) {
          const n = Ui.es.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
            c = Ke.A.Get().GetApp(n),
            h = w && c?.GetAssets()?.GetHeaderURL();
          return parseInt(
            h
              ? er().strStreamIconCapsuleArtHeight
              : er().strStreamIconScreenshotArtHeight,
          );
        }
        function Xt(w) {
          const {
              curStream: r,
              onStreamSelect: n,
              fnFilterStreams: c,
              bShowCapsuleArt: h,
              broadcastEmbedContext: p,
            } = w,
            T = (0, I.useRef)(void 0),
            qr = (0, I.useMemo)(() => {
              const ri = Fi.j
                .Get()
                .GetStreams(p)
                .filter((di) => !c || c(di));
              return (0, Fi.MU)(ri), ri;
            }, [p, c]);
          return (
            (0, I.useEffect)(() => {
              if (T && T.current) {
                const ri = qr
                  .map(
                    (di) => Ui.es.GetOrCreateBroadcastInfo(di.steamid).m_nAppID,
                  )
                  .filter(Boolean);
                Ke.A.Get()
                  .QueueMultipleAppRequests(ri, { include_assets: !0 })
                  .then(() => {
                    if (T.current) {
                      let di = 0;
                      for (const Li of qr) {
                        if (r.accountid == Li.accountid) break;
                        di += Kt(h, Li);
                      }
                      T.current.scrollTop = di;
                    }
                  });
              }
            }, [qr, h, r.accountid, T]),
            (0, l.jsx)("div", {
              ref: T,
              className: (0, wi.A)({
                [er().side_panels]: !0,
                side_panels: !0,
                [er().multistream]: !0,
                [er().scrollingstreams]: qr.length > 3,
              }),
              children: (0, l.jsx)("div", {
                className: er().MultiStreamCtn,
                children: qr.map((ri) =>
                  (0, l.jsx)(
                    Yt,
                    {
                      stream: ri,
                      bSelected: r.accountid == ri.accountid,
                      onStreamSelect: n,
                      bShowCapsuleArt: h,
                    },
                    ri.accountid ?? ri.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function Yt(w) {
          const {
            onStreamSelect: r,
            bSelected: n,
            stream: c,
            bShowCapsuleArt: h,
          } = w;
          let p = (0, e.q3)(
            () => Ui.es.GetOrCreateBroadcastInfo(c.steamid).m_nAppID,
          );
          p = p != Ui.fO ? p : 0;
          const T = (0, Ee.$5)(p),
            { data: qr } = (0, Ci.J$)(T),
            { data: ri } = (0, Ci.lv)(T);
          if (!(0, Fi.fn)(c)) return null;
          const di = h && ri && (0, Ne.b0)(ri, "header"),
            Li = Number.parseInt("" + c.viewer_count),
            Xi = !Number.isNaN(Li),
            Ai = !!c.nAppIDVOD && qr?.name;
          return (0, l.jsxs)("div", {
            className: (0, wi.A)({
              [er().stream_icon_and_viewer_container]: !0,
              [er().stream_featured]:
                c.current_selection_priority == Et.mY.k_eFeatured,
              [er().display_capsule_art]: !!di,
            }),
            children: [
              (0, l.jsx)(de.j, {
                id: T,
                hoverClassName: er().StreamCapsule,
                children: (0, l.jsx)(bt.K, {
                  className: (0, wi.A)(
                    er().stream_icon_container,
                    n && er().stream_selected,
                  ),
                  onClick: () => r && r(c),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, l.jsx)($t, {
                    strThumbnail: c.thumbnail_http_address,
                    bSelected: n,
                    strCapsuleArtURL: di,
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: (0, wi.A)(er().viewer_count, !Xi && er().vod_title),
                children: Xi
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(Ki.y_e, {}),
                        (0, l.jsx)("div", {
                          className: er().ViewerNum,
                          children: (0, Xe.Dq)(Li),
                        }),
                      ],
                    })
                  : Ai,
              }),
            ],
          });
        }
        function $t(w) {
          const { strCapsuleArtURL: r, strThumbnail: n, bSelected: c } = w,
            h = c ? er().stream_icon_selected : er().stream_icon;
          if (r) {
            const p = [r];
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("img", {
                  className: (0, wi.A)(h, er().stream_icon_hide_on_hover),
                  src: r,
                }),
                (0, l.jsx)(ft.o, {
                  className: (0, wi.A)(h, er().stream_icon_show_on_hover),
                  srcs: p,
                }),
              ],
            });
          } else return (0, l.jsx)("img", { className: h, src: n });
        }
        function Zt(w) {
          const { stream: r, orientation: n } = w,
            c = n == "below",
            [h, p] = (0, e.q3)(() => [
              Ui.es.GetBroadcast(r.steamid),
              Ui.es.GetBroadcast(r.steamid)?.m_ulBroadcastID,
            ]),
            T = (0, e.q3)(() => r.steamid);
          return h
            ? (0, l.jsx)("div", {
                className: (0, wi.A)({
                  [er().chat_below_container]: c,
                  [er().chat_rightside_container]: !c,
                  [er().store_chat_ctn]: !0,
                }),
                children: (0, l.jsx)("div", {
                  className: er().ChatContainer,
                  children: (0, l.jsx)(Hi, {
                    emoticonStore: Fi.MX,
                    watchLocation: ur.nn.fe,
                    steamID: T,
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
            BroadcastDetails: () => Ir,
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
          Y = g(22950),
          ur = g(10142),
          j = g(30096),
          gr = g(8323),
          E = Object.defineProperty,
          yi = Object.getOwnPropertyDescriptor,
          Gr = (a, b, y, z) => {
            for (
              var O = z > 1 ? void 0 : z ? yi(b, y) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, y, O) : F(O)) || O);
            return z && O && E(b, y, O), O;
          };
        class ii extends u.Component {
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
              y = this.props.elementRef,
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
              O.drawImage(y, 0, 0, x * b[0], F * b[1]),
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
        Gr([j.oI], ii.prototype, "BindCanvasRef", 1),
          Gr([j.oI], ii.prototype, "updateCanvas", 1);
        var rr = g(34360),
          d = g(16569),
          o = g(90740),
          m = g(36707);
        const t = 500;
        class or extends u.Component {
          render() {
            let {
              keyExtractor: b,
              style: y,
              duration: z = t,
              className: O,
              children: x,
              childRef: F,
              ...S
            } = this.props;
            const Ii = { ...(y || {}), transitionDuration: `${z / 1e3}s` };
            return (0, l.jsx)(d.A, {
              ...S,
              className: (0, m.A)("crossfade", O),
              children: (0, l.jsx)(
                o.A,
                {
                  nodeRef: F,
                  classNames: "crossfade-anim",
                  timeout: z,
                  style: Ii,
                  children: x,
                },
                b(),
              ),
            });
          }
        }
        function L(a) {
          const { src: b, ...y } = a,
            z = { backgroundImage: `url(${b})` },
            O = u.useRef(null);
          return (0, l.jsx)(or, {
            style: z,
            keyExtractor: () => b,
            childRef: O,
            ...y,
            children: (0, l.jsx)("div", { ref: O, className: "crossfade-img" }),
          });
        }
        var v = g(61431),
          U = g(79590),
          K = g(79167),
          N = g(36118),
          sr = g(53107),
          fr = g(82734),
          A = g(18210),
          Bi = g(19730),
          ti = g(13854),
          k = g(3166),
          B = g(6600),
          tr = g(48937),
          Mr = g(15527),
          D = g.n(Mr),
          $ = g(85599),
          nr = Object.defineProperty,
          zr = Object.getOwnPropertyDescriptor,
          jr = (a, b, y, z) => {
            for (
              var O = z > 1 ? void 0 : z ? zr(b, y) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, y, O) : F(O)) || O);
            return z && O && nr(b, y, O), O;
          };
        function vr() {
          return (0, l.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, A.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const pr = (0, f.PA)((a) => {
          let b = a.video;
          if (b && (b.IsBroadcastClip() || b.IsBroadcastVOD())) return null;
          let y = Y.fK.Loading,
            z = "";
          if (b) {
            (y = b.GetBroadcastState()), (z = b.GetBroadcastStateDescription());
            let x = b.IsBuffering();
            y == Y.fK.Unlocking && ((y = Y.fK.Loading), (z = "")),
              y == Y.fK.Ready && x && ((y = Y.fK.Loading), (z = ""));
          }
          if (
            (b && y != Y.fK.Error && b.GetUserInputNeeded()) ||
            y == Y.fK.Ready
          )
            return null;
          let O = y == Y.fK.Loading;
          return (0, l.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              O && (0, l.jsx)($.t, {}),
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
            Y.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, l.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, l.jsx)(N.jGG, {}),
                (0, l.jsx)("span", {
                  children: (0, A.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        jr([j.oI], si.prototype, "OnClick", 1);
        var Or = Object.defineProperty,
          xi = Object.getOwnPropertyDescriptor,
          X = (a, b, y, z) => {
            for (
              var O = z > 1 ? void 0 : z ? xi(b, y) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, y, O) : F(O)) || O);
            return z && O && Or(b, y, O), O;
          };
        let ei = class extends u.Component {
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
                  children: (0, l.jsx)(N.sED, {}),
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, l.jsx)(br, { stats: a }),
              ],
            });
          }
        };
        X([j.oI], ei.prototype, "HideStats", 1), (ei = X([f.PA], ei));
        let br = class extends u.Component {
          constructor(a) {
            super(a);
          }
          createBufferedRange(a) {
            let b = this.props.stats,
              y = [],
              z = a ? "vidbuf" : "audbuf",
              O = a
                ? b.GetNumBufferedVideoRanges()
                : b.GetNumBufferedAudioRanges();
            if (O > 0)
              for (let x = 0; x < O; ++x) {
                let F = (0, A.we)(
                    a
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    x,
                  ),
                  S = a
                    ? b.GetBufferedVideoSegmentForDisplay(x)
                    : b.GetBufferedAudioSegmentForDisplay(x);
                y.push(
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
              let x = (0, A.we)(
                a
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              y.push((0, l.jsx)("div", { children: x }, z + "none"));
            }
            return y;
          }
          render() {
            let a = this.props.stats;
            return (0, l.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BytesReceived"),
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
                      (0, A.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, l.jsx)("span", {
                        className: "videoStatsValue",
                        children: a.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, l.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [a.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_AudioBuffered"),
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
                    (0, A.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, l.jsx)("span", {
                      className: "videoStatsValue",
                      children: a.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, A.we)("#DASHPlayerStats_CurrentFPS"),
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
        br = X([f.PA], br);
        var ni = g(82581),
          wr = Object.defineProperty,
          oi = Object.getOwnPropertyDescriptor,
          q = (a, b, y, z) => {
            for (
              var O = z > 1 ? void 0 : z ? oi(b, y) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, y, O) : F(O)) || O);
            return z && O && wr(b, y, O), O;
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
              (0, fr.id)(this.m_elSettingsPanel, b.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, fr.id)(this.m_elSubtitlesPanel.current, b.target) ||
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
              y = !1;
            const { video: z, actions: O } = this.props;
            let x,
              F = [],
              S = 0,
              Ii = (0, l.jsx)(
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
                (F = x.map((ir) =>
                  (0, l.jsx)(
                    ni.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(ir),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: ir.selected,
                      children: ir.displayName,
                    },
                    ir.id,
                  ),
                )),
                F.push(Ii),
                F.push(
                  (0, l.jsxs)(
                    ni.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, A.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (S = 0 - (F.length * 21 + ar))),
              this.state.bSubtitlesOpen)
            ) {
              (y = !0),
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
                      children: (0, A.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let ir = 0;
                ir < this.props.video.ListSubtitles().length;
                ir++
              ) {
                const hr = this.props.video.ListSubtitles()[ir];
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
            const ci =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, l.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                ci &&
                  (0, l.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (ci ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, l.jsx)(N.N8C, {}),
                  }),
                (0, l.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (b ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, l.jsx)(N.wB_, {}),
                }),
                (0, l.jsx)(yr, { video: z }),
                O &&
                  O.map((ir) =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: ir,
                      },
                      ir.key,
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
                y &&
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
        const Ur = !0;
        let yr = class extends u.Component {
          constructor(a) {
            super(a), (0, mr.Gn)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = Ur;
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
                () => (this.m_bShowSlider = Ur),
              );
          }
          render() {
            let a = this.props.video,
              b = a.IsMuted(),
              y = a.GetVolume() * 100,
              z = "videoControlButton";
            y > 65
              ? (z += " HighestVolume")
              : y > 45
                ? (z += " HighVolume")
                : y < 46 && y > 24
                  ? (z += " MedVolume")
                  : y < 25 && (z += " LowVolume");
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
                      children: (0, l.jsx)(N.fSs, {}),
                    }),
                    (0, l.jsx)(li, { video: a, onDrag: this.OnChildDrag }),
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
        let li = class extends u.Component {
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
            let y = a.getBoundingClientRect(),
              z = ti.Fu(b, y.left, y.right, 0, 1),
              O = ti.OQ(z, 0, 1),
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
        q([j.oI], li.prototype, "OnMouseDown", 1),
          q([j.oI], li.prototype, "OnMouseMove", 1),
          q([j.oI], li.prototype, "OnMouseUp", 1),
          q([mr.XI], li.prototype, "SetVolumeWithCoord", 1),
          (li = q([f.PA], li));
        var Yr = g(43434),
          $r = Object.defineProperty,
          Zr = Object.getOwnPropertyDescriptor,
          W = (a, b, y, z) => {
            for (
              var O = z > 1 ? void 0 : z ? Zr(b, y) : b, x = a.length - 1, F;
              x >= 0;
              x--
            )
              (F = a[x]) && (O = (z ? F(b, y, O) : F(O)) || O);
            return z && O && $r(b, y, O), O;
          };
        const Lr = 3200,
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
              (Y.es.StopVideo(a),
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
            const y = this.props.nAppIDVOD;
            y &&
              (b.strInitialCapsuleImageUrl === void 0 || a.nAppIDVOD != y) &&
              ur.A.Get()
                .QueueAppRequest(y, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const O =
                    ur.A.Get().GetApp(y)?.GetAssets()?.GetMainCapsuleURL() ||
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
                  (b = Y.es.CreateBroadcastVideo(
                    a,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? a &&
                    (b = Y.es.CreateClipVideo(
                      a,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    a &&
                    ((b = Y.es.CreateVODVideo(
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
              this.m_schHideControls.Schedule(Lr, this.HideControls);
          }
          OnMouseMove(a) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Lr, this.HideControls);
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
                (0, l.jsx)(rr.tz, { children: this.GetContextMenuItems() }),
                a,
              ),
              a.preventDefault());
          }
          ToggleStatsView(a) {
            let b = !this.state.bShowStats;
            this.setState({ bShowStats: b });
            let y = this.state.video;
            y && y.SetStatsViewIsVisible(b);
          }
          ShowStorePage(a) {
            let b = this.state.video;
            if (!b || !this.props.onOpenLinkInNewWindow) return;
            let y = b.GetBroadcastInfo();
            if (!y) return;
            let z = (0, cr.k2)(`${k.TS.STORE_BASE_URL}app/${y.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(a, z), a.stopPropagation();
          }
          GetContextMenuItems() {
            let a = [],
              b = this.state.video;
            if (!b) return a;
            let y = b.GetBroadcastInfo();
            return (
              a.push(
                (0, l.jsx)(
                  rr.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (z) => {
                      this.ToggleStatsView(z);
                    },
                    children: (0, A.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              y &&
                y.m_strAppId != "0" &&
                Number.parseInt(y.m_strAppId) != Y.fO &&
                a.push(
                  (0, l.jsx)(
                    rr.kt,
                    {
                      onSelected: (z) => {
                        this.ShowStorePage(z);
                      },
                      children: (0, A.we)("#Broadcast_VideoContext_OpenStore"),
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
              ((0, fr.ww)(this.m_elBroadcastPlayer)
                ? (0, fr.MS)(this.m_elBroadcastPlayer)
                : (0, fr.tl)(
                    this.m_elBroadcastPlayer,
                    this.m_elVideo ?? void 0,
                  ));
          }
          OnFullscreenChange(a) {
            if (!this.m_elBroadcastPlayer) return;
            let b = (0, fr.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: b });
          }
          BHideVideoControls() {
            let a = this.state.video;
            return !a || a.GetUserInputNeeded()
              ? !0
              : Y.es.GetBroadcastState(a) == Y.fK.Error;
          }
          render() {
            const a = this.state.video,
              b = a && a.IsPaused(),
              y = a && a.BHasDASHStats() && this.state.bShowStats,
              z = !!(a && a.IsReplay()),
              O = this.state.bMountControls,
              x = this.state.bControlsVisible || b,
              F = !!(a && a.GetUserInputNeeded()),
              S = a?.GetDASHPlayerStats(),
              Ii =
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
                      title: (0, A.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              ar.push(
                (0, l.jsx)(
                  "div",
                  {
                    title: (0, A.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const mi = O && !this.BHideVideoControls(),
              ci = O && !this.state.bFullscreen,
              ir =
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
                ir &&
                  (0, l.jsx)("div", {
                    className: D().BroadcastContext,
                    children: ir,
                  }),
                z && (0, l.jsx)(vr, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, l.jsx)(ii, {
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
                Ii &&
                  (0, l.jsx)("img", {
                    loading: "lazy",
                    className: (0, m.A)(
                      D().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                mi &&
                  a &&
                  (0, l.jsx)(Wr, {
                    video: a,
                    actions: ar,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                ci && (0, l.jsx)(Ar, { onClick: this.props.onRequestClose }),
                y &&
                  S &&
                  (0, l.jsx)(ei, { stats: S, closeStats: this.CloseStats }),
                (0, l.jsx)(pr, { video: a }),
                F && a && (0, l.jsx)(si, { video: a }),
              ],
            });
          }
        };
        W([j.oI], G.prototype, "BindBroadcastPlayerRef", 1),
          W([j.oI], G.prototype, "BindVideoRef", 1),
          W([j.oI], G.prototype, "OnMouseDown", 1),
          W([j.oI], G.prototype, "OnMouseUp", 1),
          W([j.oI], G.prototype, "OnMouseMove", 1),
          W([j.oI], G.prototype, "OnMouseLeave", 1),
          W([j.oI], G.prototype, "HideControls", 1),
          W([j.oI], G.prototype, "UmountControls", 1),
          W([j.oI], G.prototype, "ShowStatsView", 1),
          W([j.oI], G.prototype, "OnContextMenu", 1),
          W([j.oI], G.prototype, "ToggleStatsView", 1),
          W([j.oI], G.prototype, "ShowStorePage", 1),
          W([j.oI], G.prototype, "CloseStats", 1),
          W([j.oI], G.prototype, "OnToggleFullscreen", 1),
          W([j.oI], G.prototype, "OnFullscreenChange", 1),
          (G = W([f.PA], G));
        let Wr = class extends u.Component {
          render() {
            const { video: a } = this.props;
            if (!a) return null;
            let b = a.has_segments;
            return (0, l.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, l.jsx)(Ir, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, l.jsxs)("div", {
                  className: "videoControlsBottom" + (b ? "" : " noSegments"),
                  children: [
                    (0, l.jsx)(Hr, {
                      video: a,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, l.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, l.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, l.jsx)(Br, { video: a }),
                        (0, l.jsx)(kr, { video: a }),
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
        Wr = W([f.PA], Wr);
        class Ar extends u.PureComponent {
          render() {
            return this.props.onClick
              ? (0, l.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, l.jsx)(N.sED, {}),
                })
              : null;
          }
        }
        class Br extends u.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-xr);
          }
          OnJumpForward() {
            this.props.video.JumpTime(xr);
          }
          render() {
            let b = this.props.video,
              y = b.CanSeek();
            return (0, l.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, l.jsx)(ai, { video: b }),
                y &&
                  (0, l.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, l.jsx)(N.tID, {
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
                (0, l.jsx)(Fr, { video: b }),
                y &&
                  (0, l.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, l.jsx)(N.tID, {
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
                y && (0, l.jsx)(ui, { video: b }),
              ],
            });
          }
        }
        W([j.oI], Br.prototype, "OnJumpBackward", 1),
          W([j.oI], Br.prototype, "OnJumpForward", 1);
        const kr = (0, f.PA)((a) => {
          if (a.video.IsBroadcastClip() || a.video.IsBroadcastVOD())
            return null;
          const b = (z) => {
            a.video.JumpToLiveEdge();
          };
          let y = a.video.IsOnLiveEdge();
          return (0, l.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, l.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (y ? " isLiveEdge" : ""),
              onClick: y ? void 0 : b,
              children: [
                (0, l.jsx)(N.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, l.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, A.we)(
                    y
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let Fr = class extends u.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let b = this.props.video.IsPaused();
            return (0, l.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: b ? (0, l.jsx)(N.jGG, {}) : (0, l.jsx)(N.vRz, {}),
            });
          }
        };
        W([j.oI], Fr.prototype, "OnTogglePlayPause", 1), (Fr = W([f.PA], Fr));
        let ai = class extends u.Component {
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
              y = a.GetPlaybackTime();
            for (let z = b.length - 1; z >= 0; z--)
              if (!(b[z].nTime >= y)) return b[z].nTime;
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
              children: (0, l.jsx)(N.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        W([mr.sH], ai.prototype, "video", 2),
          W([mr.EW], ai.prototype, "has_previous_marker", 1),
          W([j.oI], ai.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (ai = W([f.PA], ai));
        let ui = class extends u.Component {
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
              y = a.GetPlaybackTime();
            for (let z = 0; z < b.length; z++)
              if (!(b[z].nTime <= y)) return b[z].nTime;
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
              children: (0, l.jsx)(N.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        W([mr.sH], ui.prototype, "video", 2),
          W([mr.EW], ui.prototype, "has_next_marker", 1),
          W([j.oI], ui.prototype, "OnJumpToNextMarkerClicked", 1),
          (ui = W([f.PA], ui));
        const Dr = (a) => {
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
              children: (0, l.jsx)(N.Dp6, {}),
            }),
          });
        };
        function zi(a) {
          let b = a.startPos,
            y = a.endPos,
            z = "",
            O = 1;
          return (
            b < 0 && ((O = (y - b) / 10), (b = 0), (z = " hideFront")),
            (0, l.jsxs)("div", {
              className: "STV_timelineSegment" + z,
              style: { left: b + "%", width: y - b + "%", opacity: O },
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
        let Hr = class extends u.Component {
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
            const y = this.m_elSlider.current;
            if (y) {
              a.persist(), (this.m_rectSlider = y.getBoundingClientRect());
              let z = {};
              b === "start"
                ? ((z = { bStartMouseDown: !0 }), a.stopPropagation())
                : b === "end"
                  ? ((z = { bEndMouseDown: !0 }), a.stopPropagation())
                  : (z = { bGrabberMouseDown: !0 }),
                this.setState(z, () => this.AdjustSliderForClientX(a.clientX)),
                y.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                y.ownerDocument.defaultView?.addEventListener(
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
            let y = this.props.video,
              z = y.GetTimelineStartPos(),
              O = y.GetTimelineStartPos() + y.GetTimelineDuration(),
              x = y.GetTimeAtMousePosition(a, b, z, O);
            const F = 5;
            if (this.state.bStartMouseDown) {
              const S = ti.OQ(x, z, y.m_editorEndTime - F);
              y.m_editorStartTime = S;
            } else if (this.state.bEndMouseDown) {
              const S = ti.OQ(x, y.m_editorStartTime + F, O);
              y.m_editorEndTime = S;
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
              y = b.GetTimelineStartPos(),
              z = b.GetTimelineStartPos() + b.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let O =
              this.m_rectSlider &&
              b.GetTimeAtMousePosition(a, this.m_rectSlider, y, z);
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
              y = a.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                Y.a0.Timeline,
              ),
              z = a.GetPercentOffsetFromTime(
                a.GetPlaybackTime(),
                Y.a0.Timeline,
              ),
              O = a.GetPercentOffsetFromTime(
                a.GetVideoAvailableStartTime(),
                Y.a0.Timeline,
              );
            O < 0.05 && (O = 0);
            let x = ti.OQ(y, 0, 100).toFixed(1) + "%",
              F = ti.OQ(z, 0, 100).toFixed(1) + "%",
              S = ti.OQ(O, 0, 100).toFixed(1) + "%",
              Ii = {},
              lr = {},
              ar = {},
              mi = {};
            b
              ? ((mi.left = x), (Ii.width = x), (lr.width = F), (ar.width = S))
              : ((mi.left = F), (lr.width = F), (ar.width = S));
            let ci = (0, tr.ap)(a.GetPlaybackTime()),
              ir = (0, tr.ap)(this.state.nHoverValue ?? 0),
              hr = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (hr += " grabberDown"),
              a.IsTimelineMapActive() && (hr += " minimapActive");
            let Er = "";
            (y = b ? y : z),
              y > 100
                ? (Er = " grabberOffScreenRight grabberOffscreen")
                : y < 0 && (Er = " grabberOffScreenLeft grabberOffscreen");
            let Kr = [];
            a.GetTimelineMarkers().forEach((Tr, Pr) => {
              let gi = a.GetPercentOffsetFromTime(Tr.nTime, Y.a0.Timeline);
              gi < 0 ||
                gi > 100 ||
                Kr.push(
                  (0, l.jsx)(
                    Dr,
                    {
                      pos: gi,
                      label: Tr.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    Pr,
                  ),
                );
            });
            let Xr = [];
            a.GetTimelineSegments().forEach((Tr, Pr) => {
              let gi = a.GetPercentOffsetFromTime(Tr.nTimeStart, Y.a0.Timeline);
              if (gi > 100) return;
              let fi = a.GetPercentOffsetFromTime(Tr.nTimeEnd, Y.a0.Timeline);
              fi < 0 ||
                Xr.push(
                  (0, l.jsx)(
                    zi,
                    {
                      startPos: gi,
                      endPos: fi,
                      label: Tr.strTemplateName,
                      color: Tr.color,
                      onClick: (Sr) => this.OnSegmentClick(Tr.nTimeStart),
                    },
                    Pr,
                  ),
                );
            });
            const Qr = a.GetPercentOffsetFromTime(
                a.m_editorStartTime,
                Y.a0.Timeline,
              ),
              ji = a.GetPercentOffsetFromTime(a.m_editorEndTime, Y.a0.Timeline),
              Jr = this.props.bIncludeClipEditor
                ? [
                    (0, l.jsx)(
                      Dr,
                      {
                        pos: Qr,
                        label: (0, A.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Tr) => this.OnMouseDown(Tr, "start"),
                      },
                      "start",
                    ),
                    (0, l.jsx)(
                      Dr,
                      {
                        pos: ji,
                        label: (0, A.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Tr) => this.OnMouseDown(Tr, "end"),
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
                  (0, l.jsx)("div", { className: "DialogLabel", children: ci }),
                  (0, l.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: Xr,
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
                          style: Ii,
                        }),
                        (0, l.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: lr,
                        }),
                        (0, l.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: ar,
                        }),
                        Kr,
                        Jr,
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
                                    children: ir,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, l.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: mi,
                          children: (0, l.jsx)("div", {
                            className: "STV_timelineGrabber" + Er,
                            children: (0, l.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, l.jsx)(N.apU, {}),
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
        W([j.oI], Hr.prototype, "OnMouseDown", 1),
          W([j.oI], Hr.prototype, "OnMouseMove", 1),
          W([j.oI], Hr.prototype, "OnMouseUp", 1),
          W([j.oI], Hr.prototype, "OnKeyDown", 1),
          W([j.oI], Hr.prototype, "OnMouseHoverMove", 1),
          W([j.oI], Hr.prototype, "OnMouseHoverLeave", 1),
          W([j.oI], Hr.prototype, "AdjustHoverForClientX", 1),
          W([j.oI], Hr.prototype, "OnSegmentClick", 1),
          W([j.oI], Hr.prototype, "OnMarkerMouseEnter", 1),
          W([j.oI], Hr.prototype, "OnMarkerMouseLeave", 1),
          (Hr = W([f.PA], Hr));
        let Ir = class extends u.Component {
          state = { info: null };
          static getDerivedStateFromProps(a, b) {
            return (!b.info || b.info.m_steamIDBroadcast !== a.steamID) &&
              (b.info && (Y.es.StopInfo(b.info), (b.info = null)), a.steamID)
              ? { info: Y.es.StartInfo(a.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && Y.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const a = this.props.steamID,
              b = this.props.onLocalStreamChange;
            return b && B.td.stream[a]
              ? (0, l.jsx)(Nr, { value: a, options: B.td.stream, onChange: b })
              : null;
          }
          render() {
            let { info: a } = this.state;
            if (!a) return null;
            let b = "";
            a.m_nViewerCount && (b = (0, Bi.Dq)(a.m_nViewerCount));
            let y =
                B.td.bValid && B.td.stream && B.td.stream[a.m_steamIDBroadcast],
              z =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(a.m_strAppId) > 0 || y);
            const O =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              y &&
              B.td.gidEvent;
            return (0, l.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, l.jsx)(L, {
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
                                (0, l.jsx)(N.y_e, {}),
                                (0, A.Yp)("#Broadcast_ViewerCount", b),
                              ],
                            }),
                        ],
                      }),
                    y &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, l.jsx)("div", {
                        className: "Actions",
                        children: (0, l.jsx)("div", {
                          onClick: (x) =>
                            this.props.onOpenLinkInNewWindow?.(x, B.td.link),
                          className: "BroadcastLink",
                          children: B.td.linkName,
                        }),
                      }),
                  ],
                }),
                O && (0, l.jsx)(U.m, { gidEvent: B.td.gidEvent }),
                z &&
                  (0, l.jsx)(v.p, {
                    id:
                      B.td.bValid &&
                      B.td.stream &&
                      B.td.stream[a.m_steamIDBroadcast]
                        ? B.td.appID
                        : parseInt(a.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        Ir = W([f.PA], Ir);
        class Nr extends u.Component {
          showContextMenu(b) {
            const { options: y, value: z, onChange: O } = this.props,
              x = Object.keys(y).map((F) =>
                (0, l.jsx)(
                  rr.IK,
                  {
                    onSelected: () => O(F),
                    bChecked: F === z,
                    children: (0, A.we)(y[F]),
                  },
                  F,
                ),
              );
            (0, e.lX)((0, l.jsx)(rr.tz, { children: x }), b);
          }
          render() {
            const { value: b, options: y } = this.props,
              z = y[b];
            return (0, l.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, l.jsxs)("span", { children: ["\xA0- ", (0, A.we)(z)] }),
                (0, l.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, l.jsx)(N.GB9, {}),
                }),
              ],
            });
          }
        }
        W([j.oI], Nr.prototype, "showContextMenu", 1);
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
              this.props.linkRegions.forEach((b, y) => {
                this.LoadLinkRegion(b, y);
              });
          }
          async LoadLinkRegion(a, b) {
            let y = this.state.sizableRegion.length;
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
              let y;
              (y = {
                left: Math.floor(this.state.sizableRegion[b].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[b].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[b].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[b].heightPct * 100),
                url: this.state.sizableRegion[b].link_url,
                link_description: this.state.sizableRegion[b].link_description,
                link_index: b,
              }),
                a.links.push(y);
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
            const y = [...this.state.sizableRegion];
            (y[a] = b),
              this.setState({ sizableRegion: y }, () => this.OnSaveRegions());
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
                          const b = (0, Yr.p)(a.url);
                          return (0, l.jsx)(
                            sr.uU,
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
                          K.I,
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
                        children: (0, A.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, l.jsx)("div", {
                    children: (0, A.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        W([j.oI], dr.prototype, "AddLinkRegion", 1),
          W([j.oI], dr.prototype, "LoadLinkRegion", 1),
          W([j.oI], dr.prototype, "OnSaveRegions", 1),
          W([j.oI], dr.prototype, "DeleteRegion", 1),
          W([j.oI], dr.prototype, "UpdatePanel", 1),
          (dr = W([f.PA], dr));
      },
      7582: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { HD: () => Y, f1: () => Gr, s4: () => ii, sB: () => yi });
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
          set nOverrideDateNow(d) {
            (0, u.ai)(d);
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
          ParseDevOverrides(d) {
            if (!d || d.length == 0) return;
            new URLSearchParams(d[0] == "?" ? d.substring(1) : d).has("t");
          }
        }
        const Y = new cr();
        (0, I.V)("g_EventCalendarDevFeatures", Y);
        function ur(rr = 1) {
          const [d, o] = React.useState(() => E()),
            m = useCancelTokenSource("useTimeNowWithOverride"),
            t = React.useCallback(() => {
              m.token.reason || o(E());
            }, []);
          return (
            React.useEffect(() => {
              const or = 1e3 * rr,
                L = Date.now() % or,
                v = or - L,
                U = window.setTimeout(t, v);
              return () => {
                window.clearTimeout(U);
              };
            }, [d, rr, t]),
            d
          );
        }
        const gr = Math.floor(new Date().getTime() / 1e3);
        function E() {
          const rr = Math.floor(Date.now() / 1e3);
          return Y.nOverrideDateNow ? Y.nOverrideDateNow + (rr - gr) : rr;
        }
        function yi() {
          return Y.nOverrideDateNow ?? gr;
        }
        function Gr() {
          return f.useMemo(() => yi(), []);
        }
        function ii() {
          return f.useMemo(() => Y.GetTimeNowWithOverrideAsDate(), []);
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
          Y = g(30096),
          ur = g(3166),
          j = Object.defineProperty,
          gr = Object.getOwnPropertyDescriptor,
          E = (L, v, U, K) => {
            for (
              var N = K > 1 ? void 0 : K ? gr(v, U) : v, sr = L.length - 1, fr;
              sr >= 0;
              sr--
            )
              (fr = L[sr]) && (N = (K ? fr(v, U, N) : fr(N)) || N);
            return K && N && j(v, U, N), N;
          };
        const yi = class Qe {
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
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const v = new Qe();
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
        E([f.sH], yi.prototype, "giveaway_id", 2),
          E([f.sH], yi.prototype, "seconds_until_drawing", 2),
          E([f.sH], yi.prototype, "rtime_start", 2),
          E([f.sH], yi.prototype, "rtime_end", 2),
          E([f.sH], yi.prototype, "closed", 2),
          E([f.sH], yi.prototype, "winner_count", 2);
        let Gr = yi;
        const ii = class ee {
          constructor() {
            (0, f.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(v, U) {
            return v + "_" + U;
          }
          GetInfoByInstance(v, U) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(v, U),
            );
          }
          GetNextDrawChangeCallback(v) {
            return (
              this.m_mapNextDrawChangeCallback.has(v) ||
                this.m_mapNextDrawChangeCallback.set(v, new cr.lu()),
              this.m_mapNextDrawChangeCallback.get(v)
            );
          }
          CopyToGiveaway(v, U) {
            U.closed != v.closed && (U.closed = v.closed),
              U.giveaway_id != v.giveaway_id && (U.giveaway_id = v.giveaway_id),
              U.rtime_start != v.rtime_start && (U.rtime_start = v.rtime_start),
              U.rtime_end != v.rtime_end && (U.rtime_end = v.rtime_end),
              U.winner_count != v.winner_count &&
                (U.winner_count = v.winner_count),
              U.seconds_until_drawing != v.seconds_until_drawing &&
                (U.seconds_until_drawing = v.seconds_until_drawing);
          }
          async ReloadGiveaway(v, U) {
            if (!v) return null;
            let K = ur.TS.STORE_BASE_URL + "prizes/nextdraw/" + v,
              N = null,
              sr = { origin: self.origin };
            return (
              (N = await mr().get(K, { params: sr })),
              (0, f.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(v) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(v, new Gr()),
                  this.CopyToGiveaway(
                    N.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(v),
                  ),
                  U !== void 0)
                ) {
                  const fr = this.GetKey(v, U);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(fr) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      fr,
                      new Gr(),
                    ),
                    this.CopyToGiveaway(
                      N.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(fr),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(v).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(v),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(v)
            );
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
                let U = new Gr();
                this.CopyToGiveaway(v, U),
                  this.m_mapGiveawayIDToNextDrawInfo.set(v.giveaway_id, U);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        E([f.sH], ii.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          E([f.XI], ii.prototype, "CopyToGiveaway", 1);
        let rr = ii;
        const d = class Le {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Le.s_GlobalInstance),
              (Le.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(v, U) {
            if ((this.ClearRefreshInterval(), !v.closed)) {
              let K =
                v.seconds_until_drawing <= 0 && v.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(U, K);
            }
          }
          SetupCountDown(v, U) {
            v > 0 && (this.m_intervalCountDownID = window.setInterval(U, 1e3));
          }
        };
        E([I.o], d.prototype, "ClearRefreshInterval", 1),
          E([I.o], d.prototype, "ClearCountDown", 1),
          E([I.o], d.prototype, "SetupRefreshDataInterval", 1),
          E([I.o], d.prototype, "SetupCountDown", 1);
        let o = d;
        function m(L, v) {
          const U = rr.Get().GetInfoByInstance(L, v.m_myInstanceNumber);
          (U.seconds_until_drawing -= 1),
            U.seconds_until_drawing == 0 && v.ClearCountDown();
        }
        function t(L, v) {
          const U = rr.Get().GetInfoByInstance(L, v.m_myInstanceNumber);
          U &&
            U.BIsValid() &&
            U.seconds_until_drawing <= 0 &&
            !U.closed &&
            (v.ClearCountDown(),
            rr
              .Get()
              .ReloadGiveaway(L, v.m_myInstanceNumber)
              .then((K) => {
                v.SetupCountDown(K.seconds_until_drawing, () => m(L, v));
              }));
        }
        function or(L) {
          const [v] = (0, e.useState)(new o()),
            U = (0, Y.CH)();
          (0, e.useEffect)(
            () => (
              rr
                .Get()
                .ReloadGiveaway(L, v.m_myInstanceNumber)
                .then((A) => {
                  v.SetupRefreshDataInterval(A, () => t(L, v)),
                    v.SetupCountDown(A.seconds_until_drawing, () => m(L, v)),
                    U();
                }),
              () => {
                v.ClearRefreshInterval(), v.ClearCountDown();
              }
            ),
            [v, L, U],
          );
          const K = rr.Get().GetInfoByInstance(L, v.m_myInstanceNumber),
            [N, sr, fr] = (0, u.q3)(() => [
              K?.winner_count,
              K?.closed,
              K?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !K || K.giveaway_id == null || !K.BStarted() || N === void 0,
            winner_count: N,
            closed: sr,
            seconds_until_drawing: fr,
          };
        }
      },
      84676: (Mi, hi, g) => {
        "use strict";
        g.d(hi, {
          G6: () => E,
          Gg: () => ii,
          Ow: () => Gr,
          Sq: () => ur,
          YM: () => or,
          eR: () => j,
          ik: () => gr,
          mZ: () => rr,
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
        function Y(L, v, U = !0) {
          const K = U
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            N = U || CStoreItemCache.Get().BHasStoreItem(L, v, K) ? L : null,
            [sr, fr] = E(N, v, K),
            [A, Bi] = useState(null),
            [ti, k] = E(A, v, K);
          useEffect(() => {
            sr?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              Bi(sr.GetParentAppID());
          }, [sr]);
          let B = sr?.GetShortDescription()
            ? StripBBCodeTags(sr.GetShortDescription())
            : "";
          (!B || B.length === 0) &&
            ti &&
            (B = ti?.GetShortDescription()
              ? StripBBCodeTags(ti.GetShortDescription())
              : "");
          const tr = fr == gr && (!A || k == gr);
          return [B, tr];
        }
        const ur = 1,
          j = 2,
          gr = 3;
        function E(L, v, U, K) {
          const N = (0, f.useRef)(void 0),
            sr = (0, f.useRef)(void 0),
            fr = (0, I.CH)();
          N.current = L;
          const [A, Bi] = (0, f.useState)(void 0),
            {
              include_assets: ti,
              include_release: k,
              include_platforms: B,
              include_all_purchase_options: tr,
              include_screenshots: Mr,
              include_trailers: D,
              include_ratings: $,
              include_tag_count: nr,
              include_reviews: zr,
              include_basic_info: jr,
              include_supported_languages: vr,
              include_full_description: pr,
              include_included_items: si,
              include_assets_without_overrides: Or,
              apply_user_filters: xi,
              include_links: X,
              include_extra_details: ei,
              include_optin_registration_tags: br,
            } = U;
          if (
            ((0, f.useEffect)(() => {
              const wr = {
                include_assets: ti,
                include_release: k,
                include_platforms: B,
                include_all_purchase_options: tr,
                include_screenshots: Mr,
                include_trailers: D,
                include_ratings: $,
                include_tag_count: nr,
                include_reviews: zr,
                include_basic_info: jr,
                include_supported_languages: vr,
                include_full_description: pr,
                include_included_items: si,
                include_assets_without_overrides: Or,
                apply_user_filters: xi,
                include_links: X,
                include_extra_details: ei,
                include_optin_registration_tags: br,
              };
              let oi = null;
              return (
                !L ||
                  L < 0 ||
                  cr.A.Get().BHasStoreItem(L, v, wr) ||
                  (A !== void 0 && K && K == sr.current) ||
                  (K !== sr.current && (Bi(void 0), (sr.current = K)),
                  (oi = mr().CancelToken.source()),
                  cr.A.Get()
                    .QueueStoreItemRequest(L, v, wr)
                    .then((q) => {
                      !oi?.token.reason && N.current === L && Bi(q == u.R),
                        fr();
                    })),
                () => oi?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              L,
              v,
              K,
              A,
              ti,
              k,
              B,
              tr,
              Mr,
              D,
              $,
              nr,
              zr,
              jr,
              vr,
              pr,
              si,
              Or,
              xi,
              X,
              ei,
              br,
              fr,
            ]),
            !L)
          )
            return [null, j];
          if (A === !1) return [void 0, j];
          if (cr.A.Get().BIsStoreItemMissing(L, v)) return [void 0, j];
          if (!cr.A.Get().BHasStoreItem(L, v, U)) return [void 0, ur];
          const ni = cr.A.Get().GetStoreItemWithLegacyVisibilityCheck(L, v);
          return ni ? [ni, gr] : [null, j];
        }
        function yi(L, v, U) {
          return E(L, e.c6.qI, v, U);
        }
        function Gr(L, v, U) {
          return E(L, e.c6.xO, v, U);
        }
        function ii(L, v, U) {
          return E(L, e.c6.RD, v, U);
        }
        function rr(L, v, U) {
          const [K, N] = E(L, v, U);
          let sr;
          K?.GetStoreItemType() == e.c6.RD &&
            !K.GetAssets()?.GetHeaderURL() &&
            K?.GetIncludedAppIDs().length == 1 &&
            (sr = K.GetIncludedAppIDs()[0]);
          const [fr, A] = yi(sr, U);
          return sr && fr?.BIsVisible() ? [fr, A] : [K, N];
        }
        function d(L, v, U, K) {
          const N = (0, I.CH)(),
            {
              include_assets: sr,
              include_release: fr,
              include_platforms: A,
              include_all_purchase_options: Bi,
              include_screenshots: ti,
              include_trailers: k,
              include_ratings: B,
              include_tag_count: tr,
              include_reviews: Mr,
              include_basic_info: D,
              include_supported_languages: $,
              include_full_description: nr,
              include_included_items: zr,
              include_assets_without_overrides: jr,
              apply_user_filters: vr,
              include_links: pr,
              include_extra_details: si,
              include_optin_registration_tags: Or,
            } = U;
          return (
            (0, f.useEffect)(() => {
              if (!L || L.length == 0) return;
              const X = {
                  include_assets: sr,
                  include_release: fr,
                  include_platforms: A,
                  include_all_purchase_options: Bi,
                  include_screenshots: ti,
                  include_trailers: k,
                  include_ratings: B,
                  include_tag_count: tr,
                  include_reviews: Mr,
                  include_basic_info: D,
                  include_supported_languages: $,
                  include_full_description: nr,
                  include_included_items: zr,
                  include_assets_without_overrides: jr,
                  apply_user_filters: vr,
                  include_links: pr,
                  include_extra_details: si,
                  include_optin_registration_tags: Or,
                },
                ei = L.filter(
                  (wr) =>
                    !(
                      cr.A.Get().BHasStoreItem(wr, v, X) ||
                      cr.A.Get().BIsStoreItemMissing(wr, v)
                    ),
                );
              if (ei.length == 0) return;
              const br = mr().CancelToken.source(),
                ni = ei.map((wr) => cr.A.Get().QueueStoreItemRequest(wr, v, X));
              return (
                Promise.all(ni).then(() => {
                  br.token.reason || N();
                }),
                () => br.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              L,
              v,
              K,
              N,
              sr,
              fr,
              A,
              Bi,
              ti,
              k,
              B,
              tr,
              Mr,
              D,
              $,
              nr,
              zr,
              jr,
              vr,
              pr,
              si,
              Or,
            ]),
            L
              ? L.every(
                  (X) =>
                    cr.A.Get().BHasStoreItem(X, v, U) ||
                    cr.A.Get().BIsStoreItemMissing(X, v),
                )
                ? L.every((X) =>
                    cr.A.Get().GetStoreItemWithLegacyVisibilityCheck(X, v),
                  )
                  ? gr
                  : j
                : ur
              : j
          );
        }
        function o(L, v, U) {
          return d(L, e.c6.qI, v, U);
        }
        function m(L, v, U) {
          return d(L, EStoreItemType.k_EStoreItemType_Bundle, v, U);
        }
        function t(L, v, U) {
          return d(L, EStoreItemType.k_EStoreItemType_Package, v, U);
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
        g.d(hi, { Cg: () => yi, pZ: () => ii, vg: () => Gr });
        var l = g(7850),
          mr = g(90626),
          f = g(88003),
          u = g(18210),
          e = g(3166),
          I = g(87242),
          cr = g(74974),
          Y = g(6740),
          ur = g(62179),
          j = g(3685),
          gr = g(96538);
        function E(d) {
          return (0, l.jsx)(f.x_, {
            onEscKeypress: d.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, l.jsx)(rr, {
              redirectURL: d.redirectURL,
              guestOption: d.guestOption,
            }),
          });
        }
        function yi(d) {
          const { redirectURL: o = window.location.href } = d;
          return (0, l.jsx)(gr.EN, {
            active: !0,
            children: (0, l.jsx)(E, { redirectURL: o }),
          });
        }
        function Gr() {
          (0, f.pg)(
            (0, l.jsx)(E, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, u.we)("#Login_SignInTitle") },
          );
        }
        function ii(d, o) {
          (0, f.pg)(
            (0, l.jsx)(E, { ownerWin: window, redirectURL: d, guestOption: o }),
            window,
            { strTitle: (0, u.we)("#Login_SignInTitle") },
          );
        }
        function rr(d) {
          const { redirectURL: o, guestOption: m } = d,
            [t] = (0, mr.useState)(
              new ur.x(
                new j.D(e.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [or, L] = (0, mr.useState)(!1),
            v = (U) => {
              U == I.wI.k_PrimaryDomainFail ? L(!0) : window.location.assign(o);
            };
          return (0, l.jsx)("div", {
            children: or
              ? (0, l.jsx)(cr.Fn, {})
              : (0, l.jsx)(cr.YN, {
                  autoFocus: !0,
                  transport: t,
                  platform: Y.SS.tS,
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
        g.d(hi, { m: () => Gr });
        var l = g(7850),
          mr = g(99412),
          f = g(29630),
          u = g(72609),
          e = g(90626),
          I = g(48421),
          cr = g(60480),
          Y = g(36707),
          ur = g(18210),
          j = g(53113),
          gr = g(20193);
        function E(ii) {
          const { gidEvent: rr } = ii,
            d = usePartnerEventByEventGID(rr);
          return d
            ? jsx(yi, {
                event: d,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(d) ?? ""),
              })
            : null;
        }
        function yi(ii) {
          const { event: rr, lang: d, href: o } = ii,
            [m, t] = (0, e.useMemo)(() => {
              const or = rr.jsondata.localized_sale_product_banner,
                L = rr.jsondata.localized_sale_product_mobile_banner;
              if (or?.length && L?.length) {
                const v = ur.NT.GetWithFallback(or, d),
                  U = ur.NT.GetWithFallback(L, d);
                if (v?.length && U?.length)
                  return [
                    f.zU.GenerateURLFromHashAndExt(rr.clanSteamID, v),
                    f.zU.GenerateURLFromHashAndExt(rr.clanSteamID, U),
                  ];
              }
              return [void 0, void 0];
            }, [rr, d]);
          return !m?.length || !t?.length
            ? null
            : (0, l.jsxs)("a", {
                href: o,
                className: gr.Link,
                children: [
                  (0, l.jsx)("img", {
                    src: m,
                    className: (0, Y.A)(gr.Banner, gr.Big),
                    alt: rr.GetNameWithFallback(d),
                  }),
                  (0, l.jsx)("img", {
                    src: t,
                    className: (0, Y.A)(gr.Banner, gr.Mobile),
                    alt: rr.GetNameWithFallback(d),
                  }),
                ],
              });
        }
        function Gr(ii) {
          const { gidEvent: rr } = ii,
            d = (0, I.RR)(rr);
          return d
            ? (0, l.jsx)(yi, {
                event: d,
                lang: (0, mr.sfN)(u.TS.LANGUAGE),
                href: (0, j.k2)((0, cr.n4)(d) ?? ""),
              })
            : null;
        }
      },
      79167: (Mi, hi, g) => {
        "use strict";
        g.d(hi, { I: () => rr });
        var l = g(7850),
          mr = g(90626),
          f = g(30096),
          u = g(75844),
          e = g(8323),
          I = g(18210),
          cr = g(16412),
          Y = g(36118),
          ur = g(81315),
          j = g.n(ur),
          gr = g(13854),
          E = Object.defineProperty,
          yi = Object.getOwnPropertyDescriptor,
          Gr = (d, o, m, t) => {
            for (
              var or = t > 1 ? void 0 : t ? yi(o, m) : o, L = d.length - 1, v;
              L >= 0;
              L--
            )
              (v = d[L]) && (or = (t ? v(o, m, or) : v(or)) || or);
            return t && or && E(o, m, or), or;
          },
          ii = ((d) => (
            (d.topleft = "topleft"),
            (d.top = "top"),
            (d.topright = "topright"),
            (d.left = "left"),
            (d.middle = "middle"),
            (d.right = "right"),
            (d.bottomleft = "bottomleft"),
            (d.bottom = "bottom"),
            (d.bottomright = "bottomright"),
            d
          ))(ii || {});
        let rr = class extends mr.Component {
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
          constructor(d) {
            super(d),
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
          LinkRegionBoxRef(d) {
            this.m_elLinkRegionBox = d;
          }
          OnMouseDown(d, o) {
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
                ((d.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((d.clientY - this.m_rectLinkRegion.top) /
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
              d.preventDefault(),
              d.stopPropagation();
          }
          OnMouseMove(d, o) {
            if (this.state.EdgeDown !== void 0) {
              switch ((d.shiftKey && this.m_fnMouseUp(), o)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(d.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(d.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(d.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(d.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(d.clientY),
                    curLeftPosPct: this.CalcLeftEdge(d.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(d.clientY),
                    curRightPosPct: this.CalcRightEdge(d.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(d.clientX),
                    curBottomPosPct: this.CalcBottomEdge(d.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(d.clientX),
                    curBottomPosPct: this.CalcBottomEdge(d.clientY),
                  });
                  break;
                }
                case "middle": {
                  const m = (0, gr.OQ)(
                      this.CalcLeftEdge(d.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    t = 100 - (m + this.state.curWidthPct),
                    or = (0, gr.OQ)(
                      this.CalcTopEdge(d.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    L = 100 - (or + this.state.curHeightPct),
                    v = {
                      curLeftPosPct: m,
                      curRightPosPct: t,
                      curTopPosPct: or,
                      curBottomPosPct: L,
                    };
                  this.setState(v);
                  break;
                }
                default:
                  break;
              }
              d.preventDefault(), d.stopPropagation();
            }
          }
          IsValidPct(d) {
            return d >= 0 && d <= 100;
          }
          UpdateState(d) {
            let o =
                d.curTopPosPct !== void 0
                  ? d.curTopPosPct
                  : this.state.curTopPosPct,
              m =
                d.curBottomPosPct !== void 0
                  ? d.curBottomPosPct
                  : this.state.curBottomPosPct,
              t =
                d.curLeftPosPct !== void 0
                  ? d.curLeftPosPct
                  : this.state.curLeftPosPct,
              or =
                d.curRightPosPct !== void 0
                  ? d.curRightPosPct
                  : this.state.curRightPosPct,
              L = (0, gr.OQ)(
                100 - or - t,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              v = (0, gr.OQ)(
                100 - m - o,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (d.curLeftPosPct !== void 0 || d.curRightPosPct !== void 0
                ? (v = L / this.m_aspectRatio)
                : (L = v * this.m_aspectRatio)),
              d.curLeftPosPct !== void 0
                ? (t = 100 - or - L)
                : (or = 100 - (t + L)),
              d.curTopPosPct !== void 0
                ? (o = 100 - m - v)
                : (m = 100 - (o + v));
            const U = 100 - or - t,
              K = 100 - m - o;
            this.IsValidPct(t) &&
              this.IsValidPct(or) &&
              this.IsValidPct(o) &&
              this.IsValidPct(m) &&
              this.IsValidPct(U) &&
              this.IsValidPct(K) &&
              this.setState({
                curLeftPosPct: t,
                curRightPosPct: or,
                curTopPosPct: o,
                curBottomPosPct: m,
              });
          }
          GetXPercent(d) {
            return this.m_rectLinkRegion
              ? ((d - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(d) {
            return this.m_rectLinkRegion
              ? ((d - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(d) {
            return (0, gr.OQ)(this.GetXPercent(d), 0, 100);
          }
          CalcRightEdge(d) {
            return (0, gr.OQ)(
              100 - (this.GetXPercent(d) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(d) {
            return (0, gr.OQ)(this.GetYPercent(d), 0, 100);
          }
          CalcBottomEdge(d) {
            return (0, gr.OQ)(
              100 - (this.GetYPercent(d) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(d, o) {
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
          OnSetLinkURLChange(d) {
            this.setState({
              text_link_url: d.target.value,
              valid_link: this.validateUrl(d.target.value),
            });
          }
          OnSetLinkDescriptionChange(d) {
            this.setState({ text_link_description: d.target.value });
          }
          validateUrl(d) {
            return d != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  d,
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
            let d = {
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
                style: d,
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
                              children: (0, l.jsx)(Y.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, l.jsx)("div", {
                              className: j().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, l.jsx)(Y.xv8, {}),
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
        Gr([f.oI], rr.prototype, "LinkRegionBoxRef", 1),
          Gr([f.oI], rr.prototype, "OnMouseDown", 1),
          Gr([f.oI], rr.prototype, "OnMouseMove", 1),
          Gr([f.oI], rr.prototype, "OnMouseUp", 1),
          Gr([f.oI], rr.prototype, "HandleDelete", 1),
          Gr([f.oI], rr.prototype, "OnSetLinkURLChange", 1),
          Gr([f.oI], rr.prototype, "OnSetLinkDescriptionChange", 1),
          Gr([f.oI], rr.prototype, "OnSaveLink", 1),
          Gr([f.oI], rr.prototype, "OnEditLink", 1),
          (rr = Gr([u.PA], rr));
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [62077],
  {
    14256: (e) => {
      e.exports = {
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
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    55815: (e, t, r) => {
      "use strict";
      r.d(t, {
        DK: () => Ve,
        hW: () => Z,
        Lw: () => D,
        ku: () => Y,
        Mn: () => K,
        sW: () => a,
        nn: () => i,
      });
      var i = {};
      r.r(i), r.d(i, { Tq: () => l, TC: () => m, fe: () => d });
      var a = {};
      r.r(a), r.d(a, { rx: () => u, XP: () => B });
      var s = r(80613),
        n = r.n(s),
        o = r(89068),
        c = r(56545);
      const l = 0,
        d = 6,
        m = 9,
        u = 0,
        B = 1;
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.permission || o.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  permission: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  gameid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  client_instance_id: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  title: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                  cellid: { n: 5, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  rtmp_token: {
                    n: 6,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  thumbnail_upload: {
                    n: 7,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  sysid: { n: 9, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  allow_webrtc: {
                    n: 10,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
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
          let t = new (n().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BeginBroadcastSession_Request";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.broadcast_id || o.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  thumbnail_upload_address: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  thumbnail_upload_token: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  thumbnail_interval_seconds: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  heartbeat_interval_seconds: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
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
          let t = new (n().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BeginBroadcastSession_Response";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.broadcast_id || o.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
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
          let t = new (n().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_EndBroadcastSession_Request";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_EndBroadcastSession_Response";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.broadcast_id || o.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  cellid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  as_rtmp: { n: 3, br: o.qM.readBool, bw: o.gp.writeBool },
                  delay_seconds: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  rtmp_token: {
                    n: 5,
                    d: "0",
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  upload_ip_address: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  is_replay: { n: 7, br: o.qM.readBool, bw: o.gp.writeBool },
                  sysid: { n: 8, br: o.qM.readUint32, bw: o.gp.writeUint32 },
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
          let t = new (n().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBroadcastUpload_Request";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.upload_token || o.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  upload_token: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  upload_address: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  broadcast_upload_id: {
                    n: 3,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  enable_replay: {
                    n: 6,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  http_address: {
                    n: 7,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBroadcastUpload_Response";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.broadcast_id || o.Sg(p.M()),
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
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  upload_token: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  upload_address: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  http_address: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  broadcast_upload_id: {
                    n: 5,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  heartbeat_interval_seconds: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  is_rtmp: { n: 7, br: o.qM.readBool, bw: o.gp.writeBool },
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
          let t = new (n().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastUploadStarted_Notification";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || o.Sg(f.M()),
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
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
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
          let t = new (n().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastStatus_Request";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.gameid || o.Sg(z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  gameid: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  title: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  num_viewers: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  permission: { n: 4, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  is_rtmp: { n: 5, br: o.qM.readBool, bw: o.gp.writeBool },
                  seconds_delay: {
                    n: 6,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  is_publisher: { n: 7, br: o.qM.readBool, bw: o.gp.writeBool },
                  thumbnail_url: {
                    n: 8,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  update_interval: {
                    n: 9,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  is_uploading: {
                    n: 10,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  duration: {
                    n: 11,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  is_replay: { n: 12, br: o.qM.readBool, bw: o.gp.writeBool },
                  is_capturing_vod: {
                    n: 13,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  is_store_whitelisted: {
                    n: 14,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = o.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastStatus_Response";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.steamid || o.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
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
          let t = new (n().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastThumbnail_Request";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.thumbnail_url || o.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  thumbnail_url: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  update_interval: {
                    n: 2,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  num_viewers: {
                    n: 3,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  duration: { n: 4, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = o.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastThumbnail_Response";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || o.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  existing_broadcast_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  client_cell: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  watch_location: {
                    n: 6,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  is_webrtc: { n: 7, br: o.qM.readBool, bw: o.gp.writeBool },
                },
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
          let t = new (n().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WatchBroadcast_Request";
        }
      }
      class W extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.response || o.Sg(W.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  response: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  mpd_url: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  broadcast_id: {
                    n: 3,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  gameid: {
                    n: 4,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  title: { n: 5, br: o.qM.readString, bw: o.gp.writeString },
                  num_viewers: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  permission: { n: 7, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  is_rtmp: { n: 8, br: o.qM.readBool, bw: o.gp.writeBool },
                  seconds_delay: {
                    n: 9,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  viewer_token: {
                    n: 10,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  hls_m3u8_master_url: {
                    n: 11,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  heartbeat_interval: {
                    n: 12,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  thumbnail_url: {
                    n: 13,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  is_webrtc: { n: 14, br: o.qM.readBool, bw: o.gp.writeBool },
                  webrtc_session_id: {
                    n: 15,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  webrtc_offer_sdp: {
                    n: 16,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  webrtc_turn_server: {
                    n: 17,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  is_replay: { n: 18, br: o.qM.readBool, bw: o.gp.writeBool },
                  duration: { n: 19, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  cdn_auth_url_parameters: {
                    n: 20,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = o.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WatchBroadcast_Response";
        }
      }
      class F extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.steamid || o.Sg(F.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  representation: {
                    n: 4,
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
        static toObject(e, t) {
          return o.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_HeartbeatBroadcast_Notification";
        }
      }
      class j extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || o.Sg(j.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
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
        static toObject(e, t) {
          return o.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopWatchingBroadcast_Notification";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || o.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  approval_response: {
                    n: 2,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = o.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_InviteToBroadcast_Request";
        }
      }
      class q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.success || o.Sg(q.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  success: { n: 1, br: o.qM.readBool, bw: o.gp.writeBool },
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
        static toObject(e, t) {
          return o.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_InviteToBroadcast_Response";
        }
      }
      class v extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.permission || o.Sg(v.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  permission: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  gameid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  title: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                  game_data_config: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = o.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendBroadcastStateToServer_Request";
        }
      }
      class O extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (n().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendBroadcastStateToServer_Response";
        }
      }
      class U extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || o.Sg(U.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  state: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = o.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastViewerState_Notification";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.broadcast_id || o.Sg(I.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
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
        static toObject(e, t) {
          return o.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WaitingBroadcastViewer_Notification";
        }
      }
      class C extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.broadcast_id || o.Sg(C.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_relay_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  upload_result: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  too_many_poor_uploads: {
                    n: 4,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
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
        static toObject(e, t) {
          return o.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopBroadcastUpload_Notification";
        }
      }
      class x extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.broadcast_id || o.Sg(x.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
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
        static toObject(e, t) {
          return o.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SessionClosed_Notification";
        }
      }
      class N extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.broadcast_id || o.Sg(N.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  num_viewers: {
                    n: 2,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = o.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastStatus_Notification";
        }
      }
      class k extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.broadcast_channel_id || o.Sg(k.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_channel_name: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  broadcast_channel_avatar: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
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
        static toObject(e, t) {
          return o.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastChannelLive_Notification";
        }
      }
      class G extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.thumbnail_upload_token || o.Sg(G.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  thumbnail_upload_token: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  thumbnail_broadcast_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  thumbnail_data: {
                    n: 3,
                    br: o.qM.readBytes,
                    bw: o.gp.writeBytes,
                  },
                  thumbnail_width: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  thumbnail_height: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
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
        static toObject(e, t) {
          return o.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendThumbnailToRelay_Notification";
        }
      }
      class P extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.broadcast_upload_id || o.Sg(P.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  broadcast_upload_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  upload_result: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = o.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_NotifyBroadcastUploadStop_Notification";
        }
      }
      class V extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.broadcaster_steamid || o.Sg(V.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = o.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_ViewerBroadcastInvite_Notification";
        }
      }
      class A extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.broadcast_id || o.Sg(A.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = o.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
        }
      }
      class H extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || o.Sg(H.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  client_ip: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  client_cell: {
                    n: 4,
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
        static toObject(e, t) {
          return o.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatInfo_Request";
        }
      }
      class E extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.chat_id || o.Sg(E.M()),
            s.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  chat_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  view_url_template: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  flair_group_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = o.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatInfo_Response";
        }
      }
      class D extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.chat_id || o.Sg(D.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  chat_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  message: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  instance_id: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  language: {
                    n: 4,
                    d: 0,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  country_code: {
                    n: 5,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = o.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Request";
        }
      }
      class L extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.persona_name || o.Sg(L.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  persona_name: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  in_game: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                  result: { n: 3, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  cooldown_time_seconds: {
                    n: 4,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
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
        static toObject(e, t) {
          return o.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Response";
        }
      }
      class K extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.chat_id || o.Sg(K.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  chat_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  flair: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = o.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Request";
        }
      }
      class X extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.result || o.Sg(X.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  result: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  chat_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  flair: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = o.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Response";
        }
      }
      class Z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.chat_id || o.Sg(Z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  chat_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  muted: { n: 3, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = o.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Request";
        }
      }
      class Q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (n().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Response";
        }
      }
      class Y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.chat_id || o.Sg(Y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  chat_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = o.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Request";
        }
      }
      class $ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (n().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Response";
        }
      }
      class J extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.chat_id || o.Sg(J.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  chat_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: o.qM.readFixed64String,
                    pbr: o.qM.readPackedFixed64String,
                    bw: o.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = o.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Request";
        }
      }
      class ee extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.persona_names || o.Sg(ee.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { persona_names: { n: 1, c: te, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = o.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response";
        }
      }
      class te extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steam_id || o.Sg(te.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  steam_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  persona: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = o.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
        }
      }
      class re extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.steamid || o.Sg(re.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  broadcast_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  first_segment: {
                    n: 3,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  num_segments: {
                    n: 4,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  clip_description: {
                    n: 5,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = o.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBuildClip_Request";
        }
      }
      class ie extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.broadcast_clip_id || o.Sg(ie.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = o.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBuildClip_Response";
        }
      }
      class ae extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.broadcast_clip_id || o.Sg(ae.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = o.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Request";
        }
      }
      class se extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Response";
        }
      }
      class ne extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.broadcast_clip_id || o.Sg(ne.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  start_time: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  end_time: { n: 3, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  video_description: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = o.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Request";
        }
      }
      class oe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new oe();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Response";
        }
      }
      class ce extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.broadcast_clip_id || o.Sg(ce.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = o.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Request";
        }
      }
      class le extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.broadcast_clip_id || o.Sg(le.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  video_id: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  channel_id: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  app_id: { n: 4, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  accountid_broadcaster: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  accountid_clipmaker: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  video_description: {
                    n: 7,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  start_time: {
                    n: 8,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  length_milliseconds: {
                    n: 9,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  thumbnail_path: {
                    n: 10,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = o.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Response";
        }
      }
      class de extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.broadcast_permission || o.Sg(de.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  broadcast_permission: {
                    n: 1,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  update_token: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                  broadcast_delay: {
                    n: 3,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  app_id: { n: 4, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  required_app_id: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  broadcast_chat_permission: {
                    n: 6,
                    d: 0,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  broadcast_buffer: {
                    n: 7,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  steamid: {
                    n: 8,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  chat_rate_limit: {
                    n: 9,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  enable_replay: {
                    n: 10,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  is_partner_chat_only: {
                    n: 11,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  wordban_list: {
                    n: 12,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = o.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Request";
        }
      }
      class me extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Response";
        }
      }
      class ue extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.ip || o.Sg(ue.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  ip: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  steamid: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = o.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetRTMPInfo_Request";
        }
      }
      class Be extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.broadcast_permission || o.Sg(Be.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  broadcast_permission: {
                    n: 1,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  rtmp_host: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  rtmp_token: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  broadcast_delay: {
                    n: 4,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  app_id: { n: 5, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  required_app_id: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  broadcast_chat_permission: {
                    n: 7,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  broadcast_buffer: {
                    n: 8,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  steamid: {
                    n: 9,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  chat_rate_limit: {
                    n: 10,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  enable_replay: {
                    n: 11,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  is_partner_chat_only: {
                    n: 12,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  wordban_list: {
                    n: 13,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = o.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetRTMPInfo_Response";
        }
      }
      class be extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.row_limit || o.Sg(be.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  row_limit: {
                    n: 1,
                    d: 100,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  start_time: {
                    n: 2,
                    d: 0,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  upload_id: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  steamid: {
                    n: 4,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  session_id: {
                    n: 5,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = o.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Request";
        }
      }
      class ge extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.upload_stats || o.Sg(ge.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: { upload_stats: { n: 1, c: _e, r: !0, q: !0 } },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = o.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response";
        }
      }
      class _e extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.upload_result || o.Sg(_e.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  upload_result: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  time_stopped: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  seconds_uploaded: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  max_viewers: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  resolution_x: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  resolution_y: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  avg_bandwidth: {
                    n: 7,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  total_bytes: {
                    n: 8,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  app_id: { n: 9, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  total_unique_viewers: {
                    n: 10,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  total_seconds_watched: {
                    n: 11,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  time_started: {
                    n: 12,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  upload_id: {
                    n: 13,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  local_address: {
                    n: 14,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  remote_address: {
                    n: 15,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  frames_per_second: {
                    n: 16,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  num_representations: {
                    n: 17,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  app_name: {
                    n: 18,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  is_replay: { n: 19, br: o.qM.readBool, bw: o.gp.writeBool },
                  session_id: {
                    n: 20,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = o.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
        }
      }
      class Me extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.upload_id || o.Sg(Me.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  upload_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = o.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Request";
        }
      }
      class we extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.viewer_stats || o.Sg(we.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  viewer_stats: { n: 1, c: ye, r: !0, q: !0 },
                  country_stats: { n: 2, c: pe, r: !0, q: !0 },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = o.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response";
        }
      }
      class ye extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.time || o.Sg(ye.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  time: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  num_viewers: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = o.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
        }
      }
      class pe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.country_code || o.Sg(pe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  country_code: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  num_viewers: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = o.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
        }
      }
      class fe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.webrtc_session_id || o.Sg(fe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  started: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                  offer: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                  resolution_x: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  resolution_y: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  fps: { n: 6, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = o.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStartResult_Request";
        }
      }
      class ze extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ze();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStartResult_Response";
        }
      }
      class Se extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.webrtc_session_id || o.Sg(Se.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = o.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Request";
        }
      }
      class Re extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Re();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Response";
        }
      }
      class he extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.broadcaster_steamid || o.Sg(he.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  answer: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = o.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Request";
        }
      }
      class We extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Response";
        }
      }
      class Fe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.sdp_mid || o.Sg(Fe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  sdp_mid: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  sdp_mline_index: {
                    n: 2,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  candidate: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = o.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTC_Candidate";
        }
      }
      class je extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.webrtc_session_id || o.Sg(je.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  candidate: { n: 2, c: Fe },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = o.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddHostCandidate_Request";
        }
      }
      class Te extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Te();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddHostCandidate_Response";
        }
      }
      class qe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.broadcaster_steamid || o.Sg(qe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  candidate: { n: 3, c: Fe },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = o.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Request";
        }
      }
      class ve extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ve();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Response";
        }
      }
      class Oe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.broadcaster_steamid || o.Sg(Oe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  candidate_generation: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = o.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Request";
        }
      }
      class Ue extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.candidate_generation || o.Sg(Ue.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  candidate_generation: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  candidates: { n: 2, c: Fe, r: !0, q: !0 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = o.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Response";
        }
      }
      class Ie extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.broadcast_session_id || o.Sg(Ie.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = o.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCNeedTURNServer_Notification";
        }
      }
      class Ce extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.cellid || o.Sg(Ce.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  cellid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = o.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCLookupTURNServer_Request";
        }
      }
      class xe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.turn_server || o.Sg(xe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  turn_server: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = o.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCLookupTURNServer_Response";
        }
      }
      class Ne extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.broadcast_session_id || o.Sg(Ne.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  turn_server: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = o.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCHaveTURNServer_Notification";
        }
      }
      class ke extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.broadcast_session_id || o.Sg(ke.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  viewer_steamid: {
                    n: 3,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  viewer_token: {
                    n: 4,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = o.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStart_Notification";
        }
      }
      class Ge extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.broadcast_session_id || o.Sg(Ge.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  answer: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = o.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Notification";
        }
      }
      class Pe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.broadcast_session_id || o.Sg(Pe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  candidate: { n: 3, c: Fe },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = o.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Notification";
        }
      }
      var Ve, Ae;
      !(function (e) {
        (e.BeginBroadcastSession = function (e, t, r) {
          return e.SendMsg(
            "Broadcast.BeginBroadcastSession#1",
            (0, c.I8)(b, t, r),
            g,
            { ePrivilege: 1 },
          );
        }),
          (e.EndBroadcastSession = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, c.I8)(_, t, r),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.StartBroadcastUpload = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, c.I8)(w, t, r),
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.NotifyBroadcastUploadStop = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, c.I8)(P, t),
              { ePrivilege: 1 },
            );
          }),
          (e.WatchBroadcast = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, c.I8)(h, t, r),
              W,
              { ePrivilege: 2 },
            );
          }),
          (e.HeartbeatBroadcast = function (e, t) {
            return e.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, c.I8)(F, t),
              { ePrivilege: 2 },
            );
          }),
          (e.StopWatchingBroadcast = function (e, t) {
            return e.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, c.I8)(j, t),
              { ePrivilege: 2 },
            );
          }),
          (e.GetBroadcastStatus = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, c.I8)(f, t, r),
              z,
              { ePrivilege: 2 },
            );
          }),
          (e.GetBroadcastThumbnail = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, c.I8)(S, t, r),
              R,
              { ePrivilege: 2 },
            );
          }),
          (e.InviteToBroadcast = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, c.I8)(T, t, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.SendBroadcastStateToServer = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, c.I8)(v, t, r),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, c.I8)(A, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetBroadcastChatInfo = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, c.I8)(H, t, r),
              E,
              { ePrivilege: 2 },
            );
          }),
          (e.PostChatMessage = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, c.I8)(D, t, r),
              L,
              { ePrivilege: 3 },
            );
          }),
          (e.UpdateChatMessageFlair = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, c.I8)(K, t, r),
              X,
              { ePrivilege: 1 },
            );
          }),
          (e.MuteBroadcastChatUser = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, c.I8)(Z, t, r),
              Q,
              { ePrivilege: 3 },
            );
          }),
          (e.RemoveUserChatText = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, c.I8)(Y, t, r),
              $,
              { ePrivilege: 3 },
            );
          }),
          (e.GetBroadcastChatUserNames = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, c.I8)(J, t, r),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.StartBuildClip = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, c.I8)(re, t, r),
              ie,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBuildClipStatus = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, c.I8)(ae, t, r),
              se,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetClipDetails = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, c.I8)(ne, t, r),
              oe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetClipDetails = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, c.I8)(ce, t, r),
              le,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetRTMPInfo = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, c.I8)(de, t, r),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.GetRTMPInfo = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, c.I8)(ue, t, r),
              Be,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, c.I8)(Ne, t),
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCStartResult = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, c.I8)(fe, t, r),
              ze,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCStopped = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, c.I8)(Se, t, r),
              Re,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCSetAnswer = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, c.I8)(he, t, r),
              We,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCLookupTURNServer = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, c.I8)(Ce, t, r),
              xe,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCAddHostCandidate = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, c.I8)(je, t, r),
              Te,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCAddViewerCandidate = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, c.I8)(qe, t, r),
              ve,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCGetHostCandidates = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, c.I8)(Oe, t, r),
              Ue,
              { ePrivilege: 1 },
            );
          }),
          (e.GetBroadcastUploadStats = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, c.I8)(be, t, r),
              ge,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBroadcastViewerStats = function (e, t, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, c.I8)(Me, t, r),
              we,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(Ve || (Ve = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: U,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: I,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: p,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: C,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: x,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: V,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: N,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: k,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: G,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: Ie,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: ke,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: Ge,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Pe,
            });
        })(Ae || (Ae = {}));
    },
    45285: (e, t, r) => {
      "use strict";
      r.d(t, { Mc: () => i });
      var i = {};
      r.r(i),
        r.d(i, {
          Ms: () => g,
          n6: () => B,
          U6: () => l,
          kz: () => u,
          ej: () => w,
          R: () => M,
          mZ: () => _,
          Is: () => b,
          B_: () => d,
          bW: () => m,
          iy: () => c,
        });
      var a = r(80613),
        s = r.n(a),
        n = r(89068),
        o = r(56545);
      const c = 1,
        l = 2,
        d = 3,
        m = 4,
        u = 5,
        B = 7,
        b = 9,
        g = 16,
        _ = 17,
        M = 18,
        w = 19;
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.impressions || n.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { impressions: { n: 1, c: p, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CProductImpressionsFromClient_Notification";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.type || n.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  type: { n: 1, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  num_impressions: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CProductImpressionsFromClient_Notification_Impression";
        }
      }
      var f;
      !(function (e) {
        e.ReportProductImpressionsFromClient = function (e, t) {
          return e.SendNotification(
            "ExperimentService.ReportProductImpressionsFromClient#1",
            (0, o.I8)(y, t),
            { ePrivilege: 1 },
          );
        };
      })(f || (f = {}));
    },
    92317: (e, t, r) => {
      "use strict";
      r.d(t, { Qg: () => M, h3: () => _ });
      var i = r(66418),
        a = r(80902),
        s = r(75233),
        n = r(51614),
        o = r(90626),
        c = r(37085);
      const l = "saleaction/giveawayregistration",
        d = "saleaction/creategiveawayregistration";
      async function m(e) {
        const t = i.TS.STORE_BASE_URL + d,
          r = await fetch(t, {
            method: "POST",
            credentials: "include",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: e }),
          });
        return await u("UpdateUserGiveawayRegistration", e, t, r);
      }
      async function u(e, t, r, i) {
        if (!i.ok) throw new Error(r + " answered " + i.status);
        const a = await i.json();
        if (a?.success == c.R && a.registration) return a.registration;
        throw new Error(e + " on " + t + " answered " + a?.success);
      }
      const B = { registered: !1 };
      function b(e, t) {
        return ["sale", "giveawayregistration", e, t];
      }
      function g(e, t) {
        return {
          queryKey: b(e, t),
          queryFn: () =>
            (async function (e) {
              const t =
                  i.TS.STORE_BASE_URL + l + "?name=" + encodeURIComponent(e),
                r = await fetch(t, { credentials: "include" });
              return await u("GetUserGiveawayRegistration", e, t, r);
            })(e),
          enabled: Boolean(e),
          retry: !1,
        };
      }
      function _(e) {
        const { data: t, isError: r } = (0, a.I)(g(e, i.iA.accountid));
        return r ? B : t;
      }
      function M() {
        const e = (0, s.jE)(),
          { mutateAsync: t } = (0, n.n)({
            mutationFn: m,
            onSuccess: (t, r) => e.setQueryData(b(r, i.iA.accountid), t),
          });
        return {
          fnCreateRegistration: (0, o.useCallback)(
            async (e) => {
              try {
                return await t(e);
              } catch (t) {
                return (
                  console.error("Registering for giveaway " + e + " failed", t),
                  B
                );
              }
            },
            [t],
          ),
        };
      }
    },
    62658: (e, t, r) => {
      "use strict";
      r.d(t, { fB: () => l, uj: () => c });
      var i = r(80902),
        a = r(37085),
        s = r(78327),
        n = r(43882);
      function o(e) {
        return ["video", "vod", e];
      }
      function c(e) {
        return {
          queryKey: o(e),
          queryFn: ({ signal: t }) =>
            (async function (e, t) {
              const r = s.TS.STORE_BASE_URL + "video/details/" + e + "/0",
                i = await fetch(r, { credentials: "include", signal: t });
              if (!i.ok) throw new Error(r + " answered " + i.status);
              const o = await i.json();
              if (o?.success != a.R && "ready" != o?.success)
                throw new Error(
                  "video/details on " + e + " answered " + o?.success,
                );
              o.bookmark
                ? n.t.Get().SetBookmarkForApp(e, o.bookmark)
                : n.t.Get().InitializeBookmarkForApp(e);
              return { appid: e, video_url: o.video_url, bookmark: o.bookmark };
            })(e, t),
          retry: !1,
        };
      }
      function l(e) {
        const { data: t, isPending: r } = (0, i.I)(c(e));
        return { vodInfo: t, bLoading: r };
      }
    },
    43882: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => W, t: () => h });
      var i,
        a,
        s,
        n = r(41735),
        o = r.n(n),
        c = r(37085),
        l = r(56545),
        d = r(72034),
        m = r(80613),
        u = r.n(m),
        B = r(89068);
      class b extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.video_id || B.Sg(b.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  video_id: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  client_cellid: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = B.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class g extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.video_id || B.Sg(g.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  video_id: {
                    n: 1,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  video_url: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
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
          let t = new (u().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class _ extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.encryption_key || B.Sg(_.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: B.qM.readBytes,
                    bw: B.gp.writeBytes,
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
          let t = new (u().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class M extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.app_id || B.Sg(M.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  app_id: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
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
          let t = new (u().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class w extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.app_id || B.Sg(w.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  app_id: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: B.qM.readString,
                    bw: B.gp.writeString,
                  },
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
          let t = new (u().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class y extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.app_id || B.Sg(y.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  app_id: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
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
          let t = new (u().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class p extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.bookmarks || B.Sg(p.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { bookmarks: { n: 1, c: y, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = B.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class f extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appids || B.Sg(f.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                  updated_since: {
                    n: 2,
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
          let t = new (u().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class z extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.bookmarks || B.Sg(z.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { bookmarks: { n: 1, c: y, r: !0, q: !0 } },
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
          let t = new (u().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (e) {
        (e.ClientGetVideoURL = function (e, t, r) {
          return e.SendMsg("Video.ClientGetVideoURL#1", (0, l.I8)(b, t, r), g, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, t) {
            return e.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, l.I8)(p, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetVideoBookmarks = function (e, t, r) {
            return e.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, l.I8)(f, t, r),
              z,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: _,
          };
        })(a || (a = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, t, r) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, l.I8)(M, t, r),
              w,
              { ePrivilege: 1 },
            );
          };
        })(s || (s = {}));
      var S = r(68797),
        R = r(78327);
      class h {
        static s_VODStore;
        m_transport = null;
        m_mapBookmarks = new Map();
        SetBookmarkForApp(e, t) {
          this.ValidateBookmarkData(t)
            ? this.m_mapBookmarks.set(e, y.fromObject(t))
            : this.InitializeBookmarkForApp(e);
        }
        ValidateBookmarkData(e) {
          const t = e;
          return (
            "object" == typeof t &&
            Number.isInteger(t.playback_position_in_seconds) &&
            Number.isInteger(t.app_id)
          );
        }
        InitializeBookmarkForApp(e) {
          if (!this.m_mapBookmarks.has(e)) {
            let t = {
              app_id: e,
              playback_position_in_seconds: 0,
              video_track_id: "0",
              audio_track_id: "0",
              timedtext_track_id: "0",
              hide_from_watch_history: !1,
              hide_from_library: !1,
            };
            this.m_mapBookmarks.set(e, new y(t));
          }
        }
        GetBookmarkPlayTimeInSeconds(e) {
          let t = this.m_mapBookmarks.get(e);
          if (t) {
            let e = t.playback_position_in_seconds();
            if (Number.isInteger(e)) return e;
          }
          return 0;
        }
        async SendBookMarkedTimeToServer(e, t, r, a, s) {
          if (!R.iA.logged_in) return;
          if (!this.m_transport)
            return void console.warn(
              "CVideoBookmarkStore:SetBookMark no auth token / transport",
            );
          const n = l.w.Init(p);
          let o = this.m_mapBookmarks.get(e);
          if (o) {
            let c = !1;
            o.app_id() != e && ((c = !0), o.set_app_id(e)),
              o.playback_position_in_seconds() != t &&
                ((c = !0), o.set_playback_position_in_seconds(t)),
              (r = r || "0"),
              o.video_track_id() != r && (o.set_video_track_id(r), (c = !0)),
              (a = a || "0"),
              o.audio_track_id() != a && (o.set_audio_track_id(a), (c = !0)),
              (s = s || "0") != o.timedtext_track_id() &&
                (o.set_timedtext_track_id(s), (c = !0)),
              c &&
                (n.Body().add_bookmarks(o),
                i.SetVideoBookmark(this.m_transport, n));
          }
        }
        static Get() {
          return (
            h.s_VODStore || ((h.s_VODStore = new h()), h.s_VODStore.Init()),
            h.s_VODStore
          );
        }
        Init() {
          R.iA.logged_in && this.LoadWatchVideoOAuthToken();
        }
        async LoadWatchVideoOAuthToken() {
          const e =
              "community" == (0, R.yK)()
                ? R.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                : R.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
            t = {};
          try {
            let r = await o().get(e, { params: t, withCredentials: !0 });
            if (
              r &&
              200 == r.status &&
              r.data &&
              r.data.success == c.R &&
              r.data.webapi_token
            )
              return void (this.m_transport = new d.D(
                R.TS.WEBAPI_BASE_URL,
                r.data.webapi_token,
              ).GetServiceTransport());
          } catch (e) {
            let t = (0, S.H)(e);
            console.error(
              "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                t.strErrorMsg,
              t,
            );
          }
        }
      }
      class W {
        m_appid;
        constructor(e) {
          this.m_appid = e;
        }
        async SetBookmark(e, t, r, i) {
          R.iA.logged_in &&
            h
              .Get()
              .SendBookMarkedTimeToServer(this.m_appid, Math.floor(e), t, r, i);
        }
        GetBeginPlaytime() {
          return R.iA.logged_in
            ? h.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
            : 0;
        }
      }
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => b });
      var i = r(7850),
        a = r(90626),
        s = r(22837),
        n = r(38390),
        o = r(52038),
        c = r(61859),
        l = r(61336),
        d = r(66418),
        m = r(15392),
        u = r(17267),
        B = r(67165);
      function b(e) {
        const { gidEvent: t } = e,
          r = (0, n.RR)(t);
        return r
          ? (0, i.jsx)(g, {
              event: r,
              lang: (0, s.sfN)(d.TS.LANGUAGE),
              href: (0, l.k2)((0, B.n4)(r) ?? ""),
            })
          : null;
      }
      function g(e) {
        const { event: t, lang: r, href: s } = e,
          [n, l] = (0, a.useMemo)(() => {
            const e = t.jsondata.localized_sale_product_banner,
              i = t.jsondata.localized_sale_product_mobile_banner;
            if (e?.length && i?.length) {
              const a = c.NT.GetWithFallback(e, r),
                s = c.NT.GetWithFallback(i, r);
              if (a?.length && s?.length)
                return [
                  u.zU.GenerateURLFromHashAndExt(t.clanSteamID, a),
                  u.zU.GenerateURLFromHashAndExt(t.clanSteamID, s),
                ];
            }
            return [void 0, void 0];
          }, [t, r]);
        return n?.length && l?.length
          ? (0, i.jsxs)("a", {
              href: s,
              className: m.Link,
              children: [
                (0, i.jsx)("img", {
                  src: n,
                  className: (0, o.A)(m.Banner, m.Big),
                }),
                (0, i.jsx)("img", {
                  src: l,
                  className: (0, o.A)(m.Banner, m.Mobile),
                }),
              ],
            })
          : null;
      }
    },
  },
]);

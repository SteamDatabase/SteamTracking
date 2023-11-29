/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3863],
  {
    52430: (e, r, t) => {
      t.d(r, { qS: () => M, xG: () => T });
      var i = t(45878),
        n = t(50995),
        a = t(68333);
      const s = i.Message;
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.representation_name || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  representation_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  horizontal_resolution: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  vertical_resolution: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  frame_rate: {
                    n: 5,
                    br: n.FE.readDouble,
                    bw: n.Xc.writeDouble,
                  },
                  bandwidth: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  audio_sample_rate: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  frame_rate_string: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  codec: { n: 9, br: n.FE.readString, bw: n.Xc.writeString },
                  audio_channel_config: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingRepresentation";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.component_name || n.aR(c.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  component_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  contents: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  segment_size: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  file_type: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  representations: { n: 5, c: l, r: !0, q: !0 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingComponent";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.steamid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  app_id: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  num_segments: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  length_milliseconds: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  segment_duration_timescale: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  segment_duration: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  components: { n: 7, c, r: !0, q: !0 },
                  start_time_ms: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgVideoGameRecordingDef";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.segment_number || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  segment_number: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  segment_size_bytes: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentInfo";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.segment_info || n.aR(d.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  segment_info: { n: 1, c: m },
                  url_host: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  url_path: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  use_https: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  request_headers: { n: 5, c: u, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.name || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  name: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  value: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
        }
      }
      const B = i.Message;
      class b extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.video_manager_clip_id || n.aR(b.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  video_manager_clip_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  video_manager_video_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  server_timeline_id: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideoManagerClipID";
        }
      }
      class g extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.clip_id || n.aR(g.M()),
            B.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  clip_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gameid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  appid: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  date_recorded: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  clip_title: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  clip_description: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  total_file_size_bytes: {
                    n: 7,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  permission: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  video_ids: { n: 9, c: b, r: !0, q: !0 },
                  owner_steamid: {
                    n: 10,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  upload_complete: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecordingClip";
        }
      }
      class y extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || n.aR(y.M()),
            B.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clip: { n: 2, c: g },
                  video_def: { n: 3, c: o, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Request";
        }
      }
      class _ extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.clip || n.aR(_.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m || (_.sm_m = { proto: _, fields: { clip: { n: 1, c: g } } }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_CreateShareClip_Response";
        }
      }
      class w extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || n.aR(w.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clip_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Request";
        }
      }
      class p extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_DeleteSharedClip_Response";
        }
      }
      class z extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || n.aR(z.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clip_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clip_title: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  clip_description: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  permission: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_UpdateSharedClip_Request";
        }
      }
      class F extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_UpdateSharedClip_Response";
        }
      }
      class f extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || n.aR(f.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSharedClips_Request";
        }
      }
      class S extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clips || n.aR(S.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { clips: { n: 1, c: g, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSharedClips_Response";
        }
      }
      class M extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || n.aR(M.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clip_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Request";
        }
      }
      class R extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.clip || n.aR(R.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m || (R.sm_m = { proto: R, fields: { clip: { n: 1, c: g } } }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRecording_GetSingleSharedClip_Response";
        }
      }
      class h extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.recording_id || n.aR(h.M()),
            B.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  recording_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  segments_to_store: { n: 4, c: m, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Request";
        }
      }
      class W extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.segments_needed || n.aR(W.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  segments_needed: { n: 1, c: d, r: !0, q: !0 },
                  call_again: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_BeginGameRecordingSegmentsUpload_Response";
        }
      }
      class j extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.recording_id || n.aR(j.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  recording_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  component_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  representation_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  first_segment_number: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  num_segments: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  upload_result: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Request";
        }
      }
      class O extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_CommitGameRecordingSegmentsUpload_Response";
        }
      }
      var T, C;
      !(function (e) {
        (e.CreateShareClip = function (e, r) {
          return e.SendMsg(
            "GameRecordingClip.CreateShareClip#1",
            (0, a.MD)(y, r),
            _,
            { ePrivilege: 1 },
          );
        }),
          (e.UpdateSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.UpdateSharedClip#1",
              (0, a.MD)(z, r),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.DeleteSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, a.MD)(w, r),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSharedClips = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.GetSharedClips#1",
              (0, a.MD)(f, r),
              S,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetSingleSharedClip = function (e, r) {
            return e.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, a.MD)(M, r),
              R,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          });
      })(T || (T = {})),
        (function (e) {
          (e.BeginGameRecordingSegmentsUpload = function (e, r) {
            return e.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, a.MD)(h, r),
              W,
              { ePrivilege: 1 },
            );
          }),
            (e.CommitGameRecordingSegmentsUpload = function (e, r) {
              return e.SendMsg(
                "VideoClip.CommitGameRecordingSegmentsUpload#1",
                (0, a.MD)(j, r),
                O,
                { ePrivilege: 1 },
              );
            });
        })(C || (C = {}));
    },
  },
]);

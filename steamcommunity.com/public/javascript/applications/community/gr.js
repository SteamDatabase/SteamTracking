/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [13156],
    {
      97235: (Y, qr, _) => {
        "use strict";
        _.r(qr),
          _.d(qr, {
            GameRecordingClipContent: () => Wl,
            default: () => zc,
            useTimelineLoaderForCommunityClip: () => ql,
          });
        var u = _(7850),
          S = _(90626),
          ze = _(68312),
          we = _(88942),
          $ = _(35038),
          p = _(80613),
          d = _.n(p),
          r = _(75245),
          E = Object.defineProperty,
          O = (s, t, i) =>
            t in s
              ? E(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          J = (s, t, i) => O(s, typeof t != "symbol" ? t + "" : t, i);
        const Re = class Xe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xe.prototype.representation_name || r.Sg(Xe.M()),
              p.Message.initialize(this, t, 0, -1, [11], null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    representation_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    horizontal_resolution: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vertical_resolution: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    frame_rate: {
                      n: 5,
                      br: r.qM.readDouble,
                      bw: r.gp.writeDouble,
                    },
                    bandwidth: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    audio_sample_rate: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    frame_rate_string: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    codec: { n: 9, br: r.qM.readString, bw: r.gp.writeString },
                    audio_channel_config: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    segment_info: { n: 11, c: le, r: !0, q: !0 },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = r.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(t = !1) {
            return Xe.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(Xe.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Xe.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new Xe();
            return Xe.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Xe.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Xe.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingRepresentation";
          }
        };
        J(Re, "sm_m"), J(Re, "sm_mbf");
        let ae = Re;
        const U = class Ze extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ze.prototype.component_name || r.Sg(Ze.M()),
              p.Message.initialize(this, t, 0, -1, [5], null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    component_name: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    contents: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    segment_size: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    file_type: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    representations: { n: 5, c: ae, r: !0, q: !0 },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = r.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(t = !1) {
            return Ze.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(Ze.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Ze.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new Ze();
            return Ze.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Ze.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Ze.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingComponent";
          }
        };
        J(U, "sm_m"), J(U, "sm_mbf");
        let Lr = U;
        const ee = class Ke extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ke.prototype.steamid || r.Sg(Ke.M()),
              p.Message.initialize(this, t, 0, -1, [7], null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    app_id: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    num_segments: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    segment_duration_timescale: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    segment_duration: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    components: { n: 7, c: Lr, r: !0, q: !0 },
                    start_time_ms: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    start_offset_in_timeline_ms: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = r.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(t = !1) {
            return Ke.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(Ke.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Ke.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new Ke();
            return Ke.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Ke.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Ke.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingDef";
          }
        };
        J(ee, "sm_m"), J(ee, "sm_mbf");
        let ue = ee;
        const _e = class Qe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qe.prototype.segment_number || r.Sg(Qe.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    segment_number: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    segment_size_bytes: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    component_name: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    representation_name: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = r.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(t = !1) {
            return Qe.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(Qe.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Qe.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new Qe();
            return Qe.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Qe.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Qe.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentInfo";
          }
        };
        J(_e, "sm_m"), J(_e, "sm_mbf");
        let le = _e;
        const Pe = class Je extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Je.prototype.segment_info || r.Sg(Je.M()),
              p.Message.initialize(this, t, 0, -1, [5], null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    segment_info: { n: 1, c: le },
                    url_host: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    url_path: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    use_https: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    request_headers: { n: 5, c: Yn, r: !0, q: !0 },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = r.w0(Je.M())), Je.sm_mbf;
          }
          toObject(t = !1) {
            return Je.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(Je.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Je.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new Je();
            return Je.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Je.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Je.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo";
          }
        };
        J(Pe, "sm_m"), J(Pe, "sm_mbf");
        let bi = Pe;
        const Ae = class Ye extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ye.prototype.name || r.Sg(Ye.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    value: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = r.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(t = !1) {
            return Ye.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(Ye.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(Ye.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new Ye();
            return Ye.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(Ye.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(Ye.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
          }
        };
        J(Ae, "sm_m"), J(Ae, "sm_mbf");
        let Yn = Ae;
        var qi = Object.defineProperty,
          Ni = (s, t, i) =>
            t in s
              ? qi(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          Be = (s, t, i) => Ni(s, typeof t != "symbol" ? t + "" : t, i);
        const Ui = class $e extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $e.prototype.video_manager_clip_id || r.Sg($e.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    video_manager_clip_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    video_manager_video_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    server_timeline_id: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    manifest_url: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    duration_ms: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    start_offset_ms: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = r.w0($e.M())), $e.sm_mbf;
          }
          toObject(t = !1) {
            return $e.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT($e.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq($e.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new $e();
            return $e.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj($e.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0($e.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideoManagerClipID";
          }
        };
        Be(Ui, "sm_m"), Be(Ui, "sm_mbf");
        let $i = Ui;
        const Sn = class et extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.clip_id || r.Sg(et.M()),
              p.Message.initialize(this, t, 0, -1, [9], null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_file_size_bytes: {
                      n: 7,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    video_ids: { n: 9, c: $i, r: !0, q: !0 },
                    owner_steamid: {
                      n: 10,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    upload_complete: {
                      n: 11,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    duration_ms: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = r.w0(et.M())), et.sm_mbf;
          }
          toObject(t = !1) {
            return et.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(et.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new et();
            return et.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(et.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(et.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingClip";
          }
        };
        Be(Sn, "sm_m"), Be(Sn, "sm_mbf");
        let en = Sn;
        const Mn = class tt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.clip || r.Sg(tt.M()),
              p.Message.initialize(this, t, 0, -1, [3], null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    clip: { n: 2, c: en },
                    video_def: { n: 3, c: ue, r: !0, q: !0 },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = r.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(tt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new tt();
            return tt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(tt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(tt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CreateShareClip_Request";
          }
        };
        Be(Mn, "sm_m"), Be(Mn, "sm_mbf");
        let fe = Mn;
        const f = class rt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rt.prototype.clip || r.Sg(rt.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = { proto: rt, fields: { clip: { n: 1, c: en } } }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = r.w0(rt.M())), rt.sm_mbf;
          }
          toObject(t = !1) {
            return rt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(rt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(rt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new rt();
            return rt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(rt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(rt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CreateShareClip_Response";
          }
        };
        Be(f, "sm_m"), Be(f, "sm_mbf");
        let b = f;
        const R = class it extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              it.prototype.clip_id || r.Sg(it.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    clip_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = r.w0(it.M())), it.sm_mbf;
          }
          toObject(t = !1) {
            return it.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(it.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(it.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new it();
            return it.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(it.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(it.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteSharedClip_Request";
          }
        };
        Be(R, "sm_m"), Be(R, "sm_mbf");
        let C = R;
        class I extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new I();
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new I();
            return I.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteSharedClip_Response";
          }
        }
        const j = class nt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.clip_id || r.Sg(nt.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    clip_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = r.w0(nt.M())), nt.sm_mbf;
          }
          toObject(t = !1) {
            return nt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(nt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(nt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new nt();
            return nt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(nt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(nt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetSingleSharedClip_Request";
          }
        };
        Be(j, "sm_m"), Be(j, "sm_mbf");
        let N = j;
        const L = class at extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              at.prototype.clip || r.Sg(at.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = { proto: at, fields: { clip: { n: 1, c: en } } }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = r.w0(at.M())), at.sm_mbf;
          }
          toObject(t = !1) {
            return at.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(at.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(at.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new at();
            return at.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(at.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(at.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetSingleSharedClip_Response";
          }
        };
        Be(L, "sm_m"), Be(L, "sm_mbf");
        let se = L;
        const de = class st extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.recording_id || r.Sg(st.M()),
              p.Message.initialize(this, t, 0, -1, [4], null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    component_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    representation_name: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    segments_to_store: { n: 4, c: le, r: !0, q: !0 },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = r.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(st.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new st();
            return st.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(st.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(st.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_BeginGameRecordingSegmentsUpload_Request";
          }
        };
        Be(de, "sm_m"), Be(de, "sm_mbf");
        let je = de;
        const Nr = class ot extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ot.prototype.segments_needed || r.Sg(ot.M()),
              p.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    segments_needed: { n: 1, c: bi, r: !0, q: !0 },
                    call_again: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = r.w0(ot.M())), ot.sm_mbf;
          }
          toObject(t = !1) {
            return ot.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(ot.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(ot.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new ot();
            return ot.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(ot.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(ot.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_BeginGameRecordingSegmentsUpload_Response";
          }
        };
        Be(Nr, "sm_m"), Be(Nr, "sm_mbf");
        let yi = Nr;
        const Ci = class lt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.recording_id || r.Sg(lt.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    component_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    representation_name: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    first_segment_number: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    num_segments: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    upload_result: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = r.w0(lt.M())), lt.sm_mbf;
          }
          toObject(t = !1) {
            return lt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(lt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(lt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new lt();
            return lt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(lt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(lt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_CommitGameRecordingSegmentsUpload_Request";
          }
        };
        Be(Ci, "sm_m"), Be(Ci, "sm_mbf");
        let Ai = Ci;
        class Hr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Hr.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new Hr();
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new Hr();
            return Hr.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_CommitGameRecordingSegmentsUpload_Response";
          }
        }
        const Li = class mt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              mt.prototype.recording_id || r.Sg(mt.M()),
              p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = r.w0(mt.M())), mt.sm_mbf;
          }
          toObject(t = !1) {
            return mt.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(mt.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(mt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new mt();
            return mt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(mt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(mt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
          }
        };
        Be(Li, "sm_m"), Be(Li, "sm_mbf");
        let Hi = Li;
        const Vi = class ct extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ct.prototype.segments_needed || r.Sg(ct.M()),
              p.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: { segments_needed: { n: 1, c: bi, r: !0, q: !0 } },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = r.w0(ct.M())), ct.sm_mbf;
          }
          toObject(t = !1) {
            return ct.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(ct.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(ct.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new ct();
            return ct.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(ct.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(ct.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
          }
        };
        Be(Vi, "sm_m"), Be(Vi, "sm_mbf");
        let Ti = Vi;
        const ui = class ut extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ut.prototype.recording_id || r.Sg(ut.M()),
              p.Message.initialize(this, t, 0, -1, [2], null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    segments_uploaded: { n: 2, c: le, r: !0, q: !0 },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = r.w0(ut.M())), ut.sm_mbf;
          }
          toObject(t = !1) {
            return ut.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(ut.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(ut.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new ut();
            return ut.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(ut.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(ut.M(), t, i);
          }
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingCommitSegmentUploads_Request";
          }
        };
        Be(ui, "sm_m"), Be(ui, "sm_mbf");
        let tn = ui;
        class vi extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), p.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return vi.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new vi();
          }
          static deserializeBinary(t) {
            let i = new (d().BinaryReader)(t),
              n = new vi();
            return vi.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (d().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (d().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingCommitSegmentUploads_Response";
          }
        }
        var $n;
        ((s) => {
          function t(l, m, c) {
            return l.SendMsg(
              "GameRecordingClip.CreateShareClip#1",
              (0, $.I8)(fe, m, c),
              b,
              { ePrivilege: 1 },
            );
          }
          s.CreateShareClip = t;
          function i(l, m, c) {
            return l.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, $.I8)(C, m, c),
              I,
              { ePrivilege: 1 },
            );
          }
          s.DeleteSharedClip = i;
          function n(l, m, c) {
            return l.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, $.I8)(N, m, c),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetSingleSharedClip = n;
        })($n || ($n = {}));
        var Ya;
        ((s) => {
          function t(m, c, g) {
            return m.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, $.I8)(je, c, g),
              yi,
              { ePrivilege: 1 },
            );
          }
          s.BeginGameRecordingSegmentsUpload = t;
          function i(m, c, g) {
            return m.SendMsg(
              "VideoClip.CommitGameRecordingSegmentsUpload#1",
              (0, $.I8)(Ai, c, g),
              Hr,
              { ePrivilege: 1 },
            );
          }
          s.CommitGameRecordingSegmentsUpload = i;
          function n(m, c, g) {
            return m.SendMsg(
              "VideoClip.GetNextBatchOfSegmentsToUpload#1",
              (0, $.I8)(Hi, c, g),
              Ti,
              { ePrivilege: 1 },
            );
          }
          s.GetNextBatchOfSegmentsToUpload = n;
          function l(m, c, g) {
            return m.SendMsg(
              "VideoClip.CommitSegmentUploads#1",
              (0, $.I8)(tn, c, g),
              vi,
              { ePrivilege: 1 },
            );
          }
          s.CommitSegmentUploads = l;
        })(Ya || (Ya = {}));
        var x = _(65946),
          W = _(14947);
        let bn = null;
        function to(s) {
          if (bn) {
            console.error("Attempt to set timeline marker hook a second time");
            return;
          }
          bn = s;
        }
        function $a(s, t) {
          return bn
            ? bn(s, t)
            : (console.error(
                "useGameMarkerFromID called in a context where the hook isn't defined.",
              ),
              null);
        }
        function X() {
          return window.g_GRS;
        }
        async function ro(s, t, i) {
          if (!X()) {
            const [{ CGameRecordingStore: n }] = await Promise.all([
              _.e(90146).then(_.bind(_, 90146)),
            ]);
            i && to(i);
            let l = new n();
            await l.Init(s, t), (window.g_GRS = l);
          }
        }
        function io() {
          if (X() != null) {
            const s = X();
            return {
              bLoading: s.BLoadingAppsWithBackgroundVideo(),
              rgApps: s.GetAppsWithBackgroundVideo(),
            };
          }
          return { bLoading: !1, rgApps: [] };
        }
        function no() {
          const [s, t] = (0, S.useState)(io());
          return (0, S.useEffect)(() => (0, W.mJ)(io, t), []), s;
        }
        function ao(s) {
          const { bLoading: t, rgApps: i } = no();
          return {
            bLoading: t,
            app: (0, S.useMemo)(() => i.find((n) => n.game_id === s), [i, s]),
          };
        }
        function P(s) {
          return X().GetTimelineLoaderForGame(s);
        }
        function Nl(s) {
          return X().GetTimelineLoaderForClip(s);
        }
        function cl(s) {
          return X().GetTimelineLoaderForSharedClip(s);
        }
        function es(s) {
          var t, i;
          return X() != null
            ? {
                bLoading: (t = X()) == null ? void 0 : t.BLoadingClips(),
                rgClipHandles: (i = X()) == null ? void 0 : i.GetClipIDs(s),
              }
            : { bLoading: !1, rgClipHandles: [] };
        }
        function Ul(s) {
          const [t, i] = useState(() => es(s));
          return useEffect(() => (i(es(s)), reaction(() => es(s), i)), [s]), t;
        }
        function Al(s) {
          return useObserver(() => {
            var t;
            return (t = X()) == null ? void 0 : t.GetClipSummaries(s);
          });
        }
        function Ll(s) {
          var t;
          return (t = X()) == null ? void 0 : t.GetClipSummary(s);
        }
        function ul(s) {
          return X() != null && s ? X().GetClipSummariesForGame(s) || [] : [];
        }
        function di(s) {
          return useObserver(() => {
            var t;
            return (t = X()) == null ? void 0 : t.GetClipSummary(s);
          });
        }
        function ts(s) {
          return useObserver(() => {
            var t;
            return s
              ? ((t = X()) == null ? void 0 : t.GetClipSummariesForGame(s)) ||
                  []
              : [];
          });
        }
        function yn(s, t, i, n, l, m) {
          return X() != null
            ? X().LoadThumbnails(s, t, i, n, l, m != null ? m : !0)
            : null;
        }
        function ea() {
          return X() != null ? { fnSaveClip: X().SaveClip } : {};
        }
        function so() {
          return X() != null ? { fnDeleteClip: X().DeleteClip } : {};
        }
        function rs() {
          return X() != null ? { fnUploadClip: X().UploadClip } : {};
        }
        function is() {
          return X() != null
            ? {
                fnExportClip: X().ExportClip,
                fnUpdateExportPath: X().UpdateClipExportPath,
              }
            : {};
        }
        function Tn(s, t, i, n) {
          return X() != null ? X().TakeScreenshot(s, t, i.valMS, n) : null;
        }
        function ns(s) {
          return useObserver(() => {
            if (X() != null) return X().GetClipExportProgress(s);
          });
        }
        function as() {
          return useObserver(() => {
            if (X() != null) return X().GetCurrentExportingClip();
          });
        }
        function ss() {
          return X() != null
            ? {
                fnStartRecording: X().StartRecording,
                fnStopRecording: X().StopRecording,
              }
            : {};
        }
        function os() {
          if (X() != null) return X().SwitchRecordedGame;
        }
        function ls(s, t) {
          return X() != null
            ? X().RegisterManualRecordingCallback(s, t)
            : () => {};
        }
        function ms() {
          return X() != null ? X().GetRecordingState() : null;
        }
        function rn() {
          return X() != null
            ? {
                fnCreateUserTimelineMarkers: X().CreateUserTimelineMarkers,
                fnUpdateUserTimelineMarkers: X().UpdateUserTimelineMarkers,
                fnRemoveUserTimelineMarker: X().RemoveUserTimelineMarker,
              }
            : null;
        }
        function nn(s, t) {
          return (0, x.q3)(() => {
            if (X() != null) return X().GetAchievementInfo(s, t);
          });
        }
        function dl() {
          return useObserver(() => {
            if (X() != null) return X().GetLastClip();
          });
        }
        function cs(s) {
          return X() != null ? X().GetBestClipTitle(s) : "";
        }
        function us(s) {
          X() != null && X().ManuallyDeleteRecordingForApps(s);
        }
        function ds(s, t) {
          const [i, n] = React.useState(0);
          return (
            useEffect(() => {
              X() != null &&
                X()
                  .GetTotalDiskSpaceUsage(s, t)
                  .then((l) => n(l));
            }, [s, t]),
            i
          );
        }
        function gl(s, t, i, n, l) {
          return X().ReportClipShare(s, t, i, n, l);
        }
        function ta(s, t, i, n, l) {
          return X().ReportClipRange(s, t, i, n, l);
        }
        function fl(s) {
          switch (s) {
            default:
            case 0:
              return StorageRecordings;
            case 1:
              return StorageClips;
            case 2:
              return StorageScreenshots;
          }
        }
        async function gs() {
          X() != null && (await X().CheckEnoughDiskSpace());
        }
        function Xi() {
          return (0, x.q3)(() => {
            if (X() != null) return !X().BEnoughDiskSpace();
          });
        }
        async function fs() {
          return X() != null ? await X().GetAvailableDiskSpace() : 0;
        }
        async function hs(s, t) {
          return await X().GetRecordingHighlights(s, t);
        }
        var me = _(85443),
          Te = _(54963),
          Ur = _(95987),
          ii = _(86578),
          Oi = _(72604),
          zi = _(85958),
          Oe = _(13854),
          Se = _(86347),
          xi = _(41635),
          oi = _(89083),
          ra = _(8323),
          an = Object.defineProperty,
          ia = Object.getOwnPropertyDescriptor,
          na = (s, t, i) =>
            t in s
              ? an(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          Me = (s, t, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? ia(t, i) : t, m = s.length - 1, c;
              m >= 0;
              m--
            )
              (c = s[m]) && (l = (n ? c(t, i, l) : c(l)) || l);
            return n && l && an(t, i, l), l;
          },
          De = (s, t, i) => na(s, typeof t != "symbol" ? t + "" : t, i),
          Zr = ((s) => (
            (s[(s.None = 0)] = "None"),
            (s[(s.DownloadFailed = 1)] = "DownloadFailed"),
            (s[(s.PlaybackError = 2)] = "PlaybackError"),
            (s[(s.MediaTypeError = 3)] = "MediaTypeError"),
            s
          ))(Zr || {});
        class he {
          constructor(t) {
            De(this, "m_elVideo", null),
              De(this, "m_player", null),
              De(this, "m_listeners", new ra.Ji()),
              De(this, "m_nDownloadFailureCount", 0),
              De(this, "m_bInitailized", !1),
              De(this, "m_bPaused", !1),
              De(this, "m_bAtEnd", !1),
              De(this, "m_strMediaTypeError", null),
              De(this, "m_ePlayerError", 0),
              De(this, "m_bUserInputNeeded", !1),
              De(this, "m_bMuted", !1),
              De(this, "m_bSeekReadyToPlay", !1),
              De(this, "m_bVideoElementPlaying", !1),
              De(this, "m_nPlaybackSpeed", 1),
              De(this, "m_bIsWaiting", !0),
              De(this, "m_bAutoPlay"),
              De(this, "m_bLoadedMetadata", !1),
              De(this, "m_nPlaybackTime", 0),
              De(this, "m_nVideoStartTime", 0),
              De(this, "m_nVideoDuration", 0),
              De(this, "m_nVolume", 1),
              De(this, "m_eSeekType", oi.lU.Absolute),
              (0, W.Gn)(this),
              (this.m_bAutoPlay = !!t);
          }
          IsPaused() {
            return this.m_bPaused;
          }
          IsAtEnd() {
            return this.m_bAtEnd;
          }
          BSeekReadyToPlay() {
            return this.m_bSeekReadyToPlay;
          }
          GetMediaTypeError() {
            return this.m_strMediaTypeError;
          }
          GetPlaybackError() {
            return this.m_ePlayerError;
          }
          GetUserInputNeeded() {
            return this.m_bUserInputNeeded;
          }
          GetPlaybackTime() {
            return this.m_eSeekType === oi.lU.Absolute
              ? this.m_nPlaybackTime
              : this.m_nPlaybackTime - this.m_nVideoStartTime;
          }
          GetTimelineDuration() {
            return this.m_eSeekType === oi.lU.Absolute
              ? this.m_nVideoDuration
              : this.m_nVideoDuration - this.m_nVideoStartTime;
          }
          GetVolume() {
            return this.m_nVolume;
          }
          GetMuted() {
            return this.m_bMuted;
          }
          GetMPDURL() {
            var t;
            return (t = this.m_player) == null ? void 0 : t.GetMPDURL();
          }
          GetVideoElementCurrentTime() {
            var t;
            return (t = this.m_elVideo) == null ? void 0 : t.currentTime;
          }
          BVideoElementPlaying() {
            return this.m_bVideoElementPlaying;
          }
          BVideoElementWaiting() {
            return this.m_bIsWaiting;
          }
          GetVideoHeight() {
            var t;
            return (
              ((t = this.m_elVideo) == null ? void 0 : t.clientHeight) || 0
            );
          }
          GetVideoWidth() {
            var t;
            return ((t = this.m_elVideo) == null ? void 0 : t.clientWidth) || 0;
          }
          GetLoadedMetadata() {
            return this.m_bLoadedMetadata;
          }
          Start(t, i, n, l = oi.lU.Absolute) {
            this.Stop(),
              (this.m_bAtEnd = !1),
              (this.m_elVideo = t),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userpausechange",
                this.OnUserPauseChange,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "playing",
                this.OnVideoPlaying,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "timeupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "ended",
                this.OnVideoEnd,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-ended",
                this.OnVideoEnd,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-downloadfailed",
                this.OnDownloadFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-playbackerror",
                this.OnPlaybackError,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userinputneeded",
                this.OnUserInputNeeded,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "waiting",
                this.OnVideoWaiting,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "volumechange",
                this.OnVolumeChange,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "canplay",
                this.OnCanPlay,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "seeking",
                this.OnSeeking,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "loadedmetadata",
                this.OnLoadedMetadata,
              ),
              (this.m_player = new oi.Zn(this.m_elVideo)),
              this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
              this.m_player.PlayMPD(i),
              (this.m_bMuted = Rn("muted")),
              (this.m_nVolume = Rn("volume")),
              this.m_player.SetMuted(this.m_bMuted),
              this.m_player.SetVolume(this.m_nVolume),
              (this.m_bSeekReadyToPlay = !1),
              (this.m_eSeekType = l);
            const m = `seeking_${i}_${n.toFixed(3)}`;
            (0, me.q_)(`CGameRecordingVideo:: perf mark ${m}`),
              performance.mark(m),
              this.m_player.Seek(n, this.m_eSeekType),
              (this.m_bPaused = this.m_player.IsPaused()),
              (this.m_bInitailized = !0);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_player && this.m_player.Close(),
              (this.m_elVideo = null),
              (this.m_player = null),
              (this.m_bInitailized = !1),
              (this.m_bPaused = !1),
              (this.m_bAtEnd = !1),
              (this.m_bSeekReadyToPlay = !1),
              (this.m_bVideoElementPlaying = !1),
              (this.m_ePlayerError = 0),
              (this.m_bUserInputNeeded = !1),
              (this.m_nPlaybackTime = 0),
              (this.m_nVideoStartTime = 0),
              (this.m_nVideoDuration = 0),
              (this.m_bLoadedMetadata = !1),
              (this.m_bIsWaiting = !0);
          }
          async UpdateMPD() {
            var t;
            await ((t = this.m_player) == null ? void 0 : t.UpdateMPD());
          }
          IsInitialized() {
            return this.m_bInitailized;
          }
          OnCanPlay() {
            (this.m_bSeekReadyToPlay = !0), (this.m_bAtEnd = !1);
          }
          OnUserPauseChange() {
            this.m_bPaused = this.m_player.IsPaused();
          }
          OnVideoPlaying() {
            (this.m_bVideoElementPlaying = !0),
              (this.m_bIsWaiting = !1),
              this.SetPlaybackSpeed(this.m_nPlaybackSpeed),
              (0, me.tG)("video playing");
          }
          OnVideoPause() {
            (this.m_bVideoElementPlaying = !1), (0, me.tG)("video paused");
          }
          OnVideoTimeUpdate() {
            (this.m_nVideoStartTime =
              this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
              (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime());
          }
          OnVideoEnd() {
            (this.m_bVideoElementPlaying = !1),
              (this.m_bAtEnd = !0),
              (0, me.tG)("video ended");
          }
          OnSeeking() {
            (0, me.tG)("video on seeking"),
              (this.m_bVideoElementPlaying = !1),
              (this.m_bIsWaiting = !0),
              (this.m_bAtEnd = !1);
          }
          OnLoadedMetadata() {
            this.m_bLoadedMetadata = !0;
          }
          async OnDownloadFailed(t) {
            var i;
            if (
              (t.detail || oi.N_.PlaybackError) == oi.N_.UnsupportedMediaType
            ) {
              (0, me.ZI)("media type error"), (this.m_ePlayerError = 3);
              return;
            }
            (0, me.ZI)("video download failed", t.detail),
              this.m_nDownloadFailureCount < 2
                ? (await ((i = this.m_player) == null ? void 0 : i.UpdateMPD()),
                  this.m_nDownloadFailureCount++)
                : (this.m_ePlayerError = 1);
          }
          OnPlaybackError() {
            (this.m_bVideoElementPlaying = !1),
              (0, me.ZI)("video playback error"),
              (this.m_ePlayerError = 2);
          }
          OnUserInputNeeded() {
            (this.m_bUserInputNeeded = !0),
              !this.m_bMuted &&
                this.m_elVideo.autoplay &&
                ((0, me.fX)(
                  "Failed to autoplay video. Muting and trying again.",
                ),
                this.SetMute(!0),
                this.Play());
          }
          OnVolumeChange() {
            (0, me.tG)("volume change");
          }
          OnVideoWaiting() {
            (this.m_bIsWaiting = !0),
              (this.m_bVideoElementPlaying = !1),
              this.GetTimelineDuration() - this.GetPlaybackTime() < 1 &&
                (this.m_bAtEnd = !0);
          }
          UserInputReceived() {
            this.IsInitialized() &&
              ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
          }
          SetVolume(t) {
            (this.m_nVolume = t),
              Bn("volume", t),
              t > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
              this.IsInitialized() && this.m_player.SetVolume(t);
          }
          SetMute(t, i) {
            this.IsInitialized() && this.m_player.SetMuted(t),
              (this.m_bMuted = t),
              i && Bn("muted", t);
          }
          TogglePlayPause() {
            this.IsInitialized() &&
              (this.m_player.IsPaused() ? this.Play() : this.Pause());
          }
          Play() {
            this.IsInitialized() && this.m_player.Play();
          }
          Pause() {
            this.IsInitialized() &&
              (this.m_player.Pause(), (this.m_bIsWaiting = !1));
          }
          SetPlaybackSpeed(t) {
            (this.m_nPlaybackSpeed = t),
              this.IsInitialized() && (this.m_elVideo.playbackRate = t);
          }
          GetPlaybackSpeed() {
            return this.m_nPlaybackSpeed;
          }
          Seek(t) {
            if (!this.IsInitialized()) return;
            const i = `seeking_${this.m_player.GetMPDURL()}_${t.toFixed(3)}`;
            (this.m_bAtEnd = !1),
              (this.m_bSeekReadyToPlay = !1),
              performance.mark(i),
              (0, me.q_)(`CGameRecordingVideo:: perf mark ${i}`),
              (0, me.q_)(`CGameRecordingVideo::Seek to ${t}`),
              (this.m_nPlaybackTime = t),
              this.m_player.Seek(t, this.m_eSeekType);
          }
        }
        Me([W.sH], he.prototype, "m_bInitailized", 2),
          Me([W.sH], he.prototype, "m_bPaused", 2),
          Me([W.sH], he.prototype, "m_bAtEnd", 2),
          Me([W.sH], he.prototype, "m_strMediaTypeError", 2),
          Me([W.sH], he.prototype, "m_ePlayerError", 2),
          Me([W.sH], he.prototype, "m_bUserInputNeeded", 2),
          Me([W.sH], he.prototype, "m_bMuted", 2),
          Me([W.sH], he.prototype, "m_bSeekReadyToPlay", 2),
          Me([W.sH], he.prototype, "m_bVideoElementPlaying", 2),
          Me([W.sH], he.prototype, "m_nPlaybackSpeed", 2),
          Me([W.sH], he.prototype, "m_bIsWaiting", 2),
          Me([W.sH], he.prototype, "m_bLoadedMetadata", 2),
          Me([W.sH], he.prototype, "m_nPlaybackTime", 2),
          Me([W.sH], he.prototype, "m_nVideoStartTime", 2),
          Me([W.sH], he.prototype, "m_nVideoDuration", 2),
          Me([W.sH], he.prototype, "m_nVolume", 2),
          Me([W.sH], he.prototype, "m_eSeekType", 2),
          Me([W.XI], he.prototype, "Start", 1),
          Me([W.XI], he.prototype, "Stop", 1),
          Me([Te.oI], he.prototype, "OnCanPlay", 1),
          Me([Te.oI], he.prototype, "OnUserPauseChange", 1),
          Me([Te.oI], he.prototype, "OnVideoPlaying", 1),
          Me([Te.oI], he.prototype, "OnVideoPause", 1),
          Me([Te.oI], he.prototype, "OnVideoTimeUpdate", 1),
          Me([Te.oI], he.prototype, "OnVideoEnd", 1),
          Me([Te.oI], he.prototype, "OnSeeking", 1),
          Me([Te.oI], he.prototype, "OnLoadedMetadata", 1),
          Me([Te.oI], he.prototype, "OnDownloadFailed", 1),
          Me([Te.oI], he.prototype, "OnPlaybackError", 1),
          Me([Te.oI], he.prototype, "OnUserInputNeeded", 1),
          Me([Te.oI], he.prototype, "OnVolumeChange", 1),
          Me([Te.oI], he.prototype, "OnVideoWaiting", 1),
          Me([Te.oI], he.prototype, "UserInputReceived", 1);
        function aa(s, t) {
          return (0, Te.QS)((n) => (t(n), () => s()), [t]);
        }
        let sn;
        function vn() {
          if (!sn) {
            let s = window.localStorage.getItem("gameRecordingPlayer") || "{}",
              t;
            try {
              t = JSON.parse(s);
            } catch {
              t = {};
            }
            sn = { muted: t.muted || !1, volume: t.volume || 1 };
          }
          return sn;
        }
        function Rn(s) {
          return vn()[s];
        }
        function Bn(s, t) {
          let i = vn();
          i[s] = t;
          let n = JSON.stringify(i);
          window.localStorage.setItem("gameRecordingPlayer", n);
        }
        const li = 0,
          sa = 1,
          Zi = 2,
          oa = 3,
          Cn = 4;
        function ps(s) {
          const { app: t } = useRecordingActiveApp(s),
            { loader: i } = useTimelineLoaderForGame(s),
            n =
              (t == null ? void 0 : t.recording_type) ===
                EGameRecordingType.k_EGameRecordingType_BackgroundRecording ||
              (t == null ? void 0 : t.recording_type) ===
                EGameRecordingType.k_EGameRecordingType_ManualRecording,
            [l, m] = useState(null);
          if (
            (useEffect(
              () =>
                i
                  ? (m(
                      n
                        ? {
                            startTime: Date.now(),
                            startDuration: i.GetTotalRecordingDuration(),
                          }
                        : null,
                    ),
                    () => {})
                  : () => {},
              [n, i],
            ),
            useRerenderOnInterval({ msInterval: 1e3, bEnabled: !!l }),
            l)
          ) {
            const c = Date.now() - l.startTime + l.startDuration,
              g = i.GetTotalRecordingDuration();
            return Math.abs(c - g) > 1e4
              ? Math.floor(g / 1e3)
              : Math.floor(c / 1e3);
          }
          return i && i.BInitialized()
            ? Math.floor(i.GetTotalRecordingDuration() / 1e3)
            : t
              ? t.video_duration_seconds
              : 0;
        }
        var Ki = ((s) => (
          (s.NotRunning = "NotRunning"),
          (s.NotRecording = "NotRecording"),
          (s.ManualRecording = "ManualRecording"),
          (s.BackgroundRecording = "BackgroundRecording"),
          s
        ))(Ki || {});
        function Gn(s) {
          const { app: t } = ao(s);
          if (!t) return "NotRecording";
          switch (t.recording_type) {
            default:
            case li:
            case sa:
              return "NotRecording";
            case Zi:
              return "ManualRecording";
            case oa:
              return "BackgroundRecording";
          }
        }
        var wn = Object.defineProperty,
          la = Object.getOwnPropertyDescriptor,
          ma = (s, t, i) =>
            t in s
              ? wn(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          ge = (s, t, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? la(t, i) : t, m = s.length - 1, c;
              m >= 0;
              m--
            )
              (c = s[m]) && (l = (n ? c(t, i, l) : c(l)) || l);
            return n && l && wn(t, i, l), l;
          },
          Ce = (s, t, i) => ma(s, typeof t != "symbol" ? t + "" : t, i),
          Qi = ((s) => (
            (s.Overlay = "Overlay"),
            (s.Clips = "Clips"),
            (s.Background = "Background"),
            (s.CommunityClip = "Community"),
            (s.ChatClip = "Chat"),
            (s.Partner = "Partner"),
            s
          ))(Qi || {}),
          ca = ((s) => (
            (s.Never = "Never"), (s.Always = "Always"), (s.Manual = "Manual"), s
          ))(ca || {});
        const _n = 3 * zi.kh,
          ua = 5 * zi.kh,
          da = zi.kh + 2e3,
          on = 1e3;
        class Ie {
          constructor(t, i, n, l, m, c, g, h) {
            Ce(this, "m_gameRecordingVideo", null),
              Ce(this, "m_timelineLoader", null),
              Ce(this, "m_fnUnregisterLoader", null),
              Ce(this, "m_rgListeners", []),
              Ce(this, "m_videoRef"),
              Ce(this, "m_bHidePlayer", !1),
              Ce(this, "m_fnGetManifest"),
              Ce(this, "m_strRecordingID", null),
              Ce(this, "m_nPendingSeekSec", -1),
              Ce(this, "m_playbackDefinition", null),
              Ce(this, "m_pendingStop", null),
              Ce(this, "m_durationMS", (0, Se.Sb)(null)),
              Ce(this, "m_lastRecordingGlobalMS", (0, Se.Sb)(null)),
              Ce(this, "m_bWasLiveEdge", !1),
              Ce(this, "m_nGlobalTimelinePlaybackMS", null),
              Ce(this, "m_nGlobalTimelinePlaybackSec", null),
              Ce(this, "m_fnUnregisterAutorun", []),
              Ce(this, "m_eGameRecordingMode"),
              Ce(this, "m_rgSeekPerf", []),
              Ce(this, "m_eRecordingState", Ki.NotRecording),
              Ce(this, "m_eRecordingSetting", "Never"),
              Ce(this, "m_bGamepadMode", !1),
              Ce(this, "m_bControlsVisible", !0),
              Ce(this, "m_fnRenderGlyph"),
              Ce(this, "m_previousHighlightEntry", null),
              Ce(this, "m_nextHighlightEntry", null),
              Ce(this, "m_displayHighlightEntry", null),
              Ce(this, "m_nRelativeTimeForDisplay"),
              Ce(this, "m_rgClipOffsets", []),
              Ce(this, "m_phasePreview"),
              (0, W.Gn)(this),
              (this.m_fnGetManifest = i),
              (this.m_gameRecordingVideo = new he(!0)),
              (this.m_eGameRecordingMode = n),
              (this.m_bGamepadMode = m),
              (this.m_playbackDefinition = g),
              l != null && (this.m_bControlsVisible = l),
              n === "Overlay" && (this.m_bHidePlayer = !0),
              h && this.SetClipOffsets(h),
              (this.m_fnRenderGlyph = c),
              this.m_fnUnregisterAutorun.push(
                (0, W.mJ)(
                  () => ({
                    bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
                    bIsPaused: this.m_gameRecordingVideo.IsPaused(),
                  }),
                  (M) => {
                    M.bIsAtEnd &&
                      !M.bIsPaused &&
                      this.PlayNextTimelineRecording();
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, W.mJ)(
                  () => this.m_gameRecordingVideo.GetPlaybackTime(),
                  (M) => {
                    var y;
                    if (
                      this.m_pendingStop &&
                      this.m_pendingStop.m_strRecordingID ==
                        this.m_strRecordingID &&
                      this.m_pendingStop.m_nOffsetMS <= M * 1e3
                    ) {
                      if (
                        (y = this.m_playbackDefinition) != null &&
                        y.m_nLoopDurationMS
                      ) {
                        this.StartPlaybackForRange();
                        return;
                      }
                      this.m_gameRecordingVideo.Pause(),
                        (this.m_pendingStop = null);
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, W.mJ)(
                  () => ({
                    playback: this.m_gameRecordingVideo.GetPlaybackTime(),
                    bVideoPlaying:
                      this.m_gameRecordingVideo.BVideoElementPlaying(),
                  }),
                  (M) => {
                    if (M.bVideoPlaying) {
                      const y =
                        this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                          this.m_strRecordingID,
                          M.playback * 1e3,
                          0,
                        );
                      if (y)
                        this.UpdateGlobalPlayTime(y.nGlobalOffsetMS),
                          y.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                            this.m_eGameRecordingMode === "Overlay" &&
                            this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                            (console.log(
                              " hitting live edge, slow down the playback ",
                            ),
                            this.m_gameRecordingVideo.SetPlaybackSpeed(1));
                      else {
                        const G = this.GetLiveEdgeMS();
                        isNaN(G.valMS) ||
                          (this.SetPlaytimeFromGlobalMS(G),
                          this.FocusGlobalMS(G));
                      }
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, W.mJ)(
                  () => ({
                    globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
                    bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
                    bHidePlayer: this.m_bHidePlayer,
                  }),
                  (M) => {
                    var y, G, w, D;
                    if (
                      !((y = this.m_timelineLoader) != null && y.BInitialized())
                    )
                      return;
                    if (M.bHidePlayer) {
                      this.SetEntriesForLiveEdge();
                      return;
                    }
                    (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      ((G = this.m_nextHighlightEntry) != null &&
                        G.globalMS &&
                        M.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      ((w = this.m_previousHighlightEntry) != null &&
                        w.globalMS &&
                        M.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (M.bVideoPaused &&
                        (D = this.m_previousHighlightEntry) != null &&
                        D.globalMS &&
                        M.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS + on)) &&
                      (this.CalculatePreviousHighlightEntry(
                        M.globalPlaybackMS,
                        M.bVideoPaused,
                      ),
                      this.CalculateNextHighlightEntry(
                        M.globalPlaybackMS,
                        M.bVideoPaused,
                      ));
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, W.mJ)(
                  () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
                  (M) => {
                    if (M) {
                      const y = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                      try {
                        const G = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                          w = performance.measure(G, y);
                        (0, me.q_)(
                          `CGameRecordingVideo:: perf measure ${y} duration ${w.duration}`,
                        ),
                          w && this.m_rgSeekPerf.push(w.duration);
                      } catch (G) {
                        (0, me.q_)(
                          `CGameRecordingVideo:: cant measure ${y}, error: ${G}`,
                        );
                      }
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.SetLoader(t);
          }
          AddEventListener(t) {
            return (
              this.m_rgListeners.push(t), () => xi.x9(this.m_rgListeners, t)
            );
          }
          FireEvent(t, ...i) {
            for (let n of this.m_rgListeners) {
              let l = n[t];
              l instanceof Function && l.apply(n, i);
            }
          }
          dispose() {
            this.m_fnUnregisterAutorun.forEach((t) => t()),
              this.m_fnUnregisterLoader &&
                (this.m_fnUnregisterLoader(),
                (this.m_fnUnregisterLoader = null));
          }
          SetVideoElement(t) {
            if (t) {
              if (this.m_videoRef === t) return;
              if (((this.m_videoRef = t), this.m_strRecordingID)) {
                const i =
                  this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
                (this.m_nPendingSeekSec = -1),
                  this.ChangePlaybackRecording(this.m_strRecordingID, i);
              } else this.TryPlayInitialTimelineVideo();
            } else this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null);
          }
          OnInvalidateRecording(t, i) {
            const n = this.m_fnGetManifest(i);
            this.m_gameRecordingVideo.GetMPDURL() == n &&
              ((0, me.q_)(`Recording invalidated for ${i}. Reloading MPD`),
              this.m_gameRecordingVideo.UpdateMPD());
          }
          OnLoaderInitialized() {
            (this.m_durationMS =
              this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              (this.m_bWasLiveEdge = !0),
              this.TryPlayInitialTimelineVideo();
            const t = ul(this.m_timelineLoader.GetGameID());
            this.SetClipOffsets(t);
          }
          OnInvalidate(t) {
            if (
              ((this.m_durationMS =
                this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(t))
            ) {
              this.SetEntriesForLiveEdge();
              return;
            }
            if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
              const i = this.m_timelineLoader.GetTimelineMetadataIndex(t),
                n = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_previousHighlightEntry.timelineID,
                ),
                l = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_nextHighlightEntry.timelineID,
                );
              if (i < n || i > l) return;
            }
            this.CalculatePreviousHighlightEntry(
              this.m_nGlobalTimelinePlaybackMS,
              this.GetGameRecordingVideo().IsPaused(),
            ),
              this.CalculateNextHighlightEntry(
                this.m_nGlobalTimelinePlaybackMS,
                this.GetGameRecordingVideo().IsPaused(),
              );
          }
          OnTimelineLoaded(t) {
            this.m_previousHighlightEntry &&
              this.m_previousHighlightEntry.timelineID === t &&
              this.CalculatePreviousHighlightEntry(
                this.m_nGlobalTimelinePlaybackMS,
                this.GetGameRecordingVideo().IsPaused(),
              ),
              this.m_nextHighlightEntry &&
                this.m_nextHighlightEntry.timelineID === t &&
                this.CalculateNextHighlightEntry(
                  this.m_nGlobalTimelinePlaybackMS,
                  this.GetGameRecordingVideo().IsPaused(),
                );
          }
          SetEntriesForLiveEdge() {
            const t = this.GetLiveEdgeMS();
            this.CalculatePreviousHighlightEntry(t.valMS, !0),
              (this.m_nextHighlightEntry = null);
          }
          CalculatePreviousHighlightEntry(t, i) {
            const n = i ? 1 : on * this.m_gameRecordingVideo.GetPlaybackSpeed(),
              l = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                t - n,
              );
            l.timelineState === "loaded" && !l.entry
              ? (this.m_previousHighlightEntry =
                  this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                    t,
                  ))
              : (this.m_previousHighlightEntry = l);
          }
          CalculateNextHighlightEntry(t, i) {
            const n =
              this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(t);
            if (n.timelineState === "loaded" && !n.entry) {
              const l = i
                ? 1
                : on * this.m_gameRecordingVideo.GetPlaybackSpeed();
              this.m_nextHighlightEntry =
                this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(
                  t - l,
                );
            } else this.m_nextHighlightEntry = n;
          }
          GetPreviousHighlightEntry() {
            return this.m_previousHighlightEntry;
          }
          GetNextHighlightEntry() {
            return this.m_nextHighlightEntry;
          }
          GetDisplayHighlightEntry() {
            return this.m_displayHighlightEntry;
          }
          SetDisplayHighlightEntry(t, i) {
            this.m_displayHighlightEntry = { entry: t, duration: i };
          }
          GetPhasePreview() {
            return this.m_phasePreview;
          }
          SetPhasePreview(t) {
            this.m_phasePreview = t;
          }
          GetRelativeTimeForDisplay() {
            return this.m_nRelativeTimeForDisplay;
          }
          ClearRelativeTimeDisplay() {
            this.m_nRelativeTimeForDisplay = void 0;
          }
          GetClipOffsets() {
            return this.m_rgClipOffsets;
          }
          SetClipOffsets(t) {
            var i;
            if (!((i = this.m_timelineLoader) != null && i.BInitialized()))
              return;
            let n = [];
            t &&
              t.length &&
              t.forEach((l) => {
                const m = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                  l.start_timeline_id,
                  0,
                );
                if (!m) return;
                const c = m.nGlobalOffsetMS + parseInt(l.start_offset_ms);
                n.push({
                  strClipID: l.clip_id,
                  nGlobalOffsetMS: c,
                  nDurationMS: parseInt(l.duration_ms),
                });
              }),
              (this.m_rgClipOffsets = n);
          }
          GetTotalMS() {
            return this.m_durationMS;
          }
          GetIsActiveTimeline(t) {
            return this.m_timelineLoader.IsActiveTimeline(t);
          }
          BIsVideoElementPaused() {
            return this.m_gameRecordingVideo.IsPaused();
          }
          BInitialized() {
            return this.m_timelineLoader.BInitialized();
          }
          GetHidePlayer() {
            return this.m_bHidePlayer;
          }
          SetHidePlayer(t) {
            t && (this.m_strRecordingID = null), (this.m_bHidePlayer = t);
          }
          BPlayerInitialized() {
            return this.m_gameRecordingVideo.IsInitialized();
          }
          GetGameRecordingVideo() {
            return this.m_gameRecordingVideo;
          }
          GetGameID() {
            return this.m_timelineLoader.GetGameID();
          }
          GetClipID() {
            return this.m_timelineLoader.GetClipID();
          }
          GetRecordingState() {
            return this.m_eRecordingState;
          }
          SetRecordingState(t) {
            this.m_eRecordingState = t;
          }
          GetLoader() {
            return this.m_timelineLoader;
          }
          SetLoader(t) {
            this.m_timelineLoader != t &&
              (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
              (this.m_timelineLoader = t),
              (this.m_fnUnregisterLoader =
                this.m_timelineLoader.AddEventListener(this)),
              t.BInitialized() && this.OnLoaderInitialized());
          }
          SetGetManifest(t) {
            this.m_fnGetManifest = t;
          }
          GetRecordingID() {
            return this.m_strRecordingID;
          }
          GetRecordingSetting() {
            return this.m_eRecordingSetting;
          }
          SetRecordingSetting(t) {
            this.m_eRecordingSetting = t;
          }
          GetRecordingMode() {
            return this.m_eGameRecordingMode;
          }
          ShouldModeShowClipControls() {
            switch (this.m_eGameRecordingMode) {
              case "Overlay":
              case "Clips":
              case "Background":
                return !0;
              default:
                return !1;
            }
          }
          CanModeAddMarker() {
            switch (this.m_eGameRecordingMode) {
              case "Overlay":
              case "Clips":
              case "Background":
                return !0;
              default:
                return !1;
            }
          }
          GetPlaybackStats() {
            if (!this.m_rgSeekPerf.length) return null;
            const t = this.m_rgSeekPerf.length,
              i = this.m_rgSeekPerf.reduce((c, g) => c + g) / t,
              n = Math.sqrt(
                this.m_rgSeekPerf
                  .map((c) => Math.pow(c - i, 2))
                  .reduce((c, g) => c + g) / t,
              ),
              l = Math.max(...this.m_rgSeekPerf),
              m = Math.min(...this.m_rgSeekPerf);
            return {
              nMean: i,
              nStdDev: n,
              nMax: l,
              nMin: m,
              nLength: t,
              nLastVal: this.m_rgSeekPerf[t - 1],
            };
          }
          async StartPlaybackForRange() {
            let t = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                this.m_playbackDefinition.m_strTimelineID,
                0,
              ),
              i = (t == null ? void 0 : t.nGlobalOffsetMS) || 0;
            i += this.m_playbackDefinition.m_nTimelineStartMS;
            let n;
            if (
              (this.m_playbackDefinition.m_strEntryID
                ? (n =
                    await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
                      this.m_playbackDefinition.m_strEntryID,
                    ))
                : (n =
                    this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                      i,
                    )),
              n)
            ) {
              if (this.m_playbackDefinition.m_nLoopDurationMS) {
                let l = i + this.m_playbackDefinition.m_nLoopDurationMS,
                  m =
                    this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                      l,
                    );
                this.m_pendingStop = {
                  m_strRecordingID: m.strRecordingID,
                  m_nOffsetMS: m.nRecordingOffsetMS,
                };
              }
              this.UpdateGlobalPlayTime(i),
                this.ChangePlaybackRecording(
                  n.strRecordingID,
                  n.nRecordingOffsetMS / 1e3,
                );
            }
          }
          TryPlayInitialTimelineVideo() {
            if (!(!this.m_timelineLoader.BInitialized() || this.m_bHidePlayer))
              if (this.m_playbackDefinition) this.StartPlaybackForRange();
              else if (this.m_eGameRecordingMode === "Overlay") {
                const t = this.GetLiveEdgeMS(),
                  i =
                    this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
                  n =
                    this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                      i,
                      0,
                      0,
                    );
                n && t.valMS < n.nGlobalOffsetMS
                  ? (this.UpdateGlobalPlayTime(n.nGlobalOffsetMS),
                    this.ChangePlaybackRecording(i, 0))
                  : isNaN(t.valMS) || this.SetPlaytimeFromGlobalMS(t, !1, !0);
              } else if (this.m_eGameRecordingMode === "Background") {
                const t =
                  this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
                this.SetPlaytimeFromRecordingOffset(t, 0);
              } else {
                const t = this.m_timelineLoader.GetFirstRecording();
                this.SetPlaytimeFromRecordingOffset(t, 0);
              }
          }
          GetTotalSeconds() {
            return Math.floor(
              this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
            );
          }
          GetCurrentPlaybackGlobalMS(t = 0) {
            const i =
              Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + t;
            return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              this.m_strRecordingID,
              i,
              0,
            );
          }
          GetIsLiveEdge() {
            const t = this.GetGlobalMSPlaytime().valMS || 0;
            return this.m_eGameRecordingMode === "Overlay"
              ? this.m_lastRecordingGlobalMS
                ? this.m_bWasLiveEdge
                : !1
              : this.GetTotalMS().valMS - t < 1;
          }
          GetLiveEdgeBufferWindowStartMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const t = Math.max(
                0,
                this.m_lastRecordingGlobalMS.valMS - _n - 1e3,
              );
              return (0, Se.Sb)(t);
            }
            return this.GetTotalMS();
          }
          GetLiveEdgeMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const t = Math.max(0, this.m_lastRecordingGlobalMS.valMS - da);
              return (0, Se.Sb)(t);
            }
            return (0, Se.Sb)(Math.max(0, this.GetTotalMS().valMS - 1));
          }
          GetTimelineAndOffsetRelativeToCurrentPlayback(t = 0) {
            const i = this.GetCurrentPlaybackGlobalMS(t);
            return (
              i ||
              ((0, me.ZI)(
                `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
              ),
              null)
            );
          }
          SeekDeltaMS(t) {
            const i = this.GetGlobalMSPlaytime();
            if (!this.m_strRecordingID) {
              const m =
                t > 0
                  ? this.GetClosestNextRecordingForGlobalMS(i)
                  : this.GetClosestPreviousRecordingForGlobalMS(i);
              if (m) {
                const c = t > 0 ? t : Math.max(parseInt(m.duration_ms) + t, 0);
                this.SetPlaytimeFromRecordingOffset(m.recording_id, c, t < 0);
                return;
              }
            }
            const n =
                this.m_eGameRecordingMode === "Overlay"
                  ? this.GetLiveEdgeMS().valMS
                  : this.GetTotalMS().valMS,
              l = Oe.OQ(i.valMS + t, 0, n - 1e3);
            this.SetPlaytimeFromGlobalMS((0, Se.Sb)(l));
          }
          ConvertGlobaOffsetToRecordingAndRelativeOffset(t) {
            return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              t,
            );
          }
          PlayNextTimelineRecording(t) {
            var i;
            if (
              (i = this.m_playbackDefinition) != null &&
              i.m_nLoopDurationMS
            ) {
              this.StartPlaybackForRange();
              return;
            }
            let n;
            if (this.m_strRecordingID)
              n = this.m_timelineLoader.GetNextRecording(this.m_strRecordingID);
            else {
              const l =
                this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
                  (0, Se.Sb)(this.m_nGlobalTimelinePlaybackMS),
                );
              n = l == null ? void 0 : l.recording_id;
            }
            if (n) {
              this.SetPlaytimeFromRecordingOffset(n, 0);
              return;
            }
            this.m_gameRecordingVideo.Pause(),
              t && this.TryPlayInitialTimelineVideo();
          }
          GetClipsAtGlobalMS(t) {
            return (
              this.m_rgClipOffsets.filter(
                (i) =>
                  i.nGlobalOffsetMS <= t.valMS &&
                  i.nGlobalOffsetMS + i.nDurationMS >= t.valMS,
              ) || []
            );
          }
          GetClosestPreviousRecordingForGlobalMS(t) {
            return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
              t,
            );
          }
          GetClosestNextRecordingForGlobalMS(t) {
            return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
              t,
            );
          }
          SetPlaytimeFromRecordingOffset(t, i, n, l) {
            let m = i;
            n &&
              (m = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(
                t,
                i,
              ));
            const c =
              this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                t,
                m,
                0,
              );
            c &&
              (this.UpdateGlobalPlayTime(c.nGlobalOffsetMS),
              this.ChangePlaybackRecording(t, m / 1e3, l));
          }
          GetManifestFromRecordingID(t) {
            return this.m_fnGetManifest(t);
          }
          ChangePlaybackRecording(t, i = 0, n) {
            this.m_bHidePlayer = !1;
            const l = this.m_gameRecordingVideo.IsPaused();
            if (
              this.m_strRecordingID === t &&
              this.m_gameRecordingVideo.IsInitialized()
            ) {
              this.m_gameRecordingVideo.Seek(i);
              return;
            }
            if (
              (this.m_gameRecordingVideo.Stop(),
              (this.m_strRecordingID = t),
              !t)
            )
              return;
            if (!this.m_videoRef) {
              this.m_nPendingSeekSec = i;
              return;
            }
            const m = this.GetManifestFromRecordingID(t),
              c = this.m_timelineLoader.BRecordingHasZeroOffset(t)
                ? oi.lU.Absolute
                : oi.lU.FromAvailableStart;
            this.m_gameRecordingVideo.Start(this.m_videoRef, m, i, c),
              (n || l) && this.m_gameRecordingVideo.Pause();
          }
          StopPlayback() {
            this.m_gameRecordingVideo.Stop();
          }
          TogglePlayPause() {
            var t, i;
            this.m_gameRecordingVideo.IsPaused() ||
            !this.m_gameRecordingVideo.IsInitialized()
              ? (this.m_nGlobalTimelinePlaybackMS >
                  ((i =
                    (t = this.m_lastRecordingGlobalMS) == null
                      ? void 0
                      : t.valMS) != null
                    ? i
                    : 0) && this.TryPlayInitialTimelineVideo(),
                this.m_gameRecordingVideo.GetTimelineDuration() -
                  this.m_gameRecordingVideo.GetPlaybackTime() <
                0.05
                  ? this.PlayNextTimelineRecording(!0)
                  : this.m_gameRecordingVideo.Play())
              : this.m_gameRecordingVideo.Pause();
          }
          GetGlobalMSPlaytime() {
            return (0, Se.Sb)(this.m_nGlobalTimelinePlaybackMS);
          }
          GetGlobalPlaytimeSec() {
            return this.m_nGlobalTimelinePlaybackSec;
          }
          UpdateGlobalPlayTime(t) {
            var i;
            if (
              ((this.m_nGlobalTimelinePlaybackMS = t),
              (this.m_nGlobalTimelinePlaybackSec = Math.floor(t / 1e3)),
              this.m_lastRecordingGlobalMS &&
                this.m_lastRecordingGlobalMS.valMS !== null)
            ) {
              const n = this.m_bWasLiveEdge ? ua : _n;
              this.m_bWasLiveEdge =
                this.m_lastRecordingGlobalMS.valMS -
                  (((i = this.GetGlobalMSPlaytime()) == null
                    ? void 0
                    : i.valMS) || 0) <
                n;
            }
          }
          HandleSeekToPreviousRecording(t, i, n) {
            const l = this.GetClosestPreviousRecordingForGlobalMS(t);
            if (l) {
              const m = parseInt(l.duration_ms),
                c = Math.max(m - 5e3, m * 0.75);
              n || (this.m_nRelativeTimeForDisplay = c / 1e3),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    l.recording_id,
                    c,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(
                  l == null ? void 0 : l.recording_id,
                  c / 1e3,
                  i,
                );
            } else
              n || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(0),
                this.ChangePlaybackRecording(this.m_strRecordingID, 0, i);
          }
          HandleSeekToNextRecording(t, i, n) {
            const l = this.GetClosestNextRecordingForGlobalMS(t);
            l
              ? (n || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    l.recording_id,
                    0,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(
                  l == null ? void 0 : l.recording_id,
                  0,
                  i,
                ))
              : (n ||
                  (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
                this.ChangePlaybackRecording(
                  this.m_strRecordingID,
                  this.GetTotalMS().valMS / 1e3,
                  i,
                ));
          }
          SetPlaytimeFromGlobalMS(t, i, n, l) {
            this.m_pendingStop = null;
            let m =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                t.valMS,
              );
            m
              ? (n || (this.m_nRelativeTimeForDisplay = t.valMS),
                this.UpdateGlobalPlayTime(t.valMS),
                this.ChangePlaybackRecording(
                  m == null ? void 0 : m.strRecordingID,
                  (m == null ? void 0 : m.nRecordingOffsetMS) / 1e3,
                  i,
                ))
              : l
                ? this.ChangePlaybackRecording(
                    m == null ? void 0 : m.strRecordingID,
                    (m == null ? void 0 : m.nRecordingOffsetMS) / 1e3,
                    i,
                  )
                : t.valMS > this.m_nGlobalTimelinePlaybackMS
                  ? this.HandleSeekToNextRecording(t, i, n)
                  : this.HandleSeekToPreviousRecording(t, i, n);
          }
          ConvertGlobalOffsetToTimelineRelativeOffset(t) {
            return this.m_timelineLoader.GetTimelineOffsetFromGlobal(t, 0);
          }
          MakeRelativeToTimelineEndIfActive(t, i) {
            return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(
              t,
              i,
            );
          }
          GetTimelineDuration(t) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const i = this.m_timelineLoader.GetTimelineMetadata(t);
            return i ? parseInt(i.metadata.duration_ms) : null;
          }
          GetTimelineFirstRecordingOffset(t) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const i = this.m_timelineLoader.GetTimelineMetadata(t);
            if (!i) return null;
            const n = i.metadata.recordings;
            return n.length ? parseInt(n[0].start_offset_ms) : null;
          }
          async AddUserMarkerAtGlobalMS(t, i, n) {
            const l = this.m_timelineLoader.GetTimelineOffsetFromGlobal(
              t.valMS,
              0,
            );
            if (l) {
              const m = this.m_timelineLoader.GetGameID(),
                { fnCreateUserTimelineMarkers: c } = rn(),
                g = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
                  l.strTimelineID,
                );
              Ur.y.ReportTrackedAction(i);
              const h = "steam_marker",
                M = await c(m, this.GetClipID(), {
                  timeline_id: l.strTimelineID,
                  entry_id: "",
                  time: "" + Math.floor(l.nTimelineOffsetMS.valMS + g),
                  type: ii.Bw.jL,
                  marker_icon: h,
                  marker_priority: 0,
                });
              M.eResult == Oi.R &&
                (this.m_timelineLoader.AddUserMarker(
                  l.strTimelineID,
                  Math.floor(l.nTimelineOffsetMS.valMS),
                  h,
                  M.entry_id,
                ),
                n && n(M.entry_id, l.strTimelineID));
            }
          }
          async RemoveUserMarker(t, i) {
            const { fnRemoveUserTimelineMarker: n } = rn(),
              l = this.m_timelineLoader.GetGameID();
            return (await n(l, this.GetClipID(), t, i)) == Oi.R
              ? (this.m_timelineLoader.RemoveUserMarker(t, i), !0)
              : ((0, me.tG)(
                  `Failed to delete user marker for timeline ${t} entry ${i}`,
                ),
                !1);
          }
          async UpdateUserMarker(t, i, n, l) {
            const { fnUpdateUserTimelineMarkers: m } = rn(),
              c = this.m_timelineLoader.GetGameID(),
              g = {
                timeline_id: t,
                entry_id: i.id,
                time: i.time,
                type: ii.Bw.jL,
                marker_icon: i.icon,
                marker_priority: i.priority,
                range_title: n,
                marker_description: l,
              };
            if ((await m(c, this.GetClipID(), g)) == Oi.R) {
              const M = {
                strIcon: i.icon,
                name: n,
                description: l,
                nTimelineOffsetMS: parseInt(i.time),
              };
              return this.m_timelineLoader.UpdateUserMarker(t, i.id, M), !0;
            }
            return !1;
          }
          FocusGlobalMS(t) {
            this.FireEvent("OnFocusGlobalMS", t);
          }
          SetPlaybackStop(t) {
            const i = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              t.valMS,
            );
            i &&
              (this.m_pendingStop = {
                m_strRecordingID: i.strRecordingID,
                m_nOffsetMS: i.nRecordingOffsetMS,
              });
          }
          ClearPlaybackStop() {
            this.m_pendingStop = null;
          }
          GenerateClipNameFromTimeline(t, i, n, l) {
            return this.m_timelineLoader.GenerateClipNameFromTimeline(
              t,
              i,
              n,
              l,
            );
          }
          GetRenderGlyph() {
            if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
          }
          SetRenderGlyph(t) {
            this.m_fnRenderGlyph = t;
          }
          GetGamepadMode() {
            return this.m_bGamepadMode;
          }
          SetGamepadMode(t) {
            this.m_bGamepadMode = t;
          }
          GetControlsVisible() {
            return this.m_bControlsVisible;
          }
          SetControlsVisible(t) {
            t != null && (this.m_bControlsVisible = t);
          }
        }
        ge([W.sH], Ie.prototype, "m_bHidePlayer", 2),
          ge([W.sH], Ie.prototype, "m_strRecordingID", 2),
          ge([W.sH], Ie.prototype, "m_durationMS", 2),
          ge([W.sH], Ie.prototype, "m_lastRecordingGlobalMS", 2),
          ge([W.sH], Ie.prototype, "m_nGlobalTimelinePlaybackMS", 2),
          ge([W.sH], Ie.prototype, "m_nGlobalTimelinePlaybackSec", 2),
          ge([W.sH], Ie.prototype, "m_rgSeekPerf", 2),
          ge([W.sH], Ie.prototype, "m_eRecordingState", 2),
          ge([W.sH], Ie.prototype, "m_eRecordingSetting", 2),
          ge([W.sH], Ie.prototype, "m_bGamepadMode", 2),
          ge([W.sH], Ie.prototype, "m_bControlsVisible", 2),
          ge([W.sH], Ie.prototype, "m_fnRenderGlyph", 2),
          ge([W.sH], Ie.prototype, "m_previousHighlightEntry", 2),
          ge([W.sH], Ie.prototype, "m_nextHighlightEntry", 2),
          ge([W.sH], Ie.prototype, "m_displayHighlightEntry", 2),
          ge([W.sH], Ie.prototype, "m_nRelativeTimeForDisplay", 2),
          ge([W.sH.ref], Ie.prototype, "m_rgClipOffsets", 2),
          ge([W.sH.ref], Ie.prototype, "m_phasePreview", 2),
          ge([Te.oI], Ie.prototype, "SetVideoElement", 1),
          ge([Te.oI], Ie.prototype, "OnInvalidateRecording", 1),
          ge([W.XI], Ie.prototype, "OnLoaderInitialized", 1),
          ge([Te.oI], Ie.prototype, "OnInvalidate", 1),
          ge([Te.oI], Ie.prototype, "OnTimelineLoaded", 1),
          ge([Te.oI], Ie.prototype, "GetLiveEdgeMS", 1),
          ge([Te.oI], Ie.prototype, "StopPlayback", 1),
          ge([Te.oI], Ie.prototype, "TogglePlayPause", 1),
          ge([W.XI], Ie.prototype, "UpdateGlobalPlayTime", 1);
        const ln = S.createContext({ timelinePlaybackCoordinator: null });
        function ga(s) {
          const {
              children: t,
              mode: i,
              fnGetManifest: n,
              loader: l,
              recordingState: m,
              controlsVisible: c,
              gamepadMode: g,
              renderGlyph: h,
              recordingSetting: M,
              playbackDefinition: y,
              clipSummaries: G,
            } = s,
            [w] = S.useState(() => new Ie(l, n, i, c, g, h, y, G));
          (0, S.useEffect)(() => {
            w.SetLoader(l);
          }, [w, l]),
            (0, S.useEffect)(() => {
              w.SetRecordingState(m);
            }, [w, m]),
            (0, S.useEffect)(() => {
              w.SetRecordingSetting(M);
            }, [w, M]),
            (0, S.useEffect)(() => {
              w.SetGetManifest(n);
            }, [w, n]),
            (0, S.useEffect)(() => {
              w.SetControlsVisible(c);
            }, [w, c]),
            (0, S.useEffect)(() => {
              w.SetGamepadMode(g);
            }, [w, g]),
            (0, S.useEffect)(() => {
              w.SetRenderGlyph(h);
            }, [w, h]),
            (0, S.useEffect)(() => {
              w.SetClipOffsets(G);
            }, [w, G]),
            (0, S.useEffect)(() => () => w.dispose(), [w]);
          const D = S.useMemo(() => ({ timelinePlaybackCoordinator: w }), [w]);
          return (0, u.jsx)(ln.Provider, { value: D, children: t });
        }
        function ce() {
          return (0, S.useContext)(ln).timelinePlaybackCoordinator;
        }
        function Ss() {
          return useContext(
            ln,
          ).timelinePlaybackCoordinator.GetGameRecordingVideo();
        }
        function fa() {
          const s = ce();
          return [
            (0, x.q3)(() => (s == null ? void 0 : s.GetPhasePreview()) || null),
            (i) => (s == null ? void 0 : s.SetPhasePreview(i)),
          ];
        }
        var Z = _(36707),
          ha = _(64919),
          Ee = _.n(ha),
          re = _(18210),
          Pn = _(57589),
          pa = _(47689),
          Sa = _(71742),
          In = Object.defineProperty,
          Ma = Object.getOwnPropertyDescriptor,
          ba = (s, t, i) =>
            t in s
              ? In(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          ya = (s, t, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Ma(t, i) : t, m = s.length - 1, c;
              m >= 0;
              m--
            )
              (c = s[m]) && (l = (n ? c(t, i, l) : c(l)) || l);
            return n && l && In(t, i, l), l;
          },
          Vr = (s, t, i) => ba(s, typeof t != "symbol" ? t + "" : t, i);
        const Ta = 30;
        function va(s, t) {
          return (
            s.strRecordingID === t.strRecordingID &&
            s.strClipID === t.strClipID &&
            s.nRecordingOffsetMS === t.nRecordingOffsetMS &&
            s.nRecordingStartOffsetMS === t.nRecordingStartOffsetMS &&
            s.cPxMajorAxis === t.cPxMajorAxis &&
            s.bPreciseTiming == t.bPreciseTiming
          );
        }
        const mn = class Qn {
          constructor() {
            Vr(this, "k_QueueWaitUntilRequestMS", 10),
              Vr(this, "k_nMaxBatchSize", 50),
              Vr(this, "m_nMaxCacheSize", (Ta * 60 * 1e3) / zi.kh),
              Vr(this, "m_LRUTrackerSet", new Set()),
              Vr(this, "m_mapPromises", new Map()),
              Vr(this, "m_mapThumbnailImages", new Map()),
              Vr(this, "m_rgPendingRequest", new Array()),
              Vr(this, "m_PendingInfoPromise"),
              Vr(this, "m_PendingInfoResolve"),
              Vr(this, "m_PendingTimer"),
              Vr(this, "k_AlreadyResolvedOK", Promise.resolve(!0)),
              Vr(this, "m_rgThumbnailPerf", []),
              (0, W.Gn)(this);
          }
          AddPerfMeasure(t) {
            this.m_rgThumbnailPerf.push(t);
          }
          GetPerfMeasures() {
            if (!this.m_rgThumbnailPerf.length) return null;
            const t = this.m_rgThumbnailPerf.length,
              i = this.m_rgThumbnailPerf.reduce((c, g) => c + g) / t,
              n = Math.sqrt(
                this.m_rgThumbnailPerf
                  .map((c) => Math.pow(c - i, 2))
                  .reduce((c, g) => c + g) / t,
              ),
              l = Math.max(...this.m_rgThumbnailPerf),
              m = Math.min(...this.m_rgThumbnailPerf);
            return {
              nMean: i,
              nStdDev: n,
              nMax: l,
              nMin: m,
              nLength: t,
              nLastVal: this.m_rgThumbnailPerf[t - 1],
            };
          }
          GetKey(t, i, n, l, m, c, g) {
            const h = m + l,
              M = g ? h : h - (h % zi.kh);
            return `${t}_${i}_${n}_${M}_${c}_${g}`;
          }
          GetThumbnailData(t) {
            const i = this.m_mapThumbnailImages.get(t);
            return (
              i &&
                (this.m_LRUTrackerSet.has(t) && this.m_LRUTrackerSet.delete(t),
                this.m_LRUTrackerSet.add(t)),
              i
            );
          }
          SetThumbnailData(t, i) {
            if (
              (this.m_LRUTrackerSet.has(t) && this.m_LRUTrackerSet.delete(t),
              this.m_LRUTrackerSet.add(t),
              this.m_mapThumbnailImages.set(t, i),
              this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize)
            ) {
              const n = this.m_LRUTrackerSet.keys().next().value;
              this.m_LRUTrackerSet.delete(n),
                this.m_mapThumbnailImages.delete(n);
            }
          }
          ClearThumbnailData() {
            this.m_LRUTrackerSet.clear(), this.m_mapThumbnailImages.clear();
          }
          GetThumbnail(t, i, n, l, m, c, g) {
            if (!i) return;
            const h = this.GetKey(t, i, n, l, m, c, g);
            return this.GetThumbnailData(h);
          }
          GetOrQueueThumbnail(t, i, n, l, m, c, g) {
            if (!i) return;
            const h = this.GetKey(t, i, n, l, m, c, g);
            let M = this.GetThumbnailData(h);
            if (!M) {
              let y = `thumbnail_${t}_${c}_${g}`;
              performance.mark(y),
                this.QueueThumbnailRequest(t, i, n, l, m, c, g).then(() => {
                  try {
                    const G = performance.measure(`measure_${y}`, y);
                    G && Qn.Get().AddPerfMeasure(G.duration);
                  } catch (G) {
                    (0, me.q_)(
                      `CThumbnailCache:: cant measure ${y}, error: ${G}`,
                    );
                  }
                }),
                (M = this.GetThumbnailData(h));
            }
            return M;
          }
          QueueThumbnailRequest(t, i, n, l, m, c, g) {
            const h = this.GetKey(t, i, n, l, m, c, g),
              M = this.GetThumbnailData(h);
            if (M && (M.data || M.bIsLoading)) return this.k_AlreadyResolvedOK;
            this.SetThumbnailData(h, { data: null, bIsLoading: !0 }),
              this.m_PendingInfoPromise &&
                (this.m_rgPendingRequest[0].strRecordingID != i ||
                  this.m_rgPendingRequest.length > this.k_nMaxBatchSize) &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              (!this.m_PendingInfoPromise ||
                this.m_rgPendingRequest[0].strRecordingID != i) &&
                ((this.m_PendingInfoPromise = new Promise(
                  (G) => (this.m_PendingInfoResolve = G),
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS,
                )));
            const y = {
              gameID: t,
              strRecordingID: i,
              strClipID: n,
              nRecordingOffsetMS: l,
              nRecordingStartOffsetMS: m,
              cPxMajorAxis: c,
              bPreciseTiming: g,
            };
            return (
              this.m_rgPendingRequest.some((G) => va(G, y)) ||
                (this.m_rgPendingRequest.push(y),
                this.m_mapPromises.set(h, this.m_PendingInfoPromise)),
              this.m_PendingInfoPromise
            );
          }
          async FlushPendingInfo() {
            if (typeof this.m_PendingInfoResolve == "undefined") return;
            const t = this.m_PendingInfoResolve,
              i = this.m_rgPendingRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              (this.m_rgPendingRequest = []),
              (this.m_PendingTimer = void 0),
              await this.InternalLoadMultipleThumbnails(i),
              t();
          }
          async InternalLoadMultipleThumbnails(t) {
            t.sort((i, n) => i.nRecordingOffsetMS - n.nRecordingOffsetMS);
            try {
              const i = t.map((l) => l.nRecordingOffsetMS * 1e3),
                n = await yn(
                  t[0].strRecordingID,
                  t[0].strClipID,
                  void 0,
                  i,
                  t[0].cPxMajorAxis,
                  t[0].bPreciseTiming,
                );
              (0, Sa.wT)(
                (n == null ? void 0 : n.length) == i.length,
                `CThumbnailCache.InternalLoadMultipleThumbnails request ${i.length} and got back ${n == null ? void 0 : n.length}`,
              );
              for (
                let l = 0;
                l < i.length && l < (n == null ? void 0 : n.length);
                ++l
              ) {
                const m = t[l],
                  c = this.GetKey(
                    m.gameID,
                    m.strRecordingID,
                    m.strClipID,
                    m.nRecordingOffsetMS,
                    m.nRecordingStartOffsetMS,
                    m.cPxMajorAxis,
                    m.bPreciseTiming,
                  );
                let g = n ? n[l].image_data() : null;
                this.SetThumbnailData(c, { data: g, bIsLoading: !1 });
              }
            } catch (i) {
              (0, me.ZI)("Failed to load multiple request thumbnails", i);
              for (let n = 0; n < t.length; ++n) {
                const l = t[n],
                  m = this.GetKey(
                    l.gameID,
                    l.strRecordingID,
                    l.strClipID,
                    l.nRecordingOffsetMS,
                    l.nRecordingStartOffsetMS,
                    l.cPxMajorAxis,
                    t[0].bPreciseTiming,
                  );
                this.SetThumbnailData(m, { data: null, bIsLoading: !1 });
              }
            }
          }
          async LoadThumbnail(t, i, n, l, m, c, g) {
            const h = this.GetKey(t, i, n, l, m, c, g),
              M = this.GetThumbnailData(h);
            return M && M.data
              ? !0
              : (this.m_mapPromises.has(h) ||
                  this.m_mapPromises.set(
                    h,
                    this.InternalLoadThumbnail(t, i, n, l, m, c, g),
                  ),
                this.m_mapPromises.get(h));
          }
          async InternalLoadThumbnail(t, i, n, l, m, c, g) {
            const h = this.GetKey(t, i, n, l, m, c, g);
            try {
              const M = await yn(i, n, void 0, [l * 1e3], c, g);
              if ((M == null ? void 0 : M.length) > 0) {
                let y = M ? M[0].image_data() : null;
                return (
                  this.SetThumbnailData(h, { data: y, bIsLoading: !1 }), !0
                );
              }
              (0, me.tH)(
                `ThumbnailImage: got empty jpeg ${M.length} list back ${i} @ ${l}`,
              );
            } catch (M) {
              (0, me.ZI)(
                `ThumbnailImage: Fail to load thumbnail ${i} @ ${l} with ${M}`,
              ),
                this.SetThumbnailData(h, { data: null, bIsLoading: !1 });
            }
            return !1;
          }
          static Get() {
            return (
              Qn.s_Singleton || (Qn.s_Singleton = new Qn()), Qn.s_Singleton
            );
          }
        };
        Vr(mn, "s_Singleton"),
          ya([W.sH], mn.prototype, "m_mapThumbnailImages", 2);
        let cn = mn;
        function Ra(s) {
          var t;
          const i = (0, S.useRef)(null),
            n = (0, Te.CH)(),
            l = (0, pa.m)("useThumbnailAsURL");
          return (
            (0, S.useEffect)(() => {
              var m;
              if (
                s &&
                !((m = l == null ? void 0 : l.token) != null && m.reason)
              ) {
                const c = new Blob([s], { type: "image/jpeg" }),
                  g = URL.createObjectURL(c);
                (i.current = g), n();
              }
              return () => {
                i.current &&
                  (URL.revokeObjectURL(i.current), (i.current = void 0));
              };
            }, [
              (t = l == null ? void 0 : l.token) == null ? void 0 : t.reason,
              s,
              n,
            ]),
            i.current
          );
        }
        function Ba() {
          return cn.Get().GetPerfMeasures();
        }
        function Ca(s, t, i, n, l, m, c) {
          const g = (0, x.q3)(() =>
            cn.Get().GetOrQueueThumbnail(s, i, t, n, l, m, c),
          );
          return Ra(g == null ? void 0 : g.data);
        }
        function Ms() {
          return cn.Get().ClearThumbnailData();
        }
        var Ga = _(98609),
          Gi = _(56718),
          ti = _(21196);
        const Kr = { nBeforeMS: 0, nAfterMS: 12e3 },
          We = S.createContext({
            globalStartMS: void 0,
            globalEndMS: void 0,
            setRange: null,
            setStartMS: null,
            setEndMS: null,
            globalPreviewStartMS: void 0,
            globalPreviewEndMS: void 0,
            setPreviewRange: null,
            clearPreviewSelection: null,
            selectionZoomCount: 0,
            eInitMethod: void 0,
            startMetrics: void 0,
            endMetrics: void 0,
            zoomIntoSelection: null,
            zoomOutSelection: null,
          });
        function bs(s) {
          const { children: t, loader: i } = s,
            [n, l] = React.useState(),
            [m, c] = React.useState(),
            [g, h] = React.useState(),
            [M, y] = React.useState(),
            G = React.useMemo(
              () => ({
                originalGlobalMS: 0,
                originalRangeMethod: void 0,
                latestRangeMethod: void 0,
              }),
              [],
            ),
            [w, D] = React.useState({ ...G }),
            [k, F] = React.useState({ ...G }),
            [H, q] = React.useState(),
            [Q, te] = React.useState(),
            [V, ne] = React.useState(0),
            ye = useTimelinePlaybackCoordinator(),
            Ue = React.useCallback(() => {
              h(null),
                l(void 0),
                c(void 0),
                y(void 0),
                D(G),
                F(G),
                ye.ClearPlaybackStop();
            }, [ye, G]),
            $r = React.useCallback((Ve) => {
              q(Ve.valMS > 0 ? Ve : GlobalRelativeMS(0));
            }, []),
            Fe = React.useCallback(
              (Ve) => {
                const ei = i.GetGlobalTimelineEndMS();
                te(Ve.valMS < ei.valMS ? Ve : ei);
              },
              [i],
            ),
            Ne = React.useCallback(
              (Ve, ei) => {
                $r(Ve), Fe(ei);
              },
              [Fe, $r],
            ),
            Ar = React.useCallback(() => {
              q(void 0), te(void 0);
            }, []),
            Wi = React.useCallback(
              (Ve, ei) => {
                if (Ve !== void 0) {
                  let Mi = w != null ? w : { ...G };
                  Mi.originalGlobalMS == 0 &&
                    ((Mi.originalRangeMethod = Ve),
                    (Mi.originalGlobalMS = ei.valMS)),
                    (Mi.latestRangeMethod = Ve),
                    D(Mi);
                }
                l(ei.valMS > 0 ? ei : GlobalRelativeMS(0));
              },
              [w, G],
            ),
            Zn = React.useCallback(
              (Ve, ei) => {
                if (Ve !== void 0) {
                  let pn = k != null ? k : { ...G };
                  pn.originalGlobalMS == 0 &&
                    ((pn.originalRangeMethod = Ve),
                    (pn.originalGlobalMS = ei.valMS)),
                    (pn.latestRangeMethod = Ve),
                    F(pn);
                }
                const Mi = i.GetGlobalTimelineEndMS();
                c(ei.valMS < Mi.valMS ? ei : Mi);
              },
              [i, k, G],
            ),
            Kn = React.useCallback(
              (Ve, ei, Mi) => {
                M == null && y(Ve), Wi(Ve, ei), Zn(Ve, Mi), Ar();
              },
              [Zn, Wi, Ar, M, y],
            ),
            Ka = React.useCallback(() => {
              ne(V + 1);
            }, [ne, V]),
            Qa = React.useCallback(() => {
              V > 0 && ne(V - 1);
            }, [ne, V]);
          useEffect(() => () => Ue(), [Ue, i]);
          const Dc = React.useMemo(
            () => ({
              globalStartMS: n,
              globalPreviewStartMS: H,
              globalPreviewEndMS: Q,
              globalEndMS: m,
              selectedMarker: g,
              eInitMethod: M,
              startMetrics: w,
              endMetrics: k,
              setStartMS: Wi,
              setEndMS: Zn,
              setRange: Kn,
              setPreviewRange: Ne,
              clearPreviewSelection: Ar,
              setSelectedMarker: (Ve, ei, Mi, pn) => {
                h({ strEntryID: Ve, strTimelineID: ei }),
                  Kn(
                    EClipRangeMethod.k_EClipRangeMethod_Highlight,
                    GlobalRelativeMS(Math.max(0, Mi)),
                    GlobalRelativeMS(pn),
                  );
              },
              clearSelection: Ue,
              selectionZoomCount: V,
              zoomIntoSelection: Ka,
              zoomOutSelection: Qa,
            }),
            [n, H, Q, m, g, M, w, k, Wi, Zn, Kn, Ne, Ar, Ue, V, Qa, Ka],
          );
          return jsx(We.Provider, { value: Dc, children: t });
        }
        function ri() {
          const s = (0, S.useContext)(We);
          return {
            nGlobalStartMS: s.globalStartMS,
            nGlobalEndMS: s.globalEndMS,
          };
        }
        function ys() {
          const s = useContext(We);
          return {
            eInitMethod: s.eInitMethod,
            startMetrics: s.startMetrics,
            endMetrics: s.endMetrics,
          };
        }
        function Ts() {
          const s = useContext(We),
            t =
              s.globalStartMS !== void 0
                ? s.globalStartMS.valMS - s.startMetrics.originalGlobalMS
                : 0,
            i =
              s.globalEndMS !== void 0
                ? s.globalEndMS.valMS - s.endMetrics.originalGlobalMS
                : 0;
          return {
            eInitMethod: s.eInitMethod,
            startMetrics: {
              originalRangeMethod: s.startMetrics.originalRangeMethod,
              latestRangeMethod: s.startMetrics.latestRangeMethod,
              relativeMS: t,
            },
            endMetrics: {
              originalRangeMethod: s.endMetrics.originalRangeMethod,
              latestRangeMethod: s.endMetrics.latestRangeMethod,
              relativeMS: i,
            },
          };
        }
        function Qr() {
          return (0, S.useContext)(We).globalStartMS;
        }
        function Ji() {
          return (0, S.useContext)(We).globalEndMS;
        }
        function On() {
          return (0, S.useContext)(We).setRange;
        }
        function zn() {
          return (0, S.useContext)(We).setStartMS;
        }
        function xn() {
          return (0, S.useContext)(We).setEndMS;
        }
        function Yi() {
          const s = (0, S.useContext)(We);
          return {
            selectedMarker: s.selectedMarker,
            setSelectedMarker: s.setSelectedMarker,
          };
        }
        function Ei() {
          var s, t;
          const i = (0, S.useContext)(We);
          return (
            !isNaN((s = i.globalStartMS) == null ? void 0 : s.valMS) &&
            !isNaN((t = i.globalEndMS) == null ? void 0 : t.valMS)
          );
        }
        function En() {
          return (0, S.useContext)(We).clearSelection;
        }
        function wa() {
          return useContext(We).setPreviewRange;
        }
        function vs() {
          const s = useContext(We);
          return {
            globalStartMS: s.globalPreviewStartMS,
            globalEndMS: s.globalPreviewEndMS,
          };
        }
        function hl() {
          var s, t;
          const i = useContext(We);
          return (
            !isNaN((s = i.globalPreviewStartMS) == null ? void 0 : s.valMS) &&
            !isNaN((t = i.globalPreviewEndMS) == null ? void 0 : t.valMS)
          );
        }
        function Rs() {
          return useContext(We).clearPreviewSelection;
        }
        function Bs() {
          const s = wa(),
            t = useTimelinePlaybackCoordinator();
          return React.useCallback(() => {
            let n = t.GetCurrentPlaybackGlobalMS(0);
            if (n && n.strTimelineID) {
              let [l, m] = t
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  n.strTimelineID,
                  n.nGlobalOffsetMS,
                  Kr.nBeforeMS,
                  Kr.nAfterMS,
                );
              s(GlobalRelativeMS(l), GlobalRelativeMS(m));
            }
          }, [t, s]);
        }
        function ni() {
          const s = On(),
            t = zn(),
            i = xn(),
            n = ri(),
            l = _a(),
            m = jn();
          return S.useCallback(
            (g, h, M, y) => {
              if (M === void 0 && y === void 0) return;
              let G = n.nGlobalStartMS !== void 0 || n.nGlobalEndMS !== void 0,
                w = M || n.nGlobalStartMS,
                D = y || n.nGlobalEndMS;
              w &&
                D &&
                D.valMS <= w.valMS &&
                (M !== void 0 ? (D = void 0) : (w = void 0));
              const k = Kr.nBeforeMS + Kr.nAfterMS;
              w === void 0 && (w = (0, Se.Sb)(D.valMS - k)),
                D === void 0 && (D = (0, Se.Sb)(w.valMS + k));
              const F = w != n.nGlobalStartMS,
                H = D != n.nGlobalEndMS;
              F && H ? s(h, w, D) : F ? t(h, w) : H && i(h, D),
                !G && F && H && l == 0 && m();
            },
            [n, s, t, i, l, m],
          );
        }
        function jn() {
          return (0, S.useContext)(We).zoomIntoSelection;
        }
        function Cs() {
          return useContext(We).zoomOutSelection;
        }
        function _a() {
          return (0, S.useContext)(We).selectionZoomCount;
        }
        function Pa(s) {
          let t = (0, S.useContext)(We),
            i = t.selectionZoomCount,
            n = t.globalStartMS,
            l = t.globalEndMS,
            m = (0, S.useRef)(i),
            c = (0, S.useRef)(null);
          (c.current = s),
            (0, S.useEffect)(() => {
              if (!c.current) return;
              let g =
                !isNaN(n == null ? void 0 : n.valMS) &&
                !isNaN(l == null ? void 0 : l.valMS);
              (m.current == i && g) ||
                ((m.current = i),
                g && i ? c.current(n, l) : c.current(null, null));
            }, [i, n, l, m, c]);
        }
        var Le = _(34360),
          un = _(16346),
          Dn = Object.defineProperty,
          Ia = Object.getOwnPropertyDescriptor,
          mi = (s, t, i) =>
            t in s
              ? Dn(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          ve = (s, t, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Ia(t, i) : t, m = s.length - 1, c;
              m >= 0;
              m--
            )
              (c = s[m]) && (l = (n ? c(t, i, l) : c(l)) || l);
            return n && l && Dn(t, i, l), l;
          },
          pe = (s, t, i) => mi(s, typeof t != "symbol" ? t + "" : t, i);
        const Oa = 5e3,
          kn = 300 * 1e3,
          za = 1e3,
          xa = 10,
          ji = 10;
        var ke = ((s) => (
          (s.Playhead = "Playhead"),
          (s.RangeLeft = "RangeLeft"),
          (s.RangeRight = "RangeRight"),
          (s.Highlight = "Highlight"),
          s
        ))(ke || {});
        class Ea {
          constructor(t, i) {
            pe(this, "m_fnUnregisterFromLoader"),
              pe(this, "m_loader"),
              pe(this, "m_maskBounds", [-1, -1]),
              pe(this, "m_eventTarget"),
              (0, W.Gn)(this),
              (this.m_loader = t),
              (this.m_eventTarget = i);
          }
          Init() {
            (this.m_fnUnregisterFromLoader =
              this.m_loader.AddEventListener(this)),
              this.m_loader.BInitialized() && this.OnLoaderInitialized();
          }
          GetGameID() {
            return this.m_loader.GetGameID();
          }
          BInitialized() {
            return this.m_loader.BInitialized();
          }
          IsActiveRecording(t) {
            return this.m_loader.IsActiveRecording(t);
          }
          IsActiveTimeline(t) {
            return this.m_loader.IsActiveTimeline(t);
          }
          GetStateDescriptionAtGlobalMS(t) {
            return this.m_loader.GetStateDescriptionAtGlobalMS((0, Se.Sb)(t));
          }
          GetTimelineOffsetFromGlobal(t, i) {
            return this.m_loader.GetTimelineOffsetFromGlobal(t, i);
          }
          GetTimelineStartTime(t) {
            const i = this.m_loader.GetTimelineMetadata(t);
            return i != null && i.metadata ? i.metadata.date_recorded : null;
          }
          BEmpty() {
            return !1;
          }
          GetTimelines() {
            return this.m_loader.GetTimelines();
          }
          GetGlobalTimelineEndMS() {
            return this.m_loader.GetGlobalTimelineEndMS();
          }
          GetTimelineDataOrStartLoad(t) {
            return this.m_loader.GetTimelineDataOrStartLoad(t);
          }
          GetTimelineStartBeforeGlobalZeroMS(t) {
            return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(t);
          }
          MakeRelativeToTimelineEndIfActive(t, i) {
            return this.m_loader.MakeRelativeToTimelineEndIfActive(t, i);
          }
          FindRangeEventsAtGlobalMS(t) {
            return this.m_loader.FindRangeEventsAtGlobalMS(t);
          }
          Close() {
            this.m_fnUnregisterFromLoader &&
              (this.m_fnUnregisterFromLoader(),
              (this.m_fnUnregisterFromLoader = void 0)),
              (this.m_loader = null);
          }
          OnLoaderInitialized() {
            this.m_eventTarget.OnLoaderInitialized &&
              this.m_eventTarget.OnLoaderInitialized();
          }
          OnInvalidate(t) {
            this.m_eventTarget.OnInvalidate &&
              this.m_eventTarget.OnInvalidate(t);
          }
          OnTimelineLoaded(t) {
            this.m_eventTarget.OnTimelineLoaded &&
              this.m_eventTarget.OnTimelineLoaded(t);
          }
          OnInvalidateRecording(t, i) {
            this.m_eventTarget.OnInvalidateRecording &&
              this.m_eventTarget.OnInvalidateRecording(t, i);
          }
        }
        class xe {
          constructor(t, i, n) {
            pe(this, "m_playbackCoordinator"),
              pe(this, "m_fnUnregisterPlaybackCoordinator"),
              pe(this, "m_refTimelineParentCtn"),
              pe(this, "m_timelineMask"),
              pe(this, "m_durationMS", 0),
              pe(this, "m_mapTimelineClips", W.sH.map([], { deep: !1 })),
              pe(this, "m_scrollLeftPX", 0),
              pe(this, "m_scrollWindowWidth", null),
              pe(this, "m_scrollWindowOffsetPX", null),
              pe(this, "m_bAutoScrollPaused", !1),
              pe(this, "m_autoScrollPauseTimeout", null),
              pe(this, "m_msVisible", 0),
              pe(this, "m_bCustomZoom", !1),
              pe(this, "m_bUserClipping", !1),
              pe(this, "m_prevLeftAndVisible", null),
              pe(this, "m_rgTimelineOffsets", []),
              pe(this, "m_mapTimelineEntries", W.sH.map([], { deep: !1 })),
              pe(this, "m_bInitialized", !1),
              pe(this, "m_eThumbnailComponent", null),
              pe(this, "m_nGlobalRelativeThumbnailPositionPX"),
              pe(this, "m_thumbnailHighlightEntry"),
              pe(this, "m_phaseToHighlight"),
              (0, W.Gn)(this),
              (this.m_playbackCoordinator = i),
              (this.m_timelineMask = new Ea(t, this)),
              (this.m_fnUnregisterPlaybackCoordinator =
                i.AddEventListener(this)),
              this.UpdateClipSummaries(n),
              this.m_timelineMask.Init();
          }
          BInitialized() {
            return this.m_bInitialized;
          }
          OnLoaderInitialized() {
            (this.m_durationMS =
              this.m_timelineMask.GetGlobalTimelineEndMS().valMS),
              this.OnInvalidate(),
              this.InitDefaultsIfReady();
          }
          InitDefaultsIfReady() {
            !this.m_bInitialized &&
              this.m_scrollWindowWidth &&
              this.m_timelineMask.BInitialized() &&
              ((this.m_bInitialized = !0),
              (this.m_msVisible = this.ComputeDefaultMSVisible()),
              this.ScrollToCenteredGlobalMS(
                this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
              ));
          }
          OnTimelineLoaded(t) {
            if (
              ((0, me.q_)("OnTimelineLoaded", t), !this.FindTimelineOffsets(t))
            ) {
              (0, me.tG)("Missing timeline offset metadata for", t);
              return;
            }
            this.ComputeEntriesForTimeline(t);
          }
          OnInvalidate(t) {
            (0, me.q_)("on invalidate", t);
            const i = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
              n = i - this.m_durationMS,
              l = this.m_durationMS <= 0;
            let m;
            this.m_durationMS = i;
            let c =
              this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
            if (n > 0 && l) this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (n > 0 && !this.m_bAutoScrollPaused && !c)
              this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (n < 0 && this.m_msVisible > i)
              (this.m_msVisible = this.ComputeDefaultMSVisible()),
                this.ScrollToOffset(0);
            else if (n < 0) {
              const M = this.FindClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX,
              );
              if (M) {
                const y = this.ConvertGlobalMSToGlobalPXOffset(
                    M.globalOffsetMS,
                  ),
                  G = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - y);
                m = { strTimelineID: M.timelineID, nTimelineOffsetMS: G };
              }
            }
            const g = this.m_timelineMask.GetTimelines();
            let h = 0;
            if (this.BInitialized() && t) {
              const M = g.findIndex((y) => y.metadata.timeline_id === t);
              M >= 0 && (h = M);
            }
            if (
              ((this.m_rgTimelineOffsets = g.map((M, y) =>
                y >= h
                  ? this.ComputeTimelineOffset(M)
                  : this.m_rgTimelineOffsets[y],
              )),
              m)
            ) {
              const M = this.FindTimelineOffsets(m.strTimelineID);
              if (M) {
                const y = M.globalOffsetMS + m.nTimelineOffsetMS,
                  G = (0, Oe.OQ)(
                    this.ConvertGlobalMSToGlobalPXOffset(y),
                    0,
                    this.GetMaxScrollLeftPX(),
                  );
                this.ScrollToOffset(G);
              }
            }
            g.forEach((M, y) => {
              y >= h && this.ComputeEntriesForTimeline(M.metadata.timeline_id);
            });
          }
          OnFocusGlobalMS(t) {
            this.ScrollToCenteredGlobalMS(t.valMS);
          }
          GetGameID() {
            return this.m_timelineMask.GetGameID();
          }
          SetTimelineParentCtnRef(t) {
            this.m_refTimelineParentCtn = t;
          }
          GetTimelineParentCtnRef() {
            return this.m_refTimelineParentCtn;
          }
          SetThumbnailComponent(t) {
            (this.m_eThumbnailComponent = t),
              t || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
              t !== "Highlight" && (this.m_thumbnailHighlightEntry = null);
          }
          GetThumbnailComponent() {
            return this.m_eThumbnailComponent;
          }
          SetThumbnailPosition(t) {
            this.m_nGlobalRelativeThumbnailPositionPX = t;
          }
          GetThumbnailPosition() {
            return this.m_nGlobalRelativeThumbnailPositionPX;
          }
          SetThumbnailEntry(t) {
            this.m_thumbnailHighlightEntry = t;
          }
          GetThumbnailEntry() {
            return this.m_eThumbnailComponent === "Highlight"
              ? this.m_thumbnailHighlightEntry
              : null;
          }
          Close() {
            this.m_timelineMask.Close(),
              (this.m_timelineMask = null),
              this.m_fnUnregisterPlaybackCoordinator &&
                this.m_fnUnregisterPlaybackCoordinator(),
              (this.m_fnUnregisterPlaybackCoordinator = null),
              (this.m_bInitialized = !1),
              this.m_autoScrollPauseTimeout &&
                this.ClearAutoScrollPauseTimeout();
          }
          ComputeDefaultMSVisible() {
            const t = this.GetTimelineMarginWidth() * 2,
              i = ji * (this.m_rgTimelineOffsets.length - 1),
              n = Math.max(1, this.m_scrollWindowWidth - i - t),
              l = Math.ceil(
                ((t + i) * this.m_durationMS) /
                  (this.m_scrollWindowWidth - (t + i)),
              ),
              m = za * n;
            return Math.min(this.m_durationMS + l, m);
          }
          ZoomIn(t, i) {
            if (this.m_msVisible <= 1e3) return;
            const l = this.m_msVisible - this.m_msVisible / 1.1 ** t,
              m = l * i,
              c = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              g = Math.max(this.m_msVisible - l, 1e3);
            (this.m_msVisible = g),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(c + m));
          }
          ZoomOut(t, i) {
            const n =
              this.m_durationMS +
              this.ConvertDeltaPXToDurationMS(
                ji * (this.m_rgTimelineOffsets.length - 1) +
                  this.GetTimelineMarginWidth() * 2,
              );
            if (this.m_msVisible >= n) return;
            const l = this.m_msVisible * 1.1 ** t - this.m_msVisible,
              m = l * i,
              c = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              g = Math.min(this.m_msVisible + l, n);
            (this.m_msVisible = g),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(c - m));
          }
          IsTempZoom() {
            return !!this.m_prevLeftAndVisible;
          }
          SetTempZoomScale(t, i) {
            let n = Math.max(t, 0),
              l = Math.min(i, this.m_durationMS);
            (this.m_prevLeftAndVisible = [
              this.m_scrollLeftPX,
              this.m_msVisible,
            ]),
              (this.m_msVisible = l - n);
            const m = this.ConvertGlobalMSToGlobalPXOffset(n);
            this.ScrollToOffset(m);
          }
          ClearTempZoomScale() {
            if (!this.m_prevLeftAndVisible) return;
            const [t, i] = this.m_prevLeftAndVisible;
            (this.m_prevLeftAndVisible = null),
              this.ScrollToOffset(t),
              (this.m_msVisible = i);
          }
          SetUserIsClipping(t) {
            this.m_bUserClipping = t;
          }
          GetTimelineGapWidth() {
            return ji;
          }
          GetTimelineMarginWidth() {
            return 12;
          }
          UpdateClipSummaries(t = []) {
            this.m_mapTimelineClips.clear(),
              t.forEach((i) => {
                const n = i.start_timeline_id;
                this.m_mapTimelineClips.has(n) ||
                  this.m_mapTimelineClips.set(n, []);
                const l = {
                  clipID: i.clip_id,
                  msDuration: parseInt(i.duration_ms),
                  msTimelineOffset: parseInt(i.start_offset_ms),
                  timelineID: n,
                };
                this.m_mapTimelineClips.get(n).push(l);
              });
          }
          BEmpty() {
            return this.m_timelineMask.BEmpty();
          }
          ComputeTimelineOffset(t) {
            const i = isNaN(parseInt(t.metadata.duration_ms))
                ? 0
                : parseInt(t.metadata.duration_ms),
              n = t.metadata.recordings.map((c) => {
                const g = parseInt(c.start_offset_ms);
                let h = parseInt(c.duration_ms);
                return (
                  isNaN(h) &&
                    this.m_timelineMask.IsActiveRecording(c.recording_id) &&
                    (h = i - g),
                  {
                    recordingID: c.recording_id,
                    timelineOffsetMS: g,
                    nDurationMS: h,
                    bIsActive: this.m_timelineMask.IsActiveRecording(
                      c.recording_id,
                    ),
                    recordingType: c.recording_type,
                  }
                );
              }),
              m = (t.metadata.phases || []).map((c) => {
                const g = parseInt(c.background_timeline_offset),
                  h = parseInt(c.duration_ms);
                return { timelineOffsetMS: g, nDurationMS: h, phase: c };
              });
            return {
              timelineID: t.metadata.timeline_id,
              globalOffsetMS: t.nGlobalOffsetMS.valMS,
              nDurationMS: i,
              recordingOffsets: n,
              phaseOffsets: m,
            };
          }
          GetCurrentZoomScale() {
            return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
          }
          GetClipsForTimeline(t) {
            return this.m_mapTimelineClips.get(t) || [];
          }
          ComputeEntriesForTimeline(t) {
            const i = this.m_timelineMask.GetTimelineDataOrStartLoad(t);
            !i ||
              i.m_strState != "loaded" ||
              this.m_mapTimelineEntries.set(t, {
                rgGameModes: i.m_rgGameModeChanges,
                rgHighlights: i.m_rgEntries,
              });
          }
          GetVisibleTimelineGameModes(t) {
            var i;
            return (i = this.m_mapTimelineEntries.get(t)) == null
              ? void 0
              : i.rgGameModes;
          }
          GetVisibleTimelineHighlights(t) {
            var i;
            return (i = this.m_mapTimelineEntries.get(t)) == null
              ? void 0
              : i.rgHighlights;
          }
          GetStateDescriptionAtGlobalMS(t) {
            return this.m_timelineMask.GetStateDescriptionAtGlobalMS(t);
          }
          FindRangeEventsAtGlobalMS(t) {
            return this.m_timelineMask.FindRangeEventsAtGlobalMS(t);
          }
          GetTimelineOffsetMS(t) {
            return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(t);
          }
          ScrollToCenteredGlobalMS(t) {
            const i = this.ConvertGlobalMSToGlobalPXOffset(t);
            this.ScrollToOffsetCentered(i);
          }
          ScrollToOffset(t) {
            this.m_scrollLeftPX = (0, Oe.OQ)(t, 0, this.GetMaxScrollLeftPX());
          }
          ScrollToOffsetCentered(t) {
            const i = Math.max(0, t - 0.5 * this.m_scrollWindowWidth);
            this.ScrollToOffset(i);
          }
          ScrollBy(t) {
            const i = this.m_scrollLeftPX + t;
            this.ScrollToOffset(i);
          }
          GetAutoScrollPaused() {
            return this.m_bAutoScrollPaused;
          }
          SetAutoScrollPaused(t) {
            this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = t);
          }
          GetAutoScrollPauseTimeout() {
            return this.m_autoScrollPauseTimeout;
          }
          ClearAutoScrollPauseTimeout() {
            this.m_autoScrollPauseTimeout &&
              clearTimeout(this.m_autoScrollPauseTimeout),
              (this.m_autoScrollPauseTimeout = null);
          }
          SetAutoScrollPauseTimeout(t = Oa) {
            this.ClearAutoScrollPauseTimeout(),
              (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
                this.SetAutoScrollPaused(!1);
              }, t));
          }
          ScrollToEnd() {
            this.ScrollToOffset(this.GetMaxScrollLeftPX());
          }
          SetScrollWindowWidth(t) {
            (this.m_scrollWindowWidth = t),
              this.m_timelineMask.BInitialized() &&
                (this.ScrollToOffset(this.m_scrollLeftPX),
                this.InitDefaultsIfReady());
          }
          SetScrollWindowOffset(t) {
            this.m_scrollWindowOffsetPX = t;
          }
          GetScrollWindowOffset() {
            return this.m_scrollWindowOffsetPX;
          }
          GetScrollableWidthPX() {
            var t;
            if (!((t = this.m_rgTimelineOffsets) != null && t.length)) return 0;
            const i = this.m_rgTimelineOffsets.length - 1,
              n = this.m_rgTimelineOffsets[i];
            return (
              i * ji +
              this.ConvertDurationMSToDeltaPX(n.globalOffsetMS + n.nDurationMS)
            );
          }
          GetOverscanWidth() {
            return (this.GetScrollWindowWidth() * xa) / 100;
          }
          GetScrollWindowWidth() {
            return this.m_scrollWindowWidth;
          }
          GetMaxScrollLeftPX() {
            return Math.max(
              0,
              this.GetScrollableWidthPX() -
                this.GetScrollWindowWidth() +
                2 * this.GetTimelineMarginWidth(),
            );
          }
          BReachedMaxScroll() {
            return (
              Math.ceil(this.m_scrollLeftPX) ===
              Math.ceil(this.GetMaxScrollLeftPX())
            );
          }
          BReachedMinScroll() {
            return this.m_scrollLeftPX === 0;
          }
          GetVisualWindowStartPX() {
            return this.m_scrollLeftPX;
          }
          GetVisualWidth() {
            return Math.min(
              this.m_scrollWindowWidth,
              this.GetScrollableWidthPX() + 2 * this.GetTimelineMarginWidth(),
            );
          }
          GetVirtualWindowStartPX() {
            return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
          }
          GetVirtualWindowWidthPX() {
            const t = (0, Oe.OQ)(
                this.m_scrollLeftPX,
                0,
                this.GetOverscanWidth(),
              ),
              i = Math.min(
                this.GetScrollableWidthPX() -
                  (this.m_scrollLeftPX + this.m_scrollWindowWidth),
                this.GetOverscanWidth(),
              );
            return t + this.m_scrollWindowWidth + i;
          }
          GetVirtualWindowEndPX() {
            return (
              this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX()
            );
          }
          GetVisibleTimelines() {
            const t =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.GetVirtualWindowStartPX(),
                ) + 1,
              i = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.GetVirtualWindowEndPX(),
              );
            return this.m_rgTimelineOffsets.slice(t, i + 1).map((n) => {
              const l = Math.max(
                  n.globalOffsetMS,
                  this.ConvertPXOffsetToGlobalMS(
                    this.GetVirtualWindowStartPX(),
                  ),
                ),
                m = Math.min(
                  n.nDurationMS - (l - n.globalOffsetMS),
                  this.ConvertDeltaPXToDurationMS(
                    this.GetVirtualWindowWidthPX(),
                  ),
                ),
                c = this.ConvertGlobalMSToGlobalPXOffset(l),
                g = this.ConvertDurationMSToDeltaPX(m),
                h = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
                M = this.ConvertDurationMSToDeltaPX(n.nDurationMS);
              return {
                ...n,
                pxStart: h,
                pxDuration: M,
                msVisibleStart: l,
                msVisibleDuration: m,
                pxVisibleStart: c,
                pxVisibleDuration: g,
              };
            });
          }
          GetVisibleRecordings() {
            const t = [];
            return (
              this.GetVisibleTimelines().forEach((i) => {
                i.recordingOffsets.forEach((n) => {
                  const l =
                      i.pxStart + this.GetPXForDuration(n.timelineOffsetMS),
                    m = l + this.GetPXForDuration(n.nDurationMS);
                  m < this.GetVirtualWindowStartPX() ||
                    l > this.GetVirtualWindowEndPX() ||
                    t.push({
                      recordingID: n.recordingID,
                      nStartPX: l,
                      nEndPX: m,
                      bIsActive: n.bIsActive,
                      recordingType: n.recordingType,
                    });
                });
              }),
              t
            );
          }
          GetVisibleClips() {
            const t = [];
            return (
              this.GetVisibleTimelines().forEach((i) => {
                const n = this.ConvertGlobalMSToGlobalPXOffset(
                  i.globalOffsetMS,
                );
                this.GetClipsForTimeline(i.timelineID).forEach((l) => {
                  const m = n + this.GetPXForDuration(l.msTimelineOffset),
                    c = Math.min(
                      this.GetVirtualWindowEndPX(),
                      this.ConvertGlobalMSToGlobalPXOffset(
                        i.globalOffsetMS + l.msTimelineOffset + l.msDuration,
                      ),
                    );
                  c < this.GetVirtualWindowStartPX() ||
                    m > this.GetVirtualWindowEndPX() ||
                    t.push({ clipID: l.clipID, pxClipStart: m, pxClipEnd: c });
                });
              }),
              t
            );
          }
          GetPXForDuration(t) {
            return t / this.GetCurrentZoomScale();
          }
          GetVisibleTimelinesInWindow() {
            const t =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.m_scrollLeftPX,
                ) + 1,
              i = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX + this.m_scrollWindowWidth,
              );
            return this.m_rgTimelineOffsets.slice(t, i + 1);
          }
          GetVisibleWindowRelativeTimelines() {
            return this.GetVisibleTimelinesInWindow().map((t) => {
              const i = this.m_scrollLeftPX,
                n = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
                l = this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS),
                m = l + this.ConvertDurationMSToDeltaPX(t.nDurationMS),
                c = Math.max(l, i),
                g = Math.min(m, n);
              return {
                timelineID: t.timelineID,
                nVisibleStartPX: c,
                nEndPX: g,
                nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(i),
                nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(i),
              };
            });
          }
          ConvertPXToTimelineRelativeMS(t, i = "start") {
            const n = this.ConvertPXOffsetToGlobalMS(t);
            let l = this.m_timelineMask.GetTimelineOffsetFromGlobal(n, 0);
            return i == "end-if-active" &&
              l.strTimelineID &&
              this.m_timelineMask.IsActiveTimeline(l.strTimelineID)
              ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
                  l.strTimelineID,
                  l.nTimelineOffsetMS.valMS,
                )
              : l.nTimelineOffsetMS.valMS;
          }
          GetTimeRecorded(t) {
            return this.m_timelineMask.GetTimelineStartTime(t);
          }
          ConvertGlobalMSToClipOrNone(t) {
            if (!this.m_timelineMask) return null;
            const i = this.m_timelineMask.GetTimelineOffsetFromGlobal(t, 0);
            if (!i) return null;
            const { nTimelineOffsetMS: n, strTimelineID: l } = i;
            return l && this.m_mapTimelineClips.has(l)
              ? this.m_mapTimelineClips
                  .get(l)
                  .find(
                    (c) =>
                      c.msTimelineOffset <= n.valMS &&
                      c.msTimelineOffset + c.msDuration >= n.valMS,
                  )
              : null;
          }
          ConvertGlobalMSToScrollWindowPXOffset(t) {
            return (
              this.ConvertGlobalMSToGlobalPXOffset(t) - this.m_scrollLeftPX
            );
          }
          ConvertGlobalMSToGlobalPXOffset(t, i = -1) {
            i < 0 &&
              (i = xi.rJ(
                this.m_rgTimelineOffsets,
                (l) => t - l.globalOffsetMS,
              ));
            const n = i * ji;
            return this.ConvertDurationMSToDeltaPX(t) + n;
          }
          ConvertPXOffsetToGlobalMS(t, i = !0) {
            if (this.BPositionInGap(t)) {
              if (!i) return null;
              const c = this.FindClosestTimelineEndForOffsetPX(t);
              return c ? c.globalOffsetMS + c.nDurationMS : 0;
            }
            const n = this.FindClosestTimelineStartForOffsetPX(t);
            if (!n) return null;
            const l = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
              m = this.ConvertDeltaPXToDurationMS(t - l);
            return n.globalOffsetMS + m;
          }
          FindClosestTimelineEndForOffsetPX(t) {
            const i = this.FindIndexOfClosestTimelineEndForOffsetPX(t);
            return i < 0 ? null : this.m_rgTimelineOffsets[i];
          }
          FindClosestTimelineStartForOffsetPX(t) {
            const i = this.FindIndexOfClosestTimelineStartForOffsetPX(t);
            return i < 0 ? null : this.m_rgTimelineOffsets[i];
          }
          FindIndexOfClosestTimelineEndForOffsetPX(t) {
            return xi.rJ(this.m_rgTimelineOffsets, (i) => {
              const l =
                this.ConvertGlobalMSToGlobalPXOffset(i.globalOffsetMS) +
                this.ConvertDurationMSToDeltaPX(i.nDurationMS);
              return t - l;
            });
          }
          FindIndexOfClosestTimelineStartForOffsetPX(t) {
            return xi.rJ(this.m_rgTimelineOffsets, (i) => {
              const n = this.ConvertGlobalMSToGlobalPXOffset(i.globalOffsetMS);
              return t - n;
            });
          }
          FindTimelineOffsets(t) {
            return this.m_rgTimelineOffsets.find((i) => i.timelineID === t);
          }
          BPositionInGap(t) {
            const i = this.FindIndexOfClosestTimelineEndForOffsetPX(t);
            if (i < 0) return !1;
            const n = i + 1;
            if (n >= this.m_rgTimelineOffsets.length) return !1;
            const l = this.m_rgTimelineOffsets[i],
              m = this.m_rgTimelineOffsets[n],
              c = this.ConvertGlobalMSToGlobalPXOffset(l.globalOffsetMS),
              g = this.ConvertGlobalMSToGlobalPXOffset(m.globalOffsetMS);
            return t < g && t !== c;
          }
          ConvertDurationMSToDeltaPX(t) {
            return t / this.GetCurrentZoomScale();
          }
          ConvertDeltaPXToDurationMS(t) {
            return t * this.GetCurrentZoomScale();
          }
          SetPhaseToHighlight(t) {
            this.m_phaseToHighlight = t;
          }
          GetPhaseToHighlight() {
            return this.m_phaseToHighlight;
          }
        }
        ve([W.sH], xe.prototype, "m_durationMS", 2),
          ve([W.sH], xe.prototype, "m_scrollLeftPX", 2),
          ve([W.sH], xe.prototype, "m_scrollWindowWidth", 2),
          ve([W.sH], xe.prototype, "m_scrollWindowOffsetPX", 2),
          ve([W.sH], xe.prototype, "m_bAutoScrollPaused", 2),
          ve([W.sH], xe.prototype, "m_autoScrollPauseTimeout", 2),
          ve([W.sH], xe.prototype, "m_msVisible", 2),
          ve([W.sH.ref], xe.prototype, "m_rgTimelineOffsets", 2),
          ve([W.sH], xe.prototype, "m_bInitialized", 2),
          ve([W.sH], xe.prototype, "m_eThumbnailComponent", 2),
          ve([W.sH], xe.prototype, "m_nGlobalRelativeThumbnailPositionPX", 2),
          ve([W.sH], xe.prototype, "m_thumbnailHighlightEntry", 2),
          ve([W.sH], xe.prototype, "m_phaseToHighlight", 2),
          ve([W.XI], xe.prototype, "OnLoaderInitialized", 1),
          ve([W.XI], xe.prototype, "InitDefaultsIfReady", 1),
          ve([W.XI], xe.prototype, "OnInvalidate", 1),
          ve([W.XI], xe.prototype, "ZoomIn", 1),
          ve([W.XI], xe.prototype, "ZoomOut", 1),
          ve([W.XI], xe.prototype, "SetTempZoomScale", 1),
          ve([W.XI], xe.prototype, "ClearTempZoomScale", 1),
          ve([W.XI], xe.prototype, "UpdateClipSummaries", 1),
          ve([Te.oI], xe.prototype, "BReachedMaxScroll", 1),
          ve([Te.oI], xe.prototype, "BReachedMinScroll", 1);
        const Fn = S.createContext(null);
        function Gs(s) {
          let {
              loader: t,
              playbackCoordinator: i,
              children: n,
              clipSummaries: l,
              refTimelineParentCtn: m,
            } = s,
            [c, g] = (0, S.useState)(null);
          return (
            (0, S.useEffect)(() => {
              if (!t) return;
              let h = new xe(t, i, l);
              return g(h), () => h.Close();
            }, [t]),
            (0, S.useEffect)(() => {
              c && c.UpdateClipSummaries(l);
            }, [c, l]),
            (0, S.useEffect)(() => {
              c && m && c.SetTimelineParentCtnRef(m.current);
            }, [c, m]),
            ja(c),
            ci(c),
            c ? (0, u.jsx)(Fn.Provider, { value: c, children: n }) : null
          );
        }
        function ci(s) {
          let t = S.useCallback(
            (i, n) => {
              if (!s) return;
              if (!i || !n) {
                s.ClearTempZoomScale();
                return;
              }
              let l = Math.floor((n.valMS - i.valMS) * 0.1),
                m = n.valMS - i.valMS;
              m < kn * 0.9 && (l = Math.floor((kn - m) / 2));
              let c = i.valMS - l,
                g = n.valMS + l;
              s.SetTempZoomScale(c, g);
            },
            [s],
          );
          Pa(t);
        }
        function ja(s) {
          let t = Ei();
          (0, S.useEffect)(() => {
            s && s.SetUserIsClipping(t);
          }, [s, t]);
        }
        function ie() {
          return (0, S.useContext)(Fn);
        }
        var A = _(20525),
          Ge = _(54637);
        const ai = (0, S.createContext)({});
        function ws(s) {
          const {
              children: t,
              onMarkerCreated: i,
              onNavigateToClip: n,
              onNavigateToScreenshot: l,
              onSetGamepadHeaderVisible: m,
              onShowProgressBar: c,
              onNavigateToGRSettings: g,
              onNavigateToMedia: h,
              onNavigateToFAQ: M,
              onShowError: y,
            } = s,
            G = useMemo(
              () => ({
                onMarkerCreated: i,
                onNavigateToClip: n,
                onNavigateToGRSettings: g,
                onNavigateToScreenshot: l,
                onSetGamepadHeaderVisible: m,
                onShowProgressBar: c,
                onNavigateToMedia: h,
                onNavigateToFAQ: M,
                onShowError: y,
              }),
              [n, i, l, m, c, g, h, M, y],
            );
          return jsx(ai.Provider, { value: G, children: t });
        }
        function gi() {
          return (0, S.useContext)(ai);
        }
        var fi = _(36174),
          wi = _(34843),
          Wn = Object.defineProperty,
          Da = Object.getOwnPropertyDescriptor,
          ka = (s, t, i) =>
            t in s
              ? Wn(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          Jr = (s, t, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Da(t, i) : t, m = s.length - 1, c;
              m >= 0;
              m--
            )
              (c = s[m]) && (l = (n ? c(t, i, l) : c(l)) || l);
            return n && l && Wn(t, i, l), l;
          },
          qe = (s, t, i) => ka(s, typeof t != "symbol" ? t + "" : t, i);
        const Fa = null;
        async function _s(s, t, i, n, l) {
          const m = t.GetTimelineAndOffsetRelativeToCurrentPlayback(),
            c = t.GetTimelineAndOffsetRelativeToCurrentPlayback(Fa);
          if (m && c) {
            const g = c.nGlobalOffsetMS - m.nGlobalOffsetMS,
              h = await t.GenerateClipNameFromTimeline(
                m.strTimelineID,
                m.nTimelineOffsetMS,
                c.strTimelineID,
                c.nTimelineOffsetMS,
              );
            return B(
              s,
              t.GetClipID(),
              h,
              m.strTimelineID,
              m.nTimelineOffsetMS,
              c.strTimelineID,
              c.nTimelineOffsetMS,
              g,
              i,
              n,
              l,
            );
          } else LogWarning("Failed to determine time start/end for clip");
          return null;
        }
        async function hi(s, t, i, n, l, m, c) {
          if (!isNaN(n) && !isNaN(i) && i < n) {
            const g = t.ConvertGlobalOffsetToTimelineRelativeOffset(i),
              h = t.ConvertGlobalOffsetToTimelineRelativeOffset(n);
            if (g && h) {
              const M = n - i,
                y = await t.GenerateClipNameFromTimeline(
                  g.strTimelineID,
                  g.nTimelineOffsetMS.valMS,
                  h.strTimelineID,
                  h.nTimelineOffsetMS.valMS,
                );
              return B(
                s,
                t.GetClipID(),
                y,
                g.strTimelineID,
                g.nTimelineOffsetMS.valMS,
                h.strTimelineID,
                h.nTimelineOffsetMS.valMS,
                M,
                l,
                m,
                c,
              );
            } else
              LogWarning("Could not find the timeline for start or stop", g, h);
          } else LogWarning("Range not setup for creating the clip");
          return null;
        }
        class dn {
          constructor(t, i, n, l, m, c, g, h) {
            qe(this, "m_bCreationWasTemporary"),
              qe(this, "m_fnCreate"),
              qe(this, "m_creationResult"),
              qe(this, "m_bCleanedUp", !1),
              qe(this, "m_nClipLengthSeconds"),
              qe(this, "m_strSuggestedClipName"),
              qe(this, "m_strGameID"),
              qe(this, "m_strSrcClipID"),
              qe(this, "m_eInitMethod"),
              qe(this, "m_startMetrics"),
              qe(this, "m_endMetrics"),
              (this.m_fnCreate = t),
              (this.m_nClipLengthSeconds = i),
              (this.m_strSuggestedClipName = n),
              (this.m_strGameID = l),
              (this.m_strSrcClipID = m),
              (this.m_eInitMethod = c),
              (this.m_startMetrics = g),
              (this.m_endMetrics = h);
          }
          Request() {
            return {
              create: this.create,
              cleanup: this.cleanup,
              bExistingClip: !1,
              nClipLengthSeconds: this.m_nClipLengthSeconds,
              strSuggestedClipName: this.m_strSuggestedClipName,
              gameID: new wi.VS(this.m_strGameID),
              strSrcClipID: this.m_strSrcClipID,
              eInitMethod: this.m_eInitMethod,
              startMetrics: this.m_startMetrics,
              endMetrics: this.m_endMetrics,
            };
          }
          async create(t, i) {
            return this.m_creationResult
              ? Promise.resolve(this.m_creationResult)
              : ((this.m_creationResult = await this.m_fnCreate(t, i)),
                (this.m_bCreationWasTemporary = t),
                ta(
                  new wi.VS(this.m_strGameID),
                  this.m_eInitMethod,
                  this.m_nClipLengthSeconds,
                  this.m_startMetrics,
                  this.m_endMetrics,
                ),
                Promise.resolve(this.m_creationResult));
          }
          async cleanup() {
            var t;
            if (this.m_bCleanedUp)
              throw new Error("cleanup called twice on clip creation");
            if (
              ((this.m_bCleanedUp = !0),
              (t = this.m_creationResult) != null &&
                t.clipSummary &&
                this.m_bCreationWasTemporary)
            ) {
              const { fnDeleteClip: i } = so();
              await i(this.m_creationResult.clipSummary.clip_id);
            }
          }
        }
        Jr([Te.oI], dn.prototype, "create", 1),
          Jr([Te.oI], dn.prototype, "cleanup", 1);
        function B(s, t, i, n, l, m, c, g, h, M, y) {
          const G = (w, D) => a(s, t, i, n, l, m, c, w, D);
          return new dn(G, g / 1e3, i, s, t, h, M, y).Request();
        }
        function e(s) {
          const t = GetClipSummary(s);
          if (!t) return null;
          const i = GetGRS().GetClipExportProgress(s),
            n = parseInt(t.duration_ms) / 1e3,
            l = t.file_size ? (parseInt(t.file_size) * 8) / (1024 * n) : void 0;
          class m {
            constructor() {
              qe(this, "m_bCreated", !1);
            }
            async create(h) {
              return (
                this.m_bCreated ||
                  ((this.m_bCreated = !0),
                  ReportClipRange(
                    new CGameID(t.game_id),
                    EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    parseInt(t.duration_ms) / 1e3,
                    {
                      relativeMS: 0,
                      originalRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                      latestRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    },
                    {
                      relativeMS: 0,
                      originalRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                      latestRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    },
                  )),
                Promise.resolve({ result: k_EResultOK, clipSummary: t })
              );
            }
            async cleanup() {
              return Promise.resolve();
            }
          }
          Jr([bind], m.prototype, "create", 1),
            Jr([bind], m.prototype, "cleanup", 1);
          let c = new m();
          return {
            create: c.create,
            cleanup: c.cleanup,
            nClipLengthSeconds: n,
            bExistingClip: !0,
            strSuggestedClipName: t.name,
            strCurrentExportPath: i == null ? void 0 : i.exportPath,
            strSrcClipID: s,
            gameID: new CGameID(t.game_id),
            nEstimatedBitrateKbps: l,
            eInitMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            startMetrics: {
              relativeMS: 0,
              originalRangeMethod:
                EClipRangeMethod.k_EClipRangeMethod_EntireClip,
              latestRangeMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            },
            endMetrics: {
              relativeMS: 0,
              originalRangeMethod:
                EClipRangeMethod.k_EClipRangeMethod_EntireClip,
              latestRangeMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            },
          };
        }
        async function a(s, t, i, n, l, m, c, g, h) {
          const { fnSaveClip: M } = ea();
          (0, me.tG)(`start ${n} @ ${l} upto ${m} @ ${c}`);
          try {
            const y = await M(
                s,
                t,
                i,
                { timeline_id: n, offset_ms: "" + l },
                { timeline_id: m, offset_ms: "" + c },
                g,
                h,
              ),
              { clipSummary: G, result: w } = y;
            return (
              G
                ? (0, me.tG)(`Clip ${G.clip_id} created`)
                : (0, me.tG)(`Clip was not created: ${w}`),
              y
            );
          } catch (y) {
            (0, me.ZI)(y);
          }
          return { result: Oi.zi };
        }
        const v = 20,
          Wa = "PhaseList";
        function oo(s) {
          const t = s.tags || {};
          return {
            filter_gameid: s.gameid,
            filter_search_string: s.strSearch || void 0,
            filter_tags: Object.keys(t).map((i) => ({ group: i, name: t[i] })),
            filter_phase_id: s.phaseID,
          };
        }
        function pl(s = {}) {
          lo();
          const t = oo(s);
          return useInfiniteQuery({
            queryKey: [Wa, "Query", t],
            queryFn: async (i) => {
              const l = (
                await GameRecordingService.QueryPhases({
                  count: v,
                  page: i.pageParam,
                  ...t,
                })
              )
                .Body()
                .toObject();
              if (s.strSearch && s.strSearch.trim()) {
                const m = s.strSearch.toLowerCase();
                for (const c of l.phases)
                  for (const g of c.tags)
                    g.bFilterMatch = g.name.toLowerCase().indexOf(m) > -1;
              }
              return {
                ...l,
                nextPage: l.phases.length === v ? i.pageParam + 1 : null,
              };
            },
            initialPageParam: 0,
            getNextPageParam: (i) => i.nextPage,
          });
        }
        function lo() {
          const s = useQueryClient();
          useEffect(() => {
            const t = () => (
                s.invalidateQueries({ queryKey: [Wa] }), k_EResultOK
              ),
              i = GameRecordingService.RegisterForNotifyPhaseListChanged(t),
              n = GameRecordingService.RegisterForNotifyClipCreated(t),
              l = GameRecordingService.RegisterForNotifyClipDeleted(t);
            return () => {
              i.unregister(), n.unregister(), l.unregister();
            };
          }, [s]);
        }
        function Sl(s) {
          return useQuery({
            queryKey: [Wa, "GetTags", s],
            queryFn: async () => {
              const i = (await GameRecordingService.GetTags({ game_id: s }))
                  .Body()
                  .toObject().tags,
                { rgIconGroups: n } = Ps(i);
              return n.sort((l, m) => m[0].priority - l[0].priority);
            },
          });
        }
        function Ps(s) {
          const t = {};
          for (const l of s)
            t[l.group] || (t[l.group] = []), t[l.group].push(l);
          const i = [],
            n = [];
          for (const l of Object.values(t)) {
            const m = l.some(({ icon: c }) => !!c);
            l.sort((c, g) => g.priority - c.priority),
              m ? i.push(l) : n.push(...l);
          }
          return { rgIconGroups: i, rgTextOnlyTags: n };
        }
        function Ml(s, t) {
          return useMemo(() => mo(s, t), [s, t]);
        }
        function mo(s = [], t = []) {
          const { rgIconGroups: i, rgTextOnlyTags: n } = Ps(s),
            l = [
              ...t.map((c) => ({ type: "attribute", attribute: c })),
              ...i.map((c) => ({ type: "tags", tags: c })),
            ],
            m = (c) =>
              c.type === "attribute"
                ? c.attribute.priority
                : c.tags[0].priority;
          return l.sort((c, g) => m(g) - m(c)), { rgMetadata: l, rgDemoted: n };
        }
        function bl(s) {
          return Is(s.date_recorded);
        }
        function Is(s) {
          const t = new Date(),
            i = new Date(s * 1e3),
            n = t.getFullYear() == i.getFullYear(),
            l = IsDateSameDay(t, i);
          let m = "";
          if (!l) {
            const M = {
              day: "numeric",
              month: "short",
              year: n ? void 0 : "numeric",
            };
            m = i.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              M,
            );
          }
          const c = { hour: "numeric", minute: "numeric" },
            g = i.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              c,
            ),
            h = m ? `${m} ${g}` : g;
          return { strDate: m, strTime: g, strDateTime: h };
        }
        function yl(s, t) {
          const i = new Date(),
            n = new Date(s * 1e3),
            l = new Date(t * 1e3),
            m = i.getFullYear() == l.getFullYear(),
            c = n.getFullYear() == l.getFullYear(),
            g = c && n.getMonth() == l.getMonth(),
            h = g && n.getDate() == l.getDate(),
            { strDateTime: M } = Is(s);
          let y = "";
          if (!h) {
            const D = {
              day: "numeric",
              month: g && m ? void 0 : "short",
              year: c ? void 0 : "numeric",
            };
            y =
              l.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                D,
              ) + " ";
          }
          const G = { hour: "numeric", minute: "numeric" },
            w = l.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              G,
            );
          return `${M} - ${y}${w}`;
        }
        function co(s, t, i, n) {
          const l = i + 1,
            m = l + n - 2;
          return B(
            s,
            void 0,
            void 0,
            t,
            l,
            t,
            m,
            m - l,
            ti.Ov.r8,
            {
              latestRangeMethod: ti.Ov.r8,
              originalRangeMethod: ti.Ov.r8,
              relativeMS: 0,
            },
            {
              latestRangeMethod: ti.Ov.r8,
              originalRangeMethod: ti.Ov.r8,
              relativeMS: 0,
            },
          ).create(!1);
        }
        var pi = _(82734),
          uo = _(7450);
        const Os = S.createContext({
          bInContainer: !1,
          bContainerFocus: !1,
          nMouseClientXPX: null,
          globalMouseXPX: null,
          scrollWindowMouseXPX: null,
          fnRegisterMouseEvent: null,
          bContextMenuOpen: !1,
          setContextMenuOpen: () => {},
        });
        function go(s) {
          const { children: t } = s,
            [i, n] = (0, S.useState)(!1),
            [l, m] = (0, S.useState)(!1),
            [c, g] = (0, S.useState)(!1),
            [h, M] = (0, S.useState)(),
            y = (0, S.useRef)(void 0),
            G = ie(),
            w = (0, x.q3)(() => G.GetScrollableWidthPX()),
            D = (0, x.q3)(() => G.GetVisualWindowStartPX()),
            k = (0, x.q3)(() => G.GetScrollWindowWidth()),
            F = (0, x.q3)(() => G.GetScrollWindowOffset()),
            H = (0, x.q3)(() => G.GetTimelineMarginWidth()),
            q = S.useMemo(() => {
              if (y.current) {
                const Ne = D - F - H;
                return (0, Se.OB)(Oe.OQ(h + Ne, 0, w));
              }
              return (0, Se.OB)(0);
            }, [H, h, F, D, w]),
            Q = S.useMemo(() => {
              if (y.current) {
                const Ne = y.current.getBoundingClientRect(),
                  Ar = w > k ? F : Ne.x;
                return (0, Se.QP)(Oe.OQ(h - Ar, 0, k));
              }
              return (0, Se.QP)(0);
            }, [h, F, k, w]),
            te = (0, S.useCallback)(
              (Ne, Ar) => (
                y.current && y.current.addEventListener(Ne, Ar),
                () => {
                  var Wi;
                  return (Wi = y.current) == null
                    ? void 0
                    : Wi.removeEventListener(Ne, Ar);
                }
              ),
              [],
            ),
            V = (0, S.useCallback)(() => n(!0), []),
            ne = (0, S.useCallback)(() => n(!1), []),
            ye = (0, S.useCallback)((Ne) => M(Ne.clientX), []),
            Ue = (0, S.useCallback)((Ne) => m(!0), []),
            $r = (0, S.useCallback)((Ne) => m(!1), []);
          (0, S.useEffect)(() => {
            const Ne = (0, pi.qf)(y.current);
            return (
              Ne.addEventListener("mousemove", ye),
              () => Ne.removeEventListener("mousemove", ye)
            );
          }, [ye]);
          const Fe = (0, S.useMemo)(
            () => ({
              bContainerFocus: l,
              bInContainer: i,
              nMouseClientXPX: h,
              globalMouseXPX: q,
              scrollWindowMouseXPX: Q,
              fnRegisterMouseEvent: te,
              bContextMenuOpen: c,
              setContextMenuOpen: g,
            }),
            [l, i, c, h, q, Q, te],
          );
          return (0, u.jsx)(Os.Provider, {
            value: Fe,
            children: (0, u.jsx)("div", {
              ref: y,
              onMouseOver: Ue,
              onFocus: Ue,
              onMouseOut: $r,
              onBlur: $r,
              onMouseEnter: V,
              onMouseLeave: ne,
              className: uo.MouseListenerContainer,
              children: t,
            }),
          });
        }
        function Di() {
          return (0, S.useContext)(Os);
        }
        function qn() {
          return Di().globalMouseXPX;
        }
        function qa() {
          return Di().scrollWindowMouseXPX;
        }
        function zs() {
          return Di().bInContainer;
        }
        function Na() {
          return Di().bContainerFocus;
        }
        function xs() {
          const s = Di();
          return [s.bContextMenuOpen, s.setContextMenuOpen];
        }
        function Ua(s, t) {
          const i = Di().fnRegisterMouseEvent,
            n = (0, S.useRef)(void 0),
            l = (0, S.useCallback)(() => {
              n.current = i(s, t);
            }, [i, t, s]),
            m = (0, S.useCallback)(() => {
              n.current && n.current();
            }, []);
          (0, S.useEffect)(() => (l(), () => m()), [l, m]);
        }
        function Es() {
          const s = ie(),
            t = ce(),
            i = ni(),
            n = (0, x.q3)(() => !t.ShouldModeShowClipControls()),
            l = Xi(),
            { onMarkerCreated: m, onNavigateToClip: c } = gi(),
            [g, h] = xs();
          return S.useCallback(
            (y, G, w, D) =>
              n || l
                ? null
                : (0, un.lX)(
                    (0, u.jsx)(fo, {
                      isCurrentPlayback: w,
                      nGlobalOffsetMS: G,
                      playbackCoordinator: t,
                      timelineView: s,
                      fnSetSelectionClipRange: i,
                      onMarkerCreated: m,
                      onNavigateToClip: c,
                      onContextMenuOpenChange: h,
                    }),
                    y,
                    D,
                  ),
            [n, l, t, s, i, m, c, h],
          );
        }
        function fo(s) {
          const {
              playbackCoordinator: t,
              timelineView: i,
              nGlobalOffsetMS: n,
              fnSetSelectionClipRange: l,
              isCurrentPlayback: m,
              onMarkerCreated: c,
              onNavigateToClip: g,
              onContextMenuOpenChange: h,
            } = s,
            M = (0, x.q3)(() => t.GetClipsAtGlobalMS(n)),
            y = js(i);
          (0, S.useEffect)(() => (h(!0), () => h(!1)), [h]);
          const w = (() => {
              const { strTimelineID: V, nTimelineOffsetMS: ne } =
                t.ConvertGlobalOffsetToTimelineRelativeOffset(n.valMS);
              if (!V) return null;
              const ye = t.GetLoader().GetTimelineData(V);
              if (!ye) return null;
              const Ue = xi.rJ(
                ye.m_rgPhases,
                (Fe) => ne.valMS - parseInt(Fe.time),
              );
              if (Ue < 0) return null;
              const $r = ye.m_rgPhases[Ue];
              return ne.valMS >= parseInt($r.time) &&
                ne.valMS <= parseInt($r.time) + parseInt($r.duration)
                ? { strTimelineID: V, phase: $r }
                : null;
            })(),
            D = (V) => {
              const ne = (ye, Ue) => {
                c && c(ye, Ue, V);
              };
              t.AddUserMarkerAtGlobalMS(
                n,
                "/GameRecording/AddMarker/TimelineCtxMenu",
                ne,
              ),
                t.SetPlaytimeFromGlobalMS(n),
                t.FocusGlobalMS(n);
            },
            k = () => {
              l(t, ti.Ov.fo, n, void 0),
                t.SetPlaytimeFromGlobalMS(n),
                t.FocusGlobalMS(n);
            },
            F = () => {
              l(t, ti.Ov.fo, void 0, n),
                t.SetPlaytimeFromGlobalMS(n),
                t.FocusGlobalMS(n);
            },
            H = () => {
              M.length > 0 &&
                (Ur.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/TimelineCtxMenu",
                ),
                g && g(M[0].strClipID));
            },
            q = () => {
              const { strTimelineID: V, nTimelineOffsetMS: ne } =
                  t.ConvertGlobalOffsetToTimelineRelativeOffset(n.valMS),
                ye = t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(V);
              Tn(t.GetGameID(), V, ne, t.GetClipID());
            },
            Q = () => {
              if (!w) return;
              const { phase: V, strTimelineID: ne } = w;
              co(t.GetGameID(), ne, parseInt(V.time), parseInt(V.duration));
            },
            te = (V) => i.SetPhaseToHighlight(V);
          return (
            (0, S.useEffect)(() => () => i.SetPhaseToHighlight(null), [i]),
            (0, u.jsxs)(Le.tz, {
              refInstance: y,
              children: [
                (0, u.jsx)(Le.kt, {
                  onSelected: D,
                  className: Ge.TimelineContextMenuItem,
                  children: (0, u.jsxs)("div", {
                    className: (0, Z.A)(Ge.MenuItem, Ge.AddUserMarker),
                    children: [
                      (0, u.jsx)(A.pH, {}),
                      (0, re.we)(
                        m
                          ? "#Playback_UserSelectionControls_AddUserMarker"
                          : "#TimelineDialog_AddMarker",
                      ),
                    ],
                  }),
                }),
                (0, u.jsx)(Le.kt, {
                  onSelected: q,
                  className: Ge.TimelineContextMenuItem,
                  children: (0, u.jsxs)("div", {
                    className: (0, Z.A)(Ge.MenuItem, Ge.TakeScreenshot),
                    children: [
                      (0, u.jsx)(A.i7, {}),
                      (0, re.we)(
                        m
                          ? "#Playback_UserSelectionControls_TakeScreenshot"
                          : "#TimelineDialog_TakeScreenshot",
                      ),
                    ],
                  }),
                }),
                (0, u.jsx)(Le.kt, {
                  onSelected: k,
                  className: Ge.TimelineContextMenuItem,
                  children: (0, u.jsxs)("div", {
                    className: (0, Z.A)(Ge.MenuItem, Ge.StartEndClip),
                    children: [
                      (0, u.jsx)(A.Nm, { direction: "left" }),
                      (0, re.we)(
                        m
                          ? "#Playback_UserSelectionControls_SetClipStart"
                          : "#TimelineContext_SetClipStart",
                      ),
                    ],
                  }),
                }),
                (0, u.jsx)(Le.kt, {
                  onSelected: F,
                  className: Ge.TimelineContextMenuItem,
                  children: (0, u.jsxs)("div", {
                    className: (0, Z.A)(Ge.MenuItem, Ge.StartEndClip),
                    children: [
                      (0, u.jsx)(A.Nm, { direction: "right" }),
                      (0, re.we)(
                        m
                          ? "#Playback_UserSelectionControls_SetClipEnd"
                          : "#TimelineContext_SetClipEnd",
                      ),
                    ],
                  }),
                }),
                !!w &&
                  (0, u.jsx)(Le.kt, {
                    onSelected: Q,
                    className: Ge.TimelineContextMenuItem,
                    onMouseOver: () => te([w.strTimelineID, w.phase.time]),
                    onMouseLeave: () => te(null),
                    children: (0, u.jsxs)("div", {
                      className: (0, Z.A)(Ge.MenuItem, Ge.ClipPhase),
                      children: [
                        (0, u.jsx)(A.O5, {}),
                        (0, re.we)("#TimelineDialog_ClipPhase"),
                      ],
                    }),
                  }),
                M.length > 0 &&
                  (0, u.jsx)(Le.kt, {
                    onSelected: H,
                    className: Ge.TimelineContextMenuItem,
                    children: (0, u.jsxs)("div", {
                      className: (0, Z.A)(Ge.MenuItem, Ge.ViewClip),
                      children: [
                        (0, u.jsx)(Gi.CeX, {}),
                        (0, re.we)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function ho() {
          const s = ce(),
            t = ni(),
            i = (0, x.q3)(() => !s.ShouldModeShowClipControls()),
            n = Xi(),
            { onMarkerCreated: l } = gi();
          return S.useCallback(
            (c, g) => {
              if (i || n) return;
              const h = (0, u.jsx)(po, {
                onMarkerCreated: l,
                playbackCoordinator: s,
                fnSetSelectionClipRange: t,
              });
              (0, un.lX)(h, c, g);
            },
            [i, n, l, s, t],
          );
        }
        function po(s) {
          const { playbackCoordinator: t, fnSetSelectionClipRange: i } = s,
            n = (0, S.useRef)(void 0),
            { onMarkerCreated: l } = gi(),
            m = (M) => {
              const y = (w, D) => {
                  l && l(w, D, M);
                },
                G = t.GetGlobalMSPlaytime();
              t.AddUserMarkerAtGlobalMS(
                G,
                "/GameRecording/AddMarker/VideoCtxMenu",
                y,
              ),
                t.SetPlaytimeFromGlobalMS(G),
                t.FocusGlobalMS(G);
            },
            c = () => {
              const M = t.GetGlobalMSPlaytime();
              i(t, ti.Ov.fo, M, void 0),
                t.SetPlaytimeFromGlobalMS(M),
                t.FocusGlobalMS(M);
            },
            g = () => {
              const M = t.GetGlobalMSPlaytime();
              i(t, ti.Ov.fo, void 0, M),
                t.SetPlaytimeFromGlobalMS(M),
                t.FocusGlobalMS(M);
            },
            h = () => {
              const M = t.GetGlobalMSPlaytime(),
                { strTimelineID: y, nTimelineOffsetMS: G } =
                  t.ConvertGlobalOffsetToTimelineRelativeOffset(M.valMS),
                w = t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(y);
              Tn(t.GetGameID(), y, G, t.GetClipID());
            };
          return (0, u.jsxs)(Le.tz, {
            refInstance: n,
            children: [
              (0, u.jsx)(Le.kt, {
                onSelected: m,
                className: Ge.TimelineContextMenuItem,
                children: (0, u.jsxs)("div", {
                  className: (0, Z.A)(Ge.MenuItem, Ge.AddUserMarker),
                  children: [
                    (0, u.jsx)(A.Od, {}),
                    (0, re.we)("#Playback_UserSelectionControls_AddUserMarker"),
                  ],
                }),
              }),
              (0, u.jsx)(Le.kt, {
                onSelected: h,
                className: Ge.TimelineContextMenuItem,
                children: (0, u.jsxs)("div", {
                  className: (0, Z.A)(Ge.MenuItem, Ge.TakeScreenshot),
                  children: [
                    (0, u.jsx)(A.i7, {}),
                    (0, re.we)(
                      "#Playback_UserSelectionControls_TakeScreenshot",
                    ),
                  ],
                }),
              }),
              (0, u.jsx)(Le.kt, {
                onSelected: c,
                className: Ge.TimelineContextMenuItem,
                children: (0, u.jsxs)("div", {
                  className: (0, Z.A)(Ge.MenuItem, Ge.StartEndClip),
                  children: [
                    (0, u.jsx)(A.Nm, { direction: "left" }),
                    (0, re.we)("#Playback_UserSelectionControls_SetClipStart"),
                  ],
                }),
              }),
              (0, u.jsx)(Le.kt, {
                onSelected: g,
                className: Ge.TimelineContextMenuItem,
                children: (0, u.jsxs)("div", {
                  className: (0, Z.A)(Ge.MenuItem, Ge.StartEndClip),
                  children: [
                    (0, u.jsx)(A.Nm, { direction: "right" }),
                    (0, re.we)("#Playback_UserSelectionControls_SetClipEnd"),
                  ],
                }),
              }),
            ],
          });
        }
        function js(s) {
          const t = (0, x.q3)(() => s.GetAutoScrollPauseTimeout()),
            i = (0, x.q3)(() => s.GetVisualWindowStartPX()),
            n = (0, S.useRef)(void 0),
            l = (0, S.useRef)(void 0);
          return (
            (0, S.useEffect)(() => {
              n.current && l.current ? l.current.Hide() : (n.current = !0);
            }, [i]),
            (0, S.useEffect)(() => {
              s.SetAutoScrollPaused(!0);
            }, [s]),
            (0, S.useEffect)(() => {
              t && s.ClearAutoScrollPauseTimeout();
            }, [t, s]),
            l
          );
        }
        var be = _(67721),
          So = _(3166),
          Mo = Object.defineProperty,
          bo = (s, t, i) =>
            t in s
              ? Mo(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          Ds = (s, t, i) => bo(s, typeof t != "symbol" ? t + "" : t, i);
        const Nn = "steam_";
        var ki = ((s) => (
          (s[(s.White = 0)] = "White"),
          (s[(s.Red = 1)] = "Red"),
          (s[(s.Orange = 2)] = "Orange"),
          (s[(s.Yellow = 3)] = "Yellow"),
          (s[(s.Green = 4)] = "Green"),
          (s[(s.Blue = 5)] = "Blue"),
          (s[(s.Purple = 6)] = "Purple"),
          (s[(s.Brown = 7)] = "Brown"),
          (s[(s.Gray = 8)] = "Gray"),
          s
        ))(ki || {});
        function Aa(s) {
          switch (s) {
            default:
            case 0:
              return "#DCDEDF";
            case 1:
              return "#FB7C7C";
            case 2:
              return "#FBB17C";
            case 3:
              return "#FBDF7C";
            case 4:
              return "#9DFB7C";
            case 5:
              return "#7CD5FB";
            case 6:
              return "#A57CFB";
            case 7:
              return "#C18C5B";
            case 8:
              return "#B8BCBF";
          }
        }
        function Tl(s) {
          if (!s) return 0;
          const t = s.toLowerCase(),
            i = ks(ki);
          for (const n of i) if (n.toLowerCase() == t) return ki[n];
          return 0;
        }
        function vl(s) {
          return ki[s].toLowerCase();
        }
        function ks(s) {
          return Object.keys(s).filter((t) => !Number.isNaN(t));
        }
        const yo = ks(ki).map((s) => ki[s]),
          Fs = class Jn {
            constructor() {
              Ds(this, "m_mapSteamTimelineMarkers", new Map());
            }
            GetMarkerByID(t) {
              const i = t.toLowerCase().startsWith(Nn)
                ? t.slice(Nn.length).toLowerCase()
                : t.toLowerCase();
              if (this.m_mapSteamTimelineMarkers.has(i))
                return this.m_mapSteamTimelineMarkers.get(i);
              const n = parseInt(i);
              return typeof n == "number" && n >= 0 && n <= 99
                ? { func: (l) => A.wN({ nNumber: n }), color: 8 }
                : qs();
            }
            GetAllUseableMarkerID() {
              return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
                (t) => Nn + t,
              );
            }
            static Get() {
              return (
                Jn.s_Singleton ||
                  ((Jn.s_Singleton = new Jn()), Jn.s_Singleton.Init()),
                Jn.s_Singleton
              );
            }
            AddMarker(t, i, n) {
              const l = n != null ? n : 0;
              this.m_mapSteamTimelineMarkers.set(t, { func: i, color: l });
              for (const m of yo) {
                const c = `${t}_${ki[m]}`.toLowerCase();
                this.m_mapSteamTimelineMarkers.set(c, { func: i, color: m });
              }
            }
            Init() {
              this.AddMarker("explosion", A.Wq, 8),
                this.AddMarker("attack", A.LB, 8),
                this.AddMarker("defend", A.po, 8),
                this.AddMarker("combat", A.t4, 8),
                this.AddMarker("chest", A.k8, 8),
                this.AddMarker("view", A.Ss, 8),
                (0, So.Y2)()
                  ? this.AddMarker("death", A.X, 8)
                  : this.AddMarker("death", A.lQ, 8),
                this.AddMarker("x", A.X, 8),
                this.AddMarker("plus", A.FW, 8),
                this.AddMarker("minus", A.Hs, 8),
                this.AddMarker("info", A.R2, 8),
                this.AddMarker("bolt", A.y$, 8),
                this.AddMarker("caution", A.eT, 8),
                this.AddMarker("completed", A.AY, 8),
                this.AddMarker("checkmark", A.MG, 8),
                this.AddMarker("effect", A.Mj, 8),
                this.AddMarker("purchase", A.QY, 8),
                this.AddMarker("ribbon", A.y4, 8),
                this.AddMarker("scroll", A.OY, 8),
                this.AddMarker("crown", A.Oe, 8),
                this.AddMarker("starburst", A.bL, 8),
                this.AddMarker("flag", A.lN, 8),
                this.AddMarker("cart", A.Z3, 8),
                this.AddMarker("timer", A.M4, 8),
                this.AddMarker("chat", A.ry, 8),
                this.AddMarker("wrench", A.Ml, 8),
                this.AddMarker("transfer", A.mr, 8),
                this.AddMarker("edit", A.ff, 8),
                this.AddMarker("bookmark", A.Xh, 8),
                this.AddMarker("invalid", A.WO, 8),
                this.AddMarker("star", A.FE, 8),
                this.AddMarker("circle", A.jl, 8),
                this.AddMarker("square", A.M6, 8),
                this.AddMarker("triangle", A.lM, 8),
                this.AddMarker("heart", A.B1, 8),
                this.AddMarker("diamond", A.JB, 8),
                this.AddMarker("gem", A.gD, 8),
                this.AddMarker("group", A.YJ, 8),
                this.AddMarker("pair", A.Rm, 8),
                this.AddMarker("single", A.KJ, 8),
                this.AddMarker("trophy", A.Oi, 8),
                this.AddMarker("achievement", A.Oi, 8),
                this.AddMarker("screenshot", A.pw, 8),
                this.AddMarker("bug", A.zP, 8),
                this.AddMarker("fix", A.Ml, 8),
                this.AddMarker("person", A.KJ, 8),
                this.AddMarker("question", A.O_, 8);
            }
          };
        Ds(Fs, "s_Singleton");
        let Ws = Fs;
        function Rl() {
          return Ws.Get().GetAllUseableMarkerID();
        }
        function La(s) {
          return Ws.Get().GetMarkerByID(s);
        }
        function To() {
          return { func: A.pH, color: 5 };
        }
        function vo() {
          return { func: A.Oi, color: 0 };
        }
        function qs() {
          return { func: A.pH, color: 8 };
        }
        function Ns(s) {
          return s && s.toLowerCase().startsWith(Nn);
        }
        var _i = _(95896);
        function Ro(s) {
          let {
            entry: t,
            strMarkerIcon: i,
            onClick: n,
            onMouseEnter: l,
            onMouseLeave: m,
            onContextMenu: c,
            classNames: g,
            style: h,
            faded: M,
            bSelectedMarker: y,
          } = s;
          return (0, u.jsx)("div", {
            style: h != null ? h : {},
            className: (0, Z.A)(g, {
              [_i.HighlightIcon]: !0,
              [_i.Selected]: y,
              [_i.Faded]: M,
            }),
            onClick: (G) => {
              n && n(G);
            },
            onContextMenu: c,
            onMouseEnter: l,
            onMouseLeave: m,
            children: (0, u.jsx)(Ha, { entry: t, strMarkerIcon: i }),
          });
        }
        function Ha(s) {
          let { entry: t, strMarkerIcon: i } = s;
          const l = ce().GetGameID();
          return (0, be.xz)(t)
            ? (0, u.jsx)(Bo, { achievementEntry: t, strGameID: l })
            : (0, be.In)(t)
              ? (0, u.jsx)(wo, {})
              : Ns(i)
                ? (0, u.jsx)(Co, { entry: t, strMarkerIcon: i })
                : (0, u.jsx)(_o, { strMarkerIcon: i, strGameID: l });
        }
        function Bo(s) {
          const { achievementEntry: t, strGameID: i } = s,
            n = new wi.VS(i),
            l = nn(n.GetAppID(), t.achievement_name);
          let m, c;
          if (l) (m = "white"), (c = (0, u.jsx)("img", { src: l.iconURL }));
          else {
            const g = vo();
            (m = Aa(g.color)), (c = g.func({}));
          }
          return (0, u.jsx)("div", {
            className: _i.Marker,
            style: { color: m },
            children: c,
          });
        }
        function Co(s) {
          const { entry: t, strMarkerIcon: i } = s;
          let n, l;
          (0, be.N$)(t) ? ((n = To()), (l = _i.CustomMarker)) : (n = La(i));
          const m = Aa(n.color);
          return (0, u.jsx)(Va, {
            color: m,
            children: (0, u.jsx)("div", { className: l, children: n.func({}) }),
          });
        }
        function Go(s) {
          const { icon: t, className: i } = s;
          return La(t).func({ className: i });
        }
        function wo(s) {
          const t = La("steam_invalid"),
            i = Aa(t.color);
          return (0, u.jsx)(Va, {
            color: i,
            children: (0, u.jsx)("div", { children: t.func({}) }),
          });
        }
        function _o(s) {
          const { strMarkerIcon: t, strGameID: i } = s;
          return (0, u.jsx)(Va, {
            children: (0, u.jsx)(Us, { icon: t, gameID: i }),
          });
        }
        function Us(s) {
          const { icon: t, gameID: i, className: n } = s,
            l = new wi.VS(i).GetAppID(),
            m = $a(l, t);
          if (Ns(t)) return (0, u.jsx)(Go, { ...s });
          if (m === null) return null;
          if (m === void 0) {
            const g = qs();
            return (0, u.jsx)("div", { className: n, children: g.func({}) });
          }
          let c = "";
          return (
            typeof m != "string"
              ? (c = new XMLSerializer().serializeToString(m))
              : (c = m),
            (0, u.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              className: (0, Z.A)(n, _i.GameMarkerSVG),
              children: (0, u.jsx)("g", {
                dangerouslySetInnerHTML: { __html: c },
              }),
            })
          );
        }
        function Va(s) {
          const { children: t, color: i } = s;
          return (0, u.jsx)("div", {
            className: _i.MarkerCtn,
            children: (0, u.jsx)("div", {
              className: _i.Marker,
              style: i ? { color: i } : null,
              children: t,
            }),
          });
        }
        var Po = _(36890),
          Pi = _.n(Po);
        const Io = parseInt(Pi().animationDuration);
        function Oo() {
          const s = ce(),
            t = (0, x.q3)(() => s.GetDisplayHighlightEntry()),
            [i, n] = (0, S.useState)(null),
            l = S.useRef(0);
          return (
            (0, S.useEffect)(() => {
              if (
                !(t != null && t.entry) ||
                (0, be.hT)(t.entry) ||
                (0, be.Te)(t.entry)
              ) {
                n(null);
                return;
              }
              return (
                n(t.entry),
                (l.current = window.setTimeout(
                  () => {
                    s.SetDisplayHighlightEntry(null);
                  },
                  t.duration ? t.duration : Io,
                )),
                () => window.clearTimeout(l.current)
              );
            }, [t, s]),
            i ? (0, u.jsx)(zo, { entry: i }) : null
          );
        }
        function zo(s) {
          const { entry: t } = s,
            i = ce(),
            n = (0, x.q3)(() => i.GetGameID()),
            l = i.GetGameRecordingVideo(),
            m = (0, x.q3)(() => i.GetRecordingID()),
            c = (0, x.q3)(() => l.IsInitialized()),
            g = l.GetVideoHeight(),
            h = l.GetVideoWidth(),
            M = m && c && g > 0 && h > 0 ? { height: g, width: h } : {};
          let y;
          return (
            (0, be.xz)(t)
              ? (y = (0, u.jsx)(xo, { entry: t, strGameID: n }))
              : (0, be.N$)(t)
                ? (y = (0, u.jsx)(
                    Un,
                    {
                      entry: t,
                      strMarkerIcon: t.icon,
                      title: t.title
                        ? t.title
                        : (0, re.we)("#Marker_UserMarker_Title"),
                      description: t.description || "",
                    },
                    t.id,
                  ))
                : (0, be.sX)(t)
                  ? (y = (0, u.jsx)(
                      Un,
                      {
                        entry: t,
                        strMarkerIcon: t.icon,
                        title: (0, re.we)("#MediaManager_ItemType_Screenshot"),
                        description: "",
                      },
                      t.id,
                    ))
                  : (0, be.eJ)(t) &&
                    (y = (0, u.jsx)(
                      Un,
                      {
                        entry: t,
                        strMarkerIcon: t.icon,
                        title: t.title || "",
                        description: t.description || "",
                      },
                      t.id,
                    )),
            (0, u.jsx)("div", {
              className: Pi().BannerVideoOverlay,
              style: M,
              children: y,
            })
          );
        }
        function xo(s) {
          var t, i;
          const { entry: n, strGameID: l } = s,
            m = new wi.VS(l),
            c = nn(m.GetAppID(), n.achievement_name);
          return c
            ? (0, u.jsx)(
                Un,
                {
                  entry: n,
                  strMarkerIcon: "steam_achievement",
                  title: (t = c.name) != null ? t : "",
                  description: (i = c.description) != null ? i : "",
                },
                n.id,
              )
            : null;
        }
        function Un(s) {
          const { entry: t, strMarkerIcon: i, title: n, description: l } = s;
          return (0, u.jsx)("div", {
            className: Pi().PlayerHighlightBanner,
            children: (0, u.jsxs)("div", {
              className: Pi().BannerContents,
              children: [
                (0, u.jsx)("div", {
                  className: Pi().HighlightIcon,
                  children: (0, u.jsx)(Ha, { entry: t, strMarkerIcon: i }),
                }),
                (0, u.jsxs)("div", {
                  className: Pi().InfoBox,
                  children: [
                    n &&
                      (0, u.jsx)("div", {
                        className: Pi().HighlightTitle,
                        children: n,
                      }),
                    l &&
                      (0, u.jsx)("div", {
                        className: Pi().HighlightDesc,
                        children: l,
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        var An = _(19298),
          si = _(71421),
          Eo = _(24660),
          jo = _(76970),
          Xa = _.n(jo),
          Ii = _(92264);
        const Do = parseInt(Xa().animationDuration);
        function ko() {
          const s = ce(),
            t = s.GetGameRecordingVideo(),
            i = (0, x.q3)(() => s.GetRecordingID()),
            n = (0, x.q3)(() => t.IsInitialized()),
            l = t.GetVideoHeight(),
            m = t.GetVideoWidth(),
            c = i && n && l > 0 && m > 0 ? { height: l, width: m } : {},
            g = S.useRef(0),
            h = (0, x.q3)(() => s.GetRelativeTimeForDisplay()),
            M = (0, x.q3)(() => s.GetGameRecordingVideo().IsInitialized()),
            y = (0, S.useMemo)(() => {
              if (isNaN(h) || !M) return null;
              const G = s.ConvertGlobalOffsetToTimelineRelativeOffset(h);
              if (G && s.GetIsActiveTimeline(G.strTimelineID)) {
                const w = s.MakeRelativeToTimelineEndIfActive(
                  G.strTimelineID,
                  G.nTimelineOffsetMS.valMS,
                );
                return (0, Ii.dt)(w / 1e3, !1, !0);
              }
              return null;
            }, [M, h, s]);
          return (
            (0, S.useEffect)(() => {
              if (!isNaN(h))
                return (
                  (g.current = window.setTimeout(() => {
                    s.ClearRelativeTimeDisplay();
                  }, Do)),
                  () => window.clearTimeout(g.current)
                );
            }, [h, s]),
            isNaN(h)
              ? null
              : (0, u.jsx)("div", {
                  className: Xa().RelativeTimeContainer,
                  style: c,
                  children: (0, u.jsx)(
                    "div",
                    { className: Xa().RelativeTime, children: y },
                    y,
                  ),
                })
          );
        }
        function Fo(s) {
          const {
              disableSound: t,
              positionAbsolute: i = !0,
              refVideoResize: n,
              style: l,
              fullscreen: m,
            } = s,
            c = ce(),
            g = aa(c.StopPlayback, c.SetVideoElement),
            h = c.GetGameRecordingVideo(),
            M = (0, x.q3)(() => c.GetRecordingID()),
            y = (0, x.q3)(() => h.GetPlaybackError()),
            G = (0, x.q3)(() => c.GetRecordingMode() === "Overlay"),
            w = Wo(),
            D = Ei(),
            k = y || !M,
            F = S.useRef(void 0);
          let H = (0, Te.Ue)(g, n);
          const q = ho();
          function Q() {
            M && c.TogglePlayPause();
          }
          function te() {
            M && m && m.fnToggleFullscreen();
          }
          const V = S.useCallback(
              ($r) => {
                k ||
                  q($r, {
                    bDisableMouseOverlay: !0,
                    bForcePopup: !0,
                    bAlwaysOnTop: !0,
                  });
              },
              [k, q],
            ),
            ye = !Ga.TS.IN_STEAMUI && !!s.autoPlay;
          let Ue = (0, Z.A)(
            Ee().GameRecordingPlayer,
            k && Ee().NoVideo,
            i && Ee().PositionAbsolute,
            D && Ee().ClippingMode,
            G && Ee().Overlay,
            w && Ee().PlayingClippedRegion,
          );
          return (0, u.jsxs)("div", {
            ref: F,
            className: Ue,
            onClick: Q,
            onContextMenu: V,
            style: l,
            onDoubleClick: te,
            children: [
              (0, u.jsx)("video", {
                ref: H,
                controls: !1,
                muted: t,
                autoPlay: ye,
                playsInline: ye,
              }),
              (0, u.jsx)(Ao, { player: h }),
              (0, u.jsx)(qo, {}),
              (0, u.jsx)(No, {}),
              (0, u.jsx)(Uo, {}),
              !M && (0, u.jsx)(Lo, {}),
              (0, u.jsx)(Oo, {}),
              (0, u.jsx)(ko, {}),
            ],
          });
        }
        function Wo() {
          const s = ce(),
            t = (0, x.q3)(() => s.GetGlobalMSPlaytime()),
            { nGlobalEndMS: i, nGlobalStartMS: n } = ri(),
            l = s.GetGameRecordingVideo();
          return (0, x.q3)(() => l.GetPlaybackError()) || !t || !n || !i
            ? !1
            : t.valMS >= n.valMS && t.valMS <= i.valMS;
        }
        function qo() {
          const s = ce(),
            t = Pn.fi.Get().IsDebugLogEnabled("GR"),
            i = (0, x.q3)(() => s.GetPlaybackStats());
          return !t || !i
            ? null
            : (0, u.jsxs)("div", {
                className: Ee().PerfCtnVideo,
                children: [
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "Average Seek MS: " }),
                      (0, u.jsx)("span", { children: i.nMean.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "StdDev Seek MS: " }),
                      (0, u.jsx)("span", { children: i.nStdDev.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "Slowest Seek MS: " }),
                      (0, u.jsx)("span", { children: i.nMax.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "Fastest Seek MS: " }),
                      (0, u.jsx)("span", { children: i.nMin.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "# Seeks: " }),
                      (0, u.jsx)("span", { children: i.nLength }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "Last Val: " }),
                      (0, u.jsx)("span", { children: i.nLastVal.toFixed(3) }),
                    ],
                  }),
                ],
              });
        }
        function No() {
          const s = Pn.fi.Get().IsDebugLogEnabled("GR"),
            t = ce(),
            i = (0, x.q3)(() => {
              t.GetGlobalMSPlaytime();
            }),
            n = Ba();
          return !s || !n
            ? null
            : (0, u.jsxs)("div", {
                className: Ee().PerfCtnThumbnails,
                children: [
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", {
                        children: "Avg Thumbnail Load MS: ",
                      }),
                      (0, u.jsx)("span", { children: n.nMean.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", {
                        children: "StdDev Thumbnail Load MS: ",
                      }),
                      (0, u.jsx)("span", { children: n.nStdDev.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", {
                        children: "Slowest Thumbnail Load MS: ",
                      }),
                      (0, u.jsx)("span", { children: n.nMax.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", {
                        children: "Fastest Thumbnail Load MS: ",
                      }),
                      (0, u.jsx)("span", { children: n.nMin.toFixed(3) }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "# Loaded: " }),
                      (0, u.jsx)("span", { children: n.nLength }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsx)("span", { children: "Last Load: " }),
                      (0, u.jsx)("span", { children: n.nLastVal.toFixed(3) }),
                    ],
                  }),
                ],
              });
        }
        function Uo() {
          const s = ce(),
            t = s.GetGameRecordingVideo(),
            i = t.GetVideoHeight(),
            n = (0, x.q3)(() => t.BVideoElementWaiting()),
            l = (0, x.q3)(() => t.IsPaused()),
            m = (0, x.q3)(() => t.GetPlaybackError()),
            c = (0, x.q3)(() => t.IsInitialized());
          return !(0, x.q3)(() => s.GetRecordingID()) || (c && !n) || m || l
            ? null
            : (0, u.jsx)("div", {
                className: Ee().LoadingSpinner,
                style: { height: i },
                children: (0, u.jsx)(Gi.y$y, {}),
              });
        }
        function Ao(s) {
          const { player: t } = s,
            i = (0, x.q3)(() => t.GetPlaybackError());
          let n = "";
          switch (i) {
            case Zr.DownloadFailed:
            case Zr.PlaybackError:
            case Zr.MediaTypeError:
              n = "#GameRecording_PlayerError_Generic";
              break;
          }
          return n
            ? (0, u.jsx)("div", {
                className: Ee().PlayerError,
                children: (0, u.jsx)("div", {
                  className: Ee().Text,
                  children: (0, re.we)(n),
                }),
              })
            : null;
        }
        function Lo() {
          const s = ce(),
            t = (0, x.q3)(() => s.GetGamepadMode()),
            { onNavigateToClip: i, onNavigateToFAQ: n } = gi(),
            l = (0, x.q3)(() => s.GetGlobalMSPlaytime()),
            m = s.GetClosestPreviousRecordingForGlobalMS(l),
            c = s.GetClosestNextRecordingForGlobalMS(l),
            g = (0, x.q3)(() => s.GetClipsAtGlobalMS(l)),
            h = (0, S.useCallback)(
              (G) => {
                if (m) {
                  const w = Math.max(parseInt(m.duration_ms) - 500, 0);
                  s.SetPlaytimeFromRecordingOffset(m.recording_id, w, !0, !0),
                    G.stopPropagation();
                }
              },
              [s, m],
            ),
            M = (0, S.useCallback)(
              (G) => {
                c &&
                  (s.SetPlaytimeFromRecordingOffset(c.recording_id, 0),
                  G.stopPropagation());
              },
              [s, c],
            ),
            y = (0, S.useCallback)(
              (G) => {
                g.length > 0 &&
                  (Ur.y.ReportTrackedAction(
                    "/GameRecording/Tooltip/ViewClip/PlayerNoContent",
                  ),
                  i(g[0].strClipID),
                  G.stopPropagation());
              },
              [g, i],
            );
          return (0, u.jsxs)("div", {
            className: Ee().PlayerError,
            children: [
              (0, u.jsx)("div", {
                className: Ee().Title,
                children: (0, re.we)("#GameRecording_PlayerNoContent"),
              }),
              (0, u.jsx)("div", {
                className: Ee().Description,
                children: (0, re.oW)(
                  "#GameRecording_PlayerNoContentDescription",
                  (0, u.jsx)(Eo.Ii, { href: "#", onClick: n }),
                ),
              }),
              !t &&
                (0, u.jsxs)("div", {
                  className: Ee().Buttons,
                  children: [
                    (0, u.jsx)(si.he, {
                      direction: "bottom",
                      toolTipContent: (0, re.we)(
                        m
                          ? "#GameRecording_PlayerNoContentJumpPrevious_tooltip"
                          : "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
                      ),
                      children: (0, u.jsx)(An.Z, {
                        className: (0, Z.A)(
                          Ee().Button,
                          Ee().JumpPrevious,
                          !m && Ee().DisableButton,
                        ),
                        onClick: h,
                        onActivate: h,
                        children: (0, re.we)(
                          "#GameRecording_PlayerNoContentJumpPrevious",
                        ),
                      }),
                    }),
                    g.length > 0 &&
                      (0, u.jsx)(si.he, {
                        direction: "bottom",
                        toolTipContent: (0, re.we)(
                          "#GameRecording_PlayerNoContentSeeClip_tooltip",
                        ),
                        children: (0, u.jsx)(An.Z, {
                          onClick: y,
                          onActivate: y,
                          className: (0, Z.A)(Ee().Button, Ee().GoToClip),
                          children: (0, re.we)(
                            "#GameRecording_PlayerNoContentSeeClip",
                          ),
                        }),
                      }),
                    (0, u.jsx)(si.he, {
                      direction: "bottom",
                      toolTipContent: (0, re.we)(
                        c
                          ? "#GameRecording_PlayerNoContentJumpNext_tooltip"
                          : "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
                      ),
                      children: (0, u.jsx)(An.Z, {
                        className: (0, Z.A)(
                          Ee().Button,
                          Ee().JumpNext,
                          !c && Ee().DisableButton,
                        ),
                        onClick: M,
                        onActivate: M,
                        children: (0, re.we)(
                          "#GameRecording_PlayerNoContentJumpNext",
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        var He = _(8959),
          gn = _(59254);
        const As = 20,
          Ho = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
          Vo = S.memo(function (t) {
            const i = ie(),
              n = (0, x.q3)(() => i.GetVisibleTimelines());
            return (0, u.jsx)(u.Fragment, {
              children: n.map((l) =>
                (0, u.jsx)(
                  Xo,
                  {
                    msVisibleStart: l.msVisibleStart,
                    pxVisibleDuration: l.pxVisibleDuration,
                    pxVisibleStart: l.pxVisibleStart,
                    msTimelineStart: l.globalOffsetMS,
                  },
                  l.timelineID,
                ),
              ),
            });
          }),
          Xo = S.memo(function (t) {
            const {
                msVisibleStart: i,
                msTimelineStart: n,
                pxVisibleDuration: l,
                pxVisibleStart: m,
              } = t,
              { msTickSpacing: c, pxTickSpacing: g } = Ko(),
              h = ie(),
              M = Math.ceil((i - n) / c),
              y = n + M * c,
              G = h.ConvertGlobalMSToGlobalPXOffset(y),
              w = (0, S.useMemo)(() => {
                const D = Math.ceil(l / g),
                  k = [];
                for (let F = 0; F < D; F++) {
                  const H = y + c * F,
                    q = G + F * g,
                    Q = `${H}`;
                  k.push({ key: Q, offsetPX: q, iTimelineRelativeTick: M + F });
                }
                return k;
              }, [l, g, y, c, G, M]);
            return w
              ? (0, u.jsxs)(u.Fragment, {
                  children: [
                    (0, u.jsx)("div", {
                      className: gn.TimelineBacking,
                      style: { transform: `translateX(${m}px)`, width: l },
                    }),
                    w.map((D) =>
                      (0, u.jsx)(
                        Zo,
                        {
                          timelineRelativeIndex: D.iTimelineRelativeTick,
                          globalOffsetPX: D.offsetPX,
                        },
                        D.key,
                      ),
                    ),
                  ],
                })
              : null;
          });
        function Zo(s) {
          const { globalOffsetPX: t, timelineRelativeIndex: i } = s,
            l = i % As === 0 ? gn.Major : gn.Minor;
          return (0, u.jsx)("div", {
            className: gn.TimeTick,
            style: { transform: `translateX(${t}px)` },
            children: (0, u.jsx)("div", {
              className: (0, Z.A)(gn.TickLine, l),
            }),
          });
        }
        function Ko() {
          const s = ie(),
            t = (0, x.q3)(() => s.GetCurrentZoomScale()),
            i = 300,
            n = (g) => Math.abs(i - g / t),
            m = Ho.reduce((g, h) => (n(g) - n(h) < 0 ? g : h)) / As,
            c = m / t;
          return { msTickSpacing: m, pxTickSpacing: c };
        }
        var Fi = _(23533),
          Qo = Object.defineProperty,
          Jo = (s, t, i) =>
            t in s
              ? Qo(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          Ls = (s, t, i) => Jo(s, typeof t != "symbol" ? t + "" : t, i);
        function Yo(s, t) {
          return !(s.nStart >= t.nEnd || s.nEnd <= t.nStart);
        }
        class $o {
          constructor(t) {
            Ls(this, "m_reservations", []),
              Ls(this, "m_nIconWidth"),
              (this.m_nIconWidth = t);
          }
          BAllowIcon(t) {
            const i = {
              nStart: t - this.m_nIconWidth / 2,
              nEnd: t + this.m_nIconWidth / 2,
            };
            let n = 0;
            for (; n < this.m_reservations.length; n++) {
              const l = this.m_reservations[n];
              if (l.nStart >= i.nEnd) break;
              if (Yo(i, l)) return !1;
            }
            return this.m_reservations.splice(n, 0, i), !0;
          }
        }
        var Xr = _(41972),
          Hs = _(73191),
          el = _(2801),
          Vs = _(19316);
        function Xs(s) {
          const {
              closeModal: t,
              strTimelineID: i,
              entry: n,
              playbackCoordinator: l,
              fnClearSelection: m,
            } = s,
            [c, g] = S.useState(n.title || ""),
            [h, M] = S.useState(n.description || ""),
            y = (0, Hs.vs)();
          return y.bLoading
            ? (0, u.jsx)(Hs.Hh, {
                state: y,
                strDialogTitle: (0, re.we)("#Marker_Dialog"),
                closeModal: t,
              })
            : (0, u.jsxs)(el.o0, {
                strTitle: (0, re.we)("#Marker_Dialog"),
                strMiddleButtonText: (0, re.we)("#Marker_Action_Delete"),
                onCancel: t,
                onOK: async () => {
                  y.fnSetLoading(!0),
                    (await l.UpdateUserMarker(i, n, c, h))
                      ? t()
                      : (y.fnSetError(!0),
                        y.fnSetStrError((0, re.we)("#Marker_UpdateFailed")));
                },
                children: [
                  (0, u.jsx)(Vs.pd, {
                    type: "text",
                    value: c,
                    onChange: (G) => g(G.currentTarget.value),
                    label: (0, re.we)("#Marker_Title"),
                  }),
                  (0, u.jsx)(Vs.pd, {
                    type: "text",
                    value: h,
                    onChange: (G) => M(G.currentTarget.value),
                    label: (0, re.we)("#Marker_Description"),
                  }),
                ],
              });
        }
        var Zs = _(88003);
        function tl() {
          const s = ie(),
            t = ce(),
            { setSelectedMarker: i } = Yi(),
            n = En(),
            { onNavigateToClip: l, onNavigateToScreenshot: m } = gi(),
            c = Xi(),
            g = (0, x.q3)(() => !t.ShouldModeShowClipControls());
          return S.useCallback(
            (M, y, G) => {
              if (g) return;
              const w = (0, u.jsx)(rl, {
                markerInfo: y,
                playbackCoordinator: t,
                timelineView: s,
                setSelectedMarker: i,
                onNavigateToClip: l,
                onNavigateToScreenshot: m,
                bLowDiskSpace: c,
                clearRange: n,
              });
              (0, un.lX)(w, M, G);
            },
            [g, c, t, s, i, l, m, n],
          );
        }
        function rl(s) {
          const {
              playbackCoordinator: t,
              timelineView: i,
              markerInfo: n,
              setSelectedMarker: l,
              clearRange: m,
              bLowDiskSpace: c,
              onNavigateToClip: g,
              onNavigateToScreenshot: h,
            } = s,
            M = (0, x.q3)(() =>
              i.ConvertGlobalMSToClipOrNone(n.nGlobalMS.valMS),
            ),
            y = (0, x.q3)(() =>
              t.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                n.nGlobalMS.valMS,
              ),
            ),
            G = js(i),
            w = (Q) => {
              let te = Ks,
                V = T;
              (0, be.zG)(n.entry) &&
                ((te = 0), (V = parseInt(n.entry.duration)));
              const [ne, ye] = t
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  n.strTimelineID,
                  n.nGlobalMS.valMS,
                  te,
                  V,
                );
              t.SetPlaytimeFromGlobalMS((0, Se.Sb)(ne)),
                l == null || l(n.entry.id, n.strTimelineID, ne, ye),
                Ur.y.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/ClipFromHighlight",
                ),
                Q.stopPropagation();
            },
            D = () => {
              M &&
                (Ur.y.ReportTrackedAction(
                  `/GameRecording/MarkerCtxMenu/ViewClip/${n.entry.type}`,
                ),
                g && g(M.clipID));
            },
            k = (Q) => {
              if (!(0, be.N$)(n.entry)) return;
              Ur.y.ReportTrackedAction(
                `/GameRecording/HighlightCtxMenu/Marker/Edit/${n.entry.type}`,
              );
              let te = (0, u.jsx)(Xs, {
                entry: n.entry,
                playbackCoordinator: t,
                fnClearSelection: m,
                strTimelineID: n.strTimelineID,
              });
              (0, Zs.pg)(te, (0, pi.uX)(Q)),
                Q.stopPropagation(),
                Q.preventDefault();
            },
            F = (Q) => {
              (0, be.N$)(n.entry) &&
                (Ur.y.ReportTrackedAction(
                  `/GameRecording/HighlightCtxMenu/Marker/Delete/${n.entry.type}`,
                ),
                t.RemoveUserMarker(n.strTimelineID, n.entry.id));
            },
            H = () => {
              var Q;
              !(0, be.sX)(n.entry) ||
                !((Q = n.entry) != null && Q.handle) ||
                (Ur.y.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/Screenshot",
                ),
                h(i.GetGameID(), n.entry.handle));
            };
          let q = [];
          return (
            (0, be.N$)(n.entry) &&
              q.push(
                (0, u.jsx)(
                  Le.kt,
                  {
                    onSelected: k,
                    className: Xr.HighlightContextMenuItem,
                    children: (0, u.jsxs)("div", {
                      className: (0, Z.A)(Xr.MenuItem, Xr.EditMarker),
                      children: [
                        (0, u.jsx)(A.ff, {}),
                        (0, re.we)("#Marker_Action_Edit"),
                      ],
                    }),
                  },
                  "edit",
                ),
              ),
            y != null &&
              y.strRecordingID &&
              !c &&
              q.push(
                (0, u.jsx)(
                  Le.kt,
                  {
                    onSelected: w,
                    className: Xr.HighlightContextMenuItem,
                    children: (0, u.jsxs)("div", {
                      className: (0, Z.A)(Xr.MenuItem, Xr.CreateClip),
                      children: [
                        (0, u.jsx)(A.Wd, {}),
                        (0, re.we)("#TimelineDialog_ClipVideo"),
                      ],
                    }),
                  },
                  "clip",
                ),
              ),
            (0, be.sX)(n.entry) &&
              q.push(
                (0, u.jsx)(
                  Le.kt,
                  {
                    onSelected: H,
                    className: Xr.HighlightContextMenuItem,
                    children: (0, u.jsxs)("div", {
                      className: (0, Z.A)(Xr.MenuItem, Xr.ViewScreenshot),
                      children: [
                        (0, u.jsx)(A.pw, {}),
                        (0, re.we)("#TimelineDialog_ViewScreenshot"),
                      ],
                    }),
                  },
                  "view_screenshot",
                ),
              ),
            M &&
              D &&
              q.push(
                (0, u.jsx)(
                  Le.kt,
                  {
                    onSelected: D,
                    className: Xr.HighlightContextMenuItem,
                    children: (0, u.jsxs)("div", {
                      className: (0, Z.A)(Xr.MenuItem, Xr.ViewClip),
                      children: [
                        (0, u.jsx)(A.ai, {}),
                        (0, re.we)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  },
                  "view_clip",
                ),
              ),
            (0, be.N$)(n.entry) &&
              q.push(
                (0, u.jsx)(
                  Le.kt,
                  {
                    onSelected: F,
                    className: Xr.HighlightContextMenuItem,
                    children: (0, u.jsxs)("div", {
                      className: (0, Z.A)(Xr.MenuItem, Xr.DeleteMarker),
                      children: [
                        (0, u.jsx)(Gi.lMJ, {}),
                        (0, re.we)("#Marker_Action_Delete"),
                      ],
                    }),
                  },
                  "delete",
                ),
              ),
            q.length ? (0, u.jsx)(Le.tz, { refInstance: G, children: q }) : null
          );
        }
        const Ks = 5e3,
          T = 3e3,
          o = 5e3;
        function K(s) {
          var t;
          const {
              markerInfo: i,
              view: n,
              coordinator: l,
              gameID: m,
              clipID: c,
              timelineID: g,
              faded: h,
            } = s,
            M = i.nGlobalMS,
            y = (0, x.q3)(() => n.ConvertGlobalMSToGlobalPXOffset(M.valMS)),
            G = (0, x.q3)(() => {
              const V = n.GetThumbnailComponent();
              return V && V !== ke.Highlight;
            }),
            w = tl(),
            { selectedMarker: D } = Yi(),
            k =
              ((t = i.entry) == null ? void 0 : t.id) ==
                (D == null ? void 0 : D.strEntryID) &&
              i.strTimelineID == (D == null ? void 0 : D.strTimelineID),
            { ref: F, ...H } = Hl(n, i),
            q = S.useCallback(
              (V) => {
                const ne = M.valMS - o,
                  ye = n.FindTimelineOffsets(g),
                  Ue = Math.max(ne, ye.globalOffsetMS);
                l.SetPlaytimeFromGlobalMS((0, Se.Sb)(Ue)),
                  l.SetDisplayHighlightEntry(i.entry),
                  V.stopPropagation(),
                  Ur.y.ReportTrackedAction(
                    `/GameRecording/Marker/Click/${i.entry.type}`,
                  );
              },
              [l, M.valMS, g, n, i],
            ),
            Q = (V) => {
              w(V, i, {
                bDisableMouseOverlay: !0,
                bForcePopup: !0,
                bAlwaysOnTop: !0,
              }),
                V.stopPropagation();
            },
            te = { transform: `translateX( calc( ${y}px - 50% ))` };
          return (0, u.jsxs)("div", {
            className: (0, Z.A)(
              Fi.MarkerAndDropline,
              G && Fi.NoPointer,
              h && Fi.Faded,
            ),
            style: te,
            ref: F,
            onContextMenu: Q,
            ...H,
            children: [
              (0, u.jsx)(
                "div",
                {
                  className: (0, Z.A)(Fi.TimelineMarkerCtn),
                  children: (0, u.jsx)(
                    Ro,
                    {
                      classNames: Fi.TimelineMarker,
                      entry: i.entry,
                      strMarkerIcon: i.strMarkerIcon,
                      faded: h,
                      onClick: q,
                      bSelectedMarker: k,
                    },
                    i.entry.id,
                  ),
                },
                M.valMS,
              ),
              (0, u.jsx)("div", {
                className: Fi.DroplineCtn,
                children: (0, u.jsx)("div", {
                  className: (0, Z.A)(Fi.TimelineMarkerDropLine),
                }),
              }),
            ],
          });
        }
        const z = 150;
        function Hl(s, t) {
          const i = S.useRef(void 0),
            n = S.useRef(void 0),
            l = S.useCallback(
              (g) => {
                if (!i.current) return;
                const h = i.current.getBoundingClientRect();
                if (g.clientY >= h.top && g.clientY <= h.bottom) {
                  if (h.left - g.clientX > 1 || g.clientX - h.right > 1) {
                    s.SetThumbnailComponent(null),
                      n.current && n.current(),
                      (n.current = null);
                    return;
                  }
                  return;
                }
                const M = h.left + 0.5 * h.width;
                (g.clientX < M - z || g.clientX > M + z) &&
                  (s.SetThumbnailComponent(null),
                  n.current && n.current(),
                  (n.current = null));
              },
              [s],
            ),
            m = S.useCallback(
              (g) => {
                if (
                  (s.SetThumbnailComponent(ke.Highlight),
                  s.SetThumbnailEntry(t),
                  !n.current)
                ) {
                  const h = (0, pi.uX)(g);
                  h.addEventListener("mousemove", l),
                    (n.current = () => h.removeEventListener("mousemove", l));
                }
                g.stopPropagation();
              },
              [l, t, s],
            ),
            c = S.useCallback(
              (g) => {
                const h = i.current.getBoundingClientRect(),
                  M = h.left,
                  y = h.right;
                if (g.clientX - M < 1 || y - g.clientX < 1) {
                  s.SetThumbnailComponent(null),
                    n.current && n.current(),
                    (n.current = null);
                  return;
                }
                (0, pi.id)(i.current, g.relatedTarget) ||
                  (g.clientY - h.top > 1 &&
                    h.bottom - g.clientY > 1 &&
                    g.clientX - h.left > 1 &&
                    h.right - g.clientX > 1 &&
                    (s.SetThumbnailComponent(null),
                    n.current && n.current(),
                    (n.current = null))),
                  g.stopPropagation();
              },
              [s],
            );
          return (
            S.useEffect(() => () => n.current && n.current(), []),
            { ref: i, onMouseOver: m, onMouseLeave: c }
          );
        }
        const Vl = 16;
        function il(s) {
          return s.type === "achievement" ? 9e3 : s.priority;
        }
        const Xl = S.memo(function (t) {
            const i = ie(),
              n = (0, x.q3)(() => i.GetVisibleTimelines());
            return (0, u.jsx)(u.Fragment, {
              children: n.map((l) =>
                (0, u.jsx)(Kl, { timeline: l }, l.timelineID),
              ),
            });
          }),
          Qs = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
        function Zl(s, t) {
          if (Qs[s.type] !== Qs[t.type]) return Qs[t.type] - Qs[s.type];
          const i = il(s),
            n = il(t);
          return i != n
            ? n - i
            : s.time != t.time
              ? parseInt(s.time) - parseInt(t.time)
              : s.id.localeCompare(t.id);
        }
        const Kl = S.memo(function (t) {
          const { timeline: i } = t,
            n = ie(),
            l = ce(),
            c = (0, x.q3)(
              () => n.GetVisibleTimelineHighlights(i.timelineID) || [],
            )
              .slice()
              .sort(Zl),
            g = (0, x.q3)(() => n.GetTimelineOffsetMS(i.timelineID)),
            h = i.globalOffsetMS - g,
            M = l.GetGameID(),
            y = l.GetClipID(),
            G = n.GetCurrentZoomScale() * Vl;
          let w = new $o(G);
          return c.map((D, k) => {
            if (Bl(D) !== "highlight") return null;
            const F = `${D.type}_${D.id}_${i.timelineID}_${k}`,
              H = Ql(i.timelineID, h, D),
              q = w.BAllowIcon(H.nGlobalMS.valMS);
            return (0, u.jsx)(
              K,
              {
                gameID: M,
                clipID: y,
                view: n,
                coordinator: l,
                faded: !q,
                timelineID: i.timelineID,
                markerInfo: H,
              },
              F,
            );
          });
        });
        function Ql(s, t, i) {
          if (
            ![
              "event",
              "usermarker",
              "screenshot",
              "achievement",
              "error",
            ].includes(i.type)
          )
            return (
              (0, me.q_)(
                `Unexpected timeline entry type ${i.type}, returning empty highlight marker`,
              ),
              null
            );
          let n = i;
          const l = (0, be.xz)(n);
          return {
            entry: n,
            strMarkerIcon: l ? "steam_achievement" : n.icon,
            nMarkerPriority: il(n),
            strTimelineID: s,
            strTitle: (!l && n.title) || "",
            strDescription: (!l && n.description) || "",
            nGlobalMS: (0, Se.Sb)(parseInt(n.time) + t),
          };
        }
        function Bl(s) {
          switch (s.type) {
            case "usermarker":
            case "achievement":
            case "screenshot":
            case "error":
              return "highlight";
            case "event":
              return parseInt(s.duration) > 0 ? "range_highlight" : "highlight";
            default:
              return "none";
          }
        }
        var Ln = _(53298);
        function Jl(s) {
          const {
              view: t,
              entry: i,
              nGlobalEntryEndMS: n,
              nGlobalTLStartMS: l,
            } = s,
            m = ce(),
            c = (0, Se.Sb)(parseInt(i.time) + l.valMS),
            g = (0, x.q3)(() => {
              const w = t.ConvertGlobalMSToGlobalPXOffset(c.valMS),
                D = t.GetVirtualWindowStartPX();
              return D < w ? w : D;
            }),
            h = (0, x.q3)(() => {
              const w = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
                D = t.GetVirtualWindowEndPX();
              return D < w ? D : w;
            }),
            M = !!m.GetClipID(),
            y = { transform: `translateX( ${g}px )`, width: h - g },
            G = (0, Z.A)({
              [Ln.Unspecified]: i.mode === be.il.Invalid,
              [Ln.Staging]: i.mode === be.il.Staging,
              [Ln.Menus]: i.mode === be.il.Menus,
              [Ln.Playing]: i.mode === be.il.Playing,
            });
          return (0, u.jsx)(
            "div",
            {
              className: (0, Z.A)(
                Ln.GameModeMarker,
                G,
                M && Ln.GameModeMarkerClip,
              ),
              style: y,
            },
            i.id,
          );
        }
        const Yl = S.memo(function (t) {
            const i = ie(),
              n = (0, x.q3)(() => i.GetVisibleTimelines());
            return (0, u.jsx)(u.Fragment, {
              children: n.map((l) =>
                (0, u.jsx)($l, { timeline: l }, l.timelineID),
              ),
            });
          }),
          $l = S.memo(function (t) {
            const {
                timelineID: i,
                globalOffsetMS: n,
                nDurationMS: l,
              } = t.timeline,
              m = ie(),
              c = (0, x.q3)(() => {
                const G = m.GetVisibleTimelineGameModes(i);
                return !G || G.length === 0
                  ? [
                      {
                        time: "0",
                        type: "gamemode",
                        mode: be.il.Invalid,
                        id: "synthetic",
                      },
                    ]
                  : G;
              }),
              g = (0, Se.Sb)(n + l),
              h = m.GetTimelineOffsetMS(i),
              M = n - h;
            let y = [];
            for (let G = 0; G < c.length; G++) {
              const w = (0, Se.Sb)(
                G < c.length - 1 ? parseInt(c[G + 1].time) + M : g.valMS - 1,
              );
              y.push(
                (0, u.jsx)(
                  Jl,
                  {
                    view: m,
                    entry: c[G],
                    nGlobalEntryEndMS: w,
                    nGlobalTLStartMS: (0, Se.Sb)(M),
                  },
                  `gameMode_${i}_${G}`,
                ),
              );
            }
            return (0, u.jsx)(u.Fragment, { children: y });
          });
        var Js = _(36616),
          fn = _(5540);
        const em = 500,
          tm = (0, S.memo)(function (t) {
            const i = ce(),
              n = (0, x.q3)(() => i.GetHidePlayer()),
              [l, m] = (0, S.useState)({
                bDragActive: !1,
                bPausedOnDragStart: !1,
              }),
              c = ie(),
              g = (0, x.q3)(() => {
                if (
                  c.GetAutoScrollPaused() ||
                  c.BReachedMaxScroll() ||
                  c.BReachedMinScroll() ||
                  i.BIsVideoElementPaused()
                )
                  return !1;
                const h = i.GetGlobalMSPlaytime(),
                  M = c.ConvertGlobalMSToGlobalPXOffset(h.valMS),
                  y = c.GetMaxScrollLeftPX() + 0.5 * c.GetScrollWindowWidth();
                return M < y;
              });
            return n
              ? (0, u.jsx)(im, { setDragActive: m })
              : g
                ? (0, u.jsx)(rm, { view: c, setDragActive: m })
                : (0, u.jsx)(nm, { dragState: l, setDragActive: m });
          });
        function rm(s) {
          const { view: t, setDragActive: i } = s,
            n = (0, x.q3)(
              () => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2,
            );
          return (0, u.jsx)(al, {
            playheadPosition: n,
            children: (0, u.jsx)(nl, { setDragActive: i, bDragActive: !1 }),
          });
        }
        const im = (0, S.memo)(function (t) {
            const { setDragActive: i } = t,
              n = ie(),
              l = (0, x.q3)(() => n.GetScrollableWidthPX()),
              m = (0, Te._g)(100),
              c = (0, S.useCallback)(
                (g) => {
                  n.GetAutoScrollPaused() || m(() => n.ScrollToOffset(g));
                },
                [m, n],
              );
            return (
              (0, S.useEffect)(() => n.ScrollToEnd(), [n]),
              (0, S.useEffect)(() => c(l), [l, c]),
              (0, u.jsx)(al, {
                playheadPosition: l,
                children: (0, u.jsx)(nl, { setDragActive: i, bDragActive: !1 }),
              })
            );
          }),
          nm = (0, S.memo)(function (t) {
            const { dragState: i, setDragActive: n } = t,
              { bDragActive: l, bPausedOnDragStart: m } = i,
              c = ce(),
              g = ie(),
              h = qn(),
              M = qa(),
              y = sm(M, g, l, h, c);
            return (
              (0, S.useEffect)(() => {
                if (!l) return;
                g.SetThumbnailPosition(y);
                const G = g.ConvertPXOffsetToGlobalMS(y, !1);
                if (!G) return;
                const w = c.GetLiveEdgeMS();
                c.SetPlaytimeFromGlobalMS(
                  w.valMS < G ? w : (0, Se.Sb)(G),
                  m,
                  !0,
                  !0,
                );
              }, [y, m, l, c, g]),
              (0, u.jsx)("div", {
                className: (0, Z.A)(
                  fn.PlayheadInteractionCtn,
                  l && fn.ActiveCtn,
                ),
                children: (0, u.jsx)(al, {
                  className: l ? fn.Active : void 0,
                  playheadPosition: y,
                  children: (0, u.jsx)(nl, {
                    setDragActive: n,
                    bDragActive: l,
                  }),
                }),
              })
            );
          }),
          nl = (0, S.memo)(function (t) {
            const { setDragActive: i, bDragActive: n } = t,
              l = ie(),
              m = (g) => {
                n || l.SetThumbnailComponent(ke.Playhead), g.stopPropagation();
              },
              c = (g) => {
                n || l.SetThumbnailComponent(null), g.stopPropagation();
              };
            return (0, u.jsx)("div", {
              className: fn.PlayHeadContent,
              onMouseOver: m,
              onMouseOut: c,
              onFocus: m,
              onBlur: c,
              children: (0, u.jsx)(am, { setDragActive: i }),
            });
          }),
          am = S.memo(function (t) {
            const { setDragActive: i } = t,
              n = ce(),
              l = Es(),
              m = ie(),
              c = (0, x.q3)(() => {
                const M = m.GetThumbnailComponent();
                return M === ke.RangeLeft || M === ke.RangeRight;
              }),
              g = (0, S.useCallback)(
                (M) => {
                  if (M.button != 0) return;
                  const y = (0, pi.uX)(M);
                  let G, w;
                  const D = () => {
                    const F = n.GetGameRecordingVideo().IsPaused();
                    i({ bDragActive: !0, bPausedOnDragStart: F }),
                      m.SetThumbnailComponent(ke.Playhead),
                      G();
                  };
                  y.addEventListener("mousemove", D),
                    (G = () => y.removeEventListener("mousemove", D));
                  const k = () => {
                    i({ bDragActive: !1, bPausedOnDragStart: !1 }),
                      m.SetThumbnailComponent(null),
                      G(),
                      w();
                  };
                  y.addEventListener("mouseup", k),
                    (w = () => y.removeEventListener("mouseup", k));
                },
                [n, i, m],
              ),
              h = (0, S.useCallback)(
                (M) => {
                  const y = n.GetGlobalMSPlaytime();
                  l(M, y, !0, {
                    bDisableMouseOverlay: !0,
                    bForcePopup: !0,
                    bAlwaysOnTop: !0,
                  }),
                    M.stopPropagation(),
                    M.preventDefault();
                },
                [n, l],
              );
            return (0, u.jsx)("div", {
              className: (0, Z.A)(fn.PlayHead, c && fn.NoPointer),
              onMouseDown: g,
              onContextMenu: h,
              children: (0, u.jsx)(Cl, {}),
            });
          });
        function Cl(s) {
          return (0, u.jsxs)("svg", {
            ...s,
            width: "12",
            height: "32",
            viewBox: "0 0 12 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, u.jsx)("rect", {
                x: "5",
                y: "4",
                width: "2",
                height: "40",
                fill: "currentColor",
              }),
              (0, u.jsx)("path", {
                d: "M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function sm(s, t, i, n, l) {
          const m = (0, S.useRef)(void 0),
            c = (0, x.q3)(() => t.GetScrollableWidthPX()),
            g = (0, x.q3)(() => t.GetScrollWindowWidth()),
            [h, M] = (0, S.useState)(0),
            y = (0, S.useRef)(void 0),
            G = (0, S.useRef)(void 0),
            { clearPlaybackAnimation: w, startPlaybackAnimation: D } = om(
              l,
              t,
              M,
            );
          (0, S.useEffect)(
            () => () => {
              y.current &&
                (cancelAnimationFrame(y.current),
                (y.current = null),
                (G.current = null)),
                w();
            },
            [w],
          );
          const k = S.useCallback(
            (F, H, q, Q, te) => {
              if (te(H))
                M(
                  (0, Oe.OQ)(
                    H.GetVisualWindowStartPX() + q,
                    0,
                    H.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(y.current),
                  (y.current = null),
                  (G.current = null);
              else {
                if (
                  (y.current &&
                    (y.current = requestAnimationFrame((V) =>
                      k(V, H, q, Q, te),
                    )),
                  G.current)
                ) {
                  const ne = ((F - G.current) / em) * Q;
                  H.ScrollBy(ne),
                    M((ye) => (0, Oe.OQ)(ye + ne, 0, H.GetScrollableWidthPX()));
                }
                G.current = F;
              }
            },
            [M],
          );
          return (
            (0, S.useEffect)(() => {
              const F = g * (1 - Xn),
                H = g * Xn;
              if (
                (y.current &&
                  (cancelAnimationFrame(y.current),
                  (y.current = null),
                  (G.current = null)),
                !i)
              ) {
                D();
                return;
              }
              if ((w(), s.valPX < H && !t.BReachedMinScroll())) {
                if (s.valPX <= m.current) {
                  const q = s.valPX - H,
                    te = (0, Oe.OQ)(Math.abs(q / H), 0, 1) * q;
                  y.current = requestAnimationFrame((V) =>
                    k(V, t, s.valPX, te, t.BReachedMinScroll),
                  );
                }
                m.current = s.valPX;
              } else if (s.valPX > F && !t.BReachedMaxScroll()) {
                if (s.valPX >= m.current) {
                  const q = s.valPX - F,
                    te = (0, Oe.OQ)(Math.abs(q / (g - F)), 0, 1) * q;
                  y.current = requestAnimationFrame((V) =>
                    k(V, t, s.valPX, te, t.BReachedMaxScroll),
                  );
                }
                m.current = s.valPX;
              } else M((0, Oe.OQ)(n.valPX, 0, c));
            }, [i, w, n.valPX, g, c, k, s.valPX, D, t]),
            h
          );
        }
        function om(s, t, i) {
          const n = (0, S.useRef)(void 0),
            l = s.GetGameRecordingVideo(),
            m = (0, S.useRef)(void 0),
            c = (0, S.useRef)(void 0),
            g = (0, S.useRef)(void 0),
            h = (0, S.useRef)(void 0),
            M = (0, S.useCallback)(() => {
              if (!n.current) return;
              const w = s.GetGlobalMSPlaytime();
              if (w.valMS >= 0) {
                const D = l.BVideoElementPlaying(),
                  k = l.GetVideoElementCurrentTime(),
                  F = t.GetScrollableWidthPX(),
                  H = t.GetCurrentZoomScale();
                if (m.current !== w.valMS || (h.current && h.current != H)) {
                  const q = t.ConvertGlobalMSToGlobalPXOffset(w.valMS),
                    Q = Math.min(F, q);
                  i(Q), (g.current = Q);
                } else if (
                  m.current &&
                  m.current === w.valMS &&
                  k &&
                  c.current &&
                  c.current !== k &&
                  D
                ) {
                  const q = m.current + (k - c.current) * 1e3,
                    Q = t.ConvertGlobalMSToGlobalPXOffset(q);
                  if (g.current && g.current < Q) {
                    const te = Math.min(F, Q);
                    i(te);
                  }
                  g.current = Q;
                }
                D || ((c.current = null), (m.current = w.valMS)),
                  D &&
                    m.current !== w.valMS &&
                    ((c.current = k), (m.current = w.valMS)),
                  (h.current = H);
              }
              n.current = requestAnimationFrame(M);
            }, [s, i, t, l]),
            y = (0, S.useCallback)(() => {
              n.current && cancelAnimationFrame(n.current),
                (n.current = null),
                (m.current = null),
                (c.current = null),
                (g.current = null);
            }, []),
            G = (0, S.useCallback)(() => {
              n.current || (n.current = requestAnimationFrame(M));
            }, [M]);
          return { clearPlaybackAnimation: y, startPlaybackAnimation: G };
        }
        function al(s) {
          const { className: t, playheadPosition: i, children: n } = s;
          return (0, u.jsx)("div", {
            className: (0, Z.A)(fn.PlayHeadContainer, t),
            style: { transform: `translateX( calc(${i}px - 50% ))` },
            children: n,
          });
        }
        var oe = _(48419);
        const lm = parseInt(oe.thumbnailWidth),
          mm = S.forwardRef(function (t, i) {
            const {
                globalMS: n,
                children: l,
                imgClassName: m,
                className: c,
                ...g
              } = t,
              h = ce(),
              M = h.GetGameID(),
              y = h.GetClipID(),
              G = (0, x.q3)(() => h.GetRecordingMode()),
              w = (0, x.q3)(() =>
                h.ConvertGlobaOffsetToRecordingAndRelativeOffset(n),
              ),
              D = Ei(),
              k = !1,
              F =
                w && k
                  ? Math.round(w.nRecordingOffsetMS * 100) / 100
                  : w == null
                    ? void 0
                    : w.nRecordingOffsetMS,
              H = Ca(
                M,
                y,
                w == null ? void 0 : w.strRecordingID,
                F,
                w == null ? void 0 : w.nStartOffsetMS,
                lm,
                k,
              ),
              [q, Q] = (0, S.useState)();
            return (
              (0, S.useEffect)(() => {
                H && Q(H);
              }, [H]),
              (0, u.jsxs)("div", {
                ref: i,
                className: (0, Z.A)(oe.ThumbnailContainerOffset, oe[G], c),
                ...g,
                children: [
                  (0, u.jsxs)("div", {
                    className: (0, Z.A)(
                      oe.ThumbnailContents,
                      (w == null ? void 0 : w.strRecordingID) && !q && oe.Hide,
                      oe[G],
                    ),
                    children: [
                      (0, u.jsx)("div", {
                        className: oe.ImageAndInfoBoxContainer,
                        children: (0, u.jsxs)("div", {
                          className: oe.ImageContainer,
                          children: [
                            w != null && w.strRecordingID
                              ? (0, u.jsx)("img", {
                                  className: oe.ThumbnailImage,
                                  src: q,
                                })
                              : (0, u.jsx)("div", {
                                  className: oe.NoRecordedContent,
                                  children: (0, re.we)(
                                    "#GameRecording_PlayerNoContent",
                                  ),
                                }),
                            (0, u.jsx)(cm, {}),
                          ],
                        }),
                      }),
                      (0, u.jsx)("div", {
                        className: (0, Z.A)(oe.TooltipChildren),
                        children: l,
                      }),
                    ],
                  }),
                  (0, u.jsx)("div", {
                    className: (0, Z.A)(oe.ThumbnailHitBoxPadding),
                  }),
                ],
              })
            );
          });
        function cm() {
          const s = ie(),
            t = (0, x.q3)(() => s.GetGameID()),
            i = (0, x.q3)(() => s.GetThumbnailComponent()),
            n = (0, x.q3)(() => s.GetThumbnailEntry());
          if (!n || i !== ke.Highlight) return null;
          if ((0, be.xz)(n.entry))
            return (0, u.jsx)(um, {
              thumbnailEntry: n,
              achievementEntry: n.entry,
              strGameID: t,
            });
          let l = "",
            m = "";
          return (
            (0, be.In)(n.entry)
              ? (m =
                  (0, re.we)(n.entry.description) ||
                  "#GameRecording_UnknownError")
              : (0, be.N$)(n.entry)
                ? ((l = n.entry.title
                    ? n.entry.title
                    : (0, re.we)("#Marker_UserMarker_Title")),
                  (m = n.entry.description || ""))
                : (0, be.eJ)(n.entry) &&
                  ((l = n.entry.title || ""), (m = n.entry.description || "")),
            !l && !m
              ? null
              : (0, u.jsx)(Gl, { title: l, description: m, thumbnailEntry: n })
          );
        }
        function um(s) {
          var t, i;
          const { strGameID: n, thumbnailEntry: l, achievementEntry: m } = s,
            c = new wi.VS(n),
            g = nn(c.GetAppID(), m.achievement_name);
          return g
            ? (0, u.jsx)(Gl, {
                title: (t = g.name) != null ? t : "",
                description: (i = g.description) != null ? i : "",
                thumbnailEntry: l,
              })
            : null;
        }
        function Gl(s) {
          const { title: t, description: i, thumbnailEntry: n } = s;
          return (0, u.jsxs)("div", {
            className: oe.InfoBoxContainer,
            children: [
              (0, u.jsxs)("div", {
                className: oe.Header,
                children: [
                  (0, u.jsx)("div", {
                    className: oe.Icon,
                    children: (0, u.jsx)(Ha, {
                      entry: n.entry,
                      strMarkerIcon: n.strMarkerIcon,
                    }),
                  }),
                  t && (0, u.jsx)("div", { className: oe.Title, children: t }),
                ],
              }),
              (0, u.jsx)("div", {
                className: oe.DescriptionBlock,
                children:
                  i &&
                  (0, u.jsx)("div", { className: oe.Description, children: i }),
              }),
            ],
          });
        }
        const dm = S.forwardRef(function (t, i) {
          const { globalPX: n, onMouseEnter: l, onMouseLeave: m } = t,
            c = ie(),
            g = (0, x.q3)(() => c.ConvertPXOffsetToGlobalMS(n, !1)),
            h = (0, x.q3)(() => c.GetThumbnailComponent()),
            M = ce(),
            y = (0, x.q3)(() => M.GetRecordingMode());
          return (0, u.jsxs)(mm, {
            className: (0, Z.A)(oe.ThumbnailTooltip, oe[y], oe[h]),
            globalMS: g,
            ref: i,
            onMouseEnter: l,
            onMouseLeave: m,
            children: [
              (0, u.jsx)(hm, { globalMS: g }),
              (0, u.jsx)(gm, { globalMS: g }),
              (0, u.jsxs)("div", {
                className: oe.TooltipInteractionRegion,
                children: [
                  h === ke.Highlight
                    ? (0, u.jsx)(pm, {})
                    : (0, u.jsx)(Sm, { globalPX: n }),
                  (0, u.jsx)(Mm, { globalMS: g }),
                ],
              }),
            ],
          });
        });
        function gm(s) {
          const { globalMS: t } = s,
            i = ie(),
            n = (0, x.q3)(() => i.GetStateDescriptionAtGlobalMS(t));
          return n != null && n.title
            ? (0, u.jsx)("div", {
                className: oe.StateDescription,
                children: n.title,
              })
            : null;
        }
        function fm(s, t) {
          return s.priority - t.priority;
        }
        function hm(s) {
          const { globalMS: t } = s,
            { setSelectedMarker: i } = Yi(),
            n = ie(),
            l = ce(),
            m = (0, x.q3)(() => n.FindRangeEventsAtGlobalMS(t)),
            c = 3,
            g = m.length > c ? m.sort(fm).slice(0, c) : m,
            h = (M, y) => {
              const G = parseInt(y.duration),
                { nTimelineOffsetMS: w, strTimelineID: D } =
                  l.ConvertGlobalOffsetToTimelineRelativeOffset(t),
                k = t - w.valMS + parseInt(y.time),
                [F, H] = l.GetLoader().CreateGlobalRangeForTimeline(D, k, 0, G);
              l.SetPlaytimeFromGlobalMS((0, Se.Sb)(F)),
                i == null || i(y.id, D, F, H),
                Ur.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromRangeEvent",
                ),
                M.stopPropagation();
            };
          return (0, u.jsx)(u.Fragment, {
            children: g.map((M, y) =>
              (0, u.jsxs)(
                "div",
                {
                  className: oe.TooltipRangeContainer,
                  onClick: (G) => h(G, M),
                  children: [
                    M.icon &&
                      (0, u.jsx)(Us, {
                        gameID: l.GetGameID(),
                        icon: M.icon,
                        className: oe.RangeIcon,
                      }),
                    (0, u.jsx)("div", {
                      className: oe.Title,
                      children: M.title,
                    }),
                    (0, u.jsx)("div", {
                      className: oe.Duration,
                      children: (0, Ii.qZ)(parseInt(M.duration) / 1e3, !1),
                    }),
                  ],
                },
                `${M.time}_${y}`,
              ),
            ),
          });
        }
        function pm() {
          const s = ce(),
            t = (0, x.q3)(() => s.GetRecordingMode()),
            i = ie(),
            n = (0, x.q3)(() => i.GetThumbnailEntry());
          if (!n) return null;
          const l = i.GetTimelineOffsetMS(n.strTimelineID),
            m = parseInt(n.entry.time),
            c = (0, Se.sK)(m - l),
            g = s.MakeRelativeToTimelineEndIfActive(n.strTimelineID, c.valMS);
          let h = "";
          if ((0, be.zG)(n.entry)) {
            const M = g + parseInt(n.entry.duration);
            if (g < 0) {
              const y = (0, Ii.qZ)(Math.abs(g / 1e3), !1, !1),
                G = (0, Ii.qZ)(Math.abs(M / 1e3), !1, !1);
              h = (0, re.we)("#Duration_WrittenNegation", y + " - " + G);
            } else {
              const y = (0, Ii.qZ)(g / 1e3, !1, !1),
                G = (0, Ii.qZ)(M / 1e3, !1, !1);
              h = y + " - " + G;
            }
          } else h = (0, Ii.qZ)(g / 1e3, !1, !0);
          return (0, u.jsx)("div", {
            className: (0, Z.A)(oe.TimeDisplayContainer, oe.Highlight, oe[t]),
            children: h,
          });
        }
        function Sm(s) {
          const { globalPX: t } = s,
            i = ie(),
            n = (0, x.q3)(() =>
              i.ConvertPXToTimelineRelativeMS(t, "end-if-active"),
            );
          return n
            ? (0, u.jsx)("div", {
                className: oe.TimeDisplayContainer,
                children: (0, Ii.qZ)(n / 1e3, !1, !0),
              })
            : null;
        }
        function Mm(s) {
          const { globalMS: t } = s,
            i = ie(),
            n = (0, x.q3)(() => i.GetGameID()),
            l = (0, x.q3)(() => i.GetThumbnailComponent()),
            m = (0, x.q3)(() => i.GetThumbnailEntry());
          let c = [
            (0, u.jsx)(vm, { globalMS: t }, "add_marker"),
            (0, u.jsx)(Rm, { globalMS: t }, "view_clip"),
          ];
          return (
            l == ke.Highlight &&
              m &&
              ((0, be.In)(m.entry) || (0, be.xz)(m.entry) || (0, be.eJ)(m.entry)
                ? (c = [
                    (0, u.jsx)(sl, { markerInfo: m }, "create_marker_clip"),
                    (0, u.jsx)(ol, { markerInfo: m }, "view_clip"),
                  ])
                : (0, be.sX)(m.entry)
                  ? (c = [
                      (0, u.jsx)(sl, { markerInfo: m }, "create_marker_clip"),
                      (0, u.jsx)(
                        Tm,
                        { entry: m.entry, gameID: n },
                        "view_screen",
                      ),
                      (0, u.jsx)(ol, { markerInfo: m }, "view_clip"),
                    ])
                  : (0, be.N$)(m.entry) &&
                    (c = [
                      (0, u.jsx)(ym, { markerInfo: m }, "edit_user"),
                      (0, u.jsx)(sl, { markerInfo: m }, "create_marker_clip"),
                      (0, u.jsx)(bm, { markerInfo: m }, "delete_user"),
                      (0, u.jsx)(ol, { markerInfo: m }, "view_clip"),
                    ])),
            (0, u.jsx)("div", { className: oe.TooltipButtons, children: c })
          );
        }
        function sl(s) {
          const { setSelectedMarker: t } = Yi(),
            { markerInfo: i } = s,
            n = ce(),
            l = (0, x.q3)(() => n.ShouldModeShowClipControls()),
            m = (0, x.q3)(() =>
              n.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                i.nGlobalMS.valMS,
              ),
            ),
            c = Xi(),
            g = jn(),
            h = (M) => {
              let y = Ks,
                G = T;
              (0, be.zG)(i.entry) &&
                ((y = 0), (G = parseInt(i.entry.duration)));
              const [w, D] = n
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  i.strTimelineID,
                  i.nGlobalMS.valMS,
                  y,
                  G,
                );
              n.SetPlaytimeFromGlobalMS((0, Se.Sb)(w)),
                t == null || t(i.entry.id, i.strTimelineID, w, D),
                g(),
                Ur.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromHighlight",
                ),
                M.stopPropagation();
            };
          return !(m != null && m.strRecordingID) || !l
            ? null
            : (0, u.jsx)(si.he, {
                toolTipContent: (0, re.we)(
                  c
                    ? "#RecordingState_Clip_LowDiskSpace"
                    : "#TimelineDialog_ClipVideo",
                ),
                direction: "top",
                bTopmost: !0,
                children: (0, u.jsx)("div", {
                  className: (0, Z.A)(oe.Button, oe.CreateClipButton),
                  onClick: h,
                  children: (0, u.jsx)(A.Wd, {}),
                }),
              });
        }
        function ol(s) {
          const { markerInfo: t } = s,
            i = ie(),
            n = (0, x.q3)(() =>
              i.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS),
            ),
            { onNavigateToClip: l } = gi(),
            m = () => {
              n &&
                (Ur.y.ReportTrackedAction(
                  `/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
                ),
                l(n.clipID));
            };
          return n
            ? (0, u.jsx)(si.he, {
                toolTipContent: (0, re.we)("#TimelineDialog_ViewClip"),
                direction: "top",
                bTopmost: !0,
                children: (0, u.jsx)("div", {
                  className: (0, Z.A)(oe.Button, oe.GoToClipFromMarker),
                  onClick: m,
                  children: (0, u.jsx)(Gi.CeX, {}),
                }),
              })
            : null;
        }
        function bm(s) {
          const { markerInfo: t } = s,
            i = ce(),
            n = ie(),
            l = (m) => {
              (0, be.N$)(t.entry) &&
                (Ur.y.ReportTrackedAction(
                  `/GameRecording/Marker/Delete/${t.entry.type}`,
                ),
                i.RemoveUserMarker(t.strTimelineID, t.entry.id),
                n.SetThumbnailComponent(null));
            };
          return (0, u.jsx)(si.he, {
            toolTipContent: (0, re.we)("#Marker_Action_Delete"),
            direction: "top",
            bTopmost: !0,
            children: (0, u.jsx)("div", {
              className: (0, Z.A)(oe.Button, oe.DeleteMarker),
              onClick: l,
              children: (0, u.jsx)(Gi.lMJ, {}),
            }),
          });
        }
        function ym(s) {
          const { markerInfo: t } = s,
            i = ce(),
            n = En(),
            l = (m) => {
              if (!(0, be.N$)(t.entry)) return;
              Ur.y.ReportTrackedAction(
                `/GameRecording/Marker/Edit/${t.entry.type}`,
              );
              let c = (0, u.jsx)(Xs, {
                entry: t.entry,
                playbackCoordinator: i,
                fnClearSelection: n,
                strTimelineID: t.strTimelineID,
              });
              (0, Zs.pg)(c, (0, pi.uX)(m)),
                m.stopPropagation(),
                m.preventDefault();
            };
          return (0, u.jsx)(si.he, {
            toolTipContent: (0, re.we)("#Marker_Action_Edit"),
            direction: "top",
            bTopmost: !0,
            children: (0, u.jsx)("div", {
              className: (0, Z.A)(oe.Button, oe.EditMarker),
              onClick: l,
              children: (0, u.jsx)(A.ff, {}),
            }),
          });
        }
        function Tm(s) {
          const { entry: t, gameID: i } = s,
            n = t.handle,
            { onNavigateToScreenshot: l } = gi(),
            m = () => {
              n &&
                (Ur.y.ReportTrackedAction("/GameRecording/Tooltip/Screenshot"),
                l(i, n));
            };
          return (0, u.jsx)(si.he, {
            toolTipContent: (0, re.we)("#TimelineDialog_ViewScreenshot"),
            direction: "top",
            bTopmost: !0,
            children: (0, u.jsx)("div", {
              className: (0, Z.A)(oe.Button, oe.ViewScreenshot),
              onClick: m,
              children: (0, u.jsx)(A.pw, {}),
            }),
          });
        }
        function vm(s) {
          const { globalMS: t } = s,
            i = ce(),
            n = (0, x.q3)(() =>
              i.ConvertGlobaOffsetToRecordingAndRelativeOffset(t),
            );
          if (!(n != null && n.strRecordingID)) return null;
          const l = () => {
            i.AddUserMarkerAtGlobalMS(
              (0, Se.Sb)(t),
              "/GameRecording/AddMarker/Thumbnail",
              null,
            ),
              i.SetPlaytimeFromGlobalMS((0, Se.Sb)(t));
          };
          return (0, u.jsx)(si.he, {
            toolTipContent: (0, re.we)("#TimelineDialog_AddMarker"),
            direction: "top",
            children: (0, u.jsx)("div", {
              className: (0, Z.A)(oe.Button, oe.AddMarker),
              onClick: l,
              children: (0, u.jsx)(A.pH, {}),
            }),
          });
        }
        function Rm(s) {
          const { globalMS: t } = s,
            i = ie(),
            n = (0, x.q3)(() => i.ConvertGlobalMSToClipOrNone(t)),
            { onNavigateToClip: l } = gi(),
            m = () => {
              n &&
                (Ur.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/timeline",
                ),
                l(n.clipID));
            };
          return n
            ? (0, u.jsx)(si.he, {
                toolTipContent: (0, re.we)("#TimelineDialog_ViewClip"),
                direction: "top",
                children: (0, u.jsx)("div", {
                  className: (0, Z.A)(oe.Button, oe.GoToClip),
                  onClick: m,
                  children: (0, u.jsx)(Gi.CeX, {}),
                }),
              })
            : null;
        }
        const Bm = S.memo(function (t) {
            const i = Di(),
              n = Na(),
              l = ie(),
              m = ce(),
              c = Es(),
              g = (0, S.useCallback)(
                (M) => {
                  if (!n) return;
                  const y = M.currentTarget.getBoundingClientRect(),
                    G = Oe.OQ(M.clientX - y.x, 0, y.width),
                    w = l.ConvertPXOffsetToGlobalMS(G, !1);
                  w &&
                    m.SetPlaytimeFromGlobalMS(
                      (0, Se.Sb)(w),
                      void 0,
                      void 0,
                      !0,
                    );
                },
                [n, m, l],
              ),
              h = (0, S.useCallback)(
                (M) => {
                  if (!n) return;
                  const y = M.currentTarget.getBoundingClientRect(),
                    G = Oe.OQ(M.clientX - y.x, 0, y.width),
                    w = l.ConvertPXOffsetToGlobalMS(G, !1);
                  w &&
                    (c(M, (0, Se.Sb)(w), !1, {
                      bDisableMouseOverlay: !0,
                      bForcePopup: !0,
                      bAlwaysOnTop: !0,
                    }),
                    M.preventDefault(),
                    M.stopPropagation());
                },
                [n, l, c],
              );
            return (
              Ua("click", g),
              Ua("contextmenu", h),
              (0, u.jsx)(Cm, { globalMouseXPX: i.globalMouseXPX.valPX || 0 })
            );
          }),
          Cm = S.memo(function (t) {
            const { globalMouseXPX: i } = t,
              n = zs(),
              l = ie(),
              m = Na(),
              c = (0, x.q3)(() => {
                if (l.GetThumbnailComponent()) return l.GetThumbnailPosition();
              }),
              [g, h] = (0, S.useState)(),
              [M, y] = (0, S.useState)();
            return (
              (0, S.useEffect)(() => {
                if (!isNaN(c)) {
                  h(c);
                  return;
                }
                !M && n && h(i);
              }, [M, n, m, i, c]),
              (0, u.jsx)("div", {
                className: Js.GhostPlayheadCtn,
                style: { transform: `translateX( calc(${g}px - 50%))` },
                children: (0, u.jsx)(Gm, {
                  globalPX: g,
                  setInteractingWithThumbnail: y,
                  bInteractingWithThumbnail: M,
                }),
              })
            );
          });
        function Gm(s) {
          const {
              globalPX: t,
              setInteractingWithThumbnail: i,
              bInteractingWithThumbnail: n,
            } = s,
            l = ie(),
            m = ce(),
            c = (0, x.q3)(() => m.GetRecordingMode() === "Overlay"),
            g = (0, x.q3)(() => l.ConvertPXOffsetToGlobalMS(t, !1)),
            h = (0, x.q3)(() => l.GetTimelineParentCtnRef()),
            M = (0, S.useRef)(void 0),
            y = (0, S.useRef)(void 0),
            G = (0, S.useRef)(void 0),
            w = (0, x.q3)(() => l.GetThumbnailComponent()),
            D = Na(),
            k = () => i(!0),
            F = (Fe) => i(!1),
            H = (0, si.fS)({
              toolTipContent: (0, u.jsx)(dm, {
                globalPX: t,
                ref: M,
                onMouseEnter: k,
                onMouseLeave: F,
              }),
              direction: c ? "bottom" : "top",
              nDelayShowMS: 0,
              nBodyDistance: 0,
              nAllowOffscreenPx: 0,
            }),
            { setHovered: q, setTarget: Q } = H.stateHandlers,
            te = (0, S.useCallback)(() => {
              q(!1),
                i(!1),
                G.current && G.current(),
                (G.current = null),
                l.GetAutoScrollPaused() && l.SetAutoScrollPauseTimeout(),
                l.SetThumbnailComponent(null);
            }, [i, q, l]),
            V = (0, S.useCallback)(
              (Fe, Ne) => {
                if (!y.current || !M.current) return;
                const Ar = y.current.getBoundingClientRect(),
                  Wi = Ar.left,
                  Zn = Ar.right;
                let Kn = Ar.top,
                  Ka = Ar.bottom;
                if (M.current) {
                  const Qa = M.current.getBoundingClientRect();
                  c ? (Ka = Qa.bottom) : (Kn = Qa.top);
                }
                (Fe <= Wi || Fe >= Zn || Ne <= Kn || Ne >= Ka) && te();
              },
              [c, te],
            ),
            ne = (0, S.useCallback)(
              (Fe) => {
                const Ne = l.GetThumbnailComponent();
                (Ne && Ne !== ke.Highlight) || V(Fe.clientX, Fe.clientY);
              },
              [V, l],
            ),
            ye = (0, S.useCallback)(
              (Fe) => {
                V(Fe.clientX, Fe.clientY);
              },
              [V],
            ),
            Ue = (0, S.useCallback)(() => {
              q(!0), Q(y.current);
              const Fe = (0, pi.qf)(y.current);
              Fe &&
                !G.current &&
                (Fe.addEventListener("mousemove", ne),
                Fe.addEventListener("mouseup", ye),
                (G.current = () => {
                  Fe.removeEventListener("mousemove", ne),
                    Fe.removeEventListener("mouseup", ye);
                }));
            }, [ne, ye, q, Q]);
          Ua("mouseenter", Ue),
            (0, S.useEffect)(() => {
              const Fe = (Ne) => {
                const Ar = l.GetThumbnailComponent();
                (Ar && Ar === ke.Playhead) ||
                  Ar === ke.RangeLeft ||
                  Ar === ke.RangeRight ||
                  (M.current &&
                    !(0, pi.id)(M.current, Ne.relatedTarget) &&
                    te());
              };
              return (
                h && h.addEventListener("mouseleave", Fe),
                () => h && h.removeEventListener("mouseleave", Fe)
              );
            }, [te, h, l]),
            (0, S.useEffect)(() => te, [te]);
          const $r = (D || n) && g && !w;
          return (0, u.jsxs)("div", {
            ref: y,
            className: Js.TooltipHoverSource,
            children: [
              (0, u.jsx)(Cl, {
                className: (0, Z.A)(Js.GhostPlayhead, $r && Js.Show),
              }),
              !!g && H.tooltip,
            ],
          });
        }
        var Ri = _(2508);
        const wl = 500;
        var wm = ((s) => (
          (s.none = "none"), (s.left = "left"), (s.right = "right"), s
        ))(wm || {});
        const _m = (0, S.memo)(function () {
            const [t, i] = (0, S.useState)("none"),
              n = On(),
              l = Qr(),
              m = Ji();
            return !n || !l || !m
              ? null
              : (0, u.jsx)("div", {
                  className: Ri.RangeControls,
                  children: (0, u.jsx)(Pm, {
                    activeControlState: t,
                    setActiveControlState: i,
                  }),
                });
          }),
          Pm = (0, S.memo)(function (t) {
            const { activeControlState: i, setActiveControlState: n } = t,
              [l, m] = (0, S.useState)(),
              [c, g] = (0, S.useState)(),
              h = Qr(),
              M = Ji(),
              y = ie(),
              G = (0, x.q3)(() => y.ConvertGlobalMSToGlobalPXOffset(h.valMS)),
              w = (0, x.q3)(() => y.ConvertGlobalMSToGlobalPXOffset(M.valMS)),
              D = (0, S.useCallback)(
                (q) => {
                  m(q), y.SetAutoScrollPauseTimeout();
                },
                [y],
              ),
              k = (0, S.useCallback)(
                (q) => {
                  g(q), y.SetAutoScrollPauseTimeout();
                },
                [y],
              ),
              F = (0, S.useCallback)(
                (q) => {
                  i === "none" && q.stopPropagation();
                },
                [i],
              ),
              H = (0, S.useCallback)(
                (q) => {
                  i === "none" && q.stopPropagation();
                },
                [i],
              );
            return (0, u.jsx)("div", {
              className: (0, Z.A)(
                Ri.RangeSelectorCtn,
                i !== "none" && Ri.Active,
              ),
              onMouseOver: F,
              onMouseOut: H,
              onFocus: F,
              onBlur: H,
              children: (0, u.jsxs)("div", {
                className: Ri.TrackRangeControls,
                children: [
                  (0, u.jsx)(Om, {
                    isActive: i === "left",
                    setControlState: n,
                    setRangeControlPX: D,
                    pxOffset: l,
                  }),
                  (0, u.jsx)(Dm, {
                    startOffsetPX: (i === "left" && l) || G,
                    endOffsetPX: (i === "right" && c) || w,
                    className: Ri.SelectedRangeMask,
                  }),
                  (0, u.jsx)(xm, {
                    isActive: i === "right",
                    setControlState: n,
                    setRangeControlPX: k,
                    pxOffset: c,
                  }),
                ],
              }),
            });
          });
        function Ys(s, t, i) {
          const l = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth(),
            m = l + t.GetVisualWidth(),
            c = Math.max(0, l + 3),
            g = Math.min(t.GetScrollableWidthPX(), m - 3);
          i(Oe.OQ(s, c, g));
        }
        function Im(s, t, i, n, l, m) {
          const c = (0, S.useRef)(void 0),
            g = (0, S.useRef)(!1),
            h = (0, S.useRef)(void 0),
            M = (0, S.useRef)(void 0),
            y = (0, x.q3)(() => t.GetScrollableWidthPX()),
            G = (0, x.q3)(() => t.GetScrollWindowWidth());
          (0, S.useEffect)(
            () => () => {
              h.current &&
                (cancelAnimationFrame(h.current),
                (h.current = null),
                (M.current = null));
            },
            [],
          );
          const w = S.useCallback(
            (D, k, F, H, q) => {
              if (q(k))
                m(
                  Oe.OQ(
                    k.GetVisualWindowStartPX() + F,
                    0,
                    k.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(h.current),
                  (h.current = null),
                  (M.current = null);
              else {
                if (
                  (h.current &&
                    (h.current = requestAnimationFrame((Q) =>
                      w(Q, k, F, H, q),
                    )),
                  M.current)
                ) {
                  const te = ((D - M.current) / wl) * H;
                  k.ScrollBy(te),
                    m((V) => Oe.OQ(V + te, 0, k.GetScrollableWidthPX()));
                }
                M.current = D;
              }
            },
            [m],
          );
          (0, S.useEffect)(() => {
            h.current &&
              (cancelAnimationFrame(h.current),
              (h.current = null),
              (M.current = null));
            const D = G * (1 - Xn),
              k = G * Xn,
              F = t.ConvertGlobalMSToGlobalPXOffset(i.valMS),
              H = t.ConvertGlobalMSToScrollWindowPXOffset(i.valMS);
            if (n.valPX > F) {
              m(F), l("right"), t.SetThumbnailComponent(ke.RangeRight);
              return;
            }
            if (s.valPX < k && !t.BReachedMinScroll()) {
              if (s.valPX > c.current) g.current = !0;
              else if (s.valPX < c.current || !g.current) {
                const q = Math.min(k, H),
                  Q = s.valPX - q,
                  V = Oe.OQ(Math.abs(Q / q), 0, 1) * Q;
                (h.current = requestAnimationFrame((ne) =>
                  w(ne, t, s.valPX, V, t.BReachedMinScroll),
                )),
                  (g.current = !1);
              }
              Ys(n.valPX, t, m);
            } else if (s.valPX > D && H > D && !t.BReachedMaxScroll()) {
              if (s.valPX < c.current) g.current = !0;
              else if (s.valPX > c.current || !g.current) {
                const q = (ne) => {
                    const ye = ne.ConvertGlobalMSToScrollWindowPXOffset(
                      i.valMS,
                    );
                    return ne.BReachedMaxScroll() || ye <= D;
                  },
                  Q = s.valPX - D,
                  V = Oe.OQ(Math.abs(Q / (G - D)), 0, 1) * Q;
                (h.current = requestAnimationFrame((ne) =>
                  w(ne, t, s.valPX, V, q),
                )),
                  (g.current = !1);
              }
              Ys(n.valPX, t, m);
            } else m(Oe.OQ(n.valPX, 0, y));
            c.current = s.valPX;
          }, [n.valPX, i.valMS, s.valPX, l, t, m, y, w, G]);
        }
        const Om = (0, S.memo)(function (t) {
          const {
              isActive: i,
              setControlState: n,
              setRangeControlPX: l,
              pxOffset: m,
            } = t,
            c = Qr();
          return i
            ? (0, u.jsx)(zm, {
                setControlState: n,
                setRangeControlPX: l,
                pxOffset: m,
              })
            : (0, u.jsx)(_l, {
                offsetMS: c.valMS,
                direction: "left",
                setControlState: n,
                setRangeControlPX: l,
              });
        });
        function zm(s) {
          const { setControlState: t, setRangeControlPX: i, pxOffset: n } = s,
            l = zn(),
            m = Ji(),
            c = ie(),
            g = qn(),
            h = qa();
          return (
            Im(h, c, m, g, t, i),
            (0, S.useEffect)(() => {
              isNaN(n) ||
                (c.SetThumbnailPosition(n),
                l(ti.Ov.TQ, (0, Se.Sb)(c.ConvertPXOffsetToGlobalMS(n))));
            }, [n, l, c]),
            (0, u.jsx)(ll, { offsetPX: n, direction: "left" })
          );
        }
        const xm = (0, S.memo)(function (t) {
          const {
              isActive: i,
              setControlState: n,
              setRangeControlPX: l,
              pxOffset: m,
            } = t,
            c = Ji();
          return i
            ? (0, u.jsx)(Em, {
                setControlState: n,
                setRangeControlPX: l,
                pxOffset: m,
              })
            : (0, u.jsx)(_l, {
                offsetMS: c.valMS,
                direction: "right",
                setControlState: n,
                setRangeControlPX: l,
              });
        });
        function Em(s) {
          const { setControlState: t, setRangeControlPX: i, pxOffset: n } = s,
            l = xn(),
            m = Qr(),
            c = ie(),
            g = qn(),
            h = qa();
          return (
            jm(h, c, m, g, t, i),
            (0, S.useEffect)(() => {
              isNaN(n) ||
                (c.SetThumbnailPosition(n),
                l(ti.Ov.TQ, (0, Se.Sb)(c.ConvertPXOffsetToGlobalMS(n))));
            }, [n, l, c]),
            (0, u.jsx)(ll, { offsetPX: n, direction: "right" })
          );
        }
        function jm(s, t, i, n, l, m) {
          const c = (0, S.useRef)(void 0),
            g = (0, S.useRef)(!1),
            h = (0, S.useRef)(void 0),
            M = (0, S.useRef)(void 0),
            y = (0, x.q3)(() => t.GetScrollableWidthPX()),
            G = (0, x.q3)(() => t.GetScrollWindowWidth());
          (0, S.useEffect)(
            () => () => {
              h.current &&
                (cancelAnimationFrame(h.current),
                (h.current = null),
                (M.current = null));
            },
            [],
          );
          const w = S.useCallback(
            (D, k, F, H, q) => {
              if (q(k))
                m(
                  Oe.OQ(
                    k.GetVisualWindowStartPX() + F,
                    0,
                    k.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(h.current),
                  (h.current = null),
                  (M.current = null);
              else {
                if (
                  (h.current &&
                    (h.current = requestAnimationFrame((Q) =>
                      w(Q, k, F, H, q),
                    )),
                  M.current)
                ) {
                  const te = ((D - M.current) / wl) * H;
                  k.ScrollBy(te),
                    m((V) => Oe.OQ(V + te, 0, k.GetScrollableWidthPX()));
                }
                M.current = D;
              }
            },
            [m],
          );
          (0, S.useEffect)(() => {
            h.current &&
              (cancelAnimationFrame(h.current),
              (h.current = null),
              (M.current = null));
            const D = G * (1 - Xn),
              k = G * Xn,
              F = t.ConvertGlobalMSToGlobalPXOffset(i.valMS),
              H = t.ConvertGlobalMSToScrollWindowPXOffset(i.valMS);
            if (n.valPX < F) {
              m(F), l("left"), t.SetThumbnailComponent(ke.RangeLeft);
              return;
            }
            if (s.valPX > D && !t.BReachedMaxScroll()) {
              if (s.valPX < c.current) g.current = !0;
              else if (s.valPX > c.current || !g.current) {
                const q = Math.max(D, H),
                  Q = s.valPX - q,
                  V = Oe.OQ(Math.abs(Q / (G - q)), 0, 1) * Q;
                (h.current = requestAnimationFrame((ne) =>
                  w(ne, t, s.valPX, V, t.BReachedMaxScroll),
                )),
                  (g.current = !1);
              }
              Ys(n.valPX, t, m);
            } else if (
              s.valPX < k &&
              H < k &&
              s.valPX <= c.current &&
              !t.BReachedMinScroll()
            ) {
              if (s.valPX > c.current) g.current = !0;
              else if (s.valPX < c.current || !g.current) {
                const q = s.valPX - k,
                  te = Oe.OQ(Math.abs(q / k), 0, 1) * q,
                  V = (ne) =>
                    ne.ConvertGlobalMSToScrollWindowPXOffset(i.valMS) > k ||
                    ne.BReachedMinScroll();
                (h.current = requestAnimationFrame((ne) =>
                  w(ne, t, s.valPX, te, V),
                )),
                  (g.current = !1);
              }
              Ys(n.valPX, t, m);
            } else m(Oe.OQ(n.valPX, 0, y));
            c.current = s.valPX;
          }, [i.valMS, s.valPX, l, t, m, y, G, n.valPX, w]);
        }
        function _l(s) {
          const {
              offsetMS: t,
              direction: i,
              setControlState: n,
              setRangeControlPX: l,
            } = s,
            m = ie(),
            c = (0, x.q3)(() => m.ConvertGlobalMSToGlobalPXOffset(t));
          (0, S.useEffect)(
            () => (
              l(void 0),
              () => {
                l(c);
              }
            ),
            [c, l],
          );
          const g = (0, S.useCallback)(
              (y) => {
                const G = (0, pi.uX)(y);
                let w, D;
                const k = () => {
                  n(i),
                    m.SetThumbnailComponent(
                      i === "left" ? ke.RangeLeft : ke.RangeRight,
                    ),
                    w();
                };
                G.addEventListener("mousemove", k),
                  (w = () => G.removeEventListener("mousemove", k));
                const F = () => {
                  n("none"), m.SetThumbnailComponent(null), w(), D();
                };
                G.addEventListener("mouseup", F),
                  (D = () => G.removeEventListener("mouseup", F));
              },
              [i, n, m],
            ),
            h = (y) => {
              m.SetThumbnailComponent(
                i === "left" ? ke.RangeLeft : ke.RangeRight,
              );
            },
            M = (y) => {
              m.SetThumbnailComponent(null);
            };
          return (0, u.jsx)("div", {
            className: Ri.InactiveSelectedRangeControl,
            onMouseDown: g,
            onMouseOver: h,
            onFocus: h,
            onMouseOut: M,
            onBlur: M,
            children: (0, u.jsx)(ll, { offsetPX: c, direction: i }),
          });
        }
        const Dm = (0, S.memo)(function (t) {
            const { startOffsetPX: i, endOffsetPX: n, className: l } = t;
            if (isNaN(i) || isNaN(n)) return null;
            const c = { width: n - i || 0, transform: `translateX(${i}px)` };
            return (0, u.jsx)("div", {
              className: (0, Z.A)(Ri.RangeMask, l),
              style: c,
            });
          }),
          ll = (0, S.memo)(function (t) {
            const { direction: i, offsetPX: n } = t,
              l = { transform: `translateX( calc( ${n}px - 50%) )` },
              m = ie(),
              c = (0, x.q3)(() => m.GetThumbnailComponent() === ke.Playhead);
            return (0, u.jsx)("div", {
              style: l,
              className: (0, Z.A)(Ri.RangeControl),
              children: (0, u.jsx)("div", {
                className: (0, Z.A)(
                  Ri.RangeIcon,
                  i === "left" && Ri.Left,
                  c && Ri.Hide,
                ),
                children: (0, u.jsx)(km, {
                  innerFill: "#171d25",
                  direction: i,
                }),
              }),
            });
          });
        function km(s) {
          return (0, u.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 3 36",
            fill: "none",
            style: {
              transform: `rotate(${s.direction === "right" ? 180 : 0}deg)`,
            },
            children: [
              (0, u.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 0)",
              }),
              (0, u.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 10)",
              }),
              (0, u.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 20)",
              }),
              (0, u.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 30)",
              }),
            ],
          });
        }
        var Pl = _(28361);
        const Fm = 100,
          Wm = S.memo(function (t) {
            const i = ie(),
              n = (0, x.q3)(() => i.GetVisibleWindowRelativeTimelines()),
              m = ce().GetRecordingMode();
            let c = [],
              g = "";
            for (let h of n) {
              let M = i.GetTimeRecorded(h.timelineID),
                y = (0, re._l)(M);
              y != g && (c.push({ timeline: h, strLabel: y }), (g = y));
            }
            for (let h = c.length - 2; h >= 0; h--) {
              let M = c[h];
              c[h + 1].timeline.nVisibleStartPX - M.timeline.nVisibleStartPX >=
                Fm || c.splice(h, 1);
            }
            return (0, u.jsx)(u.Fragment, {
              children: c.map((h) =>
                (0, u.jsx)(
                  qm,
                  {
                    startPX: h.timeline.nVisibleStartPX,
                    label: h.strLabel,
                    recordingMode: m,
                  },
                  h.timeline.timelineID,
                ),
              ),
            });
          });
        function qm(s) {
          const { label: t, startPX: i, recordingMode: n } = s;
          let l = n == Qi.Overlay;
          return (0, u.jsx)("div", {
            className: (0, Z.A)(Pl.TimelineRelativeDate, l && Pl.Overlay),
            style: { transform: `translateX(${i}px)` },
            children: t,
          });
        }
        var Hn = _(78760);
        const Nm = (0, S.memo)(function (t) {
          const i = ie(),
            n = (0, x.q3)(() => i.GetVisibleRecordings());
          return (0, u.jsx)(u.Fragment, {
            children: n.map((l) =>
              (0, u.jsx)(
                Um,
                {
                  startPX: l.nStartPX,
                  endPX: l.nEndPX,
                  isActive: l.bIsActive,
                  recordingType: l.recordingType,
                },
                l.recordingID,
              ),
            ),
          });
        });
        function Um(s) {
          const { isActive: t, endPX: i, startPX: n, recordingType: l } = s,
            m = { width: i - n || 0, transform: `translateX(${n}px)` },
            c = Ei(),
            g = l === Cn,
            h = l === Zi;
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)("div", {
                className: (0, Z.A)(
                  Hn.RecordingDecorator,
                  g && Hn.Clip,
                  h && Hn.Manual,
                  c && Hn.ClipMode,
                ),
                style: m,
              }),
              t && (0, u.jsx)(Am, { endPX: i }),
            ],
          });
        }
        function Am(s) {
          const { endPX: t } = s,
            i = ce(),
            n = ie(),
            l = (0, x.q3)(() => i.GetRecordingMode() === "Overlay"),
            m = Gn(i.GetGameID()),
            c = (0, x.q3)(() => i.GetIsLiveEdge() && !i.GetHidePlayer()),
            g = (0, x.q3)(() => {
              const M = i.GetLiveEdgeBufferWindowStartMS();
              return n.ConvertGlobalMSToGlobalPXOffset(M.valMS);
            });
          if (!l || m !== Ki.BackgroundRecording) return null;
          const h = { width: t - g || 0, transform: `translateX(${g}px)` };
          return (0, u.jsx)("div", {
            className: (0, Z.A)(Hn.LiveRecordingBuffer, c && Hn.IsLive),
            style: h,
          });
        }
        var Lm = _(10564);
        const Hm = (0, S.memo)(function (t) {
            const i = ie(),
              n = (0, x.q3)(() => i.GetVisibleClips());
            return (0, u.jsx)(u.Fragment, {
              children: n.map((l) =>
                (0, u.jsx)(
                  Vm,
                  { startPX: l.pxClipStart, endPX: l.pxClipEnd },
                  l.clipID,
                ),
              ),
            });
          }),
          Vm = (0, S.memo)(function (t) {
            const { endPX: i, startPX: n } = t,
              l = { width: i - n || 0, transform: `translateX(${n}px)` };
            return (0, u.jsx)("div", { className: Lm.ClipDecorator, style: l });
          });
        var Yr = _(99550),
          $s = _(35009);
        function Xm() {
          const s = ce(),
            t = Gn(s.GetGameID());
          return t === Ki.NotRecording || t === Ki.NotRunning
            ? null
            : (0, u.jsx)(Zm, {});
        }
        function Zm(s) {
          const t = ce(),
            i = (0, x.q3)(() => t.GetIsLiveEdge() && !t.GetHidePlayer()),
            n = S.useCallback(() => {
              t.SetHidePlayer(!1), t.GetGameRecordingVideo().Play();
              const l = t.GetLiveEdgeMS();
              t.SetPlaytimeFromGlobalMS(l), t.FocusGlobalMS(l);
            }, [t]);
          return (0, u.jsx)(si.he, {
            className: $s.GoLiveButtonCtn,
            toolTipContent: (0, re.we)(
              i ? "#Playback_AtLatest" : "#Playback_JumpToLatest",
            ),
            direction: "bottom",
            children: (0, u.jsx)(An.Z, {
              onClick: n,
              className: (0, Z.A)($s.GoLiveButton, i && $s.IsLive),
              children: (0, u.jsx)(A.xA, {
                className: (0, Z.A)($s.JumpToEndIcon),
              }),
            }),
          });
        }
        const Km = (0, S.forwardRef)(function (t, i) {
            const n = ie();
            return (0, x.q3)(() => !n.BEmpty())
              ? (0, u.jsx)(Jm, { ...t, timelineView: n, ref: i })
              : (0, u.jsx)(Qm, { ref: i });
          }),
          Qm = (0, S.forwardRef)(function (t, i) {
            return (0, u.jsx)("div", {
              ref: i,
              className: (0, Z.A)(Yr.ScrollbarPlaceholder, t.className),
            });
          }),
          Jm = (0, S.forwardRef)(function (t, i) {
            const n = ce(),
              {
                children: l,
                className: m,
                timelineView: c,
                disableZoom: g,
              } = t,
              [h, M] = (0, S.useState)(),
              y = S.useCallback(
                (F) => {
                  const H = F.target.getBoundingClientRect();
                  c.SetScrollWindowOffset(H.x),
                    c.SetScrollWindowWidth(H.width),
                    M(H);
                },
                [c],
              ),
              G = (0, Te.wY)(y),
              w = S.useCallback(
                (F) => {
                  if (F.ctrlKey && !g) {
                    const H = h ? (F.clientX - h.x) / h.width : 0.5;
                    F.deltaY > 0
                      ? c.ZoomOut(F.deltaY / 100, H)
                      : c.ZoomIn(-F.deltaY / 100, H);
                  } else c.ScrollBy(F.deltaY);
                },
                [g, h, c],
              ),
              D = () => c.SetAutoScrollPaused(!0),
              k = () => c.SetAutoScrollPauseTimeout();
            return (
              oc(n, c),
              (0, u.jsxs)("div", {
                ref: i,
                onWheel: w,
                onMouseOver: D,
                onFocus: () => {},
                onMouseLeave: k,
                children: [
                  (0, u.jsxs)("div", {
                    className: Yr.LeftControlsAndContent,
                    children: [
                      (0, u.jsxs)("div", {
                        ref: G,
                        className: (0, Z.A)(Yr.ContentAndGradient, m),
                        children: [l, (0, u.jsx)(Ym, { timelineView: c })],
                      }),
                      n.GetRecordingMode() === Qi.Overlay && (0, u.jsx)(Xm, {}),
                    ],
                  }),
                  (0, u.jsx)("div", {
                    className: Yr.ScrollbarAndSiblings,
                    children: !n.GetGamepadMode() && (0, u.jsx)($m, {}),
                  }),
                ],
              })
            );
          });
        function Ym(s) {
          const { timelineView: t } = s,
            i = (0, x.q3)(() => t.GetVisualWindowStartPX()),
            n = (0, x.q3)(() => t.BReachedMaxScroll());
          return (0, u.jsxs)("div", {
            className: Yr.ScrollGradientCtn,
            children: [
              (0, u.jsx)("div", {
                className: (0, Z.A)(
                  Yr.FrontGradient,
                  i === 0 && Yr.HideGradient,
                ),
              }),
              (0, u.jsx)("div", {
                className: (0, Z.A)(Yr.EndGradient, n && Yr.HideGradient),
              }),
            ],
          });
        }
        function $m() {
          const [s, t] = (0, S.useState)({
              scrollBarWidth: 0,
              scrollBarXOffset: 0,
            }),
            i = S.useCallback((h) => {
              const M = h.target.getBoundingClientRect();
              t({ scrollBarWidth: M.width, scrollBarXOffset: M.x });
            }, []),
            n = ie(),
            l = (0, x.q3)(
              () => n.GetScrollableWidthPX() + 2 * n.GetTimelineMarginWidth(),
            ),
            m = (0, x.q3)(() => n.GetVisualWidth()),
            c = (0, S.useMemo)(
              () => (m * s.scrollBarWidth) / l || 0,
              [m, s.scrollBarWidth, l],
            ),
            g = (0, Te.wY)(i);
          return (0, u.jsxs)("div", {
            className: (0, Z.A)(
              Yr.ScrollBarCtn,
              Math.round(c) === Math.round(s.scrollBarWidth) &&
                Yr.HideScrollBar,
            ),
            ref: g,
            children: [
              (0, u.jsx)(ec, { timelineView: n, scrollSize: s }),
              (0, u.jsx)(ac, {
                scrollSize: s,
                timelineView: n,
                timelineWidth: l,
                thumbWidth: c,
              }),
            ],
          });
        }
        function ec(s) {
          const { timelineView: t, scrollSize: i } = s,
            n = ce(),
            l = tc(t, i),
            m = (0, x.q3)(() => t.GetTimelineMarginWidth()),
            c = (0, x.q3)(() => t.GetScrollableWidthPX()),
            g = (0, S.useCallback)(
              (h) => {
                const M = h + m;
                return Oe.OQ((M * i.scrollBarWidth) / c, 0, i.scrollBarWidth);
              },
              [i.scrollBarWidth, m, c],
            );
          return (0, u.jsxs)("div", {
            className: Yr.ScrollTrack,
            ...l,
            children: [
              (0, u.jsx)(rc, {
                timelineView: t,
                playbackCoordinator: n,
                fnConvertGlobalPXToTrackPX: g,
                scrollBarWidth: i.scrollBarWidth,
              }),
              (0, u.jsx)(nc, {
                timelineView: t,
                fnConvertGlobalPXToTrackPX: g,
              }),
            ],
          });
        }
        function tc(s, t) {
          const i = (0, S.useRef)(void 0),
            n = (0, S.useRef)(void 0),
            l = (0, x.q3)(() => s.GetScrollableWidthPX()),
            m = (0, S.useCallback)(
              (y) => (0, Se.OB)((l * y) / t.scrollBarWidth),
              [t.scrollBarWidth, l],
            ),
            c = (0, S.useCallback)(() => {
              if (!i.current) return;
              const y = s.GetScrollWindowWidth(),
                G = s.GetVisualWindowStartPX() + y / 2;
              if (
                i.current.valPX > G - y * 0.1 &&
                i.current.valPX < G + y * 0.1
              )
                return;
              const D = s.GetScrollableWidthPX() * 0.005,
                k = i.current.valPX - G;
              if (Math.abs(k) > D) {
                const F = k > 0 ? D : -D;
                s.ScrollToOffsetCentered(G + F),
                  (n.current = requestAnimationFrame(() => c()));
              } else s.ScrollToOffsetCentered(i.current.valPX);
            }, [s]),
            g = (0, S.useCallback)(
              (y) => {
                (i.current = m(y.clientX - t.scrollBarXOffset)),
                  (n.current = requestAnimationFrame(() => c()));
              },
              [m, c, t.scrollBarXOffset],
            ),
            h = (0, S.useCallback)(() => {
              n.current && cancelAnimationFrame(n.current);
            }, []),
            M = (0, S.useCallback)(
              (y) => {
                i.current = m(y.clientX - t.scrollBarXOffset);
              },
              [m, t.scrollBarXOffset],
            );
          return (
            (0, S.useEffect)(
              () => () => {
                n.current && cancelAnimationFrame(n.current);
              },
              [],
            ),
            { onMouseDown: g, onMouseMove: M, onMouseUp: h, onMouseLeave: h }
          );
        }
        function rc(s) {
          const {
              timelineView: t,
              playbackCoordinator: i,
              fnConvertGlobalPXToTrackPX: n,
              scrollBarWidth: l,
            } = s,
            m = (0, x.q3)(() => i.GetHidePlayer()),
            c = (0, x.q3)(() => {
              const h = i.GetGlobalMSPlaytime();
              if (h && t.BInitialized()) {
                const M = Math.floor(
                  t.ConvertGlobalMSToGlobalPXOffset(h.valMS),
                );
                return n(M);
              }
              return null;
            });
          if (!c) return null;
          const g = () => {
            let h = i.GetGlobalMSPlaytime();
            m && (h = i.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(h.valMS);
          };
          return (0, u.jsx)("div", {
            className: Yr.PlayHeadAnnotation,
            onClick: g,
            style: { transform: `translateX(${m ? l : c}px)` },
            children: (0, u.jsx)(ic, {}),
          });
        }
        function ic() {
          return (0, u.jsx)("svg", {
            width: "52",
            height: "31",
            viewBox: "0 0 52 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, u.jsx)("path", {
              d: "M26 31L51.1147 0.25H0.885263L26 31Z",
              fill: "#D9D9D9",
            }),
          });
        }
        function nc(s) {
          const { timelineView: t, fnConvertGlobalPXToTrackPX: i } = s,
            n = Ei(),
            l = ri(),
            m = (0, x.q3)(() => {
              if (n && t.BInitialized()) {
                const g = Math.floor(
                    t.ConvertGlobalMSToGlobalPXOffset(l.nGlobalStartMS.valMS),
                  ),
                  h = Math.floor(
                    t.ConvertGlobalMSToGlobalPXOffset(l.nGlobalEndMS.valMS),
                  );
                if (!isNaN(g) && !isNaN(h)) {
                  const M = i(g),
                    y = i(h);
                  return { rangeStartPX: M, rangeEndPX: y };
                }
              }
              return null;
            });
          if (!m) return null;
          const c = () => {
            t.ScrollToCenteredGlobalMS(l.nGlobalStartMS.valMS);
          };
          return (0, u.jsx)("div", {
            className: Yr.RangeAnnotation,
            onClick: c,
            style: {
              width: m.rangeEndPX - m.rangeStartPX,
              transform: `translateX(${m.rangeStartPX}px)`,
            },
          });
        }
        function ac(s) {
          const {
              scrollSize: t,
              timelineWidth: i,
              thumbWidth: n,
              timelineView: l,
            } = s,
            {
              thumbPositionPX: m,
              onMouseDown: c,
              bHiglightThumb: g,
            } = sc(t, i, n, l);
          return (0, u.jsx)("div", {
            className: (0, Z.A)(Yr.ScrollThumb, g && Yr.Highlight),
            style: { width: n, transform: `translateX(${m}px)` },
            onMouseDown: c,
          });
        }
        function sc(s, t, i, n) {
          const [l, m] = (0, S.useState)(!1),
            [c, g] = (0, S.useState)(0),
            h = (0, x.q3)(() => {
              const k = n.BInitialized(),
                F = n.GetVisualWindowStartPX();
              return k
                ? Oe.OQ((F * s.scrollBarWidth) / t, 0, s.scrollBarWidth - i)
                : 0;
            }),
            [M, y] = (0, S.useState)(!1),
            G = (0, S.useRef)(void 0);
          (0, S.useEffect)(() => {
            if (n.GetAutoScrollPaused())
              return (
                y(!0),
                (G.current = window.setTimeout(() => {
                  y(!1);
                }, 500)),
                () => window.clearTimeout(G.current)
              );
          }, [h, n]);
          const w = (0, S.useCallback)(
              (k) => {
                var F;
                g(h), m(!0);
                const H = k.nativeEvent.offsetX,
                  q =
                    (F = n.GetTimelineParentCtnRef()) != null
                      ? F
                      : (0, pi.uX)(k);
                let Q, te, V;
                const ne = (Ue) => {
                  g(Ue.clientX - s.scrollBarXOffset - H);
                };
                q.addEventListener("mousemove", ne),
                  (Q = () => q.removeEventListener("mousemove", ne));
                const ye = () => {
                  m(!1), Q(), te(), V();
                };
                q.addEventListener("mouseup", ye),
                  q.addEventListener("mouseleave", ye),
                  (te = () => q.removeEventListener("mouseup", ye)),
                  (V = () => q.removeEventListener("mouseleave", ye));
              },
              [h, s.scrollBarXOffset, n],
            ),
            D = (0, S.useMemo)(
              () => (l ? Oe.OQ(c, 0, s.scrollBarWidth - i) : h),
              [c, l, h, s.scrollBarWidth, i],
            );
          return (
            (0, S.useEffect)(() => {
              if (l) {
                const k = (t * D) / s.scrollBarWidth;
                n.ScrollToOffset(k);
              }
            }, [l, s.scrollBarWidth, D, n, t]),
            { thumbPositionPX: D, onMouseDown: w, bHiglightThumb: M }
          );
        }
        function oc(s, t) {
          const i = (0, x.q3)(
            () =>
              !t.GetAutoScrollPaused() &&
              s.GetGameRecordingVideo().BVideoElementPlaying(),
          );
          (0, S.useEffect)(() => {
            if (!i) return () => {};
            let n = !1,
              l = s.GetGlobalMSPlaytime(),
              m = Date.now();
            const c = (g) => {
              const h = Date.now(),
                M = h - m;
              t.ScrollToCenteredGlobalMS(l.valMS + M);
              const y = s.GetGlobalMSPlaytime();
              y.valMS !== l.valMS && ((l = y), (m = h)),
                n || requestAnimationFrame(c);
            };
            return requestAnimationFrame(c), () => (n = !0);
          }, [s, t, i]);
        }
        var Il = _(64415),
          kc = _(2596),
          Fc = _(36118),
          Wc = _(71568),
          qc = _(72739),
          lc = _(18938),
          Ol = Object.defineProperty,
          mc = Object.getOwnPropertyDescriptor,
          cc = (s, t, i) =>
            t in s
              ? Ol(s, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (s[t] = i),
          Vn = (s, t, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? mc(t, i) : t, m = s.length - 1, c;
              m >= 0;
              m--
            )
              (c = s[m]) && (l = (n ? c(t, i, l) : c(l)) || l);
            return n && l && Ol(t, i, l), l;
          },
          eo = (s, t, i) => cc(s, typeof t != "symbol" ? t + "" : t, i);
        class hn {
          constructor() {
            eo(this, "m_tours", {}),
              eo(this, "m_strActiveTour", ""),
              eo(this, "m_storage"),
              eo(this, "m_bReady", !1),
              (0, W.Gn)(this);
          }
          async Init(t) {
            if (this.m_storage) return;
            this.m_storage = t;
            const i = await xl(t);
            Object.keys(i || {}).forEach((n) => {
              const l = !!i[n];
              this.m_tours[n] = {
                ...(this.m_tours[n] || { stops: {} }),
                bSeen: l,
              };
            }),
              (this.m_bReady = !0);
          }
          UpdateStop(t, i, n, l) {
            this.m_tours[t] || (this.m_tours[t] = { bSeen: !1, stops: {} }),
              (this.m_tours[t].stops[i] = { options: n, elem: l });
          }
          BHasSeenTour(t) {
            return this.m_bReady
              ? this.m_tours[t] && this.m_tours[t].bSeen
              : !0;
          }
          GetTrackedStops(t) {
            var i;
            return ((i = this.m_tours[t]) == null ? void 0 : i.stops) || {};
          }
          ActivateTour(t) {
            this.m_strActiveTour &&
              this.m_strActiveTour !== t &&
              this.DismissTour(this.m_strActiveTour),
              (this.m_strActiveTour = t);
          }
          DismissTour(t) {
            this.m_tours[t] &&
              (this.MarkTourSeen(t),
              (this.m_tours[t].bSeen = !0),
              this.m_strActiveTour === t && (this.m_strActiveTour = ""));
          }
          MarkTourSeen(t) {
            return El(this.m_storage, t, Date.now());
          }
          MarkTourUnseen(t) {
            return El(this.m_storage, t, void 0);
          }
        }
        Vn([W.sH], hn.prototype, "m_tours", 2),
          Vn([W.sH], hn.prototype, "m_strActiveTour", 2),
          Vn([W.sH], hn.prototype, "m_bReady", 2),
          Vn([W.XI.bound], hn.prototype, "UpdateStop", 1),
          Vn([W.XI], hn.prototype, "ActivateTour", 1),
          Vn([W.XI], hn.prototype, "DismissTour", 1);
        const zl = "tour_history";
        async function xl(s) {
          const t = await s.GetObject(zl);
          return !t || typeof t != "object" ? {} : t;
        }
        async function El(s, t, i) {
          const n = await xl(s);
          return s.StoreObject(zl, { ...n, [t]: i });
        }
        const jl = new hn();
        function Dl() {
          const s = (0, ze.rX)();
          return (
            (0, S.useEffect)(() => {
              jl.Init(s);
            }, [s]),
            jl
          );
        }
        function ml(s) {
          const t = Dl(),
            { bShowTour: i, stopElems: n } = (0, x.q3)(() => ({
              bShowTour: !t.BHasSeenTour(s),
              stopElems: t.GetTrackedStops(s),
            }));
          return {
            bShowTour: i,
            stopElems: n,
            onInteraction: (0, S.useCallback)(() => t.MarkTourSeen(s), [t, s]),
            onDismiss: (0, S.useCallback)(() => t.DismissTour(s), [t, s]),
            onActivate: (0, S.useCallback)(() => t.ActivateTour(s), [t, s]),
            updateStop: t.UpdateStop,
          };
        }
        function Nc(s) {
          const { children: t } = s;
          return jsxs(Fragment, { children: [t, jsx(uc, { ...s })] });
        }
        function uc(s) {
          const { active: t, name: i, stops: n } = s,
            {
              bShowTour: l,
              onInteraction: m,
              onDismiss: c,
              stopElems: g,
            } = ml(i),
            [h, M] = useState(0);
          if (!l || !t || h >= n.length) return null;
          const y = () => {
              M(h + 1), m();
            },
            { id: G, title: w, content: D } = n[h],
            k = g[G];
          if (!k || !k.elem) return null;
          let F = D;
          return (
            Array.isArray(D) &&
              (F = D.map((H, q) => jsx("div", { children: H }, q))),
            jsx(dc, {
              ...k,
              children: jsxs(fc, {
                tour: i,
                title: w,
                onRequestClose: c,
                children: [
                  F,
                  jsxs("div", {
                    className: styles.Action,
                    children: [
                      n.length > 1 &&
                        jsx("div", {
                          className: styles.TipCount,
                          children: Localize("#Tour_TipCount", h + 1, n.length),
                        }),
                      h < n.length - 1
                        ? jsx(PrimaryButton, {
                            onClick: y,
                            children: Localize("#Button_Next"),
                          })
                        : jsx(PrimaryButton, {
                            onClick: c,
                            children: Localize("#Button_Done"),
                          }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function dc(s) {
          const { elem: t, options: i, children: n } = s,
            { ownerWindow: l } = useBrowserContext(),
            m = t.getBoundingClientRect(),
            { style: c, position: g } = gc(l, m, i.position, i.offset);
          return createPortal(
            jsxs("div", {
              className: styles.TourPositioner,
              style: c,
              "data-position": g,
              children: [jsx(pc, { position: g, targetRect: m }), n],
            }),
            l.document.body,
          );
        }
        function gc(s, t, i, n = 0) {
          let l,
            m = i;
          const c = 240,
            g = 10,
            h = n + Si,
            M = c + g + h;
          let y = s.document.body.matches(":dir(rtl)");
          switch (
            (y &&
              (m === "left" ? (m = "right") : m === "right" && (m = "left")),
            ((m === "left" && t.x < M) ||
              (m === "right" && s.innerWidth - (t.x + t.width) < M)) &&
              (m = "below"),
            m)
          ) {
            case "left":
              l = {
                top: t.top,
                width: t.left - g - h,
                left: g,
                minWidth: c,
                flexDirection: "row",
                justifyContent: "flex-end",
              };
              break;
            case "right":
              l = {
                top: t.top,
                left: t.right + h,
                right: g,
                minWidth: c,
                flexDirection: "row",
                justifyContent: "flex-start",
              };
              break;
            case "above":
              l = {
                top: g,
                height: t.y - g - h,
                left: t.x,
                flexDirection: "column",
                justifyContent: "flex-end",
              };
              break;
            default:
              y
                ? (l = {
                    top: t.y + t.height + h,
                    right: s.innerWidth - t.right,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  })
                : (l = {
                    top: t.y + t.height + h,
                    left: t.x,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  });
              break;
          }
          return {
            style: { ...l, ...{ display: "flex" } },
            position: m,
            rect: t,
          };
        }
        function fc(s) {
          const { tour: t, title: i, onRequestClose: n, children: l } = s,
            { onActivate: m } = ml(t);
          return (
            useEffect(() => m(), [m]),
            jsxs("div", {
              className: styles.TourBox,
              children: [
                jsx("div", {
                  onClick: n,
                  className: styles.CloseButton,
                  children: jsx(X_Line, { className: styles.X }),
                }),
                jsx("div", { className: styles.Title, children: i }),
                jsx("div", { className: styles.Content, children: l }),
              ],
            })
          );
        }
        function hc(s) {
          const { name: t, tour: i, options: n, children: l } = s,
            { updateStop: m } = ml(i),
            c = (0, S.useCallback)((M) => m(i, t, n, M), [m, i, t]),
            g = S.Children.only(l),
            h = (0, lc.Ue)(c, g.props.ref);
          return (0, S.cloneElement)(S.Children.only(l), { ref: h });
        }
        function pc(s) {
          const { position: t, targetRect: i } = s;
          return jsx("svg", {
            viewBox: "0 0 28 10",
            className: styles.TourStopArrow,
            style: Mc(t, i),
            children: jsx("polygon", {
              points: "0,0 14,10 28,0",
              fill: "currentColor",
            }),
          });
        }
        const Sc = 28,
          Si = 10;
        function Mc(s, t) {
          const i = { width: `${Sc}px`, height: `${Si}px` };
          switch (s) {
            case "right":
              (i.left = "0px"),
                (i.top = `${Math.max(t.height / 2 - Si, Si)}px`);
              break;
            case "left":
              (i.right = "0px"),
                (i.top = `${Math.max(t.height / 2 - Si, Si)}px`);
              break;
            case "above":
              (i.bottom = `${-Si}px`),
                (i.insetInlineStart = `${Math.max(t.width / 2 - Si, Si)}px`);
              break;
            case "below":
              (i.top = `${-Si}px`),
                (i.insetInlineStart = `${Math.max(t.width / 2 - Si, Si)}px`);
          }
          return i;
        }
        function Uc() {
          const s = Dl();
          return useCallback((t) => s.MarkTourUnseen(t), [s]);
        }
        var Za = _(62745);
        function bc(s) {
          const t = ie(),
            i = (0, x.q3)(() => t.GetVisibleTimelines());
          return (0, u.jsx)(u.Fragment, {
            children: i.flatMap((n) =>
              n.phaseOffsets.map((l, m) =>
                (0, S.createElement)(yc, {
                  ...l,
                  timeline: n,
                  key: `${n.timelineID}_${m}`,
                }),
              ),
            ),
          });
        }
        function yc(s) {
          const {
            timelineOffsetMS: t,
            nDurationMS: i,
            phase: n,
            timeline: l,
          } = s;
          return (0, u.jsxs)(Tc, {
            ...s,
            children: [
              (0, u.jsx)(kl, {}),
              (0, u.jsx)(vc, {}),
              (0, u.jsx)(kl, {}),
            ],
          });
        }
        function Tc(s) {
          var t;
          const {
              children: i,
              timeline: n,
              timelineOffsetMS: l,
              nDurationMS: m,
              phase: c,
            } = s,
            g = ie(),
            h = ce(),
            M = ((t = qn()) == null ? void 0 : t.valPX) || -1,
            y = zs(),
            [G] = xs(),
            {
              pxStart: w,
              pxWidth: D,
              bHighlight: k,
            } = (0, x.q3)(() => {
              const V = g.GetPhaseToHighlight();
              return {
                pxStart: g.ConvertGlobalMSToGlobalPXOffset(
                  n.globalOffsetMS + l,
                ),
                pxWidth: g.ConvertDurationMSToDeltaPX(m),
                bHighlight:
                  V &&
                  V[0] === n.timelineID &&
                  V[1] === c.background_timeline_offset,
              };
            }),
            F = (y || G) && M >= w && M <= w + D,
            [H, q] = fa(),
            Q = () => {
              const V = h.GetLoader(),
                ne = V.GetTimelineData(n.timelineID),
                ye = V.GetTimelineMetadata(n.timelineID),
                Ue = ne.m_rgPhases.find(($r) => parseInt($r.time) === l);
              Ue && q({ entry: Ue, timeline: ye });
            },
            te = () => q(void 0);
          return (0, u.jsx)("div", {
            className: (0, Z.A)(
              Za.Positioner,
              F && Za.MouseWithin,
              k && Za.Highlight,
            ),
            style: { transform: `translateX( ${w}px )`, width: `${D}px` },
            onMouseOver: Q,
            onMouseLeave: te,
            onFocus: Q,
            onBlur: te,
            children: i,
          });
        }
        function vc(s) {
          return (0, u.jsx)("div", { className: Za.Body });
        }
        function kl(s) {
          return (0, u.jsx)("div", { className: Za.Edge });
        }
        var Rc = _(14296);
        function Bc(s) {
          const t = ie(),
            i = (0, x.q3)(() => t.GetVisibleTimelines());
          return (0, u.jsx)(u.Fragment, {
            children: i.map((n) =>
              (0, u.jsx)(Cc, { timeline: n }, n.timelineID),
            ),
          });
        }
        function Cc(s) {
          const { timeline: t } = s,
            i = ie(),
            n = (0, x.q3)(
              () => i.GetVisibleTimelineHighlights(t.timelineID) || [],
            ),
            l = (0, x.q3)(() => i.GetTimelineOffsetMS(t.timelineID)),
            m = t.globalOffsetMS - l;
          return (0, u.jsx)(u.Fragment, {
            children: n
              .filter((c) => Bl(c) === "range_highlight")
              .map((c) =>
                (0, u.jsx)(
                  Gc,
                  { entry: c, timeline: t, timelineView: i, timelineOffset: m },
                  c.id,
                ),
              ),
          });
        }
        function Gc(s) {
          const { timelineView: t, entry: i, timelineOffset: n } = s,
            l = n + parseInt(i.time),
            { pxStart: m, pxWidth: c } = (0, x.q3)(() => ({
              pxStart: t.ConvertGlobalMSToGlobalPXOffset(l),
              pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(i.duration)),
            })),
            g = { width: `${c}px`, transform: `translateX( ${m}px )` };
          return (0, u.jsx)("svg", {
            className: Rc.RangeHighlight,
            style: g,
            children: (0, u.jsx)("line", {
              x1: "0",
              x2: c,
              y1: "0",
              y2: "0",
              fill: "none",
              stroke: "#ffc82c",
              "stroke-width": "3",
              "stroke-dasharray": "3 6",
              "stroke-dashoffset": "0",
              "stroke-linecap": "square",
            }),
          });
        }
        const Xn = 0.08;
        function wc(s) {
          const {
              loader: t,
              className: i,
              clipSummaries: n,
              refTimelineParentCtn: l,
              disableZoom: m,
            } = s,
            c = (0, x.q3)(() => t.BInitialized()),
            g = ce();
          if (!c) return (0, u.jsx)("div", { className: He.LoadingTimeline });
          let h = (0, Z.A)(
            He.ScrollAndControlsCtn,
            g.GetGamepadMode() && He.GamepadMode,
            i,
          );
          return (0, u.jsx)(Gs, {
            loader: t,
            clipSummaries: n,
            playbackCoordinator: g,
            refTimelineParentCtn: l,
            children: (0, u.jsxs)("div", {
              className: h,
              dir: "ltr",
              children: [
                (0, u.jsx)(Ic, {}),
                (0, u.jsx)(Oc, {}),
                (0, u.jsx)(hc, {
                  tour: "recording_timeline",
                  name: "timeline",
                  options: { position: "left", offset: 20 },
                  children: (0, u.jsx)(Km, {
                    className: He.TimelineScrollContainer,
                    disableZoom: m,
                    children: (0, u.jsx)(_c, {}),
                  }),
                }),
              ],
            }),
          });
        }
        const _c = (0, S.memo)(function (t) {
          const i = ie();
          return (0, x.q3)(() => i.BInitialized()) ? (0, u.jsx)(Pc, {}) : null;
        });
        function Pc() {
          const s = ie(),
            t = (0, x.q3)(() => s.GetScrollableWidthPX()),
            i = (0, x.q3)(() => s.GetVisualWindowStartPX()),
            n = (0, x.q3)(() => s.GetTimelineMarginWidth());
          return (0, u.jsxs)("div", {
            className: He.ContentContainer,
            style: {
              minWidth: t || 0,
              marginRight: n,
              marginLeft: n,
              transform: `translateX(${-i}px)`,
            },
            children: [
              (0, u.jsx)(Bi, {
                id: "recordings",
                className: He.RecordingDecorators,
                children: (0, u.jsx)(Nm, {}),
              }),
              (0, u.jsx)(Bi, {
                id: "clips",
                className: He.ClipDecorators,
                children: (0, u.jsx)(Hm, {}),
              }),
              (0, u.jsx)(Bi, {
                id: "game_modes",
                className: He.GameModes,
                children: (0, u.jsx)(Yl, {}),
              }),
              (0, u.jsx)(Bi, {
                id: "date_decorators",
                className: He.DateDecorator,
                children: (0, u.jsx)(Wm, {}),
              }),
              (0, u.jsx)(Bi, {
                id: "ticks",
                className: He.BackgroundTicks,
                children: (0, u.jsx)(Vo, {}),
              }),
              (0, u.jsxs)(go, {
                children: [
                  (0, u.jsx)(Bi, {
                    id: "highlights",
                    className: He.Highlights,
                    children: (0, u.jsx)(Xl, {}),
                  }),
                  (0, u.jsx)(Bi, {
                    id: "range_selection",
                    className: He.RangeSelector,
                    children: (0, u.jsx)(_m, {}),
                  }),
                  (0, u.jsx)(Bi, {
                    id: "seek_scrub",
                    className: He.SeekScrubber,
                    children: (0, u.jsx)(Bm, {}),
                  }),
                  (0, u.jsx)(Bi, {
                    id: "play_head",
                    className: He.PlayHead,
                    children: (0, u.jsx)(tm, {}),
                  }),
                  (0, u.jsx)(Bi, {
                    id: "phases",
                    className: He.Phases,
                    children: (0, u.jsx)(bc, {}),
                  }),
                  (0, u.jsx)(Bi, {
                    id: "range_highlights",
                    className: He.RangeHighlights,
                    children: (0, u.jsx)(Bc, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function Bi(s) {
          const { children: t, id: i, className: n } = s;
          return (0, u.jsx)("div", {
            id: i,
            className: (0, Z.A)(n, He.AbsoluteLayer),
            children: (0, u.jsx)("div", {
              className: He.RelativeLayer,
              children: t,
            }),
          });
        }
        function Ic(s) {
          const i = ce().GetRenderGlyph();
          return i ? i(Il.pR.TRIGGER_LEFT, !1, !1, He.PositionLeft) : null;
        }
        function Oc(s) {
          const i = ce().GetRenderGlyph();
          return i ? i(Il.pR.TRIGGER_RIGHT, !1, !1, He.PositionRight) : null;
        }
        var Fl = _(42577);
        function zc(s) {
          const [t, i] = S.useState(!1);
          return (
            S.useEffect(() => {
              ro(void 0, void 0).then(() => {
                i(!0);
              });
            }, []),
            (0, u.jsx)(u.Fragment, { children: t && (0, u.jsx)(Wl, { ...s }) })
          );
        }
        function Wl(s) {
          const { clipID: t } = s,
            i = Ec(t);
          return i.data
            ? (0, u.jsx)(jc, { clip: i.data })
            : (0, u.jsx)("div", {
                style: { color: "white" },
                children: "Loading...",
              });
        }
        function xc(s, t) {
          return {
            timeline_id: t.server_timeline_id,
            game_id: s.clip_id,
            date_recorded: s.date_recorded,
            duration_ms: s.duration_ms.toFixed(0),
            recordings: [],
          };
        }
        function Ec(s) {
          const t = (0, ze.KV)();
          return (0, we.I)({
            queryKey: ["grclip", s],
            queryFn: async () => {
              const i = $.w.Init(N);
              i.Body().set_clip_id(s);
              const n = await $n.GetSingleSharedClip(t, i);
              if (n.GetEResult() != Oi.R) {
                (0, me.ZI)("GetSingleSharedClip failed"),
                  n.DEBUG_LogToConsole();
                return;
              }
              let l = n.Body().toObject().clip,
                m = [];
              if (l.video_ids.length == 0) {
                (0, me.ZI)("No video ids in clip", s), n.DEBUG_LogToConsole();
                return;
              }
              let c;
              for (let g of l.video_ids)
                (!c || c.timeline_id != g.server_timeline_id) &&
                  ((c = xc(l, g)), m.push(c)),
                  c.recordings.push({
                    recording_id: g.video_manager_video_id,
                    start_offset_ms: g.start_offset_ms.toFixed(0),
                    duration_ms: g.duration_ms.toFixed(0),
                    recording_type: Cn,
                    cdn_manifest_url: g.manifest_url,
                  });
              return { clip_id: l.clip_id, game_id: l.gameid, timelines: m };
            },
          });
        }
        function ql(s) {
          const t = S.useMemo(() => cl(s), [s]),
            i = S.useCallback(
              (n) => {
                for (const l of s.timelines)
                  for (const m of l.recordings)
                    if (m.recording_id == n) return m.cdn_manifest_url;
              },
              [s],
            );
          return (
            S.useEffect(() => () => t && t.release(), [t]),
            { loader: t.loader, fnGetManifest: i }
          );
        }
        function jc(s) {
          const { clip: t } = s,
            { loader: i, fnGetManifest: n } = ql(t);
          return (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(ga, {
              loader: i,
              fnGetManifest: n,
              mode: Qi.CommunityClip,
              children: (0, u.jsxs)("div", {
                className: Fl.ClipDetails,
                children: [
                  (0, u.jsx)("div", {
                    className: Fl.VideoContainer,
                    children: (0, u.jsx)(Fo, {
                      positionAbsolute: !1,
                      autoPlay: !0,
                    }),
                  }),
                  (0, u.jsx)(wc, { loader: i }),
                ],
              }),
            }),
          });
        }
      },
      85443: (Y, qr, _) => {
        "use strict";
        _.d(qr, {
          ZI: () => d,
          fX: () => $,
          q_: () => we,
          tG: () => r,
          tH: () => p,
          xv: () => E,
        });
        var u = _(57589);
        const S = new u.wd("GR");
        function ze(O) {
          return (...J) => {
            const Re = `[${(performance.now() / 1e3).toFixed(3)}]`;
            O(Re, ...J);
          };
        }
        const we = ze(S.Debug),
          $ = ze(S.Info),
          p = ze(S.Warning),
          d = ze(S.Error),
          r = we;
        function E() {
          return S.IsDebugEnabled();
        }
      },
      67721: (Y, qr, _) => {
        "use strict";
        _.d(qr, {
          In: () => O,
          N$: () => J,
          Te: () => $,
          eJ: () => d,
          hT: () => we,
          il: () => S,
          rU: () => ae,
          sX: () => Re,
          xz: () => E,
          zG: () => p,
        });
        var u = _(86578),
          S = ((U) => (
            (U[(U.Invalid = 0)] = "Invalid"),
            (U[(U.Playing = 1)] = "Playing"),
            (U[(U.Staging = 2)] = "Staging"),
            (U[(U.Menus = 3)] = "Menus"),
            U
          ))(S || {}),
          ze = ((U) => (
            (U[(U.Invalid = 0)] = "Invalid"),
            (U[(U.None = 1)] = "None"),
            (U[(U.Standard = 2)] = "Standard"),
            (U[(U.Featured = 3)] = "Featured"),
            U
          ))(ze || {});
        function we(U) {
          return U.type === "gamemode";
        }
        function $(U) {
          return U.type === "state_description";
        }
        function p(U) {
          return U.type === "event" && parseInt(U.duration) > 0;
        }
        function d(U) {
          return U.type === "event";
        }
        function r(U) {
          return U.type === "state_description";
        }
        function E(U) {
          return U.type === "achievement";
        }
        function O(U) {
          return U.type === "error";
        }
        function J(U) {
          return U.type === "usermarker";
        }
        function Re(U) {
          return U.type === "screenshot";
        }
        function ae(U) {
          let Lr = { id: U.entry_id, time: U.time, type: void 0 };
          switch (U.type) {
            case u.Bw.BA: {
              let ee = Lr;
              (ee.type = "gamemode"), (ee.mode = U.game_mode);
              break;
            }
            case u.Bw.jL: {
              let ee = Lr;
              (ee.type = "usermarker"),
                (ee.icon = "steam_marker"),
                (ee.priority = U.marker_priority);
              break;
            }
            case u.Bw.P8: {
              let ee = Lr;
              (ee.type = "achievement"),
                (ee.achievement_name = U.achievement_name);
              break;
            }
            case u.Bw.Ey: {
              let ee = Lr;
              (ee.type = "error"), (ee.description = U.marker_description);
              break;
            }
            case u.Bw.Fy: {
              let ee = Lr;
              (ee.type = "state_description"), (ee.title = U.timestamp_title);
              break;
            }
            case u.Bw.aI: {
              let ee = Lr;
              (ee.type = "event"),
                (ee.icon = U.marker_icon),
                (ee.title = U.range_title),
                (ee.description = U.marker_description),
                (ee.priority = U.marker_priority),
                (ee.duration = U.range_duration),
                (ee.possible_clip = U.range_possible_clip);
              break;
            }
            case u.Bw.uw: {
              let ee = Lr;
              (ee.type = "screenshot"),
                (ee.icon = U.marker_icon),
                (ee.priority = U.marker_priority),
                (ee.handle = U.screenshot_handle);
              break;
            }
            default:
              return null;
          }
          return Lr;
        }
      },
      86347: (Y, qr, _) => {
        "use strict";
        _.d(qr, { OB: () => O, QP: () => ae, Sb: () => u, sK: () => S });
        function u(le) {
          return { type: "global", valMS: le };
        }
        function S(le) {
          return { type: "timeline", valMS: le };
        }
        function ze(le) {
          return { type: "recording", valMS: le };
        }
        function we(le) {
          return { type: "clip", valMS: le };
        }
        function $(le) {
          return (Pe) => Pe.type === le;
        }
        const p = $("global"),
          d = $("timeline"),
          r = $("recording"),
          E = $("clip");
        function O(le) {
          return { type: "global", valPX: le };
        }
        function J(le) {
          return { type: "clientWindow", valPX: le };
        }
        function Re(le) {
          return { type: "virtualWindow", valPX: le };
        }
        function ae(le) {
          return { type: "scrollWindow", valPX: le };
        }
        function U(le) {
          return (Pe) => Pe.type === le;
        }
        const Lr = U("global"),
          ee = U("clientWindow"),
          ue = U("virtualWindow"),
          _e = U("scrollWindow");
      },
      85958: (Y, qr, _) => {
        "use strict";
        _.d(qr, { SX: () => Ui, kh: () => qi });
        var u = _(41735),
          S = _.n(u),
          ze = _(86578),
          we = _(41635),
          $ = _(85443),
          p = _(67721),
          d = _(72604),
          r = _(36174),
          E = _(8323),
          O = _(27066),
          J = _(86347),
          Re = _(90626),
          ae = _(14947),
          U = _(34843),
          Lr = _(85528),
          ee = _(71742),
          ue = _(18210),
          _e = Object.defineProperty,
          le = Object.getOwnPropertyDescriptor,
          Pe = (fe, f, b) =>
            f in fe
              ? _e(fe, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: b,
                })
              : (fe[f] = b),
          bi = (fe, f, b, R) => {
            for (
              var C = R > 1 ? void 0 : R ? le(f, b) : f, I = fe.length - 1, j;
              I >= 0;
              I--
            )
              (j = fe[I]) && (C = (R ? j(f, b, C) : j(C)) || C);
            return R && C && _e(f, b, C), C;
          },
          Ae = (fe, f, b) => Pe(fe, typeof f != "symbol" ? f + "" : f, b);
        const Yn = 10 * 1e3,
          qi = 3e3,
          Ni = qi + 1e3,
          Be = class Ja {
            constructor() {
              Ae(this, "m_bInitialized", !1),
                Ae(this, "m_rgListeners", []),
                Ae(this, "m_gameID"),
                Ae(this, "m_clipID"),
                Ae(this, "m_ulFirstTimelineOffsetMS", 0),
                Ae(this, "m_rgTimelineMetadata", []),
                Ae(this, "m_mapTimelineData", new Map()),
                Ae(this, "m_mapRunningTimelines", new Map()),
                Ae(this, "m_schUpdateRunning", new E.LU()),
                Ae(this, "m_fnTimelineURLBuilder"),
                (0, ae.Gn)(this);
            }
            BInitialized() {
              return this.m_bInitialized;
            }
            GetTimelines() {
              return this.m_rgTimelineMetadata;
            }
            GetTimelineMetadataIndex(f) {
              return this.m_rgTimelineMetadata.findIndex(
                (b) => b.metadata.timeline_id === f,
              );
            }
            GetTimelineMetadata(f) {
              return this.m_rgTimelineMetadata.find(
                (b) => b.metadata.timeline_id === f,
              );
            }
            GetGameID() {
              return this.m_gameID;
            }
            GetClipID() {
              return this.m_clipID;
            }
            BIsTimelineRunning(f) {
              return this.m_mapRunningTimelines.has(f);
            }
            AddEventListener(f) {
              return (
                this.m_rgListeners.push(f), () => we.x9(this.m_rgListeners, f)
              );
            }
            async LoadTimelinesForBackgroundVideo(f) {
              this.m_gameID = f;
              const b = await ze.xM.GetTimelinesForApp({ game_id: f }),
                { timelines: R = [] } = b.Body().toObject();
              this.m_mapRunningTimelines.forEach((C, I) => {
                R.find((j) => j.timeline_id == I) || R.push(C.m_metadata);
              }),
                this.UpdateTimelineMetadata(R),
                (this.m_fnTimelineURLBuilder = (C) =>
                  `https://steamloopback.host/gamerecordings/timelines/${C}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            async LoadTimelinesForClip(f) {
              this.m_clipID = f;
              const b = await ze.xM.GetTimelinesForClip({ clip_id: f });
              if (b.GetEResult() != d.R)
                throw new Error("Unable to load clip " + f);
              const {
                timelines: R = [],
                game_id: C,
                first_timeline_start_offset_ms: I,
              } = b.Body().toObject();
              (this.m_gameID = C), this.UpdateTimelineMetadata(R);
              for (let j of this.m_rgTimelineMetadata) {
                (0, $.q_)(
                  `Loaded clip ${f} timeline ${j.metadata.timeline_id}`,
                );
                for (let N of j.metadata.recordings)
                  (0, $.q_)(
                    `Clip recording ${N.recording_id} duration ${N.duration_ms}`,
                  );
              }
              (this.m_ulFirstTimelineOffsetMS = parseInt(I)),
                (this.m_fnTimelineURLBuilder = (j) =>
                  `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${j}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            UpdateTimelineMetadata(f) {
              const b = f
                .slice()
                .sort((j, N) => j.date_recorded - N.date_recorded);
              let R = [],
                C = 0;
              const I = {};
              b.forEach((j) => {
                if ((j.recordings || (j.recordings = []), I[j.timeline_id])) {
                  console.error(
                    "Duplicate timelines found in UpdateTimelineMetadata()",
                    j.timeline_id,
                    f,
                  );
                  return;
                }
                R.push({ nGlobalOffsetMS: (0, J.Sb)(C), metadata: j }),
                  (C += parseInt(j.duration_ms)),
                  (I[j.timeline_id] = !0);
              }),
                (this.m_rgTimelineMetadata = R);
            }
            LoadTimelinesForSharedClip(f) {
              this.SetPreloadedTimelines(
                0,
                f.clip_id,
                f.game_id,
                f.timelines,
                void 0,
              );
            }
            LoadTimelinesForTestGame(f, b) {
              const R = (C) =>
                `https://steamloopback.host/gamerecordings/timelines/${C}.json`;
              this.SetPreloadedTimelines(0, void 0, f, b, R);
            }
            LoadTimelinesForTestClip(f, b, R, C) {
              this.SetPreloadedTimelines(f, b, R, C, void 0);
            }
            SetPreloadedTimelines(f, b, R, C, I) {
              (this.m_gameID = R),
                (this.m_clipID = b),
                (this.m_ulFirstTimelineOffsetMS = f);
              const j = C.slice();
              this.m_mapRunningTimelines.forEach((N, L) => {
                j.find((se) => se.timeline_id == L) || j.push(N.m_metadata);
              }),
                this.UpdateTimelineMetadata(j),
                (this.m_fnTimelineURLBuilder = I),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            FireEvent(f, ...b) {
              for (let R of this.m_rgListeners) {
                let C = R[f];
                C instanceof Function && C.apply(R, b);
              }
            }
            async LoadTimelineData(f) {
              let b = this.m_mapTimelineData.get(f);
              if (b && b.m_strState === "loading") {
                await b.m_promise;
                return;
              }
              if (
                (b && b.m_strState == "error") ||
                (this.IsActiveTimeline(f) && b.m_strState == "loaded")
              )
                return;
              const R = {
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (!this.m_fnTimelineURLBuilder)
                this.m_mapTimelineData.set(f, { m_strState: "loaded", ...R });
              else {
                const C = this.m_fnTimelineURLBuilder(f),
                  I = S()
                    .get(C, { withCredentials: !1 })
                    .then(
                      (j) => {
                        if (j.status == 200 && j.data) {
                          Mn(j.data);
                          const N = this.ProcessTimelineEntries(j.data);
                          this.m_mapTimelineData.set(f, N);
                        } else
                          this.m_mapTimelineData.set(f, {
                            ...R,
                            m_strState: "error",
                          });
                      },
                      (j) => {
                        this.m_mapTimelineData.set(f, {
                          ...R,
                          m_strState: "error",
                        });
                      },
                    )
                    .finally(() => this.FireEvent("OnTimelineLoaded", f));
                this.m_mapTimelineData.set(f, {
                  m_strState: "loading",
                  m_promise: I,
                  ...R,
                });
              }
            }
            ProcessTimelineEntries(f) {
              let b = {
                m_strState: "loaded",
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (f.entries) {
                const R = [],
                  C = [],
                  I = [],
                  j = [];
                for (const L of f.entries)
                  switch (L.type) {
                    case "phase":
                      I.push(L);
                      break;
                    case "gamemode":
                      R.push(L);
                      break;
                    case "state_description":
                      C.push(L);
                      break;
                    case "achievement":
                    case "error":
                    case "event":
                    case "screenshot":
                    case "usermarker":
                      j.push(L);
                      break;
                    default:
                      console.error(`Unknown timeline entry type ${L.type}`);
                  }
                const N = (L, se) => parseInt(L.time) - parseInt(se.time);
                (b.m_rgGameModeChanges = R.sort(N)),
                  (b.m_rgStateDescriptions = C.sort(N)),
                  (b.m_rgPhases = I.sort(N)),
                  (b.m_rgEntries = j.sort(N)),
                  b.m_rgGameModeChanges.length > 0 &&
                    parseInt(b.m_rgGameModeChanges[0].time) < Yn &&
                    (b.m_rgGameModeChanges[0].time = "0");
              }
              return b;
            }
            static ApplyTimelineRounding(f, b) {
              if (b === 0) return f;
              const R = f % b;
              return R == 0 ? f : f + (b - R);
            }
            FindTimelineAtOffset(f, b) {
              const R = f + this.m_ulFirstTimelineOffsetMS;
              let C = 0;
              for (let I of this.m_rgTimelineMetadata) {
                const j = this.GetTimelineStartBeforeGlobalZeroMS(
                  I.metadata.timeline_id,
                );
                let N = parseInt(I.metadata.duration_ms) + j;
                if (C + N > R)
                  return {
                    timeline: I,
                    nTimelineOffsetMS: R - C,
                    ulGlobalToTimelineOffset: j,
                  };
                C += Ja.ApplyTimelineRounding(N, b);
              }
              return null;
            }
            GetGlobalOffsetDataForTimeline(f, b) {
              let R = 0;
              for (let C of this.m_rgTimelineMetadata) {
                let I = parseInt(C.metadata.duration_ms),
                  j = Ja.ApplyTimelineRounding(I, b);
                if (C.metadata.timeline_id == f)
                  return { nGlobalOffsetMS: R, nRoundedDurationMS: j };
                R += j;
              }
              return null;
            }
            CreateGlobalRangeForTimeline(f, b, R, C) {
              let I = b - R,
                j = b + C;
              return this.ClampGlobalRangeToTimeline(f, I, j);
            }
            ClampGlobalRangeToTimeline(f, b, R) {
              let C = this.GetGlobalOffsetDataForTimeline(f, 0);
              if (!C) return [0, 0];
              let I = Math.max(b, C.nGlobalOffsetMS),
                j = Math.min(R, C.nGlobalOffsetMS + C.nRoundedDurationMS - 1);
              return [I, j];
            }
            GetTimelineOffsetFromGlobal(f, b) {
              const R = this.m_ulFirstTimelineOffsetMS + f;
              let C = 0;
              for (let I of this.m_rgTimelineMetadata) {
                const j = this.GetTimelineStartBeforeGlobalZeroMS(
                    I.metadata.timeline_id,
                  ),
                  N = parseInt(I.metadata.duration_ms) + j,
                  L = Ja.ApplyTimelineRounding(N, b);
                if (R < C + L)
                  return {
                    strTimelineID: I.metadata.timeline_id,
                    nTimelineOffsetMS: (0, J.sK)(R - C - j),
                  };
                C += N;
              }
              return {
                strTimelineID: void 0,
                nTimelineOffsetMS: (0, J.sK)(NaN),
              };
            }
            ConvertRecordingOffsetToGlobalOffset(f, b, R) {
              let C = 0;
              for (let I of this.m_rgTimelineMetadata) {
                let j = parseInt(I.metadata.duration_ms);
                const N = this.GetTimelineStartBeforeGlobalZeroMS(
                  I.metadata.timeline_id,
                );
                let L = Ja.ApplyTimelineRounding(j, R);
                for (let se of I.metadata.recordings)
                  if (se.recording_id === f) {
                    let je =
                      (isNaN(parseInt(se.recording_zero_timeline_offset_ms))
                        ? 0
                        : parseInt(se.recording_zero_timeline_offset_ms) - N) +
                      b;
                    return (
                      (C += je),
                      {
                        nGlobalOffsetMS: C,
                        nRoundedDurationMS: L,
                        strTimelineID: I.metadata.timeline_id,
                        nTimelineOffsetMS: je,
                      }
                    );
                  }
                C += L;
              }
              return null;
            }
            IsActiveTimeline(f) {
              return f ? this.m_mapRunningTimelines.has(f) : !1;
            }
            MakeRelativeToTimelineEndIfActive(f, b) {
              if (!this.IsActiveTimeline(f)) return b;
              const R = this.GetTimelineMetadata(f);
              if (!R) return b;
              let C = parseInt(R.metadata.duration_ms);
              return Math.min(b - C, 0);
            }
            IsActiveRecording(f) {
              for (let b of this.m_rgTimelineMetadata)
                for (let R of b.metadata.recordings)
                  if (R.recording_id === f) {
                    const C = this.m_mapRunningTimelines.get(
                      b.metadata.timeline_id,
                    );
                    return C && C.m_runningRecording
                      ? C.m_runningRecording.recording_id === f
                      : !1;
                  }
              return !1;
            }
            GetRunningTimelineDurationMS(f) {
              let b = this.m_mapRunningTimelines.get(f);
              if (!b) return 0;
              let R =
                  performance.now() -
                  b.m_perfCounterStart +
                  b.m_nPerfCounterOffsetMS,
                C = parseInt(b.m_metadata.duration_ms) || 0;
              return Math.max(R, C);
            }
            GetRunningTimelineForRecording(f, b) {
              const R = this.m_mapRunningTimelines.get(f);
              return R &&
                R.m_runningRecording &&
                R.m_runningRecording.recording_id === b
                ? R
                : null;
            }
            ConvertGlobaOffsetToRecordingAndRelativeOffset(f) {
              if (!this.m_bInitialized) return null;
              let b = this.FindTimelineAtOffset(f, 0);
              if (!b) return null;
              let R = b.nTimelineOffsetMS - b.ulGlobalToTimelineOffset;
              for (let C of b.timeline.metadata.recordings) {
                let I = parseInt(C.start_offset_ms);
                if (I + parseInt(C.duration_ms) < R || I > R) continue;
                let N = parseInt(C.recording_zero_timeline_offset_ms),
                  L = Math.max(R - I, 0);
                return (
                  isNaN(N) || (L = Math.max(b.nTimelineOffsetMS - N, 0)),
                  {
                    strRecordingID: C.recording_id,
                    nRecordingOffsetMS: L,
                    nStartOffsetMS: I,
                  }
                );
              }
              return null;
            }
            async FindRecordingAndOffsetForEntry(f) {
              for (const b of this.m_mapRunningTimelines.keys()) {
                if (!this.IsActiveTimeline(b)) continue;
                await this.LoadTimelineData(b);
                const R = this.m_mapTimelineData.get(b),
                  C = this.m_mapRunningTimelines.get(b);
                if (!(!R || !C)) {
                  for (const I of R.m_rgEntries)
                    if (I.id == f) {
                      const j = parseInt(I.time);
                      for (const N of C.m_metadata.recordings) {
                        const L = parseInt(N.start_offset_ms),
                          se = L + parseInt(N.duration_ms);
                        if (j >= L && j <= se)
                          return {
                            strRecordingID: N.recording_id,
                            nRecordingOffsetMS: j,
                            nStartOffsetMS: L,
                          };
                      }
                    }
                  break;
                }
              }
            }
            GetClosestNextRecordingInGlobalTimeline(f) {
              for (let b of this.m_rgTimelineMetadata)
                for (let R of b.metadata.recordings)
                  if (
                    parseInt(R.start_offset_ms) + b.nGlobalOffsetMS.valMS >
                    f.valMS
                  )
                    return R;
              return null;
            }
            GetClosestPreviousRecordingInGlobalTimeline(f) {
              let b = null;
              for (let R of this.m_rgTimelineMetadata)
                for (let C of R.metadata.recordings) {
                  if (
                    parseInt(C.start_offset_ms) + R.nGlobalOffsetMS.valMS >
                    f.valMS
                  )
                    return b;
                  b = C;
                }
              return b;
            }
            ConvertRecordingTimeMStoPreTrimTimeMS(f, b) {
              for (let R of this.m_rgTimelineMetadata)
                for (let C of R.metadata.recordings)
                  if (C.recording_id === f) {
                    const I = parseInt(C.recording_zero_timeline_offset_ms),
                      j = this.GetTimelineStartBeforeGlobalZeroMS(
                        R.metadata.timeline_id,
                      );
                    return !j || isNaN(I) ? b : b + j - I;
                  }
              return b;
            }
            GetTimelineDataOrStartLoad(f) {
              if (!f) return null;
              let b = this.m_mapTimelineData.get(f);
              return (
                b ||
                  (this.LoadTimelineData(f),
                  (b = this.m_mapTimelineData.get(f))),
                b
              );
            }
            GetTimelineData(f) {
              return this.m_mapTimelineData.get(f);
            }
            SetTimelineData(f, b) {
              const R = this.ProcessTimelineEntries(b);
              this.m_mapTimelineData.set(f, R);
            }
            GetClosestPreviousEntryInTimeline(f, b) {
              const R = this.GetTimelineMetadata(f),
                C = this.GetTimelineStartBeforeGlobalZeroMS(f),
                I = this.GetTimelineDataOrStartLoad(f);
              let j = null;
              if (I && I.m_strState === "loaded") {
                const N = I.m_rgEntries.filter((se) => {
                    const de = parseInt(se.time),
                      je = C + parseInt(R.metadata.duration_ms);
                    return de < je && de > C;
                  }),
                  L = we.rJ(N, (se) => b.valMS - 1 - parseInt(se.time));
                L !== -1 && (j = N[L]);
              }
              return {
                entry: j,
                timelineState: I == null ? void 0 : I.m_strState,
              };
            }
            GetClosestNextEntryInTimeline(f, b) {
              const R = this.GetTimelineMetadata(f),
                C = this.GetTimelineStartBeforeGlobalZeroMS(f),
                I = this.GetTimelineDataOrStartLoad(f);
              let j = null;
              if (I && I.m_strState === "loaded") {
                const N = I.m_rgEntries.filter((se) => {
                    const de = parseInt(se.time),
                      je = C + parseInt(R.metadata.duration_ms);
                    return de < je && de > C;
                  }),
                  L = we.rJ(N, (se) => b.valMS - parseInt(se.time));
                L < N.length - 1 && (j = N[L + 1]);
              }
              return {
                entry: j,
                timelineState: I == null ? void 0 : I.m_strState,
              };
            }
            GetClosestPreviousEntryInGlobalTimeline(f) {
              const b = this.GetTimelineOffsetFromGlobal(f, 0),
                R = this.GetTimelineData(b.strTimelineID);
              if (!R || R.m_strState !== "loaded")
                return {
                  timelineID: b == null ? void 0 : b.strTimelineID,
                  timelineState: R == null ? void 0 : R.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const C = this.GetTimelineStartBeforeGlobalZeroMS(
                  b.strTimelineID,
                ),
                I = b.nTimelineOffsetMS.valMS + C,
                j = we.rJ(R.m_rgEntries, (L) => I - parseInt(L.time));
              if (j !== -1) {
                const L = R.m_rgEntries[j],
                  de =
                    this.GetTimelineMetadata(b.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    C +
                    parseInt(L.time);
                return de < 0
                  ? {
                      timelineID: b.strTimelineID,
                      timelineState: R.m_strState,
                      entry: null,
                      globalMS: null,
                    }
                  : {
                      timelineID: b.strTimelineID,
                      timelineState: R.m_strState,
                      entry: L,
                      globalMS: (0, J.Sb)(de),
                    };
              }
              let N = this.GetTimelineMetadataIndex(b.strTimelineID);
              if (N < 1)
                return {
                  timelineID: b.strTimelineID,
                  timelineState: R.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let L = N - 1; L >= 0; L--) {
                const se = this.m_rgTimelineMetadata[L],
                  de = this.GetTimelineData(se.metadata.timeline_id);
                if (de) {
                  if (de.m_strState !== "loaded")
                    return {
                      timelineID: se.metadata.timeline_id,
                      timelineState: de.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (de.m_rgEntries.length) {
                    const je = de.m_rgEntries[de.m_rgEntries.length - 1],
                      Nr = this.GetTimelineStartBeforeGlobalZeroMS(
                        se.metadata.timeline_id,
                      ),
                      yi = se.nGlobalOffsetMS.valMS - Nr + parseInt(je.time);
                    return yi < 0
                      ? {
                          timelineID: se.metadata.timeline_id,
                          timelineState: de.m_strState,
                          entry: null,
                          globalMS: null,
                        }
                      : {
                          timelineID: se.metadata.timeline_id,
                          timelineState: de.m_strState,
                          entry: je,
                          globalMS: (0, J.Sb)(yi),
                        };
                  }
                }
              }
              return {
                timelineID: this.m_rgTimelineMetadata[0].metadata.timeline_id,
                timelineState: "loaded",
                entry: null,
                globalMS: null,
              };
            }
            GetClosestNextEntryInGlobalTimeline(f) {
              const b = this.GetTimelineOffsetFromGlobal(f, 0),
                R = this.GetTimelineData(b.strTimelineID);
              if (!R || R.m_strState !== "loaded")
                return {
                  timelineID: b == null ? void 0 : b.strTimelineID,
                  timelineState: R == null ? void 0 : R.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const C = this.GetTimelineStartBeforeGlobalZeroMS(
                  b.strTimelineID,
                ),
                I = b.nTimelineOffsetMS.valMS + C,
                N = we.rJ(R.m_rgEntries, (de) => I - parseInt(de.time)) + 1;
              if (N <= R.m_rgEntries.length - 1) {
                const de = R.m_rgEntries[N],
                  Nr =
                    this.GetTimelineMetadata(b.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    C +
                    parseInt(de.time);
                return Nr < this.GetGlobalTimelineEndMS().valMS
                  ? {
                      timelineID: b.strTimelineID,
                      timelineState: R.m_strState,
                      entry: de,
                      globalMS: (0, J.Sb)(Nr),
                    }
                  : {
                      timelineID: b.strTimelineID,
                      timelineState: R.m_strState,
                      entry: null,
                      globalMS: null,
                    };
              }
              const L = this.m_rgTimelineMetadata.length;
              let se = this.GetTimelineMetadataIndex(b.strTimelineID);
              if (se === -1 || se === L - 1)
                return {
                  timelineID: b.strTimelineID,
                  timelineState: R.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let de = se + 1; de < L; de++) {
                const je = this.m_rgTimelineMetadata[de],
                  Nr = this.GetTimelineData(je.metadata.timeline_id);
                if (Nr) {
                  if (Nr.m_strState !== "loaded")
                    return {
                      timelineID: je.metadata.timeline_id,
                      timelineState: Nr.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (Nr.m_rgEntries.length) {
                    const yi = Nr.m_rgEntries[0],
                      Ci = this.GetTimelineStartBeforeGlobalZeroMS(
                        je.metadata.timeline_id,
                      ),
                      Ai = je.nGlobalOffsetMS.valMS - Ci + parseInt(yi.time);
                    return Ai < this.GetGlobalTimelineEndMS().valMS
                      ? {
                          timelineID: je.metadata.timeline_id,
                          timelineState: Nr.m_strState,
                          entry: yi,
                          globalMS: (0, J.Sb)(Ai),
                        }
                      : {
                          timelineID: je.metadata.timeline_id,
                          timelineState: Nr.m_strState,
                          entry: null,
                          globalMS: null,
                        };
                  }
                }
              }
              return {
                timelineID:
                  this.m_rgTimelineMetadata[L - 1].metadata.timeline_id,
                timelineState: "loaded",
                entry: null,
                globalMS: null,
              };
            }
            FindRangeEventsAtGlobalMS(f) {
              const b = this.GetTimelineOffsetFromGlobal(f, 0),
                R = this.GetTimelineDataOrStartLoad(b.strTimelineID);
              if (!R || R.m_strState !== "loaded") return [];
              const C = [];
              for (const I of R.m_rgEntries) {
                if (parseInt(I.time) > b.nTimelineOffsetMS.valMS) break;
                if (I.type !== "event" || parseInt(I.duration) == 0) continue;
                const j = parseInt(I.time),
                  N = j + parseInt(I.duration);
                j <= b.nTimelineOffsetMS.valMS &&
                  N >= b.nTimelineOffsetMS.valMS &&
                  C.push(I);
              }
              return C;
            }
            GetStateDescriptionAtGlobalMS(f) {
              const b = this.GetTimelineOffsetFromGlobal(f.valMS, 0),
                R = this.GetTimelineDataOrStartLoad(b.strTimelineID);
              if (!R || R.m_strState !== "loaded") return null;
              const C = we.rJ(
                R.m_rgStateDescriptions,
                (I) => b.nTimelineOffsetMS.valMS - parseInt(I.time),
              );
              return C > -1 ? R.m_rgStateDescriptions[C] : null;
            }
            AdvanceGameModeIndex(f) {
              let b = f.m_iGameModeChanges;
              for (; b + 1 < f.m_data.m_rgGameModeChanges.length; ) {
                let R = f.m_data.m_rgGameModeChanges[b + 1];
                if (parseInt(R.time) > f.m_nTimelineOffsetMS) break;
                b++;
              }
              f.m_iGameModeChanges = b;
            }
            AdvanceEntriesIndex(f) {
              for (
                f.m_iEntries == -1 && f.m_iEntries++;
                f.m_iEntries < f.m_data.m_rgEntries.length;
              ) {
                let b = f.m_data.m_rgEntries[f.m_iEntries];
                if (parseInt(b.time) >= f.m_nTimelineOffsetMS) break;
                f.m_iEntries++;
              }
            }
            CreateTimelineIterator(f, b) {
              let R = this.FindTimelineAtOffset(f, b);
              if (!R)
                return {
                  m_timeline: null,
                  m_data: null,
                  m_nTimelineOffsetMS: 0,
                  m_iGameModeChanges: -1,
                  m_iEntries: -1,
                };
              let C = this.GetTimelineDataOrStartLoad(
                  R.timeline.metadata.timeline_id,
                ),
                I = -1,
                j = -1;
              if ((C == null ? void 0 : C.m_strState) == "loaded") {
                let L = (se) => R.ulGlobalToTimelineOffset - parseInt(se.time);
                (I = we.rJ(C.m_rgGameModeChanges, L)),
                  (j = we.rJ(C.m_rgEntries, L));
              }
              let N = {
                m_timeline: R.timeline.metadata,
                m_data: C,
                m_nTimelineOffsetMS: Math.max(R.ulGlobalToTimelineOffset, 0),
                m_iGameModeChanges: I,
                m_iEntries: j,
              };
              return (
                this.AdvanceEntriesIndex(N), this.AdvanceGameModeIndex(N), N
              );
            }
            HasIteratorReachedEnd(f) {
              return !f.m_timeline;
            }
            AdvanceIterator(f, b) {
              let R = parseInt(f.m_timeline.duration_ms);
              if (
                f.m_nTimelineOffsetMS + b <
                R + this.m_ulFirstTimelineOffsetMS
              ) {
                (f.m_nTimelineOffsetMS += b),
                  this.AdvanceEntriesIndex(f),
                  this.AdvanceGameModeIndex(f);
                return;
              }
              let C = this.m_rgTimelineMetadata.findIndex(
                (I) => I.metadata == f.m_timeline,
              );
              if (C < 0 || C == this.m_rgTimelineMetadata.length - 1) {
                f.m_timeline = null;
                return;
              }
              C++,
                (f.m_timeline = this.m_rgTimelineMetadata[C].metadata),
                (f.m_data = this.GetTimelineDataOrStartLoad(
                  f.m_timeline.timeline_id,
                )),
                (f.m_nTimelineOffsetMS = 0),
                (f.m_iGameModeChanges = 0),
                (f.m_iEntries = 0);
            }
            GetIteratorTimelineState(f) {
              return f.m_data.m_strState;
            }
            GetIteratorGameMode(f) {
              return f.m_iGameModeChanges < 0 ||
                f.m_iGameModeChanges >= f.m_data.m_rgGameModeChanges.length
                ? p.il.Playing
                : f.m_data.m_rgGameModeChanges[f.m_iGameModeChanges].mode;
            }
            *GetIteratorEntriesWithin(f, b) {
              let R = f.m_data.m_rgEntries;
              for (let C = f.m_iEntries; C >= 0 && C < R.length; C++) {
                let I = R[C];
                if (parseInt(I.time) >= f.m_nTimelineOffsetMS + b) break;
                yield I;
              }
            }
            *GetIteratorGameModesWithin(f, b) {
              let R = f.m_data.m_rgGameModeChanges;
              for (let C = f.m_iEntries; C >= 0 && C < R.length; C++) {
                let I = R[C];
                if (parseInt(I.time) >= f.m_nTimelineOffsetMS + b) break;
                yield I;
              }
            }
            GetFirstRecording() {
              if (!this.m_bInitialized) return "";
              const f = this.m_rgTimelineMetadata[0];
              if (!f) return "";
              const b = f.metadata.recordings[0];
              return b ? b.recording_id : "";
            }
            GetFirstRecordingOfLastTimelineSession() {
              if (!this.m_bInitialized) return "";
              const f =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (!f) return "";
              const b = f.metadata.recordings[0];
              return b ? b.recording_id : "";
            }
            GetNextRecording(f) {
              if (!this.m_bInitialized || !f) return "";
              let b = !1;
              for (let R of this.m_rgTimelineMetadata)
                for (let C of R.metadata.recordings) {
                  if (b) return C.recording_id;
                  C.recording_id == f && (b = !0);
                }
              return "";
            }
            BRecordingHasZeroOffset(f) {
              if (!this.m_bInitialized) return !1;
              for (let b of this.m_rgTimelineMetadata)
                for (let R of b.metadata.recordings)
                  if (R.recording_id == f)
                    return !isNaN(
                      parseInt(R.recording_zero_timeline_offset_ms),
                    );
              return !1;
            }
            GetTimelineDateMS(f, b) {
              if (!this.m_bInitialized) return 0;
              let R = this.FindTimelineAtOffset(f, b);
              return R
                ? R.timeline.metadata.date_recorded * 1e3 + R.nTimelineOffsetMS
                : 0;
            }
            InsertEntryIntoTimelineSorted(f, b) {
              let R = (C, I) => parseInt(C.time) - parseInt(I.time);
              we.Xr(f.m_rgEntries, b, R);
            }
            AddEventToTimeline(f, b, R, C, I, j, N, L) {
              if (!this.m_bInitialized)
                return (
                  (0, $.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const se = this.m_mapTimelineData.get(f);
              if (!se) return (0, $.ZI)(`failed to find timeline ${f}`), !1;
              const de = b + this.GetTimelineStartBeforeGlobalZeroMS(f),
                je = {
                  id: C,
                  time: de + "",
                  type: "event",
                  icon: R,
                  title: j,
                  description: N,
                  priority: I,
                  duration: `${L}`,
                  possible_clip: 2,
                };
              return (
                (0, $.tG)(`adding timeline event marker at ${f} at ${de} MS`),
                this.InsertEntryIntoTimelineSorted(se, je),
                this.FireEvent("OnInvalidate", f),
                !0
              );
            }
            RemoveTimelineEvent(f, b) {
              if (!this.m_bInitialized)
                return (
                  (0, $.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const R = this.m_mapTimelineData.get(f);
              if (!R) return (0, $.ZI)(`failed to find timeline ${f}`), !1;
              const C = R.m_rgEntries.findIndex((I) => I.id === b);
              return C < 0
                ? ((0, $.ZI)(`failed to find entry by id: ${b}`), !1)
                : (R.m_rgEntries.splice(C, 1),
                  this.FireEvent("OnInvalidate", f),
                  !0);
            }
            AddUserMarker(f, b, R, C) {
              if (!this.m_bInitialized)
                return (
                  (0, $.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const I = this.m_mapTimelineData.get(f);
              if (!I) return (0, $.ZI)(`failed to find timeline ${f}`), !1;
              const j = b + this.GetTimelineStartBeforeGlobalZeroMS(f),
                N = {
                  id: C,
                  time: j + "",
                  type: "usermarker",
                  icon: R,
                  title: "",
                  description: "",
                  priority: 0,
                };
              return (
                (0, $.tG)(`adding user marker at ${f} at ${j} MS`),
                this.InsertEntryIntoTimelineSorted(I, N),
                this.FireEvent("OnInvalidate", f),
                !0
              );
            }
            UpdateUserMarker(f, b, R) {
              if (!this.m_bInitialized)
                return (
                  (0, $.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const C = this.m_mapTimelineData.get(f);
              if (!C) return (0, $.ZI)(`failed to find timeline ${f}`), !1;
              const I = C.m_rgEntries.findIndex((L) => L.id === b);
              if (I < 0)
                return (0, $.ZI)(`failed to find entry by id: ${b}`), !1;
              const j = C.m_rgEntries[I],
                N = j.time;
              return (
                (j.icon = R.strIcon),
                (j.time = "" + R.nTimelineOffsetMS),
                (j.title = R.name),
                (j.description = R.description),
                N != j.time &&
                  (C.m_rgEntries.splice(I, 1),
                  this.InsertEntryIntoTimelineSorted(C, j)),
                this.FireEvent("OnInvalidate", f),
                !0
              );
            }
            RemoveUserMarker(f, b) {
              if (!this.m_bInitialized)
                return (
                  (0, $.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const R = this.m_mapTimelineData.get(f);
              if (!R) return (0, $.ZI)(`failed to find timeline ${f}`), !1;
              const C = R.m_rgEntries.findIndex((I) => I.id === b);
              return C < 0
                ? ((0, $.ZI)(`failed to find entry by id: ${b}`), !1)
                : (R.m_rgEntries.splice(C, 1),
                  this.FireEvent("OnInvalidate", f),
                  !0);
            }
            AddRunningTimeline(f, b, R) {
              if (
                this.m_rgTimelineMetadata.find(
                  (L) => L.metadata.timeline_id == f,
                )
              )
                return;
              const C = {
                  timeline_id: f,
                  game_id: b,
                  date_recorded: R,
                  recordings: [],
                },
                I =
                  this.m_rgTimelineMetadata[
                    this.m_rgTimelineMetadata.length - 1
                  ],
                j = I
                  ? I.nGlobalOffsetMS.valMS + parseInt(I.metadata.duration_ms)
                  : 0;
              we.Xr(
                this.m_rgTimelineMetadata,
                { nGlobalOffsetMS: (0, J.Sb)(j), metadata: C },
                (L, se) => L.metadata.date_recorded - se.metadata.date_recorded,
              ),
                this.m_mapTimelineData.set(f, {
                  m_strState: "loaded",
                  m_rgGameModeChanges: [],
                  m_rgStateDescriptions: [],
                  m_rgEntries: [],
                  m_rgPhases: [],
                });
              let N = {
                m_metadata: C,
                m_globalStartMS: j,
                m_perfCounterStart: performance.now(),
                m_nPerfCounterOffsetMS: Math.max(0, (0, r._2)() - R) * 1e3,
                m_runningRecording: null,
              };
              this.m_mapRunningTimelines.set(f, N),
                this.m_schUpdateRunning.IsScheduled() ||
                  this.m_schUpdateRunning.Schedule(
                    Ni,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", f);
            }
            UpdateRunningTimelines() {
              let f;
              this.m_mapRunningTimelines.forEach((b) => {
                f = b.m_metadata.timeline_id;
                let R =
                    performance.now() -
                    b.m_perfCounterStart +
                    b.m_nPerfCounterOffsetMS,
                  C = parseInt(b.m_metadata.duration_ms) || 0;
                R > C && (b.m_metadata.duration_ms = R.toString());
              }),
                this.m_mapRunningTimelines.size > 0 &&
                  this.m_schUpdateRunning.Schedule(
                    Ni,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", f);
            }
            RunningTimelineStopped(f, b) {
              let R = this.m_mapRunningTimelines.get(f);
              R &&
                ((R.m_metadata.duration_ms = b),
                this.m_mapRunningTimelines.delete(f),
                this.FireEvent("OnInvalidate", f));
            }
            AddRunningTimelineEntry(f) {
              let b = this.m_mapRunningTimelines.get(f.timeline_id),
                R = this.m_mapTimelineData.get(f.timeline_id);
              if (!b || !R) return;
              let C = (0, p.rU)(f);
              if (!C) return;
              (0, p.hT)(C)
                ? we.Xr(
                    R.m_rgGameModeChanges,
                    C,
                    (N, L) => parseInt(N.time) - parseInt(L.time),
                  )
                : (0, p.Te)(C)
                  ? we.Xr(
                      R.m_rgStateDescriptions,
                      C,
                      (N, L) => parseInt(N.time) - parseInt(L.time),
                    )
                  : we.Xr(
                      R.m_rgEntries,
                      C,
                      (N, L) => parseInt(N.time) - parseInt(L.time),
                    );
              let I = parseInt(b.m_metadata.duration_ms) || 0,
                j = parseInt(f.time);
              I < j && (b.m_metadata.duration_ms = j.toString()),
                this.FireEvent("OnInvalidate", f.timeline_id);
            }
            TimelineDeleted(f) {
              const R = this.m_rgTimelineMetadata
                .filter((C) => C.metadata.timeline_id !== f)
                .map((C) => C.metadata);
              this.UpdateTimelineMetadata(R),
                this.m_mapTimelineData.delete(f),
                this.FireEvent("OnInvalidate", f);
            }
            RecordingSessionChanged(f) {
              let b = f.session_id,
                R = f.notification_type;
              if (R == ze.E6.MC) {
                const C = this.m_mapRunningTimelines.get(f.timeline_id);
                if (!C) {
                  this.FireEvent("OnInvalidateRecording", f.timeline_id, b),
                    (0, ee.wT)(
                      !1,
                      "Received recording started message before timeline info",
                    );
                  return;
                }
                const I = {
                  recording_id: b,
                  start_offset_ms: f.start_offset,
                  recording_zero_timeline_offset_ms: f.start_offset,
                  duration_ms: f.duration_ms,
                  recording_type: f.recording_type,
                };
                C.m_metadata.recordings.push(I), (C.m_runningRecording = I);
              } else if (R == ze.E6.wK) {
                const C = this.GetRunningTimelineForRecording(f.timeline_id, b);
                if (!C) return;
                (C.m_runningRecording.duration_ms = f.duration_ms),
                  (C.m_runningRecording = null),
                  this.FireEvent("OnInvalidateRecording", f.timeline_id, b);
              } else if (R == ze.E6.G6) {
                const C = this.GetTimelineMetadata(f.timeline_id);
                if (C) {
                  const j = C.metadata.recordings.find(
                    (N) => N.recording_id === b,
                  );
                  if (j) {
                    (j.start_offset_ms = f.start_offset),
                      (j.duration_ms = f.duration_ms);
                    const N =
                      parseInt(f.start_offset) + parseInt(f.duration_ms);
                    let L = parseInt(C.metadata.duration_ms) || 0;
                    N > L && (C.metadata.duration_ms = N.toString());
                  }
                }
                this.GetRunningTimelineForRecording(f.timeline_id, b) ||
                  this.FireEvent("OnInvalidateRecording", f.timeline_id, b);
              } else if (R == ze.E6.qN) {
                const C = this.GetTimelineMetadata(f.timeline_id);
                if (C) {
                  const I = C.metadata.recordings.filter(
                    (j) => j.recording_id !== b,
                  );
                  C.metadata.recordings = I;
                }
              }
              this.FireEvent("OnInvalidate", f.timeline_id);
            }
            GetGlobalTimelineEndMS() {
              const f =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (f) {
                const b = isNaN(parseInt(f.metadata.duration_ms))
                  ? 0
                  : parseInt(f.metadata.duration_ms);
                return (0, J.Sb)(f.nGlobalOffsetMS.valMS + b);
              }
              return (0, J.Sb)(0);
            }
            GetEndOfRecordingsMS() {
              const f =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (f) {
                const b =
                  f.metadata.recordings[f.metadata.recordings.length - 1];
                if (b) {
                  const R = this.m_mapRunningTimelines.has(
                      f.metadata.timeline_id,
                    ),
                    C = isNaN(parseInt(b.start_offset_ms))
                      ? 0
                      : parseInt(b.start_offset_ms),
                    I = isNaN(parseInt(f.metadata.duration_ms))
                      ? 0
                      : parseInt(f.metadata.duration_ms);
                  let j = 0;
                  return (
                    R
                      ? (j = Math.max(0, I - C))
                      : isNaN(parseInt(b.duration_ms)) ||
                        (j = parseInt(b.duration_ms)),
                    (0, J.Sb)(f.nGlobalOffsetMS.valMS + C + j)
                  );
                }
              }
              return null;
            }
            GetTotalRecordingDuration() {
              let f = 0;
              return (
                this.m_rgTimelineMetadata.forEach((b) => {
                  b.metadata.recordings.forEach((R) => {
                    isNaN(parseInt(R.duration_ms)) ||
                      (f = f + parseInt(R.duration_ms));
                  });
                }),
                f
              );
            }
            GetTimelineStartBeforeGlobalZeroMS(f) {
              return f == this.m_rgTimelineMetadata[0].metadata.timeline_id
                ? this.m_ulFirstTimelineOffsetMS
                : 0;
            }
            async GenerateNamePartsFromTimeline(f, b, R, C) {
              var I;
              let j,
                N = !1,
                L,
                se,
                de,
                je;
              for (let Hr of this.m_rgTimelineMetadata) {
                let Li = !1;
                if (!N) {
                  if (Hr.metadata.timeline_id != f) continue;
                  (Li = !0), (N = !0);
                }
                const Hi = Hr.metadata.timeline_id == R;
                await this.LoadTimelineData(Hr.metadata.timeline_id);
                const Vi = this.m_mapTimelineData.get(Hr.metadata.timeline_id);
                Li && (de = Hr.metadata.date_recorded + Math.floor(b / 1e3)),
                  Hi && (je = Hr.metadata.date_recorded + Math.floor(C / 1e3));
                for (let Ti of Vi.m_rgEntries) {
                  const ui = parseInt(Ti.time);
                  if (
                    (Li && ui < b) ||
                    (Hi && ui > C) ||
                    (!(0, p.eJ)(Ti) && !(0, p.N$)(Ti))
                  )
                    continue;
                  const tn = $i(Ti);
                  (!j || (tn && tn.rank > j.rank)) && (j = tn);
                }
                for (let Ti of Vi.m_rgStateDescriptions) {
                  const ui = parseInt(Ti.time);
                  (Hi && ui > C) || ((!L || se < ui) && ((L = Ti), (se = ui)));
                }
                if (Hi) break;
              }
              const Nr =
                  (I = j == null ? void 0 : j.strTitle) != null
                    ? I
                    : L == null
                      ? void 0
                      : L.title,
                yi = new U.VS(this.GetGameID()),
                Ci = Lr.Vw.GetAppInfo(yi.GetInternalAppID()),
                Ai = Ci == null ? void 0 : Ci.name;
              return {
                strTimelinePart: Nr,
                strAppNamePart: Ai,
                rtStart: de,
                rtEnd: je,
              };
            }
            async GenerateClipNameFromTimeline(f, b, R, C) {
              const { strTimelinePart: I, strAppNamePart: j } =
                  await this.GenerateNamePartsFromTimeline(f, b, R, C),
                N = new Date(),
                L = `${N.getFullYear()}-${(N.getMonth() + 1).toString().padStart(2, "0")}-${N.getDate().toString().padStart(2, "0")} ${N.toLocaleTimeString(ue.pf.GetPreferredLocales())}`,
                se = [j, L, I].filter((de) => !!de).join(" - ");
              return (0, $.q_)(`Generated clip name "${se}"`), se;
            }
          };
        bi([ae.sH], Be.prototype, "m_bInitialized", 2),
          bi([O.o], Be.prototype, "UpdateRunningTimelines", 1);
        let Ui = Be;
        function $i(fe) {
          switch (fe.type) {
            case "event":
              const f = fe;
              return { rank: 5e4 + fe.priority, strTitle: f.title };
            case "usermarker":
              const b = fe;
              return !b.title && !b.description
                ? null
                : {
                    rank: 1e5 + fe.priority,
                    strTitle: fe.title || fe.description,
                  };
            case "state_description":
              return { rank: 4e4, strTitle: fe.title };
            case "achievement":
              return { rank: 9e4, strTitle: fe.title };
          }
          return null;
        }
        function Sn(fe) {
          const f = React.useMemo(() => GetTimelineLoaderForClip(fe), [fe]),
            b = React.useCallback(
              (R) =>
                `https://steamloopback.host/gamerecordings/clips/${fe}/video/${R}/session.mpd`,
              [fe],
            );
          return (
            React.useEffect(() => () => f && f.release(), [f]),
            { loader: f.loader, fnGetManifest: b }
          );
        }
        function en(fe) {
          const f = React.useMemo(() => GetTimelineLoaderForGame(fe), [fe]),
            b = React.useCallback(
              (R) =>
                `https://steamloopback.host/gamerecordings/video/${R}/session.mpd`,
              [],
            );
          return (
            React.useEffect(() => () => f && f.release(), [f]),
            { loader: f.loader, fnGetManifest: b }
          );
        }
        function Mn(fe) {
          if (!Array.isArray(fe.entries)) {
            let f = [];
            fe.entries &&
              typeof fe.entries == "object" &&
              ((f = Object.values(fe.entries)),
              (f = f.filter((b) => b && typeof b == "object" && "time" in b)),
              f.sort((b, R) => parseInt(b.time) - parseInt(R.time))),
              (fe.entries = f);
          }
        }
      },
      84346: (Y, qr, _) => {
        "use strict";
        _.d(qr, { J: () => ze });
        var u = _(72609),
          S = _(37901);
        function ze() {
          return (0, S.A)().languages.map(($) => we($.strISOCode));
        }
        function we($) {
          return $.length == 2 && u.TS.COUNTRY ? `${$}-${u.TS.COUNTRY}` : $;
        }
      },
      86578: (Y, qr, _) => {
        "use strict";
        _.d(qr, {
          Hv: () => we,
          E6: () => ze,
          $C: () => $,
          QX: () => S,
          Bw: () => u,
          xM: () => dn,
        });
        var u = {};
        _.r(u),
          _.d(u, {
            P8: () => Nr,
            Ey: () => Ai,
            aI: () => de,
            BA: () => se,
            uw: () => Ci,
            Fy: () => je,
            jL: () => yi,
          });
        var S = {};
        _.r(S),
          _.d(S, {
            sd: () => Ti,
            dh: () => ui,
            Jr: () => tn,
            t8: () => vi,
            qK: () => Hi,
            yq: () => Vi,
          });
        var ze = {};
        _.r(ze),
          _.d(ze, { qN: () => x, MC: () => $n, wK: () => Ya, G6: () => W });
        var we = {};
        _.r(we), _.d(we, { W: () => to, h: () => bn });
        var $ = {};
        _.r($), _.d($, { E: () => X, v: () => $a });
        var p = _(80613),
          d = _.n(p),
          r = _(75245),
          E = _(35038),
          O = _(66781),
          J = Object.defineProperty,
          Re = (B, e, a) =>
            e in B
              ? J(B, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (B[e] = a),
          ae = (B, e, a) => Re(B, typeof e != "symbol" ? e + "" : e, a);
        const U = class dt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.timelines || r.Sg(dt.M()),
              p.Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    timelines: { n: 1, c: le, r: !0, q: !0 },
                    postgame_events: { n: 2, c: Yn, r: !0, q: !0 },
                    temporary_clips: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    tags: { n: 4, c: Ui, r: !0, q: !0 },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = r.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(dt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new dt();
            return dt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(dt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(dt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingFile";
          }
        };
        ae(U, "sm_m"), ae(U, "sm_mbf");
        let Lr = null;
        const ee = class gt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.timelines || r.Sg(gt.M()),
              p.Message.initialize(this, e, 0, -1, [1, 14, 15], null);
          }
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    timelines: { n: 1, c: le, r: !0, q: !0 },
                    first_timeline_start_offset_ms: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_id: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    published_file_id: {
                      n: 5,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    size_in_bytes: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    name: { n: 7, br: r.qM.readString, bw: r.gp.writeString },
                    temporary: { n: 8, br: r.qM.readBool, bw: r.gp.writeBool },
                    original_device: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    original_gaming_device_type: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    date_downloaded: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    thumbnail_width: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    tags: { n: 14, c: Ui, r: !0, q: !0 },
                    phases: { n: 15, c: f, r: !0, q: !0 },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = r.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(gt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new gt();
            return gt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(gt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(gt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingClipFile";
          }
        };
        ae(ee, "sm_m"), ae(ee, "sm_mbf");
        let ue = null;
        const _e = class ft extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.timeline_id || r.Sg(ft.M()),
              p.Message.initialize(this, e, 0, -1, [5, 6, 7], null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    game_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    duration_ms: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    recordings: { n: 5, c: bi, r: !0, q: !0 },
                    phases: { n: 6, c: f, r: !0, q: !0 },
                    significant_events: { n: 7, c: Ni, r: !0, q: !0 },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = r.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ft.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ft();
            return ft.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ft.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ft.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineMetadata";
          }
        };
        ae(_e, "sm_m"), ae(_e, "sm_mbf");
        let le = _e;
        const Pe = class ht extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.recording_id || r.Sg(ht.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    start_offset_ms: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    recording_type: {
                      n: 4,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    delete_on_cleanup: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    video_manager_clip_id: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    video_manager_video_id: {
                      n: 7,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    cdn_manifest_url: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    file_size: {
                      n: 9,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    recording_zero_timeline_offset_ms: {
                      n: 10,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = r.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ht.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ht();
            return ht.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ht.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ht.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineMetadata_Recording";
          }
        };
        ae(Pe, "sm_m"), ae(Pe, "sm_mbf");
        let bi = Pe;
        const Ae = class pt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.game_id || r.Sg(pt.M()),
              p.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    events: { n: 2, c: Ni, r: !0, q: !0 },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = r.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(pt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new pt();
            return pt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(pt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(pt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPostGameSummary";
          }
        };
        ae(Ae, "sm_m"), ae(Ae, "sm_mbf");
        let Yn = Ae;
        const qi = class St extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.game_id || r.Sg(St.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    rt_created: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    possible_clip: {
                      n: 3,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    timeline_id: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    entry_id: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    timeline_offset_ms: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 7,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    marker_icon: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    marker_title: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    user_marker: {
                      n: 10,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = r.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(St.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new St();
            return St.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(St.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(St.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineEvent";
          }
        };
        ae(qi, "sm_m"), ae(qi, "sm_mbf");
        let Ni = qi;
        const Be = class Mt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.game_id || r.Sg(Mt.M()),
              p.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    tag: { n: 2, c: I },
                    references: { n: 3, c: Sn, r: !0, q: !0 },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = r.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Mt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Mt();
            return Mt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Mt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Mt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTag";
          }
        };
        ae(Be, "sm_m"), ae(Be, "sm_mbf");
        let Ui = Be;
        const $i = class bt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.clip_id || r.Sg(bt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    timeline_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    offset_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = r.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(bt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new bt();
            return bt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(bt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(bt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTag_Timeline";
          }
        };
        ae($i, "sm_m"), ae($i, "sm_mbf");
        let Sn = $i;
        const en = class yt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.timeline_id || r.Sg(yt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    entry_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    timeline_offset_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = r.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(yt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new yt();
            return yt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(yt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(yt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTagInstance";
          }
        };
        ae(en, "sm_m"), ae(en, "sm_mbf");
        let Mn = null;
        const fe = class Tt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Tt.prototype.phase_id || r.Sg(Tt.M()),
              p.Message.initialize(this, e, 0, -1, [6, 7, 9], null);
          }
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    phase_id: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    duration_ms: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    tags: { n: 6, c: R, r: !0, q: !0 },
                    contained_tags: { n: 7, c: R, r: !0, q: !0 },
                    background_timeline_offset: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    attributes: { n: 9, c: N, r: !0, q: !0 },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = r.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(e = !1) {
            return Tt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Tt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Tt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Tt();
            return Tt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Tt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Tt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPhase";
          }
        };
        ae(fe, "sm_m"), ae(fe, "sm_mbf");
        let f = fe;
        const b = class vt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.name || r.Sg(vt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    group: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = r.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(vt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new vt();
            return vt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(vt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(vt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPhase_Tag";
          }
        };
        ae(b, "sm_m"), ae(b, "sm_mbf");
        let R = b;
        const C = class Rt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Rt.prototype.name || r.Sg(Rt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    group: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    icon: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    priority: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = r.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Rt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Rt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Rt();
            return Rt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Rt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Rt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTimelineTag";
          }
        };
        ae(C, "sm_m"), ae(C, "sm_mbf");
        let I = C;
        const j = class Bt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.group || r.Sg(Bt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    group: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    value: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    priority: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = r.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Bt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Bt();
            return Bt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Bt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Bt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhaseAttribute";
          }
        };
        ae(j, "sm_m"), ae(j, "sm_mbf");
        let N = j;
        const L = 0,
          se = 1,
          de = 2,
          je = 3,
          Nr = 4,
          yi = 5,
          Ci = 6,
          Ai = 7,
          Hr = 8,
          Li = 9,
          Hi = 1,
          Vi = 2,
          Ti = 3,
          ui = 4,
          tn = 5,
          vi = 6,
          $n = 1,
          Ya = 2,
          x = 3,
          W = 4,
          bn = 0,
          to = 1,
          $a = 0,
          X = 1,
          ro = 1,
          io = 2;
        var no = Object.defineProperty,
          ao = (B, e, a) =>
            e in B
              ? no(B, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (B[e] = a),
          P = (B, e, a) => ao(B, typeof e != "symbol" ? e + "" : e, a);
        function Nl(B) {
          return "unknown ETimelineEntryType ( " + B + " )";
        }
        function cl(B) {
          return "unknown EPhaseResultType ( " + B + " )";
        }
        function es(B) {
          return "unknown ETimelineChangeNotificationType ( " + B + " )";
        }
        function Ul(B) {
          return (
            "unknown ERecordingSessionChangeNotificationType ( " + B + " )"
          );
        }
        function Al(B) {
          return "unknown EDiskSpaceType ( " + B + " )";
        }
        function Ll(B) {
          return "unknown EThumbnailTimePrecision ( " + B + " )";
        }
        function ul(B) {
          return "unknown EThumbnailFormat ( " + B + " )";
        }
        class di extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return di.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new di();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new di();
            return di.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return di.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Request";
          }
        }
        const ts = class Ct extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ct.prototype.apps || r.Sg(Ct.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: { apps: { n: 1, c: so, r: !0, q: !0 } },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = r.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(e = !1) {
            return Ct.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ct.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ct.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Ct();
            return Ct.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ct.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ct.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Response";
          }
        };
        P(ts, "sm_m"), P(ts, "sm_mbf");
        let yn = ts;
        const ea = class Gt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Gt.prototype.game_id || r.Sg(Gt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    most_recent_start_time: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    recording_type: {
                      n: 3,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    video_duration_seconds: {
                      n: 4,
                      br: r.qM.readDouble,
                      bw: r.gp.writeDouble,
                    },
                    timeline_duration_seconds: {
                      n: 5,
                      br: r.qM.readDouble,
                      bw: r.gp.writeDouble,
                    },
                    is_active: { n: 6, br: r.qM.readBool, bw: r.gp.writeBool },
                    file_size: {
                      n: 7,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = r.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(e = !1) {
            return Gt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Gt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Gt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Gt();
            return Gt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Gt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Gt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Response_App";
          }
        };
        P(ea, "sm_m"), P(ea, "sm_mbf");
        let so = ea;
        const rs = class wt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.game_id || r.Sg(wt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = r.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(wt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new wt();
            return wt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(wt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(wt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForApp_Request";
          }
        };
        P(rs, "sm_m"), P(rs, "sm_mbf");
        let is = rs;
        const Tn = class _t extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _t.prototype.timelines || r.Sg(_t.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: { timelines: { n: 1, c: le, r: !0, q: !0 } },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = r.w0(_t.M())), _t.sm_mbf;
          }
          toObject(e = !1) {
            return _t.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(_t.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(_t.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new _t();
            return _t.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(_t.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(_t.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForApp_Response";
          }
        };
        P(Tn, "sm_m"), P(Tn, "sm_mbf");
        let ns = Tn;
        const as = class Pt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pt.prototype.clip_id || r.Sg(Pt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = r.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Pt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Pt();
            return Pt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Pt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Pt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForClip_Request";
          }
        };
        P(as, "sm_m"), P(as, "sm_mbf");
        let ss = as;
        const os = class It extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.game_id || r.Sg(It.M()),
              p.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    timelines: { n: 2, c: le, r: !0, q: !0 },
                    first_timeline_start_offset_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = r.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(It.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new It();
            return It.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(It.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(It.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForClip_Response";
          }
        };
        P(os, "sm_m"), P(os, "sm_mbf");
        let ls = os;
        const ms = class Ot extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ot.prototype.page || r.Sg(Ot.M()),
              p.Message.initialize(this, e, 0, -1, [12], null);
          }
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    page: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    count: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    filter_gameid: {
                      n: 10,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    filter_search_string: {
                      n: 11,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    filter_tags: { n: 12, c: dl, r: !0, q: !0 },
                    filter_phase_id: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = r.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(e = !1) {
            return Ot.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ot.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ot.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Ot();
            return Ot.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ot.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ot.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Request";
          }
        };
        P(ms, "sm_m"), P(ms, "sm_mbf");
        let rn = ms;
        const nn = class zt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              zt.prototype.group || r.Sg(zt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    group: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = r.w0(zt.M())), zt.sm_mbf;
          }
          toObject(e = !1) {
            return zt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(zt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(zt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new zt();
            return zt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(zt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(zt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Request_Tag";
          }
        };
        P(nn, "sm_m"), P(nn, "sm_mbf");
        let dl = nn;
        const cs = class xt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.phases || r.Sg(xt.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    phases: { n: 1, c: gl, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = r.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(xt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new xt();
            return xt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(xt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(xt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response";
          }
        };
        P(cs, "sm_m"), P(cs, "sm_mbf");
        let us = cs;
        const ds = class Et extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.game_id || r.Sg(Et.M()),
              p.Message.initialize(
                this,
                e,
                0,
                -1,
                [7, 8, 10, 13, 16, 17],
                null,
              );
          }
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    duration_ms: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    tags: { n: 7, c: I, r: !0, q: !0 },
                    contained_tags: { n: 8, c: I, r: !0, q: !0 },
                    background_recording: { n: 9, c: fl },
                    clip_ids: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    type: { n: 11, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    start_ms: {
                      n: 12,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    screenshots: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    active: { n: 14, br: r.qM.readBool, bw: r.gp.writeBool },
                    phase_id: {
                      n: 15,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    significant_events: { n: 16, c: an, r: !0, q: !0 },
                    attributes: { n: 17, c: N, r: !0, q: !0 },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = r.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Et.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Et();
            return Et.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Et.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Et.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response_Phase";
          }
        };
        P(ds, "sm_m"), P(ds, "sm_mbf");
        let gl = ds;
        const ta = class jt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.timeline_id || r.Sg(jt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    offset: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = r.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(jt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new jt();
            return jt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(jt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(jt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response_Phase_BackgroundRecording";
          }
        };
        P(ta, "sm_m"), P(ta, "sm_mbf");
        let fl = ta;
        const gs = class Dt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dt.prototype.game_id || r.Sg(Dt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = r.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Dt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Dt();
            return Dt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Dt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Dt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTags_Request";
          }
        };
        P(gs, "sm_m"), P(gs, "sm_mbf");
        let Xi = gs;
        const fs = class kt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              kt.prototype.tags || r.Sg(kt.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: { tags: { n: 1, c: I, r: !0, q: !0 } },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = r.w0(kt.M())), kt.sm_mbf;
          }
          toObject(e = !1) {
            return kt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(kt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(kt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new kt();
            return kt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(kt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(kt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTags_Response";
          }
        };
        P(fs, "sm_m"), P(fs, "sm_mbf");
        let hs = fs;
        class me extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new me();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new me();
            return me.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetEnoughDiskSpace_Request";
          }
        }
        const Te = class Ft extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ft.prototype.enough_space || r.Sg(Ft.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    enough_space: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = r.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(e = !1) {
            return Ft.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ft.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ft.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Ft();
            return Ft.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ft.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ft.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetEnoughDiskSpace_Response";
          }
        };
        P(Te, "sm_m"), P(Te, "sm_mbf");
        let Ur = Te;
        class ii extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ii.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new ii();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ii();
            return ii.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAvailableDiskSpace_Request";
          }
        }
        const Oi = class Wt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Wt.prototype.size || r.Sg(Wt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    size: { n: 1, br: r.qM.readDouble, bw: r.gp.writeDouble },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = r.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(e = !1) {
            return Wt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Wt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Wt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Wt();
            return Wt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Wt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Wt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAvailableDiskSpace_Response";
          }
        };
        P(Oi, "sm_m"), P(Oi, "sm_mbf");
        let zi = Oi;
        const Oe = class qt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qt.prototype.notification_type || r.Sg(qt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    timeline_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    game_id: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    start_time: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    duration_ms: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = r.w0(qt.M())), qt.sm_mbf;
          }
          toObject(e = !1) {
            return qt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(qt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(qt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new qt();
            return qt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(qt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(qt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineChanged_Notification";
          }
        };
        P(Oe, "sm_m"), P(Oe, "sm_mbf");
        let Se = Oe;
        const xi = class Nt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Nt.prototype.notification_type || r.Sg(Nt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    timeline_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    game_id: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    session_id: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    start_offset: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 7,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    recording_type: {
                      n: 8,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = r.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Nt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Nt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Nt();
            return Nt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Nt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Nt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_RecordingSessionChanged_Notification";
          }
        };
        P(xi, "sm_m"), P(xi, "sm_mbf");
        let oi = xi;
        const ra = class Ut extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ut.prototype.timeline_id || r.Sg(Ut.M()),
              p.Message.initialize(this, e, 0, -1, [17, 19], null);
          }
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    entry_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    time: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    type: { n: 4, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    game_mode: {
                      n: 5,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    range_title: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    range_duration: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    range_possible_clip: {
                      n: 9,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    timestamp_title: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    marker_icon: {
                      n: 11,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    marker_description: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    marker_priority: {
                      n: 14,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    screenshot_handle: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievement_name: {
                      n: 16,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    tag: { n: 17, c: I, r: !0, q: !0 },
                    phase_id: {
                      n: 18,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    attributes: { n: 19, c: N, r: !0, q: !0 },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = r.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(e = !1) {
            return Ut.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ut.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ut.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Ut();
            return Ut.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ut.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ut.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTimelineEntry";
          }
        };
        P(ra, "sm_m"), P(ra, "sm_mbf");
        let an = ra;
        const ia = class At extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              At.prototype.entry || r.Sg(At.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    entry: { n: 1, c: an },
                    game_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = r.w0(At.M())), At.sm_mbf;
          }
          toObject(e = !1) {
            return At.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(At.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(At.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new At();
            return At.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(At.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(At.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineEntryChanged_Notification";
          }
        };
        P(ia, "sm_m"), P(ia, "sm_mbf");
        let na = ia;
        const Me = class Lt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Lt.prototype.game_id || r.Sg(Lt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    timeline_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    entry_id: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = r.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(e = !1) {
            return Lt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Lt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Lt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Lt();
            return Lt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Lt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Lt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineEntryRemoved_Notification";
          }
        };
        P(Me, "sm_m"), P(Me, "sm_mbf");
        let De = Me;
        class Zr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Zr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Zr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Zr();
            return Zr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_LowDiskSpace_Notification";
          }
        }
        const he = class Ht extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ht.prototype.game_id || r.Sg(Ht.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = r.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(e = !1) {
            return Ht.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ht.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ht.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Ht();
            return Ht.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ht.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ht.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PostGameHighlightsChanged_Notification";
          }
        };
        P(he, "sm_m"), P(he, "sm_mbf");
        let aa = he;
        const sn = class Vt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Vt.prototype.game_id || r.Sg(Vt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    phase_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = r.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Vt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Vt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Vt();
            return Vt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Vt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Vt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_OpenOverlayToGamePhase_Notification";
          }
        };
        P(sn, "sm_m"), P(sn, "sm_mbf");
        let vn = sn;
        const Rn = class Xt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xt.prototype.game_id || r.Sg(Xt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    entry_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = r.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(e = !1) {
            return Xt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Xt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Xt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Xt();
            return Xt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Xt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Xt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_OpenOverlayToTimelineEvent_Notification";
          }
        };
        P(Rn, "sm_m"), P(Rn, "sm_mbf");
        let Bn = Rn;
        class li extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return li.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new li();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new li();
            return li.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return li.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PhaseListChanged_Notification";
          }
        }
        const sa = class Zt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Zt.prototype.clip_id || r.Sg(Zt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    game_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    start_timeline_id: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    start_offset_ms: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    published_file_id: {
                      n: 7,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    file_size: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    name: { n: 9, br: r.qM.readString, bw: r.gp.writeString },
                    date_clipped: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    temporary: { n: 11, br: r.qM.readBool, bw: r.gp.writeBool },
                    original_device: {
                      n: 12,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    original_gaming_device_type: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    date_downloaded: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    thumbnail_url: {
                      n: 15,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    thumbnail_width: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 17,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = r.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(e = !1) {
            return Zt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Zt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Zt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Zt();
            return Zt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Zt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Zt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipSummary";
          }
        };
        P(sa, "sm_m"), P(sa, "sm_mbf");
        let Zi = sa;
        const oa = class Kt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Kt.prototype.game_id || r.Sg(Kt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    start: { n: 2, c: Ki },
                    end: { n: 3, c: Ki },
                    name: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    src_clip_id: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    temporary: { n: 6, br: r.qM.readBool, bw: r.gp.writeBool },
                    force_thumbnail: {
                      n: 7,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = r.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(e = !1) {
            return Kt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Kt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Kt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Kt();
            return Kt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Kt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Kt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Request";
          }
        };
        P(oa, "sm_m"), P(oa, "sm_mbf");
        let Cn = oa;
        const ps = class Qt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qt.prototype.timeline_id || r.Sg(Qt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    timeline_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    offset_ms: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = r.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(e = !1) {
            return Qt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Qt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Qt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Qt();
            return Qt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Qt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Qt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Request_Position";
          }
        };
        P(ps, "sm_m"), P(ps, "sm_mbf");
        let Ki = ps;
        const Gn = class Jt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Jt.prototype.summary || r.Sg(Jt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = { proto: Jt, fields: { summary: { n: 1, c: Zi } } }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = r.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(e = !1) {
            return Jt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Jt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Jt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Jt();
            return Jt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Jt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Jt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Response";
          }
        };
        P(Gn, "sm_m"), P(Gn, "sm_mbf");
        let wn = Gn;
        const la = class Yt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Yt.prototype.clip_id || r.Sg(Yt.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = r.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(e = !1) {
            return Yt.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Yt.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Yt.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Yt();
            return Yt.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Yt.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Yt.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteClip_Request";
          }
        };
        P(la, "sm_m"), P(la, "sm_mbf");
        let ma = la;
        class ge extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new ge();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ge();
            return ge.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteClip_Response";
          }
        }
        const Ce = class $t extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $t.prototype.bitrate_kbps || r.Sg($t.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    bitrate_kbps: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    width: { n: 2, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    height: { n: 3, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    frames_per_second: {
                      n: 4,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    codec: { n: 5, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = r.w0($t.M())), $t.sm_mbf;
          }
          toObject(e = !1) {
            return $t.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT($t.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq($t.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new $t();
            return $t.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj($t.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0($t.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Settings";
          }
        };
        P(Ce, "sm_m"), P(Ce, "sm_mbf");
        let Qi = Ce;
        const ca = class er extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              er.prototype.clip_id || r.Sg(er.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    export_mp4_path: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    settings: { n: 3, c: Qi },
                    use_unique_filename: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = r.w0(er.M())), er.sm_mbf;
          }
          toObject(e = !1) {
            return er.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(er.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(er.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new er();
            return er.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(er.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(er.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Request";
          }
        };
        P(ca, "sm_m"), P(ca, "sm_mbf");
        let _n = ca;
        const ua = class tr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tr.prototype.result || r.Sg(tr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    result: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = r.w0(tr.M())), tr.sm_mbf;
          }
          toObject(e = !1) {
            return tr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(tr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(tr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new tr();
            return tr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(tr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(tr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Response";
          }
        };
        P(ua, "sm_m"), P(ua, "sm_mbf");
        let da = ua;
        const on = class rr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rr.prototype.clip_id || r.Sg(rr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    settings: { n: 2, c: Qi },
                    run_policy_checks: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = r.w0(rr.M())), rr.sm_mbf;
          }
          toObject(e = !1) {
            return rr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(rr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(rr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new rr();
            return rr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(rr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(rr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClipPreview_Request";
          }
        };
        P(on, "sm_m"), P(on, "sm_mbf");
        let Ie = on;
        const ln = class ir extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ir.prototype.estimated_size || r.Sg(ir.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    estimated_size: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    settings: { n: 2, c: Qi },
                    result: { n: 3, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = r.w0(ir.M())), ir.sm_mbf;
          }
          toObject(e = !1) {
            return ir.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ir.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ir.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ir();
            return ir.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ir.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ir.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClipPreview_Response";
          }
        };
        P(ln, "sm_m"), P(ln, "sm_mbf");
        let ga = ln;
        const ce = class nr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nr.prototype.game_id || r.Sg(nr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    timeline_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    timeline_offset_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    source_clip_id: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = r.w0(nr.M())), nr.sm_mbf;
          }
          toObject(e = !1) {
            return nr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(nr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(nr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new nr();
            return nr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(nr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(nr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TakeScreenshot_Request";
          }
        };
        P(ce, "sm_m"), P(ce, "sm_mbf");
        let Ss = ce;
        const fa = class ar extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ar.prototype.screenshot_id || r.Sg(ar.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    screenshot_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = r.w0(ar.M())), ar.sm_mbf;
          }
          toObject(e = !1) {
            return ar.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ar.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ar.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ar();
            return ar.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ar.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ar.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TakeScreenshot_Response";
          }
        };
        P(fa, "sm_m"), P(fa, "sm_mbf");
        let Z = fa;
        const ha = class sr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              sr.prototype.clip_id || r.Sg(sr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    desc: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    visibility: {
                      n: 4,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = r.w0(sr.M())), sr.sm_mbf;
          }
          toObject(e = !1) {
            return sr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(sr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(sr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new sr();
            return sr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(sr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(sr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadClipToSteam_Request";
          }
        };
        P(ha, "sm_m"), P(ha, "sm_mbf");
        let Ee = ha;
        const re = class or extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              or.prototype.summary || r.Sg(or.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = { proto: or, fields: { summary: { n: 1, c: Zi } } }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = r.w0(or.M())), or.sm_mbf;
          }
          toObject(e = !1) {
            return or.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(or.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(or.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new or();
            return or.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(or.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(or.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadClipToSteam_Response";
          }
        };
        P(re, "sm_m"), P(re, "sm_mbf");
        let Pn = re;
        const pa = class lr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lr.prototype.clip_id || r.Sg(lr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = r.w0(lr.M())), lr.sm_mbf;
          }
          toObject(e = !1) {
            return lr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(lr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(lr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new lr();
            return lr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(lr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(lr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ZipClip_Request";
          }
        };
        P(pa, "sm_m"), P(pa, "sm_mbf");
        let Sa = pa;
        const In = class mr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mr.prototype.zip_path || r.Sg(mr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    zip_path: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = r.w0(mr.M())), mr.sm_mbf;
          }
          toObject(e = !1) {
            return mr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(mr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(mr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new mr();
            return mr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(mr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(mr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ZipClip_Response";
          }
        };
        P(In, "sm_m"), P(In, "sm_mbf");
        let Ma = In;
        const ba = class cr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              cr.prototype.game_id || r.Sg(cr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    created_after: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    include_temporary: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = r.w0(cr.M())), cr.sm_mbf;
          }
          toObject(e = !1) {
            return cr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(cr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(cr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new cr();
            return cr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(cr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(cr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetClips_Request";
          }
        };
        P(ba, "sm_m"), P(ba, "sm_mbf");
        let ya = ba;
        const Vr = class ur extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ur.prototype.clip || r.Sg(ur.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: { clip: { n: 1, c: Zi, r: !0, q: !0 } },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = r.w0(ur.M())), ur.sm_mbf;
          }
          toObject(e = !1) {
            return ur.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ur.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ur.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ur();
            return ur.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ur.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ur.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetClips_Response";
          }
        };
        P(Vr, "sm_m"), P(Vr, "sm_mbf");
        let Ta = Vr;
        const va = class dr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dr.prototype.game_id || r.Sg(dr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    created_after: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = r.w0(dr.M())), dr.sm_mbf;
          }
          toObject(e = !1) {
            return dr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(dr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(dr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new dr();
            return dr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(dr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(dr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAndTrimPostGameHighlights_Request";
          }
        };
        P(va, "sm_m"), P(va, "sm_mbf");
        let mn = va;
        const cn = class gr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gr.prototype.events || r.Sg(gr.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: { events: { n: 1, c: Ni, r: !0, q: !0 } },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = r.w0(gr.M())), gr.sm_mbf;
          }
          toObject(e = !1) {
            return gr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(gr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(gr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new gr();
            return gr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(gr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(gr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAndTrimPostGameHighlights_Response";
          }
        };
        P(cn, "sm_m"), P(cn, "sm_mbf");
        let Ra = cn;
        const Ba = class fr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fr.prototype.game_id || r.Sg(fr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    entry: { n: 2, c: an },
                    clip_id: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = r.w0(fr.M())), fr.sm_mbf;
          }
          toObject(e = !1) {
            return fr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(fr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(fr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new fr();
            return fr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(fr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(fr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserAddTimelineEntry_Request";
          }
        };
        P(Ba, "sm_m"), P(Ba, "sm_mbf");
        let Ca = Ba;
        const Ms = class hr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              hr.prototype.entry_id || r.Sg(hr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    entry_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = r.w0(hr.M())), hr.sm_mbf;
          }
          toObject(e = !1) {
            return hr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(hr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(hr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new hr();
            return hr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(hr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(hr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserAddTimelineEntry_Response";
          }
        };
        P(Ms, "sm_m"), P(Ms, "sm_mbf");
        let Ga = Ms;
        const Gi = class pr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pr.prototype.game_id || r.Sg(pr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    entry: { n: 2, c: an },
                    clip_id: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = r.w0(pr.M())), pr.sm_mbf;
          }
          toObject(e = !1) {
            return pr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(pr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(pr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new pr();
            return pr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(pr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(pr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserUpdateTimelineEntry_Request";
          }
        };
        P(Gi, "sm_m"), P(Gi, "sm_mbf");
        let ti = Gi;
        class Kr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Kr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Kr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Kr();
            return Kr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserUpdateTimelineEntry_Response";
          }
        }
        const We = class Sr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Sr.prototype.game_id || r.Sg(Sr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    timeline_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    entry_id: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    clip_id: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = r.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(e = !1) {
            return Sr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Sr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Sr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Sr();
            return Sr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Sr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Sr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserRemoveTimelineEntry_Request";
          }
        };
        P(We, "sm_m"), P(We, "sm_mbf");
        let bs = We;
        class ri extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ri.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new ri();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ri();
            return ri.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserRemoveTimelineEntry_Response";
          }
        }
        const ys = class Mr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mr.prototype.game_ids || r.Sg(Mr.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    game_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = r.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(e = !1) {
            return Mr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Mr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Mr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Mr();
            return Mr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Mr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Mr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Request";
          }
        };
        P(ys, "sm_m"), P(ys, "sm_mbf");
        let Ts = ys;
        class Qr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Qr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Qr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Qr();
            return Qr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Response";
          }
        }
        const Ji = class br extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              br.prototype.folder_path || r.Sg(br.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    folder_path: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = r.w0(br.M())), br.sm_mbf;
          }
          toObject(e = !1) {
            return br.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(br.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(br.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new br();
            return br.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(br.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(br.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTotalDiskSpaceUsage_Request";
          }
        };
        P(Ji, "sm_m"), P(Ji, "sm_mbf");
        let On = Ji;
        const zn = class yr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yr.prototype.size || r.Sg(yr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    size: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = r.w0(yr.M())), yr.sm_mbf;
          }
          toObject(e = !1) {
            return yr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(yr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(yr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new yr();
            return yr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(yr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(yr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTotalDiskSpaceUsage_Response";
          }
        };
        P(zn, "sm_m"), P(zn, "sm_mbf");
        let xn = zn;
        const Yi = class Tr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Tr.prototype.recording_id || r.Sg(Tr.M()),
              p.Message.initialize(this, e, 0, -1, [4], null);
          }
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    clip_id: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    timeline_id: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    start_offset_us: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: r.qM.readInt64String,
                      pbr: r.qM.readPackedInt64String,
                      bw: r.gp.writeRepeatedInt64String,
                    },
                    major_axis: {
                      n: 5,
                      d: 512,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    time_precision: {
                      n: 6,
                      d: $a,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    format: {
                      n: 8,
                      d: ro,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = r.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(e = !1) {
            return Tr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Tr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Tr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Tr();
            return Tr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Tr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Tr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Request";
          }
        };
        P(Yi, "sm_m"), P(Yi, "sm_mbf");
        let Ei = Yi;
        const En = class vr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vr.prototype.thumbnails || r.Sg(vr.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: { thumbnails: { n: 1, c: hl, r: !0, q: !0 } },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = r.w0(vr.M())), vr.sm_mbf;
          }
          toObject(e = !1) {
            return vr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(vr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(vr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new vr();
            return vr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(vr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(vr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Response";
          }
        };
        P(En, "sm_m"), P(En, "sm_mbf");
        let wa = En;
        const vs = class Rr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Rr.prototype.image_data || r.Sg(Rr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    image_data: {
                      n: 1,
                      br: r.qM.readBytes,
                      bw: r.gp.writeBytes,
                    },
                    width: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    height: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = r.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(e = !1) {
            return Rr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Rr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Rr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Rr();
            return Rr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Rr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Rr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Response_Thumbnail";
          }
        };
        P(vs, "sm_m"), P(vs, "sm_mbf");
        let hl = vs;
        const Rs = class Br extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Br.prototype.game_id || r.Sg(Br.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = r.w0(Br.M())), Br.sm_mbf;
          }
          toObject(e = !1) {
            return Br.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Br.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Br.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Br();
            return Br.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Br.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Br.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StartRecording_Request";
          }
        };
        P(Rs, "sm_m"), P(Rs, "sm_mbf");
        let Bs = Rs;
        class ni extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ni.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new ni();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ni();
            return ni.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StartRecording_Response";
          }
        }
        const jn = class Cr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Cr.prototype.game_id || r.Sg(Cr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = r.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(e = !1) {
            return Cr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Cr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Cr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Cr();
            return Cr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Cr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Cr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StopRecording_Request";
          }
        };
        P(jn, "sm_m"), P(jn, "sm_mbf");
        let Cs = jn;
        const _a = class Gr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Gr.prototype.summary || r.Sg(Gr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = { proto: Gr, fields: { summary: { n: 1, c: Zi } } }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = r.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(e = !1) {
            return Gr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Gr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Gr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Gr();
            return Gr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Gr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Gr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StopRecording_Response";
          }
        };
        P(_a, "sm_m"), P(_a, "sm_mbf");
        let Pa = _a;
        const Le = class wr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wr.prototype.game_id || r.Sg(wr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = r.w0(wr.M())), wr.sm_mbf;
          }
          toObject(e = !1) {
            return wr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(wr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(wr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new wr();
            return wr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(wr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(wr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetRecordingSize_Request";
          }
        };
        P(Le, "sm_m"), P(Le, "sm_mbf");
        let un = Le;
        const Dn = class _r extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _r.prototype.file_size || r.Sg(_r.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    file_size: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = r.w0(_r.M())), _r.sm_mbf;
          }
          toObject(e = !1) {
            return _r.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(_r.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(_r.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new _r();
            return _r.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(_r.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(_r.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetRecordingSize_Response";
          }
        };
        P(Dn, "sm_m"), P(Dn, "sm_mbf");
        let Ia = Dn;
        class mi extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return mi.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new mi();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new mi();
            return mi.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CleanupBackgroundRecordings_Request";
          }
        }
        class ve extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new ve();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ve();
            return ve.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CleanupBackgroundRecordings_Response";
          }
        }
        class pe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new pe();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new pe();
            return pe.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPlatformCapabilities_Request";
          }
        }
        const Oa = class Pr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pr.prototype.per_process_audio_capture || r.Sg(Pr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    per_process_audio_capture: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = r.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(e = !1) {
            return Pr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Pr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Pr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Pr();
            return Pr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Pr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Pr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPlatformCapabilities_Response";
          }
        };
        P(Oa, "sm_m"), P(Oa, "sm_mbf");
        let kn = Oa;
        const za = class Ir extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ir.prototype.summary || r.Sg(Ir.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = { proto: Ir, fields: { summary: { n: 1, c: Zi } } }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = r.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(e = !1) {
            return Ir.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ir.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ir.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Ir();
            return Ir.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ir.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ir.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipCreated_Notification";
          }
        };
        P(za, "sm_m"), P(za, "sm_mbf");
        let xa = za;
        const ji = class Or extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Or.prototype.clip_id || r.Sg(Or.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    game_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = r.w0(Or.M())), Or.sm_mbf;
          }
          toObject(e = !1) {
            return Or.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Or.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Or.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Or();
            return Or.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Or.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Or.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipDeleted_Notification";
          }
        };
        P(ji, "sm_m"), P(ji, "sm_mbf");
        let ke = ji;
        const Ea = class zr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              zr.prototype.progress || r.Sg(zr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    progress: { n: 1, br: r.qM.readFloat, bw: r.gp.writeFloat },
                    clip_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = r.w0(zr.M())), zr.sm_mbf;
          }
          toObject(e = !1) {
            return zr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(zr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(zr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new zr();
            return zr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(zr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(zr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportProgress_Notification";
          }
        };
        P(Ea, "sm_m"), P(Ea, "sm_mbf");
        let xe = Ea;
        const Fn = class xr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xr.prototype.gameid || r.Sg(xr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    enabled: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                    minutes: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    bitrate: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    infinite: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = r.w0(xr.M())), xr.sm_mbf;
          }
          toObject(e = !1) {
            return xr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(xr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(xr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new xr();
            return xr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(xr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(xr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PerGameSettings";
          }
        };
        P(Fn, "sm_m"), P(Fn, "sm_mbf");
        let Gs = Fn;
        class ci extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ci.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new ci();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ci();
            return ci.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPerGameSettings_Request";
          }
        }
        const ja = class Er extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Er.prototype.settings || r.Sg(Er.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: { settings: { n: 1, c: Gs, r: !0, q: !0 } },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = r.w0(Er.M())), Er.sm_mbf;
          }
          toObject(e = !1) {
            return Er.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Er.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Er.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Er();
            return Er.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Er.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Er.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPerGameSettings_Response";
          }
        };
        P(ja, "sm_m"), P(ja, "sm_mbf");
        let ie = ja;
        const A = class jr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jr.prototype.game_settings || r.Sg(jr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: { game_settings: { n: 1, c: Gs } },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = r.w0(jr.M())), jr.sm_mbf;
          }
          toObject(e = !1) {
            return jr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(jr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(jr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new jr();
            return jr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(jr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(jr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SetPerGameSettings_Request";
          }
        };
        P(A, "sm_m"), P(A, "sm_mbf");
        let Ge = A;
        class ai extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ai.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new ai();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new ai();
            return ai.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SetPerGameSettings_Response";
          }
        }
        const ws = class Dr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dr.prototype.gameid || r.Sg(Dr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = r.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(e = !1) {
            return Dr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Dr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Dr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Dr();
            return Dr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Dr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Dr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeletePerGameSettings_Request";
          }
        };
        P(ws, "sm_m"), P(ws, "sm_mbf");
        let gi = ws;
        class fi extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return fi.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new fi();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new fi();
            return fi.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeletePerGameSettings_Response";
          }
        }
        const wi = class kr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              kr.prototype.progress || r.Sg(kr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    progress: { n: 1, br: r.qM.readFloat, bw: r.gp.writeFloat },
                    clip_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    eresult: { n: 3, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = r.w0(kr.M())), kr.sm_mbf;
          }
          toObject(e = !1) {
            return kr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(kr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(kr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new kr();
            return kr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(kr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(kr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadProgress_Notification";
          }
        };
        P(wi, "sm_m"), P(wi, "sm_mbf");
        let Wn = wi;
        const Da = class Fr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fr.prototype.game_id || r.Sg(Fr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = r.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(e = !1) {
            return Fr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Fr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Fr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Fr();
            return Fr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Fr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Fr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SwitchBackgroundRecordingGame_Request";
          }
        };
        P(Da, "sm_m"), P(Da, "sm_mbf");
        let ka = Da;
        class Jr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Jr.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new Jr();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Jr();
            return Jr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SwitchBackgroundRecordingGame_Response";
          }
        }
        class qe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new qe();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new qe();
            return qe.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetState_Request";
          }
        }
        const Fa = class Wr extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Wr.prototype.is_h265_enabled || r.Sg(Wr.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    is_h265_enabled: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = r.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(e = !1) {
            return Wr.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Wr.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Wr.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new Wr();
            return Wr.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Wr.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Wr.M(), e, a);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetState_Response";
          }
        };
        P(Fa, "sm_m"), P(Fa, "sm_mbf");
        let _s = Fa;
        class hi extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return hi.toObject(e, this);
          }
          static toObject(e, a) {
            return e ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(e) {
            return new hi();
          }
          static deserializeBinary(e) {
            let a = new (d().BinaryReader)(e),
              v = new hi();
            return hi.deserializeBinaryFromReader(v, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return hi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              hi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StateChanged_Notification";
          }
        }
        var dn;
        ((B) => {
          B.GetAppsWithBackgroundVideoHandler = {
            name: "GameRecording.GetAppsWithBackgroundVideo#1",
            request: di,
            response: yn,
          };
          function e(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, E.I8)(di, T),
                    yn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetAppsWithBackgroundVideo = e;
          function a(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, E.I8)(di, T),
                    yn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetAppsWithBackgroundVideo = a),
            (B.GetTimelinesForAppHandler = {
              name: "GameRecording.GetTimelinesForApp#1",
              request: is,
              response: ns,
            });
          function v(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForApp#1",
                    (0, E.I8)(is, T),
                    ns,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetTimelinesForApp = v;
          function Wa(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForApp#1",
                    (0, E.I8)(is, T),
                    ns,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetTimelinesForApp = Wa),
            (B.GetTimelinesForClipHandler = {
              name: "GameRecording.GetTimelinesForClip#1",
              request: ss,
              response: ls,
            });
          function oo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForClip#1",
                    (0, E.I8)(ss, T),
                    ls,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetTimelinesForClip = oo;
          function pl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTimelinesForClip#1",
                    (0, E.I8)(ss, T),
                    ls,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetTimelinesForClip = pl),
            (B.QueryPhasesHandler = {
              name: "GameRecording.QueryPhases#1",
              request: rn,
              response: us,
            });
          function lo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.QueryPhases#1",
                    (0, E.I8)(rn, T),
                    us,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.QueryPhases = lo;
          function Sl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.QueryPhases#1",
                    (0, E.I8)(rn, T),
                    us,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgQueryPhases = Sl),
            (B.GetTagsHandler = {
              name: "GameRecording.GetTags#1",
              request: Xi,
              response: hs,
            });
          function Ps(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetTags#1", (0, E.I8)(Xi, T), hs, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          B.GetTags = Ps;
          function Ml(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetTags#1", (0, E.I8)(Xi, T), hs, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (B.SendMsgGetTags = Ml),
            (B.GetEnoughDiskSpaceHandler = {
              name: "GameRecording.GetEnoughDiskSpace#1",
              request: me,
              response: Ur,
            });
          function mo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, E.I8)(me, T),
                    Ur,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetEnoughDiskSpace = mo;
          function bl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, E.I8)(me, T),
                    Ur,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetEnoughDiskSpace = bl),
            (B.GetAvailableDiskSpaceHandler = {
              name: "GameRecording.GetAvailableDiskSpace#1",
              request: ii,
              response: zi,
            });
          function Is(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, E.I8)(ii, T),
                    zi,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetAvailableDiskSpace = Is;
          function yl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, E.I8)(ii, T),
                    zi,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetAvailableDiskSpace = yl),
            (B.SaveClipHandler = {
              name: "GameRecording.SaveClip#1",
              request: Cn,
              response: wn,
            });
          function co(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.SaveClip#1", (0, E.I8)(Cn, T), wn, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          B.SaveClip = co;
          function pi(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.SaveClip#1", (0, E.I8)(Cn, T), wn, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (B.SendMsgSaveClip = pi),
            (B.DeleteClipHandler = {
              name: "GameRecording.DeleteClip#1",
              request: ma,
              response: ge,
            });
          function uo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeleteClip#1",
                    (0, E.I8)(ma, T),
                    ge,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.DeleteClip = uo;
          function Os(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeleteClip#1",
                    (0, E.I8)(ma, T),
                    ge,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgDeleteClip = Os),
            (B.GetClipsHandler = {
              name: "GameRecording.GetClips#1",
              request: ya,
              response: Ta,
            });
          function go(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetClips#1", (0, E.I8)(ya, T), Ta, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          B.GetClips = go;
          function Di(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetClips#1", (0, E.I8)(ya, T), Ta, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (B.SendMsgGetClips = Di),
            (B.UploadClipToSteamHandler = {
              name: "GameRecording.UploadClipToSteam#1",
              request: Ee,
              response: Pn,
            });
          function qn(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UploadClipToSteam#1",
                    (0, E.I8)(Ee, T),
                    Pn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.UploadClipToSteam = qn;
          function qa(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UploadClipToSteam#1",
                    (0, E.I8)(Ee, T),
                    Pn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgUploadClipToSteam = qa),
            (B.ExportClipHandler = {
              name: "GameRecording.ExportClip#1",
              request: _n,
              response: da,
            });
          function zs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClip#1",
                    (0, E.I8)(_n, T),
                    da,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.ExportClip = zs;
          function Na(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClip#1",
                    (0, E.I8)(_n, T),
                    da,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgExportClip = Na),
            (B.ExportClipPreviewHandler = {
              name: "GameRecording.ExportClipPreview#1",
              request: Ie,
              response: ga,
            });
          function xs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClipPreview#1",
                    (0, E.I8)(Ie, T),
                    ga,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.ExportClipPreview = xs;
          function Ua(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ExportClipPreview#1",
                    (0, E.I8)(Ie, T),
                    ga,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgExportClipPreview = Ua),
            (B.TakeScreenshotHandler = {
              name: "GameRecording.TakeScreenshot#1",
              request: Ss,
              response: Z,
            });
          function Es(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.TakeScreenshot#1",
                    (0, E.I8)(Ss, T),
                    Z,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.TakeScreenshot = Es;
          function fo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.TakeScreenshot#1",
                    (0, E.I8)(Ss, T),
                    Z,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgTakeScreenshot = fo),
            (B.ZipClipHandler = {
              name: "GameRecording.ZipClip#1",
              request: Sa,
              response: Ma,
            });
          function ho(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.ZipClip#1", (0, E.I8)(Sa, T), Ma, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          B.ZipClip = ho;
          function po(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.ZipClip#1", (0, E.I8)(Sa, T), Ma, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (B.SendMsgZipClip = po),
            (B.StartRecordingHandler = {
              name: "GameRecording.StartRecording#1",
              request: Bs,
              response: ni,
            });
          function js(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StartRecording#1",
                    (0, E.I8)(Bs, T),
                    ni,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.StartRecording = js;
          function be(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StartRecording#1",
                    (0, E.I8)(Bs, T),
                    ni,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgStartRecording = be),
            (B.StopRecordingHandler = {
              name: "GameRecording.StopRecording#1",
              request: Cs,
              response: Pa,
            });
          function So(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StopRecording#1",
                    (0, E.I8)(Cs, T),
                    Pa,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.StopRecording = So;
          function Mo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.StopRecording#1",
                    (0, E.I8)(Cs, T),
                    Pa,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgStopRecording = Mo),
            (B.GetBackgroundRecordingFileSizeHandler = {
              name: "GameRecording.GetBackgroundRecordingFileSize#1",
              request: un,
              response: Ia,
            });
          function bo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, E.I8)(un, T),
                    Ia,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetBackgroundRecordingFileSize = bo;
          function Ds(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, E.I8)(un, T),
                    Ia,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetBackgroundRecordingFileSize = Ds),
            (B.CleanupBackgroundRecordingsHandler = {
              name: "GameRecording.CleanupBackgroundRecordings#1",
              request: mi,
              response: ve,
            });
          function Nn(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, E.I8)(mi, T),
                    ve,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.CleanupBackgroundRecordings = Nn;
          function ki(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, E.I8)(mi, T),
                    ve,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgCleanupBackgroundRecordings = ki),
            (B.GetAndTrimPostGameHighlightsHandler = {
              name: "GameRecording.GetAndTrimPostGameHighlights#1",
              request: mn,
              response: Ra,
            });
          function Aa(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, E.I8)(mn, T),
                    Ra,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetAndTrimPostGameHighlights = Aa;
          function Tl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, E.I8)(mn, T),
                    Ra,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetAndTrimPostGameHighlights = Tl),
            (B.GetThumbnailsHandler = {
              name: "GameRecording.GetThumbnails#1",
              request: Ei,
              response: wa,
            });
          function vl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetThumbnails#1",
                    (0, E.I8)(Ei, T),
                    wa,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetThumbnails = vl;
          function ks(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetThumbnails#1",
                    (0, E.I8)(Ei, T),
                    wa,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetThumbnails = ks),
            (B.GetPlatformCapabilitiesHandler = {
              name: "GameRecording.GetPlatformCapabilities#1",
              request: pe,
              response: kn,
            });
          function yo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, E.I8)(pe, T),
                    kn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetPlatformCapabilities = yo;
          function Fs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, E.I8)(pe, T),
                    kn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetPlatformCapabilities = Fs),
            (B.NotifyTimelineChangedHandler = {
              name: "GameRecording.NotifyTimelineChanged#1",
              request: Se,
            });
          function Ws(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyTimelineChangedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyTimelineChanged = Ws;
          function Rl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, E.I8)(Se, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyTimelineChanged = Rl;
          function La(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, E.I8)(Se, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyTimelineChanged = La),
            (B.NotifyRecordingSessionChangedHandler = {
              name: "GameRecording.NotifyRecordingSessionChanged#1",
              request: oi,
            });
          function To(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyRecordingSessionChangedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyRecordingSessionChanged = To;
          function vo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, E.I8)(oi, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyRecordingSessionChanged = vo;
          function qs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, E.I8)(oi, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyRecordingSessionChanged = qs),
            (B.NotifyTimelineEntryChangedHandler = {
              name: "GameRecording.NotifyTimelineEntryChanged#1",
              request: na,
            });
          function Ns(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyTimelineEntryChangedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyTimelineEntryChanged = Ns;
          function _i(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, E.I8)(na, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyTimelineEntryChanged = _i;
          function Ro(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, E.I8)(na, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyTimelineEntryChanged = Ro),
            (B.NotifyTimelineEntryRemovedHandler = {
              name: "GameRecording.NotifyTimelineEntryRemoved#1",
              request: De,
            });
          function Ha(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyTimelineEntryRemovedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyTimelineEntryRemoved = Ha;
          function Bo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, E.I8)(De, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyTimelineEntryRemoved = Bo;
          function Co(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, E.I8)(De, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyTimelineEntryRemoved = Co),
            (B.NotifyClipCreatedHandler = {
              name: "GameRecording.NotifyClipCreated#1",
              request: xa,
            });
          function Go(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyClipCreatedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyClipCreated = Go;
          function wo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, E.I8)(xa, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyClipCreated = wo;
          function _o(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, E.I8)(xa, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyClipCreated = _o),
            (B.NotifyClipDeletedHandler = {
              name: "GameRecording.NotifyClipDeleted#1",
              request: ke,
            });
          function Us(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyClipDeletedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyClipDeleted = Us;
          function Va(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, E.I8)(ke, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyClipDeleted = Va;
          function Po(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, E.I8)(ke, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyClipDeleted = Po),
            (B.NotifyExportProgressHandler = {
              name: "GameRecording.NotifyExportProgress#1",
              request: xe,
            });
          function Pi(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyExportProgressHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyExportProgress = Pi;
          function Io(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, E.I8)(xe, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyExportProgress = Io;
          function Oo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, E.I8)(xe, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyExportProgress = Oo),
            (B.NotifyUploadProgressHandler = {
              name: "GameRecording.NotifyUploadProgress#1",
              request: Wn,
            });
          function zo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyUploadProgressHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyUploadProgress = zo;
          function xo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, E.I8)(Wn, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyUploadProgress = xo;
          function Un(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, E.I8)(Wn, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyUploadProgress = Un),
            (B.NotifyLowDiskSpaceHandler = {
              name: "GameRecording.NotifyLowDiskSpace#1",
              request: Zr,
            });
          function An(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyLowDiskSpaceHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyLowDiskSpace = An;
          function si(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, E.I8)(Zr, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyLowDiskSpace = si;
          function Eo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, E.I8)(Zr, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyLowDiskSpace = Eo),
            (B.NotifyPostGameHighlightsChangedHandler = {
              name: "GameRecording.NotifyPostGameHighlightsChanged#1",
              request: aa,
            });
          function jo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyPostGameHighlightsChangedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyPostGameHighlightsChanged = jo;
          function Xa(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, E.I8)(aa, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyPostGameHighlightsChanged = Xa;
          function Ii(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, E.I8)(aa, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyPostGameHighlightsChanged = Ii),
            (B.NotifyOpenOverlayToGamePhaseHandler = {
              name: "GameRecording.NotifyOpenOverlayToGamePhase#1",
              request: vn,
            });
          function Do(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyOpenOverlayToGamePhaseHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyOpenOverlayToGamePhase = Do;
          function ko(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, E.I8)(vn, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyOpenOverlayToGamePhase = ko;
          function Fo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, E.I8)(vn, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyOpenOverlayToGamePhase = Fo),
            (B.NotifyOpenOverlayToTimelineEventHandler = {
              name: "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
              request: Bn,
            });
          function Wo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyOpenOverlayToTimelineEventHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyOpenOverlayToTimelineEvent = Wo;
          function qo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, E.I8)(Bn, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyOpenOverlayToTimelineEvent = qo;
          function No(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, E.I8)(Bn, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyOpenOverlayToTimelineEvent = No),
            (B.NotifyPhaseListChangedHandler = {
              name: "GameRecording.NotifyPhaseListChanged#1",
              request: li,
            });
          function Uo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyPhaseListChangedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyPhaseListChanged = Uo;
          function Ao(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, E.I8)(li, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyPhaseListChanged = Ao;
          function Lo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, E.I8)(li, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgNotifyPhaseListChanged = Lo),
            (B.GetPerGameSettingsHandler = {
              name: "GameRecording.GetPerGameSettings#1",
              request: ci,
              response: ie,
            });
          function He(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPerGameSettings#1",
                    (0, E.I8)(ci, T),
                    ie,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetPerGameSettings = He;
          function gn(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetPerGameSettings#1",
                    (0, E.I8)(ci, T),
                    ie,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetPerGameSettings = gn),
            (B.SetPerGameSettingsHandler = {
              name: "GameRecording.SetPerGameSettings#1",
              request: Ge,
              response: ai,
            });
          function As(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SetPerGameSettings#1",
                    (0, E.I8)(Ge, T),
                    ai,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.SetPerGameSettings = As;
          function Ho(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SetPerGameSettings#1",
                    (0, E.I8)(Ge, T),
                    ai,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgSetPerGameSettings = Ho),
            (B.DeletePerGameSettingsHandler = {
              name: "GameRecording.DeletePerGameSettings#1",
              request: gi,
              response: fi,
            });
          function Vo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeletePerGameSettings#1",
                    (0, E.I8)(gi, T),
                    fi,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.DeletePerGameSettings = Vo;
          function Xo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.DeletePerGameSettings#1",
                    (0, E.I8)(gi, T),
                    fi,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgDeletePerGameSettings = Xo),
            (B.UserAddTimelineEntryHandler = {
              name: "GameRecording.UserAddTimelineEntry#1",
              request: Ca,
              response: Ga,
            });
          function Zo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, E.I8)(Ca, T),
                    Ga,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.UserAddTimelineEntry = Zo;
          function Ko(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, E.I8)(Ca, T),
                    Ga,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgUserAddTimelineEntry = Ko),
            (B.UserUpdateTimelineEntryHandler = {
              name: "GameRecording.UserUpdateTimelineEntry#1",
              request: ti,
              response: Kr,
            });
          function Fi(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, E.I8)(ti, T),
                    Kr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.UserUpdateTimelineEntry = Fi;
          function Qo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, E.I8)(ti, T),
                    Kr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgUserUpdateTimelineEntry = Qo),
            (B.UserRemoveTimelineEntryHandler = {
              name: "GameRecording.UserRemoveTimelineEntry#1",
              request: bs,
              response: ri,
            });
          function Jo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, E.I8)(bs, T),
                    ri,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.UserRemoveTimelineEntry = Jo;
          function Ls(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, E.I8)(bs, T),
                    ri,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgUserRemoveTimelineEntry = Ls),
            (B.ManuallyDeleteRecordingsForAppsHandler = {
              name: "GameRecording.ManuallyDeleteRecordingsForApps#1",
              request: Ts,
              response: Qr,
            });
          function Yo(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, E.I8)(Ts, T),
                    Qr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.ManuallyDeleteRecordingsForApps = Yo;
          function $o(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, E.I8)(Ts, T),
                    Qr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgManuallyDeleteRecordingsForApps = $o),
            (B.GetTotalDiskSpaceUsageHandler = {
              name: "GameRecording.GetTotalDiskSpaceUsage#1",
              request: On,
              response: xn,
            });
          function Xr(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, E.I8)(On, T),
                    xn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.GetTotalDiskSpaceUsage = Xr;
          function Hs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, E.I8)(On, T),
                    xn,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgGetTotalDiskSpaceUsage = Hs),
            (B.SwitchBackgroundRecordingGameHandler = {
              name: "GameRecording.SwitchBackgroundRecordingGame#1",
              request: ka,
              response: Jr,
            });
          function el(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, E.I8)(ka, T),
                    Jr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.SwitchBackgroundRecordingGame = el;
          function Vs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, E.I8)(ka, T),
                    Jr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (B.SendMsgSwitchBackgroundRecordingGame = Vs),
            (B.GetStateHandler = {
              name: "GameRecording.GetState#1",
              request: qe,
              response: _s,
            });
          function Xs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetState#1", (0, E.I8)(qe, T), _s, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          B.GetState = Xs;
          function Zs(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((K, z) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      z(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg("GameRecording.GetState#1", (0, E.I8)(qe, T), _s, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (B.SendMsgGetState = Zs),
            (B.NotifyStateChangedHandler = {
              name: "GameRecording.NotifyStateChanged#1",
              request: hi,
            });
          function tl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    B.NotifyStateChangedHandler,
                    T,
                  )
            );
          }
          B.RegisterForNotifyStateChanged = tl;
          function rl(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, E.I8)(hi, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.NotifyStateChanged = rl;
          function Ks(T, o) {
            return (
              (o = o || (0, O.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, E.I8)(hi, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          B.SendMsgNotifyStateChanged = Ks;
        })(dn || (dn = {}));
      },
      34843: (Y, qr, _) => {
        "use strict";
        _.d(qr, { VS: () => r });
        var u = _(38506),
          S = _(99412),
          ze = _(67529),
          we = _(71742),
          $ = Object.defineProperty,
          p = (J, Re, ae) =>
            Re in J
              ? $(J, Re, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: ae,
                })
              : (J[Re] = ae),
          d = (J, Re, ae) => p(J, typeof Re != "symbol" ? Re + "" : Re, ae);
        class r {
          constructor(Re, ae, U) {
            if ((d(this, "m_ulGameID"), typeof Re == "string"))
              this.m_ulGameID = u.A.fromString(Re, !0);
            else {
              const Lr = U,
                ee = ((Re & 255) << 24) + (ae & 16777215);
              this.m_ulGameID = u.A.fromBits(ee, Lr, !0);
            }
          }
          GetAppID() {
            return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
          }
          GetType() {
            return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
          }
          GetModID() {
            return this.m_ulGameID.getHighBitsUnsigned();
          }
          ConvertTo64BitString() {
            return this.m_ulGameID.toString();
          }
          BIsSteamApp() {
            return this.GetType() === S.Rhn.k_EGameIDTypeApp;
          }
          BIsShortcut() {
            return this.GetType() === S.Rhn.k_EGameIDTypeShortcut;
          }
          BIsMod() {
            return this.GetType() === S.Rhn.k_EGameIDTypeGameMod;
          }
          GetInternalAppID() {
            return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
          }
          BIsValid() {
            switch (this.GetType()) {
              case S.Rhn.k_EGameIDTypeApp:
                return this.GetAppID() !== ze.sc;
              case S.Rhn.k_EGameIDTypeGameMod:
                return (
                  this.GetAppID() !== ze.sc &&
                  (this.GetModID() & 2147483648) != 0
                );
              case S.Rhn.k_EGameIDTypeShortcut:
                return (this.GetModID() & 2147483648) != 0;
              default:
                return (
                  (0, we.wT)(!1, `Unknown GameID type: ${this.GetType()}`), !1
                );
            }
          }
          static InitFromAppID(Re) {
            return new r(S.Rhn.k_EGameIDTypeApp, Re, 0);
          }
          static InitFromShortcutID(Re) {
            return new r(S.Rhn.k_EGameIDTypeShortcut, 0, Re);
          }
        }
        function E(J) {
          return r.InitFromAppID(J).ConvertTo64BitString();
        }
        function O(J) {
          return r.InitFromShortcutID(J).ConvertTo64BitString();
        }
      },
      95987: (Y, qr, _) => {
        "use strict";
        _.d(qr, { y: () => Lr });
        var u = _(35038),
          S = _(21196),
          ze = _(57589),
          we = _(36174),
          $ = _(27066),
          p = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          r = (ee, ue, _e) =>
            ue in ee
              ? p(ee, ue, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _e,
                })
              : (ee[ue] = _e),
          E = (ee, ue, _e, le) => {
            for (
              var Pe = le > 1 ? void 0 : le ? d(ue, _e) : ue,
                bi = ee.length - 1,
                Ae;
              bi >= 0;
              bi--
            )
              (Ae = ee[bi]) && (Pe = (le ? Ae(ue, _e, Pe) : Ae(Pe)) || Pe);
            return le && Pe && p(ue, _e, Pe), Pe;
          },
          O = (ee, ue, _e) => r(ee, typeof ue != "symbol" ? ue + "" : ue, _e);
        const J = new ze.wd("ReactUsageReporting").Debug,
          Re = 100,
          ae = we.Kp.PerMinute * 1e3;
        class U {
          constructor() {
            O(this, "m_strProduct"),
              O(this, "m_strVersion"),
              O(this, "m_transport", null),
              O(this, "m_mapRoutes", new Map()),
              O(this, "m_mapComponents", new Map()),
              O(this, "m_mapActions", new Map()),
              O(this, "m_reportCount", 0),
              O(this, "m_bInitialized", !1);
          }
          Init(ue, _e, le) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = ue),
              (this.m_strVersion = _e),
              (this.m_transport = le),
              this.ScheduleSend();
          }
          ScheduleSend() {
            setTimeout(() => this.CheckSend(), ae);
          }
          CheckSend() {
            this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
          }
          ReportInternal(ue, _e) {
            _e.has(ue) || _e.set(ue, 0),
              _e.set(ue, _e.get(ue) + 1),
              this.m_reportCount++,
              this.ShouldSendMetricsImmediately() && this.SendMetrics();
          }
          ReportRouteMatch(ue) {
            J("Route match: " + ue), this.ReportInternal(ue, this.m_mapRoutes);
          }
          ReportTrackedComponent(ue) {
            J("Tracked component: " + ue),
              this.ReportInternal(ue, this.m_mapComponents);
          }
          ReportTrackedAction(ue) {
            J("User action: " + ue), this.ReportInternal(ue, this.m_mapActions);
          }
          ShouldSendMetricsImmediately() {
            return this.m_reportCount >= Re;
          }
          SendMetrics() {
            if (!this.m_bInitialized) return;
            const ue = u.w.Init(S.bc);
            ue.Body().set_product(this.m_strProduct),
              ue.Body().set_version(this.m_strVersion),
              this.m_mapRoutes.forEach((_e, le) => {
                let Pe = new S.N4();
                Pe.set_route(le), Pe.set_count(_e), ue.Body().add_routes(Pe);
              }),
              this.m_mapComponents.forEach((_e, le) => {
                let Pe = new S.Zd();
                Pe.set_component(le),
                  Pe.set_count(_e),
                  ue.Body().add_components(Pe);
              }),
              this.m_mapActions.forEach((_e, le) => {
                let Pe = new S.Ys();
                Pe.set_action(le), Pe.set_count(_e), ue.Body().add_actions(Pe);
              }),
              this.m_mapRoutes.clear(),
              this.m_mapComponents.clear(),
              this.m_mapActions.clear(),
              (this.m_reportCount = 0),
              S._5.ReportReactUsage(this.m_transport, ue);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
        }
        E([$.o], U.prototype, "CheckSend", 1);
        const Lr = new U();
      },
      19730: (Y, qr, _) => {
        "use strict";
        _.d(qr, { Dq: () => $, dm: () => we });
        var u = _(84346),
          S = _(39905);
        function ze(d, r) {
          const E = r.bUseBinary1K ? 1024 : 1e3,
            O = E * E,
            J = O * E,
            Re = J * E;
          return d > Re
            ? { nNum: d / Re, strPrefix: "Tera" }
            : d > J
              ? { nNum: d / J, strPrefix: "Giga" }
              : d > O
                ? { nNum: d / O, strPrefix: "Mega" }
                : d > E
                  ? { nNum: d / E, strPrefix: "Kilo" }
                  : { nNum: d, strPrefix: "" };
        }
        function we(d, r, E, O) {
          let J = r;
          typeof J == "number"
            ? (J = {
                nDigitsAfterDecimal: r,
                bUseBinary1K: E || E === void 0,
                bValueIsInBytes: !O,
                bValueIsRate: O,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (J = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...J,
              });
          const { nNum: Re, strPrefix: ae } = ze(d, J),
            U = `#${ae}${J.bValueIsInBytes ? "bytes" : "bits"}${J.bValueIsRate ? "_PerSecond" : ""}`;
          return S.Z.Localize(
            U,
            Re.toLocaleString((0, u.J)(), {
              minimumFractionDigits: J.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: J.nDigitsAfterDecimal,
            }),
          );
        }
        function $(d, r = 0) {
          let E;
          return (
            r && (E = { maximumFractionDigits: r }),
            d ? d.toLocaleString((0, u.J)(), E) : "" + d
          );
        }
        function p(d) {
          return d > 1e9
            ? Math.trunc(d / 1e9).toString() + "B"
            : d > 1e6
              ? Math.trunc(d / 1e6).toString() + "M"
              : d > 1e3
                ? Math.trunc(d / 1e3).toString() + "K"
                : d.toString();
        }
      },
      42577: (Y) => {
        Y.exports = {
          ClipDetails: "_3OZdTvCTb6CpiavJuyAgSs",
          VideoContainer: "_10C-FSg2FYguFXDoPyD78V",
        };
      },
      95896: (Y) => {
        Y.exports = {
          Dummy: "_2840rmUpPlQD_u2oirCKXu",
          Selected: "WvAtVArGoU9dj88kJb1G",
          HighlightIcon: "_3rt1qClyPaHAYiVwOSu9Xz",
          CustomMarker: "_3F_GfwciLV6y6FOEIe3_S5",
          MarkerBacking: "_1ft3M77d9XtBcrueBGrbGw",
          HighlightIconSVG: "nt4N5Hp8gRa3CnL6YpyKr",
          Faded: "_3G-TED_y5JFy9DHiymK5Cn",
          Marker: "_3GP2Yb1IBiNxW79A0_H-Q1",
          GameMarkerSVG: "_2FfQ96ZQOySW735_57yKby",
        };
      },
      64919: (Y) => {
        Y.exports = {
          GameRecordingPlayer: "_1AGqAVUQuj81DaUOKJ9Eon",
          Overlay: "_1PKb5jI6E9EN9uLLK030zW",
          NoVideo: "DaqWGn7r6dsiUT-0iSrbT",
          PositionAbsolute: "_1OoTISs44U6oUjpL0fTCLm",
          VideoFadeIn: "_3oLlzv-aDkyT4cHgaeENJI",
          PlayingClippedRegion: "_1j1-Ir0r57qAcNurF2Vw5Q",
          ClippingMode: "_8y8y6OQZb4pxeWWBVk3lJ",
          PlayerError: "_3ixlq8K1YVBNIk7rw190aK",
          Title: "_3jzI6mjmcbRqEVzPuCJYv5",
          Description: "_1jQ8TJZ3F4Ma6ZUMrMp0aa",
          Buttons: "_2eqwm-fL9OYKl0X03c1q_a",
          Button: "_2Jhopz5mqnwHwBUX9sMIGY",
          DisableButton: "rq1uEI9jHMgnF1LIsVsJg",
          PerfCtnVideo: "adSGJAq-6dCBUokBxFrBa",
          PerfCtnThumbnails: "_1Yw-S-TvqNOTTuBoAAYqse",
          LoadingSpinner: "_3O0u0sQlmSmP2MRXulRGEc",
        };
      },
      35009: (Y) => {
        Y.exports = {
          GoLiveButtonCtn: "_1Ssh6bcQcBm8T6zVNU48G2",
          GoLiveButton: "_1rZeqdwHzajXNoY-uxRgfW",
          IsLive: "_2MGnyLAWN4c3di_W6U3YWJ",
          JumpToEndIcon: "_2FkWFO_BAQnsWrQr-nHvEz",
        };
      },
      36890: (Y) => {
        Y.exports = {
          animationDuration: "2000ms",
          BannerVideoOverlay: "pV5fBzxs9g1gv7NhwtPdq",
          PlayerHighlightBanner: "_3oCX4-nEGyWSMenKIpdZvR",
          fadeInOut: "_2x2R_azPakYmQHIxM143Kw",
          BannerContents: "_3ToouRgOCIvXMYAgFoOZ3_",
          HighlightIcon: "_1gJnEr6txP9r5CBXTn9Gai",
          InfoBox: "_2Lk34fBX0K4eB8fylDh5cs",
          HighlightTitle: "_1PwzlJfUyycPZV0XiiKPGm",
          HighlightDesc: "_1UuG7uPwvt1zecZ8oGNxzu",
        };
      },
      76970: (Y) => {
        Y.exports = {
          animationDuration: "2000ms",
          RelativeTimeContainer: "UqMNRsT0TZjlt-9HTNH--",
          RelativeTime: "_3waN_JrfZ-gXKzfJxcuQcf",
          fadeInOut: "_1Tmc5_ehH_tlNlyTxyfSr5",
        };
      },
      99550: (Y) => {
        Y.exports = {
          LoadingTimeline: "_3AC5PeKRkSoB1JUS8LCinu",
          ScrollAndControlsCtn: "_1CYsmnIqkn90UQTVYK63be",
          GamepadMode: "_1wi1J1l41xYwh6lx7zH4Aw",
          Controls: "_1l2J-z02NZ7-HU23Bk7FwR",
          TimelineScrollContainer: "_3v-bzPuU4mVOvwvq1wX6Z6",
          ContentContainer: "_1Jjb0RXXDDj5JSQTNRIeRi",
          AbsoluteLayer: "_2F0d9JLSNH0gY26UBXIZYS",
          HideOverflow: "_2GDis70-E8G-El7mDlayt8",
          RelativeLayer: "_1xZCNiE6ZMwQsUHLh2y9t1",
          WithPointerEvents: "_12MLk3-t1rqZ33U6DiMKg1",
          RecordingDecorators: "_2PJGDULdt2ctu6R0EkUHPj",
          ClipDecorators: "tbss_z2HLa4Oa0yS4mGrb",
          GameModes: "_1Bh3PscPMEMGlegOtxPEWM",
          DateDecorator: "_2w-ta9UJW1Y73wRilaD9l-",
          BackgroundTicks: "xD30aylfCATSjNrytpUAm",
          Highlights: "_56YDWYPBkNJazWmgg83Sk",
          RangeHighlights: "s20SLnZnerU68G2dHOWRW",
          Timestamps: "xLUyqvUeXIgxuJpmmte1i",
          RangeSelector: "_2vqUVszLX8jrl8soNo84qt",
          SeekScrubber: "_3MV0K4aiJwcuWauL5dt6gY",
          PlayHead: "_37u67bibEd1DUyQFBTBNzb",
          Thumbnails: "_1pOPbtOaUeqeJm3nrdEkyx",
          PositionLeft: "_2lo44W-Sy4zMrYWnl55XBD",
          PositionRight: "_2tl3cTX_fsKtBrtcctB5wc",
          Phases: "_29M5GL7LdzPRq4bOtIu5My",
          ContentAndGradient: "XrJofUthOAZ7wCkD_C2fE",
          ScrollbarPlaceholder: "_1NhP7G104P9VPsp6bTxyBb",
          LeftControlsAndContent: "_1vc8f5bCHfDynpWgwyhf5m",
          ScrollGradientCtn: "rWNgVMPb6DEglMsLileNg",
          FrontGradient: "_2M09urev2z_0keBeRWlFsa",
          HideGradient: "_28_y-RUEZhJpt4in4Wyry9",
          EndGradient: "YzFF90kSvFzYRc4OndPpi",
          ScrollbarAndSiblings: "_34dlBrUZP054ElsvOp5hQm",
          ScrollBarCtn: "_1-ooPvEW2c6SHuhnz6SK3t",
          HideScrollBar: "N-WtiJTQNtp0Tzuw4BmgF",
          ScrollTrack: "NP3DlSRiWZygPWZSLSVX",
          PlayHeadAnnotation: "_32vHJA51iTnZgyk7drRCvc",
          RangeAnnotation: "_2cjQVZ5ycKyb79yPxB-Bms",
          ScrollThumb: "JffqXSW3actHr6hj8F9Sn",
          Highlight: "_1EGQ0DSJx5OOPFoNVz85oF",
        };
      },
      7450: (Y) => {
        Y.exports = { MouseListenerContainer: "_1t81JirfhcUdp7F73SUzQF" };
      },
      8959: (Y) => {
        Y.exports = {
          LoadingTimeline: "_3HMMNaShMT1M773fCgCd",
          ScrollAndControlsCtn: "gAhqB_Mx8V-7QYnzQP1eo",
          GamepadMode: "XkOPy2hiLaUWJsZVWC23u",
          Controls: "uwbPYSFyWCkcEbf3b5Y9K",
          TimelineScrollContainer: "II0EI3Ol8DvWt7FQfsNbx",
          ContentContainer: "_2eSQSp9u7_VDUDrCG4V-tL",
          AbsoluteLayer: "_2fti4qzLVbEydOmlw7A16i",
          HideOverflow: "_16Ta99sWFo7DNbWlpvpHRV",
          RelativeLayer: "_1RIfcMPhdua9IftpbJJAKq",
          WithPointerEvents: "_2Sk-Lj6jlDfehv6uuUa_Yn",
          RecordingDecorators: "NBc0PgdECgNGHybXMXgOp",
          ClipDecorators: "YBRVEhywfTRwb_vT9HdnU",
          GameModes: "_3vfGkbTjXUzSwr6b-v42JO",
          DateDecorator: "kakzXn3creKWdal1etpku",
          BackgroundTicks: "_3bRgOtndRhCrJpwTzd0Oim",
          Highlights: "LzHSWmJHomqtU-jTSLDEG",
          RangeHighlights: "_1NdyCSdtiQFvoBznqvarvN",
          Timestamps: "_36FQk5T4kMLr1axT-z3jAq",
          RangeSelector: "_3jnVEdXp155d_RQr3eZuyK",
          SeekScrubber: "_3x48wiJyAtvabHFlW4HWuo",
          PlayHead: "_3ckxIZyeOrSrQ775apezh2",
          Thumbnails: "_31eJnQyMpbmhp0mnHd02Ky",
          PositionLeft: "_1stnksokEwzIn10nHGDCEM",
          PositionRight: "_2f_ksFBRUllauZs4HA-bzg",
          Phases: "TaarLFX9W8lQiCjgz-nIn",
        };
      },
      59254: (Y) => {
        Y.exports = {
          LoadingTimeline: "JGGVRlj-AwNguh4wa7807",
          ScrollAndControlsCtn: "_2RzAySWe-9uzCJA9oGykll",
          GamepadMode: "_3lpEJRNBcA9EpAgLomD0jn",
          Controls: "HvZN6nroENhLkhniNutuR",
          TimelineScrollContainer: "_1cFVEeJk2np6JpMKYq0m9t",
          ContentContainer: "_3wqjsEPRzSGUpOgWYezV30",
          AbsoluteLayer: "_1vYBX3E1lB7wsdRdmsRSwV",
          HideOverflow: "C6chOG85M6_-hqwofg04b",
          RelativeLayer: "_1_XjIyiq_P7oZk4Aa3PZsk",
          WithPointerEvents: "_2GrriEvGl2vEPERHoIkg9X",
          RecordingDecorators: "T_GKyHV01N-0Mw4V9Q8N4",
          ClipDecorators: "_3jAa31iOtuHCYOt1cyYPHU",
          GameModes: "z3tClNy49hdbgj0NVx7R5",
          DateDecorator: "EiFtpT2NTMMovW9unJLGu",
          BackgroundTicks: "_2abPmFPmW_oPE349VO2TpA",
          Highlights: "_2_8rC82wthkPbfuHxBkHYk",
          RangeHighlights: "_2Lj8ZYpDL8HxfPJRXg0kgm",
          Timestamps: "_1e7MByQ-W7P_ftMx-4WcMV",
          RangeSelector: "_4kLbmnRkHeqUQus1ItdUY",
          SeekScrubber: "_23WuCkYUy41WcwdxqycJXb",
          PlayHead: "_1Zf0UX5Nyt7ZflIvx86a9K",
          Thumbnails: "Px56HgqgodVj1s1lELr9s",
          PositionLeft: "PftJQL7hFlMD6fyCmJ94X",
          PositionRight: "_3lMvwFfrxKrrjEOlUf7ov3",
          Phases: "_3CMHPm1gab4V9JTfZYAp1E",
          TimelineBacking: "_18sxaBKg910kJmmJS3zaaE",
          TimeTick: "faIAh3Zzg4MdulktB1IFo",
          TickLine: "iLLznzt7Npcsc-y_9tyCc",
          Major: "walQuMqIA1KE3_0tchqYj",
          Minor: "_2I5yeKjfnjaPmRNIpHUrl1",
        };
      },
      10564: (Y) => {
        Y.exports = {
          LoadingTimeline: "_1ZSym6hTh_XycEHZQv3waF",
          ScrollAndControlsCtn: "_1q95sqXb4oTj5LekKlUWqI",
          GamepadMode: "_1F4jNXOr-Gwt5oygH9F_mh",
          Controls: "z15TYuRsvRt6Li7EM3mM5",
          TimelineScrollContainer: "R0SGdHf8Z6rpbQGEf06ZP",
          ContentContainer: "_2XMJZ6Tb3zjNYuh91Il3rA",
          AbsoluteLayer: "_3AkqWv_vVG7IcuxTsw4FBK",
          HideOverflow: "qGvsK6jhx7uQrlMTQ6zSP",
          RelativeLayer: "_3zzAfZQcPSWB4Gj3tebKrI",
          WithPointerEvents: "_3z05uqMI8WeroTsIbWYYr0",
          RecordingDecorators: "TlW7mv6AQcJacn3I9Wcho",
          ClipDecorators: "_2HPd50upMLAGM4Ne2mOpIA",
          GameModes: "mKXM660QBtJ7Qy_5uNGdP",
          DateDecorator: "_1KAHyZKmBLACfUu9XXht0l",
          BackgroundTicks: "_1sDp4tXvu6KF6yaTe5Y65b",
          Highlights: "_3vFdT_Qdu7unGt0x2UBIOz",
          RangeHighlights: "P3bkvf7j3c-xSz6s7HtHY",
          Timestamps: "_3esOhQ7c-vdhQ6yUCny4aA",
          RangeSelector: "NMfai6QhLJB5lfGE-3T3o",
          SeekScrubber: "_3n81RbB8WDAKT_q_iUYF6P",
          PlayHead: "_1j_4JBYTjJZ3L044d9QjQL",
          Thumbnails: "_1a1mkc6mxngGs0scqTx8Rv",
          PositionLeft: "_3Tw8uk4rZfrmmyGfql1eTc",
          PositionRight: "_3OI9MLjE2183pXrrzjZlZ",
          Phases: "_1j2D4HXwIaWGBWeUeZiWve",
          ClipDecorator: "_3EWp_eWXsvKB-Lwz-Afl0S",
          gradient: "_3vAWnjV6c5oyReAPoGg-Ln",
        };
      },
      28361: (Y) => {
        Y.exports = {
          LoadingTimeline: "_3KG8zrhAf5BZd7OOkiM3Vn",
          ScrollAndControlsCtn: "_2Ox4l0Syi-OBMfeLLwGB0S",
          GamepadMode: "_1Nc3R34LFcFFu9xxGczIZx",
          Controls: "_1S92sYYyOl3-hAGUyKk3mT",
          TimelineScrollContainer: "_2yvt6-n0jndik9woSi9oiV",
          ContentContainer: "_28oA65JjmGpgktil_Spx8V",
          AbsoluteLayer: "_3RYVNG8TM3G95eG8DCgVCb",
          HideOverflow: "_1kDYn7vvEbKlU7Z4VfveI8",
          RelativeLayer: "_189IQalI-kinGc53wY8Btm",
          WithPointerEvents: "V18cwfJ6UCohOoz26FN68",
          RecordingDecorators: "_2u47IazTp8la3TplHQ4uMB",
          ClipDecorators: "_2LgpdbDk3onwK4JvCZ39GV",
          GameModes: "_32FUOpVgoy1QDT7K79IbqA",
          DateDecorator: "_3I1C0omMrwDJGYMspB33xc",
          BackgroundTicks: "-YJsXiYQ82zAY6sIPD-Z3",
          Highlights: "_1YMPrXbYXRhzivMd0RAOk-",
          RangeHighlights: "MxB0pCFqE_x6FHJiO8vGU",
          Timestamps: "_2GK8qqQxwH2_oWzF5rDbv6",
          RangeSelector: "pUP4yzI_BrVbBm7Bv9_ta",
          SeekScrubber: "_4LzfJqGOGDmemv2y4TUvS",
          PlayHead: "_7tgJLenOXLuiHf4FQsal-",
          Thumbnails: "TulKT7sbANoIafI9_KJza",
          PositionLeft: "_2g51I5QZegiV94lHBGsUhw",
          PositionRight: "_1AQnsvHDMaK1BJGY5kAcTl",
          Phases: "_3rPpP9lH-E-fnlD-DUERH3",
          TimelineRelativeDate: "xYXziACgvkSwOnjGsjrll",
          Overlay: "c1Fn5e_N42Q5Oz4gyqRvL",
        };
      },
      53298: (Y) => {
        Y.exports = {
          LoadingTimeline: "ALhsP_3HUfx4PHrpqy8R9",
          ScrollAndControlsCtn: "_5tbL0FKI0tuPTIa9Kh7Eo",
          GamepadMode: "_1dlSZNEhvmBeFco9nqqgCu",
          Controls: "u1VLCsRiWRO141U_KrOsN",
          TimelineScrollContainer: "_2IbHVvHaXnfviOahuULDQE",
          ContentContainer: "_2akKkTmA-GSqjV0ZuWZrxH",
          AbsoluteLayer: "_2e4HsYQIYWCzm4AUpHqlD2",
          HideOverflow: "_2Cp350sAx9clmoB_LKnqbp",
          RelativeLayer: "_124G22Z6qukxV-0yFjpk6h",
          WithPointerEvents: "ZoJ5cv5eX5Scw_K3FbQVA",
          RecordingDecorators: "_1b3xBvE7bRvkHIrvljgLJb",
          ClipDecorators: "_12hX8NvmhU3g8lrWcYZmia",
          GameModes: "_1w4ECxgpqgm_8JHSj5S_ys",
          DateDecorator: "_2_LxF0wGALV2Jtr6yimHGW",
          BackgroundTicks: "_1wC4nFbVKj98NDRuVnW2DK",
          Highlights: "_3Mwk0XzURhRyn-iKASG7Yj",
          RangeHighlights: "AwYHl8RlppVEH0g3dKMjP",
          Timestamps: "_2_I_TyIeQdR-V7l562aVwJ",
          RangeSelector: "_2509eCzShezVSGfZFWi9BW",
          SeekScrubber: "_3Re46KW-L5PLoUYxCq_k6W",
          PlayHead: "_3BW9NlhX6WYWHXM6WNBI54",
          Thumbnails: "_3WC2e0zUqP5LoUxckgI6Fv",
          PositionLeft: "m29ndF7OUcWuJyQ7gz0r9",
          PositionRight: "_3scLcN4HvBYNivCKDSVIGj",
          Phases: "_25KI7BuIZxgifkWKhYIy4m",
          GameModeMarker: "_XZRbjOovnp3-oJB1FHsX",
          Playing: "_1QXuDX8p22dW30Dq7Q4cY1",
          Staging: "_5elfnsld99d9XPrRSVVMb",
          Menus: "_2ouy5ehbuCra9zvvJVRt7N",
          Unspecified: "_3tV_P5UlKOy23ovyof9BCG",
          GameModeMarkerClip: "_2X0XBzWywYh06tLOpEVVhV",
        };
      },
      41972: (Y) => {
        Y.exports = {
          HighlightContextMenuItem: "_28S8ry9bxlwML-iCsdsuB",
          MenuItem: "JZCa05wXidmR0BEW4wKuT",
          EditMarker: "sMTceKd747vq8bsuL3OW9",
          CreateClip: "_1xK5Up775-kzkarHJyaUSH",
          DeleteMarker: "_1HITbDUgqbAsnVISlw-IU4",
          ViewScreenshot: "_2HfiRMT1mpZZy-Op04_Vp5",
          ViewClip: "_20E0pQUHwdjs6eM1Ow2GiS",
        };
      },
      23533: (Y) => {
        Y.exports = {
          LoadingTimeline: "_2i7CkGHUrVZKOMEsrhI1p_",
          ScrollAndControlsCtn: "_3fITrWggW83OcggiMJdPz3",
          GamepadMode: "_2hCXeP62uQrMldE08f-mjT",
          Controls: "_1EiX3eLLYicyYcDHtIM6_s",
          TimelineScrollContainer: "_2RYEV5Q8tyI-Z488xqMdJh",
          ContentContainer: "_2lWpy5QzYnH2pWhRjUASJL",
          AbsoluteLayer: "_3wd1JlZa9wOIFFMqdVmsh8",
          HideOverflow: "_2PTM3ppOv1W0jPmlXV9zeK",
          RelativeLayer: "_237IHLV36I9F3GAeSC3Ast",
          WithPointerEvents: "sMhiTRaHJInFdVQZ6J0-m",
          RecordingDecorators: "_3S9aExsAjU_DTaDbMIj5i9",
          ClipDecorators: "_3sy9QqiqMextSXnKc1AMAN",
          GameModes: "_2zfITr74kyUJlBfMyJLgnn",
          DateDecorator: "_2ad7ZMfcbWLopAqjoc1dQy",
          BackgroundTicks: "_2rdq8jGEzjIT8wAFNFhiYQ",
          Highlights: "_2MKxDzVJV5-FqyH991s2MT",
          RangeHighlights: "_2pwNSvaiG6OMTbuF-NyeqL",
          Timestamps: "_1BmX-E7ljnjRC-DwV0vehq",
          RangeSelector: "_3Kw_btjCsTccf081ReOvQp",
          SeekScrubber: "lP4qnNu-VBcvUzlXNQtyt",
          PlayHead: "_3pAXAVoqYOE6IKmH5vVcvy",
          Thumbnails: "_26VL6vWz_H-HdOIX-WB1NV",
          PositionLeft: "_1UQilx5P8cBrDKId9y9Zml",
          PositionRight: "vmWKsPz2yK9DdAMmGopBd",
          Phases: "_3hNl6_lWZBob973Eyo8tN7",
          MarkerAndDropline: "KxkV7ibv4HxiLzsJDo09y",
          Faded: "_2YIhgvCldNrTquf5YdDweU",
          NoPointer: "_2ebcCpkh2QhQIrtDjawNTL",
          TimelineMarkerCtn: "_1Dg_c4LTkbyiG_03VDAsQE",
          TimelineMarker: "_2CNnKSqRD_9z5U0Knq2yjM",
          DroplineCtn: "_2KKJRZF-_QAqfpR0e-20x6",
          TimelineMarkerDropLine: "_3JsMmXCkE-NhKNzxarPwuc",
        };
      },
      62745: (Y) => {
        Y.exports = {
          Positioner: "r5C4vqop5qm8LQK3X0ko3",
          MouseWithin: "ew9abErxuaHlGCMzkyeWJ",
          Highlight: "xk10sVHcF-iepUcNGM7xL",
          PhaseHighlight: "_2sP2GHDIcIT3HmoJT5xGlA",
          Body: "_1hlTgJwbrd9u_brCsEsT0N",
          Edge: "_3_tErLe8CNqRhYf0vAfb-t",
        };
      },
      5540: (Y) => {
        Y.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_2X7jhW-qi_3UccesLWrrSi",
          ScrollAndControlsCtn: "_3NY57YPlBtVmbManJByw3B",
          GamepadMode: "_3LWcSQg02x6_mKFAC2HnOA",
          Controls: "_3iXWpF78DL2KpP8zwC0a0D",
          TimelineScrollContainer: "_3A2oPv5e_smY5BRZYb44oC",
          ContentContainer: "_37F8Twe4-MEGnPuMdrRjdV",
          AbsoluteLayer: "_2TPYTXJ5LTahFqYyrgyybY",
          HideOverflow: "_1GDbd0Ag6dx77g7HNg9fjA",
          RelativeLayer: "_1Gp1jY_vrVhkryDDlAy5XA",
          WithPointerEvents: "_2Wca3Yup3sepGJyb3yB9Wx",
          RecordingDecorators: "_2yAWbzlcRBmXGKBJxO5Q6K",
          ClipDecorators: "_1vxxhyF1HrGzKc8R-wGDGw",
          GameModes: "_2W6eCuNryz1pMcGhYEyFag",
          DateDecorator: "_2XW6UMjMH0uXl0q6gIOKs7",
          BackgroundTicks: "_3Tt6WBdl000PCM7C2kwD2c",
          Highlights: "_1epMF6kwn7KeUBakQKPhCm",
          RangeHighlights: "aRAHUpKDR27OMcL2xHCSC",
          Timestamps: "_2of-NiJ1-JIp_fPSufxZJ3",
          RangeSelector: "bBVOLxbX1EUhwt_Oez4GK",
          SeekScrubber: "_1c_f2oDp_5tIKiGQcvboIB",
          PlayHead: "NAXFU_K2NP9xmH2cnITpG",
          Thumbnails: "FNvG_yK3LCIcUTGSfMhVP",
          PositionLeft: "GECyynaguvZTc6_17XpFd",
          PositionRight: "_3Rwz0Dale6Fxyu3k2khbuf",
          Phases: "_xSGH0PVjr0l8tuXz9-3f",
          PlayheadInteractionCtn: "_3_VTfkSR95EXQBQCvfM-ua",
          ActiveCtn: "_2bsFx5e6IWGwk1Smh_yRl",
          PlayHeadContainer: "_2RtcuI1Wk2JRTn39xig3OS",
          TooltipSource: "DgGCjpjgZ28PDlwxsTwCr",
          Active: "_3N6L28ckYs_8Z7u62KJCJV",
          PlayHeadContent: "_1zm_aVI1mDMkbM_o1um30R",
          PlayHeadCurrentTimeContainer: "_38jg4bQlW8Tyygoswt3epd",
          NoPointer: "_2qwplD-OoJ3_iLfl14eORi",
        };
      },
      14296: (Y) => {
        Y.exports = { RangeHighlight: "_2a4wDhcnXixHXxFFvpLGbe" };
      },
      2508: (Y) => {
        Y.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_15xYd1duz4CX9ojFz0CE0r",
          ScrollAndControlsCtn: "_39WVqvqzprHCxsDbq6RIVi",
          GamepadMode: "_1iVq_Vso_g-hPu4I6clDcI",
          Controls: "q39fhjQv3o2GqRMkZeGeA",
          TimelineScrollContainer: "_2Ns82DABvcHzpa7h2Z1yN0",
          ContentContainer: "_2flM04qSQgffE6G2_pghpT",
          AbsoluteLayer: "hPYovdeG0fnX79y5Lq6i8",
          HideOverflow: "zl42_yRu36YJmTpwkrll3",
          RelativeLayer: "wxj4IaR3D-7lPHenwnyaS",
          WithPointerEvents: "_2AobDyHPf2lTm9ZzZIsGop",
          RecordingDecorators: "_1hCGwoXgxZG5aIyUcumoan",
          ClipDecorators: "_1d_mX4rNoLcSBlpCOOZ9d-",
          GameModes: "_26Bbv689gSTq0MjmYL-Y6Y",
          DateDecorator: "_2BqCIYg1x7daCu3oF0vicq",
          BackgroundTicks: "_2YoyAw0aHd57nTMyCX8Ek8",
          Highlights: "_2hsueyKwIwA6dgxRFhAuEw",
          RangeHighlights: "_3eoxS78PdZxxZaBBmdJDZB",
          Timestamps: "_3O3iRzw4rwhbFvTKLV7s2J",
          RangeSelector: "_2gSg55gNLQhpokogPcJ-As",
          SeekScrubber: "sTaCR323nQeC8QrAQW3Cr",
          PlayHead: "_3Ra6BfYOEPCrvdKvrXpd2i",
          Thumbnails: "_7KwbBvSEcjyRsmZ0g6j6z",
          PositionLeft: "_27IW3T5nky75Oz6a17zWSg",
          PositionRight: "xf_NxJ83twPRPic2nUu3s",
          Phases: "IIuLWvFELtrtCRCvRlpo",
          RangeControls: "_3TsJzrPgtC5rqLcR6ihpFi",
          RangeSelectorCtn: "_2ULjGYMNYTiUllQtzFXS11",
          Active: "_2bFlccGjBmvO9sTXH-UhId",
          InactiveSelectedRangeControl: "_2uX26Fo_kmE4ZR6JmKQpp4",
          SelectedRangeMask: "_2C2hWRks6sMz8e9rdXj_BH",
          RangeIcon: "DTarGRkLfmPhdBVfdlNIf",
          Hide: "_2OktuE6gQcRmHdDbzj7AzW",
          TrackRangeControls: "_1xinhHBSWQ2oYszkzt2zrt",
          RangeControl: "_106ZAEQ05s5XGwxAQ4k_W6",
          RangeMask: "_1SW3yTh55ykBnsHiBzIQFC",
          FullMask: "HBfBmaVuNVcfkTcAqMJdE",
        };
      },
      78760: (Y) => {
        Y.exports = {
          LoadingTimeline: "_3tH-UmmBxFZv85a4VmjR83",
          ScrollAndControlsCtn: "_3EGBZkS2chHJ5KaKxGam9e",
          GamepadMode: "_3Wahmr7e1VA6i9w9Iq0-Vg",
          Controls: "_3nrFGW_JIvdhMPBQvVaqby",
          TimelineScrollContainer: "_3vqWS2_hdUvKZO0Vipm-Pa",
          ContentContainer: "_2_mqytSivE2wDjb0DQRqEp",
          AbsoluteLayer: "CiFLrniSN_egwVrtxdvwm",
          HideOverflow: "_2BoIL1h7HxeuUr9oEBJu5e",
          RelativeLayer: "_3obgM4lCFV2Ggqbiz0HJZX",
          WithPointerEvents: "_1e6-Zdv13LsrP3qEPoBDr9",
          RecordingDecorators: "_3l9q4-8eUf8mm3ml4NZ-9m",
          ClipDecorators: "_1HU0h3xOeCJtdhA_ieKKsf",
          GameModes: "_2FL-NrMawaFVKSgQr2NRu7",
          DateDecorator: "_2bCxb7i3bzq1DCZWl04h-n",
          BackgroundTicks: "_2UfqYYX9g4-SFlozy19diE",
          Highlights: "_2iZX0eAmOssSWzNwVW2Sk2",
          RangeHighlights: "_1aNkPwMsxHkCpTJ3zueNmV",
          Timestamps: "_2TfF2B8IJjQO4cxcYnzNv-",
          RangeSelector: "wMeTvFQex5TV0NsHdu1En",
          SeekScrubber: "_1x23j31qyK2ov8527ywrtY",
          PlayHead: "_3hU0qsPL5AdwVbmHfPQjz8",
          Thumbnails: "_3U1E2lH8PHXEKmmCidFYET",
          PositionLeft: "_3a7NFvp83NwS--Uea7c18J",
          PositionRight: "_2aWYEMKtLLTVAg5lTA30Du",
          Phases: "_2HWX2m_BjCepXubvHC-OBI",
          RecordingDecorator: "_24zNSxRiQlHxbGT_RvZsoY",
          Clip: "_3Q-H1_vR-NtTfQf_Ohljdx",
          ClipMode: "_7MCqjcHde47TGpwTMEK5",
          Manual: "_1kfoF8deRCDIcTe5l3oplt",
          RecordingDecoratorClip: "_3d4VU3BdaG9Z5sL2fNq_xy",
          LiveRecordingBuffer: "_3PHrI-zb5iHRj5OfLEwEc0",
          IsLive: "_1kxbPOC7CK5DmZi9fZLfUl",
        };
      },
      36616: (Y) => {
        Y.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_3Tmq42XNJAOKkmYYNLwhYt",
          ScrollAndControlsCtn: "_2zSlRD5EZdNkxEXqxX19xj",
          GamepadMode: "_1iEsh140l3SOV-CHmx1gPK",
          Controls: "_3Sigu8Ua4QhAoaSILhJjnk",
          TimelineScrollContainer: "_36TGeLVHkkcngviDfI1e3w",
          ContentContainer: "_2mJpXt1qXS1THVBTX6wQIh",
          AbsoluteLayer: "_1hyNg-11fi93ggy44EPp0D",
          HideOverflow: "_1IkW2bCIFdXrtYpOKZJT78",
          RelativeLayer: "_1RLJoHOySeNow6t6Gb4q2I",
          WithPointerEvents: "_1o2r-Bw4voSyttJ2TnlIMF",
          RecordingDecorators: "_2qcUYqRha1_HKm_YVHzDFf",
          ClipDecorators: "_3qqUOckgF-Vne9B37h2VNV",
          GameModes: "_2K3UBqeIoBHg4LbvxflBnI",
          DateDecorator: "_2BEmrgSvLIuVLtOq4uyk-b",
          BackgroundTicks: "WbVOga7uck_kj9-xd1ZBj",
          Highlights: "_2nvnMUT2DtnJcH1Rlz3i04",
          RangeHighlights: "_2PKtguqz5iQChuLNLyEq-9",
          Timestamps: "R3B96ZoLAEXfwE5F5VAlS",
          RangeSelector: "_3DWyeaU2HR8tgw6IYQIrF2",
          SeekScrubber: "_2wVY5UH9H5eVSyRfPhgV10",
          PlayHead: "_3knz_EuOFUYwJ-8OisxbLi",
          Thumbnails: "JjnuXWzLmCm63Y-6KipH6",
          PositionLeft: "feeCzNA4u_b9e5tzS9oa6",
          PositionRight: "_1uGyz62lktHAb9_wh3QEUn",
          Phases: "_2wzBXR-nPbsfwcRPnqJ4yk",
          PlayheadInteractionCtn: "cxkAkBK32ah0etQ7VXfDI",
          ActiveCtn: "_3HMQwpcr66jg7N3RW9U4r1",
          PlayHeadContainer: "_3Fg3Bef5dt1s1SK8yzivuJ",
          TooltipSource: "_1zTEVuta8tTd1Iw-c1Ea-N",
          Active: "G8XiKETNpSUHoyKM8T3QA",
          PlayHeadContent: "t2rs722c_hdaOG6MWrVhD",
          PlayHeadCurrentTimeContainer: "_1BM_Z8Iu_1o-aPNlOB8DYa",
          NoPointer: "XCAfYcKute_vaG8jbwVAr",
          RangeControls: "_2ylJ735myBUxj8mYp92MQz",
          RangeSelectorCtn: "_35GmRrlfGhrO_6QVFR0Wi7",
          InactiveSelectedRangeControl: "_bKQMA7pDeFEDDAbdgdNg",
          SelectedRangeMask: "_3PO0lBzzlKrUN85s6-CJmt",
          RangeIcon: "_3H1CUoiDPdbAQs16z1Zc5X",
          Hide: "_1YPpCzSDkjW9CznvJ-t8ze",
          TrackRangeControls: "_23YDdZ4YDQPRZOCaKwscyh",
          RangeControl: "_3Z9hkuB9-Hmn5_8M48FE01",
          RangeMask: "Cr2MdFPZcaH4sJctAG6Gl",
          FullMask: "_3qoMxbpjei5WjkAOyagCpU",
          GhostPlayheadCtn: "_2QEZwA3q0IO62G_BU-Drbn",
          TooltipHoverSource: "_3GHTkEg295xMBJ6usRbh45",
          GhostPlayhead: "_1NsKSV4XAmywc3NCkOdJEq",
          Show: "_2rHDnc8CHv56EKtuTCKszw",
        };
      },
      48419: (Y) => {
        Y.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_3Q5mItz1omGnn-T1D3hSx6",
          ScrollAndControlsCtn: "_1fH0OLSeGlehC7ZroCzqe9",
          GamepadMode: "_2t0z1NBG3JkzrwgVIk_P3W",
          Controls: "_2LpY_Ns-dcnT5PHQQLiXPp",
          TimelineScrollContainer: "_1q2QlUl7dhMQoUemqokVst",
          ContentContainer: "cUBJWpslwHW62w7LbnL7c",
          AbsoluteLayer: "_1pSOlypnO47E0bAGUg8vzb",
          HideOverflow: "_2hT8Akt7q9EZvx2C0IFuRR",
          RelativeLayer: "_3zkquJ_VVnjp1lWbN1tTxS",
          WithPointerEvents: "_2KJPu1BcFSB6UeyCGC1Q9l",
          RecordingDecorators: "_2lJHaMtseWGNtKzez_c-tR",
          ClipDecorators: "Xqf7VLN_JqMJeMe-gjyHj",
          GameModes: "Z9nyGreF6wFTFgKjwuTur",
          DateDecorator: "_1H35HfLIngfg1Spx8-se-m",
          BackgroundTicks: "_2Qp-oYu2NVGRgnr-MnIi2c",
          Highlights: "_1pFb1qr2LgVW_Epi61zjiM",
          RangeHighlights: "F3-cbznHCNkLM3OoAmQEK",
          Timestamps: "_3fHbNOeEXYFGE31WD5XnOr",
          RangeSelector: "_3ovQqX7ALXvRC1ekegy7Lf",
          SeekScrubber: "_3YSduxpL8KnXHYHJkjuwvv",
          PlayHead: "_3uZ7PVoL2PO3WBpvCAnoK9",
          Thumbnails: "_2ZT_p0F8NlyiN2w9uK0V-8",
          PositionLeft: "_2dupDWRctKjVqN0z4s0oyR",
          PositionRight: "_1PDRoz5nG__plPLMJYlHLW",
          Phases: "_26bhPWtFCbtjxSwlbSIltM",
          TooltipOffset: "_2dYuDsUYCHiGRqSksoc2iU",
          ThumbnailContainerOffset: "iJ-nnbMoplnO7sW4GoKZE",
          ThumbnailContents: "_1p6K1C-xCaggsPiZeYS6xb",
          Hide: "_1IGjtF0VQplGgo8JQKuoMP",
          ImageAndInfoBoxContainer: "ke2xSKYvfY9kTFlZgvXyx",
          ImageContainer: "_16W4iNZCkRy5g-01USxzcp",
          ThumbnailImage: "_15YmEFGejPCWqJsgZIwIHh",
          NoRecordedContent: "_2oSbwmF9lRWp2wTpQ2BTcr",
          InfoBoxContainer: "_39hE1ouldA7027OOjS1Mgy",
          Header: "_1RvdZuUvhMBHThLFwYwITy",
          Icon: "_3ALDTTrBPXnpHpt1yU52k3",
          DescriptionBlock: "_2WNbTb6IIvTgYqRePMVYqW",
          Title: "_2xgQkBo5Tkz0utecycIdA4",
          Description: "_3wvMa5Sd15895W_3Q3Fyfx",
          ThumbnailHitBoxPadding: "_25m6SU3qwK58gHr_sKPaUm",
          Overlay: "_1F33WqZYbfSW5lvdSEZL4I",
          TooltipContents: "_1Q9Po562tX-Vtgo2NWXIw",
          TooltipChildren: "_2T0U4DTFWI5h9xaeZagxLF",
          TooltipImage: "_1xD6jfVHbDjGwO77Svhkcv",
          TooltipImageCtn: "_1v_O5vtQFICye0ocFetnId",
          ThumbnailTooltip: "_2Z4RGgTd1bRpgdwEhO8jCU",
          Highlight: "_3a20-bJDPDlu4mazQECyx5",
          TimeDisplayContainer: "_3d8jwG8NBfQYTwkZ0OxQJp",
          Playhead: "_2n75OrROEywBwiWw2aHhTK",
          RangeLeft: "_1gO9xZ0-LFtgn8qA4tyXYr",
          RangeRight: "JDbwFLFfYMT4xQA-bQ9Ko",
          Timestamp: "_2lPBQbxG1oIaw3OCRbqSwX",
          TooltipInteractionRegion: "nbJB1LiguVOaBnJGRVnl7",
          StateDescription: "u04UCICvObTJ4FUr9RQen",
          TooltipButtons: "_2__OPNuJ5jPGfN7LuKW-Qw",
          Button: "_15dYncysqGpt47Cy4LxDu6",
          AddMarker: "_1U3RGrxKiDB_p4u4cKiixk",
          GoToClip: "_38jzRyjtRvySB27qxc3OlN",
          CreateClipButton: "_3KYRSKclWw-y1WSWZZ0NdW",
          EditMarker: "_2ho8quLzRrIUiJRPbr8lzp",
          DeleteMarker: "_113MCALzgYpL4lDc_eE542",
          GoToClipFromMarker: "_1HHxKvMUEWqDdSy1BGBnyK",
          ViewScreenshot: "Id7gML3NYais_DAVYP7LW",
          TooltipHitBox: "_2QbChk9tpXisnWlJFH0Igj",
          TooltipContainer: "_1sw-kUqdIDK2G5BlOu_Dm9",
          ImageHighlightPosition: "_2ywONE_xgamAkfBmUE67IL",
          ImageHighlightBlock: "_1BeXpXQyetKgeO2_6NuHiJ",
          TooltipRangeContainer: "Ytt19E3fOLhHsFDpTCviL",
          Duration: "_1kvsGVxJZ9tkKXwysVa5PP",
          RangeIcon: "qV2yorV1nAB0bIQrbROqm",
        };
      },
      54637: (Y) => {
        Y.exports = {
          TimelineContextMenuItem: "_1_VGcqhwscnT-kPnPb2c22",
          MenuItem: "_1wPm9-zsQlqLzb92eR77lC",
          AddUserMarker: "_3VSFddY_9-Sh1I3ByUwmD4",
          TakeScreenshot: "_13th0aVaGQhNp6eltjFYyh",
          StartEndClip: "_1eb1crSvl4J1Ie12OvhHUz",
          ViewClip: "_3YpMycJiNuGZOe9A5ddrxL",
          ClipPhase: "_3BLSZg3UyXhaQ4rkXaTvhs",
        };
      },
      2596: (Y) => {
        Y.exports = {
          "duration-app-launch": "800ms",
          TourPositioner: "_3SETpnYbAtvmO7w4gpOCtK",
          TourBox: "_1lcizT_Nbxsk484XzTtcFf",
          CloseButton: "_1A5Qloms_qv3D5xh052LKf",
          X: "kcjJIs0EE3MG_h_t5nCza",
          Title: "_51Xf1tIa1NCIih20Qi1Nm",
          Content: "_1iiz2Ocj1OAe9wZjdPrZSv",
          Action: "_39eWK3BcJKYP9H1X1cTdyV",
          TipCount: "_1T5ZuXrxnGb4BDtEbYTuGz",
          TourStopArrow: "_2JvQPEForHWVgljtxxAwRP",
          BackgroundAnimation: "_15yvWK6GCakW5yZ0YB66fv",
          "ItemFocusAnim-darkerGrey-nocolor": "Eu2HOvMbunn7MzCLIJ5ES",
          "ItemFocusAnim-darkerGrey": "DvP1wiF6eV9afdQaEkods",
          "ItemFocusAnim-darkGreySettings": "_2MNkLvIOgwx0GSMCjDlkL8",
          "ItemFocusAnim-darkGrey": "_2tQsBdyAzzF2_nY65OSwNm",
          "ItemFocusAnim-grey": "Qg-4WEghuaXqBRIE-lEVs",
          "ItemFocusAnim-translucent-white-10": "_18ENJxMfn40_y_8CMeuuMm",
          "ItemFocusAnim-translucent-white-20": "_1wbIEe3KnohwpAw2O4M9YP",
          "ItemFocusAnimBorder-darkGrey": "_3hC5OOIGfv0lY8ykI4qpNa",
          "ItemFocusAnim-green": "_3ZDnxVKI3Xfr_a6bvaivKR",
          focusAnimation: "_2KA789f9Y4_LCtoyqU3FM3",
          hoverAnimation: "VH09gZfzWmSxuuocDY_-n",
        };
      },
    },
  ]);
})();
